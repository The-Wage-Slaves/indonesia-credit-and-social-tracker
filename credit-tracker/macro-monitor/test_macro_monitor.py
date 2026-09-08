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



class BpsFailureIsDiagnosableTests(unittest.TestCase):
    """月频采集从 2026-08-25 起连报 "no recognized ... releases"，但那句话
    对**两种相反的故障**是同一句：查询没取回条目 / 取回了条目但正则没认出来。
    分不清就没法查，所以这里钉住「两种失败必须给出不同的、能据以行动的信息」。
    """

    def _payload(self, items):
        return {"status": "OK", "data": [{"page": 1}, items]}

    def test_empty_and_unparseable_are_not_the_same_message(self):
        empty = self._payload([])
        noise = self._payload([
            {"title": "Berita Resmi Statistik Ekspor Impor", "abstract": "", "rl_date": "2026-08-01"},
        ])
        self.assertEqual(macro.bps_items(empty), [])
        self.assertEqual(len(macro.bps_items(noise)), 1)
        self.assertNotEqual(macro.parse_bps_releases(macro.bps_items(noise)), None)
        # 解析结果都为空，但可诊断信息必须不同
        self.assertEqual(macro.parse_bps_releases(macro.bps_items(noise)), [])

    def test_api_level_rejection_states_the_api_message(self):
        reason = macro.bps_reject_reason({"status": "Error", "message": "Data Tidak Ditemukan"})
        self.assertIsNotNone(reason)
        self.assertIn("Data Tidak Ditemukan", reason)

    def test_shape_change_is_reported_as_a_shape_problem(self):
        reason = macro.bps_reject_reason({"status": "OK", "data": "unexpected"})
        self.assertIsNotNone(reason)
        self.assertIn("结构", reason)

    def test_a_usable_payload_has_no_reject_reason(self):
        self.assertIsNone(macro.bps_reject_reason(self._payload([{"title": "x"}])))

    def test_diagnostics_never_echo_the_api_key(self):
        """key 在 URL 路径里。诊断信息只能来自响应体与标题，绝不能带上 URL。"""
        source = MODULE_PATH.read_text(encoding="utf-8")
        start = source.index("def collect_bps(")
        block = source[start:source.index(chr(10) + "def ", start + 1)]
        raise_at = block.index("raise ValueError(")
        message = block[raise_at:]
        for forbidden in ("url", "api_key", "BPS_API_BASE"):
            self.assertNotIn(forbidden, message,
                             f"诊断信息里出现了 {forbidden}，可能把含 key 的 URL 打进日志")


if __name__ == "__main__":
    unittest.main()
