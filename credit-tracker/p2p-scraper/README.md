# Indonesia P2P Player Data Scraper

自动抓取印尼主要P2P借贷平台的统计数据（Disbursement、Outstanding、Borrowers），并更新Excel追踪表。

## 覆盖平台

| Player | URL | 数据位置 |
|--------|-----|---------|
| AdaKami | adakami.id/about | JS动态加载 |
| Lentera Dana (Shopee Loan) | lenteradana.co.id/statistic | 服务端渲染 ✅ |
| Kredifazz | kredifazz.id/disclosure.html | JS动态加载 |
| Akulaku (Asetku) | asetku.co.id | SPA |
| Kredit Pintar | kreditpintar.com/about-us | JS动态加载 |
| Easycash | easycash.id/about/us | JS动态加载 |
| Julo | julo.co.id/about | SPA |
| Koinworks | koinp2p.com | SPA |
| Modalku | app.modalku.co.id/progress | SPA |
| ADA Pundi | adapundi.com/about/achievements | SPA |

## 安装

```bash
# 安装依赖
npm install

# 安装 Chromium 浏览器（首次运行需要）
npm run install-browser
```

**系统要求**: Node.js >= 18, 约 500MB 磁盘空间（用于 Chromium）

## 使用方法

### 1. 抓取数据

```bash
npm run scrape
```

输出: `results/scrape_YYYY-MM-DD.json`

每个 player 的结果包含:
- `parsed.disbYTD_usd`: 当年放款额 (USD Bn)
- `parsed.outstanding_usd`: 贷款余额 (USD Bn)
- `parsed.totalBorrowers`: 累计借款人数
- `parsed.activeBorrowersYTD`: 当年活跃借款人数
- `raw._allRp`: 页面上提取的所有 Rp 值（用于手动检查）

### 2. 更新Excel

```bash
node update_excel.mjs results/scrape_2026-05-27.json /path/to/P2P_Players_Data_202605.xlsx
```

输出: `P2P_Players_Data_202605_updated.xlsx`（在对应sheet新增一列）

### 3. 定期自动运行（可选）

**macOS/Linux crontab**（每月15日运行）:
```bash
crontab -e
# 添加:
0 10 15 * * cd /path/to/p2p-scraper && npm run scrape >> scrape.log 2>&1
```

**Windows Task Scheduler**: 创建基本任务，触发器设为每月，操作为运行 `npm run scrape`。

## 数据解析说明

各平台页面结构不同，解析器通过以下模式匹配：
- 在页面文本中搜索 `Rp` 后跟数字的模式
- 通过上下文关键词（`tahun berjalan`, `Sejak Berdiri`, `Outstanding`, `Penerima Dana`）判断数据类型
- 自动处理千分位分隔符差异（逗号 vs 句点）

**注意**: 如果某个平台更新了网页结构，解析可能失败。此时请检查 JSON 中的 `raw._allRp` 字段，手动确认数值，并在 `scraper.mjs` 中调整对应的提取逻辑。

## 汇率

固定汇率: 1 USD = 15,000 IDR（与主追踪表保持一致）

## 文件结构

```
p2p-scraper/
├── package.json          # 项目配置
├── scraper.mjs           # 主抓取脚本
├── update_excel.mjs      # Excel更新脚本
├── README.md             # 本文件
└── results/              # 抓取结果输出目录
    └── scrape_YYYY-MM-DD.json
```
