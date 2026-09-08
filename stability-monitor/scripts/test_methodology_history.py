# -*- coding: utf-8 -*-
"""方法论变更不得静默改写历史。

2026-08-20 同时落地三项结构变更（PMI 平滑、国际市场准入、对平民镇压强度）。
干跑第一版把两个新 driver 在历史期次回填成「0起 / 正常纳入」，结果 8 期历史
每期凭空抬升 0.8~1.2 分——把「当时没有证据池可查」当成了「当时没发生」。

这类错误的特征是**看不出来**：曲线还是那条曲线，只是整体上移，没有任何报错。
所以把历史期次钉死在这里当绊线：真要重调历史，得先改这个基线并在 PR 里
附逐期对照表，而不是让它悄悄漂走。
"""
from __future__ import annotations

import pathlib
import re
import unittest
from decimal import Decimal, ROUND_HALF_UP

HERE = pathlib.Path(__file__).resolve().parent
DATA_JS = HERE.parent / "dashboard" / "data.js"

# 确认过的历史。最后一期之外任何一格变动都必须是有意为之，并附逐期对照表。
#
# 2026-09-01 基线更新（唯一一次有意的历史重调，逐期对照表见 PR #38）：
# 汇率 driver 的年内基数一直用错（约 16,25x，官方为 2025 年末 16,777），把 6.8% 的真实
# 贬值虚增进 7–12% 档。07-22/07-28/07-30/08-11/08-20 五期货币柱 40→44（08-20 为 42→46）。
# 08-04 不动：18,025 真实 7.4% 且破 18,000，原值本就正确。
# 07-07/07-16 不动：无 driver 级记录、不可重算，保留旧基数并在图上标 fxBasis="legacy"。
CONFIRMED_HISTORY = [
    ("2026-07-07", dict(fiscal=49, currency=42, institutions=45, social=59, coercive=43)),
    ("2026-07-16", dict(fiscal=49, currency=39, institutions=40, social=59, coercive=37)),
    ("2026-07-22", dict(fiscal=48, currency=44, institutions=37, social=59, coercive=36)),
    ("2026-07-28", dict(fiscal=48, currency=44, institutions=35, social=59, coercive=36)),
    ("2026-07-30", dict(fiscal=48, currency=44, institutions=35, social=59, coercive=36)),
    ("2026-08-04", dict(fiscal=48, currency=39, institutions=35, social=56, coercive=36)),
    ("2026-08-11", dict(fiscal=48, currency=44, institutions=35, social=58, coercive=36)),
    ("2026-08-20", dict(fiscal=48, currency=46, institutions=35, social=57, coercive=35)),
]

# 无 driver 级记录、汇率基数不可重算的期次。**这两期不是「已核对正确」，是「查不了」。**
LEGACY_FX_BASIS = ("2026-07-07", "2026-07-16")

PILLARS = ("fiscal", "currency", "institutions", "social", "coercive")


def load_weekly() -> list[tuple[str, dict[str, int]]]:
    text = DATA_JS.read_text(encoding="utf-8")
    body = text[text.index("weekly: ["):]
    body = body[:body.index("]")]
    rows = []
    for match in re.finditer(r'\{\s*date:\s*"([\d-]+)",\s*scores:\s*\{([^}]*)\}', body):
        scores = {k: int(v) for k, v in re.findall(r"(\w+):\s*(\d+)", match.group(2))}
        rows.append((match.group(1), scores))
    return rows


def pmi_smooth(pmi: str) -> int:
    """data.js 里写定的连续映射：clamp(50 + (PMI−50)×5, 20, 75)，半数进位。"""
    raw = Decimal(50) + (Decimal(pmi) - Decimal(50)) * 5
    return max(20, min(75, int(raw.quantize(Decimal("1"), rounding=ROUND_HALF_UP))))


class HistoryIsNotRewrittenTests(unittest.TestCase):
    def test_confirmed_history_matches_the_recorded_baseline(self):
        weekly = load_weekly()
        self.assertGreaterEqual(len(weekly), len(CONFIRMED_HISTORY) + 1,
                                "weekly 至少应有全部历史期次加上当期")
        for (want_date, want), (got_date, got) in zip(CONFIRMED_HISTORY, weekly):
            with self.subTest(date=want_date):
                self.assertEqual(got_date, want_date, "历史期次的日期或顺序被改动")
                for pillar in PILLARS:
                    self.assertEqual(
                        got.get(pillar), want[pillar],
                        f"{want_date} 的 {pillar} 由 {want[pillar]} 变成 {got.get(pillar)}——"
                        "重调历史必须是有意为之并附逐期对照表，不能顺带发生",
                    )


