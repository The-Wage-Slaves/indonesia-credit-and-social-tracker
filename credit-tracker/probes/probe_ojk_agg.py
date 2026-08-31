# -*- coding: utf-8 -*-
"""定位求和对不上的原因。只在 runner 上跑。
截图 2026-01: 050=2,159,738,034,744  051=5,078,752,718,571  052=8,838,049,105,496
"""
from __future__ import annotations
import json
from collections import defaultdict
from urllib.parse import urlencode
from urllib.request import Request, urlopen

URL = "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/GetGridCSVData"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71"}
M = "2026-01"
EXPECT = {"050": 2_159_738_034_744, "051": 5_078_752_718_571, "052": 8_838_049_105_496}
BASE = {"_filter": "Bulan\=\\" + M, "_field": "Bulan", "_data": M,
        "namaTable": "PP_PiutangPembiayaan", "metricID": 71}


def fetch(extra, timeout=150):
    try:
        with urlopen(Request(f"{URL}?{urlencode(dict(BASE, **extra))}", headers=UA), timeout=timeout) as r:
            return json.loads(r.read().decode("utf-8", errors="replace"))
    except Exception as exc:
        return {"_err": f"{type(exc).__name__}: {str(exc)[:130]}"}


def pull_all(extra=None, take=20000, sort=None):
    """翻页取全量。sort 给定时附加确定性排序。"""
    rows, skip = [], 0
    while True:
        p = dict(extra or {}, skip=skip, take=take, requireTotalCount="true")
        if sort:
            p["sort"] = json.dumps(sort)
        payload = fetch(p)
        if "_err" in payload:
            print("   ", payload["_err"]); break
        got = payload.get("data") or []
        rows.extend(got)
        if skip == 0:
            print(f"    totalCount={payload.get('totalCount'):,}")
        if len(got) < take:
            break
        skip += take
        if skip > 400000:
            break
    return rows


def sums(rows, field="Nilai"):
    agg = defaultdict(float)
    for r in rows:
        obj = r.get("ObjekPembiayaan")
        v = r.get(field)
        if obj and isinstance(v, (int, float)):
            agg[obj[:3]] += v
    return agg


def report(title, agg, n):
    print(f"  {title}  (行数 {n:,})")
    for c in ("050", "051", "052"):
        got, want = agg.get(c, 0), EXPECT[c]
        d = (got - want) / want * 100 if want else 0
        print(f"    {c}  {got:>22,.0f}  vs {want:>22,}  {d:+.2f}%  {'✓' if abs(got-want)<1 else '✗'}")


print("### 假设1: 无序分页导致漏读/重读 —— 加确定性排序")
rows = pull_all(sort=[{"selector": "CalendarID", "desc": False},
                      {"selector": "NamaDati", "desc": False},
                      {"selector": "ObjekPembiayaan", "desc": False}])
report("排序后 Nilai", sums(rows), len(rows))

print("\n### 假设2: 该用别的度量字段")
for f in ("NilaiNeto", "Nilai_real", "NilaiNeto_real"):
    report(f, sums(rows, f), len(rows))

print("\n### 假设3: 按 ObjekPembiayaan 过滤，单独取一个代码（结果集小、无需翻页）")
for code, name in (("051", "051. Barang-barang Elektronik"),):
    p = {"_filter": f"Bulan\=\{M}?ObjekPembiayaan\=\{name}",
         "_field": "Bulan,ObjekPembiayaan", "_data": f"{M},{name}"}
    sub = pull_all({**{k: v for k, v in BASE.items() if k not in ("_filter", "_field", "_data")}, **p})
    a = sums(sub)
    print(f"  按代码过滤 {code}: 行数 {len(sub):,}  合计 {a.get(code,0):,.0f}  vs {EXPECT[code]:,}")

print("\n### 去重检查：完全相同的维度组合是否出现多次")
seen = defaultdict(list)
for r in rows:
    k = (r.get("CalendarID"), r.get("NamaDati"), r.get("SektorEkonomi"),
         r.get("ObjekPembiayaan"), r.get("KategoriUsahaDebitur"), r.get("JenisValuta"),
         r.get("SektorPariwisata"))
    seen[k].append(r.get("Nilai"))
dups = {k: v for k, v in seen.items() if len(v) > 1}
print(f"  唯一组合 {len(seen):,}  重复组合 {len(dups):,}")
if dups:
    k, v = next(iter(dups.items()))
    print(f"  样例: {k}\n         值={v[:5]}")
    agg2 = defaultdict(float)
    for kk, vv in seen.items():
        obj = kk[3]
        if obj:
            agg2[obj[:3]] += vv[0]
    report("去重后(每组合取首个) Nilai", agg2, len(seen))
