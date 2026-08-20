# -*- coding: utf-8 -*-
"""
街头动员热度 · 周度采集与建议分数生成器 (v2)
============================================
为"社会与街头"支柱提供一个可复现的 quant 子因子输入。
六个数据源三角测量，按"领先/滞后"分组（诚实边界：都是动员热度的代理，不是真社媒监听）：

  领先组（愤怒在酝酿，还没上街）
    A. Google Trends — 两个词篮子：街头篮(demonstrasi等) + 愤怒篮(korupsi/kejaksaan等)
    E. Kaskus 热帖 — kaskus.co.id/api/hot_threads 开放JSON接口(无需key)，
       测政治/愤怒主题在全站热帖中的互动占比（2026-07-15替代Reddit：其API收紧无法注册；
       collect_reddit 保留在代码里，拿到key后把 WEIGHTS/ORDER 里的 kaskus 换回 reddit 即可）
    F. YouTube — 近7天抗议/政治视频的高播放条数（需免费key）
  滞后组（已经发生、被报道）
    B. GDELT 报道量 — 全球新闻中印尼 protest 报道量（近7天 vs 前49天基线）
    C. GDELT tone   — 同一查询的媒体平均情绪
    D. 大众媒体RSS  — sources.yaml 信息源中街头相关标题占比（2026-07-15已换入CNN/BBC/Liputan6等国民新闻源）

输出：终端确认单 + HTML确认单（output/street-heat-latest.html，双击可看）。
不直接改 data.js —— 人在环，确认后才写入。
历史快照追加到 street_heat_history.json，供环比与校准。

用法:  python street_heat.py
"""
import datetime, hashlib, html, json, os, pathlib, re, sys, time
import requests

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

HERE = pathlib.Path(__file__).parent
HISTORY_FILE = HERE / "street_heat_history.json"
CONFIG_FILE = HERE / "street_heat_config.yaml"
SOURCES_YAML = HERE.parent / "brief" / "config" / "sources.yaml"
OUT_DIR = HERE / "output"
ROOT = HERE.parent.parent                # indonesia-dashboard/


def _atomic_write_text(path, content):
    tmp = path.with_name(f".{path.name}.{os.getpid()}.tmp")
    try:
        tmp.write_text(content, encoding="utf-8")
        tmp.replace(path)
    finally:
        tmp.unlink(missing_ok=True)


def update_pending(board, items, source="street-heat"):
    """Replace this producer's cards without deleting other pending work."""
    pj = ROOT / "pending.json"
    data = json.loads(pj.read_text(encoding="utf-8")) if pj.exists() else {"boards": {}}
    boards = data.setdefault("boards", {})
    existing = boards.get(board, [])
    retained = [
        item for item in existing
        if item.get("source") != source
        and not str(item.get("title", "")).startswith("街头热度周报")
    ]
    produced = []
    for item in items:
        normalized = dict(item)
        normalized["source"] = source
        normalized.setdefault(
            "id",
            f"{source}:{hashlib.sha256(str(item.get('title', '')).encode('utf-8')).hexdigest()[:12]}",
        )
        produced.append(normalized)
    boards[board] = retained + produced
    data["updated"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    serialized = json.dumps(data, ensure_ascii=False, indent=2)
    _atomic_write_text(pj, serialized + "\n")
    _atomic_write_text(ROOT / "pending.js", "const PENDING = " + serialized + ";\n")

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) street-heat-monitor/2.0"}
BROWSER_UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
              "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")

