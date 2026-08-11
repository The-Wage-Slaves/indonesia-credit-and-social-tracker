from __future__ import annotations

import importlib.util
import pathlib
import unittest
from unittest import mock


HERE = pathlib.Path(__file__).resolve().parent
SPEC = importlib.util.spec_from_file_location(
    "cloud_publish",
    HERE / "cloud_publish.py",
)
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class CloudPublishCardTests(unittest.TestCase):
    def test_score_change_explains_direction(self):
        self.assertEqual(
            MODULE.score_change(67.5, 72.5),
            "较上周 72.5：-5.0点（压力缓和）",
        )
        self.assertEqual(
            MODULE.score_change(77.5, 72.5),
            "较上周 72.5：+5.0点（压力上升）",
        )

    def test_weekly_card_separates_index_direction_from_event_trigger(self):
        data = {
            "weeks": [
                {
                    "weekEnd": "2026-07-19",
                    "fearIndex": 72.5,
                    "engines": {
                        "news": {"score": 71.1},
                        "social": {"score": 69.1},
                    },
                },
                {
                    "weekEnd": "2026-07-26",
                    "fearIndex": 67.5,
                    "engines": {
                        "news": {"score": 60.0},
                        "social": {"score": 66.7},
                    },
                    "alert": {
                        "level": "red",
                        "triggerReasons": ["verified_severe_event"],
                        "active": [{
                            "id": "kredivo-kredifazz-purworejo-2026-07",
                            "hasPrimarySource": True,
                            "independentSourceCount": 3,
                        }],
                    },
                },
            ],
        }

        def fake_read(path, default=None):
            if path.endswith("credit-sentiment-pending.json"):
                return data
            if path.endswith("street_heat_history.json"):
                return []
            return default

        with mock.patch.object(MODULE, "read_json", side_effect=fake_read):
            with mock.patch.dict(MODULE.os.environ, {"STREET_STATUS": "failure"}):
                summary = MODULE.weekly_summary()

        card_text = "\n".join(summary["lines"])
        self.assertIn("【每周二例行】", summary["title"])
        self.assertIn("较上周 72.5：-5.0点（压力缓和）", card_text)
        self.assertIn("即使指数比上周下降也会触发", card_text)
        self.assertIn("监管介入", card_text)
        self.assertIn("①确认留痕；②降级为观察；③驳回", card_text)

    def test_acknowledged_red_history_does_not_repeat_weekly_prompt(self):
        data = {
            "weeks": [{
                "weekEnd": "2026-08-09",
                "fearIndex": 56.2,
                "engines": {"news": {"score": 55}, "social": {"score": 57}},
                "alert": {
                    "level": "red",
                    "notificationLevel": "normal",
                    "active": [{
                        "id": "kredivo-kredifazz-purworejo-2026-07",
                        "requiresReview": False,
                        "acknowledgement": {"decision": "confirmed"},
                    }],
                    "actionableActive": [],
                    "reviewCandidates": [],
                },
            }],
        }

        def fake_read(path, default=None):
            if path.endswith("credit-sentiment-pending.json"):
                return data
            if path.endswith("street_heat_history.json"):
                return []
            return default

        with mock.patch.object(MODULE, "read_json", side_effect=fake_read):
            with mock.patch.dict(MODULE.os.environ, {"STREET_STATUS": "success"}):
                summary = MODULE.weekly_summary()

        self.assertFalse(summary["risk"])
        card_text = "\n".join(summary["lines"])
        self.assertNotIn("Kredivo", card_text)
        self.assertNotIn("①确认留痕", card_text)
        self.assertIn("旧事件不会重复催办", card_text)

    def test_stale_street_heat_is_not_presented_as_current(self):
        data = {
            "weeks": [{
                "weekEnd": "2026-07-26",
                "fearIndex": 70,
                "engines": {"news": {"score": 70}, "social": {"score": 70}},
                "alert": {"level": "red", "active": [], "reviewCandidates": []},
            }],
        }

        def fake_read(path, default=None):
            if path.endswith("credit-sentiment-pending.json"):
                return data
            if path.endswith("street_heat_history.json"):
                return [{"date": "2026-07-16", "heat": 29.6, "suggested_score": 67}]
            return default

        with mock.patch.object(MODULE, "read_json", side_effect=fake_read):
            with mock.patch.dict(MODULE.os.environ, {"STREET_STATUS": "failure"}):
                summary = MODULE.weekly_summary()

        card_text = "\n".join(summary["lines"])
        self.assertIn("本次未出分", card_text)
        self.assertIn("2026-07-16", card_text)
        self.assertIn("不作为本周结果", card_text)


    def test_daily_failure_does_not_replay_stale_stability_event(self):
        today = MODULE.dt.date.today().isoformat()
        credit = {"date": today, "level": "normal"}
        stale = {"date": "2026-07-29", "level": "red", "events": [
            {"headline": "不应重放的旧事件", "severity": 0.9},
        ]}

        def fake_read(path, default=None):
            return credit if path.endswith("daily-credit-alert-pending.json") else default

        with mock.patch.object(MODULE, "read_json", side_effect=fake_read):
            with mock.patch.object(MODULE, "latest_stability_daily_event", return_value=stale):
                with mock.patch.dict(MODULE.os.environ, {"STABILITY_STATUS": "failure"}):
                    summary = MODULE.daily_summary()

        card_text = "\n".join(summary["lines"])
        self.assertTrue(summary["risk"])
        self.assertEqual(summary["level"], "orange")
        self.assertIn("本次没有复用历史事件", card_text)
        self.assertNotIn("不应重放的旧事件", card_text)

    def test_monthly_collector_failure_is_not_reported_as_healthy(self):
        with mock.patch.object(MODULE, "read_json", return_value={"boards": {"credit": []}}):
            with mock.patch.dict(MODULE.os.environ, {
                "INDUSTRY_STATUS": "success",
                "MACRO_STATUS": "failure",
                "COMPETITOR_STATUS": "success",
            }):
                summary = MODULE.monthly_summary()

        card_text = "\n".join(summary["lines"])
        self.assertTrue(summary["risk"])
        self.assertEqual(summary["level"], "orange")
        self.assertIn("国家宏观指标：FAILURE", card_text)
        self.assertIn("不能据此判断源头没有新月份", card_text)
        self.assertNotIn("采集正常", card_text)

    def test_machine_summary_is_explicitly_marked_unverified(self):
        headline, explanation = MODULE.event_explanation({
            "headlineZh": "平台出现投诉",
            "summaryZh": "某平台相关投诉增加",
            "_summaryZhGenerated": True,
        })
        self.assertEqual(headline, "平台出现投诉")
        self.assertIn("AI辅助释义", explanation)
        self.assertIn("待核实", explanation)

    def test_enrich_without_key_keeps_grounded_fallback(self):
        event = {"headline": "Judul berita", "eventType": "regulatory_action", "severity": 0.8}
        with mock.patch.object(MODULE, "deepseek_key", return_value=""):
            MODULE.enrich_zh([event])
        self.assertNotIn("headlineZh", event)
        headline, explanation = MODULE.event_explanation(event)
        self.assertEqual(headline, "Judul berita")
        self.assertIn("监管介入", explanation)


    def test_release_card_uses_stable_zip_without_local_background_service(self):
        with mock.patch.dict(MODULE.os.environ, {"DASHBOARD_COMMIT": "abcdef123456"}):
            summary = MODULE.release_summary()
        payload = MODULE.feishu_payload(summary)
        content = payload["card"]["elements"][0]["text"]["content"]
        self.assertEqual(summary["kind"], "release")
        self.assertIn("abcdef1", summary["title"])
        self.assertIn("indonesia-monitor-dashboard.zip", content)
        self.assertIn("下载最新版看板 ZIP", content)
        self.assertNotIn("127.0.0.1", content)
        self.assertNotIn("打开风险待确认记录", content)
        self.assertIn("不会安装开机任务", "\n".join(summary["lines"]))


if __name__ == "__main__":
    unittest.main()

