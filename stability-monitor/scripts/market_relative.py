# -*- coding: utf-8 -*-
"""
货币支柱 · 市场层相对读数（股市对新兴市场、卢比对亚洲五币）
==========================================================
2026-10-16 方法论变更（逐期对照表见该次 PR）。旧口径有两个结构性毛病：

1. **受起点基数支配**：股市与汇率都按「年内」计，起点是上年末。1–4 月的暴跌会一直
   记到 12 月 31 日、然后在 1 月 1 日一夜清零；把窗口换成滚动 3 个月或 6 个月也不行——
   同一天印尼对新兴市场滚动 6 个月是 −30%、滚动 3 个月却是 −4%（9 月甚至 +16%），
   因为 3 个月前的起点已经是坑底。**换窗口只是换了一个起点。**
2. **分不清本国恶化与全球同跌**：全球一起跌 20%，旧口径照扣；而这不是印尼自己的问题。

新口径：
- 股市 = MSCI Indonesia ÷ MSCI Emerging Markets（同为美元计价的 MSCI 官方指数），
  看这个比值**偏离自身过去 250 个交易日均值**多少。没有日历起点，伤害随时间平滑淡出。
- 汇率 = 每美元卢比 ÷ 亚洲五币（THB/MYR/PHP/INR/KRW）每美元的几何均值，同样看偏离
  250 日均值；正值 = 卢比相对亚洲走弱。数据全部取 ECB 欧元参考汇率、经美元交叉——
  同一机构、同一定盘时点，避免拼接五家央行不同时点的定盘价。
- 映射用连续函数而非档位（旧档界让 17,948 与 17,951 差 17 分）：
    股市分 = clamp(55 + 偏离%, 5, 75)          每落后新兴市场 1pp 扣 1 分
    汇率分 = clamp(55 − 5 × 偏离%, 5, 75)      每相对亚洲多贬 1pp 扣 5 分
  输入先按展示精度（一位小数）取整，再十进制半数进位——看板上写的数字就能复算出分。

**它不负责什么**：
- 制度性的市场准入（MSCI/FTSE 降级、冻结）不在这里，已移到制度支柱的
  「资本市场治理与国际准入」——那是持续状态，不该靠价格窗口去体现。
- 绝对压力（例如全亚洲一起崩、美元债偿付变重）属财政与外部脆弱性支柱。

**人在环**：本脚本只抓取与计算，写 `data/market-relative/YYYY-MM-DD.json`；
是否把读数写进 data.js 由周更人工决定。数据不足（窗口 < MIN_WINDOW）时拒绝出数。

用法:
  python market_relative.py --period 2026-10-16              # 截点＝期次前一自然日（含）
  python market_relative.py --period 2026-10-16 --print-only

截点规则统一为「期次前一自然日及之前最近的收盘」，历史重算也按此执行，不设逐期例外。
"""
from __future__ import annotations

import argparse
import csv
import datetime as dt
import io
import json
import math
import pathlib
import sys
import time
from decimal import Decimal, ROUND_HALF_UP

import requests

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

HERE = pathlib.Path(__file__).resolve().parent
OUT_DIR = HERE.parent / "data" / "market-relative"

MSCI_INDONESIA = "105767"   # MSCI INDONESIA (Standard, USD)
MSCI_EM = "891800"          # MSCI EM (EMERGING MARKETS) (Standard, USD)
MSCI_URL = ("https://app2.msci.com/products/service/index/indexmaster/getLevelDataForGraph"
            "?currency_symbol=USD&index_variant=STRD&start_date={start}&end_date={end}"
            "&data_frequency=DAILY&index_codes={code}")
ECB_URL = ("https://data-api.ecb.europa.eu/service/data/EXR/D.{ccys}.EUR.SP00.A"
           "?startPeriod={start}&endPeriod={end}&format=csvdata")
ASIAN_BASKET = ("THB", "MYR", "PHP", "INR", "KRW")

WINDOW = 250        # 约一年交易日
MIN_WINDOW = 240    # 少于这个数不出数，宁可缺也不拿半截窗口凑
LOOKBACK_DAYS = 400 # 抓取的自然日跨度，足够覆盖 250 个交易日
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36"


class InsufficientData(RuntimeError):
    """窗口不够或数据缺失——不是「偏离为 0」。"""


# ---------- 映射 ----------
def _half_up(x: Decimal) -> int:
    return int(x.quantize(Decimal("1"), rounding=ROUND_HALF_UP))


def round1(x: float) -> Decimal:
    return Decimal(repr(x)).quantize(Decimal("0.1"), rounding=ROUND_HALF_UP)


def equity_score(dev_pct: Decimal) -> int:
    return max(5, min(75, _half_up(Decimal(55) + dev_pct)))


def fx_score(dev_pct: Decimal) -> int:
    return max(5, min(75, _half_up(Decimal(55) - 5 * dev_pct)))


# ---------- 计算 ----------
def deviation_from_mean(series: dict[str, float], cutoff: str, window: int = WINDOW):
    """series 在 cutoff（含）当日或之前最近一个观测，相对其最近 window 个观测均值的偏离 %。"""
    dates = sorted(d for d in series if d <= cutoff)
    if not dates:
        raise InsufficientData(f"{cutoff} 之前没有观测")
    hist = dates[-window:]
    if len(hist) < MIN_WINDOW:
        raise InsufficientData(f"窗口只有 {len(hist)} 个观测，少于 {MIN_WINDOW}")
    mean = sum(series[d] for d in hist) / len(hist)
    return (series[hist[-1]] / mean - 1) * 100, hist


def equity_ratio(indonesia: dict[str, float], em: dict[str, float]) -> dict[str, float]:
    return {d: indonesia[d] / em[d] for d in sorted(set(indonesia) & set(em))}


