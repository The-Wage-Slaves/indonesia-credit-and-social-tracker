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


    def test_daily_card_marks_reopened_stability_event(self):
        today = MODULE.dt.date.today().isoformat()
        credit = {"date": today, "level": "normal"}
        stability = {
            "date": today,
            "level": "red",
            "events": [{
                "headline": "国会否决央行行长提名",
                "typeLabel": "关键官员更替/清洗",
                "severity": 0.8,
                "independentSourceCount": 3,
                "domains": ["a.example", "b.example"],
                "pillar": "institutions",
                "resumedFromAcknowledged": True,
            }],
        }

        def fake_read(path, default=None):
            return credit if path.endswith("daily-credit-alert-pending.json") else default

        with mock.patch.object(MODULE, "read_json", side_effect=fake_read):
            with mock.patch.object(MODULE, "latest_stability_daily_event", return_value=stability):
                with mock.patch.dict(MODULE.os.environ, {"STABILITY_STATUS": "success"}):
                    summary = MODULE.daily_summary()

        self.assertIn("【进展升级】", "\n".join(summary["lines"]))


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


class ReviewLinkTests(unittest.TestCase):
    """卡片上的「待确认」链接必须指向当期产物。

    2026-08-31 发现：链接写死成 issues/6。那个 issue 是 2026-07-28 为 07-26 那周建的，
    而新 issue 只在 alert_level == 'red' 时创建——之后几周都是 amber/normal，于是
    链接永远停在一个多月前，所有者点进去根本找不到本周该确认什么。月频卡片更彻底，
    此前压根没有 reviewUrl 字段。

    正确落点是每次运行都会更新的 bot 分支。
    """

    def test_each_cadence_points_at_its_own_bot_branch(self):
        cases = (
            (MODULE.WEEKLY_REVIEW_URL, "bot/weekly-monitoring"),
            (MODULE.DAILY_REVIEW_URL, "bot/daily-risk-alerts"),
            (MODULE.MONTHLY_REVIEW_URL, "bot/monthly-credit-data"),
        )
        for url, branch in cases:
            with self.subTest(branch=branch):
                self.assertIn(branch, url, f"{branch} 的待确认链接没指向该分支")

    def test_no_cadence_link_points_at_a_static_issue(self):
        """静态 issue 链接不随运行更新，正是这次的病根。"""
        for name in ("WEEKLY_REVIEW_URL", "DAILY_REVIEW_URL", "MONTHLY_REVIEW_URL"):
            with self.subTest(constant=name):
                self.assertNotIn("/issues/", getattr(MODULE, name),
                                 f"{name} 又指回了静态 issue")

    def test_every_cadence_card_exposes_a_review_link(self):
        """月频卡片曾经完全没有这个字段，卡片上不显示任何入口。"""
        source = pathlib.Path(MODULE.__file__).read_text(encoding="utf-8")
        for cadence, url_const in (("weekly_summary", "WEEKLY_REVIEW_URL"),
                                   ("daily_summary", "DAILY_REVIEW_URL"),
                                   ("monthly_summary", "MONTHLY_REVIEW_URL")):
            with self.subTest(cadence=cadence):
                start = source.index(f"def {cadence}(")
                nxt = source.find(chr(10) + "def ", start + 1)
                block = source[start:nxt if nxt > 0 else len(source)]
                self.assertIn('"reviewUrl"', block, f"{cadence} 卡片没有 reviewUrl")
                self.assertIn(url_const, block, f"{cadence} 用错了链接常量")


if __name__ == "__main__":
    unittest.main()

