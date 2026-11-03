const CREDIT_SENTIMENT = {
  "schemaVersion": 2,
  "status": "pilot-pending-human-review",
  "asOf": "2026-11-03",
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
      "detail": "Collected 276 relevant records/signals."
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
      "status": "failed",
      "detail": "Kaskus hot_threads unavailable after retries: HTTP Error 504: Gateway Time-out"
    },
    "youtube": {
      "family": "social",
      "label": "YouTube videos + comments",
      "access": "api_key",
      "status": "ok",
      "detail": "Collected 514 relevant records/signals."
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
    "level": "amber",
    "active": [
      {
        "id": "auto-0d180ebe3f3221d4",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "d3aab98fab82b4ba",
          "d2607703719140a3",
          "f73ec4569d558514"
        ],
        "socialItemIds": [],
        "independentSourceCount": 3,
        "domains": [
          "cirebontimes.com",
          "demokratis.co.id",
          "suaralandak.co.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Cirebon Times",
        "headlineZh": null,
        "summaryZh": null,
        "reviewQuestionZh": null,
        "reviewedSourceCount": null,
        "requiresReview": true
      },
      {
        "id": "auto-1f7ba787322c513a",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "6b1935e6c2c2efb9",
          "9f5924aba34bb1bb"
        ],
        "socialItemIds": [],
        "independentSourceCount": 2,
        "domains": [
          "suaragarut.id",
          "suaraindependentnews.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Suara Independent News",
        "headlineZh": null,
        "summaryZh": null,
        "reviewQuestionZh": null,
        "reviewedSourceCount": null,
        "requiresReview": true
      }
    ],
    "triggerReasons": [],
    "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
    "reviewCandidates": [
      {
        "id": "auto-0d180ebe3f3221d4",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "d3aab98fab82b4ba",
          "d2607703719140a3",
          "f73ec4569d558514"
        ],
        "socialItemIds": [],
        "independentSourceCount": 3,
        "domains": [
          "cirebontimes.com",
          "demokratis.co.id",
          "suaralandak.co.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Cirebon Times",
        "headlineZh": null,
        "summaryZh": null,
        "reviewQuestionZh": null,
        "reviewedSourceCount": null,
        "requiresReview": true
      },
      {
        "id": "auto-1f7ba787322c513a",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "6b1935e6c2c2efb9",
          "9f5924aba34bb1bb"
        ],
        "socialItemIds": [],
        "independentSourceCount": 2,
        "domains": [
          "suaragarut.id",
          "suaraindependentnews.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Suara Independent News",
        "headlineZh": null,
        "summaryZh": null,
        "reviewQuestionZh": null,
        "reviewedSourceCount": null,
        "requiresReview": true
      }
    ],
    "actionableActive": [],
    "notificationLevel": "amber",
    "notificationReasons": [],
    "suppressedCandidateCount": 49,
    "acknowledgedRetained": [],
    "acknowledgedSuppressed": [],
    "pendingHighSeverity": [
      {
        "id": "auto-0d180ebe3f3221d4",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "d3aab98fab82b4ba",
          "d2607703719140a3",
          "f73ec4569d558514"
        ],
        "socialItemIds": [],
        "independentSourceCount": 3,
        "domains": [
          "cirebontimes.com",
          "demokratis.co.id",
          "suaralandak.co.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Cirebon Times",
        "headlineZh": null,
        "summaryZh": null,
        "reviewQuestionZh": null,
        "reviewedSourceCount": null,
        "requiresReview": true
      },
      {
        "id": "auto-1f7ba787322c513a",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "6b1935e6c2c2efb9",
          "9f5924aba34bb1bb"
        ],
        "socialItemIds": [],
        "independentSourceCount": 2,
        "domains": [
          "suaragarut.id",
          "suaraindependentnews.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Suara Independent News",
        "headlineZh": null,
        "summaryZh": null,
        "reviewQuestionZh": null,
        "reviewedSourceCount": null,
        "requiresReview": true
      }
    ]
  },
  "weeks": [
    {
      "weekStart": "2026-10-19",
      "weekEnd": "2026-10-25",
      "fearIndex": 73.0,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 70.9,
          "volume": 84.5,
          "negativity": 53.9,
          "itemCount": 90,
          "negativeShare": 8.8,
          "uniqueSources": 63
        },
        "social": {
          "score": 70.5,
          "volume": 85.0,
          "negativity": 55.9,
          "itemCount": 168,
          "negativeShare": 17.0,
          "platformCount": 1,
          "engagementUnits": 227.6
        }
      },
      "components": {
        "newsVolume": 84.5,
        "newsTone": 53.9,
        "socialVolume": 85.0,
        "socialNegativity": 55.9,
        "severeEvent": 86.0
      },
      "articleCount": 90,
      "socialPostCount": 168,
      "uniqueSourceCount": 63,
      "socialPlatformCount": 1,
      "negativeArticleShare": 8.8,
      "negativeSocialShare": 17.0,
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
        "news": "Pilot week-on-week ratio: 11.38x; 2/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 228.58x; 2/8 baseline weeks."
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
        "suppressedCandidateCount": 13,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": []
      },
      "events": [
        {
          "id": "auto-027fef53af78392e",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "d66617522b0c776c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sy baru telat 2 hr di KP, bertubi2 teror di SMS, wa, email, tlp, tp sy abaikan, setelah ketemu bang Medi, terimakasih ed",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5c1650988223b030",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "c77cfe87b055e0d6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radartegal.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Awas Teror Debt Collector Ilegal! Ini Risiko Hukum Menggunakan Pinjol yang Tidak Terdaftar OJK - radartegal.disway.id - Radartegal.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-afff50c921cfeab8",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "b5ffc4706589b7fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih Bang Med atas edukasinya selama ini.. Sehingga sdh bisa berpikir positif dan semangat menjalani hidup.  Hart",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-09d7a142159cfe0c",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "3782fbe8e1f6d0a1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5 Cara Menghadapi Modus Penipuan Deepfake AI - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a05a7ad1d611518",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "7e6eb55f6b5f8469"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemerintah harus tertibkan aturan untuk pinjol dong, harusnya ada verifikasi ktp asli lewat kamera hp dan verifikasi waj",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2714507a47d3d0e2",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "b7f43601013f23e6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.sulteng.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Edukasi Masyarakat, Polresta Banggai Imbau Warga Waspadai Judi Online dan Pinjol Ilegal - Website Resmi Polri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-29177e1048886c3e",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "ae720f80369ff751"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Kanit Binmas Polsek Bantul Berikan Penyuluhan Bahaya Pinjol Ilegal dan Judi Online kepada Kaum Rois Trirenggo - Polda DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-681c16d00e221342",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "a58acc1fba17008e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "topik.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Waspadai Penyalahgunaan Rekening Dormant untuk Judi Online dan Pinjol Ilegal di Tengah Target 25 Juta Rekening - TOPIK.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e6f910239ab7b5d",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "461b1407778f6a15"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.idntimes.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5 Daftar Kontak Bantuan OJK Jawa Tengah Buat Laporkan Pinjol Ilegal - IDN Times Jateng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b243914b03ad78fe",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "ac719d2aa663618e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "undana.ac.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peringati Bulan Inklusi Keuangan, FEB Undana dan OJK NTT Edukasi Mahasiswa Cegah Pinjol Ilegal dan Judi Online - UNDANA KUPANG",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d3f09c6c8888615b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "417ad2c5feabddf1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarpalu.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sulteng Ingatkan Bahaya Judi Online, Pinjol Ilegal hingga Pencurian Data Pribadi - RadarPalu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e7ead69e1fe205b3",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "6945fd1e732b9da8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pramukajakarta.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lawan Judol dan Pinjol Ilegal, 60 Anggota Saka Bhayangkara Ikuti Penyuluhan Hukum di Polres Metro Jakarta Utara - Pramuka Jakarta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe81bbfd5f6a58d3",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "40435814b1673e8e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemerintah Siapkan 25 Juta Rekening Baru, OJK Waspadai Risiko Judol dan Pinjol Ilegal - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-213ae03ffd6ddf74",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "ed0fba089274230c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Melunasi Utang Pinjol: Solusi Gagal Bayar (Galbay) dan Aturan Penagihan - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4a9bc27c9ea2a6c5",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "2200878f12ae1916"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "validnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Awas, Angka Gagal Bayar Pinjol Meresahkan - Validnews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5571e0b820729475",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "fdc6c01f375c12d4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "TWP90 Pindar Dekati 5 Persen, Tekanan Keuangan Rumah Tangga Meningkat - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8ca14b372bde461c",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "d4b762b1a14655d3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bertuahpos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sinyal Bahaya, Keuangan Rumah Tangga Tertekan, Risiko Gagal Bayar Pinjol Dekati Ambang 5% - BertuahPos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8d4999f653d7769f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "14d1d27b1bb7de35"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mulai besok 22 Oktober 2026! Semua Yang Galbay TUNBAY Pinjol BERHENTI BAYAR,Dengan Cara Ini...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-93dc4db394a942e6",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "4bbe4bbb506c7204"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Galbay Pinjol Harus Dibayar atau Diabaikan? Begini Aturan Penagihan oleh Debt Collector - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-abac53addd62784f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "e00b1c8a0e605d48"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "RAME YANG GALBAY?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c04d996a5ea970c2",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "5aae5a6f19fb53ac"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radartegal.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terlanjur Galbay Pinjol Legal? Ini Tahapan Hukum dan 7 Solusi Bebas Utang yang Aman - radartegal.disway.id - Radartegal.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d5626b361965c666",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "33adb8cafb1daf6b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gagal Bayar Pinjol Meningkat, Masyarakat Diduga Terpaksa Berutang untuk Biaya Hidup - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e2589c86e24f82fe",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "54dfdd9d48a24597"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "NEROR = LUNAS , STAY GALBAY 15 APLIKASI , TOTAL 250JT , STAY GALBAY SAMPAI BUBAR PINJOL , PINDAR",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e9f060e6c98c7261",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "bf6fcfb53c5c71cd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Rasio Gagal Bayar Pinjol Nyaris Tembus 5 Persen, Ekonom: Warga Terpaksa Ngutang Buat Beli Beras - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-00326658d6fd7f4a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ba572a854a391939"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "akurat.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Easycash dan Krom Bank Jalin Kerja Sama Loan Channeling untuk Memperluas Penyaluran Kredit - Akurat.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-016b33f375103a83",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ca2878936b937af2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bbc.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ekonomi: Kelas menengah Indonesia 'downgrade' hidup - BBC",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-027b7149084026f9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "385bff421befc019"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Komen bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-036cdea6ac0ffeae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "757e7b38bb63f509"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dana instan saya sudah ada tapi knpa blm bsa di gunakan yah bang",
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
            "669e6d220b5ccafe",
            "6eb18d213ad0b402"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0612144ece101a07",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bdd375bf1c99631c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah dapat buat berobat ibu aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-062039fc4f9b56dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "df923ea84a6a4def"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bisimillah buat jajan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0675f21014649cc1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "92782331d227d93a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat bayar SPP anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-078c2cc69b548c4c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5949ffd8bb939deb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gass bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08ba3748095a560f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "376aadb4a5794a38"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "id.tradingview.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pengadilan Batalkan Putusan KPPU, Denda Rp 755 Miliar ke 97 Fintech Pinjol Gugur - TradingView",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08d399630d957384",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e5cf1e98b6473dc8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "benang.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perluas Penyaluran Kredit, Easycash-Krom Bank Jalin Kemitraan Loan Channeling - https://benang.id/",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-09ab7e743f8e7a47",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f8208ba8009086dd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tagihan Listrik Bisa Dibayar Pakai Shopee PayLater, Ini Caranya - nova.grid.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0b74a8f33b4ee376",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "08988c36fa14bbba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah, buat berobat keponak'an ku 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e0396ac11fd1c24",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3141230537d63288"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Demi Memenuhi Keinginan Istriku, Aku Terpaksa Menanggung Utang Pinjol yang Terus Menumpuk!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e1accba75e40fe1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cc6e5b8c3d781351"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rela Utang Sana-Sini Demi Terlihat &quot;Punya&quot; Didepan Teman, Akhirnya Malu Sendiri.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e2a57289909b641",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "356bf7e6e0efecc4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "unej.ac.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Working in Harmony Nurturing the Future - Universitas Jember",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0eb16c269263a751",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3645b80855b3c994"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya senang sama edukasi bapak ini,..\nBisa membuat hati tenang dan membuat pikiran jauh lebih baik,untuk tidak salah mem",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0ec0be1d220915c7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "85918446b81cca79"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat hp untuk keperluan anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0ef37b525c66e1be",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ab762a81008db43"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ternyata pelakuny org dlm OJK sendiri🤣🤣🤣",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0ffee3c9c01e8dc4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "381d0fa03664a6f7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat anak ultah hari selasa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-10fb1607cf0af626",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e2fe1499cb104070"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "aku knp tidak muncul ya, pdhl sudah premium",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-14642b4c47052ad1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7dbde17786592b1e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah smoga dapat amien untuk bayar koss 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1c109afc636924a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1ecbb6272a4d5627"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yah ngga bisa lah kalo hanya KTP, kemana2 pakai KTP. Ke hotel KTP,  Daftar sekolah malah parah KTP dan KK, hukum indones",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d150d312f9bdf34",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "32fca8f16d0cde72"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Funsi negara dalam melindungi rakyatnya gimana ya?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1dd39cabec424a74",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4d05ba4229faf031"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ekbis.harianjogja.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ingatkan Risiko Paylater dan Pinjol di Tengah Lonjakan Pembiayaan - Harianjogja.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1f41cdf7a56d38d3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b132bf390efa3365"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat aaminnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-207f2470a8aceffc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7f86e44f17e2f89d"
          ],
          "socialItemIds": [
            "00a18b99388ca930"
          ],
          "independentSourceCount": 2,
          "domains": [
            "kompas.com",
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cek Sebelum Terlambat, Begini Cara Tahu NIK KTP Dipakai Pinjol atau Tidak - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-208d172d92f2cd63",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f9b36e4f5affce3e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "25 Juta Rekening Pelajar Dibuka, OJK Waspadai Risiko Judol dan Pinjol - BeritaSatu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-22386be0128dfe7e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "13fbc18793378c8c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "fortuneidn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perluas Kredit, Krom Bank Jalin Loan Channeling dengan Easycash - FORTUNE Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-23b7e61522634861",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "64b02c07672d0d35"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet buat biaya berobat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24633e520663f7c7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b1e4b99279429f51"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Keren bang konten nya berlanfaat apalagi buat yang masih dangkal paham soal pinjol, makasih juga bwt daget nya mantap 👌",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24b786f11f9c5df5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7900d566b1f2eeba"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Krom Bank gandeng Easycash perluas akses pembiayaan digital - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24d8dab2beb9177d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ec1127dfc55f045f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tuh banyak di hotel atau mall atau tempat lain yang meminta diserahkan ke security untuk meninggalkan KTP di pos securit",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2567fbda7cccf98c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7919057895e03602"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bisniullah berkah ka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2689367b205c16ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "afc73e52b3c5315f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26b2a8a6f038ca6c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "430951748c6f37db"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pengen beli pelapon.beli pager.beli sopa ah banyak deh ko jadi adu nasib",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26f4b0680cdcc05d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f667c22628e6fde6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol Mudah Cair 2026 ke DANA - Cara Pinjam Uang Di Dana Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2810527750a0dd1e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "34451707ccab6cab"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah yaallah semoga dapet rejeki nomplok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-28fd57861f1205f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d1b8eddf586a28a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga sukses bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2958138a6e2cec77",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aaaf0c30d1d941d4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bermanfa,ad sekali infonya bang,akirnya aku bisa pinjam saldo dana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b13610d8d907627",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5a417590a70d12a5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "siapa tau dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b3043614ab0ce51",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f0027511ccfa2071"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah bang buat makan minum",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2c326480ba10063b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fc97d640640651c4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nasional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hakim Nilai Pinjol Syariah Tak Bisa Disamakan dengan Pinjol Biasa - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2d47b0bc00bb3f87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d68d21f582b0c88"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah buat Brobat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e28aec5393269c7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7fb8dbfa452d00fe"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga bermanfaat ilmunya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e3134936ce610e6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "21b9a03f3ba75871"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ingatkan Risiko Pembiayaan Digital di Tengah Lonjakan Pay Later dan Pinjol - Media Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e41dadb3b92d713",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "05e75bf5e7810fd9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Online? Muncul bola muter berjam jam😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e6a998737e2b4fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2cfcba5f58667cf5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "2th comment nih\n\nmbak listi mbak listi paksa banget si istri hobi pinjol sana pinjol sini demi gengsi yang gak jelas man",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2ea88867b55df0fd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7eec4d67a746a9ff"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Online dan Gaya Hidup Konsumtif: Jerat Utang pada Generasi Z Halaman 1 - Kompasiana.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2eaf03345fc92ba0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "176be0384033a0e5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "No, 1 ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f040ed2d24748fc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "06c4754eb57bb707"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "twaslnews1.twaslnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pindar Rp106,94 Triliun pada Agustus 2026 - شبكة تواصل الإخبارية",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f2475fee4453bb1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ff5957b0d4b0b853"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "siap abang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-300ccb41a7e5002d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f1cbacbea7d01ea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapettt... Aminnnnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-301086fe1ac5184c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "409e07c70c88a929"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemberi Pinjol yang harus cek kebenaran data NIK calon peminjam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3231c7456e5f7f5b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9a60db9dec817ca4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilahh dapet giveway nya udah paket lengkap,lagi gaadaa pegangan uang🙏🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3453c51b1436c886",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d2b22f3b5837f6ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya sudah stop bayar karena memang sudah tidak mampu bayar lagi terserah mau di apain juga sama pinjol pinjol itu tingg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-34584fe24c898e26",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fc945e371fb55a06"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga bisa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-351e4b5fb925c690",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "20b88ad77b94a06e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Putusan Bunga Pinjol KPPU Dibatalkan Pengadilan, Ini Kata Asosiasi - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-36fedce247085e2f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "525e88d76b297ff7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat anak salam dr kalteng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3746e56a5d773e13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "22c6af19d467b5d6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3791a3796edb83f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e0f7c6ce5c5e704e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "emitennews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Loan Channeling, Krom Bank (BBSI)-Easycash Jalin Kolaborasi Strategis - Emitennews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-38b9b292c90f4cdb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4301ef68997d0494"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selamat Siang  Terima.kasih Atas pencerahnya dan Masukanya saya jadi faham",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-391a321158e21f51",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1af3025c44442eb5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Easycash dan Krom Bank Jalin Kemitraan Loan Channeling guna Perluas Penyaluran Kredit - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3cc7b40194bb72e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3d482147d659b2e4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga dapet. Buat ongkos berangkat merantau 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d1a251c7fdff163",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e301bc9e5858b593"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jpnn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perluas Penyaluran Kredit, Easycash dan Krom Bank Jalin Kemitraan Loan Channeling - JPNN.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d6036da326de1f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6b17ee2f779722fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gabisah gabisa di danah kaliyan fst pinjam gajelas ni konten",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3dbff686b7e92dd2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7024bc08f572e670"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah modal jualan 🙏🏿",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4048f45025806048",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b1ff04a4e49d6475"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang boleh sisih kan sedikit rezeki saya mau ngerantau bismillah😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-40abc512c605ec6d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "80579bfd54bd423e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Berbunga Jadi Sorotan, PUI Minta Pemerintah Hadirkan Pinjaman Tanpa Riba - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4173c183aa14dc20",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4f56fd2597e07f9d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sebagai WNI kita butuh pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-41dd8025f1fadc1a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3b7151365ff7b3d3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sama punya ku juga ngak ada",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45bc717fceac2722",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ff2e6e9d6e9596ad"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap Peran Tim Khusus Pindar dalam Upaya Pengembalian Dana Lender - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-47d74fbe1731ac62",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5a62e70b708498e4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Download Dopamine TV Apk v1.0.6 Terbaru Anti Sfile App iOs Live, Link Nonton TV Olahraga dan Bola - Berita DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48042f68b6745032",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "074bfb305b277278"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "terimakasih min, akun saya juga busuk tapi saya masih pengen pinjam online lagi, karna lagi ada kesulitan ekonomi\n semog",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4cb6a33a99878123",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "280c1bf6ef45a353"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim buat uang makan🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4ccdd9516db1bc50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f907d039a439d36a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "BPR Deg-degan Bersaing dengan Pinjol, OJK Siapkan Strategi Dukung Perbankan - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4deb27397af10ff8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dccde0bbaee4eb38"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tanda-Tanda & Cara Mudah Cek NIK KTP Dipakai Pinjol atau Tidak - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4deeef6bf6240973",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "606f8bb142a44faf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insight.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Terjepit Biaya Pendanaan - KONTAN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4f2d9270e881a148",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cbc3734721997b4f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "temanggung.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PT SBA Wood Industries Milik Siapa? Ini Profil, Lokasi Perusahaan, dan Penyebab Disorot Singapura - Info Temanggung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-517d0c089f8d78c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "965b31bcb66adeb4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah ikutan hadir semoga bisa terciduk buat bayar SPP anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-541a3ddfa4021a39",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7fc253cbe6da2e4b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapet buat makan lagi di perantauan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5432f2e595cee126",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "083189281f7c7677"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aplikasi sebutin dong bro jgn maksa orang buat lihat chanel lo sampai akhir tapi apk ga lo sebutin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-546af097ee462d50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ef3716903ebe596e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nasional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Hakim Nilai Pinjol Syariah Tak Bisa Disamakan dengan Pinjol Biasa Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5613bada12d034fb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3d21043af420b69c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "olenka.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kemitraan Easycash dan Krom Bank Perluas Penyaluran Kredit - Olenka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5651dfb475df7bdd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5e5518d671ffac94"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapat amin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-56796cc27c3bf9aa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7760eafe02936860"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ribettt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-57d1ba44adf6ab6e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f2ee191b7dadf675"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Harga 4 Konsol Game 2026 dan Tips Beli Tanpa Boncos - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-58cf6d19acf7d265",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f52c5d6e20f11198"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "butuh kali aku bah buat sehari hari ongkos kerja bensin dll",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a35adecdb58af11",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6a58e71c9d854683"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat buat bayar kontrakan rumah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a35d695cca1a057",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b11796d3e73379aa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat tambahan ongkos pulang kampung 🙏🏼",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b1b2395b06827f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "76dcfe72dd4051bf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "emitennews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perluas Kredit, Easycash dan Krom Bank Jalin Kemitraan Loan Channeling - Emitennews.com",
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
            "c24aa77eb3e04647"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TANPA BI CHECKING❗ PINJOL MUDAH CAIR 2026 KE DANA - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5cf9f648fd022853",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "83434bca5dc60ba5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lha wong mengajukan Pinjol no KTP, KK & Wajah harus gerak liat depan, kiri, kanan mulut gerak, mata gerak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5d984d0bb5cfb3eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f0ec8c19864ff3d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gk muncul bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e5501b64d2cc4d4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "027bbb02060d9000"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "asalamualaikum...mudah²an dapet buat kebutuhan sehari-hari bg 🙏🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-60665d60dca1494f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7473d38280184dd3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aktifasi Fitur Dana Fast Pinjam  tdk muncul... Gimana tu..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6276812f5fac96d8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "582ee48ef591d363"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang semoga dapet give away buat kebutuhan mendesak,kerja nguli 2 bulan GK kebayar pusing buat saku jajan anak tia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63da8e71bb429342",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "589e096faef4c4ca"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "aktual.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Tembus Rp106,9 Triliun, NEXT Indonesia Soroti Tekanan Daya Beli Masyarakat - Aktual.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-64cdc674ce434ffd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "caa4974e17ee42f9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga ada rejeki, aamin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-687b97eed6b3397c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ef9c612e832810b8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Krom Bank Gandeng Easycash, Kredit Tembus Rp11,59 Triliun pada Agustus 2026 - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-69695cc05268a62e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f4dc468043c7abd6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6981d57c7a03e531",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "14e7443d87b29ac7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Infinite content glitch ahh 💔🥀",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-699cba599398939c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7168d4e41861d957"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah.buat beli beras",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6ad3c1eb41ac35cf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "109c9dc5861960b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ribet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6bb28f8f2d7cb8e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1a94affb73ec34b1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.babel.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Waspada Jeratan Judi dan Pinjaman Online: Imbauan Polri untuk Lindungi Keluarga dan Generasi Muda - Tribratanews Polda Babel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6c605c0a6bb00bc0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e4d07fbb61c262b2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "demokratis.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Krom Bank Perluas Kredit Lewat Kemitraan dengan Easycash - Demokratis.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6f203c0c1589f296",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9d62d9366e760a6d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Krom Bank Naik 50,4 Persen, Easycash Jadi Mitra Baru - BeritaSatu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6f230d4aa7071a59",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "13f1945a12de7b1b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "id.tradingview.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pengadilan Niaga Batalkan Putusan KPPU Soal Suku Bunga Pinjol, Ini Respons AFPI - TradingView",
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
            "4619df13918c0eb4",
            "b2a2a2bff4c0774e"
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
          "id": "auto-72dcc20ea295be8d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "22c9716a28748728"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Syarat dan Ketentuan Kejutan Setiap Hari! - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-73fcec162b1c6ebc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca1bb73d3bfe2d23"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat untuk pake berobat🙏🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-764c741dbadc8ae7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "47161629aa3ace5c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahhhhh 🤲🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-76c3e3ff20ee5077",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0798b4277da446f3",
            "660ad2b32ae75a4e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TANPA BI CHECKING?! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA BUSUK LANGSUNG CAIR",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-790d9eeb8f6fbf05",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b11fd47b68fa70a1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mas lagi butuh dana untuk berobat bapak stroke",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-799d0193fed8003d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2ece483ac3444aa5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "hops.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "FWD Economic Outlook 2027, Kepercayaan Investor dan Ketahanan Finansial Jadi Kunci Hadapi Tantangan Ekonomi - Hops ID - Hops ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b8c3c3f20a3c361",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1fdda7d47aa54942"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat buat beli bensin kerja🙏🤲🏻 (Reza Sentanu) semoga sehat selalu ya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7df8a875d0598835",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "25c322a6727ac6d7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7e45d84083d73aee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5e392965b504f7d5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bpbd.ntbprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara mengajukan pembatalan pinjaman Adakami - BPBD NTB",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8088a7d331b87d63",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "42ad7dd96000bce8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau banget soalnya make buat beli labtob buat kuliah, semoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-809d25331ee28646",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e10bc8e7d8b7f5dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah cair KA ...LG butuh bngt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8394aeef8128ec95",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2592d20fe6e3b36c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lha emangnya hanya dgn nmr KTP orang bisa dpt pinjol? Koq gampang bgt maling di negeri ini.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-84dd0e098f23b45c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5689a37dc1a6d083"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "stabilitas.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sinergi Bank Digital dan Pindar, Krom Bank serta Easycash Teken Kerja Sama Channeling - Stabilitas.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8b1e9a6468d395a0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "52ec054b87181381"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat untuk upgrade hp biar bisa belajar tanpa lag",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8b72caabd5390974",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2c6aa127c811a900"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mudah Ajukan Pindar-Paylater, OJK Ingatkan Risiko Gali Lubang Tutup Lubang - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c271b7c957865a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1ec3cb29ff827c49"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "voi.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol dan Paylater Makin Mudah, OJK Ingatkan Risiko Utang dan Penyalahgunaan Data - VOI.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c2a649d70cfe2b4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b3eccb833cc3f31"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah ya Allah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8cae7c3e216fcc93",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fdb9ce5d13a2809b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat makan",
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
            "d8111c1164f41dae"
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
          "id": "auto-90625539cd53744d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a8b46a582e0d5fab"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Awalnya  pinjol satu dua lama lama gali lobang tutup lobang......hp di jual pinjem Sono sini.....kapok mau pinjol lagi..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-92f6c2c55a807d5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cddbd7b98e977a9f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hakim Batalkan Putusan KPPU soal Bunga Pinjol, Ini Dampaknya bagi Industri - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9354de26ead086e0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "aa4a0d36303c7633"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "duwitmu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5+ Unpopular Opinion SPinjam Shopee Pinjol - Duwitmu",
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
            "6084c7e56b4c3f87"
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
          "id": "auto-9511a077b3fb22af",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d5d3bb2f4da51912"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "dandapala.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PN Jakpus Batalkan Putusan KPPU Soal Bunga Pinjol, Ini Alasannya! - Dandapala Digital",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-979879ab6891963d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e2ceb9abd3ca3d97"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismila semoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9b2ab77668c68c1a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "14a9ebee9e683927"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih bang semoga saya di acc",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c587bb1269d5b77",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "47c1b901b1440da6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BISMILLAHIRRAHMANIRRAHIM buat jajan sekolah ya Allah amin ya robal alamin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c6d32980a844922",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1e913c87c63c9645"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radartegal.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Biar Gak Ketipu Aplikasi Bodong! Begini Cara Cek Legalitas Aplikasi Pinjol di OJK - radartegal.disway.id - Radartegal.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9e9dd871c8b05aed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "df95f36419fad610"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "okukab.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pimpin Rapat Evaluasi Pendidikan, Bupati OKU Minta Kepsek Petakan Kualitas Guru dan Wanti-wanti Bahaya Pinjol - okukab.go.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9f043382a435131a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d1cf29404932a9a8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahi Allahuakbar \nDana kaget Cair cair Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a0e89a149481a23e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e1c805e0c05d60fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantab infonya min.langsung gercep dech...",
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
            "5134f727158d5be1",
            "03d8819c00aca16e"
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
          "id": "auto-a2c6befd9f888363",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2a2f99e8e7938a79",
            "f6dcdcb61f6d8bf4",
            "153e7ef739203800",
            "a5753fbace494d70",
            "77bf53366dc6cd45"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTE",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a469b405bd110aff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9115907d37f712ce"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo: 48 Persen Pengguna Baru Kredit Digital adalah Perempuan - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a5099fe371863ae7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4d8fd2c4d32512db"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau banget bang semiga ada rejeki saya,saya butuh untuk midal usaha",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a62e363939b2e838",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "edb959fbece79f3e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga boleh spt itu. Harus ybs datang membawa ktp dll, rekaman video saat transaksi.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a7e0d230a369f570",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b3b75e5c6035214"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yuhu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8cea813fb5b2515",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "66932f64ff1b9b4d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah yaallah semoga dapet lagi butuh bang🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aafc85f12df8c2e3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "49b39d41625be83d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah buat cicilan bualan depan semogga dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ab53c4fd52c3d0c8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3a8dee576132ce22"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infopublik.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar Meningkat, Kolaborasi dengan Bank Perluas Akses Keuangan - InfoPublik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac8d385d81fd32de",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "86d2aec1aa021f22"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "youngster.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Catat 48% Penerima Kredit Usahanya Adalah Perempuan - youngster.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aed5e72f3439e3d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "03bd633108edee88"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Maksi infonyA BANG akirnya aku bisa pinjam di akun dana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-af8bd5b2d5fbe595",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f9adb5034fe6934c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DATA BUSUK PADA CAIR?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b13c0ea15587743a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b142c5dd0dbcf279"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "oke",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b437a643a46121de",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c04d40e4d4596245"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Huadir",
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
            "cf3449a7d7be0603",
            "8ade680c272c2d64"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mantap bang🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b63ce542cd8150ed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6cbb4d420099c259"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Persyaratan kentuuuttt..... Ribettt 😂 negeri dagelan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b83ce30355b03f91",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5bf11881015cb3b2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang bagi rezeki nya buat beli susu pampers anak 😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b9a537abe6a357b3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3838c216f78c5061"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Smoga dapat biar tambah\" ongkos bolak balik di rumah sakit. Karena istri saya lagi kelahiran bang.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bb238f327a104082",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "59eeb6aef6cba5b0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya kalo dapet buat bayar hutang bang tolong ajarin saya cara pakai dana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bc8eb0fcc092fb31",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7b3b84f6a2b12922"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Masalahnya.. sekarang ada AI. Wajah bisa diubah pakai AI, pegang KTP juga editan AI.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bff394c8d916cce7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0583d48c9228761c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ga berharap lebih, semoga di vt masnya ini ada rejeki ku yang allah titipkan ke mas nya😁",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c049434aba6a0692",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eb04e798cc69004e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Akuu mau kak, lagi butuh banget buat ongkos sekolah adekku 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c16d765dfc87ce7f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ff4017c4f5d738c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asiap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c23398f41af174ef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f65f02dd9cf933ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Keamanan pinjol OJK harus dipertanyakan masa nomor aja lolos harusnya ada tahap tahap sampai titik ornag gabisa niru",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c3fb29ce0f6fbfca",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eff28ecc45bc45a5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Oeee aa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c4dbd913763a1e6a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f08c1ad339da1a55"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "dandapala.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PN Jakarta Pusat Batalkan Putusan KPPU, Sengketa Batas Atas Bunga Pinjol Jadi Sorotan - Dandapala Digital",
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
            "d2ea280ece620bed"
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
          "id": "auto-c669a2faafc6cd29",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e546c97f22e59ec1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah dapet rezeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c6e30cd8f815abf7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6671d5260f01b898"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kalteng.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "LPS minta mahasiswa waspadai risiko pinjol dan paylater - ANTARA News Kalteng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c7ce4ef5d8b8c4a4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "99d3122a4196502b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah cairr",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c9a92c255dd6c799",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2151cd92027056c1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan jangan mereka semua pinjol kerja sama, diarahkan tutuplobang gali lobang biar untungnya berkali kali lipat?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cc5b2bac138b7811",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ff3e5d34dce466db"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inforadar.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penegakan Hukum Karhutla Perlu Diperkuat, Pengawasan Lahan Jadi Kunci - inforadar.disway.id - Inforadar.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd8e2203ababfc15",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d5127a0e77b5bd06"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya suka nih tambah wawasan yg berguna Trimakasih kak edukasi yang jenengan berikan sangat mudah dicerna semoga membant",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ced57ee39153b878",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bd5054adec035a70"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediajustitia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Online: Kemudahan di Ujung Jari, Pahami Risiko Dini - Media Justitia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf9cf2dd87dea756",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c027f9b4fa5493c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga rezeki buatt biaya berobat nenek😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf9e0aa7562fd41c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ac8bb62bd07adec6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "idxchannel.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi LDUI: 48 Persen Pengakses Kredit Pertama Kredivo Perempuan, Dorong Peluang Ekonomi Setara - IDX Channel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d12b8283abcebc53",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9580c647a29a7a56"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bissmillah smoga dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d2408a7f8cc53583",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d55b314a8b158e2a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bertuahpos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dampak Karhutla Mengancam Investasi Properti hingga Awal 2027 - BertuahPos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d488ab6d950d0d2f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3885750c2771619f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nasional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PN Jakpus Batalkan Putusan KPPU soal Batas Atas Bunga Pinjol - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d6e997b702aca025",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "89eaa3896430f111"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "demokratis.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Easycash dan Krom Bank Perluas Penyaluran Kredit Digital - Demokratis.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d94feff033f6e77e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cbe17b1208960916"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kok tidak ada info andai ternyata disalah gunakan bisa tdk dilacak itu yg pakai secara ilegal?. \nPercuma jg bl tdk bisa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d98b79c98fd209fb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8a7b446f3097fbeb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kok GK bisa sy pinjaman dana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-da591d8be281153e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "157f75ca38020cea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "lebih baik tutup aplikasi pinjol, pinjol lebih dari rentenir.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db2ed510ebc06658",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1a3648ee349ade62"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah amin 🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dd6bc4d5bd9bd10c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5f82cd5d975b44f6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau dong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dd7edba4bff17260",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ac61371eddef440f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kuningan.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Warga Kuningan Banyak Dikejar Debt Collector, Shohibul Imam: Jangan Besar Pasak daripada Tiang - Pikiran Rakyat Kuningan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e2aaf47ba5de1ff8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "16ebe0d36d9b21c1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat bang lagi butuh untuk berobat ibuk saya🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3a999fa88cf877a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "86a519495ca0590f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, mau daget hari ini untuk kebutuhan darurat apa nih komen 👇 https://link.dana.id/dan",
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
            "301447badcadd089"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3bd441d694ba176",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c390d1820ceb8bbc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "CARA CAIRKAN SPAYLATER METODE TERBARU 2026 ANTI GAGAL :\r\n👇👇👇\r\nhttps://youtu.be/gJ26jQDi_nQ\r\n\r\nLink Daget ada di dalam vi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e42bddce7f84165e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ed6164ae5865f79f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mobitekno.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi LDUI: Perempuan Mencakup 48% Pengakses Kredit Pertama Kredivo - Mobitekno",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e7e5b0e85c44d87a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2fdb2728ef0a2932"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga  kali ini rejeki yaallah  buat berobat nenek😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e9485b3baeb6b7d2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5b777d0387ed44ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah butuh sapa tau ada rejeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ea29c30ef7335680",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "39e051edb1d66292"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dapatnya 800rb bayar 1,3jt walopun butuh dana saya jadi pikir\"",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eb5fc41c76b2332a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0b34ed354e64d4d0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nasional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gaspol Hari Ini: Pinjol Bukan Solusi, Para Ibu Punya Cara Sendiri - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eb9b8c0b51bb97dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8183e18cd56ba2fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bissmillah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed0040fde112f753",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3fc71987a395a7fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya Stop Di 5 Apk..dan saya putuskan Berhenti bayar dulu /Galob. .di terrror terus saya ganti nomer..untuk bisa lebih f",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed0f4dd8b3022e49",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ae97832456bca104"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet buat modal jualan nasi uduk🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-edf0d532d4965ef4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "31f44766a3f7b258"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "id.tradingview.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Fintech Lending Akan Dikelompokkan Menjadi 4 Tier, Begini Respons Pindar UKU - TradingView",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee4776dab4cd6ade",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "90cff9a5866be053"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mantap smoga bisa isi paket data",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef82567d10514e26",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1056e4eff4008823"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga aku dapat ya dananya",
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
            "7529f583ea665797"
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
          "id": "auto-f010d33571183211",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "56cae4dc4aadefcd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga dapet buat jajan sekolah",
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
            "9f59449d56d4acc3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f057e0d14f2d4d57",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1583cda4c88832a2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi LD FEB UI: 48% Pengakses Kredit Pertama melalui Kredivo adalah Perempuan - SWA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f438ff189965cd7c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a1d4b068520c6fb5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Trima kasih edukasinya bang... pencerahannya membuat lega pemikiran untuk menuju masa depan.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f51c905486655370",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1948925bbd882821"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah buat bayar paket",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f5cd7dfe6b4aa7f3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "77831c6d5c6771d6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillahirrahmanirrahim , semoga ada rezeki nya dari abang untuk menyambung hidup saya dan keluarga 🤲🏻🤲🏻 ....\nsehat sel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f8778296d51e78e1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "84bb8e33370789ab"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Marak Program Pembukaan Rekening, OJK Antisipasi Risiko Dormant yang Picu Pinjol Cs - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f8badf1acfa77ba4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3c4d3dcf9bc0c31e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjaman Sehat, Cara Para Ibu Lepas dari Kesulitan Ekonomi | Gaspol Ft PNM",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f99ececce67269e1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "54c81b8786abd489"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah, semoga dapet buat bayar cicilan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fa5f0db13e3ff9aa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3b9f0a95ba5cdea1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaragarut.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Krom Bank Perluas Kredit Lewat Kemitraan dengan Easycash - SuaraGarut.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fbf2892d72598df7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b4fda38b089e69e1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga dapat. Amin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc58baa3f42ea2e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "603c987b988f5016"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "self service ini namanya .. harus nya pemerintah hadir donk diberantas. apa rakyat nya kebanyakan jadi gk mampu manage",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fcf52014f8f61c49",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "98e681d74caf169a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga rejeki lancar kak semoga kebagian rejeki buat makan kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fda3a0995c9cad35",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "577f4851e7e19bf8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah ya rabb buat bapak operasi gula",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fdcabb1e43871103",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "255a1a9f170660d7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dapet gak dapet abng nya tetep baik selalu berbagi, semangat terus bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-feb6712b05039359",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9d656b49ead232c4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tunggakan Pinjol Naik ke 4,73%, Riset Soroti Tekanan Daya Beli - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e22e59d3233a6ac",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "a26020adc72ce2ed",
            "2b568b03398dd0dc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Kredit Krom Bank Tumbuh 50,4 Persen, Gandeng Easycash Perluas Penyaluran - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b55219fd4fceef23",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "79642b768b7ac396"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Krom Bank (BBSI) Gandeng Easycash, Kredit Tumbuh 50,4% Jadi Rp11,59 Triliun - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f56a5f5a6827f183",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "829b87469b3e4921"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Krom Bank Tumbuh 50,4 Persen, Gandeng Easycash Perluas Penyaluran - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f6624864ee07ea28",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "3a4fe80fabe62dfd",
            "6c170fce47ff30cf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "liputan6.com",
            "ng.headtopics.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater dan Pinjol Tumbuh Pesat, OJK Ingatkan Risiko Konsumen - Head Topics",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "3782fbe8e1f6d0a1",
        "2200878f12ae1916",
        "f907d039a439d36a",
        "2ece483ac3444aa5",
        "0b34ed354e64d4d0",
        "ff2e6e9d6e9596ad",
        "bd5054adec035a70",
        "80579bfd54bd423e",
        "589e096faef4c4ca",
        "22c9716a28748728",
        "fdc6c01f375c12d4",
        "ca2878936b937af2",
        "6671d5260f01b898",
        "e0f7c6ce5c5e704e",
        "cbc3734721997b4f",
        "e5cf1e98b6473dc8",
        "df95f36419fad610",
        "7eec4d67a746a9ff",
        "d4b762b1a14655d3",
        "aa4a0d36303c7633",
        "7f86e44f17e2f89d",
        "1af3025c44442eb5",
        "ba572a854a391939",
        "89eaa3896430f111",
        "ae720f80369ff751",
        "9d62d9366e760a6d",
        "79642b768b7ac396",
        "7900d566b1f2eeba",
        "ff3e5d34dce466db",
        "76dcfe72dd4051bf",
        "13fbc18793378c8c",
        "e301bc9e5858b593",
        "606f8bb142a44faf",
        "5689a37dc1a6d083",
        "ac61371eddef440f",
        "1a94affb73ec34b1",
        "f9b36e4f5affce3e",
        "461b1407778f6a15",
        "5e392965b504f7d5",
        "31f44766a3f7b258",
        "a26020adc72ce2ed",
        "2b568b03398dd0dc",
        "829b87469b3e4921",
        "9115907d37f712ce",
        "ef9c612e832810b8",
        "06c4754eb57bb707",
        "417ad2c5feabddf1",
        "a58acc1fba17008e",
        "3a8dee576132ce22",
        "40435814b1673e8e",
        "13f1945a12de7b1b",
        "ac719d2aa663618e",
        "f8208ba8009086dd",
        "c77cfe87b055e0d6",
        "1e913c87c63c9645",
        "ed0fba089274230c",
        "d55b314a8b158e2a",
        "ef3716903ebe596e",
        "cddbd7b98e977a9f",
        "fc97d640640651c4",
        "f2ee191b7dadf675",
        "3d21043af420b69c",
        "86d2aec1aa021f22",
        "84bb8e33370789ab",
        "f08c1ad339da1a55",
        "d5d3bb2f4da51912",
        "3885750c2771619f",
        "20b88ad77b94a06e",
        "ac8bb62bd07adec6",
        "ed6164ae5865f79f",
        "5aae5a6f19fb53ac",
        "b7f43601013f23e6",
        "6945fd1e732b9da8",
        "376aadb4a5794a38",
        "1583cda4c88832a2",
        "dccde0bbaee4eb38",
        "5a62e70b708498e4",
        "33adb8cafb1daf6b",
        "4bbe4bbb506c7204",
        "e4d07fbb61c262b2",
        "3b9f0a95ba5cdea1",
        "2c6aa127c811a900",
        "4d05ba4229faf031",
        "21b9a03f3ba75871",
        "3a4fe80fabe62dfd",
        "6c170fce47ff30cf",
        "1ec3cb29ff827c49",
        "bf6fcfb53c5c71cd",
        "9d656b49ead232c4",
        "356bf7e6e0efecc4"
      ],
      "socialItemIds": [
        "3c4d3dcf9bc0c31e",
        "c390d1820ceb8bbc",
        "cc6e5b8c3d781351",
        "c24aa77eb3e04647",
        "5a417590a70d12a5",
        "fdb9ce5d13a2809b",
        "99d3122a4196502b",
        "34451707ccab6cab",
        "54c81b8786abd489",
        "47161629aa3ace5c",
        "f4dc468043c7abd6",
        "c027f9b4fa5493c0",
        "d2ea280ece620bed",
        "00a18b99388ca930",
        "39e051edb1d66292",
        "22c6af19d467b5d6",
        "cbe17b1208960916",
        "7b3b84f6a2b12922",
        "86a519495ca0590f",
        "2a2f99e8e7938a79",
        "14d1d27b1bb7de35",
        "eff28ecc45bc45a5",
        "6cbb4d420099c259",
        "7760eafe02936860",
        "3fc71987a395a7fb",
        "1056e4eff4008823",
        "ca1bb73d3bfe2d23",
        "52ec054b87181381",
        "6084c7e56b4c3f87",
        "0798b4277da446f3",
        "b5ffc4706589b7fb",
        "9a60db9dec817ca4",
        "8183e18cd56ba2fb",
        "cf3449a7d7be0603",
        "56cae4dc4aadefcd",
        "eb04e798cc69004e",
        "083189281f7c7677",
        "3ff4017c4f5d738c",
        "a8b46a582e0d5fab",
        "aaaf0c30d1d941d4",
        "e2ceb9abd3ca3d97",
        "9f59449d56d4acc3",
        "7fc253cbe6da2e4b",
        "8f1cbacbea7d01ea",
        "2d1b8eddf586a28a",
        "e10bc8e7d8b7f5dd",
        "4619df13918c0eb4",
        "b132bf390efa3365",
        "1fdda7d47aa54942",
        "64b02c07672d0d35",
        "ae97832456bca104",
        "d1cf29404932a9a8",
        "9580c647a29a7a56",
        "582ee48ef591d363",
        "14e7443d87b29ac7",
        "8a7b446f3097fbeb",
        "385bff421befc019",
        "83434bca5dc60ba5",
        "03bd633108edee88",
        "669e6d220b5ccafe",
        "b11fd47b68fa70a1",
        "5f82cd5d975b44f6",
        "f6dcdcb61f6d8bf4",
        "54dfdd9d48a24597",
        "05e75bf5e7810fd9",
        "f667c22628e6fde6",
        "109c9dc5861960b5",
        "59eeb6aef6cba5b0",
        "3645b80855b3c994",
        "d2b22f3b5837f6ed",
        "4301ef68997d0494",
        "d8111c1164f41dae",
        "85918446b81cca79",
        "3ab762a81008db43",
        "a1d4b068520c6fb5",
        "ec1127dfc55f045f",
        "027bbb02060d9000",
        "f0027511ccfa2071",
        "afc73e52b3c5315f",
        "d66617522b0c776c",
        "2cfcba5f58667cf5",
        "7473d38280184dd3",
        "47c1b901b1440da6",
        "5b777d0387ed44ba",
        "e546c97f22e59ec1",
        "08988c36fa14bbba",
        "2fdb2728ef0a2932",
        "7919057895e03602",
        "525e88d76b297ff7",
        "f9adb5034fe6934c",
        "3141230537d63288",
        "6b17ee2f779722fb",
        "2151cd92027056c1",
        "b1e4b99279429f51",
        "8ade680c272c2d64",
        "153e7ef739203800",
        "176be0384033a0e5",
        "409e07c70c88a929",
        "430951748c6f37db",
        "3b7151365ff7b3d3",
        "7fb8dbfa452d00fe",
        "98e681d74caf169a",
        "7529f583ea665797",
        "b1ff04a4e49d6475",
        "1b3eccb833cc3f31",
        "f52c5d6e20f11198",
        "0583d48c9228761c",
        "8f0ec8c19864ff3d",
        "90cff9a5866be053",
        "fc945e371fb55a06",
        "ff5957b0d4b0b853",
        "caa4974e17ee42f9",
        "5134f727158d5be1",
        "381d0fa03664a6f7",
        "965b31bcb66adeb4",
        "b2a2a2bff4c0774e",
        "577f4851e7e19bf8",
        "b4fda38b089e69e1",
        "92782331d227d93a",
        "32fca8f16d0cde72",
        "edb959fbece79f3e",
        "5949ffd8bb939deb",
        "f65f02dd9cf933ce",
        "e1c805e0c05d60fb",
        "4d8fd2c4d32512db",
        "42ad7dd96000bce8",
        "d5127a0e77b5bd06",
        "1ecbb6272a4d5627",
        "1b3b75e5c6035214",
        "1948925bbd882821",
        "7024bc08f572e670",
        "25c322a6727ac6d7",
        "03d8819c00aca16e",
        "77831c6d5c6771d6",
        "157f75ca38020cea",
        "603c987b988f5016",
        "074bfb305b277278",
        "5bf11881015cb3b2",
        "2d68d21f582b0c88",
        "49b39d41625be83d",
        "5e5518d671ffac94",
        "1a3648ee349ade62",
        "b11796d3e73379aa",
        "bdd375bf1c99631c",
        "16ebe0d36d9b21c1",
        "6a58e71c9d854683",
        "7dbde17786592b1e",
        "66932f64ff1b9b4d",
        "7168d4e41861d957",
        "280c1bf6ef45a353",
        "3d482147d659b2e4",
        "757e7b38bb63f509",
        "255a1a9f170660d7",
        "c04d40e4d4596245",
        "2592d20fe6e3b36c",
        "6eb18d213ad0b402",
        "a5753fbace494d70",
        "77bf53366dc6cd45",
        "7e6eb55f6b5f8469",
        "e00b1c8a0e605d48",
        "3838c216f78c5061",
        "660ad2b32ae75a4e",
        "14a9ebee9e683927",
        "e2fe1499cb104070",
        "df923ea84a6a4def",
        "b142c5dd0dbcf279",
        "4f56fd2597e07f9d",
        "301447badcadd089"
      ],
      "_newsVolumeRaw": 90,
      "_socialVolumeRaw": 227.6
    },
    {
      "weekStart": "2026-10-26",
      "weekEnd": "2026-11-01",
      "fearIndex": 63.9,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 59.1,
          "volume": 60.8,
          "negativity": 57.1,
          "itemCount": 124,
          "negativeShare": 8.6,
          "uniqueSources": 98
        },
        "social": {
          "score": 58.7,
          "volume": 56.9,
          "negativity": 60.5,
          "itemCount": 210,
          "negativeShare": 39.4,
          "platformCount": 1,
          "engagementUnits": 313.0
        }
      },
      "components": {
        "newsVolume": 60.8,
        "newsTone": 57.1,
        "socialVolume": 56.9,
        "socialNegativity": 60.5,
        "severeEvent": 92.0
      },
      "articleCount": 124,
      "socialPostCount": 210,
      "uniqueSourceCount": 98,
      "socialPlatformCount": 1,
      "negativeArticleShare": 8.6,
      "negativeSocialShare": 39.4,
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
        "news": "Pilot week-on-week ratio: 1.37x; 3/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 1.37x; 3/8 baseline weeks."
      },
      "alert": {
        "level": "amber",
        "active": [
          {
            "id": "auto-0d180ebe3f3221d4",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "d3aab98fab82b4ba",
              "d2607703719140a3",
              "f73ec4569d558514"
            ],
            "socialItemIds": [],
            "independentSourceCount": 3,
            "domains": [
              "cirebontimes.com",
              "demokratis.co.id",
              "suaralandak.co.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Cirebon Times",
            "headlineZh": null,
            "summaryZh": null,
            "reviewQuestionZh": null,
            "reviewedSourceCount": null,
            "requiresReview": true
          },
          {
            "id": "auto-1f7ba787322c513a",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "6b1935e6c2c2efb9",
              "9f5924aba34bb1bb"
            ],
            "socialItemIds": [],
            "independentSourceCount": 2,
            "domains": [
              "suaragarut.id",
              "suaraindependentnews.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Suara Independent News",
            "headlineZh": null,
            "summaryZh": null,
            "reviewQuestionZh": null,
            "reviewedSourceCount": null,
            "requiresReview": true
          }
        ],
        "triggerReasons": [],
        "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
        "reviewCandidates": [
          {
            "id": "auto-0d180ebe3f3221d4",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "d3aab98fab82b4ba",
              "d2607703719140a3",
              "f73ec4569d558514"
            ],
            "socialItemIds": [],
            "independentSourceCount": 3,
            "domains": [
              "cirebontimes.com",
              "demokratis.co.id",
              "suaralandak.co.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Cirebon Times",
            "headlineZh": null,
            "summaryZh": null,
            "reviewQuestionZh": null,
            "reviewedSourceCount": null,
            "requiresReview": true
          },
          {
            "id": "auto-1f7ba787322c513a",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "6b1935e6c2c2efb9",
              "9f5924aba34bb1bb"
            ],
            "socialItemIds": [],
            "independentSourceCount": 2,
            "domains": [
              "suaragarut.id",
              "suaraindependentnews.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Suara Independent News",
            "headlineZh": null,
            "summaryZh": null,
            "reviewQuestionZh": null,
            "reviewedSourceCount": null,
            "requiresReview": true
          }
        ],
        "actionableActive": [],
        "notificationLevel": "amber",
        "notificationReasons": [],
        "suppressedCandidateCount": 49,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": [
          {
            "id": "auto-0d180ebe3f3221d4",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "d3aab98fab82b4ba",
              "d2607703719140a3",
              "f73ec4569d558514"
            ],
            "socialItemIds": [],
            "independentSourceCount": 3,
            "domains": [
              "cirebontimes.com",
              "demokratis.co.id",
              "suaralandak.co.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Cirebon Times",
            "headlineZh": null,
            "summaryZh": null,
            "reviewQuestionZh": null,
            "reviewedSourceCount": null,
            "requiresReview": true
          },
          {
            "id": "auto-1f7ba787322c513a",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "6b1935e6c2c2efb9",
              "9f5924aba34bb1bb"
            ],
            "socialItemIds": [],
            "independentSourceCount": 2,
            "domains": [
              "suaragarut.id",
              "suaraindependentnews.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Suara Independent News",
            "headlineZh": null,
            "summaryZh": null,
            "reviewQuestionZh": null,
            "reviewedSourceCount": null,
            "requiresReview": true
          }
        ]
      },
      "events": [
        {
          "id": "auto-0d180ebe3f3221d4",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "d3aab98fab82b4ba",
            "d2607703719140a3",
            "f73ec4569d558514"
          ],
          "socialItemIds": [],
          "independentSourceCount": 3,
          "domains": [
            "cirebontimes.com",
            "demokratis.co.id",
            "suaralandak.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Cirebon Times",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1f7ba787322c513a",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "6b1935e6c2c2efb9",
            "9f5924aba34bb1bb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "suaragarut.id",
            "suaraindependentnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Suara Independent News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5208ec6e94f12d56",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "4caf213e7679cd91"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inilah.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tegas! OJK Minta Pinjol Lebih Transparan, Sanksi Keras Bagi yang Nakal - Inilah.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-765e41db0d098c1d",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "d98c0c9067d12de2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "twaslnews1.twaslnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hentikan Ribuan Pinjol dan Investasi Ilegal - شبكة تواصل الإخبارية",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08fe10d6793dbacf",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "f7a19fc38d23ae7b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tips Menghadapi Teror Debt Collector Pinjol, Cek Panduan Resmi OJK dan Polisi - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1458818011396a4d",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "7e1fe9136bc5074d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "riauonline.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dua Korban Pinjol Tertekan, Diteror Nomor Tak Dikenal, LBH ICMI: Korban Harus Dilindungi - Riau Online",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3a9682ace261d5c7",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "6505b3075fb8c7e6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bener bang emak gali lobang tutup lobang,pinjam 6,4 jt hrs byr 11 jt lebih di ksh waktu 15 hari dan cm 2 x cicilan di KT",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f60b17f47f13e0d",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "35da8ca202b28004"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Menurutku biarin dia panen risiko dari keputusannya yang bodoh. Laki-laki kalo diback up terus nggak ada kapoknya. Mau d",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8b7773758dc21aed",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "f8b2f59c2758aa37"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kayonews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Diteror Debt Collector Pinjol? Ini Hak Peminjam dan Cara Melapor ke OJK serta Polisi - kayonews.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-de93b09b181893e0",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "80cdad941da43407"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "style.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cerita Vicky Shu Diteror Debt Collector, Dituduh Punya Pinjol, KTP Tersebar, Klaim Korban Penipuan - TribunStyle.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-11296f25cb6384cf",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "190b0a08283bb129"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "thestance.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Warga Malaysia dan Singapura Jalankan Bisnis Pinjol Ilegal di Bali - TheStance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-123eb214f4381596",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "3395d57d70223a05"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "viva.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Berantas Ribuan Pinjol Ilegal, 702 Ribu Rekening Scam Diblokir dan Rp207 Miliar Dikembalikan - VIVA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1df358c79914abfa",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "32c5468cedd2e043"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jatimpos.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Budiono Desak Diskominfo Jatim Proaktif Tangani Pinjol Ilegal - JATIM POS online",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2013dea3b5e1f4ae",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "b4f527ed2a1951fc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "stockwatch.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Berantas Pinjol Ilegal dan Investasi Bodong, Dana Penipuan Rp825,2 Miliar Diblokir - StockWatch.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2a09d376ea02695f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "930d02da2d54df5c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "voi.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Laporan Pinjol Ilegal di Jatim Capai 3.244, Nomor Dua Setelah Jabar - VOI.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2ec609deff8e36ce",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "a961ba7c397319a2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "surabaya.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terima Laporan 3.244 Pinjol Ilegal di Jatim, Terbanyak Kedua Nasional - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-34c36d9f3366cb74",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "fdb6458e1b641370"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Akademisi Ingatkan Lingkaran Merah antara Judi Online dan Pinjol Ilegal - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-387845c7428e2360",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "d91f585709e1c766"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "idnfinancials.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Indonesia tangkap 17 WN Malaysia-Singapura terkait pinjol ilegal - IDNFinancials",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-387a65482712a5b4",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e1fda482982017ef"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "masakini.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Blokir 702 Ribu Rekening Terkait Penipuan, Dana Rp825,2 Miliar Diamankan - masakini.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-41a6c17e73b2a1a2",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "080c328a4a7520f6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kupang.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Undana dan OJK edukasi mahasiswa cegah Pinjol Ilegal dan Judi Online - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-44246382cd150d1d",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9728eb6f77240c7e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "aktual.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sikat 1.199 Pinjol Ilegal, Dana Penipuan Rp825.2 Miliar Diblokir - Aktual.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4b7ebe9aceb4dd1b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "1e86e0ab57ef4a2b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lentera.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ada 3.244 Aduan Pinjol Ilegal di Jatim, Wakil Ketua DPRD Desak Pengaduan Dikawal hingga Tuntas - Lentera.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d0e85f7a5f58a1c",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "59c71d9925f55d56"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Ilegal Ancam Ekonomi Keluarga, Kabupaten Bogor Tertinggi di Jawa Barat - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a1b062ebf703ec5",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "fcdab68bd7dc62f0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "economy.okezone.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5 Fakta Pinjol Ilegal hingga Investasi Bodong yang Masih Mengintai Masyarakat - economy.okezone.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b31e903b19ecef3",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "6d9da7be61c2b646"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bali.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Imigrasi Ngurah Rai Amankan 17 WNA Diduga Jalankan Pinjol Ilegal di Bali - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62162e417e92b8d9",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "baff2bc0302d0380"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "most1058fm.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terima 3.244 Aduan Pinjol Ilegal di Jatim hingga Agustus 2026 - MOST 1058",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6242ab1aa1522e46",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "80892b8f36f79029"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jatim.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK catat 3.244 laporan pinjol ilegal di Jawa Timur - Antara News jatim",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-78c68f6c5a32d86f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "8320fea00f179a1a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "KRITIK PERBANKAN HINGGA PINJOL ILEGAL DIHADAPAN OJK, DEDI MULYADI AJAK WARGA BENAHI KEUANGAN #kdm",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-79d8674e11ae07e7",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "aad47f5673f9f3ee"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "theiconomics.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas PASTI Sikat 330 Entitas dan Aktivitas Keuangan Ilegal, Paling Banyak Pinjol Ilegal - Iconomics",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8cebf39c92b1a29c",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "2c0237eba6ff6625"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detiknews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Jatim Terima 3.244 Laporan Pinjol Ilegal, Tertinggi Kedua Nasional - DetikNews.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8db99329a5c97003",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "7ee51089c5cb5287"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "1.199 Pinjol Ilegal Ditutup, Dana Rp 825,2 M Diblokir! - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-92ec7ebd5c3d156e",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "7f33852a9fc80c37"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kuningan.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Sampai Warga Desa Terjebak Pinjol Ilegal, Ini Pesan Wabup Kuningan di FinExpo BIK 2026 - Pikiran Rakyat Kuningan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9617f3863a5912f6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "b797dc94df8ad5a7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pewarta.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5 Fakta Pinjol Ilegal dan Investasi Bodong Ancam Warga RI, 702 Ribu Rekening Sudah Diblokir - PEWARTA",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9aed1764f34eea04",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "409c0e7098b0d29a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "17 Warga Malaysia-Singapura Bikin Markas Pinjol Ilegal di Vila Bali - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a243d2445ae88ad2",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "0fc609a08118f563"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "majalahfakta.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Imigrasi Ngurah Rai Bongkar Pinjol Ilegal dan Asusila oleh WNA - majalahfakta.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a2fdc4a4abd12385",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e652977bacc6f244"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "surabaya.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Jatim Terima 3.244 Laporan Pinjol Ilegal - Bisnis.com - Surabaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8c3acab5657a5b1",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "80780b369fb7cf61"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "partainasdem.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Julie Laiskodat Ingatkan Masyarakat Waspadai Pinjol Ilegal dan Judol - Partai NasDem",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b1a6d1ec823fd5e0",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "4b62ee48fe99a8f5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "idxchannel.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tindak 330 Kasus Pinjol Ilegal hingga Scam, Blokir 702.833 Rekening Senilai Rp825,2 Miliar - IDX Channel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b2b0f683d998ac3b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "a72472c495c9d256"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarlampung.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Data Pribadi Rentan Disalahgunakan Dalam Modus Pinjol Ilegal, OJK Merilis Langkah Penanganan Resminya - radarlampung.disway.id - Radar Lampung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6b2487984eafd37",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "82d183478b1be106"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "kepada pihak OJK, Perbankan dan Kemen Kominfo....pinjol ilegal mohon diberantas...sudah sangat meresahkan masyarakat.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c1cb231902c19381",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9b371807244e6de4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "3.244 Laporan Pinjol Ilegal di Jatim, Begini Cara Cek Legalitasnya - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c352d26abcdfc06a",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "7351755c83de8b12"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nasdemdprri.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Julie Laiskodat Minta Kepala Desa Aktif Cegah Judol dan Pinjol Ilegal - Fraksi Nasdem",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d5e7465a773a009b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e3d24a0974a5b49a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tempo.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas Pasti Blokir 241 Entitas Pinjol Ilegal - Tempo.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d7359c1faddb425e",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "1dcdd9420c72b7bf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tvscope.okezone.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dari Cepat Cash hingga Ayo Cepat Cair, Ini Daftar Nama Pinjol Ilegal yang Perlu Diwaspadai - tvscope.okezone.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d7b7e8242910a940",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "085153de15abf4a6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bandungoke.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Pengaduan Pinjol Ilegal di Jawa Barat Tertinggi Nasional, Bogor Terbanyak - BandungOKE",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d9a75e6d81891fa0",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e98ccb333d0f634b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Edukasi Pinjol Ilegal: Warga Desa DASEH Melek Hukum Halaman 1 - Kompasiana.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dbff4d3c3c2764ba",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "60606b0578169e9a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "chatnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cek NIK KTP di SLIK OJK untuk Mengetahui Pinjol Ilegal - ChatNews.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dcb2f4afba0324c9",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "8e18009160eb8271"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarcirebon.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Wabup Kuningan Tuti Andriani Ingatkan Bahaya Pinjol Ilegal, Masyarakat Desa Jadi Sasaran Edukasi - Radar Cirebon",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ea1e247451457dc6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "d2812b2d56ee3fa9",
            "896e3b22870a5e18"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "cnbcindonesia.com",
            "nl.headtopics.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap 1.199 Pinjol Ilegal hingga September 2026, Ini Modusnya - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f14bfbcbedcfeebb",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9965aa9942fd21df"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Warga Singapura Bikin Markas Pinjol Ilegal di Bali, Bunganya Mencekik - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f589eb0704934c41",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "8ea01168da7044b0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tutur.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Berantas Ribuan Pinjol Ilegal, Dana Korban Penipuan yang Dikembalikan Capai Rp207 Miliar - tutur.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-074e67a875048cc6",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "eec956ae15d21272"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang sehat slalu,,salam galbayers",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08ac008de7d1a006",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "fadf71737a9d8b2d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sya spinjam 29jt kredivo 3,5 jt tetap stay galbay, fc datang atau ngga hadapi aja dngn baik.. Klo fc datang barbar masa ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0bb69738df922b7b",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "06101fef7ce2c42f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya galbay KREDIVO 4 bulan di suruh bayar pokoknya saja,,, itu pun bisa di cicil",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-164cf3ce84e8a739",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "7ab997604c6dac23"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "INFO TERBARU NOVEMBER 2026! GALBAY 8 APLIKASI PINJOL! Easycash, GopayPinjam, Spinjam, Akulaku, Dll",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2c7f808e0218c8c8",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "125825cc33c3bb91"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SUHU GALBAY😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5f9d2d1415d461a6",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "9f4bbd486f5e6641"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gagal bayar atau menunggak utang pinjaman online (pinjol), baik yang legal terdaftar di OJK maupun ilegal, membawa berba",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9373008934cc4fa7",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "a1ceab69ab100c97"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Beliau pamer hutang mantap hidup galbay😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c0eda03602783842",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "d71d909d8bcf52a4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Anda kan skrg JD konten kreator masalah galbay otomatis anda skrg dapat penghasilan dr YouTube dapet duit knp gak diluna",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-016fe707927fa962",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9d2d70dc5e84fbf4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemaparan yang lugas, jelas dan sangat bisa dimengerti. New inspirasi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-031d75c8cd7cdc00",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b9509de2833fb77e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "KDM SENTIL OJK! Kritik Birokrasi Perbankan, Singgung Pinjol dan Bank Emok | iNews Terkini",
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
            "cc144be672c8ffac"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap😂😂😂😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-04e8b30e37d5e65b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4027dc4d29d17c9b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infoekonomi.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek NIK KTP Dipakai Utang Pinjol atau Tidak oleh Orang Lain - Info Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0637b56841ab0c44",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e282c2b57c42d0a6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jujur menilai, saat ini pemimpin yg paling paham kondisi desa hanya KDM.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c932a9fe6301483",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f4168c89f9c11fd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rapat Para Hantu! Ternyata Mereka Juga Takut Tagihan Pinjol. #shorts #hantulucu #hororkomedi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f9468b1c7f22bd2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3a76f071f54e3bfe"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "GK muncul bang ketik pinjaman dana cepat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-103410fd7be0ce56",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "62621fbbfcf0f820"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga berkah bang, terbaik pokonya mah paket lengkap🎉❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1045d95096e3f507",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4d4bb0e02c0389ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dukung kdm,tutup pinjol legal & ilegal di indonesia,OJK buka mata rakyat jd korban karena pinjol.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-104d2bd4a7fe481a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8f786c50b91a2e32"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gusnar Dorong Literasi Keuangan, Waspadai Pinjaman Online - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-107ed1d93437c4fd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a8de6780a47ddd30"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah, ortu abis sakit terus bingung, akhirnya pinjol, dimana2 bingung mau lunasin karena tenor nya beda2",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-12f4a63d3e771ee7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "568932aeaff01114"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "selular.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Akses Kredit Pertama Bagi Perempuan Melonjak 10 Kali Lipat - Selular.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-14bf4c2a8d320d08",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e0d544550a106a87"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ketika salah pilih pasangan, entah cewek atau cowok akan bikin pasangan stres😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-14dc28a0f02e1724",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "24bb13dc63e7dcfb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga bisa di bantu buat beli hp,hp sekarang Oppo a3s sudah lemot dan susah buat ngapa2in bismillah rezekinya melimpah ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-16413b23f645c1c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "08eb408f05be9288"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bukan nya di gopin kemaren 40jutaan?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-175cd5ff987a618e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0ece6ab657853c36"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Setop 330 Aktivitas Keuangan Ilegal, Termasuk 241 Pinjol - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-17bab3e689e37c09",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8eaa7a5ca1f7809c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bpbd.ntbprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Simak Cara Menonaktifkan Fitur Auto Debit Kredivo - BPBD NTB",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a1ded56f1d3ef50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f2e2a8cb307c4f24"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "divo uddah datang 2X😂... Tunda bayar Hampir 2bulan karena belum dapat kerjaan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a384498795bb3cf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "52d3f69ff8c5c0b6",
            "a3721d45f6ee69ea"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "id.headtopics.com",
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek KTP Kita Terdaftar di Pinjol Apa Saja? - Head Topics",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a616d1774d77a21",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "15fd3eb12aad2228"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pejabat yg tidak tutup mata, semua pejabat konoha tau fakta lapangan, tapi semua tutup mata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a6cfe078a7c90fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d0a560d0e97606f5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum sobat kt d fase akhir zaman pbnyk sedekah zikir istighfar dan sholawat Jibril ke utama nya AL ANFAL 33 A",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d79e3a373bcf16e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "171895eee03edb9d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Suami & mertua sama\" Iblis yg berwujud manusia ... menuntut boleh demi gengsi mertua yg SO ... Bagus mba suami di ksh pe",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1e39964756480348",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e13f106e85903e10"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Perluas Akses Kredit Perempuan, Pengguna untuk Modal Usaha Naik 15 Kali Lipat - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-202610f8778b20f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d2b497a9bf578dda"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Min,aku berhasil buat like kamu 1 rb🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2066e1d514ecc221",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "670af6c4a75c61ef"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabar24.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Putusan Dibatalkan PN Jakpus, KPPU Ajukan Kasasi Soal Bunga Pindar - Kabar24",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-239853c61ee9321a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e03bac653551ad8a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismililah semoga dpat ya allah untuk bayar cicilan motot yang nuggak❤❤🤲🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-23a989442871129d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f20891698f0001b6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KPPU Ajukan Kasasi atas Putusan Perkara Dugaan Kartel Bunga Pindar - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-23ad373cb6740f8a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c5709c738b15e91e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya istri gedek lihat ini,uang istri yg kepake buat kebutuhan rumah tangga adalah sodakoh,selagi kita lihat suami kerja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2414874f2f688ec6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "32ff62606f8eb9ca"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Suami dan mertua iblis, rampok. Tinggalkan saja. Bagus tegas.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24a57b1819f4d4ee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4e2fe640e53dfa9f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mengenal Fitur LazBon dan LazPaylater di Aplikasi Lazada - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-25e9830728c7cfa3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dfb99b395b492909"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Wah mantap bg saya berhasil habis minjem .... Pokok nya konten nya mantap deh... Semangat terus bg bikin kontem nya🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26160cdcd757f7c9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5bd110121f909188"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Efek ngutang semua karakter penting dalam game ini. Jake berhutang kepada para reternir dipimpin Tony. Lalu, Tyler nguta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26657fd21deec5eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "66532421a7d28d5e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bertuahpos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terapkan Asas Una Via dalam Penegakan Hukum Pasar Modal, Apa Itu? - BertuahPos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26c488fb134f0a15",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7bb7715148160e89"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udh bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26f4b0680cdcc05d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f3156262ee04e2d0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol Mudah Cair 2026 ke DANA - Cara Pinjam Uang Di Dana Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2707e2e3db923550",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d94869f1c5075898"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Puas banget liat istrinya gampar sekuat kuatnya di depan ibunya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-286e95e27444bd6c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "240fe1c5b817d8e5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah, semoga ada rezekinya buat berobat ortu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-28ce8cc0f2d72266",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f4a7adae6163bbf8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "November 26❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-297e61f32ed41354",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9f77297675a0eb9d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap Pak Dedi \nSering sering bahas ini ke publik biar Rakyat Indonesia cerdas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-29d27dbdb72d8470",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a56b0fbd57c70fc4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "[FULL] Dedi Mulyadi Pidato Gregetan Kejahatan Bank ke OJK, Ungkit Pinjol &amp; Bank Emok di Jabar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b6211c6040fe7de",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "92061a729922efb7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Orang yang kayak gini beneran ada lo, rela hemat maksimal + pinjol demi bisa pamer dan dapat validasi di tongkrongan dan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2c3e53c5521c64ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0836d90845ded58b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet buat bayar utang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2de7e4bd8a163d37",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "488ffacc7d3a752b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "informasi.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Imigrasi Amankan 17 Warga Malaysia dan Singapura Jalankan Bisnis Pinjol Khusus WNA di Bali - Informasi.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-30c42e396eb5c404",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fba4a3da32283a3e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yg rekomended dari aplikasi 8 itu yg mana yg, pinjam duit kah...?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-313a4bb00af9d008",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "73f1f7b5a3dea30f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga ya allh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-31b919fda3e5a699",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f705f9198036b400"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantaaaaapp,,😂😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3243c5056c6908c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d5b33acff8077f47"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Uang suami uangku.uangku bukan uang suami.hah..ada ga modelan istri kaya gini dunia nyata😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-347694f11105dbbf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b433a5e46047a99"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "kalo gw jdi ortunya gw usir and suruh bayar sendiri \n\nberani berbuat berani bertanggung jawab",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35ae0212a0a13cf6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4d2351c524a57cf3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah gak pernah dapet buat biyaya rawat sakit ibu 😢 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35eae52c1ed58d78",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4510d3ceedc0609b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Imigrasi Bali usut 17 WNA Malaysia-Singapura berbisnis pinjaman online - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35fd2447aca81039",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "899b80c56a2367a5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "borneonews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "BI Kalteng Minta Warga Cek Nama Merchant Sebelum Bayar Pakai QRIS - Borneonews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3733e06a3c1eddfb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f196d77688edef7b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "AKU NGUTANG PINJOL DAN DI KEJAR KEJAR RENTENIR.... Tyler&#39;s Deal",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3746e56a5d773e13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5c9e305ce7c7ea37"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-39130a6e5ea6d686",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2c868c6e17fc3bc2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Blm tau caranyA",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3a0d690dae7ed387",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "351f5e04a0c3a05c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "economy.okezone.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Aman Menghapus Data KTP dari Aplikasi Pinjol - economy.okezone.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3a63cfa8fb261ec8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1803c219baef1608"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah , Berkah selalu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3a81d2fe949d78bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1b33502ba5349cba"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Segera Cek KTP Anda Dipakai Pinjol atau Tidak, Begini Caranya - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ab24b4b07d382e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2a431e1a66567d55"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah rezeki anak kost, semoga dapat yaallah buat belanja bulanan dan buat bayar kost🤲🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ac96e424385848f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f58f0e32b106efd9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nomor HP Jadi Pengganti Skor Kredit Ajukan Pinjaman, Cek Syaratnya - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3b1ea803d6a0a9a3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d2aadc4d43057c2e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Beliau bicara sesuai fakta di negri ini 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d0a740898f0ffe1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1e628d759be173a8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah dri kecil sampai skrg usia 30, blum pernah ngutang smpe berjuta juta, paling besar juga 300rb itupun kepep",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3f0004c3bc3692b2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b4dbdc223c774bcc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pokoknya apa yang dikatakan pak KDM itu benar semuanya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3fb974a57865af3f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "334b7fe2bb6fbf80"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bro udah speedrun bunuh orang, kabur, dapet duit, kirain udah tamat, eh malah unlock achievement: UTANG NAIK LEVEL 😭🙏🏻💀",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ffb96665236a9dd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "90f676edee21fe31"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dih beban nya ngebeban bngt. Tega bngtt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45665eb0ca6829f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5b85b4e83f886cb2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemimpin yang bukan Nerima laporan asal bapak senang, tahu persoalan masyarakat bawah karena langsung turun ke lapangan.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45faedb6c7d9fb28",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "76c3ca11f9d9b3b1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kami kami selaku orangtua sangat berbahagya mendengarnya, sakit dan sekolah biyaya yg sangat melelahkan kami kami selaku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-478afc004b301a02",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7b297e14218caa42"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga sukses selalu dan diperbanyak rejekinya.\namin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48e61348161bd67c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3485c34ffb934735"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gue yg dengerin ni cerita, nguras tenaga dan emosi bangettt 😭😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4aa28ddba070b3d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "60281802432246d0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "balipost.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Berbisnis Pinjol, Belasan WNA Diamankan Imigrasi 1 - BALIPOST.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4ae7f77f76d9a2a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4f8818e6fd6d461e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tek.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hampir Separuh Penerima Kredit Pertama Kredivo Perempuan, Akses Modal Usaha Makin Terbuka - Tek.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4c0eab0794e7aee7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "056ba986bfed36e3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ekbisntb.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Melalui BIK 2026, Bank NTB Syariah Perang Melawan Pinjol dan Rentenir di Dompu - EkbisNTB.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4c42ed9e742ebb3d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "25a874cf03e508a5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sehat selalu bang,lancar teross ,semoga dapet buat ongkos kerja pake gojek aminnn.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4e56ebcf7d70fc0a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ba253e6848d9848b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sumpahh gedek banget aku jirr 😤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4f306f63521b27e8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e5f330cbd042739d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ntvnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tutup 1.199 Pinjol dan 250 Investasi Ilegal hingga September 2026 - NTVNews.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4ff96de42b8acb59",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "30c13fc555973710"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koran.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dedi Mulyadi Soroti Gaya Hidup Konsumtif dan Jeratan Pinjol - Pikiran Rakyat Koran",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-506971db1deed4f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "37f4c1540d7cd584"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "elshinta.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: 2,7 juta warga Jabar terindikasi main judi online - Elshinta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-507ee4de4b0075d2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1ac309ac3d42b5da"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Legal vs Ilegal: Ini Perbedaannya Menurut OJK dan Cara Mengecek Izinnya - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-51c6ef472bb3f943",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a8950f72bea288d5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sinata.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Peringatkan Gen Z: Terjerat Pinjol Bisa Bikin Susah Dapat Pekerjaan - SINATA.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-525655e534e94f2d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c7def74114713e36"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat  untuk beli lauk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53d84e99050648e2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "69303a7e5b294597"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah bismillah sudah..semoga dapet buat beli susu istri lagi hamil",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53f7b1a4a1157c43",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c988d3a8ce9b6279"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rentenir Kampung lebih Sadis dari Pinjol kaya gak ada Hukum 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-54166d6c8e09a9ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2c87a5f8ce28b1c1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mertua ga tau diri..ga bersyukur sdh d urusin menantu ..mending pergi kak jauh2 tinggalin kluarga bennalu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5445f03ad3443ea8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b3fd4e5cbe1d8f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga pesan yang begitu dalam  dari KDM dapat memnjadi titik awal kesaadaran para elit intelektual untuk dibukakan hati",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5642a4f5649c6c3c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2b81a46c82bcd798"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Bakal Atur Pinjol Sisihkan 5% Platform Fee, Ini Respons UKU - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-56cb42be66deb410",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4956ef9c6bacd8cf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap mba kepruk sekslian mertuamu sama suamimu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-582ee9fb63ba2bcc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3768bc5257cdfb8d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Episode berapa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-58a6000d6d7728a4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8a447fc6b2621d85"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritajatim.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tak Perlu Pakai Perantara, Ini Solusi Batalkan Pinjaman Kredivo - beritajatim.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5959d5a816c93c2f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "94d7b77795b0cfc9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pidatonnya berbobot membuka mata kita tentang dunia usaha indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b4c280236a47a7a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cccb5f95fb7aafb4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dasar mertu ma laki kurang ajar picek,bagus mbk tinggal aja 👍👍👍💪",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b76e6b4e4dfa293",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4019b8ffd500d3e2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang saya pencarian pinjaman dana cepat nya, ada bacaan (layanan yang di cari tidak ada)",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5db9de97f975f308",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "686523d0486db7d6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cianjurupdate.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Memutus Efek Domino Cianjur: Dari Petaka PINJOL, Perceraian, hingga Ancaman Generasi Putus Sekolah (ATS) - Cianjur Update",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e9e07536ab44e22",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "789c840f3c372a03"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pa Ogi Anti Hama &amp; Pinjol, Semua Serba Digembok!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5f18fe184b667d0d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dcf1cf2e5f5c73ef"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "menurutku ortunya kurang tegas\nharusnya disuruh tanggungjawab, biar tidak semena mena lagi, mentang2 ortunya have terus ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6121697065204058",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1ce8cab514c76887"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Anak kedua , sini ngumpul",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-64569ab99cb7aef0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e49c67039bb6be5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terima kasih atas semuanya...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-651cfc98243bc888",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "899a945a07c5f170"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OMG KAYA AKUU",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-654d604d5f91d0f0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2aaa29fdc9fd04af"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah,,, untuk tambah modal",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-656090b4e60ab4fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b13a91333d8cfaa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mertua, suami iblis,jahattt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-65c45c106d4f87c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5b2ab3cb58fbceb2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ko punya saya ga bisa bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-674a05d943e7c89d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b8226f251d2b09b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "12:32 anak kyk gini tuh nyusahin nya nyusahin bgttttt ya Allah semoga kakak yg cerita ini diberi rizky yg lancar,kekuata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-675eca74fc659841",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "092f5d1bcb284ddb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet buat kebutuhan sehari-hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-678a98de597db64c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "48a27106d6e4432b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kayonews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Akulaku Capital Kantongi Persetujuan OJK, Bank Neo Commerce Masuk Struktur Holding - kayonews.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-69695cc05268a62e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "509248a4ab76e752"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6980ea58e06b5a50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4ea62c0ec60e5abc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tvri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penandatanganan Pakta Integritas TVRI NTB Tegaskan Komitmen Tolak Judol, Pinjol, dan Narkoba - TVRI",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6986b43e80053ab9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2b3c4f31685302d7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "video.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dedi Mulyadi Skakmat OJK, Sebut Birokrasi Perbankan Indonesia Rumit hingga Singgung Pinjol - Tribun Video",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6a9367e90aef8afc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "169f6c5dcc6df972"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sikaaaaatttt....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6bc20c8715decec5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6e911f07e8093407"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "majalahict.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Meski Sudah Sering Diblokir, Mengapa Judol dan Pinjol Tak Kunjung Tuntas? Ini Solusinya - Majalah ICT",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7041c81db5394a33",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d2869abc315dae6a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kendaripos.fajar.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Vila di Bali Jadi Markas Pinjol Internasional, 15 WNA Malaysia dan 2 Singapura Ditangkap - kendaripos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-70d7453db5fe6b83",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5e7b2adc9d843df8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "lebih takut di tagih pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7415061034e9c305",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e8fa4eb66ce3274a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "liputan6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perencana Keuangan Ligwina Hananto Ungkap 2 Tipe Korban Pinjol - Liputan6.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-74f65d530aa47f77",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "097cca6a4d9d6a93"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Online: Kemudahan Akses Keuangan dan Risiko di Era Digital. - Kompasiana.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-75445a807ecf9bda",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "66950965a7e7bb30"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillaah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-758c26bdc5edf7a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e335f2b358b8d7bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ketagihan Pinjol Demi Crypto bikin keluarga gue hancur! 😭 #KelilitPinjolDemiCrypto #Animasi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-76227f954753f85d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c0342333e3efee99"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semua salah,..gak ada saling terbuka jd toxic semua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7651fbd9a6dfa147",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "79b8270fc1e864c2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ayo dedi mulyadi bisa menghapus pinjol bank emonk kalau bisa aman setidak nya Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-770e607624d68926",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f229cc8364792f39"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Good 👍🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-77eceb479f49ce9d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c62871eac6be7fbf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bisminlah semoga kalau rezeki aku dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-78cd98daa2fd2c48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6ed77adad756b4a6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Suami n mertua berjiwa iblis",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7a1be764066b6c51",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0af1774a25b6090f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "malutprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tutup Puncak Bulan Inklusi Keuangan 2026, Asisten I: 4.000 Mengantre KUR, Banyak Tak Lolos Karena Terjerat Pinjol - Pemprov Maluku Utara",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7ac86cf0806a3c4a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "366a674b8a25f9f0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "masalah ini lebih besar drpd soal yg heboh di layar kaca",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b1e324fece16654",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4f7b283b47086204"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung bang, butuh uang 3jt untuk ambil laptop kuliah yang rusak buat lanjutin tugas akhir 🥺🙏🏼",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7bae8367a138f01d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b8116e62165b62e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sangat mengedukasi...🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7bb2f046b917e762",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e7323de04836d7a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udah usir aja suami & mertua jahaat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7c8e3a31c78dbd79",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0b46f764e092a0cc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Download Kaspingo Sfile Apk Dana Cair Pinjaman Online, Apakah Kaspin Go Aman? Ini Review Pinjol Kredit Kaya - Berita DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7df8a875d0598835",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f55e4e501800020c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7e682e8637b4064f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6f1e307da1bddeba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bingung mau komen apa. Tp kasihan jga suaminya ke pressure jadinya pinjol.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7eef144c0389eea6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "67f33f81142663b6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nyindir di depan mafia nya langsung... Menyala kg dedi😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-818f0506c265c678",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f575101dccb2874c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jabar.jpnn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Literasi Keuangan Masyarakat Jabar Jadi Sorotan di FinExpo 2026 - JPNN.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-838ce54e255f3418",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "124ebb0e1bb5d5ec"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga ane dpat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-83fb5c1eb22c8358",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "439b8aac4a4b8486"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Neroko golek isi😄😄😄😄🤣🤣🤣🤣🤣🤣🤣jahanam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-85269fabeb740d95",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "72e0ef9a2f901522"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar 94 Pinjol Legal OJK Terbaru 2026: Cek Syarat Pengajuan, Cepat Cair! - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-86e03eca745542a6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b0fd60c2cd4b5ffc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pidato tanpa teks tapi bebobit semua mantap bp dedi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8ab6ecf3fa5630f3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "15dbf0ec87f6eb9b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bpbd.ntbprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tips Cara Membatalkan Pinjaman Kredivo - BPBD NTB",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8ba0b8e0f2db7e8e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f350981c1a152e41"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bpbd.ntbprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Melakukan Pembayaran Tagihan di Adakami - BPBD NTB",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8d1a7fe26f0e4767",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "05ac220f187537b0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aamiin ya robbal aalamiin🤲🤲\nHadir menyimak kang singgih",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8d1c3da139129376",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1d4f3c750d013901"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga dapet buat biyaya sekolah adik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-91332f751320c6f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2cc53c93a9ac532c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KDM Ajak Warga Jabar Bijak Kelola Keuangan, Hindari Judol dan Pinjol - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-915783141cc0a6e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7c88cf42c75d89fb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "theopini.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Inklusi Keuangan Gorontalo Tembus 95 Persen, Gusnar Ingatkan Risiko Pinjaman Online - the OPINI",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-92d78b9f3d73bd0c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8aebb58e112b66f9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Judol dan Pinjol, Karutan Singkil Periksa Ponsel Pegawai - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-93194087534d9ef8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "544ce304d1c1fcad"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "absen smoga beruntung buat kebutuhan anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-936de50ebfcb57cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "36ebb977e4537eb5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Oke manthap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-93efbe90d78a7f11",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "59fdbed74f883182"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat bayar utang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-94a380e49b7098ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6bb940f22d0e31b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pas lihat ini greget parah si\nKenapa ditolongin gitu. Memberikan pelajaran ke orang kayak gitu tuh bukan dengan cara dib",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-985322c417e5d1df",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "50f646bb5983e28c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya ampuun kak kamu jahat banget siiih",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-990a413597a24b0b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4b554bf8c67505f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bissmillah semoga memang ada rezekynya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9adcff7524ab3906",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "07f6fc7a29642dc3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "humaspolreskh.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Judi Online dan Pinjaman Online Ilegal, Polsek Mentebah Laksanakan Pengecekan Handphone Anggota - https://www.humaspolreskh.com/",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9afa7f71f69c8b09",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "729b27dccc38f6a2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Otoritas Jasa Keuangan Serahkan Hasil Telusur Dana DSI ke Bareskrim - Katadata.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9bafd21045f9d91b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5b88aa0f27c95a40"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "[FULL] Pidato Jitu KDM di Depan OJK! Warga Harus Pintar Keuangan, Jangan Terjebak Pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c0c9e28ee3dc91d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b21e1425bccf886"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagus tindakan menantu itu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9db2af863cf23e34",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "64fa9dde502e5f45"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sy kalo liat channel itu ngakak 😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9de3c3d36212d653",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f095664f1f209c17"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Endingnya menyenangkan min❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9e63cafe4920e952",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0af439f8282a7886"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hanya karena utang, semua menjadi kacau dan terus terulang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9f38c1c0980ac2a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "78975f75bb9b3378"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "absen bg semoga sy beruntung lgi butuh\" nya bg terimakasihh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9fa662e378e7f192",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cfb8d3a86b4f3015"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK oooh OJK begitu besar dosa dosamu terhadap rakyat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a0244ee3b505b5c5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a20876cb04ff3403"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "subhanallah sukses sllu kak\nsmga terpilih dapet give away buat tambah\" beli keperluan lamaran\nkarna hidup cuma dengan si",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a0fb5aef0d99a490",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "657a38706af9f899"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar CICIL Fokus Pembiayaan Produktif, Sudah Salurkan Rp3 Triliun - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a15e15b7c74a6880",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2e87e7eaec9826f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet buat kbtuhan sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a18545f1aff39cab",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e9d52b1c89a40f76"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "INTINYA JANGAN BERUTANG APALAGI KALO GA SANGGUP BAYAR😢😢, SERU GAMENYA BANG😍😍😘",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1cbaabe69636976",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "534cc6a141d40435"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Siapkan Skema Dana Cadangan 5% bagi Pinjol, UKU Sambut Positif Rencana Aturan - Warta Ekonomi",
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
            "7af803a5bee534f9",
            "da67db06528c2cdf",
            "5f72d5b5f8916dcd",
            "f76cdfca82d1cf51"
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
          "id": "auto-a2c6befd9f888363",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "60476ed7ee2658de",
            "d63f726f3fc9e0ea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTE",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a54c34e9592a9041",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cca390f3f5ddb15a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bahas modal nasional bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a5b7e3dabb57cf7a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4968e66d2938b01e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ketagihan Pinjol Buat Crypto Sampe Rungkad?! | Animasi Kisah Nyata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a7ec1b48853a1f50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "be812e3cab00fb94",
            "1963db40dc817c53",
            "39db4880c5422958",
            "d86841790ee4c862"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah yallah semoga menang buat bayaran rumah udah 2 bulan belom bayar bank btn udah ngancam dan katakata tidak enak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8c3df81339aeafe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "516363f263af8c0c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah dapet dana kaget",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8cb76f60c5c6692",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b301bd229eb888cb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nggak takut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a9a82d13d3b2bef2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "096bc645ba4fd3ae"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pinjol hrs dianggap ilegal dan pidana, sprti narkoba...Jenderal Suyudi wajib bergerak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a9a890b2d1112eec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c335e941187bd361"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet buat nyambung makan sampe gajian",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a9dae417a34c6aa6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "77f734c89ce58de7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK: Otoritas JOKI keuangan!.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aa0411246ffe6a90",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0b71902ebb365009"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya ngak muncul",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aa08dab4b0c5125a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cba2ca0af94b07c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah smoga dapat jga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aaa081e72d50496f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cb9975e9f0053cfb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kapol.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KDM Ajak Warga Jabar Bijak Kelola Keuangan, Jangan Terjebak Pinjol dan Judol - KAPOL.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aab181661fa2296c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dfbeca6b05b7bcf2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "istrinya GK mau rugi,trus selalu su'udzon kl suami macem² pdhl dia hrsnya bisa lihat perjuangan suaminya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aaf9391db7875f07",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b1b1fb2759009dda"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillahhh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-abcb05ebf779a51b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9434f12ed91b4725"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collector Tarik Kendaraan di Jalanan Boleh atau Tidak? Begini Penjelasan APJAPI - Pikiran-Rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-acd4f293f6551e96",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "84e84172152b5c02"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini cara OJK nangkap orang2 yang mereka gak tahu main apa aja di market. Cerdas caranya, suruh lapor sendiri. Tinggal ta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-adb8915420e481c9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6b6091173adadc0e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "biroadpim.jabarprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gubernur KDM Ajak Masyarakat Jabar Lawan Judol dan Pinjol - Biro Adpim Jabar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ae4e2a4e9443de07",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b0ce0494bd3d339e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "very true...Bravo..well said KDM 👏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-af8bd5b2d5fbe595",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a8bc952b4b155acb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DATA BUSUK PADA CAIR?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b02278543c7c7b57",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "14ef0cd5705bbd11"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Suami letoy....huaaaa😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b13c0ea15587743a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b2d1bc1af4b64e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Oke",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b1d0fc7529b57f58",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c5d6c4abb4379b2f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nusabali.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Imigrasi Gerebek Markas Pinjaman Online di Dalung, 17 WNA Diamankan - NUSABALI.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b21a3bfe3a09ac73",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "48e5cf8f7e1f524a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tinggalin suami seperti itu  apalagi mertua tak tau diri😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b2c1a9a7525579a6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "534f1e45b4808cb2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "yang bunga 60% per tahun lebih dicari karna gampang daripada yg 12% per tahun yg butuh jaminan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b2ee897a5e437bfc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c4ebc360bff7bc54"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini baru ada pejabat yg blak2kan membuka buruknya pejabat jaman dulu. \nIni baru Reformasi sebenarnya di negri ini mantap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b33ae65082f8e603",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "58d44b57aa9d14ad"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap sangat mengedukasi dan juga sangat mengingatkan kita pentingnya selalu bayar hutang ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b370048814b7f983",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a0eec3fdf7a7efee"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Apa2 tunggu uang suami,,suami ud stres..anak mint sepatu nunggu gaji suami pdhal uangnya ada",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b3cbec93c285eb2c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4ac8e834ebb83f3e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "klian klo mau main crypto atau sgla macem pahami lebih dalam dulu deh anjir😀😀",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b3e18d884e7fae25",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1dc98323ccf968e4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum bang mff aku baru komen liat abang orang baik jadi pingin minta bantuan ke abang🙏🏻aku pingin minta bantu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b462698c41008498",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "53bb60f28df8ad76"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Keren...ngomongnya fakta dan kebenaran di lapangan.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6812c28d42792eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8d326b42dd31ed5f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bpbd.ntbprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tips Cara Membatalkan Pinjaman Kredit Pintar - BPBD NTB",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b7f49bc944a1306b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9b9375ff91595b5f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Amin bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b83965f758dbdaa2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fe0a07c6c10a5db6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Beneran kalo yg belum prnh jgn coba2 pinjol yg tadinya kita anggap ringan laama2 sangatlah berat benr kata abang tutup l",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b8e05070b6235448",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "41aa6cff6a7bf415"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kok dengerinnya jadi dongkol banget ya \nPengen nge gampar istrinya\nIstri DAJJAL sih ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bad33180abb4f0b5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "03f4b3a2937fc4aa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gokepri.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sikat 11 Gadai Ilegal dan Ratusan Pinjol Penipu - gokepri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bb3d68f847d824f8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ee9c8fc3c3698c8e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Baru kmrn di datangin DC aku laku bang daerah Jateng Purwodadi DC nya sopan pake bahasa Krama,,di kasih potongan juga ba",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bb7177ae62d2ba69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8258c92b9516fb17"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya moga aja dapet lah GK ngarep dapet jg si tapi moga aja lah dapet 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bb90ef3fe81412c8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "540a1ffbd148a53c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Suaminya kelilit pinjol itu gegara istrinya kikir",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bbb02b08048b04a2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d3d191a2f797b07a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kupang.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gandeng OJK Beri Edukasi Keuangan, Julie Laiskodat Minta Masyarakat Jangan Tertipu Pinjol - Pos-kupang.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bc700d4b6fd4fe48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3af54c98c81fff7b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK g berani berantas bank gelap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bc85eebbddedee76",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e7529fe09aa1d44"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapat buat berobat anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bca13578a73ebd9b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "789ace18485ed19a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😂😂😂😂\nAsli jujur banget ini ucapan Gubernur Jawa Barat, Emang Fakta nya seperti itu kenyataan di Lapangan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bcf6ad0e5c385398",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "170fc0c119bc0e83"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol mencekik leher.....bunga sangat tinggi banget...pemetintah perlu membuat aturan limit bunga hutang...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be29ab58c0ff2722",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8a83ce6493aa54d0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah semoga pak KDM bisa membasmi virus dan bakteri pinjaman mengsengsarakan rakyat Aamin YRA...🤲🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bf696228e7203c2a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "deb80c23686acf73"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "JOS JIS KAK",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bf9ed24e951747bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c7ecac66b603372b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Itu benar dan sesuai realita di negara Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c1743016e9f096f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aa4711da9923c968"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "saking gregetnya sampe gua gigit tangan anjirr, amit amit ketemu orang kayak gtu. buat mba nya kamu hebat, sekrang janga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c22b783563819602",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "694b8e7ccfa6d1ef"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "lg butuh banget",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c3873468dbceb2ac",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "de67c86ce11adb0e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nasionalnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Adapundi Ajak UMKM Solo Bijak Memanfaatkan Pinjaman Daring Melalui Literasi Keuangan - NasionalNews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c3c5112d46ea0138",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2bc1a0349fac5379"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "hukumonline.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Putusan Bunga Pinjol Denda Rp755 Miliar Dibatalkan PN Jakpus, KPPU Siapkan Kasasi - Hukumonline",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c56e038f13f4088d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "50f721e5f29ae868"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah baarokalloh tabarakallah 🤲🤲🤲 \nBapak Aing KDM...bicara sesuai hati,pengetahuan dan realistis...saya sebagai",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c6d12bdce7a38a55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8b7435b614a251e3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😂betul mbak mertua suami sama saja.kluar saja masih banyak tempat nyaman yg diluar😂😂😂😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c82b07cbeb997790",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0e3225d97fd783a6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koran-jakarta.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gubernur Jabar Prihatin Banyak Warganya Terjerat Pinjol dan Judol - Koran Jakarta ®",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c889684477986fe9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "915b19a6185a4fd4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "INNALILAHI, Akhir Hidup Tragis Si Penebar Pinjol | Aini Malaikat Tak Bersayap Eps 6 FULL",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c996c3ff6e2838b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ba696ae061e561c5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo catat 48 persen perempuan dapat akses kredit produktif - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cac8e214182d618c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c479f89efb8112e4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bpbd.ntbprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "(SIMAK) Paduan Resmi! Cara Hapus Data Akun Kredit Pintar? - BPBD NTB",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cb0d9b994fa37ec8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d620aff73c413731"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Fakta Banget apa yg diomongin KDM...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd258bed331d7b37",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e6538207a032b439"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kasian yang jadi anak ke 2 ya💔",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cdda22d208188b37",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3055cb923c788f1f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompas.tv"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bagaimana Judol dan Pinjol Bisa Menyeret ke Lingkaran Utang hingga Kriminalitas? - Kompas.tv",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce16514e0fcbc373",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "20a62b02b9fd8edf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Diam-diam Suamiku Kelilit Pinjol, Padahal Penghasilanku banyak #shorts",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce4df0f736a1dc4d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9889d9b0139e346d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah udah lunas pinjol kemarin akulaku bayar semuanya pas gajian😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cea915d1fd00ed0c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "df06d23f7a77b471"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kangen sama Aeni",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf00da43650829ca",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "19565081fe7dede9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bini apaan coba hum....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf42e9996fbf8779",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "997dca681cff8349"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi Catat Hampir Separuh Pengakses Kredit Pertama Kredivo Perempuan - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0c9f8a009a09642",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d15047190e7528a2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "dengerin ampe akhir gais dia ngedumel \"PINJAL PINJOL PINJAL PINJOL\"😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d14e9f29077c63ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8efd3a6e4e9fbd4c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ingatkan Gen Z Waspada Risiko Pinjol dan Pay Later - Media Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d177097ccf011e84",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c5dc8075d48ed998"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol sekarang diakui oleh Negara lewat OJK, usul mohon di hapuskan jangan di beri Izin, termasuk JUDOL Harus di hapusk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d258bdeaa245833d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c30b6210ea8ba9f7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tekno.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Link dan Cara Cek NIK yang Diam-diam Dipakai Pinjol dan Judol - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d2b04ccb33d91696",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "edca54159a72c739"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perencana Keuangan Ungkap Dua Tipe Korban Pinjol, Paling Bahaya 'Kemakan' Gengsi! - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d314251dc95c5a7b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "68865c8742915e0d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sudah jelas & pasti NIK sudah tersebar kemana2, semua customer service di bank2 minta ktp kita utk urus berbagai validas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d3d763f7edc57658",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b04e3bf05a116529"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Haduhh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d5c9fea8dd41014a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "495b64602e99a5c5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Top emg kang Deddy ❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d66949777aadcd4e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f7df68375b82ced2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tutup aja semua bank keliling",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d76d3ef651644d38",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ff498dd6048bb88c",
            "a9ac4c935c71a05e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d8497b67e8acfbff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6700d748c5b59a3e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "betul, itulah kenapa rakyat kecil terpaksa memilih pinjam di bank2 ilagal, karena peraturan dan birokrasi bank2 legal di",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d88415910b91e02f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c8443f575d08d608"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "afu.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jalankan Bisnis Pinjol di Vila Sewaan, 17 WNA Malaysia-Singapura Ditangkap Imigrasi Bali - AFU.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d88c897b01a20b51",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e69dfef89fbf2c2a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Maaf apa boleh suami dan ibu mertua di BUANG ke tmpat sampah, sungguh g berMORALLL....🙏🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d98c84d48e1f01ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "94a7446260d6bf03"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Smoga dapet. Kalau dpt buat tambahan ngelamar si doi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d9d53cce8bcbbc9a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "18da19796d964d1a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ya Allah semoga dapet buat kebutuhan sekolah🤲🏻🤲🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db76b764bd096909",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d3daedf5a6b6bfa9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sdh jelas OJK MAFIA",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ddfff0d6494d481c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f1489c4d431209bf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap a Singgih bahas juga tentang pi joy a",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e1aadcbb206819b9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9d78e733298f762d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Banyak mencoba sedikit belajar X",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e2a5618ccf8654e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b0bba4acf1fc718e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "KDM peminpin cerdas tegas tepat apa yg di kata kn👍👍👍",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e357dfb029036e4d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3b3d8548def52b14"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yeyy",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3b1ec90c85db740",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fd29603a1c2fbd96"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Si ibu mertua emasnya kayak toko emas saja di tubuhnya, padahal semua nya dibeli dari hasil pinjol,  benar 2 memalukan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3ed9389de9028a0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f0f50f12f8c7744a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "economy.okezone.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ini Perbedaan Paylater dan Pinjol, dari Cara Kerja dan Dampaknya - Okezone.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e479b6fa6e870ef8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2e8aa1abf9d1a3d3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gubernur Jabar Sayangkan Banyak Warganya Terjerat Pinjol dan Judol - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e8b3aac5bce34e55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f6ae85872afae28c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buset, hampir lunas semua bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eed2164353a22730",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ed637e0cca6a24ef"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DIKIRA PELIT, TERNYATA SUAMI HUTANG PINJOL DEMI GENGSI IBUNYA! 💸😡 #shorts",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-efa81ed5e8234ea1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f277242d63977559"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KDM Ajak Warga Jabar Hindari Judol dan Pinjol - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f0f01af4c9b0dec1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e6838266b406c764"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Istri nya jahat juga ya😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f117dee5f174a728",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "97dc635190b020ae"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bandung.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KDM Dorong Perlindungan Pendidikan dan Kesehatan agar Warga Tak Terjerat Pinjol - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f357174d4817fc09",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "494ca5a78d78b340"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "08:07  aku ngomong kepada keluarga dan jujur malah di caci maki bang, keluargaku enggak seperti yang lain. kesesatanku k",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f66cfdc9b5512e57",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b7d934f3222cadd8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga berjodoh.. butuh utk nambah modal usaha",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f85724505e7dce25",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c103bda36d83529f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah bng dpt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fa2ef6f0326e2bc4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "80638fe3a6ac22b9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "WOW Game ini mengajarkan kita jangan berhutang ke siapapun jika tidak siap menanggung resiko nya, jika berhutang kita ha",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fae08e4edcda3bcc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4a7a6d131cd071e5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Smpe  gojek. Padhl istrinya gaji 2 digit",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc237c146d99f640",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0634bf3169a167b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga menang ...sangat butuh hari ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe67d9c1adc4afcd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7d3e2a24f26ee66e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "heleh taekkk endingnya nyari duit juga dikira ngurus gitu gratis",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ff35503671fdf3c7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bbf1051901776ae5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah bang buat beli pulsa listrik bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-04926fc07327ad67",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "7229c1ae27ea0b9b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "surabaya.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan P2P Lending di Jatim Tumbuh 13,26%, OJK Minta Lender Cermat Hitung Risiko - Bisnis.com - Surabaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5234b85579b208d9",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "1dd76f4634e4e4d7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tutur.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Digital Tumbuh Pesat, OJK Ingatkan Risiko BNPL dan Pinjaman Daring - tutur.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "f350981c1a152e41",
        "9434f12ed91b4725",
        "4510d3ceedc0609b",
        "c30b6210ea8ba9f7",
        "056ba986bfed36e3",
        "4e2fe640e53dfa9f",
        "2b81a46c82bcd798",
        "534cc6a141d40435",
        "1dd76f4634e4e4d7",
        "997dca681cff8349",
        "4caf213e7679cd91",
        "080c328a4a7520f6",
        "c479f89efb8112e4",
        "7ee51089c5cb5287",
        "409c0e7098b0d29a",
        "899b80c56a2367a5",
        "60281802432246d0",
        "32c5468cedd2e043",
        "1dcdd9420c72b7bf",
        "488ffacc7d3a752b",
        "c5d6c4abb4379b2f",
        "6d9da7be61c2b646",
        "d91f585709e1c766",
        "80780b369fb7cf61",
        "ba696ae061e561c5",
        "930d02da2d54df5c",
        "b4f527ed2a1951fc",
        "3395d57d70223a05",
        "8ea01168da7044b0",
        "e1fda482982017ef",
        "6b1935e6c2c2efb9",
        "9f5924aba34bb1bb",
        "d3aab98fab82b4ba",
        "d2607703719140a3",
        "f73ec4569d558514",
        "d98c0c9067d12de2",
        "8efd3a6e4e9fbd4c",
        "e652977bacc6f244",
        "0ece6ab657853c36",
        "9728eb6f77240c7e",
        "03f4b3a2937fc4aa",
        "baff2bc0302d0380",
        "a961ba7c397319a2",
        "4b62ee48fe99a8f5",
        "e5f330cbd042739d",
        "d2812b2d56ee3fa9",
        "896e3b22870a5e18",
        "80892b8f36f79029",
        "e3d24a0974a5b49a",
        "8eaa7a5ca1f7809c",
        "d2869abc315dae6a",
        "9965aa9942fd21df",
        "9b371807244e6de4",
        "de67c86ce11adb0e",
        "80cdad941da43407",
        "0fc609a08118f563",
        "c8443f575d08d608",
        "7351755c83de8b12",
        "097cca6a4d9d6a93",
        "670af6c4a75c61ef",
        "aad47f5673f9f3ee",
        "8a447fc6b2621d85",
        "190b0a08283bb129",
        "1e86e0ab57ef4a2b",
        "48a27106d6e4432b",
        "4027dc4d29d17c9b",
        "07f6fc7a29642dc3",
        "30c13fc555973710",
        "e98ccb333d0f634b",
        "d3d191a2f797b07a",
        "6b6091173adadc0e",
        "97dc635190b020ae",
        "686523d0486db7d6",
        "2c0237eba6ff6625",
        "2bc1a0349fac5379",
        "8e18009160eb8271",
        "fdb6458e1b641370",
        "3055cb923c788f1f",
        "52d3f69ff8c5c0b6",
        "a3721d45f6ee69ea",
        "2e8aa1abf9d1a3d3",
        "4f8818e6fd6d461e",
        "7f33852a9fc80c37",
        "cb9975e9f0053cfb",
        "f20891698f0001b6",
        "f575101dccb2874c",
        "a8950f72bea288d5",
        "729b27dccc38f6a2",
        "7229c1ae27ea0b9b",
        "657a38706af9f899",
        "59c71d9925f55d56",
        "f7a19fc38d23ae7b",
        "fcdab68bd7dc62f0",
        "568932aeaff01114",
        "8aebb58e112b66f9",
        "60606b0578169e9a",
        "a72472c495c9d256",
        "2b3c4f31685302d7",
        "f8b2f59c2758aa37",
        "0e3225d97fd783a6",
        "2cc53c93a9ac532c",
        "f277242d63977559",
        "e13f106e85903e10",
        "f58f0e32b106efd9",
        "37f4c1540d7cd584",
        "085153de15abf4a6",
        "4ea62c0ec60e5abc",
        "e8fa4eb66ce3274a",
        "edca54159a72c739",
        "1b33502ba5349cba",
        "8d326b42dd31ed5f",
        "b797dc94df8ad5a7",
        "351f5e04a0c3a05c",
        "72e0ef9a2f901522",
        "0b46f764e092a0cc",
        "7e1fe9136bc5074d",
        "8f786c50b91a2e32",
        "f0f50f12f8c7744a",
        "7c88cf42c75d89fb",
        "6e911f07e8093407",
        "66532421a7d28d5e",
        "1ac309ac3d42b5da",
        "15dbf0ec87f6eb9b",
        "0af1774a25b6090f"
      ],
      "socialItemIds": [
        "9b9375ff91595b5f",
        "9e7529fe09aa1d44",
        "7af803a5bee534f9",
        "59fdbed74f883182",
        "4d2351c524a57cf3",
        "2e87e7eaec9826f8",
        "cba2ca0af94b07c0",
        "240fe1c5b817d8e5",
        "f095664f1f209c17",
        "f229cc8364792f39",
        "84e84172152b5c02",
        "58d44b57aa9d14ad",
        "92061a729922efb7",
        "124ebb0e1bb5d5ec",
        "b7d934f3222cadd8",
        "62621fbbfcf0f820",
        "4f7b283b47086204",
        "c335e941187bd361",
        "94a7446260d6bf03",
        "9e49c67039bb6be5",
        "dfb99b395b492909",
        "3b3d8548def52b14",
        "f55e4e501800020c",
        "2a431e1a66567d55",
        "7d3e2a24f26ee66e",
        "f196d77688edef7b",
        "334b7fe2bb6fbf80",
        "a8bc952b4b155acb",
        "ed637e0cca6a24ef",
        "5bd110121f909188",
        "9f4bbd486f5e6641",
        "ff498dd6048bb88c",
        "a9ac4c935c71a05e",
        "0af439f8282a7886",
        "e9d52b1c89a40f76",
        "5b2ab3cb58fbceb2",
        "4956ef9c6bacd8cf",
        "60476ed7ee2658de",
        "2b13a91333d8cfaa",
        "d94869f1c5075898",
        "092f5d1bcb284ddb",
        "fd29603a1c2fbd96",
        "169f6c5dcc6df972",
        "171895eee03edb9d",
        "6ed77adad756b4a6",
        "68865c8742915e0d",
        "9e7323de04836d7a",
        "80638fe3a6ac22b9",
        "544ce304d1c1fcad",
        "b1b1fb2759009dda",
        "5c9e305ce7c7ea37",
        "2c87a5f8ce28b1c1",
        "25a874cf03e508a5",
        "1d4f3c750d013901",
        "18da19796d964d1a",
        "8b7435b614a251e3",
        "1b21e1425bccf886",
        "66950965a7e7bb30",
        "c7def74114713e36",
        "be812e3cab00fb94",
        "1963db40dc817c53",
        "39db4880c5422958",
        "d86841790ee4c862",
        "509248a4ab76e752",
        "4b554bf8c67505f8",
        "cccb5f95fb7aafb4",
        "e69dfef89fbf2c2a",
        "d63f726f3fc9e0ea",
        "36ebb977e4537eb5",
        "789c840f3c372a03",
        "9d2d70dc5e84fbf4",
        "f3156262ee04e2d0",
        "32ff62606f8eb9ca",
        "f2e2a8cb307c4f24",
        "a20876cb04ff3403",
        "494ca5a78d78b340",
        "69303a7e5b294597",
        "1dc98323ccf968e4",
        "d0a560d0e97606f5",
        "1803c219baef1608",
        "516363f263af8c0c",
        "da67db06528c2cdf",
        "bbf1051901776ae5",
        "2aaa29fdc9fd04af",
        "2c868c6e17fc3bc2",
        "3485c34ffb934735",
        "deb80c23686acf73",
        "8320fea00f179a1a",
        "4968e66d2938b01e",
        "170fc0c119bc0e83",
        "b8116e62165b62e0",
        "0634bf3169a167b5",
        "73f1f7b5a3dea30f",
        "7bb7715148160e89",
        "5b88aa0f27c95a40",
        "5f72d5b5f8916dcd",
        "d15047190e7528a2",
        "1b433a5e46047a99",
        "4ac8e834ebb83f3e",
        "dcf1cf2e5f5c73ef",
        "50f721e5f29ae868",
        "8a83ce6493aa54d0",
        "1ce8cab514c76887",
        "79b8270fc1e864c2",
        "9d78e733298f762d",
        "c103bda36d83529f",
        "c62871eac6be7fbf",
        "90f676edee21fe31",
        "3a76f071f54e3bfe",
        "b04e3bf05a116529",
        "915b19a6185a4fd4",
        "76c3ca11f9d9b3b1",
        "e6538207a032b439",
        "e335f2b358b8d7bb",
        "35da8ca202b28004",
        "d2b497a9bf578dda",
        "77f734c89ce58de7",
        "899a945a07c5f170",
        "1b2d1bc1af4b64e0",
        "c5dc8075d48ed998",
        "0b71902ebb365009",
        "495b64602e99a5c5",
        "8258c92b9516fb17",
        "a56b0fbd57c70fc4",
        "78975f75bb9b3378",
        "a8de6780a47ddd30",
        "82d183478b1be106",
        "5e7b2adc9d843df8",
        "366a674b8a25f9f0",
        "94d7b77795b0cfc9",
        "096bc645ba4fd3ae",
        "aa4711da9923c968",
        "1b8226f251d2b09b",
        "a0eec3fdf7a7efee",
        "6505b3075fb8c7e6",
        "6f1e307da1bddeba",
        "19565081fe7dede9",
        "e03bac653551ad8a",
        "20a62b02b9fd8edf",
        "3768bc5257cdfb8d",
        "e0d544550a106a87",
        "41aa6cff6a7bf415",
        "f705f9198036b400",
        "8f4168c89f9c11fd",
        "c988d3a8ce9b6279",
        "c5709c738b15e91e",
        "0836d90845ded58b",
        "ba253e6848d9848b",
        "48e5cf8f7e1f524a",
        "50f646bb5983e28c",
        "f76cdfca82d1cf51",
        "694b8e7ccfa6d1ef",
        "05ac220f187537b0",
        "1e628d759be173a8",
        "9889d9b0139e346d",
        "d71d909d8bcf52a4",
        "eec956ae15d21272",
        "ee9c8fc3c3698c8e",
        "d2aadc4d43057c2e",
        "a1ceab69ab100c97",
        "fe0a07c6c10a5db6",
        "08eb408f05be9288",
        "f6ae85872afae28c",
        "4d4bb0e02c0389ce",
        "d620aff73c413731",
        "7ab997604c6dac23",
        "c4ebc360bff7bc54",
        "e6838266b406c764",
        "c7ecac66b603372b",
        "e282c2b57c42d0a6",
        "b9509de2833fb77e",
        "b0bba4acf1fc718e",
        "df06d23f7a77b471",
        "53bb60f28df8ad76",
        "9f77297675a0eb9d",
        "f1489c4d431209bf",
        "cc144be672c8ffac",
        "439b8aac4a4b8486",
        "b301bd229eb888cb",
        "f4a7adae6163bbf8",
        "67f33f81142663b6",
        "3af54c98c81fff7b",
        "cfb8d3a86b4f3015",
        "6bb940f22d0e31b5",
        "15fd3eb12aad2228",
        "5b85b4e83f886cb2",
        "b0fd60c2cd4b5ffc",
        "b4dbdc223c774bcc",
        "125825cc33c3bb91",
        "06101fef7ce2c42f",
        "d3daedf5a6b6bfa9",
        "24bb13dc63e7dcfb",
        "c0342333e3efee99",
        "4a7a6d131cd071e5",
        "14ef0cd5705bbd11",
        "540a1ffbd148a53c",
        "64fa9dde502e5f45",
        "fadf71737a9d8b2d",
        "f7df68375b82ced2",
        "d5b33acff8077f47",
        "fba4a3da32283a3e",
        "cca390f3f5ddb15a",
        "4019b8ffd500d3e2",
        "6700d748c5b59a3e",
        "7b297e14218caa42",
        "dfbeca6b05b7bcf2",
        "2b3fd4e5cbe1d8f8",
        "b0ce0494bd3d339e",
        "534f1e45b4808cb2",
        "789ace18485ed19a"
      ],
      "_newsVolumeRaw": 124,
      "_socialVolumeRaw": 313.0
    }
  ],
  "articles": [
    {
      "date": "2026-10-19",
      "title": "5 Cara Menghadapi Modus Penipuan Deepfake AI - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1ONkhzZTUzbVBHZDVmT2NKSDBpSXNoN1duYlpOZjc2OVBaNTJudlUxU2UxOHpqM1QzTzlVYjVoYWFEMDJoZjRqMnRNN2ZzcnRjZDRYTmo1NzZjdktkT0xR?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "5 cara menghadapi modus penipuan deepfake ai kreditpintar",
      "id": "3782fbe8e1f6d0a1",
      "domain": "kreditpintar.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-09d7a142159cfe0c",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-19",
      "title": "Awas, Angka Gagal Bayar Pinjol Meresahkan - Validnews",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOSDJXa3lpUzRLY2E4bFk1VEFiQzFYbWd0Ym1TM3h3QjVaaVdzM29SYTVQamdxR211dWtzOW9leWNneFBJXzl6ZXFCaHJuc2hRcEhDdzVPc0ZoMlhKb1d0bXBjaU52N3BEak5ETFdpS2YyenhIRTdUODBsN2VscWNnMUtoWVFJT1daanFaWVVPUElHcWhN?oc=5",
      "publisherUrl": "https://validnews.id",
      "source": "Validnews",
      "summary": "awas angka gagal bayar pinjol meresahkan validnews",
      "id": "2200878f12ae1916",
      "domain": "validnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4a9bc27c9ea2a6c5",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-10-19",
      "title": "BPR Deg-degan Bersaing dengan Pinjol, OJK Siapkan Strategi Dukung Perbankan - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPVi00U3JfOGlhWC00UGprSHJNdVUxM3IzZzd4RXBSSEtaaHR1WElTNVByVEFCZ0t4NHVqNTU2UVg0eUZhZG1oUWE5Zm0tMEhrRGR2TV9VeUhNY1k1RGEyTGE3cW40QW1rRTQxamZNZVhaMlUzSklZUDhyTk5CUVlnbVUwQ0REbER3T21IRFY4dHp5c2pfYzhWejVZNjlpV2VmbV9Kd2UtMFF4UnMzaTlvWWZoZWZlWDBiUlhfTmllZzkyaTl5SkVz?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "bpr deg degan bersaing dengan pinjol ojk siapkan strategi dukung perbankan bisnis com",
      "id": "f907d039a439d36a",
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
      "eventId": "auto-4ccdd9516db1bc50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-19",
      "title": "FWD Economic Outlook 2027, Kepercayaan Investor dan Ketahanan Finansial Jadi Kunci Hadapi Tantangan Ekonomi - Hops ID - Hops ID",
      "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQek9VLVdhWXNsa0ZkSlVJN2xiM0NNVmc4V2NNNmplVnBZRjFIYmtzRXJBV0FSR0gtWlVUTVpIMnBXTGhPaWFUb0hHUXp0Z0d2WExaUmV5a3dVZVNwWWNyUHdBUjhRakZON29nOXdlTmZIdkMyOTkyTUphU3ZyTjNYdVRERl9TT01DNG1LSUFUUUxDcE5peV96OVJaOWNkNDQtTVllNWRlQTdGWkhUNmY2WHkteGw5RHJyU1h2WWJqbXpGLXJnWWZnTTN1MXBzQlBobGVVQnh6WGZPejJNUkk3OGdWT21DQV9kX2fSAe8BQVVfeXFMTUVIUHVoS2FtNzV5dC0zNXQzd3Q2MHBUNGpmYVR2QlA0bEZLRHFrNXktZkpqbHJUU2NXVFZJTlFidTBVajB5U3N3Wl9hd2tXVWc3S05EdFVlTmxrODJteVdQZExXaklZcDJVN2pXV1AwcWV5YXhpZVBvd2xGWWdSVnQ0eVVzR3BDQVBBbWR4THd4MWU3M0MxRmZwbDAzZmpaMEw4WFVoMEx6b2FicmYzUDVfcDljLVI0WTB3ZmRCdFNmWHpCeWJ0dXNaelZ4RlA3X245TTRvMHBIRHl2OFQwV2dFeHdZVWlvTEZWdmgwN1k?oc=5",
      "publisherUrl": "https://www.hops.id",
      "source": "Hops ID",
      "summary": "fwd economic outlook 2027 kepercayaan investor dan ketahanan finansial jadi kunci hadapi tantangan ekonomi hops id hops id",
      "id": "2ece483ac3444aa5",
      "domain": "hops.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-799d0193fed8003d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-19",
      "title": "Gaspol Hari Ini: Pinjol Bukan Solusi, Para Ibu Punya Cara Sendiri - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOU3EyQXhYYXZESXRuMTZzR0hSdi1ULWM1N2U3Wi1lUFNVZDRUMmRpeW1sd1VrWHRDLVFONFhCdmJpbW95ZDhldHp6Y2lXWlVjaVNqVS16cEd5WmcxMDRPcDI5a2tTaFlnYWFIMlM4QlAwbHpOVXIwSDFnT0hoa1F2QkVGS0xqNW1ybHlQaUhsMTZkSUlPTlRMbGM2X3V5VmxPdDQ5Q0F3aXV0d0Y0U1FCYkhHNnd6WU1sLUh2RFpHNDMtZ0U?oc=5",
      "publisherUrl": "https://nasional.kompas.com",
      "source": "Kompas.com",
      "summary": "gaspol hari ini pinjol bukan solusi para ibu punya cara sendiri kompas com",
      "id": "0b34ed354e64d4d0",
      "domain": "nasional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eb5fc41c76b2332a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-19",
      "title": "OJK Ungkap Peran Tim Khusus Pindar dalam Upaya Pengembalian Dana Lender - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNeFZkUjJfNkNSZXU1eG1PNHFTSzdrQXJWTXp4bFhpejMtbFMxekNQcXFYUFlpMlJpcFF5ODdYSmNTZXVyMHZ0WW9vazE3a0tBWEk4S3JDWDI3Tmt4VVF5UFEwai1OR2ZoVHE0OXUwY21heUR4dkd5Z2FFWWJkeFZ2cXMtdGtLUjYwNmhmZEt0MGNiVXdqeFZ4UEpGemdXTmI5UnhPVGdaSVpjaWxuYUhma1lITQ?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "ojk ungkap peran tim khusus pindar dalam upaya pengembalian dana lender investortrust",
      "id": "ff2e6e9d6e9596ad",
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
      "eventId": "auto-45bc717fceac2722",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-19",
      "title": "Pinjaman Online: Kemudahan di Ujung Jari, Pahami Risiko Dini - Media Justitia",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOMTV4d2lMQUJvdXdKaE9HWGdxMmN4SnJLQ0VYTF9qNG9qckI1VlpGMlBkRExoSG9yVllrNWtsa2xxcWNhWExySkhEbkZMQi1ORnFaZk82R1hYR1l5dFB4QlpHZDZpWm14dFVfVkJkWHhNNXFOdFJ1MGpyZ3hSaDBGcS0xMlF3X1RTQnQ0azZaZWdVWkVRMjJJMGNsR3YwZWczMklFb25B?oc=5",
      "publisherUrl": "https://www.mediajustitia.com",
      "source": "Media Justitia",
      "summary": "pinjaman online kemudahan di ujung jari pahami risiko dini media justitia",
      "id": "bd5054adec035a70",
      "domain": "mediajustitia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ced57ee39153b878",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-19",
      "title": "Pinjol Berbunga Jadi Sorotan, PUI Minta Pemerintah Hadirkan Pinjaman Tanpa Riba - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNRG1tMVJjUWFYOWlRbDltUS1zeENYMThDZ2dub3BKb1Y0em5PaFNFZk91ZTZoUTA0RTNsRHh3TnhGMzluVEsxYWZ3aHZFY0ZQT1VieE9vQkF4MEZ1eTBCMGlacXFDeWlxS0xlcXFFZldDb1VTOGM1X0pLbHE0Q2RJMFhDNUlDNUlsRXhNRTJxN2tnR3JPVXhXalBGaExJQmlzTDFkcXd4VnBkdlNTWEwzV3Z4bnFFNlXSAbwBQVVfeXFMTmtRcktPc0t3dC1BNUVSTm1PUHVwa0cxbXllUUJ5TnhUSEFIM2luZWRYUW5pOV9YbE90ZWc4cmhwYnI2WUpSaVNBUUpfWjFiYzJVQ28yRE15b2E5Qi1uUkJ6d21VbDRFZ21ibmJaQTRLdWxRV2RYVDI2YTJlUnR1UkJrMnZ3LVlCTUFHc1N0OFAyODhDWEZMU0dUN3hWQjJ1WkpHRC04azluMlROY2tDRXFUM1ZTRklTSHI5VVM?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "pinjol berbunga jadi sorotan pui minta pemerintah hadirkan pinjaman tanpa riba warta ekonomi",
      "id": "80579bfd54bd423e",
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
      "eventId": "auto-40abc512c605ec6d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-19",
      "title": "Pinjol Tembus Rp106,9 Triliun, NEXT Indonesia Soroti Tekanan Daya Beli Masyarakat - Aktual.com",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOM3ZVRW9YRXNkY2ZCUW40LUNHQzF2cThtTEZ3MkZpU0xyLWw1SV9UWkFROENTNVNCaHR1UnVUNnVZZHNScnJCbVMwdUJzS1BGN25zNHpyNWtEMlpnRnZsQmswcGd1RGxwLUU4OUVka0dKWkV0aWtBN1VRQXlVOVVTV2JlcDlldS0tbTRVd1FSVFFjWGxXaW9kWDI2dmRrLVRB?oc=5",
      "publisherUrl": "https://aktual.com",
      "source": "Aktual.com",
      "summary": "pinjol tembus rp106 9 triliun next indonesia soroti tekanan daya beli masyarakat aktual com",
      "id": "589e096faef4c4ca",
      "domain": "aktual.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-63da8e71bb429342",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-19",
      "title": "Syarat dan Ketentuan Kejutan Setiap Hari! - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE9hSTZOMFVqcTBtMHRoa0hGbXAtYXp3Nkw5bkE3WDRZZDg5YndSWDVqVHRJaG9iMnM4SDVQQTY1elNHU3VfdXJuZW5PSmFtejdSaExnRE5ua0YzWF93UEh1cHBRenZpRXBvRmJYbWhKZGhCeXNPNnpSZ1pn?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "syarat dan ketentuan kejutan setiap hari kreditpintar",
      "id": "22c9716a28748728",
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
      "eventId": "auto-72dcc20ea295be8d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-19",
      "title": "TWP90 Pindar Dekati 5 Persen, Tekanan Keuangan Rumah Tangga Meningkat - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNTm9fYjN3WmZ5ZUNSdTRrb1JrQlJtSjdVNGpBQXhLcHZjRXJ2UnZvMzRMckZTRm5pWnZBM054TnBUSHdERDJOMFQzd1llRm15M0NOSm5SMFM4QWRsdFZnaEtzWFpVTzd3Vy1LdnpMRWg2S3d3aXJRcUtKZlVPb0RQTnBRWEFGZENlcXVTYkRLV1NsMjlteDZTRg?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "twp90 pindar dekati 5 persen tekanan keuangan rumah tangga meningkat infobanknews",
      "id": "fdc6c01f375c12d4",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 62.6,
        "label": "mixed",
        "negativeWeight": 1.8,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5571e0b820729475",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-10-20",
      "title": "Ekonomi: Kelas menengah Indonesia 'downgrade' hidup - BBC",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9MUUJ4VzFRcHRzbnlVQkZSLWt0SnI0WW9sSDJuT2R1TnRoa2liSkR3WWwxdl9wYXd0eXE5Q3NrNUphVmY4X3BhVUhuU3NoekllWnphaFZZa2ZidURRYmdrZ2R30gFnQVVfeXFMTlVTc1ZoWWpMUy1ZSFlvazhfaE1KY3NLU0Q1TFdmUk1CeURhTmtqaFR5d1BMenA3enQ4bmNfRWU3X0wySjFYRnlDdDJrT0dodE9DdEEzQXE2N2ZiNV80aUtBQTVxbnhCSQ?oc=5",
      "publisherUrl": "https://www.bbc.com",
      "source": "BBC",
      "summary": "ekonomi kelas menengah indonesia downgrade hidup bbc",
      "id": "ca2878936b937af2",
      "domain": "bbc.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-016b33f375103a83",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-20",
      "title": "LPS minta mahasiswa waspadai risiko pinjol dan paylater - ANTARA News Kalteng",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOcWI1TU56VVhIbjltWXNZRE5Ec2pIUE1VdDZvZDY0dDlreVVHYXJWckNwUGFMR3VrR3ZudE96VW5pb2JuMFpfMGp6MjFtbHI1Rzl6NXVoNGdYdFFBamJTRnFUaFROdXVSWGNzQTM0VmpSeU9YaTNjbDhIRUxtakNkQ2RKRjhOSE9CeUlRbzhPLVVYdWtFNFEwY1hfWURGSkVQLWc?oc=5",
      "publisherUrl": "https://kalteng.antaranews.com",
      "source": "ANTARA News Kalteng",
      "summary": "lps minta mahasiswa waspadai risiko pinjol dan paylater antara news kalteng",
      "id": "6671d5260f01b898",
      "domain": "kalteng.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c6e30cd8f815abf7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-20",
      "title": "Loan Channeling, Krom Bank (BBSI)-Easycash Jalin Kolaborasi Strategis - Emitennews.com",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNYW13YjZmWmY2VzdwSXZ1eGpFc3JmLVd1ZklMcjF0YW9EaHF3OVc0Z2ZNVmVjQ05NTTIwbnB0bGpselR0aXg1NVllc1ZJZS1jQ2RmT3I3QTlJX1B4Znlud0ZfWnlfdU9qYnpYZHNCSEgxc2cwUW1YMVNPamRXMFp6RnNjQVE5VGRWNlQzbm16WldybDZPRGZ3Mzd3?oc=5",
      "publisherUrl": "https://emitennews.com",
      "source": "Emitennews.com",
      "summary": "loan channeling krom bank bbsi easycash jalin kolaborasi strategis emitennews com",
      "id": "e0f7c6ce5c5e704e",
      "domain": "emitennews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3791a3796edb83f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-20",
      "title": "PT SBA Wood Industries Milik Siapa? Ini Profil, Lokasi Perusahaan, dan Penyebab Disorot Singapura - Info Temanggung",
      "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxPTFR5cUdoYW1Md0V5bmM4cENRZGpLRkpPQUx3dGEydmxGQTM2aHFXT0ZqM0U0elA4c0poZFV3ekszdXEyTlB6b2VfWmwwcGJHZFQ3dHNWRUFKbUM2U1RzZTdQS1RWa0doenBoSG1XQ1dMN1J0bzZ2X0RjbGt1eHp4QmVUS3RjSERTLWNmVENjWGQ1SlR6c1JobUd3bXVENG1FNlR4Tl90ZlhyQkNlbW1tVXJZRTNLQTNqbTZPR1lsQVljUTdLRWJPWmxQel9CMTdvTVFIeW8taldUZ1dPRUVuSmRSS0dhNlcwSjUw0gHwAUFVX3lxTE11MHJfQ3lBZlBPQkJ4TlFLcFpPdGFrdEtqU18zUThEcE92OUJNT0ZlVWJhTXYyY1V3dlg0UVBRVzNPcHBZM1pfTjZCN3dPaElPcTIyMzBRZUpyaFdqc0ZST3RueFBQWG9pV1FqSVpDTkwtRzk5b0UwMjNyc1dmUURkTmV3VDFmdkxuMHh0WVZmdmtYdlpVUEdZaTNXQ29pMFdQd29vWlN5LWZsd1VYZWVlU1R4My1nRWlIQjl1RTVwS3cyQXduOTd2aUVYQlNNbFE5bVlpd012VkZKaGhpeDhoN3IteVE1dVNWX3E3NTFNTA?oc=5",
      "publisherUrl": "https://temanggung.pikiran-rakyat.com",
      "source": "Info Temanggung",
      "summary": "pt sba wood industries milik siapa ini profil lokasi perusahaan dan penyebab disorot singapura info temanggung",
      "id": "cbc3734721997b4f",
      "domain": "temanggung.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4f2d9270e881a148",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-20",
      "title": "Perluas Penyaluran Kredit, Easycash-Krom Bank Jalin Kemitraan Loan Channeling - https://benang.id/",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNS3JpSnNtZXpkQlZOeDVoVzhWR3FWOVJPcDNSU0pQYUpDVi00MlFwekpuVWVRdzJsWmpXdlg3R09HMUNUMFp1QzhHNmR1ek5IU2ZDM3VKeG43eGY3Ykk4VW1XYkdscmg5TXVxSnF3X2hJRVMzcWlZQlRzQTlINno0N1BVc2JWaExZWnhRQ3liNy1EQ1QtM1hqNWdhTQ?oc=5",
      "publisherUrl": "https://benang.id",
      "source": "https://benang.id/",
      "summary": "perluas penyaluran kredit easycash krom bank jalin kemitraan loan channeling https benang id",
      "id": "e5cf1e98b6473dc8",
      "domain": "benang.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-08d399630d957384",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-20",
      "title": "Pimpin Rapat Evaluasi Pendidikan, Bupati OKU Minta Kepsek Petakan Kualitas Guru dan Wanti-wanti Bahaya Pinjol - okukab.go.id",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1UUUR3aV9uSVFod0Y0UjgyaUI5d0NtRjh5MkpoZTYySlVBTnN1S00zWmwwQjJnd2pBaWxnWVNpZzlBNmRONjVDOWpaWjFhdHNi?oc=5",
      "publisherUrl": "https://okukab.go.id",
      "source": "okukab.go.id",
      "summary": "pimpin rapat evaluasi pendidikan bupati oku minta kepsek petakan kualitas guru dan wanti wanti bahaya pinjol okukab go id",
      "id": "df95f36419fad610",
      "domain": "okukab.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9e9dd871c8b05aed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-20",
      "title": "Pinjaman Online dan Gaya Hidup Konsumtif: Jerat Utang pada Generasi Z Halaman 1 - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNcUY3Z3JhU3RlNFlkckVGV0RrQWRDc05uY0RIek9rLVpET1pfZ09sZmdhOXc4MTBBUWhjbjN4X2dyd25QbXk2bHE0LVpGc1hVdU9KOHI0QXExS0NKUzZoRHhmb2pxdVpKcmF4Q2R0VENTeGdsY1pJQXZJYnQyaWxrWHdJcFpPVDlmSm5jMTJncmhiR2NWTHh5YTY1SkdpRG84LWVzT21McjhKYlpKOEFRdTNkbUVsVkNKWGhfZTlqSHNtSEU0djJONVpiTmN5TGQxT0JjX1U3QVM?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "pinjaman online dan gaya hidup konsumtif jerat utang pada generasi z halaman 1 kompasiana com",
      "id": "7eec4d67a746a9ff",
      "domain": "kompasiana.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2ea88867b55df0fd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-20",
      "title": "Sinyal Bahaya, Keuangan Rumah Tangga Tertekan, Risiko Gagal Bayar Pinjol Dekati Ambang 5% - BertuahPos",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQeTcyazNuM2cydUxCRkFHd2hiNjM2TDhVQnkwYjE2NllRNU9CWmZ2TXBYbmZRU0hSOUNPeEJERDhsVFMyb1pGQWw0eDgyUUxTbkZUem1iVE9zYTdmWnM0MVR5b2NDTXZhSEhMQ2RBNnBHNTl6TEdIcS1Qb3FXV09hSGV0T1JwUW5fVXc?oc=5",
      "publisherUrl": "https://bertuahpos.com",
      "source": "BertuahPos",
      "summary": "sinyal bahaya keuangan rumah tangga tertekan risiko gagal bayar pinjol dekati ambang 5 bertuahpos",
      "id": "d4b762b1a14655d3",
      "domain": "bertuahpos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8ca14b372bde461c",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-10-21",
      "title": "5+ Unpopular Opinion SPinjam Shopee Pinjol - Duwitmu",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNZDdiX2dZS2pGak9fRVlYMUdEZVFkMlFRSXVsR1gzQ081d1NqbEo4aC1KQnIyVnF5ZEh4NllfaVBscElUZE1ENUxkVEFQWk5tVnZYak9jVnNXeHZ4V2UzMkt1bnlJY2hsYjl4V0dMalp3TWZyamZTejlvMUhnNW1kVg?oc=5",
      "publisherUrl": "https://duwitmu.com",
      "source": "Duwitmu",
      "summary": "5 unpopular opinion spinjam shopee pinjol duwitmu",
      "id": "aa4a0d36303c7633",
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
      "eventId": "auto-9354de26ead086e0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Cek Sebelum Terlambat, Begini Cara Tahu NIK KTP Dipakai Pinjol atau Tidak - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNX0dJbEZONXBiU0Q5OUpnZ2xTTnRqNGJrVlpzQnZXclprelpBcWFHNG5VR3EzNVhFMnNYWldQYVUzaG50RTk0R2NLOGVwMkhqb2w0elBFdVBSRXF0eDRpSDBUZ2FmTG03ek5la2pkRkJ4NUY4VXJ1OWVFRUFtcGM1bVdtNWg5R1NMcFY5bDdSYTd6b1B1WnMtQzVCdmZycnJSMWMzbFRyNlZVbi0xbkdMYXJsbVlESnZKa1lXYmdkal83Wm1RcjdUcVBXWlFHMDdW0gHEAUFVX3lxTE5yU3VDU2dZVDNBSThiMHJpM3hieXJaRy1lc0Q3dW1jTmJNWFNld3c0LUtLN24yUy1EYktqOU5ZZ0wycG1Md3c1YmxYTjdFLUdkZWl0TDdxR2NDYzA2SUpSUkhBSlRaRHVmMy16TnFfajNaNzNrTmF6dDNEa0locFp1OTFOVlZoTzgwVzk5YzIxU2Vla204aDlJZDhFUFJQTUdKbVotbG1iNlNLbnBSd1VsVXlQVHIydlhCTmNvU3VERWZBS0I?oc=5",
      "publisherUrl": "https://www.kompas.com",
      "source": "Kompas.com",
      "summary": "cek sebelum terlambat begini cara tahu nik ktp dipakai pinjol atau tidak kompas com",
      "id": "7f86e44f17e2f89d",
      "domain": "kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-207f2470a8aceffc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Easycash dan Krom Bank Jalin Kemitraan Loan Channeling guna Perluas Penyaluran Kredit - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOaEg5MFg0cGVFQlNfS05wUi1CUlYwUm4tclBNQlhWa3NNY3laa3N5ZlVJSGJRcHFnUHFhNlpsLWhuN0JDYldpeFBnX2thWER1bzdhbmdwRXJBMEZ3aDB3eVM4UXp3T0JRc0ZMZjJWQlZJbDdtZDFkblpnWHNpN0FWNUVCNEZMM20tcmxTOTBCMzB6ZlRaRzRjZWtzb2dmYi00NGRJWlltWWt3LWZ6OEJBekhmN21uNjFxREVhV9IBtgFBVV95cUxPRmZKbWZwZzdlNGNBRUJOcjFPVWRaQ2ZSb0tTQ1dzU09FM3o2TkY2VkthNEhTNklmSWlOS1hrUlYzLWs4MkMwYmdGQXJEeGptV1dyNmNmYzZDU2ZrMVZtRVlPemEtZlV0d2l5NDdGX2VZRkIydDY1WDNpWGg4RWlpWVNPdmtObGdHZGJjZk1XdVlkcUFXZWlnREZ0VF9vNzdpa2E2UW1WSXM5eDVVQ1NMTEZHYzV0Zw?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "easycash dan krom bank jalin kemitraan loan channeling guna perluas penyaluran kredit kontan co id",
      "id": "1af3025c44442eb5",
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
      "eventId": "auto-391a321158e21f51",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Easycash dan Krom Bank Jalin Kerja Sama Loan Channeling untuk Memperluas Penyaluran Kredit - Akurat.co",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNRUxaNlB5TjVyRWQ1bEZ4cms4am5QNkI1M1ZfSFlMZVRHSlhsY0J4eDJnM2d5Rm0tN1ZRdlNsM0pIem10NmM0WndYV0R2TUFQaXFMWHlsTWdxaUE2TkpoNnpPQVVJSTJtZ0NKYW5XSnBpR0pmMDRlVnlCWk1HU3U1REcwSnROUzJVT3RmMlJRV3p4RGV0OVlfU044ck9LbXJXNVFXMGZob3oyMEo3ZEdxSWhpbkNZbGRHNUszaVc4U25xQQ?oc=5",
      "publisherUrl": "https://akurat.co",
      "source": "Akurat.co",
      "summary": "easycash dan krom bank jalin kerja sama loan channeling untuk memperluas penyaluran kredit akurat co",
      "id": "ba572a854a391939",
      "domain": "akurat.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-00326658d6fd7f4a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Easycash dan Krom Bank Perluas Penyaluran Kredit Digital - Demokratis.co.id",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE8tOWZ6S1dDUXhGcnh6SmJzbE5IeWdrSTFIUlhQeFVoTFdVZVlZV1NFTVhmNDJETzY1WF9SZGNyNU95RUNKdGxEQml2czQ2RWV3ZUIxaEFVSThBajZFaWV1YWZndndScDltLW1FRER3?oc=5",
      "publisherUrl": "https://demokratis.co.id",
      "source": "Demokratis.co.id",
      "summary": "easycash dan krom bank perluas penyaluran kredit digital demokratis co id",
      "id": "89eaa3896430f111",
      "domain": "demokratis.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d6e997b702aca025",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Kanit Binmas Polsek Bantul Berikan Penyuluhan Bahaya Pinjol Ilegal dan Judi Online kepada Kaum Rois Trirenggo - Polda DIY",
      "url": "https://news.google.com/rss/articles/CBMihgJBVV95cUxNMDR0dkh1TTA5Wk5PeUxRWFY3aUxpdHExY3N5U1ZWZ3M1OFNZLUl6bk8yQVJsOHBPVUVBSG1qckdzbnJDREFJOGs3U25KMjE2MDh5SC1HU1dHeXVpLU1fZ0tZZ1c3WERhdDNpZ1BucFZhZXcxakk4WTNVcjA3UUNicURnWlB2cW42UUVYdzloREVXaXROX1dvLU5FQXo5TVRXdUpvLTBKVW1zdzNQWnpqeWZFVXZKMEl6allqMTNTT0RLODhZUG9va2p6SWxoU1VEZ0U0VHBwbGRiWllBNTJfbUk5Ny1xUWx6UVNHbHpCdnBjSExwX2pIOE9DTW0ycEFJd3FKdkZB?oc=5",
      "publisherUrl": "https://jogja.polri.go.id",
      "source": "Polda DIY",
      "summary": "kanit binmas polsek bantul berikan penyuluhan bahaya pinjol ilegal dan judi online kepada kaum rois trirenggo polda diy",
      "id": "ae720f80369ff751",
      "domain": "jogja.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-29177e1048886c3e",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-21",
      "title": "Kredit Krom Bank Naik 50,4 Persen, Easycash Jadi Mitra Baru - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQdEpHSjluYWstQlFVRmw0elVoa0ZYU2RZRlBaR2hYTjdLdE5WOHk2VXpicE5oVWFUOW5fcTZhcThqY2N4VFAwSTFwbU1GMGlfWW5xUGt6enVSZG1GQ0g5N01VNnhMUUtWcldBOW9FNHd3VXJPWG5SY1BmOTFhR0hSVURTZVc2RzZweVpIQjJMYy1IRVFOTjllSkl3ZDNJa1VMV2c?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "kredit krom bank naik 50 4 persen easycash jadi mitra baru beritasatu com",
      "id": "9d62d9366e760a6d",
      "domain": "beritasatu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6f203c0c1589f296",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Krom Bank (BBSI) Gandeng Easycash, Kredit Tumbuh 50,4% Jadi Rp11,59 Triliun - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQaE5GYUtPMlVLOERfai1fNTFOVEdlU29KelV6b3RNUlNvbUpfWDlNSDRrU3lIQmd6LTlKNXg2MXpzRDlpbXpOMEZJMWJYdE5mYlFJS3hBVjk5dXJ6TFZoQ0NzbnZDODVtblVIRW9ILTBHa1F3QmQ0YmhmSktBeEtSeFU2MmRZdWxXb1kzOHZGTm10S2NWcDQyemo5Mi1neUhiZ3ZDS2o5aS1BZm4wTkF6VmtJVV9BOGV6azZBeTBUZXg?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "krom bank bbsi gandeng easycash kredit tumbuh 50 4 jadi rp11 59 triliun bisnis com",
      "id": "79642b768b7ac396",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b55219fd4fceef23",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-10-21",
      "title": "Krom Bank gandeng Easycash perluas akses pembiayaan digital - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPMVI2Z3lsWGh2Nld1STMwNnZPUHJuZnBudWwwNERmSmZRNC1mdmc3cmYzMl9YLUdyLU4xQlplT2YyTXJPSmZEb2hqU2RWWVdDNUx4MzNTRE1xLWxLaHVmR1VCSkU1Nk1SeU9Zcm5CSlFMb0twU0E5bVNueEtTRk9PXzNDWG5iLU84UjROc3EtNzBfQ280NlJydUxpRjN0bm5rZ0Nn0gGmAUFVX3lxTFBtMEhNUFRvR0hYRmpJeTRjV2hVQl9RS2h1V043ZVdCUVRvdE8xWVBfdURQb2JnVERqbzZPZW9sS3BJUFd4b3dGbnR2c284UGZfYmhocXlheUJhT3BpeEtvOWs2RTlLd2N5WlBtZTQzUllBMEhtVW5nNmpIRWZEeFR1amRhOFB2dFZDbEN5TWZreGM1aU1DODdZVHY5aS1qRnBNeUpONmc?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "krom bank gandeng easycash perluas akses pembiayaan digital antara news",
      "id": "7900d566b1f2eeba",
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
      "eventId": "auto-24b786f11f9c5df5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Penegakan Hukum Karhutla Perlu Diperkuat, Pengawasan Lahan Jadi Kunci - inforadar.disway.id - Inforadar.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNbEpoN1libFNLTzN6ZjBROXZQbUVwbnJVV1BFQUs2RW5FRkE5RWtWS2U2VGtFNWNLZkZuaHAyNW1rTEV6andVV1hLUEQ0T2RBRkRmTjRwQnFVbXBLNjhFTnU1SEE2YVRoU0E1dlNvNWFWVWZBV1YwUDFjV1RaUWhTbVZHcTJYaHJwTHpZTzdwejlROTl3M2lpazJTQjJmUXhCVHFabWRlYUVldzNWajBFa25oNNIBqwFBVV95cUxPdXpkcVE0X2RXUklxdEJFS2U4UTloSXFuRGRTR2M5bjhEYkFBei1vZFVBekU3UVp2NldjaUNBSFAxREZTNS1lQXdjNVNKUkU1Rzl2RHdiSlBPZHpSX2pZYWgxb3RZcGxQekxLbVRfTjYwTE13Y1lwbUpTMFdSSVlSNE1wdkRHbmZhTlNHQTl4cjZIN01zWUNaSkE5X1pXYmtnWmFRWVVlMVp2bkU?oc=5",
      "publisherUrl": "https://inforadar.disway.id",
      "source": "Inforadar.id",
      "summary": "penegakan hukum karhutla perlu diperkuat pengawasan lahan jadi kunci inforadar disway id inforadar id",
      "id": "ff3e5d34dce466db",
      "domain": "inforadar.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cc5b2bac138b7811",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Perluas Kredit, Easycash dan Krom Bank Jalin Kemitraan Loan Channeling - Emitennews.com",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQeFNqay0ya3VSVWQ5T2RrZHVINUU4NDNMTEU4SWhfTGZjazQzc2FJaE5CcnI0V0ZoWmVNNFc3QkFTa081a1p6RzJMMDltRkZpLTY2aFZJamhWZURpZEtEUHJ0Z0lrNjdtd1cwdzRqSmFQdzA5XzVPNFJwcEVpTnZJaUkzQmQwOU5ZbGU0RTlWc0dkQnVjNWFHUS04S0hsQQ?oc=5",
      "publisherUrl": "https://emitennews.com",
      "source": "Emitennews.com",
      "summary": "perluas kredit easycash dan krom bank jalin kemitraan loan channeling emitennews com",
      "id": "76dcfe72dd4051bf",
      "domain": "emitennews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b1b2395b06827f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Perluas Kredit, Krom Bank Jalin Loan Channeling dengan Easycash - FORTUNE Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQNU9sU1dXSEhkSlJXMzRNUmxTck8xOEFLYlZMOWNUcllsd0QtcXdDM05rNDVobXd4SjZxQW1OVjhnLWlobkJGc2JxMVNaU3pGYm5TTUVDN2RSZVR4M0R4Z05BZVlkUGo0cUlVSDNxSGJlOEhxTEU2SnFDU0cwaUpacFZramxrVXZVR1luZlM0VG9sbDdPVThvY2t0U0pFUjUzOUU3dUlEanRoZ29tWC1OV3NSMNIBuAFBVV95cUxOWEpldTg5VXZYdkE2bmVrNkdVb1pDY0haN3FBNkJKMVJVWF9ZcFVsSlJCMDZSbzZMejA5M3Mtcy1ZVXBzZGVCQnk2MW5hNHk5US1KSHBfcjJYLV9KLUZiLWFwZTBIX0gtd19NeEtxMzVsb1FZNG9KUklZMnNsWGZQeGRiaXRsMU9nOFNUNXVfRTFzdkl0ZmpsRW1GS3hvbV9yUHZhMTZMZGdmcE93UEhTejcyRDRFdWpM?oc=5",
      "publisherUrl": "https://www.fortuneidn.com",
      "source": "FORTUNE Indonesia",
      "summary": "perluas kredit krom bank jalin loan channeling dengan easycash fortune indonesia",
      "id": "13fbc18793378c8c",
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
      "eventId": "auto-22386be0128dfe7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Perluas Penyaluran Kredit, Easycash dan Krom Bank Jalin Kemitraan Loan Channeling - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOUUp2YWN5N0VkMjFuT0JxMVpPNVVvZW81MjlHMU1TdEZKY2xEUHp4Rk53NGNWUWJmdmxvMDVZZkZnZ1Z5NUFJQmdhc012cnR1RnpMeHI2YTFtczB2Y3c0YVlzcFh4SzhYZEFTMVZXMWhsR1p1SlREZW9VeFE2N1dMd2hqQTdzc05SOWpmeEl6X3B6QjNmNWtjODNuSGtUTHNhelg4aHdabnNQUdIBrAFBVV95cUxPUndYRW41M3FldlRaZnk5VmtpUXNQUnN4QnJmRlFYemhCTmtmX0VtZTVIZ0lOTHV6Rm1mVXZqemlTUm1nVDdWVFhtdzdWNVNXT25KV0RJWTdPWnNqMXR6Zm1yTU1XMW5Gazl6WTJMOFQ3dnZFMkRJX0s4S2YxX2lvMmJYVFZXdm9xdUhkTnZUUEVGTzlKbTVMc3RlcGd3X1VsRTBHWUo3bG05TkRH?oc=5",
      "publisherUrl": "https://www.jpnn.com",
      "source": "JPNN.com",
      "summary": "perluas penyaluran kredit easycash dan krom bank jalin kemitraan loan channeling jpnn com",
      "id": "e301bc9e5858b593",
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
      "eventId": "auto-3d1a251c7fdff163",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Pindar Terjepit Biaya Pendanaan - KONTAN",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9yYmJlVlBFZmZzSjJYdm5faVRWVWRIMW9xY0pQeXFNMnBaM2V5UkRPQlFUem83aXRwLVUxS0dqQ3EyWGEtWEtLYl8wazF2RGx5ZUJVNHFRTEQxNHpzb25EOTZ6MnotdTM4LWhuOU9iRHFGLTQ?oc=5",
      "publisherUrl": "https://insight.kontan.co.id",
      "source": "KONTAN",
      "summary": "pindar terjepit biaya pendanaan kontan",
      "id": "606f8bb142a44faf",
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
      "eventId": "auto-4deeef6bf6240973",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Sinergi Bank Digital dan Pindar, Krom Bank serta Easycash Teken Kerja Sama Channeling - Stabilitas.id",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNaWUzUUo0RDNxcEEtcGVGSDRSbW5FU2QybjJSdGhkQVM5Q2NIZ2xJcEF1UEoxUUtvdWlMOENRLTZINnYwcDRVSHp6TUFMWHhXQWNVY0F2Wk1FYnhvcTBMQUp6YTFpUGFGY1ZkS3BIcC02N3ZKQlB6dFZZLXlsWlBSTElQckZ5WklsVUJLLWF3UXBmU2p2Sk91TW9pc2lUZU5PVnBmNC1VTlBSOUpiZ2JQVQ?oc=5",
      "publisherUrl": "https://www.stabilitas.id",
      "source": "Stabilitas.id",
      "summary": "sinergi bank digital dan pindar krom bank serta easycash teken kerja sama channeling stabilitas id",
      "id": "5689a37dc1a6d083",
      "domain": "stabilitas.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-84dd0e098f23b45c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Warga Kuningan Banyak Dikejar Debt Collector, Shohibul Imam: Jangan Besar Pasak daripada Tiang - Pikiran Rakyat Kuningan",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOQ1EzQ1A2TzFudlRRWThVWTNoSHVSdUJOaldVOWd4V296VFFTeklqQUpXQUhHSDNJaHc4SEFPeklPZ04xcURQU192el9lUDN5Sk02MEdBa3VwdWJLZmFMTl8wWkRwd2lTS0hUdHZEb1M0dXEzSUJkMEl5a3Z0c29xS2kxSFFIaGZKWnJsbW1lXzZLRVFiRExnaVZoenI2djhQaEdCSktIbU5Qc3gtNU8wN25qUFE3YjlmdVhaVjJzczBreXEtVnlOQzNxVHRLVnZVYjJPZjdSWjhEYkZ3Y1VZNTJOVWbSAeoBQVVfeXFMTkFZQzBlY0QyYUpqcDh5MkZsV1FMRTk5SzJJLUE4ZnhDSTk2NXdJN3cxVDczVnBQcXhnSW1ybFJuRmFwRUc3UTJSY01mRWxPZ1Fxa2x2SXdEUHc1ZUdQTTFWbkFmV1hqVXJ2WGZlVlhjS2thTUFuTFJzUzlxcXA2MVZiN2F4UUo0Q1BNXzRRckswLTRtcm9UNnM1RWI5blVhbHV3ZXowZmQzZkI5VVRfcHdpb2oyWUowSkxVT0JLUTcydFZEM0NEMU1rbnF1ZllPY1lORjJGdmRMVnNSbEY1TUNzbnJBOVNNTk53?oc=5",
      "publisherUrl": "https://kuningan.pikiran-rakyat.com",
      "source": "Pikiran Rakyat Kuningan",
      "summary": "warga kuningan banyak dikejar debt collector shohibul imam jangan besar pasak daripada tiang pikiran rakyat kuningan",
      "id": "ac61371eddef440f",
      "domain": "kuningan.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dd7edba4bff17260",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-21",
      "title": "Waspada Jeratan Judi dan Pinjaman Online: Imbauan Polri untuk Lindungi Keluarga dan Generasi Muda - Tribratanews Polda Babel",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxNYUZ0LWlJY3pHckJQWS1JR3Y4TE9jUUdOODFORWJHaUlqV3J0SGY3N2ZjcExkV1VfTl81OUpBcUpUbmxsVTdYa3Y3bE9kNlFmeWhvQjRHbHZ3WFlRMWw1elZYN1NwMi1DcTlDNWRDMGQ4Xy1jUGJULS1qS1FNMjJCRUI0VkdKYjV0VmZvNWg4ZW5rUUI5MVlHSnRlbjQwb2xTX0ZCc1lZU3JLaUkzM1FscEpweV9wTVBONFB2VTB1Q2FJbE1wUG1CcVQxLWxBUkZ5RlotMlZlaDA3MkRSOWJOQw?oc=5",
      "publisherUrl": "https://tribratanews.babel.polri.go.id",
      "source": "Tribratanews Polda Babel",
      "summary": "waspada jeratan judi dan pinjaman online imbauan polri untuk lindungi keluarga dan generasi muda tribratanews polda babel",
      "id": "1a94affb73ec34b1",
      "domain": "tribratanews.babel.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6bb28f8f2d7cb8e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "25 Juta Rekening Pelajar Dibuka, OJK Waspadai Risiko Judol dan Pinjol - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOZnVQejlwVVhyYnVoOUZ2dFFVUDV1dkN2SDA0RE9oRHVLZ0h4dmEyclpGWU1KVWpScmxEWFNrbXRlQU5LSWVPd1R1dUNnVUloek9qN0NBNW9RNUl2Tmh0RnlLcjFnMkF3M1prb09oQ0hFTG9ZbURhSXBQQXduVkQxZmg4YUhCbHBLbTZiYi1idlhxSms4dFJoVC10WjZnOFhtYW13RVVLYkZJWkpsLWNaQQ?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "25 juta rekening pelajar dibuka ojk waspadai risiko judol dan pinjol beritasatu com",
      "id": "f9b36e4f5affce3e",
      "domain": "beritasatu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-208d172d92f2cd63",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "5 Daftar Kontak Bantuan OJK Jawa Tengah Buat Laporkan Pinjol Ilegal - IDN Times Jateng",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQMVZjVUtUcFBzQ3Q4TWx3Z1ZoZTlINFVMLXdyb1FoVFctcVc2bUpybXY5S0tLeVR1U0VmbElxajEyLVd1bXowRkNfeWlXaklZSTNrZmRqNFFjVW84Qkt6RmFCc0tLWFpnVWJQc3BXYWJRekVFZDFpZ3FvLUEzMF9vZFFOMmxXWFBUd2JjWF94SC1xS2dfaHFqelJSYXRaWlo2VW1oLUxOdjYwSEpEQ0NuRWdLOENQaTBhcHI1bTdycF9FZHcwaTcw0gHMAUFVX3lxTFA1VkoyaE1qZGEzamwtcDl0LWhRTG5lMTREM2thREVkOUgybGFVWno2MXYteTV0b1QyVlBNY0ZSR1kzWF9GWW84WXo5U283TlRCTkgwMEZ3QlltYW54UVNDRTc1bURWTWctMU5FRjUxcTFKS3B5bXU4SW1LdDVid3JPVnVXMWYtazE5WEFwSDVIYktYU0hMTVd6OTJTczlybTJkRFVBYnYzeWFQT0IxYWpVdDg3U011Vl93bGhRQ1RGZmtTSEpQekp3YTBHUg?oc=5",
      "publisherUrl": "https://jateng.idntimes.com",
      "source": "IDN Times Jateng",
      "summary": "5 daftar kontak bantuan ojk jawa tengah buat laporkan pinjol ilegal idn times jateng",
      "id": "461b1407778f6a15",
      "domain": "jateng.idntimes.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8e6f910239ab7b5d",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-22",
      "title": "Cara mengajukan pembatalan pinjaman Adakami - BPBD NTB",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPQl9KQW9KTXFMUmZWYmtpLWtaaVRSWFpKQ29vV3B6bVoxU0tGVnZKZUlLLVlIRXVWZW5nOW1TallMX2kzZkpabXhCM2FLLWJDeVRoWkhybU9KaXhIOVp3UjFnZVF0WFRFWTZuemxSSl9nTEl4aWljWjFxODlfNS1YdWtQYzhZUHNHSS15dGhsbGFDZDNiWFNIaUdTNFJadFBwZmtLWDREOGJ1WnVyWDc0LUZ5SVBSQm0teGp2NzEyeE1JY3ZqMFVFdVZhTy1Sak4xZ0tV?oc=5",
      "publisherUrl": "https://bpbd.ntbprov.go.id",
      "source": "BPBD NTB",
      "summary": "cara mengajukan pembatalan pinjaman adakami bpbd ntb",
      "id": "5e392965b504f7d5",
      "domain": "bpbd.ntbprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7e45d84083d73aee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "Fintech Lending Akan Dikelompokkan Menjadi 4 Tier, Begini Respons Pindar UKU - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE8xWEFoY3ExTTZtM2htODRGVWMtSlUxbjhhTXkycGlVSk1JRmUxUGJXVG1nY0thYjNaWGlQQ1p6cXBtVVA3cWRZdkpQWkdIbTNDNUFwV2JXTFFHNk1rU1h6U3BxQ2QwQQ?oc=5",
      "publisherUrl": "https://id.tradingview.com",
      "source": "TradingView",
      "summary": "fintech lending akan dikelompokkan menjadi 4 tier begini respons pindar uku tradingview",
      "id": "31f44766a3f7b258",
      "domain": "id.tradingview.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-edf0d532d4965ef4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "Foto : Kredit Krom Bank Tumbuh 50,4 Persen, Gandeng Easycash Perluas Penyaluran - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQcWMtX0FvSkUtSU1IUkp5c2owaEtzSjJyamItU0dwZlpYNTFhQXROUnRNZnVsbGtlUGhOUmJnLUpucUF5dVBQVm5qdnF5TTdlYWFHSnUtbjZ2LXZEWEFjN19fV1U4VkZ6UElreTlKNXdIeXdodnBma2VJSWlrVUE3TVBOcjhETTE1OE8xRDVYRllsblRVNmk1RjFRbXQtbmxZSTg1RzhBRlV6Z2hmTFV1NTNBVDFsalBPak1jN3huYw?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto kredit krom bank tumbuh 50 4 persen gandeng easycash perluas penyaluran kompas com",
      "id": "a26020adc72ce2ed",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e22e59d3233a6ac",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-10-22",
      "title": "Foto : Kredit Krom Bank Tumbuh 50,4 Persen, Gandeng Easycash Perluas Penyaluran Halaman 3 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPdDlDUUJmeHo5UWFBT1ZlU21nSHNjSV8wTzZjaF9aUWRrUThRNWc0aVlMN2ptQjZyQllLQ2dla05vcl82ZU12RDE0blV4a0R6X0NyYnJ6WlRRYWh4RmRrMW9Cd0NPSUt3VVBHejluOXZxM1ZKZy1hRVFRd3MtWHlLbk8wNnNxSkZHWFp4aG5ieV9Genl3RzBaSi10azdWcnVCb0xSdHFtZ0x5ckUzOFJqV0N6NWsxUkdUdy1zRTBvRUpXckdRaHpGUA?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto kredit krom bank tumbuh 50 4 persen gandeng easycash perluas penyaluran halaman 3 kompas com",
      "id": "2b568b03398dd0dc",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e22e59d3233a6ac",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-10-22",
      "title": "Kredit Krom Bank Tumbuh 50,4 Persen, Gandeng Easycash Perluas Penyaluran - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPRTBFNi05SnVCYmJ6dXQ5NE5kVUVmSnF1OGpSYnhOS1dlLUhVUVBVcUx0TUpnREZYRUc5ZmZUVlZVaUxYNzNmdHNYS3Y2bTBBSVVWVHdkb2Via25KalF5T3hRTU5LdUxlUHF3T2tVQjhHRmd6bkx5UWxmd3Y0azhzenQxdkFWYlFjaVV1Tm9FWVQxQjRaSFY3WlVqVXpRX2FwSWx2MGFCemZGTS1pX3huZHFBUVk3QWdxWHRRUWFhcUpYWXpIbzJPaENB?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "kredit krom bank tumbuh 50 4 persen gandeng easycash perluas penyaluran kompas com",
      "id": "829b87469b3e4921",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f56a5f5a6827f183",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-10-22",
      "title": "Kredivo: 48 Persen Pengguna Baru Kredit Digital adalah Perempuan - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOTkNiVXFpU1BBcVIwaFdRYWZ1TUpaWGhnUE5FUGxlMWVORlBRbXUtNGpGLWp2NHZsUXhIOG9XeEtFT1ZJeGxYdUJVYWJlRERvRHM3Rm5jRVdzc01Hb1hMZmJORUVXdEY5dTlfNjlkZjFZd1Bzc2w5S2hnbFZELTd4ZFBYaW9LdG5Vendwa2FReDcyUQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "kredivo 48 persen pengguna baru kredit digital adalah perempuan infobanknews",
      "id": "9115907d37f712ce",
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
      "eventId": "auto-a469b405bd110aff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "Krom Bank Gandeng Easycash, Kredit Tembus Rp11,59 Triliun pada Agustus 2026 - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNb19KNDRSZG9NdllTeXNNNkVzYkhCTXo3Q0lKVHItRnZoQ3czT1BVNE9lSi1tYzAzMFhRa1ZfcEFKOElWVnRmUUJHWHNRWkZ2ZTRjbi0yelpxWXBIM05NWHFOc05BOE1RVVJBeC1QRm5pbG0waTdtWndKMk1OV1VHWTlBV0ZkdzMxbGNlS3VIZ3NQQlF3QUE2ajVjbXVudzQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "krom bank gandeng easycash kredit tembus rp11 59 triliun pada agustus 2026 infobanknews",
      "id": "ef9c612e832810b8",
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
      "eventId": "auto-687b97eed6b3397c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "OJK Catat Pembiayaan Pindar Rp106,94 Triliun pada Agustus 2026 - شبكة تواصل الإخبارية",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE8wcmZ6Zjd4VEpmeGdJWUJBRDZodFFxWE9JUjRCZlRvcTc0YWxTUnp6MkctTWduclZYLWZfM0VSTUZsNzBOUXZldXJhTWxWWm9jdFI4?oc=5",
      "publisherUrl": "https://twaslnews1.twaslnews.com",
      "source": "شبكة تواصل الإخبارية",
      "summary": "ojk catat pembiayaan pindar rp106 94 triliun pada agustus 2026",
      "id": "06c4754eb57bb707",
      "domain": "twaslnews1.twaslnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2f040ed2d24748fc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "OJK Sulteng Ingatkan Bahaya Judi Online, Pinjol Ilegal hingga Pencurian Data Pribadi - RadarPalu",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxONld3QmsxTzJ6WDMwajBUNU52RXFlUnJKZEpOR2lxVkJ6UGIyRVR3MlZmcUFTWGt3a2Z3OW12VkZHOTNaNWFkdklsd1NobFZ6UDFVc0RYM3JmdGxaT0JQNVQ5aGkyMjJ2cHdsaTBBNHJQVjYyRVMtcDJSMWtLTDAyUmFvOGl4ZU1COGNFV19TRDBGX1U2VjhTdmZtOGhBS21zaEFLOGJxWDF2dnVVNjZXdzQxZlNlMXBGTW5PcmJ4d21PRGxsUXhKaWItV0HSAdIBQVVfeXFMTUpJZDhfdEl1MFNJSnRVdVJYLVJWUmRoTUl5SDQ2d1F6ckh3VThKVFR0RnpPMDJNMmxNdHVyaGtWVW5CUXRPR0dINm5SVW9oM3RQc1Rnd3NqVDR0WE5rRVZVWlh2ZTVHQnJISjVYSURoNUpucFFyMEVxdTVoQnZUMWVDbERBYU5pQ1IzOURZMGEzaF9KMzQ4RjQtRl9kNTlHWC1KRWM1bURBbjNZTElLMmdsaGFVY3A2R2FNNDEyV29idlB5TzE1OE1FNldDb2R6bjFR?oc=5",
      "publisherUrl": "https://radarpalu.jawapos.com",
      "source": "RadarPalu",
      "summary": "ojk sulteng ingatkan bahaya judi online pinjol ilegal hingga pencurian data pribadi radarpalu",
      "id": "417ad2c5feabddf1",
      "domain": "radarpalu.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d3f09c6c8888615b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-22",
      "title": "OJK Waspadai Penyalahgunaan Rekening Dormant untuk Judi Online dan Pinjol Ilegal di Tengah Target 25 Juta Rekening - TOPIK.ID",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQbk9ISENINXFmWVkxSDRnVWJyLVdKb2owRVBTOU5mTlhOUXZZNG5KelRGQmJUdkVKd1JEaTEwbnhYYjc3cjhhLVgzTjhRemV1N0V0aGdnZks0SmRpb3pYTkxPZHJYRWJSSDJ6ck4yTzlYUVVka1pMS01Mb0hBWFZiTkZ5NVVSd0pGelYzdUxGR1hHTFNkczBDcFhlVVZ5NWhJVEtjRVBaanRYbXJLUjktOVh5SWRaLXhQOExTTnp5aFVQcTdYY1BLWWNxTDhiczct?oc=5",
      "publisherUrl": "https://www.topik.id",
      "source": "TOPIK.ID",
      "summary": "ojk waspadai penyalahgunaan rekening dormant untuk judi online dan pinjol ilegal di tengah target 25 juta rekening topik id",
      "id": "a58acc1fba17008e",
      "domain": "topik.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-681c16d00e221342",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-22",
      "title": "Pembiayaan Pindar Meningkat, Kolaborasi dengan Bank Perluas Akses Keuangan - InfoPublik",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPbkhtV3NKWk9YWklZMUl3dDdUQnM3amZOX1V0RXc4bFNQbGtXalI1MENWT2llYnR4VmZXdDZNY2taYUhFbUVWdTh2dWw3Y1BzbEU1SmdsTldSbDZJbk95UlM3ZjlIT0wzMmhhbmRTdkQ5SkpEYTUzX3dyQkV6QmQ4dFFrbm9yU3FPVy1HdnJyZGxaWXlLbC1IY3dwQnpuZG9qdUFUWTBvR1VpQms0SXpDZEdYZVdXRjZfNzJjTEpCcm8xdDRHSktQOE1vTkN1VXN2?oc=5",
      "publisherUrl": "https://infopublik.id",
      "source": "InfoPublik",
      "summary": "pembiayaan pindar meningkat kolaborasi dengan bank perluas akses keuangan infopublik",
      "id": "3a8dee576132ce22",
      "domain": "infopublik.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ab53c4fd52c3d0c8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "Pemerintah Siapkan 25 Juta Rekening Baru, OJK Waspadai Risiko Judol dan Pinjol Ilegal - investor.id",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPN2E5TzZNLU9oZDVEcF9tSEdkQkF0cnRFVjhPWEFua2JJaGVpME9XbUtnQVloZHBIcFR0NjEwMWZHYUZLMEY2ZkVTQ3UzNm5CbTV5N2R0QUI5TjlmTXl4QTlzaTdOdzl0VHduWGlXQWxleldHa09sX0VLMXc0WTNiQ1Uzd0VNZlZrQ0hraWstSEhZekRGcmk5eU5ObGliQlRoWlNmTTNINUtqd0tqMlJUNmlROHVhMG5xTVpZ?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "pemerintah siapkan 25 juta rekening baru ojk waspadai risiko judol dan pinjol ilegal investor id",
      "id": "40435814b1673e8e",
      "domain": "investor.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe81bbfd5f6a58d3",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-22",
      "title": "Pengadilan Niaga Batalkan Putusan KPPU Soal Suku Bunga Pinjol, Ini Respons AFPI - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE15QzY4d21seXkxNDJUSndINTZ3QjlEajBVQmZIc3RPd0ZTblloTVM1X1NZWEZQNWQzdzcycXBWdFRDR0E3WUtyMmhkNWdVTHdwYlUxbWFVUGN0alpnSjlQRm0wSUpFQQ?oc=5",
      "publisherUrl": "https://id.tradingview.com",
      "source": "TradingView",
      "summary": "pengadilan niaga batalkan putusan kppu soal suku bunga pinjol ini respons afpi tradingview",
      "id": "13f1945a12de7b1b",
      "domain": "id.tradingview.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6f230d4aa7071a59",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-22",
      "title": "Peringati Bulan Inklusi Keuangan, FEB Undana dan OJK NTT Edukasi Mahasiswa Cegah Pinjol Ilegal dan Judi Online - UNDANA KUPANG",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQd1BsQVdsNU1hV3ZEM1VMeWZpY1lkdWNDTWZGUVNMa25LakVUNC1nVFpmM1kxaENNX2hlYk9vMWtkTzIyZFVHSWxnNVdvNE9URGw4c29Ra2xuLV84dHloMnM2SXllQVR6RDl1elJndFN5OTE0TmpLMnNMMDhZYkdObHRpY0hYOWwwNEt5aHpCUWl2d3dWRnpJU2M1dDhlNHExZVM2MlJkS1BhNkRMd0hwUS1NT1ZRd012d2pSYXY2UTFrUGRqYXlfaHo1WnIzclEycVNHLU9n?oc=5",
      "publisherUrl": "https://undana.ac.id",
      "source": "UNDANA KUPANG",
      "summary": "peringati bulan inklusi keuangan feb undana dan ojk ntt edukasi mahasiswa cegah pinjol ilegal dan judi online undana kupang",
      "id": "ac719d2aa663618e",
      "domain": "undana.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b243914b03ad78fe",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-22",
      "title": "Tagihan Listrik Bisa Dibayar Pakai Shopee PayLater, Ini Caranya - nova.grid.id",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNU2hxZW5hN093b0hHbnNJR2lMT3BVWldVcVlHek90aUExUnZPZGR1RC1GSXFaQ25nSnEycDNzbVktdUd0QUJsMk45NEtLaW1IRDhiMEJBbEhqMWlnYmt4ZFFOcjJFMHdzRjRnRmdYeWhPMW1reTMyN3plTUJLa2MyaE5XZmlTTWZkRHI1MTRDYXRPWHBzY3ZfNV9XdnZOZ1XSAZ4BQVVfeXFMUHRyWDVhbV9xTVJ4Ml92bEUxU1FwSElUbnZjU0ZJc2xhVzdjN0hpbGN4emdIUjhPc0FRbDJLb3JZd0ZrWkM0UjN0MURpN2d3TWhELWMzV1dPU2pZYW9qUHh6VlNnd3gxbjI4X0t0UFZsZE9YVklZdnJYNFBMMGYxekVNbWp3QW4xY1E4bUJURGFRUVdKWVBtTXA4LWJfQ1E?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "nova.grid.id",
      "summary": "tagihan listrik bisa dibayar pakai shopee paylater ini caranya nova grid id",
      "id": "f8208ba8009086dd",
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
      "eventId": "auto-09ab7e743f8e7a47",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Awas Teror Debt Collector Ilegal! Ini Risiko Hukum Menggunakan Pinjol yang Tidak Terdaftar OJK - radartegal.disway.id - Radartegal.com",
      "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxNdFJWSVo5dHNBc2xtX09CeFZ4UHU3VE5DVkh3ekIwSTdqeFd1RzY2QXBDQW83QkZ1YXJqODZVbGxYLUJPWWZPbV9WV05wejJiTFN3VURmSHhFWUR5cDR5VWptQ0VFd2RZSmVvdmNCTnNmNC1reWRjV2YwcGp2TmhuMjAxYVdQMmhyZUZQY09OVEVtSUtEQjhLWG9tUDB4cUVrSHlwLUdwaU0yZkk2UDlidGdpVHpsUFJqVjVUVFJkYlQ3YjRSR2xKNkw2QnJZVHhZV1EwWXJzeFAzZVcz0gHOAUFVX3lxTE1UeEZLS19kMlJHdjRyLXBCUU15b3VpY2ZvV3gwRklyVGxMdks0WVVNOEFtY211TW5femxscFBBaUxkT1hBcVVNX2pjNUpSanZkUjFaaXdWZ3pDZHBrUndkRU05Q3d2NGF1RjY1Y1NVOWJyNG5fTkczcFVTN1ZUU1BneHd2b09Ta0p1Q2hjSXFRd1R5a21zMnRaUG1qLVgzSnZPMVNiakNLX2E5c0ViaDBRX1VjaWRrYXJxbHRkbzZqcXRWaG9hNmlldXdMYWRn?oc=5",
      "publisherUrl": "https://radartegal.disway.id",
      "source": "Radartegal.com",
      "summary": "awas teror debt collector ilegal ini risiko hukum menggunakan pinjol yang tidak terdaftar ojk radartegal disway id radartegal com",
      "id": "c77cfe87b055e0d6",
      "domain": "radartegal.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 7.5,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5c1650988223b030",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-10-23",
      "title": "Biar Gak Ketipu Aplikasi Bodong! Begini Cara Cek Legalitas Aplikasi Pinjol di OJK - radartegal.disway.id - Radartegal.com",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOVW9fSEExSXNPc1dWWHIyU2pTSllNYlVmWGl0bk13SFJuTFRDM2t4U3c4NTZVSTFYZzh3eEZSS1lMbzRxVVV1TVU3RV8tV05ENVNERlpOaGhocHRQSGlPREVMRzBJbk4zSFhvVzc1YUNCTUYtYm5vd3dkYkY2UWJvQ1ozMGl0Mjlpd3FvUHVMRXlUTHQ1b0FSOEg2SjdwRHdWNF9QdlpweW1kVVpRU2p6b0ktVWM5TXBhZkQwMG1RNWlURjJZc0E4NVk5MNIBvAFBVV95cUxORzNpTHpEX1VyV1dzVW9QVWJWWk9FaHNoNnAzZ3Z5b2dPSWdYU3dPRnlzM3p0NUZMUEpFd0RQREpmS2J2c3k1WGRYX0thMzFDZUc4TzBMV09uTnpFdlcxS01ZdWdEWWEwV2RPcHBXTU5XbFVHVFJLMWxCSUJaczlLcWgwX3J4VG5vTDQzT1VkVDdZMGU3SW0ybGtncFNIQkVHUTRYZXIwQmQ5WFVpYUxHQnpRS2xPd2psMGluWA?oc=5",
      "publisherUrl": "https://radartegal.disway.id",
      "source": "Radartegal.com",
      "summary": "biar gak ketipu aplikasi bodong begini cara cek legalitas aplikasi pinjol di ojk radartegal disway id radartegal com",
      "id": "1e913c87c63c9645",
      "domain": "radartegal.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c6d32980a844922",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Cara Melunasi Utang Pinjol: Solusi Gagal Bayar (Galbay) dan Aturan Penagihan - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxONGlkLXlmN2lzdnJmU2lNbHZNR01rby1PYkt5LWJ5b25ia29NZ0w1TDlvOE9sSUFXUEkwZDJnMVB2Mm5KekU5YjRreUN0R3BuY0d4VGNOZmRCV2phYTRnaWJCdC0wck5pSUs0UDE0S3NEdkQwR0hXM1M4MDRVaXA1eFlqZ2d0U0JiLTEzYTBGRlYyTHlMR2tudHZOdTNYVU1UY0VuUTJ3bnE3d0tVbThjNkZOVFYzUGc5dmt1MmtUX1A1czN0Nnc?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "cara melunasi utang pinjol solusi gagal bayar galbay dan aturan penagihan bisnis com",
      "id": "ed0fba089274230c",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 93.4,
        "label": "negative",
        "negativeWeight": 6.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-213ae03ffd6ddf74",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-10-23",
      "title": "Dampak Karhutla Mengancam Investasi Properti hingga Awal 2027 - BertuahPos",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQUmdwa19pejZiM2szY18tQ3NQV0c0UzBZYzFmNDFCSnJZQzhFNkpyUFB4enlwQm9YMGRrdkswVndMT0JucXJNZVRpMHc3aklqY3lmbjlsaXEtRXh0TFRBYVRSaGM1MkFickZxTENtS1lFdl91MDZhaEtHSDNWdUwycXpRd0FhWHl0SjNZOWVkcW1WQmROUWlDM3l2b2dUdw?oc=5",
      "publisherUrl": "https://bertuahpos.com",
      "source": "BertuahPos",
      "summary": "dampak karhutla mengancam investasi properti hingga awal 2027 bertuahpos",
      "id": "d55b314a8b158e2a",
      "domain": "bertuahpos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d2408a7f8cc53583",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Foto : Hakim Nilai Pinjol Syariah Tak Bisa Disamakan dengan Pinjol Biasa Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQWElIamVtTEtuR2c2VzZGczBZaF8tS0tGblpHWk9VQ1BRaVpKWW5rSF9FU3BLQUFYNXpVaXVkZi1GdUdxeUQ5R29zeGo0NnVrVEJzU0FZb0t0X0VPbllhcmNhb3hsbFFsaEQ1WlhzTVhMZHE4c043M2FUcEU2ek9QeFVYclNFRWRvemZGSnpPVUJEa2xTV05zSnBZUEFRVTVPNXcxZHVybzZ0NFlUZENXZk1vcVc1Q3ZDMzZaa2xfSzBkUVJx?oc=5",
      "publisherUrl": "https://nasional.kompas.com",
      "source": "Kompas.com",
      "summary": "foto hakim nilai pinjol syariah tak bisa disamakan dengan pinjol biasa halaman 1 kompas com",
      "id": "ef3716903ebe596e",
      "domain": "nasional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-546af097ee462d50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Hakim Batalkan Putusan KPPU soal Bunga Pinjol, Ini Dampaknya bagi Industri - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQbGRrdWtRSEdlWi16ZVFCMHI0aEREWUpXOFNBZVdrOTdmT2xGNWdKcmhibWlGS2s0bnVJR1FNWXRGMS1OaF9ROGZkTnJJbmRsVjZWTER6ZGFsZmRkUGxqQmpUdGJTRmJJNkpVc3Z6dFp2ck1QcG8tZktMdFBQNXRZNmFUYXpIYVlPU3VwX0tVeTAycTRuQlV0ZFRNUjdHYjJmSkE4c1BFMVF1cktabTN6dkU4WEc3UElfQXlNWVRySE1LR09KcmxmR3lIRUtIQQ?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "hakim batalkan putusan kppu soal bunga pinjol ini dampaknya bagi industri kompas com",
      "id": "cddbd7b98e977a9f",
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
      "eventId": "auto-92f6c2c55a807d5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Hakim Nilai Pinjol Syariah Tak Bisa Disamakan dengan Pinjol Biasa - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNZnJ3WW1ia1UyU3hfUzhpZTFEOHhiMnBzTFhBTnZZODlDMHpRYXdMREhmd3AyZElPSTBBUmRwWTlDcEJ2cDhURWliS21fU0RLcTZhZFU0U0x0MFB5MGxaYk5RUkJSd0QtVV9KRm1IVWxDNWx1TEtyWjVNT1FXNmtCU3BLcFNIR2pMd2t3bDlYS1NPVjlBNk13TU40ZnJ6bkRxRkswWGpON3hoc0tCRnV1bERsSDFsNVBtRGpLTXBoUTBpQmhtQVE?oc=5",
      "publisherUrl": "https://nasional.kompas.com",
      "source": "Kompas.com",
      "summary": "hakim nilai pinjol syariah tak bisa disamakan dengan pinjol biasa kompas com",
      "id": "fc97d640640651c4",
      "domain": "nasional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2c326480ba10063b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Harga 4 Konsol Game 2026 dan Tips Beli Tanpa Boncos - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1Qd3VRUHg3YkZ5WDZHYUhqbFZ3Q2ZiOFI0d3NkaGFsR090a180M01veXdET2hqQlZDSWtxVXJ5V19JUGdSSEdfaDFvM01FemJZNG1ZMTdDTERMeGh6QmhqNzBhNnZTd2M?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "harga 4 konsol game 2026 dan tips beli tanpa boncos kreditpintar",
      "id": "f2ee191b7dadf675",
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
      "eventId": "auto-57d1ba44adf6ab6e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Kemitraan Easycash dan Krom Bank Perluas Penyaluran Kredit - Olenka",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQVVQ5NzBEUmlhVVFLbWVnRWN1YWlkbUxBQUpQRVRiczJpTTdRZTlFS3NERUstbHJrMVFJWVplc21ta0cyZmlLQ2Rmb3hjYUtpc1ZFSTJzZDJoZE9zeWo2QVczWl9JUjNDRXM1MGp3VkpuSGJHSDFvVUdsWng2VUc4UVlR0gGHAUFVX3lxTE9nUTJwVTd2QTB5MldvSDhhb3luNHJYQWkydXNoaFd0Ry02dDRwTUk5QTJ5djRxcnJtMWRXR1ZxNzdWM1VSM1lyNlRnbThNaUpnWFRYSlcxeHVCSEpEa1dVT1dXUGpRc01NZWt6NTV0YkIzRUpzWFdVT2Z5cTBzV25Ld0VXOGltRQ?oc=5",
      "publisherUrl": "https://olenka.id",
      "source": "Olenka",
      "summary": "kemitraan easycash dan krom bank perluas penyaluran kredit olenka",
      "id": "3d21043af420b69c",
      "domain": "olenka.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5613bada12d034fb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Kredivo Catat 48% Penerima Kredit Usahanya Adalah Perempuan - youngster.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPU2JoNWxqYVdRX0RFdDFzRXFmVFROSGlEeVMxLXJ1dVpqVUFMVlJtNmlweUNfWEtGN0dKLWZDNWt6Zk1EOGJvR1hKR1J0LUptcm5YcmtiTUNkck5VeGpydHJVeEo2cGxJbGFNQi1tQWY0bFRmZFFMejRlanpIQXBpOFpyNGo2WUttWWktMDdLMm1nUXpHM2hvODhHY0tDX0JtMWZGOEZsZlVmQdIBqgFBVV95cUxPU2JoNWxqYVdRX0RFdDFzRXFmVFROSGlEeVMxLXJ1dVpqVUFMVlJtNmlweUNfWEtGN0dKLWZDNWt6Zk1EOGJvR1hKR1J0LUptcm5YcmtiTUNkck5VeGpydHJVeEo2cGxJbGFNQi1tQWY0bFRmZFFMejRlanpIQXBpOFpyNGo2WUttWWktMDdLMm1nUXpHM2hvODhHY0tDX0JtMWZGOEZsZlVmQQ?oc=5",
      "publisherUrl": "https://youngster.id",
      "source": "youngster.id",
      "summary": "kredivo catat 48 penerima kredit usahanya adalah perempuan youngster id",
      "id": "86d2aec1aa021f22",
      "domain": "youngster.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac8d385d81fd32de",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Marak Program Pembukaan Rekening, OJK Antisipasi Risiko Dormant yang Picu Pinjol Cs - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNcTNiX2NiWkFRZEk3QlI1djBpZzRtSWIwZV9LMG9EM2xPME5XN3dXVUVHRVVzUlVNR0J1ODZuZHR0ajM5TnVSS3IwQ0drSjRTalp6bUxkaHA5S3hlaVFxd0VaUHlUanpqRlMxQ3FQU1B4a1U0dC1mR3hCNVBqdEpyWEN6aVBfT3RZb24zb3dDWFYxQkpHOUhLS25iU1dMVVVSMkc0NEVMQ2NKYXJPcHg0MzZVc0FlLThHQnJRZFJUTEwxck1WbVZaSm4xbTNoR1FZbEE?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "marak program pembukaan rekening ojk antisipasi risiko dormant yang picu pinjol cs bisnis com",
      "id": "84bb8e33370789ab",
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
      "eventId": "auto-f8778296d51e78e1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "PN Jakarta Pusat Batalkan Putusan KPPU, Sengketa Batas Atas Bunga Pinjol Jadi Sorotan - Dandapala Digital",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPNVlTSE11MU1PLVlNRUJvQjdrbGx0RUxGNng4b1JtVmwzalFMNTcwSGVnVXVPNVBQaDZRZ1U1cHU2SjBsVmFINGVqM1dQdmgwSEhhblFaSDg5QUdBZ2EtNWxaUkVTV0dPTWUtLWZod2hRdlBKUWF3bG9VQUlzV2pkMXlmYm9Rei1CVllXTmtQQV9xVVdnenVBamk3VlFQYjY5SzItY0NLMFdCdmFwc3ZtSEZ1NU9oWlc1QXI3RnNR?oc=5",
      "publisherUrl": "https://dandapala.com",
      "source": "Dandapala Digital",
      "summary": "pn jakarta pusat batalkan putusan kppu sengketa batas atas bunga pinjol jadi sorotan dandapala digital",
      "id": "f08c1ad339da1a55",
      "domain": "dandapala.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c4dbd913763a1e6a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "PN Jakpus Batalkan Putusan KPPU Soal Bunga Pinjol, Ini Alasannya! - Dandapala Digital",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNVmljMEVBckFiVXJXNnc1TFBOU3VLbHBscU1YS3RUOWFKblVNc3Znb1dtYzh2M05fRXRZc2pWYmNWLW12RFJxM2ZMV1h5a2oxSXFFbFNXdWVESmMtVl9TbWR5UFJTa29pU3F1bVd2VUV3U2V2ZExaRUtBaUtSc05Pak4tX1I5UU9PSDhJZU9TcXJfQi1DbFJyN0I5ZkZjWnU4Q0E?oc=5",
      "publisherUrl": "https://dandapala.com",
      "source": "Dandapala Digital",
      "summary": "pn jakpus batalkan putusan kppu soal bunga pinjol ini alasannya dandapala digital",
      "id": "d5d3bb2f4da51912",
      "domain": "dandapala.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9511a077b3fb22af",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "PN Jakpus Batalkan Putusan KPPU soal Batas Atas Bunga Pinjol - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNeW9UNXY1SkQzYmlJYXl4MHFfTDVOS2c4ZXZyRGFlY1dvRlRGaEtEQjgycjNMYU93ckdRRVhWX01YZDdTRmJ0S3VKV3BQUDk2VUxzM0JlbEp4UTJGSFlxMFlWdnFuazZDaFZDd21ic1pWdm9IcEV4ZUkwREExc3hoeG8tQnZSVk4tY29WYzNXWURsd1ZOOTZVc1p0RjFheS1HSng2S2RRd0tDVm82WE56NUpjdw?oc=5",
      "publisherUrl": "https://nasional.kompas.com",
      "source": "Kompas.com",
      "summary": "pn jakpus batalkan putusan kppu soal batas atas bunga pinjol kompas com",
      "id": "3885750c2771619f",
      "domain": "nasional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d488ab6d950d0d2f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Putusan Bunga Pinjol KPPU Dibatalkan Pengadilan, Ini Kata Asosiasi - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNcHFYclNWYzd5eURxMmRRMFNoY1UwR1hTbUM4SDhLR3c4R2FucTU1UG1xdnBoUDVScVJVejBIVWFUWEZHdzlhNGhRUTZqMmlpNVpLZmhBT3lVTHZ5VmhaWjV0eVBITGR6eTROM2RLVm4xNEs2WUI5cEMxTGFpTTBZTmI2X0xxZ2l5T2EzQlZpUGQzeEM2d3RYdjdHQXpzb1FIN1JBQkRlTkhja1Q3eXFsNXpldUk4STdCRXJoc2d2RGhUQkE?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "putusan bunga pinjol kppu dibatalkan pengadilan ini kata asosiasi cnbc indonesia",
      "id": "20b88ad77b94a06e",
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
      "eventId": "auto-351e4b5fb925c690",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Studi LDUI: 48 Persen Pengakses Kredit Pertama Kredivo Perempuan, Dorong Peluang Ekonomi Setara - IDX Channel",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOdXhDbW5xR0VscWdOdTYzTXBjeklNcW52TGFrckJuZkdPeTB6NktMY2hJLWdTcHhCbGJIc2lfWnN5LWdjem5Nb2hPNENCdVRHSEdxb2pJNzJJak0yOG8yRmlRRDkwZ1d3S0IwcUN2R2lMLVZXTzc4NE4wekdBaXRtWGNtal9ITG55TURObHlKVEdqSXhjR0s2YXp6bGRtOGJTYWpDZjN3Sk5ENXhjYXJjZzZjT19FaEh0MklCUUJfZkJvWXZNNTdTNFVR0gHPAUFVX3lxTE9tY0tBenFlaFhYdm9rVFlmLVoxMUdzS1l4clRZTGxveTd1QXlWbC1iRllnaVVrLUt3LUVQRlpkZmNWNnAzNXhrbTZnMi1LclI0dk1nYkJicHcwUEpMTTZDMVZONkNrZVdqTkh1bkY5TEJ4WWVuT1I3SnpISVB1TkpSNFdrcS03ck05bFdZZW5sUE9kenBfT1RvOE9tMDRsa3ZUaXFXQkM4QmluUGlzcGlMczc1V2dqam1oc0l1WnBuUV9zVWdkQWYwbUJQZVZSbw?oc=5",
      "publisherUrl": "https://www.idxchannel.com",
      "source": "IDX Channel",
      "summary": "studi ldui 48 persen pengakses kredit pertama kredivo perempuan dorong peluang ekonomi setara idx channel",
      "id": "ac8bb62bd07adec6",
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
      "eventId": "auto-cf9e0aa7562fd41c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Studi LDUI: Perempuan Mencakup 48% Pengakses Kredit Pertama Kredivo - Mobitekno",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE12STRRc0NoVG1MR3Q0ZmItNEhkMVdCdmxmeTdlekprNVFJUHdZekx3MXRma2wzOHVhczJzdjBNeXhMVlhXOVV0Y2dmOUpZdHRrcnk0ZDdZYl9zcVRLaS00VE0zSThqTk1FUVlRRkJPcXJtNEI2SGY4UVozeUx5UQ?oc=5",
      "publisherUrl": "https://mobitekno.com",
      "source": "Mobitekno",
      "summary": "studi ldui perempuan mencakup 48 pengakses kredit pertama kredivo mobitekno",
      "id": "ed6164ae5865f79f",
      "domain": "mobitekno.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e42bddce7f84165e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-23",
      "title": "Terlanjur Galbay Pinjol Legal? Ini Tahapan Hukum dan 7 Solusi Bebas Utang yang Aman - radartegal.disway.id - Radartegal.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNenNBUFlsT3dUNTlXb0doLTlMUzZpZjVCSEpqTWt3NG5WQUNNY1g0MC1LMi1tREVfVENYcFY2X2Mtcktfb2pjbDdKSWlkalRuRk1jQ1pvMUwtbzdsZEJrcGk1a2xDaTQ5QU1xTlNERFFJcXNsLWdHcjV3YTdfMHdUQWJsMVV6VnRkQkFhUll5T0VPR3BNSWtIVHRqZ251b2VvQWwtaDZJSmtmRTc3ZURYa1hZb25NYk50Q1pFX2g0ZDdIay1UVDNHT18waHJDZ9IBvwFBVV95cUxOSVVDV0JxaVYxam1QTU14NTA2VkZZWGVuZWZwQ1ZSVFdqTUhUTXptY2JZaGlPdEdWTmJmRGNqYllRbnRYcUVyV0V5X3dsczItcThvQUppelNGTTJ1RmM5TERRTWdWLUVxZmd3eGVpU0JKbVNTVzNnSXpMQlVQdy1qQk01ak41aDhXQmhQMU5GOTNrT095cldwQThXRFo1d3hDYVhTd01ZRGdOdzVzazdfaHVqRFlvSWtUTEQzMl81NA?oc=5",
      "publisherUrl": "https://radartegal.disway.id",
      "source": "Radartegal.com",
      "summary": "terlanjur galbay pinjol legal ini tahapan hukum dan 7 solusi bebas utang yang aman radartegal disway id radartegal com",
      "id": "5aae5a6f19fb53ac",
      "domain": "radartegal.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 62.6,
        "label": "mixed",
        "negativeWeight": 3.1,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c04d996a5ea970c2",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-10-24",
      "title": "Edukasi Masyarakat, Polresta Banggai Imbau Warga Waspadai Judi Online dan Pinjol Ilegal - Website Resmi Polri",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPMmVQZlNTMzBFRmdicU9uV3NXUDJPazNBVk10RjFITmZDOWVOS1hGYnhxblBSYVdsMjJuZDVnWHg5Mm9pLU1zckZKLWhxTi1SeXI4SktBR2NYdThGeFJiaVF0QXZYZnU0c2pSN1hCU2xnTExweWJNeV9NMXhpMk9GcXV6eHJ5QXNURUJRTnFsS05HSWtNbHBNLUdrZ19zZlJUOU0zUGEtaWZMaWxOeXRDc3hxRWtSU2RyckUwMmpvR1drbmNQVEN6QWd6SFV1QkNuMklKd0hR?oc=5",
      "publisherUrl": "https://tribratanews.sulteng.polri.go.id",
      "source": "Website Resmi Polri",
      "summary": "edukasi masyarakat polresta banggai imbau warga waspadai judi online dan pinjol ilegal website resmi polri",
      "id": "b7f43601013f23e6",
      "domain": "tribratanews.sulteng.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2714507a47d3d0e2",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-24",
      "title": "Lawan Judol dan Pinjol Ilegal, 60 Anggota Saka Bhayangkara Ikuti Penyuluhan Hukum di Polres Metro Jakarta Utara - Pramuka Jakarta",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNS24zcm1xVERobllrQlgwM1FLa0JYdW5WbU9UaVJ4TlpjaTJ6YU4wQjdnUjM4MzNDNjR3anI2NHd1WGNlaWtQNnBOdmRzTFZTbm85WWpqcEVpelpoUnV5azdWQVU2MUhKTTFKbWd5YkhXQmlJTWJRbk4wTkx4azA3YlBKQ1RQcUY2YjJHellaUkxKT1g3MTV3VmpHcUhUQnBWbWRYMlpoOF9LMGtzaFFlaEpNYzVMT0VJa2h2emN2MmxqMEZxSFVKM18tZzJFUlBRSkJR?oc=5",
      "publisherUrl": "https://pramukajakarta.id",
      "source": "Pramuka Jakarta",
      "summary": "lawan judol dan pinjol ilegal 60 anggota saka bhayangkara ikuti penyuluhan hukum di polres metro jakarta utara pramuka jakarta",
      "id": "6945fd1e732b9da8",
      "domain": "pramukajakarta.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e7ead69e1fe205b3",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-24",
      "title": "Pengadilan Batalkan Putusan KPPU, Denda Rp 755 Miliar ke 97 Fintech Pinjol Gugur - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5Fekl4XzM4RVgya0RZTUJQSjZPWHR4cm92by03TFNOWWRITW5tdjk5UnVkeFFRNmV2Nl9DVVBGLUVVWldRb3E4ZE8tRHJ1QlVydnN5M01lSi1RTFp4OWRsODVESXJsdw?oc=5",
      "publisherUrl": "https://id.tradingview.com",
      "source": "TradingView",
      "summary": "pengadilan batalkan putusan kppu denda rp 755 miliar ke 97 fintech pinjol gugur tradingview",
      "id": "376aadb4a5794a38",
      "domain": "id.tradingview.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 1.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-08ba3748095a560f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-24",
      "title": "Studi LD FEB UI: 48% Pengakses Kredit Pertama melalui Kredivo adalah Perempuan - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQSjlleGlwRGtKNjc5ckZsWHlpOHBJcnR2SEZOQnJLeGxIakM4ek85bTREblJ0YXdrWUZMYTRIY1NMUVJpdzdoX09NQnpFQ2o5SFN0TGVEMHhoV3NnSlpSUHhQYzg4MUFEQl93aVB6X2JxZWNfaUNTbFBJbE8zaTZpdXFZSi1NXzBkcVIxOHNHYkQzVkpQUlQ0NzlnNl9Yblh5cmk1S0ZyZDFRdw?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "studi ld feb ui 48 pengakses kredit pertama melalui kredivo adalah perempuan swa co id",
      "id": "1583cda4c88832a2",
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
      "eventId": "auto-f057e0d14f2d4d57",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-24",
      "title": "Tanda-Tanda & Cara Mudah Cek NIK KTP Dipakai Pinjol atau Tidak - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPTXRhXzdIeG4xR2FSVUxJcnZqUU9CMnBaeFpRNC05YUdvNkNpZ0xrRnlxTk83TEJYXzFEWU9xcWpXNXpaQ0hIRVF4YmpFQkJ0VVpDTlFrd2N3VDRVOS1feGFscnhHcFM2SjBreUNTZzF3ekZsOHZySmVlMVlySnRUUnYzNktlS0ROcVFKSkNGMV83OW5DOE84bmVDajN3MEFHQ2o4ZGlGX00xbmhVSk1uM2VUVTFqVXBEOEVuVQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "tanda tanda cara mudah cek nik ktp dipakai pinjol atau tidak cnbc indonesia",
      "id": "dccde0bbaee4eb38",
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
      "eventId": "auto-4deb27397af10ff8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "Download Dopamine TV Apk v1.0.6 Terbaru Anti Sfile App iOs Live, Link Nonton TV Olahraga dan Bola - Berita DIY",
      "url": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxPYjlsUlJ2RFVfcjdGdXNSa0EyWUg3ejg2Zi1GMS1qc0NPc25acFVqeldYb0Q4MVBFdGhtNWNHcU5ZRjd6RTZQWTlOU1BLQldvYXd3bXZPWnRiZVpXeVJGNGt0R1Y2QmpqSVVITkM2cFhyZzFvX0FsaVpOQ2JNdVVxaU1pVG45WElRV1p0eUpSaVozaGE2UnAxUDZyRF96eHU3N0NDQXFRaDZlMWo2eURQZ2pZdG93eVFKTzdpV28wNFM0eW11NTZYUUpUN0ZRNHdwS2NsMXpJZGZlSlN3dF9QTWZJSGhOWkJ0MjIwUFdrZ194LUhK0gHuAUFVX3lxTE9tUEFxZUR4QVFJMWlqOGYwck5wTEtWLTNWSjgtb0R0Sm15dkdYZ21PWUQyaUZTWF9FQldYMWIwS3NJMzBpUnRkS1lwTGRHN0dkMDlkVmQ4bHhpSUVPU1hRVWxPT3Q5TEdTXzRrNEVsR2lEalhRSkp0WmxvTVU5WnVOWGZUOG5kbTRuQmVVN2t0VTFZMEhvXzJFZVdNczNPU3hFaEVOelI4S0tOcUlWdVlxQW05eUdWUTR6a2Q4NTBVWTdLQWs2b1FsTVdELVNRX3pwUjhhaElyN3RkbkljMnd0ajZZM255d21md0NxSnc?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "Berita DIY",
      "summary": "download dopamine tv apk v1 0 6 terbaru anti sfile app ios live link nonton tv olahraga dan bola berita diy",
      "id": "5a62e70b708498e4",
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
      "eventId": "auto-47d74fbe1731ac62",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "Gagal Bayar Pinjol Meningkat, Masyarakat Diduga Terpaksa Berutang untuk Biaya Hidup - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPR3R4NnVCamtTaVBVa2pjcGVaQjd3THZzcTVmMTA5U3ZlZVN3TWJUS0c3cXFaeWhTVzZTeU5vOTBaMDlXQUFpYWI3ZmN3ZnBYLVo1cGtEQThGMDdfM25nX0hKeHYxMVUyMUl2dGZNaWpONjJGMFZDU0RVakp6RlVxMElUcHM1dU15aFdiNE5pT3FmckhuVEQ2ZnBNTTJmNUNjRTJGdzB0dXNEd1VPeHVJc1I2a3JYQm9PSkcxNk9kMmNna29kY1HSAcYBQVVfeXFMUEFIYlJQNFV1MGREMFNPSHlodWJfZmk0aFJEQ2xoMXd5RV9oaFpJVW5Pdnp6bnU5RjNLODNFQUNKT0NraUN0bkVEdUNjQm5nZ1R2QzZGOUpVN1ctV1BiVGNJa25zUS13bngzR0dONnJUOC1hNmZSdXM1R3NyRmtTQ0EtNzYzSWtaZ2dyYWN5cGtZSDlITnRFQzVPb2xnMDd5V3NaTFFJMW0tbGJlYzZ3Nk1YUU9uQmNKNjEwcmxieHFxQzBoNGp3?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "gagal bayar pinjol meningkat masyarakat diduga terpaksa berutang untuk biaya hidup suara com",
      "id": "33adb8cafb1daf6b",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d5626b361965c666",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-10-25",
      "title": "Galbay Pinjol Harus Dibayar atau Diabaikan? Begini Aturan Penagihan oleh Debt Collector - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOSFJrLWIzWjFYNXNhLVFaS05FeldCV01XaWZZZFl1MUltR2NYRXJYc24xOUZhQV8zNmJULXI2WGFQb2dEVllWbGZESHhnaWFLLVdPNkE4S2xfc0VTTWxfVTFFNERVZDVEODZwYmZvNmN0aXNkUGZYby1YSkdOS2lpbkZiV0VaSW4xbkVfLWljQWpNMm9kSXhFZm5ncVhaVkdjbWFuNVZjVEZMNkx2X2U3TzEzOWkyd2lBWkQ1UGJDOGk4cTBJWjR6RHRqVkl5Mk9hbEE0Q3FWbl8?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "galbay pinjol harus dibayar atau diabaikan begini aturan penagihan oleh debt collector bisnis com",
      "id": "4bbe4bbb506c7204",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.7,
        "label": "negative",
        "negativeWeight": 5.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-93dc4db394a942e6",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-10-25",
      "title": "Krom Bank Perluas Kredit Lewat Kemitraan dengan Easycash - Demokratis.co.id",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE0wQi1iLUoybGJWZlR0MGlmM1NnTjZTdjNBQ0s5cE5LNndGcV84a2NIc3kxUFRsTkZZOWpNRWM1Y3lFZFZhaGlvRmpHNFZpbUxENGl0VjB2R3RrUUMyaHJSaTlGVDBrNEZRUGF5Rg?oc=5",
      "publisherUrl": "https://demokratis.co.id",
      "source": "Demokratis.co.id",
      "summary": "krom bank perluas kredit lewat kemitraan dengan easycash demokratis co id",
      "id": "e4d07fbb61c262b2",
      "domain": "demokratis.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6c605c0a6bb00bc0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "Krom Bank Perluas Kredit Lewat Kemitraan dengan Easycash - SuaraGarut.ID",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE15ZHFFVVdiX1Z6TTIzcld6TkluR2JRYVBwZnhPTi1IenlmYzdWVlVaNUZ0dlN3c2xpd0w0ck1lRjk5VHRMR21tUzc5a2lVaU5ZeWN1N1AwQWowb1Npc21z?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "SuaraGarut.ID",
      "summary": "krom bank perluas kredit lewat kemitraan dengan easycash suaragarut id",
      "id": "3b9f0a95ba5cdea1",
      "domain": "suaragarut.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fa5f0db13e3ff9aa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "Mudah Ajukan Pindar-Paylater, OJK Ingatkan Risiko Gali Lubang Tutup Lubang - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPVGJSMVJVQlE1X0tCRE13X1o1My1rTE8zRW02YXYxbm1DY3hWS3ZGRmpzWTJlNmZlNnBpZDkxUjljb0VQLWJvWEIwV0tNR0VDemEyeXJCVEtkcURNZ2lhNUg3WTFsZ3A1MUVCY3ZITzc3WTRjaGNMWkhfdHIwWW9WdXpoNmdTMGZuMi0tbUZLXzRfaDRBc2hmVGMxYU04bUE?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "mudah ajukan pindar paylater ojk ingatkan risiko gali lubang tutup lubang infobanknews",
      "id": "2c6aa127c811a900",
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
      "eventId": "auto-8b72caabd5390974",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "OJK Ingatkan Risiko Paylater dan Pinjol di Tengah Lonjakan Pembiayaan - Harianjogja.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQUTBZRXZaZE5kNXhzWkZkNlQxanF4VTV0dUhjWFpWTDFLOTB4RHFJMEo3Z2xnRm1JWk9NNVN2UlVYd0VLX1Uyc3JDb0hCX0JSRVh0WEJzWlpKM19PRlY0b3RpVVJSQzQxbXNDZlB0MmdGQjRjb3BYUlNXeTFueldIa3R1VUJEdEJtSW9TdlBoMTR4a0kyeTVZUGJaYlgwODVMcUM4dGdpWE1XdjNFbkE?oc=5",
      "publisherUrl": "https://ekbis.harianjogja.com",
      "source": "Harianjogja.com",
      "summary": "ojk ingatkan risiko paylater dan pinjol di tengah lonjakan pembiayaan harianjogja com",
      "id": "4d05ba4229faf031",
      "domain": "ekbis.harianjogja.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1dd39cabec424a74",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "OJK Ingatkan Risiko Pembiayaan Digital di Tengah Lonjakan Pay Later dan Pinjol - Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQV1pBX0llY3ktWl8yMFdPNVB2MHdQNUhqRmlsOGlaa0pZQmFMUHV1eWk4MzZjQl9zWkVDbGNDNVAwMWg4UDlnRmFraHJqVVFrT3NKZUQtQXpncDU3WGJBdUV1dVhydThCSlZkVGozQ1pjdHZFRFJjd2xISnRwclhvZ2R3eTRISXlXd0FoUnBLWkJWdmVGeEhnQVZNRUswUXJBd0lHZXk5V3g3S0hLa0tRbWJPZkNfUHBCVFBxeA?oc=5",
      "publisherUrl": "https://mediaindonesia.com",
      "source": "Media Indonesia",
      "summary": "ojk ingatkan risiko pembiayaan digital di tengah lonjakan pay later dan pinjol media indonesia",
      "id": "21b9a03f3ba75871",
      "domain": "mediaindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2e3134936ce610e6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "Paylater dan Pinjol Tumbuh Pesat, OJK Ingatkan Risiko Konsumen - Head Topics",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOX2ZxTmsxN3VyYXNRZ252Mjc5SFZfM0pPVjdzcEdsWTBVZ2xSRm40amNjVGtDVmM1TmxpTXFKak43amlXU0hpV0RYNWktSXByZGtELVlZbFd2cllPSUVOMXdkWXFLLXRtMXdDRk1wZHRhTG5BWmgyU2lLYTY5a0hkYnAzOUlHczA1UlptNG5xVUhaa3lxdTdB?oc=5",
      "publisherUrl": "https://ng.headtopics.com",
      "source": "Head Topics",
      "summary": "paylater dan pinjol tumbuh pesat ojk ingatkan risiko konsumen head topics",
      "id": "3a4fe80fabe62dfd",
      "domain": "ng.headtopics.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 47.2,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f6624864ee07ea28",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-10-25",
      "title": "Paylater dan Pinjol Tumbuh Pesat, OJK Ingatkan Risiko Konsumen - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNcTdyMmxrRWdzczViYmUzNzQtV0RnZkFOOGFfc0c0MGo2aHJ1dHQtNFVzOXlWdHBkRDVrYUxGWGlsYkF4N3p3ZFJ3VTNpX0ZwNVBQUW1oRDQ5QU0xelEwdUVsbG1zcDIxWnVXSXlCcklSWFppdVdBVkg1Z3JhQUw3YTExTFpmeXFVbVBQZFFCT0NKQTdlQWx5b3VhVnZfdHRYVG9kN1VNcTJMZ9IBnwFBVV95cUxNSjhkMkhaaDdKeFVQV3VpNWFsbC1qbGNYNE9Bd3F4YXV3elh4U1RKNldaQkEyVDFaOUI0eHVoQ2U5RGlTWFVDWFB5c0VzWDlWUTBNd0Y3bGdVYm5weVlqeFNYeElXTHJuSjFKUlRyWHlUQjNEOU52cm1FeWkyQnRFVG13SlY4Nmx4aDhNa0NvWlloOFd5NTFqMHkyM09sd28?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "paylater dan pinjol tumbuh pesat ojk ingatkan risiko konsumen liputan6 com",
      "id": "6c170fce47ff30cf",
      "domain": "liputan6.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 47.2,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f6624864ee07ea28",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-10-25",
      "title": "Pinjol dan Paylater Makin Mudah, OJK Ingatkan Risiko Utang dan Penyalahgunaan Data - VOI.ID",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOWDBGVVEwSm9lOEpaVTlPVEt1UnRtQ2lRMFNBbF9udEpTNVhpdlROODhIRFAzTFVyMmRnWkhqRmZiVUxhSHd0anhCTnhHX3A1U21FXzlBMDQtNDR5eUp4U0NHMmVIdDZpZjZGTzRqSGljLVh4RVJfOXcxM0V0Nk5VSklwbktVblRlYm5HRGNiaFdfQnowV3pTbjBRa3YyMjNxNnhLUXJybUUxcnNhSGRSY9IBqwFBVV95cUxOM05hQ1VUYnF3dzY3T190N1hNZEZQVGZzLXNub0NRTGQ2YlI1d1pQeUxFUHU4b2NXeC12OC1qdi1QWVAzQnhQQ1dEWUhNSHRVNFBTOGlMbzJ4elROTlJOeXFlN1d2c0ZMd050eUJocExxT2gwVGZ1NG56TnJHS2tabWNVQzNlcm1zQVlFUWYwX3VoNHNPV0F4bkxEOTFfelFEeU1RdEN5a2xQNEE?oc=5",
      "publisherUrl": "https://voi.id",
      "source": "VOI.ID",
      "summary": "pinjol dan paylater makin mudah ojk ingatkan risiko utang dan penyalahgunaan data voi id",
      "id": "1ec3cb29ff827c49",
      "domain": "voi.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8c271b7c957865a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "Rasio Gagal Bayar Pinjol Nyaris Tembus 5 Persen, Ekonom: Warga Terpaksa Ngutang Buat Beli Beras - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPdE9nZGNYeW5JSHVTdV9xd01DUVNYa2paY2xXR1JwU1NfbnV0akJ4dGt1bnJNaGVTM0dQeUhFMXlaQ3pJWVlPd1JRc0RrVWkzOG55SWVldjhCbmc4M1J4dWlVQWJ3dEllTDkwWFBVdGRMYW5iZWlJdWlnNFA2R2JvanJPNnc0bXVxclNfU1NIT3hyZjNUVTBXZ0lEajVuN3FPQ1hwVEt3OFplTmVCbk90X1pNZkRaNTNQNm0yV0tPdlZoaXpCd0NDVE1SNNIB0AFBVV95cUxPQ0NIZ1N5ckxoTEhrN0pHSUVyQTFMS0JPaEE0R25uX0RFOE94YXNNQzRhUUNUSUdiT2VfUmt6eEhLRGNib194T1hmdzRnYjI1U3Zjd29qdEs3QlYzektIdkRWQnVDRXBsYzh6MjhYWlM4ckg0Y1hLSzBVN1c5MVRRcDhyT3RwN3VqdnAyNTFnZE9ISzRRWlNwSTdDRFJpV3NBVkN0VDNycHduWHJaT1JDc3BESEpxNkRqdlVKTjBuQkZDd2dmVlYyaU9oVGVKS1Jl?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "rasio gagal bayar pinjol nyaris tembus 5 persen ekonom warga terpaksa ngutang buat beli beras warta ekonomi",
      "id": "bf6fcfb53c5c71cd",
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
      "eventId": "auto-e9f060e6c98c7261",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-10-25",
      "title": "Tunggakan Pinjol Naik ke 4,73%, Riset Soroti Tekanan Daya Beli - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPaFdiS2JpemlEN2t4ZGpXeHdwTkxJOVVoWTBCbjVKSGRZY29GajJQb0t0WGRWWWJIWFZ1eTBKcFc3OWpCS2FZdTRRZ3l6U01Qd1NZM091NnBqZzZfeWVfTm9tRnRQdzZaQ2g4eWp3cWMzajdvQjZWY2RFUEs3cjc0VThoQ2U5R0Y3TkNCR1pwMGFkN3pzSThrdktDV1VSd9IBowFBVV95cUxQd0NiRjh2Z1lCeTZib1I4VG1Fc01OOUg4T2xXR3QyelpzSHN5MU5CQjNUaGxUZ0lGN1hZbXV1M1puYTlHTW1UMW50cnZWUFFQRjU3V0hNeDFPaXQzTUVQOVFqWjVzNXdNdWZCUFd6Z0NSS0dWUkRfNTl2Qm1XLTRVV0haNDJzbTFwaE1JYW1QbkM4WlJXRUV1aXQwdXJIdUYtY19R?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "tunggakan pinjol naik ke 4 73 riset soroti tekanan daya beli warta ekonomi",
      "id": "9d656b49ead232c4",
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
      "eventId": "auto-feb6712b05039359",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-25",
      "title": "Working in Harmony Nurturing the Future - Universitas Jember",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQeXgxRXFibVhFMFZzYkVxQjFxanBidUdDZmhRZ2VIekZMRHJMWWx4RjI5UlhudnNBYTRJTHdkdThpTjlGemRZczZIdkhYYldSSEVTQUl3b3I2SFRTOXVXcEp0Qld2OTVtZE5jQWgxNlU4Um5rUmRnRGRLcmEwb2o1R3ZjaDR2YmNhXzVaSTdJb3c4bDZkeVptQW1idFJ2S0FYdEFXbGdScWRlVFVZYnlDZjBkYXdKdXFRWGZzMmRSN3dVQVJjdlE?oc=5",
      "publisherUrl": "https://unej.ac.id",
      "source": "Universitas Jember",
      "summary": "working in harmony nurturing the future universitas jember",
      "id": "356bf7e6e0efecc4",
      "domain": "unej.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e2a57289909b641",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "Cara Melakukan Pembayaran Tagihan di Adakami - BPBD NTB",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOSTN5QVJSVlNVTG9uWUM1c1ZnSUFhdGExZmFxaVh3Yi1idVp4My1RTVRmSHFjdm5VaDQ3UFBFb2pBNktyWHRMTlpoVTdXRVMzQVpzM2w1U3E3TFVBWmdHeTdIRXlheVh0WFRIMjZCbENrUS1USnRQdFdldzhmR1N6OHh3?oc=5",
      "publisherUrl": "https://bpbd.ntbprov.go.id",
      "source": "BPBD NTB",
      "summary": "cara melakukan pembayaran tagihan di adakami bpbd ntb",
      "id": "f350981c1a152e41",
      "domain": "bpbd.ntbprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8ba0b8e0f2db7e8e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "Debt Collector Tarik Kendaraan di Jalanan Boleh atau Tidak? Begini Penjelasan APJAPI - Pikiran-Rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPNmFWbXRrVHF0ekZZYWtzeWQ4WUhLdGJsV19UVE45VFhRdVE0bGtad0FndzRlUnYwSnJGZGxTTGNqZkdfdGRNQ011WHpRQXVhazc5VzN0eW5VSXFxQ1F6ZnRSZFJEWjB5cFh0OHZGTENQdFJKZThpYlNqS3NidDlWUE1xTGNzRUlMWUNub0U0UVZOY0c3V3U2Tm9JemlyemlBZGdVa09iX1RPU0FhbnVWX0VuLTFnUEJaTFZVN3MwQXE1cExUSjZOZGp2Nmpjd9IB0wFBVV95cUxQazFEeGc4anU2aHBoMGFYMk1BSzZsaEQtcjl4c3BnYS15ZGR6SnhIdVRGWXh6RklJX3FIVGU2b2RVSy1IcGN6d2wtN0d5ekd6emFRVWx0dE83bjRFdTFlYmtoWE5iSVM2MzNRTndtQ1hfb01NSnJ1QkNMcFFER0Y4bUplczM5TlNIYzl2YTVDeVRQcTJqM0ppdnlrbm1rVENiOFVvVGgxRU9XX0RPNnhkS0JkRkc3UklqdDg4bVlYLWlHUVV6RUoyOUl2STFaM3Y2dVhz?oc=5",
      "publisherUrl": "https://www.pikiran-rakyat.com",
      "source": "Pikiran-Rakyat.com",
      "summary": "debt collector tarik kendaraan di jalanan boleh atau tidak begini penjelasan apjapi pikiran rakyat com",
      "id": "9434f12ed91b4725",
      "domain": "pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-abcb05ebf779a51b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "Imigrasi Bali usut 17 WNA Malaysia-Singapura berbisnis pinjaman online - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNMWtOVi1XZ2FEOGJkNGhNYU1SOXUxT0JoVDN0enVXcmpnN2ttZ1oxeFExY2VkQmY0RmRaVFV2Q3NRUGlqUDkzMjA2RXZRSG1kd2QwYXY3c0tDZkZWRTJZSDRuNEJGUWdjQjd3dElYM1dmX3E4b3I2UEpmVHRWYlF2QnFMNWhYMWYtbW9CZTdKZVJlN1lLVVpaTzNKbFNiSlJEblFJSDZnMnZQMHpyMjRlU29B0gG0AUFVX3lxTFBwOGZCUUFFb3pHU3lLMjN3MG11T2pNdEh4ZFphUmVKNWs0Y0FkM1I5M3ZDeVdmM19GY1RFV1c4OWxBZGpDTG96cGZaU01yXzVDbE9ua3M2Ml8zS2ZLV2xDZS1VbXlHR2VFMVVYdG5XeS1HS3NoTGx4ZGVEYmRnU3RPeENnRk5rTUJkSTlDQ2ZjaVVVR0lySXBvVi1idDRGQU1fMGZZTHhkYjk1eTVNRVViTTZJVQ?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "imigrasi bali usut 17 wna malaysia singapura berbisnis pinjaman online antara news",
      "id": "4510d3ceedc0609b",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35eae52c1ed58d78",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "Link dan Cara Cek NIK yang Diam-diam Dipakai Pinjol dan Judol - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOd2dkdDRDTG9wVlBHRVY2YlJObGw5MHdiUHFpSklValZHOEFHbU5obHlCdEpRZ1BBVnZyMVFjTTNqWnBqVUlHMmxzRVEzNUJ0VUJpdWJaaTA1YzNRMGNPNEw0eHdvSmZpWkZJX25VTDd0UldLdmtVZFcyNHJuenRBSlNRSWRjdVhPSUJHck1kblhINHVBS05jUE1WMlNWOV93LTBsSndmVDk0VmVrVGQzbXBR?oc=5",
      "publisherUrl": "https://tekno.kompas.com",
      "source": "Kompas.com",
      "summary": "link dan cara cek nik yang diam diam dipakai pinjol dan judol kompas com",
      "id": "c30b6210ea8ba9f7",
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
      "eventId": "auto-d258bdeaa245833d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "Melalui BIK 2026, Bank NTB Syariah Perang Melawan Pinjol dan Rentenir di Dompu - EkbisNTB.com",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQU3R6VExYWEtpeXYwX0dkcVhIR0ZpSGVmZlBubTUtZmdVZnBxaUFkLTkydnhac2M2a3huSTRoRjhHZmZ2RkNBR2tONlZUWmZwN191UENpdEVuRmE1c2wtYXFFOEJ5cWRWVnU2aWJEX2txS21nUHRKUGUwa2g2QWxDUGtER2lTSHVYRGNVWVJRcUNOUFI4VlJpQURUUUpiellHTUttWUtWUF9xUGJBNDZN?oc=5",
      "publisherUrl": "https://ekbisntb.com",
      "source": "EkbisNTB.com",
      "summary": "melalui bik 2026 bank ntb syariah perang melawan pinjol dan rentenir di dompu ekbisntb com",
      "id": "056ba986bfed36e3",
      "domain": "ekbisntb.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4c0eab0794e7aee7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "Mengenal Fitur LazBon dan LazPaylater di Aplikasi Lazada - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1BSXZWU1pUMDJSMGtuVklEV2VEem02SElvc1FVb0F1V0MwSTJvY3oyd0NkbDJwZHpaQWgtdXYzX1IwRlpRckg5YUwtSUstX0pMZ3pQNVRUdmJZeGhSUHFyeFFOWDM0VmxMS01xQlBMRkE1U0k?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "mengenal fitur lazbon dan lazpaylater di aplikasi lazada kreditpintar",
      "id": "4e2fe640e53dfa9f",
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
      "eventId": "auto-24a57b1819f4d4ee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "OJK Bakal Atur Pinjol Sisihkan 5% Platform Fee, Ini Respons UKU - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPejlNUDhkbEJieVR1X2tSWjZvV2p6cTJxd0pMQTJZV2tGVFR5Wkt4REhOVG9xNmJWazA4Y2dwU0s3NjNsbEgwM2RianV2VFRialpSb2lZcEV2cmI2QXpFQmhXZ3FhbDVqakx3cGRubExuMjB3OVVCMkl2NVRNWTIwVmhxVXZ4aDhKSEZNem5MQWhZclh0WDRNNlV5R2drS25qTk1xUlNjMEFxaDNTbkswM3JpcldpOGs?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "ojk bakal atur pinjol sisihkan 5 platform fee ini respons uku bisnis com",
      "id": "2b81a46c82bcd798",
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
      "eventId": "auto-5642a4f5649c6c3c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "OJK Siapkan Skema Dana Cadangan 5% bagi Pinjol, UKU Sambut Positif Rencana Aturan - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQNGdleWV5dWdQRElZaHAtUl9oZGVNdWdLNnI1WHlIbW81R1hQZkliU2IzSnBfNEh0c1RDLUs5R081bG5xWXdoODQwMGx0STR4WU54ZTd6ODBGZldLalU4d1ZyMlF3RWdSN1RsSFdHSGNaSjRIQTREMVprQU41R3ZYSnU3VlZ5bFliaFBlWW1ZUW04a3JiQzktajRYY1lsWXNzSVFlMGw0WXF2UU1yU19lRkZiMElLUXBK0gG-AUFVX3lxTE4xc0RvalpYekJQanlCbWRibDNadmJFZlVHaF9kMndaNUl0MWowdUtCUG9EbzlrblFaWnBMVWZYbmM0Sm1BaFRwVnV5eGlMNGJGLUFSYW1iaXhoNkN5RXlwQk9zRTB6SUtyc3FtS0VkaWY5dUpYY01QblJhNlNQVGdJa2tCMHl3YWZHOF9wSUxBODFZVms1STQzV0FaWlVKTHgwcFk5VV9GUVZYRm44YlBvWE1pUnNudlFkXzJpMmc?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "ojk siapkan skema dana cadangan 5 bagi pinjol uku sambut positif rencana aturan warta ekonomi",
      "id": "534cc6a141d40435",
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
      "eventId": "auto-a1cbaabe69636976",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "Pembiayaan Digital Tumbuh Pesat, OJK Ingatkan Risiko BNPL dan Pinjaman Daring - tutur.co.id",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQT285TE9KbkMxZzF5dlYwMENxczl0YUEtVnBoX21zTU91MjdkVFYtcDRIWWUxbEdMVElvdHFra1JUT3JCV1NfNWc1M0x0YlA5V3YxYzRvVE4wUkZnc3dMUUw3bjhDdHp0QXlyWXM1OVlPZVNKVFVGNFpNMWJSZTliUzVsRUV5NUhYcnJnV1lCVm1KWDQtejl4eWlrY3dLUQ?oc=5",
      "publisherUrl": "https://tutur.co.id",
      "source": "tutur.co.id",
      "summary": "pembiayaan digital tumbuh pesat ojk ingatkan risiko bnpl dan pinjaman daring tutur co id",
      "id": "1dd76f4634e4e4d7",
      "domain": "tutur.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 41.6,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5234b85579b208d9",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-10-26",
      "title": "Studi Catat Hampir Separuh Pengakses Kredit Pertama Kredivo Perempuan - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQcUd0ZUs2VFNFZWZvNGwwVnhkZm5JOTVNV1ctbll6RWx5ZXNKM1hUZlJqcFlyY2RPRWZIXy1SYlJmRTBpaUV0RU9YeW1Qc1NBaXYwdEtQWHFkb0x5MEVJRkc2clBvV3RvckxycEVqNVVrMHYxRERBeGtkVngxZDNNQTJRYW5jWURRRFVwOENFNXdtYWRMcjVTa3NzUTVPVGVVUFRJRzFiVGthSEFPc2F3STY1eVlTaUdjMjJINWJCTGFxc2Y3WnlvYg?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "studi catat hampir separuh pengakses kredit pertama kredivo perempuan cnbc indonesia",
      "id": "997dca681cff8349",
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
      "eventId": "auto-cf42e9996fbf8779",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-26",
      "title": "Tegas! OJK Minta Pinjol Lebih Transparan, Sanksi Keras Bagi yang Nakal - Inilah.com",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPTG9Kd09ZaDVxSlFESEJvd0RfOHhkcm9YTGZocG9Ud1ktNW5XcTdQeWZmeE51bTFXWTJZQzRDSXd6c1F2UzZ6Y1l6SnhHaThTTWNzOUExTzdlamRzbWwzTElpZk5VdkdDSEVOT2R5enFQQjZ6blFfQnhGUE1TRkxVMFVRWVJaWWEwdEFFMnZXUnBmR1FnU2c?oc=5",
      "publisherUrl": "https://www.inilah.com",
      "source": "Inilah.com",
      "summary": "tegas ojk minta pinjol lebih transparan sanksi keras bagi yang nakal inilah com",
      "id": "4caf213e7679cd91",
      "domain": "inilah.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5208ec6e94f12d56",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-10-26",
      "title": "Undana dan OJK edukasi mahasiswa cegah Pinjol Ilegal dan Judi Online - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQWTVvLS1VcTRta1pzOHNXeE5BN3lIQm02VmUyQ3g3R2pwejFITzRhb0kwZlJyOVJHeUw3NlZkRzBOQXlpTGtLYWZlWWc2bVVndFgwV1A4NjdGWENQSmRPNk9HUTlRZzNkOXFsU0xOVnh1R3Jsb2xENi1oUGVPY1p1UTV6WWJLNGdpU1RONW5VRW1kV2wzeGdJbDI0aURRM2NiZUJNeXI1Z3JyRDBqaEJKMXdn?oc=5",
      "publisherUrl": "https://kupang.antaranews.com",
      "source": "ANTARA News",
      "summary": "undana dan ojk edukasi mahasiswa cegah pinjol ilegal dan judi online antara news",
      "id": "080c328a4a7520f6",
      "domain": "kupang.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-41a6c17e73b2a1a2",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "(SIMAK) Paduan Resmi! Cara Hapus Data Akun Kredit Pintar? - BPBD NTB",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQeW9KbExETF8zYld2ZTJRQnVNSU0zRjVDTHFCX1pmMTRBcEJOZlc5M1hHLW5XX2tWVWRSWlYyUDl2czEtMzFFVThwVDZ1Y0pmdGJtNVp6LXNyN2tkWVVLeENnWV9pWG05MVZiZXJJWEJfRlp2T3BjU1p4VmpFdE9NQm41clhhVkh0dXpkTWtB?oc=5",
      "publisherUrl": "https://bpbd.ntbprov.go.id",
      "source": "BPBD NTB",
      "summary": "simak paduan resmi cara hapus data akun kredit pintar bpbd ntb",
      "id": "c479f89efb8112e4",
      "domain": "bpbd.ntbprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cac8e214182d618c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "1.199 Pinjol Ilegal Ditutup, Dana Rp 825,2 M Diblokir! - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSnlrVkN4UXBwb1BmSk5RWnZXQVRQNjg4S05kaDU4U2hkaFRGTUNfTndmRDZ0NnY3RnF1c3B0V0RlYTJST1B1eDg1RkhkaV9YVHlPcTAwTlR0ZHlONFZKZFZjSlpEUmlVUXpCdTh4V29mX25BeGJtM09FTUd1ek4xRDNiVXBNckdab05mbG10MnUxajBRR19LTVNJVE3SAaIBQVVfeXFMT0hrWEpJQTl4QWhjRzNWM0czQUpOSEJ6MWFiUGxuaEkyNlpqeTJhM2k5Q01lT0JPUk91aTlFRDJvU0pfaW1wNnUxdkg5UUEyZFNfR1hPWnZYQ09pZzZ5N0piMWhwc2ZfaVp2aE54U1FGWkdWUjE1VmNYTHU4Z3ZNTTJtMEJMcXVnWmh1bjIzZUZZcEh5Nldfc2VreUFpTTlTVFZR?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "1 199 pinjol ilegal ditutup dana rp 825 2 m diblokir detikfinance",
      "id": "7ee51089c5cb5287",
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
      "eventId": "auto-8db99329a5c97003",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "17 Warga Malaysia-Singapura Bikin Markas Pinjol Ilegal di Vila Bali - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQOFpKbkpNMjhTVUtidm5GOUxxX2tQQktKVEY1MWZuMF9zUWFYWUFzMlNicDQwWi1EZER6VWN1QmV0eHRMbW50Nk9pWlZUa3pnY3FxaFp0dDZ6Zmljc0NScTZ2ZGVBU1hGU2RkNERFY2g2YmdUTmVXNGxqbEk5U1VKc0llRVduUDNSWHkyOEo4ckc1MUpmdGU2bHVpMDg0NlNrZTk5cjlmUXNhUDhIeWVCY1EwOUs5RU1yeWR4cERzd3J4eGtTZkNMUE1lONIB0AFBVV95cUxQS2tWTWM0S0dLSlBxb0M2YkFtUGphbGJPenUzRVVmZWVKRmJtcGtLZ0hTV1lhRUIwSEdtdm1VelNiMWxxa0RlalRhT1k5YXpyMll2VUVuRC1CUmlNaTMzNDB6a3RaTHU4Slk4clJjWDEzVWgxVEhvUGNFY0NuMWxuMFFQOGxUbURSdFR5d3gzN1hrbUdMWVpPOWxiUnVfVTVIMV9uYUhnb1lieVR3aFlpMHRPa0FFcnVmWVdkakY4RlJVS1FNNGRzNkppODJLTE5k?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "17 warga malaysia singapura bikin markas pinjol ilegal di vila bali cnn indonesia",
      "id": "409c0e7098b0d29a",
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
      "eventId": "auto-9aed1764f34eea04",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "BI Kalteng Minta Warga Cek Nama Merchant Sebelum Bayar Pakai QRIS - Borneonews",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOYm9jM3VpNEx3YWUwa29ENkpfOC1YX243aE9DX3g2NkNOV1pfMFFqd1N5ZEpuQ2pQbzZWS2pmYnhVQmpERDNVN2t1RmtMbENkMHpkVlVoRzk3VDF0Wmw5WDFkTzNxNm15dEk1TVpDa0hfZTN3eXY5NU9KTmxaSktNUnZUU2gyRVhrQU1WNWphcC1wVmJVT1Q2RUFZczBrblByLWVXcXJZNS1IZw?oc=5",
      "publisherUrl": "https://borneonews.co.id",
      "source": "Borneonews",
      "summary": "bi kalteng minta warga cek nama merchant sebelum bayar pakai qris borneonews",
      "id": "899b80c56a2367a5",
      "domain": "borneonews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35fd2447aca81039",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "Berbisnis Pinjol, Belasan WNA Diamankan Imigrasi 1 - BALIPOST.com",
      "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPMlo1bHJXRmFwSVhzcXdEVjVLRzhqaWRlQ3JvUU9BSTNPZDRRWS0yT1dzOVJ2alZkOEFWNHNWM2MtdWx5VjhMNlZqZk5VNm5uUDhMd3I2Wi1JdFdDYThId2x2WjJpdHRYamx1T0hwclpVanUtcE5CUUtDSG1ERzZScWYzTHFSTGowSFFrSHBOMDh5N2tneDlqejR6Sm5yVUR5ODdXTVVZTldrNTV4QlpwTmlQTDVXN1RPUFlGUjU1ZjJzRVA5X1FYSnh1bmpHMFdDa3hLM2h2S1pERDhK?oc=5",
      "publisherUrl": "https://www.balipost.com",
      "source": "BALIPOST.com",
      "summary": "berbisnis pinjol belasan wna diamankan imigrasi 1 balipost com",
      "id": "60281802432246d0",
      "domain": "balipost.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4aa28ddba070b3d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "Budiono Desak Diskominfo Jatim Proaktif Tangani Pinjol Ilegal - JATIM POS online",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPX1VoajZGSC1aNjJNSmxRa0poU3kxWUJfV2lkMnp5U1lobXJqVjR6Y29XQkNjeldRT1o0STJBajFEcWgtN0FHWE9Kb1JaazN5WGEtMEpqZ1VYdE16Q3RKSVp0eXJsUGszQ2JsMGZwR2sxTzBGaGYtdHU5Rmp5MTkwUFZBUFRMRmxVVndWbFFkNG8wMjFYeHdrS016SmdlUQ?oc=5",
      "publisherUrl": "https://www.jatimpos.co",
      "source": "JATIM POS online",
      "summary": "budiono desak diskominfo jatim proaktif tangani pinjol ilegal jatim pos online",
      "id": "32c5468cedd2e043",
      "domain": "jatimpos.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1df358c79914abfa",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "Dari Cepat Cash hingga Ayo Cepat Cair, Ini Daftar Nama Pinjol Ilegal yang Perlu Diwaspadai - tvscope.okezone.com",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQQURKbWNob3FwSWJmU1FQM3IxaTB3TXdMclNmX0JDa1ZIZ05Wd0NIZVNkZmdhalp3cTdNZHdhTXRmdWdJbk5xTU1BTEVPSnpna1pOaEVyVjNReEdvZlpTNnR0QXl6VmRyc09Qb29COFpmRTZ3ZDVlUlE5LTExVzRNVUtCMjVzY29rVWJTOFlxdGpobGVWU3RaQXV4RUZkU1dtQUJiX0pDaXFMV3VSNGlxMXdDWktFVnhJWWxiOXF0Zy1TVWx2M3JOVWVVNUlrSFdWcEkwWEg2aXlrNlNpM1HSAdwBQVVfeXFMT0ZuYnhtSnB0UnEyc0JwdVN6QUgtbTh0WVVlTGpSSFBBNVJ3eGdJTXpIYndFRDM2anp6N1Q2cXVacU01WC1aTXdKTk1qUmRiaGhiZDF1a29qRTlOemtmMWpBN1F0UzdnSXc2a1FOcFFYRTRQNHZnWHdtSnhhUm91cExDNDd6UVF2R2JuMHV5WWtuNjBPaFBGc2lPcTZmYTJ0RmJLTjFxNkowOFhVQUVwZW5oOEFNVHp0ejh2VGoxMk5KSVBaaGxjWTJ6QXBJQWVqQlFjUmc5YlVhVHpOVA?oc=5",
      "publisherUrl": "https://tvscope.okezone.com",
      "source": "tvscope.okezone.com",
      "summary": "dari cepat cash hingga ayo cepat cair ini daftar nama pinjol ilegal yang perlu diwaspadai tvscope okezone com",
      "id": "1dcdd9420c72b7bf",
      "domain": "tvscope.okezone.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d7359c1faddb425e",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "Imigrasi Amankan 17 Warga Malaysia dan Singapura Jalankan Bisnis Pinjol Khusus WNA di Bali - Informasi.com",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPS3BHbWlGT2JZdXdGSDZUT0lzTGdqdmpzNkJEQWd6YlpfUXNHLTRfSE1WZDlBTlJDN05sWXg4UGh3eUJsY3lwYkhFUG5Pb28tOHdlWWd4MkoxMExhdUJkZHpnQXpKc2cwNzVBYlNGMnMzWHQxR3RHZ243NVNWSzhmUHlCYjRvaVJVblQ5em1YMU1SYmtnXzdDbmhoWHk2VTlNNHlYVFItbTJVVWRmSmx2VnpzcnBYa013bnhrcl9sY3BIWnVIVHlGc2tsZw?oc=5",
      "publisherUrl": "https://informasi.com",
      "source": "Informasi.com",
      "summary": "imigrasi amankan 17 warga malaysia dan singapura jalankan bisnis pinjol khusus wna di bali informasi com",
      "id": "488ffacc7d3a752b",
      "domain": "informasi.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2de7e4bd8a163d37",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "Imigrasi Gerebek Markas Pinjaman Online di Dalung, 17 WNA Diamankan - NUSABALI.com",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNbFFyUXRlemh3am9yVDJpUzRJWG9oRnhxMGJWYXhkRURkbE82Z0lDNDdGV3Z2aHVnSEZLQmxOcTVjYTB6VHpuMXVSd05nT1lYbmZ5SXRWaGQ3bmRmcDRMcWhXbVl1LU1CQjFnandLaURGd05iVjRNT3FqYWJBbDRpYnQzdlZFQVgzWENQRXNnWldpVlZPUURrU3RCQ2gxQjJuXzRkV3FzZFA?oc=5",
      "publisherUrl": "https://www.nusabali.com",
      "source": "NUSABALI.com",
      "summary": "imigrasi gerebek markas pinjaman online di dalung 17 wna diamankan nusabali com",
      "id": "c5d6c4abb4379b2f",
      "domain": "nusabali.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b1d0fc7529b57f58",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "Imigrasi Ngurah Rai Amankan 17 WNA Diduga Jalankan Pinjol Ilegal di Bali - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQVXJrd2Q5LV9tMk13UENmc3F1XzdSNER2NDhVcEotSVNWenVaZlhfS3hXLWRQWXVfMGhaWmxYWGNlZ2l0ZFdjXzFmTUR2R3JXbTVHOTFjUDdVd2pjWWRmZVJ1SVh3VmFmRnkzT0lpMkRYcTFBbWFEaUxXUkxRNVRqSW1uM2p3d05OWTNMUC1nMFdXc3NtUWZqQnBGdTlJNjZVWnloT1R3SHRLR2JlQmloS29mb29ycl9NdmhMN3JvZw?oc=5",
      "publisherUrl": "https://bali.bisnis.com",
      "source": "Bisnis.com",
      "summary": "imigrasi ngurah rai amankan 17 wna diduga jalankan pinjol ilegal di bali bisnis com",
      "id": "6d9da7be61c2b646",
      "domain": "bali.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b31e903b19ecef3",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "Indonesia tangkap 17 WN Malaysia-Singapura terkait pinjol ilegal - IDNFinancials",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPMmVSZ2xHOXBMSDh6bGNDYVp2V3NvR2kxWVFzenFxbVRiWm1YMURYTDl0eDZidVJHdlFraXVxRmt6NHdRR1FPdy1ReXV0c1psTzctZzg2X0RTSm5zYWdGZEhBS2llek5ONkRldDlIRmdtWGxYcmJ1b2VfOW50UHhhNkRXLXZxb1plaW9WcVZCck5teDBQU1dNVTV0ZHB1N085ZGo0dElVVGNHNWpu?oc=5",
      "publisherUrl": "https://www.idnfinancials.com",
      "source": "IDNFinancials",
      "summary": "indonesia tangkap 17 wn malaysia singapura terkait pinjol ilegal idnfinancials",
      "id": "d91f585709e1c766",
      "domain": "idnfinancials.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-387845c7428e2360",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "Julie Laiskodat Ingatkan Masyarakat Waspadai Pinjol Ilegal dan Judol - Partai NasDem",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQZWlYRHJoekVFenlNUVhIRXB2RF82UEc5dlQwRDU1QXFJamlHVnh1Z2s1WE5ucnJnYmpkM19POXRTcHYxQ1ZUVGxwUVgxY1VRcXVjN0VGWWNTWWJHZDY2eUFaUF8xcS16T05lM2JNbGZrRHJ1Q0o5S3ZreGd1ZFJDYV9fLVpPbVF0UVhKdXZ0ZDFXbVFHdVFuV2Y1MkFBNmN2QUZtbWxfdw?oc=5",
      "publisherUrl": "https://partainasdem.id",
      "source": "Partai NasDem",
      "summary": "julie laiskodat ingatkan masyarakat waspadai pinjol ilegal dan judol partai nasdem",
      "id": "80780b369fb7cf61",
      "domain": "partainasdem.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8c3acab5657a5b1",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "Kredivo catat 48 persen perempuan dapat akses kredit produktif - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOWjNlVGhBQlEzeDJEVlFMcEFWVDk2TEFYRjc2N0hGSFdEdU9mMXJPcW5KVENuVkJZOFdSMG5xd0xmX2lsRktBR2Rna0RxeXBZeFFKWGFBaGlvbW1yOXYyd1pvRUd3X25PUi03WEFQc0dTQUUzUDd4REF6YllaRXRhY2hUZFNIZ3V1SHdkMXpnOUE5b2FuT2o1UlBQd241aXBhZ0wxcFRKb9IBqgFBVV95cUxQRUVITUxRYkUxWGM1enUwWC1TRzdPbmp0VXdyd2JBQ0RuNENjcHRzRHo5ejVYd1pkQnI4ZHk0VHlyeGIwNFFvMG5BSUFteDd5ZEtMR05Sd1I3eWwtQS15anBhOUc2WFh5R1U2QUNzMWpZTzhrYnhwYS11WEFaUjFVWkxPeXp2U3o3NWRhdDNQZWdXNElyYWt6NVJvRVo2b2V5SHJSR1BNVW9wZw?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "kredivo catat 48 persen perempuan dapat akses kredit produktif antara news",
      "id": "ba696ae061e561c5",
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
      "eventId": "auto-c996c3ff6e2838b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "Laporan Pinjol Ilegal di Jatim Capai 3.244, Nomor Dua Setelah Jabar - VOI.ID",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZE9jY2NydTZWWTNqZFJlNDdXR2xOaGY1T21rMnZaZkM2OXo2cEpTT1lycVZhVVpxR2VUZGNNTVROOHA2eXpQb3FWRTMxTnBxc1haVGJ6RWhCYjI3aHYzVjd6T05hSDI2cUdUQVpoVkgtZDF2eVBKRnFwcmo1NkZVM2UwR1l2N1FVNU1Jcl8xaU01dlUwZ3dTbEM0OHHSAZcBQVVfeXFMTXlDblRBV1dYanB6SWd1NFhTTFNnaXQ4WXRTZXB0dWdVb1RoQUxSTnFZZV9idVI2YmNGZFA5N1l1aVlXaV9MOWxrWHM5UlNBZm5DQk1CRUlLc1BmemxQWGZDU2JDSlZYcXBaR3lZX2ZOY2FJSlYxOGlGcU5kWjFELUpaSzlUNFpLVmMyQ29PdFRXSFFEODlONA?oc=5",
      "publisherUrl": "https://voi.id",
      "source": "VOI.ID",
      "summary": "laporan pinjol ilegal di jatim capai 3 244 nomor dua setelah jabar voi id",
      "id": "930d02da2d54df5c",
      "domain": "voi.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2a09d376ea02695f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Berantas Pinjol Ilegal dan Investasi Bodong, Dana Penipuan Rp825,2 Miliar Diblokir - StockWatch.id",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQWGtMQ25UNXFiRGpLeGZkMmw3MGlVdlJibHl0cFcxVThxZ3gxSnZOUHI2UkgtNWQ1eWlOZUJBM2t5ajBHM1ZlUkZJUTEtLVZHTGtIR0dsUmNnLVMzc3VETUxGNVl1UTBTNG9GWkR6VTVSYmYwVzZrdXVMclc3cWhzN0o2OUhsVTNZdi1sYURVWGRSd0JSaXFfY0xjRHAtSEp0TVhUbVRFaWh3a1k?oc=5",
      "publisherUrl": "https://stockwatch.id",
      "source": "StockWatch.id",
      "summary": "ojk berantas pinjol ilegal dan investasi bodong dana penipuan rp825 2 miliar diblokir stockwatch id",
      "id": "b4f527ed2a1951fc",
      "domain": "stockwatch.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 78.0,
        "label": "negative",
        "negativeWeight": 4.5,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2013dea3b5e1f4ae",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Berantas Ribuan Pinjol Ilegal, 702 Ribu Rekening Scam Diblokir dan Rp207 Miliar Dikembalikan - VIVA.co.id",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPRnVDZmNrTDFTT2V6UW1NR1JqZmo2b0JvZWtwYXlrUjZDN1hXY1JheU1NVllXdDVKakxqWlI5XzFrN0plS1dNSG5GQUJLNFpuVFByNE45ZXFtdC04S2FlLTBqS1B4YmJ4Y054ZWw2dFNwaDZtU3NGTzdwUmZGY1pLSzNXeFFkZTExWlpTUGV5YlVfM29LMWpoV2hYandzWkxSODRudGRjQ3hqMW5nYkFQdFB0dnNDX3ltdzBhWFpKZ0ZtOUxlbkw1MWlrUWVVUdIB0wFBVV95cUxQUVhjaXBqQTJXcm0tNVo3cGU4WVh1UXRubkxtelhXOU5ON0hNSFl1WHM4eVJfRjlPVnl3SXp3UHhvT0EtY2JTMzlmbHJjRTV1M1R6b1lKMkdmWXQ4ckpjaGszRWJqSmZlbWFuZFFJMjFzRklrOWFtdVpCcmZ6VFloMzR4eHVvRUZHUThhMDMwcG45Z202UGtBUTk1NkhlWjdBc2hyRHpocGxHVG1iNndCelZpTVpHdmhBdHhOLUdINHRkYUw5YmpsZEFPRENpSzZiNDlJ?oc=5",
      "publisherUrl": "https://www.viva.co.id",
      "source": "VIVA.co.id",
      "summary": "ojk berantas ribuan pinjol ilegal 702 ribu rekening scam diblokir dan rp207 miliar dikembalikan viva co id",
      "id": "3395d57d70223a05",
      "domain": "viva.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 75.9,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-123eb214f4381596",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Berantas Ribuan Pinjol Ilegal, Dana Korban Penipuan yang Dikembalikan Capai Rp207 Miliar - tutur.co.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQZFZXckFJZDduTnFEeUc5SmI0U2NYX3pvb3RjSW5ycVltT2NwZUhXMzVIdGE0aVVRUldaVlhqV3dtc1VWSTJxZkdFLTZwOHVPM0hsQkFSR2VjV1lDUGFfczJ2V3ZQbURjOGNhQzF1RUFvVnR6akVBOXpYajVUOU0yUENWUVNYd0ZGQlRqVmNTTFdqQkltdzFrZ3BibzJJM0kwUjFHenoySktsUHpEd1lZc1pn?oc=5",
      "publisherUrl": "https://tutur.co.id",
      "source": "tutur.co.id",
      "summary": "ojk berantas ribuan pinjol ilegal dana korban penipuan yang dikembalikan capai rp207 miliar tutur co id",
      "id": "8ea01168da7044b0",
      "domain": "tutur.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 89.9,
        "label": "negative",
        "negativeWeight": 6.2,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f589eb0704934c41",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Blokir 702 Ribu Rekening Terkait Penipuan, Dana Rp825,2 Miliar Diamankan - masakini.co",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQc2pfcEVBaXRtODJPMGx3a0w4MmdPaFZ3TlNQRTM3TEJxRmt0SVlQYUYzNE5LcG1zOTdZVHlJc09GOTg2MUp4bTE4RVZNYWhkMy1HWVBtTTgxZ0J5TzBNaG9PdmphZURuckMteUU2dDlDNUdWRHpwT0R5dXN3QUxlQTB5cmtzUTM1TFp2NC1tRWVhVE9YbWZmOVg0aEN5YXc4M2dOSXBLLWFkUQ?oc=5",
      "publisherUrl": "https://masakini.co",
      "source": "masakini.co",
      "summary": "ojk blokir 702 ribu rekening terkait penipuan dana rp825 2 miliar diamankan masakini co",
      "id": "e1fda482982017ef",
      "domain": "masakini.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-387a65482712a5b4",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Suara Independent News",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1NYW5JQ1JSSmNzRFFlTFJvUkhfLTQ1S3FMLUFwLUNrN3NjZl9wTmN2LW9JNHY1NU1QOHZnYUkwVzhsY0V6RktNdE5TaXNmVFFXQWNoMW51QmU3NEdwU1JxN1RMNEF2dEZkUHdkaW9UZGFabm1LOHc?oc=5",
      "publisherUrl": "https://www.suaraindependentnews.id",
      "source": "Suara Independent News",
      "summary": "ojk hentikan 1 199 pinjol ilegal dan blokir dana rp825 2 miliar suara independent news",
      "id": "6b1935e6c2c2efb9",
      "domain": "suaraindependentnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1f7ba787322c513a",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-10-27",
      "title": "OJK Hentikan 1.199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - SuaraGarut.ID",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE4wYnoyU1NrMEdPdVRfbFRRUXpmWHl2UUNXbmZFUmM1VkY0c3VieV9ycXJBUkxNb0ZqbjZkd0xBbi1zVmxVX05DLXhfNkFBNkp6OTMzdkc2NjB4ZlU0ZGt4ZGNFNDctdVJSYjRtQUxwTklzWmw4Nm9sbg?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "SuaraGarut.ID",
      "summary": "ojk hentikan 1 199 pinjol ilegal dan blokir dana rp825 2 miliar suaragarut id",
      "id": "9f5924aba34bb1bb",
      "domain": "suaragarut.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1f7ba787322c513a",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-10-27",
      "title": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Cirebon Times",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTFA2anpBdVAtOU0ySS1nZWgxY1U4SGFWOUxXTDZiMDE1em1uRlVHczBwZGhuMG4weGc5VDBzWmRLdUlNUTQzdERTRzRKWWRWaG5OQk91QjkxY1Q1emJOVk5oQTFORmxlSkJPS0Z4NGtPTHNSQUdDTGc?oc=5",
      "publisherUrl": "https://www.cirebontimes.com",
      "source": "Cirebon Times",
      "summary": "ojk hentikan 1199 pinjol ilegal dan blokir dana rp825 2 miliar cirebon times",
      "id": "d3aab98fab82b4ba",
      "domain": "cirebontimes.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d180ebe3f3221d4",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-10-27",
      "title": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - Demokratis.co.id",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9QZXZkTmVzUnhKN21iX0NzblEwaWllbm9ncjhKZ040a25tMTZrNXFkOUszcmNOODhucXlrRUZCdVN1a2JUWndLdXFSS0Y1dFJnV3NNUXVDdXFGV2dFeHppTnhWNC15N0NTRDJXdmRhdWE?oc=5",
      "publisherUrl": "https://demokratis.co.id",
      "source": "Demokratis.co.id",
      "summary": "ojk hentikan 1199 pinjol ilegal dan blokir dana rp825 2 miliar demokratis co id",
      "id": "d2607703719140a3",
      "domain": "demokratis.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d180ebe3f3221d4",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-10-27",
      "title": "OJK Hentikan 1199 Pinjol Ilegal dan Blokir Dana Rp825,2 Miliar - www.suaralandak.co.id",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBYeXlxS0I2QXZBV0JCYUZaVHZrdDVBcWRHN2dHZUZFZEdvckMxQnpabzdndFVFZVhsc3Z3Um9XcE4yU0FRdGdESEExQWRTdkdmVkwzZDhTc0pHTl9uZ2Jmay1ac1NDMlRESnEzOWo2anBRNmJaaXJz?oc=5",
      "publisherUrl": "https://www.suaralandak.co.id",
      "source": "www.suaralandak.co.id",
      "summary": "ojk hentikan 1199 pinjol ilegal dan blokir dana rp825 2 miliar www suaralandak co id",
      "id": "f73ec4569d558514",
      "domain": "suaralandak.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d180ebe3f3221d4",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-10-27",
      "title": "OJK Hentikan Ribuan Pinjol dan Investasi Ilegal - شبكة تواصل الإخبارية",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFA0aFZVc01kYWd0ckViQ20ySE1McjIyMjc1X3dNVlFrU1lzb0JyZTBJbkJJd0R0ejlRVlhpVU5ZclBmWlhUVmhoNDc5dW9ZR3U5VGZR?oc=5",
      "publisherUrl": "https://twaslnews1.twaslnews.com",
      "source": "شبكة تواصل الإخبارية",
      "summary": "ojk hentikan ribuan pinjol dan investasi ilegal",
      "id": "d98c0c9067d12de2",
      "domain": "twaslnews1.twaslnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-765e41db0d098c1d",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-10-27",
      "title": "OJK Ingatkan Gen Z Waspada Risiko Pinjol dan Pay Later - Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWnN0TUhRTEttbk1WcjJPcnh5NENzZWo2bzZ6cTJKU2ZzU0FRNkJ3aDRURkxtVEdhZjIyNFBDZjVDd3VFVUJ5aXJaOUJWTE5WcHdZT0xZSHgzbFRJQkdRc2owUmVJRm1ZdEptS1d3N2cwWFF2UGZla3lFcHJ3TWRDX0RhWV8tNC1Fb2VIVUZqU05RRVFIWTY2RTMxelg?oc=5",
      "publisherUrl": "https://mediaindonesia.com",
      "source": "Media Indonesia",
      "summary": "ojk ingatkan gen z waspada risiko pinjol dan pay later media indonesia",
      "id": "8efd3a6e4e9fbd4c",
      "domain": "mediaindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d14e9f29077c63ae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "OJK Jatim Terima 3.244 Laporan Pinjol Ilegal - Bisnis.com - Surabaya",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQSjYzZVZoeVd6anVzWXByWTlETWZtc3dSdWYyQjAxUnpoQW9yMmc1d21IOVFNQmtjZDBra0NjV1g1b2phZWwwVHNhdDlydlVwYW8wREdvMGJlWndILXBXZklkUnRCb1VhOUZQNnNIS1pEanFwZklFeFliNlV3TUZRbVhJS2NpUHBPclZlRzNpTlFpVnpyQ2JyZW1VaDRlUQ?oc=5",
      "publisherUrl": "https://surabaya.bisnis.com",
      "source": "Bisnis.com - Surabaya",
      "summary": "ojk jatim terima 3 244 laporan pinjol ilegal bisnis com surabaya",
      "id": "e652977bacc6f244",
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
      "eventId": "auto-a2fdc4a4abd12385",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Setop 330 Aktivitas Keuangan Ilegal, Termasuk 241 Pinjol - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOOXhUZVpuUUF0UVc4N1JHeUZpWGJZdGMxYXZ4NUpZUEVuQlBFQjVRMEtKNEF0aWl4TUN4ZmhQSlBCNVZMc3U2YVZJY0E4djl4ZzEwd1RQVWxlS3o3UFRGaTFYMGowMFdOT0JFN1AteTdvRWVob2UtdFVlUUd3M01NVjVLNVRqWmtLNUQ1ck5ER1JfSU8zRHNKSERiSEJXZXZBTnJ6NlpPTl9ZTFZOODlkRg?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ojk setop 330 aktivitas keuangan ilegal termasuk 241 pinjol bloomberg technoz",
      "id": "0ece6ab657853c36",
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
      "eventId": "auto-175cd5ff987a618e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "OJK Sikat 1.199 Pinjol Ilegal, Dana Penipuan Rp825.2 Miliar Diblokir - Aktual.com",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQX19CYlpyZlRZdWMtZFdYM01HbExCZk00X1Q5eXdnMS1IOEhxNGR5dHM1a05RVHZ2NXNuWmpHM0ZScnpHQjQ1SHFfRTl0NEowZ0pqS1Q2b3g2MDZfXzhVSzdOMnc2MkdYaTI1alB1SWtQLUVWUE9Zb2FDUElpRHAtRUR4dUJVWWRMaWtvVWpnTWM?oc=5",
      "publisherUrl": "https://aktual.com",
      "source": "Aktual.com",
      "summary": "ojk sikat 1 199 pinjol ilegal dana penipuan rp825 2 miliar diblokir aktual com",
      "id": "9728eb6f77240c7e",
      "domain": "aktual.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 78.0,
        "label": "negative",
        "negativeWeight": 4.5,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-44246382cd150d1d",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Sikat 11 Gadai Ilegal dan Ratusan Pinjol Penipu - gokepri",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE96QzhoOEdPZXR0Wm5oNDI5bVdyVC1aTzA4cXhGZC1RLXN2b3A5Q0Y0dlZOVGs3WExOdnZDMTlLdmxHeVJxSXFNYU1jWjJKNDBicTB3VnR5Vi0xQmlvT2xwOTFteTQzT1pFb1VOeUVIeEE2MGRLOXRfTTlvbnI?oc=5",
      "publisherUrl": "https://gokepri.com",
      "source": "gokepri",
      "summary": "ojk sikat 11 gadai ilegal dan ratusan pinjol penipu gokepri",
      "id": "03f4b3a2937fc4aa",
      "domain": "gokepri.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bad33180abb4f0b5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "OJK Terima 3.244 Aduan Pinjol Ilegal di Jatim hingga Agustus 2026 - MOST 1058",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPRnlaejE0emdBeWxSX1NaRFlmQUtWWkZjZmEzZkdERkg5a0p3LXRaWkpqblBQdjBSMXBfSWpUSUVZRWlHQzNHVU05SzBLekpTeGRmblpoTTQ3Y19VdUVibk9obmM0MURObmZkcGdNeEVNSU9tS3kyYVBLRjdUZ0p3ZTAybmppZGhxbDg0WmtfQnp0OUtySmlDMC13X24yUQ?oc=5",
      "publisherUrl": "https://most1058fm.com",
      "source": "MOST 1058",
      "summary": "ojk terima 3 244 aduan pinjol ilegal di jatim hingga agustus 2026 most 1058",
      "id": "baff2bc0302d0380",
      "domain": "most1058fm.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-62162e417e92b8d9",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Terima Laporan 3.244 Pinjol Ilegal di Jatim, Terbanyak Kedua Nasional - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOWWNjZEMzTXhJdDV5S2FDTDF1akhUVHo4TVp6dTdfVEFuNjZsRGlHMFBCMnh6SzQwSXpLZlJ4QlhLV29ETmcwRTZYdVEySmN5NXBja2JyZXdyVEVmOG9YNlgwZGpBYThOekhXejEwSV8wdFZZRkhlbU1jYkVOdHktdXVtTU9MU25UeWdSclpPbDZOTGcxOWx0TTB2MV9xRXZ2dG15N2FBTnIwTDh6N3otc2ZfOHpSelBENENRZjJXZUYwUHM?oc=5",
      "publisherUrl": "https://surabaya.kompas.com",
      "source": "Kompas.com",
      "summary": "ojk terima laporan 3 244 pinjol ilegal di jatim terbanyak kedua nasional kompas com",
      "id": "a961ba7c397319a2",
      "domain": "surabaya.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2ec609deff8e36ce",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Tindak 330 Kasus Pinjol Ilegal hingga Scam, Blokir 702.833 Rekening Senilai Rp825,2 Miliar - IDX Channel",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxObk85UFl1WGF5a1hGUzg0Wng5SFRncklORVF3aGZfMmlPcXMySGotVGJCdEFCSHJJektJTXdHZmhzMWx3eF9fallHNGhtQ3hmWXJMa2tNY1JVaElJN3d1VG1nbTJ6RU55dE1SRVlRdW12QmJoUTB2VWFtbUNSTWtFNS02RjkxdGpxQzMyN0o3YWc2QWZ6WUNrM2R4a2FwRllFNUZBSDR4Z3IzLU1MOEVvdVEzVWh2V0tsdUcwOG5WaG9ZazBq0gHKAUFVX3lxTE9TWlVnS0c0bzdvU2hYRTFSUkZOckZCOFZWTTlyYW5YR1FBYWFhMjBzWXlGSjlMRWZ0VHhfWFpqMmdQc2dKQmdnMF9oSVpIM0xpM3NCblpqTWRwMV9hNzVJcVJfTmVUc1dtRTEtTy1pMG1HVFc4TkRVMUJYbnFfYWJ1R1hOQkxYNjlJbXRtUUFPQmhlUUZGMFF3ZkhvYTJGME5TQ19JRUhMWTAwT0VUdTBNNWJudzRxbkh5SnZET1hLWXRSb1V3NzVaS1E?oc=5",
      "publisherUrl": "https://www.idxchannel.com",
      "source": "IDX Channel",
      "summary": "ojk tindak 330 kasus pinjol ilegal hingga scam blokir 702 833 rekening senilai rp825 2 miliar idx channel",
      "id": "4b62ee48fe99a8f5",
      "domain": "idxchannel.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 75.9,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b1a6d1ec823fd5e0",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Tutup 1.199 Pinjol dan 250 Investasi Ilegal hingga September 2026 - NTVNews.id",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPSEtTV1hlVzNmdlF1NEtnYlBWaFZnQktkc2h5SmJ6VHZybi1PNnpBQzZRMTJPbHpyeHRua29yMnJUZV91aW9vRXB5WnlJZ2FtSXVzZTVuWXBGYkZOQ2thMVJTcElRRUJaNUJydThZbDJSS093bUN3NldlbE9RRTg3VXREVFZwSndSZHZPT1VYV0ZWd3dTR3RJa0RjSE5YUjdfTU45M2hFUV9hUXRB?oc=5",
      "publisherUrl": "https://www.ntvnews.id",
      "source": "NTVNews.id",
      "summary": "ojk tutup 1 199 pinjol dan 250 investasi ilegal hingga september 2026 ntvnews id",
      "id": "e5f330cbd042739d",
      "domain": "ntvnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4f306f63521b27e8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "OJK Ungkap 1.199 Pinjol Ilegal hingga September 2026, Ini Modusnya - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOSGdyVi1WbnJkYkE3b2t5amJ2a0syUzZXTWRubm94WFR0WDhQSUZWbVo5LWJGcjBqbnZaMzZrN2FJbVVlbTNFaXFieVNlb0J1dzQwZkhkbzNvZnZ6M2lMUEhuNS1vdm1IZW5KcFNPQlVTSEpUQ1FCZWFpY3ZLZ3RlRHZ3eW1wbjRmYjdfVzRPQklBR3JTdkNqdm5MbkNJSVFPMUVBM2cyUXlOQ3dKcVdmcU1MMmNlQjZjcE9JYTMwMDBiaU130gHKAUFVX3lxTE5DREdFdmdzQUgxY09wSVFLbk1JaWY0SXBQMGRjM0xFNVhYT0o2MmVhNk50UDM5OFZZcWM2ZndMR3F3ZXFQeEVMSzlKSUhNM1hGc0FVMWtSMWs3UXliRHhZWmk3MVVvbXJtLV9ORzFLTmFtZHJXUnZoc3FQYVRZRWRJek9UUURidzdpZGl3dXJ1N2pBZWdla0NZSjBBWWFxSFlSekFxZkJOV2xpcDRScWllVDdDR09OTFdQQTA3Mk44WGZTR2Zlb3Vlb1E?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "ojk ungkap 1 199 pinjol ilegal hingga september 2026 ini modusnya cnbc indonesia",
      "id": "d2812b2d56ee3fa9",
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
      "eventId": "auto-ea1e247451457dc6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK Ungkap 1.199 Pinjol Ilegal hingga September 2026, Ini Modusnya - Head Topics",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOenhlNS11dDRyY19KczBfS2RaTC0xdnBINEpVMnFPSDV3T281VmoyY2xrRGFuMzFac0RoVDNQdnBOMlAxclRPRzBtX3BOMHpoeFhHc3VXLURGZWktU0JNSVRfcVNnYWZRVFduaW9TMVYxOFBULU16UzRWSzd5OTdCSkQ4MW9oTUszV2NxbUZQdzE1WEI3bEo3VVMydVQ?oc=5",
      "publisherUrl": "https://nl.headtopics.com",
      "source": "Head Topics",
      "summary": "ojk ungkap 1 199 pinjol ilegal hingga september 2026 ini modusnya head topics",
      "id": "896e3b22870a5e18",
      "domain": "nl.headtopics.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ea1e247451457dc6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "OJK catat 3.244 laporan pinjol ilegal di Jawa Timur - Antara News jatim",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNcFBERXAwcF9NRm52VU8ybS1mWnAzRFJkWWlERWVxNHdacjN5YjJfVGdtUG5pY3NwN0lVNFZlS09QMFBBX2ZlR0J4ajN0NUUtU25xTmhIellpOGZtSnZuUWFwaUhzUl9SV25vRDFlOHVUUUY4VEVjcDZuVDNGR29zelN4cDdnWlBkSHp3UEFuVGx1Ym1VT0JGOUR30gGfAUFVX3lxTE1nNWl4azJGWkZYU05UcHRHWDgxdzlTN3loOGw3TEpxOVEwM1k2UHZqU2ViMXc0cGJjQTJaOEw3MjNMdUtDQzYzUGswVk10a053QlVDZWMzQXlNX2pjeUtGQl8xUlN4WmU2RThaTGF1MUYtakhPZ080aXhXNERzYWlaa0IzS2o1eHQtRloyM0hLdk9TSDdyTU4xZ1I4ODhuMA?oc=5",
      "publisherUrl": "https://jatim.antaranews.com",
      "source": "Antara News jatim",
      "summary": "ojk catat 3 244 laporan pinjol ilegal di jawa timur antara news jatim",
      "id": "80892b8f36f79029",
      "domain": "jatim.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6242ab1aa1522e46",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "Satgas Pasti Blokir 241 Entitas Pinjol Ilegal - Tempo.co",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNY3B6RGdXWUp3OVlqVlVHa1YtMG1BY0E1bmdKTW44eHBCc0d1ZHlUUnBqNVRCQ2JqZWRBR1JuQWdibUVsWDdnNFhaMmdDZjg0NFRMRzJRUjJfcmhaVktJTDFkWnlISWxoaDV3MEszQVdoR3VlaGExOHpfZXdFa1UtdEFHdUh0VTIyOHNv?oc=5",
      "publisherUrl": "https://www.tempo.co",
      "source": "Tempo.co",
      "summary": "satgas pasti blokir 241 entitas pinjol ilegal tempo co",
      "id": "e3d24a0974a5b49a",
      "domain": "tempo.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d5e7465a773a009b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-27",
      "title": "Simak Cara Menonaktifkan Fitur Auto Debit Kredivo - BPBD NTB",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPcHp2cGZudnA4WFlhN2VBUTRBVFBLbm9yemtSRkZZQk9qUmJUNFFUTGF2dTRaS1Z6SlNXZmU1MzFsM0YzRmoxam5rcTI4U1ZwekU2Qkl2TUtfNi1nYWJMelV2dzJFbGxEQTBOOGZuRUpLNVI4UXUyNkZlVVQwQ3o0MTBfZjgzazE4?oc=5",
      "publisherUrl": "https://bpbd.ntbprov.go.id",
      "source": "BPBD NTB",
      "summary": "simak cara menonaktifkan fitur auto debit kredivo bpbd ntb",
      "id": "8eaa7a5ca1f7809c",
      "domain": "bpbd.ntbprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-17bab3e689e37c09",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "Vila di Bali Jadi Markas Pinjol Internasional, 15 WNA Malaysia dan 2 Singapura Ditangkap - kendaripos",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNeV9DOWRpWVRWY0N6TUdaZ1ZaVkU1Vjc1Y3dzSGUyQmxRUFh6VE9yclMwalIyYzJlblJNaHZDaEluNl9tTHF0V0hkYTdKZ3o4M1ZDTHEzaVJjdUtSenV2ZVFZQlVac2hUTlpabjYyREF3Y2FoUkFjQjRZb29PRWtSclRFY3Q1UkgtdGRnYmtVaDl5UWNmR3B6ZnBSWTI4LVhzMWd4RUxtTW01STJpWWd6N2k3S2d3dGdUd0lHTWVmNVJ6b0ZqUWRTT1B3?oc=5",
      "publisherUrl": "https://kendaripos.fajar.co.id",
      "source": "kendaripos",
      "summary": "vila di bali jadi markas pinjol internasional 15 wna malaysia dan 2 singapura ditangkap kendaripos",
      "id": "d2869abc315dae6a",
      "domain": "kendaripos.fajar.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7041c81db5394a33",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-27",
      "title": "Warga Singapura Bikin Markas Pinjol Ilegal di Bali, Bunganya Mencekik - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPQXdlQllBOUZWckZlVGxuY3JnUGR3YnpuRzZab3RkbjVrWEtnT2syaWE2akhsOFg2dS1nZU1QSU5fZUNITGVkOUNQUnlhYi1hV180cE9ySG9KTkM2ZFl2TmMwcnJXLTdScEd1QmZwR3lpYlFWeE9pMmR1VnduUmdyM0FrZ2M4SXNndFR4dkRSaGV2Z2p2RXRoQkVsaE5XTFpVRWFLb2ZLWmxyNFFtbmtkdURPbjVjMDhNR0tPM25TQTFhNFlhQUtEcHJ30gHPAUFVX3lxTE5hSWF5MEFhWDRJTGIyeWE5Vm1TdXlneDg1clBCWmE1Y216aFFlaE94TXhreXpEMkxIS2tlR01zdUJ6VTJ0N3Z5SXhvdUhPTTJpOVg2MGFKSjJTaUxmeFphMk1IbTNfOU9PMTZvYmdsMEZ5cXhaS2cwUWpYRDJ0eGhEaUVWTWtENGNGa01ONnpyb3lmbXY3ZFR4NHZuVXp1Z2N1b3VQaW9TNkFuZERfZVJ0OHJUZWZlSlRUUEpQbFE5azRWQnBwLUtWZGJtYkhNdw?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "warga singapura bikin markas pinjol ilegal di bali bunganya mencekik cnbc indonesia",
      "id": "9965aa9942fd21df",
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
      "eventId": "auto-f14bfbcbedcfeebb",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-28",
      "title": "3.244 Laporan Pinjol Ilegal di Jatim, Begini Cara Cek Legalitasnya - detikcom",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNOTdQYUVCRFV6YTh6bEZERGltUjFYU0pMazBLVTNKenpvMVljWGhVRk00LVd3ZkF4Z2JfNmJ0U002N0Rfc0hwM1ctZFA5U28wLUhieXEyVzJlZktRUV9VWVJqOF9nUTVSa3dRaEk1aWRsSXhLSnFXMm14eFo4c1RkQThDZWtod2FmY1ozMkdkR2pCRlI2WHB1empZcVowdl9hdk90cVlqUm5UeXM2OUtN0gG0AUFVX3lxTE9ubGZDa2NSeTBhQk56c2p4dV9XaHNKTk5IMVZXSk4xbTRxZDBmajdhdFczYlFlYWJ6ODlqLWF3Uk1pU2FHbm5MZjJaTlFTUV9YVzJNUGNfZl9rUnJBdUNrMkhuaUxzMGM3TTFPV0hIS2FsZDd0WV9TM0dfN0MzdENVb0JlRWoyR2Z3d2p5Q2FsNWFoSW9QcVlmdE9sZWhFQThMb1Z4YnEtSDA0WW43RnUzM2ZrdQ?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "3 244 laporan pinjol ilegal di jatim begini cara cek legalitasnya detikcom",
      "id": "9b371807244e6de4",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c1cb231902c19381",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-28",
      "title": "Adapundi Ajak UMKM Solo Bijak Memanfaatkan Pinjaman Daring Melalui Literasi Keuangan - NasionalNews",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPV3dxeG16OFdHYjBmcmp6YnpqZFl6T2dsZWxZWmQxLVB4TldlRTJqZ1J2Q3EzVmJPZmhKUHNfU1k2dnVsc2pySGZsMjVRUFdvTDBDMk02RGR0eEZpdEtNcVUwYUNiaWg4ZFdqZ3FmUnNlMks0Um9yS0daR1hLbGNwVlE0TUVGRTQ3UEhFVXFOSGVqMExka2ZETU0ydnhJTkhONERVZFJlYXVLQXNvbFVhYm1oakpjd3dfb2JoVmFR?oc=5",
      "publisherUrl": "https://www.nasionalnews.id",
      "source": "NasionalNews",
      "summary": "adapundi ajak umkm solo bijak memanfaatkan pinjaman daring melalui literasi keuangan nasionalnews",
      "id": "de67c86ce11adb0e",
      "domain": "nasionalnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c3873468dbceb2ac",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-28",
      "title": "Cerita Vicky Shu Diteror Debt Collector, Dituduh Punya Pinjol, KTP Tersebar, Klaim Korban Penipuan - TribunStyle.com",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPRDlZdHJzWkRXTm5PajhGNkUtWE12OHZSNkhTVjlWZU9UNGpNZHBXVlF5NlpBQXRXRWQyWlp0RFdyWVdTVGd0SmowVXZGc0FEQzhZTEpwTDQ4Y1B3S2R6Wl9sMFUxYUlfa2JaVUpxNW9Gd25HWnh6MFBJbk1IRHZSS2FYY3BrMG1DN3pFQ0JKNm1DZWNxdUpKWnVBR0ppTGt1d2ZtVjJ1RkxsczJfZ282VWliT1Q1MTdkSVJQVElXWlFtZUFtUnN1YkJTMWxhV1lfSkFn?oc=5",
      "publisherUrl": "https://style.tribunnews.com",
      "source": "TribunStyle.com",
      "summary": "cerita vicky shu diteror debt collector dituduh punya pinjol ktp tersebar klaim korban penipuan tribunstyle com",
      "id": "80cdad941da43407",
      "domain": "style.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 11.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-de93b09b181893e0",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-10-28",
      "title": "Imigrasi Ngurah Rai Bongkar Pinjol Ilegal dan Asusila oleh WNA - majalahfakta.id",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPdWlpSmZWQ0RQdWo4ektHYlAwRnNXQVBlNnNEODFnNzZWVHkxQXhTU3BRVDJQVmV2SW9Ud1JhUHBMUkFPcVpaQWpWdVFQTk1LSnVOU0FPbnM5RHFsc3RNeHo1QVJqUkctN2puQTk2MWVwRjdkRlQ0bXN1cHRRcndHeTF0WFZMZnJBNXVScF9zVEo?oc=5",
      "publisherUrl": "https://majalahfakta.id",
      "source": "majalahfakta.id",
      "summary": "imigrasi ngurah rai bongkar pinjol ilegal dan asusila oleh wna majalahfakta id",
      "id": "0fc609a08118f563",
      "domain": "majalahfakta.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a243d2445ae88ad2",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-28",
      "title": "Jalankan Bisnis Pinjol di Vila Sewaan, 17 WNA Malaysia-Singapura Ditangkap Imigrasi Bali - AFU.id",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNQWRNdzF5ZnpBdjNUWmE3QTlURldKWVB1eGRxRDBWVDhVa1ZHYUdGUF9xcXh3eG1KSnVhbEZIbVdob1MtMmo5blh5OUdVRmZ3NWRsSzk4dVFpNElUUW5iZ3FpYW9rUVUyVTZ3b1dSakF4U2lFSVVGVnVMWTNpRG1lSkcwLXM4LUp5SDh1XzVNTmI1Umlaby1aUW1iQVlIcFBlLTczR05iaTFDOVBQalo2RlpScGd2QQ?oc=5",
      "publisherUrl": "https://afu.id",
      "source": "AFU.id",
      "summary": "jalankan bisnis pinjol di vila sewaan 17 wna malaysia singapura ditangkap imigrasi bali afu id",
      "id": "c8443f575d08d608",
      "domain": "afu.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d88415910b91e02f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-28",
      "title": "Julie Laiskodat Minta Kepala Desa Aktif Cegah Judol dan Pinjol Ilegal - Fraksi Nasdem",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNck43ZUVQU3VuNWJHRkdEQUhhR1VQTTdPQ1hQcm4yUVhUQmxOb01OZFVuaWVPc1h1TVdPOXVZZHBMNFpHQm1kOUNsZmg3Z0hWaXI0bGRuTUlsVUhGS0ZLLVVZaG1URW9MN2NSeFBPUW8tRWEwS2tOUlJKY25IeXV2NERxNzUtYTFxbXdSUXZZY1FZTGNjdUM0V3VqeUkxRkxS?oc=5",
      "publisherUrl": "https://nasdemdprri.id",
      "source": "Fraksi Nasdem",
      "summary": "julie laiskodat minta kepala desa aktif cegah judol dan pinjol ilegal fraksi nasdem",
      "id": "7351755c83de8b12",
      "domain": "nasdemdprri.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c352d26abcdfc06a",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-28",
      "title": "Pinjaman Online: Kemudahan Akses Keuangan dan Risiko di Era Digital. - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQRmFTM0UwaGw5YkdhZEpWeVVPRVRrX0hYRGVPbkxXdURDNmxRdHBxVlMzZGI1ZU1HVmhYbzdyQ2dnQjFJUEt5ZzBrNTNNZERic1JrYzdsNHpwN2RMQ1lZU1FpQ3B0bmFIdk40NHp6UXZXaF9HM01EZVZCemlYUnlMYkR4bGRVMFdKUndIdFo5bUtIWmZmNldRR2FKZmh3SUlZaDVncVljVXBSVFBnNXp3THJMT1pXRy1ZaGRzNDRuY2g4SXlCNk9ReFR3LTVlbXZl?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "pinjaman online kemudahan akses keuangan dan risiko di era digital kompasiana com",
      "id": "097cca6a4d9d6a93",
      "domain": "kompasiana.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-74f65d530aa47f77",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-28",
      "title": "Putusan Dibatalkan PN Jakpus, KPPU Ajukan Kasasi Soal Bunga Pindar - Kabar24",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQOERJSTVqNm1aVkRCWFFKQmZPNV8wUlluYTNMbXRsWUowSWNLNnVvaU5pSmE5ckRMMDFzREJIaFZJRWJzbUswVS1zNU1SYXRQSkdCU1lsbWlNQmdSRkJNX29DZEdVZEt1Um9tQUk5a1AtdDZzRmVaWjlVc2NqS1Bud2lwZ2VwUzRnVjNUUFdRdnBzYVlleHZGSzZuQ3hZdHV1dDBiLVNOdEhETGJubkFiUVVmOWx2TEp2?oc=5",
      "publisherUrl": "https://kabar24.bisnis.com",
      "source": "Kabar24",
      "summary": "putusan dibatalkan pn jakpus kppu ajukan kasasi soal bunga pindar kabar24",
      "id": "670af6c4a75c61ef",
      "domain": "kabar24.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2066e1d514ecc221",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-28",
      "title": "Satgas PASTI Sikat 330 Entitas dan Aktivitas Keuangan Ilegal, Paling Banyak Pinjol Ilegal - Iconomics",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPdHZ4ZVVWTzJmamZMckVLMTZrWmtYMGhnUWxPZ1NUOGQyWlNsdXNHQVZzQ2k1Nll1dkF4Zl9RSnd4WkcxdUc2WTFoMkZIcDA3dDJjUTJXcXVBeURqeG1lYzZ2eTZmMGhnZ192MG13OVpyVlpPME5wR0hTcC1JcERsZk5DUW1wYW43NUthU3BxVjVaa2NsZFRUM1NnSmRoV3BaTnFTb3psSFlXV3BHZXY2Tmc1SnpROHVLbVFsWDdodUhtWEg4RU94MVpJZ3NqcGZ0?oc=5",
      "publisherUrl": "https://www.theiconomics.com",
      "source": "Iconomics",
      "summary": "satgas pasti sikat 330 entitas dan aktivitas keuangan ilegal paling banyak pinjol ilegal iconomics",
      "id": "aad47f5673f9f3ee",
      "domain": "theiconomics.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-79d8674e11ae07e7",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-28",
      "title": "Tak Perlu Pakai Perantara, Ini Solusi Batalkan Pinjaman Kredivo - beritajatim.com",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQUlY2TEd5UGhROS05UlJqalBsWlNpZnlVRVBFOWx5SnZ6dzNZWFhqRDNUek4wdExKekp5bi15U0stUE1melVOTU1nRWEyS2dhN1hMdW9YRVEyMTRXUGphcksxMzJJS0FQcDJmNVphanFOVVNRcUVGZy04QVpDU0RqVEROWk9iREx5SVFENlRn?oc=5",
      "publisherUrl": "https://beritajatim.com",
      "source": "beritajatim.com",
      "summary": "tak perlu pakai perantara ini solusi batalkan pinjaman kredivo beritajatim com",
      "id": "8a447fc6b2621d85",
      "domain": "beritajatim.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-58a6000d6d7728a4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-28",
      "title": "Warga Malaysia dan Singapura Jalankan Bisnis Pinjol Ilegal di Bali - TheStance",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxORnhVV2M0U1VlMUk2UW1RTmJnX25qQmI2RTlTWjdfTDl2b3VuLUxKblVhNmRuRzdkYnMxNUR0Z1ZqUS1ubXl5THZmdGZFWDJKd3hTd0NCVWJBS1JGcWh4UExFcGtwaGtqZ3lXV3pCN055ckVzdTBBUnIxMWNGaHNSZE1ERS1SS0RMYVA2dXFHN1E?oc=5",
      "publisherUrl": "https://thestance.id",
      "source": "TheStance",
      "summary": "warga malaysia dan singapura jalankan bisnis pinjol ilegal di bali thestance",
      "id": "190b0a08283bb129",
      "domain": "thestance.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-11296f25cb6384cf",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-29",
      "title": "Ada 3.244 Aduan Pinjol Ilegal di Jatim, Wakil Ketua DPRD Desak Pengaduan Dikawal hingga Tuntas - Lentera.co",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQcWV4OUZmd2VaemZwajJ0SWNZNUpUY29JQV9fLTBlTjEtaGFmQVYzek1LbWhBSVhmaEtIaDgtLXhWSF9HRk9POVVaN25xQTdUbzFEdWNRTkQ1cnd3d2tkSVlTQUFxT08xZ3kzT0tXcHZYa2NLMnBpV1hyYk9zYnF0VVRJWHRaam53Y1UyOUxHNDRUU0N1djl4YjdCaWRTTzd4eHBRVUFxR284WHh5dkYtRW1tMFJLQkVKVDl1VlpOTEM4LURrMks4?oc=5",
      "publisherUrl": "https://lentera.co",
      "source": "Lentera.co",
      "summary": "ada 3 244 aduan pinjol ilegal di jatim wakil ketua dprd desak pengaduan dikawal hingga tuntas lentera co",
      "id": "1e86e0ab57ef4a2b",
      "domain": "lentera.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4b7ebe9aceb4dd1b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-29",
      "title": "Akulaku Capital Kantongi Persetujuan OJK, Bank Neo Commerce Masuk Struktur Holding - kayonews.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPdzJ2MUY3SGVLdHhWa2lmSG0xdUx1Y0R5NkQ2UmRaek1PSGhXZUh6YkNCMkVzMTk0dDBqXzhnY3pwcWlLdU1MNzJQazZIbWZMMG5kTmhWaEN1OE8xNDNGcUx4VHRXUUhpSmlSUEw5eHd0dWd1SUJRdTE5UkR0VFNtMmM0amZkeTMwTmRibDlualdoMUVvR0ktajdtOXRWQ0hReWNSWmhzVzM?oc=5",
      "publisherUrl": "https://kayonews.co.id",
      "source": "kayonews.co.id",
      "summary": "akulaku capital kantongi persetujuan ojk bank neo commerce masuk struktur holding kayonews co id",
      "id": "48a27106d6e4432b",
      "domain": "kayonews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-678a98de597db64c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "Cara Cek NIK KTP Dipakai Utang Pinjol atau Tidak oleh Orang Lain - Info Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNjZpd3RYLWlnSEJZVDEtZVNTekFmdlVPVnhBbFZBNmlKNGxLRUVvWXVYankyRTNSbTQ4M19xYWcwR0RUb0xYQzVhSE1YYTd4QXMxOFNjamhkbFZpQ29xR2JteU8yc3lrUVZ5NUJjc1BMRHlacVZqbEktS1JMZWw0M2l5X3lNQ25wR3dQSVV6VlVUNHZWbnN0MEVHdmU?oc=5",
      "publisherUrl": "https://infoekonomi.id",
      "source": "Info Ekonomi",
      "summary": "cara cek nik ktp dipakai utang pinjol atau tidak oleh orang lain info ekonomi",
      "id": "4027dc4d29d17c9b",
      "domain": "infoekonomi.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-04e8b30e37d5e65b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "Cegah Judi Online dan Pinjaman Online Ilegal, Polsek Mentebah Laksanakan Pengecekan Handphone Anggota - https://www.humaspolreskh.com/",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPQXhfRzBiV192eXNPRm53UWdoWVpYd0xqbDhJcEtPTkxScmpfVlNHSXYzSHYyNFh1aXA3V3JIQk9RSF9Ya21hTFJyTWtpUmJEY3dJOEtnWHJ5MjNtMlBVY2xHbUtoczdvM2lLbXpESnJ0cnYzTklQS3BFSUdfeU9fc05XTVBuOTA5MTFCQkM2ZWxxMC1sT3Y4?oc=5",
      "publisherUrl": "https://www.humaspolreskh.com",
      "source": "https://www.humaspolreskh.com/",
      "summary": "cegah judi online dan pinjaman online ilegal polsek mentebah laksanakan pengecekan handphone anggota https www humaspolreskh com",
      "id": "07f6fc7a29642dc3",
      "domain": "humaspolreskh.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9adcff7524ab3906",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "Dedi Mulyadi Soroti Gaya Hidup Konsumtif dan Jeratan Pinjol - Pikiran Rakyat Koran",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNVUowcnFTa09YM2NuVzBIaGIyLVhseV9iVm5LZkNuWVRIUDFOUjBIeTNZVFJFdGtfNU1lWmM4WVlMXzdLcTJudWJrblF3bk95eFFRcS1adGZ2NzZYdE5HN3dDN294YTNDTDhBMC1JX2JqZUNJOVpHcjR1NnZPNU1RUndKRmtqTjVKMmJUU19DM2ItVVhxVkxwS1NkYnRod0dKaHlOQW5ESE9QUWFfeDM4N2JR?oc=5",
      "publisherUrl": "https://koran.pikiran-rakyat.com",
      "source": "Pikiran Rakyat Koran",
      "summary": "dedi mulyadi soroti gaya hidup konsumtif dan jeratan pinjol pikiran rakyat koran",
      "id": "30c13fc555973710",
      "domain": "koran.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4ff96de42b8acb59",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "Edukasi Pinjol Ilegal: Warga Desa DASEH Melek Hukum Halaman 1 - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNY0toWDRTVHBKZ2JTOXU1ZG8xRTdKM0tHSVpRM1lSVlJsSHJBdXNoZ044cEE2VmVaQlhqNUMwX1BOYVMxNEtsdzBtVTVlT3Zic2tzWGg0RGNFRmZrOWVFRWprR1hDWG5jeVAzc3BuSEFZUV96THR4Mkx0ZW9HaFdURy0waVc2bF9vbmVud1RZd0t0clA4WjJmdU05VjY4MHFwNFpYNGVlaFhfeUl3ZFhqS3g1UVZMTDJmQTRVSGE5Q0ZteEFrMjBvXzFB?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "edukasi pinjol ilegal warga desa daseh melek hukum halaman 1 kompasiana com",
      "id": "e98ccb333d0f634b",
      "domain": "kompasiana.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d9a75e6d81891fa0",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-29",
      "title": "Gandeng OJK Beri Edukasi Keuangan, Julie Laiskodat Minta Masyarakat Jangan Tertipu Pinjol - Pos-kupang.com",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPbDNWVUZDWnhaTmVhZTM0ZTQwdUN1TVFablBzeGRpWm1HX0tVLTVCLXhLRk80aVoyNDVRYXJudG5wSFFFRkc3VXFtOXdueUktMjdwTmhTa3Q4Y1pnOG1CcTBJM3BYSmxPc1IzcDMwMlNnQzM1cV9QZHlkaUlIMDJ6Q3ZFRlRhTTg3RUFTczF6MjZ4V3lDTmtPSlJlSkJmM2dEMVBiZGJqZTh4UTEwVWV3ci0weVhrWUZmVl9jZFJDeDFFQ0pzdFZJQXV5SDdHY2JoQ2U3QQ?oc=5",
      "publisherUrl": "https://kupang.tribunnews.com",
      "source": "Pos-kupang.com",
      "summary": "gandeng ojk beri edukasi keuangan julie laiskodat minta masyarakat jangan tertipu pinjol pos kupang com",
      "id": "d3d191a2f797b07a",
      "domain": "kupang.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bbb02b08048b04a2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "Gubernur KDM Ajak Masyarakat Jabar Lawan Judol dan Pinjol - Biro Adpim Jabar",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOUWpFQ1lOYkRQd0FGblhTcDJnMDNrNkJCYXhsT1dMaHRCSEc5X09TSEQyb0tiY3FuTFFoRHlpcV93T2FmbFJreUxGSk9xUjFfRXhmaGhzOFBrc3BialNaenFzMUkybDJ2elJwZnFNUnAzQnZXUXlVWlAyVjZOSW54ZWd4X0gwMzVuZGcwWU9WYVRVQ1VmZ0Y5WlE5c3lobUVVRGEtNndrZDloMGdQRGlvU2JnMnlBOXItdGIxV1N5WjNyYTFp?oc=5",
      "publisherUrl": "https://biroadpim.jabarprov.go.id",
      "source": "Biro Adpim Jabar",
      "summary": "gubernur kdm ajak masyarakat jabar lawan judol dan pinjol biro adpim jabar",
      "id": "6b6091173adadc0e",
      "domain": "biroadpim.jabarprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-adb8915420e481c9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "KDM Dorong Perlindungan Pendidikan dan Kesehatan agar Warga Tak Terjerat Pinjol - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxObEEzY2JoQjNVNDdiUlNWc3U3RVNBeDJWcDBMczJvRW5SZ1cwUjdNcmdpOVFDbTVwdHd4VzA0ay1hY1ZKZnZ5NjJSSWxrOGp2VUp6ZDlJU0tMcmZ6TWxsRVlvaHVSaUU1TkJaZ0w3Z1hXbE5xNkJ1ZktpaWM2TU42eHF3cmRHVjR2TkhDcWNQYWxxZDBkR3dNSm9GOGRlelBxOURrdmxtdlMtNEFTRTFTZG8zenJ6Ty10V1ExajA5MjRUNnJPUkJUbWNPXy0?oc=5",
      "publisherUrl": "https://bandung.bisnis.com",
      "source": "Bisnis.com",
      "summary": "kdm dorong perlindungan pendidikan dan kesehatan agar warga tak terjerat pinjol bisnis com",
      "id": "97dc635190b020ae",
      "domain": "bandung.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f117dee5f174a728",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "Memutus Efek Domino Cianjur: Dari Petaka PINJOL, Perceraian, hingga Ancaman Generasi Putus Sekolah (ATS) - Cianjur Update",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOZUplUU1FRWZwT3N4SjVudG5JVUJGZkNpZ1Z0OHItOGQ4a1EwOVVzYTZCZElJdlgxdFprTTB1dGxScVVINGNfLTNEempVd2RjRW94bW5tLUptNmVrQ1NBcW14N3BudC1kcEU3UXN6YWdVU3ZFc1NldlFWdXVQeXJoTmJxTXVrRVBlT3JsTlpGUDR4YVd3V3F2T19RUmtiSlpTSUdHYXBTQjVycW5RYWd1U1g5YUtKdVZTZUdOSGVidFNQUnFhUXpWLQ?oc=5",
      "publisherUrl": "https://www.cianjurupdate.com",
      "source": "Cianjur Update",
      "summary": "memutus efek domino cianjur dari petaka pinjol perceraian hingga ancaman generasi putus sekolah ats cianjur update",
      "id": "686523d0486db7d6",
      "domain": "cianjurupdate.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5db9de97f975f308",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "OJK Jatim Terima 3.244 Laporan Pinjol Ilegal, Tertinggi Kedua Nasional - DetikNews.ID",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQSlpNMWQ3cG9rd1htcUpLWkJ1OW9GemFfMTRadjBvTURHQVZkRkV3cXZjdlk3SGtPM0ZTS19PTWZZdHI4ZExFWWFueWNBMFFxMnJaV29BVlA2ZTJtQ2hVdTF6N18wN3c1ZkM0dDBDTTZNLXVZRmVKaFd4VzZNdzJoV0lPR1FHMWlzSTM2Vko5ajl5SW1Ybi05SVA1RmhPeGM4LVZwbXRzcnh0UQ?oc=5",
      "publisherUrl": "https://detiknews.id",
      "source": "DetikNews.ID",
      "summary": "ojk jatim terima 3 244 laporan pinjol ilegal tertinggi kedua nasional detiknews id",
      "id": "2c0237eba6ff6625",
      "domain": "detiknews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8cebf39c92b1a29c",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-29",
      "title": "Putusan Bunga Pinjol Denda Rp755 Miliar Dibatalkan PN Jakpus, KPPU Siapkan Kasasi - Hukumonline",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPQWlwMEhGQjBuZ2RYUVY0bHh4bHBVN3hSaHZJb2l3SmNwLWhycU9pS1Q0dkMxV2xQUmEyczdIdmZKdWRUaE5TSVFxZWxTNkpYaWF5dnFZd3ozTmNjWWNGTVAzZnJsc3V3M0k1VktMSmNvTmpuNGpSSFJJcGVvVWVKdFFYbkN4cm5KMmxmclRJd3A4Z0ZteURnZU12ckZ3SUZMcmlncUVhaVMxUE1oRDhkM0xhUnQxdUVTS2pYRVVXWi1NMmpnRzFkZUJLNUJWNzZB?oc=5",
      "publisherUrl": "https://www.hukumonline.com",
      "source": "Hukumonline",
      "summary": "putusan bunga pinjol denda rp755 miliar dibatalkan pn jakpus kppu siapkan kasasi hukumonline",
      "id": "2bc1a0349fac5379",
      "domain": "hukumonline.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 1.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c3c5112d46ea0138",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-29",
      "title": "Wabup Kuningan Tuti Andriani Ingatkan Bahaya Pinjol Ilegal, Masyarakat Desa Jadi Sasaran Edukasi - Radar Cirebon",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQQjZvTjBPOE5OLU5XRlZSUG44VkI1VHFxUVlQeEZQd1RmUGdoNk9aLUcySGNJVlA2TkxrU2xqVEwwNDBLX0tBN0NCUFBjZVpub2NrUzJCTFByUGJwMnZiQU9vUktzTUpnbS1rQ0tWdWVQSU5hQ2VDbjBCUm5Wck9QRWlJVDVCQldRTWhNNDBpdnJCLWU5NGh2cHV3R2kxdHA2Nm1WbVFTbndhT1RsUmliUVhGUTdNTWVuMDVaaDNTOFRodUtOR3hMWmk4R0dvRlVxY2ltNWhJak1PZ3hMa0xiWQ?oc=5",
      "publisherUrl": "https://radarcirebon.disway.id",
      "source": "Radar Cirebon",
      "summary": "wabup kuningan tuti andriani ingatkan bahaya pinjol ilegal masyarakat desa jadi sasaran edukasi radar cirebon",
      "id": "8e18009160eb8271",
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
      "eventId": "auto-dcb2f4afba0324c9",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-30",
      "title": "Akademisi Ingatkan Lingkaran Merah antara Judi Online dan Pinjol Ilegal - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQQTlnX3ZIT1BBZkxmUldWSjVyT1dQTHhzOVNHRFRYdHQxMUowYjlBbGRQRUhzcDdYcnJiVkJIRDBNUkZ4elFvNnRBM3ZwNWdEVV9QNVF2MkdLb1RqNWVXNXNFdk1STmljWmd1eEtySXp3cDBoUXM4Y0xyYVQ1amVUQXlCYnRzUHQ2eHY5QWpuVXhJV252R1dINjJoZGFpbU1oT0FrU0gwY083UzBQZXNwVkNR?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "akademisi ingatkan lingkaran merah antara judi online dan pinjol ilegal rri co id",
      "id": "fdb6458e1b641370",
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
      "eventId": "auto-34c36d9f3366cb74",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-30",
      "title": "Bagaimana Judol dan Pinjol Bisa Menyeret ke Lingkaran Utang hingga Kriminalitas? - Kompas.tv",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQldXV2FlMGZvTHVBSkY3NHJkUExVd2g4RC1GZmdPb1BZNnMwX2NqVDlhMVFYTHMwUl9ZV3FDTExMZGVNdlJjZnhRLTJXNnJXdU1Yc25tU2ZlVlhRdGU2emZaQzdKVlR1U0hjUUV1c0JpYjd3Tmxucmh3c2ZoUzJKNk82eHhQVmlvSU1Tb2JoVlEzTi1Va0Y2SGhQUVdBUkFjSVc0c1dnM2g5V3JQRXNQNzNFOUtWcC1E0gG-AUFVX3lxTE1NcUFnS1lrTjVObjdWUnBTazBqY1Q3bDh4ZEZnZzhlamhTWlZmRkVJM1hWbDJjQlRjWDdjOUtvd05oemJBbzFHVTgxdktCWHNScmczdkJrc0stZmJCWU0tSTRFTjhXWGFvRkdoUkJlX1BDZ3laSWpxYndFYnl0S1BWRFRMb0tjX3Q1R2l2VDVuaDFZcF9FN0x6MHpMNEp0VmJaUlpQX2tfRy03VG1XazMyRWhGbHJxdVphWVpHSmc?oc=5",
      "publisherUrl": "https://www.kompas.tv",
      "source": "Kompas.tv",
      "summary": "bagaimana judol dan pinjol bisa menyeret ke lingkaran utang hingga kriminalitas kompas tv",
      "id": "3055cb923c788f1f",
      "domain": "kompas.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cdda22d208188b37",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Cara Cek KTP Kita Terdaftar di Pinjol Apa Saja? - Head Topics",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPdEZaVXNUcFgyc1JLUUR3aTB2d2ZPc2hPVC0yeUc0cTFNNGQ4cXROX1FGY1lRVzVIQWtsRi1qdGZobWt6cFV2Mk1GZXlZVDBDcEU3dnUwTHppYWJIZlpqSkd3MWZTcnNTWUY3ZUh1RjN3NEVYU0s1bi1ybmQ5SjVhSUh3clFrTWwzOWtSdWtUYw?oc=5",
      "publisherUrl": "https://id.headtopics.com",
      "source": "Head Topics",
      "summary": "cara cek ktp kita terdaftar di pinjol apa saja head topics",
      "id": "52d3f69ff8c5c0b6",
      "domain": "id.headtopics.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1a384498795bb3cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Cara Cek KTP Kita Terdaftar di Pinjol Apa Saja? - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNnY5elFFM1FJUFU1RV9xM0VGMTlpWEhFYllaNktQRFhaRF9qMmJnVnl3aGlSbFdmcjlDNE0wY3lVUW42UWR3TGJCQnU3MHVsS0FIZW9tdkVoSHp5b0VBQjMxZlJfNnFtbzllLXNtWklFQ2ZWZlhjQUE4M3J1NTEyZ2paNlZyTTVaTDFtd0VmeE5QUjgzcm9zRGUwU0vSAZwBQVVfeXFMTmZiTXpOQkdoY2pxOEhfR0RnU29VM00zUnlQaktFZkt1MnFtNUhQR1gzdnEzdWhIeC1pQ0tyeGFzWTVtazZJY0xxZG8wLThZYTNQRXJ5d3hZSEFQaWtDbFhlcS10bS1xdWFtQjNjSkFiRmlDSTA3eEUtRWI1elZha0hzaUw5bFpCM2dyN2U4bkJ3YXJpcmJJQjhmbE5X?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "cara cek ktp kita terdaftar di pinjol apa saja suara com",
      "id": "a3721d45f6ee69ea",
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
      "eventId": "auto-1a384498795bb3cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Gubernur Jabar Sayangkan Banyak Warganya Terjerat Pinjol dan Judol - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOcTNMeDRDSDhVZ2dkMk5FOUVoVUl3U3FKa1psLUFiU0tsNm1PSk1OOFA0VVk0TkNyR01MMy1tLW13T0w2ZkRmbVRFMV90NW5tYnVCa2tjTktOcDc3RDRzc1dxNThUdDdhTTNmNXg0eWtyTHRYMjNCZjVWaEtEWDlZNThZS2N2TFhCYVpnRmk4SUdLclQzVzdDejZnMkhfSW9GUmV3?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "gubernur jabar sayangkan banyak warganya terjerat pinjol dan judol rri co id",
      "id": "2e8aa1abf9d1a3d3",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e479b6fa6e870ef8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Hampir Separuh Penerima Kredit Pertama Kredivo Perempuan, Akses Modal Usaha Makin Terbuka - Tek.ID",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQak5lNTBiRUpSYTY3MmVLQl9JQWVCbkt6M05LZ1I4Yk9pRzFlNWprbFpBQThWUHU1SlpVUjV5RjRoYXhfcERPRHNfYWdUd01qTUEzdEplNElwZVpfcE9HNGhpNndpUnFMZUVhbGM2VjVqVlRva09wcHpGMHhuSGtrbEJZMmRXNlNJaUZpdVhHbG15dHdfa1F1Vg?oc=5",
      "publisherUrl": "https://www.tek.id",
      "source": "Tek.ID",
      "summary": "hampir separuh penerima kredit pertama kredivo perempuan akses modal usaha makin terbuka tek id",
      "id": "4f8818e6fd6d461e",
      "domain": "tek.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4ae7f77f76d9a2a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Jangan Sampai Warga Desa Terjebak Pinjol Ilegal, Ini Pesan Wabup Kuningan di FinExpo BIK 2026 - Pikiran Rakyat Kuningan",
      "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxQWm9iMFVIQ1FQV0pKS1pSZnRYa1V2MVp5VkdKN05CWDlSQlVtTW56bEZnaTNhem03UXF6aWRYUUdxMmh0djBvbHcwUEZkLTRZN2lybnhEV3JKV09WOFNXTXNkU1VaWHR6MWJoTWpCek1INHBjNXIyb0ZXSVJOdHNXdUhLZkpzREFkNWY5R3FBMzBKcG9DSnliUmVzZTNHaVZOZHFJMkwwd01Wa3pYTGtiUWNPcVVyZUJCZUw2V3E3QmJPVTRRN3ZkaVkxNjl1SHpiNEtRbDBSZzJYUXdSZVJobzEzaFJQQdIB6wFBVV95cUxQSEZMa2x5NlNzM2dlZlhucXQzSE9Wd1JwM2Y1UHU5UW9ORURjdU5BRlVUNVFmTjJQZGFGRzJVcVhkdTVVR3ZUTTR6dW5hMGpDT0wxWXFDdGRUNmFjZ1RydlJoS3hTRG1xRTF0Mi1fb1hmNGRreUl5MFBla0J3STE1MmVxNjE1STZPTGVwZGZfaEtpU0tZQkoyZGNsNWQ3SHVCejFrbjR3TzZfdEdhem8ycm1JZ25QcFdxaW1ONWs2U21IQU5RbW1GQ3V2THM4Zk5leTlZNlI5elFGc0NlVk9aczV3ZzBJZVd2QS13?oc=5",
      "publisherUrl": "https://kuningan.pikiran-rakyat.com",
      "source": "Pikiran Rakyat Kuningan",
      "summary": "jangan sampai warga desa terjebak pinjol ilegal ini pesan wabup kuningan di finexpo bik 2026 pikiran rakyat kuningan",
      "id": "7f33852a9fc80c37",
      "domain": "kuningan.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-92ec7ebd5c3d156e",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-30",
      "title": "KDM Ajak Warga Jabar Bijak Kelola Keuangan, Jangan Terjebak Pinjol dan Judol - KAPOL.ID",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNdEhocVZxbWtrdXRkLW9UNzJhT1hXc1VLYUZBOVpVaXJaWDRrRW9MWEFMZllPWDlXbVdxN2xnQ05JbHBtQW5FamJmWWNackRCd1Njd0EtbVNZblY5WG1aQXAwdXlOSnpQb0ltMF9CcUFON2xaZjB4TnhGbTlueTg0VVZ4OU5EUlhpcVdzUDJSWV9OOEhaMDJMMw?oc=5",
      "publisherUrl": "https://kapol.id",
      "source": "KAPOL.ID",
      "summary": "kdm ajak warga jabar bijak kelola keuangan jangan terjebak pinjol dan judol kapol id",
      "id": "cb9975e9f0053cfb",
      "domain": "kapol.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aaa081e72d50496f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "KPPU Ajukan Kasasi atas Putusan Perkara Dugaan Kartel Bunga Pindar - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOVVIyXzJZVDRMclM1UWl1cDNuNFMyWkNxMDUtS0x5M0xfQkdxSEdjN244ZkVGenFvLWxPQkVFM0RSTms3WkFNR0I5aFNmX19IV1hJd0dKNEVidjhVeC1MUGpQTF9pMzdwbmVVNlI1Q190bGFxVV9nU1N5YmJCNndGdUFVU1lHUjVIdVJadGRwd1k3d2c4WlE?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "kppu ajukan kasasi atas putusan perkara dugaan kartel bunga pindar infobanknews",
      "id": "f20891698f0001b6",
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
      "eventId": "auto-23a989442871129d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Literasi Keuangan Masyarakat Jabar Jadi Sorotan di FinExpo 2026 - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOazB4cGNLWjRVUTlReVI4NXZzeHpabnhpYU9IMXVHT1Vpcm1FdHg3N2N5MjgxYTFocXViWGg5T0o3ZEF6RV9YeTFPalA4YUhLNEFrOGtMdXVyVzNXTGNmOEVjdTlrZGhLcWVPOUJIYUIzazgwTUh0cEJ6RVZDZmxIbm5xLVRjbWU1aGV5X2hDN3ZVRkpFakdTcy0yQ2pWZkNZMm1aNkJHQzAyUQ?oc=5",
      "publisherUrl": "https://jabar.jpnn.com",
      "source": "JPNN.com",
      "summary": "literasi keuangan masyarakat jabar jadi sorotan di finexpo 2026 jpnn com",
      "id": "f575101dccb2874c",
      "domain": "jabar.jpnn.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-818f0506c265c678",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "OJK Peringatkan Gen Z: Terjerat Pinjol Bisa Bikin Susah Dapat Pekerjaan - SINATA.ID",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPM0gzZEN5R3FIbGtGTE9kdTdWRDhpZWpDS0VPZVgtN1BMRl91Wl9FQTJHdlJLZ1U0eEZQWDBBV2hZLXVHT1JXc1dFY2xWWjlpODBRaElvUlA5N3RoWjZIWW84U1ZZWFJESF9tTXYtWTRfQm02dnRDYkk5eHp5UENkb056T1pqbkJCOUxQWDFhVEVMQQ?oc=5",
      "publisherUrl": "https://sinata.id",
      "source": "SINATA.ID",
      "summary": "ojk peringatkan gen z terjerat pinjol bisa bikin susah dapat pekerjaan sinata id",
      "id": "a8950f72bea288d5",
      "domain": "sinata.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-51c6ef472bb3f943",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Otoritas Jasa Keuangan Serahkan Hasil Telusur Dana DSI ke Bareskrim - Katadata.co.id",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQZk5mMS1BMWc3VjJEYUNrYWZnb0QzdlBlMWs5MDBNNjNoRFRLMk5BSjZyZTdWcGJja1ZwbWRyQmMwLUc5anpyOWs3S3ZJSFQtRm9jTWxlVk13UGNXVlVUM1c1Yl9hSFVVT1ZzUU9tU1hEeXJTYWN2MW9KcW1HVldEQVJvQldVU1kydmFWUUdoMzA0X2dhNWJKVmhpVjJuMnNoUkJlSWJFMzdmM1M2OUtYWnV0NWt2V0dCdG1XWNIBwgFBVV95cUxQamFjZjZWdGhOWm5pUWthcGhjVGFsc2R3aU9rZmdkVk0zRkdEQWVnT2c5YVpHVGdtbHBZT3VLWFBMRTk2ek1MTHNBd2xrT3ZMWGpTZzVULTB3ejdOeEdzd3lGeU82YktRTllKRUdsSTZ3TGtVQ0NuU01ERkxxVXFaTkxXWmlUa28zdGRfOFRaY0ZMSXYwd1ZyTGtQQ2E4dE9TWk5jMnA1alh5VFdIWFQwUUhGSmZ3V2hoUFRGZWZmaXN1UQ?oc=5",
      "publisherUrl": "https://katadata.co.id",
      "source": "Katadata.co.id",
      "summary": "otoritas jasa keuangan serahkan hasil telusur dana dsi ke bareskrim katadata co id",
      "id": "729b27dccc38f6a2",
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
      "eventId": "auto-9afa7f71f69c8b09",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Pembiayaan P2P Lending di Jatim Tumbuh 13,26%, OJK Minta Lender Cermat Hitung Risiko - Bisnis.com - Surabaya",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNSmxsWC1HMmttcm9OLVRSTk0tbnNtQVhaYzFFdXl4bGY1ZHN3Mk9NaGJ5S3Ftb0ZiSVc4NUxDRWV3LTIzcEg0MkNLNFdsT1NEMTRoZzBYclR1ZGhMdzgyWDNrXzctZkZ6WHkxMkNuOVRxWmxWU3JZSkp6Q2lMSTZta1RpV0RMNnZoVnFqd2t2X0U2QlF2eVdyZE5ma0ppWEkwUFZieTM4QUdPTnFGb09EcE1KTTBxQWxRVV9xaC1yRGhtVXNLR1VSelBmRm93VGV0?oc=5",
      "publisherUrl": "https://surabaya.bisnis.com",
      "source": "Bisnis.com - Surabaya",
      "summary": "pembiayaan p2p lending di jatim tumbuh 13 26 ojk minta lender cermat hitung risiko bisnis com surabaya",
      "id": "7229c1ae27ea0b9b",
      "domain": "surabaya.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 47.2,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-04926fc07327ad67",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-10-30",
      "title": "Pindar CICIL Fokus Pembiayaan Produktif, Sudah Salurkan Rp3 Triliun - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPZXlfckxxSXFRUlY3b3dOWFpCdWdET1RrRENtYnE0c2RxaDNuTlJJOFZFN3dzYVJUTFgwbFlCLWRqVWpTWDRGel9KeU5hNmEwRHgzVjdOS3B0UFdpaWR4TzUzaFY3Q3FNby1ZSnJjV2VhdTFkSlFFMUFQb0lHdEZjeWdqMHpKTy1Ma1B4UWNKai1KNHJHTDZxdTJxeE1VZmp4MHBSOV9MWWkxcWl2VGV3MC0ybERTQzFxcXFnYXln?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "pindar cicil fokus pembiayaan produktif sudah salurkan rp3 triliun bisnis com",
      "id": "657a38706af9f899",
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
      "eventId": "auto-a0fb5aef0d99a490",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-30",
      "title": "Pinjol Ilegal Ancam Ekonomi Keluarga, Kabupaten Bogor Tertinggi di Jawa Barat - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNT09aTk40NUs4ME5pNWR1YXduS09vU2RWNk5mempRb281Q2lneFBfdGVQZTg3Z0d0bl9rb20zUi1ocnNEZGhGRGlobi1WVFN5SWpSNXZYTUxlZWR4dGZWY2F2OXFVMXFqNmNEU3UwR1o5N2NGWWt3amV1cGM0bUhkOEJuM18ta1AyWERtdXRYYzhsVnVXdGpVUFA0QUNmcnNYZGw1aDg5cURURlZRbllPQjd6Z2vSAboBQVVfeXFMTThCQUtkVU84RHNTX09JUWFURmF1ajlpYzJyOFpueEtFQnN3MzJXdHdocGltR2ZWaThyOEdXejdSVnVIbWVCTEx3T3pvSE1jMzQ3U0hBVlhSVHl4NkhmclJ2MTRXdHlDdWQ4N0hEWThMcUsyQ1ZDd0NvakdPUHk0M0VKaE1EUGVuc0R1bVJLN25xc05ycjZMYU96OUloWUdpdUtfQUJOUjhvZkxUbzktRWpzVk1wNDUtd2JR?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "pinjol ilegal ancam ekonomi keluarga kabupaten bogor tertinggi di jawa barat warta ekonomi",
      "id": "59c71d9925f55d56",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 76.6,
        "label": "negative",
        "negativeWeight": 4.3,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4d0e85f7a5f58a1c",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-30",
      "title": "Tips Menghadapi Teror Debt Collector Pinjol, Cek Panduan Resmi OJK dan Polisi - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNTVZoMl9nVjRhWGV4MldpMHptUGhUaXBvY2RtVkt2RVJSWEtpUkdDM011TkoxMHdmZkoxZUo4QUx2cWU2Z2h6b0JNTlhDYnhob0p6NE9GbXZaWEJiS1M4cWNKdUpXRW9TaVpGSTA3c1YzLWNyUjg0MWRrS0tjRlZiRGFfakh1b3dKSHZpRlNMMWYwU00wNHlPcGFqcm1UT2RIaEwyMmxMeWVPM0ZQcEQyZ2FlYkFNU1dZNkFFNHZXLVFmd1NuWGhwSWdENA?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "tips menghadapi teror debt collector pinjol cek panduan resmi ojk dan polisi bisnis com",
      "id": "f7a19fc38d23ae7b",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 81.5,
        "label": "negative",
        "negativeWeight": 4.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-08fe10d6793dbacf",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-10-31",
      "title": "5 Fakta Pinjol Ilegal hingga Investasi Bodong yang Masih Mengintai Masyarakat - economy.okezone.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNMUxKdDlGbF95ZUg5VWNZMFdkS29kckNkYmRYMkJXNHV3MFBDV25fNHdkcVJKNmFPTlVlSmx5RUJfREhIZW9yRVRHdVpYM2VtZ3AxVVd2cS1QczFxNkFrMUdTelVVLVJUcnVlYWREU3pPYmZGWHlDcENSc0pEWVFyTVE2MVFaTE0xSExhS0x2VkdjSW1zM3BPUTQ3b0Y5NGZfdmJTOTNsYUpOcEwyZmoybFIxSjFwM1VDUzlid3pWazRIRkFOQVZ0eGlsNHNMd9IBzAFBVV95cUxPTk1BSzFUYmsyNGNrOXpjdFZJQWhKZ2t5S1BoR3hFMENoeHNBTWhscW1hNUx3OW5kRWJmMkxUejFzQTRibjNZNmFDUnVrQ2JRckVZWHlWbjBFWWhfUjFzeDFtUXM3SHlsRHZiZFlVVU1HSXJpdms2NnQzLThKaXg2OVBqNWR3LW5fVUl6OVlKWFRPWXplNE5haFdTSWI2azI2THF1N1dvQ20weFJtRWxJeFdXLUNFdUJNVjlWcUtmWGxVZVJLR1A0aVQtZ2E?oc=5",
      "publisherUrl": "https://economy.okezone.com",
      "source": "economy.okezone.com",
      "summary": "5 fakta pinjol ilegal hingga investasi bodong yang masih mengintai masyarakat economy okezone com",
      "id": "fcdab68bd7dc62f0",
      "domain": "economy.okezone.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a1b062ebf703ec5",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-31",
      "title": "Akses Kredit Pertama Bagi Perempuan Melonjak 10 Kali Lipat - Selular.ID",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQa0dBc1lPcFZjRHJJakFyWUpkV0N6STFsNS1fSDQ2U1VJRlhFVHA1SEF2Wkl1ZWUwTzR6d1JtREpDZ0xldmVoTjYxX1hDdEhRZEdMUGRyeDhPU1NTQmNIOHJwRFByc1F0TEI4UnNpVVc3bnR1bElFU0w3WmwzdFpOZUFacExna1AzMFlhVTZ5TQ?oc=5",
      "publisherUrl": "https://selular.id",
      "source": "Selular.ID",
      "summary": "akses kredit pertama bagi perempuan melonjak 10 kali lipat selular id",
      "id": "568932aeaff01114",
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
      "eventId": "auto-12f4a63d3e771ee7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Cegah Judol dan Pinjol, Karutan Singkil Periksa Ponsel Pegawai - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNeDJfMnZMQWJpbjE1TkhrbDBmUTd3cWN1OFpPQmRsX2Rya29tZWZsRF9GU0xBM05VQUpaOWs2S0cySGtKdEppQlo2UWQ0bzZqbm14bXVhNmRGNlVTaHdpdVFlWkt3TWhmbWN3aWptaW9INlpWRHU2OE1raGNlVE94YVNsUDlNandLQkp0WEhIQTBnY19wai10MnFMVmxfNEFWTnBjN21yMEcwdmZVQmVVM21B?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "cegah judol dan pinjol karutan singkil periksa ponsel pegawai rri co id",
      "id": "8aebb58e112b66f9",
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
      "eventId": "auto-92d78b9f3d73bd0c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Cek NIK KTP di SLIK OJK untuk Mengetahui Pinjol Ilegal - ChatNews.id",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1QYVdqOC1wM0ItU29Dd3BQdU5mRE9aUjZNTzlGMnpROUVIX3lGUV8xQXYxUEtCaXhFLTVnUVR4RU04VDVuc19qRS1yZlZqS29xSjg0bFR4alI?oc=5",
      "publisherUrl": "https://chatnews.id",
      "source": "ChatNews.id",
      "summary": "cek nik ktp di slik ojk untuk mengetahui pinjol ilegal chatnews id",
      "id": "60606b0578169e9a",
      "domain": "chatnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dbff4d3c3c2764ba",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-31",
      "title": "Data Pribadi Rentan Disalahgunakan Dalam Modus Pinjol Ilegal, OJK Merilis Langkah Penanganan Resminya - radarlampung.disway.id - Radar Lampung",
      "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxOaU1VWGpMMVhONXhfYzRZTnl5Nm0yaWJlY0FPNWpwLVZCaS1lZ3I2c1FwWng4c2dXSFB6NTB4d0pudG5oR1JyYzYtTmE2TU9ROVM4V1FzcUx0VTBic1A4eks2TDhKbWJVTEpDck5lSDhOX0tuSk9zYTEzQU9ScC1yZkR0d0VJeHVZV2FOTDg4WXVfNWtEOVZMamQtek9YMURSSGZlLTcwN0RNY2FrOUVFZmY2VnlmaVdqeHhfNG9CdVVtRy1kUTRLWUwxOFo5WHJUWkxiWlQ2d1luWndKSWFFaDE3M2lXb3RLUmdIU1djONIB2gFBVV95cUxPQXg2UjE3ZHRHdjM0c0xEUTU4bmViTjFBY2ZwcHBIUlIzOWM1NkktMklwOUlvMlZiWUM4SE9mUENQWklVWVFfaUduNjExelJoSnBYZ3R6QzhVSGtScDhKYjRzNE5ud3lVUG1PcWRZYTVsU1lmTmRVN20yVmJMbmdhRUtjNUZSVzhDYlhlR3dyZi1hVnZhVERGOWdXLXRBWjFVOUF1SDRneE5ZYzF0YUdVTTRLWVNXRXpUUWotY0RiRVZLSkZLSFpiRFVDME9HTV9ZN0Zidy1GVEREQQ?oc=5",
      "publisherUrl": "https://radarlampung.disway.id",
      "source": "Radar Lampung",
      "summary": "data pribadi rentan disalahgunakan dalam modus pinjol ilegal ojk merilis langkah penanganan resminya radarlampung disway id radar lampung",
      "id": "a72472c495c9d256",
      "domain": "radarlampung.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b2b0f683d998ac3b",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-31",
      "title": "Dedi Mulyadi Skakmat OJK, Sebut Birokrasi Perbankan Indonesia Rumit hingga Singgung Pinjol - Tribun Video",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPOHdPV1ppOGRsMzNzZlB3TXRIdzVUaUtZdGNaLTlVXzlkZ2tWbVZpWVJkQ19jSDZHVkdlMWlJVTFJd204bERyNHBtbW92MU1zVDJyNThHUVYtOF9Pc2dnNTRNekRxNWM1M0xvaGNxZlNYYmQ3d3ZkbFkyTGpZcUtMb3ptZ1BpaW42N2ctTVFrMlhZSDVjam5jUmRzN205NEJTc0x5cWZSWU9EaUR1dkctOEpLb09JQU5QN1RCa3BJa0dEUDAyM3M2bDBB?oc=5",
      "publisherUrl": "https://video.tribunnews.com",
      "source": "Tribun Video",
      "summary": "dedi mulyadi skakmat ojk sebut birokrasi perbankan indonesia rumit hingga singgung pinjol tribun video",
      "id": "2b3c4f31685302d7",
      "domain": "video.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6986b43e80053ab9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Diteror Debt Collector Pinjol? Ini Hak Peminjam dan Cara Melapor ke OJK serta Polisi - kayonews.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPZ1NjTUtsd0hveHdvN3ZsN0x5bThIZHJyZ3JfelFsT3lPZTdCSVZrTUNoUkFlbWc5VkQwaDNyWlI1VDNxN2dfZWhQS0JYU3J0M3BCTkMzUGNIMnh5d3B0UEZDaFpWLTJ5dS1uLUpPRl9TcmtETW5PVWpCa1M0M3d6N2NVY2tDOHJYWGR1Ql9hSTl4ZUxWR0ZUYlkxaHZud2tMaWxCQzkyYUhUUE0?oc=5",
      "publisherUrl": "https://kayonews.co.id",
      "source": "kayonews.co.id",
      "summary": "diteror debt collector pinjol ini hak peminjam dan cara melapor ke ojk serta polisi kayonews co id",
      "id": "f8b2f59c2758aa37",
      "domain": "kayonews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 7.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8b7773758dc21aed",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-10-31",
      "title": "Gubernur Jabar Prihatin Banyak Warganya Terjerat Pinjol dan Judol - Koran Jakarta ®",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNYWNSdlJkTW4zRy1rNmRtRHZjVmdCVUhEM3A1UlhBeExPcFR3SU9feXFUMlNnTVJNQVZVZFRIQmc3VTdwaTR0ZjJ1OTVlU3Ntc3ZMU3F1Q0otcERfQ2hwS1VwX1RpRWdBaUJUTC04QlZXS3BXclg1MzZ5WEFZNjlwd0hCNElsR0NYZGZZXzM2bkJ1ZXlmN245OUpjeDFuZHR6b0tiadIBqgFBVV95cUxQaXZyM0hqNWNfMnJpQnp6dDFObTN1anc2MFppZHU3Tk5ocERuSHozM01va1dIdm9pWHdlLThpNDhqM3VHQUFIOThhX3hZc0d6LW1nNEJrd2dveGhPcW4wZzg2SURYMk0tNWJYcVlDa2pKSzdJTkMyS3h5Zmx0SVhwT3prTGVucU1oLTZXaVZKQkVGZ1A3LU04STJNcjZVLWdYVkRrZ1BILURQdw?oc=5",
      "publisherUrl": "https://koran-jakarta.com",
      "source": "Koran Jakarta ®",
      "summary": "gubernur jabar prihatin banyak warganya terjerat pinjol dan judol koran jakarta",
      "id": "0e3225d97fd783a6",
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
      "eventId": "auto-c82b07cbeb997790",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "KDM Ajak Warga Jabar Bijak Kelola Keuangan, Hindari Judol dan Pinjol - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOYTJRbXhFSmxYR1pEMUFSTDkxUnFuUkQzclhyQmhsOURsZTFxVzdYRGd4dUJXanExOU41RE1QZzJjMGIzdFR3SGNnOVplUmhGQkdUeW9QN0h0ejlqZXVsRmhRUWNXcVJWcmdqTHVDZXlQNmFLSVJad3p6LW9Zdk5EaFpYTExGRmlFbVgyTXlRNUFzTHl4a3A5XzJ4dHdsWUdrUGp2ekNQT1BwbzhiSjNYM09xcEtYZUFVSVlIb1piUVA1bE5ndEtXRjRoY9IB0AFBVV95cUxQbk14ODM5WTNhemtVamZfb0lyejdkdkVNVjNrLU9MTmJPanJkY0V5cUlEaTByU2tyemUwQ25SRXNNNXZaMm92Z2NoUERONHNWSWlaTmpac0N6Y2s5LVE1eW56WEh6UFVwbWtkSGJwdkZQQU5wcXM4S1FIMmo5YXEzTkMwS0xUYzBOT1czeUtzQ3NzUWlkZ2VWMHBBUXN5Y0NnYkt3NE1qVy1VbXJSd0pxTTEwUW1GX3lDVjhDM3RsbkxVU1NmUlgtUFJMM1REX2F1?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "kdm ajak warga jabar bijak kelola keuangan hindari judol dan pinjol cnn indonesia",
      "id": "2cc53c93a9ac532c",
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
      "eventId": "auto-91332f751320c6f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "KDM Ajak Warga Jabar Hindari Judol dan Pinjol - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxObjE2T1NlUVBFZHl0RUNjQVdKY0NzRlpEcmZIWEZYdG9mdEhCejBnM1F4aGNQTWNlTDF6Mi1leEo5X3loM25ERHV2MEktLUZSSUxTc1h6TlFBcEdKZGt2dS04T1RIT092NTNLeDNaRDh4ZUtZNzBCSlNBeHFFQ3U0UzRIVjhZN28?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "kdm ajak warga jabar hindari judol dan pinjol rri co id",
      "id": "f277242d63977559",
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
      "eventId": "auto-efa81ed5e8234ea1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Kredivo Perluas Akses Kredit Perempuan, Pengguna untuk Modal Usaha Naik 15 Kali Lipat - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQanh1blVSZjA4ZmxiNTVQX1FBZW1HbXRzblpfSndnNDVINmhsZk0xSEUwUHJaby0xcXFLZ1hEX3ZDN2I3RlY0VGdjNTIxOFNIUVppQXdMOFRJZWlLeGVDeGY4aFI1ZXZDRjMyVXJOLWk5VnlQWXl3YmYxMzZrM1VOeURJWklNUEs3a0tCTmFtQmhhOTlsbDc1RlZmX0FXSVNxWmozZEk2dlM2eXBCQ3RDbkJJM1RPR0lNUHZabFROOXMzMWFa?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "kredivo perluas akses kredit perempuan pengguna untuk modal usaha naik 15 kali lipat investortrust",
      "id": "e13f106e85903e10",
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
      "eventId": "auto-1e39964756480348",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Nomor HP Jadi Pengganti Skor Kredit Ajukan Pinjaman, Cek Syaratnya - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNcEo5UWRJVnJPc2h2UFJsU2NIWm5UcHBleVp1dUhaOGM4cGlpM1BtM0NKUDFuenNXcUZIcDh0NDYtMklzQjBhdV9URWxiMk1CVzZDZzFOOG1sdDNoTkFOQW4zN1p5UmdaMnJFYlpkOWtyY3VSbFFmQk5oSzY4X2piMDlGOVE5Q0RCeHgwcnRMdnlOTzJsY2RCOC1DNkFXclFYaWZXN2l1TUpsSmVidGVyZVFhYjEtcTRMVkV6VzNwQUJRRFlqYlHSAcsBQVVfeXFMT0IxSmItTkhJU2ZIb1JMWDBKUjRNcS0zb1ZFRnZmLVhZRHF0NWpzOXY0aG44dkVBd2pkWUp2dXpjN2ZaNTBCaU9Jek9QS2RoRnNQMzFsT3pIWW9aVlZJa1ZEaTBRSklVdjVzT0FWZWFLUUVkU1UwRWJzeFNCSUFvVG9fMTk4VVZqTWEwb1BCY2N0b3Uxb3hhR2Z3Wnc0RFp3cVBTeFY0SWlPajhuQm5IX2RCT1ZlWkprdHdjV01JTVFscVkwYVJCLXI5b1U?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "nomor hp jadi pengganti skor kredit ajukan pinjaman cek syaratnya cnbc indonesia",
      "id": "f58f0e32b106efd9",
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
      "eventId": "auto-3ac96e424385848f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "OJK: 2,7 juta warga Jabar terindikasi main judi online - Elshinta",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOc0M2ZXd2YndvbjJoNkQwRTlvUnJZY1J0WWtJbW5fNEk0V2Z3ZTdUU0RRZEpOaUI3dlZ6WVJ4akdpZnphcHZQRUpURnpfTVRuNjIzMVZia1FTMjdtcWRpZklSVG16M0JrTTVKaGJCOHpfNWV4YURfWjVBRzhRQVRHNko0bVctLWVCWFo3bnh3cWtobDhQMGVQTW82SmNiSkRORnc?oc=5",
      "publisherUrl": "https://elshinta.com",
      "source": "Elshinta",
      "summary": "ojk 2 7 juta warga jabar terindikasi main judi online elshinta",
      "id": "37f4c1540d7cd584",
      "domain": "elshinta.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-506971db1deed4f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "OJK: Pengaduan Pinjol Ilegal di Jawa Barat Tertinggi Nasional, Bogor Terbanyak - BandungOKE",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBSN2FmTzBRZUdqaXl0b0sxN0ktREJZTDJObUpkVUFVTXc3VUdTWl9VVXlWdEpPR01LSklNalpOczdEQ2VFOVdqam00S09CQnAzUWkzdm9Tc29UQldvQUtoTVNSR0pxUE5kS3BKS2NGQjNUUll2TVMyNA?oc=5",
      "publisherUrl": "https://bandungoke.com",
      "source": "BandungOKE",
      "summary": "ojk pengaduan pinjol ilegal di jawa barat tertinggi nasional bogor terbanyak bandungoke",
      "id": "085153de15abf4a6",
      "domain": "bandungoke.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d7b7e8242910a940",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-10-31",
      "title": "Penandatanganan Pakta Integritas TVRI NTB Tegaskan Komitmen Tolak Judol, Pinjol, dan Narkoba - TVRI",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQOTV2LTY2dVFmbmY2QmxoZWhyMW9sOWx1RTFEMC1KdzJXZGZ2OHJjNUh2RWZYZkpKZExEc2JTNDZrUURTdWdxQXFEMG9OQ3BzcDByNDk4dGEzYlNFckdIdmdfWmlGOG81QVhWakFwNlJmckRDYWRMaV93VHo5bVAzclJyWjczUzNqcGQ5Tm53TkppRUxFWGNGZUo3dTRkSkVHTFpXTkpmejNUNUstcWJDMG9SNnMwNFBUQ2s5aEpRMHE?oc=5",
      "publisherUrl": "https://tvri.go.id",
      "source": "TVRI",
      "summary": "penandatanganan pakta integritas tvri ntb tegaskan komitmen tolak judol pinjol dan narkoba tvri",
      "id": "4ea62c0ec60e5abc",
      "domain": "tvri.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6980ea58e06b5a50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Perencana Keuangan Ligwina Hananto Ungkap 2 Tipe Korban Pinjol - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPaGQ2ZjlyUmFyYUhMNlZKS3hBSUlwVElxdExHQWJUOTdzQXZ6dXpHVmNYcFRjQXFrQm1qOHpNdVR4RWpfYkY3dmNHM0FSTnp0Q185WFpjdGtDSHViVl83Uk5iUmR3WElaWDdfOU52ZjZsQ2FqWVFjR1FIQWI3OHlld19WZ0R2Q284MzBtcG80Z09IY3hHUjNaZkRzdU9vMnZka2V6UzFkYU05UUHSAaABQVVfeXFMTjBBblI5UmtIT2tkMFV6cW40REYxS1ZmSWhJcVltM2VVMXg0dGhsckdBU0k4bzRWU1JlNkxWYkFxczMzdFJQa1NiOEU2YnctLUI5UWJPd3ZVSjJhU0xPcl9SZ29CaFZzY1Q0XzZLNXBvV1kxdTVDVll1ZnVjVU1jOEc2QUNvdWdfTTdSSDNUZk5MamM2OGVtZm5Tc1lUa3FzXw?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "perencana keuangan ligwina hananto ungkap 2 tipe korban pinjol liputan6 com",
      "id": "e8fa4eb66ce3274a",
      "domain": "liputan6.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7415061034e9c305",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Perencana Keuangan Ungkap Dua Tipe Korban Pinjol, Paling Bahaya 'Kemakan' Gengsi! - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQSWtDYXhQX2hMUGFseXBndmg3N3l5ZDhLamw4UHFJbUZQZGlESzRTb0VTOEdEakxLckNPR21uZlhkbzFjSy1sbm0xXzNfWjNDNlRTa1FPZ0xLOHpia3J0M21GbF8yVm0zcDhJbWJCcGNJWTBabm5DY05vNTQtSENsam9samV6dktwVjYxTVpLR0ZrdkNhQkJpZUJIQk9NUTZ4d1Z0WXg4ZUM0djJEbmZ4dXpvX3k4TGRTU2g0QW9fVmFvQQ?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "perencana keuangan ungkap dua tipe korban pinjol paling bahaya kemakan gengsi investortrust",
      "id": "edca54159a72c739",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d2b04ccb33d91696",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Segera Cek KTP Anda Dipakai Pinjol atau Tidak, Begini Caranya - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOVUFOWXJQWS1VdFRFTXhwUmpaYTM2ajV6MGFON2RZODJUUnBidzFtWUdCT1VGN3liZ01qQlJMTDBfWEg5UXRzQTllV1l5WUtRV3E5N2ZFNzE0YllqYmpCQ3BtQS1RY2V4ODBhOWQ5NGhhaHlJYjFab0xBajQtVkVzakstemoxeHVqUWprYXhUQl93RGFCX09YdVlza0dQcEplLTlYcGYwamhlLXlsXy1QOWxiYjNQTXhoeFgxLXdLRdIBxAFBVV95cUxOQWpqOFRsbUNJaEswY3VkVWpNYzlGY01IcWVDWm80aWl5a3Z2LW5VOVY0Ym1tRkdFamlzMUh6aUtobF93WkcxUWZHSWlqakl5Y3ROcnVIWEVxeUJnbTAtV3VjbVpDSjZ4QU9yNmF0NTVqbWVNU1Q1SU1xdUM0YXVmenJCaWkxSTNNbkZJQkxaT0poTUZlUXFrZGEtYWNFRmJ0aE9yTGI3TGppd01kSHhXcHl0MFBnWkM0czJ5UktLQnlIS3Ez?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "segera cek ktp anda dipakai pinjol atau tidak begini caranya cnbc indonesia",
      "id": "1b33502ba5349cba",
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
      "eventId": "auto-3a81d2fe949d78bc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-10-31",
      "title": "Tips Cara Membatalkan Pinjaman Kredit Pintar - BPBD NTB",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOOHZsNkZKQ281ak9majlOaGpPcTgyNU4xUXNGTTNpYXIxOWRQbkpUemRmd2JrRzdVS1ZPcWNvTzdHdEFvV0N5RG5lU3h3VFlzNDRidUw5YV9kdV9rZ05yOEZ2XzUtNUxPd0ZibTJPazh2elFYNDJKQ2tNSkVFelM2THZR?oc=5",
      "publisherUrl": "https://bpbd.ntbprov.go.id",
      "source": "BPBD NTB",
      "summary": "tips cara membatalkan pinjaman kredit pintar bpbd ntb",
      "id": "8d326b42dd31ed5f",
      "domain": "bpbd.ntbprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b6812c28d42792eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "5 Fakta Pinjol Ilegal dan Investasi Bodong Ancam Warga RI, 702 Ribu Rekening Sudah Diblokir - PEWARTA",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQQWpfNVNLa0JmeUljV083cUFEcFBtQnZpRGNBMHVNc1lJZDBxNUszZHdkc0VwbjAxR2ZRTHNScENiUlZLWXZQT3VjTFREVmFSdDdKN2E4ZWVCQXZSWG5YUkdRSkZ1V3RtaEVseUZEQjdYZWNCRmV5OWlQY1hWaGdlYnFnVnZhMm0xOE0yaHVqR0E2bTFBSy1xWURrc1hNWG4ya3VQc1NIX2JaY1Y1RERjcm5vdTA4bmliQ1pZbFhwdnNJdjVWODlTLQ?oc=5",
      "publisherUrl": "https://www.pewarta.co.id",
      "source": "PEWARTA",
      "summary": "5 fakta pinjol ilegal dan investasi bodong ancam warga ri 702 ribu rekening sudah diblokir pewarta",
      "id": "b797dc94df8ad5a7",
      "domain": "pewarta.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 76.6,
        "label": "negative",
        "negativeWeight": 4.3,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9617f3863a5912f6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-11-01",
      "title": "Cara Aman Menghapus Data KTP dari Aplikasi Pinjol - economy.okezone.com",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOWGpxYjhmdnA2REVDNUxXNWUzTVpWVktxMmNaM0dpNWtOdmszSlJNNTJJbUJNeWFFZllRRC0yNUtDYmRsb3V2MWZibF9kQnpWc05NNWtJeUxQT200N2FCdjRoUjh6OUdJNjNfSFpxSEMydjVuZnFoNFRzRERsYWxvX0cxZXdISmV3TmFqeHBPamVKTW9RaFFzVWNXZThFbTljTHdXbm8xWEPSAacBQVVfeXFMTllPYkVZdEEyQkFJeG9XNllJSFBVczRWS3JCa0NCYlZaSThpQURnVDdJTE54N3BPS1NpVGVGX3BYQ3ZVSXZrRFFUNkJJMzBXX1Q5SmJ6Ym5YblR1enhLTDh5eUpQdDY0bXlpWnJjRXF2RWUwLWYzOUdHam1nT2tfTEpucmJIaWIydXhRdzBzb2JOYjVydnN3MWRWQmpjZC1tMGxEWEo5OTQ?oc=5",
      "publisherUrl": "https://economy.okezone.com",
      "source": "economy.okezone.com",
      "summary": "cara aman menghapus data ktp dari aplikasi pinjol economy okezone com",
      "id": "351f5e04a0c3a05c",
      "domain": "economy.okezone.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3a0d690dae7ed387",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Daftar 94 Pinjol Legal OJK Terbaru 2026: Cek Syarat Pengajuan, Cepat Cair! - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOd3FHdjUtc1Nrai1sYm12NnB0RWExQlVuQklkRWJ5SGpCOXBkRnZ5NWMyNlk3enhrNHJHLWZLenNaWTRYRVZiczlUTnpXU2E1dzhUMzh0TlJKSmJWaXgxcThCQlVNcmFsVjN2a0hsU1dXVFN1R1l2YkoyZGd3VXZWS2p5eUJ6bi1TdWF5UkQ1R2lYWDJwVDJCZDRVeWYtVlVfblpVQll3dzVBR2hENDczV1pHOXVWdW9Ic0tOU0s4WXdfY3BI?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "daftar 94 pinjol legal ojk terbaru 2026 cek syarat pengajuan cepat cair bisnis com",
      "id": "72e0ef9a2f901522",
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
      "eventId": "auto-85269fabeb740d95",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Download Kaspingo Sfile Apk Dana Cair Pinjaman Online, Apakah Kaspin Go Aman? Ini Review Pinjol Kredit Kaya - Berita DIY",
      "url": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxQUEpJX1BTbzRIaGk1UVluU1luVWw0eTlROHk3cUdZbkVwWEZ5dHlCNUdSSGs1S1pzTy14MkpLdEZzTVRDTUpzY3hYNDJ6b2MwX19ZaHN0OEpfZVAwLTJkR3hKMFhZQlZJNmdKSjZTaklNVUJoZjdmdlg0X1p3dnV5NlNFRThUSmhyNjVmaVFsTTNtcXNMTlAwWjRSVWl0WGdNalpjOVB5RzB2VTc3dXh1aDBCeUZvZ211S3J5Zms3RUJLMWVuTTd5bXdNemZrTTh0eHB3VmhaclEwU2gyS09tSVZBUmtGTTA0THA4OGtNVl9XR2x4aGtj0gH8AUFVX3lxTE41dTM3R2NDTlR6dWpySFp6bE1USkludURBdnlXVWl5Tkp3dUNfd0RabkpiSWZ0cFd4OGFGbVdDb2hhZ1Q3NnhCc1U5WENxMUdkN2wxT21PZ0ZPdGFxSjA3QXMxT3R4RkpKZW8tUkpiTmxjNzRYSzM2a2N3endEQ0dCci1Yb3pKRWdjMXdpQVc1aG4tTFRQb2U5TVQydDFScXNGSzhoempkUUZJMFNPV293V3dOM2JKNHA0U1FqY0VhejNTcGZmOFZUTk9kX0pEbDFUcy1wbXQ5LV9DVXdnc0tYNHFOUm44Ym5VenpLR2JyekR1X044QXBJLVludQ?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "Berita DIY",
      "summary": "download kaspingo sfile apk dana cair pinjaman online apakah kaspin go aman ini review pinjol kredit kaya berita diy",
      "id": "0b46f764e092a0cc",
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
      "eventId": "auto-7c8e3a31c78dbd79",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Dua Korban Pinjol Tertekan, Diteror Nomor Tak Dikenal, LBH ICMI: Korban Harus Dilindungi - Riau Online",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxNUU9xcDM4Yy1Jclh0TFhkY2xKdWR5eGR4T0xkNkVVS3JkMXdpaUY2bEZHUjA5MUFfMklnN1dtaWhEVkRkSzJ1SU9aSFpkNGJ6UXhUTEJ0TGpZWHJjMGVIMnhSZVVFazlncHVfRjRlcVJpVnRuekNjX2NqVWZqemE0ZGJhZEw3QWFzVnRTc29JYUE5TUdWQmwtQ0hBSGRrMjUtcjVxcTVjRi1VdF9ST3ZFQ25uS1BVQ2RySU5ONmc5eTc4QnB2VGx2M3VtRWpZemZkdkQ4djlxYjBsZ3lsRmc?oc=5",
      "publisherUrl": "https://www.riauonline.co.id",
      "source": "Riau Online",
      "summary": "dua korban pinjol tertekan diteror nomor tak dikenal lbh icmi korban harus dilindungi riau online",
      "id": "7e1fe9136bc5074d",
      "domain": "riauonline.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 7.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1458818011396a4d",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-11-01",
      "title": "Gusnar Dorong Literasi Keuangan, Waspadai Pinjaman Online - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNY0owaWFsTUJvUE9TbU9LMkVvRWFtWExrdzFzQ0RDOFFCSWlmWUFNck5jTDl2c3h2Z2NfSnBQRVYwWnZrZzdqYWx2YzJ5RkFoRklKWVExT01Fc0VnNW9CWG9mNVBBY3ljdkpWS2lkT0ZZcXFJNGU1UExsUUJoZTVHTzA1YTVMLTIzVURiUU1yY0VnV3g0aEd1ek9CRkJlSjhwWE5rdHNR?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "gusnar dorong literasi keuangan waspadai pinjaman online rri co id",
      "id": "8f786c50b91a2e32",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-104d2bd4a7fe481a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Ini Perbedaan Paylater dan Pinjol, dari Cara Kerja dan Dampaknya - Okezone.com",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNUktyNFBSLW84eWVGUDl6Wk1sdlNwVjNubk9fSklrYVBGYzdLcFVENndudjZXWmdwSWxZU0NtSEFZYXZjUkJhY0dHQU5sdW9GdTZPcnZhYnZJV0JKVEx2eWhEX2ZZWDA2bHY2dXIwSlBLdnJZRWR5X1F4R1Z2bE9qdzZRQjdVbXZSdWdFVXR6SGo2cTNSLTRDVkExRUxGejYwNVptQzRpU0VhczJEY0NzQ016MDNuTEIxQTFJ0gG6AUFVX3lxTFBQVllJMGxISldkNHdKSHlWWUVaRE5FT2l3VlVwR3dXZFZKanBMcnNLWlN6MHhOc0VNR1M2TFJrUnNWaVVaeUdIQ3JWdjNSSUM4Y3lOM1A2UWhyT2lkWHRhLTMzOXZPNTJNOGFESEMzUnhISEpaVVlwMjVhaUxJZUxONGNoNEtaUXZ5cFpVMmxJRE1fVE9WZ2xIbWw1TnY5SHZIYmtyWkpWVVJkMzl6UEppTzl6OTcwSGxMUQ?oc=5",
      "publisherUrl": "https://economy.okezone.com",
      "source": "Okezone.com",
      "summary": "ini perbedaan paylater dan pinjol dari cara kerja dan dampaknya okezone com",
      "id": "f0f50f12f8c7744a",
      "domain": "economy.okezone.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e3ed9389de9028a0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Inklusi Keuangan Gorontalo Tembus 95 Persen, Gusnar Ingatkan Risiko Pinjaman Online - the OPINI",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOLXNkakYyTVRvUjJ1dVFLeFhuR1JfRnY1ZDRMOUNIN295OFVkTzM3am9PVFVrdG5ieGF6ZVVyX3FXTXhpZnlrc1dfa09FSnAyanoySXVvdUhQV2FDc1JSU0VEcjU1UEYyNVNnNUZsWlFJNTNJdExBSldYekhqY0Fsc3RNSHRYS09fUEdzN1p3Q0JLQnJHOHRUdmpHeDIzeDlBVTd2TjZyLVFPTllFLU1sT1FYOUY?oc=5",
      "publisherUrl": "https://theopini.id",
      "source": "the OPINI",
      "summary": "inklusi keuangan gorontalo tembus 95 persen gusnar ingatkan risiko pinjaman online the opini",
      "id": "7c88cf42c75d89fb",
      "domain": "theopini.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-915783141cc0a6e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Meski Sudah Sering Diblokir, Mengapa Judol dan Pinjol Tak Kunjung Tuntas? Ini Solusinya - Majalah ICT",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNWVVReF9WZ3ZaSi1aRGF3UXBzVV9jSEVLM3prTWZ6djBiR01HYllISkVFYkpfM3ZQZmtaZ256ajhxTVVVbWVWYm9PS091ZTlZQzhpLU40V2dsZm1wT2h4OHp1aVRiTFc5VlJhLU9zQjZPNW1EcUdVSHBHR3JiZkdreGNmblFzVHUweGg1Wm1aSG1wT21DWk1kYkpoSTUzcmtwUnBZeDRXSVdOdFlIR3pnQnFJMA?oc=5",
      "publisherUrl": "https://www.majalahict.com",
      "source": "Majalah ICT",
      "summary": "meski sudah sering diblokir mengapa judol dan pinjol tak kunjung tuntas ini solusinya majalah ict",
      "id": "6e911f07e8093407",
      "domain": "majalahict.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6bc20c8715decec5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "OJK Terapkan Asas Una Via dalam Penegakan Hukum Pasar Modal, Apa Itu? - BertuahPos",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNNmNSLUMtaXJnSGVnU2pnVkx3a2RQNVpHSUFpU3E5NHpCZzlvRTB4eUhGanZpZFR2NzEzNlQ1dlVIV256NWN5c3ZNUmlSY2pTd1BPRmNJQjYxT1Axc0ZYZzMwdFVzMXRBVjR3M1h0aV8yd1UxNlF4dkxUeDRzWVhGOHdhVDJJSmItOUJMZG9Tc2poVHM?oc=5",
      "publisherUrl": "https://bertuahpos.com",
      "source": "BertuahPos",
      "summary": "ojk terapkan asas una via dalam penegakan hukum pasar modal apa itu bertuahpos",
      "id": "66532421a7d28d5e",
      "domain": "bertuahpos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-26657fd21deec5eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Pinjol Legal vs Ilegal: Ini Perbedaannya Menurut OJK dan Cara Mengecek Izinnya - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPV0xyclQzOEJPZzFvZnJMUHJsRzN6U19wbUtUalNVdzFtdV84bXdydDhKTjM5TmJ6dC1aUTF4N0lSMWxPaFl3cGd2QVBwTGItYVdRQ3BfN2lRdWFnRmdvemItZnpiRHRNbVJNYktpbHdYUUc5UGZkSmx5NjRMN3hYSkk3LUZmeG8zT3hJTjdPTlE4ZzRRVjBVVmpnRzF4TTU2YldTdF9uZC1fc0hTVmowUE01NFkwQmRvUE1FY2FvSDhFU2NFVTVHWE91V0Q?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "pinjol legal vs ilegal ini perbedaannya menurut ojk dan cara mengecek izinnya bisnis com",
      "id": "1ac309ac3d42b5da",
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
      "eventId": "auto-507ee4de4b0075d2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Tips Cara Membatalkan Pinjaman Kredivo - BPBD NTB",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE9vWFpPYTVkb3o1OWxKeTVsWG9EU2E4bXJ6N2ozSloxOXdMTW5FNmxaQVo4SlpIaU5iZmFhZlUyWGZ5b251aGwtSWlFdUJESUVkZ090VGtITllJNmM5dGZqM2NLNjlaZFVRaVdQUnYtVnQ1WURTOVl2ajVB?oc=5",
      "publisherUrl": "https://bpbd.ntbprov.go.id",
      "source": "BPBD NTB",
      "summary": "tips cara membatalkan pinjaman kredivo bpbd ntb",
      "id": "15dbf0ec87f6eb9b",
      "domain": "bpbd.ntbprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8ab6ecf3fa5630f3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-01",
      "title": "Tutup Puncak Bulan Inklusi Keuangan 2026, Asisten I: 4.000 Mengantre KUR, Banyak Tak Lolos Karena Terjerat Pinjol - Pemprov Maluku Utara",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNOGJ3aGlweHQwUXlfdXVwRU9vcUpRR196dm1PZzl0NEdadndObEN2MUFvNEx1eWhjVWZHSEN0UDBNWnZhLVZoS0VrZnp3UmJlbWpHTng0aVQwZHowb3VxNENJTlZWd1hDVVE1TnJldmtxQW4wdHh0N3Y5TUdzQ2ZIZlMtamgzVEFMT19qb1ItRXVzekJKTlBHTi1fanJVV08xNTlSanVXalJyMGg5Ynd0WVN1N0xCQ04zUzVGa2tjVFNiWTF2N0dERU43eGJKZw?oc=5",
      "publisherUrl": "https://malutprov.go.id",
      "source": "Pemprov Maluku Utara",
      "summary": "tutup puncak bulan inklusi keuangan 2026 asisten i 4 000 mengantre kur banyak tak lolos karena terjerat pinjol pemprov maluku utara",
      "id": "0af1774a25b6090f",
      "domain": "malutprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7a1be764066b6c51",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "61% Anak Muda Gunakan Pinjol atau Paylater, Ini Alasannya - GoodStats",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQNEhTVC1McEg3RjBFNnh2LWJBc2wzcVNzMmNKSXJtd3NDUnFrb3BrLTctanpoVGxVdVZHZGloN1NZMDBfMnNpQmF1eHI4OUhOS3VkeTd3c1BqU1NIMG4xWG5tZ21TemloN3hzY2Nycl9ndFNxMW03NkF5ZW1UQ0QwbmVwQkl3RUxISXo4WE9jSTY0RVd5NWJ1SXYtS2o5UQ?oc=5",
      "publisherUrl": "https://data.goodstats.id",
      "source": "GoodStats",
      "summary": "61 anak muda gunakan pinjol atau paylater ini alasannya goodstats",
      "id": "cb715c6342b159ff",
      "domain": "data.goodstats.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e2f8356190d296d6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Apa yang Harus Dilakukan Jika Tidak Sanggup Membayar Pinjol? - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPLVI1SnEwUUZFOXM4RVB1VlFEd1BuUzgyV1MxUlQwcUJoS3E2c09PQXlXbkhxcmRMcEpsLTRFLVJRWklIQW5qRXRWQTllQ1lNLWJnS0JpdHhJZE9qOTU4blRMOVRBeDBFWjJIS3NpLVRpdUJsQi1KWTBtTjBXN0lFMmtEdE9MY2tjNnNKUnQ0aXUyZElHcXdvMzRkQm5SVzdmb2V3Q25NVmotNG1RenfSAa4BQVVfeXFMT25NUW5hWnV5aXZPVTNmcXZqRHFKc0prTm1kbjk0RW1FckJsd2c2TDZnMy1HTEd5MW80ejdDaHNRRkV4RVcwMFZ6OVhwZGZqeVZSOEQxbkpPUFVPbThYWjVrVkFRLVBDbm9IUmFURy1VZnRwWlJTaDVFVXRQTnhpcllEdjFteEc3RW9wU1RKZWhoQVRpTm9uVXB4VEctWUtWRWs4RXk5TFI5QWVhZzNB?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "apa yang harus dilakukan jika tidak sanggup membayar pinjol suara com",
      "id": "9abfadf1fd4feffc",
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
      "eventId": "auto-68fd8247ac5b48f0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Dandim 0315/Tanjungpinang Larang Keras Prajurit Terlibat Narkoba, Judol dan Pinjol - Batamtoday.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPV3Jzbm1uSFNrckN4MGlzRmZJckRqSTdvUlJuZVNDRXBka1ZMQ0JnYlZndThEYno1QVlSbEtkQm9ndGlrMWtBS3FMcWtiV2NpdVVhNzNwbWR5NEpRbGNsMk1CTElXRXd3YVRWM2ZyQ2hEenViZVdNRDV2T20yMnFCclRFd2NqSEVHakNZekJOb2RpRk5jUlJYRzFnaFgxazNKYVJhd2JlTVdVQXpf?oc=5",
      "publisherUrl": "https://batamtoday.com",
      "source": "Batamtoday.com",
      "summary": "dandim 0315 tanjungpinang larang keras prajurit terlibat narkoba judol dan pinjol batamtoday com",
      "id": "1edbb966e6749d94",
      "domain": "batamtoday.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1b7534a84a1301c9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Easycash Genjot Literasi Keuangan Gen Z, MOJANG Masuk 5 Besar Nominasi Penghargaan OJK - Pasardana",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNSjBtVFBEbFZ0QTJjcS1uOXlaa3ZDQ2NrWWM2emREUVlGYmhWVGdKbXlTRV9VdU1wVkhfUnEycGNVU1ZSRjlXbm9oOE5BTjVwME1UbnEtYk4zckdnTnN1MTZ1MGs0OVViN29vMGZwNHRobGZIN1BBcUlMdlJudHdYVjdiTEhEcmcycldLWEQ2OUhfY29qY3dpNTUzLVRZQ1pPYU5TSHFqM29NVFpyX2JVZF9mQ1pRTGRZMTFqaHNB?oc=5",
      "publisherUrl": "https://pasardana.id",
      "source": "Pasardana",
      "summary": "easycash genjot literasi keuangan gen z mojang masuk 5 besar nominasi penghargaan ojk pasardana",
      "id": "b851778e4a24384c",
      "domain": "pasardana.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a5f13c54069fb1b7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Easycash Kenalkan MOJANG di FinExpo 2026, Dorong Anak Muda Lebih Cerdas Kelola Keuangan - infobdg.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOd3J0UC0wQkJ3Z1A1NWJPVHZIZkRLQTZ5bjhYSnNvOVRZT1lrT042SmhiQ19pTnNCbjZyVkN2UVNuWG5tdXptekxWYWl6RUNNV3Y2MHdSbW5OaTRoUUlGOWVLN3ZKRGJrQlFXVGRSR3RTRzlnamZfdFdyTkxmU3I3cUlhWVdQaTJCbVkwUDF0WHhiNi0yZnRobjVhb1BuVEU1cVFWUTdvc0kzVW9SMWNGV0FhNDE?oc=5",
      "publisherUrl": "https://www.infobdg.com",
      "source": "infobdg.com",
      "summary": "easycash kenalkan mojang di finexpo 2026 dorong anak muda lebih cerdas kelola keuangan infobdg com",
      "id": "10f37f7327324f3e",
      "domain": "infobdg.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-065a8433c6508188",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Easycash Perkuat Edukasi Keuangan Generasi Muda Lewat Mojang - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNbWREeW5OZFN2WVJOcDBPTVFuek9sYlVxX2F2RFg2LVVQaXRGTlYyeENERktia214MTIxTk5lVi02am1rYnk2NTJwbHB4Q1NMNWhBX2R6SUc1SjRwOWV0cnFmVDNjdHJYdGNTVUFmZ0F2NzM1TVNQRHBLS1RNZGRmb2FUQXRxQTRvNTk1X0lBUUFudE5FOU8tWUt5bEVJa03SAaQBQVVfeXFMUHJqV1pYUXpKbmFiUjBKMlBxU01ic0JIekhkcjI3UDRmOWN3NEwxaE9GeGhpWVlneTRLTlRvWFRZTVV6S2ZjZTA1MTRhbjJWLTFYVDd0dXFwWUFQMGV3TFQ5cjhubTVsQ0hKYzBjNUNhTWEzcDloM2FadFJ4TFhmcGZRdWNTTmtmdW9pWHFSUE92ODh0RjRUVFhFQUp4ZG13YWpHZDY?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "easycash perkuat edukasi keuangan generasi muda lewat mojang warta ekonomi",
      "id": "acf63ce05174267b",
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
      "eventId": "auto-6ec9003f691781f8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Inklusi Keuangan Tinggi, Literasi Masyarakat Masih Perlu Diperkuat - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPa2k4UWNTNTlqQ1BnU2tZU0p1RFRxMi05SEZUVzBnNjE1SGZFSENuTGF1WVZheWxpQjdzRks1dFgyZlBvMDE1eVl4SkJ1SXZXVTF5dzk1Wk45WnRsRlN2RzNobVZ0U2ZGN0ZnS3JJSktuVVZYU19rSEVQQ0c5akxjS2RTVU5JbVhkMlJuMkozaEMwbVh2Q25NYVRVd2FQQnNNbjN0dnV3RjBFeVk?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "inklusi keuangan tinggi literasi masyarakat masih perlu diperkuat metrotvnews com",
      "id": "ca7a039d678c590a",
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
      "eventId": "auto-c3bab2be569751d2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Khatib Jumat Diminta Edukasi Masyarakat Bahaya Judol dan Pinjol-Literasi Keuangan Syariah - Journalist Independent",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQdjBaajVQcUtYT09rMGRPSFNjcGRVSk8zMlVidS1QNVowQmNBd05GWEpQOE81ZEhXRFNjWng2czUybTVyVVlpcHFTQVl4MklHMHlLNVpieXljS1YyV25FTlZQckJLU2hGbGJIdXB5QjRIM2J2eDVQVFF6UEdQcHdrRHRDRE9iTFQwOTFES09XaG9BTG9Id3dmOEFwLWV5NUJjYWsxWlFrNTAzWFN1UlJVLXh4TnZleFdsY0NjRjdFbW1LNjFhZUpncEJaM1JCRlNx?oc=5",
      "publisherUrl": "https://journalistindependent.com",
      "source": "Journalist Independent",
      "summary": "khatib jumat diminta edukasi masyarakat bahaya judol dan pinjol literasi keuangan syariah journalist independent",
      "id": "95773d6d14a8fc62",
      "domain": "journalistindependent.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c492977b7af5bb64",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Penyaluran Pinjol Jabar Capai Rp30 Triliun, Gen Z Kini Jadi Sasaran Edukasi - Merdeka",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQNFdQOUkwVk1QZWJZc2tWWGoyY2xIeEpFanF0Y0xpMnR4ckdlZlhSdTZDUnRYYlJpUFBuVVp5bDQ5M1I3R2ZvNVdMVjVGWFdhUmV0bVdBT1FydDVUXzBCTmpReWtSOGl5QlZpR3JxaEk4S3k2MFAtQU5HRU5oQU9namtnMnk5eXZIYUFMUnZYZGc0NHRLcWFnb3ZJWEZEQVZQQ3AybElQRmNyTVlmSXRGcEVOMDl3VUU?oc=5",
      "publisherUrl": "https://www.merdeka.com",
      "source": "Merdeka",
      "summary": "penyaluran pinjol jabar capai rp30 triliun gen z kini jadi sasaran edukasi merdeka",
      "id": "0182a03b77c395e3",
      "domain": "merdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-160857741c930715",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Pinjaman Online di Jabar Tembus Rp30,93 Triliun, Literasi Jadi PR - IDN Times Jabar",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPcWlrTDhuRFdJNUVYRFp5X1JKS2tlYl9WdWRKYXhvOE9UV2pLUkRtVnAtUmd5dmcwVFBiN1ZzU05WdEtaRHJ5blFkV1ZHQUhHWl9MczRxWWRFQTUtOXN3blZwQlFEaTIwc1dXSXRoSHdvR3JROWFLem9Qc3lpMWdSZFYybDMzVEdxUUVQcVF0eUk3YXBUc3lGczNNODZ6ZDk0ZnVBQTJGd2ZJX3hNcEVZME1EVFpfWGt6M28zRTZnRGTSAcYBQVVfeXFMTkloc3YxZ3p2U0Y4RWZ2bVN5SlBQYkt2Vl84cVA4TVZOLWhRRDhld2o4VG8tVW5TZ2hzUWRWMlBPM0d6dHpjNkRXNUdGbVV2eURUS3pTUjl4VzlUTlJVUGNRQUZENjQzeHRJQlpQaUhMeWZUc0pHZnlnUmh1LUd2TGRkNUtodU1IRXdQeHBTUVl0S0VfSU9GOVNKZkR6Z3dpYnhqRF9yZWJqcDYtbGdkNTE2VDlrRkc2WFFnQk05RUtmU1EtZWRB?oc=5",
      "publisherUrl": "https://jabar.idntimes.com",
      "source": "IDN Times Jabar",
      "summary": "pinjaman online di jabar tembus rp30 93 triliun literasi jadi pr idn times jabar",
      "id": "76caf10247ec062a",
      "domain": "jabar.idntimes.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4a3831abd7255d98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-11-02",
      "title": "Ratusan Pinjol Ditindak, 702 Ribu Rekening Penipuan Diblokir Satgas PASTI - BITHE.co",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNR3ZQTktFdm8yb182bzd3dmJSdmpjUjVmNnZObzFoUWNCV0REeE4yZDRYWWVlYjVCdU9oR0M0RDdlcC0zVW15eThWNjVrUXpsZHNRSzNjdlEyNlpJTDE1Yl9Tc2o5Q3AzSlpEcUtseDY4WGxDMTZzemxOdXJOSWJQbldRQm5MMXJXTDc0UTNicGplOHhaa3RVcmtsVmVxWElLekNhamxlMnRQUXJMYnfSAasBQVVfeXFMTXpKQWZNLXZuS19CcEtlX0pFNXlOS3hVd0hQQVNwLUJNZzBCcHptV0lOOFlFczZkbkpiYkt3MTRtWE44RGJUcjRBVWQyLUdTcC1xOXYxbjRuUmRwUGV0WDV6Q0lpdGY5ZmgtZ1V3S3l1V3JuWWI4dTF2bkxWNlVYTEdsSl9ncEpFajJybWFZLV91WDB0SE9qV1ZRcGloczJjYzB3di15RnQyY1g0?oc=5",
      "publisherUrl": "https://www.bithe.co",
      "source": "BITHE.co",
      "summary": "ratusan pinjol ditindak 702 ribu rekening penipuan diblokir satgas pasti bithe co",
      "id": "d858551d78dca270",
      "domain": "bithe.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b79e8e4250683523",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    }
  ],
  "socialItems": [
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "lxcOQvrvJcI",
      "date": "2026-10-19",
      "text": "Pinjaman Sehat, Cara Para Ibu Lepas dari Kesulitan Ekonomi | Gaspol Ft PNM",
      "url": "https://www.youtube.com/watch?v=lxcOQvrvJcI",
      "engagement": 112229,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 44.4
      },
      "id": "3c4d3dcf9bc0c31e",
      "eventId": "auto-f8badf1acfa77ba4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzq3JAIn4P_ficW4pZ4AaABAg",
      "date": "2026-10-20",
      "text": "CARA CAIRKAN SPAYLATER METODE TERBARU 2026 ANTI GAGAL :\r\n👇👇👇\r\nhttps://youtu.be/gJ26jQDi_nQ\r\n\r\nLink Daget ada di dalam video muncul di menit menit tertentu, pastikan tonton video nya sampai selesai.\r\n\r\n🟢SILAHKAN KOMENTAR SESUAI ISI VIDEO NANTI ADMIN CIDUK DAN KASIH SALDO DANA 1JUTA\r\n✅GABUNG GRUP TELEGRAM DANA KAGET & THR RAMADHAN : https://t.me/+hzfb8ouS3k4yMzFl\r\n\r\n✅SYARAT IKUTANYA GAMPANG BANGET\r\n1. WAJIB SUBSCRIBE CHANNEL INI\r\n2. WAJIB BERKOMENTAR SESUAI ISI VIDEO DI VIDEO KALI INI SESUAI ISI VIDEO NYA\r\n3. WAJIB LIKE & SHARE VIDEO INI\r\n4. WAJIB TONTON VIDEO INI MINIMAL 3 MENIT AGAR KOMENTAR TIDAK HILANG ATAU SPAM\r\n5. PASTIKAN BERKOMENTAR DENGAN 1 AKUN YOUTUBE DAN NAMA AKUN YOUTUBE HARUS DI UBAH DENGAN NAMA INSTAGRAM AGAR MUDAH DI HUBUNGI\r\nYANG MENANG ADALAH YANG MENGIKUTI SYARAT & KETENTUAN JIKA KETAHUAN CURANG AKAN KAMI DISKUALIFIKASI SELAMANYA.",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "c390d1820ceb8bbc",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e3bd441d694ba176",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "tAyQz3wpndc",
      "date": "2026-10-20",
      "text": "Rela Utang Sana-Sini Demi Terlihat &quot;Punya&quot; Didepan Teman, Akhirnya Malu Sendiri.",
      "url": "https://www.youtube.com/watch?v=tAyQz3wpndc",
      "engagement": 407015,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 57.0
      },
      "id": "cc6e5b8c3d781351",
      "eventId": "auto-0e1accba75e40fe1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "qBlHmH2I9UA",
      "date": "2026-10-20",
      "text": "TANPA BI CHECKING❗ PINJOL MUDAH CAIR 2026 KE DANA - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 19691,
      "id": "c24aa77eb3e04647",
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
      "externalId": "UgwDzds4qK0AUQ_q-414AaABAg",
      "date": "2026-10-20",
      "text": "siapa tau dapet",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 1,
      "id": "5a417590a70d12a5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2b13610d8d907627",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgygMGvPh-ZFak1F3Tt4AaABAg",
      "date": "2026-10-21",
      "text": "Bismillah buat makan",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "fdb9ce5d13a2809b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8cae7c3e216fcc93",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzM3HHlidD3_xrg87V4AaABAg",
      "date": "2026-10-21",
      "text": "Bismillah cairr",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "99d3122a4196502b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c7ce4ef5d8b8c4a4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzUmHLzEdAhgcwv5lR4AaABAg",
      "date": "2026-10-21",
      "text": "Bismillah yaallah semoga dapet rejeki nomplok",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 5,
      "id": "34451707ccab6cab",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2810527750a0dd1e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyvxRqVkpjwy-KyWyN4AaABAg",
      "date": "2026-10-21",
      "text": "Bismillah, semoga dapet buat bayar cicilan",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 1,
      "id": "54c81b8786abd489",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f99ececce67269e1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzM1i3LS0l1laXOKNd4AaABAg",
      "date": "2026-10-21",
      "text": "Bismillahhhhh 🤲🏻",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "47161629aa3ace5c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-764c741dbadc8ae7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz1gp_qNO6VRsCbZ_14AaABAg",
      "date": "2026-10-21",
      "text": "Bismillahirrahmanirrahim",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 2,
      "id": "f4dc468043c7abd6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-69695cc05268a62e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw8UHJCqIbi8mtbyhd4AaABAg",
      "date": "2026-10-21",
      "text": "Bismillahirrahmanirrahim semoga rezeki buatt biaya berobat nenek😊",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 4,
      "id": "c027f9b4fa5493c0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cf9cf2dd87dea756",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "ZJgBI5T7mE0",
      "date": "2026-10-21",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 35553,
      "id": "d2ea280ece620bed",
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
      "contentType": "video",
      "externalId": "5NmUHgyHPQM",
      "date": "2026-10-21",
      "text": "Cek Sebelum Terlambat, Begini Cara Tahu NIK KTP Dipakai Pinjol atau Tidak",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 82406,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "00a18b99388ca930",
      "eventId": "auto-207f2470a8aceffc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwV5paTWNjULzCH84p4AaABAg",
      "date": "2026-10-21",
      "text": "Dapatnya 800rb bayar 1,3jt walopun butuh dana saya jadi pikir\"",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 4,
      "id": "39e051edb1d66292",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ea29c30ef7335680",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwygniiMXuY0nwUdPN4AaABAg",
      "date": "2026-10-21",
      "text": "Hadir bang",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 2,
      "id": "22c6af19d467b5d6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3746e56a5d773e13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwctcgcMWQ_r-Oxrp14AaABAg",
      "date": "2026-10-21",
      "text": "Kok tidak ada info andai ternyata disalah gunakan bisa tdk dilacak itu yg pakai secara ilegal?. \nPercuma jg bl tdk bisa",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 60.5
      },
      "id": "cbe17b1208960916",
      "eventId": "auto-d94feff033f6e77e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwG_h3xd_ohvZypdk54AaABAg",
      "date": "2026-10-21",
      "text": "Masalahnya.. sekarang ada AI. Wajah bisa diubah pakai AI, pegang KTP juga editan AI.",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 28,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "7b3b84f6a2b12922",
      "eventId": "auto-bc8eb0fcc092fb31",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy0zHJK_otnrapUEdF4AaABAg",
      "date": "2026-10-21",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, mau daget hari ini untuk kebutuhan darurat apa nih komen 👇 https://link.dana.id/danakaget?c=s8z5lk3g8&r=c7Q38x&orderId=20261024101214450115010300166276204748396",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 61,
      "id": "86a519495ca0590f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e3a999fa88cf877a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwyHAMK4aF-UGm91fF4AaABAg",
      "date": "2026-10-21",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp610.000 :\r\nhttps://s.id/DanaGratis9\r\n- Daftar doang, Dapat Rp580.000 :\r\nhttps://s.id/DanaGratis8\r\n- Daftar doang, Dapat Rp340.000 :\r\n https://s.id/DanaGratis3\r\n- Daftar doang, dapat Rp160.000 :\r\nhttps://s.id/DanaGratis4\r\n- Daftar doang, dapat Rp530.000 :\r\nhttps://s.id/DanaGratis5",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 54,
      "id": "2a2f99e8e7938a79",
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
      "contentType": "video",
      "externalId": "7Z4uJiJ6a9Q",
      "date": "2026-10-21",
      "text": "Mulai besok 22 Oktober 2026! Semua Yang Galbay TUNBAY Pinjol BERHENTI BAYAR,Dengan Cara Ini...",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 42249,
      "id": "14d1d27b1bb7de35",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8d4999f653d7769f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwx2mjOTuA2k0_8Met4AaABAg",
      "date": "2026-10-21",
      "text": "Oeee aa",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 2,
      "id": "eff28ecc45bc45a5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c3fb29ce0f6fbfca",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxwDXLcwsSivH5duIR4AaABAg",
      "date": "2026-10-21",
      "text": "Persyaratan kentuuuttt..... Ribettt 😂 negeri dagelan",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 5,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "6cbb4d420099c259",
      "eventId": "auto-b63ce542cd8150ed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwuf0NYUBsdEA0uHSN4AaABAg",
      "date": "2026-10-21",
      "text": "Ribettt",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "7760eafe02936860",
      "eventId": "auto-56796cc27c3bf9aa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzIGhtSArglWw_nWHB4AaABAg",
      "date": "2026-10-21",
      "text": "Saya Stop Di 5 Apk..dan saya putuskan Berhenti bayar dulu /Galob. .di terrror terus saya ganti nomer..untuk bisa lebih fokus bekerja syukur\" bisa selesai di kemudian hari...",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 22,
      "id": "3fc71987a395a7fb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ed0040fde112f753",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyInOWu7XIIlN4N3Qt4AaABAg",
      "date": "2026-10-21",
      "text": "Semoga aku dapat ya dananya",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "1056e4eff4008823",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ef82567d10514e26",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyAZsl3-24X4oXiWWl4AaABAg",
      "date": "2026-10-21",
      "text": "Semoga dapat untuk pake berobat🙏🏻",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "ca1bb73d3bfe2d23",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-73fcec162b1c6ebc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw7VMxkDKewPWjJU0R4AaABAg",
      "date": "2026-10-21",
      "text": "Semoga dapat untuk upgrade hp biar bisa belajar tanpa lag",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "52ec054b87181381",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8b1e9a6468d395a0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwdOMfiLM_kbfhwxwF4AaABAg",
      "date": "2026-10-21",
      "text": "Semoga dapet",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "6084c7e56b4c3f87",
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
      "contentType": "video",
      "externalId": "7SSpPDNVJ-8",
      "date": "2026-10-21",
      "text": "TANPA BI CHECKING?! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA BUSUK LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 23255,
      "id": "0798b4277da446f3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-76c3e3ff20ee5077",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz3EDdGQzharNIcHSp4AaABAg",
      "date": "2026-10-21",
      "text": "Terimakasih Bang Med atas edukasinya selama ini.. Sehingga sdh bisa berpikir positif dan semangat menjalani hidup.  Harta sudah habis, caci maki, teror, dan ancaman DC sudah diterima, orderan fiktif sudah kerumah, dipermalukan jg sudah...tp hutang pinjol belum juga lunas.  \nSemangat galbay teman2..semoga Allah swt  mengampuni kesalahan kita, dan selalu memberi kemudahan serta  jalan keluar",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 19,
      "id": "b5ffc4706589b7fb",
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 8.9,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-afff50c921cfeab8",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwds9EvuW0k84mzq494AaABAg",
      "date": "2026-10-21",
      "text": "bismilahh dapet giveway nya udah paket lengkap,lagi gaadaa pegangan uang🙏🏻",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "9a60db9dec817ca4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3231c7456e5f7f5b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzr8h8IdiZSoKOWQVh4AaABAg",
      "date": "2026-10-21",
      "text": "bissmillah",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "8183e18cd56ba2fb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eb9b8c0b51bb97dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxrSKoFJ8b53XhemA14AaABAg",
      "date": "2026-10-21",
      "text": "mantap bang🎉",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "cf3449a7d7be0603",
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
      "externalId": "UgxV48GqOe-c0U5f2b54AaABAg",
      "date": "2026-10-21",
      "text": "semoga dapet buat jajan sekolah",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "56cae4dc4aadefcd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f010d33571183211",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCp-Wu1NEM_R5PsX54AaABAg",
      "date": "2026-10-22",
      "text": "Akuu mau kak, lagi butuh banget buat ongkos sekolah adekku 😢",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "eb04e798cc69004e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c049434aba6a0692",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyfmnt4lyXBdWAmXBh4AaABAg",
      "date": "2026-10-22",
      "text": "Aplikasi sebutin dong bro jgn maksa orang buat lihat chanel lo sampai akhir tapi apk ga lo sebutin",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 16,
      "id": "083189281f7c7677",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5432f2e595cee126",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxq8fWkpcSoII9zvRB4AaABAg",
      "date": "2026-10-22",
      "text": "Asiap",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "3ff4017c4f5d738c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c16d765dfc87ce7f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDCT7K_rUUyBq90_14AaABAg",
      "date": "2026-10-22",
      "text": "Awalnya  pinjol satu dua lama lama gali lobang tutup lobang......hp di jual pinjem Sono sini.....kapok mau pinjol lagi....ganti kartu hp adem",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 3,
      "id": "a8b46a582e0d5fab",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-90625539cd53744d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyliqKtV9XCZPrFnaF4AaABAg",
      "date": "2026-10-22",
      "text": "Bermanfa,ad sekali infonya bang,akirnya aku bisa pinjam saldo dana",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "aaaf0c30d1d941d4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2958138a6e2cec77",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGg-9TOxJVLuS6Z154AaABAg",
      "date": "2026-10-22",
      "text": "Bismila semoga dapat",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "e2ceb9abd3ca3d97",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-979879ab6891963d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyFOyLRaWNzzFqS4Zl4AaABAg",
      "date": "2026-10-22",
      "text": "Bismilah dapet",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "9f59449d56d4acc3",
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
      "externalId": "Ugyg6XNJi4K-yCaIppR4AaABAg",
      "date": "2026-10-22",
      "text": "Bismilah semoga dapet buat makan lagi di perantauan",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "7fc253cbe6da2e4b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-541a3ddfa4021a39",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwevxCm6R7pMYqTxYF4AaABAg",
      "date": "2026-10-22",
      "text": "Bismilah semoga dapettt... Aminnnnn",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "8f1cbacbea7d01ea",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-300ccb41a7e5002d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyEvGK0cXEn8M2N3wl4AaABAg",
      "date": "2026-10-22",
      "text": "Bismilah semoga sukses bang",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "2d1b8eddf586a28a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-28fd57861f1205f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjHvRRT5VY-tLZcG54AaABAg",
      "date": "2026-10-22",
      "text": "Bismillah cair KA ...LG butuh bngt",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "e10bc8e7d8b7f5dd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-809d25331ee28646",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyalZAAODVDIO6yNm94AaABAg",
      "date": "2026-10-22",
      "text": "Bismillah semoga dapat",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "4619df13918c0eb4",
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
      "externalId": "Ugz8Sf-bgbOPOQsZxqh4AaABAg",
      "date": "2026-10-22",
      "text": "Bismillah semoga dapat aaminnn",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "b132bf390efa3365",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1f41cdf7a56d38d3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgynvqBu-P9Gp6TBO1F4AaABAg",
      "date": "2026-10-22",
      "text": "Bismillah semoga dapat buat beli bensin kerja🙏🤲🏻 (Reza Sentanu) semoga sehat selalu ya bang",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "1fdda7d47aa54942",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b8c3c3f20a3c361",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz5D_cDPku4Bzz7jjd4AaABAg",
      "date": "2026-10-22",
      "text": "Bismillah semoga dapet buat biaya berobat",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "64b02c07672d0d35",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-23b7e61522634861",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwMHvrFlkh_9lMh8MR4AaABAg",
      "date": "2026-10-22",
      "text": "Bismillah semoga dapet buat modal jualan nasi uduk🤲",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "ae97832456bca104",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ed0f4dd8b3022e49",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwx8gARl-yGcmGv0H94AaABAg",
      "date": "2026-10-22",
      "text": "Bismillahi Allahuakbar \nDana kaget Cair cair Cair",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "d1cf29404932a9a8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9f043382a435131a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwiW7oPSren6oKN7O54AaABAg",
      "date": "2026-10-22",
      "text": "Bissmillah smoga dapet",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "9580c647a29a7a56",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d12b8283abcebc53",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxPFCGOQ7Xu-a2Sq794AaABAg",
      "date": "2026-10-22",
      "text": "Hadir bang semoga dapet give away buat kebutuhan mendesak,kerja nguli 2 bulan GK kebayar pusing buat saku jajan anak tiap hari 😣",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "582ee48ef591d363",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6276812f5fac96d8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1kmpuOOaLsZOHcnZ4AaABAg",
      "date": "2026-10-22",
      "text": "Infinite content glitch ahh 💔🥀",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "14e7443d87b29ac7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6981d57c7a03e531",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwe4sHRjioPOc6lAmd4AaABAg",
      "date": "2026-10-22",
      "text": "Kok GK bisa sy pinjaman dana",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "8a7b446f3097fbeb",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d98b79c98fd209fb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxcxyZ7Y4igqfJgk1p4AaABAg",
      "date": "2026-10-22",
      "text": "Komen bang",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "385bff421befc019",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-027b7149084026f9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwxuW6hkCHlFNhk1Xp4AaABAg",
      "date": "2026-10-22",
      "text": "Lha wong mengajukan Pinjol no KTP, KK & Wajah harus gerak liat depan, kiri, kanan mulut gerak, mata gerak",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "83434bca5dc60ba5",
      "eventId": "auto-5cf9f648fd022853",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwsMO4I-QQLlfV1BGB4AaABAg",
      "date": "2026-10-22",
      "text": "Maksi infonyA BANG akirnya aku bisa pinjam di akun dana",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "03bd633108edee88",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aed5e72f3439e3d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytBRpCbwJfOwUfVt94AaABAg",
      "date": "2026-10-22",
      "text": "Mantap",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "669e6d220b5ccafe",
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
      "externalId": "UgyP-4FmF5wTT-pD6TF4AaABAg",
      "date": "2026-10-22",
      "text": "Mas lagi butuh dana untuk berobat bapak stroke",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "b11fd47b68fa70a1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-790d9eeb8f6fbf05",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwg44OU0tpBYsyO-Tt4AaABAg",
      "date": "2026-10-22",
      "text": "Mau dong",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "5f82cd5d975b44f6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dd6bc4d5bd9bd10c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgygktqPl2vebOVz9Tx4AaABAg",
      "date": "2026-10-22",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp310.000 : https://s.id/CdVZ2\r\n- Daftar doang, Dapat Rp680.000 : https://s.id/pGyBx",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 57,
      "id": "f6dcdcb61f6d8bf4",
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
      "externalId": "Ugw7Y-wV6NB93uqIGDp4AaABAg",
      "date": "2026-10-22",
      "text": "NEROR = LUNAS , STAY GALBAY 15 APLIKASI , TOTAL 250JT , STAY GALBAY SAMPAI BUBAR PINJOL , PINDAR",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 26,
      "id": "54dfdd9d48a24597",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e2589c86e24f82fe",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJ_mI0ThYd0yEbAMN4AaABAg",
      "date": "2026-10-22",
      "text": "Online? Muncul bola muter berjam jam😂",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "05e75bf5e7810fd9",
      "eventId": "auto-2e41dadb3b92d713",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "q0_iHaKEJcI",
      "date": "2026-10-22",
      "text": "Pinjol Mudah Cair 2026 ke DANA - Cara Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 22201,
      "id": "f667c22628e6fde6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-26f4b0680cdcc05d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxSaCioYEomaRE0QAN4AaABAg",
      "date": "2026-10-22",
      "text": "Ribet",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "109c9dc5861960b5",
      "eventId": "auto-6ad3c1eb41ac35cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw2puCmfxSYhyV_1qV4AaABAg",
      "date": "2026-10-22",
      "text": "Saya kalo dapet buat bayar hutang bang tolong ajarin saya cara pakai dana",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 3,
      "id": "59eeb6aef6cba5b0",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bb238f327a104082",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzL8Ep26r3wtATeCIR4AaABAg",
      "date": "2026-10-22",
      "text": "Saya senang sama edukasi bapak ini,..\nBisa membuat hati tenang dan membuat pikiran jauh lebih baik,untuk tidak salah memilih jalan keluar,",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 3,
      "id": "3645b80855b3c994",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0eb16c269263a751",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy5iavKTKSgvZfWiZN4AaABAg",
      "date": "2026-10-22",
      "text": "Saya sudah stop bayar karena memang sudah tidak mampu bayar lagi terserah mau di apain juga sama pinjol pinjol itu tinggal punya darah sama nyawa doang saya!!!!!!",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 24,
      "id": "d2b22f3b5837f6ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3453c51b1436c886",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugznuc5YRHv1PtuGTLF4AaABAg",
      "date": "2026-10-22",
      "text": "Selamat Siang  Terima.kasih Atas pencerahnya dan Masukanya saya jadi faham",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "4301ef68997d0494",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-38b9b292c90f4cdb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzT1tMCU9P0ogO45iR4AaABAg",
      "date": "2026-10-22",
      "text": "Semoga berkah",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "d8111c1164f41dae",
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
      "externalId": "UgwjmCrLU3WhBmbhRZN4AaABAg",
      "date": "2026-10-22",
      "text": "Semoga dapat hp untuk keperluan anak sekolah",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "85918446b81cca79",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0ec0be1d220915c7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy6mM2_YTDD5lFTHvN4AaABAg",
      "date": "2026-10-22",
      "text": "Ternyata pelakuny org dlm OJK sendiri🤣🤣🤣",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 20,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "3ab762a81008db43",
      "eventId": "auto-0ef37b525c66e1be",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzC6kURr0Jtpg5L5wx4AaABAg",
      "date": "2026-10-22",
      "text": "Trima kasih edukasinya bang... pencerahannya membuat lega pemikiran untuk menuju masa depan.",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "a1d4b068520c6fb5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f438ff189965cd7c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzT-sEMY63xuP8YrE54AaABAg",
      "date": "2026-10-22",
      "text": "Tuh banyak di hotel atau mall atau tempat lain yang meminta diserahkan ke security untuk meninggalkan KTP di pos security. Sebenarnya itu dilarang tapi jika tidak diserahkan dilarang masuk. Silahkan cek.",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 23,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "ec1127dfc55f045f",
      "eventId": "auto-24d8dab2beb9177d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgylEDEzcziV_eRABRR4AaABAg",
      "date": "2026-10-22",
      "text": "asalamualaikum...mudah²an dapet buat kebutuhan sehari-hari bg 🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "027bbb02060d9000",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e5501b64d2cc4d4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxz7q4v9OJEZv8cfsF4AaABAg",
      "date": "2026-10-22",
      "text": "bismilah bang buat makan minum",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "f0027511ccfa2071",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2b3043614ab0ce51",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz5x0pEoWyXHzQXG4d4AaABAg",
      "date": "2026-10-22",
      "text": "ok",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "afc73e52b3c5315f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2689367b205c16ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyBq1OHOR6U8tY1P2x4AaABAg",
      "date": "2026-10-22",
      "text": "sy baru telat 2 hr di KP, bertubi2 teror di SMS, wa, email, tlp, tp sy abaikan, setelah ketemu bang Medi, terimakasih edukasinya.\nbetul drpd galon dan tulob, lbh baik galbay utk sementara waktu, insyaallah ada rejeki pasti saya bayar hutang ini.\nterimakasih bang Medi",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 19,
      "id": "d66617522b0c776c",
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 6.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-027fef53af78392e",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwyGn-Fg2AZoP3W-PJ4AaABAg",
      "date": "2026-10-23",
      "text": "2th comment nih\n\nmbak listi mbak listi paksa banget si istri hobi pinjol sana pinjol sini demi gengsi yang gak jelas mana mas beni suaminya kasihan banget banting tulang kerja jadi  tukang bengkel demi cuan yang halal bukan pakai aplikasi pinjol yang gak jelas sampai berujung masuk penjara  akibat kelupaan bayar hutang ke penagihnya akhirnya mas beni sudah bayar hutang juga biar gak datang lagi",
      "url": "https://www.youtube.com/watch?v=se8OQQb_4Q8",
      "engagement": 6,
      "id": "2cfcba5f58667cf5",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2e6a998737e2b4fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzcv-pODDJZm5Q43pd4AaABAg",
      "date": "2026-10-23",
      "text": "Aktifasi Fitur Dana Fast Pinjam  tdk muncul... Gimana tu..",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 2,
      "id": "7473d38280184dd3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-60665d60dca1494f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwB3gu0eTnFBQjBwEt4AaABAg",
      "date": "2026-10-23",
      "text": "BISMILLAHIRRAHMANIRRAHIM buat jajan sekolah ya Allah amin ya robal alamin",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 1,
      "id": "47c1b901b1440da6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c587bb1269d5b77",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwxyWs9EfGICW9RHsV4AaABAg",
      "date": "2026-10-23",
      "text": "Bismillah butuh sapa tau ada rejeki",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "5b777d0387ed44ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e9485b3baeb6b7d2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwB5iijmM_aBEMv6194AaABAg",
      "date": "2026-10-23",
      "text": "Bismillah dapet rezeki",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "e546c97f22e59ec1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c669a2faafc6cd29",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxWpvKx0l-n8XsoOEp4AaABAg",
      "date": "2026-10-23",
      "text": "Bismillah, buat berobat keponak'an ku 😢",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 2,
      "id": "08988c36fa14bbba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0b74a8f33b4ee376",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwv_BT2kNUjsLlKUeZ4AaABAg",
      "date": "2026-10-23",
      "text": "Bismillahirrahmanirrahim semoga  kali ini rejeki yaallah  buat berobat nenek😊",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "2fdb2728ef0a2932",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e7e5b0e85c44d87a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy5txTROs1tNT5jhbN4AaABAg",
      "date": "2026-10-23",
      "text": "Bisniullah berkah ka",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "7919057895e03602",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2567fbda7cccf98c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxxsZlD1PxCJKvHotB4AaABAg",
      "date": "2026-10-23",
      "text": "Buat anak salam dr kalteng",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "525e88d76b297ff7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-36fedce247085e2f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "gIVITJOSZKk",
      "date": "2026-10-23",
      "text": "DATA BUSUK PADA CAIR?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 20358,
      "id": "f9adb5034fe6934c",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-af8bd5b2d5fbe595",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "se8OQQb_4Q8",
      "date": "2026-10-23",
      "text": "Demi Memenuhi Keinginan Istriku, Aku Terpaksa Menanggung Utang Pinjol yang Terus Menumpuk!",
      "url": "https://www.youtube.com/watch?v=se8OQQb_4Q8",
      "engagement": 35626,
      "id": "3141230537d63288",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e0396ac11fd1c24",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxAPEIp8KUECsWpurp4AaABAg",
      "date": "2026-10-23",
      "text": "Gabisah gabisa di danah kaliyan fst pinjam gajelas ni konten",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 1,
      "id": "6b17ee2f779722fb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3d6036da326de1f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgztDLNuGqJlM1zANNR4AaABAg",
      "date": "2026-10-23",
      "text": "Jangan jangan mereka semua pinjol kerja sama, diarahkan tutuplobang gali lobang biar untungnya berkali kali lipat?",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 11,
      "id": "2151cd92027056c1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c9a92c255dd6c799",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxtgWXNofa8gTpI3Dl4AaABAg",
      "date": "2026-10-23",
      "text": "Keren bang konten nya berlanfaat apalagi buat yang masih dangkal paham soal pinjol, makasih juga bwt daget nya mantap 👌",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 5,
      "id": "b1e4b99279429f51",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-24633e520663f7c7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxAKPtA5ahGI3-wU894AaABAg",
      "date": "2026-10-23",
      "text": "Mantap bang",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "8ade680c272c2d64",
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
      "externalId": "UgyFmLT3gomAjCRZ4hx4AaABAg",
      "date": "2026-10-23",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp590.000 : https://s.id/saldodana2\r\n- Daftar doang, Dapat Rp310.000 : https://s.id/CdVZ2\r\n- Daftar doang, Dapat Rp680.000 : https://s.id/pGyBx",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 47,
      "id": "153e7ef739203800",
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
      "externalId": "Ugw2P8STX6YbYrPVkTp4AaABAg",
      "date": "2026-10-23",
      "text": "No, 1 ❤",
      "url": "https://www.youtube.com/watch?v=se8OQQb_4Q8",
      "engagement": 4,
      "id": "176be0384033a0e5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2eaf03345fc92ba0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy1sF-YFyJyPgg7qQ94AaABAg",
      "date": "2026-10-23",
      "text": "Pemberi Pinjol yang harus cek kebenaran data NIK calon peminjam",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "409e07c70c88a929",
      "eventId": "auto-301086fe1ac5184c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhNg7ZRv6ZMl6qeRZ4AaABAg",
      "date": "2026-10-23",
      "text": "Pengen beli pelapon.beli pager.beli sopa ah banyak deh ko jadi adu nasib",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "430951748c6f37db",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-26b2a8a6f038ca6c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyKMXWtJFwV9ozBiU94AaABAg",
      "date": "2026-10-23",
      "text": "Sama punya ku juga ngak ada",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "3b7151365ff7b3d3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-41dd8025f1fadc1a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGCw1lbJRGGpq7Odp4AaABAg",
      "date": "2026-10-23",
      "text": "Semoga bermanfaat ilmunya",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "7fb8dbfa452d00fe",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2e28aec5393269c7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCbkCck_mIXdYjltJ4AaABAg",
      "date": "2026-10-23",
      "text": "Semoga rejeki lancar kak semoga kebagian rejeki buat makan kak",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 2,
      "id": "98e681d74caf169a",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fcf52014f8f61c49",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "E11vN4YZFv8",
      "date": "2026-10-23",
      "text": "TANPA BI CECKING! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 26642,
      "id": "7529f583ea665797",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f004b55e0c0ac1c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxeyfXOFHJkZnATC0V4AaABAg",
      "date": "2026-10-23",
      "text": "bang boleh sisih kan sedikit rezeki saya mau ngerantau bismillah😊",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "b1ff04a4e49d6475",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4048f45025806048",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxK65Vw2k8huqMXsn94AaABAg",
      "date": "2026-10-23",
      "text": "bismillah ya Allah",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "1b3eccb833cc3f31",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8c2a649d70cfe2b4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwYOJMGlbgMIVe-7N54AaABAg",
      "date": "2026-10-23",
      "text": "butuh kali aku bah buat sehari hari ongkos kerja bensin dll",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "f52c5d6e20f11198",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-58cf6d19acf7d265",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyFhwjFGNDYflRm5uV4AaABAg",
      "date": "2026-10-23",
      "text": "ga berharap lebih, semoga di vt masnya ini ada rejeki ku yang allah titipkan ke mas nya😁",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "0583d48c9228761c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bff394c8d916cce7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwi3V-Dr0X6TDK-rwh4AaABAg",
      "date": "2026-10-23",
      "text": "gk muncul bang",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "8f0ec8c19864ff3d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d984d0bb5cfb3eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx04ylQGOkHWVJY0E54AaABAg",
      "date": "2026-10-23",
      "text": "mantap smoga bisa isi paket data",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "90cff9a5866be053",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee4776dab4cd6ade",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugynjs24bVhJ2sR2WTR4AaABAg",
      "date": "2026-10-23",
      "text": "semoga bisa",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "fc945e371fb55a06",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-34584fe24c898e26",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyG-T-LusDTcvR9-R54AaABAg",
      "date": "2026-10-23",
      "text": "siap abang",
      "url": "https://www.youtube.com/watch?v=q0_iHaKEJcI",
      "engagement": 0,
      "id": "ff5957b0d4b0b853",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2f2475fee4453bb1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJ-TDmb3DtzVEnY754AaABAg",
      "date": "2026-10-24",
      "text": "Bismilah semoga ada rejeki, aamin",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "caa4974e17ee42f9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-64cdc674ce434ffd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnXRHfyO4VkOQfns94AaABAg",
      "date": "2026-10-24",
      "text": "Bismillah",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "5134f727158d5be1",
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
      "externalId": "UgyHIHWzr8n65cNN0Q94AaABAg",
      "date": "2026-10-24",
      "text": "Bismillah buat anak ultah hari selasa",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "381d0fa03664a6f7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0ffee3c9c01e8dc4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw_DM64ngN0XLeTCkp4AaABAg",
      "date": "2026-10-24",
      "text": "Bismillah ikutan hadir semoga bisa terciduk buat bayar SPP anak",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "965b31bcb66adeb4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-517d0c089f8d78c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVb-d1JxYCwTPFUIx4AaABAg",
      "date": "2026-10-24",
      "text": "Bismillah semoga dapat",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 2,
      "id": "b2a2a2bff4c0774e",
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
      "externalId": "UgzVjTS-5spilnaEmUh4AaABAg",
      "date": "2026-10-24",
      "text": "Bismillah ya rabb buat bapak operasi gula",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "577f4851e7e19bf8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fda3a0995c9cad35",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJok9u7O2QDkT5zXJ4AaABAg",
      "date": "2026-10-24",
      "text": "Bismillahirrahmanirrahim semoga dapat. Amin",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "b4fda38b089e69e1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fbf2892d72598df7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzSR19mAL85IScC7ap4AaABAg",
      "date": "2026-10-24",
      "text": "Buat bayar SPP anak sekolah",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "92782331d227d93a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0675f21014649cc1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxlZkQns8D_3YcciLt4AaABAg",
      "date": "2026-10-24",
      "text": "Funsi negara dalam melindungi rakyatnya gimana ya?",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "32fca8f16d0cde72",
      "eventId": "auto-1d150d312f9bdf34",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgznumvA-RmUo-lHKBV4AaABAg",
      "date": "2026-10-24",
      "text": "Ga boleh spt itu. Harus ybs datang membawa ktp dll, rekaman video saat transaksi.",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "edb959fbece79f3e",
      "eventId": "auto-a62e363939b2e838",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyyd1v50fn0HBPFlxl4AaABAg",
      "date": "2026-10-24",
      "text": "Gass bang",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "5949ffd8bb939deb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-078c2cc69b548c4c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgySIje8ISx0j9QUPaR4AaABAg",
      "date": "2026-10-24",
      "text": "Keamanan pinjol OJK harus dipertanyakan masa nomor aja lolos harusnya ada tahap tahap sampai titik ornag gabisa niru",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 5,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 44.4
      },
      "id": "f65f02dd9cf933ce",
      "eventId": "auto-c23398f41af174ef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwzIivzC1sBBPsc83t4AaABAg",
      "date": "2026-10-24",
      "text": "Mantab infonya min.langsung gercep dech...",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "e1c805e0c05d60fb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a0e89a149481a23e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwKsobVFcziqHy0xXx4AaABAg",
      "date": "2026-10-24",
      "text": "Mau banget bang semiga ada rejeki saya,saya butuh untuk midal usaha",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "4d8fd2c4d32512db",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a5099fe371863ae7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxcSKR3j-RSa1rDz2J4AaABAg",
      "date": "2026-10-24",
      "text": "Mau banget soalnya make buat beli labtob buat kuliah, semoga dapat",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "42ad7dd96000bce8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8088a7d331b87d63",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyd_SMtg3UKaxVq1dt4AaABAg",
      "date": "2026-10-24",
      "text": "Saya suka nih tambah wawasan yg berguna Trimakasih kak edukasi yang jenengan berikan sangat mudah dicerna semoga membantu dan bermanfaat langsung nyimak sampai habis dan semoga nanti saya praktikkan berhasil juga 🤲",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 4,
      "id": "d5127a0e77b5bd06",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cd8e2203ababfc15",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxgDueC7Csav-QPuH94AaABAg",
      "date": "2026-10-24",
      "text": "Yah ngga bisa lah kalo hanya KTP, kemana2 pakai KTP. Ke hotel KTP,  Daftar sekolah malah parah KTP dan KK, hukum indonesia harus lebih tegas masa KTP jadi pinjol.",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 33,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "1ecbb6272a4d5627",
      "eventId": "auto-1c109afc636924a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyzq5_2T8BZhxjElm54AaABAg",
      "date": "2026-10-24",
      "text": "Yuhu",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "1b3b75e5c6035214",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7e0d230a369f570",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxcwP4kmSefBmvlXfR4AaABAg",
      "date": "2026-10-24",
      "text": "bismilah buat bayar paket",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "1948925bbd882821",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f51c905486655370",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw0NjsM_4_CiYXYou14AaABAg",
      "date": "2026-10-24",
      "text": "bismilah modal jualan 🙏🏿",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "7024bc08f572e670",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3dbff686b7e92dd2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjwvexSNd2kw9SJZB4AaABAg",
      "date": "2026-10-24",
      "text": "bismilah❤",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 1,
      "id": "25c322a6727ac6d7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7df8a875d0598835",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxlzW27kejIA3eID154AaABAg",
      "date": "2026-10-24",
      "text": "bismillah ❤",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "03d8819c00aca16e",
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
      "externalId": "Ugye0hjK0Lsqd3BeQ1d4AaABAg",
      "date": "2026-10-24",
      "text": "bismillahirrahmanirrahim , semoga ada rezeki nya dari abang untuk menyambung hidup saya dan keluarga 🤲🏻🤲🏻 ....\nsehat selalu dan sukes terus untuk abang orang baik 🤲🏻🤲🏻\nTerimakasih ....",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 1,
      "id": "77831c6d5c6771d6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f5cd7dfe6b4aa7f3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzlAKFpMD63Sm5r5cV4AaABAg",
      "date": "2026-10-24",
      "text": "lebih baik tutup aplikasi pinjol, pinjol lebih dari rentenir.",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 1,
      "id": "157f75ca38020cea",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-da591d8be281153e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzT3llfQ1VNfed2BOx4AaABAg",
      "date": "2026-10-24",
      "text": "self service ini namanya .. harus nya pemerintah hadir donk diberantas. apa rakyat nya kebanyakan jadi gk mampu manage",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 44.4
      },
      "id": "603c987b988f5016",
      "eventId": "auto-fc58baa3f42ea2e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOTRypzdQd4DNRfId4AaABAg",
      "date": "2026-10-24",
      "text": "terimakasih min, akun saya juga busuk tapi saya masih pengen pinjam online lagi, karna lagi ada kesulitan ekonomi\n semoga video ini bisa menjawab kesulitan yang saya alami sekarang, sekali lagi terimakasih min edukasinya 👍🔥\n btw saya juga berharap menang dr salah satu give away admin 🙂",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 9,
      "id": "074bfb305b277278",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48042f68b6745032",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzGZp6-6l5XQvgaA5B4AaABAg",
      "date": "2026-10-25",
      "text": "Bang bagi rezeki nya buat beli susu pampers anak 😭",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "5bf11881015cb3b2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b83ce30355b03f91",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGzxlObQalx-0Fem94AaABAg",
      "date": "2026-10-25",
      "text": "Bismilah buat Brobat",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "2d68d21f582b0c88",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2d47b0bc00bb3f87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwa9Mhspn4HcbPARXd4AaABAg",
      "date": "2026-10-25",
      "text": "Bismilah buat cicilan bualan depan semogga dapet",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "49b39d41625be83d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aafc85f12df8c2e3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCI6HlhAQ_qK9oCdF4AaABAg",
      "date": "2026-10-25",
      "text": "Bismilah semoga dapat amin",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "5e5518d671ffac94",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5651dfb475df7bdd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgygjeqkRwEMz0dQCBh4AaABAg",
      "date": "2026-10-25",
      "text": "Bismillah amin 🤲",
      "url": "https://www.youtube.com/watch?v=7SSpPDNVJ-8",
      "engagement": 0,
      "id": "1a3648ee349ade62",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-db2ed510ebc06658",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLPBDI-_6XRwX6E6B4AaABAg",
      "date": "2026-10-25",
      "text": "Bismillah buat tambahan ongkos pulang kampung 🙏🏼",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "b11796d3e73379aa",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a35d695cca1a057",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx5tH-Y39c_gcPFm1R4AaABAg",
      "date": "2026-10-25",
      "text": "Bismillah dapat buat berobat ibu aamiin",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "bdd375bf1c99631c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0612144ece101a07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8H6OQzeJq8-Y6N914AaABAg",
      "date": "2026-10-25",
      "text": "Bismillah semoga dapat bang lagi butuh untuk berobat ibuk saya🙏🙏",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "16ebe0d36d9b21c1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e2aaf47ba5de1ff8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzzhQOnoE7_vZXRJH14AaABAg",
      "date": "2026-10-25",
      "text": "Bismillah semoga dapat buat bayar kontrakan rumah",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "6a58e71c9d854683",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a35adecdb58af11",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnNhHBbczzMYOlmjt4AaABAg",
      "date": "2026-10-25",
      "text": "Bismillah smoga dapat amien untuk bayar koss 😢",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "7dbde17786592b1e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-14642b4c47052ad1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyxWrUuAJy4GPDUHFB4AaABAg",
      "date": "2026-10-25",
      "text": "Bismillah yaallah semoga dapet lagi butuh bang🙏🙏",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "66932f64ff1b9b4d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8cea813fb5b2515",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx7ehLIUxRG0KTvDa94AaABAg",
      "date": "2026-10-25",
      "text": "Bismillah.buat beli beras",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "7168d4e41861d957",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-699cba599398939c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwxDfU95BBW-iaEqCt4AaABAg",
      "date": "2026-10-25",
      "text": "Bismillahirrahmanirrahim buat uang makan🙏",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "280c1bf6ef45a353",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4cb6a33a99878123",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDZWdYHJMypp9cJaV4AaABAg",
      "date": "2026-10-25",
      "text": "Bismillahirrahmanirrahim semoga dapet. Buat ongkos berangkat merantau 😊",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "3d482147d659b2e4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3cc7b40194bb72e5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBowTQaxt0MMS3wRp4AaABAg",
      "date": "2026-10-25",
      "text": "Dana instan saya sudah ada tapi knpa blm bsa di gunakan yah bang",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "757e7b38bb63f509",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-036cdea6ac0ffeae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy36SzJiW3iWr-RTh54AaABAg",
      "date": "2026-10-25",
      "text": "Dapet gak dapet abng nya tetep baik selalu berbagi, semangat terus bang",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "255a1a9f170660d7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fdcabb1e43871103",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwN4dVwxsnuqIKqxgJ4AaABAg",
      "date": "2026-10-25",
      "text": "Huadir",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 1,
      "id": "c04d40e4d4596245",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b437a643a46121de",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwli0sQOpu2gZTWS294AaABAg",
      "date": "2026-10-25",
      "text": "Lha emangnya hanya dgn nmr KTP orang bisa dpt pinjol? Koq gampang bgt maling di negeri ini.",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "2592d20fe6e3b36c",
      "eventId": "auto-8394aeef8128ec95",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxXBVPVin2NT7AA_EV4AaABAg",
      "date": "2026-10-25",
      "text": "Mantap",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "6eb18d213ad0b402",
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
      "externalId": "Ugxzo0oYB8tnuizUTJV4AaABAg",
      "date": "2026-10-25",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp580.000 :\r\nhttps://s.id/DanaGratis8\r\n- Daftar doang, Dapat Rp340.000 :\r\n https://s.id/DanaGratis3\r\n- Daftar doang, dapat Rp160.000 :\r\nhttps://s.id/DanaGratis4\r\n- Daftar doang, dapat Rp530.000 :\r\nhttps://s.id/DanaGratis5",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 74,
      "id": "a5753fbace494d70",
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
      "externalId": "UgwwvFijcEAzVP2fwct4AaABAg",
      "date": "2026-10-25",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp610.000 :\r\nhttps://s.id/DanaGratis9\r\n- Daftar doang, Dapat Rp580.000 :\r\nhttps://s.id/DanaGratis8\r\n- Daftar doang, Dapat Rp340.000 :\r\n https://s.id/DanaGratis3\r\n- Daftar doang, dapat Rp160.000 :\r\nhttps://s.id/DanaGratis4\r\n- Daftar doang, dapat Rp530.000 :\r\nhttps://s.id/DanaGratis5",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 38,
      "id": "77bf53366dc6cd45",
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
      "externalId": "UgyuvY8ZpANlNYdmMgd4AaABAg",
      "date": "2026-10-25",
      "text": "Pemerintah harus tertibkan aturan untuk pinjol dong, harusnya ada verifikasi ktp asli lewat kamera hp dan verifikasi wajah pengaju pinjol seperti kalau buka rekening bank secara online, kalau tidak ada verifikasi wajah dan ktp asli nanti rawan penipuan.",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 10,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 67.5
      },
      "id": "7e6eb55f6b5f8469",
      "eventId": "auto-1a05a7ad1d611518",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "qg8WwFdsMy4",
      "date": "2026-10-25",
      "text": "RAME YANG GALBAY?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 28144,
      "id": "e00b1c8a0e605d48",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-abac53addd62784f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxFUVjo7KvULdAObgt4AaABAg",
      "date": "2026-10-25",
      "text": "Smoga dapat biar tambah\" ongkos bolak balik di rumah sakit. Karena istri saya lagi kelahiran bang.",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "3838c216f78c5061",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b9a537abe6a357b3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "GuPHdZELngk",
      "date": "2026-10-25",
      "text": "TANPA BI CHECKING?! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA BUSUK LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 20363,
      "id": "660ad2b32ae75a4e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-76c3e3ff20ee5077",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyFs4WeLBSsqYMHaeZ4AaABAg",
      "date": "2026-10-25",
      "text": "Terimakasih bang semoga saya di acc",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 2,
      "id": "14a9ebee9e683927",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9b2ab77668c68c1a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwWwNZJGlHmUemeiNd4AaABAg",
      "date": "2026-10-25",
      "text": "aku knp tidak muncul ya, pdhl sudah premium",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "e2fe1499cb104070",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-10fb1607cf0af626",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCd22-2jcPPxMDgM14AaABAg",
      "date": "2026-10-25",
      "text": "bisimillah buat jajan",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "df923ea84a6a4def",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-062039fc4f9b56dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpPaxSin5suREB9ul4AaABAg",
      "date": "2026-10-25",
      "text": "oke",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 1,
      "id": "b142c5dd0dbcf279",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b13c0ea15587743a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyusP65txIsgq5riVR4AaABAg",
      "date": "2026-10-25",
      "text": "sebagai WNI kita butuh pinjol",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 1,
      "id": "4f56fd2597e07f9d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4173c183aa14dc20",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz1cpKv4M4xKQmrkVx4AaABAg",
      "date": "2026-10-25",
      "text": "❤",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "301447badcadd089",
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
      "externalId": "Ugy2CWVKGiLkKihFnBJ4AaABAg",
      "date": "2026-10-26",
      "text": "Amin bg",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "9b9375ff91595b5f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b7f49bc944a1306b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzE6h63mfEupzQfHhZ4AaABAg",
      "date": "2026-10-26",
      "text": "Bismilah semoga dapat buat berobat anak",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "9e7529fe09aa1d44",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bc85eebbddedee76",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwH6-AMqB-Xt4XL6at4AaABAg",
      "date": "2026-10-26",
      "text": "Bismillah",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "7af803a5bee534f9",
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
      "externalId": "UgxpBApB_c50VYwXDpF4AaABAg",
      "date": "2026-10-26",
      "text": "Bismillah buat bayar utang",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "59fdbed74f883182",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-93efbe90d78a7f11",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIjBJ1PiHk79lGD354AaABAg",
      "date": "2026-10-26",
      "text": "Bismillah gak pernah dapet buat biyaya rawat sakit ibu 😢 🙏",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "4d2351c524a57cf3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35ae0212a0a13cf6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgznhTes19jkyDfk4j54AaABAg",
      "date": "2026-10-26",
      "text": "Bismillah semoga dapet buat kbtuhan sekolah",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "2e87e7eaec9826f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a15e15b7c74a6880",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwyAadR4GmNn2VPhVh4AaABAg",
      "date": "2026-10-26",
      "text": "Bismillah smoga dapat jga",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "cba2ca0af94b07c0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aa08dab4b0c5125a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwQEzVUTuZJQSaREM14AaABAg",
      "date": "2026-10-26",
      "text": "Bismillah, semoga ada rezekinya buat berobat ortu",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 1,
      "id": "240fe1c5b817d8e5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-286e95e27444bd6c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqEcMyIslPdEQ8sPp4AaABAg",
      "date": "2026-10-26",
      "text": "Endingnya menyenangkan min❤",
      "url": "https://www.youtube.com/watch?v=se8OQQb_4Q8",
      "engagement": 4,
      "id": "f095664f1f209c17",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9de3c3d36212d653",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwhqOuXoMS3E1XMEdR4AaABAg",
      "date": "2026-10-26",
      "text": "Good 👍🏻",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "f229cc8364792f39",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-770e607624d68926",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwdLFC-gAjCR-lDBKh4AaABAg",
      "date": "2026-10-26",
      "text": "Ini cara OJK nangkap orang2 yang mereka gak tahu main apa aja di market. Cerdas caranya, suruh lapor sendiri. Tinggal tangkap 😂😂",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "84e84172152b5c02",
      "eventId": "auto-acd4f293f6551e96",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgybrkDZi_HRgKtwfap4AaABAg",
      "date": "2026-10-26",
      "text": "Mantap sangat mengedukasi dan juga sangat mengingatkan kita pentingnya selalu bayar hutang ..",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "58d44b57aa9d14ad",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b33ae65082f8e603",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyKCpUs7c-nJ3_yEo14AaABAg",
      "date": "2026-10-26",
      "text": "Orang yang kayak gini beneran ada lo, rela hemat maksimal + pinjol demi bisa pamer dan dapat validasi di tongkrongan dan sosmed",
      "url": "https://www.youtube.com/watch?v=tAyQz3wpndc",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "92061a729922efb7",
      "eventId": "auto-2b6211c6040fe7de",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzOwAN60jM2VVRQ-Dd4AaABAg",
      "date": "2026-10-26",
      "text": "Semoga ane dpat",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "124ebb0e1bb5d5ec",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-838ce54e255f3418",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx_mDr6CTz7SmCV1q14AaABAg",
      "date": "2026-10-26",
      "text": "Semoga berjodoh.. butuh utk nambah modal usaha",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "b7d934f3222cadd8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f66cfdc9b5512e57",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQU5c7Ad_w_KLo4Ch4AaABAg",
      "date": "2026-10-26",
      "text": "Semoga berkah bang, terbaik pokonya mah paket lengkap🎉❤",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "62621fbbfcf0f820",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-103410fd7be0ce56",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwjf_C9s_abBAyJWht4AaABAg",
      "date": "2026-10-26",
      "text": "Semoga beruntung bang, butuh uang 3jt untuk ambil laptop kuliah yang rusak buat lanjutin tugas akhir 🥺🙏🏼",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "4f7b283b47086204",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b1e324fece16654",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwDzoxUzPU55k5fE0d4AaABAg",
      "date": "2026-10-26",
      "text": "Semoga dapet buat nyambung makan sampe gajian",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "c335e941187bd361",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a9a890b2d1112eec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxXrrUqLNndspgGWWt4AaABAg",
      "date": "2026-10-26",
      "text": "Smoga dapet. Kalau dpt buat tambahan ngelamar si doi",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "94a7446260d6bf03",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d98c84d48e1f01ea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzSaBqFGWu6Dih001d4AaABAg",
      "date": "2026-10-26",
      "text": "Terima kasih atas semuanya...",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 1,
      "id": "9e49c67039bb6be5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-64569ab99cb7aef0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwsHzUJgOu-k1Ir_GN4AaABAg",
      "date": "2026-10-26",
      "text": "Wah mantap bg saya berhasil habis minjem .... Pokok nya konten nya mantap deh... Semangat terus bg bikin kontem nya🎉",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "dfb99b395b492909",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-25e9830728c7cfa3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwTJ7uM6oRm1YqgMfN4AaABAg",
      "date": "2026-10-26",
      "text": "Yeyy",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "3b3d8548def52b14",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e357dfb029036e4d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxIl6zsM5w2V2ZPdTx4AaABAg",
      "date": "2026-10-26",
      "text": "bismilah",
      "url": "https://www.youtube.com/watch?v=gIVITJOSZKk",
      "engagement": 0,
      "id": "f55e4e501800020c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7df8a875d0598835",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwhz4Ejq543TaubKoV4AaABAg",
      "date": "2026-10-26",
      "text": "bismillah rezeki anak kost, semoga dapat yaallah buat belanja bulanan dan buat bayar kost🤲🏻",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 1,
      "id": "2a431e1a66567d55",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ab24b4b07d382e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHhnkUhDq1sInm5u14AaABAg",
      "date": "2026-10-26",
      "text": "heleh taekkk endingnya nyari duit juga dikira ngurus gitu gratis",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "7d3e2a24f26ee66e",
      "eventId": "auto-fe67d9c1adc4afcd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "w9k9uDAZdec",
      "date": "2026-10-27",
      "text": "AKU NGUTANG PINJOL DAN DI KEJAR KEJAR RENTENIR.... Tyler&#39;s Deal",
      "url": "https://www.youtube.com/watch?v=w9k9uDAZdec",
      "engagement": 1196896,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 57.0
      },
      "id": "f196d77688edef7b",
      "eventId": "auto-3733e06a3c1eddfb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyktl9E_jMQlWG6UQt4AaABAg",
      "date": "2026-10-27",
      "text": "Bro udah speedrun bunuh orang, kabur, dapet duit, kirain udah tamat, eh malah unlock achievement: UTANG NAIK LEVEL 😭🙏🏻💀",
      "url": "https://www.youtube.com/watch?v=w9k9uDAZdec",
      "engagement": 35,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 51.4
      },
      "id": "334b7fe2bb6fbf80",
      "eventId": "auto-3fb974a57865af3f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "yM7ptkZd61M",
      "date": "2026-10-27",
      "text": "DATA BUSUK PADA CAIR?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 32224,
      "id": "a8bc952b4b155acb",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-af8bd5b2d5fbe595",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "qgGtRuNR1fg",
      "date": "2026-10-27",
      "text": "DIKIRA PELIT, TERNYATA SUAMI HUTANG PINJOL DEMI GENGSI IBUNYA! 💸😡 #shorts",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 111903,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 64.0
      },
      "id": "ed637e0cca6a24ef",
      "eventId": "auto-eed2164353a22730",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxHta-0j_wwkJ2hPsd4AaABAg",
      "date": "2026-10-27",
      "text": "Efek ngutang semua karakter penting dalam game ini. Jake berhutang kepada para reternir dipimpin Tony. Lalu, Tyler ngutang ke Frank plus Ray dan Frank (kemungkinan letnan mafioso) ngutang ke bos besarnya selevel komandan wilayah district",
      "url": "https://www.youtube.com/watch?v=w9k9uDAZdec",
      "engagement": 477,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "5bd110121f909188",
      "eventId": "auto-26160cdcd757f7c9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwe_acMqDZPHSa6ue54AaABAg",
      "date": "2026-10-27",
      "text": "Gagal bayar atau menunggak utang pinjaman online (pinjol), baik yang legal terdaftar di OJK maupun ilegal, membawa berbagai risiko finansial, hukum, dan psikologis yang berat",
      "url": "https://www.youtube.com/watch?v=w9k9uDAZdec",
      "engagement": 89,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 83.6
      },
      "id": "9f4bbd486f5e6641",
      "eventId": "auto-5f9d2d1415d461a6",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9kC4LgasuZXG8CyJ4AaABAg",
      "date": "2026-10-27",
      "text": "Hadir",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "ff498dd6048bb88c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d76d3ef651644d38",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzo3M3Y_YGNYJ4gVi14AaABAg",
      "date": "2026-10-27",
      "text": "Hadir",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "a9ac4c935c71a05e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d76d3ef651644d38",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1-MZckNOEMqiWSgp4AaABAg",
      "date": "2026-10-27",
      "text": "Hanya karena utang, semua menjadi kacau dan terus terulang",
      "url": "https://www.youtube.com/watch?v=w9k9uDAZdec",
      "engagement": 67,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 57.0
      },
      "id": "0af439f8282a7886",
      "eventId": "auto-9e63cafe4920e952",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjWPpWfSCnAxeHc6F4AaABAg",
      "date": "2026-10-27",
      "text": "INTINYA JANGAN BERUTANG APALAGI KALO GA SANGGUP BAYAR😢😢, SERU GAMENYA BANG😍😍😘",
      "url": "https://www.youtube.com/watch?v=w9k9uDAZdec",
      "engagement": 55,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.65,
        "lexiconRisk": 57.0
      },
      "id": "e9d52b1c89a40f76",
      "eventId": "auto-a18545f1aff39cab",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwQ1NBDwfMRA11_wbB4AaABAg",
      "date": "2026-10-27",
      "text": "Ko punya saya ga bisa bang",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "5b2ab3cb58fbceb2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-65c45c106d4f87c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_v2Rn9FceP6gGS3t4AaABAg",
      "date": "2026-10-27",
      "text": "Mantap mba kepruk sekslian mertuamu sama suamimu",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "4956ef9c6bacd8cf",
      "eventId": "auto-56cb42be66deb410",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwIo0Y7FFTBsdtaSYV4AaABAg",
      "date": "2026-10-27",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp310.000 : https://s.id/7lZka\r\n- Daftar doang, Dapat Rp680.000 : https://s.id/nDefh",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 106,
      "id": "60476ed7ee2658de",
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
      "externalId": "UgxD7S9MGRNObsncZHt4AaABAg",
      "date": "2026-10-27",
      "text": "Mertua, suami iblis,jahattt",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "2b13a91333d8cfaa",
      "eventId": "auto-656090b4e60ab4fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzUwuvQ0fT60agcjq14AaABAg",
      "date": "2026-10-27",
      "text": "Puas banget liat istrinya gampar sekuat kuatnya di depan ibunya",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 2,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 43.0
      },
      "id": "d94869f1c5075898",
      "eventId": "auto-2707e2e3db923550",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxiU6zhfGufDonk2k14AaABAg",
      "date": "2026-10-27",
      "text": "Semoga dapet buat kebutuhan sehari-hari",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 1,
      "id": "092f5d1bcb284ddb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-675eca74fc659841",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzEDw6LccWpVNyRNVl4AaABAg",
      "date": "2026-10-27",
      "text": "Si ibu mertua emasnya kayak toko emas saja di tubuhnya, padahal semua nya dibeli dari hasil pinjol,  benar 2 memalukan",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "fd29603a1c2fbd96",
      "eventId": "auto-e3b1ec90c85db740",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyAF4QzqSBmjvHlc4N4AaABAg",
      "date": "2026-10-27",
      "text": "Sikaaaaatttt....",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 2,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "169f6c5dcc6df972",
      "eventId": "auto-6a9367e90aef8afc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwlnsfNJXWHyg-FZIZ4AaABAg",
      "date": "2026-10-27",
      "text": "Suami & mertua sama\" Iblis yg berwujud manusia ... menuntut boleh demi gengsi mertua yg SO ... Bagus mba suami di ksh pelajaran yg berarti  !!?  😇😇🙋",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 16,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "171895eee03edb9d",
      "eventId": "auto-1d79e3a373bcf16e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxc6w46_QdL9df7BjR4AaABAg",
      "date": "2026-10-27",
      "text": "Suami n mertua berjiwa iblis",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "6ed77adad756b4a6",
      "eventId": "auto-78cd98daa2fd2c48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQATnIqUj0vG9qHbp4AaABAg",
      "date": "2026-10-27",
      "text": "Sudah jelas & pasti NIK sudah tersebar kemana2, semua customer service di bank2 minta ktp kita utk urus berbagai validasi, data di banyak aplikasi2 pemerintahan juga perlu NIK juga, siapa yg jamin oknum2 admin2 gak share itu kemana2. Belum lagi scan di tempat2 Copy & Print pinggir jalan saat urus dokumen2 pemerintahan, pasti tersimpan data konsumen2nya. NIK jangan dijadikan barang sakral karena mudah tersebar kemana2. IKD juga masih ditolak dimana2 mintanya KTP asli, lalu buat apa IKD ?",
      "url": "https://www.youtube.com/watch?v=5NmUHgyHPQM",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "68865c8742915e0d",
      "eventId": "auto-d314251dc95c5a7b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4nr92yTk6Gz6cNt54AaABAg",
      "date": "2026-10-27",
      "text": "Udah usir aja suami & mertua jahaat",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "9e7323de04836d7a",
      "eventId": "auto-7bb2f046b917e762",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwNPoAGrAw4lxWdVB14AaABAg",
      "date": "2026-10-27",
      "text": "WOW Game ini mengajarkan kita jangan berhutang ke siapapun jika tidak siap menanggung resiko nya, jika berhutang kita harus siap menanggung resiko nya\n- Satz",
      "url": "https://www.youtube.com/watch?v=w9k9uDAZdec",
      "engagement": 31,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "80638fe3a6ac22b9",
      "eventId": "auto-fa2ef6f0326e2bc4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNNs57I0tIKRXLI2Z4AaABAg",
      "date": "2026-10-27",
      "text": "absen smoga beruntung buat kebutuhan anak",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "544ce304d1c1fcad",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-93194087534d9ef8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDmeb_Ms0Ev_Shy2J4AaABAg",
      "date": "2026-10-27",
      "text": "bismillahhh",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "b1b1fb2759009dda",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aaf9391db7875f07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyewQuJiArndaoS8pR4AaABAg",
      "date": "2026-10-27",
      "text": "hadir bang",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 1,
      "id": "5c9e305ce7c7ea37",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3746e56a5d773e13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxObHW1TRE7K-OqkEJ4AaABAg",
      "date": "2026-10-27",
      "text": "mertua ga tau diri..ga bersyukur sdh d urusin menantu ..mending pergi kak jauh2 tinggalin kluarga bennalu",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "2c87a5f8ce28b1c1",
      "eventId": "auto-54166d6c8e09a9ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz5y4c5YM6CRzrIpAl4AaABAg",
      "date": "2026-10-27",
      "text": "sehat selalu bang,lancar teross ,semoga dapet buat ongkos kerja pake gojek aminnn.",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 1,
      "id": "25a874cf03e508a5",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4c42ed9e742ebb3d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZHyHbO2CTCWpe-ll4AaABAg",
      "date": "2026-10-27",
      "text": "semoga dapet buat biyaya sekolah adik",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "1d4f3c750d013901",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8d1c3da139129376",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVb20FPIGpWMf9Au94AaABAg",
      "date": "2026-10-27",
      "text": "ya Allah semoga dapet buat kebutuhan sekolah🤲🏻🤲🏻",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "18da19796d964d1a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d9d53cce8bcbbc9a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytQZ2Zq5gtH_9ITL54AaABAg",
      "date": "2026-10-27",
      "text": "😂betul mbak mertua suami sama saja.kluar saja masih banyak tempat nyaman yg diluar😂😂😂😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 44.4
      },
      "id": "8b7435b614a251e3",
      "eventId": "auto-c6d12bdce7a38a55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxS2UglAZyrs3Pgi1t4AaABAg",
      "date": "2026-10-28",
      "text": "Bagus tindakan menantu itu",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "1b21e1425bccf886",
      "eventId": "auto-9c0c9e28ee3dc91d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxF1nqEV8yRHI2WFKN4AaABAg",
      "date": "2026-10-28",
      "text": "Bismillaah",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "66950965a7e7bb30",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-75445a807ecf9bda",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy233oLEoEqOBHqgRJ4AaABAg",
      "date": "2026-10-28",
      "text": "Bismillah semoga dapat  untuk beli lauk",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "c7def74114713e36",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-525655e534e94f2d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyBfddkJfkpar84X5x4AaABAg",
      "date": "2026-10-28",
      "text": "Bismillah yallah semoga menang buat bayaran rumah udah 2 bulan belom bayar bank btn udah ngancam dan katakata tidak enak semoga rejekiku 🤲🤲🤲🤲",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "be812e3cab00fb94",
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7ec1b48853a1f50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxMb0Nxxd2XJDiF74V4AaABAg",
      "date": "2026-10-28",
      "text": "Bismillah yallah semoga menang buat bayaran rumah udah 2 bulan belom bayar bank btn udah ngancam dan katakata tidak enak semoga rejekiku 🤲🤲🤲🤲",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "1963db40dc817c53",
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7ec1b48853a1f50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxYUPN3VcWTwmwCGBp4AaABAg",
      "date": "2026-10-28",
      "text": "Bismillah yallah semoga menang buat bayaran rumah udah 2 bulan belom bayar bank btn udah ngancam dan katakata tidak enak semoga rejekiku 🤲🤲🤲🤲",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "39db4880c5422958",
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7ec1b48853a1f50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwG7aRsRDgtGZ5zwPB4AaABAg",
      "date": "2026-10-28",
      "text": "Bismillah yallah semoga menang buat bayaran rumah udah 2 bulan belom bayar bank btn udah ngancam dan katakata tidak enak semoga rejekiku 🤲🤲🤲🤲 amin",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 1,
      "id": "d86841790ee4c862",
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7ec1b48853a1f50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzv1kbBap2YEA41nkx4AaABAg",
      "date": "2026-10-28",
      "text": "Bismillahirrahmanirrahim",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "509248a4ab76e752",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-69695cc05268a62e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwq06vzPrulFIujhfh4AaABAg",
      "date": "2026-10-28",
      "text": "Bissmillah semoga memang ada rezekynya",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "4b554bf8c67505f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-990a413597a24b0b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxOC28jslI1cIfMHF54AaABAg",
      "date": "2026-10-28",
      "text": "Dasar mertu ma laki kurang ajar picek,bagus mbk tinggal aja 👍👍👍💪",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "cccb5f95fb7aafb4",
      "eventId": "auto-5b4c280236a47a7a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwyc8g5GWn4F2sK6Kl4AaABAg",
      "date": "2026-10-28",
      "text": "Maaf apa boleh suami dan ibu mertua di BUANG ke tmpat sampah, sungguh g berMORALLL....🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "e69dfef89fbf2c2a",
      "eventId": "auto-d88c897b01a20b51",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyyoS6Lk2jczltFciR4AaABAg",
      "date": "2026-10-28",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp310.000 : https://s.id/7lZka\r\n- Daftar doang, Dapat Rp680.000 : https://s.id/nDefh",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 87,
      "id": "d63f726f3fc9e0ea",
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
      "externalId": "UgwPZf5j2ByxWyEdGWJ4AaABAg",
      "date": "2026-10-28",
      "text": "Oke manthap",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "36ebb977e4537eb5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-936de50ebfcb57cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "msf3r8IzdEw",
      "date": "2026-10-28",
      "text": "Pa Ogi Anti Hama &amp; Pinjol, Semua Serba Digembok!",
      "url": "https://www.youtube.com/watch?v=msf3r8IzdEw",
      "engagement": 48100,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "789c840f3c372a03",
      "eventId": "auto-5e9e07536ab44e22",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGjVjBPzVFDRujZx54AaABAg",
      "date": "2026-10-28",
      "text": "Pemaparan yang lugas, jelas dan sangat bisa dimengerti. New inspirasi",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "9d2d70dc5e84fbf4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-016fe707927fa962",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "SC0EW7Mu-dU",
      "date": "2026-10-28",
      "text": "Pinjol Mudah Cair 2026 ke DANA - Cara Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 28543,
      "id": "f3156262ee04e2d0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-26f4b0680cdcc05d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzoHOdst4a3Qu_bXTl4AaABAg",
      "date": "2026-10-28",
      "text": "Suami dan mertua iblis, rampok. Tinggalkan saja. Bagus tegas.",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "32ff62606f8eb9ca",
      "eventId": "auto-2414874f2f688ec6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXv4tQvDxHVVzPqG94AaABAg",
      "date": "2026-10-28",
      "text": "divo uddah datang 2X😂... Tunda bayar Hampir 2bulan karena belum dapat kerjaan",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "f2e2a8cb307c4f24",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1a1ded56f1d3ef50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgySwE6FPw0TACgkYrN4AaABAg",
      "date": "2026-10-28",
      "text": "subhanallah sukses sllu kak\nsmga terpilih dapet give away buat tambah\" beli keperluan lamaran\nkarna hidup cuma dengan simbah tanpa orang tua 🤲",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "a20876cb04ff3403",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a0244ee3b505b5c5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxU-TCaIy2Te-ZOojZ4AaABAg",
      "date": "2026-10-29",
      "text": "08:07  aku ngomong kepada keluarga dan jujur malah di caci maki bang, keluargaku enggak seperti yang lain. kesesatanku karena diriku tertekan oleh keluarga sendiri.",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 4,
      "id": "494ca5a78d78b340",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f357174d4817fc09",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx7Uoh-75fc5yS4ZnJ4AaABAg",
      "date": "2026-10-29",
      "text": "Alhamdulillah bismillah sudah..semoga dapet buat beli susu istri lagi hamil",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "69303a7e5b294597",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53d84e99050648e2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx2TyCCDYbVo94hce94AaABAg",
      "date": "2026-10-29",
      "text": "Assalamualaikum bang mff aku baru komen liat abang orang baik jadi pingin minta bantuan ke abang🙏🏻aku pingin minta bantuan bang mau bawa ibu ke dokter buat periksa kaki nya bang katanya kalo sudah duduk lalu bangun itu terasa sakit pas bagian lutut. tadinya kalo boleh mau pinjm dulu ajah bang kalo kaga dapet undian juga, nanti saya ganti pas ada uang bang soalnya ekonomi saya agak kurang membaik😪🙏🏻🙏🏻🙏🏻",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "1dc98323ccf968e4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b3e18d884e7fae25",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxU9OMhSPDhyB4Wqul4AaABAg",
      "date": "2026-10-29",
      "text": "Assalamualaikum sobat kt d fase akhir zaman pbnyk sedekah zikir istighfar dan sholawat Jibril ke utama nya AL ANFAL 33 Al ahzab 56 jgn lupa lafadz Allah di dada hakikat 💚💚💚💚💚",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 5,
      "id": "d0a560d0e97606f5",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1a6cfe078a7c90fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQ28vy1PVEc0qrcft4AaABAg",
      "date": "2026-10-29",
      "text": "Bismilah , Berkah selalu",
      "url": "https://www.youtube.com/watch?v=E11vN4YZFv8",
      "engagement": 0,
      "id": "1803c219baef1608",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3a63cfa8fb261ec8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIvlmXaDWJy4hkBPd4AaABAg",
      "date": "2026-10-29",
      "text": "Bismilah dapet dana kaget",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "516363f263af8c0c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8c3df81339aeafe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyrAIjCFzAbyykXK_V4AaABAg",
      "date": "2026-10-29",
      "text": "Bismillah",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "da67db06528c2cdf",
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
      "externalId": "UgyC8d5583SbqFEOfJR4AaABAg",
      "date": "2026-10-29",
      "text": "Bismillah bang buat beli pulsa listrik bang",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "bbf1051901776ae5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ff35503671fdf3c7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyZRpYHMtK0KIob5h4AaABAg",
      "date": "2026-10-29",
      "text": "Bismillah,,, untuk tambah modal",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "2aaa29fdc9fd04af",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-654d604d5f91d0f0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx0I6KFeJQ30b0_jsF4AaABAg",
      "date": "2026-10-29",
      "text": "Blm tau caranyA",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "2c868c6e17fc3bc2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-39130a6e5ea6d686",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy23t9Fo74j65ARyNx4AaABAg",
      "date": "2026-10-29",
      "text": "Gue yg dengerin ni cerita, nguras tenaga dan emosi bangettt 😭😭",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 1417,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "3485c34ffb934735",
      "eventId": "auto-48e61348161bd67c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxTCPWS-Ltz_uE9EDl4AaABAg",
      "date": "2026-10-29",
      "text": "JOS JIS KAK",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "deb80c23686acf73",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bf696228e7203c2a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "-d12WcUEoAE",
      "date": "2026-10-29",
      "text": "KRITIK PERBANKAN HINGGA PINJOL ILEGAL DIHADAPAN OJK, DEDI MULYADI AJAK WARGA BENAHI KEUANGAN #kdm",
      "url": "https://www.youtube.com/watch?v=-d12WcUEoAE",
      "engagement": 154820,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 60.5
      },
      "id": "8320fea00f179a1a",
      "eventId": "auto-78c68f6c5a32d86f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "FCcn4t2NK10",
      "date": "2026-10-29",
      "text": "Ketagihan Pinjol Buat Crypto Sampe Rungkad?! | Animasi Kisah Nyata",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 485270,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "4968e66d2938b01e",
      "eventId": "auto-a5b7e3dabb57cf7a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwwJaWcq9A6huK0fmN4AaABAg",
      "date": "2026-10-29",
      "text": "Pinjol mencekik leher.....bunga sangat tinggi banget...pemetintah perlu membuat aturan limit bunga hutang...",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "170fc0c119bc0e83",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bcf6ad0e5c385398",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwakaLb3nNn9InpcnJ4AaABAg",
      "date": "2026-10-29",
      "text": "Sangat mengedukasi...🙏",
      "url": "https://www.youtube.com/watch?v=GuPHdZELngk",
      "engagement": 0,
      "id": "b8116e62165b62e0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7bae8367a138f01d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw49Uq3IGLUKBfxa-14AaABAg",
      "date": "2026-10-29",
      "text": "Semoga menang ...sangat butuh hari ini",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 1,
      "id": "0634bf3169a167b5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc237c146d99f640",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyoOVWPvUW3i0zdPCN4AaABAg",
      "date": "2026-10-29",
      "text": "Semoga ya allh",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "73f1f7b5a3dea30f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-313a4bb00af9d008",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzMEIbXmPsBWAnnbQZ4AaABAg",
      "date": "2026-10-29",
      "text": "Udh bang",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "7bb7715148160e89",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-26c488fb134f0a15",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "ooP95M6uPbM",
      "date": "2026-10-29",
      "text": "[FULL] Pidato Jitu KDM di Depan OJK! Warga Harus Pintar Keuangan, Jangan Terjebak Pinjol",
      "url": "https://www.youtube.com/watch?v=ooP95M6uPbM",
      "engagement": 120271,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "5b88aa0f27c95a40",
      "eventId": "auto-9bafd21045f9d91b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQBMZnkgutNIUwrMt4AaABAg",
      "date": "2026-10-29",
      "text": "bismillah",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "5f72d5b5f8916dcd",
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
      "externalId": "UgxHVyfjcXvS1h_MRtd4AaABAg",
      "date": "2026-10-29",
      "text": "dengerin ampe akhir gais dia ngedumel \"PINJAL PINJOL PINJAL PINJOL\"😂😂",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 170,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "d15047190e7528a2",
      "eventId": "auto-d0c9f8a009a09642",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgztPBK0TgAqOZzLCJZ4AaABAg",
      "date": "2026-10-29",
      "text": "kalo gw jdi ortunya gw usir and suruh bayar sendiri \n\nberani berbuat berani bertanggung jawab",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 909,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "1b433a5e46047a99",
      "eventId": "auto-347694f11105dbbf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEPFPXk5tW8PZB9qV4AaABAg",
      "date": "2026-10-29",
      "text": "klian klo mau main crypto atau sgla macem pahami lebih dalam dulu deh anjir😀😀",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 40,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "4ac8e834ebb83f3e",
      "eventId": "auto-b3cbec93c285eb2c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqaaRYb1c32_ckIbx4AaABAg",
      "date": "2026-10-29",
      "text": "menurutku ortunya kurang tegas\nharusnya disuruh tanggungjawab, biar tidak semena mena lagi, mentang2 ortunya have terus se enaknya pinjem uang mana ortunya yg suruh bayar\nharusnya mas nya suruh nyicil ke ortu sampai lunas, biar belajar tanggungjawab\nemg parenting se penting itu",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 103,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "dcf1cf2e5f5c73ef",
      "eventId": "auto-5f18fe184b667d0d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyeaPS3rUN87cvcXEF4AaABAg",
      "date": "2026-10-30",
      "text": "Alhamdulillah baarokalloh tabarakallah 🤲🤲🤲 \nBapak Aing KDM...bicara sesuai hati,pengetahuan dan realistis...saya sebagai orang Jabar sangat bangga dan bersyukur dibawah pimpinan Beliau in Syaa Alloh Jabar akan terwujud ISTIMEWA...Sehat selalu Bapak,sukses dan Alloh selalu menjaga dan melindungi Bapak dari orang dzolim🤲🤲🤲🥰🥰🥰",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "50f721e5f29ae868",
      "eventId": "auto-c56e038f13f4088d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhojB5_kQkWcxr2p54AaABAg",
      "date": "2026-10-30",
      "text": "Alhamdulillah semoga pak KDM bisa membasmi virus dan bakteri pinjaman mengsengsarakan rakyat Aamin YRA...🤲🙏🙏",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 6,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "8a83ce6493aa54d0",
      "eventId": "auto-be29ab58c0ff2722",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwKg0K0kVVFmwOVm7t4AaABAg",
      "date": "2026-10-30",
      "text": "Anak kedua , sini ngumpul",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 3,
      "id": "1ce8cab514c76887",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6121697065204058",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw1wb2Y4Htj9OX03yV4AaABAg",
      "date": "2026-10-30",
      "text": "Ayo dedi mulyadi bisa menghapus pinjol bank emonk kalau bisa aman setidak nya Indonesia",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 19,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "79b8270fc1e864c2",
      "eventId": "auto-7651fbd9a6dfa147",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzzkshAD01yivwEMyB4AaABAg",
      "date": "2026-10-30",
      "text": "Banyak mencoba sedikit belajar X",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 0,
      "id": "9d78e733298f762d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e1aadcbb206819b9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnOnFGILPzRu2rpTd4AaABAg",
      "date": "2026-10-30",
      "text": "Bismilah bng dpt",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "c103bda36d83529f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f85724505e7dce25",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxNSdoZFGfTEoLzqpB4AaABAg",
      "date": "2026-10-30",
      "text": "Bisminlah semoga kalau rezeki aku dapat",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "c62871eac6be7fbf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77eceb479f49ce9d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgylTCe4wG_0Nae3HhV4AaABAg",
      "date": "2026-10-30",
      "text": "Dih beban nya ngebeban bngt. Tega bngtt",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 1,
      "id": "90f676edee21fe31",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ffb96665236a9dd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwQbzk42IuMZKrVLa14AaABAg",
      "date": "2026-10-30",
      "text": "GK muncul bang ketik pinjaman dana cepat",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "3a76f071f54e3bfe",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0f9468b1c7f22bd2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUpIgtfcxtKgCpW954AaABAg",
      "date": "2026-10-30",
      "text": "Haduhh",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 0,
      "id": "b04e3bf05a116529",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d3d763f7edc57658",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "tfot86eLTFc",
      "date": "2026-10-30",
      "text": "INNALILAHI, Akhir Hidup Tragis Si Penebar Pinjol | Aini Malaikat Tak Bersayap Eps 6 FULL",
      "url": "https://www.youtube.com/watch?v=tfot86eLTFc",
      "engagement": 41092,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "915b19a6185a4fd4",
      "eventId": "auto-c889684477986fe9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwPnkz_IPQI6K_6J9J4AaABAg",
      "date": "2026-10-30",
      "text": "Kami kami selaku orangtua sangat berbahagya mendengarnya, sakit dan sekolah biyaya yg sangat melelahkan kami kami selaku rakyat kuli kasar",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 3,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "76c3ca11f9d9b3b1",
      "eventId": "auto-45faedb6c7d9fb28",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgybZKQPJd6GXz7zmwJ4AaABAg",
      "date": "2026-10-30",
      "text": "Kasian yang jadi anak ke 2 ya💔",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 9,
      "id": "e6538207a032b439",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cd258bed331d7b37",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "kFiO7rJIUHw",
      "date": "2026-10-30",
      "text": "Ketagihan Pinjol Demi Crypto bikin keluarga gue hancur! 😭 #KelilitPinjolDemiCrypto #Animasi",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 29181,
      "id": "e335f2b358b8d7bb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-758c26bdc5edf7a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwdnDodiFw_qnUI1pl4AaABAg",
      "date": "2026-10-30",
      "text": "Menurutku biarin dia panen risiko dari keputusannya yang bodoh. Laki-laki kalo diback up terus nggak ada kapoknya. Mau dipenjara kek, diteror DC kek, biarin aja sumpah ☺️🥲",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 21,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 94.1
      },
      "id": "35da8ca202b28004",
      "eventId": "auto-7f60b17f47f13e0d",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwl_ZIFS3ZavTJXXvB4AaABAg",
      "date": "2026-10-30",
      "text": "Min,aku berhasil buat like kamu 1 rb🎉",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 3,
      "id": "d2b497a9bf578dda",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-202610f8778b20f2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz8vzgTxWgrUrc2j6N4AaABAg",
      "date": "2026-10-30",
      "text": "OJK: Otoritas JOKI keuangan!.",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 12,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "77f734c89ce58de7",
      "eventId": "auto-a9dae417a34c6aa6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy0Mfv6IgOKoKfEXl94AaABAg",
      "date": "2026-10-30",
      "text": "OMG KAYA AKUU",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 0,
      "id": "899a945a07c5f170",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-651cfc98243bc888",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzlu9U2vg7jq7306594AaABAg",
      "date": "2026-10-30",
      "text": "Oke",
      "url": "https://www.youtube.com/watch?v=ZJgBI5T7mE0",
      "engagement": 0,
      "id": "1b2d1bc1af4b64e0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b13c0ea15587743a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxlTPmxh4_KFpAhYBR4AaABAg",
      "date": "2026-10-30",
      "text": "Pinjol sekarang diakui oleh Negara lewat OJK, usul mohon di hapuskan jangan di beri Izin, termasuk JUDOL Harus di hapuskan dan NARKOBA Dibasmi sampai Habis",
      "url": "https://www.youtube.com/watch?v=-d12WcUEoAE",
      "engagement": 42,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "c5dc8075d48ed998",
      "eventId": "auto-d177097ccf011e84",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwdu6drmTfWFkC4JO94AaABAg",
      "date": "2026-10-30",
      "text": "Saya ngak muncul",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "0b71902ebb365009",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aa0411246ffe6a90",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwm83W7EZhabDmzi814AaABAg",
      "date": "2026-10-30",
      "text": "Top emg kang Deddy ❤❤❤",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 18,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "495b64602e99a5c5",
      "eventId": "auto-d5c9fea8dd41014a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEpopWYohKsMmbbmV4AaABAg",
      "date": "2026-10-30",
      "text": "Ya moga aja dapet lah GK ngarep dapet jg si tapi moga aja lah dapet 😊",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "8258c92b9516fb17",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bb7177ae62d2ba69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "c0IT6v1UO88",
      "date": "2026-10-30",
      "text": "[FULL] Dedi Mulyadi Pidato Gregetan Kejahatan Bank ke OJK, Ungkit Pinjol &amp; Bank Emok di Jabar",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 65066,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "a56b0fbd57c70fc4",
      "eventId": "auto-29d27dbdb72d8470",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwD94AP_6IR9sX_3K14AaABAg",
      "date": "2026-10-30",
      "text": "absen bg semoga sy beruntung lgi butuh\" nya bg terimakasihh",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 1,
      "id": "78975f75bb9b3378",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9f38c1c0980ac2a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4XmzrFyT3F8T0nMx4AaABAg",
      "date": "2026-10-30",
      "text": "bismillah, ortu abis sakit terus bingung, akhirnya pinjol, dimana2 bingung mau lunasin karena tenor nya beda2",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "a8de6780a47ddd30",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-107ed1d93437c4fd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_vPntpaebHJ30OqR4AaABAg",
      "date": "2026-10-30",
      "text": "kepada pihak OJK, Perbankan dan Kemen Kominfo....pinjol ilegal mohon diberantas...sudah sangat meresahkan masyarakat.",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 11,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 60.5
      },
      "id": "82d183478b1be106",
      "eventId": "auto-b6b2487984eafd37",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "CknHusO7GJw",
      "date": "2026-10-30",
      "text": "lebih takut di tagih pinjol",
      "url": "https://www.youtube.com/watch?v=CknHusO7GJw",
      "engagement": 33724,
      "id": "5e7b2adc9d843df8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-70d7453db5fe6b83",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzYApvsiwO6OcdbxSJ4AaABAg",
      "date": "2026-10-30",
      "text": "masalah ini lebih besar drpd soal yg heboh di layar kaca",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 3,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "366a674b8a25f9f0",
      "eventId": "auto-7ac86cf0806a3c4a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzkchSVW_7Bn0oeDz14AaABAg",
      "date": "2026-10-30",
      "text": "pidatonnya berbobot membuka mata kita tentang dunia usaha indonesia",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 14,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "94d7b77795b0cfc9",
      "eventId": "auto-5959d5a816c93c2f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9lT4pUC2lYJtg6zx4AaABAg",
      "date": "2026-10-30",
      "text": "pinjol hrs dianggap ilegal dan pidana, sprti narkoba...Jenderal Suyudi wajib bergerak",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 24,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 60.5
      },
      "id": "096bc645ba4fd3ae",
      "eventId": "auto-a9a82d13d3b2bef2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzRz9N5Lii-LvTMUHt4AaABAg",
      "date": "2026-10-30",
      "text": "saking gregetnya sampe gua gigit tangan anjirr, amit amit ketemu orang kayak gtu. buat mba nya kamu hebat, sekrang jangan mau lagi bantuin orang sedontol itu mba biarin hidup sendiri. Sekarang fokus diri sendiri dan ibu. Peluk jauhhh🫂",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 12,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "aa4711da9923c968",
      "eventId": "auto-c1743016e9f096f2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxu-BlM1piY4FReJf94AaABAg",
      "date": "2026-10-31",
      "text": "12:32 anak kyk gini tuh nyusahin nya nyusahin bgttttt ya Allah semoga kakak yg cerita ini diberi rizky yg lancar,kekuatan,kesehatan terutama kewarasan ya kk🥹🫰🏻",
      "url": "https://www.youtube.com/watch?v=FCcn4t2NK10",
      "engagement": 11,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 43.0
      },
      "id": "1b8226f251d2b09b",
      "eventId": "auto-674a05d943e7c89d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzO6lf7npeDxetvA8B4AaABAg",
      "date": "2026-10-31",
      "text": "Apa2 tunggu uang suami,,suami ud stres..anak mint sepatu nunggu gaji suami pdhal uangnya ada",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 17,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "a0eec3fdf7a7efee",
      "eventId": "auto-b370048814b7f983",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxW85vYOt7OqqNAGxd4AaABAg",
      "date": "2026-10-31",
      "text": "Bener bang emak gali lobang tutup lobang,pinjam 6,4 jt hrs byr 11 jt lebih di ksh waktu 15 hari dan cm 2 x cicilan di KTA kilat, jg di samir tinggal bunga nya to sdh byr pokok nya jg bunganya tinggal 4 x lg cicilan nya bunganya baru 2 hari sdh diteror ga karu2an bang,bikin pusing gmn mau cari duit,uang kemaren ma byr kepake tuk urusin mertua meninggal di jawa. Sy minta tenggang waktu mlh mereka pinjol2 ga mau tau. Mereka ga mau ngelepas in sapi perah yg pinjam ke mereka.emak sdh kg kuat byr,mau pinjam ke bank pun susah gara2 pinjol2 itu. Kalo pny duit pun langsung byr ga usah pake ribut,rame di hp dan wa,tlp nin keluarga.malu sih tdk tp netor2in tiap detik bikin resah",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "6505b3075fb8c7e6",
      "sentiment": {
        "risk": 87.1,
        "label": "negative",
        "negativeWeight": 5.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3a9682ace261d5c7",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzmH1H1s8Iq2DnpCG14AaABAg",
      "date": "2026-10-31",
      "text": "Bingung mau komen apa. Tp kasihan jga suaminya ke pressure jadinya pinjol.",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 37,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "6f1e307da1bddeba",
      "eventId": "auto-7e682e8637b4064f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzW_xqjfhiqpCZDmJB4AaABAg",
      "date": "2026-10-31",
      "text": "Bini apaan coba hum....",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "19565081fe7dede9",
      "eventId": "auto-cf00da43650829ca",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy8uo2Rxjr50ZJ05xt4AaABAg",
      "date": "2026-10-31",
      "text": "Bismililah semoga dpat ya allah untuk bayar cicilan motot yang nuggak❤❤🤲🤲",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 1,
      "id": "e03bac653551ad8a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-239853c61ee9321a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "LyHIChppDNU",
      "date": "2026-10-31",
      "text": "Diam-diam Suamiku Kelilit Pinjol, Padahal Penghasilanku banyak #shorts",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 78321,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "20a62b02b9fd8edf",
      "eventId": "auto-ce16514e0fcbc373",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw1qOXb2-NF5nZT3M54AaABAg",
      "date": "2026-10-31",
      "text": "Episode berapa",
      "url": "https://www.youtube.com/watch?v=tfot86eLTFc",
      "engagement": 0,
      "id": "3768bc5257cdfb8d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-582ee9fb63ba2bcc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjE4FnLafqKMamfGd4AaABAg",
      "date": "2026-10-31",
      "text": "Ketika salah pilih pasangan, entah cewek atau cowok akan bikin pasangan stres😅",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 45,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "e0d544550a106a87",
      "eventId": "auto-14bf4c2a8d320d08",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxtS6ivOoAkocPf9HB4AaABAg",
      "date": "2026-10-31",
      "text": "Kok dengerinnya jadi dongkol banget ya \nPengen nge gampar istrinya\nIstri DAJJAL sih ini",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 38,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "41aa6cff6a7bf415",
      "eventId": "auto-b8e05070b6235448",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzsg3tyPuGcibqixUh4AaABAg",
      "date": "2026-10-31",
      "text": "Mantaaaaapp,,😂😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "f705f9198036b400",
      "eventId": "auto-31b919fda3e5a699",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "ByP-a964Gbw",
      "date": "2026-10-31",
      "text": "Rapat Para Hantu! Ternyata Mereka Juga Takut Tagihan Pinjol. #shorts #hantulucu #hororkomedi",
      "url": "https://www.youtube.com/watch?v=ByP-a964Gbw",
      "engagement": 29074,
      "id": "8f4168c89f9c11fd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c932a9fe6301483",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxdJTJZeXLybl5umOB4AaABAg",
      "date": "2026-10-31",
      "text": "Rentenir Kampung lebih Sadis dari Pinjol kaya gak ada Hukum 😢",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "c988d3a8ce9b6279",
      "eventId": "auto-53f7b1a4a1157c43",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9ftLlEZtyzbt0ss54AaABAg",
      "date": "2026-10-31",
      "text": "Saya istri gedek lihat ini,uang istri yg kepake buat kebutuhan rumah tangga adalah sodakoh,selagi kita lihat suami kerja dan berusaha tanggung jawab😢",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 72,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "c5709c738b15e91e",
      "eventId": "auto-23ad373cb6740f8a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxKZ766XokA5Wg3mIx4AaABAg",
      "date": "2026-10-31",
      "text": "Semoga dapet buat bayar utang",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "0836d90845ded58b",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2c3e53c5521c64ea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzp8dUa8D1840wYE_R4AaABAg",
      "date": "2026-10-31",
      "text": "Sumpahh gedek banget aku jirr 😤",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "ba253e6848d9848b",
      "eventId": "auto-4e56ebcf7d70fc0a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwe8BhXfmVC4qIgBaB4AaABAg",
      "date": "2026-10-31",
      "text": "Tinggalin suami seperti itu  apalagi mertua tak tau diri😂😂😂",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "48e5cf8f7e1f524a",
      "eventId": "auto-b21a3bfe3a09ac73",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHrWMQJkVilrikO0d4AaABAg",
      "date": "2026-10-31",
      "text": "Ya ampuun kak kamu jahat banget siiih",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "50f646bb5983e28c",
      "eventId": "auto-985322c417e5d1df",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyjMHVBiXHXDUbh0yt4AaABAg",
      "date": "2026-10-31",
      "text": "bismillah 😊",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "f76cdfca82d1cf51",
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
      "externalId": "UgyAVGkX1HNRwnssalR4AaABAg",
      "date": "2026-10-31",
      "text": "lg butuh banget",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "694b8e7ccfa6d1ef",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c22b783563819602",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzAUKuy9OO9uPnA6a14AaABAg",
      "date": "2026-11-01",
      "text": "Aamiin ya robbal aalamiin🤲🤲\nHadir menyimak kang singgih",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 1,
      "id": "05ac220f187537b0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8d1a7fe26f0e4767",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzHc-aiJE4EzsgDhg54AaABAg",
      "date": "2026-11-01",
      "text": "Alhamdulillah dri kecil sampai skrg usia 30, blum pernah ngutang smpe berjuta juta, paling besar juga 300rb itupun kepepet karna paket HP abis😅😂",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 3,
      "id": "1e628d759be173a8",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3d0a740898f0ffe1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwG1kUmWCFspkPbfrh4AaABAg",
      "date": "2026-11-01",
      "text": "Alhamdulillah udah lunas pinjol kemarin akulaku bayar semuanya pas gajian😊",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "9889d9b0139e346d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ce4df0f736a1dc4d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx7B1fBOnUK_JBAXXR4AaABAg",
      "date": "2026-11-01",
      "text": "Anda kan skrg JD konten kreator masalah galbay otomatis anda skrg dapat penghasilan dr YouTube dapet duit knp gak dilunasi satu persatu itu tunggakan nya, apakah anda memang tidak akan membayar",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "d71d909d8bcf52a4",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c0eda03602783842",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugydj_HTdgkAN_yOPmx4AaABAg",
      "date": "2026-11-01",
      "text": "Bang sehat slalu,,salam galbayers",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 1,
      "id": "eec956ae15d21272",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-074e67a875048cc6",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwV0m1R_xAgnazAMDx4AaABAg",
      "date": "2026-11-01",
      "text": "Baru kmrn di datangin DC aku laku bang daerah Jateng Purwodadi DC nya sopan pake bahasa Krama,,di kasih potongan juga bang😁",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 5,
      "id": "ee9c8fc3c3698c8e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bb3d68f847d824f8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwYXh4qDoBx2pyPs_54AaABAg",
      "date": "2026-11-01",
      "text": "Beliau bicara sesuai fakta di negri ini 😂",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 281,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "d2aadc4d43057c2e",
      "eventId": "auto-3b1ea803d6a0a9a3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyPKNN1KTA65aT0cnB4AaABAg",
      "date": "2026-11-01",
      "text": "Beliau pamer hutang mantap hidup galbay😂",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "a1ceab69ab100c97",
      "sentiment": {
        "risk": 78.7,
        "label": "negative",
        "negativeWeight": 4.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9373008934cc4fa7",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzEgfD0KUOMQbz2-oZ4AaABAg",
      "date": "2026-11-01",
      "text": "Beneran kalo yg belum prnh jgn coba2 pinjol yg tadinya kita anggap ringan laama2 sangatlah berat benr kata abang tutup lobang gali lobang g habis2 skrg saya lagi tertekan karna sbbtr lagi jatoh tempo saya blm prnh mangalami kesusahan yg berat sprti ini sblm2nya moga ada jalan kluar nya kkarna saya tdk ingin naama di perbankan saya jelek moga bisa teratasi stgh bulan ini amin.. Moga ALLAH SWT memberi jalan kluarnya dan mengapuni kesalahan ini amin....",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "fe0a07c6c10a5db6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b83965f758dbdaa2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwoVXbpdlHVvDtZJKl4AaABAg",
      "date": "2026-11-01",
      "text": "Bukan nya di gopin kemaren 40jutaan?",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 1,
      "id": "08eb408f05be9288",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-16413b23f645c1c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw95j-NrkRfXHWM3yB4AaABAg",
      "date": "2026-11-01",
      "text": "Buset, hampir lunas semua bang",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "f6ae85872afae28c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e8b3aac5bce34e55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgydMD32ASA8rLwr-X94AaABAg",
      "date": "2026-11-01",
      "text": "Dukung kdm,tutup pinjol legal & ilegal di indonesia,OJK buka mata rakyat jd korban karena pinjol.",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 11,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 72.4
      },
      "id": "4d4bb0e02c0389ce",
      "eventId": "auto-1045d95096e3f507",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9LBCLXpNEXPDG8ux4AaABAg",
      "date": "2026-11-01",
      "text": "Fakta Banget apa yg diomongin KDM...",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 342,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "d620aff73c413731",
      "eventId": "auto-cb0d9b994fa37ec8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "FRG_dvTWVfU",
      "date": "2026-11-01",
      "text": "INFO TERBARU NOVEMBER 2026! GALBAY 8 APLIKASI PINJOL! Easycash, GopayPinjam, Spinjam, Akulaku, Dll",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 23275,
      "id": "7ab997604c6dac23",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-164cf3ce84e8a739",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy7BhnjQ6YyODoZjmJ4AaABAg",
      "date": "2026-11-01",
      "text": "Ini baru ada pejabat yg blak2kan membuka buruknya pejabat jaman dulu. \nIni baru Reformasi sebenarnya di negri ini mantap❤❤❤❤❤",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "c4ebc360bff7bc54",
      "eventId": "auto-b2ee897a5e437bfc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx56YV4pWqh5XfgRTl4AaABAg",
      "date": "2026-11-01",
      "text": "Istri nya jahat juga ya😅",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "e6838266b406c764",
      "eventId": "auto-f0f01af4c9b0dec1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnG0dzcLF0N8IaWA94AaABAg",
      "date": "2026-11-01",
      "text": "Itu benar dan sesuai realita di negara Indonesia",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 32,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "c7ecac66b603372b",
      "eventId": "auto-bf9ed24e951747bc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyodms8_1JZcKxlHsx4AaABAg",
      "date": "2026-11-01",
      "text": "Jujur menilai, saat ini pemimpin yg paling paham kondisi desa hanya KDM.",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 10,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "e282c2b57c42d0a6",
      "eventId": "auto-0637b56841ab0c44",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "naAX38tagPU",
      "date": "2026-11-01",
      "text": "KDM SENTIL OJK! Kritik Birokrasi Perbankan, Singgung Pinjol dan Bank Emok | iNews Terkini",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 390268,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "b9509de2833fb77e",
      "eventId": "auto-031d75c8cd7cdc00",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyxlu3yr_lLsLBtieB4AaABAg",
      "date": "2026-11-01",
      "text": "KDM peminpin cerdas tegas tepat apa yg di kata kn👍👍👍",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 47,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "b0bba4acf1fc718e",
      "eventId": "auto-e2a5618ccf8654e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyVJaAzvOCMs2C0kpl4AaABAg",
      "date": "2026-11-01",
      "text": "Kangen sama Aeni",
      "url": "https://www.youtube.com/watch?v=tfot86eLTFc",
      "engagement": 0,
      "id": "df06d23f7a77b471",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cea915d1fd00ed0c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyUwCCmHQkCG9X9fmR4AaABAg",
      "date": "2026-11-01",
      "text": "Keren...ngomongnya fakta dan kebenaran di lapangan.",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 82,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "53bb60f28df8ad76",
      "eventId": "auto-b462698c41008498",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxHQv_-H60BXS2WaJB4AaABAg",
      "date": "2026-11-01",
      "text": "Mantap Pak Dedi \nSering sering bahas ini ke publik biar Rakyat Indonesia cerdas",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "9f77297675a0eb9d",
      "eventId": "auto-297e61f32ed41354",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw7HGkVgyWO2DC5rDJ4AaABAg",
      "date": "2026-11-01",
      "text": "Mantap a Singgih bahas juga tentang pi joy a",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "f1489c4d431209bf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ddfff0d6494d481c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzBKPSGPOkAhPGsvhN4AaABAg",
      "date": "2026-11-01",
      "text": "Mantap😂😂😂😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "cc144be672c8ffac",
      "eventId": "auto-03c5b5bdae5bff03",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4yABKwykkGLG77vB4AaABAg",
      "date": "2026-11-01",
      "text": "Neroko golek isi😄😄😄😄🤣🤣🤣🤣🤣🤣🤣jahanam",
      "url": "https://www.youtube.com/watch?v=tfot86eLTFc",
      "engagement": 0,
      "id": "439b8aac4a4b8486",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-83fb5c1eb22c8358",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyzQZEGUtnYMbNjVit4AaABAg",
      "date": "2026-11-01",
      "text": "Nggak takut",
      "url": "https://www.youtube.com/watch?v=ByP-a964Gbw",
      "engagement": 3,
      "id": "b301bd229eb888cb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8cb76f60c5c6692",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxC0zBNEoDu9x_C1Y14AaABAg",
      "date": "2026-11-01",
      "text": "November 26❤❤❤",
      "url": "https://www.youtube.com/watch?v=tfot86eLTFc",
      "engagement": 1,
      "id": "f4a7adae6163bbf8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-28ce8cc0f2d72266",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3J7ZXbXDfqXJ8OUl4AaABAg",
      "date": "2026-11-01",
      "text": "Nyindir di depan mafia nya langsung... Menyala kg dedi😅",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 175,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "67f33f81142663b6",
      "eventId": "auto-7eef144c0389eea6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxW68vKe2YR3mW0wl54AaABAg",
      "date": "2026-11-01",
      "text": "OJK g berani berantas bank gelap",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 8,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "3af54c98c81fff7b",
      "eventId": "auto-bc700d4b6fd4fe48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXz17bAj2rdbjlNvd4AaABAg",
      "date": "2026-11-01",
      "text": "OJK oooh OJK begitu besar dosa dosamu terhadap rakyat",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 187,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "cfb8d3a86b4f3015",
      "eventId": "auto-9fa662e378e7f192",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzOwe-HCLJTX_-eUFp4AaABAg",
      "date": "2026-11-01",
      "text": "Pas lihat ini greget parah si\nKenapa ditolongin gitu. Memberikan pelajaran ke orang kayak gitu tuh bukan dengan cara dibantu harusnya",
      "url": "https://www.youtube.com/watch?v=kFiO7rJIUHw",
      "engagement": 0,
      "id": "6bb940f22d0e31b5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-94a380e49b7098ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzI7vwBPG8O1zW2Krh4AaABAg",
      "date": "2026-11-01",
      "text": "Pejabat yg tidak tutup mata, semua pejabat konoha tau fakta lapangan, tapi semua tutup mata",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 83,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "15fd3eb12aad2228",
      "eventId": "auto-1a616d1774d77a21",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwyn_zyVpTgbU3Z6k14AaABAg",
      "date": "2026-11-01",
      "text": "Pemimpin yang bukan Nerima laporan asal bapak senang, tahu persoalan masyarakat bawah karena langsung turun ke lapangan... Pidato nya daging semua 😊",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 43,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 45.1
      },
      "id": "5b85b4e83f886cb2",
      "eventId": "auto-45665eb0ca6829f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxvf9BK4hr18VXPr3B4AaABAg",
      "date": "2026-11-01",
      "text": "Pidato tanpa teks tapi bebobit semua mantap bp dedi",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "b0fd60c2cd4b5ffc",
      "eventId": "auto-86e03eca745542a6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9f5BRJaesqtxkhIN4AaABAg",
      "date": "2026-11-01",
      "text": "Pokoknya apa yang dikatakan pak KDM itu benar semuanya",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 23,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "b4dbdc223c774bcc",
      "eventId": "auto-3f0004c3bc3692b2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4hE3PF9EgmIs_ycp4AaABAg",
      "date": "2026-11-01",
      "text": "SUHU GALBAY😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "125825cc33c3bb91",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2c7f808e0218c8c8",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzNsSaUul1weSIM2rp4AaABAg",
      "date": "2026-11-01",
      "text": "Saya galbay KREDIVO 4 bulan di suruh bayar pokoknya saja,,, itu pun bisa di cicil",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 27,
      "id": "06101fef7ce2c42f",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0bb69738df922b7b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxm7HB9--smf-DLHMF4AaABAg",
      "date": "2026-11-01",
      "text": "Sdh jelas OJK MAFIA",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 117,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "d3daedf5a6b6bfa9",
      "eventId": "auto-db76b764bd096909",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxN5YElrJg2wNQak0F4AaABAg",
      "date": "2026-11-01",
      "text": "Semoga bisa di bantu buat beli hp,hp sekarang Oppo a3s sudah lemot dan susah buat ngapa2in bismillah rezekinya melimpah amin",
      "url": "https://www.youtube.com/watch?v=qg8WwFdsMy4",
      "engagement": 0,
      "id": "24bb13dc63e7dcfb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-14dc28a0f02e1724",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxhvNhmqSreRPncAR54AaABAg",
      "date": "2026-11-01",
      "text": "Semua salah,..gak ada saling terbuka jd toxic semua",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "c0342333e3efee99",
      "eventId": "auto-76227f954753f85d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxfUZJchjuQwisAo_B4AaABAg",
      "date": "2026-11-01",
      "text": "Smpe  gojek. Padhl istrinya gaji 2 digit",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "4a7a6d131cd071e5",
      "eventId": "auto-fae08e4edcda3bcc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgztQhgN49kovpm-iBN4AaABAg",
      "date": "2026-11-01",
      "text": "Suami letoy....huaaaa😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "14ef0cd5705bbd11",
      "eventId": "auto-b02278543c7c7b57",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx-hypTCFoV44c4ElN4AaABAg",
      "date": "2026-11-01",
      "text": "Suaminya kelilit pinjol itu gegara istrinya kikir",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "540a1ffbd148a53c",
      "eventId": "auto-bb90ef3fe81412c8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwgLdLb7NRaLXnvuUJ4AaABAg",
      "date": "2026-11-01",
      "text": "Sy kalo liat channel itu ngakak 😂😂😂",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "64fa9dde502e5f45",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9db2af863cf23e34",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxr3vz9EJHC5mFm-Mt4AaABAg",
      "date": "2026-11-01",
      "text": "Sya spinjam 29jt kredivo 3,5 jt tetap stay galbay, fc datang atau ngga hadapi aja dngn baik.. Klo fc datang barbar masa diem aja.. Ttp smngat kawan jaga mental dan pikiran, jngn brpikir jauh yg blm tentu terjadi. Sehat sehat semuanya pnjng umur rejekinya lancar aamiin",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 2,
      "id": "fadf71737a9d8b2d",
      "sentiment": {
        "risk": 57.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-08ac008de7d1a006",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCrOj1IZuPdgyUU2V4AaABAg",
      "date": "2026-11-01",
      "text": "Tutup aja semua bank keliling",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 42,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "f7df68375b82ced2",
      "eventId": "auto-d66949777aadcd4e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzG9KULTcD_9tcv5RF4AaABAg",
      "date": "2026-11-01",
      "text": "Uang suami uangku.uangku bukan uang suami.hah..ada ga modelan istri kaya gini dunia nyata😊",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "d5b33acff8077f47",
      "eventId": "auto-3243c5056c6908c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxk1j1Z4CH5OfSW-Ll4AaABAg",
      "date": "2026-11-01",
      "text": "Yg rekomended dari aplikasi 8 itu yg mana yg, pinjam duit kah...?",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "fba4a3da32283a3e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-30c42e396eb5c404",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw5EJ3FAUdQYqioO3Z4AaABAg",
      "date": "2026-11-01",
      "text": "bahas modal nasional bang",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "cca390f3f5ddb15a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a54c34e9592a9041",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytFxMxpgZpnzPOHjN4AaABAg",
      "date": "2026-11-01",
      "text": "bang saya pencarian pinjaman dana cepat nya, ada bacaan (layanan yang di cari tidak ada)",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "4019b8ffd500d3e2",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b76e6b4e4dfa293",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDVYdL5iwgj6PHUeZ4AaABAg",
      "date": "2026-11-01",
      "text": "betul, itulah kenapa rakyat kecil terpaksa memilih pinjam di bank2 ilagal, karena peraturan dan birokrasi bank2 legal dipersulit untuk rakyat kecil",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 18,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 46.5
      },
      "id": "6700d748c5b59a3e",
      "eventId": "auto-d8497b67e8acfbff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw5x_odAST2XLN7c2p4AaABAg",
      "date": "2026-11-01",
      "text": "bismillah semoga sukses selalu dan diperbanyak rejekinya.\namin",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "7b297e14218caa42",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-478afc004b301a02",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxhQ9UeW5EMRN7DejZ4AaABAg",
      "date": "2026-11-01",
      "text": "istrinya GK mau rugi,trus selalu su'udzon kl suami macem² pdhl dia hrsnya bisa lihat perjuangan suaminya",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "dfbeca6b05b7bcf2",
      "eventId": "auto-aab181661fa2296c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugydunj2BgtqtwWsavt4AaABAg",
      "date": "2026-11-01",
      "text": "semoga pesan yang begitu dalam  dari KDM dapat memnjadi titik awal kesaadaran para elit intelektual untuk dibukakan hati dan pikirannya untuk dilaksanakan seperti yang KDM harapkan.... teruskan konten2 kdm bagi masyarakat luas untuk dapat dicerdaskan terus menerus....",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "2b3fd4e5cbe1d8f8",
      "eventId": "auto-5445f03ad3443ea8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxTsDgb1hYRS1VV6fd4AaABAg",
      "date": "2026-11-01",
      "text": "very true...Bravo..well said KDM 👏",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 26,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "b0ce0494bd3d339e",
      "eventId": "auto-ae4e2a4e9443de07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOK-KWr39B-spSE7Z4AaABAg",
      "date": "2026-11-01",
      "text": "yang bunga 60% per tahun lebih dicari karna gampang daripada yg 12% per tahun yg butuh jaminan",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 16,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "534f1e45b4808cb2",
      "eventId": "auto-b2c1a9a7525579a6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgznbaR3uS7E5wWS0th4AaABAg",
      "date": "2026-11-01",
      "text": "😂😂😂😂\nAsli jujur banget ini ucapan Gubernur Jawa Barat, Emang Fakta nya seperti itu kenyataan di Lapangan",
      "url": "https://www.youtube.com/watch?v=naAX38tagPU",
      "engagement": 21,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "789ace18485ed19a",
      "eventId": "auto-bca13578a73ebd9b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxcqF7N0sljErkc-up4AaABAg",
      "date": "2026-11-02",
      "text": "Aku setuju mba dg menampar suami yg munafik,jahat sama mertua jahatnya",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "4ccceb2eaf18f9d5",
      "eventId": "auto-3b2de88b93ec3893",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyVUzwSz8wpve_z8HJ4AaABAg",
      "date": "2026-11-02",
      "text": "Banyak ni kayak gini 😂😂",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "d71b760114d7550b",
      "eventId": "auto-1c824c9ca2fd0719",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxpocNkLE9Ome-BnJd4AaABAg",
      "date": "2026-11-02",
      "text": "Gak seru utang nya sdh berkurang banyak 😁",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "ddb999e3cb95c3ee",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7fb855295a57c7d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxKxQdh55fPrP2pCvt4AaABAg",
      "date": "2026-11-02",
      "text": "Gatau diri banget heran udh dipinjemin malah marah\"",
      "url": "https://www.youtube.com/watch?v=tfot86eLTFc",
      "engagement": 3,
      "id": "181d0539497f1e33",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ca39d5e81cc60400",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy2_WnABbzk5fC44VJ4AaABAg",
      "date": "2026-11-02",
      "text": "Kadangkala suami tahu pemasukan istri segitu malah santai2😂.. Mangkanya pemasukan istri disembunyikan",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "f08bc978af7352a7",
      "eventId": "auto-4b2fd688658a984b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzHpZdX1gUsiHt7scJ4AaABAg",
      "date": "2026-11-02",
      "text": "Keluarkn lagi cter aini suka tgok",
      "url": "https://www.youtube.com/watch?v=tfot86eLTFc",
      "engagement": 0,
      "id": "a811a23ec2be1376",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-76e4039cae777c24",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxvnnyYX45IBErSNbx4AaABAg",
      "date": "2026-11-02",
      "text": "Kita galbay 1 aplikasi aja GK akan  bisa pinjam di aplikasi lain lah ini sampai banyak aplikasi ko bisa si ACC si",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "f9f470471e3938c9",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-395d4800de3e3ce6",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyAAI5vqKeMwg6yPlp4AaABAg",
      "date": "2026-11-02",
      "text": "Konsep kelompok gini bagus banget, bikin antar tetangga saling jaga dan dukung usaha.",
      "url": "https://www.youtube.com/watch?v=lxcOQvrvJcI",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "60dac341ebe6c5e2",
      "eventId": "auto-269870fb18a937c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgweB0ZsywD8gT2-PdZ4AaABAg",
      "date": "2026-11-02",
      "text": "Mendingan suaminya tanggung jawab cari nafkah. Kalau mba ku dia sendiri yang cari uang suaminya kaya raja gak kerja ambil uang mba ku",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "5e37bf930e7b8c21",
      "eventId": "auto-3763c0579fbfa99e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxF4ysZcLapl__5L-p4AaABAg",
      "date": "2026-11-02",
      "text": "Meskipun uang suami uang bersama,,uang istri ya uang istri,, tapi gak segitunya juga markonah",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "91daf4aab6f1be64",
      "eventId": "auto-9154a8fd43d5ace0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy1gAA6H_4Oeoi9tsV4AaABAg",
      "date": "2026-11-02",
      "text": "Ok mksh",
      "url": "https://www.youtube.com/watch?v=7Z4uJiJ6a9Q",
      "engagement": 0,
      "id": "4cd955835478a508",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7ed477d6a895dc49",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwkr5Ht3a0ZrWiPCOd4AaABAg",
      "date": "2026-11-02",
      "text": "Pidato tanpa teks,hebat bapa aing.",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "826fe01ef9fd1561",
      "eventId": "auto-f82048607d0aa726",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxT-ZgxlBSojjRWFAd4AaABAg",
      "date": "2026-11-02",
      "text": "Saya di Bandung kang, yang baru datang FC lapangan dari Kredivo satu bulan telat bayar, tapi itu juga baik kok dc nya. Yang Tunaiku baru ngancam2 aja mau  datang. Baru dua minggu telat bayar.",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "10f1cf16ba31b563",
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-961d949920dbb2cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxN4LZAYkXLus4MsmB4AaABAg",
      "date": "2026-11-02",
      "text": "mantap suami ,mertua bikin kesel",
      "url": "https://www.youtube.com/watch?v=qgGtRuNR1fg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "1c4c8a96c89b7d71",
      "eventId": "auto-18285920052a7c8c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9hILH-hPXKHLiKd54AaABAg",
      "date": "2026-11-02",
      "text": "tinggal nya dibawah kaki gunung Kawi kali..... atau udah pindah alamat...jelasin tingalnya dimana",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "2fd87e77d9f0183a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d2ac0d38a1a7623",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyvTE2rtsIniDOFyWF4AaABAg",
      "date": "2026-11-03",
      "text": "Doakan semoga usaha bu Yuni dan bu Meinani makin berkah dan melimpah rejekinya.",
      "url": "https://www.youtube.com/watch?v=lxcOQvrvJcI",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "370c1278c34f616d",
      "eventId": "auto-a56431eca308192d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxd0xVZwPrnyrh52AN4AaABAg",
      "date": "2026-11-03",
      "text": "Hadir bang bismilah buat kebutuhan istri sama bayar kontrakan aku dah nyari kerja sama sini blm dapet jg moga d baca komen ku maksih😊 semangat bang ngonten nyh🙏💪",
      "url": "https://www.youtube.com/watch?v=yM7ptkZd61M",
      "engagement": 0,
      "id": "1657e94d6c53f113",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49e1b016f7d160e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4U95jh2PZO_Lkyhp4AaABAg",
      "date": "2026-11-03",
      "text": "Iya loe ga didatengin DC karena DCnya tau Klo loe galbay buat bahan konten. Percuma juga didatengin palingan ntar juga dilunasin.",
      "url": "https://www.youtube.com/watch?v=FRG_dvTWVfU",
      "engagement": 0,
      "id": "b863b8fd18d167a8",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cc7536dfcfd175fd",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxyw4bYMwEdF-5KBA94AaABAg",
      "date": "2026-11-03",
      "text": "Kok betah ch mbk liat muka suami kusut karena mikir utang, bahkan mertua sampai jual kambing buat bantuin... seandainya tetiba suami putus asa trs bundir mbk merasa bersalah apa g?",
      "url": "https://www.youtube.com/watch?v=LyHIChppDNU",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 57.0
      },
      "id": "1d3894efff726074",
      "eventId": "auto-ae7878a06563e19d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGE6i1j1oVxM5Ridp4AaABAg",
      "date": "2026-11-03",
      "text": "LUAR BIASA",
      "url": "https://www.youtube.com/watch?v=c0IT6v1UO88",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "8a0b7a1a5e3c9421",
      "eventId": "auto-3c675ddc58af798a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxeehYkmleWv5u9H0h4AaABAg",
      "date": "2026-11-03",
      "text": "Trimaksih klou bener anda brbagi lancar rejeki nya",
      "url": "https://www.youtube.com/watch?v=qBlHmH2I9UA",
      "engagement": 0,
      "id": "c3c9bd4bf0a30b0a",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e983a049f4b3cf76",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxNbGtOEaZOy1jplCh4AaABAg",
      "date": "2026-11-03",
      "text": "barokah selalu buat PNM yang udah ngebantu perekonomian keluarga prasejahtera.",
      "url": "https://www.youtube.com/watch?v=lxcOQvrvJcI",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "ed4951f90c50a920",
      "eventId": "auto-0eade0d5ba72b58e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_eNu7gMQi_kmxQwl4AaABAg",
      "date": "2026-11-03",
      "text": "berfaedah nih konten2 nya dan menarik",
      "url": "https://www.youtube.com/watch?v=SC0EW7Mu-dU",
      "engagement": 0,
      "id": "320b41dd25a7a400",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bb1c53612d1b1985",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxUcN-IastFLgc5bdB4AaABAg",
      "date": "2026-11-03",
      "text": "luar biasa, semoga konsep pembiayaan berbasis pemberdayaan gini jadi standar nasional.",
      "url": "https://www.youtube.com/watch?v=lxcOQvrvJcI",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "787a7b41ea7f591b",
      "eventId": "auto-0e00953294b181e6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgywACiSrXmsKT_ap3B4AaABAg",
      "date": "2026-11-03",
      "text": "maju terus UMKM Indonesia, bersama rakyat kecil ekonomi bangsa insyaAllah makin kuat",
      "url": "https://www.youtube.com/watch?v=lxcOQvrvJcI",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4fba7719e6286740",
      "eventId": "auto-81ec81cae701d07c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwEDx3EcMFbsF--L1h4AaABAg",
      "date": "2026-11-03",
      "text": "semoga makin banyak yang teredukasi dan memilih jalan pinjaman yang aman dan produktif.",
      "url": "https://www.youtube.com/watch?v=lxcOQvrvJcI",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "3d8968e57253827f",
      "eventId": "auto-a74579ae5f4c1e5d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwep387I-hH2FGYxbF4AaABAg",
      "date": "2026-11-03",
      "text": "smoga Allah membalas semua kebaikan dan kerja keras ibu-ibu pejuang keluarga ini",
      "url": "https://www.youtube.com/watch?v=lxcOQvrvJcI",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "6e4106ca07948a4f",
      "eventId": "auto-4f618b2008831fc4",
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
      "gdelt": "'timeline'",
      "kaskus": "Kaskus hot_threads unavailable after retries: HTTP Error 504: Gateway Time-out",
      "reddit": "Reddit searches failed: indonesia: HTTP Error 403: Blocked | finansial: HTTP Error 403: Blocked",
      "x": "X_BEARER_TOKEN is not configured"
    },
    "socialClassifier": {
      "method": "deepseek_credit_social_v1",
      "status": "ok",
      "inputCount": 514,
      "classifiedCount": 131,
      "irrelevantDropped": 109,
      "model": "deepseek-chat",
      "fallbackCount": 274,
      "labelCounts": {
        "NEG": 76,
        "MIX": 28,
        "POS": 27
      }
    }
  },
  "sourceMode": "live:multi-source-v2.1"
};
