const WEIGHT_PRESETS = {
  balanced:   { fiscal:0.20, currency:0.20, institutions:0.20, social:0.20, coercive:0.20 },
  investment: { fiscal:0.28, currency:0.28, institutions:0.18, social:0.13, coercive:0.13 },
  compliance: { fiscal:0.13, currency:0.15, institutions:0.32, social:0.12, coercive:0.28 }
};
const PRESET_NAMES = { balanced:"全景均衡", investment:"投资/敞口", compliance:"合规/牌照" };
const ICONS = {
  bank:'<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>',
  trend:'<path d="M3 7l6 6 4-4 8 8M21 17v-4h-4"/>',
  scale:'<path d="M12 3v18M7 8H3l2-4 2 4H3M21 8h-4l2-4 2 4h-4M6 21h12"/>',
  users:'<path d="M9 11a4 4 0 100-8 4 4 0 000 8zM17 11a3 3 0 100-6M3 21v-2a5 5 0 015-5h2a5 5 0 015 5v2M17 15a4 4 0 014 4v2"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM12 3v18"/>',
  chev:'<path d="M9 6l6 6-6 6"/>'
};
const SRC_CLASS = { "事实":"sFact", "引述":"sQuote", "判断":"sJudge", "待补":"sTodo" };

function alertLevel(s){
  if(s>=70)return{n:1,label:"绿·稳定",hex:"#639922",bg:"#EAF3DE",tx:"#27500A"};
  if(s>=55)return{n:2,label:"黄绿·平稳",hex:"#97C459",bg:"#EAF3DE",tx:"#3B6D11"};
  if(s>=45)return{n:3,label:"橙黄·承压",hex:"#EF9F27",bg:"#FAEEDA",tx:"#854F0B"};
  if(s>=30)return{n:4,label:"橙红·预警",hex:"#D85A30",bg:"#FAECE7",tx:"#993C1D"};
  return{n:5,label:"红·危机",hex:"#E24B4A",bg:"#FCEBEB",tx:"#791F1F"};
}
let weights = {...WEIGHT_PRESETS.balanced};
let openPillars = {};

function composite(){ let s=0,w=0; DATA.pillars.forEach(p=>{s+=p.score*weights[p.id];w+=weights[p.id];}); return Math.round(s/w); }
function icon(n,c,cls){ return `<svg class="${cls||'pIcon'}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]||''}</svg>`; }
function srcTag(tag){ return `<span class="srcTag ${SRC_CLASS[tag]||'sTodo'}">${tag}</span>`; }

function quantZone(d){
  const bands = d.bands.map(b=>{
    const hit = b.cond.includes("当前");
    return `<div class="bandRow ${hit?'hit':''}"><span class="b0">${b.cond}</span><span>${b.score}</span></div>`;
  }).join('');
  return `
    <div class="zone">
      <div class="zoneLabel zHard">◆ 硬数据区 · 阈值公式</div>
      <div class="formula">指标 ${d.metric} = <b style="color:var(--fact)">${d.value}${d.unit?(' '+d.unit):''}</b><br>${d.formula}</div>
      <div class="bands">${bands}</div>
    </div>`;
}
function ordinalZone(d){
  const rows = d.scale.map(s=>{
    const hit = s.desc.includes("当前");
    return `<div class="scaleRow ${hit?'hit':''}"><span class="scaleLv">${s.level}</span><span>${s.desc}</span></div>`;
  }).join('');
  return `
    <div class="zone">
      <div class="zoneLabel zJudge">◇ 判断区 · 序数标尺</div>
      <div style="margin-bottom:6px;">${rows}</div>
      <div class="placement"><b style="color:var(--judge)">落档依据:</b> ${d.placement}</div>
    </div>`;
}
function driverBlock(d){
  const a = alertLevel(d.score);
  const typeTag = d.type==='quant'
    ? '<span class="typeTag tQuant">阈值公式</span>'
    : '<span class="typeTag tOrd">序数档</span>';
  const zone = d.type==='quant' ? quantZone(d) : ordinalZone(d);
  const srcs = d.sources.map(s=>`<li>${srcTag(s.tag)}<span>${s.text}</span></li>`).join('');
  return `
    <div class="driver">
      <div class="dHead">
        <div>
          <span class="dName">${d.name}</span>${typeTag}
          <div class="dMeta">子权重 ${Math.round(d.weight*100)}% · 更新 ${d.updated}</div>
        </div>
        <div class="dScore" style="color:${a.hex};">${d.score}<span style="font-size:11px;color:var(--tx3);font-weight:400;">/100</span></div>
      </div>
      ${zone}
      <ul class="srcList">${srcs}</ul>
      <div class="change"><b>相对上期(${d.prev}):</b> ${d.changeReason}</div>
    </div>`;
}

