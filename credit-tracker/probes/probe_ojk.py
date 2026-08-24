# -*- coding: utf-8 -*-
"""探明 OJK GetGridCSVData 的参数与维度取值。只在 runner 上跑。"""
from __future__ import annotations
import json
from collections import Counter
from urllib.parse import urlencode
from urllib.request import Request, urlopen

BASE = "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/GetGridCSVData"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71"}


def call(metric: int, take: int = 2000, extra: dict | None = None):
    q = {"skip": 0, "take": take, "requireTotalCount": "true", "metricID": metric}
    q.update(extra or {})
    url = f"{BASE}?{urlencode(q)}"
    try:
        with urlopen(Request(url, headers=UA), timeout=90) as r:
            return json.loads(r.read().decode("utf-8", errors="replace")), None
    except Exception as exc:
        return None, f"{type(exc).__name__}: {str(exc)[:160]}"


for metric in (71,):
    print(f"\n{'='*74}\n### metricID={metric}")
    payload, err = call(metric)
    if err:
        print("  ✗", err); continue
    rows = payload.get("data") or []
    print(f"  totalCount={payload.get('totalCount')}  本次返回 {len(rows)} 行")
    if not rows:
        print("  (空)"); continue
    print("  字段:", list(rows[0]))
    print("  首行:", json.dumps(rows[0], ensure_ascii=False)[:400])
    # 各分类维度的取值分布——用来找「车辆/多用途」在哪个字段
    for field in rows[0]:
        vals = [r.get(field) for r in rows]
        uniq = [v for v in dict.fromkeys(vals) if v not in (None, "")]
        if 0 < len(uniq) <= 40 and isinstance(uniq[0], str):
            print(f"  --- {field} ({len(uniq)} 种) ---")
            for v in uniq[:40]:
                print(f"      {v}")
    bulan = sorted({r.get("Bulan") for r in rows if r.get("Bulan")})
    if bulan:
        print(f"  Bulan 范围: {bulan[0]} → {bulan[-1]}  (共 {len(bulan)} 期)")
        print("  最近 8 期:", bulan[-8:])
    print("  Nilai 量级样本:", Counter(len(str(int(r["Nilai"]))) for r in rows if isinstance(r.get("Nilai"), (int, float))).most_common(5))
