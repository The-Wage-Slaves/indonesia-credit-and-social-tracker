# CLAUDE.md — 印尼监测系统 · 核心参考（防上下文腐烂用）

> 本仓库由「人在环」的 AI 代理（Claude Code / Codex）与一位分析师共同维护。
> 接手先读：`PROJECT_MEMORY.md` → 本文件 → `AGENTS.md` → `HANDOFF.md`（当前状态）→ `REVIEW.md`（综述）→ `AUTOMATIONS.md`（定时任务）。
> `PROJECT_MEMORY.md` 是跨代理长期决策的单一真源；本文件保存 Claude 需要的项目全貌。任何会话冷启动必须重读两者，不得只依赖历史对话或压缩摘要。

---

## 0. 一句话

一个面向印尼消费信贷业务的**双看板决策支持系统**（纯静态 HTML，双击即用，零构建）：
①**消费信贷市场追踪**（量：谁在放款、余额多少）②**五支柱稳定性指数**（势：离临界多远）。
数据由半自动脚本抓取，**所有写入走人在环确认**。入口 `index.html`。
GitHub 私有仓 `The-Wage-Slaves/indonesia-credit-and-social-tracker`（仓库根=本目录）。

---

## 0.5 PR 与上下文纪律

一个用户目标只建立一个 PR；同一目标的测试修复、文档和 CI 修复继续推送原分支，完整验证前保持 Draft。PR #10—#13 的连续补丁是反例。每次上下文压缩或冷启动后必须重新读取 `PROJECT_MEMORY.md`。

---

## 1. 铁律（改任何东西前必读，违反=错）

1. **人在环**：脚本只「抓取→写待确认区（首页卡片 / 信贷看板"✎数据管理"暗门）」，**绝不直接改看板数值/评分**；人确认后才写入。
2. **事实/判断分离**：稳定性证据每条标 事实/引述/判断/待补 四类标签。
3. **改 `stability-monitor/dashboard/data.js` 必须**：同步更新该 driver 的 `score/prev/changeReason/sources/updated`；支柱分 = round(Σ driver.score×weight)，改分后**本地跑 `node .github/scripts/validate_repo.mjs` 必须通过**（它校验权重和=1、支柱分=加权和、provenance 齐全、pending/V4 一致性、支柱读法文字里的「当前N」与分数一致、导出文件与 data.js 同步、driver 级快照自洽且最新一期与 data.js 一致）。**手改评分后必须补跑 `python scripts/apply_week.py snapshot`**——`append` 会自动归档，手改不会。
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

**当前分（截至 2026-08-20，weekly 8 期）**：
- 全景等权版：综合 **43.4**（橙红·预警区）；财政48/货币42/制度35/社会57/强制35。**读法：看支柱不看综合——制度35/强制35是最弱、已贴近或低于1998位置；而社会57高于1998的50，平均之后这个结构差异就消失了。**
- 数据置信版（影子）：综合 **46.1**；证据质量67.0%、来源直达度73.2%。**这+2.3差是"换尺子的结构迁移"非基本面改善。**
- ⚠️ **具体分数以 `data.js` 为准，本文件的数字必然滞后**；周更后若没同步这里，以 data.js 与 `HANDOFF.md` 为准。

**两条悬而未决的方法论分歧（待攒几周数据后决策，勿擅自转正 V4）**：
1. 数据置信版**下调政治维度权重**（制度15/强制10）→ 综合分对制度侵蚀更钝，与用户"政治事件要更算数"诉求反向；触发器只抓灾难性事件(实弹/死亡)，抓不到渐进式制度骤变(仓促立法/军队渐进渗透)。
2. **刚性 MECE 单一归属**会漏多维事件：如 DSI 出口管制既是财政表外或有负债风险、又是制度政策不可预期——V4只算一维(制度)、生产V3也用了MECE(DSI只扣制度不扣财政或有负债)；分析师(Claude)曾主张两维都算。

