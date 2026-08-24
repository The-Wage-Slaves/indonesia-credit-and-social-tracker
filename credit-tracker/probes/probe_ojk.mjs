// 捕获 OJK GetGridCSVData 的完整请求与响应，然后原样重放并放大 take。
import { chromium } from 'playwright';
const URL_71 = 'https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71';
const b = await chromium.launch();
const page = await b.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0' });
let captured = null, body = null;
page.on('response', async (r) => {
  if (!r.url().includes('GetGridCSVData')) return;
  captured = r.url();
  try { body = (await r.body()).toString('utf8'); } catch {}
});
await page.goto(URL_71, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(8000);

if (!captured) { console.log('没抓到 GetGridCSVData'); await b.close(); process.exit(0); }
console.log('=== 完整 URL ===');
console.log(captured);
console.log('\n=== 参数拆解 ===');
for (const [k, v] of new URL(captured).searchParams) console.log(`  ${k} = ${decodeURIComponent(v)}`);
console.log('\n=== 响应前 900 字符 ===');
console.log((body || '').slice(0, 900));

// 原样重放，只放大 take
const bigger = captured.replace(/([?&]take=)\d+/, '$1' + 3000);
const res = await page.evaluate(async (u) => {
  const r = await fetch(u, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
  return { status: r.status, text: (await r.text()).slice(0, 200000) };
}, bigger);
console.log(`\n=== 放大 take=3000 重放: HTTP ${res.status} ===`);
try {
  const j = JSON.parse(res.text);
  const rows = j.data || [];
  console.log(`  totalCount=${j.totalCount}  返回 ${rows.length} 行`);
  console.log('  字段:', Object.keys(rows[0] || {}).join(', '));
  for (const f of Object.keys(rows[0] || {})) {
    const u = [...new Set(rows.map((r) => r[f]))].filter((x) => x !== null && x !== '');
    if (u.length && u.length <= 40 && typeof u[0] === 'string') {
      console.log(`  --- ${f} (${u.length}) ---`);
      u.slice(0, 40).forEach((x) => console.log(`      ${x}`));
    }
  }
  const bl = [...new Set(rows.map((r) => r.Bulan))].filter(Boolean).sort();
  if (bl.length) console.log(`  Bulan: ${bl[0]} → ${bl[bl.length - 1]} (${bl.length} 期)`);
} catch (e) { console.log('  解析失败:', res.text.slice(0, 300)); }
await b.close();
