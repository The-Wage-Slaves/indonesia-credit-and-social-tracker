# -*- coding: utf-8 -*-
"""市场层相对读数：钉住这次方法论变更要解决的三件事。

1. 全球同跌不扣分（旧口径会扣）；
2. 没有日历起点，1 月 1 日不会出现悬崖；
3. 数据不够时拒绝出数，不拿半截窗口凑一个「偏离 0」。
"""
from __future__ import annotations

import datetime as dt
import importlib.util
import json
import pathlib
import unittest
from decimal import Decimal

HERE = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("market_relative", HERE / "market_relative.py")
MR = importlib.util.module_from_spec(spec)
spec.loader.exec_module(MR)


def trading_days(n, start="2025-01-01"):
    d = dt.date.fromisoformat(start)
    out = []
    while len(out) < n:
        if d.weekday() < 5:
            out.append(d.isoformat())
        d += dt.timedelta(days=1)
    return out


def flat_fx(days, idr=16000.0, shock=None):
    """每 EUR 报价；shock(date_index) 返回施加在全部币种上的同比例倍数。"""
    base = {"USD": 1.10, "IDR": idr * 1.10, "THB": 33 * 1.10, "MYR": 4.3 * 1.10,
            "PHP": 57 * 1.10, "INR": 85 * 1.10, "KRW": 1400 * 1.10}
    out = {}
    for i, d in enumerate(days):
        k = shock(i) if shock else 1.0
        out[d] = {c: (v if c == "USD" else v * k) for c, v in base.items()}
    return out


class GlobalCoMoveTests(unittest.TestCase):
    def test_indonesia_and_em_falling_together_scores_neutral(self):
        days = trading_days(260)
        fall = lambda i: 1.0 if i < 230 else 0.8          # 最后 30 天全球同跌 20%
        ind = {d: 100 * fall(i) for i, d in enumerate(days)}
        em = {d: 1000 * fall(i) for i, d in enumerate(days)}
        r = MR.readings(ind, em, flat_fx(days), days[-1])
        self.assertEqual(r["equity"]["deviationPct"], 0.0)
        self.assertEqual(r["equity"]["score"], 55, "印尼与新兴市场同跌，不是印尼自己的问题")

    def test_rupiah_weakening_with_the_asian_basket_scores_neutral(self):
        days = trading_days(260)
        fx = flat_fx(days, shock=lambda i: 1.0 if i < 230 else 1.05)   # 六币同贬 5%
        ind = {d: 100.0 for d in days}
        em = {d: 1000.0 for d in days}
        r = MR.readings(ind, em, fx, days[-1])
        self.assertEqual(r["fx"]["deviationPct"], 0.0)
        self.assertEqual(r["fx"]["score"], 55)

    def test_rupiah_only_weakening_is_penalised(self):
        days = trading_days(260)
        fx = flat_fx(days)
        for i, d in enumerate(days):
            if i >= 230:
                fx[d]["IDR"] *= 1.05
        r = MR.readings({d: 100.0 for d in days}, {d: 1000.0 for d in days}, fx, days[-1])
        self.assertGreater(r["fx"]["deviationPct"], 0, "正值=卢比相对亚洲走弱")
        self.assertLess(r["fx"]["score"], 55)


class NoCalendarBaseTests(unittest.TestCase):
    def test_reading_does_not_jump_across_new_year(self):
        """旧口径在 1 月 1 日把基数换成新的上年末，读数一夜清零。新口径跨年连续。"""
        days = trading_days(500, start="2024-11-01")
        ind = {d: 100.0 if d < "2025-10-01" else 70.0 for d in days}
        em = {d: 1000.0 for d in days}
        fx = flat_fx(days)
        before = MR.readings(ind, em, fx, "2025-12-31")["equity"]["deviationPct"]
        after = MR.readings(ind, em, fx, "2026-01-02")["equity"]["deviationPct"]
        self.assertLess(abs(after - before), 1.0, f"跨年跳变 {before}→{after}")


class MappingTests(unittest.TestCase):
    def test_equity_mapping(self):
        self.assertEqual(MR.equity_score(Decimal("0.0")), 55)
        self.assertEqual(MR.equity_score(Decimal("-30.0")), 25)
        self.assertEqual(MR.equity_score(Decimal("-60.0")), 5)
        self.assertEqual(MR.equity_score(Decimal("40.0")), 75)

    def test_fx_mapping_half_up_from_displayed_value(self):
        """2.7 → 55 − 13.5 = 41.5 → 42：按看板上的一位小数复算必须得到同一个分。"""
        self.assertEqual(MR.fx_score(Decimal("2.7")), 42)
        self.assertEqual(MR.fx_score(Decimal("3.1")), 40)
        self.assertEqual(MR.fx_score(Decimal("-5.0")), 75)

    def test_mappings_are_monotonic(self):
        vals = [Decimal(x) / 2 for x in range(-30, 31)]
        eq = [MR.equity_score(v) for v in vals]
        fx = [MR.fx_score(v) for v in vals]
        self.assertEqual(eq, sorted(eq))
        self.assertEqual(fx, sorted(fx, reverse=True))


class InsufficientDataTests(unittest.TestCase):
    def test_short_window_refuses(self):
        days = trading_days(100)
        with self.assertRaises(MR.InsufficientData):
            MR.readings({d: 1.0 for d in days}, {d: 1.0 for d in days}, flat_fx(days), days[-1])

    def test_days_missing_a_basket_currency_are_skipped_not_zeroed(self):
        days = trading_days(260)
        fx = flat_fx(days)
        del fx[days[-1]]["PHP"]
        series = MR.fx_ratio(fx)
        self.assertNotIn(days[-1], series)


class StoredReadingsTests(unittest.TestCase):
    """data/market-relative/*.json 是 data.js 读数的出处：分必须能由存档的偏离复算。"""

    def test_stored_scores_recompute_from_stored_deviation(self):
        files = sorted((HERE.parent / "data" / "market-relative").glob("*.json"))
        self.assertTrue(files, "没有存档读数")
        for f in files:
            rec = json.loads(f.read_text(encoding="utf-8"))
            with self.subTest(period=rec["period"]):
                self.assertEqual(rec["equity"]["score"], MR.equity_score(Decimal(str(rec["equity"]["deviationPct"]))))
                self.assertEqual(rec["fx"]["score"], MR.fx_score(Decimal(str(rec["fx"]["deviationPct"]))))
                self.assertLess(rec["cutoff"], rec["period"], "截点必须早于期次")
                self.assertGreaterEqual(rec["equity"]["n"], MR.MIN_WINDOW)


if __name__ == "__main__":
    unittest.main()
