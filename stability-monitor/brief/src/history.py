"""状态层:维护关键指标的时间序列,供周报做同比/环比分析。

初始数据来自我们那个看板。之后每次周报运行时,你可以手动更新
或接一个行情 API 自动填。这里刻意不自动抓行情——免费行情源
的可靠性远低于 RSS,与其自动填错不如留空。
"""

from __future__ import annotations

import json
import logging
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

log = logging.getLogger(__name__)

HISTORY_PATH = Path("data/history.json")

# 初始种子:来自 2026-07-10 看板
SEED: list[dict[str, Any]] = [
    {
        "date": "2026-01-29",
        "idr_usd": 16720,
        "jci": None,
        "bi_rate": 5.00,
        "deficit_pct_gdp": None,
        "note": "MSCI 降级警告,JCI 两日 -16.7%",
    },
    {
        "date": "2026-03-31",
        "idr_usd": 17000,
        "jci": None,
        "bi_rate": 5.00,
        "deficit_pct_gdp": None,
        "note": "普拉博沃访日宣布年内上 B50,推翻一月决定",
    },
    {
        "date": "2026-05-21",
        "idr_usd": 17600,
        "jci": None,
        "bi_rate": 5.25,
        "deficit_pct_gdp": None,
        "note": "BI 两年来首次加息",
    },
    {
        "date": "2026-06-03",
        "idr_usd": 17930,
        "jci": 5941,
        "bi_rate": 5.50,
        "deficit_pct_gdp": 0.70,
        "note": "穆迪给 DIM 负面展望,JCI -4.11% 至五年低",
    },
    {
        "date": "2026-06-10",
        "idr_usd": 18014,
        "jci": None,
        "bi_rate": 5.75,
        "deficit_pct_gdp": None,
        "note": "Pertamax 一夜 +32.11%",
    },
    {
        "date": "2026-07-07",
        "idr_usd": 18005,
        "jci": None,
        "bi_rate": 5.75,
        "deficit_pct_gdp": 0.76,
        "note": "S&P DJI 列入观察名单;H1 赤字 0.76%,基本盈余 85.1 万亿",
    },
    {
        "date": "2026-07-09",
        "idr_usd": 18128,
        "jci": 5912,
        "bi_rate": 5.75,
        "deficit_pct_gdp": 0.76,
        "note": "B50 正式发布;卢比收 18,128",
    },
]


def load() -> list[dict[str, Any]]:
    if not HISTORY_PATH.exists():
        log.info("history.json 不存在,写入种子数据")
        HISTORY_PATH.parent.mkdir(parents=True, exist_ok=True)
        save(SEED)
        return list(SEED)
    with HISTORY_PATH.open(encoding="utf-8") as f:
        return json.load(f)


def save(records: list[dict[str, Any]]) -> None:
    HISTORY_PATH.parent.mkdir(parents=True, exist_ok=True)
    with HISTORY_PATH.open("w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)


def append_note(note: str) -> None:
    """周报运行后追加一条只带日期和摘要的记录,数值字段留空由你补。"""
    records = load()
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    if records and records[-1].get("date") == today:
        return
    records.append(
        {
            "date": today,
            "idr_usd": None,
            "jci": None,
            "bi_rate": None,
            "deficit_pct_gdp": None,
            "note": note[:200],
        }
    )
    save(records)
