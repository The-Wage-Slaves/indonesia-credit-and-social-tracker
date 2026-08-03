# -*- coding: utf-8 -*-
"""日频告警的证据门。

用的是 2026-08-02 真实推送过的三条数据：severity 来自 event_profile 的关键词
匹配（"teror"→0.86、"OJK panggil"→0.92），三条都只有单一来源、无原始来源。
按旧规则（只看 severity>=0.8）三条全部推送，其中两条是科普提醒和个人转述。
"""
from __future__ import annotations

import datetime as dt
import json
import pathlib
import sys
import unittest
from unittest import mock

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import credit_daily_alert as alert  # noqa: E402


def event(eid: str, etype: str, severity: float, sources: int, primary: bool) -> dict:
    return {
        "id": eid,
        "eventType": etype,
        "severity": severity,
        "independentSourceCount": sources,
        "hasPrimarySource": primary,
        "headline": eid,
        "domains": ["example.com"],
    }


REAL_2026_08_02 = [
    # OJK Panggil Manajemen Kredivo —— 已人工确认过，却仍天天重推
    event("kredivo-kredifazz-purworejo-2026-07", "regulatory_action", 0.92, 1, False),
    # "kakak saya diteror pinjol, padahal nggak pernah pinjol" —— 个人转述
    event("auto-82ebf9a5400f70d0", "consumer_harm", 0.86, 1, False),
    # "Hati-Hati Pinjam Online, Tercekik Bunga Tinggi Hingga Diteror DC" —— 科普提醒
    event("auto-91eed57f3e89301f", "consumer_harm", 0.86, 1, False),
]


def build(events: list[dict], acknowledged: set[str] | None = None) -> dict:
    with mock.patch.object(alert.monitor, "enrich_articles", return_value=[]), \
         mock.patch.object(alert.monitor, "enrich_social_items", return_value=[]), \
         mock.patch.object(alert.monitor, "cluster_events", return_value=events), \
         mock.patch.object(alert.monitor, "weighted_sentiment", return_value=(0.0, 0.0)), \
         mock.patch.object(alert, "load_acknowledged", return_value=acknowledged or set()):
        return alert.build_daily_decision(dt.date(2026, 8, 2), [], [], {}, {})


class EvidenceGateTests(unittest.TestCase):
    def test_single_source_without_primary_is_never_pushed(self):
        decision = build(REAL_2026_08_02)
        self.assertEqual(decision["highRiskPendingEvents"], [])
        self.assertEqual(decision["verifiedRedEvents"], [])
        self.assertEqual(len(decision["lowEvidenceLeads"]), 3)
        self.assertEqual(decision["level"], "normal", "三条低证据线索不得把当天抬成告警日")

    def test_leads_are_recorded_not_discarded(self):
        ids = {e["id"] for e in build(REAL_2026_08_02)["lowEvidenceLeads"]}
        self.assertEqual(ids, {e["id"] for e in REAL_2026_08_02}, "线索必须留档供周评查阅")

    def test_two_independent_sources_still_alerts(self):
        corroborated = event("multi-source", "consumer_harm", 0.86, 3, False)
        decision = build([corroborated])
        self.assertEqual(len(decision["highRiskPendingEvents"]), 1)
        self.assertEqual(decision["level"], "high_pending")

    def test_primary_source_alone_still_alerts(self):
        official = event("ojk-primary", "regulatory_action", 0.92, 1, True)
        decision = build([official])
        self.assertEqual(len(decision["highRiskPendingEvents"]), 1)

    def test_non_event_types_never_alert(self):
        # general_sentiment / industry_update 是话题热度，不是事件
        noise = event("topic-buzz", "general_sentiment", 0.95, 5, True)
        decision = build([noise])
        self.assertEqual(decision["highRiskPendingEvents"], [])
        self.assertEqual(decision["verifiedRedEvents"], [])

    def test_acknowledged_event_stops_repeating(self):
        confirmed = event("kredivo-kredifazz-purworejo-2026-07", "regulatory_action", 0.92, 3, True)
        decision = build([confirmed], acknowledged={"kredivo-kredifazz-purworejo-2026-07"})
        self.assertEqual(decision["verifiedRedEvents"], [])
        self.assertEqual(decision["level"], "normal")

    def test_shipped_acknowledged_registry_covers_kredivo(self):
        data = json.loads(alert.ACKNOWLEDGED.read_text(encoding="utf-8"))
        ids = {entry["id"] for entry in data["events"]}
        self.assertIn("kredivo-kredifazz-purworejo-2026-07", ids)
        self.assertIn("kredivo-kredifazz-purworejo-2026-07", alert.load_acknowledged())

    def test_missing_registry_degrades_to_no_suppression(self):
        with mock.patch.object(alert, "ACKNOWLEDGED", HERE / "does-not-exist.json"):
            self.assertEqual(alert.load_acknowledged(), set())


if __name__ == "__main__":
    unittest.main()