# ---- 词篮子（改这里 = 改测量对象，确认单会注明）----
# Google Trends 单次请求最多5个词，故拆两篮，各自对自身基线算比值后取均值
TRENDS_BASKET_STREET = ["demo hari ini", "demonstrasi", "unjuk rasa", "BBM naik", "aksi massa"]
TRENDS_BASKET_ANGER  = ["korupsi", "kejaksaan", "Indonesia gelap", "turunkan presiden", "krisis"]
GDELT_QUERY = '(demonstrasi OR "unjuk rasa" OR protest OR "aksi massa") sourcecountry:ID'
# D项(RSS)只测"街头已发生"，政治愤怒由 A/E/F 领先组负责——刻度含义保持干净
RSS_STREET_PATTERNS = [re.compile(p, re.I) for p in [
    r"\bdemo\b", r"\bdemonstrasi\b", r"unjuk rasa", r"\bprotes\b", r"\bprotest\b",
    r"aksi massa", r"\bmogok\b", r"buruh turun", r"mahasiswa turun",
    r"\bkerusuhan\b", r"\brusuh\b", r"\bricuh\b", r"bbm naik", r"subsidi dicabut",
    r"turunkan (presiden|prabowo|rezim|pemerintah)", r"\brally\b", r"\bstrike\b",
    r"\briot\b", r"\bunrest\b",
]]
# Reddit/YouTube 政治愤怒匹配（宽口径：政治体制+丑闻+街头）
POLITICS_PATTERNS = [re.compile(p, re.I) for p in [
    r"\bprabowo\b", r"\bgibran\b", r"\bjokowi\b", r"\bkorupsi\b", r"\bcorrupt",
    r"\bkejaksaan\b", r"\bjaksa\b", r"\bkejagung\b", r"\bpolri\b", r"\bpolisi\b", r"\bTNI\b",
    r"\bDPR\b", r"\bmenteri\b", r"\bpemerintah\b", r"\bgovernment\b", r"\bpolitik\b",
    r"\bdemo\b", r"\bdemonstrasi\b", r"unjuk rasa", r"\bprotest", r"\boligar",
    r"\brezim\b", r"\bregime\b", r"indonesia gelap", r"\bdanantara\b", r"\bMBG\b",
    r"\bBBM\b", r"\bsubsidi\b", r"\brupiah\b.*\b(anjlok|jatuh|crash)\b",
]]

# ---- 热度→建议分数 映射（判断项：档位是校准，可挑战）----
SCORE_BANDS = [(25, 70), (45, 58), (60, 45), (75, 35), (100, 22)]

def heat_to_score(h):
    prev_edge, prev_score = 0, 70
    for edge, score in SCORE_BANDS:
        if h <= edge:
            if edge == prev_edge:
                return score
            frac = (h - prev_edge) / (edge - prev_edge)
            hi = prev_score if prev_edge else 70
            return round(hi + (score - hi) * frac)
        prev_edge, prev_score = edge, score
    return 22

def load_config():
    import yaml
    if CONFIG_FILE.exists():
        return yaml.safe_load(CONFIG_FILE.read_text(encoding="utf-8")) or {}
    return {}


# ============ A. Google Trends（领先）============
TRENDS_RETRIES = 3


def _trends_series(py, basket, retries=TRENDS_RETRIES):
    """带退避重试地取一个篮子。

    Trends 是六个源里权重最大的一个(0.25)，却曾是唯一没有重试的——一次瞬时 429
    就直接抹掉 25 个百分点的覆盖率，再挂任何一个 ≥10% 的源就跌破 65% 门槛、整周
    拒绝出分。2026-08-18 那次 60% 覆盖率很可能就是这么来的。退避节奏与 _gdelt 一致。
    """
    last = None
    for attempt in range(retries):
        try:
            py.build_payload(basket, geo="ID", timeframe="today 3-m")
            df = py.interest_over_time()
            if df.empty:
                raise RuntimeError("Trends 返回空数据")
            return df
        except Exception as ex:
            last = ex
            if attempt < retries - 1:
                time.sleep(12 * (attempt + 1))
    raise RuntimeError(f"Trends 重试{retries}次仍失败: {str(last)[:80]}")


def collect_trends():
    from pytrends.request import TrendReq
    py = TrendReq(hl="id-ID", tz=420, timeout=(10, 25))
    ratios, per_kw = [], {}
    for basket in (TRENDS_BASKET_STREET, TRENDS_BASKET_ANGER):
        df = _trends_series(py, basket)
        df = df.drop(columns=["isPartial"], errors="ignore")
        series = df.mean(axis=1)
        latest, baseline = float(series.iloc[-1]), float(series.iloc[:-1].mean())
        ratios.append(latest / baseline if baseline > 0 else 1.0)
        per_kw.update({k: int(df[k].iloc[-1]) for k in df.columns})
        time.sleep(3)
    ratio = sum(ratios) / len(ratios)
    heat = max(0.0, min(100.0, 50.0 * ratio))
    return {"status": "ok", "heat": round(heat, 1),
            "detail": f"街头篮 {ratios[0]:.2f}x + 愤怒篮 {ratios[1]:.2f}x（vs 各自3个月基线），均值 {ratio:.2f}x",
            "raw": {"ratio_street": ratios[0], "ratio_anger": ratios[1], "per_kw": per_kw}}


# ============ B/C. GDELT（滞后）============
def _gdelt(mode, retries=3):
    for i in range(retries):
        r = requests.get("https://api.gdeltproject.org/api/v2/doc/doc",
                         params={"query": GDELT_QUERY, "mode": mode,
                                 "timespan": "56d", "format": "json"},
                         headers=UA, timeout=30)
        if r.status_code == 429 and i < retries - 1:
            time.sleep(12 * (i + 1)); continue
        r.raise_for_status()
        return r.json()

