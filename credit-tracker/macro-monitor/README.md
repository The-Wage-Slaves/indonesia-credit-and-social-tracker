# 国家宏观指标月度采集器

`macro_monitor.py` 服务信贷看板第一板块，但只生成候选更新，不直接修改正式序列。

## 采集口径

| 指标 | 官方来源 | 实际更新频率 | 每月任务的行为 |
|---|---|---:|---|
| BI 基准利率 | Bank Indonesia | 议息日 | 读取最新决议，按月末生效值提交候选 |
| USD/IDR | BI JISDOR | 工作日 | 读取最新工作日官方值，提交当月候选 |
| CPI 同比 | BPS | 月度 | 读取最新全国 CPI 新闻稿 |
| GDP 同比 | BPS | 季度 | 每月检查，有新季度才提交候选 |
| 失业率 | BPS Sakernas | 通常每年2月/8月调查 | 每月检查，有新发布才提交候选 |

JISDOR 只作为宏观指标。信贷行业历史图的美元换算继续固定使用 `FX=15000`，两者
不得联动。

## 云端配置

BI 页面不需要密钥。BPS WebAPI 需要在 BPS Developer Portal 申请 token，然后添加为
GitHub 仓库 Actions Secret：

1. 打开仓库 `Settings → Secrets and variables → Actions`；
2. 选择 `New repository secret`；
3. Name 填 `BPS_API_KEY`，Secret 填 BPS token；
4. 不要把 token 写进配置文件、PR、日志或本目录。

月度工作流在每月1日运行：

```text
python credit-tracker/macro-monitor/macro_monitor.py
```

产物：

- `output/macro-pending.json`：结构化候选、来源健康度和正式值对照；
- `../dashboard/macro-pending.js`：信贷看板第一板块的黄色待确认提示；
- 根目录 `pending.json` / `pending.js`：统一待确认中心；
- 月度飞书卡：仅在有新候选、缺密钥或采集失败时发送。

确认前，`credit-dashboard.html` 中的 `macroKPI` 及五条正式时间序列保持不变。
