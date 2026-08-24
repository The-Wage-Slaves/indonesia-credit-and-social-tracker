// 用 Playwright 驱动 OJK Dataset 页面：数据是前端渲染 + FileSaver 导出，
// 静态抓 HTML 拿不到。只在 runner 上跑（data.ojk.go.id 从中国网络不可达）。
import { chromium } from 'playwright';

const TARGETS = [
  ['Dataset 71 · Perusahaan Pembiayaan', 'https://data.ojk.go.id/SJKPublic/Dataset/Dataset/Dataset/71'],
];

const browser = await chromium.launch();
for (const [label, url] of TARGETS) {
  const page = await browser.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0' });
  const xhr = [];
  page.on('response', async (r) => {
    const u = r.url();
    if (u === url || /\.(png|jpg|svg|css|woff2?|ico)$/i.test(u)) return;
    let size = 0, sample = '';
    try { const b = await r.body(); size = b.length; sample = b.toString('utf8').slice(0, 300); } catch {}
    xhr.push({ status: r.status(), method: r.request().method(), url: u.slice(0, 150), size, sample });
  });
  console.log(`\n${'='.repeat(74)}\n### ${label}\n${url}`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForTimeout(6000);

  console.log(`  --- 网络请求 (${xhr.length}) ---`);
  for (const r of xhr) {
    console.log(`    ${r.method} ${r.status} ${r.size.toLocaleString()}B  ${r.url}`);
    if (r.size > 400 && !/\.js$/i.test(r.url)) console.log(`      样本: ${r.sample.replace(/\s+/g, ' ').slice(0, 220)}`);
  }
  const dom = await page.evaluate(() => {
    const tables = [...document.querySelectorAll('table')].map((t) => ({
      rows: t.rows.length, cols: t.rows[0]?.cells.length ?? 0,
      head: [...(t.rows[0]?.cells ?? [])].map((c) => c.innerText.trim().slice(0, 22)),
      first: [...(t.rows[1]?.cells ?? [])].map((c) => c.innerText.trim().slice(0, 22)),
      last: [...(t.rows[t.rows.length - 1]?.cells ?? [])].map((c) => c.innerText.trim().slice(0, 22)),
    }));
    const globals = Object.keys(window).filter((k) =>
      /data|dataset|series|chart|json|tabel|table/i.test(k)).slice(0, 25);
    return { tables, globals, selects: [...document.querySelectorAll('select')].map((s) => ({
      name: s.name || s.id, options: [...s.options].slice(0, 6).map((o) => `${o.value}=${o.text.trim().slice(0, 24)}`) })) };
  });
  console.log('  --- 表格 ---');
  for (const t of dom.tables) {
    console.log(`    ${t.rows}行×${t.cols}列  表头: ${JSON.stringify(t.head)}`);
    console.log(`      首行: ${JSON.stringify(t.first)}`);
    console.log(`      末行: ${JSON.stringify(t.last)}`);
  }
  console.log('  --- 下拉选项 ---');
  for (const s of dom.selects) console.log(`    ${s.name}: ${JSON.stringify(s.options)}`);
  console.log('  --- 可疑全局变量 ---', JSON.stringify(dom.globals));
  await page.close();
}
await browser.close();
