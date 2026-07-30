# CLAUDE.md — 印尼监测系统 · 核心参考（防上下文腐烂用）

> 本仓库由「人在环」的 AI 代理（Claude Code / Codex）与一位分析师共同维护。
> 接手先读：本文件 → `AGENTS.md` → `HANDOFF.md`（当前状态）→ `REVIEW.md`（综述）→ `AUTOMATIONS.md`（定时任务）。
> 本文件是**项目全貌的单一真源**，任何会话冷启动读完即可接上，不必依赖历史对话。

---

## 0. 一句话

一个面向印尼消费信贷业务的**双看板决策支持系统**（纯静态 HTML，双击即用，零构建）：
①**消费信贷市场追踪**（量：谁在放款、余额多少）②**五支柱稳定性指数**（势：离临界多远）。
数据由半自动脚本抓取，**所有写入走人在环确认**。入口 `index.html`。
GitHub 私有仓 `rafaelbonanza279-wq/indonesia-credit-and-social-tracker`（仓库根=本目录）。

---

## 1. 铁律（改任何东西前必读，违反=错）

1. **人在环**：脚本只「抓取→写待确认区（首页卡片 / 信贷看板"✎数据管理"暗门）」，**绝不直接改看板数值/评分**；人确认后才写入。
2. **事实/判断分离**：稳定性证据每条标 事实/引述/判断/待补 四类标签。
3. **改 `stability-monitor/dashboard/data.js` 必须**：同步更新该 driver 的 `score/prev/changeReason/sources/updated`；支柱分 = round(Σ driver.score×weight)，改分后**本地跑 `node .github/scripts/validate_repo.mjs` 必须通过**（它校验权重和=1、支柱分=加权和、provenance 齐全、pending/V4 一致性）。
4. **FX 固定 15000**（历史可比口径），除非所有者明确批准改方法论。
5. **密钥永不入库**：`stability-monitor/scripts/street_heat_config.yaml` 与 `credit-tracker/sentiment-monitor/credit_sentiment_config.yaml` 已 .gitignore，**切勿 `git add -f`**；克隆后用 `.example.yaml` 模板自填。
6. **CDN 用 jsDelivr，不用 unpkg**（unpkg 的 recharts 在此网络失败过）。
7. **协作走分支+PR**，不直接改 `main`（我方自己的小改动历史上有直接 merge，但规范是 PR）。
8. **不擅自**：合并他人 PR、开 Pages/改仓库可见性/改分支保护——需所有者批准。

---

## 2. 消费信贷市场追踪（credit-tracker/）

主产物 `credit-tracker/dashboard/credit-dashboard.html`（白底单页、手工维护的单一真源，React/Recharts 走 CDN）。四板块 + 顶部导航互切：

- **① 国家宏观数据**：GDP(季度)/BI利率/CPI/USDIDR/失业率，2024年起月度序列（BPS/BI，含"待核"标注）。改 `macroKPI/gdpData/cpiData/rateData/fxData/unempData` 数组。
- **② 信贷行业数据**：银行/多元金融/P2P 各品类月度贷款余额（总览/银行/MF/P2P/明细 5 子tab）。数据在 `rawData`（Rp Miliar，看板按 FX 折 USD）。源=BI SSKI Tabel17 + OJK PP9 + OJK LPBBTI + RDKB新闻稿(BNPL)。映射见 `PROJECT_BRIEF.md`。
- **③ 竞对数据**：3.1 财务运营（`p2pRaw`，9家×4指标：放款/余额/累计借款人/活跃借款人）；3.2 APP量级（`app-metrics-{data,panel}.js`，点点数据估算的下载量/月活，两卡各带 公司/国家 切换，**口径注记必须保留**）。
- **④ 舆情监测**：新闻＋社媒双引擎的线上信贷恐慌指数（周频、pending待审）；新闻密度/负面与社媒声量/负面独立计分，严重事件另设证据门。与稳定性指数的政治舆情是两回事。

