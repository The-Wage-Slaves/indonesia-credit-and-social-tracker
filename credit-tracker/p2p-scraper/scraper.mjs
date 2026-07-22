/**
 * Indonesia P2P Lending Platform Scraper — v2 (2026-07-17 逐家定制版)
 *
 * v1 通用提取器只命中 Shopee；v2 按 debug_dump.mjs 转储逐家解码了布局:
 *   - 值前标签后(value→label): Easycash, Julo, Kredifazz, Koinworks
 *   - 标签前值后(label→value): Asetku, KreditPintar, Modalku
 *   - 四行块(Rp/数值/单位/标签/子标签): AdaKami
 *   - 三值块(Sejak/Tahun/Posisi): Lentera Dana
 *   - AdaPundi: 成就页已改版无统计数，改抓主页(仍可能无数据,如实报告)
 *
 * 用法: node scraper.mjs   → results/scrape_YYYY-MM-DD.json + 首页待确认卡片
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FX = 15000;
const TODAY = new Date().toISOString().split('T')[0];

function atomicWriteText(destination, content) {
  const temporary = `${destination}.${process.pid}.tmp`;
  try {
    fs.writeFileSync(temporary, content, 'utf8');
    fs.renameSync(temporary, destination);
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
}

// ── 数字解析（印尼语混排：73,86=73.86 / 10.299.405=10299405 / 35,400,922,888,387）──
function parseIdNum(s) {
  if (s == null) return null;
  s = String(s).replace(/[^\d.,]/g, '');
  if (!s) return null;
  if (/^\d{1,3}([.,]\d{3})+$/.test(s)) return parseFloat(s.replace(/[.,]/g, ''));
  if (/^\d+,\d{1,2}$/.test(s)) return parseFloat(s.replace(',', '.'));
  if (/^\d+\.\d{1,2}$/.test(s)) return parseFloat(s);
  return parseFloat(s.replace(/[.,]/g, ''));
}
const UNITS = { T: 1e12, TRILIUN: 1e12, M: 1e9, MILIAR: 1e9, JT: 1e6, JUTA: 1e6, RB: 1e3, RIBU: 1e3 };
function withUnit(numStr, unitStr) {
  const n = parseIdNum(numStr);
  if (n == null) return null;
  const u = (unitStr || '').trim().toUpperCase();
  return UNITS[u] ? n * UNITS[u] : n;
}
// 从 "Rp 93.85 T" / "Rp 98,27 Triliun" / "Rp 35,400,922,888,387" 提取 Rp 原值
function parseRpLine(line) {
  if (!line) return null;
  const m = String(line).match(/Rp\.?\s*([\d.,]+)\s*(T|Triliun|M|Miliar|JT|Juta)?\b/i);
  if (!m) return null;
  return withUnit(m[1], m[2]);
}
const usdBn = (rp) => (rp == null ? null : +(rp / (FX * 1e9)).toFixed(3));

// ── 行工具: 值在标签前一行 / 后一行 ──
const findLabel = (lines, re) => lines.findIndex((l) => re.test(l));
function valBefore(lines, re, parser = parseRpLine) {
  const i = findLabel(lines, re);
  return i > 0 ? parser(lines[i - 1]) : null;
}
function valAfter(lines, re, parser = parseRpLine) {
  // 值可能拆成 "Rp" + "65T" 两行，联接后一两行再解析
  const i = findLabel(lines, re);
  if (i < 0) return null;
  return parser(lines[i + 1]) ?? parser(((lines[i + 1] || '') + ' ' + (lines[i + 2] || '')).trim());
}
const countParser = (l) => {
  const m = String(l).match(/([\d.,]+)\s*(JT|Juta|RB|rb|Ribu)?\b/);
  return m ? withUnit(m[1], m[2]) : null;
};

// ── 逐家提取器: (lines, fullText) → {disbCumul, disbYTD, outstanding, totalBorrowers, activeBorrowersYTD, dataDate, note} (Rp原值/人数) ──
const EXTRACTORS = {
  'AdaKami': (lines, text) => {
    // 四行块: Rp | 73,86 | Triliun | Nilai pendanaan yang tersalurkan | Sejak/Pada tahun/Di bulan
    const out = {};
    for (let i = 0; i < lines.length - 4; i++) {
      if (lines[i] !== 'Rp' && lines[i] !== 'Users') continue;
      const val = withUnit(lines[i + 1], lines[i + 2]);
      const label = lines[i + 3] || '', sub = lines[i + 4] || '';
      if (val == null) continue;
      if (/Nilai pendanaan/i.test(label)) {
        if (/Sejak/i.test(sub)) out.disbCumul = val;
        else if (/tahun berjalan/i.test(sub)) out.disbYTD = val;
      } else if (/Outstanding/i.test(label)) out.outstanding = val;
      else if (/Penerima Dana/i.test(label)) {
        if (/Sejak/i.test(sub)) out.totalBorrowers = val;
        else if (/tahun berjalan/i.test(sub)) out.activeBorrowersYTD = val;
      }
    }
    return out;
  },
  'Lentera Dana (Shopee Loan)': (lines, text) => {
    const out = {};
    const grab = (anchor) => {
      // 标签与值可能同行(tab分隔)或换行
      const m = text.match(new RegExp(anchor + String.raw`[\s\S]{0,260}?Sejak Berdiri\s*(?:Rp)?\s*([\d,.]+)[\s\S]{0,80}?Tahun berjalan\s*(?:Rp)?\s*([\d,.]+)[\s\S]{0,80}?Posisi akhir\s*(?:Rp)?\s*([\d,.]+)`));
      return m ? m.slice(1).map((x) => parseFloat(x.replace(/,/g, ''))) : null;
    };
    const d = grab('Nilai Pendanaan yang Disalurkan');
    if (d) { out.disbCumul = d[0]; out.disbYTD = d[1]; out.outstanding = d[2]; }
    const b = grab('Jumlah Penerima Dana');
    if (b) { out.totalBorrowers = b[0]; out.activeBorrowersYTD = b[1]; }
    const dm = text.match(/Data pada (\d+ \w+ \d{4})/); if (dm) out.dataDate = dm[1];
    return out;
  },
  'Kredifazz': (lines) => ({
    disbCumul: valBefore(lines, /Nilai Penyaluran Pendanaan Sejak Berdiri/i),
    disbYTD: valBefore(lines, /Nilai Penyaluran Pendanaan Tahun Berjalan/i),
    outstanding: valBefore(lines, /Total Outstanding Pinjaman/i),
    totalBorrowers: valBefore(lines, /Jumlah Penerima Dana Sejak Berdiri/i, countParser),
    activeBorrowersYTD: valBefore(lines, /Jumlah Penerima Dana Tahun Berjalan/i, countParser),
  }),
  'Akulaku (Asetku)': (lines) => ({
    disbCumul: valAfter(lines, /Nilai pendanaan yang tersalurkan sejak/i),
    totalBorrowers: valAfter(lines, /Jumlah penerima dana sejak/i, countParser),
    note: '官网仅披露累计口径(无YTD/outstanding)',
  }),
  'Kredit Pintar': (lines, text) => {
    const out = {
      disbCumul: valAfter(lines, /Total pinjaman sejak didirikan/i),
      disbYTD: valAfter(lines, /Total pinjaman tahun [Ii]ni/i),
      outstanding: valAfter(lines, /belum dibayar/i),
      totalBorrowers: valAfter(lines, /^Total peminjam$/i, countParser),
      activeBorrowersYTD: valAfter(lines, /^Peminjam aktif$/i, countParser),
    };
    const dm = text.match(/Terakhir diperbarui pada ([\d/]+)/); if (dm) out.dataDate = dm[1];
    return out;
  },
  'Easycash': (lines) => ({
    disbCumul: valBefore(lines, /Total pinjaman akumulatif sejak berdiri/i),
    disbYTD: valBefore(lines, /Total Akumulasi Pinjaman Pada \d{4}/i),
    outstanding: valBefore(lines, /Total pinjaman terutang/i),
    totalBorrowers: valBefore(lines, /Total akumulasi penerima dana sejak berdiri/i, countParser),
    activeBorrowersYTD: valBefore(lines, /Total akumulasi penerima dana pada \d{4}/i, countParser),
  }),
  'Julo': (lines) => ({
    disbCumul: valBefore(lines, /Total Pendanaan Sejak Berdiri/i),
    disbYTD: valBefore(lines, /Total Pendanaan Tahun \d{4}/i),
    totalBorrowers: valBefore(lines, /Total Penerima Dana Sejak Berdiri/i, countParser),
    activeBorrowersYTD: valBefore(lines, /Total Penerima Dana Tahun \d{4}/i, countParser),
    note: '官网未披露outstanding',
  }),
  'ADA Pundi': (lines) => {
    // 成就页 Statistik tab(需点击加载)。布局: 值在标签前一行，值不带Rp前缀如 "34,14 T"/"5,62 Juta"/"855 Ribu"
    const unitParser = (l) => {
      const m = String(l || '').match(/([\d.,]+)\s*(T|Triliun|M|Miliar|JT|Juta|RB|Ribu)\b/i);
      return m ? withUnit(m[1], m[2]) : null;
    };
    return {
      disbCumul: valBefore(lines, /Total Pinjaman Yang Sudah Disalurkan/i, unitParser),
      disbYTD: valBefore(lines, /Akumulasi Pinjaman Tahun ini/i, unitParser),
      outstanding: valBefore(lines, /Total Outstanding/i, unitParser),
      totalBorrowers: valBefore(lines, /Jumlah Akumulasi Peminjam/i, unitParser),
      activeBorrowersYTD: valBefore(lines, /Jumlah Peminjam Aktif/i, unitParser),
    };
  },
};
// 2026-07-17 已按用户指令从追踪名单移除: Koinworks(官网数据停更2025-10)、Funding Societies/Modalku(口径歧义)、
// 以及更早退出的 Investree/Maucash/UangMe。新增 KrediOne(无官网统计页,手工录入,见 pendingJs)。

const PLAYERS = [
  { name: 'AdaKami', url: 'https://www.adakami.id/about', extraWait: 9000 },
  { name: 'Lentera Dana (Shopee Loan)', url: 'https://www.lenteradana.co.id/statistic' },
  { name: 'Kredifazz', url: 'https://kredifazz.id/disclosure.html' },
  { name: 'Akulaku (Asetku)', url: 'https://www.asetku.co.id/#/' },
  { name: 'Kredit Pintar', url: 'https://www.kreditpintar.com/about-us' },
  { name: 'Easycash', url: 'https://easycash.id/about/us/company-team' },
  { name: 'Julo', url: 'https://www.julo.co.id/about' },
  { name: 'ADA Pundi', url: 'https://www.adapundi.com/about/achievements', clickText: 'Statistik', extraWait: 6000 },
  // KrediOne(原360Kredi): 官网数字走JSON接口，直接调取（无需浏览器）。接口无outstanding字段(官网不披露)
  { name: 'KrediOne', url: 'https://www.kredione.id/',
    api: 'https://www.kredione.id/gateway/idn-om-agency/agency/officialWebsiteData/queryOfficialWebsiteData' },
];
const MIN_SUCCESS = Math.ceil(PLAYERS.length * 0.6);

// ── 看板现有最后值(对比用) ──
function trackerLast() {
  try {
    const html = fs.readFileSync(path.join(__dirname, '..', 'dashboard', 'credit-dashboard.html'), 'utf8');
    const m = html.match(/const p2pRaw = (\{.*?\});\n/s);
    if (!m) return {};
    const raw = JSON.parse(m[1]);
    const last = {};
    for (const metric of ['disbursement', 'outstanding', 'totalBorrowers', 'activeBorrowers']) {
      const sec = raw[metric]; if (!sec) continue;
      for (const [pname, vals] of Object.entries(sec.players)) {
        const nz = vals.map((v, i) => [sec.dates[i], v]).filter(([, v]) => v != null);
        if (!nz.length) continue;
        (last[pname] = last[pname] || {})[metric] = nz[nz.length - 1];
      }
    }
    return last;
  } catch { return {}; }
}
function matchTracker(last, name) {
  const key = Object.keys(last).find((k) => k.split(/[ (]/)[0].toLowerCase() === name.split(/[ (]/)[0].toLowerCase()
    || k.toUpperCase().includes('LENTERA') && name.includes('Lentera'));
  return key ? last[key] : {};
}

// ── 首页待确认 ──
function updatePending(items) {
  const root = path.join(__dirname, '..', '..');
  const pj = path.join(root, 'pending.json');
  let data = { boards: {} };
  try { data = JSON.parse(fs.readFileSync(pj, 'utf8')); } catch {}
  data.boards = data.boards || {};
  const source = 'p2p-scraper';
  const retained = (data.boards.credit || []).filter((it) =>
    it.source !== source && !/P2P竞对批量/.test(String(it.title || '')));
  const produced = items.map((item, index) => ({
    ...item,
    source,
    id: item.id || `${source}:${TODAY}:${index}`,
  }));
  data.boards.credit = retained.concat(produced);
  data.updated = new Date().toISOString().slice(0, 16).replace('T', ' ');
  const serialized = JSON.stringify(data, null, 2);
  atomicWriteText(pj, serialized + '\n');
  atomicWriteText(path.join(root, 'pending.js'), 'const PENDING = ' + serialized + ';\n');
}

// ── Main ──
async function main() {
  console.log(`\n════ P2P Player Scraper v2 — ${TODAY} ════\n`);
  const browser = await chromium.launch({ headless: true });
  const last = trackerLast();
  const results = [];
  let okCount = 0;

  for (const p of PLAYERS) {
    process.stdout.write(`▸ ${p.name.padEnd(32)}`);
    // API型数据源: 直接fetch JSON，不开浏览器
    if (p.api) {
      try {
        const res = await fetch(p.api, { signal: AbortSignal.timeout(30_000), headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126',
          Referer: p.url, Accept: 'application/json' } });
        if (!res.ok) throw new Error(`API HTTP ${res.status}`);
        const j = (await res.json()).result || {};
        const raw = {
          disbCumul: j.fullLoanAmount ?? null, disbYTD: j.yearLoanAmount ?? null,
          totalBorrowers: j.fullLoanNumber != null ? +j.fullLoanNumber : null,
          activeBorrowersYTD: j.yearLoanNumber != null ? +j.yearLoanNumber : null,
          dataDate: j.title || null,
          note: '官网JSON接口；无outstanding披露；LoanNumber按借款人口径对齐(与Excel序列连续,判断)',
        };
        const parsed = {
          disbCumul_usd: usdBn(raw.disbCumul), disbYTD_usd: usdBn(raw.disbYTD),
          outstanding_usd: null, totalBorrowers: raw.totalBorrowers, activeBorrowersYTD: raw.activeBorrowersYTD,
        };
        const nOK = Object.values(parsed).filter((v) => v != null).length;
        if (nOK >= 2) okCount++;
        console.log(nOK >= 2 ? `✅ ${nOK}项(API)` : '✗ 0项', `(${raw.note.slice(0, 20)}…)`);
        results.push({ name: p.name, url: p.url, dataDate: raw.dataDate, parsed,
                       tracker_last: matchTracker(last, p.name), note: raw.note });
      } catch (e) {
        console.log(`❌ API失败 ${e.message.slice(0, 40)}`);
        results.push({ name: p.name, url: p.url, error: 'API: ' + e.message });
      }
      continue;
    }
    const page = await browser.newPage();
    try {
      await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {});
      if (p.clickText) {   // 有些统计数藏在tab后(如AdaPundi的Statistik)
        await page.click(`text=${p.clickText}`, { timeout: 6000 }).catch(() => {});
        await page.waitForTimeout(2500);
      }
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(p.extraWait || 4500);
      const text = await page.evaluate(() => document.body.innerText);
      const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
      const raw = (EXTRACTORS[p.name] || (() => ({})))(lines, text);
      const parsed = {
        disbCumul_usd: usdBn(raw.disbCumul), disbYTD_usd: usdBn(raw.disbYTD),
        outstanding_usd: usdBn(raw.outstanding),
        totalBorrowers: raw.totalBorrowers != null ? Math.round(raw.totalBorrowers) : null,
        activeBorrowersYTD: raw.activeBorrowersYTD != null ? Math.round(raw.activeBorrowersYTD) : null,
      };
      const nOK = Object.values(parsed).filter((v) => v != null).length;
      if (nOK >= 2) okCount++;
      console.log(nOK >= 2 ? `✅ ${nOK}项` : (nOK === 1 ? `🟡 1项` : '✗ 0项'), raw.note ? `(${raw.note})` : '');
      results.push({ name: p.name, url: p.url, dataDate: raw.dataDate || null, parsed,
                     tracker_last: matchTracker(last, p.name), note: raw.note || null,
                     _secondBlock: raw._secondBlock != null ? usdBn(raw._secondBlock) : undefined });
    } catch (e) {
      console.log(`❌ ${e.message.slice(0, 50)}`);
      results.push({ name: p.name, url: p.url, error: e.message });
    }
    await page.close();
  }
  await browser.close();

  const dir = path.join(__dirname, 'results');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  const outPath = path.join(dir, `scrape_${TODAY}.json`);
  atomicWriteText(outPath, JSON.stringify({ date: TODAY, fx: FX, players: results }, null, 2) + '\n');

  // 看板暗门用的结构化待确认文件（credit-dashboard.html 通过 <script src> 读取）
  // 注意: 全部10家都进列表——抓不到的留空行，正好供人在暗门里手工补录
  const pendingJs = {
    date: TODAY,
    players: results.map((r) => {
      const p = r.parsed || {};
      const empty = !Object.values(p).some((v) => v != null);
      return { name: r.name, dataDate: r.dataDate || null,
               note: r.note || (r.error ? `抓取失败: ${r.error.slice(0, 60)}` : (empty ? '本期未抓到，可手工补录' : null)),
               disb: p.disbYTD_usd ?? null, out: p.outstanding_usd ?? null,
               tot: p.totalBorrowers ?? null, act: p.activeBorrowersYTD ?? null };
    }),
  };
  atomicWriteText(path.join(__dirname, '..', 'dashboard', 'p2p-pending.js'),
    'const P2P_PENDING = ' + JSON.stringify(pendingJs, null, 2) + ';\n');

  console.log(`\nPLAYER`.padEnd(33) + 'YTD DISB'.padStart(10) + 'OUTSTAND'.padStart(10) + 'TOT BORR'.padStart(10) + 'YTD BORR'.padStart(10) + '  DATE');
  console.log('─'.repeat(85));
  for (const r of results) {
    const p = r.parsed || {};
    console.log(
      r.name.padEnd(33),
      (p.disbYTD_usd != null ? `$${p.disbYTD_usd}B` : '—').padStart(9),
      (p.outstanding_usd != null ? `$${p.outstanding_usd}B` : '—').padStart(9),
      (p.totalBorrowers != null ? `${(p.totalBorrowers / 1e6).toFixed(2)}M` : '—').padStart(9),
      (p.activeBorrowersYTD != null ? `${(p.activeBorrowersYTD / 1e6).toFixed(2)}M` : '—').padStart(9),
      ` ${r.dataDate || ''}`);
  }
  console.log(`\n─── ${okCount}/${PLAYERS.length} 家提取成功 · 已存 ${outPath} ───`);

  updatePending([{
    title: `P2P竞对批量抓取 ${TODAY}: ${okCount}/${PLAYERS.length} 家成功`,
    detail: '结构化明细已送入信贷看板"✎ 数据管理"暗门——分指标呈现、可逐格修改、一键写入',
    link: 'credit-tracker/dashboard/credit-dashboard.html',
    action: '打开看板→页脚"✎ 数据管理"→核对/修改→点"确认写入"；要永久固化再回来说一声',
  }]);
  console.log('待确认卡片已推送到首页');
  if (okCount < MIN_SUCCESS) {
    console.error(`抓取覆盖率不足：${okCount}/${PLAYERS.length}，最低要求 ${MIN_SUCCESS}；结果仅供人工复核。`);
    process.exitCode = 2;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
