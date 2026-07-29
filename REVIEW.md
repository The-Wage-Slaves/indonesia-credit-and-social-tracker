# 印尼市场监测系统 · Review 包

> 给 reviewer：这份文档是全部成果与技术思路的自足综述。看完本文 → 双击 `index.html`
> 体验产品 → 用文末的问题清单反馈。如果你用 Codex/Claude Code 检查代码，
> agent 上下文已备好（`AGENTS.md` / 各目录 `CLAUDE.md`），直接在仓库根目录开会话即可。

## 一、这是什么

一个面向印尼消费信贷业务的**双看板决策支持系统**，纯静态 HTML（双击即用，无需部署），
数据由半自动脚本链供给，所有数据写入走"人在环"确认流程：

| 看板 | 回答的问题 | 更新频率 |
|---|---|---|
| 📊 消费信贷市场追踪 | 市场有多大、谁在增长 | 月度（跟随BI/OJK发布） |
| 🧭 稳定性指数（五支柱） | 宏观-政治-市场离临界多远 | 周度 |

**体验路径**：双击 `index.html` → 两张卡片进两个看板 → 首页底部"待确认事项"是
自动取数的出口（脚本抓到新数据先进这里，人确认后才入库）。

## 二、成果清单（截至 2026-07-29）

1. **信贷看板重构**：白底四板块（宏观KPI+信号解读 / 行业五子tab / 竞对财务+APP量级 /
   新闻＋社媒双引擎舆情监测），页脚含手工录入暗门（localStorage，双周期数据可自助补录）
2. **稳定性方法论 v3**：经跨国（中/美/马/日）与跨时代（2019/2024/2026）双重校验后的量化重构——
   序数项 14→8、硬数据权重 38%→**73%**；新增主权评级/腐败指数(CPI+WJP)/融资结构/
   防守消耗弹性公式/军警冲突计数等入参；当前正式读数43.4（界面43；财政48/货币40/
   制度37/社会55/强制37）。数据置信版V4影子值46.4，证据质量指数65.9%
3. **街头动员热度工具**（周度）：六源三角测量（Google Trends双词篮/Kaskus/YouTube/GDELT×2/大众RSS）
   + **DeepSeek反对率分类**（抽检11/12命中；首期：民间侧反对率50% vs 媒体侧25%——
   "线上炸锅未上街"的量化证据）→ HTML确认单 + 建议分数
4. **自动取数管道**：BI银行侧全自动（固定URL+标签定位，交叉验证精确命中）；
   OJK双线监控（旧页+新门户探测）；**P2P竞对 8/10 家官网自动抓取**（Playwright逐家定制，
   数值与既有序列全部合理递进）；宏观数据会话内搜索更新
5. **待确认工作流**：所有管道产出汇入首页卡片，人确认后写入，形成完整闭环

## 三、技术思路（为什么这么做）

- **纯静态、零构建**：使用者是分析师不是工程师。HTML+CDN(jsdelivr)双击即用；
  数据(data.js)与渲染(engine.js)分离，周更只碰数据文件
- **人在环而非全自动**：评分含判断成分、源数据有口径陷阱（如OJK的PP9行映射2025年变更、
  SSKI四个月发布时滞），自动写入的风险大于收益。脚本负责脏活（抓/算/比对），人只做确认
- **可复现优先**：每个评分 = Σ(子因子×权重)+标注调整量；quant项给阈值公式与实测值，
  ordinal项给五档标尺与落档依据；每条依据标注 事实/引述/判断/待补
- **领先指标偏置**：稳定性分析盯变化率与先行信号（搜索/视频热度先于媒体报道先于评级行动），
  舆情权重向民间侧倾斜
- **抓取策略分层**：能 requests 就不用 headless（BI/Shopee/Kaskus API）；JS站才上
  Playwright；X 仅走可选官方 API，TikTok/Instagram 无合规接口时不硬抓

## 四、数据源与自动化矩阵

