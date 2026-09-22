# -*- coding: utf-8 -*-
"""apply_industry_pending.py：机械写入要可复现；口径缝只能在 --from 处、且必须被点名。

背景（2026-09-22）：SEKI 采集器 2026-08 就在跑，但 rawData 的银行三项从未被替换；OJK 三项停在
2025.12。SEKI 的「其他」(Lainnya) 吸收了 SSKI 的多用途，两者不能接续、只能从一个起点整体换。
"""
from __future__ import annotations

import copy
import importlib.util
import pathlib
import unittest

HERE = pathlib.Path(__file__).resolve().parent
_spec = importlib.util.spec_from_file_location("apply_industry_pending", HERE / "apply_industry_pending.py")
M = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(M)


def row(period, **kw):
    r = {"period": period, **{k: None for k in M.FIELDS}}
    r.update(kw)
    return r


BASE = [
    row("2023.12", bankVeh=131420, bankMP=699078, bankOth=107533, p2p=59644),
    row("2024.03", bankVeh=134794, bankMP=706044, bankOth=111728, p2p=62166, mfBNPL=6130),
    row("2024.12", bankVeh=142092, bankMP=753956, bankOth=134695, p2p=77024, mfBNPL=7855),
    row("2025.09", bankVeh=138806, bankMP=793890, bankOth=143638, bankBNPL=24860, mfBNPL=10310, p2p=90908),
    row("2025.12", bankVeh=132564, bankMP=813922, bankOth=146812, bankBNPL=26400, mfBNPL=11940, p2p=96617, isNew=True),
]
PENDING = {"rows": {
    "2023.12": {"bankVeh": 131418, "bankOth": 1150000, "bankMP": None},
    "2024.01": {"bankVeh": 132256, "bankOth": 1159225, "bankMP": None},       # 起点之后但看板没有这一期
    "2024.03": {"bankVeh": 134792, "bankOth": 1176598, "bankMP": None},
    "2024.12": {"bankVeh": 142088, "bankOth": 1284545, "bankMP": None},
    "2025.09": {"bankVeh": 138800, "bankOth": 1346306, "bankMP": None},
    "2025.12": {"bankVeh": 132557, "bankOth": 1383545, "bankMP": None},
    "2026.01": {"bankVeh": 131150, "bankOth": 1391114, "bankMP": None, "p2p": 98540, "bankBNPL": 27100, "mfBNPL": 12180},
}}


class RoundtripTests(unittest.TestCase):
    def test_shipped_dashboard_survives_parse_then_render(self):
        """不改任何值时，rawData 段必须逐字节复现——否则每次写入都在悄悄改历史。"""
        text = M.DASHBOARD.read_text(encoding="utf-8")
        s, e, rows = M.parse_rows(text)
        self.assertEqual(text[s:e], M.render(rows))


class MergeTests(unittest.TestCase):
    def test_bank_fields_replaced_only_from_the_cutoff(self):
        merged, _ = M.merge(copy.deepcopy(BASE), PENDING, "2024.01")
        by = {r["period"]: r for r in merged}
        self.assertEqual(by["2023.12"]["bankOth"], 107533, "起点之前保留 SSKI 口径")
        self.assertEqual(by["2023.12"]["bankMP"], 699078)
        self.assertEqual(by["2024.03"]["bankOth"], 1176598, "起点之后整体换成 SEKI")
        self.assertIsNone(by["2024.03"]["bankMP"], "SEKI 无多用途项，置 null")

    def test_no_new_rows_inside_the_existing_range(self):
        """2024 是季度行；pending 里的 2024.01 不得凭空插进去，否则其他列多出空洞。"""
        merged, _ = M.merge(copy.deepcopy(BASE), PENDING, "2024.01")
        self.assertNotIn("2024.01", [r["period"] for r in merged])

    def test_new_rows_appended_after_the_last_existing_period(self):
        merged, log = M.merge(copy.deepcopy(BASE), PENDING, "2024.01")
        last = merged[-1]
        self.assertEqual(last["period"], "2026.01")
        self.assertEqual((last["p2p"], last["bankBNPL"], last["mfBNPL"]), (98540, 27100, 12180))
        self.assertTrue(last.get("isNew"))
        self.assertIsNone(last["mf2W"], "RDKB 不拆 2W/4W，留 null 待补")

    def test_existing_ojk_values_are_never_overwritten(self):
        pend = copy.deepcopy(PENDING)
        pend["rows"]["2025.12"]["p2p"] = 99999
        merged, log = M.merge(copy.deepcopy(BASE), pend, "2024.01")
        by = {r["period"]: r for r in merged}
        self.assertEqual(by["2025.12"]["p2p"], 96617, "同源接续不该冲突；冲突时保留已有值")
        self.assertTrue(any(l.startswith("!!") for l in log), "冲突必须留痕")

    def test_cutoff_moved_to_2023_replaces_2023_too(self):
        merged, _ = M.merge(copy.deepcopy(BASE), PENDING, "2023.01")
        by = {r["period"]: r for r in merged}
        self.assertEqual(by["2023.12"]["bankOth"], 1150000)


class SanityTests(unittest.TestCase):
    def test_seam_at_cutoff_is_reported_not_rejected(self):
        merged, _ = M.merge(copy.deepcopy(BASE), PENDING, "2024.01")
        problems, seams = M.sanity(merged, "2024.01")
        self.assertEqual(problems, [])
        self.assertEqual(len(seams), 1)
        self.assertIn("2023.12→2024.03 bankOth", seams[0])
        self.assertIn("多用途+其他", seams[0], "缝的说明必须按 SSKI 两项之和给出公平的对比")

    def test_jump_elsewhere_is_still_rejected(self):
        merged, _ = M.merge(copy.deepcopy(BASE), PENDING, "2024.01")
        by = {r["period"]: r for r in merged}
        by["2026.01"]["p2p"] = 200000            # 2025.12 96617 → 200000
        problems, _ = M.sanity(merged, "2024.01")
        self.assertTrue(any("p2p 跳变" in p for p in problems))

    def test_duplicate_periods_are_rejected(self):
        rows = copy.deepcopy(BASE) + [row("2025.12")]
        problems, _ = M.sanity(rows, "2024.01")
        self.assertTrue(any("重复" in p for p in problems))


class PendingPackageTests(unittest.TestCase):
    """随仓库发布的 pending 包本身要说得通。"""

    def setUp(self):
        import json
        self.doc = json.loads(M.PENDING.read_text(encoding="utf-8"))

    def test_every_written_field_has_provenance(self):
        keys = {k for r in self.doc["rows"].values() for k in r if not k.startswith("_")}
        prov = set(self.doc["fieldProvenance"])
        self.assertTrue(keys <= prov, f"缺口径说明: {keys - prov}")

    def test_seki_vehicle_matches_sski_within_rounding(self):
        """车贷两源逐位一致是这次替换的前提；差超过 10 就不是同一条序列。"""
        text = M.DASHBOARD.read_text(encoding="utf-8")
        _, _, rows = M.parse_rows(text)
        for r in rows:
            src = self.doc["rows"].get(r["period"])
            if src and r.get("bankVeh") and src.get("bankVeh"):
                self.assertLessEqual(abs(r["bankVeh"] - src["bankVeh"]), 10, r["period"])

    def test_ojk_rows_carry_their_press_release(self):
        for p, r in self.doc["rows"].items():
            if "p2p" in r:
                self.assertIn("ojk.go.id", r.get("_ojkSource", ""), f"{p} 缺 RDKB 来源")


if __name__ == "__main__":
    unittest.main()
