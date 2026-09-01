# -*- coding: utf-8 -*-
"""街头热度采集器的「拒绝出分」必须可诊断，且最大权重的源必须有重试。

背景：2026-08-18 云端周度运行判定有效权重 60% < 65% 门槛，按降级契约拒绝出分。
拒绝本身是对的，但日志里只有「有效权重 60%」这一句——没有任何信息说明是哪几个源
挂了、为什么挂。结果是「知道它坏了，但没法修」。

同时 Trends 权重 0.25（六个源里最大），却是唯一没有重试的采集器；GDELT 早就有
3 次退避重试。一次瞬时 429 就能抹掉 25 个百分点。
"""
from __future__ import annotations

import importlib.util
import io
import pathlib
import sys
import tempfile
import unittest
from contextlib import redirect_stdout
from unittest import mock

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
_spec = importlib.util.spec_from_file_location("street_heat", HERE / "street_heat.py")
SH = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(SH)


class _Frame:
    """pytrends 返回的 DataFrame 的最小替身。

    street_heat.py 只在 collect_trends 内部懒加载 pytrends/pandas，模块顶层仅依赖
    标准库与 requests；CI 的 validate 步骤也只装 requests。测试不能把 pandas 变成
    新的硬依赖，否则 CI 会挂在 import 上——本仓库踩过一次。
    """

    def __init__(self, empty):
        self.empty = empty


def _result(status, heat=None, detail=""):
    return {"status": status, "heat": heat, "detail": detail, "raw": {}}


class TrendsRetryTests(unittest.TestCase):
    def test_transient_failure_is_retried_then_succeeds(self):
        """瞬时 429 不该让整周掉 25 个百分点。"""
        good = _Frame(empty=False)
        py = mock.Mock()
        py.interest_over_time.side_effect = [RuntimeError("429 Too Many Requests"), good]
        with mock.patch.object(SH.time, "sleep"):
            out = SH._trends_series(py, ["demo"], retries=3)
        self.assertEqual(py.interest_over_time.call_count, 2)
        self.assertIs(out, good)

    def test_empty_frame_counts_as_failure_and_is_retried(self):
        py = mock.Mock()
        py.interest_over_time.side_effect = [_Frame(empty=True), _Frame(empty=False)]
        with mock.patch.object(SH.time, "sleep"):
            SH._trends_series(py, ["demo"], retries=2)
        self.assertEqual(py.interest_over_time.call_count, 2)

    def test_exhausted_retries_raise_with_cause(self):
        py = mock.Mock()
        py.interest_over_time.side_effect = RuntimeError("429 Too Many Requests")
        with mock.patch.object(SH.time, "sleep"):
            with self.assertRaises(RuntimeError) as ctx:
                SH._trends_series(py, ["demo"], retries=3)
        self.assertIn("重试3次", str(ctx.exception))
        self.assertIn("429", str(ctx.exception))
        self.assertEqual(py.interest_over_time.call_count, 3)

    def test_trends_still_carries_the_largest_weight(self):
        """如果哪天权重调整了，这个测试提醒重新评估重试的必要性。"""
        self.assertEqual(max(SH.WEIGHTS, key=SH.WEIGHTS.get), "trends")


class DiagnosabilityTests(unittest.TestCase):
    def test_status_table_names_every_source_and_its_failure_detail(self):
        results = {k: _result("ok", 30.0, "正常") for k in SH.ORDER}
        results["trends"] = _result("fail", None, "采集失败: 429 Too Many Requests")
        results["gdelt_vol"] = _result("fail", None, "GDELT 数据点不足: 2")
        ok = {k: v for k, v in results.items() if v["status"] == "ok"}
        buf = io.StringIO()
        with redirect_stdout(buf):
            SH.print_source_table("2026-08-18", results, ok)
        out = buf.getvalue()
        for key in SH.ORDER:                      # 六个源一个都不能漏
            self.assertIn(SH.NAMES[key], out)
        self.assertIn("429 Too Many Requests", out)
        self.assertIn("GDELT 数据点不足", out)
        self.assertIn("2 个源未参与", out)

    def test_the_2026_08_18_combination_really_falls_below_the_floor(self):
        """复现当期：trends(25%) + gdelt_vol(15%) 挂掉正好剩 60%。"""
        ok = {k: _result("ok") for k in SH.ORDER if k not in ("trends", "gdelt_vol")}
        coverage, missing_groups = SH.validate_coverage(ok)
        self.assertAlmostEqual(coverage, 0.60, places=2)
        self.assertEqual(missing_groups, [], "两个组别都还有存活的源，所以只会因权重不足而拒绝")
        self.assertLess(coverage, SH.MIN_WEIGHT_COVERAGE)

    def test_recovering_trends_alone_clears_the_floor(self):
        """这正是加重试的收益：只要 Trends 回来，85% > 65%，当周就能出分。"""
        ok = {k: _result("ok") for k in SH.ORDER if k != "gdelt_vol"}
        coverage, missing_groups = SH.validate_coverage(ok)
        self.assertAlmostEqual(coverage, 0.85, places=2)
        self.assertEqual(missing_groups, [])
        self.assertGreaterEqual(coverage, SH.MIN_WEIGHT_COVERAGE)

    def test_floor_is_not_quietly_lowered(self):
        """门槛是方法论承诺，不是可以为了出分而调的旋钮。"""
        self.assertEqual(SH.MIN_WEIGHT_COVERAGE, 0.65)

    def test_losing_a_whole_group_is_refused_even_at_high_weight(self):
        """领先组全挂时，哪怕滞后组权重够也必须拒绝——三角测量塌了。"""
        ok = {k: _result("ok") for k in ("gdelt_vol", "gdelt_tone", "rss")}
        coverage, missing_groups = SH.validate_coverage(ok)
        self.assertAlmostEqual(coverage, 0.45, places=2)
        self.assertIn("领先", missing_groups)


