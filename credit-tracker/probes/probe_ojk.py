# -*- coding: utf-8 -*-
"""探明 OJK Dataset 的下载机制。**只在 runner 上跑**——从中国网络不可达。"""
from __future__ import annotations
import json, re
from urllib.request import Request, urlopen

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126.0",
      "Accept-Language": "id-ID,id;q=0.9,en;q=0.8"}
PAGES = {
    "Dataset 71 (lembaga pembiayaan)": "https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71",
    "Dataset 列表页": "https://data.ojk.go.id/SJKPublic/Dataset/Dataset",
}


def get(url):
    try:
        with urlopen(Request(url, headers=UA), timeout=45) as r:
            return r.status, r.read().decode("utf-8", errors="replace")
    except Exception as exc:
        return None, f"{type(exc).__name__}: {str(exc)[:140]}"


def show(title, items, limit=25):
    items = [i for i in dict.fromkeys(items) if i]
    if not items:
        return
    print(f"  --- {title} ({len(items)}) ---")
    for i in items[:limit]:
        print(f"    {i[:190]}")


for label, url in PAGES.items():
    status, text = get(url)
    print(f"\n{'='*74}\n### {label}\n{url}")
    if status is None:
        print("  ✗", text); continue
    print(f"  HTTP {status} | {len(text):,} chars")

    show("含 Download/Export/File/Unduh 的 URL",
         re.findall(r'["\'](/[^"\']*(?:[Dd]ownload|[Ee]xport|[Ff]ile|[Uu]nduh)[^"\']*)["\']', text))
    show("form action + method",
         [f"{m.group(2)}  method={m.group(1) or '?'}"
          for m in re.finditer(r'<form[^>]*?(?:method="(\w+)")?[^>]*?action="([^"]+)"', text, re.I)])
    show("hidden input（POST 需要的参数）",
         re.findall(r'<input[^>]+type="hidden"[^>]+name="([^"]+)"[^>]*value="([^"]{0,40})"', text)
         and [f"{n} = {v}" for n, v in
              re.findall(r'<input[^>]+type="hidden"[^>]+name="([^"]+)"[^>]*value="([^"]{0,40})"', text)])
    show("data-* 属性里的 id/url",
         [f"{k}={v}" for k, v in re.findall(r'(data-[\w-]*(?:id|url|file|periode|tahun)[\w-]*)="([^"]{1,60})"', text, re.I)])
    show("页面内的 JS 变量（可能含接口）",
         re.findall(r'(?:var|let|const)\s+(\w+)\s*=\s*(["\'][^"\']{4,80}["\']|\{[^}]{0,80}\})', text)
         and [f"{n} = {v}" for n, v in
              re.findall(r'(?:var|let|const)\s+(\w+)\s*=\s*(["\'][^"\']{4,80}["\']|\{[^}]{0,80}\})', text)])
    show("表格/期间选项", re.findall(r'<option[^>]*value="([^"]{1,30})"[^>]*>([^<]{1,40})</option>', text)
         and [f"{v} → {t.strip()}" for v, t in
              re.findall(r'<option[^>]*value="([^"]{1,30})"[^>]*>([^<]{1,40})</option>', text)][:30])
