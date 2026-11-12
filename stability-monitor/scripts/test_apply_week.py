# -*- coding: utf-8 -*-
"""apply_week append 的查重只看 weekly 数组：watchlist 里同日的观察时点不能挡住周快照。"""
from __future__ import annotations

import importlib.util
import pathlib
import tempfile
import unittest
from unittest import mock

HERE = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("apply_week", HERE / "apply_week.py")
AW = importlib.util.module_from_spec(spec)
spec.loader.exec_module(AW)

SRC = """const DATA = {
  asOf: "2026-11-03",
  weekly: [
    { date: "2026-11-03", scores: { fiscal: 48, currency: 42, institutions: 34, social: 55, coercive: 37 } }
  ],
  watchlist: [
    { date: "2026-11-10", title: "same-day watch item", status: "resolved" }
  ]
};
"""


class AppendWeekDedupTest(unittest.TestCase):
    def run_append(self, src, date):
        with tempfile.TemporaryDirectory() as d:
            p = pathlib.Path(d) / "data.js"
            p.write_text(src, encoding="utf-8")
            with mock.patch.object(AW, "DATA_JS", p), \
                 mock.patch.object(AW, "write_driver_snapshot"), \
                 mock.patch.object(AW, "backup", return_value=p):
                AW.append_week(date, {k: 1 for k in AW.PILLARS})
            return p.read_text(encoding="utf-8")

    def test_watchlist_date_does_not_block_new_week(self):
        out = self.run_append(SRC, "2026-11-10")
        weekly = out[out.index("weekly:"):out.index("watchlist:")]
        self.assertIn('date: "2026-11-10"', weekly)
        self.assertIn('asOf: "2026-11-10"', out)

    def test_existing_week_is_still_rejected(self):
        with self.assertRaises(SystemExit):
            self.run_append(SRC, "2026-11-03")


if __name__ == "__main__":
    unittest.main()
