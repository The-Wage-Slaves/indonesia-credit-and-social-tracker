window.MACRO_PENDING = {
  "schemaVersion": 1,
  "status": "pending-human-review",
  "asOf": "2026-11-24",
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
      "period": "2026Q3",
      "value": 5.47
    },
    "cpi": {
      "period": "26.10",
      "value": 3.23
    },
    "bi_rate": {
      "period": "26.10",
      "value": 5.75
    },
    "usd_idr": {
      "period": "26.10",
      "value": 18138.0
    },
    "unemployment": {
      "period": "2026.08",
      "value": 4.75
    }
  },
  "observations": {
    "bi_rate": {
      "indicator": "bi_rate",
      "label": "BI 基准利率",
      "period": "2026.11",
      "value": 6.0,
      "unit": "%",
      "source": "Bank Indonesia",
      "source_url": "https://www.bi.go.id/id/statistik/indikator/bi-rate.aspx",
      "released": "2026-11-18",
      "note": "当月最新一次 BI 决议值；正式序列按月末生效值确认。"
    },
    "usd_idr": {
      "indicator": "usd_idr",
      "label": "USD/IDR（JISDOR）",
      "period": "2026.11",
      "value": 18204.0,
      "unit": "IDR/USD",
      "source": "Bank Indonesia JISDOR",
      "source_url": "https://www.bi.go.id/en/statistik/informasi-kurs/jisdor/Default.aspx",
      "released": "2026-11-24",
      "note": "2026-11-24 最近工作日官方 JISDOR；供宏观板块使用，不改变信贷行业固定 FX=15,000 口径。"
    },
    "cpi": {
      "indicator": "cpi",
      "label": "CPI 通胀",
      "period": "2026.10",
      "value": 3.23,
      "unit": "% YoY",
      "source": "BPS",
      "source_url": "https://webapi.bps.go.id/download.php?f=AQADB3s1vV0e1xO8VfVkms6NYYKf0o_KJ8LAYlNXrUPZxqygjPgkBJ_m_D2xspdYV7m_KdPnBj6wDdAhfnYmKaOnq4bGG94Mk8mkqXC3isB_oZdb0jumvq-ovUiBSRt_Rqz-4YvpKNiryCa9DQKU-zWI5VWMcYJoNDODA46e7OBeXUXlsJZPHTxn4E9Q6A018TDMbLQtgUi8Zw9vtlxeBBFVlXarP564s1eH-XabsJr8s221mTGtMU2bw8LOVzsCQd-zXITaWiICakE96uBDRgUZhHll80M7Fmvw",
      "released": "2026-11-02",
      "note": "全国 CPI 同比（year-on-year）。"
    },
    "gdp": {
      "indicator": "gdp",
      "label": "GDP 增速",
      "period": "2026Q3",
      "value": 5.47,
      "unit": "% YoY",
      "source": "BPS",
      "source_url": "https://webapi.bps.go.id/download.php?f=AQADG3JcKvIkUea3ihhmgfNbiPf1BnEIzHVRV61J2iG9X4jsCna50tP4zV2iYr4Hjig_mIvkcR0BStkqtSFpgfMmEBQM0U8MeqIx-BNKFmjotn54vhMi4KjlVYDaBdrHKSS1Etm5S2EnrF5C4EyIbzNhVhwpd0OVQHP5Qel78q_W9YK7YV3YOtRGWsvWN--fDt-7kAV9BSt_UI88QeucI_HsrLpnZS41EzP7tMw1LsLU4_agvao90LoZbX10wBjompW1hdVsBEkfLaE",
      "released": "2026-11-05",
      "note": "全国实际 GDP 同比增速。"
    },
    "unemployment": {
      "indicator": "unemployment",
      "label": "失业率",
      "period": "2026.08",
      "value": 4.75,
      "unit": "%",
      "source": "BPS",
      "source_url": "https://webapi.bps.go.id/download.php?f=AQADUsfGy1BC4ckpPXSfNfkSTNv2FpPBphylu8nD4jEgDbs7MpWCmcoactsUoVOLG-aag3hwDTkYnQ8jpTkeVaszRdh0V-1PunhHxT_DpGbFHweZ3uy0T1r1EyrrqM72nZq-27RPYLez0uUDHLV5zPY_qaIR0ECQdxFLekpFUtwS2t6nGVuQJiLG2wLV9A5uRV-mWQjiOBJupqWEfFMb_ysFTd_9Bi7xPrJA9Yi4kKOzuDzqeIKcGRsjCXcaAPF3ac_wDmJNtTxUGAZLYG-djtvN9gA",
      "released": "2026-11-05",
      "note": "Sakernas 全国公开失业率。"
    }
  },
  "changes": [
    {
      "indicator": "bi_rate",
      "label": "BI 基准利率",
      "confirmed": {
        "period": "26.10",
        "value": 5.75
      },
      "candidate": {
        "indicator": "bi_rate",
        "label": "BI 基准利率",
        "period": "2026.11",
        "value": 6.0,
        "unit": "%",
        "source": "Bank Indonesia",
        "source_url": "https://www.bi.go.id/id/statistik/indikator/bi-rate.aspx",
        "released": "2026-11-18",
        "note": "当月最新一次 BI 决议值；正式序列按月末生效值确认。"
      },
      "reason": "new_period"
    },
    {
      "indicator": "usd_idr",
      "label": "USD/IDR（JISDOR）",
      "confirmed": {
        "period": "26.10",
        "value": 18138.0
      },
      "candidate": {
        "indicator": "usd_idr",
        "label": "USD/IDR（JISDOR）",
        "period": "2026.11",
        "value": 18204.0,
        "unit": "IDR/USD",
        "source": "Bank Indonesia JISDOR",
        "source_url": "https://www.bi.go.id/en/statistik/informasi-kurs/jisdor/Default.aspx",
        "released": "2026-11-24",
        "note": "2026-11-24 最近工作日官方 JISDOR；供宏观板块使用，不改变信贷行业固定 FX=15,000 口径。"
      },
      "reason": "new_period"
    },
    {
      "indicator": "cpi",
      "label": "CPI 通胀",
      "confirmed": {
        "period": "26.10",
        "value": 3.23
      },
      "candidate": {
        "indicator": "cpi",
        "label": "CPI 通胀",
        "period": "2026.10",
        "value": 3.23,
        "unit": "% YoY",
        "source": "BPS",
        "source_url": "https://webapi.bps.go.id/download.php?f=AQADB3s1vV0e1xO8VfVkms6NYYKf0o_KJ8LAYlNXrUPZxqygjPgkBJ_m_D2xspdYV7m_KdPnBj6wDdAhfnYmKaOnq4bGG94Mk8mkqXC3isB_oZdb0jumvq-ovUiBSRt_Rqz-4YvpKNiryCa9DQKU-zWI5VWMcYJoNDODA46e7OBeXUXlsJZPHTxn4E9Q6A018TDMbLQtgUi8Zw9vtlxeBBFVlXarP564s1eH-XabsJr8s221mTGtMU2bw8LOVzsCQd-zXITaWiICakE96uBDRgUZhHll80M7Fmvw",
        "released": "2026-11-02",
        "note": "全国 CPI 同比（year-on-year）。"
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
      "detail": "28 official releases parsed"
    }
  }
};
