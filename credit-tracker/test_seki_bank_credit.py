# -*- coding: utf-8 -*-
"""SEKI I.4 采集器：把三个实测踩出来的坑钉住。

这三个都属于「不会报错、只会给出错数」的那类，所以必须有测试：
1. 年份标签放在 Jun 那一列，朴素前向填充会把 2026.01–05 全错标成 2025.xx；
2. 表里夹着无月份标签的年度合计列，当成月度列会多出一期假数据；
3. 表里有多个银行组块（BPR / 合计），写死行号会静默取到错误的块。

另有一条硬校验：抽取结果必须命中所有者手工核对的 2026-05 值，否则拒绝输出。
"""
from __future__ import annotations

import importlib.util
import pathlib
import sys
import unittest

HERE = pathlib.Path(__file__).resolve().parent
_spec = importlib.util.spec_from_file_location("seki", HERE / "seki_bank_credit.py")
SEKI = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(SEKI)


class FakeSheet:
    """最小 xlrd 工作表替身：cell_value(row, col) + nrows/ncols。"""

    def __init__(self, grid: list[list]):
        width = max(len(r) for r in grid)
        self.grid = [r + [""] * (width - len(r)) for r in grid]
        self.nrows = len(self.grid)
        self.ncols = width

    def cell_value(self, row: int, col: int):
        return self.grid[row][col]


def build_sheet(*, year_at_end: bool = True, annual_total_col: bool = True,
                include_bpr_block: bool = True) -> FakeSheet:
    """造一张结构与真表一致的小表。

    真表布局：row3 = 年份（只在个别列有），row4 = 月份缩写，col0 = 行号，
    col2 = 标签，col3 起 = 数据。月份序列 Jan..Dec 然后 Jan..Jun（跨年）。
    """
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
              "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    year_row: list = ["", "", ""]
    month_row: list = ["", "", ""]
    for index, month in enumerate(months):
        if index == 0:
            year_row.append(2025.0)
        elif year_at_end and month == "Jun" and index > 12:
            # 真表就是这样：2026 的标签落在 Jun 列，而 2026 块从 Jan 起。
            year_row.append(2026.0)
        else:
            year_row.append("")
        month_row.append(month)
        if annual_total_col and month == "Dec":
            year_row.append("")     # 年度合计列：有数据但没有月份标签
            month_row.append("")

    def data_row(row_no: float, label: str, values: list[float]) -> list:
        row: list = [row_no, "", label]
        cursor = 0
        for month in months:
            row.append(values[cursor]); cursor += 1
            if annual_total_col and month == "Dec":
                row.append(values[cursor - 1])   # 合计列重复 Dec 的值
        return row

    # 18 期：车贷从 141531 走到 128338；2026-05（第 17 期）必须等于校准值。
    veh = [141531, 141704, 142917, 141755, 142718, 143020, 141757, 140398,
           138800, 136727, 135166, 132557, 131150, 130059, 129681, 128554, 128846, 128338]
    oth = [1263554, 1284842, 1290000, 1295000, 1300000, 1310000, 1320000, 1330000,
           1340000, 1355000, 1370211, 1383545, 1391114, 1396730, 1398311, 1404344,
           1411357, 1421522]

    grid: list[list] = [[""], [""], [""], year_row, month_row]
    if include_bpr_block:
        # BPR 块：同名行，但量级小两个数量级 —— 用来验证「按块内总额最大」选对块。
        grid.append(data_row(141.0, "Pinjaman Kepada Bukan Lapangan Usaha (Konsumsi)",
                             [v / 100 for v in oth]))
        grid.append(data_row(145.0, "Kendaraan Bermotor", [v / 100 for v in veh]))
        grid.append(data_row(146.0, "Lainnya", [v / 100 for v in oth]))
    grid.append(data_row(141.0, "Pinjaman Kepada Bukan Lapangan Usaha (Konsumsi)",
                         [v * 2 for v in oth]))
    grid.append(data_row(145.0, "Kendaraan Bermotor", veh))
    grid.append(data_row(146.0, "Lainnya", oth))
    return FakeSheet(grid)


