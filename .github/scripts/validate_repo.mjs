import { existsSync, readFileSync, readdirSync } from 'fs';
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
for (const marker of [
  'DASHBOARD_DATA_AS_OF',
  'parseNonNegativeNumber',
  'function ManualDataPanel',
  'function P2PPendingPanel',
  '../sentiment-monitor/output/credit-sentiment-data.js',
  'Digital Credit Fear Monitor',
]) {
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
  // hist1998Reason 里写死的「当前N」必须等于支柱分。这是给人看的读法文字，
  // 一旦落后就会在看板上讲一个与分数矛盾的故事——2026-08-20 复核时五个支柱
  // **全部**对不上（财政写49实为48、社会写55实为57），最早的已经陈旧了一个多月。
  const claimed = /当前(\d+)/.exec(pillar.hist1998Reason || '');
  if (claimed) {
    assert(Number(claimed[1]) === pillar.score,
      `${pillar.id} hist1998Reason claims 当前${claimed[1]} but the pillar score is ${pillar.score}`);
  }
}

// driver 级快照必须自洽，且最新一期必须与 data.js 一致。
// 存在意义：weekly 只存支柱分，方法论变更因此无法重放——2026-08-20 新增两个 driver 时
// 「未测量的权重原样退回、历史不变」只能写在文字里，没有任何东西能重算验证；同一次干跑中
// 2026-07-07 的货币支柱已经反推不出来（反推44、归档42）。从 2026-08-20 起逐期归档，
// 往后的方法论变更就可以逐期重放。
{
  const dir = 'stability-monitor/data/driver-snapshots';
  const files = readdirSync(path.join(root, dir)).filter((f) => f.endsWith('.json')).sort();
  assert(files.length > 0, 'driver-snapshots is empty; run apply_week.py snapshot');
  for (const file of files) {
    const snap = JSON.parse(read(`${dir}/${file}`));
    assert(snap.date === file.replace('.json', ''),
      `${file} records date ${snap.date}`);
    for (const [id, pillar] of Object.entries(snap.pillars)) {
      const weightSum = pillar.drivers.reduce((sum, d) => sum + d.weight, 0);
      assert(Math.abs(weightSum - 1) < 1e-9,
        `${file} ${id} driver weights sum to ${weightSum}`);
      const computed = Math.round(
        pillar.drivers.reduce((sum, d) => sum + d.score * d.weight, 0) + (pillar.pillarAdj || 0),
      );
      assert(computed === pillar.score,
        `${file} ${id} snapshot recomputes to ${computed} but records ${pillar.score} — ` +
        'an archived snapshot that cannot reproduce its own pillar score is worse than none');
    }
  }
  // 最新快照必须就是当期 data.js，否则归档会悄悄落后一期。
  const live = stabilityContext.__DATA;
  const latest = JSON.parse(read(`${dir}/${files[files.length - 1]}`));
  assert(latest.date === live.asOf,
    `latest driver snapshot is ${latest.date} but data.js asOf is ${live.asOf} (run apply_week.py snapshot)`);
  for (const pillar of live.pillars) {
    const archived = latest.pillars[pillar.id];
    assert(archived, `latest snapshot lacks pillar ${pillar.id}`);
    assert(archived.score === pillar.score,
      `latest snapshot ${pillar.id}=${archived.score} but data.js says ${pillar.score}`);
    assert(archived.drivers.length === pillar.drivers.length,
      `latest snapshot ${pillar.id} has ${archived.drivers.length} drivers; data.js has ${pillar.drivers.length}`);
  }
}

// 导出文件必须与 data.js 同步。它由 apply_week.py export 生成、供「接入自动更新」
// 那条路径使用；2026-08-20 复核时它停在 07-30、落后 5 期，而没有任何东西报错。
{
  const exported = JSON.parse(read('stability-monitor/data/dashboard-data.json'));
  const live = stabilityContext.__DATA;
  assert(exported.asOf === live.asOf,
    `dashboard-data.json asOf ${exported.asOf} is stale; data.js is ${live.asOf} (run apply_week.py export)`);
  assert(exported.weekly.length === live.weekly.length,
    `dashboard-data.json has ${exported.weekly.length} weekly points; data.js has ${live.weekly.length}`);
  const lastExported = JSON.stringify(exported.weekly.at(-1));
  const lastLive = JSON.stringify(live.weekly.at(-1));
  assert(lastExported === lastLive,
    `dashboard-data.json latest snapshot differs from data.js: ${lastExported} vs ${lastLive}`);
}

