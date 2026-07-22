import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const read = (relative) => readFileSync(path.join(root, relative), 'utf8');
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  if (entry.name === 'node_modules' || entry.name === '__pycache__') return [];
  const target = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});
for (const jsonPath of walk(root).filter((target) => target.endsWith('.json'))) {
  JSON.parse(readFileSync(jsonPath, 'utf8'));
}

const pending = JSON.parse(read('pending.json'));
const pendingJs = read('pending.js').trim();
assert(pendingJs.startsWith('const PENDING = ') && pendingJs.endsWith(';'), 'pending.js wrapper is invalid');
const pendingFromJs = JSON.parse(pendingJs.slice('const PENDING = '.length, -1));
assert(JSON.stringify(pendingFromJs) === JSON.stringify(pending), 'pending.json and pending.js differ');

for (const [board, items] of Object.entries(pending.boards || {})) {
  assert(Array.isArray(items), `pending board ${board} is not an array`);
  for (const item of items) {
    if (!item.link) continue;
    assert(!item.link.startsWith('/') && !item.link.includes('\\'), `unsafe pending link: ${item.link}`);
    assert(!/^[a-z][a-z0-9+.-]*:/i.test(item.link), `absolute pending link: ${item.link}`);
    assert(!item.link.split('/').includes('..'), `traversal pending link: ${item.link}`);
  }
}

const pagesWorkflow = read('.github/workflows/deploy-pages.yml');
assert(!pagesWorkflow.includes('pages: write'), 'Pages workflow regained write permission');
assert(!pagesWorkflow.includes("path: '.'"), 'Pages workflow publishes the whole repository');
assert(!pagesWorkflow.includes('upload-pages-artifact'), 'Pages upload must remain disabled');

const dashboard = read('credit-tracker/dashboard/credit-dashboard.html');
for (const marker of ['DASHBOARD_DATA_AS_OF', 'parseNonNegativeNumber', 'function ManualDataPanel', 'function P2PPendingPanel']) {
  assert(dashboard.includes(marker), `credit dashboard missing ${marker}`);
}

const builder = read('credit-tracker/dashboard/build_credit_html.mjs');
assert(!builder.includes('writeFileSync'), 'dashboard validator must not overwrite the source of truth');
assert(!/[A-Z]:[\\/]/.test(builder), 'dashboard validator contains a machine-specific absolute path');

const packageJson = JSON.parse(read('credit-tracker/p2p-scraper/package.json'));
assert(packageJson.dependencies.xlsx === 'https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz', 'xlsx must use the patched SheetJS package');

const stabilityContext = {};
vm.runInNewContext(`${read('stability-monitor/dashboard/data.js')}\nglobalThis.__DATA = DATA;`, stabilityContext);
for (const pillar of stabilityContext.__DATA.pillars) {
  const driverWeight = pillar.drivers.reduce((sum, driver) => sum + driver.weight, 0);
  assert(Math.abs(driverWeight - 1) < 1e-9, `${pillar.id} driver weights do not sum to 1`);
  const calculated = Math.round(
    pillar.drivers.reduce((sum, driver) => sum + driver.score * driver.weight, 0)
      + (pillar.pillarAdj || 0),
  );
  assert(calculated === pillar.score, `${pillar.id} score is ${pillar.score}; expected ${calculated}`);
  for (const driver of pillar.drivers) {
    assert(driver.updated && driver.changeReason, `${pillar.id}/${driver.name} lacks update provenance`);
    assert(Array.isArray(driver.sources) && driver.sources.length > 0, `${pillar.id}/${driver.name} lacks sources`);
  }
}

console.log('Repository invariants: OK');