def fx_ratio(per_eur: dict[str, dict[str, float]]) -> dict[str, float]:
    """每美元卢比 ÷ 亚洲五币每美元的几何均值。只用七个币种当天全部有定盘的日子。"""
    need = ("USD", "IDR") + ASIAN_BASKET
    out = {}
    for d, row in sorted(per_eur.items()):
        if not all(c in row for c in need):
            continue
        per_usd = {c: row[c] / row["USD"] for c in ("IDR",) + ASIAN_BASKET}
        basket = math.exp(sum(math.log(per_usd[c]) for c in ASIAN_BASKET) / len(ASIAN_BASKET))
        out[d] = per_usd["IDR"] / basket
    return out


def readings(indonesia, em, per_eur, cutoff: str) -> dict:
    eq_series = equity_ratio(indonesia, em)
    fx_series = fx_ratio(per_eur)
    eq_dev, eq_hist = deviation_from_mean(eq_series, cutoff)
    fx_dev, fx_hist = deviation_from_mean(fx_series, cutoff)
    eq_d, fx_d = round1(eq_dev), round1(fx_dev)
    return {
        "cutoff": cutoff,
        "equity": {
            "metric": "MSCI Indonesia ÷ MSCI EM，偏离 250 日均值",
            "lastObs": eq_hist[-1], "windowStart": eq_hist[0], "n": len(eq_hist),
            "deviationPct": float(eq_d), "score": equity_score(eq_d),
            "formula": "clamp(55 + 偏离%, 5, 75)",
            "window": {d: round(eq_series[d], 6) for d in eq_hist},
        },
        "fx": {
            "metric": "每美元卢比 ÷ 亚洲五币(THB/MYR/PHP/INR/KRW)几何均值，偏离 250 日均值；正=卢比相对走弱",
            "lastObs": fx_hist[-1], "windowStart": fx_hist[0], "n": len(fx_hist),
            "deviationPct": float(fx_d), "score": fx_score(fx_d),
            "formula": "clamp(55 − 5×偏离%, 5, 75)",
            "window": {d: round(fx_series[d], 6) for d in fx_hist},
        },
    }


# ---------- 抓取 ----------
RETRIES = 4


def _get(url: str, **kw) -> requests.Response:
    """两家接口都会偶发 connection reset（2026-10-16 连跑 13 期时遇到 2 次），重试即恢复。"""
    for attempt in range(RETRIES):
        try:
            r = requests.get(url, timeout=60, **kw)
            r.raise_for_status()
            return r
        except requests.RequestException:
            if attempt == RETRIES - 1:
                raise
            time.sleep(5 * 2 ** attempt)
    raise AssertionError("unreachable")


def fetch_msci(code: str, start: str, end: str) -> dict[str, float]:
    url = MSCI_URL.format(code=code, start=start.replace("-", ""), end=end.replace("-", ""))
    r = _get(url, headers={"User-Agent": UA})
    levels = r.json()["indexes"]["INDEX_LEVELS"]
    if not levels:
        raise InsufficientData(f"MSCI {code} 返回空序列")
    out = {}
    for x in levels:
        s = str(x["calc_date"])
        out[f"{s[:4]}-{s[4:6]}-{s[6:]}"] = float(x["level_eod"])
    return out


def fetch_ecb(start: str, end: str) -> dict[str, dict[str, float]]:
    ccys = "+".join(("USD", "IDR") + ASIAN_BASKET)
    r = _get(ECB_URL.format(ccys=ccys, start=start, end=end))
    out: dict[str, dict[str, float]] = {}
    for row in csv.DictReader(io.StringIO(r.text)):
        if row.get("OBS_VALUE"):
            out.setdefault(row["TIME_PERIOD"], {})[row["CURRENCY"]] = float(row["OBS_VALUE"])
    if not out:
        raise InsufficientData("ECB 返回空序列")
    return out


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--period", required=True, help="评分期次 YYYY-MM-DD")
    ap.add_argument("--cutoff", help="市场截点（含），默认期次前一自然日")
    ap.add_argument("--print-only", action="store_true")
    a = ap.parse_args(argv)
    cutoff = a.cutoff or (dt.date.fromisoformat(a.period) - dt.timedelta(days=1)).isoformat()
    start = (dt.date.fromisoformat(cutoff) - dt.timedelta(days=LOOKBACK_DAYS)).isoformat()
    try:
        res = readings(fetch_msci(MSCI_INDONESIA, start, cutoff), fetch_msci(MSCI_EM, start, cutoff),
                       fetch_ecb(start, cutoff), cutoff)
    except (InsufficientData, requests.RequestException, KeyError, ValueError) as e:
        print(f"× 拒绝出数：{e}")
        return 2
    res = {"period": a.period, "retrievedAt": dt.date.today().isoformat(),
           "sources": {"equity": f"MSCI 官方指数水平 {MSCI_INDONESIA}/{MSCI_EM} (app2.msci.com)",
                       "fx": "ECB euro foreign exchange reference rates (data-api.ecb.europa.eu)，经 USD 交叉"},
           **res}
    for k in ("equity", "fx"):
        x = res[k]
        print(f"{k:<7} 偏离 {x['deviationPct']:+.1f}% → {x['score']}  "
              f"(窗口 {x['windowStart']}…{x['lastObs']}, n={x['n']})")
    if not a.print_only:
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        path = OUT_DIR / f"{a.period}.json"
        tmp = path.with_suffix(".tmp")
        tmp.write_text(json.dumps(res, ensure_ascii=False, indent=1), encoding="utf-8")
        tmp.replace(path)
        print(f"✓ 写入 {path.relative_to(HERE.parent.parent)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
