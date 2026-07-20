"""抓取层:拉 RSS、去重、过滤、按优先级打分。

设计原则:
- 单个源失败不中断整体(网络抖动、feed 改版是常态)
- 优先级关键词命中即强制入选,不参与淘汰
- 去重用标题指纹,跨源同一新闻只留 tier 最高的那条
"""

from __future__ import annotations

import logging
import re
from dataclasses import dataclass, field
from datetime import datetime, timedelta, timezone
from typing import Any

import feedparser
import yaml

log = logging.getLogger(__name__)

# 雅加达时区 UTC+7
JAKARTA_TZ = timezone(timedelta(hours=7))

# 印尼语 + 英语虚词,不参与去重指纹
STOPWORDS = frozenset(
    """
    yang untuk dari dengan pada dalam akan telah adalah ini itu dan atau
    the for from with into that this and but has have will was were are
    baru soal usai jadi kata terkait tbk persero
    """.split()
)

# 常见缩写归一化:同一实体在不同媒体的写法差异
ABBREV_MAP = {
    "mk": "mahkamahkonstitusi",
    "mahkamah konstitusi": "mahkamahkonstitusi",
    "uu": "undangundang",
    "bi": "bankindonesia",
    "bank indonesia": "bankindonesia",
    "ri": "indonesia",
}

# Jaccard 相似度阈值:超过即视为同一新闻
DEDUPE_THRESHOLD = 0.55


@dataclass
class Article:
    title: str
    link: str
    summary: str
    source: str
    tier: int
    lang: str
    topics: list[str]
    published: datetime | None
    matched_keywords: list[str] = field(default_factory=list)
    score: float = 0.0

    @property
    def tokens(self) -> frozenset[str]:
        """标题的实词集合,用于跨源去重。

        不能用前缀哈希:不同媒体对同一事件的标题措辞差异极大
        (例如 "Mahkamah Konstitusi terima uji materi Pasal 50A" vs
        "MK Terima Uji Materi Pasal 50A UU P2SK"),前缀哈希会漏判。
        改用实词集合的 Jaccard 相似度。
        """
        normalized = self.title.lower()
        for src, dst in ABBREV_MAP.items():
            normalized = re.sub(rf"\b{re.escape(src)}\b", dst, normalized)
        normalized = re.sub(r"[^\w\s]", " ", normalized)
        words = normalized.split()
        return frozenset(w for w in words if len(w) > 2 and w not in STOPWORDS)

    @property
    def is_priority(self) -> bool:
        return bool(self.matched_keywords)


def load_config(path: str = "config/sources.yaml") -> dict[str, Any]:
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f)


def _parse_date(entry: Any) -> datetime | None:
    for attr in ("published_parsed", "updated_parsed"):
        parsed = getattr(entry, attr, None)
        if parsed:
            try:
                return datetime(*parsed[:6], tzinfo=timezone.utc)
            except (TypeError, ValueError):
                continue
    return None


