#!/usr/bin/env python3
"""Publish human-review automation results to private Sites and Feishu.

Transport is controlled by --push/--publish-dashboard. Alert eligibility is
decided inside this module so every cadence follows the same rule:

* normal observations are silent;
* red/amber evidence events and material collection failures are pushed;
* monthly new-data batches are pushed;
* no result writes confirmed dashboard history or scores.
"""
from __future__ import annotations

import argparse
import base64
import datetime as dt
import hashlib
import hmac
import json
import os
import pathlib
import sys
import time
from typing import Any
from urllib.error import HTTPError
from urllib.request import Request, urlopen


ROOT = pathlib.Path(__file__).resolve().parents[2]
STATUS_FILE = ROOT / "outputs" / "cloud-publish-status.json"
DASHBOARD_URL = os.getenv(
    "PRIVATE_DASHBOARD_URL",
    "https://indonesia-monitor-private.rafael-3954.chatgpt.site",
)
ALERT_REVIEW_URL = os.getenv(
    "ALERT_REVIEW_URL",
    "https://github.com/rafaelbonanza279-wq/indonesia-credit-and-social-tracker/issues/6",
)

CONTENT_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
}

ROUTE_FILES = {
    "weekly": [
        "credit-tracker/sentiment-monitor/output/credit-sentiment-pending.json",
        "credit-tracker/sentiment-monitor/output/credit-sentiment-data.js",
        "stability-monitor/scripts/output/street-heat-latest.html",
        "stability-monitor/scripts/street_heat_history.json",
        "pending.json",
        "pending.js",
    ],
    "daily": [
        "credit-tracker/sentiment-monitor/output/daily-credit-alert-pending.json",
        "pending.json",
        "pending.js",
    ],
    "monthly": [
        "credit-tracker/dashboard/p2p-pending.js",
        "pending.json",
        "pending.js",
    ],
}


def read_json(relative_path: str, default: Any = None) -> Any:
    path = ROOT / relative_path
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return default


def latest_stability_daily_event() -> dict[str, Any] | None:
    directory = ROOT / "stability-monitor" / "data" / "daily-events"
    if not directory.exists():
        return None
    rows: list[dict[str, Any]] = []
    for path in sorted(directory.glob("*.jsonl"))[-2:]:
        for line in path.read_text(encoding="utf-8").splitlines():
            try:
                rows.append(json.loads(line))
            except json.JSONDecodeError:
                continue
    return rows[-1] if rows else None


def number(value: Any) -> float | None:
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def score_change(current: Any, previous: Any) -> str:
    current_value = number(current)
    previous_value = number(previous)
    if current_value is None or previous_value is None:
        return "暂无可比上期"
    delta = round(current_value - previous_value, 1)
    if delta > 0:
        direction = "压力上升"
    elif delta < 0:
        direction = "压力缓和"
    else:
        direction = "持平"
    return f"较上周 {previous_value:.1f}：{delta:+.1f}点（{direction}）"


def event_explanation(event: dict[str, Any]) -> tuple[str, str]:
    headline = (
        event.get("headlineZh")
        or event.get("headline")
        or event.get("id")
        or "待核风险事件"
    )
    summary = event.get("summaryZh")
    if not summary and event.get("id") == "kredivo-kredifazz-purworejo-2026-07":
        headline = "OJK 就 Kredivo/KrediFazz 涉嫌违反催收伦理一事进行约谈"
        summary = (
            "Purworejo 一宗催收纠纷引发监管介入。OJK 已约谈 Kredivo 与 KrediFazz；"
            "后续媒体称双方已和解、公司承诺加强催收监督，但监管介入和消费者伤害风险"
            "仍值得正式留痕。"
        )
    if not summary:
        summary = "该事件已通过关键词与来源证据门，但仍需人工核对事实、影响范围和处置级别。"
    return str(headline), str(summary)


def trigger_explanation(alert: dict[str, Any], has_active_event: bool) -> str:
    reasons = set(alert.get("triggerReasons") or [])
    explanations = []
    if "verified_severe_event" in reasons or has_active_event:
        explanations.append("严重事件证据门（原始来源＋至少2个独立来源）")
    if "news_social_cross_signal" in reasons:
        explanations.append("指数≥75且新闻、社媒压力均≥70")
    if "multi_platform_social_spike" in reasons:
        explanations.append("连续两日、至少两个平台的负面社媒异常")
    return "；".join(explanations) or "指数或证据达到待核标准"


