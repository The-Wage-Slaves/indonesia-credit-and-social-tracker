# 印尼宏观 / 经济 / 金融科技 每日简报

每个工作日早上 7:30(雅加达时间)推送 5-8 条精选新闻 + 每条解读 + 当日综述;
每周五 17:00 推送结合历史指标的周度深度分析。

跑在 GitHub Actions 上,零运维、免费额度足够。用 `claude-opus-4-8` 做解读。

---

## 一、部署步骤

### 1. 建仓库

新建一个**私有** GitHub 仓库,把本目录内容推上去。

```bash
git init
git add .
git commit -m "init: 印尼简报"
git remote add origin git@github.com:<你的用户名>/id-brief.git
git push -u origin main
```

### 2. 拿飞书 webhook

飞书目标群 → 右上角设置 → 群机器人 → 添加机器人 → **自定义机器人** →
起个名字(比如"印尼简报") → 复制 webhook URL。

**安全设置**里建议勾选"签名校验",会给你一个 secret。也可以只勾"自定义关键词"
(填"印尼"),那样就不需要 secret。

### 3. 配 Secrets

仓库 → Settings → Secrets and variables → Actions → New repository secret:

| Name | Value |
|---|---|
| `ANTHROPIC_API_KEY` | 你的 Anthropic API key |
| `FEISHU_WEBHOOK` | 上一步拿到的 webhook URL |
| `FEISHU_SECRET` | 若开启签名校验则填,否则**不要创建这个 secret** |

### 4. 先体检信息源

**不要跳过这一步。** RSS 源会改版、会挂。

仓库 → Actions → 「印尼简报」→ Run workflow → mode 选 `check-feeds` → 跑。

看日志,把状态为"失败"或"空"的源从 `config/sources.yaml` 里删掉或换 URL。
一半以上的源活着就够用。

### 5. 干跑一次

同样的入口,mode 选 `dry-run`。这会走完抓取和解读,把结果打印到日志但**不推送**。
确认解读质量符合预期(尤其是 `comment` 字段是否说了人话)。

### 6. 正式跑

mode 选 `daily`,手动触发一次,看飞书群里有没有收到卡片。
成功后定时任务会自动生效。

---

## 二、本地运行

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

export ANTHROPIC_API_KEY=sk-ant-...
export FEISHU_WEBHOOK=https://open.feishu.cn/open-apis/bot/v2/hook/...
# export FEISHU_SECRET=...   # 若开了签名校验

python -m src.main --check-feeds   # 体检
python -m src.main --dry-run       # 干跑
python -m src.main                 # 日报
python -m src.main --weekly        # 周报
```

---

## 三、调优

### 改口味

`src/analyze.py` 里的 `READER_PROFILE` 是读者画像,决定了 Claude 怎么写解读。
想改关注重点、改语气、改"讨厌什么",改这里就够了,不用动 prompt 主体。

### 改关注线索

`config/sources.yaml` 的 `priority_keywords` 决定哪些新闻会被强制送进候选池。
FATF / PPATK / 宪法法院 / Pasal 50A 已经在最高优先级组里。
命中这些词的条目在推送卡片里会被标红为「紧要」并置顶。

### 加信息源

`config/sources.yaml` 的 `feeds` 里加一条:

```yaml
  - name: 源名称
    url: https://example.com/feed
    tier: 2          # 1=官方 2=主流财经 3=行业垂直,影响打分权重
    lang: id         # id 或 en
    topics: [macro, fintech]
```

加完记得跑一次 `--check-feeds`。

### 改推送时间

`.github/workflows/brief.yml` 的 cron。**注意是 UTC**:

- 雅加达时间 = UTC + 7
- 上海时间 = UTC + 8

想让日报在雅加达 08:00 到,就写 `cron: "0 1 * * 1-5"`。

GitHub Actions 的定时触发**偶尔会延迟几分钟到几十分钟**,对每日新闻无影响。
若你要求分钟级准时,换轻量云服务器 + 系统 cron。

### 换推送渠道

`src/push_feishu.py` 是唯一与飞书耦合的文件。换企业微信/Slack/邮件,
重写 `build_daily_card`、`build_weekly_card`、`send` 三个函数即可,
`main.py` 不用动。

---

## 四、指标序列

`data/history.json` 存汇率、利率、赤字等时间序列,周报会读它做趋势分析。
种子数据来自 2026-07-10 的看板。

**它不会自动更新数值。** 这是有意的:免费行情源可靠性远低于 RSS,
自动填错数比留空更糟。周报运行后会追加一条只带日期和摘要的记录,
数值字段留空,你可以手动补,或后续接一个你信任的行情 API。

---

## 五、成本

日报每次约 15-25k input tokens + 2-4k output;周报约 40-60k input + 5k output。
按每月 22 个工作日 + 4 次周报估,Opus 的月成本大致在几美元到十几美元量级。
GitHub Actions 私有仓库每月有免费分钟数,这个任务量远用不完。

想省钱可以把 `src/analyze.py` 里的 `MODEL` 换成 `claude-sonnet-5`,
质量下降有限,成本降一个量级。

---

## 六、已知限制

- **RSS 源会失效。** 定期跑 `--check-feeds`。建议每季度一次。
- **GitHub Actions 定时不精确。** 可能延迟。
- **解读质量取决于源质量。** 如果当天只有政府通稿,Claude 会照实说"今日无实质进展",
  不会硬凑——这是刻意设计。
- **不抓需要登录的源。** Bloomberg / Reuters Terminal 之类要付费 API,
  当前配置只用免费 RSS 和官网。
