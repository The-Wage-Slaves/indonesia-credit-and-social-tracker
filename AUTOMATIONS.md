# 定时工作与飞书决策收件箱

> 单一真源：新增、删除或改变任何定时任务时必须同步本表。例行数据不得创建 PR；
> PR 只承载方法论、采集器、页面、安全与自动化逻辑的系统级变化。

## 总览

| 频率 | 工作 | 当前入口 | 自动产物 | 人工决策 | 飞书策略 | 状态 |
|---|---|---|---|---|---|---|
| 每日 09:43* | 稳定性重大新闻/制度骤变警报 | GitHub workflow `daily-risk-alerts.yml` → `daily_alert.py --no-push` | `bot/daily-risk-alerts` 证据池；不改分数 | 红/高危/橙事件是否纳入周评 | 仅异常日推送 | 云端自动；不依赖本机开机 |
| 每日 09:43* | Pinjol/Pindar 舆情波动警报 | 同一 `daily-risk-alerts.yml` → `credit_daily_alert.py --write-output` | `daily-credit-alert-pending.json`；不改周度历史 | 严重事件、跨新闻/社媒异常是否升级 | 仅异常日推送 | 云端自动；不依赖本机开机 |
| 每周二 09:53* | 线上信贷恐慌指数＋稳定性街头热度 | GitHub workflow `weekly-credit-sentiment.yml` | `bot/weekly-monitoring` 待确认数据；不建 PR | 确认分数、信源覆盖和告警证据 | 红/橙风险才推送 | 云端统一执行；不依赖本机开机 |
| 每周二，采集后人工确认 | 稳定性两版周评 | 云端 `street_heat.py` 证据 → 人工确认后 `apply_week.py` / `score_v4_shadow.py` | 全景等权版与数据置信版同日结果 | 先确认街头热度与日频事件，再确认两版分数 | 风险或采集失败才推送 | 评分写入仍坚持人在环 |
| 每月1日 10:43* | BI/OJK 行业数据更新 | GitHub workflow `monthly-credit-data.yml` → `update_credit.py` | `bot/monthly-credit-data` 暗门待确认项 | 核对月份、单位、来源和异常值 | 有新数据或失败时推送 | 云端自动；不依赖本机开机 |
| 每月1日 10:43* | 国家宏观指标更新 | 同一 `monthly-credit-data.yml` → `macro-monitor/macro_monitor.py` | BI利率、JISDOR、CPI候选；每月检查GDP与失业率新发布；不改正式序列 | 核对期间、单位、官方原文和修订值 | 有新数据、缺少BPS密钥或采集失败时推送 | 云端自动；不依赖本机开机 |
| 每月1日 10:43* | P2P 竞对官网数据 | 同一 `monthly-credit-data.yml` → `p2p-scraper/scraper.mjs` | `p2p-pending.js` 暗门逐格确认 | 核对各公司口径与缺失项 | 有新数据或覆盖不足时推送 | 云端自动；不依赖本机开机 |
| `main` 看板变更后 | 最新看板下载包 | `publish-dashboard-package.yml` | 覆盖同一个 Private Release ZIP | 无评分决策；仅通知已发布最新版 | 每次有效变更推送下载链接 | 云端事件触发；无本机常驻/轮询 |
| 每日/每周 | 印尼新闻简报 | `stability-monitor/brief/src/main.py` 或既有 `indo_news` | 新闻摘要/历史 | 新闻阅读；异常事件可转稳定性证据 | 既有飞书 Hook | 仓库 workflow 仍为手动；本机 `indo_news` 为整合目标 |

\* 为 cron 目标时间，实际送达受 GitHub 排队影响可能更晚，见下节。

时间默认 Asia/Shanghai；印尼西部时间比北京时间慢一小时。正式部署时以任务调度器
显示的时区为准，不能只看 cron 字符串。

### 定时不是准点：cron 是「最早不早于」，不是承诺

GitHub Actions 的 `schedule` 是尽力而为，高峰期排队。**整点（`:00`）是最堵的时刻**，
官方文档明确建议避开。2026-07-31~08-02 连续三天实测，`0 2 * * *`（应 10:00
Asia/Shanghai）的实际启动时间是 13:20 / 13:12 / 13:12——**稳定延迟约 3 小时 12 分**，
证据见云端事件池记录里的 `generatedAt: 2026-08-02T05:12:46`（UTC）。

因此三个采集工作流的 cron 都移到了非整点，并留出十几分钟缓冲：

| 工作流 | cron (UTC) | 目标送达 (GMT+8) |
|---|---|---|
| `daily-risk-alerts` | `43 1 * * *` | 09:43 |
| `weekly-credit-sentiment` | `53 1 * * 2` | 09:53 |
| `monthly-credit-data` | `43 2 1 * *` | 10:43 |

`validate_repo.mjs` 已把「cron 分钟位不得为 0」固化为不变量。**排查推送时间异常时，
先看 Actions 的实际启动时间，不要假设 cron 准点执行。**

