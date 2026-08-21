#!/usr/bin/env python3
"""把当次运行的产物并入 bot 分支已有的证据池，而不是覆盖它。日频与周频共用。

为什么需要这个
--------------
采集工作流原本用 `git checkout -B bot/<x> origin/main` 重建分支，再把 runner 工作区
的产物解包上去。但 runner 是从 `main` 检出的，而累积型文件不在 `main` 上——于是每次
提交只含当次一条，之前的记录被整个覆盖掉。

日频（2026-08-04 发现）：`daily-events/*.jsonl` 只剩当天一条。后果不是"少了点历史"，
而是**周更流程第 ⓪ 步失效**——CLAUDE.md 规定日频事件的单一真源就是这个分支。

周频（2026-08-20 发现）：`street_heat_history.json` 同病。分支上只剩 07-16 与 08-20
两条，08-04 与 08-11 的读数被抹掉了。而「网络政治情绪」driver 的环比恰恰依赖这个文件，
等于每周都在拿一个被截断的历史做比较。

**为什么两边共用一个脚本**：日频那次修完之后，周频原样留着没人动——这个仓库反复栽在
「一边修了、另一边忘了」上（已确认表、DeepSeek key 都是同一个模式）。与其抄第二份，
不如让两条流水线共用同一个实现，下次再出第三种累积文件也只有一处要改。

做法
----
先检出既有 bot 分支（没有才回落 main），再把本次产物按类型并入：
* `daily-events/*.jsonl`：JSONL，按 `date` 做并集，同日以本次结果覆盖旧值；
* `street_heat_history.json`：JSON 数组，同样按 `date` 并集；
* 其余文件是当期快照，直接覆盖。
"""
from __future__ import annotations

import json
import os
import pathlib
import shutil
import sys
from typing import Any

# 以工作目录为仓库根，而不是脚本自身位置：本脚本会被复制到临时目录再执行——
# 切到 bot 分支后脚本文件本身就不在工作区了（该分支建自旧 main，没有这个文件）。
ROOT = pathlib.Path(os.environ.get("GITHUB_WORKSPACE") or os.getcwd())
EVENTS_DIR = pathlib.Path("stability-monitor/data/daily-events")
# 按 date 累积的 JSON 数组文件。新增累积型文件时加到这里，别再抄一份合并逻辑。
JSON_ARRAY_BY_DATE = {
    pathlib.Path("stability-monitor/scripts/street_heat_history.json"),
}


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


def merge_json_array_by_date(existing: pathlib.Path, incoming: pathlib.Path) -> int:
    """按 date 合并两个「对象数组」JSON，返回合并后的条目数。同日以 incoming 为准。

    读不动的旧文件不静默丢弃——那等于用一次解析失败换掉全部历史。宁可让本次
    产物单独成文件并把异常抛给工作流，也不要悄悄清空。
    """
    merged: dict[str, Any] = {}
    for path in (existing, incoming):
        if not path.is_file():
            continue
        try:
            rows = json.loads(path.read_text(encoding="utf-8"))
        except ValueError as exc:
            raise ValueError(f"{path} 不是合法 JSON，拒绝以覆盖方式继续: {exc}") from exc
        if not isinstance(rows, list):
            raise ValueError(f"{path} 不是数组，无法按 date 合并")
        for index, row in enumerate(rows):
            if not isinstance(row, dict):
                raise ValueError(f"{path} 第{index}项不是对象")
            merged[str(row.get("date") or f"__nodate_{index}")] = row
    ordered = [merged[key] for key in sorted(merged)]
    existing.parent.mkdir(parents=True, exist_ok=True)
    existing.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return len(ordered)


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print("usage: merge_bot_evidence.py <incoming-dir>", file=sys.stderr)
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
        elif relative in JSON_ARRAY_BY_DATE:
            total = merge_json_array_by_date(target, incoming)
            print(f"  merged {relative} -> {total} entries")
        else:
            shutil.copy2(incoming, target)
            print(f"  replaced {relative}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