const v4Input = JSON.parse(read('stability-monitor/data/v4-shadow-input.json'));
const evidence = JSON.parse(read(`stability-monitor/data/${v4Input.evidenceFile}`));
assert(v4Input.schemaVersion === 3 && v4Input.status === 'shadow-same-date', 'V4 input is not a same-date schema-v3 shadow');
assert(v4Input.asOf === evidence.asOf, 'V4 input and evidence cutoff dates differ');
const latestWeekly = [...stabilityContext.__DATA.weekly].sort((a, b) => a.date.localeCompare(b.date)).at(-1);
assert(latestWeekly && latestWeekly.date === v4Input.asOf, 'V3 production and V4 shadow cutoff dates differ');
assert(stabilityContext.__DATA.asOf === v4Input.asOf, 'Production DATA.asOf and V4 shadow cutoff dates differ');

// V3 与 V4 必须对同一个汇率读数出同一个分。
//
// 2026-09-01 周更把 V3 的汇率 driver 由 38 改成 55（基数口径纠错），但 V4 证据档里的
// currency.fx_stress 仍写着 38 / "-10.2 percent"。两边同一天、同一个汇率、两个分数，
// CI 全绿、单测全绿、影子指数照常出 46.1 —— 没有任何东西发现。这是本项目第 N 次
// 「一边修了、另一边忘了」，所以把它钉成不变量。
{
  const fxDriver = stabilityContext.__DATA.pillars
    .find((pillar) => pillar.id === 'currency')?.drivers
    .find((driver) => driver.name.startsWith('汇率'));
  assert(fxDriver, 'currency pillar has no 汇率 driver');
  const observations = Array.isArray(evidence.observations)
    ? evidence.observations : Object.values(evidence.observations ?? {});
  const fxObservation = observations.find((o) => o.primaryOwner === 'currency.fx_stress');
  assert(fxObservation, 'V4 evidence has no currency.fx_stress observation');
  const inputs = fxObservation.scoreInputs ?? [];
  assert(inputs.length > 0, 'currency.fx_stress observation has no scoreInputs');
  for (const input of inputs) {
    assert(input.score === fxDriver.score,
      `V3 汇率 driver = ${fxDriver.score} but V4 fx_stress scoreInput = ${input.score} ` +
      '— 同一天同一个汇率不能有两个分。改了一边就要改另一边。');
  }
}
assert(Math.abs(Object.values(v4Input.officialPillarWeights).reduce((sum, value) => sum + value, 0) - 1) < 1e-9, 'V4 official baseline weights do not sum to 1');
assert(Object.values(v4Input.officialPillarWeights).every((value) => value === 0.2), 'V3 official baseline must remain equal weighted');
assert(JSON.stringify(v4Input.pillarWeights) === JSON.stringify({
  fiscal: 0.25,
  currency: 0.25,
  institutions: 0.15,
  social: 0.25,
  coercive: 0.1,
}), 'V4 proposed pillar weights differ from the approved 25/25/15/25/10 structure');
assert(JSON.stringify(v4Input.confidenceFactors) === JSON.stringify({
  high: 1,
  medium: 0.75,
  low: 0.4,
  missing: 0,
}), 'V4 confidence factors differ from the approved scale');
assert(JSON.stringify(v4Input.sourceDirectnessFactors) === JSON.stringify({
  primary: 1,
  secondary: 0.85,
  internal_review: 0.65,
  crawler: 0.7,
}), 'V4 source-directness factors differ from the approved scale');
assert(v4Input.missingDataPolicy.publishCoverageFloor === 0.75, 'V4 publish coverage floor changed');
assert(v4Input.missingDataPolicy.carryForwardRequiresReason === true, 'V4 stale carry-forward must require a reason');
assert(v4Input.redTriggers.coerciveScoreFloor === 25, 'V4 coercive score-floor trigger changed');
assert(v4Input.redTriggers.fourWeekDrop === 10, 'V4 four-week drop trigger changed');
assert(v4Input.redTriggers.minimumIndependentSources === 2, 'V4 red triggers must require two independent sources');