### 采集工作流不得由 push 触发

PR #10 的分支一度给三个采集工作流加了 `push:` 触发器，结果每个提交都跑一遍完整采集：
2026-08-03 11:46–12:31 之间产生了十几次连续失败的运行，并且**当天的定时运行整个消失了**
（同一 concurrency group 里排队中的运行被后来的 push 运行挤掉）。

采集类工作流只能由 `schedule` 与 `workflow_dispatch` 触发，已固化为不变量。

### 严重度不等于证据：日频告警的三道门

信贷侧的 `severity` 来自 `event_profile` 的**关键词匹配，只看标题**——一篇「小心网贷
高息、会被催收恐吓」的科普文和一条真实催收恐吓事件同样命中 `teror`，都是 0.86。
2026-08-02 实测推送的三条里，两条是科普提醒和个人转述，一条是已确认过的旧事件，
三条都只有单一来源、无原始来源。

因此 `high_pending` 除严重度外还必须同时满足：

1. **事件类型门**：`eventType` 属于 `ALERTABLE_EVENT_TYPES`。`general_sentiment`、
   `industry_update` 是话题热度不是事件；`credit_quality_stress` 走周度指数。
2. **证据门**：`independentSourceCount >= 2` **或** `hasPrimarySource`。
3. **已确认抑制**：id 在 `credit-tracker/sentiment-monitor/acknowledged-events.json`
   里的不再推送——事件只要还在采集窗口内就会天天重新聚类出来，没有这张表就会天天重推。
   **确认动作由人做，脚本只读不写。**

达到严重度但过不了门的进 `lowEvidenceLeads`：写入待确认文件供周评查阅，**不推飞书、
不抬高当日 level**。卡片只报折叠数量，不隐瞒也不打扰。

稳定性侧另有地域门：信源池混有国际新闻，2026-08-03 实测把巴基斯坦警察局爆炸和摩洛哥
移民事件判成了印尼稳定性事件并标为高危待核。提示词要求输出 `country`，非印尼一律剔除。

### 产物路径不得被 .gitignore 排除

云端工作流以 `git add <路径>` 把待确认产物提交到 `bot/*` 分支。若该路径被
`.gitignore` 排除，`git add` 会**静默失败**（错误被 `|| true` 吞掉），随后
`git diff --cached --quiet` 判定「无变化」而跳过提交——表现为工作流「成功」但
产物永不上云。2026-07-30 已在 `stability-monitor/data/daily-events/` 上踩过此坑。

新增任何云端产物路径时，必须先用 `git check-ignore -v <路径>` 确认未被忽略。

### bot 分支的证据池必须累积，不能从 main 重建

`daily-risk-alerts.yml` 原本用 `git checkout -B bot/daily-risk-alerts origin/main`
重建分支再解包产物。但 runner 从 `main` 检出，而 `daily-events/*.jsonl` 不在 `main` 上，
于是**每天的提交只含当天一条，前几天被整个覆盖**。

后果不是"少了点历史"：周更流程第 ⓪ 步规定这个分支是日频事件的单一真源，而它实际
只保存一天，等于每周丢掉 6 天证据。2026-08-04 周更时发现分支上只剩当天一条记录，
本周事件只能靠网络检索重建。

现在优先接续既有 bot 分支（没有才回落 `main`），并由
`.github/scripts/merge_bot_evidence.py` 按 `date` 做并集合并——同日重跑以本次为准，
坏行留档不丢弃。已由 `test_merge_bot_evidence.py` 固化，含负向测试。

**周频是同一个坑，2026-08-20 才修（PR #31）。** `bot/weekly-monitoring` 上的
`street_heat_history.json` 同样每周被抹掉：实测只剩 07-16 与 08-20 两条，08-04 与
08-11 的读数已永久丢失（数值仅存于 `data.js` 的 changeReason）。而「网络政治情绪」
driver 的环比恰恰依赖这个文件。日频修完后周频原样留着没人动——所以合并脚本现在
**两条流水线共用同一份**，累积型文件登记在 `JSON_ARRAY_BY_DATE`，工作流断言也
参数化到两条流水线上跑（subTest），再加一条采集流水线而忘了接就会立刻红。

**新增任何 bot 分支累积型产物时，先问一句：这个文件在 main 上吗？不在，就不能从 main 重建分支。**

### 卡片中文化依赖 key 必须显式传给发布步骤

飞书卡片把印尼语标题转成中文，靠 `cloud_publish.py` 的 `enrich_zh()` 调 DeepSeek。
拿不到 `DEEPSEEK_API_KEY` 时它**静默跳过**（推送可靠性优先于可读性），卡片照发但
退回印尼语原文。GitHub Actions 的 `env:` 是 step 级的，采集步骤传了 key **不等于**
发布步骤也拿到——2026-07-30 踩过一次：PR #8 建好 `headlineZh`/`summaryZh` 槽位却
没写生成器，字段恒为 `null`，只有一条硬编码中文让它看起来是好的。

