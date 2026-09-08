/**
 * 看板必须真的渲染得出来——CI 绿不等于页面对。
 *
 * 2026-08-20 新增两个 driver 时，`prev` 被填成 45 和 30，而 engine.js 会把它
 * 原样渲染成「相对上期(45)」——等于在看板上断言一个从未测量过的上期值，
 * 读者会看成本周暴跌 25 分。validate_repo、单测、CI 全绿，只有把 HTML 真渲染
 * 出来才看得见。
 *
 * 本文件用最小 DOM 桩在 Node 里跑真实的 data.js + engine.js，逐个 driver 与
 * 支柱卡渲染一遍，检查：不抛错、不泄漏 undefined、prev 为空时显示「本期新设」
 * 而不是 null。
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DASH = path.join(ROOT, 'stability-monitor', 'dashboard');

const context = {
  console,
  setInterval: () => 0,
  clearInterval: () => {},
  setTimeout: () => 0,
  document: { getElementById: () => null, querySelectorAll: () => [], addEventListener: () => {} },
  window: { addEventListener: () => {} },
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(DASH, 'data.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(DASH, 'engine.js'), 'utf8'), context);

// data.js / engine.js 用的是 const 顶层声明，那是词法绑定、不会挂到 context 对象上，
// 所以要用一个表达式把它们取回来。
const { DATA, driverBlock, pillarCard, composite } = vm.runInContext(
  '({ DATA, driverBlock, pillarCard, composite })', context);

let driverCount = 0;
let newDriverCount = 0;

for (const pillar of DATA.pillars) {
  for (const driver of pillar.drivers) {
    const where = `${pillar.id}/${driver.name}`;
    let html;
    assert.doesNotThrow(() => { html = driverBlock(driver); }, `${where} 渲染抛错`);

    assert.ok(!html.includes('undefined'), `${where} 渲染出 undefined —— 缺字段`);
    assert.ok(!html.includes('相对上期(null)'),
      `${where} 渲染出「相对上期(null)」—— prev 为空时必须走新设分支`);
    assert.ok(!html.includes('NaN'), `${where} 渲染出 NaN`);

    if (driver.prev == null) {
      newDriverCount += 1;
      assert.ok(html.includes('本期新设(上期未测量)'),
        `${where} 的 prev 为空，必须明说「本期新设(上期未测量)」，` +
        '不能让读者以为上期测过');
    } else {
      assert.ok(html.includes(`相对上期(${driver.prev})`), `${where} 未渲染出上期值`);
    }
    driverCount += 1;
  }

  let card;
  assert.doesNotThrow(() => { card = pillarCard(pillar); }, `${pillar.id} 支柱卡渲染抛错`);
  assert.ok(!card.includes('undefined'), `${pillar.id} 支柱卡渲染出 undefined`);
  assert.ok(!card.includes('NaN'), `${pillar.id} 支柱卡渲染出 NaN`);
}

// 引擎自己算的综合分必须与五支柱等权平均一致——渲染层不该有第二套算法。
const expected = Math.round(
  DATA.pillars.reduce((sum, p) => sum + p.score, 0) / DATA.pillars.length,
);
assert.equal(composite(), expected,
  `引擎算出 ${composite()}，五支柱等权平均是 ${expected}`);

// ── 趋势图上的口径缝必须真的画出来 ──────────────────────────────
// 2026-09-01 回溯重调了五期汇率基数，07-07/07-16 因无 driver 级记录无法重算，
// 只能保留旧基数。图上用空心点标出这道缝。**只在 engine.js 里 grep 到
// "legacyBasis" 不算数**——那正是上一轮 prev:45 事件的教训：字符串在、
// 渲染出来的东西却是错的。所以这里把 Chart 桩起来真跑 drawWeekly。
{
  const { drawWeekly } = vm.runInContext('({ drawWeekly })', context);
  let captured = null;
  context.getComputedStyle = () => ({ getPropertyValue: () => '#1a1a17' });
  context.document.getElementById = (id) => (id === 'wk' ? {} : null);
  // engine.js 判空用 window.Chart、构造却用裸 Chart——浏览器里是同一个全局，VM 里不是。
  const ChartStub = function (ctx, cfg) { captured = cfg; this.destroy = () => {}; };
  context.window.Chart = ChartStub;
  context.Chart = ChartStub;

  assert.doesNotThrow(() => drawWeekly(), '周度趋势图渲染抛错');
  assert.ok(captured, 'drawWeekly 没有构造出图表');

  const composite = captured.data.datasets[0];
  const legacy = DATA.weekly.map((w) => w.fxBasis === 'legacy');
  assert.ok(legacy.some(Boolean), '没有任何期次标为 legacy —— 标记丢了');

  assert.ok(Array.isArray(composite.pointBackgroundColor),
    '综合线的点色不是数组 —— 空心点没生效，缝在图上看不见');
  DATA.weekly.forEach((w, i) => {
    const hollow = composite.pointBackgroundColor[i] === 'rgba(0,0,0,0)';
    assert.equal(hollow, legacy[i],
      `${w.date} 的点应${legacy[i] ? '为空心' : '为实心'}，实际相反`);
  });

  // 光有空心点没人看得懂，图注必须点名是哪两期、为什么。
  const { legacyBasisNote } = vm.runInContext('({ legacyBasisNote })', context);
  const note = legacyBasisNote();
  // 只校验括号里的点名清单——正文里还会出现回溯重调的日期(2026-09-01)，
  // 那是说明文字不是点名，拿整段做 includes 会误判。
  const listed = (note.match(/\(([^)]*)\)/) || [, ''])[1].split('、').filter(Boolean);
  // 比字符串而不是比数组：DATA 来自 vm context，它的 filter/map 造出的数组带的是
  // **VM 那个 realm 的 Array.prototype**，而 deepStrictEqual 连原型一起比——
  // 于是两边内容一模一样却判不等，报错还把两个看着相同的数组并排打出来。
  assert.equal(listed.join('、'),
    DATA.weekly.filter((x) => x.fxBasis === 'legacy').map((x) => x.date).join('、'),
    `图注点名的期次与标记不一致: ${listed.join('、')}`);
  assert.ok(/基数|口径/.test(note), '图注没说清为什么这两期不一样');
}

assert.ok(driverCount >= 25, `driver 数量异常: ${driverCount}`);
console.log(`Dashboard render: OK (${driverCount} drivers, ${newDriverCount} newly introduced)`);