**暗门（页脚"✎ 数据管理"）**：手工录月度数据（存 localStorage）；P2P 待确认面板（scraper 产出 `p2p-pending.js` → 逐格核对/补录 → 写入生成新数据列上图，可撤销）；**一键改汇率**（8000–25000，全站 USD 图表即时重算）。永久固化=把 JSON 发给维护者写进 html 的 `rawData/p2pRaw`。

**取数脚本**：
- `p2p-scraper/scraper.mjs`（9家全自动）：AdaKami/Shopee(Lentera)/Kredifazz/Akulaku/KreditPintar/Easycash/Julo/AdaPundi(点Statistik tab) 走 Playwright 逐家定制提取器；**KrediOne 走官网 JSON 接口** `kredione.id/gateway/idn-om-agency/agency/officialWebsiteData/queryOfficialWebsiteData`。产出进暗门待确认。已移除 Modalku/Investree/Maucash/UangMe/Koinworks。
- `update_credit.py`（月度）：BI Tabel_17.xls 固定URL直抓(SSKI 有~4月时滞)、OJK 旧页监控+新门户 `data.ojk.go.id/SJKPublic` 探测(屏蔽非印尼IP,待攻)、Shopee 快检。
- **P2P 主表**：`D:\0 工作文档\02 交付件\100 印尼\10 竞品追踪\0- General\P2P DATA_20260618.xlsx`（用户维护，40期）——p2pRaw 曾据此整体重建。

---

## 3. 五支柱稳定性指数（stability-monitor/）—— 两套并行方法论

**命名（2026-07-28 用户拍板，按方法论差异）**：
- **「全景等权版」**（Panoramic Equal-Weight，**生产/正式**，内部代号 **v3**）：五柱各 20% 等权、政治维度充分计入、允许一事件多维计分、硬数据权重约73%。主产物 `dashboard/indonesia-stability-index-pro.html`（外链 `data.js`+`engine.js`）。
- **「数据置信版」**（Data-Confidence，**影子/实验**，内部代号 **v4**）：按数据客观度加权（财政/货币/社会↑、制度15%/强制10%↓）、分离测量置信度、MECE单一归属、尾部风险用红色触发器。`scripts/score_v4_shadow.py` + `data/v4-*.json` + 对比页 `dashboard/v3-v4-comparison.html`。**只读影子，不进正式看板**。
- 代码/文件内部仍用 `v3`/`v4` 标识以免破坏引用；对外统一用中文名。

**五支柱**：财政与外部脆弱性 / 货币与市场信心 / 制度与政策可预见性 / 社会与街头 / 强制机构内聚性。每支柱 = Σ(子因子×权重)+pillarAdj；子因子分 quant(阈值公式)/ordinal(5档序数)；与 1998 危机位置对照。方法论 v3 经跨国(中/美/马/日)+跨时代(2019/2024/2026)校验，见 `docs/METHODOLOGY.md` + `METHODOLOGY_V3_PROPOSAL.md`；数据置信版见 `docs/METHODOLOGY_V4_DRAFT.md` + `V4_WEEKLY_RUNBOOK.md`。

**当前分（截至 2026-07-28）**：
- 全景等权版：综合 **43**（橙红·预警区）；财政48/货币40/制度37/社会55/强制37。**读法：市场面喘息掩盖制度侵蚀，看支柱不看综合——制度37/强制37是最弱、贴近或低于1998位置。**
- 数据置信版（影子）：综合 **46.4**（读数比 V3 高 ~2）；财政52.2/货币45.6/制度36.9/社会50.7/强制37.3，测量置信度74.1%。**关键：这+2差是"换尺子的结构迁移"非基本面改善**（文档明说）。历史点：07-22、07-28。

**两条悬而未决的方法论分歧（待攒几周数据后决策，勿擅自转正 V4）**：
1. 数据置信版**下调政治维度权重**（制度15/强制10）→ 综合分对制度侵蚀更钝，与用户"政治事件要更算数"诉求反向；触发器只抓灾难性事件(实弹/死亡)，抓不到渐进式制度骤变(仓促立法/军队渐进渗透)。
2. **刚性 MECE 单一归属**会漏多维事件：如 DSI 出口管制既是财政表外或有负债风险、又是制度政策不可预期——V4只算一维(制度)、生产V3也用了MECE(DSI只扣制度不扣财政或有负债)；分析师(Claude)曾主张两维都算。

