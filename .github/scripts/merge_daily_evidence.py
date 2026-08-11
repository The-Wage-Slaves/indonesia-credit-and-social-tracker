#!/usr/bin/env python3
"""把当次运行的日频产物并入 bot 分支已有的证据池，而不是覆盖它。

为什么需要这个
--------------
`daily-risk-alerts.yml` 原本用 `git checkout -B bot/daily-risk-alerts origin/main`
重建分支，再把 runner 工作区的产物解包上去。但 runner 是从 `main` 检出的，而
`daily-events/*.jsonl` 不在 `main` 上——于是每天的提交只含当天一条，前几天的记录
被整个覆盖掉。

后果不是"少了点历史"，而是**周更流程的第 ⓪ 步失效**：CLAUDE.md 规定日频事件的
单一真源是这个分支，而它实际只保存一天，等于每周丢掉 6 天的证据。2026-08-04
周更时发现分支上只剩当天一条记录。

做法
----
先检出既有 bot 分支（没有才回落 main），再把本次产物按类型并入：
* `daily-events/*.jsonl` 按 `date` 字段做并集，同日以本次结果覆盖旧值；
* 其余文件是当期快照，直接覆盖。
"""
from __future__ import annotations

import json
import os
import pathlib
import shutil
import sys

# 以工作目录为仓库根，而不是脚本自身位置：本脚本会被复制到临时目录再执行——
# 切到 bot 分支后脚本文件本身就不在工作区了（该分支建自旧 main，没有这个文件）。
ROOT = pathlib.Path(os.environ.get("GITHUB_WORKSPACE") or os.getcwd())
EVENTS_DIR = pathlib.Path("stability-monitor/data/daily-events")


def merge_jsonl(existing: pathlib.Path, incoming: pathlib.Path) -> int:
    """按 date 合并两个 jsonl，返回合并后的记录数。同日以 incoming 为准。"""
    records: dict[str, str] = {}
    for path in (existing, incoming):
        if not path.is_file():
            continue
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                key = str(json.loads(line).get("date") or line[:64])
            except ValueError:
                # 坏行不丢弃也不让它顶掉好行，用自身内容做键留档。
                key = line[:64]
            records[key] = line
    merged = [records[key] for key in sorted(records)]
    existing.parent.mkdir(parents=True, exist_ok=True)
    existing.write_text("\n".join(merged) + "\n", encoding="utf-8")
    return len(merged)


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print("usage: merge_daily_evidence.py <incoming-dir>", file=sys.stderr)
        return 2
    incoming_root = pathlib.Path(argv[1]).resolve()
    if not incoming_root.is_dir():
        print(f"incoming dir not found: {incoming_root}", file=sys.stderr)
        return 2

    for incoming in sorted(incoming_root.rglob("*")):
        if not incoming.is_file():
            continue
        relative = incoming.relative_to(incoming_root)
        target = ROOT / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        if relative.parent == EVENTS_DIR and relative.suffix == ".jsonl":
            total = merge_jsonl(target, incoming)
            print(f"  merged {relative} -> {total} records")
        else:
            shutil.copy2(incoming, target)
            print(f"  replaced {relative}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
