# -*- coding: utf-8 -*-
"""原始行里是否混着小计行？只在 runner 上跑。
截图 2026-01: 050=2,159,738,034,744  051=5,078,752,718,571  052=8,838,049,105,496
"""
from __future__ import annotations
import json
from collections import defaultdict, Counter
from urllib.parse import urlencode
from urllib.request import Request, urlopen

URL = "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/GetGridCSVData"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71"}
M = "2026-01"
EXPECT = {"050": 2_159_738_034_744, "051": 5_078_752_718_571, "052": 8_838_049_105_496}
DIMS = ("NamaDati", "SektorEkonomi", "KategoriUsahaDebitur", "JenisValuta",
        "JenisUsaha", "SektorPariwisata")

rows, skip = [], 0
while True:
    q = {"_filter": "Bulan\=\\" + M, "_field": "Bulan", "_data": M,
         "namaTable": "PP_PiutangPembiayaan", "metricID": 71,
         "skip": skip, "take": 20000, "requireTotalCount": "true"}
    try:
        with urlopen(Request(f"{URL}?{urlencode(q)}", headers=UA), timeout=150) as r:
            payload = json.loads(r.read().decode("utf-8", errors="replace"))
    except Exception as exc:
        print("  取数失败:", type(exc).__name__, str(exc)[:120]); break
    got = payload.get("data") or []
    if skip == 0:
        print(f"totalCount={payload.get('totalCount'):,}")
    rows.extend(got)
    if len(got) < 20000:
        break
    skip += 20000
print(f"实收 {len(rows):,} 行\n")

print("各维度为空的行数：")
for d in DIMS:
    n = sum(1 for r in rows if not r.get(d))
    print(f"  {d:22} 空 {n:>8,} / {len(rows):,}")

def agg(pred, field="Nilai"):
    out = defaultdict(float)
    for r in rows:
        o = r.get("ObjekPembiayaan")
        v = r.get(field)
        if o and isinstance(v, (int, float)) and pred(r):
            out[o[:3]] += v
    return out

def show(title, a):
    print(f"\n{title}")
    for c in ("050", "051", "052"):
        g, w = a.get(c, 0), EXPECT[c]
        print(f"  {c}  {g:>22,.0f}  vs {w:>22,}  {(g-w)/w*100:+.2f}%  {'✓' if abs(g-w)<1 else '✗'}")

show("① 全部有 ObjekPembiayaan 的行", agg(lambda r: True))
show("② 仅「叶子行」(六个维度全非空)", agg(lambda r: all(r.get(d) for d in DIMS)))
for d in DIMS:
    show(f"③ 剔除 {d} 为空的行", agg(lambda r, d=d: bool(r.get(d))))
