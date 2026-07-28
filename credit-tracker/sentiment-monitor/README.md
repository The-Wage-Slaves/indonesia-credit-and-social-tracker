# 线上信贷舆情恐慌指数

本模块以周频追踪印尼线上信贷（`pinjol` / `pindar`）的短期舆情冲击。
它回答“近期是否出现声量和风险事件的异常升温”，不是行业基本面评分，也不是品牌好感度。

## 指数

`0 = 平静，100 = 急性恐慌/事件冲击`：

- 35%：新闻声量的连续周环比冲击；
- 30%：按来源质量加权的负面语气；
- 25%：本周最严重的去重事件；
- 10%：独立来源覆盖广度。

同一事件的多篇报道保留为声量，但共享一个 `eventId`，严重度只计一次。
积累八周以上历史后，声量项应从周环比升级为基于滚动中位数和 MAD 的稳健异常值。

## 红色触发器

满足以下全部条件才触发红色：

1. 监管介入、消费者严重伤害或平台系统性压力事件；
2. 严重度不低于 0.80；
3. 至少一个监管机构或其他原始来源；
4. 至少两个独立域名交叉确认。

单一来源或尚待确认的高风险事件只进入黄色待确认，不改变指数。

## 运行

离线可复现的两周试算：

```powershell
python credit-tracker/sentiment-monitor/credit_sentiment.py `
  --as-of 2026-07-28 `
  --fixture credit-tracker/sentiment-monitor/fixtures/recent-two-weeks.json `
  --write-output
```

联网周更：

```powershell
python credit-tracker/sentiment-monitor/credit_sentiment.py `
  --as-of YYYY-MM-DD `
  --write-output
```

联网模式使用 Google News RSS 的固定印尼语查询词篮。输出始终写入 `output/`
并标为 `pilot-pending-human-review`；脚本不会自动覆盖已确认的 dashboard 历史。

仓库的 `Weekly digital-credit sentiment` 工作流每周一运行同一脚本。它只更新
`bot/weekly-credit-sentiment` 分支并新建或刷新待审 PR；不会直接写入 `main`。
只有通过“高严重度 + 原始来源 + 至少两个独立域名”证据门的事件才会另开一个
去重的 GitHub 红色告警 issue。实时抓取失败的查询会保存在
`collectionDiagnostics.failedQueries`，不能被静默当作完整覆盖。
