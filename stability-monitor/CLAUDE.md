# 印尼稳定性监测项目 · Claude Code 工作指南

> 本文件由 Claude Code 自动读取，作为项目上下文。它是从一段多轮对话交接过来的项目，
> 你（Claude Code 实例）没有那段对话的记忆，但读完本文件 + `CONTEXT.md` 即可接上进度。

## 这个项目是什么

一位在雅加达做战略研究与投资的分析师（中资金融科技公司，覆盖东南亚+非洲的跨境消费信贷）
需要持续监测印尼的宏观—政治—市场稳定性。项目有三个可交付物：

1. **稳定性指数仪表盘** (`dashboard/`) —— 五支柱评分体系的可视化 HTML，数据与逻辑分离。
2. **每日新闻简报系统** (`brief/`) —— GitHub Actions 定时抓取印尼新闻、用 Claude API 解读、推送飞书。
3. **分析知识库** (`docs/`) —— 七轮深度对话沉淀的判断、方法论、事件时间线。

## 用户是谁（影响你怎么工作）

- 专业分析师，偏好**直接、高信息密度、不说套话**。讨厌"值得关注"式的空泛表述。
- 中英文皆流利，分析工作用中文。技术上不是工程师，但概念理解力强——
  解释技术方案时要讲清"能做到什么、不能做到什么"的诚实边界，不要伪装能力。
- 反复强调**严谨**：区分事实与判断、可复现的计量、来源标注。这是项目的核心价值观。

## 核心工作原则（从对话继承，务必延续）

1. **事实与判断分离。** 任何评分、结论，都要标清哪些是硬数据、哪些是引述、哪些是我的判断。
   仪表盘用 4 类标签（事实/引述/判断/待补），文档里也保持这个习惯。
2. **可复现。** 每个支柱分 = Σ(子因子×子权重) + 标注的定性调整量。不允许拍脑袋的黑箱数字。
3. **诚实边界。** 不伪装成实时数据终端。硬数据标注来源日期；判断项明说是判断。
4. **盯变化率，不只盯水位。** 稳定性分析的价值在 momentum 和"离临界多远"，不在绝对分。
5. **不做安全免责式的稀释。** 用户要的是真实的风险判断，不是每段都加"仅供参考"。

## 目录结构

```
indonesia-monitor/
├── CLAUDE.md              # 本文件（Claude Code 自动读取）
├── CONTEXT.md             # 七轮对话的分析交接（务必先读）
├── dashboard/
│   ├── indonesia-stability-index-pro.html   # 深度方法论版（外链引用下面两个js）
│   ├── data.js            # 五支柱评分数据 + weekly周度快照（改这里更新评分）
│   ├── engine.js          # 渲染引擎（含顶部周度趋势图）
│   └── simple-version.html # 早期简版
├── scripts/               # 周度工具链（2026-07-15新增）
│   ├── street_heat.py     # 街头动员热度采集器v2：6源(Trends/Kaskus/YouTube/GDELT×2/大众RSS)
│   │                      #   → 终端+HTML确认单(output/street-heat-latest.html)，人在环
│   ├── street_heat_config.yaml  # Reddit/YouTube免费key（含密钥，勿外传）
│   ├── API_KEYS_GUIDE.md  # 给用户的key申请指引（各2分钟）
│   ├── street_heat_history.json # 周度热度留档
│   └── apply_week.py      # append: 往data.js的weekly追加周快照(自动备份)
│                          # export: data.js→data/dashboard-data.json(Node求值)
├── brief/                 # 每日简报系统（详见 brief/README.md）
│   ├── src/               # 抓取/解读/推送三层
│   ├── config/sources.yaml # 信息源(2026-07-15体检重组:8个死源移除,补6个国民新闻源)
│   └── .github/workflows/brief.yml
├── docs/
│   ├── METHODOLOGY.md     # 五支柱评分方法论全文
│   ├── TIMELINE.md        # 2026 关键事件时间线
│   └── ANALYSIS.md        # 七轮对话的核心分析结论
└── data/
    └── dashboard-data.json # 由 apply_week.py export 生成（云端部署备用）
```

## 当前状态与下一步

**已完成：** 五支柱框架 + 深度方法论 HTML + id-brief 系统全套代码 + 全部分析文档。
2026-07-15 增量：① HTML改外链data.js/engine.js（周更只改data.js）；② 顶部周度趋势图（DATA.weekly）；
③ scripts/工具链（街头热度采集+周快照写入）；④ sources.yaml 体检重组；⑤ 与信贷看板互切导航；
⑥ **方法论 v3 量化重构**（经用户质疑→跨国/跨时代校验→批准执行，全过程见
docs/METHODOLOGY_V3_PROPOSAL.md）：序数项14→8、硬数据权重38%→73%，删"财政纪律可信度/
财政锚/央行独立性/防守有效性"序数档，代之以 赤字债务轨迹/融资结构脆弱性/货币政策可信度/
防守消耗效率(弹性公式) 等quant项；新增网络政治情绪(热度+DeepSeek反对率)、军警冲突计数、
军队渗透度、精英清洗计数、关键机构俘获度。当前支柱分 49/39/40/56/37、综合44。
**重要口径注**: v3制度支柱(40)高于v2(33)是重锚定结果非局势好转；weekly两期已按v3回溯。

**周更流程（每周做一次）：**
1. `python scripts/street_heat.py` → 用户确认街头热度建议分数
2. 重评各支柱driver（score/prev/changeReason/updated）+ 支柱score/weekChange
3. `python scripts/apply_week.py append YYYY-MM-DD fiscal=.. currency=..(五支柱)` 追加weekly
4. asOf 由 apply_week 自动更新；如手改评分记得同步

**待办：**
- [x] YouTube key 已配置(2026-07-15)；Reddit 已放弃（API收紧无法注册），换 Kaskus 开放接口(无需key)。
      注意：Google Trends/GDELT 有限流，同一天别密集跑；用户每周本地跑一次即可
- [ ] Kaskus hot_threads 疑似偏生活化编辑推荐流，政治信号弱(首期仅1/25条)——攒几周数据后
      评估是否改爬 Berita&Politik 版块(forum/21)的活跃线程
- [ ] 街头热度作为新driver接入"社会与街头"支柱（等4周历史攒够+用户确认校准后）
- [ ] 飞书 webhook + 部署方式（GitHub Actions vs 云服务器）——用户说"后面单独沟通"，别催
- [ ] P2P scraper 调试（用户定为最低优先级，做完其他后提醒确认）

**重要：** 评分数据（`data.js` 里的分数、阈值、序数档）是可以、也应该被用户挑战的。
如果用户质疑某个校准，和他讨论、调整，不要固守。方法论详见 `docs/METHODOLOGY.md`。

## 技术约定

- 仪表盘是纯静态 HTML，浏览器直接打开，不需要构建。唯一外部依赖是 Chart.js（从 CDN 加载）。
- brief 系统：Python 3.12，`pip install -r brief/requirements.txt`，模型用 `claude-opus-4-8`。
- 时区注意：雅加达 UTC+7，上海 UTC+8。GitHub Actions cron 用 UTC。
- 用户在上海/雅加达双地，倾向云端部署（GitHub Actions 起步）。
