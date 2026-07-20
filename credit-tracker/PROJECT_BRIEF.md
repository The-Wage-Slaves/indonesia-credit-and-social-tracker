# Indonesia Consumer Credit Market Tracker — Project Brief for Claude Code

## 项目概述

这是一个印尼消费信贷市场数据追踪系统，定期从印尼金融监管机构的公开数据报告中提取数据，汇总到Excel追踪表，并进行可视化展示。

**两大核心工作流：**

1. **宏观市场追踪（月度）**：从BI SSKI、OJK Multi-finance、OJK LPBBTI三份Excel报表中提取银行/多元金融/P2P各细分品类的贷款余额数据，更新至主追踪表
2. **P2P竞品追踪（不定期）**：从10家主要P2P平台官网抓取Disbursement、Outstanding、Borrowers等运营数据

---

## 一、宏观市场数据 — 数据源与行列映射

### 数据源文件

| 数据源 | 文件名 | 频率 | 下载地址 |
|--------|--------|------|---------|
| BI SSKI Report | SSKI_[MONTH]_[YEAR].xlsx | 月度 | 见Excel底稿sheet |
| OJK Multi-finance Stats | STATISTIK_LEMBAGA_PEMBIAYAAN_[MONTH]_[YEAR].xlsx | 月度 | OJK统计数据页 |
| OJK P2P (LPBBTI) | STATISTIK_LPBBTI_[Month]_[Year].xlsx | 月度 | OJK统计数据页 |
| RDKB Press Release | 网页新闻稿 | 月度 | OJK RDKB页面 |

### ① BI SSKI Sheet 17 — 银行消费信贷

**行映射（稳定）：**
- Row 35: `Kredit Kendaraan Bermotor` → Bank Vehicles (车贷)
- Row 36: `Kredit Multiguna` → Bank Multipurpose (多用途)
- Row 38: `Kredit Rumah Tangga Lainnya` → Bank Others (其他)
- ⚠️ Bank BNPL 不在SSKI中，来源为RDKB月度新闻稿

**列映射（2025年）：**
- 2025: col 62 (Jan) → col 73 (Dec)
- 2024: col 49 (Jan) → col 60 (Dec)
- 规律：每年12列，逐年递增

**Cross-check方法：** 用已有月份（如Aug 2025）的数据做精确匹配验证

### ② OJK Multi-finance PP9 — 多元金融

**⚠️ 重要：2025年1月起行映射已变更！**

OJK从2025年1月起将车辆融资拆分为 Listrik/Non-Listrik/Hybrid × Baru/Bekas 的6个子行。

**新行映射（2025年1月起）：**
- MF 2W = Sum of rows 37-43（二轮车：新车/二手 × 电动/非电/混动）
- MF 4W = Sum of rows 45-51（四轮车：同上拆分）
- MF Multipurpose Consumer = Sum of rows 64-69（RT非电子+电子+消费其他+教育+医疗+旅游）

**旧行映射（2024年12月及以前）：**
- MF 2W = rows 36+40（Baru+Bekas）
- MF 4W = rows 44+48（Baru+Bekas）

**列映射：**
- Col 2 = Dec 2024, Col 3 = Jan 2025, ..., Col 14 = Dec 2025
- 每个版本文件只包含最近13个月数据

**Cross-check注意：** Jan 2025数据可能存在OJK追溯修订（2W从111050→107413），属正常现象

### ③ OJK LPBBTI Sheet 9 — P2P借贷

**行映射：**
- Total = Row 4 (Jawa Outstanding) + Row 11 (Luar Jawa Outstanding)

**列映射：**
- 每月3列：Rekening, Outstanding, TWP90
- Outstanding列 = 每组第2列
- Dec 2024 = col 4, Jan 2025 = col 7, ..., Dec 2025 = col 40
- 规律：起始col + (month_index × 3)

### ④ BNPL数据 — RDKB月度新闻稿

Bank BNPL和MF BNPL数据来自OJK RDKB（Rilis Data dan Kebijakan Bulanan）月度新闻稿，需要web搜索获取。搜索关键词示例：`OJK RDKB "kredit BNPL" bank "[Month] 2025" triliun`

---

## 二、主追踪表 Excel 结构

**文件：** `Indonesia-Outstanding_Credit_[YYYYMM].xlsx`

**Sheet: 信贷市场测算-月度**

