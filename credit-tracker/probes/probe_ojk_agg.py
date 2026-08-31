# -*- coding: utf-8 -*-
"""枚举 metricID=71 下可选的行业/表，找出能复现截图值的那一个。只在 runner 上跑。

截图口径 Joint Financing Company > Asset details > Financing Receivables，2026-01：
  051 Electronic Goods           5,078,752,718,571
  052 Other Consumer Goods       8,838,049,105,496
  050 Non-Electronic Household   2,159,738,034,744
用 PP_PiutangPembiayaan 算出来三个数方向不一致（050偏高、051/052偏低），说明查错了切片。
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
EXPECT = {"050": 2_159_738_034_744, "051": 5_078_752_718_571, "052": 8_838_049_105_496}


def get(path, params, timeout=90):
    url = f"{ROOT}/{path}?{urlencode(params)}"
    try:
        with urlopen(Request(url, headers=UA), timeout=timeout) as r:
            return r.status, r.read().decode("utf-8", errors="replace")
    except Exception as exc:
        return None, f"{type(exc).__name__}: {str(exc)[:130]}"


print("### 可选行业 (GetIndustriDataWithIDs)")
st, body = get("GetIndustriDataWithIDs", {"skip": 0, "take": 100, "metricID": 71})
print(f"  HTTP {st}")
print("  " + body[:1500])

print("\n### 可选 posisi/表 (GetListPosisiData)")
for ind in (1, 5, 6, 7, 8, 9):
    st, body = get("GetListPosisiData", {"skip": 0, "take": 50, "metricIDs": 71, "industriId": ind})
    if st == 200 and len(body) > 20:
        print(f"  industriId={ind}: {body[:400]}")

print("\n### 单位选项 (GetListSatuanData)")
st, body = get("GetListSatuanData", {"metricID": 71, "filter": '["Satuan","Rupiah (Satuan penuh)"]'})
print(f"  HTTP {st}  {body[:300]}")