def collect_gdelt_volume():
    series = _gdelt("timelinevol")["timeline"][0]["data"]
    vals = [float(d["value"]) for d in series]
    if len(vals) < 21:
        raise RuntimeError(f"GDELT 数据点不足: {len(vals)}")
    avg7 = sum(vals[-7:]) / 7
    avgb = sum(vals[:-7]) / len(vals[:-7])
    ratio = avg7 / avgb if avgb > 0 else 1.0
    heat = max(0.0, min(100.0, 50.0 * ratio))
    return {"status": "ok", "heat": round(heat, 1),
            "detail": f"近7天报道量占比均值 {avg7:.3f}% / 前49天基线 {avgb:.3f}% = {ratio:.2f}x",
            "raw": {"avg7": avg7, "baseline": avgb, "ratio": ratio}}

def collect_gdelt_tone():
    series = _gdelt("timelinetone")["timeline"][0]["data"]
    vals = [float(d["value"]) for d in series]
    avg = sum(vals[-7:]) / 7
    heat = max(0.0, min(100.0, 20.0 + (-avg) * 10.0)) if avg < 0 else 20.0
    return {"status": "ok", "heat": round(heat, 1),
            "detail": f"近7天媒体平均tone {avg:.2f}（越负越紧张）",
            "raw": {"avg_tone7": avg}}


# ============ D. 大众媒体RSS（滞后）============
def collect_rss():
    import feedparser, yaml
    cfg = yaml.safe_load(SOURCES_YAML.read_text(encoding="utf-8"))
    cutoff = time.time() - 7 * 86400
    total, matched, examples, dead, titles = 0, 0, [], [], []
    for feed in cfg["feeds"]:
        try:
            fp = feedparser.parse(feed["url"], agent=BROWSER_UA)
            if not fp.entries:
                dead.append(feed["name"]); continue
            for e in fp.entries:
                ts = e.get("published_parsed") or e.get("updated_parsed")
                if ts and time.mktime(ts) < cutoff:
                    continue
                raw_title = e.get("title") or ""
                title = raw_title.lower()
                total += 1
                if len(titles) < 200:
                    titles.append(raw_title)
                if any(p.search(title) for p in RSS_STREET_PATTERNS):
                    matched += 1
                    if len(examples) < 5:
                        examples.append(f"[{feed['name']}] {raw_title[:80]}")
        except Exception:
            dead.append(feed["name"])
    if total == 0:
        raise RuntimeError("所有RSS源近7天都无可解析条目")
    share = matched / total * 100
    heat = max(0.0, min(100.0, share * 10.0))
    return {"status": "ok", "heat": round(heat, 1),
            "detail": f"近7天 {total} 条标题中 {matched} 条街头相关（{share:.1f}%）；失效源: {len(dead)}",
            "raw": {"total": total, "matched": matched, "share": share,
                    "examples": examples, "dead_feeds": dead, "titles": titles}}


# ============ E. Reddit r/indonesia（领先）============
def collect_reddit(cfg):
    rc = (cfg or {}).get("reddit") or {}
    cid, csec = rc.get("client_id", ""), rc.get("client_secret", "")
    rua = {"User-Agent": rc.get("user_agent") or UA["User-Agent"]}
    posts = None
    # 路径1: 匿名公开JSON（部分网络可用）
    try:
        r = requests.get("https://www.reddit.com/r/indonesia/hot.json?limit=100",
                         headers=rua, timeout=20)
        if r.status_code == 200:
            posts = [p["data"] for p in r.json()["data"]["children"]]
    except Exception:
        pass
    # 路径2: OAuth（免费key，见API_KEYS_GUIDE.md）
    if posts is None and cid and csec:
        tok = requests.post("https://www.reddit.com/api/v1/access_token",
                            auth=(cid, csec), data={"grant_type": "client_credentials"},
                            headers=rua, timeout=20)
        tok.raise_for_status()
        bearer = {"Authorization": f"bearer {tok.json()['access_token']}", **rua}
        r = requests.get("https://oauth.reddit.com/r/indonesia/hot?limit=100",
                         headers=bearer, timeout=20)
        r.raise_for_status()
        posts = [p["data"] for p in r.json()["data"]["children"]]
    if posts is None:
        if not (cid and csec):
            return {"status": "unconfigured", "heat": None,
                    "detail": "匿名接口被拒且未配置key —— 按 API_KEYS_GUIDE.md 注册后填入 street_heat_config.yaml",
                    "raw": {}}
        raise RuntimeError("匿名与OAuth两条路径都失败")
    posts = [p for p in posts if not p.get("stickied")]
    def eng(p): return p.get("score", 0) + p.get("num_comments", 0) * 2
    tot = sum(eng(p) for p in posts) or 1
    hits = [p for p in posts
            if any(pt.search((p.get("title") or "") + " " + (p.get("link_flair_text") or ""))
                   for pt in POLITICS_PATTERNS)]
    share = sum(eng(p) for p in hits) / tot * 100
    heat = max(0.0, min(100.0, share * 2.0))   # 互动占比50%→100热度（校准初值，攒历史后改环比）
    examples = [p["title"][:80] for p in sorted(hits, key=eng, reverse=True)[:5]]
    return {"status": "ok", "heat": round(heat, 1),
            "detail": f"热帖前{len(posts)}条中政治/愤怒帖 {len(hits)} 条，互动占比 {share:.1f}%",
            "raw": {"n_posts": len(posts), "n_hits": len(hits), "share": share,
                    "examples": examples}}


