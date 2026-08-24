# -*- coding: utf-8 -*-
"""银行侧消费信贷余额采集器 —— 数据源为 BI SEKI 表 I.4。

为什么换源（2026-08-24，勿删）
--------------------------------
原先用 SSKI `Tabel_17.xls`。BI 已停更该文件：2026-08-01 与 08-24 两次云端运行都
下载成功、并交叉验证出「已发布最新月份 = 2025.12」——**采集器没坏，是源头冻结了**。
OJK 那侧原有的 SLP / LPBBTI Excel 入口同样停在 2025.12。

改用 SEKI I.4（POSISI PINJAMAN/KREDIT ... KELOMPOK BANK & LAPANGAN USAHA），
截至 2026-08-24 已有到 2026.06 的数据，比旧源多 6 期。

口径变化（必须知道）
--------------------
SSKI Tabel_17 的三项是 车贷 / 多用途(Multiguna) / 家庭其他。
SEKI I.4 的消费段只有 Rumah Tinggal / Flat / Ruko / **Kendaraan Bermotor** / **Lainnya**，
**没有 Multiguna** —— 原来的多用途会并入 Lainnya。因此两套数字量级不同、不可直接接续，
历史需整体替换。所有者已确认此口径变更。

BNPL 不在本采集器范围内：它来自 OJK 月度公报，另行处理。

两个必须防的坑（都是实测踩出来的）
------------------------------------
1. **年份不能前向填充**：这张表把 `2026` 标签放在 **Jun 那一列**，而 2026 块是从
   Jan 开始的。朴素前向填充会把 2026.01–05 全错标成 2025.xx —— 第一次抽取就是
   这么错的。正确规则是**看月份回绕**：月份序号比上一列小 → 年份 +1。
2. **跳过无月份标签的列**：表里夹着年度合计列（值等于 Dec），有月份标签的才是月度列。

关于 Referer：开发过程中一次不带 Referer 的请求返回 HTTP 000，当时误判为「BI 要求
Referer」。复测证明**不带也能 200** —— 那次是网络抖动，不是因果。Referer 仍然保留
（无害、且更像正常浏览器流量），但不要把它当成必要条件写进文档或依赖它排错。

自校验
------
所有者手工拉取的 2026-05 值：车贷 128,846、其他 1,411,357（Rp Miliar）。
抽取结果与之不符即**拒绝输出**——宁可不出数，也不要悄悄给出错口径的数。

用法：
  python seki_bank_credit.py            # 抓取并打印
  python seki_bank_credit.py --json     # 输出 JSON（供月频工作流写待确认区）
"""
from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys

SEKI_TABLE_URL = "https://www.bi.go.id/SEKI/tabel/TABEL1_4.xls"
SEKI_REFERER = "https://www.bi.go.id/id/statistik/ekonomi-keuangan/seki/Default.aspx"
SHEET = "I.4_3"
YEAR_ROW, MONTH_ROW = 3, 4
# 标签只在 col2；col0 是行号、col3 起全是数据列。把 col3 也当标签会把数字拼进
# 标签串，使 endswith 匹配全部失配——第一版就是这么错的。
LABEL_COLS = (1, 2)

