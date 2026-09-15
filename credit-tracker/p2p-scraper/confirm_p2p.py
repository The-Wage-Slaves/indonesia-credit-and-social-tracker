# -*- coding: utf-8 -*-
"""把一批 P2P 抓取结果确认进看板的「已确认批次」层。

用法:
  python confirm_p2p.py --batch 2026-09-01 [--batch 2026-09-15] [--dry-run] [--decided-at YYYY-MM-DD]

做什么、不做什么（人在环）:
  - 读 results/scrape_<date>.json，按 scraper.mjs 写 p2p-pending.js 的同一映射生成批次行，
    追加进 dashboard/p2p-confirmed.js 的 batches；看板合并层已把该文件当正式底层。
  - **不改 p2pRaw**，不改 pending.json；本机运行只写文件，确认动作由所有者审 PR 完成。
  - 先打印逐家对照表（本批 vs 上一确认批），再落盘；--dry-run 只打印。

为什么要有这个脚本:
  2026-09-15 发现云端 monthly-credit-data 每月都在抓、bot 分支上攒了三批，但最后确认期停在
  08-25——确认得在看板暗门里逐格核对手工录入，太重，于是没人做。机械部分交给脚本，
  判断（该不该确认、哪一批）留给人。

拒绝落盘的情形（宁可不写，不写错口径）:
  - 该 srcDate 已在 batches 里
  - 有数的平台不足 7/9
  - 累计借款人相对上一确认批下降（累计量不可能减少，几乎必是抓错行）
  - 同一自然年内 YTD 放款相对上一确认批下降
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import pathlib
import re
import subprocess
import sys

HERE = pathlib.Path(__file__).resolve().parent
RESULTS = HERE / "results"
CONFIRMED_JS = HERE.parent / "dashboard" / "p2p-confirmed.js"
MIN_PLAYERS_WITH_DATA = 7
FIELDS = ("disb", "out", "tot", "act")
# 余额相对上一确认批的变动超过这个比例就拒绝，除非 --accept 显式放行。
# 2026-09-15 发现 Shopee 余额本机 0.285 → 云端 0.514 → 云端 0.660 → 本机 0.298，
# 官网 Posisi akhir 原文核对是 0.298：云端两次都错，且 08-25 那次已作为「已确认」进了 main。
# 余额可以真的下降，所以不能像累计量那样一律拒绝；但 +80% 这种跳变必须有人看一眼。
OUTSTANDING_JUMP_LIMIT = 0.40
VOID_NOTE = "该格云端抓取值与前后本机值及官网原文不符，作废（{field} 原值 {old}）"


def batch_rows(scrape: dict) -> list[dict]:
    """与 scraper.mjs 写 p2p-pending.js 的映射完全一致。"""
    rows = []
    for r in scrape.get("players", []):
        p = r.get("parsed") or {}
        empty = not any(v is not None for v in p.values())
        if r.get("note"):
            note = r["note"]
        elif r.get("error"):
            note = f"抓取失败: {str(r['error'])[:60]}"
        else:
            note = "本期未抓到，可手工补录" if empty else None
        rows.append({"name": r["name"], "dataDate": r.get("dataDate") or None, "note": note,
                     "disb": p.get("disbYTD_usd"), "out": p.get("outstanding_usd"),
                     "tot": p.get("totalBorrowers"), "act": p.get("activeBorrowersYTD")})
    return rows


def date_label(src_date: str) -> str:
    """2026-09-01 → 2026.9.1，与看板既有标签风格一致。"""
    y, m, d = src_date.split("-")
    return f"{int(y)}.{int(m)}.{int(d)}"


def load_confirmed(path: pathlib.Path = CONFIRMED_JS) -> dict:
    """p2p-confirmed.js 是 JS 对象字面量（键不带引号），用 Node 求值最稳。"""
    script = ("const src=require('fs').readFileSync(process.argv[1],'utf8');"
              "const window={};eval(src);console.log(JSON.stringify(window.P2P_CONFIRMED));")
    r = subprocess.run(["node", "-e", script, str(path)], capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        raise RuntimeError(f"{path.name} 求值失败: {r.stderr[-300:]}")
    return json.loads(r.stdout)


def js_row(row: dict) -> str:
    """按文件里既有的一行一家风格序列化，diff 才可读。"""
    def v(x):
        return "null" if x is None else json.dumps(x, ensure_ascii=False)
    return ("{name:%s,dataDate:%s,note:%s,disb:%s,out:%s,tot:%s,act:%s}" %
            tuple(v(row[k]) for k in ("name", "dataDate", "note", "disb", "out", "tot", "act")))


def render_batch(batch: dict) -> str:
    rows = ",\n".join("      " + js_row(r) for r in batch["rows"])
    return ("  {\n"
            f"    date: {json.dumps(batch['date'])},\n"
            f"    srcDate: {json.dumps(batch['srcDate'])},\n"
            f"    status: {json.dumps(batch['status'])},\n"
            f"    decidedAt: {json.dumps(batch['decidedAt'])},\n"
            "    rows: [\n" + rows + "\n    ]\n  }")


def render_file(data: dict) -> str:
    batches = ",".join(render_batch(b) for b in data["batches"])
    return ("window.P2P_CONFIRMED = {\n"
            f"  schemaVersion: {data.get('schemaVersion', 1)},\n"
            f"  asOf: {json.dumps(data['asOf'])},\n"
            "  batches: [\n" + batches + "]\n};\n")


def key(name: str) -> str:
    return re.sub(r"[^a-z0-9]", "", name.lower())


def latest_confirmed_row(data: dict, name: str) -> tuple[str, dict] | None:
    for b in sorted(data["batches"], key=lambda x: x["srcDate"], reverse=True):
        for r in b["rows"]:
            if key(r["name"]) == key(name):
                return b["srcDate"], r
    return None


def latest_confirmed_value(data: dict, name: str, field: str) -> tuple[str, float] | None:
    """某平台某字段最近一个**非空**的已确认值。

    不能拿「最近一行」比：被 --void 置空的格子就在最近一行里，拿它当基线等于没有基线——
    2026-09-15 第一次测试时，置空 08-25 的 Shopee 余额后，09-01 的 0.660 就这么溜过去了。
    """
    for b in sorted(data["batches"], key=lambda x: x["srcDate"], reverse=True):
        for r in b["rows"]:
            if key(r["name"]) == key(name) and r.get(field) is not None:
                return b["srcDate"], r[field]
    return None


def void_cell(rows: list[dict], name_key: str, field: str) -> str | None:
    """把一格置空并把原值写进 note。返回原值的字符串表示；没找到返回 None。"""
    for r in rows:
        if name_key in key(r["name"]) and field in FIELDS:
            old = r[field]
            r[field] = None
            tag = VOID_NOTE.format(field=field, old=old)
            r["note"] = f"{r['note']}；{tag}" if r.get("note") else tag
            return str(old)
    return None


def sanity(data: dict, src_date: str, rows: list[dict], accept: set[str] = frozenset()) -> list[str]:
    problems = []
    if any(b["srcDate"] == src_date for b in data["batches"]):
        problems.append(f"{src_date} 已在已确认批次里")
    with_data = sum(1 for r in rows if any(r[f] is not None for f in FIELDS))
    if with_data < MIN_PLAYERS_WITH_DATA:
        problems.append(f"有数的平台只有 {with_data}/{len(rows)}，低于 {MIN_PLAYERS_WITH_DATA}")
    accepted = {key(a) for a in accept}
    for r in rows:
        tot = latest_confirmed_value(data, r["name"], "tot")
        if r["tot"] is not None and tot and r["tot"] < tot[1]:
            problems.append(f"{r['name']} 累计借款人 {tot[1]:,} → {r['tot']:,} 下降（累计量不可能减少）")
        out = latest_confirmed_value(data, r["name"], "out")
        if (r["out"] is not None and out and out[1] and abs(r["out"] / out[1] - 1) > OUTSTANDING_JUMP_LIMIT
                and not any(a and a in key(r["name"]) for a in accepted)):
            problems.append(f"{r['name']} 余额 {out[1]}({out[0]}) → {r['out']} 变动 {(r['out']/out[1]-1)*100:+.0f}%，"
                            f"超过 ±{OUTSTANDING_JUMP_LIMIT:.0%}；核对官网后用 --accept 放行或 --void 置空")
        disb = latest_confirmed_value(data, r["name"], "disb")
        if r["disb"] is not None and disb and disb[0][:4] == src_date[:4] and r["disb"] < disb[1]:
            problems.append(f"{r['name']} 同年 YTD 放款 {disb[1]}({disb[0]}) → {r['disb']} 下降")
    return problems


def table(data: dict, src_date: str, rows: list[dict]) -> str:
    def f(v, kind):
        if v is None:
            return "—"
        return f"{v:.3f}" if kind == "bn" else f"{v/1e6:.2f}M"

    def d(a, b, kind):
        if a is None or b is None:
            return ""
        x = a - b
        return f" ({x:+.3f})" if kind == "bn" else f" ({x/1e6:+.2f}M)"
    out = [f"批次 {src_date} → 标签 {date_label(src_date)}（括号内为相对上一确认批的变化）",
           f"{'平台':<28}{'YTD放款':>18}{'余额':>18}{'累计借款人':>20}{'活跃借款人':>20}"]
    for r in rows:
        p = {fld: (latest_confirmed_value(data, r["name"], fld) or (None, None))[1] for fld in FIELDS}
        out.append(f"{r['name']:<28}"
                   f"{f(r['disb'],'bn')+d(r['disb'],p.get('disb'),'bn'):>18}"
                   f"{f(r['out'],'bn')+d(r['out'],p.get('out'),'bn'):>18}"
                   f"{f(r['tot'],'n')+d(r['tot'],p.get('tot'),'n'):>20}"
                   f"{f(r['act'],'n')+d(r['act'],p.get('act'),'n'):>20}")
    return "\n".join(out)


def prepare_rows(src_date: str, results_dir: pathlib.Path = RESULTS,
                 voids: list[tuple[str, str]] = ()) -> tuple[list[dict], list[str]]:
    """读结果文件、套用 --void；返回 (rows, problems)。"""
    path = results_dir / f"scrape_{src_date}.json"
    if not path.exists():
        return [], [f"找不到 {path.name}"]
    rows = batch_rows(json.loads(path.read_text(encoding="utf-8")))
    for name_key, field in voids:
        if void_cell(rows, name_key, field) is None:
            return rows, [f"--void {name_key}:{field} 没匹配到任何平台/字段"]
    return rows, []


def confirm(data: dict, src_date: str, decided_at: str, results_dir: pathlib.Path = RESULTS,
            voids: list[tuple[str, str]] = (), accept: set[str] = frozenset(),
            rows: list[dict] | None = None) -> list[str]:
    """把一批并入 data（就地）；返回问题清单，非空则 data 未改。"""
    if rows is None:
        rows, problems = prepare_rows(src_date, results_dir, voids)
        if problems:
            return problems
    problems = sanity(data, src_date, rows, accept)
    if problems:
        return problems
    data["batches"].insert(0, {"date": date_label(src_date), "srcDate": src_date,
                               "status": "confirmed", "decidedAt": decided_at, "rows": rows})
    data["asOf"] = max(data.get("asOf", ""), src_date)
    return []


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--batch", action="append", required=True, help="results/scrape_<date>.json 的日期，可多次")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--decided-at", default=dt.date.today().isoformat())
    ap.add_argument("--void", action="append", default=[], metavar="DATE:NAME:FIELD",
                    help="确认前把某格置空并留痕，如 2026-09-01:lentera:out；DATE 也可以是已确认批次")
    ap.add_argument("--accept", action="append", default=[], metavar="NAME",
                    help="核对官网后放行该平台的余额跳变")
    args = ap.parse_args()

    data = load_confirmed()
    voids_by_date: dict[str, list[tuple[str, str]]] = {}
    for item in args.void:
        d_, n_, f_ = item.split(":", 2)
        voids_by_date.setdefault(d_, []).append((n_.lower(), f_))
    # 对已确认批次的置空：直接改 data 里那一批
    for b in data["batches"]:
        for name_key, field in voids_by_date.pop(b["srcDate"], []):
            old = void_cell(b["rows"], name_key, field)
            if old is None:
                print(f"× --void {b['srcDate']}:{name_key}:{field} 没匹配到"); return 2
            print(f"✓ 已确认批 {b['srcDate']} 的 {name_key}.{field} 置空（原值 {old}）")
    for src_date in sorted(args.batch):
        rows, problems = prepare_rows(src_date, voids=voids_by_date.get(src_date, []))
        if not problems:
            print(table(data, src_date, rows))
            problems = confirm(data, src_date, args.decided_at, rows=rows, accept=set(args.accept))
        if problems:
            print("× 拒绝确认：\n  - " + "\n  - ".join(problems))
            return 2
        print(f"✓ {src_date} 通过校验\n")
    if args.dry_run:
        print("（dry-run，未写文件）")
        return 0
    CONFIRMED_JS.write_text(render_file(data), encoding="utf-8")
    print(f"✓ 已写入 {CONFIRMED_JS.name}，现有 {len(data['batches'])} 批，asOf {data['asOf']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
