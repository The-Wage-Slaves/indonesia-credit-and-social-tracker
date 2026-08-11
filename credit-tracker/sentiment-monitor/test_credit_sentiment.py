from __future__ import annotations

import datetime as dt
import importlib.util
import json
import pathlib
import unittest
from unittest import mock


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
        cls.fixture_articles = fixture["articles"]
        cls.result = MODULE.build_result(
            fixture["articles"],
            dt.date(2026, 7, 28),
        )
        social_items = [{
            "date": "2026-07-16",
            "platform": "youtube",
            "externalId": "calm-1",
            "text": "Informasi pinjol legal dan perlindungan konsumen",
            "url": "https://youtube.com/watch?v=calm-1",
            "engagement": 5,
        }] + [
            {
                "date": "2026-07-23",
                "platform": platform,
                "externalId": f"risk-{index}",
                "text": "Kredivo KrediFazz debt collector intimidasi dan sebar data di Purworejo",
                "url": f"https://example.com/{platform}/{index}",
                "engagement": 100 + index * 10,
                "eventId": "kredivo-kredifazz-purworejo-2026-07",
            }
            for index, platform in enumerate(("youtube", "kaskus", "reddit", "youtube"), 1)
        ]
        health = {
            key: {**meta, "status": "ok", "detail": "test fixture"}
            for key, meta in MODULE.SOURCE_CATALOG.items()
        }
        signals = [
            {
                "source": "google_trends",
                "family": "social",
                "metric": "social_volume",
                "date": "2026-07-26",
                "risk": 90,
            }
        ]
        cls.social_result = MODULE.build_result(
            fixture["articles"],
            dt.date(2026, 7, 28),
            social_items=social_items,
            signals=signals,
            source_health=health,
        )

    def test_two_complete_weeks_are_scored(self):
        self.assertEqual(
            [week["weekEnd"] for week in self.result["weeks"]],
            ["2026-07-19", "2026-07-26"],
        )

    def test_kredivo_event_triggers_red_multi_source_rule(self):
        """验证的是「红色多源规则」，不是某个具体事件。

        原写法直接断言 fixture 里的 Kredivo 事件判红。但该事件已于 2026-08-11
        被人工确认并进入 acknowledged-events.json，周度链路接上这张表后它就被
        正当地抑制了——测试随即失败。规则本身没变，所以这里把已确认表清空来
        验证规则，另有 test_weekly_acknowledged.py 专门验证抑制行为。
        """
        with mock.patch.object(MODULE, "load_acknowledged_events", return_value={}):
            result = MODULE.build_result(self.fixture_articles, dt.date(2026, 7, 28))
        latest = result["weeks"][-1]
        self.assertEqual(latest["alert"]["level"], "red")
        active_ids = {event["id"] for event in latest["alert"]["active"]}
        self.assertIn("kredivo-kredifazz-purworejo-2026-07", active_ids)

    def test_acknowledged_event_is_retained_but_no_longer_actionable(self):
        """确认停止重复催办，但不得抹掉已确认的历史红色留痕。"""
        latest = self.result["weeks"][-1]
        alert = latest["alert"]
        active = {event["id"]: event for event in alert["active"]}
        event = active["kredivo-kredifazz-purworejo-2026-07"]
        self.assertEqual(alert["level"], "red")
        self.assertFalse(event["requiresReview"])
        self.assertEqual(alert["actionableActive"], [])
        self.assertEqual(alert["reviewCandidates"], [])
        self.assertEqual(alert["notificationLevel"], "amber")
        self.assertNotIn("verified_severe_event", alert["notificationReasons"])
        self.assertIn("kredivo-kredifazz-purworejo-2026-07",
                      alert["acknowledgedRetained"])

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

    def test_missing_social_is_disclosed_not_scored_as_calm(self):
        latest = self.result["weeks"][-1]
        self.assertEqual(latest["dataStatus"], "provisional-partial-coverage")
        self.assertIsNone(latest["engines"]["social"]["score"])
        self.assertLess(latest["availableFormulaWeight"], 1.0)

    def test_news_and_social_engines_are_independent(self):
        latest = self.social_result["weeks"][-1]
        self.assertIsNotNone(latest["engines"]["news"]["score"])
        self.assertIsNotNone(latest["engines"]["social"]["score"])
        self.assertGreater(latest["negativeSocialShare"], 65)
        self.assertGreaterEqual(latest["coverage"]["socialChannels"], 2)

    def test_formula_weights_remain_mece_and_sum_to_one(self):
        self.assertEqual(
            set(MODULE.COMPONENT_WEIGHTS),
            {"newsVolume", "newsTone", "socialVolume", "socialNegativity", "severeEvent"},
        )
        self.assertAlmostEqual(sum(MODULE.COMPONENT_WEIGHTS.values()), 1.0)

    def test_blank_local_config_does_not_hide_shared_credentials(self):
        merged = MODULE.merge_nonempty_config(
            {"youtube": {"api_key": "shared-key"}, "llm": {"api_key": "shared-llm"}},
            {"youtube": {"api_key": ""}, "x": {"bearer_token": "credit-x"}},
        )
        self.assertEqual(merged["youtube"]["api_key"], "shared-key")
        self.assertEqual(merged["llm"]["api_key"], "shared-llm")
        self.assertEqual(merged["x"]["bearer_token"], "credit-x")

    def test_deepseek_labels_drop_irrelevant_and_keep_lexicon_trace(self):
        items = [
            {"platform": "youtube", "text": "pinjol debt collector intimidasi"},
            {"platform": "kaskus", "text": "promo telepon genggam"},
        ]
        mapped, counts = MODULE.apply_llm_social_labels(items, [
            {"index": 1, "label": "NEG", "confidence": 0.91},
            {"index": 2, "label": "IRR", "confidence": 0.99},
        ])
        self.assertEqual(len(mapped), 1)
        self.assertEqual(mapped[0]["sentiment"]["method"], "deepseek_credit_social_v1")
        self.assertIn("lexiconRisk", mapped[0]["sentiment"])
        self.assertEqual(counts["NEG"], 1)
        self.assertEqual(counts["IRR"], 1)

    def test_kredivo_ojk_headlines_share_one_event_id(self):
        ids = {
            MODULE.automatic_event_id(text)
            for text in (
                "OJK panggil Kredivo soal penagihan debt collector",
                "KrediFazz buka suara atas dugaan intimidasi penagihan",
                "Pelecehan oleh penagih Kredivo menjadi sorotan",
            )
        }
        self.assertEqual(ids, {"kredivo-kredifazz-purworejo-2026-07"})

    def test_generic_pinjol_terror_mentions_do_not_merge(self):
        school_threat = MODULE.automatic_event_id(
            "Peneror bom di SDN Srengseng Sawah ternyata terjerat pinjol"
        )
        consumer_protection = MODULE.automatic_event_id(
            "DPR soroti teror dan pencurian data oleh pinjol ilegal"
        )
        fisherman_protection = MODULE.automatic_event_id(
            "OJK APPK dan IASC lindungi nelayan dari teror pinjol ilegal"
        )
        self.assertEqual(len({school_threat, consumer_protection, fisherman_protection}), 3)
        self.assertNotIn(
            "debt-linked-school-threat-2026-07",
            {school_threat, consumer_protection, fisherman_protection},
        )

    def test_verified_kredivo_seed_contains_primary_and_independent_sources(self):
        articles = MODULE.load_verified_event_articles(dt.date(2026, 7, 29))
        events = MODULE.cluster_events(MODULE.enrich_articles(articles), [])
        kredivo = next(
            event for event in events
            if event["id"] == "kredivo-kredifazz-purworejo-2026-07"
        )
        self.assertTrue(kredivo["hasPrimarySource"])
        self.assertGreaterEqual(kredivo["independentSourceCount"], 3)
        self.assertIn("OJK", kredivo["headlineZh"])
        self.assertIn("监管介入", kredivo["summaryZh"])
        self.assertIn("正式留痕", kredivo["reviewQuestionZh"])
        self.assertEqual(kredivo["reviewedSourceCount"], 3)

    def test_review_candidates_are_evidence_filtered_and_capped(self):
        events = [
            {
                "id": f"candidate-{index}",
                "eventType": "consumer_harm",
                "severity": 0.86,
                "hasPrimarySource": False,
                "independentSourceCount": 2,
            }
            for index in range(12)
        ] + [{
            "id": "single-source-noise",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "hasPrimarySource": False,
            "independentSourceCount": 1,
        }]
        alert = MODULE.alert_for_week(
            events, 60, 60, 60, 60, 10, [],
        )
        self.assertEqual(len(alert["reviewCandidates"]), 5)
        self.assertGreater(alert["suppressedCandidateCount"], 0)
        self.assertNotIn(
            "single-source-noise",
            {event["id"] for event in alert["reviewCandidates"]},
        )


if __name__ == "__main__":
    unittest.main()