# ============ E. Kaskus 热帖（领先，替代Reddit）============
def collect_kaskus():
    S = requests.Session()
    S.headers.update({"User-Agent": BROWSER_UA, "Accept": "application/json",
                      "Referer": "https://www.kaskus.co.id/"})
    items, last_err = None, None
    for i in range(4):   # Kaskus 偶发掐连接(SSL EOF)，退避重试
        try:
            r = S.get("https://www.kaskus.co.id/api/hot_threads",
                      params={"limit": 50}, timeout=25)
            if r.status_code == 200 and r.text.strip().startswith("{"):
                items = r.json().get("data", [])
                break
            last_err = f"HTTP {r.status_code}"
        except Exception as ex:
            last_err = str(ex)[:60]
        time.sleep(10 * (i + 1))
    if not items:
        raise RuntimeError(f"hot_threads接口不可用: {last_err}")
    def eng(t):
        m = t.get("meta") or {}
        return (m.get("total_views") or 0) + (m.get("total_replies") or 0) * 20
    tot = sum(eng(t) for t in items) or 1
    hits = [t for t in items
            if any(p.search((t.get("title") or "") + " " +
                            ((t.get("community") or {}).get("name") or ""))
                   for p in POLITICS_PATTERNS)]
    share = sum(eng(t) for t in hits) / tot * 100
    heat = max(0.0, min(100.0, share * 2.0))   # 互动占比50%→100热度（校准初值，攒历史后改环比）
    examples = [t["title"][:80] for t in sorted(hits, key=eng, reverse=True)[:5]]
    return {"status": "ok", "heat": round(heat, 1),
            "detail": f"全站热帖{len(items)}条中政治/愤怒帖 {len(hits)} 条，互动占比 {share:.1f}%",
            "raw": {"n_threads": len(items), "n_hits": len(hits), "share": share,
                    "examples": examples,
                    "titles": [t.get("title", "") for t in items if t.get("title")]}}


# ============ F. YouTube（领先）============
def collect_youtube(cfg):
    key = ((cfg or {}).get("youtube") or {}).get("api_key", "")
    if not key:
        return {"status": "unconfigured", "heat": None,
                "detail": "未配置key —— 按 API_KEYS_GUIDE.md 申请后填入 street_heat_config.yaml",
                "raw": {}}
    after = (datetime.datetime.now(datetime.timezone.utc)
             - datetime.timedelta(days=7)).strftime("%Y-%m-%dT%H:%M:%SZ")
    vids = {}
    for q in ("demo indonesia", "korupsi kejaksaan", "demonstrasi mahasiswa"):
        r = requests.get("https://www.googleapis.com/youtube/v3/search",
                         params={"part": "snippet", "q": q, "type": "video",
                                 "publishedAfter": after, "maxResults": 50,
                                 "regionCode": "ID", "relevanceLanguage": "id",
                                 "order": "viewCount", "key": key},
                         headers=UA, timeout=25)
        r.raise_for_status()
        for item in r.json().get("items", []):
            vids[item["id"]["videoId"]] = (item.get("snippet") or {}).get("title", "")
    ids = list(vids)
    big = 0
    for i in range(0, len(ids), 50):
        r = requests.get("https://www.googleapis.com/youtube/v3/videos",
                         params={"part": "statistics", "id": ",".join(ids[i:i+50]), "key": key},
                         headers=UA, timeout=25)
        r.raise_for_status()
        for item in r.json().get("items", []):
            if int(item["statistics"].get("viewCount", 0)) >= 100_000:
                big += 1
    heat = max(0.0, min(100.0, big * 2.5))   # 40条10万+播放→100热度（校准初值，攒历史后改环比）
    return {"status": "ok", "heat": round(heat, 1),
            "detail": f"近7天抗议/腐败主题视频中播放≥10万的有 {big} 条（检索{len(ids)}条）",
            "raw": {"n_searched": len(ids), "n_big": big,
                    "titles": [t for t in vids.values() if t]}}


