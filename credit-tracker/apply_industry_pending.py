# -*- coding: utf-8 -*-
"""把 industry-pending-2026.json 里的行写进看板 rawData —— 只在所有者审过对照表后手动运行。

用法:
  python apply_industry_pending.py --dry-run                # 只打印逐期对照表，不写
  python apply_industry_pending.py --from 2024.01 --write   # 从该期起替换银行侧口径并追加新期

做什么:
  - 银行侧 (bankVeh / bankOth / bankMP)：从 --from 起，用 SEKI 值**整体替换**已有行；bankMP 置 null。
    --from 之前的行原样保留（SSKI 口径）。不新增 --from 之前不存在的期次。
  - OJK 侧 (p2p / bankBNPL / mfBNPL)：pending 里有值就写；已有行不覆盖非空值（同源接续，不该冲突）。
  - 2026 各月：追加新行，mf2W/mf4W/mfMP 留 null（待补）。
  - 只改 rawData 那一段；文件其余字节不动。写完自校验：重新解析，期次单调、无重复。

为什么要有 --from:
  SEKI 的「其他」(Lainnya) 比 SSKI 的 多用途+其他 大约 40%，两者不能接续，只能从一个起点整体换。
  所有者定的起点是 2024（"从2024年统一替换不要有差异化口径产生跳变"）；年表里 2023 也有，
  想把缝推到 2022→2023 就 --from 2023.01。**起点之前 bankOth/bankMP 仍是 SSKI 口径**，缝在起点处。
"""
from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).resolve().parent
PENDING = HERE / "data" / "industry-pending-2026.json"
DASHBOARD = HERE / "dashboard" / "credit-dashboard.html"
FIELDS = ["bankVeh", "bankMP", "bankBNPL", "bankOth", "mf2W", "mf4W", "mfMP", "mfBNPL", "p2p"]
BANK = ("bankVeh", "bankOth", "bankMP")
OJK = ("p2p", "bankBNPL", "mfBNPL")
ROW_RE = re.compile(r'  \{ period: "(\d{4}\.\d{2})",([^}]*)\},?\n')


def parse_rows(text: str) -> tuple[int, int, list[dict]]:
    start = text.index("const rawData = [\n") + len("const rawData = [\n")
    end = text.index("];", start)
    rows = []
    for m in ROW_RE.finditer(text[start:end]):
        row = {"period": m.group(1)}
        for k, v in re.findall(r"(\w+): (null|[0-9.]+|true|false)", m.group(2)):
            row[k] = None if v == "null" else (v == "true" if v in ("true", "false") else float(v))
        rows.append(row)
    return start, end, rows


def fmt(v) -> str:
    if v is None:
        return "null"
    if isinstance(v, bool):
        return "true" if v else "false"
    return str(int(v)) if float(v).is_integer() else str(v)


def render(rows: list[dict]) -> str:
    out = []
    for r in rows:
        parts = [f"{k}: {fmt(r.get(k))}" for k in FIELDS]
        if r.get("isNew"):
            parts.append("isNew: true")
        out.append(f'  {{ period: "{r["period"]}", {", ".join(parts)} }}')
    return ",\n".join(out) + ",\n"   # 原文件末行带尾逗号，保持字节一致


def merge(rows: list[dict], pending: dict, since: str) -> tuple[list[dict], list[str]]:
    by = {r["period"]: dict(r) for r in rows}
    last_existing = max(by) if by else ""
    log = []
    for p, src in sorted(pending["rows"].items()):
        existing = p in by
        # 只在已有行上替换银行侧；新增行只追加在现有序列末尾之后。
        # 否则 2024 会从季度变成月度，MF/LPBBTI 那几列凭空多出 8 个空洞。
        if not existing and p <= last_existing:
            continue
        row = by.setdefault(p, {"period": p, **{k: None for k in FIELDS}})
        if p >= since and any(k in src for k in BANK):
            for k in BANK:
                old = row.get(k); new = src.get(k)
                if old != new:
                    log.append(f"{p} {k}: {fmt(old)} → {fmt(new)}")
                row[k] = new
        for k in OJK:
            if k in src and src[k] is not None:
                if row.get(k) not in (None, src[k]):
                    log.append(f"!! {p} {k}: 已有 {fmt(row[k])} 与 pending {fmt(src[k])} 冲突，保留已有值")
                    continue
                if row.get(k) is None:
                    log.append(f"{p} {k}: null → {fmt(src[k])}")
                row[k] = src[k]
        if not existing:
            row["isNew"] = True
            log.append(f"{p} 新增行")
    merged = [by[p] for p in sorted(by)]
    return merged, log


