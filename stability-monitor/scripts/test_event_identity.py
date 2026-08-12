# -*- coding: utf-8 -*-
"""稳定性事件的身份与「确认后停止催办、有进展则重开」。

背景：稳定性事件此前根本没有 id，只有 headline。2026-08-11 与 08-12 的
央行行长提名是同一件事的两种表述，被当成两条推了两天——所有者已明确表示
这条不该预警，却没有任何可以记录该判断的地方。
"""
from __future__ import annotations

import importlib.util
import json
import pathlib
import sys
import unittest
from unittest import mock

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
_spec = importlib.util.spec_from_file_location("daily_alert", HERE / "daily_alert.py")
MODULE = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(MODULE)

BI_ENTITIES = ["Bank Indonesia", "Destry Damayanti", "Prabowo Subianto", "DPR"]


class EventFingerprintTests(unittest.TestCase):
    def test_same_entities_different_wording_share_one_id(self):
        """08-11 与 08-12 的两种表述必须落到同一个 id。"""
        first, basis = MODULE.event_fingerprint(
            "key_official_change", BI_ENTITIES,
            "总统普拉博沃提名Destry Damayanti为央行行长唯一候选人，央行独立性受关注")
        second, _ = MODULE.event_fingerprint(
            "key_official_change", list(reversed(BI_ENTITIES)),
            "Destry Damayanti成为印尼央行行长唯一候选人")
        self.assertEqual(first, second)
        self.assertEqual(basis, "type+entities")

    def test_different_nominee_gets_a_different_id(self):
        """改提名他人 → 实体变了 → 自动是新事件，无需额外机制。"""
        original, _ = MODULE.event_fingerprint("key_official_change", BI_ENTITIES, "")
        replaced, _ = MODULE.event_fingerprint(
            "key_official_change",
            ["Bank Indonesia", "Someone Else", "Prabowo Subianto", "DPR"], "")
        self.assertNotEqual(original, replaced)

    def test_same_entities_different_type_are_different_events(self):
        a, _ = MODULE.event_fingerprint("key_official_change", BI_ENTITIES, "")
        b, _ = MODULE.event_fingerprint("central_bank_independence", BI_ENTITIES, "")
        self.assertNotEqual(a, b)

    def test_missing_entities_falls_back_and_says_so(self):
        eid, basis = MODULE.event_fingerprint("mass_protest", [], "某地爆发抗议")
        self.assertEqual(basis, "headline")
        self.assertTrue(eid.startswith("mass_protest:"))


class AcknowledgementTests(unittest.TestCase):
    def test_shipped_registry_id_matches_computed_fingerprint(self):
        """表里的 id 必须是算出来的，不能是手写的。

        我第一次就手写了一个编造的哈希，与代码算出的不一致——静默失效。
        """
        registry = json.loads(MODULE.ACKNOWLEDGED.read_text(encoding="utf-8"))
        for entry in registry["events"]:
            if entry.get("idBasis") != "type+entities":
                continue
            expected, _ = MODULE.event_fingerprint(
                entry["id"].split(":", 1)[0], entry["entities"], "")
            self.assertEqual(entry["id"], expected,
                             f"{entry['id']} 与实体集合算出的指纹不符")

    def test_registry_entries_carry_state_and_resume_conditions(self):
        """「确认到什么程度」和「什么情况下重开」必须写下来，否则重开无从判断。"""
        registry = json.loads(MODULE.ACKNOWLEDGED.read_text(encoding="utf-8"))
        for entry in registry["events"]:
            self.assertTrue(entry.get("acknowledgedState"), f"{entry['id']} 缺 acknowledgedState")
            self.assertTrue(entry.get("resumeIf"), f"{entry['id']} 缺 resumeIf")
            self.assertIn(entry.get("decision"), {"confirmed", "observation", "rejected"})

    def test_missing_registry_degrades_to_no_suppression(self):
        with mock.patch.object(MODULE, "ACKNOWLEDGED", HERE / "nope.json"):
            self.assertEqual(MODULE.load_acknowledged(), {})


class GradeTests(unittest.TestCase):
    def event(self, eid: str, severity: float = 0.75, sources: int = 3, **kw) -> dict:
        return {"id": eid, "severity": severity, "independentSourceCount": sources, **kw}

    def test_acknowledged_quiet_event_does_not_set_the_level(self):
        graded = MODULE.grade([self.event("x", acknowledged=True)])
        self.assertEqual(graded["level"], "normal")
        self.assertEqual(graded["red"], [])
        self.assertEqual(graded["acknowledgedQuiet"], ["x"])

    def test_resumed_event_alerts_again(self):
        graded = MODULE.grade([
            self.event("x", acknowledged=False, resumedFromAcknowledged=True)
        ])
        self.assertEqual(graded["level"], "red")
        self.assertEqual(graded["resumedIds"], ["x"])

    def test_unacknowledged_event_is_untouched(self):
        graded = MODULE.grade([self.event("fresh")])
        self.assertEqual(graded["level"], "red")
        self.assertEqual(graded["acknowledgedQuiet"], [])

    def test_suppression_is_disclosed_not_hidden(self):
        graded = MODULE.grade([
            self.event("quiet", acknowledged=True),
            self.event("loud"),
        ])
        self.assertEqual(graded["acknowledgedQuiet"], ["quiet"])
        self.assertEqual([e["id"] for e in graded["red"]], ["loud"])


class PromptContractTests(unittest.TestCase):
    def test_prompt_uses_stable_labels_not_numeric_indexes(self):
        """模型会自作主张改用 0-based 下标——信贷侧踩过，这里不能重蹈。"""
        source = (HERE / "daily_alert.py").read_text(encoding="utf-8")
        self.assertIn("memberIds", source)
        # 只查实际取值处，不查注释——历史注释里提到旧字段名是正常的
        self.assertNotIn('ev.get("itemIndexes")', source)
        self.assertIn('labels = {f"N{i+1}"', source)

    def test_prompt_asks_the_model_to_match_acknowledged_events(self):
        """实体哈希对命名漂移脆弱，归属判定要交给模型。"""
        source = (HERE / "daily_alert.py").read_text(encoding="utf-8")
        self.assertIn("matchesAcknowledgedId", source)
        self.assertIn("materialChange", source)


if __name__ == "__main__":
    unittest.main()
