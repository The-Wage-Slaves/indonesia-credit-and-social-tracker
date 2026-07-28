# -*- coding: utf-8 -*-
"""Build a weekly Indonesia digital-credit fear index for human review.

The collector never overwrites confirmed dashboard facts. It writes a pending
JSON/JavaScript review artifact. Live mode uses public Google News RSS queries;
fixture mode exists for reproducible backfills and CI tests.
"""

from __future__ import annotations

import argparse
import datetime as dt
from email.utils import parsedate_to_datetime
import hashlib
import html
import json
import math
import pathlib
import re
import sys
from typing import Any
from urllib.parse import quote, urlparse
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET


HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]
DEFAULT_FIXTURE = HERE / "fixtures" / "recent-two-weeks.json"
OUTPUT_DIR = HERE / "output"
OUTPUT_JSON = OUTPUT_DIR / "credit-sentiment-pending.json"
OUTPUT_JS = OUTPUT_DIR / "credit-sentiment-data.js"

QUERIES = [
    '"pinjaman online" OR pinjol OR pindar',
    'Kredivo OR KrediFazz OR AdaKami OR "Kredit Pintar" OR Easycash',
    'OJK (pinjol OR pindar OR "pinjaman daring")',
    '"debt collector" (pinjol OR Kredivo OR KrediFazz)',
]

NEGATIVE_TERMS = {
    "pelanggaran": 2.2,
    "pelecehan": 3.0,
    "diteror": 2.8,
    "teror": 2.5,
    "korban": 1.7,
    "penipuan": 2.5,
    "ilegal": 2.0,
    "gagal bayar": 2.1,
    "bermasalah": 1.6,
    "denda": 1.2,
    "bunga harian": 2.2,
    "memberatkan": 1.5,
    "terjerat": 2.0,
    "utang": 1.0,
    "debt collector": 2.0,
    "penagihan": 1.0,
    "dipanggil": 1.8,
    "panggil": 1.4,
    "sanksi": 2.0,
    "investigasi": 1.4,
    "risiko": 1.0,
    "tekanan": 1.0,
    "kualitas pembiayaan": 1.5,
    "twp90": 0.8,
}
POSITIVE_TERMS = {
    "tumbuh": 1.4,
    "naik": 0.8,
    "laba": 0.8,
    "terjaga": 1.5,
    "turun": 0.7,
    "berakhir damai": 1.4,
    "perlindungan konsumen": 0.8,
    "perkuat pengawasan": 0.8,
    "kooperatif": 0.7,
    "legal": 0.5,
}
SOURCE_FACTORS = {
    "primary": 1.0,
    "established_media": 0.85,
    "other_media": 0.70,
    "community": 0.55,
}


def clamp(value: float, low: float = 0.0, high: float = 100.0) -> float:
    return min(max(value, low), high)


def round1(value: float) -> float:
    return round(value + 1e-10, 1)


