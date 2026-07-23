# -*- coding: utf-8 -*-
"""Build and validate a same-date V3 versus V4-shadow comparison.

This script never edits production dashboard data. It reads the latest V3 weekly
snapshot, validates the V4 evidence ownership ledger, and optionally refreshes
the review-only JSON/JavaScript artifacts.
"""

from __future__ import annotations

import argparse
from decimal import Decimal, ROUND_HALF_UP
import json
import pathlib
import re
import statistics
import sys
from typing import Any


HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
INPUT = ROOT / "data" / "v4-shadow-input.json"
DEFAULT_PRODUCTION = ROOT / "dashboard" / "data.js"
OUTPUT_JSON = ROOT / "data" / "v4-comparison-2026-07-22.json"
OUTPUT_JS = ROOT / "data" / "v4-comparison-data.js"

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
PILLAR_IDS = ("fiscal", "currency", "institutions", "social", "coercive")

WEEKLY_RE = re.compile(
    r'\{\s*date:\s*"(?P<date>\d{4}-\d{2}-\d{2})"\s*,\s*scores:\s*\{\s*'
    r'fiscal:\s*(?P<fiscal>\d+(?:\.\d+)?)\s*,\s*'
    r'currency:\s*(?P<currency>\d+(?:\.\d+)?)\s*,\s*'
    r'institutions:\s*(?P<institutions>\d+(?:\.\d+)?)\s*,\s*'
    r'social:\s*(?P<social>\d+(?:\.\d+)?)\s*,\s*'
    r'coercive:\s*(?P<coercive>\d+(?:\.\d+)?)\s*\}\s*\}'
)


def round1(value: float) -> float:
    """Round display values conventionally instead of using bankers' rounding."""
    return float(Decimal(str(value)).quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))


