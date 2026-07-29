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


def weekly_summary() -> dict[str, Any]:
    data = read_json(
        "credit-tracker/sentiment-monitor/output/credit-sentiment-pending.json",
        {},
    )
    latest = (data.get("weeks") or [{}])[-1]
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
    lines = [
        f"信贷恐慌指数：{latest.get('fearIndex', '—')} / 100（{alert.get('level', 'unknown').upper()}）",
        f"新闻压力：{(latest.get('engines') or {}).get('news', {}).get('score', '—')}；"
        f"社媒压力：{(latest.get('engines') or {}).get('social', {}).get('score', '—')}",
    ]
    for event in (active or candidates)[:3]:
        evidence = (
            f"{event.get('independentSourceCount', 0)}个独立来源"
            + ("＋原始来源" if event.get("hasPrimarySource") else "")
        )
        lines.append(f"• {event.get('headline', event.get('id', '风险事件'))}（{evidence}）")
    if street:
        lines.append(
            f"街头热度：{street.get('heat', '—')}；建议稳定性分数："
            f"{street.get('suggested_score', '—')}（待人工确认）"
        )
    return {
        "kind": "weekly",
        "title": f"周二监测 · {latest.get('weekEnd', dt.date.today().isoformat())}",
        "risk": bool(credit_risk or street_risk),
        "level": "red" if alert.get("level") == "red" else "orange",
        "lines": lines,
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
        f"Pinjol/Pindar：{str(credit_level).upper()}",
        f"稳定性重大新闻：{str(stability_level).upper()}",
    ]
    for event in (
        list(credit.get("verifiedRedEvents") or [])
        + list(credit.get("highRiskPendingEvents") or [])
    )[:3]:
        lines.append(f"• {event.get('headline', event.get('id', '风险事件'))}")
    return {
        "kind": "daily",
        "title": f"日频风险警报 · {credit.get('date', dt.date.today().isoformat())}",
        "risk": risk,
        "level": "red" if "red" in {credit_level, stability_level} else "orange",
        "lines": lines,
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
        "title": f"月度信贷数据 · {month}",
        "risk": bool(items),
        "level": "blue",
        "lines": lines,
        "decisionId": f"monthly:{month}:{len(items)}",
    }


def feishu_payload(summary: dict[str, Any]) -> dict[str, Any]:
    content = "\n".join(summary["lines"])
    content += (
        f"\n\n[打开私有看板]({DASHBOARD_URL})"
        "\n\n结果为待人工确认；不会自动改正式评分或历史数据。"
    )
    return {
        "msg_type": "interactive",
        "card": {
            "config": {"wide_screen_mode": True},
            "header": {
                "template": summary["level"],
                "title": {"tag": "plain_text", "content": summary["title"]},
            },
            "elements": [
                {"tag": "div", "text": {"tag": "lark_md", "content": content}},
            ],
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
            "Authorization": f"Bearer {bypass}",
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
