# -*- coding: utf-8 -*-
"""Build and validate a same-date V3 versus V4-shadow comparison.

This script never edits production dashboard data. It reads the latest V3 weekly
snapshot, validates the V4 evidence ownership ledger, and optionally refreshes
the review-only JSON/JavaScript artifacts.
"""

from __future__ import annotations

import argparse
import datetime as dt
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
OUTPUT_LATEST_JSON = ROOT / "data" / "v4-comparison-latest.json"
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
    for weight_key in ("officialPillarWeights", "pillarWeights"):
        if abs(sum(data[weight_key].values()) - 1.0) > 1e-9:
            raise ValueError(f"{weight_key} must sum to 1")
        if set(data[weight_key]) != set(PILLAR_IDS):
            raise ValueError(f"{weight_key} keys do not match the five-pillar model")
    if set(data["confidenceFactors"]) != {"high", "medium", "low", "missing"}:
        raise ValueError("confidenceFactors must define high, medium, low and missing")
    if not all(0.0 <= value <= 1.0 for value in data["confidenceFactors"].values()):
        raise ValueError("confidenceFactors must stay within 0-1")
    trigger_rules = data.get("redTriggers", {})
    if not 0 <= trigger_rules.get("coerciveScoreFloor", -1) <= 100:
        raise ValueError("redTriggers.coerciveScoreFloor must stay within 0-100")
    if trigger_rules.get("fourWeekDrop", 0) <= 0:
        raise ValueError("redTriggers.fourWeekDrop must be positive")
    if trigger_rules.get("minimumIndependentSources", 0) < 2:
        raise ValueError("red triggers require at least two independent sources")
    if not trigger_rules.get("armedEventTypes") or not trigger_rules.get("disciplineEventTypes"):
        raise ValueError("red trigger event-type lists may not be empty")

    trigger_ids: set[str] = set()
    for signal in evidence.get("triggerSignals", []):
        signal_id = signal.get("id")
        if not signal_id or signal_id in trigger_ids:
            raise ValueError(f"Missing or duplicate trigger signal id: {signal_id}")
        trigger_ids.add(signal_id)
        if signal.get("verificationStatus") not in {"pending", "confirmed", "rejected"}:
            raise ValueError(f"Invalid trigger verificationStatus: {signal_id}")
        if not isinstance(signal.get("independentSourceCount"), int):
            raise ValueError(f"Trigger signal lacks independentSourceCount: {signal_id}")
        if signal.get("eventType") not in set(
            trigger_rules["armedEventTypes"] + trigger_rules["disciplineEventTypes"]
        ):
            raise ValueError(f"Unsupported trigger eventType: {signal_id}")
        if signal.get("eventDate", "") > data["asOf"]:
            raise ValueError(f"Future-dated trigger signal: {signal_id}")

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


