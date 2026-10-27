# -*- coding: utf-8 -*-
"""confirm_p2p.py：机械写入必须可复现，拒绝规则必须真的会拒绝。

背景：2026-09-15 发现云端每月都在抓 P2P、bot 分支攒了三批，但最后确认期停在 08-25——
因为确认得在看板暗门里逐格手录。同一天还发现 08-25 那批里 Shopee 余额 0.514 是云端
解析错的（官网 Posisi akhir 原文 0.298），已经以「已确认」身份进了 main。
"""
from __future__ import annotations

import copy
import importlib.util
import json
import pathlib
import tempfile
import unittest

HERE = pathlib.Path(__file__).resolve().parent
_spec = importlib.util.spec_from_file_location("confirm_p2p", HERE / "confirm_p2p.py")
M = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(M)


def scrape(date: str, **overrides) -> dict:
    base = {
        "AdaKami": (0.9, 0.26, 7_500_000, 2_100_000),
        "Lentera Dana (Shopee Loan)": (4.7, 0.30, 18_000_000, 7_800_000),
        "Kredifazz": (0.8, 0.60, 8_800_000, 2_200_000),
        "Akulaku (Asetku)": (None, None, 25_400_000, None),
        "Kredit Pintar": (0.4, 0.22, 9_400_000, 660_000),
        "Easycash": (0.9, 0.45, 10_500_000, 2_000_000),
        "Julo": (0.07, None, 3_300_000, 170_000),
        "ADA Pundi": (0.46, 0.24, 5_700_000, 1_900_000),
        "KrediOne": (0.48, None, 2_500_000, 780_000),
    }
    base.update(overrides)
    return {"date": date, "fx": 15000, "players": [
        {"name": n, "dataDate": None, "note": None,
         "parsed": {"disbYTD_usd": d, "outstanding_usd": o, "totalBorrowers": t, "activeBorrowersYTD": a}}
        for n, (d, o, t, a) in base.items()]}


def confirmed_with(*batches) -> dict:
    return {"schemaVersion": 1, "asOf": max(b["srcDate"] for b in batches), "batches": list(batches)}


def batch(date: str, sc: dict, decided="2026-09-01") -> dict:
    return {"date": M.date_label(date), "srcDate": date, "status": "confirmed",
            "decidedAt": decided, "rows": M.batch_rows(sc)}


class RenderTests(unittest.TestCase):
    def test_shipped_file_survives_a_roundtrip(self):
        """已有文件 → 求值 → 重渲染 → 再求值，语义必须一模一样，否则每次确认都在悄悄改历史。"""
        data = M.load_confirmed()
        with tempfile.TemporaryDirectory() as tmp:
            out = pathlib.Path(tmp) / "r.js"
            out.write_text(M.render_file(data), encoding="utf-8")
            self.assertEqual(M.load_confirmed(out), data)

    def test_label_style_matches_dashboard(self):
        self.assertEqual(M.date_label("2026-09-01"), "2026.9.1")
        self.assertEqual(M.date_label("2026-12-15"), "2026.12.15")

    def test_rows_follow_the_scraper_mapping(self):
        rows = M.batch_rows(scrape("2026-09-15"))
        aku = next(r for r in rows if r["name"].startswith("Akulaku"))
        self.assertEqual((aku["disb"], aku["out"], aku["tot"]), (None, None, 25_400_000))
        self.assertIsNone(aku["note"], "有部分数据的平台不该被标成「未抓到」")


class RefusalTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.results = pathlib.Path(self.tmp.name)
        self.prior = confirmed_with(batch("2026-08-25", scrape("2026-08-25")))

    def tearDown(self):
        self.tmp.cleanup()

    def write(self, sc: dict):
        (self.results / f"scrape_{sc['date']}.json").write_text(json.dumps(sc), encoding="utf-8")

    def test_duplicate_batch_is_refused(self):
        self.write(scrape("2026-08-25"))
        problems = M.confirm(copy.deepcopy(self.prior), "2026-08-25", "2026-09-15", self.results)
        self.assertTrue(any("已在已确认批次" in p for p in problems))

    def test_too_few_players_with_data_is_refused(self):
        sc = scrape("2026-09-01")
        for pl in sc["players"][:4]:
            pl["parsed"] = {k: None for k in pl["parsed"]}
        self.write(sc)
        problems = M.confirm(copy.deepcopy(self.prior), "2026-09-01", "2026-09-15", self.results)
        self.assertTrue(any("低于" in p for p in problems))

    def test_cumulative_borrowers_cannot_decrease(self):
        self.write(scrape("2026-09-01", AdaKami=(0.95, 0.26, 7_400_000, 2_200_000)))
        problems = M.confirm(copy.deepcopy(self.prior), "2026-09-01", "2026-09-15", self.results)
        self.assertTrue(any("累计借款人" in p and "下降" in p for p in problems))

    def test_ytd_disbursement_cannot_decrease_within_a_year(self):
        self.write(scrape("2026-09-01", AdaKami=(0.85, 0.26, 7_600_000, 2_200_000)))
        problems = M.confirm(copy.deepcopy(self.prior), "2026-09-01", "2026-09-15", self.results)
        self.assertTrue(any("YTD 放款" in p for p in problems))

    def test_ytd_reset_across_years_is_allowed(self):
        self.write(scrape("2027-01-15", AdaKami=(0.05, 0.26, 7_600_000, 100_000)))
        problems = M.confirm(copy.deepcopy(self.prior), "2027-01-15", "2027-01-16", self.results)
        self.assertEqual(problems, [], "跨年 YTD 归零是正常的")

    def test_outstanding_jump_is_refused_unless_accepted(self):
        """Shopee 那次：0.285 → 0.660 就是 +132%。"""
        self.write(scrape("2026-09-01", **{"Lentera Dana (Shopee Loan)": (4.8, 0.66, 18_100_000, 7_900_000)}))
        problems = M.confirm(copy.deepcopy(self.prior), "2026-09-01", "2026-09-15", self.results)
        self.assertTrue(any("余额" in p and "超过" in p for p in problems))
        ok = M.confirm(copy.deepcopy(self.prior), "2026-09-01", "2026-09-15", self.results, accept={"lentera"})
        self.assertEqual(ok, [], "核对官网后 --accept 应放行")

    def test_void_blanks_the_cell_and_leaves_a_trace(self):
        self.write(scrape("2026-09-01", **{"Lentera Dana (Shopee Loan)": (4.8, 0.66, 18_100_000, 7_900_000)}))
        data = copy.deepcopy(self.prior)
        problems = M.confirm(data, "2026-09-01", "2026-09-15", self.results, voids=[("lentera", "out")])
        self.assertEqual(problems, [])
        row = next(r for r in data["batches"][0]["rows"] if "Lentera" in r["name"])
        self.assertIsNone(row["out"])
        self.assertIn("原值 0.66", row["note"], "置空必须把原值写进 note，不能无痕消失")

    def test_baseline_skips_voided_cells(self):
        """置空的格子不能当基线——否则置空 08-25 之后，09-01 的错值就没有东西拦它了。"""
        prior = copy.deepcopy(self.prior)
        for r in prior["batches"][0]["rows"]:
            if "Lentera" in r["name"]:
                r["out"] = None
        older = batch("2026-07-17", scrape("2026-07-17", **{"Lentera Dana (Shopee Loan)": (3.7, 0.285, 17_600_000, 6_800_000)}))
        prior["batches"].append(older)
        got = M.latest_confirmed_value(prior, "Lentera Dana (Shopee Loan)", "out")
        self.assertEqual(got, ("2026-07-17", 0.285))

    def test_a_clean_batch_is_inserted_newest_first_and_bumps_asof(self):
        self.write(scrape("2026-09-01", AdaKami=(0.95, 0.27, 7_600_000, 2_200_000)))
        data = copy.deepcopy(self.prior)
        self.assertEqual(M.confirm(data, "2026-09-01", "2026-09-15", self.results), [])
        self.assertEqual(data["batches"][0]["srcDate"], "2026-09-01")
        self.assertEqual(data["batches"][0]["decidedAt"], "2026-09-15")
        self.assertEqual(data["asOf"], "2026-09-01")


