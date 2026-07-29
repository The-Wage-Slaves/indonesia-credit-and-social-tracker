# 定时工作与飞书决策收件箱

> 单一真源：改变任何定时任务必须同步本表。例行数据不得创建 PR；PR 只承载系统级逻辑变化。

| 频率 | 工作 | 入口 | 产物/人工确认 | 飞书策略 | 状态 |
|---|---|---|---|---|---|
| 每日 10:00 | 稳定性重大新闻/制度骤变 | `stability-monitor/scripts/daily_alert.py` | `daily-events/*.jsonl` 证据池；人工决定是否入周评 | 仅异常日 | PR #8 已实现；本机任务需核对 |
| 每日，建议 10:15 | Pinjol/Pindar 舆情波动 | `credit_daily_alert.py --write-output --push` | pending JSON；人工决定是否升级 | 仅异常日 | PR #8 新增；等 Hook 后启用 |
| 每周一 | 线上信贷恐慌指数 | `credit_sentiment.py` / `weekly-credit-sentiment.yml` | bot 待确认数据，不建 PR | 周卡；红色高亮 | 采集已自动；飞书待接 |
| 每周二 10:00 | 稳定性两版周评 | `street_heat.py` → `apply_week.py` / `score_v4_shadow.py` | 确认街头热度、日频事件与两版分数 | 一张决策清单 | 本机提醒 + 人工/代理执行 |
| 每月 | BI/OJK 行业数据 | `credit-tracker/update_credit.py` | 暗门待确认 | 新数据或失败时 | 半自动 |
| 每月 | P2P 竞对官网数据 | `credit-tracker/p2p-scraper/scraper.mjs` | `p2p-pending.js` 逐格确认 | 新数据/覆盖不足时 | 半自动 |
| 每日/每周 | 印尼新闻简报 | `stability-monitor/brief/src/main.py` 或既有 `indo_news` | 新闻摘要；异常可转证据 | 既有 Hook | 本机为整合目标 |

时间默认 Asia/Shanghai；印尼西部时间慢一小时。部署时必须核对调度器时区。

## 统一决策收件箱

复用现有 `indo_news` 飞书机器人，分为日频异常卡（normal 静默）、周度确认卡、月度数据卡。
`decisionId=任务名:数据日期:事件或批次指纹` 用于去重。所有结果保持
`status=pending-human-review` 和 `reviewRequired=true`；飞书只通知，不是确认数据库。

## 密钥与部署

- 使用 `FEISHU_WEBHOOK_URL`（兼容 `FEISHU_WEBHOOK`）和
  `FEISHU_SIGN_SECRET`（兼容 `FEISHU_SECRET`）。
- 社媒分类使用可选 `DEEPSEEK_API_KEY`；YouTube/Reddit/X 使用官方凭据。
- 缺 key 显示 `unconfigured`；采集成功但零条显示 `empty`，都不能解释成“舆情平静”。
- Hook、key、.env 和本机绝对路径不得提交。

PR #8 只交付代码和接口，不擅自开启新外部推送。合并并配置 Hook 后，先手动验证覆盖率和误报，
再启用 Windows 计划任务。