def build_result(
    data: dict[str, Any],
    evidence: dict[str, Any],
    history: dict[str, Any],
    production_path: pathlib.Path,
) -> dict[str, Any]:
    observations = validate_and_index(data, evidence)
    if history.get("schemaVersion") != 1 or not isinstance(history.get("snapshots"), list):
        raise ValueError("V4 history schema is invalid")
    history_dates: set[str] = set()
    for snapshot in history["snapshots"]:
        if snapshot.get("date") in history_dates:
            raise ValueError(f"Duplicate V4 history date: {snapshot.get('date')}")
        history_dates.add(snapshot.get("date"))
        if snapshot.get("date", "") > data["asOf"]:
            raise ValueError(f"Future V4 history snapshot: {snapshot.get('date')}")
        if set(snapshot.get("scores", {})) != set(PILLAR_IDS):
            raise ValueError(f"V4 history snapshot has invalid pillar scores: {snapshot.get('date')}")
        if snapshot.get("confirmed") is not True:
            raise ValueError(f"V4 history snapshot is not human-confirmed: {snapshot.get('date')}")
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
    official_v3_composite = 0.0
    reweighted_v3_composite = 0.0
    v4_composite = 0.0
    composite_measurement_confidence = 0.0
    composite_low_confidence_weight = 0.0
    composite_missing_weight = 0.0
    for pillar in data["pillars"]:
        weighted = 0.0
        coverage = 0.0
        non_ordinal = 0.0
        low_confidence = 0.0
        measurement_confidence = 0.0
        driver_rows = []
        for driver in pillar["drivers"]:
            score = driver.get("bridgeScore")
            if driver.get("scoreMethod") == "rating_ladder":
                score = sovereign_score
            if driver["evidenceClass"] in NON_ORDINAL:
                non_ordinal += driver["weight"]
            driver_observations = [observations[item] for item in driver.get("observationIds", [])]
            if driver["availability"] == "low" or any(
                item["confidence"] == "low" for item in driver_observations
            ):
                low_confidence += driver["weight"]
            measurement_confidence += (
                driver["weight"] * data["confidenceFactors"][driver["availability"]]
            )
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
            "measurementConfidence": round(measurement_confidence, 3),
            "nonOrdinalPlannedWeight": round(non_ordinal, 2),
            "pillarWeight": data["pillarWeights"][pillar["id"]],
            "drivers": driver_rows,
        })
        official_weight = data["officialPillarWeights"][pillar["id"]]
        proposed_weight = data["pillarWeights"][pillar["id"]]
        official_v3_composite += pillar["v3Score"] * official_weight
        reweighted_v3_composite += pillar["v3Score"] * proposed_weight
        v4_composite += shadow_score * proposed_weight
        composite_measurement_confidence += measurement_confidence * proposed_weight
        composite_low_confidence_weight += low_confidence * proposed_weight
        composite_missing_weight += (1.0 - coverage) * proposed_weight

    result = {
        "schemaVersion": 1,
        "status": "review-only-shadow",
        "asOf": data["asOf"],
        "official": {
            "methodology": "V3",
            "composite": round1(official_v3_composite),
            "displayScore": round(official_v3_composite),
            "pillarWeights": data["officialPillarWeights"],
            "scores": {key: round1(value) for key, value in production_scores.items()},
        },
        "reweightedBaseline": {
            "methodology": "V3 scores with proposed V4 pillar weights",
            "composite": round1(reweighted_v3_composite),
            "pillarWeights": data["pillarWeights"],
        },
        "shadow": {
            "methodology": "V4",
            "composite": round1(v4_composite),
            "delta": round1(v4_composite - reweighted_v3_composite),
            "pillarWeights": data["pillarWeights"],
            "publicationStatus": "provisional-shadow",
        },
        "measurement": {
            "confidence": round(composite_measurement_confidence, 3),
            "lowConfidenceWeight": round(composite_low_confidence_weight, 3),
            "missingWeight": round(composite_missing_weight, 3),
            "confidenceFactors": data["confidenceFactors"],
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
            "The V4 methodology delta compares V4 with the same V3 pillar scores under the proposed V4 pillar weights; the official equal-weight V3 composite is shown separately.",
            "Missing V4 inputs are not assigned subjective scores. Shadow mode renormalises available driver weights only to show structure; production V4 must not do this.",
            "Low-confidence ordinal and crawler inputs have reduced within-pillar weights, remain visible, and cannot be mistaken for high-confidence statistics.",
            "Each evidence observation has one primary scoring owner to prevent double counting across pillars.",
            "Coercive tail-risk events use independent alert triggers so a 10% routine weight cannot hide a verified institutional rupture.",
        ],
    }
    result["triggers"] = evaluate_red_triggers(result, data, evidence, history)
    return result


