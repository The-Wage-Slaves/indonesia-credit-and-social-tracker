# -*- coding: utf-8 -*-
"""确认 OJK Dataset 71 的维度取值与数据量级，决定聚合可行性。只在 runner 上跑。"""
from __future__ import annotations
import json
from collections import defaultdict
from urllib.parse import urlencode
from urllib.request import Request, urlopen

BASE = "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/GetGridCSVData"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71"}


def fetch(months: list[str], skip: int = 0, take: int = 5000, table="PP_PiutangPembiayaan", metric=71):
    q = {"skip": skip, "take": take, "requireTotalCount": "true",
         "_filter": "?".join(f"Bulan\=\{m}" for m in months),
         "_field": ",".join("Bulan" for _ in months),
         "_data": ",".join(months),
         "namaTable": table, "metricID": metric}
    with urlopen(Request(f"{BASE}?{urlencode(q)}", headers=UA), timeout=120) as r:
        return json.loads(r.read().decode("utf-8", errors="replace"))


month = "2026-05"
print(f"### 单月 {month} 量级探测")
try:
    head = fetch([month], take=1)
    total = head.get("totalCount")
    print(f"  totalCount = {total:,}")
except Exception as exc:
    print("  ✗", type(exc).__name__, str(exc)[:160]); raise SystemExit(0)

page = fetch([month], take=5000)
rows = page.get("data") or []
print(f"  取回 {len(rows):,} 行")
print("  字段:", ", ".join(rows[0]) if rows else "-")

for field in ("ObjekPembiayaan", "JenisUsaha", "KategoriUsahaDebitur", "SektorPariwisata"):
    vals = sorted({r.get(field) for r in rows if r.get(field)})
    print(f"\n  --- {field} ({len(vals)} 种) ---")
    for v in vals[:45]:
        print(f"      {v}")

agg = defaultdict(float)
for r in rows:
    if isinstance(r.get("Nilai"), (int, float)):
        agg[r.get("ObjekPembiayaan") or "(空)"] += r["Nilai"]
print(f"\n  --- 按 ObjekPembiayaan 合计（仅前 {len(rows)} 行样本，单位 Rupiah 满额）---")
for k, v in sorted(agg.items(), key=lambda x: -x[1])[:15]:
    print(f"      {v/1e12:12,.1f} 万亿   {k}")
