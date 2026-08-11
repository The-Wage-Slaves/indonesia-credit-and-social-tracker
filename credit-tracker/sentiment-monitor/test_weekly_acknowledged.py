# -*- coding: utf-8 -*-
"""周度告警必须尊重「已人工处置」表——与日频共用同一张。

这张表原本只接进了日频链路，周度从未查过它：所有者几周前就确认过的
Kredivo/KrediFazz 事件，一直出现在每周的待确认卡里（2026-08-11 发现）。
"""
from __future__ import annotations

import json
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
    with mock.patch.object(monitor, "load_acknowledged_events", return_value=set(acknowledged)):
        return monitor.alert_for_week(events, 56.2, None, None, None, 0.0, [])


class WeeklyAcknowledgedTests(unittest.TestCase):
    def test_acknowledged_event_leaves_the_weekly_card(self):
        result = build([event(ACK_ID)], {ACK_ID})
        self.assertEqual(result["active"], [])
        self.assertEqual(result["reviewCandidates"], [])
        self.assertEqual(result["level"], "normal",
                         "唯一撑着告警的是已确认事件时，本周应当静默")
        self.assertEqual(result["acknowledgedSuppressed"], [ACK_ID])

    def test_unacknowledged_event_still_alerts(self):
        result = build([event("new-case-2026-08")], {ACK_ID})
        self.assertEqual(len(result["active"]), 1, "未确认的事件不得被误伤")
        self.assertEqual(result["level"], "red")
        self.assertEqual(result["acknowledgedSuppressed"], [])

    def test_suppression_is_disclosed_not_hidden(self):
        result = build([event(ACK_ID), event("new-case-2026-08")], {ACK_ID})
        self.assertEqual(result["acknowledgedSuppressed"], [ACK_ID],
                         "被抑制的事件必须报出来，便于核对抑制是否过度")
        self.assertEqual([e["id"] for e in result["active"]], ["new-case-2026-08"])

    def test_missing_registry_degrades_to_no_suppression(self):
        with mock.patch.object(monitor, "ACKNOWLEDGED_EVENTS", HERE / "does-not-exist.json"):
            self.assertEqual(monitor.load_acknowledged_events(), set())

    def test_daily_and_weekly_read_the_same_registry(self):
        import credit_daily_alert as daily
        self.assertEqual(daily.ACKNOWLEDGED.resolve(), monitor.ACKNOWLEDGED_EVENTS.resolve(),
                         "两条链路必须共用同一张表，否则确认一次只生效一半")
        shipped = json.loads(monitor.ACKNOWLEDGED_EVENTS.read_text(encoding="utf-8"))
        self.assertIn(ACK_ID, {entry["id"] for entry in shipped["events"]})


if __name__ == "__main__":
    unittest.main()