def evaluate_red_triggers(
    result: dict[str, Any],
    data: dict[str, Any],
    evidence: dict[str, Any],
    history: dict[str, Any],
) -> dict[str, Any]:
    """Evaluate non-linear coercive tail-risk alarms separately from pillar weights."""
    rules = data["redTriggers"]
    minimum_sources = rules["minimumIndependentSources"]
    signals = evidence.get("triggerSignals", [])
    qualified = [
        signal for signal in signals
        if signal["verificationStatus"] == "confirmed"
        and signal["independentSourceCount"] >= minimum_sources
    ]
    active: list[dict[str, Any]] = []
    rule_rows: list[dict[str, Any]] = []

    armed_matches = []
    for signal in qualified:
        if signal["eventType"] == "interagency_live_fire" and signal.get("liveFire") is True:
            armed_matches.append(signal)
        elif signal["eventType"] == "interagency_fatality" and signal.get("fatalities", 0) >= 1:
            armed_matches.append(signal)
    armed_active = bool(armed_matches)
    rule_rows.append({
        "id": "verified_armed_interagency_event",
        "label": "经核验的军警实弹冲突或死亡",
        "condition": (
            f"事件为实弹冲突或至少1人死亡，verificationStatus=confirmed，"
            f"独立来源数≥{minimum_sources}"
        ),
        "status": "active" if armed_active else "clear",
        "matchingSignalIds": [signal["id"] for signal in armed_matches],
    })
    if armed_active:
        active.append({
            "id": "verified_armed_interagency_event",
            "label": "经核验的军警实弹冲突或死亡",
            "detail": f"{len(armed_matches)}个事件满足双源核验条件。",
        })

    discipline_matches = [
        signal for signal in qualified
        if signal["eventType"] in rules["disciplineEventTypes"]
    ]
    discipline_active = bool(discipline_matches)
    rule_rows.append({
        "id": "verified_discipline_break",
        "label": "成建制拒令、倒戈或平行指挥",
        "condition": (
            f"事件类型属于{rules['disciplineEventTypes']}，verificationStatus=confirmed，"
            f"独立来源数≥{minimum_sources}"
        ),
        "status": "active" if discipline_active else "clear",
        "matchingSignalIds": [signal["id"] for signal in discipline_matches],
    })
    if discipline_active:
        active.append({
            "id": "verified_discipline_break",
            "label": "成建制拒令、倒戈或平行指挥",
            "detail": f"{len(discipline_matches)}个事件满足双源核验条件。",
        })

    coercive_score = next(
        pillar["v4ShadowScore"] for pillar in result["pillars"] if pillar["id"] == "coercive"
    )
    floor_active = coercive_score < rules["coerciveScoreFloor"]
    rule_rows.append({
        "id": "coercive_score_floor",
        "label": "强制机构支柱跌破红线",
        "condition": f"V4强制机构支柱分<{rules['coerciveScoreFloor']}",
        "status": "active" if floor_active else "clear",
        "observed": coercive_score,
    })
    if floor_active:
        active.append({
            "id": "coercive_score_floor",
            "label": "强制机构支柱跌破红线",
            "detail": f"当前{coercive_score:.1f}，低于{rules['coerciveScoreFloor']}。",
        })

    current_date = dt.date.fromisoformat(result["asOf"])
    cutoff = current_date - dt.timedelta(days=28)
    historical_candidates = [
        snapshot for snapshot in history.get("snapshots", [])
        if dt.date.fromisoformat(snapshot["date"]) <= cutoff
    ]
    prior = max(historical_candidates, key=lambda snapshot: snapshot["date"], default=None)
    rapid_review = evidence.get("rapidDropReview", {})
    if prior is None:
        rapid_status = "not_evaluable"
        rapid_observed: dict[str, Any] = {"reason": "尚无至少四周前的V4影子基线"}
        rapid_active = False
    else:
        prior_score = float(prior["scores"]["coercive"])
        drop = round1(prior_score - coercive_score)
        rapid_observed = {
            "baselineDate": prior["date"],
            "baselineScore": prior_score,
            "currentScore": coercive_score,
            "drop": drop,
            "reviewConfirmed": bool(rapid_review.get("confirmed")),
            "independentSourceCount": int(rapid_review.get("independentSourceCount", 0)),
        }
        threshold_crossed = drop >= rules["fourWeekDrop"]
        review_sufficient = (
            rapid_review.get("confirmed") is True
            and rapid_review.get("independentSourceCount", 0) >= minimum_sources
        )
        rapid_active = threshold_crossed and review_sufficient
        rapid_status = (
            "active" if rapid_active
            else "pending_confirmation" if threshold_crossed
            else "clear"
        )
    rule_rows.append({
        "id": "four_week_coercive_drop",
        "label": "四周内强制机构分数快速下跌",
        "condition": (
            f"相对至少四周前下降≥{rules['fourWeekDrop']}分，且人工确认并有"
            f"≥{minimum_sources}个独立来源"
        ),
        "status": rapid_status,
        "observed": rapid_observed,
    })
    if rapid_active:
        active.append({
            "id": "four_week_coercive_drop",
            "label": "四周内强制机构分数快速下跌",
            "detail": (
                f"由{rapid_observed['baselineScore']:.1f}降至"
                f"{rapid_observed['currentScore']:.1f}，下降{rapid_observed['drop']:.1f}分。"
            ),
        })

    return {
        "level": "red" if active else "normal",
        "active": active,
        "rules": rule_rows,
        "qualifiedSignalCount": len(qualified),
        "note": (
            "触发器不改变综合分；它们覆盖低频尾部风险。pending或单一来源事件只进入待确认，"
            "不能触发红色警报。"
        ),
    }


def json_text(result: dict[str, Any]) -> str:
    return json.dumps(result, ensure_ascii=False, indent=2) + "\n"


def js_text(result: dict[str, Any]) -> str:
    return "const V4_COMPARISON = " + json.dumps(result, ensure_ascii=False, indent=2) + ";\n"


def archive_output_path(as_of: str) -> pathlib.Path:
    return ROOT / "data" / f"v4-comparison-{as_of}.json"


def write_text_atomic(path: pathlib.Path, content: str) -> None:
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(content, encoding="utf-8")
    temporary.replace(path)


