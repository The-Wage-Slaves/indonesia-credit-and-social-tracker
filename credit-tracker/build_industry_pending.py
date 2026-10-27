# -*- coding: utf-8 -*-
"""把当月的 SEKI（银行侧）与 OJK RDKB（LPBBTI / BNPL）采集结果拼成一份待确认包。

云端每月运行；产物落 bot/monthly-credit-data，并在首页挂一张待确认卡。
**不写 rawData**——确认动作是所有者在本机跑
  python credit-tracker/apply_industry_pending.py --pending credit-tracker/data/industry-pending-auto.json --write
再开 PR。人在环不变，只是把「抄数」这一步机器化了。

只装比看板 rawData 末期更新的期次：已经在看板里的不重复给，免得卡片每月都长一样。
两个源缺一个也照样出包（另一个标 null），但会在卡片里点名哪个没来。
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
DASHBOARD = HERE / "dashboard" / "credit-dashboard.html"
SEKI_JSON = HERE / "data" / "seki-bank-credit.json"
RDKB_JSON = HERE / "data" / "ojk-rdkb-latest.json"
OUT = HERE / "data" / "industry-pending-auto.json"
PENDING_JSON = ROOT / "pending.json"
PENDING_JS = ROOT / "pending.js"
SOURCE = "industry-auto"


def dashboard_last_period(text: str) -> str:
    return max(re.findall(r'\{ period: "(\d{4}\.\d{2})"', text))


def load(path: pathlib.Path) -> dict | None:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return None


def build(seki: dict | None, rdkb: dict | None, last_period: str, today: str) -> dict:
    rows: dict[str, dict] = {}
    if seki:
        for p, v in (seki.get("series") or {}).items():
            if p > last_period:
                rows.setdefault(p, {}).update({"bankVeh": v["bankVeh"], "bankOth": v["bankOth"], "bankMP": None})
    if rdkb and rdkb.get("dataMonth") and rdkb["dataMonth"] > last_period:
        p = rdkb["dataMonth"]
        rows.setdefault(p, {}).update({
            "p2p": rdkb["p2p"], "bankBNPL": rdkb["bankBNPL"], "mfBNPL": rdkb["mfBNPL"],
            "_lpbbtiTWP90": rdkb.get("lpbbtiTWP90"), "_mfBnplNPF": rdkb.get("mfBnplNPF"),
            "_ojkSource": rdkb.get("sourceUrl"),
        })
    return {
        "schemaVersion": 1, "preparedAt": today, "status": "pending-owner-review",
        "generatedBy": "credit-tracker/build_industry_pending.py（云端月度）",
        "dashboardLastPeriod": last_period,
        "unit": "Rp Miliar（RDKB 原文 Rp triliun ×1000）",
        "sources": {
            "seki": None if not seki else {k: seki.get(k) for k in ("source", "sourceUrl", "latest", "calibratedAgainst")},
            "rdkb": None if not rdkb else {k: rdkb.get(k) for k in ("source", "sourceUrl", "dataMonth")},
        },
        "fieldProvenance": {
            "bankVeh": "BI SEKI I.4 · Kendaraan Bermotor（合计块）；与 SSKI 逐位一致",
            "bankOth": "BI SEKI I.4 · Lainnya（吸收多用途）；看板自 2023.01 起已为此口径",
            "bankMP": "SEKI 无此项，null",
            "p2p": "OJK RDKB · Pindar outstanding pembiayaan = LPBBTI 行业余额",
            "bankBNPL": "OJK RDKB · baki debet kredit BNPL (SLIK)，原文多精确到 0.1 万亿",
            "mfBNPL": "OJK RDKB · pembiayaan BNPL oleh Perusahaan Pembiayaan (SLIK)",
            "mf2W/mf4W/mfMP": "RDKB 不拆，留 null 待补（OJK SLP Excel 冻结于 2025.12）",
        },
        "rows": dict(sorted(rows.items())),
    }


def upsert_card(doc: dict, missing: list[str], today: str,
                pending_json: pathlib.Path = PENDING_JSON, pending_js: pathlib.Path = PENDING_JS) -> None:
    data = load(pending_json) or {"boards": {}}
    boards = data.setdefault("boards", {})
    credit = [it for it in boards.get("credit", []) if it.get("source") != SOURCE]
    periods = list(doc["rows"])
    if periods:
        title = f"行业数据自动采集待确认：{periods[0]}–{periods[-1]}（SEKI 银行侧 + OJK RDKB）" if len(periods) > 1 \
            else f"行业数据自动采集待确认：{periods[0]}（SEKI 银行侧 + OJK RDKB）"
        detail = (f"看板 rawData 末期 {doc['dashboardLastPeriod']}，本包含其后 {len(periods)} 期。"
                  + (f" 本月缺源：{'、'.join(missing)}。" if missing else "")
                  + " 逐字段口径见包内 fieldProvenance。")
        action = "本机运行 python credit-tracker/apply_industry_pending.py --pending credit-tracker/data/industry-pending-auto.json --dry-run 审对照表，再 --write 并开 PR"
        credit.append({"id": f"{SOURCE}:{today}", "source": SOURCE, "level": "review", "title": title,
                       "detail": detail, "action": action, "link": "credit-tracker/data/industry-pending-auto.json",
                       "date": today})
    boards["credit"] = credit
    data["updated"] = dt.datetime.now().strftime("%Y-%m-%d %H:%M")
    ser = json.dumps(data, ensure_ascii=False, indent=2)
    pending_json.write_text(ser + "\n", encoding="utf-8")
    pending_js.write_text("const PENDING = " + ser + ";\n", encoding="utf-8")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--seki", type=pathlib.Path, default=SEKI_JSON)
    ap.add_argument("--rdkb", type=pathlib.Path, default=RDKB_JSON)
    ap.add_argument("--out", type=pathlib.Path, default=OUT)
    ap.add_argument("--today", default=dt.date.today().isoformat())
    args = ap.parse_args()

    seki, rdkb = load(args.seki), load(args.rdkb)
    missing = [n for n, d in (("SEKI", seki), ("RDKB", rdkb)) if not d]
    last = dashboard_last_period(DASHBOARD.read_text(encoding="utf-8"))
    doc = build(seki, rdkb, last, args.today)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(doc, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    upsert_card(doc, missing, args.today)
    print(f"✓ {args.out.name}：看板末期 {last}，新期 {list(doc['rows']) or '无'}"
          + (f"；缺源 {missing}" if missing else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
