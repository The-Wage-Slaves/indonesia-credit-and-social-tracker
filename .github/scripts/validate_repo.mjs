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
}

const v4Input = JSON.parse(read('stability-monitor/data/v4-shadow-input.json'));
const evidence = JSON.parse(read(`stability-monitor/data/${v4Input.evidenceFile}`));
assert(v4Input.schemaVersion === 3 && v4Input.status === 'shadow-same-date', 'V4 input is not a same-date schema-v3 shadow');
assert(v4Input.asOf === evidence.asOf, 'V4 input and evidence cutoff dates differ');
const latestWeekly = [...stabilityContext.__DATA.weekly].sort((a, b) => a.date.localeCompare(b.date)).at(-1);
assert(latestWeekly && latestWeekly.date === v4Input.asOf, 'V3 production and V4 shadow cutoff dates differ');
assert(stabilityContext.__DATA.asOf === v4Input.asOf, 'Production DATA.asOf and V4 shadow cutoff dates differ');
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
assert(comparison.official.composite === 43.4, 'Official V3 composite changed');
assert(comparison.reweightedBaseline.composite === 45.0, 'V3 same-weight baseline is invalid');
assert(comparison.shadow.composite === 46.4 && comparison.shadow.delta === 1.4, 'V4 confidence-aware shadow result is invalid');
assert(comparison.measurement.confidence === 0.659, 'V4 evidence-quality result is invalid');
assert(comparison.measurement.availabilityQuality === 0.741, 'V4 availability-quality result is invalid');
assert(comparison.measurement.freshnessQuality === 0.963, 'V4 freshness-quality result is invalid');
assert(comparison.measurement.sourceDirectness === 0.693, 'V4 source-directness result is invalid');
assert(comparison.measurement.rawTraceabilityWeight === 0.688, 'V4 raw-traceability result is invalid');
assert(comparison.triggers.level === 'normal' && comparison.triggers.active.length === 0, 'Unexpected current V4 red trigger');
assert(comparison.triggers.rules.some((rule) => rule.id === 'four_week_coercive_drop' && rule.status === 'not_evaluable'), 'First V4 snapshot must mark four-week trigger as not evaluable');

const v4History = JSON.parse(read('stability-monitor/data/v4-shadow-history.json'));
assert(v4History.schemaVersion === 1 && Array.isArray(v4History.snapshots), 'V4 history schema is invalid');
const historyDates = new Set();
for (const snapshot of v4History.snapshots) {
  assert(snapshot.confirmed === true, `V4 history snapshot is not human-confirmed: ${snapshot.date}`);
  assert(!historyDates.has(snapshot.date), `duplicate V4 history date: ${snapshot.date}`);
  historyDates.add(snapshot.date);
}
assert(historyDates.has(v4Input.asOf), 'V4 history lacks the current confirmed shadow snapshot');

const comparisonPage = read('stability-monitor/dashboard/v3-v4-comparison.html');
assert(comparisonPage.includes('../data/v4-comparison-data.js'), 'V3/V4 page does not load the local comparison data');
assert(comparisonPage.includes('V3 正式版 / V4 影子版'), 'V3/V4 page does not clearly label official versus shadow');
assert(comparisonPage.includes('../data/v4-comparison-latest.json'), 'V3/V4 page does not link the latest machine-readable result');
assert(comparisonPage.includes('../docs/V4_WEEKLY_RUNBOOK.md'), 'V3/V4 page does not link the weekly runbook');
assert(!/<script[^>]+src=["']https?:/i.test(comparisonPage), 'V3/V4 page must not load remote scripts');
assert(read('index.html').includes('stability-monitor/dashboard/v3-v4-comparison.html'), 'homepage lacks V3/V4 comparison link');

const creditSentiment = JSON.parse(read('credit-tracker/sentiment-monitor/output/credit-sentiment-pending.json'));
const creditSentimentJs = read('credit-tracker/sentiment-monitor/output/credit-sentiment-data.js').trim();
assert(creditSentimentJs.startsWith('const CREDIT_SENTIMENT = ') && creditSentimentJs.endsWith(';'), 'credit sentiment JS wrapper is invalid');
const creditSentimentFromJs = JSON.parse(creditSentimentJs.slice('const CREDIT_SENTIMENT = '.length, -1));
assert(JSON.stringify(creditSentimentFromJs) === JSON.stringify(creditSentiment), 'credit sentiment JSON and JS differ');
assert(creditSentiment.status === 'pilot-pending-human-review', 'credit sentiment output bypasses human review');
assert(creditSentiment.weeks.length === 2, 'credit sentiment pilot must contain two complete weeks');
assert(creditSentiment.weeks[0].weekStart === '2026-07-13' && creditSentiment.weeks[0].fearIndex === 63.8, 'first credit sentiment pilot week changed unexpectedly');
assert(creditSentiment.weeks[1].weekStart === '2026-07-20' && creditSentiment.weeks[1].fearIndex === 69.6, 'second credit sentiment pilot week changed unexpectedly');
assert(creditSentiment.latestAlert.level === 'red', 'Kredivo/KrediFazz pilot alert must be red');
assert(creditSentiment.latestAlert.active.some((event) => (
  event.id === 'kredivo-kredifazz-purworejo-2026-07'
  && event.hasPrimarySource
  && event.independentSourceCount >= 2
)), 'Kredivo/KrediFazz alert lacks primary and multi-source confirmation');
assert(creditSentiment.articles.every((article) => /^https:\/\//.test(article.url)), 'credit sentiment evidence must use HTTPS source URLs');

console.log('Repository invariants: OK');
