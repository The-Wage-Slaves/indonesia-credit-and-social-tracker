// 调试转储: 每家页面的完整可见文本 → results/debug_<name>.txt（用于逐家写提取规则）
import { chromium } from 'playwright';
import fs from 'fs';

const PLAYERS = [
  { name: 'AdaKami', url: 'https://www.adakami.id/about' },
  { name: 'Kredifazz', url: 'https://kredifazz.id/disclosure.html' },
  { name: 'Asetku', url: 'https://www.asetku.co.id/#/' },
  { name: 'KreditPintar', url: 'https://www.kreditpintar.com/about-us' },
  { name: 'Easycash', url: 'https://easycash.id/about/us/company-team' },
  { name: 'Julo', url: 'https://www.julo.co.id/about' },
  { name: 'Koinworks', url: 'https://koinp2p.com/' },
  { name: 'Modalku', url: 'https://app.modalku.co.id/progress' },
  { name: 'AdaPundi', url: 'https://www.adapundi.com/about/achievements' },
];

const browser = await chromium.launch({ headless: true });
if (!fs.existsSync('results')) fs.mkdirSync('results');
for (const p of PLAYERS) {
  const page = await browser.newPage();
  try {
    await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(5000);
    const text = await page.evaluate(() => document.body.innerText);
    fs.writeFileSync(`results/debug_${p.name}.txt`, text);
    console.log(`${p.name}: ${text.length} chars`);
  } catch (e) { console.log(`${p.name}: ERR ${e.message.slice(0, 50)}`); }
  await page.close();
}
await browser.close();