**街头动员热度**（社会支柱的"网络政治情绪"driver输入）`scripts/street_heat.py`：6源三角测量(Google Trends双篮/Kaskus开放接口/YouTube/GDELT×2/大众RSS) + **DeepSeek反对率分类**（民间YouTube vs 媒体RSS分侧，民媒差是核心信号）→ HTML确认单+首页待确认卡。**人在环**：跑完给用户看确认单、确认后才写入 data.js。Trends/GDELT 常限流(别密集测)；YouTube/DeepSeek/Kaskus/RSS 可靠。key 在 `street_heat_config.yaml`(YouTube+DeepSeek已配)。
- **反对率不能只看总数，要看分侧**：2026-08-20 总反对率34.8%（上期37.2%）看着在降，但民间YouTube 39%→**51%**、媒体RSS 34%→**9%**，民媒差由5pp炸到**42pp**，合成热度同时32.6→43.2。**总数微降+民媒差扩大=分化加剧，不是退潮。**
- **拒绝出分的机制（2026-08-18 实例，PR #29）**：有效权重<`MIN_WEIGHT_COVERAGE`(0.65)或任一组别全灭 → 不出分、不写历史、不推送、exit 2。**这个门槛不许为了拿到读数而下调**，已有测试固化。08-18 那次 60% 拒绝出分，08-20 手动 `workflow_dispatch` 重跑覆盖率90%正常出分。
- **排查时先看分源状态表**：它现在在闸门之前打印，拒绝时会点名失败的源及原因（08-18 之前打印在闸门之后，而闸门直接退出，所以那次完全不可诊断）。Trends 权重0.25最大，已补退避重试。
- **本地跑只能用于诊断，读数不得入分**：2026-08-20 本地跑因 YouTube 挂掉，反对率算出21.7%，而云端同日实测34.8%——**残缺的池子会给出方向明确但错误的读数**。单一真源永远是 `bot/weekly-monitoring`。

**日频警报器**（`scripts/daily_alert.py`）：每天10:00抓当日印尼新闻(brief源+Google News定向查询) → **DeepSeek 分类**9类制度/政治骤变事件(央行独立性/关键官员更替/仓促立法/司法工具化/表外负债/评级行动/市场失序/大规模抗议/军警冲突) → 分级(红需≥2独立源；**高严重度单源=🔺高危待核**；≥0.55=橙) → 推飞书 + 写 `data/daily-events/YYYY-MM.jsonl`(`humanReviewed:false`)。
- **执行位置：云端**（GitHub workflow `daily-risk-alerts.yml`，cron `43 1 * * *` = 目标 GMT+8 **09:43**）→ 产物提交到 **`bot/daily-risk-alerts` 分支**（不进 main），推送统一走 `cloud_publish.py`（`normal` 静默）。
- **cron 不是准点，且不得改回整点**：GitHub 的 schedule 在整点排队最严重，2026-07-31~08-02 连续三天实测 `0 2 * * *` 的实际启动是 13:20/13:12/13:12（延迟约 192 分钟），所以推送才会「变成下午 1 点」。已移到非整点并由 `validate_repo.mjs` 固化「分钟位不得为 0」。排查推送时间先看 Actions 实际启动时间，别假设 cron 准点。详见 `AUTOMATIONS.md`。
- **采集工作流不得由 push 触发**：PR #10 曾给三个采集工作流加过 `push:`，导致每个提交都跑一遍采集、十几次连续失败，并把当天排队中的定时运行挤掉（2026-08-03 整天没跑）。已固化为不变量。
- **`daily-events/` 不可加入 .gitignore**——被忽略会让 workflow 的 `git add` 静默失败、判定「无变化」而永不上云（2026-07-30 踩过此坑）。
- **存在意义**：① 补数据置信版触发器只覆盖【灾难型】事件(实弹/死亡)的盲区，专抓【渐进式制度骤变】；② 周频人工检索会漏事件——**实证**：2026-07-26 BI行长Perry Warjiyo提前两年辞职被 07-28 周更漏掉(当时只查"利率决议")，由本引擎于 07-28 捕获。
- **⚠️ 但捕获≠入账**：上述事件被引擎抓到后**并没有写进评分**——data.js 的 weekly 在 07-22/28/30 三期制度分都是 37 从未动过，直到 2026-08-04 周更才补记(制度 37→35、货币政策可信度 40→30)。本文件此前写着「07-29 已补入快照」，与数据不符。**引擎负责不漏检，写入评分仍是独立的人工步骤，两者不可互相假定。** 周更时必须核对：本周日频证据池里的红/高危事件，是否每一条都在 data.js 里有对应的 driver 变动或明确的"不计分"理由。
- **已知局限**：DeepSeek 常把同一事件多家报道合并成一条，导致独立源计数偏低→重大事件多落"高危待核"而非红色。**这是刻意的保守取舍**（宁可让人去看，不让机器自行升红）。
- **铁律**：只推送/写证据池，**绝不改 data.js**；事件需人工复核后才能作为评分依据。
- **地域门（2026-08-04 起）**：信源池混有国际新闻，曾把巴基斯坦警察局爆炸、摩洛哥移民事件判成印尼稳定性事件并标 🔺高危待核。提示词要求输出 `country`，非印尼一律剔除。
- **事件身份与已确认表（2026-08-18 起，PR #26）**：`data/acknowledged-events.json`，脚本只读、确认动作由人做。
  - id = **`类型 + 规范化实体集合` 指纹**，不是标题措辞——同一件央行行长提名换个说法就是另一条记录，抑制和跨日追踪都无从谈起（08-11 与 08-12 各推了一次）。实体缺失时退回标题指纹并标 `idBasis: headline`，这种 id 不稳定、不该写进已确认表。
  - **查表必须多键**：完整 id / 裸哈希 / 纯实体键。实测模型只回哈希不带类型前缀，且**类型本身会漂移**（同一条提名在同一天两次运行分别被归为 `key_official_change` 与 `central_bank_independence`），只按完整 id 查必然漏配。
  - 语义是**留痕但停止催办**：已确认事件仍留在证据池（周更能看到），只是不再推送、不再抬高当日 level；条目里的 `resumeIf` 描述什么算实质进展，模型判出 `materialChange` 则重新推送。
  - 提示词用 `[N1]` 标签 + `memberIds` 归组，**不要用 `itemIndexes`**——模型会给 0-based 下标，与 1-based 展示错位。
  - `test_event_identity.py` 里 `test_shipped_registry_id_matches_computed_fingerprint` 是防手写哈希的：曾经手算了一个 `0d1f3ac2b7` 填进表里、真实指纹是 `11c49b57a7`，表看着有条目、实际一条都匹配不上，静默失效。**新增条目必须用脚本算 id，不许手写。**

