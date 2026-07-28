# V4 影子版周度运行手册

> V4 仍为影子版。本流程遵守人在环：采集和评分脚本不得绕过人类确认修改 V3 正式看板。

## 每周输入

每周需要同步更新：

1. V3 正式 `dashboard/data.js` 的最新已确认周度快照；
2. `data/v4-shadow-input.json` 的 `asOf`、V3支柱分和当周 V4 输入；
3. 新建 `data/evidence/YYYY-MM-DD.json`，并把 `evidenceFile` 指向该文件；
4. 对可能触发红色警报的事件填写 `triggerSignals`；
5. 如需检验四周快速下降，保留 `data/v4-shadow-history.json` 中以前的人类确认快照。

每条证据都必须保留真实观测日期，不能把文件日期当成数据日期：

- `observedAt`：指标实际所属期或事件日期；
- `retrievedAt`：本次取得或复核日期；
- `maxAgeDays`：该类数据允许沿用的最大天数；
- `carryForwardReason`：超过时效窗口时必须填写；
- `sourceType` / `sourceFamily` / `underlyingEventId`：用于来源质量和相关性审计；
- 统计型指标的 `scoreInputs`：原始值、单位、分项权重与连续变换说明。

## triggerSignals 示例

```json
{
  "id": "trigger_2026_08_01_example",
  "eventDate": "2026-08-01",
  "eventType": "interagency_live_fire",
  "verificationStatus": "pending",
  "independentSourceCount": 1,
  "liveFire": true,
  "fatalities": 0,
  "summary": "示例：仍待第二个独立来源和人类确认。"
}
```

允许的 `eventType`：

- `interagency_live_fire`
- `interagency_fatality`
- `formed_unit_refusal`
- `security_defection`
- `parallel_command`

只有 `confirmed` 且独立来源不少于2个的事件才有资格触发红色警报。

## 运行步骤

### 1. 抓取并人工确认

```powershell
python stability-monitor/scripts/street_heat.py
```

查看确认单。没有人类确认时，不更新当周评分输入。

### 2. 生成当周 V4 影子结果

```powershell
python stability-monitor/scripts/score_v4_shadow.py --write-output
```

脚本会：

- 验证 V3 与 V4 截止日期一致；
- 验证 V3 支柱分与正式 `data.js` 一致；
- 验证证据唯一归属、权重和置信标签；
- 计算 V3正式、V3按V4权重和V4影子三个综合分；
- 计算覆盖率、低置信权重和测量置信度；
- 分开计算可用性、新鲜度、来源直达度、原始输入可追溯权重和证据质量指数；
- 拒绝没有沿用理由的过期证据，以及直接填写 `bridgeScore` 的统计型指标；
- 运行四条红色触发器规则；
- 写入日期归档 `v4-comparison-YYYY-MM-DD.json`；
- 刷新 `v4-comparison-latest.json` 和浏览器数据 `v4-comparison-data.js`。

### 3. 人工审阅

打开：

```text
stability-monitor/dashboard/v3-v4-comparison.html
```

重点确认：

- 分数与来源是否一致；
- `observedAt` 是否仍在时效窗口内，沿用理由是否成立；
- 统计型分数能否从 `scoreInputs` 复算；
- 缺失数据是否被明确显示；
- 红色触发器是否存在误报或漏报；
- `pending` 或单一来源事件没有被错误升级；
- V4仍标为 `provisional-shadow`。

### 4. 确认后写入V4影子历史

只有所有者明确确认后运行：

```powershell
python stability-monitor/scripts/score_v4_shadow.py --append-history --confirmed
```

同一日期重复运行不会重复写入；如果试图覆盖已经确认但内容不同的同日快照，脚本会失败。

### 5. 最终校验

```powershell
python stability-monitor/scripts/score_v4_shadow.py --check-output
node .github/scripts/validate_repo.mjs
```

然后提交 PR。V4 历史与 V3 正式历史彼此独立。

## 红色触发器

| 规则 | 触发条件 | 历史要求 |
|---|---|---|
| 军警实弹或死亡 | confirmed、至少2个独立来源，且实弹或死亡≥1 | 无 |
| 拒令、倒戈、平行指挥 | confirmed、至少2个独立来源，事件类型匹配 | 无 |
| 支柱红线 | 强制机构V4分数 `<25` | 无 |
| 四周快速下降 | 相比至少28天前最近确认快照下降 `≥10` 分，并经至少2个来源人工确认 | 至少一份四周前快照 |

触发器不修改综合分。其意义是让低频但严重的强制机构事件不被10%的日常权重稀释。

## 当前限制

- 2026-07-22 是第一份 V4 确认影子快照，因此“四周快速下降”当前显示 `历史不足`；
- 当前没有满足双源确认的红色事件，触发层级为 `normal`；
- 线上/线下街头数据在达到方法论中的12/26周门槛前仍为低置信；
- 当前证据质量指数为65.9%；它不是准确率，主要短板是内部数据包引用和缺少直接原始链接；
- 货币传导仍缺失。影子页会归一化展示，但正式V4必须采用“限期沿用→到期停发”；
- 本流程可以每周重复运行，但不是无人值守自动发布。