`validate_repo.mjs` 已把「日频与周频发布步骤自身的 env 必须含 `DEEPSEEK_API_KEY`」
固化为不变量（按 step 边界判定，不能只看文件里出现过该字符串）。

人工核验过的中文摘要写入 `cloud_publish.py` 的 `MANUAL_ZH`，优先级高于模型输出，
且不为其消耗 API 调用。

### 本机与云端不得同时运行同一任务

同一任务在本机计划任务与云端工作流各跑一次，会**重复推送飞书**，且本机脚本不经
`cloud_publish.py`、拿不到 `decisionId` 去重。切换到云端前先确认该工作流已成功
产出，再停用对应的本机计划任务；顺序颠倒会出现两边都不推的静默失效窗口。

## 三种推送，而不是三套机器人

统一复用现有 `indo_news` 飞书机器人，但按决策时效分卡：

1. **日频异常卡**：稳定性新闻警报和 Pinjol/Pindar 波动警报。`normal` 静默；
   红色、高危待核、橙色才推送。卡片必须写清证据数、失效信源与“未写入看板”。
2. **周度风险卡**：周二统一运行信贷恐慌指数与街头热度。正常静默；红/橙风险、
   重点证据候选或采集覆盖失败时，标题明确写「每周二例行」，给出分数、周环比、
   红色触发原因、中文事件解释和本机看板入口。指数下降但独立事件门触发时，必须
   明示“红色不是由指数上升造成”。历史满8周后再增加滚动中位数/MAD异常幅度。
3. **月度数据卡**：BI/OJK、BPS/BI 宏观指标、P2P 竞对采集。只报告有新月份、
   季度/半年度发布、口径变化、抓取失败或待补录字段，不把成功抓取直接当成已确认数据。

所有卡片使用同一字段约定：

```json
{
  "decisionId": "任务名:数据日期:事件或批次指纹",
  "cadence": "daily|weekly|monthly",
  "level": "normal|amber|high_pending|red",
  "status": "pending-human-review",
  "summary": "一句话",
  "evidence": [],
  "coverage": {},
  "reviewRequired": true
}
```

`decisionId` 用于去重；相同任务、数据日期和事件不得重复打扰。飞书只负责通知，不作为
确认数据库。确认仍需回到仓库待确认文件/暗门，或由所有者明确指令代理写入。

“待人工确认”必须在卡片中翻译为可执行的三选一决定：①确认留痕；②降级为观察；
③驳回并说明原因。这里确认的是风险事件是否留痕及其级别，不是允许脚本自动改分。

`--push` 只表示“允许使用飞书这一传输通道”，不代表每次运行都发送。是否发送由统一
风险门决定：`normal` 静默；`amber/high_pending/red` 或关键采集失败才发送。云端工作流
统一调用 `.github/scripts/cloud_publish.py`，各业务脚本不再各自维护不同推送标准。

## 密钥、云端与本机看板

- GitHub Actions 使用仓库 Secrets：
  `FEISHU_WEBHOOK_URL`（兼容 `FEISHU_WEBHOOK`）和
  `FEISHU_SIGN_SECRET`（兼容 `FEISHU_SECRET`）。
- `DEEPSEEK_API_KEY` 同时服务信贷社媒分类、街头反对率和稳定性日频事件分类。
- `YOUTUBE_API_KEY` 同时服务信贷舆情和稳定性街头热度。
- `BPS_API_KEY` 只服务月度宏观采集器，用于 BPS 官方 CPI、GDP、失业率发布；
  BI 基准利率和 JISDOR 公开页面不需要密钥。
- YouTube、Reddit、X 分别使用现有官方 API 凭据。缺密钥时必须显示
  `unconfigured`，不能把“没采到”解释为“舆情平静”。
- 任何真实 Hook、API key、`.env` 或本机绝对路径都不得提交。

宏观口径分开管理：国家宏观板块的 USD/IDR 使用 BI 官方 JISDOR；信贷行业板块的
美元换算仍固定 `FX=15000` 以保持历史可比，宏观采集器不得联动改变该换算参数。


## 飞书下载最新版看板

`main` 中明确的看板/数据路径发生变化后，`publish-dashboard-package.yml` 才运行：
生成经过白名单与本地引用校验的 ZIP，覆盖 Release tag `dashboard-latest` 下同名资产，
再通过飞书发送固定下载链接。电脑上不安装开机服务、不轮询 GitHub，也不调用任何 LLM。

下载包只包含 `main` 中已经确认并合并的静态页面与数据；bot 分支待确认产物不会越过
人在环进入包内。仓库为 Private，下载者需要 GitHub 登录和仓库只读权限。

## 自动化边界

- 上述日/周/月采集均在 GitHub Actions 运行，不依赖本机或 Windows 计划任务。
- 每日/每周的印尼新闻简报不在本次改造范围内，仍由 `indo_news` / Claude Code 管理。
- 例行产物只写 bot 待确认分支；不会创建数据 PR，也不会自动修改
  全景等权版、数据置信版或信贷正式历史。
