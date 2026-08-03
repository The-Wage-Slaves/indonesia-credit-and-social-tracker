#!/usr/bin/env python3
"""Build and validate the private, downloadable dashboard bundle."""
from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import pathlib
import posixpath
import re
import subprocess
import zipfile


ROOT = pathlib.Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "dist" / "indonesia-monitor-dashboard.zip"
INCLUDE_FILES = (
    "index.html",
    "pending.json",
    "pending.js",
)
INCLUDE_DIRS = (
    "credit-tracker/dashboard",
    "credit-tracker/sentiment-monitor/output",
    "stability-monitor/dashboard",
    "stability-monitor/data",
    "stability-monitor/docs",
    "stability-monitor/scripts/output",
)
# 待确认产物即使已提交到 main 也不进包：包的契约是「已确认内容」，而没有任何页面
# 引用这些 JSON——留在包里只会让拿到包的人把未复核数字当成已确认结论。
# 注意只排除 `*-pending.json`；暗门确实要读 `p2p-pending.js` / `macro-pending.js`。
EXCLUDE_SUFFIXES = ("-pending.json",)
REQUIRED_MEMBERS = {
    "index.html",
    "pending.js",
    "credit-tracker/dashboard/credit-dashboard.html",
    "credit-tracker/sentiment-monitor/output/credit-sentiment-data.js",
    "stability-monitor/dashboard/indonesia-stability-index-pro.html",
    "stability-monitor/dashboard/data.js",
    "stability-monitor/dashboard/engine.js",
    "打开看板.cmd",
    "README_打开方式.txt",
    "dashboard-package.json",
}
LOCAL_REF = re.compile(r"(?:href|src)=[\"']([^\"'#]+)[\"']", re.IGNORECASE)


def tracked_paths() -> set[str]:
    """只认 git 已跟踪的文件。

    直接遍历文件系统会把工作区里的未跟踪产物一起打包——采集器写出的
    `daily-events/*.jsonl`、`*-pending.json` 都是 humanReviewed=false 的未复核数据。
    云端 checkout 恰好干净所以看不出问题，但那是巧合，不是保证。以 git 为准，
    「只发布已确认并合并到 main 的内容」才是结构性成立的。
    """
    result = subprocess.run(
        ["git", "-C", str(ROOT), "ls-files", "-z"],
        capture_output=True,
        check=False,
    )
    if result.returncode != 0:
        raise RuntimeError(
            "Cannot list git-tracked files; refusing to package an unverified working tree."
        )
    paths = {name.decode("utf-8") for name in result.stdout.split(b"\0") if name}
    if not paths:
        raise RuntimeError("git reported no tracked files; refusing to build an empty package.")
    return paths


def collect_files() -> dict[str, bytes]:
    tracked = tracked_paths()
    files: dict[str, bytes] = {}
    for relative in INCLUDE_FILES:
        path = ROOT / relative
        if not path.is_file():
            raise FileNotFoundError(f"Required dashboard file is missing: {relative}")
        if relative not in tracked:
            raise ValueError(f"Refusing to package untracked file: {relative}")
        files[relative] = path.read_bytes()
    for relative_dir in INCLUDE_DIRS:
        directory = ROOT / relative_dir
        if not directory.is_dir():
            raise FileNotFoundError(f"Required dashboard directory is missing: {relative_dir}")
        for path in sorted(directory.rglob("*")):
            if not path.is_file() or "__pycache__" in path.parts:
                continue
            relative = path.relative_to(ROOT).as_posix()
            if relative not in tracked:
                continue
            if relative.endswith(EXCLUDE_SUFFIXES):
                continue
            files[relative] = path.read_bytes()
    files["打开看板.cmd"] = (
        '@echo off\r\nstart "" "%~dp0index.html"\r\n'
    ).encode("utf-8-sig")
    files["README_打开方式.txt"] = (
        "印尼市场与稳定性监测看板\n\n"
        "1. 解压整个 ZIP，不要只从压缩包内临时打开单个文件。\n"
        "2. 双击 index.html，或双击“打开看板.cmd”。\n"
        "3. 页面会读取同一文件夹内的数据；图表 CDN 仍需要联网。\n"
        "4. 本包来自私有 GitHub main，只包含已确认并合并的版本。\n"
    ).encode("utf-8-sig")
    files["dashboard-package.json"] = json.dumps(
        {
            "generatedAt": dt.datetime.now(dt.timezone.utc).isoformat(),
            "commit": os.getenv("GITHUB_SHA", "local"),
            "source": "The-Wage-Slaves/indonesia-credit-and-social-tracker@main",
            "status": "confirmed-main-only",
        },
        ensure_ascii=False,
        indent=2,
    ).encode("utf-8")
    return files


def validate_members(files: dict[str, bytes]) -> None:
    names = set(files)
    missing = REQUIRED_MEMBERS - names
    if missing:
        raise ValueError(f"Dashboard package lacks required members: {sorted(missing)}")
    forbidden_fragments = ("/.git/", "/.github/", "secret", "config.yaml", "config.yml")
    for name in names:
        probe = f"/{name.lower()}"
        if any(fragment in probe for fragment in forbidden_fragments):
            raise ValueError(f"Forbidden path in dashboard package: {name}")
    for name, contents in files.items():
        if not name.endswith(".html"):
            continue
        html = contents.decode("utf-8")
        for reference in LOCAL_REF.findall(html):
            if reference.startswith(("http://", "https://", "data:", "mailto:", "javascript:")):
                continue
            clean = reference.split("?", 1)[0]
            target = posixpath.normpath(posixpath.join(posixpath.dirname(name), clean))
            if target not in names:
                raise ValueError(f"Broken local reference in {name}: {reference} -> {target}")


def build(output: pathlib.Path) -> None:
    files = collect_files()
    validate_members(files)
    output.parent.mkdir(parents=True, exist_ok=True)
    temporary = output.with_suffix(output.suffix + ".tmp")
    with zipfile.ZipFile(temporary, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for name in sorted(files):
            archive.writestr(name, files[name])
    temporary.replace(output)
    with zipfile.ZipFile(output) as archive:
        archived = {name: archive.read(name) for name in archive.namelist()}
    validate_members(archived)
    print(f"dashboard-package={output} files={len(archived)} bytes={output.stat().st_size}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=pathlib.Path, default=DEFAULT_OUTPUT)
    args = parser.parse_args()
    build(args.output.resolve())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())


