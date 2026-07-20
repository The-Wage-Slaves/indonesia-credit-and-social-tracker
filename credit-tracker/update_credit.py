# -*- coding: utf-8 -*-
"""
信贷看板 · 月度自动取数器 (2026-07-16)
=======================================
三个模块，全部只做"抓取→对比→报告待确认"，不直接改看板（人在环）：

  1. BI 银行侧   — 下载 Tabel_17.xls(固定URL)，按标签定位行(车贷/多用途/其他)，
                   与看板 rawData 最新月份对比，发现新月份→进待确认。
                   注: SSKI Table17 发布有约4个月时滞(2026年4月版仍止于2025.12)，属正常。
  2. OJK 监控    — 旧统计页(SLP/LPBBTI)扫最新月份 + 探测新门户 data.ojk.go.id/SJKPublic
                   是否可达(该域名屏蔽非印尼区IP的概率高，本地跑更可能通)。
  3. Shopee Loan — lenteradana.co.id/statistic 服务端渲染，直接抓四个运营指标。

结果写入 ../pending.js（首页"待确认事项"卡片自动展示）+ 控制台报告。
用法:  python update_credit.py
"""
import json, re, sys, datetime, pathlib
import requests

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parent                       # indonesia-dashboard/
DASH = HERE / "dashboard" / "credit-dashboard.html"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36", "Accept-Language": "id,en;q=0.8"}
FX = 15000
MONTH_EN = {m: i+1 for i, m in enumerate(
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])}
MONTH_ID = {m: i+1 for i, m in enumerate(
    ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
     "Agustus", "September", "Oktober", "November", "Desember"])}


