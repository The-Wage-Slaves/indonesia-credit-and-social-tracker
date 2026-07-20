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
- **稳定性看板**：财政/货币/制度/社会/强制机构五支柱评分，方法论 v3（硬数据权重约73%），
  含主权评级、腐败指数、社媒反对率等外部入参，与 1998 危机位置对照，附周度趋势图。

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

## 四、线上部署流程（GitHub Pages）

本仓库已内置自动部署工作流 `.github/workflows/deploy-pages.yml`：
**推送到 `main` 分支 → GitHub Actions 自动把整个仓库发布为 Pages 静态站点**（`index.html` 为入口）。

⚠️ **重要前提 —— 私有仓库用 Pages 需要付费计划：**
- 本仓库为**私有**（含竞对数据与政治分析，不宜公开）。
- GitHub **免费计划的私有仓库无法启用 Pages**；私有 Pages 需 **GitHub Pro（约 $4/月）** 或 Team/Enterprise。
- 因此有两条路：
  1. **升级 Pro** → 在仓库 `Settings → Pages` 把 Source 选为 **GitHub Actions** → 之后每次推 main 自动上线，
     站点仅登录并有权限的协作者可见（私有 Pages 受 GitHub 鉴权保护）。
  2. **不升级** → 保持私有、**不启用 Pages**；同事通过 `git clone` 拉取后本地双击 `index.html` 查看
     （静态站点，体验一致），用 Codex/Claude Code 也是克隆到本地编辑。**推荐这条，零成本零暴露。**
- 🚫 **不要为了用 Pages 而把仓库改成 Public** —— 会把竞对财务数据、政治稳定性分析全部暴露给公网并被搜索引擎索引。

一旦满足前提，部署无需手动操作：`git push origin main` 即触发，Actions 页可看部署状态与站点 URL。

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
合并到 main 会自动触发 Pages 部署（若已启用）。

> 建议在 `Settings → Branches` 给 `main` 加**分支保护规则**（要求 PR、禁止直接 push），
> 从机制上防止误改。用 Codex / Claude Code 的同事：仓库根目录已备好
> `AGENTS.md`（Codex 读）和各目录 `CLAUDE.md`（Claude Code 读），打开仓库即知全部约定与铁律。

---

## 六、目录结构

```
indonesia-dashboard/                          # ← 仓库根 = Pages 站点根
├── index.html                                # ★ 总入口 + 待确认中心
├── pending.json / pending.js                 # 待确认事项（脚本写入，首页读取）
├── .github/workflows/deploy-pages.yml        # Pages 自动部署
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
- 私有 Pages（若启用）受 GitHub 登录鉴权保护，仅协作者可访问。