# ============ G. 反对率（DeepSeek分类，不计入热度权重，单独呈现）============
# v3新增: "网络政治情绪"driver的第二分量。对 Kaskus 热帖标题 + 大众RSS近7天标题
# 做三分类(反对政府/中性政治/支持政府/非政治)，输出政治条目中的反对占比。
def collect_opposition(cfg, segments):
    """segments: [(侧名, [标题...]), ...]；分侧统计反对率——民间侧vs媒体侧的差值本身是信号"""
    llm = (cfg or {}).get("llm") or {}
    key = llm.get("api_key", "")
    if not key:
        return {"status": "unconfigured", "rate": None,
                "detail": "未配置DeepSeek key —— platform.deepseek.com 申请后填入 street_heat_config.yaml 的 llm.api_key"}
    flat, seg_of = [], []
    for name, ts in segments:
        for t in ts:
            if len(flat) >= 250: break
            flat.append(t); seg_of.append(name)
    if len(flat) < 30:
        return {"status": "fail", "rate": None, "detail": f"可分类文本不足({len(flat)}条<30)"}
    base = llm.get("base_url", "https://api.deepseek.com").rstrip("/")
    model = llm.get("model", "deepseek-chat")
    labels_all = []
    for i in range(0, len(flat), 50):
        chunk = flat[i:i+50]
        numbered = "\n".join(f"{j+1}. {t[:120]}" for j, t in enumerate(chunk))
        prompt = ("以下是印尼新闻/论坛/视频标题(印尼语或英语)。逐条判断其对印尼政府/总统/执政精英的立场，"
                  "只输出JSON数组，每个元素为OPP(批评/负面/反对政府或官员丑闻)、SUP(正面/支持政府)、"
                  "NEU(涉政治但中性)、NON(与政治无关)之一，长度与条目数相同。\n\n" + numbered)
        r = requests.post(f"{base}/chat/completions",
                          headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
                          json={"model": model, "temperature": 0,
                                "messages": [{"role": "user", "content": prompt}]},
                          timeout=90)
        r.raise_for_status()
        content = r.json()["choices"][0]["message"]["content"]
        labels = re.findall(r'\b(OPP|SUP|NEU|NON)\b', content)
        labels += ["NON"] * (len(chunk) - len(labels))   # 解析短缺时保守补齐
        labels_all += labels[:len(chunk)]
        time.sleep(1)
    counts = {"OPP": 0, "SUP": 0, "NEU": 0, "NON": 0}
    seg_counts = {}
    for lb, sg in zip(labels_all, seg_of):
        counts[lb] += 1
        c = seg_counts.setdefault(sg, {"OPP": 0, "SUP": 0, "NEU": 0, "NON": 0})
        c[lb] += 1
    political = counts["OPP"] + counts["SUP"] + counts["NEU"]
    if political == 0:
        return {"status": "fail", "rate": None, "detail": "分类结果中无政治条目"}
    rate = counts["OPP"] / political * 100
    density = political / max(len(flat), 1) * 100
    seg_str = []
    seg_rates = {}
    for sg, c in seg_counts.items():
        pol = c["OPP"] + c["SUP"] + c["NEU"]
        if pol > 0:
            sr = c["OPP"] / pol * 100
            seg_rates[sg] = round(sr, 1)
            seg_str.append(f"{sg} {sr:.0f}%")
    return {"status": "ok", "rate": round(rate, 1), "seg_rates": seg_rates,
            "detail": (f"{len(flat)}条中政治条目{political}条(浓度{density:.0f}%)，"
                       f"反对{counts['OPP']}/中性{counts['NEU']}/支持{counts['SUP']} → 总反对率 {rate:.1f}%"
                       f"（分侧: {' · '.join(seg_str)}）")}


# ============ 合成与输出 ============
WEIGHTS = {"trends": 0.25, "kaskus": 0.20, "youtube": 0.10,
           "gdelt_vol": 0.15, "gdelt_tone": 0.10, "rss": 0.20}