def sanity(rows: list[dict], since: str) -> tuple[list[str], list[str]]:
    """返回 (问题, 预期内的口径缝说明)。缝只允许出现在 --from 处的银行「其他」上。"""
    problems, seams = [], []
    periods = [r["period"] for r in rows]
    if periods != sorted(periods) or len(set(periods)) != len(periods):
        problems.append("期次非单调或有重复")
    for a, b in zip(rows, rows[1:]):
        for k in ("bankVeh", "bankOth", "p2p", "bankBNPL", "mfBNPL"):
            x, y = a.get(k), b.get(k)
            if not (x and y) or abs(y / x - 1) <= 0.35:
                continue
            at_seam = a["period"] < since <= b["period"] and k == "bankOth"
            if at_seam:
                # SSKI 的「其他」只是 家庭其他；SEKI 的 Lainnya 吸收了多用途。用 SSKI 两项之和比才公平。
                mp = a.get("bankMP") or 0
                seams.append(f"{a['period']}→{b['period']} bankOth {fmt(x)}→{fmt(y)}（{(y/x-1)*100:+.0f}%）；"
                             f"按 SSKI 多用途+其他 {fmt(x+mp)} 比为 {(y/(x+mp)-1)*100:+.0f}%——这是 --from 处的预期口径缝")
            else:
                problems.append(f"{a['period']}→{b['period']} {k} 跳变 {(y/x-1)*100:+.0f}%")
    return problems, seams


def table(before: list[dict], after: list[dict], since: str) -> str:
    b = {r["period"]: r for r in before}
    lines = [f"{'期':<9}{'车贷 旧→新':>22}{'其他 旧→新':>26}{'多用途':>12}{'LPBBTI':>10}{'银行BNPL':>10}{'MF BNPL':>9}"]
    for r in after:
        if r["period"] < since:
            continue
        o = b.get(r["period"], {})
        f = lambda k: fmt(o.get(k)) + "→" + fmt(r.get(k)) if o.get(k) != r.get(k) else fmt(r.get(k))
        lines.append(f"{r['period']:<9}{f('bankVeh'):>22}{f('bankOth'):>26}{f('bankMP'):>12}"
                     f"{f('p2p'):>10}{f('bankBNPL'):>10}{f('mfBNPL'):>9}")
    return "\n".join(lines)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--from", dest="since", default="2024.01", help="银行侧整体替换的起点期（含）")
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    if args.write == args.dry_run:
        sys.exit("二选一：--dry-run 或 --write")

    pending = json.loads(PENDING.read_text(encoding="utf-8"))
    text = DASHBOARD.read_text(encoding="utf-8")
    start, end, rows = parse_rows(text)
    merged, log = merge(rows, pending, args.since)
    print(table(rows, merged, args.since))
    print(f"\n变更 {len(log)} 处；冲突 {sum(1 for l in log if l.startswith('!!'))} 处")
    for l in log:
        if l.startswith("!!"):
            print("  " + l)
    problems, seams = sanity(merged, args.since)
    for sm in seams:
        print("⚠ " + sm)
    if problems:
        print("× 自校验未通过：\n  - " + "\n  - ".join(problems))
        return 2
    if args.dry_run:
        print("（dry-run，未写文件）")
        return 0
    new_text = text[:start] + render(merged) + text[end:]
    _, _, check = parse_rows(new_text)
    if [r["period"] for r in check] != [r["period"] for r in merged]:
        sys.exit("× 写后重解析与合并结果不一致，拒绝落盘")
    DASHBOARD.write_text(new_text, encoding="utf-8")
    print(f"✓ 已写入 rawData：{len(merged)} 行，末期 {merged[-1]['period']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