class MainSuccessPathTests(unittest.TestCase):
    """真正跑一遍 main() 的成功路径。

    2026-08-20 的教训：把状态表提成函数时，`W = 78` 被一并挪进了函数，main() 里
    其余 print 全部变成未定义；同时旧调用点没删干净，表打了两遍。**上面那些单元测试
    全绿**，因为它们从来没进过 main()。真实路径直接 NameError 崩在成功分支上——
    这个仓库反复栽在「建好了、测过了、真跑就是坏的」上面。
    """

    def _run_main(self):
        collectors = {
            "trends": lambda: _result("ok", 46.6, "篮子正常"),
            "kaskus": lambda: _result("ok", 45.2, "热帖正常"),
            "youtube": lambda: _result("ok", 100.0, "视频正常"),
            "gdelt_vol": lambda: (_ for _ in ()).throw(RuntimeError("429")),
            "gdelt_tone": lambda: _result("ok", 53.0, "tone 正常"),
            "rss": lambda: _result("ok", 2.9, "RSS 正常"),
        }
        writes: list[str] = []
        with mock.patch.object(SH, "load_config", return_value={}),              mock.patch.object(SH, "collect_trends", collectors["trends"]),              mock.patch.object(SH, "collect_kaskus", collectors["kaskus"]),              mock.patch.object(SH, "collect_youtube", lambda cfg: collectors["youtube"]()),              mock.patch.object(SH, "collect_gdelt_volume", collectors["gdelt_vol"]),              mock.patch.object(SH, "collect_gdelt_tone", collectors["gdelt_tone"]),              mock.patch.object(SH, "collect_rss", collectors["rss"]),              mock.patch.object(SH, "collect_opposition",
                               return_value={"status": "ok", "rate": 37.2, "detail": "分类正常"}),              mock.patch.object(SH, "update_pending"),              mock.patch.object(SH.time, "sleep"),              mock.patch.object(SH, "_atomic_write_text",
                               side_effect=lambda path, content: writes.append(str(path))),              tempfile.TemporaryDirectory() as tmp,              mock.patch.object(SH, "HISTORY_FILE", pathlib.Path(tmp) / "history.json"),              mock.patch.object(SH, "OUT_DIR", pathlib.Path(tmp) / "output"):
            buf = io.StringIO()
            with redirect_stdout(buf):
                SH.main()
        return buf.getvalue(), writes

    def test_success_path_completes_without_error(self):
        """覆盖率 85%（只挂 gdelt_vol）时必须走完全程并落一次历史。"""
        out, writes = self._run_main()
        self.assertIn("合成热度", out)
        self.assertIn("建议分数", out)
        self.assertTrue(any(w.endswith("history.json") for w in writes),
                        "成功路径必须写历史留档")

    def test_status_table_is_printed_exactly_once(self):
        """闸门前打印一次即可；旧调用点没删干净会让确认单出现两遍。"""
        out, _ = self._run_main()
        self.assertEqual(out.count("街头动员热度 · 周度确认单"), 1)

    def test_table_width_is_module_level(self):
        """W 必须是模块常量：它被 print_source_table 和 main() 两处使用。"""
        self.assertEqual(SH.TABLE_WIDTH, 78)


