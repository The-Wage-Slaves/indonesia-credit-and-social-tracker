/**
 * App 量级图表组件（多实例适配版）— 源自用户提供的 app-metrics-panel.zip (2026-07-17)
 * 适配改动: ① ID选择器→实例内class(支持一页挂两张卡: 下载量/月活各一) ② lockMetric 锁定指标
 * (卡内只留 按公司/按国家 切换) ③ hideCaveat(红色口径提示只在第一张卡显示) ④ 放大弹窗全局单例。
 * 「暗门」口径注记(红色来源提示/琥珀色内部数据备注/HC脚注)按原件要求完整保留。
 * 用法: window.AppMetricsPanel.mount(el, window.APP_METRICS_DATA, {lockMetric:'downloads'})
 */
(function () {
  "use strict";
  const COMPANY_PALETTE = ['#2F80ED','#F2994A','#27AE60','#EB5757','#9B51E0','#00B8D9','#F2C94C','#EB4899','#6FCF97','#2D9CDB','#BB6BD9','#F78DA7','#219653','#F2A900','#56CCF2','#8D6E63'];

  const CSS = `
  .amp-box{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:#101828}
  .amp-box .amp-title{font-size:13px;font-weight:600;color:#111827;margin:0 0 8px}
  .amp-caveat{margin:8px 0;padding:9px 12px;border-left:3px solid #d92d20;background:#fef3f2;color:#b42318;font-weight:700;font-size:12px;line-height:1.6;border-radius:0 8px 8px 0}
  .amp-note{margin:8px 0 2px;padding:8px 11px;border-left:3px solid #f79009;background:#fffaeb;color:#b54708;font-weight:600;font-size:11.5px;line-height:1.55;border-radius:0 6px 6px 0}
  .amp-controls{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:8px 0}
  .amp-seg{display:inline-flex;border:1px solid #d0d5dd;border-radius:9px;overflow:hidden}
  .amp-seg button{border:0;background:#fff;color:#667085;padding:6px 14px;font-size:12px;font-weight:700;cursor:pointer}
  .amp-seg button.on{background:#111827;color:#fff}
  .amp-controls label{font-size:12px;color:#344054;display:inline-flex;gap:5px;align-items:center;cursor:pointer}
  .amp-controls .amp-btn{border:1px solid #d0d5dd;background:#fff;border-radius:8px;padding:6px 10px;font-size:12px;font-weight:700;color:#344054;cursor:pointer}
  .amp-legend{display:flex;flex-wrap:wrap;gap:10px;margin:6px 2px 8px;font-size:11.5px;color:#344054}
  .amp-legend .item{display:inline-flex;align-items:center;gap:5px}
  .amp-legend .dot{width:9px;height:9px;border-radius:50%;display:inline-block}
  .amp-chartwrap{overflow-x:auto;background:#fff;border:1px solid #eef1f4;border-radius:12px;padding:6px}
  .amp-chart svg{min-width:900px;width:100%;height:auto;display:block}
  .amp-empty{padding:40px;text-align:center;color:#667085}
  .amp-foot{margin-top:8px;color:#667085;font-size:11px;font-style:italic}
  .amp-modal{position:fixed;inset:0;z-index:9999;background:rgba(16,24,40,.72);display:none;flex-direction:column}
  .amp-modal.open{display:flex}
  .amp-modal-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between;padding:12px 16px;background:#fff;border-bottom:1px solid #eef1f4}
  .amp-modal-bar strong{font-size:14px;color:#101828}
  .amp-modal-bar .amp-btn{border:1px solid #d0d5dd;background:#fff;border-radius:8px;padding:6px 10px;font-size:12px;cursor:pointer}
  .amp-modal-bar .amp-btn.danger{color:#fff;background:#b42318;border-color:#b42318}
  .amp-modal-body{flex:1;overflow:auto;padding:18px;text-align:center}
  .amp-modal-body svg{display:inline-block;height:auto;background:#fff;border-radius:12px;box-shadow:0 12px 34px rgba(16,24,40,.3)}`;

  let cssDone = false, modalEl = null, modalZoom = 1;
  function ensureCss() {
    if (cssDone) return; cssDone = true;
    const s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);
  }
  function ensureModal() {
    if (modalEl) return modalEl;
    const d = document.createElement('div');
    d.className = 'amp-modal';
    d.innerHTML = `<div class="amp-modal-bar"><strong class="amp-m-title">图表放大查看</strong><div>
      <button class="amp-btn amp-m-out">－ 缩小</button><span class="amp-m-label" style="font-size:12px;color:#667085">100%</span>
      <button class="amp-btn amp-m-in">＋ 放大</button><button class="amp-btn amp-m-fit">适应宽度</button>
      <button class="amp-btn amp-m-dl">下载 SVG</button><button class="amp-btn danger amp-m-close">关闭 ✕</button>
    </div></div><div class="amp-modal-body"></div>`;
    document.body.appendChild(d);
    const body = d.querySelector('.amp-modal-body');
    const fit = () => { const svg = body.querySelector('svg'); if (!svg) return;
      const avail = Math.max(320, body.clientWidth - 4);
      svg.style.minWidth = '0'; svg.style.width = (avail * modalZoom) + 'px'; svg.style.height = 'auto';
      d.querySelector('.amp-m-label').textContent = Math.round(modalZoom * 100) + '%'; };
    const setZ = z => { modalZoom = Math.min(4, Math.max(.3, z)); fit(); };
    const close = () => { d.classList.remove('open'); body.innerHTML = ''; };
    d.querySelector('.amp-m-close').onclick = close;
    d.querySelector('.amp-m-in').onclick = () => setZ(modalZoom * 1.25);
    d.querySelector('.amp-m-out').onclick = () => setZ(modalZoom * .8);
    d.querySelector('.amp-m-fit').onclick = () => setZ(1);
    d.querySelector('.amp-m-dl').onclick = () => { const svg = body.querySelector('svg'); if (!svg) return;
      const blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml;charset=utf-8' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'app_metrics_chart.svg'; a.click(); };
    body.addEventListener('click', e => { if (e.target === body) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (d.classList.contains('open')) fit(); });
    modalEl = { el: d, body, fit };
    return modalEl;
  }

  function mount(root, DATA, options) {
    ensureCss();
    const opts = options || {};
    const state = DATA;
    const ui = { metric: opts.lockMetric || opts.defaultMetric || 'downloads',
                 viewMode: opts.defaultView || 'company', sortByTotal: opts.sort !== false };
    const M = () => state.metrics[ui.metric];
    const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const wan = v => { const n = Number(v) || 0; if (!n) return '0'; const w = n / 10000, a = Math.abs(w); return (a >= 10 ? Math.round(w) : Math.round(w * 10) / 10) + '万'; };
    const getVal = (co, ct, p) => Number(((M().values[co] || {})[ct] || {})[p]) || 0;
    const companyTotal = co => state.countries.reduce((s, ct) => s + state.periods.reduce((t, p) => t + getVal(co, ct.name, p), 0), 0);
    const countryTotal = nm => state.companies.reduce((s, co) => s + state.periods.reduce((t, p) => t + getVal(co, nm, p), 0), 0);
    const companyColor = nm => COMPANY_PALETTE[Math.max(0, state.companies.indexOf(nm)) % COMPANY_PALETTE.length];
    const growthPct = (a, b) => a > 0 ? (b - a) / a * 100 : null;
    const growthColor = g => g > 0.05 ? '#067647' : (g < -0.05 ? '#b42318' : '#98a2b3');
    const sp = p => p.replace('20', '');
    const orderedCompanies = () => ui.sortByTotal ? [...state.companies].sort((a, b) => companyTotal(b) - companyTotal(a)) : state.companies;
    const orderedCountries = () => ui.sortByTotal ? [...state.countries].sort((a, b) => countryTotal(b.name) - countryTotal(a.name)) : state.countries;
    function niceMax(v) { if (!v) return 100000; const p = v * 1.08, m = Math.pow(10, Math.floor(Math.log10(p))), n = p / m; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * m; }

    const meta = state.meta || {};
    root.classList.add('amp-box');
    root.innerHTML = `
      ${opts.title ? `<div class="amp-title">${esc(opts.title)}</div>` : ''}
      ${(!opts.hideCaveat && meta.note_red) ? `<div class="amp-caveat">${esc(meta.note_red)}</div>` : ''}
      <div class="amp-controls">
        <div class="amp-seg amp-view"><button data-view="company" class="on">按公司</button><button data-view="country">按国家</button></div>
        <label><input type="checkbox" class="amp-sort" checked> 按总量排序</label>
        <button class="amp-btn amp-zoom">⤢ 放大查看</button>
      </div>
      <div class="amp-legend"></div>
      <div class="amp-chartwrap"><div class="amp-chart"></div></div>
      <div class="amp-note"></div>
      <div class="amp-foot">${esc(meta.hc_footnote || '')}</div>`;
    const elChart = root.querySelector('.amp-chart'), elLegend = root.querySelector('.amp-legend'),
          elNote = root.querySelector('.amp-note');

    function renderLegend() {
      const items = ui.viewMode === 'country'
        ? orderedCompanies().map(co => ({ name: co, color: companyColor(co) }))
        : orderedCountries().map(c => ({ name: c.name, color: c.color }));
      elLegend.innerHTML = items.map(c => `<span class="item"><span class="dot" style="background:${esc(c.color)}"></span>${esc(c.name)}</span>`).join('');
    }
    function renderNote() {
      const txt = meta[ui.metric === 'mau' ? 'note_amber_mau' : 'note_amber_downloads'] || '';
      elNote.textContent = txt; elNote.style.display = txt ? '' : 'none';
    }
    function renderChart() {
      const m = M(), byCountry = ui.viewMode === 'country';
      let groups, segments, valOf;
      if (!byCountry) {
        groups = orderedCompanies().map(co => ({ name: co }));
        segments = orderedCountries().map(ct => ({ name: ct.name, color: ct.color }));
        valOf = (g, s, p) => getVal(g.name, s.name, p);
      } else {
        groups = orderedCountries().map(ct => ({ name: ct.name }));
        segments = orderedCompanies().map(co => ({ name: co, color: companyColor(co) }));
        valOf = (g, s, p) => getVal(s.name, g.name, p);
      }
      if (!groups.length || !segments.length || !state.periods.length) { elChart.innerHTML = '<div class="amp-empty">无数据</div>'; return; }
      const width = Math.max(1200, 240 + groups.length * (state.periods.length * 60 + 90));
      const height = 720, margin = { top: 88, right: 36, bottom: 140, left: 104 };
      const innerW = width - margin.left - margin.right, innerH = height - margin.top - margin.bottom;
      const barTotals = {}; let localMax = 0;
      groups.forEach(g => state.periods.forEach(p => { let s = 0; segments.forEach(seg => s += valOf(g, seg, p)); barTotals[g.name + '|' + p] = s; localMax = Math.max(localMax, s); }));
      const yMax = niceMax(localMax), bottomY = margin.top + innerH;
      const groupW = innerW / Math.max(1, groups.length);
      const barW = Math.min(42, Math.max(16, groupW / Math.max(1, state.periods.length) * .45));
      const barGap = Math.min(28, Math.max(10, groupW / Math.max(1, state.periods.length) * .22));
      const dimWord = byCountry ? '国家' : '公司', segWord = byCountry ? '公司' : '国家';
      const title = `${esc(m.label)} · 按${dimWord}`;
      const subtitle = `${state.periods.join('、')}｜按${dimWord}分组、${segWord}分段（绝对值）｜${groups.length} 组`;
      const P = [];
      P.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}">`);
      P.push(`<rect width="${width}" height="${height}" fill="#fff"/>`);
      P.push(`<text x="${width/2}" y="32" text-anchor="middle" font-size="20" font-weight="800" fill="#101828">${title}</text>`);
      P.push(`<text x="${width/2}" y="60" text-anchor="middle" font-size="13" fill="#667085">${esc(subtitle)}</text>`);
      for (let i = 0; i <= 10; i++) { const y = bottomY - (i / 10) * innerH;
        P.push(`<line x1="${margin.left}" y1="${y}" x2="${width-margin.right}" y2="${y}" stroke="#e4e7ec" stroke-dasharray="4 4"/>`);
        P.push(`<text x="${margin.left-10}" y="${y+4}" text-anchor="end" font-size="10" fill="#344054">${wan(yMax*i/10)}</text>`); }
      P.push(`<line x1="${margin.left}" y1="${bottomY}" x2="${width-margin.right}" y2="${bottomY}" stroke="#344054"/>`);
      P.push(`<line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${bottomY}" stroke="#344054"/>`);
      P.push(`<text transform="translate(26 ${margin.top+innerH/2}) rotate(-90)" text-anchor="middle" font-size="14" font-weight="700" fill="#101828">${esc(m.unitLabel||m.label)}</text>`);
      const fp = state.periods[0], lp = state.periods[state.periods.length - 1], gEnabled = state.periods.length >= 2;
      groups.forEach((g, ci) => {
        const gs = margin.left + ci * groupW, gc = gs + groupW / 2;
        const totalBars = state.periods.length * barW + (state.periods.length - 1) * barGap, firstX = gc - totalBars / 2;
        if (ci > 0) P.push(`<line x1="${gs}" y1="${margin.top+32}" x2="${gs}" y2="${bottomY}" stroke="#c7cbd1" stroke-dasharray="4 4" opacity=".7"/>`);
        state.periods.forEach((p, pi) => {
          const x = firstX + pi * (barW + barGap), bt = barTotals[g.name + '|' + p]; let cum = 0;
          segments.forEach(seg => { const v = valOf(g, seg, p); if (v <= 0) return;
            const y = bottomY - ((cum + v) / yMax) * innerH, h = Math.max(1, (v / yMax) * innerH);
            P.push(`<rect x="${x}" y="${y}" width="${barW}" height="${h}" fill="${esc(seg.color||'#98a2b3')}" rx="1.5"><title>${esc(g.name)} · ${esc(p)} · ${esc(seg.name)}：${wan(v)}</title></rect>`);
            cum += v; });
          if (bt > 0) P.push(`<text x="${x+barW/2}" y="${bottomY-(bt/yMax)*innerH-6}" text-anchor="middle" font-size="10" font-weight="800" fill="#101828">${wan(bt)}</text>`);
          P.push(`<text x="${x+barW/2}" y="${bottomY+16}" text-anchor="middle" font-size="10" fill="#344054">${esc(sp(p))}</text>`);
        });
        P.push(`<text x="${gc}" y="${bottomY+40}" text-anchor="middle" font-size="13" font-weight="800" fill="#101828">${esc(g.name)}</text>`);
        if (gEnabled) { let a = 0, b = 0; segments.forEach(s => { a += valOf(g, s, fp); b += valOf(g, s, lp); });
          const gp = growthPct(a, b);
          if (gp !== null) { const c = growthColor(gp), ar = gp > 0.05 ? '▲' : (gp < -0.05 ? '▼' : '▬');
            P.push(`<text x="${gc}" y="${bottomY+58}" text-anchor="middle" font-size="11" font-weight="800" fill="${c}">${ar} ${gp>0?'+':''}${gp.toFixed(1)}%</text>`); } }
      });
      P.push('</svg>');
      elChart.innerHTML = P.join('');
    }
    function renderAll() { renderLegend(); renderNote(); renderChart(); }

    root.querySelectorAll('.amp-view [data-view]').forEach(b => b.onclick = () => {
      ui.viewMode = b.dataset.view;
      root.querySelectorAll('.amp-view [data-view]').forEach(x => x.classList.toggle('on', x.dataset.view === ui.viewMode));
      renderAll(); });
    root.querySelector('.amp-sort').onchange = e => { ui.sortByTotal = e.target.checked; renderAll(); };
    root.querySelector('.amp-zoom').onclick = () => {
      const svg = elChart.querySelector('svg'); if (!svg) return;
      const m = ensureModal(); const c = svg.cloneNode(true);
      m.body.innerHTML = ''; m.body.appendChild(c);
      m.el.querySelector('.amp-m-title').textContent = M().label + ' · 放大查看';
      m.el.classList.add('open'); modalZoom = 1; m.fit(); };

    renderAll();
  }

  window.AppMetricsPanel = { mount };
})();
