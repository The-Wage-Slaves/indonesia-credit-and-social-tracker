# Claude Code 启动指令

将以下内容粘贴给Claude Code作为首次指令：

---

我正在从Claude.ai对话迁移一个项目到Claude Code环境中继续开发。请先阅读项目简报，然后帮我搭建工程。

## 项目简述

这是一个印尼消费信贷市场数据追踪系统，包含两个核心功能：
1. **宏观市场月度更新**：从BI和OJK的Excel报表中提取银行/多元金融/P2P贷款余额数据，更新主追踪表
2. **P2P竞品数据抓取**：用Playwright从10家P2P平台官网抓取运营数据

## 请先做以下事情

1. **阅读 `PROJECT_BRIEF.md`**——这是完整的项目文档，包含所有数据源映射、Excel行列对应关系、技术决策记录
2. **检查 `data/` 目录下的源文件和产出文件**，理解数据流
3. **阅读 `p2p-scraper/` 下的抓取脚本**

## 然后帮我实现

### 第一优先级：端到端自动化脚本

写一个Python/Node.js主脚本 `update.py` 或 `update.mjs`，实现：
- 输入：用户将3个OJK/BI源文件放入 `data/source/` 目录
- 自动检测已有数据的最新月份
- 从源文件中提取新月份的数据（使用 PROJECT_BRIEF.md 中记录的行列映射）
- 处理PP9新旧行映射差异（2025年1月起的Listrik/NonListrik/Hybrid拆分）
- 更新主追踪表Excel，保留summary行的Excel公式
- 输出更新后的Excel到 `data/output/`

### 第二优先级：P2P Scraper调试

- 在本地Playwright环境中逐个测试10个平台的抓取
- 针对每个平台的实际DOM结构优化提取逻辑
- 抓取结果自动写入P2P追踪表新列

### 第三优先级：可视化

- 现有的React Dashboard（`dashboard/indonesia_credit_dashboard.jsx`）可以作为参考
- 考虑是否转为独立HTML或轻量web app方便查看

## 项目结构建议

```
indonesia-credit-tracker/
├── PROJECT_BRIEF.md              # 项目文档（数据映射、技术决策）
├── update.py                     # 主更新脚本（待建）
├── data/
│   ├── source/                   # 放入OJK/BI源文件
│   │   ├── SSKI_APRIL_2026.xlsx
│   │   ├── STATISTIK_LEMBAGA_PEMBIAYAAN_DESEMBER_2025.xlsx
│   │   └── STATISTIK_LPBBTI_Desember_2025.xlsx
│   ├── tracker/                  # 主追踪表
│   │   ├── Indonesia-Outstanding_Credit_202512.xlsx
│   │   └── P2P_Players_Data_202605.xlsx
│   └── output/                   # 更新后的文件
├── p2p-scraper/                  # P2P抓取工具
│   ├── package.json
│   ├── scraper.mjs
│   ├── update_excel.mjs
│   └── results/
├── dashboard/                    # 可视化
│   └── indonesia_credit_dashboard.jsx
└── README.md
```

请先确认你理解了项目全貌，然后从第一优先级开始。
