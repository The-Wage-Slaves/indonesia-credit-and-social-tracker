# -*- coding: utf-8 -*-
"""一次性探明 OJK 三个端点的结构。**只在 runner 上跑**——data.ojk.go.id 从中国网络不可达。

存在意义：OJK 只能在云端调试，每轮 workflow_dispatch 要 3–5 分钟。与其一次猜一个
字段反复来回，不如一次把结构全 dump 出来。探完即可删。
"""
from __future__ import annotations
import json, re, sys
from urllib.request import Request, urlopen

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126.0"}
TARGETS = [
    ("SJKPublic 根",        "https://data.ojk.go.id/SJKPublic"),
    ("Dataset 71 页面",     "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71"),
    ("Dataset 列表 API?",   "https://data.ojk.go.id/SJKPublic/api/Dataset/GetDataset/71"),
    ("Dataset 数据 API?",   "https://data.ojk.go.id/SJKPublic/api/Dataset/GetData/71"),
]


def fetch(url: str, timeout: int = 45):
    try:
        with urlopen(Request(url, headers=UA), timeout=timeout) as r:
            return r.status, r.headers.get("Content-Type", ""), r.read()
    except Exception as exc:
        return None, f"{type(exc).__name__}: {str(exc)[:120]}", b""


def main() -> int:
    for label, url in TARGETS:
        status, ctype, body = fetch(url)
        print(f"\n{'='*70}\n### {label}\n{url}")
        if status is None:
            print(f"  ✗ {ctype}")
            continue
        print(f"  HTTP {status} | {ctype} | {len(body):,} bytes")
        text = body.decode("utf-8", errors="replace")
        if "json" in ctype.lower():
            try:
                data = json.loads(text)
                print("  JSON 顶层:", list(data)[:12] if isinstance(data, dict) else f"list[{len(data)}]")
                print("  样本:", json.dumps(data, ensure_ascii=False)[:600])
            except ValueError:
                print("  声称 JSON 但解析失败:", text[:300])
            continue
        # HTML：找出下载链接、接口路径、以及可能的数据表
        for pat, name in ((r'href="([^"]*\.(?:xlsx?|csv|json))"', "下载链接"),
                          (r'(?:url|action|api)\s*[:=]\s*["\']([^"\']{6,90})["\']', "接口路径"),
                          (r'<title>([^<]{2,80})</title>', "标题")):
            hits = sorted(set(re.findall(pat, text, re.I)))[:8]
            if hits:
                print(f"  {name}:")
                for h in hits:
                    print(f"    {h}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
