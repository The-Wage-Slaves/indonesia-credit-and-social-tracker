const CREDIT_SENTIMENT = {
  "schemaVersion": 2,
  "status": "pilot-pending-human-review",
  "asOf": "2026-09-22",
  "cadence": "weekly-complete-weeks",
  "indexDirection": "0=calm; 100=acute attention/fear/event shock",
  "methodology": {
    "name": "Indonesia Digital Credit Fear Index v2",
    "formula": "25% news-density shock + 20% news negativity + 20% social-volume shock + 20% social negativity + 15% verified-event severity",
    "componentWeights": {
      "newsVolume": 0.25,
      "newsTone": 0.2,
      "socialVolume": 0.2,
      "socialNegativity": 0.2,
      "severeEvent": 0.15
    },
    "guardrails": [
      "High news density raises risk even before sentiment is considered.",
      "Confidence is shown separately and never reduces the risk score.",
      "Missing components are excluded and the score is labelled provisional.",
      "Syndicated articles and repeated posts are deduplicated; one event shares one eventId.",
      "Red alerts use independent evidence gates and do not silently modify the score.",
      "Volume uses an 8-week rolling median/MAD after enough reviewed history exists."
    ]
  },
  "sourceCatalog": {
    "google_news": {
      "family": "news",
      "label": "Google News RSS",
      "access": "public"
    },
    "media_rss": {
      "family": "news",
      "label": "Mainstream media RSS",
      "access": "public"
    },
    "gdelt": {
      "family": "news",
      "label": "GDELT volume + tone",
      "access": "public"
    },
    "google_trends": {
      "family": "social",
      "label": "Google Trends attention proxy",
      "access": "public"
    },
    "kaskus": {
      "family": "social",
      "label": "Kaskus hot threads",
      "access": "public"
    },
    "youtube": {
      "family": "social",
      "label": "YouTube videos + comments",
      "access": "api_key"
    },
    "reddit": {
      "family": "social",
      "label": "Reddit r/indonesia",
      "access": "public_or_oauth"
    },
    "x": {
      "family": "social",
      "label": "X recent search",
      "access": "bearer_token"
    }
  },
  "sourceHealth": {
    "google_news": {
      "family": "news",
      "label": "Google News RSS",
      "access": "public",
      "status": "ok",
      "detail": "Collected 290 relevant records/signals."
    },
    "media_rss": {
      "family": "news",
      "label": "Mainstream media RSS",
      "access": "public",
      "status": "ok",
      "detail": "Collected 1 relevant records/signals."
    },
    "gdelt": {
      "family": "news",
      "label": "GDELT volume + tone",
      "access": "public",
      "status": "failed",
      "detail": "'timeline'"
    },
    "google_trends": {
      "family": "social",
      "label": "Google Trends attention proxy",
      "access": "public",
      "status": "ok",
      "detail": "Collected 1 relevant records/signals."
    },
    "kaskus": {
      "family": "social",
      "label": "Kaskus hot threads",
      "access": "public",
      "status": "empty",
      "detail": "Collector ran successfully but found no relevant records."
    },
    "youtube": {
      "family": "social",
      "label": "YouTube videos + comments",
      "access": "api_key",
      "status": "ok",
      "detail": "Collected 482 relevant records/signals."
    },
    "reddit": {
      "family": "social",
      "label": "Reddit r/indonesia",
      "access": "public_or_oauth",
      "status": "failed",
      "detail": "Reddit searches failed: indonesia: HTTP Error 403: Blocked | finansial: HTTP Error 403: Blocked"
    },
    "x": {
      "family": "social",
      "label": "X recent search",
      "access": "bearer_token",
      "status": "unconfigured",
      "detail": "X_BEARER_TOKEN is not configured"
    }
  },
  "latestAlert": {
    "level": "normal",
    "active": [],
    "triggerReasons": [],
    "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
    "reviewCandidates": [],
    "actionableActive": [],
    "notificationLevel": "normal",
    "notificationReasons": [],
    "suppressedCandidateCount": 29,
    "acknowledgedRetained": [
      "kredivo-kredifazz-purworejo-2026-07"
    ],
    "acknowledgedSuppressed": [
      "kredivo-kredifazz-purworejo-2026-07"
    ],
    "pendingHighSeverity": []
  },
  "weeks": [
    {
      "weekStart": "2026-09-07",
      "weekEnd": "2026-09-13",
      "fearIndex": 72.4,
      "dataStatus": "complete",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 70.6,
          "volume": 84.6,
          "negativity": 53.2,
          "itemCount": 106,
          "negativeShare": 4.5,
          "uniqueSources": 57
        },
        "social": {
          "score": 67.1,
          "volume": 85.0,
          "negativity": 49.2,
          "itemCount": 133,
          "negativeShare": 14.0,
          "platformCount": 1,
          "engagementUnits": 185.7
        }
      },
      "components": {
        "newsVolume": 84.6,
        "newsTone": 53.2,
        "socialVolume": 85.0,
        "socialNegativity": 49.2,
        "severeEvent": 92.0
      },
      "articleCount": 106,
      "socialPostCount": 133,
      "uniqueSourceCount": 57,
      "socialPlatformCount": 1,
      "negativeArticleShare": 4.5,
      "negativeSocialShare": 14.0,
      "confidence": 0.725,
      "coverage": {
        "successfulChannels": [
          "google_news",
          "media_rss",
          "google_trends",
          "youtube"
        ],
        "expectedChannels": [
          "google_news",
          "media_rss",
          "gdelt",
          "google_trends",
          "kaskus",
          "youtube",
          "reddit",
          "x"
        ],
        "newsChannels": 2,
        "socialChannels": 2
      },
      "volumeNotes": {
        "news": "Pilot week-on-week ratio: 13.38x; 2/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 186.65x; 2/8 baseline weeks."
      },
      "alert": {
        "level": "amber",
        "active": [],
        "triggerReasons": [],
        "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
        "reviewCandidates": [],
        "actionableActive": [],
        "notificationLevel": "amber",
        "notificationReasons": [],
        "suppressedCandidateCount": 19,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": []
      },
      "events": [
        {
          "id": "auto-2b029ca8ce1ea614",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "6894185c84894d78"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tutur.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hingga Agustus 2026, OJK Hentikan 951 Pinjol Ilegal - Tutur.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2cb7525ec6c8536f",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "a176e133eb0fc2e4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hentikan 951 Pinjol Ilegal hingga Agustus 2026 - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-902ce9f627ea5df6",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "030a5a438831cfd8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hentikan 951 Pinjol Ilegal hingga Agustus 2026 - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a63849ee39012da7",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "0ba15ef6f9538ba2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Link Apk Pingo Pinjaman iOs Aplikasi Android Online 2026, Ini Pengalaman Galbay Teror dan Restukturisasi - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-043802d3c2453ee6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "2ef7fa8cede72f29"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terima Puluhan Ribu Pengaduan, 951 Pinjol Ilegal Ditutup - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3fe1434003271718",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9773d0dee0773ce7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Ilegal Terus Dibabat, 951 Entitas Dihentikan hingga Agustus 2026 - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-42d635defcaae85b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "f988f9ec52221c22"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "video.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK \"Sikat\" 951 Pinjol Ilegal, Ratusan Investasi Bodong Ikut Diburu - video.kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-47f542802eb3f359",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "68b2d1c47c2beb0c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarcirebon.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "700 PPPK Kota Cirebon Diingatkan OJK: Waspada Pinjol Ilegal hingga Judol - radarcirebon.disway.id - Radar Cirebon",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5583840e95a603c1",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "26fdc4d219b1fba4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Setop 951 Pinjol Ilegal, Ratusan Investasi Ilegal Juga Ditindak - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5d886902ed67b040",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "a49154076a74b307"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hindari Pinjol Ilegal, Ini Daftar 94 Pindar yang Resmi Berizin OJK September 2026 - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-67d098399a486696",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "5021546f4d3445bc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas PASTI Stop 951 Entitas Pinjol Ilegal dan 242 Investasi Ilegal per Agustus 2026 - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7c6775938af89ab0",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "23b3445b36569fc3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radartegal.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Asal Klik! Waspadai Jebakan Modus Baru Pinjol Ilegal 2026 yang Bisa Kuras Rekening - radartegal.disway.id - Radartegal.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-870dc57de18d4611",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "92e2c7dfc2ed9d6e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terima 30 Ribu Aduan Sektor Keuangan, Pinjol Ilegal Mendominasi - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c239b58dc831201c",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "32b320b454884ed0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cirebon.inews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cirebon Ingatkan 700 PPPK: Jangan Terjebak Pinjol Ilegal dan Judi Online - iNews.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c2a3e199a22410ca",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "59c2e261b47ac938"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inilah.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "951 Pinjol Ilegal Disetop, Dana Korban Senilai Rp771 Miliar Ikut Diblokir - Inilah.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c40db74390a67475",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "62925b12bb22e41b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "afu.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tutup 951 Pinjol Ilegal, Dana Korban Scam Tembus Rp771,2 Miliar - AFU.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cdff3ab7db0f2aa6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "780c86e0a204cead"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ekbisbanten.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Literasi Keuangan RI 69,57 Persen, OJK Soroti Risiko Pinjol Ilegal - Ekbisbanten",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d98b3779aeab3f21",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "d2d7ffceea8ec617"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritajatim.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sidang Penipuan Pinjaman Digital di Surabaya, Terdakwa Disebut Gunakan Identitas Orang Lain - beritajatim.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fed7924fa192d5d4",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "f72eed9299bfd289"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Setop 951 Pinjol Ilegal - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-131f025105c6d15e",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "7c0db5e3b96ed83e",
            "a447dc57ca2d059c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sebut 7 Pinjol Belum Penuhi Kewajiban Ekuitas Minimum - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24425cbef2d6b2cd",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "47aa89c55f15fbaf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pinjol Tembus Rp105,63 Triliun, AFPI Peringatkan Risiko Gagal Bayar Makin Besar - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9e24bbd9b188830e",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "a3bd559b76a3c183"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bos AFPI Sebut Pelemahan Daya Beli Jadi Salah Satu Penyebab TWP90 Pindar Tembus 4,32% - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe1963100acf77b8",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "dc8794041e0ff338"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Daring Tembus Rp 105,63 Triliun, TWP90 Naik Menjadi 4,32 Persen - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-03e1beddaf45cc44",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bd46fbbe3ec80385"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapet buat bayar kebutuhan sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-040514045b757693",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2e3e75472df82abd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "aku mau kak buat kebutuhan 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-07662d5660d3b6e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6cf0a0c4122a92e6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pikir fitur baru bener, gak taunya dana isntan😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-086e12447d0c0012",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "858b36d17e7091b1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "tolong bantuan nya bang buat makan🙏😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08d22621d573913f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fcd23e3675a38eff"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi catat mayoritas peminjam modal usaha Kredivo adalah pelaku mikro - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-091025a1356911a5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2cb54f4d177a062b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "linggaupos.bacakoran.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KreditBahanBangunandiTokoAnugerahDewiBunga0Persen - https://linggaupos.bacakoran.co/ - Baca Koran Linggau Pos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0a5420ee3f47b867",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "35b3e066f9e63a3b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aku sering di tolak pinjam aja\nMungkin aku kurang keren kali ya 😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0b6c4c4e2731373e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f49bb438c8912ad7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tak Hanya Gaya Hidup, PayLater Banyak Dipakai Buat Kebutuhan Mendesak - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0bb3ffe6e16ed282",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7efeb32a67978676"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat kebutuhan dapur",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0be77de3961759af",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "28611c99e0d5acbb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Warga RI Tembus Rp105,6 T, Kredit Macet Naik Jadi 4,32% - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c24bb1e61829081",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c3950fe33627bbe1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah kakak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-118529a3c4a58b9d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5ebe43a88b29d796"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yogya hadit...buat kebutuhan beli sembako mas...makasih 🥺",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-11fe94b0823481d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "feb37e036fc0d14b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Riset Kredivo, Paylater Produktif Digunakan untuk Modal Kerja, Biaya Sekolah hingga Renovasi Rumah - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1245438ada88e534",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "95beaca28a490120"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makasih infonya bang. Semoga bisa membantu saya 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-155595a86f7feb09",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ead2c03e02fd933d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantab bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-18095f29f95b2fd9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ecf0dc9fa9da69e1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Desy Bongkar Dana Asing Rp17,28 T di Pinjol, Pemerintah Diminta Segera Bertindak #shorts #viralvideo",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-189d76411e3df7c2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "724120bacff5f221"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah kak,semoga dapat yaa dana kagetnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-19209190bac27bf4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9fc30a57faae42bc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah..\n\nSemoga pagi ini dapat rejeki buat bekel anak sekolah 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-19a3de4576b8168c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7049ef3f451cb920"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya di dana goal tidak ada buat pinjaman",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-19c94d5fa1653e69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "737baff885ed0b08"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Mobil dan Motor Makin Susah, Perusahaan Pembiayaan Makin Selektif Beri Utang - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a0d05bbdeda60be",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "765588a9c449b037"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Liat d ulasan nya aja hancur😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a12383c1d7dbc68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1d9343d226da42b8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pingin saldo dana gratisnya bang buat kebutuhan sehari-hari \nSemoga dapet dan untuk Abang semoga sukses selalu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ad3f1bcef2c6638",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8e7011235fe3f3b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1b3b4d103fc6b2e8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7ee50bac170b54dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat selalu bg semoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1cbbbfcb4d7bd509",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eab61c88613be87f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah mudah2n aja ada rejekinya.Ammin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d15ca59f32534d6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "92702693098299e7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "timesindonesia.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar Tembus Rp105,63 Triliun, OJK Soroti Risiko dan Permodalan - TIMES Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d6debc77a404f19",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6466d4284e783e8a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang,buat kebutuhan keluarga.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d7f443c29b56dd2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f22147dea2beaae7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Seandainya saja tau tau udah ada dana masuk aku belikan keinginan ibukku terutama",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d90bbe129941041",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d3023ad9b92095ea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjam DANA TANPA Dana Paylater Dana Cicil, Cara Pinjam Uang di Dana, Pinjol Mudah Cair 2026 ke DANA",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d9c1dc804ebe468",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "eaa7f508bd621024"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "databoks.katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Masyarakat Indonesia Naik Jadi Rp105,63 Triliun pada Juli 2026 - Databoks Katadata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ddcfd400591aa26",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "21f26d5964c39ac7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat bos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1df1b3858370608a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2c317e976e7d87ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga tmbah lancar n sukses slalu bang 🤲🤲🤲🙏🙏🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1e3a1f9d71605b95",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "48dbcc452982adfc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insight.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bunga Ultra Mikro Makin Murah, Pindar Cari Ruang Baru - KONTAN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ecf70d958ea8f7c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "642dd4574c5a2c94"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sukses slalu bang,butuh buat biaya skolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1f9d5348f7022df0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "137b0f1879be183a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabarindo.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "54% Kredit Digunakan Masyarakat untuk Kebutuhan Produktif - Kabarindo.com - Kabarindo.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1fca027101ec813a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "838dfd3b1fb489cb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, komen saja mau dana kaget buat kebutuhan harian apa sekarang 👇 https://link.dana.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-20d8c69c0ed68ff2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2dfcc7e59e53815b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediacirebon.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cirebon Ingatkan PPPK Terjerat Pinjol dan Investasi Bodong - Media Cirebon",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-21208b9aeefb0124",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1c410daebb04840e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater Kredivo Makin Banyak Dipakai untuk Modal Usaha, Naik 15 Kali Lipat - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-23aef4fcbb727020",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3538629cd2da5444"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir... aku butuh untuk kebutuhan bulanan 🙏🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24e408a096c242e1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "251b1e0810a06f6e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2d50320ac3f7fb1c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d0610c5fd1d3bf71"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bikin konten harus bertanggungjawab  cuman bisa y bohongin penonton",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2ef18cf7963ff82a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3fb50efb2505edf3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PayLater Tak Lagi Cuma Buat Belanja, Digunakan untuk Modal Usaha Mikro - Katadata.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f475308b661ecd4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "09eae851ac109ea3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya minta dana buat bayar kontrakan udah 3 bulan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f8ee74d296be409",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6ed03a2b9224348c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat bantu adek saya yang mau lahiran",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-302888828b112c75",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2c8126ad34fb4c74"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insight.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemanfaatan Paylater Perbankan Masih Semarak - KONTAN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3120df8263418600",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1b40d43cc6a3d252"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peminjam Modal Usaha Kredivo Adalah Pelaku Mikro - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-34f5f21ecc93894c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "91e4a2a5c19bc465"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapet rezeki dari si Abang buat kluarga🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-352218e3188e943f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ce212d8a83a128a2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "dailysocial.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Akulaku files for HK IPO 🏦. Bumame lands Japan-backed funding 💉. Global VC hits $227B but narrows to mega-deals 📉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3532bd2501093118",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca337303c7403636"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat untuk lunasi utang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-358752d231852d29",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "28d6046be7f31778"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PT Inovasi Terdepan Nusantara Pinjol Apa Saja, Aplikasi Apa selain Kredione? Ini Alamat dan Call Center Kantor - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35b39e8b66118d55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c19a015ce8ff0e5a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Warga RI Tembus Rp105 Triliun, Kredit Macet Ikut Naik - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-38b0bf556fca4bf7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1f8e0c780112304a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Malam bosku, mantab nih edukasinya, sangat super sekali",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ae9f1d89ad6bb19",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ee3c2c27bcf939b9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "viva.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto Tutup Kredivo Nggak Pakai Drama, Begini Langkah Resminya - VIVA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d2e12a2fff47280",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0cfaa8b2f1e55ce8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap abangku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d80ff8c95bf61f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a4573b71ab6320e7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Risko Kredit Macet Pinjol Indonesia Semakin Tinggi saat Pembiayaan Melonjak - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3e2a5de31021d08b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "375a7dc06d15fe4c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarbanjarmasin.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Konsumtif karena Platform Pinjaman Digital - Radar Banjarmasin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4215bea8f263f355",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "944ad2ee30050d9d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sering Terganggu Ditawari Pinjol? Ini 3 Cara Blokir Nomor Spam - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-422621f870049d9b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2eb07bd97a19ade9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-42ef387644169ee9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1158c85b17f0a240"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Subhanallah sangat membantu sekali",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45b89bb502762339",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7b29bd4d2c83fb1e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-475803ab45bba8af",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ad01d4cd33eb4cee"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapet dana kaget. \nbuat bayar hutang kak😔",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4840ff9361985cfb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "af722177ee83918a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Salfok sama rambutnya kak, beda sama biasanya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48d4c518be3ad62b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "632862d3a07c5aa5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bng semoga dapat rejeki buat keluarga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49a70b76dddabee8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e0bbdbd742184e31"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Klaim NPF Masih di Bawah 5 Persen, Ini Cara Jaga Kredit Tetap Sehat - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49aa3c45687ae2ef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bd1270da78f2e774"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rctiplus.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "4 Fakta Utang Pinjol Warga Indonesia Rp105,6 Triliun - RCTI+",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49f8629faa1dc933",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "12438d2ad994aae6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4babc37d03da56ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e26a073a0fb95ebc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sukses selalu abg ku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4ef6bd027e57d3e3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ad13fbc1b36ada5e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-51115989bc98d81a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7ca73129b15bdc2a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "TWP 90 Pindar Naik Jadi 4,32 Persen, AFPI Ungkap Biang Keroknya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-563c664bb8b7c68b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "637ee7875c8fb447"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Macet Pindar Naik Jadi 4,32 Persen, Daya Beli Masyarakat Ikut Melemah? - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-568d928e5422c1c8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "396dcfadd416d30a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "waspada.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pinjol Tembus Rp105 Triliun, Naik 24,76% - waspada.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-584f2102d9efef8a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dd8ee5711e097743"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum mba mel saya ,blm byr hutang bank udah telat 3 hari mohon doanya semoga Allah mudahkan untuk membayarnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-596592a956dca27b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4f82a04756f99664"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pngin dana kget bang. Buat beli susu anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-597eb8f6a0def1fa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5edcf4930614393f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat ka \nBuat bnerin hp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59a1ac4d66516544",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "55a7c9aee8d43422"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ALHAMDULILLAH CAER BANG YG INGIN MELEPASKAN JERATAN HUTANG & DATABUSUK GASNMRDIPP AKUPANDU🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59f67e844402b6cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f719e97fca8d5784"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kisah Nyata Mbak Devi Solo: Utang Pinjol 250 Juta &amp; Terancam Hancur, Selamat Lewat Sholawat Adrikni!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5bb290eedc9250ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e4c016c0fa0762fa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tanpa BI CHECKING?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5c7b21b41337427f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8e8bb58a08c1012f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang buat beli beras susu anak dan kebutuhan lain",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5d8fc9f0c97cae65",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3e9a8d344e2b3c74"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah smg dapat,buat nebus obat istri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5f2f198565873746",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ec2b00929115f688"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lifestyle.sindonews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kemudahan Mewujudkan Liburan Melalui Layanan Paylater - SINDOnews Lifestyle",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6034d053d4eccb85",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8a8baa61b8d2751b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang kalo pinjam didana, apakah bisa menagih dirumah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-60d35c3bec11b883",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7a9c3af5e331c49e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "RIBA 😅😅😅😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-654093f5a3ba6314",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2944bf58731774dc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah Buat Bantu Orang tua😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-66df4b43a8428984",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cdfd4b473971a997"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Resmi OJK September 2026 Terbaru, Jangan Sampai Salah Pilih - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-67b3436115845b87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "44d561a225cc9e8d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Riset UI: Mayoritas Kredit Digital Bukan Buat Konsumtif - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-68e0844f4b7ceddd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4c7fdfd18eccdf98"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Warga RI Tembus Rp105,63 Triliun, Naik 24,76 Persen - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6afcf968177fda6d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "05d0442c4d842c2f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "timesindonesia.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Bisa Jadi Alternatif Modal UMKM, Akademisi: Perhatikan Legalitas dan Bunganya - TIMES Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d674c5d4abc5b63",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "38fd1932fa046f2b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Masyarakat Masih Enggan Pakai Asuransi Kredit Pinjol, Harga Premi Dinilai Kemahalan - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6dafdf0ceac8c314",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8929fa394ef5809b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Absen min, saya butuh untuk membetulkan asbes rumah saya yang jebol karna tikus😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6df105e9a1c99b4e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aeb4edbad7e52321"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "AZAB PENJUAL TAHU TEK CULAS NEKAD JUALAN PAKAI HASIL PINJOL DEMI GENGSI || ANIMASI AZAB",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6ed0d19c6424d5b7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "85d2f9c28c6c490b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "caranya gmna nhi kk..lgi butuh dana nhi..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-71ab4df409b3e9f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f27ebe82436bb8fb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Daftar Pinjol Resmi OJK September 2026 Terbaru, Jangan Sampai Salah Pilih - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7444d75776f93730",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "747dcc219487ca55"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Paylater Kredivo Makin Banyak Dipakai untuk Modal Usaha, Naik 15 Kali Lipat Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-747eaf9f6d995541",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fcab2ca8b1857614"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gadget.qoo10.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "54,3% Kredit Digital Kredivo pada 2025 Dipakai untuk Kebutuhan Produktif - Qoo Media",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7539136796e5fda4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "64d1f3b186f08d17",
            "74460c2468547140",
            "5dd030ab18b4e39c",
            "d93e017799996c4b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-75ae317bd2123a32",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8847c82d4ed1c0dd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pinjol Tembus Rp105,63 T Juli 2026, Naik 24,76% - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-768e93d8a930ecce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4af05dee35e553f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semogaa yaahh aminnn😇",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-76c55a7c6730e55b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "49e4b55e4a6b4953"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga beruntung bang😇",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7743d76d676bfe90",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d128353a03932b40"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tapi kalau kita mau",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-776e3339a0e8f113",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4cdc26775b721f0e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Untuk ibuk sedang sakit bang..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7770eb8e8f7c4eef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "725de7cdcc09cc9a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7afc3e398c9e4202",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ffa0eba0acaa07e8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bang,mau banget buat beli sepatu udah 2 tahun belum ganti",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7c3db4e6a8bdfc80",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ed6f64c56607aee6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sukses selalu bang,semoga dapat 🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7faa29abcb3ec557",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8e2859ebd6d49ff1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Apk Pinjam Sinar iOs Android Sfile Download Login Aplikasi Pinjol 2026, Apakah OJK? Ini Pengalaman Tidak Bayar - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-80d17fa4e7db9ace",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7557b5d3dfc345f5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir abangku....aku butuh buat modal usaha ...semoga rezeki nya lancar ya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-83fb933240d1a192",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5fbf2967ef51f883"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Warga RI Makin Doyan Utang di Pindar, Ini Buktinya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8541c0ab0dcd0473",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b239b8c2e01087ef"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8827a806358ab524",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2a8a33cbdf43c768"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "memorandum.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sales HP Kuras Limit Kredivo Rp40 Juta Berakhir Jadi Pesakitan, Begini Modusnya - memorandum.disway.id - Memorandum.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a6be5394529d6a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1511a62e25614e1c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "fr.tradingview.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Produktif Kredivo Meningkat, Pengguna Kredit Modal Usaha Naik 15 Kali Lipat - TradingView",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8ad6313d5ae881d3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1a67fe089392ec5b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mauu bangettt om buat bayar kurang SPP sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8b4f0617b9f1f8f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "78eb0a3afa6140d5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "surabaya.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Modus Garansi HP, Sales di Surabaya Gasak Limit Kredivo Korban Capai Puluhan Juta Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c7bc4ee72cb3f9a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "10a90cdc11aa3077"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "hukumonline.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ketika Penegakan Hukum Persaingan Usaha Berhadapan dengan Kepentingan Inklusi Keuangan: Studi Kasus Kartel Bunga Pindar - Hukumonline",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8f4a2273a055859f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e8afdaa62f31398a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat amin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8f4f9cce1c26a8f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f776a95ed78cf963"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Catat Porsi Kredit Produktif Tembus 54,3%, Kontribusi ke PDB Capai Rp 33 Triliun - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8f5086fd06340fab",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2110353c37bff4dc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Waspada Akun Palsu Mengatasnamakan Kredit Pintar, Simak Cirinya - kreditpintar.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8fa48500a7c91ecf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "154daafa2a9e522f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Online Warga RI Makin Banyak, Tembus Rp 105 Triliun - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-903aaaca23753a28",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6a721392f63ee79e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "viva.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pindar Naik 24,76 Persen pada Juli 2026, Nilainya Tembus Rp105,63 Triliun - VIVA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-94897bdb6d4bae98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "69aefad38e6490e2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97610472146ed823",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "694669cd708482ff"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "topik.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek NIK Dicatut Pinjol, Waspada Dana Disalahgunakan Pelaku untuk Judol - topik.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-980710e68289cf1b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "11d14f1570fc25a5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rctiplus.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kemudahan Mewujudkan Liburan Melalui Layanan Paylater - RCTI+",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9863b495d786a41e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d8625fc5a85c62be"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kedaipena.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Candu Pinjol, Ekonom Sentil Friderica Widyasari: OJK Jangan Hanya Jadi Pengawas di Atas Kertas - Kedai Pena",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-987f4c58a65bd980",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "04b8d4d59b0944ac"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Keren Hans gw udh subrek tapi jangan judi online di dunia nyata ya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9d2a498d53062cae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "589b17d424ab7ee7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "surabaya.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Modus Garansi HP, Sales di Surabaya Gasak Limit Kredivo Korban Capai Puluhan Juta - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ea0bb56a2f13479",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "750929f72e79d668"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang kalo sudah pernah pinjam di pinjam lain apakah masih bisa bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1324d0b8faa6cf6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d8fba54b61a1f19c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bissmilah bang buat kebutuhan anak ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1dd395c19f3a1f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d447b3f314d14ae1",
            "ec8b1cccc9ec64ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a2077c9555bfeb61",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2c0be31ff2586a28"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "analisapublik.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Modus “identity theft”, Ilham Bobol Data Kredivo Pelanggan - Analisa Publik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a2c6befd9f888363",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "09a6b0269a9a664d",
            "8cea39bce6f15f28",
            "4e5e8bae5d7ff9b1",
            "ed0bd56ce5aea709",
            "74d8703034702eb3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇 \n\nALTERN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a3c0b154fe5e2932",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "619272f27f081636"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gara gara pinjol #shorts #drama",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a521018861b93377",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a6d073897854a294"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar 1045 Pinjol Legal dan Ilegal Terbaru September 2026 - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a58ec8a3289206f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9009d9eea31b900b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semua aplikasi itu sudah saya coba bang, tapi smuanya di tolak 🥺",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a664a1fa505ec925",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fc4ab0a8be21eee8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udh semua mas TPI gx di ACC jga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a67684be53d24bfe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "13840e20bcdd9101"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater Bank vs Fintech Makin Sengit, Kredivo Ungkap Keunggulannya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a6c528d96eb251a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ef81ccf77576f11d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudahan dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a76bf3519ed0674e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4e69023ed2b4f419"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "databoks.katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Rasio Kredit Macet Pinjol di Indonesia Naik pada Juli 2026 | Pusat Data Ekonomi dan Bisnis Indonesia | Databoks - Databoks Katadata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a812ea6cf9341cb3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "86585bf172860352"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat kbutuhan untuk kuliah \nSemoga beruntung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a85556e7d7b2081d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "80108510ced6941e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah MBK....hutang2ku sudah lunas BLN ini.Allah maha besar ❤ trimakasih ilmunya 🥰",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aa4120cfd0fc64ee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f40f916b7a443e03"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga Rezeki Ngalir",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aa5824c4cb399c43",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "338e3088e2082ec0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Pinjaman Online Warga RI Makin Banyak, Tembus Rp 105 Triliun - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aaa9539c61e02520",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "185dbed65127e513"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terbaik 🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-accb0a2a61bcc5ba",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "12803417b037a65b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah untuk anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-accd0136e607f53d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dbdb2c86d198991b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang cara menyambungkan saldo digital nya gimnana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-add1ec730f1072b2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1279efec9247c117"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet bang buat kebutuhan sehari hari sukses terus konten\" nya bang amin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ae04350975655d9d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "557faf15af569b16"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Smoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-af51774ce520cbf5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e0136d563d59e038"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sangat membantu sekali kak semangat trus ngonten nya💪💪",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-afbeb1f8b8e9f413",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f32c28a6ae39fd12"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "susah bang kredit skor masih rendah ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b0a06c60df331d7e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cbea2d2a36fa0427",
            "a7f90839c1f53ae3",
            "74e883e6719566cc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga menang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b42220c823b3d188",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9bcfb1ed0761fdc3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Warga Indonesia Naik 25,7%, Tembus Rp 105 Triliun - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b52321e37d8d8291",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d89e78a1068dd111",
            "b581d9f662325ca5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b77d61f520396742",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "25beef7af170dbd4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kenapa NIK Lebih Gampang Diberikan ke Pinjol daripada ke Sensus? - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b80f9763cf5edbc7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3ac967167e6e5255"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar 94 Pinjol Resmi OJK September 2026, Cek Sebelum Ajukan Pinjaman - MetroTVNews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b85fa8ccfe60469d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "88dafa76feb8d8ab"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Aksi Kredivo Perkuat Akses Kredit Hingga Dampak Sosial-Ekonomi - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b86987b5eb35ea87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9d9b42b34ec17b4c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat buat bekal sebelum gajian",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b9684faa92e4bda5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a49f27aa4eda35a2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sukses bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b9cc80ae3f65fc96",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "aaeffc2e1a81c36b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritajatim.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terima 30 Ribu Pengaduan Keuangan Ilegal, Didominasi Pinjol Abal-Abal - beritajatim.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c029137edb96d076",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5dd9818f2c760ed2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kunci Ketenangan Berkendara Adalah Memilih Asuransi Kendaraan Praktis Tanpa Repot - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c0b5df1d1ca881c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2df0bd9428d98852"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Catat 54% Pembiayaan Disalurkan untuk Kebutuhan Produktif - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c13a1f2dfe583b70",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3f0de11e9c8861bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "5 Pinjaman Online Bunga Rendah Yang Mudah Cair 2026 | PINJOL BARU LANGSUNG CAIR ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c22f6c5ad798fd51",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6fa1351a7709d31c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Risiko Pinjol Hanya Modal KTP, Ini Penjelasan Bahayanya dan Cara Cek NIK Disalahgunakan - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c380509f143aceda",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9158263fec324420"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Ungkap Penyaluran Kredit Usaha Melonjak 15 Kali Lipat - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c45f72a0cc7e17ba",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "43d3026f9f2a7776"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c4ce822201aa25ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "855ca19e1b2b1b6c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "buat nyelot..pasti dong saya donlot pinjol...cari lagi ah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c56326dcc516effe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f33a1075978ef7fb",
            "3c9efeeceb123281"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ca1177e5e3cfca63",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "38dd8912f47fde20"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga beruntung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ca2c0ec706921bf7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f5a9a07390407328"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum ka mell\nSaya juga sama punya hutang 150juta\nLG coba jalur langit \nHampir 6bln ini LG coba rutinin sholat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ca5120e68355245f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c60fb2c6e141b3e9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "law-justice.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Rp105,63 Triliun, Ekonom Berikan Kritik Keras pada OJK - law-justice.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce55a2d6dca0cf27",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5201ae0323dfdfa2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah bosskuhhh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce8da268e8f9677a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "067d6f87e0fa481f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah \nBuat biaya adik sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0b53ff66c649d1e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "877ede3f3d7a54c7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jelek videonya mendingan kayak saya punya berotot kayak bumi ini bos senggol dong 21 cuma aku saja yang berotot nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d153a0285b77d175",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "34cf298a6d96fecc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya barusan tak coba GK keluar limit nya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d337e61859745950",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9c047ef6a1b21ca3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat dari admin aja,,,,mau pinjol tapi taklut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d3745a07a5989861",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "614751427e9a7345"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Emang benar bg boleh dong kalau gitu untuk kebutuhan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d4ded2680d26b070",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f7b4fc8a8e6e5b31"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "realita.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Warga Indonesia Tembus Rp105,63 Triliun - realita.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d54fd713156e5318",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4dfb4a0d0538198f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Min bertanya..bank permata dan bank permata uus itu sma tdak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d60e1ee7ee7d8751",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "196670773d0ce83f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Amin semoga dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d8285fcc02184ca6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f559851341c25929"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Itu kayak nya cara untuk membayar otomatis ketika apk yang di kaitkan meminta pembayaran,,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d88a9fb1a80e402f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2e8db3ee034b8cd2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, mau daget buat kebutuhan darurat apa nih 👇 https://link.dana.id/danakaget?c=snxzhvh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d91f1f8ae725e94d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f30f404c03cbfadc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar 94 Pinjol Legal Resmi OJK Terbaru 2026, Cek Sebelum Ajukan Pinjaman - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dad0ee4cde7b8878",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e10ab0460c5ef6fa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makasih bos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dbd21f29eafb9637",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "11f71b125a82fd67"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat bismillah buat modal bensin kerja selama seminggu kedepan aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dcb1f8f5445f73dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a0c73a29709de2e8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ok bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e293193fb408d302",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7b007ab0001c30eb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "megapolitan.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Apple resmi perkenalkan earphone terbaru AirPods 5 - ANTARA News Megapolitan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e4bd233d0e025582",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7b916e420041ed1d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih bang infonya..semoga bermanfaat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e5255de2afd99480",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5b6cdcd3a0fea9fb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Ungkap Tren Paylater untuk Modal Usaha Makin Meningkat - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e545c83af21d02dd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "828c066a27d49fbc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga bermanfaat bagi saya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e558ae9a5d92773e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bb1ecab448d5c79f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Baru lihat mudah mudah bisa membantu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ecd80a60ef85c0d4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7ce14e090546bcbf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Indonesia Women Fest Kembali Hadir pada 2027, Saatnya Tandai Kalender! - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed971faa863df01c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6688f6c95fb832f4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet yallah lagi butuh banget buat bayar hutang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee57dc6e3d20caa4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1bf0ec9d143b3daa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaragarut.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Utang Masyarakat di Pinjol Capai Rp 105,63 Triliun Juli 2026 - SuaraGarut.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef89e16403e5b9c2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7607d59ff47f0c33"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dongkrak PDB Rp33 Triliun, Kredivo Buktikan Peran Pembiayaan Gerakkan Ekonomi - iNews.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f004b55e0c0ac1c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2895342086240b46"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TANPA BI CECKING! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f77f0c87b796428d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dd7673f1b1a2e1b6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir om,tolong dibantu untuk kebutuhan hari2",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f78f6990cf19548b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ded9b886b0ba969b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "\"Pelajaran yang bisa kita ambil dari video ini adalah janganlah sesekali mencoba judi,walaupun sekali doang,karena judi ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe025e7fa02db6ac",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bd2fb2a4bf8eeac1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kanapa saya slalu di tolak ya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe5cca383750f71c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8cb25e9627d9bf58"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "validnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Ungkap Biang Kerok Kredit Macet Industri Pindar Naik Jadi 4,32% - Validnews.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe9148aec62e7e38",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "286ec5accf36c935"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarapembaharuan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Presiden Prabowo Diminta Kaji Ulang Perampasan Lahan Perkebunan Sawit Oleh Satgas PKH Dengan Dalih Kawasan Hutan Lindung - Suara Pembaharuan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "pindar-tadpole-practice-2026-07",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "31584fe90a9c7131",
            "7928fed3e9737aca",
            "7f50cef3c09ec6aa",
            "5997577760101d3b",
            "e9b75ca3f02d73ed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 4,
          "domains": [
            "finansial.bisnis.com",
            "infobanknews.com",
            "investor.id",
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Skema Tadpole Pindar Dinilai Perlu Perhatikan Perlindungan Konsumen - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-228af539d49d7536",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "4221aee227193a7e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Warga RI Makin Gemuk, Pinjol Tumbuh 24,76% hingga Tembus Rp105,63 Triliun - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9d2046a7b8ee9e84",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "db700f71c4ce25a3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pinjol Tumbuh 24,76% Jadi Rp105,63 Triliun - Media Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "ce212d8a83a128a2",
        "694669cd708482ff",
        "f30f404c03cbfadc",
        "31584fe90a9c7131",
        "6894185c84894d78",
        "6a721392f63ee79e",
        "8847c82d4ed1c0dd",
        "db700f71c4ce25a3",
        "a176e133eb0fc2e4",
        "7c0db5e3b96ed83e",
        "a447dc57ca2d059c",
        "f72eed9299bfd289",
        "26fdc4d219b1fba4",
        "2ef7fa8cede72f29",
        "62925b12bb22e41b",
        "92702693098299e7",
        "28611c99e0d5acbb",
        "a4573b71ab6320e7",
        "7928fed3e9737aca",
        "7f50cef3c09ec6aa",
        "5997577760101d3b",
        "c19a015ce8ff0e5a",
        "4221aee227193a7e",
        "5fbf2967ef51f883",
        "137b0f1879be183a",
        "59c2e261b47ac938",
        "ee3c2c27bcf939b9",
        "11d14f1570fc25a5",
        "f988f9ec52221c22",
        "1bf0ec9d143b3daa",
        "030a5a438831cfd8",
        "92e2c7dfc2ed9d6e",
        "28d6046be7f31778",
        "396dcfadd416d30a",
        "dc8794041e0ff338",
        "154daafa2a9e522f",
        "9773d0dee0773ce7",
        "4e69023ed2b4f419",
        "5021546f4d3445bc",
        "d2d7ffceea8ec617",
        "e9b75ca3f02d73ed",
        "eaa7f508bd621024",
        "9bcfb1ed0761fdc3",
        "4c7fdfd18eccdf98",
        "338e3088e2082ec0",
        "2110353c37bff4dc",
        "a6d073897854a294",
        "3ac967167e6e5255",
        "cdfd4b473971a997",
        "f27ebe82436bb8fb",
        "ec2b00929115f688",
        "2df0bd9428d98852",
        "780c86e0a204cead",
        "2c0be31ff2586a28",
        "aaeffc2e1a81c36b",
        "05d0442c4d842c2f",
        "6fa1351a7709d31c",
        "7b007ab0001c30eb",
        "a3bd559b76a3c183",
        "747dcc219487ca55",
        "a49154076a74b307",
        "25beef7af170dbd4",
        "637ee7875c8fb447",
        "737baff885ed0b08",
        "2cb54f4d177a062b",
        "f776a95ed78cf963",
        "e0bbdbd742184e31",
        "9158263fec324420",
        "5b6cdcd3a0fea9fb",
        "0ba15ef6f9538ba2",
        "38fd1932fa046f2b",
        "3fb50efb2505edf3",
        "13840e20bcdd9101",
        "1c410daebb04840e",
        "2c8126ad34fb4c74",
        "47aa89c55f15fbaf",
        "1b40d43cc6a3d252",
        "feb37e036fc0d14b",
        "44d561a225cc9e8d",
        "fcd23e3675a38eff",
        "f49bb438c8912ad7",
        "fcab2ca8b1857614",
        "8cb25e9627d9bf58",
        "88dafa76feb8d8ab",
        "78eb0a3afa6140d5",
        "7ce14e090546bcbf",
        "1511a62e25614e1c",
        "589b17d424ab7ee7",
        "2a8a33cbdf43c768",
        "7ca73129b15bdc2a",
        "8e2859ebd6d49ff1",
        "48dbcc452982adfc",
        "d8625fc5a85c62be",
        "7607d59ff47f0c33",
        "10a90cdc11aa3077",
        "5dd9818f2c760ed2",
        "32b320b454884ed0",
        "2dfcc7e59e53815b",
        "286ec5accf36c935",
        "944ad2ee30050d9d",
        "c60fb2c6e141b3e9",
        "bd1270da78f2e774",
        "68b2d1c47c2beb0c",
        "23b3445b36569fc3",
        "375a7dc06d15fe4c",
        "f7b4fc8a8e6e5b31"
      ],
      "socialItemIds": [
        "251b1e0810a06f6e",
        "91e4a2a5c19bc465",
        "632862d3a07c5aa5",
        "4dfb4a0d0538198f",
        "64d1f3b186f08d17",
        "74460c2468547140",
        "5dd030ab18b4e39c",
        "ffa0eba0acaa07e8",
        "725de7cdcc09cc9a",
        "6466d4284e783e8a",
        "1f8e0c780112304a",
        "d93e017799996c4b",
        "12438d2ad994aae6",
        "e8afdaa62f31398a",
        "21f26d5964c39ac7",
        "9c047ef6a1b21ca3",
        "69aefad38e6490e2",
        "cbea2d2a36fa0427",
        "a7f90839c1f53ae3",
        "2895342086240b46",
        "dd7673f1b1a2e1b6",
        "e26a073a0fb95ebc",
        "750929f72e79d668",
        "09eae851ac109ea3",
        "f33a1075978ef7fb",
        "ad13fbc1b36ada5e",
        "ead2c03e02fd933d",
        "0cfaa8b2f1e55ce8",
        "d89e78a1068dd111",
        "b581d9f662325ca5",
        "2e8db3ee034b8cd2",
        "09a6b0269a9a664d",
        "43d3026f9f2a7776",
        "185dbed65127e513",
        "12803417b037a65b",
        "1a67fe089392ec5b",
        "828c066a27d49fbc",
        "2c317e976e7d87ce",
        "4af05dee35e553f8",
        "ed6f64c56607aee6",
        "3f0de11e9c8861bb",
        "196670773d0ce83f",
        "dbdb2c86d198991b",
        "5201ae0323dfdfa2",
        "c3950fe33627bbe1",
        "86585bf172860352",
        "619272f27f081636",
        "8e8bb58a08c1012f",
        "e10ab0460c5ef6fa",
        "95beaca28a490120",
        "af722177ee83918a",
        "e0136d563d59e038",
        "7049ef3f451cb920",
        "2eb07bd97a19ade9",
        "f40f916b7a443e03",
        "9009d9eea31b900b",
        "557faf15af569b16",
        "1158c85b17f0a240",
        "a49f27aa4eda35a2",
        "8e7011235fe3f3b5",
        "2e3e75472df82abd",
        "855ca19e1b2b1b6c",
        "f32c28a6ae39fd12",
        "858b36d17e7091b1",
        "55a7c9aee8d43422",
        "8929fa394ef5809b",
        "35b3e066f9e63a3b",
        "80108510ced6941e",
        "f5a9a07390407328",
        "8a8baa61b8d2751b",
        "ecf0dc9fa9da69e1",
        "f559851341c25929",
        "877ede3f3d7a54c7",
        "bd2fb2a4bf8eeac1",
        "f719e97fca8d5784",
        "765588a9c449b037",
        "7ee50bac170b54dd",
        "d128353a03932b40",
        "fc4ab0a8be21eee8",
        "4cdc26775b721f0e",
        "d447b3f314d14ae1",
        "85d2f9c28c6c490b",
        "ded9b886b0ba969b",
        "aeb4edbad7e52321",
        "dd8ee5711e097743",
        "d0610c5fd1d3bf71",
        "b239b8c2e01087ef",
        "067d6f87e0fa481f",
        "d8fba54b61a1f19c",
        "3c9efeeceb123281",
        "838dfd3b1fb489cb",
        "8cea39bce6f15f28",
        "a0c73a29709de2e8",
        "1d9343d226da42b8",
        "4f82a04756f99664",
        "34cf298a6d96fecc",
        "f22147dea2beaae7",
        "7b916e420041ed1d",
        "ec8b1cccc9ec64ed",
        "bb1ecab448d5c79f",
        "2944bf58731774dc",
        "eab61c88613be87f",
        "6ed03a2b9224348c",
        "724120bacff5f221",
        "38dd8912f47fde20",
        "49e4b55e4a6b4953",
        "9d9b42b34ec17b4c",
        "6688f6c95fb832f4",
        "3e9a8d344e2b3c74",
        "9fc30a57faae42bc",
        "7efeb32a67978676",
        "614751427e9a7345",
        "7557b5d3dfc345f5",
        "3538629cd2da5444",
        "04b8d4d59b0944ac",
        "4e5e8bae5d7ff9b1",
        "ed0bd56ce5aea709",
        "74d8703034702eb3",
        "ef81ccf77576f11d",
        "6cf0a0c4122a92e6",
        "d3023ad9b92095ea",
        "7a9c3af5e331c49e",
        "7b29bd4d2c83fb1e",
        "11f71b125a82fd67",
        "5edcf4930614393f",
        "ca337303c7403636",
        "1279efec9247c117",
        "74e883e6719566cc",
        "642dd4574c5a2c94",
        "e4c016c0fa0762fa",
        "5ebe43a88b29d796",
        "bd46fbbe3ec80385",
        "ad01d4cd33eb4cee"
      ],
      "_newsVolumeRaw": 106,
      "_socialVolumeRaw": 185.7
    },
    {
      "weekStart": "2026-09-14",
      "weekEnd": "2026-09-20",
      "fearIndex": 60.6,
      "dataStatus": "complete",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 53.9,
          "volume": 53.4,
          "negativity": 54.5,
          "itemCount": 117,
          "negativeShare": 10.5,
          "uniqueSources": 73
        },
        "social": {
          "score": 56.2,
          "volume": 57.3,
          "negativity": 55.2,
          "itemCount": 217,
          "negativeShare": 17.2,
          "platformCount": 1,
          "engagementUnits": 276.2
        }
      },
      "components": {
        "newsVolume": 53.4,
        "newsTone": 54.5,
        "socialVolume": 57.3,
        "socialNegativity": 55.2,
        "severeEvent": 92.0
      },
      "articleCount": 117,
      "socialPostCount": 217,
      "uniqueSourceCount": 73,
      "socialPlatformCount": 1,
      "negativeArticleShare": 10.5,
      "negativeSocialShare": 17.2,
      "confidence": 0.725,
      "coverage": {
        "successfulChannels": [
          "google_news",
          "media_rss",
          "google_trends",
          "youtube"
        ],
        "expectedChannels": [
          "google_news",
          "media_rss",
          "gdelt",
          "google_trends",
          "kaskus",
          "youtube",
          "reddit",
          "x"
        ],
        "newsChannels": 2,
        "socialChannels": 2
      },
      "volumeNotes": {
        "news": "Pilot week-on-week ratio: 1.10x; 3/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 1.48x; 3/8 baseline weeks."
      },
      "alert": {
        "level": "normal",
        "active": [],
        "triggerReasons": [],
        "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
        "reviewCandidates": [],
        "actionableActive": [],
        "notificationLevel": "normal",
        "notificationReasons": [],
        "suppressedCandidateCount": 29,
        "acknowledgedRetained": [
          "kredivo-kredifazz-purworejo-2026-07"
        ],
        "acknowledgedSuppressed": [
          "kredivo-kredifazz-purworejo-2026-07"
        ],
        "pendingHighSeverity": []
      },
      "events": [
        {
          "id": "auto-3aaee50756689d4a",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "61386657716126f0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tempo.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Risiko OJK Mencabut Larangan Berutang ke Banyak Pinjol - Tempo.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4b92ad563ea27573",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "cca67d6e98a3f9a9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Telah Hentikan 951 Pinjol Ilegal, Pinjol Ilegal Masih Bermunculan Ini Penyebabnya - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-791cbae7bf126f07",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "aa8da0a9b1d67f06"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaasuransinews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Jatuhkan Sanksi kepada 81 Pelaku Industri Pindar dan Pembiayaan - Media Asuransi News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-957740b8770ad058",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [],
          "socialItemIds": [
            "b380ccbdda63e3d1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "karena mreka pinjol2 itu takut dicabut Ijinnya karena galbaynya tinggi, makanya mrrka berlindung di seabank....artinya p",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cb8052ed2d1d7bb4",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "906d93e38c733286"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nasional.tvrinews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cabut Batas Tiga Platform Pinjaman Daring - nasional.tvrinews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d558eded3ca3e312",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "41d24afdd823219b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "peradaban.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cabut Batasan Pengajuan Pinjaman Daring Maksimal Tiga Platform - Peradaban.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f4d4ba3d09d99388",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "6c493498e493cefc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "merahputih.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cabut Larangan Nasabah Utang ke Banyak Pinjol, Kini Bisa Pinjam Lebih dari 3 Aplikasi - merahputih.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ff5828927b3c9226",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "3523b447a584bf3a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Ilegal Masih Bermunculan, OJK Ungkap 951 Entitas Dihentikan - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-751145d27e1ea4a8",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "67055598532d677b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalo dapat kirimkan paket atau belanja online padahal  anda tidak pesan dari nomor HP anda dan hanya penerima nya tertul",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-754d41f015c9e978",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "e13ceeb648d5e7be"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tukang Cuci Ompreng MBG di Tulungagung Ditemukan Tewas Bunuh Diri - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e18a5a14e4840b58",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "6ffc44bb5f7b8ccc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediajustitia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Diteror Debt Collector Pinjol? Ini Aturan Mainnya, Jangan Cuma Diam! - Media Justitia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e69e51bc00665672",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "7b918328536a8157"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Teror Pinjol Ilegal dan \"Scam\" Makin Masif, Tiap Hari OJK Tegal Kebanjiran Aduan - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-059fcaacf27ec057",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "c70694b05aa1417f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jatengprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Marak Judol dan Pinjol Ilegal, Kader PKK Jateng Didorong Jadi Agen Literasi Keuangan - Pemerintah Provinsi Jawa Tengah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-30db5051a77753b6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "3649947ea31b78e0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mettanews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Judol dan Pinjol Ilegal Mengintai, Ning Nawal Ajak Kader PKK Jadi Agen Literasi Keuangan - Mettanews.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4c471f23be0ca8df",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e81f9a322356dd92"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "manado.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polda Sulut tegakkan disiplin cegah personel terindikasi judol-pinjol ilegal - ANTARA News Manado",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-601121309b0e0e26",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "a9f626cdced0baca"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "idxchannel.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas Pasti Hentikan Kegiatan 951 Pinjol Ilegal Sepanjang Januari-Juni 2026 - IDX Channel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d83a7f2caa93d0a",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e40ca350a3232724"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap Alasan Pinjol Ilegal Terus Bermunculan - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7abc13f46ac82867",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "53cf00d41bd32fdc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarcirebon.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cirebon Soroti Literasi Keuangan di Bawah 70 Persen, Warga Diingatkan Waspada Pinjol Ilegal - radarcirebon.disway.id - Radar Cirebon",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-817acb7ea4f4cbf6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "5b34c071dd7c79f4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Pinjol Ilegal Mudah Ganti Identitas Usai Diblokir - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-827ba4962e3172e6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "8b8dbae5b6b7b303"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Waspada! Satgas PASTI OJK Basmi 951 Pinjol Ilegal di Semester I/2026 - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-84ee25b6a0299237",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "aec2dd173b5a8256"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "halosemarang.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perkuat Perlindungan Konsumen, OJK Tegal Ajak Masyarakat Kota Pekalongan Cegah Scam dan Pinjol Ilegal - Halo Semarang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a54eb8b300775840",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "8e00268937428a77"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "951 Entitas Sudah Ditindak, Mengapa Pinjol Ilegal Terus Bermunculan? - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b628ba6f89d69e9f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "eff588596181f4d3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek NIK KTP Anda Dipakai Pinjol atau Tidak, Waspada Penipuan! - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cbfc1cd9eea9e2f5",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9c9755c9cdf2a24a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "timesindonesia.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Angkat Isu Judol dan Pinjol Ilegal, Film Menang Untuk Kalah Luncurkan 16 OST di Bandung - TIMES Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e82f3f0073f2de47",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "001cd1210a1fe35b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarpekalongan.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pelaku UMKM Waspadai Scam dan Pinjol Ilegal, Pastikan Layanan Resmi OJK - radarpekalongan.disway.id - Radar Pekalongan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f68e42a929cb9f78",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "851e6fe1641558cd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pekalongankota.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perkuat Perlindungan Konsumen, OJK Tegal Ajak Masyarakat Cegah Scam dan Pinjol - Pemerintah Kota Pekalongan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fa5b5a7c1c35ac3b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "b80d802bc27445ce"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "chanelmuslim.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Imbau Masyarakat Waspadai Investigasi dan Pinjol Ilegal Melalui Prinsip 2L - Chanelmuslim.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fa65c5d3433fe39b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "36c976cb02d388cd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ini Penyebab Pinjol Ilegal Terus Bermunculan - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-feddd62270e2620b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "b8ae1c6476b11fb5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penipuan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f488ac13bbdd482",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "02079c27eaca95c2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemerintah tidak berpihak pada rakyat susah.. Galbay nasional melawan pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1dc1c942f9193bb8",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "6208f132dac02b94"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aku udah galbay 6 bulan jalan. nomor aiu buang dan aplikasi tak hapus. Udah gak gagas DC lapangan .",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-359e97627a95b80d",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "b9963c9d030abe63"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol salam galbay",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-38b2185b5f5a158a",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "666cbe48475034c3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK = PINJOL = MAFIA!\n\nSemangat \"GALBAY\" selamanya...✊️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48bab82d108b15f6",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "c688b970f520c6ef"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan takut sama dc pinjol, kita perangi pinjol dengan cara galbay nasional💪",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53da184145eb4ff3",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "11daf20e41d3eec3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Intinya pinjol ini hukumnya PERDATA. TANPA JAMINAN. PERSETAN OMONGAN ORANG. PINJOL-LAH SEBANYAK-BANYAKNYA & GALBAYKAN SE",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6800d6614344edb0",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "faa542a4937015e7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hidup galbay nasional ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-72ac4d6c8c689d73",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "a573a88ac5e64756"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ada 16 Pinjol dengan Kredit Macet (TWP90) Tinggi, di Atas 5% per Juli 2026 - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-73081095513df181",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "c1d2ee054097aa75"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol = Mafia!\n\nSemangat \"GALBAY\" selamanya...✊️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-79263edec9745166",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "0827926cd47c7df2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Galbay dr thn brp mbk mulai msk ke sea bank",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b0066f99c055e9f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "fc1154325dfd4d00"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Besok 17 September 2026! SEMUA YANG GALBAY PINJOL BERHENTI BAYAR-ATURAN MAKSIMAL 3 DISTOP..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-82ea97530246a747",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "cf38a2299e307612"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ada 1 trik klo nama mau aman di bank \nKmren teman saya kek gtu \n\nDia pinjam pinjol lumayan gede \nSebelum dia galbay dia ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-957569e1c632099b",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "565b23c6cd952d30"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Intinya galbay galbay galbay\nPinjol sarang mafia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-973deebe9b63aaf3",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "469e841ab1ca6870"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lanjut terus galbay mau siapapun yg nagih kalo belum ada duitnya mau gimana lagi 😁",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1e68bd8f10a1d44",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "cc39a130f3ee13c1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "alhamdulilah hutang pinjol 6 apk sudah aku lunasi , 150 hari galbay ngeri bunga nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ad830bd4218b6c09",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "8e76f2cbee730cb7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap 16 Perusahaan Pinjaman Online Punya 'Skor Merah' TWP90 - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b67530d3c7c68cae",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "6dcf43de6259e85e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Bongkar Kondisi Pindar, 16 Pemain Masih TWP90 di Atas 5 Persen - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c4bf85aa97ef1274",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "5bffd9a72c2f3ffe"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Para nasabah gagal bayar, kita di besarkan oleh orang tua kita dgn kasih sayang jadi kalo ada yang maki2 anda hanya karn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ded354fe923bd48e",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "7b21001ca437bfb8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya galbay, eh kemarin datang dari lazbon 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e1e17e5c2179964f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "883a2f5a5140e54f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Download Dana Mudah - Super Cash Pinjaman Online Apk Sfile, Legal atau Ilegal OJK? Pengalaman Galbay Pinjol - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e44cb1227720e2ff",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "cb72681b2caa8ef1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Galbay pinjol ke bansos ngaruh ya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eaac5e60cf8d76d1",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "f263b6e08ccb3a32"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat GALBAY kan semua pinjol selamanya...✊️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-01de057ae8346dc2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "620e2f10fd7f8a2f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sukses selalu bang 👍",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0295fd9d330e680f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "48a20461f8ff7733"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK pendukung pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-03c5b5bdae5bff03",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "722bce7cae43eec5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mantap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-05125499e9b5bfb7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b6c3747d3324a1c9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat bantu orang tua bayar hutang☺️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08912a24813bddf9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "510989820413948d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Informasinya jls BG mntp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08bd5fc2afc3ac21",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d6ba5e7e263bd63e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Oke terimakasih infonya y",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-09b74445d5232a9c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1cc84d5acf191262"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat bayar sekolah 🥺",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0b7d1204596fc9f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bf97e0564b28f240"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah smoga bisa buat nambah biaya proses luar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c3070e95318f071",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9baa2dc144b05497"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah,semoga dapat buat pulkam 🙏🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c38e6fafcdc329e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f2e6f0942461138d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarapembaharuan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PMPHI Soal Wacana UU Perampasan Aset Koruptor: Jika Diterapkan Melanggar HAM - Suara Pembaharuan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0cf79063cd3862f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dfbf36e8dcd03a45"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah.. first time nyimak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d198d01be618d83",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8e28296482e2e4d5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "teknologi.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Beli iPhone 18 Secara Daring dan Luring di iBox, Digimap, Hello, dan Blibli - Bisnis Tekno",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d5260c344b2bed7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "396b15a9617ce030"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagaimana caranya bang,biar muncul  pencarian kita",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0ecc30f9a92ec4cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6d7d5277e395ef10"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selalu nyimak tp kenyataan nya gak pernah bisa....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0fa4efcad0139267",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "edc648b627251c78"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Garap Segmen Usaha Mikro yang Belum Terjangkau Perbankan - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1031a7003b24de3d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c0980fdb17732294"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah untuk kebutuhan sehari-hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-115c53787643c45b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9ba66c53c4382677"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga rejeki bang semangat... Mau buat bayar hutang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-121d25a9271a8d0a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "286159b4eb6cb654"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat selalu bang semoga lancar rezeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-12f7ece817c76614",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fcd5b8cc31c7d45f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarapembaharuan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Boni Hargens: Polri Beradaptasi dengan Zaman - Suara Pembaharuan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-13d818d900d5bf24",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d486b978a9e4e064"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapet rezeki dari abangnya buat bayar spp adek🙏🏻🙏🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-14db375a31588c5b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "052905b31d4b2b49"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jatimnow.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terlilit Pinjol, Karyawan SPPG di Tulungagung Nekat Gantung Diri - jatimnow.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-16776bc4942ace9f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "790b51765b2b1f76"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater: Kemudahan Transaksi atau Masalah Keuangan? Halaman all - kompasiana.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-19edf1c06ac91bcf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b716bd99dc00cd5f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat dana kaget lagi butuh banget untuk kebutuhan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ae5418444c0f7dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8d39e3629ccdebd2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "patrolicyber.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bahaya Judol dan Pinjol Pesan Penting dalam Film Layar Lebar \"Menang Untuk Kalah” - patrolicyber.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1cb210f595f8456e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dbd8941d1cbb136a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritamanado.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tak Lagi Batasi Pinjaman di Tiga Pinjol, Ini yang Perlu Diketahui - BeritaManado.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1cf70421fe960f71",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e193c410991e1ad"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga ada rejekinya soalnya lagi butuh uang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1e5e7cabef0a09bf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca5d6ebe98330d28"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pertama, daget buat jajan bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ea7064c696ad914",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "38273518656fb3b7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sulteng Waspadai Penyalahgunaan Pinjol untuk Judi Online - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1fca027101ec813a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d6fbbd4bd0bae1f0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, komen saja mau daget buat kebutuhan apa hari ini 👇 https://link.dana.id/danakaget?c",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-20aec32abb6a93ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c69206459251fd2b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pria Muda Paling Banyak Terjerat Kredit Macet Pinjol - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-211779dfa8edaf77",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "39e841ac5123cb20"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Di akun terhubung saya , tidak   ada saldo digital, kenapa ya?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-21d3e9bbd943925d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f89698b140981037"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "iya di aku slik isinya seabank semua 2026",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-234f04483d1f1c5f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1f71ad07248bff7d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Punya aku ga muncul fitur dana past pinjam nya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-244f7ec7d61395ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f3cd96b0c304db46"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Komen pertama paduka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-25218b26278261ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fd06a4e6a4958eff"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Muda-mudi 19-34 Tahun Dominasi Kredit Macet Pinjaman Online - Finansial - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-25658d97c721750e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "15680fec073a8910"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah barangkali ada sedikit buat makan bang🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26dd0560458cd7ab",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c2bc3d481720250c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapat,biat anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2afd4a9a84f827a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9528a50dab3500e6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "duwitmu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penyebab Tidak Bisa Pinjam Lagi di Kredifazz | Ini Solusinya - duwitmu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b8502c598ef889b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ac734204d834bcf5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lensabanten.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tuyul Seken Tak Cuma Jual Horor, Kisah Pinjol dan Jalan Pintas Jadi Bumbu Komedi - Lensa Banten",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2c0108537a7dd41e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8352b3b201419a0f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Batalkan Rencana Pembatasan Pinjaman di 3 Pindar - MetroTVNews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2ca5ec57504c414e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "db79c12b30ec00cd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tegaskan Penyedia Paylater dan Pindar Tetap Bertanggung Jawab ke Konsumen - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2cf710bbb34446c8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c4665d0737f0d1ff"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemain Pindar Susut Jadi 94, OJK Ungkap Biang Keroknya - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e99068c6ec75c20",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8d0bfb132f9d1c94"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alah, bilang aja kek pinjaman onlen",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-301224c11a1c8858",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "33e751c392175529"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah-mudahan cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-314df7ead20d3d12",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "590a0f1a31b9d8cc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bissmillah semoga dapat buat keperluan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-315b23efb928960a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e569bd5f5cac076a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jika KTP Dipakai Orang Lain untuk Pinjol, Lapor ke Siapa? - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3200a695056a26d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f5295ff52bcf3395"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat terus bang ngonten nya       semoga sehat murah rezeki nya  aku butuh uang bang   buat  byar  rumh sakir",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-322d3f6751ed2778",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "af0db20a5de37585"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Untuk kebutuhan sehari-hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3252eb9d006dd05a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d52e3540ff737652"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Diawasi dan terdaftar OJK itu artinya dilindungi OJK 😂, terima saja nasib, definisi Rakyat di tekan Negara..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-32b67c82eaa2a20c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e3888b7de01dcd8a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Panjang umur sehat selalu lancar rejeki boskuuuuh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3375a7fa42ffb17d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e8a435b0f85fb6bd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "3 Aplikasi Pinjaman DANA Online Langsung Cair 2026 - PINJOL Data Mudah Cair TANPA BI Checking ✅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-34e5ff224ff72e78",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4f3c3c49e0d4b5be"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah \nbutuh buat kebutuhan sehari-hari kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35c11b0e6179cead",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ea18a506d357cd00"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah ya Allah buat, bayar kosan dan biaya hidup sebulan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35d90d343f687581",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c8991c74dc2560fa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mauuu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-36e13105759a7d99",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "43c6722889567e3f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Harusnya pinjol GK usah ada DC lapangan karna kita pinjam online bukan offline, DC lapangan bikin resah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-38a019d3438fa411",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "06ff783e4fe47d2e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "15 ASN Pemprov Bengkulu Ajukan Cerai Diduga Perkara Ekonomi hingga Pinjol - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-38b3a4fe7c02265b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "891399fee407e927"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cna.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sedang cari kerja? 44 perusahaan ikut Job Fair Jakarta Pusat 15-16 September - CNA.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-38f755c8fb4e7442",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b14121152be87024"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "yaudh gk usah di bayar aturan aja gk di patuhi bunga juga tinggi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3acd2abb06845f23",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ebf65885bd14fa17"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pasti pinjol yg kenak sangsi milyaran itu pasti gak bayar jugak ... gak jelas OJK nya ni!!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3b76dd3b8c98f9d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8099aac20215f127"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Boleh tuh bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3be964075728e0a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "761c66c11977304f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tvrisumbar.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Curi HP Korban Kecelakaan dan Gunakan untuk Pinjol, Mantan Residivis Narkoba Ditangkap Tim 1 Klewang Polresta Padang - Berita TVRI Stasiun Sumatera Barat - TVRI Sumatera Barat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3c63cf1073cf0903",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2325b3f29d52e63d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Wah sangat membantu saya.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3c790d6a91b3f2ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "42258c9114d5fb0a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga rezeki buat berobat 😊😊🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ce679be643d65ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a5cad13407795290"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga aja dapet, lagi perlu nian buat beli susu anak dan kebutuhan lainnya 🙏🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3e390962ce3ef089",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ad398e1ebe662eae"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Koq punya sya gak tampil bang dana fast pinjam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3f351e42d3a61454",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "158083295a51b6fc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pas ngeklik pinjaman extra dana gk muncul² bang, pdhl udh memenuhi syarat semua yg tutorin di awal",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3f8d80ead3d86716",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d9ecf722410ee383"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat buat kebutuhan sehari hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3feabbecbca1be27",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "14e60704d7ade9aa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sulteng Soroti Penyalahgunaan Pinjol untuk Judi Online - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-412a5a8b2967dbc0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5722f5b4106d3ce4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Moga jadi rejeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4165046d645d9499",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d92256a952c62c88"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah untuk biaya persalinan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-41dc175674c6279c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ceda79278069177d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Caranya bgimn bang , tolong aku , butu uang, untuk berobat anak saya. Bang👏👏👏🤲🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-41ff86d3efd78532",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "24f02465650ea989"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat kak untuk kebutuhan kesehatan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-42411caa8b356d5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7317519b909887aa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gak ada saldo dana gratis.. Cuma dibohongin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-44024e04bdf6539e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "224a73833232c56b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "itu mah namanya tedpole",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45b89bb502762339",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "be6db74a669fdc1c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-463119225a96e445",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "11da7a6083b5229c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mantaaappp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-469cf5356e1cb927",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "067f56857d68cdde"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "belarakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pakar Keuangan Ingatkan Risiko di Balik Perluasan Akses Pinjol - Bela Rakyat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46e5d45ce2377109",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "13035a64bbdf0ba5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penetrasi Pindar di Luar Jawa Naik 29%, Terkendala Akses Internet dan Kehadiran Fisik - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-473487cb8cc92df5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db361b22932cedd4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjaman Online ❌ Sekarang Ada Hamil Online ✅ 😱🔥",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4736a6dad5c6311f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "41e271f50f92557e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "berandasulsel.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kabar Gembira atau Ancaman Gali Lubang Tutup Lubang? OJK Batal Batasi Pinjaman di 3 Platform Pinjol - berandasulsel.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4769f3b163862df8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "39406fbfbe9a50c9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bunga Mekaar Turun Jadi 8%, OJK: Tak Langsung Tekan Permintaan Pinjol - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48146d7c641b0414",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1c6fa2631938302b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Susah woy nyambung in dana digitalnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48d8069cd48d6ec7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4db786c078b0b6ec"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjaman shopee paling kocak gue gak ada pinjaman di mana pun 3x di tolak dan di suruh lunasin hutang kan aneh gak ada p",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4963ccf02991f2f3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1c6a426f3af73500"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Waduhhh sy gablay di adapundi, spinjam, paylater lg 😢😢😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49b30c5db53e181a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e6bfc673b4be2718"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "thanks infonya kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49f8629faa1dc933",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "36c6a92ed3ef6aa2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d14a742ba8ca84c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eb255d4c13b5569a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sudah saya coba tapi dana+pinjaman cepat tidak tampil akun dana saya sudah premium boss",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4e9207d750049b28",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e1d10f8ad5254831"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "harianterbit.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Horor Komedi, Tuyul Second dan Personal Berondong Bakal Ramaikan Perfilman Indonesia - Harian Terbit - harianterbit.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4fbeb727da809fe6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1c39093da06d4819"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kanapa saya tidak muncul aktifasi dana fast pinjam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4fea899326ddb9e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b60285fc58979da1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sya jg kmren ada yg tiba tiba kirim paket ..bilang pesen'nya lewat Facebook..yah suruh sya bwa balik lagi aja paket nya.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5068e44991cf114f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "84e32c4bde8dd817"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metropolitanpost.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "RPA INDONESIA AUDIENSI KEDUA DENGAN OJK, KAWAL 51 LAPORAN MASYARAKAT TERKAIT PINJOL - Metropolitan Post -",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5086949fc01d653b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4ec1469acaa006c9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aku udah paket lengkap gak Pernah dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-50b36316ac5972e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5cdbb48299bd8676"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ibu Hakim Pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-511c10a21e2c47a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ddcb92e0c20cd6fc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Respons KrediOne Soal OJK Hapus Batas Pendanaan di 3 Aplikasi Pindar - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-522eb5efb9a4e64a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3bf47f8b22a00819"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga lancar band aku butuh banget uangnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53015e89f5c82744",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "68fcd2635aaf6bc6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hapus Batas Pinjaman Pindar, Masyarakat Tak Lagi Dibatasi di 3 Platform - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53b7f2b90a22aeed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7ffa4aac39fdabe7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang.\n...Bismilah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53bf313c1f888dce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6cd163e1bdcad099"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah rejekinyaa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53d955576d5ba214",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c160e3b99d625a42"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Y Allah semoga beruntung 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-54ce88c47742aac2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b1e47298374ea9e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sya punya saldo digital TDK ada ni abang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-553a7d391e1d5887",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "be8d5fbec90531b8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tak Lagi Batasi Individu Pinjam Maksimal di 3 Pinjaman Online - Finansial - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-55cd2dafa6fc6b75",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dd24d57548d18df1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "betuah.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dinsos Pekanbaru Ungkap Faktor Warga Dicoret dari Bansos, Ada Pinjol dan Judol - Betuah.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-56796291c1210765",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "70fc467ef10030a7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gue kira bagus, ternyata Bacot, sok tau pula,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-56c2231b936657de",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "31a0f893165eff4e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rm.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "GEMA Picture Siapkan Film Tuyul Second dan Personal Berondong - RM.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-571eca4e24c301c8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e05052833a5d4a83"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "malangposcomedia.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Malang Ingatkan Gen Z Soal Pinjol dan Kejahatan Digital di Kuliah Perdana UIN Maliki, Rekam SLIK Bisa Ganjal Cari Kerja - malangposcomedia.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-57b60da3bc08a172",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0f25003b2ebd272f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya baru aja ketipu bang semoga dapat gantinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-57f9908e3d86b1b4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e3904d5c7c928b73"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Smga dapat ksempatan, biar bsa tambahan biaya sekolah. Aminn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5ae48e7b2923cb42",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e6547109d74dd9b2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim buat renofasi rumah, yg ada di Aceh ini belum kelarr..😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b2967f9cf5c7d8d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "038a5abc15874063"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Asal Tagih! OJK Tegaskan Pengguna Paylater dan Pinjol Punya Hak yang Sama - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5c336d123f17f83e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0535b6794ddc8e02"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan gali lobang tutup lobang Ndak mampu bayar pinjol stop bayar jangan takut atas semuanya. Jangan hidup semakin terp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5d43f3e5561f6f80",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "699304a3eb37fd3a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DATA BUSUK ACC?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5d9191c4a3dcdd9f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "65dd81d6fbbefb31"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah cobak deh semoga menang❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62903b23b423ae25",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e0f326eeaf9747f2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Iya bang gimna kalo no kita untuk jualan ga mungkin kita ganti",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62b2512346b72964",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "67d3669775bb9aaa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mau dong bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63e566ea6f4296ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "955e0c292f5dbc2b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.respurwakarta.jabar.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Kuliah Umum terhadap Mahasiswa Baru di STIE Wihara, Polres Purwakarta Sampaikan materi Edukasi Bahaya Cybercrime, Judol dan Pinjol - Tribratanews Polres Purwakarta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-67663c4083e0a44f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c7d541c5b4888407"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yg jdi pertayaan iti di luar ojk tnpa BI Checkin apakah di acc",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-67c15f62c795023b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4c38482bd1283545"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah mudahan ada rezeki untuk bayar cicilan kpr sama biaya sekolah anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-68d82a5f056a6aa7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "162cace9297dbbb7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "demo ke OJK baru mantap best",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6a0647c388570772",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1d6ff791def37854"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah\"an cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6a20fcb265370d90",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9a5092d3b2e7085d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Batal Batasi Warga RI Pinjam Duit Maksimal 3 Pindar, Ini Alasannya - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d0ca92afe178c82",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dfa9c3748fd6ce05"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Klw rejeki gk kmn\nSukses selalu bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d40f70fedb4fd71",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1b65e38df5024fae"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PNM dan Kopdes akan Tawarkan Bunga Pinjaman 8%, Ancaman Bagi Pindar? - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6f2504f407d335c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5f52be620848494b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "aktual.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap Kredit Macet Pinjol Didominasi Anak Muda dan Laki-laki - Aktual.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-70c387fe4710fbdf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "77b98e42f3b6712e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-727b00ae23f12b45",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1153889b954e08f6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Suamiku Naik Jabatan, Tapi Aku Rela Terjerat Pinjaman Online Demi Gaya Hidup Mewah! | Kisah Nyata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-733e2a9cc149437a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7b83a6165a265594"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Legal OJK Bunga Rendah September 2026, Cek sebelum Ajukan​ Langsung Cair - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-75371a12fc4597fb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eeb066e2be060c7b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-75537096d3f2e708",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9bcba8fe20684243"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kok gak muncul bang di aku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-75ba5778b03fecac",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c650db3c2e14d231"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilahhh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7770eb8e8f7c4eef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4267f8093af848a0",
            "a9b6efcda2694180"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-77af63b105ba486a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9eadf9128225ad4c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "indoposco.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Judi Online dan Pinjol Dinilai Saling Menjerat, DSP PKS Dorong Gerakan Nasional - indoposco.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-788c453f9947dfaa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e7d8b7b08b320af9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "laha ga ada enternya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7ec587e805f5c215",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6eb4afb53e17fb44"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Intinya jgn tanggapi pesan masuk. \nDc telpon maki2 . balik maki. \nEnak saja kita di maki malah diam  .\nSaya otak lagi sa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7ef35014ab670cda",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "44f75a62acd54721"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK batalkan batas pendanaan 3 pindar, ini alasannya - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-805fd371950f477a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "48eb05ddc4e25a82"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hapus Batas Pendanaan 3 Pindar, Kemampuan Bayar Jadi Penentu - Katadata.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8089f33aa3f0dff4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1436709a10ccadf7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet dana kagetnya,buat bayar kosan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-80b8ac868934ac80",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "08f0f0640230b86f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BISMILLAH SEMOGA DAPAT KARENA UANGNYA MAU DI KASIH KE ORANG TUA",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-810bed2c85149d99",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ee791f45015d3390"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Betul sakali bang persetan dengan ancaman DC.....kalau ga ada uang buat bayar.ya kita bisa apa ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-81e6fed83a627b87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "10f9b7ca9927bd2c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tutup ojk,,berantas pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-835af92f5154fbd8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4899c851ad2143be"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "CELAKA!! SERENTAK NASABAH PINJOL TERIMA INI!! LAKUKAN INI! JANGAN SALAH LANGKAH!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-837f8bc12087532e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5092d181e3128ad6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "dinsos.jakarta.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sekretaris Dinsos DKI Buka Kegiatan Peningkatan Literasi Keuangan ASN, Cegah Jerat Judol dan Pinjol - Dinas Sosial DKI Jakarta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-83dd6f077350fdb2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d25be9aad37ab4d3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir selalu bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-840de0e116e7c648",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db99fb328b7a5a0d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ada juga kagak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-849333e6523ed313",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d0dac885d618eecb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap sekali",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-858b1bc4e99f4ddf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d2bc943793466862"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "surabaya.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemuda di Tulungagung Ditemukan Gantung Diri, Sempat Bahas Pinjol Saat Video Call - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-86fd1a4e8e784eb5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f6d1d491eeb4a5fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat dana kaget nya, soalnya lagi butuh banget buat makan,nasib anak rantau 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-876953a6fc748e50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "15f65549c02e75e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga ada rejekinya amin🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8794acf1854e631e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "23552c7eff88784c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Macet Pindar Didominasi Pria Gen Z, Bos OJK Buka Suara - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-886fa3c95d43c92e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "edd102bc01b02c89"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah dapat amin😢😢😊😊 sudah paket lengkap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-896a94ac6bd2a8a3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ec216e3ee317f0a5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga berkah abg q",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-89e71993b9ff7bf7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "147389c8048e0c30"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK gak peduli sama derita rakyat.  Malah menghapus aturan 3 pinjol.  Bubarkan aja OJK, gak ada gunanya.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a14874a01eac30a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c3d4b0befb81b248"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "idxchannel.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Batal Batasi Masyarakat Pinjam Uang Maksimal di 3 Pindar, Ini Alasannya - IDX Channel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c4e7c36374c5a0d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8d447a9d910030ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nah benar itu om,OJK g ada gunanya ,malah aturannya menyengsarakan/mempersulit rakyat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8d4c2aced53e1ad8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a9b587bdb3195780"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga berkah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-910bb18c05434a68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "95ccc7844c300886"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yey aku dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-91a5c8abbc4b7827",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f987b70238dd1a57"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "hukumonline.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jerat Pidana Menyalahgunakan KTP Orang Lain untuk Pinjol - Hukumonline",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-92b35bc144a0b35d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "31f5e796105a8c29"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap Pinjol di Papua Melesat Hingga 85,77% - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-93510bab7ab6d4ca",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "826aeaaaca08e813"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "di aku kok ga muncul apa' bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-946543e003fdbe2a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8d9f1c1d4de1a59d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Pantau Investigasi Internal KrediFazz di Kasus Debt Collector - Finansial - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-94f0ba7a2c24b6aa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9c6353cc786df35a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9531b1c18d5b1704",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "04819c8df199558a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga rezeki ku dihari ulang tahunku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-95542a8c4b4b4ccd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a29c841c7ca817ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bisamillah semoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9583c19b07424945",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "84f7d706f6838f52"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Implementasi Ketentuan Analisis Kelayakan Calon Debitur BNPL Berjalan Baik - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-976be20103c4c514",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "13c666f49e7fb53e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat beli peralatan bayi bismillah rezeki nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-979ac1eb0d1a5c57",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3170b5bb97806a24"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadirr bang mauu jugaa❤ mau beli bakso udah lama ga bakso",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97dcb62e2bdfcd6c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "28cf07f5fc1d280f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Persis yg abang bilang waktu ngopi2 di parkiran dulu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97f58c846bb6c259",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c7177edaa6050399"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang dari kalteng,smoga beruntung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-98d1f7e092f6ac78",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "137927567f181ab2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sukses selalu buat anda..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a7065c0c8f7613b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c612251d4f962250"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater di Kalangan Generasi Muda: Solusi atau Ancaman Finansial Halaman 1 - kompasiana.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9bf8311b4cd0f69e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "736589a4a9d95e1f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ga pernah di ACC broo, tapi gapapa lah terimakasih atas edukasinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c10d74619f99e85",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "84126f61e1b1c4c1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Punya saya gak nongol setelah sudah cek dana fast pinjam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c44847e080b9678",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "036beb1dc397cfe3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Akses pindar meluas, kemampuan bayar nasabah dinilai tetap jadi kunci - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9dc5c442bb9fb203",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ea2b88feae47f9f9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek NIK Terdeteksi Judol atau Pinjol, Begini Langkahnya - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9fbed68d92de8b48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "54ddea2b425b9156"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Smoga lancar bang\nSuxes sllu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1dd395c19f3a1f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "87b0ea37c60af9ad"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a31c91cf99627e0e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f2825ef0b74788df"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Bhabinkamtibmas Kalurahan Girirejo Berikan Pembinaan Bahaya Judi Online dan Pinjaman Online kepada Warga - Polda DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a3cf0d4a00c737e8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "34cf0fd86fccb42b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "PINJOL DAN OJK ITU SAMA SAMA MAFIA...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a3fa8163741de781",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8e555016bc6f16be"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hapus Batas Pinjaman di 3 Pindar, Ini Ketentutan Barunya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a4a10dd43010c50f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "014cf1c4aa49b96d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kedua buat bayar utang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a4c40778a4291f4b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "430ddb32ff263b4e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kak rupiah cepat fcnya digersik ada kah?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a638b7b0513e80ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f43ca6c6c0dcd9b7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rakyatcirebon.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Rekomendasi Pinjaman Online Resmi OJK Bunga Rendah dan Cepat Cair - https://rakyatcirebon.disway.id/ - rakyatcirebon.disway.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a6b8fd69148f17f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0048108a0dba8ca5",
            "7a18ea35f0a673c1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Konten sampah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8108229a6db44eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2f807dfb07433d3c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Pakai Fitur Minta Uang di DANA dan Alternatif Pinjaman Resmi - kreditpintar.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a81bc773ab77a235",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "86ab982b9c873486"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah menang abg ku❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a858695030407db0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b49bc715151b3bfb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah, buata lunasih hutang ya mas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a864923fb5dac677",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "55c16225217eb067"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah\"an dapat ,semoga selalu sukses bang🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a89b76890583dfa1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "940b6226edcbb45a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "fhotoin Kunti untuk pinjol 🤣🤣 #funny #comedy #shorts #viral #fyp #ai",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8b738a32e0c41a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3aa0da648c61894d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Data OJK Susut Jadi 94 Fintech, Begini Cara Cek Pinjol Legal 2026 - Readers.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a907becceca703b3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1791d4532683d681"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pas mau muncul dana pinjamanya malah di cut, seolah² fitur itu bener nyata lawak ini Chanel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a9bb744e3d5f7edb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "de89ccec3347dfa8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Punyaku gak nongol  aktivasi dana fast pinjam ,dah di ketik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a9e3b9ca81a56ca0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2acc941e2947845c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau bang buat bayar kos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aba47406419fbeef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f9bede983e9b753a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penambang Ini Kabur Seperti Dikejar Pinjol! 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac415fe955cebf99",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ed9b65d0b69d9e36"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang.mudahan aja dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-adf1e6df769d0d8c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f29869f4a21a590d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet bismillah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aee08e544edd070d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b1660e11b38b39c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dana Rupiah emank masih ada?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-af67f6ded05aaba6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f5c8147915e98dde"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Batalkan Rencana Pembatasan Pinjaman Maksimal di 3 Pinjol, Masyarakat Kini Bebas Ngutang - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b059ea89cbe97ca2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e7f968a4ac7d85f4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah bang sehat slalu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b0a06c60df331d7e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d4427ef3cef2b2b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga menang ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b16eb9eddfa4ec53",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "861a6e94d3161486"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tak Lagi Batasi Pinjaman di 3 Aplikasi Pinjol - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b300c534b813552b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a8c14ff9c147274e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kayonews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Legal OJK September 2026, 94 Platform Resmi dan Batas Bunganya - kayonews.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b4d18693a179c6f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d30220514ae92013"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Info yang bagus kak!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b5f84a6cb675032c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "08f27d654fe51877"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mending bro w ada org dc Traveloka malah krmh w d blang pinjol dari traveloka samp 7 juta pada hal w ga pernah pinjol ap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6e205571af7db8c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d5fa141dffce9e14"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap 30 Persen Pengajuan KPR Ditolak Gara-gara Pinjol - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b849e71764752cba",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "de56c945202af606"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillahirrahmanirrahim semoga dapat seikhlasnya aja bg buat benerin motor kurang 3 juta lagi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b893fb37968569a5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ec272969d298de79"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah mudah\"an dapet buat poligami😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b93d2d5019fcb34a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "071787909154c08d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Film Baru Tuyul Second dan Personal Berondong Mulai Digarap Tahun Ini - tribunnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b93fc38ecf0cf67c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e981c7fd8e7b0ccb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "batarapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kepala Diskominfo-SP Lutra Imbau Masyarakat Waspadai Pinjol dan Investasi Ilegal - batarapos.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b9fdd82c8a639947",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f360db5b2833b435"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat lahiran",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bba96b67e53c5e56",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "61f278518b0adf40"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Risiko Kredit Macet Pinjol 4,32% per Juli 2026, Usia 19-34 Tahun Mendominasi - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bce6411cbd3b6c3c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "73250f898ff47610"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi LD FEB UI: 54,3% Kredit Kredivo Digunakan untuk Kebutuhan Produktif - SWA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bd249c16a67a4709",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "04788de8b868d7a8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah aja dulu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bd7e65a02f7fcead",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "642082e7afb56b4f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah mudahan bisa bermanfaat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bda510d85a40d6a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "65bfafbfc475f67b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selamat siang kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be5dbe5fdcb2bdfd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "242f33c6c251f979"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ADA PUNDI, ADA KAMI, SPINJAM, SPAYLATER, RUPIAH CEPAT, EASY CASH, DANA RUPIAH, UANG ME, KOPNUS",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c00c4826c5c51361",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a5dca25d6d9a96ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gaji pegawai OJK luar biasa besarnya dan kerjaan santai2 aja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c1d7527ed2d3798d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "99238625bf101b07"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat isi bensin kak ,lagi kosong banget.mqu berangkat kerja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c3a6b4e133e5dced",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1fa3c0986e46b2bf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah bang semoga dapet buat bayar utang2 bang sama kebutuhan keluarga semoga di mudahkan rezekinya ya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c3e1447f537e780b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5202aa2ab15c1c3f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daya Beli Melemah, Tren \"Makan Utang\" Lewat Paylater dan Pindar Melonjak - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c448f497b5b8738e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7ed57937a174dd59"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat biaya operasi bapak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c56326dcc516effe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "423c6b27efc5a1e1",
            "37342f30b599a4d7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c5d49e83cb4d1d7c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4afe59221ebc9142"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillahirrahmanirrahim semoga dpt dari waktu itu soalnya ga dpt dpt mudah² kali ini hoki aminnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c63b0061def90109",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b1e91359e3a8d8c8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hoak masak potong vidio yg ad pinjaman nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c7b8242f458aee43",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "85e6ac6dd19863ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nyepam komen ah siapa tau dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c88ba27252ca8bc8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b9d2f85550be526e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol jadi tambah beban hidup skrg ini pak, pinjam dikit bunga tinggi,waktu byr 7 hari,15 hari dan di wa jg tlp dgn kat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c8d0a2ba5a746068",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "22db5a48d506ef43"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Pantau Ketat Langkah Perbaikan KrediFazz terhadap Permasalahan Tenaga Penagih - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cabb5b467ed4a9e3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ac7434d5e84b4c76"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koran-jakarta.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Batalkan Batas Tiga Pindar, Risiko Utang Masyarakat Jadi Sorotan - koran-jakarta.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cbbcacf0c272f130",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a65863922020fd12"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tu pak Prabowo dengerin kata pak ustad coba bapak gimana cara merobah agar orang2 mlarat bisa merasakan hidupnya adem pi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd7b9a1c76daa28a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7f2b36b6c742492e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah mudahan saya dapat \nUntuk ongkos pulang kampung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cedc3a51ec7f1006",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3c17ef5b5cfcff0a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gak ada pinjaman extra dana bos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d07891ce76f82d92",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d83263381aabbf14"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Masa cuma 20k 30 orang doang bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d1d4cdc65b609e6e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1bbf98fd9c929400"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ekuitas Pindar Tertekan, OJK Beberkan Penyebabnya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d1fd559355f57e41",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "89f5350445d84683"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediakonsumen.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tanggapan perihal “Kredivo Klaim Transaksi ke Tokopedia Sukses, Tokopedia Menyatakan Dana Tidak Masuk“ - Media Konsumen",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d35f63c659ccfe91",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "06ec47c5d27b50d8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah untuk berobat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d37e1fb89143a816",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "24cc902a06dc5e10"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "amin semoga dapat dana kaget buat kebutuhan sehari hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d3d425608a6a1569",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d67e9bb097e6973e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Persaingan BNPL Makin Ketat, Kredivo Andalkan Credit Scoring - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d4abc979e64b1da1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c23095930b7940b3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "haii",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d571e6203472cb20",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9c91c11bd6dbbf78"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Serem",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d5ee99c7bad99a5d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ba9d5cb7162a9fe5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah, semoga dapet buat anak yang baru lahir",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d675a5c52616f4cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "89e51a6f371c6832"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aktivasi pinjama dana cepat nya tidak muncul bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d78d4b5ce5388d95",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9945ebf7ba34b2a2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terima kasih bg dari video ini saya bisa jujur sama semuanya dan bisa bangkit lagi🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d7b4b0d3a2d71ff0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5ec72f625132be96"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjaman nipu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d88a9fb1a80e402f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e16a45c7a7a0f6d3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, mau daget buat kebutuhan apa hari ini komen saja disini 👇 https://link.dana.id/dana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dd54183461f66231",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4ba0026859df7a60"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarakarya.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Buka Kantor Baru, GEMA Picture Siapkan Dua Film Tuyul Second dan Personal Berondong - Suara Karya - Suara Karya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dda28365cdd12ec8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "206d4956542607a6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga bisa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dddfd661aa6616ef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6da27d41df014e2a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "WADU! MAKTON MAU PINJOL 3 JUTA | #mamalela #mamalelaterbaru #mamalelaterbaru2026hariini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dfa6afc3789d87c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8e1126b2f25e6bb1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cara Pinjam Uang di DANA | Pinjol Mudah Cair 2026 ke DANA Tanpa BI Checking",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dff84c37d5ebf57f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "08c2d4e7e703cbd4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nusabali.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Bali Rp2,31 Triliun, Macet 3,22% - NUSABALI.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e5136f1591d5403b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "004b1b91d0cfb544"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK Mafia pinjol. Memang berniat menghancurkan rakyat dam memperkaya para penguasa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e723a169bb5f72b0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "56a6dd73020b62ed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Tak Lagi Hanya Andalkan SLIK, Jejak Digital Jadi Bahan Credit Scoring - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e753001adf0e01ed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ffddc2a2cd909662"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat kebutuhan sehari-hari abg ku❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e7e428b9e6d5f4ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "50d7005330ea682a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah sehat slalu bg lancar rejekinnya dimudahkan urusannya aamiiiiiiiiiiiiiiiiiiiiinnnnnnnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e8ecae9364d5f212",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "198b249d8e76e1c6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jumlah Pindar Susut Jadi 94, OJK Ungkap Penyebabnya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e95907e8c577d0b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d08ddba9d624c61"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat biaya hidup di perantauan semoga dapat bantuan dari abangq",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ea31437a5a3170a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "123d57e8b87d3b6d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah Abang saya butuh hari ini.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eb88b623ebb2065a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "50f6dd648a1bc954"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Anak Muda Paling Banyak Pakai Pinjol, Tapi Sulit Bayar - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed69b1fe31843b8b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c0727761d13a5571"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Oh pantes mulai aktif LG nagihnya. Padahal Uda 3thn g ada kabar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-edc047fb72558ed3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "caa54b4e5140c4c1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek Legalitas Pinjol di OJK, Begini Langkahnya - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eff48eb4bc7622f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2ec88add294a2f3d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang sya baru nonton n udh screp.. sya mau utk anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f00f879179c2889d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "834138853221cbd7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah Semoga dapat untuk bantu renop rumah orang tua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f052451ba293b9ef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1140c94f62526692"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f0fe62765b574b12",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2bac3201fc727d95"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tetep ajah orang kaya kita kita mh kaga bakaln di acc",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f1afad993cd26190",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3beda555304a25db"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mistar.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Online Makin Besar, Risiko Konsumen Ikut Membesar? - HARIAN MISTAR",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f215b44272640ea3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ec973c2d37d880d3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan ngarep ada menu nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f2f1535c4621a7eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "38babaafd3b4f6a9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "riau24.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gathering Kredivo di Lembah Harau, Perkuat Kekompakan Tim - riau24.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f381645461d69767",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "89b98338fb6f0827"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarapembaharuan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Romli Atmasasmita: Presiden Percaya Polri - Suara Pembaharuan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f47472df823729ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a28eefdb305e4487"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim,buat bayar setoran,aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f4889c27711360d6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7dd23edf69413ef7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah untuk kebutuhan anak anak pasca saya operasi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f59f1d250e67665c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d13acd061bf752b6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Enggak bisa bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f89c180f6c50b95f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3428ee65b377b6ec"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamu'alaikum semngat bang bikin vidio nya terbantu banget ada tutorial abang hehe bissmillah dapet rejeki 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f96c1199f30f1458",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4228198fa02771e1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya Allah ya Robb yang Maha kuasa  Tenggelamkan Tutup OJK  Pinjol seperti Engkau  tenggelamkan Fir aun",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f9e76e77d4277917",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1c8e05a3fb11f109"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tempo.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Waspada Gas Pol Pinjol - Tempo.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f9ff7ba793638ef8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3ce53a8cfec4fcb4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "chanelmuslim.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap Data Mencengangkan: Kerugian Investasi Bodong Tembus Rp142 Triliun, Jabar Jadi Juaranya Laporan Terbanyak - Chanelmuslim.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fb64f015e60fba57",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fb3be7ae6d22fee9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah....semoga menjadi rizki saya 🤲🤲 Aamiin Yaa Rabbal'alamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fbbc6a3c4f18be42",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8f056686a9447107"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Daya Beli Melemah, Tren \"Makan Utang\" Lewat Paylater dan Pindar Melonjak Halaman 2 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fbe7433fe33c0566",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7223746fd677da0c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah dapet dana kaget nya buat bantu nyekolahin adek🙏❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ff74c54336ed2733",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5df89f73fd4d6cd6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah sehat selalu lancar lancar rezekinya bang aminnnnnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ffd5487810721b45",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a602bc40f611f78a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah rezekinya calon anak aaamiin yaallah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fff2806a9dedb83f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6915bf52ee26caea"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koranindopos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "GEMA Picture Siapkan Dua Film, Tuyul Second Angkat Pinjol hingga Sosok Debt Collector - koranindopos.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "kredivo-kredifazz-purworejo-2026-07",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "026527c3093b7712"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasus Debt Collector KrediFazz, OJK Masih Pantau Perbaikan SOP dan Penagihan - Katadata.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-51e6fa5cc1c38fd3",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "6ec713e8dca203dd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Klaim Penyaluran Pembiayaan Paylater Tumbuh Positif hingga Semester I-2026 - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "06ff783e4fe47d2e",
        "5202aa2ab15c1c3f",
        "8f056686a9447107",
        "6ec713e8dca203dd",
        "fd06a4e6a4958eff",
        "9a5092d3b2e7085d",
        "ac7434d5e84b4c76",
        "e05052833a5d4a83",
        "be8d5fbec90531b8",
        "5f52be620848494b",
        "f43ca6c6c0dcd9b7",
        "a573a88ac5e64756",
        "39406fbfbe9a50c9",
        "026527c3093b7712",
        "e981c7fd8e7b0ccb",
        "23552c7eff88784c",
        "edc648b627251c78",
        "f5c8147915e98dde",
        "8352b3b201419a0f",
        "906d93e38c733286",
        "41d24afdd823219b",
        "48eb05ddc4e25a82",
        "68fcd2635aaf6bc6",
        "8e555016bc6f16be",
        "aa8da0a9b1d67f06",
        "8d9f1c1d4de1a59d",
        "861a6e94d3161486",
        "8e76f2cbee730cb7",
        "84f7d706f6838f52",
        "c612251d4f962250",
        "c4665d0737f0d1ff",
        "d67e9bb097e6973e",
        "61f278518b0adf40",
        "891399fee407e927",
        "89f5350445d84683",
        "50f6dd648a1bc954",
        "8e28296482e2e4d5",
        "eff588596181f4d3",
        "2f807dfb07433d3c",
        "761c66c11977304f",
        "3aa0da648c61894d",
        "1bbf98fd9c929400",
        "36c976cb02d388cd",
        "6dcf43de6259e85e",
        "53cf00d41bd32fdc",
        "22db5a48d506ef43",
        "e40ca350a3232724",
        "31f5e796105a8c29",
        "790b51765b2b1f76",
        "d2bc943793466862",
        "13035a64bbdf0ba5",
        "9528a50dab3500e6",
        "3beda555304a25db",
        "052905b31d4b2b49",
        "e13ceeb648d5e7be",
        "8b8dbae5b6b7b303",
        "036beb1dc397cfe3",
        "dd24d57548d18df1",
        "38babaafd3b4f6a9",
        "038a5abc15874063",
        "f987b70238dd1a57",
        "c70694b05aa1417f",
        "6c493498e493cefc",
        "14e60704d7ade9aa",
        "38273518656fb3b7",
        "dbd8941d1cbb136a",
        "db79c12b30ec00cd",
        "cca67d6e98a3f9a9",
        "d5fa141dffce9e14",
        "44f75a62acd54721",
        "f2e6f0942461138d",
        "067f56857d68cdde",
        "001cd1210a1fe35b",
        "851e6fe1641558cd",
        "08c2d4e7e703cbd4",
        "3523b447a584bf3a",
        "e81f9a322356dd92",
        "ddcb92e0c20cd6fc",
        "61386657716126f0",
        "5092d181e3128ad6",
        "7b918328536a8157",
        "1c8e05a3fb11f109",
        "f2825ef0b74788df",
        "4ba0026859df7a60",
        "caa54b4e5140c4c1",
        "ea2b88feae47f9f9",
        "7b83a6165a265594",
        "a8c14ff9c147274e",
        "6ffc44bb5f7b8ccc",
        "e569bd5f5cac076a",
        "3649947ea31b78e0",
        "198b249d8e76e1c6",
        "41e271f50f92557e",
        "c3d4b0befb81b248",
        "b80d802bc27445ce",
        "3ce53a8cfec4fcb4",
        "aec2dd173b5a8256",
        "56a6dd73020b62ed",
        "c69206459251fd2b",
        "84e32c4bde8dd817",
        "a9f626cdced0baca",
        "73250f898ff47610",
        "071787909154c08d",
        "6915bf52ee26caea",
        "31a0f893165eff4e",
        "e1d10f8ad5254831",
        "9eadf9128225ad4c",
        "ac734204d834bcf5",
        "8e00268937428a77",
        "9c9755c9cdf2a24a",
        "8d39e3629ccdebd2",
        "fcd5b8cc31c7d45f",
        "883a2f5a5140e54f",
        "955e0c292f5dbc2b",
        "5b34c071dd7c79f4",
        "1b65e38df5024fae",
        "89b98338fb6f0827"
      ],
      "socialItemIds": [
        "e8a435b0f85fb6bd",
        "4267f8093af848a0",
        "3428ee65b377b6ec",
        "08f0f0640230b86f",
        "87b0ea37c60af9ad",
        "4f3c3c49e0d4b5be",
        "834138853221cbd7",
        "f360db5b2833b435",
        "edd102bc01b02c89",
        "f6d1d491eeb4a5fb",
        "04819c8df199558a",
        "e6547109d74dd9b2",
        "99238625bf101b07",
        "206d4956542607a6",
        "b1e91359e3a8d8c8",
        "510989820413948d",
        "014cf1c4aa49b96d",
        "7f2b36b6c742492e",
        "1d6ff791def37854",
        "e3888b7de01dcd8a",
        "f9bede983e9b753a",
        "ca5d6ebe98330d28",
        "0f25003b2ebd272f",
        "9e193c410991e1ad",
        "b716bd99dc00cd5f",
        "24f02465650ea989",
        "9ba66c53c4382677",
        "620e2f10fd7f8a2f",
        "c2bc3d481720250c",
        "736589a4a9d95e1f",
        "722bce7cae43eec5",
        "15f65549c02e75e0",
        "db99fb328b7a5a0d",
        "8d0bfb132f9d1c94",
        "396b15a9617ce030",
        "a29c841c7ca817ba",
        "bf97e0564b28f240",
        "d92256a952c62c88",
        "4c38482bd1283545",
        "423c6b27efc5a1e1",
        "39e841ac5123cb20",
        "3c17ef5b5cfcff0a",
        "70fc467ef10030a7",
        "d30220514ae92013",
        "e16a45c7a7a0f6d3",
        "642082e7afb56b4f",
        "1f71ad07248bff7d",
        "6d7d5277e395ef10",
        "1c6fa2631938302b",
        "1b1e47298374ea9e",
        "c7d541c5b4888407",
        "1cc84d5acf191262",
        "de56c945202af606",
        "1791d4532683d681",
        "158083295a51b6fc",
        "fc1154325dfd4d00",
        "77b98e42f3b6712e",
        "faa542a4937015e7",
        "ec973c2d37d880d3",
        "33e751c392175529",
        "8d447a9d910030ed",
        "666cbe48475034c3",
        "d6ba5e7e263bd63e",
        "34cf0fd86fccb42b",
        "28cf07f5fc1d280f",
        "de89ccec3347dfa8",
        "65bfafbfc475f67b",
        "c160e3b99d625a42",
        "123d57e8b87d3b6d",
        "b14121152be87024",
        "6208f132dac02b94",
        "04788de8b868d7a8",
        "b6c3747d3324a1c9",
        "ffddc2a2cd909662",
        "86ab982b9c873486",
        "a602bc40f611f78a",
        "50d7005330ea682a",
        "d9ecf722410ee383",
        "1436709a10ccadf7",
        "7dd23edf69413ef7",
        "c0980fdb17732294",
        "9baa2dc144b05497",
        "590a0f1a31b9d8cc",
        "13c666f49e7fb53e",
        "4899c851ad2143be",
        "8e1126b2f25e6bb1",
        "699304a3eb37fd3a",
        "cb72681b2caa8ef1",
        "c7177edaa6050399",
        "2ec88add294a2f3d",
        "5cdbb48299bd8676",
        "565b23c6cd952d30",
        "6eb4afb53e17fb44",
        "1c39093da06d4819",
        "f3cd96b0c304db46",
        "0048108a0dba8ca5",
        "7a18ea35f0a673c1",
        "ad398e1ebe662eae",
        "004b1b91d0cfb544",
        "db361b22932cedd4",
        "4db786c078b0b6ec",
        "c1d2ee054097aa75",
        "b9d2f85550be526e",
        "2d4427ef3cef2b2b",
        "e3904d5c7c928b73",
        "137927567f181ab2",
        "b60285fc58979da1",
        "a65863922020fd12",
        "6da27d41df014e2a",
        "24cc902a06dc5e10",
        "1140c94f62526692",
        "eeb066e2be060c7b",
        "7223746fd677da0c",
        "d486b978a9e4e064",
        "11da7a6083b5229c",
        "a9b6efcda2694180",
        "cf38a2299e307612",
        "e7f968a4ac7d85f4",
        "5df89f73fd4d6cd6",
        "c650db3c2e14d231",
        "1fa3c0986e46b2bf",
        "65dd81d6fbbefb31",
        "6cd163e1bdcad099",
        "ea18a506d357cd00",
        "42258c9114d5fb0a",
        "37342f30b599a4d7",
        "d13acd061bf752b6",
        "7ffa4aac39fdabe7",
        "ed9b65d0b69d9e36",
        "11daf20e41d3eec3",
        "e0f326eeaf9747f2",
        "c688b970f520c6ef",
        "9bcba8fe20684243",
        "d0dac885d618eecb",
        "d6fbbd4bd0bae1f0",
        "2acc941e2947845c",
        "9c6353cc786df35a",
        "c8991c74dc2560fa",
        "5722f5b4106d3ce4",
        "5ec72f625132be96",
        "b9963c9d030abe63",
        "7b21001ca437bfb8",
        "f5295ff52bcf3395",
        "1153889b954e08f6",
        "af0db20a5de37585",
        "4228198fa02771e1",
        "95ccc7844c300886",
        "ba9d5cb7162a9fe5",
        "4afe59221ebc9142",
        "826aeaaaca08e813",
        "c23095930b7940b3",
        "67d3669775bb9aaa",
        "4ec1469acaa006c9",
        "ec272969d298de79",
        "a5cad13407795290",
        "ec216e3ee317f0a5",
        "06ec47c5d27b50d8",
        "b49bc715151b3bfb",
        "dfbf36e8dcd03a45",
        "fb3be7ae6d22fee9",
        "a28eefdb305e4487",
        "8099aac20215f127",
        "2d08ddba9d624c61",
        "7317519b909887aa",
        "d25be9aad37ab4d3",
        "0535b6794ddc8e02",
        "dfa9c3748fd6ce05",
        "d83263381aabbf14",
        "55c16225217eb067",
        "84126f61e1b1c4c1",
        "286159b4eb6cb654",
        "36c6a92ed3ef6aa2",
        "f29869f4a21a590d",
        "3bf47f8b22a00819",
        "10f9b7ca9927bd2c",
        "2325b3f29d52e63d",
        "7ed57937a174dd59",
        "3170b5bb97806a24",
        "224a73833232c56b",
        "e7d8b7b08b320af9",
        "242f33c6c251f979",
        "89e51a6f371c6832",
        "ee791f45015d3390",
        "15680fec073a8910",
        "ceda79278069177d",
        "b1660e11b38b39c4",
        "d52e3540ff737652",
        "0827926cd47c7df2",
        "43c6722889567e3f",
        "430ddb32ff263b4e",
        "67055598532d677b",
        "469e841ab1ca6870",
        "85e6ac6dd19863ce",
        "147389c8048e0c30",
        "48a20461f8ff7733",
        "c0727761d13a5571",
        "5bffd9a72c2f3ffe",
        "02079c27eaca95c2",
        "b8ae1c6476b11fb5",
        "f263b6e08ccb3a32",
        "a9b587bdb3195780",
        "be6db74a669fdc1c",
        "9c91c11bd6dbbf78",
        "54ddea2b425b9156",
        "eb255d4c13b5569a",
        "9945ebf7ba34b2a2",
        "2bac3201fc727d95",
        "1c6a426f3af73500",
        "cc39a130f3ee13c1",
        "162cace9297dbbb7",
        "940b6226edcbb45a",
        "a5dca25d6d9a96ed",
        "f89698b140981037",
        "b380ccbdda63e3d1",
        "08f27d654fe51877",
        "ebf65885bd14fa17",
        "e6bfc673b4be2718"
      ],
      "_newsVolumeRaw": 117,
      "_socialVolumeRaw": 276.2
    }
  ],
  "articles": [
    {
      "date": "2026-09-07",
      "title": "Akulaku files for HK IPO 🏦. Bumame lands Japan-backed funding 💉. Global VC hits $227B but narrows to mega-deals 📉",
      "url": "https://dailysocial.id/p/akulaku-files-for-hk-ipo-bumame-lands",
      "publisherUrl": "https://dailysocial.id/feed",
      "source": "DailySocial",
      "sourceClass": "other_media",
      "summary": "dear subscribers",
      "id": "ce212d8a83a128a2",
      "domain": "dailysocial.id",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-352218e3188e943f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Cara Cek NIK Dicatut Pinjol, Waspada Dana Disalahgunakan Pelaku untuk Judol - topik.id",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOd3dOVXBrN195Q0VzYVJ3b2Z0TEJBV0pRM2tYcGJOVWd1cEVUdVV5SFN1UkRva29Cc0lQTC1jd1l6QlRQZ3oxRWVqaG0xVzRmTlNWMmIyZHBGSU9jNjRhQTR5UjhQM1NPT0JuSUdqUTRWUEI2a3FlX1g5TmJXa0hyUFJEbks3TThlOWxhVThPaUFTcFA4SnZtOXdmNA?oc=5",
      "publisherUrl": "https://www.topik.id",
      "source": "topik.id",
      "summary": "cara cek nik dicatut pinjol waspada dana disalahgunakan pelaku untuk judol topik id",
      "id": "694669cd708482ff",
      "domain": "topik.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-97610472146ed823",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Daftar 94 Pinjol Legal Resmi OJK Terbaru 2026, Cek Sebelum Ajukan Pinjaman - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPR3lhQUVMREJSZ1AyQ3NkQURlNnZsVVAybFlXRXBPMXBWUHNIdWVwdGV5N3diTmx0RmtOdkNWQWI1cTd2Zi1YRkFWRmFSbE5PbnFZdTZydG00dXRXRkxtT2JIc1VReGQycEJlcVAxQmdFRDA2RTZXNlRwVTNob1IyVW5qSWhncEIxMl9ja1VuelpiNHF6dkNaQTY2TFVDWUZ3MjZPVmxuR3hqZTdVbEFsa3VjMHgzUlUtd01JLWx6bUlwSkJhOExB?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "daftar 94 pinjol legal resmi ojk terbaru 2026 cek sebelum ajukan pinjaman bisnis com",
      "id": "f30f404c03cbfadc",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.9,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d91f1f8ae725e94d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Foto : Skema Tadpole Pindar Dinilai Perlu Perhatikan Perlindungan Konsumen - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxORXduNGwtSTQ0WjVUdkoyaWQ2RUk5U3Q3WktaZS10WVdXV1I4WHFqS25aZDlNbEMzUnBrWE4xRXFPQnJqbHliMGdmRE1YZkZCa29nWG9OV3A2dmZkMlR2VmZYTDM1UjRNbndIV3czVHFONmVWUnJneGFiTFVzd2ZmUGxCcUh2NTVQWGtMLVd2dzN2dGp6MnhDdHlmQjV3REkwajVuRzVxOW1yQ2FGWkpTTG9wMjBMaWthNE1N?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto skema tadpole pindar dinilai perlu perhatikan perlindungan konsumen kompas com",
      "id": "31584fe90a9c7131",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "pindar-tadpole-practice-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Hingga Agustus 2026, OJK Hentikan 951 Pinjol Ilegal - Tutur.co.id",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBOcXdGYzVaWDUzT1hialBmVDBsblpUZ1NYV3pzbVhzRW9zeEVUNjVDelJHQXd5Wmw4OVZkZWZVZ1Z3RTdLQmlNUjE1aVItSGt0UkFfM01Gd1FhRjZEVUh0Vll3SGhpVzAyY0F1dmdoZEwtcFJGTWJRQjR6RQ?oc=5",
      "publisherUrl": "https://tutur.co.id",
      "source": "Tutur.co.id",
      "summary": "hingga agustus 2026 ojk hentikan 951 pinjol ilegal tutur co id",
      "id": "6894185c84894d78",
      "domain": "tutur.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2b029ca8ce1ea614",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-07",
      "title": "OJK Catat Pembiayaan Pindar Naik 24,76 Persen pada Juli 2026, Nilainya Tembus Rp105,63 Triliun - VIVA.co.id",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPUmsyM2RJT3hXaVJJUE4xMm8yOTFfblFoLUdoel80NTRubkhyczlUSUtkSGdjMS1RMklIY283RW0xSFYyMmZhSk45Zkh2eG1BVWIzLUNiVUs0aWloQTF0TEJ2a3J6OXRvdVNaSzNkMzVFNVVtQXZMYzdlMzJ4Z3NyRmpaMUJxNDJmQ3JUMzNsNml4eDRJaDVpdkwwd2xCbHlpTEpZczJJcFBlVTZiUUQ2Y05JeUc1LUo2NnFEMlV3a3pyQ2h4X21rRtIBzgFBVV95cUxQU0xWSUdqMTI5OTlPMkx2UmtNd2tHQkZwX0lQRlVIbFNNakJoSE9MREo5M1VKWUJzTjlKU09rNDNvcy1RREFmRVJUQU5sRnluankwazNYMTg4bVhBSXg1aWd2eDMxc1hzWHd5NGpEb0YtaXl0NUhIX0J3WW93RXZRcU5xbHp1NnVHMzVGaFRCcDR6cWtLNWMxMkNrZHVFQm1tME5FYWUzZ0JCZmRBMEdhc2xORkVKYW1uenBZNTdlSU5JRnFFNFNfXzA3REQ3QQ?oc=5",
      "publisherUrl": "https://www.viva.co.id",
      "source": "VIVA.co.id",
      "summary": "ojk catat pembiayaan pindar naik 24 76 persen pada juli 2026 nilainya tembus rp105 63 triliun viva co id",
      "id": "6a721392f63ee79e",
      "domain": "viva.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-903aaaca23753a28",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "OJK Catat Pembiayaan Pinjol Tembus Rp105,63 T Juli 2026, Naik 24,76% - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPWmZKY3A4MDhkdldHM0FKdEpxN1lpWHRTajVIdzIwRW5IaWo3SW5feDJsRzdqMlJZdkhUNV9QZ0ZJcWg3ZGMtOUNJZklsLTYwV0JiNHNTS0EtUWtFZGRPUWJybUdicFkyMVExNHJjSzAwRzlmUVpuZjQxNWk3X18yTXRxcC1Ob1ZCRGU1SGdIcDVHeXZzeUVMWUFTLTMxZ01mVk1ud2dIZUw3ejJ5U3F4c0RnVUdBcVlhcjAzckphYUZ4TDlHblHSAcsBQVVfeXFMTnJVVllnY283TE42dk51U2RwSUNPQ2phaG1WQm4tSjlMX2dPck5oT3NTb0QtODhha3UzODdqdHpWRkVJeXVGd2h6N3lqb3RkZS1XRFo0a0Z2aGtSV2dFY1dtcTlvMmhRVFhRTFpnSUl1aWFmcHVvNmNBSnlYdHpkdVl6UVVvUzVkLUdLZ3pBb3BBMFJhU0o1Y0kwdmUwVS1CVlNCbTJ5XzV1dVlpVi1TdUxJMjVOWVpfaWtZRUIyd2x3ZzNJZ3NkSHRNRk0?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "ojk catat pembiayaan pinjol tembus rp105 63 t juli 2026 naik 24 76 cnn indonesia",
      "id": "8847c82d4ed1c0dd",
      "domain": "cnnindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-75ae317bd2123a32",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "OJK Catat Pembiayaan Pinjol Tumbuh 24,76% Jadi Rp105,63 Triliun - Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOQnBTVjlXd09mQy1TVEFiLU9YNEhPeHhFSkQ5R1RzRE9rc3JoVGtSN3VDOGVxODktbGw3aWJTWWtPSkRJMW80ZE9GalVqdkNGRlFWeF81azJoMGdUQnBXUm0zWEFqTS1wU3NyMUtfVkdEaDVDVU1XWHhkVFhHanJwdi1kaVo3VV83dzkzYlVoWUphQlN5YXkzTm1tdk41YWFSbEdPcg?oc=5",
      "publisherUrl": "https://mediaindonesia.com",
      "source": "Media Indonesia",
      "summary": "ojk catat pembiayaan pinjol tumbuh 24 76 jadi rp105 63 triliun media indonesia",
      "id": "db700f71c4ce25a3",
      "domain": "mediaindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9d2046a7b8ee9e84",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-07",
      "title": "OJK Hentikan 951 Pinjol Ilegal hingga Agustus 2026 - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQZDZPM1NpLXBNVUlyVVRTOWlXZm1vTDVxZ2tBNWlSY3F5clJYcHdSbHNaQWZkMHdtWkxCQm9uZ3hMRGFkRUdubC1mRlFZQjJ3WXB0VEZKWHNLdzRwOXdEZG1idmhwRXBnSmQxS0RBNU5XMnlOZThVQkFJSDFqZ0pweGdMNlFzZFl5RUZZZC10VGduSmtiSWpUV20wWHh2ZWtjdXltTUZpU0RNSm9wN2FOWU53d9IBuAFBVV95cUxQS3dZUGVpQmVZdExOSlRuVTJOV0ItQzVpUEpudXc5TjNHMTRCQ0c3N19BYlJicVFXbEVaWHR5Z0FlRXZWSUpPb2R4V1hJWHlVNjJpNFN1a1RpUXA5TGJnVW1vU0VIMnFmNXlZSXlxRUwxSTNibnAxSUltNDRub0Y1UWg1eHdteldlTlhlNGVzRTF2ck9SeWZwTGdIYW5HX0txbmM2U08yeXdYcnczdkNtUGdZc09xaUo0?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "ojk hentikan 951 pinjol ilegal hingga agustus 2026 cnn indonesia",
      "id": "a176e133eb0fc2e4",
      "domain": "cnnindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2cb7525ec6c8536f",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-07",
      "title": "OJK Sebut 7 Pinjol Belum Penuhi Kewajiban Ekuitas Minimum - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxONmVzVWlaTnRmZzg3RDZsaTQwb1I4UW1DWWRCSEdwa0JTRUtlRVNBcUFNT3lyZWhGQVNzWUo3TGF5NHVpdlZueWpuLTB4d1RpcnpEZm1sNzk3R1NuNGpER1JuY04yczJETE0ydXB5c085SGlFQTEyZUlEYkJFc1Q5OF9peUlaVF9IV19TV0ZJT1Y2MjE5SUl0ZURMOUVoME1BV0V6TmE1VWVyTnhjRkE?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk sebut 7 pinjol belum penuhi kewajiban ekuitas minimum bloomberg technoz",
      "id": "7c0db5e3b96ed83e",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-131f025105c6d15e",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-07",
      "title": "OJK Sebut 7 Pinjol Belum Penuhi Kewajiban Ekuitas Minimum - Finansial - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQMm42VGxfZmVrNFZ2VnVQbGVzdEg4UXJwOUpPdV9LS2xqWElvTkM4R0JYY0RlRVZ2NlZGMnJPU05kQk0wTjFpdzRlOW5uWGl4WlNNX1VKMDM5bXcwTGlxOElFSzZ6elNIQnUxN1kyV1dsQVg2eVFhRHVScG1FTjIyOGN0UkUwbTF6M1QxYmlDdXVyT3pRU0lkQ3NvV2lzeUs0S2piQk43dWZURjEtYjZPdg?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk sebut 7 pinjol belum penuhi kewajiban ekuitas minimum finansial bloomberg technoz",
      "id": "a447dc57ca2d059c",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-131f025105c6d15e",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-07",
      "title": "OJK Setop 951 Pinjol Ilegal - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5jR1d3VG1kU2NHQ3kwVUdZcmFrLVo1WEZfbTQydExtQlExMFZGcEJsTUtwYVRTUHA4UDJUemg3QnZwQm9ucHRwU0ZzTEVSNjh6ZGx0OVp4U2d2LTRXLWNpaGwxVDNfYXFlb1dvSlc3VXlMUG1YR1hMVmJkY9IBgAFBVV95cUxOYktrcHczRWd5NjhhTHI0ZTdPY3k3d2U0Z1ZoZUlrQzBDV0xQOVdxcVZwY29nTFpSWFlocmE3Q2VJX3JOaW9VWkd1a0Y5b2tKcGNVclVoNVFoc1N0VWxYNGpBYmdkU3hsWk5KN2RUOTZOa3FOc1hNbHNCWGtWN01WeA?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "ojk setop 951 pinjol ilegal detikfinance",
      "id": "f72eed9299bfd289",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fed7924fa192d5d4",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-07",
      "title": "OJK Setop 951 Pinjol Ilegal, Ratusan Investasi Ilegal Juga Ditindak - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOV3g4VkhvbFc3T3JKX0VNQlo5X3dudDR2MEJGRS1yMjJzVWl2dEtnQzZ4MGxvN3R6djZNQVBTaThsMk1OY0dhSTNFdTVVRVhjUVJHUVZwQS0yNklUeEtEUWlDRDBMT1BxWW4wN1lKSzljNkpMVUdTMzU4ZnF6TTUxX0M3X1poMld1Z19ZaUZ1a25ORk5ob0MzWjRoRXlWSkRRVXRiYjhIS2VlWkh1ajJhTXRJUThQWWxW?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "ojk setop 951 pinjol ilegal ratusan investasi ilegal juga ditindak kompas com",
      "id": "26fdc4d219b1fba4",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5583840e95a603c1",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-07",
      "title": "OJK Terima Puluhan Ribu Pengaduan, 951 Pinjol Ilegal Ditutup - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQZ2ZCZ1llWlJmQVZabnZ6SXViMi00YVVlNlFFRDM4RFB5VTBmR2N6OUNzLWwzRXhIa1pIdzZXcE5yd2o5T3BYZU9qaE5CSHR2QkJCcVFVNjdvd1o5RF91Mkl2cFZXbXEwR0RMS1ZzMTFJVlRacndWRkVmZnZaTTBzbWpHN0FPT2RCdG9USw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk terima puluhan ribu pengaduan 951 pinjol ilegal ditutup infobanknews",
      "id": "2ef7fa8cede72f29",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-043802d3c2453ee6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-07",
      "title": "OJK Tutup 951 Pinjol Ilegal, Dana Korban Scam Tembus Rp771,2 Miliar - AFU.id",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPYVFpZVJrN0o2bi00UDZ0Qm9nTEtYRGwzZ0lpbkVteUFNVlBHWFp4RU1wYlcxREpRN2ZrQ3lNMWQ4NnhoanFMSDBDMjRZQlVUbG5LZExidzZ2TVhScTY5bGlMOF91VlhJLWxpeDRrRlM0dkhTeDYxSE9kbG9XczNCdVlGN0xSb2VwUzJDajh6cTBqQkJPWGpOd0p2Yw?oc=5",
      "publisherUrl": "https://afu.id",
      "source": "AFU.id",
      "summary": "ojk tutup 951 pinjol ilegal dana korban scam tembus rp771 2 miliar afu id",
      "id": "62925b12bb22e41b",
      "domain": "afu.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 87.8,
        "label": "negative",
        "negativeWeight": 5.9,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c40db74390a67475",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-07",
      "title": "Pembiayaan Pindar Tembus Rp105,63 Triliun, OJK Soroti Risiko dan Permodalan - TIMES Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOMkFWLWRYaTNqWlZqRkE2T0c1cHZXM1d5dlYtV25Pd1hwQlg4U3o2WDFlRHVQV21NX1hReEdjZDNJajM2SHNCNThpa2xCQWVWSFg5UVV2SEhGM2RQbFdQRVExZnlxQU1Kb1YxZnhGRVFsQjRFVFFCcGJVS3hpNzZ2X1pLcXZ6Y1pSUFBnZUY5QlB5Y0xEc1dvbXRpdUc5WFBsa1VmZUJjZnVIOTRUYnNDeFpTSjZiRnhQ?oc=5",
      "publisherUrl": "https://timesindonesia.co.id",
      "source": "TIMES Indonesia",
      "summary": "pembiayaan pindar tembus rp105 63 triliun ojk soroti risiko dan permodalan times indonesia",
      "id": "92702693098299e7",
      "domain": "timesindonesia.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1d15ca59f32534d6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Pinjol Warga RI Tembus Rp105,6 T, Kredit Macet Naik Jadi 4,32% - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPLUtsWVBObkhRRnNfNElDalJWTDRZTXB6MGVwSUcwbE8yY3NxbUFjOE1BSG96WnlGeHFYQ0otRWFZZy02QXlDcW41MmZhVkpHd0FZcTFsMlQwRzJzTVdRQVhJSWFab1lqVk8xUllWRW5CMktUemgwS19ENG1wNG1RbWpmbVpsRXNoRnhxdEVnZ2w1ZHFXR2hwVE5xTl9BVWYtOWRVRnVUOFpIR1NsV0VmZnJLd1FWeW9HMVJmc9IBwgFBVV95cUxOTUNBYk1xTkxRLVBxN0JPWlU2cHpVbldhTjJuNXc2aTJoQVNVWUNsNEVrMDdVdW4yeThEclJVMHhJMUpjTDN5Q2ZEQkYyOGNSSkpYMFhveE9pTUdBWUE4UlRsSkhxRTNmWkh6dFNsN3Nza2RtSFptcTIxbWlRTGZUek95R3BsY29QQ2E5T0NobG1RQ2ZJcGZQZUI0RWVqRTVHX1VvTWw4bjFpTHgxSTRyQl91Um5iV3BPR1BHUXFvREZMQQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "pinjol warga ri tembus rp105 6 t kredit macet naik jadi 4 32 cnbc indonesia",
      "id": "28611c99e0d5acbb",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0be77de3961759af",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Risko Kredit Macet Pinjol Indonesia Semakin Tinggi saat Pembiayaan Melonjak - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPRXBNYm9hbl9XUnZzR0Y3dVFtcmg4WGNlb05PUUJxN0gtbzFrckNvb1dtNURLWFhXeUpZV2ZkbUZ1UGxFNUo4NTlvZVNxR01VVWFwYmFSSDQxOFp0RG9CMEZvSVlnbVAtUEtVSVlvY295VGJVMWVYRWVhaVFZSmlZRExPVlZWdEhDX0sxUmx5Q01EZWNZUkktZVRfZEM4ZjV4eWhza1JSVHNlaTM5aG9rMmozX29RLVFsZE93SzdxSdIBvwFBVV95cUxORXBiaUJncVpBYmxiRGRKeDRsVUhhR2tqMlhvbk1oVWZqdHJVZzFtc1dWYWZtbGYyblRVU1NBMG9XekhnOG8yUW9XYUtPUThSMkhIVldYV2VtT1dTcTlpMzFsdDJhbzlCdDE1WkZTZUYwRVY0VXZEalZXdi1kdFE2R3dfcGNrMWc5eDlRc1A0aUJueHZxOC1NWFNPMnQzbWtkMkVFNEpzMHlsM0d4M2dpSS1LMThGUWp2WEk3bDBlRQ?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "risko kredit macet pinjol indonesia semakin tinggi saat pembiayaan melonjak suara com",
      "id": "a4573b71ab6320e7",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3d80ff8c95bf61f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Skema Tadpole Pindar Dinilai Perlu Perhatikan Perlindungan Konsumen - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQT1hfempRb2dLWWxFWkl4X0dLanBBYjlZOUJ1Z2tZVjBWOU1NdEhzUzRiTEIwc25BRHhYYWtpczhJd3hFLXlQVS1XV1E5MGZSYWhfS0lKOFVjOElvM3pxOWdqTTNBSk5OY0lEOVVBaWpOZ2hEekwycHlzcXdqRjgwVFFPdGhUX2VNNjZRRGNKNDNhcEptWnUzOUR4MEp1VlhXZ09Dd0ZVWkJ3aXVGa0hKenJJX3FXeUhZaXk2WDAwX2FmVGNGT1E?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "skema tadpole pindar dinilai perlu perhatikan perlindungan konsumen kompas com",
      "id": "7928fed3e9737aca",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "pindar-tadpole-practice-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Skema Tadpole Pinjol Dinilai Memberatkan Konsumen - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOSWM0eGtrbmFuU3BWR2lOaG00TW9HZTFLRUlZNjczWmNJRmU4cGJyZDhjSDNsVFB0a1FKcWUyaDJudjF6VHpLQUh3aVh3cmNlTmVMcGx4Sk1VYThTZHNZeWFJQmh5cU5zYlhiWTc0YURzSlhrekdtQlV1QTJiTm1BY1JWQjVuQXRKVTlrSko1eHFmZ1hqa3NlYkpOQ016enFtZ2ZVLXZXYw?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "skema tadpole pinjol dinilai memberatkan konsumen bisnis com",
      "id": "7f50cef3c09ec6aa",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "pindar-tadpole-practice-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Skema Tadpole Rugikan Konsumen, Industri Pindar Didorong Perbaiki Credit Scoring - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPUnlmckk0UklRNEpuRnl5T01UYkh4WEJERTI5WVZjZEpZdlV4U3c1MGhlU3NlX2g5WFo2NzRRa3lVY3RmVko3Smtua3BpeU80cG5mdl8tbGZtUXdTZTgxY0pHeFYwaWZac21YVjAtUFNIODcxSjJhbHkzdTFESHRYNFRZQUtFMnBXVGNTaDVvdHBOOWdRekRWSVhSblkwTFZEcUJxY2dtSQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "skema tadpole rugikan konsumen industri pindar didorong perbaiki credit scoring infobanknews",
      "id": "5997577760101d3b",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "pindar-tadpole-practice-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Utang Pinjol Warga RI Tembus Rp105 Triliun, Kredit Macet Ikut Naik - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOWXhFck5nWmRTZDc4djVaVVl5cW9YMktJVm5IWjV4OUxqWDZNZVdoenowMzRrNFNXbHdyU2RCNEtxdDR0NFl1amJfbEp1ZmNpUFFpUTBzYVVraWR6VEEzOU93OE5FU1R0X2F6cTdaQ08xRHZ6eUY2WjRUUGJOM01oeXZEQnBRUW15b3Fib1I1UWxjX1pqbEZtd0V3ZUlwTDFCcXV1RTNZM0gwOHRwNkxyeEZ30gGyAUFVX3lxTE8yMHhwN3FnbWZSVlpTamZWWDAwLWdBbjBaQzZWUzdTX1ZEZlNfcjZFTlpHZEZYUTZpcktxeURxenJjN0hZelVSeHRsRDNYME9PRkdFNlhSSnpGYjluSUJmRUl5WkZOVHZBblhnZ1cxbERYRTJ4Y2tZeHk0NTh6OU1VUGVabVgyc2RXa1NSTTdRU1JkQzVwbkU3NTA1MldCNC1MYVBJeHVUNUtGNDRoQ29ER1E?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "utang pinjol warga ri tembus rp105 triliun kredit macet ikut naik suara com",
      "id": "c19a015ce8ff0e5a",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35b39e8b66118d55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Utang Warga RI Makin Gemuk, Pinjol Tumbuh 24,76% hingga Tembus Rp105,63 Triliun - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNNU44SXJXaXlZd1JfUEVadlp0bWhfeGVrQ1MwR1M5X25jc0dWZF9oSElDU196VnhTUXJTb19sdm03VEF1R2R1NjZTaVp1MU50X2xCc0d1amhKRzk2UkhaMnl4MU55SG91MkhtYWZOSmJUV3pHdHVWcDROSE9OVW1wSlhnNWd4Rkh6V25VRF9WUHREc1Y1TmFYSmtWV2tHX1BDd1BqWnVWaEM3RHNtYWtnbmpUMNIBuAFBVV95cUxOUHJSa3ZFRVJ1Tkc5UWZRY3dOZ3lUZWN3WFpnd3hwa3k2eUx5a0Nxbnh5dnF6RTVGeHkzQ2hqZXRqcndtbXZzY3lVd1hnVmoxUnNhVzZJcFpHX05VWGt1eF8zRGVpdGwzZkxlQzVHWXc3RTdEQWJZQUtXNGlEZlZOWUo3UVZOODdscVRDU21UM0FSbjVZQjF1MEpCUXl2aURuNFFYa2ZoZ3Y2bHRObzhDTHJGSzk3Mnkz?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "utang warga ri makin gemuk pinjol tumbuh 24 76 hingga tembus rp105 63 triliun warta ekonomi",
      "id": "4221aee227193a7e",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 47.2,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-228af539d49d7536",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-07",
      "title": "Warga RI Makin Doyan Utang di Pindar, Ini Buktinya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE45b0FkMWpxS0M1NHVxVXBNU19pQlNsUjBIQ0lOZ2M3X2x4Qk96bzIyY29qVFRjRktIdGVNNWtvZi1veEd1UWVWOF9iVWhKcHp6eTdHN19kbjlOVEhKMTc0SVVzWks3UGh2bTZNNzlURkExbTVyX3lTaGxRUTJXR3c?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "warga ri makin doyan utang di pindar ini buktinya infobanknews",
      "id": "5fbf2967ef51f883",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-83fb933240d1a192",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "54% Kredit Digunakan Masyarakat untuk Kebutuhan Produktif - Kabarindo.com - Kabarindo.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPa1phbXVGMDMtMl8ycGlSSXhjOHlqaFBvWVFSRGd1TzV3cE9NX2RMbTNYRXlicXkxazBYQXNEZjNTa0JzcWNNTk9KTXZXbDVyUmt5UTFka0pabHNLQ3VOdVlNZGs0WkczU3lITUJmZVU2eE45MTZRejZIUExlcFBmakFnU3J5TU9NbXlLcldEcTBJOU9aejZUb3FYVWNPdjFTTEhyUHdtWXowTnN20gGyAUFVX3lxTE95YjBGTmFwQXRJc0l2SFpkRzB3b0NzZVR0SHl0WUYyd1pfYmpyQkkybWRiODVVU2RZX3E3UE5jMXNOcHlaMzdsa0lZSTNWRXQtNkFIMEJfZmlsbnAtclg3bFdQTXJCWWRKMFl4d1QwZUdOY3ptNVFCOFZYaDNhR25Va2N0Ql84SndBdXRlMzUteTdXV0JTQTFCUzFvTDBIUkExNTJpZUswYlZPVzU1OG9ZX2c?oc=5",
      "publisherUrl": "https://www.kabarindo.com",
      "source": "Kabarindo.com",
      "summary": "54 kredit digunakan masyarakat untuk kebutuhan produktif kabarindo com kabarindo com",
      "id": "137b0f1879be183a",
      "domain": "kabarindo.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1f9d5348f7022df0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "951 Pinjol Ilegal Disetop, Dana Korban Senilai Rp771 Miliar Ikut Diblokir - Inilah.com",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOam9oaW9GRmI4MXR4NkJud2ZmLVlpZzlqWGREbnFjV1pNc2h5RGUwZDJybmZUV28tbGpCdExNMU9EYk1NLXNucEZ5S1E1VUxzOERjRFppOVotTUVjay1Pb0dvX0JOLTd6WDZwZldLaXptWGtwM3RIUDNieUlhRllkSE9rMTdHVHYwcmNMMzFvYV94N0tfV0ZJRUJVVQ?oc=5",
      "publisherUrl": "https://www.inilah.com",
      "source": "Inilah.com",
      "summary": "951 pinjol ilegal disetop dana korban senilai rp771 miliar ikut diblokir inilah com",
      "id": "59c2e261b47ac938",
      "domain": "inilah.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.7,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c2a3e199a22410ca",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-08",
      "title": "Foto Tutup Kredivo Nggak Pakai Drama, Begini Langkah Resminya - VIVA.co.id",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNeTlPZXFPY25yN2VzRUhPeE1WLVlUem5BZTdyVjZ4Sk9pVG5DM25mWjZtc1ZJR29FOE9MbEJYX2M2a1pSZVpYS0xKc0MxOTl2eTdscmZEYTJ3RDU4dkJXU1ZkZWZBdm5fMmFhcVk2MVZOZ3V4OHRpOUQzWWlGZkRteWw4ODdndTFqeGEyNWc4OHpISlNnWlE?oc=5",
      "publisherUrl": "https://www.viva.co.id",
      "source": "VIVA.co.id",
      "summary": "foto tutup kredivo nggak pakai drama begini langkah resminya viva co id",
      "id": "ee3c2c27bcf939b9",
      "domain": "viva.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ae9f1d89ad6bb19",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Kemudahan Mewujudkan Liburan Melalui Layanan Paylater - RCTI+",
      "url": "https://news.google.com/rss/articles/CBMijwJBVV95cUxNM1NiY2RoZDdjYjFhMzlIVmFPY0pXQUVYRlFtVUg3b0hDYXlGY1YxY3F3TU00SU5NNmtpYS15cW10RUtWaFBtSmNNd3FCQlNZQzdqdDFGN3RqTm0xVldPZVh1VThQaGVYN192dDFNaGxDNzlSNWM3aGNGZWZwbkYyb1ZaTXNrQkpMRWk5WnM2SnpYeUlSZy12c01LQUFCb2dNc3V1aElOSTdGQzBkMnkwbExodlMyUi04anZfSFdjWE5udjFVMWRXR243cDlFanZ0czIwLTNpV3NkYjlPekxRNzdVbVVzbmRlRVBPbV9pS3dnek1ZLTRwOVdSV2FTYTJadW9BWGNqeG11bEFLNklj?oc=5",
      "publisherUrl": "https://www.rctiplus.com",
      "source": "RCTI+",
      "summary": "kemudahan mewujudkan liburan melalui layanan paylater rcti",
      "id": "11d14f1570fc25a5",
      "domain": "rctiplus.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-980710e68289cf1b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "OJK \"Sikat\" 951 Pinjol Ilegal, Ratusan Investasi Bodong Ikut Diburu - video.kompas.com",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOd3pfQ0k0dFNtZm8wUEVTZXBlS3VibHRXclRrcm1aZE81WVRDSHh4Zi1GcFl0ZVpoQzJ1Y2pQbDBmbjQyQ2RHTFUyX3ozSTFjMUtDV19JRGJKenoyLWhhR3hYVW5qSG02aHBJSnQ0VHJoenlLQnpRWmVVRDlSeGxhMW1sc1l2QV9kQWVpUXd0dlM2dmJ1WjY0am5KSHRwS2VVcmMtTm93?oc=5",
      "publisherUrl": "https://video.kompas.com",
      "source": "video.kompas.com",
      "summary": "ojk sikat 951 pinjol ilegal ratusan investasi bodong ikut diburu video kompas com",
      "id": "f988f9ec52221c22",
      "domain": "video.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-42d635defcaae85b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-08",
      "title": "OJK Catat Utang Masyarakat di Pinjol Capai Rp 105,63 Triliun Juli 2026 - SuaraGarut.ID",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9DUWRKTHBPLTJIRlNWUnZJclJXTGlPcHNBa3YwWm5vSVlxMk5wWGUxaXVFRmlwNlJkcmQ0NEVJTjd2SUdROEMzNWNSUXlRbnNGZC1sUGRPYktWalJLVWc?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "SuaraGarut.ID",
      "summary": "ojk catat utang masyarakat di pinjol capai rp 105 63 triliun juli 2026 suaragarut id",
      "id": "1bf0ec9d143b3daa",
      "domain": "suaragarut.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee57dc6e3d20caa4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "OJK Hentikan 951 Pinjol Ilegal hingga Agustus 2026 - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPdE5jNXF2RlN5T1ZQZV9EZlhiMGc1b1hoMHNZRzhtd0o3WWtfRXIwdktUQVRhajN3WHdMbzdnbmY5SEVqVmlacnpkUGVSUFF4OURKRzltd20zS29lQ0ZvTUFxRWRDbFlCa1FHdDVkblNlZnVyWlpJZGVBVHdMeF9nV0VTQU92OWFMZkhFNDZ3?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk hentikan 951 pinjol ilegal hingga agustus 2026 rri co id",
      "id": "030a5a438831cfd8",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-902ce9f627ea5df6",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-08",
      "title": "OJK Terima 30 Ribu Aduan Sektor Keuangan, Pinjol Ilegal Mendominasi - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQOVU2SHdNNXlZRFBiQktLNDdjRTh4ZWRBSnl1cmtrR0F2Y0EtZGdKalVuYkZaSG9pQm9wV1hNZnlYOXhaWG8tZTdBaUVoRVJfWUF4SUJreU1oVV9IWVZjQXFfMWtMOW03ZGZaSjNKZnlILTdudU0wZmhwQ01iZ2dmd3g2ZnZvY1plLVNUbGo1VDhheTAyc2c0OHVRUkt5OGdPelFGY2FLa2JtdmdGU2JvUVVQNNIBswFBVV95cUxPNXlaX3hLb3ktc2hSblR2N0Q0UEJXVkJsWlhlMjJIZi0tT1JtSU03Q2dUQnlIekJ3bDJBVHQwTHpUZXpuV0xjaHlOdHlYU284eENKV09UTVBlY05GUEdnNlRJSV90eHhhY0pLWllCWWxEc1lxWHVLeU5hc1FqRWpvTUlwcGZNQnl3bmxnXzdqMWp3S19EeVllbDRwYjZReEZGcWRLSmp1V1VTVzg2UEVrOTY5dw?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "ojk terima 30 ribu aduan sektor keuangan pinjol ilegal mendominasi suara com",
      "id": "92e2c7dfc2ed9d6e",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-870dc57de18d4611",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-08",
      "title": "PT Inovasi Terdepan Nusantara Pinjol Apa Saja, Aplikasi Apa selain Kredione? Ini Alamat dan Call Center Kantor - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxNREdJVGRzTkJuUUUweHUzNDlQcnhGeEdZbDdOU0hvX1V0YVo4a0M0YmdJTVdZQXVZUkFidHNUUFExNEJVQVF4TUQ4am1nSVIxcm1lTkJWSVVhTzV1VWxURTRjcGJpSEp3UkNwM1NNRUNvdUpraFdmZHMwQ21nLWtjaC1MNW80SDlVYkNINlMyMjVDNEViTFlxeU1BQlpYSjFqTmtja2h3TndpcGVyOXhzYUxsQVE5SkdKYmFoa1FPT3Y0d19DN1F4ckdwUmpudlAySkEzTFZyRGlyVS02cHdvQnZUaVQ3OXVReDJYTG9abWstRVI0dC1CUm5mZ9IBgAJBVV95cUxQb3Y1Zkxfd1NjT0tkMWdnb2dZaWNqYjNjWHQ1VmZHSTRRSndNdEJMLVlxdGxwMWFrVEFMVFd5T2dBNGdOejlSMlM2UDNtVWEzSTZSNVp4VDlsdm1tdUtZQlR6Y1VqWklyT2piX3pVTVBXa1dIR2dnbmZmcW1YYm1VVUtEMmFuTm1OUlpyaGJSYWY5SUF2VWllWTNTS0w5RlVMX3NnSWV1SWhiQlZDbjlkSFZmUW5VWGpmUjZucGVXcU4wdXZmNno1dG80c000Y3E4dVZWUllySGNsZ1JzaGJXUUc5d09LemJxTGhleElzUXE1cEdWdHhnQlJMUzYwelBj?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "pt inovasi terdepan nusantara pinjol apa saja aplikasi apa selain kredione ini alamat dan call center kantor berita diy beritadiy pikiran rakyat com",
      "id": "28d6046be7f31778",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-358752d231852d29",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Pembiayaan Pinjol Tembus Rp105 Triliun, Naik 24,76% - waspada.id",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNWEQ2dGZaZXllWEh3ZDg3N0ZOYUJUR0xBb3JnLXI0TkREWDVKLW0tbE1OTzhpbnRzU2oybDlSa0UwUG5zWjZuRGlHdDY1NlZ0MlpoX3dpR1p5UXhoc1ctSGtvRXFUSHNZYjdFNy1vZ1p0V1Bjc2Q0QVJhR1ZNSko1N3hWZ0VvZw?oc=5",
      "publisherUrl": "https://www.waspada.id",
      "source": "waspada.id",
      "summary": "pembiayaan pinjol tembus rp105 triliun naik 24 76 waspada id",
      "id": "396dcfadd416d30a",
      "domain": "waspada.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-568d928e5422c1c8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Pinjaman Daring Tembus Rp 105,63 Triliun, TWP90 Naik Menjadi 4,32 Persen - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOWnp2eTltazBJSDB2Tm9fOGY1Mm5XRndPaDZCZEl3MmJpWjE1MlNLcXYtOTBsZDZIWmxrODR2eXpVLXZHWFhnS3BoOVl0QVZTcmFkN1dRdXZsUTktclpENjdleGJIbUZEQ1NZeklUOHJDaVNFdWxKT3BxSnM2dE1zVEJ6RmU5NzF5UWhvRTBQSlVJb3NKbW9ST2ZOTGYyY0RRejhvbHZoUVp4RVFVazFjbHVXdw?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "pinjaman daring tembus rp 105 63 triliun twp90 naik menjadi 4 32 persen investortrust",
      "id": "dc8794041e0ff338",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.8,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe1963100acf77b8",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-08",
      "title": "Pinjaman Online Warga RI Makin Banyak, Tembus Rp 105 Triliun - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQNjNoNWJoZDd3NU5LSm9jeUFDblpIdW1WZlI2bUFRWFVWaE80V1R4ZzFUQ3BzYUpMQjBKQ1U3cVhBbEZYN3pqbEpjWVFERGpvd0d1UGt6UlFmVEw0R2V5YWRhcktrcXNpRTFfV3otemtwdjZISndHWkRlVTdCVmtnNWxXVDhCWE9SSFN6SVBHalZPODBqVmxQa1FzQ241QmN5OGU5RkFB0gGrAUFVX3lxTFAyYTIzdnpzSjFITFRzOE1HeWkzRGpTMy1sVXQyS1NpZ1hFSkNZQ05tSXBNdXl4cmF6X3hnd2pUSzI5TEtETVRMaGpwZ0I0U1NDTzZyYmNaOUtzWTVsRktsU3haYTFoajNrbEpYNXVLQVlKbnlRdkVGZ1ZmcDZnWWo2Q252NXJibFZHVXhUUWpaRnB4TGpSNTVkYUNYbklFUzdLNUdCREtYa0tZYw?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "pinjaman online warga ri makin banyak tembus rp 105 triliun detikfinance",
      "id": "154daafa2a9e522f",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8fa48500a7c91ecf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Pinjol Ilegal Terus Dibabat, 951 Entitas Dihentikan hingga Agustus 2026 - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOY3cwelROc2swSXpvMDVMNmExQzhnN1B5VDBkanZ1ZlZ5aTM5dy1YNjB4bmpONGZjLUVxeDRXSGtTMW5zS1FwWllsTEZ2UHMtNUl0LTBtemlLZ1Y3Q2djbW00X0kzdkRSMnZHeEtlcG9LcV94ZjAxMFoya2h1M2pXb043UXdzb0gwQlZrNXVWRWV2RG1tRjhlT2dWdXR4eDdZTmlwdXVlelLSAaIBQVVfeXFMUDI5UnFva0tHU1FHQ3RmZFVwZkVTTUZKR1h4UVU1Y3BEQnBZQWM4OWtEQVFsbVJqbENNazdlSko3Zm5OcVk5NllLUXZSTjhXek1QbHpDaEgwdkNaVnhvcFUzS0paWXl3UFpxMW91eUVEbEMzMXdyZk01dHVvMGlKVWkzVHVRaExvWkNxRXRJWWdLR0laN2VJakZZbjduM3FVTE5R?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "pinjol ilegal terus dibabat 951 entitas dihentikan hingga agustus 2026 kontan co id",
      "id": "9773d0dee0773ce7",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3fe1434003271718",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-08",
      "title": "Rasio Kredit Macet Pinjol di Indonesia Naik pada Juli 2026 | Pusat Data Ekonomi dan Bisnis Indonesia | Databoks - Databoks Katadata",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNQ3B4WkxsNjl6OHVJamduY1hGUVFpZFg3RTIyTlBFdFFvZEhRU25YenhScUpPNlFjSFNMVUh6UU1HeDlWckxwZzYwX2dhSjctbEczNE9YclN0Z2d5XzhjMzZnU2RfV0Ffa2ZGTFk1RkRWRlBnMkJvdW9ocV9fZWxleEVtblJhQ2o1VVRDaVh1c1BjQm9BMHQ0cC1pUFQxZ21EejBYNDZkSmI1bWZRX2Q0OEdnejRKalE2and5NzBsRWw?oc=5",
      "publisherUrl": "https://databoks.katadata.co.id",
      "source": "Databoks Katadata",
      "summary": "rasio kredit macet pinjol di indonesia naik pada juli 2026 pusat data ekonomi dan bisnis indonesia databoks databoks katadata",
      "id": "4e69023ed2b4f419",
      "domain": "databoks.katadata.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a76bf3519ed0674e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Satgas PASTI Stop 951 Entitas Pinjol Ilegal dan 242 Investasi Ilegal per Agustus 2026 - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPWjN6TUZkV0hLNWE1cVh2RkNPN3JPdGFGS3Q5UzJfY1hQNS1BM2VVMm1WMWEyZTRxcGNVN1RGYmdNUjZqeEVQNjF0eHJIb3IwWmZEZTcyUW15VzNUY1VEa1pKMUo4X0c3WU9WOHZKZm01NG5hU0lNWi1WXzhsaWNBTl9ZRDZXUzNBeW1jRGtBYmVNaGJpSG8ybGxJUGVtTld3Mk5tYTFBR0d6R3M0Q0VRVFdCZEtHMERNTWYxNdIBtgFBVV95cUxOY0pKSlowcC1rVTlwUnBtaG5fdU5ZeGN6WkZ3MUxrMnZZTTBLczIwbkJseHJvVm1NQXhqUE1fVFJ0ek0zTmJoY2czNldJcm8tem9wZnNndWNGaG9yYm9ibW5WZHk2am5zbFZ3LXVSM3FHNG0yNDF0TTY0Y3hnb1VKQ1lsSU9NeTRscG52aENSQ0FqODJKeDIxcGhXTkctcy1xOFFJaVFXbHVDSmt3MjhUMkZwbDhtdw?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "satgas pasti stop 951 entitas pinjol ilegal dan 242 investasi ilegal per agustus 2026 kontan co id",
      "id": "5021546f4d3445bc",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67d098399a486696",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-08",
      "title": "Sidang Penipuan Pinjaman Digital di Surabaya, Terdakwa Disebut Gunakan Identitas Orang Lain - beritajatim.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPcmdxbXJ6Y1NOVEdEOVB2RXNjQWVBckdlT3lzSE1RUVdGdEJYYjdFZkpuWXhhYUkzNm5aYzZBalY5MmpJem43WlZfX2NMQVlGdlFibWw2QVF6SFNweVJDMDVmUGo5NU9HYk1hYlM4bmpLSE81bmU3Z1UwRVZyb3FybDRvaFA2VGxVSmNWZUhVbkhRa1JKMjVhREJBVkx4VUh5LWhjaXV2SGEzbFRGTFg4aWZZNmY?oc=5",
      "publisherUrl": "https://beritajatim.com",
      "source": "beritajatim.com",
      "summary": "sidang penipuan pinjaman digital di surabaya terdakwa disebut gunakan identitas orang lain beritajatim com",
      "id": "d2d7ffceea8ec617",
      "domain": "beritajatim.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d98b3779aeab3f21",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-08",
      "title": "Skema Tadpole Pindar Rugikan Peminjam - investor.id",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBxZ2s1eTRBaGkxTXpseEs3LXpRMzMzS2R1SmloVkJ0c3ZBbTJ4aXF2NzNpU3RYQXlUS0k0Q3FjV3hZOVlOaDJqZG9PQmFxbTFpY1dNYldqbkgzTE43c0N3UlhYS3p6Zi00bWctYmExb3RwMFRMUXpYYzAydFQ?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "skema tadpole pindar rugikan peminjam investor id",
      "id": "e9b75ca3f02d73ed",
      "domain": "investor.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "pindar-tadpole-practice-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Utang Pinjol Masyarakat Indonesia Naik Jadi Rp105,63 Triliun pada Juli 2026 - Databoks Katadata",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxON0J4bVc0Ujk5UFZpRmtkYlBMUE1zOXlGdzh4amJYM3lxQzN5b085Wm1lcFdseG9uZTNRWmVQQ0tZdjFMTTR1MEpoa2Z6b3l3VjZ2YldNQldWaEp4OExJaGMyLWpjdDEtTS1fX0dESEMwTEdVSEpTa192UHVDc0M3dGhuZzdOYkVmVGxYV3JOYUFOVUJwbFZ5VG5nVXozY3dYWUxCaERGWFZoOTB4YlNCR2ZBcEJyR3NOUVlMdmVSNmpFV2Fjdkk5TzVtcThwR3RJclpQZGJB?oc=5",
      "publisherUrl": "https://databoks.katadata.co.id",
      "source": "Databoks Katadata",
      "summary": "utang pinjol masyarakat indonesia naik jadi rp105 63 triliun pada juli 2026 databoks katadata",
      "id": "eaa7f508bd621024",
      "domain": "databoks.katadata.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1d9c1dc804ebe468",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Utang Pinjol Warga Indonesia Naik 25,7%, Tembus Rp 105 Triliun - detikcom",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPdngwZTJLYjFsWXJnQnBSR05TdkZkWk1hcmZuNTZKeWtBY1NyeFJWTjBuNFkxdFZ6anRHTnpaU3dKeVhlRXVhbFV5eTg2VWlmSHQxNmRaOHdvV09PeU9kYzV1QTNCeWtOSFB0d2o2LUxrbjdDU2xXQ1lsV0ZuaWFRTDBPcmx6RWw1ZWNHME10dms3dVZzZTU1RDB0Uy1ia1NKdlM4ZEVCRnfSAa4BQVVfeXFMTkxVNzBSY0ZQSkk0cGx4dERoOUtoeC1kWUhFVlptRkhjMlZLVDNxVE1nMFZsUC1TN1IzTXN6TXVOQndZbEZtbTh4eEpLUVpjNHJlOHRvX3dQd3J5S0lCcjR4T0FkTExTWkNLSmN2cm1kUzY5dG42WWJqZGVRYjhnU1NjZlkxMFhkSk1EdGoydGFIanUxSHAwMi1SQ1JETmU5VnZpYy15dFhHR2pTeGpR?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "utang pinjol warga indonesia naik 25 7 tembus rp 105 triliun detikcom",
      "id": "9bcfb1ed0761fdc3",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b42220c823b3d188",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Utang Pinjol Warga RI Tembus Rp105,63 Triliun, Naik 24,76 Persen - detikcom",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQcWVWNXc0aGlDa19jUVZheVdobHdPSm9XRFFsZUhTQ09tSXAxTGlwRjdpNVQ5bEw1MzBDOTlKWmVHdm1zMHNoTVVPU3gyMnNBM1JEZG1IRHN4NUdZZHJyb0J3MFcwUm1ZdTd3X3VMZEdsV1VhemlnR3Z6WGZkVkdGTmMybFZtRjFWUE80VjJLekRLNVJwR2lIX083QUJrRHh1WXNTZXpFUjNjWlBs0gGyAUFVX3lxTE1ubmhsMjVCLVJ6MmwwSEpRQ0ZvMV93bGpDOUN1blc3dDd1M0NzM2ZHLUZtSVIza3VIVEphaEs5T3RTYjBXdnZsTGdBTU1fdXZSSzJOdThTZjU5MkNsdEstTW15T2hYWV83RFhFUmh0Y2VpQnM0eVNvZ1J5LTF2amswaVlPNUZLRjlzTzZDZ1RiU09HRzdjc3VPQUxtOU1MbkZvSVRSRFlQTmxjenRUOEtHV2c?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "utang pinjol warga ri tembus rp105 63 triliun naik 24 76 persen detikcom",
      "id": "4c7fdfd18eccdf98",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-68e0844f4b7ceddd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Video: Pinjaman Online Warga RI Makin Banyak, Tembus Rp 105 Triliun - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNRS1nUDBlREFpODBoS0xfb2N6eTV0MjhwRzFkbzlfeTRPVmpKcGR2UDl6R0RwQ2hBdFZseGhlYm52U29BSlVMLXJaV1R0S2hDRXhYZ2NueVpXek9yTzBtV3BWLUxyVWF6RlRlVHdfTWlsVl9USklKVXM5c1hqbUxCelpvSFFLbVdLUWdVR2czeUhkdEtHYjk2R084WUVNeHFYOXNqVFNIcVBweEM4SWtUa0pEMGVEWXVlOGxUcWZweDdsZw?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video pinjaman online warga ri makin banyak tembus rp 105 triliun cnbc indonesia",
      "id": "338e3088e2082ec0",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aa5824c4cb399c43",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Waspada Akun Palsu Mengatasnamakan Kredit Pintar, Simak Cirinya - kreditpintar.com",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQbkxTb2ZPZkh4QlB2MmRCRVlZTjZhRUlvcHJ4RThScVoxVXk5MjZ0UHNIVXJQMWxKV1BrcVh4UUtnSTFTaURpaGhYNW9laFJURGRZdGNrLTZ4VndKSXJ6MlhPQ1FlbjBrNWhVT1ROSE9GcGlGcTFsMW1CZjhfeURNY0h3UHEzUVVOZ0sxcGV3UTI?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "kreditpintar.com",
      "summary": "waspada akun palsu mengatasnamakan kredit pintar simak cirinya kreditpintar com",
      "id": "2110353c37bff4dc",
      "domain": "kreditpintar.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8f5086fd06340fab",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Daftar 1045 Pinjol Legal dan Ilegal Terbaru September 2026 - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNbF9FSjd0djN4Y0l4M1Z4NzRSVlBtRzg1TTkzWFVxVVhnSEtsSnJ6bHFkemg1SksweFJhZjBmYUd2TkI3bGlTbk52a2pKdnRaNXBYMlgxZ1pseEpGZHZxSTNLYllsLTFmU0tubVBmb0V1OHhzWV9vSkFiUVIweF9QSGNIUUR4SkxZN0o2UGxxcTZxWVVMWjR6SWJRaFZxUzA5eE9Zbm1nNk1EQnRsODk2Y1ZFbw?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "daftar 1045 pinjol legal dan ilegal terbaru september 2026 bisnis com",
      "id": "a6d073897854a294",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a521018861b93377",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Daftar 94 Pinjol Resmi OJK September 2026, Cek Sebelum Ajukan Pinjaman - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQUkJKWXdZT3pleE8yVlVhM2tLMFRWY3o4WHNGLWJNcHZnNjNHWlVQN0JPTDVYZmdGSG9WVk84M2UxOE51SnNJbzd3STA1S1k2QmlhcmpjSklRdTdwMktMZ0FYbWNlWWI1eUhQN1ZoSlRndmlSYUZNQS02c0cySnFDci0tMkhBRHRSa3VkSDVNcjFEVHZzNTFxOUZsUmlXYnJnVjNuaGk5Vkljalc1cTN4Vg?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "daftar 94 pinjol resmi ojk september 2026 cek sebelum ajukan pinjaman metrotvnews com",
      "id": "3ac967167e6e5255",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b80f9763cf5edbc7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Daftar Pinjol Resmi OJK September 2026 Terbaru, Jangan Sampai Salah Pilih - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOeWVUVFUzOENicDBIRDQ3SW1iVDROY2ZQNWdLQ09jbnBvZDd3OGhWckxBWG1yZ3AzcHp1bXJFWTkzamUwQWl0V3g0aFkycWlvdGxfcHhwYmpOMU5naUpfdVNnM2czdGZVTy1Zd2JISm5NcENjb0RxMzVzVVNHT3VvZ0lZanJCV2hYaW43bjJSNVJtNzBJS1VlNXlMTURZUE9oT2Z2NmVIRE5peU1qUjN2eFItX3V3VzIwY25iQ2x0YXo?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "daftar pinjol resmi ojk september 2026 terbaru jangan sampai salah pilih kompas com",
      "id": "cdfd4b473971a997",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-66df4b43a8428984",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Foto : Daftar Pinjol Resmi OJK September 2026 Terbaru, Jangan Sampai Salah Pilih - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPbVYwa2hYbXRjZE0tRlpUeXlRbDIzTUlrRjdRTHlJTjRJX09NbGRsWDd6SjVJNnd5X0ZsQ1Bob0RXMnRLTlhJdzc3TWhvWDBCUjlGRzBtSkRBeG1DM1RQcVBDTUZTeV9jaGVXTVlmeFdWR01WMDVKMExUcUdNYXd6aDlUOHVCMjlHSkMwZVFvT0dTVVJZNmNyakloVEE5ajhRRG5oUnl3Sm5XTGVhTFRmcGR5SFFPc0VIc0FGYWNwTFY0Zw?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto daftar pinjol resmi ojk september 2026 terbaru jangan sampai salah pilih kompas com",
      "id": "f27ebe82436bb8fb",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-71ab4df409b3e9f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Kemudahan Mewujudkan Liburan Melalui Layanan Paylater - SINDOnews Lifestyle",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPVllIRXBaaVV5M095cVdyLVpkaWprWnJpaXBIVVRDYnVJWWpVRlZnR1hEYjZLUWdGZ0VzRkJsSElDQ2xYYWd0eng3TzRIZWZsakppeHJJam10bVBPTjFodG9HYy1DOTRUZmtSZ0RjUGNyZmwzWGE4OFQzYzdkX3pvZkxmZkU0X1ZPN3ctRHktLXBjNWZyNVJNQmJ5VlpGNThremxWV0NjWmJSemh1Q1c3SVM3WdIBuAFBVV95cUxPMV9lX2stVDY2WWFYclBLWHBEekVqREZRSFR2UGQ0YUZoSXlZNXVSaWIwLUVTbTBqZ0M3aWF4WHIxdjdxOXdGNjdKV0pxUVlUeWpTaWxIaTI5YlRtZUNtUi16dmdLLUtNOXhDMnV6RnFMLWVBZFJKdV9rYk1VUHJtRUVBbVpDSlhMd0M1QVgtaG1sSjM1dEhoU0V3NDZ0Zl9PbXpqdDM2T3BzcG1aSUVjYl9BZ2NWam1m?oc=5",
      "publisherUrl": "https://lifestyle.sindonews.com",
      "source": "SINDOnews Lifestyle",
      "summary": "kemudahan mewujudkan liburan melalui layanan paylater sindonews lifestyle",
      "id": "ec2b00929115f688",
      "domain": "lifestyle.sindonews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5f2f198565873746",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Kredivo Catat 54% Pembiayaan Disalurkan untuk Kebutuhan Produktif - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPZUxFREExRXVzWlRHdVZwZHY1dHNsVHRyMUdzMUEwZEsweU4wdXV2cFpHM0ZzWVRQTG52VDk0UVh0U1NWN1l2M2pZZHNRM0xKUVlOUU9OLVB5UHlsWWFMREtKUFJQdTEtVHNYeHBVMUdDV3otdGFLRm1HZWFHWkdpc3picXhXTjhBTWZIZGJtWElKTkpXMnZYVHpKQWtZUDRDbjh6S2VtY0hKUQ?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "kredivo catat 54 pembiayaan disalurkan untuk kebutuhan produktif investortrust",
      "id": "2df0bd9428d98852",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c0b5df1d1ca881c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Literasi Keuangan RI 69,57 Persen, OJK Soroti Risiko Pinjol Ilegal - Ekbisbanten",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbkpCSnRGZTU1YlJ2OFVocmVFM0w3dmRNMUhHcTgwZGdYYXZZR2YwdzFIVTJ5ZlFuN1ZlclFreFVxNDJTNWlGN0dzVGZkbENybzdacDR3VGNsMTh1UmpMTlhlMVEtTG15YnhkMEtyWEFlRzFPRk9MVTN2dmxnMnM2Z0RVZnR3Tl90eFlONjJ3TXByOWdzUzJQMnNQbGs?oc=5",
      "publisherUrl": "https://ekbisbanten.com",
      "source": "Ekbisbanten",
      "summary": "literasi keuangan ri 69 57 persen ojk soroti risiko pinjol ilegal ekbisbanten",
      "id": "780c86e0a204cead",
      "domain": "ekbisbanten.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cdff3ab7db0f2aa6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-09",
      "title": "Modus “identity theft”, Ilham Bobol Data Kredivo Pelanggan - Analisa Publik",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQcVlpNkp2OGZoNm9tUHJGSXp3QzRlamI1RFdFcmNkeHJuaFVjeDg5eVprWWFWSlFJVWJ5MmF6bWVsQ2JLc2QtQ1ZUZ0szb2d3SFNzVUNkWW5tODludmFzV0h1VGlndkoxYXQ5emhLQUtJR2ZjQlpTSk1fVFBrV2pvN0tiRVdHalZk?oc=5",
      "publisherUrl": "https://analisapublik.id",
      "source": "Analisa Publik",
      "summary": "modus identity theft ilham bobol data kredivo pelanggan analisa publik",
      "id": "2c0be31ff2586a28",
      "domain": "analisapublik.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a2077c9555bfeb61",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "OJK Terima 30 Ribu Pengaduan Keuangan Ilegal, Didominasi Pinjol Abal-Abal - beritajatim.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNXYxbDRhMG45dUg4MnpFS0p1S0Y5bEtHSllCZkFZalk1MHR3VXVDREJJVHJPX1AwaU9TRWx5b2xRTDFhdHJPRUlYSlJ5WEJQVXFCc3BXZ044SGV5ZVozdzhYeUZtVlNHam9xeVhFcXU0azJydTFXVFpYcEh5R1ROOE1HWkY3LVhtX1ZmaHlYcEJqeXVLUzR0VjJIU2M?oc=5",
      "publisherUrl": "https://beritajatim.com",
      "source": "beritajatim.com",
      "summary": "ojk terima 30 ribu pengaduan keuangan ilegal didominasi pinjol abal abal beritajatim com",
      "id": "aaeffc2e1a81c36b",
      "domain": "beritajatim.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b9cc80ae3f65fc96",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Pinjol Bisa Jadi Alternatif Modal UMKM, Akademisi: Perhatikan Legalitas dan Bunganya - TIMES Indonesia",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPRHdrbE5SbWh0MXlscnBsSFV1d3NUNXlrZDJnSG9peHo0TElnNUFoeFRhcmVzVFpXTVhfUGVxV190dEN5YlJ5dFF2SEYzNzRJVjR5QS1wZkZyLVZiREdKX2R4d2pMU1BQS1hmTm9TZE51aWU1SEpBUWZabnI0bUxmcnAwczA3V2hTMkpLdVkzeHVhVjYtcUctbGdJZGJMaXA5U2gwaHRCMkhHNzdjQThEdmZXQm9OZ05OY1VTVHdwd255dWhiUEU2YWZJVTQyVUVn?oc=5",
      "publisherUrl": "https://timesindonesia.co.id",
      "source": "TIMES Indonesia",
      "summary": "pinjol bisa jadi alternatif modal umkm akademisi perhatikan legalitas dan bunganya times indonesia",
      "id": "05d0442c4d842c2f",
      "domain": "timesindonesia.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6afcf968177fda6d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Risiko Pinjol Hanya Modal KTP, Ini Penjelasan Bahayanya dan Cara Cek NIK Disalahgunakan - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOZWtHdG9LWnlDSHpucWxkT090WndtSGR2X1dUZWw1UmxyM09SQlVPZWd5NDdVQWp5eGhWTm1zRlJqZXcyeEEyZ0FNM2M4c2dCVGVqTTNVbHFyZTVqZktkWEdJZFozVlBFMTNlSnctZzRfem9paXgzalFoYXRFbXZWQldNMkRuUGJ3N3hwcDVrN1RTcXNLdGhCbW1CcVpoVUxZZEtRTFBDamJjOEt3VW0wSjFEaUhDYlVOTEdqMjQweDJfS0UteHZZWW1nNkRaaXlKclJDQ3paTkY?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "risiko pinjol hanya modal ktp ini penjelasan bahayanya dan cara cek nik disalahgunakan bisnis com",
      "id": "6fa1351a7709d31c",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c22f6c5ad798fd51",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Apple resmi perkenalkan earphone terbaru AirPods 5 - ANTARA News Megapolitan",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQY3lQcnJXY015Z2hVVHFnTlVsZEdEZF9pUk5KbjN5dW1VeXkyV0hqYlBfUlk4UTR3cThuenM1QWZfWXU2RHM1TDREWlF3TVZqdktDRG1aUnNHYTdVbjJBQUJ1OXp1ZFNPMTBjRHdoSUxlTFI4eGVMWVpzaEwyTlgySWJIWHNBeFE1VzF6WjZKWm42M2JaaGREMkVNQmRDZWhi0gGmAUFVX3lxTFA4UlE5SzluaEZ1cHZLcEEzRkUzTGhhMmhOQ1o5MzFWeFJHWGc3aDBvOGNOc3RuekFHMHYtZEVhMVN4YWVCM20yYllIdERuWlVONFA1dGpsVXpBODVrTDhiUDB0akNhZ2Q1LTY0YnpRcjVIQVlBTXRYNHdEVFhkTUlDNDl4SXJXVFJLN2gwbWg0clF4UUtwS19obzRudlI4Vk5VZDZ3dmc?oc=5",
      "publisherUrl": "https://megapolitan.antaranews.com",
      "source": "ANTARA News Megapolitan",
      "summary": "apple resmi perkenalkan earphone terbaru airpods 5 antara news megapolitan",
      "id": "7b007ab0001c30eb",
      "domain": "megapolitan.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e293193fb408d302",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Bos AFPI Sebut Pelemahan Daya Beli Jadi Salah Satu Penyebab TWP90 Pindar Tembus 4,32% - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOQ19xOXlHeUJFMEVZb3lnUGtNclN3MGJMRGY4X2VKMWJGa3dmQmFqRXNFZ2RrUE1FYWl1bkJpUWlsQmw5QmdQSnVGUjkwal9rajZSbFBDUnpqY1ZpUmRvdEJXeUJodEJrM0lMWnhCUU9YakdVQXJpNE1tYllwci00dHlDYngtdzJORG9GMWdQM3NaV3dDdlZRZGM0bWZHWG40SkhaZ2VkNVNJTU1LRkJxSEtvU3pmYklnRDhibjdLb2xLMFBB?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "bos afpi sebut pelemahan daya beli jadi salah satu penyebab twp90 pindar tembus 4 32 investortrust",
      "id": "a3bd559b76a3c183",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 55.6,
        "label": "mixed",
        "negativeWeight": 0.8,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9e24bbd9b188830e",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-10",
      "title": "Foto : Paylater Kredivo Makin Banyak Dipakai untuk Modal Usaha, Naik 15 Kali Lipat Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNM3M3SG5FTEktbW9xcTdCOEttZG9IUTk5NGU1cXZfZXBzWXJzTE5UZXJzX2FodUJNYXNFNEsweEo3SVlRdk5KYmdVS0RvSkRMdkVwOXlMQ01DS2t1NmktVzcxaXltM1dOVW1yYXV6dXNPVVpnUy1LSk00Mk4taEtZdGxkOERUNW1DN1F5WEhwc0VkTDl0TENGZzc5R1NaWWYxaGtlTjI5TXZYbk9DZlBYNlZMS3A2WGdmNDFxNF9KNXVmdUFFS0w5SU5GVG5Sdw?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto paylater kredivo makin banyak dipakai untuk modal usaha naik 15 kali lipat halaman 1 kompas com",
      "id": "747dcc219487ca55",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7444d75776f93730",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Hindari Pinjol Ilegal, Ini Daftar 94 Pindar yang Resmi Berizin OJK September 2026 - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQdXJ4aTRiZ1dBWm5hamNsMTJ5UTNsbk1KN0ZOUWpCcTd4RUV5RlVvN0Jic2dHbkhiMG1NSVJ6YjN2N3FXcFZzTWc4cE0yNWlzRGplbTlYU2lYdnhveF9tUDdoRHRSTXZfUzVYcUkybGcxbjNqTWZjRlhfYTViMFhXOW5IcFF4MHRVZ0dmaWpsNUdKWm02TUdseFlBeDd2WDdZSkExNjlKMWY?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "hindari pinjol ilegal ini daftar 94 pindar yang resmi berizin ojk september 2026 infobanknews",
      "id": "a49154076a74b307",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d886902ed67b040",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-10",
      "title": "Kenapa NIK Lebih Gampang Diberikan ke Pinjol daripada ke Sensus? - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOWXJSU0N1RGRFWWJFS2IzNzkyaEZoT3hhNHhOVHpnRXRKbHdKYnRyWGY1MFNOcHc3eWpRUENWYjY2cXV3ZzY3NEpjTlY1bWYycXNibS1kbnRRd2tRLWhOeFFTMl9HSVB6OEZlZ2pNWVFvMnNaWVNCamdQNWlKOXdYeDdZQWdSaDJuWU5ycHpGLTN1TF9OaDJON3ljeGd6Q3FoeDBvQTdXcw?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "kenapa nik lebih gampang diberikan ke pinjol daripada ke sensus investortrust",
      "id": "25beef7af170dbd4",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b77d61f520396742",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Kredit Macet Pindar Naik Jadi 4,32 Persen, Daya Beli Masyarakat Ikut Melemah? - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPMWlCcktOOFFYZkIyNFY3ZlZqNVl0NVFKNTNNS3BseXZ0d0R0ZVd0MUpGNHpIdDFFRW9XQUJfamdydnMwalRaSGxWTXNwc29UeHNPUUludGtHTlJ1LW1mOU9nMjY0eFV2RkFFc256b1VJUS1VWmdjeFF2bzliaWY0NUl1a2F6RU5TR0MzaXYzdkR5Y3JnTjdnWmhtNXY0VjdRM0VKQlFJU1FrQzRZV0JPaVBaSkdkSUVOQ1lqaUEzbUluaUU?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "kredit macet pindar naik jadi 4 32 persen daya beli masyarakat ikut melemah kompas com",
      "id": "637ee7875c8fb447",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-563c664bb8b7c68b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Kredit Mobil dan Motor Makin Susah, Perusahaan Pembiayaan Makin Selektif Beri Utang - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxORXkwZERRVDduWnhXUThSWHJLdmVsdnFDNHJLSFBrQVRrWlBTRTAzUlFTN2JUZ1N1Tk5NUGtxZ3hEbUFpcGtGb19lZjEzeVFGN0xNbEtFbkEtZXhETy1IRUhxV3EwSzB3aGVaMi1md3VSelBrM0tXd29BMW5iYVJKNmc1WEpLTUR5VF96VHVvYUVyU05SQVJONzlnZ3FDd2piYW1kODlsVHh4WnViYUZHUXNOWFBZX3VvRzE5aNIBwgFBVV95cUxPbXV3bnVfOFdCRi1NM2dFcWQzeTA0Z3h3b2psM0d5dFZFbnctMUg4UU1hQmktS3RkcEVTV19RS2Y5dC1aS3ZJU3FmTFhOXzdEUXo1MVJuVmxUcDJ2dmhMVm5uVndjZERRRm9XR1ZxREVvdDlUQVd2OW95SkRNb3NtclBwbzF4T2FiU1pBVzZoaTNVZmk3V2lJQ1dLRHhvN0hTTlR1amdXcVRUWlducl9ZUW5rT2x0X25CUW9tZ0t4RHJzUQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "kredit mobil dan motor makin susah perusahaan pembiayaan makin selektif beri utang warta ekonomi",
      "id": "737baff885ed0b08",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19c94d5fa1653e69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "KreditBahanBangunandiTokoAnugerahDewiBunga0Persen - https://linggaupos.bacakoran.co/ - Baca Koran Linggau Pos",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNTVhWMmhsZkNPOGxMOE5LdV8zYjNkYzRDejNBTUV4R0ZEX0QtdzBLX1dYOElVOE1IZ0g4MHBpdjBQNWFwS3BaX0sycm9ock96MERXeWRRc0Z2M0xOSW1jR2ZuLVhRSGw4Tm9TM1JDYnZaSjVIM3lUZERsUzY0RHkteGVzYXl1clBmeU11LW91V1dhalFkUVFRcjBqaVhLVDNLNjcw0gGiAUFVX3lxTE1oS1VrWEREUFlnRW1KRGMyWWhVNkt6VWJJSHFlbVNEaGJTa1dUTDNhRlVwZU9NeS1PWi1nVHNvWS13T3hLYktWMWhLNkJFRFIyV2tISS0xdjJxczdoMmN2N2hfSVRDQVpmckJWRWlZT29aMWZLVFRCZHhqMjVOdjJkSDFhNmo0Mzh1ZnZrR0xXZlNpRjY5VXRfczhHczFGNGZPQQ?oc=5",
      "publisherUrl": "https://linggaupos.bacakoran.co",
      "source": "Baca Koran Linggau Pos",
      "summary": "kreditbahanbangunanditokoanugerahdewibunga0persen https linggaupos bacakoran co baca koran linggau pos",
      "id": "2cb54f4d177a062b",
      "domain": "linggaupos.bacakoran.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-091025a1356911a5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Kredivo Catat Porsi Kredit Produktif Tembus 54,3%, Kontribusi ke PDB Capai Rp 33 Triliun - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxONklSZ2E5U3MxZ0ZLT3phOHd3MW1SSmFIbWl1V2JCbUZ3T0dDR2w1XzU5ZXhBZXp2ekFWTC0yUDRDWndPTk5SZ1dZWTFfQzRXXy1GajVVZHRhZlJNOTdwbHN6Zm5uOTNrbFhtOGxoQ3FSaklhcENId29QNGVJTFFzaC1maThaSXQ2WFN1MzFKb0wza2JVaElWZHprQUppZ0NTZlNCcHl1SkVXQUhnT2FXM0wzTVJESnlDeW91bzFxRFpiSVFxeWJR?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "kredivo catat porsi kredit produktif tembus 54 3 kontribusi ke pdb capai rp 33 triliun investortrust",
      "id": "f776a95ed78cf963",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8f4f9cce1c26a8f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Kredivo Klaim NPF Masih di Bawah 5 Persen, Ini Cara Jaga Kredit Tetap Sehat - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNX0t2enEtZzdieUJPLU9NNGZPbzFmT2RrVE4wZndHTkE4NjlEcTJJUW5IUkU3RHZxQjd0U2h2T2lxSlJ1SXNHV3hNMDY5bDZYZUJFM2wzaXZ2enpSaXhvU0c4cW9OMnlnVlU3NWQ0bjlJaFhkdjU1TDVBdGpKbUc2dDBwZFQwZUhOcnhVODZGeTlOS2ZncGZwbkpPM2hqdUtm?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "kredivo klaim npf masih di bawah 5 persen ini cara jaga kredit tetap sehat infobanknews",
      "id": "e0bbdbd742184e31",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49a70b76dddabee8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Kredivo Ungkap Penyaluran Kredit Usaha Melonjak 15 Kali Lipat - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQLVBxZUxncE9wMU9IR1FEcHBpQTQxa2t1NzhXVWwwejA5S09jUEFLVHFsUzhNN1RxZ1VNczNLZl9QT3pkN1NwbkNMakhoWXg2aW1XUnl0RnBBSjlNOENIMV9oXzdtbXBTUGh0WjF1UjF1Y2d5OFpuTk5scGRqNTA5aDZGb2JzbFFsY1dHNHZjREtYbFp4dGI3XzVnY3FoRHNF0gGmAUFVX3lxTFBLNE83RU02d1RRYUhfcEloUll3NWpDc0hQZDVuVHlWZ3ZKbWJUSnVVYWdzM0JXTDNZdFpzZ0V5RUh1M3c3LVFYbTYtTUx4VnB6b09DdkZVU2FFUTFqa3FCRm9aV0g5R0ZsbEZocDJteWd3WF90ajdzeHFjNl81VUljTEVlUVZoaGlYS3VBX3FxV2FnZ2dOV0pHbVdLc2QwYk01YlpnTWc?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "kredivo ungkap penyaluran kredit usaha melonjak 15 kali lipat warta ekonomi",
      "id": "9158263fec324420",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c380509f143aceda",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Kredivo Ungkap Tren Paylater untuk Modal Usaha Makin Meningkat - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQTVhTTFduejVSYkp0dm9kc2RiS0JSRzhucjNVSWhvdmN3MzlZbzZURHJGZ1hkNUJPVWNzclVLSnZ3b1FvMGVtdlZOUzRyMDEwY2RNckxvQm0zTzNsbTVnYWZYb1RxUnhqcElKQkN5LUlhQkZjRWxCeGRzWGlUUUJWVjBVRmhZTldSXzkyRGZieEs?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "kredivo ungkap tren paylater untuk modal usaha makin meningkat infobanknews",
      "id": "5b6cdcd3a0fea9fb",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e5255de2afd99480",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Link Apk Pingo Pinjaman iOs Aplikasi Android Online 2026, Ini Pengalaman Galbay Teror dan Restukturisasi - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxQckVlc2JVeGdmWURqZG1tcHpDRHZESjlRMXJkSXpvVEhlNWk0WFJXU0lZREJGdHA4TWJvUlZnQkNFaFB4cVBUaDNNX2QxX3pUWmU4d0Y1NENtb2hDT3NEYUc2NFk4OGhwU0ZNSDM0ZnFpc29jOWU2ZFF6dzdlWFQ2WXhnUjl4d20xaENfVG1sRWhUUllHVEhtcjBER0NlV2xtcGd5TVBOUXlZS3BCS3FxUU9NOUkwYXUyTUV0emxjeXNUUVBjc0RjQUxabmdrc2RseGxoUE5YQWZ3WG8zNE5lNGtMVHVSak1XdXpUVTQ1THQzR2VzSjVfOFg3U0IxRWdu0gH6AUFVX3lxTE5NMlBvcGEwM3dSNHBBdmg2aTdrajdiRV9vbnVQcFVrMngwVldGMnE5U0l3cUVHdUZJakVfanpSemRwQ2J5bHF0aGR3dXNwZlJNd0F0RWpadHF6MkhFR3dGOUFWbHBlYU9jMVVucTh2cWFqNlBlaWJjZ25qNEEtSVIxdl9MMGdNMzlwMFFrVkUzT3VLVEFBbUJEVHNya2lSQUZ0MUtmMXY4V0l6OWc3ckUwTVNXZVpJdnloU1BJMGxtYzRwMzJCVTdWMmlvYUFtMFRsV1ZKYmFEeG94NGhFZHhDaWZibGZVeVRLd1ZtRm5QazY4OXd1WkhBWWc?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "link apk pingo pinjaman ios aplikasi android online 2026 ini pengalaman galbay teror dan restukturisasi berita diy beritadiy pikiran rakyat com",
      "id": "0ba15ef6f9538ba2",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 76.6,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a63849ee39012da7",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-09-10",
      "title": "Masyarakat Masih Enggan Pakai Asuransi Kredit Pinjol, Harga Premi Dinilai Kemahalan - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPbVFuemw2WDhTWWJ4QzYzZHVyQ3F4TURfSnlvMmlEdXJhcFlKbC1PT3BJdk8xeUVpT0JzZl9iUTJ3M29ONUJSbmVXYVlQdEhqVDREdS1TaUFtdTZRQWkyU3VTdkRUTkMtc1Vya0RYSGZkcjItS0o5NG5yOHlaZVRyaUl1aUlaa3BHUC1ObG1IRFB5Vk5sTWFvR0pSY2k3VnhVaTVGdzZ6eE4zTTAtbFJjWXN5R2stYUF2ZEpLQtIBwgFBVV95cUxQUkhfZ01SRWJKNHBBSWpMaTdxUTNUREhMcHhPc3NBWnA1emRUSDJzdUpmNE5aZWQxQUdBZXRWR1BoQUt4OVVVNm5UbmJzVGxRUWdoRWNlM0RUbEJvdVB3ZDJyZVBhSEx5Um5ySTNCQkZOMXV4M1ZlYkJvR2tkQWZRRVNlTGllU0pFM0QwUjdQLWx2LUFRUzBNOWpab05VeTctV1NobjVhd3VLQTJzQlBDdWlxQXhIcUJWTFJNaGxFM29fQQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "masyarakat masih enggan pakai asuransi kredit pinjol harga premi dinilai kemahalan warta ekonomi",
      "id": "38fd1932fa046f2b",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d674c5d4abc5b63",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "PayLater Tak Lagi Cuma Buat Belanja, Digunakan untuk Modal Usaha Mikro - Katadata.co.id",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOUU1rOGFoZEIzTFZXMHp2VW85N2tOTUc1YkxfaHVPajMzRmZMci1aaFRWb3o1RzBqdGp1bW1zWVZNV1JuY3dzaExrN1o4emo2RFlydnhUenZsVE9jT3d3VXh2RUpjXzd5bGRmeEJlbmtaN0lJZmN5SjV1bnh2S2RUMURTSXBqRFRIYXhZdGFNZEVHWElSWmRRdFh2aXd1Q0RNZy1CaGtjOFIxa0h2NXpEQlVxN01ibE0tdmlpNjZwTdIBxAFBVV95cUxPTXdjTEZLdXRzV2MyQWpnbExtVnNWZlo2S1BGWUExZ1M2alR3YU5CaXFWd2RFaG9HSUJCcWVUc2lTZzZtR3hibktpcXVIVmFHUVg0XzI1c3JxdWdZWVltbk1ZY1hzdEFOZDd4UFN4WXNRZnVVOGZZY2N3MjZFcHpYV0JjVlFmLXduYU4zUlJvYWdDbzE2RUpLZGVWaGhmRzRmQlVEcDhVZk5BLUE0RGJFOGsyV0xQN1Y4MDFIRGN6NF9abmFq?oc=5",
      "publisherUrl": "https://katadata.co.id",
      "source": "Katadata.co.id",
      "summary": "paylater tak lagi cuma buat belanja digunakan untuk modal usaha mikro katadata co id",
      "id": "3fb50efb2505edf3",
      "domain": "katadata.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2ef18cf7963ff82a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Paylater Bank vs Fintech Makin Sengit, Kredivo Ungkap Keunggulannya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQNHAxd1BJaUN4ZE1FOVFheDhYYWRSU2pGMXlzQnh4alNxRU9Hd3JFdHJDZmdFblNnbzFoMEwwVU1UNHdpUTloMVg0M1YtRjNkVV96RHlVcUtOQ1BLR0p1Mm96VUFmbjJwZEdwNHBpUl9UTVlwOGxpaWlPRnhwdUNmSFZqREtQNUF5Ri1heW40bWZMaExYcFE?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "paylater bank vs fintech makin sengit kredivo ungkap keunggulannya infobanknews",
      "id": "13840e20bcdd9101",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a67684be53d24bfe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Paylater Kredivo Makin Banyak Dipakai untuk Modal Usaha, Naik 15 Kali Lipat - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQX0EyUzdqcUFoTzB5SDh4Q3plNngwN09BbGVYYndjcTk1cGU4bkJWcC04Q01NaTFSS0NveFZRTDBBbWZZbG5BeFlUcjFiai1MZU1ZVXpXXzNYZG4yN3BFTnhfNW5tWGZkVnduUE44NGNwYVFTdW52WnpLYzNfOEdCY3puLVl0eGFVa0U2bTlWZHF1VV82TWNheDVOcjE3OFNjTGR2clU4X1VuR1JDRlFBdnZLaHd6SmlUVXdBWk1oaU90aVU?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "paylater kredivo makin banyak dipakai untuk modal usaha naik 15 kali lipat kompas com",
      "id": "1c410daebb04840e",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-21208b9aeefb0124",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Pemanfaatan Paylater Perbankan Masih Semarak - KONTAN",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQTC1HR3J3SklGMFRISU1DNTByMEEwMkhtVjdTSjNvVW9TZWhmN0ZTSHFpZmVfTk1VRl9QQmFyaXVSYUdhazVUNElEbm9KdVVXZHVTQlZibk9pZnNvcmR0RVdoQ2xWLW5uUWRicUU5WlFZRkZ5U1FLM0RYVC13ekJSdnQyY0s?oc=5",
      "publisherUrl": "https://insight.kontan.co.id",
      "source": "KONTAN",
      "summary": "pemanfaatan paylater perbankan masih semarak kontan",
      "id": "2c8126ad34fb4c74",
      "domain": "insight.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-302888828b112c75",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Pembiayaan Pinjol Tembus Rp105,63 Triliun, AFPI Peringatkan Risiko Gagal Bayar Makin Besar - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOWFBNOGozWS0tcHpha0J6Y2xXR1BDVUJwUUtFdTBpamhCcDNDRHItaVdhY3ZTOHZhVHF1R3p6Z0s5OEF6QzdsTTZjN1pPcGxnd0hfdTllVTRsRTZZelhyTTVVYml5M2VYQnZ4WUZqZzB4UXFleHZyZWtjOFhnbHRkZFB1X05aUm1WeTE0WW9iUHBhMXZVbmo4Q0R1RlVndHVJSTh4cDFLMWp4aHcwbVAtSVJuQWhKLWdocGVtSmNlcG44RDJ50gHKAUFVX3lxTE1Ca2piSU03SmgtTFJvVEo3N0h3c3BGaTN1RUQ3QS11RFJ0UFpvd1B4cEdUTDV5eU9OMlM5QzJjSUo0RHgxRVcxNnBoM19RZl9BZGVrSWQtX3NOLWIxY1RkLWRrSFpFWllEcmZ2aW9JbTQtZGtqVEhrMU85ZnR6Vi1DNURQYW9GemZBUjJJTFRSWHpQZnFMdDBBZGFIVTRrcV9rVl9rNVpWQ0ZuMWpvSmo2cldrNW03UmJWS1J5TUJpZnNhNm14eVVwLWc?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "pembiayaan pinjol tembus rp105 63 triliun afpi peringatkan risiko gagal bayar makin besar warta ekonomi",
      "id": "47aa89c55f15fbaf",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-24425cbef2d6b2cd",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-10",
      "title": "Peminjam Modal Usaha Kredivo Adalah Pelaku Mikro - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1vbkdYRHpyLXF2QmhOYnRBc0RZMWVXdEhvT3BWQmN1QVlKS2trR1FOY3lpNU1GSEc0dk81VXAwZ1o2VVJEeWoxOWI4U3NTNVRDSVY4VGRfcUswa0trSmtWOTlvZGktZm1xQjVIZC1pc2lrWElJMThRLXJhQ1NNZw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "peminjam modal usaha kredivo adalah pelaku mikro infobanknews",
      "id": "1b40d43cc6a3d252",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3120df8263418600",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Riset Kredivo, Paylater Produktif Digunakan untuk Modal Kerja, Biaya Sekolah hingga Renovasi Rumah - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNX2FxWHpGWVlnTS00czY2NFNRZFFWd0N1M1A0SnhEbDVhRWRyWHRadHlKRkR2SHh5cU0wQjFydXF6dWx1WFo1Z3R4b2hVZ0dMXzZFci1VNTMxZXp2WXRIM3hIQXA5VEdYN2JNT09tNE41QjdqZ29aN1AzajN3NmU2MS1VVENIT3ViczAwbF9ydkVQT1Mtc1pHZjU0Mm5RLU5odTZhVmw5UnRGQjJ5RjhGM3lZQ3E1NHY0N25OS0VBU2pPSTMtNFJRMFctVy1zSDZrVG1nZklTZ09IZTBNMjlFOHRGZVI?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "riset kredivo paylater produktif digunakan untuk modal kerja biaya sekolah hingga renovasi rumah bisnis com",
      "id": "feb37e036fc0d14b",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-11fe94b0823481d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Riset UI: Mayoritas Kredit Digital Bukan Buat Konsumtif - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQSlQ4YnNCajFKV0t1R3g1eTBFU29McDBBY0JkM1A4dTN4WkRFd2RKVnBmbzV5S0hINUJTeVl1VXhHaXR1V3hJV2FEZFcxWjEyVTlXaXlnRzVydkg1eVEwMUFpXzVTZHowTmJFbllZa0V3cHg2M1lzbXZqMUdXN1hzS2VCaU9wSno4OVVqbjFmNkg5QnB4aTZsN1hGU3VKZWRBeHk4Y0dCWFdIUmxadUtWUkhPMlU?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "riset ui mayoritas kredit digital bukan buat konsumtif cnbc indonesia",
      "id": "44d561a225cc9e8d",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67b3436115845b87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Studi catat mayoritas peminjam modal usaha Kredivo adalah pelaku mikro - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPNUozTHR2MnhoZUxjc2lybHA0dzdiNG42cmFoMVI2LU1mTlJJVllmUGtpWWx6M0Q3RGQ5eVo2d1duX2ctSzlBem1wRFE2TTNfSnlxZE5IclpFS0RZZUJXaVZGX1hya1FYVVFBVVRRclI5aC0zeXo0Nkk1MWw4aDJxc0lVcU9uamNZX2VuNDUyTG5LRk9vT3dhRzR0SFF4RGMybFNyczZsMmtOZ1g2YTBrZG130gG0AUFVX3lxTE1JaXMzV2FsbEZxelJNV1hyaC1icWNZQ1ZVUUZlNkF1aWNRWjRrMktvNDZleDRuZkdrQ09aZU1CSmNxTVVTczJkVE5iWDBrcWdocWNaSUx6dGUtNzdYUTBtWFRuY25zbUphY01QaVNxXzRELTY3LTJGZGxNSVhnQzE3ZXFxTE9lT2xNMmtWT09PX3VuVjdSZjcxUDNMLWlrWDVtOU1GWHd3Nk1MTlR0cWhyalAtSw?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "studi catat mayoritas peminjam modal usaha kredivo adalah pelaku mikro antara news",
      "id": "fcd23e3675a38eff",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-08d22621d573913f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Tak Hanya Gaya Hidup, PayLater Banyak Dipakai Buat Kebutuhan Mendesak - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQWjFrZGYwT1dhTXYxWnMxNnlHRGV2cHN2M1RtRXlkdnZoUVZEYlVhRVJIZTBlTE5DaGw0RGJpTXV4SG4zaXNFMGNQV2NvWThfRDZ2UWVqeHFHdGNHaEdvTVFibmhkQTdSeUNIWkI0dlduRjdLaWtlU2c2MktQWHVQeEw3SnNKVFRhMUtRRU9aZjJpS0VjYjh3eHJxUkJ2MFMweTdIZmNROVFLUnAtYk5DbkRHVV9LQdIBtgFBVV95cUxNNm0wTGl1Y1ZRU0oybmU5MzNZS3hwYkhBSWlTV2xSMWo3YnhFNjFiRU9lLVpBS3RUZkNHLUhnRVNQOTBsOFdmVzBoaG1kdjN1RUptd3RDWWpuMDQ4MURBYk9FNjNkbF84WHZzSnpjSmFFcmo5ODlWZXlPZy1faWdaOWNRUGtCTkU5bGRWb0pmalZmNHdJVE5kZ01lbXo2UkJwZmFkcWl4ZHdTckR4elBOU1Y1Wnl4dw?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "tak hanya gaya hidup paylater banyak dipakai buat kebutuhan mendesak suara com",
      "id": "f49bb438c8912ad7",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0b6c4c4e2731373e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "54,3% Kredit Digital Kredivo pada 2025 Dipakai untuk Kebutuhan Produktif - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPemE3T0RDdmJmUjFUdTdzSGwxaU1IX0VLSy1ieUM1d2REZkkteEFzMlJjNU9ZdThZdDRiczFPUGlWMGpnWEZsOVZGZEUxXzduT1lzekd4V2NlcjlCV3dqem1UVlF4eFZLdUR0T0w3UFhYaEh4NGlUdjEtU0xfb2RveUpGcE5aclpiUUpZYUx3?oc=5",
      "publisherUrl": "https://gadget.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "54 3 kredit digital kredivo pada 2025 dipakai untuk kebutuhan produktif qoo media",
      "id": "fcab2ca8b1857614",
      "domain": "gadget.qoo10.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-747eaf9f6d995541",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "AFPI Ungkap Biang Kerok Kredit Macet Industri Pindar Naik Jadi 4,32% - Validnews.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQZkJhYmpjeUJTZmJsT2tsdUhZMHNCU0ZHVnUwUmhjZ3FsQXEtc28wOTNfZmlFTXNOY251NXh2c2tVc2czQ3g4eDRyVGRjc2tydFNBZlNGWkVRQ2J1Mnp6bHBLZVd1UW9aNFplOHFldExacFVzT3JQQmx1MlFzRWgwQXI0d0VHc0ZUVkhTZ1NuRjNkUlpqZVhHYzlsdDZvRy1SZV83cE5vSzE1Zw?oc=5",
      "publisherUrl": "https://validnews.id",
      "source": "Validnews.id",
      "summary": "afpi ungkap biang kerok kredit macet industri pindar naik jadi 4 32 validnews id",
      "id": "8cb25e9627d9bf58",
      "domain": "validnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe5cca383750f71c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Aksi Kredivo Perkuat Akses Kredit Hingga Dampak Sosial-Ekonomi - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQakRyd1dmb2g2WFY4dllOTnNpd3ZMMnFndDBkOHpNd2N3M1FCdks1Y2lvblcwV2twRlE1c21wVVdRbmJxTEExRk96WWpJaEwtZlRIMUowLWdLeFNpVjVXQ1podmpsOEJya1BrcEFWcEVBamlRTWhoSFZ5cEVaenJiWXBRd0FzeUR3UHJ4ckx5YWdhOF9uWkZJczZLeXZKVzNKVjlMakV1N1JwQjVPTmwtbFNjaG1sWks2dTMzeFJFMA?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "aksi kredivo perkuat akses kredit hingga dampak sosial ekonomi cnbc indonesia",
      "id": "88dafa76feb8d8ab",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b85fa8ccfe60469d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Foto : Modus Garansi HP, Sales di Surabaya Gasak Limit Kredivo Korban Capai Puluhan Juta Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOSlJHQk1FRlVUNjNQT1JOcjFMVzlGakNXQXR3ZTNzY2dHMG14SktyV1Z3d3JYMDhfb2d0UHhMaEtGVDlhZXRuY3RJN3hrcWZIOU1DZ2JWN1RqMjE4R292QjJUVGZQQVZLS1V5QjBfSU5tTTN5MDhzSUd2VEp1VXRnN0pkcVhxQkx3Vmp5c3ZoSFFEUl9IWFN0cTJsaXlBRDluczVNRno3TXIxeW9wTTUyZS1nYnFWaHBFNC1NZWJaOXl4Qi1aU2VLQ01UeUQ2Y3o4QnU4?oc=5",
      "publisherUrl": "https://surabaya.kompas.com",
      "source": "Kompas.com",
      "summary": "foto modus garansi hp sales di surabaya gasak limit kredivo korban capai puluhan juta halaman 1 kompas com",
      "id": "78eb0a3afa6140d5",
      "domain": "surabaya.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 56.3,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8b4f0617b9f1f8f2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Indonesia Women Fest Kembali Hadir pada 2027, Saatnya Tandai Kalender! - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOaDctREtfTDIxSGZCdWszTkc1X0p1ZkZnMlRMUnFXVDFTZWpkUXAyaFNENUtGTVAtY3BQTmxMci1YWmhwSVRES3lBaDg3TnlIUFR5NzZNbktjN29KYTdLYk9lN194MUpYWEp0QTQ0bU9ubEZZX05VMWltQ2dmcEFCTl9CZG5GOEhaNUVOX0UxRjFjWUkwQXNaOUFtbFBMVHl0Uzh4SU5LMNIBpgFBVV95cUxNYlo0MzNmWXlzb3A0RnVDRmpKT1dNYVNQaXVucWhDZHJQN0F2aW9QS21tM19vcE8wakgxc0NYV3cwQjh3WU0wMFM3bEMxcDc2UHJYd0pfYmpSbDQ1Y25wOVo1Zmx2RGdMZjJyV1pkUUtwVEZTaEJIbENweFhaaTRUZ2J1NTBQbXZVMG9vQmtQUERaanlMSEVIV2RScnRXX0g5Xzl2X1Fn?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "indonesia women fest kembali hadir pada 2027 saatnya tandai kalender grid id",
      "id": "7ce14e090546bcbf",
      "domain": "nova.grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ecd80a60ef85c0d4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Kredit Produktif Kredivo Meningkat, Pengguna Kredit Modal Usaha Naik 15 Kali Lipat - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9DNzEwY2paaldKd2hOYm52WVV6R05sY2FVZ2NIUzRGcDRMaEMzLUlqZWtkdUp1cVh6OHNrZzd1NzRfb3RqYWlvUWg1TkxxYmJOWFJzVTFaLUVZR0lwRU43M2M3aHFaQQ?oc=5",
      "publisherUrl": "https://fr.tradingview.com",
      "source": "TradingView",
      "summary": "kredit produktif kredivo meningkat pengguna kredit modal usaha naik 15 kali lipat tradingview",
      "id": "1511a62e25614e1c",
      "domain": "fr.tradingview.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8a6be5394529d6a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Modus Garansi HP, Sales di Surabaya Gasak Limit Kredivo Korban Capai Puluhan Juta - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNa29fY2JOTTRXNGhDQXRHekw3ZTQ5MDRxbjJtWGlNWDlGSFpHSWFxOXVwcGlOQjdwMmpwZXFiOHkxVUJBeE52OE9pdHhEMUxNdE9YV3U0OGJnck1DNFVaM0VWdmVNdFJ2TTd6enVxTHBkSzBqNWFaX1ZaRGJnNWlQMFhidmU2MG93aFBzZ1JMRUJqaEFHUkdVYUNHR195aWhsT1FCOUVHbGFpVTFIc2RDX25BSlNLclB4eGV4dUcteVBIOGY0bXctWQ?oc=5",
      "publisherUrl": "https://surabaya.kompas.com",
      "source": "Kompas.com",
      "summary": "modus garansi hp sales di surabaya gasak limit kredivo korban capai puluhan juta kompas com",
      "id": "589b17d424ab7ee7",
      "domain": "surabaya.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9d2a498d53062cae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Sales HP Kuras Limit Kredivo Rp40 Juta Berakhir Jadi Pesakitan, Begini Modusnya - memorandum.disway.id - Memorandum.co.id",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNTzE1RmFyR0VtXzM4RjFTRDZ1eXg4bWxONko5SWs1NW5WX2ktVll0QUJtczFwekFoVlJuZGozaklDa2s0VGRzSFZSSVY1eHNvOGZKUHEwbk8zUjdUWjlCMFc0YllDWjNFVkZGenU0cDQyZVAtTnRUNE12ZTFfd3pKMDhnQ2xsMFk4LVBMSDFmR1dXbXlVV2d2LW0wQ2JvVGJsQXJ5dXU3SFVobnNqQllOMHdVdkp6NWkyeXR0NkRsWWM5czhCcGhNLVhhY2sxb3PSAboBQVVfeXFMTlJLdnU5LWMyUUlQVlFSQ2p5bVBWTGg2Q2huTVdaOGZ3RXFjX2xZOExCbnE2Um9kbE03OWJnN0VBTzZQVTNzR0QxNTE4VXVEM3RsQzRzZjN4WTBxbWFSZlV3QVVKYUMtNlp3RW1jcUpWZ2lYN0MxZ0FPb2Q0bnJHcUJkS0g4TEw5MWlLMDhpSC1uNXFVV1lEZDhxT01IWlEtM0Z5RENVWjdVVXV4ZGhuRkEyQlVsZGZfeE93?oc=5",
      "publisherUrl": "https://memorandum.disway.id",
      "source": "Memorandum.co.id",
      "summary": "sales hp kuras limit kredivo rp40 juta berakhir jadi pesakitan begini modusnya memorandum disway id memorandum co id",
      "id": "2a8a33cbdf43c768",
      "domain": "memorandum.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8827a806358ab524",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "TWP 90 Pindar Naik Jadi 4,32 Persen, AFPI Ungkap Biang Keroknya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQYXlrWUhoRjd6MFZLRlhTUkNpSGlLUE9mcDhzd3UwWklqY09meTlZVWMwMDVLajM4ZXh2bjhIMW03b25XX3BRTEwwbDJseWQwajRwMGE1ZjlnbDdjU1A1T0FPdjZlRUEzOFptUGhxQ29VUGZCYU9Yc2VpTXV5dUYwcnpaRHEzUFJwMGVYLXJ0Yw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "twp 90 pindar naik jadi 4 32 persen afpi ungkap biang keroknya infobanknews",
      "id": "7ca73129b15bdc2a",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-51115989bc98d81a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Apk Pinjam Sinar iOs Android Sfile Download Login Aplikasi Pinjol 2026, Apakah OJK? Ini Pengalaman Tidak Bayar - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMihwJBVV95cUxNOENjQU9HU3BXWmtZbWNSWkswTTc0SUNhTXM3ZTE5LUpSeFhjN0NSeWRmM2o4Xy1BNThpT19qZlVjTFZhUFE2X0ZNVDdiY05sNERBX2VCUHYzNHNpWXBmNzVHSGc2ZkRZcTBlc0hOYUh5a1I2QkVaWTZfcjVhVVNLMmtOOG5BRUdCdDhEbks0cmtqbS1pY0xtMmRfZWxZamhLVDBKTElMOF8yVGZCUC1yMHcxeWFFUGdsUndoMHc4ZnV2TGJQZ3pXaDd2TEU0REVHd0lNSVdSOHRJZTRtQnNob3ZlX1VUVm9oaF9SMmhvTTZWeVg5Ty01ZXgzTk40RHhFb3IwYUVfRdIBgAJBVV95cUxNbll0MU5YZms0NDEwaUVhWjNySWtUeXZucEduUXZkdWZRWU4yQ3c0dHNYNDdreGFpMFJLemtIazZXelh4ZnhRRFNWUmlKSmdQTlhXWEE0RzJ3MzZ0NEFETHl6RTBRWkR2V2Y4YWFaaGdKeUQxbURJUHJDYkl1VjlOT3duclZ0czkwbmZVOFU3VjNkY0J2Q3RqR0p3bWx2Rkk2MVBVX0p3bFJFUEdZVERhLUs5UjBUR3ljUC03NGlMejA2dDVfWVU0cUpobjJvdW9BeHlRX2NaakdEd2JWcTEzbkZqbFRTVFdDNHJGbXJXUXZjWFlTNnJVam10WThRSmdR?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "apk pinjam sinar ios android sfile download login aplikasi pinjol 2026 apakah ojk ini pengalaman tidak bayar berita diy beritadiy pikiran rakyat com",
      "id": "8e2859ebd6d49ff1",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7faa29abcb3ec557",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Bunga Ultra Mikro Makin Murah, Pindar Cari Ruang Baru - KONTAN",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQVUI0NTJxSWZmYi1CZUVmc0U2Nl9QMDBIaW9pUUo3aEtaYVlBQXhLQ1dOeGtacVhiSXV3RVZ0RkRBaHl5b3hPVm9uVTBWVmxiVEhSWm1OY1hVdHpkLVhIWEJnY1prOTd4LVRHTG1SQzc2REFmblExeU9KZTBzVl9SZlROY0RwUlJobG1KNWhwRQ?oc=5",
      "publisherUrl": "https://insight.kontan.co.id",
      "source": "KONTAN",
      "summary": "bunga ultra mikro makin murah pindar cari ruang baru kontan",
      "id": "48dbcc452982adfc",
      "domain": "insight.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1e3a1f9d71605b95",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Candu Pinjol, Ekonom Sentil Friderica Widyasari: OJK Jangan Hanya Jadi Pengawas di Atas Kertas - Kedai Pena",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQbXhTRUJmQWhsb3NTZ1BGd1JQZFg5bFpCeVB0WlllS1J6TmowS05DZTNHZWEya3dua3ZveVVCQ0ZTWUVnTDluV0pRXzBsRm4zQkhyMXBTU1lqYUhHQS05TmhnVEdOQnNSY196THFZYmd0YmFHYjBic2pfekVYWEhaV2tkVWJ1Ry14a1BfenRadUcwNWgzOVg3dXVZVnJDaGZxOHozOTlwSV9SdFZLU2R4N244WWFpX2JJOWtv?oc=5",
      "publisherUrl": "https://www.kedaipena.com",
      "source": "Kedai Pena",
      "summary": "candu pinjol ekonom sentil friderica widyasari ojk jangan hanya jadi pengawas di atas kertas kedai pena",
      "id": "d8625fc5a85c62be",
      "domain": "kedaipena.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9863b495d786a41e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Dongkrak PDB Rp33 Triliun, Kredivo Buktikan Peran Pembiayaan Gerakkan Ekonomi - iNews.ID",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNQlNvTGw0RHhkNkVGLTRXRFB6eGNlT1pwa1owX3NpdkFNaHlZT2ZZQVBoQmZkSkV3QTBjQkdKVk9EaXdQZlFxNnpxU1BoM2tTX29RVzJ6RlVTajk0T2xxeDgydGxCM1dTeTY2eWU0V0Y3dTQ2WFluT0JlNmdQbW5ldUROdzNsRzk2OUlpODNwX3J4U3Y2a19XekxpWC1TcnZRazZ3WHBleF9JWEJSQTBvemR30gG3AUFVX3lxTFBhNGdoMWlJRG1OWU9pdEtYSjVSN3YyalZFQThudGo3dkQ5Sy1ZZEk0Rkd3X210emhzZ2lqeFBuUkpHYXhTQ0xXalNWMzJBUlQ5MjdCOENGZ0JiQ2pYREVBMnV1eFpkd0U5NWpWX3VGV2JqMm9obDV2ZzB5VzFiYXk4bG9vNHotX2hlYWdTbWtOeloybjZYWWhXWXUtcFFDeXJLU1Q5cE91c3ZIWnhnbGY5aVI3R0Z3SQ?oc=5",
      "publisherUrl": "https://www.inews.id",
      "source": "iNews.ID",
      "summary": "dongkrak pdb rp33 triliun kredivo buktikan peran pembiayaan gerakkan ekonomi inews id",
      "id": "7607d59ff47f0c33",
      "domain": "inews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ef89e16403e5b9c2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Ketika Penegakan Hukum Persaingan Usaha Berhadapan dengan Kepentingan Inklusi Keuangan: Studi Kasus Kartel Bunga Pindar - Hukumonline",
      "url": "https://news.google.com/rss/articles/CBMigwJBVV95cUxNdU9paDBSUk1tMV9fSnRxLW9ZNW9EZmVOTDh6Q3ZlOElWc2gxREJ4alRTQ3RMS293d1NJUzhxMUxYbGd2djgwUDlLdGVpZ19fUXJkQXRJNEZZQm5BbVFYWW1aSFFJRXRJMUlHUGdrcjUyYWFjTEpzaUlaQ3l6OUViajd5Yjh1b3BnejE4VDY3d2MtMWE4UHZkWDVMeFhSWmRBY3NESHl3QmpaZmw0VnVpUFZuQlU0ZUl5RDNSTnZidVdDMTUycjBwQTl5Q3pQUEo4bVZ2TkxRUzB5bjNXbG05a3ZiNFhSYXpKM2hoTng4WkFrVWMtZ1VkWmZsa1Q4R3lMUlJ3?oc=5",
      "publisherUrl": "https://www.hukumonline.com",
      "source": "Hukumonline",
      "summary": "ketika penegakan hukum persaingan usaha berhadapan dengan kepentingan inklusi keuangan studi kasus kartel bunga pindar hukumonline",
      "id": "10a90cdc11aa3077",
      "domain": "hukumonline.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8c7bc4ee72cb3f9a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Kunci Ketenangan Berkendara Adalah Memilih Asuransi Kendaraan Praktis Tanpa Repot - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOekQxVmxGcnhWNTB4aXdFQUVETFlzTGRtaWxiYm0zWUdSZzhoQy11OHFocDRibTlzbFhTOFVhNXcwLXEyRy1ZWjBRd0lmVHdZQ0FGRk9iTkpyZkxVSmZpQWxIaVNkd0RpTEswVHNxZU5GYmJXWHlQbGJKOEVfUmloN014SnF3R0FUajE5OW56STU4Y3FHTm9nRlMtdndnbFlTbFkwMjdzclBhR0p6dll3RFpPaWNzRXl50gG3AUFVX3lxTE5IZUhWSUtwTU1QWDFkTldqMUQ3ajhENDd1YmZnYk0zRVhocm53MXVFOTJRZ3dmYkwwU2R5eEFGbWV4MTN0akJxcWVsenJRYVJNemoyTERhVllrNkNrTU4wTEIxRjQ3dFZUU1czcy1DRXo5S3BGWTJEQ1JLVFRhVU5DTk9xTWp2dHBLNVJudnBDV3Z3bXkxS0xYNlUteG9mVmdfd0sweEdPanFpR3czMUpKUjNpbDZGOA?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "kunci ketenangan berkendara adalah memilih asuransi kendaraan praktis tanpa repot grid id",
      "id": "5dd9818f2c760ed2",
      "domain": "nova.grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c029137edb96d076",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "OJK Cirebon Ingatkan 700 PPPK: Jangan Terjebak Pinjol Ilegal dan Judi Online - iNews.ID",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNUHNrbXdlR3VMeW9oYjFGQm4tME9jT1pMZFU0WER6V0FWbW1HZkJiZHhPX0tCbGN0a0s5dkN2LW4wWXN6eXZMc3VwUEFRSGpDT2w2U1hhb2NSVWpXLXhadm1LVWk5SzBuaUFTcm4zWV90RGZUeWlmWVBkVEtpWGY3QndCWG1MemRnZEJ0NXg2QlhSWFMxRTBUc3lFSlVhQUJRbVZ2WmtfMG52QWgzMDlmMWx3?oc=5",
      "publisherUrl": "https://cirebon.inews.id",
      "source": "iNews.ID",
      "summary": "ojk cirebon ingatkan 700 pppk jangan terjebak pinjol ilegal dan judi online inews id",
      "id": "32b320b454884ed0",
      "domain": "cirebon.inews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c239b58dc831201c",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-12",
      "title": "OJK Cirebon Ingatkan PPPK Terjerat Pinjol dan Investasi Bodong - Media Cirebon",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPY3A5NUxERzdZeW1oTVhoZjJvSmtvZDJFVlpVWTZJYXVWYTVXTl9qUGRhamwzUnlabXl5SmxFeFg2T3hWblhwVWw5aWhTZTFYSEZrT19KQmlkaDZ5TjlLWnh1ZFFsd3ZCd3hTRVZhZWstS0tIX0ttMGtROXg4aTZfeExpR1dzT3RnMzZrc3lITlA?oc=5",
      "publisherUrl": "https://mediacirebon.id",
      "source": "Media Cirebon",
      "summary": "ojk cirebon ingatkan pppk terjerat pinjol dan investasi bodong media cirebon",
      "id": "2dfcc7e59e53815b",
      "domain": "mediacirebon.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-20d8c69c0ed68ff2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Presiden Prabowo Diminta Kaji Ulang Perampasan Lahan Perkebunan Sawit Oleh Satgas PKH Dengan Dalih Kawasan Hutan Lindung - Suara Pembaharuan",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPSXdGa0JZQ3JjRFI0YmxIQVkzNE0xNFA3eGcxV0dSQzBPQk1OOHpsNTRwc2FzWjdaZnNTLUVIMjJsaXhnSjRJNDhIZVEtSVozQ29LMFRIZFNfalp4Rk1aZ1VXSG1Jd2R5dGFmT2N6ZXJMcFNFMElzTFlUbFFoYkpfYmZFUDB4dnRM?oc=5",
      "publisherUrl": "https://www.suarapembaharuan.com",
      "source": "Suara Pembaharuan",
      "summary": "presiden prabowo diminta kaji ulang perampasan lahan perkebunan sawit oleh satgas pkh dengan dalih kawasan hutan lindung suara pembaharuan",
      "id": "286ec5accf36c935",
      "domain": "suarapembaharuan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe9148aec62e7e38",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Sering Terganggu Ditawari Pinjol? Ini 3 Cara Blokir Nomor Spam - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNWXc2QjJrNEY0OGhibkpfQ3BuekhKM1Jkc0REajc2NXluUndnTzN4VnIxcXZrT3dSM0dlVmNjTm9nV045QTU4cXptbXBhUU1NMFo1ZGdmMk1PMjN5WVl4QmJnc203dzF5NTlqRDhhaFVTMVlXaG9xcXJpdmRFTG9kWjktZ0drSzN4cElkbmdBNUdKaEwyOFZUUU5VRWJwODg1VHNiYmpnZmtwSERvNlFGai1KUzdxOGhEcTdybjVR?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "sering terganggu ditawari pinjol ini 3 cara blokir nomor spam cnbc indonesia",
      "id": "944ad2ee30050d9d",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4215bea8f263f355",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-12",
      "title": "Utang Pinjol Rp105,63 Triliun, Ekonom Berikan Kritik Keras pada OJK - law-justice.co",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQWURhMUM1b1NLLUtzMTFfYWRrSjRjMy00WmwtaHNhLUxUVW1HaWRwSjVZZWpqVG5pd1FMVVhOM2VELVlVMTFtMTEyVkhBSndwR3BTYmx2T0lJcFJPREV6X1lyRTlMNU5YMVNuNkFCQmtnS2syUHAtZGdaY3hJbVZjaEVyT21WakQ0elZBb3dkakZfME1RQ00wdTFxX3JndmdRenJ4a3RibGJHdVFh?oc=5",
      "publisherUrl": "https://www.law-justice.co",
      "source": "law-justice.co",
      "summary": "utang pinjol rp105 63 triliun ekonom berikan kritik keras pada ojk law justice co",
      "id": "c60fb2c6e141b3e9",
      "domain": "law-justice.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ca5120e68355245f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-13",
      "title": "4 Fakta Utang Pinjol Warga Indonesia Rp105,6 Triliun - RCTI+",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPMG1PeVNPSlhXVDBHSS1QcUdyMnpscndYOXVDSDJjR2lyQW9XWENoeVl6NVl6SHo5Y01kQ2pzMXh5QmJfNmZ3RjRTM3BxeXVGYzNpNDAwZDdMSXlndmRpWHNPcGoxdGNLdEdMWndJbE1TVFhscUFKWDdPOEJNQWhockZ6Tks0OXc4djRRVy1DZTJMWlI3bms3QndJcndPa3gxRXRxTEt6cGk?oc=5",
      "publisherUrl": "https://www.rctiplus.com",
      "source": "RCTI+",
      "summary": "4 fakta utang pinjol warga indonesia rp105 6 triliun rcti",
      "id": "bd1270da78f2e774",
      "domain": "rctiplus.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49aa3c45687ae2ef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-13",
      "title": "700 PPPK Kota Cirebon Diingatkan OJK: Waspada Pinjol Ilegal hingga Judol - radarcirebon.disway.id - Radar Cirebon",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNWFFYUkFia1k2NzVjT191RFVWMFlrbF9kMWJzaktTLUFrMWNNSDFnVUdYUTZrdV9OTHFoZFJKdGFkU3E2bEU2M2pTSURPeTV1MHFiTVR3a0dpNHZPQllwQ1NtYndpNEV2eFdpOG9rX2prN2FNR2ZhRHZYcDBHaG5GcUY1QS1JZW84YTBqdTk4V09pQXlXdjBYSHh6M25jdmFieFcwVFo0WjBpTDBRVE9NcjN0TdIBswFBVV95cUxNWFFYUkFia1k2NzVjT191RFVWMFlrbF9kMWJzaktTLUFrMWNNSDFnVUdYUTZrdV9OTHFoZFJKdGFkU3E2bEU2M2pTSURPeTV1MHFiTVR3a0dpNHZPQllwQ1NtYndpNEV2eFdpOG9rX2prN2FNR2ZhRHZYcDBHaG5GcUY1QS1JZW84YTBqdTk4V09pQXlXdjBYSHh6M25jdmFieFcwVFo0WjBpTDBRVE9NcjN0TQ?oc=5",
      "publisherUrl": "https://radarcirebon.disway.id",
      "source": "Radar Cirebon",
      "summary": "700 pppk kota cirebon diingatkan ojk waspada pinjol ilegal hingga judol radarcirebon disway id radar cirebon",
      "id": "68b2d1c47c2beb0c",
      "domain": "radarcirebon.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-47f542802eb3f359",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-13",
      "title": "Jangan Asal Klik! Waspadai Jebakan Modus Baru Pinjol Ilegal 2026 yang Bisa Kuras Rekening - radartegal.disway.id - Radartegal.com",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQUjFXeUVBaXp2amhEaEFVU3IzQlk0Q29PZFJTcDdDV2tlZWw5ZTcwNUhEQ21ydHAwSU1XNzg5MjV1dDhtVzR4ZGt1cFprcHdpOU5kR3pDYi1jM2s2cUE4YWFEcW1jcFdoR09ON3d0NkkxT2MxZFBuUHVBR0xZQlVkUTRtYzVUbkxLWkZhT2dPNW9hU0VUOXN4dzZuTTBLV29aUVV3M3R5Ung1MVFZZHl6Z0NtdnoyMmhWS2pUZHd4V0FhZGxpTGo3MElkVHd5eFNSM3hJcmNn0gHHAUFVX3lxTE9STjZjcGtnT2NfYW90VGI5YWlpTmE0b0t2OVd5S2tPLUl1M3V1ek9vS0c1WFYxS2NSdzhHOHpFX3VDZTQwZm05WUUwcjFMTkxjNndTSlFDQ0F1WENmTmlWWHFTU1J4bk9La0I4X1RLNnlsSmVYbVY1b0NRSl81alZ2eldzUS1nTTVFclJYOXc5cFI2MnpoUXBmSm1wQ0IyWHc0NGNFdXdwVzRMUTFBYmQxeUFxQ0ZtTmNfTkRwTTAwbldDazFfemc?oc=5",
      "publisherUrl": "https://radartegal.disway.id",
      "source": "Radartegal.com",
      "summary": "jangan asal klik waspadai jebakan modus baru pinjol ilegal 2026 yang bisa kuras rekening radartegal disway id radartegal com",
      "id": "23b3445b36569fc3",
      "domain": "radartegal.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7c6775938af89ab0",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-13",
      "title": "Konsumtif karena Platform Pinjaman Digital - Radar Banjarmasin",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNUzdvNjItSk1UYmhkLUZaYU1TalVRbjZJYV9CVHEwYm92UW1kQjVqLWN0dDdFTTB1UEhQSFl6UWVMUDNrNGpaYldadUlvVk85U05XV1ZGYkVUbUN6ZU1uYlhDQlRscHdvQTJ1aFFNdHpwMHZsYVhkaEVfUm5lYmo4OE5vcERzemtHUHpWa2VRY0ZmUEM5dFUwS29nNHE3eDRGUnfSAaIBQVVfeXFMTVM3bzYyLUpNVGJoZC1GWmFNU2pVUW42SWFfQlRxMGJvdlFtZEI1ai1jdHQ3RU0wdVBIUEhZelFlTFAzazRqWmJXWnVJb1ZPOVNOV1dWRmJFVG1DemVNbmJYQ0JUbHB3b0EydWhRTXR6cDB2bGFYZGhFX1JuZWJqODhOb3BEc3prR1B6VmtlUWNGZlBDOXRVMEtvZzRxN3g0RlJ3?oc=5",
      "publisherUrl": "https://radarbanjarmasin.jawapos.com",
      "source": "Radar Banjarmasin",
      "summary": "konsumtif karena platform pinjaman digital radar banjarmasin",
      "id": "375a7dc06d15fe4c",
      "domain": "radarbanjarmasin.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3e2a5de31021d08b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-13",
      "title": "Pinjol Warga Indonesia Tembus Rp105,63 Triliun - realita.co",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQU3VxemVldlUwRlM5Tnh1empGblVJY3RNb21RUmJ2TmZIMk1NeFdCREREcUdad09PZF92Q01fTW9aZkNlNExfeW80OS12LUZfWFYwSk1FSkZvVWUyLUJsUTJYRG9nZTBzalp5bUNFZUVTRVZTOHhsRnVkUFRpblF5TNIBhgFBVV95cUxOVlBDSUsxcHIxZ2ZlbjRiNHpnZDhqTDBoWHlUWWJpRG5sb25QRFdwN0FPaVZuS0NDLUF1SnZ1aVVYdlJsQ2wwR0VQbDh4MW42ZkFtSG1WZWJ4OGNUNnR0RVNLUElZSU5LbTlxaWpiMmxoSTBiT29IaC1oY1MtZ1ZaNmlIVXl3QQ?oc=5",
      "publisherUrl": "https://realita.co",
      "source": "realita.co",
      "summary": "pinjol warga indonesia tembus rp105 63 triliun realita co",
      "id": "f7b4fc8a8e6e5b31",
      "domain": "realita.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d4ded2680d26b070",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "15 ASN Pemprov Bengkulu Ajukan Cerai Diduga Perkara Ekonomi hingga Pinjol - detikcom",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNcW5XMnlzbFZ3a3RmbWJNTWJBYjlhd3BCblNQWlZMX2w2dUgwdnI5RUljSkRwNmhKYzZoRUJSYVA2cUNHVGtqcjhhOWprOW5GdF82ZTd3U0UtVThOa0NPRDItbk5PQTE5dExqRF8wdjFzR3Zhdjd1WU1yOEFsMTBpV1RQQ3hvdUF2TlY3LTl2UmFWNDlldlBHUGFHTTd4cW9NVnIxNWFodW9xSmNaX3VybVI5QldvZ2pSVS0yT1paVdIBxAFBVV95cUxNNldqMVhMT1NfdWk1akpFbHZCMjc0NWY3X1JSRndIa1pqcElGN0F6ZGlhTjNBRWFzdDhCR0s0Z0hVTVlkQXBKT0pnTjQwM3VkVVV1WW51RnlXZGNkYnZZOWdFdGN4dFRuUWxtS1VKOFhza056TnY0NmstamlwR1ZKZ0tXNlFOUFVudS1tWVF4aGlSYmRsSTlOLWdyQ0MyN1JkSGMtbGtHaWdGZ21OdU9Tck8wY3Zqcl9LVjBFbTRsME40UVJG?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "15 asn pemprov bengkulu ajukan cerai diduga perkara ekonomi hingga pinjol detikcom",
      "id": "06ff783e4fe47d2e",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-38a019d3438fa411",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "Daya Beli Melemah, Tren \"Makan Utang\" Lewat Paylater dan Pindar Melonjak - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPU1J6VS1tcFJkWm5mTGpZV1ZXWERSTWZQTnJvcnNpcndCcHlCTzdkMzJpSzRwSUtkeXluUnI0R0QyVUNzUDlfZDIwSU1xQmtsd2o4Ty1teVhobTM3UnFfTUtaaEFXYjUzcmJwSFBINGhzLVh5d3U3OGZBbG04b0s4Sy1BYS1jYTRLTS1EQVoxeU9zWHBGWDNFZDVTZG9KUnEzU29YXzN5UDhSQ2g4anhYZGtJTkF3TlFWNGxYclRJSnBzNDFtQ09KdQ?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "daya beli melemah tren makan utang lewat paylater dan pindar melonjak kompas com",
      "id": "5202aa2ab15c1c3f",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c3e1447f537e780b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "Foto : Daya Beli Melemah, Tren \"Makan Utang\" Lewat Paylater dan Pindar Melonjak Halaman 2 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOUVdSb01hc1ZDblMzVE9zVkd1aDBHX3EtT1h5Mm1PRHE1cnQyT1JqVWFnRVVaN0hGZVpOTkdNV3ktazJRbVRxcW1UUllfU1hnbUpQRWQyc3kzYWhDLTRqQ3NsLWJRelhHZl9CTHZCczlzVE1TNE9oa2lUREU3Q3o0ckkwb2RlYTM5bFRWck1wZER3em5JSjhILWNLUlVMaVo3MGstcU5jdjJ4NWFySDNEdEI1MXpFR1RzM2hJZWgtSDdYRHVpSEd3?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto daya beli melemah tren makan utang lewat paylater dan pindar melonjak halaman 2 kompas com",
      "id": "8f056686a9447107",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fbbc6a3c4f18be42",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "Kredivo Klaim Penyaluran Pembiayaan Paylater Tumbuh Positif hingga Semester I-2026 - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQb283SGFoS0VhZmJXZW5aN3BnRzR3d2pCTHJ3Z3JKZUl4aDYzeEtWRVZ1VkxHQk5nZ1E0WU5yQTllSHFkckhNUi1CZ3AzaktRcDJmbl8zZ19TT1dzN05QT3Nmam9oQzVuSTNWUzd3U3RpR2k2OUVKU0FuY3Y0RFNsbkg1Y1RoVktYcXNvWjZXX3ZXWVdiLWhseDdCN01SblJfU0NUaV90T0R5QVg4S0lwVjdFTlFlS1hZ0gGyAUFVX3lxTFBUTzNMZGZNclFIaXdVdGNfZHBFWmp5WThnT3hfNVVKTV95S1JqNXN3alB1bk9tRUJoT1pFQ05aSENPdDlFS2xqU0pDOFQ4bGl3YXBfdG4xWDFVMGFWaXY4U0YyMGJQMmZNZUtRTk5sSkZlczBCN3QxLTd2VER5MFhuNi1NUDRfand1Y0ZOTVBZZmNxTHRYTTFjNUd3TkhLcE1PZ1FyNHZ5c2RxbHpEQzRTRHc?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "kredivo klaim penyaluran pembiayaan paylater tumbuh positif hingga semester i 2026 kontan co id",
      "id": "6ec713e8dca203dd",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-51e6fa5cc1c38fd3",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-14",
      "title": "Muda-mudi 19-34 Tahun Dominasi Kredit Macet Pinjaman Online - Finansial - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOR2piM1FvdTVldFk0RFF3bHJFeHRmTlllbmI2UkZwUzlKdm5ZQWYzU3RuWlpucDVWbFNEb284eUE0cHV1WUZybDZjUzQ0N3FNNXI1LWtieERlTzNUb3BmRjZMNDE0N0dnUkJGbWs5MFRXRGdsOHRZSGJLeFRldGYxYldha0I5WVJTR2FGeUZ0YXVSVlBod0d2V1ZqVnJ0V21oZHUyRWdBdGpaTTNSOXI4MA?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "muda mudi 19 34 tahun dominasi kredit macet pinjaman online finansial bloomberg technoz",
      "id": "fd06a4e6a4958eff",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-25218b26278261ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "OJK Batal Batasi Warga RI Pinjam Duit Maksimal 3 Pindar, Ini Alasannya - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPd0lGemFqVmdiWWZMYVdEU0xKT3pHc1dUdTBWRXh0d0JkbWpPM2tGRUFPWjJ6eHYtemhLSGF1anh3OVRYUmNrX1loV21jVWNzeFJUMFJsSV9CMUVHZGN0QzhQaE1kTEpjYVI3U2pYOXZOUGhKeEI4X2lVdHRNTi1aZENmTHQ0dmF4cXhwS2NOTXVRQWgwd3FUOERzRDdzc0R5RzY1b3dYbG44XzI0bWU0ODl0QjE5YzhVb3ZlLS1UR3ZVeTgzZjV6WktHY9IB0AFBVV95cUxNd3dkTXJGcGdDSWFGV00xTVFsOGZXd2VpeWRNSlJBdFZkWk4tcXp3UFBuS29Hd201SEpiVXFWU0ZJWXM4TWtoOHl4ajNnSkV5V2lnaWduMmxvWF83YlJzYkVVUlFXOHR2ME9pVmhmLUtNVkJhLWQ2T2MwelNnMFcxODRMWlAxN3RpRTRTVmlZNnBFakdscF85LXJQbU52NkczaTBCdXAwYjNSYVo4TVdRUUNwSzNfUmx5TktxTk9wdlViamVBZldIem9OYngzNjlx?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "ojk batal batasi warga ri pinjam duit maksimal 3 pindar ini alasannya cnbc indonesia",
      "id": "9a5092d3b2e7085d",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6a20fcb265370d90",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "OJK Batalkan Batas Tiga Pindar, Risiko Utang Masyarakat Jadi Sorotan - koran-jakarta.com",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNMW5BRHVYVzdvUUtRa0xFd3FjSWxaTklQMFhqVndTSmVUY1lPMHNMZDRJTC1DeTlTbXZ3bHF2VllVTVV5emp1Q0I0eEZ4WHZuWFdWSGxwWlJxN2xNOHE2cGZXYVYzLUlFdkdPTUNWZE9BSnZQQkt2LXdnTDdoTjBiWkI3dXVnWVJMNS1KX2NMMkd0cHVTVE55LXhIV2ladkFPNUNqMkhLUdIBrAFBVV95cUxPbDBVaGNEc0I0MldXeEUxb0pZQ2E4anlucUtKdktFOFpWMGhwZVBwY1djS1NZZDVRNXNYeDFlMlhlM3FkbE4wTi1EaTdlSGVoeXVHZUdHVTllWjJPby11NEc3emZubXMzdWo1TkxlTkdxQ3kxNUFQRGhwTlN1eF9Gd0tWbVVGRml6amMtdzlieWNTeVRfdWJZUmUyejgwWUpjNGdOdHhteVhjeGs3?oc=5",
      "publisherUrl": "https://koran-jakarta.com",
      "source": "koran-jakarta.com",
      "summary": "ojk batalkan batas tiga pindar risiko utang masyarakat jadi sorotan koran jakarta com",
      "id": "ac7434d5e84b4c76",
      "domain": "koran-jakarta.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cabb5b467ed4a9e3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "OJK Malang Ingatkan Gen Z Soal Pinjol dan Kejahatan Digital di Kuliah Perdana UIN Maliki, Rekam SLIK Bisa Ganjal Cari Kerja - malangposcomedia.id",
      "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxNWUFGZTlmcC1JZTI2QlNXV0hmZkQ1RktvMkg3d00wb2FnSTJVUk9WU3VsREtibkdHbU5tYVlZWWZ5cUdGeGRyNnNGUEhIcy1qVEI2ME1iYU1acTFBSmpicEhuelN5NkQ4TWRac3gtNkFZUDJ2aTBxSnEyZWRIb2FDeXBjMkpJQnc4Q0wwcWZMZnR3MXlfNG1yQXo2RDZjVldqOGpsN2lub1lXNEtzcUQ4MkZkMjJlNHV6bzVSM0gtdEhGRFJHdlE0YzN3XzF6TmN6S0FjaEVrVE9tSFdqSTNYcmVLM3ZzZw?oc=5",
      "publisherUrl": "https://malangposcomedia.id",
      "source": "malangposcomedia.id",
      "summary": "ojk malang ingatkan gen z soal pinjol dan kejahatan digital di kuliah perdana uin maliki rekam slik bisa ganjal cari kerja malangposcomedia id",
      "id": "e05052833a5d4a83",
      "domain": "malangposcomedia.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-571eca4e24c301c8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "OJK Tak Lagi Batasi Individu Pinjam Maksimal di 3 Pinjaman Online - Finansial - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNdUNBbi1XMEpEUjNBeEYzM3piTnMwTF93X2wySXRuRk45MFdrZ3dQeFZnWF8yRG91WUNudmQ0QTduVGJvMDFkTkRWc19PVE9DdUVXZHNDOXJPMDZ0R0lGWGttVjdSZE1ZWDRLYlNaaXhTNmFwTDJGMmZzXzQ3QUVfalJiaE93QjBOOFBLRFRhUXlhb3pzOGxLMVg2S2RId3Y4dTJZNnA1ZmlmdF9zbnBRUzR0SmZmNm45?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk tak lagi batasi individu pinjam maksimal di 3 pinjaman online finansial bloomberg technoz",
      "id": "be8d5fbec90531b8",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-553a7d391e1d5887",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "OJK Ungkap Kredit Macet Pinjol Didominasi Anak Muda dan Laki-laki - Aktual.com",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOVTJUaWpSTGNfbE13SGs3MnJKMDYxQ2VIQVNyRW1VSFhPazljdjhpemh1S1haeWlSc0wzaHU5VGpEOHY4ejFIX1hrRW1RUnlDUzlmdmpxcmN1RGFUXzNuTmd2VHJrMVBVN2hRelJjN2ZuMUdBdldmY29SdmljQW11cHUwMzRvYjBkNmhsbmpB?oc=5",
      "publisherUrl": "https://aktual.com",
      "source": "Aktual.com",
      "summary": "ojk ungkap kredit macet pinjol didominasi anak muda dan laki laki aktual com",
      "id": "5f52be620848494b",
      "domain": "aktual.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6f2504f407d335c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-14",
      "title": "Rekomendasi Pinjaman Online Resmi OJK Bunga Rendah dan Cepat Cair - https://rakyatcirebon.disway.id/ - rakyatcirebon.disway.id",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQcDhZTVpuNlRNTkNGbTRXWEh3WWNtWVQ1TGItR1NrbWVSS1lZemtSUU9CajlmZFZWTDgzWVFNazBtSVpQc0hxRmVDd2gyNDVVOUtQcFdiSUNwelRfejVwSXRWekhyT0tGajFJQUViZVJ0UXU5d2E0RVJXYmJnTE9qRndjQ3h5ZVA2U0w1R2NPV3NpQU9IX2R4ZmE5dFFlbEo5ekthUy1IVm5ReEZ4TnFhU9IBsAFBVV95cUxQcDhZTVpuNlRNTkNGbTRXWEh3WWNtWVQ1TGItR1NrbWVSS1lZemtSUU9CajlmZFZWTDgzWVFNazBtSVpQc0hxRmVDd2gyNDVVOUtQcFdiSUNwelRfejVwSXRWekhyT0tGajFJQUViZVJ0UXU5d2E0RVJXYmJnTE9qRndjQ3h5ZVA2U0w1R2NPV3NpQU9IX2R4ZmE5dFFlbEo5ekthUy1IVm5ReEZ4TnFhUw?oc=5",
      "publisherUrl": "https://rakyatcirebon.disway.id",
      "source": "rakyatcirebon.disway.id",
      "summary": "rekomendasi pinjaman online resmi ojk bunga rendah dan cepat cair https rakyatcirebon disway id rakyatcirebon disway id",
      "id": "f43ca6c6c0dcd9b7",
      "domain": "rakyatcirebon.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a638b7b0513e80ae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Ada 16 Pinjol dengan Kredit Macet (TWP90) Tinggi, di Atas 5% per Juli 2026 - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOYlZFUXJKZWloc2o5Q1pTTnVjcU05eU8xZ09tWmhQRjQ1TnU1cnN5Q05vclFGV1cxdmpxYUZLSkZTUWZXUlhmRC1TdFg5Rmpjbk1hazFCWjItcG9pbHlvY240eUg1bUpzN0ZWSDNvejgwbFpIaDZicjhKRmxOMHlUX3VMa1FwbzlmRFNlUjJGR2o2akZ0cUtVNXFsOU9LNkE4ZUl3MW1Cek1MYl9GQ1RqbTBEVC1VM3J3ejhvcVp1aklCeHM?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "ada 16 pinjol dengan kredit macet twp90 tinggi di atas 5 per juli 2026 bisnis com",
      "id": "a573a88ac5e64756",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-72ac4d6c8c689d73",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-15",
      "title": "Bunga Mekaar Turun Jadi 8%, OJK: Tak Langsung Tekan Permintaan Pinjol - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQSTNOWDljYkpNWDZpVmZmVEJCTzdFZklaZUtjY2x0SVhQWWVwczlHdWhSbkpIN2NaWFY0SjAxSXRNMGVLNXhORlFVYUlqNzA5azlhVk1fWEUyRVRQb1dpZFR3dWJiWU1yOFh3QmdSdWpxTzd1LTMtaHBDUi1mdU8xVEZKV1ZKaWFmY3JnQWY4NnRpSHA4MjdDOTVoRFJOWF9aMmxJUEJZY3A3bnJwUm1YdjBZLUxESVRYNzMtWA?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "bunga mekaar turun jadi 8 ojk tak langsung tekan permintaan pinjol bisnis com",
      "id": "39406fbfbe9a50c9",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 45.1,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.7,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4769f3b163862df8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Kasus Debt Collector KrediFazz, OJK Masih Pantau Perbaikan SOP dan Penagihan - Katadata.co.id",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxORC1BMmViMUM5MXJFWVFZbzNFcEo1MXBNMlZmaGc3X08zWDVKbGJNRUM1RVkxaDd0VTItT1QtNGo4Vlh5b1h6TXJtLVdyX0VXYVIyOGNndFZhNGIzR3J4US1IUTIyRFVLSlEwVF9qVWxacFBiSFdlLUdTWGdjdktjQ2t2V1ZPV2xYdjJCT2FUYUpxbzhOTk41c3p3bm9wOGJqY1BrZ2QzZU9RMXNYQUc4bHBHNUxHSm1MQy1NYWVzYzZUQVBmZGV30gHMAUFVX3lxTE0xeE13WFVORmNhQ2M4aHpiOXBPZUNmN0RqZnVMS3hOTjJIZ0NUQ213djR2WW5UallOWTI1UDRhN1dKNVJGd0RnYjJZWlo5ZlkwazREcDJvUlRHTklQQjUwSTExVmxnX1ZpQ2FtamdhV0lUdkZQWnU2R3FuNGN0d2dTS3FweFNYLWlNalJsQlJQdnFybjJ1dmR2azJ1cnFIcE1relF0NHhkZVZ5WmVIb29pcWJMNkZuMUVsOXdDd0RfNFdjZjdKSE5OV2F1eA?oc=5",
      "publisherUrl": "https://katadata.co.id",
      "source": "Katadata.co.id",
      "summary": "kasus debt collector kredifazz ojk masih pantau perbaikan sop dan penagihan katadata co id",
      "id": "026527c3093b7712",
      "domain": "katadata.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Kepala Diskominfo-SP Lutra Imbau Masyarakat Waspadai Pinjol dan Investasi Ilegal - batarapos.com",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPNXo1T0pHLVFzR2RlOURESEFPck1HX0hXakhBRnhLMU5FdmsyNlEtQkZkcVRUSmFldUU1Q050MmZFdVR5NkwzUmNpR3dSdEs4WkdqSWdJdTcxSEVzblAwcmZwYnpnZUItenhhekFhSnY4LTlPa2IyWGJrSEV0SjRFSm1qcS1FUDBGWGpVd3d1Y1dmTHNMZTBTNHhEaXUxaFlVcFlSU3N3?oc=5",
      "publisherUrl": "https://batarapos.com",
      "source": "batarapos.com",
      "summary": "kepala diskominfo sp lutra imbau masyarakat waspadai pinjol dan investasi ilegal batarapos com",
      "id": "e981c7fd8e7b0ccb",
      "domain": "batarapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b93fc38ecf0cf67c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Kredit Macet Pindar Didominasi Pria Gen Z, Bos OJK Buka Suara - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNZTdzUFI2dV8zTHhOMVFYZXFkWU5kOGUyN29LS2E1MDAzVmNhbFRqZ2VicXZQTVctZTBkR0pHNkozWnhLUlZiT0lBSGlCdV9WdGE4bTJjZHJTSF9HUDU5RjlORzdKUnhwbC1mSWNaSFowa0I4U3JKMWsxS1M0Z1JfRVNSWkk4bnZKdGZUakREQXlDVnYwNUVHckFMQ29hM0FzQWRrYkI2MUI5OFFidUV0aXZDVEJaZkVGTXRYd2tUTdIBxAFBVV95cUxPWGtJb1RaMG1adVNWSEFjc3lSZU1Ya1o3TVl4OEJPVjhGSjJPMTRDbm14bm5sYXR6LWxsR250VjBLRjRDRkFSRDhILWdNY3lKb0xJb3VyazVnbXYxRW1VTzRmcW03a0ZHYUo2NzJiOUZYbkw0LUg3VFlRbXhjZHNRcUkyZjJPTng0em1BQ2RYcEptR1QxRzE1cGdYN1ZQWktaRlVIOUNEMTJnTEhxRzJVX2NXNC04VDVOaENRa2lqazR2aTZ1?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "kredit macet pindar didominasi pria gen z bos ojk buka suara cnbc indonesia",
      "id": "23552c7eff88784c",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8794acf1854e631e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Kredivo Garap Segmen Usaha Mikro yang Belum Terjangkau Perbankan - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNTnFvSjlZTTJIdnVXdVZtU2VqSGQ5aHFhRk5nbm1OalpTa2h5WDY5T2VBQ0lBOTQ0ekNGWmRPSms3QUxoRjQ2VkE5Tl92dFZ4dHVfaGtnemtrbnFXdHNSc3JHNFNfWW9EMlVtU3E0U1E1Q0NDU1REV0wtcUNXeHJQTVhnLVQwYXkyajlUdW9SRFlleWNpa05XajZzMkZtcEU30gGaAUFVX3lxTE1kVUs1TWYxLVZCT1h3eTd0ZHJESUpKMzRQU0lPc01kMklvZjZUbzhfRzE3N0ZZZFYzcEprQ040T0M3MUxsZUlLS2FTWHNlT2U2U25oa1F2T0xDdUptblc5eXpQOFE3bXMwekd0aUNxVjZCR19GcVNqUGRLa2hLU05lbmpQajdHb1RueGNWdW05andtWkQydmZwSHc?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "kredivo garap segmen usaha mikro yang belum terjangkau perbankan kontan co id",
      "id": "edc648b627251c78",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0fa4efcad0139267",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "OJK Batalkan Rencana Pembatasan Pinjaman Maksimal di 3 Pinjol, Masyarakat Kini Bebas Ngutang - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPLXloMG95bVRtVk4zdDRtd2Q5Q2k4RnQzcmg5TmdzbERDM3VCRWQyOVluUFRVYzB2QjFrbmNteUx5bjdQcUwzdnhHZzdfR2ZZQVZtam1PUDFpY3Nzd3AxVmtPWGlWYmtIVy1TaWcwakxFSnYwR2JzdG5WbDVvVmJkR3M5UGk2ZFNBSFJrNkdkYkx4NjJoOVQ4UDB1Nk9WSS1aXzRJaG5LVGV1TE1VZWN0OVgwYk9WX18tNGNLODlKTGRfTWlaeDNMX9IBzgFBVV95cUxNZHdfOVk2V3dkWmZWV09GSkVrTnBvbGd4cHB4OEQ0SUtXY0tfU3Z5bTlFRmg2VDkxTHNQSGZpYnhrTWVwUlE4M1dPcG0wWkxDZk5iM0lzTWRtQnktOTFkY201bFVWcldtMnNIYk5wc1kyRHo0NDZhTkhqcmlSNXdVWHZwazVzdmRZal9nTl84b3g0dGFMMmRzN0xmVGtfZWNHWnFzblpFTHJYTlgtVVFMWWNOcVM0VGltUnZRUGJHX2NPUDFGNHlseVFocHZjQQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "ojk batalkan rencana pembatasan pinjaman maksimal di 3 pinjol masyarakat kini bebas ngutang warta ekonomi",
      "id": "f5c8147915e98dde",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-af67f6ded05aaba6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "OJK Batalkan Rencana Pembatasan Pinjaman di 3 Pindar - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNU0lyS0ljZFVUOTQ1WjRUMEVSQ2hNc2xCNEZEWkl4cXlvU2VPMW05aGZBOU9PZTVWOS1vTC1vSVZMb01XVXoyd0JHd1VxSC1lM1ZTZW1veUdIdU9IbDZCWW05SDVGMlRzU0xHY1BsQlNqX2tvRXVlT3hwZk5CZnVLU0pBVWk5ME9hRmU3QkNUSWdNQVZMUkVyQVV3?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "ojk batalkan rencana pembatasan pinjaman di 3 pindar metrotvnews com",
      "id": "8352b3b201419a0f",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2c0108537a7dd41e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "OJK Cabut Batas Tiga Platform Pinjaman Daring - nasional.tvrinews.com",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQbEVRSGpzbnNVSXlzaHpuVk9JY0l5SWxqUFFYNzBMR3lxWWtGWi1fNjJOQ29ZcGc5UlNySGV3QU5mNGM4ZUkwbVh3ZnI4LTNxdW5vZEFFMFhzaGllQzdxbTc5OFlJXzIxUDg5Rm52bjlfa2xxWnV1aWhxZ1hRQW1hY2d4ZGxYeGZmaTgtSEJRQVlZMURB?oc=5",
      "publisherUrl": "https://nasional.tvrinews.com",
      "source": "nasional.tvrinews.com",
      "summary": "ojk cabut batas tiga platform pinjaman daring nasional tvrinews com",
      "id": "906d93e38c733286",
      "domain": "nasional.tvrinews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cb8052ed2d1d7bb4",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-15",
      "title": "OJK Cabut Batasan Pengajuan Pinjaman Daring Maksimal Tiga Platform - Peradaban.id",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5vdGlYUzZmbzRzdnhDYXFRdVFSZjFJWkRUdXZ3SGlrMW1Qb1BfWmwxSm5XTHF4Qm5RRF82N3pLZS1ibXV1U05sLVQ0bV9uRVlUbncxRDZuVWd3dTZ4VmlSbHFpeWY?oc=5",
      "publisherUrl": "https://peradaban.id",
      "source": "Peradaban.id",
      "summary": "ojk cabut batasan pengajuan pinjaman daring maksimal tiga platform peradaban id",
      "id": "41d24afdd823219b",
      "domain": "peradaban.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d558eded3ca3e312",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-15",
      "title": "OJK Hapus Batas Pendanaan 3 Pindar, Kemampuan Bayar Jadi Penentu - Katadata.co.id",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNeVhUNE05WU5vV3hlak5kWGNxelRvc08zQjNoblZsaWx5UjEzSkFXQUwxMzF6WWhidjdtWWR5SnZBWEFOakkweEswUHQ5VjRlUlJiSTFDODR5b3hXX3FLaGotd1FyOWxIMDdlc09rY0x5X25mbWJnQTFCMUQyLUk5X3NrTmVtdDZhSnMzazY3MUs4ODNHTFUzMXNWbWYzdjVzdUE5dzJmcnFwdHN3RE9mRjBiVG5xY1XSAbwBQVVfeXFMT3JxWnNnNGNlY1hMdkwwbHNfc003NGgwYXRLX0pqX1RtV3JKOWZNOTIyNkl4Y0I3U2JWSzBxdTN3VVB5OVNrXy1fUFFNSkZPVzVtVGU1MmJBNV9yNlNtbUluclNvSWw3MmE2YzdKNDRncnNuZWZsY2RaeTdyZ1FlZkh2RHJqdUdWUVNBZFpfbnJNeWpvOEVTMERrZ3g1WWlIZDMwcmpPdnlhd2E3bjdHV1lrRlJwc0RRV0JlOE4?oc=5",
      "publisherUrl": "https://katadata.co.id",
      "source": "Katadata.co.id",
      "summary": "ojk hapus batas pendanaan 3 pindar kemampuan bayar jadi penentu katadata co id",
      "id": "48eb05ddc4e25a82",
      "domain": "katadata.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-805fd371950f477a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "OJK Hapus Batas Pinjaman Pindar, Masyarakat Tak Lagi Dibatasi di 3 Platform - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQTHo0bGNJOHlFUUR5RGREQzJNVXNmeXU4NGJWbXRCVE1ES0xDTWk2T2t1dVpqVk9SNW5hbFFyd3piakdUQVV1aGluVVNjMmU1YmpKQnF0Ujh0VGgwMEhlNXZKQ0NRS2s2Q1RVU3g4VmliNTVNZXNPRG13bnJub2NPMjFFdW9UNGhsWU9PR3pwMlNVbUJYeXZsUkoweU1jUXo0T1g2WDAwNjJ5aWZFWUxtbnl1eXduQkFBSXAwc0xR0gG-AUFVX3lxTFBTeGFraTJtMXc5Wm1UQUs4OHpBMnNiSzJ3UXhsTmFQTXRncnBwVEVQN1JrTEY5bm84VmtOQjhzMW1HM2dXejZwck5QTlFyb2pKOXVtb1R1Q01rd09DSnpmVEpxNktoVmpDd0FFZ3ZCemhSY2VBM0Q2UDZFUExQMnU0empzdGIxZ1NMXzVSbDFpdWFsWDFBT25pUm5QUjdxek5BMGRxY003cWRaN0hmazJTb1BoakZHUTJlZk50Unc?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "ojk hapus batas pinjaman pindar masyarakat tak lagi dibatasi di 3 platform suara com",
      "id": "68fcd2635aaf6bc6",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53015e89f5c82744",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "OJK Hapus Batas Pinjaman di 3 Pindar, Ini Ketentutan Barunya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQMm9zeHhqcVlzWmJ5V0xsLVRpenEzaG5HU3BTd3phZ0ZoVWNHSWZWWjlQVmYwTG9heHFJWEVOMlpaVjBqTU9odERqQkV1dnd0bmtpTGtJWWdVM0R4WlI4RVJSU215UTdMQzY5WE1UUk52cnpZUmtacTI0RUl2LWpZWnpJSW9pdGQ3OGw0dw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk hapus batas pinjaman di 3 pindar ini ketentutan barunya infobanknews",
      "id": "8e555016bc6f16be",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a3fa8163741de781",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "OJK Jatuhkan Sanksi kepada 81 Pelaku Industri Pindar dan Pembiayaan - Media Asuransi News",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPSEVRd0JDVjVWSzlXellDVHBmbGQteE94U3FnRFJTTTlrQ0hULW5rRlZuWmxuZHphV01WVXlEOUNMMEFjVDlWVWtHZ1NUR3VfZngzTTNMSFNVa3had3ZONjNQdGg3VDg2WjNfZVZVdnl2THVqZ1RBRkpfY1BRbEk3QmtER2s5YVNBekVYWDlYWEN6RkhsdUNEekxuVmUtLUs2TlBrTFJXWEFpeXo3a0J6dg?oc=5",
      "publisherUrl": "https://mediaasuransinews.co.id",
      "source": "Media Asuransi News",
      "summary": "ojk jatuhkan sanksi kepada 81 pelaku industri pindar dan pembiayaan media asuransi news",
      "id": "aa8da0a9b1d67f06",
      "domain": "mediaasuransinews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-791cbae7bf126f07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-15",
      "title": "OJK Pantau Investigasi Internal KrediFazz di Kasus Debt Collector - Finansial - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNUzJiNFRkLUQ2QkJZTERlUnVXN2ZXSkRqelQyQjNOdjc1Z2ZKQWxRQ29feml4YVd4OGxOTFJSdy1nWXMtS2YzaVhTZ01vdklDM2sxS3lqRDU5RUpJV3FiWFdrUjlmOUNma25KT0xMR0tvcXg5U2NlX1NWMENaWFNQTlpEQ0g2R3J2NExpUFM4THAzVFZYZzR3VWhHNHQ3Qm1oVU1BRWxPY3NQUTBjNjZ5RDJoOTNhM3lD?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk pantau investigasi internal kredifazz di kasus debt collector finansial bloomberg technoz",
      "id": "8d9f1c1d4de1a59d",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 73.8,
        "label": "negative",
        "negativeWeight": 3.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-946543e003fdbe2a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "OJK Tak Lagi Batasi Pinjaman di 3 Aplikasi Pinjol - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOVjJpX0d6bjFSUThYUzcwUm5ZUHFQTnRIWDRtYmlVSV9pdW1STDZkNTl2WEdibXJYdlNNaThpLVM1TGVvMkZnR0JfRjctQ2EyYzBuaklQOHBNczFOaWtvblFKeXBtTlZ3eG9EZDM0VEpuQk9SY19kTGFSbnNGVnJUSDlTazA3UlFTSlFlTjJsZ2dkSmVuaXZRMNIBngFBVV95cUxOV0NOZmIyY29RdW9RZjlqNW1nY08tMzNOTXMtX2ZlM2lrT1hHZlRQSTNJNGt1Uy11bkFVNG5xR0gwOWxfNUFXVmJ1U3lobm1yVnVPV2U0OTlZZDIyMzRSamYxUXBqcUFtSkwxUmJXSDdkXzFLVDJBTnUzaElJRlRrSTJDUkpqbVVtbTFOTDVvTDRfTzIteUVITWhxd3F0QQ?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "ojk tak lagi batasi pinjaman di 3 aplikasi pinjol detikfinance",
      "id": "861a6e94d3161486",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b16eb9eddfa4ec53",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "OJK Ungkap 16 Perusahaan Pinjaman Online Punya 'Skor Merah' TWP90 - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNNGJyNXFDRGR5b3p0aWhRU1NIdTZKZzZaR3I3REc5Q3Z2aDl4WlpwTXpxeTlvVUpVNXk2dVV0MkxJUko5VVduYmFYc1NQbXEtcTZtby1XR0REbUxVV05HWU5NUjlIRzNrM1VRN2EzTnFVZmVNeGdRdFN2WVpQVTBJU285Q2V4d3J5SWF5NlA0WUpJMXk3TWk4N2pJTld6OURiblZraW5IZkdodWp6RHE1dTFmam8yZw?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk ungkap 16 perusahaan pinjaman online punya skor merah twp90 bloomberg technoz",
      "id": "8e76f2cbee730cb7",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.8,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ad830bd4218b6c09",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-15",
      "title": "OJK: Implementasi Ketentuan Analisis Kelayakan Calon Debitur BNPL Berjalan Baik - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQM25iUWZHd1VlYUM4eGFyTE9wYnAzdS1PNmhnSkZFam1zQ1FkVW1COUdQQW1oUW1sdnNlZDNfclZycXg4ODhGekhXVFE2UVFiTS1FMTZEbGw0VGhXR0VsdENuenZ4OTg3Zi1vNy1VaDRMVEw5TlRhaEZZYk5hYmRPc0RsR3BLRy1seGx3eUk5ZzJDRWFPX0pSMHBTVlVrYm1icWN0N3huS3pBMm9hTzRFeGcwRdIBrAFBVV95cUxNbFhwSThQQnVMSVMwc3hrcHNFRlFrb0dlUEpIWF9RamFSNHRvbXJYUVM4MjBqT1Jld0FuZjZ6cFpVQVY0RngzUzAtcnNxcWJnLVhFSXllRFRPcGowajFBNkhxTlRzNjFNeGttRkRQeVdrMHJFQWVIWVlIWnF5clc1Vjg5cnZ3a1k4YjAya3RadGV6UFdiSXlaUDRvWVFjN1lOZGZ5OU1rTVF1azkt?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "ojk implementasi ketentuan analisis kelayakan calon debitur bnpl berjalan baik kontan co id",
      "id": "84f7d706f6838f52",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9583c19b07424945",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Paylater di Kalangan Generasi Muda: Solusi atau Ancaman Finansial Halaman 1 - kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNNnFlMU1GWFNKMFY5NzVvbGFXSmtXVV9CVXh6ZmdlOU1Sak1LSnQ2STA4dF9jb2hEa0ZWYzZBY3VxQTNZQ0ROZFBmSjV0TGlndThrU3RLOHBLZTJHZDA2T3FPWHBKcm00cmtBRlY5RlBVV0tRNWJsQUlvN3E2N0hZV3QwV2dCRHA1Ui1pUi1xMmRWUTlXbENLd3g2SDFVaGJ4SzNIUXpwY25aaGtsTG1FZjM5WXZVRnlaZkEwVFF4V3FNY1Riby1ZTg?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "kompasiana.com",
      "summary": "paylater di kalangan generasi muda solusi atau ancaman finansial halaman 1 kompasiana com",
      "id": "c612251d4f962250",
      "domain": "kompasiana.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a7065c0c8f7613b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Pemain Pindar Susut Jadi 94, OJK Ungkap Biang Keroknya - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNRUVzZXJuQ3N6OFRTZkUzb2JpNVgzMUpscElGaGpmVkN4VjZyT0xhaXBlUFVCbmVIUDJESm9ZeldLN0ZuSWw3Njl4eDdHQzQ0UDNPd3pXYllzOWRqbG1HSVpQYjZxM1ZPN3BrWDFLV0ZPc3NZWnA4Z0d5QXNKUzBuS25mVlQxUUVPaVVnelZtYlh2Z0RSMGfSAZsBQVVfeXFMTnNhTGNUUk1jWlhfTGR6aEo0bjB4UnZSWkJYaWZLNE1nUl92SkNfcHRCdE1feGVkRUdXeDhYVUlsOHhYYThCNnQ1Qnd6ZlFHNWpobFJLZGhFWDFQX0NYREhhUG1QUlBXWlhxTDJNZmF1QXRMc1lmMVVHazlWcFh6Q01aOWlTWlMxYnBmZVZoaVNqa0RwNUxQOWZUVVk?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "pemain pindar susut jadi 94 ojk ungkap biang keroknya warta ekonomi",
      "id": "c4665d0737f0d1ff",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2cf710bbb34446c8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Persaingan BNPL Makin Ketat, Kredivo Andalkan Credit Scoring - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOMjl4cDRXRU1vVHYta0VVa2ZfelU4UTNUamgyal9XVWMwZkpKalVKNFRDRktTNFlGT2IycXN4OG44eFBpSXRZOWFOa2dTb2R2UXJZZXZqTnlVZFR0M2MzMGZiSXc5TzY2TVNncDY0WmZUMmZ4cWFZamdKeEFBZ2ZRaXpmUlRuNXhjSURYS1VJaS1PbGNSWUVyWlln0gGTAUFVX3lxTFBBc0VsT0dQY3pNS1FCcmFlTjV1UkNJUGRvb1JxaU9Jd3o0WEdNMlUtSklGaXNmVWtySzlScTAza0hLeGI4UkM2TUxLLS1CdFJyT000WnVONzNqcmxIaGF4c25KeWdrY0x0aUY4ZmlJZTlZUmNQandNdUNvTjQtRjgzRzQxNDNQcDlsNFpjbnhZZUhmUQ?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "persaingan bnpl makin ketat kredivo andalkan credit scoring kontan co id",
      "id": "d67e9bb097e6973e",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d3d425608a6a1569",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Risiko Kredit Macet Pinjol 4,32% per Juli 2026, Usia 19-34 Tahun Mendominasi - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNeXFteW4yRjI4SE5hemtLR0FiZi13bjVRYmxFa0lNNWJPY0ppd1MzOXB0S2V2NXdubld5bGYtNmJfLTBTZnlUOUxFRGU1aUQ1SHoyeW1UNVJ3RDJhWXV2dE9la1lUUDU2SGluU2twZkZCWi1IR3p5elEtc0d6a0dNczY2dFAxcHN0cFgtbVlqZzBGaW9ULTVyMzRBc05vbjVCd0ZlRHFLU2l0RzRk0gGmAUFVX3lxTE55eURPc2RZMlppRi1JMjM5Q01qQjFPQ2tGQXJLa3N6TWx6eFBwZWR2WURQa0dpdnZRdVEyWFo4VnVuSnFnYkF5Z0tOV0s2ZS15TmM0Yi0xOWVEWXM2d0J6UklONHhDU3ppbGNLUTZveWNRRkJKa0EtbHljamNnOTE3aE5JeVg0NlR4RlpDVWxjXzB1LTVyZkRoOHVjaEh0d0RiX3Z4UHc?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "risiko kredit macet pinjol 4 32 per juli 2026 usia 19 34 tahun mendominasi kontan co id",
      "id": "61f278518b0adf40",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bba96b67e53c5e56",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Sedang cari kerja? 44 perusahaan ikut Job Fair Jakarta Pusat 15-16 September - CNA.id",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9TYS1lckZBUi1vWkh3XzBtUVlDRUlsN05ZMy14V2JHLXpSUFJpa3pBNnpzRFhhYnNqOXNFRTRzRURmUy1HYXdpaVBwYi1VZUp3TU80SnVQSW82RDAzRzllZXVDVjZCTFIzc21Rbk90TmZTVmVrNnlyZVgzSQ?oc=5",
      "publisherUrl": "https://www.cna.id",
      "source": "CNA.id",
      "summary": "sedang cari kerja 44 perusahaan ikut job fair jakarta pusat 15 16 september cna id",
      "id": "891399fee407e927",
      "domain": "cna.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-38b3a4fe7c02265b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-15",
      "title": "Tanggapan perihal “Kredivo Klaim Transaksi ke Tokopedia Sukses, Tokopedia Menyatakan Dana Tidak Masuk“ - Media Konsumen",
      "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxNdU53U2lucEpjNl9VNVRSSDJjRXVDQVhNUWNaRXppcmZ1R0wxTEIzT012SzVtT1pZUlFQSjVMNFRsQ2tSUy1ydmNzMmI5aG5HclNxQ2RuNjRvZzVpbGZhdGhGeHJ4OFdDWXRmRlYxc0YyLWpNUTczN2luaHhhcTgzcm5uOTZpejk0TG10aVpJNlNPSF8tUXJBT1RwSGVXaGxjOEhkaEY1QTRZdnJkeHNZMV80SmM5eFdjOUtHd2ZHc1g4UXN3SnRKN3dIZVVJZU01aWh0clg5VG5ZRFRZSlJz?oc=5",
      "publisherUrl": "https://mediakonsumen.com",
      "source": "Media Konsumen",
      "summary": "tanggapan perihal kredivo klaim transaksi ke tokopedia sukses tokopedia menyatakan dana tidak masuk media konsumen",
      "id": "89f5350445d84683",
      "domain": "mediakonsumen.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d1fd559355f57e41",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Anak Muda Paling Banyak Pakai Pinjol, Tapi Sulit Bayar - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNOE9KeVpyMVN3blVGWWIyR3lLMmMtTHp4NmxEWHlaS3g1TU1lcEtfS1duZXBFT1Q1dHdBN19UVkFwR050UF8ySWllRGpael9TTk9zN19fTzhfNlBReFJOWTRoTzk4T1JUU2c3aExfOGdybkU3TXJlLVQ1RmtqdkpaUkFJTWJYWjdDSjBDRDZZaDRhY054V3fSAZsBQVVfeXFMTzk0YzVJcFQzdlphbUNsTlcxeEx2WDF5UGdYOGdRZXlKb2Q2MV92bzg5dEp5c0xsaC13b1pVdGJqNU0yQVEwMl9nc2l1U1ZWd3JrWkpoN184MnN5YUc2LTF2SGs3YVNKNUhKRVA4ak44dDc3Q21RcFlJY084dEtXc1F1Q2lGY213QVpoRG9IUlI0d19NZlBvcXYyRVU?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "anak muda paling banyak pakai pinjol tapi sulit bayar warta ekonomi",
      "id": "50f6dd648a1bc954",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eb88b623ebb2065a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Cara Beli iPhone 18 Secara Daring dan Luring di iBox, Digimap, Hello, dan Blibli - Bisnis Tekno",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPbU4wMFMxRlJXTEwtSmVMaXRLaUV6amctSlZyU0JqVzVZZy1GTHNQc3J4NUNkUFJFNXNNcWJKMzQyUFBwV1B3bllaWU1oaHlGWWJyTl9jTjlncDFMRkptcFZod1F2V1RoX3VqRi1CUU92a1Q2WnhmNXJUU0E1V0FmLVhhaWw1OTNZTElVdE9IMzcyWVFvSnlicEFPWjlNMDJBTDFXM1hrV2tnR01WS2c3LVZOZVZFcXNUVHZ6V3JoWWdMaGlPUzhia2ZMaC0?oc=5",
      "publisherUrl": "https://teknologi.bisnis.com",
      "source": "Bisnis Tekno",
      "summary": "cara beli iphone 18 secara daring dan luring di ibox digimap hello dan blibli bisnis tekno",
      "id": "8e28296482e2e4d5",
      "domain": "teknologi.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d198d01be618d83",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Cara Cek NIK KTP Anda Dipakai Pinjol atau Tidak, Waspada Penipuan! - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOM2tYRlRGMFRuNnJZZ0dkdEZpQi1mWDZnMWNQOVRVamVaNUhBZkk0enFZQXpMVTNDTXdsRVA5OG1oREVfTzY5NHRTbmFoSWtCNlJMMW4yaldma19VT3BIMm1jMW96Mk8yQ1BoWDQ5X3B1NUFOZ2ZJemdMYXdleUp3YmFjSjNha2JRQ1lRYnVodnFZc1J2RC05T18zWGRJb0xZMG1kZE5Ib19IMFBBeU9tZnB1Y3JaUGpPMXBJU2V4SlVNZw?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "cara cek nik ktp anda dipakai pinjol atau tidak waspada penipuan cnbc indonesia",
      "id": "eff588596181f4d3",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b628ba6f89d69e9f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-16",
      "title": "Cara Pakai Fitur Minta Uang di DANA dan Alternatif Pinjaman Resmi - kreditpintar.com",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFB5THBKMnp6eVpWT0EydVZEU1ZLQnpCaFlGc09TT1laVFJ6RDRJMDRIUWN5ODVjYXVxQTl3OF8wTWtqS2pQcU1YR1dZZ3hqTHo5bnZEWmcyTDg1cXl1ZkRqdXpiRGxjcENPZW9YMEN0VnR1MGd1NkhrQ3lBbWs?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "kreditpintar.com",
      "summary": "cara pakai fitur minta uang di dana dan alternatif pinjaman resmi kreditpintar com",
      "id": "2f807dfb07433d3c",
      "domain": "kreditpintar.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8108229a6db44eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Curi HP Korban Kecelakaan dan Gunakan untuk Pinjol, Mantan Residivis Narkoba Ditangkap Tim 1 Klewang Polresta Padang - Berita TVRI Stasiun Sumatera Barat - TVRI Sumatera Barat",
      "url": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxPTmxSbUF0WmJxcUswXzRRdFlfS3RoR2NzSUZKaEtGOThBRmRWeDM2NWpJd0dCRnFlSlVjWTNHM3RiQUd3Y2dtbWRLTEU2enlaTXNBOGpNenppZHNLM2tUM3hfMGhIeXNHdVhBMEttRVl6aHFhMFJPMlB4dmNoQkJEaHRnRXJqSWgwQlVsZEVtM1lmb21FS01jZEN4VXVvaklVUS1QbzhMWWlWXzZrN1JKdkdEQklCRFRwWnlfTWE3VFhtOGZnMFU1UndxVGRIUmg2T3k0cW1Qd2ZpdXF4SGduVWl5VmVXZzMwQzQ5aVlhZ2s1RG9wSmVVSE5MLXY?oc=5",
      "publisherUrl": "https://www.tvrisumbar.co.id",
      "source": "TVRI Sumatera Barat",
      "summary": "curi hp korban kecelakaan dan gunakan untuk pinjol mantan residivis narkoba ditangkap tim 1 klewang polresta padang berita tvri stasiun sumatera barat tvri sumatera barat",
      "id": "761c66c11977304f",
      "domain": "tvrisumbar.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3be964075728e0a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Data OJK Susut Jadi 94 Fintech, Begini Cara Cek Pinjol Legal 2026 - Readers.id",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1pWG1RaERSTWlqak45OEdfcE5IWEtBLUZpRko5U3V6Snd4ZlM2ZVQ2eTAtakRSRzl3eUdMbDVLMVZWdXIwNzBkWEJpZFFwQWJtQW9IQW5obDU0WUR6NHY2YTNyVUEtTUQtLVFoN2RtY2JJaE0?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "Readers.id",
      "summary": "data ojk susut jadi 94 fintech begini cara cek pinjol legal 2026 readers id",
      "id": "3aa0da648c61894d",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8b738a32e0c41a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Ekuitas Pindar Tertekan, OJK Beberkan Penyebabnya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE5VOW15Nk5hbE90elNoSGU2QkJaa0FmcUZySGVTRWJucFA2WjB3enFjMTFiUGptdEpVNDF0OHJob2I0cE1FREl1VGtPdDdIaEpxMUgxTXRWT3dfS0tDZk16bW8tWlgtMXNwMkJWSHppVkZhNWtZT01RME01NXhRQQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ekuitas pindar tertekan ojk beberkan penyebabnya infobanknews",
      "id": "1bbf98fd9c929400",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d1d4cdc65b609e6e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Ini Penyebab Pinjol Ilegal Terus Bermunculan - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNaUxTM3VwOFI5Wk9PVnlhd2FUUmFxTS1aVzBFS0s1YlBaSzQ3N2ZsZC13cV8yOUJRV3U1cHM1VTF5VlR3M2ZVbGZBRE5XbTdnYzlHbUhmR04wMFVPTWJaNjAzTW1BTnR5Qko3dXg4X0tZalFlUjNHel80LTFHc2VZMWIzbHE3ZGJzNlV2amI2R0xpMUZHemfSAZYBQVVfeXFMT1dQc3hxcjdjZTRtY0kyT3BZM1o1WmdvQXgxSFFTTU5IT1BxdmtVMXo2UFdkcWNpYXBPekpDZmJKQVVzeng4U29FSnk0OFBqcTl0WlFfREc1NWxiMG5RcmJpNW1ZQzJvMHQtNm9qZkVFUzVvYTFXajlXam9uSXAtU2ZVTVluUWo1TmNCU0piTVQ1QWZLdlh3?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "ini penyebab pinjol ilegal terus bermunculan suara com",
      "id": "36c976cb02d388cd",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fa65c5d3433fe39b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-16",
      "title": "OJK Bongkar Kondisi Pindar, 16 Pemain Masih TWP90 di Atas 5 Persen - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxObzBKZ3ZxMTdTMGZtZjh2V0lZckFsUDBwSDhuZnZnZzBuNWlYVlNUU2Q0RVZrc1pua280QTJTZDBxS3NNcmlLQ3p6cGJpbjYyOFpiWWdjQW5FQU5iX2lzT0FvV3NqSHlsRVNlZFYwaEtERzZJVzBlSlhOdGNDbUNYUkk3ZlpxVUZTRHJvR0pTTElEaERxOTJjS3huWE5yQVNaT1pxejBn0gGrAUFVX3lxTE9hOFdDeEs4ZjVjQTYtMnZTTC1YdEtrWGpma1lWbElXTmxGV3JRcDJEWmRSU0s1dWNLRGxrMjF2UHBMeEdGeWEyMEJ3SjFjRzZXc2J1RlV3N2lCVk5Ic2tZUHE1ejRGM19oV2dJRHIxNV9oOWpQWXFXUExJMnNndnVzaFdvTEN0MVBlcC1PZkc4eDB5QmV5TC1PN2RqTmxrNDdDQTNmMWpIclo5Yw?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "ojk bongkar kondisi pindar 16 pemain masih twp90 di atas 5 persen warta ekonomi",
      "id": "6dcf43de6259e85e",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 55.6,
        "label": "mixed",
        "negativeWeight": 0.8,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b67530d3c7c68cae",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-16",
      "title": "OJK Cirebon Soroti Literasi Keuangan di Bawah 70 Persen, Warga Diingatkan Waspada Pinjol Ilegal - radarcirebon.disway.id - Radar Cirebon",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQTWJpUzF2NlQzNkROY3JzR0I5MzRqRVFVTE1xblk0YUY1SXFIM0ExcEpsTklmU090X3BiZWtLX08taUZ3QlRfRFZKV19KYkhqVWxJaDFuenFFdUZfakZqZmZ3Um81bUN6ajhvNndPbkpubGU5UWgyZm9kVlBXX0JfeXNWOVRvdVBxVDQ2ZnAzejVBaEpVTVpLbXhyS211VG9YWnFfZEFFRm5ZeFk2VE1wNmJpVW1DZklaSnhpNVVaa1FoREZxUTN4OXFncGF3dkZRS1V1aXVB0gHWAUFVX3lxTFBNYmlTMXY2VDM2RE5jcnNHQjkzNGpFUVVMTXFuWTRhRjVJcUgzQTFwSmxOSWZTT3RfcGJla0tfTy1pRndCVF9EVkpXX0piSGpVbEloMW56cUV1Rl9qRmpmZndSbzVtQ3pqOG82d09uSm5sZTlRaDJmb2RWUFdfQl95c1Y5VG91UHFUNDZmcDN6NUFoSlVNWktteHJLbXVUb1hacV9kQUVGbll4WTZUTXA2YmlVbUNmSVpKeGk1VVprUWhERnFRM3g5cWdwYXd2RlFLVXVpdUE?oc=5",
      "publisherUrl": "https://radarcirebon.disway.id",
      "source": "Radar Cirebon",
      "summary": "ojk cirebon soroti literasi keuangan di bawah 70 persen warga diingatkan waspada pinjol ilegal radarcirebon disway id radar cirebon",
      "id": "53cf00d41bd32fdc",
      "domain": "radarcirebon.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7abc13f46ac82867",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-16",
      "title": "OJK Pantau Ketat Langkah Perbaikan KrediFazz terhadap Permasalahan Tenaga Penagih - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOeDc1NzQ0OEhBUUdQemZFNFQ1SnpfN2VvbmM0MjFUaUVuWGtuazQ2SHlBSVducjBacEROYk1oMElFRmJURHJwMlAxSHJCZ1dyb19RSm1xUHNqWmxXak91OTd2MjE5eVRRZzVVR0pDMU5KVzFoR0ZPOElUNHZ1UFlLWVo0bVNiaDltMGc0N29Xd3FrNUt4eHRyckxad1FwSUQwbmdKdXdLQzVQb2pMV1lqTUJDeF9KYlnSAbABQVVfeXFMTlVFQ1FiRU80NjRpckZzd0g5Rno1bXBHSkNULVVWcFNKVGR1LUdvV0R4dk10RkUtZ0RVdEFibUJYN0ZENUVRR0hVRU5wZ045Y1BPb1dUdmVRRzhsTGIxMkk4bXlrcEVRV3JuSXI3X0Fpd0FzSm5Jd2dXcXF0X1B2cVZoNjhfOTJ0ZlZ2cXZpc2NvX01pS01qZ25WY29GTmgzYlh6YzlWOGJuVDhDa0VVRUI?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "ojk pantau ketat langkah perbaikan kredifazz terhadap permasalahan tenaga penagih kontan co id",
      "id": "22db5a48d506ef43",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c8d0a2ba5a746068",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "OJK Ungkap Alasan Pinjol Ilegal Terus Bermunculan - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPZGJKNTBPaHVNRFphU3JkbGhqeWNHaG1haWRSaldqbHZlRzdwN2RlT2hfZ2FXYkVJbWZiSWdXTVFYRGtJaGhmUFVKYnJLV1hLMG5udVVodzBVR1ZfdnNpN1Y2RUI3T3ZncEJVcGk0eEZya0pQVVYtWnJlTk1MaE8yMjJiemtBUVh6X1Q5YTBSaE9ob01MVWl4UkNlWUhwRjZpQ2Zz?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk ungkap alasan pinjol ilegal terus bermunculan bloomberg technoz",
      "id": "e40ca350a3232724",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d83a7f2caa93d0a",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-16",
      "title": "OJK Ungkap Pinjol di Papua Melesat Hingga 85,77% - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNZThBWXhfdUg2bGgwc3ZlZllRaGx3emtjdTJhUDh6bk1ac2tfVzJzS08wZlFpQ3J3NEJyOTR4TjV4Y2lqU01YUnJpa3M1Z0JsRFlycG1iQ0ZtNEhtZmVoZVBZOFVUWTBURFNDZGtXMlNVbW42TTZFQ2Z0bmVadjRvY3FHYm5iWExOTlA5a9IBkgFBVV95cUxONHlZWVpLNGZxQk53Q3A4eWRYYmkzU0cwRU14a3J2UEZQRFNDNzI3VV9adkdYaDZzN1hTY0dFWnBxUVoyVW5CN3RjTmR3WWZZWk14TGtUTXdZcl82NmFxRmVqazgyelVvbXdRY2F1QzVwZVBpdDkwRzZUYzNscXZZMnhYbE5UZ1JNYThaYzM1enZ2UQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "ojk ungkap pinjol di papua melesat hingga 85 77 warta ekonomi",
      "id": "31f5e796105a8c29",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-92b35bc144a0b35d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Paylater: Kemudahan Transaksi atau Masalah Keuangan? Halaman all - kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQSVNVdmhjQzd3aE0tOUFVZzAyOHd0Ry1HZUpfVlBEd0VYWG5ueE5WS21KNmIzVE9KY2dmckhEME1xQmQ0ckcwaFotVGJTTk1rXzFOanZHenVhSWJEaTF3SEhsN0xrbUFrZU1hUmxKX25LZE4xV0FMZzYwLW9LbXRYWXBmU0MwcHdfbmpTYlhjczJJek5wMGpBZ1dmSXhpeUktU3dCaGFSRmtzcXljeDdnWFRLaGZtMG44M3VhNlpNS3c0Y1VBNnR2eQ?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "kompasiana.com",
      "summary": "paylater kemudahan transaksi atau masalah keuangan halaman all kompasiana com",
      "id": "790b51765b2b1f76",
      "domain": "kompasiana.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-16776bc4942ace9f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Pemuda di Tulungagung Ditemukan Gantung Diri, Sempat Bahas Pinjol Saat Video Call - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQVmZPWk9zY2Y0N2d3djJTOHRfeExOdEIxMVBkclJmVGFPVFNZbERfZ0Y1d21ZVDBycFc5ZFZ5SVF6eFBrNDFwOXEtbE9DdEZKbDFXZkh2MUhaTVZlbkJ3NHo3WFJycnNWemsza1ZDRGE5REJtRkNnX1V4ckxlMHE4bnN1YjFNenpiZFVPY1IzMm9pMnM3WmFzMllUamxTY3M0TlZiNGI1aUZlRUZpRXd4V0oyclNrNWVuMlM4aFJtY19mWkhzXzI2WUFvdHFJSDB4VDJkLQ?oc=5",
      "publisherUrl": "https://surabaya.kompas.com",
      "source": "Kompas.com",
      "summary": "pemuda di tulungagung ditemukan gantung diri sempat bahas pinjol saat video call kompas com",
      "id": "d2bc943793466862",
      "domain": "surabaya.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-858b1bc4e99f4ddf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Penetrasi Pindar di Luar Jawa Naik 29%, Terkendala Akses Internet dan Kehadiran Fisik - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNNVJsZkRzU1hPRC02OTFvTlFnWXo5UXNfem1JTTNwU1lhRUhuWmNKMVpLakEzZGtuekJiVkxtT0x2X01LTzZYSkNNYzU1ZUdiWDY4OG11bWdlbnoyQ2c2ZDhvd2NYR3ZWY2lyR0dVeWhXcTI0clFWcTRUNDg3bXYxVWV3UW5HSndMRk9Cc0hWeFpFZ180LTAwN2RIUVU4TVdHb1FLUmthOWhlMGx3Yzd1V1V4aEc1M1czVVHSAbMBQVVfeXFMT3l6enAwMFYxWF9kbkN3dGlqS0toNloyTnlqNWp3aVA0X1lRYlo1d0R6bFRLWjh1Q1hJZ1lkM0l1OHBQbG44TVZObnpBVkNLYXVUMXB2MU5pRjB6eGEtNG1reG9OUXZKV1NjSHRQRVYyNDNGN3Y2dEJWa25CVjRva0ZwUUNyMWt2RnRiY0ZYRzhMV2hxQlEtRkZqQThVWWFVTVpfVE5xVnk2eHg4b3N0bVJGcDA?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "penetrasi pindar di luar jawa naik 29 terkendala akses internet dan kehadiran fisik kontan co id",
      "id": "13035a64bbdf0ba5",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-46e5d45ce2377109",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Penyebab Tidak Bisa Pinjam Lagi di Kredifazz | Ini Solusinya - duwitmu.com",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxObWphZDFrV0RyUHZrTUtGQ1N1NzJyWFN4S2ZEYVlEUUlrZm9ZVW9qYjlNUGswTDI3dWZHQ1dzMlo4a1RiZW1ROFJHR2tyVTJvOTJialVIa044V1ZoblVjbTdYclp0bkVqTktFUTlEQ2FEUXBVTW9WZ0c0RUJpclpOcndJWFJSV00?oc=5",
      "publisherUrl": "https://duwitmu.com",
      "source": "duwitmu.com",
      "summary": "penyebab tidak bisa pinjam lagi di kredifazz ini solusinya duwitmu com",
      "id": "9528a50dab3500e6",
      "domain": "duwitmu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2afd4a9a84f827a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Pinjaman Online Makin Besar, Risiko Konsumen Ikut Membesar? - HARIAN MISTAR",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOMDVuaEJ5Q25MUHBmUXlZTUZXdlZrWTFxY1loNXY5dGdvWURXanVoTmFXLTVJdFg4b0YyaHJYSk9lU3pyTmhrUDQyUjFrdFZjcDR6RjVpUTQwcW5KMVVpbThaMW5pLVFyaGJOUVBycjBYWGpmOHZxbWdBb3ZYcklWdTNHSzBUNHlXSGlTWXAyNFRWQQ?oc=5",
      "publisherUrl": "https://mistar.id",
      "source": "HARIAN MISTAR",
      "summary": "pinjaman online makin besar risiko konsumen ikut membesar harian mistar",
      "id": "3beda555304a25db",
      "domain": "mistar.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f1afad993cd26190",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Terlilit Pinjol, Karyawan SPPG di Tulungagung Nekat Gantung Diri - jatimnow.com",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQWjlQNU9aQ2N1X3JwbmxRMF85ZHVsMEhFRFJGN25NbkpuUGhlelhxSFdLeE9OMTFtMFRXREtVVUNvZDFJaG96NFpGaG9NV2NGRHo3ak1rRU5kTGpGMUJxRDA5dVFEX29CR3pSWWxJNW5QRURxYWQ2dEhCNFVwaG9jT0Z3UUlYUUZyOWlocHhYdXB6a0p6cnhrVzhESdIBoAFBVV95cUxQYS1RNlY1TVJXcngwRUtvUlZSTEphM214aW9ST0ZjTXpzVDJlMkd0MEQ4UEZFYkw0UUxKMXdINkoyZ3ZrakZEZ1FwNVFnc3pPMVR2R3BvZXpMX29hdE5MQTQwMzE0dVlhY3YwOWoyRWQzSGRkNlA4YXlXMU9fZkplazQwZnR1R2VNM2dEX2RLcjBDU2h5RkV4RFV6eVdkV2ct?oc=5",
      "publisherUrl": "https://jatimnow.com",
      "source": "jatimnow.com",
      "summary": "terlilit pinjol karyawan sppg di tulungagung nekat gantung diri jatimnow com",
      "id": "052905b31d4b2b49",
      "domain": "jatimnow.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-14db375a31588c5b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-16",
      "title": "Tukang Cuci Ompreng MBG di Tulungagung Ditemukan Tewas Bunuh Diri - detikcom",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQYXg3V2hpZVRMb0l3TzVWdlhTM3B3dWRELXlmbEU2dEZ6N3V2cEMwd0lGb2FmaThBQ1c5Skt0UFVjeTEzVk1OVmJ6MmotOTJrOWdXUW1laTJrbHd3MHhwV253UFowZGdJdndRa2c0blFDY25FTi1DQkp0b01PeFFFQUk1UFpJS09JY3hubGYzdlUwdE1QTmR0c0Ezc0ljVTdOOTBoX0w5aWFjTkd5MV800gG0AUFVX3lxTE9CbjlWZXczMUgwSnY2YXZJUTVTQlJfeFRBTkV2aXQxOE03Zll1SmJhSjZNRVNMMk9sYWFZSS1YWGNrRVpIMnpGYURiMnJUbThhSkJFbl9tN1R0b3UxcDFqR0hMOVg0X2hPWEJCQjdoZ3luVnl4MzZvVHpHZDZyZ0FlbXlMTHYtakRRS2FYWFVjQVI1eDM0Y3pKNzhaak1JeWxrajl0eXBzUkhqREFKeHRnVW5FTg?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "tukang cuci ompreng mbg di tulungagung ditemukan tewas bunuh diri detikcom",
      "id": "e13ceeb648d5e7be",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-754d41f015c9e978",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-09-16",
      "title": "Waspada! Satgas PASTI OJK Basmi 951 Pinjol Ilegal di Semester I/2026 - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPLUxpcTVTTXF6TEJna21wV1drS1JPb1Q1c3VpTVdyYlNCbmVqZG01RFJ2TExtQWQ3SThCc1E3cHNmVi1RMnA1TTUwcWVER1BFNWg0SUtzbDZwUWlkdGxDM3BVTk5VSGlPanpndTZrYjdFNVNvOUNEY1ZVSjFaNHUycTlTaFl5OTJqYXFxZi1VRUh1X1hwV1hPNEJkWXVZTVJidEFpUzBzbXZKUjFRNmtobkZodXRXVTh0cTRRYXFR?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "waspada satgas pasti ojk basmi 951 pinjol ilegal di semester i 2026 bisnis com",
      "id": "8b8dbae5b6b7b303",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-827ba4962e3172e6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-17",
      "title": "Akses pindar meluas, kemampuan bayar nasabah dinilai tetap jadi kunci - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPblNuNThCT3RxaVZvLXplY0pUbG4zbnVPNzZYZmtPX2stWjd2RXVOXzdjdk1nMTJlMEhRV2ExM0s5dXFDYnBmYWV3bHBfcTVvMjlhM3hhb3dyYjZLcDF2LU1vMHVlRlVpZXh4dUdyaUl1ZlYxNnIxMHFjcFJTWjdDSUJMZ0JJRGdLbF9Ob25oRTU1aXFFRWpCYVVSU29GS1liZzgxLUVEVml4a19Hck1B0gGyAUFVX3lxTFBIQ0FQeWVSSWM3NlJWZEduTEFJTmJoXzVjejU3T25Hc1NXYm13RFZSZEl1YUxlbW84S3ExMlplaV9GcGVab19nUllkZjNBUURQb25EX3oxNWd5WnhkRnlHay1QTEFGV3RtNWVaaEl5bGlHUkl5M1MzcVNhYjhDS3VySUVtQm1fUEVpc05ZWWdFNExWMm9CRkVTYzZFNHVrZnhNdVluQlNyUmtWdlVmWC1lb0E?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "akses pindar meluas kemampuan bayar nasabah dinilai tetap jadi kunci antara news",
      "id": "036beb1dc397cfe3",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c44847e080b9678",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Dinsos Pekanbaru Ungkap Faktor Warga Dicoret dari Bansos, Ada Pinjol dan Judol - Betuah.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPMmVEVGM0VTJPUEx4aS1KWURiMER5Y2p4RkVSRHk1dzlFMzFGLVVTUDVMRXF0cElTM1ZCNUJnc25ESjJmTC03eFhTd1JpdDEtYWlCZGFCdGtfQ3FCeWJEVjlGelNsWEo2WWgzUlJTZGkxOEsteHVlZ2tjeFBuaVJST05ma2xLbnowamh0LUVjbTdqNDJ5QTRXeklpbkNwcThsdGlQaUZzUG9KQlpYd0E4eUZfVFY?oc=5",
      "publisherUrl": "https://betuah.com",
      "source": "Betuah.com",
      "summary": "dinsos pekanbaru ungkap faktor warga dicoret dari bansos ada pinjol dan judol betuah com",
      "id": "dd24d57548d18df1",
      "domain": "betuah.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-55cd2dafa6fc6b75",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Gathering Kredivo di Lembah Harau, Perkuat Kekompakan Tim - riau24.com",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPdlViZHFzSzZFTWEwNl81WGRpWmhRRXY2Y3JlZW5sQzVIY2Y5N1RQUVExYU5RRGVtdzNmbU9VVW9HZGJWUFN5VndWLU9WMG9XOGRnWkYyR1lhNFVjc1M0RW1GejJkb1dRMjNBVzQzMXFvRXpFYTNPRVJfN0tOa1lTT1E3clNwakk3VkFUWGZVZFJJS1hVNDdVU0ptb213OUhvTkNzZw?oc=5",
      "publisherUrl": "https://www.riau24.com",
      "source": "riau24.com",
      "summary": "gathering kredivo di lembah harau perkuat kekompakan tim riau24 com",
      "id": "38babaafd3b4f6a9",
      "domain": "riau24.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f2f1535c4621a7eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Jangan Asal Tagih! OJK Tegaskan Pengguna Paylater dan Pinjol Punya Hak yang Sama - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNV1o0MU02YXB2TVJaVTd3ZzVrOTNHSl9ITHRHUEpJZ2sta1drUzE4SW1RcFBMSTR6bWx5VmxYRmpHLV84bWRfSUgtNWs2dDFHZ2JlOHdJSFF0VzZHT3VmVURDcncyWWY0TG1NTjJ0aW1tcVNhQkU5SmV6N3AydUZQdjVJendiTVlSZVVwcWt3WkROQzVWSU1TRngyVG5fY3ljOU5nMkozcGt6c29CSVdhLWdDMEN6WVAt0gG-AUFVX3lxTE1FWEFDSnBSNGRJYkNqMkVIMi1XR0stX0lHT0xza1FSMERLYUVrTmE2a3BMbjV3VzdXWTBDRjE3c1VxMGVsZl9SeUhIODhfY3ZrTkdqakJCQVI3RjlwVTBSNmkzUmpqUDNxRC1oZHlyQmVTMl9SYkpkMk9vdVJ0SGd3d29LX3VUVlNCaS1aVEtMcWp0ejBmZ1VIZG41Xzdwc2txc2JzOWJPMDZjZWExUFpGaldkSDBwVU9fYUlWOUE?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "jangan asal tagih ojk tegaskan pengguna paylater dan pinjol punya hak yang sama warta ekonomi",
      "id": "038a5abc15874063",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b2967f9cf5c7d8d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Jerat Pidana Menyalahgunakan KTP Orang Lain untuk Pinjol - Hukumonline",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPaUNpN0YwdHpQZDJPX2VnTjRwWmV2SFZVamZmR1B1NGw1QVU4RWdGN1cxOUQxOGFUdV9ob3FZa0FDc0FLejNFXzRfX0x0YmQwb21sX1dZeFhDa3ItMUxReEJaa1o2Z2FJUVNvS1NGeG5sck1PekpibWNLc09uenVQMU1TN2x3N21TQ0lsWnhJTlFjNWpPd3BWNFVoZDEyTEZ6aUQtTHZuVDRQUQ?oc=5",
      "publisherUrl": "https://www.hukumonline.com",
      "source": "Hukumonline",
      "summary": "jerat pidana menyalahgunakan ktp orang lain untuk pinjol hukumonline",
      "id": "f987b70238dd1a57",
      "domain": "hukumonline.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-91a5c8abbc4b7827",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Marak Judol dan Pinjol Ilegal, Kader PKK Jateng Didorong Jadi Agen Literasi Keuangan - Pemerintah Provinsi Jawa Tengah",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPN3VtQ3Bkd0J1TU95NFllSVNYaFVtLWJhcDVpZE1VQlBrUDlXWUF6cXVGcWw4S1prTEotbmZfOWpKUE1jTkZ4ejZGZzlPempXZl93cU9nVEFJSzhUZ0ZSNklzbF9HRkl5SXJOUkdxb2pVVHdldWc5ZGtXV2N0SGluWk5JWUxXUWZNLXpfWkQ5OS1EZUNzdmFxRU1qczM5eWZHNXVvMjVEaTJSanh5Tlh3QUpNeDlUVjA?oc=5",
      "publisherUrl": "https://jatengprov.go.id",
      "source": "Pemerintah Provinsi Jawa Tengah",
      "summary": "marak judol dan pinjol ilegal kader pkk jateng didorong jadi agen literasi keuangan pemerintah provinsi jawa tengah",
      "id": "c70694b05aa1417f",
      "domain": "jatengprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-059fcaacf27ec057",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-17",
      "title": "OJK Cabut Larangan Nasabah Utang ke Banyak Pinjol, Kini Bisa Pinjam Lebih dari 3 Aplikasi - merahputih.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNaFB0Um5rRFJ2dXFWeFM2dU9sTko4RkJkUllNeGYtOG1aS0Z6dVFxbm5jcGhTNzhHRDdWS3NmTGdrUVNJX0dobjduUzRHaTQ4WjkxTW03TFNTY0lBT1I3SlZpZ3d0WFZxbnNXZVJ1MUtDQTk1TVNPSUF4dTVUdUltbVBqSXRrbll5SndPN1hPVHhONXJjM09rMzNkU3F0V2VMd2h3Ym9EMWg0NkViajJWOWs4eTVWTGxMSGZIak1sMFZsQdIBwgFBVV95cUxNaFB0Um5rRFJ2dXFWeFM2dU9sTko4RkJkUllNeGYtOG1aS0Z6dVFxbm5jcGhTNzhHRDdWS3NmTGdrUVNJX0dobjduUzRHaTQ4WjkxTW03TFNTY0lBT1I3SlZpZ3d0WFZxbnNXZVJ1MUtDQTk1TVNPSUF4dTVUdUltbVBqSXRrbll5SndPN1hPVHhONXJjM09rMzNkU3F0V2VMd2h3Ym9EMWg0NkViajJWOWs4eTVWTGxMSGZIak1sMFZsQQ?oc=5",
      "publisherUrl": "https://www.merahputih.com",
      "source": "merahputih.com",
      "summary": "ojk cabut larangan nasabah utang ke banyak pinjol kini bisa pinjam lebih dari 3 aplikasi merahputih com",
      "id": "6c493498e493cefc",
      "domain": "merahputih.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f4d4ba3d09d99388",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-17",
      "title": "OJK Sulteng Soroti Penyalahgunaan Pinjol untuk Judi Online - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPWWlYZktYVTM1MWpySXNFRnJ3S3h4ZG4wb0I0eEIwUGNWSVZmVnJuNmtPY1FCa2Ewc0tYc005aHFIekV0R2pQSzFuVFppYjFqQmprZ0xTUnRlaTdpdVFyOXoxWkNLOGpKbDNtcVBnV1NxYlZpRlZZUVpRZlNRaF9jSlAyTWxmNFpHd2VHVkV3UUlMMm1zNnhCOUVoYnhObkREcERXb1Fn?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk sulteng soroti penyalahgunaan pinjol untuk judi online rri co id",
      "id": "14e60704d7ade9aa",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3feabbecbca1be27",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "OJK Sulteng Waspadai Penyalahgunaan Pinjol untuk Judi Online - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPb2VtQWRwd2xLby1hTGJPeVRsVkQ0NDU5a0J4VDUtZ1FwbDUxSWRxRng2M1VFUlVfcWpYMjJQbTN6aGs4Z2FoN01iN2JvcmYtem9MZlp1WWZpY0UzRnlSMVJjV0FEZklpUDJVSkM4SE9kYVVuQU9VMGYzZExVOGlhUjBuSGdXYjhCbUpJYkV1Vm4xTXdlZDAxSTBodkZyQkJtUkxEOFo0V3Q?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk sulteng waspadai penyalahgunaan pinjol untuk judi online rri co id",
      "id": "38273518656fb3b7",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1ea7064c696ad914",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "OJK Tak Lagi Batasi Pinjaman di Tiga Pinjol, Ini yang Perlu Diketahui - BeritaManado.com",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQdVlieFJ0c0VXSkZFV2VhR3BEUzQyVEpIOUwyWXUyWEdlMmZ2MngyMzhYeWVzY3VPaWN1djRMMFd5SWozOFFDaS1NQUpPTGxXT0pHbnZIVVpmV2YxWldHYnU1ZlFMRF8zaGhQVjVLWXdueWdsQW0yaURMS19pQ01mZHlqMlRtZXlUWnduWjdlbS11NVprNF9TSWVn?oc=5",
      "publisherUrl": "https://beritamanado.com",
      "source": "BeritaManado.com",
      "summary": "ojk tak lagi batasi pinjaman di tiga pinjol ini yang perlu diketahui beritamanado com",
      "id": "dbd8941d1cbb136a",
      "domain": "beritamanado.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1cb210f595f8456e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "OJK Tegaskan Penyedia Paylater dan Pindar Tetap Bertanggung Jawab ke Konsumen - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPWFZNZllZVXNpLVFpZHQ0VXN3bUVVMmFTeWd0UFpJRkRJMTFCeFE5VHFmcFRrX2Z5aHpaU1Q3Y2tXamRwVlhOLXN6NVpPbVJ6eW4weXdFZUNjM09EUXpxOC1tZmNGRmNfZGxDdnVHeFZzbGJNV3Rwb3BIcXU3TWVQdUNaZmVWX3VfaDZDaExzUE1MNTFqQVRTWWdyRHVpVUhpRkI5Rk8xVEJNVHlCU2xqZHo2SFdwcDJjUGtBenMxUVFJZWtWSW5zRGlMZFQ?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "ojk tegaskan penyedia paylater dan pindar tetap bertanggung jawab ke konsumen bisnis com",
      "id": "db79c12b30ec00cd",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2ca5ec57504c414e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "OJK Telah Hentikan 951 Pinjol Ilegal, Pinjol Ilegal Masih Bermunculan Ini Penyebabnya - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNWTdoNElwaUVsSm5sVXB6WWlFVGVoWTYyYjJIeC1wTnNlLUdfTFI5SF9DMXQ5bjc2OHNpMHd6ZUhuY2R2RDBpd3Q2RnBhUk5pYmRuYVBHdzN4YzZkNWNrYmpUZTZJRElxcjVWT2dNOFZTMGlxVFNOSmRTeHZJUTlrY1JrakJUd3lVZEhVdGYzdWVnM1dvMDdHenhRRXN4UW45cUhIbVI1VVRKWkQxYUV4TXoxRnN6Ry1vRWRN0gG0AUFVX3lxTE15UklvVy1RQmVnM1ZDT0lVa19vb0xLN0c4NzUxa01SeWVxMHVsR18yRHJLQy1OYmk3Y0E4QUFzNVF6SjJzTllVeU0tVjNveTlLMzlVMlVDNjdsZE1NOWdYeDlvSUpXTjV1OHp1YUpRM3FnZWtaYmM4Sno1R1UtNHUtN016ZFYyVjhpY0R0UEY4R1BCWUJqYzd0RWNXVTZRc3dkc3RnTUp3dnhqY0NoUG9fclh6UA?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "ojk telah hentikan 951 pinjol ilegal pinjol ilegal masih bermunculan ini penyebabnya kontan co id",
      "id": "cca67d6e98a3f9a9",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4b92ad563ea27573",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-17",
      "title": "OJK Ungkap 30 Persen Pengajuan KPR Ditolak Gara-gara Pinjol - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNQjZYaGR1YXlaazRRRExhOWNFb1R3YllneHZ5T1hRTlg1OWhkc1JRQlBYbUZ5UmpMOTZ0aXZ0bTdqUHFoZFlvM2g1V1NETGpjWVlKTU5rbl9LN0VrTGRYZDlORDZFSjZCVUdYRTdfQUlXRzViek9qakJIZ3JZeldDNk96ZW54cExSNktWUXU4OHRZWTFvUjJjd0lVVF9UQdIBowFBVV95cUxQdFRwcnRwMWxUN2hBVzJraVdLbEtBU0l3LTZwZG5PUUhSb0pucDlZQWkycnhOR0tkLWhaYkd4VHBmVTUzZV9Zc0pmM2p3TlQ1cXJTYmxkczM3emY4SW1HQTJmdHhoaUtPb0FnbUhsMlJCaHdMZE1ra1Y1S28xaDFmS3BMNmdhSmpodUlrQjdwQnZoU3lWLU0yUE9CcHJjaTJDZ1VJ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "ojk ungkap 30 persen pengajuan kpr ditolak gara gara pinjol warta ekonomi",
      "id": "d5fa141dffce9e14",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b6e205571af7db8c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "OJK batalkan batas pendanaan 3 pindar, ini alasannya - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPdkJpb2Q0bm5veHJYWmxmLWpOUnJOeVpoS1BNcHE4U09idzh6ZFVzYnlacjRTMUVINFpnOWJBVXE0VXRQZDN6VlhwRE9Hb3F2UTU0MTFOSmxiZ3BPVGlBRTk2cVk5dWFHQ3VtMWtvQnIzTTdYczE0VUVaOHhBVWZMaERZbGt5cjRFcWktZGk3cE4ydHhqR2xqT9IBmwFBVV95cUxPQm5WMGFBdDczNTU5ZFQ1bUx0TEE0RHlQZHhzWE4yN0QxY2lvZE9lTlAtMFM2eXJxbTB0cDN1bmppYUlBYzVDVzlTRjM2c0JwQXQ0MDk0YnRWRkVlM1JXb2NVMDNrNmxEVDBvOElaWG9VNFJ4X2xYWjJaQTh6clpFanAyb3Bta3lHYjVGbEdPTGJRWlBXQ0hqZ0lCdw?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "ojk batalkan batas pendanaan 3 pindar ini alasannya antara news",
      "id": "44f75a62acd54721",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7ef35014ab670cda",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "PMPHI Soal Wacana UU Perampasan Aset Koruptor: Jika Diterapkan Melanggar HAM - Suara Pembaharuan",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPck5HX2UtLVgwV0JnRmpqejkyVFVXX1FLblRQaVJNN0NiOUNPZ3NvVlp2Y0psRzVmWFI4UklwSi1wZDhrbWozbHBOVnB6Q092V0ZLOFNXX2pTdThnVDhrVy01UVNwcXZEX0ZOTnZxenNVbzkxSFVubFZEdUw5YlN4MzFLZS15dGs1Z3c?oc=5",
      "publisherUrl": "https://www.suarapembaharuan.com",
      "source": "Suara Pembaharuan",
      "summary": "pmphi soal wacana uu perampasan aset koruptor jika diterapkan melanggar ham suara pembaharuan",
      "id": "f2e6f0942461138d",
      "domain": "suarapembaharuan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c38e6fafcdc329e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Pakar Keuangan Ingatkan Risiko di Balik Perluasan Akses Pinjol - Bela Rakyat",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNRFpGWXZab0R1aFJXMTI4enV6amFfLURFQlZTNmd2T29sR09VZlQ1MGRNWGU4WU9vNExpSUdnRGY2T1RaNHNxOHpEUDNjcVR0NktJYlc3OWpHb2IyWWlobll4TmE3VzVPMkQ5ZHRBTHFaZEhBV1p4U0p3cURVY2NWb0E5cTM4RGEzV2NKR2pLVQ?oc=5",
      "publisherUrl": "https://belarakyat.com",
      "source": "Bela Rakyat",
      "summary": "pakar keuangan ingatkan risiko di balik perluasan akses pinjol bela rakyat",
      "id": "067f56857d68cdde",
      "domain": "belarakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-469cf5356e1cb927",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Pelaku UMKM Waspadai Scam dan Pinjol Ilegal, Pastikan Layanan Resmi OJK - radarpekalongan.disway.id - Radar Pekalongan",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPQkdXVEZBclR4VzJOdVRReW4yeUJhNEJCdkF0bEU0Mm5pT081R2FYa3FsdWZtcmJlWW0xQmtuTUwtUWFzQU1jQVpGT0ZsY1Rmd2tvN081Z2ZIc01DVmtMcUQtZV9tb3JZbUJFSEFYbGhpZEJRbmFoTV9peW1YdHd1bE9nem84ZlR6aU5iekh5WnRLejZ0SjhMV3JabFJwd3JDck0zaWhVNlhtY28tLTg4WnloUk53aUdkTWp4aW9idFhzc3lwOHfSAbYBQVVfeXFMTlNvaHBuZTdIQV9nUmh1eU5FRGpaeUY0ZzhDZEpSNXV1eDJjQzlwWXRhQzVvVG5HMmdlQ2NXZlJSZmh4eFRKSmcwRkVoZkR0UFUteDMzMjE3VGdfZmp0VFlEd21tWm5qQ3A4TzdWeTdnZkt4NWZZcUtTZmdyMWFvdG40TllOQXlOQ24tNVQzUGdIWXJZbjFPZFl4dGdyVTFHSGtzdi1QYlFPRm5YdllzOVV0Vy1VTEE?oc=5",
      "publisherUrl": "https://radarpekalongan.disway.id",
      "source": "Radar Pekalongan",
      "summary": "pelaku umkm waspadai scam dan pinjol ilegal pastikan layanan resmi ojk radarpekalongan disway id radar pekalongan",
      "id": "001cd1210a1fe35b",
      "domain": "radarpekalongan.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 75.9,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e82f3f0073f2de47",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-17",
      "title": "Perkuat Perlindungan Konsumen, OJK Tegal Ajak Masyarakat Cegah Scam dan Pinjol - Pemerintah Kota Pekalongan",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPXzBwSVRLaDZpdlVIa3B0Zjd1ZHo1Z1dYR2JOb0tkMFlIek9YSHdCTF9FNTZtSDVROUZYWnYzYnA1R2NEZUplVGdtT3A2Zno3ZnRLTHZvVmlDZGgtR0pQWXdrRV80TWxnNE9HMDd1TkFhQkRDNGQ2N3pqa2Q0bzM1Y2NWeGpVR0ZDWTdfQW55blZmTm9TY21KREYzakVTc0FsSzduUjNFQ19lc1lJUWJjU2hwSUpFdlZVV1E?oc=5",
      "publisherUrl": "https://pekalongankota.go.id",
      "source": "Pemerintah Kota Pekalongan",
      "summary": "perkuat perlindungan konsumen ojk tegal ajak masyarakat cegah scam dan pinjol pemerintah kota pekalongan",
      "id": "851e6fe1641558cd",
      "domain": "pekalongankota.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 2.2,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f68e42a929cb9f78",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-17",
      "title": "Pindar Bali Rp2,31 Triliun, Macet 3,22% - NUSABALI.com",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1BRmppTllJZ0wtY2VNakpRTmhsZFNta0NJZVlQelpMQ0RFMWMtcDdDWl9iR04wTjMxcVNKSFdGWTZRT0IwYzVDMFlsbXBueHA1SndFT3VtS3d1WGxwWHM4cWhSWDhSdzYwV05LUlhRb0N5QjhvaEpDcGxzWnJ0TWc?oc=5",
      "publisherUrl": "https://www.nusabali.com",
      "source": "NUSABALI.com",
      "summary": "pindar bali rp2 31 triliun macet 3 22 nusabali com",
      "id": "08c2d4e7e703cbd4",
      "domain": "nusabali.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dff84c37d5ebf57f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Pinjol Ilegal Masih Bermunculan, OJK Ungkap 951 Entitas Dihentikan - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPcE9nRjc3S1k2dS1GQ3dXdUhDdW02UDhlaXU5bUx2Q3FHZ1VuTnhMVWs4Ni1Zc0x0OUtQVWM4R3F1UjRUOFB1amF0a3FBTjR4aU9xcFd6bjh0dVdwNVg2UE1hWXMzcmM0VzMyTGs2MFl5YUpHdDB5SHVFMHpVNm4yeWF2aVlybVdJbVdIcVpaZzY5ekdYN0tjSllsVkpVdE4wYmfSAZsBQVVfeXFMUFhYVnllYXU3OW9TNEJOYmZtYWpuenZhazdaR0FYS0pBbG85UHFJN1BLVXlWaDFqVGhwQjVLeE5meU5hZEZnQ2V0cEtGelF0dkVUSElnZWJPclc2YzUzc3hFRFVudHBKVmRCWEhJSGV3elA0a3YxbGs5REJGYThVSkRueTIxNEVaZGxLTEpfalRrdzR4NWtOMVYyam8?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "pinjol ilegal masih bermunculan ojk ungkap 951 entitas dihentikan kontan co id",
      "id": "3523b447a584bf3a",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ff5828927b3c9226",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-17",
      "title": "Polda Sulut tegakkan disiplin cegah personel terindikasi judol-pinjol ilegal - ANTARA News Manado",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOSnF1LWdkdEg2OVh3MV8tTExwQmN6RWlBZWN5QlljTDYzZkhwaGVfREN2QXA4WUZaWU15T1EyZkRLVmtxUUl6Rnl4Q1p0RjNYXzQtTmdwcy1TNkZPaWZtQnpGbld6ZG5tZ1VpalRNcXphZ0UtdTI0ODl6Y2xCVmlVRE1FZllvOEtHNk01UHRKZTVBTHZIZENlaGJYSFpESDI3SGVrcWpYaDBZNHcwT3pnendiMWE4VlFIU0wtTw?oc=5",
      "publisherUrl": "https://manado.antaranews.com",
      "source": "ANTARA News Manado",
      "summary": "polda sulut tegakkan disiplin cegah personel terindikasi judol pinjol ilegal antara news manado",
      "id": "e81f9a322356dd92",
      "domain": "manado.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4c471f23be0ca8df",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-17",
      "title": "Respons KrediOne Soal OJK Hapus Batas Pendanaan di 3 Aplikasi Pindar - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxORUtobXBUeFFEZU9laEVBbUVUMkhSUHpJSUpRMDlmUUE4NUVWc3preld0aFlVZno5eGljSW9VX3NxajZLWGo1YUtrVF9SbGIxS29WMWFhYkdkYm5veFNLZjBiQWFkdmFYRmYzRjhCeDNkaVNBbXc2ODFWTFQxVFhjallrdDE5aXl3d2pXXzk2NnhTMW9GWmZ0Rg?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "respons kredione soal ojk hapus batas pendanaan di 3 aplikasi pindar infobanknews",
      "id": "ddcb92e0c20cd6fc",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-511c10a21e2c47a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Risiko OJK Mencabut Larangan Berutang ke Banyak Pinjol - Tempo.co",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPU2JVQVI1LUptTTdma1dfZUJ4QU5qdE9SQWlXajNSVk4zV1daTkI4bVZrX3M5UUROVG0wd2g5YlhQc3VyUS1Ldlg0eXpINlNncUc1S1gxZkhUZ0lYQnVmM1RvZk12ZFFEdUh0bHJZMTVidnhSd3NkRXRqZ2dXcFJLNW9feDBxZktTcHEtYklLeTRVZmtqVFE?oc=5",
      "publisherUrl": "https://www.tempo.co",
      "source": "Tempo.co",
      "summary": "risiko ojk mencabut larangan berutang ke banyak pinjol tempo co",
      "id": "61386657716126f0",
      "domain": "tempo.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3aaee50756689d4a",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-17",
      "title": "Sekretaris Dinsos DKI Buka Kegiatan Peningkatan Literasi Keuangan ASN, Cegah Jerat Judol dan Pinjol - Dinas Sosial DKI Jakarta",
      "url": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxNWGNiSzZNWWpCd1dqcnVGWld2c1NJalZQQXUycXpLV1FBVGtYQncwUUFHSlRVd1R5a20wejktVC1nbVlsZUgyb0tieTd6NmtvWnpNMDN3VE9SU1FoaGZLcGJFa2tWTTh6ZXQyOWp6WTlWMnhwREdFdVJpb1lwR3J0Y1JLU0pDb2YtOGZYc3pibEQ2UHlHNHU0QWEzYzV4S0NBQzlwQUZQZllYOGg3WXV1YVM2OGtpN01WT3VZTndWMkRBZjRFTnh6cVVDUVlLRWFqUFpRM2lJa1RBUmczLTgwM0h5cW5yMV9lWG5SX05qbWh5bEk?oc=5",
      "publisherUrl": "https://dinsos.jakarta.go.id",
      "source": "Dinas Sosial DKI Jakarta",
      "summary": "sekretaris dinsos dki buka kegiatan peningkatan literasi keuangan asn cegah jerat judol dan pinjol dinas sosial dki jakarta",
      "id": "5092d181e3128ad6",
      "domain": "dinsos.jakarta.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-837f8bc12087532e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-17",
      "title": "Teror Pinjol Ilegal dan \"Scam\" Makin Masif, Tiap Hari OJK Tegal Kebanjiran Aduan - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQM2tPNXFrY3RtODBvcFJSTU9jaERmTGdZTGFKbTZmaFZ1dDhHLVBfY1N0Ym9kWWotcXFxbUs5aHBHNEw2RW1xV2ZKLTVCcDNLQk5rUDRPdTJmakJHcnU3dXFudks2cll1T3pmWWNVNUd4WE5SU3hyTHVzbm4zRVVjN0M4WVZra2VuUWZKZ2VNNmRwZ1VoT1R2OGctNmFqdmZiNjBIN1VSblh0aDd3LWpNemZXbENXZWQwVkJCYlBhUWxEU3FzeHlSdndTaFY5S1NJblFWWDRCekZET1I3Z1owRQ?oc=5",
      "publisherUrl": "http://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "teror pinjol ilegal dan scam makin masif tiap hari ojk tegal kebanjiran aduan kompas com",
      "id": "7b918328536a8157",
      "domain": "regional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 93.4,
        "label": "negative",
        "negativeWeight": 6.7,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e69e51bc00665672",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-09-17",
      "title": "Waspada Gas Pol Pinjol - Tempo.co",
      "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBIVWJUTXZ1NDczeDY5dkpmb2hfTk1MazAtaTVyQTFaM0RpcnJObUE5anZxYmg0Ym5lVFh6Q1BqVGtwMFpZN3FhOVFWeDhwS3JEZjlkbGhTOUhEejRTR214bEdiRkl2NG81NXBv?oc=5",
      "publisherUrl": "https://www.tempo.co",
      "source": "Tempo.co",
      "summary": "waspada gas pol pinjol tempo co",
      "id": "1c8e05a3fb11f109",
      "domain": "tempo.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f9e76e77d4277917",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Bhabinkamtibmas Kalurahan Girirejo Berikan Pembinaan Bahaya Judi Online dan Pinjaman Online kepada Warga - Polda DIY",
      "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxPRTVRUGxQRW9XQWhlRjZzQ05WZjRwZnFpX2J4T2dLNUdLN21STlhjbEVtMW93dnZVdTk5QkdRWjdqMXBpUU9rdDZRbHo1UmZ4YXhNMXp4Q0pBNE9RV2ZJUmkwNndQbGc2aFVYU0xmMTdkRHltMU4wSnV1Tlk5TnpDTEprTFZMc2lDVzI5U3BSUTYxd1U3aVBjOFlacmFCUnN6S0R5Ukl3UXNnOVhqVzR2MWNHUUxfcDlWdGs1elV4OWxUbXpWUkpGb1FNYkd4UzBidkx1TlVvUmZFYlNNOEJzRFRrQzdmYlFzbWpHMWhzUG9reUxwd0NURi05U1BGNTQ?oc=5",
      "publisherUrl": "https://jogja.polri.go.id",
      "source": "Polda DIY",
      "summary": "bhabinkamtibmas kalurahan girirejo berikan pembinaan bahaya judi online dan pinjaman online kepada warga polda diy",
      "id": "f2825ef0b74788df",
      "domain": "jogja.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a31c91cf99627e0e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Buka Kantor Baru, GEMA Picture Siapkan Dua Film Tuyul Second dan Personal Berondong - Suara Karya - Suara Karya",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPYkFybmR2Wm5hUFFJTFJERl9JOGdUaEhsSGcxS3VjMkw1MkdZR2RhUExVUERPV1duN05RREJQYjdSYmYzNDVxZl9sM2JMNGMzTldFN1dlcUxvQ3B0ZHEwNnpHc2ZoWGhHNUNxUVNUcW90VENvb3JqX3hldzdfQkJyZ2FTUGJNdkhoWHpaWHp4V1ZIa1JLWXRySm43QUdVZExnVHYwLVdxTXIySWV5RTAzZS1XLWkzY3A5eHFzcFhkcE9ybV9qWHNwQjh6aHR1M3fSAdQBQVVfeXFMTXhpNDVQUmZzelJSX1lXMzIwc19sNlB0M2FiYUFzam1FeUNRQmFUaWUydDdQdWpFbmlRSXM5RDFIV2E5MEptRDJUMk50Smw1Q25rRnI1eXg4TXBBLTdkR2ljakRQaVpFaS1ZQzZBMVlGS0tETzNPd1c3UzZ6d2pQc0hRaXFSVlN0bF9oU01ueWhZTzhNNm9td0lGalZKbTJKYkJsVEVaOGJJR3JMbkZkREpXS2NiQVg5UWhNb0pKTDZYNlVSRXY0Q05aRWNSZFpCaDQtTmE?oc=5",
      "publisherUrl": "https://www.suarakarya.id",
      "source": "Suara Karya",
      "summary": "buka kantor baru gema picture siapkan dua film tuyul second dan personal berondong suara karya suara karya",
      "id": "4ba0026859df7a60",
      "domain": "suarakarya.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dd54183461f66231",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Cara Cek Legalitas Pinjol di OJK, Begini Langkahnya - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNeUotdmJXWDczbzdPZURycjYwb1RZYW1LaEN5ZHN0d25WY2d0QjB2dUdOU1VwUzNoMnVEVW9mNEdMc3lxblppWXFZR2lHbHExMU9LalYyWXgwbmJHTEQ5a1pLMkFYYVg3OHdMTm9HTHA5ME5QYnFSMEZpNUFFcURQeVRpbUlHZjBybXMxek9xQm5sRkZKcjlTTGk2a3J5RWRRbTZuUFZFU0JHVjBjT0V2bGJOWjTSAboBQVVfeXFMTTdOX2F1Rkt6QTJmUzA0RV9NemdMNFh3N1VVMFV1VUZkUDZ6MEtEZUZ4Mi1FWmxxZ3lsREVVMWg0a3FaX1I5VklVLWtXYkExeXdjemdzY0l2NlQ1cjBVUnZ2RHRvZTI2OVRxUmtpdVQwWDNmcDh2ajQ3bmhpVDNUcDI1eHh5Z0U1Z2RCOHFTSmVQS3lENk5HOVZCR20xU09wa1ZIVjRVeUtfVHdqcmgzRURvY2JSM1V3R0tR?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "cara cek legalitas pinjol di ojk begini langkahnya cnn indonesia",
      "id": "caa54b4e5140c4c1",
      "domain": "cnnindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-edc047fb72558ed3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Cara Cek NIK Terdeteksi Judol atau Pinjol, Begini Langkahnya - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNa2d6TnBNY2hYZUdwVUwwTnZSMzNZUjQwNVl6VGNMWGhpOEZ2ZWs0Y21tOEhGMUw2czNnd3FPSi0tdnlBRkFnUGM1Y0hkMy1DSVdOT1RMSlJhMXN3WXpCQ3lFUEltNWhSdFZIMmFjdTd1dFpqMGNQdVdHZUFVMWFtZkxTS2p1ay1ZQXNfOF9odHN6NENhZ3JkbmpwMUR6cm42ZFZKYWVadjJvLXNtRUxJaFBXLVlpcWNaNWVxNjlhYkjSAcYBQVVfeXFMTzJUbElUTGxpYzg4MVVLNWkySXlINFpRNDhjWXdGX2owZE5md25ocDVpbFROLUY4dVdhQkIxTG5GYzZfa2NtMTRMU0prNmJjNG1reHlqeDBtTVc2bEpaTC10MVBmNmh4NXM1UDNYV1MzVnpLUmpybzVBRzdpOXoxRkJ4V0ZIUEVub1lJR1lWWHROVFY2R1pSWTFKY1JpTkVkUkZPWWpRZTZHSFBkOWtFTHdOX09uTHNiTnd6R09xb2pSbk85bmRn?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "cara cek nik terdeteksi judol atau pinjol begini langkahnya cnn indonesia",
      "id": "ea2b88feae47f9f9",
      "domain": "cnnindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9dc5c442bb9fb203",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Daftar Pinjol Legal OJK Bunga Rendah September 2026, Cek sebelum Ajukan​ Langsung Cair - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPdXZBOUdiV3ladDYyRVZ6bWREek14cWVlT2JrMlJaMUhTQWk5U2w0TkdWVnp6WThkTzhUMExBenBrcWN6WTZ2ZFFUM2pXVkwyZk1XSmFtR3ZPdFFCMkxGTXo3NVcwN0JCMEtKcWtXMlNtSmVpMGhqRmxlUERKSXRlbnE5LTRPRjQwb0JxUzhibkdWUDVCZ3BkbUVmUWRBWlo2T0pYWmo2S0Y4Y2NtQlRfYWE3SFNQU0ZINmFPeHIycUtUM0x3RGZOei04N1VxSUxLWDhaamp3?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "daftar pinjol legal ojk bunga rendah september 2026 cek sebelum ajukan langsung cair bisnis com",
      "id": "7b83a6165a265594",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-733e2a9cc149437a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Daftar Pinjol Legal OJK September 2026, 94 Platform Resmi dan Batas Bunganya - kayonews.co.id",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOdHo3Y0UtSnlNR1ptcE9vZ1VZMGZPRlRYNFQyZ3E0ZlBYd0Ztc1FEYVdab21YbDhZVjB3NTE3aldEOFYwZWFUTmlkNE9uQjZMOUZiUXdxN3RZd25SbDRYV2FJeHVGNzE3NW9yd1VmdzBBNnp6Ql9xdDVKMXk1cmxvTjJEVnYyN01WMVJNMGplcnBiWU1qa182b09pTUJOU0lK?oc=5",
      "publisherUrl": "https://kayonews.co.id",
      "source": "kayonews.co.id",
      "summary": "daftar pinjol legal ojk september 2026 94 platform resmi dan batas bunganya kayonews co id",
      "id": "a8c14ff9c147274e",
      "domain": "kayonews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b300c534b813552b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Diteror Debt Collector Pinjol? Ini Aturan Mainnya, Jangan Cuma Diam! - Media Justitia",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNSmVSQkl5OUlOYXpodDlSLTd5dzB1OG9ULWJIczZTa1VpV215MXVnWk9pNnY1b1M1bGRpNTZUaGZtOFdWcFExVnp6b3E4dG9YN1FrcG1RX05ET0FYREo3OVVfMUVWLXBNeXdIM2Z5Y1hhLVpPMVJ0YWlLal9PdlVGSTI0SnBMTzhIenZmUDVDX1I1em1obks1aEJZRXh6dnhtLVY3c0hLLThNNDY2N1I0?oc=5",
      "publisherUrl": "https://www.mediajustitia.com",
      "source": "Media Justitia",
      "summary": "diteror debt collector pinjol ini aturan mainnya jangan cuma diam media justitia",
      "id": "6ffc44bb5f7b8ccc",
      "domain": "mediajustitia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 7.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e18a5a14e4840b58",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-09-18",
      "title": "Jika KTP Dipakai Orang Lain untuk Pinjol, Lapor ke Siapa? - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQTkotV0lRcW9tNjh5ZE9faXNYVmxReGd4bS1UcS1Vb21yZS1wRm8tUGNJWUc1ejllcklDeFkwRHA0ZnNndG5NeVhMQXhNc1d3anhLOGxTMElaQ2kwTFR5bFhoZVJjWlpMbGNYbFB5Yi1GQ2VEdVpiUmNqZm1tbXFjVjRudlJoSXNDOWdGRWpOb2xzam9FSVk3TU54WVJVYnY4V29R0gGjAUFVX3lxTFBZUDdqWVlBaVJtWFZ3ZnVWb1FMRFZ2WllwbENRVzl1RUQwRWpWTk5ZTXRUa2dJb1Y2SEFTSFpFU3BfZHp0R2NoUmRmREhqRUEyWDJTc0ZpNzR6cnRzM1hnX0pDd09XV3FSTWI1bGlSRHYtS3d5dzJ3LVJaTll6SnpSUExfMWxYYlpUOHlndlVHS19WYzltWmtzWjQ4WkExNTlxdkE?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "jika ktp dipakai orang lain untuk pinjol lapor ke siapa suara com",
      "id": "e569bd5f5cac076a",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-315b23efb928960a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Judol dan Pinjol Ilegal Mengintai, Ning Nawal Ajak Kader PKK Jadi Agen Literasi Keuangan - Mettanews.id",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQa2V0NXJvMFFPc3ZkR21TU2pJMlBNejI5azhLRTdTdzlya3N0TXBJOGNyOXRhY1k4THlITWhtUlduM2ZoMHNvU2FrNlNpQ2l6Sk8yZWVBRjVhZ1k2ZU42aDVMT3hOY25oWVF6VUFxdjFUV0FKS19JLXM4MV9tQTFSdURJdUx5WkJ1S0JjOTFrNXhHWkozaGJfSXU0MmtINTBTdHlhYTQ4dnhURVF2M1E?oc=5",
      "publisherUrl": "https://mettanews.id",
      "source": "Mettanews.id",
      "summary": "judol dan pinjol ilegal mengintai ning nawal ajak kader pkk jadi agen literasi keuangan mettanews id",
      "id": "3649947ea31b78e0",
      "domain": "mettanews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-30db5051a77753b6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-18",
      "title": "Jumlah Pindar Susut Jadi 94, OJK Ungkap Penyebabnya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQLTN2eEVVQU9GTFktRV9PWDNYZ3J5UU9OV2Q0c1E5WG1oclFsM0dvd1ZBODNPbTI3eHpsb0dxc2xJekVyb0J1emNXRkhMNjB5dy1jOU9HZENSc2xybmViYVI3d1VMUjNYaWRuS1NsdHhlOTZOTGdacy1XYzhaQkdhTg?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "jumlah pindar susut jadi 94 ojk ungkap penyebabnya infobanknews",
      "id": "198b249d8e76e1c6",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e8ecae9364d5f212",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Kabar Gembira atau Ancaman Gali Lubang Tutup Lubang? OJK Batal Batasi Pinjaman di 3 Platform Pinjol - berandasulsel.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQaS03cFExMmRKUm5nWk9yb3g2S2h5V1JOUGl4WXlBZk44QnVIMzRfOE1MQnFkblhMaDlxOTVMU3lhU2hmQ3dzTFVyZ0FGRm9uLW1qcFhtWWpWREViWWwwbXI5bjZjMHJieS1XWDRKTkQ2dHNCbWxIV3lfcHNTbFFvZVJPN2hCaVZjQmtPUGtuQVZuUGVlbk4zOWNLemJCSGpFMDVyNUlZOGJ2bGVvcHBuTkd3a1MtaFJ1a0VUbk13MDNwbTg?oc=5",
      "publisherUrl": "https://berandasulsel.com",
      "source": "berandasulsel.com",
      "summary": "kabar gembira atau ancaman gali lubang tutup lubang ojk batal batasi pinjaman di 3 platform pinjol berandasulsel com",
      "id": "41e271f50f92557e",
      "domain": "berandasulsel.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4736a6dad5c6311f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "OJK Batal Batasi Masyarakat Pinjam Uang Maksimal di 3 Pindar, Ini Alasannya - IDX Channel",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOTEpwSFptWW9CdDhUTEpKV0hDS0hlNVBNSlN4bzFoQVFkcDhnRW9NRHZjaURKNnVkaWRMMEV3NDk4VUwyaTZRN1F6NmVLeVJQMHpGb1MxanpfQzV6a1ZVSFUyeUFHajdmcDZiMnFhb3ZiTlNkcXNnd2FsNkpyeVB2bEdxOGpselE4VlUzeEEwTXBzbnBFWFNJZnAzVHJwdnpyaDJtRUpHdHg0cnItWlJaSw?oc=5",
      "publisherUrl": "https://www.idxchannel.com",
      "source": "IDX Channel",
      "summary": "ojk batal batasi masyarakat pinjam uang maksimal di 3 pindar ini alasannya idx channel",
      "id": "c3d4b0befb81b248",
      "domain": "idxchannel.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8a14874a01eac30a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "OJK Imbau Masyarakat Waspadai Investigasi dan Pinjol Ilegal Melalui Prinsip 2L - Chanelmuslim.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPa2pYZVA5dlBlZVd6b3FlYy1wTThIM1FlVHNRa3U1OGRld3RFWVM3OEZvTUF4WENHdHNhWXFtZkFvQTlNZVJFRUctOENJTFdSZHJkUWRuczVISDQ2ck5xZHp3Q2RFbnM3WnBsVmR3M09fcTZ6ZEZQbGgzRVZvekNLemw1UGRiS3lrcldWN012akdVNkpUaXNGMWt2NFFTRi1ERV82NjBXMGcxUmcy?oc=5",
      "publisherUrl": "https://chanelmuslim.com",
      "source": "Chanelmuslim.com",
      "summary": "ojk imbau masyarakat waspadai investigasi dan pinjol ilegal melalui prinsip 2l chanelmuslim com",
      "id": "b80d802bc27445ce",
      "domain": "chanelmuslim.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 70.3,
        "label": "negative",
        "negativeWeight": 3.4,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fa5b5a7c1c35ac3b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-18",
      "title": "OJK Ungkap Data Mencengangkan: Kerugian Investasi Bodong Tembus Rp142 Triliun, Jabar Jadi Juaranya Laporan Terbanyak - Chanelmuslim.com",
      "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxQSUtFVXk1YmR5RWY2WlZYZURlbm1tZ3dhbkRhanh3Y0Utb1poSlBnRThPcE1scUwwTk1xRjJaeVM4ci1uSWNaVnl5a3pLdzdPYi15Qy02WS1ZWXZfOTBuUnpKNkVCa2pSUkdqSFp1XzVpaDd5TXFBLXNuUlhpenZXNkZqUjdNZGhReTBPMkJRZjBrV0V6c3JWaXZzdUlCSTZobmtTazZyM0tQMUFqWXYtUnE5eTVxWThxc18yYmtoaFVITkpvYnI4SUxiS0plNkVDdjlEUlhibWRiOEw4?oc=5",
      "publisherUrl": "https://chanelmuslim.com",
      "source": "Chanelmuslim.com",
      "summary": "ojk ungkap data mencengangkan kerugian investasi bodong tembus rp142 triliun jabar jadi juaranya laporan terbanyak chanelmuslim com",
      "id": "3ce53a8cfec4fcb4",
      "domain": "chanelmuslim.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f9ff7ba793638ef8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Perkuat Perlindungan Konsumen, OJK Tegal Ajak Masyarakat Kota Pekalongan Cegah Scam dan Pinjol Ilegal - Halo Semarang",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOWmlxcW5LNEpTYUw1YXdIVnhjT25KOF9ObmRmQWpyc0s2S0QxVDhCekszTHVRa1c1bTdhNHd4ZEdZTHp3UFhDWVRLU0wxSlFkaFdCTDVTWEpBdUtLbjFfYmVvQTNSZWtDWHRHMHpKSGhjLU8yZmh2a3VIaWRJUzFraF9LeTNrWk93XzVsOHlnUmRDQ0VKa0ZNSHRERmxkWEZLU29UeEx3UkRpNEJSa3d0OGxCWXY0UWpJNGJDRnBIUkV6TkU?oc=5",
      "publisherUrl": "https://halosemarang.id",
      "source": "Halo Semarang",
      "summary": "perkuat perlindungan konsumen ojk tegal ajak masyarakat kota pekalongan cegah scam dan pinjol ilegal halo semarang",
      "id": "aec2dd173b5a8256",
      "domain": "halosemarang.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 70.3,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-84ee25b6a0299237",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-18",
      "title": "Pindar Tak Lagi Hanya Andalkan SLIK, Jejak Digital Jadi Bahan Credit Scoring - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNeWgxbnJMS3BCWENMY0FjS042YzRTVm84NlA4cVVIYkNhWmh0a1RtMnJ2ZzBmVm9GbWU1Ylc5QVNkR1d5SGJLdXNNaWpLWkNiU1pwWEsyTFRVREVxUWxoSUtwQ1F6VUFVaTdpUVNKZXZYSjNULWV3UnNqdFpqNzhtLW52anQwNHpBNjNlM2s2QXphM3FSb1JhNldFVGRiR0c1V2kzYk00aFBIZFJpRHNkV0hwaXpFWkNy?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "pindar tak lagi hanya andalkan slik jejak digital jadi bahan credit scoring investortrust",
      "id": "56a6dd73020b62ed",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e723a169bb5f72b0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Pria Muda Paling Banyak Terjerat Kredit Macet Pinjol - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQXzkzamJtdmRXZHhvRkdvM2ctMnJvcTB3TlJRcWw0dmloeEUyOXA2LWY5ZV9jWlFKNTRPU1IzeENiQ3FrbFZiVXJIalNjTEtBNm1Idmhxb2syNVhIZTVoRWNsaEpwNGpaVmhsbUYxcEdmeVFRcGpGTG4zV0cwQ2VTX0tCak5WTFNrR1RYXzBMNVp5MGNPaG1mTDdDcHhoMnZj0gGgAUFVX3lxTE12YmJoTXNxV3FQb3cwRm5JMmJTTU56eWQ2QUJHS3YtR19reVZMRmhUVzRBQWhXRTk1NFAwWjFXYU9JU1FNMnNQazRGTEtmZ0pjZXVsMDR6SUQxaUJzVUljNGVUenJRRTU1UG1UY1pBZVI3eU1PelE5WFhUVC1MZ3p1SXdhM3JLaDJQLVprcExnRzA2RE44OHFGSXNydGRTUnY?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "pria muda paling banyak terjerat kredit macet pinjol suara com",
      "id": "c69206459251fd2b",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 74.5,
        "label": "negative",
        "negativeWeight": 3.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-20aec32abb6a93ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "RPA INDONESIA AUDIENSI KEDUA DENGAN OJK, KAWAL 51 LAPORAN MASYARAKAT TERKAIT PINJOL - Metropolitan Post -",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNY25RSWI3Nk9kRHRnSjNzV2dpTjNxeWxnbGlYaVdBWU12Mzl3NU5kUUJXQWg1MzZNRGRWYmJqcEx6UjcxaHdGRG5UQVFyb1N0RHJjdDlyaUNSNlBoc0d4Sk1URFNaeHBweWt0N2hiZ0Nmc2tlWnlnVXFWaWdXUU1sb2FHUHZVYWhhS0ttRXZvYWtCRlJzRFd3eWc0d2ZhanZvUkduMmdxUV9DeEIwRGF1UA?oc=5",
      "publisherUrl": "https://metropolitanpost.id",
      "source": "Metropolitan Post -",
      "summary": "rpa indonesia audiensi kedua dengan ojk kawal 51 laporan masyarakat terkait pinjol metropolitan post",
      "id": "84e32c4bde8dd817",
      "domain": "metropolitanpost.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5068e44991cf114f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-18",
      "title": "Satgas Pasti Hentikan Kegiatan 951 Pinjol Ilegal Sepanjang Januari-Juni 2026 - IDX Channel",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNTmNCOTZIczV3QzU2R0EyLXlLcV80Nnh6YVVTa2xCU0VwbEJPWWlxbzRkM3BkVm96Wkpra09IbDdpQUxkWjNMV28wRC0wcDlzaG1pVzUyNTFLT0N0dzlDMGdSR1g0dGhoTjdLT1A5RnBlWE1iQUtzLU1sQ3Jkc2ZkeGIybUEtNXRyQV83UEd6enVjSDRFR0FFM0VxOE9wQkRMM2c2ajA3RWx4UXpXNEZINVBIUdIBuAFBVV95cUxOTWs0RVN2MTVPZ0lmYmdMb1hKV3Q2ZkdQSlhHdm80ZkJFMEJUbmFkekEyYnJYZVhDaHlQS3dpOXlkdVptNWRkNEhPZi1PZHdPYTRLWG5CcDd1MlNnR2F4UFB4TnJTM0czd21DeURwWXljTkFiUHd3M05LbF9xWmRmV2pneVAybzJwbERzeDdwcE83QVRjSS1QNXpaNk8xTU5iMGV4MWRSLWpkS0FmUlV0emlnNDZ2bnIx?oc=5",
      "publisherUrl": "https://www.idxchannel.com",
      "source": "IDX Channel",
      "summary": "satgas pasti hentikan kegiatan 951 pinjol ilegal sepanjang januari juni 2026 idx channel",
      "id": "a9f626cdced0baca",
      "domain": "idxchannel.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-601121309b0e0e26",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-18",
      "title": "Studi LD FEB UI: 54,3% Kredit Kredivo Digunakan untuk Kebutuhan Produktif - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNNWVrVVlKS1FqajktcE53eklpWE9idC0zdklQU1ZEN2dCSm5XU0lQN0ItMzFfYmR6TVdhMW1YQjRGdU10dlNOREpQcFo4cEx1OV9iaWVheTVmWHVfU0VySjdkWXg4dXJDZE84eDJ3Mjc2NWVlYmEtUWJjaGhQTHpialV0NjRMaUdrOGdPMXZYSG5CZE1Zb0xYUVF5NVJHblJ4cXc?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "studi ld feb ui 54 3 kredit kredivo digunakan untuk kebutuhan produktif swa co id",
      "id": "73250f898ff47610",
      "domain": "swa.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bce6411cbd3b6c3c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-19",
      "title": "Film Baru Tuyul Second dan Personal Berondong Mulai Digarap Tahun Ini - tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQclo2WWRfSmJTTnk2Z0p6dTVabFF5RV90dk00WmxiYmNXLXpWVW55RGluTndqQ0h2UHRkd2pfRjFTWENFeXJJRDdXbmtaT2dzVThVZVVQQjZwVzBPMHNLcWVVNzlVaHlnY3JwQUEyeVcyNDBLZkJkb1FabTZ6TzJ6RlR6dUFiLVBwamYyV2tTMmNhTUtMWFd2RjREQlp5anhEbWE5RGpyVHpRRlV1WlJZ?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "tribunnews.com",
      "summary": "film baru tuyul second dan personal berondong mulai digarap tahun ini tribunnews com",
      "id": "071787909154c08d",
      "domain": "tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b93d2d5019fcb34a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-19",
      "title": "GEMA Picture Siapkan Dua Film, Tuyul Second Angkat Pinjol hingga Sosok Debt Collector - koranindopos.com",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQaHlQSTdFb0M4VmgtWnVLeklIc25mZU42U1FqNkI3b2E2TVktYl9RdkY1RndHZWxKaXF5LThSeERrVXJ1TWh4NHVqVmlLR0FQdzF1N0NWRDJFSmduQmdVZTRPSFNhSklQeWhrS1FtYzhpUUwwTUg2dnoyVG14eHRPZzVnemU1bnRmVUJKWjRrVU5vTWliRHRqU0otQXZiWEo0cnhKRmNBTTJfOFZVVHdZ?oc=5",
      "publisherUrl": "https://koranindopos.com",
      "source": "koranindopos.com",
      "summary": "gema picture siapkan dua film tuyul second angkat pinjol hingga sosok debt collector koranindopos com",
      "id": "6915bf52ee26caea",
      "domain": "koranindopos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fff2806a9dedb83f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-19",
      "title": "GEMA Picture Siapkan Film Tuyul Second dan Personal Berondong - RM.ID",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQT2phYnlndy1lUlNaZVJ5RGZ5dldPSE5ieDY4dG94VzIyRmdnaWFYczdmdUNQTmI0NTQ0WHY1TmtjbEV1aWhjNXJJOUxNd3V3V0J4cW1pTURkc2ZnbXNCYmY5Yy1VQnMwekhIbEh5ODZPUlZSMnhWOS01djVBZHZteS1BR3pHcU1FbVJEVHZoMTRGZWhKemNRTnpVWHNZSmVCME0waFpROA?oc=5",
      "publisherUrl": "https://rm.id",
      "source": "RM.ID",
      "summary": "gema picture siapkan film tuyul second dan personal berondong rm id",
      "id": "31a0f893165eff4e",
      "domain": "rm.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-56c2231b936657de",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-19",
      "title": "Horor Komedi, Tuyul Second dan Personal Berondong Bakal Ramaikan Perfilman Indonesia - Harian Terbit - harianterbit.com",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQdzhIamQxdHNYZ1ZITTVKa25xeTZ6cGhFaTVGN1h3SzhUM2JKaVhDWHU2YkNvdUtDNzZVbFk5V1NGMFE4ZGJUa2dxNFhKSzVpS05nVUFmcmNpbldQNUI1X19YTU92OEg1R1RmbzhvVHdGZEdPamFsMTkwTnZxNDJqaWNPZDRlMDROMXlpdktOa19pTDVvdFVnV0cyd2pPZXFKckVOdFkwbzJzQ2NnbmtISDBGWndVUlNWRWY5bUVUMDZmUW9RU2VsWHQtU0wtOVZWMTN6c9IB1AFBVV95cUxQdzhIamQxdHNYZ1ZITTVKa25xeTZ6cGhFaTVGN1h3SzhUM2JKaVhDWHU2YkNvdUtDNzZVbFk5V1NGMFE4ZGJUa2dxNFhKSzVpS05nVUFmcmNpbldQNUI1X19YTU92OEg1R1RmbzhvVHdGZEdPamFsMTkwTnZxNDJqaWNPZDRlMDROMXlpdktOa19pTDVvdFVnV0cyd2pPZXFKckVOdFkwbzJzQ2NnbmtISDBGWndVUlNWRWY5bUVUMDZmUW9RU2VsWHQtU0wtOVZWMTN6cw?oc=5",
      "publisherUrl": "https://www.harianterbit.com",
      "source": "harianterbit.com",
      "summary": "horor komedi tuyul second dan personal berondong bakal ramaikan perfilman indonesia harian terbit harianterbit com",
      "id": "e1d10f8ad5254831",
      "domain": "harianterbit.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4e9207d750049b28",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-19",
      "title": "Judi Online dan Pinjol Dinilai Saling Menjerat, DSP PKS Dorong Gerakan Nasional - indoposco.id",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOcHJmYUhXNDN2MFlSTmxDTnFXdHg0M1JVeklpOW5JOEd5anNpTnRkclcxaGtoVkRXMFhoRmxycGlFbWkyTlVoajlZWU5TSlQ2NXJ1VWdrazY5eUFibGFtWExXbVFjbDVCYjZDWDMzREJIRkR6WVVVTVc1cmlHQ2ZtRXZrd3JES2ZmY2lPT0JJZEJoUnJENHhZR1lKTTlHLWJUXzRyMHFnMUFldENnTl95LQ?oc=5",
      "publisherUrl": "https://indoposco.id",
      "source": "indoposco.id",
      "summary": "judi online dan pinjol dinilai saling menjerat dsp pks dorong gerakan nasional indoposco id",
      "id": "9eadf9128225ad4c",
      "domain": "indoposco.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77af63b105ba486a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-19",
      "title": "Tuyul Seken Tak Cuma Jual Horor, Kisah Pinjol dan Jalan Pintas Jadi Bumbu Komedi - Lensa Banten",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOZ2ltQ2g1R0dPUENaSE5MUGFWaUFTR0JmS2x1cHg5dDYxb011eU9KdzJNWUNuYzJvOGZTampQZmtwdnMyWDZ2aG1fYkg2N0phaVd6TUlqM2dSamtzbVgwanl6YzBSQWZnX3lNaG9iQi1qYW56QTBXV01rQXhXZGRodTljSDlfeVdmeGdZUmRQNlRWT0szQlBlWEhZT0RlVVJLcXZXbWg5NWwtUQ?oc=5",
      "publisherUrl": "https://lensabanten.co.id",
      "source": "Lensa Banten",
      "summary": "tuyul seken tak cuma jual horor kisah pinjol dan jalan pintas jadi bumbu komedi lensa banten",
      "id": "ac734204d834bcf5",
      "domain": "lensabanten.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2b8502c598ef889b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-20",
      "title": "951 Entitas Sudah Ditindak, Mengapa Pinjol Ilegal Terus Bermunculan? - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQd2J3MXV1ZmpkdVNwbjM5cV9iTTZJQmRNaU5YVGFQb2VjVklGVENSUjdPQ3Y4UzdtcWF6eWlaWXFyVDE0R1N1cWp4cFA4MmtXRFN1STV5SDRud2xqcEFTYVNVdjlxelpScTAxcjBtX0pPSXdkek1sNFBUMTJkM1E5QVFaSlF3Q0pzVHNxVHV2NDZnc2ZpUFJEdlowdnFkajZVWjZIMk5mdlh2bFh5?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "951 entitas sudah ditindak mengapa pinjol ilegal terus bermunculan investortrust",
      "id": "8e00268937428a77",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a54eb8b300775840",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-20",
      "title": "Angkat Isu Judol dan Pinjol Ilegal, Film Menang Untuk Kalah Luncurkan 16 OST di Bandung - TIMES Indonesia",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPX2JHcjY5RDBOd0psUWlCNUZuWE1sbEJpX1VTSEtBYnBJUUVxY1c5em8xT1lGQko4ZE1YeS1NSlBGalBqY3RUMkpRbzBWeVNfTHg4bjhGUmFLX1RWWHJvc0FSMGQ4ZlJ3aUlrZk9vQWdTT0tBYVJpdzd2czY4b2NtVTJqRzBMSDJpcGJmYmhQSHEwUkFWTFVkQ3dramFQNjJocXZxZnNUN25oRWRkblFhWkR3X0pTNTFZejRoLXRjZ0s3TDZwUWU0aUJGNzQ?oc=5",
      "publisherUrl": "https://timesindonesia.co.id",
      "source": "TIMES Indonesia",
      "summary": "angkat isu judol dan pinjol ilegal film menang untuk kalah luncurkan 16 ost di bandung times indonesia",
      "id": "9c9755c9cdf2a24a",
      "domain": "timesindonesia.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cbfc1cd9eea9e2f5",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-20",
      "title": "Bahaya Judol dan Pinjol Pesan Penting dalam Film Layar Lebar \"Menang Untuk Kalah” - patrolicyber.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPRHBLb0xqbjl1NUxhcy1xbjg2REZyRzlnbzREUVI0Z1Z5bS1KWk01QVh6bEF2MmlQU1dxX294bzhPd2hCVjVPekxoTERBcjJkZ0ZVUXlUQklwakRMeDZfRDlNbm41T0FrQV9QLVJOWDZ3bFpiVWNuR3RPUnpnSUs3NFlZLTNoRTltRTdyX1ZJZ1BYMmRTd2dxdFlFeWdNSTY1U09Jb3ktaVllckdTZWc?oc=5",
      "publisherUrl": "https://www.patrolicyber.com",
      "source": "patrolicyber.com",
      "summary": "bahaya judol dan pinjol pesan penting dalam film layar lebar menang untuk kalah patrolicyber com",
      "id": "8d39e3629ccdebd2",
      "domain": "patrolicyber.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1ae5418444c0f7dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-20",
      "title": "Boni Hargens: Polri Beradaptasi dengan Zaman - Suara Pembaharuan",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOMFlGejhEREQ3OGY5dldCbHFTTk41VE54eHRpMlRwNWZPaDlXOTRMNFA4UVBpZVJHRThPekM4czFlangzRkI4TDgwVWJMdy11YmNZRnF4VG96czFpTEVCVmE1NzFVNko2djJjZjBoRWYtVHh2dlJTMHNoQTRucGt5bU45cUFQMkliSWxj?oc=5",
      "publisherUrl": "https://www.suarapembaharuan.com",
      "source": "Suara Pembaharuan",
      "summary": "boni hargens polri beradaptasi dengan zaman suara pembaharuan",
      "id": "fcd5b8cc31c7d45f",
      "domain": "suarapembaharuan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-12f7ece817c76614",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-20",
      "title": "Download Dana Mudah - Super Cash Pinjaman Online Apk Sfile, Legal atau Ilegal OJK? Pengalaman Galbay Pinjol - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxPSzFRLWloa2lvVGlqMjQ0c01VZVRJZjRBeEFGMDlOVzZ0enZJU0kyZWhCb1k5cVBRNkpYQzVQRk5FUDhrdVVhYzVwMzdfdjlnSXJyNU96Zzg5ZEhiYzhUa0JyVm9uZWl0T1lZSS1tVF90b2MycHVoRDJVSkJ0ZDQtZExvU0p1OUJTYldvSzFHSlQ4VVllRTFvWkdjcng2NG1rbUZ0N0JzSnNwT3VseHhPVXV3V1B1RmE1MGdBQjRteVVhS1gxelVQdmFXUDhZSXllNHBiQ3JYLUVIa0tOTy14YXhfVkhyWDBZWllFRjhDSnEwTnNBZmgxN2xpekN3OXct0gH6AUFVX3lxTE1BYmF6V01qRkFHV3ptb3NSM1BPNnZNQVdobEppRXd3ZjdWdEtqSGlWcENTOWIwSkZKNWx4Z2JUTHFZYzI0cG45TmVWX2k0OGpSRzZKVVFRbjRkTHRhZWlzRUx6cjI5Rkc2c3NYOFZacl9rVjhITWpFejZzMXZiTXRhTkxLeGtBLW9Hak12OTRVX3pPUnA1VjNqUFpSWlBJRmNPdFFXUW1OZE54SGRyRnVKbHVsajBIU3BobkJiYm9tQlFkdEVNdFctOWJjc0hPYjJrV3lwckZQajNvQlRaNXBJWUlER3pWclVOUk0zSWpCODhvMUhubFdHaGc?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "download dana mudah super cash pinjaman online apk sfile legal atau ilegal ojk pengalaman galbay pinjol berita diy beritadiy pikiran rakyat com",
      "id": "883a2f5a5140e54f",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 69.6,
        "label": "negative",
        "negativeWeight": 4.1,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e1e17e5c2179964f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-20",
      "title": "Kuliah Umum terhadap Mahasiswa Baru di STIE Wihara, Polres Purwakarta Sampaikan materi Edukasi Bahaya Cybercrime, Judol dan Pinjol - Tribratanews Polres Purwakarta",
      "url": "https://news.google.com/rss/articles/CBMingJBVV95cUxPelB1alZrZDA4MnlvY2U2dnkwb0VLY0tTVGZQOXpOYzBrZlhqRGJ4VGZ0UU5WRkU5LWxSSHZtUXZ3dDlIUEl0NFd3czV3RWxMbzNLcGs2RjVTMmtSX3NaYnh6Ui1XVURKby1UTU5wYURObUI5NXVBM0ZQMi0yUDZYZURoWVlucy03MzhwUGJDRnlUS0tpZzd1c1V1R0hlZGk3ckJWSHQtU3luS2podXpXNGRDYzlSX28tOUx2a0ZXa2dsejFMT0pVVDRrTUxkNGRkWnl1Y19NTHlILUtyTXQ4aG1KaC1BQVpkLTZkcmowaV94eDlpaEZmbmZhYUdENnladTdvMEowVnkwRWxWWHJIMmc5SWtzYXM4V0J6TUN3?oc=5",
      "publisherUrl": "https://tribratanews.respurwakarta.jabar.polri.go.id",
      "source": "Tribratanews Polres Purwakarta",
      "summary": "kuliah umum terhadap mahasiswa baru di stie wihara polres purwakarta sampaikan materi edukasi bahaya cybercrime judol dan pinjol tribratanews polres purwakarta",
      "id": "955e0c292f5dbc2b",
      "domain": "tribratanews.respurwakarta.jabar.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-63e566ea6f4296ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-20",
      "title": "OJK: Pinjol Ilegal Mudah Ganti Identitas Usai Diblokir - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQVkJjY0tDcHdMZ25ueWpaQ2RyLTdSQlJiR0JkLXRqTzFTTE5RQ1ljZjhEdWMxVFRraUF6bGF0UF9oZ3hqbTdMTmRqaWs0UzJCb3BQZ3RLdkFZWHhqTk5MUk85OHNsY1hGT3VBaW5id1ZOeTkyOVJlVjZTb1Itbnp3STNBTFRBQVB2Ym5vdzJIWnNrR3o1djBvX21LYzBJYmZyMXNwUTh3?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk pinjol ilegal mudah ganti identitas usai diblokir rri co id",
      "id": "5b34c071dd7c79f4",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-817acb7ea4f4cbf6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-20",
      "title": "PNM dan Kopdes akan Tawarkan Bunga Pinjaman 8%, Ancaman Bagi Pindar? - investor.id",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQUnRaczg5NDQtVlVNR2dPbEdQeGh5UnFPZEJUdUtBZXF2d3NfWERIempQQ0tqN2h2SmJ4ZEdDM1Z5M1FJV3lUVzhsNDFJVnlNOUNqYW1KX3dBMlV2czZfNG8teGFVSV9OZ2Z6dFktVzBiaGphWWJVZDFlMHVjclFkLWIzMUZ2ZUZWWE1SWUR6MUVYRGFYN0sxVDJNS1lJWE9YUVE?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "pnm dan kopdes akan tawarkan bunga pinjaman 8 ancaman bagi pindar investor id",
      "id": "1b65e38df5024fae",
      "domain": "investor.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d40f70fedb4fd71",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-20",
      "title": "Romli Atmasasmita: Presiden Percaya Polri - Suara Pembaharuan",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOUjNsZVN3V1BjUlk4WVBid0JuU2EzVGtTR1k0bVpkLVBHdXJsdTRqWkJXdXV1eFVEa3czakR3N0tySWtpelZnM3N2Z2ppMnpjQ1pRdnhadmk0ZGlvcnkzUUlYUjBlT1NjeDVuWC16M1c1NlJrNUhPSW5ycENuaDFxUUNiVmRqSTNIbFh3UWtsZw?oc=5",
      "publisherUrl": "https://www.suarapembaharuan.com",
      "source": "Suara Pembaharuan",
      "summary": "romli atmasasmita presiden percaya polri suara pembaharuan",
      "id": "89b98338fb6f0827",
      "domain": "suarapembaharuan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f381645461d69767",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-21",
      "title": "3 Cara Blokir Nomor Spam, Agar Terhidar Dari Tawaran Pinjol - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOUndsbXF5RWZKSlhobzIxZDAwZDNDamozNzJ0S0h1VnROTmo2b292MlNZMWYybXlDaWdFa2VpSTNxNDBfcnRwNkJQTzNNM3RMWXdLejVPOUJYOFMyNThCX05jWFhXeHdnTkFVcGUzT1pUdXJnVTRzNW01azFYQWpLTjNjbkNZYVdkbkUyTUlINW5OS01fR0gzUldxbHhOcHlOeFAtQ1JtV29FNjNfRndz?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "3 cara blokir nomor spam agar terhidar dari tawaran pinjol bloomberg technoz",
      "id": "9b3b1a081ef98976",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-841830924440ee8c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-21",
      "title": "Cegah Kejahatan, Pinjol, dan Judol, Warga Balecatur Raih Pembinaan Keamanan Lingkungan - Media Center Sembada",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPYlVGekZNY01JazQ3Q1RCZzYtc1pvVmRDb0gwSW1QQ1Fsc0VaQzNIMDZHbU5TVG9adHByTkdrTHNXSU9sR1V1bVBkUTl0SnRQTlRTdlZSTUtFR1RzWTJCRVNqZS1SSm80Rnh6TnIwZDc3ZUZsYktNZWlYNTB6RXZ6TXI1YnBxNVRiaW1LaFdMOHZ2N0Z2R0I1Nm1fMVk1dGFfVU04WHVEMmxYQ21xbktqbndwUWNmSzZ0dzRsZVhLaGNpd0xfdmhlaC1aNA?oc=5",
      "publisherUrl": "https://mediacenter.slemankab.go.id",
      "source": "Media Center Sembada",
      "summary": "cegah kejahatan pinjol dan judol warga balecatur raih pembinaan keamanan lingkungan media center sembada",
      "id": "c86edaec949fa907",
      "domain": "mediacenter.slemankab.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f7f2a7ad0fd3948b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-21",
      "title": "Kapan DC Akulaku Datang ke Rumah Jika Gagal Bayar? Ini Penjelasannya - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNMzlYWlY5VnkzMngyMGhkY3NDWmN5OFJFZDMyTGxyVEtjTWFwcmFvQk1CdjJLWk45M3JuZkN3alA0N28tQ3NkdVhDSUQ3cTFNdzdac0xQS2NWQTJsSFZKV1R0OGpab3RJZUs2OENzcTRQQ3RCV3pYSG1ib0I1VDlWV1dCTGNKVmZjYkQ2akh5cDZYVnZKOUh1NUo5bElpZmNXZTRieDU0eU9oOS14MDYw0gGuAUFVX3lxTE5qc0Z3X2tka2xUamdRMUtjU2IxLVNIUXZEMG1vczI1VUlDTlcwMENGUk9wWFVQNDJzcHBwUERHcTRiX1o1TDFGdTI5cjFrV0h3azl0RDdIS3VTUm5IN3NkVENiUzU3OXdxTGFjWlBycFAzWk56ZDRxQm52azZvVWpVeVZJbURXMVgyWWhRT2wzSWJ0Y1hkSmNWS2RjVnZlYzlTYmRJd2NTSlVnV2U0UQ?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "kapan dc akulaku datang ke rumah jika gagal bayar ini penjelasannya grid id",
      "id": "0ab90229fd598024",
      "domain": "nova.grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c7a95139c7af0f34",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-21",
      "title": "Perkuat Perlindungan Konsumen, OJK Tegal Ajak Masyarakat Cegah Scam dan Pinjol - Suara Merdeka Pantura - Suara Merdeka Pantura",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQQU9NTFVqajlObU1jME9LRWtkc2ZjV25GeGdnV1ZaZnF1b1F5aXBoOGRrRGx3cTduU3JqbzdfT2pQQWp5SWZCcEJJRTFTQzFmV3ZVSHNDRU5nWDNoWU1QME9CQmhTUnlhMEtRaS1tdXJIV2dNRVZQUWJSUDk5WTV4X1BETWhBaHUwTXVXcEtpMkt5WnQ0cUQzNkNaeGlqdVRaUXVUSVVZaUxCa1Zibm9NSGR3Q0dMbU44MDV2d1MxWF90X3Zvb2lUY1NXTTFsTXfSAdQBQVVfeXFMT3l4WjBrTFJpTVNJU3ZzdThPLXZRSjREVGVXUk5lSXl2V3ZCVWJjUHRMM0FhUS1FSGVIUThWblNUYVBvbWdQZ1VNUl9STXVmeGxJTS13UnlPSG1FY2FKZVNhbUlhVk9tTWNJbVU1YkR5NGRVb19PQ3ZFUm5rckp2V2ZRZU91Tjh3U1RUWXZwRmdTVE5oYVJKY3JUdDN5VlBtdFhEWGxEUWExNzBtREJlTVhHTlFsV3pqX3haXzk0WTFyUGJUczNBek5hcE45TloycDl5Q2E?oc=5",
      "publisherUrl": "https://pantura.suaramerdeka.com",
      "source": "Suara Merdeka Pantura",
      "summary": "perkuat perlindungan konsumen ojk tegal ajak masyarakat cegah scam dan pinjol suara merdeka pantura suara merdeka pantura",
      "id": "6d8d78123411be90",
      "domain": "pantura.suaramerdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 2.2,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f68e42a929cb9f78",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-21",
      "title": "Waspada Jebakan Batman! Ini 5 Ciri-ciri Pinjol Ilegal Paling Licik yang Sering Mengincar Gen Z Tegal - radartegal.disway.id - Radartegal.com",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNTVJwZlBjdm02YlJvNjZabWJtMWFiS1g4TFRCUTNHRmVqQXFvbmNkNllsTE5PNmd5Ym1yTWdSRGdTczczWDRfd3NGcldFUHZ5WUFzZjBsaUF1QlF5SnlTYml2bjhOWnZ6SjcxUzg5UUc4Q3NsMnYwTHB0X0R6QUF6YURpZXU1OWdOQ3pMR0JvaG40ZlBHVVIxdnlVQ2NTS1hlRWdWSHFiTFJZUlN3d1lvM2RWdW9fNHIzUzNNVTYwVVFCMXFyTTN4Z2haZ1VVYnVUUUJYWmR30gHWAUFVX3lxTE1NUnBmUGN2bTZiUm82NlptYm0xYWJLWDhMVEJRM0dGZWpBcW9uY2Q2WWxMTk82Z3libXJNZ1JEZ1NzNzNYNF93c0ZyV0VQdnlZQXNmMGxpQXVCUXlKeVNiaXZuOE5adnpKNzFTODlRRzhDc2wydjBMcHRfRHpBQXphRGlldTU5Z05DekxHQm9objRmUEdVUjF2eVVDY1NLWGVFZ1ZIcWJMUllSU3d3WW8zZFZ1b180cjNTM01VNjBVUUIxcXJNM3hnaFpnVVVidVRRQlhaZHc?oc=5",
      "publisherUrl": "https://radartegal.disway.id",
      "source": "Radartegal.com",
      "summary": "waspada jebakan batman ini 5 ciri ciri pinjol ilegal paling licik yang sering mengincar gen z tegal radartegal disway id radartegal com",
      "id": "0877ae0f7007882d",
      "domain": "radartegal.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b7b544b85b87559",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    }
  ],
  "socialItems": [
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "4pQqPW5swso",
      "date": "2026-09-07",
      "text": "Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 32940,
      "id": "251b1e0810a06f6e",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-24e408a096c242e1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy-i_jO3nco2YHaVxF4AaABAg",
      "date": "2026-09-07",
      "text": "Bismilah semoga dapet rezeki dari si Abang buat kluarga🤲",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "91e4a2a5c19bc465",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-34f5f21ecc93894c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwsL941ceC0mC3oMoF4AaABAg",
      "date": "2026-09-07",
      "text": "Hadir bng semoga dapat rejeki buat keluarga",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "632862d3a07c5aa5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48d4c518be3ad62b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy7BONS1nx9VuKPe794AaABAg",
      "date": "2026-09-07",
      "text": "Min bertanya..bank permata dan bank permata uus itu sma tdak",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "4dfb4a0d0538198f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d54fd713156e5318",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxXsQVMvrQG_ngldut4AaABAg",
      "date": "2026-09-07",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 120,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "64d1f3b186f08d17",
      "eventId": "auto-7539136796e5fda4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzS-LnH-uH-9HPNvr54AaABAg",
      "date": "2026-09-07",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 87,
      "id": "74460c2468547140",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7539136796e5fda4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxL-i52dHAInJYKeUN4AaABAg",
      "date": "2026-09-07",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 54,
      "id": "5dd030ab18b4e39c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7539136796e5fda4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxtiCLv3CrQvhVMOwN4AaABAg",
      "date": "2026-09-07",
      "text": "hadir bang,mau banget buat beli sepatu udah 2 tahun belum ganti",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "ffa0eba0acaa07e8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7afc3e398c9e4202",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "H4-nJQ89H2s",
      "date": "2026-09-08",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 19933,
      "id": "725de7cdcc09cc9a",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7770eb8e8f7c4eef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwhy2gCwe6uds90gIR4AaABAg",
      "date": "2026-09-08",
      "text": "Hadir bang,buat kebutuhan keluarga.",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "6466d4284e783e8a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1d6debc77a404f19",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyBFoXwskhCgAr8M14AaABAg",
      "date": "2026-09-08",
      "text": "Malam bosku, mantab nih edukasinya, sangat super sekali",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "1f8e0c780112304a",
      "eventId": "auto-38b0bf556fca4bf7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzgCTSu-FQGMsv5pot4AaABAg",
      "date": "2026-09-08",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 29,
      "id": "d93e017799996c4b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7539136796e5fda4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy2xgsgJyYC_-J-A8p4AaABAg",
      "date": "2026-09-08",
      "text": "Semoga dapat",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "12438d2ad994aae6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49f8629faa1dc933",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwMx5Pe3evgXpz1ALh4AaABAg",
      "date": "2026-09-08",
      "text": "Semoga dapat amin",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "e8afdaa62f31398a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8f4a2273a055859f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw2yi8HCzB4XuHi9_J4AaABAg",
      "date": "2026-09-08",
      "text": "Semoga dapat bos",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "21f26d5964c39ac7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1ddcfd400591aa26",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzMrNjcFKSHPuGDhcB4AaABAg",
      "date": "2026-09-08",
      "text": "Semoga dapat dari admin aja,,,,mau pinjol tapi taklut",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "9c047ef6a1b21ca3",
      "eventId": "auto-d337e61859745950",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwD6jkAmk6fP1WiOdt4AaABAg",
      "date": "2026-09-08",
      "text": "Semoga dapet",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "69aefad38e6490e2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-94897bdb6d4bae98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLs8LjU9i7fMWPZm14AaABAg",
      "date": "2026-09-08",
      "text": "Semoga menang",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "cbea2d2a36fa0427",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b0a06c60df331d7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx-ddQoxrzaZSSFB8l4AaABAg",
      "date": "2026-09-08",
      "text": "Semoga menang ❤",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "a7f90839c1f53ae3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b0a06c60df331d7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "NGZstKP2Yug",
      "date": "2026-09-08",
      "text": "TANPA BI CECKING! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 43810,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "2895342086240b46",
      "eventId": "auto-f004b55e0c0ac1c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgziuW1zAYPM-tbvXal4AaABAg",
      "date": "2026-09-08",
      "text": "hadir om,tolong dibantu untuk kebutuhan hari2",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "dd7673f1b1a2e1b6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f77f0c87b796428d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz8N-vr_I0WUJ0gZlV4AaABAg",
      "date": "2026-09-08",
      "text": "sukses selalu abg ku",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "e26a073a0fb95ebc",
      "eventId": "auto-4babc37d03da56ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyfmxT5X3glxOGDhuN4AaABAg",
      "date": "2026-09-09",
      "text": "Bang kalo sudah pernah pinjam di pinjam lain apakah masih bisa bang",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "750929f72e79d668",
      "eventId": "auto-9ea0bb56a2f13479",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJr1rpox5XnASzJCh4AaABAg",
      "date": "2026-09-09",
      "text": "Bang saya minta dana buat bayar kontrakan udah 3 bulan",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "09eae851ac109ea3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2f475308b661ecd4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "CQbXPnuA7IA",
      "date": "2026-09-09",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 56199,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "f33a1075978ef7fb",
      "eventId": "auto-c56326dcc516effe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzC3tFIU-UWThyeJrp4AaABAg",
      "date": "2026-09-09",
      "text": "Hadir bg",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "ad13fbc1b36ada5e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4ef6bd027e57d3e3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLPNTHk7EcFkBJL4J4AaABAg",
      "date": "2026-09-09",
      "text": "Mantab bang",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "ead2c03e02fd933d",
      "eventId": "auto-155595a86f7feb09",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxghAPmTKfSBohxrR94AaABAg",
      "date": "2026-09-09",
      "text": "Mantap abangku",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "0cfaa8b2f1e55ce8",
      "eventId": "auto-3d2e12a2fff47280",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzsZ6TfJLDqskOfFM14AaABAg",
      "date": "2026-09-09",
      "text": "Mantap bang",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "d89e78a1068dd111",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b52321e37d8d8291",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgziGbqOs2Am3mSZDH94AaABAg",
      "date": "2026-09-09",
      "text": "Mantap bang🎉",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "b581d9f662325ca5",
      "eventId": "auto-b52321e37d8d8291",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxOo7IQuGxMsVmhaDt4AaABAg",
      "date": "2026-09-09",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, mau daget buat kebutuhan darurat apa nih 👇 https://link.dana.id/danakaget?c=snxzhvhrv&r=c7Q38x&orderId=20260912101214753315010300166276297686654",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 148,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "2e8db3ee034b8cd2",
      "eventId": "auto-d88a9fb1a80e402f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNMYXWiNzo_maVkk14AaABAg",
      "date": "2026-09-09",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇 \n\nALTERNATIF PINJOL : \n\n1️⃣ Daftar doang, Dapat Rp100.000\nhttps://s.id/DanaGratis1\n2️⃣ Daftar doang, Dapat Rp180.000\nhttps://s.id/DanaGratis2\n3️⃣ Daftar doang, Dapat Rp340.000\nhttps://s.id/DanaGratis3\n4️⃣ Daftar doang, dapat Rp160.000\nhttps://s.id/DanaGratis4",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 126,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "09a6b0269a9a664d",
      "eventId": "auto-a2c6befd9f888363",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "zc3z5UAHDuY",
      "date": "2026-09-09",
      "text": "Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 43522,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 44.4
      },
      "id": "43d3026f9f2a7776",
      "eventId": "auto-c45f72a0cc7e17ba",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwI8-tzPPO3OsZbkfF4AaABAg",
      "date": "2026-09-09",
      "text": "Terbaik 🎉",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "185dbed65127e513",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aaa9539c61e02520",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyZC4csAi_gSOkkrWh4AaABAg",
      "date": "2026-09-09",
      "text": "bismillah untuk anak sekolah",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "12803417b037a65b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-accb0a2a61bcc5ba",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzqR8c0c8w_LeDYetJ4AaABAg",
      "date": "2026-09-09",
      "text": "mauu bangettt om buat bayar kurang SPP sekolah",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "1a67fe089392ec5b",
      "eventId": "auto-8ad6313d5ae881d3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxtwCiU3jNg8TcWkaF4AaABAg",
      "date": "2026-09-09",
      "text": "semoga bermanfaat bagi saya",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "828c066a27d49fbc",
      "eventId": "auto-e545c83af21d02dd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxWM2GnB4axetZydiJ4AaABAg",
      "date": "2026-09-09",
      "text": "semoga tmbah lancar n sukses slalu bang 🤲🤲🤲🙏🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 43.0
      },
      "id": "2c317e976e7d87ce",
      "eventId": "auto-1df1b3858370608a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz7JXMgqLnC3LCmOTZ4AaABAg",
      "date": "2026-09-09",
      "text": "semogaa yaahh aminnn😇",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "4af05dee35e553f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-768e93d8a930ecce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy1IRxayhtXgARIYnF4AaABAg",
      "date": "2026-09-09",
      "text": "sukses selalu bang,semoga dapat 🎉",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "ed6f64c56607aee6",
      "eventId": "auto-7c3db4e6a8bdfc80",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "ZFejgtidJBw",
      "date": "2026-09-10",
      "text": "5 Pinjaman Online Bunga Rendah Yang Mudah Cair 2026 | PINJOL BARU LANGSUNG CAIR ",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 17560,
      "id": "3f0de11e9c8861bb",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c13a1f2dfe583b70",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxd7oBB0y2AUE_A0MZ4AaABAg",
      "date": "2026-09-10",
      "text": "Amin semoga dapet",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "196670773d0ce83f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d60e1ee7ee7d8751",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugymk2CnF75RhvNirWZ4AaABAg",
      "date": "2026-09-10",
      "text": "Bang cara menyambungkan saldo digital nya gimnana",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "dbdb2c86d198991b",
      "eventId": "auto-accd0136e607f53d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgweOJ9BcqBH40dsJPp4AaABAg",
      "date": "2026-09-10",
      "text": "Bismillah bosskuhhh",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "5201ae0323dfdfa2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ce55a2d6dca0cf27",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxvKFuub7i3fqHf8J54AaABAg",
      "date": "2026-09-10",
      "text": "Bismillah kakak",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "c3950fe33627bbe1",
      "eventId": "auto-0c24bb1e61829081",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGjClYry5hXjtJY9N4AaABAg",
      "date": "2026-09-10",
      "text": "Buat kbutuhan untuk kuliah \nSemoga beruntung",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "86585bf172860352",
      "eventId": "auto-a812ea6cf9341cb3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "ZI6_U1yhKSI",
      "date": "2026-09-10",
      "text": "Gara gara pinjol #shorts #drama",
      "url": "https://www.youtube.com/watch?v=ZI6_U1yhKSI",
      "engagement": 16519,
      "id": "619272f27f081636",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a3c0b154fe5e2932",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxECG_nf9pURFeurCh4AaABAg",
      "date": "2026-09-10",
      "text": "Hadir bang buat beli beras susu anak dan kebutuhan lain",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "8e8bb58a08c1012f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5c7b21b41337427f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgylUk606se-cWVzS_p4AaABAg",
      "date": "2026-09-10",
      "text": "Makasih bos",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "e10ab0460c5ef6fa",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dad0ee4cde7b8878",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyivQoYgBnivBepoaJ4AaABAg",
      "date": "2026-09-10",
      "text": "Makasih infonya bang. Semoga bisa membantu saya 😊",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "95beaca28a490120",
      "eventId": "auto-1245438ada88e534",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy_0W4Wjres_XS3TMt4AaABAg",
      "date": "2026-09-10",
      "text": "Salfok sama rambutnya kak, beda sama biasanya",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 2,
      "id": "af722177ee83918a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4840ff9361985cfb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzUns-Ko4uF5FtZclR4AaABAg",
      "date": "2026-09-10",
      "text": "Sangat membantu sekali kak semangat trus ngonten nya💪💪",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "e0136d563d59e038",
      "eventId": "auto-af51774ce520cbf5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9JIoe_24FQmfVQ8R4AaABAg",
      "date": "2026-09-10",
      "text": "Saya di dana goal tidak ada buat pinjaman",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "7049ef3f451cb920",
      "eventId": "auto-19a3de4576b8168c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzKM2971sc9D_MNxR54AaABAg",
      "date": "2026-09-10",
      "text": "Semangat bang",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "2eb07bd97a19ade9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-422621f870049d9b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzMve5kUmv2PUs71ep4AaABAg",
      "date": "2026-09-10",
      "text": "Semoga Rezeki Ngalir",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "f40f916b7a443e03",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aa4120cfd0fc64ee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx0jp8PVrV9ROJXQpl4AaABAg",
      "date": "2026-09-10",
      "text": "Semua aplikasi itu sudah saya coba bang, tapi smuanya di tolak 🥺",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 6,
      "id": "9009d9eea31b900b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a58ec8a3289206f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxakOdIYdKQ54DMnVZ4AaABAg",
      "date": "2026-09-10",
      "text": "Smoga dapat",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "557faf15af569b16",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ae04350975655d9d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzd2E5p6WxKrw57fK14AaABAg",
      "date": "2026-09-10",
      "text": "Subhanallah sangat membantu sekali",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "1158c85b17f0a240",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-42ef387644169ee9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugykyd6WWoPx8_0kGPJ4AaABAg",
      "date": "2026-09-10",
      "text": "Sukses bang",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "a49f27aa4eda35a2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b9684faa92e4bda5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwlW-y6UShMYSizEip4AaABAg",
      "date": "2026-09-10",
      "text": "Terimakasih bang",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "8e7011235fe3f3b5",
      "eventId": "auto-1ad3f1bcef2c6638",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy11BMSz1oB-JmANjl4AaABAg",
      "date": "2026-09-10",
      "text": "aku mau kak buat kebutuhan 🙏",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "2e3e75472df82abd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-040514045b757693",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwOScdBo7hsuq25iAp4AaABAg",
      "date": "2026-09-10",
      "text": "buat nyelot..pasti dong saya donlot pinjol...cari lagi ah",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "855ca19e1b2b1b6c",
      "eventId": "auto-c4ce822201aa25ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxoqFkOQdIcKj9_jdd4AaABAg",
      "date": "2026-09-10",
      "text": "susah bang kredit skor masih rendah ..",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 1,
      "id": "f32c28a6ae39fd12",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-afbeb1f8b8e9f413",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxy0tB9Ab2eHgxjgzZ4AaABAg",
      "date": "2026-09-10",
      "text": "tolong bantuan nya bang buat makan🙏😭",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 10,
      "id": "858b36d17e7091b1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-086e12447d0c0012",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwNoawkVaRDoOoFfnF4AaABAg",
      "date": "2026-09-11",
      "text": "ALHAMDULILLAH CAER BANG YG INGIN MELEPASKAN JERATAN HUTANG & DATABUSUK GASNMRDIPP AKUPANDU🎉",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 8,
      "id": "55a7c9aee8d43422",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-59a1ac4d66516544",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzXCqL6Ce-LVDZyGq94AaABAg",
      "date": "2026-09-11",
      "text": "Absen min, saya butuh untuk membetulkan asbes rumah saya yang jebol karna tikus😊",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "8929fa394ef5809b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6dafdf0ceac8c314",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzw7gusxK5kEfbB9VJ4AaABAg",
      "date": "2026-09-11",
      "text": "Aku sering di tolak pinjam aja\nMungkin aku kurang keren kali ya 😅",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 0,
      "id": "35b3e066f9e63a3b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0a5420ee3f47b867",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDx4T4QAqAGhUSlmd4AaABAg",
      "date": "2026-09-11",
      "text": "Alhamdulillah MBK....hutang2ku sudah lunas BLN ini.Allah maha besar ❤ trimakasih ilmunya 🥰",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 6,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "80108510ced6941e",
      "eventId": "auto-a85556e7d7b2081d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCQFgXqr_6rDmqvit4AaABAg",
      "date": "2026-09-11",
      "text": "Assalamualaikum ka mell\nSaya juga sama punya hutang 150juta\nLG coba jalur langit \nHampir 6bln ini LG coba rutinin sholat taubat \nBenerin sholat awal waktu\nTahajud \nDhuha\nSetiap selesai sholat\nSholat ibarahim 11\nSholawat Fatih 11\nSholawat Jibril 10rb\nSholawat munjiat sehari 3000\nWaqiah abis subuh dan ashar\nWalaupun blm ada tanda-tanda keajaiban tp slalu berprasangka baik \nMungkin krna dosa saya di masa lalu yg banyak\nJD Allah LG menggugurkan dosa2nya \nNanti saya sudah niat \nMau kasih testimoni klw sudah dpt keajaiban ya KA Mel\nMinta doanya biar slalu Istiqomah\nAmin 🙏",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 22,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 64.0
      },
      "id": "f5a9a07390407328",
      "eventId": "auto-ca2c0ec706921bf7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyd4ITVOoBZlXs-N4d4AaABAg",
      "date": "2026-09-11",
      "text": "Bang kalo pinjam didana, apakah bisa menagih dirumah",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "8a8baa61b8d2751b",
      "eventId": "auto-6034d053d4eccb85",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "uoXwQFdjMBg",
      "date": "2026-09-11",
      "text": "Desy Bongkar Dana Asing Rp17,28 T di Pinjol, Pemerintah Diminta Segera Bertindak #shorts #viralvideo",
      "url": "https://www.youtube.com/watch?v=uoXwQFdjMBg",
      "engagement": 36209,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "ecf0dc9fa9da69e1",
      "eventId": "auto-18095f29f95b2fd9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyMPy4Zgk2DG6OU4zd4AaABAg",
      "date": "2026-09-11",
      "text": "Itu kayak nya cara untuk membayar otomatis ketika apk yang di kaitkan meminta pembayaran,,",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "f559851341c25929",
      "eventId": "auto-d8285fcc02184ca6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz68Dlx1auwY443vOV4AaABAg",
      "date": "2026-09-11",
      "text": "Jelek videonya mendingan kayak saya punya berotot kayak bumi ini bos senggol dong 21 cuma aku saja yang berotot nya",
      "url": "https://www.youtube.com/watch?v=ZI6_U1yhKSI",
      "engagement": 1,
      "id": "877ede3f3d7a54c7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d0b53ff66c649d1e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz0R1ojr86PuYIxcNh4AaABAg",
      "date": "2026-09-11",
      "text": "Kanapa saya slalu di tolak ya",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 1,
      "id": "bd2fb2a4bf8eeac1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe025e7fa02db6ac",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "WrRY3BHRMYE",
      "date": "2026-09-11",
      "text": "Kisah Nyata Mbak Devi Solo: Utang Pinjol 250 Juta &amp; Terancam Hancur, Selamat Lewat Sholawat Adrikni!",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 40296,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 73.1
      },
      "id": "f719e97fca8d5784",
      "eventId": "auto-59f67e844402b6cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzeu9w9VeU3GAcf5kt4AaABAg",
      "date": "2026-09-11",
      "text": "Liat d ulasan nya aja hancur😂",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 1,
      "id": "765588a9c449b037",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1a0d05bbdeda60be",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNO7HvQJqQu74Xt794AaABAg",
      "date": "2026-09-11",
      "text": "Sehat selalu bg semoga dapat",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "7ee50bac170b54dd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1b3b4d103fc6b2e8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxvliyYvc4JOrvuBOJ4AaABAg",
      "date": "2026-09-11",
      "text": "Tapi kalau kita mau",
      "url": "https://www.youtube.com/watch?v=ZI6_U1yhKSI",
      "engagement": 1,
      "id": "d128353a03932b40",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7743d76d676bfe90",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgycaAxWkZSteFhEl_h4AaABAg",
      "date": "2026-09-11",
      "text": "Udh semua mas TPI gx di ACC jga",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 3,
      "id": "fc4ab0a8be21eee8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a664a1fa505ec925",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNbdxHskHYLanqdCt4AaABAg",
      "date": "2026-09-11",
      "text": "Untuk ibuk sedang sakit bang..",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "4cdc26775b721f0e",
      "eventId": "auto-776e3339a0e8f113",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzMJkttxaGUbeU2DEh4AaABAg",
      "date": "2026-09-11",
      "text": "bismillah🤲",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "d447b3f314d14ae1",
      "eventId": "auto-a1dd395c19f3a1f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjaARohZ26UifQWbN4AaABAg",
      "date": "2026-09-11",
      "text": "caranya gmna nhi kk..lgi butuh dana nhi..",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "85d2f9c28c6c490b",
      "eventId": "auto-6ed0d19c6424d5b7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXV6qSW6xd_fdWCwd4AaABAg",
      "date": "2026-09-12",
      "text": "\"Pelajaran yang bisa kita ambil dari video ini adalah janganlah sesekali mencoba judi,walaupun sekali doang,karena judi itu bukan membuat kita kaya malahan membuat uang kita sedikit demi sedikit habis,dan juga janganlah mencoba atau iseng untuk minjam uang di Pinjaman Online jika dirilu belum siap untuk membayarnya.\"",
      "url": "https://www.youtube.com/watch?v=oQmDcW3sHD4",
      "engagement": 135,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "ded9b886b0ba969b",
      "eventId": "auto-f78f6990cf19548b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "oDmYctM7NGQ",
      "date": "2026-09-12",
      "text": "AZAB PENJUAL TAHU TEK CULAS NEKAD JUALAN PAKAI HASIL PINJOL DEMI GENGSI || ANIMASI AZAB",
      "url": "https://www.youtube.com/watch?v=oDmYctM7NGQ",
      "engagement": 32384,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "aeb4edbad7e52321",
      "eventId": "auto-6df105e9a1c99b4e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzZP6qY1NgXDZRCf7B4AaABAg",
      "date": "2026-09-12",
      "text": "Assalamualaikum mba mel saya ,blm byr hutang bank udah telat 3 hari mohon doanya semoga Allah mudahkan untuk membayarnya",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 8,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.0
      },
      "id": "dd8ee5711e097743",
      "eventId": "auto-584f2102d9efef8a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyY8W6u9C4vxVCPk014AaABAg",
      "date": "2026-09-12",
      "text": "Bikin konten harus bertanggungjawab  cuman bisa y bohongin penonton",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 9,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "d0610c5fd1d3bf71",
      "eventId": "auto-2d50320ac3f7fb1c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyxhHueei0QBQD_2sJ4AaABAg",
      "date": "2026-09-12",
      "text": "Bismilah bang",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "b239b8c2e01087ef",
      "eventId": "auto-8541c0ab0dcd0473",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwuI7n0QWiTHIyGl_N4AaABAg",
      "date": "2026-09-12",
      "text": "Bismillah \nBuat biaya adik sekolah",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "067d6f87e0fa481f",
      "eventId": "auto-ce8da268e8f9677a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz-OHM_WDnjyghBu1l4AaABAg",
      "date": "2026-09-12",
      "text": "Bissmilah bang buat kebutuhan anak ❤",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "d8fba54b61a1f19c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1324d0b8faa6cf6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "lobOGNqM4HA",
      "date": "2026-09-12",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 31357,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "3c9efeeceb123281",
      "eventId": "auto-c56326dcc516effe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzO6V3t42wrLmS3rMJ4AaABAg",
      "date": "2026-09-12",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, komen saja mau dana kaget buat kebutuhan harian apa sekarang 👇 https://link.dana.id/danakaget?c=shsmny79s&r=c7Q38x&orderId=20260915101214758515010300166276298326685",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 78,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "838dfd3b1fb489cb",
      "eventId": "auto-1fca027101ec813a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwMAdlOjMF2p4Qs46d4AaABAg",
      "date": "2026-09-12",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\n\nALTERNATIF PINJOL :\n\n1⃣ Daftar doang, Dapat Rp100.000\nhttps://s.id/DanaGratis1\n2⃣ Daftar doang, Dapat Rp180.000\nhttps://s.id/DanaGratis2\n3⃣ Daftar doang, Dapat Rp340.000\n https://s.id/DanaGratis3\n4⃣ Daftar doang, dapat Rp160.000\nhttps://s.id/DanaGratis4",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 88,
      "id": "8cea39bce6f15f28",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a2c6befd9f888363",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyl1qOPMsGdkkiOzOF4AaABAg",
      "date": "2026-09-12",
      "text": "Ok bang",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "a0c73a29709de2e8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dcb1f8f5445f73dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw2x1BhdS_-hXmqJNN4AaABAg",
      "date": "2026-09-12",
      "text": "Pingin saldo dana gratisnya bang buat kebutuhan sehari-hari \nSemoga dapet dan untuk Abang semoga sukses selalu",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "1d9343d226da42b8",
      "eventId": "auto-1a12383c1d7dbc68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8CUoZRqvEP2bAzJB4AaABAg",
      "date": "2026-09-12",
      "text": "Pngin dana kget bang. Buat beli susu anak",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "4f82a04756f99664",
      "eventId": "auto-596592a956dca27b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxr39oJrMfVCnMm6yZ4AaABAg",
      "date": "2026-09-12",
      "text": "Saya barusan tak coba GK keluar limit nya bang",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "34cf298a6d96fecc",
      "eventId": "auto-d153a0285b77d175",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwyA6oP81TM-zxO8fx4AaABAg",
      "date": "2026-09-12",
      "text": "Seandainya saja tau tau udah ada dana masuk aku belikan keinginan ibukku terutama",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "f22147dea2beaae7",
      "eventId": "auto-1d7f443c29b56dd2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzVcF9A8QpLBiyGawV4AaABAg",
      "date": "2026-09-12",
      "text": "Terimakasih bang infonya..semoga bermanfaat",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "7b916e420041ed1d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e4bd233d0e025582",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx5APYec4pzFsYwFsN4AaABAg",
      "date": "2026-09-13",
      "text": "BISMILLAH 🤲",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "ec8b1cccc9ec64ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1dd395c19f3a1f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxAbrLM16rZSOwzYD54AaABAg",
      "date": "2026-09-13",
      "text": "Baru lihat mudah mudah bisa membantu",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "bb1ecab448d5c79f",
      "eventId": "auto-e558ae9a5d92773e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwvCfCrsd4qKu7bf5B4AaABAg",
      "date": "2026-09-13",
      "text": "Bismilah Buat Bantu Orang tua😊",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "2944bf58731774dc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-654093f5a3ba6314",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpH4nzbOOoxoLzen94AaABAg",
      "date": "2026-09-13",
      "text": "Bismilah mudah2n aja ada rejekinya.Ammin",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "eab61c88613be87f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1cbbbfcb4d7bd509",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyo290dN9omLCgHDsp4AaABAg",
      "date": "2026-09-13",
      "text": "Bismillah buat bantu adek saya yang mau lahiran",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "6ed03a2b9224348c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2f8ee74d296be409",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwmw_Yuf_ucl0iXWRR4AaABAg",
      "date": "2026-09-13",
      "text": "Bismillah kak,semoga dapat yaa dana kagetnya",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "724120bacff5f221",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-189d76411e3df7c2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCkzpUo62hmX1Bqbl4AaABAg",
      "date": "2026-09-13",
      "text": "Bismillah semoga beruntung",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "38dd8912f47fde20",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ca1177e5e3cfca63",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgylRuxntLQOVI3p_914AaABAg",
      "date": "2026-09-13",
      "text": "Bismillah semoga beruntung bang😇",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "49e4b55e4a6b4953",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-76c55a7c6730e55b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCEp6t2jWa7pyB9bV4AaABAg",
      "date": "2026-09-13",
      "text": "Bismillah semoga dapat buat bekal sebelum gajian",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "9d9b42b34ec17b4c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b86987b5eb35ea87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgziATeNOZsdkf8pQ7t4AaABAg",
      "date": "2026-09-13",
      "text": "Bismillah semoga dapet yallah lagi butuh banget buat bayar hutang",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "6688f6c95fb832f4",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ed971faa863df01c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxekgD9MuIkhVF3iEF4AaABAg",
      "date": "2026-09-13",
      "text": "Bismillah smg dapat,buat nebus obat istri",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "3e9a8d344e2b3c74",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d8fc9f0c97cae65",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw22zVH12MXIum_zbB4AaABAg",
      "date": "2026-09-13",
      "text": "Bismillah..\n\nSemoga pagi ini dapat rejeki buat bekel anak sekolah 😢",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "9fc30a57faae42bc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19209190bac27bf4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzY7Kz_CPAjTZgqipp4AaABAg",
      "date": "2026-09-13",
      "text": "Buat kebutuhan dapur",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "7efeb32a67978676",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0bb3ffe6e16ed282",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgykYv_Rca_oYB-Ocwx4AaABAg",
      "date": "2026-09-13",
      "text": "Emang benar bg boleh dong kalau gitu untuk kebutuhan",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "614751427e9a7345",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d3745a07a5989861",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx_rLcgUfN4MiQhbuF4AaABAg",
      "date": "2026-09-13",
      "text": "Hadir abangku....aku butuh buat modal usaha ...semoga rezeki nya lancar ya bang",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "7557b5d3dfc345f5",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-80d17fa4e7db9ace",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxitHiko7j3lcAwnm94AaABAg",
      "date": "2026-09-13",
      "text": "Hadir... aku butuh untuk kebutuhan bulanan 🙏🏻",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "3538629cd2da5444",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-23aef4fcbb727020",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwIC5hz1Xy58Ar68Dd4AaABAg",
      "date": "2026-09-13",
      "text": "Keren Hans gw udh subrek tapi jangan judi online di dunia nyata ya",
      "url": "https://www.youtube.com/watch?v=oQmDcW3sHD4",
      "engagement": 5,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "04b8d4d59b0944ac",
      "eventId": "auto-987f4c58a65bd980",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxWMxr6aas4xcgh_ex4AaABAg",
      "date": "2026-09-13",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\n\nALTERNATIF PINJOL :\n\n1⃣ Daftar doang, Dapat Rp100.000\nhttps://s.id/DanaGratis1\n2⃣ Daftar doang, Dapat Rp180.000\nhttps://s.id/DanaGratis2\n3⃣ Daftar doang, Dapat Rp340.000\n https://s.id/DanaGratis3\n4⃣ Daftar doang, dapat Rp160.000\nhttps://s.id/DanaGratis4",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 87,
      "id": "4e5e8bae5d7ff9b1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a2c6befd9f888363",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwaucX7yfA7pzcasMp4AaABAg",
      "date": "2026-09-13",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\n\nALTERNATIF PINJOL :\n\n1⃣ Daftar doang, Dapat Rp100.000\nhttps://s.id/DanaGratis1\n2⃣ Daftar doang, Dapat Rp180.000\nhttps://s.id/DanaGratis2\n3⃣ Daftar doang, Dapat Rp340.000\n https://s.id/DanaGratis3\n4⃣ Daftar doang, dapat Rp160.000\nhttps://s.id/DanaGratis4",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 48,
      "id": "ed0bd56ce5aea709",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a2c6befd9f888363",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyjqbFpvNLHAYHDl7h4AaABAg",
      "date": "2026-09-13",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\n\nALTERNATIF PINJOL :\n\n1⃣ Daftar doang, Dapat Rp100.000\nhttps://s.id/DanaGratis1\n2⃣ Daftar doang, Dapat Rp180.000\nhttps://s.id/DanaGratis2\n3⃣ Daftar doang, Dapat Rp340.000\n https://s.id/DanaGratis3\n4⃣ Daftar doang, dapat Rp160.000\nhttps://s.id/DanaGratis4",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 59,
      "id": "74d8703034702eb3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a2c6befd9f888363",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy8LP6PYhpbG1CwfMl4AaABAg",
      "date": "2026-09-13",
      "text": "Mudahan dapat",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "ef81ccf77576f11d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a6c528d96eb251a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwH8P3bCON_3rJbsJN4AaABAg",
      "date": "2026-09-13",
      "text": "Pikir fitur baru bener, gak taunya dana isntan😂😂",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "6cf0a0c4122a92e6",
      "eventId": "auto-07662d5660d3b6e5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "govKhpfdXJM",
      "date": "2026-09-13",
      "text": "Pinjam DANA TANPA Dana Paylater Dana Cicil, Cara Pinjam Uang di Dana, Pinjol Mudah Cair 2026 ke DANA",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 15240,
      "id": "d3023ad9b92095ea",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1d90bbe129941041",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzldRuFOPuPt4LT-wd4AaABAg",
      "date": "2026-09-13",
      "text": "RIBA 😅😅😅😅",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 0,
      "id": "7a9c3af5e331c49e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-60d35c3bec11b883",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwWABEbG6NUnazBxap4AaABAg",
      "date": "2026-09-13",
      "text": "Semoga beruntung",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "7b29bd4d2c83fb1e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-45b89bb502762339",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJQBu-53QceYjMSsB4AaABAg",
      "date": "2026-09-13",
      "text": "Semoga dapat bismillah buat modal bensin kerja selama seminggu kedepan aamiin",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "11f71b125a82fd67",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dbd21f29eafb9637",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzXvfoj5ngPiUBAGN14AaABAg",
      "date": "2026-09-13",
      "text": "Semoga dapat ka \nBuat bnerin hp",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "5edcf4930614393f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-597eb8f6a0def1fa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxxxS--FixD8woRWqJ4AaABAg",
      "date": "2026-09-13",
      "text": "Semoga dapat untuk lunasi utang",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 57.0
      },
      "id": "ca337303c7403636",
      "eventId": "auto-3532bd2501093118",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwRgqYnnammd9qXINt4AaABAg",
      "date": "2026-09-13",
      "text": "Semoga dapet bang buat kebutuhan sehari hari sukses terus konten\" nya bang amin",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "1279efec9247c117",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-add1ec730f1072b2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw3PRqUKf31_WfvOIx4AaABAg",
      "date": "2026-09-13",
      "text": "Semoga menang ❤",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "74e883e6719566cc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b0a06c60df331d7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzBLo9jfGhv9tKjZQJ4AaABAg",
      "date": "2026-09-13",
      "text": "Sukses slalu bang,butuh buat biaya skolah",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "642dd4574c5a2c94",
      "eventId": "auto-1ecf70d958ea8f7c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "JC-P1J_X-kI",
      "date": "2026-09-13",
      "text": "Tanpa BI CHECKING?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 27323,
      "id": "e4c016c0fa0762fa",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5bb290eedc9250ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzhc2QI_B73W27Zoch4AaABAg",
      "date": "2026-09-13",
      "text": "Yogya hadit...buat kebutuhan beli sembako mas...makasih 🥺",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "5ebe43a88b29d796",
      "eventId": "auto-118529a3c4a58b9d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw26V7HomXYynqkFcN4AaABAg",
      "date": "2026-09-13",
      "text": "bismillah semoga dapet buat bayar kebutuhan sekolah",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "bd46fbbe3ec80385",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-03e1beddaf45cc44",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJ9a3K9ppfCpsYwep4AaABAg",
      "date": "2026-09-13",
      "text": "bismillah semoga dapet dana kaget. \nbuat bayar hutang kak😔",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "ad01d4cd33eb4cee",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-475803ab45bba8af",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "fL0hj-D3kIM",
      "date": "2026-09-14",
      "text": "3 Aplikasi Pinjaman DANA Online Langsung Cair 2026 - PINJOL Data Mudah Cair TANPA BI Checking ✅",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 15390,
      "id": "e8a435b0f85fb6bd",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3375a7fa42ffb17d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "1-SKcorqvA8",
      "date": "2026-09-14",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 37057,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "4267f8093af848a0",
      "eventId": "auto-7770eb8e8f7c4eef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwsxxNhIiT5nuUku_14AaABAg",
      "date": "2026-09-14",
      "text": "Assalamu'alaikum semngat bang bikin vidio nya terbantu banget ada tutorial abang hehe bissmillah dapet rejeki 😂",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "3428ee65b377b6ec",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f89c180f6c50b95f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxKv_QpX5PaAOL7vox4AaABAg",
      "date": "2026-09-14",
      "text": "BISMILLAH SEMOGA DAPAT KARENA UANGNYA MAU DI KASIH KE ORANG TUA",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "08f0f0640230b86f",
      "eventId": "auto-80b8ac868934ac80",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxl0wDC7yzpNk9bbCB4AaABAg",
      "date": "2026-09-14",
      "text": "Bismillah",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 1,
      "id": "87b0ea37c60af9ad",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1dd395c19f3a1f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwPWMsQfoRJLEMoBOJ4AaABAg",
      "date": "2026-09-14",
      "text": "Bismillah \nbutuh buat kebutuhan sehari-hari kak",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "4f3c3c49e0d4b5be",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-34e5ff224ff72e78",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzeJKnGi6Q5La3E57Z4AaABAg",
      "date": "2026-09-14",
      "text": "Bismillah Semoga dapat untuk bantu renop rumah orang tua",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "834138853221cbd7",
      "eventId": "auto-f00f879179c2889d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzZqoXMkKrPVI1gxJ14AaABAg",
      "date": "2026-09-14",
      "text": "Bismillah buat lahiran",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "f360db5b2833b435",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b9fdd82c8a639947",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzj0EsPkKtYaTIEGud4AaABAg",
      "date": "2026-09-14",
      "text": "Bismillah dapat amin😢😢😊😊 sudah paket lengkap",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "edd102bc01b02c89",
      "eventId": "auto-886fa3c95d43c92e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxkyqz2664Jdw6eIdp4AaABAg",
      "date": "2026-09-14",
      "text": "Bismillah semoga dapat dana kaget nya, soalnya lagi butuh banget buat makan,nasib anak rantau 😢",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "f6d1d491eeb4a5fb",
      "eventId": "auto-86fd1a4e8e784eb5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyrDji71IAHSooehJ54AaABAg",
      "date": "2026-09-14",
      "text": "Bismillah semoga rezeki ku dihari ulang tahunku",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "04819c8df199558a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9531b1c18d5b1704",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzHczK3ngBFczaq1-t4AaABAg",
      "date": "2026-09-14",
      "text": "Bismillahirrahmanirrahim buat renofasi rumah, yg ada di Aceh ini belum kelarr..😭",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "e6547109d74dd9b2",
      "eventId": "auto-5ae48e7b2923cb42",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwmm-twq5dVnViUgdF4AaABAg",
      "date": "2026-09-14",
      "text": "Buat isi bensin kak ,lagi kosong banget.mqu berangkat kerja",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "99238625bf101b07",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c1d7527ed2d3798d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzx5y0xeTA8EA7Sl4V4AaABAg",
      "date": "2026-09-14",
      "text": "Ga bisa",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "206d4956542607a6",
      "eventId": "auto-dda28365cdd12ec8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwugQh3r1ExikVo3l94AaABAg",
      "date": "2026-09-14",
      "text": "Hoak masak potong vidio yg ad pinjaman nya",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "b1e91359e3a8d8c8",
      "eventId": "auto-c63b0061def90109",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_mbA7YNrOllPcooh4AaABAg",
      "date": "2026-09-14",
      "text": "Informasinya jls BG mntp",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "510989820413948d",
      "eventId": "auto-08912a24813bddf9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDBmkGWnxr9mSIpWh4AaABAg",
      "date": "2026-09-14",
      "text": "Kedua buat bayar utang",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 5,
      "id": "014cf1c4aa49b96d",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a4a10dd43010c50f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZzPieUs10HFtFqol4AaABAg",
      "date": "2026-09-14",
      "text": "Mudah mudahan saya dapat \nUntuk ongkos pulang kampung",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "7f2b36b6c742492e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cd7b9a1c76daa28a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxWwZ-sMIxSB_RXiBx4AaABAg",
      "date": "2026-09-14",
      "text": "Mudah\"an cair",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 8,
      "id": "1d6ff791def37854",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6a0647c388570772",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyqbT-Ha2y1IYxgBqN4AaABAg",
      "date": "2026-09-14",
      "text": "Panjang umur sehat selalu lancar rejeki boskuuuuh",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 43.0
      },
      "id": "e3888b7de01dcd8a",
      "eventId": "auto-32b67c82eaa2a20c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "EuWA-PVk5lA",
      "date": "2026-09-14",
      "text": "Penambang Ini Kabur Seperti Dikejar Pinjol! 😂",
      "url": "https://www.youtube.com/watch?v=EuWA-PVk5lA",
      "engagement": 41656,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "f9bede983e9b753a",
      "eventId": "auto-aba47406419fbeef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxu5Q_aSjycq84zmEN4AaABAg",
      "date": "2026-09-14",
      "text": "Pertama, daget buat jajan bg",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 3,
      "id": "ca5d6ebe98330d28",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1e5e7cabef0a09bf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzib1aKGPuAU0pLB6B4AaABAg",
      "date": "2026-09-14",
      "text": "Saya baru aja ketipu bang semoga dapat gantinya",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "0f25003b2ebd272f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-57b60da3bc08a172",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy8-HO87wvuG6eRn5h4AaABAg",
      "date": "2026-09-14",
      "text": "Semoga ada rejekinya soalnya lagi butuh uang",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "9e193c410991e1ad",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1cf70421fe960f71",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyBAGxb4yCj1LB3GxN4AaABAg",
      "date": "2026-09-14",
      "text": "Semoga dapat dana kaget lagi butuh banget untuk kebutuhan",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "b716bd99dc00cd5f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19edf1c06ac91bcf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzI9S0IL3yohVNGhF94AaABAg",
      "date": "2026-09-14",
      "text": "Semoga dapat kak untuk kebutuhan kesehatan",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "24f02465650ea989",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-41ff86d3efd78532",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwMo0uU58wK_xZ8pnV4AaABAg",
      "date": "2026-09-14",
      "text": "Semoga rejeki bang semangat... Mau buat bayar hutang",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "9ba66c53c4382677",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-115c53787643c45b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyVf-yKtRyDMisIyW14AaABAg",
      "date": "2026-09-14",
      "text": "Sukses selalu bang 👍",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "620e2f10fd7f8a2f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-01de057ae8346dc2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyWXaBR3QbqA4iGAe94AaABAg",
      "date": "2026-09-14",
      "text": "bismillah semoga dapat,biat anak sekolah",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "c2bc3d481720250c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-26dd0560458cd7ab",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXX2eNnV3f3fZ-YiN4AaABAg",
      "date": "2026-09-14",
      "text": "ga pernah di ACC broo, tapi gapapa lah terimakasih atas edukasinya",
      "url": "https://www.youtube.com/watch?v=NGZstKP2Yug",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "736589a4a9d95e1f",
      "eventId": "auto-9bf8311b4cd0f69e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwhmn-YnqfzqOnHmWt4AaABAg",
      "date": "2026-09-14",
      "text": "mantap",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "722bce7cae43eec5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-03c5b5bdae5bff03",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLuSoDKkWZSA6xN4Z4AaABAg",
      "date": "2026-09-14",
      "text": "semoga ada rejekinya amin🙏🙏",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "15f65549c02e75e0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-876953a6fc748e50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCXUnXHSt666RDza94AaABAg",
      "date": "2026-09-15",
      "text": "Ada juga kagak",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "db99fb328b7a5a0d",
      "eventId": "auto-840de0e116e7c648",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxzebPTHKRa2j1JtfF4AaABAg",
      "date": "2026-09-15",
      "text": "Alah, bilang aja kek pinjaman onlen",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "8d0bfb132f9d1c94",
      "eventId": "auto-2e99068c6ec75c20",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytViUZXJ1L8lnQwOh4AaABAg",
      "date": "2026-09-15",
      "text": "Bagaimana caranya bang,biar muncul  pencarian kita",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "396b15a9617ce030",
      "eventId": "auto-0d5260c344b2bed7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz1jGJbLUnqaiXK_Ep4AaABAg",
      "date": "2026-09-15",
      "text": "Bisamillah semoga dapat",
      "url": "https://www.youtube.com/watch?v=JC-P1J_X-kI",
      "engagement": 0,
      "id": "a29c841c7ca817ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-95542a8c4b4b4ccd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx4GK_fTr3ol0x4zqd4AaABAg",
      "date": "2026-09-15",
      "text": "Bismilah smoga bisa buat nambah biaya proses luar",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "bf97e0564b28f240",
      "eventId": "auto-0b7d1204596fc9f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzNe0sJAH4wtGBpbBl4AaABAg",
      "date": "2026-09-15",
      "text": "Bismilah untuk biaya persalinan",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "d92256a952c62c88",
      "eventId": "auto-4165046d645d9499",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDc6as-1l4Ul3Ml054AaABAg",
      "date": "2026-09-15",
      "text": "Bismillah mudahan ada rezeki untuk bayar cicilan kpr sama biaya sekolah anak",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "4c38482bd1283545",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67c15f62c795023b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "aBOSa3wu5E4",
      "date": "2026-09-15",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 41981,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "423c6b27efc5a1e1",
      "eventId": "auto-c56326dcc516effe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxbiNaaDtL6DWcVHyl4AaABAg",
      "date": "2026-09-15",
      "text": "Di akun terhubung saya , tidak   ada saldo digital, kenapa ya?",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "39e841ac5123cb20",
      "eventId": "auto-211779dfa8edaf77",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxl9zY7iDOp_7yleH54AaABAg",
      "date": "2026-09-15",
      "text": "Gak ada pinjaman extra dana bos",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "3c17ef5b5cfcff0a",
      "eventId": "auto-cedc3a51ec7f1006",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwD2qLyrA5eqYb-wH14AaABAg",
      "date": "2026-09-15",
      "text": "Gue kira bagus, ternyata Bacot, sok tau pula,",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "70fc467ef10030a7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-56796291c1210765",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwfXMb1voO5P5O5Wv94AaABAg",
      "date": "2026-09-15",
      "text": "Info yang bagus kak!",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 2,
      "id": "d30220514ae92013",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b4d18693a179c6f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxXiN1eUm76rV8N9EN4AaABAg",
      "date": "2026-09-15",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, mau daget buat kebutuhan apa hari ini komen saja disini 👇 https://link.dana.id/danakaget?c=s6ce7zp5n&r=c7Q38x&orderId=20260918101214997515010300166276298777125",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 139,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "e16a45c7a7a0f6d3",
      "eventId": "auto-d88a9fb1a80e402f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz3aoEtTb6yFBNV4GR4AaABAg",
      "date": "2026-09-15",
      "text": "Mudah mudahan bisa bermanfaat",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "642082e7afb56b4f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bd7e65a02f7fcead",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw3LfabjW8zeibcg0J4AaABAg",
      "date": "2026-09-15",
      "text": "Punya aku ga muncul fitur dana past pinjam nya bang",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "1f71ad07248bff7d",
      "eventId": "auto-234f04483d1f1c5f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDbF7cEr2sBtjh6-t4AaABAg",
      "date": "2026-09-15",
      "text": "Selalu nyimak tp kenyataan nya gak pernah bisa....",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "6d7d5277e395ef10",
      "eventId": "auto-0ecc30f9a92ec4cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw3OYTjUdp5_-VkEZN4AaABAg",
      "date": "2026-09-15",
      "text": "Susah woy nyambung in dana digitalnya",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "1c6fa2631938302b",
      "eventId": "auto-48146d7c641b0414",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyQ3m0fL8Q67szWyeR4AaABAg",
      "date": "2026-09-15",
      "text": "Sya punya saldo digital TDK ada ni abang",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "1b1e47298374ea9e",
      "eventId": "auto-54ce88c47742aac2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwpe3bGEzgqJFEQ-8t4AaABAg",
      "date": "2026-09-15",
      "text": "Yg jdi pertayaan iti di luar ojk tnpa BI Checkin apakah di acc",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 0,
      "id": "c7d541c5b4888407",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67663c4083e0a44f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhsEVltx8aM7zlHmh4AaABAg",
      "date": "2026-09-15",
      "text": "bismillah buat bayar sekolah 🥺",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "1cc84d5acf191262",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-09b74445d5232a9c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZ_M6JMSMR3i7EK5Z4AaABAg",
      "date": "2026-09-15",
      "text": "bismillahirrahmanirrahim semoga dapat seikhlasnya aja bg buat benerin motor kurang 3 juta lagi",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "de56c945202af606",
      "eventId": "auto-b849e71764752cba",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzlvQRFCK23Kkaatix4AaABAg",
      "date": "2026-09-15",
      "text": "pas mau muncul dana pinjamanya malah di cut, seolah² fitur itu bener nyata lawak ini Chanel",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 44.4
      },
      "id": "1791d4532683d681",
      "eventId": "auto-a907becceca703b3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGIXsyL1B2w8khMJt4AaABAg",
      "date": "2026-09-15",
      "text": "pas ngeklik pinjaman extra dana gk muncul² bang, pdhl udh memenuhi syarat semua yg tutorin di awal",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 44.4
      },
      "id": "158083295a51b6fc",
      "eventId": "auto-3f351e42d3a61454",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "nTtb9lsIoS0",
      "date": "2026-09-16",
      "text": "Besok 17 September 2026! SEMUA YANG GALBAY PINJOL BERHENTI BAYAR-ATURAN MAKSIMAL 3 DISTOP..",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 16450,
      "id": "fc1154325dfd4d00",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b0066f99c055e9f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxtj2IQSFn1gHNsO794AaABAg",
      "date": "2026-09-16",
      "text": "Bismillah semoga dapat",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "77b98e42f3b6712e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-70c387fe4710fbdf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLgT4CCQoELOwdJmh4AaABAg",
      "date": "2026-09-16",
      "text": "Hidup galbay nasional ❤",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 11,
      "id": "faa542a4937015e7",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6800d6614344edb0",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzlSRwnErea966lYqZ4AaABAg",
      "date": "2026-09-16",
      "text": "Jangan ngarep ada menu nya",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "ec973c2d37d880d3",
      "eventId": "auto-f215b44272640ea3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz2702Yg0y1mk9zslx4AaABAg",
      "date": "2026-09-16",
      "text": "Mudah-mudahan cair",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "33e751c392175529",
      "eventId": "auto-301224c11a1c8858",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxMoGybW5U_w51Fqzl4AaABAg",
      "date": "2026-09-16",
      "text": "Nah benar itu om,OJK g ada gunanya ,malah aturannya menyengsarakan/mempersulit rakyat",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 6,
      "id": "8d447a9d910030ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8c4e7c36374c5a0d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx0IUwB_s1tchgn9jZ4AaABAg",
      "date": "2026-09-16",
      "text": "OJK = PINJOL = MAFIA!\n\nSemangat \"GALBAY\" selamanya...✊️",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 15,
      "id": "666cbe48475034c3",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-38b2185b5f5a158a",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9EPRn5y78VJYi_bJ4AaABAg",
      "date": "2026-09-16",
      "text": "Oke terimakasih infonya y",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "d6ba5e7e263bd63e",
      "eventId": "auto-08bd5fc2afc3ac21",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyysO-NQvdjfrMtLJ94AaABAg",
      "date": "2026-09-16",
      "text": "PINJOL DAN OJK ITU SAMA SAMA MAFIA...",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 4,
      "id": "34cf0fd86fccb42b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a3cf0d4a00c737e8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzENbChaD_eONuAQFB4AaABAg",
      "date": "2026-09-16",
      "text": "Persis yg abang bilang waktu ngopi2 di parkiran dulu",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 1,
      "id": "28cf07f5fc1d280f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-97dcb62e2bdfcd6c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyi_LpjZTnGX2z0itd4AaABAg",
      "date": "2026-09-16",
      "text": "Punyaku gak nongol  aktivasi dana fast pinjam ,dah di ketik",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "de89ccec3347dfa8",
      "eventId": "auto-a9bb744e3d5f7edb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjrwkEy9uslgc7aGh4AaABAg",
      "date": "2026-09-16",
      "text": "Selamat siang kak",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "65bfafbfc475f67b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bda510d85a40d6a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwrzS85L68xrTQt2dJ4AaABAg",
      "date": "2026-09-16",
      "text": "Y Allah semoga beruntung 😢",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "c160e3b99d625a42",
      "eventId": "auto-53d955576d5ba214",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxTkWpuHOZ6IR8pcHh4AaABAg",
      "date": "2026-09-16",
      "text": "bismillah Abang saya butuh hari ini.",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "123d57e8b87d3b6d",
      "eventId": "auto-ea31437a5a3170a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxsZ0YifCoj8pmD7cd4AaABAg",
      "date": "2026-09-16",
      "text": "yaudh gk usah di bayar aturan aja gk di patuhi bunga juga tinggi",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 3,
      "id": "b14121152be87024",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-38f755c8fb4e7442",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwdNEI1cmvoTA14bKJ4AaABAg",
      "date": "2026-09-17",
      "text": "Aku udah galbay 6 bulan jalan. nomor aiu buang dan aplikasi tak hapus. Udah gak gagas DC lapangan .",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 3,
      "id": "6208f132dac02b94",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1dc1c942f9193bb8",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxe10xcSVeJpV03cbN4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah aja dulu",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "04788de8b868d7a8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bd249c16a67a4709",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEuCyllKZtytFnlBB4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah buat bantu orang tua bayar hutang☺️",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "b6c3747d3324a1c9",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-05125499e9b5bfb7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugykg6W_I2Es3HHz-Jd4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah buat kebutuhan sehari-hari abg ku❤❤",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "ffddc2a2cd909662",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e753001adf0e01ed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzt886P7GJcJfe8A994AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah menang abg ku❤❤",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "86ab982b9c873486",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a81bc773ab77a235",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw3NWya9EV6ga2MEBF4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah rezekinya calon anak aaamiin yaallah",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "a602bc40f611f78a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ffd5487810721b45",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzRVialBqPma4ZBNSF4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah sehat slalu bg lancar rejekinnya dimudahkan urusannya aamiiiiiiiiiiiiiiiiiiiiinnnnnnnn",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "50d7005330ea682a",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e7e428b9e6d5f4ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyMH8L28gGKKM90_th4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah semoga dapat buat kebutuhan sehari hari",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "d9ecf722410ee383",
      "eventId": "auto-3f8d80ead3d86716",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyxD4A511ac63kxpLN4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah semoga dapet dana kagetnya,buat bayar kosan",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "1436709a10ccadf7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8089f33aa3f0dff4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyKQbDzWUnUmTPv3Gp4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah untuk kebutuhan anak anak pasca saya operasi",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "7dd23edf69413ef7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f4889c27711360d6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgykTYAxuTeZ_ZXmkIh4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah untuk kebutuhan sehari-hari",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "c0980fdb17732294",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1031a7003b24de3d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw5Qwmn0TELFeAg55Z4AaABAg",
      "date": "2026-09-17",
      "text": "Bismillah,semoga dapat buat pulkam 🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "9baa2dc144b05497",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c3070e95318f071",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZr9TczZ8BywGC-uV4AaABAg",
      "date": "2026-09-17",
      "text": "Bissmillah semoga dapat buat keperluan",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "590a0f1a31b9d8cc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-314df7ead20d3d12",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz1HXDXMd0qtC8R-7N4AaABAg",
      "date": "2026-09-17",
      "text": "Buat beli peralatan bayi bismillah rezeki nya",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "13c666f49e7fb53e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-976be20103c4c514",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "glpe1QcINk4",
      "date": "2026-09-17",
      "text": "CELAKA!! SERENTAK NASABAH PINJOL TERIMA INI!! LAKUKAN INI! JANGAN SALAH LANGKAH!!",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 15408,
      "id": "4899c851ad2143be",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-835af92f5154fbd8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "7332A9u9ynE",
      "date": "2026-09-17",
      "text": "Cara Pinjam Uang di DANA | Pinjol Mudah Cair 2026 ke DANA Tanpa BI Checking",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 15388,
      "id": "8e1126b2f25e6bb1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dfa6afc3789d87c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "vDYnfqfgPhc",
      "date": "2026-09-17",
      "text": "DATA BUSUK ACC?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 19577,
      "id": "699304a3eb37fd3a",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d43f3e5561f6f80",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwevE8cyv2f6_Yi8hV4AaABAg",
      "date": "2026-09-17",
      "text": "Galbay pinjol ke bansos ngaruh ya",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 0,
      "id": "cb72681b2caa8ef1",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e44cb1227720e2ff",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFU97GTXqgqF36f3N4AaABAg",
      "date": "2026-09-17",
      "text": "Hadir bang dari kalteng,smoga beruntung",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "c7177edaa6050399",
      "eventId": "auto-97f58c846bb6c259",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyReYu9V12dgf82A6F4AaABAg",
      "date": "2026-09-17",
      "text": "Hadir bang sya baru nonton n udh screp.. sya mau utk anak sekolah",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "2ec88add294a2f3d",
      "eventId": "auto-eff48eb4bc7622f2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "DyiKuRNYej8",
      "date": "2026-09-17",
      "text": "Ibu Hakim Pinjol",
      "url": "https://www.youtube.com/watch?v=DyiKuRNYej8",
      "engagement": 29017,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "5cdbb48299bd8676",
      "eventId": "auto-50b36316ac5972e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxKjrNJ2wrm7VMQnw54AaABAg",
      "date": "2026-09-17",
      "text": "Intinya galbay galbay galbay\nPinjol sarang mafia",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 3,
      "id": "565b23c6cd952d30",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-957569e1c632099b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxbGwM8tCeLIx94-dp4AaABAg",
      "date": "2026-09-17",
      "text": "Intinya jgn tanggapi pesan masuk. \nDc telpon maki2 . balik maki. \nEnak saja kita di maki malah diam  .\nSaya otak lagi sakit pas di tpon dc maki2 . upsss dc salah org . saya balik maki2 juga . pikir lu LAKI jdi saya takut 🤨🤨🤨",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 27,
      "id": "6eb4afb53e17fb44",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7ec587e805f5c215",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyi7C2xsalWyAd-u_54AaABAg",
      "date": "2026-09-17",
      "text": "Kanapa saya tidak muncul aktifasi dana fast pinjam",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "1c39093da06d4819",
      "eventId": "auto-4fbeb727da809fe6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLUdlqJRwAHxSh-LZ4AaABAg",
      "date": "2026-09-17",
      "text": "Komen pertama paduka",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 4,
      "id": "f3cd96b0c304db46",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-244f7ec7d61395ea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzT-vbI-HjauRS_m-x4AaABAg",
      "date": "2026-09-17",
      "text": "Konten sampah",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "0048108a0dba8ca5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a6b8fd69148f17f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDD5HZyeEi1vp2KhJ4AaABAg",
      "date": "2026-09-17",
      "text": "Konten sampah",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "7a18ea35f0a673c1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a6b8fd69148f17f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9PdC-EgZjL1W5jqd4AaABAg",
      "date": "2026-09-17",
      "text": "Koq punya sya gak tampil bang dana fast pinjam",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "ad398e1ebe662eae",
      "eventId": "auto-3e390962ce3ef089",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwygnEnszh7Q9akqD54AaABAg",
      "date": "2026-09-17",
      "text": "OJK Mafia pinjol. Memang berniat menghancurkan rakyat dam memperkaya para penguasa",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 1,
      "id": "004b1b91d0cfb544",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e5136f1591d5403b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "GhNyCoipBLU",
      "date": "2026-09-17",
      "text": "Pinjaman Online ❌ Sekarang Ada Hamil Online ✅ 😱🔥",
      "url": "https://www.youtube.com/watch?v=GhNyCoipBLU",
      "engagement": 135700,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 44.4
      },
      "id": "db361b22932cedd4",
      "eventId": "auto-473487cb8cc92df5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy_EfzyKflVnF9Z4_h4AaABAg",
      "date": "2026-09-17",
      "text": "Pinjaman shopee paling kocak gue gak ada pinjaman di mana pun 3x di tolak dan di suruh lunasin hutang kan aneh gak ada pinjaman dan belum pernah pinjol bisa bisanya suruh bayar😂😂",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "4db786c078b0b6ec",
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48d8069cd48d6ec7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxRc5py4PZJZdWp3jt4AaABAg",
      "date": "2026-09-17",
      "text": "Pinjol = Mafia!\n\nSemangat \"GALBAY\" selamanya...✊️",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 24,
      "id": "c1d2ee054097aa75",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-73081095513df181",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwyUjurHvUW6fy9k5R4AaABAg",
      "date": "2026-09-17",
      "text": "Pinjol jadi tambah beban hidup skrg ini pak, pinjam dikit bunga tinggi,waktu byr 7 hari,15 hari dan di wa jg tlp dgn kata2 kasar dan ancaman2.mudah2an di tangkep oknum2 yg dilandaskan ojk bikin resah warga.",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 1,
      "id": "b9d2f85550be526e",
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c88ba27252ca8bc8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgynG6iYAEazI32k3U14AaABAg",
      "date": "2026-09-17",
      "text": "Semoga menang ❤",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "2d4427ef3cef2b2b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b0a06c60df331d7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxh9ROtuvS6hzqtuER4AaABAg",
      "date": "2026-09-17",
      "text": "Smga dapat ksempatan, biar bsa tambahan biaya sekolah. Aminn",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 1,
      "id": "e3904d5c7c928b73",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-57f9908e3d86b1b4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwLYbEc3cdPoHV8A8Z4AaABAg",
      "date": "2026-09-17",
      "text": "Sukses selalu buat anda..",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "137927567f181ab2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-98d1f7e092f6ac78",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwlHSJrveoDoGHhKQZ4AaABAg",
      "date": "2026-09-17",
      "text": "Sya jg kmren ada yg tiba tiba kirim paket ..bilang pesen'nya lewat Facebook..yah suruh sya bwa balik lagi aja paket nya..GK baklan sya bayr 1 ribu pun..carm DC kirim paket  ky gitu kan udh salah..brarti udh sya anggp lunas😂",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 7,
      "id": "b60285fc58979da1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4fea899326ddb9e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzAI00xqEmO7FXSrtV4AaABAg",
      "date": "2026-09-17",
      "text": "Tu pak Prabowo dengerin kata pak ustad coba bapak gimana cara merobah agar orang2 mlarat bisa merasakan hidupnya adem pikiranya nggamerasakan kerja susah sembarang mahal dengerin pak ustad wo ? Jangan cuma senang di sanjung2 tapi kerja nol",
      "url": "https://www.youtube.com/watch?v=DyiKuRNYej8",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "a65863922020fd12",
      "eventId": "auto-cbbcacf0c272f130",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "O1UwLtTzTpc",
      "date": "2026-09-17",
      "text": "WADU! MAKTON MAU PINJOL 3 JUTA | #mamalela #mamalelaterbaru #mamalelaterbaru2026hariini",
      "url": "https://www.youtube.com/watch?v=O1UwLtTzTpc",
      "engagement": 13232,
      "id": "6da27d41df014e2a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dddfd661aa6616ef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZEWRRfb3ZaY8Fo8N4AaABAg",
      "date": "2026-09-17",
      "text": "amin semoga dapat dana kaget buat kebutuhan sehari hari",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "24cc902a06dc5e10",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d37e1fb89143a816",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyadwouL2gsUcDfJJ4AaABAg",
      "date": "2026-09-17",
      "text": "bismilah dapet",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "1140c94f62526692",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f052451ba293b9ef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw-bNg2I9vbi32JdVB4AaABAg",
      "date": "2026-09-17",
      "text": "bismillah dapat",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "eeb066e2be060c7b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-75371a12fc4597fb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4A8PJBfc1Pz4WPqN4AaABAg",
      "date": "2026-09-17",
      "text": "bismillah dapet dana kaget nya buat bantu nyekolahin adek🙏❤",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "7223746fd677da0c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fbe7433fe33c0566",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzi-mky3baAMeDdNUd4AaABAg",
      "date": "2026-09-17",
      "text": "bismillah semoga dapet rezeki dari abangnya buat bayar spp adek🙏🏻🙏🏻",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "d486b978a9e4e064",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-13d818d900d5bf24",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyEbhr4uyySs9B5OqR4AaABAg",
      "date": "2026-09-17",
      "text": "mantaaappp",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 1,
      "id": "11da7a6083b5229c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-463119225a96e445",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "-wlTB-1OLLc",
      "date": "2026-09-18",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 26802,
      "id": "a9b6efcda2694180",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7770eb8e8f7c4eef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzkBPWlZ0bBulRv9Pt4AaABAg",
      "date": "2026-09-18",
      "text": "Ada 1 trik klo nama mau aman di bank \nKmren teman saya kek gtu \n\nDia pinjam pinjol lumayan gede \nSebelum dia galbay dia pinjam dlu dibank \n\nBank udah cair pinjol digalbay uang pinjol buat mutar pembayaran bank😂",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 0,
      "id": "cf38a2299e307612",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-82ea97530246a747",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVVP4pp8hAHXnTNRJ4AaABAg",
      "date": "2026-09-18",
      "text": "Bismilah bang sehat slalu",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "e7f968a4ac7d85f4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b059ea89cbe97ca2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXfNB0RXo0ays0nJF4AaABAg",
      "date": "2026-09-18",
      "text": "Bismilah sehat selalu lancar lancar rezekinya bang aminnnnnn",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "5df89f73fd4d6cd6",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ff74c54336ed2733",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxuvHYqdAvdTNfFDrx4AaABAg",
      "date": "2026-09-18",
      "text": "Bismilahhh",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "c650db3c2e14d231",
      "eventId": "auto-75ba5778b03fecac",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzMe3Bd8Th0llyfDKF4AaABAg",
      "date": "2026-09-18",
      "text": "Bismillah bang semoga dapet buat bayar utang2 bang sama kebutuhan keluarga semoga di mudahkan rezekinya ya bang",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "1fa3c0986e46b2bf",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c3a6b4e133e5dced",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyy-NQjehzEZfxnLPx4AaABAg",
      "date": "2026-09-18",
      "text": "Bismillah cobak deh semoga menang❤",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "65dd81d6fbbefb31",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d9191c4a3dcdd9f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz7S1DicNNhsW6QtlJ4AaABAg",
      "date": "2026-09-18",
      "text": "Bismillah rejekinyaa",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "6cd163e1bdcad099",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53bf313c1f888dce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzb92amPivLoX7qq_R4AaABAg",
      "date": "2026-09-18",
      "text": "Bismillah ya Allah buat, bayar kosan dan biaya hidup sebulan",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "ea18a506d357cd00",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35c11b0e6179cead",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzHtlVpRZ68xODM3vx4AaABAg",
      "date": "2026-09-18",
      "text": "Bismillahirrahmanirrahim semoga rezeki buat berobat 😊😊🤲",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 1,
      "id": "42258c9114d5fb0a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3c790d6a91b3f2ae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "my7m8lnz3CY",
      "date": "2026-09-18",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 35797,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "37342f30b599a4d7",
      "eventId": "auto-c56326dcc516effe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyosBizecY6PVzMPp54AaABAg",
      "date": "2026-09-18",
      "text": "Enggak bisa bg",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "d13acd061bf752b6",
      "eventId": "auto-f59f1d250e67665c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyCVORRO5wHVlE-6NJ4AaABAg",
      "date": "2026-09-18",
      "text": "Hadir bang.\n...Bismilah",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "7ffa4aac39fdabe7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53b7f2b90a22aeed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyD1G58yCHIGJLPJcN4AaABAg",
      "date": "2026-09-18",
      "text": "Hadir bang.mudahan aja dapat",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "ed9b65d0b69d9e36",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac415fe955cebf99",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3ZMjDyXl33S1b9Ht4AaABAg",
      "date": "2026-09-18",
      "text": "Intinya pinjol ini hukumnya PERDATA. TANPA JAMINAN. PERSETAN OMONGAN ORANG. PINJOL-LAH SEBANYAK-BANYAKNYA & GALBAYKAN SEMUANYA! 😅",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 8,
      "id": "11daf20e41d3eec3",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53da184145eb4ff3",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyYaPACVcZKbtzbGvV4AaABAg",
      "date": "2026-09-18",
      "text": "Iya bang gimna kalo no kita untuk jualan ga mungkin kita ganti",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 2,
      "id": "e0f326eeaf9747f2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-62903b23b423ae25",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxdNLgcDh3N_TJiFzR4AaABAg",
      "date": "2026-09-18",
      "text": "Jangan takut sama dc pinjol, kita perangi pinjol dengan cara galbay nasional💪",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 5,
      "id": "c688b970f520c6ef",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48bab82d108b15f6",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx4u86XuVuaAHx5XT94AaABAg",
      "date": "2026-09-18",
      "text": "Kok gak muncul bang di aku",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "9bcba8fe20684243",
      "eventId": "auto-75537096d3f2e708",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9gL05y5r5pBpTspJ4AaABAg",
      "date": "2026-09-18",
      "text": "Mantap sekali",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "d0dac885d618eecb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-849333e6523ed313",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx2V85j7Onv_A3hpe14AaABAg",
      "date": "2026-09-18",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, komen saja mau daget buat kebutuhan apa hari ini 👇 https://link.dana.id/danakaget?c=sk8tqgzdh&r=c7Q38x&orderId=20260921101214598715010300166276299195187",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 135,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "d6fbbd4bd0bae1f0",
      "eventId": "auto-1fca027101ec813a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGRRFtS9TjKZzA8wZ4AaABAg",
      "date": "2026-09-18",
      "text": "Mau bang buat bayar kos",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "2acc941e2947845c",
      "eventId": "auto-a9e3b9ca81a56ca0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzV63Wpp4oWziBk_YV4AaABAg",
      "date": "2026-09-18",
      "text": "Mau kak",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "9c6353cc786df35a",
      "eventId": "auto-94f0ba7a2c24b6aa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzqZmfpm9bYuf6rjlJ4AaABAg",
      "date": "2026-09-18",
      "text": "Mauuu",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "c8991c74dc2560fa",
      "eventId": "auto-35d90d343f687581",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgypfY25rOPRFpkGq_14AaABAg",
      "date": "2026-09-18",
      "text": "Moga jadi rejeki",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "5722f5b4106d3ce4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-412a5a8b2967dbc0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1m-jDkPXl_VaPB594AaABAg",
      "date": "2026-09-18",
      "text": "Pinjaman nipu",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "5ec72f625132be96",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d7b4b0d3a2d71ff0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzoyzHlU1J7YzOs6WB4AaABAg",
      "date": "2026-09-18",
      "text": "Pinjol salam galbay",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 4,
      "id": "b9963c9d030abe63",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-359e97627a95b80d",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy68pirrqI1HmC_vPh4AaABAg",
      "date": "2026-09-18",
      "text": "Saya galbay, eh kemarin datang dari lazbon 😂",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 0,
      "id": "7b21001ca437bfb8",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ded354fe923bd48e",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyuTwHXq_zsp6ej0pB4AaABAg",
      "date": "2026-09-18",
      "text": "Semangat terus bang ngonten nya       semoga sehat murah rezeki nya  aku butuh uang bang   buat  byar  rumh sakir",
      "url": "https://www.youtube.com/watch?v=1-SKcorqvA8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "f5295ff52bcf3395",
      "eventId": "auto-3200a695056a26d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "7MW4ZyWQnXY",
      "date": "2026-09-18",
      "text": "Suamiku Naik Jabatan, Tapi Aku Rela Terjerat Pinjaman Online Demi Gaya Hidup Mewah! | Kisah Nyata",
      "url": "https://www.youtube.com/watch?v=7MW4ZyWQnXY",
      "engagement": 36458,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 52.8
      },
      "id": "1153889b954e08f6",
      "eventId": "auto-727b00ae23f12b45",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzefUxurK6yhwBRBp94AaABAg",
      "date": "2026-09-18",
      "text": "Untuk kebutuhan sehari-hari",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "af0db20a5de37585",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-322d3f6751ed2778",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJdIsHz5Yutk2SAct4AaABAg",
      "date": "2026-09-18",
      "text": "Ya Allah ya Robb yang Maha kuasa  Tenggelamkan Tutup OJK  Pinjol seperti Engkau  tenggelamkan Fir aun",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 2,
      "id": "4228198fa02771e1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f96c1199f30f1458",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy17W5VrN3oa-wLRYV4AaABAg",
      "date": "2026-09-18",
      "text": "Yey aku dapat",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "95ccc7844c300886",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-910bb18c05434a68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyHGrr-ao8xbsLIO954AaABAg",
      "date": "2026-09-18",
      "text": "bismillah, semoga dapet buat anak yang baru lahir",
      "url": "https://www.youtube.com/watch?v=vDYnfqfgPhc",
      "engagement": 0,
      "id": "ba9d5cb7162a9fe5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d5ee99c7bad99a5d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJ7FOmCYR4Q5JrvZ94AaABAg",
      "date": "2026-09-18",
      "text": "bismillahirrahmanirrahim semoga dpt dari waktu itu soalnya ga dpt dpt mudah² kali ini hoki aminnn",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "4afe59221ebc9142",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c5d49e83cb4d1d7c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxcTvNiP7aFOpNuLNB4AaABAg",
      "date": "2026-09-18",
      "text": "di aku kok ga muncul apa' bang",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "826aeaaaca08e813",
      "eventId": "auto-93510bab7ab6d4ca",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzipJQ_TjFxwCVKm094AaABAg",
      "date": "2026-09-18",
      "text": "haii",
      "url": "https://www.youtube.com/watch?v=O1UwLtTzTpc",
      "engagement": 1,
      "id": "c23095930b7940b3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d4abc979e64b1da1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwDR3niKrwcRe7SKKZ4AaABAg",
      "date": "2026-09-18",
      "text": "mau dong bang",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "67d3669775bb9aaa",
      "eventId": "auto-62b2512346b72964",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8KglyNI4qRywYyYV4AaABAg",
      "date": "2026-09-19",
      "text": "Aku udah paket lengkap gak Pernah dapat",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "4ec1469acaa006c9",
      "eventId": "auto-5086949fc01d653b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxPgap7RVqnSaVVKTR4AaABAg",
      "date": "2026-09-19",
      "text": "Bismillah mudah\"an dapet buat poligami😅",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "ec272969d298de79",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b893fb37968569a5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzwinke7DwkkyZxPaZ4AaABAg",
      "date": "2026-09-19",
      "text": "Bismillah semoga aja dapet, lagi perlu nian buat beli susu anak dan kebutuhan lainnya 🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "a5cad13407795290",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ce679be643d65ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw0zFod7lBSnmp1UFB4AaABAg",
      "date": "2026-09-19",
      "text": "Bismillah semoga berkah abg q",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "ec216e3ee317f0a5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-896a94ac6bd2a8a3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGTMZzKs6SAXvgyZB4AaABAg",
      "date": "2026-09-19",
      "text": "Bismillah untuk berobat",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "06ec47c5d27b50d8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d35f63c659ccfe91",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz5HgiVfoWDqiIfftR4AaABAg",
      "date": "2026-09-19",
      "text": "Bismillah, buata lunasih hutang ya mas",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "b49bc715151b3bfb",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a858695030407db0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyZw8olbDZcgRzYwPx4AaABAg",
      "date": "2026-09-19",
      "text": "Bismillah.. first time nyimak",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "dfbf36e8dcd03a45",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0cf79063cd3862f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyaTHnyfAzj8CuQQIV4AaABAg",
      "date": "2026-09-19",
      "text": "Bismillah....semoga menjadi rizki saya 🤲🤲 Aamiin Yaa Rabbal'alamiin",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "fb3be7ae6d22fee9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fb64f015e60fba57",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXlds2Py-hwRZdKi94AaABAg",
      "date": "2026-09-19",
      "text": "Bismillahirrahmanirrahim,buat bayar setoran,aamiin",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "a28eefdb305e4487",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f47472df823729ea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzR44OraDLs8Z7leXd4AaABAg",
      "date": "2026-09-19",
      "text": "Boleh tuh bang",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "8099aac20215f127",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3b76dd3b8c98f9d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyqunGmbqPKmb7RCjl4AaABAg",
      "date": "2026-09-19",
      "text": "Buat biaya hidup di perantauan semoga dapat bantuan dari abangq",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "2d08ddba9d624c61",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e95907e8c577d0b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGW11MG_owL6kTbGB4AaABAg",
      "date": "2026-09-19",
      "text": "Gak ada saldo dana gratis.. Cuma dibohongin",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "7317519b909887aa",
      "eventId": "auto-42411caa8b356d5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx-DL61wAa-eqVj-Vt4AaABAg",
      "date": "2026-09-19",
      "text": "Hadir selalu bang",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 2,
      "id": "d25be9aad37ab4d3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-83dd6f077350fdb2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwgGD5Ok35iCRCqpi54AaABAg",
      "date": "2026-09-19",
      "text": "Jangan gali lobang tutup lobang Ndak mampu bayar pinjol stop bayar jangan takut atas semuanya. Jangan hidup semakin terpuruk.",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "0535b6794ddc8e02",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5c336d123f17f83e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw0s2K--rhjnGdzlDp4AaABAg",
      "date": "2026-09-19",
      "text": "Klw rejeki gk kmn\nSukses selalu bang",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "dfa9c3748fd6ce05",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d0ca92afe178c82",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzh2dD3WAtVYcfMQ9p4AaABAg",
      "date": "2026-09-19",
      "text": "Masa cuma 20k 30 orang doang bg",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "d83263381aabbf14",
      "eventId": "auto-d07891ce76f82d92",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzgRRFqO6ZFmfjIls94AaABAg",
      "date": "2026-09-19",
      "text": "Mudah\"an dapat ,semoga selalu sukses bang🤲",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "55c16225217eb067",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a864923fb5dac677",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgydqschSbgYgEGAwK94AaABAg",
      "date": "2026-09-19",
      "text": "Punya saya gak nongol setelah sudah cek dana fast pinjam",
      "url": "https://www.youtube.com/watch?v=aBOSa3wu5E4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "84126f61e1b1c4c1",
      "eventId": "auto-9c10d74619f99e85",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxrVx4qRNdWMx7Vorh4AaABAg",
      "date": "2026-09-19",
      "text": "Sehat selalu bang semoga lancar rezeki",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 2,
      "id": "286159b4eb6cb654",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-121d25a9271a8d0a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzga6hcoCv11CvWT3t4AaABAg",
      "date": "2026-09-19",
      "text": "Semoga dapat",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "36c6a92ed3ef6aa2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49f8629faa1dc933",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwRE0u8gski2UaF6tZ4AaABAg",
      "date": "2026-09-19",
      "text": "Semoga dapet bismillah",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "f29869f4a21a590d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-adf1e6df769d0d8c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz2mRHU3F2jKq64IUJ4AaABAg",
      "date": "2026-09-19",
      "text": "Semoga lancar band aku butuh banget uangnya",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "3bf47f8b22a00819",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-522eb5efb9a4e64a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLkvSiumO0HZ3S_-54AaABAg",
      "date": "2026-09-19",
      "text": "Tutup ojk,,berantas pinjol",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "10f9b7ca9927bd2c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-81e6fed83a627b87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCozngSKob3pw8cg94AaABAg",
      "date": "2026-09-19",
      "text": "Wah sangat membantu saya.",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "2325b3f29d52e63d",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3c63cf1073cf0903",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw8LpZOv9BX1ICukQl4AaABAg",
      "date": "2026-09-19",
      "text": "bismillah buat biaya operasi bapak",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "7ed57937a174dd59",
      "eventId": "auto-c448f497b5b8738e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGUCueCrAmU3bfeHV4AaABAg",
      "date": "2026-09-19",
      "text": "hadirr bang mauu jugaa❤ mau beli bakso udah lama ga bakso",
      "url": "https://www.youtube.com/watch?v=7332A9u9ynE",
      "engagement": 0,
      "id": "3170b5bb97806a24",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-979ac1eb0d1a5c57",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzw_HhaKIBOHkMkush4AaABAg",
      "date": "2026-09-19",
      "text": "itu mah namanya tedpole",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "224a73833232c56b",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-44024e04bdf6539e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzkUPdtKiZth8CGKPF4AaABAg",
      "date": "2026-09-19",
      "text": "laha ga ada enternya",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "e7d8b7b08b320af9",
      "eventId": "auto-788c453f9947dfaa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "YB10RBtbSgw",
      "date": "2026-09-20",
      "text": "ADA PUNDI, ADA KAMI, SPINJAM, SPAYLATER, RUPIAH CEPAT, EASY CASH, DANA RUPIAH, UANG ME, KOPNUS",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 14236,
      "id": "242f33c6c251f979",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-be5dbe5fdcb2bdfd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxD8J7f-p627wIXLb94AaABAg",
      "date": "2026-09-20",
      "text": "Aktivasi pinjama dana cepat nya tidak muncul bang",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "89e51a6f371c6832",
      "eventId": "auto-d675a5c52616f4cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzuFftgnlPvtSxZ6Rd4AaABAg",
      "date": "2026-09-20",
      "text": "Betul sakali bang persetan dengan ancaman DC.....kalau ga ada uang buat bayar.ya kita bisa apa ..",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "ee791f45015d3390",
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-810bed2c85149d99",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJm186EukatJRN3Ed4AaABAg",
      "date": "2026-09-20",
      "text": "Bismillah barangkali ada sedikit buat makan bang🙏",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "15680fec073a8910",
      "eventId": "auto-25658d97c721750e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwackem-OPwukHFHBF4AaABAg",
      "date": "2026-09-20",
      "text": "Caranya bgimn bang , tolong aku , butu uang, untuk berobat anak saya. Bang👏👏👏🤲🤲",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "ceda79278069177d",
      "eventId": "auto-41dc175674c6279c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxBgwJrR7df_I2EjEJ4AaABAg",
      "date": "2026-09-20",
      "text": "Dana Rupiah emank masih ada?",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 2,
      "id": "b1660e11b38b39c4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aee08e544edd070d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxlEecSdXaGO2QGScx4AaABAg",
      "date": "2026-09-20",
      "text": "Diawasi dan terdaftar OJK itu artinya dilindungi OJK 😂, terima saja nasib, definisi Rakyat di tekan Negara..",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 0,
      "id": "d52e3540ff737652",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3252eb9d006dd05a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz7_UnLC6SgmWbJQ0N4AaABAg",
      "date": "2026-09-20",
      "text": "Galbay dr thn brp mbk mulai msk ke sea bank",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 2,
      "id": "0827926cd47c7df2",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-79263edec9745166",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyqFY-LoMWqHMuhH-Z4AaABAg",
      "date": "2026-09-20",
      "text": "Harusnya pinjol GK usah ada DC lapangan karna kita pinjam online bukan offline, DC lapangan bikin resah",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 1,
      "id": "43c6722889567e3f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-36e13105759a7d99",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGp4VE3Wjechzznyh4AaABAg",
      "date": "2026-09-20",
      "text": "Kak rupiah cepat fcnya digersik ada kah?",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 3,
      "id": "430ddb32ff263b4e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a4c40778a4291f4b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhAvzl5rISlo1tCfl4AaABAg",
      "date": "2026-09-20",
      "text": "Kalo dapat kirimkan paket atau belanja online padahal  anda tidak pesan dari nomor HP anda dan hanya penerima nya tertulis nama anda atau nama salah satu anggota keluarga anda dirumah , cukup lakukan rekaman video terhadap si pengirim,setelah itu buat laporan polisi, itu adalah itu bentuk teror...",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 1,
      "id": "67055598532d677b",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-751145d27e1ea4a8",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy6o5bgd5yzrCICx6d4AaABAg",
      "date": "2026-09-20",
      "text": "Lanjut terus galbay mau siapapun yg nagih kalo belum ada duitnya mau gimana lagi 😁",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 3,
      "id": "469e841ab1ca6870",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-973deebe9b63aaf3",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzkeuk6EAtpxrLaPzR4AaABAg",
      "date": "2026-09-20",
      "text": "Nyepam komen ah siapa tau dapet",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "85e6ac6dd19863ce",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c7b8242f458aee43",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyTczvxaQ1SdPYPYfN4AaABAg",
      "date": "2026-09-20",
      "text": "OJK gak peduli sama derita rakyat.  Malah menghapus aturan 3 pinjol.  Bubarkan aja OJK, gak ada gunanya.",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "147389c8048e0c30",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-89e71993b9ff7bf7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZJJNdZs-vR7mAnm14AaABAg",
      "date": "2026-09-20",
      "text": "OJK pendukung pinjol",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "48a20461f8ff7733",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0295fd9d330e680f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzYLpEHc3ewwlTNXMZ4AaABAg",
      "date": "2026-09-20",
      "text": "Oh pantes mulai aktif LG nagihnya. Padahal Uda 3thn g ada kabar",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 1,
      "id": "c0727761d13a5571",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ed69b1fe31843b8b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw7CMCK8CgGusDwFOt4AaABAg",
      "date": "2026-09-20",
      "text": "Para nasabah gagal bayar, kita di besarkan oleh orang tua kita dgn kasih sayang jadi kalo ada yang maki2 anda hanya karna utang, lakukan maki2 kembali karna maki2 sdh langgar prosedur dr ojk bagi si penagih dan pelanggaran pihak aplikasi, setelah itu lakukan lapor ke ojk... Uang bisa di cari kesehatan hanya kalian sendiri yg ciptakan",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 1,
      "id": "5bffd9a72c2f3ffe",
      "sentiment": {
        "risk": 87.1,
        "label": "negative",
        "negativeWeight": 5.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c4bf85aa97ef1274",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJ29WjVKRKVnV2L4l4AaABAg",
      "date": "2026-09-20",
      "text": "Pemerintah tidak berpihak pada rakyat susah.. Galbay nasional melawan pinjol",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 1,
      "id": "02079c27eaca95c2",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0f488ac13bbdd482",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyauLxioaca9v-Ndd4AaABAg",
      "date": "2026-09-20",
      "text": "Penipuan",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "b8ae1c6476b11fb5",
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-feddd62270e2620b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxOtZC5VlwcWKzpw1d4AaABAg",
      "date": "2026-09-20",
      "text": "Semangat GALBAY kan semua pinjol selamanya...✊️",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 1,
      "id": "f263b6e08ccb3a32",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eaac5e60cf8d76d1",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzkaXgIuSLvSd52D5J4AaABAg",
      "date": "2026-09-20",
      "text": "Semoga berkah",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "a9b587bdb3195780",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8d4c2aced53e1ad8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwzW7vJvTKvn3vsykN4AaABAg",
      "date": "2026-09-20",
      "text": "Semoga beruntung",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "be6db74a669fdc1c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-45b89bb502762339",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzMpgv9xqQBDycHm2d4AaABAg",
      "date": "2026-09-20",
      "text": "Serem",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 0,
      "id": "9c91c11bd6dbbf78",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d571e6203472cb20",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEudxSXiGMs5Nz4zt4AaABAg",
      "date": "2026-09-20",
      "text": "Smoga lancar bang\nSuxes sllu",
      "url": "https://www.youtube.com/watch?v=-wlTB-1OLLc",
      "engagement": 0,
      "id": "54ddea2b425b9156",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9fbed68d92de8b48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjAQg6whPW3Ev4mYB4AaABAg",
      "date": "2026-09-20",
      "text": "Sudah saya coba tapi dana+pinjaman cepat tidak tampil akun dana saya sudah premium boss",
      "url": "https://www.youtube.com/watch?v=my7m8lnz3CY",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "eb255d4c13b5569a",
      "eventId": "auto-4d14a742ba8ca84c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzdK6PRA9G9Ipvw6t94AaABAg",
      "date": "2026-09-20",
      "text": "Terima kasih bg dari video ini saya bisa jujur sama semuanya dan bisa bangkit lagi🙏🙏",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "9945ebf7ba34b2a2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d78d4b5ce5388d95",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz82xHQkptykr1f3Nd4AaABAg",
      "date": "2026-09-20",
      "text": "Tetep ajah orang kaya kita kita mh kaga bakaln di acc",
      "url": "https://www.youtube.com/watch?v=ZFejgtidJBw",
      "engagement": 0,
      "id": "2bac3201fc727d95",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f0fe62765b574b12",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzTCciAYcZN6wKq-MB4AaABAg",
      "date": "2026-09-20",
      "text": "Waduhhh sy gablay di adapundi, spinjam, paylater lg 😢😢😢",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 19,
      "id": "1c6a426f3af73500",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4963ccf02991f2f3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzvYk6hOSM72hJi3Vx4AaABAg",
      "date": "2026-09-20",
      "text": "alhamdulilah hutang pinjol 6 apk sudah aku lunasi , 150 hari galbay ngeri bunga nya",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 0,
      "id": "cc39a130f3ee13c1",
      "sentiment": {
        "risk": 78.7,
        "label": "negative",
        "negativeWeight": 4.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1e68bd8f10a1d44",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzZ14qaTccCYZC4Pud4AaABAg",
      "date": "2026-09-20",
      "text": "demo ke OJK baru mantap best",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "162cace9297dbbb7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-68d82a5f056a6aa7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "7Gdq-1I0Ino",
      "date": "2026-09-20",
      "text": "fhotoin Kunti untuk pinjol 🤣🤣 #funny #comedy #shorts #viral #fyp #ai",
      "url": "https://www.youtube.com/watch?v=7Gdq-1I0Ino",
      "engagement": 32096,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "940b6226edcbb45a",
      "eventId": "auto-a89b76890583dfa1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxvfiF1eIrD_e-4a294AaABAg",
      "date": "2026-09-20",
      "text": "gaji pegawai OJK luar biasa besarnya dan kerjaan santai2 aja",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "a5dca25d6d9a96ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c00c4826c5c51361",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwAMCtRmTRHSX33yHt4AaABAg",
      "date": "2026-09-20",
      "text": "iya di aku slik isinya seabank semua 2026",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 4,
      "id": "f89698b140981037",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-21d3e9bbd943925d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxMgTJb4B4d4746HYR4AaABAg",
      "date": "2026-09-20",
      "text": "karena mreka pinjol2 itu takut dicabut Ijinnya karena galbaynya tinggi, makanya mrrka berlindung di seabank....artinya pemerintah dan OJK tidak pro rakyat karena membiarkan rakyat sentuh pinjol riba, harus bisa dibntu pemrintah daripada digarong koruptor...smoga musibah dingri ini ditambah biar pd sadar karena pembiaran riba menjamur",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 2,
      "id": "b380ccbdda63e3d1",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-957740b8770ad058",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyC7UDnzVpH_PaChWd4AaABAg",
      "date": "2026-09-20",
      "text": "mending bro w ada org dc Traveloka malah krmh w d blang pinjol dari traveloka samp 7 juta pada hal w ga pernah pinjol ap malah main dtng aj mana alamat ny bner shi tpi ngrim ny pinjeman ny beda ga sama rekening ny",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 0,
      "id": "08f27d654fe51877",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b5f84a6cb675032c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzy2bL0TUcwAArjDhV4AaABAg",
      "date": "2026-09-20",
      "text": "pasti pinjol yg kenak sangsi milyaran itu pasti gak bayar jugak ... gak jelas OJK nya ni!!!",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "ebf65885bd14fa17",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3acd2abb06845f23",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugylrk1B0fYJ9Oh9gGB4AaABAg",
      "date": "2026-09-20",
      "text": "thanks infonya kak",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 1,
      "id": "e6bfc673b4be2718",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49b30c5db53e181a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxN9CaTXDx8BliRaBp4AaABAg",
      "date": "2026-09-21",
      "text": "Bismillah, pasti cair",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "a2fcd915cbbd5ddd",
      "eventId": "auto-cbcb994001c43674",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx59Xa11Ljg4_CuyxV4AaABAg",
      "date": "2026-09-21",
      "text": "Gw ga bisa muncul bng fitu itu kenapa yah?",
      "url": "https://www.youtube.com/watch?v=lobOGNqM4HA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "0b2f7af860abd6f0",
      "eventId": "auto-65a774e126b87c57",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy-j-8tubv85-EpfYB4AaABAg",
      "date": "2026-09-21",
      "text": "Itu kalo Spinjam tpi yg pembiayaan nya dri BNI apakah Fc nya ntar dri BNI?",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 0,
      "id": "37600245edf2d06d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ab8dcb6ff332ac34",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXtq46c4II4TYrDR14AaABAg",
      "date": "2026-09-21",
      "text": "Jangan jangan OJK ini yng punya pinjol",
      "url": "https://www.youtube.com/watch?v=nTtb9lsIoS0",
      "engagement": 0,
      "id": "be8e0875e46b686e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8ae8ff47e102626f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxThrvJf3CmzzfAJcR4AaABAg",
      "date": "2026-09-21",
      "text": "KA saya dah galbay di spinjam aman ga ya 😢blum ada utk byar utk sehari2 aja lagi susah",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 2,
      "id": "43cc5c8088f80fe5",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a344bcb4d9c12caf",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyoR8YkRsh95L4nSGh4AaABAg",
      "date": "2026-09-21",
      "text": "Kalo mau liat slik OJK ada aplikasinya gak ka",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 0,
      "id": "18b4574a065296ea",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9ad97d82f8056e24",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyaQ3wlW9KKeqfvNtd4AaABAg",
      "date": "2026-09-21",
      "text": "PINJOL BARU MUSTAHIL DI TOLAK,,, bacoootttt konten sesat jing",
      "url": "https://www.youtube.com/watch?v=fL0hj-D3kIM",
      "engagement": 0,
      "id": "b4d21f45e425369e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8391eb0f36bc4bc6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxeFFd8atQaDq8jPP54AaABAg",
      "date": "2026-09-21",
      "text": "Pemerintah negara muslim terbesar di dunia tapi praktiknya sgt jauh dari tuntunan agama ( khususnya #AgamaIslam dan TDK sesuai dgn falsafah #Pancasila yg sarat nilai2 luhur\nPenjajahan terselubung lewat   negara melegalkan #RentenirNasional merajalela, bahkan #BankSwasta pun disyahkan menjadi #BankPinjol\n\nWahai #MajelisUlamaIndonesia #DPRRIKOMISI3 #DPRRIKOMISIXI #DPRRIKOMISI6 #DPRRIKOMISI13 #MPRRI #MKRI #MARI #DPARI #BAZNASRIS #LPS #BANKCENTRAL #PRESIDENPRABOWO\n\nKELAK PILIH PRESIDEN YG BERANI MENGHAPUS MELARANG PRAKTIK RENTENIR #RIBA DARI BUMI NUSANTARA.\n\n#HADISTRASULULLAH #RIBA HUKUMNYA #HARAM DAN RIBA TERMASUK #7DOSABESAR",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 2,
      "id": "659c06bd60502d0b",
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-669063ff98b660cd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzo2KIhLzbqQBJJ3-94AaABAg",
      "date": "2026-09-21",
      "text": "Pinjol bisa aja membuat laporan palsu, bang. Ratusan atau ribuan nasabah yang galbay, nggak dimasukkan dalam laporan OJK. Seolah-2, keuangan mereka (pinjol) baik-2 saja. Kalo mereka menghapus ratusan atau ribuan nasabah yang galbay, kemudian dicatatkan lunas, supaya usaha mereka (pinjol) tetap beroperasi, tentu slik nasabah yang galbay ini akan pulih kembali dan bisa minjol lagi. Nyatanya, mereka (nasabah yang galbay) tetap nggak bisa minjol lagi. Kesimpulannya, issue laporan keuangan pinjol yang galbay, tidak memengaruhi usaha pinjol mereka, selama mereka ini masih memiliki modal yang besar dan tentunya, OJK juga masih dapet upeti dari mereka (pinjol)..\nCoba dibahas komentar saya bang. Salam ngapak dari Wangon..",
      "url": "https://www.youtube.com/watch?v=glpe1QcINk4",
      "engagement": 0,
      "id": "91b375945e7b925b",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fce608c8cb37713b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGbDhQZEjg2Wpdaw54AaABAg",
      "date": "2026-09-21",
      "text": "Sebulan ini DC kredit pintar sudah datang 2 kali  dulu2nya datangnya cuma 1x sekarang 2x dalm 1bulan",
      "url": "https://www.youtube.com/watch?v=YB10RBtbSgw",
      "engagement": 0,
      "id": "d8f93787a763d826",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-76a66f2a4469c124",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyaqo5e3_8HYM7fIRZ4AaABAg",
      "date": "2026-09-21",
      "text": "Semoga dpat ya Allah buat melahirkan istriku😌",
      "url": "https://www.youtube.com/watch?v=govKhpfdXJM",
      "engagement": 0,
      "id": "af83964c79469e3c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a450b6de54f7025",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw6KJ35p6sfelSSSbx4AaABAg",
      "date": "2026-09-21",
      "text": "Susah memang kalau punya istri yg gayanya hedon,sok sosialita dan sifat iri dengki. Mau sebanyak apapun uang suaminya kalau dapat model istri kayak gini gk akan pernah cukup gaji suaminya.lagian ngapain sih ikut\"arisan gitu sok traktirin teman\"nya lagi biar keliatan wow gitu.lagian udah nikah mending urusin rumahtangga aja fokus ke anak dan suami,kalau mau jalan\"atau holiday mending bareng suami dan anak. Biar keliatan org kaya sampai rela pinjol,iri dengki lagi liat teman\"nya punya barang pantang tap top. 😂",
      "url": "https://www.youtube.com/watch?v=7MW4ZyWQnXY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "5bf3c440caf63657",
      "eventId": "auto-5d4829e3e151f0d1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzysRU4FvUPCXliLK14AaABAg",
      "date": "2026-09-22",
      "text": "Kebanyakan gaya JD istri JD bnyk hutang deh pH ada nya jh hidup mah JD istri jngn ikutin gaya tmn tmn JD ksihan suami",
      "url": "https://www.youtube.com/watch?v=7MW4ZyWQnXY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "fe43a39e6d5d86c6",
      "eventId": "auto-36120ca60b2ce149",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    }
  ],
  "reviewRequired": true,
  "collectionDiagnostics": {
    "mode": "live_multi_source_v2",
    "successfulChannels": [
      "google_news",
      "media_rss",
      "google_trends",
      "youtube"
    ],
    "failedOrUnavailableChannels": {
      "gdelt": "'timeline'",
      "kaskus": "Collector ran successfully but found no relevant records.",
      "reddit": "Reddit searches failed: indonesia: HTTP Error 403: Blocked | finansial: HTTP Error 403: Blocked",
      "x": "X_BEARER_TOKEN is not configured"
    },
    "socialClassifier": {
      "method": "deepseek_credit_social_v1",
      "status": "ok",
      "inputCount": 482,
      "classifiedCount": 121,
      "irrelevantDropped": 119,
      "model": "deepseek-chat",
      "fallbackCount": 242,
      "labelCounts": {
        "NEG": 54,
        "MIX": 39,
        "POS": 28
      }
    }
  },
  "sourceMode": "live:multi-source-v2.1"
};