| Row | 内容 | 单位 |
|-----|------|------|
| 4 | Bank-Vehicles IDR | Rp Miliar |
| 5 | Bank-Vehicles USD | USD Bn (@FX=15000) |
| 6 | Bank-Multipurpose IDR | Rp Miliar |
| 7 | Bank-Multipurpose USD | USD Bn |
| 8 | Bank-BNPL IDR | Rp Miliar |
| 9 | Bank-BNPL USD | USD Bn |
| 10 | Bank-Others IDR | Rp Miliar |
| 11 | Bank-Others USD | USD Bn |
| 12 | MF-2W IDR | Rp Miliar |
| 13 | MF-2W USD | USD Bn |
| 14 | MF-4W IDR | Rp Miliar |
| 15 | MF-4W USD | USD Bn |
| 16 | MF-Multipurpose IDR | Rp Miliar |
| 17 | MF-Multipurpose USD | USD Bn |
| 18 | MF-BNPL IDR | Rp Miliar |
| 19 | MF-BNPL USD | USD Bn |
| 20 | P2P IDR | Rp Miliar |
| 21 | P2P USD | USD Bn |
| 22 | 含车总额 USD | =XX5+XX7+XX11+XX13+XX15+XX17+XX21 |
| 23 | 不含车总额 USD | =XX7+XX9+XX11+XX17+XX19+XX21 |
| 24 | 狭义消金 USD | =XX17+XX19+XX21 |

**列映射（2025年）：**
- Col 23 = Jan 2025, Col 24 = Feb, ..., Col 34 = Dec 2025
- 已完成数据填充到 Col 34 (Dec 2025)

**FX Rate:** 固定 1 USD = 15,000 IDR

**Summary行公式规则（必须保留为Excel公式，不能硬编码）：**
- Row 22: 含车不含房总额 = 所有USD行加总（不含BNPL的Bank row 9）
- Row 23: 不含车不含房 = Multipurpose + BNPL + Others + MF-MP + MF-BNPL + P2P
- Row 24: 狭义消金 = MF-MP + MF-BNPL + P2P（仅非银机构）

---

## 三、P2P竞品追踪

**文件：** `P2P_Players_Data_[YYYYMM].xlsx`

**Sheet: P2P- Major Player Tracking**

4个section，每个section独立header行 + player行：
- Disbursement (rows 4-17): 当年放款额 USD Bn
- Outstanding (rows 18-32): 贷款余额 USD Bn
- Total Borrowers (rows 33-47): 累计借款人（格式如 "6.79M"）
- Active Borrowers (rows 48-61): 活跃借款人

**10个活跃平台URL（Col A）：**
1. AdaKami: https://www.adakami.id/about
2. Lentera Dana (Shopee Loan): https://www.lenteradana.co.id/statistic
3. Kredifazz: https://kredifazz.id/disclosure.html
4. Akulaku (Asetku): https://www.asetku.co.id/#/
5. Kredit Pintar: https://www.kreditpintar.com/about-us
6. Easycash: https://easycash.id/about/us/company-team
7. Julo: https://www.julo.co.id/about
8. Koinworks: https://koinp2p.com/
9. Funding Societies (Modalku): https://app.modalku.co.id/progress
10. ADA Pundi: https://www.adapundi.com/about/achievements

**抓取挑战：** 绝大多数网站用JS/SPA动态加载，需要headless browser（Playwright）。仅Lentera Dana支持服务端渲染。

---

## 四、已交付文件清单

| 文件 | 说明 |
|------|------|
| `Indonesia-Outstanding_Credit_202512.xlsx` | 主追踪表（已更新至Dec 2025） |
| `indonesia_credit_dashboard.jsx` | React可视化Dashboard（含P2P竞品tab） |
| `p2p-scraper/scraper.mjs` | Playwright抓取脚本 |
| `p2p-scraper/update_excel.mjs` | 抓取结果写入Excel脚本 |
| `p2p-scraper/package.json` | Node.js项目配置 |
| `p2p-scraper/README.md` | 操作说明 |

---

## 五、待办事项 & 自动化目标

### 已完成
- [x] Sep-Dec 2025数据提取并写入Excel
- [x] PP9新行映射识别与适配
- [x] P2P Apr 2025数据修订
- [x] React Dashboard（含总览/银行/MF/P2P/竞品/明细6个tab）
- [x] Playwright抓取脚本框架

### 待完成
- [ ] **OJK PP9 Jan 2025数据修订**：MF 2W从111050→107413、MF 4W从244305→241367，需确认是否回溯修正
- [ ] **年度sheet修复**：信贷市场测算-年度 有81个预存#VALUE!/#REF!错误
- [ ] **P2P抓取脚本调试**：需在本地Playwright环境中逐个调试各平台的提取逻辑
- [ ] **端到端自动化**：下载源文件→提取数据→更新Excel→生成Dashboard 全流程脚本化
- [ ] **定时运行**：cron/GitHub Actions 定期执行
- [ ] **增量更新**：自动检测已有最新月份，只提取新数据

---

## 六、关键技术决策记录

1. **FX Rate固定15000**：不使用实时汇率，保持历史数据可比性
2. **PP9行映射变更**：OJK在2025年将车辆融资拆分为6个子行（Listrik/NonListrik/Hybrid），Dec 2024列仍用旧格式。提取代码需根据日期列号判断使用新/旧映射
3. **BNPL数据源**：非结构化来源（RDKB新闻稿），需web搜索+正则提取，是自动化的瓶颈
4. **P2P player数据格式**：借款人数以"6.79M"/"1.22M(current year)"等文本格式存储，需正则解析
5. **Summary行必须保持Excel公式**：不能用Python计算后硬编码，要保留=SUM()格式使Excel可自动重算
