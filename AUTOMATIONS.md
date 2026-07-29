# 定时工作与飞书决策收件箱

> 单一真源：新增、删除或改变任何定时任务时必须同步本表。例行数据不得创建 PR；
> PR 只承载方法论、采集器、页面、安全与自动化逻辑的系统级变化。

## 总览

| 频率 | 工作 | 当前入口 | 自动产物 | 人工决策 | 飞书策略 | 状态 |
|---|---|---|---|---|---|---|
| 每日 10:00 | 稳定性重大新闻/制度骤变警报 | GitHub workflow `daily-risk-alerts.yml` → `daily_alert.py --no-push` | `bot/daily-risk-alerts` 证据池；不改分数 | 红/高危/橙事件是否纳入周评 | 仅异常日推送 | 云端自动；不依赖本机开机 |
| 每日 10:00 | Pinjol/Pindar 舆情波动警报 | 同一 `daily-risk-alerts.yml` → `credit_daily_alert.py --write-output` | `daily-credit-alert-pending.json`；不改周度历史 | 严重事件、跨新闻/社媒异常是否升级 | 仅异常日推送 | 云端自动；不依赖本机开机 |
| 每周二 10:15 | 线上信贷恐慌指数＋稳定性街头热度 | GitHub workflow `weekly-credit-sentiment.yml` | `bot/weekly-monitoring` 待确认数据；私有看板刷新；不建 PR | 确认分数、信源覆盖和告警证据 | 红/橙风险才推送 | 云端统一执行；不依赖本机开机 |
| 每周二，采集后人工确认 | 稳定性两版周评 | 云端 `street_heat.py` 证据 → 人工确认后 `apply_week.py` / `score_v4_shadow.py` | 全景等权版与数据置信版同日结果 | 先确认街头热度与日频事件，再确认两版分数 | 风险或采集失败才推送 | 评分写入仍坚持人在环 |
| 每月1日 11:00 | BI/OJK 行业数据更新 | GitHub workflow `monthly-credit-data.yml` → `update_credit.py` | `bot/monthly-credit-data` 暗门待确认项 | 核对月份、单位、来源和异常值 | 有新数据或失败时推送 | 云端自动；不依赖本机开机 |
| 每月1日 11:00 | P2P 竞对官网数据 | 同一 `monthly-credit-data.yml` → `p2p-scraper/scraper.mjs` | `p2p-pending.js` 暗门逐格确认 | 核对各公司口径与缺失项 | 有新数据或覆盖不足时推送 | 云端自动；不依赖本机开机 |
| 每日/每周 | 印尼新闻简报 | `stability-monitor/brief/src/main.py` 或既有 `indo_news` | 新闻摘要/历史 | 新闻阅读；异常事件可转稳定性证据 | 既有飞书 Hook | 仓库 workflow 仍为手动；本机 `indo_news` 为整合目标 |

时间默认 Asia/Shanghai；印尼西部时间比北京时间慢一小时。正式部署时以任务调度器
显示的时区为准，不能只看 cron 字符串。

## 三种推送，而不是三套机器人

统一复用现有 `indo_news` 飞书机器人，但按决策时效分卡：

1. **日频异常卡**：稳定性新闻警报和 Pinjol/Pindar 波动警报。`normal` 静默；
   红色、高危待核、橙色才推送。卡片必须写清证据数、失效信源与“未写入看板”。
2. **周度风险卡**：周二统一运行信贷恐慌指数与街头热度。正常静默；红/橙风险、
   重点证据候选或采集覆盖失败时，给出分数、覆盖率、与上期差异和私有看板入口。
3. **月度数据卡**：BI/OJK/P2P 竞对采集。只报告有新月份、口径变化、抓取失败或
   待补录的字段，不把成功抓取直接当成已确认数据。

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

`--push` 只表示“允许使用飞书这一传输通道”，不代表每次运行都发送。是否发送由统一
风险门决定：`normal` 静默；`amber/high_pending/red` 或关键采集失败才发送。云端工作流
统一调用 `.github/scripts/cloud_publish.py`，各业务脚本不再各自维护不同推送标准。

## 密钥、云端与私有看板

- GitHub Actions 使用仓库 Secrets：
  `FEISHU_WEBHOOK_URL`（兼容 `FEISHU_WEBHOOK`）和
  `FEISHU_SIGN_SECRET`（兼容 `FEISHU_SECRET`）。
- `DEEPSEEK_API_KEY` 同时服务信贷社媒分类、街头反对率和稳定性日频事件分类。
- `YOUTUBE_API_KEY` 同时服务信贷舆情和稳定性街头热度。
- YouTube、Reddit、X 分别使用现有官方 API 凭据。缺密钥时必须显示
  `unconfigured`，不能把“没采到”解释为“舆情平静”。
- `SITES_BYPASS_BEARER_TOKEN` 与 `DASHBOARD_INGEST_TOKEN` 只用于 GitHub Actions
  把经过限制的待确认文件写入私有 Sites；端点只接受白名单路径，不接受正式评分历史。
- 任何真实 Hook、API key、`.env` 或本机绝对路径都不得提交。

## 自动化边界

- 上述日/周/月采集均在 GitHub Actions 运行，不依赖本机或 Windows 计划任务。
- 每日/每周的印尼新闻简报不在本次改造范围内，仍由 `indo_news` / Claude Code 管理。
- 例行产物只写 bot 待确认分支和私有看板待确认层；不会创建数据 PR，也不会自动修改
  全景等权版、数据置信版或信贷正式历史。
