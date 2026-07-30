#!/usr/bin/env node
/**
 * Build one forwardable HTML containing the credit dashboard, stability
 * dashboard and same-date methodology comparison.  Local JS dependencies are
 * embedded; public CDN libraries still require internet access.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const releaseDate = process.argv[2] || "2026-07-30";
const outDir = path.join(root, "release", releaseDate);
const outFile = path.join(outDir, "indonesia-monitor-share.html");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function safeInlineScript(content, label) {
  return `<script data-embedded-source="${label}">\n${content.replaceAll("</script>", "<\\/script>")}\n</script>`;
}

function replaceScript(html, src, content) {
  const escaped = src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<script\\s+src=["']${escaped}["']\\s*></script>`, "g");
  if (!pattern.test(html)) throw new Error(`Script tag not found: ${src}`);
  return html.replace(pattern, content);
}

function buildCredit() {
  let html = read("credit-tracker/dashboard/credit-dashboard.html");
  const scripts = {
    "p2p-pending.js": read("credit-tracker/dashboard/p2p-pending.js"),
    "p2p-confirmed.js": read("credit-tracker/dashboard/p2p-confirmed.js"),
    "confirmed-decisions.js": read("credit-tracker/dashboard/confirmed-decisions.js"),
    "macro-pending.js": read("credit-tracker/dashboard/macro-pending.js"),
    "app-metrics-data.js": read("credit-tracker/dashboard/app-metrics-data.js"),
    "app-metrics-panel.js": read("credit-tracker/dashboard/app-metrics-panel.js"),
    "../sentiment-monitor/output/credit-sentiment-confirmed.js": read(
      "credit-tracker/sentiment-monitor/output/credit-sentiment-confirmed.js"
    ),
  };
  for (const [src, content] of Object.entries(scripts)) {
    html = replaceScript(html, src, safeInlineScript(content, src));
  }
  html = replaceScript(
    html,
    "../sentiment-monitor/output/credit-sentiment-data.js",
    "<!-- pending sentiment audit payload omitted from forwardable release -->"
  );
  return html;
}

function buildStability() {
  let html = read("stability-monitor/dashboard/indonesia-stability-index-pro.html");
  html = replaceScript(
    html,
    "data.js",
    safeInlineScript(read("stability-monitor/dashboard/data.js"), "data.js")
  );
  html = replaceScript(
    html,
    "engine.js",
    safeInlineScript(read("stability-monitor/dashboard/engine.js"), "engine.js")
  );
  return html;
}

function buildComparison() {
  let html = read("stability-monitor/dashboard/v3-v4-comparison.html");
  html = replaceScript(
    html,
    "../data/v4-comparison-data.js",
    safeInlineScript(read("stability-monitor/data/v4-comparison-data.js"), "v4-comparison-data.js")
  );
  return html;
}

const pages = {
  credit: Buffer.from(buildCredit(), "utf8").toString("base64"),
  stability: Buffer.from(buildStability(), "utf8").toString("base64"),
  comparison: Buffer.from(buildComparison(), "utf8").toString("base64"),
};

const wrapper = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>印尼市场双看板 · ${releaseDate} 可转发版</title>
<style>
html,body{height:100%;margin:0;background:#eef2f6;font-family:system-ui,-apple-system,"Segoe UI","Noto Sans SC",sans-serif;color:#111827}
.bar{height:54px;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:8px 14px;background:#fff;border-bottom:1px solid #dbe1e8}
.title{font-weight:750;margin-right:10px}.meta{font-size:11px;color:#64748b;margin-left:auto}
button{border:1px solid #cbd5e1;background:#fff;border-radius:8px;padding:7px 12px;cursor:pointer;font-size:12px}
button.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}
iframe{display:block;width:100%;height:calc(100% - 54px);border:0;background:#fff}
@media(max-width:720px){.title{display:none}.meta{font-size:9px}}
</style>
</head>
<body>
<div class="bar">
  <span class="title">🇮🇩 印尼市场双看板</span>
  <button data-page="credit" class="active">消费信贷</button>
  <button data-page="stability">稳定性指数</button>
  <button data-page="comparison">全景等权 / 数据置信比较</button>
  <span class="meta">${releaseDate} · 单文件可转发 · 只读</span>
</div>
<iframe id="viewer" title="dashboard"></iframe>
<script>
const encoded=${JSON.stringify(pages)};
const pages={};
for(const [key,value] of Object.entries(encoded)){
  const bytes=Uint8Array.from(atob(value),c=>c.charCodeAt(0));
  pages[key]=new TextDecoder("utf-8").decode(bytes);
}
const viewer=document.getElementById("viewer");
function show(key){
  viewer.srcdoc=pages[key];
  document.querySelectorAll("button[data-page]").forEach(button=>{
    button.classList.toggle("active",button.dataset.page===key);
  });
}
document.querySelectorAll("button[data-page]").forEach(button=>{
  button.addEventListener("click",()=>show(button.dataset.page));
});
show("credit");
</script>
</body>
</html>
`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, wrapper, "utf8");
console.log(outFile);