**信贷日频裁定链**（`credit-tracker/sentiment-monitor/event_intelligence.py`，2026-08-04 重建，PR #15）：
同属 `daily-risk-alerts.yml`，但与稳定性侧是两套逻辑。**关键词只负责召回，不再决定类型与严重度**：

① 粗筛（`CANDIDATE_TERMS`，上限 `MAX_CANDIDATES=40`）→ ② 抓正文（失败留痕 `bodyStatus`，退回标题判断而非丢弃）→ ③ **一次 DeepSeek 调用**读正文判定：是否「具体发生的事件」（科普提醒/观点评论/个人轶事/营销稿一律排除），并按机构与当事人**归组** → ④ 社媒按实体词交叉验证（未采到补 `null` 而非 0）→ ⑤ 三档裁定。

- **裁定门**：证据充分（≥2 独立来源 **或** 含原始来源）**且**社媒 ≥3 条提及 → `red`；仅证据充分 → `high_pending`；其余 → `lowEvidenceLeads`（写入待确认文件供周评查阅，**不推飞书、不抬高当日 level**）。
- **为什么必须由 LLM 归组**：旧的 `automatic_event_id` 按「标题前 9 词指纹」分组，同一事件换个措辞就各算一条——2026-08-02 当天 109 条事件**全部** `independentSourceCount == 1`，证据门无从谈起。
- **`acknowledged-events.json`**：人工登记已处置的事件 id，不再重复推送。事件只要还在采集窗口内就会天天重新聚类出来、级别也不变，没有这张表就会天天重推同一条。**脚本只读不写，确认动作由人做。**
- **降级契约**：裁定层跑不起来（缺 key/调用失败）时 `level=degraded`，卡片明写「今天的无事件是**没判出来**、不是没有风险」。**不得把「没判出来」呈现为「没有风险」。**
- **成本旋钮**：`MAX_CANDIDATES`（40）与 `MAX_BODY_CHARS`（1200）在模块顶部。满负荷 prompt 约 5.5 万字符 ≈ 2.2 万 token，**每天只调 1 次**（全部候选合并进同一 prompt）。
- **待校准**：红色要求的「社媒 ≥3 条提及」是拍的。若真事件长期卡在 `high_pending` 上不去红，先怀疑这个阈值或社媒覆盖率。

**周更流程**：⓪ **先取当周日频事件**——单一真源是云端 `bot/daily-risk-alerts` 分支：
`git fetch origin bot/daily-risk-alerts && git show origin/bot/daily-risk-alerts:stability-monitor/data/daily-events/YYYY-MM.jsonl`（避免漏检）；① 用户本机跑 `street_heat.py` → 确认单；② web检索本周宏观/政治/市场变化；③ 新分支改 `data.js`(driver分+changeReason+sources+updated、支柱分、weekChange、engine.js解读文字) → `python scripts/apply_week.py append YYYY-MM-DD fiscal=.. currency=.. institutions=.. social=.. coercive=..` 追加周快照（**会自动归档一份 driver 级快照到 `data/driver-snapshots/YYYY-MM-DD.json`**；手改评分后若没跑 append，补跑 `python scripts/apply_week.py snapshot`）→ `validate_repo.mjs` → commit/push/PR；④ 同步刷新数据置信版(改 `v4-shadow-input.json` asOf+建 `data/evidence/YYYY-MM-DD.json`+跑 `score_v4_shadow.py --write-output`+history加当周确认点)；⑤ 用户审 diff 后合并。

---

## 4. 基础设施与自动化

定时任务、执行器、人工确认点和飞书推送边界以根目录 `AUTOMATIONS.md` 为单一真源；例行数据不得创建 PR。