const allowedTriggerTypes = new Set([
  ...v4Input.redTriggers.armedEventTypes,
  ...v4Input.redTriggers.disciplineEventTypes,
]);
const triggerSignalIds = new Set();
for (const signal of evidence.triggerSignals || []) {
  assert(signal.id && !triggerSignalIds.has(signal.id), `duplicate V4 trigger signal: ${signal.id}`);
  triggerSignalIds.add(signal.id);
  assert(['pending', 'confirmed', 'rejected'].includes(signal.verificationStatus), `invalid V4 trigger status: ${signal.id}`);
  assert(Number.isInteger(signal.independentSourceCount), `V4 trigger lacks source count: ${signal.id}`);
  assert(allowedTriggerTypes.has(signal.eventType), `invalid V4 trigger event type: ${signal.id}`);
}

const observations = new Map();
for (const observation of evidence.observations || []) {
  assert(observation.id && !observations.has(observation.id), `duplicate V4 evidence id: ${observation.id}`);
  assert(['high', 'medium', 'low'].includes(observation.confidence), `invalid evidence confidence: ${observation.id}`);
  assert(observation.primaryOwner, `V4 evidence lacks primaryOwner: ${observation.id}`);
  assert(observation.observedAt && observation.retrievedAt, `V4 evidence lacks freshness dates: ${observation.id}`);
  assert(Number.isInteger(observation.maxAgeDays) && observation.maxAgeDays > 0, `V4 evidence has invalid maxAgeDays: ${observation.id}`);
  assert(Object.hasOwn(v4Input.sourceDirectnessFactors, observation.sourceType), `V4 evidence has invalid sourceType: ${observation.id}`);
  assert(observation.sourceFamily && observation.underlyingEventId, `V4 evidence lacks source/event lineage: ${observation.id}`);
  observations.set(observation.id, observation);
}
const referencedEvidence = new Set();
const allowedScoreMethods = new Set(['evidence_weighted', 'rating_ladder', 'bridge', 'missing']);
assert(Math.abs(Object.values(v4Input.pillarWeights).reduce((sum, value) => sum + value, 0) - 1) < 1e-9, 'V4 pillar weights do not sum to 1');
for (const pillar of v4Input.pillars) {
  assert(latestWeekly.scores[pillar.id] === pillar.v3Score, `V4 bridge V3 score differs from production: ${pillar.id}`);
  assert(pillar.drivers.length >= 4 && pillar.drivers.length <= 5, `V4 pillar must have 4-5 drivers: ${pillar.id}`);
  assert(Math.abs(pillar.drivers.reduce((sum, driver) => sum + driver.weight, 0) - 1) < 1e-9, `V4 driver weights do not sum to 1: ${pillar.id}`);
  for (const driver of pillar.drivers) {
    const owner = `${pillar.id}.${driver.id}`;
    const ids = driver.observationIds || [];
    assert(allowedScoreMethods.has(driver.scoreMethod), `invalid V4 score method: ${owner}`);
    if (driver.scoreMethod !== 'missing') {
      assert(ids.length > 0, `scored V4 driver lacks evidence: ${owner}`);
    } else {
      assert(driver.missingReason, `missing V4 driver lacks a reason: ${owner}`);
    }
    if (driver.scoreMethod === 'bridge') {
      assert(Number.isFinite(driver.bridgeScore), `bridge V4 driver lacks bridgeScore: ${owner}`);
    } else {
      assert(!Object.hasOwn(driver, 'bridgeScore'), `non-bridge V4 driver contains bridgeScore: ${owner}`);
    }
    if (driver.evidenceClass === 'statistical') {
      assert(['evidence_weighted', 'missing'].includes(driver.scoreMethod), `statistical V4 driver uses subjective bridge: ${owner}`);
    }
    for (const id of ids) {
      assert(observations.has(id), `unknown V4 evidence id: ${id}`);
      const observation = observations.get(id);
      assert(observation.primaryOwner === owner, `V4 evidence owner mismatch: ${id}`);
      assert(!referencedEvidence.has(id), `V4 evidence double counted: ${id}`);
      if (driver.scoreMethod === 'evidence_weighted') {
        assert(Array.isArray(observation.scoreInputs) && observation.scoreInputs.length > 0, `raw scoreInputs missing: ${id}`);
        const scoreInputWeight = observation.scoreInputs.reduce((sum, input) => {
          assert(input.metric && input.unit && input.transform, `incomplete scoreInput provenance: ${id}`);
          assert(Object.hasOwn(input, 'value') && Number.isFinite(input.score), `invalid scoreInput value/score: ${id}`);
          return sum + input.weight;
        }, 0);
        assert(Math.abs(scoreInputWeight - 1) < 1e-9, `scoreInput weights do not sum to 1: ${id}`);
      }
      referencedEvidence.add(id);
    }
  }
}
assert(referencedEvidence.size === observations.size, 'V4 evidence ledger contains unreferenced observations');