def check_output(result: dict[str, Any]) -> None:
    archive = archive_output_path(result["asOf"])
    expected_json = load_json(archive)
    if expected_json != result:
        raise ValueError(f"{archive.name} is stale; run score_v4_shadow.py --write-output")
    if load_json(OUTPUT_LATEST_JSON) != result:
        raise ValueError(
            f"{OUTPUT_LATEST_JSON.name} is stale; run score_v4_shadow.py --write-output"
        )
    expected_js = js_text(result)
    if OUTPUT_JS.read_text(encoding="utf-8") != expected_js:
        raise ValueError(f"{OUTPUT_JS.name} is stale; run score_v4_shadow.py --write-output")


def history_snapshot(result: dict[str, Any]) -> dict[str, Any]:
    return {
        "date": result["asOf"],
        "scores": {
            pillar["id"]: pillar["v4ShadowScore"] for pillar in result["pillars"]
        },
        "composite": result["shadow"]["composite"],
        "measurementConfidence": result["measurement"]["confidence"],
        "triggerLevel": result["triggers"]["level"],
        "activeTriggerIds": [
            trigger["id"] for trigger in result["triggers"]["active"]
        ],
        "status": result["shadow"]["publicationStatus"],
        "confirmed": True,
    }


def append_history_confirmed(
    result: dict[str, Any],
    history_path: pathlib.Path,
    confirmed: bool,
) -> None:
    if not confirmed:
        raise ValueError(
            "--append-history requires --confirmed after the owner has reviewed the evidence"
        )
    history = load_json(history_path)
    if history.get("schemaVersion") != 1 or not isinstance(history.get("snapshots"), list):
        raise ValueError("V4 history schema is invalid")
    snapshot = history_snapshot(result)
    existing = [item for item in history["snapshots"] if item["date"] == result["asOf"]]
    if existing:
        if existing[0] != snapshot:
            raise ValueError(
                f"History already contains a different confirmed snapshot for {result['asOf']}"
            )
        print(f"历史已包含相同快照: {result['asOf']}（未重复写入）")
        return
    history["snapshots"].append(snapshot)
    history["snapshots"].sort(key=lambda item: item["date"])
    write_text_atomic(history_path, json.dumps(history, ensure_ascii=False, indent=2) + "\n")
    print(f"已写入人类确认的V4影子历史: {result['asOf']}")


def render_console(result: dict[str, Any]) -> None:
    print(f"同日比较 {result['asOf']} — V3正式 / V4影子")
    print("支柱                     V3    V4    变化   覆盖  低置信权重")
    for pillar in result["pillars"]:
        print(
            f"{pillar['label']:<22} {pillar['v3Score']:>4.1f}  {pillar['v4ShadowScore']:>4.1f} "
            f" {pillar['delta']:>+5.1f}  {pillar['coverage']:>5.0%}  {pillar['lowConfidenceWeight']:>7.0%}"
        )
    print(
        f"综合指数: V3正式={result['official']['composite']:.1f}, "
        f"V3按V4权重={result['reweightedBaseline']['composite']:.1f}, "
        f"V4影子={result['shadow']['composite']:.1f}, 方法变化={result['shadow']['delta']:+.1f}"
    )
    print(
        f"测量置信度={result['measurement']['confidence']:.1%}, "
        f"低置信权重={result['measurement']['lowConfidenceWeight']:.1%}, "
        f"缺失权重={result['measurement']['missingWeight']:.1%}"
    )
    print(
        f"红色触发器={result['triggers']['level']}，"
        f"激活数={len(result['triggers']['active'])}，"
        f"合格事件信号={result['triggers']['qualifiedSignalCount']}"
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=pathlib.Path, default=INPUT)
    parser.add_argument("--production-data", type=pathlib.Path, default=DEFAULT_PRODUCTION)
    parser.add_argument("--write-output", action="store_true")
    parser.add_argument("--check-output", action="store_true")
    parser.add_argument("--append-history", action="store_true")
    parser.add_argument(
        "--confirmed",
        action="store_true",
        help="Explicit owner confirmation required before appending weekly V4 shadow history",
    )
    args = parser.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    data = load_json(args.input)
    evidence = load_json(ROOT / "data" / data["evidenceFile"])
    history_path = ROOT / "data" / data["historyFile"]
    history = load_json(history_path)
    result = build_result(data, evidence, history, args.production_data)
    if args.write_output:
        write_text_atomic(archive_output_path(result["asOf"]), json_text(result))
        write_text_atomic(OUTPUT_LATEST_JSON, json_text(result))
        write_text_atomic(OUTPUT_JS, js_text(result))
    if args.check_output:
        check_output(result)
    if args.append_history:
        append_history_confirmed(result, history_path, args.confirmed)
    render_console(result)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
