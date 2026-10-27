# -*- coding: utf-8 -*-
"""衰减计数：钉住这次方法论变更要解决的三件事，以及台账与看板的一致性。

1. 没有硬窗口悬崖——相邻两天的分数不会因为日历跳变；
2. 映射沿用旧档「1 起」锚点、只在量表定义的最坏状态处封底；
3. 看板上的分 = 台账算出来的分（台账是唯一出处，不能各写各的）。
"""
from __future__ import annotations

import datetime as dt
import importlib.util
import json
import pathlib
import re
import unittest

HERE = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("event_decay", HERE / "event_decay.py")
ED = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ED)
L = ED.load()
DATA_JS = HERE.parent / "dashboard" / "data.js"


def fresh(key, n, weight=1):
    """在某天新发 n 起同权事件时的分数（用于核对锚点）。"""
    led = {**L, "ledgers": {**L["ledgers"], key: {**L["ledgers"][key],
           "events": [{"date": "2026-01-01", "weight": weight}] * n}}}
    return ED.score(led, key, "2026-01-01")[1]


class AnchorTests(unittest.TestCase):
    def test_policy_and_purge_keep_old_one_and_two_event_anchors(self):
        for key in ("policy_reversal", "elite_purge"):
            with self.subTest(key=key):
                self.assertEqual(fresh(key, 0), 80)
                self.assertEqual(fresh(key, 1), 60)
                self.assertEqual(fresh(key, 2), 45)
                self.assertLess(fresh(key, 4), fresh(key, 3), "第 4 起必须还能扣分——这是去掉底档的意义")

    def test_repression_approaches_but_never_crosses_the_defined_worst_state(self):
        self.assertEqual(fresh("repression", 1), 44)
        self.assertEqual(fresh("repression", 2), 31)
        self.assertEqual(fresh("repression", 4), 18)
        self.assertGreaterEqual(fresh("repression", 30), 10, "「多地同步+致命武力常态化」=10 是量表定义的最坏状态")

    def test_interagency_anchors(self):
        self.assertEqual(fresh("interagency", 1, 1), 50)
        self.assertEqual(fresh("interagency", 1, 1.5), 40)
        self.assertGreaterEqual(fresh("interagency", 30, 1.5), 15)

    def test_turnover_is_55_at_the_baseline_rate(self):
        led = {**L, "ledgers": {**L["ledgers"], "key_turnover": {**L["ledgers"]["key_turnover"], "events": []}}}
        I_base = ED.baseline_index(led)
        self.assertAlmostEqual(I_base, 0.75, places=2)
        self.assertEqual(ED.MAPPINGS["key_turnover"](I_base, led), 55)
        self.assertEqual(ED.score(led, "key_turnover", "2026-10-16")[1], 68, "零更替 = 55 × 0.75^(−0.75)")


class NoCliffTests(unittest.TestCase):
    def test_no_day_to_day_jump_through_early_2027(self):
        """旧规则下 2027-02 底镇压两周内 18→65。衰减计数下任何相邻两天变动 ≤2 分。"""
        start = dt.date(2026, 10, 16)
        for key in ED.MAPPINGS:
            prev = None
            for i in range(240):
                d = (start + dt.timedelta(days=i)).isoformat()
                s = ED.score(L, key, d)[1]
                if prev is not None:
                    self.assertLessEqual(abs(s - prev), 2, f"{key} 在 {d} 跳了 {prev}→{s}")
                prev = s

    def test_recovery_is_monotonic_without_new_events(self):
        for key in ED.MAPPINGS:
            s = [ED.score(L, key, f"2027-{m:02d}-01")[1] for m in range(1, 13)]
            self.assertEqual(s, sorted(s), f"{key} 无新事件时应单调回升")


class LedgerHygieneTests(unittest.TestCase):
    def test_every_event_is_dated_weighted_and_sourced(self):
        for key, led in L["ledgers"].items():
            for e in led["events"]:
                with self.subTest(ledger=key, label=e["label"][:20]):
                    dt.date.fromisoformat(e["date"])
                    self.assertGreater(e["weight"], 0)
                    self.assertTrue(e.get("sources"), "没有来源的事件不进台账")

    def test_misdated_or_pardoned_events_stay_out(self):
        purge = {e["date"] for e in L["ledgers"]["elite_purge"]["events"]}
        self.assertNotIn("2025-07-18", purge, "Lembong 获 abolisi，不是清除")
        inter = {e["date"] for e in L["ledgers"]["interagency"]["events"]}
        self.assertIn("2025-03-17", inter, "楠榜实弹是 2025 年的事，日期必须照实")

    def test_territorial_progress_is_bounded(self):
        for d in ("2025-01-01", "2025-08-10", "2026-10-05", "2030-01-01"):
            self.assertTrue(0 <= ED.territorial_progress(L, d) <= 1)
        self.assertEqual(ED.military_score(L, "2025-07-01", 40), 40, "建制扩张之前不扣")


class DashboardMatchesLedgerTests(unittest.TestCase):
    """看板最新一期的分必须等于台账算出来的分。"""

    def test_latest_period_scores_match(self):
        text = DATA_JS.read_text(encoding="utf-8")
        as_of = re.search(r'asOf:\s*"([\d-]+)"', text).group(1)
        def shown(name):
            m = re.search(r'name: "' + re.escape(name) + r'", weight: [\d.]+, score: (\d+)', text)
            return int(m.group(1))
        for key, led in L["ledgers"].items():
            with self.subTest(driver=led["driver"]):
                self.assertEqual(shown(led["driver"]), ED.score(L, key, as_of)[1],
                                 "看板与台账不一致：改了台账要重算，改了看板要回填台账")
        self.assertEqual(shown(L["territorial"]["driver"]), ED.military_score(L, as_of, 40))


if __name__ == "__main__":
    unittest.main()
