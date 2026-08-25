"""bot 分支上的累积型文件必须累积，不能被当次运行覆盖。日频与周频同一个坑。

日频（2026-08-04 发现）：`bot/daily-risk-alerts` 上只剩当天一条记录——工作流每次从
`main` 重建分支，而 `daily-events/*.jsonl` 不在 `main` 上，前几天被整个覆盖。周更第 ⓪ 步
规定这个分支是日频事件的单一真源，那样等于每周丢掉 6 天证据。

周频（2026-08-20 发现）：`street_heat_history.json` 同病。分支上只剩 07-16 与 08-20，
08-04 与 08-11 的读数已被抹掉，而「网络政治情绪」driver 的环比恰恰依赖这个文件。

日频那次修完之后，周频原样留着没人动——这个仓库反复栽在「一边修了、另一边忘了」上
（已确认表、DeepSeek key 都是同一个模式）。所以下面的工作流断言对**两条流水线同时**
跑：再加一条采集流水线而忘了接合并脚本，这里会立刻红。
"""
from __future__ import annotations

import importlib.util
import json
import pathlib
import tempfile
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[2]
_spec = importlib.util.spec_from_file_location(
    "merge_bot_evidence", ROOT / ".github" / "scripts" / "merge_bot_evidence.py"
)
MODULE = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(MODULE)

# 两个不同的契约，别混：
# ACCUMULATING —— 产物按 date 累积（日频证据池、街头热度历史），必须走合并脚本，
#   否则每次运行只留当次一条、把历史抹掉。
# STAGING —— 所有会往 bot 分支暂存产物的流水线，无论是否累积，都必须用单一
#   artifacts 清单驱动打包与清理，并在切分支前清空工作区；否则 bot 分支一旦
#   开始跟踪某路径，下次 checkout 就会以「未跟踪文件将被覆盖」中止。
# 月频只属于后者：它的产物是当期全量快照，覆盖即正确。
ACCUMULATING_WORKFLOWS = ("daily-risk-alerts.yml", "weekly-credit-sentiment.yml")
STAGING_WORKFLOWS = ACCUMULATING_WORKFLOWS + ("monthly-credit-data.yml",)


def write_jsonl(path: pathlib.Path, records: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        "\n".join(json.dumps(r, ensure_ascii=False) for r in records) + "\n",
        encoding="utf-8",
    )


def read_jsonl(path: pathlib.Path) -> list[dict]:
    return [
        json.loads(line)
        for line in path.read_text(encoding="utf-8").splitlines()
        if line.strip()
    ]


class MergeJsonlTests(unittest.TestCase):
    """日频证据池：JSONL，按 date 累积。"""

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


class MergeJsonArrayByDateTests(unittest.TestCase):
    """街头热度历史：JSON 数组，同样按 date 累积。"""

    def _write(self, path: pathlib.Path, rows: list[dict]) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(rows, ensure_ascii=False), encoding="utf-8")

    def _read(self, path: pathlib.Path) -> list[dict]:
        return json.loads(path.read_text(encoding="utf-8"))

    def test_earlier_weeks_survive_a_new_run(self):
        """复现 2026-08-20：本应有 07-16/08-04/08-11 三条，实际只剩被覆盖后的残余。"""
        with tempfile.TemporaryDirectory() as tmp:
            existing = pathlib.Path(tmp) / "street_heat_history.json"
            incoming = pathlib.Path(tmp) / "incoming.json"
            self._write(existing, [
                {"date": "2026-07-16", "heat": 29.6},
                {"date": "2026-08-04", "heat": 38.6},
                {"date": "2026-08-11", "heat": 32.6},
            ])
            self._write(incoming, [{"date": "2026-08-20", "heat": 43.2}])

            total = MODULE.merge_json_array_by_date(existing, incoming)

            self.assertEqual(
                [r["date"] for r in self._read(existing)],
                ["2026-07-16", "2026-08-04", "2026-08-11", "2026-08-20"],
            )
            self.assertEqual(total, 4)

    def test_same_date_rerun_replaces_rather_than_duplicates(self):
        with tempfile.TemporaryDirectory() as tmp:
            existing = pathlib.Path(tmp) / "h.json"
            incoming = pathlib.Path(tmp) / "i.json"
            self._write(existing, [{"date": "2026-08-20", "heat": 1.0}])
            self._write(incoming, [{"date": "2026-08-20", "heat": 43.2}])

            MODULE.merge_json_array_by_date(existing, incoming)

            rows = self._read(existing)
            self.assertEqual(len(rows), 1, "同日重跑不得产生重复条目")
            self.assertEqual(rows[0]["heat"], 43.2, "同日重跑应以本次结果为准")

    def test_first_ever_run_without_existing_history(self):
        with tempfile.TemporaryDirectory() as tmp:
            existing = pathlib.Path(tmp) / "h.json"
            incoming = pathlib.Path(tmp) / "i.json"
            self._write(incoming, [{"date": "2026-08-20", "heat": 43.2}])
            MODULE.merge_json_array_by_date(existing, incoming)
            self.assertEqual([r["date"] for r in self._read(existing)], ["2026-08-20"])

    def test_unreadable_existing_file_raises_instead_of_wiping_history(self):
        """解析失败绝不能退化成「用本次结果覆盖」——那是拿一次异常换掉全部历史。"""
        with tempfile.TemporaryDirectory() as tmp:
            existing = pathlib.Path(tmp) / "h.json"
            incoming = pathlib.Path(tmp) / "i.json"
            existing.write_text("{ not json", encoding="utf-8")
            self._write(incoming, [{"date": "2026-08-20"}])
            with self.assertRaises(ValueError):
                MODULE.merge_json_array_by_date(existing, incoming)

    def test_router_sends_street_heat_history_to_the_array_merger(self):
        """端到端走 main()，确认路由没接错——单测合并函数本身证明不了这一点。"""
        with tempfile.TemporaryDirectory() as tmp:
            root = pathlib.Path(tmp) / "repo"
            incoming_root = pathlib.Path(tmp) / "incoming"
            rel = pathlib.Path("stability-monitor/scripts/street_heat_history.json")
            self._write(root / rel, [{"date": "2026-07-16", "heat": 29.6}])
            self._write(incoming_root / rel, [{"date": "2026-08-20", "heat": 43.2}])
            original = MODULE.ROOT
            try:
                MODULE.ROOT = root
                self.assertEqual(MODULE.main(["merge", str(incoming_root)]), 0)
            finally:
                MODULE.ROOT = original
            self.assertEqual(
                [r["date"] for r in self._read(root / rel)],
                ["2026-07-16", "2026-08-20"],
                "路由错了就会退化成覆盖",
            )