class PendingCardTests(unittest.TestCase):
    """确认进库之后，首页那张「P2P竞对批量待确认」卡片必须一起消失；别人的卡片不能被误删。"""

    def make(self, tmp, items):
        pj = pathlib.Path(tmp) / "pending.json"; js = pathlib.Path(tmp) / "pending.js"
        pj.write_text(json.dumps({"boards": {"credit": items, "stability": [{"id": "x"}]}}), encoding="utf-8")
        js.write_text("const PENDING = {};", encoding="utf-8")
        return pj, js

    def test_only_the_confirmed_p2p_card_is_removed(self):
        with tempfile.TemporaryDirectory() as tmp:
            pj, js = self.make(tmp, [
                {"id": "p2p-scraper:2026-09-15:0", "source": "p2p-scraper", "title": "P2P竞对批量抓取 2026-09-15"},
                {"id": "p2p-scraper:2026-10-01:0", "source": "p2p-scraper", "title": "下一批，还没确认"},
                {"id": "credit-sentiment:2026-09-14", "source": "credit-sentiment", "title": "别人的卡片"},
            ])
            removed = M.retire_pending_cards({"2026-09-15"}, pj, js)
            data = json.loads(pj.read_text(encoding="utf-8"))
        self.assertEqual(removed, 1)
        self.assertEqual([it["id"] for it in data["boards"]["credit"]],
                         ["p2p-scraper:2026-10-01:0", "credit-sentiment:2026-09-14"])
        self.assertEqual(data["boards"]["stability"], [{"id": "x"}], "其他板块不能动")

    def test_js_mirror_is_rewritten_together(self):
        """pending.js 与 pending.json 必须同步，validate_repo 会校验二者一致。"""
        with tempfile.TemporaryDirectory() as tmp:
            pj, js = self.make(tmp, [{"id": "p2p-scraper:2026-09-15:0", "source": "p2p-scraper"}])
            M.retire_pending_cards({"2026-09-15"}, pj, js)
            body = js.read_text(encoding="utf-8")
            mirror = json.loads(pj.read_text(encoding="utf-8"))
        self.assertTrue(body.startswith("const PENDING = "))
        self.assertEqual(json.loads(body[len("const PENDING = "):].rstrip().rstrip(";")), mirror)

    def test_nothing_to_retire_leaves_files_untouched(self):
        with tempfile.TemporaryDirectory() as tmp:
            pj, js = self.make(tmp, [{"id": "credit-sentiment:1", "source": "credit-sentiment"}])
            before = pj.read_text(encoding="utf-8")
            self.assertEqual(M.retire_pending_cards({"2026-09-15"}, pj, js), 0)
            self.assertEqual(pj.read_text(encoding="utf-8"), before)
            self.assertEqual(js.read_text(encoding="utf-8"), "const PENDING = {};", "没东西可摘就别重写")


class LenteraPosisiAkhirTests(unittest.TestCase):
    """LDN 官网「Posisi akhir」是本月至今成交额，不是在贷余额（2026-10-08 判定）。

    判据（三条独立）：①同月两点的 Posisi 增量与年内放款增量逐卢比相等
    ②跨月清零重爬 ③2026-01-14 读数 Posisi == 年内放款（一月份 MTD 即 YTD）。
    后果：LDN 的 out 必须恒为 null，原值只留在 disbMTD（后台），不进余额图与余额合计。
    """

    def shipped(self):
        return M.load_confirmed()

    def test_lentera_outstanding_is_null_in_every_batch(self):
        for b in self.shipped()["batches"]:
            row = next((r for r in b["rows"] if "Lentera" in r["name"]), None)
            if not row:
                continue
            with self.subTest(batch=b["srcDate"]):
                self.assertIsNone(row["out"], "LDN 不披露在贷余额，out 必须为 null")

    def test_the_original_reading_is_kept_as_disb_mtd(self):
        """原值不能无痕删掉——它是有用的月度放款节奏，只是不能叫余额。"""
        for b in self.shipped()["batches"]:
            row = next((r for r in b["rows"] if "Lentera" in r["name"]), None)
            if not row:
                continue
            with self.subTest(batch=b["srcDate"]):
                self.assertIsNotNone(row.get("disbMTD"), "原读数必须迁到 disbMTD 留存")
                self.assertIn("本月至今成交额", row.get("note") or "")

    def test_optional_fields_survive_a_render_roundtrip(self):
        """js_row 曾经只序列化固定字段，把 disbMTD 静默吃掉；往返必须保住它。"""
        data = self.shipped()
        with tempfile.TemporaryDirectory() as tmp:
            out = pathlib.Path(tmp) / "r.js"
            out.write_text(M.render_file(data), encoding="utf-8")
            self.assertEqual(M.load_confirmed(out), data)
        self.assertIn("disbMTD", M.OPTIONAL_FIELDS)

    def test_dashboard_carries_no_lentera_outstanding(self):
        """看板历史序列里 LDN 的余额也必须全空，否则图上还会画出那条错线。"""
        import json as _json
        html = (M.CONFIRMED_JS.parent / "credit-dashboard.html").read_text(encoding="utf-8")
        i = html.index("p2pRaw = {"); j = html.index("};", i)
        raw = _json.loads(html[i + 9:j + 1])
        key = next(k for k in raw["outstanding"]["players"] if "LENTERA" in k.upper())
        self.assertTrue(all(v is None for v in raw["outstanding"]["players"][key]),
                        "p2pRaw 里 LDN 的 outstanding 必须全为 null")
        self.assertTrue(any(v is not None for v in raw["disbursement"]["players"][key]),
                        "放款序列是对的，不该被一起清掉")


if __name__ == "__main__":
    unittest.main()
