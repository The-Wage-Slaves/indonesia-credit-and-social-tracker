# 印尼消费信贷 & 社会稳定监测系统

> Indonesia Credit & Social Tracker — 一个自包含、零构建的双看板决策支持系统，
> 面向印尼消费信贷业务。纯静态 HTML（双击即用），数据由半自动脚本链供给，
> 所有数据写入走「人在环」确认流程。

---

## 一、项目用途

两套独立但互补的监测体系，共用一个入口页 `index.html`：

| 看板 | 回答的问题 | 更新频率 | 入口 |
|---|---|---|---|
| 📊 **消费信贷市场追踪** | 市场有多大、谁在增长 | 月度 | `credit-tracker/dashboard/credit-dashboard.html` |
| 🧭 **稳定性指数（五支柱）** | 宏观—政治—市场离临界多远 | 周度 | `stability-monitor/dashboard/indonesia-stability-index-pro.html` |

- **信贷看板**四板块：①国家宏观数据（GDP/BI利率/CPI/汇率/失业率，2024年起月度序列）
  ②信贷行业数据（BI/OJK 监管报表：银行/多元金融/P2P 各品类贷款余额）
  ③竞对数据（9家 P2P 平台财务运营 + APP 下载量/月活）④舆情监测（留位）。
- **稳定性看板**：财政/货币/制度/社会/强制机构五支柱评分，含主权评级、腐败指数、社媒反对率等
  外部入参，与 1998 危机位置对照，附周度趋势图。当前有**两套并行方法论**（命名按方法差异）：
  - **「全景等权版」**（生产/正式，内部代号 v3）：五柱各 20% 等权、政治维度充分计入、允许一事件多维计分、硬数据权重约 73%。
  - **「数据置信版」**（影子/实验，内部代号 v4，见 `docs/METHODOLOGY_V4_DRAFT.md`）：按数据客观度加权（降政治权重）、分离测量置信度、单一归属、尾部风险用触发器。
  > 代码 / 文件内部仍沿用 `v3`/`v4` 标识以免破坏引用；对外统一用上面两个中文名。

---

## 二、本地运行方法

看板是**纯静态页面，无需构建、无需 Node/Python 服务**即可查看。

**最简单（推荐给只看不改的同事）：**
直接双击 `index.html` → 浏览器打开 → 点卡片进两个看板。
> 图表依赖 CDN（React/Recharts/Chart.js，走 jsdelivr），**需联网**；平时能刷网页即可。

**起本地服务器（部分浏览器对 file:// 读取同目录 .js/.json 有限制时用）：**
```bash
# 在本仓库根目录执行
python -m http.server 8777
# 浏览器打开 http://localhost:8777/index.html
```

**跑数据脚本（需要 Python 3.12 / Node）：**
```bash
# P2P 竞对抓取（9家，Playwright + KrediOne 官网JSON接口）
cd credit-tracker/p2p-scraper && npm install && node scraper.mjs

# 信贷月度取数（BI直抓 / OJK监控 / Shopee快检）
python credit-tracker/update_credit.py

# 稳定性·街头动员热度（六源 + DeepSeek反对率 → HTML确认单）
pip install -r stability-monitor/brief/requirements.txt   # 或按需装 pytrends feedparser pyyaml requests
python stability-monitor/scripts/street_heat.py
```

> **密钥**：脚本用到的 YouTube / DeepSeek key 放在
> `stability-monitor/scripts/street_heat_config.yaml`——**此文件含真实密钥，已被 .gitignore 排除，不会上传**。
> 新克隆仓库的同事：复制 `street_heat_config.example.yaml` 为 `street_heat_config.yaml`，
> 按 `stability-monitor/scripts/API_KEYS_GUIDE.md` 填入自己的免费 key。

---

## 三、数据更新方法（人在环工作流）

核心原则：**脚本只负责「抓取→写入待确认区」，绝不直接改看板**。
首页 `index.html` 底部有「📋 待确认事项」卡片；信贷看板页脚有「✎ 数据管理」暗门。
抓到的新数据先进这两处，人核对/修改后一键写入，再由维护者固化进源文件。

| 数据 | 怎么更新 |
|---|---|
| **P2P 竞对**（9家×4指标） | 跑 `node p2p-scraper/scraper.mjs` → 结果进信贷看板「✎ 数据管理」暗门表格 → 逐格核对/补录 → 「确认写入」→ 需永久固化则把 JSON 交给维护者写进 `credit-dashboard.html` 的 `p2pRaw` |
| **信贷行业**（银行/MF/P2P 月度余额） | 跑 `python update_credit.py`，BI 银行侧自动、OJK 待新门户、BNPL 半自动搜索；新月份在暗门录入 |
| **宏观数据**（GDP/利率/CPI/汇率/失业率） | 会话内检索更新，改 `credit-dashboard.html` 的 `macroKPI/gdpData/...` 数组 |
| **APP 量级**（下载量/月活） | 数据源为「点点数据」估算；更新时重新生成 `credit-tracker/dashboard/app-metrics-data.js`（结构见该文件） |
| **稳定性评分**（五支柱） | 每周：改 `stability-monitor/dashboard/data.js` 各 driver 的 score/changeReason → 支柱分 → `python scripts/apply_week.py append YYYY-MM-DD fiscal=.. currency=.. institutions=.. social=.. coercive=..` 追加周快照 |
| **汇率口径** | 看板「✎ 数据管理」暗门内可一键改 USD/IDR（默认15,000 为历史可比口径），全站 USD 图表即时重算，仅存本浏览器 |

