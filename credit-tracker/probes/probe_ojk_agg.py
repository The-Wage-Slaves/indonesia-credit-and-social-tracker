# -*- coding: utf-8 -*-
"""探明 OJK dataset 71 能否让服务端聚合。只在 runner 上跑。

单月 239,290 行，逐行拉取 2024 起 30 个月需约 1440 次请求——不可接受。
页面上的表格是 DevExtreme 透视网格，聚合发生在服务端，所以一定存在聚合入口。
本探针逐个试，并用截图上的已知值校验：
  2026-01  051 Electronic Goods            5,078,752,718,571
  2026-01  052 Other Consumer Goods        8,838,049,105,496
  2026-01  050 Non-Electronic Household    2,159,738,034,744
"""
from __future__ import annotations
import json
from collections import defaultdict
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = "https://data.ojk.go.id/SJKPublic/Dataset/Dataset"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71"}
MONTH = "2026-01"
EXPECT = {"051": 5_078_752_718_571, "052": 8_838_049_105_496, "050": 2_159_738_034_744}


def call(path: str, params: dict, timeout: int = 120):
    url = f"{ROOT}/{path}?{urlencode(params)}"
    try:
        with urlopen(Request(url, headers=UA), timeout=timeout) as r:
            body = r.read().decode("utf-8", errors="replace")
        return r.status, body, url
    except Exception as exc:
        return None, f"{type(exc).__name__}: {str(exc)[:150]}", url


base = {"_filter": f"Bulan\=\{MONTH}", "_field": "Bulan", "_data": MONTH,
        "namaTable": "PP_PiutangPembiayaan", "metricID": 71}

print("### 试探 1: group 参数（DevExtreme 语法）")
p = dict(base, skip=0, take=200, requireTotalCount="true",
         group=json.dumps([{"selector": "ObjekPembiayaan", "isExpanded": False}]),
         groupSummary=json.dumps([{"selector": "Nilai", "summaryType": "sum"}]))
status, body, url = call("GetGridCSVData", p)
print(f"  HTTP {status} len={len(body)}")
print(f"  {body[:500]}")

print("\n### 试探 2: totalSummary")
p = dict(base, skip=0, take=1, requireTotalCount="true",
         totalSummary=json.dumps([{"selector": "Nilai", "summaryType": "sum"}]))
status, body, url = call("GetGridCSVData", p)
print(f"  HTTP {status} len={len(body)}")
print(f"  {body[:300]}")

print("\n### 试探 3: 全量分页聚合单月（量一下真实成本）")
total = defaultdict(float)
pages, skip, take = 0, 0, 20000
while True:
    status, body, _ = call("GetGridCSVData", dict(base, skip=skip, take=take,
                                                  requireTotalCount="true" if skip == 0 else "false"))
    if status != 200:
        print(f"  第{pages+1}页失败: {body[:120]}"); break
    try:
        payload = json.loads(body)
    except ValueError:
        print(f"  第{pages+1}页非JSON: {body[:120]}"); break
    rows = payload.get("data") or []
    if skip == 0:
        print(f"  totalCount={payload.get('totalCount'):,}  单页 take={take} 实收 {len(rows):,}")
    for r in rows:
        obj = r.get("ObjekPembiayaan")
        if obj and isinstance(r.get("Nilai"), (int, float)):
            total[obj[:3]] += r["Nilai"]
    pages += 1
    if len(rows) < take or pages >= 15:
        break
    skip += take
print(f"  翻了 {pages} 页")
print(f"  {'代码':6}{'合计':>26}  {'截图值':>26}  校验")
for code in ("050", "051", "052"):
    got = total.get(code, 0)
    want = EXPECT[code]
    ok = "✓" if abs(got - want) < 1 else "✗"
    print(f"  {code:6}{got:>26,.0f}  {want:>26,}  {ok}")
print("\n  050-057 合计(Multipurpose):",
      f"{sum(v for k, v in total.items() if '050' <= k <= '057'):,.0f}")
print("  034 (车辆):", f"{total.get('034', 0):,.0f}")