class GdeltThrottleTests(unittest.TestCase):
    """GDELT 两个采集器打同一个端点，第二次必然撞限流。

    实测（2026-08-11 ~ 08-25 三次云端运行）：
        08-25  报道量 ok / tone 429
        08-20  报道量 ok / tone 429
        08-11  报道量 ok / tone ok
    报道量几乎从不失败、tone 几乎总失败——不是 GDELT 整体拒绝我们，而是**第二次
    调用**撞墙。原来两次调用之间只隔主循环的 sleep(6)，而代码注释自己写着
    「限流约 1 次/5 秒」，等于贴着线走；第一次调用一旦内部重试过，配额已被烧掉。

    这也是为什么先修节流而不是换 BigQuery：换数据源要 GCP 计费与服务账号，
    而问题很可能是我们自己打太快。
    """

    def setUp(self):
        SH._gdelt_last_call = None

    def test_throttle_waits_when_calls_are_too_close(self):
        slept = []
        with mock.patch.object(SH.time, "sleep", slept.append),              mock.patch.object(SH.time, "monotonic", side_effect=[100.0, 101.0, 101.0]):
            SH._gdelt_throttle()      # 第一次：只记录时间戳，不等
            SH._gdelt_throttle()      # 1 秒后再来：必须等
        self.assertTrue(slept, "两次请求相隔 1 秒却没有节流")
        self.assertGreater(slept[-1], 5, f"只等了 {slept[-1]:.1f}s，仍在限流线附近")

    def test_throttle_does_not_wait_when_enough_time_passed(self):
        slept = []
        with mock.patch.object(SH.time, "sleep", slept.append),              mock.patch.object(SH.time, "monotonic", side_effect=[0.0, 999.0, 999.0]):
            SH._gdelt_throttle()
            SH._gdelt_throttle()
        self.assertFalse(slept, "间隔足够却仍在空等，会拖慢整体采集")

    def test_first_call_never_waits(self):
        """初值若用 0.0，进程刚启动时 monotonic 也接近 0，第一次会白等一整个间隔。"""
        slept = []
        with mock.patch.object(SH.time, "sleep", slept.append),              mock.patch.object(SH.time, "monotonic", return_value=0.5):
            SH._gdelt_throttle()
        self.assertFalse(slept, "本进程第一次 GDELT 请求不该等待")

    def test_timeout_covers_observed_response_times(self):
        """2026-09-01 实测：timelinevol 42.3s、timelinetone 74.5s 才返回 200。

        原来的 timeout=30 把**正常但慢**的响应当成了故障；60s 也不够。
        这里钉住 >=90，改小会立刻红。
        """
        self.assertGreaterEqual(SH.GDELT_TIMEOUT, 90,
                                "超时低于实测的 74.5s 响应耗时，慢响应会被误判为失败")

    def test_minimum_interval_is_above_the_documented_limit(self):
        """注释里的「1 次/5 秒」是乐观估计，实测 6 秒不够。"""
        self.assertGreaterEqual(SH.GDELT_MIN_INTERVAL, 10)

    def test_backoff_grows_and_is_jittered(self):
        first = [SH._gdelt_backoff(0) for _ in range(12)]
        later = [SH._gdelt_backoff(2) for _ in range(12)]
        self.assertGreater(sum(later) / len(later), sum(first) / len(first),
                           "退避没有随重试次数增长")
        self.assertGreater(len(set(round(v, 3) for v in first)), 1,
                           "退避没有抖动，两个采集器会同步重试、同时撞墙")

    def test_backoff_is_capped(self):
        self.assertLessEqual(SH._gdelt_backoff(20), SH.GDELT_MAX_BACKOFF)

    def test_retry_after_header_wins_over_our_own_guess(self):
        response = mock.Mock(headers={"Retry-After": "37"})
        self.assertEqual(SH._gdelt_backoff(0, response), 37.0)

    def test_malformed_retry_after_falls_back_to_our_backoff(self):
        response = mock.Mock(headers={"Retry-After": "soon"})
        self.assertGreater(SH._gdelt_backoff(0, response), 0)

    def test_repeated_429_eventually_raises_with_the_status(self):
        response = mock.Mock(status_code=429, headers={})
        with mock.patch.object(SH.time, "sleep"),              mock.patch.object(SH.requests, "get", return_value=response):
            with self.assertRaises(RuntimeError) as ctx:
                SH._gdelt("timelinetone", retries=3)
        self.assertIn("429", str(ctx.exception))

    def test_a_successful_call_still_goes_through_the_throttle(self):
        """节流必须在请求层，否则重试路径会绕过它。"""
        response = mock.Mock(status_code=200, headers={})
        response.json.return_value = {"timeline": []}
        response.raise_for_status.return_value = None
        with mock.patch.object(SH, "_gdelt_throttle") as throttle,              mock.patch.object(SH.requests, "get", return_value=response):
            SH._gdelt("timelinevol")
        throttle.assert_called_once()


if __name__ == "__main__":
    unittest.main()
