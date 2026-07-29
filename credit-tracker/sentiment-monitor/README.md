# 线上信贷舆情恐慌指数 v2

本模块以周频追踪印尼线上信贷（`pinjol` / `pindar` / `paylater`）的短期舆情冲击。
它是“新闻压力＋社媒恐慌”的波动指标，不是行业坏账率、偿付能力或品牌好感度。

所有结果均为 `pilot-pending-human-review`：脚本只生成待确认材料，不会直接覆盖正式历史。

## 双引擎指数

`0 = 平静，100 = 急性关注/恐慌/事件冲击`：

- 25%：新闻密度异常。大量新闻本身即推高风险，不要求先被判为负面；
- 20%：新闻负面程度；
- 20%：社媒讨论量异常；
- 20%：社媒负面、投诉与恐慌占比；
- 15%：经去重的严重事件。

新闻转载和社媒重复内容先去重；同一事件共享一个 `eventId`，严重度只计一次。
前八周使用连续周环比，积累足够的已审历史后自动使用八周滚动中位数/MAD异常值。

缺失组件不会按零分处理，而是从临时计算中剔除并把结果标记为
`provisional-partial-coverage`。数据置信度单独展示，绝不用于压低风险分数。

## 信源覆盖

覆盖不少于稳定性指数街头热度采集器的全部渠道：

| 渠道 | 类型 | 用途 | 访问方式 |
|---|---|---|---|
| Google News RSS | 新闻 | 关键词报道、文章密度、事件聚类 | 公开 |
| 大众媒体 RSS | 新闻 | ANTARA、BBC、CNN Indonesia、Katadata 等已维护源 | 公开 |
| GDELT | 新闻 | 56日报道量基线与媒体 tone | 公开 |
| Google Trends | 关注度代理 | pinjol/galbay/DC/Kredivo 搜索异常 | 公开 |
| Kaskus | 社媒/论坛 | 热帖、互动量、负面语气 | 公开接口 |
| YouTube | 社媒 | 相关视频及其评论、点赞与回复 | 官方 Data API key |
| Reddit r/indonesia | 社媒/论坛 | 新帖、互动量、负面语气 | 公开端点或 OAuth |
| X | 社媒 | 印尼语近期帖子、互动量、负面语气 | 官方 API bearer token |

TikTok/Instagram 暂不做未授权页面爬虫；只有获得稳定、合规的官方或研究接口后才接入。
某个渠道失败或未配置时，原因会写入 `sourceHealth` 和
`collectionDiagnostics.failedOrUnavailableChannels`，不会静默伪装成完整覆盖。

## 红色触发器

满足任一规则才触发红色：

1. 监管介入、严重消费者伤害或系统性平台故障，严重度不低于 0.80，
   且有原始来源和至少两个独立来源；
2. 综合指数不低于 75，新闻压力和社媒压力同时不低于 70；
3. 社媒声量不低于 80、负面占比不低于 65%，并在至少两个平台、两个自然日持续出现。

单一来源或证据门未通过的高风险事件只进入黄色待确认。

## 配置

安装依赖：

```powershell
pip install -r credit-tracker/sentiment-monitor/requirements.txt
```

本地运行可以把 `credit_sentiment_config.example.yaml` 复制为
`credit_sentiment_config.yaml` 后填写 key。真实配置已被 `.gitignore` 排除。
如果本模块配置不存在，脚本会复用
`stability-monitor/scripts/street_heat_config.yaml` 中已有的 YouTube/Reddit key。

GitHub Actions 使用可选仓库 Secrets：

- `YOUTUBE_API_KEY`
- `REDDIT_CLIENT_ID`
- `REDDIT_CLIENT_SECRET`
- `X_BEARER_TOKEN`

未配置 key 的渠道会显示为 `unconfigured`，其余公开信源仍继续运行。

## 运行

离线可复现试算：

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

仓库的 `Weekly digital-credit sentiment` 工作流每周一运行同一脚本，只更新
`bot/weekly-credit-sentiment` 待确认分支，不创建周度数据 PR，也不直接写入
`main`。PR 只用于评分方法、采集器、页面和安全逻辑等系统级更改。

工作流会把本周摘要写入 GitHub Actions run summary。后续通知出口计划接入飞书：
使用仓库 Secret 保存 webhook/应用凭据，把指数、覆盖度、红色事件和证据链接推送
到指定会话；在收到所有者的明确确认前，结果始终保持
`pilot-pending-human-review`。现阶段不接入任何真实 Hook，接口设计和确认边界见
[`REVIEW_REQUEST.md`](REVIEW_REQUEST.md)。

通过红色证据门的事件仍会另开去重 GitHub Issue，作为异常升级记录；普通周度数据
不会创建 Issue。