| 数据 | 源 | 状态 |
|---|---|---|
| 银行消贷3序列 | BI SSKI Tabel_17.xls（固定URL） | 🟢 全自动（源头有~4月时滞） |
| 多元金融3序列+P2P行业 | OJK SLP/LPBBTI Excel | 🟡 旧页停更2025.12，新门户(data.ojk.go.id)锁区待攻 |
| BNPL 2序列 | OJK RDKB新闻稿（非结构化） | 🔴 半自动（搜索辅助+人工确认） |
| P2P竞对 10家×4指标 | 各官网 | 🟢 8/10自动（Modalku口径歧义/AdaPundi撤页） |
| 宏观5指标 | BPS/BI | 会话内搜索（BPS有API可升级） |
| 舆情6源+反对率 | Trends/Kaskus/YouTube/GDELT/RSS/DeepSeek | 🟢 周度脚本 |
| 信贷恐慌指数 | Google News/媒体RSS/GDELT/Trends/Kaskus/YouTube/Reddit/X | 🟡 双引擎已合并；社媒实测覆盖和8周基线待积累 |

## 五、已知限制（诚实边界）

- 稳定性评分的 ordinal 项（8个）仍含结构化判断；量表校准为初值，攒4周历史后转环比口径
- 街头热度中 YouTube 分量首期满格（校准钝化），反对率测的是"标题立场"非"评论民意"（升级方向已列）
- 汇率固定15000（可比性优先），美元计数值≠市价折算
- 部分宏观点位标注"待核"（2026年1-4月BI利率假设、2026.01汇率反推值）
- 跨国/跨时代校验打分为校准级（结构化判断），非实时精确评分
- 信贷恐慌指数的两周审阅样本只有新闻证据，社媒分明确显示为不可用而非平静；
  飞书通知与现有日频新闻Hook尚未接入

## 六、请重点 Review 的问题

### PR #7：线上信贷恐慌指数 v2（已合并）

代码与周度暂存边界已经进入 `main`，后续运行时请继续重点检查：

1. 五项输入是否 MECE：新闻密度25%、新闻负面20%、社媒声量20%、
   社媒负面20%、严重事件15%；
2. 缺失社媒信源时，临时分采用可用权重重分配并显式标记
   `provisional-partial-coverage`，是否符合使用预期；
3. Google Trends/Kaskus/YouTube评论/GDELT/RSS/Reddit 加上 Google News
   与可选官方 X API 的覆盖，是否足以支撑周频；
4. 红色触发的三条独立路径（硬事件证据门、新闻社媒同步急升、多平台持续社媒峰值）
   是否过松或过严；
5. 每周 Actions 只更新 `bot/weekly-credit-sentiment` 待确认分支和 run summary，
   不创建周度数据PR、不直接写正式历史；飞书通知待所有者提供现有Hook格式后接入。

1. **五支柱框架**：支柱与子因子的正交性、权重预设（均衡/投资/合规三档）是否合理？
2. **量表校准**：各 quant 项的阈值档（如 CDS <70/70-100/100-150、外资持债<15%基准65分）
   与序数档锚定是否符合你的经验？
3. **街头热度**：六源权重（领先组55%）、反对率并入公式（60%热度+40%反对率）、
   热度→分数换算刻度是否认可？
4. **数据口径**：Modalku 两个"Total Pendanaan"块（Rp9.57T vs Rp89.38T）应取哪个？
   FX固定15000 vs 实时汇率的取舍？
5. **产品形态**：待确认工作流的交互是否顺手？还缺什么板块/指标？
6. **云端协作方案**（见所有者另发的方案说明）：GitHub私有仓+Actions的路线有无异议？

## 七、文件导航

- 产品：`index.html` → 两看板
- 方法论：`stability-monitor/docs/METHODOLOGY.md`（框架）+ `METHODOLOGY_V3_PROPOSAL.md`（v3校验档案，含跨国/跨时代验证表）
- 数据映射：`credit-tracker/PROJECT_BRIEF.md`
- 脚本：`credit-tracker/update_credit.py`、`p2p-scraper/scraper.mjs`、
  `credit-tracker/sentiment-monitor/credit_sentiment.py`、`stability-monitor/scripts/street_heat.py`
- 信贷舆情审阅边界：`credit-tracker/sentiment-monitor/REVIEW_REQUEST.md`
- Agent上下文：`AGENTS.md`（Codex）、`stability-monitor/CLAUDE.md`（Claude Code）
- 密钥：不在包内；模板 `street_heat_config.example.yaml` /
  `credit_sentiment_config.example.yaml`，申请指引 `scripts/API_KEYS_GUIDE.md`