def load_json(path: pathlib.Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def rating_score(rating: str, outlook: str) -> tuple[float, str, float]:
    common = MOODYS_TO_COMMON.get(rating, rating)
    if common not in RATING_LADDER:
        raise ValueError(f"Unsupported rating: {rating}")
    if outlook not in OUTLOOK_ADJUSTMENT:
        raise ValueError(f"Unsupported outlook: {outlook}")
    effective_index = RATING_LADDER.index(common) + OUTLOOK_ADJUSTMENT[outlook]
    effective_index = min(max(effective_index, 0.0), len(RATING_LADDER) - 1)
    score = 100.0 * (len(RATING_LADDER) - 1 - effective_index) / (len(RATING_LADDER) - 1)
    return score, common, effective_index


def parse_latest_v3(path: pathlib.Path) -> tuple[str, dict[str, float]]:
    matches = list(WEEKLY_RE.finditer(path.read_text(encoding="utf-8")))
    if not matches:
        raise ValueError(f"No V3 weekly snapshots found in {path}")
    latest = max(matches, key=lambda match: match.group("date"))
    return latest.group("date"), {pillar: float(latest.group(pillar)) for pillar in PILLAR_IDS}


def validate_and_index(data: dict[str, Any], evidence: dict[str, Any]) -> dict[str, dict[str, Any]]:
    if data.get("schemaVersion") != 2 or data.get("status") != "shadow-same-date":
        raise ValueError("V4 input must use schemaVersion 2 and shadow-same-date status")
    if evidence.get("asOf") != data.get("asOf"):
        raise ValueError("Evidence and V4 input must use the same cutoff date")
    if abs(sum(data["pillarWeights"].values()) - 1.0) > 1e-9:
        raise ValueError("Pillar weights must sum to 1")
    if set(data["pillarWeights"]) != set(PILLAR_IDS):
        raise ValueError("Pillar weight keys do not match the five-pillar model")

    observations: dict[str, dict[str, Any]] = {}
    for observation in evidence.get("observations", []):
        observation_id = observation.get("id")
        if not observation_id or observation_id in observations:
            raise ValueError(f"Missing or duplicate observation id: {observation_id}")
        if observation.get("confidence") not in {"high", "medium", "low"}:
            raise ValueError(f"Invalid confidence for {observation_id}")
        if not observation.get("primaryOwner"):
            raise ValueError(f"Observation {observation_id} has no primaryOwner")
        observations[observation_id] = observation

    seen_pillars: set[str] = set()
    referenced: set[str] = set()
    for pillar in data["pillars"]:
        pillar_id = pillar["id"]
        if pillar_id in seen_pillars or pillar_id not in PILLAR_IDS:
            raise ValueError(f"Invalid or duplicate pillar: {pillar_id}")
        seen_pillars.add(pillar_id)
        drivers = pillar["drivers"]
        if not 4 <= len(drivers) <= 5:
            raise ValueError(f"{pillar_id} must have 4-5 drivers")
        if abs(sum(driver["weight"] for driver in drivers) - 1.0) > 1e-9:
            raise ValueError(f"{pillar_id} driver weights must sum to 1")
        driver_ids: set[str] = set()
        for driver in drivers:
            driver_id = driver["id"]
            owner = f"{pillar_id}.{driver_id}"
            if driver_id in driver_ids:
                raise ValueError(f"Duplicate driver: {owner}")
            driver_ids.add(driver_id)
            observation_ids = driver.get("observationIds", [])
            if driver.get("bridgeScore") is not None or driver.get("scoreMethod"):
                if not observation_ids:
                    raise ValueError(f"Scored driver {owner} has no evidence")
            elif not driver.get("missingReason"):
                raise ValueError(f"Missing driver {owner} must state missingReason")
            for observation_id in observation_ids:
                if observation_id not in observations:
                    raise ValueError(f"Unknown observation {observation_id} used by {owner}")
                if observations[observation_id]["primaryOwner"] != owner:
                    raise ValueError(
                        f"Observation {observation_id} belongs to "
                        f"{observations[observation_id]['primaryOwner']}, not {owner}"
                    )
                if observation_id in referenced:
                    raise ValueError(f"Observation {observation_id} contributes to more than one driver")
                referenced.add(observation_id)
    if seen_pillars != set(PILLAR_IDS):
        raise ValueError("V4 input does not contain exactly the five pillars")

    rating_observations = {item["observationId"] for item in data["ratings"]}
    if not rating_observations.issubset(referenced):
        raise ValueError("Every rating must be linked to the sovereign-rating driver")
    unreferenced = set(observations) - referenced
    if unreferenced:
        raise ValueError(f"Unreferenced evidence observations: {sorted(unreferenced)}")
    return observations


def build_result(data: dict[str, Any], evidence: dict[str, Any], production_path: pathlib.Path) -> dict[str, Any]:
    observations = validate_and_index(data, evidence)
    production_date, production_scores = parse_latest_v3(production_path)
    if production_date != data["asOf"]:
        raise ValueError(f"V3 latest date {production_date} does not match V4 cutoff {data['asOf']}")

    configured_v3 = {pillar["id"]: float(pillar["v3Score"]) for pillar in data["pillars"]}
    if configured_v3 != production_scores:
        raise ValueError(f"Configured V3 scores {configured_v3} do not match production {production_scores}")

    if rating_score("BBB", "positive")[0] >= rating_score("A-", "negative")[0]:
        raise ValueError("Rating level must dominate outlook direction")
    rating_rows = []
    rating_scores = []
    for item in data["ratings"]:
        score, common, effective_index = rating_score(item["rating"], item["outlook"])
        rating_scores.append(score)
        rating_rows.append({
            "agency": item["agency"],
            "rating": item["rating"],
            "commonRating": common,
            "outlook": item["outlook"],
            "effectiveIndex": round1(effective_index),
            "score": round1(score),
            "source": item["source"],
        })
    sovereign_score = statistics.median(rating_scores)

    pillar_rows = []
    v3_composite = 0.0
    v4_composite = 0.0
    for pillar in data["pillars"]:
        weighted = 0.0
        coverage = 0.0
        non_ordinal = 0.0
        low_confidence = 0.0
        driver_rows = []
        for driver in pillar["drivers"]:
            score = driver.get("bridgeScore")
            if driver.get("scoreMethod") == "rating_ladder":
                score = sovereign_score
            if driver["evidenceClass"] in NON_ORDINAL:
                non_ordinal += driver["weight"]
            driver_observations = [observations[item] for item in driver.get("observationIds", [])]
            if any(item["confidence"] == "low" for item in driver_observations):
                low_confidence += driver["weight"]
            if score is not None:
                weighted += float(score) * driver["weight"]
                coverage += driver["weight"]
            driver_rows.append({
                "id": driver["id"],
                "label": driver["label"],
                "weight": driver["weight"],
                "score": None if score is None else round1(float(score)),
                "evidenceClass": driver["evidenceClass"],
                "availability": driver["availability"],
                "observationIds": driver.get("observationIds", []),
                "basis": driver["bridgeBasis"],
                "missingReason": driver.get("missingReason"),
            })
        if not coverage:
            raise ValueError(f"{pillar['id']} has no available shadow inputs")
        shadow_score = weighted / coverage
        displayed_shadow_score = round1(shadow_score)
        delta = displayed_shadow_score - pillar["v3Score"]
        pillar_rows.append({
            "id": pillar["id"],
            "label": pillar["label"],
            "v3Score": round1(float(pillar["v3Score"])),
            "v4ShadowScore": displayed_shadow_score,
            "delta": round1(delta),
            "coverage": round(coverage, 2),
            "missingWeight": round(1.0 - coverage, 2),
            "lowConfidenceWeight": round(low_confidence, 2),
            "nonOrdinalPlannedWeight": round(non_ordinal, 2),
            "drivers": driver_rows,
        })
        pillar_weight = data["pillarWeights"][pillar["id"]]
        v3_composite += pillar["v3Score"] * pillar_weight
        v4_composite += shadow_score * pillar_weight

    return {
        "schemaVersion": 1,
        "status": "review-only-shadow",
        "asOf": data["asOf"],
        "official": {
            "methodology": "V3",
            "composite": round1(v3_composite),
            "displayScore": round(v3_composite),
            "scores": {key: round1(value) for key, value in production_scores.items()},
        },
        "shadow": {
            "methodology": "V4",
            "composite": round1(v4_composite),
            "delta": round1(v4_composite - v3_composite),
        },
        "ratings": {
            "medianScore": round1(sovereign_score),
            "rule": "Rating level first; outlook adjusts by at most half a notch.",
            "agencies": rating_rows,
        },
        "pillars": pillar_rows,
        "evidenceFile": data["evidenceFile"],
        "caveats": [
            "V3 remains the official production methodology; V4 is a same-date shadow comparison only.",
            "Missing V4 inputs are not assigned subjective scores; available weights are renormalised and coverage is displayed.",
            "Low-confidence ordinal and crawler inputs remain visible and cannot be mistaken for high-confidence statistics.",
            "Each evidence observation has one primary scoring owner to prevent double counting across pillars.",
        ],
    }


def json_text(result: dict[str, Any]) -> str:
    return json.dumps(result, ensure_ascii=False, indent=2) + "\n"


def js_text(result: dict[str, Any]) -> str:
    return "const V4_COMPARISON = " + json.dumps(result, ensure_ascii=False, indent=2) + ";\n"


def check_output(result: dict[str, Any]) -> None:
    expected_json = load_json(OUTPUT_JSON)
    if expected_json != result:
        raise ValueError(f"{OUTPUT_JSON.name} is stale; run score_v4_shadow.py --write-output")
    expected_js = js_text(result)
    if OUTPUT_JS.read_text(encoding="utf-8") != expected_js:
        raise ValueError(f"{OUTPUT_JS.name} is stale; run score_v4_shadow.py --write-output")


def render_console(result: dict[str, Any]) -> None:
    print(f"同日比较 {result['asOf']} — V3正式 / V4影子")
    print("支柱                     V3    V4    变化   覆盖  低置信权重")
    for pillar in result["pillars"]:
        print(
            f"{pillar['label']:<22} {pillar['v3Score']:>4.1f}  {pillar['v4ShadowScore']:>4.1f} "
            f" {pillar['delta']:>+5.1f}  {pillar['coverage']:>5.0%}  {pillar['lowConfidenceWeight']:>7.0%}"
        )
    print(
        f"综合指数: V3={result['official']['composite']:.1f}, "
        f"V4影子={result['shadow']['composite']:.1f}, 变化={result['shadow']['delta']:+.1f}"
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--production-data", type=pathlib.Path, default=DEFAULT_PRODUCTION)
    parser.add_argument("--write-output", action="store_true")
    parser.add_argument("--check-output", action="store_true")
    args = parser.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    data = load_json(INPUT)
    evidence = load_json(ROOT / "data" / data["evidenceFile"])
    result = build_result(data, evidence, args.production_data)
    if args.write_output:
        OUTPUT_JSON.write_text(json_text(result), encoding="utf-8")
        OUTPUT_JS.write_text(js_text(result), encoding="utf-8")
    if args.check_output:
        check_output(result)
    render_console(result)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