**街头动员热度**（社会支柱的"网络政治情绪"driver输入）`scripts/street_heat.py`：6源三角测量(Google Trends双篮/Kaskus开放接口/YouTube/GDELT×2/大众RSS) + **DeepSeek反对率分类**（民间YouTube vs 媒体RSS分侧，民媒差是核心信号）→ HTML确认单+首页待确认卡。**人在环**：跑完给用户看确认单、确认后才写入 data.js。Trends/GDELT 常限流(别密集测)；YouTube/DeepSeek/Kaskus/RSS 可靠。key 在 `street_heat_config.yaml`(YouTube+DeepSeek已配)。近3周反对率 39.7→37.1→32.1%（降温）。

**日频警报器**（`scripts/daily_alert.py`）：每天10:00抓当日印尼新闻(brief源+Google News定向查询) → **DeepSeek 分类**9类制度/政治骤变事件(央行独立性/关键官员更替/仓促立法/司法工具化/表外负债/评级行动/市场失序/大规模抗议/军警冲突) → 分级(红需≥2独立源；**高严重度单源=🔺高危待核**；≥0.55=橙) → 推飞书 + 写 `data/daily-events/YYYY-MM.jsonl`(`humanReviewed:false`)。
- **执行位置：云端**（GitHub workflow `daily-risk-alerts.yml`，cron `0 2 * * *` = GMT+8 10:00）→ 产物提交到 **`bot/daily-risk-alerts` 分支**（不进 main），推送统一走 `cloud_publish.py`（`normal` 静默）。
- **`daily-events/` 不可加入 .gitignore**——被忽略会让 workflow 的 `git add` 静默失败、判定「无变化」而永不上云（2026-07-30 踩过此坑）。
- **存在意义**：① 补数据置信版触发器只覆盖【灾难型】事件(实弹/死亡)的盲区，专抓【渐进式制度骤变】；② 周频人工检索会漏事件——**实证**：2026-07-26 BI行长Perry Warjiyo提前两年辞职被 07-28 周更漏掉(当时只查"利率决议")，由本引擎捕获后于 07-29 补入本周快照(制度 37→35)。
- **已知局限**：DeepSeek 常把同一事件多家报道合并成一条，导致独立源计数偏低→重大事件多落"高危待核"而非红色。**这是刻意的保守取舍**（宁可让人去看，不让机器自行升红）。
- **铁律**：只推送/写证据池，**绝不改 data.js**；事件需人工复核后才能作为评分依据。

**周更流程**：⓪ **先取当周日频事件**——单一真源是云端 `bot/daily-risk-alerts` 分支：
`git fetch origin bot/daily-risk-alerts && git show origin/bot/daily-risk-alerts:stability-monitor/data/daily-events/YYYY-MM.jsonl`（避免漏检）；① 用户本机跑 `street_heat.py` → 确认单；② web检索本周宏观/政治/市场变化；③ 新分支改 `data.js`(driver分+changeReason+sources+updated、支柱分、weekChange、engine.js解读文字) → `python scripts/apply_week.py append YYYY-MM-DD fiscal=.. currency=.. institutions=.. social=.. coercive=..` 追加周快照 → `validate_repo.mjs` → commit/push/PR；④ 同步刷新数据置信版(改 `v4-shadow-input.json` asOf+建 `data/evidence/YYYY-MM-DD.json`+跑 `score_v4_shadow.py --write-output`+history加当周确认点)；⑤ 用户审 diff 后合并。

---

## 4. 基础设施与自动化

定时任务、执行器、人工确认点和飞书推送边界以根目录 `AUTOMATIONS.md` 为单一真源；例行数据不得创建 PR。