def _clean_html(raw: str) -> str:
    text = re.sub(r"<[^>]+>", " ", raw or "")
    text = re.sub(r"&[a-z]+;", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def fetch_feed(feed_cfg: dict[str, Any], lookback_hours: int) -> list[Article]:
    """拉单个源。失败返回空列表并告警,不抛异常。"""
    name = feed_cfg["name"]
    try:
        parsed = feedparser.parse(feed_cfg["url"])
        if parsed.bozo and not parsed.entries:
            log.warning("源解析失败 %s: %s", name, parsed.get("bozo_exception"))
            return []
    except Exception as exc:  # noqa: BLE001 — 任何异常都不该中断整体
        log.warning("源抓取异常 %s: %s", name, exc)
        return []

    cutoff = datetime.now(timezone.utc) - timedelta(hours=lookback_hours)
    articles: list[Article] = []

    for entry in parsed.entries:
        published = _parse_date(entry)
        # 无日期的条目保留(部分源不给日期),有日期的按窗口过滤
        if published and published < cutoff:
            continue

        title = _clean_html(getattr(entry, "title", ""))
        if not title:
            continue

        articles.append(
            Article(
                title=title,
                link=getattr(entry, "link", ""),
                summary=_clean_html(getattr(entry, "summary", ""))[:600],
                source=name,
                tier=feed_cfg.get("tier", 3),
                lang=feed_cfg.get("lang", "en"),
                topics=feed_cfg.get("topics", []),
                published=published,
            )
        )

    log.info("源 %s: %d 条(窗口内)", name, len(articles))
    return articles


def score_articles(
    articles: list[Article],
    priority_keywords: list[str],
    noise_keywords: list[str],
) -> list[Article]:
    """打分并标记优先级关键词命中。噪音直接丢弃。"""
    noise_lower = [k.lower() for k in noise_keywords]
    kept: list[Article] = []

    for art in articles:
        haystack = f"{art.title} {art.summary}".lower()

        if any(noise in haystack for noise in noise_lower):
            continue

        matched = [kw for kw in priority_keywords if kw.lower() in haystack]
        art.matched_keywords = matched

        # 打分:关键词命中权重最高,tier 次之,时效再次
        art.score = len(matched) * 10.0
        art.score += (4 - art.tier) * 2.0
        if art.published:
            age_hours = (
                datetime.now(timezone.utc) - art.published
            ).total_seconds() / 3600
            art.score += max(0.0, 5.0 - age_hours / 6.0)

        kept.append(art)

    return kept


def _jaccard(a: frozenset[str], b: frozenset[str]) -> float:
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)


def dedupe(articles: list[Article]) -> list[Article]:
    """跨源去重:按标题实词的 Jaccard 相似度聚类,每簇留分数最高的。

    同一新闻在不同媒体的标题措辞差异很大,精确哈希会漏判。
    FATF / 50A 这类线索恰恰是多家媒体同时报道的,漏判会让一条新闻
    吃掉整个 5-8 条的配额。
    """
    # 分数高的优先做簇心,保证保留的是 tier 高 / 命中多的那条
    ordered = sorted(articles, key=lambda a: a.score, reverse=True)
    kept: list[Article] = []

    for art in ordered:
        is_dup = any(
            _jaccard(art.tokens, existing.tokens) >= DEDUPE_THRESHOLD
            for existing in kept
        )
        if not is_dup:
            kept.append(art)

    return kept


def collect(
    config: dict[str, Any],
    lookback_hours: int = 26,
    max_candidates: int = 40,
) -> list[Article]:
    """主入口:拉全部源 → 打分 → 去重 → 截断候选池。

    lookback_hours 默认 26 而非 24,给周末和时区留缓冲。
    """
    all_articles: list[Article] = []
    for feed_cfg in config["feeds"]:
        all_articles.extend(fetch_feed(feed_cfg, lookback_hours))

    log.info("原始抓取 %d 条", len(all_articles))

    scored = score_articles(
        all_articles,
        config.get("priority_keywords", []),
        config.get("noise_keywords", []),
    )
    deduped = dedupe(scored)
    deduped.sort(key=lambda a: a.score, reverse=True)

    priority = [a for a in deduped if a.is_priority]
    log.info("去重后 %d 条,其中关键词命中 %d 条", len(deduped), len(priority))

    return deduped[:max_candidates]


def check_feeds(config: dict[str, Any]) -> None:
    """体检模式:逐源报告存活状态和条目数。先跑这个再上线。"""
    print(f"{'源':<38} {'状态':<8} {'条目'}")
    print("-" * 56)
    for feed_cfg in config["feeds"]:
        try:
            parsed = feedparser.parse(feed_cfg["url"])
            count = len(parsed.entries)
            status = "OK" if count else "空"
        except Exception:  # noqa: BLE001
            count, status = 0, "失败"
        print(f"{feed_cfg['name'][:37]:<38} {status:<8} {count}")
