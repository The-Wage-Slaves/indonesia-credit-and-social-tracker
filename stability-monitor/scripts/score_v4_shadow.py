# -*- coding: utf-8 -*-
"""Reproduce the v3 vs v4-shadow comparison without touching dashboard data."""

from __future__ import annotations

import json
import pathlib
import statistics
import sys


HERE = pathlib.Path(__file__).resolve().parent
INPUT = HERE.parent / "data" / "v4-shadow-input.json"

RATING_LADDER = [
    "AAA", "AA+", "AA", "AA-", "A+", "A", "A-", "BBB+", "BBB", "BBB-",
    "BB+", "BB", "BB-", "B+", "B", "B-", "CCC+", "CCC", "CCC-", "CC", "C", "D",
]
MOODYS_TO_COMMON = {
    "Aaa": "AAA", "Aa1": "AA+", "Aa2": "AA", "Aa3": "AA-",
    "A1": "A+", "A2": "A", "A3": "A-",
    "Baa1": "BBB+", "Baa2": "BBB", "Baa3": "BBB-",
    "Ba1": "BB+", "Ba2": "BB", "Ba3": "BB-",
    "B1": "B+", "B2": "B", "B3": "B-",
    "Caa1": "CCC+", "Caa2": "CCC", "Caa3": "CCC-", "Ca": "CC", "C": "C",
}
OUTLOOK_ADJUSTMENT = {
    "positive": -0.5,
    "stable": 0.0,
    "negative": 0.5,
    "developing": 0.0,
    "watch_positive": -1.0,
    "watch_negative": 1.0,
}
NON_ORDINAL = {"statistical", "external_rating", "event_count", "automated_proxy"}


def rating_score(rating: str, outlook: str) -> tuple[float, str, float]:
    common = MOODYS_TO_COMMON.get(rating, rating)
    if common not in RATING_LADDER:
        raise ValueError(f"Unsupported rating: {rating}")
    effective_index = RATING_LADDER.index(common) + OUTLOOK_ADJUSTMENT[outlook]
    effective_index = min(max(effective_index, 0.0), len(RATING_LADDER) - 1)
    score = 100.0 * (len(RATING_LADDER) - 1 - effective_index) / (len(RATING_LADDER) - 1)
    return score, common, effective_index


def validate_weights(data: dict) -> None:
    if abs(sum(data["pillarWeights"].values()) - 1.0) > 1e-9:
        raise ValueError("Pillar weights must sum to 1")
    for pillar in data["pillars"]:
        total = sum(driver["weight"] for driver in pillar["drivers"])
        if abs(total - 1.0) > 1e-9:
            raise ValueError(f"{pillar['id']} driver weights sum to {total}, expected 1")
        if not 4 <= len(pillar["drivers"]) <= 5:
            raise ValueError(f"{pillar['id']} must have 4-5 drivers")


def validate_rating_order() -> None:
    """An outlook must not let a lower rating leapfrog a higher rating band."""
    bbb_positive = rating_score("BBB", "positive")[0]
    a_minus_negative = rating_score("A-", "negative")[0]
    if bbb_positive >= a_minus_negative:
        raise ValueError("Rating level no longer dominates outlook direction")


def main() -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    data = json.loads(INPUT.read_text(encoding="utf-8"))
    validate_weights(data)
    validate_rating_order()

    agency_scores = []
    print("主权评级统一阶梯（展望=±0.5 notch）")
    for item in data["ratings"]:
        score, common, effective = rating_score(item["rating"], item["outlook"])
        agency_scores.append(score)
        print(
            f"  {item['agency']:<8} {item['rating']:<5} {item['outlook']:<8} "
            f"→ {common:<4} effective-index={effective:.1f}, score={score:.1f}"
        )
    sovereign_rating = statistics.median(agency_scores)
    print(f"  三机构中位数评分: {sovereign_rating:.1f}\n")

    v3_composite = 0.0
    v4_composite = 0.0
    print("支柱对比")
    print("  支柱                 v3   v4影子   变化   数据覆盖  非序数计划权重")
    for pillar in data["pillars"]:
        weighted = 0.0
        coverage = 0.0
        non_ordinal_share = 0.0
        for driver in pillar["drivers"]:
            if driver["evidenceClass"] in NON_ORDINAL:
                non_ordinal_share += driver["weight"]
            score = driver.get("bridgeScore")
            if driver.get("scoreMethod") == "rating_ladder":
                score = sovereign_rating
            if score is not None:
                weighted += score * driver["weight"]
                coverage += driver["weight"]
        if coverage == 0:
            raise ValueError(f"{pillar['id']} has no available shadow inputs")
        shadow_score = weighted / coverage
        pillar["calculatedShadowScore"] = round(shadow_score, 1)
        pillar["coverage"] = round(coverage, 2)
        pillar["nonOrdinalPlannedWeight"] = round(non_ordinal_share, 2)
        change = shadow_score - pillar["v3Score"]
        print(
            f"  {pillar['label']:<20} {pillar['v3Score']:>3.0f}   {shadow_score:>6.1f} "
            f" {change:>+6.1f}   {coverage:>7.0%}       {non_ordinal_share:>7.0%}"
        )
        weight = data["pillarWeights"][pillar["id"]]
        v3_composite += pillar["v3Score"] * weight
        v4_composite += shadow_score * weight

    print()
    print(f"综合指数: v3={v3_composite:.1f}, v4影子={v4_composite:.1f}, 变化={v4_composite-v3_composite:+.1f}")
    print("注意：v4影子是结构迁移比较，不是正式新评分；bridgeScore 仍含 v3 旧口径。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
