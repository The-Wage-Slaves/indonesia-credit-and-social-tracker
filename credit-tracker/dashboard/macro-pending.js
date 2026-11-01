window.MACRO_PENDING = {
  "schemaVersion": 1,
  "status": "pending-human-review",
  "asOf": "2026-11-01",
  "reviewRequired": true,
  "methodology": {
    "cadence": "monthly",
    "monthly": [
      "cpi",
      "bi_rate",
      "usd_idr"
    ],
    "quarterlyCheckedMonthly": [
      "gdp"
    ],
    "semiannualCheckedMonthly": [
      "unemployment"
    ],
    "humanInLoop": true,
    "industryFxUnchanged": 15000
  },
  "confirmed": {
    "gdp": {
      "period": "2026Q1",
      "value": 5.61
    },
    "cpi": {
      "period": "26.06",
      "value": 3.34
    },
    "bi_rate": {
      "period": "26.08",
      "value": 5.75
    },
    "usd_idr": {
      "period": "26.08",
      "value": 17703.0
    },
    "unemployment": {
      "period": "2026.02",
      "value": 4.68
    }
  },
  "observations": {
    "bi_rate": {
      "indicator": "bi_rate",
      "label": "BI 基准利率",
      "period": "2026.10",
      "value": 5.75,
      "unit": "%",
      "source": "Bank Indonesia",
      "source_url": "https://www.bi.go.id/id/statistik/indikator/bi-rate.aspx",
      "released": "2026-10-21",
      "note": "当月最新一次 BI 决议值；正式序列按月末生效值确认。"
    },
    "usd_idr": {
      "indicator": "usd_idr",
      "label": "USD/IDR（JISDOR）",
      "period": "2026.10",
      "value": 18138.0,
      "unit": "IDR/USD",
      "source": "Bank Indonesia JISDOR",
      "source_url": "https://www.bi.go.id/en/statistik/informasi-kurs/jisdor/Default.aspx",
      "released": "2026-10-30",
      "note": "2026-10-30 最近工作日官方 JISDOR；供宏观板块使用，不改变信贷行业固定 FX=15,000 口径。"
    },
    "cpi": {
      "indicator": "cpi",
      "label": "CPI 通胀",
      "period": "2026.09",
      "value": 3.28,
      "unit": "% YoY",
      "source": "BPS",
      "source_url": "https://webapi.bps.go.id/download.php?f=AQADxbiHNsmwrH8fqOtplcsBref3cSUQPCvcEFfSKYosTd6Zru6GfS4S_Blknx_OrNHlyOaZ1RiZkr_Q8TAYOKUf63XBaVQzWYxaYLPK-YclpSOmUWYyHM52-M_ZdtsM93sZx_lAqtd539jQe7OzSPTEiNyRLAj3lxuvbZ-bhlNGfY65cP46tFdUNWnN3qKa10YY7eVAFvEuOgPvMUG5O4i7hyKFA-il8P7VZmOaHSOhKabpC-NbhGLVfSPoDw",
      "released": "2026-10-01",
      "note": "全国 CPI 同比（year-on-year）。"
    },
    "gdp": {
      "indicator": "gdp",
      "label": "GDP 增速",
      "period": "2026Q2",
      "value": 5.29,
      "unit": "% YoY",
      "source": "BPS",
      "source_url": "https://webapi.bps.go.id/download.php?f=AQADM4V8W7arxOgYJ3_FSattU6wtPpDxzkfQxdudU7K1XRzhRUGfK9vauCgmyIQOgDFmOnKNwwT7s9d8HbJEtYpFT90ovnXeZH8MD0Z49jOGSKlXSBJUwSCXLNf6rOHy5A4dEed2LLTr5z2wXZfAP1mo6WTRI6qhzUdKlUY1PqGA4ijfeQ1p1bc4vOc_5uoWRKCag0oEBJmHVYdhhH7Eb_DyGz2pnR3jANAzoM2bPZIXFqssxQXFkw-ZATS__Q",
      "released": "2026-08-05",
      "note": "全国实际 GDP 同比增速。"
    },
    "unemployment": {
      "indicator": "unemployment",
      "label": "失业率",
      "period": "2026.05",
      "value": 4.65,
      "unit": "%",
      "source": "BPS",
      "source_url": "https://webapi.bps.go.id/download.php?f=AQADVPy59RuZgNratn2SXs599j6FlEQrXq_2fWynAePho-yllV1YFX-rOBOW5gotDN4iZS9SeMHBxvoYTJ6mWjaLyLbdEEJHbHHy1rUvXSbOYQ48SWaXt_Fu-kD2DGgfsYWh_1WkEdlVVuBGeZurK-58W4YFbO5ZUAs2002KFayjZJwQE2aYBg4DHUIznqwavFXH_rAKhssbLOgyrFk29MNM_K6OqOoKZd5ChLF7mtwnoSJjcos7QVeRDbzW1w",
      "released": "2026-08-05",
      "note": "Sakernas 全国公开失业率。"
    }
  },
  "changes": [
    {
      "indicator": "bi_rate",
      "label": "BI 基准利率",
      "confirmed": {
        "period": "26.08",
        "value": 5.75
      },
      "candidate": {
        "indicator": "bi_rate",
        "label": "BI 基准利率",
        "period": "2026.10",
        "value": 5.75,
        "unit": "%",
        "source": "Bank Indonesia",
        "source_url": "https://www.bi.go.id/id/statistik/indikator/bi-rate.aspx",
        "released": "2026-10-21",
        "note": "当月最新一次 BI 决议值；正式序列按月末生效值确认。"
      },
      "reason": "new_period"
    },
    {
      "indicator": "usd_idr",
      "label": "USD/IDR（JISDOR）",
      "confirmed": {
        "period": "26.08",
        "value": 17703.0
      },
      "candidate": {
        "indicator": "usd_idr",
        "label": "USD/IDR（JISDOR）",
        "period": "2026.10",
        "value": 18138.0,
        "unit": "IDR/USD",
        "source": "Bank Indonesia JISDOR",
        "source_url": "https://www.bi.go.id/en/statistik/informasi-kurs/jisdor/Default.aspx",
        "released": "2026-10-30",
        "note": "2026-10-30 最近工作日官方 JISDOR；供宏观板块使用，不改变信贷行业固定 FX=15,000 口径。"
      },
      "reason": "new_period"
    },
    {
      "indicator": "cpi",
      "label": "CPI 通胀",
      "confirmed": {
        "period": "26.06",
        "value": 3.34
      },
      "candidate": {
        "indicator": "cpi",
        "label": "CPI 通胀",
        "period": "2026.09",
        "value": 3.28,
        "unit": "% YoY",
        "source": "BPS",
        "source_url": "https://webapi.bps.go.id/download.php?f=AQADxbiHNsmwrH8fqOtplcsBref3cSUQPCvcEFfSKYosTd6Zru6GfS4S_Blknx_OrNHlyOaZ1RiZkr_Q8TAYOKUf63XBaVQzWYxaYLPK-YclpSOmUWYyHM52-M_ZdtsM93sZx_lAqtd539jQe7OzSPTEiNyRLAj3lxuvbZ-bhlNGfY65cP46tFdUNWnN3qKa10YY7eVAFvEuOgPvMUG5O4i7hyKFA-il8P7VZmOaHSOhKabpC-NbhGLVfSPoDw",
        "released": "2026-10-01",
        "note": "全国 CPI 同比（year-on-year）。"
      },
      "reason": "new_period"
    },
    {
      "indicator": "gdp",
      "label": "GDP 增速",
      "confirmed": {
        "period": "2026Q1",
        "value": 5.61
      },
      "candidate": {
        "indicator": "gdp",
        "label": "GDP 增速",
        "period": "2026Q2",
        "value": 5.29,
        "unit": "% YoY",
        "source": "BPS",
        "source_url": "https://webapi.bps.go.id/download.php?f=AQADM4V8W7arxOgYJ3_FSattU6wtPpDxzkfQxdudU7K1XRzhRUGfK9vauCgmyIQOgDFmOnKNwwT7s9d8HbJEtYpFT90ovnXeZH8MD0Z49jOGSKlXSBJUwSCXLNf6rOHy5A4dEed2LLTr5z2wXZfAP1mo6WTRI6qhzUdKlUY1PqGA4ijfeQ1p1bc4vOc_5uoWRKCag0oEBJmHVYdhhH7Eb_DyGz2pnR3jANAzoM2bPZIXFqssxQXFkw-ZATS__Q",
        "released": "2026-08-05",
        "note": "全国实际 GDP 同比增速。"
      },
      "reason": "new_period"
    },
    {
      "indicator": "unemployment",
      "label": "失业率",
      "confirmed": {
        "period": "2026.02",
        "value": 4.68
      },
      "candidate": {
        "indicator": "unemployment",
        "label": "失业率",
        "period": "2026.05",
        "value": 4.65,
        "unit": "%",
        "source": "BPS",
        "source_url": "https://webapi.bps.go.id/download.php?f=AQADVPy59RuZgNratn2SXs599j6FlEQrXq_2fWynAePho-yllV1YFX-rOBOW5gotDN4iZS9SeMHBxvoYTJ6mWjaLyLbdEEJHbHHy1rUvXSbOYQ48SWaXt_Fu-kD2DGgfsYWh_1WkEdlVVuBGeZurK-58W4YFbO5ZUAs2002KFayjZJwQE2aYBg4DHUIznqwavFXH_rAKhssbLOgyrFk29MNM_K6OqOoKZd5ChLF7mtwnoSJjcos7QVeRDbzW1w",
        "released": "2026-08-05",
        "note": "Sakernas 全国公开失业率。"
      },
      "reason": "new_period"
    }
  ],
  "sourceHealth": {
    "Bank Indonesia policy rate": {
      "status": "ok",
      "detail": "official source parsed"
    },
    "Bank Indonesia JISDOR": {
      "status": "ok",
      "detail": "official source parsed"
    },
    "BPS WebAPI": {
      "status": "ok",
      "detail": "27 official releases parsed"
    }
  }
};
