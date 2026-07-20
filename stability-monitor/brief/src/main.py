"""主编排:抓取 → 解读 → 推送。

用法:
  python -m src.main --check-feeds     # 体检信息源,先跑这个
  python -m src.main --dry-run         # 跑完整流程但不推送,打印结果
  python -m src.main                   # 日报
  python -m src.main --weekly          # 周报(通常周五跑)
"""

from __future__ import annotations

import argparse
import json
import logging
import sys
from datetime import datetime, timedelta, timezone

from . import history
from .analyze import analyze_daily, analyze_weekly
from .feeds import JAKARTA_TZ, check_feeds, collect, load_config
from .push_feishu import build_daily_card, build_weekly_card, send

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    stream=sys.stdout,
)
log = logging.getLogger(__name__)


def main() -> int:
    parser = argparse.ArgumentParser(description="印尼宏观/金融科技每日简报")
    parser.add_argument("--weekly", action="store_true", help="生成周度深度分析")
    parser.add_argument("--dry-run", action="store_true", help="不推送,只打印")
    parser.add_argument("--check-feeds", action="store_true", help="体检信息源")
    parser.add_argument(
        "--lookback", type=int, default=0, help="回溯小时数(0=自动:日报26,周报170)"
    )
    args = parser.parse_args()

    config = load_config()

    if args.check_feeds:
        check_feeds(config)
        return 0

    lookback = args.lookback or (170 if args.weekly else 26)
    max_candidates = 60 if args.weekly else 40

    articles = collect(config, lookback_hours=lookback, max_candidates=max_candidates)

    if not articles:
        log.error("未抓取到任何条目。跑 --check-feeds 确认源状态。")
        return 1

    now_jkt = datetime.now(JAKARTA_TZ)

    if args.weekly:
        records = history.load()
        result = analyze_weekly(articles, records)
        card = build_weekly_card(result, now_jkt.strftime("%Y-%m-%d"))
        if not args.dry_run:
            history.append_note(result.get("headline", ""))
    else:
        result = analyze_daily(articles)
        card = build_daily_card(result, now_jkt.strftime("%m月%d日"))

    if args.dry_run:
        print(json.dumps(result, ensure_ascii=False, indent=2))
        print("\n--- 卡片 payload ---")
        print(json.dumps(card, ensure_ascii=False, indent=2)[:2000])
        return 0

    send(card)
    return 0


if __name__ == "__main__":
    sys.exit(main())