MIN_WEIGHT_COVERAGE = 0.65
NAMES = {"trends": "A. Google Trends 双篮搜索热度", "kaskus": "E. Kaskus 全站热帖",
         "youtube": "F. YouTube 高播放政治视频", "gdelt_vol": "B. GDELT 报道量",
         "gdelt_tone": "C. GDELT 媒体tone", "rss": "D. 大众媒体RSS 街头标题占比"}
GROUP = {"trends": "领先", "kaskus": "领先", "youtube": "领先",
         "gdelt_vol": "滞后", "gdelt_tone": "滞后", "rss": "滞后"}
ORDER = ["trends", "kaskus", "youtube", "gdelt_vol", "gdelt_tone", "rss"]
STATUS_LABEL = {"ok": "✓", "fail": "✗ 失败", "unconfigured": "○ 待配置"}
REQUIRED_GROUPS = {
    "领先": {"trends", "kaskus", "youtube"},
    "滞后": {"gdelt_vol", "gdelt_tone", "rss"},
}


def validate_coverage(ok_keys):
    ok_keys = set(ok_keys)
    coverage = sum(WEIGHTS[key] for key in ok_keys)
    missing_groups = [name for name, keys in REQUIRED_GROUPS.items() if not (keys & ok_keys)]
    return coverage, missing_groups


def print_source_table(today, results, ok):
    """打印分源状态。**必须在覆盖率闸门之前调用。**

    2026-08-18 的教训：脚本在 sys.exit(2) 之前只说了「有效权重 60%」，没说是哪几个
    源挂了，日志里也就没有任何可诊断的东西——拒绝出分是对的，不可诊断是缺陷。
    """
    W = 78
    print("=" * W)
    print(f"  街头动员热度 · 周度确认单 (v2)     采集日 {today}   (人在环)")
    print("=" * W)
    for k in ORDER:
        r = results[k]
        flag = STATUS_LABEL[r["status"]]
        hs = f"{r['heat']:5.1f}" if r["heat"] is not None else "  —  "
        wt = f"{WEIGHTS[k]*100:.0f}%" if r["status"] == "ok" else "(重分配)"
        print(f"  {flag:<7} {NAMES[k]:<26} [{GROUP[k]}] 热度 {hs}  权重 {wt}")
        print(f"          {r['detail']}")
    n_off = len(results) - len(ok)
    if n_off:
        print(f"  ⚠ {n_off} 个源未参与，热度按剩余源权重归一化")


