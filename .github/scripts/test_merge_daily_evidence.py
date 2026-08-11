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

    def test_every_packed_artifact_is_cleared_before_switching_branch(self):
        """打包与清理必须由同一份清单驱动，且清理在打包之后、切分支之前。

        bot 分支上已有这些路径，工作区里刚生成的同名文件是未跟踪的，
        git 会以「未跟踪文件将被覆盖」中止 checkout。逐个列举两遍必然漏——
        2026-08-11 就漏了 outputs/（由飞书步骤生成，此前一直被 skip 所以没暴露）。
        """
        workflow = (ROOT / ".github" / "workflows" / "daily-risk-alerts.yml").read_text(encoding="utf-8")
        stage = workflow[workflow.index("Stage daily evidence"):]

        self.assertIn('tar -cf "$transfer_dir/pending-output.tar" --ignore-failed-read $artifacts', stage,
                      "tar 必须用 $artifacts 清单，不得再逐个列举")
        self.assertIn('for path in $artifacts; do rm -rf "$path"; done', stage,
                      "清理必须遍历同一份 $artifacts 清单")

        tar_at = stage.index("tar -cf")
        rm_at = stage.index("for path in $artifacts")
        checkout_at = stage.index('git checkout -B "$branch"')
        self.assertGreater(rm_at, tar_at, "清理必须在打包之后")
        self.assertLess(rm_at, checkout_at, "清理必须在切分支之前")

        # 飞书发布步骤会写 outputs/cloud-publish-status.json，它也必须在清单里
        artifacts = stage[stage.index("artifacts=\""):stage.index("tar -cf")]
        self.assertIn("outputs", artifacts)
        self.assertIn("stability-monitor/data/daily-events", artifacts)

    def test_data_workflows_do_not_run_unit_tests(self):
        """数据工作流一律不跑单测——一次断言失败不该杀掉当期的采集与推送。

        同一套测试 validate.yml 已在每次 PR/push 上跑过。
        2026-08-05~08-11 日频与周度先后死于此：周度更糟，它挂在第一步，
        后面的街头热度采集与飞书推送全被跳过。
        """
        for name in ("daily-risk-alerts.yml", "weekly-credit-sentiment.yml",
                     "monthly-credit-data.yml"):
            workflow = (ROOT / ".github" / "workflows" / name).read_text(encoding="utf-8")
            self.assertNotIn("unittest discover", workflow, f"{name} 不得在数据工作流里跑单测")
        validate = (ROOT / ".github" / "workflows" / "validate.yml").read_text(encoding="utf-8")
        self.assertIn("credit-tracker/sentiment-monitor", validate)


if __name__ == "__main__":
    unittest.main()