> 详细数据源行列映射见 `credit-tracker/PROJECT_BRIEF.md`；
> 稳定性方法论见 `stability-monitor/docs/METHODOLOGY.md` + `METHODOLOGY_V3_PROPOSAL.md`。

---

## 四、发布与访问策略

本仓库含竞对数据与政治稳定性分析，默认只允许本地访问。`.github/workflows/deploy-pages.yml`
已改为手动说明工作流，不具备 Pages 发布权限，也不会在推送 `main` 时上传仓库内容。

个人长期预览推荐在 Windows PowerShell 运行一次：

```powershell
powershell -ExecutionPolicy Bypass -File .\\scripts\\setup_local_preview.ps1
```

之后飞书或桌面快捷方式可直接打开 `http://127.0.0.1:8777/`。后台任务每15分钟
快进同步 `main`，本地服务器只绑定回环地址，不对局域网或互联网开放。临时预览仍可
在仓库根目录运行 `python -m http.server 8777 --bind 127.0.0.1`。

GitHub 的“私有仓库”不等于“Pages 站点仅协作者可见”。受访问控制的私有 Pages
只适用于满足 GitHub Enterprise Cloud 组织条件的场景；个人 Pro/Team 计划不能作为本项目的
访问控制方案。如未来确需线上共享，应先选择带身份认证的私有托管方案，并只发布明确的文件白名单。

---

## 五、协作规范（分支 + Pull Request，请务必遵守）

**不要直接改 `main`。** 每项修改走独立分支 → PR → 审核合并：

```bash
git checkout main && git pull                 # 先同步最新
git checkout -b feat/描述性分支名              # 建独立分支
# ...在分支上改动、提交...
git add -A && git commit -m "简述改了什么"
git push -u origin feat/描述性分支名           # 推分支（不是 main）
```
然后在 GitHub 网页上对该分支 **New Pull Request → 指定 reviewer → 逐行看 diff → 批准后 Merge 到 main**。
合并到 main 不会触发线上发布；发布功能默认禁用。

> 建议在 `Settings → Branches` 给 `main` 加**分支保护规则**（要求 PR、禁止直接 push），
> 从机制上防止误改。用 Codex / Claude Code 的同事：仓库根目录已备好
> `AGENTS.md`（Codex 读）和各目录 `CLAUDE.md`（Claude Code 读），打开仓库即知全部约定与铁律。

---

## 六、目录结构

```
indonesia-dashboard/                          # ← 仓库根
├── index.html                                # ★ 总入口 + 待确认中心
├── pending.json / pending.js                 # 待确认事项（脚本写入，首页读取）
├── .github/workflows/deploy-pages.yml        # 禁止误发布的手动说明工作流
├── AGENTS.md                                  # Codex 上下文；REVIEW.md = 给人的综述
├── credit-tracker/                            # 【消费信贷市场追踪】
│   ├── dashboard/credit-dashboard.html        #   ★ 信贷看板（数据+逻辑单一真源）
│   ├── dashboard/app-metrics-{data,panel}.js  #   APP 量级数据 + 图表组件
│   ├── dashboard/p2p-pending.js               #   scraper 产出的待确认数据
│   ├── update_credit.py                       #   月度取数（BI/OJK/Shopee）
│   ├── p2p-scraper/scraper.mjs                #   9家 P2P 官网抓取
│   ├── data/{source,tracker,output}/          #   源文件 / 主追踪表 / 产出
│   └── PROJECT_BRIEF.md                        #   数据源行列映射 + 技术决策
└── stability-monitor/                         # 【五支柱稳定性指数】
    ├── dashboard/{indonesia-stability-index-pro.html, data.js, engine.js}
    ├── scripts/{street_heat.py, apply_week.py, street_heat_config.example.yaml, API_KEYS_GUIDE.md}
    ├── docs/{METHODOLOGY, METHODOLOGY_V3_PROPOSAL, TIMELINE, ANALYSIS}.md
    ├── brief/                                 #   每日新闻简报系统（Python）
    └── CLAUDE.md / CONTEXT.md                 #   项目上下文与交接
```

---

## 七、安全与数据敏感性

- 仓库**保持私有**：含 P2P 竞对财务数据、印尼政治稳定性分析、内部方法论。
- **真实密钥永不入库**：`street_heat_config.yaml` 已 .gitignore；克隆后用 `.example.yaml` 模板自填。
  切勿 `git add -f` 该文件。
- 默认不发布 Pages；需要线上共享时，必须使用带身份认证的私有托管并设置发布白名单。
