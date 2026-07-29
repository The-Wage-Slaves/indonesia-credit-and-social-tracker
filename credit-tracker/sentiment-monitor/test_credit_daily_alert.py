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
    def test_verified_event_is_red_and_pending(self):
        articles = [
            {"date": "2026-07-29", "title": "OJK panggil Kredivo soal intimidasi debt collector",
             "url": "https://ojk.go.id/a", "publisherUrl": "https://ojk.go.id", "eventId": "case-1"},
            {"date": "2026-07-29", "title": "Kredivo debt collector intimidasi konsumen",
             "url": "https://antaranews.com/b", "publisherUrl": "https://antaranews.com",
             "eventId": "case-1"},
        ]
        result = MODULE.build_daily_decision(
            dt.date(2026, 7, 29), articles, [],
            {"google_news": {"status": "ok"}}, {"status": "unconfigured"},
        )
        self.assertEqual(result["level"], "red")
        self.assertEqual(result["status"], "pending-human-review")
        self.assertTrue(result["reviewRequired"])

    def test_daily_volume_is_relative_to_prior_days(self):
        risk, note = MODULE.daily_volume_risk([1, 1, 1, 1, 1, 1, 1, 8])
        self.assertGreater(risk, 80)
        self.assertIn("prior-7d", note)


if __name__ == "__main__":
    unittest.main()