- **GitHub 私有仓**（含竞对数据+政治分析，**保持私有**）。离线备份 bundle 在 `D:\...\100 Dashboard with AI\`。Pages 私有仓需 Pro，默认禁用（`deploy-pages.yml` 是禁止误发布的守卫）。
- **CI** `.github/workflows/validate.yml` → `.github/scripts/validate_repo.mjs`：每次 PR/push 校验 JS/Python 语法、pending.json↔js 一致、链接安全、五支柱权重和=1/支柱分=加权和/provenance、数据置信版 comparison/history 一致。**改 data.js 或 v4 后本地先跑它。**
- **周更提醒**：本机 Windows 计划任务 `IndoStabilityWeeklyReminder`，每周二10:00(本机时区≈GMT+8)跑 `E:\AI Tools\CC\Work Session\indo_news\weekly_stability_reminder.py`(复用 indo_news 的飞书机器人+`.env` 里 FEISHU_WEBHOOK_URL/FEISHU_SIGN_SECRET)推飞书提醒卡。用户收到后回 CC/Codex 手动周更。
- **待确认工作流**：脚本写 `pending.json`+`pending.js`（各 producer 用 `source` 标记，勿覆盖对方）；首页 index.html 读取展示，各条带确认单链接。
- **Codex 加固(已合)**：原子写入、防提示注入(analyze.py)、XSS转义(index.html)、抓取覆盖率门槛、xlsx换SheetJS补丁版、validate_repo CI。

---

## 5. 关键文件地图

```
index.html                                   总入口+待确认中心 (读 pending.js) · 含 V3/V4 对比页卡片
credit-tracker/
  dashboard/credit-dashboard.html            ★信贷看板(单一真源) · rawData/p2pRaw/macroKPI/暗门/FxPanel
  dashboard/app-metrics-{data,panel}.js      APP量级数据+多实例图表组件
  dashboard/p2p-pending.js                   scraper产出的P2P待确认(暗门读)
  p2p-scraper/scraper.mjs                    9家P2P抓取(8 Playwright + KrediOne API)
  update_credit.py                           月度取数(BI/OJK/Shopee)
  sentiment-monitor/credit_sentiment.py      周度新闻+社媒恐慌指数(pending待审)
  PROJECT_BRIEF.md                           数据源行列映射+技术决策
stability-monitor/
  dashboard/indonesia-stability-index-pro.html  ★全景等权版看板(外链下面两js)
  dashboard/data.js                          ★五支柱评分(周更主改文件) · weekly数组+各driver
  dashboard/engine.js                        渲染引擎(含周度趋势图+解读注释)
  dashboard/v3-v4-comparison.html            数据置信版同日对比页(只读)
  scripts/street_heat.py                     街头热度6源+DeepSeek反对率
  scripts/apply_week.py                      追加周快照+导出dashboard-data.json
  scripts/score_v4_shadow.py                 数据置信版算分器
  scripts/street_heat_config.yaml            密钥(gitignore) · .example.yaml=模板
  data/v4-*.json, evidence/                  数据置信版输入/历史/对比/证据台账
  docs/METHODOLOGY*.md, TIMELINE.md, ANALYSIS.md
  brief/                                     每日新闻简报(Python，与 indo_news 飞书体系相关)
.github/scripts/validate_repo.mjs            CI不变量校验(改data.js/v4后必跑)
AGENTS.md / HANDOFF.md / REVIEW.md           Codex上下文 / 当前状态 / 给人的综述
```

---

## 6. 当前待办 / 留白

- 数据置信版 V4：影子跑 4–6 周攒历史后，与全景等权版对比，重点验证"低政治权重是否钝化制度骤变预警"；两条方法论分歧届时定夺。**勿擅自转正**。
- OJK 新门户 `data.ojk.go.id/SJKPublic` 直爬（屏蔽非印尼IP，需本地/印尼网络）。
- 街头热度：Trends/GDELT 限流→可切 GDELT BigQuery；反对率池升级(YouTube评论区/Kaskus政治版)。已记录待决策。
- 信贷看板：③3.2 APP量级等新数据；④舆情需配置/维护 YouTube、Reddit、X 官方接口并积累8周基线；宏观"待核"点(汇率月度近似值待接BI JISDOR)。
- Modalku 双口径 / ADA Pundi 官网撤统计页 / P2P scraper 各站改版维护。
