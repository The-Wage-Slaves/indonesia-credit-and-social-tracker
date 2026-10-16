# -*- coding: utf-8 -*-
"""
计数/状态类 driver · 衰减计数
==============================
2026-10-16 方法论变更（逐期对照表见该次 PR）。旧口径「滚动 N 个月内 ≥k 起」有三个毛病：

1. **硬窗口悬崖**：事件满 N 个月一起消失，分数会在没有任何好转的情况下跳回高位
   （按旧规则，若此后无新事件，2027-02 底镇压一项会在两周内 18→65）；
2. **底档没有分辨力**：「≥3 起」一档到底，第 4、第 5 起不再扣分；
3. **事件不记日期，窗口从未真正执行**（2026-10-16 核出军警冲突、精英清洗录错了年份）。

新口径：每起事件按半衰期衰减，指数 I = Σ 权重 × 0.5^(事件年龄/半衰期)，连续映射到分数。
半衰期取与原窗口面积相等的值（6 个月窗口 ⇔ 约 4.2 个月），映射沿用旧档的「1 起」锚点——
都不是按结果拟合的。台账在 data/event-ledgers.json，由人维护；本脚本只读、只算。

用法:
  python event_decay.py --date 2026-10-16           # 打印各 driver 的指数与分数
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import math
import pathlib
import sys
from decimal import Decimal, ROUND_HALF_UP

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

HERE = pathlib.Path(__file__).resolve().parent
LEDGER = HERE.parent / "data" / "event-ledgers.json"


def half_up(x: float) -> int:
    return int(Decimal(repr(x)).quantize(Decimal("1"), rounding=ROUND_HALF_UP))


def load(path: pathlib.Path = LEDGER) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def decay_index(events: list[dict], day: str, half_life_years: float) -> float:
    t = dt.date.fromisoformat(day)
    total = 0.0
    for e in events:
        d = dt.date.fromisoformat(e["date"])
        if d <= t:
            total += e["weight"] * 0.5 ** (((t - d).days / 365.25) / half_life_years)
    return total


# 映射：与 data/event-ledgers.json 里每个 ledger 的 "mapping" 文字一一对应
MAPPINGS = {
    "policy_reversal": lambda I, L: max(5, half_up(80 * 0.75 ** I)),
    "elite_purge":     lambda I, L: max(5, half_up(80 * 0.75 ** I)),
    "repression":      lambda I, L: half_up(10 + 55 * 0.62 ** I),
    "interagency":     lambda I, L: half_up(15 + 70 * 0.5 ** I),
    "key_turnover":    lambda I, L: max(5, min(75, half_up(55 * 0.75 ** (I - baseline_index(L))))),
}


def baseline_index(L: dict) -> float:
    b = L["ledgers"]["key_turnover"]["baseline"]["weightedEventsPerYear"]
    h = L["halfLifeYears"][L["ledgers"]["key_turnover"]["halfLife"]]
    return b * h / math.log(2)


def score(L: dict, key: str, day: str) -> tuple[float, int]:
    led = L["ledgers"][key]
    I = decay_index(led["events"], day, L["halfLifeYears"][led["halfLife"]])
    return I, MAPPINGS[key](I, L)


def territorial_progress(L: dict, day: str) -> float:
    T = L["territorial"]
    state = dict(T["baseline"])
    for row in T["timeline"]:
        if row["date"] <= day:
            state = {"kodam": row["kodam"], "battalions": row["battalions"]}
    k0, kt = T["baseline"]["kodam"], T["targets"]["kodam"]
    b0, bt = T["baseline"]["battalions"], T["targets"]["battalions"]
    return ((state["kodam"] - k0) / (kt - k0) + (state["battalions"] - b0) / (bt - b0)) / 2


def military_score(L: dict, day: str, civil_ordinal: int) -> int:
    return half_up(civil_ordinal - 15 * territorial_progress(L, day))


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--date", required=True)
    ap.add_argument("--civil", type=int, default=40, help="军队文职渗透序数分（当前 40）")
    a = ap.parse_args(argv)
    L = load()
    for key in MAPPINGS:
        I, s = score(L, key, a.date)
        print(f"{L['ledgers'][key]['driver']:<16} I={I:5.2f} → {s}")
    print(f"I_base(要害更替)={baseline_index(L):.2f}")
    p = territorial_progress(L, a.date)
    print(f"{L['territorial']['driver']:<16} 进度={p:.2f} → {military_score(L, a.date, a.civil)}")


if __name__ == "__main__":
    sys.exit(main())
