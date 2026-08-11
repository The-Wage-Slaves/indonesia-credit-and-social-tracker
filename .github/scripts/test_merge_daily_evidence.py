"""日频证据池必须累积，不能被当天的运行覆盖。

2026-08-04 周更时发现 `bot/daily-risk-alerts` 上只剩当天一条记录：工作流每次从
`main` 重建分支，而 `daily-events/*.jsonl` 不在 `main` 上，于是前几天被整个覆盖。
周更第 ⓪ 步规定这个分支是日频事件的单一真源，那样等于每周丢掉 6 天证据。
"""
from __future__ import annotations

import importlib.util
import json
import pathlib
import tempfile
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[2]
_spec = importlib.util.spec_from_file_location(
    "merge_daily_evidence", ROOT / ".github" / "scripts" / "merge_daily_evidence.py"
)
MODULE = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(MODULE)


def write_jsonl(path: pathlib.Path, records: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(json.dumps(r, ensure_ascii=False) for r in records) + "\n", encoding="utf-8")


def read_jsonl(path: pathlib.Path) -> list[dict]:
    return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


class MergeDailyEvidenceTests(unittest.TestCase):
    def test_earlier_days_survive_a_new_run(self):
        with tempfile.TemporaryDirectory() as tmp:
            existing = pathlib.Path(tmp) / "2026-08.jsonl"
            incoming = pathlib.Path(tmp) / "incoming.jsonl"
            write_jsonl(existing, [
                {"date": "2026-08-01", "level": "normal", "eventCount": 0},
                {"date": "2026-08-02", "level": "red", "eventCount": 5},
            ])
            write_jsonl(incoming, [{"date": "2026-08-04", "level": "high_pending", "eventCount": 6}])

            total = MODULE.merge_jsonl(existing, incoming)

            dates = [r["date"] for r in read_jsonl(existing)]
            self.assertEqual(dates, ["2026-08-01", "2026-08-02", "2026-08-04"])
            self.assertEqual(total, 3)

    def test_same_day_rerun_replaces_rather_than_duplicates(self):
        with tempfile.TemporaryDirectory() as tmp:
            existing = pathlib.Path(tmp) / "2026-08.jsonl"
            incoming = pathlib.Path(tmp) / "incoming.jsonl"
            write_jsonl(existing, [{"date": "2026-08-04", "eventCount": 2}])
            write_jsonl(incoming, [{"date": "2026-08-04", "eventCount": 6}])

            MODULE.merge_jsonl(existing, incoming)

            records = read_jsonl(existing)
            self.assertEqual(len(records), 1, "同日重跑不得产生重复记录")
            self.assertEqual(records[0]["eventCount"], 6, "同日重跑应以本次结果为准")

    def test_first_ever_run_without_existing_pool(self):
        with tempfile.TemporaryDirectory() as tmp:
            existing = pathlib.Path(tmp) / "2026-08.jsonl"
            incoming = pathlib.Path(tmp) / "incoming.jsonl"
            write_jsonl(incoming, [{"date": "2026-08-04", "eventCount": 1}])

            MODULE.merge_jsonl(existing, incoming)

            self.assertEqual([r["date"] for r in read_jsonl(existing)], ["2026-08-04"])

    def test_malformed_line_is_kept_not_dropped(self):
        with tempfile.TemporaryDirectory() as tmp:
            existing = pathlib.Path(tmp) / "2026-08.jsonl"
            incoming = pathlib.Path(tmp) / "incoming.jsonl"
            existing.parent.mkdir(parents=True, exist_ok=True)
            existing.write_text('{"date": "2026-08-01"}\nnot-json\n', encoding="utf-8")
            write_jsonl(incoming, [{"date": "2026-08-04"}])

            MODULE.merge_jsonl(existing, incoming)

            lines = [l for l in existing.read_text(encoding="utf-8").splitlines() if l.strip()]
            self.assertIn("not-json", lines, "坏行要留档，不能静默丢弃")
            self.assertEqual(len(lines), 3)

    def test_workflow_uses_the_merge_step_and_keeps_the_bot_branch(self):
        workflow = (ROOT / ".github" / "workflows" / "daily-risk-alerts.yml").read_text(encoding="utf-8")
        self.assertIn("merge_daily_evidence.py", workflow)
        self.assertIn('git checkout -B "$branch" "refs/remotes/origin/$branch"', workflow)

    def test_generated_artifacts_are_cleared_before_switching_branch(self):
        """接续 bot 分支前必须先移走本次产物，否则 checkout 会被未跟踪文件挡住。

        bot 分支上已有 daily-events 与 daily-credit-alert-pending.json，而 runner
        工作区里刚生成的同名文件是未跟踪的，git 会中止 checkout。
        2026-08-05~08-10 连续 6 天的失败就是这个原因。
        """
        workflow = (ROOT / ".github" / "workflows" / "daily-risk-alerts.yml").read_text(encoding="utf-8")
        stage = workflow[workflow.index("Stage daily evidence"):]
        tar_at = stage.index("tar -cf")
        checkout_at = stage.index('git checkout -B "$branch"')
        for path in ("stability-monitor/data/daily-events",
                     "credit-tracker/sentiment-monitor/output/daily-credit-alert-pending.json"):
            rm_at = stage.find(f"rm -rf {path}")
            if rm_at < 0:
                rm_at = stage.find(f"rm -f {path}")
            self.assertGreater(rm_at, tar_at, f"{path} 必须在打包之后才移走")
            self.assertLess(rm_at, checkout_at, f"{path} 必须在切分支之前移走")

    def test_data_workflow_does_not_run_unit_tests(self):
        """数据工作流不跑单测——一次断言失败不该杀掉当天的采集与推送。

        同一套测试 validate.yml 已在每次 PR/push 上跑过。
        """
        workflow = (ROOT / ".github" / "workflows" / "daily-risk-alerts.yml").read_text(encoding="utf-8")
        self.assertNotIn("unittest discover", workflow)
        validate = (ROOT / ".github" / "workflows" / "validate.yml").read_text(encoding="utf-8")
        self.assertIn("credit-tracker/sentiment-monitor", validate)


if __name__ == "__main__":
    unittest.main()
