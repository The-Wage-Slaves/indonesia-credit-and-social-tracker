const CREDIT_SENTIMENT = {
  "schemaVersion": 2,
  "status": "pilot-pending-human-review",
  "asOf": "2026-08-20",
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
      "detail": "Collected 297 relevant records/signals."
    },
    "media_rss": {
      "family": "news",
      "label": "Mainstream media RSS",
      "access": "public",
      "status": "empty",
      "detail": "Collector ran successfully but found no relevant records."
    },
    "gdelt": {
      "family": "news",
      "label": "GDELT volume + tone",
      "access": "public",
      "status": "failed",
      "detail": "HTTP Error 429: Too Many Requests"
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
      "detail": "Collected 443 relevant records/signals."
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
    "suppressedCandidateCount": 9,
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
      "weekStart": "2026-08-03",
      "weekEnd": "2026-08-09",
      "fearIndex": 74.7,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 71.2,
          "volume": 84.8,
          "negativity": 54.3,
          "itemCount": 133,
          "negativeShare": 8.3,
          "uniqueSources": 68
        },
        "social": {
          "score": 72.2,
          "volume": 85.0,
          "negativity": 59.4,
          "itemCount": 141,
          "negativeShare": 40.0,
          "platformCount": 1,
          "engagementUnits": 229.7
        }
      },
      "components": {
        "newsVolume": 84.8,
        "newsTone": 54.3,
        "socialVolume": 85.0,
        "socialNegativity": 59.4,
        "severeEvent": 92.0
      },
      "articleCount": 133,
      "socialPostCount": 141,
      "uniqueSourceCount": 68,
      "socialPlatformCount": 1,
      "negativeArticleShare": 8.3,
      "negativeSocialShare": 40.0,
      "confidence": 0.656,
      "coverage": {
        "successfulChannels": [
          "google_news",
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
        "newsChannels": 1,
        "socialChannels": 2
      },
      "volumeNotes": {
        "news": "Pilot week-on-week ratio: 16.75x; 2/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 230.70x; 2/8 baseline weeks."
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
        "suppressedCandidateCount": 25,
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
          "id": "auto-19ec7b1f6d4abb6e",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "7da7e7c99a9a797e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kumparan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sudah Hentikan 1.220 Entitas Keuangan Ilegal, Ada Pinjol-Layanan Investasi - kumparan.com - Kumparan.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8328cdf9cc4b8671",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "42ecdb88538f1660"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Perketat Pengawasan Pindar, Penyelewengan Data Bakal Disanksi - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cafdfb1ffc9718bb",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "5f117fbde5ee029e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : OJK Perketat Pengawasan Pindar, Penyelewengan Data Bakal Disanksi - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "kredivo-kredifazz-purworejo-2026-07",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "e714c151f3e7a95e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Panggil Kredivo & KreditFazz Soal Penagihan di Purworejo - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-10fd02778cbb6ae2",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "e1687112be967ac5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kumparan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dokter Alex Cristo Diduga Bunuh Diri, Depresi Terkait Pinjol - kumparan.com - Kumparan.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1fe773a71d7839f9",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "242bd1104eb87c14"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "afu.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polisi: Dokter PPDS Unri Tewas karena Bunuh Diri, Diduga Tertekan Pinjol hingga Suntik Rocuronium - AFU.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b7601e4806888d7",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "48f7d38d3a13bb8c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "anak2 ku pernah pinjam pinjol2 d teror terus macam2 ini itu ganti2 no.yg wa ,,,ku ngomong blok siapa pun itu klau ada te",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-54813847f49ea67e",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "7f1cd3840df300ab"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Interpol Terbitkan Red Notice terhadap Syekh Ahmad Al Misry atas Kasus Pelecehan Seksual - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e74d7ffe99636dca",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "68a7442ce2276c91"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol sering ancam ancam orang dan permalukan orang... makanya kasus bunuh diri dan kriminal makin banyak di Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-100fd2875c1ed902",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "26c0094da65ded11"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gap Kredit RI Capai Rp1.650 T, Pindar Bersaing dengan Pinjol Ilegal - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-11389fea7d7653cf",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9e6adbb218e7ee5c",
            "9eaea03ea06399a6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "kaltimpost.jawapos.com",
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas PASTI Hentikan 1.220 Entitas Keuangan Ilegal, Pinjol Ilegal Masih Mendominasi - Kaltim Post",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1276ac0dc4a5e24e",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "ddd31cef59317972"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PWI nilai pers punya peran strategis untuk memerangi pinjol ilegal - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-30b256a4865e9d0d",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "6aaddbff5789db30"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inilah.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "MoU PWI-AFPI, Literasi Keuangan Jadi Senjata Hadapi Pinjol Ilegal - Inilah.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4aeae813863a9d43",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "dc0c5d213ed7bfb7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gosulsel.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sulselbar Terima Aduan 11.156 Terkait Penipuan Digital dan Pinjol Ilegal di Sulawesi Selatan - Gosulsel.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5118136699faff1f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "792d4c346048f4b9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "informasi.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Fintech dan Pinjol Ilegal Mendominasi Aduan Masyarakat ke OJK - Informasi.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-524c6f1e8c0decc2",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "c57298891d34bed8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribun-maluku.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Maluku Gandeng BKKBN, Bentengi Keluarga dari Pinjol Ilegal dan Judol - Tribun Maluku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62101ff8c3f09f1b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "7d187e91afc26781"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inilah.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Ilegal Intai Data Pribadi, PWI dan AFPI Perkuat Literasi Publik - Inilah.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6905edae25d2e6ac",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e7cf3c8dd572a281"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "makassar.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ada 11.126 laporan pengaduan \"scam\" dan pinjol ilegal di Sulselbar - ANTARA News Makassar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-72159b271cadc0b0",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "2a358997a535aec8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kepala Bappenas: ASN harus dijaga dari praktik judol dan pinjol ilegal - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-74ef35831bfe2a63",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "f0a8795c39073006"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rm.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI dan PWI Perkuat Literasi Lawan Maraknya Pinjol Ilegal - RM.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7938d880466680a0",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "43c9da75d3509380"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarcirebon.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cirebon Edukasi Ibu-Ibu Kelola Keuangan, Waspadai Pinjol Ilegal hingga Judi Online - radarcirebon.disway.id - Radar Cirebon",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-90c4131ba2e406ae",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "c15ec90abce22ce4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "m.rctiplus.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sinergi PWI Pusat, AFPI, dan OJK Perangi Pinjol Ilegal dan Perkuat Literasi Keuangan - RCTI+",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d10ff351c537685a",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "cc55c18f6d840678"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Danamon Edukasi Pelajar Hindari Pinjol Ilegal hingga Judi Online - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fad2ad2622d3d90b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "ec77f689c3718b0c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tutup 951 Pinjol Ilegal Sepanjang 2026 - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ffeb9f3498575966",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "ce0407ce958f66ef"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Waspada! OJK Ungkap Modus Baru Pinjol Ilegal, 12.800 Platform Sudah Diblokir - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-07ddb310b60d9b13",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "f8bc394ecbd2d92b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "idntimes.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5 Hal yang Bisa Dilakukan Saat Kamu Gagal Bayar Pinjaman Online - IDN Times",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48d6beec2016ea68",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "44621ef68391959b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "integritasnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Soroti Kredit Macet Pinjol, 16 Penyelenggara Catat TWP90 di Atas 5 Persen - Integritas News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5bad7fad52e6b60f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "8ea006d0e97e9b0c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Diterpa Gagal Bayar, OJK Sebut iGrow Berfokus Selesaikan Pembiayaan Bermasalah - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8cdeb33175514b4b",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "5483c58f3cea0f9c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "validnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daya Beli Melemah Picu Risiko Gagal Bayar Pindar Tetap Tinggi - Validnews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe92713b8d21d517",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "d9e03cf6832b06e5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "validnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Utang Pindar Juni Naik 25,88% Ke Rp105,14 T, TWP90 Di 4,26% - Validnews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-01355d8fd4e176ee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a27716f99fcb1335"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bukti Ruben Pinjol #rubenonsu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-01bcd3239dae1c34",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bf41f5287a3f2cf1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Giliran ko Ruben melawan tim Sono kepanasan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-02b6e97c10e34e12",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f56bc62e537391e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ruben Onsu Dituduh Terjerat Pinjaman Online #shorts #artist",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0467e82a23117613",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d81fbeb76c803c30"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bos OJK: Analisa Kredit Pindar Bisa Pakai AI - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08214b738dc47d89",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "20f6fe31ac32ec01"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga usah diladeni Ruben, sabarnya ditambah. Fokus ke hak asuh anak sj smg bs dialihkan ke anda. Dan smg anda sgr mendapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0851a5ae8af8da13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "55ca539b434c391b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Di aplikasi saya gak ada pitur dana instannya, padahal akun saya sudah premium",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08b45e95a12bcc70",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2d77a820142b5220"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol di Indonesia Dapat Suntikan Dana Asing Rp 17 Triliun - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0972251998e01243",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fa8fdd9429b211e4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Aturan Baru OJK: Pindar Wajib Lapor Data Transaksi, Perlindungan Data Pengguna Diperketat - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c388e7d24d3d982",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b98d4dee3e765b60"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Macet 16 Pinjol di Atas 5%, OJK Perketat Pengawasan - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d30cb38e38de643",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "484c4e5e7cc74580"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pendanaan Pindar dari Lender Luar Negeri Melonjak - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d77a25798132bf2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a8086b68cf3723b2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hahaha..si S aza gak bs tunjukkan bukti..ditanya aza gelagapan...😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e54ba031999a450",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e849d89fdb192371"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dana ku ngak ada fiturnya bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e735e22adbd1d9b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ec0f198c69f81b67"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pendanaan Pinjaman Daring Asing Naik 34 Persen hingga Juni 2026 - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e93e2d01b8ca0a6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4c853b4f3f698da9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini lah fakta in this economy sedang tidak baik baik saja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f119721f6ba135d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b745d1975a6c9257"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sulsel.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KKN Unhas Edukasi Warga Alliritengae Kenali Pinjol Legal, Paylater, dan SLIK OJK - Disway Sulsel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f25392b4b608bed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7604b1bd76f93d65"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Miris. Liatnya punya. Pendidikan. Tinggi tp gak bisa bertanggung jwb pd dirinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f8b1dccc4e80ae1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bc0dcb0afe843fa1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sarkawi kerjanya fitnah doang. Buka terus faktanya, Ko.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-101d884aa2025377",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d1ce8a5a3839779c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sikat habis ruben jgn diem terus ,org2 begitu jgn di biarkan meraja lela.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1104da4ef377cdb4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0b6b11cecb043a81"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bayar kosan bang...bos blm bagi gaji",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-12ddb47e48d2a058",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "88045a7dfc485eda",
            "0b4f498582838a17"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Rilis Aturan Pelaporan dan Data Transaksi Fintech P2P - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-139f50a8171356f9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "91c77ce715665bc8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sarwendah dan gio klo diliat liat mereka berdua saling memfaatkan satu sama lain dlm hal apapun",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-13ee4de021f4eb68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1613dddf25735c8d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalau yg ngomong wenda aku tdk percaya ..di podcast densu Dia ngomongnya penuh kebohongan ..hal ini disaksikan seluruh n",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-14aba3f99101c101",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "044030cb68b5c1cc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Utang Pinjol Tembus Rp105,14 Triliun per Juni 2026 - MetroTVNews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-169b768bd662ead8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f3f49be930d05c07"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Ilegal Marak, AFPI dan PWI Bergerak - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-191a39051eade6bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3b938ed2db436f6f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semangat RO..nanti AlLAH ❤.\nsabar ya ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-198b5a5571260fa5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0589b13f773727c8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PWI dan AFPI perkuat literasi masyarakat soal industri pindar - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1aabb5dcbe90332d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5b53c98ec52003b9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "medcom.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Fintech Waspadai Kejahatan Digital dari Maraknya AI - Medcom.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1b07488663fc9de2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "19e2cf014e8c1174"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radioidola.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Booth Layanan Konsultasi Pinjol Ada di Fajar 2026 - Radio Idola Semarang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1b97e186679c93c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0b03c63d887f77e7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gk caya gw seh bang Ben pinjol.. fitnah !!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1c3c423d2cde6e98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "905054b86847dd17"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Apa pasti di acc",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1e39b08943c6dd14",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d022781921b3a624"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat kak ruben insya Alloh indah pada waktunya amin❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1f957284007f4117",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f72c889403339f4f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, komen alasan kalian mau banget daget hari ini untuk apa 👇 https://link.dana.id/dana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-208f365c59ae452b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3aa2485440bc01cc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Untuk top up",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-209e5b79a5c9ef98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "522416bd8322fb32"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KUR Rp 100 Juta Tanpa Agunan Jadi Angin Segar, Pinjol Bagaimana? - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-218217146461ef7f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dfe0d380f76a6a0d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "viva.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Opsi Pembiayaan Geser ke Platform Digital, OJK: Utang Pinjol Masyarakat Capai Rp 105 Triliun Per Juni 2026 - VIVA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-21b8bfc62df39635",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6eb998836ac03ed0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Economy sekarang, rakyat dari makan dari tabungan sampai makan dari utang, sementara elit2 negara simpan uang hasil koru",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24e9fecd77e658d1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "71a194c77bb2f283"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "riautribune.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tembus Rp105 Triliun Hingga Juni 2026, Utang Pinjol Warga RI Naik 25,88 Persen - RiauTribune.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b57884a1b1e344b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0ed5b2fa5dc448eb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tutup 1.220 Entitas Keuangan Ilegal, Mayoritas Pinjol - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2be3ac63f5ddd3cc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b6fb96d902d24111"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kumparan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Total Utang Pinjol Warga RI Tembus Rp 105 T, Melesat 26 Persen Setahun - kumparan.com - Kumparan.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e233e2180697112",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "24836afcab428264"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya mah gak mihak siapa siapa. Cuma mau doain Ruben Onsu aja. Sehat selalu dan semoga menang dalam kasus HAK ASUH ANAK.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e30194bdc09ae85",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "affad8fd697e2e4f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang dana gawat dong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2eb3b786dd022ef1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0fd0c409126e104b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaramerdeka.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Booth Halal Exporience Siapkan Spot Konsultasi Keuangan: Aduan Soal Pinjol, SLIK dan Investasi Ilegal Bisa Ditanyakan - Suara Merdeka - Suara Merdeka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f50bc695b0ce7d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8a3cb4084c531eff"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas PASTI Setop 951 Pinjol hingga Investasi Bodong Modus MLM - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-31669d84b7c41fd2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8dad5f2ed8ef24e5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "fortuneidn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tabungan Melemah, Masyarakat Beralih ke Pinjol - FORTUNE Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-317948eb25d97cdc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f4df0f05c8557b42"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kak wenda ini aneh, kalau km punya uang bnyk bayar dong.. \nJangan mlh mengumbar di medsos manta suami mu kan sdh keluar ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-326eae845d49f876",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "22473c80bf50b64e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Wat bayar kontrakan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3642a02b6615bb96",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "457b4a63cf37bf01"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koran-jakarta.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Siapkan Aturan Baru untuk Pinjol, Keamanan Siber Diperketat Saat Pembiayaan Tembus Rp105 Triliun - Koran Jakarta ®",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-373a2ce4585a80ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "921691a71dda725e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gio pinjam uang keu pinjol katanya ceo",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3757471281dd2484",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "565d6065c00ea6e3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "stekom.ac.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tips Mengajukan Pinjaman Online agar Tidak Salah Pilih - Universitas STEKOM",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-386a33101d2a0f99",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "468fb02d5ee8c2ea"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sinpo.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas PASTI Tutup 1.220 Entitas Keuangan Ilegal hingga Juli, Didominasi Pinjol - SinPo.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-398b6ab5d852c3ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d999f97a40e7d25e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK didorong siapkan mitigasi risiko kredit macet industri pindar - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3a05fef0420cc869",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9047c8b0fc417ebb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "setuju dg Ruben... logis bangettt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3c7f298a4cb9ff91",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b56ffd6157b5a296"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Risiko Mengintai Pindar, OJK Susun Pedoman Keamanan Siber - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3f9ae7bb073375a0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6e975097938e4ea0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tetap semangat ke masalah hak asuh anak\nJangan terpancing",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4107d22b779bc76e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "38c0459761612a0e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ruben Onsu Bereaksi Usai Disebut Sarwendah Debt Collector#sarwendah #rubenonsu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-411a478034a82f4e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e26c714b177f3fea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aya\"wae Fitnah teh.,.Doa terbaik buat RO",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4191803e81284092",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aaf65934840af278"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lagi butuh buat anak lagi sakit min",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-41bf8e1400a527d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ac7671378252e8e6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gimana caranya untuk ke dana ?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-437f2856810c7248",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b56930c042cfc57d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "951 Pinjol yang Resahkan Masyarakat Ditutup, Modusnya Lewat Aplikasi dan Situs - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-44187c096581b288",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "44f790ec636f2c4d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tanahdatar.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peringati HUT ke-81 Kemerdekaan RI, Pawai Alegoris di Tanah Datar Digelar 18 Agustus - Pemerintah Kabupaten Tanah Datar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45c63c18eb9aaf11",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2ade6204f1a886a1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Resmi OJK Per-Agustus 2026 - MetroTVNews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4611918d8227a3de",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "702f4fd12d296e2d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Seandainya pinjam juga gpp, maklum , banyak kebthan, toh juga gak buat foya foya, biarin aja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46b2cbcd674483db",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0b6ccfad9f225400"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang buat bayar listrik bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-482b91adf725adc3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d4d7dc1bb5c7a128"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompas.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Journalists Play a Role in Preventing the Public from Falling into Illegal Financing - Kompas.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4fcc83fefa5ffa94",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b1c9192ae9b4e2fe"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas Pemberantasan Keuangan Ilegal Blokir Rp 723 Miliar, dan Kembalikan Rp 204 Miliar Dana Korban - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-508b459dc3872f01",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8602129812acfa9a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Perketat Aturan Data Pengguna Pinjol, Dilarang Diperjualbelikan! - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-524f4ec3d953e07c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bef6fd7fc35575cb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sikat habis koh ruben jangan biarkan dia menginjak injak harga dirimu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-52eaa7a745d58dcb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1cdc45de8ce3427c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Wajibkan Pindar Lapor Transaksi dan Larang Jual Beli Data Nasabah - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-573038e81bbb3bbb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4c0269dc67ec6329"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Astaghfirullah hal'adzim Na'udzubillah mindalik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-582cd8fd78abb70d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "54f7c0f188c53c7d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang butuh banget buat ank sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5859687e7df9ff00",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b6df3cfd147034d0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gimana cara pinjemn nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5897da1420fcf54e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8f6f1efbd0ea3497"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ntvnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Geram Dituding Terlilit Pinjol hingga Isu HIV, Ruben Onsu Ancam Polisikan Penyebar Hoaks - ntvnews.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b4faee4038a08f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c7dc454cca90ed37"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Perketat Aturan Data Pindar Lewat POJK Nomor 8 Tahun 2026 - achmadnurhidayat.id",
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
            "51e7241b61bd8907"
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
          "id": "auto-5cfe0aceeead2ffe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8119311bbd5624d2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TAMAT!! BOS PINJOL MUNCUL, KLARIFIKASI YANG PINJOL GIO PAKAI NAMA WENDAH?? RUBEN SURUH BAYAR?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5d7716e15df1971c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f9132c0799403a0d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "medcom.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar 94 Pinjaman Online Legal OJK 2026, Ini Link dan Website Resminya - Medcom.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5dc273a9ff701e2f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "416b0a92bf5f2fdb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "harianbhirawa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Resiko Kebakaran Dikapal, Satpolairud Perketat Pemeriksaan Muatan Truk di Pelabuhan Jangkar - Harian Bhirawa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e48ac0b197c4340",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "878bb71271710278"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat isi saldo ngojol bang .. biar ada penghasilan 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e70541fdbfd21c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "451f0050b623fc9a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kami se-Indonesia support ka Ruben. Kami do'akan kak Ruben kuat hadapi semua cobaan ini. Kak Ruben sehat selalu dilancar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5eb57ec39abbcf4a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e7f853b0d2277139"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yg pinjol Gio tapi yg disuruh bayar Ruben gimana sih!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5fa4e48c0fc140e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d8c06e68ba9d6c5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat koh...bukan ngajarin jahat ya koh tp lawan dikit. Banyak istighfar koh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-606f563260715b39",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "508522e20de13c31"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol dan judol tidak akan pernah di tindak karena setoran besar ke negara,,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-60f97e56b9449c40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "31f53bb83e1a1545"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SMG aja CPT selesai mslh ini Ruben biar bisa tenang dan bahagia bersama anak2",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-61e8b610b1cf2700",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f16b202a276f851a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "afu.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar Tembus Rp105 Triliun, OJK Siapkan Pedoman Keamanan Siber - AFU.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62da86b2cca63daa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aba9cb5f425b2f53"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Org yg profesinya kt anggap berduit aja trnyata ngerasain juga tekanan ekonomi ya😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62e029e2741f7799",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a06a3a18b10e6109"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Awas pak kamu nanti di laporkan kalau gak ada boktinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62e2d87b8b804f81",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "427857dc4bf09b58"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Perkuat Keamanan Siber Berbasis AI Hadapi Ancaman Deepfake - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63238a41bcaab7f9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "929a5092854e3ac9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Apa hubungan nya pinjol ma hak asuh anak ....kasih Endah 200 jkt aja bisa Masya pinjem pinjol ..kocakk😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-633b462ce91d6fe4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e4ea69c343fb2507"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Unpad Gelar Edukasi Cegah Pinjol bagi Mahasiswa Baru - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-687cee999d9c4d61",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dc53626384b15715"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Orang waras pasti bela yg bener .hanya setan bela yg salah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-691f97347fe9c83f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "267618135dfadeef"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "D akun danaku blm keluar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6c562a4b301cb6b1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cc9e7647409335d2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "news.republika.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Susun Pedoman Keamanan Siber untuk Perkuat Industri Pinjaman Daring - republika.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d246307b5af7498",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "910644f38d9d7fc7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tak Percaya Ruben Onsu Terlilit Pinjol, Nanda Persada Tertawa: Kebayang Nggak? - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d9be3599b4c11df",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0edf64bd4536ddc4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Plis rekomendasi lg btuh dana 2 jutaan tp bi ceking rusak krn di pke orng bang...🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6dc9fb9494c93ecb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "58023987b00fcfae"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Rp17 Triliun Aliran Modal Asing Masuk ke Pinjol RI - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6f70861bc5389b60",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "629cdcfe4774f33f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bantu saya gaada fitur nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-70cab7051f9b05a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e1152890db9ad80"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ko Ruben  sehat2 disana yaa💪💪💪🤲🤲👍🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7267bd3c3e300c6f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "31bae92bf93bea7f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "style.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ruben Heran Sarwendah Terusik Debt Collector Tidak Lapor Polisi, Bandingkan Kasus Hate Comment: Aneh - TribunStyle.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7331fe2881ce7629",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "097b22aadd7f5671"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Koroptor yg harus bertanggung jawab klo bgini🤲🏼🤲🏼😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-735cb59cf534cae4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ea5350dd61f75c3c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Urusan hak waktu bersama anak malah spt kasus perceraian aja....kemana2",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-74a441c1a5c4668c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5f56c9ae32cf698f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ngeri kalo udah menyangkut utang 😊",
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
            "b565e08880367349",
            "23c45a7b41875483"
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
          "id": "auto-75af4f300f060486",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "eadf327dde98ca30"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Jumlah Pinjol Berisiko Kredit Macet Tinggi Sisa 16 per Juni 2026 - Bisnis.com",
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
            "dacde5e95588ca70"
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
          "id": "auto-787192a1b87a2fb9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4bd824d7c4c1f330"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kasian ruven di kataii bangkrut puas poroti uang ruben di hina 2 di katai pinjol tuntut .sarlont sarijem",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-78fe15e6afe16065",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "56b952c4b66a169c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yg sabar y Ben ,InsyaAllah d mdhkan sgl urusan y",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7903807d1bbd684c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "371447bb1cea940d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "carapandang.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Investasi Asing di Industri Pinjol Tembus Rp17,28 Triliun per Juni 2026 - CaraPandang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b21fd57ba25ae25",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8807c4c5a55d41b4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dr pd ngomong sendiri2 sana sini mending di satuin.tanya deh tu.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7d18dee53116ae05",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8525d9d51e39c822"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pengacara ini mengalih ka masalah hak asuh ank jangan terpancing",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7d36df8b03930183",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b985ff6b5deb1716"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dana Asing Rp 17 T Masuk Pinjol RI, Pertanda Apa? - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f2c0fb7dea19250",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "08085671d1c9b9d3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat bayar kontrakan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f9351f75748efc4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "48228a12f4a8e038"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah, buat bayar kontrakan bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7fc2d6ebb05c1dc0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6fe2272298855a46"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bantu bang ,buat ongkos mau berangkat kerja gak punya ongkos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8015fbc12f921292",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cf9ed3076ef5d239"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ruben semoga ko ruben sehat selalu jiwa dan raga,dijauhkan dr org” yg berbiat jahat.jgn lupa banyak sekali yg support ko",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-819c471c9f191272",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "996c20dd1f4448a7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Untuk bayar cicilan motor bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8215a478533b8bbd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a3a812b6e3537c15"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Pinjol Resmi OJK Agustus 2026 Terbaru, Cek Daftarnya Sebelum Ajukan Pinjaman - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-82f4135fe84f7421",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "be09da38f531c2d7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "NNT bayarnya ngandelin Ruben lg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-840ab151ea515848",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "00ec78f4457313fc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sabar selalu ya & tetep Istiqomah aja kang haji Ruben.. jangan gampang terpancing omongan si Sarwendah!! Untuk Pengacara",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8552f72b5d7a628b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a10cf43822197946"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Warga RI Makin “Kecanduan” Utang di Pindar, Ini Buktinya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-857fff6f20a8e22b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "331e1a68f1172765"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Inilah contoh pengacara yg menyedihkan ...berusaha memenangkan kasusnya dg segala cara ...termasuk framing nyata dr ucap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-864526264791a3cd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "44c5a88496482da0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "apakah ini benar bosku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-86d60e488e265ae1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a25d8ccd84348a60"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "video.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5 Pinjol Terdaftar OJK yang Tawarkan Bunga Rendah - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-877e67858794bf67",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bc8c00e07f3d3184"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "medan.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemerasan Modus Kencan Sesama Jenis di Medan, Data Korban Dipakai untuk Pinjol - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8960a71b8f67def0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "494760933a4943c3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bisa\"nya markonah membual aja 😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a4ce953d079f0a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8d1657756d66a37c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bukti koq di spill dikit 😂😂😂 parah sih ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a8a4b217c180499",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9f587207694e7752"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemerintah harus menghintikan Pinjol, sdh banyak korbanya, pemerintah tdk peduli dgn masyarakat,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8b6c25e38fe543a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9381c21241975cb5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga ngebuktiin apa², di bluurr smua 😂😂😂 nama elu sndri jangan² itu yg tertera",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c72b9b63afb9e7e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f4f112065f762b2d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat Ruben... Allah melindungi mu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8cc1b43e971bea98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b8ac3f9dc3efe071"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dana Asing Masuk ke Pinjol RI Tembus Rp17,28 T per Juni 2026 - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8cec4bbec4c23147",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7f085fc057aca678"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Membangun Benteng untuk Menangkal Ancaman Siber di Industri Pindar - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e6714405b939870",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "86e51e10d297e837"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gokepri.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pinjaman Daring Tembus Rp105 Triliun - gokepri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8f63b3fe0a9be2f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0e287acb7451982a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "theiconomics.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Memelototi Data Transaksi Pendanaan Pindar - Iconomics",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-900d5fef5d83fd15",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b450276924c230d9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "portalpurwokerto.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nama Pinjol Tenor 12 Bulan yang Legal dan Berizin OJK 2026, Daftar Aplikasi Pinjol Online Cicilan Fleksibel - Portal Purwokerto - Portal Purwokerto",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-904bf74ff151f27b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "30c8674f3066682f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "liputan6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kumpulan Hoaks OJK Hapus Data Pinjol Beredar di Facebook, Cek Daftarnya - Liputan6.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-945ccda17d9ad456",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e5d92b6a85530724"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ya moga dapat lagi butuh nih",
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
            "b13e92fcc9bab6b8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet 🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9550871a19bb123c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "34e6ca6cb67d1719"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ayooo....kembali ke hati nurani masing2...pikir dulu sebelum bertindak...perbanyak ibadah....passti ada jalan keluar ter",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9719626b0ee0fe14",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca96492ecfea8d90"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Naaah....mulai kacau",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-985b4abcd3bd1381",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "50507c41a24d9ea3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lawan Ruben. .semakin diam semakin di injak² sm dia dan komplotan si ular Sarkawi .bongkar Ruben ..biar tau diri dia .",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-993e3de693456a64",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "21ea00e0c22e5873"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "cara nyambungin akun itu gimana kakak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a4472efe45f0b7a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9fee004be4ef122b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kan sdh 6 bln tdk di ksih nfkah  anknya. Dn pinjol muncul jg stelah tdk ksih nfkah . Bisa sja emang da pnjaman gk thu pa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9bf69e3519203432",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b6bab1e988ce278b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagus ruben lawan jgn diem mereka sangka kamu gak bersni skrg udh terbukti gak ada pinjol mantan istri yg sakit jiwa nga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c1654dca7ff2a33",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6bbf922c808a356c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga KA hji Ruben di berikan perlindungan oleh SWT dan di berikan kekuatan dan kesabaran 🤲🤲🤲🤲🤲🤲🤲🤲❤❤❤❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9de6be4e5c312785",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ac292e2d252860db"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "berempat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pinjol Tembus Rp105 Triliun, OJK Soroti Risiko Kredit Macet - berempat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ffdfd9b70697172",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f797c75fdb1b6f2f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sy dr awal sdh curiga SM si gio yg pinjam ke pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1a0b93dd3eaa454",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ce6cc7f1a887ecf5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Populer Ekonomi: Penyaluran Bantuan Beras Mulai 17 Agustus hingga Daftar Pinjol Resmi - MetroTVNews.com",
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
            "e2201368487f1eff"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BISMILLAH",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a2f20f76f1400f76",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4382c2849e469ef7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau bang..lagi tidak punya duit ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a3a8b5301357eb30",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f17a0331ade07a0f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sdh saatnya RO tegas jgn mau di injak\" org seperti s",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a46a107b7425e8e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9f5c7c3c56012e01"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Coba utk biaya kesehatan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a5bbe3458b0eb63c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "55ebb3846df72759"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "VIRAL! Sarwendah vs Ruben Onsu Soal Pinjol, Kuasa Hukum Buka Suara! #trending #shorts #viral",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a6656776206844d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "728b9f6864ff8d4c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "muhammadiyah.or.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Keluarga Harus Jadi Benteng Pertama Anak di Tengah Ancaman Judi Online dan Kecanduan Gawai - Muhammadiyah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a66cfed60f3366f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7427eb96a9953061"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gesuri.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Elvi Diana Minta OJK Mitigasi Risiko Kredit Macet Industri Pinjaman Daring - gesuri.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a70d19e9b5fe97e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c5ca626afc1325c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tetap semangat kak Ruben tetap minta bantuan sama Allah SWT y kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a78e9510487932c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "88f7e52c419e3968"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "stekom.ac.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Memilih Pinjaman Online yang Aman dan Terpercaya - Universitas STEKOM",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8c047824c5a9137",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "66a4950abbd9a4e2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dokter aja gak punya duit apalagi bukan dokter. Ngeri... Ekonomi Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8fc5eef3ab12aea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a8874b10ea35ad5e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Warga RI Tembus Rp 105 Triliun! - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aa26b9cda5a0a2d4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e02149a4bbd0a24e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "prnewswire.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Raih Penghargaan Top Company in Transparent & Responsible P2P Lending di Indonesia - PR Newswire",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac7def06faad66a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e2f6ea492908fe8e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang ruben sabar y bang semagat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac9b3f921392ae48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8648cbcf06062598"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ruben..kamu ayah ter the best..semua mendoakanmu..semoga dpt jodoh yg sholehah..yg mencintaimu & membahagiakanmu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ae4f03c0190bab66",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "670cfb7281e999ac"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ruben Onsu Bantah Terjerat Pinjol dan Tantang Sarwendah Lapor Polisi - BeritaSatu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aea1607cb02806b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8b6f1e12ec011c23"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Kini Wajib Laporkan Seluruh Transaksi ke OJK, Apa Dampaknya? - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aff78c58f20a397d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2824e5deb9d0e4a6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Resmi Terbitkan POJK Nomor 8/2026, Perketat Tata Kelola Industri Pindar - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b017a1902d0a4ee1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "43f7f680fd1de735"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum koh , semoga koh Ruben selalu dlm lindungan Alloh ya , semoga koh Ruben Alloh kasih sehat , kuat , sabar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b0d6dc212bb6cea1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1cef64f8987301fa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udah di ketik kok gk bisa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b11a0dcd14c0c992",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fb0dceef6823e1b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ekonomi makin sulit, rakyat kecil makin menjerit. Kl imanya g kuat, ahirnya jd berbuat jahat. Urusan perut tdk bs d tawa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b15b1e684a30d077",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "976261fbfb648a48"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b450db3cded3057d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "544ba7b659e83db0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KUR Tanpa Agunan vs Pindar, OJK Ungkap Peta Pembiayaan UMKM - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6f2133b6979c50c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5a3aea9a08849c07"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cek Daftar Harga & Fitur Mobil Civic Turbo Terbaru - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b7e4a249801cb697",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e079d1f9bbed07d5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "&quot;Disinggung Soal Pinjol, Ruben Onsu: Buktikan Kalau Memang Ada&quot;",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b91e40b36076ad5e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "88456331c958ef12"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau dana kaget untuk kebutuhan sehari2 kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b96f979f6e3c6817",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "70d2ca7664160419"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Doa yg terbaik utk bpk ruben....Aamiin❤❤❤sabar ya pak ruben....Allah tidak tidur",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ba7dcce2de79fa07",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2abf6d139d623c7c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah butuh untuk kebutuhan bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bbc0ca8fb1781575",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "10692e96916f9647"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pernah melewati masa2 sulit itu ...di datangi debtcolektor 3 orang berbadan hitam dan tegap ...tapi Alhamdulillah Alloh ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bd1cbcc6d69af53a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "939bcac51ef55447"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Godok Pedoman Keamanan dan Ketahanan Siber untuk Pindar - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be0509d703524a4c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6e90610c60a12ee0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rekomendasi pinjaman buat TKI dong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be2be022b290ea40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a28b198d4aebce01"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sungguh sangat mengenaskan😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be2f7f72facadb4a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96b857048f9e071e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat OM Ruben 🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be69e8796a9f7040",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "456b8b6cfc693222"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pinjol adalah tengkulak modern",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bfaaa7aa90bf9831",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db32b3b59dd71aa6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "UDL : Kenapa Terlilit Pinjol dan Banyak Hutang?  😱#ceramahlucu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c0fa4c977299e69c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "916be55c865292c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sarkawi sudah tamat... Sudah kebuka semua aslinya..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c25f93e12200f99b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a07093dd410a2142"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kasian banget kamu Ruben ...\nUdah diperas di fitnah , dan di sakitin SM orang yg ngsh mkn dan mendewikan kamu tapi msh s",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c3d4b1f8187144f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1cd593c38656ff52"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terbitkan POJK Baru, Perkuat Pelaporan Data dan Tata Kelola Pindar - SWA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c461b9c13ba3abbc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aaec49c6ec9446a6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bisa btu bng..bt bayar sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c46438e27c3eca8b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8bd61535ee63d19a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Masih ada kepotong itu bng  Lang sung kelimit aja",
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
            "465f7b368ac5ddc6"
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
          "id": "auto-ca16a7046a3eddf0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "66be27d2b274c974"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bisa pinjam pinjol kalau utang bank sudah menumpuk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cabe27b28f110d7c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e03a86946450bfba"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Warga RI Tembus Rp105 Triliun per Juni 2026 - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cbe3bba7da98319d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "10314452f66191c6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Utang Pinjol RI Tembus Rp 105 Triliun, Naik 25,88% - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cc42471d39c665f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f882fd727f6039a8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga pihak yang berwenang menganalisa penyebab dokter ini mengakhiri hidup dengan sia2 ....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd7cc2f4b5b86521",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cef8eba1c401d224"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami terapkan prinsip human oversight dalam adopsi AI - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d014d1f7bdf2111f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bf632bda1a2c647a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Porsi Pembiayaan UMKM Masih Rendah, OJK Minta Pindar Lebih Agresif - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0c7dffd006f3613",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a89e33ff5b939ab3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Semakin Tinggi, Utang Pinjol Warga RI Capai Rp 105 Triliun - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d4344974bda6c705",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b8d7935810d28a2f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum kak saya ingin mau karena saya untuk berobat udah subkreb",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d79d3c08665344e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3c81306e13167b08"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Di akun dana saya blm keluar bang malah versi terbaru 2.137.1 bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d8019a6f32efd648",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6bb933e88dc4df88"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Polda Sumbar Ungkap 5 Kasus Penyelewengan BBM Bersubsidi, Bi - Tribrata News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d923fff56f333441",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bf3c3058c30c7e4b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "onlinejambi.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Atur Pelaporan dan Permintaan Data Transaksi Industri Pinjaman Daring - onlinejambi.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d92bdc5c14f029ee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "23086ae180016802"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Astaghfirullah... nggak sepantasnya seorang ibu bicara asal ngejeblak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d9b8e4c44787e077",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aca44b42737497d9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Masya Allah.. Cuma mau ketemu anak2 nya susah amat... Merembet kemana2... Sabar ya ko ruben... ❤❤❤  nanti indah pada wak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db76e5943e1926d2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "99ef21c226189a18"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Wajibkan Pindar Sampaikan Data Transaksi Pendanaan - MetroTVNews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dc5972b58af41b5d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3b0f87d9062e0d9d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cerita Sarwendah Didatangi DebtCollector Pinjol #shorts #gosip #artis #viral #kicaumania #gosipkilat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-de931c3468c68312",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "15ddf17869d26d51"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insight.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Setrum Paylater Kian Terasa di Ekosistem Motor Listrik - KONTAN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-decf417ac8364a53",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c55e22f82a2a53dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir min pinjol ada yg bisa cair.kebutuhan mendesak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dfe0de13205439e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4124689f937d0029"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sw dn oengcara y sma2 tkang biong😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e0055f24d267e2f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e241e12413b1ad97"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalau ruben pinjol, hukum nya apa? Cuma mempermalukan saja? 😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e39bc1f888641cdf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5cbf4513f2947401"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dana Asing Rp 17 T Mengalir ke Pinjol RI, Naik 34% - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3b0c44298fc1c14",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "168a3373c3da38e2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "🫰🫰🫰🫰❤️❤️❤️🥰🥰🥰🥰🥰🥰",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e53fec56d187330e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "86101aa07f60817d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "aktualita.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pendanaan Lender Asing ke Pinjol Tembus Rp17,28 Triliun, OJK Soroti Risiko Kredit - Aktualita.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e6a0df7b7d9b500c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2a07e22cc92fdb16"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Preet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e74c5cb8d28e884c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "863f7e232590731b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jelas bgt kog dia ngomong padahal DENSu bukan lawyer malah ngomong nya lagi lagi rekening anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e81bfa9f55283c45",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "69176f97298d8ec4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : OJK Awasi 16 Pinjol dengan Kredit Macet di Atas 5 Persen Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e8627ba80e618a22",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "366d088e3c8161f6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "data sarwendah bocor tentsng pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed7b984e664c1418",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2bf9055316b866b6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga Sarkawi cepat kena Azab! Aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee26418324e89d0b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0277b4ac0f0dd3b6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK minta pindar perkuat tata kelola demi jaga kepercayaan publik - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef17e894b55c433b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "91aa70899effd29f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ruben Onsu Dituding Terjerat Pinjol dan Debt Collector, Nanda Persada Tak Percaya: Lucu Sih‼️ #short",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f01f14c1aa6d3861",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f6e547072057528f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mending lapor polisi dan temukan siap yg sebenarnya berbohong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f15715966f83d928",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "80736f67d3fbe021"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nah gitu dong, gak selamanya diam itu emas, mantap 😂👏👏😍🙌",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f3247ee843ae58b4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e83063766ff8794a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Awasi 16 Pinjol dengan Kredit Macet di Atas 5 Persen - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f35d82b21783cfc5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "acf0b3008287ea46"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "hukumonline.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Wajibkan Pindar Laporkan Data Transaksi - Hukumonline",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f36d287e0c0ee905",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7235af4a104f4f8f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bantu bang saya blum ada fitur nyaa lagi btuh saldo dana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f43b029a44cacea4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a923c45eea7b75b0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nanda Persada Tak Terbayangkan Ruben Onsu Foto dengan KTP untuk Pinjol, Sarankan Pinjam Uang ke Igun - Tribunnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f81bd750fd9d7f10",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b30a8fe582ae0db8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Beban Pendidikan hingga Pinjol Jadi Pemicu Dokter Alex Akhiri Hidupnya - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f880f5298ee86ab2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3ae45a4d1ec1b005"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pendanaan Luar Negeri Industri Pindar Tembus Rp17,28 Triliun - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f90c17f2d90e3e63",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c0a0dadf00325fb3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Fitnah ..udah panggil aja tuh si tukang tagih pinjol...sampe TK trbukti ...hati2...selesai hidupmu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f94f5a52ef861411",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d9b3e1ab22e9501b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pas dicoba gak ada fitur dana cicilnya min gimna tuh ??? 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f96872b84407b51a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6200fa5501cd630d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kumparan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dana Investor Asing ke Pindar RI Tembus Rp 17,28 T per Juni, Melonjak 34,18% - kumparan.com - Kumparan.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fbd5ae5b747cf8f9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "20632f81201e7e24"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Buka Suara soal Banding Kasus Dugaan Kartel Suku Bunga Pindar, Ini Updatenya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fbe0f403052cfca7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4d7134a2aef8b225"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Namanya jg menyanggah hrs dibujtikan dg bukti pak, Sarwenda sdh keterlaluan memghina memeras",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fd600d74967b7171",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c8509bcfc3c061ad"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat 16 Pindar dengan Kredit Macet di Atas 5 Persen hingga Juni 2026 - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fdf6b6e88dabb3b7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "164f9faa3dd12146"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sindir Sarwendah yang Trauma Digeruduk Debt Collector, Ruben Onsu Suruh Mantan Istri Lapor Polisi - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fec4aa11e7d57766",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "98f8fe3ba977346a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Resmi OJK Agustus 2026 Terbaru, Cek Daftarnya Sebelum Ajukan Pinjaman - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fef5838619c5d821",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "193a98899cf7c8bc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat koh Ruben. . .Allah slu melindungimu. . . aamiin 🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f380ef9ace3cfc2",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "8a17df4133a13344"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "riauonline.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pertumbuhan Pinjol di Indonesia Capai 25,88 Persen Secara Tahunan - Riau Online",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e1efbef46b359c7",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "ef973e4724148226"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK catat pembiayaan pindar tumbuh 25,88 persen pada Juni 2026 - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8ad739524352f324",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "43a1c89b718e0010"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kumparan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Laba Industri Pindar Tembus Rp 1,15 T pada Juni 2026, Naik 10,14 Persen - kumparan.com - Kumparan.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9eb7f7012e0be16d",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "ed0a846a6e650b26"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tumbuh 10,14%, Industri Pindar Kantongi Laba Rp 1,15 Triliun - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bf5f90262651c14c",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "7c1de663593dd094"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pinjol Tumbuh 25,88% Jadi Rp105,14 Triliun - MetroTVNews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-de7f2543e2636879",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "49276ac57ef3878f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Raup Laba Rp 1,15 Triliun di Tengah Lonjakan Kredit Macet - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e5b1b27606030aa0",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "e45ae573b498f2a1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Laba industri pindar naik 10,14 persen pada Juni 2026 - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef241a0d794f80a5",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "dc647ae412764389"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Tembus Rp105,14 Triliun pada Juni, Tumbuh 25,88% - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f1923dc0237881e6",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "41b4ceba9a73de64"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI: Credit Gap RI Rp2.400 Triliun jadi Ruang Besar Pertumbuhan Pindar - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "a25d8ccd84348a60",
        "e02149a4bbd0a24e",
        "8f6f1efbd0ea3497",
        "7f1cd3840df300ab",
        "ce6cc7f1a887ecf5",
        "670cfb7281e999ac",
        "e7cf3c8dd572a281",
        "fa8fdd9429b211e4",
        "b56ffd6157b5a296",
        "939bcac51ef55447",
        "c57298891d34bed8",
        "e714c151f3e7a95e",
        "ec77f689c3718b0c",
        "ef973e4724148226",
        "dfe0d380f76a6a0d",
        "f16b202a276f851a",
        "bc8c00e07f3d3184",
        "8a17df4133a13344",
        "8a3cb4084c531eff",
        "b6fb96d902d24111",
        "dc647ae412764389",
        "a8874b10ea35ad5e",
        "e03a86946450bfba",
        "a10cf43822197946",
        "b30a8fe582ae0db8",
        "5a3aea9a08849c07",
        "5483c58f3cea0f9c",
        "e1687112be967ac5",
        "7427eb96a9953061",
        "792d4c346048f4b9",
        "5f117fbde5ee029e",
        "2a358997a535aec8",
        "30c8674f3066682f",
        "bf3c3058c30c7e4b",
        "7c1de663593dd094",
        "43c9da75d3509380",
        "8602129812acfa9a",
        "c7dc454cca90ed37",
        "42ecdb88538f1660",
        "2824e5deb9d0e4a6",
        "88045a7dfc485eda",
        "0b4f498582838a17",
        "457b4a63cf37bf01",
        "cc9e7647409335d2",
        "1cd593c38656ff52",
        "1cdc45de8ce3427c",
        "acf0b3008287ea46",
        "99ef21c226189a18",
        "d9e03cf6832b06e5",
        "044030cb68b5c1cc",
        "86e51e10d297e837",
        "ac292e2d252860db",
        "8b6f1e12ec011c23",
        "9e6adbb218e7ee5c",
        "9eaea03ea06399a6",
        "a89e33ff5b939ab3",
        "8dad5f2ed8ef24e5",
        "71a194c77bb2f283",
        "e4ea69c343fb2507",
        "10314452f66191c6",
        "20632f81201e7e24",
        "427857dc4bf09b58",
        "88f7e52c419e3968",
        "5b53c98ec52003b9",
        "cc55c18f6d840678",
        "a3a812b6e3537c15",
        "26c0094da65ded11",
        "d4d7dc1bb5c7a128",
        "7f085fc057aca678",
        "6aaddbff5789db30",
        "7da7e7c99a9a797e",
        "dc0c5d213ed7bfb7",
        "0ed5b2fa5dc448eb",
        "d999f97a40e7d25e",
        "0277b4ac0f0dd3b6",
        "0589b13f773727c8",
        "ddd31cef59317972",
        "44f790ec636f2c4d",
        "f3f49be930d05c07",
        "7d187e91afc26781",
        "98f8fe3ba977346a",
        "242bd1104eb87c14",
        "bf632bda1a2c647a",
        "468fb02d5ee8c2ea",
        "b1c9192ae9b4e2fe",
        "164f9faa3dd12146",
        "c15ec90abce22ce4",
        "565d6065c00ea6e3",
        "b56930c042cfc57d",
        "f0a8795c39073006",
        "41b4ceba9a73de64",
        "cef8eba1c401d224",
        "0fd0c409126e104b",
        "19e2cf014e8c1174",
        "d81fbeb76c803c30",
        "b8ac3f9dc3efe071",
        "5cbf4513f2947401",
        "6200fa5501cd630d",
        "8ea006d0e97e9b0c",
        "69176f97298d8ec4",
        "371447bb1cea940d",
        "728b9f6864ff8d4c",
        "b98d4dee3e765b60",
        "b450276924c230d9",
        "a923c45eea7b75b0",
        "e83063766ff8794a",
        "c8509bcfc3c061ad",
        "0e287acb7451982a",
        "44621ef68391959b",
        "eadf327dde98ca30",
        "e45ae573b498f2a1",
        "3ae45a4d1ec1b005",
        "49276ac57ef3878f",
        "31bae92bf93bea7f",
        "ce0407ce958f66ef",
        "f8bc394ecbd2d92b",
        "416b0a92bf5f2fdb",
        "f9132c0799403a0d",
        "2ade6204f1a886a1",
        "b985ff6b5deb1716",
        "b745d1975a6c9257",
        "522416bd8322fb32",
        "484c4e5e7cc74580",
        "ec0f198c69f81b67",
        "86101aa07f60817d",
        "2d77a820142b5220",
        "6bb933e88dc4df88",
        "58023987b00fcfae",
        "910644f38d9d7fc7",
        "ed0a846a6e650b26",
        "544ba7b659e83db0",
        "43a1c89b718e0010",
        "15ddf17869d26d51"
      ],
      "socialItemIds": [
        "e079d1f9bbed07d5",
        "23086ae180016802",
        "b6bab1e988ce278b",
        "20f6fe31ac32ec01",
        "863f7e232590731b",
        "a07093dd410a2142",
        "9e1152890db9ad80",
        "50507c41a24d9ea3",
        "be09da38f531c2d7",
        "80736f67d3fbe021",
        "4d7134a2aef8b225",
        "dc53626384b15715",
        "f56bc62e537391e0",
        "cf9ed3076ef5d239",
        "8648cbcf06062598",
        "31f53bb83e1a1545",
        "bc0dcb0afe843fa1",
        "916be55c865292c4",
        "91c77ce715665bc8",
        "24836afcab428264",
        "f17a0331ade07a0f",
        "96b857048f9e071e",
        "d022781921b3a624",
        "2d8c06e68ba9d6c5",
        "bef6fd7fc35575cb",
        "f797c75fdb1b6f2f",
        "8119311bbd5624d2",
        "e7f853b0d2277139",
        "366d088e3c8161f6",
        "3b938ed2db436f6f",
        "9047c8b0fc417ebb",
        "d1ce8a5a3839779c",
        "43f7f680fd1de735",
        "e2f6ea492908fe8e",
        "8807c4c5a55d41b4",
        "451f0050b623fc9a",
        "ca96492ecfea8d90",
        "38c0459761612a0e",
        "f4f112065f762b2d",
        "6bbf922c808a356c",
        "c5ca626afc1325c6",
        "55ebb3846df72759",
        "56b952c4b66a169c",
        "4c0269dc67ec6329",
        "34e6ca6cb67d1719",
        "3b0f87d9062e0d9d",
        "66a4950abbd9a4e2",
        "6eb998836ac03ed0",
        "fb0dceef6823e1b5",
        "4c853b4f3f698da9",
        "7604b1bd76f93d65",
        "5f56c9ae32cf698f",
        "aba9cb5f425b2f53",
        "9f587207694e7752",
        "10692e96916f9647",
        "508522e20de13c31",
        "68a7442ce2276c91",
        "f882fd727f6039a8",
        "a28b198d4aebce01",
        "456b8b6cfc693222",
        "929a5092854e3ac9",
        "a06a3a18b10e6109",
        "e26c714b177f3fea",
        "54f7c0f188c53c7d",
        "6fe2272298855a46",
        "66be27d2b274c974",
        "a27716f99fcb1335",
        "8d1657756d66a37c",
        "465f7b368ac5ddc6",
        "9f5c7c3c56012e01",
        "70d2ca7664160419",
        "c0a0dadf00325fb3",
        "9381c21241975cb5",
        "bf41f5287a3f2cf1",
        "921691a71dda725e",
        "0b03c63d887f77e7",
        "a8086b68cf3723b2",
        "331e1a68f1172765",
        "f4df0f05c8557b42",
        "e241e12413b1ad97",
        "4bd824d7c4c1f330",
        "aaf65934840af278",
        "aca44b42737497d9",
        "f72c889403339f4f",
        "f6e547072057528f",
        "8525d9d51e39c822",
        "b565e08880367349",
        "193a98899cf7c8bc",
        "4124689f937d0029",
        "51e7241b61bd8907",
        "6e975097938e4ea0",
        "ea5350dd61f75c3c",
        "dacde5e95588ca70",
        "e2201368487f1eff",
        "affad8fd697e2e4f",
        "aaec49c6ec9446a6",
        "878bb71271710278",
        "267618135dfadeef",
        "9fee004be4ef122b",
        "097b22aadd7f5671",
        "2a07e22cc92fdb16",
        "91aa70899effd29f",
        "00ec78f4457313fc",
        "702f4fd12d296e2d",
        "23c45a7b41875483",
        "2bf9055316b866b6",
        "976261fbfb648a48",
        "db32b3b59dd71aa6",
        "996c20dd1f4448a7",
        "905054b86847dd17",
        "7235af4a104f4f8f",
        "629cdcfe4774f33f",
        "494760933a4943c3",
        "48228a12f4a8e038",
        "e849d89fdb192371",
        "3c81306e13167b08",
        "55ca539b434c391b",
        "c55e22f82a2a53dd",
        "8bd61535ee63d19a",
        "4382c2849e469ef7",
        "88456331c958ef12",
        "0edf64bd4536ddc4",
        "6e90610c60a12ee0",
        "1cef64f8987301fa",
        "3aa2485440bc01cc",
        "e5d92b6a85530724",
        "b8d7935810d28a2f",
        "0b6b11cecb043a81",
        "2abf6d139d623c7c",
        "08085671d1c9b9d3",
        "b6df3cfd147034d0",
        "ac7671378252e8e6",
        "0b6ccfad9f225400",
        "1613dddf25735c8d",
        "b13e92fcc9bab6b8",
        "22473c80bf50b64e",
        "48f7d38d3a13bb8c",
        "44c5a88496482da0",
        "21ea00e0c22e5873",
        "d9b3e1ab22e9501b",
        "168a3373c3da38e2"
      ],
      "_newsVolumeRaw": 133,
      "_socialVolumeRaw": 229.7
    },
    {
      "weekStart": "2026-08-10",
      "weekEnd": "2026-08-16",
      "fearIndex": 54.5,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 41.9,
          "volume": 34.1,
          "negativity": 51.8,
          "itemCount": 81,
          "negativeShare": 5.9,
          "uniqueSources": 58
        },
        "social": {
          "score": 56.7,
          "volume": 52.3,
          "negativity": 61.1,
          "itemCount": 170,
          "negativeShare": 39.2,
          "platformCount": 1,
          "engagementUnits": 248.2
        }
      },
      "components": {
        "newsVolume": 34.1,
        "newsTone": 51.8,
        "socialVolume": 52.3,
        "socialNegativity": 61.1,
        "severeEvent": 86.0
      },
      "articleCount": 81,
      "socialPostCount": 170,
      "uniqueSourceCount": 58,
      "socialPlatformCount": 1,
      "negativeArticleShare": 5.9,
      "negativeSocialShare": 39.2,
      "confidence": 0.656,
      "coverage": {
        "successfulChannels": [
          "google_news",
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
        "newsChannels": 1,
        "socialChannels": 2
      },
      "volumeNotes": {
        "news": "Pilot week-on-week ratio: 0.61x; 3/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 1.08x; 3/8 baseline weeks."
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
        "suppressedCandidateCount": 9,
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
          "id": "auto-051d60315d7adb56",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "43f14c44e74fea46"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Laporkan... Cari, tangkap proses hukum, penjarakan DC yang mengancam, intimidasi... 👍⚖",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-17aff9777e52cb85",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "0d0f4893f49e2624"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insiden24.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jebakan Manis Wanita 21 Tahun di Ciamis: Untung 10 Persen Berujung Teror Debt Collector dan Utang Pinjol - Insiden 24 - Insiden 24",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4953aa943e13016c",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "612c905393b3c2b3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap betul itu si tukang teror harus di tindak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bbadefa61981d56d",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "c818b65c8b3a30e5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sama saya juga....yg punya pinjol gua si teror pling rajin neror dari adakami",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f4011867114b9fe9",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "53ea9cf220a25c17"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penipuan awas , mereka memeras dan menteror korban .",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1890b7baa5b52e57",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "e79646953b28b294"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penipuan dan itu harus dibasmi penipuan Mbak tenang Mbak penipuan itu harus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-355282246d4ad63c",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e4cca59651c53a92"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Scam: Kenali Modus, Ciri, dan Cara Menghindarinya - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-933a1cede73958b3",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "90b1e8b32eaf8b40"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sindikat Pinjol Ilegal 25.000 Kasus Digerebek, Uang Rp 5,2 M Disita - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bda3d7c97be8c672",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "353150b61c4c7434"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.jatim.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Wakapolresta Malang Kota Bekali Mahasiswa “Tameng Digital” Waspadai Cybercrime, Pinjol Ilegal hingga Judol - Website Resmi Polri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ca1c5e079a04870",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "15db283e258f8f4f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tradersunion.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami perketat pemetaan risiko untuk menjaga TWP90 tetap terkendali - Traders Union",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53ab6464eb079e81",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "9c31ada38b130a1b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ini Strategi AdaKami Jaga Angka TWP90 Tetap Terkendali - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f9a8a0075eddea5",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "c3ae36f8026c3ebc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tekan Risiko Gagal Bayar, AdaKami Perketat Seleksi Peminjam - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-96b1f6b5373cb66f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "4da01eeef6cdd3f5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rakyat kecil ngutang pinjol galbay dikejar-kejar tapi koruptor yang ratusan triliun dilindungi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97a5f122f65eb0b4",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "55a9008da0ca9a70"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Download Loanpro Apk Pinjol Sfile, Loanpal Legal atau Ilegal OJK? Apakah Ada DC Lapangan? Pengalaman Galbay - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-addc61495802ba68",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "5f6c0dfe2c95b936"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "akurat.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Tumbuh 25,88 Persen, Risiko Gagal Bayar Mengintai Konsumen - Akurat.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bdfbacc7d3a8d047",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "b909071e17c41f20"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Tekan Risiko Gagal Bayar, AdaKami Perketat Seleksi Peminjam Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cbd03d6de7b9f0d8",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "b807953179a9647c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Perketat Seleksi Peminjam demi Tekan Risiko Gagal Bayar - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-de4a634d1f14fe47",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "1c7d13c47cd1ca51"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tirto.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Gagal Bayar, AdaKami Curhat Banyak Dikomplain Nasabah - Tirto.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-00f1753042eef052",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e13a005710a7b3e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Masa Ruben Onsu PINJOL Ga Percaya lah ?? #iisdahlia #rubenonsu #trendingshorts",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0129d372eaf39c39",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "28a9835dd7ef775d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nomor HP Bisa Jadi Pengganti Skor Kredit, Begini Syaratnya - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-03d8f3dfd6ffd43c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8dded0b58f76a251"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Melalui Kampanye Baru, AdaKami Fokus Tiga Hal Ini untuk Pelindungan Konsumen - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-040ebbf9e354fcfa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8992c613827125ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Intinya c Sarkawi SM pengacaranya SM\" gila HRs k psikolog mereka maen nuduh ruben segala kocakkkk🤣😂😅😆😁🤭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-045521bb22fcb5ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d3dac2a06dde502f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "akurat.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Buka-Bukaan Soal Pinjaman, Inilah Cara AdaKami menjadi Platform Pindar yang Lebih Transparan kepada Pengguna - Akurat.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0757cf45fb48677e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "df5fc6f298419a6d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau cari2 kesalahan Ruben gagal terus jd ngatur ini pengacara.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-077d13429593f016",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4e1712dfba9545b1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ujung2 ny yg pinjol yooo Sarwenda dn giok 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-078479060e95fb87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7853cd6a5f4fec29"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Itu scan nya di apk apa,?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-083abb648490c04f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b8249fcc44664eff"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga mungkin  KK Ruben punya pinjol olahnya Sarkawi aj  mau bikin illah   saya ga percaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0921f94459da007c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0e50ac7e6f71a7a5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Itu pinjol abal²...penipu...laporkan aja....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0b622cc4e8c2a33b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0193d1b5e9984357"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaasuransinews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nasabah Banyak Mengeluh Akibat Pinjaman Ditolak, Ini Penjelasan AdaKami? - Media Asuransi News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0b98a540532cff86",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b45e5e3a27093c07"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sarwenda itu anaknya dibikin kan tameng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d12d145601bec11",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "21ef03d58335f73c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Ajak Masyarakat Pahami Informasi Pinjaman lewat Kampanye Baru - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d8a19248294f88d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "268de05220447db5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gatau malu kok bisa2nya minta 200 jt perbulan ke org yg kena pinjol😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0db922799cfed2a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e738fc346aae154b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Boikot tukang bohong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e068e2702a40230",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8a356fa4debefa48"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat selalu org baik🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0fececaab822ed71",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b251d478f2bea25"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga rezeki nya lancar bng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-125e074769557a67",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8b71cb1e8c53095f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hebat Iis Dahlia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1270905b0c81f624",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "41bc65710eb4870f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Iis Gak Percaya Ruben Pinjol #rubenonsu #iisdahlia #sarwendah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1313f8f882c299fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "57f66b77690c3a5d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Msh usia muda sdh licik & rampok uang org lain, semoga ditahanan bertobat bukannya makin jahat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-13f605027121d968",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "207464d937493ef8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asalamualaikum bang semoga saya dapat dana kaget buat biaya oprasi anak 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-155d4474edf1e02d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "59917900c8dee996"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ENENG DAN SUSI PINJOL DEMI GENGSI 😂 @RbrainProject",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-160b1105852e95f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a3e8dd0a9773640f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sama aku jg gak percaya, gak masuk akal...Ruben kaya raya rumahnya banyak, hartanya banyak, emang yg pihak ono hatinya j",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-18e8335bba2ed5f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0905bf323d219985"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "adadimalang.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cerdas Finansial Bareng Dosen UM di Tengah Alam Terbuka, Belajar Kelola Keuangan Hingga Hindari Pinjol - AdaDiMalang.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a34ed2b68de8e58",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5a1293822bb2fd9a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ini teman sejati",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1be80cb05b8d7e60",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cff3bc62599110d7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalau seumpama pinjol dah di bayar mungkin \"data \" ny masih ada g mungkin g ada lucu emang pengacara si S ngebodoh\"in ne",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1bfc22ef5dd0b1ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a7269f0f445ece3d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, mau buat kebutuhan darurat apa daget ini 👇 https://link.dana.id/danakaget?c=sjubm6s",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-20647e90dd19b1d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "767358d7c81115f0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tekankan Transparansi Informasi dalam Penggunaan Layanan Pinjaman Daring Lewat Kampanye Buka-Bukaan - Jawa Pos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2246a5b87e718d6d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ff5e91b2cd4d35d5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "wkwkwn sarwe lagi kenceng, dia yg kenceng kita yg oleng wkwk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-224b23070d5d5fdc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ff839d2446a620ac"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan di bahas sdh masa lalu... Hello netijen gk akan bergaduh kalau rumor itu gk keluar dr klaten anda bapak pengacara",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-22cd911b3d31176a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4a337eb7bfe05a79"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Si lampu taman itu bikin malu gelar pengacara aja ,sekalinya ngomong blunder aja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-22fc9b9d53d8af70",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "644f8b985020ecd1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol Ruben 🤭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-240a4052807bdee3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "01e92101616324bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Shusi sama kak eneng ngeselin banget nyusahin Bae suami jadinya kena depkoleptor makan tuh pinjol kalian jangan pernah p",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-244fb07da1ce2cb5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d90c7c1c2bcf5ed4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Betul mami iis😅😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2460a0e92409087a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7ce6d6a88deb1fef"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "aktualita.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Teach4Hope Hadir di Pulau Boleng, 25 Guru Dibekali Penguatan Kompetensi - Aktualita.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-267d0a8085f68fa4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f1666264a76c5f33"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aik ngapa pak \npengacara pusing ngatain ngak apa aoa jika sudah dijelasin. masakan bapak ngak tau jika jika pinjam denga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-274b2c3b088c321d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8e30e5eef05bddb0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "surabaya.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Malang Tangani 179 Kasus Keuangan Ilegal, dari Pinjol hingga Investasi Bodong - Bisnis.com - Surabaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-28b5e20dd2bb9964",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1e579f8b64c462c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gak nyangka ternyata enda suka bohong dan tega fitnah jg ...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-294528cff5569431",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e012195cc4120719"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Iis Dahlia Tak Percaya Ruben Onsu Terlibat Hutang Pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-29a669940f66f7d5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bb328fa68636bfda"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Amin...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b1cd73647ff888f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "07601f072a9151b3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ada vt ruben pinjam ke  Igun 1 m aja lsg ditransfer",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f1053a1ec69aadd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "41d2b0ca8aaa9aea",
            "37f1974e835a9bf1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "rri.co.id",
            "timesindonesia.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Flux Creative Universe Raih 3 Marketeers Youth Choice Award 2026 - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f6308b24568bd70",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "abe34f6b7a86b1ca"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lah Ruben pinjam 1m ke igun 3 HR udh dikembalikan main nya Ruben itu ratusan juta milyaran",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-31e878068c18d9d2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "68519e7c793feb0a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makasih tutorialnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-349e6050401149d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "88afa5f5c8016330"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mana bang dana kaget nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-34f358b5b5158412",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ea20ff918f537d9b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "harianbhirawa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemkab Sumenep Tingkatkan Kemampuan Para Pengelolaan Keuangan Koperasi - Harian Bhirawa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-353faa20126f0a5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ca5cfc4ef29e3e19"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "selular.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Bongkar Lonjakan Pembiayaan Pinjol Hingga Tembus Ratusan Triliun - Selular.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-36c3464154c06383",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9ab8b38ceebd155b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabarsumedang.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ingatkan Mahasiswa Waspadai Pinjol dan Utang Digital - Kabar Sumedang - Kabar Sumedang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-38311ec8dfc94a9e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "42d43329b24e44fc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "D-tracker itu harus ditegaskan itu harus di harus ditangkap itu harus ditangkap dan diadili",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3930b9b505091787",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "48b751862f83fbd8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Betul bgt cantik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3bd5382d54d27785",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3e20080022747ca7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol cuma berapa tuh Ruben pinjem 1 m sm Ivan Gunawan langsung di kasihasa iya pinjem pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3c50e737ab6d5b3a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6e761ce887cbd3bf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "buat tambah biaya sertifikasi bnag",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d4e484cca0e4665",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "90f5dfdd131c4478"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tekno.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Daftar Pinjol Resmi OJK Agustus 2026 dan Cara Mengeceknya Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3e78cd88b8cabcc3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "276db7f6bb7f24c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yg munculin pinjol kubu sana, yg mo cuci2 juga kubu sana...😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3eb1f6e0cce8de69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b1d4ab8fca92b9d8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Utang kok bisa bulak balik ke tanah suci",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ff56b8dbac45a20",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d63fcfe529433f0b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarasurabaya.net"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Pinjol, AAJI Dorong Masyarakat Melek Finansial Sejak Dini - Suara Surabaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-408208394d128366",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c5f03918ae9d57e7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaasuransinews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Perkuat Transparansi Pinjaman Lewat Kampanye Buka-Bukaan - Media Asuransi News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4117b090d078ed31",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0276239569fa8f98"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar 94 Pinjol Resmi OJK per Agustus 2026, Cek Legalitas Sebelum Pinjam - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4130841654e6b60a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4d08e0a7582845fd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tekno.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Resmi OJK Agustus 2026 dan Cara Mengeceknya - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-438d84ec37c21a48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7a427fe94606a93d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sarwendah pengen menjatuhkan Ruben , dan sampe Ruben bangkrut, takut y perempuan tu ga ada lembut nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-43a354086e790104",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "388ab3567c94c38c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat gantiin lcd hp mamah🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45669945188d1f62",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f9efbcacee2b505d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat bayar kontrakan bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-458effafdecb2a58",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7656d3ad3b0a0b61"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sarwendah Sebut Ruben Terlilit Pinjol, Iis Dahlia: Gue Tidak Percaya - BeritaSatu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46e263d4cfa94cf7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "397a8b920a2fce73"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamu'alaikum bang buat bayar kuliah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-472ab03942341ae6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fcb5de89da2a443d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tiap hari si rupiah cepat telepon cari mangsa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4903c6122256eb75",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "409cc623df5afcaa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aneh nya kok pemerintahan dulu nya membiarkan agent2 pinjol di perbolehkan dan skrng judol2 banyak iklan nya di mana2 di",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49486a0c43905d6d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "107cddcc73287cdc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Otaknya selalu penuh kebohonhsn  seorang ibu kok penuh kdbohongjangan sampai snaknya sifat kayak ibunya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4967a6d26eea3076",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "54ed7fcf1762a46e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cara menghubungkan akun dana ke E-Commerce",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4a6761e0bdbf26d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "40d072151c0dbab2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hukum mati aja, orang kejam kaya gtu. Suruh ganti rugi dan hukum mati.Merusak masa depan orang.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4a990eccea19ea8e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dff31dad862bf894"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mau Pinjam di Pindar? Perhatikan Hal Ini Dulu Agar Tak Boncos - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4b0df8c101c7dc31",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d455de86d97ed478"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "alah tark gk bisa linya sya hrs pake kode otp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4da5e451a69625b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c003eebeada9214f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Seharusnya pinjol juga harus d Cek dulu benar apa tidak .",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4de416eef5d0df44",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a807c6c436c2189e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bekesah.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Judi Online dan Pinjol Jadi Pemicu Utama Keretakan Rumah Tangga di Bontang - bekesah.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4fb072c6726160f9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "75846adf5f7a3eeb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ini Saran Pakar Keuangan Sebelum Ajukan Pinjaman di Pindar - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-50b070947d57c67a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9839eb5e02ed83c7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aturan hukum di Indonesia hrs BNR BNR tegas alias buang ke Nusakambangan gak ush di kluarin lgi untuk org org sprti itu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-51b5a1b3302e9bf2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f501c92a66ee0d46"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya sedang mengikuti seminar di bandung cihamplas, di google form suruh nyatat no ktpnya, ini di selengarakan oleh seor",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-52bf716c1cddafb4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7e47ec508de8347c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "yg salah siapa ni .. KTP orang buat pinjol biasanya foto orang yg di KTP TDK sembarang pinjem wajah haruh sesuai yg di K",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5494c81710260f73",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fa346aee4dc17fbb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Flux Creative Universe Bikin Beasiswa Emas BINUS Jadi Jawara, Bayar Kuliah Pakai Emas? - disway.id - Disway",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-54f0924ebaa2289c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7c479896eb8b3161"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga percaya aq juga mam 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5794120c9cbc70bb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d3b4db0d11e2cde3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ayo teruskan, emang pinjol² sialan ini wajib ditutup.\nsaya sering jd korban dari orang lain yg jadiin kita sebagai konta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59850ab727a8abc8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "06683628675158f1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Perketat Seleksi Pinjaman Tekan Kredit Macet P2P Lending - Readers.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b6b60cdb892ad0f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "79554c2805c568f3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "buanaindonesia.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Telat Bayar Pinjol ?, Siap – Siap Rumahmu Kebanjiran Orderan Ojol Fiktif - buanaindonesia.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5d112dd252a67e12",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8248f8b741f51f05"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Apa nama aplikasi tambahannya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e2bb4cecb0724ca",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8cca962aed943923"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Apl tambahan nya apa min",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e34b36da68edecb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d07a2fcf700c5187"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kan ad buktinya ..pinjami dong kak iis",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5ede74b6507a8504",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "79115e23d22fd960"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kerja yg benar,. jangan merugikan orang lain.,tega bener 😮",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6089f4b5996f4ad4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "924e080de8b1931b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "style.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sarwendah Tuduh Ruben Onsu Terlilit Pinjol, Iis Dahlia Tak Percaya, Bongkar Keuangan Jadi Artis - Halaman 2 - TribunStyle.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-61c3d32e160f2f4b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "53586e52ff1910dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Link apk tambahan nya mana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-622c7a4ea8c58d50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5c15a9d8199a5f77"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DATA DICURI UNTUK PINJOL! 15 Orang Jadi Korban Investasi Bodong di Ciamis",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63825f8a8d9f8611",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "356241b0f16e4471"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Si ndah mah emang tukang fitnah n pembohong !!! Kayaknya si ndah sendiri yg hutang pinjol tuh !!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63e2563b7ce8eafc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7b57beaf5036625f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Pemerintah Hapus Kelas 1-2-3 BPJS Kesehatan, Beralih ke KRIS Mulai Agustus 2026 - Tribrata News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-64221f738a9abbdb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0a8f8c817cb65c25"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TERBARU 2026 DANA CICIL TIDAK BISA DIGUNAKAN SETTING INI:\r\n👇👇👇\r\nhttps://youtu.be/2nhEwKyRnQM\r\n\r\nLink Daget ada di dalam ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-668699efdba62301",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5660097216bbc2af"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga sehat lancar selalu mass",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-682b7187c263fbc8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b8048fad80ae72b0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sekbernews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pinjol Capai Rp 105,14 Triliun Juni 2026 - sekbernews.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-698491a2beb00ec4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "540a522ef90b6568"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Walau udah dibayar, pasti ada catatan nya.kalau gak ada catatan nya berarti fitnah.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6a2a752dd2b317f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b58c8a70e91fa94"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Enak banget tuh si Ogah abis fitnah orang, trus nggak terbukti, trus dengan santainya dia bilang 'sudahlah....itu cuma m",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6b9760ca65c2e84f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "05af6dfa2d127045"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gw baru bangun lho bang.  Nyawa belum ngumpul dah dibikin ngakak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6c504176ea8567d6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "367e55a03b6db2d4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jahat banget hukum mati woi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6cd08f3959cf5b61",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8fb74d2d93e17bc4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mumet setoran pinjol sama seperti bank keliling orang sunda bilang bank emok.\nPinjam 2 jt cicilan tiap minggu harus ada.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6cdc854e003ade88",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9ebe47badbc397d5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dasar pengacara sama kliennya sama2 stres dan tukang bohong cari2 kesalahan orang dan ga mau mengakui bukti2 yg ada , sd",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-704678e17373bb2f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2de50cc6b69fe8de"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "PINJAM SALDO DANA TANPA DANA PAYLATER DANA CICIL - PINJAM UANG DI DANA - PINJOL MUDAH CAIR 2026",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-72eb8edbf5959809",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a3f16b07067d5308"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "knp ga muncul juga bg aktifasi fitur dana super cicil nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7411b0f1c32d4f73",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3e8836a6e6d0b608"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Iis Dahlia Tak Percaya Ruben Onsu Terlilit Pinjol Seperti Tudingan Sarwendah, Ini Jawaban Savage sang Pedangdut - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7421f028d9c74093",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "808cd1801ec3c08b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nextren.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Buka-Bukaan, Ini yang Wajib Dicek Sebelum Pinjam Dana - Nextren.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-748001600cc723e2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3da03eb632ae1ad5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bissmillah  kak untuk  bayar lest anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-75babdca116c0c78",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f4f05aa557123592"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Betul banget ustadz manusia yg kurang bersukur",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-75dc14f944cd1b87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2beb0ad9e3df6138"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompas.tv"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "MA dan OJK Gelar Diskusi Aset Kripto dan Pinjaman Daring di Jakarta | MA NEWS - Kompas.tv",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-76841310ee26e34e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a7840be3423c822f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ruben Onsu pinjol 🗿\n\nngakak😂🤣😭🤣😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-77954e8cbddb82c5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1e895cc422222417"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penjarain biar kapok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-78601f5e964ae70f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3b6660a66475b915"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Katanya.. Calon nya CEO 1000 ruko.. Gemana masih mengharapkan ...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7a176298103fa09a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "244a0f7ddf0e59c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bubarkan saja segala jenis pinjol\nSangat meresahkan masyarakat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7c2f159d345160e2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1a206296fa8aaca1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nama nya track record pinjaman itu ada walaupun sudah lunas BAMBANG😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7cd6b758c613c37d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2e169eab62fcf587"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Paling yg pinjol itu sarwendah /Gio, cuma pandai memutar balikkan kata saja😂😂😂, kita orang awam aja faham lo siapa ruben",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7e9bd61f941536c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b438a98a0c481186"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lintasnasional.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Program Teach4Hope Latih 25 Orang Guru di Pulau Boleng - Lintas Nasional",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f1342e07095de89",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7e997db54f032dbb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "marketeers.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Perkuat Perlindungan Nasabah lewat Kampanye Buka-Bukaan - Marketeers",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f6a4f549a53accf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fe2374427b214a09"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Bongkar 3 Informasi yang Wajib Dicek Sebelum Ajukan Pinjaman Online - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7fd12d05ab6c2a01",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e4d8bf643189c813"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mudah2an anak2 nya liat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8135549ca0c84bc6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d0f80f567998d8b6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bubarkan pinjol dn lising",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-82d17de98e645cb7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "46d65068930836a5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya mau bang,untuk beli baju n tas sekolah untuk anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-83c93d9348724536",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f818406ff8820386"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jahat sekali orang kayak gini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-83ef1e70b01da9ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ff53dc441946698e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami memastikan aturan tentang transparansi sejalan dengan OJK - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8455468ef2ac322d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ae1c0b2b8c35a14d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bukti tagihannya doooong, sama atas nama siapa, di cctv tempat gua juga banyak bang bukti kayak gitu 🤣 banyak DC bergero",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8623a94be5c9cb9f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ea947e27ede28566"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum terima kasih banyak bang infonya selama ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-864c329eb351e5c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b7ec4209b9518c04"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gak ada link tambahan, yg ada malah di suruh ngasih kode OTP wa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8737c61273b5d673",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "74763f017843c162"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini mah pinjem ke allobank bos. \nBayar cicilan ke allobank.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-876e0b976c8eba9b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3c113aa9f6c56128"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Belum ada bank lain, hanya bisa di allobank",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-885a177b87a6c1ac",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "12b2cc88e102928f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pengacara koplak.... \nAyoo dong jujur jawabnya, jng ikut arus maunya SW. \nTerbukti gelagapan waktu ditanya, siapa yg pin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-89718ecd924f830c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9aed9c628706e5d2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sikat teh jangan takut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c6847220c67546a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d0de29e5fe80c07d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jpnn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Flux Creative Universe Borong 3 Penghargaan di Marketeers Youth Choice Award 2026 - JPNN.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8cd182ea9090f80e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "781789425ca76927"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cara aktifkan akun e-commerce Gimana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e21198d06dccba7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "efad90ca3014c460"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Samsung A31: Spesifikasi, Harga, dan Tips Beli - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e50fe957b55357f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e522868c6baf254d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sy tdk pernah percaya pd S ..yg mengatakan pinjol nya Ruben ...krn ratu pembohong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e746fa2e98384fa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b497a36f78c903c9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lanjutt Proseess",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8ee824e64b062659",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ae0b2a7559747c91"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Netizen kg percaya KLO koh R penjol kexataanxa yg bilng koh R,penjol kg tau dirixa yg judol mkaxa 200jt,kg cukup judol h",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-92edeb6528a54dc5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "00d09e375df620a4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Laporin aja mba...  biar di tutup pinjol nya. Karna sudah mencemarkan nama baik mba",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-92f0865d0dbc69e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db2b62d13d82a058"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sama igun satu milyar ajh dapet ngpain minjem pinjol \nLogikanya d mana????",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-932f48f294a1ce3c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a2344606c95c1673"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ngeles teruuuuus 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-94856f34d35bfb66",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e7087deb857552d2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Iya. Kata2 si s Di dgr boleh percaya jgn😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-961e491c03ae2b37",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f4a3c1998ae2788"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Usut tuntas biar riba tidak merajalela",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-98320e5129061a64",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0371a6cc8a0f78d9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Banyak yg artis\" juga anaknya dibiayain cuma 4 JT sebulan ada yg 2 JT sebulan ada juga yg gak dibiayain tuh ,mereka msh ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-99e7cabcf23c259a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "054b242c10716d5a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "postingnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Aturan Baru Pinjaman Online 2026 OJK Berlaku: Batas 30% Gaji & Bunga 0,1% Per Hari - postingnews.id - postingnews.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a1d38b06e329d02",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fe9d40f8295606f0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Siapa temen2 Ruben.! Ada.. Ivan G, Irfa H, Ayu T, Wendy, Raffi A, Ramzi, dll. Klw jk Ruben ngutang pasti di pinjamin lah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c2625a5099f8f14",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f41cb225bb72f879"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarlampung.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Deretan Pinjol Legal Berizin OJK dengan Tenor Panjang, Aman dan Anti Jeratan Ilegal - radarlampung.disway.id - Radar Lampung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9f50893a51687114",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "55dd4c32c7ac46c1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pembohong....pembohong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9f6455088ae21f6a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "62530f087f51c8cb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mat malam bunda cantik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1d6957c66425216",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "50693e73c5536e69"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga bisa tutor nyah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a21c0254be5982a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "72794c810d063ff2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya pernah ditipu 15juta pelaku asal taraju tasikmalaya namanya penipu itu akik hidayat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a2a917eccbe5939b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7b9a3c8ef62410e9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Apa salah nya coba siapa tau",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a3731434bfdeac79",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3bd1686be84ed774"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Galaxy Z TriFold 2: Rumor Rilis dan Speknya - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a43dac143b04091d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0ee57d3f95e12060"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Satu bulan lalu, di terminal Leuwipanjang, pas sy mau ke naik bus ke Bogor, ada seseorang mau  pinjam HP pura2 dia gak b",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a44ab2e82d25336f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4faea1e365a393c8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ko malah minta no opt wa ya?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a5252e1c00b14c58",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6c5990a07e509df4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediakompeten.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pinjol Capai Rp 105 Triliun Juni 2026 - MediaKompeten",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a5892cf6cf7b7d6d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1c769043ef1905f2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jakarta.suaramerdeka.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Flux Creative Universe Raih 3 Penghargaan Marketeers Youth Choice Award 2026 - Suara Merdeka Jakarta - Suara Merdeka Jakarta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a6463cbb022a65c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "02ca67507a13af28"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Fitnah kok maksa , gak ada bukti Ruben hutang pinjol kok maksa !! Orang hutang pinjol ato bank sekalipun sdh lunas dibay",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a7d61258bb01da9d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b0f0269992f7ea7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Di hidupin ruben. Tapi sarkawi malah ngidupin mokondo ceo cabe merah 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a7db3fff39dac3e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "67e3fb106694e90c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaasuransinews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Asuransi Kredit Fintech Lending Bakal Diatur OJK, Begini Respons AdaKami - Media Asuransi News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ab0d700220eaaadf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6b94b3b6d1a97f18"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kemarin koar\" punya bukti lah nggedabus 😅😅😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac150e76c3ed8583",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3afd7d3354d76558"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Beberkan Tantangan Implementasi Asuransi Kredit Fintech Lending - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac59086bea2db298",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "33756b99b6a6aebe"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol di Sumbar Tembus Rp 1,49 Triliun, Warga Mulai Sulit Dapat Kredit Bank - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aece91eb7f3c2661",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "097c4ea6b0720d79"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semlarat \" nya Ruben masih diatas rata\" dari rakyat biasa, kalau sekelas uang jutaan aja masih adalah..\nTiap hari Lo jua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b01ebfc0d770cdf8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f391194467e08614"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini lowyer nya si Sarkonah ni klo ngomong waton njeplak wae cangkeme.. senenge ngeyel mung arep nggolek i salahe RO tp A",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b249d967ad93ca40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "88cc0be90738be72"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gilak jahat banget ini orang,,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b3c1ba76da2c52b0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0ac6a8016fde0c81"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sebenarnya walaupun iya pinjam itu juga bukan urusan kita, yg penting bisa nyaur, netizen ribet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6b4e5fb79ee33d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "27dc7275893e7a9f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tempo.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perencana Keuangan: Pinjaman Bukan Sekedar Soal Cepat Cair - Tempo.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6cdc613ed6d9932",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4cc0bc7c68e26f71"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sy dukung kk untuk laporkan pinjol...penjarakan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b86e60598761ed64",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "971ceecf302d7298"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pencarian ka klo yang ga punya koneksi pasti cuman bisa nangis dn parah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-baa154193e5bf802",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "31a3a4b491b02052"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gmna cara nya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bf015e3cf45595de",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ad5c920198048fea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pak pengacara, kalau bicara itu pakai data valid Jangan asal berucap.. Semua orang bisa bicara  sembarangan dong kalau b",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bfa00494f713f1d8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fb317118fa02e733"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Perketat Pemetaan Risiko Jaga Kredit Macet Tetap Rendah - Readers.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bffbf8ec2f3e11ab",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "00432492f4b70528"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gak bisa gitu juga pak\nNama Ruben harus di bersihkan\nKarena yg bikin huru hara itu Wendah...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c1840122b2a7a9e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3af94db33a2d23b0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar MEKAR Dukung 133.000 UMKM, 89,2 Persen Pembiayaan Produktif - Kompas.com",
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
            "b60bdf592ffa53bf"
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
          "id": "auto-c5a4bd49dd9040a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c9dcef8c63c85fc4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Haduhhh dah kehabisan bahan buat jatuhin Ruben😅😅😅😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c6eca163cf0b3190",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "197d58ab24fae9a6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Coba denger dong sw , malu dong , sdh mantan byk nuntut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c7dbfbee5483a20a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4dcf7261deecd5ec"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buktinya kasih ke Ruben dong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ca49eb68c15e2064",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ab26120a1b691b4a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Awasi 16 Pindar dengan Kredit Macet di Atas 5 Persen - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cacd6213b4963c07",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f8ab0deaeda8b88d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Biadab skli wanita pelaku ini, bkin org menderita harta n mental, dia yg enak2 an. Hrs dhukum berat n dimiskinkan utk ga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cadb0e6ea989733f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2694a3e87bfc9c58"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kenapa banyak penipu yg berani ya karna hukumannya ringan.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd196ca68dd2bcdd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b1fbcc1f71d6ec62"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "parahyangan-post.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Program Teach4Hope Perkuat Kapasitas Guru di Pulau Boleng, NTT - Parahyangan Post",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cede486336017669",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ffec1016804625d3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Takut diusut ya yang utang pinjol siapa😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf7f626ae9a04a98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9b2c345b1cb42d1f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "APPI Curhat Soal Penggunaan Jasa Debt Collector, Ini Alasannya! - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d073484416e3da43",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "210d0a6187d922ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pencemaran nama baik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d11c3d8cb0144c25",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "845cac8e9bc7fdfa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "aplikasi tambahan nya allo bank klo lihat di video ini,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d39a20f98f087949",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f953467a4af44849"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sukabumi jg banyak yg ditipu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d4511107a8cc0804",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1a1eb299ae0dac07"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Boikot .\nBohong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d4df3d55fcb159ed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "73d78a9f44b60553"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sarwendh 😂 ngarang...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d50f45daa871d2aa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c4379a9d0abc8595"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "moga dapat buat benerin rumah atau ngasih ke nenek",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d5ab9e57b7c46fe4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "47ea4d7499fdf668"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Beberkan Peran AI di Industri Pindar, dari Credit Scoring sampai Tangkal Fraud - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d60fe1f61141da1c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1283184f0f419507"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😅😂 prakiraan cuaca",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d91198e0ab450386",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ccbe499804c2845d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami sebut Industri pindar pilihan sumber pembiayaan masyarakat - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d9443883936c2217",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "419004a3a3de87dc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hukum seberat beratnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-da43897b288c7dc0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "51403f24ea5b2305"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "harianbhirawa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Antisipasi Banjir, Adhi Karya Normalisasi Sungai di Bandar Kedungmulyo Jombang - Harian Bhirawa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db75a3e2d8a02adb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5a807c82cf061f6a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Framing, bohong, fitnah. Itulah kerjaan sarkibul dsn komplotannya.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dbeecd282475c05d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "27a3959f1cce969c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediakonsumen.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Transaksi Top Up DANA Rp2 Juta di Tokopedia Gagal, CS Kredivo Hanya Memberikan Jawaban Bot yang Tidak Nyambung - Media Konsumen",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dca5af02486ca1a3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7e7741c9a5a74073"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mobitekno.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lewat Kampanye Buka-Bukaan, AdaKami Dorong Transparansi Pinjaman Daring - Mobitekno",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dda82320f6bd093d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b32551e7653c5965"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Fintech Perkuat Transparansi Biaya Pinjaman - Media Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-de1526116d1d109a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a6f9fb4b9e430393"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Segera boikot. Kami ngga percaya omongan sarwono sebab ngga masuk di akal dan logika kami ! Kami tidak mengakui sarwono ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-df69739606419ca4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0ce976367f6db26f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau bang \nBuat biaya anak istri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dfca27eab742ce5b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "41ce9ee4ce24b477"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum lagi butuh banget bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e10a116d77fda05a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1ec95828af291cef"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infomalukunews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Teach4Hope Hadir di Pulau Boleng, NTT, Dorong Peningkatan Kompetensi Guru - Info Maluku News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e2f78a9501e7c411",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "45dd93419e7402db"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "🔥 Sarwendah Dirujak Netizen! #sarwendah #rubenonsu #viral #trending",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3b0c44298fc1c14",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2146ff3395ef0004"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😭😭😭😭😭😭😭😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e4084e85e2e83137",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ce958c913918c2ec"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalo pinjam kek dana balikin duit nya berapa bng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e499acd5961877c5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c84acb9164e42e0d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "penabicara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kapolsek Tamansari Bobby Mochammad Zulfikar Didesak Usut Dugaan Penganiayaan oleh Oknum Debt Collector - Pena Bicara - Pena Bicara",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e692d4222ede430d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "edb86067fce6a014"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Butuh uang buat beli hp bang 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e80049bd326d9a22",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c996e4d5b77e1e4a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sudah di bilangin si saritem ini tukang ngibul manipulatif...makanya jgn di telah mentah2 tuh,...kecuali para pemujanya ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e8484b426181b105",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8ee1f7e54a56866f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagus bngt bunda.. sehat terus bunda iis❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eaec9e706902c36d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c5c034188309b732"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aplikasi tambahan apa namanya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eb0ce072756078bd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7fa297be3057e49a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "joglojateng.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "BNI Kudus Peringatkan Dampak Tunggakan Pinjol terhadap Riwayat SLIK - Joglo Jateng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ec7ddff697f555ba",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a3668c9054e29715"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dia nuduh ruben pny pinjol kok skrg kok disuruh abaikan krn masa lalu, biar sdh dibyr akan terlht statusnya, jgn lari pa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed1a448e2d01a2b7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d1d19b1cf43fa369"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tp kok ada buktinya,KTP ruben",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed417579116bccdd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "046d9a96885d6ce1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SARWENDAH itu sengaja menahan anak2nya untuk tidak diketemuin sama Ruben.\nBiar uangnya tetap bisa dinikmati dia juga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-edd71a95125303c0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1a702c2d9b05f772"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bg gimn cobain gk bisa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f1095b868f334c40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "17b84b92f5041310"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarapantura.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Top Up DANA Rp2 Juta di Tokopedia Gagal, Tagihan Kredivo Tetap Muncul - Suara Pantura",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f3ef7358d97fa910",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0af1ad2909bec683"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DC PINJOL DIKASIH PAHAM ARTIS FTV PADAHAL TAK PERNAH PINJAM⁉️ #beritaterkini #trending #fyp #shorts",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f43931e72697e3a5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a50aa5b406736862"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemerintah udah begitu banyak keluhan masalah pinjol dari masyarakat tapi pada diem ngga pernah ditanggepi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f471288ed8327cc8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2872440efdc3fc8c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": ", Usut wendah .....pencemaran nama baik RO",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f5a25ee1145ab38f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f4417ea5cd48e569"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Dorong Masyarakat Lebih Cermat Pahami Pinjaman - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f70986adf8ca01eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "61dc6c8d6dc1cc55"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "JGN PERNAH PINJAMKAN HP SMARPHONE, WALAUPUN 1 MENIT, HP ITU SKRG MULTIFUNGSI BISA SBGAI ATM, DAN DATA RAHASIA.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f7cf5422153c3ac0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8855147b3a0ea7ad"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sarwendah otak e konsket kopleeeeeer",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f8166a0907f0368e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3aaab9055afec456"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kok kenapa dana super cicil nya  gak \nkeluar ya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f8b048801d87cc56",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e594d57d06fe5b3a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ngomongnya blm sebulan, kok masa lalu, walau masa lalu ada datanya, apalg Ruben terkenal g mungkin d hapus sama pihak pi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f93dd7be9fcae726",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4b140cf82723b540"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjolnya Ruben ke Raffi Ahmad,irfan hakim,ivan gunawan,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-facf6738dec89104",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bf1efca3bd442d88"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hati-hati saat orang minta KTP tanpa diketahui maksudnya, karena modal KTP bisa buat ambil pinjol‼️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc8dada6207a8539",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "386b9bafae12910f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bloon alias O'on dan O'ong lu pade....Memang siapa2 yg membela org yg pesugihan ikutan gitu modelnya ....UNBELIEVABLE 😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fcf7ca8f24b6a469",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b48b8326bd078c06"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "S itu tukang bohong ..banyak netizen tdk percaya",
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
            "e7a8e0bcd233d30f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "prioritastv.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tagihan Pribadi Ganggu Redaksi dan Awak Perusahaan, Cara Penagihan Kredivo Dipersoalkan, Pemimpin Redaksi Lapor OJK - Prioritastv",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-085cffd165425ce5",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "96e41ee72d86cb4c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tradersunion.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami soroti transparansi saat permintaan pinjaman fintech lending terus tumbuh - Traders Union",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1880e392b495a356",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "9a5b2675f2d68d49"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Permintaan Pinjaman Tumbuh Subur, Transparansi Informasi Fintech Lending Jadi Sorotan - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c41cdbfe55731f05",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "0191ab4c79ad8e10"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "afu.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pinjol Makin Berkibar, Laba Tumbuh, Banjir Modal Asing dan Bank Himbara, Rakyat Tambah Menderita - AFU.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f7a2e2b637bc300a",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "b8ee4201b6c4379b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Pertumbuhan Ekonomi Bukan Tujuan Akhir, Prabowo: Kesejahteraan Rakyat yang Utama - Tribrata News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fb35f0ccc98ed6eb",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "08964356d4f80f4e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Ekonomi Indonesia Tumbuh 5,45 Persen di Semester I-2026, Tertinggi dalam 13 Tahun - Tribrata News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "0276239569fa8f98",
        "3bd1686be84ed774",
        "0191ab4c79ad8e10",
        "2beb0ad9e3df6138",
        "ab26120a1b691b4a",
        "33756b99b6a6aebe",
        "9b2c345b1cb42d1f",
        "4d08e0a7582845fd",
        "f41cb225bb72f879",
        "90f5dfdd131c4478",
        "3e8836a6e6d0b608",
        "9ab8b38ceebd155b",
        "7b57beaf5036625f",
        "7656d3ad3b0a0b61",
        "924e080de8b1931b",
        "79554c2805c568f3",
        "21ef03d58335f73c",
        "7fa297be3057e49a",
        "0d0f4893f49e2624",
        "a807c6c436c2189e",
        "3afd7d3354d76558",
        "ea20ff918f537d9b",
        "fe2374427b214a09",
        "808cd1801ec3c08b",
        "b807953179a9647c",
        "06683628675158f1",
        "7e997db54f032dbb",
        "ff53dc441946698e",
        "ccbe499804c2845d",
        "51403f24ea5b2305",
        "67e3fb106694e90c",
        "1c7d13c47cd1ca51",
        "b32551e7653c5965",
        "b909071e17c41f20",
        "75846adf5f7a3eeb",
        "dff31dad862bf894",
        "0193d1b5e9984357",
        "47ea4d7499fdf668",
        "ca5cfc4ef29e3e19",
        "5f6c0dfe2c95b936",
        "b438a98a0c481186",
        "b1fbcc1f71d6ec62",
        "1ec95828af291cef",
        "c3ae36f8026c3ebc",
        "767358d7c81115f0",
        "17b84b92f5041310",
        "27a3959f1cce969c",
        "f4417ea5cd48e569",
        "c5f03918ae9d57e7",
        "d3dac2a06dde502f",
        "d63fcfe529433f0b",
        "08964356d4f80f4e",
        "41d2b0ca8aaa9aea",
        "7e7741c9a5a74073",
        "8e30e5eef05bddb0",
        "27dc7275893e7a9f",
        "b8ee4201b6c4379b",
        "efad90ca3014c460",
        "e4cca59651c53a92",
        "90b1e8b32eaf8b40",
        "7ce6d6a88deb1fef",
        "353150b61c4c7434",
        "054b242c10716d5a",
        "fa346aee4dc17fbb",
        "d0de29e5fe80c07d",
        "37f1974e835a9bf1",
        "1c769043ef1905f2",
        "8dded0b58f76a251",
        "28a9835dd7ef775d",
        "3af94db33a2d23b0",
        "e7a8e0bcd233d30f",
        "fb317118fa02e733",
        "15db283e258f8f4f",
        "96e41ee72d86cb4c",
        "0905bf323d219985",
        "55a9008da0ca9a70",
        "9c31ada38b130a1b",
        "c84acb9164e42e0d",
        "6c5990a07e509df4",
        "b8048fad80ae72b0",
        "9a5b2675f2d68d49"
      ],
      "socialItemIds": [
        "07601f072a9151b3",
        "bb328fa68636bfda",
        "41ce9ee4ce24b477",
        "48b751862f83fbd8",
        "d90c7c1c2bcf5ed4",
        "388ab3567c94c38c",
        "f9efbcacee2b505d",
        "b8249fcc44664eff",
        "e012195cc4120719",
        "41bc65710eb4870f",
        "d07a2fcf700c5187",
        "3aaab9055afec456",
        "0ce976367f6db26f",
        "8fb74d2d93e17bc4",
        "2e169eab62fcf587",
        "3e20080022747ca7",
        "4b140cf82723b540",
        "4da01eeef6cdd3f5",
        "db2b62d13d82a058",
        "8855147b3a0ea7ad",
        "73d78a9f44b60553",
        "0ac6a8016fde0c81",
        "097c4ea6b0720d79",
        "fe9d40f8295606f0",
        "d1d19b1cf43fa369",
        "b1d4ab8fca92b9d8",
        "5a1293822bb2fd9a",
        "a3f16b07067d5308",
        "4e1712dfba9545b1",
        "397a8b920a2fce73",
        "9839eb5e02ed83c7",
        "8ee1f7e54a56866f",
        "46d65068930836a5",
        "0371a6cc8a0f78d9",
        "3da03eb632ae1ad5",
        "edb86067fce6a014",
        "54ed7fcf1762a46e",
        "197d58ab24fae9a6",
        "5c15a9d8199a5f77",
        "2b0f0269992f7ea7",
        "7c479896eb8b3161",
        "31a3a4b491b02052",
        "bf1efca3bd442d88",
        "8b71cb1e8c53095f",
        "3b6660a66475b915",
        "abe34f6b7a86b1ca",
        "88afa5f5c8016330",
        "9e13a005710a7b3e",
        "62530f087f51c8cb",
        "ae0b2a7559747c91",
        "2de50cc6b69fe8de",
        "644f8b985020ecd1",
        "046d9a96885d6ce1",
        "a3e8dd0a9773640f",
        "b45e5e3a27093c07",
        "8a356fa4debefa48",
        "0a8f8c817cb65c25",
        "6e761ce887cbd3bf",
        "7b9a3c8ef62410e9",
        "207464d937493ef8",
        "3c113aa9f6c56128",
        "f4f05aa557123592",
        "74763f017843c162",
        "7853cd6a5f4fec29",
        "61dc6c8d6dc1cc55",
        "79115e23d22fd960",
        "53586e52ff1910dd",
        "57f66b77690c3a5d",
        "f501c92a66ee0d46",
        "01e92101616324bb",
        "356241b0f16e4471",
        "f953467a4af44849",
        "e522868c6baf254d",
        "d455de86d97ed478",
        "845cac8e9bc7fdfa",
        "b7ec4209b9518c04",
        "88cc0be90738be72",
        "40d072151c0dbab2",
        "4faea1e365a393c8",
        "2872440efdc3fc8c",
        "409cc623df5afcaa",
        "8248f8b741f51f05",
        "8cca962aed943923",
        "ea947e27ede28566",
        "d3b4db0d11e2cde3",
        "f8ab0deaeda8b88d",
        "244a0f7ddf0e59c6",
        "42d43329b24e44fc",
        "0af1ad2909bec683",
        "9ebe47badbc397d5",
        "a3668c9054e29715",
        "02ca67507a13af28",
        "00432492f4b70528",
        "1e579f8b64c462c0",
        "268de05220447db5",
        "c9dcef8c63c85fc4",
        "419004a3a3de87dc",
        "f391194467e08614",
        "8992c613827125ba",
        "0e50ac7e6f71a7a5",
        "f818406ff8820386",
        "ff839d2446a620ac",
        "cff3bc62599110d7",
        "6b94b3b6d1a97f18",
        "b497a36f78c903c9",
        "00d09e375df620a4",
        "43f14c44e74fea46",
        "612c905393b3c2b3",
        "df5fc6f298419a6d",
        "a2344606c95c1673",
        "ad5c920198048fea",
        "a50aa5b406736862",
        "12b2cc88e102928f",
        "53ea9cf220a25c17",
        "e79646953b28b294",
        "1e895cc422222417",
        "a7840be3423c822f",
        "b48b8326bd078c06",
        "7a427fe94606a93d",
        "72794c810d063ff2",
        "4a337eb7bfe05a79",
        "4cc0bc7c68e26f71",
        "ffec1016804625d3",
        "fcb5de89da2a443d",
        "8f4a3c1998ae2788",
        "276db7f6bb7f24c4",
        "d0f80f567998d8b6",
        "c4379a9d0abc8595",
        "e594d57d06fe5b3a",
        "971ceecf302d7298",
        "c818b65c8b3a30e5",
        "c5c034188309b732",
        "1a1eb299ae0dac07",
        "ae1c0b2b8c35a14d",
        "4dcf7261deecd5ec",
        "781789425ca76927",
        "5a807c82cf061f6a",
        "e7087deb857552d2",
        "367e55a03b6db2d4",
        "1a206296fa8aaca1",
        "107cddcc73287cdc",
        "c003eebeada9214f",
        "50693e73c5536e69",
        "5660097216bbc2af",
        "9aed9c628706e5d2",
        "c996e4d5b77e1e4a",
        "7e47ec508de8347c",
        "45dd93419e7402db",
        "1283184f0f419507",
        "1a702c2d9b05f772",
        "386b9bafae12910f",
        "e738fc346aae154b",
        "59917900c8dee996",
        "68519e7c793feb0a",
        "0ee57d3f95e12060",
        "a6f9fb4b9e430393",
        "2146ff3395ef0004",
        "f1666264a76c5f33",
        "b60bdf592ffa53bf",
        "1b58c8a70e91fa94",
        "05af6dfa2d127045",
        "ce958c913918c2ec",
        "2694a3e87bfc9c58",
        "a7269f0f445ece3d",
        "55dd4c32c7ac46c1",
        "210d0a6187d922ce",
        "1b251d478f2bea25",
        "540a522ef90b6568",
        "e4d8bf643189c813",
        "ff5e91b2cd4d35d5"
      ],
      "_newsVolumeRaw": 81,
      "_socialVolumeRaw": 248.2
    }
  ],
  "articles": [
    {
      "date": "2026-08-03",
      "title": "5 Pinjol Terdaftar OJK yang Tawarkan Bunga Rendah - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPRC1RNXFKYjhBZGF1Z001cmZmc0tkVDVkNFVyd2hlTmV4dkd6UDFDdnFjYzZFQVdQWUJGT016ci1OcVRqRnRvOGZYQUJxUU94TVF1azQ2anZVQjFINzdCU1FuMUZrbHV6M1B0cGNyYWdRU0p0a0EwakFNdWYzdWRMMnR1c29kS1VwOXNvQ2RjOUFEUQ?oc=5",
      "publisherUrl": "https://video.kompas.com",
      "source": "Kompas.com",
      "summary": "5 pinjol terdaftar ojk yang tawarkan bunga rendah kompas com",
      "id": "a25d8ccd84348a60",
      "domain": "video.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-86d60e488e265ae1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-03",
      "title": "AdaKami Raih Penghargaan Top Company in Transparent & Responsible P2P Lending di Indonesia - PR Newswire",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQbnp2ZE00c2JPNGZ4cFFaUDhsZmh6Y0VYdmFZaXBZM0lnb3VJcl9uS2tsQklZYmpzei1VczhSRDJScE5OdWtDTzlzWjlkLUdHSEk1bE5wVmxuZENiYkdIb2d4M0xrcmlCVlBVWlhvOHdpRVE2WnZ0bGkyN05pSmNSdU9IYzFkNlBkY1pUdjFYRW1GNXVBNTJXWldFeXhhSWZFR2Jla2tUZXF3WmsyMkprYlEwNm1VVnZDYmpxYXA4WHdhZTlSYUp6Z0dBYTRGRkpkTFZHYUZDSjNrZmg0V3lrZQ?oc=5",
      "publisherUrl": "https://www.prnewswire.com",
      "source": "PR Newswire",
      "summary": "adakami raih penghargaan top company in transparent responsible p2p lending di indonesia pr newswire",
      "id": "e02149a4bbd0a24e",
      "domain": "prnewswire.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aa26b9cda5a0a2d4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-03",
      "title": "Geram Dituding Terlilit Pinjol hingga Isu HIV, Ruben Onsu Ancam Polisikan Penyebar Hoaks - ntvnews.id",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPTTYtcFFUdGlZbkxSdzRPUEFVUVZlWElXbHl5N3A5ZnJ3R3pWazdQSnJNWUQtRXYtSElZeFBwek1LMTVUXzFaOVFvT2F3MGlPR0lLSVp6UFJuZDJ3cU5DeE1iYmh3amd5OEhQY2J0elV5THZDZXJUTjU2U0dnWS10OGdOblRDQXBKc2pINkZuUjExa1BzUEctRlgtd2tXWEFETVJtLWVLSng0dGZieFRxUW9wY0RGcHJJU3o1ZHVWeUNFOU5sRGc?oc=5",
      "publisherUrl": "https://www.ntvnews.id",
      "source": "ntvnews.id",
      "summary": "geram dituding terlilit pinjol hingga isu hiv ruben onsu ancam polisikan penyebar hoaks ntvnews id",
      "id": "8f6f1efbd0ea3497",
      "domain": "ntvnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5897da1420fcf54e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-03",
      "title": "Interpol Terbitkan Red Notice terhadap Syekh Ahmad Al Misry atas Kasus Pelecehan Seksual - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOaS1SS2FPb0RuV255RGFiTm9vUVhMUlBtRTZEYWxiUXBmSU5KMjFHb1l6QW5BTHdfTUFMZGNKSlhKRmhJcXZTcWVPWU01dXpUcHRTcnVtVmZSYUlMUDVtU2h6dkMtb0RWOHRKN1ZnSEdGazliU3FNTHlQT21ZTlBZS2JjdE9Vdmo1a2NTMDB6Ni03MUFGX05fWTIxOVk3QnY0SHFoYWZtSWM4cGJRNGt2NW9nVHVGeWJhaDBuV0R2eXEtZFhzcm1XOQ?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "interpol terbitkan red notice terhadap syekh ahmad al misry atas kasus pelecehan seksual investortrust",
      "id": "7f1cd3840df300ab",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-54813847f49ea67e",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-03",
      "title": "Populer Ekonomi: Penyaluran Bantuan Beras Mulai 17 Agustus hingga Daftar Pinjol Resmi - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNOFpOTG1JWUVDa0FpdjNwaFlzeVVrZEFDdFlfXzAtZno1WGRsRENvalNDUG9nMkVfZHJray16ZVR5YUJKSVFUbm83NGpCT2ROeTJXLXAwQ0g5UWZ5eXp2WURUakxzaXdxV1RzdUJWRmZzOXpqWWQzYVphaU04QjFMbVZLS3ltTDRURVlBOTJEc2M3cU1zZmxvc1JfZl82amN0RG1xcW54Zm1jOFRXMVpqRkZkdnczcUowZTBHSjMtVE9jQmYx?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "populer ekonomi penyaluran bantuan beras mulai 17 agustus hingga daftar pinjol resmi metrotvnews com",
      "id": "ce6cc7f1a887ecf5",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1a0b93dd3eaa454",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-03",
      "title": "Ruben Onsu Bantah Terjerat Pinjol dan Tantang Sarwendah Lapor Polisi - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQVXdwdnV4M1FfaURNYUFRWE5VUi10cUV5NzNEQjN1T3hyRG9ELVFubG1VNnNaSjZPbE1IMzZVd0c2azlXQWc3eXZfYmV3Y3AxeEx5N0R2NTFZUExvTVZLUXhVYlRMU1VJVk0wQjhRcVlCS0tfMGJBNmNzR0drV3dkbnFCMXlIYmdhV0NIM2xOS0FYTlhsNGgyeEZfLWRmVTdpdzZRc0tyVmg1bkxsYmxnaThnNA?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "ruben onsu bantah terjerat pinjol dan tantang sarwendah lapor polisi beritasatu com",
      "id": "670cfb7281e999ac",
      "domain": "beritasatu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ae4f03c0190bab66",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Ada 11.126 laporan pengaduan \"scam\" dan pinjol ilegal di Sulselbar - ANTARA News Makassar",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPcXowNVlpY0czcWtOYWtUVzZMNG1QT2toVWJLRWxsTVFKTXgxYkxrR0FPb1lRU1NaNVNLU2doU0VJZFZKSXdTUDhFQmR4NXR2c2MtRDAxbVUtclhVRFhfWFRJbTRJb1Vmc2RQNVlsTGg5UXFIaGxqd0otX3lyV3Zfb2JkWThhZlpJNEtxMk1PdnNUTGNiOUJvT3V6cDFLNzIzTFAzRU5pWlIwdTFkX0E?oc=5",
      "publisherUrl": "https://makassar.antaranews.com",
      "source": "ANTARA News Makassar",
      "summary": "ada 11 126 laporan pengaduan scam dan pinjol ilegal di sulselbar antara news makassar",
      "id": "e7cf3c8dd572a281",
      "domain": "makassar.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 75.9,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6905edae25d2e6ac",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-04",
      "title": "Aturan Baru OJK: Pindar Wajib Lapor Data Transaksi, Perlindungan Data Pengguna Diperketat - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQcUw4NWExWFNLVnpQWk5OZVVneU81dUpvMmlNNHRhY3NTcXdmZUpPa0xoaGYxV2JnUm5EbkxQbkZhaTc5c1hwUkNSZlI0RGYySi1sOHZmbWNNNnFjZU1kVEQxRkVqN3VwVWJKWnRHTGJXNWJIVTBPcU9OSXZyYjNjaDNOaVdfNXp3Tk1VY2ZHVzVSUmxiNTJJZjV1VG91UEptNEhtZ3hfdVY3NjhDSFNQMzhXb0I0Vml6M1RWV2M4X2NvNGJZMEhQTg?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "aturan baru ojk pindar wajib lapor data transaksi perlindungan data pengguna diperketat investortrust",
      "id": "fa8fdd9429b211e4",
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
      "eventId": "auto-0972251998e01243",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Foto : Risiko Mengintai Pindar, OJK Susun Pedoman Keamanan Siber - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQZnFFQnh3alhyMVExQmhXcTQ5V093U2UyR1AwNDRmU3M5MHlpNXd4bDZOd2djbGI2OTdoUHRNdGFNYjNPWWlWTWlSUHJJYnA1a2V3WmUyU21CNkczMGZlSThEVVVhUmZCa2JxSHU4U2xZTVZKMVFkN0dWbUNjYzZ3V0c1bzhBbEVoVmg2RmNpbGxvSUQtTFhLSVd4OU5lUVBzcEkxYWQ4TzBsX0kt?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto risiko mengintai pindar ojk susun pedoman keamanan siber kompas com",
      "id": "b56ffd6157b5a296",
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
      "eventId": "auto-3c7f298a4cb9ff91",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "OJK Godok Pedoman Keamanan dan Ketahanan Siber untuk Pindar - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQRDR6SWo4OEpPeWNBWjhYaVg2b2tzQ3lmRGdJb2VSSlZsRGtaVmNBZlBuOVVnNHF2SWZtM2dBdkxlamNXMFJOSHVJZVB6MEcwcktzY2x2aFVwNnZOUVd5Y2h5REFRWjRpdmpycGhfeEtMWHMwWlRPWEZPUDNaWG9HLUJyV2NTaDhYOTJnR3lpWkN0S3Utc1NMMVVYR3ZhSTdFQ3Fz?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "ojk godok pedoman keamanan dan ketahanan siber untuk pindar investortrust",
      "id": "939bcac51ef55447",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bd1cbcc6d69af53a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "OJK Maluku Gandeng BKKBN, Bentengi Keluarga dari Pinjol Ilegal dan Judol - Tribun Maluku",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPTVpMN0RVMVhRc19DNEpOZklPRkp3MXhRWUpTM3hkWnlaaWJsUVJESGhoR3VDQkVxbXEzVUlzY0J4OTZHcWVDbnVWSm5ER3BSb2h5Z3pSNnFPVDIySjdDQ2wxMmg1QmN2aEF0X05Jc0tkWFp2QzFjWHZGZkk0Sy01aXlLdWVvUnZxc1F5SThsZm9JUTJtSWVPQVA5eXh4SlBsT3RYSjFRYllEX083?oc=5",
      "publisherUrl": "https://www.tribun-maluku.com",
      "source": "Tribun Maluku",
      "summary": "ojk maluku gandeng bkkbn bentengi keluarga dari pinjol ilegal dan judol tribun maluku",
      "id": "c57298891d34bed8",
      "domain": "tribun-maluku.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-524c6f1e8c0decc2",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-04",
      "title": "OJK Panggil Kredivo & KreditFazz Soal Penagihan di Purworejo - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPV0dUM3NOZGRnTjFpMTYtV2xZUUNUY0taYjE0UF9jLTM0VnRmcVZCVWhva0VSYnY3Yms3ekx0amJLSUhPbkVWQV9mTF9rMkFhN09aekNmZG5GdTA3QURHR25HNzltVkFxNTFsYkVvSVRFNHJVekVUemR0MXRrU0ZuaS02bDR6SkFxcVQtZ2NDampldERMaDgxZktLSnlWSXJFeXRIVmRQQVZKdFh3cTdMUHVSRmtSak44YVN1Z9IBwgFBVV95cUxQTmxocUhYNkpiWnNZQmo5RzZxTmoxLWVldkFDMXFpZkQ5bDJrckxlbzNBVUVzX29DZms4a185Rm5hR1lobTZoR25QYy1FbGZtcUtwZXd2RkJpM3l0eVhXbFlnekFiNkRZOFpGbGFIS2pzV0ZsdjFEODhFOTQtQXQ5TmZkTXYtaEIyNEpTeUJETUhYemc5OURKV2xnanphRVZla0d1aUZNWnRpTTNOcGRFczdzeXF5NHNSaFp4NTFaNzZiUQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "ojk panggil kredivo kreditfazz soal penagihan di purworejo cnbc indonesia",
      "id": "e714c151f3e7a95e",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 66.8,
        "label": "mixed",
        "negativeWeight": 2.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-08-04",
      "title": "OJK Tutup 951 Pinjol Ilegal Sepanjang 2026 - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQb1hqWk1KQ3lWdGhZWWhVeGVEOXJRRmkxNlh0Vjl2aFM1cUFWajU1b3k4RGxOSUdjWFVkM0dKVVM0TUJYSXlBUHFVWHZYQ3Uxd2RNMU9XRTRmZnZ1THVPemZjZGdTNXRYeThPenBWNlBheFZfUFo3VS0xeUJwbm1ZMHlkYnRvc21reFRETURtMFZyRjFQeG1MX19aNVBQZ1F3ajZ1bmhuYUvSAa4BQVVfeXFMT3JuVVpLR1h0WUdHZmhXazNVXzVaeFVualRTeDF2eTF3YXBxQk5jMUpFYkt6WEozSV93dVJNSXhYRkdPeS1jcWRhZUVkZWZfVFR6cmRuVTJmb2F3LUdCTEFFR0k0ZjZxRHpUMVhONWhZdlN0V1RMU1c2RnlaTGp3Qjl0S29FQkZsdFhaRjNkblE5cHVvdlBSZUg0OEN5VHVibHk2VzgxS0hyYXEtaktB?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "ojk tutup 951 pinjol ilegal sepanjang 2026 cnn indonesia",
      "id": "ec77f689c3718b0c",
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
      "eventId": "auto-fad2ad2622d3d90b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-04",
      "title": "OJK catat pembiayaan pindar tumbuh 25,88 persen pada Juni 2026 - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQMWRNSEpfNFh0OC1kVHFmRkExdGhlWC1Wa2xxUGdRRS1GRmRETzhzWmphRGNMT3o2Q2piRDRKUHYxSzJURFY3MGZiVU5CNkVBVVpZTFZJOVB1alhOWUw4R055bUxFZFJ3clU5aXdBNm9HWXVKMk5YVS1TQ1lrQnJ0TFpRV2pHdVVJMFQ0c2hsZTFZWUNVMW9lYWlqNzRMVGdZaFBIYkRB0gGoAUFVX3lxTE0zUXotRDBYcEt5b3cxTE9Ob2F5d0lFeTlsNlJFZG0wTTAzRTBCWUZRZ2JqNG14dGtJZ3dxNmxoRVNIWGlZNWNZVWFKek9jTS16aGRSYXdZb3QzZWNEbnhhTFNRMFdqalcwRmNLQmNWODV0b1dWeFJkelM3bDZkS195WmJVRVN1YVdDS0tRdWJfNDBNcXpBQVlvblZFZGFMUVVaTnMwaHIyNQ?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "ojk catat pembiayaan pindar tumbuh 25 88 persen pada juni 2026 antara news",
      "id": "ef973e4724148226",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e1efbef46b359c7",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-04",
      "title": "Opsi Pembiayaan Geser ke Platform Digital, OJK: Utang Pinjol Masyarakat Capai Rp 105 Triliun Per Juni 2026 - VIVA.co.id",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOalphdGNTZkNoR2pKRDhHamJEbElLU2wzR3U2MWFnc0RQRU5RaXRMOTRENUxVNTBzVWdmaTVXWlFORFN3bjRxVVVNaFZYZlJUNXh3aGhzTFM3M01aNXVSMFZKTEVrWU5nbHFqNFBpYlRFX0VGMVZoMDhJWGtib1NxX0s0ODRVZlB3MW56ajFWdklMdGI5UDMzNTB6UERTaXNMT0RJeEFNMmRhZVp0amNmMHRCcDlzQ1BIOEpVMXpHci1JVmp6d1JHMVNPQzF4WENiVk8zQ01JQnhKQdIB3wFBVV95cUxPazFwUW8yYkF2SjlwN3dDeHpTZXFkMFYwTDU1dmhJeG12dVBWSlNLa1BDNzNjMFNjN3lzQjYyR0ZRSVR6VjEzT3ZrT29GZThIN1JwZGd3UkdwSEVfYThuNUxVd2xObWZmOGlYams5c3pqTkpkMU9fYTRHM2hBcksteTBhblhfbDlVY1llZnJ2TGM2cGpPYU5DdzZlaXdWOTNiV2hFbkUyanZPMWdZSC1FWUNHTGdTY01tc3RNMWZYV2VHZWVaTEs3TmJjbFFYdnFmVlYtRkRQcGJWNGdWVW9v?oc=5",
      "publisherUrl": "https://www.viva.co.id",
      "source": "VIVA.co.id",
      "summary": "opsi pembiayaan geser ke platform digital ojk utang pinjol masyarakat capai rp 105 triliun per juni 2026 viva co id",
      "id": "dfe0d380f76a6a0d",
      "domain": "viva.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-218217146461ef7f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Pembiayaan Pindar Tembus Rp105 Triliun, OJK Siapkan Pedoman Keamanan Siber - AFU.id",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSGh5ekRIRC1jMFdrQUZ2RjlpRkhxM3lVWGdRV0s5TUJYU29tMzBJRmVRSy1sZVNIandvbFE1LTlpLUhjdUtKbElUcGo4dkNlTUFKUU03eERTZVNUcENSUjFqU0UxUUxpaWFUam41RGpYTURBUG03NXpEeFVBUG9OaDdJOFctOV9tM3ljdi1CcHJ0R1l0NkwwNnIwMmc?oc=5",
      "publisherUrl": "https://afu.id",
      "source": "AFU.id",
      "summary": "pembiayaan pindar tembus rp105 triliun ojk siapkan pedoman keamanan siber afu id",
      "id": "f16b202a276f851a",
      "domain": "afu.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-61e8b610b1cf2700",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Pemerasan Modus Kencan Sesama Jenis di Medan, Data Korban Dipakai untuk Pinjol - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQWUxmc0RsVm51YlZDWHdrRUMzMWdGZ2x3VmlIQ25SaG5zRDEzQ2ExNEJKYzJiU25IWDk3OWl3XzUxZUhtLTBqWFRlVkg3Nko2S2dNWjIxT01pVEozbVJRWS1VdmZHcmVBR1d6aUw1eTZORnpzODc0V0dXSVJ2eW1JUmRoMXNDTnJUb0hSUlEtdHVOTms0TUtnUTg1VEZrblVDTk1GekJ4MWZIREhEaTlBakVia3gxWUNsMmtJTEFDbXpWcE9xeFFJ?oc=5",
      "publisherUrl": "https://medan.kompas.com",
      "source": "Kompas.com",
      "summary": "pemerasan modus kencan sesama jenis di medan data korban dipakai untuk pinjol kompas com",
      "id": "bc8c00e07f3d3184",
      "domain": "medan.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-877e67858794bf67",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Pertumbuhan Pinjol di Indonesia Capai 25,88 Persen Secara Tahunan - Riau Online",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNUFI0WVlId3AtdDRWdDB6TFh2WllNYTVLRjg3WERLX3AwQzJJMHZ6M1VtbDBCeVRmdUx1NDlISXoxaEpienRtTmIzT3VMTC1UaHVXRUpNTDFTVGpCRDlxTEFzVWtTem02dDNkaEFRTm82d2V3eC1pR2dhNmtlTGJTN3Z6X21LcGxzMVc0QUJ2UVkwWE9yQXFfQXphZG5lMlJDUDh0N0RfUjZNelRMWHo5SURXQmdkbmhJNnc?oc=5",
      "publisherUrl": "https://www.riauonline.co.id",
      "source": "Riau Online",
      "summary": "pertumbuhan pinjol di indonesia capai 25 88 persen secara tahunan riau online",
      "id": "8a17df4133a13344",
      "domain": "riauonline.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2f380ef9ace3cfc2",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-04",
      "title": "Satgas PASTI Setop 951 Pinjol hingga Investasi Bodong Modus MLM - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPbFNZVUJ5d2ZuT29Md01rZzk5YnNERTBWMnZnc3RXWklDN2FNRldpU2QwNmhTRWJVeHNEU2sxRVNXME9ad1U3UnRvTnhzWUlPWUNlX18zM01KVFhKcmdscml4c19iR0JPWUtfcnUxRjhGdEdRSEtra2lERnhCRHlOUmY2bHh6SGlGMkZPeThuTDJmd29JUTNmTDk0Z29QM3Rja29RbnRlQ05sQmMyZUdRTkxiXzNLRkpOXzh4V3JKSGw0NWfSAcgBQVVfeXFMTjdPRWg0TmhHanNJSE50dEYwOThQeDBYdG1JY0RWRTF3cm1yTk1oR1lFZWlCVDNlYnhrM21aTFJyU1E0aGl5ZWViTV9yZ2NuelVQdVFJbzBwbUxIZEhyVWZnRGg0YnBLaUUta2FJdFpxdmx0OWwteFZjbENLMXg3LThEVUcxOE54TmQ3enhLWktLV19BU19yQjBIWWZHMTRXWFhwcDc1VGhWNFJuNGgyQ1pybXh5T2Rfc21IcFBLNXY1Mm5tTTl1NlI?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "satgas pasti setop 951 pinjol hingga investasi bodong modus mlm cnbc indonesia",
      "id": "8a3cb4084c531eff",
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
      "eventId": "auto-2f50bc695b0ce7d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Total Utang Pinjol Warga RI Tembus Rp 105 T, Melesat 26 Persen Setahun - kumparan.com - Kumparan.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOcUU2UTdPOGRyeWNWV18waDk5WXo0Wm9tMTEzekhmRDJMTUdXNEV2ZGhzSWYxZlZ6bXFkYWhhcnNWTXE5cTVrc3dNMEFjbGVlQkhFUlpwelJ5QUVGS05faG8xS2R3M2N0Uk5OVi1mVVFjM09XTHFSakFNcUNwNHRnbVd5S1Etd3M1RWZWY1R0c2YtbmFxZTdaWWE4YU9Da09hT1duZG13Zkd2NVVpOVFiVk9PWU1tMEdT0gHAAUFVX3lxTE4xZllwUnlUd2FtUVdFWkMyeEdXR3pRdDBIaVk3ZkFYMHBjM296NXlKMUJCWk1ZbzIzV2o5bllfTGlxLTBKZ1hESmgzT3VsaE1mSE15TE5fVHBhOWt5WVR6dUtmcm5jWnhlaVh5WVh1NGkwaDZGbzVmSkVXWklweU9kV3plMlZVUmZlQUtGNU4yN08xNlpWUDV6ZGhmSEZ2U0t5RTJINm9SNERsbGVfZHBGVVpVY0NuQU53SWoteHBqXw?oc=5",
      "publisherUrl": "https://kumparan.com",
      "source": "Kumparan.com",
      "summary": "total utang pinjol warga ri tembus rp 105 t melesat 26 persen setahun kumparan com kumparan com",
      "id": "b6fb96d902d24111",
      "domain": "kumparan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2be3ac63f5ddd3cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Utang Pinjol Tembus Rp105,14 Triliun pada Juni, Tumbuh 25,88% - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOTlZld3lMbTRFcTNIWjV6QlVpRHRCUE5PZkNONnVPVkhtZ3ROR3ZZQjg5YzBxRGM1c1RuR0hRV01wQkVpUVhLM0ZfQk9IX3lDZ2NvYVpnMExSc3Q4c2x4V2otNkpQMFNhbVlxbDRoVnBzdC1tbTl2RnVQb1lNeklIY3JNNjAyc3hVaEtsSnh6X21EclJUQjBRTElURFg2eUxtOHRnaGRVNkRpZU02TV9CRA?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "utang pinjol tembus rp105 14 triliun pada juni tumbuh 25 88 bloomberg technoz",
      "id": "dc647ae412764389",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 47.2,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ef241a0d794f80a5",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-04",
      "title": "Utang Pinjol Warga RI Tembus Rp 105 Triliun! - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQVUN1YndfbnpvYVd6TWJHODFBa0cwNkJBbG92b2pNNndZeFVPZUFuUUIyRUw4UWpLNkRRbVNOVC1aWWM4WUJVNFloU2VscXA0V1dwNjIxUFVRVDhuaFljUmhZYkJMa2JrVkN6UndNX2NUdXlhQkNDNWlUUGRoOExHMHVweHlkaExxaU9uWGpRSVXSAZYBQVVfeXFMTk5QSVIzbU9KWllxWUMxTjZKY0EyMmtRbTVkU1hEWVNWUlBRamtOR3NpUHkwb2NPVHdNZVpnTTlPYWpHUG9wVGp4TWpncXhzdE5LUWQ5dDhGVE0ySzk4RVM5VmtVajZmd25kcUxkRHBnYS1kMG9qUGpYY0NaQ2hwODk3bjJaaXVmd0Flak5VemtRbW1jZ0Vn?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "utang pinjol warga ri tembus rp 105 triliun detikfinance",
      "id": "a8874b10ea35ad5e",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8fc5eef3ab12aea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Utang Pinjol Warga RI Tembus Rp105 Triliun per Juni 2026 - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQN2RGVUJWdG55a1RMejlydVk4dnFFb3kzOGQ2eDM0TmZ1cHpwSjVsOUpoWDV3NUNrZlowUzRuY0plM2RfTzRVWDdubEplT3BiQnRvVnpFUDF1Y1o2QWtaMWpZUkM2cjZQVWlNaklpVF9aaVRDSmJYai1uTk0tZEZ6VlJDWVo5TXJRcnAxS2NQeDBqQkRWRFNYRGhWM290NjZVS0NQN2hUSWprVXJ4RWJLODZfNUtNTm93b3fSAb8BQVVfeXFMTmdfMWdHUDVfcVlDMzZtN3JMSjNfMTBNWWhfYWloV0liNmg1dnhtNzAyc0czRm00YlpqeGF1Tk5raURqd1k4ZXdUNHFwUU9CbUV6XzVvdXhrZGltdzFIYm1JVFFHdmxOU1IyTFpxUWdkVFYwQVJKLUtudW9GWFBuSFdfTUZQeGMzN2tRUkRlSmhlWGVEdHpZQ05SWUVxQUQtcmlZWnlLelNMMFNhdFFwdm9BU2luZnpOUTUzN2xyeTQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "utang pinjol warga ri tembus rp105 triliun per juni 2026 cnbc indonesia",
      "id": "e03a86946450bfba",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cabe27b28f110d7c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-04",
      "title": "Warga RI Makin “Kecanduan” Utang di Pindar, Ini Buktinya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOd2k3QWFtbHczN3lETUdKSndmVUQ2R2JVUW5tYmgxQUh6WEs0R0E5QW9NczRQWV9sZ1U4U1llM3FlbDZDWHNINllJUW5Ra2tXRzZxaXJwLWdGWFp2R3lObHhWemhST2t3UUstWjEyZGdfUk5jSE9aZG96a0VIb0RIUWFkbnA?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "warga ri makin kecanduan utang di pindar ini buktinya infobanknews",
      "id": "a10cf43822197946",
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
      "eventId": "auto-8552f72b5d7a628b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Beban Pendidikan hingga Pinjol Jadi Pemicu Dokter Alex Akhiri Hidupnya - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPT3daNVdtWEItT2Fqam5wNVpJUEdrZ1k3V09reW9ZaDJlQTJDSjVQOTVJbkNzQkgxQ2FfUTF3bFRkdXlxT29jR1czN2ZxdDJDWjczc1NXd2h5OG5aR1BEMm5IMnRaWFJ5LW1KTk8ySUpUU25kM3FsdXVZSEYteDFjTVQ5VDRvS21Dc1lzeGtyRHliMVdGRW9GSDczMU9pdFFIMDVmMVZ6dzNYZXh1aU1SYjktTUd2WVA5WkluYnc1ckRQX3U0ZS1xWi0xQUJQQQ?oc=5",
      "publisherUrl": "https://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "beban pendidikan hingga pinjol jadi pemicu dokter alex akhiri hidupnya kompas com",
      "id": "b30a8fe582ae0db8",
      "domain": "regional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f81bd750fd9d7f10",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Cek Daftar Harga & Fitur Mobil Civic Turbo Terbaru - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE43VVNfenFlbEJHdXg5b3QyZXZ6M19OMUpKNDdXbjY4TU1lVVoxYkF4elNscERMRUZ5SFNhdWV3ZTRLb3BCNXVkNTNOVkxrak5CWG1Ybng1VTBrbXJDOFNGbWJHb2dHMWs?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "cek daftar harga fitur mobil civic turbo terbaru kreditpintar",
      "id": "5a3aea9a08849c07",
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
      "eventId": "auto-b6f2133b6979c50c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Daya Beli Melemah Picu Risiko Gagal Bayar Pindar Tetap Tinggi - Validnews",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNeGxPd01oaGtFWnh0b0owNFJxWUV3SE51b1BqR3ZpaWZrdkllZDlzN0VKY1Ywd29WLUF0Y2YzUkhtMEVTcGZ4enlrU19FdVBQVE9WRDJQTUNsVFhiZnRZMkNHVE9yeTVrUTg0SzBpbTRVYnIxdm5GODVJazNoMUFJUGU1UjVZT2ltLU0zRUl6dUVDRzQ4VHN5MGlxYmstX0VtTDBFNmRJZ01lM183Si1MaA?oc=5",
      "publisherUrl": "https://validnews.id",
      "source": "Validnews",
      "summary": "daya beli melemah picu risiko gagal bayar pindar tetap tinggi validnews",
      "id": "5483c58f3cea0f9c",
      "domain": "validnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8cdeb33175514b4b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-05",
      "title": "Dokter Alex Cristo Diduga Bunuh Diri, Depresi Terkait Pinjol - kumparan.com - Kumparan.com",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQU1ljYkhWVDR0SVNuSXZXcENOU2gxUFVyRkM1OWtlWWMzb2owTmEtd1c3WjkzM3RYRVdvMXZpSEE5cl9kWDQzNWt5VGQwUERuaC1yTmVqTVJnU0NyQUZjeUFVTmJWRG1LNWNtYm1oMHFvRXRYaDVTWXEzOGl6Q1BXOE5lckZoRW1XTjRlalhMRmowaW5aMm1pRWNCWUdGZDN3Y2hrM0tNSnTSAbABQVVfeXFMT0hIVUdjTnE5OWZJSER0YjRKOWN1MlQyNUhiaXlEdS1ib19kNHBubEk2cnBkRklVV1hGTTJsQ251cTJWQ1dKSmxoNWttbFE3cXczTkFNZGY2X3hwSGtPVzZlNnRWdHNtOGw1d3FTYzBZMHJyRzl5MXV2dGMtWjRieFpoSkM5U0VBSW8xT25YWnZGYUptTmttZVRGb0VsUE5KSi1PTVp4a2o5Yk03c1dEZS0?oc=5",
      "publisherUrl": "https://kumparan.com",
      "source": "Kumparan.com",
      "summary": "dokter alex cristo diduga bunuh diri depresi terkait pinjol kumparan com kumparan com",
      "id": "e1687112be967ac5",
      "domain": "kumparan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-10fd02778cbb6ae2",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-05",
      "title": "Elvi Diana Minta OJK Mitigasi Risiko Kredit Macet Industri Pinjaman Daring - gesuri.id",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQV09tTjNIc3gyTzBpeDJTT1A1THdKNDd3TFN4ekl6Zm9SWnJvZ09rSXJoS0dnUFZfVjFtNU1hWkVfUFVsZTlfaDFib1cxR2RpTHc1enZFYjNYOS1uY01haU1LUnptLWNScTdzVTNBNXVqRTdxT1FWWmRjb3BKdGNTOEcwcFMxc3RhSGROZkNNQTlhX1F4SWptNGc1ZlZTRjd5a2E4M1VWZF9vQnJEVUd3RUQyNjctZDZmLUtKR9IBwgFBVV95cUxOSV9ZdlRucWFnNmxYM3dRRUZsWllfYWFTQ3dPNC04VmR5R0wta2NsVTA3azYyN3c1blo1bkE0TVczbnFCQmdhMXhidVAyNktwZ19QNXpXMVMtY2pHNWl0TmlzS0ZBZHdYcHpKMlNpNlNydS1sbEhYNGZpREgxRTVCMEw2Ri1fTnpKUDl2VEJDMndOUjNiVDRCeHJncDJxeVJpMkZId1kyRzY1enpIQ0RzSHFHM0hBLUl2TE9EUDJYLXB2Zw?oc=5",
      "publisherUrl": "https://www.gesuri.id",
      "source": "gesuri.id",
      "summary": "elvi diana minta ojk mitigasi risiko kredit macet industri pinjaman daring gesuri id",
      "id": "7427eb96a9953061",
      "domain": "gesuri.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a66cfed60f3366f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Fintech dan Pinjol Ilegal Mendominasi Aduan Masyarakat ke OJK - Informasi.com",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxORDJsMFNDZWh4cnEycWFYaUlRYy1QN3J4dDhsR1N5U2o1VmRxNmJkdmxTMmljUEFSNkxxT2lQc1BhNWdoT0xORkloRXdvZXRoYmR2RGpfUUtDXzc2OU5MR2NZaFdnMFU3QXZuTVhjLTJYdmdaNDVVTzNFMUZlUXI1bXhxRlMtTGJ3enJKazRkMmltMnpkdnI5MVRneE9uUU5RLURoLWNqcw?oc=5",
      "publisherUrl": "https://informasi.com",
      "source": "Informasi.com",
      "summary": "fintech dan pinjol ilegal mendominasi aduan masyarakat ke ojk informasi com",
      "id": "792d4c346048f4b9",
      "domain": "informasi.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5118136699faff1f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-05",
      "title": "Foto : OJK Perketat Pengawasan Pindar, Penyelewengan Data Bakal Disanksi - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQQ3QweGJsa01vVHh6RHN4Q1U4d05TTnBOYzBmWnNkdnZ6cndjNWl5dk5ORHJSTGx6RUdSdE5DandfM1hMZi11S1k3aHdNcENaWkllaFZ0ZHZWeXZDbkNpWTQwajBmMWdDV1RIc016RnluZmIwUWNfOEhyT3llaG96QmswaVo2RFEtSktWUHlzenVYYXRVVVl4TlBsZGRwNzFMUk1fQXBIZ09jbkNSVUtSZzVfcllnMm8?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto ojk perketat pengawasan pindar penyelewengan data bakal disanksi kompas com",
      "id": "5f117fbde5ee029e",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cafdfb1ffc9718bb",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-08-05",
      "title": "Kepala Bappenas: ASN harus dijaga dari praktik judol dan pinjol ilegal - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQVmlsU3RVdGZncmVaUkRjSThSY3RTNGNSRkxHRWlsTm5jZFBSay1vVW9TYVV4Sm02cmxxOGhJRzQ2dlIybXU2TEUycDRpbmo1c19nWVRIUVRyNERwTm9XX3dURzdOQTNtVk1BQjItLVpydHprRmJhYldBRjM0bk94Ym9yal9FY044Rzd2MzdvY2VIWVRaTXhIdWZtS3hkT0NnYmJObjVla0xCVmlrMlFVU9IBswFBVV95cUxPRXBwWW4tTXpGZjFMckFCekYwTUFFb184MHV3MG1yX25pbFotejZjUUt4Qnd6Q2tmWFp0U0pPSi1XYnFBa1FKUGtmMkFfWmpzLTdXelZ4RVQxNkZvUWhDeXpyQzIwVFpNdnFwUjFjLTZ1bUtxMUlFOEdVclVjUS12WFZiUGhMMllNczVCbWZvV2thSE14TEZjTzFmaldTWG12MjZ3RkRuLXVHdmtVMkJBVG9HWQ?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "kepala bappenas asn harus dijaga dari praktik judol dan pinjol ilegal antara news",
      "id": "2a358997a535aec8",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-72159b271cadc0b0",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-05",
      "title": "Kumpulan Hoaks OJK Hapus Data Pinjol Beredar di Facebook, Cek Daftarnya - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQVDMxNWhaZElrOG9rVGtYenlzQ28wSUw1YzJfdXRzdm9mUXplb05XZ1k2ZVp5SmM4TE51NjAtSEhqaGJhUmhvQVByMUxYS0dRMjZYN2o4Y2dFVWlfTTV3LU1UOXduU2ZhSmFFNGVIXzA5TVUtTkNSV1VJWnM2VFlKYmF6Q2Y5NFdLank2ajBhbnZRTXU1M2c0MHgxVXpZWWd4ME13N1dKUUhrZDRBdFpDSXY2ckdKMTk4b3fSAasBQVVfeXFMT0hHYXI3YXFlSW9ERHN6bVpsbF9iLUltMmdPY1hWZGVGME9iVWM2MjFqQjB4RzhyV2F0T01ZVUtlSmkzYkxHZDNPNkc0c3BHblplTlNEaUJXY1pmVzQzdDRRWHNkRUlXVEY1TXJ2aXFYNEk1czVaQVVRdk9WRFJOWkxwSkhXUV9XNmlHdy1GenN0NUg4d0EtVHBieVMwMDZ1clluQTJ1dlJwUXA4?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "kumpulan hoaks ojk hapus data pinjol beredar di facebook cek daftarnya liputan6 com",
      "id": "30c8674f3066682f",
      "domain": "liputan6.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-904bf74ff151f27b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Atur Pelaporan dan Permintaan Data Transaksi Industri Pinjaman Daring - onlinejambi.com",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQT1RLTi1IbmZKM0RfVXIxXzUwV2c3VzJvTFcxMHlqUUNTZVBKZ2dObE5rQy0wcWYtd3FBLS1LMmE0UDNNYzhWdUJaVkRfdXljLXVFQWM4YWpZekUtU0kzbWI2UnBwVm5VdEc3R2h6TkVKTnpoVlp4b3FSdFFXS0tKdmV3MkJvU3JaR0VtdEhNNV9vZ2xzMnlYMjREQ0hRWHJRNnJ3eEx0X0F0clBWMlJlS01IcFF4eUE5NFJ2Qw?oc=5",
      "publisherUrl": "https://onlinejambi.com",
      "source": "onlinejambi.com",
      "summary": "ojk atur pelaporan dan permintaan data transaksi industri pinjaman daring onlinejambi com",
      "id": "bf3c3058c30c7e4b",
      "domain": "onlinejambi.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d923fff56f333441",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Catat Pembiayaan Pinjol Tumbuh 25,88% Jadi Rp105,14 Triliun - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOcXRIamZyeDE1N2hNX1ZWWGNRdTZfQWVZYjFqQnVfcmJVbUwwRVExYzlCaUFxS1NyZ21EOGVNR3pBdmF0SFB2ZVZOMmFHWGZ3b3pXS1lWWFZ5dmItQXhibGxyakswZEJzbVdwdDRJekRJQTcydlZFWnIxcmRpYkltMk5WZ2Z1ckVxSDQwaWE3UHhTbjlQTlFadmVwQkxBZzd4NFE2eVB5Yw?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "ojk catat pembiayaan pinjol tumbuh 25 88 jadi rp105 14 triliun metrotvnews com",
      "id": "7c1de663593dd094",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bf5f90262651c14c",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-05",
      "title": "OJK Cirebon Edukasi Ibu-Ibu Kelola Keuangan, Waspadai Pinjol Ilegal hingga Judi Online - radarcirebon.disway.id - Radar Cirebon",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOYUJneHZYdWlMa0xqM0t3bDlndkwzcGpfSV8wV1RDYzVNV3p1ckRfU2xCcFFMdHlfOU5acjN5RnVZZTFTeVZWaVhWTE9Fa2VkZ1pUdVhnNU90UERkbmdqX193b0lLVko2c29IRmZ6Nm9qLUV3S3JzZ1hkOGpsbE9WUXlFT21CNEpUeFJsTXdlb2pzSUg0MV9wZGdnZGdYb1l4VDJXOXRaZ0F5TFZEbTNKellsUGpsRFMzYWlROEFoR0c5alVXY0ZSMWZYN2l3SXNFWTFLNEo3Q1XSAcYBQVVfeXFMUDl6UC13RU53S3c2enFGZ3R0UTNxYXBmTVBQMFZOSTFFUlFKemxNVk55THIyOG8tMHlLOVo3Sk9nLXczWkVveTRGdTJ0TV9qRVYxY2NUZTcxaUFxMXNQUlltUWUzSEVYVUs5S1FoQTA0WjJOT2dsN1V6LTJOOU5GajNjaEZQQmVrejVQcWx2UTVYN3RUWHctdUpSeEY2WUVqbm15YTZSWFh4dHI0TVZHY2dmUjNPOTNMcnFqZTFkZWE2RDdUZVhn?oc=5",
      "publisherUrl": "https://radarcirebon.disway.id",
      "source": "Radar Cirebon",
      "summary": "ojk cirebon edukasi ibu ibu kelola keuangan waspadai pinjol ilegal hingga judi online radarcirebon disway id radar cirebon",
      "id": "43c9da75d3509380",
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
      "eventId": "auto-7938d880466680a0",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-05",
      "title": "OJK Perketat Aturan Data Pengguna Pinjol, Dilarang Diperjualbelikan! - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNOVZFSDlSNXRaQ0hxZi1sQjV4bEdMU0sxdWZMYzhnM3Zkbk9DR3NzQXQzNDNZdnc3U3V2NEJZbFZZU243d1Y0QWZHZnRmclhFMU1TZFZYREdUak16RWNxdFhBVTlTVXpucUdJR1NlRjFLSlVrRGFTRTk0NmFoRElUWDIwbVV1VU4zOEgzb1h0Q0ZxcDE0d2xHVzhGOXlFTy0zRy1wREVkYzhJYmFhck9Z0gG0AUFVX3lxTE1jU1FGWmt3ODZyM1J5OTQzbVZmYVptWFlMNERWYWZ0ZWVBUEQycVZ6b2RSQVNHQ0JIenZwS21oRWFSWXJvTWd5UW5tV3g1cEJWZjdJTkE2VzJESGFmUzF6TDNyQmZJaFRUNlp6Ymt6aDVHejQxMnA1Smk3bV9ES0JUaXdDT01XUG9nRS1fM3E3UG5UY3lDcU5MNGpranhjQWg0aXB4MktYRXNXSnNmOW93cmdwQQ?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "ojk perketat aturan data pengguna pinjol dilarang diperjualbelikan detikfinance",
      "id": "8602129812acfa9a",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-508b459dc3872f01",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Perketat Aturan Data Pindar Lewat POJK Nomor 8 Tahun 2026 - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1RT2ExMlFQaDhWQW5pRDlYcjdDWGMyQ3VXeFpTZlhfN3BaODU3cExsV3VQaG9kRERDNjR2d19PT1FzUWNGRU1FcFNmS2ZnME1oUjctVVg5SXc3dUNNUzVrcHFOVG1EemRlQ3hUVlB1YWs5S1p1NTZ5MHE0OA?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk perketat aturan data pindar lewat pojk nomor 8 tahun 2026 achmadnurhidayat id",
      "id": "c7dc454cca90ed37",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b4faee4038a08f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Perketat Pengawasan Pindar, Penyelewengan Data Bakal Disanksi - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPU1lDY0JKQnQzTjFrdkhlQ09tNWdrcUcwbzIxZUhJdEhnMVpScE5OT1Y2ZGx2Z0lPeU5KOGxEalN4WFRQaUtQMHhCUG5rOUw3Nm1kYXNJLWRUVWREbjJ0UEk5WGFOTzctQ2tJTGJPcl9RTnZidkNGS0ZYeVNrajB0aGNXVHRwTm1pRmZvSmJhZHBaWlh6RU5RdmY1R2hSZ2VRLTlBWTYySHIwbHhmS2Q4cWJyWnFYQQ?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "ojk perketat pengawasan pindar penyelewengan data bakal disanksi kompas com",
      "id": "42ecdb88538f1660",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8328cdf9cc4b8671",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-08-05",
      "title": "OJK Resmi Terbitkan POJK Nomor 8/2026, Perketat Tata Kelola Industri Pindar - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNOEoxWDA2a2EybDdzQTVuRGMzSFh3a2Z4OFp0VVdMNmUxZ3NxdjM0U1dneTdNVFp6SG9fNHlOajhHSXQ0N2dVblJBel9mMkt5TjlxeXB3WGJfV2xMODhTR014REhkMVBGSjgzV195a1g2aUE0dXpHaFZTcExoN001TktxMG0wYkxVZ0VvVUpEVjBWa0RyVThtSTNlblF6Sjlz?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk resmi terbitkan pojk nomor 8 2026 perketat tata kelola industri pindar infobanknews",
      "id": "2824e5deb9d0e4a6",
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
      "eventId": "auto-aff78c58f20a397d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Rilis Aturan Pelaporan dan Data Transaksi Fintech P2P - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPUmJENnB6MkxaQkQ2STdKMGZtLVVqdTJzakM2TEtONnFqdmVoaWdWOURRbENOSUZWYnZRYlhyMktzeEwya2VWYllsVXRkSUVIS0hxVEN3OXA1SlFVZ3JXbC16emMzSlhVSzdFYjBtYy0yOGpDSHlEaURIbWZiaFlmTUpseU1KTUxMZzZlSk9Qa190YVYxUTRac0x1M2swU1FxMXI4VVF6aE5ycUY5Zmc?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk rilis aturan pelaporan dan data transaksi fintech p2p bloomberg technoz",
      "id": "88045a7dfc485eda",
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
      "eventId": "auto-12ddb47e48d2a058",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Rilis Aturan Pelaporan dan Data Transaksi Fintech P2P - Finansial - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNeUFHcHEya0g5NUxFdEhDcVktWVFsRzhiTFJNem1JaVhBeE93UnJTQUF5a2pLYzRvRS14VTgwSGx4d09tYU5PUEd0aU0tYjlxLU5OMDlDNnFHUWhydG1FQy1IVDR0MkNhR05rZ2RaQW1Gem93MENGUUF6NVZZQWZtLVpVbTZOeGYxaExwQ2pIZlRyUFNBSHVCM0Q0aF9fMDYtSERDRUtzUXVSbHBISGxqSw?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk rilis aturan pelaporan dan data transaksi fintech p2p finansial bloomberg technoz",
      "id": "0b4f498582838a17",
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
      "eventId": "auto-12ddb47e48d2a058",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Siapkan Aturan Baru untuk Pinjol, Keamanan Siber Diperketat Saat Pembiayaan Tembus Rp105 Triliun - Koran Jakarta ®",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQeEpta01QRE50TExMdDVNZlJhZVE1Zk96RWI1eW9WdXVmbktnakJEZ0hNWHgxVUY3azduN2JMa1lpZmVyeFFNVEFFdk1tcUxCeGVkcEdRRjRTOFdiWmhNcmd5ZVBpeTZ1MGk4U3dzemY2XzdmdlN6RVZvdUk4V0M4Yy15ZkNubjd2WWxmVTk0LUZ2SDZ6aEdUUzhYdVN0bnFKRm5hYVlFcHJXRzdWSUlFOVJGTW1BS0padGlWUFdmSV9sQWUtWFB4cXRUTEgxZ0hQTUHSAdcBQVVfeXFMUGItS3gxYnBKSkZDRlY0a1A0bGhlbnlYdFhYZWZjdmxNRm9ncXFsTnNfUUVfWUNaQzk0cVg1TXc4cnVUM3lKeV9TLUxqZ2ZLdE9DVnVUcFVsbV9ZMENEZ25MOVFTTVJNS0FkMjA3M2I4X0d1dVBnelFYOWh2X3ZWVzZmSlpnRFBWNVVZckpHTGRYdDZSb1JJSWFidlJCQTdpcHVmX0xCazgyRXJZcmdWU29pbVNwY2dGS0tBTkphTVdubzRreUtMNDJxZ2pzd3dJVEQzS1ZpbzA?oc=5",
      "publisherUrl": "https://koran-jakarta.com",
      "source": "Koran Jakarta ®",
      "summary": "ojk siapkan aturan baru untuk pinjol keamanan siber diperketat saat pembiayaan tembus rp105 triliun koran jakarta",
      "id": "457b4a63cf37bf01",
      "domain": "koran-jakarta.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3642a02b6615bb96",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Susun Pedoman Keamanan Siber untuk Perkuat Industri Pinjaman Daring - republika.co.id",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNSzhNNDlkRndmNnZjUTFkSEJHVEI4a3hhNjFvZ3A5X3dVQ3V3bnZiRmIxRHB6Z0ZwMVR6cFZZOWxnNTVUNlRZa3k5dHFuNWxwNjdfcGItYkNDNVQ0R25XZ2N3RXRYaFVXS1dvSUJrZWJualVXc3VjQ2ZpZXFONU90S19NZERTekJxZVcwVVBVYm9Cd2lEWlhxTHByUC03Y25PbjhPLW1iWHZxbEZNNmtqVlBtbWNBNUpQWEVIR0Fn?oc=5",
      "publisherUrl": "https://news.republika.co.id",
      "source": "republika.co.id",
      "summary": "ojk susun pedoman keamanan siber untuk perkuat industri pinjaman daring republika co id",
      "id": "cc9e7647409335d2",
      "domain": "news.republika.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6c562a4b301cb6b1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Terbitkan POJK Baru, Perkuat Pelaporan Data dan Tata Kelola Pindar - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxORjJ0SThwNmhrZ2pvTVFKd1VIUUxNaEI2WER6c1RJc2c0NFh4T0xNT1JKYTE4bnFOa3M3TXYtVFdCVWVEb0ZidnJnQzJaUUYtbXl4TFFFdEJpWDNrV2FacVRWRmlqakw1YW13YVo1MnZmekpNanAzVG1FWkZCWEZoVThQWE56QmFqcUFDcElIRnQ2Mk5wc0htSV91T21aZUs5?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "ojk terbitkan pojk baru perkuat pelaporan data dan tata kelola pindar swa co id",
      "id": "1cd593c38656ff52",
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
      "eventId": "auto-c3d4b1f8187144f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Wajibkan Pindar Lapor Transaksi dan Larang Jual Beli Data Nasabah - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPbE5yYVNvRFRiS1BHWnNBX3lodFRtMVJDUFVURHFLYjk3LXZuWnNnSjdtY3c1blZLekIxNEZWSDAxdjNoOGdxLW9aOG5IbGFpWHRZY1JneUlMUmdkRGxaaHBvb3NfcFhqOUdfcGg2N0JDY2Z3Sk9WYWdUNzU4bjBNWjhFN3BtNGo4WDFNc010RDhHa0VQbEJiMlcxdXVTczBpbHFHd0dpUDhuMHJ0eHRYTEg5bkU4THgydTdMMTlLdXZ1VzZZQVpnWlFhY9IB0AFBVV95cUxOTUx0d2FLOVkteEdNQjZTdzBsUW1pYjd5Z3JlRTB6TnlIVWRQNHZBallxU1RWX196cE01dktSWWt1amlrOU1TamZYUElubzBaXzRGWXNvQnhXSWdRbXR3WmdYTmhDbzlMWkgzRE1oZVk5Y25GU05NNFZ2WVgtd0wtSU02Yy1qeHg5a1ctNWRmeFluY1B5VTNQVlJ6Y0hvMHg4TmJlcTRpY1UtYmlFUHQwZjZRNkZJaWxORGhmUk50UHZuMGcyQ0ZrYmdrMEFZYzRj?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "ojk wajibkan pindar lapor transaksi dan larang jual beli data nasabah cnbc indonesia",
      "id": "1cdc45de8ce3427c",
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
      "eventId": "auto-52eaa7a745d58dcb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Wajibkan Pindar Laporkan Data Transaksi - Hukumonline",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNOC13QzVvQlNYZldLWWZ0VTU1NkJ2elNZeEFlR1dvNzc1aDA2b2ZpdU44cDM5LU84ZGJGOTdoMnZObkFGZWVDMjhLc1hyWkktSzZTTjBBb3VZTWd1V21Cb3hBSFFPV2lsNFBXZFVxUlJOcFZUMlJLQ193cDI3bGZOdWctSEZla3VCTVpmSzItTDZDTzY2eVpmcUJ2N3Judw?oc=5",
      "publisherUrl": "https://www.hukumonline.com",
      "source": "Hukumonline",
      "summary": "ojk wajibkan pindar laporkan data transaksi hukumonline",
      "id": "acf0b3008287ea46",
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
      "eventId": "auto-f35d82b21783cfc5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK Wajibkan Pindar Sampaikan Data Transaksi Pendanaan - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTDFZV21sTXpESjYzd1NwNkhfSC00N1l5Q3hUdWdRTXhrM3c1V2tObEtKR1dJdUVLaldCTkMxaUIzZkx4WlNVUXh4eHVBN0tjeE5hMkgxalkwYnUwSjBWbFlZUlo2ZDZwRXF0SU10dnp0Y3Z4WHhxckQ3Q2s1Q3BjNEdxRDhyQ3EyeXhiQzBXNk1pc1Q5cjMtc3R2MFo?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "ojk wajibkan pindar sampaikan data transaksi pendanaan metrotvnews com",
      "id": "99ef21c226189a18",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-db76e5943e1926d2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "OJK: Utang Pindar Juni Naik 25,88% Ke Rp105,14 T, TWP90 Di 4,26% - Validnews",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQR1lieEw1am56ekNBTlM0STdXNGdDTjV4NjhRRzZ4VW02TmVuSTk1LWprd3c3anNGRkVibWRqdW04QWw3eWVpVHRrLUY0UzlZdXUtbjNKSEhTbHJwNTBoQU1WclRFVlRMUmpfcEpVb0x4OHhLTWVmaW9acGNJZzNiaEZlRE5hV0I5S09FbDM0T1hYb3liYTVyTEZkNWxWOFJJLUZzaUdVNUdxelU?oc=5",
      "publisherUrl": "https://validnews.id",
      "source": "Validnews",
      "summary": "ojk utang pindar juni naik 25 88 ke rp105 14 t twp90 di 4 26 validnews",
      "id": "d9e03cf6832b06e5",
      "domain": "validnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.8,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe92713b8d21d517",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-05",
      "title": "OJK: Utang Pinjol Tembus Rp105,14 Triliun per Juni 2026 - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUTdOU3EzeUZ0S1dEclFIOUx5MWtFMG1ock9SVVd1d01fYjRhVDE3aFdQN0t0Y1NuelNRSEtYNG9FRklac1ZmQzRKekU4NEp2a05LTFplOG1tbVpsSGNxSWZ6UW1fNm9qLWZLTHBYR0VzMUtORkFfcTJVbGdESVdGREJpZ21nZ1lzVEd6MzhHaGNXOGVocXFud1VWR1A?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "ojk utang pinjol tembus rp105 14 triliun per juni 2026 metrotvnews com",
      "id": "044030cb68b5c1cc",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-14aba3f99101c101",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Pembiayaan Pinjaman Daring Tembus Rp105 Triliun - gokepri",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFA2VE9TcTQteUxTRkpHQ1llczM4ZVJEZ21OVEg4WTlsbDItZ0ZBaHl6SXc4aGQ4bTN0NmctMWw4U1FKcW5WMlpDb3VxUGhLRFV6RGozR2VOa0MtRm5zTldfdFdSZWZPM1JuSElZOE9WV1lwdVdwU200?oc=5",
      "publisherUrl": "https://gokepri.com",
      "source": "gokepri",
      "summary": "pembiayaan pinjaman daring tembus rp105 triliun gokepri",
      "id": "86e51e10d297e837",
      "domain": "gokepri.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8e6714405b939870",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Pembiayaan Pinjol Tembus Rp105 Triliun, OJK Soroti Risiko Kredit Macet - berempat.com",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOYVNYQy1jTFFKc2gtVVd2ZXVBSElZNkp5MFlLdFpXazBhS0c3aFRnOVNJVDJIa1l5bXQzdmJhTXBTaXVGWUg0VGlleDA2N3Q1OS1VeDRrckpaVC1SOW5yZEs2ZF95WW4yalJuM19aRXZRdzM0VjdBX0xtcDRyc25SdFB1VlY1UHZMSkdGbFdrcW1NYlJQX041Q3VscHdSN19XQnhFYnZzMElFX19YOUZTZHF30gGyAUFVX3lxTE5hU1hDLWNMUUpzaC1VV3ZldUFISVk2SnkwWUt0WldrMGFLRzdoVGc5U0lUMkhrWXltdDN2YmFNcFNpdUZZSDRUaWV4MDY3dDU5LVV4NGtySlpULVI5bnJkSzZkX3lZbjJqUm4zX1pFdlF3MzRWN0FfTG1wNHJzblJ0UHVWVjVQdkxKR0ZsV2txbU1iUlBfTjVDdWxwd1I3X1dCeEVidnMwSUVfX1g5RlNkcXc?oc=5",
      "publisherUrl": "https://berempat.com",
      "source": "berempat.com",
      "summary": "pembiayaan pinjol tembus rp105 triliun ojk soroti risiko kredit macet berempat com",
      "id": "ac292e2d252860db",
      "domain": "berempat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9de6be4e5c312785",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Pinjol Kini Wajib Laporkan Seluruh Transaksi ke OJK, Apa Dampaknya? - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQby1hWVByWXFZMjV4SEN6bGxFdHdSZXdtaXNyX0lJTDRVc2VDdkowX2xtSlM2NjR5dDdPdXBYOTN2VUVyNm13SE4wdV8zaHVEbmt3OElqVFVjSVgxTTROVGt1R0hSZG1PYlZaakJNOU1qcU5kYkgweVFkdjZWWlhKaWFrN19yMEF2OTl3LUVydG1CYjNfTm9FbUpfT3pLX0ZyanI1RF85dU5UQ2hEaWROZXBXX2dfUG44YjM0TWo0S3FhR1E?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "pinjol kini wajib laporkan seluruh transaksi ke ojk apa dampaknya kompas com",
      "id": "8b6f1e12ec011c23",
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
      "eventId": "auto-aea1607cb02806b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Satgas PASTI Hentikan 1.220 Entitas Keuangan Ilegal, Pinjol Ilegal Masih Mendominasi - Kaltim Post",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPYmNoeW9ZSE44Q3FoQzZvYWZKTXB3cUdMQTBtMGtuUncwWlJyOWZfUEhsbWNGZW4wZG1Bck9JRnpmYmM4SFZwQXc2ZUZoNUhJbjg4MVlLcFlLaUtEeHdGRnQ3V3NiVFE0b1BZS3hxQy1Pd0NROWdrVEJVQTIwNllMT0RCQUs3NUREM3REUHBFSEh4SkZuWXNfMEpLZ3hFYXVUbFhQNzYtYmkwWjZ4eEZYTlVXbXR0UlhEeHcxQ1BRaGhYbHczbWVhYVdia9IB0AFBVV95cUxQdEtvck5lMDd1QUVqSmhlUGtJRVhYeXVzWmFtLUYtT2RUeXMxS0ZFM1hQS19CbnI1N2hoemg1WjhhR1ljcnJsbS1adDdqQk5wRjdudkNzUVNpY0Z3c1BTTFFlbV9kSWxrUmpIbjFsajJkM0tuU0VDUjN0QWFzQXRTWE9XaVh4Zi02S0NMN0l6bkJQblljU1NBVHp2WFFsaC12eEFzbGFHNlJiU25JT2lJX19pN2tEM1lMZFVoRjAyZm9fTDZVSENMcGxtN1djaXVR?oc=5",
      "publisherUrl": "https://kaltimpost.jawapos.com",
      "source": "Kaltim Post",
      "summary": "satgas pasti hentikan 1 220 entitas keuangan ilegal pinjol ilegal masih mendominasi kaltim post",
      "id": "9e6adbb218e7ee5c",
      "domain": "kaltimpost.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-11389fea7d7653cf",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-05",
      "title": "Satgas PASTI Hentikan 1.220 Entitas Keuangan Ilegal, Pinjol Masih Mendominasi - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNQ09IUlo1cmRrUC1pVl9xSlNjdXk0Z29nbGNlenE1LUx6VDhaOXdkQnhScTJIdWsyOURkSnBNcVZNaVdBLVAxQ1JNa1dHLVdNdWhNUUVlT2w0VmVlTVdjaUxrai1wZHBLMXgzUnN1RTJPbmhpTmtMaXdaYldQSklPdUM4WkhRNzVMalNhdW5OZ2UwdmdaX0lsM3RTajRGcW9OaVdHRURoMkhVRG1kRUxz0gGoAUFVX3lxTE8xXzZyNVVDc0F3cDJVdnRoRVZGdFRidmI1MkVYMVkxX19xLWdhTnZPbHpFZmRxN3QtZTVDazRQcm16bDhfOW1lak5PV2VkM2gyTnBNOW9IcENSWlVoVGVSbm16LXBFa1NSbS1kdTdTeEp6VU9DUXUwWnVtT19MdkhRYWo0bC1mX21sQjJhWFVTRzVBZjV6SUFVSXpiZVltNlZvbm5mVkNoNA?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "satgas pasti hentikan 1 220 entitas keuangan ilegal pinjol masih mendominasi kontan co id",
      "id": "9eaea03ea06399a6",
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
      "eventId": "auto-11389fea7d7653cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Semakin Tinggi, Utang Pinjol Warga RI Capai Rp 105 Triliun - detikcom",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOQXM0VWVwZVNlZkZDb21oVklENWxLaU5MT25hcDhzYUF4MHlQc0pBTmMwZzZoUFdwQ3N5dlpROUlITWwxN2M2WlBPRzJaQXhoQURhUV9FVUYzRm5JaTVVc2RVN2hXT3RSWllCV2ItM3NENm1hdEllQlk5X2dralVLWHk3V2JuUzY0MG1vcjI2VFBRdFdSM3ZINHZhV3hIbV9jRl9LddIBqgFBVV95cUxQM21na1dJTW5FQ192aFdESHVLQVp0ZTVtM0drOXh6S3VVT1I5NWF3WFNVUDQxeE1pbTlaX1NNMDhxbXdWREthRFVWdFoweDI0M3VJalM2RGUta3dWVkYyTDl2TTFXREhEUFNCd2hQREFWSzZwYzlYNWl3NFNkYm9EazNpMGR1MVg1NU1TTXNUZkVEcGxRQktOYTgwa0EyZUZrSVRiazRDbVJnUQ?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "semakin tinggi utang pinjol warga ri capai rp 105 triliun detikcom",
      "id": "a89e33ff5b939ab3",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d0c7dffd006f3613",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Tabungan Melemah, Masyarakat Beralih ke Pinjol - FORTUNE Indonesia",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRS1vckp2QUJLaUpsY0ZxZDVsMklaYUtGVEhRcWFFeUpkNEI0UU1LellvREptRUoxcS1wLWFGVHYyenJ5ZXMyRTVsSnNnald0cFZiYUJNS1ZhU0YwWlBiQjZ6R2pzR1lSbnRRQm55T3NzTHM3V29MdjRXMHNxUmhTWS1xdWFVcHZaQVFIX2lMSzFTMWc4ZnlZM0Z3emzSAaIBQVVfeXFMTmxSUVFteENCbWJxclBxeXE4ZDBZTXdlb3hyel83M3kzQnE5TDhGcWEya29GQV8tUFdxN3NGbUpKRWRCdDBadUlVSUw2Zk81UnExV2RRNVByZWFRcTFZSEN4R1ZkZGNLQmR0R1lBTXJyY25qN1VtaEF2NjVsbVJHSkhRcmg2RmJia1FndEVqamxBaWFfRzRsRXpMTFBiWkFvdUlR?oc=5",
      "publisherUrl": "https://www.fortuneidn.com",
      "source": "FORTUNE Indonesia",
      "summary": "tabungan melemah masyarakat beralih ke pinjol fortune indonesia",
      "id": "8dad5f2ed8ef24e5",
      "domain": "fortuneidn.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-31669d84b7c41fd2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Tembus Rp105 Triliun Hingga Juni 2026, Utang Pinjol Warga RI Naik 25,88 Persen - RiauTribune.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQVHBNWG5ybGF0YnE0WElWdVJlQ1hDamh0N2VlWGZ4RFV3MEYyVG1CQXVoT0ZYSlhSd2FPQXVQbm5xTHhqYk4wSldaUDJLLXpKMXBKM2VCQXBIWlB4dEZoWm4zY0w5MEg3cmdQTlR5ZGNTZ3BrcEQ2NTJiUDRhZzlQc05yZmphWFZVVlV2cWNXYjVJdEFFTVZxcVRGVndjeHdPdzlKQzFOYUhmcmVUQk1uUGZZM0hzQUht?oc=5",
      "publisherUrl": "https://riautribune.com",
      "source": "RiauTribune.com",
      "summary": "tembus rp105 triliun hingga juni 2026 utang pinjol warga ri naik 25 88 persen riautribune com",
      "id": "71a194c77bb2f283",
      "domain": "riautribune.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-24e9fecd77e658d1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Unpad Gelar Edukasi Cegah Pinjol bagi Mahasiswa Baru - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1LM3ZhYklJQzU0SVd0SGNNVjhJeC03YVpVTGZya1NNYi1SaDhCa05yREdnWmJibjA2V3U2SjRMVWR3Ni0wZkktS2xGbV9LVDl2cmRDZktMMTFZRm02SGFBZTF4R2ZydFpNbFFROXp0S1dDZw?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "unpad gelar edukasi cegah pinjol bagi mahasiswa baru achmadnurhidayat id",
      "id": "e4ea69c343fb2507",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-633b462ce91d6fe4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-05",
      "title": "Video: Utang Pinjol RI Tembus Rp 105 Triliun, Naik 25,88% - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNYTN4U2JQVzlFT3hOSnhCYklnUVg4VmUxaS1idFE5dE02bjJQWmZlLTF4bEpVX2ZXNExXVmNGcS1uajBnMkZZUFlIM2R3ZGQ1cTNINUg3Rkpoejc4bXRveUFCakd2OGVKcmozcVdNSWVFQTNncmtoNVZXMEJnODk5dS0xZ0toS3NtRzVsbmw4T3JiUk1vMmdlcXpZeThGTDBxTEJUT21VLWdyRDFlNC10dklB?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video utang pinjol ri tembus rp 105 triliun naik 25 88 cnbc indonesia",
      "id": "10314452f66191c6",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cbe3bba7da98319d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "AFPI Buka Suara soal Banding Kasus Dugaan Kartel Suku Bunga Pindar, Ini Updatenya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOU0cyazNoQTJkZ3A3OVk4V0o0V0o3ZHQ3azBxeHBqaTF0Q0I1bkN6Y3RXYjVTdzJKcU5rdk1CWjdVRW1MMzlqcFN1LXY0SUQzcmRIbW4xckFFbnk3Zy1CRlFKZXM4cm01S3d5NnB5QjUwMUlVT3EwWmRkakVsT0xCaUlheGhnb2FGdDhvMktxTndac3R2b2FZVDB3UWU2d1NBZXVESEQzYTBrcXdpVTNDQ0preDc?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "afpi buka suara soal banding kasus dugaan kartel suku bunga pindar ini updatenya infobanknews",
      "id": "20632f81201e7e24",
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
      "eventId": "auto-fbd5ae5b747cf8f9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "AdaKami Perkuat Keamanan Siber Berbasis AI Hadapi Ancaman Deepfake - investor.id",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNUGswRVphZVRuQl9WMnloUXp0QUtib1RkYlVRd19JN1J0bGUzeUk0OUlzbWRKaEk4ZXpvZ2g1bEp2OWtpb2FlN21yRDJET2lheENoMkVES3dXNFVVbDJGYjBMSXJQZGFCU2ptYVVhX2JOaHI2b0tSR005T2NFYy1FZlRFMzFSZUcxdzJPRm1Hc2ZZOU13Ykt1bGNtZFEyR1BTbmlj?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "adakami perkuat keamanan siber berbasis ai hadapi ancaman deepfake investor id",
      "id": "427857dc4bf09b58",
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
      "eventId": "auto-62e2d87b8b804f81",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Cara Memilih Pinjaman Online yang Aman dan Terpercaya - Universitas STEKOM",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQalhKaDZQT2tFN1VrU0RmZnFVQ3V1ZXcwSFJiRmZPcUdVaWZlZkdPVDNpX0NFSVFLZzRyc2NTS2hZWF81LS1uVmd0Mm9oOGlKUWFsUEZxQk1tZ1VMeWc0QlNTNTVFbGxhclhYZFREbm5lWlFtZkJqY1RTT1ExaTZBMkZpNjZPZFItdWI3ajVLNUU3MUFEcWNrWHExV0E5ZGlpMFE?oc=5",
      "publisherUrl": "https://stekom.ac.id",
      "source": "Universitas STEKOM",
      "summary": "cara memilih pinjaman online yang aman dan terpercaya universitas stekom",
      "id": "88f7e52c419e3968",
      "domain": "stekom.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a78e9510487932c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Fintech Waspadai Kejahatan Digital dari Maraknya AI - Medcom.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNazJQRFQ5OG1ENjdEME81YUlrMVNDai1hZk9rNzlnbUpnMkJzRnMyMWhjU1Npd2R6SXJHXzNlT0FwNzVmbHB4X0QzMTJwOHY3V3AyMG5SZXJGcXQxXzFidExFTmQwc0w2UVU3UkpPMHd5QV9aX3BiSnpGOW9ENE5hUWVscnhRRVlnb2pfamRUd1A2N2theFk2TmdqTkRUenF1dnJJM0p1djFBZw?oc=5",
      "publisherUrl": "https://www.medcom.id",
      "source": "Medcom.id",
      "summary": "fintech waspadai kejahatan digital dari maraknya ai medcom id",
      "id": "5b53c98ec52003b9",
      "domain": "medcom.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1aabb5dcbe90332d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Foto : Danamon Edukasi Pelajar Hindari Pinjol Ilegal hingga Judi Online - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNN21xalNCTmtFSGhOYjFtZThwZllBdS16akhUVUw1d29kTmxaSHJoYXN2TWhPMTE2Y19UbXlycVExNDBfaHNMS1NkUmNzUENwRml2aTZXb25uZnV4eUpuWXduNjY1ZkV0OXNWdWpvdk5YUk9fc21lNlhGU1FmM2d0bDZnRFUzRHpVd0hyZktzLTkwNGIxYlVxR0NkN2JvZjNqdTU3aW9SVlJ3bzFaWjJXTE1XNGVrckU?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto danamon edukasi pelajar hindari pinjol ilegal hingga judi online kompas com",
      "id": "cc55c18f6d840678",
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
      "eventId": "auto-d10ff351c537685a",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-06",
      "title": "Foto : Pinjol Resmi OJK Agustus 2026 Terbaru, Cek Daftarnya Sebelum Ajukan Pinjaman - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOYnVPSTIzRFR5QkdubWxVbHVjRlBLRXhSWUNpSFREMkdzYkctbEhFckZTTjdWUFBrejFHN2EwWkdPNjgyNEwzQTFDeHJJQ0g2ME1YR24tVi0ta2NtY0FuSmxxY2FrZDhXeVg0MkRRZ3VfMUxTVlVhQmM1c29nREtoU2V0dGVkVzJMZHR5eW03Q2hrdUZ4OS1mTElISF83RmE4MXVzUUtvRU9NbVY5R3c2UFhEZlRwNDl1bWlZLUlBOFZ3eVpoN0E?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto pinjol resmi ojk agustus 2026 terbaru cek daftarnya sebelum ajukan pinjaman kompas com",
      "id": "a3a812b6e3537c15",
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
      "eventId": "auto-8215a478533b8bbd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Gap Kredit RI Capai Rp1.650 T, Pindar Bersaing dengan Pinjol Ilegal - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPSkRsSFJHbFNtcFJmSTdxbzRJSkxhNVVWRmZjaWNrVm1hMWIzbU1QNTlKYVBtME5rblM3a0VWTGJSOGxnUFNtWWpXbzM2bklXLVFQME4wd3k1bW9jMGROODFqTHhtUzdVeWhpdk5idXJhWFJrUG9uLXFSVzZZV3dWc21qaWF4ZEctRTFwMXZhOEtwbld3cVBTZXYwelRBdTNsSmw0SEhzNHJ2U1liQlJHZDJZUmtrSHg0c0M5aGFiV0RUaWdIeWfSAcsBQVVfeXFMTlo3eE5JbjE4aFlrX1dFY0pnUDlLSTNQRDl3aFQ1eU4xWjRrLWk4cXNjS0xrUkNJb3J3b0VTaFNMZXZYWGRQaGZCQ293U3JWMEREZ0hHeG9RN0xldV92M1Uxcm5qS0x0VzgweEdSOFU2VHNxSGRJUU1VOEVpMVNRRlJjWmNKbU55ZzBuWEpxdHRzc08yZXN5eFp2aUNITzJiNlRuWG9ZVUxsVnptT09ndXZ2RnM3YmtmWWMzNGpCMEkwRFR2ZlJHeDZZX0U?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "gap kredit ri capai rp1 650 t pindar bersaing dengan pinjol ilegal cnbc indonesia",
      "id": "26c0094da65ded11",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-100fd2875c1ed902",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-06",
      "title": "Journalists Play a Role in Preventing the Public from Falling into Illegal Financing - Kompas.id",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxONW1pcDZXT0dhUEZkVGlhdDNwMHNZWmdrS01lMzRLQjY5V1hZWHJIbEpESVluT2cwWkVZWE4zWDZBV25xc3dtNDhRaE91bXdnbFFZZ3lNSURyMGx6c2h0OHh4d2FlWWlUUndGRU5Ubl9XTWlDeTRQQUpYejdSOThYRjgwYUxEc3VFMG5VOUNMakpyT29rTk1zWHlWUkhnSGhaT1ZwSTl0U1VEa1kwVEthOEJQVkp2WHhhMWZBNmxR?oc=5",
      "publisherUrl": "https://www.kompas.id",
      "source": "Kompas.id",
      "summary": "journalists play a role in preventing the public from falling into illegal financing kompas id",
      "id": "d4d7dc1bb5c7a128",
      "domain": "kompas.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-482b91adf725adc3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Membangun Benteng untuk Menangkal Ancaman Siber di Industri Pindar - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQOGFyZkZwakQtUlBPTXM0UW5waDdndWczMXEzWmZseFVrelhGakY4X045eEJJRW9IbmxzQ3FJczFDbFlWanRraGpwWWwtVVlhQVU5X1BFSXJxeW4zellILUxGMTg3QTBYbm1FYWxFRGplMTlObUwxYTlrTDFuM1dqVjVuNi0xNEtybWlTQWJLMGplSmZWVFVWcEZmS0xvSVJmdFhuMHdPaENieEF3UjNkbWJQX0dvVmtMUXZvTGxn?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "membangun benteng untuk menangkal ancaman siber di industri pindar bisnis com",
      "id": "7f085fc057aca678",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8cec4bbec4c23147",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "MoU PWI-AFPI, Literasi Keuangan Jadi Senjata Hadapi Pinjol Ilegal - Inilah.com",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOWFVtaklLMURIVXNYeTBFNDJRb1V4LVJMQjVLdTlKQndRaVQ5T0Nudk5hdDgzczhoNUM3STM1U3ZoN2tLS0R3Q2ZsRkxHZ2gxQVlCWjFZRWFRX3dTdEpjVDEyU0x4MmotbUFYclY4aGtZNl9QcDItOFhFV2x1OS1zLTVXTC1fbHh1SF9RVzdLbUc?oc=5",
      "publisherUrl": "https://www.inilah.com",
      "source": "Inilah.com",
      "summary": "mou pwi afpi literasi keuangan jadi senjata hadapi pinjol ilegal inilah com",
      "id": "6aaddbff5789db30",
      "domain": "inilah.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-30b256a4865e9d0d",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-06",
      "title": "OJK Sudah Hentikan 1.220 Entitas Keuangan Ilegal, Ada Pinjol-Layanan Investasi - kumparan.com - Kumparan.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPRDVTSG53ckxoS2QybHJXaXBVUzY3SlJoalF3ejdadEl4RHJBaGVGakFXTWlVZUhXZEo4Mm1YSThtaGJIWXRWUGgyYk1reER0el9JbG5MY1paaHYtQzlZS3ZKYzAzVzBEQUdZcUVsVkxiTjNKdjIwamx5Y1lKOS0yWFJLUXBqVDZCMnRTQWZjM0lPa01xUWRMWVphYUxDa2RHdUpCbnY2TUR2NGJMeS1rMHZ4cE1vaGdRNkxjZGlFcW9tejTSAcsBQVVfeXFMTUllcWZEVjdyWlJkcFRuWGt1WVV5RzFpOGlSUXlWV0cxbE1mR1Zzek1Yb3BUZE9nalM5dDl3cDV2ZDA3amcwQVEzVUxtQmNyYUV6SFlYYlJKX21RT3R5Y1F3VFlxeU94WV9LekJFbFM0MXhMWHVfOVZJazNtYlZjS09nb25DVzlPQWotZkwyeVRuXzJPZDl4b19nalpUUG5XcnI3VFZ1Q29aNjNWeDFFTDNHUkpFUWN0NE9HTUNSUG1PY2FwX091LUp1LTg?oc=5",
      "publisherUrl": "https://kumparan.com",
      "source": "Kumparan.com",
      "summary": "ojk sudah hentikan 1 220 entitas keuangan ilegal ada pinjol layanan investasi kumparan com kumparan com",
      "id": "7da7e7c99a9a797e",
      "domain": "kumparan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19ec7b1f6d4abb6e",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-08-06",
      "title": "OJK Sulselbar Terima Aduan 11.156 Terkait Penipuan Digital dan Pinjol Ilegal di Sulawesi Selatan - Gosulsel.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPajlNcnU4ZU5BRGk4bE03WXFkQmlKMS1YVHNWTUU4dUEweXFPWDc4RXloUU1xX09mSlRqSlJCdG12NVZXS0JvcFZKSzhhNHBmUnFsNjkyQUlTQkR0ZksxeEcwd3hXbS14MHJYcUJ1V2tGY2xFbDRXNWgwX2FkeVljN2JfZWlEYVd4b28xYkdGSm84X2NwNzRSQ3MzNUlMM1VtalJfRWU1eGFIMUxzY3M1Y3poRW1Ra1Q0aDlMSHhMdkZsYXl5?oc=5",
      "publisherUrl": "https://gosulsel.com",
      "source": "Gosulsel.com",
      "summary": "ojk sulselbar terima aduan 11 156 terkait penipuan digital dan pinjol ilegal di sulawesi selatan gosulsel com",
      "id": "dc0c5d213ed7bfb7",
      "domain": "gosulsel.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 78.0,
        "label": "negative",
        "negativeWeight": 4.5,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4aeae813863a9d43",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-06",
      "title": "OJK Tutup 1.220 Entitas Keuangan Ilegal, Mayoritas Pinjol - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPMTVqWEJ0NnNQc0NaaHI5ME42VFFCZkJBV2NVZElNZld6OURTMDNzTThrUThPRGRpdVVpTDZqS2hyYlNrRFNyeHJ0YWdmUVRXN2tLMGxfTDdzU0M0Mi1aSEY1ZGU3T3lJbGxRX18wYjBGT2p3cFBoZmtNTS1yMHhQOGV0Q01ScjlNTVhSdGljYUNmZHhTWktBbWRLRzRDYVM3UW4wZjJwUlF0akg1SXFSSHhDTlc0ZWZqU1HSAb8BQVVfeXFMTXZnWllwVm5fZkNpRHJRakF3YW1JUU5PeldKak8ycW1RZlpvRlVRVldzdlZOT09iSDl0dVVjLVA2dWFIeGRvTXJjNVJhc0RiUGdUU2pJQkU3ZlFENEJTc3VZcFh0TUJwSHF0TGFaQ3BWeGZ3U2tSdnNlaWI5RnpiSDc5SVlDcUM1RGlQOXA4WnYtaGRUTFZMdlBKS1AyZFhLNVYyTW8yVmljamxsbzFXc2xUYXZqZjBaVjRHLVlVT2M?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "ojk tutup 1 220 entitas keuangan ilegal mayoritas pinjol cnn indonesia",
      "id": "0ed5b2fa5dc448eb",
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
      "eventId": "auto-2b57884a1b1e344b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "OJK didorong siapkan mitigasi risiko kredit macet industri pindar - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQc0VfR2dtTGFkSnRBZ0VOTjFSNTJHNnJsUURQcFZrZ1ZmN2ZJVjFIaUUwbnVLNm5RRTE5WjExNEVqNkRSZl9vVmpVbi13aE9zOTlSQ3VBemZXLXlsUUFEQ0cyd0dHYV9ENkZpaExNZ3U5bVhldU55YTY2YUFqQ0Fjbk9tZHYwYlc2MnplNEY1dE1VWFdlTlpLRktieGdSSEFmMzJoczcyWlNTUDjSAa4BQVVfeXFMTmd2VVQyajJLSFFCTk1qN3YtTk9EcERXdHNxUWhtemRMV2ZMeVhVU2tMQ0UyOV90N0RhM2ppVk9RYmRlV1dSZXVfazZxejhhSEFRYTFQTG9wdjlVWjUtVGg0OHJWdXFDaEhqYmVmZU9jbk5lb09xaUlFbGQ4UmNyX29Oa1V4em9tZGhfTGhtUXRaWDBJR2dzY09SWC1LRjgzdkduLWFkSzNOVTdfZ2F3?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "ojk didorong siapkan mitigasi risiko kredit macet industri pindar antara news",
      "id": "d999f97a40e7d25e",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-398b6ab5d852c3ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "OJK minta pindar perkuat tata kelola demi jaga kepercayaan publik - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPdmFjUnUzM2dyX0ZjNFh4amo0NFVyNUdTWXdxUzhxbzg1NmhQR2Z5MjBsRWFXSlJHaGtVR1N0UTd0aTRoNGY5c1BPME44amhwaTk0ajVoR2UwUHd5dWQ1UTJiVWF5SmVJanVqeWd5U1pFZ2FQYThyeG9jX0hGdmdKUkkwSmkyNzhwWXlTUUk2QW4wOENPT1NLNWRWQlZtS1JfXy0zYTlNTWRLcU3SAa4BQVVfeXFMTnA2X2xoSU9QTEE4Z3JKWG9kZkw3ZW5KamRscmtzRGVMZXlvUlRLMFE3Q0VJTU5TQlBhN1JYbEdQRllGT2JHUi1OZU13TmRjNHBZVDJwSUlXam5rbThiSldjajlqNGNVMHpkakMwWlhreXVoZ0hNS1VlQ3pyaU1OTDZSWmgtS0JrTkVybVRCMnR3OVppN1NMc2VRaV9wU3NKUjZqcHNPNW1WT1luWW93?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "ojk minta pindar perkuat tata kelola demi jaga kepercayaan publik antara news",
      "id": "0277b4ac0f0dd3b6",
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
      "eventId": "auto-ee26418324e89d0b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "PWI dan AFPI perkuat literasi masyarakat soal industri pindar - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNUGp0bXJwTXI1Zkk3N3ZVS2QwbmY0d0Y5aDc0V0pHejFXcUJlcDRmTmxXeTk1VVZzYjVIdGJoVFkybm1PZEdBU3J6OFJhc3FzS2VRaWoxSkV3X3pHTlk4U3BJcDhkR0pWZG9mWTJzVElxX0FXQXVQcjRQX1VnbDZuNktNYURsamFyd1htcklNUW1wNjEza3FENkFmNTBSZ2pZMVloWlJ30gGoAUFVX3lxTE1tWGNOWTYwOHhzalIxdE9HNDVfRTRwR1FLemVkTWtHVTlBazlJTUQ3V19neXBrYXB5UXZfcXJpbjFMOHBpaWZvbzd1dDVCa2VfalBtS3BNNE9Vd3dQTjNMOFdJUVN0bjZYMVFsZ1VHbzRZdXR6SFR1SS1vVHV5dlVPT2pCVkwyQUFWWGRmeTVVWGpmZW9nVnpfdVpadl9xZllMd2hwdHBpVA?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "pwi dan afpi perkuat literasi masyarakat soal industri pindar antara news",
      "id": "0589b13f773727c8",
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
      "eventId": "auto-198b5a5571260fa5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "PWI nilai pers punya peran strategis untuk memerangi pinjol ilegal - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNWWJCVTYtc3VXOWZoai1BQllXMlFlNWJ1N29kTVZxS3hrcDNiNWhVcmdXcUhCUFpTVFUwOXU4SHV2M3NLSUhiamZaQ3EzQTFYa1BvZmZGMXJoVXBDSjBkd3lDZjRYczhOR2w0TGliS2FYTGR6Z0R1MGZVd2ctN0Z4N054ZUJBYXRiYU41ZlJJM2pfVzU1OGtZQVU0RzhTc3F6SkNieWs0ZGh3aEJL0gGvAUFVX3lxTE9fRlh4ekI1Z25uZnZPMkZWX09WOWE5cmlhcmEwN0FOTFBVQUxpUXllRGdMQ3piSXk5a2pTYUtvMW03eU1rZGNQZjdzZlkwYmtaTTJnS0NBVWc0ZVg1MTlDLUJldmdFYlJhZEFUUkpHRkVzcVNETlY1M21vZFBzZTBNQ0RVTHVjeURoM1dvT2JmaDJwcEo5MnhURzVacEZmaHNvTDJFelFmVFI5ZUtDT0k?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "pwi nilai pers punya peran strategis untuk memerangi pinjol ilegal antara news",
      "id": "ddd31cef59317972",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1276ac0dc4a5e24e",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-06",
      "title": "Peringati HUT ke-81 Kemerdekaan RI, Pawai Alegoris di Tanah Datar Digelar 18 Agustus - Pemerintah Kabupaten Tanah Datar",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPeklETEJkYTRPWTJ3U0FGcGoxQzAwMXNPaG5tbEN5M3BPNlJZUUpBSFhyVnpVV3VfVjZkY0lwYi1Ic082TF9RTi1SeFJWXzBRTnFDaXdpMkFyUHFoTDlMb2xMVWUtZW9vX2N1U281SEs5dVpNWXZENjNEM3RzeExzaG9zbWNUZy1JaXZlYlp2NkJBQmN0dWhvN2dFSWZVelBoWHRmSXFleVhUcW5RMnFCaUNPazZUdw?oc=5",
      "publisherUrl": "https://tanahdatar.go.id",
      "source": "Pemerintah Kabupaten Tanah Datar",
      "summary": "peringati hut ke 81 kemerdekaan ri pawai alegoris di tanah datar digelar 18 agustus pemerintah kabupaten tanah datar",
      "id": "44f790ec636f2c4d",
      "domain": "tanahdatar.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-44187c096581b288",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Pindar Ilegal Marak, AFPI dan PWI Bergerak - investor.id",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOczRTMEJSUWs0QUttWlUtc2l4UG9Ma3dIcFBvT2pjOHJYUUFOaXFqNndyMENtWjNERzVDU2g0cVJZYUtLd2E4cS1SSnhaelBUcFBrSWpad3o1amtCSXBjT1EtSldPYl9OYlVrbndPU284anZqak1kNzRycFFiMnBmTll3?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "pindar ilegal marak afpi dan pwi bergerak investor id",
      "id": "f3f49be930d05c07",
      "domain": "investor.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-169b768bd662ead8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Pinjol Ilegal Intai Data Pribadi, PWI dan AFPI Perkuat Literasi Publik - Inilah.com",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPWm1XYlIwOTlLT0JEM3BPcGR1dGpqUkJ6SkxMbmYxb2lVWkl0dGZJeFJRbl85aktUcVkyNS1zT0dWd3lEbkhTNzk5SFNUZ0FydDZzVDlaaHVtRDhBb0dkZUxabHZDeWJlazFLRU9JejlOZmlwU0JEMTVzdnNIOGl4cG93YVZBZVZjT216c2ZQSy1JdEFWVWFN?oc=5",
      "publisherUrl": "https://www.inilah.com",
      "source": "Inilah.com",
      "summary": "pinjol ilegal intai data pribadi pwi dan afpi perkuat literasi publik inilah com",
      "id": "7d187e91afc26781",
      "domain": "inilah.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-62101ff8c3f09f1b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-06",
      "title": "Pinjol Resmi OJK Agustus 2026 Terbaru, Cek Daftarnya Sebelum Ajukan Pinjaman - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNTnFYMDg5OTNIcjJjYUk1UDZ1YUM0YTFLMUZyWVpQQ0hQcENqeEdXaFNzNDZtZThEdjVic3lXYzhiWTZ3SjNTdjR4d3UxUnNnUUVZMjRyNDkyeFNORUJGdzg5NG9RczZTamFtS1RVd2pKdzM0Z1I0WmZJbDhGb19RLTRPUTJiNVJVM1pnYk04bmpHcXdzZUZRcXZjdXlqeWFuMVhidkxqb2NYLWdjbkY4TnZscmNIYXEzczd0Y1NWWFhkYm43?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "pinjol resmi ojk agustus 2026 terbaru cek daftarnya sebelum ajukan pinjaman kompas com",
      "id": "98f8fe3ba977346a",
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
      "eventId": "auto-fec4aa11e7d57766",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Polisi: Dokter PPDS Unri Tewas karena Bunuh Diri, Diduga Tertekan Pinjol hingga Suntik Rocuronium - AFU.id",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPZFNNeUd5d0VVOGJvRlRJenZWZWVVQmNaNjZRWGVldjBiSnUxUWtEYWdrd041aG55S3J2TVE5WTgxSURKWnBlWDlUdlFsV2JIYU9xY0VwVkVkRTRIRFJZVElMU016NFZyaUtpYWVNb3h1TERJNzA5VGE0UVRkYmpVa0hNX0o2dkJ4V3ZtT2c5X2xSbXoySThUM0tJV0ZrR1RCdVFQbE13YzFRQ3J0dXp1MWVBckhXcXYtVDZMMkZWRkNralVEV1loZkhYa3d2VUk?oc=5",
      "publisherUrl": "https://afu.id",
      "source": "AFU.id",
      "summary": "polisi dokter ppds unri tewas karena bunuh diri diduga tertekan pinjol hingga suntik rocuronium afu id",
      "id": "242bd1104eb87c14",
      "domain": "afu.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1fe773a71d7839f9",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-06",
      "title": "Porsi Pembiayaan UMKM Masih Rendah, OJK Minta Pindar Lebih Agresif - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNeWFFVFhKdnVKWTBOT2JsXzZQdERTeDAwc1p0WXFKWjgxMzlHb1RHSFlhc09kOEJfSE1kWkN6SGhUaTdMXzJ2eVRXN1dabjg5dWVwVDl5ZEFMaGRNdzMtaVpILXZlZHByeWpsVXhOTVVERi1fRTdhZy11dHBsNlF3WS1LTldRaFVGendnR3ZleDcwQUFP?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "porsi pembiayaan umkm masih rendah ojk minta pindar lebih agresif infobanknews",
      "id": "bf632bda1a2c647a",
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
      "eventId": "auto-d014d1f7bdf2111f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Satgas PASTI Tutup 1.220 Entitas Keuangan Ilegal hingga Juli, Didominasi Pinjol - SinPo.id",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNcW5EbkNQdGNCTGRYX2sweTB2dU5wWjNfOVZiQUpOa29CTHJ0akdvLTlBMk8tcmVZR0tDa0djRjBpbm5aSlpOdmJDY081NzRBZGI2R0FUV2RYVjhieWQzODJDUi0xMmpjSmpGcDdTbUJYV3llZE1ucGN6LWdJSGhrOHZ1ajhyMnR3d2l1dWE4U19YRm9IUkRHdnJncDJGUzZoVVo1ZEljUEhEMDls?oc=5",
      "publisherUrl": "https://sinpo.id",
      "source": "SinPo.id",
      "summary": "satgas pasti tutup 1 220 entitas keuangan ilegal hingga juli didominasi pinjol sinpo id",
      "id": "468fb02d5ee8c2ea",
      "domain": "sinpo.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-386a33101d2a0f99",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Satgas Pemberantasan Keuangan Ilegal Blokir Rp 723 Miliar, dan Kembalikan Rp 204 Miliar Dana Korban - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQRTZoWVRzb0F1TDJSaXdEWmRsSktwS0JvdFpNZzZYRkN0UEtfUXlRY25sdmR6dWUwSUttbDBLcDBwT1VDdE1vUi1PWjNmTEJjUVFXYm9hTVFhc0NxeHZyTHVCWmoxaEhfYlB3QjNYQmh4UXlHY0JYZE9tOEVUQzE1UkJtNTRabE5ZdXJhZkQtMUNqY3dMQlc4QUM4dmpBMHJGdXJyY2tCd2dLckIyVlR3ZWZ6Ym9QdHJpN0dFQXpWVmpFZURFUWxZemtpTVppdTJlWFg3TWRzYw?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "satgas pemberantasan keuangan ilegal blokir rp 723 miliar dan kembalikan rp 204 miliar dana korban investortrust",
      "id": "b1c9192ae9b4e2fe",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.7,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4fcc83fefa5ffa94",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Sindir Sarwendah yang Trauma Digeruduk Debt Collector, Ruben Onsu Suruh Mantan Istri Lapor Polisi - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQVlFtTG5uNkZUd1dnakZvMWdMZko4d09LSlZTWEdMUFY2OXdQbGZDd2twU1IzQVotYXkyUl9oNDFiQXh5cVgxalZtcEpyTW0xREVvMkg3UEtDdkdJdFNiMXY4a0oyak1kdnNHNm5kREZjVHU0c1Y5MFhCSVJYdFJiY3pHV2VZUldlbVUwRVVWZmJxU2N1dWlZMDlxRFhxcDB5d29TanJ4dzlCX2h1R3I2cUxienh4cWc4UkVpTVo0SHp5S3ZfcTloOWNoREJ3dVB5MHkzTGdMSQ?oc=5",
      "publisherUrl": "https://www.grid.id",
      "source": "Grid.ID",
      "summary": "sindir sarwendah yang trauma digeruduk debt collector ruben onsu suruh mantan istri lapor polisi grid id",
      "id": "164f9faa3dd12146",
      "domain": "grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fdf6b6e88dabb3b7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-06",
      "title": "Sinergi PWI Pusat, AFPI, dan OJK Perangi Pinjol Ilegal dan Perkuat Literasi Keuangan - RCTI+",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPeWZwbkY1c21tbmZfN25vSkVmN2swLWFrWnZ2MFMtOVFRa1JSOUxydk5wWWZ0TnYyNnNmRVBrcC1DczFVQ1Y4UldrTFJ0V3I3QTdLMTc1Y0FJT1dDNEJPQ2d1MXFaelU5Vm9GeE4wRFBPLWlnX3FYRjM0bTNYTkJJUFBqb1NlaGZYaXFXVF9HSnFMa245UGJpblEtMlRNVFptQ0VaSzZWQkhBYm9rRkVRMGVnTFpFaThFOGZ3MHNLVGVXdTB4TTRaZHhDMDdoUnV2?oc=5",
      "publisherUrl": "https://m.rctiplus.com",
      "source": "RCTI+",
      "summary": "sinergi pwi pusat afpi dan ojk perangi pinjol ilegal dan perkuat literasi keuangan rcti",
      "id": "c15ec90abce22ce4",
      "domain": "m.rctiplus.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-90c4131ba2e406ae",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-06",
      "title": "Tips Mengajukan Pinjaman Online agar Tidak Salah Pilih - Universitas STEKOM",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPVjNmWGZSQmg1MEszOGU4THJqMC13Sk9selVIbTRSVlF0RU5jNWdLUm5zMElPck4tc1NDUXNBWm05bFJSUEpjYzhqVkpYU2xxMXVCWmF2MzVjTkRVaXNwWXBCV2NJcDZfeXhDanFaR3R3cEsxMGFpVm1sY1NzZHlhLXdWUnpOSFUzWmI3THlqMUdNRkNJVTJ0Zm1kaHlSZHNYeWM0?oc=5",
      "publisherUrl": "https://stekom.ac.id",
      "source": "Universitas STEKOM",
      "summary": "tips mengajukan pinjaman online agar tidak salah pilih universitas stekom",
      "id": "565d6065c00ea6e3",
      "domain": "stekom.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3757471281dd2484",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "951 Pinjol yang Resahkan Masyarakat Ditutup, Modusnya Lewat Aplikasi dan Situs - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOX2t1RjF5M2ppMXFxU1gxWDlLeFFmZ3JELU16Z3F3TGtvLXJDcnQzZkE1UTZLLUZsaUlYSVdQcUtjcUgwb1pJX1l3UEhjUWx1S19rS0VCSzhYOU95OFJVUWZpZGM3d2YwQnV1Qm9XVWN0ODQxRHNBRnNvNldSLV9PaTMxeUdHXzlSVVp3T2gzOTNoRXA1OEh1OUNPQUVEaDlmMmo5WGRfSDVKUDJOdGtTOGlDdEFuZ2F6ZGJ3d2w1U003UdIBwgFBVV95cUxPSlVEU3NrZ19rVVJFTmRUY0h5YzVzYVFEdUw2enh4emk5MF81MXU4OTRleFJxTWdxMkVOX2ppRzNrRldibDhtNm5nbmtzT3NidDF6TXdpYU44NXhlRDRUQk1pRllya0FWTkEzNllYVm5IUGRCdl9lSVpvSGp1MDQzUTBRc0ZZeC1YY2dIdENzRGU2czhmQllVUHYybDdnMEFocnlZek5NQ1Uwd3FWeXdlMkJheDliOV9fR1FNLUVpX0FNZw?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "951 pinjol yang resahkan masyarakat ditutup modusnya lewat aplikasi dan situs suara com",
      "id": "b56930c042cfc57d",
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
      "eventId": "auto-437f2856810c7248",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "AFPI dan PWI Perkuat Literasi Lawan Maraknya Pinjol Ilegal - RM.ID",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPUmZ5OWlPN19aSG1OU0plcGJLWkJWMXpST1BGY0VGbVFjNlZVaHo1dW90WDJsM2lRSVNnd2NmdHo2NFhQTC1URW5JSzZwSFRBdk1UNXFWZEdRTUVwMTE5aDJvd0c3THFqeWtrWFJZRVU0cDBldlIydEViMHdEWWhOSjV3cWxKaVN6WG9pZzJVcHZlMWVsVFlINWpIRUhzOUtVOHlmdHFOemsxQQ?oc=5",
      "publisherUrl": "https://rm.id",
      "source": "RM.ID",
      "summary": "afpi dan pwi perkuat literasi lawan maraknya pinjol ilegal rm id",
      "id": "f0a8795c39073006",
      "domain": "rm.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-74ef35831bfe2a63",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-07",
      "title": "AFPI: Credit Gap RI Rp2.400 Triliun jadi Ruang Besar Pertumbuhan Pindar - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQUDQ0eWxCeVlKLUNFUDQ4MmZzSmNDd0dOTS0xX0VCRU5mNFE4Q2xpUUhac1NuREhmcVpFM3VVdTdlUzRRNGVEYzdVRTdXS3FZSGV3RFczcWhfeDNUMzNKQVNnQmExNlRNdjA3TmZfRlZNZngzWlhYeW9YcVp1elRCejBkODRGSmdNTGFmWi01aEhQdWJBXzFZOFppRQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "afpi credit gap ri rp2 400 triliun jadi ruang besar pertumbuhan pindar infobanknews",
      "id": "41b4ceba9a73de64",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f1923dc0237881e6",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-07",
      "title": "AdaKami terapkan prinsip human oversight dalam adopsi AI - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPdEw1Yy1TR0tMLVp5eFdpX0JCMUh0a3B4QWR4eFFVU2g2bHZDc09JQjcxV1RhSTFDeFhwY0FhT2dnM2hqcTcxMEdtcVV6aHVUb2R1YU5fX012VmxBS3ZnXzV0b3JDZmNXSHJ1QkRxUE1MX1ZGdEhQYW50OEU0TEdtQkF6aEE4bVYwdWI3eE9wdFRZUTZqRWU4elN6bmhyOTjSAaIBQVVfeXFMTXZFXzZqNlhZaEJDQ3NiMm5qaVpHb0RUQkQyVGRzRDdZOEJpSHRWZE5yV0VtZkJHMXhZblpraGNiOVF4OFhTR2doRUhtZDdIelR2Yzc1aGFRQ002X0hNcngtRnk5cklveXNwQ3BRMnZ0QVQybVg3U29qbDJvNWIxSi1abjhRVVByX0t6WGNOVC1UTEJLRkxSb2J3eXRpUjFLdUpR?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "adakami terapkan prinsip human oversight dalam adopsi ai antara news",
      "id": "cef8eba1c401d224",
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
      "eventId": "auto-cd7cc2f4b5b86521",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Booth Halal Exporience Siapkan Spot Konsultasi Keuangan: Aduan Soal Pinjol, SLIK dan Investasi Ilegal Bisa Ditanyakan - Suara Merdeka - Suara Merdeka",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxQbkNyNWhJN0t6cXRtV0tDWkJCeTZkZllRRjRLeTBtX0UzdldNT1F5dXBaOUt5UHhKSEMxVHc3TDJTckhtT2JIQVlLb1RubVphbWlJNjJCdXZDV0U2UG5tdUUtdmxqemlpMTA3UURYdWNQdmdjR3RoQUlBTFY0MXp3WVF3Y0FWOXRHcUFwZ2d1TWU0MGJVRkViQnZuOTFmOEM2ZG1JRFhUVm1jRkNYTXoycFRUa3FxbGxjMzBaSFd0V2UtRTVWNzZ4QmVGRUdmWlJpMFY1MU0yd2xIQkJ0QUlSRVpoMHV6SXNxaTFxN2xhbzY4elFjT3oxQ09jWTZjampv0gGGAkFVX3lxTE04UHRISko1QVZMUlpleUZvTEJGLXQxZjBzLVBtN1hWUmFPLVRuNkV4bnZKOERpbnRaLXowVkpUajRXVmJ5a0djOXcxMDZERERUZXhnRV9vdm5OekhMdWgzRFRIYk5oZkxoT0VlalU0SGhMSHlBSDJDbXdTaTFRMEtEYkZlVFFTd1hweXJOellvbFZGcWNSN3N0MGRaTzVRTGtVM09lNkFRdHFtU0JGaloza2taOERMWjduQmNUSEl2bnQyVFFYQ0taWGVYMXRTcjVMNXlSTTd2Q1YweE1hc3VYa1FUM2NabmgxT0ZJd0ZsblNaQm1QY3BOeFVQaER3Z1kzY2hIZ0E?oc=5",
      "publisherUrl": "https://www.suaramerdeka.com",
      "source": "Suara Merdeka",
      "summary": "booth halal exporience siapkan spot konsultasi keuangan aduan soal pinjol slik dan investasi ilegal bisa ditanyakan suara merdeka suara merdeka",
      "id": "0fd0c409126e104b",
      "domain": "suaramerdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2eb3b786dd022ef1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Booth Layanan Konsultasi Pinjol Ada di Fajar 2026 - Radio Idola Semarang",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOV1pyYllBOW03U2pWVzlaWnF5SEhsOUhrWTZ4N2REa0tuNWlfUDVlXzM3cDhENG44NEdMMUppd1B2ajhWMF92YXJyZ29OSTVIWFg4TEwtWDhJTlc2ZHgxZUZZMEVYV3ZQUElUMWI0aERzVlFaSzZkVnpfd1NKdEVkcW56WVo?oc=5",
      "publisherUrl": "https://radioidola.com",
      "source": "Radio Idola Semarang",
      "summary": "booth layanan konsultasi pinjol ada di fajar 2026 radio idola semarang",
      "id": "19e2cf014e8c1174",
      "domain": "radioidola.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1b07488663fc9de2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Bos OJK: Analisa Kredit Pindar Bisa Pakai AI - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNUFRnZjdOb0V0NFVRVjRvWVJfQlg3aUNfal9CaWMyTTZFNGVIc0wzVU5ZdVNFWGtsZkMwVUlwblpUaXdHNjFCNGw1el9rb3cza0NIVUxId2xXZV9oMmVMaGNkN1NxdG1PdnpNZGtyLTUxNnNhMnFBTzRhSEJ4Mldma0tzSHN0Ymhkc1FldmZwdjRlNlo5bTRrVTQyOU9KcVdtS0JlY0NYS1_SAa4BQVVfeXFMUHBFMFlIaVBNZTJ2bnJiMVpMSjcwWDVRVEZ5b0FyamRnRVJlWFFJdFdMQ0ExR1VQTThPc2UzU2g3ZmljeGdudzFudXd5RnBlMldYNlhZUkpWOVUxRFdwVHpDdXo2NTFvLVotVkNxNXJsdjA1SjdUX3oyZHFhT2tNdEN6S2FCaF80N2hqNndxYVhpc2xDbmNGOGNRS25tTW5OS3Q2cUZOci1oU3JBZWh3?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "bos ojk analisa kredit pindar bisa pakai ai cnbc indonesia",
      "id": "d81fbeb76c803c30",
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
      "eventId": "auto-0467e82a23117613",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Dana Asing Masuk ke Pinjol RI Tembus Rp17,28 T per Juni 2026 - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOZnRLRU9VWVpTOHI3dG5aYlBGMW44ZVpiU3NmMlBpeVNBUVRDMkROdU50bEdnUUYxdkhoQzE4VmlmNGt3a2hadEVuZUdwYkM0QzFhOWE4cUUwUW9Od0Y3REtYZjhXOGtkNXlrODhYbHlwbVdORUx3VS0wdWdfZkFudUZXc25fNkEweHFOWEpQUDRhYk1ITGhBOEYyZmtGbWluUFZsYkF3ajhmNDJSOXVjbF80b0psa0pINmJrOENFc9IBxAFBVV95cUxNb1ZfbWhiWW41UzQ4TVM4eVJHSlRFYW12NlhSTDlZNWhCUWFTdlhQSDFWUlYxM0JRWUV0OHFoNGswcW9fUHMweWRObEdJcDd5ME5LWkdmVWRHdmgzb2VFR1FidXRnQmJMN0xxLVBSREg2Sm1NeWdOWGF0a3JQMFdKWHR5UVM2M1pyZFRkRnpWYnRHc3pYVlI3NWZIMmpwX3U2WWtFZTBIUm4yX0R3YzUwY1VhTEwyNVNXWC1mWE9fd1VlMmVY?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "dana asing masuk ke pinjol ri tembus rp17 28 t per juni 2026 cnn indonesia",
      "id": "b8ac3f9dc3efe071",
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
      "eventId": "auto-8cc1b43e971bea98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Dana Asing Rp 17 T Mengalir ke Pinjol RI, Naik 34% - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQWEI3Y3M4c1lwQmRzNFJRTFhXMmhPQl90SFQ2MTRWWDVDLWViUm1oQVQ3R0VMV3FTX3dnRlBnaXAzSDg2U0FxeDdOcm1ka0REcTFxQURMaVU0OHpwTDY1bHNaN1ZpWGlNTUpxWkNoQjE5emVHX0czRUJFTG9hNUhmbVZSREt1dFp5ZTVtZ2lDRC1oZWYxRGZv0gGcAUFVX3lxTE53MXp5UWpFbjZTQmdaYS1nQkF0MXEyRDdsZTN2Q3BPUkF6dk45a0ljSHFRdDZJRS1XQXhYellfS0doZlNVVFc3Umw1VldScGhCSnB0STlBQkM3RzR1V1pRa3N6YS1VRGNHZnd6eEZUcWliX3ZuVjhOWkZuaGdhV2h3SzVFU0t3N0N6eG1BN040dGZqUWM2dXFHbFpkLQ?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "dana asing rp 17 t mengalir ke pinjol ri naik 34 detikfinance",
      "id": "5cbf4513f2947401",
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
      "eventId": "auto-e39bc1f888641cdf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Dana Investor Asing ke Pindar RI Tembus Rp 17,28 T per Juni, Melonjak 34,18% - kumparan.com - Kumparan.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQNWw0M3VDOGZyVko5LTA4aWhsay0waWxtUkd1WURFYm5YVUcxNm8wdEhNUnowQVItazBiUUtPYWM0WWtnSFFKLVpyS09mbFE1bXRScEtDaWx5Zk5mV3VVbzVoU1c1clNEWXMySW1WWnNLNE15MzJRSDg2UVhwdTdnUHh3cW5sUlpFallqRkdnVWlJQlRHTUlRbjNkWTBlOGMweWlWYkg0MzNvbzBxR1lFa3VQNllfWUR2TGJObjhoRdIBxwFBVV95cUxOaEJxa3NSeGRrV3MyaVRnSFh0ZFNYc0YzZTQ0NHFYMm9WQ0ltcktmSmRkQXJiaEdIV3prU2ZjOWZpejA0R2NzSXlucWJlbUFuNXJaYzduMDhzQnE4UXl1NlBUaUI1TTB1R2tkUVVEUkhUNEVUVk1kMF9ReGpKamh1SXk1SzBXVnlERkRRMjZncnJxUGJ0VzlUWUZBbFBBSkduQkRyUzZnRHBFMC1nNllmQ1hEa2t1YWRCblR4c2VMay16bUdzWHBr?oc=5",
      "publisherUrl": "https://kumparan.com",
      "source": "Kumparan.com",
      "summary": "dana investor asing ke pindar ri tembus rp 17 28 t per juni melonjak 34 18 kumparan com kumparan com",
      "id": "6200fa5501cd630d",
      "domain": "kumparan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f96872b84407b51a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Diterpa Gagal Bayar, OJK Sebut iGrow Berfokus Selesaikan Pembiayaan Bermasalah - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxORFBzRE8wNHIyRnRoU29RMG13YndvclNRUUprM2xLRGV4RnlWZmdnSTJjcVgxSWxNclppOVFrLWVvaE5zZHFqUXVqYVh0RGRWLWp0YlFrS21WbFJ6WkVMeEN6Ylk2R0NRWTRyblJNdnFsYS1PUk82bGRUNHR1d29yX1FIaWdCQzdmcDNfRUJGdGdtQy1vN2dKYVlGSlYxMUluMzYzSGw4Uy1Vdm01QWdyWm930gGrAUFVX3lxTE43bmM5T3N2QkZiU2lfZHNaVFR3akNQNmtleVFyYVA5Yi1NTmJBRWtRa2ZiYWVZYkhYYUZFcVljQXBfcVhra29vMG1NeTFVc1c3U0FGNFlsUnN0aFRwTURGRlktXzM0RzZYZ1l5b1VLTDljbFFocVVXb2FMNmQyVnB0d0VYZ1Z3cXB1MXFSNllybGRpV0FrQzNmUEtiX2hQMzVSNmhJNGU1MWhKVQ?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "diterpa gagal bayar ojk sebut igrow berfokus selesaikan pembiayaan bermasalah kontan co id",
      "id": "8ea006d0e97e9b0c",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 75.9,
        "label": "negative",
        "negativeWeight": 3.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5bad7fad52e6b60f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-07",
      "title": "Foto : OJK Awasi 16 Pinjol dengan Kredit Macet di Atas 5 Persen Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNQjZuQmRJdzBYWTVwcVVVc2R5S2cyeXFlOVJDaC11UVlVSHVpMFVCN0tITExnWDIyRVBlOF9iV0xfbzEzZV9UNTBLaHpWRGRSYnFrXzctSEQ1RjM4cDZVd0h6TTQ1NFIxVTFXcE5Bd05jTEh6elkwN3F4ZnUxUV8wSlF5dmJ4ZlNhcGNacm54UVlZS0dIMXdXd1dZY0F6cUt6VUtpb0tLXzZ1Q09xM0FYb3NLTHVVUQ?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto ojk awasi 16 pinjol dengan kredit macet di atas 5 persen halaman 1 kompas com",
      "id": "69176f97298d8ec4",
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
      "eventId": "auto-e81bfa9f55283c45",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Investasi Asing di Industri Pinjol Tembus Rp17,28 Triliun per Juni 2026 - CaraPandang",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQRldPa0JNZUI3cjd2Q1p1NG1kaV9ZY3ROV2owekpkVUpueGwxSUkxYjg5aXFaLXZUcFprd2F4Z3pKOUdvdXA1SHVrNVU5VmdoaXhNWGk4MWEtWDZIVXVpYXdlbEM1RjlfSFRrSklzQlp5MThkWVpobk5KbWt5Y3pWcG8zc3dTclAtTzJHR2g3SmJYNGx5Y2pHUl9hQjFaWnlTWms3Y0pPXzdQQQ?oc=5",
      "publisherUrl": "https://carapandang.com",
      "source": "CaraPandang",
      "summary": "investasi asing di industri pinjol tembus rp17 28 triliun per juni 2026 carapandang",
      "id": "371447bb1cea940d",
      "domain": "carapandang.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7903807d1bbd684c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Keluarga Harus Jadi Benteng Pertama Anak di Tengah Ancaman Judi Online dan Kecanduan Gawai - Muhammadiyah",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPMGtqOWNCQVZfNGlqUnFIZFJOekNRVzJ3SjgxcV9JRDg5OU12TlR3eUtaYmE3OGRtcjNkRGc3VHpUa2ktRzRtV195QTVNSE9mNy03ZmlYTHFYTldjNGlUeVpfbS1vTG5ubzQyV2JnNGQyUlpIZEdVOEhUcU1oaEdDOTExVDhraklPd2FwSzBYMGdXd2YtanhhRzVXMTFCQ0JMWENkdEJNTG5VbGZBVHRsRm5zYllFZXlUQW1NVFlzVmhZV3Zo?oc=5",
      "publisherUrl": "https://muhammadiyah.or.id",
      "source": "Muhammadiyah",
      "summary": "keluarga harus jadi benteng pertama anak di tengah ancaman judi online dan kecanduan gawai muhammadiyah",
      "id": "728b9f6864ff8d4c",
      "domain": "muhammadiyah.or.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a6656776206844d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Kredit Macet 16 Pinjol di Atas 5%, OJK Perketat Pengawasan - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQckQwV1ZTVHpjNElPUTlhX0RQakdRNzBOdktkcUFoMzlxVk12RjVycmdqLVJ3V2JwaXZHWXF6RFM5YW5wbVI5V0RuQmxxUXFFRFdwMVliRG5yd092SkdRZENiT3hrM01RS3JUdUdEZGdIeVEzTTNKV3hQdkk3MGRwbFZmaEctY1lFY3BILW90cE1tc0ZSTkhWQ0l1Rnc1U2poenfSAacBQVVfeXFMUGFVRzllbXo4MlFtazU2NnIyd1UyRUtqUTV6aEpYTXpGY3V1Tm50OXBnN3I2OXFPNGlud3VrZlM5ZmV3N3hIOWpwbUVkMEpKc0Yya1BhQndCdW92akwwVEE3akNTSS1RRThRU1U1TjlxNGZNNFZwN1NEZVlmYTAzQW1PMjMwMTJYT2lOTVR6VXhfSkxvRzJTOEZWMzdaUTR5WGhzMWxUWTA?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "kredit macet 16 pinjol di atas 5 ojk perketat pengawasan detikfinance",
      "id": "b98d4dee3e765b60",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c388e7d24d3d982",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Nama Pinjol Tenor 12 Bulan yang Legal dan Berizin OJK 2026, Daftar Aplikasi Pinjol Online Cicilan Fleksibel - Portal Purwokerto - Portal Purwokerto",
      "url": "https://news.google.com/rss/articles/CBMijwJBVV95cUxOcUZIdl94bG16NmNHSjdiMzlIeU9KZ1ozbG45VUlIQ1ZyN1M4UkZJUFZQTnJyZjRQSmxBMGZOOWJiMU5ndVp1cmtBbjBnSXBTU3F4RlJuam9wc3JJbW5FdV81b3U0SHAyRlNOZmFMaV9DMDlDcjd5NjlXRmdLSkdBbWF2SE9qQ1g3cGFkOG5LSDVUVE9vNW1uSTBjUlBNMVNUSHpfZ3FwREdqT0xwUTVMU0ZIam9TRkFxRGlWblh5bDJDWlJNS21laDRGZEtsSnZPRkpIbUJKRlZsSGNTWjdsUUItU3ZQcjZuYUJCcjhnUDc4SFU1aXlBMGg5WGgyeXBuUE14VGhpLXZ0MVJHTGQ40gGIAkFVX3lxTE5qRkZBTWJ6TFEwOThqLVY2S3k1R3U5VUUzc1FKY1AwNVJlS2pYbGlwcVA4MFdJcmNhVjQ3SzZsY3VxYTVBY1Vyc0V0Y1FpczMzNUVIc3NDRV9xLXF4SW5CZUNhSkFOVnhTRHUwa1A2dEhOcXdOd1o5eDJrcFdIUVVYQXdfT3pnY0pYaW1yUm5KNkxSM01BZlZoc2ZjZmFybnpKR1RVYndvN1dRV0VDemo0VGttbDVoRmJxZzRfM1E2bFcwQVZMQUJLaFRzbXo4SEd3bmgzZFJEcGY2eUMwbFQzVlMyUjZtYkZmRUJRS0hlemtzeUl1Z0VtZUdjR3MwLXhBbzB1eHhwTQ?oc=5",
      "publisherUrl": "https://portalpurwokerto.pikiran-rakyat.com",
      "source": "Portal Purwokerto",
      "summary": "nama pinjol tenor 12 bulan yang legal dan berizin ojk 2026 daftar aplikasi pinjol online cicilan fleksibel portal purwokerto portal purwokerto",
      "id": "b450276924c230d9",
      "domain": "portalpurwokerto.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-900d5fef5d83fd15",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Nanda Persada Tak Terbayangkan Ruben Onsu Foto dengan KTP untuk Pinjol, Sarankan Pinjam Uang ke Igun - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOUVJoaTloQmpGMHZHUWpUMTYtdjRTVjZ2TmNYX3VEMGxOLW0tOHVJNHNPV21ja09HQXJkZm4xVVRtQlg5Z1pnclZ0eDF5MDJueDFneC1nOFlrNEZFOTJsY1VaSDdFOFhwWFFOX3hPaFlvcklpLUNGRE84cXpFQ1JtNWZJTENwYTBSblJwVTNLUDlsSW5RRnd6RlNWRW9uRXptaXhoTkFld2c4NDFHZEJHRXl3NkpoRnFKdG41VXFac0Z1U2NDOTVmRWNvTUZBMllVNVhaSGFqMA?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "nanda persada tak terbayangkan ruben onsu foto dengan ktp untuk pinjol sarankan pinjam uang ke igun tribunnews com",
      "id": "a923c45eea7b75b0",
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
      "eventId": "auto-f43b029a44cacea4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "OJK Awasi 16 Pinjol dengan Kredit Macet di Atas 5 Persen - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPOURCUnR1NFMxTkFTa2V3RmdaZlVJbXlWU3RFV09zajRTZzhWN0IzLXNKQzhud2k2RmVscldVb1gyZ19CZmNyRWVYT296c0lSVUtKQWhCUUUyQndyVmM4RmFXMDQ2SkxVcFVNdkhSZ084TThWM2EtSHZScy1uRUhpOVJhMWdXNlZfUlN6LXRNTHVfSHprSklsejhIQTJqOXVTVndPVTRpS0U0TUJrQ2IxQUVrNU1YNjA?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "ojk awasi 16 pinjol dengan kredit macet di atas 5 persen kompas com",
      "id": "e83063766ff8794a",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f3247ee843ae58b4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "OJK Catat 16 Pindar dengan Kredit Macet di Atas 5 Persen hingga Juni 2026 - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1YcTUxU0RkeHRxMkwzVXpKWXdFa0lXb2k5TlFiUmRXSUxFWUs0VTBINzR4aWd4dGhXa19nSHBnUlRaMk5tRkJtMjMxbkh2aGw1b0VjUTVIaHN2Snh4Yzk4ZnZZZVVBOGJkRXkyUEZB?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk catat 16 pindar dengan kredit macet di atas 5 persen hingga juni 2026 achmadnurhidayat id",
      "id": "c8509bcfc3c061ad",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fd600d74967b7171",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "OJK Memelototi Data Transaksi Pendanaan Pindar - Iconomics",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNN2o4Q2w0b3g4bEx6czJlbElJWXdvWlZiUS1Cc2tSaTg1bzVRZzk0akVObmZMYVN5OFg5aFdTdGpxa0xHd1RvbURDV1hNbnNMbHhFM1ZhRGx5bWdSVUdQcExTOXFnc1U5cG8zcGxWQlpBTktYeENuYk00M3NPcXFhTW1aOFFtc0FTcXl1cV8xeXFmQzQxak14bGtB?oc=5",
      "publisherUrl": "https://www.theiconomics.com",
      "source": "Iconomics",
      "summary": "ojk memelototi data transaksi pendanaan pindar iconomics",
      "id": "0e287acb7451982a",
      "domain": "theiconomics.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8f63b3fe0a9be2f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "OJK Soroti Kredit Macet Pinjol, 16 Penyelenggara Catat TWP90 di Atas 5 Persen - Integritas News",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNdFgzYXo3Zmp5YnA4cmRfN0trOE9fMmh5cXZiSE5vSmdmRzNJemM3bk9qME5ZeXdHYjYzS0VHSElXUTFjNUNXMHR6bjJlVGttOWtReDMwX1ZIOGo3d2VUUS1iODR2bHY3dlI5SW5Eb29mVXBsY0JvMkFSdFRLMnQ1ZUNqU0U0TURFajZlblQyVjljT1RJbWkxRVlSOGhMZG1aX3FyQXNNZw?oc=5",
      "publisherUrl": "https://integritasnews.com",
      "source": "Integritas News",
      "summary": "ojk soroti kredit macet pinjol 16 penyelenggara catat twp90 di atas 5 persen integritas news",
      "id": "44621ef68391959b",
      "domain": "integritasnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48d6beec2016ea68",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-07",
      "title": "OJK: Jumlah Pinjol Berisiko Kredit Macet Tinggi Sisa 16 per Juni 2026 - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOLW5uSDF3TGZpZmxZX3lheVhBaTIzRnctZTZMTGhTSU92bXQzeHJHaUFFMjRPeEE4elF0WGJKeWtYMmhSdXB1d1JuR1c2NGwzR3VHT2treWVSQlBNUHlKSGFldXhjY0ZONzZXUEY1MmM1NFZZSE1hX3VTbEdKYTlvR1JydndhVnZYRTVWMjFFWVZSUTUxRklqbkF3cnhIN29kOTBsYlpKdjVPbHhfdDFSb1B6M1dDaGRtaUthZWJ1ejA?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "ojk jumlah pinjol berisiko kredit macet tinggi sisa 16 per juni 2026 bisnis com",
      "id": "eadf327dde98ca30",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-75af4f300f060486",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "OJK: Laba industri pindar naik 10,14 persen pada Juni 2026 - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxObXFFaV95Y0RVMmxLOUJ1eE9KdWExbXpmOXh3QzRpRk1mQ0RISllZckxfS3kyaHZwWDdWN0l2QXdGYkZxNlptQTE1NXdoTEVIT1pEMFNIYUUxMExkWHYzbjZUWUpjYnk3cHFKbzJhLXIxdTVsTnNiVXYtZnRXOHhTR1gtUHVUeXRQenVkX2tLNUJrUVFGUGNRbHJ4T3ZsZFnSAaIBQVVfeXFMUHRhMUJXMHY1YTZWbDBqZGFDLURoVGFnQm1rdG9ad0FHVXJETlRrTEVRTHFqNTFGQ1A2Z1o4VzVBZ0xCWi03MDlTdFM0UUxjUGlKdWRDbTA3RFg5T3YwVVVxZmxxd0ZndEZpVWM2bmxQdm9oemp5VHpkRVl6WDVzOHJ2X0owcndSdGwyWWRTNGp0ZjFLMW94ZEpUc05nckJNRFpn?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "ojk laba industri pindar naik 10 14 persen pada juni 2026 antara news",
      "id": "e45ae573b498f2a1",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e5b1b27606030aa0",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-07",
      "title": "Pendanaan Luar Negeri Industri Pindar Tembus Rp17,28 Triliun - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1oVzNXVDIzSHVWVUJncVpxaVFmcWQ1ZFh2U3FQZW91TkhBVUtuMkljYm9WZHgyZUlDdnJmcnBwdHRCSGZYRUpCalo4VXRNMWxRUl9VQUNBOUpvQ000V2pYX2xNSTZ0QWpwNnEzZ1lFRTM3cEVX?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "pendanaan luar negeri industri pindar tembus rp17 28 triliun achmadnurhidayat id",
      "id": "3ae45a4d1ec1b005",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f880f5298ee86ab2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Pindar Raup Laba Rp 1,15 Triliun di Tengah Lonjakan Kredit Macet - investor.id",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNbkE4QUJ0aEdkNlFNQ1NJZF9fdGRfZmx3bXJsVXJyeDJxRmRKOTU5R1U2SFhTczNPQnVjMFIzZkgycmFXQUZHM2o2WHhfemQycU9OZGhIZnlsbkhIUGRoem5xM1pnSnBhTV9UbkxYUkhjc2lNdThIM3Z6Q2pfTmxpSS1WVVpyZTNTaWpPMmhXWUhvLXdXZVhGMDJ5UnZIQ0k?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "pindar raup laba rp 1 15 triliun di tengah lonjakan kredit macet investor id",
      "id": "49276ac57ef3878f",
      "domain": "investor.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-de7f2543e2636879",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-07",
      "title": "Ruben Heran Sarwendah Terusik Debt Collector Tidak Lapor Polisi, Bandingkan Kasus Hate Comment: Aneh - TribunStyle.com",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxPUFY5VEJsM3hocFZ2SjJQaXRDenRtaVVEUGdZWHg4bEZCWDhDTjlYYWllcTlhVU5LSVcycEY5OWNnWl82WkpLTXRFVmNIRVVXcUYxU1gwWUg4OG9lNWpUdGJYdWF2dC1yQk16UnVzczVZR1Q1QUpUbm9ILVhYcVdxRk5fVS1aU1lhRU5CQ2h1Vm00TFk0ZUl2c1FHTnBHd0JsdUp5NjhGb2xnU2MxQXN1X0ZBNF9DZTZUazZWUzhSb2ZoTzJ4R3RmMkZCeFJQOEVjcHhGZ3ZTSEFzQ3l3MjJFcnZVaw?oc=5",
      "publisherUrl": "https://style.tribunnews.com",
      "source": "TribunStyle.com",
      "summary": "ruben heran sarwendah terusik debt collector tidak lapor polisi bandingkan kasus hate comment aneh tribunstyle com",
      "id": "31bae92bf93bea7f",
      "domain": "style.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7267bd3c3e300c6f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-07",
      "title": "Waspada! OJK Ungkap Modus Baru Pinjol Ilegal, 12.800 Platform Sudah Diblokir - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNWW16VXZSM3hISktUTjdFRjlCUUtaVnFLdkhpVWp5SnlPUkVEcllmdGtFN0ZwcVh0UTFCelNmdl8xV1oxWm1UdUUxNTNzdXNYYVoxaUFPbzhHU3JSZnlMbDdycVBvanhBZ2F6WjFvdlN4SFhacEExeklVUHRwRUI4OENacEdHNHhoTmF5RTZyTWxJVVY0eTBqM0p2X2ZCbzBT?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "waspada ojk ungkap modus baru pinjol ilegal 12 800 platform sudah diblokir infobanknews",
      "id": "ce0407ce958f66ef",
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
      "eventId": "auto-ffeb9f3498575966",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-08",
      "title": "5 Hal yang Bisa Dilakukan Saat Kamu Gagal Bayar Pinjaman Online - IDN Times",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNMHE2WDFqRjRpZXM5aElCd25uX0g5NVZJdHM3U2ptRGFfUmRoV0lCbS1pTEM2TGtRQS0yME41N0hiU2FuSUpZTHZTNi1VOTVONEdZSXVGNzlaWVVHNkRISEZKeGFoZGtiRUFsN1o4clVJbUxUV0N3LXB0M2tzZ1gwZXJaSG1lb0VpSHNGWFExT3N5a1VCaDh1dk1uVmptZW1QZlJ1NDVvX2U2VzZESWtMekQwVWo3S3ZjdUdqcG9NQTctUdIBxwFBVV95cUxOME9LNkhTdF8zUktSM3BvWTJOVXhnR0ItNjZkZ3o0TzdFbmYxeWlfdUVfdUZvNHd2VURYY0Z3QVdVbHptNzhuRVVhWXVaeFphc3lvdjdyZzAwZVRSeWJvajgwc0diYWpMd3UyOTg4THhvRENaOTRxN1cwb29iRVFacVRmVWstWlJ5YzVJOWIwQkhVWVFpQTVveXZhVDNQRmNsMkplZ0xIQWZwVTd5ajR3WktFV3lad1k2cEkzd1dldzhIYlQwWFYw?oc=5",
      "publisherUrl": "https://www.idntimes.com",
      "source": "IDN Times",
      "summary": "5 hal yang bisa dilakukan saat kamu gagal bayar pinjaman online idn times",
      "id": "f8bc394ecbd2d92b",
      "domain": "idntimes.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-07ddb310b60d9b13",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-08",
      "title": "Cegah Resiko Kebakaran Dikapal, Satpolairud Perketat Pemeriksaan Muatan Truk di Pelabuhan Jangkar - Harian Bhirawa",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQcGR0cjlKb2FuWk5qV1hodFRQSE5VVVpxVGl5b3VyNkRBTF95RFY0NnM1VV9uNkI4QWZyYzNWQUY2TmQxMUJRUlZTbEtPRzhOOGRPdEVUQl9uSGc1ZmFWV29WanlpWVFkZWdlTDl0SEdBWVloYTVxYjJHUHZmdndEVElfMi1sRkh0YXNwWWpWZEFVYTl1bjFxcl9henRJMDF1NW93bFlIUkdXOFVHX2g3V1czOHpYbjRQcHp5Q3JVVFFFM3M?oc=5",
      "publisherUrl": "https://harianbhirawa.co.id",
      "source": "Harian Bhirawa",
      "summary": "cegah resiko kebakaran dikapal satpolairud perketat pemeriksaan muatan truk di pelabuhan jangkar harian bhirawa",
      "id": "416b0a92bf5f2fdb",
      "domain": "harianbhirawa.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5dc273a9ff701e2f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Daftar 94 Pinjaman Online Legal OJK 2026, Ini Link dan Website Resminya - Medcom.id",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQNS1uSkZvVXk5OElIN1FOVlpRWGkxTWhBbGwtbDBfRXBrQ2prWUpfYkd1S2NuMDZsZ2I3cXYtcDBiOHRYNVA4eHEzLWhJczlXZEVWUUpSMEJLQUtQNVVZeHloeGVvVTFBcHZwNk1ONFR2QktON21CSlhLOWpEOUJmMmlWSURfcUktcmZLdVpDVl9HN2Y2VjR3bVM5YkcwY1RDLU1SV2w5QU91MlVmcVVQNFR5OXB5NUk?oc=5",
      "publisherUrl": "https://www.medcom.id",
      "source": "Medcom.id",
      "summary": "daftar 94 pinjaman online legal ojk 2026 ini link dan website resminya medcom id",
      "id": "f9132c0799403a0d",
      "domain": "medcom.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.9,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d7716e15df1971c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Daftar Pinjol Resmi OJK Per-Agustus 2026 - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOdndQY2VKbHd3c3R5cFNxUm9SU1h1dFo2YlhyekR3LTY4WElpc3g5QUVwdXh2VlRIZTBxU2pqNFlyZ2diaDRGT04wWFE0d2ZrbURFd0xZTms2QVpxUGtkZXl0NTQ2ZVRKSWVwcmc0bXVrSEZ4TGE0WnU5WjJhczF4dGEtM1prWC1vd0E?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "daftar pinjol resmi ojk per agustus 2026 metrotvnews com",
      "id": "2ade6204f1a886a1",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-45c63c18eb9aaf11",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Dana Asing Rp 17 T Masuk Pinjol RI, Pertanda Apa? - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQNVhHSW9EajRkbXZsbTg0Mzl4dWNCSExyY3BhQl82QXViOHo0VlpaRUxreTd3NnkwY0tPajg1REdJNm5aQzJBb2tsZG5TdUFIU1B2bTlSTUQ3T2dBOUpLNDYwQTYtNGRlbVNacFcxaW14QUFETWhLMUVmTHpraTFkODdmX1RJQ2RpR244eTV1WGhpaXliWVHSAZsBQVVfeXFMUE5CSk1waHlwSExNTEljTmxDdEZqWW9EN29rdlFGVXk0WHhDbFBORDVnWHBJVWZrZS1jZU5CY0w2c0JVMkFDcm95VW8wZXNyV1dqYVBpUTJ3QnZIMVc1b3kyblZTbzZYSkFGOWRsTUw1cG80akp6TzNXUXUxQnRKbThlU1hrTnlBX0dPNWdqZUhJOF9CbEJmRUs4UEU?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "dana asing rp 17 t masuk pinjol ri pertanda apa detikfinance",
      "id": "b985ff6b5deb1716",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7d36df8b03930183",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "KKN Unhas Edukasi Warga Alliritengae Kenali Pinjol Legal, Paylater, dan SLIK OJK - Disway Sulsel",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNMVVTUzZfQktjaVplRFdRNDJRaS00em9JMTNOdjM5WGlqcmw5a25jTlQwaGlHczJkNXJfN2c0MUZPSzlNLVpLNDdoQlptdzJVRUNINm9aNkNmU1psWWJRV20zdHNCb0ZYMWpYRnI4SVNhdlY0RnRwWnNhQXNUcGpUR2txWlRvNnNORXpUcnVPTEFHeEFEQUpfSzlJS2ZmS1BxMFZWaHNSSUtSZkpVampFcFlDanpTdkwzZHhmdA?oc=5",
      "publisherUrl": "https://sulsel.disway.id",
      "source": "Disway Sulsel",
      "summary": "kkn unhas edukasi warga alliritengae kenali pinjol legal paylater dan slik ojk disway sulsel",
      "id": "b745d1975a6c9257",
      "domain": "sulsel.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0f119721f6ba135d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "KUR Rp 100 Juta Tanpa Agunan Jadi Angin Segar, Pinjol Bagaimana? - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNaUM2R0tYTS1GV0p4QUxLM3JidHY2WnNFWFc1cGdwN1dBZmFtVEl0MnptUzU4YmRZamFQakZtT2hTRDN3clIwazdJYmNuenh3UDlBbWY1OVNOZk45bzg1eWllemdJVE1EclRQUzBfQjlXejZpenRzZUVZcFJFNFNpcW5CWUstcVFiUEx1V3pwR1BOcXdRNVlaTkhHNWNuT3hyamg2eU9PLWE4UmVNanFNMnR4OVcyXzlYTUhraHlKay0?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "kur rp 100 juta tanpa agunan jadi angin segar pinjol bagaimana kompas com",
      "id": "522416bd8322fb32",
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
      "eventId": "auto-209e5b79a5c9ef98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "OJK Catat Pendanaan Pindar dari Lender Luar Negeri Melonjak - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQLWJfVW56UGdydHQwTXluNEJSUDZlbWZOenlua0xnV3B4ZGlPSEV5ckVFTElJSDZVTFJZT0RWelVtSmFYN2xxaHFBS3prT3EzeVhzenVQSGo2elNZSmhrRnAzSHdfcTlrTWNkNjlXbU9qXy1La3BaTFdmYWhrSDdjWQ?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk catat pendanaan pindar dari lender luar negeri melonjak achmadnurhidayat id",
      "id": "484c4e5e7cc74580",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d30cb38e38de643",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "OJK Catat Pendanaan Pinjaman Daring Asing Naik 34 Persen hingga Juni 2026 - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE45VFdscDVDNGtaWGMzTXR5ZWc0UkhTOFE5TlhvcW5HRkZhZHBCbWd6bXdJbzJZa1ZlNGhkYkp2bkN6cHFZbVpuVWpFS21nckpNbC0tSkI2dm1kZDR1Wmg2VHM4azg2Nm9mZklxM1NTOTc?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk catat pendanaan pinjaman daring asing naik 34 persen hingga juni 2026 achmadnurhidayat id",
      "id": "ec0f198c69f81b67",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e735e22adbd1d9b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Pendanaan Lender Asing ke Pinjol Tembus Rp17,28 Triliun, OJK Soroti Risiko Kredit - Aktualita.co",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQb2VQd3pnZ2lib0F5VmI0TlB6MF96ZFZ3b21ONEd4UGc2WjZwdS1lZnZPSUMtVGRGalA4aUthSlpJVHpyYUVNbkh5QVpza1VLRFdmSjZLNHU3bUlfR2ZwZm1rS09hcmota3RXZ1UtTjYyeDBSRlBuaElFNGFKT3JyaU03TWdyZUU2YzhvNEYySHlMbWttUDFzM2ZtdlozUXYyRlBBbjlQa2piLWth?oc=5",
      "publisherUrl": "https://aktualita.co",
      "source": "Aktualita.co",
      "summary": "pendanaan lender asing ke pinjol tembus rp17 28 triliun ojk soroti risiko kredit aktualita co",
      "id": "86101aa07f60817d",
      "domain": "aktualita.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e53fec56d187330e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Pinjol di Indonesia Dapat Suntikan Dana Asing Rp 17 Triliun - detikcom",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxORzJmYnNvdDJnWXpubUxKM3AtaHEtQ1ZhWmlwSFBLYXYtMEdWLXJvdGxDQ1o2RFluUThJMENMMTVqMVF2QW9lekg0ZkF5SnBjRnpHNUFDb3V6THZkbm0zSFNFM1pfNkJwS1AyUXFYaWtLRFJDQTJfTTZGTW1TYTBvS0Uwc0VCQlpRVWtpMzB2S1g3WlBKOVNsT1ZHNll3SnE4S2FlcTZyc9IBrAFBVV95cUxQaEM3aHBnUUhOLWF6bWk5OWNnSW9xeWxTVm0tYWRRZkxxYUFLcEczYkRjTW1XOThCRFR5NnIyTmlnbnppUnFXT3A2aDM3VDc1SXZSRk45Z25MYWxrOHFRNTNJNFBjdGhxX25DVHRWWlJWd01TWUlvQjZGUm1xSHVJc0lvSGlwZE8yczJvRDFKeXVfN2J3eTVZdGNqNXgyODEzaXBxaGRtTjg2S1Iz?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "pinjol di indonesia dapat suntikan dana asing rp 17 triliun detikcom",
      "id": "2d77a820142b5220",
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
      "eventId": "auto-08b45e95a12bcc70",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Polda Sumbar Ungkap 5 Kasus Penyelewengan BBM Bersubsidi, Bi - Tribrata News",
      "url": "https://news.google.com/rss/articles/CBMiwwJBVV95cUxQaUxDcVd4ODB3cU4tdFNWOVc1ZDBicnlkMHd2STBQQVZLdjZpTUcyV2FhMDhxTGNCUGdvY3FrRGgxb0VtM2M5X3hRRE9zT3VuQjZyLWQwcHlSY1JOQUxCV0Z4LWpaZ3FLTWk4YUxDWnhfajZDblR2aGl0N2FBb3prYWFLdG9GRng4MHJfeURXMEVPN0JGU2lXZ1RLNUVOajl6R3IyTmh0bXllZ1kzLXZucTdtRzMteHp6NTFOUjRZNjNHaTRQTjBkanJVQVVlaTJBV2xGT19iaHpCUm9CRFpaYXg3cWt4OU02Z1NOQ0VxOXNJNGVBYTA1U1h0a2Q1ellwTFNYWWZsTGllSjNVY2E1aVJzd19mRm1QSWVra3Q2R1ItblNBZ1NuMVVsZExTUmUzMUZsekk4RFVNb2JMcWpORWJ0RQ?oc=5",
      "publisherUrl": "https://tribratanews.polri.go.id",
      "source": "Tribrata News",
      "summary": "polda sumbar ungkap 5 kasus penyelewengan bbm bersubsidi bi tribrata news",
      "id": "6bb933e88dc4df88",
      "domain": "tribratanews.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d8019a6f32efd648",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Rp17 Triliun Aliran Modal Asing Masuk ke Pinjol RI - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQNUEzVUctQURlS3ZBcjhvNkJxNnQwT2wzb2JpSkhfUVlOZGVha2JkQ1NtWHY5YjFPOUJlVUtSd0Q1aGpYQmlRd2FfZzhmX2cxZ2xoSjZUb1BNTXVSNFMyUEkyUHJTTGthb2ZLanZydFlmWl96MkpJd0FkMzlvRk1HdVo3VEF6dl9ZeU1yTHlfcTk2bEdXS1FBZnJxbnRFd9IBngFBVV95cUxNWXBTU21aaEhGRUo1QWNOVzNhUHVDRnZhYWtVYVQyNjhFVDlvRE44M1ZTbnY3Z0F5VmZwd2hfZnFxV1lLTHlJSktMUmxWbk9fUjhpSzJWMDE2QmpYRHB1S3N0bEY5OWs5Tk5FbGJnTmwzYUxsY0hrZlVRdGNFajVaQUtEZV8zTVIxeGhyemVDVDg2WjlSUGs3OTU0azdoZw?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "rp17 triliun aliran modal asing masuk ke pinjol ri suara com",
      "id": "58023987b00fcfae",
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
      "eventId": "auto-6dc9fb9494c93ecb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Tak Percaya Ruben Onsu Terlilit Pinjol, Nanda Persada Tertawa: Kebayang Nggak? - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNcDhBbkgwWTJMTGdZS3VCeTRjV05xZlRVMWdqSDIzY0dJeWJkTjJ3VDdMbkpsR3Bqbm5Ua1ZpWXVsZzhKcVVjQUZ0enlmeV9WWnJyY3YzRERsVTlBOUVtR0RzdUw5ZDFHUy1IcmdoY1dKalZncUY5eERHZkFGUmsxYjRwSWhkU3BqbEZTOGd1VzJiRTRKZUxIbENURlZZeU5SVmpxWmFFM3pxWVRLcVZzYW4xSkhBRkVrU1NZ?oc=5",
      "publisherUrl": "https://www.grid.id",
      "source": "Grid.ID",
      "summary": "tak percaya ruben onsu terlilit pinjol nanda persada tertawa kebayang nggak grid id",
      "id": "910644f38d9d7fc7",
      "domain": "grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d246307b5af7498",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-08",
      "title": "Tumbuh 10,14%, Industri Pindar Kantongi Laba Rp 1,15 Triliun - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNRVFyU3B4SERiUFYxYV9Vcm4xSWNiWnJfSTJ3XzAtLTBmclVQbEhmallKcWdSR3owVXRvRjF2amhZQVRwQ1czUEMzWC11RDNJMzJhOXFzQ0p3anF4TE9TVkl1dzAyTzl5Vk03N095bmV0bUFpaEs5Q0JGTW8tdnFoQUhFU0tmdnVHekhsdktYaUNvd1o0NDRMZ3ZheGFZdnd3eFE?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "tumbuh 10 14 industri pindar kantongi laba rp 1 15 triliun investortrust",
      "id": "ed0a846a6e650b26",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9eb7f7012e0be16d",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-09",
      "title": "KUR Tanpa Agunan vs Pindar, OJK Ungkap Peta Pembiayaan UMKM - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOVXJpcnVpQl9oY2FBWTFIbFFSMWdqZ0tud0tUUlh5b3JSRmRTVTR5V0s5c1cwQ1ZjTFNTX1JCVlY5NGNFenNjeTdUNnAzaFZjSE9oUlMxcWxBcjl3U25HZFcyTy0zdGowb08yaXhicW1Vd0ZndXlPV3oxc3FLX1pGNzdlZ2MtNVVGSHlXWVF5ZUZvRHpiQUtxYzNZMUU5VHdUN0E?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "kur tanpa agunan vs pindar ojk ungkap peta pembiayaan umkm investortrust",
      "id": "544ba7b659e83db0",
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
      "eventId": "auto-b450db3cded3057d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-09",
      "title": "Laba Industri Pindar Tembus Rp 1,15 T pada Juni 2026, Naik 10,14 Persen - kumparan.com - Kumparan.com",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQWnotbmZfdDFWSm93d29qdnVVckFDckpjQ0NLTWdXV0JELVp5ZU9SZWdzNU5yOE9DZzhObmhvRzdMbGl5R2VNaDdhMmZxalZRRFVVb2dFNkE0T3ZqSFZtODdsT0Z3cmZtcl9MQ1doOFRPRzBUNjVrZTgteTd1c1pSc0ptQzhBOF9uRTBoSGJ5c3VuZmpwZ3VmTUFTUVNqSWdfUVhKN0hjV1ZOVGtvR3ZKbDN4aUNvTTNpMnfSAcIBQVVfeXFMUF9wTHc1WFZYcm5tU3RIdDRNYTVOVEZlaFBFTzlhVDEtVXVFS2ZGU0ctZlJYMjJjcUhQYmlURmJ5bU5sbzVPaHczcnY0b0NZTWF5MFZibkUxZ2dfbGl3Nk9lNzF4NGFqbUxvNVVXOExIOEZPZWQ3M0lNWVJVb2E4Y014bi1JbUFhZ1ZmdFluVGlYc3c5VzZ4Y2JaMHFUUUNVa2RnWEU4OTJZdHpYazUybjNmOGR1eW5NbFFnWTlYQkwzLXc?oc=5",
      "publisherUrl": "https://kumparan.com",
      "source": "Kumparan.com",
      "summary": "laba industri pindar tembus rp 1 15 t pada juni 2026 naik 10 14 persen kumparan com kumparan com",
      "id": "43a1c89b718e0010",
      "domain": "kumparan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8ad739524352f324",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-09",
      "title": "Setrum Paylater Kian Terasa di Ekosistem Motor Listrik - KONTAN",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNN0tZZGVrRXR1bjZmYWlSX3EyOElGTGhJUW5YaHp0OUJUdWZQSl9UMnhuMDFoOEYwQzZYYks2N1JnZ1Z1RlAxQXhLWEVVODNoZEJSVVlTRExPS0trRWhZSEt0bXlvbGo1aGlQQ2lTdy0yOWliTTNxbkhSbnR2MFNOcGJCc2paaV8tX2ZqZFdLVF9aZw?oc=5",
      "publisherUrl": "https://insight.kontan.co.id",
      "source": "KONTAN",
      "summary": "setrum paylater kian terasa di ekosistem motor listrik kontan",
      "id": "15ddf17869d26d51",
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
      "eventId": "auto-de931c3468c68312",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-10",
      "title": "Daftar 94 Pinjol Resmi OJK per Agustus 2026, Cek Legalitas Sebelum Pinjam - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxONUtlT1BRQmFPYmlPQ1lzTHBZNjFReXl6dDBXNVRvb2ZSNG9LNzgtY3lTblBjZE9BYjdaR2ItQlBuMjhMbnl6X3ZDUHhjUk96YTBtTFZPZlF5Um1weHB4LWx2OXJpdkh1MkhicGJIVG94YlNaRzJmcm9HU2tYbm9SMGtWLXE4Z2JCN085b21GUjEyODZucEcxVVlvWEEwN29ma0I0clJzMlZsRDM1TWo3ajhZT296MGVuOVRuMWk0WGdYeG1CUmc?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "daftar 94 pinjol resmi ojk per agustus 2026 cek legalitas sebelum pinjam bisnis com",
      "id": "0276239569fa8f98",
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
      "eventId": "auto-4117b090d078ed31",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-10",
      "title": "Galaxy Z TriFold 2: Rumor Rilis dan Speknya - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBUdDVCaWc3cHBWOVZxd1BfNGt2RHl2WFI0QVFmd2FsU3Q5T3AxaENYN1VzdldxX29xV0hoOVE2d1R5RVRRSVhoX2l5U1ZabWFiNzhWWDJkTUg5NWNsbVZlYUFqSjh5aV9a?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "galaxy z trifold 2 rumor rilis dan speknya kreditpintar",
      "id": "3bd1686be84ed774",
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
      "eventId": "auto-a3731434bfdeac79",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-10",
      "title": "Industri Pinjol Makin Berkibar, Laba Tumbuh, Banjir Modal Asing dan Bank Himbara, Rakyat Tambah Menderita - AFU.id",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNZVpWTVh5WnppUUI5QlU0RXZyMVp4MEd1LTNsVHJzZ19zSkR6SV9obWtOUnhqU2hlVlBsRmk0SG1LbWNhME5nd3JkRkc0eXh0ckg1dUdSemtIaWFvSjVBVVJsN0FST1NrWHd0NkF4bGlnMjlJTHJ5YTNvYXRpTERFajUwenFZcHhpNUhPZ1pCUDRUUDg2OG1NNXZyY1VDZGUwcmU0dE1LM2FoT2Z5SWVCRWdhbG1vQmE1T1gzODFQQ2lzUWc?oc=5",
      "publisherUrl": "https://afu.id",
      "source": "AFU.id",
      "summary": "industri pinjol makin berkibar laba tumbuh banjir modal asing dan bank himbara rakyat tambah menderita afu id",
      "id": "0191ab4c79ad8e10",
      "domain": "afu.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c41cdbfe55731f05",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-10",
      "title": "MA dan OJK Gelar Diskusi Aset Kripto dan Pinjaman Daring di Jakarta | MA NEWS - Kompas.tv",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNSVg4Q1dBY2FQa01iWUJ1dlotdFhEZnNLMi1lSmM0aHFiTmF5cjBpeTBLdWFMaUxIZjQ5WXg5M19Bc2dWVlhlcEVtQ1NFbWkyUTlQQkRmX2QwaDlkcmZHQmV3dFE3NDl0UzlZN1BWMTRVdF91X0VCVFpMMmJibXZ0WFQ2dnF3YUF5emE5dmp0SE41UEFJOXFsX0pRUzBQRkVsY2ZSS3QzOUNTeFQyNnRUX2JvY9IBuAFBVV95cUxPdzU4T3d1QVZQbXIzR2JvWFAxeEQwVTFqT21xblJwOWs2NTJ4WlhmeXVxUUVxSC1EcU1CTUcwYVFYdlVKT0hYQnljbHQwS1h6UUtRYTlDeGZORk5aMUtVRU9HVWdKRmF2YWN4aHhiNzJsZEF2cEhaNWRXWUE0TmlEcXhJZkpmMHpVZlU3MWo2OElLalZ1U2x2cFcwVktJMnk3V3I1V2dvNk1FS0hQMjNNQlJoTHRNUUti?oc=5",
      "publisherUrl": "https://www.kompas.tv",
      "source": "Kompas.tv",
      "summary": "ma dan ojk gelar diskusi aset kripto dan pinjaman daring di jakarta ma news kompas tv",
      "id": "2beb0ad9e3df6138",
      "domain": "kompas.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-75dc14f944cd1b87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-10",
      "title": "OJK Awasi 16 Pindar dengan Kredit Macet di Atas 5 Persen - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNNkhyMkNQcWw0QUM1ZnRXS3BZc01RMGRkVGw3OFVNczZYWHlpU0JWcG5UNTJrWlJhT2RYNmdiTGF0RUI2VnMwaGcxU2hQTDNGTTNnUThYdnEzUENFaDZKTkhtSGl4ZVpGaVEtZEQ2b0NtVzlZTDM1VDdOckUyWVZDSlJXX1hyQWMz?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk awasi 16 pindar dengan kredit macet di atas 5 persen infobanknews",
      "id": "ab26120a1b691b4a",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ca49eb68c15e2064",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-10",
      "title": "Utang Pinjol di Sumbar Tembus Rp 1,49 Triliun, Warga Mulai Sulit Dapat Kredit Bank - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQdmttVHY2NUV3amVBSm5fd1g3UHdkdmRMMlB6NklDRTNRYjM2S3JPRjAzSHVIS2t5LXFwN01tY2RBOUt0RE1aWlFCRzYybkV1cWctbDYzODQ3bi0wWDM3bVFTMHpOdmh5M0tNOTBLUEZmSHo4bmFXSV9yRXdXeDVyeElJRks3alEwLVR4aDFNWGNMUnVKQ1VvNmxlUlM3T1pGeXVLTFlodXd1THA3cXh1VHduckU5d3gyZ0dvMG5hQzdYWEkybVVkUVZtRlRZWWpyd2RWUA?oc=5",
      "publisherUrl": "https://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "utang pinjol di sumbar tembus rp 1 49 triliun warga mulai sulit dapat kredit bank kompas com",
      "id": "33756b99b6a6aebe",
      "domain": "regional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac59086bea2db298",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "APPI Curhat Soal Penggunaan Jasa Debt Collector, Ini Alasannya! - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOMzlRSDhWb0REOWRkM1M1a3A1UDBhbVdCTWYyeVFGam5CODhIbUliM0NUMzRNV0RhS1Z3cUZkU20wQVE5RWtOOFJ4M3k1NDlLaUppbEhlY1lrdExJajF3ck1OZlhvc001YmlrY2lFeWNNZzZ2S2I0aVlVTkllV2hKUi0wVDZfRGFVOUFlSXJQTlhoVDBpSGhzcWZIeGJNYVhpMURWTUZjOHdsUWNuVFV5R2V0RHJacGtTMnRxUNIBwgFBVV95cUxQRW5YTkVkLS1YSXpkbUZIWVIzTk90ZnpTUDlWcEx3eVozODM0aTV4SmxwUWxtQnNIbk9qVThvdUEtWG5uRjBubG1pdDNhQVU4ZkhGYUdSemR1VVRYRVl5bVhVNDZ0QmpfdFZKUGhKMlcwSTU0YkVpVFp1aXk3VmNhaUswa20yam95NjZpZW9BazltbGhkbWdlU2VnajAyakkwZ0VsUFF2Z1JoY2RsVGtCU2QwYTJqeUJKYUJaYjFqX0VzZw?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "appi curhat soal penggunaan jasa debt collector ini alasannya cnbc indonesia",
      "id": "9b2c345b1cb42d1f",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cf7f626ae9a04a98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "Daftar Pinjol Resmi OJK Agustus 2026 dan Cara Mengeceknya - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPZTBTQXlDRXZ2WnlWQ2xSekI5Zy1MRXpZTlo2T19MakpkbTJGTENsSTE2MkxDQzhyQWNCWDhPdGo5bGNRb3h3X3JlMmpydUQ3cTFFaVBwNllMNWlnbjBrU19oWU1GeEdYeHF4R0UteDNwSTB3NnkyQVR5ak90ZTdQcTJiZ2tySkNsRWJwNHpleGZyVjVmVURvNEQtbWpQelI5Um5kcHJuT0lYWUpF?oc=5",
      "publisherUrl": "https://tekno.kompas.com",
      "source": "Kompas.com",
      "summary": "daftar pinjol resmi ojk agustus 2026 dan cara mengeceknya kompas com",
      "id": "4d08e0a7582845fd",
      "domain": "tekno.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4130841654e6b60a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "Deretan Pinjol Legal Berizin OJK dengan Tenor Panjang, Aman dan Anti Jeratan Ilegal - radarlampung.disway.id - Radar Lampung",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNSXZxajFFNmh6WXlhbE5xZzJrS1Fvd0l4eGQ1OFhGRV9pdk5uOEQtMWFaMnJnUm5ZRllRV1ZCNUlBbEpDUEFEVmt6bk9Kc3FJbkJBRzVCckpISEplUmpQNlRtekhpM1l1ZWY2RXBsMml5enVUSXF5Snp4cHM4SGFRcEV2dHpSZm1mYnhpT1BjLXVLaFdqTXRMVEpSZXhxeEZyQ0NvV213QktoVElPWi1mTEpxQmVOSTh4UFVzVzlBMVR3UdIBwgFBVV95cUxNSXZxajFFNmh6WXlhbE5xZzJrS1Fvd0l4eGQ1OFhGRV9pdk5uOEQtMWFaMnJnUm5ZRllRV1ZCNUlBbEpDUEFEVmt6bk9Kc3FJbkJBRzVCckpISEplUmpQNlRtekhpM1l1ZWY2RXBsMml5enVUSXF5Snp4cHM4SGFRcEV2dHpSZm1mYnhpT1BjLXVLaFdqTXRMVEpSZXhxeEZyQ0NvV213QktoVElPWi1mTEpxQmVOSTh4UFVzVzlBMVR3UQ?oc=5",
      "publisherUrl": "https://radarlampung.disway.id",
      "source": "Radar Lampung",
      "summary": "deretan pinjol legal berizin ojk dengan tenor panjang aman dan anti jeratan ilegal radarlampung disway id radar lampung",
      "id": "f41cb225bb72f879",
      "domain": "radarlampung.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c2625a5099f8f14",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "Foto : Daftar Pinjol Resmi OJK Agustus 2026 dan Cara Mengeceknya Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQX09IaG51YUN5WVdDVVdBRG9IYWlUaGxwUkhnUWZTQU1sc1VmYzQ5LU9uOVhIbk9jaldUZVBqRjl0RzNCOVJ4YjNRMzhIcDhBZ044UU9RbThvVndhSGt2MnNDdWVJbVlkcVhqNGN6eGExQ1hLWTRWeV9hRmVaV19ieG51S2FONnpFRW9LMTlTZ3lOSGVtbG9xajFRb0Z4bmYzZUpQbDFUQnJwQlIxazdBS3NoYTR1Vk0?oc=5",
      "publisherUrl": "https://tekno.kompas.com",
      "source": "Kompas.com",
      "summary": "foto daftar pinjol resmi ojk agustus 2026 dan cara mengeceknya halaman 1 kompas com",
      "id": "90f5dfdd131c4478",
      "domain": "tekno.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3d4e484cca0e4665",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "Iis Dahlia Tak Percaya Ruben Onsu Terlilit Pinjol Seperti Tudingan Sarwendah, Ini Jawaban Savage sang Pedangdut - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxPd0VzRDY2ZEI2eWQ4Z25Dc1dZdzliejdLNmFtSDU5bldXOUhKdDYzbjdwZTd5ZV9sTzVSOVQ3N05IOHg0SEw4X3h2Sk5SVUM0R0hVNFRqdkFCdWc4RTVKOXFyYmxfcXduY3BZQi01dFAyVER6LU5tZlpzbUZjalg2NE5BSUhWMi1BRDFtQVpNUGlDV1pwRG9pOVhMVWU3RVJsQ3N6MUg0cFRwQWFleUdNa3ZPd282QWJQY3VLc1ZyaUpKZzFVWTktcS1BY1VrMnE0TmtGQXVBVTg3Zl9tNTdKSDZmMlFhWlFTcnc?oc=5",
      "publisherUrl": "https://www.grid.id",
      "source": "Grid.ID",
      "summary": "iis dahlia tak percaya ruben onsu terlilit pinjol seperti tudingan sarwendah ini jawaban savage sang pedangdut grid id",
      "id": "3e8836a6e6d0b608",
      "domain": "grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7411b0f1c32d4f73",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "OJK Ingatkan Mahasiswa Waspadai Pinjol dan Utang Digital - Kabar Sumedang - Kabar Sumedang",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPUWRlYXFTU29zbU9xUHhmR0t6ZVFGZzkzS1c2bDZMS3Q3UmgzdFFkQUVUQkpCNl9TdUZqTTNFRFp2WVR5eWJCdzd4dGFoUlNsT2NWOXMwZTJqNWhlSGRQWlVpQWZaRWE1a0dxcEZER2JQeUU3djJsUG9ZQ1M1U3k1VThXbnhwSzhVb1k0M3MxUXVoRTVfUE9pOF9CeUg3RXZ1MDZORkdaeFc1MDZab3BDa0hycXEwTnhmR2RYdGdXcVrSAcYBQVVfeXFMTmhjXzctX0ZFbE5hVURtaEpIZ3B4NGh6SjBmcGwzM2ZGaDZHRXNEcnAzTnU2U1l3YTg4YmxlSjNoUXlFOUdrRjZZeWd5WVFmWkNNcC1YbDI1Y05tcjhseEg2Y0JtZWt2dVpJS3JvZHVlWXdiQ1huc1EyMHF5OXRJSmNWSkRmQ3NOa2JEcEo4ZjRFZTdPOXh1dUcxVkVSSlFWREE1MnA2Tkp3V3FocGNzSGFFTHdZb2hpNWtYNjlzLTB6RHd6WDZB?oc=5",
      "publisherUrl": "https://kabarsumedang.pikiran-rakyat.com",
      "source": "Kabar Sumedang",
      "summary": "ojk ingatkan mahasiswa waspadai pinjol dan utang digital kabar sumedang kabar sumedang",
      "id": "9ab8b38ceebd155b",
      "domain": "kabarsumedang.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-36c3464154c06383",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "Pemerintah Hapus Kelas 1-2-3 BPJS Kesehatan, Beralih ke KRIS Mulai Agustus 2026 - Tribrata News",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOSjM4VF9ON3REdVFXbzUwR2JjczBSaUFQWU9HemljZXJvM0NPMXdRQzRQQnlleUhHd3N4VkJMR3RHQUMwVnBkSTZLXzVlbV9tUldBVVlhLURDMEVrNlV4NVNFU3c2a250SGZLb0lLWlhScHpmLTRKZ0tjOXN1ZkFTV3hENUszUGhiLWhvRVBCQ2d1WFBPUFpUeHUtdWZpMlVELVhoYURpZFhvN1U2NFRMX3lfdFFIZGRfa1c1NWs4d1MyMnY0YzBHQ0l2Ti1WYzg?oc=5",
      "publisherUrl": "https://tribratanews.polri.go.id",
      "source": "Tribrata News",
      "summary": "pemerintah hapus kelas 1 2 3 bpjs kesehatan beralih ke kris mulai agustus 2026 tribrata news",
      "id": "7b57beaf5036625f",
      "domain": "tribratanews.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-63e2563b7ce8eafc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "Sarwendah Sebut Ruben Terlilit Pinjol, Iis Dahlia: Gue Tidak Percaya - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPZ04wdzhTdzJwUEd1Z1JMeGJtUTVpek1jRWZhbEtxTy1NMkhHMnlfUHAtN3U5YkpkTjBvcU5oSThXY2hPM294bWppX2YtTTRDUVdLRTJqMElNeDhhNXMxMXIxWkZfaldiaEdSV3hUWHdnVHpBQ0wyMUNJc0V5UEpuYzJKRzhHOC14ZFVfUWxxNDROaXdvM0tiWlhxMDU3a2FfMmt6dlllVFhQTzJwLUZnUQ?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "sarwendah sebut ruben terlilit pinjol iis dahlia gue tidak percaya beritasatu com",
      "id": "7656d3ad3b0a0b61",
      "domain": "beritasatu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-458effafdecb2a58",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "Sarwendah Tuduh Ruben Onsu Terlilit Pinjol, Iis Dahlia Tak Percaya, Bongkar Keuangan Jadi Artis - Halaman 2 - TribunStyle.com",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxNSDBhWm1fZlNLMUhGSVBmQWhpN2pCUzFFWExyQVVHSWN5RlE5SUtFNzBqc0xGMDNhTWtuWDJ1X25xWi1SdWVYRmJLS2pkNlNpM3NhOG5jTmt1WXZMTEtiSHRHUUwzaENiOXN6VXlac3RnUlNJOElELW5sMkI3eGVVQng3NkRqeG9FUGNrS1hEZ3d5cFdpb0pncUFLZ2hXM2xoREdhdEFNOWxsX1dPdWYyaDlwMlpBaWZ5U0U2SHhUSkpKR1lBMHlBQ0FSU0ItMGh2bXZucWpPdkNCQQ?oc=5",
      "publisherUrl": "https://style.tribunnews.com",
      "source": "TribunStyle.com",
      "summary": "sarwendah tuduh ruben onsu terlilit pinjol iis dahlia tak percaya bongkar keuangan jadi artis halaman 2 tribunstyle com",
      "id": "924e080de8b1931b",
      "domain": "style.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6089f4b5996f4ad4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "Telat Bayar Pinjol ?, Siap – Siap Rumahmu Kebanjiran Orderan Ojol Fiktif - buanaindonesia.co.id",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQQkh5TlRlVWJBQmpNVDY3X18wX3NCbUhGRUd6NkRRNmxWczgyWU9uWnhlbWdEZ1RDT3B1NUd2TEVyNTQzMEJtN1o4Sks5ekZmYV91Z2tmZWJ2R0pmenoycldYamFRUVVhRFRTR1Jnb1lqN0ppa01fajBoNGtJeE0xOFk0dC15MEJrWGxiWUtpMzF0dUdBLWdrTDJOaTdMdw?oc=5",
      "publisherUrl": "https://buanaindonesia.co.id",
      "source": "buanaindonesia.co.id",
      "summary": "telat bayar pinjol siap siap rumahmu kebanjiran orderan ojol fiktif buanaindonesia co id",
      "id": "79554c2805c568f3",
      "domain": "buanaindonesia.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b6b60cdb892ad0f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-12",
      "title": "AdaKami Ajak Masyarakat Pahami Informasi Pinjaman lewat Kampanye Baru - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNSXV0X3FjM3VEMDBsdkpscV9sV0s5UktxOUwxcmt5Qi1oV2Npck83Vi1CSGZ5NVk1ZXJ6V2ZRa2pxVzF2bGJBdVl4cWoyYzZjUUZyal9BNmkycm5KT3VfSmpIOUVnNUViQllyTnVPZ3JnN3E2Tl9MeTV6R1RHSHphZWpNTEdJQmRkNVF0d3dEeW50cFFiMERlaS1Fam00MUg5cmxZek5mMzV4YWNmSGpGNQ?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "adakami ajak masyarakat pahami informasi pinjaman lewat kampanye baru investortrust",
      "id": "21ef03d58335f73c",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d12d145601bec11",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-12",
      "title": "BNI Kudus Peringatkan Dampak Tunggakan Pinjol terhadap Riwayat SLIK - Joglo Jateng",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOWi1nWVlQMjBETG1VUWNVYUJNZlZ5SzV2QmlrVVRndzJPRVIwOXFDTXBlR2JHeUxQNjJxZWtqVVIyNkJxNkZyUVVyT0I2eTdlX3M0TENkUy11NF9ObTE5OHhqSnIxVlAtel9NbjU1RWxxdkZCeDFVcENtMG9VLXV0UjUzWnNRaGJ2X3dDeHlnVXBBQW1CVk92Y25tWHB3VkxzRkZ4ZWJR?oc=5",
      "publisherUrl": "https://joglojateng.com",
      "source": "Joglo Jateng",
      "summary": "bni kudus peringatkan dampak tunggakan pinjol terhadap riwayat slik joglo jateng",
      "id": "7fa297be3057e49a",
      "domain": "joglojateng.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eb0ce072756078bd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-12",
      "title": "Jebakan Manis Wanita 21 Tahun di Ciamis: Untung 10 Persen Berujung Teror Debt Collector dan Utang Pinjol - Insiden 24 - Insiden 24",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQWDVtdXBzeHFpVWdDX05Cblpma0lhaFpFMEdHU3B2dFg2ZzB6TjVTQ3l4S1hhUWpQV2Q1NDVUX0Z1WjRsT3g0SDhRdk8xbVhFc0d2cVAtc0VIcWFsT085WklCdlhTQzQ0OEJRVXEwc011aTItUzE1MFozcmtKaGFOMEc0bW9HUzgzak1MM1hZRi1tanZDbHpaNmpESU5WOEI0UlZSQXRNUldEaVd6UVY4ZEVHdUhnQlJCWWVST25lVW80dTNFM0lId3EtNHRkRmdxdmw4eUpkdlA5R3JsZnE0dFhPONIB6AFBVV95cUxNZTlta0RZa0NhNGpzWnRqX0pKdDNFMVNmV0lUaFJTWjBRX1NrQmxWelY0eGlVOGNlSVBfemYweXdraWl3a3ZvUF9lNVpuLUlaSTc3UGttaGFrakRMRWFRZktwenZJQWFrcUZWRUhRakU0YlgxMF9GUXNaR25sZ0JwQ3d2ZHphT3B5ZmFPVnNPR0wyRjFCQV9kcmFMVGxrUF9KLUg3SjRvbGZaX05qNXhnQTBYTW04SVhFMnl1LWxfMzh2cWVVLUlzTEI2T2xfei12dUlfd0VJeFg2aVdROTcwZWUzOTZTUW5M?oc=5",
      "publisherUrl": "https://www.insiden24.com",
      "source": "Insiden 24",
      "summary": "jebakan manis wanita 21 tahun di ciamis untung 10 persen berujung teror debt collector dan utang pinjol insiden 24 insiden 24",
      "id": "0d0f4893f49e2624",
      "domain": "insiden24.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 88.5,
        "label": "negative",
        "negativeWeight": 5.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-17aff9777e52cb85",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-12",
      "title": "Judi Online dan Pinjol Jadi Pemicu Utama Keretakan Rumah Tangga di Bontang - bekesah.co",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNMDdUQ2psN2tvT21PU1ktN09XMjd0TUpJOXZsckVWRDhBamt3TDlIa0lfYW5lcVVXZVZTeXRnN183c3ZTMXlwb1B4dl9mN0tNenNvdHJ3dC13NDUwYzRubkN2eHdKMC15V1BBMDJWVW5RUWJyUVl5R29KUTlhZ25oZ2Y4Uk9sS0VDQnBQRE5QUENUWHh4di1QVg?oc=5",
      "publisherUrl": "https://bekesah.co",
      "source": "bekesah.co",
      "summary": "judi online dan pinjol jadi pemicu utama keretakan rumah tangga di bontang bekesah co",
      "id": "a807c6c436c2189e",
      "domain": "bekesah.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4de416eef5d0df44",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-12",
      "title": "OJK Beberkan Tantangan Implementasi Asuransi Kredit Fintech Lending - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPTUJGd3UwQWZJUVBubzY1N3VtLWdoekstbmJxMDZlWS1rMmwzYnAyTkVwUzRBZzY5U0cxY2pkUUN2R2hYTFUwdXd3Zm9vdklZT1RXQkkzcXFCUnFQSmx5RXY1WmpuSnptUkJNMF9QWFctV2NONGY4NGk2LVpYd1ZWZW40d3FZRGl2QmJicEVNdTg1OU1LYjBN?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk beberkan tantangan implementasi asuransi kredit fintech lending infobanknews",
      "id": "3afd7d3354d76558",
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
      "eventId": "auto-ac150e76c3ed8583",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-12",
      "title": "Pemkab Sumenep Tingkatkan Kemampuan Para Pengelolaan Keuangan Koperasi - Harian Bhirawa",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOekNPRktlb0tLQTdmMkYyMlBXYm5XVGN5ZEJDMTBGOGVlMWc2Mm8zOTNwbGlqN1c4M1FWdzVLcUtaQU1OVDVKbXJJNmd4allmVG5LeTkwdzRjZnNCd0JFeGN5QjJucmw1a0JBcVl3Z21YdVNNRVN6TkFyWHBqMUU1UXRybDgtZEhvMlZyZmNkeWpNYjhyM2xZOXJqZ2M5LXll?oc=5",
      "publisherUrl": "https://harianbhirawa.co.id",
      "source": "Harian Bhirawa",
      "summary": "pemkab sumenep tingkatkan kemampuan para pengelolaan keuangan koperasi harian bhirawa",
      "id": "ea20ff918f537d9b",
      "domain": "harianbhirawa.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-34f358b5b5158412",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "AdaKami Bongkar 3 Informasi yang Wajib Dicek Sebelum Ajukan Pinjaman Online - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNRGtSTV9lTXpHTlk2c216VjlyVTY0S3l2UDdydThUZ0hES3B0dzB1TEJYWEUtY294QmRsRkpzRmxydl9Pdll6TUItRWtxMkNKdXlMelk5a0Z4Nk4xTzExeU5KTE1OX2ZvYlNkbFZBZHlOTHRoV2RVaGtqb2VyRW5aQnJTWHlKck9hTWJjQ2d2UG1ScEhDWmY4ZXFkWGhzRk9KMmF3YWZUYkpjaE5jSks0dWtNQdIBuAFBVV95cUxNQ1dxTm4zWVBXUXBCejkwaFhkTEtHUjJqQm1ZdHhiR3lxNmlvSUVRNUljZ1JlelNXRmFNZzdlYVA5eW9NM285eXI3Z1g1dXp4ckJia3pBRDRXd2ZyMXpUZUZEMGNtU0N4S0JReWlTbDNzWUVvMGg1UFZtWHNBcnM0SEc2eFJwUkFrTUJ2aTl2Y2w0bGFXc09qZzlpQlRsNHZuak5oZi1ic2lONVJLWm5aeENLdU8tYzRV?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "adakami bongkar 3 informasi yang wajib dicek sebelum ajukan pinjaman online warta ekonomi",
      "id": "fe2374427b214a09",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7f6a4f549a53accf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "AdaKami Buka-Bukaan, Ini yang Wajib Dicek Sebelum Pinjam Dana - Nextren.com",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPLVo1bGxUakVmZm4xOEp4UVRVNkdoeEZvU05hREl0dTY3SF82Vl9IN1psM3B2bWJhNVJQZkduRF9aUHRtOHRRUmEyTWFtekdHN3NkUGhxRmJxZ2dlWHJkTHJQM21zNG5RWVRUZ2dpZ1lEenBicklIMlhYNkpNbTBaTXRZOERCUWk2WXpSZW9mSDhENTVnc1RTTmI2R2h2YnIx0gGfAUFVX3lxTE5mRFE1c1NTUjgyaFJRZmlWZHM2MjJYZWgyc2JqZFZMQ2FNa2VPZk5Xc2x0b1NlVDJfWmVkN2dIWTdyQWlVUzFHR3ZoMFhXdjBGMTk5ZXU1clVCam9URWJhSEVsc0Nac0U1U3Q3UUJjbHRYNlVtOWpVdWlJR1g3bWNXNHFvY0tGUF9aZldsZVJ6YjNvNkIzNGZaUmRJZGdrbw?oc=5",
      "publisherUrl": "https://nextren.grid.id",
      "source": "Nextren.com",
      "summary": "adakami buka bukaan ini yang wajib dicek sebelum pinjam dana nextren com",
      "id": "808cd1801ec3c08b",
      "domain": "nextren.grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7421f028d9c74093",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "AdaKami Perketat Seleksi Peminjam demi Tekan Risiko Gagal Bayar - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxONnVTdGRCUEFJMzExMmtQSkxqWUdrc0tlREIyYVktbGdDc29YeFN2aUN4S0Jvbkk0VTExNnNVNDFjOXlZTHVpc0RqUkZzenpGdXNiaG96M2dRMHdPc0NBYmNTMmxaZ1hNQVNGeFhsZFgyc0ZXMmpINXc2UG1JQml2azZRVkgyNVpxVXZqNHJoMEpQQQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "adakami perketat seleksi peminjam demi tekan risiko gagal bayar infobanknews",
      "id": "b807953179a9647c",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cbd03d6de7b9f0d8",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-13",
      "title": "AdaKami Perketat Seleksi Pinjaman Tekan Kredit Macet P2P Lending - Readers.id",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE8xNllBTlZ6SzUyQW9ocmNCNkFXaF93ZVJBYUdSX3pJQzJDalh6S19SSEVpcHJFeVc0d3FwMzFuYVpZZ3R0NVczWVoycU1BMUs1U2JxU3c0cVBWU0RTMGx3VXJGbWRrcFhVZHVYeXJkYmVSSldqLXc?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "Readers.id",
      "summary": "adakami perketat seleksi pinjaman tekan kredit macet p2p lending readers id",
      "id": "06683628675158f1",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-59850ab727a8abc8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "AdaKami Perkuat Perlindungan Nasabah lewat Kampanye Buka-Bukaan - Marketeers",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNWlZvMW1KWjZQeGxTQUJqeGxFUzR5Y2VudHRVQjlmdDFiZG8xdHhzNF9FY0p5OUZ2WUdEUGZYbGVMaHo4R0FCMkd0QVBFNklmY0d5ckdpekx5dGNpS2FqN2F4OHFxdDdIVUU4anhnM2NZUVJDbEptck14Q1hvYklZb1ZfSm5pa0ZRNmlPazZSOEwzRnRSZ1E?oc=5",
      "publisherUrl": "https://www.marketeers.com",
      "source": "Marketeers",
      "summary": "adakami perkuat perlindungan nasabah lewat kampanye buka bukaan marketeers",
      "id": "7e997db54f032dbb",
      "domain": "marketeers.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7f1342e07095de89",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "AdaKami memastikan aturan tentang transparansi sejalan dengan OJK - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPN1Zob0MwbG0wS2dlYWVaRXI1ZWY4RzlKYXFaN0d3cGlvdlNBYzhndjB3RklqNHdkNlBId2x2Wm8xWE9Rb08tWkxnLVNyZHdna29ud3VRNndfb1RKSUNteXZWNVllUEN6enVycUcyNTVKNVFXMXlsTTVyVnNkLWR2bVY5QVpVQ3ktNVBNNmtxVVVsRU81MmtEOW1JX19lcm9tSmV6NjJjMnpNd2PSAa4BQVVfeXFMTnA3N3RodkxpOWVLYldDVGxidVc0UWZONzVwSmh0M0ktTlJEaWFkT2RUREpSU204RGp5VFlSbTBaODhmcVE4ajhIazVCakRubC1ZQUE3YU1UZnBqM0ZoOHN2Z0lLQzhodjlBcVU2UEwweThQelRhTFNKMF9PeVFndlYwZEZNQWh3eXFONEVmT0lIN2FNNDJpZ0RrZjdnWmgyTFU1R2tCNmZYTEZ3R0lB?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "adakami memastikan aturan tentang transparansi sejalan dengan ojk antara news",
      "id": "ff53dc441946698e",
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
      "eventId": "auto-83ef1e70b01da9ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "AdaKami sebut Industri pindar pilihan sumber pembiayaan masyarakat - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQbmJsd0RwOTB5ZXZHYXJfMWFiWnhQNXM2V3dvS252ekhoMUd6a3Z5eWpHb2h6a0JlQURfRHNEQ0hQNnV0WUplRVAtdmNZUEZQUmdlaE16R1FRSlJUNEhtVFBvaGxYVVRSOHNxMkZNUVR3UWR5c0RUSGpxRXRfZFQ4NXJtRE85T0ZaLU43ODNPUndHZ1FIX0ItVHcxSnBXa04wTHg4QS0taWlnZHBa0gGvAUFVX3lxTE1OeWk2eFhIQy1YQXpsdENYMGZZLXRSMld0UTV3UkYwcGkyMFpuQ3BoVFJkcy1GRkFFMDhtRVMxa1UyX05WeVhlY09ubkx4QXo2Tkkwb3JfUzVsZ1VfTW9CVWQ4VUZQNHNUeXp3UmpXYXRVdHg2bTdhSHZRZHRkaU1jd2FTd0VYUE02WUtPeTl1ckMyblJGUDN2clpPRVZLQlUtWVN6UTVJNlVaY2pwdzQ?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "adakami sebut industri pindar pilihan sumber pembiayaan masyarakat antara news",
      "id": "ccbe499804c2845d",
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
      "eventId": "auto-d91198e0ab450386",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Antisipasi Banjir, Adhi Karya Normalisasi Sungai di Bandar Kedungmulyo Jombang - Harian Bhirawa",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOV1hxQXZwNmQ5OTNDX1c3VUxqZU9VbWl6VVVsOW5IbHF5bGhFU2RYM3JDd2dHZGl5TVhMTk9XVUJPeE0wOThCZHBpVEVNMDBYT256TlBKX3daOVZGZERyS0pDcjd1dk9LWEVwc2VFbnk5bThDR2JMbXNtM0pjSUdsTDhRbVoyQVR4VktqeUcxbjhfUGxVZWdVamNtS3ZGQ2hPZjdjSXAzcU1tUQ?oc=5",
      "publisherUrl": "https://harianbhirawa.co.id",
      "source": "Harian Bhirawa",
      "summary": "antisipasi banjir adhi karya normalisasi sungai di bandar kedungmulyo jombang harian bhirawa",
      "id": "51403f24ea5b2305",
      "domain": "harianbhirawa.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-da43897b288c7dc0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Asuransi Kredit Fintech Lending Bakal Diatur OJK, Begini Respons AdaKami - Media Asuransi News",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQcmhqZUpjanloUVVoTzk1MFVmV3hPZklZVDg5MU05UUxVeDZuTTQ0Y3I1RWE1a2FzZnRyamJQWU1iMmVHaUQxRUFIaTdpdzhrdjUzeF85U01Cd3F1Z1liMTVFdGttQVZIak1wTnd2cGJzbHAyU196SnQ5Z0JuOGFoNlhHakhYdXdXTzdaZ0VYdElQdS1YU25ORzcwV1lVdExsbEtDc1JBaXVRYVR2dGFtejZkeEpGZDVtNHl4emI1MUJFNzBwWnBZ?oc=5",
      "publisherUrl": "https://mediaasuransinews.co.id",
      "source": "Media Asuransi News",
      "summary": "asuransi kredit fintech lending bakal diatur ojk begini respons adakami media asuransi news",
      "id": "67e3fb106694e90c",
      "domain": "mediaasuransinews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7db3fff39dac3e5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Cegah Gagal Bayar, AdaKami Curhat Banyak Dikomplain Nasabah - Tirto.id",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPczduOG1hV09Qc0YtbkY4Y2x6Rm1IUmNJNXczWTBfdHVRX1gyRzUxcUhWbUZnV0xBLVM3bzdXUnd2dHNkMFBQVzl4WXBPWG83eFZ5LVdmVUpIbFZ6eTVUYjdXMEhmSi1uMDhhaUtEWkt3enIxOGNYN0MyUTB6THFwdk96M2U5UkU?oc=5",
      "publisherUrl": "https://tirto.id",
      "source": "Tirto.id",
      "summary": "cegah gagal bayar adakami curhat banyak dikomplain nasabah tirto id",
      "id": "1c7d13c47cd1ca51",
      "domain": "tirto.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-de4a634d1f14fe47",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-13",
      "title": "Fintech Perkuat Transparansi Biaya Pinjaman - Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPOGM3cnZBc0tRWlg3LU1jQjZMZmtoZl9OVUh6TktLaXdYUVlXUnI1WEFyNEpPM2hDd3RrRVFKWjVDZjVMemc5eUJXNUhZRGhXRTRWZ08xSk5fa251UWRTYzdCY2xmbldaRGpHTnpqN21qeHFYc3N4MlMyanlubkNzY2YzOW5ITmg1NzI0TmNR?oc=5",
      "publisherUrl": "https://mediaindonesia.com",
      "source": "Media Indonesia",
      "summary": "fintech perkuat transparansi biaya pinjaman media indonesia",
      "id": "b32551e7653c5965",
      "domain": "mediaindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dda82320f6bd093d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Foto : Tekan Risiko Gagal Bayar, AdaKami Perketat Seleksi Peminjam Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNLWE2WkVER3AwbVp6RjJQSFByX1dpQVRENzV1clY1SFNNNFRqa19WRS1uMmc2dnFpdzA2V1ZBb19NTTYyYUxoM2VRbzluZXE5R3I5alF3RU50cDZ2dTd3VEtWYmw0aVhHckhkdVJxODV6aUF5WnhzNXdVeEhSUjhOczVjT3Ytbk91b0QtNUhIczU3aGRoWjRBODd4ZnM4c01PNW5aZm44c3N0U1VrZi1DdVpZcTVxNnRK?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto tekan risiko gagal bayar adakami perketat seleksi peminjam halaman 1 kompas com",
      "id": "b909071e17c41f20",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 3.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bdfbacc7d3a8d047",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-13",
      "title": "Ini Saran Pakar Keuangan Sebelum Ajukan Pinjaman di Pindar - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPcWhXMWVWd01aZFUtSDdHS2ZUU19HZTl0WlhGRWNKR1pVZUUwYWlpUEJyT1FOdEdkd0MyNzZYaHhmYUx6T3c3SURIWjBuZ24yNDdKdzlvVWtMZkxoR25xZTU1c2d0bzJxMm83UUZFMjdXTk14NEJSX1RRc3dJMmhOR3BRSDZ4OVBIbWpzSUpaRTlXX2xTWi1USENHUUc2bWZmY0hoTTdhNURMUWlpRTQ0TXF4b2FydnFfZ2xMbE5n0gHDAUFVX3lxTFB1NGlsb0gxQVE2N0lmTkZDZHBQQVBUdTVyM0d5SUVNaGltdVd6SHVWVmZnTjRpQVJEZ1htdlpFNFN3MURXSkUwSjJBQjhQUk1lUm9oYjJPeloxT1IzXzFxUU5GMk5jdi1WcUxJcEo3NkxEa3dGeV9jM0NXZnFXX1JINHZUM1U2bDZabkpUT3duUXVfVmhQT1hSeU14RjlhQk8yWUpVY1lvR2tMODl6YzVUVEV1N0J5bk9jRTAxQU85TlRXTQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "ini saran pakar keuangan sebelum ajukan pinjaman di pindar cnbc indonesia",
      "id": "75846adf5f7a3eeb",
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
      "eventId": "auto-4fb072c6726160f9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Mau Pinjam di Pindar? Perhatikan Hal Ini Dulu Agar Tak Boncos - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPQzZpekFJQ20yQ2Q0MGhoNlZjLVg1N0xRcDhkOHFQb0o0eGZoOXIwVWpJRG5HUW5rWGdoOEpwbU80QWVhR084MlFjdVdJZktQR01aSXMyZFpBSUtvRkpGS0h0bHpudGpTaWp1RkoxVUZ6RnJYWWdTbmg5TTZhZHhzY2pfYzlpdlpPU1JEVmJB?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "mau pinjam di pindar perhatikan hal ini dulu agar tak boncos infobanknews",
      "id": "dff31dad862bf894",
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
      "eventId": "auto-4a990eccea19ea8e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Nasabah Banyak Mengeluh Akibat Pinjaman Ditolak, Ini Penjelasan AdaKami? - Media Asuransi News",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOYUhJa3B4eWxySHhrZ3JmenF1OFdmX3JVamQtdmRzTjlqMUR3VG52VThvSTZMTWFwcnppbnlWVDVXbDVQWDhDTTY2M2FTd1h2Q1d3SVdYdUhwbzVPSzVvbnN2R0Q0WEs0eno2eTNXRC1qbWlsbHgzQ0RxM0Z2ZVZON2dIUzRGbFp6MWIwTFMxMFlWcExEZ2FqeTVsRmlnOTZhM3g5cloteHFreU4tejU0QlhySnRHSENPYUVBRk5IZTEyZnoxOGc?oc=5",
      "publisherUrl": "https://mediaasuransinews.co.id",
      "source": "Media Asuransi News",
      "summary": "nasabah banyak mengeluh akibat pinjaman ditolak ini penjelasan adakami media asuransi news",
      "id": "0193d1b5e9984357",
      "domain": "mediaasuransinews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0b622cc4e8c2a33b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "OJK Beberkan Peran AI di Industri Pindar, dari Credit Scoring sampai Tangkal Fraud - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNVTZrMXpodXkwcUZLbGt1Y0dRRkhoMzA3RnlBaXFYRF9MY1RqeXczYkxyUUcwUUdaU2M2ZWFwRFdCTTR2NFBrOGMtVE9KVjctaG1wUTlXRjdtZ29VUGNiQVNRV0Qydzd5aWJyWEJnRmdsSGFLNWRjVmd2djBEZVVpeVhwTTJOVzFlVW9DZ1FBVnU2Ukw4SHJfUjRSWHJtTXA1SlNfNUNHTVdjUQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk beberkan peran ai di industri pindar dari credit scoring sampai tangkal fraud infobanknews",
      "id": "47ea4d7499fdf668",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 65.4,
        "label": "mixed",
        "negativeWeight": 2.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d5ab9e57b7c46fe4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "OJK Bongkar Lonjakan Pembiayaan Pinjol Hingga Tembus Ratusan Triliun - Selular.ID",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ0t5Y3hDMTF6bGxRTGxrelZqR3ZXM3NHdmp5X0cza2JEcTZzeXNaVi13UnZmX0xFSGlGdEpDT3hlY0h4c2hNWVJzTEZOVVRiajNjbXRKVDVxS3M3ay1hWVE0QkQtdEllYTYzalh2X09pT3FSc3UwLXpuQVV6OHNranVvbnR4Ym1LY01PSTFDaHpHQmFlWDFLN09sMk4?oc=5",
      "publisherUrl": "https://selular.id",
      "source": "Selular.ID",
      "summary": "ojk bongkar lonjakan pembiayaan pinjol hingga tembus ratusan triliun selular id",
      "id": "ca5cfc4ef29e3e19",
      "domain": "selular.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-353faa20126f0a5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Pinjol Tumbuh 25,88 Persen, Risiko Gagal Bayar Mengintai Konsumen - Akurat.co",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNWFYyWTU3bUlic0hKVnpUVGxBOUcwS0ZuUWxyWG5IeGxHZlFSSW5YN3ROaFZMOGJXTml6VTVDMDJKcmV6V0JJQXNVcWZOcEx0Z1dmdlpDUnAxUUdLdTBJczVXU3VBcXFyTW85UV9paXZFSXFZVXRUajVDRUt4LXJhS2pNVDZadHFRQ040M2RjdTZlSEF0OXRQc25hZXFkczZVNHRQSQ?oc=5",
      "publisherUrl": "https://www.akurat.co",
      "source": "Akurat.co",
      "summary": "pinjol tumbuh 25 88 persen risiko gagal bayar mengintai konsumen akurat co",
      "id": "5f6c0dfe2c95b936",
      "domain": "akurat.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 3.1,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-addc61495802ba68",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-13",
      "title": "Program Teach4Hope Latih 25 Orang Guru di Pulau Boleng - Lintas Nasional",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNcVktcGFyeDFaSUprVlFlS3pTYkhSM1NFRFJxM3ZqUXFYM0xGcmRZTEFXclFvQkpYcEdiQU1wNE9ObVFSNmtBVFlIelhEeHZmTVNvUmVDQW5OMmtwbTBIa0xyUG9iTkpKbTFrVlNaZl9PZkJ2T0NzeVZqRC1ua1Q3WGFPNm51bzNEWjNHN25RYw?oc=5",
      "publisherUrl": "https://www.lintasnasional.com",
      "source": "Lintas Nasional",
      "summary": "program teach4hope latih 25 orang guru di pulau boleng lintas nasional",
      "id": "b438a98a0c481186",
      "domain": "lintasnasional.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7e9bd61f941536c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Program Teach4Hope Perkuat Kapasitas Guru di Pulau Boleng, NTT - Parahyangan Post",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOTGdEdzJHTnpiOFNoUDVzTlY4ZHFQZ3ZhRTdSUi01aWZLaVItVHRERE1XekF1eC1acEpYdGRCam1HeGhfQTZOY0gxODlkSXNBUHdLVVBXNm1DS3BoT1BYSVdCQzlvOFl5bTBDVzBhb3p0UXBoMUl3QkVhbW9LZ0NiSlQxcDdxelRiWUg5RTZSODVPWWIzSlExQ0N1NUs3NTRwS0YwMnVOTlNxUVJi?oc=5",
      "publisherUrl": "http://www.parahyangan-post.com",
      "source": "Parahyangan Post",
      "summary": "program teach4hope perkuat kapasitas guru di pulau boleng ntt parahyangan post",
      "id": "b1fbcc1f71d6ec62",
      "domain": "parahyangan-post.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cd196ca68dd2bcdd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Teach4Hope Hadir di Pulau Boleng, NTT, Dorong Peningkatan Kompetensi Guru - Info Maluku News",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPOF9YT29CUk83RGFJRG9KdzByVF9mMXFZUWlPVjQ0Qk1QMDg1UXBteXFKSmFqSW5CWnBkazBRRkpNcTc2ekIzMUlxZTRteEYwSWY1STRvUFFXeWRIRHA1cU1ZYWhiRWE2Y3VBclFpUHc3OFd1SXlLSFdGVVg5N1JzTmdGSG1fd0ptLVJMRFAyYVhTZUdxTFBWdnBZbkpOOU1G?oc=5",
      "publisherUrl": "https://infomalukunews.com",
      "source": "Info Maluku News",
      "summary": "teach4hope hadir di pulau boleng ntt dorong peningkatan kompetensi guru info maluku news",
      "id": "1ec95828af291cef",
      "domain": "infomalukunews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e10a116d77fda05a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Tekan Risiko Gagal Bayar, AdaKami Perketat Seleksi Peminjam - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOSExYakUzVFRlQ0JrQmcxbk5CVVlPV0lTcE1oY3MzdUhCRUhRTGREVkhfaWNXLXpfQjNHT0U3b29TUjBkRUhPVmNJZnVTYThNNDdpV3pQQ3JBTWdsd21Ja0R3RnRNVVBwQ2xwYUJ1Z2w3dUR2bG9pWGNrSXJ6eEkzd1FVWHZCWlVIcTF1YmhjV2hwanhMSGlWWS11Rnp1WUVIZ2dXYUZyT3NZaWJJMGc?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "tekan risiko gagal bayar adakami perketat seleksi peminjam kompas com",
      "id": "c3ae36f8026c3ebc",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7f9a8a0075eddea5",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-13",
      "title": "Tekankan Transparansi Informasi dalam Penggunaan Layanan Pinjaman Daring Lewat Kampanye Buka-Bukaan - Jawa Pos",
      "url": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxOVTltQTVuT0Qxck83bWpGcVVud2tXVXpmVkZyMWZmZXpnWWI5TVlJdHUzSlVERlg2SjJpSi14T3B3bWk3Z1VHRm9ycXNheVl0VEFOY2EyOXU3UFZqRXREWFFCaUNKeVFobWZ5dlBPZEV1dG15RGE3UW9YRUQ5TWd5RHA5TVo4ZTRuMDFKMDhLOFlYamltcHRlb1p3LUJ5X2JSYWxjVUpKeWZSVnRGZDMwZVg0U2J2N2w4UVdXMmdweFRaYW52eXNfTnlMSmJQUFF5ZDdid3lyV3NpeDZSLVUwLTJCTVd4RUFFSjZNNFgyZGQ?oc=5",
      "publisherUrl": "https://www.jawapos.com",
      "source": "Jawa Pos",
      "summary": "tekankan transparansi informasi dalam penggunaan layanan pinjaman daring lewat kampanye buka bukaan jawa pos",
      "id": "767358d7c81115f0",
      "domain": "jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-20647e90dd19b1d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Top Up DANA Rp2 Juta di Tokopedia Gagal, Tagihan Kredivo Tetap Muncul - Suara Pantura",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQMTNGdXFBb0hreTFQNmp0QXNWb1JFdndNRF9rZENud2V3YkRzbmU4ell6M2hyeE1zNXF5UEhjWk1EYmxvbzJZRWplMk1abDA4N1ppOFVBSkhON1RhbFcxbS1URTA4QldTbTN6M283dmdIOWZZWFBibVRlRUpEcmVsVUs5ZFBJaVVremlGYmo1SDV1dzJPU04wbDhuUG56OWZtQmlCSUFEcDl6RFEw?oc=5",
      "publisherUrl": "https://suarapantura.com",
      "source": "Suara Pantura",
      "summary": "top up dana rp2 juta di tokopedia gagal tagihan kredivo tetap muncul suara pantura",
      "id": "17b84b92f5041310",
      "domain": "suarapantura.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f1095b868f334c40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "Transaksi Top Up DANA Rp2 Juta di Tokopedia Gagal, CS Kredivo Hanya Memberikan Jawaban Bot yang Tidak Nyambung - Media Konsumen",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPWEl1a2JVeEF4c2ZYcWYzUF81UVdjTXFfdEI3aE5VZlF0Qk8tT0pLUFBUejV6UXFKc1dfemRYUm9fOWcyRGFMdTNHMFNDZXRUOE9YTXdRc1FOcENkQmpYOXdoSldXQzhmMEVadU4zaUltaGRIbFZLcDIyRXNWQ2g0V210dGlvWFRjTGZzWkt6cUhBeFhIRTRkN1Z0SnQtcW4xZlNzYlBMWXJIWUZzdURvX1ZZS2JqM1hCcDBDNlQ2eEwtUUNrLTg4OUVXOUhBRTBKNjVOQVZDeXBvWlkwbzgxWXUyeTR3RGZ3clNsNGl1NUtpdw?oc=5",
      "publisherUrl": "https://mediakonsumen.com",
      "source": "Media Konsumen",
      "summary": "transaksi top up dana rp2 juta di tokopedia gagal cs kredivo hanya memberikan jawaban bot yang tidak nyambung media konsumen",
      "id": "27a3959f1cce969c",
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
      "eventId": "auto-dbeecd282475c05d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "AdaKami Dorong Masyarakat Lebih Cermat Pahami Pinjaman - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNWmxod2xWeUVMR3BlUGFSaWJrbUxVMlRJNW85d3lvdTBZTlJPbm1YRTVfWHNiUHNFVldiVm9pVEpBTzNlVk91aTNyR1JfdEh4RnFDWjFjbk84eU5hWlBocmpta3EzQUdRMEprdEpzendMMnB0bzB3Q1hkNGt3ZEtIRGJqb3YtYnNFUXJPWWdWOWNaRzBrdi1ra1JKMGhBOExnWmN6X0lPS0pGUQ?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "adakami dorong masyarakat lebih cermat pahami pinjaman bloomberg technoz",
      "id": "f4417ea5cd48e569",
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
      "eventId": "auto-f5a25ee1145ab38f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "AdaKami Perkuat Transparansi Pinjaman Lewat Kampanye Buka-Bukaan - Media Asuransi News",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPZkI0MTRXc25ncFpGOUlTYk90ODRuZFBtX1BaMkNhNkVpOUpheWh3czNRS3hWVGRyWVM5SGRTOGVIbUdpX2hlY1ljcHMxbGhTb0pXektjcFFFNk9wSWRYSXF3UjE1eTBCRVo4ZE5rN1JMdEI0THRSalM4SWI0V2x4RGEyUXU4MG1mYVpNVjNfSTJ2ZTZ4Q3dBTEZEdlhOT2VUbGZlNV9MXzY0SWNvakx0OExnMk53VWgzcF9vbml3?oc=5",
      "publisherUrl": "https://mediaasuransinews.co.id",
      "source": "Media Asuransi News",
      "summary": "adakami perkuat transparansi pinjaman lewat kampanye buka bukaan media asuransi news",
      "id": "c5f03918ae9d57e7",
      "domain": "mediaasuransinews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-408208394d128366",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "Buka-Bukaan Soal Pinjaman, Inilah Cara AdaKami menjadi Platform Pindar yang Lebih Transparan kepada Pengguna - Akurat.co",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxNTUxoQnpDR1IyaWEwaFQxb0hNZEZEOEpwQkRUVEswNGpOUzFHLVJMWDllS0ZXTmZYUVZGZmlYMTQtR1J0V1J2QjhYLTc0Y1V0dE9lenhKcV9OOUw5OENjeXRkb0g1d0N1ZUJMYmFDRDJMOUNWOFphWFhaS3ZpY09qejNORUdBbjI1cjJQSmM2UndWbzlMYzhPak8xWF9ENlFERjdPN2hSWTFCQzFsOFBrRDJ0aVVpWjh5TUpQSG1odmlIZXM3MTNYMm1KSktLdDJERUxselVrODRnN0VwRWc?oc=5",
      "publisherUrl": "https://www.akurat.co",
      "source": "Akurat.co",
      "summary": "buka bukaan soal pinjaman inilah cara adakami menjadi platform pindar yang lebih transparan kepada pengguna akurat co",
      "id": "d3dac2a06dde502f",
      "domain": "akurat.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-045521bb22fcb5ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "Cegah Pinjol, AAJI Dorong Masyarakat Melek Finansial Sejak Dini - Suara Surabaya",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQZnhuVW9QcEVYTEJXdS14TjhTV2d5TUhhYUdLZEVCM1lsVlVxQ2JXa0ZIc2JPc1VybTJHZ2tXV25HdkVldkEtWUgzV3l6aFIwSjhvSDg4TDJJZ19HVk1qTnhHY21ONERBNXdXaE5wbzlpeHVhdmdXaWhqdThFV3dHZml0bWpmbVlHQ2F4NzhMemZMSmNIa25YRW9IQ2EzVnJGMjlMeUVVdnVwU1VGMXJWQmdB0gG3AUFVX3lxTE1nRlBMb1V1OGc1elVfOFYtUktGQWdHUjdwWTNyYnZ0LVBoejktWWJZRzVMazcwaFlhX3ppM2Vjek42OG9qZmxJT0cxa1hmaS10dUdFX1NRUUh1Z1NCNFJpRlhfUHJfX3I0ekRkVzh0ZzNtUzZid1hhQkp2VVFEQjNOOHNCM2tEd2RkZUVJdUN3UXF4N3dRVjBwbVhXNXl5OG1WZ2lKRmEtS0tDU2xTSV9VM05uS250VQ?oc=5",
      "publisherUrl": "https://www.suarasurabaya.net",
      "source": "Suara Surabaya",
      "summary": "cegah pinjol aaji dorong masyarakat melek finansial sejak dini suara surabaya",
      "id": "d63fcfe529433f0b",
      "domain": "suarasurabaya.net",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ff56b8dbac45a20",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "Ekonomi Indonesia Tumbuh 5,45 Persen di Semester I-2026, Tertinggi dalam 13 Tahun - Tribrata News",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNZlM3TEZjUFNxVjQ4dmZ2WTI1aloyN3Rrdi1QUUNaZFQxamR3Umx5ejBUSHpwOFlaci1CQVg4MUdCY0lVZExTaFh2SFUtUC1ELVJnR1JDNUx3UnF0VThMSVY4Rm5sckhqbENBaHVpTTRuRDZFaGdhaWd4T3Z2S01BeEhnb1FfOXd2SDRIZUJId2pCZGpFRmthZTJuNVFmdkRwY040ZjRELU80Y3VRV2dLMUU0MFUxU2k5cjR5bWJuVGVOY2cwRlBhUTBXOTVKLWxa?oc=5",
      "publisherUrl": "https://tribratanews.polri.go.id",
      "source": "Tribrata News",
      "summary": "ekonomi indonesia tumbuh 5 45 persen di semester i 2026 tertinggi dalam 13 tahun tribrata news",
      "id": "08964356d4f80f4e",
      "domain": "tribratanews.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fb35f0ccc98ed6eb",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-14",
      "title": "Flux Creative Universe Raih 3 Marketeers Youth Choice Award 2026 - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxORmM1cU9UNnNzclpkQzJRZlpWWnh6VHRQVnRhNXhjRnRqbjhkSlZTQjBpbE1HU0dFanJYLXNPMUV3Sm5memRNNUhILXZTUXNEakxacjc5S3l2X1RnWWc0SW1RWDAxcW8xMzhGMGxsYVVJVXFTcUZsaF9nTlZyQnllRXdvSUFnRGZGUTRYREFvbkpKc0FMaThEajBsRUxDTmllQzNCbg?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "flux creative universe raih 3 marketeers youth choice award 2026 rri co id",
      "id": "41d2b0ca8aaa9aea",
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
      "eventId": "auto-2f1053a1ec69aadd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "Lewat Kampanye Buka-Bukaan, AdaKami Dorong Transparansi Pinjaman Daring - Mobitekno",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9pcG03UWtldm4zb3hfWHlSVllnYXBURzd6YWdOQnZnY0RZT2FEOEpXdVJGSjh6VFVjTzRJRVdZU1U3MHFTSWdsUEtVZTcyR3JQMmFETHRkcEhTUGJacUJyNFpLbm01TElabTRyWUNwTjNoQkxvWUJuNDBTNTJDeDQ?oc=5",
      "publisherUrl": "https://mobitekno.com",
      "source": "Mobitekno",
      "summary": "lewat kampanye buka bukaan adakami dorong transparansi pinjaman daring mobitekno",
      "id": "7e7741c9a5a74073",
      "domain": "mobitekno.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dca5af02486ca1a3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "OJK Malang Tangani 179 Kasus Keuangan Ilegal, dari Pinjol hingga Investasi Bodong - Bisnis.com - Surabaya",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQMFRyMVg5RGhBa1lWR0c3TjVtN1lUZWJ3LTNKOEZGdGRlMWxMSzBaLUVaYnBKQy1qRVBhT2lpR3NUZlNfbWZ2NWtIN1ljUDI2aEJlcEdIRXVPSFVZUTFRVFgwQjBvb25hYk15TG5ReEFMek41VlNYUFU3cHZNYzV2Vkg1Z0tlbzVXT1BfOEs5WWMwTThnLWxaUEN2UGtDZWhTWTJpaVlpSm1pTlNXWk1uUFJyOERIeER3YVFmRnVFSGE2cEpXMmN3RlRtNnBleFU?oc=5",
      "publisherUrl": "https://surabaya.bisnis.com",
      "source": "Bisnis.com - Surabaya",
      "summary": "ojk malang tangani 179 kasus keuangan ilegal dari pinjol hingga investasi bodong bisnis com surabaya",
      "id": "8e30e5eef05bddb0",
      "domain": "surabaya.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-274b2c3b088c321d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "Perencana Keuangan: Pinjaman Bukan Sekedar Soal Cepat Cair - Tempo.co",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQSFZCSjF3S0VrYTBrTFBzWGJyMkEtZzRfR3dFRURwQUpDWnREVElaNlpTX2RReXdSY1o0dzcyQk1iTjVJS2F3SEplVU5jcUU2eHhWOTYtRktxNE1HUmtDakg2QW1VVW9JMTFkNU00bUdwQUl6Q3pjc254Um5hbWVZVFVyWl8zYm9XWGxWNkdLQm01NzlSclFzcmhB?oc=5",
      "publisherUrl": "https://www.tempo.co",
      "source": "Tempo.co",
      "summary": "perencana keuangan pinjaman bukan sekedar soal cepat cair tempo co",
      "id": "27dc7275893e7a9f",
      "domain": "tempo.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b6b4e5fb79ee33d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "Pertumbuhan Ekonomi Bukan Tujuan Akhir, Prabowo: Kesejahteraan Rakyat yang Utama - Tribrata News",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQWjgtdXExQThyTkMzRFJ4QjhYYXF4UUZCWXFVMUNmendLVWI1enRXSno5UDc0bGtxOThtTFp2cS1INzVQYlhoUmw5NXRYV1M5ckcxeTU3b0FGdnBzMG1SajkwbHBWMHJqMFlrMWh6R3hIRTBhWVNhS0pKT0xiRzlTYlk0anhkTUQxM3M4QlViYTN5c256bUh4c0N5STNqMFlwZDVycDM3MWJOQ2RiUDBtSGZkMTRvOXBjYVFaRHpxUnQ1U25USHZKX0RFNG0tYk0?oc=5",
      "publisherUrl": "https://tribratanews.polri.go.id",
      "source": "Tribrata News",
      "summary": "pertumbuhan ekonomi bukan tujuan akhir prabowo kesejahteraan rakyat yang utama tribrata news",
      "id": "b8ee4201b6c4379b",
      "domain": "tribratanews.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f7a2e2b637bc300a",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-14",
      "title": "Samsung A31: Spesifikasi, Harga, dan Tips Beli - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNTjhpVzlvejRmOTE2NFE3S2MzSlRMcl9Ib0p5SjdUT0h6UHZPWld0SnhjdDNXSFpVclg3VU4tQmdwSEdBQWVuanFpWXp2VlNGeXBOOWM1Yk5oanRPdTFxd0pBVlFWVU1FMVdEb1BFSGV0OXlybUxwV3lfOFZKcjE3aUt6Wk9FdU9Ic0NIdnNHc2RYQQ?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "samsung a31 spesifikasi harga dan tips beli kreditpintar",
      "id": "efad90ca3014c460",
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
      "eventId": "auto-8e21198d06dccba7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "Scam: Kenali Modus, Ciri, dan Cara Menghindarinya - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1rVEliMTIwWF84Xy1KY1dXejFWcEEyOVlOT1NNVk92Rk9aMnJjVUVkVzhiblJrZTl0aG9sVFlDSXBveU9HMkt0TzVHZ2d5d1RZcmI2WVRlNkM5eF9NTkdR?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "scam kenali modus ciri dan cara menghindarinya kreditpintar",
      "id": "e4cca59651c53a92",
      "domain": "kreditpintar.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 65.4,
        "label": "mixed",
        "negativeWeight": 2.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-355282246d4ad63c",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-14",
      "title": "Sindikat Pinjol Ilegal 25.000 Kasus Digerebek, Uang Rp 5,2 M Disita - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNaWh4bGx2Y2otMEYwR2poemdPNVJJOEIxMlcwWjR0TW5KWlEwQ0FDUWFiTWhfNUhrNi1nYWRjeE9YLVFDWldzYkY1Rk1jSTgtQ1NXT1NnQURUWENKQzViY2pHR01vdTJFdEhBZlVmdGIyOTA1T2dNS3c2RHZYQkh0RXp6SVJjVFh5T3pmUklZTE9veEsyTm5EUXc1SUlMYWp6RU5wWXVsSGdZMXBTMVM4WV9Ndk5jLVk2VHdyUWJ6Q3jSAcYBQVVfeXFMT3QwNEVtX0dwZi1LOFFDT0FYWjR4ZFdnbjY1ODJwMXo3Q1d2MjBQbDlraGYwZzJSaGJWN3BDZVFHUjRNN0M2T1ZRYklYcWNwZkdwcnNZV0hzdjc5TVpZTUdtSWxDa0xpckNlRDFKVWxMOVk5R0x5bkJjVEtEaVdSYW9hTVJ1LVE2MFNqczF1dDE1WjNDWVpGUVJ1TFBSV0NBbG9hb3h4bEt0Z1NTYzJ4SlJZQXp3dDRTdUdjeklSQUFTYzRxYVhn?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "sindikat pinjol ilegal 25 000 kasus digerebek uang rp 5 2 m disita cnbc indonesia",
      "id": "90b1e8b32eaf8b40",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-933a1cede73958b3",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-14",
      "title": "Teach4Hope Hadir di Pulau Boleng, 25 Guru Dibekali Penguatan Kompetensi - Aktualita.co",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNR2xvN3BCZWtoemxkdWlxYWFYcFJreGFkZ2Q4d0ZUdlZVZHk3djRzSTZ5OW0yb2JOaEQwSklPYm1mZ3doZUg1clE0ZG00X0xlSE1uSUhjTktITU4teFNyWWlxWWRFQ1UyVlQxYUR0X1UtNjR0WE5hM2YxTXV1dm5LWVlfc2ZGZGVPY3V4Y1FYNmVPUUxrTDljNEVlNV8xbktQQXNMSQ?oc=5",
      "publisherUrl": "https://aktualita.co",
      "source": "Aktualita.co",
      "summary": "teach4hope hadir di pulau boleng 25 guru dibekali penguatan kompetensi aktualita co",
      "id": "7ce6d6a88deb1fef",
      "domain": "aktualita.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2460a0e92409087a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-14",
      "title": "Wakapolresta Malang Kota Bekali Mahasiswa “Tameng Digital” Waspadai Cybercrime, Pinjol Ilegal hingga Judol - Website Resmi Polri",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQTkMwTkVTUTFFWW9uM3M3RHU3ZXlpREZZOXFGbmxNaENUX3pKUmtHRDJReVhud19mcVdfc1FVLWZ0bHVhSTN5bW54X05mN3pfMkl3dDczXzdxNlQwMHl6a3lPZXVCWWRhOU51T080bkRrcUhXcVh4ZWZQd3ZKcXo5NmxTYmQ0TlJGN2JpU29ROTFwSkxJSC1SSVZ5UGZtdkZidmVmd2JDQnNVUGlNdklzUXlEdWhWbUlQLUc2SkIwV09CY2JyZlMzMTAwM0dIVFQwUUZPQW5FVFZwZw?oc=5",
      "publisherUrl": "https://tribratanews.jatim.polri.go.id",
      "source": "Website Resmi Polri",
      "summary": "wakapolresta malang kota bekali mahasiswa tameng digital waspadai cybercrime pinjol ilegal hingga judol website resmi polri",
      "id": "353150b61c4c7434",
      "domain": "tribratanews.jatim.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bda3d7c97be8c672",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-15",
      "title": "Aturan Baru Pinjaman Online 2026 OJK Berlaku: Batas 30% Gaji & Bunga 0,1% Per Hari - postingnews.id - postingnews.id",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxONTQ2cjdmQ3JtbFhqZ0kxYmhIMWpxZ29YMXFSY0ZWV2k4UHlMNGItUUhWNjY4d0YxZUhHNXVmWjgyOTVDZ2gxZFNCRXg3WTdIb211c0FuRHRTelZxRXhlOUcwM1plNFVpTHRCS3VpVkNzQ2JqTndiaXA1cUZuUEMxZHprTjgzNjBNQmFwSjUycFc5aDNua084SlZtTFVUSWFvNXNacklIQU1vcWtWWmF0aGF1U1lyM25Ceng0bXlB0gGuAUFVX3lxTE5mUEwyQ1Y1V29LeWVOVUVBY256MDNQN0MzcGE4Ui1qYWJIcXNPOWF6TVN1NzMya3RVNFlFczM5Y2ZRWEMwRGZxX0wxZTNWeFRuZzV4Y2tqazUyaDhHTlU2VkJPLWpsX3lkcXlDUkxfcFhmQ3I4TVVjd2RuSkF2XzZMLUZ0UzBib0owYWstUnhYOTI4cTh0YURTWWJMY1VxdnFGd192a2EzNXFHMHl6dw?oc=5",
      "publisherUrl": "https://postingnews.id",
      "source": "postingnews.id",
      "summary": "aturan baru pinjaman online 2026 ojk berlaku batas 30 gaji bunga 0 1 per hari postingnews id postingnews id",
      "id": "054b242c10716d5a",
      "domain": "postingnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-99e7cabcf23c259a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-15",
      "title": "Flux Creative Universe Bikin Beasiswa Emas BINUS Jadi Jawara, Bayar Kuliah Pakai Emas? - disway.id - Disway",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPMUR5d2x5LU45eXJmN3JzUDlPVDlNT05pUnNzZm9Td1NfY1FuQ05ZbjcxYklsNjQ5QnpzUHc0b1VYWlE5LUh0T0NxbTMyaFJoVFpOZlViMC1pOTN4ZW1HTVZ3dEFfWG5pTExuMGZMa2FxcWROcmdPNml6bndnWmZ0bW51OVVGLURnZDNIbU9aNDRmUHREMVo1NVZ3WVl5MGNzLUVudmZ6M2M0X0owQkJFOXBHc2zSAbMBQVVfeXFMUFRQMDE0WWFaZzJMek9lSzFPZl9jYkVBRU0xdThtU0pMZmpoSzN1NFNqNUJNYXZxQmFxX2QzeGQxLWpxbFVnR0lPZWdzYWZjZno5QkZpTGdWLWVaRG9VczJqYXlVRUhrT1p3WDcyQmdSSjRXemVQbVhpSTlET080N2ZaUHp1WTZyZlVsdDZIWllLYWI4VmtqTll2YWRuOXBjeE9QdmZ2aEtKQjdFZ0RETTVZNlU?oc=5",
      "publisherUrl": "https://disway.id",
      "source": "Disway",
      "summary": "flux creative universe bikin beasiswa emas binus jadi jawara bayar kuliah pakai emas disway id disway",
      "id": "fa346aee4dc17fbb",
      "domain": "disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5494c81710260f73",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-15",
      "title": "Flux Creative Universe Borong 3 Penghargaan di Marketeers Youth Choice Award 2026 - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNa2Y1NGtYYnFUQzFva3NfcnA0RFpFREY3dV9YeEtCMTV1VWl5NzFheHlGeWk1Q1VQQXJsaG8tZnc3ckV3MmRkR1BQdFo2d3Z6Z3VxdGFBTnlhdDhDRHNJVklOQkgyN0FrTFg3VkpMQzU2dkVhc0Q0QlUtdUd4aDNWU1ZwSVAxc3oya0hQOVlpcENJV3FGeFpjVG5DX0ZidE95aklPRXh2UlpaazDSAa4BQVVfeXFMT1ByTXJGelVrUmZuc1g1SC1sc25xazktazUwdjFaMnpVeGxOMFQxdk9faTNhLTdBdk5qYS1PQTI3czJBbkNDcUJDREtiLW44ZTY2NTdOTk00RXF6dGlVVF9MdWt5ZHhPOElZZzhRRndhLUlYVEgybmVwWERzbXlZR2ZhWEYxTHdDZlJDRVlhYnM2aGVOOVpLdDd6N1NpSVpWMDdCclk0MXlPWGNWXzZB?oc=5",
      "publisherUrl": "https://www.jpnn.com",
      "source": "JPNN.com",
      "summary": "flux creative universe borong 3 penghargaan di marketeers youth choice award 2026 jpnn com",
      "id": "d0de29e5fe80c07d",
      "domain": "jpnn.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8c6847220c67546a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-15",
      "title": "Flux Creative Universe Raih 3 Marketeers Youth Choice Award 2026 Lewat Kampanye BINUS, Migelas, dan Kredivo - TIMES Indonesia",
      "url": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxOaEw2UUxJMFh4V295VXMxVWJWMDFJbTg0WXBmRHZuQ3NlcEd2czg5ejJRc0EyUjVZN2IyQUV4aF9XTl84NDU0NXM1b044aHZXaElnNUp1OVVTc1pJdUdjWjJlcEhSaFVWNGZaal9sa28xRnhGZllEWWVndWdwMTloWENjT1hoVE42UHhFRzFYSEVqVE1ZSXpPUF95WXFZTGlhbEZta0xSLXRMZkFQeld2MHdTU2xJQXYzTGY5ekt4U0pPQ0lMc3hYNnRzTW5BdTFFc1dFbUlmZ2h0bVdWZS1jU2JjSUlibl8zdHhqODFIUHQ?oc=5",
      "publisherUrl": "https://timesindonesia.co.id",
      "source": "TIMES Indonesia",
      "summary": "flux creative universe raih 3 marketeers youth choice award 2026 lewat kampanye binus migelas dan kredivo times indonesia",
      "id": "37f1974e835a9bf1",
      "domain": "timesindonesia.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2f1053a1ec69aadd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-15",
      "title": "Flux Creative Universe Raih 3 Penghargaan Marketeers Youth Choice Award 2026 - Suara Merdeka Jakarta - Suara Merdeka Jakarta",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQbDZZbHctejNldVFBNWZTVmtkTEVvWURDOHNZYm1RVmx2Mk1McDVFRkdjNkxsRVNwSUlKOFhpYUwxaVNVaDVtTEM3UEJ2ZEZaUlJzTDBkUXZWVENKVXY2TDNVYjAxUzV6VWtsMlUyQXYxNG9JQU5XdExPQ05YdlhQSDdxTExTcllxVzh2X216SWt4cnh0c294RHhtOTdfOXFfQ2lUZzhEdkNad3hnQ0FBcnR4eWtJY2x1QnRkQkpuNzFMOWhFY3hST0930gHPAUFVX3lxTE5WNHRXSXI2S0ZQOG9ORnBUeXdEUS05SDlPMjRrLW9SaTZ2Z2xxUWlhQlJjZGdKWHM5aV9VOWNCSkYtYVVjeUFHVVVGQm9rNEl2UkpDY2tjOG5LS2lFdTRYajdmamlKX0pvV2lRMThoTXhfcVR2YmdLMUlhandHcGp4NGZQWE1mcVdtYjh0T0ZtVk5sU3l1Vm9XTEJmM1czcjl6WXFWdlAyX3YyeVlpSXF2SVhGYklwWDZVLVNNZ2FRcGRuYjkxVXhIOGdQOWhQNA?oc=5",
      "publisherUrl": "https://jakarta.suaramerdeka.com",
      "source": "Suara Merdeka Jakarta",
      "summary": "flux creative universe raih 3 penghargaan marketeers youth choice award 2026 suara merdeka jakarta suara merdeka jakarta",
      "id": "1c769043ef1905f2",
      "domain": "jakarta.suaramerdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a5892cf6cf7b7d6d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-15",
      "title": "Melalui Kampanye Baru, AdaKami Fokus Tiga Hal Ini untuk Pelindungan Konsumen - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPTnpfSWV2MDZrZ1BCZUtHTDhuMzJJbERCR2JJSGtDR3E3UlpLbC1TWnNkWXdaSVpnR1VUdTNGZ3YwZXcxV0ZrbnNXWlBPMWtWTnJtZnZuYmRwMTl2Rzd3TV95TTljR2xsMF9sYXF0YmlnWlNxVjg0MDNvdGprVENjd1c5SWl1amYyZmJFRzNKQkFwdktZc19aYXVPRVlHSzR3aGtabGttXy1BcEVNQUtVLVg3a0p5bmZ2MkpmeTdEV09Xb2xURFBfemVB?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "melalui kampanye baru adakami fokus tiga hal ini untuk pelindungan konsumen bisnis com",
      "id": "8dded0b58f76a251",
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
      "eventId": "auto-03d8f3dfd6ffd43c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-15",
      "title": "Nomor HP Bisa Jadi Pengganti Skor Kredit, Begini Syaratnya - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQY1Q1RlFEOVFjaGsxM3RWbFk0Q3pHZ1lnSGtLUjMwZmhNdlVLRVQxM2tEVHRPUko3UW1saEg0OUpzTXN6REozWXBlczlmWkdrc2VnQlFjUHZyY3oxVS1UcVk5cnRZT2dGTlJUMjBxaUVoeEtQbmJuVHZMcXBXUVp5YTFQODI5MDNkdm56dGpTdHB4RVQ0TThnSTBmM2Npa29HTEZLU1RLRXZGZWJqVFNtZl9OZ2N1Z0xpYUJv0gHAAUFVX3lxTFBPb0Y1aGhCSUVweHByTHdrMEVmTkVOYlQwUVpFNlFPR3JLdk5Bb0RVU0Q3aFo5eFpJUEk5VmtPbFFvYmNqZE9HVXRHWmdwU0V4SUswdDBsZDlXTDV2T0JQN1JkU1h2VFFkQWZnSjF2QlYzdGdJdy1fLWN4Tzd3TG1ZNjExU1Jpa2lubFFCUGN0bERiZnQwQk1FcDNOMEpYdmFUMjdWc0xSZmpRc0RBNWg0SXBXVTYtaENYck9yS21aWQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "nomor hp bisa jadi pengganti skor kredit begini syaratnya cnbc indonesia",
      "id": "28a9835dd7ef775d",
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
      "eventId": "auto-0129d372eaf39c39",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-15",
      "title": "Pindar MEKAR Dukung 133.000 UMKM, 89,2 Persen Pembiayaan Produktif - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPLWtSNmFmTHdkVGJBOTMySGs3ajZOTFgzcEJVaWxDcVQtejBBWXU1ckl0WWZqRkkxakpXX0NtbzlIUm9qTDI1WlR2TGFyRVJiNEJQd21oVWhpMWFTelk2dF9LblVEd3M4QTJWanRtN1ppTTQwY3NKd2RKTGdEZ0Nra3hMc2JqV0xmbjlJSEVaSHFzdlc4Rm1rNTRoWXI3cHNHN3B1WlcxWVhsV0Z4bGR2RlRxbVR4alhTZVNlcFkxT3dyU00?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "pindar mekar dukung 133 000 umkm 89 2 persen pembiayaan produktif kompas com",
      "id": "3af94db33a2d23b0",
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
      "eventId": "auto-c1840122b2a7a9e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-15",
      "title": "Tagihan Pribadi Ganggu Redaksi dan Awak Perusahaan, Cara Penagihan Kredivo Dipersoalkan, Pemimpin Redaksi Lapor OJK - Prioritastv",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQUXJKUFowMU0tWEw1anFHVmplVW9LeGdNcGJJNjQwRmhpM3FqdmRROG1nWWFtMm9YTUhqTXZoZlFsVThMVGhXMzZuQjNxX0VxeFBnUFBrSGZVVUswR2RJdmN4T0NtdEExaVJWN2k0UFlwc3pjWmxOZ2g3QnNja3g0Ni11VkVYN3JvUGw2TjZkcWZzQThqOE9sVWM2ZF9aWFFCTjhfUktBbENaRHBpdXJrekpwdXFEZG5DU0R0a0NfLVdCZnkwcy1SYkw5TzdQUnU0WGNTMGE5VlR1eDdZZEFONUh4NA?oc=5",
      "publisherUrl": "https://prioritastv.com",
      "source": "Prioritastv",
      "summary": "tagihan pribadi ganggu redaksi dan awak perusahaan cara penagihan kredivo dipersoalkan pemimpin redaksi lapor ojk prioritastv",
      "id": "e7a8e0bcd233d30f",
      "domain": "prioritastv.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-16",
      "title": "AdaKami Perketat Pemetaan Risiko Jaga Kredit Macet Tetap Rendah - Readers.id",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1ucUJ6Y3BVOVY3cU1LTTdpdTN2dXJsNEVPWmNTMHpHVmhocUVTLVFaaTY1NldydXNDWklUdDRXOUMtMVZhdERxYWYyT0tpdm9RRmplQi01VTZ2cGtoTzJwWmI1OWg1UTAxZWZZcGNZUWY4ZDBBOWhF?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "Readers.id",
      "summary": "adakami perketat pemetaan risiko jaga kredit macet tetap rendah readers id",
      "id": "fb317118fa02e733",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bfa00494f713f1d8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-16",
      "title": "AdaKami perketat pemetaan risiko untuk menjaga TWP90 tetap terkendali - Traders Union",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQNEM4b1ZWWGRCcWJsYTRMLUdVMUxmZ0RkNnBTbWx4LUVJU2Q2eGh6WnZRSmdjTnVqYVcwZWJwdnVuajV3TTNHTFp6X2R2QVhGZFo4SW9ZbndxYVdOdDhFUkgyS2xOTEVvaDhWaVVYaFBwcVEzLUhIZTJYdTlXSE5iSnUtblZHdmxZQXlPTWFKTVJySi1hbHYwRGJteVpUUQ?oc=5",
      "publisherUrl": "https://tradersunion.com",
      "source": "Traders Union",
      "summary": "adakami perketat pemetaan risiko untuk menjaga twp90 tetap terkendali traders union",
      "id": "15db283e258f8f4f",
      "domain": "tradersunion.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 62.6,
        "label": "mixed",
        "negativeWeight": 1.8,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1ca1c5e079a04870",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-16",
      "title": "AdaKami soroti transparansi saat permintaan pinjaman fintech lending terus tumbuh - Traders Union",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOOXMtS2d5NkhLVDRMVS10NjNRMERYZlVZbjlIMWE2T2x0UXNBT2hQUUwxZjBDWGM5LUQzaTlSR3JtZGhnT2tDTFc3Z2J0V0NKTU1YLUFPQ3A3RFYtZ1otQ3h1M2tseUNtRDhDWjQwZ3F2cWREaEdNUTZMZlN6eXo2ei1QX2ZfNTlTSGZuVXItVk0wRkUwbDgxaFNxWFF1YkJLQ2d4UC1CVWxhQQ?oc=5",
      "publisherUrl": "https://tradersunion.com",
      "source": "Traders Union",
      "summary": "adakami soroti transparansi saat permintaan pinjaman fintech lending terus tumbuh traders union",
      "id": "96e41ee72d86cb4c",
      "domain": "tradersunion.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-085cffd165425ce5",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-16",
      "title": "Cerdas Finansial Bareng Dosen UM di Tengah Alam Terbuka, Belajar Kelola Keuangan Hingga Hindari Pinjol - AdaDiMalang.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNVjN1dnpGdHVBdTF6T3Z3XzdreHVYTVNUMTBVWUlkcHV1UmRCNFkyUksxZVcxejhndDZLV084dlpVZWZDX2pZejhYU1JLeG0yV3NIWU1pRk9tdGM0Q0JFczE0MmVmcV85QWxWZzQzLWIzRnZzVm9qd1N0bTF1ZWdoNmZxVEVlODM5ZFk0WUE5ZlZaYWZkdkdHWTAySGozUG0zdkdiOHAtQ3JqSDN5Tml2WENCSHRjalJNeE9fMjI1TEhyTzUx?oc=5",
      "publisherUrl": "https://adadimalang.com",
      "source": "AdaDiMalang.com",
      "summary": "cerdas finansial bareng dosen um di tengah alam terbuka belajar kelola keuangan hingga hindari pinjol adadimalang com",
      "id": "0905bf323d219985",
      "domain": "adadimalang.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-18e8335bba2ed5f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-16",
      "title": "Download Loanpro Apk Pinjol Sfile, Loanpal Legal atau Ilegal OJK? Apakah Ada DC Lapangan? Pengalaman Galbay - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMiggJBVV95cUxQRlZIeVhvTVVMR0lnT094aHVOQ3FnM2RreG5zZVoxREgwSWtCTm1WZWg4d1E0VFJRZzN2eVJvSFJHdzVwb0xLQ0h4NnN3Zm1iYzBQN1FjVmlYbDdNOWNVT0U2OURxb1dHR1B0SDJvWmZZNTdTMHhETXdyQmlpOHZNbkdnYTk3OG4wUDJYaXp2dnJub3BlcHVXTWFGMHpnWWpvYlhYUnpzRUpVaDdVNUpZTi0xTnUtTnNjTkdCblZYZ2huRFlSYXdBODhUUlU4Wm1OU085MDhUY1dMNHVnRkRMbWwwblN3d1RTM19tN2NFWWRyVG8xMWIwcjZCVkoxdUtsQ2fSAfsBQVVfeXFMT1ZYbEhNVjlYVzR5TWdTcGxTWTh4cUdVdUd4MVFUR2IzU1paSnNqZGJmS3U1X2pmUHRQR3ZJZnkzU0lnV3pwN0ZDb0tKSzlBbXNYNktiNGlyVnB6ODhPNlg0Qmp5aUZRMG5BTm9uZFp1aVRRWm1ZbXNNRFdOQmh4UGRTNEN3QUZ6cGd3c2YxaFd1N2pNVTlzcXBBaGdnRFAtbkxEWVA0cHJ4Mzg1QXZDU1pZczJNVFMtcndjQ2hPMUQwLUItMVBSOWgzMlY4c0RCMkxhR0F6QmVPV2NIU2JhdWkzeGdIZDVLYWxuVUs4MTJGT0t6TUxxYlozVG8?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "download loanpro apk pinjol sfile loanpal legal atau ilegal ojk apakah ada dc lapangan pengalaman galbay berita diy beritadiy pikiran rakyat com",
      "id": "55a9008da0ca9a70",
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
      "eventId": "auto-97a5f122f65eb0b4",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-16",
      "title": "Ini Strategi AdaKami Jaga Angka TWP90 Tetap Terkendali - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQVTZYOFRVLUQzdmFHSmMtWXNKYWRXS0ZhRzBDQndMZzV0b0Rqb0lTcUpWek9WN3EwamJTRzllWjJteURxbjVlLXlnaVRCSUdRaWlxeUNmc0ZmUzJsVWtMdk9Kc0E4el9Ja09SdTdSX1dRdXBtVkgtWXhZOFZZNzVwVFZsc2hiLXMwYmZvQW50M2dtM2fSAYwBQVVfeXFMTlNJT3JQREtOc3g4RklnNzJZa2lFeXFZREtXc250OGZhcElWYnl1Znc5V1lka3NBczRxbklTMm1ZX0xiVXhRdmdqY1prM1FHekRfbjFoSFE1Mmx2Y21RQXJScUgxRUg5Q0FuYWQ1Ny1NZndPRjBlMVpJa1N0bG52eEhaazg0MTJ2MmptN0c?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "ini strategi adakami jaga angka twp90 tetap terkendali kontan co id",
      "id": "9c31ada38b130a1b",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 55.6,
        "label": "mixed",
        "negativeWeight": 0.8,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53ab6464eb079e81",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-16",
      "title": "Kapolsek Tamansari Bobby Mochammad Zulfikar Didesak Usut Dugaan Penganiayaan oleh Oknum Debt Collector - Pena Bicara - Pena Bicara",
      "url": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxOVk1KbTR4ek94ajN0OV9OZUw0UFZGdF9tMzYzdHJCemlkOGpYNWxRS0w4VG45T1oxRGhDcDh6Z3ZCbWRFWUF1SkRBSl9pVFBCWm1teWlFTU9xclBRMlJzTjczZHpYWHZfMUJmVjBBOThaOWNTRjR5dmtSUXFSMWZ6VkdUdDRrX0F6cUZjV09zcVBJMDdENXNDZzVyNjNLb0hmSVA1TjBvY0hqN20zUmg3LWFKbzUweWNKa05hSXRfNDNsY1pCWmI5SlVmU1c0aV9jSEdaR0xWN2dYMnVtZlgwLWRCcnBxSjjSAecBQVVfeXFMTlZNSm00eHpPeGozdDlfTmVMNFBWRnRfbTM2M3RyQnppZDhqWDVsUUtMOFRuOU9aMURoQ3A4emd2Qm1kRVlBdUpEQUpfaVRQQlptbXlpRU1PcXJQUTJSc043M2R6WFh2XzFCZlYwQTk4WjljU0Y0eXZrUlFxUjFmelZHVHQ0a19BenFGY1dPc3FQSTA3RDVzQ2c1cjYzS29IZklQNU4wb2NIajdtM1JoNy1hSm81MHljSmtOYUl0XzQzbGNaQlpiOUpVZlNXNGlfY0hHWkdMVjdnWDJ1bWZYMC1kQnJwcUo4?oc=5",
      "publisherUrl": "https://www.penabicara.com",
      "source": "Pena Bicara",
      "summary": "kapolsek tamansari bobby mochammad zulfikar didesak usut dugaan penganiayaan oleh oknum debt collector pena bicara pena bicara",
      "id": "c84acb9164e42e0d",
      "domain": "penabicara.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e499acd5961877c5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-16",
      "title": "OJK Catat Pembiayaan Pinjol Capai Rp 105 Triliun Juni 2026 - MediaKompeten",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9mRXdrTUVlMjc3MUFHTFh2Z2NoVG8zaTc1MkhFeUxBcHA2Z1ZMZ1dtZVV3MVpWRVpYcno2NFJPcGhTNWdFeVUwNFNVVHNqaGhRbzVfdU1WZnJFVDYzU29CUEpiTXl6RXZoZWNxZzR1OVZwTDQ?oc=5",
      "publisherUrl": "https://www.mediakompeten.co.id",
      "source": "MediaKompeten",
      "summary": "ojk catat pembiayaan pinjol capai rp 105 triliun juni 2026 mediakompeten",
      "id": "6c5990a07e509df4",
      "domain": "mediakompeten.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a5252e1c00b14c58",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-16",
      "title": "OJK Catat Pembiayaan Pinjol Capai Rp 105,14 Triliun Juni 2026 - sekbernews.id",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE03NHZYWXpvTlItMTQwZDRNbDZ5aEM5N0R1X2M2RjBEZWthdDFkUW1faVdySVBMQ21NV283cjdMcmw5NlhwdjQ0aFpHYTZubFdXVjM5a18yNXR4SkZibVNBdl8wclFSdzZLWXlZcm5mS3dDMXM?oc=5",
      "publisherUrl": "https://www.sekbernews.id",
      "source": "sekbernews.id",
      "summary": "ojk catat pembiayaan pinjol capai rp 105 14 triliun juni 2026 sekbernews id",
      "id": "b8048fad80ae72b0",
      "domain": "sekbernews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-682b7187c263fbc8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-16",
      "title": "Permintaan Pinjaman Tumbuh Subur, Transparansi Informasi Fintech Lending Jadi Sorotan - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQOTluRzlFUkhpT2F1amhKcmlTUkNCUE01c3ZiV3hZU1NYa2VldlVyYVA0bG53eHZ3YXMxTlNjbWlKYWFnMUtOYzY1dGtnU1N0UEJmQ29PSGkwSDlvbmprbzB3UDN1U1Z4emRaRlliYmF2dEhfT0U5VE5pQkQ1WEcyazZoUDVyRDdjeUo1dy1ueVRibnpVcHlzM0xQeVZhZTBsZS1uOHE4aGNBUE12S0NzSWZMdUpkSTg0cjcw0gG0AUFVX3lxTFBWbF9jUDF4UGl6RWVjNEN2N0dPRlpEc2J1VlBsZC1Hd04yaUFhZTFFYmdvVjlxSTdJbV9mNEVjYVpxNVVGVzlzYm5mWDRCRVhhX1ZoZXNQdGxHTnlnbUNSdkxZa0ZBUkVQREJFOVQ5enNtLTZna0JONHp4V1c2QU0tZEtqdWp0Z3M1Y3F6Q0VfT3F6ek44T1BzRnRnSldTOWxjRGRSRlJkRkNNZE45RGg4b2wwSw?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "permintaan pinjaman tumbuh subur transparansi informasi fintech lending jadi sorotan kontan co id",
      "id": "9a5b2675f2d68d49",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1880e392b495a356",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    }
  ],
  "socialItems": [
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "IO6EvGgUs7c",
      "date": "2026-08-03",
      "text": "&quot;Disinggung Soal Pinjol, Ruben Onsu: Buktikan Kalau Memang Ada&quot;",
      "url": "https://www.youtube.com/watch?v=IO6EvGgUs7c",
      "engagement": 22666,
      "id": "e079d1f9bbed07d5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b7e4a249801cb697",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyEutM5UeoxseVB_3F4AaABAg",
      "date": "2026-08-03",
      "text": "Astaghfirullah... nggak sepantasnya seorang ibu bicara asal ngejeblak",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "23086ae180016802",
      "eventId": "auto-d92bdc5c14f029ee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzMQQzjKaiRP5bksB94AaABAg",
      "date": "2026-08-03",
      "text": "Bagus ruben lawan jgn diem mereka sangka kamu gak bersni skrg udh terbukti gak ada pinjol mantan istri yg sakit jiwa ngarang, badan sehat, setiap hari live,  ada di tv dan yutub umroh udh lebih sekali skrg gak ada lagi yg berani ngancam. Semangat ruben",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 410,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 66.1
      },
      "id": "b6bab1e988ce278b",
      "eventId": "auto-9bf69e3519203432",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxG2ovieOOOmLW30IV4AaABAg",
      "date": "2026-08-03",
      "text": "Ga usah diladeni Ruben, sabarnya ditambah. Fokus ke hak asuh anak sj smg bs dialihkan ke anda. Dan smg anda sgr mendapat jodoh lg yg lbh baik shalihah. Aamiin",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "20f6fe31ac32ec01",
      "eventId": "auto-08214b738dc47d89",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzfzl9PUhj44ov4spB4AaABAg",
      "date": "2026-08-03",
      "text": "Jelas bgt kog dia ngomong padahal DENSu bukan lawyer malah ngomong nya lagi lagi rekening anak",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 11,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "863f7e232590731b",
      "eventId": "auto-e74c5cb8d28e884c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxN7iWVCS3KDmlwTJF4AaABAg",
      "date": "2026-08-03",
      "text": "Kasian banget kamu Ruben ...\nUdah diperas di fitnah , dan di sakitin SM orang yg ngsh mkn dan mendewikan kamu tapi msh sabar skian LM .\nBiar SMG Tuhan aja yg membalas smua kebaikan mu ya Ruben 😢",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 10,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "a07093dd410a2142",
      "eventId": "auto-c25f93e12200f99b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyx669RsGlLsShEfNV4AaABAg",
      "date": "2026-08-03",
      "text": "Ko Ruben  sehat2 disana yaa💪💪💪🤲🤲👍🙏",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 176,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "9e1152890db9ad80",
      "eventId": "auto-70cab7051f9b05a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyx7fT_B_Z1bvrkf_l4AaABAg",
      "date": "2026-08-03",
      "text": "Lawan Ruben. .semakin diam semakin di injak² sm dia dan komplotan si ular Sarkawi .bongkar Ruben ..biar tau diri dia .",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 204,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "50507c41a24d9ea3",
      "eventId": "auto-985b4abcd3bd1381",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxbGSjvT-c8H8zSeoJ4AaABAg",
      "date": "2026-08-03",
      "text": "NNT bayarnya ngandelin Ruben lg",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 36,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "be09da38f531c2d7",
      "eventId": "auto-82f4135fe84f7421",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxxAYba9mDLB1k0UK94AaABAg",
      "date": "2026-08-03",
      "text": "Nah gitu dong, gak selamanya diam itu emas, mantap 😂👏👏😍🙌",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 38,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 44.4
      },
      "id": "80736f67d3fbe021",
      "eventId": "auto-f15715966f83d928",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy2bWMv3X8Ccv2lzVR4AaABAg",
      "date": "2026-08-03",
      "text": "Namanya jg menyanggah hrs dibujtikan dg bukti pak, Sarwenda sdh keterlaluan memghina memeras",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 34,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 44.4
      },
      "id": "4d7134a2aef8b225",
      "eventId": "auto-fbe0f403052cfca7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwq0BsYDxYDJP4lAc14AaABAg",
      "date": "2026-08-03",
      "text": "Orang waras pasti bela yg bener .hanya setan bela yg salah",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "dc53626384b15715",
      "eventId": "auto-687cee999d9c4d61",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "u-nwMzvnM6U",
      "date": "2026-08-03",
      "text": "Ruben Onsu Dituduh Terjerat Pinjaman Online #shorts #artist",
      "url": "https://www.youtube.com/watch?v=u-nwMzvnM6U",
      "engagement": 43850,
      "id": "f56bc62e537391e0",
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-02b6e97c10e34e12",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwY6sPHTprRl9XiwBl4AaABAg",
      "date": "2026-08-03",
      "text": "Ruben semoga ko ruben sehat selalu jiwa dan raga,dijauhkan dr org” yg berbiat jahat.jgn lupa banyak sekali yg support ko ruben.berbahagialah dan fokus ke anak”.",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "cf9ed3076ef5d239",
      "eventId": "auto-8015fbc12f921292",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxU5KIS9KiJVzqzLgh4AaABAg",
      "date": "2026-08-03",
      "text": "Ruben..kamu ayah ter the best..semua mendoakanmu..semoga dpt jodoh yg sholehah..yg mencintaimu & membahagiakanmu",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 84,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "8648cbcf06062598",
      "eventId": "auto-ac9b3f921392ae48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzO-_jdAegnh7NJgMt4AaABAg",
      "date": "2026-08-03",
      "text": "SMG aja CPT selesai mslh ini Ruben biar bisa tenang dan bahagia bersama anak2",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 43,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "31f53bb83e1a1545",
      "eventId": "auto-60f97e56b9449c40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8Qsj2-qkW8VjvNEd4AaABAg",
      "date": "2026-08-03",
      "text": "Sarkawi kerjanya fitnah doang. Buka terus faktanya, Ko.",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 149,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "bc0dcb0afe843fa1",
      "eventId": "auto-0f8b1dccc4e80ae1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxIJOUwPQjQsrQlpeF4AaABAg",
      "date": "2026-08-03",
      "text": "Sarkawi sudah tamat... Sudah kebuka semua aslinya..",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 98,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "916be55c865292c4",
      "eventId": "auto-c0fa4c977299e69c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9-41VADwlQl0A5jJ4AaABAg",
      "date": "2026-08-03",
      "text": "Sarwendah dan gio klo diliat liat mereka berdua saling memfaatkan satu sama lain dlm hal apapun",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 77,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "91c77ce715665bc8",
      "eventId": "auto-139f50a8171356f9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZUsbuW6PeqVF08Ot4AaABAg",
      "date": "2026-08-03",
      "text": "Saya mah gak mihak siapa siapa. Cuma mau doain Ruben Onsu aja. Sehat selalu dan semoga menang dalam kasus HAK ASUH ANAK.",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "24836afcab428264",
      "eventId": "auto-2e233e2180697112",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyQN3eLrl6qLIzjDFh4AaABAg",
      "date": "2026-08-03",
      "text": "Sdh saatnya RO tegas jgn mau di injak\" org seperti s",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 212,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "f17a0331ade07a0f",
      "eventId": "auto-a3a8b5301357eb30",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXEcLwocUYeJw8Urd4AaABAg",
      "date": "2026-08-03",
      "text": "Semangat OM Ruben 🎉",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "96b857048f9e071e",
      "eventId": "auto-be2f7f72facadb4a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxlDGQ99l-Pa6w8BUx4AaABAg",
      "date": "2026-08-03",
      "text": "Semangat kak ruben insya Alloh indah pada waktunya amin❤❤❤",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "d022781921b3a624",
      "eventId": "auto-1e39b08943c6dd14",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxRvkoDRPgM2Sm5G5F4AaABAg",
      "date": "2026-08-03",
      "text": "Semangat koh...bukan ngajarin jahat ya koh tp lawan dikit. Banyak istighfar koh",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 26,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "2d8c06e68ba9d6c5",
      "eventId": "auto-5fa4e48c0fc140e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyEMg8WOgR8sEZ3s3F4AaABAg",
      "date": "2026-08-03",
      "text": "Sikat habis koh ruben jangan biarkan dia menginjak injak harga dirimu",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 27,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "bef6fd7fc35575cb",
      "eventId": "auto-524f4ec3d953e07c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJAzq_jXY8TaVTc654AaABAg",
      "date": "2026-08-03",
      "text": "Sy dr awal sdh curiga SM si gio yg pinjam ke pinjol",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 17,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "f797c75fdb1b6f2f",
      "eventId": "auto-9ffdfd9b70697172",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "GQFV3qToFlo",
      "date": "2026-08-03",
      "text": "TAMAT!! BOS PINJOL MUNCUL, KLARIFIKASI YANG PINJOL GIO PAKAI NAMA WENDAH?? RUBEN SURUH BAYAR?",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 96397,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "8119311bbd5624d2",
      "eventId": "auto-5cfe0aceeead2ffe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDVLsUd1A74CN3K7p4AaABAg",
      "date": "2026-08-03",
      "text": "Yg pinjol Gio tapi yg disuruh bayar Ruben gimana sih!!",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 24,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "e7f853b0d2277139",
      "eventId": "auto-5eb57ec39abbcf4a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "oLtFO8cTwfg",
      "date": "2026-08-03",
      "text": "data sarwendah bocor tentsng pinjol",
      "url": "https://www.youtube.com/watch?v=oLtFO8cTwfg",
      "engagement": 117991,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 64.0
      },
      "id": "366d088e3c8161f6",
      "eventId": "auto-e8627ba80e618a22",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzAzJ3TvX1w2YdwNYl4AaABAg",
      "date": "2026-08-03",
      "text": "semangat RO..nanti AlLAH ❤.\nsabar ya ..",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 14,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "3b938ed2db436f6f",
      "eventId": "auto-191a39051eade6bc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw2FN8WmF0AKbgXu0J4AaABAg",
      "date": "2026-08-03",
      "text": "setuju dg Ruben... logis bangettt",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 47,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "9047c8b0fc417ebb",
      "eventId": "auto-3a05fef0420cc869",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1GZddeHtkQGB5iLJ4AaABAg",
      "date": "2026-08-03",
      "text": "sikat habis ruben jgn diem terus ,org2 begitu jgn di biarkan meraja lela.",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 292,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "d1ce8a5a3839779c",
      "eventId": "auto-101d884aa2025377",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyMwEVkOngGEVQ65Xp4AaABAg",
      "date": "2026-08-04",
      "text": "Assalamualaikum koh , semoga koh Ruben selalu dlm lindungan Alloh ya , semoga koh Ruben Alloh kasih sehat , kuat , sabar ya koh , orang sabar itu di sayang Alloh koh",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "43f7f680fd1de735",
      "eventId": "auto-b017a1902d0a4ee1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9BLgWtydmilkSl3R4AaABAg",
      "date": "2026-08-04",
      "text": "Bang ruben sabar y bang semagat",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 3,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "e2f6ea492908fe8e",
      "eventId": "auto-ac7def06faad66a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxIG70KBu1-rBjQNGJ4AaABAg",
      "date": "2026-08-04",
      "text": "Dr pd ngomong sendiri2 sana sini mending di satuin.tanya deh tu.",
      "url": "https://www.youtube.com/watch?v=9DS2kxeGy7c",
      "engagement": 5,
      "id": "8807c4c5a55d41b4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b21fd57ba25ae25",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzNwi_cBtZ26vGGAxF4AaABAg",
      "date": "2026-08-04",
      "text": "Kami se-Indonesia support ka Ruben. Kami do'akan kak Ruben kuat hadapi semua cobaan ini. Kak Ruben sehat selalu dilancarkan Rizkinya utk masa depan anak ank",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 43.0
      },
      "id": "451f0050b623fc9a",
      "eventId": "auto-5e70541fdbfd21c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxu-bCL-mJGAvK7F7R4AaABAg",
      "date": "2026-08-04",
      "text": "Naaah....mulai kacau",
      "url": "https://www.youtube.com/watch?v=9DS2kxeGy7c",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "ca96492ecfea8d90",
      "eventId": "auto-9719626b0ee0fe14",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "FdYpZXzpxe4",
      "date": "2026-08-04",
      "text": "Ruben Onsu Bereaksi Usai Disebut Sarwendah Debt Collector#sarwendah #rubenonsu",
      "url": "https://www.youtube.com/watch?v=FdYpZXzpxe4",
      "engagement": 24699,
      "id": "38c0459761612a0e",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4107d22b779bc76e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLd_uOgGBdX2QeGvN4AaABAg",
      "date": "2026-08-04",
      "text": "Semangat Ruben... Allah melindungi mu",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 15,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "f4f112065f762b2d",
      "eventId": "auto-8c72b9b63afb9e7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw44iL3BF_n9052OTh4AaABAg",
      "date": "2026-08-04",
      "text": "Semoga KA hji Ruben di berikan perlindungan oleh SWT dan di berikan kekuatan dan kesabaran 🤲🤲🤲🤲🤲🤲🤲🤲❤❤❤❤❤❤",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 4,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.95,
        "lexiconRisk": 50.0
      },
      "id": "6bbf922c808a356c",
      "eventId": "auto-9c1654dca7ff2a33",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyjTslop11_LXtZOX94AaABAg",
      "date": "2026-08-04",
      "text": "Tetap semangat kak Ruben tetap minta bantuan sama Allah SWT y kak",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "c5ca626afc1325c6",
      "eventId": "auto-a70d19e9b5fe97e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "9DS2kxeGy7c",
      "date": "2026-08-04",
      "text": "VIRAL! Sarwendah vs Ruben Onsu Soal Pinjol, Kuasa Hukum Buka Suara! #trending #shorts #viral",
      "url": "https://www.youtube.com/watch?v=9DS2kxeGy7c",
      "engagement": 74131,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "55ebb3846df72759",
      "eventId": "auto-a5bbe3458b0eb63c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwWFqnLUBSNEZwf_SN4AaABAg",
      "date": "2026-08-04",
      "text": "Yg sabar y Ben ,InsyaAllah d mdhkan sgl urusan y",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "56b952c4b66a169c",
      "eventId": "auto-78fe15e6afe16065",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxpcl6NBx40fBW5oOt4AaABAg",
      "date": "2026-08-05",
      "text": "Astaghfirullah hal'adzim Na'udzubillah mindalik",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 22,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4c0269dc67ec6329",
      "eventId": "auto-573038e81bbb3bbb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxip9mO3dypQdumPWl4AaABAg",
      "date": "2026-08-05",
      "text": "Ayooo....kembali ke hati nurani masing2...pikir dulu sebelum bertindak...perbanyak ibadah....passti ada jalan keluar terbaik....",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 13,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "34e6ca6cb67d1719",
      "eventId": "auto-9550871a19bb123c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "Ly08dMIYars",
      "date": "2026-08-05",
      "text": "Cerita Sarwendah Didatangi DebtCollector Pinjol #shorts #gosip #artis #viral #kicaumania #gosipkilat",
      "url": "https://www.youtube.com/watch?v=Ly08dMIYars",
      "engagement": 35577,
      "id": "3b0f87d9062e0d9d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dc5972b58af41b5d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxVxRpLb5tlMqwOMKd4AaABAg",
      "date": "2026-08-05",
      "text": "Dokter aja gak punya duit apalagi bukan dokter. Ngeri... Ekonomi Indonesia",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 55,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "66a4950abbd9a4e2",
      "eventId": "auto-a8c047824c5a9137",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxBkF1SDpJsBQO-RDd4AaABAg",
      "date": "2026-08-05",
      "text": "Economy sekarang, rakyat dari makan dari tabungan sampai makan dari utang, sementara elit2 negara simpan uang hasil korup gila2an.😢😢",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 236,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 57.0
      },
      "id": "6eb998836ac03ed0",
      "eventId": "auto-21b8bfc62df39635",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy69HxJn9TaDmEejHl4AaABAg",
      "date": "2026-08-05",
      "text": "Ekonomi makin sulit, rakyat kecil makin menjerit. Kl imanya g kuat, ahirnya jd berbuat jahat. Urusan perut tdk bs d tawar2 lg. Korupsi makin menjadi2, tetap rakyat kecil yg jd korbanya 😭😭",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 11,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 61.9
      },
      "id": "fb0dceef6823e1b5",
      "eventId": "auto-b11a0dcd14c0c992",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzTCuvfQ0_KqatK3gl4AaABAg",
      "date": "2026-08-05",
      "text": "Ini lah fakta in this economy sedang tidak baik baik saja",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 94,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "4c853b4f3f698da9",
      "eventId": "auto-0e93e2d01b8ca0a6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzKYCBXTuLEewCU9FV4AaABAg",
      "date": "2026-08-05",
      "text": "Miris. Liatnya punya. Pendidikan. Tinggi tp gak bisa bertanggung jwb pd dirinya",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 5,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "7604b1bd76f93d65",
      "eventId": "auto-0f25392b4b608bed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy1WiPXsTwm3mpJWtJ4AaABAg",
      "date": "2026-08-05",
      "text": "Ngeri kalo udah menyangkut utang 😊",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 68,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 57.0
      },
      "id": "5f56c9ae32cf698f",
      "eventId": "auto-74a441c1a5c4668c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyVBsX5sChzBDlVpvp4AaABAg",
      "date": "2026-08-05",
      "text": "Org yg profesinya kt anggap berduit aja trnyata ngerasain juga tekanan ekonomi ya😢",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 271,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 57.0
      },
      "id": "aba9cb5f425b2f53",
      "eventId": "auto-62da86b2cca63daa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOVmxu-MDxs-Gr-Ax4AaABAg",
      "date": "2026-08-05",
      "text": "Pemerintah harus menghintikan Pinjol, sdh banyak korbanya, pemerintah tdk peduli dgn masyarakat,",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 258,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 61.9
      },
      "id": "9f587207694e7752",
      "eventId": "auto-8a8a4b217c180499",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxP9AKdezXpF8z40Kt4AaABAg",
      "date": "2026-08-05",
      "text": "Pernah melewati masa2 sulit itu ...di datangi debtcolektor 3 orang berbadan hitam dan tegap ...tapi Alhamdulillah Alloh masih kasih gw kuat secara mental dan sekarang sudah ber angsur membaik secara ekonomi ....dan ga mau lagi pinjem2 duit secara bgtu ....mereka bukan mau nolong kita dalam kesulitan tapi memanfaat kan kesulitan kita untuk cari ke untungan .... Bukan lagi lintah tapi buaya",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 17,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "10692e96916f9647",
      "eventId": "auto-bbc0ca8fb1781575",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3rgrUGSmfQuSJsC54AaABAg",
      "date": "2026-08-05",
      "text": "Pinjol dan judol tidak akan pernah di tindak karena setoran besar ke negara,,",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 39,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "508522e20de13c31",
      "eventId": "auto-606f563260715b39",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzH4jaQA96ff5CBOMV4AaABAg",
      "date": "2026-08-05",
      "text": "Pinjol sering ancam ancam orang dan permalukan orang... makanya kasus bunuh diri dan kriminal makin banyak di Indonesia",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 29,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 88.5
      },
      "id": "68a7442ce2276c91",
      "eventId": "auto-e74d7ffe99636dca",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXkQsb7UnKBfaHDm14AaABAg",
      "date": "2026-08-05",
      "text": "Semoga pihak yang berwenang menganalisa penyebab dokter ini mengakhiri hidup dengan sia2 ....",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 8,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "f882fd727f6039a8",
      "eventId": "auto-cc42471d39c665f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFP8f0xMnFLCVazY54AaABAg",
      "date": "2026-08-05",
      "text": "Sungguh sangat mengenaskan😢",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 24,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "a28b198d4aebce01",
      "eventId": "auto-be2be022b290ea40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxT8TQysOn3opTu_pV4AaABAg",
      "date": "2026-08-05",
      "text": "pinjol adalah tengkulak modern",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 100,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "456b8b6cfc693222",
      "eventId": "auto-be69e8796a9f7040",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxYi4c6ncUltGK_BdR4AaABAg",
      "date": "2026-08-06",
      "text": "Apa hubungan nya pinjol ma hak asuh anak ....kasih Endah 200 jkt aja bisa Masya pinjem pinjol ..kocakk😂",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 13,
      "id": "929a5092854e3ac9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-63238a41bcaab7f9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwrB4cD4JkmX2WwvHF4AaABAg",
      "date": "2026-08-06",
      "text": "Awas pak kamu nanti di laporkan kalau gak ada boktinya",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 5,
      "id": "a06a3a18b10e6109",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-62e029e2741f7799",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwDofkncqrTkiuKuIt4AaABAg",
      "date": "2026-08-06",
      "text": "Aya\"wae Fitnah teh.,.Doa terbaik buat RO",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 6,
      "id": "e26c714b177f3fea",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-411a478034a82f4e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxdKTpD0gvCoJWJ9mh4AaABAg",
      "date": "2026-08-06",
      "text": "Bang butuh banget buat ank sekolah",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "54f7c0f188c53c7d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-582cd8fd78abb70d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyqh_wqhm0TJMBJ_wN4AaABAg",
      "date": "2026-08-06",
      "text": "Bantu bang ,buat ongkos mau berangkat kerja gak punya ongkos",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "6fe2272298855a46",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7fc2d6ebb05c1dc0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwNgN0U8ZLmlKu87Nd4AaABAg",
      "date": "2026-08-06",
      "text": "Bisa pinjam pinjol kalau utang bank sudah menumpuk",
      "url": "https://www.youtube.com/watch?v=9DS2kxeGy7c",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 57.0
      },
      "id": "66be27d2b274c974",
      "eventId": "auto-ca16a7046a3eddf0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "p2o8vQos9nI",
      "date": "2026-08-06",
      "text": "Bukti Ruben Pinjol #rubenonsu",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 65360,
      "id": "a27716f99fcb1335",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-01355d8fd4e176ee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGyuN-JzLHftXPaxl4AaABAg",
      "date": "2026-08-06",
      "text": "Bukti koq di spill dikit 😂😂😂 parah sih ini",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 2,
      "id": "8d1657756d66a37c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8a4ce953d079f0a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "7q8ioXG8hRM",
      "date": "2026-08-06",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 35038,
      "id": "465f7b368ac5ddc6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c56326dcc516effe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwxIQdl7Nhgiu4mkjR4AaABAg",
      "date": "2026-08-06",
      "text": "Coba utk biaya kesehatan",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "9f5c7c3c56012e01",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a46a107b7425e8e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxd1C8t4KmU_62KAwF4AaABAg",
      "date": "2026-08-06",
      "text": "Doa yg terbaik utk bpk ruben....Aamiin❤❤❤sabar ya pak ruben....Allah tidak tidur",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 4,
      "id": "70d2ca7664160419",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b96f979f6e3c6817",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyUySdZtEOC_PsPElN4AaABAg",
      "date": "2026-08-06",
      "text": "Fitnah ..udah panggil aja tuh si tukang tagih pinjol...sampe TK trbukti ...hati2...selesai hidupmu",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 20,
      "id": "c0a0dadf00325fb3",
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 1.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f90c17f2d90e3e63",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz6I0Qqmjj1vQZPk8p4AaABAg",
      "date": "2026-08-06",
      "text": "Ga ngebuktiin apa², di bluurr smua 😂😂😂 nama elu sndri jangan² itu yg tertera",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 2,
      "id": "9381c21241975cb5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8b6c25e38fe543a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNJhUI5G8QMlI2Red4AaABAg",
      "date": "2026-08-06",
      "text": "Giliran ko Ruben melawan tim Sono kepanasan",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 2,
      "id": "bf41f5287a3f2cf1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-01bcd3239dae1c34",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwER9kN8NHetVblauR4AaABAg",
      "date": "2026-08-06",
      "text": "Gio pinjam uang keu pinjol katanya ceo",
      "url": "https://www.youtube.com/watch?v=GQFV3qToFlo",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "921691a71dda725e",
      "eventId": "auto-373a2ce4585a80ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyg8FaN0Ae__zBdGwJ4AaABAg",
      "date": "2026-08-06",
      "text": "Gk caya gw seh bang Ben pinjol.. fitnah !!",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 7,
      "id": "0b03c63d887f77e7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1b97e186679c93c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxTAH6F5w5qKY9y60B4AaABAg",
      "date": "2026-08-06",
      "text": "Hahaha..si S aza gak bs tunjukkan bukti..ditanya aza gelagapan...😂😂😂",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 4,
      "id": "a8086b68cf3723b2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d77a25798132bf2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwh8s82nEE1f7U-G-F4AaABAg",
      "date": "2026-08-06",
      "text": "Inilah contoh pengacara yg menyedihkan ...berusaha memenangkan kasusnya dg segala cara ...termasuk framing nyata dr ucapannya \"mantan ayah\" yg tak pernah diralatnya....parah",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 15,
      "id": "331e1a68f1172765",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-857fff6f20a8e22b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyijwmadMejcvPYRGJ4AaABAg",
      "date": "2026-08-06",
      "text": "Kak wenda ini aneh, kalau km punya uang bnyk bayar dong.. \nJangan mlh mengumbar di medsos manta suami mu kan sdh keluar uang bnyk itu setiap bulan buat anak 2 sm byr rmh",
      "url": "https://www.youtube.com/watch?v=IO6EvGgUs7c",
      "engagement": 0,
      "id": "f4df0f05c8557b42",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-317948eb25d97cdc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwYIkMB8c1fUmMHSAR4AaABAg",
      "date": "2026-08-06",
      "text": "Kalau ruben pinjol, hukum nya apa? Cuma mempermalukan saja? 😂😂😂",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 6,
      "id": "e241e12413b1ad97",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e0055f24d267e2f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJL9ZdaYYBFtkSRVF4AaABAg",
      "date": "2026-08-06",
      "text": "Kasian ruven di kataii bangkrut puas poroti uang ruben di hina 2 di katai pinjol tuntut .sarlont sarijem",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 2,
      "id": "4bd824d7c4c1f330",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-787192a1b87a2fb9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjRbM3am8_AHEpwLl4AaABAg",
      "date": "2026-08-06",
      "text": "Lagi butuh buat anak lagi sakit min",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "aaf65934840af278",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4191803e81284092",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxUpl8y5frpu6GkgqR4AaABAg",
      "date": "2026-08-06",
      "text": "Masya Allah.. Cuma mau ketemu anak2 nya susah amat... Merembet kemana2... Sabar ya ko ruben... ❤❤❤  nanti indah pada waktunya... Anak2 mu pasti tau kelak perjuangan mu buat ketemu anak2 begitu banyak rintangan...",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 27,
      "id": "aca44b42737497d9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d9b8e4c44787e077",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxHes1M9BMMGvJYCsN4AaABAg",
      "date": "2026-08-06",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, komen alasan kalian mau banget daget hari ini untuk apa 👇 https://link.dana.id/danakaget?c=swuxrsxa6&r=c7Q38x&orderId=20260809101214443515010300166276292578950",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 166,
      "id": "f72c889403339f4f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1f957284007f4117",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwiPi74ePPI4FXecux4AaABAg",
      "date": "2026-08-06",
      "text": "Mending lapor polisi dan temukan siap yg sebenarnya berbohong",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 3,
      "id": "f6e547072057528f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f01f14c1aa6d3861",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwaRQowOcJLigmJpTV4AaABAg",
      "date": "2026-08-06",
      "text": "Pengacara ini mengalih ka masalah hak asuh ank jangan terpancing",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 14,
      "id": "8525d9d51e39c822",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7d18dee53116ae05",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_hniV-f_aWpxZ4-V4AaABAg",
      "date": "2026-08-06",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 192,
      "id": "b565e08880367349",
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
      "externalId": "UgyZeKT8O7nNOQnGgUx4AaABAg",
      "date": "2026-08-06",
      "text": "Semangat koh Ruben. . .Allah slu melindungimu. . . aamiin 🤲",
      "url": "https://www.youtube.com/watch?v=dpXjdxWy98U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "193a98899cf7c8bc",
      "eventId": "auto-fef5838619c5d821",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwrv_ZGQJUGxwxbF_x4AaABAg",
      "date": "2026-08-06",
      "text": "Sw dn oengcara y sma2 tkang biong😂😂",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 2,
      "id": "4124689f937d0029",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dfe0de13205439e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "FHoQKiZqxSc",
      "date": "2026-08-06",
      "text": "Tanpa BI CHECKING?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 31839,
      "id": "51e7241b61bd8907",
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
      "externalId": "UgyE0TQoehx1DqBpoSF4AaABAg",
      "date": "2026-08-06",
      "text": "Tetap semangat ke masalah hak asuh anak\nJangan terpancing",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 13,
      "id": "6e975097938e4ea0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3f9ae7bb073375a0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzqnaQAWPFI1ePJQcN4AaABAg",
      "date": "2026-08-06",
      "text": "Urusan hak waktu bersama anak malah spt kasus perceraian aja....kemana2",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 2,
      "id": "ea5350dd61f75c3c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-735cb59cf534cae4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "MGeNHdLXviw",
      "date": "2026-08-07",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 49251,
      "id": "dacde5e95588ca70",
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
      "externalId": "UgyEujYRpjKMhykcuCh4AaABAg",
      "date": "2026-08-07",
      "text": "BISMILLAH",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "e2201368487f1eff",
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
      "externalId": "Ugxxiwtfz9FDhr7WyMV4AaABAg",
      "date": "2026-08-07",
      "text": "Bang dana gawat dong",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "affad8fd697e2e4f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2e30194bdc09ae85",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyGFdbGQsAa_galfR4AaABAg",
      "date": "2026-08-07",
      "text": "Bisa btu bng..bt bayar sekolah",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "aaec49c6ec9446a6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c461b9c13ba3abbc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4ObXx2TVUyLgXtCR4AaABAg",
      "date": "2026-08-07",
      "text": "Buat isi saldo ngojol bang .. biar ada penghasilan 😢",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "878bb71271710278",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e48ac0b197c4340",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxahZFe4ZBKsJSMRgt4AaABAg",
      "date": "2026-08-07",
      "text": "D akun danaku blm keluar",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 2,
      "id": "267618135dfadeef",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-691f97347fe9c83f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwusWVmk_5xobd9ak54AaABAg",
      "date": "2026-08-07",
      "text": "Kan sdh 6 bln tdk di ksih nfkah  anknya. Dn pinjol muncul jg stelah tdk ksih nfkah . Bisa sja emang da pnjaman gk thu pa bner RO taw RO2 yg lain. 😂",
      "url": "https://www.youtube.com/watch?v=1UUzViOnRVo",
      "engagement": 2,
      "id": "9fee004be4ef122b",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a4472efe45f0b7a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxFhBEpX6qGvxtinOp4AaABAg",
      "date": "2026-08-07",
      "text": "Koroptor yg harus bertanggung jawab klo bgini🤲🏼🤲🏼😭",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 65,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "097b22aadd7f5671",
      "eventId": "auto-7331fe2881ce7629",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw3QSlkgvkaLoCsl-B4AaABAg",
      "date": "2026-08-07",
      "text": "Preet",
      "url": "https://www.youtube.com/watch?v=1UUzViOnRVo",
      "engagement": 2,
      "id": "2a07e22cc92fdb16",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e6a0df7b7d9b500c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "1UUzViOnRVo",
      "date": "2026-08-07",
      "text": "Ruben Onsu Dituding Terjerat Pinjol dan Debt Collector, Nanda Persada Tak Percaya: Lucu Sih‼️ #short",
      "url": "https://www.youtube.com/watch?v=1UUzViOnRVo",
      "engagement": 47797,
      "id": "91aa70899effd29f",
      "sentiment": {
        "risk": 78.0,
        "label": "negative",
        "negativeWeight": 4.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ef17e894b55c433b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyaoccSpTAoIW_Z8Uh4AaABAg",
      "date": "2026-08-07",
      "text": "Sabar selalu ya & tetep Istiqomah aja kang haji Ruben.. jangan gampang terpancing omongan si Sarwendah!! Untuk Pengacara nya RO tetep Semangat n fokus membela kebenaran untuk kang haji Ruben..!!!😊💪💪🤝👍👍👍",
      "url": "https://www.youtube.com/watch?v=p2o8vQos9nI",
      "engagement": 2,
      "id": "00ec78f4457313fc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-840ab151ea515848",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzgpQ5DRESiDQEk8994AaABAg",
      "date": "2026-08-07",
      "text": "Seandainya pinjam juga gpp, maklum , banyak kebthan, toh juga gak buat foya foya, biarin aja",
      "url": "https://www.youtube.com/watch?v=IO6EvGgUs7c",
      "engagement": 1,
      "id": "702f4fd12d296e2d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4611918d8227a3de",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZxCdyoie-1kvpGtR4AaABAg",
      "date": "2026-08-07",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 277,
      "id": "23c45a7b41875483",
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
      "externalId": "UgyZBLDXhzuhlUJiLWV4AaABAg",
      "date": "2026-08-07",
      "text": "Semoga Sarkawi cepat kena Azab! Aamiin",
      "url": "https://www.youtube.com/watch?v=1UUzViOnRVo",
      "engagement": 4,
      "id": "2bf9055316b866b6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ed7b984e664c1418",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4i0_VW5knWt2GBwJ4AaABAg",
      "date": "2026-08-07",
      "text": "Semoga dapat bang",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "976261fbfb648a48",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b15b1e684a30d077",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "j4_6ogU-wMk",
      "date": "2026-08-07",
      "text": "UDL : Kenapa Terlilit Pinjol dan Banyak Hutang?  😱#ceramahlucu",
      "url": "https://www.youtube.com/watch?v=j4_6ogU-wMk",
      "engagement": 51692,
      "id": "db32b3b59dd71aa6",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bfaaa7aa90bf9831",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzGJPHQFFIcpJaUCG14AaABAg",
      "date": "2026-08-07",
      "text": "Untuk bayar cicilan motor bang",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "996c20dd1f4448a7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-819c471c9f191272",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugws_O3_pJ8GKP9GoFt4AaABAg",
      "date": "2026-08-08",
      "text": "Apa pasti di acc",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "905054b86847dd17",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1c3c423d2cde6e98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwLSUxEQqvRshcFrfl4AaABAg",
      "date": "2026-08-08",
      "text": "Bantu bang saya blum ada fitur nyaa lagi btuh saldo dana",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "7235af4a104f4f8f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f36d287e0c0ee905",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgylVAeIclDUeS_EH1l4AaABAg",
      "date": "2026-08-08",
      "text": "Bantu saya gaada fitur nya",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "629cdcfe4774f33f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6f70861bc5389b60",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw2PYEU2eW_dAu647d4AaABAg",
      "date": "2026-08-08",
      "text": "Bisa\"nya markonah membual aja 😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=1UUzViOnRVo",
      "engagement": 1,
      "id": "494760933a4943c3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8960a71b8f67def0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw-UcYOozJ5wUSvihd4AaABAg",
      "date": "2026-08-08",
      "text": "Bismillah, buat bayar kontrakan bang",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "48228a12f4a8e038",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7f9351f75748efc4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwqGSdU5wiI45P8z1V4AaABAg",
      "date": "2026-08-08",
      "text": "Dana ku ngak ada fiturnya bg",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "e849d89fdb192371",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e54ba031999a450",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwTWLibXixElr50pgJ4AaABAg",
      "date": "2026-08-08",
      "text": "Di akun dana saya blm keluar bang malah versi terbaru 2.137.1 bang",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "3c81306e13167b08",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d79d3c08665344e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzcd--1QLSVS-4v7KF4AaABAg",
      "date": "2026-08-08",
      "text": "Di aplikasi saya gak ada pitur dana instannya, padahal akun saya sudah premium",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "55ca539b434c391b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0851a5ae8af8da13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJ6ft75pHV9cC7t0V4AaABAg",
      "date": "2026-08-08",
      "text": "Hadir min pinjol ada yg bisa cair.kebutuhan mendesak",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "c55e22f82a2a53dd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-decf417ac8364a53",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxN-HBiU0LvSHE204x4AaABAg",
      "date": "2026-08-08",
      "text": "Masih ada kepotong itu bng  Lang sung kelimit aja",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "8bd61535ee63d19a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c46438e27c3eca8b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx5zPBMc9kM8ZiE6ZJ4AaABAg",
      "date": "2026-08-08",
      "text": "Mau bang..lagi tidak punya duit ini",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "4382c2849e469ef7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a2f20f76f1400f76",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyZ08ITLpRpydoiQXN4AaABAg",
      "date": "2026-08-08",
      "text": "Mau dana kaget untuk kebutuhan sehari2 kak",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "88456331c958ef12",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b91e40b36076ad5e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzwHKV82kn8aATtzJF4AaABAg",
      "date": "2026-08-08",
      "text": "Plis rekomendasi lg btuh dana 2 jutaan tp bi ceking rusak krn di pke orng bang...🙏",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "0edf64bd4536ddc4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d9be3599b4c11df",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyrXremZkyze3PvoOZ4AaABAg",
      "date": "2026-08-08",
      "text": "Rekomendasi pinjaman buat TKI dong",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "6e90610c60a12ee0",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-be0509d703524a4c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgygyfQenskWt3pShRZ4AaABAg",
      "date": "2026-08-08",
      "text": "Udah di ketik kok gk bisa",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 1,
      "id": "1cef64f8987301fa",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b0d6dc212bb6cea1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzXeCQdvWjTohnAHOt4AaABAg",
      "date": "2026-08-08",
      "text": "Untuk top up",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "3aa2485440bc01cc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-208f365c59ae452b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytGrvnb1G2fx9K4QN4AaABAg",
      "date": "2026-08-08",
      "text": "ya moga dapat lagi butuh nih",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "e5d92b6a85530724",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-945ccda17d9ad456",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgypVJ9irOAO0Si9bZ54AaABAg",
      "date": "2026-08-09",
      "text": "Assalamualaikum kak saya ingin mau karena saya untuk berobat udah subkreb",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "b8d7935810d28a2f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d4344974bda6c705",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzpSGxcJkq7uFmEcoV4AaABAg",
      "date": "2026-08-09",
      "text": "Bayar kosan bang...bos blm bagi gaji",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "0b6b11cecb043a81",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1104da4ef377cdb4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwoq-yToJd9tD7jX6l4AaABAg",
      "date": "2026-08-09",
      "text": "Bismillah butuh untuk kebutuhan bang",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "2abf6d139d623c7c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ba7dcce2de79fa07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCGh6NvqXtSUMbpuR4AaABAg",
      "date": "2026-08-09",
      "text": "Buat bayar kontrakan",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "08085671d1c9b9d3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7f2c0fb7dea19250",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxuQkQUawwfYbFZTeh4AaABAg",
      "date": "2026-08-09",
      "text": "Gimana cara pinjemn nya",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "b6df3cfd147034d0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5859687e7df9ff00",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhnbAhMXsPrafjrld4AaABAg",
      "date": "2026-08-09",
      "text": "Gimana caranya untuk ke dana ?",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "ac7671378252e8e6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-41bf8e1400a527d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy1rRO1HwFHLyXdLj94AaABAg",
      "date": "2026-08-09",
      "text": "Hadir bang buat bayar listrik bang",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "0b6ccfad9f225400",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-46b2cbcd674483db",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzPDhhguSb-rDyqKft4AaABAg",
      "date": "2026-08-09",
      "text": "Kalau yg ngomong wenda aku tdk percaya ..di podcast densu Dia ngomongnya penuh kebohongan ..hal ini disaksikan seluruh netizen ...padahal bukti digital tdk sesuai yg diomongkannya  di podcast tsb.",
      "url": "https://www.youtube.com/watch?v=FdYpZXzpxe4",
      "engagement": 0,
      "id": "1613dddf25735c8d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-13ee4de021f4eb68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyzz5Tk2QMT7Qf0m2R4AaABAg",
      "date": "2026-08-09",
      "text": "Semoga dapet 🎉",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "b13e92fcc9bab6b8",
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
      "externalId": "UgzXpSe4bXra4i3S0dp4AaABAg",
      "date": "2026-08-09",
      "text": "Wat bayar kontrakan",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "22473c80bf50b64e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-326eae845d49f876",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzx--IV06-s_RVxgnV4AaABAg",
      "date": "2026-08-09",
      "text": "anak2 ku pernah pinjam pinjol2 d teror terus macam2 ini itu ganti2 no.yg wa ,,,ku ngomong blok siapa pun itu klau ada telponnya ga usah angkat,,,kita fokus kerja keras satu2 kita bereskan gpp udah tenang ntar mama yg hadapin klau datang ke rumah gitu ,,,puji Tuhan dlm 1 thn dah smua dah mulai lancar dan dah mulai tenang d kerja an gaji anak2 ku dah mulai meningkat krn kita niat bngat Tuhan buka jalan ,,,,klau ada masalah dgn pinjol terlanjur anjuran ku gitu ,,,,,blok ir jngan angkat telpn kerja keras agar satu2 lunnasin dgn cara cicil disskon gitu ,,,,,bisa ko ntar f atur",
      "url": "https://www.youtube.com/watch?v=PbHBDyQUhvo",
      "engagement": 3,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 60.5
      },
      "id": "48f7d38d3a13bb8c",
      "eventId": "auto-2b7601e4806888d7",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxOr9oFncOZd14mfNJ4AaABAg",
      "date": "2026-08-09",
      "text": "apakah ini benar bosku",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "44c5a88496482da0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-864526264791a3cd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwcO37BMKxt82YIF2R4AaABAg",
      "date": "2026-08-09",
      "text": "cara nyambungin akun itu gimana kakak",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "21ea00e0c22e5873",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-993e3de693456a64",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwe8pUGIVvOFrELdZh4AaABAg",
      "date": "2026-08-09",
      "text": "pas dicoba gak ada fitur dana cicilnya min gimna tuh ??? 😢",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 1,
      "id": "d9b3e1ab22e9501b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f94f5a52ef861411",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxosIxqd2c23peGQTJ4AaABAg",
      "date": "2026-08-09",
      "text": "🫰🫰🫰🫰❤️❤️❤️🥰🥰🥰🥰🥰🥰",
      "url": "https://www.youtube.com/watch?v=j4_6ogU-wMk",
      "engagement": 0,
      "id": "168a3373c3da38e2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e3b0c44298fc1c14",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzBQ4eQ_0oB-5GYzNl4AaABAg",
      "date": "2026-08-10",
      "text": "Ada vt ruben pinjam ke  Igun 1 m aja lsg ditransfer",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "07601f072a9151b3",
      "eventId": "auto-2b1cd73647ff888f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgywcEEhF-qplfhP4z14AaABAg",
      "date": "2026-08-10",
      "text": "Amin...",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "bb328fa68636bfda",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-29a669940f66f7d5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4cfZ5Xagk-JxKD6V4AaABAg",
      "date": "2026-08-10",
      "text": "Assalamualaikum lagi butuh banget bang",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "41ce9ee4ce24b477",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dfca27eab742ce5b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzYfAsduKU9qq_UzUN4AaABAg",
      "date": "2026-08-10",
      "text": "Betul bgt cantik",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "48b751862f83fbd8",
      "eventId": "auto-3930b9b505091787",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgznCHgYc6E6rOCdrh94AaABAg",
      "date": "2026-08-10",
      "text": "Betul mami iis😅😅",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "d90c7c1c2bcf5ed4",
      "eventId": "auto-244fb07da1ce2cb5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxN4TsaM5zlXWg1kvF4AaABAg",
      "date": "2026-08-10",
      "text": "Bismillah buat gantiin lcd hp mamah🙏🙏",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "388ab3567c94c38c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-43a354086e790104",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzVTNw_2Iu9tAiYe054AaABAg",
      "date": "2026-08-10",
      "text": "Buat bayar kontrakan bang",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "f9efbcacee2b505d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-45669945188d1f62",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4DAJQfDJfK_tMOWx4AaABAg",
      "date": "2026-08-10",
      "text": "Ga mungkin  KK Ruben punya pinjol olahnya Sarkawi aj  mau bikin illah   saya ga percaya",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "b8249fcc44664eff",
      "eventId": "auto-083abb648490c04f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "u-GC5EPC5aw",
      "date": "2026-08-10",
      "text": "Iis Dahlia Tak Percaya Ruben Onsu Terlibat Hutang Pinjol",
      "url": "https://www.youtube.com/watch?v=u-GC5EPC5aw",
      "engagement": 56668,
      "id": "e012195cc4120719",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-294528cff5569431",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "2A0zixs1Mz0",
      "date": "2026-08-10",
      "text": "Iis Gak Percaya Ruben Pinjol #rubenonsu #iisdahlia #sarwendah",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 94128,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "41bc65710eb4870f",
      "eventId": "auto-1270905b0c81f624",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxIMNz-6PoFkG8yudN4AaABAg",
      "date": "2026-08-10",
      "text": "Kan ad buktinya ..pinjami dong kak iis",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "d07a2fcf700c5187",
      "eventId": "auto-5e34b36da68edecb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwJsy6IbTS4_OBuwQF4AaABAg",
      "date": "2026-08-10",
      "text": "Kok kenapa dana super cicil nya  gak \nkeluar ya bang",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "3aaab9055afec456",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f8166a0907f0368e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyECU2Xofrc9rUbtHl4AaABAg",
      "date": "2026-08-10",
      "text": "Mau bang \nBuat biaya anak istri",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "0ce976367f6db26f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-df69739606419ca4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzoLX3J1EOVhtirBXl4AaABAg",
      "date": "2026-08-10",
      "text": "Mumet setoran pinjol sama seperti bank keliling orang sunda bilang bank emok.\nPinjam 2 jt cicilan tiap minggu harus ada.ga boleh libur setoran kapok",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "8fb74d2d93e17bc4",
      "eventId": "auto-6cd08f3959cf5b61",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGZ_0BRJNENEsgCgx4AaABAg",
      "date": "2026-08-10",
      "text": "Paling yg pinjol itu sarwendah /Gio, cuma pandai memutar balikkan kata saja😂😂😂, kita orang awam aja faham lo siapa ruben",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "2e169eab62fcf587",
      "eventId": "auto-7cd6b758c613c37d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyvXEPrhx0YUnpWcUV4AaABAg",
      "date": "2026-08-10",
      "text": "Pinjol cuma berapa tuh Ruben pinjem 1 m sm Ivan Gunawan langsung di kasihasa iya pinjem pinjol",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "3e20080022747ca7",
      "eventId": "auto-3bd5382d54d27785",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzZdtv7lZVemSvfSKF4AaABAg",
      "date": "2026-08-10",
      "text": "Pinjolnya Ruben ke Raffi Ahmad,irfan hakim,ivan gunawan,",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 3,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "4b140cf82723b540",
      "eventId": "auto-f93dd7be9fcae726",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3KEYyD1TtUbxmc-54AaABAg",
      "date": "2026-08-10",
      "text": "Rakyat kecil ngutang pinjol galbay dikejar-kejar tapi koruptor yang ratusan triliun dilindungi",
      "url": "https://www.youtube.com/watch?v=j4_6ogU-wMk",
      "engagement": 0,
      "id": "4da01eeef6cdd3f5",
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-96b1f6b5373cb66f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzgL59f4irCqvfRiX54AaABAg",
      "date": "2026-08-10",
      "text": "Sama igun satu milyar ajh dapet ngpain minjem pinjol \nLogikanya d mana????",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 4,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "db2b62d13d82a058",
      "eventId": "auto-92f0865d0dbc69e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxsKQhHbxWWKL71IiF4AaABAg",
      "date": "2026-08-10",
      "text": "Sarwendah otak e konsket kopleeeeeer",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "8855147b3a0ea7ad",
      "eventId": "auto-f7cf5422153c3ac0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy8FI1Rs7BzadHI5el4AaABAg",
      "date": "2026-08-10",
      "text": "Sarwendh 😂 ngarang...",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "73d78a9f44b60553",
      "eventId": "auto-d4df3d55fcb159ed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLFSdulCeBOrGZzdx4AaABAg",
      "date": "2026-08-10",
      "text": "Sebenarnya walaupun iya pinjam itu juga bukan urusan kita, yg penting bisa nyaur, netizen ribet",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "0ac6a8016fde0c81",
      "eventId": "auto-b3c1ba76da2c52b0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugww9DMYjox7oK3Yj1V4AaABAg",
      "date": "2026-08-10",
      "text": "Semlarat \" nya Ruben masih diatas rata\" dari rakyat biasa, kalau sekelas uang jutaan aja masih adalah..\nTiap hari Lo jualan pagi siang MLM loh jualan, dan tiap hari masih di tv.",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 3,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "097c4ea6b0720d79",
      "eventId": "auto-aece91eb7f3c2661",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyyniix10t9YPPRQop4AaABAg",
      "date": "2026-08-10",
      "text": "Siapa temen2 Ruben.! Ada.. Ivan G, Irfa H, Ayu T, Wendy, Raffi A, Ramzi, dll. Klw jk Ruben ngutang pasti di pinjamin lah. Apalagi Raffi wlw gak  nge DPR pun tetap mampu kasih utangan ke Ruben. Jamin.",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 7,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 57.0
      },
      "id": "fe9d40f8295606f0",
      "eventId": "auto-9a1d38b06e329d02",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzPkPDcs9Zwzonw4_t4AaABAg",
      "date": "2026-08-10",
      "text": "Tp kok ada buktinya,KTP ruben",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 2,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "d1d19b1cf43fa369",
      "eventId": "auto-ed1a448e2d01a2b7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9N2H7VxI4MqUrwvp4AaABAg",
      "date": "2026-08-10",
      "text": "Utang kok bisa bulak balik ke tanah suci",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 57.0
      },
      "id": "b1d4ab8fca92b9d8",
      "eventId": "auto-3eb1f6e0cce8de69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx7gbrvgsOQquZVpiF4AaABAg",
      "date": "2026-08-10",
      "text": "ini teman sejati",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 3,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "5a1293822bb2fd9a",
      "eventId": "auto-1a34ed2b68de8e58",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwyfCtYfhq7WPp8FoV4AaABAg",
      "date": "2026-08-10",
      "text": "knp ga muncul juga bg aktifasi fitur dana super cicil nya",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "a3f16b07067d5308",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-72eb8edbf5959809",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJnjAXuDVCy5JeeSh4AaABAg",
      "date": "2026-08-10",
      "text": "ujung2 ny yg pinjol yooo Sarwenda dn giok 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 10,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "4e1712dfba9545b1",
      "eventId": "auto-077d13429593f016",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz6Xdn3ik1PnQeRqtF4AaABAg",
      "date": "2026-08-11",
      "text": "Assalamu'alaikum bang buat bayar kuliah",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "397a8b920a2fce73",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-46e263d4cfa94cf7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9-uXlQkjbmN4StZV4AaABAg",
      "date": "2026-08-11",
      "text": "Aturan hukum di Indonesia hrs BNR BNR tegas alias buang ke Nusakambangan gak ush di kluarin lgi untuk org org sprti itu",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 28,
      "id": "9839eb5e02ed83c7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-50b070947d57c67a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxLIL08VRKJTYRkJBF4AaABAg",
      "date": "2026-08-11",
      "text": "Bagus bngt bunda.. sehat terus bunda iis❤❤❤",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 2,
      "id": "8ee1f7e54a56866f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e8484b426181b105",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyKu9BKoS1oq34paGd4AaABAg",
      "date": "2026-08-11",
      "text": "Bang saya mau bang,untuk beli baju n tas sekolah untuk anak",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "46d65068930836a5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-82d17de98e645cb7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzzYDmUlwLPUO-3VqF4AaABAg",
      "date": "2026-08-11",
      "text": "Banyak yg artis\" juga anaknya dibiayain cuma 4 JT sebulan ada yg 2 JT sebulan ada juga yg gak dibiayain tuh ,mereka msh bersukur .gak ada huru hara tuh ,InSyaa Alloh Berkah hidupnya .",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 5,
      "id": "0371a6cc8a0f78d9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-98320e5129061a64",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxpN-NLhHesWxCdw7l4AaABAg",
      "date": "2026-08-11",
      "text": "Bissmillah  kak untuk  bayar lest anak sekolah",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "3da03eb632ae1ad5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-748001600cc723e2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxgAhrIwo423bDUwah4AaABAg",
      "date": "2026-08-11",
      "text": "Butuh uang buat beli hp bang 🙏",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "edb86067fce6a014",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e692d4222ede430d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxL2ACyB6J3DuyFiuN4AaABAg",
      "date": "2026-08-11",
      "text": "Cara menghubungkan akun dana ke E-Commerce",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "54ed7fcf1762a46e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4967a6d26eea3076",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXlLAilXo7WWCkqUJ4AaABAg",
      "date": "2026-08-11",
      "text": "Coba denger dong sw , malu dong , sdh mantan byk nuntut",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 11,
      "id": "197d58ab24fae9a6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c6eca163cf0b3190",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "qclCy9ypWa4",
      "date": "2026-08-11",
      "text": "DATA DICURI UNTUK PINJOL! 15 Orang Jadi Korban Investasi Bodong di Ciamis",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 30155,
      "id": "5c15a9d8199a5f77",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-622c7a4ea8c58d50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyg6_nFZwdm3pL4A454AaABAg",
      "date": "2026-08-11",
      "text": "Di hidupin ruben. Tapi sarkawi malah ngidupin mokondo ceo cabe merah 😂",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 8,
      "id": "2b0f0269992f7ea7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7d61258bb01da9d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnVPx0XfLuzfm4Vjl4AaABAg",
      "date": "2026-08-11",
      "text": "Ga percaya aq juga mam 😂",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 9,
      "id": "7c479896eb8b3161",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-54f0924ebaa2289c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzFffTkNiYh9yzLfm94AaABAg",
      "date": "2026-08-11",
      "text": "Gmna cara nya bang",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "31a3a4b491b02052",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-baa154193e5bf802",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJdk6Y1TO8mL2fZjl4AaABAg",
      "date": "2026-08-11",
      "text": "Hati-hati saat orang minta KTP tanpa diketahui maksudnya, karena modal KTP bisa buat ambil pinjol‼️",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 28,
      "id": "bf1efca3bd442d88",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-facf6738dec89104",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwt_8awV2LkV-1lgy94AaABAg",
      "date": "2026-08-11",
      "text": "Hebat Iis Dahlia",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 2,
      "id": "8b71cb1e8c53095f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-125e074769557a67",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx5oe-YRoPZX2od23N4AaABAg",
      "date": "2026-08-11",
      "text": "Katanya.. Calon nya CEO 1000 ruko.. Gemana masih mengharapkan ...",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 1,
      "id": "3b6660a66475b915",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-78601f5e964ae70f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyFP7f4XMua9rwvF1Z4AaABAg",
      "date": "2026-08-11",
      "text": "Lah Ruben pinjam 1m ke igun 3 HR udh dikembalikan main nya Ruben itu ratusan juta milyaran",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "abe34f6b7a86b1ca",
      "eventId": "auto-2f6308b24568bd70",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4fJ5kldPNCHM1WSd4AaABAg",
      "date": "2026-08-11",
      "text": "Mana bang dana kaget nya",
      "url": "https://www.youtube.com/watch?v=MGeNHdLXviw",
      "engagement": 0,
      "id": "88afa5f5c8016330",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-349e6050401149d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "iZDE6pJbcso",
      "date": "2026-08-11",
      "text": "Masa Ruben Onsu PINJOL Ga Percaya lah ?? #iisdahlia #rubenonsu #trendingshorts",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 54890,
      "id": "9e13a005710a7b3e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-00f1753042eef052",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy2tZ-VOcaOPNlVRVx4AaABAg",
      "date": "2026-08-11",
      "text": "Mat malam bunda cantik",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 2,
      "id": "62530f087f51c8cb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9f6455088ae21f6a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGbAWn20tOcamtpUV4AaABAg",
      "date": "2026-08-11",
      "text": "Netizen kg percaya KLO koh R penjol kexataanxa yg bilng koh R,penjol kg tau dirixa yg judol mkaxa 200jt,kg cukup judol healing SM ceo😅😅😅😅😅😅😅",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 1,
      "id": "ae0b2a7559747c91",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8ee824e64b062659",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "6oAD0FmNK_0",
      "date": "2026-08-11",
      "text": "PINJAM SALDO DANA TANPA DANA PAYLATER DANA CICIL - PINJAM UANG DI DANA - PINJOL MUDAH CAIR 2026",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 38810,
      "id": "2de50cc6b69fe8de",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-704678e17373bb2f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzGjaMOJren7M7-1vR4AaABAg",
      "date": "2026-08-11",
      "text": "Pinjol Ruben 🤭",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 3,
      "id": "644f8b985020ecd1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-22fc9b9d53d8af70",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZ4WwWYC13XZpfiQB4AaABAg",
      "date": "2026-08-11",
      "text": "SARWENDAH itu sengaja menahan anak2nya untuk tidak diketemuin sama Ruben.\nBiar uangnya tetap bisa dinikmati dia juga",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 11,
      "id": "046d9a96885d6ce1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ed417579116bccdd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxG53fjlykDNANkJzp4AaABAg",
      "date": "2026-08-11",
      "text": "Sama aku jg gak percaya, gak masuk akal...Ruben kaya raya rumahnya banyak, hartanya banyak, emang yg pihak ono hatinya jahat busuk",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 2,
      "id": "a3e8dd0a9773640f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-160b1105852e95f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwiIdk4INj5hjDlQHR4AaABAg",
      "date": "2026-08-11",
      "text": "Sarwenda itu anaknya dibikin kan tameng",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 2,
      "id": "b45e5e3a27093c07",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0b98a540532cff86",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzwxhOEimuJmbVKQ_p4AaABAg",
      "date": "2026-08-11",
      "text": "Sehat selalu org baik🎉",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "8a356fa4debefa48",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e068e2702a40230",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqQsNhH30nsbFpLVt4AaABAg",
      "date": "2026-08-11",
      "text": "TERBARU 2026 DANA CICIL TIDAK BISA DIGUNAKAN SETTING INI:\r\n👇👇👇\r\nhttps://youtu.be/2nhEwKyRnQM\r\n\r\nLink Daget ada di dalam video muncul di menit menit tertentu, pastikan tonton video nya sampai selesai.\r\n\r\n🟢SILAHKAN KOMENTAR SESUAI ISI VIDEO NANTI ADMIN CIDUK DAN KASIH SALDO DANA 1JUTA\r\n✅GABUNG GRUP TELEGRAM DANA KAGET & THR RAMADHAN : https://t.me/+hzfb8ouS3k4yMzFl\r\n\r\n✅SYARAT IKUTANYA GAMPANG BANGET\r\n1. WAJIB SUBSCRIBE CHANNEL INI\r\n2. WAJIB BERKOMENTAR SESUAI ISI VIDEO DI VIDEO KALI INI SESUAI ISI VIDEO NYA\r\n3. WAJIB LIKE & SHARE VIDEO INI\r\n4. WAJIB TONTON VIDEO INI MINIMAL 3 MENIT AGAR KOMENTAR TIDAK HILANG ATAU SPAM\r\n5. PASTIKAN BERKOMENTAR DENGAN 1 AKUN YOUTUBE DAN NAMA AKUN YOUTUBE HARUS DI UBAH DENGAN NAMA INSTAGRAM AGAR MUDAH DI HUBUNGI\r\nYANG MENANG ADALAH YANG MENGIKUTI SYARAT & KETENTUAN JIKA KETAHUAN CURANG AKAN KAMI DISKUALIFIKASI SELAMANYA.",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 32,
      "id": "0a8f8c817cb65c25",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-64221f738a9abbdb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgycuwGn7qD9pogA9oF4AaABAg",
      "date": "2026-08-11",
      "text": "buat tambah biaya sertifikasi bnag",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "6e761ce887cbd3bf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3c50e737ab6d5b3a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxKfeseocvLDEcUweF4AaABAg",
      "date": "2026-08-12",
      "text": "Apa salah nya coba siapa tau",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "7b9a3c8ef62410e9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a2a917eccbe5939b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwp2TArTfFf3xrYyal4AaABAg",
      "date": "2026-08-12",
      "text": "Asalamualaikum bang semoga saya dapat dana kaget buat biaya oprasi anak 🙏",
      "url": "https://www.youtube.com/watch?v=FHoQKiZqxSc",
      "engagement": 0,
      "id": "207464d937493ef8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-13f605027121d968",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzywLgWvmV810He7cR4AaABAg",
      "date": "2026-08-12",
      "text": "Belum ada bank lain, hanya bisa di allobank",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "3c113aa9f6c56128",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-876e0b976c8eba9b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFiG1GvBQwMQDCrjV4AaABAg",
      "date": "2026-08-12",
      "text": "Betul banget ustadz manusia yg kurang bersukur",
      "url": "https://www.youtube.com/watch?v=j4_6ogU-wMk",
      "engagement": 0,
      "id": "f4f05aa557123592",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-75babdca116c0c78",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzesYLg8dNI0g92kM94AaABAg",
      "date": "2026-08-12",
      "text": "Ini mah pinjem ke allobank bos. \nBayar cicilan ke allobank.",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "74763f017843c162",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8737c61273b5d673",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzG8v7CSKcaoeA3_fx4AaABAg",
      "date": "2026-08-12",
      "text": "Itu scan nya di apk apa,?",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "7853cd6a5f4fec29",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-078479060e95fb87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzaJFsINeTR3yvX9ON4AaABAg",
      "date": "2026-08-12",
      "text": "JGN PERNAH PINJAMKAN HP SMARPHONE, WALAUPUN 1 MENIT, HP ITU SKRG MULTIFUNGSI BISA SBGAI ATM, DAN DATA RAHASIA.",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 10,
      "id": "61dc6c8d6dc1cc55",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f70986adf8ca01eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx3X19IeMEX3sPAETV4AaABAg",
      "date": "2026-08-12",
      "text": "Kerja yg benar,. jangan merugikan orang lain.,tega bener 😮",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 8,
      "id": "79115e23d22fd960",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5ede74b6507a8504",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx33YSW3M5ruzeoZlV4AaABAg",
      "date": "2026-08-12",
      "text": "Link apk tambahan nya mana",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "53586e52ff1910dd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-61c3d32e160f2f4b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzVeVmM4yCp61MiKd94AaABAg",
      "date": "2026-08-12",
      "text": "Msh usia muda sdh licik & rampok uang org lain, semoga ditahanan bertobat bukannya makin jahat",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 15,
      "id": "57f66b77690c3a5d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1313f8f882c299fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8_A0VdOG6RWjWCJl4AaABAg",
      "date": "2026-08-12",
      "text": "Saya sedang mengikuti seminar di bandung cihamplas, di google form suruh nyatat no ktpnya, ini di selengarakan oleh seorang youtuber besar, semoga aman saja saya berdoa",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 3,
      "id": "f501c92a66ee0d46",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-51b5a1b3302e9bf2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxbkkDvHtMIW6-Wjih4AaABAg",
      "date": "2026-08-12",
      "text": "Shusi sama kak eneng ngeselin banget nyusahin Bae suami jadinya kena depkoleptor makan tuh pinjol kalian jangan pernah pinjolya",
      "url": "https://www.youtube.com/watch?v=BH4amIxOfiI",
      "engagement": 11,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "01e92101616324bb",
      "eventId": "auto-240a4052807bdee3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCA9aMEM4WGV3lJF14AaABAg",
      "date": "2026-08-12",
      "text": "Si ndah mah emang tukang fitnah n pembohong !!! Kayaknya si ndah sendiri yg hutang pinjol tuh !!!",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 2,
      "id": "356241b0f16e4471",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-63825f8a8d9f8611",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyZi74WyAUI3BZdjzV4AaABAg",
      "date": "2026-08-12",
      "text": "Sukabumi jg banyak yg ditipu",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 2,
      "id": "f953467a4af44849",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d39a20f98f087949",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCb6RZKJN3jEjIoKN4AaABAg",
      "date": "2026-08-12",
      "text": "Sy tdk pernah percaya pd S ..yg mengatakan pinjol nya Ruben ...krn ratu pembohong",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 1,
      "id": "e522868c6baf254d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8e50fe957b55357f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyTHE9_FoyT6EKSsYZ4AaABAg",
      "date": "2026-08-12",
      "text": "alah tark gk bisa linya sya hrs pake kode otp",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "d455de86d97ed478",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4b0df8c101c7dc31",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwL8KXNTfkmWjUqG8h4AaABAg",
      "date": "2026-08-12",
      "text": "aplikasi tambahan nya allo bank klo lihat di video ini,",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "845cac8e9bc7fdfa",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d11c3d8cb0144c25",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyZSY3sxcqN_IajS7V4AaABAg",
      "date": "2026-08-12",
      "text": "gak ada link tambahan, yg ada malah di suruh ngasih kode OTP wa",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "b7ec4209b9518c04",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-864c329eb351e5c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6TLP26wZ7TEVT95V4AaABAg",
      "date": "2026-08-12",
      "text": "gilak jahat banget ini orang,,",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 6,
      "id": "88cc0be90738be72",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b249d967ad93ca40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxkaf2cv6gUTrC8uuZ4AaABAg",
      "date": "2026-08-12",
      "text": "hukum mati aja, orang kejam kaya gtu. Suruh ganti rugi dan hukum mati.Merusak masa depan orang.",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 28,
      "id": "40d072151c0dbab2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4a6761e0bdbf26d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4EXJ9SdKQCqbUxx94AaABAg",
      "date": "2026-08-12",
      "text": "ko malah minta no opt wa ya?",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "4faea1e365a393c8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a44ab2e82d25336f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZi9qjGgffx6Fkyft4AaABAg",
      "date": "2026-08-13",
      "text": ", Usut wendah .....pencemaran nama baik RO",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "2872440efdc3fc8c",
      "eventId": "auto-f471288ed8327cc8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLpqbFPae3g6LkWIB4AaABAg",
      "date": "2026-08-13",
      "text": "Aneh nya kok pemerintahan dulu nya membiarkan agent2 pinjol di perbolehkan dan skrng judol2 banyak iklan nya di mana2 di medsos.... KOMDIGI gmn nih, tau ga? Lagi di proses ga?",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "409cc623df5afcaa",
      "eventId": "auto-4903c6122256eb75",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzZ7DhvJ6ecb-VE2ih4AaABAg",
      "date": "2026-08-13",
      "text": "Apa nama aplikasi tambahannya",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "8248f8b741f51f05",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d112dd252a67e12",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxFQK0E5Ot5VuhB8ed4AaABAg",
      "date": "2026-08-13",
      "text": "Apl tambahan nya apa min",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "8cca962aed943923",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e2bb4cecb0724ca",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx9-s8vwp8woUVyNmh4AaABAg",
      "date": "2026-08-13",
      "text": "Assalamualaikum terima kasih banyak bang infonya selama ini",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "ea947e27ede28566",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8623a94be5c9cb9f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxgx1kFOHCu6bbO5cp4AaABAg",
      "date": "2026-08-13",
      "text": "Ayo teruskan, emang pinjol² sialan ini wajib ditutup.\nsaya sering jd korban dari orang lain yg jadiin kita sebagai kontak daruratnya",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 61.9
      },
      "id": "d3b4db0d11e2cde3",
      "eventId": "auto-5794120c9cbc70bb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzma2qw-TEPpHctX-l4AaABAg",
      "date": "2026-08-13",
      "text": "Biadab skli wanita pelaku ini, bkin org menderita harta n mental, dia yg enak2 an. Hrs dhukum berat n dimiskinkan utk ganti yg dimaling dr korbannya",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 3,
      "id": "f8ab0deaeda8b88d",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cacd6213b4963c07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOZXfj-wTuD_cmevt4AaABAg",
      "date": "2026-08-13",
      "text": "Bubarkan saja segala jenis pinjol\nSangat meresahkan masyarakat",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 97,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "244a0f7ddf0e59c6",
      "eventId": "auto-7a176298103fa09a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw_oZUvesw5qPloUQN4AaABAg",
      "date": "2026-08-13",
      "text": "D-tracker itu harus ditegaskan itu harus di harus ditangkap itu harus ditangkap dan diadili",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "42d43329b24e44fc",
      "eventId": "auto-38311ec8dfc94a9e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "HjJrXo1Xxvg",
      "date": "2026-08-13",
      "text": "DC PINJOL DIKASIH PAHAM ARTIS FTV PADAHAL TAK PERNAH PINJAM⁉️ #beritaterkini #trending #fyp #shorts",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 137971,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "0af1ad2909bec683",
      "eventId": "auto-f3ef7358d97fa910",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwTsAddU_DuN4pyjFh4AaABAg",
      "date": "2026-08-13",
      "text": "Dasar pengacara sama kliennya sama2 stres dan tukang bohong cari2 kesalahan orang dan ga mau mengakui bukti2 yg ada , sdh tau kliennya si S tukang drama dan memutar balikkan fakta yg sesungguhnya masih aja di bela",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 92,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "9ebe47badbc397d5",
      "eventId": "auto-6cdc854e003ade88",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzEdnFPNqn2mBLl_1p4AaABAg",
      "date": "2026-08-13",
      "text": "Dia nuduh ruben pny pinjol kok skrg kok disuruh abaikan krn masa lalu, biar sdh dibyr akan terlht statusnya, jgn lari pak, hrs diusut biar jls",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 32,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "a3668c9054e29715",
      "eventId": "auto-ec7ddff697f555ba",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLM1BtgCnQ3y39HCN4AaABAg",
      "date": "2026-08-13",
      "text": "Fitnah kok maksa , gak ada bukti Ruben hutang pinjol kok maksa !! Orang hutang pinjol ato bank sekalipun sdh lunas dibayar., datanya itu tetap ada. Jangankan yg baru lunas , yg sdh ber tahun2 lalu lunas aja datanya tetap ada kok !!! Enak aja sdh lalu !!! Kalo fitnah orang itu yg cerdas dikit napa !!! Gak pengacara gak klien sama2 tukang fitnah !!!",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 64.0
      },
      "id": "02ca67507a13af28",
      "eventId": "auto-a6463cbb022a65c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxgMf7Exb1vd3PtYe94AaABAg",
      "date": "2026-08-13",
      "text": "Gak bisa gitu juga pak\nNama Ruben harus di bersihkan\nKarena yg bikin huru hara itu Wendah...",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "00432492f4b70528",
      "eventId": "auto-bffbf8ec2f3e11ab",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwRyf1bZ33RbXS-MCV4AaABAg",
      "date": "2026-08-13",
      "text": "Gak nyangka ternyata enda suka bohong dan tega fitnah jg ...",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "1e579f8b64c462c0",
      "eventId": "auto-28b5e20dd2bb9964",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxIEmLT2G0Mgwui_VR4AaABAg",
      "date": "2026-08-13",
      "text": "Gatau malu kok bisa2nya minta 200 jt perbulan ke org yg kena pinjol😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 53,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "268de05220447db5",
      "eventId": "auto-0d8a19248294f88d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyHlGuiiYXcb_8ic5Z4AaABAg",
      "date": "2026-08-13",
      "text": "Haduhhh dah kehabisan bahan buat jatuhin Ruben😅😅😅😅",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "c9dcef8c63c85fc4",
      "eventId": "auto-c5a4bd49dd9040a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxsWdQJqmbWb0Axr2h4AaABAg",
      "date": "2026-08-13",
      "text": "Hukum seberat beratnya",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 4,
      "id": "419004a3a3de87dc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d9443883936c2217",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz3k-6dUp3tyZc9BE94AaABAg",
      "date": "2026-08-13",
      "text": "Ini lowyer nya si Sarkonah ni klo ngomong waton njeplak wae cangkeme.. senenge ngeyel mung arep nggolek i salahe RO tp Alhamdulillah si RO selalu dlm perlindungan Allah..",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 5,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "f391194467e08614",
      "eventId": "auto-b01ebfc0d770cdf8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwg5t6W4m8frwy-JVV4AaABAg",
      "date": "2026-08-13",
      "text": "Intinya c Sarkawi SM pengacaranya SM\" gila HRs k psikolog mereka maen nuduh ruben segala kocakkkk🤣😂😅😆😁🤭",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "8992c613827125ba",
      "eventId": "auto-040ebbf9e354fcfa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDhjIcmuROv7AXYGh4AaABAg",
      "date": "2026-08-13",
      "text": "Itu pinjol abal²...penipu...laporkan aja....",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "0e50ac7e6f71a7a5",
      "eventId": "auto-0921f94459da007c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyh7WMZIfC0AcRtxEh4AaABAg",
      "date": "2026-08-13",
      "text": "Jahat sekali orang kayak gini",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 1,
      "id": "f818406ff8820386",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-83c93d9348724536",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzPFM8VG6g2YIbUOIZ4AaABAg",
      "date": "2026-08-13",
      "text": "Jangan di bahas sdh masa lalu... Hello netijen gk akan bergaduh kalau rumor itu gk keluar dr klaten anda bapak pengacara... Si Sarkawi... Heran deh mulutnya selalu melontarkan pancingan yg bikin keruhbsuasana.... Katanya menjaga mental anak.... Mental yg mana.... Menjaga mental kok menjelek\" Kan Bpk kandungnya, berkata kasar dg Bpk kandungnya... Masa org berpendidikan tinggi kek gitu",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "ff839d2446a620ac",
      "eventId": "auto-224b23070d5d5fdc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxbPRiXg5Bu9Oaxeah4AaABAg",
      "date": "2026-08-13",
      "text": "Kalau seumpama pinjol dah di bayar mungkin \"data \" ny masih ada g mungkin g ada lucu emang pengacara si S ngebodoh\"in netizen",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 46,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "cff3bc62599110d7",
      "eventId": "auto-1be80cb05b8d7e60",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyYpFf7Aq0kHv63pNp4AaABAg",
      "date": "2026-08-13",
      "text": "Kemarin koar\" punya bukti lah nggedabus 😅😅😅",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 51,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "6b94b3b6d1a97f18",
      "eventId": "auto-ab0d700220eaaadf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzbw7y2dYe3x_J4oad4AaABAg",
      "date": "2026-08-13",
      "text": "Lanjutt Proseess",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "b497a36f78c903c9",
      "eventId": "auto-8e746fa2e98384fa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzoXjGk8QhIAWTfTgF4AaABAg",
      "date": "2026-08-13",
      "text": "Laporin aja mba...  biar di tutup pinjol nya. Karna sudah mencemarkan nama baik mba",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "00d09e375df620a4",
      "eventId": "auto-92edeb6528a54dc5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNOwZu4Eg3YsCTxlZ4AaABAg",
      "date": "2026-08-13",
      "text": "Laporkan... Cari, tangkap proses hukum, penjarakan DC yang mengancam, intimidasi... 👍⚖",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 20,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 83.6
      },
      "id": "43f14c44e74fea46",
      "eventId": "auto-051d60315d7adb56",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJXfotVjZWuU3IzMp4AaABAg",
      "date": "2026-08-13",
      "text": "Mantap betul itu si tukang teror harus di tindak",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 67.5
      },
      "id": "612c905393b3c2b3",
      "eventId": "auto-4953aa943e13016c",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6Y1kJoGwo5x5xqKJ4AaABAg",
      "date": "2026-08-13",
      "text": "Mau cari2 kesalahan Ruben gagal terus jd ngatur ini pengacara.",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "df5fc6f298419a6d",
      "eventId": "auto-0757cf45fb48677e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw8EZW_IzZADVywKhV4AaABAg",
      "date": "2026-08-13",
      "text": "Ngeles teruuuuus 😂",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "a2344606c95c1673",
      "eventId": "auto-932f48f294a1ce3c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz38mcm_QuiCe9-07l4AaABAg",
      "date": "2026-08-13",
      "text": "Pak pengacara, kalau bicara itu pakai data valid Jangan asal berucap.. Semua orang bisa bicara  sembarangan dong kalau begitu, hanya menduga2 utk menggiring opini kebencian.",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 66,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "ad5c920198048fea",
      "eventId": "auto-bf015e3cf45595de",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyZYayysqaqtZVIt9Z4AaABAg",
      "date": "2026-08-13",
      "text": "Pemerintah udah begitu banyak keluhan masalah pinjol dari masyarakat tapi pada diem ngga pernah ditanggepi",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 27,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "a50aa5b406736862",
      "eventId": "auto-f43931e72697e3a5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyAVSg2PVx-WtZT28J4AaABAg",
      "date": "2026-08-13",
      "text": "Pengacara koplak.... \nAyoo dong jujur jawabnya, jng ikut arus maunya SW. \nTerbukti gelagapan waktu ditanya, siapa yg pinjol... Nah, itu sdh tanda2 blunder gak jelas \n\nBelajar yg baik, ya, pak... \nJng asal jeplak.",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 23,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "12b2cc88e102928f",
      "eventId": "auto-885a177b87a6c1ac",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwvBpHS8hCPxa0TBx54AaABAg",
      "date": "2026-08-13",
      "text": "Penipuan awas , mereka memeras dan menteror korban .",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 35,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 95.0
      },
      "id": "53ea9cf220a25c17",
      "eventId": "auto-f4011867114b9fe9",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxiSfswZOPMjJGTUxB4AaABAg",
      "date": "2026-08-13",
      "text": "Penipuan dan itu harus dibasmi penipuan Mbak tenang Mbak penipuan itu harus",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 67.5
      },
      "id": "e79646953b28b294",
      "eventId": "auto-1890b7baa5b52e57",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDdfe9iLMiU5I2ScJ4AaABAg",
      "date": "2026-08-13",
      "text": "Penjarain biar kapok",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "1e895cc422222417",
      "eventId": "auto-77954e8cbddb82c5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJ3qqv56LugVOy4st4AaABAg",
      "date": "2026-08-13",
      "text": "Ruben Onsu pinjol 🗿\n\nngakak😂🤣😭🤣😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=1UUzViOnRVo",
      "engagement": 0,
      "id": "a7840be3423c822f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-76841310ee26e34e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy7iALcyc8DMSD7pu94AaABAg",
      "date": "2026-08-13",
      "text": "S itu tukang bohong ..banyak netizen tdk percaya",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "b48b8326bd078c06",
      "eventId": "auto-fcf7ca8f24b6a469",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwkilCxevCJtvsQuvt4AaABAg",
      "date": "2026-08-13",
      "text": "Sarwendah pengen menjatuhkan Ruben , dan sampe Ruben bangkrut, takut y perempuan tu ga ada lembut nya",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 13,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "7a427fe94606a93d",
      "eventId": "auto-438d84ec37c21a48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpW3Tt5gCoEuCEDrp4AaABAg",
      "date": "2026-08-13",
      "text": "Saya pernah ditipu 15juta pelaku asal taraju tasikmalaya namanya penipu itu akik hidayat",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 6,
      "id": "72794c810d063ff2",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a21c0254be5982a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwgkMAAR6bfPdIhyqB4AaABAg",
      "date": "2026-08-13",
      "text": "Si lampu taman itu bikin malu gelar pengacara aja ,sekalinya ngomong blunder aja",
      "url": "https://www.youtube.com/watch?v=PrrGB1ab2ZA",
      "engagement": 5,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 44.4
      },
      "id": "4a337eb7bfe05a79",
      "eventId": "auto-22cd911b3d31176a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNrV5BleBHHD-Pp4F4AaABAg",
      "date": "2026-08-13",
      "text": "Sy dukung kk untuk laporkan pinjol...penjarakan",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 46,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "4cc0bc7c68e26f71",
      "eventId": "auto-b6cdc613ed6d9932",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz0Zi9Kc0xbRFsZN_N4AaABAg",
      "date": "2026-08-13",
      "text": "Takut diusut ya yang utang pinjol siapa😂",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 57.0
      },
      "id": "ffec1016804625d3",
      "eventId": "auto-cede486336017669",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzxIeUSTL-DljmjmQd4AaABAg",
      "date": "2026-08-13",
      "text": "Tiap hari si rupiah cepat telepon cari mangsa",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "fcb5de89da2a443d",
      "eventId": "auto-472ab03942341ae6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzqmMJt8xMOPm57H5R4AaABAg",
      "date": "2026-08-13",
      "text": "Usut tuntas biar riba tidak merajalela",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "8f4a3c1998ae2788",
      "eventId": "auto-961e491c03ae2b37",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqaRL9azEnzyitfZN4AaABAg",
      "date": "2026-08-13",
      "text": "Yg munculin pinjol kubu sana, yg mo cuci2 juga kubu sana...😂😂",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "276db7f6bb7f24c4",
      "eventId": "auto-3e78cd88b8cabcc3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyi1Pp8UcWVS6CdqlB4AaABAg",
      "date": "2026-08-13",
      "text": "bubarkan pinjol dn lising",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "d0f80f567998d8b6",
      "eventId": "auto-8135549ca0c84bc6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwDNc-_gd0g7zaytCF4AaABAg",
      "date": "2026-08-13",
      "text": "moga dapat buat benerin rumah atau ngasih ke nenek",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "c4379a9d0abc8595",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d50f45daa871d2aa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyI-xLSumrsntsnQjV4AaABAg",
      "date": "2026-08-13",
      "text": "ngomongnya blm sebulan, kok masa lalu, walau masa lalu ada datanya, apalg Ruben terkenal g mungkin d hapus sama pihak pinjol....amnesia Luh...g usah mediasi, orang begitu sih g usah d kenal lg...tetap aja minta  hak asuh anak Ruben, fokus aja, pusing ngomong dgn orang amnesia",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "e594d57d06fe5b3a",
      "eventId": "auto-f8b048801d87cc56",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx56BP6v5k7AMbMM8l4AaABAg",
      "date": "2026-08-13",
      "text": "pencarian ka klo yang ga punya koneksi pasti cuman bisa nangis dn parah",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "971ceecf302d7298",
      "eventId": "auto-b86e60598761ed64",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxuD8gZVr1BtLM_aA94AaABAg",
      "date": "2026-08-13",
      "text": "sama saya juga....yg punya pinjol gua si teror pling rajin neror dari adakami",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 67.5
      },
      "id": "c818b65c8b3a30e5",
      "eventId": "auto-bbadefa61981d56d",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgztPegNNMj_KJKUx-d4AaABAg",
      "date": "2026-08-14",
      "text": "Aplikasi tambahan apa namanya bang",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "c5c034188309b732",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eaec9e706902c36d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyb1xwLmGinLpgxUf54AaABAg",
      "date": "2026-08-14",
      "text": "Boikot .\nBohong",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 28,
      "id": "1a1eb299ae0dac07",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d4511107a8cc0804",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQWIGFdyvb-0BOWxN4AaABAg",
      "date": "2026-08-14",
      "text": "Bukti tagihannya doooong, sama atas nama siapa, di cctv tempat gua juga banyak bang bukti kayak gitu 🤣 banyak DC bergerombol, siang di mushola, habis itu keliling² sampe sore 🤣",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 16,
      "id": "ae1c0b2b8c35a14d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8455468ef2ac322d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIn4N_tE7xfStio2x4AaABAg",
      "date": "2026-08-14",
      "text": "Buktinya kasih ke Ruben dong",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 23,
      "id": "4dcf7261deecd5ec",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c7dbfbee5483a20a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyP0J4vTAnm1lLPL7t4AaABAg",
      "date": "2026-08-14",
      "text": "Cara aktifkan akun e-commerce Gimana",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "781789425ca76927",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8cd182ea9090f80e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwSYF1pv6IvKTEljP54AaABAg",
      "date": "2026-08-14",
      "text": "Framing, bohong, fitnah. Itulah kerjaan sarkibul dsn komplotannya.",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 42,
      "id": "5a807c82cf061f6a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-db75a3e2d8a02adb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzyMFSXNRbh2TqfuX54AaABAg",
      "date": "2026-08-14",
      "text": "Iya. Kata2 si s Di dgr boleh percaya jgn😂",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 7,
      "id": "e7087deb857552d2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-94856f34d35bfb66",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyMYUhF_qrip1_kyyF4AaABAg",
      "date": "2026-08-14",
      "text": "Jahat banget hukum mati woi",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 1,
      "id": "367e55a03b6db2d4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6c504176ea8567d6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9Vnd5F3bQ8pp0MdF4AaABAg",
      "date": "2026-08-14",
      "text": "Nama nya track record pinjaman itu ada walaupun sudah lunas BAMBANG😂",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 68,
      "id": "1a206296fa8aaca1",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7c2f159d345160e2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxp2QPbUNwe3atApcl4AaABAg",
      "date": "2026-08-14",
      "text": "Otaknya selalu penuh kebohonhsn  seorang ibu kok penuh kdbohongjangan sampai snaknya sifat kayak ibunya",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 3,
      "id": "107cddcc73287cdc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49486a0c43905d6d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyW4-kqgojr2p2R2Kx4AaABAg",
      "date": "2026-08-14",
      "text": "Seharusnya pinjol juga harus d Cek dulu benar apa tidak .",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 0,
      "id": "c003eebeada9214f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4da5e451a69625b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyvu0ggRxivPlU6-sx4AaABAg",
      "date": "2026-08-14",
      "text": "Semoga bisa tutor nyah",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "50693e73c5536e69",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1d6957c66425216",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzRnUkyPvuKYv45y214AaABAg",
      "date": "2026-08-14",
      "text": "Semoga sehat lancar selalu mass",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "5660097216bbc2af",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-668699efdba62301",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCRJELuFvkGyMQrMl4AaABAg",
      "date": "2026-08-14",
      "text": "Sikat teh jangan takut",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "9aed9c628706e5d2",
      "eventId": "auto-89718ecd924f830c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDgU_gwaOJO25Xefp4AaABAg",
      "date": "2026-08-14",
      "text": "Sudah di bilangin si saritem ini tukang ngibul manipulatif...makanya jgn di telah mentah2 tuh,...kecuali para pemujanya demi duit kali...hbs artis bkn , sdh di pecat tuh dr cherybel...pemain film TDK jg....trus mukanya apa cobaa,.. sarkibul",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 28,
      "id": "c996e4d5b77e1e4a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e80049bd326d9a22",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnUCIyj_19N8Bswpl4AaABAg",
      "date": "2026-08-14",
      "text": "yg salah siapa ni .. KTP orang buat pinjol biasanya foto orang yg di KTP TDK sembarang pinjem wajah haruh sesuai yg di KTP",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 2,
      "id": "7e47ec508de8347c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-52bf716c1cddafb4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "HX-ZcqfG5M4",
      "date": "2026-08-14",
      "text": "🔥 Sarwendah Dirujak Netizen! #sarwendah #rubenonsu #viral #trending",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 37791,
      "id": "45dd93419e7402db",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e2f78a9501e7c411",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzTazcC0qa3W2MgRkl4AaABAg",
      "date": "2026-08-14",
      "text": "😅😂 prakiraan cuaca",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 5,
      "id": "1283184f0f419507",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d60fe1f61141da1c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwL-AN0PXRxkaGFPi94AaABAg",
      "date": "2026-08-15",
      "text": "Bg gimn cobain gk bisa",
      "url": "https://www.youtube.com/watch?v=7q8ioXG8hRM",
      "engagement": 0,
      "id": "1a702c2d9b05f772",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-edd71a95125303c0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwceQ3TrDARLh8hJLJ4AaABAg",
      "date": "2026-08-15",
      "text": "Bloon alias O'on dan O'ong lu pade....Memang siapa2 yg membela org yg pesugihan ikutan gitu modelnya ....UNBELIEVABLE 😂😂😂",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 1,
      "id": "386b9bafae12910f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc8dada6207a8539",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyzsUHGum0SfF4bagh4AaABAg",
      "date": "2026-08-15",
      "text": "Boikot tukang bohong",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 14,
      "id": "e738fc346aae154b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0db922799cfed2a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "ELY43dhQDFw",
      "date": "2026-08-15",
      "text": "ENENG DAN SUSI PINJOL DEMI GENGSI 😂 @RbrainProject",
      "url": "https://www.youtube.com/watch?v=ELY43dhQDFw",
      "engagement": 181849,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "59917900c8dee996",
      "eventId": "auto-155d4474edf1e02d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_cNUn4nmepRIYGZp4AaABAg",
      "date": "2026-08-15",
      "text": "Makasih tutorialnya",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "68519e7c793feb0a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-31e878068c18d9d2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9cF9C-os30Uqfu_Z4AaABAg",
      "date": "2026-08-15",
      "text": "Satu bulan lalu, di terminal Leuwipanjang, pas sy mau ke naik bus ke Bogor, ada seseorang mau  pinjam HP pura2 dia gak bawa, katanya mau WA ke temannya. Jawaban saya Hp ku lagi tak ada kuota. Akhirnya dia malu sendiri akhirnya pergi.",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 3,
      "id": "0ee57d3f95e12060",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a43dac143b04091d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjFHVgQjI_SkNH0fl4AaABAg",
      "date": "2026-08-15",
      "text": "Segera boikot. Kami ngga percaya omongan sarwono sebab ngga masuk di akal dan logika kami ! Kami tidak mengakui sarwono sebagai artis/ public figure, apa sih prestasi nya ?  Attitude, sikap, kelakuan, sifat, karakter nya sarowono aja tidak patut di contoh. Segera boikot !",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 16,
      "id": "a6f9fb4b9e430393",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-de1526116d1d109a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZkCcVKN9a57Yq8Cl4AaABAg",
      "date": "2026-08-15",
      "text": "😭😭😭😭😭😭😭😭",
      "url": "https://www.youtube.com/watch?v=ELY43dhQDFw",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "2146ff3395ef0004",
      "eventId": "auto-e3b0c44298fc1c14",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpTZOYt3XhsOJOswJ4AaABAg",
      "date": "2026-08-16",
      "text": "Aik ngapa pak \npengacara pusing ngatain ngak apa aoa jika sudah dijelasin. masakan bapak ngak tau jika jika pinjam dengan pinjol pasti datanya disimpan  dan boleh di trace kemudiannya.Aduh bapak tolong \nnasihatin klien bapak jangan fitnah terus terusan.",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 2,
      "id": "f1666264a76c5f33",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-267d0a8085f68fa4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "KbspE73J2h8",
      "date": "2026-08-16",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 42037,
      "id": "b60bdf592ffa53bf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c56326dcc516effe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyT-LT30-t1doziApd4AaABAg",
      "date": "2026-08-16",
      "text": "Enak banget tuh si Ogah abis fitnah orang, trus nggak terbukti, trus dengan santainya dia bilang 'sudahlah....itu cuma masa lalu...\" .....Lo pikir orang nggak punya unyeng2 bisa lupain gitu aja????",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 4,
      "id": "1b58c8a70e91fa94",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6a2a752dd2b317f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6GAx4pU6cKG8wc0p4AaABAg",
      "date": "2026-08-16",
      "text": "Gw baru bangun lho bang.  Nyawa belum ngumpul dah dibikin ngakak",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 3,
      "id": "05af6dfa2d127045",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6b9760ca65c2e84f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzGK1riNJXhkoolJ8d4AaABAg",
      "date": "2026-08-16",
      "text": "Kalo pinjam kek dana balikin duit nya berapa bng",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "ce958c913918c2ec",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e4084e85e2e83137",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyc1jqGMEgAlPuhzJN4AaABAg",
      "date": "2026-08-16",
      "text": "Kenapa banyak penipu yg berani ya karna hukumannya ringan.",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 1,
      "id": "2694a3e87bfc9c58",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cadb0e6ea989733f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx9KX4GLu3qj8e-djZ4AaABAg",
      "date": "2026-08-16",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, mau buat kebutuhan darurat apa daget ini 👇 https://link.dana.id/danakaget?c=sjubm6s7v&r=c7Q38x&orderId=20260819101214353915010300166276294021652",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 140,
      "id": "a7269f0f445ece3d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1bfc22ef5dd0b1ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9NhiDuvyv3tzIfyd4AaABAg",
      "date": "2026-08-16",
      "text": "Pembohong....pembohong",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 2,
      "id": "55dd4c32c7ac46c1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9f50893a51687114",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwhKKFoj_A7IzNHMfd4AaABAg",
      "date": "2026-08-16",
      "text": "Pencemaran nama baik",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 2,
      "id": "210d0a6187d922ce",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d073484416e3da43",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxYwBa4eETzVkRsIvZ4AaABAg",
      "date": "2026-08-16",
      "text": "Semoga rezeki nya lancar bng",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "1b251d478f2bea25",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0fececaab822ed71",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxovlRlDrdOQdQ3tyB4AaABAg",
      "date": "2026-08-16",
      "text": "Walau udah dibayar, pasti ada catatan nya.kalau gak ada catatan nya berarti fitnah.",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 4,
      "id": "540a522ef90b6568",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-698491a2beb00ec4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyN4xK4nAgfQGN8MDV4AaABAg",
      "date": "2026-08-16",
      "text": "mudah2an anak2 nya liat",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 2,
      "id": "e4d8bf643189c813",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7fd12d05ab6c2a01",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxSdiEO_qP92FZCs554AaABAg",
      "date": "2026-08-16",
      "text": "wkwkwn sarwe lagi kenceng, dia yg kenceng kita yg oleng wkwk",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 3,
      "id": "ff5e91b2cd4d35d5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2246a5b87e718d6d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhhM0n2I2kekHSDyh4AaABAg",
      "date": "2026-08-17",
      "text": "Kok aku ga bisa di buka",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "a81ffce3c9108975",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-779dbb8860692834",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwuXYxNBuXn3tmxmxx4AaABAg",
      "date": "2026-08-17",
      "text": "Lch ngg bisa keluar bang",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "5daebacaabb91d41",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-abf333f5591a5633",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxTxdTafw9zCCoeiUN4AaABAg",
      "date": "2026-08-17",
      "text": "Pihak kepolisian harus bisa memulihkan nama korban atau diberikan surat kuasa lapor penipuan seandainya ada penagih hutang /DC bisa ditunjukkan bukti lapor dr kepolisian.",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 0,
      "id": "ad1e51057241bc48",
      "sentiment": {
        "risk": 93.4,
        "label": "negative",
        "negativeWeight": 6.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35a12187d80d1ba0",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQDa4kAsyWUCIQest4AaABAg",
      "date": "2026-08-17",
      "text": "itu dana tabungan bng",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "afd1e4fc1b72c99b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8c094d2ad3dbdfc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyl3sJ3IsKyqHNZqg14AaABAg",
      "date": "2026-08-17",
      "text": "kga ada euy",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "2f199977005be65d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8cc69d31176707b9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzPUjyGC90KbYMib2B4AaABAg",
      "date": "2026-08-17",
      "text": "waaah pasti ada Big Bos nya ini.. tindakan komplotan ini , bukan 1 orang , pak kapolri segera tangkap big bos orang ini",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 1,
      "id": "01097d2d9b6787e1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a786abb610a92a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyFR5o96Wqk9J76jl4AaABAg",
      "date": "2026-08-18",
      "text": "Bayar nya gimana",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "9757841bbcd86cdf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-17aee60e929fb9cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCdP3Lyyqj3JxCuy54AaABAg",
      "date": "2026-08-18",
      "text": "Ko saya ga bisa bang",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "39e6aad1530be9c3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f9791414b60e6bdf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwYUfkkIcXa9SBz79V4AaABAg",
      "date": "2026-08-18",
      "text": "Oke Abang bermanfaat tutorialnya🎉",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "a41b29ce251505fb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a8f28ffba2fb55e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwo7pcHVuX5hbGoWXh4AaABAg",
      "date": "2026-08-18",
      "text": "Tapi saya tidak muncul fitur dana pinjaman ka gimna ya",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "8ad9c581d7da9025",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5f396bc4110ebbed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFl4tZuNz08EFUZw94AaABAg",
      "date": "2026-08-19",
      "text": "Engga bs malah engga munvul diketik pinjeman dana tanpa ktp",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "a985ea8c68679e23",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67cf26b3fde65ba0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQvEz80HPSHysykpF4AaABAg",
      "date": "2026-08-19",
      "text": "Gada tulisan pitur nya gimana bang",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "390097d82ca990b7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac6c7ec3ccecbae9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw6kS_tdLpYwuf6Gud4AaABAg",
      "date": "2026-08-19",
      "text": "Gi mana cara isi verifikasinya bang",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "b57953df2d78acd3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d3acb5c963c79310",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwn-MWiE-DDJ9o2Y_p4AaABAg",
      "date": "2026-08-19",
      "text": "Ko pas di ketik fitur pinjaman dana tanpa ktp ga keluar kaya yg di video dh bang",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "178375179725b20a",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fd2505ba219cf994",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJbdS5cOU1I2BLLPp4AaABAg",
      "date": "2026-08-19",
      "text": "Ko saya udh ikutin tutorial nya gak nongol tanpa ktp",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "0978e0abde2794f9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8733a8cb4d56191a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgysOGAT6b8CGhJoG9B4AaABAg",
      "date": "2026-08-19",
      "text": "Saya tidak ada fitur pinjaman tanpa KTP gimana",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "cd55cf5f1072dbc8",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-41f94b3c22bc85d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyiKNWiTQO2RK37dC94AaABAg",
      "date": "2026-08-19",
      "text": "di saya kok GK bisa dan GK pinjaman dana tanpa KTP bang",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "ed94baaabe7b1d7b",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6790306223878c4f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzhyGY3_xw8LTpiSt54AaABAg",
      "date": "2026-08-19",
      "text": "pas mau di alihkan fitur pinjaman tanpa KTP malah ngk bisa masuk",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 1,
      "id": "8e2edb4ceca95531",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-99bd969f7a49a48a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx_ITWChn8vT4a8eb14AaABAg",
      "date": "2026-08-20",
      "text": "Ga bisa masuk pas nulis pinjaman dana tampa KTP itu gmna",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "7b028e5bb8cdfc63",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cb6a7e97711f5543",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxkJ8AKh0DQVv-kRhN4AaABAg",
      "date": "2026-08-20",
      "text": "Kak bagaimana cara hubungkan fortuna mediatama dan saldo digital?",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "id": "3a42ae6d903eb230",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2166c19951da029a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    }
  ],
  "reviewRequired": true,
  "collectionDiagnostics": {
    "mode": "live_multi_source_v2",
    "successfulChannels": [
      "google_news",
      "google_trends",
      "youtube"
    ],
    "failedOrUnavailableChannels": {
      "media_rss": "Collector ran successfully but found no relevant records.",
      "gdelt": "HTTP Error 429: Too Many Requests",
      "kaskus": "Collector ran successfully but found no relevant records.",
      "reddit": "Reddit searches failed: indonesia: HTTP Error 403: Blocked | finansial: HTTP Error 403: Blocked",
      "x": "X_BEARER_TOKEN is not configured"
    },
    "socialClassifier": {
      "method": "deepseek_credit_social_v1",
      "status": "ok",
      "inputCount": 443,
      "classifiedCount": 128,
      "irrelevantDropped": 112,
      "model": "deepseek-chat",
      "fallbackCount": 203,
      "labelCounts": {
        "NEG": 89,
        "MIX": 4,
        "POS": 35
      }
    }
  },
  "sourceMode": "live:multi-source-v2.1"
};