class LegacyFxBasisTests(unittest.TestCase):
    """不可重算的期次必须在数据里自报家门，而不是只写在 PR 描述里。

    2026-09-01 回溯重调了五期汇率基数，但 07-07 与 07-16 没有 driver 级记录、无法重算，
    只能保留旧基数。于是序列里同时存在两套口径。**这道缝必须显式**——否则半年后
    看图的人会把 07-16 的 44.8 和 07-22 的 44.8 当成同一把尺子量出来的。
    """

    def setUp(self):
        self.text = DATA_JS.read_text(encoding="utf-8")

    def test_unrecomputable_periods_are_marked_in_the_data(self):
        for date in LEGACY_FX_BASIS:
            with self.subTest(date=date):
                start = self.text.index(f'date: "{date}"')
                entry = self.text[start:self.text.index(chr(10), start)]
                self.assertIn('fxBasis: "legacy"', entry,
                              f"{date} 沿用旧汇率基数，必须标出来")

    def test_recomputed_periods_are_not_marked_legacy(self):
        """反向：重调过的期次不能还挂着 legacy，否则标记失去意义。"""
        for date, _ in CONFIRMED_HISTORY:
            if date in LEGACY_FX_BASIS:
                continue
            with self.subTest(date=date):
                start = self.text.index(f'date: "{date}"')
                entry = self.text[start:self.text.index(chr(10), start)]
                self.assertNotIn("legacy", entry, f"{date} 已按新基数重算，不该标 legacy")

    def test_the_chart_actually_renders_the_seam(self):
        """标记只写进 data.js 不够——engine.js 必须真的把它画出来。"""
        engine = (HERE.parent / "dashboard" / "engine.js").read_text(encoding="utf-8")
        self.assertIn("legacyBasis", engine, "趋势图没有读 fxBasis，缝在图上看不见")
        self.assertIn("fxBasis", engine)


class V4ShadowRetroTests(unittest.TestCase):
    """V4 影子历史的回溯必须留痕，且不可重算的那期要自报家门。

    2026-09-01 修 V3 的汇率基数时，V4 证据档里的 fx_stress 被漏掉了——同一天、
    同一个汇率，V3 记 55、V4 记 38，影子指数照常出了个 46.1，全绿。这条缝在
    validate_repo 里已经钉成不变量；这里钉的是回溯本身的完整性。
    """

    HISTORY = HERE.parent / "data" / "v4-shadow-history.json"
    NOT_RECOMPUTABLE = ("2026-07-22",)

    def setUp(self):
        import json
        self.hist = json.loads(self.HISTORY.read_text(encoding="utf-8"))
        self.byDate = {s["date"]: s for s in self.hist["snapshots"]}

    def test_the_unreplayable_period_says_so(self):
        for date in self.NOT_RECOMPUTABLE:
            with self.subTest(date=date):
                snap = self.byDate[date]
                self.assertEqual(snap.get("fxBasis"), "legacy",
                                 f"{date} 无法重放，必须标 fxBasis=legacy")
                self.assertIn("revision", snap, f"{date} 缺少留痕")

    def test_no_period_is_both_legacy_and_recomputed(self):
        for date, snap in self.byDate.items():
            if snap.get("fxBasis") != "legacy":
                continue
            with self.subTest(date=date):
                self.assertNotIn("fromComposite", snap.get("revision", {}),
                                 f"{date} 既标不可重算又记录了重算前后值，自相矛盾")

    def test_every_revised_period_records_what_it_was_before(self):
        revised = [d for d, s in self.byDate.items()
                   if "fromComposite" in s.get("revision", {})]
        self.assertTrue(revised, "一期都没重调，回溯没落地")
        for date in revised:
            with self.subTest(date=date):
                snap = self.byDate[date]
                self.assertNotEqual(snap["revision"]["fromComposite"], snap["composite"],
                                    f"{date} 记了 revision 但分数没变")
                self.assertIn("基数", snap["revision"]["why"], f"{date} 没说明改动理由")

    def test_the_revision_log_names_what_could_not_be_recomputed(self):
        """日志必须点名不可重算的期次——否则半年后没人知道那道缝在哪。"""
        entries = self.hist.get("revisionLog") or []
        self.assertTrue(entries, "缺少 revisionLog")
        latest = entries[-1]
        self.assertEqual(tuple(latest.get("notRecomputable", ())), self.NOT_RECOMPUTABLE)
        self.assertIn("verification", latest, "没写怎么验证的，等于没法复核")