def normalize_text(value: str) -> str:
    value = html.unescape(value or "").lower()
    value = re.sub(r"<[^>]+>", " ", value)
    value = re.sub(r"[^a-z0-9\u00c0-\u024f]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def canonical_domain(url: str) -> str:
    host = urlparse(url).netloc.lower().removeprefix("www.")
    return host or "unknown"


def source_class(article: dict[str, Any]) -> str:
    explicit = article.get("sourceClass")
    if explicit in SOURCE_FACTORS:
        return explicit
    domain = canonical_domain(article.get("publisherUrl") or article["url"])
    if domain.endswith("ojk.go.id") or domain.endswith("bi.go.id"):
        return "primary"
    if any(
        domain.endswith(item)
        for item in (
            "antaranews.com",
            "kontan.co.id",
            "detik.com",
            "katadata.co.id",
            "swa.co.id",
            "sindonews.com",
            "suara.com",
            "rri.co.id",
        )
    ):
        return "established_media"
    if "reddit.com" in domain or "kaskus.co.id" in domain:
        return "community"
    return "other_media"


def title_fingerprint(title: str) -> str:
    normalized = normalize_text(title)
    return hashlib.sha256(normalized.encode("utf-8")).hexdigest()[:16]


def article_sentiment(article: dict[str, Any]) -> dict[str, Any]:
    text = normalize_text(f"{article['title']} {article.get('summary', '')}")
    negative = sum(weight for term, weight in NEGATIVE_TERMS.items() if term in text)
    positive = sum(weight for term, weight in POSITIVE_TERMS.items() if term in text)
    risk = clamp(50.0 + 7.0 * (negative - positive), 5.0, 95.0)
    if risk >= 67:
        label = "negative"
    elif risk <= 37:
        label = "positive"
    else:
        label = "mixed"
    return {
        "risk": round1(risk),
        "label": label,
        "negativeWeight": round1(negative),
        "positiveWeight": round1(positive),
        "method": "deterministic_id_lexicon_v1",
    }


def event_profile(article: dict[str, Any]) -> tuple[str, float]:
    text = normalize_text(f"{article['title']} {article.get('summary', '')}")
    if "ojk" in text and any(
        term in text for term in ("panggil", "dipanggil", "sanksi", "cabut", "hentikan")
    ):
        return "regulatory_action", 0.92
    if any(
        term in text
        for term in ("pelecehan", "kekerasan", "bunuh diri", "teror", "ancaman bom")
    ):
        return "consumer_harm", 0.86
    if any(term in text for term in ("penipuan", "pinjol ilegal", "bunga harian")):
        return "fraud_or_illegal_practice", 0.74
    if any(
        term in text
        for term in ("gagal bayar", "twp90", "kualitas pembiayaan", "ekuitas minimum")
    ):
        return "credit_quality_stress", 0.58
    if any(term in text for term in ("tumbuh", "laba", "terjaga")):
        return "industry_update", 0.18
    return "general_sentiment", 0.35


def automatic_event_id(article: dict[str, Any]) -> str:
    if article.get("eventId"):
        return str(article["eventId"])
    text = normalize_text(f"{article['title']} {article.get('summary', '')}")
    if ("kredivo" in text or "kredifazz" in text) and "purworejo" in text:
        return "kredivo-kredifazz-purworejo-2026-07"
    if "tadpole" in text:
        return "pindar-tadpole-practice-2026-07"
    if ("bom" in text or "teror" in text) and "pinjol" in text:
        return "debt-linked-school-threat-2026-07"
    keywords = normalize_text(article["title"]).split()[:7]
    return "auto-" + hashlib.sha256(" ".join(keywords).encode("utf-8")).hexdigest()[:12]


def complete_week_ends(as_of: dt.date, count: int = 2) -> list[dt.date]:
    days_since_sunday = (as_of.weekday() + 1) % 7
    last_sunday = as_of - dt.timedelta(days=days_since_sunday)
    if last_sunday == as_of:
        last_sunday -= dt.timedelta(days=7)
    return [
        last_sunday - dt.timedelta(days=7 * offset)
        for offset in reversed(range(count))
    ]


def within_week(article_date: dt.date, week_end: dt.date) -> bool:
    return week_end - dt.timedelta(days=6) <= article_date <= week_end


def parse_article_date(value: str) -> dt.date:
    return dt.date.fromisoformat(value[:10])


def dedupe_articles(articles: list[dict[str, Any]]) -> list[dict[str, Any]]:
    seen: set[tuple[str, str]] = set()
    deduped = []
    for article in sorted(articles, key=lambda item: (item["date"], item["title"])):
        key = (
            title_fingerprint(article["title"]),
            canonical_domain(article.get("publisherUrl") or article["url"]),
        )
        if key in seen:
            continue
        seen.add(key)
        deduped.append(article)
    return deduped


def enrich_articles(articles: list[dict[str, Any]]) -> list[dict[str, Any]]:
    enriched = []
    for raw in dedupe_articles(articles):
        article = dict(raw)
        article["id"] = article.get("id") or title_fingerprint(article["title"])
        article["domain"] = canonical_domain(article.get("publisherUrl") or article["url"])
        article["sourceClass"] = source_class(article)
        article["sourceFactor"] = SOURCE_FACTORS[article["sourceClass"]]
        article["sentiment"] = article_sentiment(article)
        article["eventId"] = automatic_event_id(article)
        event_type, severity = event_profile(article)
        article["eventType"] = article.get("eventType") or event_type
        article["eventSeverity"] = max(float(article.get("eventSeverity", 0.0)), severity)
        enriched.append(article)
    return enriched


def cluster_events(articles: list[dict[str, Any]]) -> list[dict[str, Any]]:
    grouped: dict[str, list[dict[str, Any]]] = {}
    for article in articles:
        grouped.setdefault(article["eventId"], []).append(article)
    events = []
    for event_id, items in grouped.items():
        domains = sorted({item["domain"] for item in items})
        event_type = max(items, key=lambda item: item["eventSeverity"])["eventType"]
        severity = max(float(item["eventSeverity"]) for item in items)
        has_primary = any(item["sourceClass"] == "primary" for item in items)
        events.append({
            "id": event_id,
            "eventType": event_type,
            "severity": round(severity, 2),
            "articleIds": [item["id"] for item in items],
            "independentSourceCount": len(domains),
            "domains": domains,
            "hasPrimarySource": has_primary,
            "headline": items[0]["title"],
        })
    return sorted(events, key=lambda item: (-item["severity"], item["id"]))


def alert_for_events(events: list[dict[str, Any]]) -> dict[str, Any]:
    red_types = {"regulatory_action", "consumer_harm", "systemic_platform_stress"}
    red = [
        event for event in events
        if event["eventType"] in red_types
        and event["severity"] >= 0.8
        and event["hasPrimarySource"]
        and event["independentSourceCount"] >= 2
    ]
    amber = [
        event for event in events
        if event["severity"] >= 0.7 and event not in red
    ]
    if red:
        level, active = "red", red
    elif amber:
        level, active = "amber", amber
    else:
        level, active = "normal", []
    return {
        "level": level,
        "active": active,
        "rule": (
            "Red requires severity>=0.80, a primary source and at least two "
            "independent domains for a regulatory, consumer-harm or systemic event."
        ),
        "pendingHighSeverity": amber,
    }


def score_week(
    week_end: dt.date,
    articles: list[dict[str, Any]],
    previous_count: int | None,
) -> dict[str, Any]:
    week_articles = [
        article for article in articles
        if within_week(parse_article_date(article["date"]), week_end)
    ]
    events = cluster_events(week_articles)
    count = len(week_articles)
    if previous_count is None:
        volume_risk = 50.0
        volume_note = "First pilot week; neutral volume baseline."
    else:
        ratio = (count + 1) / (previous_count + 1)
        volume_risk = clamp(50.0 + 35.0 * math.tanh(math.log(ratio)))
        volume_note = f"Continuous week-on-week article ratio: {ratio:.2f}x."
    if week_articles:
        weight_sum = sum(item["sourceFactor"] for item in week_articles)
        tone_risk = sum(
            item["sentiment"]["risk"] * item["sourceFactor"]
            for item in week_articles
        ) / weight_sum
        domain_count = len({item["domain"] for item in week_articles})
        primary_count = sum(item["sourceClass"] == "primary" for item in week_articles)
    else:
        tone_risk = 50.0
        domain_count = 0
        primary_count = 0
    event_risk = 100.0 * max((event["severity"] for event in events), default=0.0)
    breadth_risk = min(100.0, 25.0 * math.sqrt(domain_count))
    fear_index = (
        0.35 * volume_risk
        + 0.30 * tone_risk
        + 0.25 * event_risk
        + 0.10 * breadth_risk
    )
    coverage = min(1.0, count / 6.0)
    diversity = min(1.0, domain_count / 4.0)
    primary_coverage = 1.0 if primary_count else (0.6 if count else 0.0)
    confidence = 0.40 * coverage + 0.35 * diversity + 0.25 * primary_coverage
    alert = alert_for_events(events)
    return {
        "weekStart": (week_end - dt.timedelta(days=6)).isoformat(),
        "weekEnd": week_end.isoformat(),
        "fearIndex": round1(fear_index),
        "components": {
            "volumeShock": round1(volume_risk),
            "negativeTone": round1(tone_risk),
            "severeEvent": round1(event_risk),
            "sourceBreadth": round1(breadth_risk),
        },
        "articleCount": count,
        "uniqueSourceCount": domain_count,
        "negativeArticleShare": round1(
            100.0 * sum(item["sentiment"]["label"] == "negative" for item in week_articles)
            / count
        ) if count else 0.0,
        "confidence": round(confidence, 3),
        "volumeNote": volume_note,
        "alert": alert,
        "events": events,
        "articleIds": [item["id"] for item in week_articles],
    }


def build_result(articles: list[dict[str, Any]], as_of: dt.date) -> dict[str, Any]:
    enriched = enrich_articles(articles)
    week_ends = complete_week_ends(as_of, 2)
    weeks = []
    previous_count = None
    for week_end in week_ends:
        week = score_week(week_end, enriched, previous_count)
        previous_count = week["articleCount"]
        weeks.append(week)
    latest_alert = weeks[-1]["alert"]
    return {
        "schemaVersion": 1,
        "status": "pilot-pending-human-review",
        "asOf": as_of.isoformat(),
        "cadence": "weekly-complete-weeks",
        "indexDirection": "0=calm; 100=acute fear/event shock",
        "methodology": {
            "name": "Indonesia Digital Credit Fear Index v1 pilot",
            "formula": (
                "35% continuous volume shock + 30% source-weighted negative tone "
                "+ 25% severe-event intensity + 10% source breadth"
            ),
            "guardrails": [
                "This measures short-term attention and fear, not industry solvency or approval.",
                "Multiple articles about one event raise media volume but share one eventId.",
                "Red alerts do not change the index and require primary plus multi-source confirmation.",
                "The first two weeks use a week-on-week pilot baseline; use an 8-week robust baseline after enough history accumulates.",
            ],
        },
        "latestAlert": latest_alert,
        "weeks": weeks,
        "articles": enriched,
        "reviewRequired": True,
    }


def fetch_google_news(query: str, after: dt.date, before: dt.date) -> list[dict[str, Any]]:
    search = f"{query} after:{after.isoformat()} before:{before.isoformat()}"
    url = (
        "https://news.google.com/rss/search?q="
        + quote(search)
        + "&hl=id&gl=ID&ceid=ID:id"
    )
    request = Request(url, headers={"User-Agent": "Mozilla/5.0 credit-monitor/1.0"})
    with urlopen(request, timeout=25) as response:
        root = ET.fromstring(response.read())
    articles = []
    for item in root.findall("./channel/item"):
        pub_date = parsedate_to_datetime(item.findtext("pubDate", "")).date()
        source_node = item.find("source")
        articles.append({
            "date": pub_date.isoformat(),
            "title": item.findtext("title", "").strip(),
            "url": item.findtext("link", "").strip(),
            "publisherUrl": (
                source_node.attrib.get("url", "").strip()
                if source_node is not None
                else ""
            ),
            "source": (source_node.text or "").strip() if source_node is not None else "",
            "summary": normalize_text(item.findtext("description", "")),
        })
    return articles


def load_articles(
    args: argparse.Namespace,
    as_of: dt.date,
) -> tuple[list[dict[str, Any]], str, dict[str, Any]]:
    if args.fixture:
        payload = json.loads(args.fixture.read_text(encoding="utf-8"))
        return payload["articles"], f"fixture:{args.fixture.as_posix()}", {
            "queryCount": len(QUERIES),
            "successfulQueryCount": len(QUERIES),
            "failedQueries": [],
            "mode": "reviewed_fixture",
        }
    after = complete_week_ends(as_of, 2)[0] - dt.timedelta(days=6)
    before = complete_week_ends(as_of, 2)[-1] + dt.timedelta(days=1)
    articles = []
    failures = []
    for query in QUERIES:
        try:
            articles.extend(fetch_google_news(query, after, before))
        except Exception as exc:  # network failures must remain visible in review output
            failures.append(f"{query}: {exc}")
    if not articles:
        raise RuntimeError("All live sources failed: " + " | ".join(failures))
    return articles, "live:google-news-rss", {
        "queryCount": len(QUERIES),
        "successfulQueryCount": len(QUERIES) - len(failures),
        "failedQueries": failures,
        "mode": "live_google_news_rss",
    }


def write_outputs(result: dict[str, Any], source_mode: str) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    result["sourceMode"] = source_mode
    json_text = json.dumps(result, ensure_ascii=False, indent=2) + "\n"
    OUTPUT_JSON.write_text(json_text, encoding="utf-8")
    OUTPUT_JS.write_text(
        "const CREDIT_SENTIMENT = " + json_text.rstrip() + ";\n",
        encoding="utf-8",
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--as-of", default=dt.date.today().isoformat())
    parser.add_argument("--fixture", type=pathlib.Path)
    parser.add_argument("--write-output", action="store_true")
    args = parser.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    as_of = parse_article_date(args.as_of)
    articles, source_mode, diagnostics = load_articles(args, as_of)
    result = build_result(articles, as_of)
    result["collectionDiagnostics"] = diagnostics
    if args.write_output:
        write_outputs(result, source_mode)
    for week in result["weeks"]:
        print(
            f"{week['weekStart']} - {week['weekEnd']} "
            f"fear={week['fearIndex']:.1f} articles={week['articleCount']} "
            f"negative={week['negativeArticleShare']:.1f}% "
            f"alert={week['alert']['level']} confidence={week['confidence']:.1%}"
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