const comparison = JSON.parse(read(`stability-monitor/data/v4-comparison-${v4Input.asOf}.json`));
const comparisonLatest = JSON.parse(read('stability-monitor/data/v4-comparison-latest.json'));
const comparisonJs = read('stability-monitor/data/v4-comparison-data.js').trim();
assert(comparisonJs.startsWith('const V4_COMPARISON = ') && comparisonJs.endsWith(';'), 'V4 comparison JS wrapper is invalid');
const comparisonFromJs = JSON.parse(comparisonJs.slice('const V4_COMPARISON = '.length, -1));
assert(JSON.stringify(comparisonFromJs) === JSON.stringify(comparison), 'V4 comparison JSON and JS differ');
assert(JSON.stringify(comparisonLatest) === JSON.stringify(comparison), 'V4 latest and dated comparison JSON differ');
assert(comparison.asOf === v4Input.asOf && comparison.status === 'review-only-shadow', 'V4 comparison metadata is invalid');
// 这些数字每周都会合法变化，钉死某一期的值会让每次周更都红灯（2026-08-04 踩过）。
// 改为校验内部一致性与取值域：算得对、与生产口径一致、落在合法区间。
const officialPillarScores = Object.values(comparison.official.scores ?? {});
assert(officialPillarScores.length === 5, 'V3 official comparison must carry five pillars');
const officialMean = officialPillarScores.reduce((sum, value) => sum + value, 0) / 5;
assert(
  Math.abs(comparison.official.composite - officialMean) < 0.05,
  `Official V3 composite ${comparison.official.composite} is not the equal-weight mean ${officialMean.toFixed(2)}`,
);
assert(
  comparison.official.displayScore === Math.round(officialMean),
  'V4 comparison displayScore must be the rounded official composite',
);
for (const pillar of stabilityContext.__DATA.pillars) {
  assert(
    comparison.official.scores[pillar.id] === pillar.score,
    `V4 comparison official ${pillar.id} drifted from production data.js`,
  );
}
assert(
  comparison.shadow.composite > 0 && comparison.shadow.composite < 100,
  'V4 shadow composite out of range',
);
// delta is computed from unrounded composites, while the two displayed
// composites are independently rounded to one decimal. Their visible
// subtraction may therefore differ from delta by up to 0.1.
assert(
  Math.abs(comparison.shadow.delta - (comparison.shadow.composite - comparison.reweightedBaseline.composite)) <= 0.11,
  'V4 shadow delta must equal shadow minus same-weight baseline within display rounding',
);
for (const [name, value] of Object.entries(comparison.measurement)) {
  if (typeof value !== 'number') continue;
  assert(value >= 0 && value <= 1, `V4 measurement ${name} out of [0,1]: ${value}`);
}
assert(
  comparison.measurement.confidence <= comparison.measurement.availabilityQuality,
  'V4 confidence cannot exceed availability quality',
);
assert(comparison.triggers.level === 'normal' && comparison.triggers.active.length === 0, 'Unexpected current V4 red trigger');
// 四周骤降触发器：校验状态与其自身观测量一致，**不得把某一期的状态写死**。
// 原断言要求 status 恒为 'not_evaluable'，那只在影子历史不足四周时成立；2026-08-20
// 历史首次跨过四周后它必然误报，属于把当期状态当成不变量的老毛病。
const rapidDrop = comparison.triggers.rules.find((rule) => rule.id === 'four_week_coercive_drop');
assert(rapidDrop, 'V4 triggers must include four_week_coercive_drop');
const rapidObserved = rapidDrop.observed || {};
if (rapidDrop.status === 'not_evaluable') {
  assert(!rapidObserved.baselineDate, 'not_evaluable requires that no four-week baseline exists');
} else {
  assert(typeof rapidObserved.drop === 'number' && rapidObserved.baselineDate, 'evaluable rapid-drop rule must report a baseline and a drop');
  const crossed = rapidObserved.drop >= v4Input.redTriggers.fourWeekDrop;
  const reviewed = rapidObserved.reviewConfirmed === true
    && rapidObserved.independentSourceCount >= v4Input.redTriggers.minimumIndependentSources;
  const expected = crossed ? (reviewed ? 'active' : 'pending_confirmation') : 'clear';
  assert(rapidDrop.status === expected, `four_week_coercive_drop status ${rapidDrop.status} contradicts its own observation (expected ${expected})`);
}

