# -*- coding: utf-8 -*-
"""日频告警裁定链：LLM 判定 → 语义聚类 → 社媒交叉验证 → 三档裁定。

回归基准是 2026-08-02 真实推送过的那一批：当天 109 条「事件」全部
independentSourceCount == 1（标题指纹聚类根本没合并过任何东西），推给人的三条里
两条是科普提醒和个人转述，一条是已确认过的旧事件。
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
import event_intelligence as intel  # noqa: E402


def article(aid: str, title: str, domain: str, source_class: str = "other_media") -> dict:
    return {
        "id": aid, "title": title, "summary": title, "url": f"https://{domain}/{aid}",
        "domain": domain, "sourceClass": source_class,
        "date": "2026-08-02",
    }


def social(text: str, platform: str, label: str = "negative") -> dict:
    return {"text": text, "platform": platform, "sentiment": {"label": label},
            "date": "2026-08-02"}


def build(llm_groups, articles, social_items=None, acknowledged=None, llm_status="ok"):
    """跑完整裁定链，但把网络那两步（抓正文、调 LLM）替换成给定结果。"""
    diag = {"method": "deepseek_credit_event_v1", "status": llm_status,
            "candidateCount": len(articles), "eventGroupCount": 0, "rejectedNonEvents": 0}

    def fake_adjudicate(candidates, config):
        if llm_status != "ok":
            return [], diag
        events, rejected = [], 0
        for group in llm_groups:
            members = [candidates[i - 1] for i in group["memberIndexes"]]  # 测试内仍用序号定位
            if not group.get("isEvent"):
                rejected += 1
                continue
            domains = sorted({m["domain"] for m in members})
            events.append({
                "id": group.get("id") or "llm-" + group["headlineZh"],
                "eventType": group["eventType"], "severity": group["severity"],
                "entities": group.get("entities", []),
                "headline": members[0]["title"], "headlineZh": group["headlineZh"],
                "summaryZh": group.get("summaryZh"), "rationale": group.get("rationale", ""),
                "independentSourceCount": len(domains), "domains": domains,
                "hasPrimarySource": any(m.get("sourceClass") == "primary" for m in members),
                "articleIds": [m["id"] for m in members], "articles": [],
                "machineClassified": True,
            })
        return events, {**diag, "eventGroupCount": len(events), "rejectedNonEvents": rejected}

    with mock.patch.object(alert.monitor, "enrich_articles", side_effect=lambda a: a), \
         mock.patch.object(alert.monitor, "enrich_social_items", side_effect=lambda s: s), \
         mock.patch.object(alert.monitor, "cluster_events", return_value=[]), \
         mock.patch.object(alert.monitor, "weighted_sentiment", return_value=(0.0, 0.0)), \
         mock.patch.object(alert.monitor, "parse_date",
                           side_effect=lambda value, fallback=None: dt.date(2026, 8, 2)), \
         mock.patch.object(alert.intel, "select_candidates", side_effect=lambda a: list(a)), \
         mock.patch.object(alert.intel, "attach_bodies", return_value={"ok": len(articles)}), \
         mock.patch.object(alert.intel, "adjudicate", side_effect=fake_adjudicate), \
         mock.patch.object(alert, "load_acknowledged", return_value=acknowledged or set()):
        return alert.build_daily_decision(
            dt.date(2026, 8, 2), articles, social_items or [], {}, {}, {})


class AdjudicationTests(unittest.TestCase):
    def test_advisory_and_anecdote_are_rejected_as_non_events(self):
        arts = [
            article("a1", "Hati-Hati Pinjam Online, Tercekik Bunga Tinggi Hingga Diteror DC", "kumparan.com"),
            article("a2", "kakak saya diteror pinjol, padahal nggak pernah pinjol", "twitter.com"),
        ]
        groups = [
            {"memberIndexes": [1], "isEvent": False, "headlineZh": "科普提醒"},
            {"memberIndexes": [2], "isEvent": False, "headlineZh": "个人转述"},
        ]
        decision = build(groups, arts)
        self.assertEqual(decision["verifiedRedEvents"], [])
        self.assertEqual(decision["highRiskPendingEvents"], [])
        self.assertEqual(decision["lowEvidenceLeads"], [])
        self.assertEqual(decision["level"], "normal")
        self.assertEqual(decision["eventAdjudication"]["rejectedNonEvents"], 2)

    def test_same_event_across_outlets_clusters_into_one(self):
        """标题指纹聚类的死穴：措辞不同就各算一条，来源数永远是 1。"""
        arts = [
            article("a1", "OJK Panggil Manajemen Kredivo", "kontan.co.id"),
            article("a2", "Kredivo Dipanggil Otoritas Terkait Penagihan", "detik.com"),
            article("a3", "Regulator Periksa Praktik Penagihan Kredivo", "cnnindonesia.com"),
        ]
        groups = [{
            "memberIndexes": [1, 2, 3], "isEvent": True, "eventType": "regulatory_action",
            "severity": 0.75, "entities": ["Kredivo", "OJK"], "headlineZh": "OJK约谈Kredivo",
        }]
        decision = build(groups, arts, social_items=[
            social("kredivo dipanggil ojk", "twitter"),
            social("akhirnya kredivo diperiksa", "youtube"),
            social("kredivo penagihan parah", "kaskus"),
        ])
        event = (decision["verifiedRedEvents"] + decision["highRiskPendingEvents"])[0]
        self.assertEqual(event["independentSourceCount"], 3, "同一事件的三家报道必须合成一条")

    def test_social_echo_is_required_to_reach_red(self):
        arts = [article("a1", "OJK sanksi platform X", "kontan.co.id"),
                article("a2", "Platform X kena sanksi", "detik.com")]
        groups = [{
            "memberIndexes": [1, 2], "isEvent": True, "eventType": "regulatory_action",
            "severity": 0.9, "entities": ["PlatformX"], "headlineZh": "监管处罚",
        }]
        quiet = build(groups, arts, social_items=[])
        self.assertEqual(quiet["verifiedRedEvents"], [])
        self.assertEqual(len(quiet["highRiskPendingEvents"]), 1,
                         "证据充分但社媒无回响 → 停在高危待核，不自动升红")

        loud = build(groups, arts, social_items=[
            social("platformx parah", "twitter"), social("platformx scam", "youtube"),
            social("platformx ojk", "kaskus"),
        ])
        self.assertEqual(len(loud["verifiedRedEvents"]), 1)
        self.assertEqual(loud["level"], "red")

    def test_single_source_event_stays_a_lead(self):
        arts = [article("a1", "Laporan tunggal soal teror penagihan", "blogspot.com")]
        groups = [{
            "memberIndexes": [1], "isEvent": True, "eventType": "consumer_harm",
            "severity": 0.8, "entities": ["X"], "headlineZh": "单来源催收事件",
        }]
        decision = build(groups, arts)
        self.assertEqual(decision["highRiskPendingEvents"], [])
        self.assertEqual(len(decision["lowEvidenceLeads"]), 1)
        self.assertEqual(decision["level"], "normal")

    def test_primary_source_alone_still_corroborates(self):
        arts = [article("a1", "Siaran pers OJK", "ojk.go.id", source_class="primary")]
        groups = [{
            "memberIndexes": [1], "isEvent": True, "eventType": "regulatory_action",
            "severity": 0.8, "entities": ["OJK"], "headlineZh": "监管公告",
        }]
        self.assertEqual(len(build(groups, arts)["highRiskPendingEvents"]), 1)

    def test_acknowledged_event_stops_repeating(self):
        arts = [article("a1", "OJK Panggil Kredivo", "kontan.co.id"),
                article("a2", "Kredivo dipanggil", "detik.com")]
        groups = [{
            "memberIndexes": [1, 2], "isEvent": True, "eventType": "regulatory_action",
            "severity": 0.9, "entities": ["Kredivo"], "headlineZh": "OJK约谈",
            "id": "kredivo-kredifazz-purworejo-2026-07",
        }]
        decision = build(groups, arts, acknowledged={"kredivo-kredifazz-purworejo-2026-07"})
        self.assertEqual(decision["verifiedRedEvents"], [])
        self.assertEqual(decision["highRiskPendingEvents"], [])

    def test_failed_adjudication_is_degraded_not_normal(self):
        """裁定跑不起来时，「今天没事」是不成立的推断。"""
        arts = [article("a1", "OJK Panggil Manajemen Kredivo soal pinjol", "kontan.co.id")]
        decision = build([], arts, llm_status="failed")
        self.assertEqual(decision["level"], "degraded")
        self.assertEqual(decision["eventAdjudication"]["status"], "failed")
        self.assertEqual(decision["eventAdjudication"]["socialCrossCheck"], "skipped")
        self.assertEqual(decision["verifiedRedEvents"], [])


class SocialCrossCheckTests(unittest.TestCase):
    def test_missing_social_coverage_is_null_not_zero(self):
        events = [{"entities": ["Kredivo"]}]
        intel.cross_check_social(events, [])
        self.assertIsNone(events[0]["social"]["mentionCount"],
                          "没采到社媒必须是 null，不能读成「没人讨论」")
        self.assertEqual(events[0]["social"]["status"], "no_social_coverage")

    def test_entity_match_counts_platforms_and_negative_share(self):
        events = [{"entities": ["Kredivo"]}]
        intel.cross_check_social(events, [
            social("kredivo teror", "twitter"), social("kredivo bagus", "youtube", "positive"),
            social("soal lain", "kaskus"),
        ])
        result = events[0]["social"]
        self.assertEqual(result["mentionCount"], 2)
        self.assertEqual(result["negativeShare"], 50.0)
        self.assertEqual(result["platforms"], ["twitter", "youtube"])


class CandidateAndFetchTests(unittest.TestCase):
    def test_keyword_layer_only_selects_never_scores(self):
        picked = intel.select_candidates([
            article("a1", "Promo diskon sepatu", "shop.com"),
            article("a2", "OJK panggil penyelenggara pinjol", "kontan.co.id"),
        ])
        self.assertEqual([a["id"] for a in picked], ["a2"])
        self.assertNotIn("severity", picked[0], "粗筛不得产生严重度")

    def test_fetch_failure_degrades_without_raising(self):
        text, status = intel.fetch_article_text("not-a-url")
        self.assertEqual((text, status), ("", "no_url"))

    def test_adjudicate_without_key_reports_unconfigured(self):
        with mock.patch.dict(intel.os.environ, {"DEEPSEEK_API_KEY": ""}, clear=False):
            events, diag = intel.adjudicate([article("a1", "x", "y.com")], {})
        self.assertEqual(events, [])
        self.assertEqual(diag["status"], "unconfigured")

    def test_shipped_acknowledged_registry_covers_kredivo(self):
        data = json.loads(alert.ACKNOWLEDGED.read_text(encoding="utf-8"))
        self.assertIn("kredivo-kredifazz-purworejo-2026-07",
                      {entry["id"] for entry in data["events"]})


if __name__ == "__main__":
    unittest.main()
