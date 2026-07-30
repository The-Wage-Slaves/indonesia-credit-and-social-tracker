#!/usr/bin/env python3
"""Collect Indonesia macro indicators for human review.

This collector intentionally does not edit the confirmed dashboard series. It:

1. reads the latest confirmed values from credit-dashboard.html;
2. collects BI policy-rate and JISDOR observations from Bank Indonesia;
3. collects CPI, GDP and unemployment releases through the official BPS API;
4. writes a review batch to macro-pending.js / macro-pending.json and pending.*.

The credit-industry USD conversion remains fixed at FX=15,000. JISDOR collected
here is an economic indicator for the macro panel, not a conversion setting.
"""
from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import os
import pathlib
import re
import sys
from dataclasses import dataclass, asdict
from html.parser import HTMLParser
from typing import Any
from urllib.parse import quote
from urllib.request import Request, urlopen


ROOT = pathlib.Path(__file__).resolve().parents[2]
DASHBOARD = ROOT / "credit-tracker" / "dashboard" / "credit-dashboard.html"
OUTPUT_JSON = ROOT / "credit-tracker" / "macro-monitor" / "output" / "macro-pending.json"
OUTPUT_JS = ROOT / "credit-tracker" / "dashboard" / "macro-pending.js"
PENDING_JSON = ROOT / "pending.json"
PENDING_JS = ROOT / "pending.js"

BI_RATE_URL = "https://www.bi.go.id/id/statistik/indikator/bi-rate.aspx"
JISDOR_URL = "https://www.bi.go.id/en/statistik/informasi-kurs/jisdor/Default.aspx"
BPS_API_BASE = "https://webapi.bps.go.id/v1/api/list/model/pressrelease"

MONTHS = {
    "january": 1, "januari": 1,
    "february": 2, "februari": 2,
    "march": 3, "maret": 3,
    "april": 4,
    "may": 5, "mei": 5,
    "june": 6, "juni": 6,
    "july": 7, "juli": 7,
    "august": 8, "agustus": 8,
    "september": 9,
    "october": 10, "oktober": 10,
    "november": 11,
    "december": 12, "desember": 12,
}
ROMAN_QUARTERS = {"i": 1, "ii": 2, "iii": 3, "iv": 4}