const v4History = JSON.parse(read('stability-monitor/data/v4-shadow-history.json'));
assert(v4History.schemaVersion === 1 && Array.isArray(v4History.snapshots), 'V4 history schema is invalid');
const historyDates = new Set();
for (const snapshot of v4History.snapshots) {
  assert(snapshot.confirmed === true, `V4 history snapshot is not human-confirmed: ${snapshot.date}`);
  assert(!historyDates.has(snapshot.date), `duplicate V4 history date: ${snapshot.date}`);
  historyDates.add(snapshot.date);
}
// A review PR may carry a same-date shadow comparison before the owner confirms it.
 // Confirmed history is append-only: if the current date is present it has already
 // passed the strict confirmed=true gate above; otherwise the comparison remains
 // review-only and must not be smuggled into history as human-confirmed.
 if (!historyDates.has(v4Input.asOf)) {
   assert(
     comparison.status === 'review-only-shadow',
     'Unconfirmed current V4 comparison must remain review-only',
   );
 }

const comparisonPage = read('stability-monitor/dashboard/v3-v4-comparison.html');
assert(comparisonPage.includes('../data/v4-comparison-data.js'), 'V3/V4 page does not load the local comparison data');
const homepage = read('index.html');
for (const [file, content] of [
  ['index.html', homepage],
  ['stability-monitor/dashboard/v3-v4-comparison.html', comparisonPage],
]) {
  assert(
    content.includes('全景等权版') && content.includes('数据置信版'),
    `${file} must use the approved public methodology names`,
  );
  for (const obsolete of ['V3 正式版 / V4 影子版', 'V3 正式 / V4 影子', 'V3 正式综合分', 'V4 影子综合分']) {
    assert(!content.includes(obsolete), `${file} regressed to obsolete public label: ${obsolete}`);
  }
}
assert(comparisonPage.includes('../data/v4-comparison-latest.json'), 'V3/V4 page does not link the latest machine-readable result');
assert(comparisonPage.includes('../docs/V4_WEEKLY_RUNBOOK.md'), 'V3/V4 page does not link the weekly runbook');
assert(!/<script[^>]+src=["']https?:/i.test(comparisonPage), 'V3/V4 page must not load remote scripts');
assert(homepage.includes('stability-monitor/dashboard/v3-v4-comparison.html'), 'homepage lacks V3/V4 comparison link');

const automationCatalog = read('AUTOMATIONS.md');
for (const marker of [
  'daily_alert.py',
  'credit_daily_alert.py',
  'weekly-credit-sentiment.yml',
  'street_heat.py',
  'macro_monitor.py',
  'update_credit.py',
  'p2p-scraper/scraper.mjs',
  'FEISHU_WEBHOOK_URL',
]) {
  assert(automationCatalog.includes(marker), `automation catalog missing ${marker}`);
}
const weeklyCreditWorkflow = read('.github/workflows/weekly-credit-sentiment.yml');
assert(weeklyCreditWorkflow.includes('DEEPSEEK_API_KEY'), 'weekly credit workflow does not expose the optional DeepSeek secret');
assert(/cron: "\d+ \d+ \* \* 2"/.test(weeklyCreditWorkflow), 'weekly monitoring must run on Tuesday');
assert(weeklyCreditWorkflow.includes('street_heat.py'), 'weekly monitoring must include stability street heat');
assert(weeklyCreditWorkflow.includes('STREET_STATUS: ${{ steps.street.outcome }}'), 'weekly card must receive the current street-heat outcome');
assert(weeklyCreditWorkflow.includes('cloud_publish.py weekly'), 'weekly monitoring must use the unified publisher');
const dailyRiskWorkflow = read('.github/workflows/daily-risk-alerts.yml');
assert(dailyRiskWorkflow.includes('daily_alert.py --no-push'), 'daily workflow lacks stability alert collection');
assert(dailyRiskWorkflow.includes('credit_daily_alert.py --write-output'), 'daily workflow lacks credit alert collection');
const monthlyCreditWorkflow = read('.github/workflows/monthly-credit-data.yml');
assert(monthlyCreditWorkflow.includes('update_credit.py'), 'monthly workflow lacks BI/OJK collection');
// 银行侧换源到 SEKI I.4（2026-08-24）：SSKI Tabel_17 被 BI 冻结在 2025.12。
// 这类「建好了但忘了接线」是本仓库反复出现的失败模式（DeepSeek key、已确认表都栽过），
// 所以采集器和它的产物路径都要在这里钉住。
assert(monthlyCreditWorkflow.includes('seki_bank_credit.py'),
  'monthly workflow lacks BI SEKI I.4 bank-credit collection');
assert(monthlyCreditWorkflow.includes('credit-tracker/data/seki-bank-credit.json'),
  'monthly workflow does not stage the SEKI bank-credit artifact');
assert(monthlyCreditWorkflow.includes('macro-monitor/macro_monitor.py'), 'monthly workflow lacks national macro collection');
assert(monthlyCreditWorkflow.includes('BPS_API_KEY'), 'monthly macro collection does not expose BPS API secret');
assert(monthlyCreditWorkflow.includes('p2p-scraper'), 'monthly workflow lacks P2P collection');
// cron 定在整点会被 GitHub 的排队高峰吃掉：2026-07-31~08-02 连续三天延迟
// 192/192/200 分钟，本该 10:00 的日频警报 13:12 才送达。把「不得定在 :00」
// 固化下来，避免以后有人为了「看起来整齐」改回去。
for (const [name, workflow] of [
  ['daily-risk-alerts', dailyRiskWorkflow],
  ['weekly-credit-sentiment', weeklyCreditWorkflow],
  ['monthly-credit-data', monthlyCreditWorkflow],
]) {
  const crons = [...workflow.matchAll(/cron:\s*"(\S+)\s/g)].map((match) => match[1]);
  assert(crons.length > 0, `${name} lost its schedule trigger`);
  for (const minute of crons) {
    assert(
      minute !== '0',
      `${name} schedules on the hour; GitHub queues those worst (measured +192min). Use an off-hour minute.`,
    );
  }
}
// PR #10 曾给三个采集工作流加过 push 触发，导致每次提交都跑一遍采集、连续失败，
// 并挤掉了当天排队中的定时运行。这些工作流只能由 schedule / workflow_dispatch 触发。
for (const [name, workflow] of [
  ['daily-risk-alerts', dailyRiskWorkflow],
  ['weekly-credit-sentiment', weeklyCreditWorkflow],
  ['monthly-credit-data', monthlyCreditWorkflow],
]) {
  const header = workflow.slice(0, workflow.indexOf('jobs:'));
  assert(
    !/^\s*push:/m.test(header),
    `${name} must not run on push; collectors are schedule/dispatch only`,
  );
}
for (const [name, workflow] of [
  ['daily-risk-alerts', dailyRiskWorkflow],
  ['weekly-credit-sentiment', weeklyCreditWorkflow],
  ['monthly-credit-data', monthlyCreditWorkflow],
]) {
  assert(!/\nenv:\s*\n\s*jobs:/.test(workflow), `${name} contains an empty top-level env mapping`);
}
const cloudPublisher = read('.github/scripts/cloud_publish.py');
// 卡片中文化只在 enrich_zh() 拿到 DEEPSEEK_API_KEY 时生效，拿不到时静默退回印尼语
// 原文而不报错。这个组合已经两次导致「看起来修好了、云端其实没生效」，所以把
// 「渲染事件的 cadence 必须把 key 传进 cloud_publish 步骤」固化为不变量。
for (const [name, workflow] of [
  ['daily-risk-alerts', dailyRiskWorkflow],
  ['weekly-credit-sentiment', weeklyCreditWorkflow],
]) {
  // 锚定 run: 行本身（注释里也出现文件名，会把窗口挪到 env 之前），再回溯到该 step
  // 自己的 `- name:` 边界。用固定字符窗口会读到上一个 step 的 env 而假通过。
  const at = workflow.indexOf('run: python .github/scripts/cloud_publish.py');
  assert(at > 0, `${name} must invoke cloud_publish.py`);
  const stepStart = workflow.lastIndexOf('\n      - name:', at);
  assert(stepStart > 0, `${name} publish step must be a named step`);
  assert(
    workflow.slice(stepStart, at).includes('DEEPSEEK_API_KEY'),
    `${name} must pass DEEPSEEK_API_KEY to cloud_publish or cards silently fall back to Indonesian`,
  );
}
assert(cloudPublisher.includes('def enrich_zh'), 'publisher must translate Indonesian headlines for Chinese readers');
assert(cloudPublisher.includes('MANUAL_ZH'), 'human-verified Chinese summaries must outrank machine output');

// 采集步骤允许 continue-on-error，因此发布步骤必须拿到本次 outcome。
const dailyPublishAt = dailyRiskWorkflow.indexOf('run: python .github/scripts/cloud_publish.py');
const dailyPublishStart = dailyRiskWorkflow.lastIndexOf('\n      - name:', dailyPublishAt);
assert(
  dailyRiskWorkflow.slice(dailyPublishStart, dailyPublishAt).includes('STABILITY_STATUS'),
  'daily publisher must receive STABILITY_STATUS to reject stale stability events',
);
const monthlyPublishAt = monthlyCreditWorkflow.indexOf('run: python .github/scripts/cloud_publish.py');
const monthlyPublishStart = monthlyCreditWorkflow.lastIndexOf('\n      - name:', monthlyPublishAt);
for (const statusName of ['INDUSTRY_STATUS', 'MACRO_STATUS', 'COMPETITOR_STATUS']) {
  assert(
    monthlyCreditWorkflow.slice(monthlyPublishStart, monthlyPublishAt).includes(statusName),
    `monthly publisher must receive ${statusName} to distinguish failure from no new month`,
  );
}

assert(cloudPublisher.includes('suppressed_normal'), 'unified publisher must silence normal observations');
assert(cloudPublisher.includes('indonesia-monitor-dashboard.zip'), 'Feishu card lacks the rolling dashboard ZIP');
assert(cloudPublisher.includes('下载最新版看板 ZIP'), 'Feishu card must explain the download action');
for (const legacyMarker of [
  'chatgpt.site',
  'PRIVATE_DASHBOARD_URL',
  'DASHBOARD_INGEST',
  'SITES_BYPASS',
  '--publish-dashboard',
  '127.0.0.1:8777',
  '打开本地看板',
]) {
  assert(!cloudPublisher.includes(legacyMarker), `publisher retained legacy delivery marker: ${legacyMarker}`);
}
for (const legacyPath of [
  'scripts/setup_local_preview.ps1',
  'scripts/install_local_preview.ps1',
  'scripts/local_preview.ps1',
  'scripts/uninstall_local_preview.ps1',
  'sites-viewer',
]) {
  assert(!existsSync(path.join(root, legacyPath)), `legacy preview path returned: ${legacyPath}`);
}
const packageBuilder = read('scripts/build_dashboard_package.py');
for (const marker of ['REQUIRED_MEMBERS', 'validate_members', '打开看板.cmd', 'dashboard-package.json']) {
  assert(packageBuilder.includes(marker), `dashboard package builder missing ${marker}`);
}
const packageWorkflow = read('.github/workflows/publish-dashboard-package.yml');
for (const marker of [
  'branches: [main]',
  'gh release upload dashboard-latest',
  '--clobber',
  'cloud_publish.py release --push',
  'FEISHU_WEBHOOK_URL',
]) {
  assert(packageWorkflow.includes(marker), `dashboard package workflow missing ${marker}`);
}
const projectMemory = read('PROJECT_MEMORY.md');
for (const marker of ['一个用户目标只对应一个 PR', 'PR #10—#13', '上下文防腐流程', '人在环是铁律']) {
  assert(projectMemory.includes(marker), `project memory missing ${marker}`);
}
assert(!cloudPublisher.includes('"title": f"周二监测'), 'weekly Feishu title must disclose cadence and purpose');
for (const marker of [
  '【每周二例行】',
  '【日频异常触发】',
  '较上周',
  '需要你决定什么',
  '确认留痕',
  '降级为观察',
  '驳回',
  '本次未出分',
]) {
  assert(cloudPublisher.includes(marker), `Feishu decision card missing ${marker}`);
}

const creditSentiment = JSON.parse(read('credit-tracker/sentiment-monitor/output/credit-sentiment-pending.json'));
const creditSentimentJs = read('credit-tracker/sentiment-monitor/output/credit-sentiment-data.js').trim();
assert(creditSentimentJs.startsWith('const CREDIT_SENTIMENT = ') && creditSentimentJs.endsWith(';'), 'credit sentiment JS wrapper is invalid');
const creditSentimentFromJs = JSON.parse(creditSentimentJs.slice('const CREDIT_SENTIMENT = '.length, -1));
assert(JSON.stringify(creditSentimentFromJs) === JSON.stringify(creditSentiment), 'credit sentiment JSON and JS differ');
assert(creditSentiment.status === 'pilot-pending-human-review', 'credit sentiment output bypasses human review');
assert(creditSentiment.schemaVersion === 2, 'credit sentiment output must use the news/social v2 schema');
assert(creditSentiment.weeks.length === 2, 'credit sentiment pilot must contain two complete weeks');
assert(creditSentiment.weeks[0].weekStart === '2026-07-13' && creditSentiment.weeks[0].fearIndex === 65.2, 'first credit sentiment v2 pilot week changed unexpectedly');
assert(creditSentiment.weeks[1].weekStart === '2026-07-20' && creditSentiment.weeks[1].fearIndex === 69.9, 'second credit sentiment v2 pilot week changed unexpectedly');
assert(Object.values(creditSentiment.methodology.componentWeights).reduce((sum, value) => sum + value, 0) === 1, 'credit sentiment v2 weights must sum to one');
for (const source of ['google_news', 'media_rss', 'gdelt', 'google_trends', 'kaskus', 'youtube', 'reddit']) {
  assert(creditSentiment.sourceCatalog[source], `credit sentiment v2 lacks required source channel: ${source}`);
}
assert(creditSentiment.weeks.every((week) => (
  week.engines?.news
  && week.engines?.social
  && week.dataStatus === 'provisional-partial-coverage'
)), 'reviewed news-only fixture must disclose unavailable social coverage');
assert(creditSentiment.weeks.every((week) => week.engines.social.score === null), 'missing social evidence must not be scored as calm');
assert(creditSentiment.latestAlert.level === 'red', 'Kredivo/KrediFazz pilot alert must be red');
assert(creditSentiment.latestAlert.active.some((event) => (
  event.id === 'kredivo-kredifazz-purworejo-2026-07'
  && event.hasPrimarySource
  && event.independentSourceCount >= 2
)), 'Kredivo/KrediFazz alert lacks primary and multi-source confirmation');
assert(creditSentiment.articles.every((article) => /^https:\/\//.test(article.url)), 'credit sentiment evidence must use HTTPS source URLs');

console.log('Repository invariants: OK');
