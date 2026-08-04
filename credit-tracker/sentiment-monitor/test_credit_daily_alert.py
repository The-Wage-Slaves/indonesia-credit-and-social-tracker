from __future__ import annotations
import datetime as dt
import importlib.util
import pathlib
import sys
import unittest

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
SPEC = importlib.util.spec_from_file_location("credit_daily_alert", HERE / "credit_daily_alert.py")
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class CreditDailyAlertTests(unittest.TestCase):
    def test_without_adjudication_the_day_is_degraded_not_red(self):
        """裁定层不可用时不得给出确定结论——无论正反。

        旧契约里这两条（含 ojk.go.id 原始来源 + 2 个独立来源）直接判红。现在红色
        还要求 LLM 读正文确认它确实是事件、并有社媒回响；拿不到裁定就只能说
        「本次未完成裁定」，既不报红也不报平安。
        """
        articles = [
            {"date": "2026-07-29", "title": "OJK panggil Kredivo soal intimidasi debt collector",
             "url": "https://ojk.go.id/a", "publisherUrl": "https://ojk.go.id", "eventId": "case-1"},
            {"date": "2026-07-29", "title": "Kredivo debt collector intimidasi konsumen",
             "url": "https://antaranews.com/b", "publisherUrl": "https://antaranews.com",
             "eventId": "case-1"},
        ]
        result = MODULE.build_daily_decision(
            dt.date(2026, 7, 29), articles, [],
            {"google_news": {"status": "ok"}}, {"status": "unconfigured"}, {},
        )
        self.assertEqual(result["level"], "degraded")
        self.assertEqual(result["verifiedRedEvents"], [])
        self.assertIn(result["eventAdjudication"]["status"], {"unconfigured", "failed"})
        self.assertEqual(result["status"], "pending-human-review")
        self.assertTrue(result["reviewRequired"])

    def test_daily_volume_is_relative_to_prior_days(self):
        risk, note = MODULE.daily_volume_risk([1, 1, 1, 1, 1, 1, 1, 8])
        self.assertGreater(risk, 80)
        self.assertIn("prior-7d", note)


if __name__ == "__main__":
    unittest.main()
