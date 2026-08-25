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

    def test_model_match_requires_deterministic_entity_anchors(self):
        entry = {
            "entities": BI_ENTITIES,
            "matchEntities": ["Bank Indonesia", "Destry Damayanti"],
        }
        self.assertTrue(MODULE.acknowledgement_anchor_matches(
            entry, ["BI", "Destry", "DPR"]
        ))
        self.assertFalse(MODULE.acknowledgement_anchor_matches(
            entry, ["DPR", "Prabowo Subianto", "Constitutional Court"]
        ))

    def test_model_boolean_string_false_is_false(self):
        self.assertFalse(MODULE.model_bool("false"))
        self.assertTrue(MODULE.model_bool("true"))
        self.assertTrue(MODULE.model_bool("unexpected", default=True))


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

    def test_missing_country_or_member_ids_cannot_create_an_alert(self):
        source = (HERE / "daily_alert.py").read_text(encoding="utf-8")
        self.assertIn("country or 'missing'", source)
        self.assertIn("if not refs:", source)


class CjkEntityNormalisationTests(unittest.TestCase):
    """实体归一化必须保住非 ASCII 字符。

    2026-08-21~08-25 央行行长那条连推五天：模型输出的是中文实体（印尼央行 /
    国会 / 印尼总统），而 normalize_entity 当时用 `[^a-z0-9]` 过滤，**把中文整个
    删成空串**。归一化后只剩拉丁字母写的人名一个，与登记表印尼语实体的重叠数
    永远达不到锚点要求的 2 个，抑制彻底失效。

    这类失败不报错、不留痕，只会天天推同一条——所以必须有测试。
    """

    def test_chinese_entity_survives_normalisation(self):
        for name in ("印尼总统", "梭罗国立大学", "肃贪委"):
            with self.subTest(entity=name):
                self.assertTrue(MODULE.normalize_entity(name),
                                f"{name} 被归一化成空串——非 ASCII 字符被删掉了")

    def test_punctuation_and_whitespace_are_still_stripped(self):
        self.assertEqual(MODULE.normalize_entity("  Bank  Indonesia "), "bankindonesia")
        self.assertEqual(MODULE.normalize_entity("D.P.R."), "dpr")

    def test_distinct_chinese_entities_do_not_collapse_together(self):
        """曾经三个中文实体全变空串，于是不同的实体集合算出同一个 key。"""
        first = MODULE.entity_key(["Destry Damayanti", "印尼央行", "印尼政府"])
        second = MODULE.entity_key(["Destry Damayanti", "印尼海关", "印尼农业部"])
        self.assertNotEqual(first, second,
                            "不同的中文实体集合算出了相同的 key——归一化又在吃字符")

    def test_cross_language_aliases_map_institutions_only(self):
        self.assertEqual(MODULE.normalize_entity("印尼央行"),
                         MODULE.normalize_entity("Bank Indonesia"))
        self.assertEqual(MODULE.normalize_entity("国会"), MODULE.normalize_entity("DPR"))

    def test_role_titles_are_not_aliased_to_a_person(self):
        """「印尼总统」是职位，不是人。映射到具体人名迟早制造错误匹配。"""
        self.assertNotEqual(MODULE.normalize_entity("印尼总统"),
                            MODULE.normalize_entity("Prabowo Subianto"))


class RegistryAnchorAgainstRealDriftTests(unittest.TestCase):
    """用 2026-08-21~08-25 实际推送过的实体集合回归验证。"""

    OBSERVED = {
        "2026-08-21": ["Destry Damayanti", "印尼央行", "印尼政府"],
        "2026-08-23": ["Destry Damayanti", "印尼央行"],
        "2026-08-24": ["Destry Damayanti", "印尼央行", "国会"],
        "2026-08-25": ["Destry Damayanti", "印尼央行", "印尼总统", "国会"],
    }

    def setUp(self):
        registry = json.loads(
            (HERE.parent / "data" / "acknowledged-events.json").read_text(encoding="utf-8"))
        self.entry = registry["events"][0]

    def test_registry_declares_a_cross_language_anchor(self):
        """靠「与登记实体重叠≥2」跨不了语言，必须显式声明 matchEntities。"""
        self.assertTrue(self.entry.get("matchEntities"),
                        "缺 matchEntities：机构名在印尼语/中文之间对不上，"
                        "重叠计数永远够不着门槛")

    def test_every_real_day_that_named_the_nominee_is_suppressed(self):
        for date, entities in self.OBSERVED.items():
            with self.subTest(date=date):
                self.assertTrue(
                    MODULE.acknowledgement_anchor_matches(self.entry, entities),
                    f"{date} 的实体集合仍匹配不上登记表——那天就会再推一次")

    def test_an_unrelated_event_is_not_swallowed_by_the_anchor(self):
        """锚点不能宽到把无关事件也一起吞掉。"""
        self.assertFalse(
            MODULE.acknowledgement_anchor_matches(
                self.entry, ["肃贪委", "梭罗国立大学"]),
            "无关事件被已确认表吞掉了，抑制过宽")


if __name__ == "__main__":
    unittest.main()