def render_html(today, results, ok, heat, score, hist, opp=None):
    rows = []
    for k in ORDER:
        r = results[k]
        st = r["status"]
        badge = {"ok": ("✓ 正常", "#639922"), "fail": ("✗ 失败", "#D85A30"),
                 "unconfigured": ("○ 待配置", "#EF9F27")}[st]
        hs = f"{r['heat']:.1f}" if r["heat"] is not None else "—"
        wt = f"{WEIGHTS[k]*100:.0f}%" if st == "ok" else "重分配"
        rows.append(f"""<tr>
          <td><span class="badge" style="color:{badge[1]};border-color:{badge[1]}">{badge[0]}</span></td>
          <td><b>{html.escape(NAMES[k])}</b><span class="grp">{GROUP[k]}指标</span></td>
          <td class="num">{hs}</td><td class="num">{wt}</td>
          <td class="detail">{html.escape(r['detail'])}</td></tr>""")
    ex = (results.get("rss", {}).get("raw", {}) or {}).get("examples") or []
    ex += (results.get("reddit", {}).get("raw", {}) or {}).get("examples") or []
    ex_html = ("<h3>近7天相关标题/热帖样例</h3><ul>" +
               "".join(f"<li>{html.escape(e)}</li>" for e in ex[:8]) + "</ul>") if ex else ""
    # 历史走势（含本期）
    pts = [(h["date"], h["heat"], h["suggested_score"]) for h in hist]
    hist_rows = "".join(f"<tr><td>{d}</td><td class='num'>{ht}</td><td class='num'><b>{sc}</b></td></tr>"
                        for d, ht, sc in pts)
    bands = " ".join(f"<span class='band'>≤{e}→{s}分</span>" for e, s in SCORE_BANDS)
    n_off = len(results) - len(ok)
    warn = (f"<p class='warn'>⚠ {n_off} 个源未参与（失败/待配置），热度按剩余源权重归一化。</p>" if n_off else "")
    return f"""<!DOCTYPE html><html lang="zh"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>街头动员热度确认单 · {today}</title>
<style>
 body{{margin:0;background:#f7f8fa;color:#1f2937;font-family:-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;line-height:1.6}}
 .wrap{{max-width:860px;margin:0 auto;padding:32px 20px 60px}}
 h1{{font-size:20px;margin:0 0 2px}} .sub{{font-size:12px;color:#9aa1ab;margin-bottom:18px}}
 .card{{background:#fff;border:1px solid #e7e9ee;border-radius:12px;padding:18px;margin-bottom:14px;box-shadow:0 1px 2px rgba(16,24,40,.04)}}
 .hero{{display:flex;gap:28px;align-items:center;flex-wrap:wrap}}
 .big{{font-size:44px;font-weight:700}} .lbl{{font-size:12px;color:#6b7280}}
 table{{width:100%;border-collapse:collapse;font-size:12px}}
 th{{text-align:left;color:#6b7280;font-weight:600;border-bottom:2px solid #e7e9ee;padding:6px}}
 td{{border-bottom:1px solid #f1f2f4;padding:7px 6px;vertical-align:top}}
 .num{{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}}
 .badge{{font-size:11px;border:1px solid;border-radius:6px;padding:1px 7px;white-space:nowrap}}
 .grp{{font-size:10px;color:#9aa1ab;margin-left:6px}}
 .detail{{color:#6b7280;font-size:11px}}
 .band{{display:inline-block;background:#f1f5f9;border:1px solid #e7e9ee;border-radius:6px;padding:1px 8px;font-size:11px;margin:2px}}
 .warn{{color:#b45309;font-size:12px}}
 h3{{font-size:13px;margin:4px 0 8px}} ul{{margin:0;padding-left:18px;font-size:12px;color:#4b5563}}
 .next{{background:#eff6ff;border:1px solid #bfdbfe;border-left:4px solid #2563eb;border-radius:8px;padding:12px 16px;font-size:12.5px}}
</style></head><body><div class="wrap">
<h1>街头动员热度 · 周度确认单</h1>
<div class="sub">采集日 {today} · 人在环：你确认后分数才会写入稳定性看板 · 词篮/刻度定义见 street_heat.py 头部注释</div>
<div class="card hero">
  <div><div class="lbl">合成热度（越高越热；与基线持平≈41）</div><div class="big">{heat:.1f}</div></div>
  <div><div class="lbl">建议分数（越高越稳）</div><div class="big" style="color:#2563eb">{score}</div></div>
  <div><div class="lbl">反对率（政治条目中，独立分量）</div><div class="big" style="color:#b8542a">{(f"{opp['rate']:.0f}%" if opp and opp.get("rate") is not None else "—")}</div></div>
  <div style="flex:1;min-width:220px"><div class="lbl">换算刻度</div>{bands}</div>
</div>
{f'<div class="card" style="font-size:12px;color:#6b7280">G. 反对率(DeepSeek分类·不计入热度权重): {html.escape(opp["detail"])}</div>' if opp else ''}
<div class="card"><h3>六源明细</h3>{warn}
<table><tr><th>状态</th><th>数据源</th><th class="num">热度</th><th class="num">权重</th><th>本期读数</th></tr>
{''.join(rows)}</table></div>
<div class="card">{ex_html}<h3>历史（共{len(pts)}期）</h3>
<table><tr><th>采集日</th><th class="num">合成热度</th><th class="num">建议分数</th></tr>{hist_rows}</table></div>
<div class="next"><b>下一步：</b>把这个建议分数发给 Claude Code 确认（说"确认本期街头热度"即可写入看板），
或者说"这期不对，因为……"来挑战校准。</div>
</div></body></html>"""