class TableTextParser(HTMLParser):
    """Small dependency-free parser that returns text for every table row."""

    def __init__(self) -> None:
        super().__init__()
        self.in_row = False
        self.in_cell = False
        self.cell_parts: list[str] = []
        self.row: list[str] = []
        self.rows: list[list[str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "tr":
            self.in_row = True
            self.row = []
        elif self.in_row and tag in {"td", "th"}:
            self.in_cell = True
            self.cell_parts = []

    def handle_data(self, data: str) -> None:
        if self.in_cell:
            self.cell_parts.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag in {"td", "th"} and self.in_cell:
            value = re.sub(r"\s+", " ", html.unescape(" ".join(self.cell_parts))).strip()
            self.row.append(value)
            self.in_cell = False
        elif tag == "tr" and self.in_row:
            if self.row:
                self.rows.append(self.row)
            self.in_row = False


@dataclass
class Observation:
    indicator: str
    label: str
    period: str
    value: float
    unit: str
    source: str
    source_url: str
    released: str | None = None
    note: str = ""


def fetch_text(url: str, timeout: int = 35) -> str:
    request = Request(
        url,
        headers={"User-Agent": "IndonesiaCreditTracker/1.0 (+human-review macro monitor)"},
    )
    with urlopen(request, timeout=timeout) as response:
        return response.read().decode(response.headers.get_content_charset() or "utf-8", errors="replace")


def rows_from_html(source: str) -> list[list[str]]:
    parser = TableTextParser()
    parser.feed(source)
    return parser.rows


def parse_date(text: str) -> dt.date | None:
    clean = re.sub(r"\s+", " ", text.strip())
    for pattern in ("%d %B %Y", "%d %b %Y", "%d/%m/%Y", "%d-%m-%Y"):
        try:
            return dt.datetime.strptime(clean, pattern).date()
        except ValueError:
            pass
    match = re.search(r"(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})", clean)
    if match and match.group(2).lower() in MONTHS:
        return dt.date(int(match.group(3)), MONTHS[match.group(2).lower()], int(match.group(1)))
    return None


def decimal(text: str) -> float | None:
    match = re.search(r"-?\d+(?:[.,]\d+)?", text.replace("\xa0", " "))
    if not match:
        return None
    token = match.group(0)
    if "," in token and "." not in token:
        token = token.replace(",", ".")
    elif "," in token and "." in token:
        token = token.replace(",", "")
    try:
        return float(token)
    except ValueError:
        return None


def parse_bi_rate(source: str) -> Observation:
    candidates: list[tuple[dt.date, float]] = []
    for row in rows_from_html(source):
        row_text = " | ".join(row)
        date_value = next((parse_date(cell) for cell in row if parse_date(cell)), None)
        rates = [decimal(cell) for cell in row if "%" in cell]
        rates = [rate for rate in rates if rate is not None and 0 <= rate <= 20]
        if date_value and rates:
            candidates.append((date_value, rates[0]))
    if not candidates:
        # Fallback for pages whose table is rendered without conventional rows.
        flat = re.sub(r"<[^>]+>", " ", source)
        pattern = re.compile(
            r"(\d{1,2}\s+[A-Za-z]+\s+\d{4}).{0,120}?(\d+(?:[.,]\d+)?)\s*%",
            re.I | re.S,
        )
        for date_text, rate_text in pattern.findall(flat):
            date_value = parse_date(date_text)
            if date_value:
                candidates.append((date_value, float(rate_text.replace(",", "."))))
    if not candidates:
        raise ValueError("Bank Indonesia policy-rate table was not recognized")
    date_value, rate = max(candidates, key=lambda item: item[0])
    return Observation(
        indicator="bi_rate",
        label="BI 基准利率",
        period=date_value.strftime("%Y.%m"),
        value=rate,
        unit="%",
        source="Bank Indonesia",
        source_url=BI_RATE_URL,
        released=date_value.isoformat(),
        note="当月最新一次 BI 决议值；正式序列按月末生效值确认。",
    )


def parse_jisdor(source: str) -> Observation:
    candidates: list[tuple[dt.date, float]] = []
    for row in rows_from_html(source):
        date_value = next((parse_date(cell) for cell in row if parse_date(cell)), None)
        values: list[float] = []
        for cell in row:
            normalized = cell.replace("Rp", "").replace(",", "").strip()
            value = decimal(normalized)
            if value is not None and 8_000 <= value <= 30_000:
                values.append(value)
        if date_value and values:
            candidates.append((date_value, values[0]))
    if not candidates:
        flat = re.sub(r"<[^>]+>", " ", source)
        pattern = re.compile(
            r"(\d{1,2}\s+[A-Za-z]+\s+\d{4}).{0,120}?(?:Rp\s*)?(\d{2}[,.]\d{3})",
            re.I | re.S,
        )
        for date_text, value_text in pattern.findall(flat):
            date_value = parse_date(date_text)
            if date_value:
                candidates.append((date_value, float(value_text.replace(",", "").replace(".", ""))))
    if not candidates:
        raise ValueError("Bank Indonesia JISDOR table was not recognized")
    date_value, value = max(candidates, key=lambda item: item[0])
    return Observation(
        indicator="usd_idr",
        label="USD/IDR（JISDOR）",
        period=date_value.strftime("%Y.%m"),
        value=value,
        unit="IDR/USD",
        source="Bank Indonesia JISDOR",
        source_url=JISDOR_URL,
        released=date_value.isoformat(),
        note=f"{date_value.isoformat()} 最近工作日官方 JISDOR；供宏观板块使用，不改变信贷行业固定 FX=15,000 口径。",
    )


def bps_items(payload: dict[str, Any]) -> list[dict[str, Any]]:
    if str(payload.get("status", "")).upper() != "OK":
        return []
    data = payload.get("data")
    if not isinstance(data, list) or len(data) < 2 or not isinstance(data[1], list):
        return []
    return [item for item in data[1] if isinstance(item, dict)]


def text_of_release(item: dict[str, Any]) -> str:
    raw = " ".join(str(item.get(key, "")) for key in ("title", "abstract"))
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", raw))).strip()


def release_url(item: dict[str, Any]) -> str:
    pdf = str(item.get("pdf", "")).strip()
    if pdf.startswith("https://"):
        return pdf
    return "https://www.bps.go.id/id/pressrelease"


def release_date(item: dict[str, Any]) -> str | None:
    raw = str(item.get("rl_date", "")).strip()
    for pattern in ("%Y-%m-%d", "%d-%m-%Y", "%d/%m/%Y"):
        try:
            return dt.datetime.strptime(raw[:10], pattern).date().isoformat()
        except ValueError:
            pass
    return None


def month_period(text: str) -> str | None:
    match = re.search(
        r"\b(" + "|".join(re.escape(month) for month in MONTHS) + r")\s+(\d{4})\b",
        text,
        re.I,
    )
    if not match:
        return None
    return f"{int(match.group(2))}.{MONTHS[match.group(1).lower()]:02d}"


def percent_after(text: str, anchors: list[str]) -> float | None:
    normalized = text.lower()
    for anchor in anchors:
        pattern = re.compile(
            re.escape(anchor.lower()) + r".{0,120}?(-?\d+(?:[.,]\d+)?)\s*(?:persen|percent|%)",
            re.I,
        )
        match = pattern.search(normalized)
        if match:
            return float(match.group(1).replace(",", "."))
    return None


def parse_bps_releases(items: list[dict[str, Any]]) -> list[Observation]:
    observations: list[Observation] = []
    for item in items:
        text = text_of_release(item)
        lower = text.lower()
        url = release_url(item)
        released = release_date(item)

        if ("inflasi" in lower or "inflation" in lower) and ("year-on-year" in lower or "y-on-y" in lower):
            period = month_period(text)
            value = percent_after(text, ["inflasi year-on-year", "inflation year-on-year", "y-on-y"])
            if period and value is not None:
                observations.append(Observation(
                    "cpi", "CPI 通胀", period, value, "% YoY", "BPS", url, released,
                    "全国 CPI 同比（year-on-year）。",
                ))

        if ("triwulan" in lower or "quarter" in lower) and ("ekonomi indonesia" in lower or "indonesia economy" in lower):
            year_match = re.search(r"\b(20\d{2})\b", text)
            quarter_match = re.search(r"\btriwulan\s+(i{1,3}|iv)\b", lower)
            if not quarter_match:
                quarter_match = re.search(r"\bquarter\s+([1-4])\b", lower)
            quarter = None
            if quarter_match:
                quarter = int(quarter_match.group(1)) if quarter_match.group(1).isdigit() else ROMAN_QUARTERS.get(quarter_match.group(1))
            value = percent_after(text, ["tumbuh", "grew", "growth"])
            if year_match and quarter and value is not None:
                observations.append(Observation(
                    "gdp", "GDP 增速", f"{year_match.group(1)}Q{quarter}", value, "% YoY",
                    "BPS", url, released, "全国实际 GDP 同比增速。",
                ))

        if "pengangguran" in lower or "unemployment" in lower:
            period = month_period(text)
            value = percent_after(
                text,
                ["tingkat pengangguran terbuka", "unemployment rate", "pengangguran"],
            )
            if period and value is not None:
                observations.append(Observation(
                    "unemployment", "失业率", period, value, "%", "BPS", url, released,
                    "Sakernas 全国公开失业率。",
                ))

    # If the same release appeared in multiple keyword calls, keep one observation.
    deduplicated: dict[tuple[str, str, float], Observation] = {}
    for observation in observations:
        deduplicated[(observation.indicator, observation.period, observation.value)] = observation
    return list(deduplicated.values())


def collect_bps(api_key: str, today: dt.date) -> list[Observation]:
    if not api_key:
        raise RuntimeError("BPS_API_KEY is not configured")
    items: list[dict[str, Any]] = []
    for year in {today.year, today.year - 1}:
        for keyword in ("inflasi", "ekonomi indonesia triwulan", "pengangguran"):
            url = (
                f"{BPS_API_BASE}/perpage/100/lang/ind/domain/0000/key/{quote(api_key, safe='')}"
                f"/keyword/{quote(keyword, safe='')}/page/1/month/0/year/{year}"
            )
            request = Request(url, headers={"User-Agent": "IndonesiaCreditTracker/1.0"})
            try:
                with urlopen(request, timeout=35) as response:
                    payload = json.loads(response.read().decode("utf-8", errors="replace"))
            except Exception as exc:
                # The BPS key is part of the URL path. Never copy the exception
                # (which may echo that URL) into logs or committed pending data.
                raise RuntimeError(
                    f"BPS WebAPI request failed for {keyword}/{year}: {type(exc).__name__}"
                ) from None
            items.extend(bps_items(payload))
    observations = parse_bps_releases(items)
    if not observations:
        raise ValueError("BPS API returned no recognized CPI/GDP/unemployment releases")
    return observations


def parse_dashboard_series(source: str, const_name: str, period_key: str) -> list[tuple[str, float]]:
    match = re.search(
        rf"const\s+{re.escape(const_name)}\s*=\s*\[(.*?)\]\s*;",
        source,
        re.S,
    )
    if not match:
        raise ValueError(f"Dashboard series not found: {const_name}")
    rows = re.findall(
        rf"\{{\s*{re.escape(period_key)}\s*:\s*[\"']([^\"']+)[\"']\s*,\s*v\s*:\s*(-?\d+(?:\.\d+)?)\s*\}}",
        match.group(1),
    )
    if not rows:
        raise ValueError(f"Dashboard series has no parseable rows: {const_name}")
    return [(period, float(value)) for period, value in rows]


def confirmed_values(source: str) -> dict[str, dict[str, Any]]:
    definitions = {
        "gdp": ("gdpData", "q"),
        "cpi": ("cpiData", "m"),
        "bi_rate": ("rateData", "m"),
        "usd_idr": ("fxData", "m"),
        "unemployment": ("unempData", "d"),
    }
    result: dict[str, dict[str, Any]] = {}
    for indicator, (const_name, period_key) in definitions.items():
        rows = parse_dashboard_series(source, const_name, period_key)
        period, value = rows[-1]
        if indicator == "gdp" and re.fullmatch(r"\d{2}Q[1-4]", period):
            period = "20" + period
        result[indicator] = {"period": period, "value": value}
    return result


def period_rank(indicator: str, period: str) -> int:
    if indicator == "gdp":
        match = re.fullmatch(r"(\d{4})Q([1-4])", period)
        return int(match.group(1)) * 4 + int(match.group(2)) if match else -1
    match = re.fullmatch(r"(\d{4})\.(\d{2})", period)
    return int(match.group(1)) * 12 + int(match.group(2)) if match else -1


def latest_observations(observations: list[Observation]) -> dict[str, Observation]:
    latest: dict[str, Observation] = {}
    for observation in observations:
        current = latest.get(observation.indicator)
        if current is None or (
            period_rank(observation.indicator, observation.period),
            observation.released or "",
        ) > (
            period_rank(current.indicator, current.period),
            current.released or "",
        ):
            latest[observation.indicator] = observation
    return latest


def compare(
    confirmed: dict[str, dict[str, Any]],
    observations: dict[str, Observation],
) -> list[dict[str, Any]]:
    changes: list[dict[str, Any]] = []
    for indicator, observation in observations.items():
        old = confirmed.get(indicator)
        if not old:
            continue
        newer_period = period_rank(indicator, observation.period) > period_rank(indicator, str(old["period"]))
        changed_same_period = (
            observation.period == old["period"]
            and abs(observation.value - float(old["value"])) > (0.5 if indicator == "usd_idr" else 0.005)
        )
        if newer_period or changed_same_period:
            changes.append({
                "indicator": indicator,
                "label": observation.label,
                "confirmed": old,
                "candidate": asdict(observation),
                "reason": "new_period" if newer_period else "same_period_revision",
            })
    return changes


def load_json(path: pathlib.Path, default: Any) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return default


def write_pending_card(batch: dict[str, Any]) -> None:
    pending = load_json(PENDING_JSON, {"boards": {"credit": [], "stability": []}})
    boards = pending.setdefault("boards", {})
    credit_items = boards.setdefault("credit", [])
    credit_items[:] = [item for item in credit_items if item.get("source") != "macro-monitor"]
    changes = batch["changes"]
    failures = [name for name, health in batch["sourceHealth"].items() if health["status"] != "ok"]
    if changes or failures:
        detail_parts = []
        if changes:
            detail_parts.append(
                "；".join(
                    f"{item['label']} {item['confirmed']['period']} {item['confirmed']['value']:g}"
                    f" → {item['candidate']['period']} {item['candidate']['value']:g}"
                    for item in changes
                )
            )
        if failures:
            detail_parts.append("采集异常/待配置：" + "、".join(failures))
        credit_items.append({
            "title": f"国家宏观指标月度批次：{len(changes)} 项候选更新",
            "detail": "；".join(detail_parts),
            "link": "credit-tracker/dashboard/credit-dashboard.html#sec1",
            "action": "核对期间、单位和官方原文；确认后才把候选值写入正式宏观序列。",
            "source": "macro-monitor",
        })
    pending["updated"] = dt.datetime.now().strftime("%Y-%m-%d %H:%M")
    PENDING_JSON.write_text(json.dumps(pending, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    PENDING_JS.write_text(
        "window.PENDING_DATA = " + json.dumps(pending, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )


def run(today: dt.date, fixture_dir: pathlib.Path | None = None) -> dict[str, Any]:
    dashboard_source = DASHBOARD.read_text(encoding="utf-8")
    confirmed = confirmed_values(dashboard_source)
    observations: list[Observation] = []
    health: dict[str, dict[str, str]] = {}

    collectors = [
        ("Bank Indonesia policy rate", lambda: parse_bi_rate(
            (fixture_dir / "bi-rate.html").read_text(encoding="utf-8")
            if fixture_dir else fetch_text(BI_RATE_URL)
        )),
        ("Bank Indonesia JISDOR", lambda: parse_jisdor(
            (fixture_dir / "jisdor.html").read_text(encoding="utf-8")
            if fixture_dir else fetch_text(JISDOR_URL)
        )),
    ]
    for name, collector in collectors:
        try:
            observations.append(collector())
            health[name] = {"status": "ok", "detail": "official source parsed"}
        except Exception as exc:  # individual source failure must not erase other evidence
            health[name] = {"status": "failed", "detail": str(exc)[:300]}

    try:
        if fixture_dir:
            payloads = [
                json.loads(path.read_text(encoding="utf-8"))
                for path in sorted(fixture_dir.glob("bps-*.json"))
            ]
            bps_observations = parse_bps_releases([
                item for payload in payloads for item in bps_items(payload)
            ])
            if not bps_observations:
                raise ValueError("fixture contained no recognized BPS release")
        else:
            bps_observations = collect_bps(os.getenv("BPS_API_KEY", "").strip(), today)
        observations.extend(bps_observations)
        health["BPS WebAPI"] = {"status": "ok", "detail": f"{len(bps_observations)} official releases parsed"}
    except Exception as exc:
        status = "unconfigured" if "not configured" in str(exc) else "failed"
        health["BPS WebAPI"] = {"status": status, "detail": str(exc)[:300]}

    latest = latest_observations(observations)
    changes = compare(confirmed, latest)
    batch = {
        "schemaVersion": 1,
        "status": "pending-human-review",
        "asOf": today.isoformat(),
        "reviewRequired": bool(changes) or any(item["status"] != "ok" for item in health.values()),
        "methodology": {
            "cadence": "monthly",
            "monthly": ["cpi", "bi_rate", "usd_idr"],
            "quarterlyCheckedMonthly": ["gdp"],
            "semiannualCheckedMonthly": ["unemployment"],
            "humanInLoop": True,
            "industryFxUnchanged": 15000,
        },
        "confirmed": confirmed,
        "observations": {key: asdict(value) for key, value in latest.items()},
        "changes": changes,
        "sourceHealth": health,
    }
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON.write_text(json.dumps(batch, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    OUTPUT_JS.write_text(
        "window.MACRO_PENDING = " + json.dumps(batch, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    write_pending_card(batch)
    return batch


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--date", help="collection date YYYY-MM-DD (default: today)")
    parser.add_argument("--fixture-dir", type=pathlib.Path, help="offline fixture directory")
    args = parser.parse_args()
    today = dt.date.fromisoformat(args.date) if args.date else dt.date.today()
    batch = run(today, args.fixture_dir)
    print(json.dumps({
        "status": batch["status"],
        "changes": len(batch["changes"]),
        "reviewRequired": batch["reviewRequired"],
        "sourceHealth": batch["sourceHealth"],
        "output": str(OUTPUT_JSON.relative_to(ROOT)),
    }, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
