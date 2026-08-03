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
REQUIRED_MEMBERS = {
    "index.html",
    "pending.js",
    "credit-tracker/dashboard/credit-dashboard.html",
    "credit-tracker/sentiment-monitor/output/credit-sentiment-data.js",
    "stability-monitor/dashboard/indonesia-stability-index-pro.html",
    "stability-monitor/dashboard/data.js",
    "stability-monitor/dashboard/engine.js",
    "鎵撳紑鐪嬫澘.cmd",
    "README_鎵撳紑鏂瑰紡.txt",
    "dashboard-package.json",
}
LOCAL_REF = re.compile(r"(?:href|src)=[\"']([^\"'#]+)[\"']", re.IGNORECASE)


def collect_files() -> dict[str, bytes]:
    files: dict[str, bytes] = {}
    for relative in INCLUDE_FILES:
        path = ROOT / relative
        if not path.is_file():
            raise FileNotFoundError(f"Required dashboard file is missing: {relative}")
        files[relative] = path.read_bytes()
    for relative_dir in INCLUDE_DIRS:
        directory = ROOT / relative_dir
        if not directory.is_dir():
            raise FileNotFoundError(f"Required dashboard directory is missing: {relative_dir}")
        for path in sorted(directory.rglob("*")):
            if not path.is_file() or "__pycache__" in path.parts:
                continue
            relative = path.relative_to(ROOT).as_posix()
            files[relative] = path.read_bytes()
    files["鎵撳紑鐪嬫澘.cmd"] = (
        '@echo off\r\nstart "" "%~dp0index.html"\r\n'
    ).encode("utf-8-sig")
    files["README_鎵撳紑鏂瑰紡.txt"] = (
        "鍗板凹甯傚満涓庣ǔ瀹氭€х洃娴嬬湅鏉縗n\n"
        "1. 瑙ｅ帇鏁翠釜 ZIP锛屼笉瑕佸彧浠庡帇缂╁寘鍐呬复鏃舵墦寮€鍗曚釜鏂囦欢銆俓n"
        "2. 鍙屽嚮 index.html锛屾垨鍙屽嚮鈥滄墦寮€鐪嬫澘.cmd鈥濄€俓n"
        "3. 椤甸潰浼氳鍙栧悓涓€鏂囦欢澶瑰唴鐨勬暟鎹紱鍥捐〃 CDN 浠嶉渶瑕佽仈缃戙€俓n"
        "4. 鏈寘鏉ヨ嚜绉佹湁 GitHub main锛屽彧鍖呭惈宸茬‘璁ゅ苟鍚堝苟鐨勭増鏈€俓n"
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


