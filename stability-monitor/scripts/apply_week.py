# -*- coding: utf-8 -*-
"""
稳定性看板 · 周度快照写入 + JSON导出
====================================
两个用途：
  1. append   —— 往 dashboard/data.js 的 weekly 数组追加一周五支柱快照（自动备份原文件），
                 并同时归档一份 driver 级快照
  2. export   —— 把 data.js 完整导出为 data/dashboard-data.json（供未来云端部署"打开即最新"用）
  3. snapshot —— 只归档当前 data.js 的 driver 级快照（补档用；append 已自动调用）

用法:
  python apply_week.py append 2026-07-21 fiscal=50 currency=37 institutions=33 social=54 coercive=39
  python apply_week.py export
  python apply_week.py snapshot [YYYY-MM-DD]

**为什么要归档 driver 级快照**（2026-08-20 新增，勿删）：
data.js 的 weekly 只存支柱分，不存每期的 driver 组合与权重。后果是**方法论变更无法重放**——
2026-08-20 那次新增两个 driver 时，「未测量的 driver 权重原样退回、历史因此不变」这条保证
只能写在文字里，没有任何东西能重算验证；同一次干跑中 2026-07-07 的货币支柱已经反推不出来
（反推 44、归档 42），那一期永远查不清了。从本次起每期落一份快照，往后的方法论变更就可以
逐期重放，而不是靠人记得当时用的是哪组权重。

说明：评分本身仍是"人在环"——本脚本只做机械写入，分数由分析确认后给出。
"""
import json, math, re, shutil, subprocess, sys, datetime, pathlib

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

HERE = pathlib.Path(__file__).parent
DATA_JS = HERE.parent / "dashboard" / "data.js"
OUT_JSON = HERE.parent / "data" / "dashboard-data.json"
SNAPSHOT_DIR = HERE.parent / "data" / "driver-snapshots"
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
    write_driver_snapshot(date)


def half_up(value: float) -> int:
    """半数进位取整，与看板/CI 保持一致。

    **不能用内建 round()**：Python 用银行家舍入（round(46.5)==46 取偶数），而
    dashboard 的 engine.js 与 validate_repo.mjs 用的是 JS Math.round（46.5→47）。
    支柱分正好落在 .5 上时两者会给出不同答案，于是 CI 通过、归档却拒绝——
    2026-09-01 货币支柱算出 46.50，就撞上了这个分歧。
    """
    return math.floor(value + 0.5)


def eval_data_js():
    """data.js 是JS对象字面量（含注释、键不带引号），用 Node 求值最稳。"""
    script = ("const fs=require('fs');"
              f"let src=fs.readFileSync({json.dumps(str(DATA_JS))},'utf8');"
              "src=src.replace(/const DATA\\s*=/,'globalThis.DATA=');"
              "eval(src);"
              "console.log(JSON.stringify(globalThis.DATA,null,2));")
    r = subprocess.run(["node", "-e", script], capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        sys.exit(f"× Node 求值失败:\n{r.stderr}")
    return json.loads(r.stdout)


def export_json():
    data = eval_data_js()
    OUT_JSON.parent.mkdir(exist_ok=True)
    text = json.dumps(data, ensure_ascii=False, indent=2)
    OUT_JSON.write_text(text, encoding="utf-8")
    print(f"✓ 已导出 {OUT_JSON}（{len(text):,} 字节）")


def write_driver_snapshot(date=None):
    """归档当前 data.js 的 driver 级快照，供日后重放方法论变更。

    只记可重算的量：driver 名、类型、权重、分数、pillarAdj。不抄 changeReason 与
    sources——data.js 里已经有了，抄第二份只会两处漂移。

    归档前先自校验：权重和必须为 1、快照必须能算出 data.js 写的支柱分。算不出就
    拒绝落盘——归档一份自相矛盾的快照比没有快照更糟，它会让日后的重放得出错误结论。
    """
    data = eval_data_js()
    date = date or data["asOf"]
    pillars = {}
    for pillar in data["pillars"]:
        drivers = [{"name": d["name"], "type": d.get("type"),
                    "weight": d["weight"], "score": d["score"]}
                   for d in pillar["drivers"]]
        weight_sum = round(sum(d["weight"] for d in drivers), 10)
        computed = half_up(sum(d["weight"] * d["score"] for d in drivers)
                           + (pillar.get("pillarAdj") or 0))
        if weight_sum != 1:
            sys.exit(f"× {pillar['id']} 权重和为 {weight_sum}，拒绝归档自相矛盾的快照")
        if computed != pillar["score"]:
            sys.exit(f"× {pillar['id']} 快照算出 {computed}、data.js 写的是 {pillar['score']}，拒绝归档")
        pillars[pillar["id"]] = {"score": pillar["score"],
                                 "pillarAdj": pillar.get("pillarAdj") or 0,
                                 "drivers": drivers}
    payload = {
        "schemaVersion": 1,
        "date": date,
        "note": ("Driver-level snapshot of the production V3 scorecard, archived so a later "
                 "methodology change can be replayed period by period instead of relying on prose. "
                 "Periods before 2026-08-20 have no such record and never will."),
        "pillars": pillars,
    }
    SNAPSHOT_DIR.mkdir(parents=True, exist_ok=True)
    out = SNAPSHOT_DIR / f"{date}.json"
    out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    total = sum(len(v["drivers"]) for v in pillars.values())
    print(f"✓ 已归档 driver 级快照 {out.name}（{total} 个 driver）")
    return out



def main():
    if len(sys.argv) < 2 or sys.argv[1] not in ("append", "export", "snapshot"):
        print(__doc__); sys.exit(1)
    if sys.argv[1] == "export":
        export_json(); return
    if sys.argv[1] == "snapshot":
        write_driver_snapshot(sys.argv[2] if len(sys.argv) > 2 else None); return
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