def update_pending(board, items):
    """写 pending.json + pending.js，首页待确认卡片读取"""
    pj = ROOT / "pending.json"
    data = json.loads(pj.read_text(encoding="utf-8")) if pj.exists() else {"boards": {}}
    data.setdefault("boards", {})[board] = items
    data["updated"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    pj.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    (ROOT / "pending.js").write_text(
        "const PENDING = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8")


def dashboard_latest_period():
    """从看板 rawData 里解析已有的最新月份"""
    txt = DASH.read_text(encoding="utf-8")
    periods = re.findall(r'period:\s*"(\d{4}\.\d{2})"', txt)
    return max(periods) if periods else "0000.00"


# ============ 1. BI 银行侧 ============
def check_bi(latest):
    import xlrd
    r = requests.get("https://www.bi.go.id/id/statistik/ekonomi-keuangan/sski/Documents/Tabel_17.xls",
                     headers=UA, timeout=60)
    r.raise_for_status()
    tmp = HERE / "data" / "source" / "_Tabel_17_latest.xls"
    tmp.write_bytes(r.content)
    sh = xlrd.open_workbook(str(tmp)).sheet_by_index(0)
    # 标签定位目标行（只取单位含 Miliar 的余额块，避开 NPL%/yoy% 同名行）
    targets = {"bankVeh": r"Kendaraan Bermotor", "bankMP": r"Multiguna",
               "bankOth": r"Rumah Tangga Lainnya"}
    rows = {}
    for i in range(sh.nrows):
        label = str(sh.cell_value(i, 1))
        unit = str(sh.cell_value(i, 2))
        if "Miliar" not in unit:
            continue
        for k, pat in targets.items():
            if re.search(pat, label) and k not in rows:
                rows[k] = i
    if len(rows) != 3:
        raise RuntimeError(f"行定位失败: 只找到 {rows}")
    # 列→期间: 月份行(idx5)有月名的列才是月度列；年份行(idx4)前向填充
    year = None
    periods = {}
    for c in range(sh.ncols):
        y = sh.cell_value(4, c)
        if isinstance(y, (int, float)) and 2000 < float(y) < 2100:
            year = int(y)
        elif isinstance(y, str) and re.fullmatch(r"20\d\d", y.strip()):
            year = int(y.strip())
        m = str(sh.cell_value(5, c)).strip()
        if m in MONTH_EN and year:
            periods[c] = f"{year}.{MONTH_EN[m]:02d}"
    # 提取所有月度值
    series = {}
    for c, p in periods.items():
        vals = {}
        for k, ri in rows.items():
            v = sh.cell_value(ri, c)
            if isinstance(v, (int, float)) and v > 0:
                vals[k] = round(float(v))
        if len(vals) == 3:
            series[p] = vals
    newest = max(series)
    new_months = {p: v for p, v in series.items() if p > latest}
    return {"newest_published": newest, "new_months": new_months,
            "check_value": series.get(latest)}


# ============ 2. OJK 监控 ============
def check_ojk():
    out = {}
    pages = {
        "SLP(多元金融)": ("https://www.ojk.go.id/id/kanal/iknb/data-dan-statistik/lembaga-pembiayaan/default.aspx",
                     r"Statistik-Lembaga-Pembiayaan-Periode-([A-Za-z]+)-(\d{4})"),
        "LPBBTI(P2P)": ("https://www.ojk.go.id/id/kanal/iknb/data-dan-statistik/fintech/default.aspx",
                    r"Statistik-LPBBTI-([A-Za-z]+)-(\d{4})"),
    }
    for name, (url, pat) in pages.items():
        try:
            r = requests.get(url, headers=UA, timeout=30)
            found = [(int(y), MONTH_ID.get(m, 0)) for m, y in re.findall(pat, r.text)]
            found = [f for f in found if f[1]]
            newest = max(found) if found else None
            out[name] = f"{newest[0]}.{newest[1]:02d}" if newest else "解析失败"
        except Exception as e:
            out[name] = f"不可达({str(e)[:40]})"
    # 新门户探测
    try:
        r = requests.get("https://data.ojk.go.id/SJKPublic", headers=UA, timeout=15)
        out["新门户"] = f"可达! HTTP {r.status_code}, {len(r.text)}字节 —— 告诉Claude Code来解析结构"
    except Exception:
        out["新门户"] = "不可达(本网络被屏蔽,印尼/本地网络下重试)"
    return out


# ============ 3. Shopee Loan (Lentera Dana) ============
def scrape_lentera():
    r = requests.get("https://www.lenteradana.co.id/statistic", headers=UA, timeout=30)
    t = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>", "", r.text)
    t = re.sub(r"<[^>]+>", "|", t)
    import html as H
    t = H.unescape(re.sub(r"\|+", "|", t))
    date_m = re.search(r"Data pada ([\d]+ \w+ \d{4})", t)
    def three_after(anchor):
        m = re.search(re.escape(anchor) + r"[\s\S]{0,300}?Sejak Berdiri\|(?:Rp)?([\d,\.]+)\|"
                      r"Tahun berjalan\|(?:Rp)?([\d,\.]+)\|Posisi akhir\|(?:Rp)?([\d,\.]+)", t)
        if not m:
            raise RuntimeError(f"'{anchor}' 区块解析失败(页面改版?)")
        return [float(x.replace(",", "").rstrip(".")) for x in m.groups()]
    disb = three_after("Nilai Pendanaan yang Disalurkan")
    borr = three_after("Jumlah Penerima Dana")
    return {
        "data_date": date_m.group(1) if date_m else "未知",
        "disb_ytd_usd_bn": round(disb[1] / FX / 1e9, 3),
        "outstanding_usd_bn": round(disb[2] / FX / 1e9, 3),
        "total_borrowers": int(borr[0]),
        "ytd_borrowers": int(borr[1]),
    }


def p2p_last_shopee():
    """从看板 p2pRaw 取 Shopee 各指标最后一个非空值(用于对比展示)"""
    txt = DASH.read_text(encoding="utf-8")
    m = re.search(r"const p2pRaw = (\{.*?\});\n", txt, re.S)
    if not m:
        return {}
    raw = json.loads(m.group(1))
    out = {}
    for metric in ("disbursement", "outstanding", "totalBorrowers", "activeBorrowers"):
        sec = raw.get(metric, {})
        for name, vals in sec.get("players", {}).items():
            if "LENTERA" in name.upper() or "Shopee" in name:
                nz = [(sec["dates"][i], v) for i, v in enumerate(vals) if v is not None]
                if nz:
                    out[metric] = nz[-1]
    return out


def main():
    latest = dashboard_latest_period()
    print(f"看板现有最新月份: {latest}\n" + "=" * 70)
    items = []

    # 1. BI
    print("① BI 银行侧 (Tabel_17.xls)")
    try:
        bi = check_bi(latest)
        chk = bi["check_value"]
        print(f"   已发布最新月份: {bi['newest_published']} | 交叉验证{latest}: {chk}")
        if bi["new_months"]:
            det = "; ".join(f"{p}: 车贷{v['bankVeh']:,}/多用途{v['bankMP']:,}/其他{v['bankOth']:,}"
                            for p, v in sorted(bi["new_months"].items()))
            print(f"   🔔 发现新月份: {det}")
            items.append({"title": f"BI银行侧新月份数据 {'/'.join(sorted(bi['new_months']))}",
                          "detail": det + "（Rp Miliar；MF/P2P/BNPL 另补）",
                          "action": "对Claude Code说\"确认写入BI新月份\"即入看板"})
        else:
            print(f"   无新月份(SSKI Table17 有约4个月时滞，属正常)")
    except Exception as e:
        print(f"   ✗ 失败: {str(e)[:80]}")

    # 2. OJK
    print("② OJK 监控")
    try:
        ojk = check_ojk()
        for k, v in ojk.items():
            print(f"   {k}: 最新可下载 {v}" if "达" not in v else f"   {k}: {v}")
        newer = [k for k, v in ojk.items() if re.fullmatch(r"\d{4}\.\d{2}", v) and v > latest]
        if newer:
            items.append({"title": f"OJK出新数了: {', '.join(newer)}",
                          "detail": "; ".join(f"{k}→{ojk[k]}" for k in newer),
                          "action": "对Claude Code说\"抓OJK新月份\"，自动下载提取后再确认"})
    except Exception as e:
        print(f"   ✗ 失败: {str(e)[:80]}")

    # 3. Shopee Loan —— 2026-07-17起不再单独产待确认卡片:
    #    P2P全量(含Shopee)统一走 p2p-scraper/scraper.mjs → 看板"✎数据管理"暗门结构化确认。
    #    此处仅做控制台快检（网站是否活着/数据是否更新）。
    print("③ Shopee Loan 快检(不产卡片,P2P统一走scraper→暗门)")
    try:
        lt = scrape_lentera()
        old = p2p_last_shopee()
        print(f"   官网数据日期: {lt['data_date']} | YTD ${lt['disb_ytd_usd_bn']}B | Out ${lt['outstanding_usd_bn']}B "
              f"(看板最后: {old.get('disbursement')} / {old.get('outstanding')})")
    except Exception as e:
        print(f"   ✗ 失败: {str(e)[:80]}")

    update_pending("credit", items)
    print("=" * 70)
    print(f"待确认事项 {len(items)} 条 → 已写入首页\"待确认事项\"卡片（打开 index.html 即见）")


if __name__ == "__main__":
    main()
