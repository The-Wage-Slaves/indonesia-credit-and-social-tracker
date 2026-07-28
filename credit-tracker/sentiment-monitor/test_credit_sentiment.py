from __future__ import annotations

import datetime as dt
import importlib.util
import json
import pathlib
import unittest


HERE = pathlib.Path(__file__).resolve().parent
SPEC = importlib.util.spec_from_file_location(
    "credit_sentiment",
    HERE / "credit_sentiment.py",
)
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class CreditSentimentTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        fixture = json.loads(
            (HERE / "fixtures" / "recent-two-weeks.json").read_text(encoding="utf-8")
        )
        cls.result = MODULE.build_result(
            fixture["articles"],
            dt.date(2026, 7, 28),
        )

    def test_two_complete_weeks_are_scored(self):
        self.assertEqual(
            [week["weekEnd"] for week in self.result["weeks"]],
            ["2026-07-19", "2026-07-26"],
        )

    def test_kredivo_event_triggers_red_multi_source_rule(self):
        latest = self.result["weeks"][-1]
        self.assertEqual(latest["alert"]["level"], "red")
        active_ids = {event["id"] for event in latest["alert"]["active"]}
        self.assertIn("kredivo-kredifazz-purworejo-2026-07", active_ids)

    def test_duplicate_reporting_is_one_event(self):
        latest = self.result["weeks"][-1]
        matching = [
            event for event in latest["events"]
            if event["id"] == "kredivo-kredifazz-purworejo-2026-07"
        ]
        self.assertEqual(len(matching), 1)
        self.assertGreaterEqual(matching[0]["independentSourceCount"], 2)

    def test_second_week_fear_is_higher(self):
        first, second = self.result["weeks"]
        self.assertGreater(second["fearIndex"], first["fearIndex"])


if __name__ == "__main__":
    unittest.main()
