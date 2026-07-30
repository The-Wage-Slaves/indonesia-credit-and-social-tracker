# Agent 工作指南（Codex / Claude Code 通用）

> 本文件是 AI 编码代理（OpenAI Codex 读本文件；Claude Code 另有各目录的 CLAUDE.md，内容一致）
> 的项目上下文。人类 reviewer 请先读 `REVIEW.md`。

## 这是什么项目

印尼市场双看板监测系统（纯静态 HTML，无构建步骤）+ 配套自动取数脚本链：

1. **消费信贷市场追踪** `credit-tracker/dashboard/credit-dashboard.html` —— 四板块：
   ①国家宏观 ②信贷行业(BI/OJK监管数据) ③P2P竞对 ④线上信贷舆情恐慌指数
2. **稳定性指数** `stability-monitor/dashboard/indonesia-stability-index-pro.html` ——
   五支柱评分（财政/货币/制度/社会/强制机构），方法论 v3（73%硬数据权重）
3. 入口 `index.html`（含"待确认事项"卡片，读 `pending.js`）

本地预览：`python -m http.server 8777`（或直接双击 HTML；CDN 需联网，用 jsdelivr 勿用 unpkg）。

## 目录地图

```
index.html                      # 总入口 + 待确认中心
pending.json / pending.js       # 待确认事项（脚本写入，首页读取）
credit-tracker/
  dashboard/credit-dashboard.html   # 信贷看板（数据+逻辑单一真源，手工维护，React/Recharts CDN）
  update_credit.py                  # 月度取数: BI Tabel_17 / OJK监控 / Shopee直抓
  macro-monitor/macro_monitor.py    # 月度宏观: BI利率/JISDOR + BPS CPI/GDP/失业率 → 待确认
  p2p-scraper/scraper.mjs           # Playwright 10家P2P官网抓取(8/10已通,逐家定制提取器)
  sentiment-monitor/credit_sentiment.py # 周度新闻+社媒双引擎恐慌指数 → pending待确认 + 红色证据门
  PROJECT_BRIEF.md                  # 数据源行列映射 + 技术决策（改提取逻辑前必读）
stability-monitor/
  dashboard/data.js                 # ★ 五支柱评分数据(唯一要常改的文件)
  dashboard/engine.js               # 渲染引擎(一般不动)
  scripts/street_heat.py            # 周度舆情: 六源热度 + DeepSeek反对率 → HTML确认单
  scripts/apply_week.py             # weekly快照写入 + dashboard-data.json导出
  docs/METHODOLOGY.md + METHODOLOGY_V3_PROPOSAL.md   # 方法论全文与v3校验档案
  CLAUDE.md / CONTEXT.md            # 项目沿革与分析交接
```

## 铁律（改代码前必读）

1. **人在环**：所有脚本只"抓取→写 pending 待确认"，**绝不直接改看板数据**。
   评分/数据写入必须经人类确认。不要"优化"掉这个流程。
2. **事实/判断分离**：稳定性评分每条依据带标签（事实/引述/判断/待补）。改 data.js
   必须同步更新 changeReason、sources、updated；支柱分 = Σ(子因子×权重) 取整，
   改分后自行验算（`node -e` 对 data.js 求值核对）。
3. **口径稳定**：FX 固定 15000（不用实时汇率，保历史可比）；量表/阈值档是经校验的
   校准（见 METHODOLOGY_V3_PROPOSAL.md），调整需先与所有者讨论，不要顺手改。
4. **密钥**：`street_heat_config.yaml` / `credit_sentiment_config.yaml` 含真实key，
   已被 .gitignore 排除。只提交各自的 example 模板，不要把key写进任何会提交的文件。
5. **外部接口的已知坑**：GDELT 限流约1次/5秒勿密集测试；Google Trends/OJK新门户
   (data.ojk.go.id) 在部分网络不可达；Kaskus 偶发掐连接需退避重试；unpkg 不可用。
6. **方法论名称不可回退**：对外页面和文档固定使用「全景等权版」（内部代号 v3）
   与「数据置信版」（内部代号 v4）。`v3`/`v4` 只可用于代码、文件名和括号内技术别名，
   不得重新作为页面主标题、卡片名或面向读者的独立标签。CI 会拦截旧称回归。

## 例行任务（人类或agent均可跑）

- 周度：`python stability-monitor/scripts/street_heat.py` → 确认单+首页待确认
- 信贷舆情周度：`python credit-tracker/sentiment-monitor/credit_sentiment.py --write-output` → 仅生成待确认结果
- 月度：`python credit-tracker/macro-monitor/macro_monitor.py` + `python credit-tracker/update_credit.py` +
  `cd credit-tracker/p2p-scraper && node scraper.mjs`
- 评分确认后写入：改 `data.js` → `python scripts/apply_week.py append <date> fiscal=.. ...`

## 当前遗留（按优先级）

1. OJK 新门户 data.ojk.go.id/SJKPublic 解析（锁非印尼区IP，需本地网络探测）
2. 反对率池升级：YouTube评论区、Kaskus forum/21 政治版
3. Modalku 双口径待人工确认；ADA Pundi 官网撤统计页待另寻
4. 信贷舆情积累满8周后，将声量项从周环比升级为滚动中位数+MAD稳健异常值；③3.2 APP量级等外部数据
5. 飞书推送/云端部署（与所有者单独沟通后再动）
