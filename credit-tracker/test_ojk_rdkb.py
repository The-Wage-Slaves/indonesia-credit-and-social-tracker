# -*- coding: utf-8 -*-
"""ojk_rdkb.py / build_industry_pending.py：新闻稿措辞会变，三项都必须解析成功且数据月一致。"""
from __future__ import annotations

import importlib.util
import json
import pathlib
import tempfile
import unittest

HERE = pathlib.Path(__file__).resolve().parent
FIX = HERE / "tests" / "fixtures"


def load(name):
    spec = importlib.util.spec_from_file_location(name, HERE / f"{name}.py")
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m


R = load("ojk_rdkb")
B = load("build_industry_pending")


class ParseTests(unittest.TestCase):
    def test_agustus_2026_release_parses_to_july_data(self):
        d = R.parse((FIX / "rdkb-agustus-2026.html").read_text(encoding="utf-8"))
        self.assertEqual(d["dataMonth"], "2026.07")
        self.assertEqual((d["p2p"], d["bankBNPL"], d["mfBNPL"]), (105630, 31560, 13620))
        self.assertEqual((d["lpbbtiTWP90"], d["mfBnplNPF"]), (4.32, 3.03))

    def test_juli_2026_release_uses_the_other_wording(self):
        """『tumbuh sebesar X persen yoy (...) menjadi RpY』与『NPF gross turun ke』这两种写法也要过。"""
        d = R.parse((FIX / "rdkb-juli-2026.html").read_text(encoding="utf-8"))
        self.assertEqual(d["dataMonth"], "2026.06")
        self.assertEqual((d["p2p"], d["bankBNPL"], d["mfBNPL"]), (105140, 30700, 13400))
        self.assertEqual(d["bankBNPLYoY"], 33.54)

    def test_indonesian_number_format(self):
        self.assertEqual(R.idr_number("105,63"), 105.63)
        self.assertEqual(R.idr_number("1.234,5"), 1234.5)

    def test_month_mismatch_between_sentences_is_refused(self):
        page = (FIX / "rdkb-agustus-2026.html").read_text(encoding="utf-8").replace("Per Juli 2026", "Per Juni 2026")
        with self.assertRaises(ValueError):
            R.parse(page)

    def test_missing_sentence_is_refused_not_guessed(self):
        page = (FIX / "rdkb-agustus-2026.html").read_text(encoding="utf-8").replace("pembiayaan pada Juli 2026", "X")
        with self.assertRaises(ValueError):
            R.parse(page)

    def test_latest_rdkb_url_picks_the_newest_month(self):
        listing = ('<a href="/id/x/RDKB-Feb-2026.aspx">a</a> <a href="/id/x/RDKB-Agustus-2026.aspx">b</a> '
                   '<a href="/id/x/RDKB-Des-2025.aspx">c</a>')
        self.assertTrue(R.latest_rdkb_url(listing).endswith("RDKB-Agustus-2026.aspx"))


class BuildTests(unittest.TestCase):
    SEKI = {"source": "BI SEKI I.4", "latest": "2026.08",
            "series": {"2026.07": {"bankVeh": 127122, "bankOth": 1424937}, "2026.08": {"bankVeh": 126900, "bankOth": 1430000}}}
    RDKB = {"dataMonth": "2026.08", "p2p": 106500, "bankBNPL": 32000, "mfBNPL": 13900, "sourceUrl": "https://ojk.go.id/x"}

    def test_only_periods_after_the_dashboard_are_packaged(self):
        doc = B.build(self.SEKI, self.RDKB, "2026.07", "2026-10-01")
        self.assertEqual(list(doc["rows"]), ["2026.08"])
        row = doc["rows"]["2026.08"]
        self.assertEqual((row["bankVeh"], row["p2p"], row["bankMP"]), (126900, 106500, None))

    def test_missing_rdkb_still_packages_seki(self):
        doc = B.build(self.SEKI, None, "2026.07", "2026-10-01")
        self.assertEqual(list(doc["rows"]), ["2026.08"])
        self.assertNotIn("p2p", doc["rows"]["2026.08"])
        self.assertIsNone(doc["sources"]["rdkb"])

    def test_nothing_new_means_no_card(self):
        doc = B.build(self.SEKI, self.RDKB, "2026.08", "2026-10-01")
        self.assertEqual(doc["rows"], {})
        with tempfile.TemporaryDirectory() as tmp:
            pj, js = pathlib.Path(tmp) / "p.json", pathlib.Path(tmp) / "p.js"
            pj.write_text(json.dumps({"boards": {"credit": [{"id": "industry-auto:old", "source": "industry-auto"}]}}), encoding="utf-8")
            B.upsert_card(doc, [], "2026-10-01", pj, js)
            self.assertEqual(json.loads(pj.read_text(encoding="utf-8"))["boards"]["credit"], [],
                             "没有新期时旧卡片也要摘掉，不能一直挂着")

    def test_card_replaces_its_own_and_keeps_others(self):
        doc = B.build(self.SEKI, self.RDKB, "2026.07", "2026-10-01")
        with tempfile.TemporaryDirectory() as tmp:
            pj, js = pathlib.Path(tmp) / "p.json", pathlib.Path(tmp) / "p.js"
            pj.write_text(json.dumps({"boards": {"credit": [
                {"id": "industry-auto:old", "source": "industry-auto"},
                {"id": "p2p-scraper:x", "source": "p2p-scraper"}]}}), encoding="utf-8")
            B.upsert_card(doc, ["RDKB"], "2026-10-01", pj, js)
            items = json.loads(pj.read_text(encoding="utf-8"))["boards"]["credit"]
            mirror = js.read_text(encoding="utf-8")
        self.assertEqual([i["source"] for i in items], ["p2p-scraper", "industry-auto"])
        self.assertIn("本月缺源：RDKB", items[-1]["detail"])
        self.assertTrue(mirror.startswith("const PENDING = "))


if __name__ == "__main__":
    unittest.main()
