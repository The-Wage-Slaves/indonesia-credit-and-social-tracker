# 每周二自动周更（无人工确认）· 运行手册

> 2026-11-17 所有者决定：稳定性周评、国家宏观数据、P2P 竞对数据改为**每周二自动写入 `main`，不再等人审**。
> 执行者是 claude.ai 上的云端定时代理（routine「印尼周更 autopilot」，cron `0 21 * * 2` = 每周三 05:00 吉隆坡/北京时间；周快照日期记为当周周二，即运行时的 UTC 日期）。
> 本文件是该代理的工作说明，也是人类事后复查的依据。代理启动时先读完本文件、`PROJECT_MEMORY.md`、`CLAUDE.md` 与 `AUTOMATIONS.md`。

## 0. 不变的纪律（取消的只是「等人点头」，不是证据标准）

1. **只用可追溯到发布机构的数字改分。** 官方原文、官方 API、官方数据接口（BI、BPS、OJK、MSCI、ECB）或本仓库采集器从这些来源取回的产物可以进分；只有媒体转述的数字写进 changeReason 并标「待补」，**不改分**。「被广泛报道」不等于存在。
2. **拿不到就沿用，并写明原因。** 任何 driver 没有新的合格证据就维持原分，changeReason 写「维持 N：本周无新的官方读数」。不得用旧结果冒充本次结果，不得估算后填入。
3. **事实/引述/判断/待补**四类标签照旧；每个改动的 driver 同步 `score/prev/value/updated/changeReason/sources`。
4. **采集器的拒绝出数机制不许绕过。** 街头热度覆盖率不足会拒绝出分；`market_relative.py` 拒绝出数时不得手填；P2P `confirm_p2p.py` 的拒绝条件（覆盖 <7/9、累计量下降）不许用 `--force` 一类手段绕开。
5. **方法论不动。** 权重、档位、公式、映射一律不改；需要改方法论时只在周度分析里写建议，留给所有者。数据置信版（V4）不转正。
6. **密钥不入库**，不 `git add -f`。

## 1. 时间与输入

| 输入 | 来源 | 何时就绪 |
|---|---|---|
| 街头热度 + 反对率 | `origin/bot/weekly-monitoring:stability-monitor/scripts/street_heat_history.json`（取 `date` = 当天的最后一条） | 周二 cron 01:53 UTC，实际常在 06:40–09:20 UTC 才跑完 |
| 日频事件池 | `origin/bot/daily-risk-alerts:stability-monitor/data/daily-events/YYYY-MM.jsonl` | 每日 |
| 宏观候选 | `origin/bot/monthly-credit-data:credit-tracker/macro-monitor/output/macro-pending.json` | 每月 1 日与每周二 `monthly-credit-data.yml` |
| P2P 抓取 | `origin/bot/monthly-credit-data:credit-tracker/p2p-scraper/results/scrape_<date>.json` | 同上 |
| 市场相对读数 | `origin/bot/weekly-monitoring:stability-monitor/data/market-relative/<WEEK>.json`（由周二 `weekly-credit-sentiment.yml` 在 GitHub 侧采集）。用 `git checkout origin/bot/weekly-monitoring -- <该路径>` 取到工作分支一并提交。**不要在沙箱里跑 `market_relative.py`**：沙箱代理拦截 `app2.msci.com`（2026-11-24 实测） | 与街头热度同一次运行 |

**同日有两条街头热度时**（计划任务延迟 + 手动触发）：历史文件只留最后一次。用 `git log origin/bot/weekly-monitoring -- stability-monitor/scripts/street_heat_history.json` 找当天各次提交，取**成功源更多**的那次；两次落同一反对率档就取源更全的，并在 changeReason 记下两次读数。
**当天没有街头热度**：网络政治情绪维持原分，写明「云端读数未就绪」，不得本地跑 `street_heat.py` 入分。

## 2. 稳定性周评（全景等权版）步骤

按 `CLAUDE.md`「周更流程」执行，区别只在最后一步自动合并：

1. `git checkout -b claude/weekly-<YYYY-MM-DD> origin/main`。
2. `python stability-monitor/scripts/apply_week.py watch`：到期观察项写 `outcome`、改 `status`；新出现的有日期期限补进 watchlist。
3. 读本周日频事件池（上周二之后的全部记录）。每条 severity ≥0.6 的事件都要么在 driver 里有对应变动，要么在 weeklyAnalysis 的「不计分」里写明理由。单源且检索核实不了的，不计分。
   - **观察时点要随事件结项**：事件若已经回答了某个 open 观察项（例如期限前法案已通过、提名已提交），**本周就写 `outcome` 并改 `status`**，不要等到该项日期。