def weekly_summary() -> dict[str, Any]:
    data = read_json(
        "credit-tracker/sentiment-monitor/output/credit-sentiment-pending.json",
        {},
    )
    weeks = data.get("weeks") or [{}]
    latest = weeks[-1]
    previous = weeks[-2] if len(weeks) >= 2 else {}
    alert = latest.get("alert") or data.get("latestAlert") or {}
    active = list(alert.get("active") or [])
    candidates = list(
        alert.get("reviewCandidates")
        or alert.get("pendingHighSeverity")
        or []
    )[:5]
    street_history = read_json(
        "stability-monitor/scripts/street_heat_history.json", []
    )
    street = street_history[-1] if street_history else {}
    street_risk = (
        street.get("suggested_score") is not None
        and float(street["suggested_score"]) <= 45
    ) or (
        (street.get("opposition") or {}).get("rate") is not None
        and float(street["opposition"]["rate"]) >= 60
    )
    credit_risk = alert.get("level") in {"red", "amber"} and (
        alert.get("level") == "red" or active or candidates
    )
    latest_engines = latest.get("engines") or {}
    previous_engines = previous.get("engines") or {}
    news_score = (latest_engines.get("news") or {}).get("score")
    social_score = (latest_engines.get("social") or {}).get("score")
    lines = [
        "**为什么收到**\n"
        "这是每周二例行监测；本周达到风险推送门槛，因此发送。正常周保持静默。",
        "**指数与上周比较**\n"
        f"信贷恐慌指数 **{latest.get('fearIndex', '—')} / 100**"
        "（0=平静，100=急性冲击）\n"
        f"{score_change(latest.get('fearIndex'), previous.get('fearIndex'))}\n"
        f"新闻压力 {news_score if news_score is not None else '—'}"
        f"（{score_change(news_score, (previous_engines.get('news') or {}).get('score'))}）；"
        f"社媒压力 {social_score if social_score is not None else '—'}"
        f"（{score_change(social_score, (previous_engines.get('social') or {}).get('score'))}）\n"
        "当前只有周环比；积累满8周后增加滚动中位数/MAD异常幅度。",
        "**为何仍为红色**\n"
        f"{trigger_explanation(alert, bool(active))}。红色可由独立事件证据触发，"
        "所以即使指数比上周下降也会触发；这不表示指数本身正在恶化。",
    ]
    for index, event in enumerate((active or candidates)[:3], 1):
        evidence = (
            f"{event.get('independentSourceCount', 0)}个独立来源"
            + ("＋原始来源" if event.get("hasPrimarySource") else "")
        )
        headline, explanation = event_explanation(event)
        lines.append(
            f"**风险事件 {index}｜{headline}**\n{explanation}\n证据：{evidence}。"
        )
    if street:
        lines.append(
            "**稳定性街头热度**\n"
            f"热度 {street.get('heat', '—')}；建议稳定性分数 "
            f"{street.get('suggested_score', '—')}（尚未写入正式评分）。"
        )
    lines.append(
        "**需要你决定什么**\n"
        "请确认风险事件应当：①确认留痕；②降级为观察；③驳回并说明原因。"
        "这里确认的是“是否作为风险事件留痕及其级别”，不是直接确认或改写指数分数。"
    )
    level = str(alert.get("level", "unknown")).upper()
    return {
        "kind": "weekly",
        "title": (
            f"【每周二例行】线上信贷风险监测｜{level}待确认"
            f"｜{latest.get('weekEnd', dt.date.today().isoformat())}"
        ),
        "risk": bool(credit_risk or street_risk),
        "level": "red" if alert.get("level") == "red" else "orange",
        "lines": lines,
        "reviewUrl": ALERT_REVIEW_URL,
        "decisionId": f"weekly:{latest.get('weekEnd', 'unknown')}:{alert.get('level', 'unknown')}",
    }