class PmiSmoothingTests(unittest.TestCase):
    """平滑的全部意义在于：去掉断崖，同时不动历史。"""

    def test_deep_contraction_reading_keeps_its_old_band_score(self):
        """46.9 是改档前所有期次的输入；新公式必须仍给 35，否则历史整体位移。"""
        self.assertEqual(pmi_smooth("46.9"), 35)

    def test_the_half_point_is_not_lost_to_binary_floating_point(self):
        """46.9 落在精确的 34.5 上。用 float 会算成 34.4999… 进而把 7 期历史全部 −1。"""
        naive = 50 + (46.9 - 50) * 5
        self.assertLess(naive, 34.5, "浮点确实低于 34.5——所以取整必须走十进制")
        self.assertEqual(pmi_smooth("46.9"), 35, "十进制半数进位才能保住历史")

    def test_current_reading_no_longer_gets_the_cliff_jump(self):
        """50.2 仅微超荣枯线，旧阶梯给 +20，平滑后应显著收敛。"""
        self.assertEqual(pmi_smooth("50.2"), 51)
        self.assertLess(pmi_smooth("50.2") - 35, 20, "断崖没被削掉就白改了")

    def test_mapping_is_monotonic_and_clamped(self):
        values = ["42", "44", "46.9", "48", "50", "50.2", "52", "55", "60"]
        scores = [pmi_smooth(v) for v in values]
        self.assertEqual(scores, sorted(scores), "映射必须单调")
        self.assertEqual(pmi_smooth("42"), 20)
        self.assertEqual(pmi_smooth("60"), 75)


class NewDriverContractTests(unittest.TestCase):
    """两个新 driver 必须把「历史期次未测量」写在自己身上，而不是靠人记得。"""

    def setUp(self):
        self.text = DATA_JS.read_text(encoding="utf-8")

    def test_market_access_driver_exists_with_its_carved_weight(self):
        self.assertIn('name: "国际市场准入", weight: 0.06', self.text)
        self.assertIn('name: "股市与外资流向", weight: 0.14', self.text,
                      "0.06 必须全部由股市项让出，否则历史期次退回权重时对不上")

    def test_repression_driver_exists_and_is_calibrated_below_the_pillar_mean(self):
        self.assertIn('name: "对平民镇压强度(计数)", weight: 0.15', self.text)
        # 各激活档都必须低于强制机构支柱的量级(约 33-36)，否则新增项反而把支柱抬上去。
        # 不再断言「当前」标记落在哪一档——那会随每周实际计数移动。
        for cond, score in (("0 起", 65), ("1 起", 45), ("2–3 起", 30),
                            ("≥4 起 或出现死亡", 18)):
            with self.subTest(band=cond):
                self.assertRegex(self.text,
                                 r'\{ cond: "' + cond + r'[^"]*", score: ' + str(score) + r' \}',
                                 f"{cond} 档的分值被改动")

    def test_interagency_driver_is_renamed_to_say_what_it_actually_counts(self):
        self.assertIn('name: "军警冲突烈度(机构间)"', self.text)
        self.assertNotIn('name: "军警冲突烈度(计数)"', self.text)

    # 2026-08-20 新设的两个 driver。**只在它们仍是「本期新设」时要求 prev: null**——
    # 一旦某个 driver 有了真实的上期测量值，prev 就该填那个值，否则看板显示不出变化。
    # 「对平民镇压强度」在 2026-09-01 首次改分(30→18)，从此退出本清单。
    STILL_UNMEASURED_BEFORE = ("国际市场准入",)

    def test_drivers_never_measured_before_declare_no_previous_value(self):
        """从未测量过的 driver，prev 必须是 null，不能编一个上期值。

        engine.js 会把 prev 原样渲染成「相对上期(45)」。给「国际市场准入」填
        prev=45（FTSE 六月那次推迟的追认分）看着合理，实际是在看板上宣称上期
        测过、本周从45暴跌到20——而那 25 分的跌幅从未发生。validate_repo、
        单测、CI 当时全绿，只有把 HTML 真渲染出来才看得见。
        """
        for marker in self.STILL_UNMEASURED_BEFORE:
            with self.subTest(driver=marker):
                start = self.text.index(f'name: "{marker}"')
                head = self.text[start:self.text.index(chr(10), start)]
                self.assertIn("prev: null", head,
                              f"{marker} 至今未有过测量值，prev 必须为 null；"
                              "填任何数字都会在看板上渲染成一次没发生过的变动")

    def test_a_driver_that_has_been_measured_carries_a_real_previous_value(self):
        """反过来：已经改过分的 driver 不能还挂着 prev: null，否则变化显示不出来。"""
        start = self.text.index('name: "对平民镇压强度(计数)"')
        head = self.text[start:self.text.index(chr(10), start)]
        self.assertNotIn("prev: null", head,
                         "该 driver 已于 2026-09-01 首次改分(30→18)，prev 应为 30")

    def test_both_new_drivers_document_the_unmeasured_history_rule(self):
        for marker in ("国际市场准入", "对平民镇压强度(计数)"):
            with self.subTest(driver=marker):
                start = self.text.index(f'name: "{marker}"')
                block = self.text[start:start + 4000]
                self.assertIn("未测量", block,
                              f"{marker} 必须写明历史期次标为未测量，而不是回填成中性值")


if __name__ == "__main__":
    unittest.main()