class PeriodMappingTests(unittest.TestCase):
    def test_year_advances_on_month_wrap_not_on_the_label_position(self):
        """2026 标签在 Jun 列，但 2026 块从 Jan 起——必须按回绕推年份。"""
        periods = sorted(SEKI.period_columns(build_sheet()).values())
        self.assertEqual(periods[0], "2025.01")
        self.assertEqual(periods[-1], "2026.06")
        self.assertIn("2026.01", periods, "月份回绕没被识别，2026.01 被错标成 2025.01")
        self.assertEqual(len(periods), 18)
        self.assertEqual(len(set(periods)), 18, "出现重复期间，说明年份没推进")

    def test_annual_total_column_is_skipped(self):
        """无月份标签的年度合计列不能被当成一期，否则 Dec 会出现两次。"""
        with_total = SEKI.period_columns(build_sheet(annual_total_col=True))
        without = SEKI.period_columns(build_sheet(annual_total_col=False))
        self.assertEqual(len(with_total), len(without), "合计列被误当成月度列")
        self.assertEqual(sorted(with_total.values()).count("2025.12"), 1)

    def test_missing_year_label_is_a_hard_error(self):
        sheet = build_sheet()
        sheet.grid[SEKI.YEAR_ROW] = ["" for _ in sheet.grid[SEKI.YEAR_ROW]]
        with self.assertRaises(RuntimeError):
            SEKI.period_columns(sheet)


class BlockSelectionTests(unittest.TestCase):
    def test_picks_the_total_block_not_the_small_bpr_block(self):
        """两个块都有同名行；必须选消费总额大的那个（合计块）。"""
        sheet = build_sheet(include_bpr_block=True)
        veh_row, oth_row = SEKI.find_consumer_rows(sheet)
        columns = SEKI.period_columns(sheet)
        may = next(c for c, p in columns.items() if p == "2026.05")
        self.assertEqual(sheet.cell_value(veh_row, may), 128846,
                         "选错了块——取到了 BPR 而不是合计")
        self.assertEqual(sheet.cell_value(oth_row, may), 1411357)

    def test_label_column_excludes_data_columns(self):
        """标签只在 col2。把数据列并进标签会让 endswith 全部失配。"""
        self.assertNotIn(3, SEKI.LABEL_COLS,
                         "col3 起是数据列，并进标签会使行定位整体失效")
        sheet = build_sheet()
        rows = [r for r in range(sheet.nrows)
                if SEKI.label_of(sheet, r).endswith("Kendaraan Bermotor")]
        self.assertTrue(rows, "标签列配置错误，一行都匹配不到")

    def test_no_matching_rows_raises(self):
        sheet = build_sheet()
        for row in range(sheet.nrows):
            if SEKI.label_of(sheet, row).endswith("Kendaraan Bermotor"):
                sheet.grid[row][2] = "Sesuatu Yang Lain"
        with self.assertRaises(RuntimeError):
            SEKI.find_consumer_rows(sheet)


class CalibrationTests(unittest.TestCase):
    def test_extract_hits_the_owner_verified_values(self):
        series = SEKI.extract(build_sheet())
        self.assertEqual(series["2026.05"],
                         {"bankVeh": 128846, "bankOth": 1411357})
        SEKI.verify(series)          # 不抛即通过

    def test_verify_refuses_a_wrong_value(self):
        """校准不符必须拒绝输出——宁可不出数，不给错口径的数。"""
        series = SEKI.extract(build_sheet())
        series["2026.05"]["bankVeh"] += 1
        with self.assertRaises(RuntimeError) as ctx:
            SEKI.verify(series)
        self.assertIn("校准失败", str(ctx.exception))

    def test_verify_refuses_when_the_calibration_period_is_absent(self):
        series = SEKI.extract(build_sheet())
        series.pop("2026.05")
        with self.assertRaises(RuntimeError):
            SEKI.verify(series)

    def test_calibration_constant_matches_what_the_owner_supplied(self):
        """这两个数是所有者手工从 SEKI 拉的。改动它们等于改动校准锚，必须是有意为之。"""
        self.assertEqual(SEKI.CALIBRATION,
                         {"period": "2026.05", "bankVeh": 128846, "bankOth": 1411357})


class ScopeTests(unittest.TestCase):
    def test_multiguna_is_not_claimed_by_this_source(self):
        """SEKI I.4 没有 Multiguna 项；采集器不得输出该字段，否则口径是编的。"""
        series = SEKI.extract(build_sheet())
        for row in series.values():
            self.assertEqual(set(row), {"bankVeh", "bankOth"},
                             "SEKI 只提供车贷与其他两项，多出的字段必然是臆造的")


if __name__ == "__main__":
    unittest.main()
