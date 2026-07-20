"""解读层:把候选条目喂给 Claude,产出中文精选 + 解读 + 综述。

模型固定用 claude-opus-4-8(最强)。日报和周报用不同 prompt。
输出强制 JSON,便于推送层组装卡片。
"""

from __future__ import annotations

import json
import logging
import os
import re
from typing import Any

import anthropic

from .feeds import Article

log = logging.getLogger(__name__)

MODEL = "claude-opus-4-8"

# 读者画像。改这里就能改口味,不用动 prompt 主体。
READER_PROFILE = """\
读者是一位在中资金融科技公司做战略研究与投资的分析师,常驻雅加达。
业务覆盖东南亚(印尼、马来西亚、菲律宾、泰国)与非洲(尼日利亚、加纳)的
跨境消费信贷与数字信贷市场,工作涉及竞争情报、市场准入、监管尽调、
交易架构与财务建模。中英文皆流利,偏好直接、有信息密度、不说套话的分析。

他当前最关心的三条线索:
1. P2SK 第 50A 条(Patriot Bond 免责条款)引发的 FATF / 反洗钱合规风险,
   以及宪法法院是否会对其进行司法审查。这条线索优先级最高。
2. 主权评级(穆迪/惠誉)与指数分类(MSCI 11 月决定、S&P DJI 2027 观察)的演变。
3. 与其业务直接相关的监管动向:OJK、QRIS/PJP 牌照、P2P(LPBBTI)、
   创新信用评分(ICS/PKA)、外汇管制(DHE)。

他讨厌:空泛的"值得关注"、把政府通稿当结论、用"专家表示"代替具体归因。
他需要:每条新闻"对他的工作意味着什么"的那一句话。
"""

DAILY_SYSTEM = f"""你是一位为下述读者服务的印尼宏观与监管分析师。

{READER_PROFILE}

任务:从给定的新闻候选中精选 5-8 条,每条配一句解读,最后写一段当日综述。

规则:
- 用中文输出。专有名词首次出现时给出英文/印尼文原文。
- 精选标准:优先选择触及上述三条线索的新闻;其次是能改变判断的新增事实;
  再次是重要的官方动作。不要为凑数而选低信息量的例行报道。
- 每条的 comment 字段是"这条新闻对读者的工作意味着什么",不是新闻摘要的重复。
  如果一条新闻你判断不出对他有什么含义,就不要选它。
- 如果某条新闻是政府通稿口径,明确标注,并在 comment 里指出其未回答的问题。
- digest(当日综述)要有判断,不要罗列。150-250 字。如果当天没有实质性进展,
  就直说"今日无实质进展",不要硬凑。
- 若某条命中了 FATF / PPATK / 宪法法院 / Pasal 50A 关键词,在 flag 字段标 "critical"。
  其余重要的标 "high",常规的标 "normal"。

严格只输出 JSON,不要 markdown 代码块,不要任何前言后语。格式:
{{
  "items": [
    {{
      "title": "中文标题(可意译)",
      "source": "来源名",
      "url": "原文链接",
      "section": "macro|policy|markets|fintech",
      "flag": "critical|high|normal",
      "summary": "一到两句事实陈述",
      "comment": "对读者工作的含义,一句话"
    }}
  ],
  "digest": "当日综述"
}}"""

WEEKLY_SYSTEM = f"""你是一位为下述读者服务的印尼宏观与监管分析师。

{READER_PROFILE}

任务:结合本周新闻与提供的历史指标序列,写一份周度深度分析。

规则:
- 用中文输出。
- 重点是"变化"而非"状态":本周相对上周,哪些判断需要修正?哪些先行指标动了?
- 必须包含对三条核心线索的进展评估。若某条线索本周无进展,明确说"无进展",
  并说明这本身是否是信号。
- 如果历史指标序列显示某个趋势拐点(汇率、利率、赤字、评级),指出并解释。
- 结尾给出"下周需要盯的三件事",要具体到可观察的事件,不要写"继续关注政策动向"。
- 800-1200 字。有判断,可以下结论,但要标明置信度。

严格只输出 JSON,不要 markdown 代码块。格式:
{{
  "headline": "本周一句话判断",
  "analysis": "深度分析正文(可含换行)",
  "watchlist": ["下周盯点1", "下周盯点2", "下周盯点3"],
  "indicator_note": "指标序列的变化解读,若无变化则空字符串"
}}"""


def _extract_json(text: str) -> dict[str, Any]:
    """模型偶尔会裹 markdown 代码块,剥掉再解析。"""
    cleaned = re.sub(r"^```(?:json)?\s*|\s*```$", "", text.strip(), flags=re.MULTILINE)
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        # 兜底:抓第一个 {...} 块
        match = re.search(r"\{.*\}", cleaned, re.DOTALL)
        if match:
            return json.loads(match.group())
        raise


def _client() -> anthropic.Anthropic:
    key = os.environ.get("ANTHROPIC_API_KEY")
    if not key:
        raise RuntimeError("缺少环境变量 ANTHROPIC_API_KEY")
    return anthropic.Anthropic(api_key=key)


def _format_candidates(articles: list[Article]) -> str:
    lines = []
    for i, art in enumerate(articles, 1):
        kw = f" [命中: {', '.join(art.matched_keywords)}]" if art.matched_keywords else ""
        date = art.published.strftime("%m-%d %H:%M") if art.published else "无日期"
        lines.append(
            f"{i}. [{art.source} | tier{art.tier} | {date}]{kw}\n"
            f"   标题: {art.title}\n"
            f"   摘要: {art.summary[:300]}\n"
            f"   链接: {art.link}"
        )
    return "\n\n".join(lines)


def analyze_daily(articles: list[Article]) -> dict[str, Any]:
    if not articles:
        return {"items": [], "digest": "今日未抓取到有效新闻,可能是源故障。请检查 feeds 体检。"}

    client = _client()
    resp = client.messages.create(
        model=MODEL,
        max_tokens=4000,
        system=DAILY_SYSTEM,
        messages=[
            {
                "role": "user",
                "content": (
                    f"以下是过去 24 小时的新闻候选({len(articles)} 条),"
                    f"按相关性排序:\n\n{_format_candidates(articles)}"
                ),
            }
        ],
    )
    text = "".join(b.text for b in resp.content if b.type == "text")
    log.info("日报解读完成,输入 %d 条", len(articles))
    return _extract_json(text)


def analyze_weekly(
    articles: list[Article],
    history: list[dict[str, Any]],
) -> dict[str, Any]:
    client = _client()
    history_str = json.dumps(history[-14:], ensure_ascii=False, indent=2)
    resp = client.messages.create(
        model=MODEL,
        max_tokens=6000,
        system=WEEKLY_SYSTEM,
        messages=[
            {
                "role": "user",
                "content": (
                    f"本周新闻候选:\n\n{_format_candidates(articles)}\n\n"
                    f"---\n\n近期指标序列(最近 14 个记录点):\n{history_str}"
                ),
            }
        ],
    )
    text = "".join(b.text for b in resp.content if b.type == "text")
    log.info("周报解读完成")
    return _extract_json(text)
