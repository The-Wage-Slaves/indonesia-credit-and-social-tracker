# 印尼稳定性监测项目

一套持续监测印尼宏观—政治—市场稳定性的工具集，从一段多轮深度对话沉淀而来。

## 快速上手（转移到 Claude Code 后）

1. 解压后进入项目目录，用 Claude Code 打开：`cd indonesia-monitor && claude`
2. Claude Code 会自动读取 `CLAUDE.md`。**先让它读 `CONTEXT.md`**——那是七轮对话的
   分析交接，读完它就理解了整个项目的来龙去脉和判断链。
3. 直接说你想做什么（"帮我接上自动更新"/"调整制度支柱的评分"/"部署每日简报"等）。

## 三个组成部分

### 1. 稳定性指数仪表盘 `dashboard/`
- `indonesia-stability-index-pro.html` —— 主产物，深度方法论版。浏览器直接打开。
  点任一支柱展开完整计量（硬数据区 + 判断区 + 来源标注 + 周变化 + 1998 锚定）。
- `data.js` —— 五支柱评分数据。**要更新评分改这里。**
- `engine.js` —— 渲染引擎。
- `simple-version.html` —— 早期简版。

### 2. 每日新闻简报系统 `brief/`
GitHub Actions 定时抓取印尼新闻 → Claude API 解读 → 推送飞书。
详见 `brief/README.md`。**未部署**，需用户提供飞书 webhook + 确认部署方式。
高优先级关键词已含 FATF/PPATK/宪法法院/50A 条。

### 3. 分析知识库 `docs/`
- `METHODOLOGY.md` —— 五支柱评分方法论全文
- `TIMELINE.md` —— 2026 关键事件时间线
- `ANALYSIS.md` —— 七轮对话的核心分析结论

## 当前进度与下一步

见 `CLAUDE.md` 的"当前状态与下一步"。核心待办：把 `brief/` 的抓取结果 +
五支柱重新评分输出成 `data/dashboard-data.json`，让仪表盘"打开即最新"。

## 项目价值观（务必延续）

事实与判断分离 · 可复现的计量 · 诚实的能力边界 · 盯变化率不只盯水位 ·
不做安全免责式的稀释。详见 `CLAUDE.md`。