MONTHS = {"Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
          "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12}

VEHICLE_LABEL = "Kendaraan Bermotor"
OTHER_LABEL = "Lainnya"
CONSUMER_BLOCK = "Bukan Lapangan Usaha"

# 所有者 2026-05 手工核对值（Rp Miliar）。抽取必须命中，否则拒绝输出。
CALIBRATION = {"period": "2026.05", "bankVeh": 128846, "bankOth": 1411357}

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")


def download(dest: pathlib.Path) -> pathlib.Path:
    import requests
    headers = {
        "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                       "(KHTML, like Gecko) Chrome/126.0 Safari/537.36"),
        # 保留 Referer 只是让请求更像正常浏览流量；实测不带也能 200，
        # 不要把它当成必要条件（见模块文档）。
        "Referer": SEKI_REFERER,
    }
    response = requests.get(SEKI_TABLE_URL, headers=headers, timeout=90)
    response.raise_for_status()
    if len(response.content) < 100_000:
        raise RuntimeError(f"SEKI I.4 只有 {len(response.content)} 字节，疑似错误页而非表格")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(response.content)
    return dest


def period_columns(sheet) -> dict[int, str]:
    """列 → "YYYY.MM"。年份靠**月份回绕**推进，不读年份标签的位置。"""
    base_year = None
    for col in range(sheet.ncols):
        value = sheet.cell_value(YEAR_ROW, col)
        if isinstance(value, (int, float)) and 2000 < float(value) < 2100:
            base_year = int(value)
            break
        if isinstance(value, str) and re.fullmatch(r"20\d\d", value.strip()):
            base_year = int(value.strip())
            break
    if base_year is None:
        raise RuntimeError("找不到起始年份标签")

    columns: dict[int, str] = {}
    year, previous_month = base_year, 0
    for col in range(sheet.ncols):
        label = str(sheet.cell_value(MONTH_ROW, col)).strip()
        if label not in MONTHS:          # 年度合计列没有月份标签，跳过
            continue
        month = MONTHS[label]
        if month <= previous_month:      # 月份回绕 → 进入下一年
            year += 1
        previous_month = month
        columns[col] = f"{year}.{month:02d}"
    if not columns:
        raise RuntimeError("没有识别出任何月度列")
    return columns


def label_of(sheet, row: int) -> str:
    parts = [str(sheet.cell_value(row, c)).strip() for c in LABEL_COLS]
    return " ".join(p for p in parts if p)


def find_consumer_rows(sheet) -> tuple[int, int]:
    """定位合计块里的 车贷 / 其他 两行。

    这张表有多个银行组块（BPR 块、合计块……），每块都有一对同名行。合计块的
    消费信贷总额远大于 BPR 块，所以按「块内消费总额最大」来选，而不是写死行号——
    BI 一改行序，写死的行号会静默取到错误的块。
    """
    candidates = []
    block_total_row = None
    for row in range(sheet.nrows):
        label = label_of(sheet, row)
        if CONSUMER_BLOCK in label:
            block_total_row = row
        if label.endswith(VEHICLE_LABEL) and block_total_row is not None:
            if row + 1 < sheet.nrows and label_of(sheet, row + 1).endswith(OTHER_LABEL):
                candidates.append((block_total_row, row, row + 1))
    if not candidates:
        raise RuntimeError("没找到任何 Kendaraan Bermotor / Lainnya 行对")

    def block_size(entry) -> float:
        total_row = entry[0]
        return max((v for v in (sheet.cell_value(total_row, c) for c in range(sheet.ncols))
                    if isinstance(v, (int, float))), default=0.0)

    _, vehicle_row, other_row = max(candidates, key=block_size)
    return vehicle_row, other_row


def extract(sheet) -> dict[str, dict[str, int]]:
    columns = period_columns(sheet)
    vehicle_row, other_row = find_consumer_rows(sheet)
    series: dict[str, dict[str, int]] = {}
    for col, period in columns.items():
        vehicle = sheet.cell_value(vehicle_row, col)
        other = sheet.cell_value(other_row, col)
        if not (isinstance(vehicle, (int, float)) and isinstance(other, (int, float))):
            continue
        if vehicle <= 0 or other <= 0:
            continue
        series[period] = {"bankVeh": round(float(vehicle)), "bankOth": round(float(other))}
    if not series:
        raise RuntimeError("抽取结果为空")
    return series


def verify(series: dict[str, dict[str, int]]) -> None:
    """对所有者手工核对值做硬校验。不符即拒绝输出。"""
    period = CALIBRATION["period"]
    got = series.get(period)
    if got is None:
        raise RuntimeError(
            f"校准期 {period} 不在抽取结果里（拿到 {min(series)}–{max(series)}）——"
            "期间映射可能又错了，拒绝输出")
    for key in ("bankVeh", "bankOth"):
        if got[key] != CALIBRATION[key]:
            raise RuntimeError(
                f"校准失败 {period}.{key}: 抽到 {got[key]:,}，所有者手工值 {CALIBRATION[key]:,}。"
                "行定位或期间映射有误，拒绝输出错口径的数")


def collect(cache: pathlib.Path | None = None) -> dict:
    import xlrd
    path = cache or pathlib.Path(__file__).parent / "data" / "source" / "_SEKI_I4_latest.xls"
    if not (cache and cache.exists()):
        download(path)
    workbook = xlrd.open_workbook(str(path))
    if SHEET not in workbook.sheet_names():
        raise RuntimeError(f"SEKI I.4 里没有工作表 {SHEET}（现有 {workbook.sheet_names()}）")
    series = extract(workbook.sheet_by_name(SHEET))
    verify(series)
    return {
        "source": "BI SEKI I.4",
        "sourceUrl": SEKI_TABLE_URL,
        "sheet": SHEET,
        "unit": "Rp Miliar",
        "note": ("替代已停更的 SSKI Tabel_17（冻结于 2025.12）。口径与旧源不同："
                 "SEKI 无 Multiguna 项，原多用途并入 Lainnya，历史需整体替换。"
                 "BNPL 不在本源内，来自 OJK 月度公报。"),
        "calibratedAgainst": CALIBRATION,
        "latest": max(series),
        "series": {k: series[k] for k in sorted(series)},
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true", help="输出 JSON")
    parser.add_argument("--cache", type=pathlib.Path, help="用已下载的 xls，不再联网")
    args = parser.parse_args()
    try:
        payload = collect(args.cache)
    except Exception as exc:
        print(f"✗ {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1
    if args.json:
        print(json.dumps(payload, ensure_ascii=False, indent=2))
        return 0
    series = payload["series"]
    print(f"BI SEKI I.4 · {payload['unit']} · 共 {len(series)} 期，最新 {payload['latest']}")
    print(f"校准通过: {CALIBRATION['period']} 车贷 {CALIBRATION['bankVeh']:,} / "
          f"其他 {CALIBRATION['bankOth']:,}")
    for period in sorted(series)[-8:]:
        row = series[period]
        print(f"  {period}  车贷 {row['bankVeh']:>10,}   其他 {row['bankOth']:>12,}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