function pillarCard(p){
  const a = alertLevel(p.score);
  const delta = p.score - p.prev;
  const dist = p.score - p.threshold;
  const arrow = delta>0?'↗':(delta<0?'↘':'→');
  const mCol = delta>0?'#639922':(delta<0?'#D85A30':'#888780');
  const open = openPillars[p.id];
  const adjLine = p.pillarAdj ? ` <span style="color:var(--tx3)">(${p.pillarAdjReason||''})</span>` : '';
  return `
    <div class="pillar ${open?'open':''}" id="pc-${p.id}">
      <div class="pHead" onclick="toggle('${p.id}')">
        ${icon(p.icon,a.hex)}
        <div style="flex:1;min-width:0;">
          <div class="pTitle">${p.label}</div>
          <div class="pQ">${p.question}</div>
        </div>
        <div>
          <div class="pScore" style="color:${a.hex};">${p.score}</div>
          <div class="pLvl" style="color:${a.tx};">${a.n}级</div>
        </div>
        ${icon('chev','currentColor','chev')}
      </div>
      <div class="bar"><div class="barFill" style="width:${p.score}%;background:${a.hex};"></div><div class="thresh" style="left:${p.threshold}%;"></div></div>
      <div class="metrics">
        <span style="color:${mCol};">${arrow} 周变化 ${delta>0?'+':''}${delta}</span>
        <span>离临界 ${dist>0?'+':''}${dist}</span>
        <span>1998位置 ${p.hist1998}</span>
      </div>
      <div class="body">
        <div class="callout"><b>本期评分合成:</b> ${p.drivers.map(d=>`${d.name.slice(0,4)} ${d.score}×${Math.round(d.weight*100)}%`).join(' + ')}${p.pillarAdj?` + 定性调整${p.pillarAdj}`:''} = <b>${p.score}</b>${adjLine}</div>
        <div class="callout"><b>周变化归因:</b> ${p.weekChange}</div>
        <h3 style="margin-top:14px;">子驱动因子</h3>
        ${p.drivers.map(driverBlock).join('')}
        <div class="callout"><b>1998 锚定推理(位置=${p.hist1998}):</b> ${p.hist1998Reason}</div>
      </div>
    </div>`;
}

window.toggle = function(id){ openPillars[id] = !openPillars[id]; render(); };
window.setPreset = function(k){ weights = {...WEIGHT_PRESETS[k]}; render(); };

function render(){
  document.getElementById('asOf').textContent = `截至 ${DATA.asOf} · 深度方法论版`;
  const comp = composite();
  const ca = alertLevel(comp);
  document.getElementById('app').innerHTML = `
    <div class="hero">
      <div class="heroBox" style="background:${ca.bg};">
        <div style="font-size:13px;color:${ca.tx};margin-bottom:2px;">综合指数(加权)</div>
        <div style="display:flex;align-items:baseline;gap:10px;">
          <span class="heroNum" style="color:${ca.tx};">${comp}</span><span style="font-size:15px;color:${ca.tx};">/100</span>
        </div>
        <div style="margin-top:8px;display:inline-flex;align-items:center;gap:6px;">
          <span style="width:10px;height:10px;border-radius:2px;background:${ca.hex};"></span>
          <span style="font-size:14px;font-weight:500;color:${ca.tx};">${ca.n}级 · ${ca.label}</span>
        </div>
      </div>
      <div class="weightBox">
        <div style="font-size:13px;color:var(--tx2);margin-bottom:2px;">权重预设</div>
        <div class="presets">
          ${Object.keys(WEIGHT_PRESETS).map(k=>{
            const active = JSON.stringify(weights)===JSON.stringify(WEIGHT_PRESETS[k]);
            return `<button class="${active?'active':''}" onclick="setPreset('${k}')">${PRESET_NAMES[k]}</button>`;
          }).join('')}
        </div>
        <p style="font-size:12px;color:var(--tx3);margin:6px 0 0;">当前权重: ${DATA.pillars.map(p=>Math.round(weights[p.id]*100)+'%').join(' / ')}</p>
      </div>
    </div>
    <div class="section" style="margin-top:18px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:6px;">
        <div style="font-size:13px;color:var(--tx2);">周度趋势 · 综合指数(按当前权重)与五支柱</div>
        <div style="font-size:11px;color:var(--tx3);">每周一更 · 现有 ${DATA.weekly.length} 期</div>
      </div>
      <div class="chartWrap" style="height:220px;"><canvas id="wk"></canvas></div>
      <p class="note">读图: 看斜率不看水位——周变化的方向与速度比绝对分更有信息量。注: 两期均按 v3 量化口径(2026-07-15重构,硬数据占比~73%)回溯重算，与 v2 原值不可直接比较。切换顶部权重预设，综合线会随之重算。</p>
    </div>
    <div class="grid">${DATA.pillars.map(pillarCard).join('')}</div>
    <div class="section">
      <div style="font-size:13px;color:var(--tx2);margin-bottom:10px;">各支柱评分 vs 临界值 vs 1998 类比位置</div>
      <div class="chartWrap"><canvas id="cmp"></canvas></div>
      <p class="note">读图: 制度支柱(40)仍低于其1998位置(45)，外部第三方(两家评级展望负面、CPI 34、WJP四届连降)与事件计数(4个关键机构被政治化)互为印证。强制机构(37)已贴近1998(35)——实弹冲突2起+对峙，是全框架离历史崩溃位最近的支柱。货币(39)高于1998(25)且通胀锚完好。社会(55)离临界有距离——民间反对率(50%)已达媒体侧2倍但街头未动，补贴红线仍守。</p>
    </div>`;
  document.getElementById('footNote').innerHTML = `
    <b>方法论:</b> ${DATA.methodology.scale}<br>
    <b>合成:</b> 每个支柱 = Σ(子因子分×子权重) + 标注的定性调整量，完全可复现。硬数据项(阈值公式)用真实实测值，制度项(序数档)为结构化判断。<br>
    <b>诚实边界:</b> ${DATA.methodology.disclaimer}<br><br>
    <b>接入自动更新:</b> 顶部 <code>const DATA = {...}</code> 换成 <code>const DATA = await (await fetch('你的地址/dashboard-data.json')).json();</code> 即可。数据结构与渲染逻辑完全分离，前端不用改。`;
  drawChart();
  drawWeekly();
}

