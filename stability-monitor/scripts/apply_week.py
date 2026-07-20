# -*- coding: utf-8 -*-
"""
稳定性看板 · 周度快照写入 + JSON导出
====================================
两个用途：
  1. append  —— 往 dashboard/data.js 的 weekly 数组追加一周五支柱快照（自动备份原文件）
  2. export  —— 把 data.js 完整导出为 data/dashboard-data.json（供未来云端部署"打开即最新"用）

用法:
  python apply_week.py append 2026-07-21 fiscal=50 currency=37 institutions=33 social=54 coercive=39
  python apply_week.py export

说明：评分本身仍是"人在环"——本脚本只做机械写入，分数由分析确认后给出。
"""
import json, re, shutil, subprocess, sys, datetime, pathlib

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

HERE = pathlib.Path(__file__).parent
DATA_JS = HERE.parent / "dashboard" / "data.js"
OUT_JSON = HERE.parent / "data" / "dashboard-data.json"
PILLARS = ["fiscal", "currency", "institutions", "social", "coercive"]


def backup():
    stamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
    dst = DATA_JS.with_suffix(f".js.bak-{stamp}")
    shutil.copy2(DATA_JS, dst)
    return dst


def append_week(date, scores):
    txt = DATA_JS.read_text(encoding="utf-8")
    if f'date: "{date}"' in txt:
        sys.exit(f"× weekly 里已有 {date}，不重复写入。")
    # 定位 weekly 数组的右括号（从 "weekly: [" 起数括号配平）
    m = re.search(r"weekly:\s*\[", txt)
    if not m:
        sys.exit("× data.js 里找不到 weekly 数组。")
    i, depth = m.end(), 1
    while i < len(txt) and depth:
        if txt[i] == "[": depth += 1
        elif txt[i] == "]": depth -= 1
        i += 1
    close = i - 1                      # "]" 的位置
    entry = ('    { date: "%s", scores: { %s } }\n  '
             % (date, ", ".join(f"{p}: {scores[p]}" for p in PILLARS)))
    # 上一条目后补逗号
    before = txt[:close].rstrip()
    if not before.endswith(","):
        before += ","
    new = before + "\n" + entry + txt[close:]
    # 同步 asOf
    new = re.sub(r'asOf:\s*"[\d-]+"', f'asOf: "{date}"', new, count=1)
    bak = backup()
    DATA_JS.write_text(new, encoding="utf-8")
    print(f"✓ 已写入 {date} 周快照并更新 asOf（备份: {bak.name}）")
    print("  注意：weekly 只是趋势图数据；各支柱卡片的 score/prev/changeReason 仍需按周更流程更新。")


def export_json():
    # data.js 是JS对象字面量（含注释、键不带引号），用 Node 求值最稳
    script = ("const fs=require('fs');"
              f"let src=fs.readFileSync({json.dumps(str(DATA_JS))},'utf8');"
              "src=src.replace(/const DATA\\s*=/,'globalThis.DATA=');"
              "eval(src);"
              "console.log(JSON.stringify(globalThis.DATA,null,2));")
    r = subprocess.run(["node", "-e", script], capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        sys.exit(f"× Node 求值失败:\n{r.stderr}")
    OUT_JSON.parent.mkdir(exist_ok=True)
    OUT_JSON.write_text(r.stdout, encoding="utf-8")
    print(f"✓ 已导出 {OUT_JSON}（{len(r.stdout):,} 字节）")


def main():
    if len(sys.argv) < 2 or sys.argv[1] not in ("append", "export"):
        print(__doc__); sys.exit(1)
    if sys.argv[1] == "export":
        export_json(); return
    if len(sys.argv) < 3 or not re.match(r"^\d{4}-\d{2}-\d{2}$", sys.argv[2]):
        sys.exit("× 用法: python apply_week.py append YYYY-MM-DD fiscal=.. currency=.. institutions=.. social=.. coercive=..")
    date = sys.argv[2]
    scores = {}
    for arg in sys.argv[3:]:
        k, _, v = arg.partition("=")
        if k in PILLARS and v.isdigit():
            scores[k] = int(v)
    missing = [p for p in PILLARS if p not in scores]
    if missing:
        sys.exit(f"× 缺支柱分: {', '.join(missing)}")
    append_week(date, scores)


if __name__ == "__main__":
    main()
