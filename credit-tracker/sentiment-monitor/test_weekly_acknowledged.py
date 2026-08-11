# -*- coding: utf-8 -*-
"""Acknowledgement stops repeat prompts without erasing confirmed history."""
from __future__ import annotations

import pathlib
import sys
import unittest
from unittest import mock

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import credit_sentiment as monitor  # noqa: E402

ACK_ID = "kredivo-kredifazz-purworejo-2026-07"


def event(eid: str, severity: float = 0.92, sources: int = 2, primary: bool = True) -> dict:
    return {
        "id": eid, "eventType": "regulatory_action", "severity": severity,
        "hasPrimarySource": primary, "independentSourceCount": sources,
    }


def build(events, acknowledged):
    registry = {
        eid: {"id": eid, "decision": "confirmed", "acknowledgedAt": "2026-08-03"}
        for eid in acknowledged
    }
    with mock.patch.object(monitor, "load_acknowledged_events", return_value=registry):
        return monitor.alert_for_week(events, 56.2, None, None, None, 0.0, [])


class WeeklyAcknowledgedTests(unittest.TestCase):
    def test_confirmed_event_remains_red_history_but_is_not_actionable(self):
        result = build([event(ACK_ID)], {ACK_ID})
        self.assertEqual(result["level"], "red")
        self.assertEqual([e["id"] for e in result["active"]], [ACK_ID])
        self.assertFalse(result["active"][0]["requiresReview"])
        self.assertEqual(result["actionableActive"], [])
        self.assertEqual(result["reviewCandidates"], [])
        self.assertEqual(result["notificationLevel"], "normal")
        self.assertEqual(result["acknowledgedRetained"], [ACK_ID])

    def test_unacknowledged_event_still_alerts_and_notifies(self):
        result = build([event("new-case-2026-08")], {ACK_ID})
        self.assertEqual(len(result["active"]), 1)
        self.assertEqual(len(result["actionableActive"]), 1)
        self.assertEqual(result["level"], "red")
        self.assertEqual(result["notificationLevel"], "red")
        self.assertEqual(result["acknowledgedRetained"], [])

    def test_confirmed_and_new_events_are_separated(self):
        result = build([event(ACK_ID), event("new-case-2026-08")], {ACK_ID})
        self.assertEqual({e["id"] for e in result["active"]}, {ACK_ID, "new-case-2026-08"})
        self.assertEqual([e["id"] for e in result["actionableActive"]], ["new-case-2026-08"])
        self.assertEqual(result["acknowledgedRetained"], [ACK_ID])

    def test_missing_registry_degrades_to_no_acknowledgement(self):
        with mock.patch.object(monitor, "ACKNOWLEDGED_EVENTS", HERE / "does-not-exist.json"):
            self.assertEqual(monitor.load_acknowledged_events(), {})

    def test_daily_and_weekly_read_the_same_registry(self):
        import credit_daily_alert as daily
        self.assertEqual(daily.ACKNOWLEDGED.resolve(), monitor.ACKNOWLEDGED_EVENTS.resolve())


if __name__ == "__main__":
    unittest.main()