let wkChart;
const PILLAR_COLORS = { fiscal:"#185fa5", currency:"#D85A30", institutions:"#8A63C9", social:"#639922", coercive:"#888780" };
function drawWeekly(){
  const ctx=document.getElementById('wk'); if(!ctx||!window.Chart) return;
  if(wkChart) wkChart.destroy();
  const txColor = (getComputedStyle(document.documentElement).getPropertyValue('--tx')||'#1a1a17').trim();
  const wkComposite = w => { let s=0,t=0; DATA.pillars.forEach(p=>{ s+=w.scores[p.id]*weights[p.id]; t+=weights[p.id]; }); return Math.round(s/t); };
  const labels = DATA.weekly.map(w=>w.date);
  const mk = (id,label) => ({ label, data: DATA.weekly.map(w=>w.scores[id]), borderColor: PILLAR_COLORS[id], backgroundColor: PILLAR_COLORS[id], borderWidth: 1.5, pointRadius: 3, tension: 0 });
  wkChart = new Chart(ctx,{ type:'line',
    data:{ labels, datasets:[
      { label:'综合', data: DATA.weekly.map(wkComposite), borderColor: txColor, backgroundColor: txColor, borderWidth: 3, pointRadius: 4, tension: 0 },
      mk('fiscal','财政'), mk('currency','货币'), mk('institutions','制度'), mk('social','社会'), mk('coercive','强制机构')
    ]},
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:true, position:'top', labels:{ font:{size:11}, boxWidth:10, boxHeight:10, color: txColor } } },
      scales:{ y:{ suggestedMin:25, suggestedMax:65, ticks:{font:{size:11}} }, x:{ ticks:{font:{size:11}} } } }
  });
}

let chart;
function drawChart(){
  const ctx=document.getElementById('cmp'); if(!ctx||!window.Chart) return;
  if(chart) chart.destroy();
  chart=new Chart(ctx,{ type:'bar',
    data:{ labels:DATA.pillars.map(p=>p.label.replace(/与.*/,'').slice(0,4)),
      datasets:[
        { label:'当前分', data:DATA.pillars.map(p=>p.score), backgroundColor:'#D85A30', borderRadius:4, barPercentage:0.7 },
        { label:'临界值', data:DATA.pillars.map(p=>p.threshold), backgroundColor:'#888780', borderRadius:4, barPercentage:0.7 },
        { label:'1998位置', data:DATA.pillars.map(p=>p.hist1998), backgroundColor:'#B5D4F4', borderRadius:4, barPercentage:0.7 }
      ]},
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:true, position:'top', labels:{ font:{size:11}, boxWidth:10, boxHeight:10 } } },
      scales:{ y:{ min:0, max:100, ticks:{font:{size:11}} }, x:{ ticks:{font:{size:11}} } } }
  });
}
if(window.Chart){ render(); } else { const iv=setInterval(()=>{ if(window.Chart){clearInterval(iv);render();} },50); }
