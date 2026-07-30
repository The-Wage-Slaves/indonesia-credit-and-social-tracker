#!/usr/bin/env python3
"""Roll one human-confirmed street-heat result into the V4 shadow input.

This helper never runs from the collector itself.  It requires --confirmed so
the repository's human-in-the-loop boundary remains explicit.
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
INPUT_FILE = DATA_DIR / "v4-shadow-input.json"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", required=True)
    parser.add_argument("--heat", type=float, required=True)
    parser.add_argument("--heat-score", type=float, required=True)
    parser.add_argument("--opposition", type=float, required=True)
    parser.add_argument("--opposition-score", type=float, required=True)
    parser.add_argument("--coverage", required=True)
    parser.add_argument("--v3-social", type=float, required=True)
    parser.add_argument("--confirmed", action="store_true")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    if not args.confirmed:
        raise SystemExit("Refusing to write: pass --confirmed only after explicit human approval.")

    config = json.loads(INPUT_FILE.read_text(encoding="utf-8"))
    previous_evidence = DATA_DIR / config["evidenceFile"]
    evidence = json.loads(previous_evidence.read_text(encoding="utf-8"))

    composite = round(0.60 * args.heat_score + 0.40 * args.opposition_score)
    observation = next(
        item
        for item in evidence["observations"]
        if item["primaryOwner"] == "social.online_grievance"
    )
    old_id = observation["id"]
    new_id = f"online_grievance_{args.date.replace('-', '_')}"
    observation.update(
        {
            "id": new_id,
            "date": args.date,
            "summary": (
                f"Human-confirmed street-heat run: heat {args.heat:.1f} mapped to "
                f"{args.heat_score:g}; opposition {args.opposition:.1f}% mapped to "
                f"{args.opposition_score:g}; 60/40 composite {composite}. "
                f"Coverage {args.coverage}; degraded coverage remains disclosed."
            ),
            "sourceText": "street_heat.py reviewed weekly output; W4 human confirmation",
            "observedAt": args.date,
            "underlyingEventId": new_id,
            "retrievedAt": args.date,
            "scoreInputs": [
                {
                    "metric": "street_heat_and_opposition_proxy",
                    "value": (
                        f"heat {args.heat:.1f} -> {args.heat_score:g}; "
                        f"opposition {args.opposition:.1f}% -> {args.opposition_score:g}; "
                        f"coverage {args.coverage}"
                    ),
                    "unit": "crawler composite",
                    "transform": "60pct_heat_score_plus_40pct_opposition_score",
                    "score": composite,
                    "weight": 1,
                }
            ],
        }
    )

    evidence["asOf"] = args.date
    evidence["purpose"] = (
        "Canonical V4 evidence ledger rolled forward after explicit human confirmation; "
        "unchanged observations remain carry-forwards with their original timestamps."
    )
    as_of = dt.date.fromisoformat(args.date)
    for item in evidence["observations"]:
        observed = dt.date.fromisoformat(item["observedAt"])
        max_age = int(item.get("maxAgeDays", 10_000))
        if (as_of - observed).days > max_age and not item.get("carryForwardReason"):
            item["carryForwardReason"] = (
                f"No newer reviewed release was confirmed by {args.date}; "
                "the prior observation is carried forward with its original date "
                "and freshness penalty rather than replaced by an estimate."
            )
    evidence_path = DATA_DIR / "evidence" / f"{args.date}.json"
    evidence_path.write_text(
        json.dumps(evidence, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    config["asOf"] = args.date
    config["evidenceFile"] = f"evidence/{args.date}.json"
    for pillar in config["pillars"]:
        if pillar["id"] == "social":
            pillar["v3Score"] = args.v3_social
            driver = next(item for item in pillar["drivers"] if item["id"] == "online_grievance")
            driver["observationIds"] = [
                new_id if item == old_id else item for item in driver["observationIds"]
            ]
            driver["bridgeBasis"] = (
                f"2026-07-30 W4人工确认：热度分{args.heat_score:g}、"
                f"反对率分{args.opposition_score:g}，60/40合成{composite}；"
                f"{args.coverage}覆盖降级标签保留。"
            )
            break
    INPUT_FILE.write_text(
        json.dumps(config, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(
        f"Applied confirmed street heat for {args.date}: "
        f"0.60*{args.heat_score:g}+0.40*{args.opposition_score:g}={composite}"
    )


if __name__ == "__main__":
    main()