def daily_summary() -> dict[str, Any]:
    credit = read_json(
        "credit-tracker/sentiment-monitor/output/daily-credit-alert-pending.json",
        {},
    )
    stability = latest_stability_daily_event() or {}
    credit_level = credit.get("level", "normal")
    stability_level = (
        stability.get("level")
        or stability.get("alertLevel")
        or stability.get("status")
        or "normal"
    )
    risk = credit_level not in {"normal", "none"} or stability_level in {
        "red", "amber", "orange", "high_pending",
    }
    lines = [
        "**为什么收到**\n"
        "这是日频扫描触发的额外风险通知；只有异常日发送，正常日保持静默。",
        "**风险状态**\n"
        f"Pinjol/Pindar：{str(credit_level).upper()}；"
        f"稳定性重大新闻：{str(stability_level).upper()}。",
    ]
    for event in (
        list(credit.get("verifiedRedEvents") or [])
        + list(credit.get("highRiskPendingEvents") or [])
    )[:3]:
        headline, explanation = event_explanation(event)
        lines.append(f"**风险事件｜{headline}**\n{explanation}")
    lines.append(
        "**需要你决定什么**\n"
        "请确认事件应当：①确认留痕并纳入周评证据；②降级为观察；③驳回。"
        "在你确认前不会自动改正式评分。"
    )
    return {
        "kind": "daily",
        "title": f"【日频异常触发】风险警报｜待确认｜{credit.get('date', dt.date.today().isoformat())}",
        "risk": risk,
        "level": "red" if "red" in {credit_level, stability_level} else "orange",
        "lines": lines,
        "reviewUrl": ALERT_REVIEW_URL,
        "decisionId": f"daily:{credit.get('date', dt.date.today().isoformat())}:{credit_level}:{stability_level}",
    }


def monthly_summary() -> dict[str, Any]:
    pending = read_json("pending.json", {"boards": {}})
    items = [
        item for item in (pending.get("boards") or {}).get("credit", [])
        if item.get("source") in {"credit-update", "p2p-scraper"}
    ]
    lines = [
        f"• {item.get('title', '新数据批次')}：{item.get('detail', '')[:180]}"
        for item in items[:6]
    ]
    if not lines:
        lines = ["本月未发现需要确认的新数据。"]
    month = dt.date.today().strftime("%Y-%m")
    return {
        "kind": "monthly",
        "title": f"【每月例行】信贷数据批次｜待确认｜{month}",
        "risk": bool(items),
        "level": "blue",
        "lines": [
            "**为什么收到**\n"
            "这是每月1日例行数据采集；发现新数据、口径变化或采集异常时发送。"
        ] + lines + [
            "**需要你决定什么**\n"
            "请核对月份、单位、来源、异常值和缺失项；确认后才写入正式看板。"
        ],
        "decisionId": f"monthly:{month}:{len(items)}",
    }


def feishu_payload(summary: dict[str, Any]) -> dict[str, Any]:
    content = "\n\n---\n\n".join(summary["lines"])
    content += (
        f"\n\n[打开私有看板]({DASHBOARD_URL})"
        f"　|　[打开风险待确认记录]({summary.get('reviewUrl', ALERT_REVIEW_URL)})"
        "\n\n**人在环边界：**机器人只提交证据和建议；不会自动改正式评分或历史数据。"
    )
    elements: list[dict[str, Any]] = [
        {"tag": "div", "text": {"tag": "lark_md", "content": content}},
    ]
    if summary.get("reviewUrl"):
        elements.append({
            "tag": "action",
            "actions": [{
                "tag": "button",
                "text": {"tag": "plain_text", "content": "打开待确认记录"},
                "type": "primary",
                "url": summary["reviewUrl"],
            }],
        })
    return {
        "msg_type": "interactive",
        "card": {
            "config": {"wide_screen_mode": True},
            "header": {
                "template": summary["level"],
                "title": {"tag": "plain_text", "content": summary["title"]},
            },
            "elements": elements,
        },
    }