- **GitHub 私有仓**（含竞对数据+政治分析，**保持私有**）。离线备份 bundle 在 `D:\...\100 Dashboard with AI\`。Pages 私有仓需 Pro，默认禁用（`deploy-pages.yml` 是禁止误发布的守卫）。
- **看板交付＝滚动 Release ZIP**（2026-08-03 起，PR #14）：`main` 上看板/数据路径变化后，`publish-dashboard-package.yml` 构建 `indonesia-monitor-dashboard.zip` 覆盖 Release tag `dashboard-latest`，飞书发固定下载链接。解压双击 `index.html` 即用（已验证 `file://` 下三个页面含 Recharts 图表全部正常渲染）。**本机不装开机服务、不轮询。** 下载者需登录 GitHub 且有本仓只读权限。
  - 打包**以 `git ls-files` 为准**，不是遍历文件系统——否则会把工作区里未跟踪的 `daily-events/*.jsonl`、`*-pending.json` 等 `humanReviewed:false` 数据一起发出去（云端 checkout 干净只是巧合）。另排除无人引用的 `*-pending.json`。已由 `test_build_dashboard_package.py` 固化。
- **CI** `.github/workflows/validate.yml` → `.github/scripts/validate_repo.mjs`：每次 PR/push 校验 JS/Python 语法、pending.json↔js 一致、链接安全、五支柱权重和=1/支柱分=加权和/provenance、数据置信版 comparison/history 一致。**改 data.js 或 v4 后本地先跑它。**
- **本机计划任务已全部停用**（2026-08-04）：`IndoStabilityDailyAlert`、`IndoStabilityWeeklyReminder` 均为 `Disabled`，日/周/月全部由云端工作流承担。停用前它们其实**已经推不出飞书**（`run.log` 里 `! 未找到飞书 webhook，跳过推送`，最后一次成功推送停在 07-30），处于「照跑、照写本地证据池、就是不推」的静默失效状态——所以用户每天收到的那一条一直来自云端。**别再把本机任务当作云端的备份**；要恢复得先修 webhook 读取，且注意与云端重复推送。
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
  sentiment-monitor/credit_daily_alert.py    信贷日频告警(调下面的裁定层)
  sentiment-monitor/event_intelligence.py    ★裁定层: 粗筛→抓正文→LLM判定归组→社媒交叉验证→三档
  sentiment-monitor/acknowledged-events.json 已人工处置事件id(抑制重推; 脚本只读)
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
.github/scripts/validate_repo.mjs            CI不变量校验(改data.js/v4/工作流后必跑)
scripts/build_dashboard_package.py           看板下载包构建(以git ls-files为准)
AUTOMATIONS.md                               ★定时任务+推送边界单一真源(含各种踩坑记录)
AGENTS.md / HANDOFF.md / REVIEW.md           Codex上下文 / 当前状态 / 给人的综述
```

---

## 6. 当前待办 / 留白

- **bot 分支累积型文件（2026-08-20 起两条流水线共用 `merge_bot_evidence.py`）**：日频 `daily-events/*.jsonl` 与周频 `street_heat_history.json` 都不在 main 上，从 main 重建分支会静静抹掉历史。周频这个坑到 08-20 才发现，届时 08-04 与 08-11 的街头热度读数已永久丢失。**新增任何 bot 分支累积型产物时先问：这个文件在 main 上吗？不在就必须登记到 `JSON_ARRAY_BY_DATE` 并走合并脚本。**
- **两个 driver 在等数据**：「执法不对称比」需 8–12 周证据池（2026-08-11 才开始攒，约 10 月可用）才能替掉序数版的 法治与执法工具化；购买力口径对齐等 BPS Sakernas 8 月轮（约 11 月发布）。总统支持率 driver 冻在 75，等 Indikator 下一次**官方**全国民调——只被媒体广泛报道不算数（Indikator 曾officially否认发布过 2026-07 那份，全序列已纠错）。
- 数据置信版 V4：影子跑 4–6 周攒历史后，与全景等权版对比，重点验证"低政治权重是否钝化制度骤变预警"；两条方法论分歧届时定夺。**勿擅自转正**。
- OJK 新门户 `data.ojk.go.id/SJKPublic` 直爬（屏蔽非印尼IP，需本地/印尼网络）。
- 街头热度：Trends/GDELT 限流→可切 GDELT BigQuery；反对率池升级(YouTube评论区/Kaskus政治版)。已记录待决策。
- 信贷看板：③3.2 APP量级等新数据；④舆情需配置/维护 YouTube、Reddit、X 官方接口并积累8周基线；宏观"待核"点(汇率月度近似值待接BI JISDOR)。
- Modalku 双口径 / ADA Pundi 官网撤统计页 / P2P scraper 各站改版维护。
