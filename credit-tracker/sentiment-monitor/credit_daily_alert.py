# -*- coding: utf-8 -*-
"""Daily Pinjol/Pindar volatility alert; pending-only and Feishu-optional."""
from __future__ import annotations
import argparse, base64, datetime as dt, hashlib, hmac, json, os, pathlib, statistics, sys, time
from typing import Any
from urllib.request import Request, urlopen
import credit_sentiment as monitor

HERE = pathlib.Path(__file__).resolve().parent
OUTPUT = HERE / "output" / "daily-credit-alert-pending.json"
ACKNOWLEDGED = HERE / "acknowledged-events.json"

# 只有真实事件类才配打扰人。general_sentiment / industry_update 一类是话题热度，
# 不是事件；credit_quality_stress 走周度指数，不走日频警报。
ALERTABLE_EVENT_TYPES = {
    "regulatory_action",
    "consumer_harm",
    "systemic_platform_stress",
    "fraud_or_illegal_practice",
}


def load_acknowledged() -> set[str]:
    """已人工处置的事件 id，不再重复推送。

    事件只要还在采集窗口里就会天天重新聚类出来，级别也不会变；没有这张表，
    一条确认过的事件会一直每天推一次。确认动作仍然是人做的，脚本只读不写。
    """
    try:
        data = json.loads(ACKNOWLEDGED.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return set()
    return {
        str(entry["id"])
        for entry in (data.get("events") or [])
        if isinstance(entry, dict) and entry.get("id")
    }


def daily_counts(items: list[dict[str, Any]], day: dt.date, days: int = 8) -> list[int]:
    return [
        sum(monitor.parse_date(item.get("date"), day) == day - dt.timedelta(days=offset)
            for item in items)
        for offset in reversed(range(days))
    ]


def daily_volume_risk(counts: list[int]) -> tuple[float, str]:
    current, history = counts[-1], counts[:-1]
    baseline = statistics.median(history) if history else 0.0
    mad = statistics.median([abs(value - baseline) for value in history]) if history else 0.0
    scale = max(1.0, mad * 1.4826, baseline * 0.2)
    z_score = (current - baseline) / scale
    return monitor.clamp(50.0 + 15.0 * z_score), (
        f"today={current}; prior-7d median={baseline:.1f}; robust z={z_score:.2f}"
    )


def build_daily_decision(day: dt.date, articles: list[dict[str, Any]],
                         social_items: list[dict[str, Any]],
                         source_health: dict[str, dict[str, Any]],
                         classifier: dict[str, Any]) -> dict[str, Any]:
    articles = monitor.enrich_articles(articles)
    social_items = monitor.enrich_social_items(social_items)
    start = day - dt.timedelta(days=1)
    recent_news = [x for x in articles if start <= monitor.parse_date(x["date"]) <= day]
    recent_social = [x for x in social_items if start <= monitor.parse_date(x["date"]) <= day]
    events = monitor.cluster_events(recent_news, recent_social)
    acknowledged = load_acknowledged()
    events = [event for event in events if event.get("id") not in acknowledged]
    verified = [
        event for event in events
        if event["eventType"] in ALERTABLE_EVENT_TYPES
        and event["severity"] >= 0.8 and event["hasPrimarySource"]
        and event["independentSourceCount"] >= 2
    ]
    # severity 来自 event_profile 的关键词匹配，只看标题：一篇「小心网贷高息、
    # 会被催收恐吓」的科普文和一条真实催收恐吓事件同样命中 teror → 0.86。
    # 所以 severity 单独不足以打扰人，必须再过证据门与事件类型门。
    high_pending = [
        event for event in events
        if event["severity"] >= 0.8
        and event not in verified
        and event["eventType"] in ALERTABLE_EVENT_TYPES
        and (event["independentSourceCount"] >= 2 or event["hasPrimarySource"])
    ]
    # 达到严重度但证据不足的不丢弃，降级为线索：写进待确认文件供周评查阅，
    # 但不推飞书、不抬高 level。宁可让人主动去看，也不要每天用单来源标题打扰。
    leads = [
        event for event in events
        if event["severity"] >= 0.8
        and event not in verified
        and event not in high_pending
    ]
    news_risk, news_note = daily_volume_risk(daily_counts(articles, day))
    social_risk, social_note = daily_volume_risk(daily_counts(social_items, day))
    _, negative_share = monitor.weighted_sentiment(recent_social, social=True)
    negative_platforms = {
        item["platform"] for item in recent_social
        if item["sentiment"]["label"] == "negative"
    }
    cross_spike = (
        news_risk >= 80 and social_risk >= 80 and negative_share >= 65
        and len(negative_platforms) >= 2
    )
    level = "red" if verified else (
        "high_pending" if high_pending else ("amber" if cross_spike else "normal")
    )
    successful = [
        key for key in monitor.SOURCE_CATALOG
        if source_health.get(key, {}).get("status") == "ok"
    ]
    return {
        "schemaVersion": 1, "status": "pending-human-review",
        "date": day.isoformat(), "level": level,
        "signals": {
            "newsDailyVolumeRisk": monitor.round1(news_risk),
            "socialDailyVolumeRisk": monitor.round1(social_risk),
            "negativeSocialShare": monitor.round1(negative_share),
            "negativeSocialPlatforms": sorted(negative_platforms),
            "crossChannelSpike": cross_spike,
        },
        "notes": {"newsVolume": news_note, "socialVolume": social_note},
        "verifiedRedEvents": verified, "highRiskPendingEvents": high_pending,
        "lowEvidenceLeads": leads,
        "acknowledgedSuppressedCount": len(acknowledged),
        "events": events,
        "coverage": {
            "successfulChannels": successful,
            "failedOrUnavailableChannels": {
                key: source_health.get(key, {}).get("detail", "")
                for key in monitor.SOURCE_CATALOG
                if source_health.get(key, {}).get("status") != "ok"
            },
            "articleCount48h": len(recent_news), "socialItemCount48h": len(recent_social),
        },
        "socialClassifier": classifier,
        "rule": (
            "Red requires severity>=0.8, an alertable event type, a primary source and >=2 "
            "independent sources. High-risk pending requires severity>=0.8, an alertable "
            "event type and either >=2 independent sources or a primary source. "
            "Severity alone comes from headline keywords, so single-source, non-primary "
            "items are recorded as low-evidence leads and never pushed. Acknowledged event "
            "ids are suppressed. Amber requires simultaneous robust news/social spikes, "
            ">=65% negative share and >=2 platforms."
        ),
        "reviewRequired": True,
    }


def feishu_payload(decision: dict[str, Any]) -> dict[str, Any]:
    template, label = {
        "red": ("red", "🔴 红色警报"), "high_pending": ("orange", "🔺 高危待核"),
        "amber": ("orange", "🟠 异常升温"), "normal": ("green", "🟢 无异常"),
    }[decision["level"]]
    signals, coverage = decision["signals"], decision["coverage"]
    lines = [
        f"- {event['headline']}（{event['independentSourceCount']} 个独立来源）"
        for event in decision["verifiedRedEvents"] + decision["highRiskPendingEvents"]
    ] or ["- 无达到事件证据门的事项"]
    body = (
        f"**新闻声量风险** {signals['newsDailyVolumeRisk']} / 100  \n"
        f"**社媒声量风险** {signals['socialDailyVolumeRisk']} / 100  \n"
        f"**社媒负面占比** {signals['negativeSocialShare']}%  \n"
        f"**有效渠道** {len(coverage['successfulChannels'])}/{len(monitor.SOURCE_CATALOG)}\n\n"
        + "\n".join(lines) + "\n\n机器待确认项；不会自动写入看板。"
    )
    return {"msg_type": "interactive", "card": {
        "config": {"wide_screen_mode": True},
        "header": {"template": template, "title": {"tag": "plain_text",
            "content": f"Pinjol/Pindar 日频舆情 · {decision['date']} · {label}"}},
        "elements": [{"tag": "div", "text": {"tag": "lark_md", "content": body}}],
    }}


def push_feishu(decision: dict[str, Any]) -> str:
    webhook = os.getenv("FEISHU_WEBHOOK_URL") or os.getenv("FEISHU_WEBHOOK")
    secret = os.getenv("FEISHU_SIGN_SECRET") or os.getenv("FEISHU_SECRET") or ""
    if not webhook:
        return "unconfigured"
    if decision["level"] == "normal":
        return "suppressed_normal"
    payload = feishu_payload(decision)
    if secret:
        timestamp = str(int(time.time()))
        signature = base64.b64encode(hmac.new(
            f"{timestamp}\n{secret}".encode("utf-8"), digestmod=hashlib.sha256
        ).digest()).decode()
        payload = {**payload, "timestamp": timestamp, "sign": signature}
    request = Request(webhook, data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
                      headers={"Content-Type": "application/json"}, method="POST")
    with urlopen(request, timeout=20) as response:
        result = json.loads(response.read().decode("utf-8"))
    if result.get("code") not in (0, None):
        raise RuntimeError(f"Feishu rejected the alert: {result}")
    return "sent"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--as-of", default=dt.date.today().isoformat())
    parser.add_argument("--config", type=pathlib.Path)
    parser.add_argument("--fixture", type=pathlib.Path)
    parser.add_argument("--write-output", action="store_true")
    parser.add_argument("--push", action="store_true")
    args = parser.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    day = monitor.parse_date(args.as_of)
    if args.fixture:
        fixture = json.loads(args.fixture.read_text(encoding="utf-8"))
        articles, social_items = fixture.get("articles", []), fixture.get("socialItems", [])
        health, classifier = fixture.get("sourceHealth") or {}, {"method": "fixture", "status": "not_run"}
    else:
        config = monitor.merge_nonempty_config(
            monitor.load_yaml(monitor.SHARED_CONFIG),
            monitor.load_yaml(args.config or monitor.DEFAULT_CONFIG),
        )
        articles, social_items, _, health = monitor.collect_live(
            day, config, after=day - dt.timedelta(days=14), before=day + dt.timedelta(days=1)
        )
        social_items, classifier = monitor.classify_social_with_deepseek(social_items, config)
    decision = build_daily_decision(day, articles, social_items, health, classifier)
    if args.write_output:
        OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        OUTPUT.write_text(json.dumps(decision, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    push_status = push_feishu(decision) if args.push else "not_requested"
    print(f"{decision['date']} level={decision['level']} "
          f"news={decision['signals']['newsDailyVolumeRisk']} "
          f"social={decision['signals']['socialDailyVolumeRisk']} "
          f"coverage={len(decision['coverage']['successfulChannels'])}/"
          f"{len(monitor.SOURCE_CATALOG)} push={push_status}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
