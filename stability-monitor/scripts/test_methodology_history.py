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
# 有意的历史重调共三次：
# ① 2026-09-01（逐期对照表见 PR #38）：汇率 driver 的年内基数一直用错（约 16,25x，官方为
#    2025 年末 16,777），07-22/07-28/07-30/08-11/08-20 五期货币柱 40→44（08-20 为 42→46）。
# ② 2026-10-16 市场层换尺子（逐期对照表见该次 PR）：股市改「MSCI Indonesia ÷ MSCI EM」、
#    汇率改「卢比 ÷ 亚洲五币」，均为偏离 250 日均值、连续映射；「国际市场准入」迁入制度支柱
#    改名「资本市场治理与国际准入」(0.15)，制度其余五项 ×0.85。07-22…08-11 的 driver 取自
#    git 历史中当期 data.js（汇率按 ① 更正后），08-20 起取自 driver-snapshots。
#    货币柱 07-22 44→39、07-28 44→38、07-30 44→37、08-04 39→37、08-11 44→39、08-20 46→41；
#    制度柱 08-20 起 35→33（08-20 之前准入未测量，权重退回，制度柱不动）。
# ③ 2026-10-16 数据更正（沿用现行档位规则，只改事件日期）：军警冲突把 2025-03-17 楠榜、2025-02-24 塔拉坎
#    两起实弹误记为 2026-03（早已出 12 个月窗口，32→50）；精英清洗误计 Lembong（2025-07 判决、2025-08 获
#    abolisi，32→45）；政策方差补日期后 B50(03-31) 于 09-30 出窗（10-09 起 30→45）。
#    强制柱 07-22/28/30 36→43、08-04/11 36→42、08-20 35→40。
# 07-07/07-16 三次都不动：无 driver 级记录、不可重算，标 fxBasis="legacy"。
CONFIRMED_HISTORY = [
    ("2026-07-07", dict(fiscal=49, currency=42, institutions=45, social=59, coercive=43)),
    ("2026-07-16", dict(fiscal=49, currency=39, institutions=40, social=59, coercive=37)),
    ("2026-07-22", dict(fiscal=48, currency=39, institutions=37, social=59, coercive=43)),
    ("2026-07-28", dict(fiscal=48, currency=38, institutions=35, social=59, coercive=43)),
    ("2026-07-30", dict(fiscal=48, currency=37, institutions=35, social=59, coercive=43)),
    ("2026-08-04", dict(fiscal=48, currency=37, institutions=35, social=56, coercive=42)),
    ("2026-08-11", dict(fiscal=48, currency=39, institutions=35, social=58, coercive=42)),
    ("2026-08-20", dict(fiscal=48, currency=41, institutions=33, social=57, coercive=40)),
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

    def test_market_access_lives_in_institutions_with_proportional_carve(self):
        """2026-10-16 起准入迁入制度支柱 0.15，其余五项等比例 ×0.85——不从任何单项挖。

        从高分项（国际治理 42）挖会让支柱在 MSCI 什么都没发生时先掉 0.5，
        从底档项（政策方差 30）挖会让最差的信号算得更轻。等比例缩放的机械漂移为 0。
        """
        self.assertNotIn('name: "国际市场准入"', self.text, "旧名不该还留在货币支柱里")
        self.assertIn('name: "资本市场治理与国际准入", weight: 0.15', self.text)
        for name, w in (("货币政策可信度", "0.17"), ("政策方差(翻转计数)", "0.17"),
                        ("国际治理评估", "0.2125"), ("法治与执法工具化", "0.1275"),
                        ("关键机构俘获度", "0.17")):
            with self.subTest(driver=name):
                self.assertIn(f'name: "{name}", weight: {w}', self.text)
        self.assertIn('name: "股市相对表现(对MSCI EM)", weight: 0.20', self.text,
                      "原准入让出的 0.06 必须回到股市项")

    def test_market_drivers_are_relative_not_year_to_date(self):
        self.assertNotIn('name: "汇率水平与贬速"', self.text)
        self.assertNotIn('name: "股市与外资流向"', self.text)
        self.assertIn('name: "汇率相对强弱(对亚洲五币)", weight: 0.25', self.text)

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
    # 「对平民镇压强度」在 2026-09-01 首次改分(30→18)，「国际市场准入」在 2026-10-16
    # 首次改分(20→10，MSCI 发起 Standalone 咨询)，两者都已退出本清单。
    STILL_UNMEASURED_BEFORE = ()

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
        for marker, when in (("对平民镇压强度(计数)", "2026-09-01"), ("资本市场治理与国际准入", "2026-10-16")):
            with self.subTest(driver=marker):
                start = self.text.index(f'name: "{marker}"')
                head = self.text[start:self.text.index(chr(10), start)]
                self.assertNotIn("prev: null", head, f"{marker} 已于 {when} 首次改分，prev 必须是真实上期值")

    def test_both_new_drivers_document_the_unmeasured_history_rule(self):
        for marker in ("资本市场治理与国际准入", "对平民镇压强度(计数)"):
            with self.subTest(driver=marker):
                start = self.text.index(f'name: "{marker}"')
                block = self.text[start:start + 4000]
                self.assertIn("未测量", block,
                              f"{marker} 必须写明历史期次标为未测量，而不是回填成中性值")


class CountDriversCarryEventDatesTests(unittest.TestCase):
    """滚动窗口计数项的每一起事件必须带完整日期。

    2026-10-16 核出：军警冲突把 2025-03-17 楠榜、2025-02-24 塔拉坎写成「2026-03」，精英清洗
    计入了 2025-07 判决、2025-08 已获 abolisi 的 Lembong。清单只列事件不记日期，「滚动 6/12 个月」
    从来没有真正执行过——强制支柱因此连续 13 期被低估 5–7 分。没有日期，窗口就无从核对。
    """

    COUNT_DRIVERS = ("政策方差(翻转计数)", "军警冲突烈度(机构间)", "精英清洗烈度(计数)")

    def setUp(self):
        self.text = DATA_JS.read_text(encoding="utf-8")

    def formula(self, name):
        start = self.text.index(f'name: "{name}"')
        f = self.text.index('formula: "', start) + len('formula: "')
        return self.text[f:self.text.index('",', f)]

    def test_window_is_stated_as_by_event_date(self):
        for name in self.COUNT_DRIVERS:
            with self.subTest(driver=name):
                self.assertIn("按事件日期", self.formula(name))

    def test_every_listed_event_has_a_full_date(self):
        for name in self.COUNT_DRIVERS:
            with self.subTest(driver=name):
                f = self.formula(name)
                items = re.split(r"[①②③④⑤⑥]", f)[1:]
                self.assertTrue(items, f"{name} 没有事件清单")
                for item in items:
                    self.assertRegex(item, r"20\d\d-\d\d-\d\d", f"{name} 有事件没写完整日期：{item[:40]}")

    def test_known_misdated_events_are_not_back(self):
        self.assertNotIn("2026-03楠榜", self.text)
        self.assertNotIn("2026-03塔拉坎", self.text)


if __name__ == "__main__":
    unittest.main()
