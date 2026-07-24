# -*- coding: utf-8 -*-
"""
每周稳定性周更 · 飞书提醒
=========================
每周二 10:00 GMT+8（GitHub Actions 定时，UTC 02:00）向飞书自定义机器人推一张提醒卡，
提醒维护者回到 Claude Code / Codex 手动跑「印尼五支柱稳定性指数」周更。

只发提醒、不改任何评分（评分是人在环）。复用与 brief 系统相同的两个环境变量：
  FEISHU_WEBHOOK  自定义机器人 webhook（必需）
  FEISHU_SECRET   若机器人开启了签名校验则需要（可选）

本地测试：  FEISHU_WEBHOOK=... python stability-monitor/scripts/feishu_reminder.py
"""
from __future__ import annotations
import base64, hashlib, hmac, os, pathlib, re, sys, time
import requests

HERE = pathlib.Path(__file__).parent
DATA_JS = HERE.parent / "dashboard" / "data.js"


def _sign(secret: str, timestamp: str) -> str:
    string_to_sign = f"{timestamp}\n{secret}"
    digest = hmac.new(string_to_sign.encode("utf-8"), digestmod=hashlib.sha256).digest()
    return base64.b64encode(digest).decode("utf-8")


def _last_snapshot() -> str:
    """从 data.js 抓最新一期 weekly 快照的日期，失败则空串（防御式，不让提醒挂掉）。"""
    try:
        txt = DATA_JS.read_text(encoding="utf-8")
        dates = re.findall(r'date:\s*"(\d{4}-\d{2}-\d{2})"', txt)
        return dates[-1] if dates else ""
    except Exception:
        return ""


def build_card() -> dict:
    last = _last_snapshot()
    last_line = f"上次已确认快照：**{last}**\n" if last else ""
    content = (
        f"{last_line}"
        "本周该更新五支柱稳定性评分了。回到 **Claude Code / Codex**，说一句"
        "「跑周度稳定性更新」，会带你走完整流程：\n"
        "1. 本机跑 `python stability-monitor/scripts/street_heat.py`（街头热度确认单）\n"
        "2. 检索本周宏观 / 政治 / 市场变化（BI议息、卢比、评级、DSI、立法、司法、抗议…）\n"
        "3. 新分支上起草 V3 重评 + 刷新 V4 影子对比，跑 `validate_repo.mjs` 校验\n"
        "4. 你审 diff、确认后再合并（**评分人在环，不自动定稿**）\n\n"
        "<font color='grey'>提示：V4 影子仍在跑，几周后可拉 V3↔V4 对比再决策方法论两分歧。</font>"
    )
    return {
        "msg_type": "interactive",
        "card": {
            "config": {"wide_screen_mode": True},
            "header": {
                "title": {"tag": "plain_text", "content": "🧭 印尼稳定性指数 · 周更提醒（每周二）"},
                "template": "blue",
            },
            "elements": [{"tag": "div", "text": {"tag": "lark_md", "content": content}}],
        },
    }


def send(payload: dict) -> None:
    webhook = os.environ.get("FEISHU_WEBHOOK")
    if not webhook:
        raise SystemExit("缺少环境变量 FEISHU_WEBHOOK（在 GitHub 仓库 Settings→Secrets 添加）")
    secret = os.environ.get("FEISHU_SECRET")
    if secret:
        ts = str(int(time.time()))
        payload = {**payload, "timestamp": ts, "sign": _sign(secret, ts)}
    resp = requests.post(webhook, json=payload, timeout=20)
    resp.raise_for_status()
    data = resp.json()
    if data.get("code") not in (0, None):
        raise SystemExit(f"飞书推送失败: {data}")
    print("✓ 飞书周更提醒已推送")


if __name__ == "__main__":
    send(build_card())
