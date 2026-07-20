"""推送层:组装飞书交互卡片并 POST 到自定义机器人 webhook。

飞书自定义机器人若开启了"签名校验",需要用 secret 算 sign。
两种模式都支持:设了 FEISHU_SECRET 就带签名,没设就裸发。

换成企业微信/Slack 只需替换本文件,build_card + send 两个函数的契约不变。
"""

from __future__ import annotations

import base64
import hashlib
import hmac
import logging
import os
import time
from typing import Any

import requests

log = logging.getLogger(__name__)

FLAG_STYLE = {
    "critical": ("red", "紧要"),
    "high": ("orange", "重要"),
    "normal": ("grey", ""),
}

SECTION_LABELS = {
    "macro": "宏观与货币",
    "policy": "政策与制度",
    "markets": "市场与评级",
    "fintech": "金融科技与监管",
}


def _sign(secret: str, timestamp: str) -> str:
    """飞书签名:HMAC-SHA256(key=timestamp+\\n+secret, msg=空)。"""
    string_to_sign = f"{timestamp}\n{secret}"
    hmac_code = hmac.new(
        string_to_sign.encode("utf-8"), digestmod=hashlib.sha256
    ).digest()
    return base64.b64encode(hmac_code).decode("utf-8")


def _md(text: str) -> dict[str, Any]:
    return {"tag": "div", "text": {"tag": "lark_md", "content": text}}


def _hr() -> dict[str, Any]:
    return {"tag": "hr"}


def build_daily_card(result: dict[str, Any], date_str: str) -> dict[str, Any]:
    items = result.get("items", [])
    digest = result.get("digest", "")

    has_critical = any(i.get("flag") == "critical" for i in items)
    header_color = "red" if has_critical else "blue"

    elements: list[dict[str, Any]] = []

    if digest:
        elements.append(_md(f"**当日综述**\n{digest}"))
        elements.append(_hr())

    # 按 section 分组,critical 的条目置顶
    items_sorted = sorted(
        items,
        key=lambda i: (
            {"critical": 0, "high": 1, "normal": 2}.get(i.get("flag", "normal"), 2)
        ),
    )

    for item in items_sorted:
        flag = item.get("flag", "normal")
        color, label = FLAG_STYLE.get(flag, ("grey", ""))
        badge = f"<font color='{color}'>[{label}]</font> " if label else ""
        section = SECTION_LABELS.get(item.get("section", ""), "")
        section_tag = f"`{section}` " if section else ""

        title = item.get("title", "")
        url = item.get("url", "")
        title_line = f"{badge}{section_tag}**[{title}]({url})**" if url else f"{badge}{section_tag}**{title}**"

        body = title_line
        if item.get("summary"):
            body += f"\n{item['summary']}"
        if item.get("comment"):
            body += f"\n> 💡 {item['comment']}"
        if item.get("source"):
            body += f"\n<font color='grey'>— {item['source']}</font>"

        elements.append(_md(body))

    if not items:
        elements.append(_md("今日无符合条件的新闻。"))

    return {
        "msg_type": "interactive",
        "card": {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"tag": "plain_text", "content": f"印尼简报 · {date_str}"},
                "template": header_color,
            },
            "elements": elements,
        },
    }


def build_weekly_card(result: dict[str, Any], date_str: str) -> dict[str, Any]:
    elements: list[dict[str, Any]] = []

    if result.get("headline"):
        elements.append(_md(f"**{result['headline']}**"))
        elements.append(_hr())

    if result.get("analysis"):
        # 飞书卡片单个 div 有长度限制,按段落切分
        for para in result["analysis"].split("\n\n"):
            if para.strip():
                elements.append(_md(para.strip()))

    if result.get("indicator_note"):
        elements.append(_hr())
        elements.append(_md(f"**指标变化**\n{result['indicator_note']}"))

    watchlist = result.get("watchlist", [])
    if watchlist:
        elements.append(_hr())
        bullets = "\n".join(f"{i}. {w}" for i, w in enumerate(watchlist, 1))
        elements.append(_md(f"**下周盯点**\n{bullets}"))

    return {
        "msg_type": "interactive",
        "card": {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"tag": "plain_text", "content": f"印尼周度深度 · {date_str}"},
                "template": "purple",
            },
            "elements": elements,
        },
    }


def send(payload: dict[str, Any]) -> None:
    webhook = os.environ.get("FEISHU_WEBHOOK")
    if not webhook:
        raise RuntimeError("缺少环境变量 FEISHU_WEBHOOK")

    secret = os.environ.get("FEISHU_SECRET")
    if secret:
        ts = str(int(time.time()))
        payload = {**payload, "timestamp": ts, "sign": _sign(secret, ts)}

    resp = requests.post(webhook, json=payload, timeout=20)
    resp.raise_for_status()
    data = resp.json()

    # 飞书成功时 code=0
    if data.get("code") not in (0, None):
        raise RuntimeError(f"飞书推送失败: {data}")

    log.info("推送成功")
