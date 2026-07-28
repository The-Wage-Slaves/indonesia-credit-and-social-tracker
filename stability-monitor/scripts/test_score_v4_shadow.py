from __future__ import annotations

import copy
import importlib.util
import pathlib
import unittest


SCRIPT = pathlib.Path(__file__).with_name("score_v4_shadow.py")
SPEC = importlib.util.spec_from_file_location("score_v4_shadow", SCRIPT)
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


BASE_DATA = {
    "redTriggers": {
        "coerciveScoreFloor": 25,
        "fourWeekDrop": 10,
        "minimumIndependentSources": 2,
        "armedEventTypes": ["interagency_live_fire", "interagency_fatality"],
        "disciplineEventTypes": [
            "formed_unit_refusal",
            "security_defection",
            "parallel_command",
        ],
    }
}
BASE_RESULT = {
    "asOf": "2026-07-22",
    "pillars": [
        {"id": "fiscal", "v4ShadowScore": 52.2},
        {"id": "currency", "v4ShadowScore": 45.6},
        {"id": "institutions", "v4ShadowScore": 36.9},
        {"id": "social", "v4ShadowScore": 50.7},
        {"id": "coercive", "v4ShadowScore": 37.3},
    ],
}
BASE_EVIDENCE = {
    "triggerSignals": [],
    "rapidDropReview": {
        "confirmed": False,
        "independentSourceCount": 0,
    },
}
BASE_HISTORY = {
    "schemaVersion": 1,
    "snapshots": [
        {
            "date": "2026-07-22",
            "scores": {"coercive": 37.3},
        }
    ],
}


class RedTriggerTests(unittest.TestCase):
    def evaluate(self, result=None, evidence=None, history=None):
        return MODULE.evaluate_red_triggers(
            copy.deepcopy(result or BASE_RESULT),
            copy.deepcopy(BASE_DATA),
            copy.deepcopy(evidence or BASE_EVIDENCE),
            copy.deepcopy(history or BASE_HISTORY),
        )

    def test_first_snapshot_is_normal_and_four_week_rule_not_evaluable(self):
        evaluated = self.evaluate()
        self.assertEqual(evaluated["level"], "normal")
        rapid = next(
            rule for rule in evaluated["rules"]
            if rule["id"] == "four_week_coercive_drop"
        )
        self.assertEqual(rapid["status"], "not_evaluable")

    def test_pending_or_single_source_event_does_not_trigger(self):
        evidence = copy.deepcopy(BASE_EVIDENCE)
        evidence["triggerSignals"] = [
            {
                "id": "pending",
                "eventType": "interagency_live_fire",
                "verificationStatus": "pending",
                "independentSourceCount": 2,
                "liveFire": True,
            },
            {
                "id": "single-source",
                "eventType": "security_defection",
                "verificationStatus": "confirmed",
                "independentSourceCount": 1,
            },
        ]
        self.assertEqual(self.evaluate(evidence=evidence)["level"], "normal")

    def test_confirmed_two_source_live_fire_triggers_red(self):
        evidence = copy.deepcopy(BASE_EVIDENCE)
        evidence["triggerSignals"] = [
            {
                "id": "confirmed-live-fire",
                "eventType": "interagency_live_fire",
                "verificationStatus": "confirmed",
                "independentSourceCount": 2,
                "liveFire": True,
            }
        ]
        evaluated = self.evaluate(evidence=evidence)
        self.assertEqual(evaluated["level"], "red")
        self.assertIn(
            "verified_armed_interagency_event",
            {trigger["id"] for trigger in evaluated["active"]},
        )

    def test_score_below_25_triggers_red(self):
        result = copy.deepcopy(BASE_RESULT)
        result["pillars"][-1]["v4ShadowScore"] = 24.9
        evaluated = self.evaluate(result=result)
        self.assertEqual(evaluated["level"], "red")
        self.assertIn(
            "coercive_score_floor",
            {trigger["id"] for trigger in evaluated["active"]},
        )

    def test_four_week_drop_requires_human_and_two_source_confirmation(self):
        history = {
            "schemaVersion": 1,
            "snapshots": [
                {"date": "2026-06-22", "scores": {"coercive": 50.0}}
            ],
        }
        pending = self.evaluate(history=history)
        rapid_pending = next(
            rule for rule in pending["rules"]
            if rule["id"] == "four_week_coercive_drop"
        )
        self.assertEqual(rapid_pending["status"], "pending_confirmation")
        self.assertEqual(pending["level"], "normal")

        evidence = copy.deepcopy(BASE_EVIDENCE)
        evidence["rapidDropReview"] = {
            "confirmed": True,
            "independentSourceCount": 2,
        }
        confirmed = self.evaluate(evidence=evidence, history=history)
        self.assertEqual(confirmed["level"], "red")
        self.assertIn(
            "four_week_coercive_drop",
            {trigger["id"] for trigger in confirmed["active"]},
        )


if __name__ == "__main__":
    unittest.main()