def main():
    today = datetime.date.today().isoformat()
    cfg = load_config()
    collectors = [("trends", collect_trends), ("kaskus", collect_kaskus),
                  ("youtube", lambda: collect_youtube(cfg)),
                  ("gdelt_vol", collect_gdelt_volume), ("gdelt_tone", collect_gdelt_tone),
                  ("rss", collect_rss)]
    results = {}
    for key, fn in collectors:
        try:
            results[key] = fn()
        except Exception as ex:
            results[key] = {"status": "fail", "heat": None,
                            "detail": f"采集失败: {str(ex)[:90]}", "raw": {}}
        time.sleep(6)   # GDELT 限流约1次/5秒

    ok = {k: v for k, v in results.items() if v["status"] == "ok"}
    wsum, missing_groups = validate_coverage(ok)
    # 闸门之前先把状态表打出来，否则拒绝出分的原因不可诊断（见 print_source_table）。
    print_source_table(today, results, ok)
    if wsum < MIN_WEIGHT_COVERAGE or missing_groups:
        missing = f"；缺少组别: {', '.join(missing_groups)}" if missing_groups else ""
        failed = ", ".join(
            f"{NAMES[k].split('.')[0]}={results[k]['status']}({WEIGHTS[k]:.0%})"
            for k in ORDER if k not in ok
        ) or "无"
        print(f"数据覆盖不足（有效权重 {wsum:.0%}，最低 {MIN_WEIGHT_COVERAGE:.0%}{missing}）。")
        print(f"未参与的源: {failed}")
        for k in ORDER:
            if k not in ok:
                print(f"  - {NAMES[k]}: {results[k]['detail']}")
        print("本周不生成分数、不写历史、不推送待确认事项。")
        print("注意：这是「没采到」，不是「本周无变化」；评分侧必须按结转处理并标注。")
        sys.exit(2)
    heat = sum(results[k]["heat"] * WEIGHTS[k] for k in ok) / wsum
    score = heat_to_score(heat)

    # ---- G. 反对率（独立分量，不计入热度权重）----
    # 分侧池: 民间侧=YouTube视频标题(创作者), 论坛侧=Kaskus热帖, 媒体侧=大众RSS标题
    segments = [
        ("民间YouTube", (results.get("youtube", {}).get("raw", {}) or {}).get("titles") or []),
        ("论坛Kaskus", (results.get("kaskus", {}).get("raw", {}) or {}).get("titles") or []),
        ("媒体RSS", (results.get("rss", {}).get("raw", {}) or {}).get("titles") or []),
    ]
    try:
        opp = collect_opposition(cfg, segments)
    except Exception as ex:
        opp = {"status": "fail", "rate": None, "detail": f"分类失败: {str(ex)[:80]}"}

    # ---- 终端确认单 ----
    print_source_table(today, results, ok)
    flag_g = STATUS_LABEL.get(opp["status"], "?")
    rate_s = f"{opp['rate']:.1f}%" if opp.get("rate") is not None else "—"
    print(f"  {flag_g:<7} G. 反对率(DeepSeek分类)      [领先] {rate_s}  (独立分量，不计入热度)")
    print(f"          {opp['detail']}")
    print("-" * W)
    print(f"  合成热度  {heat:.1f} / 100   （与基线持平≈41）")
    print(f"  建议分数  {score} / 100     （" + "; ".join(f"≤{e}→{s}" for e, s in SCORE_BANDS) + "）")
    print("=" * W)

    # ---- 历史留档 + HTML确认单 ----
    hist = json.loads(HISTORY_FILE.read_text(encoding="utf-8")) if HISTORY_FILE.exists() else []
    hist = [entry for entry in hist if entry.get("date") != today]
    hist.append({"date": today, "version": 3, "heat": round(heat, 1), "suggested_score": score,
                 "opposition": {"status": opp["status"], "rate": opp.get("rate"), "detail": opp["detail"]},
                 "sources": {k: {"status": v["status"], "heat": v["heat"],
                                 "raw": {kk: vv for kk, vv in v["raw"].items() if kk != "titles"}}
                             for k, v in results.items()}})
    _atomic_write_text(HISTORY_FILE, json.dumps(hist, ensure_ascii=False, indent=2) + "\n")

    OUT_DIR.mkdir(exist_ok=True)
    page = render_html(today, results, ok, heat, score, hist, opp)
    dated = OUT_DIR / f"street-heat-{today}.html"
    _atomic_write_text(dated, page)
    _atomic_write_text(OUT_DIR / "street-heat-latest.html", page)
    print(f"  已留档 → {HISTORY_FILE.name}（{len(hist)}期）")
    print(f"  HTML确认单 → {dated}")
    print(f"             → {OUT_DIR / 'street-heat-latest.html'}（双击打开）")

    # ---- 首页待确认卡片 ----
    rate_txt = f" · 反对率 {opp['rate']:.1f}%" if opp.get("rate") is not None else ""
    update_pending("stability", [{
        "title": f"街头热度周报 {today}: 建议分数 {score}/100",
        "detail": f"合成热度 {heat:.1f}{rate_txt}（{len(ok)}/{len(results)} 源成功）",
        "link": "stability-monitor/scripts/output/street-heat-latest.html",
        "action": "看确认单后对Claude Code说\"确认本期街头热度\"或提出质疑"
    }])
    print("  待确认卡片已推送到首页 index.html")

if __name__ == "__main__":
    main()
