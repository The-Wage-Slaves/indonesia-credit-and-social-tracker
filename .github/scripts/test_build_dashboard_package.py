"""下载包只能装 git 已跟踪的内容。

采集器会在工作区留下未复核产物（`daily-events/*.jsonl`、`*-pending.json`，
`humanReviewed: false`）。按文件系统遍历会把它们一起打包，而云端 checkout 恰好
干净，所以这个洞在 CI 里看不出来。这里把「未跟踪文件不得进包」钉死。
"""
from __future__ import annotations

import importlib.util
import pathlib
import subprocess
import unittest
import zipfile


ROOT = pathlib.Path(__file__).resolve().parents[2]
_spec = importlib.util.spec_from_file_location(
    "build_dashboard_package", ROOT / "scripts" / "build_dashboard_package.py"
)
MODULE = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(MODULE)


def tracked() -> set[str]:
    out = subprocess.run(
        ["git", "-C", str(ROOT), "ls-files", "-z"],
        capture_output=True,
        check=True,
    ).stdout
    return {name.decode("utf-8") for name in out.split(b"\0") if name}


class DashboardPackageTests(unittest.TestCase):
    def test_package_contains_only_tracked_and_generated_members(self):
        generated = {"打开看板.cmd", "README_打开方式.txt", "dashboard-package.json"}
        collected = set(MODULE.collect_files())
        stray = collected - tracked() - generated
        self.assertEqual(stray, set(), f"untracked files leaked into the package: {sorted(stray)}")

    def test_unreviewed_collector_output_is_never_packaged(self):
        for name in MODULE.collect_files():
            self.assertNotIn("daily-events/", name, f"unreviewed event pool packaged: {name}")
            self.assertFalse(
                name.endswith("-pending.json"),
                f"unconfirmed pending data packaged: {name}",
            )

    def test_build_produces_openable_bundle(self):
        output = ROOT / "dist" / "test-dashboard-package.zip"
        MODULE.build(output)
        try:
            with zipfile.ZipFile(output) as archive:
                names = set(archive.namelist())
            # 双击入口与数据必须同在，否则解压后打不开。
            for required in ("index.html", "pending.js", "打开看板.cmd"):
                self.assertIn(required, names)
        finally:
            output.unlink(missing_ok=True)


if __name__ == "__main__":
    unittest.main()