class WorkflowContractTests(unittest.TestCase):
    def test_street_heat_history_is_registered_as_accumulating(self):
        """漏登记就等于回到覆盖行为，而且不会报错——只会静静丢历史。"""
        self.assertIn(
            pathlib.Path("stability-monitor/scripts/street_heat_history.json"),
            MODULE.JSON_ARRAY_BY_DATE,
        )

    def test_accumulating_pipelines_use_the_merge_step(self):
        """按 date 累积的流水线必须走合并脚本，否则每次运行都会抹掉历史。

        只断言日频的话，周频那条就是 2026-08-20 之前的状态：静静地每周抹掉历史。
        """
        for name in ACCUMULATING_WORKFLOWS:
            with self.subTest(workflow=name):
                workflow = (ROOT / ".github" / "workflows" / name).read_text(encoding="utf-8")
                self.assertIn(
                    "merge_bot_evidence.py", workflow,
                    f"{name} 必须走共用的合并脚本，不得直接解包覆盖",
                )

    def test_every_staging_pipeline_continues_its_existing_bot_branch(self):
        """凡往 bot 分支暂存的流水线，都不得每次从 main 重建。"""
        for name in STAGING_WORKFLOWS:
            with self.subTest(workflow=name):
                workflow = (ROOT / ".github" / "workflows" / name).read_text(encoding="utf-8")
                self.assertIn(
                    'git checkout -B "$branch" "refs/remotes/origin/$branch"', workflow,
                    f"{name} 必须优先接续既有 bot 分支",
                )

    def test_every_packed_artifact_is_cleared_before_switching_branch(self):
        """打包与清理必须由同一份清单驱动，且清理在打包之后、切分支之前。

        bot 分支上已有这些路径，工作区里刚生成的同名文件是未跟踪的，
        git 会以「未跟踪文件将被覆盖」中止 checkout。逐个列举两遍必然漏——
        2026-08-11 就漏了 outputs/（由飞书步骤生成，此前一直被 skip 所以没暴露）。
        """
        cases = (
            ("daily-risk-alerts.yml", "Stage daily evidence",
             ("outputs", "stability-monitor/data/daily-events")),
            ("weekly-credit-sentiment.yml", "Stage pending review data",
             ("outputs", "stability-monitor/scripts/street_heat_history.json")),
            # 月频 2026-08-24 才补上。此前它还是 PR #31 之前的旧写法：tar 与 git add
            # 各列一份清单，于是 seki-bank-credit.json 只进了 git add、没进 tar。
            # 那种漏法第一次运行不报错，等 bot 分支开始跟踪该路径后第二次才炸。
            ("monthly-credit-data.yml", "Stage monthly data",
             ("outputs", "credit-tracker/data/seki-bank-credit.json")),
        )
        for name, stage_title, must_pack in cases:
            with self.subTest(workflow=name):
                workflow = (ROOT / ".github" / "workflows" / name).read_text(encoding="utf-8")
                stage = workflow[workflow.index(stage_title):]

                self.assertIn(
                    'tar -cf "$transfer_dir/pending-output.tar" --ignore-failed-read $artifacts',
                    stage, "tar 必须用 $artifacts 清单，不得再逐个列举",
                )
                self.assertIn(
                    'for path in $artifacts; do rm -rf "$path"; done', stage,
                    "清理必须遍历同一份 $artifacts 清单",
                )

                tar_at = stage.index("tar -cf")
                rm_at = stage.index("for path in $artifacts")
                checkout_at = stage.index('git checkout -B "$branch"')
                self.assertGreater(rm_at, tar_at, "清理必须在打包之后")
                self.assertLess(rm_at, checkout_at, "清理必须在切分支之前")

                artifacts_marker = "artifacts=" + chr(34)
                artifacts = stage[stage.index(artifacts_marker):stage.index("tar -cf")]
                for path in must_pack:
                    self.assertIn(path, artifacts, f"{name} 的清单必须含 {path}")

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