def push_feishu(summary: dict[str, Any], requested: bool) -> str:
    if not requested:
        return "not_requested"
    if not summary["risk"]:
        return "suppressed_normal"
    webhook = os.getenv("FEISHU_WEBHOOK_URL") or os.getenv("FEISHU_WEBHOOK")
    secret = os.getenv("FEISHU_SIGN_SECRET") or os.getenv("FEISHU_SECRET") or ""
    if not webhook:
        return "unconfigured"
    payload = feishu_payload(summary)
    if secret:
        timestamp = str(int(time.time()))
        signature = base64.b64encode(
            hmac.new(
                f"{timestamp}\n{secret}".encode("utf-8"),
                digestmod=hashlib.sha256,
            ).digest()
        ).decode()
        payload.update({"timestamp": timestamp, "sign": signature})
    request = Request(
        webhook,
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urlopen(request, timeout=25) as response:
        result = json.loads(response.read().decode("utf-8"))
    if result.get("code") not in (0, None):
        raise RuntimeError(f"Feishu rejected alert: {result}")
    return "sent"


def dashboard_files(mode: str) -> dict[str, dict[str, str]]:
    files: dict[str, dict[str, str]] = {}
    for relative in ROUTE_FILES[mode]:
        path = ROOT / relative
        if not path.exists():
            continue
        route = "/" + relative.replace("\\", "/")
        files[route] = {
            "contentType": CONTENT_TYPES.get(
                path.suffix.lower(), "text/plain; charset=utf-8"
            ),
            "contents": path.read_text(encoding="utf-8"),
        }
    return files


def publish_dashboard(mode: str, requested: bool) -> str:
    if not requested:
        return "not_requested"
    endpoint = os.getenv("DASHBOARD_INGEST_URL") or (
        DASHBOARD_URL.rstrip("/") + "/api/automation-files"
    )
    bypass = os.getenv("SITES_BYPASS_BEARER_TOKEN", "")
    ingest_token = os.getenv("DASHBOARD_INGEST_TOKEN", "")
    if not (bypass and ingest_token):
        return "unconfigured"
    files = dashboard_files(mode)
    if not files:
        return "no_files"
    request = Request(
        endpoint,
        data=json.dumps({"files": files}, ensure_ascii=False).encode("utf-8"),
        headers={
            "OAI-Sites-Authorization": f"Bearer {bypass}",
            "X-Dashboard-Ingest-Token": ingest_token,
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urlopen(request, timeout=40) as response:
            result = json.loads(response.read().decode("utf-8"))
    except HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:300]
        raise RuntimeError(f"Dashboard ingest HTTP {exc.code}: {detail}") from exc
    if result.get("updated") != len(files):
        raise RuntimeError(f"Dashboard ingest rejected files: {result}")
    return f"updated:{len(files)}"


def write_status(
    summary: dict[str, Any], feishu_status: str, dashboard_status: str
) -> None:
    STATUS_FILE.parent.mkdir(parents=True, exist_ok=True)
    STATUS_FILE.write_text(
        json.dumps(
            {
                "generatedAt": dt.datetime.now(dt.timezone.utc).isoformat(),
                "summary": summary,
                "feishu": feishu_status,
                "dashboard": dashboard_status,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=("daily", "weekly", "monthly"))
    parser.add_argument("--push", action="store_true")
    parser.add_argument("--publish-dashboard", action="store_true")
    args = parser.parse_args()
    summary = {
        "daily": daily_summary,
        "weekly": weekly_summary,
        "monthly": monthly_summary,
    }[args.mode]()
    delivery_errors: list[str] = []
    try:
        dashboard_status = publish_dashboard(args.mode, args.publish_dashboard)
    except Exception as exc:  # Keep Feishu independent from dashboard delivery.
        dashboard_status = f"error:{type(exc).__name__}"
        delivery_errors.append(f"dashboard={exc}")
    try:
        feishu_status = push_feishu(summary, args.push)
    except Exception as exc:  # Keep dashboard delivery independent from Feishu.
        feishu_status = f"error:{type(exc).__name__}"
        delivery_errors.append(f"feishu={exc}")
    write_status(summary, feishu_status, dashboard_status)
    print(
        f"mode={args.mode} risk={summary['risk']} "
        f"dashboard={dashboard_status} feishu={feishu_status}"
    )
    missing_required = (
        args.publish_dashboard and dashboard_status == "unconfigured"
    ) or (
        args.push and summary["risk"] and feishu_status == "unconfigured"
    )
    if delivery_errors:
        print("; ".join(delivery_errors), file=sys.stderr)
    return 2 if missing_required or delivery_errors else 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    raise SystemExit(main())

