import importlib.util
import pathlib
import sys
import unittest


MODULE_PATH = pathlib.Path(__file__).with_name("macro_monitor.py")
SPEC = importlib.util.spec_from_file_location("macro_monitor", MODULE_PATH)
macro = importlib.util.module_from_spec(SPEC)
assert SPEC.loader
sys.modules[SPEC.name] = macro
SPEC.loader.exec_module(macro)


class MacroMonitorTests(unittest.TestCase):
    def test_parse_bi_rate_uses_latest_decision(self):
        source = """
        <table><tr><th>Date</th><th>BI-Rate</th></tr>
        <tr><td>18 June 2026</td><td>5.75 %</td></tr>
        <tr><td>22 July 2026</td><td>5.75 %</td></tr></table>
        """
        result = macro.parse_bi_rate(source)
        self.assertEqual(result.period, "2026.07")
        self.assertEqual(result.value, 5.75)
        self.assertEqual(result.released, "2026-07-22")

    def test_parse_jisdor_uses_latest_working_day(self):
        source = """
        <table><tr><th>Date</th><th>JISDOR</th></tr>
        <tr><td>28 July 2026</td><td>Rp 18,088</td></tr>
        <tr><td>29 July 2026</td><td>Rp 18,087</td></tr></table>
        """
        result = macro.parse_jisdor(source)
        self.assertEqual(result.period, "2026.07")
        self.assertEqual(result.value, 18087)
        self.assertIn("15,000", result.note)

    def test_parse_bps_three_release_types(self):
        items = [
            {
                "brs_id": "2590",
                "title": "Inflasi year-on-year (y-on-y) pada Juni 2026 sebesar 3,34 persen",
                "abstract": "",
                "rl_date": "2026-07-01",
            },
            {
                "brs_id": "2575",
                "title": "Ekonomi Indonesia Triwulan I-2026 Tumbuh 5,61 Persen (Y-on-Y)",
                "abstract": "",
                "rl_date": "2026-05-05",
            },
            {
                "brs_id": "2574",
                "title": "Pada Februari 2026 Tingkat Pengangguran Terbuka sebesar 4,68 persen",
                "abstract": "",
                "rl_date": "2026-05-05",
            },
        ]
        results = {item.indicator: item for item in macro.parse_bps_releases(items)}
        self.assertEqual(results["cpi"].period, "2026.06")
        self.assertEqual(results["cpi"].value, 3.34)
        self.assertEqual(results["gdp"].period, "2026Q1")
        self.assertEqual(results["gdp"].value, 5.61)
        self.assertEqual(results["unemployment"].period, "2026.02")
        self.assertEqual(results["unemployment"].value, 4.68)

    def test_comparison_flags_new_period_and_revision(self):
        confirmed = {
            "cpi": {"period": "2026.06", "value": 3.34},
            "usd_idr": {"period": "2026.07", "value": 18128},
        }
        observations = {
            "cpi": macro.Observation("cpi", "CPI 通胀", "2026.07", 3.1, "% YoY", "BPS", "https://bps.go.id"),
            "usd_idr": macro.Observation("usd_idr", "USD/IDR", "2026.07", 18087, "IDR/USD", "BI", "https://bi.go.id"),
        }
        changes = macro.compare(confirmed, observations)
        self.assertEqual({item["reason"] for item in changes}, {"new_period", "same_period_revision"})


if __name__ == "__main__":
    unittest.main()