4. 网络检索核实本周事件（优先印尼一线媒体与官方网站；BPS 官网对自动访问有人机验证，**不得绕过**）。**检索下限**：事件池里每个 severity ≥0.6 的事件簇、以及每个本周到期的观察项，至少各检索一次，且必须看到上周二之后发布的结果才算核实；查不到新结果时换印尼语关键词再查一次，仍无才写「检索未见新进展」。
5. 事件进 `stability-monitor/data/event-ledgers.json`（完整日期 + 至少一个来源；致死事件权重 2；最高层级人事更替权重 2），跑 `python stability-monitor/scripts/event_decay.py --date <当天>` 取六个衰减 driver 的分。
6. 股市、汇率两个 driver 读上表的市场相对文件（bot 分支上没有当天文件 = 采集器拒绝出数 → 两项沿用并写明）；JISDOR 最新值取 `macro-pending.json` 的 `usd_idr` 观察值（BI 官方表，采集器取回）。
7. 改 `stability-monitor/dashboard/data.js`：driver、支柱 `score/prev/weekChange`、1998 对照文字里的「当前N」、`weeklyAnalysis`。支柱分 = 半数进位(Σ score×weight + pillarAdj)。
8. `python stability-monitor/scripts/apply_week.py append <当天> fiscal=.. currency=.. institutions=.. social=.. coercive=..`，再 `python stability-monitor/scripts/apply_week.py export`。
9. 数据置信版：证据台账 `data/evidence/<当天>.json` 从上期滚动（有新官方读数的观察项换新 id；**其余每一条都要有 `carryForwardReason`**，包括上期刚换过 id、本期没换的条目），更新 `data/v4-shadow-input.json` 的 `asOf`/`evidenceFile`/`observationIds`/`v3Score`，跑 `python stability-monitor/scripts/score_v4_shadow.py --write-output`。**不追加 V4 history 确认点**（那一步仍留给所有者）。

## 3. 信贷看板：宏观与竞对

1. **宏观**：读 `macro-pending.json` 的 `observations` 与 `changes`。只用 `source_url` 指向 BI/BPS 官方的值。
   - **月度序列**（`gdpData/cpiData/rateData/fxData/unempData`）只追加**已结束**的期间，期间格式与已有条目一致。
   - **`macroKPI` 卡片每周都要对齐最新官方值，月中也一样**：BI 利率决议当周就改卡片（2026-11-24 那次因「11 月未结束」整体跳过，卡片停在旧利率，属于错误）；同时更新「宏观信号」段与 SectionHead 采集日。BI 利率按月末生效值；USD/IDR 用 JISDOR 月末值，**信贷行业 FX=15000 不动**。媒体转述值可放进 KPI 副标题并标「待核」，不进序列。
2. **P2P 竞对**：对 bot 分支上尚未进 `credit-tracker/dashboard/p2p-confirmed.js` 的每个 `scrape_<date>.json`，先 `git checkout origin/bot/monthly-credit-data -- credit-tracker/p2p-scraper/results/scrape_<date>.json` 取到本地，再 `python credit-tracker/p2p-scraper/confirm_p2p.py --batch <date> --dry-run` 看对照表；无拒绝就去掉 `--dry-run` 落盘。脚本拒绝的批次跳过，在最终回复里写原因。
3. **行业数据（BI/OJK 月度余额）不在自动范围内**：`apply_industry_pending.py` 涉及口径起点（`--from`）判断，仍由所有者手动触发；代理只在最终回复里提示 bot 分支上是否有新的行业候选。

## 4. 校验、提交、合并

1. 全部通过才提交：`node .github/scripts/validate_repo.mjs`；`python -m unittest discover -s stability-monitor/scripts -p "test_*.py"`；`python -m unittest discover -s .github/scripts -p "test_*.py"`；`python -m unittest discover -s credit-tracker -p "test_*.py"`。
2. 一次提交，信息 `auto(weekly): <YYYY-MM-DD> 综合 <X>（上期 <Y>）`，正文列各支柱变化、宏观/P2P 写入项、沿用项与原因。
3. `git push origin claude/weekly-<YYYY-MM-DD>`。工作流 `weekly-autopilot-merge.yml` 会重跑校验、合并进 `main`、删分支并触发看板 ZIP 发布与飞书下载链接。**不要自己推 `main`。**
4. 校验不过、无法修复时：不推送；在会话最终回复里写清卡在哪一步，留待所有者处理。

## 5. 最终回复（会话记录即周报）

依次写：综合分与五支柱（本期/上期/原因一句）；街头热度读数与采用哪次运行；本周计入的事件；不计分事件及理由；沿用的 driver 及原因；宏观与 P2P 写入了什么、跳过了什么；需要所有者决定的方法论问题（若有）。
