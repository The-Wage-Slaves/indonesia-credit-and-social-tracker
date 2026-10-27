# -*- coding: utf-8 -*-
"""OJK RDKB 月度新闻稿采集器：LPBBTI(Pindar) 余额 / 银行 BNPL / 多元金融 BNPL。

为什么用新闻稿而不是统计表（2026-09-22）
------------------------------------------
OJK 的 LPBBTI / SLP 统计 Excel 冻结在 2025.12；新门户 data.ojk.go.id 屏蔽境外 IP，
云端 runner 抓不到。而每月 RDKB（Rapat Dewan Komisioner Bulanan）新闻稿在 ojk.go.id
主站上，runner 可读，且三项数字都在正文里、口径与看板序列一致（已用同比反推核过）。

数据月 = 新闻稿标题月份的前一个月（RDKB Agustus 2026 报的是 Juli 2026 数据），
但**不靠标题推**，直接从句子里的「pada Juli 2026」读，读不到就拒绝输出。

单位：原文 Rp triliun → 输出 Rp Miliar（×1000），与 rawData 一致。
银行 BNPL 原文多数只精确到 0.1 万亿（±50 Miliar），照原样记，不补精度。

用法:
  python ojk_rdkb.py --json                     # 自动找最新一份
  python ojk_rdkb.py --json --page <url|file>   # 指定页面或本地文件（测试用）
"""
from __future__ import annotations

import argparse
import html
import json
import pathlib
import re
import sys

LISTING = "https://ojk.go.id/id/berita-dan-kegiatan/siaran-pers/default.aspx"
BASE = "https://ojk.go.id"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
MONTHS = {"januari": 1, "jan": 1, "februari": 2, "feb": 2, "maret": 3, "mar": 3, "april": 4, "apr": 4,
          "mei": 5, "juni": 6, "jun": 6, "juli": 7, "jul": 7, "agustus": 8, "agu": 8, "ags": 8,
          "september": 9, "sep": 9, "oktober": 10, "okt": 10, "november": 11, "nov": 11,
          "desember": 12, "des": 12}


def fetch(url: str) -> str:
    import requests
    r = requests.get(url, headers={"User-Agent": UA, "Referer": BASE + "/"}, timeout=90)
    r.raise_for_status()
    return r.text


def strip(page: str) -> str:
    text = re.sub(r"<[^>]+>", " ", page)
    text = html.unescape(text).replace("\xa0", " ")
    return re.sub(r"\s+", " ", text)


def idr_number(s: str) -> float:
    """印尼写法：千位用「.」、小数用「,」。105,63 → 105.63；1.234,5 → 1234.5"""
    return float(s.replace(".", "").replace(",", "."))


def month_key(name: str, year: str) -> str | None:
    m = MONTHS.get(name.strip().lower())
    return f"{year}.{m:02d}" if m else None


def latest_rdkb_url(listing_html: str) -> str | None:
    """从新闻稿列表里挑年月最大的 RDKB 页面。"""
    best = None
    for m in re.finditer(r'href="([^"]*RDKB-([A-Za-z]+)-(\d{4})\.aspx)"', listing_html):
        key = month_key(m.group(2), m.group(3))
        if key and (best is None or key > best[0]):
            best = (key, m.group(1))
    if not best:
        return None
    href = best[1]
    return href if href.startswith("http") else BASE + href


def parse(page: str) -> dict:
    """三项都必须解析成功且数据月一致，否则抛错——宁可不出数。"""
    t = strip(page)
    out: dict = {}

    m = re.search(r"outstanding pembiayaan pada ([A-Za-z]+) (\d{4}) tumbuh ([\d,\.]+) persen yoy.*?"
                  r"nominal sebesar Rp\s?([\d,\.]+) triliun", t)
    if not m:
        raise ValueError("Pindar 句子没解析到")
    out["dataMonth"] = month_key(m.group(1), m.group(2))
    out["p2p"] = round(idr_number(m.group(4)) * 1000)
    out["p2pYoY"] = idr_number(m.group(3))
    twp = re.search(r"TWP90\)? (?:tercatat |dalam kondisi terjaga )?di posisi ([\d,\.]+) persen", t)
    out["lpbbtiTWP90"] = idr_number(twp.group(1)) if twp else None

    m = re.search(r"Per ([A-Za-z]+) (\d{4}), baki debe?t kredit BNPL.*?(?:sebesar|menjadi) Rp\s?([\d,\.]+) triliun", t)
    if not m:
        raise ValueError("银行 BNPL 句子没解析到")
    if month_key(m.group(1), m.group(2)) != out["dataMonth"]:
        raise ValueError(f"银行 BNPL 数据月 {m.group(1)} {m.group(2)} 与 Pindar 不一致")
    out["bankBNPL"] = round(idr_number(m.group(3)) * 1000)
    yoy = re.search(r"baki debe?t kredit BNPL.*?tumbuh(?: tinggi)?(?: sebesar)? ([\d,\.]+) persen yoy", t)
    out["bankBNPLYoY"] = idr_number(yoy.group(1)) if yoy else None

    m = re.search(r"BNPL\) oleh [Pp]erusahaan [Pp]embiayaan tumbuh ([\d,\.]+) persen yoy.*?"
                  r"menjadi Rp\s?([\d,\.]+) triliun dengan NPF gross (?:turun ke |naik ke |sebesar )?([\d,\.]+) persen", t)
    if not m:
        raise ValueError("多元金融 BNPL 句子没解析到")
    out["mfBNPL"] = round(idr_number(m.group(2)) * 1000)
    out["mfBNPLYoY"] = idr_number(m.group(1))
    out["mfBnplNPF"] = idr_number(m.group(3))
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--page", help="RDKB 页面 URL 或本地 HTML 文件；缺省自动找最新")
    args = ap.parse_args()
    if args.page and pathlib.Path(args.page).exists():
        page, url = pathlib.Path(args.page).read_text(encoding="utf-8"), args.page
    else:
        url = args.page or latest_rdkb_url(fetch(LISTING))
        if not url:
            print("× 新闻稿列表里没找到 RDKB 页面", file=sys.stderr)
            return 2
        page = fetch(url)
    data = parse(page)
    data.update({"source": "OJK RDKB 月度新闻稿", "sourceUrl": url, "unit": "Rp Miliar（原文 Rp triliun ×1000）"})
    if args.json:
        print(json.dumps(data, ensure_ascii=False, indent=2))
    else:
        print(f"{data['dataMonth']}  LPBBTI {data['p2p']:,}  银行BNPL {data['bankBNPL']:,}  MF BNPL {data['mfBNPL']:,}  ({url})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
