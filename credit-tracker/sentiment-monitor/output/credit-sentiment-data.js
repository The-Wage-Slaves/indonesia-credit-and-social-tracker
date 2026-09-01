const CREDIT_SENTIMENT = {
  "schemaVersion": 2,
  "status": "pilot-pending-human-review",
  "asOf": "2026-09-01",
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
      "detail": "Collected 249 relevant records/signals."
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
      "detail": "<urlopen error timed out>"
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
      "detail": "Collected 516 relevant records/signals."
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
    "suppressedCandidateCount": 13,
    "acknowledgedRetained": [],
    "acknowledgedSuppressed": [],
    "pendingHighSeverity": []
  },
  "weeks": [
    {
      "weekStart": "2026-08-17",
      "weekEnd": "2026-08-23",
      "fearIndex": 72.3,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 69.6,
          "volume": 84.4,
          "negativity": 51.2,
          "itemCount": 86,
          "negativeShare": 10.0,
          "uniqueSources": 57
        },
        "social": {
          "score": 70.2,
          "volume": 85.0,
          "negativity": 55.3,
          "itemCount": 163,
          "negativeShare": 26.1,
          "platformCount": 1,
          "engagementUnits": 229.3
        }
      },
      "components": {
        "newsVolume": 84.4,
        "newsTone": 51.2,
        "socialVolume": 85.0,
        "socialNegativity": 55.3,
        "severeEvent": 86.0
      },
      "articleCount": 86,
      "socialPostCount": 163,
      "uniqueSourceCount": 57,
      "socialPlatformCount": 1,
      "negativeArticleShare": 10.0,
      "negativeSocialShare": 26.1,
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
        "news": "Pilot week-on-week ratio: 10.88x; 2/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 230.27x; 2/8 baseline weeks."
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
        "suppressedCandidateCount": 14,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": []
      },
      "events": [
        {
          "id": "auto-47b121d5bbc6f661",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "383918b74b39f6c3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Dihubungi DC Rupiah Cepat, Klaim Diteror Berbulan-bulan - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7dc1a5e1aa92642a",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "9622582a9a0be502"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "[FULL] UTANG CUMA JUTAAN, MENTAL HANCUR! Pak Bray Bongkar Teror Penagihan PINJOL | Deep Talk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8202f2880124f803",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "e72079147e80ee85"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tips Menghadapi Teroran Dc Pinjol #medybrawny",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-82e0e895604b421e",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "d28ee9f147867326"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pada saat kesulitan bayar bukannya dikasih keringanan tapi malah di ancam diteror oleh DC dan FC sehingga pada gali loba",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-854c98b79986e94a",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "b6a474139a4d292a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Teror Pinjol, Efek Domino Jerat Utang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0529d90cd0db7751",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e1c5aeabe9340aeb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Sambang Warga Bausasran, Bhabinkamtibmas Edukasi Jam Belajar Masyarakat Hingga Waspada Pinjol Ilegal - Polda DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-308bb2e24eee80b1",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "a32db250af69315d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Narasinya Pinjol ilegal terus, padahal yang LEGAL pun sama.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6b3727a9e6fd9e71",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "4e2ea734688a6d45"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sumut.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Propam Polres Tapsel tegaskan personel jauhi judi online dan pinjol ilegal - ANTARA News Sumatera Utara",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-71e72a497df33165",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "87625f6aaeb87697"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sumsel.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hukum Tidak Melunasi Utang Pinjol Ilegal dalam Islam, Penjelasan Ulama - sumsel.tribunnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a54d6e5cfbb295f4",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "b67ea9eab98d6b3c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "karanganyarnews.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Apakah UTUA Pinjol Penipuan? Cek Faktanya Sebelum Meminjam - Karanganyar News - Karanganyar News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8f98e1d38d87ff0",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "dd060d23b5295026"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "memorandum.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Awas Terjerat Pinjol Ilegal, Rusak Masa Depan dan Peluang Kerja Generasi Muda - memorandum.disway.id - Memorandum.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b51ecceaf4b7f28e",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "faa43505eea2113a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Ilegal Bisa Hubungi Kontak di HP, Kenali Modus dan Risikonya - Pikiran Rakyat Jateng - Pikiran Rakyat Jateng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dc17595099bdce48",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e5b1b06c98ea8755"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cooling System, Polisi Gresik Edukasi Warga Bahaya Judol-Pinjol Ilegal - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f2dd26585c12622e",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "c60c0ba81ca068a0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Apakah UTUA Pinjol Penipuan? Pinjam di UTUA Pinjaman Online Apa Bisa? Ini Pengalaman Cara Meminjam Tarik Dana - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-051c0d9df91d289f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "cf31faad4e48bf1b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Galbay nasional biar pinjol bangkrut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-18cb913092cbcad9",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "095e688db21bd40d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semakin hari semakin banyak yg galbay, karena kondisi ekonomi skrg yg lagi susah susahnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46a8105d6375622b",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "e182c62b57bc74df"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kriminal berkedok pinjaman ....ayo galbaykan secara nasional jangan pernah takut lawan mafia mafia rente bahkan lebih ke",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e29b2ab4e3d6c2c",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "a53f3950d98f5040"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SAYA MINTA MAAF! Klarifikasi Galbay Pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-66b12b831a529544",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "4f85db4f535986db"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Intinya,kalau punya duit bayar,kalau gak mampu galbay in aja,.\n\nPemerintah buta dengan masalah pinjol ini.karena mereka ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-84b9ab7992d4628e",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "0ed3f1da6782f848"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Download Kreditku Apk Sfile, Legal atau Ilegal OJK? Apakah Ada DC Lapangan? Pengalaman Galbay Keluar Kondar? - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a74f8fcd79d5b842",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "fff6267c4217436a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Salah satu cara menghapus pinjol ,galbay jgn takut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bf3a86ce30d10ade",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "bc53a40dad8ffc09"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dana Pinjam Pinjaman Daring Apakah Legal OJK, Apa Ada DC Lapangan? Ini Pengalaman Pinjam Uang dan Galbay - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c329e2f95cc93e43",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "779425df9dbd7906"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pinjol pindar sama saja, ojk tutup mata utk hal ini.....galbay nasionall, looossss!!!🤟",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-da16dca85fda7daf",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "c16f70df71cbd483"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SERU.!! SEMUA YANG GALBAY PINJOL LEGAL AKULAKU KREDIVO SHOPEE JULO UATAS DLL,LIHAT INI..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ea326f7d8db51e11",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "b110b83ac1d65c4e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "16 Pindar TWP90 di Atas 5%, OJK Dorong Pindar Manfaatkan AI untuk Cegah Fraud - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-006242c7def125f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "82161791f6cffea3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat sekolah anak sukur\"dpt🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-04761fdd81c15154",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7ce07634feb7c8be"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang semoga dapet rejekinya 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-091166aa49f1f77c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e6c55abed424d889"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bang nyimak... sampai selesai \nsemoga ada solusi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-09d6d4722a857e6f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fda994c837e5bd15"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Penyaluran Pindar UMKM Capai Rp35 Triliun - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-09d96638899e600b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d99446e61a4f9c56",
            "6ccd01a396e098db"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "akurat.co",
            "metrodaily.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Naik 23 Persen - akurat.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0a62d5fdad6ec9be",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "81b42a567bb01317"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rasikafm.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lawan Jebakan Pinjol dengan Solusi 3M dan Penguatan Ekonomi Akar Rumput - rasikafm.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0b2668467b054150",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c38160f595745310"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan salah. Justru yang terlihat wow itu pinjol banget. Memilih untuk frugal living. Jangan beli yang ga ada uangnya. ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0bc703e40f3ba1c2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7d34bafc42848201"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "di maki ? di ancam ? screenshot, sekalian jangan di bayar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d12ccb13dbcadee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b08f9addf6e871a4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tidak Semudah itu bro😂\nLimit ak aj cuma diksh 50K\nUdah kek Main\" padehal transaksi banyak..!!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d2fdafc48e9446c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3a109bbf8980c001"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cakep",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e3a24375f0329fc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c6d5ecdac8bab4b2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "tutup semua pijol saja pak purbaya,,kenapa negara melegalkan pemerasan untuk rakyatnya sendiri seperti pinjol ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0ec7c35cb88571dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c4e291c5f4212104"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga terpilih amin buat biaya kuliah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-103f1dba1dcf8f11",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6116ea4b627da650"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarpalu.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kontribusi Pindar untuk UMKM Semakin Meningkat, Tembus Rp35,12 Triliun - Radar Palu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-11384a8a81693141",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c649f2a05f508595"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pakar Nilai KPPU Perlu Perhatikan Kewenangan OJK dalam Sengketa Bunga Pindar - Media Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1198d7e89b64abd6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7ec76ebcb77c2eac"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gila Bro jokul bininya😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-13bb233837e3526f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "58261ec77266bd29"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat giveaway buat biaya kuliah,,, amin ya Allah 🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-13dd6d9ef5824f52",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "706ba1fffa96e1ed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pindar Tembus Rp105 Triliun, AFPI Dorong Kolaborasi Baru Pendanaan Digital - SWA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-14a7dd18d7c192e3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b5f603c9f88e964c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pa bray.....usahakan biar diagendakan di DPR  pinjolnya biar dihapuskan sepertinnegara cina",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1512bef9ad8b2f3a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d4295c691b23bf67"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bilang 99 apl bang...😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-15ec5962d13ce31e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d8ece1940a1a5f70"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sakali beneran langsung nangis kaya gw🗿",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-16711a1ac7702fd5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d2583d98f685d45c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Iklan pinjol di mana mana, bahkan liat tayangan di YouTube saja 99% isinya iklan pinjol. Miris",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-16d1a88c6983afa2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "816bc836087d7f0b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bener bngt pernah dimaki maki,tak tanyain dari appk apa malah ngelak mulu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-17ca7d9682b2a74c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d193cfbcd84f5227"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol legal maupun ilegal Udah banyak merugikan masyarakat,koq  masih aja dipelihara ya?...dimanakah hati nurani pejaba",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a2e6643d5ed529c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "50fc587dd8326337"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Buka-Bukaan Soal Tantangan yang Dihadapi Pindar Saat Ini - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a4f6edf2ba27868",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f26ac5ca1f45dfdf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perusahaan Modal Ventura Berizin Masuk Radar Pengawasan OJK - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1e23d3c1f2cdb420",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bad8251cef6ccd1d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah, bang semoga rezekinya lancar dan sehat selalu, mudah2an ada rezeki saya disini untuk lunasin biaya sekolah an",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1e639c414f3ab1f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "40fb356cf1a0442c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat orang tua sakit kaka ug baik hati, pengen nyenengin org tua . Bismillah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-20c3f099bff28d0c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c9aa0d9ee21a28f3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bos semoga ada rezeki buat modal usaha...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-21b0328301d2178e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ac13cbbab66bfa3a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "polisi paling jos jis...idaman pelindung masyarakat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-23fb7dac0cb69ea0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c15fc1984d263446"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Iseng² berhadiah, semoga dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2462418c8033dfb6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4c3a12d116ba1eb7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Naik 23,25% Jadi Rp 35,12 Triliun di Semester I 2026 - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24ab1a8e29d8d529",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3750576af0ee1c23"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Panduan Nonton Grand Prix Sepeda Motor 2026 - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-25d0ceeda0fec441",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "556ff62d6ad6cc84"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Menko Yusril Ultimatum Pengusaha: Setop Debt Collector Ancam Konsumen! - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-261a36ee544eea87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4b6d93b632d5a7c7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "misi kak semisal mau pinjam tapi umur kita udah di atas 80 han apakah masih bisa pinjam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2691e3bec78e53f8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "69898acf58ca3329"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "emitennews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar UMKM Tembus Rp35,12 Triliun, Naik 23,25% - Emitennews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-27b65a1b040fc400",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9dc6d4c566fc2a1c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang maaf itu pas minjem uang nya di pake beli beras dan dan beli susu ya trus ga mau bayar,Abang tau ga ga kasus org yg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-293bc1c1e904a5b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8daedcf19772f099"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapet buat beli mesin cukur baru  sehat selalu yg punya vidio",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2a852827c21e609d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d71eb9ee6768c5ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya butuh mendesak bang buat tebus motor turun mesin😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b1f6de866e1cdcc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5d3c46081b3df85f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Desil Warga Solo Naik, Judol-Pinjol Disebut Ikut Jadi Pemicunya - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2c448a548fc11a18",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ed534c38830bef18"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "panjang usia berkah rezeki selalu abang ku 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2ed99f44fd748900",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5d0f09ca364f3aaa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kip.kapuaskab.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Camat Bataguh Ingatkan Awasi Generasi Muda dari Pinjol dan Judol - KIP Kapuas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f032adc53c4d78b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e8d7aa730a253e92"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bakal hancur... Percaya deh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-32c44ff8541ae8af",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "08e435af2ed5f94e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Boleh boz daget nya ... Untuk beli buku anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-33d0e31707de1e41",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db35799ea36ebf93"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir abangku\nSemoga aku termasuk orang yang beruntung karna butuh banget dagetnya buat tambah bayar cicilan motor",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-33e2e7239ed1d031",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a5bd896f796318c3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Didorong Jawab Kebutuhan Masyarakat dan UMKM Daerah - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-355de180923cad45",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2f984819ce4044dc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah kebutuhan keluarga muda mudahan berkah barokah sukses dan sehat selalu bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35e0a012e4e239af",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9785b4e27929d0da"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat selalu bang, tetap beri edukasi yang berharga.",
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
            "acacc03503b29ba7"
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
          "id": "auto-397a06f30b004a00",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0ff576e2e0148451"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadirr lg bang spa tahu beruntung..aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3a74d89a3f4617aa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8249872ccdba3d32"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kontribusi Pinjaman Daring untuk UMKM Meningkat Capai Rp35,12 Triliun - Media Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3aa20aa38b10cac2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9595f1baea4b4197"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Fintech Lending ke UMKM Tembus Rp35,12 Triliun - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ea79a0a7038ad74",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dccf86a47e00a1be"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaramerdeka.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Apjapi Jawa Tengah Dikukuhkan, Siapkan Jasa Penagih yang Kompeten dan Taat Aturan - Suara Merdeka - Suara Merdeka",
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
            "6c2fe62e62afedca"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat buat, kebutuhan sehari hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-400b36548b060884",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "703bb14a90369a78"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lender Asing Rajin Guyur Industri Pindar, Ini Datanya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-419955f1cd1de5b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fb64d855ba01839a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pak Bray.. Polisi berprestasi saat bertugas di Ditnarkoba Polda Riau maupun di Polda Jambi,, semoga prestasi beliau diap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-42f355ee0b9d8687",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c95526c31e62bf86"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sidang Banding Pindar Berlanjut, Pakar Sebut Perintah Lisan Regulator Sah Secara Hukum - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46108b67f1984c48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c00759a68d847a92"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Batas Wewenang OJK dan KPPU Jadi Sorotan dalam Kasus Bunga Pindar - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46c4631a2015dc83",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a1796f7215fbd877"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infopublik.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Program ZCD Berikan Solusi untuk Usaha Kecil, Cegah Keluarga Terjebak Pinjol - InfoPublik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46ed9c711f655a6d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5dd3a848326b12fe"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pangkas Tengkulak-Pinjol, Menkop Kebut 30 Ribu Koperasi Desa Merah Putih - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-482400162987db3c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e0ca7b09224228b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadirr bang semoga rejeki ibuu, untuk beli obatt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4877691cd5b8adbf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6e9203e1822f5d5a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hapus pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48a80dcfa6f70af7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3a20d33df4c2d5c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir slalu bg liat kontennya + subscribe dan like nya juga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49a877160d42d3dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b197b2a76959b011"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.metro.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Sipropam Polres Metro Bekasi Gelar Gaktib, Cegah Keterlibatan Personel dalam Judol dan Pinjol - Tribratanews Polda Metro Jaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4a5863b0ecfe3037",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8bcff196b0923621"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang tolong bantu saya,,demi Allah saya lagi kekurangan uang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4a6e40972b266c59",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "130c26e2a80ff29a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga dapat rejeki anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4b70d6cda13c8b13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "81c234d46d348777"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koran-jakarta.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Sampai Kecolongan! Dana Pindar Makin Deras, Pengawasan Harus Diperkuat - koran-jakarta.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d0d7b6828931a9d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6a45280b991b1d81"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "topbusiness.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jaga Kepercayaan di Era Digital, Easycash Perkuat GRC Berbasis Teknologi - TopBusiness.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4ecf356810253f39",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5b0b5d14cd6b8e49"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang maaf mau tanya.. uang me aplikasi resmi ap ilegal??",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4f6bc9ffaa6d14cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "447266cb61d00cff"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga beruntung bang, buat sewa motor untuk ojol. aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4fc49d3e8266f1bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eb6089711978ef18"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol bener bener menjebak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-510eac2da278d349",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1ab1ce2a13af3fb0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang, bismillah semoga dapet buat bayar kontrakan bang🙏sehat selalu murah rejeki bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5156e439218891b4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1cd6247f9544a2f1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "16 Pindar Kredit Macetnya Tinggi, OJK Ingatkan Risiko Ini - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53559b17e9964303",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4c2e876aac8976b9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bali.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Koster minta penyalur pembiayaan pinjaman daring banyak sasar sektor produktif - ANTARA News Bali",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-535758102cc9ab45",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dc4d858a8c217915"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Simak Upaya Memajukan Ekosistem Pinjaman Daring RI - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53fc317ddfbf55dd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0bff033876a67df1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau dong dana gratis nyaa,seumur2 belum pernaah dapeet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-546426c637140c04",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "25395d479d9ce392"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga bermanfaat buat saya dan orang lain ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59bd26c1d841f33c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4fc7e3bb3369f4f6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah\" n 17 agustus ini dapet dana merdeka ya bang ,bismillahh 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a928a11004c2436",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cd6b00d79d961794"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "assalamualaikum bang, sehat selalu bang, selalu berbuat baik🎉\nsemoga bisa dapat buat nenek biar bisa jualan gorengan lag",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5aba1915715c4eda",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ffd963e07db3e2ee"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "women.okezone.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mengatur Jadwal Liburan Lebih Leluasa dengan Layanan Paylater - women.okezone.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5bab344f2041f5a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b29ea18924f83c7a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "diksimerdeka.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Koster Ajak Industri Pindar Jadi Mitra UMKM dan Pelaku Usaha Bali - diksimerdeka.com",
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
            "d1ce6f6cb125a4f8"
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
          "id": "auto-5ddecede8283de84",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7ddd13b9c3722373"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gen Z & Milenial Terjebak Pinjol: Data OJK Bikin Merinding + Solusi Cepat Bebas Utang! | Money Lab - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5f9aced71d3b5913",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "820b188c8935e05d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Harusnya dc ini ditangkap penjarakan jgn malah diberi ruang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-600016be0ea2049e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f42b033781e1cf4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Wkkwkkwkk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6063b341a92050f9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6971e41fc0f9c01a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tv.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bukan Sekadar Bunga Pinjol, Ini Pertarungan Soal Kewenangan Regulator - Kontan TV",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-621ea5ff73e660c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "37f12db3cdb21452"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Betul bang, Sebelum menikah harus terus terang sama calon istri.\n\nSemoga lancar sampai hari H bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63f4acb706479ab0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1ddf15004bbdf6a5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat jajan anak SM beli sendal anak..mudah\"an Allah denger doa sayaa lewat jalur Abang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63fddcec60a08b1c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ac777f676cc247eb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang mudah mudahn dapat buat nyabutin gigi anak 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-663079081c242732",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "930b50ed72d93daa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nusabali.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Koster Dorong Pindar Lebih Banyak Biayai Sektor Produktif - NUSABALI.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6729036fcbc36bc3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "55ad7de49dcd1b25"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tapi ini udah yebari data itu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-68df498d3486b386",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ebc82de4feda1017"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Makin Diminati UMKM, Pembiayaan Pindar Melonjak 23,25 Persen - BeritaSatu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d12a3526fca3b11",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "783f594cc943a314"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hapus saja pinjol. Legal sama dengan ilegal. Legal tidak sesuai OJK. Bunga mencekik. Pinjam dan harus kembalikan 14 hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d599ff605cc7962",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3dcf509402f7b3d7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gadget.qoo10.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pindar ke UMKM Rp35,12 Triliun per Juni 2026 - Qoo Media",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-70cbb95fc828e8e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7d5c508eae8f32a3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nusabali.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Outstanding Pindar Tembus Rp105,14 Triliun, Industri Didorong Perkuat Pembiayaan Produktif - NUSABALI.com",
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
          "id": "auto-7319d7aa5be94dc5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5ac71e2db59a0032"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet buat biaya kuliah😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-750bb2f8b58aa9ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "174119aba7e4b530"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini pejabat yg masih mau membantu Rakyatnya , semangat pak 🔥🔥🔥🔥",
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
            "2f2d4dc6e194f16c",
            "4cba156cfd184abd"
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
          "id": "auto-754aef46ecfbac26",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b5995ae425b13df0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah lah.semoga rezekinya berbagi BG🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-760685abb453b8d6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9de9b3023f3468ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol itu juga merusak ekonomi...",
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
            "0156e9967404bdd2",
            "7bf6f3d7274b6468"
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
          "id": "auto-79810edf363968b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ba44258d1e419056"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat bantu tetangga yang listriknya di putus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b0710a5d0b4c683",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ea59424781024e12"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pak Bray, semoga tugasnya dimudahkan dan dilancarkan rezekinya karena banyak membantu masyarakat berkaitan dengan masala",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7db2823245037aac",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2dd58d2b4be069ce"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Update Denda Rp755 Miliar Pindar, Pakar Tegaskan Lembaga Tak Bisa Lampaui Kewenangan OJK - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7e390009a21d8382",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "29f2f19b60745cdb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih bang Singgih atas edukasi dan motivasi nya, aku jadi lebih kuat tanpa galob lagi, walaupun skrg masih berjua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f4600c046ae54c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f81c7334fc74cf82"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantaabbbb ....maksih Abang....🙏💪🇮🇩",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-845a85bcd69665cd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "48eaf7c9990cbfa9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah bang, semoga dilancarkan sampai acara selesai.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-84ea892ff6b013f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4f4d054e20fe48ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tks bang infonya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-860c8f883e7b5241",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cbc5915e23e71456"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Digital Makin Besar, Industri Dorong Masyarakat Lebih Bijak Berutang - MetroTVNews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8792b9ccf4dd1761",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "592e4cad225557d8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Setuju Bang sehat selalu ya utk mengedukasi pinjol. 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8855442763b4bc5e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "13554317c2939ac2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Halo bang semoga sehat selalu dan tambah rezekinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a1d884377a26e2a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "33c03ce0ddb4a665"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "GADA BACAAN AKTIVASI NYA CO",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a357f21c5d4219d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6a651d7cfdfeb6af"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "setuju bang terimakasih infonya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8b8ab13a30a5c51b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7528bd46525e24b6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga jadi Kapolri Pak Bray... biar rakyat aman sentosa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c85c5123be15c81",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5fd8946297c0de3e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pindar OJK harus dihapuskan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8d25e3e1e401e605",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "19cb2232508fb0d8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Untuk diri sendiri stop utang stop riba hidup tenang tanpa utang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8dedf6964abe4731",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a169bdab7089bb59"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pintar Usung Pendekatan Teman Atur Uang Dalam Pinjaman Daring - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e3d016ea100b9b9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c2bf918b2aaf6d52"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemerintah harus lihat ini... semoga pinjol legal ilegal ditutup",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8fecc519ebe1e341",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2f99e1a409b0a56a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang aku butuh uang bang buat beli mesin cukur baru soal nya sudah tidak layak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-90502987b760353e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f69d1095d275c0ca"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat. \nBerkah selalu kk 🤲 \nBuat kebutuhan anak.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-91ffa99a8e358a18",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fcfb23a68987d6b9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Masih Dalami Implementasi Asuransi Kredit untuk Fintech Lending - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-952ccc65520ac067",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b7b40e589a8b7e78"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Link https//down.vee-dana.cc/j52nct Aplikasi Veedana Sfile Pinjol Apk Cair Rp 80 Juta, Download Vee Dana - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97f6bac0a5559e50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2db130b5d5a80211"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat servis motor buat kerja besok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-983373817e68a482",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c566e9051a2dd50b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "muda mudahan rezekinya bisa membantu ya kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a3f470ea8a41e52",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db0ed9999c465515"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir kawan bismillah semoga dapet buat usaha",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9e9cdd7501e8fa41",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a4562639d2330a34"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "medcom.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Akses Pinjaman Digital Meluas, Ini Pentingnya Jaga Arus Kas - medcom.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a093fb1ab0b2664d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3faf26e96c5d6c97"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet buat tambah tambah tabungan beli laptop buat kuliah hehe🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8a5b3c4328b05c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0d39a3feb1513668"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hayo loh di keluarin dari kk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac1e568637282ee8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "209c50966eec0ce6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selalu support Abang dari dulu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ad56f202e29b7189",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8a40050c08824aed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir untuk bertahan hidup akhir bulan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-adaaea85164b6c6f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b6594350d7269970"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "harianterbit.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Doktor Ilmu Hukum UP Ini Dorong OJK Batasi Jangka Waktu Bunga Berjalan Pinjol - Harian Terbit - Harian Terbit",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-af0dcb46d6c72055",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3b48545a33874699"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah mudah2an dapet buat ongkos jemput anak istri di kmpg amin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-afe1157dafda3da6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dc614988eb709629"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Siap bang.... trima kasih sarannya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b212b551f0c67409",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2394673944527667"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagi\" dong saldonya 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b25f58b7306110dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e417a295e4a99d4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol emang bikin rusak negara kita indonesia ,berantas pinjol pak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b30707df6a3af4c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e86a9ce3698500c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah lagi urgent banget butuh dana buat hari ini lagi kepepet banget motor abis bensin di pinggir jalan🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b320715239383677",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cc1a12301c9b93f5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat bayar token listrik boss.  Bagi bossku😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b3b151c4cef5e1cc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "63ad4e51de625c61"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah dapet untuk beli mesin cukur baru untuk kerja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b4553f4bb2a0d3d8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bfccd7518ec6efbb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga rejeki ..buat pulang kampung udah 2bln gak ketemu anak ...oleh merantau ...smoga ada rejeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6fe805a2d775c68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8c6aaf6b8fc2868d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "apa cuma saya yang serang balik mereka dengan melaporkan iklan2 pinjol di youtube sebagai spam? ayo kawan bergerak lawan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b748166ba3403d68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "61cd4d65db91f1e7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya perlu dana gadget untuk biaya sewa kontrak an yg sudah nunggak dan biaya anak . Sehat terus abang lancar rejekinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b8efd9a882fd72c9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "14519ed59476fe0f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah hadir bosku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bb7b0546db9430c5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b3f002eb0cd146db"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Salam kenal dari Kota Tanggerang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bb855480e79678a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fd94b815690c4544"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pengawasan pindar perlu diperketat guna cegah penyalahgunaan dana - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bc146be463c8e7cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "361328f84f3f48fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah smga ada rezeki.buat sunatan anak laki laki saya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bcae7f5f94bdfbc4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ff3890d4185f814f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "instagram.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Berantas Judol-Pinjol di Internal Polri, Bidpropam Polda Jateng Periksa HP Ratusan Personel Polres Sragen SRAGEN — Bid Propam Polda Jawa Tengah bersama Si Propam Polres Sragen menggelar kegiatan Penegakan, Penertiban, dan Disiplin (Gaktibpli - instagram.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bccfc647ec2a1fe7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5578066bceb358b1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gosumut.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun - GoSumut.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bde3a1a6ce8d6073",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4de3e8b6963fb9a8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pas di ketik koq gk muncul ah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c1e3804dabfa1688",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3c41db7051b575e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang punya saya kok GK pernah keterima yaa padahal gak pernah ada pinjaman",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c30faf4353d928ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7c7ddeca8c33247a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir sukses mase🎉",
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
            "e54c3887db590937"
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
          "id": "auto-c665603b343ebcd3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "87c05d27ac181777"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Koperasi punya produk pinjaman itu hal yg normal, tp apakah infrastruktur pengelolaannya sudah siap?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c7ad31eabeec5a62",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "04d6aeeb2ca571ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Harus lebih banyak di viralkan lewat media begini agar pemerintah segera menutup pinjol ini.Berkah buat negri ini.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c7f90ed209cf7c86",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e3adcb757ccf13af"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Banyak orang pinjol gk bayar merasa seolah korban, padahal dialah tersangkanya.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ca46b6c07d528eae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ef3b5cba1f0fb853"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Setuju Bang..🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cc0a2c543e2cdbc2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "61c2bae02728eae4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "dc nya takut 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ccc18414c1ed80c2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8735bc980f0eacc4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, dana kaget dibagikan jika video ramai mau buat kbtuhan apa 👇 https://link.dana.id/d",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd895939da2034e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a270bd1a6f914c44"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet buat kebutuhan sekolah sehat selalu bang dan suk ses Terus,🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0432f216f6d524b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6da80ccf7aa832da"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Guru-Siswa di Gianyar Diberi Literasi Keuangan Cegah Jeratan Pinjol-Judol - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d2b6a89a9cf57548",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "27317773e6e1be7e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadirr lg bang spa tahu beruntung..buat bayar kontrakan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d2f7a27de5f0ab2e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b85131a649bc29b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "yang setuju ditutup semua pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d426997a159f85ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "52869ff1599c9c6c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aku kalau udh di keluarin dari kk langsung minta maaf ke semua keluarga 😭😭😭😭😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d4b78e04da627d8a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "17f2314f1544ade6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kl.pun dulu misal punya pinjeman dipinjol kan rubeen jg yg bayaar .knp sarwen kepanasan ..itu fitnah..modelan ruben mana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d57e66cb97f1609a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f281c291e71467eb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bahkan nasabah mau bayar pokoknya saja tdk ditanggapi..sengaja di biarkan berhari supaya bunganya nambah..sungguh smg pa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d61110564bf7cbf6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5102795e696770da"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "waspada.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Propam Polres Tapsel Razia Judol dan Pinjol Anggota - waspada.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d649fa914a65ed00",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dfd6151df1318a3d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Setuju banget bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d7df6f37757282d8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "10f91a81456d6bc5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pak bray adalah contoh polisi baik yang lantang berani menyuarakan keresahan dan permasalahan yang ada di masyarakat dan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-daae7c7ae2b06b94",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f2ce4d9d3ce4833f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bwng semoga sehat selalu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db6b20eff40a4cd1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2de90723bcefbe83"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "HADIR SEMOGA DAPET DANA KAGET BUAT BAYAR UANG SPP SEKOLAH SOALNYA LAGI SUSAH GEMPA+ORTU PEKERJA BURUH😢🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db940f4bc3d3052d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "81754e394211b0e8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mksih bang pencerahan nya 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dc30ea052bae727a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bdcc4feaccf2d1b6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Makin Deras, Tembus Rp 35,12 Triliun per Juni 2026 - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dc7e3e052e7cc407",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9b984a455b012533"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jalantikus.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "10 Aplikasi Pinjol Umur 18 yang Gampang Cair, Resmi OJK! - jalantikus.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dd23feb52b31b51a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c83d1d778fd3b133"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selalu menyimak bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dd89420d91300ce9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "818b301fef36817b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kontribusi Pindar untuk UMKM Semakin Meningkat - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e020d25b71439dcc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cd09ddd8e665ff13"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah kak moga dapet buat bayar sekolah anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e163cf86e2491e92",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1893ffa11393f95f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yang diuntungkan hanya pemodal dan petinggi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e1d0fdcf1ba3f2e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a6df9ab462820814"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sekitar Rp105 Triliun Dana Pindar Beredar, Rp35 Triliun Masuk Kantong UMKM - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e253ee4841204593",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c1ad1cce75f62d4d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Moga ada rezekinya buat biaya renang kedua anak Aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e25d28cc9db6d53f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b7a4ffa1f1d77825"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga saya  beruntung bang untuk bayar hutang",
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
            "1103d3b615f477f9",
            "8c4722c327fcbd8b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "🤣🤣🤣",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e452658b77e51c71",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "48836209421fc13c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang cara menghubungkan emet id gmna bang?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e4f960aa14ac7ead",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "66465eb7bd57c156"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat amin sehat\" selalu abng ku❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e748d7ed059f9f0f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "714f4d92be9f3a50"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DEMI GENGSI KELILIT PINJOL⁉️😬@RbrainProject",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e781e44f023658d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3026346dc1690fed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarcirebon.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Legal OJK Bunga Rendah Agustus 2026 Cair 5 Menit, Ini yang Perlu Dicek Sebelum Mengajukan - radarcirebon.disway.id - Radar Cirebon",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e7ea14510fa5d857",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "40b05875ad8ea50b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap mas bro solusi Nya terima kasih",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e86050deaa91b69b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6a1da5a46b881dcd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini org kn DC ko bikin Chanel 😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e97fa3b3f63588e1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "862ec8e8bd9b6cdb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga rejekinya abang makin lancar aminn yallah 🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ecddfafc362b2642",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "208b5b0794d95d55"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadirr juga..smga rejek anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee54a20ac77afd31",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "27873606364896f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga abang yg baik memberikan give awayna sama aku,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef2f532320901ba0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9b29ea5cf5953866"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Fintech AdaKami Masih Temukan Entitas Ilegal yang Mengatasnamakan Perusahaan - kontan.co.id",
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
            "c230356dda0a7a2e"
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
          "id": "auto-f0b7d74d6a041ea7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3d7a39fbf51d3bec"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Pendanaan Lender Asing di Pindar Melonjak ke Rp17,28 Triliun Semester I/2026 - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f142bad10694fda4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7709787ea03d378c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah buat buka usaha ternak ikan dan ayam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f187a467cee7f70f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b949bcced50e3af4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ekbis.sindonews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pintar Dorong Masyarakat Lebih Bijak Manfaatkan Pendanaan Digital - SINDOnews Ekbis",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f2e158053139f4f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "37bc9e98ac342608"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Miris negara ini banyak hutang malah rakyat nya ikut ikutan ngutang.... Sungguh ironis!!!!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f4fd45c924dd4ef4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "85110b10ed5b42a6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udah paket lengkap, bismillah untuk melunasi hutang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f68d8f1e7130221f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c0d02a9a9491c64b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah seberat apapun, dgn tempat tinggal sederhana, rumah paling kecil di gang komplek, kendaraan paling butut d",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f6be1ad92b98f2c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96c6147022b969cb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat selalu kak🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f71bb43d3547bedf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "68daf8bf94d5b71a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "4 Alasan Shopee Pinjam Belum Cair Padahal Sudah 3 Hari Sejak Pengajuan - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f9d1e58408f6d513",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7c800c95cd010263"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bali.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pinjaman Daring (Pinjol) Bakal Fokus ke Pembiayaan UMKM - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fa7a4ef6e6c739b3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b1084699a7e6b96"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini polisi baik , di Jambi dulu bagus , di sayang semua masyarakat.❤❤❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fb881e2a27b11a1c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4115514b8518493a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bissmillah berkah barokah bang semoga terus berkembang  chenell nya..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fbb90dcfe42c0aa4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca5d57b8ab221975"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat selalu orang baik, karena dengan berbagi tidak akan menjadi miskin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fbb999f761f10899",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ef2da891b0bb9999"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat bg somaga sukses",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc0ce2eb18e243d5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a196c12b250870ab"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penyesuaian Bunga Ultra Mikro Dinilai Berdampak terhadap Pembiayaan Produktif Pindar - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc416ed832dd5850",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "81e079427d0084e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah yallah semoga sehat selalu Abang dan makin lancar rejekinya aminn yallah 🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc484dfe691e6f69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f222b93b219a5762"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga di murahkan rezekinya di beri kesahatan semua keluarga dan semua yang nonton ❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe763df3e5b2efc9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c96092ed7bbabb5b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.metro.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Polres Kepulauan Seribu Cek Ponsel Anggota, Pastikan Tak Terpapar Judi Online dan Pinjol - Tribratanews Polda Metro Jaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ff11820100355b1c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fd6286191935f23f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemprov Bali Dorong Pindar Menyalurkan Pendanaan untuk UMKM dan Ekonomi Kreatif di Bali - SWA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "pindar-tadpole-practice-2026-07",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1ffd6e9da0b63371"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Benar skema tadpole pindar jelas menipu masyarakat tapi tidak dilarang OJK !!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-29b390a5d76f2557",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "2d6ddb57fef6b480"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "batamtoday.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan UMKM Lewat Pindar Capai Rp35,12 Triliun, Tumbuh 23,25 Persen - Batamtoday.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4708c930a12c36dd",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "91ce7f0c75e9a449"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "duniafintech.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Permintaan Fintech Lending Tumbuh : AdaKami Soroti Transparansi - Dunia Fintech",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8160362a3c8c8569",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "19a17019d12e4776"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "liputan6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peran Pindar Makin Besar, Pembiayaan ke UMKM Tumbuh 23,25 Persen - Liputan6.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bda4fdf445a64e1e",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "abeb46890e35e7c4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Credit Gap Rp2.400 Triliun, Industri Pindar Masih Punya Ruang Tumbuh - SWA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0400c2abbbe195f",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "2df66e8ac3ff929d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pindar ke UMKM Tumbuh 23,25% hingga Juni 2026 - detikFinance",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d16e6a097d701d1c",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "74afe69baee02868"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jurnalmakassar.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pinjaman Daring ke UMKM Tumbuh Jadi Rp35,12 Triliun per Juni 2026 - Jurnal Makassar - Jurnal Makassar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e6b9259702efea90",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "84df4d420e536ef8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Pembiayaan pindar kepada UMKM tumbuh 23,25 persen per Juni 2026 - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eb5e21d56843be1c",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "8e30380c0be4f8b3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "newsurban.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tumbuh 23,25 Persen, Tembus Rp35,12 Triliun - Newsurban",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee11ca5289561f7b",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "fa5f5cd2b31705c2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "waspada.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kontribusi Pindar Untuk UMKM Tumbuh 23,25 Persen - waspada.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f88fef5f314c258f",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "6d9afa6502dc61c0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tumbuh 23,25 Persen Jadi Rp 35,12 Triliun - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "9b29ea5cf5953866",
        "1cd6247f9544a2f1",
        "dccf86a47e00a1be",
        "0ed3f1da6782f848",
        "87625f6aaeb87697",
        "81c234d46d348777",
        "703bb14a90369a78",
        "556ff62d6ad6cc84",
        "fcfb23a68987d6b9",
        "3d7a39fbf51d3bec",
        "3750576af0ee1c23",
        "fd94b815690c4544",
        "3026346dc1690fed",
        "68daf8bf94d5b71a",
        "e5b1b06c98ea8755",
        "6a45280b991b1d81",
        "81b42a567bb01317",
        "69898acf58ca3329",
        "91ce7f0c75e9a449",
        "a1796f7215fbd877",
        "e1c5aeabe9340aeb",
        "a6df9ab462820814",
        "22c9716a28748728",
        "9b984a455b012533",
        "b110b83ac1d65c4e",
        "ffd963e07db3e2ee",
        "c649f2a05f508595",
        "f26ac5ca1f45dfdf",
        "5102795e696770da",
        "4e2ea734688a6d45",
        "c95526c31e62bf86",
        "dc4d858a8c217915",
        "2dd58d2b4be069ce",
        "50fc587dd8326337",
        "c00759a68d847a92",
        "6971e41fc0f9c01a",
        "abeb46890e35e7c4",
        "5d3c46081b3df85f",
        "7ddd13b9c3722373",
        "6da80ccf7aa832da",
        "706ba1fffa96e1ed",
        "818b301fef36817b",
        "8249872ccdba3d32",
        "b29ea18924f83c7a",
        "b7b40e589a8b7e78",
        "9595f1baea4b4197",
        "3dcf509402f7b3d7",
        "2df66e8ac3ff929d",
        "84df4d420e536ef8",
        "7d5c508eae8f32a3",
        "5dd3a848326b12fe",
        "bdcc4feaccf2d1b6",
        "4c3a12d116ba1eb7",
        "d99446e61a4f9c56",
        "6d9afa6502dc61c0",
        "8e30380c0be4f8b3",
        "2d6ddb57fef6b480",
        "19a17019d12e4776",
        "c96092ed7bbabb5b",
        "b197b2a76959b011",
        "383918b74b39f6c3",
        "c60c0ba81ca068a0",
        "dd060d23b5295026",
        "5d0f09ca364f3aaa",
        "bc53a40dad8ffc09",
        "fa5f5cd2b31705c2",
        "4c2e876aac8976b9",
        "ebc82de4feda1017",
        "fda994c837e5bd15",
        "6ccd01a396e098db",
        "fd6286191935f23f",
        "faa43505eea2113a",
        "a4562639d2330a34",
        "b67ea9eab98d6b3c",
        "ff3890d4185f814f",
        "b6594350d7269970",
        "7c800c95cd010263",
        "6116ea4b627da650",
        "930b50ed72d93daa",
        "b949bcced50e3af4",
        "a169bdab7089bb59",
        "74afe69baee02868",
        "5578066bceb358b1",
        "a196c12b250870ab",
        "a5bd896f796318c3",
        "cbc5915e23e71456"
      ],
      "socialItemIds": [
        "0156e9967404bdd2",
        "2db130b5d5a80211",
        "6c2fe62e62afedca",
        "4115514b8518493a",
        "27317773e6e1be7e",
        "f81c7334fc74cf82",
        "c16f70df71cbd483",
        "9785b4e27929d0da",
        "66465eb7bd57c156",
        "ef3b5cba1f0fb853",
        "b6a474139a4d292a",
        "1893ffa11393f95f",
        "1ddf15004bbdf6a5",
        "f222b93b219a5762",
        "52869ff1599c9c6c",
        "f281c291e71467eb",
        "ba44258d1e419056",
        "b5995ae425b13df0",
        "f69d1095d275c0ca",
        "bad8251cef6ccd1d",
        "0d39a3feb1513668",
        "4f85db4f535986db",
        "4fc7e3bb3369f4f6",
        "c2bf918b2aaf6d52",
        "d8ece1940a1a5f70",
        "c83d1d778fd3b133",
        "c4e291c5f4212104",
        "592e4cad225557d8",
        "dfd6151df1318a3d",
        "7d34bafc42848201",
        "447266cb61d00cff",
        "1b85131a649bc29b",
        "5b0b5d14cd6b8e49",
        "816bc836087d7f0b",
        "d4295c691b23bf67",
        "2f984819ce4044dc",
        "58261ec77266bd29",
        "5ac71e2db59a0032",
        "3a109bbf8980c001",
        "714f4d92be9f3a50",
        "ac777f676cc247eb",
        "7c7ddeca8c33247a",
        "04d6aeeb2ca571ce",
        "820b188c8935e05d",
        "37bc9e98ac342608",
        "d28ee9f147867326",
        "ca5d57b8ab221975",
        "ef2da891b0bb9999",
        "dc614988eb709629",
        "c230356dda0a7a2e",
        "55ad7de49dcd1b25",
        "e72079147e80ee85",
        "4f4d054e20fe48ba",
        "f2ce4d9d3ce4833f",
        "ed534c38830bef18",
        "7bf6f3d7274b6468",
        "9dc6d4c566fc2a1c",
        "8bcff196b0923621",
        "25395d479d9ce392",
        "a270bd1a6f914c44",
        "82161791f6cffea3",
        "cf31faad4e48bf1b",
        "acacc03503b29ba7",
        "1ab1ce2a13af3fb0",
        "3a20d33df4c2d5c0",
        "208b5b0794d95d55",
        "0ff576e2e0148451",
        "13554317c2939ac2",
        "783f594cc943a314",
        "6a1da5a46b881dcd",
        "c15fc1984d263446",
        "81754e394211b0e8",
        "fff6267c4217436a",
        "d71eb9ee6768c5ce",
        "61cd4d65db91f1e7",
        "96c6147022b969cb",
        "209c50966eec0ce6",
        "2f2d4dc6e194f16c",
        "8c6aaf6b8fc2868d",
        "779425df9dbd7906",
        "27873606364896f8",
        "6a651d7cfdfeb6af",
        "1103d3b615f477f9",
        "3c41db7051b575e0",
        "e3adcb757ccf13af",
        "3b48545a33874699",
        "cd09ddd8e665ff13",
        "130c26e2a80ff29a",
        "cc1a12301c9b93f5",
        "7ec76ebcb77c2eac",
        "2de90723bcefbe83",
        "7ce07634feb7c8be",
        "db0ed9999c465515",
        "8a40050c08824aed",
        "d2583d98f685d45c",
        "c38160f595745310",
        "17f2314f1544ade6",
        "a32db250af69315d",
        "4cba156cfd184abd",
        "095e688db21bd40d",
        "d1ce6f6cb125a4f8",
        "8f42b033781e1cf4",
        "e86a9ce3698500c4",
        "361328f84f3f48fb",
        "61c2bae02728eae4",
        "9e0ca7b09224228b",
        "c566e9051a2dd50b",
        "c6d5ecdac8bab4b2",
        "2f99e1a409b0a56a",
        "63ad4e51de625c61",
        "14519ed59476fe0f",
        "8daedcf19772f099",
        "40fb356cf1a0442c",
        "e54c3887db590937",
        "6e9203e1822f5d5a",
        "2b1084699a7e6b96",
        "e182c62b57bc74df",
        "40b05875ad8ea50b",
        "8735bc980f0eacc4",
        "c1ad1cce75f62d4d",
        "b5f603c9f88e964c",
        "ea59424781024e12",
        "fb64d855ba01839a",
        "4de3e8b6963fb9a8",
        "eb6089711978ef18",
        "9de9b3023f3468ed",
        "d193cfbcd84f5227",
        "3faf26e96c5d6c97",
        "b08f9addf6e871a4",
        "85110b10ed5b42a6",
        "19cb2232508fb0d8",
        "9622582a9a0be502",
        "cd6b00d79d961794",
        "7709787ea03d378c",
        "e6c55abed424d889",
        "48eaf7c9990cbfa9",
        "c0d02a9a9491c64b",
        "2394673944527667",
        "e8d7aa730a253e92",
        "1ffd6e9da0b63371",
        "37f12db3cdb21452",
        "862ec8e8bd9b6cdb",
        "81e079427d0084e0",
        "08e435af2ed5f94e",
        "33c03ce0ddb4a665",
        "db35799ea36ebf93",
        "c9aa0d9ee21a28f3",
        "174119aba7e4b530",
        "87c05d27ac181777",
        "0bff033876a67df1",
        "5fd8946297c0de3e",
        "9e417a295e4a99d4",
        "a53f3950d98f5040",
        "b3f002eb0cd146db",
        "7528bd46525e24b6",
        "bfccd7518ec6efbb",
        "b7a4ffa1f1d77825",
        "29f2f19b60745cdb",
        "48836209421fc13c",
        "4b6d93b632d5a7c7",
        "10f91a81456d6bc5",
        "ac13cbbab66bfa3a",
        "8c4722c327fcbd8b"
      ],
      "_newsVolumeRaw": 86,
      "_socialVolumeRaw": 229.3
    },
    {
      "weekStart": "2026-08-24",
      "weekEnd": "2026-08-30",
      "fearIndex": 60.9,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 56.6,
          "volume": 60.9,
          "negativity": 51.1,
          "itemCount": 119,
          "negativeShare": 4.9,
          "uniqueSources": 86
        },
        "social": {
          "score": 54.2,
          "volume": 55.3,
          "negativity": 53.2,
          "itemCount": 216,
          "negativeShare": 13.5,
          "platformCount": 1,
          "engagementUnits": 282.0
        }
      },
      "components": {
        "newsVolume": 60.9,
        "newsTone": 51.1,
        "socialVolume": 55.3,
        "socialNegativity": 53.2,
        "severeEvent": 92.0
      },
      "articleCount": 119,
      "socialPostCount": 216,
      "uniqueSourceCount": 86,
      "socialPlatformCount": 1,
      "negativeArticleShare": 4.9,
      "negativeSocialShare": 13.5,
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
        "news": "Pilot week-on-week ratio: 1.38x; 3/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 1.23x; 3/8 baseline weeks."
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
        "suppressedCandidateCount": 13,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": []
      },
      "events": [
        {
          "id": "auto-1ca2546d41ab8d12",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "30d1c72aa990d867"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Setujui Pencabutan Izin, Pinjol Pinjam Modal Hentikan Seluruh Kegiatan Usaha - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b000302de2908f6",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "ae07885ac3eace45"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pegawai Minimarket di Badung Bunuh Diri, Sempat Curhat Dikejar Pinjol - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-89be9e43cb8b8816",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "025255a1aa3c5f32"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol Legal OJK terornya bar bar semua,cuma mereka tidak mencantumkan aplikasi pinjolnya ketika nasabah gagal bayar ata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8d610954d01b1478",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "3a907c8108da7c51"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Di kira teror paylater",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a9ae45d07de349ba",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "84c1446a7725989c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarmukomuko.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hati-Hati Pinjam Online, Tercekik Bunga Tinggi Hingga Diteror Debt Collector - radarmukomuko.disway.id - Radar Mukomuko",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ea93840f7e169034",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "a58a84d05a2d373e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrosulawesi.net"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Teror Pinjol Ilegal, Siswa Dilatih Teknik Self-Defense - Metrosulawesi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2a9f2654c1f0dec1",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "77a38c534bd14e2f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BAHAYA SERVIS HP! Data Pribadi Dijual Ke Pinjol Ilegal Demi Modal Depo!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3fe5e57b364eebc8",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "56428c45a24926d0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inilahtasik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Waspada Jerat Pinjol Ilegal dan Judol, OJK Tasikmalaya Edukasi Warga Ciamis - inilahtasik.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-61c83e899c9cf959",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "213685836398d0fe"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "barat.jakarta.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lurah Sukabumi Selatan Soroti Pengelolaan Keuangan PPSU saat Sosialisasi Keuangan Digital, Ingatkan Bahaya Pinjol Ilegal dan Judi Online - Kota Administrasi Jakarta Barat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6775055a0df0427f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "83e395b3255f0dd7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "harapanrakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tasikmalaya Minta Warga Ciamis Waspada Pinjol Ilegal dan Judol - Harapan Rakyat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dc0db15ec129d5f2",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "ae7e68ddff03c443"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lintaside.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "15.226 Entitas Ilegal Ditutup OJK Tasikmalaya, Masyarakat Diminta Waspadai Investasi Ilegal, Pinjol Ilegal dan Judol - Lintas Ide - lintaside.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dc886bf6965e52e8",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "49b106541e0af945"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarlampung.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Waspada Terjebak Utang Membengkak, Ini Perbedaan Pindar Legal dan Pinjol Ilegal - radarlampung.disway.id - Radar Lampung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ec75fcbee32a0bed",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "b24ee8a65433f68b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediacenter.slemankab.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Edukasi Hukum Jadi Benteng Warga Hadapi Jerat Pinjol Ilegal dan Judi Online - Media Center Sembada",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-144e7bf18f8d3ba8",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "8f2518197a6b4b39"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "GARA-GARA BANK MANDIRI!! 6 PINJOL KENA IMBAS!! YANG GALBAY DI PINJOL OJK MASUK!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ed6083d9cb8db0e",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "e118db749ffa031b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Galbay nasional duit mafia China biar bangkrut......",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-43eebc5c15e911b6",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "7778c85f05feed09"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Panik, Galbay Pinjol Tak Otomatis Bikin DC Datang ke Rumah - Pikiran Rakyat Jateng - Pikiran Rakyat Jateng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b0e44851c341805",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "b54f342895572c3e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya galbay di arta niaga dan pin+  apakah akan datang ke rumah daerah Jateng,,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e44d288d1968294",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "1229dc9453998898"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asuransi masih aja sama OJK ijinin ini gw patikan banyak yg galbay KLO udh galbay stop udh gak usah kabur diam aja udh p",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-67dcb5ec361caf3a",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "80140cf5573fd8a0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pdiperjuanganbali.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mitos dan Fakta Seputar Gagal Bayar Pinjol yang Perlu Diketahui - pdiperjuanganbali.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7e63141abea0d723",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "fe87454a2bdf317d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "6 Mitos dan Fakta Seputar Galbay Pinjol yang Perlu Dipahami - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8615426692c669f1",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "2ee201d49725a722"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terima kasih indukasi nya.lapor ke OJK jg sia\" lebih baik galbay.❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-93d04c7627ea9ec8",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "344ec7a642858206"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat dan berkah selalu paduka Raja Galbay....aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ffaa8b8c9077a42",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "d8deacce0efd0468"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "FIX SUDAH!  TARIK DANA DARI MANDIRI..! STAY GALBAY KAWAN KAWAN!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a378bd6d9a7ce72a",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "fb514ed6a1448798"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Paling top dah konten raja galbay",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b442b7d2688fb0cc",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "c4693e5b01436e0f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "FC Lapangan itu Biasa Sajah.Ga Gimana2.Galbay Yg Besar Jangan Nanggung.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b5b02e37e4b27e26",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "42344f779a9d0129"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gagal Bayar Shopee PayLater, Kapan Debt Collector Datang ke Rumah? - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bfe0757fd76ee1cc",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "325d3a303a2b6aee"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SEMANGAT HAMPIR SEMUA GALBAY KOK JANGAN MALU DAN SEDIH 💯",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f26dc9a30eb57a64",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "0aee82dfa61ef0fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gerakan Galbay Nasional.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f70c8bcfa11cafd0",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "4152430f1ea1b225"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagus itu mbak kalau gagal bayar potong di dana desa jadi pengawasan jadi ketat karna di awasi langsung oleh aprat desa ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fb4d46671bb3f166",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "dd8f640c16792997"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "GALBAY MANDIRI SOLUSI",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc0b4e893b7302f1",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "e9b6b89926689aa6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "PINJOL LEGAL DAN ILEGAL SERTA OJK ITU SAMA SAMA MAFIA...GALBAY SAJA, ACUHKAN...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-01090748b7776c79",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "492ad68eed2e960e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Didorong Perkuat Pengawasan Pindar di Tengah Perkembangan Akseleran dan Julo - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0127d4e52534b9b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "611710b170926008"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "MANDIRI BANK ternyata kerja sama dg pinjol, isinya para rampok berkedok mandiri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-023e06b1d55ec863",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aab3a01ba7a1691d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga rejekinya buat bayar cicilan motor",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08057e46ee52259c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a0f3a6ea2c8251ca"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "umsida.ac.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Marak Judol dan Pinjol, KKN P 20 Umsida Edukasi Warga Pucangsari - umsida.ac.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-086f457be2f3b043",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fb7838bd9f1026f0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "harianjogja.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Biar Nggak Keliru, Ini Bedanya Hapus Aplikasi dan Hapus Akun Kredivo - Harian Jogja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0a48845c0a20c1b4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1f365a4b093ba792"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir pendatang baru bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0bf4c59ce8ec5e7f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3c65673c3c9d0b4a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kapol.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polda Lampung Minta Orang Tua Bentengi Anak dari Bahaya Pinjol hingga Aksi Demo Ricuh - KAPOL.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d94a334c9f63f82",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ff84b9660d9a318b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga ada rizkinya buat ibu hamil 🙏dan lancar terus abangnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0eeb7e5c8c9b3c05",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a6dfcf39e00ba2a1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir jujur ajah buat bayar hutang jatuh tempo besok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f72ffa02b39cd33",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a3db1b7f0ce9d8c5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaragarut.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tips Menggunakan Paylater Agar Keuangan Tetap Aman - SuaraGarut.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0fac3eaeae4a4e33",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "87580afc389f9d43"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ingin Porsi Penyaluran Pinjaman Daring ke Sektor Produktif Naik - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1023d8836901e533",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9d995b6428c4b3da"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritaind.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bijak Manfaatkan Pendanaan Digital, Ini yang Perlu Diterapkan - Beritaind",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1410791c9762f4da",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b3edbdd3ef9d191"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Knp sdh di ikuti tutorialnya tp tdk bisa muncul",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-15a087a1326ca424",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "45829b201db115ae"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir abangku. Semoga bisa dapa buat bayar ujian traning alat berat. Amin🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-15aa830599e655bf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b635c4e42f1da6ac"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Live Now! Kupas Peluang & Potensi Pindar di Fintech Lending Days 2026 - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-167a322618581d6b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a6118496a7473f48"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjem buat makan kak bli beras...krn g ad yg bs dijual ...suami kerja ojol...Pinjem sama org jg ga dikasih...sedang per",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-189ce51f1fb58070",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d95258f1c321ad5e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Trimakasih bang semoga bermanfaat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1aceb712197c94f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b6cd255110405a66"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Cekcok di Polsek Cengkareng, Ternyata Buntut Debt Collector Paksa Masuk Mobil Warga - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1b085f662e12af90",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "efeb7c02c056d104"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DM senyum2 liat ini😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1b668472093dc127",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a2d9711691e7caf8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Slmt MLM, assalamualaikum kak DC lapangan yup di Tangerang ada atau tidak ya ok thx",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1c1e67b0f1e8c360",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f02950a798ce8fa4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pintar Dorong Responsible Borrowing Kendali Finansial Bertanggung Jawab, Foto 2 #2041490 - Tribunnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1cbfd3a3f335169b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0dbee4a2b5cd740a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hapus pinjol, sangat meresahkan ancamannya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1eaca4a7cc6016e0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "06f45d148a8911bf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillahirrahmanirrahim insyaallah dapet buat bekel adik saya di pesantren",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1eb816ab8f1a5d52",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "735d891b5482e073"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kerja masih seminggu lagi ke gajian udah gak punya duit mana merantau 🤧",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-213834d08c2b58f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a4a1dea9718ed23c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir trus bang, mau tabung buat anak yg  TK sbntar lagi😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-229deabcceda90d1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d8a7d68a1822e828"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritajatim.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lakukan Cara Ini Agar Pengajuan Penutupan Akun Kredivo Langsung Diproses - beritajatim.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-22fef50201617e2b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e613096c2ef502c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ayo masyarakat cepat pinjam, masalah bayar ntar aja. Kan dah ada jaminan. Daripada nanti dikeruk sama para pengusaha bes",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24af2521313a0ada",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "193bb051692f691e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bantenraya.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pinjaman Daring ke UMKM Tembus Rp35,12 Triliun - Banten Raya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24d72d375d92db53",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "83d30ec41ec75000"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "waspada.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kapolres Binjai Tekankan Anggota Jauhi Judi dan Pinjaman Online - waspada.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2869d06b0e737e15",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0010443a51e6556f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "balipost.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Diduga Akibat Terlilit Pinjol, Karyawan Ditemukan Tak Bernyawa 1 - BALIPOST.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-28cacd654a52922e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "400e2c868253f093"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet buat chekup bapa ke RS aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2acd6adeccd212ef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4091b2cc6162881a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "F1 Malaysia 2026: Jadwal dan Harga Tiket - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2d8c8c14f7aea72a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f0254a3b4d424a1b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Syarat dan Ketentuan GEMILAN9! - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2ec7985d995b784e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f6d7edd8b6f73a4b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ujung2nya jg gak semua masyarakat bisa pinjam,paling2 skemanya kyak perekrutan pekerja dapur mbg. timses jadi prioritas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f389c8157a83d80",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2a4dbc62851ed974"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pendatang baru hadir bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3118b4d54101bfc5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d488db7410568c5e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perbankan Makin Agresif Berbisnis Pinjol, Investasinya 67% dari Total Pinjaman - Katadata.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3143f8995cc00bd8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8554cc31e250dbcd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah smoga kepilih buat ngasih ke orang tua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-316d17e0848d4c24",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d1e98f3a864abccf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Konten nya sangat bermanfaat bagi semua orang yg sedang membutuhkan bang , lancarr bang sehat selalu 😊😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3178716a289238f8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "97f6c975cd7ae8d5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalau memang rejeki saya maka bantulah saya trimakasih konten yang baik untuk menghadapi hal hal yang terkadang keperlua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-31cb7a3ff1289993",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "afa90efec443ab38"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "AWAS! PINJOL-PINJOL INI BISA DATANG KE RUMAH? INI PENJELASANNYA",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-33996ace0faf036a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f0bdc1086f210d42"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang moga bisa dapet rejeki buat kebutuhan anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3473e456f0a02766",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bddd3ce3689f5fc5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Dorong Pindar Perkuat Pembiayaan UMKM - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3578413cf039d3ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b41137ef6e4f7cff"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah dapet buat bayar hutang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-364d3ea4a993f6c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "96e97cc83fd61488"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "asatunews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lingling Kwong Raih Gelar Wanita Tercantik di Dunia Tahun 2026 - asatunews.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-36936d9e11ce1f9c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d964869a93dd0b5c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Definisi otak lebih kecil dari ambisi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-36969955c49064c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "571071a46ed69fc3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaragarut.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Jelaskan Aturan Pemblokiran Rekening Nasabah di Bank Mandiri - SuaraGarut.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-375759b7df39805c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3a09f7b4352508ab"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "viva.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto Perkembangan Fintech Makin Pesat, Efektivitas Pengawasan OJK ke Industri Pindar Perlu Diperkuat - VIVA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-375b6cb423837b4f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "18099281aec6098d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat bantu berobat ibu saya sedang di rawat bang sakit darah tinggi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-39925dd327bac257",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e0ec6cbeeb5d2a25"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK doroog akses dana produktif sikap lonjakan pindar - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3c3d0f96094288ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4f69cd847cf3edf5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadirrr banggettt abang akuuuu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3c8b75be81461fa8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ce904489e510319f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bos mudah mudahan dapet buat bayar wifi😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d1109197c618c0a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2df6d22cc4ee0dc6",
            "51dad13b73f60d6c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Insya Allah dapet buat Nebus hp anak yang digadaikan amin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3da908de692116a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e91774f36de41587"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ribuan Penerima Bansos di Semarang Dicoret gegara Judol dan Pinjol - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3efcfcae27e987bf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0dcb2d101a7c8e28"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga Indonesia bebas dari Penjol🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3f27db0e542b6116",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dc265b1f84f5886e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan coba” PINJOL , usahakan dulu cari uangnya !!!  #grab #ojol #balikpapan #fyp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3fcaf24561d225b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9e82ac8735cb4140"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mix.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pintar Dorong Responsible Borrowing melalui “Teman Atur Uang” - MIX Marcomm",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4089166d27921be7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f2d470a7b4e55b48"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "peradaban.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "BPJS Ketenagakerjaan dan Ajaib Perkuat Edukasi Dana Pensiun dan Kemandirian Ekonomi - Peradaban.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-418acfb15b4a7845",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4a9c5c9d558f32d8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ngeri DC😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-420163b87c6c37b7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6bfc0653249a18ac"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "stekom.ac.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjaman Online Legal OJK dan Cara Memastikan Status Perusahaannya - Universitas Sains dan Teknologi Komputer",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-42c8caff39f0b9d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a806dbbfbf2523bf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat pulang kampung min udah 3 tahun di Rantau blum plng kendala di dana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-44d55ba68d6b5e5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ec30103c9b8ee94a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismlillah...semoga dapet rezeki buat kasih ke ibu🤲🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45756093d20d3dd8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bb92ae88b25f01f5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga makin sukses dan makin berkembang kak cannelnya🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46da5023118a364d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2a8e689e5a3c5efb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kagak bakal berani dia nyebut aplikasi nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48398977bb5a3ecd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6b8f16982ce453c5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya gk hilang ada tlp. Gercep ngangkat. Takutbada kirimin nasi dari ibu/mertua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48ad343cb1950310",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1a5c2c068fa6d51f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Amien bang 🙏🙏🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-494615377835d735",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2e70f3b9b50ac00a",
            "b60ad909e1acb86e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "journalarta.com",
            "kumparan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sebut Pembiayaan Pindar ke Sektor UMKM Terus Naik - JournalArta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-499f11b29fbe34f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "64a58494c933ac37"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol, Industri yang Disayang tetapi Juga Dibenci - BeritaSatu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4b5dbb32792cb344",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "404db75955191633"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Wooyy lu raja pinjol sesungguhnya.. mantappp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4bbc775b927dc48f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5fd34ff700b1fbdb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Desil Naik akibat Judol-Pinjol, Sejumlah Penerima Bansos di Solo Dicoret - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4ca73a70573cc46a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bd988ebf1155559f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol arus nya di apus aja. Jangan di kasi izin. Menyisakan rakyat. Udh bnyk korbanya.. emang minjam gampang. Bunganya ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d824773eac3f384",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c3618e7feb315723"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaralandak.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pindar ke UMKM Capai Rp35 Triliun - suaralandak.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4e5ae069e3b74ff2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0e14ec1d783375ba"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Soroti Peningkatan Risiko Kredit Pinjaman Daring - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-50b628332c793422",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e165d7e165e5aa7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga ada rezekinya, semoga yang berbagi lancar rezekinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-51534f7713d58b88",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9cec9340fe28a8d1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hapus pinjol dan judol.. . .\nLingkaran setan semua . .",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-515854be3bdab14b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dbc907b83daaa86b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Padahal orang indonesia itu soal hutang pasti bayar,kalau kaga bayar sudah pasti karena kendala keadaan.\nKenapa gue bila",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53c20a3e6454e5a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b8dfeb23bd39cb9a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kayak nya ada kami sdh bangkrut beserta yg lain2 limit 300 RB  di stop",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53e549a5b9352214",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f90c1cd5dffca5a3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "balijani.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terjerat Lingkaran Setan Digital: Judol + Pinjol 3 Tanda Anda Terjerat dan 4 Langkah Nyata untuk Keluar - Balijani.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-545a7628781b67ef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "81f896bd03190992"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah mudahan dapat untuk saku anak dipesantren",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-55d5b7b05c766d3a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2778d27742b14ab9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lancar terus bos vidionya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-56d4872687859457",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4ff4e365c33489d8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bg. Buat kebutuhan hari hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-57b93ab540ea31ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2acfa11f7c620e85"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir Bank",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-597db7937fbabc04",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "61dfe1e8a1c3da6a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau hutang apapun....klo nggak byr ..urusanya di akherat😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59ce35c105e9c3a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3b74862d3e2d081b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga ada Rezeki nya saya Anak Yatim piatu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a32f6d1a576bd38",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e6db36bac3c47b8b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yg jadi masalah tidak sepenuhnya siklus usaha didampingi pemerintah, karena kita yg buka usaha kecil2an, tidak sebanding",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a85eaaa92b7d014",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d14cf55b5874052d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews-resmesuji.lampung.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Polda Lampung Ingatkan Orang Tua Awasi Anak, Waspadai Narkoba, Pinjol hingga Ajakan Huru-hara - Website Resmi Polri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a9c0d44cd52c2bb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "66381514fb244271"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Setuju Lanjutkan boss kasian banyak orang bundirr gara2 pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5acd3a636330216d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e82894d6bd9dc895"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sumut.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "HP personel Polres Simalungun diperiksa antisipasi judol dan pinjol - ANTARA News Sumatera Utara",
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
            "b207d36d14a8bcf6",
            "e56f8066b743b18f"
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
          "id": "auto-5bc1d5847db46c55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e1c8e6bc946a51f2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang semoga rezeki nya lancar dan dimudahkan urusannya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5bf623d1db5b8b40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "08aa4753a6d6da98"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya Allah smoga sya bisa dapat, sedikit tidak bisa blikan anak sya pempers",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5ccfc9f9ec73479d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3330187d5e5ee618"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yang namanya bank  ya riba bisa menyebabkan gila",
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
            "4a70b0aed7b5bf44"
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
          "id": "auto-5d828679f7466eaf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6d7ade1ca5e4540c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaralandak.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Penyaluran Pembiayaan Pindar ke UMKM Capai Rp35,14 Triliun - suaralandak.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e6a1a96f917bdf0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "67d1b8c39885349e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang didaerah kota Cirebon sdh  ada Dc Pinjamin blum ya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-60c24662ad7995e0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e96fd6bd690e2676"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir semoga dapat buat nambah biaya anak sekaloh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-621ad55f202cca5c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7547e02b1914b1bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga ada rezekinya buat saya kaka buat beresin kamer yang sering bocor😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-629710040931b309",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "88f8f534f9aeabe4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Wah samawa bang semoga selalu  lancar luncur sampai hari h",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6345877ba7f02907",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1af4bc7ac5e28a49"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "cara mengambil nya gimana bang ga muncul link daget nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-637879e7e504ec06",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4da5f411377640a4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ameera.republika.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nomor Lama Dipakai Pemilik Baru, Bagaimana dengan Akun Kredivo? - republika.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-637cf2cd0fe454dd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5c2f766ef2c01477"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selamat ya A semoga samawa... trimakasih atas kontennya bisa jadi edukasi bwt banyak orang...semenjak nonton konten Aa s",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63bb18c15286fde7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7a214841b80554a7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rctiplus.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar dan Bank Regional Bisa Jadi Kunci Perluasan Akses Keuangan Digital, Ini Faktanya! - RCTI+",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-64bee25a6594ebea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fa9d02a43c7b4d25"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.banten.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Propam Polsek Pasarkemis Perkuat Pengawasan Personel, Sasar Judol dan Pinjol - Tribrata News Banten",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-650b135263d042db",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c44d8ea5fe0b9041"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mertuanya hente menta link pinjol na bang😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6840c24926ec64cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "74756747fbc1bc87"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sebanyak orang pinter di sini....cuma pak bray aja.....ni yg tau bhaya ny \nLanjut pak bray.....perjuangan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-68ac85c979b86d84",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3777643a88473ae3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK = AFPI = PINJOL = MAFIA\n\nLawan dan hapuskan semua pinjol yang ada di Indonesia!\n\nBravo Pak Bray...✊️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6908aadce0dbe72e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2bf57b71b27560bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sangat mengedukasi semoga pemerintah segera menindaklanjuti tutup semua pinjol dan meng relokasi dana pinjam untuk masya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-694361bb7cea3d4c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f6ec20d4c4809cb2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Imbas Demo, DC Pinjol Disebut Makin Ramai Turun Lapangan, Ini yang Perlu Diwaspadai - Pikiran Rakyat Jateng - Pikiran Rakyat Jateng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-697024654de76729",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "75d171e3a152af94"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga rejeki buat ongkos pulang kampung😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6aa010db7d16e5cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e561400205f32e5e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah Semoga dapet buat lunasin hutang cari kerja masih belum keterima, moga ada rezeki dan abangnya diberikan rezek",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6ab22e128e720b03",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "91b16e9b9f55869f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bangga punya polisi yg mengedukasi masyarakat ttg pinjol\nTeruslah berbuat kebaikan urk masyarakat, sukses selalu pa.Bray",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6c7c001a3c00c3e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f0ef3a6399299495"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Banyak Isu Negatif Soal Pindar, DPR: Masyarakat Harus Dicerahkan - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6db30cf7016bc983",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5fd4e0d814d7768a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah-mudahan rezekinya 🤲 buat beli seragam sekolah adik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6ea03b88885a5bb8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8ae8b940bb2e969b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Fintech Lending Days 2026, Industri Pindar Perkuat Kolaborasi Nasional - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-708eaf4e382e4ab7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ab4ac5793335d785"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rakyatcirebon.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek Pinjol Legal dan Ilegal Lewat Otoritas Jasa Keuangan - https://rakyatcirebon.disway.id/ - Rakyat Cirebon",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-70a2c8afb388a296",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "75cc0a8f3f9bd48e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "13 Pinjol Legal yang Punya DC Lapangan pada 2026 - Pikiran Rakyat Jateng - Pikiran Rakyat Jateng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-70b23d0b1f8fc4ed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9a086bae809f8e15"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapat untuk beli sepatu sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-717a548307f95e98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fb17c2db73961603"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gede bgt bang limitnya kok sya g prnh dpt y 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-730c8b6d786b8b74",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d6c2cbe47399b11b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jujur look sama rasa enak tapi itu masih mentah beresiko sakit perut 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-73ce3c5145f41107",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2f22c12b7ae06532"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir.kebutuhan modal kerja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7428224f95c75804",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c5bd620f27eb1dea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sekali2 bahas joki/konsultan pinjol bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-74e048892567801d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "79164a76a0dee88b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan. Coba coba.  Pakai.  Pinjol  ka.  Nanti. Di. Tagi. Ka",
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
            "13c9c8026f1d8360",
            "66c56e4952642c17",
            "fc9d29e224d5767d",
            "315c0e498354cc15"
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
          "id": "auto-760ac408c4ff4bd7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2cef9f8e778efa31"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tasikmalaya Edukasi Masyarakat Ciamis Waspada Pinjol dan Investasi Ilegal - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-766377545a547a1e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "780cf04489c1e4f2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "voi.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Doroog Akses Dana Produktif Sikap Lonjakan Pinjaman Daring - VOI.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-768b0c5a223f3a92",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "34f7932f469d4031"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Dorong Ekonomi RI, Rp 35 Triliun Dana Pindar Mengalir ke UMKM - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-773d6950188192bd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "39a3c3b60d81e8f4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat dana kaget lagi butuh banget uangg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-77b476f316322e47",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c494c779fe88960d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat semoga ada rezekinya❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-77fc7e90c41495ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "77a9c53e46cba98d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bissmilah semoga beruntung...buat bayar tunggakan anak sekolah..🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-78fb5ef46a5addaf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0023e15633125e10"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Klo kebutuhan mah alhamdulillah banyak bang, mudahan ada rezekinya deh aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7983ad4f7b82acb0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b97e7c696d9ee388"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Insya Allah setelah menikah ada rejeki melimpah lewat doa istri, next dikaruniai anak Insya Allah ada rejeki lewat kehad",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7990011c03f84203",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "695f98ed4bd2784f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantab bang singgih , semoga lancar sampai hari H dan makin lancar rezekinya aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7bfe5004d5ef5c40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6dae71cfb4b99f4b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga samawa y bang...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7c3b5ffa67f14dd6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b7ddae40da2d4687"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bank = Pinjol = Mafia!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7c4447c9c98e9114",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4c54c1a016a09e4c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kredit Macet nti..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-807d5f9b4073b2ee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bf055167ed32c5c1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makanya harus dilarang semua pinjol, kan bisa aja HP orang dihack dibuat pinjol, yg kayak gini ini pinjol gak ngerti ata",
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
            "bb06ad7beddd78a3",
            "4994b6e94816a4c3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir selalu bang 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-842f3c25dd993fa6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "afbb96f9b2da37e9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "NEKAT BIKIN USAHA KUE BALOK POSISI MASIH TERIKAT PINJOL?!  #kuliner #visitkuliner",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8533d333205f3e58",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "965b373a5180f27f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "denpasar.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sempat Gelisah Dikejar Pinjol, Pegawai Minimarket di Badung Ditemukan Tewas Gantung Diri - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-858a9eb03db20ba3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fe8f455e926d07dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Muga\" dapet hadiahnya.dan untuk abangnya sukses terus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-85e7442980af4e21",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f6775705530cefed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insidelombok.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sasar NTB, AFPI Dorong Literasi Keuangan melalui Pindar Mengajar - insidelombok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-866a83c66610f8fb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "91293650a862a2c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lombok NTB bank jago ada DC nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-86753b06c591bee5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cf6b62d0522527b0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya jg terpaksa pinjam ke pinjol Krn pemasukan lg minim banget\nJualan sepi akun ojol sepi sedangkan yg hrs dibayar bany",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8714b95bcff18d57",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "52b3adf1ff077159"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rm.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pindar Berkembang, Perlindungan Konsumen Perlu Diperkuat - RM.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-873657e1ac2bcb8e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ed11060e0e0a07e9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tapi adonan kalo masih cair kaya gitu katanya bahaya karena adonan tepung sama telur masih mentah\n\nSorry kalo salah🙃🙃",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-87cd8d790b1196b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4c7e23caf51c75a9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rm.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Makin Diminati UMKM Akses Pembiayaan - RM.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8843aa5d8aa70ab9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "29a376d0ada5c8d0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Didorong 3 Faktor Ini, Pindar Dinilai Punya Potensi Besar di Indonesia - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8848836081fc41f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "34352e218a32c396"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "99 persen bakal macet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-89b2f994dccb33cc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cfa0cce62fb77111"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tempo.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mengapa UMKM Mencari Utang Lewat Aplikasi Pinjaman Online - tempo.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-89b38d3382f5fbd9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b6d17cbfe53ff5a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hebat mantap bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a9a5714062bf42b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a659b74e9a4d467a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hilih ngetik di situ .kaga keluar di tungguin sampe 1jam juga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8d0561a0c113fec0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "793b62b9388628c9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarlombok.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Dorong Literasi Keuangan dengan Pindar Mengajar & Media Roadshow di Mataram - Radar Lombok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e26f17e1a63c5e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "66dab31d631d9830"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pertama",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-90409d890fdec334",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c25e2c94ee713820"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ditelpon tim sar kirain ditelpon pinjol 😂#short #shortlucu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-910e7ede45fb7b90",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7691110573b17a2a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol, Disayang Lalu Dibenci - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9116018f7e4825a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d1977329377e1ca7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "desatepus.gunungkidulkab.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Edukasi Literasi Pinjaman Online : Lebih Cerdas dan Bijak Menggunakan Layanan Digital ! - desatepus.gunungkidulkab.go.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-91482519d5374e98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d57eab18f96b9601"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BISMILLAH KEBUTUHAN SEHARI-HARI HIDUP (OPSIONAL)",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-914dc4a1f246331a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cb61c690e59db391"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sonora.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Akun Kredivo Pernah Login di Perangkat Orang Lain, Begini Pilihan Pengamanannya - Halaman 2 - Sonora.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-91fe07ca6f3a2f90",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9ef319cdb149a338"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TERNYATA OMONGANNYA SELAMA INI BHG,.YG GAK TAKUT ATAU APALAH,.BUKTINYA MAU NIKAH TAKUT JUGAAA KAN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-941a88ff4f050283",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9ec7c425312fa876"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selamat Bang. Semoga menjadi keluarga yg sakinah, mawadah dan warohmah. Aamiin 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9453b8014452413f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2121c31fbf2e06ed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediahub.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Propam Polres Tanah Datar Perkuat Pengawasan, Cegah Judi Online dan Pinjaman Online di Lingkungan Polri - mediahub.polri.go.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-94a369f59e6c2719",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "94dcbbee24699efa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Naik 33%, Penyaluran Pinjol ke UMKM Tembus Rp35 T - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-950398e0403fc72d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6b26b244be5718bf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bali.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PINDAR Alternatif Pembiayaan, OJK Kuatkan Literasi & Mitigasi, Koster: Diimbangi Literasi Keuangan! - Tribun-bali.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-967ce4ce7c4970b9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7b7503c7f9888038"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol/pindar harus segera di larang di indonesia..ini yg menghancurkan ekonomi masyarakat indonesia..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9768ea8a7b0156e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a76a2eb89f328843"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "POLISI SUKSES MENGACAUKAN BANK MANDIRI. OKNUM POLISI YG TERLIBAT PEMBLOKIRAN REKENING HARUS DITANGKAP, KARENA BUAT KISRU",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97a824e195d6048b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "78bf1bfa3447e462"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mau dong bang dana kaget nya , buat bayar pinjol bang , pusing bngt kejebak pinjol bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97dd6567aba2dbc7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "24fb55bd38abc553"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah semoga rezeki ku kali ini buat beli pempres anak saya yang baru lahiran dan sehat selalu buat abangnya rezekiny",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-99748a46cfb79c7b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "abd260b04331a4fd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "balipost.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Diduga Akibat Terlilit Pinjol, Karyawan Ditemukan Tak Bernyawa - BALIPOST.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-999fbd6e6eb84a6b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d64f42555a5cd470"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediakonsumen.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tanggapan perihal “Transaksi Top Up DANA Rp2 Juta di Tokopedia Gagal, CS Kredivo Hanya Memberikan Jawaban Bot yang Tidak Nyambung“ - Media Konsumen",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a047d6077cf0f21",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c4517e3182c61d2f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terima kasih abangku,sehat dan sukses selalu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a41d48730ac090e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7526d64c3bdfc461"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "industry.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Fintech Lending Tak Lagi Sekadar Kejar Penyaluran, Kredit Pintar Dorong Responsible Borrowing - Industry.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9beee5c530954017",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "391a12b27ddf5a46"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penipu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c4225379df17328",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9ef84706905d7e6c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "republiknews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penyaluran Pembiayaan Pindar ke UMKM Capai Rp35,12 Triliun - republiknews.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c74f363ed96b755",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "491c47d6dcf20837"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rakyat nya banyak yg tercekik jerat pinjol..!!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9dcce246998e560f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "329efe1929877d36"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kunfayakun moga ad rejeki sy aamin.. Hdir sore bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9eb89f19e836bfbe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "527281a8eff62f87"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Kolaborasi Fintech Lending Perluas Akses Pinjaman Berkelanjutan - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ed5d984ac9a9b66",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b3f135bc251169a3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga rejeki ku di sini🤲🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a3a33b7134ad231d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d679659b465ad538"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rakyatnya makmur tanpa pinjol😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a4364c1f5387d1c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "134f456485737052"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Negara mayoritas Islam rakyat di cekoki riba,yg sebenarnya tidak perlu pinjaman, kewajiban negara mensejahterakan rakyat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a612a4ebc2820194",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a5410faf6db9a171"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Singa ,pinjamin,kredione,pinjam go ada DC y g bng depok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a744613b35f5f159",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c91d207080810c30"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mari kita lihat dulu siapa yang di ACC untuk mendapatkan pinjaman ini. Kalau yang di ACC tetap para kroni dan orang terd",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a78a16cf0d7d8645",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7c0be1d69b4aa7d4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bolak balik di tlpon mengganggu sekali 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a827ae5f8df1003b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a59348693750fbd6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Siap mudah mudahan rejeki anak ke 2 saya🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a82dbcf65b052f9c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1043dae2c38d6653"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DONGO , itu mentah oon bukan lumer",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a9dfeb80b560777a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cb650093882b46e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir selalu Abang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aa6442ad870da5fc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f4c5de5612137bf6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Basmi pinjol yg gelap yg menekan masarakat  yg menyebar kan yg tidak senonoh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aaa2b2d2031e35c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6bd21a9b89fdbb18"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pak Bray,adalah Polisi yg baik,dia yg terus memberi edukasi & penyemangat kami para korban jebakan pinjol,...tks Pak Bra",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac1a8044dfdf4f3a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e88fcb2b667cb7e6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tegaskan Industri Pindar Konsisten Memacu Pembiayaan Untuk UMKM - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aca363aed77550fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e8b8d9fe212f6d23"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ojk MENJERUMUSKAN ..HAPUSS OJK",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ad9f8925e146bc62",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "874e4462a4a0a458"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir Abang ku ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ae8ecd2a326ad8bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "38451078ad6b73b8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gak ada adonan terigu setengah matang masih cair gitu, kalau masih cair gitu namanya ya mentah, cuma kena panas bentar d",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aecc4c5a33b09224",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "af3ef64c23b285a9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat biaya kuliah dan pengobatan ortu 🥺🥺",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aeee699605f71cb0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "35ceed102239b123"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Panutan semoga rezeki uda paket komplit bg 😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-af41b018c819b0da",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bb332244984fc023"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sumbawanews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Hapus Aplikasi Kredivo Tanpa Tutup Akun Resmi - Sumbawanews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-afb56300e8727a60",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0a59d5939f7cd9c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makasih baanyakk paduka infonyaaa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b200064733650e14",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d0f7906bffeb1167"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Salam min sehat selalu baru hadir lagi bismillah moga dapet daget buat sehari hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b2a217d6df39a677",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2996358404071481"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bang,udh akhir bulan keperluan buat rumah banyak😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b2f1532379a78fae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "173fc1a2ccfef57d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "*_Ayo maling bersama-sama agar hidup lebih hidup_* 😢😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b3a43084647d8a40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96d058d4938b7f55"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang dari flores 🙏 \nSemoga dapet buat beli pempers anak 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b5f96c9e338cc0f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2ed50d26e827b944"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Berkah selalu bang.. banyak rejekinya..🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6462e81a609e12e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "39cfbfe7e4fa1915"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarantb.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Banyak Penerima Bansos di Lobar Dicoret, Diduga Terdeteksi Judol dan Pinjol - SUARANTB.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b663227cf7208646",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ccda489e995d62d3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Penyaluran Pindar Mencapai Rp105,14 Triliun, Porsi ke UMKM Senilai Rp33,41 Triliun - Tribunnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6a2c0a3157db010",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8c22dfd7ec6c5a64"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sebenarnya hal PINJOL klo bank Pemerintah apabila memberikan Kredit KUR UMKM dgn persyaratan yg tdk jelimet segala pakai",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b722730dff1b58f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8871c052e1cf2ca7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang semoga mangkin sukses",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b98cce5bd286d2b0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d70555ee5090f77b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga bisa dapet dana kaget buat biaya pengobatan paru paru dan Lambung akut tiap bulan amin ya allah semoga ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ba11364163fa0b42",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "af3737f897b6afc5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah saya ikut senang bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ba15fdf9c93a4782",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6e13fe415236418c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Luar biasa Bang, memang lebih bagus di kasih tau sebelum nikah.semoga lancar sampai hari pernikahan ya mas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ba3ce0d29c67118c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3a26ce129c0ae814"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat selalu paduka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bbc9037e411acc5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "15c29c88c06e12f0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Komitmen Pindar Perkuat Akses Pembiayaan UMKM-Memajukan Ekonomi - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bd6310e5921927ef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b97f7039a086eb89"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar UMKM Tembus Rp35 Triliun Per Juni 2026 - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bdabe35b811266a0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0b558e87c1a7c290"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga Ruben bs menyelesaikan dg baik ..pemeriksaan terhadap dirinya sdh dilakukan ... sekarang tinggal pemeriksaan terh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be7409fb523f88e0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca6df7e970cdb8e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang ..\nBuat nambah biaya sekolah anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bf3b781e1ac027e2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "02320f9f6ea08369"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga rezekinya ya ya bang, untuk anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bf4324219612e367",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bb9421cd07f5e728"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir selalau Abang ku ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c06574740a5fbf38",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c8f3215ae4184f69"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "biz.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Mau Batalkan Pinjaman Kredivo? Ini yang Perlu Diketahui Sebelum Dana Cair Halaman 1 - Biz Kompas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c18bf0c1f38e9607",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d0d5e7b1d9d5e7ed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sebut Pinjol Tak Bisa Lepas dari Penagihan - BeritaSatu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c1d5b06ab9551885",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "daa3508a8017d6bf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "[FULL] DARURAT PINJOL! Pesan Menohok &quot;Pak Bray&quot; untuk Peneror Penagihan Utang | Deep Talk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c27628d830314bf9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cf23c2ef3d65b89b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Polda Metro Jaya Luruskan Soal Rekening Donasi Aksi 27 Agustus Bukan Diblokir - Tribrata News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c4efa0c329822859",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9dc19a6285a5ed63"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga ada rezekinya buat berobat orang tua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c5032fed5da4defb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fb9a27bd5f647b6d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah buat operasi orang tua yg sudah kenak struk kak :(",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c51d8f84266c4878",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d4ee2440b2b9cb25"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pangandaran hadir paduka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c5c3da221723a8b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0e8831514870abb0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ko pas di tulis aktifasi pinjaman cepat gda bang pencerahan dong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c60be0988ace5b60",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0c44a42734c290dd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sebelum Ambil Pinjaman, Jangan Hanya Lihat Dana yang Cair - Bloomberg Technoz",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c681af2bb28c6f32",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "abfa5d2afbf58796"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Zaman SBY pernah ada program pinjaman semisal ini. Dan banyak yg macet. Karena mindset masyarakat, ah itu dari pemerinta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c97fb9344e44bfec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "399b3658c2e8a053"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga ada rejeki buat keluarga kami.. untuk beli beras beli token bingung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ca54624a0a0bb0f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c263610c3964ae72"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat ya allah. Buat bayar cicilan motor",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd27970ff280ef13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0d615597677e323c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ototekno.okezone.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Asal Uninstall, Ini Pentingnya Hapus Akun Kredivo lewat CS - ototekno.okezone.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd7ad9f885508bf0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2df23a7f4436f82f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sehat2 yah bro... pertahankan akal sehat kita ..  DC itu kentut...abaikan saja, ndak usah di hiraukan... pake apps2 yang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cd88c98b0b2b8a11",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e73e01c80373cd5c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "makassar.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK dalami penundaan transaksi rekening milik Supriyono - ANTARA News Makassar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cdd2f973ae013c67",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "493ad779dbf81114"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tempo.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Industri Pinjaman Online Memitigasi Kredit Macet UMKM - tempo.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce59e32a23fe1ac8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f53db9cc367c08a0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dpt buat kebutuban makan berdua sama ibuk😇",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d01376953b56befd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0afd937bf9b59d47"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir selalu bang buat lu mah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0792eafd1c437da",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6928daccbf54239e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tinggalkan  Bank  MANDIRI  sekarang juga.\nTidak AMAN  dan tidak NYAMAN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0cb0220802ca9e2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7160c356e4dc9507"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompas.tv"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polisi Ungkap Kronologi Debt Collector Masuk Mobil hingga Cekcok di Polsek Cengkareng - Kompas.tv",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0d37d174d183bb3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4bb62df4199c47cf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Inklusi Keuangan Capai 93% tapi Literasi Masih 70%, AFPI: Ada Gap yang Harus Ditutup - InvestorTrust",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d15c30ac66ba9b68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "87da6ad4498f96a8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "diksimerdeka.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "KKN Warmadewa Gelar Sosialisasi Literasi Keuangan Digital dan Bahaya Pinjaman Online Ilegal di Peguyangan Kangin - diksimerdeka.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d1e8bc0ad8449f97",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8155c712b17e6dac"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang 👍 mudah mudahan ada rejeki nya, buat bantu Ade bayar kuliah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d1f1a3f88de3bb94",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0fa7dccef44ffdaf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ngeri juga ya pinjol waduh waduh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d25636078775ad83",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e7ae6830ed64c1c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Anjai gercep",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d2e2625c47f3d194",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "82ede473695a8674"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga rejeki buat hajatan 1000 harinya ibu..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d2f38828de72ecb0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "43ffbf17036b4226"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya allah semoga rezeki buat bayar motor buat ngojol🤲🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d74a7104d9901363",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "95fa778f7cbe7990"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya udah didatengin udah 4x  kang tunaiku rajin bgt dateng kredit pintar udah 3x  dateng😢",
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
            "cfbc164d2771b326"
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
          "id": "auto-d8063ee5b0486fb7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5ac441b747df5b83"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gerbangpatriot.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terjerat Lingkaran Setan Digital: Judol + Pinjol, Ini 3 Tandanya dan 4 Cara Keluarnya - Gerbang Patriot",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d8b9eee463468233",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c010395740048ed3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih abangku .. anda benar benar membantu mental saya hadapi Pinjol.. moga abang tetap sehat dan bugar 💪",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d927091f0d66b9b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a923ead85abe6c4c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pinjamyuk di Jateng udah ada bang saya di Blora sudah di Datengin padahal saya pinjam cuma 700k dan itu jadi 1,1jt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d94f4d54eefc5071",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b73b91aa48c5e961"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "makin kesini pemerintah kita makin kesana yahh hduhh parah emg, katanya kdu manut pemerintah lah pemerintah nya aja kek ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d9f5f4e5e3eb92f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d1aad4225f867ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga saya juga bisa dapat dana kaget untuk biaya pengobatan 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-da409da25d9ad107",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a5b9e7f5bd2ae30e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Judol dan Pinjol, Mahasiswa KKN Edukasi Pemuda - Kompasiana.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db7d4aba609d17d6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7050c883d0b00eb0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang semoga 🎉 biar bisa modal cari kerja lagi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dba72cd08ee09b52",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3f924c1d841bcd06"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat buat berobat bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dbf5ba5a7d949c68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5e3de4d9231878a5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Fintech Lending Days 2026: Langkah Perkuat Ekosistem Pindar - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dcbb6c0098f81c0c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6b05a00584649985"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya doakan Yg ngizinin pinjol ada di indonesia dan semua perusahaan pinjol yg ada di indonesia beserta karyawan pinjol ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dd0258cbbdf9296d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9f13a0d9c65437ab"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Brp gaji nya bang? Pan baru dikit flower nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dd3808d1085e8c7d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "93421ccea95bcba0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya lagi butuh buat makan dan kos kosan nunggak gajihan masi lama banget😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e00a4e68fb83e437",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4783f6b125def441"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "skrng bnyak minjol buat makan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e13a187c1a103f10",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0a3bf1cdc77b8249"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lombokpost.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Gencarkan Literasi Keuangan Lewat Pindar Mengajar di Mataram - Lombok Post",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e1d1d3463a77d654",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "78a1d5d42d066d22"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Dorong Pindar Perkuat Fondasi Bisnis & Pacu Pembiayaan Produktif - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e20533073f7ae020",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5cdbeb7b26ad1f80"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.lampung.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Cegah Judi Online dan Pinjol, Propam Polsek Sukarame Periksa HP Personel - Tribratanews Polda Lampung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e46a05316ad91eb9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6a6b2a71ed48d9d7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang apa kah ada DC d wilayah Jawa Barat, aplikasi pinjam duit, kredit pintar, easy cash bang,,ibu aku ngalamin pinjol s",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e5d2581aa63074fc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a4ca558739e63a19"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dongkrak Peran Pindar, DPR Tekankan Hal ini! - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e623aa8eface2bcb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e87a836ce58edaa1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Best banget pak. Sukses selalu pak . Sehat dan semoga selalu dalam perlindungan Allah SWT.aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e62edcbd2f0c52cd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c6c7775784188d72"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selalu nunggu vidio2 terbaru nya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e80c419158a4971b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d1625953f4686399"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Itu bukan lumer, bkn stengah mtang, itu mentah dungu😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eaeff4863e1f065d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "48685b7dd02e63b2",
            "6424bd09a9efe38f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "idxchannel.com",
            "rctiplus.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perkuat Pengawasan Industri Pindar, Ini yang Jadi Tantangan OJK - IDX Channel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed0d6c1a91788bcd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f7b4bd84ecd4945c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pengganti Skor Kredit, Nomor HP Aktif 10 Tahun Bisa Dapat Pembiayaan - CNBC Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed6732cfdc25e7dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c09301a178ca7c5c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Program nya bagus .. tp apakah diikuti dg sdm & sistem yg kredibel ? Entahlah 🤷 \nYg udah2 sih amburadul tuh MGB",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee5dde174f53ddfb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b622a5f16b79529a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Minta tolong bang berapa aja buat makan udah 2 hari cuman makan nasi sama Masako doang di perantauan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef25af85a2bf89eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ab61e7958977e54b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah Semoga dapat dana kagetnya .Semoga rejekinya mengalir terus bg , sangat membantu bagi yang membutuhkan 🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef6aa74557d8c156",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3d60fc539a0d34a1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar dan BPD-BPR Menjajaki Kemitraan untuk Penyaluran Pembiayaan UMKM - SWA.co.id",
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
            "e5a9a72287518759"
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
          "id": "auto-f0cb713ce972eed4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f68836e435bb06bc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Mencatat Pinjaman Daring UMKM Capai Rp35,12 triliun - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f0e3502a4fb0128b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "49d84afeff6aefc1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pantang takut pantang malu. .. soal dc lapangan sgt sepele",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f0ef28740017dcc6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "183dd2454118f2bd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah ya Allah semoga dapat rezeki buat keluarga dikampung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f17dde1df22ab02a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c0d747628bb66e56"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah mudah\"an ada rejekinya buat bertahan hidup",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f3683e6e648e2e06",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4a3248fd754f6016"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kalimantanlive.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Dorong Akses Dana Produktif bagi UMKM di Tengah Lonjakan Pembiayaan Pindar - Kalimantan Live",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f410a03c59581b3a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "53703c4b7674de8c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "aku tidak akan menyerah....bhhhhh😁😁😁ku kasih kempol trussss...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f41582af084e6bfb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d3173d605306d1f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "YUP di daerah bandung barat, di datengin gk bg?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f428fcc41d49e10c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d6ef75e9ab17af12"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "next konten cara negosiasi nya kalo pas bayar sisa hutangnya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f52cc1528ea6a964",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e53daf9e2f39046"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yg pinjam pinjol bukan krn boros gaes.....ada yg krn bener2 terdesak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f780c558f289b2dd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "edf4285180c22e46"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Biang keroknya..... \nnggak sih😁\n#BOIKOTBANKMANDIRI",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f825004d402b2578",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f29caab7c0cf1051"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sesuaikan Batas Pendanaan 3 Fintech Pindar, Ini Alasannya - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f995a9cc904bd26f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4b4e085aaa92f98c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang..semoga dapat buat belanja harian..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fa2e31d2f6b7f117",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "35b03a1dfaaeb613"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "garut.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tasikmalaya Ingatkan Warga Ciamis Waspadai Pinjol dan Investasi Ilegal - Pikiran Rakyat Garut - Pikiran Rakyat Garut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fa761759aa4818ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e116d01d0f1b73e4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detakkaltim.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perkara Pegadaian, Uang Pelunasan Nasabah Digunakan Bayar Pinjol - Detak Kaltim",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fb712a554197dc3a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c24c0a7ebc2295bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah dape daget buat nambahin benerin motor yang jebol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fba962e2554e8c39",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f0b4ed5f241d3e53"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "viva.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perkembangan Fintech Makin Pesat, Efektivitas Pengawasan OJK ke Industri Pindar Perlu Diperkuat - VIVA.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc277285a9a51462",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "13773594c5d32aee"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Terus Meningkat, Nilainya Tembus Rp35,12 Triliun - Suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fce626d49df0740e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7143d6b314aa9708"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah mudahan ada rezeki saya, insyaallah usaha tidak menghianati hasil pokoknya semangat terus buat like share dan ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe387b4dea101940",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9ad953c62d1e27bc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapat buat bayar uang spp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe9391c53b3d557c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "04e1fa6732cfe864"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Baru tau deeh,ternyata pinjol dari mandiri,bagus lah di boikot rakyat.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2eac2bb83577e5c8",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "9cd7660cbb4cc032"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Soroti Risiko dan Pertumbuhan Industri Pinjaman Daring di Indonesia - Readers.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3b45e9d9cd53686a",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "24aa2b1ea40c8dc8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suarantb.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Daring Terus Bertumbuh, AFPI Dorong Literasi Keuangan dengan Pindar Mengajar dan Media Roadshow - SUARANTB.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3eb66b048a512ea4",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "f62fd07e90037e3c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kejar Pertumbuhan Berkualitas, Kredit Pintar Dorong Pengguna Perkuat Kendali Finansial - Infobanknews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5f1c3c2a2b5a0846",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "81b74810e4e91a89"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gartonnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Tumbuh 23,25 Persen - Garton News - Garton News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a7ff3be309caf655",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "f1d42cbda9bb6272"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sulselsatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penyaluran Pindar ke UMKM Tumbuh 23,25 Persen, Capai Rp35,12 Triliun - Sulselsatu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f1d756515b51dc60",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "5cb3f8346ec908f1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaragarut.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "BTN Catat Laba Bersih Rp2,51 Triliun hingga Juli 2026 - SuaraGarut.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "78a1d5d42d066d22",
        "f0ef3a6399299495",
        "9d995b6428c4b3da",
        "6bfc0653249a18ac",
        "5fd34ff700b1fbdb",
        "a4ca558739e63a19",
        "4091b2cc6162881a",
        "f62fd07e90037e3c",
        "b635c4e42f1da6ac",
        "94dcbbee24699efa",
        "c3618e7feb315723",
        "e88fcb2b667cb7e6",
        "b97f7039a086eb89",
        "9ef84706905d7e6c",
        "f1d42cbda9bb6272",
        "7160c356e4dc9507",
        "2121c31fbf2e06ed",
        "f0254a3b4d424a1b",
        "5e3de4d9231878a5",
        "527281a8eff62f87",
        "15c29c88c06e12f0",
        "b6cd255110405a66",
        "75cc0a8f3f9bd48e",
        "f2d470a7b4e55b48",
        "29a376d0ada5c8d0",
        "e82894d6bd9dc895",
        "7778c85f05feed09",
        "780cf04489c1e4f2",
        "571071a46ed69fc3",
        "e0ec6cbeeb5d2a25",
        "cf23c2ef3d65b89b",
        "34f7932f469d4031",
        "fe87454a2bdf317d",
        "5cb3f8346ec908f1",
        "abd260b04331a4fd",
        "b24ee8a65433f68b",
        "4bb62df4199c47cf",
        "87da6ad4498f96a8",
        "83d30ec41ec75000",
        "96e97cc83fd61488",
        "80140cf5573fd8a0",
        "4a3248fd754f6016",
        "30d1c72aa990d867",
        "e73e01c80373cd5c",
        "6b26b244be5718bf",
        "ae07885ac3eace45",
        "13773594c5d32aee",
        "7a214841b80554a7",
        "0c44a42734c290dd",
        "965b373a5180f27f",
        "49b106541e0af945",
        "39cfbfe7e4fa1915",
        "ab4ac5793335d785",
        "0010443a51e6556f",
        "d1977329377e1ca7",
        "8ae8b940bb2e969b",
        "213685836398d0fe",
        "f68836e435bb06bc",
        "f29caab7c0cf1051",
        "793b62b9388628c9",
        "0a3bf1cdc77b8249",
        "fb7838bd9f1026f0",
        "a5b9e7f5bd2ae30e",
        "7526d64c3bdfc461",
        "3a09f7b4352508ab",
        "42344f779a9d0129",
        "f6ec20d4c4809cb2",
        "52b3adf1ff077159",
        "f02950a798ce8fa4",
        "9e82ac8735cb4140",
        "a0f3a6ea2c8251ca",
        "4da5f411377640a4",
        "492ad68eed2e960e",
        "87580afc389f9d43",
        "193bb051692f691e",
        "d488db7410568c5e",
        "f0b4ed5f241d3e53",
        "48685b7dd02e63b2",
        "6424bd09a9efe38f",
        "3d60fc539a0d34a1",
        "24aa2b1ea40c8dc8",
        "e91774f36de41587",
        "cb61c690e59db391",
        "493ad779dbf81114",
        "cfa0cce62fb77111",
        "bddd3ce3689f5fc5",
        "81b74810e4e91a89",
        "f7b4bd84ecd4945c",
        "4c7e23caf51c75a9",
        "d14cf55b5874052d",
        "fa9d02a43c7b4d25",
        "f6775705530cefed",
        "d64f42555a5cd470",
        "f90c1cd5dffca5a3",
        "a3db1b7f0ce9d8c5",
        "ae7e68ddff03c443",
        "5cdbeb7b26ad1f80",
        "a58a84d05a2d373e",
        "c8f3215ae4184f69",
        "84c1446a7725989c",
        "0d615597677e323c",
        "bb332244984fc023",
        "d8a7d68a1822e828",
        "6d7ade1ca5e4540c",
        "ccda489e995d62d3",
        "2e70f3b9b50ac00a",
        "b60ad909e1acb86e",
        "d0d5e7b1d9d5e7ed",
        "0e14ec1d783375ba",
        "9cd7660cbb4cc032",
        "2cef9f8e778efa31",
        "35b03a1dfaaeb613",
        "83e395b3255f0dd7",
        "e116d01d0f1b73e4",
        "7691110573b17a2a",
        "64a58494c933ac37",
        "3c65673c3c9d0b4a",
        "5ac441b747df5b83",
        "56428c45a24926d0"
      ],
      "socialItemIds": [
        "173fc1a2ccfef57d",
        "34352e218a32c396",
        "afa90efec443ab38",
        "af3737f897b6afc5",
        "1a5c2c068fa6d51f",
        "e613096c2ef502c6",
        "4152430f1ea1b225",
        "b54f342895572c3e",
        "91b16e9b9f55869f",
        "af3ef64c23b285a9",
        "9e165d7e165e5aa7",
        "b3f135bc251169a3",
        "183dd2454118f2bd",
        "9f13a0d9c65437ab",
        "d964869a93dd0b5c",
        "fb17c2db73961603",
        "cfbc164d2771b326",
        "2acfa11f7c620e85",
        "8871c052e1cf2ca7",
        "e1c8e6bc946a51f2",
        "8155c712b17e6dac",
        "a6dfcf39e00ba2a1",
        "a4a1dea9718ed23c",
        "9cec9340fe28a8d1",
        "0e8831514870abb0",
        "4c54c1a016a09e4c",
        "bf055167ed32c5c1",
        "695f98ed4bd2784f",
        "c91d207080810c30",
        "61dfe1e8a1c3da6a",
        "b622a5f16b79529a",
        "134f456485737052",
        "3777643a88473ae3",
        "66dab31d631d9830",
        "c09301a178ca7c5c",
        "93421ccea95bcba0",
        "95fa778f7cbe7990",
        "8c22dfd7ec6c5a64",
        "c5bd620f27eb1dea",
        "9ec7c425312fa876",
        "13c9c8026f1d8360",
        "c494c779fe88960d",
        "0b558e87c1a7c290",
        "9dc19a6285a5ed63",
        "a5410faf6db9a171",
        "a2d9711691e7caf8",
        "b207d36d14a8bcf6",
        "d95258f1c321ad5e",
        "f6d7edd8b6f73a4b",
        "e6db36bac3c47b8b",
        "9e53daf9e2f39046",
        "abfa5d2afbf58796",
        "daa3508a8017d6bf",
        "b41137ef6e4f7cff",
        "24fb55bd38abc553",
        "7c0be1d69b4aa7d4",
        "1af4bc7ac5e28a49",
        "49d84afeff6aefc1",
        "1229dc9453998898",
        "b7ddae40da2d4687",
        "fb9a27bd5f647b6d",
        "3f924c1d841bcd06",
        "39a3c3b60d81e8f4",
        "2d1aad4225f867ed",
        "399b3658c2e8a053",
        "4a70b0aed7b5bf44",
        "8f2518197a6b4b39",
        "0aee82dfa61ef0fb",
        "bb9421cd07f5e728",
        "e96fd6bd690e2676",
        "1b6d17cbfe53ff5a",
        "b97e7c696d9ee388",
        "dc265b1f84f5886e",
        "97f6c975cd7ae8d5",
        "b8dfeb23bd39cb9a",
        "0023e15633125e10",
        "0a59d5939f7cd9c0",
        "c44d8ea5fe0b9041",
        "81f896bd03190992",
        "e9b6b89926689aa6",
        "dbc907b83daaa86b",
        "d4ee2440b2b9cb25",
        "025255a1aa3c5f32",
        "bd988ebf1155559f",
        "7b7503c7f9888038",
        "491c47d6dcf20837",
        "d679659b465ad538",
        "3a26ce129c0ae814",
        "c6c7775784188d72",
        "66c56e4952642c17",
        "c263610c3964ae72",
        "a59348693750fbd6",
        "c010395740048ed3",
        "88f8f534f9aeabe4",
        "08aa4753a6d6da98",
        "43ffbf17036b4226",
        "3330187d5e5ee618",
        "06f45d148a8911bf",
        "b73b91aa48c5e961",
        "d6ef75e9ab17af12",
        "a923ead85abe6c4c",
        "2df23a7f4436f82f",
        "4783f6b125def441",
        "e561400205f32e5e",
        "d70555ee5090f77b",
        "400e2c868253f093",
        "82ede473695a8674",
        "ec30103c9b8ee94a",
        "77a9c53e46cba98d",
        "a806dbbfbf2523bf",
        "c4693e5b01436e0f",
        "f0bdc1086f210d42",
        "bb06ad7beddd78a3",
        "a659b74e9a4d467a",
        "2df6d22cc4ee0dc6",
        "51dad13b73f60d6c",
        "79164a76a0dee88b",
        "329efe1929877d36",
        "2778d27742b14ab9",
        "91293650a862a2c6",
        "fe8f455e926d07dd",
        "6bd21a9b89fdbb18",
        "fb514ed6a1448798",
        "a6118496a7473f48",
        "325d3a303a2b6aee",
        "d0f7906bffeb1167",
        "cf6b62d0522527b0",
        "344ec7a642858206",
        "fc9d29e224d5767d",
        "7547e02b1914b1bb",
        "02320f9f6ea08369",
        "e5a9a72287518759",
        "9ef319cdb149a338",
        "2ee201d49725a722",
        "2d3173d605306d1f",
        "18099281aec6098d",
        "c24c0a7ebc2295bb",
        "aab3a01ba7a1691d",
        "8554cc31e250dbcd",
        "78bf1bfa3447e462",
        "e7ae6830ed64c1c6",
        "77a38c534bd14e2f",
        "d57eab18f96b9601",
        "6a6b2a71ed48d9d7",
        "3b74862d3e2d081b",
        "dd8f640c16792997",
        "874e4462a4a0a458",
        "45829b201db115ae",
        "4ff4e365c33489d8",
        "ce904489e510319f",
        "4994b6e94816a4c3",
        "0afd937bf9b59d47",
        "2f22c12b7ae06532",
        "0dbee4a2b5cd740a",
        "d1625953f4686399",
        "2a8e689e5a3c5efb",
        "735d891b5482e073",
        "611710b170926008",
        "5fd4e0d814d7768a",
        "afbb96f9b2da37e9",
        "e8b8d9fe212f6d23",
        "35ceed102239b123",
        "6b05a00584649985",
        "315c0e498354cc15",
        "bb92ae88b25f01f5",
        "66381514fb244271",
        "e56f8066b743b18f",
        "c4517e3182c61d2f",
        "6928daccbf54239e",
        "404db75955191633",
        "53703c4b7674de8c",
        "67d1b8c39885349e",
        "7143d6b314aa9708",
        "9ad953c62d1e27bc",
        "2996358404071481",
        "04e1fa6732cfe864",
        "ab61e7958977e54b",
        "d8deacce0efd0468",
        "38451078ad6b73b8",
        "ca6df7e970cdb8e0",
        "96d058d4938b7f55",
        "7050c883d0b00eb0",
        "4b4e085aaa92f98c",
        "1f365a4b093ba792",
        "d6c2cbe47399b11b",
        "1b3edbdd3ef9d191",
        "6e13fe415236418c",
        "a76a2eb89f328843",
        "391a12b27ddf5a46",
        "0dcb2d101a7c8e28",
        "6dae71cfb4b99f4b",
        "9a086bae809f8e15",
        "f4c5de5612137bf6",
        "2ed50d26e827b944",
        "e87a836ce58edaa1",
        "edf4285180c22e46",
        "ff84b9660d9a318b",
        "75d171e3a152af94",
        "1043dae2c38d6653",
        "e118db749ffa031b",
        "4f69cd847cf3edf5",
        "d1e98f3a864abccf",
        "0fa7dccef44ffdaf",
        "2bf57b71b27560bb",
        "74756747fbc1bc87",
        "5c2f766ef2c01477",
        "c25e2c94ee713820",
        "c0d747628bb66e56",
        "efeb7c02c056d104",
        "3a907c8108da7c51",
        "cb650093882b46e0",
        "6b8f16982ce453c5",
        "ed11060e0e0a07e9",
        "f53db9cc367c08a0",
        "4a9c5c9d558f32d8",
        "2a4dbc62851ed974"
      ],
      "_newsVolumeRaw": 119,
      "_socialVolumeRaw": 282.0
    }
  ],
  "articles": [
    {
      "date": "2026-08-17",
      "title": "Fintech AdaKami Masih Temukan Entitas Ilegal yang Mengatasnamakan Perusahaan - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNTTNSVFIwNWpqOFRnc1k0eFVicV9BN21LaDBaVUdPWkQ3a3BGTlR1NU8wRHhybFd6VlVVWHZXaGVTSDk5blFNbU9oUnU5WktWLWZJQjFobVEwcWNUTnJuMklLeU9SMHBFMlZFWks2dmp4dEVNYXkxV01MVVRnMG1vaVFuODRFZUJzMGZ2V2NsSWEwRW42T1VVRmREZW5WNko3cmU0ZGxhSVEwa21lSmlTUdIBqgFBVV95cUxNdVdMMUtpaGtZWTRGb1JFYVBJV0Z0NHpObnhIS3pVdVF1U0xQSEpEUW40NU9DRHk0UXB4TGxwYk85ZnZ3NU9tTHlWYklxdEJvdkxMQzhGRmNlQlJkLVh6M003cDZLT09GYU5xLXdlSURhZmtEV2JfdXVBZWlPc1Zqb1VOckFVSzhsaUZYYjg5aTNneVZsN0pGWTduXzh2bm1VNlZaRms0c3IxQQ?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "fintech adakami masih temukan entitas ilegal yang mengatasnamakan perusahaan kontan co id",
      "id": "9b29ea5cf5953866",
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
      "eventId": "auto-ef2f532320901ba0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "16 Pindar Kredit Macetnya Tinggi, OJK Ingatkan Risiko Ini - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPWW1kanRGTEcxa2JWTUZrVGxDR3RLS3lXMklUeVNLbFNuN1B0SGJnS0kxSG5IUE82eXRtZmFJVnZGdjNVanFyTU96eHdzS2xPRGdCdGUtMlZIRTFnS2VKUHh2MW1xcmJFT3pqLTdpbXo5SkJ3bkZUdlQzbWN2alNJRkZwR0gtWUpHdzZZUFdONlM1YVBOT3NuYkU1WXJmSnV4VzRWV2ZhWjQ0Y0tkZDBjVm9zMGdRel9nZFHSAb8BQVVfeXFMUC1ad1h0Um82eFY3UGhsMm50Z180bjZVUlJpMGlrdGhZd3Y2WjBsVl9vTURiU0xtN1A5YXZUdG9lUXFxbTJ2LThkNnRWUFowUktTYlBkZU9nUTE1UWZhcTB5eFNJOHNkZXdsUk5nVW9ETWhhYVdpcVFwRm1McHNpREFhdVN0a1ZsY0NaaXF1c01HWGtjTFVJWk1NUHNrZkl0OS1FMlFkeEc0R09DdmRLcDZ4Vmh3WDUwZERjSmxHZ2M?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "16 pindar kredit macetnya tinggi ojk ingatkan risiko ini cnbc indonesia",
      "id": "1cd6247f9544a2f1",
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
      "eventId": "auto-5156e439218891b4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "Apjapi Jawa Tengah Dikukuhkan, Siapkan Jasa Penagih yang Kompeten dan Taat Aturan - Suara Merdeka - Suara Merdeka",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPUUhoTmdqd0FCMUpHMHdoNGdHckx0Sk9Bc2w5VmdodWZyYk5wTFh3LVZLT09xZjQxSGE2NDZPZlhyZExsTFBGbkVOWTZDaUh1Tjd2UDgxTUJ5SElQdjJPQ1NCMVRGMkx6ZlJyRzZXM0JyWFo2cWx2RnVpQW44ZUVmbDQ4bjdVOVlDVGNpRkdIZmx6UWFjZWFDMGkwMk1QQkxLRTZjT1hNNDhPTHpqQmhUdF9rQm1ZTnc4c0l4VzhKbk5LVEFKMlFUaW1KUk02dk3SAdQBQVVfeXFMTzl0aWx1NTBMVzRudkE3Nk13aFN4aUJGdVB1Tzc0eUljYzRReDF3SzY0WFJKY1AxZGMtVkRJRHUxVENxTnBKN2N6SWdqUkdfMDQwcTNHRVc3RVZYX2JpOUU2R0lhQzBiM1g4dmdZb0pJU1BKcjAteWRpVHczVWU5V1J6TG40S0JKWnhJbUppcXZqejgza3ZET0xPS0dXdHNaTlY1ejRLdWJLcnFOWkZJZ1VNY2NEMGw1NXZhMHZrMXpLUENpd2hsVVZ1cnJGWUVmSVAyZnU?oc=5",
      "publisherUrl": "https://www.suaramerdeka.com",
      "source": "Suara Merdeka",
      "summary": "apjapi jawa tengah dikukuhkan siapkan jasa penagih yang kompeten dan taat aturan suara merdeka suara merdeka",
      "id": "dccf86a47e00a1be",
      "domain": "suaramerdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ea79a0a7038ad74",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "Download Kreditku Apk Sfile, Legal atau Ilegal OJK? Apakah Ada DC Lapangan? Pengalaman Galbay Keluar Kondar? - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMiggJBVV95cUxQbXhwSGNNYkVTaWtlcjlzOXg5WDVZb3MwS1hSNVRrcmdjSDdiX3RfS0VNQm52bTFRekE1S2k5MUJHdDNZOHFhMW1yMklYVllVZC1YWndvVXhaSTlWb210eW5SejFKMndycVk5cjJXWGtJRmFfczRWRDIyNDducWFFRnpKbkp6Z3NzQ0h2ZVVxS3czc0p3akw4dFNsNEtBN2pGaG9pcFU4UzB2cXBtTG1uTWtxa0NIdVRTaGZXMDFXRzVvMjdvQUVBRVZtaktvSnhCOVpROW9zM0g0MllKQ1djdmNKVkFlZE94LVFheHBJMkJaME5KQjBJY1pSS1ZMNjNnY3fSAfsBQVVfeXFMTm5FbzRnVFNWS3liVlJSSDZQeTZCdzdQd1JPWHdINXo0OEZFeEFvYXh6Zm5MT1RVVTNPSDQ3Z2N6NVBRTHlSS0l4TklYbHF1WE04UHNId2dfcHZoNjZaZVRhLTVDZFBQbDFHRE1YcWtab3paUWtXUE1ENW5naWhCVWlYRHU4MWtxUWJOaW5BN3gzc2ZqbDJ4UURNQVg1QXk1R3JMQUtzWHA5T1VuLXpYQVVrVzBvWXRSelBNZHZTamNFWXd4bUJNdVJZZXQzYzlNT3NwdFhBUGVMVVIySi1HbWRmZ2o4eW9xOFdaYjFNYm53OVgyZmREVEtXQjQ?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "download kreditku apk sfile legal atau ilegal ojk apakah ada dc lapangan pengalaman galbay keluar kondar berita diy beritadiy pikiran rakyat com",
      "id": "0ed3f1da6782f848",
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
      "eventId": "auto-84b9ab7992d4628e",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-18",
      "title": "Hukum Tidak Melunasi Utang Pinjol Ilegal dalam Islam, Penjelasan Ulama - sumsel.tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQRF9PejN1Y2hYeUxmdTIybnpTc2Qzcnp6blRBUEFGMmVvMXdTdzg3U1lYNVI0d21TejZUaDJFanc2MVdMdTF5QmV0d1VrLVVsZmtKcG5UQWV6WmpuSktGbklsQUxQdlg3Y0dtcEVOTXhLX1pXMnpKSEtYbk9OdWt2N2RuMlB6UWVnTkxXNWZvQXA1b2NCRjl1V0JmRUdxSUk4WmkteGs0Q0swMTh1VGo3R2pzUy1iVkMw?oc=5",
      "publisherUrl": "https://sumsel.tribunnews.com",
      "source": "sumsel.tribunnews.com",
      "summary": "hukum tidak melunasi utang pinjol ilegal dalam islam penjelasan ulama sumsel tribunnews com",
      "id": "87625f6aaeb87697",
      "domain": "sumsel.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-71e72a497df33165",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-18",
      "title": "Jangan Sampai Kecolongan! Dana Pindar Makin Deras, Pengawasan Harus Diperkuat - koran-jakarta.com",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNbnFUQ2QtaXlsLTBpX2xiOVF5Uk5wT2JnWUVDNGRhS0RLd1RTdE1ZWF9idGhRSHAtTVpma2tlR0FyZXQ0bFhwdEJMWkxweUdmZWw0WWhpdklQQmptOFI3cEkwU0hQRHpHcDFDajM4XzNJaFFCT1hBWXFTdEVDUjRrYm8yTXZJbW1udHN0bXFLREZyWkltdTFRbUtaaV9OaGRvNGkzbERzNVJhYXgtNXZyNktB0gG3AUFVX3lxTE5rNDRzNFpGMFlrSV9XMEhyaEwyb280dnRoU1FQQ0NVbGN0WTZmUGgyT1RkVUJOQzlqVmlKSjhfZlZyLUR1dDh3eXNxWTRWYU95SFZtdVpGUndFNGRNbDRtblNBNDhxZDFaQTZHYnoycm42SVR0cUVwZVFkMElkWXVaUzNNajNqR0dxS2pwUW9SRmJib0c4NlBJd2lYbGg5YmJQeUZjZUJzbVp1c1NXYU9uSG1oR2JVSQ?oc=5",
      "publisherUrl": "https://koran-jakarta.com",
      "source": "koran-jakarta.com",
      "summary": "jangan sampai kecolongan dana pindar makin deras pengawasan harus diperkuat koran jakarta com",
      "id": "81c234d46d348777",
      "domain": "koran-jakarta.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4b70d6cda13c8b13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "Lender Asing Rajin Guyur Industri Pindar, Ini Datanya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNR1EzNS13R2dSdU82Ty1aS1RNaHJEQ01xc19QVmJBM0tMd1ExeG1sVUF3aS1fU3ZZTVZiT3BYcnJxWGwwSTNIVk9MQjNMVUpqSnZXV1QxRWQ0Q1pmd3IzTnp1TUVKQjFFd2dmUkNZVFU5SUI5TzR6cE14MWh3X3JKUm1lbw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "lender asing rajin guyur industri pindar ini datanya infobanknews",
      "id": "703bb14a90369a78",
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
      "eventId": "auto-400b36548b060884",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "Menko Yusril Ultimatum Pengusaha: Setop Debt Collector Ancam Konsumen! - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOOUFQVFYxd1hoWDF6aG5Fb1lfUkdGRk1saXBRSVM1eW14T2dod1NISWVIbkttYjVHdDRUeGNiRG5YTmowVTZ2M1RuOUQ2OTJFV0ZvVF9ITUNzYUtMQlJicmxIaU9XOVVOSE5Ha3dZQkxIWi0xMlYxVjc4SmtyVDNNQk1Nczdzd2ZRZS1hQ1FhMHpXZGlwbVlCQ1piYUNfN3FvT01aVS1LZTlXQdIBrwFBVV95cUxOUmdmYWpIVlBrNFV5WmtXam92YUZ0LUJoSVpJQ2hqZGx1c3lhS0VjcnU1bGRGdFlmNjhmSGxtSTI5RnRxVkRxRU0wTU9BS01PaFFfRkxuNFUzeGxFbUhwSHJOU3lHLWdhdzQ1dGFQOE9KWTAzS2h6MWhLaER1VjFreEt1STBKbk1MbndVX21WZzRxYm1IM2dtYVYwR2pKWnRqZk94VEpBd19yeGJwY2tr?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "menko yusril ultimatum pengusaha setop debt collector ancam konsumen wartaekonomi co id",
      "id": "556ff62d6ad6cc84",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 80.1,
        "label": "negative",
        "negativeWeight": 4.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-25d0ceeda0fec441",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "OJK Masih Dalami Implementasi Asuransi Kredit untuk Fintech Lending - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPX0Q5S1F2NU1Qd1lYalkxMDcyZVl4bERhRUVqUHRyMjdWVTU5cmlTOHYtazVKRnJXT0xjb00wcmZrOUd1dVRQRTVDdHZTWkhWVzExMmtIay1wOTI4TU83MmdoVjhUVEVvWnhPZ1hOenNlX3RwTF9ibWtGMzRiVmNCanZGbUJYU1pMeEJWWXB1anlyM0F5ZnJ5U0ItUWJHUjcxajZLX040dnpMbllDbkE?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "ojk masih dalami implementasi asuransi kredit untuk fintech lending investortrust",
      "id": "fcfb23a68987d6b9",
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
      "eventId": "auto-91ffa99a8e358a18",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "OJK: Pendanaan Lender Asing di Pindar Melonjak ke Rp17,28 Triliun Semester I/2026 - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxONFFLMzhYNUdGWlRQMW1zMFNlbGpEeFpiWl8wY01mcHhEOVpwSGh3Z0FoR3JibjZnWU50d3NZaGtObTc1eng0ZHFjZDBqaEQyenJUMHJ0ZUNJQUpWRUZ6c25fZ3ozRzhQXzRYaWgzQUhaN0pTYWZqSEh1ZEstWTVKYUpfQVE4aXhYWTA4TFplZG1UQzRvNVFGb2ozZTlIa2NKRXpzVDVxWkNVcGRUYmlMUlZVRE5ENURYVUl1WEdRcEFlbnhzRmpSUmtfVVc2QQ?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "ojk pendanaan lender asing di pindar melonjak ke rp17 28 triliun semester i 2026 bisnis com",
      "id": "3d7a39fbf51d3bec",
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
      "eventId": "auto-f0b7d74d6a041ea7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "Panduan Nonton Grand Prix Sepeda Motor 2026 - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE83cTBBUlZzMEs4MVIzVE5LRnJXRFE3Z3hCdFphZE1wbWwzSzI3aHc5M2VyN1pJMWEtaTgzUVNjLUhDY1Q5dW54bUg1LWNTZURsN294YXBZUUtDRHFGUFdCRVgzSHJNdXA5djZBX3hPRQ?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "panduan nonton grand prix sepeda motor 2026 kreditpintar",
      "id": "3750576af0ee1c23",
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
      "eventId": "auto-24ab1a8e29d8d529",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "Pengawasan pindar perlu diperketat guna cegah penyalahgunaan dana - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNS2RXNkhyVFduVllPZ1BvcVdGTFRJX1VhMkdjellRbnJIaHdXWkJqVEV2dzJSYnB4NUtCVjFobDFzR09iRGFBQVByM3FrU3JIb3VTdUEtS3djYVc0cUpFRGVHTTJWQmswWWxDVnRnODRWQ3RBYklkZm5ROXR3MlUzU3pqc0w4aHQtd0JKRGxSaUVnU1VVQzdCNU1zUFNxa0doRXowYUczaXFJS0HSAa4BQVVfeXFMTU0tR3JLbTNfUEdJOU5zSlJLS3BBOXotckdKeTgtZHFmSElaQ0gybXprNlREM0cyRHRSMlhHYzJQamRmYTBjU2VFNjRhV01hcmN5VTFOcmdDd3h0RW5aOXBGRDNWdXpiWnFkZHJweW0zbGNndS1yX3N4MGx0aXR4Y3Y2NTBwS3dRWW5UaFBjejJtOTBNdjFidnBQSEJpNGJkRW9QbWNkRTVGZnF2QXR3?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "pengawasan pindar perlu diperketat guna cegah penyalahgunaan dana antara news",
      "id": "fd94b815690c4544",
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
      "eventId": "auto-bb855480e79678a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-18",
      "title": "Pinjol Legal OJK Bunga Rendah Agustus 2026 Cair 5 Menit, Ini yang Perlu Dicek Sebelum Mengajukan - radarcirebon.disway.id - Radar Cirebon",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxNZzJDSHk1TzdNQ3M3cHhqWWRQejVlTW94NFVZdU9BMjJPenZ2VXhfRmlEX1JSMm9VNWxDUkFibnpVY28yQ2JvNG9tTWxFOUZRVWJHX2RHSVV3c1J3LXhkcUlMZ3ZzanlqZTZlT1ljb3BfSk5TZHhldUFxbTBTS01xV01kX3lVeURUWXEyVVZKUlFwVGpNSnBSZ2JmZWl2Uzh0eG1rVFlBVk5zWlQ4TGEzM1VzdXJKTEliMmZwTnRaX3BhLVVOTEUzNGRfRVpjNm5IdjNoRThUSmdmZkZaTENjQdIB0wFBVV95cUxPY0ZERHRYM0JmZl84TkhhaEZaX05xbElIaHpSRnRUNWo4QXF2MUJEMDhPR09qcUFqY2l6bGhTS2RHZ0lVQXJtbU8wREpZQjFDbmFDMVFXRG1kQW5OR3NKQVZQQWNGSldlRGVPMzAtdGd2a1FDcjdoUWQzVG9hUHRvRW9zM0pNQmdwTFlnemNDdU40c0NhTjNNYnZKVTN6NzVXdmVyOUJpT1VPdkNxOFdxQnFySFBYS2dGYkJmWC1QRXBCYmlSUmM0OUJOeHYxeHpvc1Vr?oc=5",
      "publisherUrl": "https://radarcirebon.disway.id",
      "source": "Radar Cirebon",
      "summary": "pinjol legal ojk bunga rendah agustus 2026 cair 5 menit ini yang perlu dicek sebelum mengajukan radarcirebon disway id radar cirebon",
      "id": "3026346dc1690fed",
      "domain": "radarcirebon.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e781e44f023658d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "4 Alasan Shopee Pinjam Belum Cair Padahal Sudah 3 Hari Sejak Pengajuan - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOYl9pa3ZfUHFDT3dWVzd3a2J1dVJxZ2JFSl9CR0RTM0hlTlFpcThXQU4yM0IyZkdhclQtcXI3SmpwOGVMM3ctQlUxc09NbElFLWI1TDZVQ2sxVnRBZklseUJELS15TTZ4QzgzdUthUGZ2dGFtQVh1MEwxdVRaejZxcHEwODJkVEpLZTdJcTM0ckRuVnUzLU52Uk5ZSGVDWFRwU1NUQ0RFN0RPd9IBqAFBVV95cUxNeUwycVN4OTUyVDlfMDZ0SUhUYUtlZFNfZXMzS1U2NzVJY3lBSEwyYnp1WkN0aTZGZEd0ZVpwajFpZHpvcDF5V2cyYnJHS2M4Q2hLOW1VMmdrYjFkTTJGRFk5SnhPX0tuNkJhend2aE1BSWFhVE1wVkJOdWJqY3FpU3pwd2J2SW9FamhKX19vUy1sRUdDVGt4SEVXbW51OExfek90bUduZDQ?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "4 alasan shopee pinjam belum cair padahal sudah 3 hari sejak pengajuan grid id",
      "id": "68daf8bf94d5b71a",
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
      "eventId": "auto-f71bb43d3547bedf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Cooling System, Polisi Gresik Edukasi Warga Bahaya Judol-Pinjol Ilegal - detikcom",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOSHRkTTY2ajI3Ym80UjlORFhQRmpCdUFYNUs2NWR2aWF5a3phMUV6QnJMNmo3MTU3Qkx2cUREczdRTDNLR3FHbnJ4amNlUzZydTVfVlB0VGZDWWYyZ2o2SzlqTUZMX0QxMkw5SUZDMGRiSUNTcHNrRlpoTzRqT1lsNE9Qc3hZV1R2cGVFVkRTYkRUcWFtS1h1bDdmMjV6d3F0LWZtZmFLVklPQXFnVDZoZ2NIMm52eGMzeXfSAb8BQVVfeXFMUC12WkVyLVRPQWhpRnhoRkdTRVZMekFpVmFuQy1Lb1RrdjY2Q29ra1h4Q3ltMlVwSjAzenRVeUxwdnN5M1FkMGFhLUNESFJCTWRkYm8yX3R6QXpIaC04QmhqVjA0ZTNSTDNNS3VyVUVsaXRTZ3V0ZWVLbjRRcXZoR2dnd1AxODE3X2p6WWZzb09FTVJIRHU4M0xPZkxtQ2I5WVFsRG5kVllsZ1dGbWpqQzZIRTItSkVCS29NendoeVU?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "cooling system polisi gresik edukasi warga bahaya judol pinjol ilegal detikcom",
      "id": "e5b1b06c98ea8755",
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
      "eventId": "auto-dc17595099bdce48",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-19",
      "title": "Jaga Kepercayaan di Era Digital, Easycash Perkuat GRC Berbasis Teknologi - TopBusiness.id",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPUlJMZkJDTmxQVUpFNU5jaTJfendTX0htaERIUVdiXzhyVnJWcWxnWjJOM2poX0cyRTZlZ1JrSEVCLTZJclBacG5mR0oyQmY0Rzg2N01HNktpMDZMY2c1dGd5eUdnaDA4THNKdld2SzFIRkdBTlB0cGtUR3BwcThRZ01nVmItbXdPNk5GRElYUUZfOHR4bmR1M0tLUjR0ZzF0M200eTJHa2tMc2gwNVE0?oc=5",
      "publisherUrl": "https://www.topbusiness.id",
      "source": "TopBusiness.id",
      "summary": "jaga kepercayaan di era digital easycash perkuat grc berbasis teknologi topbusiness id",
      "id": "6a45280b991b1d81",
      "domain": "topbusiness.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4d0d7b6828931a9d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Lawan Jebakan Pinjol dengan Solusi 3M dan Penguatan Ekonomi Akar Rumput - rasikafm.com",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQemN1dGotY0RHRVZRcklvd2hzT1kwOVctaUtZczlBSlF3ZExBSmQ0Yy1VSjBNdDRrNHBfR2RDR3F5TkJhemhLYzdLR0Y1RllvUmlEbmx4UEJqa1pFWHVBTWZoNlU3MXVrdWEweDZOYng2MC1lOWVlNURvc0RySU1UenNvcW1jZmJQSlpia25jSWx1OGM3cU1XSQ?oc=5",
      "publisherUrl": "https://rasikafm.com",
      "source": "rasikafm.com",
      "summary": "lawan jebakan pinjol dengan solusi 3m dan penguatan ekonomi akar rumput rasikafm com",
      "id": "81b42a567bb01317",
      "domain": "rasikafm.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0a62d5fdad6ec9be",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Pembiayaan Pindar UMKM Tembus Rp35,12 Triliun, Naik 23,25% - Emitennews.com",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNcnIxTXBoOWdpRHJOOV9fZmhZOEJFUFZJem5sVGV6VXpmV1lyUkxPbnJYWTBTZmhjUTQ1WFdLdFNMYlFvOVQ5QmRFaTFvQlBpdVBLVW9tak1Gb1RvV3lHR0ZINHdjNFJNR0phalFSbk80emJFN0ZkRGk3eXNUaVR0YUF6d3ZsbTF0QlE?oc=5",
      "publisherUrl": "https://emitennews.com",
      "source": "Emitennews.com",
      "summary": "pembiayaan pindar umkm tembus rp35 12 triliun naik 23 25 emitennews com",
      "id": "69898acf58ca3329",
      "domain": "emitennews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2691e3bec78e53f8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Permintaan Fintech Lending Tumbuh : AdaKami Soroti Transparansi - Dunia Fintech",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE84Z2l5UHlIWU4xblVDV2JxWTFTZDF6QmViVXkzWFpTeWg2N18zaW5QN0sycTdaR2tSU2hWMHlrTnhFVFk0MEhlLVo3S0c0SjhTakNWTEhXNlhOelVBVnp2czVpa9IBY0FVX3lxTE84Z2l5UHlIWU4xblVDV2JxWTFTZDF6QmViVXkzWFpTeWg2N18zaW5QN0sycTdaR2tSU2hWMHlrTnhFVFk0MEhlLVo3S0c0SjhTakNWTEhXNlhOelVBVnp2czVpaw?oc=5",
      "publisherUrl": "https://duniafintech.com",
      "source": "Dunia Fintech",
      "summary": "permintaan fintech lending tumbuh adakami soroti transparansi dunia fintech",
      "id": "91ce7f0c75e9a449",
      "domain": "duniafintech.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4708c930a12c36dd",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-19",
      "title": "Program ZCD Berikan Solusi untuk Usaha Kecil, Cegah Keluarga Terjebak Pinjol - InfoPublik",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOZ3JpT0Y4QXNtMm5VLVNacmgzS18tYkVpNGdfek9qT3czaXQzRmIyNkFWTHQycHd3YTQ4cnFUWmtxcU9hYUdCaXBtdjdBSENHUzFtb21kcG14T1BqQlVxWXJrSnlLUktyWDlhcTZtLVBBeFlheGZFQXA1Y2dpdTJwN1FHbHJWZUZRS2dHZi1UdllMeHhWaDVuSG5nNkNtY3F1WURnVFJBOVgxOE1GNDFuUEZxeHYyODV5SGZBM0tGM3QtazRzN3NkcnoxQ3AzLWR5T3c?oc=5",
      "publisherUrl": "https://infopublik.id",
      "source": "InfoPublik",
      "summary": "program zcd berikan solusi untuk usaha kecil cegah keluarga terjebak pinjol infopublik",
      "id": "a1796f7215fbd877",
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
      "eventId": "auto-46c4631a2015dc83",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Sambang Warga Bausasran, Bhabinkamtibmas Edukasi Jam Belajar Masyarakat Hingga Waspada Pinjol Ilegal - Polda DIY",
      "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxNU1VmbG1MbjJaTjVqY0l5NEtuQWh6amdCMUYwcl9DaHozaUVOTDBTUUxOQV9PdUlBQ3JNY0EwUkpIcTBGcHR4REFyMmJyX3pEcW9WbURRZm9JY2VKcndYN3pRTDBBb1JRNlN6SHpkVWxxTWtheUdDZ2VWZ0FYNHFubl8wakFvTHhRLU02bURidVozVXZyaHM0UjFlbzN5eG80ZTJ6MENzMUN5MV9rRWwwM3BMMi11aENNVlh2bzVQTm44ajdCNmVSUE9hOVhnZ2hYWHoxMEdlVnZNV2VJWDR2WU12aEJlSE1Udld3OHdvNUZQUUUxWEVRSGpHWnVnYkk?oc=5",
      "publisherUrl": "https://jogja.polri.go.id",
      "source": "Polda DIY",
      "summary": "sambang warga bausasran bhabinkamtibmas edukasi jam belajar masyarakat hingga waspada pinjol ilegal polda diy",
      "id": "e1c5aeabe9340aeb",
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
      "eventId": "auto-0529d90cd0db7751",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-19",
      "title": "Sekitar Rp105 Triliun Dana Pindar Beredar, Rp35 Triliun Masuk Kantong UMKM - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPY3JIOXB3dTd3RVRGbEtFT0FtM0J6VERaZWw5c3VPRGYyYmNsSnNUa0NMRmZGQlA2X29MWkhCZzFmeUlHeHM0a0I0SV9namN5MW5ZNWZnd1BNckdCMVZydUJ6VXQ4bnBfTXNoQ1luUVFNeUJULWxfejRYelpyaHJUdTZvUlgwLTc1Zlg0WFdpajdNNWdQWVB6bUpjRmdiUzR6WENIYXRxNDhtR0w0enowNNIBtgFBVV95cUxPMmw5c0lPa2ZNdW5oXzFybEFaaDZVYjNlZzVJVjdGT2VPaDhmZS1sNHZQN05Jd1hYYnllMlJsby1kUXFkc2hWZ0FOeWVZSmt0NFJQaEJLV3N6VGl3N0JVREIwa1J0TXdEMFhJYU1ZS21DNXNUNnhJQUlLZ2xXZFBrN3loMVRvNHJkbG5MYVp2eDVkTGN5MVRjamhVSkVkdUJjQ0xPUDBMdXVMbElsWkYzWFBJRHUwQQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "sekitar rp105 triliun dana pindar beredar rp35 triliun masuk kantong umkm wartaekonomi co id",
      "id": "a6df9ab462820814",
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
      "eventId": "auto-e1d0fdcf1ba3f2e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
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
      "date": "2026-08-20",
      "title": "10 Aplikasi Pinjol Umur 18 yang Gampang Cair, Resmi OJK! - jalantikus.com",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE11dm84U051NXpSRGNGYkNONVUxWklpMjFaLTRtNWJmRjhjOWdpOTUyTGJramIyOEVqQXNJRlIxd3FYNkxBVUFtcUFtVGtvenZaZHZjSFg1V04yVGdF0gFiQVVfeXFMTi1WYW5LaF9Sb0swbGpBOTNMMlBnMTlsMUdvX1NISGNVdV9SeVYya0RNckNLNUlsUEZCRmJkU0gxbm1DVHFYMXRCVjg1ek43T0VkLVN2U2JCR1dNaG0wX2dhVEE?oc=5",
      "publisherUrl": "https://jalantikus.com",
      "source": "jalantikus.com",
      "summary": "10 aplikasi pinjol umur 18 yang gampang cair resmi ojk jalantikus com",
      "id": "9b984a455b012533",
      "domain": "jalantikus.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dc7e3e052e7cc407",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "16 Pindar TWP90 di Atas 5%, OJK Dorong Pindar Manfaatkan AI untuk Cegah Fraud - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPVzU5Q0x5YURVQWhSa0hqcFlQR0lhZTdiSXVZSGNTd2YzS1FjZERFRVlvMFN4eTdlOHQtN01pYVB0M3lDTDc4WGRLbzk5NnFWTW8tTHNEemo0ekdUelMxdkN0V182VEpqcVl2RW9wWHIyY0hNelBYQUtpcXJhZFJUYXgtVXFVYVhsZUxrVGd6TFFBNnQwRkNhdUtJLXpoUHBHVkN6cWpBM1p4ZUtIMVo4a3ZWc9IBuAFBVV95cUxOckl2THpXN3FxMTRsWXhZa21KSzdZUVVvZ19UUXBFN2lhRk1VWXp6VGZKb2VyeUNUMDJYUVdLb1plTFQ0UmJPV05NNDZVeVJqaGhhZ09CTUNJVGRBR3ZXRUJHM1hKSmd0V2lqVFZfSUktRFVBb3ZncERMLW0yMWVJUnQ4czhSUXRiSnRfWGxzT29aV1AyV0JIVXFLQUlkREpWN1d4TVZqa2xJXzhiZVI4REdUSjUyVk5y?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "16 pindar twp90 di atas 5 ojk dorong pindar manfaatkan ai untuk cegah fraud wartaekonomi co id",
      "id": "b110b83ac1d65c4e",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ea326f7d8db51e11",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-20",
      "title": "Mengatur Jadwal Liburan Lebih Leluasa dengan Layanan Paylater - women.okezone.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOREZKNEdpM2UyOGJVNUs1NlJVV0RRNTNQQzhzU0EyQ1VwYlRqS3gxaW8zOVZQNjJzYzI3c3l2bnlTQ290SjdHM3VBWU5Qa0UwbGhJdlo2Yks3dVRmeEs5azYyVEtvSkt0RThuYjJxeDNscTN4Z1Z4RHYyc0wtOHREaHpWRktrYnFpQkJOZTA2VDg0MF82Q1BGbV9TQWNTb1p1Mlgwd0t0b1ViRTdybTdtVzRPT0nSAbMBQVVfeXFMUERiUGR4cGNfMVRYSmRENW1IX3BPZEdLVVNSRGZnTVhzeFc5WVIzOG1xU1FoenRZWU5SNzhkM0Q0NXRpZ0RvZGx1RlNQeVhrdEkwWkhlWHZGY1dMUS1EUDdjbEFxd0NDYkZUMlllS2NiMmZIRE5OVmdKeWN2UHctVmh5SlpqYS1Mc3MxT3RYdENYd0VrbXFXbW52RVk5X0h6c1NEaERfTUdsOUNlanpFTl92OTQ?oc=5",
      "publisherUrl": "https://women.okezone.com",
      "source": "women.okezone.com",
      "summary": "mengatur jadwal liburan lebih leluasa dengan layanan paylater women okezone com",
      "id": "ffd963e07db3e2ee",
      "domain": "women.okezone.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5aba1915715c4eda",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Pakar Nilai KPPU Perlu Perhatikan Kewenangan OJK dalam Sengketa Bunga Pindar - Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPNGFkbHFDeHpNeXZNYURjUU5PbzJlcFBqTldIQUFGUWJYOGY2XzZtU19jN2g4eUsydW9jZUNoNGx5NWt2NEFvS3hBeThZQWFRRFF2UDNoWk5TcUVVT0RXekhhZFByNHl6RE5xa2dNdDBKLVVlcUs4Nm5XRlFNZWVIWUY1Q3R0VnBfVWw3d0VtMlRVdTBmQ09QUmNFd1JFVTBiMFdzT2JIYm13RDJKalRfWnk1OHF2VUpuVnc?oc=5",
      "publisherUrl": "https://mediaindonesia.com",
      "source": "Media Indonesia",
      "summary": "pakar nilai kppu perlu perhatikan kewenangan ojk dalam sengketa bunga pindar media indonesia",
      "id": "c649f2a05f508595",
      "domain": "mediaindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-11384a8a81693141",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Perusahaan Modal Ventura Berizin Masuk Radar Pengawasan OJK - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNT2FKaFhHOWZQd1d3ZmZIbVJXRkpzOWpXMlh2d3BFanFnT09qcUdTRVp6Y2hoQXlRYnkyRENWaWhfU214VS1CM0pwYVlzYlVvcW53QzFsWGlLdjdfdE1Hd1h1WUJ5dndfVTFTaTRadHRmaVQwMG1sdDdyMDRmTDYyVHpNdEYxQzNwUjhQREZqU0k1czZxb3ZIdlBiLUJHVUpkbXhZaUxB0gGrAUFVX3lxTE5UcGdpMmNjcURoNW1iN3o5MjdiSk1Ra2RpcEFtejQyVVNMRDNXa1BGWEtrNTFLNG9ySFRMalBUNS14UmRiR1FaZXpza016b0ZiaWdRbmUxWWg5TmtPZUt0REJDTnNMWjJ0NFZicVFVM3czWWxYQ1ZVRWRuRHdKNVNycFlLbFdtMFNWX3M3UVhWSVFTTm9UcDVhS1ZOVFdyRGExVHc2VnpBeldyMA?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "perusahaan modal ventura berizin masuk radar pengawasan ojk detikfinance",
      "id": "f26ac5ca1f45dfdf",
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
      "eventId": "auto-1a4f6edf2ba27868",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Propam Polres Tapsel Razia Judol dan Pinjol Anggota - waspada.id",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQOUMxNmExcy05cGxXcGlsQjZ1ckxOQ2piZG1NSTZBVTc5UTFNX2pBMnIwY3N0TG5HMFJKNS1LRTVHUS1DR3luam5vTERjaFdUVDhuRlpOOHJZOEdiQU5DeWZRQURvZWhVZV92dkE1bE90ekFBZVJPYTNiSTlrbnR3bmJnampaU2cw?oc=5",
      "publisherUrl": "https://www.waspada.id",
      "source": "waspada.id",
      "summary": "propam polres tapsel razia judol dan pinjol anggota waspada id",
      "id": "5102795e696770da",
      "domain": "waspada.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d61110564bf7cbf6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Propam Polres Tapsel tegaskan personel jauhi judi online dan pinjol ilegal - ANTARA News Sumatera Utara",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNV0h3cTkwMVV6YmROZXhBVFRsX1N5N1llOWNibWU3TldnT0ZpZ04zM3l1U1F6ZXpENlMyd1U5Z29HQWQ4OU1McjBZRm5rRml6cVNFR1Z1a211NXNaY0JyZmNNWWpzR2s0bXpLd2toQWh4RmtvampXWk14TEoxU0pLb3pra1VTZmtnVTlXeVNKNEdocTZTd0p3T09kZ1VDR3hxYzFNdEdVZ3NuMzJDdjhKZnduMXZ1ckJX0gG-AUFVX3lxTE5jSU40T0stNWpzZUNTNDJEdnN5ZEFjVWhWbGsxNW5fREhzYkk4SUdPak9hU2NCWC12Y1ZRc25pXzhhY1BRZE9NZDJtNzR0TnZ2NC1DTDJ1QkhTVThtRmVWdWw5QlFVeUplM2RTZXhQdHJqTk9PSGpNOFFTdHJhQmFvY0JtTnI2LWRaNjZfMUJGTHdSZ0dPRlFNMmYwa2dQem45bmN2S1ZzWldDUnhxOEgwaW1ma1R1Nko5dzdQRlE?oc=5",
      "publisherUrl": "https://sumut.antaranews.com",
      "source": "ANTARA News Sumatera Utara",
      "summary": "propam polres tapsel tegaskan personel jauhi judi online dan pinjol ilegal antara news sumatera utara",
      "id": "4e2ea734688a6d45",
      "domain": "sumut.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6b3727a9e6fd9e71",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-20",
      "title": "Sidang Banding Pindar Berlanjut, Pakar Sebut Perintah Lisan Regulator Sah Secara Hukum - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOb3MxdHRwelI2aDkyM2toUDVobDdOXzlLSExSM3B3MFVKTHdpZUJIdm0xLUhVc1B1RDBGa3pKcG5mUjBKUWd6TjR1SXZOZHU1ZjRYdF94YmRGdlZiN0tiLVQyRnpGVUZyVjUzMEhCY094VjNja2d0V0xSWVZTTDJzdlZ3dms3bkFvOW0waV9QVDM3RlJVQjFrRnFqUS10RURoYWxQRm0wNEpIU2xRdE1ac1NYWTQwUzBLWFpqM2RTTTctTGllandlUi1NUGo?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "sidang banding pindar berlanjut pakar sebut perintah lisan regulator sah secara hukum kompas com",
      "id": "c95526c31e62bf86",
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
      "eventId": "auto-42f355ee0b9d8687",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Simak Upaya Memajukan Ekosistem Pinjaman Daring RI - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPbVNpMjJUUkkza1BxdFA0eTdVQnMzbzd0Rmgxd255Z0w0VDdnaUdYdjFOWTg2a3hMZHQzeWhjWENPUFFsbno0ZlNGQVFHWm5YNE02dEJQNS1JR3FFcVdwN2xxcVJxWEd0ZW1oVnFOcmdqeXQ2SV9NSUJfSFVtclFFRGxNU3RzNVF6WUVhVDh6UTJzcHNLNkJxbHJnN0I3VVpaWmJERXIzcjJfVlJNakHSAbMBQVVfeXFMTWtIR3hxMUtfQU1WdkxTeGh0YVR1dmdpR1JzQWtfUmtCbXZfdWxibG0xa1ZLV2pVdXJYZW5ZZjMtOU90RWtYamI4aVVObk5zVFdCS1hiemdiNEQ4SXRqRWh0NXdxVUZBdlQ4bklvTlBXSHBLVTVJQktGTTVRdkdYQXpxWmdwcjV0QTVScTF2MXRwRjlObHF2d2xOZk94RExzZGEzd2JNcV93U24yd1h6T05aN0U?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "simak upaya memajukan ekosistem pinjaman daring ri cnbc indonesia",
      "id": "dc4d858a8c217915",
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
      "eventId": "auto-535758102cc9ab45",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Update Denda Rp755 Miliar Pindar, Pakar Tegaskan Lembaga Tak Bisa Lampaui Kewenangan OJK - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPb3VXbGVRdGFybnpYUDdzWHpHTHYyaUZjb19uUXkwMk50RDRqU2xZbTg2YTJPT0JuYURoVFkwWFdjLTZZX1hMNlFCSmNDZ1g1QTBGaWdRLV9jYlYxcnhDR05hVERNcFB4bXZPWTdJOVJCSkwtanVVSkFUOXdXdmRoTXJZWjZsNmtvdTVKd3ZMM0RGbDlPYy10UmpOLWVRajVQZy1WdURJeERVbWNSdjhETzNWa1UzNG1TQTMwY3BUZ0dVU1HSAcgBQVVfeXFMUGkyZzVydFZtU1ZWYzRTeVoycTdLSUZ4bVpmRzBneWlnR21XY0tIVXBWSmRRUkd0bVE3RE5MUEVxcm9NR0NZRlU0dG9rd2l2MU50Snhza21yLVk0MGFydEZudXo4T2JfNDFycm1rNlBRMWlLeWJhN3NsTkhXZmh6SW9mUXdDaW1nRnM0RTNnaHo3dXM2bE5PRHFuTzJQMDNILThWRDMtcmpSWmRRUXlnQ3hkeUR2SGNnNWFScFM0UEN6bG9QUDk5MGw?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "update denda rp755 miliar pindar pakar tegaskan lembaga tak bisa lampaui kewenangan ojk wartaekonomi co id",
      "id": "2dd58d2b4be069ce",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 1.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7db2823245037aac",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "AFPI Buka-Bukaan Soal Tantangan yang Dihadapi Pindar Saat Ini - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPWWkxdjZpVmFNNDNoX0Y0bkh2b3RpQS1pX1h1d1ppVFRhdGlxejRqclZJTlFoZjFqTVJyLUQ3cjhkOGpKa3RDaUx5a3o5Ti16eFd1SjNWU0w1WDNDWWdpLXdjeldPRHpuWDFhQTcyMTBQb21wcFhLd1JyZVNVYzVDQUNsc1BwWUVmR1YwVkRtbzB4QlMzMGVUc0FWUWQ0N3NJbm5qRFZn?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "afpi buka bukaan soal tantangan yang dihadapi pindar saat ini investortrust",
      "id": "50fc587dd8326337",
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
      "eventId": "auto-1a2e6643d5ed529c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Batas Wewenang OJK dan KPPU Jadi Sorotan dalam Kasus Bunga Pindar - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQQXhUYmtSZDJkbmpQLWNDTXlXNm01YllEeVpKb3F4SGk1Zjc2ZGJmS0FsV3JmWHhLdzR2cTlJM2EwclB2S19fbTZoc0llczFucER6QjJxclhmWk9Va0I2UlJ0VERyck80MUZNTEJTY01zbG9ZQldtOGlGaXZmeUVGMEFnZ01uQzB6eXl3cDJ5VFdvZnRxZ2xnd0FGMllhVWZGSVHSAZsBQVVfeXFMTnJPNXNSdGJ0MDdJa05GaUNDZXUtVWM4dkwyak5jTVNxOFhBdmlPWmRZWW1PQ3ZEc2dsdHpYSEx6bHVUeUFQVmVOanpZb2lOYlZkakh2M09TZXlNRElsenVwNEpNT2xCQ2o1UjIxV2VzSVdXckxORlMyMVpLX3hTTHBBS0tkNnlqVU51Ynh4QWhrS3BxVzNKeWRoUUE?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "batas wewenang ojk dan kppu jadi sorotan dalam kasus bunga pindar kontan co id",
      "id": "c00759a68d847a92",
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
      "eventId": "auto-46108b67f1984c48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Bukan Sekadar Bunga Pinjol, Ini Pertarungan Soal Kewenangan Regulator - Kontan TV",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9NdjhUNTdLeVlOYkFJRzQ5WXV4a2pGbVhNVHdBdld1WVl5d0pQS2ZIX0JjUGlmbjU2aXpZQ1lnVHFNbW1aVHVDMzJZbjFaVUU1d2lZ?oc=5",
      "publisherUrl": "https://tv.kontan.co.id",
      "source": "Kontan TV",
      "summary": "bukan sekadar bunga pinjol ini pertarungan soal kewenangan regulator kontan tv",
      "id": "6971e41fc0f9c01a",
      "domain": "tv.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6063b341a92050f9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Credit Gap Rp2.400 Triliun, Industri Pindar Masih Punya Ruang Tumbuh - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTy1ReXp1dENPSFFjNG5HbVVueWRNNWZjcko1c05aMm1za0duaEJIWmE3bUlKbml6RkstRHhRUU5fRkIzbUQxbEI4TzFwX2JOZURMWld2bmZ3QnZ4ck04Q0JKU1A5TGxGcl9Cdl9VVDJzbkRMZUk4S2dNMFZjenQ4RGpkMk8yeWdjNFpIaEllTlRjNGxsUWZ5Z1pTSFg?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "credit gap rp2 400 triliun industri pindar masih punya ruang tumbuh swa co id",
      "id": "abeb46890e35e7c4",
      "domain": "swa.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bda4fdf445a64e1e",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "Desil Warga Solo Naik, Judol-Pinjol Disebut Ikut Jadi Pemicunya - detikcom",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOa29SS2FoeFd0M0pjQ0NwTHVMaDQ1YWtaa2lzaXUyYlZ1TWp3Q2JVdHlNSEJPRHUwdUE4Nkp5ZWVYYUZTcU1fZUc1WjJPdVpvZ1g2VEpQbVhnU2syUXBBaHFXdm56VWdiQkFEU18xcE4xNHNXeDk0ZC1SOWIwY3NjaEdkTnZ2UWJwby1xOEw0OG9TZWNhRWZtc0Y5aXJnT0dIblNtcmpMWlNxSm9r0gGyAUFVX3lxTE5iZTM4MVI2VHJ4Smk2UUxlaVRJQkJ2Y1ZvNXF6TXlVM09OSkVGVEtCR3hrZ0Nuenp3RzBSbVl0R2NFOVZkZ19DRjkybXBZVXIyODNpdHpQREJhYm8yWXJ4bEpxNF8zb2pibHo3X25yT2ZaM1JVMEdGOEVjZy1QRXVILXFTbHpUNmpYN1RRRGhCOUVsRl9qa0lqV0RGQlJRZG9DSjRnSE5UdFpXZUt5azNxaVE?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "desil warga solo naik judol pinjol disebut ikut jadi pemicunya detikcom",
      "id": "5d3c46081b3df85f",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2b1f6de866e1cdcc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Gen Z & Milenial Terjebak Pinjol: Data OJK Bikin Merinding + Solusi Cepat Bebas Utang! | Money Lab - investor.id",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPRDJ1UXhsQ21WTDM0Z3NIQlM4TjNqTWFDVzJDaXZyNGQyc05HQWI2V0d1UUdGVmNLc29wc3ByaVcyYmVFdGI2QVROcFVrYmdNRjlvSVNNS250aDktZG5oNFBVRURjbDR3UnU1MHhySGw5WmJ1WTFXSWRmQmgzQVRsanpPR3JQckxTVHBGdGVSend6T1RqZTNHeWVyUUI3QjlUdlh2eHdJbVlMdjl2a1F0S2I0NUQ2MGVKZXNXTTk1THVtU3BwOEM4?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "gen z milenial terjebak pinjol data ojk bikin merinding solusi cepat bebas utang money lab investor id",
      "id": "7ddd13b9c3722373",
      "domain": "investor.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5ddecede8283de84",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Guru-Siswa di Gianyar Diberi Literasi Keuangan Cegah Jeratan Pinjol-Judol - detikcom",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQbjRqSE1BV19rbm1xak51STh5bzRKUDdIVVBMV1RVNlUtdXZ1S3NJV2JpV2QyTzEtMlQtSFF2WmtGYnZwVk1vcjRFVWltVXdRcHBIcm9pb3VfZGQ2bUM1RUVvbkVsN3AzU3hLTnlIV3QxcHkzZEh2dTE1bXJZS216d2tLd3ktQ3RVQ2tZSTF3V3ZEekMxZG4yR0ptYW5SckE5dzEtT0otRHhSc0V1Zk5aLUtJRV9hV1Ji0gG-AUFVX3lxTFBZNXV0b3J0TlJHY1ZFQWpieUowTVF0aXRSVFZwc2ppdGZRcVBpS1ZlNGwzZ3dHOXRpZ09FNWFjOVJKVVMtTUctRkpUY0NRdXdnLVotaHZNd3QyUm52S0JIV0wyeWxwcmc2UWgwSlBXVWU5Ry1tZFc5a3dCcUR0dlZ1bXRyMTRoWlZzQ0V0elgwWFMtZFI4N0Q0ckhCQldiY1NweVEwdDBwcFlrRjZSZi1rOEJDTE0yOVVmZTZVbWc?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "guru siswa di gianyar diberi literasi keuangan cegah jeratan pinjol judol detikcom",
      "id": "6da80ccf7aa832da",
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
      "eventId": "auto-d0432f216f6d524b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Industri Pindar Tembus Rp105 Triliun, AFPI Dorong Kolaborasi Baru Pendanaan Digital - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOUGlackhLOEs0aU8wc3NtR01SWHpPSGxaSnVDOTJCUDJ0aEFrbWVLdmU0NkZCb3hSQmN0cEMwNGFmQmo4WUw1d0cxRVRTTTJWVW5JZEZ4MHNwRTVVYzhRT2hQT2FUakRYMUQwdTZXYlF3OTlzZDFaZXBydTlSNERycHEwcFh2d1dnenpEd0dhemFWUzZiWlRGNWFVb2dDaU14T1F4YXhVdFNwVVJ0NFdsNGpR?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "industri pindar tembus rp105 triliun afpi dorong kolaborasi baru pendanaan digital swa co id",
      "id": "706ba1fffa96e1ed",
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
      "eventId": "auto-13dd6d9ef5824f52",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Kontribusi Pindar untuk UMKM Semakin Meningkat - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBZd0xrYlZEQmRnT21SRnhsTVVpN1YzNlJrUGVXVGM5SVpvRThVbnhyT3VNd2dIV3gtajJKUEd0MjRTS3RtRlhCUnNkWG1ZSmRYS2dIdElwUEdHRTBFVlRMaWhkamJlMmsxTk5kTEJjUXVXR3RjSk54VUdKRQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "kontribusi pindar untuk umkm semakin meningkat infobanknews",
      "id": "818b301fef36817b",
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
      "eventId": "auto-dd89420d91300ce9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Kontribusi Pinjaman Daring untuk UMKM Meningkat Capai Rp35,12 Triliun - Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNR2VXR0VwNEc5UkpaWVYzUWFGSW0wYlJOeEs3bWR6eEhENGRsNlEtWndjYVo3SVp1U1FUR1NDaDBtRXdJX2NIY19oLWdITExheXk2akRyTGVCRGhqZWliOFVtdUNOQ01rc09xYnhQYXZtd2hXbmtET3puQjFHWFdXZkRWcUJ3UGZfUmdpSGRnQWpXWjBNR2VJU3ROYW1mUC1WaVY4c0ppRE1kUW0wY2Rj?oc=5",
      "publisherUrl": "https://mediaindonesia.com",
      "source": "Media Indonesia",
      "summary": "kontribusi pinjaman daring untuk umkm meningkat capai rp35 12 triliun media indonesia",
      "id": "8249872ccdba3d32",
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
      "eventId": "auto-3a74d89a3f4617aa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Koster Ajak Industri Pindar Jadi Mitra UMKM dan Pelaku Usaha Bali - diksimerdeka.com",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQdXVyRkljcHh1MHUyaVN1YmZkNGVldDhqYzNsOEVxUnppbGRrODZjTk9rM0JPWjkyeHRaSUlEMVRkc2QzMnY4YktTNWI4SUhUNVIyVUVUVF90MVBWSUtYTEFDVzFpZTVGQWIyeThycWpoYlQxSGc4VHZ3ZnlpdG1td05KRVNYU3lfbVVDNFdyeGpZMUhpRlBLenk4dWRHaENYQk9JcA?oc=5",
      "publisherUrl": "https://diksimerdeka.com",
      "source": "diksimerdeka.com",
      "summary": "koster ajak industri pindar jadi mitra umkm dan pelaku usaha bali diksimerdeka com",
      "id": "b29ea18924f83c7a",
      "domain": "diksimerdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5bab344f2041f5a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Link https//down.vee-dana.cc/j52nct Aplikasi Veedana Sfile Pinjol Apk Cair Rp 80 Juta, Download Vee Dana - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxNQVI1R2E3RS1TT2dnX21UWkJjRlA1ZXdQQjRfcW10WE9NWTBmVUMyT2Z2eHdnenQ4QXRTSzU3TkNvbmpNVGVlSFpLLU5VaGpLR2RYWWtoV2VvR1hDalc1V0wteTQxdEt2N3lqYUl5R3lxVG5meWRmLXFiekxINnpZbjdqS3dDQmxHMElmN0lqRzJnTFNPMGlxamV3ZGRVZGRMdk9IbW94dS1HTDJLZHd5LXN5YlM4Q0NEU1dlWTF4a2h5R3lWSGh0WmprZlNKWHQzWTMtMUZoZTZrTVZqdmMwMGZ6akJGejhXV2xoanVyR0E4MTZuekdrSk9R0gHzAUFVX3lxTE42R0MyUzNoUkQ2S2VxWWxGcGYyZHE0Wl9RUUc5RW1MUl9uSzlIRUE0QWFSbjhZYzBZOU8wUnpvcTZRc01XZmgzYjVHOWxMLWo2b05QWHBrN2ZPUlZpV3JYRXMxZzVkcU55akpHVDU4Z3F3RVVPSEtPOS0tczgtOE9YcDF5N3hlV3BjOHFSMmhuR0g2VDlWRmJWcjQwcWNCX21GVzZXMXVKR0VJS3BHbVEtSjgwT08zTHVxR2dHQjNwY2FDd0NVUTBYUXFTQTVOOXdSQmZTb3N3aG94elhXN1MxTzQ5ZDNMd2dEdnFnQW9GUXI0NA?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "link https down vee dana cc j52nct aplikasi veedana sfile pinjol apk cair rp 80 juta download vee dana berita diy beritadiy pikiran rakyat com",
      "id": "b7b40e589a8b7e78",
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
      "eventId": "auto-952ccc65520ac067",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "OJK Catat Pembiayaan Fintech Lending ke UMKM Tembus Rp35,12 Triliun - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5xUzV0Qkd2VF9WT3hPbENyRTcyUnlwQkpEc3M3bVJDOUlRRGdSTEhTWWtJMmplQU9DZS1BNEstNDJUNzZxeEVlZ05VbUN2NkRsNjBzejI2dkNSeHkzLWxucXVfZU1rdHQyN2pLaUdzS20?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk catat pembiayaan fintech lending ke umkm tembus rp35 12 triliun achmadnurhidayat id",
      "id": "9595f1baea4b4197",
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
      "eventId": "auto-3aa20aa38b10cac2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "OJK Catat Pembiayaan Pindar ke UMKM Rp35,12 Triliun per Juni 2026 - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPX1FYTUIzOXhMNFVEdno0VVVReVlCX1IydUZGdVBidDhqN05lSm5uS0hyQXBGUFRYVE9nRDE2RnN1clpuNkxsMVJLRGZSWGJSVjBmVFhJbWNneE01aF9yZVNqRHZPWmZ2YTV4eW13NXVXWnliM0ZPWV9rd0VTbkk1UnBjbjQ0Q0dtdlVaY3hjenpwaEt4NGU0dA?oc=5",
      "publisherUrl": "https://gadget.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "ojk catat pembiayaan pindar ke umkm rp35 12 triliun per juni 2026 qoo media",
      "id": "3dcf509402f7b3d7",
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
      "eventId": "auto-6d599ff605cc7962",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "OJK Catat Pembiayaan Pindar ke UMKM Tumbuh 23,25% hingga Juni 2026 - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOWVlvYWk3SUJkTHpfZkNlcEhXQzF0OXJlZ3NHYW8zU0RlZzNKTGF6aklmMGlfZm5WSmd3XzNoTThodEJ6NUhWUzBEMk9PcEtsUC1CZENjOW51a25kcmFUZlZyYWJ0NFFBTVNXQ2xhUXZJbjFOZWo0TjNFenNFMjRkS05TbjZreThJc1dsZnJoeGp1RW41UXpKZWU1MFZhWGZJa2hwUWtlZVk2R3dkb1HSAbMBQVVfeXFMTU05eUlLWWZDc1J5WWFrYWl5UDE0cjJfZnpLZ2FaTEVvNVZwejd3Rlg2TGN3bXczeExrVi04OXpZVm5scUdzQklNajlLNjlwUEdkQThRTDhzNDVkWV9sVlYta3Rhb182SFRXbEhEWkVtenA2dDRiSFItVE9rd1Fhd1pnTW1GdUdzdUNuQU0zVmNNYU5mTXctaGxtY2VwOElZRS1hQ2RzTnF0TGYxbFhMZVpRQkk?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "ojk catat pembiayaan pindar ke umkm tumbuh 23 25 hingga juni 2026 detikfinance",
      "id": "2df66e8ac3ff929d",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d0400c2abbbe195f",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "OJK: Pembiayaan pindar kepada UMKM tumbuh 23,25 persen per Juni 2026 - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQUmxrVTZEYjVYS2RGb3FJSUJXTVBQREZDSzFoYXdUYWRIcVBoa1VXN1dPY2dzbDBaSjFvZ2dDQ0ZFSWl4dkxDWlRmcGEzd0x1azR3amd2RFZWUGNIQ0hqVy05czJ5YW00a08yNGZnc0JDSnR2UEVrWjkxY2VQdm9vd3RIUV9Ma3R6bE8zYnYyXzUyMW83aWxvOWRMa1R5V1l3NmE0V0RpTlZZaXBo0gGvAUFVX3lxTFAxbU5CM2hWcl9TYUJ2ZXBmRmdsZDBOR3lsbnItRVJraHVqZ1FTSmw3Nk5UeG81X0RKeTNFcEhwMXRjWnRieXdfdnlac0Y4LU55T3JIcWlIZFpBZWl5dURVRkpDclM2OGgwMHk4dk14R21kNmhRQXgtbHZDTnNtSVhhUndMTldnVGxpMThyWjFnWnJvYzFtU0J0dldWblk5VHlIbTgyRTN5ajQ3QjNhaWc?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "ojk pembiayaan pindar kepada umkm tumbuh 23 25 persen per juni 2026 antara news",
      "id": "84df4d420e536ef8",
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
      "eventId": "auto-e6b9259702efea90",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "Outstanding Pindar Tembus Rp105,14 Triliun, Industri Didorong Perkuat Pembiayaan Produktif - NUSABALI.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOMWpIWXlmRlZYQnk3dlRhZ3ZvTjItc1JUVzdLTmVyWW9Ra25MWVh2czdsNjNkVGlpOGxBYVJVblQteDBsbVBJaEJlRXIzLXhVdVgxcHZESTdTT1lCR1J0MllfUVI0RDhMMzE2SkltcnFJb1A5cUtWM091RzdDUlltR19ZQUdsOU1pZDhxeE9oUUpmdDA0QmJwRUs3YVhoWjZVM3RqZi12T2R5OUUzdG9FazJ1WmtzeXJfMWRrclF4ekc1X3hDX0E?oc=5",
      "publisherUrl": "https://www.nusabali.com",
      "source": "NUSABALI.com",
      "summary": "outstanding pindar tembus rp105 14 triliun industri didorong perkuat pembiayaan produktif nusabali com",
      "id": "7d5c508eae8f32a3",
      "domain": "nusabali.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-70cbb95fc828e8e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pangkas Tengkulak-Pinjol, Menkop Kebut 30 Ribu Koperasi Desa Merah Putih - detikcom",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQbkZZZ0xjR2pUdWxyVkNmVXBRRTBsaU9WdFV2Qm1NTVVvaE9uY21Ubkt4S00tMXBQVGhyY2dFQ0Y5ZFlnRUlsWFEzWmlNZnktMFFsNVYxS3FUbzg2Q0tKcFNJd1d2bmszcXBkcC1ZOGQtX3p1a3RXcFhPYVdCMS0xeU5jUFo4d3lDcGxUcU1md0g1eHVQV2VBMFFiN3ZzcXl2dXh1OGRKYUs5WVZRaVNZYi1pYWdZbDTSAbwBQVVfeXFMUFFqbXlRSHl6N1BSODBhT2FRWkdDVmw0TXdLVldSZzVIWTZVOE9xWU1UYl9QRHNWYlB6SWRhR1UwVjFLN1hTYTN4R01vcGw5aVBncGJndlJiM214S3pFNVZzNFQzS0NOWW9KNFJrWkJXeWJmc1BUWkZNUnZkYlJ2M05XVU1wNWh2Zi1HX1Q5bTlfU0MzdnFvUzd6V0oybTNqdFlmVEQ1X0VCWTZyM3Y3eTBVcmNMSERxRjFaUno?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "pangkas tengkulak pinjol menkop kebut 30 ribu koperasi desa merah putih detikcom",
      "id": "5dd3a848326b12fe",
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
      "eventId": "auto-46ed9c711f655a6d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke UMKM Makin Deras, Tembus Rp 35,12 Triliun per Juni 2026 - investor.id",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQRDhrdy03MktoOUVvbnE0bkxqLXZSRE96ejlrN1hXMndQRU1IbVd0eDA5N3FveGhqaHZDcFBCTWFfcTVaZFdCZnFfemloUmJHUFBmaVRfOVlybTdZVnFJeURvSGhCLXhSUjdEeFU2djlCODM4YmhxRjhQeFVjUVBiRTg5ODlNbXlkaFdnbGtKcmV1UHYyRHdQRlhtT1pKbWxDSC1rbS1RakpZSnE0TkE?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "pembiayaan pindar ke umkm makin deras tembus rp 35 12 triliun per juni 2026 investor id",
      "id": "bdcc4feaccf2d1b6",
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
      "eventId": "auto-dc30ea052bae727a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke UMKM Naik 23,25% Jadi Rp 35,12 Triliun di Semester I 2026 - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQelE3N1pzdy0xeVFHLTlYOGYyaklzc1F1c1F5YlN0ZUFuelZfSjNsNl82NDEtazBadVZSUDhyNXFSbnFjMlpiQmJpYmI1dWJyekVKRFVlWVpveFdZaWdpblg0cGhIakZERGYtMDVUUGZRemdOQnl3b0ZGM3I3aUtvSFZ1U2o3bDRkbGJDT2dxdkU3NkVvc3NRUWdwZXlWR0xidmgxRU5zLWtIbjJEaXJsSGZic3AxaUJibEdz?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "pembiayaan pindar ke umkm naik 23 25 jadi rp 35 12 triliun di semester i 2026 investortrust",
      "id": "4c3a12d116ba1eb7",
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
      "eventId": "auto-2462418c8033dfb6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Naik 23 Persen - akurat.co",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQX09YZXotc1ZRQzNNN3BIUXpPeUJMbnczV3lLR0ZIYUNsek1RTUYtcFA4d1ppTE91NU9xV1YtdU9qVmcySHBHUU1CQkstemVDY2VOMVJ2Y2wyc0dGeGh5elU3cmNCZ05ONm9RNEdlaDdJX21UNVYwS25aR09nYTA5SC1mWkNQVTBUdElSY1IxMDhlOG82c0l4MGR6LWdwUQ?oc=5",
      "publisherUrl": "https://akurat.co",
      "source": "akurat.co",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun naik 23 persen akurat co",
      "id": "d99446e61a4f9c56",
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
      "eventId": "auto-09d96638899e600b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke UMKM Tumbuh 23,25 Persen Jadi Rp 35,12 Triliun - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQZ2Q2d1lTa3ZjVGlGSW5jUDBLZWtQMkFBYXVpaVdaemFmRHNrOE93THBhdHhfdmhJRnpqUFk0cVZqVGstakZtNTYyR0h6MV9pWm9zdE8xRUxVZDFNSHRYU0dMWTh6T2VrU1dTR3RFX29DU1BmN185YVRqRFNUM2RlZTBYdDBLNGhBb3hhVDBYZ3hIU3N2Z3ZZcEdHVTNfZXlPLW8yQWNoTnBETV80UVphNG1QSFhMenpkSFE?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "pembiayaan pindar ke umkm tumbuh 23 25 persen jadi rp 35 12 triliun kompas com",
      "id": "6d9afa6502dc61c0",
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
      "eventId": "auto-f88fef5f314c258f",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke UMKM Tumbuh 23,25 Persen, Tembus Rp35,12 Triliun - Newsurban",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPcUg3RzhwN3daX3lJNDBjWXc4RnVVU2R6aFA0aUlvd1BpVjY0UDUwQlN0eEsyUXZEOGFNdTFaZkVkSm9pTTFUWkVJMVE2Z0lNb0NlZ01xWTZrRHdDZTFjWDI2ZEM4WkJqMWt0SGpGeXA0bmhIM2ZrV2RHWnQ4ejhBdVV5SHEtcTdRTkg2cmoxY2ZFUEZLREtBeW5EbV9KUnRE0gGgAUFVX3lxTE9xSDdHOHA3d1pfeUk0MGNZdzhGdVVTZHpoUDRpSW93UGlWNjRQNTBCU3R4SzJRdkQ4YU11MVpmRWRKb2lNMVRaRUkxUTZnSU1vQ2VnTXFZNmtEd0NlMWNYMjZkQzhaQmoxa3RIakZ5cDRuaEgzZmtXZEdadDh6OEF1VXlIcS1xN1FOSDZyajFjZkVQRktES0F5bkRtX0pSdEQ?oc=5",
      "publisherUrl": "https://newsurban.id",
      "source": "Newsurban",
      "summary": "pembiayaan pindar ke umkm tumbuh 23 25 persen tembus rp35 12 triliun newsurban",
      "id": "8e30380c0be4f8b3",
      "domain": "newsurban.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eb5e21d56843be1c",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan UMKM Lewat Pindar Capai Rp35,12 Triliun, Tumbuh 23,25 Persen - Batamtoday.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU0NFT0tJUUZFS2JGbHpOeUM4Vkk3VTBaX2d2OGJ2WUxKS1dfeDd4N1A3dkV6Q1JteFpjbGp6Ri1fRm5GekVpUWJPa1VobHU2UG5WQmc5d1Iya3BqRkRncXRIR295czZidzhMZ2FoelhCc0pUc0psT1hXam5FQklYTVp0RU5wVkF5T3FsdWY3QVFPVTJZeFh5c01zMF8?oc=5",
      "publisherUrl": "https://batamtoday.com",
      "source": "Batamtoday.com",
      "summary": "pembiayaan umkm lewat pindar capai rp35 12 triliun tumbuh 23 25 persen batamtoday com",
      "id": "2d6ddb57fef6b480",
      "domain": "batamtoday.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-29b390a5d76f2557",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "Peran Pindar Makin Besar, Pembiayaan ke UMKM Tumbuh 23,25 Persen - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNTTJyZW5fa2VGZkxJQmQ5bmlWcnp2U0JnSWpWTjV0RGJKZU1XSlhkVVdPUHBob1ZrSWVhOEZnam5NSWhMcWpZOVBkX1hsY1B2cFJfb0Q5a3FyaEt2OXVwN08tV2Y4NlBDeDdIcng2b1BhWGVSY215VEs5ekZ4dXBlZTExTGU3OHFpWHZNaEFxNVR3NTZzX1ktOV80Mk81SFhLZWNMZE15dGxzVlnSAaABQVVfeXFMTTI5OU1CTUk3UllsV05yV04wZm9zVi1aUElkVk9OTDNlTW1KUzNtamNlVndvNDhCaFZWbkJnNUExczBibkdWZlJ4T0dfeF9NNTFaVWFMaTJJQVVqVFc0d2VudnBUbjUtYUJBZ3U0MDhyUmY2bTZkczdaVDV4amprdTd3X3pNTDZKa1JaU29GNFhLY1FycTFuaURQc1MxTzVqSA?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "peran pindar makin besar pembiayaan ke umkm tumbuh 23 25 persen liputan6 com",
      "id": "19a17019d12e4776",
      "domain": "liputan6.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8160362a3c8c8569",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "Polres Kepulauan Seribu Cek Ponsel Anggota, Pastikan Tak Terpapar Judi Online dan Pinjol - Tribratanews Polda Metro Jaya",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPR1J1eWxSYkZETkh4dUYxVEhnRmlTWWNpT0NkZGVlajhxYUc4S3VGNTFfZHlnZW9qTnI3S0NZZFJMbTFYVzRvN0d0b3JHOFBURnZsUk4tQzdRWHVDTUpOR2czdllBRmktajdoN25QeWhQV1JYNG9iZTNxUHhGZkdwYkl1T2hya1VBRkYzQTJOVzR5bTk1VzdQSEticnQ3VzVQZFlXVWxNdDdPZ1NTZXZuRUFzdHlTYjJiNDJZZHMyMEtUdzU3VWc?oc=5",
      "publisherUrl": "https://tribratanews.metro.polri.go.id",
      "source": "Tribratanews Polda Metro Jaya",
      "summary": "polres kepulauan seribu cek ponsel anggota pastikan tak terpapar judi online dan pinjol tribratanews polda metro jaya",
      "id": "c96092ed7bbabb5b",
      "domain": "tribratanews.metro.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe763df3e5b2efc9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Sipropam Polres Metro Bekasi Gelar Gaktib, Cegah Keterlibatan Personel dalam Judol dan Pinjol - Tribratanews Polda Metro Jaya",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQODcxS2V4TnUyR0hiRHZQdDVPMUtkMF8zRS1uUXd0Y1d6X3BSek9teXBBVUJ2WndZUmo4UHV2d1ZTVHdqQkU5TER0dExIZWxxbW5HODducXhNTVU3R3A2MGRuNXlDUmhYV29UekxnMVlZWnlvQTNFRVdmWGFyVmhwUkFPdGNXYmJYMWt4R3kwMnY0MGNMak9xUHpDdGRWU25NalVIdGtqTVhEYkNWWk1Xel81NWlodV85V1lOSXd6QWdvOFNyUHpYNXcyc3M?oc=5",
      "publisherUrl": "https://tribratanews.metro.polri.go.id",
      "source": "Tribratanews Polda Metro Jaya",
      "summary": "sipropam polres metro bekasi gelar gaktib cegah keterlibatan personel dalam judol dan pinjol tribratanews polda metro jaya",
      "id": "b197b2a76959b011",
      "domain": "tribratanews.metro.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49a877160d42d3dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Viral Dihubungi DC Rupiah Cepat, Klaim Diteror Berbulan-bulan - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPZzdRbmNCT21NTUNRZENET190WXgtSkhrOGZRQmFrU05pVEJ0bHVrT1VTU3JzU0dYU29oR0NiZVA2emU3ZDk0Ym9pWDRPYWNRZkEydUp3Wl9EN2NSS2RGTW9JV3BTZURrU1ZaV1hjRUh0clluODZCekhUcmpZTV9ra1VycE9sczF1eWRIN08xVVB4TWZuR1VYYXh2RU5FT1hzYWJqeEpfRzJmN0lxVjd3S2tR?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "viral dihubungi dc rupiah cepat klaim diteror berbulan bulan bloomberg technoz",
      "id": "383918b74b39f6c3",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 87.1,
        "label": "negative",
        "negativeWeight": 5.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-47b121d5bbc6f661",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-22",
      "title": "Apakah UTUA Pinjol Penipuan? Pinjam di UTUA Pinjaman Online Apa Bisa? Ini Pengalaman Cara Meminjam Tarik Dana - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMihgJBVV95cUxOMjNBWkM1eHhvQlBpc1V6RGxYWWZEemI5cVFKSEI1dW9lNlV5RDNYVG1zbFdjckxQUTZUMFE3YnVrNmI5di0tc2d3MGhFR01XaFJhRTJpUFY0bUEyYWt5bFFKNVh2WWRSNTFHRGdvMjk5Qjd4N0d4WENFU3k2V29tS3piZGRFWHVqWG5jVTQ5b1BXa2ZSN21JVGxnYzBWV1EzOW5qOTQ0Y0lBb2RLS3htWmt2RndoX0hHblFsSWJ5QzNxVWdpbVdmMHpyRFlfNDJXckdVNkpKTGNXWVRIZ1VXUmpqanB1X3Q4bVRzLVZWd0pvSElvb090WS1nOWE5OU50WEwyWnJR0gH_AUFVX3lxTE9PRlhqUUNIUUpzbjVuODhqLS0xSEpMQVhTTkQ1Y0c5WF8ydWNjNXZnb0F6YWc4TkhDZVk1SldlQXNUMi1SZlRhaGtFRnU1cmpmVWV0SFJtQVJ4bTVNanlBWnQ1WE9aYUdQdURQWm9NS19UTGdmSXc3MTFKWTFLUGVaWjBxeDNfbFo1S1lXck1icEtHVFJNTUtLYnZDLUs1eHhOMHNSUllybGRVRV9VRDFSeGMzU3Vzc3hUWmg1czA0MjVTSHV5NWMwVWZQZmRHQ0dLSmhlMmZudk9XcDRvNU1PVEw4aE9rN1pFTmpFQXRsRGJvTWMwSnUzY2dzQjF0OA?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "apakah utua pinjol penipuan pinjam di utua pinjaman online apa bisa ini pengalaman cara meminjam tarik dana berita diy beritadiy pikiran rakyat com",
      "id": "c60c0ba81ca068a0",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f2dd26585c12622e",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-22",
      "title": "Awas Terjerat Pinjol Ilegal, Rusak Masa Depan dan Peluang Kerja Generasi Muda - memorandum.disway.id - Memorandum.co.id",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPNnBpOGJKLWNsd0tUR1hMNzdFd0d5WUI1S2NpVThoME5jQWpfMFRieWFjbHRSZHRXY2RiRlhxOVpsT092aHVBLU9LNGI2dnQweHdvWUd4UWFJR0FJa25XbzFvMDJPUzJSSEhDekFtT3NMd3BlN0x1ZTJrOExFMHZUSlF6Sk41dHlNb2RFZVNVNXNTQWFONXlUV2FKSVBYbFQzNDhmWkNJejZEbTZJWkRWeVRVbHJaTlgtdGZ0elVIcmZEd9IBtwFBVV95cUxNdU8yRHg5UFR2M2JiOFBwS0pFLVpXYks2TzVlbU9mNGFtdDBicnRhTE9XOTZhX2M0Zmt6QUJ4YXJVb2RxX1pEMjBuNldTcDVLRkxjM2NSM0xQZ2NPaS1BdFlGS19ibFc2VldKMGQ4ZTVUT3RpbU9nRXNOV0RfdFZ6ZUVjRWF4WVBuR3g0N25NU3NsTDdWV1loOVRCSjAtYzFqUlpaVkVvSXB1aWhGenFUQkstTG5mZGs?oc=5",
      "publisherUrl": "https://memorandum.disway.id",
      "source": "Memorandum.co.id",
      "summary": "awas terjerat pinjol ilegal rusak masa depan dan peluang kerja generasi muda memorandum disway id memorandum co id",
      "id": "dd060d23b5295026",
      "domain": "memorandum.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 74.5,
        "label": "negative",
        "negativeWeight": 4.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8f98e1d38d87ff0",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-22",
      "title": "Camat Bataguh Ingatkan Awasi Generasi Muda dari Pinjol dan Judol - KIP Kapuas",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNTUkzTHloMVZjVWdVN2VUTUxfRmNWYTdvZFBjemlwcjAyQlVkNG1JSHlvODRWa3NuY0FlR3h3NTl2SGZvcTZkQnlQSDAwcVdIcm1NZEtESkMzRVhYclFwdlloUDRfaEVkeDVJUHZCdHRnSHNROWRHU1BWS0lfMFpZWDFlS01fUnpWbFY2dzFtR05HeTBuN2Zfd3hyQU5IaTBjRlNhdk1CZXhLQk9CSmdB?oc=5",
      "publisherUrl": "https://kip.kapuaskab.go.id",
      "source": "KIP Kapuas",
      "summary": "camat bataguh ingatkan awasi generasi muda dari pinjol dan judol kip kapuas",
      "id": "5d0f09ca364f3aaa",
      "domain": "kip.kapuaskab.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2ed99f44fd748900",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Dana Pinjam Pinjaman Daring Apakah Legal OJK, Apa Ada DC Lapangan? Ini Pengalaman Pinjam Uang dan Galbay - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxNN216cjh2QUJqb1o4SGNsdWd2OWFPRUlFMDhneGFOR1hJTkszRzNWYmhFaGVMbzJxbmtMQ25YTngzY0pvZV9lNVdRVXNiX1ZCQTllajZYZTJ4aTRUeU4zRk1GOGhuT2M0TkN6QXZnd1JQVFF1MFI0aU4xakFqZF91d1Jqc1FVNjZlTk9yWm1SeXJpZldXRkNGZG5DekE1NWJiYkZsdE9mam9kakJGWXI4SlJFWGs5LUJjT1NPR25pTFFKQzRDeHVxdXBwRF9NWjIySWdjenNiMWVYdllyTVpzdjBiNS1lMHJVVWZYd0lWSk9GYmpQekdyd3Z4T21BWnPSAfgBQVVfeXFMTlhfYzljWWsyOThLX0ZBWmExYVBpOElWOEZIU0lIWmJvSk56blBHR1pzWHRPc1pQd2x2S1plS1lJZThDQW4zRHhEMVhjTDFvcVUzVk5yakRpdjBCSzdldm5uUnBPQjBWcVo5Y21IdzZfVTdWWnZBd0RpcGNkM1VCODdZSUVUZ0FEOV9pUnA5MFd0NWdSMll1WDdQMUpzV0lFaFh6OVZRaVMxZUhKNEE1bVBLdzlVeTVnQ2hGeUR1bnFURlhBaE9rUWJjeXZCRFozd3Z4d0Q2dEsweEZZaUsxTy1qZ09CN2RxT2VuOEZpelpIX01XcDJuRzc?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "dana pinjam pinjaman daring apakah legal ojk apa ada dc lapangan ini pengalaman pinjam uang dan galbay berita diy beritadiy pikiran rakyat com",
      "id": "bc53a40dad8ffc09",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 55.6,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bf3a86ce30d10ade",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-22",
      "title": "Kontribusi Pindar Untuk UMKM Tumbuh 23,25 Persen - waspada.id",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQSjVVYXBCUGJNTGdNeExoUGo5QllkbXM5dnFLanV4ZVNIWFpXWHJ2aXJ0d2hRUW5XUmEyTW5EZ25RMXk2N3lENTNlaUNfQU5BeWt5MnFScGM2aF91VlhETzJnYzhuV1g4OWtZYmM1UTNfWmFFUXpLXzdRUk9kYllkM0tOR1g?oc=5",
      "publisherUrl": "https://www.waspada.id",
      "source": "waspada.id",
      "summary": "kontribusi pindar untuk umkm tumbuh 23 25 persen waspada id",
      "id": "fa5f5cd2b31705c2",
      "domain": "waspada.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee11ca5289561f7b",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-22",
      "title": "Koster minta penyalur pembiayaan pinjaman daring banyak sasar sektor produktif - ANTARA News Bali",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPZGJzWXl1LTFYWVU5X1FDNjNIdkhfN3RwZ0gwZUVnVHl4UEUwZUpkZ1BpN1lCT1ZYdWFuTDJBQVRyWTBtQ0JVbVVXVFpRQW5sYzZVeGJoZm54NGhybzROTkNlMWVJc3gwcFZJRHhXQWhGNEpfOHg1R05QU2dfaFcwY2I2a1RlSndHd2ZGM1VOdlRiMExnOXFEcEVJZkVWLTlFcXZJVkhWV1F6VVdnZ1RyNXdzTTlsdGs2akZOadIBwgFBVV95cUxOOFhYUGdabnVYZ3RyVExCMDlMOHBwMXFDTXpVNW50SjNwMWF5UTNlRm5LeHRqVnRSOWpNa3lnek5rRjd4YlBDRm9qU1hJNEhZMmtndzNWN3NoYjIwb0lmeTdNbWpsYkhHVUMweFp2YktpdFNBcEphdTZ4RVR2dy1GTlkyM1llb0tRWWdoanE1RUZzUDdNSDJtS0xhMm12dlFrNUtwMGVxVXp3MkNzb2YwTWplVlFJTzd4WlVIM1ZHWE1kUQ?oc=5",
      "publisherUrl": "https://bali.antaranews.com",
      "source": "ANTARA News Bali",
      "summary": "koster minta penyalur pembiayaan pinjaman daring banyak sasar sektor produktif antara news bali",
      "id": "4c2e876aac8976b9",
      "domain": "bali.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53559b17e9964303",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Makin Diminati UMKM, Pembiayaan Pindar Melonjak 23,25 Persen - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPOWcyU04xcWMyRjdsdFhyeFpOajdYQXdFdm5YeUkxQ2pQMjk1emNrb0dJZFVfd3c1YjRQVWtYWUM2aXQ2U3o1YUpSWC0xZHR4LWNVVnEtYTlsZUhnbXpRd3ZfTTNnV2ZwanQzdU9kR0pnRnlIWjlxSzZGRzEzTUVxVFQyN3F4M3ZJdms3UDdlQmtpbnNVZGpTMFBMSEtNUzFyUENn?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "makin diminati umkm pembiayaan pindar melonjak 23 25 persen beritasatu com",
      "id": "ebc82de4feda1017",
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
      "eventId": "auto-68df498d3486b386",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "OJK Catat Penyaluran Pindar UMKM Capai Rp35 Triliun - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1kNUVUZzkzOXRmWTZRUDRHNkhPVzd2UEZXT0VnM3lHdzFoSzNwc05YQnh4bjZVWEtlYU5OUFpnRDE4NDF4Y0FhNkVGZkM3c2hXNWhzSHRqUHQwLU5PZHVxZFdMRzJrd09lTUEw?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk catat penyaluran pindar umkm capai rp35 triliun achmadnurhidayat id",
      "id": "fda994c837e5bd15",
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
      "eventId": "auto-09d6d4722a857e6f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Naik 23,25 Persen - Jawa Pos",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNMGpkdGpOVUxRTWJuZGpiX1dFLWtlaE56WFVDdWJTbWhNWkVSUlg2Mm5EdFhacGlfNzJISjdzWlZ3dloxMlpYVURsMlFKWlU2T0RCRUtrcVRYcHdpLWc5MmtOb3k0WXNmcnlJZml4b1NicV9HRXhBYm1GdThUNWFOZ0JoRmZ5UW5uS0d4cmhlc1MyNnpxcjJ0VHJiUldLWmR1SFVpUEtDN1VrY2Y4eWxtTXlMa0zSAboBQVVfeXFMUGtic3JTTHpoU1pUZlRYWHdoNjdVVWtseWEwX3RscVRsLVdNNGV1U3lZOC1GQ2dmaTVpSEFsaXdyWVlYQk95VVJQTXBYbWpYMmlxdkhZZ1oxd1J5WlZMdHJJNEZZeWo0ejc2WXBCVkp4bGpCbDhQdXdlek9LVm4zc0RJdEJvYkNhdjZ2OXNHUzBEejZXV2pwZkhfd1hHa0o5OEtFaE51VTVFUEdXaXFqVDVlNlVLVjR6SU5n?oc=5",
      "publisherUrl": "https://metrodaily.jawapos.com",
      "source": "Jawa Pos",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun naik 23 25 persen jawa pos",
      "id": "6ccd01a396e098db",
      "domain": "metrodaily.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-09d96638899e600b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Pemprov Bali Dorong Pindar Menyalurkan Pendanaan untuk UMKM dan Ekonomi Kreatif di Bali - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNaVUtRGs2dXAzSmstM1c4VFowM2hNVnA3eXV2d0FZNVd2RkltazZEMWFKdGJWNll3Qk9wcmprWF9nMEl0R1M5amZYVlhoYXVFeGxxSy1HSmE0cjNKSXFGbVNISkFiREhuU1BzS0FjZm1tZXRrT0lyLVJEZDl3UC1MeFZVQjQzMWFvSWRuSzVPTDJHMTdRRjNxQ2FJSnNqUlpETEFSWkprdFB3dDlKcXlNNDRXNWVVdXgt?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "pemprov bali dorong pindar menyalurkan pendanaan untuk umkm dan ekonomi kreatif di bali swa co id",
      "id": "fd6286191935f23f",
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
      "eventId": "auto-ff11820100355b1c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Pinjol Ilegal Bisa Hubungi Kontak di HP, Kenali Modus dan Risikonya - Pikiran Rakyat Jateng - Pikiran Rakyat Jateng",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPT0NKdlpIaXRub2hReGx0YUtTbWxRd3IyT0xwTUNXbU1HQTFoUU1qMWt2YWdnZFE5UEhncmZ0YjY2ZzFLRG9EZU1CUmtvbm1lNlJobi1aUk1vaWtPZzBGWnR6NUpJekVNVVl2bDNKVGtKUkZmQWRCcDV3bGlYTmNIcDFMdzVFZlhNU2tPZ1cxYnVod3BmWXk1SkZaWW5jN0E4cXc2T1BwcHh0S2FRQzByd2NvdWppN1ozZnNFTDNLY0l5LUJ60gHKAUFVX3lxTE50NThBMThiM1VScjRuOGViTXk3V3pYNFJHU1N3bFFvd2x2cnJ6a0l3bnFrc3l5X2MySHNDYnJocnFFaEY2dm1xbk04WFlLRzBtVVNZWm1XTlhXMWZuX1p6b0k5bjQyT3JocEQxNDlQU2NkdE5jMjJZN01sWGNmZGtmNkg5aGNPSEtwLTZiZ0ZoRUtadGJwaDYzMlI2X3lUZV9OVms5NVBXTkE4REFidW4wQkpCSzNPQUNrRUdDeC1DaG5tWUlqa2x3VkE?oc=5",
      "publisherUrl": "https://jateng.pikiran-rakyat.com",
      "source": "Pikiran Rakyat Jateng",
      "summary": "pinjol ilegal bisa hubungi kontak di hp kenali modus dan risikonya pikiran rakyat jateng pikiran rakyat jateng",
      "id": "faa43505eea2113a",
      "domain": "jateng.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b51ecceaf4b7f28e",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-23",
      "title": "Akses Pinjaman Digital Meluas, Ini Pentingnya Jaga Arus Kas - medcom.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNdU5mVEF3R2prSXZsLWZacGdBQk5GZGJLZXJaRHRGdnVPc25NbzFacE1PbFVQa1EtZmxiVm0zbXNTaWdEOTVrd1Z1RkM2b2V4YzE0UjFmSzJDd0lIdHl1YUxmTC04MnhCc25mMVJQS1ViV3BUenl1OG5rVGJ0ZU12bl9VaXpoVXVYVDJPWm9rVWdRcjA4YTlHanVTc2JINEhPZTQ2dEsxNFo2dw?oc=5",
      "publisherUrl": "https://www.medcom.id",
      "source": "medcom.id",
      "summary": "akses pinjaman digital meluas ini pentingnya jaga arus kas medcom id",
      "id": "a4562639d2330a34",
      "domain": "medcom.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9e9cdd7501e8fa41",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Apakah UTUA Pinjol Penipuan? Cek Faktanya Sebelum Meminjam - Karanganyar News - Karanganyar News",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPa0szb1B1alYxcTRuMGJLZXdsQVdJRWxTVWtad1VKR0RpR1p5VWhlV1pSS0dwNDNGUlpvSlBTMmJ4eWhITHh4V1pCbndHYld0TE50ZFdKSjYzbXFfSURqeDV6MTJQTUNZMUE1MXozaVRDZkFvMTE5Z1JBRE1INDc4MEVXbU54T0FPT0lzN1p4ZGdUZUc3UVpIUGxHWXQ4Y2NqUGJPU0lVdXN1dExPNFJSSDlzb0p3TlNRRlU4b2I4eG_SAcYBQVVfeXFMUE1IM2RhVHJ1eWdVaU5HVHJMaGtSb1ZVRnltd1JFMFZDVGdoOE9YTjJEM2o3WUVnVXpZbUNLdHhocDRnU1I2V2F2M0JCRTN0TnlTaWU4c1JkeTN5bEhZbVBIZ3NobkNzdWxTMGd5VkRRSU1FM0hfQ2tpd2JLbHZzcmZoSW1YSS0xZWU0WU9LUHdUWnNzT2FMUXBKbDc4bG9qOFE0bWxycG50aGUzQmFhNmpVN09BUDdsNFN2NkFVQlJXXzY4QVhn?oc=5",
      "publisherUrl": "https://karanganyarnews.pikiran-rakyat.com",
      "source": "Karanganyar News",
      "summary": "apakah utua pinjol penipuan cek faktanya sebelum meminjam karanganyar news karanganyar news",
      "id": "b67ea9eab98d6b3c",
      "domain": "karanganyarnews.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a54d6e5cfbb295f4",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-23",
      "title": "Berantas Judol-Pinjol di Internal Polri, Bidpropam Polda Jateng Periksa HP Ratusan Personel Polres Sragen SRAGEN — Bid Propam Polda Jawa Tengah bersama Si Propam Polres Sragen menggelar kegiatan Penegakan, Penertiban, dan Disiplin (Gaktibpli - instagram.com",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1VejZXMEVlVzB3cy1QR0pLd0VHeUt0elhHMmdVcTNDVTRIdG0zS3VaamtqUnZ3azduQ0VFTDhPSmFrYklITjNraHR2V3NuMks3YkFENnBn?oc=5",
      "publisherUrl": "https://www.instagram.com",
      "source": "instagram.com",
      "summary": "berantas judol pinjol di internal polri bidpropam polda jateng periksa hp ratusan personel polres sragen sragen bid propam polda jawa tengah bersama si propam polres sragen menggelar kegiatan penegakan penertiban dan disiplin gaktibpli instagram com",
      "id": "ff3890d4185f814f",
      "domain": "instagram.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bcae7f5f94bdfbc4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Doktor Ilmu Hukum UP Ini Dorong OJK Batasi Jangka Waktu Bunga Berjalan Pinjol - Harian Terbit - Harian Terbit",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNZV9kbFJPb2hId3dJMExJc1J3X2lGNGJnc2lVaGFtUks4bUdPdTZ2Vl9TcWFxOF9lUUdORndLSGZydHJrZDE3UFFXMDFRQVJXZ09kTUo2M3R6ZzVjN3F5TzhlbnlpZ1o0X3JuZmVTZmh0emZRRml1WkdXVF9FSWNTd3lYdHdyb3pyREstTVRUTWdkMWVuQ2JtUDFnTXNmenRydmx2Nml0blZKblJETndmYTc1RUFGbnQxVFBTRzRoLVRLbnJsWmfSAcsBQVVfeXFMTTluSHRxY0pxclVrREhuMm5GSU5Gc2lkSUlvanVvT19uVG5LcjhjbzROZ0J2TnpPd3I3VXBQTXVyRkZheDd2anFCM3ZpanhBd0pmRGFmUEE0dTFZc2FIRmExZ29hWDlXOHNKblI0UHVpV1hDa3RrYlBjSmx6Sy1oMmlweVViVWhDcVBYSi0wb3haZUJMZnBKTzRTMVBkVjBzR19fbTBmSHB3bEotRVc5NWJWb0FOdjZYZmRMbWtFY3o3dGpoWXNIVlRNMUU?oc=5",
      "publisherUrl": "https://www.harianterbit.com",
      "source": "Harian Terbit",
      "summary": "doktor ilmu hukum up ini dorong ojk batasi jangka waktu bunga berjalan pinjol harian terbit harian terbit",
      "id": "b6594350d7269970",
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
      "eventId": "auto-adaaea85164b6c6f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Industri Pinjaman Daring (Pinjol) Bakal Fokus ke Pembiayaan UMKM - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNNkJUSEZGbF9ZXzE3NnlhWGhxS2JzcXU3ejJ3c3JyT0lxczJHcmFDVW14Wl9neVVpMThzOTQ5TEhEekRueTRNLTVPbHIxaG4yaVNWNUh3YUF5dUg2TzVLTmgxanJZcG5QcTZ3VEgxUi1DZ2tMZUxjcGJ3QXk5dTVwSWVmMnZodDc2VVJBTDN6UFZlbWJuNFF2aC1HanJWR3VvdS1qQWtsUjJNSjBEQ0dJaUtB?oc=5",
      "publisherUrl": "https://bali.bisnis.com",
      "source": "Bisnis.com",
      "summary": "industri pinjaman daring pinjol bakal fokus ke pembiayaan umkm bisnis com",
      "id": "7c800c95cd010263",
      "domain": "bali.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f9d1e58408f6d513",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Kontribusi Pindar untuk UMKM Semakin Meningkat, Tembus Rp35,12 Triliun - Radar Palu",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOOXVmTEh4b2NlWGxZWjR6T25hbm5tMVRtcXNkUHZkaVdRX21GSXJVNGh5VWl0VHU0TkVOaFVZRlJ0OWRaVWJSUklTbnU5eTljVzl6VWRFZ2F2S1RHX09CakI4YjNmX01CQThRdGtDV2RIQ1Zwcy00UTZMSGIyaWl6LVBGZWt1RlFJTWNKckVIX3g0VC1RU3JVdEI5OFVCUFlEOGRybzlmTHNPQzM0MDdpRWQ4aUx4UVph0gG-AUFVX3lxTFBtU3NMQ3hELXBFbUdkQUNfUTFTcHJ1STVnaHdEb0Y3RURJcl9SRTVsN1dpVWlpcEJuenlPYWNLd2toVXo4LTVDUkk5X2FXUXBDaXFBNW5RSnpRNXNGWlRSOWpLUGZQa2YzdkF3N2liYkpxUWw4ck1OeDFKeERyOFYtdU1ob2ZEVy1CM1owOFlBeUFRa01wMXp6RnQ1UU14VVpKMHcteG9Gc0xuemhncmpKWGJvQ0VUVDNoSHkyMkE?oc=5",
      "publisherUrl": "https://radarpalu.jawapos.com",
      "source": "Radar Palu",
      "summary": "kontribusi pindar untuk umkm semakin meningkat tembus rp35 12 triliun radar palu",
      "id": "6116ea4b627da650",
      "domain": "radarpalu.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-103f1dba1dcf8f11",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Koster Dorong Pindar Lebih Banyak Biayai Sektor Produktif - NUSABALI.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSTNRN1pyM0lUUWpVdUpXb3V6TjBWdFBVbm9CRGlwY2toWGZsYldENnBJSXZLZkx1SWFNbDd0eEs0X2c1NkxzYk5wcVJXVEVxdm5YaVpyaFV2elU3bmxxT0drS0NCamhXR1hfQ2JQcjRBNlU1ZlU2S0ZrRlAtWkluTXVMb1c5VUJKdWY3WW9VWUc5Ry1lSE1BUkRJaVI?oc=5",
      "publisherUrl": "https://www.nusabali.com",
      "source": "NUSABALI.com",
      "summary": "koster dorong pindar lebih banyak biayai sektor produktif nusabali com",
      "id": "930b50ed72d93daa",
      "domain": "nusabali.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-663079081c242732",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Kredit Pintar Dorong Masyarakat Lebih Bijak Manfaatkan Pendanaan Digital - SINDOnews Ekbis",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOd0FhM0tNZVV5WFdkMm04WUYxLUdTeWI4Q1ROWExLVl80U3pEWmJySlFtZVI5d0xGMTh5REt5N292V0lMamgxMkhUZktLUnhIbDdPT3VNTkQwZUNZOVhQR1Y4U29BbmUzRWY2X1NlMFhoUWNpaTNuaHVjVlNyQk5zQXdianBiMjZ3NFhIYW1laVh5VzdTRlh5OE9obnB3Ri1DUTlETmMyaERrbjdseEZDUlY4V1pieG40SzNCN1J5R2JHS1V1bWfSAcsBQVVfeXFMTkJRaGh1U09uUHY1aDdfVEFndWlfYzl3U3lvOFduOHhILVBidGg2U1hzcnlwUnpiZHVEdkhqTmhadEZZdkZzbnhzcDRiTklMVncydXM5ODd0eWdvWlB0dl9QZXhrdGpkN0NVOE5QVlZOaVJnZldkUlVXWTNCSVJUYUVWUG9oYWotdmx0MVBDMnRCN3VsRWdFQ0RsZzJoOHM5Ri1WNUQycHVYSms4WFBzVzVMdHVPeXFVVnFodHNHNF9FZUFCVjNGU0FFSjg?oc=5",
      "publisherUrl": "https://ekbis.sindonews.com",
      "source": "SINDOnews Ekbis",
      "summary": "kredit pintar dorong masyarakat lebih bijak manfaatkan pendanaan digital sindonews ekbis",
      "id": "b949bcced50e3af4",
      "domain": "ekbis.sindonews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f187a467cee7f70f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Kredit Pintar Usung Pendekatan Teman Atur Uang Dalam Pinjaman Daring - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBzNTBpZ1E5eVFVNjhXMnYxb2NIbEd4YnM5RGJsUmcxQVhrU2RKZjFwbTk0dDdpaml3a18wbmY5RjNLUThud09GdXpmaUcxWlVjU1BQQVhUVThTY2JTd3l3LURvOVBOSVdMdmsySksxWjY?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "kredit pintar usung pendekatan teman atur uang dalam pinjaman daring achmadnurhidayat id",
      "id": "a169bdab7089bb59",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8dedf6964abe4731",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "OJK Catat Pembiayaan Pinjaman Daring ke UMKM Tumbuh Jadi Rp35,12 Triliun per Juni 2026 - Jurnal Makassar - Jurnal Makassar",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxPdzJ0VjRJS09GV3V2UGRBZDN5VTNXR3hyU0ExdTlQY1ZSaERiYS1yTjdRS2hJLXNfYmc0QmZrM3VFRUdNZ1M4LURrNFRTZ3JUV3o1a0xfd1N6eWV6ZzlSYmp4RmNHWU9mbmRyN3RYQjlsdVl6c25HQTJQemJQWUp2TVA4NElCeDBDSGpySGdISnRKd1BfWjJfN0NWSnZxN3JCanctalVrc29kOVVmSk5PMndra0d0RUxwaGhTWS1mSGZ0RjdCOHZuOTl1VVdUT2JMUXBhMS00S1QyYlNkT2JqQWYta9IB6AFBVV95cUxOV1JqRzhWdXhXY2VRYU00MDNqcHBtWHdIUVJQRE1fbGlieXdxZ2pZM0NKODdYQjdTRENaMUFfQXlJYXprOUJ5RVFlSjNwckhhX3lpc2J0dVdYcXFUeEZWbEhzMGFYLU9qOFlWN3BMbUU5UXBFVEh6dkFPbFZNc2d1LUJOZlgzX21VU21rMkNjVVRtSnJRazlnb2h0T25ZRFJDMHVaM1JRVVpsNjNCUGpZQl95UzJEYU1jQ2Q3QW84d1FEVDdINzVmbGNCQVh5QmtubVR2VG1ITkMwN0VEUnlmYUFidUdVb3U2?oc=5",
      "publisherUrl": "https://jurnalmakassar.pikiran-rakyat.com",
      "source": "Jurnal Makassar",
      "summary": "ojk catat pembiayaan pinjaman daring ke umkm tumbuh jadi rp35 12 triliun per juni 2026 jurnal makassar jurnal makassar",
      "id": "74afe69baee02868",
      "domain": "jurnalmakassar.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d16e6a097d701d1c",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-23",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun - GoSumut.com",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOVnB3Z3d2MEdBZng2UEpkR0xBX3BWeG41SUxWTVJWR2VSQVlfdUZ1LVEwS2txWWl6M0VOeHJDcDlCRHRnNm5GWmVhTkF4bEFTSHd6ZEp1aG1pei1oTWNrVk1BUmR2d3FyU2VRSWo5TGlsQW9JWjdRdExtcFBOR0s1QzlYb2ZHb2RqZnFXRlFPZGZZd2t3bU5VaUF3?oc=5",
      "publisherUrl": "https://www.gosumut.com",
      "source": "GoSumut.com",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun gosumut com",
      "id": "5578066bceb358b1",
      "domain": "gosumut.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bccfc647ec2a1fe7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Penyesuaian Bunga Ultra Mikro Dinilai Berdampak terhadap Pembiayaan Produktif Pindar - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxONkp5Vjl6cEtFSWFGS1A0Q3BoRTNtNUI4V29kTkpxeGZDN3RqNGxNRzM4dUg5cVdLZDZYZHFWR0JXaHo5Sm14ajByY3NkdXA1X0xEenI5REhxQlR0bTVNdjRmWGdWNU1lMHpDMVVvMmk0TmpJMmlLT3pmRVlzRHgtN0NydU96Nkx4UWdrbG1xSVdxbjY4Rk1TSDVvaWFCd3RpQk5nNjZwb05zYWZBemFlNHJOSE1BdmYxUENF0gG0AUFVX3lxTE1GM1lhbFpPWEhPdlRQcU1OSm5WMWItZlJHdDdEbUEyaDZJOV9VYjN6MUtNZDJFS1U2M1hBeTd1am8wcFBxWGxSaVhJcUd4Wmx3eFRjYWg1eko0ODY1aGxaYS04eEQ5OHpBY3J2ZWpFdFN0bm5IaFhENU4wYnZIZGtraHVQbjIyanFJOW1LNXkxUHdQc2UzWnFzMS04YjlaN05SeVowcDhjTzhMX05kRDlOWjk4ZA?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "penyesuaian bunga ultra mikro dinilai berdampak terhadap pembiayaan produktif pindar kontan co id",
      "id": "a196c12b250870ab",
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
      "eventId": "auto-fc0ce2eb18e243d5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Pindar Didorong Jawab Kebutuhan Masyarakat dan UMKM Daerah - investor.id",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPdzlNb1hqQWtLVFdJMXE1cTZUWkZNNFg1Zi1XODROM2Y3R2dwc0JsRmMzSXB1enZmQlNXblRLdXNLeFlEQ1I3QUQtQXk2WHZRVEFtbF9IXzNJS0t6TTZaeURVSlpTVGRiRjBEZWduanB1WWFTOFBlS08tbnZESDRGV0lrX3FBWV9sR1gxS016RVhXQzc1Y3gzMA?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "pindar didorong jawab kebutuhan masyarakat dan umkm daerah investor id",
      "id": "a5bd896f796318c3",
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
      "eventId": "auto-33e2e7239ed1d031",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Pinjaman Digital Makin Besar, Industri Dorong Masyarakat Lebih Bijak Berutang - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNUGNpUEYxVm5ySUxObjU4WFpNdW04dHJKMThUS2lFUldqWk1yMWtQYXZtN1lTWm12Z2FQT0JUamxybnRyTjA1b3dteWtnVmRZTFRYYjRaREMwc2NQT3hNMXMwNVhrVGVkT2lnMndzR3V4dGxpdE5rYjB3YmNjUzdVUHdreDFreVg2OGJtYTJkZ29OaFFrWEdvYklBSkNwUkpZX19XeXI3WTVoeDYwWU5BZnYwVWJyNGoxckE?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "pinjaman digital makin besar industri dorong masyarakat lebih bijak berutang metrotvnews com",
      "id": "cbc5915e23e71456",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-860c8f883e7b5241",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "AFPI Dorong Pindar Perkuat Fondasi Bisnis & Pacu Pembiayaan Produktif - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNeVBPWHZBOFhnTU8tOUhmZ0tVdjVmMkpITGlyNlNSaXdadk0zQllsUE5ZUDFiWXNmUnI3d1pQamowNF91bWpkZV9mTXg0TU43a3VNMW5xVnRvY1VnajRQZjNlOGh6VGRQV3lUTkVpa1VVbVcyREdZMDdlVm5FbjVhVXllel9Zek0tRU1sYmRJMFBTc2pzOThBTFFNVHRyVVpOcXRWYXZpNTU0RGxUdWRRNzJlNjFLVndBZ3ZTQzFZRV9TTWdqVFpQbVp3?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "afpi dorong pindar perkuat fondasi bisnis pacu pembiayaan produktif cnbc indonesia",
      "id": "78a1d5d42d066d22",
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
      "eventId": "auto-e1d1d3463a77d654",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Banyak Isu Negatif Soal Pindar, DPR: Masyarakat Harus Dicerahkan - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQNVJpdm5BV0pueHV3OWNzZk9xakw1LWdUUEFjd05BZ2F5LTJfa3JVdWZlUXV2NEEteXdQVFo3SzZZMThBRzdtRFI3VWU2QnRUN3ZIcGoyTjRseTBDQWg4eWVmb1FTa2dBSXNRX2s3TlF2ZHd6Z3JfTjROUGdSWmZBTlduXzRvcUJOUEV6R0JQOW9RXzRFT3A5QUdZWkNTZl9ZbVlDX0dNX2FrNjNCYXoteUZ2TGNyZ0d2SGIzYV9LS1NyUdIBxwFBVV95cUxNZnp6UWFmbExBVThVY3FkY2lWSmhDQ3VpLXdjMWRtQlQwUkRhci1rRjdqZ0lhc05HXzRfaUVwWUtSYXlybTdLaUNHYm5DbzhobkVjNEdhajU5YzRyV1hiR2pwamwzTlZHREkxejRSY0k5emVORXNWUmp0TGM0c2t2WHFwTGM3WU52UUo5SGlvcTYwZ3VQRk9qcFpObm5GVFFpR1gtWXVmMElxbTBfb0lXVHdNX2ZjczdDMFBqUHJac0RJcWNhbzZF?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "banyak isu negatif soal pindar dpr masyarakat harus dicerahkan cnbc indonesia",
      "id": "f0ef3a6399299495",
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
      "eventId": "auto-6c7c001a3c00c3e5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Bijak Manfaatkan Pendanaan Digital, Ini yang Perlu Diterapkan - Beritaind",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPR1h5MmhFQVBJdVhmRFdTMlJ2SGZYZ2I5TlFldEhjcjVfbF8zT3lMaVloQ1pRZ0tNeXVHSE1jUTVaVzkyc2I2VzBMNjQxZXBsUVBkd0xnN3ZpZzJNZXAxTVZ0c3JYSzBVaXc4Y19laGd4a19aZ1d4dngwT2JQX2RwX3drdHprN0E1X2h4VEI4RHdvVEFBV05mOWRB0gGfAUFVX3lxTE5zeGZzS3RRVEtZM3ljZWVhQ0xkdnRSbF92S29KLU53aThseEtDdGwxbld1c1lWLWF5eHp1R2syUm8tTzkzcHNrSXMwckRhenFOZmRpMFlfRGRpa3FCN0h5U2dlWmQzcnhobXNnTC04S2h5Z1RCNXk3cnZ5S04xd0t3Sm5Xcmh1bXJWQmpLNU5LRVg2Nmh2cEVqTWRLdjdJVQ?oc=5",
      "publisherUrl": "https://beritaind.com",
      "source": "Beritaind",
      "summary": "bijak manfaatkan pendanaan digital ini yang perlu diterapkan beritaind",
      "id": "9d995b6428c4b3da",
      "domain": "beritaind.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1023d8836901e533",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Daftar Pinjaman Online Legal OJK dan Cara Memastikan Status Perusahaannya - Universitas Sains dan Teknologi Komputer",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPRVRKaG1hR2hTTi1aaXlwTnU1X3RVS2F3MUM4Z0JCaVVadHl4NUNvbXlLeTNLNHJ1NG12dGszYVlNa1RON1oxYnBSMUtTWUEtLTZ1N25tNTlKbkd6dEtleVR4bmFpZmgxTFVFd1pDWG1jZE5YdnFkNjAycEt1aUpPTklzdTJkalVscE1yWWhDOVo5eWNZaGtwZmN6Tl9IbXNNTUxtdnBiQXJ0SkpiSzJ6SHJkRVVqcWg2?oc=5",
      "publisherUrl": "https://stekom.ac.id",
      "source": "Universitas Sains dan Teknologi Komputer",
      "summary": "daftar pinjaman online legal ojk dan cara memastikan status perusahaannya universitas sains dan teknologi komputer",
      "id": "6bfc0653249a18ac",
      "domain": "stekom.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.9,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-420163b87c6c37b7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Desil Naik akibat Judol-Pinjol, Sejumlah Penerima Bansos di Solo Dicoret - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOLW5OUjJ2alRxelN5ek9QMmU5MVdqRzlsdUtVZloxYnRUWGVZWWZPRlNyX2JRTmhmU0NxM0dJTVBXV01iMmNiT19TZGw5Rm80Q1VQWVVVZVUzTnhJb0c4S3hYNTA3SzZDQ2pQUkNoRXFyUTBmSmlCeFAtWGdyMlY0eWRwZXZhQUlxQk5UVWI1LTBmODl4dXY3Vmhsd3JZV1BmSkVYc2FBRkhUQnlEeXp4OTVUS2FWNm5BbXJ2M3g3NUNUWWs?oc=5",
      "publisherUrl": "https://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "desil naik akibat judol pinjol sejumlah penerima bansos di solo dicoret kompas com",
      "id": "5fd34ff700b1fbdb",
      "domain": "regional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4bbc775b927dc48f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Dongkrak Peran Pindar, DPR Tekankan Hal ini! - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPNFpnRnJsOHVxRVVqWUtTZy01THVJQVZzcHNkQjBtaEFaaFplbm1MR0dEanhxU0JmZ1c0bzloMzgzTG11d2NDN19JRFUtNjR0TE5faGhrdWdkUG1vUllIb0pyRlhMNU9SaG1HLUxnVmNEcURCdURlM09uQmVOR3B2WEFqazRhTmstRkJrOEtxQkduWmN2UWUyNjM3Z25PUFNFOXVFaEZNWdIBrAFBVV95cUxONmQycWl6bDY5SmV0cFB0M0tRSnJHbDFtQWNValN2YnFhX21NSVlSakM1TjdncXZWT01rV01ZS19GX3YwTUs5RmFoY3Q5TnF5RDcwSTlOOWZBTm5wZ2ZpY2dHbDIzdXpLaHBSanZXVFR5V2FRUHNnUlFNaEFxWEV4VnhhVFEzX1FVeVAxOEVfZ25CYmFUV0NhRWxJU1BCV2JQX0phME5VZVQyMUpU?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "dongkrak peran pindar dpr tekankan hal ini cnbc indonesia",
      "id": "a4ca558739e63a19",
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
      "eventId": "auto-e5d2581aa63074fc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "F1 Malaysia 2026: Jadwal dan Harga Tiket - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE82X1VmSnRodGRELVlQWHZiMUhqbC1jUVZ0Q2NYVW1BYzF4VTBVWVhPUzBVbE1aRERKUGdKRnFVWnNwMDFZZFN2Mmd5aTZ2V0pBakhGZE52VnRpWUJhUnBV?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "f1 malaysia 2026 jadwal dan harga tiket kreditpintar",
      "id": "4091b2cc6162881a",
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
      "eventId": "auto-2acd6adeccd212ef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Kejar Pertumbuhan Berkualitas, Kredit Pintar Dorong Pengguna Perkuat Kendali Finansial - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNc3BlclVNVnRuQWRWM0VKdWJhbW5aX2FLM2EzTnU1VlFwOWc1YnNtWXZuSHBjNmdiS3BQWm1pNHZIbndsdXQ3V1ZyZUdqRkg2V3J3UVc3eWVMMDB5cWFMcnp0ZmwtT0Q2bHdxLVZJaEhTYkcwa0xfZV9RTUxUbGU4NG02OThqc2NSOGRvYXlpZVdlNzV6eHR4aERadEh2U0p3aHZUTjZ3MkM3M2lFZFp3?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "kejar pertumbuhan berkualitas kredit pintar dorong pengguna perkuat kendali finansial infobanknews",
      "id": "f62fd07e90037e3c",
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
      "eventId": "auto-3eb66b048a512ea4",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-24",
      "title": "Live Now! Kupas Peluang & Potensi Pindar di Fintech Lending Days 2026 - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQR0tMWWhKYmNCcEMtS0Mxdm0zLVdIQnZLelVBREppWU8zZDV5UlNlandoQ0RwQ2Q5REJOVGcyVFQta2RtdUk1YlFCMU1ockpjZXBkTUc2Mk5fMWE2WmhuX1ZVS2FMUjliQXcyY00ta0l4MHJnTGZYRFU3aGJwSGlqTWtrX29CcWVUTVBUNTdJTHMzc3hUaExvY05uNTY2ZmFxb2tFMHpZUVZ5M0dBaWRHazBNUGxLcXA5aXlMVEp6YTZaNWw3R1Nz0gHMAUFVX3lxTE9XQk5CNzg4MnNJTGxKLWpDaHJqV1Frbm96eC1iTU84UEd6MzFoUlBaZ3hNZW5UU1VUUVRhekp3Z0NmTEsxT1VuT3c3bzJSY2E1T0RMTWdKRjhTX2JESmJ0Q2hDSXV1YklYNy02OE15ZDR3dkt6cF9WUG4yQXM1QlB4cFl1OXFmS0RzLUNhSmNHeUNUeENqN3I2VGt5OTFTUGZLcHNvd1hNcTdMaWJEUENZMm1kZGw5VUtPUllYZ3c1b04wbDhJQ2RNRW9BOQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "live now kupas peluang potensi pindar di fintech lending days 2026 cnbc indonesia",
      "id": "b635c4e42f1da6ac",
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
      "eventId": "auto-15aa830599e655bf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Naik 33%, Penyaluran Pinjol ke UMKM Tembus Rp35 T - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPR081MXlac0RPR2JtRFMzb1djSWcxdzB0QWVkb3lGSHZ1Rmd2ZVVtU2V0bmtLRTRPWFVFY3EwRVBMWEJOX24wRGRPZDBfQ1I2a05jOUhSVG54d3VmeC1NUHk0ZGZQV0pxeG5oTXl2aS00MzFiVmlVVUJCbjEzTmJCSTVVR1pCV3IzZzBqcnptcDdNV2cySmhBOXpuRDEzWHBu?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "naik 33 penyaluran pinjol ke umkm tembus rp35 t bloomberg technoz",
      "id": "94dcbbee24699efa",
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
      "eventId": "auto-94a369f59e6c2719",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "OJK Catat Pembiayaan Pindar ke UMKM Capai Rp35 Triliun - suaralandak.co.id",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE4ySVRWcWJpMFQ4LTFuYmV0Um43UndMTW5CWXp0Y1NKZ2xER1VlUHFJUmJsbFFraVVIaXZwUXBYN3dqMjNlOFdfd3dXRHlncjhaZjNTaEttRVg4UUhlOXdGZXI2QTBweGsyZjgtUV9IQTdtbVNva2o1aA?oc=5",
      "publisherUrl": "https://www.suaralandak.co.id",
      "source": "suaralandak.co.id",
      "summary": "ojk catat pembiayaan pindar ke umkm capai rp35 triliun suaralandak co id",
      "id": "c3618e7feb315723",
      "domain": "suaralandak.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4d824773eac3f384",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "OJK Tegaskan Industri Pindar Konsisten Memacu Pembiayaan Untuk UMKM - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPYW1yMnJSYXJoSTBSejRRQUlQWlF5TWp0R2VLclJNZ3MxSXIxRGpOb2U5ZUdCclNuSk5fTXkyYi1SOU5qLWt5N0FvM3VPRHdWVmxvb1RFWUhQSkRCZFRUbWlNWkhwVjQ1ZGY5ZjBtc19xSzhCTUNHUjFmODgyS3FXNFdnUGVrSmRKQ0ZsQ2RMN0hVbGxZM25Ea2U3ZFNuNFVYR0xRVmoxSFFHVFN0SXhWZ2pOdERqaGZsd0tGZ3NCNWlzel9M?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "ojk tegaskan industri pindar konsisten memacu pembiayaan untuk umkm cnbc indonesia",
      "id": "e88fcb2b667cb7e6",
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
      "eventId": "auto-ac1a8044dfdf4f3a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Pembiayaan Pindar UMKM Tembus Rp35 Triliun Per Juni 2026 - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE54d25OMURYOUlobEtXVUlpc3hCckRHd01oVWM0ZWthYjNJTXhSTU5QV21BRUt4aUNxb0JJQlZ3TV90WmZiSmtaeUZEVXNrZS1oTXpWSWFmbjhhWElYd0FqZGJBLWpmZk9FMFZ2UDN3QnRObm1iUlc0?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "pembiayaan pindar umkm tembus rp35 triliun per juni 2026 achmadnurhidayat id",
      "id": "b97f7039a086eb89",
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
      "eventId": "auto-bd6310e5921927ef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Penyaluran Pembiayaan Pindar ke UMKM Capai Rp35,12 Triliun - republiknews.co.id",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPVlJIQTNhU2EwOU5ab19RSWl1Mm5kOXgzYlpJV2Z1OE9PVDc4YnBYNWJuWUxoZUdENmVmeGs5RS1TREhiQmt1QmRMZ3FmLWtNRXIwSDhuS1hFUG1MWlZJRTJkLTE5cWV3UHJDeXh3QUxHc0t4QjRhb3ZrdkFVRXIwRkxRa3hzNDVHZ3F3SEhR?oc=5",
      "publisherUrl": "https://republiknews.co.id",
      "source": "republiknews.co.id",
      "summary": "penyaluran pembiayaan pindar ke umkm capai rp35 12 triliun republiknews co id",
      "id": "9ef84706905d7e6c",
      "domain": "republiknews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c4225379df17328",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Penyaluran Pindar ke UMKM Tumbuh 23,25 Persen, Capai Rp35,12 Triliun - Sulselsatu",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQMFd5YW1LY2I2Q1pZd1hYMW1XS2JfdEJZVEdqQzBiR3BVVXoyR1gxSExSWFpQcTROU0dfZ09zT1JFLVNCQlhMQzN1YjlFQUtYTFQ1aGhQSURmcHpYQk5VRlhNMGxDUHkwZkhpRk9oZEJiUGZzWW9zbjJKRkhtVXE0anc4WVZZb0g3Q0UtSC00MmNHTExaTEEwbk9sanFWRHNSQUVWdmFBeUJMRGRlWlUtTVllRnM1Mm5o0gG-AUFVX3lxTE0ydjB3eDRmZ3NyczBMNmdSUzJEbzkwaC1CZ0VETHhVUlIxV213OEJQaDVTMDdCWEF6OWNUaDZFdlpmVGExcEJycGJidVpzS1FMRWRjN1NmakE3azNkZzBpM1ZrY0lCVkM2X3pDWS10YmNuUndPMmpiV2NiZ05SQVdNbTFGVEtrM0dzc0NLdVZuSGh2cGQ5ZFNDa0g1V0pvNld2Q281VHpUem5VcjlORTZlc1hQM0ZOS3A2Um8yNlE?oc=5",
      "publisherUrl": "https://www.sulselsatu.com",
      "source": "Sulselsatu",
      "summary": "penyaluran pindar ke umkm tumbuh 23 25 persen capai rp35 12 triliun sulselsatu",
      "id": "f1d42cbda9bb6272",
      "domain": "sulselsatu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7ff3be309caf655",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-24",
      "title": "Polisi Ungkap Kronologi Debt Collector Masuk Mobil hingga Cekcok di Polsek Cengkareng - Kompas.tv",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPUm84UnJwc1ByeUFUY0ZNanJGc1JBenNJSzlzaEFhZTNrWFlQdndSenpWTVI4c28wUUZrbzVxRjZPQmdTbWstNlRHVmFBQzNadWZCQ3FsZ3ZCaHc1dkNEV2pQZy1uSXhtdW9OOXRZc0tMNmVhemJBbVh6aUZ0bEppUkk2a1RBTHFvWHpzZWUxZkYzaVFNSFFiTFotZHFLbmlmTlhLYlBIR0FpZGNLR2tCeUcwdDlGZVZRUHBRbzYtRVZOZDNhelHSAcYBQVVfeXFMT1JvOFJycHNQcnlBVGNGTWpyRnNSQXpzSUs5c2hBYWUza1hZUHZ3Unp6Vk1SOHNvMFFGa281cUY2T0JnU21rLTZUR1ZhQUMzWnVmQkNxbGd2Qmh3NXZDRFdqUGctbkl4bXVvTjl0WXNLTDZlYXpiQW1YemlGdGxKaVJJNmtUQUxxb1h6c2VlMWZGM2lRTUhRYkxaLWRxS25pZk5YS2JQSEdBaWRjS0drQnlHMHQ5RmVWUVBwUW82LUVWTmQzYXpR?oc=5",
      "publisherUrl": "https://www.kompas.tv",
      "source": "Kompas.tv",
      "summary": "polisi ungkap kronologi debt collector masuk mobil hingga cekcok di polsek cengkareng kompas tv",
      "id": "7160c356e4dc9507",
      "domain": "kompas.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d0cb0220802ca9e2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Propam Polres Tanah Datar Perkuat Pengawasan, Cegah Judi Online dan Pinjaman Online di Lingkungan Polri - mediahub.polri.go.id",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxPVDQyRVR2b1h2NUd1YVpBSG5scGJkVU5jUFNNQW1jQm83MzFaRVVXeE01d1FNS3JtS1JJSzZ4X3FyUHZfbFFCNFJNVnlxOV9XZHZzTG5CNzlKODQyeE1HZ0d5WjZhLWFqdWg1M19yaDV2T2FRVG5PdlJzZzl5S2VMRlduRURXMzVLQXgyd1BHd29jaFZFLUR1TU8wYkxrNVJWcWJFbi1YNU9Vb2tBcGVRNWhRdnhfMXo5d2dWV1BpLVhwamk4OG9wNDhWMjItNkdJLTB1aWtDRS02SC1kQ2JxWEx0UTZ3UWVXZGhBMjFJQXdONFpPSlpNbThhY29XU29k?oc=5",
      "publisherUrl": "https://mediahub.polri.go.id",
      "source": "mediahub.polri.go.id",
      "summary": "propam polres tanah datar perkuat pengawasan cegah judi online dan pinjaman online di lingkungan polri mediahub polri go id",
      "id": "2121c31fbf2e06ed",
      "domain": "mediahub.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9453b8014452413f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Syarat dan Ketentuan GEMILAN9! - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1OYTEzQjUtMWpWa0F2R25jdktiZ25kTGlsUzNDOTJsd3JaOFNONHZ4Y3NOT1BHSU9BZko1dFoxLUlUamIyOHdTdDNGQnhrazlwdFNwN0xxbjVveHpLYmpxR2ZIMnpIckh2SHF0WFhYNU9BQ0VVcGdIMk1DUQ?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "syarat dan ketentuan gemilan9 kreditpintar",
      "id": "f0254a3b4d424a1b",
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
      "eventId": "auto-2d8c8c14f7aea72a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Video: Fintech Lending Days 2026: Langkah Perkuat Ekosistem Pindar - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPbHJKUVNyUDN1bkRhUURwQl9tUFQ3OFZVTVQtUTdzMDU3RXVZWmZUQ1lPVHRLZW1jV2hqckNrTW13MUZNX2lpUGZONjlmUXhzWHRIRHh3MWVjUFczdU55UXBqR0MwMGlHVGNkMjgyY2pLZ2YySW56WW1IX1RaYTFZWGgyU19HbE9Ub3BISHFfZWdveG93Z0doenVwQ2RxUWRoaE5iSnNlSDNibjNKMTBTT3NnQkhBbkZ6VmFvLUJjYTltS2djRWc?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video fintech lending days 2026 langkah perkuat ekosistem pindar cnbc indonesia",
      "id": "5e3de4d9231878a5",
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
      "eventId": "auto-dbf5ba5a7d949c68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Video: Kolaborasi Fintech Lending Perluas Akses Pinjaman Berkelanjutan - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPa1BKNlRvSkRWZEo5RlljZWtKQng2VWstWkJJRnZHSHJKQ3M5bF9oMWpxMjFBNndsdXZjSFFlMUF0WFlCc1Z3bERhRXdQQnRHTUtOamQ3ZHRWTlM4MGZfbzYzOFZKUnd1RTBCU1ZRNmV6QmhqdXVramNRLVFBOU0xMThMX2xCdm1YYjEzV2R1X2pLaUxGRmpUSWFaY0FmYUxmWmJvazVSZVBiRFRvek5BRHpRZEplcDl2THNzaXNfR3JZdm92cXNnMHRHNXM?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video kolaborasi fintech lending perluas akses pinjaman berkelanjutan cnbc indonesia",
      "id": "527281a8eff62f87",
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
      "eventId": "auto-9eb89f19e836bfbe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Video: Komitmen Pindar Perkuat Akses Pembiayaan UMKM-Memajukan Ekonomi - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNZDFfdG9NRzNja0E4ZzU2Q3poaDF1azBqelV0SXFHQVRBSzFHZWpWLUhDMzZfUnpueUx1VjhQaXZkUGVtTlU2a0NPTUtYczZqZzRDX204UXkwTV8xQ0UwZDZQUTlLVGF1c2JpcGZzNFZtbEhPc2Y1bWR1dUN2cG9MVnk4VDNPSDJTcVJQeG5ndVVncGRNa296eDJUeVZ2aWctX25rT0w0NzJKZ2N0XzZoWVdia1VJTGIyUjlVSHNvclNuMVVtOTJTVlVWNkc?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video komitmen pindar perkuat akses pembiayaan umkm memajukan ekonomi cnbc indonesia",
      "id": "15c29c88c06e12f0",
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
      "eventId": "auto-bbc9037e411acc5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Viral Cekcok di Polsek Cengkareng, Ternyata Buntut Debt Collector Paksa Masuk Mobil Warga - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQNVB3amJ6RDJxNFhxN19Gck9keXpSRkFfajdseHpkNllhNkhsSnY4T2JHSWl4eTlxeGhJcENWUTBCSUZGYzAtd21ObmpPOHJRWldZc1UzMEtZYmQtNVVuRWVqZC1kUlJfc3hZQkJMTGsxaEJmQjMxSzRRTFkxX0hMa1FpWTFySjZ1NEp0T3o5YjNDbmV5MDNBZW9zSHdOem5DVk5NSHRRT20xbG41R3Y5aDdpVlh3Mnh6TmJHLWtreXd6Z1pHQ3A0UGhlN3hOUdIBzgFBVV95cUxQb3JEX1JyQW1uVmVqZXFleVBlSU9mWUNfbzRNeDNEU2xoNTFjT0tWMjJSZ2hVVnZWZmVrN2huY24zdWpEOGdOdU1QUkRrMXhRWlNtSDVmUVBrREFmSi1HYURwTXFoSVhUOHctUWFPWFhfYnd1dEFad3BZTnlDbVVkWF91Z1NPLXlNZkp4Y1MzbmVscVpTX2s3WVlrT2FWZXhqOVlzMVF4d1dQT2tyQnNQekl6aXZDX0xuZ3lVLWRtVU45clZDYTFKSGZ0SEdCZw?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "viral cekcok di polsek cengkareng ternyata buntut debt collector paksa masuk mobil warga suara com",
      "id": "b6cd255110405a66",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1aceb712197c94f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "13 Pinjol Legal yang Punya DC Lapangan pada 2026 - Pikiran Rakyat Jateng - Pikiran Rakyat Jateng",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNZWR6aG8tdmdIektUeS1tbVpHMXVqeHk4c2daa3JrTDRQUEtxbnpWMW5IUU9hMVFBZy1sbDVyVXhjUFFfcmFvdDZXdWZXZzBhcEI4Qkl2SjZrbjVnZUxRSG5hQTc5QWw4SGRjaXE2T1dpSXJoRXFYSUE5RUFZdF9XWTdZaUdqYXFWRjZ4Q2NnVEdiVXVsTmhJdTRiQU5FUS1BWUFJQkxKSGVmS0NW0gGyAUFVX3lxTE1pX2dvWkRIVW1qX05TWTg4OXBQaE9meUFSUnpwSllJZGZQZVM1aFN1LVJkREl0bkVYdEVSUDMxdTVrT1MyQ25pQVpjWW9uRVRQWVp5dUd6b0pQX00xUWxSSWl0a3ZWVmZmM0xXRjVNaDB0T01LcGRiaEJkeVdoanZkVE15SGJ6VXNia0dZVXg3QzR3eWpob1ZfT1hCWGJvc2ZpTV9lZmRwSEFIS0FPUGlXamc?oc=5",
      "publisherUrl": "https://jateng.pikiran-rakyat.com",
      "source": "Pikiran Rakyat Jateng",
      "summary": "13 pinjol legal yang punya dc lapangan pada 2026 pikiran rakyat jateng pikiran rakyat jateng",
      "id": "75cc0a8f3f9bd48e",
      "domain": "jateng.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-70a2c8afb388a296",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "BPJS Ketenagakerjaan dan Ajaib Perkuat Edukasi Dana Pensiun dan Kemandirian Ekonomi - Peradaban.id",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBPcWd6RUZIbTFDQkh1T2NvSmhMc2xMbXpRR2l1bWF2c1BCWWl5STlaM3JrYlRDdnVjZGY2aWxfdzg5aGladG5OVDliU21ZMVFMUGlkTklmWUx0V3B1X29wOExn?oc=5",
      "publisherUrl": "https://peradaban.id",
      "source": "Peradaban.id",
      "summary": "bpjs ketenagakerjaan dan ajaib perkuat edukasi dana pensiun dan kemandirian ekonomi peradaban id",
      "id": "f2d470a7b4e55b48",
      "domain": "peradaban.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4089166d27921be7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "Didorong 3 Faktor Ini, Pindar Dinilai Punya Potensi Besar di Indonesia - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNVG1QblIxZ3FhQ2dvYmZwTnFpdGNTdmhHbk5aNnhvSTluWk1KeFZ2NXZrWUx3VmgzSHRCNFJsQjdsVHZWSEhMaGJHNk9Pa2FsdjFLeDliY3FQRDM4Q1F6emxQSjBrR3h4NmpoNDE5OUNUb1V5RHJkbzRnSlYxMXRoU2FBY1VIM1JHYXBhRXFZM3BXNjFocFVya054Qm04akk2MW52ZWpuZG9KQloxWTh4Qw?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "didorong 3 faktor ini pindar dinilai punya potensi besar di indonesia investortrust",
      "id": "29a376d0ada5c8d0",
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
      "eventId": "auto-8843aa5d8aa70ab9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "HP personel Polres Simalungun diperiksa antisipasi judol dan pinjol - ANTARA News Sumatera Utara",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNb01WQXgzb0pDUVVrMTFqQWZ6ZDQ0UWVYajE3SGRxNDYyeFN6WUUxbVJFRnFKM2tTS0JLTkNuU3FNTS1zekR6Yl82c1JtN3pMQzByeDhrNVVKd3J5Q0ZMd1A1YlU2ZlJhYnhrQXhEWXNnNTA2WW81Q015cWlkT1hJSWxneWMtYVF0RWpXRkQ1S01QN2RrVWhnaHUyVXBmUXE0VDV6dGw1YW93VllMazRZ0gG0AUFVX3lxTE54OS1Jcm9CVDJJYm5IRzNoeExobDVOVEcxTWF4dlZuMmxiZmljcU1OTDZCOG5JLVJNdUd2RWxYSjVPX0hUSTB2QVpua2ZaRDkxeVJxd3ctUzlvd214dmtCd1lqS1l1YXBZNnVkU3JGVlFLTnQ3R0luS2ZqNWlObGhoNUdpR2dLRzJjdXNpYkZIMmIycEVjUENDOVd3TWV4UmlFdVZNZ1NGWFA2dk02QnhtTDQxVw?oc=5",
      "publisherUrl": "https://sumut.antaranews.com",
      "source": "ANTARA News Sumatera Utara",
      "summary": "hp personel polres simalungun diperiksa antisipasi judol dan pinjol antara news sumatera utara",
      "id": "e82894d6bd9dc895",
      "domain": "sumut.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5acd3a636330216d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "Jangan Panik, Galbay Pinjol Tak Otomatis Bikin DC Datang ke Rumah - Pikiran Rakyat Jateng - Pikiran Rakyat Jateng",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNZEdtNDlyWHVfdkphcHlLVXlkd3dOY1lDdXlvM0JxUWdBRk9GMnFPMHRScEh3cXhydW80Z25TNVhyWGlHdThacVp2SzRpdWhRczNQTndHU1ctMXNRSTR6amVqZXBWM3FFZzNMaTQzbWZBU1JybWh3YmlwQ0p5eVNULVhBS01rd25WZXZkR1lfdDN4RVlidnlubm45bjJaTVoyNkhraC1YYS1jSGhPalYxUHVxUXFnZzEweXcxTW82cWQ5QdIBxwFBVV95cUxNaE9IazFRbHhSRGlDWGFhSGlSeTlnRllma2NDNFd6bldmOWt2ZW11T1JGMmtQQTdpVEc4SkF2WGE1amZCU1NmNmNoeU1VN3dNdVZ2U05la1VwNnNEblBlcUUxRFdmeVoxa0RIOXYtaGg3T1o0NkZLYmtDYkszdW43VzAwTFdjSV9CRWFxeklJa0Z5UXhYNjZyS2xXV0IwcG1Jb3U0bkdSSU5UWmRMMWtDdmtGT011bGNEa19zMDNKVlNWQWNuV3Qw?oc=5",
      "publisherUrl": "https://jateng.pikiran-rakyat.com",
      "source": "Pikiran Rakyat Jateng",
      "summary": "jangan panik galbay pinjol tak otomatis bikin dc datang ke rumah pikiran rakyat jateng pikiran rakyat jateng",
      "id": "7778c85f05feed09",
      "domain": "jateng.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 78.7,
        "label": "negative",
        "negativeWeight": 4.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-43eebc5c15e911b6",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-25",
      "title": "OJK Doroog Akses Dana Produktif Sikap Lonjakan Pinjaman Daring - VOI.ID",
      "url": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE4zd2lJWU5jTmJNelpxZkZOWktOVWo4aXFab3lkY2hGMU1MQzBzOVVMajRpNGZRbDNJZDdUeUhqUVR4Vk9XWGdF0gFCQVVfeXFMTTdyeG5fQW5tX2tZRWozWVN1ZVN5cHI3MG44TGRKWnZPVS1NWXJFT3gzZE9qTE82cXJkcV9NWUpRYnBR?oc=5",
      "publisherUrl": "https://voi.id",
      "source": "VOI.ID",
      "summary": "ojk doroog akses dana produktif sikap lonjakan pinjaman daring voi id",
      "id": "780cf04489c1e4f2",
      "domain": "voi.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-766377545a547a1e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "OJK Jelaskan Aturan Pemblokiran Rekening Nasabah di Bank Mandiri - SuaraGarut.ID",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFBPVWRsTmdqeXQ4dERab29tQUdxeFNTVWRPTnZaMEhFUFFtYnR6QVltTWN5dE5uTFFrTFFEamhPN0JhT0toZVJZZTRmZ2lKcldVZ1g1aHdlZzVSWVhDWUNwajc2R3VEUQ?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "SuaraGarut.ID",
      "summary": "ojk jelaskan aturan pemblokiran rekening nasabah di bank mandiri suaragarut id",
      "id": "571071a46ed69fc3",
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
      "eventId": "auto-36969955c49064c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "OJK doroog akses dana produktif sikap lonjakan pindar - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQOFNCODhIUDZVV2dJLUpFNm5TTzBhV3A2UzNBZnZUWEpZUklHdVI1RFMtcXpjM2R5QU1vYVFpR29hekw2RGtTNXFrU0g3RTVHUmh6R3pzX0JjX0RMTXFMT0h2YjJURndmZWN0UEJwUkFqRmZPR1NaRnliY0dnM1J5S2d3OFdSSmNUaktrdUdNOEVlTnZkQlU0azV5QdIBngFBVV95cUxPclBBbmpUWTlXZWFwZ3FLcEVfZjFwR3BOUEVrR05fVnRidTdOcVU1ZHVkeWZza1J4MXlzeWRMVFFKSFBtRk5nNXJCZG1PY0dtVXlRR1hQaGJ6Uk1rVm5henNUM25ldDMzaE9YdGUzR0xzNkMzYnZmdVVrNXRnT3hmT0Q4MVIwbmhyTlhubUdqMGZfenZqUHVOaVhsOEFNUQ?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "ojk doroog akses dana produktif sikap lonjakan pindar antara news",
      "id": "e0ec6cbeeb5d2a25",
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
      "eventId": "auto-39925dd327bac257",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "Polda Metro Jaya Luruskan Soal Rekening Donasi Aksi 27 Agustus Bukan Diblokir - Tribrata News",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPVzRSV2RaTTZuemgtcms3SDBkRE1CdGF1MDYwdnBHZ3hPNFZnWWZxMG9OcUpqZ0VtMV9TdC1yXzE3S0pZY0FpUFJvdmxwd1o3SEFTcy1MMHc0Q0dOcENWbV8xdXgyX3BWRGkyQ3VNTUpsRUl1SHR0aXItVTFlX2NlVEJtZnBHQ0t0VEJjWjZMd2lUTlNCOGw5eTdEaE9DSUFsUGFNOGNIeGtWUndxWHRYWW9NRFRJVmw1dUFheHh4Znl0Tl9YVmtSVkpRRTNNdw?oc=5",
      "publisherUrl": "https://tribratanews.polri.go.id",
      "source": "Tribrata News",
      "summary": "polda metro jaya luruskan soal rekening donasi aksi 27 agustus bukan diblokir tribrata news",
      "id": "cf23c2ef3d65b89b",
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
      "eventId": "auto-c27628d830314bf9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-25",
      "title": "Video: Dorong Ekonomi RI, Rp 35 Triliun Dana Pindar Mengalir ke UMKM - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNMFY4Q1ozai1lbExEVk04anNyR3Y2NUVIRkFlU01OOU9wZTRrWXByN1RRZS15LS1nZUdrcG9jd3Q4Tnd3QU42ZlFGd0lTNHJKMlN1RVlsVm9JejA3am9XdW13eS1tWkNxRlF5c2JvY2oxMkIwTDBLX1JaYlBxNDA1N0h5SS1kRE8xMlN3UU8ta1RUamdJLV9vamN5RHhLZHBBeFRmbDJLZ00tM1NPZ0V5NGZOVVFXdDJxM0RTT3ktUnJJSWhkTTk3Tw?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video dorong ekonomi ri rp 35 triliun dana pindar mengalir ke umkm cnbc indonesia",
      "id": "34f7932f469d4031",
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
      "eventId": "auto-768b0c5a223f3a92",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "6 Mitos dan Fakta Seputar Galbay Pinjol yang Perlu Dipahami - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9hSkc5RFc2QVY2U2VVRDlNeEZWZWRRZUpQajJNZHB0UERfbmpmY1ZMdmxWNUZyeTVST3dta01MSFpGWDE0Ylo4MHo1d0o5Wmh4V3FVRzRNSEhXV2RSMTkwTFJiaEtNMXRVRnZkRkdhOUZBQQ?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "6 mitos dan fakta seputar galbay pinjol yang perlu dipahami achmadnurhidayat id",
      "id": "fe87454a2bdf317d",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7e63141abea0d723",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-26",
      "title": "BTN Catat Laba Bersih Rp2,51 Triliun hingga Juli 2026 - SuaraGarut.ID",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9WcE12TnZhY1FIYzVRM2h0bnU5UnRmeGFmcjVYLWoxVkdDZVVqTmNtZmhBbEc5Uy1yX0F5VmlmRDF1RzlCVVJsVFdiX0Y1elBpOEtqUWlRaUxyOG8?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "SuaraGarut.ID",
      "summary": "btn catat laba bersih rp2 51 triliun hingga juli 2026 suaragarut id",
      "id": "5cb3f8346ec908f1",
      "domain": "suaragarut.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f1d756515b51dc60",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-26",
      "title": "Diduga Akibat Terlilit Pinjol, Karyawan Ditemukan Tak Bernyawa - BALIPOST.com",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPUV92MzNSTzJIRGR1ZGdnNDFiS29zRzh4OWtfZ3NrWnhrclB2RjlFQWU3VGZGZkc3NmctRlVJcUdETFpQNlBVcDZpeGtoVXdGcW1tS3BOVDdLNGJRZFhZTjJOQ1B1NFNqUGRfeWVfcW1Xc2xJX1dKRHZkOW5QMHhnVGVMQl9LZnoxLUpFZEhwODNJQ1RBN2RCdQ?oc=5",
      "publisherUrl": "https://www.balipost.com",
      "source": "BALIPOST.com",
      "summary": "diduga akibat terlilit pinjol karyawan ditemukan tak bernyawa balipost com",
      "id": "abd260b04331a4fd",
      "domain": "balipost.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-99748a46cfb79c7b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Edukasi Hukum Jadi Benteng Warga Hadapi Jerat Pinjol Ilegal dan Judi Online - Media Center Sembada",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOMWlMWFhZaGJMZXctbl9Ec2dTRFZ2SDBtQjZjUm1pMjBRYUt5S1JMV0JqclRQVHhjN2NzT2V3MmZ4Q2dMb1NYd0FvS21CdVgyMEpOMmZKT2hXS1RYYlFWSFlNUkx4S0lFNE1nWDlwUjRDckFjQjVQUnczbWw3TXBUenNfNWVqRTFQNG50UGEwRlE4V3F1RkYzb1BJcHZORXVjd290b3FYalNWc2h3ODVWZllJRnR6a3BmRHVBQVlFZTk?oc=5",
      "publisherUrl": "https://mediacenter.slemankab.go.id",
      "source": "Media Center Sembada",
      "summary": "edukasi hukum jadi benteng warga hadapi jerat pinjol ilegal dan judi online media center sembada",
      "id": "b24ee8a65433f68b",
      "domain": "mediacenter.slemankab.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ec75fcbee32a0bed",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-26",
      "title": "Inklusi Keuangan Capai 93% tapi Literasi Masih 70%, AFPI: Ada Gap yang Harus Ditutup - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQNHpOSnNickhZMHpHRmFjVmdScEdJb1l5RmV1LXFtVDFFeXVQUUY5UFhCU0xwa1BDa3Z0MUM0MFR3MG9HcGFzNVNlY3dCd0VocFNHZUtkMmtyVzdBWWpCaXZpcjE4cF9ldHNQazFGcWF0U2tqOE9Pbnh0ZU42aUR4ZktsQV9RcnZPRG1lUFo1TUtLaGJoaGFaSU45VzE5eHd4dEhldkpGY1h0cUZBSW9qS09XT3I1c0pEVjdSN25LVQ?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "inklusi keuangan capai 93 tapi literasi masih 70 afpi ada gap yang harus ditutup investortrust",
      "id": "4bb62df4199c47cf",
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
      "eventId": "auto-d0d37d174d183bb3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "KKN Warmadewa Gelar Sosialisasi Literasi Keuangan Digital dan Bahaya Pinjaman Online Ilegal di Peguyangan Kangin - diksimerdeka.com",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxONmhOS3J6TWdwWW9WdU5JZ1JXXzVXMzZTOVNsSEdqb0h0SVc3Z0xIeEZaQ0l1R3VJcm9aQWx1am5hSEVnZFlndlk5VDgxam56SnZ4U3FBcHBadGNGcVdwSTRXdUZSckFQalYyQ0NucEhwZFFDdTVZN2JiM0ZyZVRiVEtFeEtEWENYeURLSkFHS1pHNXlGNnF2YXRoNERwRnFKR2hLYUxIMmFpdnhCdXNfYlNvemxJVHZpZndId3pqS1FMV0xydmI4MF8yZUtsTGVENFA0QUVqcDFqaVg0VHJvcFNWcw?oc=5",
      "publisherUrl": "https://diksimerdeka.com",
      "source": "diksimerdeka.com",
      "summary": "kkn warmadewa gelar sosialisasi literasi keuangan digital dan bahaya pinjaman online ilegal di peguyangan kangin diksimerdeka com",
      "id": "87da6ad4498f96a8",
      "domain": "diksimerdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d15c30ac66ba9b68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Kapolres Binjai Tekankan Anggota Jauhi Judi dan Pinjaman Online - waspada.id",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOa1hYWm1kLXdlal9IZEFYV3NPN3ZwbXZGT1dOZVJuTzVCdkZ5RHpicFJ1MDRJZFRMcGFyMUxNZG1Obmx4a0paYlNJLTJhM0pTTFVTR3pZQXRMcmpIakdjMUY1Q0dETDZqOVpCZkh3T2QxN3RVOGZSQjJmT3lUMS1ma1BwZUZjaHNVSlpMa3otbGtEUVlNRkhuNA?oc=5",
      "publisherUrl": "https://www.waspada.id",
      "source": "waspada.id",
      "summary": "kapolres binjai tekankan anggota jauhi judi dan pinjaman online waspada id",
      "id": "83d30ec41ec75000",
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
      "eventId": "auto-24d72d375d92db53",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Lingling Kwong Raih Gelar Wanita Tercantik di Dunia Tahun 2026 - asatunews.co.id",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE93cEdGR1Z3eHF6eXFOWEZ0NVFLaDQwb0tqUkVuUjF0T2lDZTRhWS1IXzhkbUdmd0hYY0tXSG1qN09LWHVjdlBfZldUbXpES3AxOXZteURWOFUxLWNNYXBzNUNTSTI3M0xpUE91cEFsNzZpU2c5YVQ0YVF3?oc=5",
      "publisherUrl": "https://www.asatunews.co.id",
      "source": "asatunews.co.id",
      "summary": "lingling kwong raih gelar wanita tercantik di dunia tahun 2026 asatunews co id",
      "id": "96e97cc83fd61488",
      "domain": "asatunews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-364d3ea4a993f6c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Mitos dan Fakta Seputar Gagal Bayar Pinjol yang Perlu Diketahui - pdiperjuanganbali.id",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNaTdJMlVtLTJidU9QaDFiWmE5OGkyeDZjZl9URGZacGU2THNidEVwWmQ1S0hvV2paZmgtdmliWllmTEtWb21FdUlkRVgwQUdfYlgzdUY5bEgzb2F3OWJ2QW9iQXptcmYwTWIzdUJhbTBpRk5MTTFDazZQUTVfNjFPZ0hnZWZvdTZx?oc=5",
      "publisherUrl": "https://www.pdiperjuanganbali.id",
      "source": "pdiperjuanganbali.id",
      "summary": "mitos dan fakta seputar gagal bayar pinjol yang perlu diketahui pdiperjuanganbali id",
      "id": "80140cf5573fd8a0",
      "domain": "pdiperjuanganbali.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67dcb5ec361caf3a",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-26",
      "title": "OJK Dorong Akses Dana Produktif bagi UMKM di Tengah Lonjakan Pembiayaan Pindar - Kalimantan Live",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNekE3WGVRcWRtUDVKMWZrNktQX25VYlBCVXR4Sk9tTjhpYmp4NkFUR3NIX1VXUi1acXp6TVU2ZG9sZnN0RWZrT0gwZHJReG80eS1JM281a2JPa3M2UU5obFpLd0Nxckx1c2Y1aE1ERHRkSnEtc3Z5Q0F1b1lsSEFERVdwV0ZNaTJINzFnUGh0WFc1UVZRXzUxbzZjVko5dEN3eE5oSzZxRm9VSTVjdXpPVndzd1VsQWN4ZENr0gHAAUFVX3lxTFA3b3VfVkN5dkJsRVRuZXNNd0xWOFJtaE1uZV9FeFR2b1ZvQW8teG4td1ZxTUFVMVR1QXE3ZklaWW5vVnE4RmRGTzUzdVViQ3Z5dlF2NVo2TjFuNHZ5X0pJLWR3MDI2czN0Z09SUG1aa1NScjdCMm1SclhlU2NUaDZCYlRrcERjLUE0R0VUMVdJbWxlZ3RJWWFGM2d2MmI3aWhEUGc4NHpCSDdvbklWY0t3RkoxRFZyMXZFSGZxb2EyUg?oc=5",
      "publisherUrl": "https://kalimantanlive.com",
      "source": "Kalimantan Live",
      "summary": "ojk dorong akses dana produktif bagi umkm di tengah lonjakan pembiayaan pindar kalimantan live",
      "id": "4a3248fd754f6016",
      "domain": "kalimantanlive.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f3683e6e648e2e06",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "OJK Setujui Pencabutan Izin, Pinjol Pinjam Modal Hentikan Seluruh Kegiatan Usaha - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPMnpKeXpucmdDNksydkpKVWNYcGFVV3ppWEc3dW1SYk1wWW9ydVBROU5JSGszNkdORWhVM29WVXZ6RGphcDVkUVhlYy1rVjVoZHpuMkhydlVwVW9DZWRxZ09mNDVWdFZLMVFFUGdhbWZuQmhiUWUyQVR2Y240N2U0WE9KRjR2Mlo4NjBsV3pEVXIzTUd1RVdvRDFEVmxqcFRvRkNuS2lqc1BnSE1yVnZFR3prWDN6OXcxTkpaY19MaTlZWEF1bjhvUjcweWNGSHc?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "ojk setujui pencabutan izin pinjol pinjam modal hentikan seluruh kegiatan usaha bisnis com",
      "id": "30d1c72aa990d867",
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
      "eventId": "auto-1ca2546d41ab8d12",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-08-26",
      "title": "OJK dalami penundaan transaksi rekening milik Supriyono - ANTARA News Makassar",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQX09UTnVFRHEtU1hhQS1VbFNZRXNvSVpWOUJNV0pybV9wLU5Nc3JEVHhDZm0tbHB5R0pEc01jcG5pbUtDdXdQRkJwSldIS1lhV3pkNzlQZGtXbERjMkNfTDJ4RGxSbG4zc0xqcVR3QUZJNVExM3A3dWdSaDNLeWZ2SUQ4Wk9yYnVrRmJ2dXhqeEtjZzgtSmYzNm5mY2FmTU5ESnZ3?oc=5",
      "publisherUrl": "https://makassar.antaranews.com",
      "source": "ANTARA News Makassar",
      "summary": "ojk dalami penundaan transaksi rekening milik supriyono antara news makassar",
      "id": "e73e01c80373cd5c",
      "domain": "makassar.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cd88c98b0b2b8a11",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "PINDAR Alternatif Pembiayaan, OJK Kuatkan Literasi & Mitigasi, Koster: Diimbangi Literasi Keuangan! - Tribun-bali.com",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPM0dWdnFvREppbTdWX2dtbTd5V1pVTW1PV2lQMWFkU3NNaWctcTlSYklyOWc4ak9jSDlvc0dkTXAzODFmdzJzbE5hT3drQmNGck55a1JuTE1XTkJucDNlajk0aHpObDdVSmxKQ3NhZ2dxWkoyU1dLekhSbUE2WXl3LThXN2dOZlZKN2JUMXlWZHBqOW9CZHhMTDR3UXc0WVhGdjNiTGJJeE9kcnJpX3R1dFFVSUhyU1VNcjRFM0hBajNIQ1ZSTTl2X1BuQW5yNVhB?oc=5",
      "publisherUrl": "https://bali.tribunnews.com",
      "source": "Tribun-bali.com",
      "summary": "pindar alternatif pembiayaan ojk kuatkan literasi mitigasi koster diimbangi literasi keuangan tribun bali com",
      "id": "6b26b244be5718bf",
      "domain": "bali.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-950398e0403fc72d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Pegawai Minimarket di Badung Bunuh Diri, Sempat Curhat Dikejar Pinjol - detikcom",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPdkdFM25ldDhfREwxbTJuQVdSeGppSGFKRWJuUF92dVF5MUhqdktuVy1IYTVjX2ZFVDBPTmppTEhKY2F5a0JHblkyUFRvRVNhd1NCdVhrVDVxRlQ4NVF5TVdwdEoyWHc2djQyVDNpYnN2eWRlQ2R6WkhwWUNYVzhQNi1IcnhoQjNyQkU5ZGZZbm5nU1FzdHRiVDBVYVkzTnBzdGJZX2c4ZUVfb0tRc0VuYUs5NUVVY08wNmoxMi1EOTI5QdIBxwFBVV95cUxNR1NCQW5tZldHTjhzdTlqMXRzSTFZU1hYRlBzSzdFRmZsRDlfbHBwRFRRb2FPdFpkVjZjT3RvWlF6UmE1d01ZQ05Pb3BTZXF1XzlmY2hnazVuZzhMSWI0MTM3NVpEQk1UTXVjYVBXNG92M2xuS3VwdHVCUl9oSnBWQnhDVDJRWk9nbHhRVDg1SXZNM1dKRTE2RWEtbTJGNzlpU2tUTjZyTU4xdEJKMmhpbmhDbzlVRWIwNzlzQXl6VFJKZ1huakVJ?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "pegawai minimarket di badung bunuh diri sempat curhat dikejar pinjol detikcom",
      "id": "ae07885ac3eace45",
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
      "eventId": "auto-7b000302de2908f6",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-26",
      "title": "Pembiayaan Pindar ke UMKM Terus Meningkat, Nilainya Tembus Rp35,12 Triliun - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPVTJxanFQcmxkekVYS2ZEamsxeEQ0d1JqQjg3VTBaREpXVEpSdHp5SGdpcGdjNjBnWEh1cHRrMURwSDE4RDFxTnZ1OERQVF85aGxPRjFaYWJYNlB6VnFRU0w0c0MyS2xDM0lEQ0lxeHItN1pDUllxQ0dfeWJFNk1QRnRKdkppVVZpdEwwb3RjNTdlNVpxYVdFcDRBQVZEQlFENVlocWlrdHFYdXRYUEp5UDFmeXhFLTZOMXlJ0gG7AUFVX3lxTE9tMG1mRFpwRlNzWGhDbHBkNjl5UWRWRVZJX3pGbHMxd0VQUl9MMHFObmRMVXBub1FhbmMyTWxqNGh1ZFR3YXkwRllJUXQ4VW5OZUdQU2dVOVJpbjFVbWtxb2psN29IUXNaNzdNVlZMbU5WZzY0S1gtTXJiT013Vmh0TXB5MDFoZDhSVnBSNGlQRDN0bmItSUdCMDF2Z3Uza0ZWeUhFWWxuTktPWWloeExSbGFibUhWYWNSSXM?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "pembiayaan pindar ke umkm terus meningkat nilainya tembus rp35 12 triliun suara com",
      "id": "13773594c5d32aee",
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
      "eventId": "auto-fc277285a9a51462",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Pindar dan Bank Regional Bisa Jadi Kunci Perluasan Akses Keuangan Digital, Ini Faktanya! - RCTI+",
      "url": "https://news.google.com/rss/articles/CBMiuwJBVV95cUxQNUxsQnFicTRvMjlqQkdVMkVXTU9yMmM5Z05mcjVBd3hlZVVpcmZGRGluUUZqRzI2QzFoSTJ2Z0pNWmpMekE2NnFOREx5bmkwUGtTSDBmQmpaald0Y21uNmcxd1FBaEQxNVg4VXBRRHpBTklhY0xtSVNxUF84YVF3MGt6M1Q5dEdXVmgxc2p4WjJMaFQtVHNrVVlXa2t6Q1FORUdzakg1LXI5allZUzFYVDVVb05ra3FIYjZLN3hOdnI3SldlVU5rMlN2cUQ3dGNESDRJWWxLRnRpMnZ1UVdNVEYxcXZ6RVlPXzZMcWc5TUN0czEwQjE5OWF3cW91VlpsMUh1VVpOZnpKdWR0WHRieUxyczkyeDRNbWdQb0xLUW1xbHdYa29BTi1UQm10TVp5S2JlNnFHd2hoMGs?oc=5",
      "publisherUrl": "https://www.rctiplus.com",
      "source": "RCTI+",
      "summary": "pindar dan bank regional bisa jadi kunci perluasan akses keuangan digital ini faktanya rcti",
      "id": "7a214841b80554a7",
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
      "eventId": "auto-63bb18c15286fde7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Sebelum Ambil Pinjaman, Jangan Hanya Lihat Dana yang Cair - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPMTl1S2JsZFdydlp0NkxvYkEzdWMzc2hCc3QzSklPUzRCWlR4OENXZU5oS3N1VFZPUndGNFdzbGJ0UmNpNWNaMGtqeHB3UlZoeUR4dFM1ZGJKVEt6TVlHb0otQmZDRkRvZTNIQ0VRdDlXa3VQTkpNZ2l2NnBYX2k2MkhJVHdfdWlVcmltaGVQdEJWNE9pRWRQVi1vN0tsMm9penFyaGZQN2ROZ0xY?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "sebelum ambil pinjaman jangan hanya lihat dana yang cair bloomberg technoz",
      "id": "0c44a42734c290dd",
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
      "eventId": "auto-c60be0988ace5b60",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Sempat Gelisah Dikejar Pinjol, Pegawai Minimarket di Badung Ditemukan Tewas Gantung Diri - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOTWNRMFJ5b2JfcmtRbWRadzBjVGY5UFFVM0FBalZvM3RhZGtSYXpkYVJlMzRCOXh3NmhkQTBuRkZWbzRaNGlHVFc0SjRIaU9kNE85Nm1ubnFHVkFrMEo0OGxwQklpdnQxUUxZT2dsVlhZVGFfWmRSX3dadG15VjBlT1gyVm5WTjlOcGN0Z3Jrd2I0RlpTdEh6T19vWUM3dk45aTFjazJBN3E0NlFsRmhFOHJkRVM2Rmd4TXd1aVFqeGNUa05aUnRv?oc=5",
      "publisherUrl": "https://denpasar.kompas.com",
      "source": "Kompas.com",
      "summary": "sempat gelisah dikejar pinjol pegawai minimarket di badung ditemukan tewas gantung diri kompas com",
      "id": "965b373a5180f27f",
      "domain": "denpasar.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8533d333205f3e58",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-26",
      "title": "Waspada Terjebak Utang Membengkak, Ini Perbedaan Pindar Legal dan Pinjol Ilegal - radarlampung.disway.id - Radar Lampung",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQRmN4c0FaOHBqR0dqZ1VyMFRfZnJITTM5NUloRlBPWGY3dXlndTRQMDVmdU5KczdIS1Yzb2YyUTJiSzA1ajl4cFR2OTl4c1JCdWlSNklkNldoTmM1RVdnWG1sbVhhWVdFS0lWYjFQR1d6cEdISzF4QUd4YVdFTkZ3MWwyeS0yWHliQXFCeEdNY0xuQ1M0M2lIS1JsSkZCeHllcGNmQmpRQXZmYnc2TFVZMTd2LXltM3JTRmZQX9IBvAFBVV95cUxQRmN4c0FaOHBqR0dqZ1VyMFRfZnJITTM5NUloRlBPWGY3dXlndTRQMDVmdU5KczdIS1Yzb2YyUTJiSzA1ajl4cFR2OTl4c1JCdWlSNklkNldoTmM1RVdnWG1sbVhhWVdFS0lWYjFQR1d6cEdISzF4QUd4YVdFTkZ3MWwyeS0yWHliQXFCeEdNY0xuQ1M0M2lIS1JsSkZCeHllcGNmQmpRQXZmYnc2TFVZMTd2LXltM3JTRmZQXw?oc=5",
      "publisherUrl": "https://radarlampung.disway.id",
      "source": "Radar Lampung",
      "summary": "waspada terjebak utang membengkak ini perbedaan pindar legal dan pinjol ilegal radarlampung disway id radar lampung",
      "id": "49b106541e0af945",
      "domain": "radarlampung.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dc886bf6965e52e8",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-27",
      "title": "Banyak Penerima Bansos di Lobar Dicoret, Diduga Terdeteksi Judol dan Pinjol - SUARANTB.com",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQR0pUU0Q0eWcxV0lKT25ZcHJBRnlfdnNrOXRuNUF5T0J4UVo4RlVCdUJSV2hpMU42TFN0NmVtSE1HYUZXY1VfekRPUHhhZVF6Tm1oVmk3ajlNMUpqNE1naElnYVlvckZRZXVvZUxxNzlBMGx1b3l0S2ZxTDNxSDV3OWhwRkxJQTI3QUVuS0lkeDFMYjFiX2pCWUE2OHBOb0VHZjRXWWZ2VkdET3M?oc=5",
      "publisherUrl": "https://suarantb.com",
      "source": "SUARANTB.com",
      "summary": "banyak penerima bansos di lobar dicoret diduga terdeteksi judol dan pinjol suarantb com",
      "id": "39cfbfe7e4fa1915",
      "domain": "suarantb.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b6462e81a609e12e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-27",
      "title": "Cara Cek Pinjol Legal dan Ilegal Lewat Otoritas Jasa Keuangan - https://rakyatcirebon.disway.id/ - Rakyat Cirebon",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOdkRWVndzc0dyRUwxSFItU2pSYy1yQ2FPSmNUVzdwNlhIMXpreHVQNWhlQjdXMTlwQjQ3eFFzaHdKUC1MM1lTZnZGVVlyS1JmR29LXzRmQmNYNkt5TkE1Q0pwOWw4a0tPYU4xSjNKeVl1ZTVDeEJfT3FoOElzRGM2WnNZZFowU3ZsNFplSlFWeXd5U2lkb0t6TDJzSFRXUFJWdWJzY2cwcWplTDJXVXRJZk9qVmNIWHBNUnEw0gGnAUFVX3lxTFBuSkxJQjdNX3VwM2FTZzdmN29VSFQ0NzNZMVR3bHVQQnhXb3JOeDdmOWxueXpWMXlFdmZTLTF6ZlRYVnFYay15ZF9zZXp2NFZNaF9OdUxZX1VubHU3ZEhPQUh5RFE1RXRvRGE2VlBjMDRnTHl3T1ZQQmZHQ3ZxT3lieEN1NDAtbl9xa1hzUUtxMDlfOUpaMjVJdzF5ZmRKU1RDUUtqNm80?oc=5",
      "publisherUrl": "https://rakyatcirebon.disway.id",
      "source": "Rakyat Cirebon",
      "summary": "cara cek pinjol legal dan ilegal lewat otoritas jasa keuangan https rakyatcirebon disway id rakyat cirebon",
      "id": "ab4ac5793335d785",
      "domain": "rakyatcirebon.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-708eaf4e382e4ab7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-27",
      "title": "Diduga Akibat Terlilit Pinjol, Karyawan Ditemukan Tak Bernyawa 1 - BALIPOST.com",
      "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQenhnX0hTamI1QWdDTjh3UjZyTWM0RGVlTWlnSTRSeFF3eFNKQV81ZlZTXzZLMHVMbzFrcFRlbHk3YjNKbjZZRmFjdFdsRXkzQVBQSGYyT1VHR0M5aEdOU1c1T1BvN2sycUZNVVdONXJ2WTVsR0dNT3hnOTNFdEVvbmw5SVBhOVdHdFNxRWRJUlhjMjdtU0o5WG41TTdENGtBVWFiRzhFSGJ2cXhQWmY5cTQ2T0xoMVlZbl84REpEVmF1Ui0wTGZBTnNGM280TWhMbTV6Xzg5YkxQc0ctTmozaGlFWnBjZGRDcjd1LUgySQ?oc=5",
      "publisherUrl": "https://www.balipost.com",
      "source": "BALIPOST.com",
      "summary": "diduga akibat terlilit pinjol karyawan ditemukan tak bernyawa 1 balipost com",
      "id": "0010443a51e6556f",
      "domain": "balipost.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2869d06b0e737e15",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-27",
      "title": "Edukasi Literasi Pinjaman Online : Lebih Cerdas dan Bijak Menggunakan Layanan Digital ! - desatepus.gunungkidulkab.go.id",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPTkdpVm9udzdBdTNfNnpVVEtzbkhBSnJYMjVsZDIyVFpWZG9MTXVUbmZMQlR5QmRKUTJhRTMtUXRvQ0prZDMtbGk1dVMyTWVvZ0FvZGxBeXFoUVJLVmFKeUpJcnk5WTlaYTZRRU5XeHlybFUxQWMyNHFDOVBjN0k3VFBkZHByMXNsbFZNbnFxQWxQajJwSVpTREhLVVVFNUNKODBTallhTllfcGg0MlhPWjVSdjU5MkFqU3VZcXNkbGlraUZxVnJHUTF2cHA2SGZiT1lVUTdyN0N4Y3ZVeHc?oc=5",
      "publisherUrl": "https://desatepus.gunungkidulkab.go.id",
      "source": "desatepus.gunungkidulkab.go.id",
      "summary": "edukasi literasi pinjaman online lebih cerdas dan bijak menggunakan layanan digital desatepus gunungkidulkab go id",
      "id": "d1977329377e1ca7",
      "domain": "desatepus.gunungkidulkab.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9116018f7e4825a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-27",
      "title": "Fintech Lending Days 2026, Industri Pindar Perkuat Kolaborasi Nasional - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQOTVZdldGbTFVVlJ2cV92bVkzR010SU9vLVVVODk5dlF1N2l4VXp2UE9iVnR4WDFWNi1nRjFieV9hbWdYTVVOaTV6cEdpaFRvdHRRMkNvNUlacU1hV1NDcFBOWkZmaDVLSFBGcEJKdmt2SWx6S1M3SFEzWFRHS0tmdGNxaTAtTEVjc1U2enhoSF9qOU1IYW5tbGpXS2hybkZieGZrS09ZWDhGalBYaDNwSkRjdUZUSVdRN1FxV2NzVFBoQm1KNDNV?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "fintech lending days 2026 industri pindar perkuat kolaborasi nasional cnbc indonesia",
      "id": "8ae8b940bb2e969b",
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
      "eventId": "auto-6ea03b88885a5bb8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-27",
      "title": "Lurah Sukabumi Selatan Soroti Pengelolaan Keuangan PPSU saat Sosialisasi Keuangan Digital, Ingatkan Bahaya Pinjol Ilegal dan Judi Online - Kota Administrasi Jakarta Barat",
      "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxOdVB1S0QwdVlYdWNHMklPMDR6dUh2MHh4R3RfTWhzRHFCeUc4LXpfN0Q2M0tfcEU3Vm5xS2N5SGdrOUhVT29rY0t0ZlFCX3BPNjNxU3RIODFxTXMtY1F6LUNwTVplbl9tRWpYUXBKVkxyVndRYnpSSDdwUTZ1cW8ySmwyYUNLNHF4eXVBWGZDbWp0MEdETThJY0J6d0FTM2pCeFdDQnVZb1h2MEFZTUg5bnpvOVhEVlBzZ3dtNDVNRkNxMV9MMUFBbU1TOXBZdy1iU2R3VnVnV2tmUGpzRHFnQkJpUXUwTS1iVDR4S2o5cS1NcE1UWHJMTXBiMXZTblU?oc=5",
      "publisherUrl": "https://barat.jakarta.go.id",
      "source": "Kota Administrasi Jakarta Barat",
      "summary": "lurah sukabumi selatan soroti pengelolaan keuangan ppsu saat sosialisasi keuangan digital ingatkan bahaya pinjol ilegal dan judi online kota administrasi jakarta barat",
      "id": "213685836398d0fe",
      "domain": "barat.jakarta.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-61c83e899c9cf959",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-27",
      "title": "OJK Mencatat Pinjaman Daring UMKM Capai Rp35,12 triliun - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQSFZreUo5RTBBc0JEV0x6QjZIVWhsWHp2N0pmeC1zcFVGaUwzcm9QWVNUNDRVbEhzTEZwLXVKZzR2VzN6MlVEQ251R2JxZmV5UjVsX01aeTFSLTNuOE9mZndBaVlRN0xQTi1RUFpGTUQyMU9JWlUzOFh2VWN1T2VNOHJQU2xFRm5lUy1McFcxc2R0SzBrNXlXVWpwTy1hdw?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk mencatat pinjaman daring umkm capai rp35 12 triliun rri co id",
      "id": "f68836e435bb06bc",
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
      "eventId": "auto-f0cb713ce972eed4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-27",
      "title": "OJK Sesuaikan Batas Pendanaan 3 Fintech Pindar, Ini Alasannya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPT2Z6ckVzbnMtN18zYWlpeDJlYmZ1NlFROEtnWnVFdUp0R2ZvX0pENExMX05DRWFFQ0YyZ1BLNkl5RmM0UG5LOWNKTTM4MVFZTk5HYm15SmV6dzQxVjBxUzFfN3pMRUE1MzE0Wk5sYlExbkxKb2JXQ2dsWC1LSWl3ZDdTcVZFN00teE9pbFB3?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk sesuaikan batas pendanaan 3 fintech pindar ini alasannya infobanknews",
      "id": "f29caab7c0cf1051",
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
      "eventId": "auto-f825004d402b2578",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "AFPI Dorong Literasi Keuangan dengan Pindar Mengajar & Media Roadshow di Mataram - Radar Lombok",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQdDAxSUgtMzFLLVRyUnlKcjJwd2x1bDgyMDRZRlRRWjdzMjNndUhBZ1ZFODdicFFOeXNWQUNtajNJTnhmWWxYSzZPbnY2bGhKTGVDX2JSWUE4b3JLQ09fWnlLX3A1TVkxaHhEa3ZENXJMS3VWM3JGMW1rSEtJaVZTbTVCRmxwTTNfWXpyOGJyTzJpUUllVWw3Wno0dEFlWThhQzZpUmlpdUdzSm1aa2c?oc=5",
      "publisherUrl": "https://radarlombok.co.id",
      "source": "Radar Lombok",
      "summary": "afpi dorong literasi keuangan dengan pindar mengajar media roadshow di mataram radar lombok",
      "id": "793b62b9388628c9",
      "domain": "radarlombok.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8d0561a0c113fec0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "AFPI Gencarkan Literasi Keuangan Lewat Pindar Mengajar di Mataram - Lombok Post",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNWDZZMjBrNy1IWDZvbXN5cGQxdTlKSEo5SkN0cTJKV1Z0SGpmdnJjcTRydFBiM0FCbVJydVA1aDFSOTl6YWtLNHZrQW9QdWdxaTEwOFZod3VZN0psU0ZzV3FQQlZHam9QQmU5VHFaSW9fM3NiRmpHb0wtUkZsczhnczlqcG82Y0pEMjJiYm8teHc1QXZqbWRWc2phOGRwY3BYdDh3YTUzSDAtQ0FXUjBLUdIBtgFBVV95cUxNSDA1NlE1TXk2LTQ4UW9zelY2MkZja0JtQWF2a0dscUdOZW5XX3RMcUhoWmhIVUJocE1OR283S0I0UHpPUkh5bUJDZTRjWWxFd0pCckhLVnhBb0pNV3kxbW05akNickhleExQdl9sbU9ETzVLNmlaVGpra1BZeW50Y2lUbkxDQWpDY2owSlRqcVE0ajlVVnVBa3FfVHRVcTJhUEU2OC1DMXh0S3NTQS1zbklNSEZodw?oc=5",
      "publisherUrl": "https://lombokpost.jawapos.com",
      "source": "Lombok Post",
      "summary": "afpi gencarkan literasi keuangan lewat pindar mengajar di mataram lombok post",
      "id": "0a3bf1cdc77b8249",
      "domain": "lombokpost.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e13a187c1a103f10",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Biar Nggak Keliru, Ini Bedanya Hapus Aplikasi dan Hapus Akun Kredivo - Harian Jogja",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQR2FSRm1Td19RYXNPUzJTYkJWU1l6eUhxS0lrYkdsSzB3eVV2Wmk2dXNxdm9aeDl5WU1ReUFfOGtVbklDZ1JaSzdxWGg4WEpxcTVfeXFCckp5YWVzSVNQMVdaXy1TMERhZWV1Tjh0TEdOOUR2ekZRNGlONnR4UjVoXzhsMlZ1WjNGNEZQa1RJbFRSampRcmQ2OXRxWVdISTVDZklpS0l3VzU?oc=5",
      "publisherUrl": "https://www.harianjogja.com",
      "source": "Harian Jogja",
      "summary": "biar nggak keliru ini bedanya hapus aplikasi dan hapus akun kredivo harian jogja",
      "id": "fb7838bd9f1026f0",
      "domain": "harianjogja.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-086f457be2f3b043",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Cegah Judol dan Pinjol, Mahasiswa KKN Edukasi Pemuda - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPcDVnMmI1RHJkdWhRNDRWZUlCZ3VQRXVCQmpzdTlJQ0lNTHh4WW96U0JaUEdBZUxBVEI3ODV0MEtDeTd6SkhjQVJZR25kbTExTFpEejVQci1EdHVmcTc4VnhQSF80UGJzZ2JuZ0lqd0xVQUtEZzRzbktSUFp5M29Yb0pXd2RnVmZOVFUwNEhoOExQM3JxNC1vaEpmcWR2bDEwQk5oQS1sNWFKUThzQ1lBZkliZVJYMjA?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "cegah judol dan pinjol mahasiswa kkn edukasi pemuda kompasiana com",
      "id": "a5b9e7f5bd2ae30e",
      "domain": "kompasiana.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-da409da25d9ad107",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Fintech Lending Tak Lagi Sekadar Kejar Penyaluran, Kredit Pintar Dorong Responsible Borrowing - Industry.co.id",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOanhycFpJSkpwd0tZV2RpMHNkZ1BqbUplU19ob0w5cThjem9lRFFoTkNQaWhMWTExdTJsT1NBbm14TUN4c1NwN1JkWGpEN2V6dnJVYXZ5SHFmQUdMZ005YXlhNnhXT0VEV3M3T29VNTF0SXJxQXpJUHhmbDY3ektXT3NuQVUyRTNiTWl3NXQyZDZ2dVFDUEJuYzBpQl9OR01UYTJvZnV4NFZKZ1BZNFJITWs1NUZVNGFoYTFIMXJiaTFtaWROLXlUWnJmaw?oc=5",
      "publisherUrl": "https://www.industry.co.id",
      "source": "Industry.co.id",
      "summary": "fintech lending tak lagi sekadar kejar penyaluran kredit pintar dorong responsible borrowing industry co id",
      "id": "7526d64c3bdfc461",
      "domain": "industry.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a41d48730ac090e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Foto Perkembangan Fintech Makin Pesat, Efektivitas Pengawasan OJK ke Industri Pindar Perlu Diperkuat - VIVA.co.id",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQb3VVeVZWVXVITW4zcWpIcERqaWNrMDlocEg5d05aYV9pTFZPVXM2VURvZExSTW1mZldlVERzYUxYdzVFUl9Tc1VVbjdLWElUQzE5RGd2RmZVVDZZVnZTZ2d3VF9zS3YyeWREVXJ3WjNmejB1Sk1MdGU4VkVKRDdjZ1ZhZkUtTFRvbURxcTZnTnQ3VFJwcl9rb0tkSkxvZG5tN0hrQm9odGhDOER3YldmTTBGYlB0bFpsVFA1TDlQZkVFYXFFWTJjTDZn?oc=5",
      "publisherUrl": "https://www.viva.co.id",
      "source": "VIVA.co.id",
      "summary": "foto perkembangan fintech makin pesat efektivitas pengawasan ojk ke industri pindar perlu diperkuat viva co id",
      "id": "3a09f7b4352508ab",
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
      "eventId": "auto-375759b7df39805c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Gagal Bayar Shopee PayLater, Kapan Debt Collector Datang ke Rumah? - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQUlVFQ1l4c3owbkZUNXAtUEQ3R2w0UWk1M24tM2N2eE9IT0JfRVo0d0pNTGdaUVRwMGNTaFk1Z1ZRUEdIdkxmYWlDbGNNcnhIOEt5NUxjN1ZRYXRpRDlxMW1tVmttNzBWbVZLNlJNTDIzWG1BRW9PQ01USjhiMlpzeG1WRmM2VE5xNDZMYWlIaF9NS0N3bDNZVUxGdW54cGg0cXfSAaABQVVfeXFMTXhKQ0pKV1g3S0JOVUdEd3R5SVQwdDhJM2RDMktIam1pS00tcFJmVjY2M0ZuY3M0bEZJSi1xS25zdGU2ckhfMVE3X3NpOHRBeXY5X0h4dTBvcWJOWHk2amUtUkxReEZ1RzFaODdCVEZ4Mmc5b0xMa2FLai16R1JSeV8yTFJYUUt1YktQMlQ2a0xYZkNEdjA4OGs0YXhHRE1LTA?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "gagal bayar shopee paylater kapan debt collector datang ke rumah grid id",
      "id": "42344f779a9d0129",
      "domain": "nova.grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 78.7,
        "label": "negative",
        "negativeWeight": 4.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b5b02e37e4b27e26",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-28",
      "title": "Imbas Demo, DC Pinjol Disebut Makin Ramai Turun Lapangan, Ini yang Perlu Diwaspadai - Pikiran Rakyat Jateng - Pikiran Rakyat Jateng",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNbGVJU1RxYlVMclN6c0Zmem5BNGpNeFNyZ2ZuSWNfTlk3YzBWQmtpZU9KOFpzZlFDZFFuZEtJZkV3Q05HNEpiSE0yZ3lHTUhXTnExZDNxX3h4RmR3RkhtM1hrYnFoUDk3UFF0NXprZFRPUjBvdnJXX0kxdmozY2NsR2M4ZDgxN0xNNUFfTDhTQjNDVGZCdlpUZVhWUlVGdFBqRzlvNGI4c0psdEtZNEZxaXZsZ2tvc0V5M2lPMGpBYUVtNXFxUVdtMlFEc1NnTER4U0JnbUJyR3DSAd4BQVVfeXFMTVNNazV2Z0ZZOVdGdnZhc2ZrNTl6WnNZWEQ3SjBOemFQSnBPdm1YblFnOUM3VU10MkZvUGxvWXZxX2I2cTN0Q1c0MzJmdlViZ0VscWJZc284VXJLcVozLUc5Nl9uandUQmEwbXlXM2huVkgwemxUajVXWnBJTGI3UU02ajN2TjFFT3Z1S1JkQ2lkaTRHMHJDN1RwU0daa2xhQmtxZjJwWGN6b1RrampVYlhmRkgtcDBuNzNQUDdJRXN4VUk4ZmZLSEhYRUp1aG5JNjVnYXZEOHNnZUMybVFn?oc=5",
      "publisherUrl": "https://jateng.pikiran-rakyat.com",
      "source": "Pikiran Rakyat Jateng",
      "summary": "imbas demo dc pinjol disebut makin ramai turun lapangan ini yang perlu diwaspadai pikiran rakyat jateng pikiran rakyat jateng",
      "id": "f6ec20d4c4809cb2",
      "domain": "jateng.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 45.1,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.7,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-694361bb7cea3d4c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Industri Pindar Berkembang, Perlindungan Konsumen Perlu Diperkuat - RM.ID",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQMmZ2c0h0UnJhMVZ5SDJLMVd6U0U1ZG9ETjRGbEUtVGN4NEdCQXNLNVp5aXNIRzB4NFJNY2tuNVR0UlF4cFZrMG5iczZCaUpoYUxTVUdCTDhmSENxQWJxYVlpdHFWSldzQTFNelYyZzFCdHVCTi1zbVQ1Q3l0U3dKWVJyNGlaT1dIMm9zNmpFU1ZhN2dTRVF1X0tLVXMxYWxiMXVIR1oxSWdoQkZQTXpDNEpB?oc=5",
      "publisherUrl": "https://rm.id",
      "source": "RM.ID",
      "summary": "industri pindar berkembang perlindungan konsumen perlu diperkuat rm id",
      "id": "52b3adf1ff077159",
      "domain": "rm.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8714b95bcff18d57",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Kredit Pintar Dorong Responsible Borrowing Kendali Finansial Bertanggung Jawab, Foto 2 #2041490 - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQbW5qYXR1YmN4V1NhdUQ2Rmp4ZHFjbE1fWGJuUWVSdklVZWVDZGNNSjFYeXl2aDIwX0hRNHhXUmVVTmc2ZXgwOXdIdGlYWHQ2TWxha2NpdUtUbVctM1cyaGV4UEsteGNMOWd6SThEaG1QWXo2TGdfWTN5YTk3VnJILTRkTnI1MzEwMzlFdXpuVWFDRGJoZVhTYkpRVERwNlZfSnA2d2tsMVRVNWRvUEs0bndxaTlHS2c5ZElaVVpocUV6aTNlU0ZsVlBWdnJ1dGM?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "kredit pintar dorong responsible borrowing kendali finansial bertanggung jawab foto 2 2041490 tribunnews com",
      "id": "f02950a798ce8fa4",
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
      "eventId": "auto-1c1e67b0f1e8c360",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Kredit Pintar Dorong Responsible Borrowing melalui “Teman Atur Uang” - MIX Marcomm",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdGdhTG53S1NISmMtbUg5N0FpWnRuT2hwQkFQS0N4N0pyZkNGc3M1UU1HYWd3VGZWRXZnR3k1WWZUUllxMnlsT1MwT0hsQ3h1aGxaalllREdURVNoN1R4MGRJWmhWM1V3eHhUUS1xZXRwY01KajBQb0hSM2pHY3pTbktycHRzUmpKZllHN2RHd0FZTFdfaWlOVnZJR18?oc=5",
      "publisherUrl": "https://mix.co.id",
      "source": "MIX Marcomm",
      "summary": "kredit pintar dorong responsible borrowing melalui teman atur uang mix marcomm",
      "id": "9e82ac8735cb4140",
      "domain": "mix.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3fcaf24561d225b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Marak Judol dan Pinjol, KKN P 20 Umsida Edukasi Warga Pucangsari - umsida.ac.id",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE8zLWlCT1JKaG1Namk0aEk5TWdsYmVtemNocjJSaWtKSTZEZzJ4WkZheklkTTVrY1FqNVlRalRJZmpwU3dEVGpCU0pGdzhmb3puNWVwOWdQWExkTll2dHJTT3B5TUloRHFFVjN0SzlBUQ?oc=5",
      "publisherUrl": "https://umsida.ac.id",
      "source": "umsida.ac.id",
      "summary": "marak judol dan pinjol kkn p 20 umsida edukasi warga pucangsari umsida ac id",
      "id": "a0f3a6ea2c8251ca",
      "domain": "umsida.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-08057e46ee52259c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Nomor Lama Dipakai Pemilik Baru, Bagaimana dengan Akun Kredivo? - republika.co.id",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPQ3pHTUJlVnlEeDJBT0FMeVp2eTRmeTNqbkRpZF9hLVFoeDIzSTdaUTd4NGlNVGJtUV9tYjBvTFNjRUJsU2FuSU8wcnN4V0toRWNUb1oxWFdQc3YwV0JpaWRjeDh1OWVubzhzTFE3YlZ6WWE1WGNZS1B6ZUpVS3R3Qk03WllXb25VWWR5LURCdl9ud002TkpNbWNjVW5adGFhSTNTeEFKcktJYV9semc?oc=5",
      "publisherUrl": "https://ameera.republika.co.id",
      "source": "republika.co.id",
      "summary": "nomor lama dipakai pemilik baru bagaimana dengan akun kredivo republika co id",
      "id": "4da5f411377640a4",
      "domain": "ameera.republika.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-637879e7e504ec06",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "OJK Didorong Perkuat Pengawasan Pindar di Tengah Perkembangan Akseleran dan Julo - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNaGJKNndxRmRLLTU2X1Z4eHQtMmYyZEkzUzU2aDJJM3lHRl9lUFM0aTVacDVFQlZWelJCZkFMNF9YdkZMMzhPclY3VXR0cEJzeng3d1pyci03TWpQSFY4MEdQdGdKSFRFODBCX3I4VjZzekZzVVZjVk5UZkJSa0NRWjRkZGpCckluU3JBUUNSRU1FUEsxQ0pGMHdpbTlYVmd1SGZidFV2U0FRcW11WHg4RlYwWHdyM1preHfSAb8BQVVfeXFMTmkwMkd0T0huVE91Ukc0V3Q5WFF3MTRsUE00dVQ1NWRhOEsxRWt4OW5aSTVxcFdfWjlKMlRfSEN6SW40M2U4WEZjLW85N0VNTEZZbzN0QmZGTzlGWm1nRHJfM0F1Y2tWNlc3LXg5U1M2QmY3enFORmtWejdIdnlfc3dNbzhjd3JKNjZxSDIxNTdFbzFZQmVKMDZQS1J5Sk5jMlFRdWswcjFIYU1JQllxdW5OYVRCZ2lRS3FaTnhtaWM?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "ojk didorong perkuat pengawasan pindar di tengah perkembangan akseleran dan julo wartaekonomi co id",
      "id": "492ad68eed2e960e",
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
      "eventId": "auto-01090748b7776c79",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "OJK Ingin Porsi Penyaluran Pinjaman Daring ke Sektor Produktif Naik - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOMVNBVDFxT2EyWkR6OG4tbWpMaTdOQnhxalhEZHZzcmdZUGlxUWcxX1hTSEtkcG5FaHFIQzg4T1lYaEdDWFBJdkFoOWF6QUNmMkpFUEFtbE9DR3d5MXBkVnF6eHQtTFpJMVN6UHNUOURSQVI5b25QMnY1aG5TanRBVmtvSTd5aVdRVWVxTG8wR1k3bnU0aUFEXzZwTHBjWV9qU3R2bEd6b3dyNjZUWmRvRWtRWlVYVXc3QUtLYjRPZDJjSHNBMzRUejdR0gHPAUFVX3lxTE8wamtVbzR1ejFEb205OEFkU25nQUp2cDI3ZDYtS3ZtVlZmd0xzN19ocTlSTjRsRkRVQ3htU0dfSm44eEpGNFB0QWtDMnphWUJMV3BkWTV0V1JwOUE0bF9IMFNqLVgzQkFKdGdXWDhhbkY1VXdCUmhGOUlmTkdmWDVjRTh0aTRWSTdyVWM4MC1PQkdZUEtMUl9neV9MZ3pIZjBOaXZMZ0syOGkwaEZXLXM5TUN0TmNSTG5JSzZNdTdhblJsamZ5aURnOVozSGhHdw?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "ojk ingin porsi penyaluran pinjaman daring ke sektor produktif naik cnn indonesia",
      "id": "87580afc389f9d43",
      "domain": "cnnindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0fac3eaeae4a4e33",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Pembiayaan Pinjaman Daring ke UMKM Tembus Rp35,12 Triliun - Banten Raya",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxORW1aOG05R0pNQWthcFVKVTFVaXFnWVV5Vm1naFZVY2w3d2owZEU4dC1lZURac2VabHo0UWNhWElrQklGeFF6NFozZjJFbklmTVk4UlFJU0phQ2dINXZQZHU5RjJmcUllZTQtcWlKalVlUGg0bm41MEk1YmFwelV6MzJYVUdEcFNJc0Z0SDgwajJQWk9FMUppcHNVbjVzYi1v?oc=5",
      "publisherUrl": "https://www.bantenraya.com",
      "source": "Banten Raya",
      "summary": "pembiayaan pinjaman daring ke umkm tembus rp35 12 triliun banten raya",
      "id": "193bb051692f691e",
      "domain": "bantenraya.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-24af2521313a0ada",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Perbankan Makin Agresif Berbisnis Pinjol, Investasinya 67% dari Total Pinjaman - Katadata.co.id",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQRjNkUkpiUHlCS0MzNGxFN1ljQ1JHa1laMWtDNEVWQ3NuRzRQdWhxQlJQS2pKSXI2M1lEM0J4YVMxaldFQlRqUHF2bDhMMTliMzB1UWpwTnNnX2RuRmZKa3ZNeFFOaWNrZ3Q5XzAxUUJoeUh4NzdLVW1BNm04SEtJRWRlVVozdzc5ckFPc0FMN2RWOHJuSlQ1a2dVV2diTlNPWWpORC1BdUY4NHBmVl9pbjEteEVHR1dVZlJETE5SOVdnVTU1eFBGN9IBzgFBVV95cUxOUE1Sd25XRFFKaEVwRkUyS1NQRnlHYTI5eUZHcFAtQUhCQ19QemtGUTZYb2NhbUdPYnoyNk14VDJwU0VsYmx6RGwxZDVVQzRRZjlsUFVfTm1BRlpUSEMxMXJwLUF4NVgwYUNBMmFwdElCV1YxRVozMUI0S1hxR25IOUItbXdDMzNwUll4UWR5VmI5enlSZnBwN3JkNzY3d2ZtVzIyM0pGRlQxZkVNTVpBZ3h4UlFzWDd2a0lWT3dSMjY4WXJJdXdSQlpON2Zwdw?oc=5",
      "publisherUrl": "https://katadata.co.id",
      "source": "Katadata.co.id",
      "summary": "perbankan makin agresif berbisnis pinjol investasinya 67 dari total pinjaman katadata co id",
      "id": "d488db7410568c5e",
      "domain": "katadata.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3118b4d54101bfc5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Perkembangan Fintech Makin Pesat, Efektivitas Pengawasan OJK ke Industri Pindar Perlu Diperkuat - VIVA.co.id",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOMlpCdWRYOGxqSk1OcWpLY2xhSWtTV3RrMXJRd21NZnN1WWpaUC1Qa1Nobm9zVEZWUW1QT0R4RFV5UjF6MnZvTnBpV09ZQlczZm1kcWRQSXVYQmU5NThfMFhQdGtzemZIUmxQck9aWmhnSS1rMmxSOHoyQzBLVVh6WE5KcHhWdmg3SEF2VHRfX1B3YXpHbERVR0NEYzFjdFB5bDlwOUlMNUlwMUFqTU5qcUc3UnVCUWZRZG9uTTE1QkhqMkhCT1h0bEhFWnXSAdIBQVVfeXFMTWRkM2JfTHpXc0ZIMzN1UVlDT2dLWURHOTZIRkNoT1BNRmpnUzJHaWsybkw3Q01lcTBXQWwzbGU3SGxaMXN3T1J5LWVHaGdQaHVBd29jYks1blhoU0V4eU5pS1lNTDZTa3Nhb2d0aXJVYmVyZ2J6ZW1vY2dqT0RmVjBwLWU2UDZpYnFHTFlSNFp3UDZUT01CT1JmTDNtSmFSZmpUV2NFTHNoLVVpZHZ1dXREQjBjV3pQZHdMUkp5cFRZYzZhek5iaUFhcXRxY0ZCZzF3?oc=5",
      "publisherUrl": "https://www.viva.co.id",
      "source": "VIVA.co.id",
      "summary": "perkembangan fintech makin pesat efektivitas pengawasan ojk ke industri pindar perlu diperkuat viva co id",
      "id": "f0b4ed5f241d3e53",
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
      "eventId": "auto-fba962e2554e8c39",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Perkuat Pengawasan Industri Pindar, Ini yang Jadi Tantangan OJK - IDX Channel",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOWFVBWXNDeVBUNFBTTWZWRFFhanZWY3I4SlRyZU1RSmxLYWQyZkNya1ljSi1tU1Ewbk5FZjFsbzQtOGRKeWJHeDNqaFdFQU93bXdJblVTT3J4MnZUeUtqQ0NnNEdGQUZTajBram5ZVHkzN2JQdkllTlhkSG81UU5mN3JWZEhIZFRZMkNlNlptVUY2RURKWHo4ZDBBcnV1cUNP?oc=5",
      "publisherUrl": "https://www.idxchannel.com",
      "source": "IDX Channel",
      "summary": "perkuat pengawasan industri pindar ini yang jadi tantangan ojk idx channel",
      "id": "48685b7dd02e63b2",
      "domain": "idxchannel.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eaeff4863e1f065d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Perkuat Pengawasan Industri Pindar, Ini yang Jadi Tantangan OJK - RCTI+",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOcGVDeXpiN0x6YmhBcTBjNlF4a3RyUE52bUlzUkRxeHZmcU5KQ3Bsalgwd3oxQmxOaFlkQ1o3R050OVdQck9jeExRMXM5N2o0YTdteU1qQ2F2bkJxWmJ6TjByakRGTHI5ZTQzRVhVU2F0clNXcFlmM3BPWjJobDRoTll2UzBSZE1PeTRrWTM5SU1lTTNVQmdabzVjbWJSVUJmV2lmYi1LbkJ4Y2w2NEhBZVhRN1JhNTRTcHFv?oc=5",
      "publisherUrl": "https://www.rctiplus.com",
      "source": "RCTI+",
      "summary": "perkuat pengawasan industri pindar ini yang jadi tantangan ojk rcti",
      "id": "6424bd09a9efe38f",
      "domain": "rctiplus.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eaeff4863e1f065d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Pindar dan BPD-BPR Menjajaki Kemitraan untuk Penyaluran Pembiayaan UMKM - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQWnJ0Yk0wOHZLMXdjeVJEZ0EwZGxQYjczNkpSUjU2RU11VC1GSHFkeDZ2cnc1c1Y5ZXFEaTVYckJGQ1pxc0h5RkUzeVA1QmZtcmh1cVdCbGZqLUVlcVZyaU5aaXE3T2d4SWZjcGJKY2VRdHNzb2RjNzA3MVYyeldUVTk0RC1nN1FVbF9zS3k0RlNaRmNLTERKZjNDNVZ4SF8tMEl3?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "pindar dan bpd bpr menjajaki kemitraan untuk penyaluran pembiayaan umkm swa co id",
      "id": "3d60fc539a0d34a1",
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
      "eventId": "auto-ef6aa74557d8c156",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-28",
      "title": "Pinjaman Daring Terus Bertumbuh, AFPI Dorong Literasi Keuangan dengan Pindar Mengajar dan Media Roadshow - SUARANTB.com",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPd1hsMExjYVZidGpHRUZoZFlHOFR5N3NIT3p3dERRd2V2U2NwRHNJMzUtMDlmZU84dXZLX3NBekhqUDl1YTdMeWYtcEhMUEM0YW9KU0hVUFNsbzJGZDZuaWFWaDhLY2pzVGZTOVVyT3lqWl9ZTEtJTGpjakRZNEphMHhTaUtBTU5uQ0EzOE0zSEVOaHpubGRZTW5kRUxWa19RemRnTHQ4aVhsczFYWUZzdTVhRGFGM0RfT2lPblFoSHhYYW93S0V5Ri1TX2ViMUZQZFE?oc=5",
      "publisherUrl": "https://suarantb.com",
      "source": "SUARANTB.com",
      "summary": "pinjaman daring terus bertumbuh afpi dorong literasi keuangan dengan pindar mengajar dan media roadshow suarantb com",
      "id": "24aa2b1ea40c8dc8",
      "domain": "suarantb.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3b45e9d9cd53686a",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-28",
      "title": "Ribuan Penerima Bansos di Semarang Dicoret gegara Judol dan Pinjol - detikcom",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNYk1na2l0NDFEaXpVZGxZNHFqLVJ6VEpuMktRQnhFUkJHTVBQZkZlQnN0Sjhhbmxha0R0VE0yRjdtVjM5al9OeDdWeUVrUkNHRmg3QWtkYWtXaV9ZMVZBZWc0RnZtNmNoUUxvNTVxVEpLTnB2RGxrVDJUcGVuWnRGRzU5Y05xTjd1ZFVMZC1DZTg0MlJpRjR2TW8tYmRtSjQzbFV1MWVQeE81RTYxdS1qN1pn0gG3AUFVX3lxTE5XdVJnODNRVHdpZk95bHREUlRKemcyS3BjRVlXUUpFNHJxbUtTMnhMb1pkZThSSzBDQlBlVG1xTlRadmRSOWRmMllVSXdYZ0RVSDNMWmhUcU5iVWg2eGhINjIwa0toTUVXeXFwMEJGVmdjc3F4QnFjM1l6OHdidXpfc2JzTllHMklITWZGaDRGd1RDMHZyUS13ekhHTW5aY25za0xjdlYyNU03TTdweEpPVnotNGxmVQ?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "ribuan penerima bansos di semarang dicoret gegara judol dan pinjol detikcom",
      "id": "e91774f36de41587",
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
      "eventId": "auto-3da908de692116a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Akun Kredivo Pernah Login di Perangkat Orang Lain, Begini Pilihan Pengamanannya - Halaman 2 - Sonora.id",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOelI0TERRTEZWVEVrMlVkTkhOWllQSXhUcTB3TW0xVXhJY202TkRnNnJKOUlJZWxWa2NPMERtbDdDSnZMeDR3MlZJNGVJZC13S3F0QVEwZkxGdXpxOThMaWo0bFVPTFBRRTFMaTVvMXc4QTI0S0VJSkNPNmtxZ1dpUExfbzlVZHdwZmtWbFdaazVNTzdkQ0V0STZ5bzRHTi1ZY1dKY0xDVlFqQU9xd0s2ZklKUUxFSUd2OEtqX21pRQ?oc=5",
      "publisherUrl": "https://www.sonora.id",
      "source": "Sonora.id",
      "summary": "akun kredivo pernah login di perangkat orang lain begini pilihan pengamanannya halaman 2 sonora id",
      "id": "cb61c690e59db391",
      "domain": "sonora.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-914dc4a1f246331a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Cara Industri Pinjaman Online Memitigasi Kredit Macet UMKM - tempo.co",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPZkRWQVJQZHNEVnpRbml1UkxCbGRvQlhOVGF5a0k1YVZBZmdVM1BTSDVMTHZlN25jZWZEYzJPdjZ0NElUOV9fbnVPVHFmY3dHcC1tSnIxYjc2WmdnMTNNZWRwYjJqRHR0N1JIMVRLNDBDaU11SVA3V2FzTTZSYW5ZalBMODRRdzdtVlhWMw?oc=5",
      "publisherUrl": "https://www.tempo.co",
      "source": "tempo.co",
      "summary": "cara industri pinjaman online memitigasi kredit macet umkm tempo co",
      "id": "493ad779dbf81114",
      "domain": "tempo.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cdd2f973ae013c67",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Mengapa UMKM Mencari Utang Lewat Aplikasi Pinjaman Online - tempo.co",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOTU9pVjc0Y0dhRGtrLUxJOEFJSWVNZVNLVHRRSGxXME1FbHVGVkZoMzZXWi02LXNJZTFMQTY3OWQ2ZmdnZjEzTlV3ZGpJc1ZzYnpPZV9TWlNtQXV6N1VaZWxMbUZWOXRYLXBCdFJJclBOUHJSc1JaYnNxNDFKUjQzOS0wQWZCTi03WjJ6S21Mb1pxWHplbDVLQmpB?oc=5",
      "publisherUrl": "https://www.tempo.co",
      "source": "tempo.co",
      "summary": "mengapa umkm mencari utang lewat aplikasi pinjaman online tempo co",
      "id": "cfa0cce62fb77111",
      "domain": "tempo.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-89b2f994dccb33cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "OJK Dorong Pindar Perkuat Pembiayaan UMKM - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPSEZRcE1vb0NjQjB2M1NPXzlBRVFIOENPRWIxeE9uWXp2a05ReHA1SzNwUHNpOHhrbHZITFJGQWstOGtwbU52M05nTzdMVGVuLVZQeVNwTktnX2tUOC1Zd3FpeVpaUGFobkM2VlVkSnQwd19UcERxakZLTThtNEw5eFhkLTE1WktDUjRaTUVWel9hdW9vWFRCTzVR?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk dorong pindar perkuat pembiayaan umkm rri co id",
      "id": "bddd3ce3689f5fc5",
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
      "eventId": "auto-3473e456f0a02766",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Tumbuh 23,25 Persen - Garton News - Garton News",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNWUJ5UjRoQVV0YXF5ay1IMHBfTlBteHZjd0M5QzdWUGxhNnJzSTRjdUE3ckNyNjN4bFVUcGFrMmFKSVg0bUtzWjkyaHZZSUNWUjRkUmJyNHpTZXlrVjFwNUtzckpaWm1oWERQTE5xbnlWTzAwdzVmNDU3ZF9Wd1JicGQwaXh3c21QZzRsekdQUFFXSWRtT2MxZVhfdFpZTXJBeWdoYUlIUHR0NXJiZDlrMXVmUThUUdIBuwFBVV95cUxQdmlzSi15MXFudnp2cy1tWWdnUHRWOW9kOEZJSkV4REtBUjlDMWh6Zm5kckV1MGd4bHhGMG83YkUxUW43UVlwV0hqcndqNzhCUmZhajhXMHJlTXNNdlFPR05HcEdoVGRCMFJpZER2YmFhcnFKcjA1YzNBVGZIdDF4ZHphVGxaQjdac1ozRTRYT3FkdzlyM2h1bXkyc3YteDJiMGNsclZRTHRNa1k1Zks1M1ozenJuM3lwY2R3?oc=5",
      "publisherUrl": "https://www.gartonnews.com",
      "source": "Garton News",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun tumbuh 23 25 persen garton news garton news",
      "id": "81b74810e4e91a89",
      "domain": "gartonnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5f1c3c2a2b5a0846",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-29",
      "title": "Pengganti Skor Kredit, Nomor HP Aktif 10 Tahun Bisa Dapat Pembiayaan - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOV1Zkb21qZ01DQ21BWXZfWGg1c0JpX3hQa1ZickNhenVEYWlWLUZaU2tVWkxKSlRnbk93MTBoUGJ0a2xBMUVONnVYeVN4aXd3dUkyQ2lmSFppYlA2Ti1URHFZUEZkVjdad2hsVk5Ta0lza1MzQjhzd01lNmhiVnNpTlRFamhGRTRPRFNHcnRfTDV2d0tSYnEtZS1KTFE5MUZSMGdjWnNSM3NXWGM2OU1kVkw3TVY4QTVEWEk0Vk9pa2lCa0lEOGxYZNIBzgFBVV95cUxQdTRpZU96YWR1bERMdEtXZ3JoWGZITmNiM096aS12a0pqZFVQYTNQYkJwbFg5dkN6NFlGbk55ZGk2RUNUUW5RZzRVU3ZyZWlhSWw1cDViUG5tZXRJVFhMdmZ5SmQ4Qzg5bjZQbzNQLTB2QnpNOTAxNXN3NDhtWlZneENHaGt3Rl9QeUlYUXJXSnFTUWpaVko1SXJXUkp2eGEyb0hmeDVmekdjR0lBczdDWDRteDdSWENOcmxxbkw2OUtMSUtnYzcyM0VRcEhBQQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "pengganti skor kredit nomor hp aktif 10 tahun bisa dapat pembiayaan cnbc indonesia",
      "id": "f7b4bd84ecd4945c",
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
      "eventId": "auto-ed0d6c1a91788bcd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Pindar Makin Diminati UMKM Akses Pembiayaan - RM.ID",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOcHpicFF5czVpR2RIVHlKOUJtb2o0WVJMN3ctRzl1Q0lOWEVDNTdpQ01qTk01ZzhySWlodk95SjAwS1FHYzQtSVZXb1phWGhTOHZMbWVWSXBZNmJnZEVKRlMtX0ZtOFFLbkhXZnVMVVA4YkRyMkVRWlJ1clRqTHZiSnZ1SWhOLXhackhsRzlERll4bF9VZGRSUVpUanAyQ2xORVE5NGt6d0U2MVFSS2lwSl93Rk45dHU4MUYzTVNBQTNVQUE1ZE8xZXpNVE9qY0hQSmF6bQ?oc=5",
      "publisherUrl": "https://rm.id",
      "source": "RM.ID",
      "summary": "pindar makin diminati umkm akses pembiayaan rm id",
      "id": "4c7e23caf51c75a9",
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
      "eventId": "auto-87cd8d790b1196b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Polda Lampung Ingatkan Orang Tua Awasi Anak, Waspadai Narkoba, Pinjol hingga Ajakan Huru-hara - Website Resmi Polri",
      "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxNaHY3V1A1ZjBXdlJveDVFRGV6UEZ0VnI2N0ItQ052SVVuMmV0cVBwT0x4OWZlZVlvaTJxT3pZNUJBaFVUUFpkY252Nk53b2FST3FQSnNWZVRyQXNxMG4zY2pvLXRuTjhEcmRsQ1B6YUdnM0RPWjdDY2NyVTRUTy1JMk5kNG1kRVRkSHRPal83bjJVS0paQVE1c1FXVkhaZFgzSE5pMVE0bU5FaU5yLXcwWjNKNlNwRk8ya1Z0MHhaN2V1TmI3UHlzenBySW9QSU1IZW93alZOQU4zU2ZGbVdGcjQ0djNJVHVBT2c?oc=5",
      "publisherUrl": "https://tribratanews-resmesuji.lampung.polri.go.id",
      "source": "Website Resmi Polri",
      "summary": "polda lampung ingatkan orang tua awasi anak waspadai narkoba pinjol hingga ajakan huru hara website resmi polri",
      "id": "d14cf55b5874052d",
      "domain": "tribratanews-resmesuji.lampung.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a85eaaa92b7d014",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Propam Polsek Pasarkemis Perkuat Pengawasan Personel, Sasar Judol dan Pinjol - Tribrata News Banten",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPejJkRTlLQkNTMEhEcVY0ejZlUmFtdVBVZmhrTnotQlVYX3J4dWNvTFpXRnF6Q290dFVzSWpiQTdOSmxOOHBacVdNckJJZUlIUTNhOXhoVXdRR2gyTm9fanBJUG9DZUxjdm1xUjRhS0hyV2VlU05GMWRmVUJuM0g2ZXV5NWdvcHFRSnBFc1RTZlhpUloxLVJUTDlyQldjN0hPbEJvS094N3pxZnRsOWZVNjgzNmllNkU?oc=5",
      "publisherUrl": "https://tribratanews.banten.polri.go.id",
      "source": "Tribrata News Banten",
      "summary": "propam polsek pasarkemis perkuat pengawasan personel sasar judol dan pinjol tribrata news banten",
      "id": "fa9d02a43c7b4d25",
      "domain": "tribratanews.banten.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-64bee25a6594ebea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Sasar NTB, AFPI Dorong Literasi Keuangan melalui Pindar Mengajar - insidelombok",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTEF5T19MLTBfMml0X0tUekhBWUt0RUhzNEUzRGlOM2tGeno4dE43NkR5Y2Z1aFJRRXlrZEZ4QVJmUUxiMnN4VE5yQ2FrU1JBazMtUWhBX044TlZYaUUtVUFrSE8xMGFlLS12eVFzMG5nenJRa0hyLXNMMHZHSUdsdlpNSjg2ZEpFNzVycllEV2lSYlNmUEMxdDFuYlg?oc=5",
      "publisherUrl": "https://insidelombok.id",
      "source": "insidelombok",
      "summary": "sasar ntb afpi dorong literasi keuangan melalui pindar mengajar insidelombok",
      "id": "f6775705530cefed",
      "domain": "insidelombok.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-85e7442980af4e21",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Tanggapan perihal “Transaksi Top Up DANA Rp2 Juta di Tokopedia Gagal, CS Kredivo Hanya Memberikan Jawaban Bot yang Tidak Nyambung“ - Media Konsumen",
      "url": "https://news.google.com/rss/articles/CBMihAJBVV95cUxQRG05UnJsUXBnYnlHWlB1akV4eE9wcG5vaFBicGxRSWtKWTFfZWpfTmZBY1pzSkVVOVVvWE9wQkhGQVlNLU5BMmlwcmx6Nm5xMFZNS2QtSmF1MmFFSXJUR1FmNW9ETU13SENNb2FSM05fOGs0bjVTN3ozaGkyaTJvZGVlZmMtOHpPejdmVTUyTjI3NmlVdnFMUklzVEF4cmNZaHRBcVlPUFBjSVhqN0k3bEEyaFNHeVIxMXZLc1RUOEZKc2JFQXItcDR6dm9OZW9aNzg1d0N4eVY1eHFjdW4td1dtU3JlYzUwWEJVMzZtWm04M2RaZUNkV3otUlh4UFNTdE5ZUw?oc=5",
      "publisherUrl": "https://mediakonsumen.com",
      "source": "Media Konsumen",
      "summary": "tanggapan perihal transaksi top up dana rp2 juta di tokopedia gagal cs kredivo hanya memberikan jawaban bot yang tidak nyambung media konsumen",
      "id": "d64f42555a5cd470",
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
      "eventId": "auto-999fbd6e6eb84a6b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Terjerat Lingkaran Setan Digital: Judol + Pinjol 3 Tanda Anda Terjerat dan 4 Langkah Nyata untuk Keluar - Balijani.id",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNTTRzYVRrejhscmlaOU96bVVSZS1mVEhKUVFRRl9aWnNtXzRiVVRtRzU3Q09Fa3BWUjNwdWM2S01MRUtlN09Yek1ROHJNUkZfOUplT2cwa0xfX1NraFhYMVYyUE9IZzFXb1d3Mk5iTENHd2F5OW1GZWhFaGQ0TW5KbkJ3c3JFZEdyRWVNUEZVR1NabGoxcUxyODVJb1BWV1V0QXNaLWhPNVJadE12eGp2Q3R6QVJQY3dvaVlJZzAwSjNVVjBLQWV2WnVuVzk?oc=5",
      "publisherUrl": "https://balijani.id",
      "source": "Balijani.id",
      "summary": "terjerat lingkaran setan digital judol pinjol 3 tanda anda terjerat dan 4 langkah nyata untuk keluar balijani id",
      "id": "f90c1cd5dffca5a3",
      "domain": "balijani.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53e549a5b9352214",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-29",
      "title": "Tips Menggunakan Paylater Agar Keuangan Tetap Aman - SuaraGarut.ID",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9lUGZFd1BtMDI2ZmMwQVJvTV9qX200bGYxTi1XTWlzRXpQaE80bWw2ZThJVVhZT1duYU90ckFCc3ItcktTakNndVl6U1IwbUJGUDR2dDYtUDBGZ0JybzN0Z3RMZVpHaDBOX3lfVnp1cVg5am1z?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "SuaraGarut.ID",
      "summary": "tips menggunakan paylater agar keuangan tetap aman suaragarut id",
      "id": "a3db1b7f0ce9d8c5",
      "domain": "suaragarut.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0f72ffa02b39cd33",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "15.226 Entitas Ilegal Ditutup OJK Tasikmalaya, Masyarakat Diminta Waspadai Investasi Ilegal, Pinjol Ilegal dan Judol - Lintas Ide - lintaside.com",
      "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxQaFZqQXVRbG8xX1hwck9mVmpZQkVoUWQ1YVVNQzg4ZzZmd1l0aUVRZy1iOEJnRThvNkwxRGh3RVZBNERXTnMwM3EtaXJmRmtxaEhQeGNuUkxRYzFzMldOTDgzeHVTOTdVd0loZ0F6VDVzOXJFSUJQNzJPR3RiRHh1TjRCUlVHcE1acWR5cDZZdEdiNDJHQWhhR2RPcmJRS2YtSEVJSEJ5clh6bzlpVm1iU2ZicjY4WWlLOXpwVkd4bXR2MWNCRnFFNGxSYWNMTWN1T3hyamNsR2FwTzJmQnllVWZNb01YSmVUYU43amdHaFNFaWMyMnJYTGl30gH_AUFVX3lxTE1Jc0VpQmRfOXlreEpraVk5ZmdZWlZya3dYM2xuY2s5QkNzNENHVVo4Z0kxU0NKUHYwRkFRankySFB5aUJwMWxyVUNLa0F1R0tiY094LTdmQnU0bi1xbVRMZGJRaEdOa01xZlpUU19ZX05jQ3pqaU5jenNEcEl2TVNDbmYtYVhqTWlMaU9OMnpka1Q2dGlNYUJWRlJzWllkTzdQQ0xyckMtQkRuSkY5ekJ3MDNQV3c0QUlNaDdBTlZsbExxNlltVWpXY0ZXQzF6bENvaXUySzR0STI1V2lxaGVLZVZyWWdwWmt4bkhPY00xTmRla29zRVc3X2h3amNaQQ?oc=5",
      "publisherUrl": "https://www.lintaside.com",
      "source": "lintaside.com",
      "summary": "15 226 entitas ilegal ditutup ojk tasikmalaya masyarakat diminta waspadai investasi ilegal pinjol ilegal dan judol lintas ide lintaside com",
      "id": "ae7e68ddff03c443",
      "domain": "lintaside.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dc0db15ec129d5f2",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-30",
      "title": "Cegah Judi Online dan Pinjol, Propam Polsek Sukarame Periksa HP Personel - Tribratanews Polda Lampung",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQQ2VzU0tDOWppd2lnT2VOSS1kSnBLamhud1FneW1rS2JWNG0waWg5a1dncVVhbS1lNG1XV3E3NTExV09FbGMwelhaaWZQbEFta1dFNHBkd1VRTS1uQW5pTHN5ZUV1RzhwOEtoVzBIem9rM3IwMXBnYXhUdTNkTE5nYUFCS2loa3dNT0sxOFgwSTFzZjU2TXU4WG9yLVBoS1JyRWt6TldSTmxPMGRkbjN1a2g4UzAzMEZOWm55a3VfTHVRQQ?oc=5",
      "publisherUrl": "https://tribratanews.lampung.polri.go.id",
      "source": "Tribratanews Polda Lampung",
      "summary": "cegah judi online dan pinjol propam polsek sukarame periksa hp personel tribratanews polda lampung",
      "id": "5cdbeb7b26ad1f80",
      "domain": "tribratanews.lampung.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e20533073f7ae020",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Cegah Teror Pinjol Ilegal, Siswa Dilatih Teknik Self-Defense - Metrosulawesi",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPdlJld3d5c05aOE5yeWZNdThSNU53VF9pYm9QZnhNc05MS2hTcUNIUnBZRkpZR1JyN25xVGt2Sjk4Qkw4c0hFY0cwUC0tOEMwanJKdTl1ck8wcDdOazF0a29XbDI4Y0VUd1ZMZGZlMUFNdGFmTEpRSDNET0kwUWVLRXNZaU5TaFV4djRKZUN3?oc=5",
      "publisherUrl": "https://metrosulawesi.net",
      "source": "Metrosulawesi",
      "summary": "cegah teror pinjol ilegal siswa dilatih teknik self defense metrosulawesi",
      "id": "a58a84d05a2d373e",
      "domain": "metrosulawesi.net",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 78.0,
        "label": "negative",
        "negativeWeight": 4.5,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ea93840f7e169034",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-30",
      "title": "Foto : Mau Batalkan Pinjaman Kredivo? Ini yang Perlu Diketahui Sebelum Dana Cair Halaman 1 - Biz Kompas",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPc3JWNF94cFk4RUhLYVpRcGlrczBVR205WjhqWkM1X0NOMkRpWi11dVBiM0ZuSkJqWXRlQjhDSnNqLXFSM0lzOE9fcU9lNUw5QmtGd05nODVyOWw5QTJiZ01WSXNBUjZOeGFoV1dzd2VRclpFUFFxNGxoM1JKbkQ0N3U2am0zX2kwbG44TFo3MnBWQ1dCdWx3bTE3RktSQzdLTGJMTTJNeWVES3lubkxMM2FlUjg5eE1tWkZhb0xLX0hWRDNiWUNZQg?oc=5",
      "publisherUrl": "https://biz.kompas.com",
      "source": "Biz Kompas",
      "summary": "foto mau batalkan pinjaman kredivo ini yang perlu diketahui sebelum dana cair halaman 1 biz kompas",
      "id": "c8f3215ae4184f69",
      "domain": "biz.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c06574740a5fbf38",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Hati-Hati Pinjam Online, Tercekik Bunga Tinggi Hingga Diteror Debt Collector - radarmukomuko.disway.id - Radar Mukomuko",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOTUhaMVptN0Fqb3U0Um9uRF9OY1RIanlDbWJaaldYdWEyWXd2VkQ4ekdqMXVtWU9fcVB4S0pGNkxFeDFLdTM3alM1X2tlc2VaZFFsOE43R3NmbFVXcDJzVmdhUjhscVRfTjVaaElETXR3bmFFT1NXMUtXZzVNbzdNbmtqdFdDRWNSUzA1TzNQNVRKY1RUWGt5NWFGTldNOGZ2ZzVEVWVHZzZzZzNtNG1fYmx4c011ZnI4ODliTVFR0gG-AUFVX3lxTE5NSFoxWm03QWpvdTRSb25EX05jVEhqeUNtYlpqV1h1YTJZd3ZWRDh6R2oxdW1ZT19xUHhLSkY2TEV4MUt1MzdqUzVfa2VzZVpkUWw4TjdHc2ZsVVdwMnNWZ2FSOGxxVF9ONVpoSURNdHduYUVPU1cxS1dnNU1vN01ua2p0V0NFY1JTMDVPM1A1VEpjVFRYa3k1YUZOV004ZnZnNURVZUdnNnNnM200bV9ibHhzTXVmcjg4OWJNUVE?oc=5",
      "publisherUrl": "https://radarmukomuko.disway.id",
      "source": "Radar Mukomuko",
      "summary": "hati hati pinjam online tercekik bunga tinggi hingga diteror debt collector radarmukomuko disway id radar mukomuko",
      "id": "84c1446a7725989c",
      "domain": "radarmukomuko.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 7.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a9ae45d07de349ba",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-30",
      "title": "Jangan Asal Uninstall, Ini Pentingnya Hapus Akun Kredivo lewat CS - ototekno.okezone.com",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOVmNiYVM0LUdJd285WkRxeVVzaVdLTGFpS0wzNUFLQ0RNYWxQLXV2dXBENy1na01yU00yanM4eEROejA3azRQbkE0UFZGTUJWQnBBakRSN0ZvNnZzSGV3TVJpaGpqSFdlWkxlb3FJSEN0TS11UVZKa1h5X2V6VElCdkhxWU03T1Fmd1dSdzcwSU1IOUM4LUEwbzR4d3BqN3hsbk1XUUtDUTZ1UFdjbUt5NlVMTWcyOC1FVXBj0gG7AUFVX3lxTE5WY2JhUzQtR0l3bzlaRHF5VXNpV0tMYWlLTDM1QUtDRE1hbFAtdXZ1cEQ3LWdrTXJTTTJqczh4RE56MDdrNFBuQTRQVkZNQlZCcEFqRFI3Rm82dnNIZXdNUmloampIV2VaTGVvcUlIQ3RNLXVRVkprWHlfZXpUSUJ2SHFZTTdPUWZ3V1J3NzBJTUg5QzgtQTBvNHh3cGo3eGxuTVdRS0NRNnVQV2NtS3k2VUxNZzI4LUVVcGM?oc=5",
      "publisherUrl": "https://ototekno.okezone.com",
      "source": "ototekno.okezone.com",
      "summary": "jangan asal uninstall ini pentingnya hapus akun kredivo lewat cs ototekno okezone com",
      "id": "0d615597677e323c",
      "domain": "ototekno.okezone.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cd27970ff280ef13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Jangan Hapus Aplikasi Kredivo Tanpa Tutup Akun Resmi - Sumbawanews",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNM0cxdklzY240OElROGpsek1sVDhObmdqMVhjd3ZfSWczODdrcnpSOER5OGlNVVdpc3otcDRENnBQd1V0WndpN1ZrOExScVhrS2hOMW1qbVhJR1lMLW40RTB0dFBhLXROdEE4SEtBUXE4S0RIakVfMndDdHJaMk9RWU9xTl9MZlNIM1Z2N2xHRnBJT1B6MUE?oc=5",
      "publisherUrl": "https://sumbawanews.com",
      "source": "Sumbawanews",
      "summary": "jangan hapus aplikasi kredivo tanpa tutup akun resmi sumbawanews",
      "id": "bb332244984fc023",
      "domain": "sumbawanews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-af41b018c819b0da",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Lakukan Cara Ini Agar Pengajuan Penutupan Akun Kredivo Langsung Diproses - beritajatim.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObXlGNkc0YXZyZ2NZWHdlUUFFR196Wi1mLXp4Ni1aYTl4M1FJLWVPbjZHbHNkaW9VcjFUXzYzRm5aNjdTTGR0ZFdvTFpPUm5LZG8xaVUtOTlRclNSRTVBbVRZQlluR1RfSTlLU3A3LVAxRWZ6aGhMUEF6R29jSmNVbzdHcURmUkxaN3hZVWZrTG9FdHNoOE5HRTE5c0o?oc=5",
      "publisherUrl": "https://beritajatim.com",
      "source": "beritajatim.com",
      "summary": "lakukan cara ini agar pengajuan penutupan akun kredivo langsung diproses beritajatim com",
      "id": "d8a7d68a1822e828",
      "domain": "beritajatim.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-229deabcceda90d1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Catat Penyaluran Pembiayaan Pindar ke UMKM Capai Rp35,14 Triliun - suaralandak.co.id",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE91UkxQVEFIUjFZMzVnMFJtS09raHFzX0dOaWkwNkNzOVBYanpKWEM2N3lzcTdKU2RPcFFSbkJYYTZVM3BvVk5fM2VXcXNiaEdsTjJnT2o1aTlXVWliUGpFdEVTamYyX05OYnVPVURkaFZOOWR3cVE?oc=5",
      "publisherUrl": "https://www.suaralandak.co.id",
      "source": "suaralandak.co.id",
      "summary": "ojk catat penyaluran pembiayaan pindar ke umkm capai rp35 14 triliun suaralandak co id",
      "id": "6d7ade1ca5e4540c",
      "domain": "suaralandak.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d828679f7466eaf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Catat Penyaluran Pindar Mencapai Rp105,14 Triliun, Porsi ke UMKM Senilai Rp33,41 Triliun - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOcmYxSEhQZVFLbEk5MUZpQjRoaTVGZzhjXzlSNXFYZS1CWUNNUjBvWHBBMWZhcWYwTmpZQ1BJVS1KX2RudmNrREotVG1ONGEtQmdXVWlZb2VPZ0taQTRIUkpWSU5TbllvREhwMERwbHg1UHB6U1paNUpSVkZvdU5RcmRrV0w3dkhta09qZUtFeGRPWU1PRkJuLUY4ZkhSdTAxYlA2Zm1qUmlDTmU4QTNSMjFWZjBfVkJUcUVHSHNKZ1I5ZzRURXVJQU5YVQ?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "ojk catat penyaluran pindar mencapai rp105 14 triliun porsi ke umkm senilai rp33 41 triliun tribunnews com",
      "id": "ccda489e995d62d3",
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
      "eventId": "auto-b663227cf7208646",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Sebut Pembiayaan Pindar ke Sektor UMKM Terus Naik - JournalArta",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOc3pZMDdVdDVUYlBJU201OXE2RnJPb2xNNElNZHJwaHpaNV8xdzk0ZDdYRmdfbVdCSlJJQzJnMmp0LXpwLTV4Mjc2c2IxVTdvR2tmNWljS2RoYmhYeld1NXdfUUxhY05OWEVLalE3YTFSenhHcXdQQXZPd2J0U25JVGxQMTJTZG5oblN3VXoteTZYZUZEQzZEUmt3?oc=5",
      "publisherUrl": "https://journalarta.com",
      "source": "JournalArta",
      "summary": "ojk sebut pembiayaan pindar ke sektor umkm terus naik journalarta",
      "id": "2e70f3b9b50ac00a",
      "domain": "journalarta.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-494615377835d735",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Sebut Pembiayaan Pindar ke Sektor UMKM Terus Naik - kumparan.com - Kumparan.com",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNLTZTRnNTaU5xWlNBNE1EWmdtWFc1TjFYWnl5TkR0YkhybzZ1amlnUEx3elVfaHVidW9UMlp6RVVnWlMzOXRQSnVabE8tUERPOU1OcjBuMldNaFU1cTY0VXAzbjJVejFaNUZ4YWxrVHpxTDAyWVNXNklUZ1MzSERVNVhtTW1ySmpBTU5ncG9FRGhqbjI0NG5ZUVJUX0NER292aUdr0gGrAUFVX3lxTFBoMTNkRk1zMmI3SDQybGJBQnpEWDNOd24taE11ZzlfOXJLY0F2WnlJbjZpZ3NDNlRKeEVmU1h1QzA1b1I0T252aF9Oc0ozYWVoVHJQQWZ3X1pnREF4WEM5YkFWV2MxcDA5aWtKb1FyS05KbzBMcE8xZm5ZUU1RV3pOaThVdHdzQTZPX01ZOXRITVYzZEJ6STdGYkdPUEQ1SzNJX3dmaDk3cWJYOA?oc=5",
      "publisherUrl": "https://kumparan.com",
      "source": "Kumparan.com",
      "summary": "ojk sebut pembiayaan pindar ke sektor umkm terus naik kumparan com kumparan com",
      "id": "b60ad909e1acb86e",
      "domain": "kumparan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-494615377835d735",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Sebut Pinjol Tak Bisa Lepas dari Penagihan - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOdUI0aktjdEpFSlZIWW9pMmJ2ZzlVazRYd3JzbWZ4XzBKVnUyT3NnOUE2TnZfeUo3V0UwdUlMU09neFgzYkE5a3lQdndReUNFLXRPRDVvQ3duTXB0ZVBOU1hPZ0JBeEdmaTVZNWw1RXg2V0hEVzBXWXJkcmpjdHRQRmRIYkpqM3Jod0RGRUtESWxLX3M?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "ojk sebut pinjol tak bisa lepas dari penagihan beritasatu com",
      "id": "d0d5e7b1d9d5e7ed",
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
      "eventId": "auto-c18bf0c1f38e9607",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Soroti Peningkatan Risiko Kredit Pinjaman Daring - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOa0pVLXVVTTFMekJMV1FEaGJqZkg1a0ZrWlpRbnA0VktTbDZDb3JsSUl2MlhjWF8wUjZTUk1SQmEtOWR1SzlmQ0tUem50dTUxZE5qUXp1R2hIMlRwdGxVX1pjUkZNSkhNM2dPLWthQkFaZGhZWjJ1LVhYR1M2N1c4WjhwTjJyUVE?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk soroti peningkatan risiko kredit pinjaman daring achmadnurhidayat id",
      "id": "0e14ec1d783375ba",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4e5ae069e3b74ff2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Soroti Risiko dan Pertumbuhan Industri Pinjaman Daring di Indonesia - Readers.id",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9iZUVIMjRDQ3NSVDVwWGZJaWNocHNjSl9nNTk3eElDRTBwTGI2cl91VkR1RmJ4eFJCSzVkZElxaUlXenlqaWJlNElpV21yc2NIYldDMEd4el82WXl6OFB5dzV3QmVVMXQwWEI0UDFibERhejRJQVYw?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "Readers.id",
      "summary": "ojk soroti risiko dan pertumbuhan industri pinjaman daring di indonesia readers id",
      "id": "9cd7660cbb4cc032",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 41.6,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2eac2bb83577e5c8",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-30",
      "title": "OJK Tasikmalaya Edukasi Masyarakat Ciamis Waspada Pinjol dan Investasi Ilegal - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQbnNYZ3c5SklOVEFYTnZmcF9ncF9nQndRSmhFamZPTHY1S1pZaFFWX0VKNDJCVExtWFJSYWN2ZWVkck9qQVJ1alBHOXZoVmtUQk5wUkt4ZkY2UGFGU2V6T1BpOFN0ZFNlY2t4amZQb1JUQ2hjM2JZTTA2WTU0aWFQS0dpVV9TWW5FaGFyRGlMemxoclJnSUcxUXl0QXlQS0pURWgybFF1WUViWXFlcmRVRmJVSWxRTTZuVmV5dHZGME12MmJZWWZ3?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk tasikmalaya edukasi masyarakat ciamis waspada pinjol dan investasi ilegal rri co id",
      "id": "2cef9f8e778efa31",
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
      "eventId": "auto-760ac408c4ff4bd7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Tasikmalaya Ingatkan Warga Ciamis Waspadai Pinjol dan Investasi Ilegal - Pikiran Rakyat Garut - Pikiran Rakyat Garut",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQQzdjTm1rTGtZMWtmQVlCNjZfNzN6bGNyUE0tQmlIbEZfMnZsNG9HRDdFWExqMzVrLTNHdHlGMUx5Wjc3SkJWV1lDQUhJUGY0UGZRcjZ0ejlGWGlvbkg0N3AyZUlIcnpOMmkycnBxaXFmdlk3U0RBM0lSYm5mdVhWNy1EdzI1RE11QnVKaC1acWViMUNLZXV6XzRkOE9faGU5cXNmbF9PcWpJLVExbUhkMUdJbnlPOHBrd0xaRE9JWkJFU0hiSGY4VkZCaEjSAdIBQVVfeXFMUG9aU3hkemJnUmxRN252VXFVbzlaSUZaTlZBSDZ1WHFpdmZwckpRZEtTXzAyeklta1pWRFFtQ3BjX0t4NEF4VDlZUHR1dm9mZzFVODk1WnA1b3FHbDNNQ2xVSHlMcTRGNGFCNkVIN2ZucmtDMUFQbXpvOHkyY3R5a0x2N2VQMDJDVHhoT2doUkQ1R3NQQkZaZWx4WDRZLVR4X3NWSi1MSG4zeUJ0WTBzR05vaGJMdDJuUlVELThZZTE0V1BEQmt3MjVLeVVBXzJfenNB?oc=5",
      "publisherUrl": "https://garut.pikiran-rakyat.com",
      "source": "Pikiran Rakyat Garut",
      "summary": "ojk tasikmalaya ingatkan warga ciamis waspadai pinjol dan investasi ilegal pikiran rakyat garut pikiran rakyat garut",
      "id": "35b03a1dfaaeb613",
      "domain": "garut.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fa2e31d2f6b7f117",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "OJK Tasikmalaya Minta Warga Ciamis Waspada Pinjol Ilegal dan Judol - Harapan Rakyat",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPRW1QZmJGclFiT2NtaFhSbV9uX2JJRXMtd21OX2hTbERoLU1MNm01cTI0Q3VpZ0t3VHFvTDdieFFVLUVGdl80ZVhTaF9pWnR6U09jbUlpVGtUOU5BY01kUDFLNXJqWG1reDJ5LVl2YmdOZDBkZWl4RjRGTUZYYU53QmhObGQ1NG92UVN1RkpEZmZNcndDd1BHVmE4cXR4ZXMyZEpzNTI4ZHk?oc=5",
      "publisherUrl": "https://www.harapanrakyat.com",
      "source": "Harapan Rakyat",
      "summary": "ojk tasikmalaya minta warga ciamis waspada pinjol ilegal dan judol harapan rakyat",
      "id": "83e395b3255f0dd7",
      "domain": "harapanrakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6775055a0df0427f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-30",
      "title": "Perkara Pegadaian, Uang Pelunasan Nasabah Digunakan Bayar Pinjol - Detak Kaltim",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQUlgwR1N4WVVvd2t4MnpUN290STNuSHhWdWpYUWtpUWVFS0NXN2tjUEFWX2Q3amZqRVBpNDJBNWJsV3NabEVnUVBlZ2c0WldpUnVncUVxRF9FU2tRVUdJdXdDeFRRbUJiaWRPU0VCVVVhbWd0UDZHOS1uRzFFaEt0Z2VGSXJLeFU4dmRZTDJVVXpxM2tseC1FVHVYc29wYm1zeFk1dWFqVUpUMDdqOVE?oc=5",
      "publisherUrl": "https://detakkaltim.com",
      "source": "Detak Kaltim",
      "summary": "perkara pegadaian uang pelunasan nasabah digunakan bayar pinjol detak kaltim",
      "id": "e116d01d0f1b73e4",
      "domain": "detakkaltim.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fa761759aa4818ae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Pinjol, Disayang Lalu Dibenci - investor.id",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFByNG1FYkpXZzFQZ05tRWdCSnRmMEJpSHREdjZfcUtCZkRsdlM5QTB1OXIwZVFqeVNjcUh5VnJfV0xoR2Z1Qk5PcnN5blNCVUZ2NUg0dmQwVF9fZENoMnRKM2Frdm0teWhNSXNBUm0tcTg?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "pinjol disayang lalu dibenci investor id",
      "id": "7691110573b17a2a",
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
      "eventId": "auto-910e7ede45fb7b90",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Pinjol, Industri yang Disayang tetapi Juga Dibenci - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPWHd3XzNTUHQzblhVYTRHZU1NY1BFTElhWDhsSElpTlJRcEc2RjJWTEVhQ0EtclY2Wng5UEg4b2J1Nm55eFFfcGRvN3N3ZmpkaEVid0RXR29tTVRLTnZIaS1FTzNlMmN4aUx5ZUlzUkk0bDA2ZUkwXzlvY040dE1qTzkybmVXWVlWd1plZGd6WVNHYklXVXVn?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "pinjol industri yang disayang tetapi juga dibenci beritasatu com",
      "id": "64a58494c933ac37",
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
      "eventId": "auto-499f11b29fbe34f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Polda Lampung Minta Orang Tua Bentengi Anak dari Bahaya Pinjol hingga Aksi Demo Ricuh - KAPOL.ID",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNRzBUbDVzdzJ4bVM5R3g1SDgyQm10aXBLRWxnN3VEZVQzbGg1YWFPZFl4MFczc04wbHZDZEZ3YjFzeWNXcjlRZ012TGJSVkZPaTVWN2RYQ3dfYUt5WE91WmVuMFZIQk5nellxYXNOczRMdjdVVzdnMTMwYVRpU3VEeHByZHVPb3pHOWtPRFFLMXQtMWdreDZuNHFMYjh0aFNVUE90WFFn?oc=5",
      "publisherUrl": "https://kapol.id",
      "source": "KAPOL.ID",
      "summary": "polda lampung minta orang tua bentengi anak dari bahaya pinjol hingga aksi demo ricuh kapol id",
      "id": "3c65673c3c9d0b4a",
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
      "eventId": "auto-0bf4c59ce8ec5e7f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Terjerat Lingkaran Setan Digital: Judol + Pinjol, Ini 3 Tandanya dan 4 Cara Keluarnya - Gerbang Patriot",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPQmpwdnhaT29SX0dLWWQ1d1UzaktnbkxHZFlvX1dkSXBNUFl0aVB5ZVVhZXIyTHdSNEdSeTNxckpkV0FUa19zTnJ3SGowdThWbkF2a0wxWDJjcnRCOUlad2U1MWN0WndISjhZSHlYN3REcVNhRHc2ejVyRHkxVXJ4ZWc1OHJMY0hLcnYydUdEWkIwNm1qdTJNbHlrVDJ3c05KTlFsUjRuOWhvNFZIamVJdXJ6VXNXclNBSzlYMQ?oc=5",
      "publisherUrl": "https://gerbangpatriot.com",
      "source": "Gerbang Patriot",
      "summary": "terjerat lingkaran setan digital judol pinjol ini 3 tandanya dan 4 cara keluarnya gerbang patriot",
      "id": "5ac441b747df5b83",
      "domain": "gerbangpatriot.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d8063ee5b0486fb7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-30",
      "title": "Waspada Jerat Pinjol Ilegal dan Judol, OJK Tasikmalaya Edukasi Warga Ciamis - inilahtasik.com",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPU25fcExVOUU3RHFEQXVDcVZzeHNBd3l5R1E2QnBqbHhvYWFoZzFXNGJiT19NRmNlTjZ6aExYckJvWjVBeFZyVEJOTmY4Ri04Z29FUHpKc1hHVlZSQUwwc1FpeGtaZ2JodjNhZ2pENTN3ejVtdVJWRGFRRGEyQ0c1QWk4aWxPVk1fc3dlcHZaRC1JemtYR0ZWWUxYOS1iZjhI?oc=5",
      "publisherUrl": "https://inilahtasik.com",
      "source": "inilahtasik.com",
      "summary": "waspada jerat pinjol ilegal dan judol ojk tasikmalaya edukasi warga ciamis inilahtasik com",
      "id": "56428c45a24926d0",
      "domain": "inilahtasik.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3fe5e57b364eebc8",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-31",
      "title": "Cara Gampang Hapus Akun Kredivo bagi Akun Starter, Basic, dan Premium - Sonora.id",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPUE1yYVdTdG1tcW1Kd0FsQW9MM3Fxb1hJZ3F2LXpycXdYWnE5TWhLSUtJNnlnaUxhSXVwZ09pUER0aWVZWUU1WGl2RHJNajRoTHF5S1prU1NYZ2l2TGxDMnhyQmlRbkRXVnVPTU9XSGptTVRVVGhVdHUxWnVvM3V4TVZGb21aazdYRWpjUnJnYWpKX0xVUVBteEdXYXRSYl9GTUluYUJB?oc=5",
      "publisherUrl": "https://www.sonora.id",
      "source": "Sonora.id",
      "summary": "cara gampang hapus akun kredivo bagi akun starter basic dan premium sonora id",
      "id": "38a8b63d6a78e498",
      "domain": "sonora.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee1935760470e521",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-31",
      "title": "Ini Cara Melakukan Pembatalan Pengajuan Kredivo untuk Belanja Online - Biz Kompas",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQeVgway1xTEV1Rnd6SmN3aVA5Ung5SFZvRUh6MTFfeWJ3SmNjUVhLOG1qQnllNjVRdGFuaXNYd2pNeWZxUEt6RTlLWl8yczNaWTBFN0l4cjhxRk5kTngxejlWaDhZRmh1WnZWQ2JOcmU3eDdPZWhHZGM3OE5BOGlETFBnVFRwRURvNHJJQU8zenFUdUFIX09Fajk3TndFVW14WFAxRnBHUV9hZFZpbV9Pb0oxaktNX01G?oc=5",
      "publisherUrl": "https://biz.kompas.com",
      "source": "Biz Kompas",
      "summary": "ini cara melakukan pembatalan pengajuan kredivo untuk belanja online biz kompas",
      "id": "61222fcb39b160c2",
      "domain": "biz.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c9a1cc6bfb594c61",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-31",
      "title": "OJK Tasikmalaya Edukasi Warga Ciamis Waspada Pinjol Ilegal, Investasi Bodong dan Judol - NewsTasikmalaya",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNV1BWcmNiUzM2YVF5UHRLYTB4U191Q0NQcm9fUmtUU2Y0X29UVy0xcF9tZUhpcTF2X3FySER1WTBuTlpIaDdiZmM5aWNrVi1aRllBaVRoOWFybmR0NU90aTdEMzdlMFlZaVg2dGVmcnhOdHYyQWpFV25nNjZHODd4czFWRU5nU1JhSGltQ0ZudE5JLUpNTHVyLU9SUGg2Y0EyZnRYbGtFcUNKSjZtcHl6MS1MTQ?oc=5",
      "publisherUrl": "https://newstasikmalaya.com",
      "source": "NewsTasikmalaya",
      "summary": "ojk tasikmalaya edukasi warga ciamis waspada pinjol ilegal investasi bodong dan judol newstasikmalaya",
      "id": "b5c185f047ab3194",
      "domain": "newstasikmalaya.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f4479ba497c45855",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-31",
      "title": "OJK Tasikmalaya Ingatkan Warga Ciamis Jangan Tergiur Pinjol dan Investasi Ilegal - Radartasik.id",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPRnN3Nk50OEx1OC1icm11cWlwUy0xU2dhbWI5Wk0xNkpYRFdzaEFSNUZiT0pFSTVqUGh1dG4xM3ZCZGtuVElTTkpvRl8xOUVWSXVXTnh6b3ZRbUVuWGRYTEdTMEFnMTdqekpZR0lEdkhudDNxMXFtMHRZMTlRRnNMN2ZPOEdaS2JmZzJRY1VKQUJtSXV5WE1Ob0hTZk9FM3NVVzVHU3NMck5HT0xONzdSNElvYVk?oc=5",
      "publisherUrl": "https://radartasik.id",
      "source": "Radartasik.id",
      "summary": "ojk tasikmalaya ingatkan warga ciamis jangan tergiur pinjol dan investasi ilegal radartasik id",
      "id": "62b4ea921dace073",
      "domain": "radartasik.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2042a88bc3fb41e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    }
  ],
  "socialItems": [
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "7b7ETun8QG8",
      "date": "2026-08-17",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 38234,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "0156e9967404bdd2",
      "eventId": "auto-7770eb8e8f7c4eef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyiriEan38bm06C6Rx4AaABAg",
      "date": "2026-08-17",
      "text": "Bismillah buat servis motor buat kerja besok",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "2db130b5d5a80211",
      "eventId": "auto-97f6bac0a5559e50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUDt6We1lZNlLojmF4AaABAg",
      "date": "2026-08-17",
      "text": "Bismillah semoga dapat buat, kebutuhan sehari hari",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "6c2fe62e62afedca",
      "eventId": "auto-3f8d80ead3d86716",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw-y4VvbiRaaD-guQR4AaABAg",
      "date": "2026-08-17",
      "text": "Bissmillah berkah barokah bang semoga terus berkembang  chenell nya..",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4115514b8518493a",
      "eventId": "auto-fb881e2a27b11a1c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_AK1P49INiCsgprB4AaABAg",
      "date": "2026-08-17",
      "text": "Hadirr lg bang spa tahu beruntung..buat bayar kontrakan",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "27317773e6e1be7e",
      "eventId": "auto-d2b6a89a9cf57548",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyf4fQlGA_O0KHfXYx4AaABAg",
      "date": "2026-08-17",
      "text": "Mantaabbbb ....maksih Abang....🙏💪🇮🇩",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 1,
      "id": "f81c7334fc74cf82",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7f4600c046ae54c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "LTXI5rPskV8",
      "date": "2026-08-17",
      "text": "SERU.!! SEMUA YANG GALBAY PINJOL LEGAL AKULAKU KREDIVO SHOPEE JULO UATAS DLL,LIHAT INI..",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 21939,
      "id": "c16f70df71cbd483",
      "sentiment": {
        "risk": 61.2,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-da16dca85fda7daf",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzbY_cOEABy7mmGh214AaABAg",
      "date": "2026-08-17",
      "text": "Sehat selalu bang, tetap beri edukasi yang berharga.",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 2,
      "id": "9785b4e27929d0da",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35e0a012e4e239af",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwmEeOKfy8NTDibsz54AaABAg",
      "date": "2026-08-17",
      "text": "Semoga dapat amin sehat\" selalu abng ku❤",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "66465eb7bd57c156",
      "eventId": "auto-e4f960aa14ac7ead",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxD1STryRQrd1bvUNZ4AaABAg",
      "date": "2026-08-17",
      "text": "Setuju Bang..🙏🙏",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 2,
      "id": "ef3b5cba1f0fb853",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ca46b6c07d528eae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "zLRj1E4T7Fg",
      "date": "2026-08-17",
      "text": "Teror Pinjol, Efek Domino Jerat Utang",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 68058,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 74.5
      },
      "id": "b6a474139a4d292a",
      "eventId": "auto-854c98b79986e94a",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytPNm8bP_d-DMQM_l4AaABAg",
      "date": "2026-08-17",
      "text": "Yang diuntungkan hanya pemodal dan petinggi",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 95,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "1893ffa11393f95f",
      "eventId": "auto-e163cf86e2491e92",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyg5K8m1h_6MHFBJeJ4AaABAg",
      "date": "2026-08-17",
      "text": "bismillah buat jajan anak SM beli sendal anak..mudah\"an Allah denger doa sayaa lewat jalur Abang",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 4,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "1ddf15004bbdf6a5",
      "eventId": "auto-63f4acb706479ab0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxa_xVZN8IK66vM8_94AaABAg",
      "date": "2026-08-17",
      "text": "bismillah semoga di murahkan rezekinya di beri kesahatan semua keluarga dan semua yang nonton ❤❤",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "f222b93b219a5762",
      "eventId": "auto-fc484dfe691e6f69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjfzjEnBeWKh8oWLl4AaABAg",
      "date": "2026-08-18",
      "text": "Aku kalau udh di keluarin dari kk langsung minta maaf ke semua keluarga 😭😭😭😭😭",
      "url": "https://www.youtube.com/watch?v=RL-7UBhyRNk",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "52869ff1599c9c6c",
      "eventId": "auto-d426997a159f85ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxWw0vjzh_LIO2LpDZ4AaABAg",
      "date": "2026-08-18",
      "text": "Bahkan nasabah mau bayar pokoknya saja tdk ditanggapi..sengaja di biarkan berhari supaya bunganya nambah..sungguh smg para DC memberi makan keluarga dari meneror nasabah.",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 50.0
      },
      "id": "f281c291e71467eb",
      "eventId": "auto-d57e66cb97f1609a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz3nEhTWtHgOYJi2OB4AaABAg",
      "date": "2026-08-18",
      "text": "Bismillah buat bantu tetangga yang listriknya di putus",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "ba44258d1e419056",
      "eventId": "auto-79810edf363968b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxPanyXmAl_QO0ctoB4AaABAg",
      "date": "2026-08-18",
      "text": "Bismillah lah.semoga rezekinya berbagi BG🤲",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "b5995ae425b13df0",
      "eventId": "auto-754aef46ecfbac26",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw_2kO8S0GnC_WFPh14AaABAg",
      "date": "2026-08-18",
      "text": "Bismillah semoga dapat. \nBerkah selalu kk 🤲 \nBuat kebutuhan anak.",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "f69d1095d275c0ca",
      "eventId": "auto-90502987b760353e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgydphIq7ddTSAuNpIN4AaABAg",
      "date": "2026-08-18",
      "text": "Bismillah, bang semoga rezekinya lancar dan sehat selalu, mudah2an ada rezeki saya disini untuk lunasin biaya sekolah anak",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 43.0
      },
      "id": "bad8251cef6ccd1d",
      "eventId": "auto-1e23d3c1f2cdb420",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDTl9eHv5xKC66_yJ4AaABAg",
      "date": "2026-08-18",
      "text": "Hayo loh di keluarin dari kk",
      "url": "https://www.youtube.com/watch?v=RL-7UBhyRNk",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "0d39a3feb1513668",
      "eventId": "auto-a8a5b3c4328b05c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnE2YlUp4oPzmFfj54AaABAg",
      "date": "2026-08-18",
      "text": "Intinya,kalau punya duit bayar,kalau gak mampu galbay in aja,.\n\nPemerintah buta dengan masalah pinjol ini.karena mereka ikut maen,,duitnya di supply terus,dari investor para mafia",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 11,
      "id": "4f85db4f535986db",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-66b12b831a529544",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyPW6ntyEzNATfuJZh4AaABAg",
      "date": "2026-08-18",
      "text": "Mudah\" n 17 agustus ini dapet dana merdeka ya bang ,bismillahh 😊",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4fc7e3bb3369f4f6",
      "eventId": "auto-59bd26c1d841f33c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzb-zblsrsMcx7qVfd4AaABAg",
      "date": "2026-08-18",
      "text": "Pemerintah harus lihat ini... semoga pinjol legal ilegal ditutup",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 65,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 60.5
      },
      "id": "c2bf918b2aaf6d52",
      "eventId": "auto-8e3d016ea100b9b9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwupAcQ2aGZfSD1MV54AaABAg",
      "date": "2026-08-18",
      "text": "Sakali beneran langsung nangis kaya gw🗿",
      "url": "https://www.youtube.com/watch?v=RL-7UBhyRNk",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "d8ece1940a1a5f70",
      "eventId": "auto-15ec5962d13ce31e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEUkICWUO9OXZFr2R4AaABAg",
      "date": "2026-08-18",
      "text": "Selalu menyimak bang",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 6,
      "id": "c83d1d778fd3b133",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dd23feb52b31b51a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyRnDoBggtYPygb3rB4AaABAg",
      "date": "2026-08-18",
      "text": "Semoga terpilih amin buat biaya kuliah",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "c4e291c5f4212104",
      "eventId": "auto-0ec7c35cb88571dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzvp0CkyczjPXYg15h4AaABAg",
      "date": "2026-08-18",
      "text": "Setuju Bang sehat selalu ya utk mengedukasi pinjol. 🙏",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 2,
      "id": "592e4cad225557d8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8792b9ccf4dd1761",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCqLOoiOh6Yv2Ihh14AaABAg",
      "date": "2026-08-18",
      "text": "Setuju banget bang",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 1,
      "id": "dfd6151df1318a3d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d649fa914a65ed00",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwz32PFP43-pl_FZ2F4AaABAg",
      "date": "2026-08-18",
      "text": "di maki ? di ancam ? screenshot, sekalian jangan di bayar",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 66.1
      },
      "id": "7d34bafc42848201",
      "eventId": "auto-0bc703e40f3ba1c2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxiF0fKRjEX-y86fgF4AaABAg",
      "date": "2026-08-18",
      "text": "semoga beruntung bang, buat sewa motor untuk ojol. aamiin",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "447266cb61d00cff",
      "eventId": "auto-4f6bc9ffaa6d14cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxw0jD3jbmBf1vemRt4AaABAg",
      "date": "2026-08-18",
      "text": "yang setuju ditutup semua pinjol",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 314,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "1b85131a649bc29b",
      "eventId": "auto-d2f7a27de5f0ab2e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgypMPIwQz3XHVFqBGZ4AaABAg",
      "date": "2026-08-19",
      "text": "Bang maaf mau tanya.. uang me aplikasi resmi ap ilegal??",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 3,
      "id": "5b0b5d14cd6b8e49",
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4ecf356810253f39",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3Y437-7XMErOb_LR4AaABAg",
      "date": "2026-08-19",
      "text": "Bener bngt pernah dimaki maki,tak tanyain dari appk apa malah ngelak mulu",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 4,
      "id": "816bc836087d7f0b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-16d1a88c6983afa2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVXhW6DItpy8_lcSF4AaABAg",
      "date": "2026-08-19",
      "text": "Bilang 99 apl bang...😂😂😂",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 1,
      "id": "d4295c691b23bf67",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1512bef9ad8b2f3a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy7cXG2ub2l7tR00LR4AaABAg",
      "date": "2026-08-19",
      "text": "Bismillah kebutuhan keluarga muda mudahan berkah barokah sukses dan sehat selalu bang",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "2f984819ce4044dc",
      "eventId": "auto-355de180923cad45",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxO47h2mmDu3tPnyCF4AaABAg",
      "date": "2026-08-19",
      "text": "Bismillah semoga dapat giveaway buat biaya kuliah,,, amin ya Allah 🤲",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "58261ec77266bd29",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-13bb233837e3526f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxq0aZk29HF8-2LEqN4AaABAg",
      "date": "2026-08-19",
      "text": "Bismillah semoga dapet buat biaya kuliah😢",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "5ac71e2db59a0032",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7319d7aa5be94dc5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzcrT4gkMmBGBtt0LF4AaABAg",
      "date": "2026-08-19",
      "text": "Cakep",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 1,
      "id": "3a109bbf8980c001",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d2fdafc48e9446c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "LN56yH6rz8A",
      "date": "2026-08-19",
      "text": "DEMI GENGSI KELILIT PINJOL⁉️😬@RbrainProject",
      "url": "https://www.youtube.com/watch?v=LN56yH6rz8A",
      "engagement": 45303,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "714f4d92be9f3a50",
      "eventId": "auto-e748d7ed059f9f0f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzYGqzILoBP3HcKGHd4AaABAg",
      "date": "2026-08-19",
      "text": "Hadir bang mudah mudahn dapat buat nyabutin gigi anak 🙏",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 1,
      "id": "ac777f676cc247eb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-63fddcec60a08b1c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwJEdMOoYkKSmXg_v54AaABAg",
      "date": "2026-08-19",
      "text": "Hadir sukses mase🎉",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "7c7ddeca8c33247a",
      "eventId": "auto-c30faf4353d928ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzhaO6Tok95vdJUVTB4AaABAg",
      "date": "2026-08-19",
      "text": "Harus lebih banyak di viralkan lewat media begini agar pemerintah segera menutup pinjol ini.Berkah buat negri ini.",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 36,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "04d6aeeb2ca571ce",
      "eventId": "auto-c7ad31eabeec5a62",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzC0S39Z-zZ66ib6qB4AaABAg",
      "date": "2026-08-19",
      "text": "Harusnya dc ini ditangkap penjarakan jgn malah diberi ruang",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 8,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "820b188c8935e05d",
      "eventId": "auto-5f9aced71d3b5913",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwuGRr7ZTbdx0mbu4l4AaABAg",
      "date": "2026-08-19",
      "text": "Miris negara ini banyak hutang malah rakyat nya ikut ikutan ngutang.... Sungguh ironis!!!!!",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 38,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 64.0
      },
      "id": "37bc9e98ac342608",
      "eventId": "auto-f2e158053139f4f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8fxwQfXCEN8LLk9t4AaABAg",
      "date": "2026-08-19",
      "text": "Pada saat kesulitan bayar bukannya dikasih keringanan tapi malah di ancam diteror oleh DC dan FC sehingga pada gali lobang tutup lobang.rumah mobil digadai atau bahkan dijual buat bayar pinjol semakin menumpuk.",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 95.0
      },
      "id": "d28ee9f147867326",
      "eventId": "auto-82e0e895604b421e",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgynCbfhZH8IX5PPAzd4AaABAg",
      "date": "2026-08-19",
      "text": "Sehat selalu orang baik, karena dengan berbagi tidak akan menjadi miskin",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 5,
      "id": "ca5d57b8ab221975",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fbb90dcfe42c0aa4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzjVdx_V9eiomfbIMV4AaABAg",
      "date": "2026-08-19",
      "text": "Semangat bg somaga sukses",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "ef2da891b0bb9999",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fbb999f761f10899",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQZkpzfryeDYt_MqN4AaABAg",
      "date": "2026-08-19",
      "text": "Siap bang.... trima kasih sarannya",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 1,
      "id": "dc614988eb709629",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-afe1157dafda3da6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "zLjItjeenlI",
      "date": "2026-08-19",
      "text": "TANPA BI CECKING! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 25571,
      "id": "c230356dda0a7a2e",
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
      "externalId": "UgxrroaiBuDOISI4UXZ4AaABAg",
      "date": "2026-08-19",
      "text": "Tapi ini udah yebari data itu",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 0,
      "id": "55ad7de49dcd1b25",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6729036fcbc36bc3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "rsm3FrGsMF4",
      "date": "2026-08-19",
      "text": "Tips Menghadapi Teroran Dc Pinjol #medybrawny",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 17944,
      "id": "e72079147e80ee85",
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8202f2880124f803",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIzSbjHSfA1p9SFsJ4AaABAg",
      "date": "2026-08-19",
      "text": "Tks bang infonya",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 1,
      "id": "4f4d054e20fe48ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-84ea892ff6b013f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzPJks2T1sCBOz4zUB4AaABAg",
      "date": "2026-08-19",
      "text": "hadir bwng semoga sehat selalu",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "f2ce4d9d3ce4833f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-daae7c7ae2b06b94",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxe_EvsC-a2Ij5wRY14AaABAg",
      "date": "2026-08-19",
      "text": "panjang usia berkah rezeki selalu abang ku 😊",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "ed534c38830bef18",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2c448a548fc11a18",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "Xu9KCoJ3WQk",
      "date": "2026-08-20",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 26636,
      "id": "7bf6f3d7274b6468",
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
      "externalId": "Ugy17sPvuHeV3Pk4Wut4AaABAg",
      "date": "2026-08-20",
      "text": "Bang maaf itu pas minjem uang nya di pake beli beras dan dan beli susu ya trus ga mau bayar,Abang tau ga ga kasus org yg ngutil di Indomaret ketangkap warga di gebukin Ampe mati,org ke Abang yg minjem ga mau bayar apa bedanya Ama maling",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 4,
      "id": "9dc6d4c566fc2a1c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-27b65a1b040fc400",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw5GLd2jPTkCOk4Jmt4AaABAg",
      "date": "2026-08-20",
      "text": "Bang tolong bantu saya,,demi Allah saya lagi kekurangan uang",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "8bcff196b0923621",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4a5863b0ecfe3037",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDFePVXPQL169L1Vl4AaABAg",
      "date": "2026-08-20",
      "text": "Bismillah semoga bermanfaat buat saya dan orang lain ❤",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "25395d479d9ce392",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-546426c637140c04",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw0_nSsWQCYZMfj7gp4AaABAg",
      "date": "2026-08-20",
      "text": "Bismillah semoga dapet buat kebutuhan sekolah sehat selalu bang dan suk ses Terus,🙏",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "a270bd1a6f914c44",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cd895939da2034e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw2bRes08fW7iEzzYp4AaABAg",
      "date": "2026-08-20",
      "text": "Buat sekolah anak sukur\"dpt🤲",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "82161791f6cffea3",
      "eventId": "auto-006242c7def125f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyKUtbKfghUAf7su3B4AaABAg",
      "date": "2026-08-20",
      "text": "Galbay nasional biar pinjol bangkrut",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 6,
      "id": "cf31faad4e48bf1b",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-051c0d9df91d289f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxW9u2MqksJ_-Alexp4AaABAg",
      "date": "2026-08-20",
      "text": "Hadir bang",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "acacc03503b29ba7",
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
      "externalId": "Ugwj_PtFaSlaywH9uCZ4AaABAg",
      "date": "2026-08-20",
      "text": "Hadir bang, bismillah semoga dapet buat bayar kontrakan bang🙏sehat selalu murah rejeki bang",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "1ab1ce2a13af3fb0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-510eac2da278d349",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqYCVDnjpN2Z2Zt5J4AaABAg",
      "date": "2026-08-20",
      "text": "Hadir slalu bg liat kontennya + subscribe dan like nya juga",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "3a20d33df4c2d5c0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48a80dcfa6f70af7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxj9gyp4wtngLeFaJl4AaABAg",
      "date": "2026-08-20",
      "text": "Hadirr juga..smga rejek anak",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "208b5b0794d95d55",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ecddfafc362b2642",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzT_vwwxwRDXB7mzP14AaABAg",
      "date": "2026-08-20",
      "text": "Hadirr lg bang spa tahu beruntung..aamiin",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "0ff576e2e0148451",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-397a06f30b004a00",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpeHsvNOFNEuLMiPV4AaABAg",
      "date": "2026-08-20",
      "text": "Halo bang semoga sehat selalu dan tambah rezekinya",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "13554317c2939ac2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8855442763b4bc5e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw44OtuDSD3ekjEGU94AaABAg",
      "date": "2026-08-20",
      "text": "Hapus saja pinjol. Legal sama dengan ilegal. Legal tidak sesuai OJK. Bunga mencekik. Pinjam dan harus kembalikan 14 hari kemudian. Kadang dapat sudah dipotong.  Apabila telat bayar nerornya sadis.",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 60.5
      },
      "id": "783f594cc943a314",
      "eventId": "auto-6d12a3526fca3b11",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHQ54lUk22u9MKJ_14AaABAg",
      "date": "2026-08-20",
      "text": "Ini org kn DC ko bikin Chanel 😂😂😂",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 1,
      "id": "6a1da5a46b881dcd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e86050deaa91b69b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzTS8rJC3kdC-E9imp4AaABAg",
      "date": "2026-08-20",
      "text": "Iseng² berhadiah, semoga dapet",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 2,
      "id": "c15fc1984d263446",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-23fb7dac0cb69ea0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyt05UmOuQ0i9_nqF54AaABAg",
      "date": "2026-08-20",
      "text": "Mksih bang pencerahan nya 🙏",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 1,
      "id": "81754e394211b0e8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-db940f4bc3d3052d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgymwTQztoIUAeMKtaN4AaABAg",
      "date": "2026-08-20",
      "text": "Salah satu cara menghapus pinjol ,galbay jgn takut",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 64.7
      },
      "id": "fff6267c4217436a",
      "eventId": "auto-a74f8fcd79d5b842",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyrmpfbT14qJitVQwp4AaABAg",
      "date": "2026-08-20",
      "text": "Saya butuh mendesak bang buat tebus motor turun mesin😢",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 1,
      "id": "d71eb9ee6768c5ce",
      "sentiment": {
        "risk": 45.1,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.7,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2a852827c21e609d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwofKZfT9x91L3dLGx4AaABAg",
      "date": "2026-08-20",
      "text": "Saya perlu dana gadget untuk biaya sewa kontrak an yg sudah nunggak dan biaya anak . Sehat terus abang lancar rejekinya",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "61cd4d65db91f1e7",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b748166ba3403d68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxNWBQX-G0SkxVNOdZ4AaABAg",
      "date": "2026-08-20",
      "text": "Sehat selalu kak🙏",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 1,
      "id": "96c6147022b969cb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f6be1ad92b98f2c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwX-fRQd3H8aYv3i5B4AaABAg",
      "date": "2026-08-20",
      "text": "Selalu support Abang dari dulu",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "209c50966eec0ce6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac1e568637282ee8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxXk4XRhwCgHdlzxbJ4AaABAg",
      "date": "2026-08-20",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 116,
      "id": "2f2d4dc6e194f16c",
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
      "externalId": "UgxHVE1LvzjMSeFjKet4AaABAg",
      "date": "2026-08-20",
      "text": "apa cuma saya yang serang balik mereka dengan melaporkan iklan2 pinjol di youtube sebagai spam? ayo kawan bergerak lawan, minimal laporkan iklannya kasihan jangan sampai orang baik lain nya terjerat",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 23,
      "id": "8c6aaf6b8fc2868d",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b6fe805a2d775c68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwLP5XGmznJFE-JKPR4AaABAg",
      "date": "2026-08-20",
      "text": "pinjol pindar sama saja, ojk tutup mata utk hal ini.....galbay nasionall, looossss!!!🤟",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 10,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 64.7
      },
      "id": "779425df9dbd7906",
      "eventId": "auto-c329e2f95cc93e43",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwQrqCqVtXMyql4lmZ4AaABAg",
      "date": "2026-08-20",
      "text": "semoga abang yg baik memberikan give awayna sama aku,",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "27873606364896f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee54a20ac77afd31",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz92XpBlWbakavS7w94AaABAg",
      "date": "2026-08-20",
      "text": "setuju bang terimakasih infonya",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 3,
      "id": "6a651d7cfdfeb6af",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8a357f21c5d4219d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGY_Rh1pgzlgi0_rF4AaABAg",
      "date": "2026-08-20",
      "text": "🤣🤣🤣",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 1,
      "id": "1103d3b615f477f9",
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
      "externalId": "UgxEj_0wgFDxBX1h4OJ4AaABAg",
      "date": "2026-08-21",
      "text": "Bang punya saya kok GK pernah keterima yaa padahal gak pernah ada pinjaman",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "3c41db7051b575e0",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c1e3804dabfa1688",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugykm2GwvJEn5kcok6d4AaABAg",
      "date": "2026-08-21",
      "text": "Banyak orang pinjol gk bayar merasa seolah korban, padahal dialah tersangkanya.",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 61.9
      },
      "id": "e3adcb757ccf13af",
      "eventId": "auto-c7f90ed209cf7c86",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyr5SK68QRkbVwh0lh4AaABAg",
      "date": "2026-08-21",
      "text": "Bismilah mudah2an dapet buat ongkos jemput anak istri di kmpg amin",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "3b48545a33874699",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-af0dcb46d6c72055",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugypj3EHKiCZuKQSVvx4AaABAg",
      "date": "2026-08-21",
      "text": "Bismillah kak moga dapet buat bayar sekolah anak",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "cd09ddd8e665ff13",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e020d25b71439dcc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgweoxuZ-2pe9U6vpHp4AaABAg",
      "date": "2026-08-21",
      "text": "Bismillahirrahmanirrahim semoga dapat rejeki anak",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "130c26e2a80ff29a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4a6e40972b266c59",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGZFDslEmpGrO8SB94AaABAg",
      "date": "2026-08-21",
      "text": "Buat bayar token listrik boss.  Bagi bossku😅",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "cc1a12301c9b93f5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b320715239383677",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzwOWx-SNtYnmquPtl4AaABAg",
      "date": "2026-08-21",
      "text": "Gila Bro jokul bininya😂😂😂",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 0,
      "id": "7ec76ebcb77c2eac",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1198d7e89b64abd6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz5lbjyxL53puAgVDV4AaABAg",
      "date": "2026-08-21",
      "text": "HADIR SEMOGA DAPET DANA KAGET BUAT BAYAR UANG SPP SEKOLAH SOALNYA LAGI SUSAH GEMPA+ORTU PEKERJA BURUH😢🙏",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "2de90723bcefbe83",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-db6b20eff40a4cd1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwismFmTv5Mmu6fgtN4AaABAg",
      "date": "2026-08-21",
      "text": "Hadir bang semoga dapet rejekinya 😊",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "7ce07634feb7c8be",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-04761fdd81c15154",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxNaYP3d1KAaQ3DqL94AaABAg",
      "date": "2026-08-21",
      "text": "Hadir kawan bismillah semoga dapet buat usaha",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "db0ed9999c465515",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a3f470ea8a41e52",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx0YorABVER7Bu414R4AaABAg",
      "date": "2026-08-21",
      "text": "Hadir untuk bertahan hidup akhir bulan",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "8a40050c08824aed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ad56f202e29b7189",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwV2KG9NKgunV5yU4R4AaABAg",
      "date": "2026-08-21",
      "text": "Iklan pinjol di mana mana, bahkan liat tayangan di YouTube saja 99% isinya iklan pinjol. Miris",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 15,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "d2583d98f685d45c",
      "eventId": "auto-16711a1ac7702fd5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwEgSgHzFMPZAues-x4AaABAg",
      "date": "2026-08-21",
      "text": "Jangan salah. Justru yang terlihat wow itu pinjol banget. Memilih untuk frugal living. Jangan beli yang ga ada uangnya. Kalo dihina, eh, yang ngehina itu justru yang minjol banget. Tontonin saja.",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "c38160f595745310",
      "eventId": "auto-0b2668467b054150",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxLHjniZdp2qYbDLLx4AaABAg",
      "date": "2026-08-21",
      "text": "Kl.pun dulu misal punya pinjeman dipinjol kan rubeen jg yg bayaar .knp sarwen kepanasan ..itu fitnah..modelan ruben manalah smoe ke pinjol2 sgla dia mah rezeki bgs dr dulu smpe skrg trs laku sbg host dll .byrannya jg g kaleng2...org jahat biasa nya bmyk cara utk mnjatuhkan lawannya..tp Allah padti aksn mmbuka yg jahat akan ketahuan & bkl.jatuh trhempas pas .maluuj kan .\n.kl pun punya tagihan d pinjol duitnya bt ngasi keperempuan Gn kawi itu pasti.nyq kaan ..",
      "url": "https://www.youtube.com/watch?v=XtkzQNkQhi4",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "17f2314f1544ade6",
      "eventId": "auto-d4b78e04da627d8a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyCVZl6Ygf8V-dRuz14AaABAg",
      "date": "2026-08-21",
      "text": "Narasinya Pinjol ilegal terus, padahal yang LEGAL pun sama.",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 60.5
      },
      "id": "a32db250af69315d",
      "eventId": "auto-308bb2e24eee80b1",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzYkRelqO8YFFzLWqh4AaABAg",
      "date": "2026-08-21",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 125,
      "id": "4cba156cfd184abd",
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
      "externalId": "Ugx_oOmvElxkslXTa9Z4AaABAg",
      "date": "2026-08-21",
      "text": "Semakin hari semakin banyak yg galbay, karena kondisi ekonomi skrg yg lagi susah susahnya",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 28,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 64.7
      },
      "id": "095e688db21bd40d",
      "eventId": "auto-18cb913092cbcad9",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "BUK3JWAp_O0",
      "date": "2026-08-21",
      "text": "Tanpa BI CHECKING?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 20930,
      "id": "d1ce6f6cb125a4f8",
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
      "externalId": "Ugy-jKe2U6OmkaDrFSl4AaABAg",
      "date": "2026-08-21",
      "text": "Wkkwkkwkk",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 1,
      "id": "8f42b033781e1cf4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-600016be0ea2049e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGoGN-BKBoOYT1iFJ4AaABAg",
      "date": "2026-08-21",
      "text": "bismillah lagi urgent banget butuh dana buat hari ini lagi kepepet banget motor abis bensin di pinggir jalan🙏",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "e86a9ce3698500c4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b30707df6a3af4c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxPyuwWSXThDrX3l9x4AaABAg",
      "date": "2026-08-21",
      "text": "bismillah smga ada rezeki.buat sunatan anak laki laki saya",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "361328f84f3f48fb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bc146be463c8e7cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCPV3Q8w-LR5DvJ214AaABAg",
      "date": "2026-08-21",
      "text": "dc nya takut 😂",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 2,
      "id": "61c2bae02728eae4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cc0a2c543e2cdbc2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxt34RJbuWMn0nfycx4AaABAg",
      "date": "2026-08-21",
      "text": "hadirr bang semoga rejeki ibuu, untuk beli obatt",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "9e0ca7b09224228b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-482400162987db3c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgycH7SUYqj8RWKWItZ4AaABAg",
      "date": "2026-08-21",
      "text": "muda mudahan rezekinya bisa membantu ya kak",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "c566e9051a2dd50b",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-983373817e68a482",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyx46voyUV0wrgNoEp4AaABAg",
      "date": "2026-08-21",
      "text": "tutup semua pijol saja pak purbaya,,kenapa negara melegalkan pemerasan untuk rakyatnya sendiri seperti pinjol ini",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 46.5
      },
      "id": "c6d5ecdac8bab4b2",
      "eventId": "auto-0e3a24375f0329fc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytrfS1ZnQtmSmFM0J4AaABAg",
      "date": "2026-08-22",
      "text": "Bang aku butuh uang bang buat beli mesin cukur baru soal nya sudah tidak layak",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "2f99e1a409b0a56a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8fecc519ebe1e341",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwlw42VqUxWGeEqWPt4AaABAg",
      "date": "2026-08-22",
      "text": "Bismilah dapet untuk beli mesin cukur baru untuk kerja",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "63ad4e51de625c61",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b3b151c4cef5e1cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3XYnRh_8S1_PjXe54AaABAg",
      "date": "2026-08-22",
      "text": "Bismilah hadir bosku",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "14519ed59476fe0f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b8efd9a882fd72c9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxfOLjmBkjBWDNvOUV4AaABAg",
      "date": "2026-08-22",
      "text": "Bismilah semoga dapet buat beli mesin cukur baru  sehat selalu yg punya vidio",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "8daedcf19772f099",
      "eventId": "auto-293bc1c1e904a5b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwtYG85SwOxSQTAnJ14AaABAg",
      "date": "2026-08-22",
      "text": "Buat orang tua sakit kaka ug baik hati, pengen nyenengin org tua . Bismillah",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "40fb356cf1a0442c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1e639c414f3ab1f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "5ygg0UHz1fE",
      "date": "2026-08-22",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 49434,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "e54c3887db590937",
      "eventId": "auto-c56326dcc516effe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwPwM_6bqkAiA0CBKd4AaABAg",
      "date": "2026-08-22",
      "text": "Hapus pinjol",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 10,
      "id": "6e9203e1822f5d5a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4877691cd5b8adbf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyfxCWIbxASRcf-W2l4AaABAg",
      "date": "2026-08-22",
      "text": "Ini polisi baik , di Jambi dulu bagus , di sayang semua masyarakat.❤❤❤❤❤",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 32,
      "id": "2b1084699a7e6b96",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fa7a4ef6e6c739b3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwgkBQLoAtNXw6vyT54AaABAg",
      "date": "2026-08-22",
      "text": "Kriminal berkedok pinjaman ....ayo galbaykan secara nasional jangan pernah takut lawan mafia mafia rente bahkan lebih kejam dari rentenir",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 28,
      "id": "e182c62b57bc74df",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-46a8105d6375622b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyqxZgFMuinG1zRyfZ4AaABAg",
      "date": "2026-08-22",
      "text": "Mantap mas bro solusi Nya terima kasih",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 3,
      "id": "40b05875ad8ea50b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e7ea14510fa5d857",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzc5zSn0lV0eO0VAPh4AaABAg",
      "date": "2026-08-22",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, dana kaget dibagikan jika video ramai mau buat kbtuhan apa 👇 https://link.dana.id/danakaget?c=s6p4llpnt&r=c7Q38x&orderId=20260825101214579315010300166276294960434",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 160,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "8735bc980f0eacc4",
      "eventId": "auto-ccc18414c1ed80c2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwyICqIE1yDRyV0ROt4AaABAg",
      "date": "2026-08-22",
      "text": "Moga ada rezekinya buat biaya renang kedua anak Aamiin",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "c1ad1cce75f62d4d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e253ee4841204593",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwwlvOtQZDZD3DHnjR4AaABAg",
      "date": "2026-08-22",
      "text": "Pa bray.....usahakan biar diagendakan di DPR  pinjolnya biar dihapuskan sepertinnegara cina",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 10,
      "id": "b5f603c9f88e964c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-14a7dd18d7c192e3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxuwN00yTI3uCsuilt4AaABAg",
      "date": "2026-08-22",
      "text": "Pak Bray, semoga tugasnya dimudahkan dan dilancarkan rezekinya karena banyak membantu masyarakat berkaitan dengan masalah hutang,, ini polisi yang menjadi panutan",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 6,
      "id": "ea59424781024e12",
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b0710a5d0b4c683",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxOejD43gf8zs65Htx4AaABAg",
      "date": "2026-08-22",
      "text": "Pak Bray.. Polisi berprestasi saat bertugas di Ditnarkoba Polda Riau maupun di Polda Jambi,, semoga prestasi beliau diapresiasi oleh Mabes Polri di Jakarta... Aamiin🤲",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 16,
      "id": "fb64d855ba01839a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-419955f1cd1de5b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwL95JMSVgtBgkYDjl4AaABAg",
      "date": "2026-08-22",
      "text": "Pas di ketik koq gk muncul ah",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "4de3e8b6963fb9a8",
      "eventId": "auto-bde3a1a6ce8d6073",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzGgwICl22oiXzM6mV4AaABAg",
      "date": "2026-08-22",
      "text": "Pinjol bener bener menjebak",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 6,
      "id": "eb6089711978ef18",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4fc49d3e8266f1bc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx9PCMppy1KTfE8vg54AaABAg",
      "date": "2026-08-22",
      "text": "Pinjol itu juga merusak ekonomi...",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 19,
      "id": "9de9b3023f3468ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-760685abb453b8d6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQ4tKZlrDvB0KoLmx4AaABAg",
      "date": "2026-08-22",
      "text": "Pinjol legal maupun ilegal Udah banyak merugikan masyarakat,koq  masih aja dipelihara ya?...dimanakah hati nurani pejabat instansi terkait? Tutup matakah mereka? Melihat fakta dan realita dilapangan",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 8,
      "id": "d193cfbcd84f5227",
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-17ca7d9682b2a74c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugypl85_niZXkCuDICx4AaABAg",
      "date": "2026-08-22",
      "text": "Semoga dapet buat tambah tambah tabungan beli laptop buat kuliah hehe🎉",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "3faf26e96c5d6c97",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a093fb1ab0b2664d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugys0u1p2fiD73CFfnd4AaABAg",
      "date": "2026-08-22",
      "text": "Tidak Semudah itu bro😂\nLimit ak aj cuma diksh 50K\nUdah kek Main\" padehal transaksi banyak..!!!",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "b08f9addf6e871a4",
      "eventId": "auto-0d12ccb13dbcadee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugza59DuhGgXNbC7mDh4AaABAg",
      "date": "2026-08-22",
      "text": "Udah paket lengkap, bismillah untuk melunasi hutang",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "85110b10ed5b42a6",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f4fd45c924dd4ef4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugya-3ovv5uxXJCHzF94AaABAg",
      "date": "2026-08-22",
      "text": "Untuk diri sendiri stop utang stop riba hidup tenang tanpa utang",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 57.0
      },
      "id": "19cb2232508fb0d8",
      "eventId": "auto-8d25e3e1e401e605",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "SVbn_DXgrXc",
      "date": "2026-08-22",
      "text": "[FULL] UTANG CUMA JUTAAN, MENTAL HANCUR! Pak Bray Bongkar Teror Penagihan PINJOL | Deep Talk",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 28547,
      "id": "9622582a9a0be502",
      "sentiment": {
        "risk": 81.5,
        "label": "negative",
        "negativeWeight": 4.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7dc1a5e1aa92642a",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIpWBtF5lvTSUoCjJ4AaABAg",
      "date": "2026-08-22",
      "text": "assalamualaikum bang, sehat selalu bang, selalu berbuat baik🎉\nsemoga bisa dapat buat nenek biar bisa jualan gorengan lagi 😢🤲",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "cd6b00d79d961794",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a928a11004c2436",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzXLE7-LgNHfZY0OXN4AaABAg",
      "date": "2026-08-22",
      "text": "bismilah buat buka usaha ternak ikan dan ayam",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "7709787ea03d378c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f142bad10694fda4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxU-UmJZoEMITFiZRd4AaABAg",
      "date": "2026-08-22",
      "text": "hadir bang nyimak... sampai selesai \nsemoga ada solusi",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "e6c55abed424d889",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-091166aa49f1f77c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwwNBooKRTAzpffkXV4AaABAg",
      "date": "2026-08-23",
      "text": "Alhamdulillah bang, semoga dilancarkan sampai acara selesai.",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 4,
      "id": "48eaf7c9990cbfa9",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-845a85bcd69665cd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIAbVHtZ9cjbtcmGB4AaABAg",
      "date": "2026-08-23",
      "text": "Alhamdulillah seberat apapun, dgn tempat tinggal sederhana, rumah paling kecil di gang komplek, kendaraan paling butut di komplek, tapi tak pernah pinjol 😂",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "c0d02a9a9491c64b",
      "eventId": "auto-f68d8f1e7130221f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxslltvN5SlYwxZX1N4AaABAg",
      "date": "2026-08-23",
      "text": "Bagi\" dong saldonya 😂",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "2394673944527667",
      "eventId": "auto-b212b551f0c67409",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3goEqhzAxvrAMS9F4AaABAg",
      "date": "2026-08-23",
      "text": "Bakal hancur... Percaya deh",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "e8d7aa730a253e92",
      "eventId": "auto-2f032adc53c4d78b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxHEC8QLwMm7KQTn794AaABAg",
      "date": "2026-08-23",
      "text": "Benar skema tadpole pindar jelas menipu masyarakat tapi tidak dilarang OJK !!!",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 5,
      "id": "1ffd6e9da0b63371",
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
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9GXl36M69Y4_eA814AaABAg",
      "date": "2026-08-23",
      "text": "Betul bang, Sebelum menikah harus terus terang sama calon istri.\n\nSemoga lancar sampai hari H bang",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 26,
      "id": "37f12db3cdb21452",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-621ea5ff73e660c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4NgjTWGa7Sv_AX7F4AaABAg",
      "date": "2026-08-23",
      "text": "Bismillah semoga rejekinya abang makin lancar aminn yallah 🤲",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 43.0
      },
      "id": "862ec8e8bd9b6cdb",
      "eventId": "auto-e97fa3b3f63588e1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwOf3hZa0o4Sfn7tyV4AaABAg",
      "date": "2026-08-23",
      "text": "Bismillah yallah semoga sehat selalu Abang dan makin lancar rejekinya aminn yallah 🤲",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "81e079427d0084e0",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc416ed832dd5850",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgypZK876-OUkABTuY54AaABAg",
      "date": "2026-08-23",
      "text": "Boleh boz daget nya ... Untuk beli buku anak sekolah",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "08e435af2ed5f94e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-32c44ff8541ae8af",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxhn_FP1ynRk5myGkJ4AaABAg",
      "date": "2026-08-23",
      "text": "GADA BACAAN AKTIVASI NYA CO",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "33c03ce0ddb4a665",
      "eventId": "auto-8a1d884377a26e2a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCLwInUZS8FAX3Cq54AaABAg",
      "date": "2026-08-23",
      "text": "Hadir abangku\nSemoga aku termasuk orang yang beruntung karna butuh banget dagetnya buat tambah bayar cicilan motor",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "db35799ea36ebf93",
      "eventId": "auto-33d0e31707de1e41",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxPqvnR9hgOHqT7l9Z4AaABAg",
      "date": "2026-08-23",
      "text": "Hadir bos semoga ada rezeki buat modal usaha...",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "c9aa0d9ee21a28f3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-20c3f099bff28d0c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBJB00dsnb-7sovjJ4AaABAg",
      "date": "2026-08-23",
      "text": "Ini pejabat yg masih mau membantu Rakyatnya , semangat pak 🔥🔥🔥🔥",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 1,
      "id": "174119aba7e4b530",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-750bb2f8b58aa9ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "52kZEW1CK-U",
      "date": "2026-08-23",
      "text": "Koperasi punya produk pinjaman itu hal yg normal, tp apakah infrastruktur pengelolaannya sudah siap?",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 38296,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "87c05d27ac181777",
      "eventId": "auto-c665603b343ebcd3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqJKb_iJG8Mwz0_0R4AaABAg",
      "date": "2026-08-23",
      "text": "Mau dong dana gratis nyaa,seumur2 belum pernaah dapeet",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "0bff033876a67df1",
      "eventId": "auto-53fc317ddfbf55dd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyFuJk6OoVDKT3Gs0x4AaABAg",
      "date": "2026-08-23",
      "text": "Pindar OJK harus dihapuskan",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 2,
      "id": "5fd8946297c0de3e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8c85c5123be15c81",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGNMqFYMWH9m6PYkB4AaABAg",
      "date": "2026-08-23",
      "text": "Pinjol emang bikin rusak negara kita indonesia ,berantas pinjol pak",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 14,
      "id": "9e417a295e4a99d4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b25f58b7306110dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "SmUCQHlZxA8",
      "date": "2026-08-23",
      "text": "SAYA MINTA MAAF! Klarifikasi Galbay Pinjol",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 27534,
      "id": "a53f3950d98f5040",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e29b2ab4e3d6c2c",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz6-8ggS4mYC17aUVp4AaABAg",
      "date": "2026-08-23",
      "text": "Salam kenal dari Kota Tanggerang",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "b3f002eb0cd146db",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bb7b0546db9430c5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyTrPH3gZi0Ct0HHw94AaABAg",
      "date": "2026-08-23",
      "text": "Semoga jadi Kapolri Pak Bray... biar rakyat aman sentosa",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 3,
      "id": "7528bd46525e24b6",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8b8ab13a30a5c51b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugww5mo8ZQgnF9qiXGR4AaABAg",
      "date": "2026-08-23",
      "text": "Semoga rejeki ..buat pulang kampung udah 2bln gak ketemu anak ...oleh merantau ...smoga ada rejeki",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "bfccd7518ec6efbb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b4553f4bb2a0d3d8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUny5CJ1x1VYjqfeV4AaABAg",
      "date": "2026-08-23",
      "text": "Semoga saya  beruntung bang untuk bayar hutang",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.0
      },
      "id": "b7a4ffa1f1d77825",
      "eventId": "auto-e25d28cc9db6d53f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw78aL0ZaqZgxj_9xl4AaABAg",
      "date": "2026-08-23",
      "text": "Terimakasih bang Singgih atas edukasi dan motivasi nya, aku jadi lebih kuat tanpa galob lagi, walaupun skrg masih berjuang, tp aku percaya bisa terlepas atas musibah ini. \nSemoga rencana pernikahan bang Singgih lancar sampai hari H❤",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 11,
      "id": "29f2f19b60745cdb",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7e390009a21d8382",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJ_F3ZmOCigsNE0iZ4AaABAg",
      "date": "2026-08-23",
      "text": "bang cara menghubungkan emet id gmna bang?",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "48836209421fc13c",
      "eventId": "auto-e452658b77e51c71",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzOvLvd9yItrmGHIo94AaABAg",
      "date": "2026-08-23",
      "text": "misi kak semisal mau pinjam tapi umur kita udah di atas 80 han apakah masih bisa pinjam",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "4b6d93b632d5a7c7",
      "eventId": "auto-261a36ee544eea87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyl5huMi9CYC-Ncz1F4AaABAg",
      "date": "2026-08-23",
      "text": "pak bray adalah contoh polisi baik yang lantang berani menyuarakan keresahan dan permasalahan yang ada di masyarakat dan melindungi masyarakat.. bismillah komandan Manang soebeti calon Kapolri masa depan",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 2,
      "id": "10f91a81456d6bc5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d7df6f37757282d8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwcmBjK466sQWeRn5h4AaABAg",
      "date": "2026-08-23",
      "text": "polisi paling jos jis...idaman pelindung masyarakat",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 2,
      "id": "ac13cbbab66bfa3a",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-21b0328301d2178e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwF6WmO2dPCBHerA9R4AaABAg",
      "date": "2026-08-23",
      "text": "😅",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 1,
      "id": "8c4722c327fcbd8b",
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
      "externalId": "UgwpwWGMqWg3mVu0nkd4AaABAg",
      "date": "2026-08-24",
      "text": "*_Ayo maling bersama-sama agar hidup lebih hidup_* 😢😢",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "173fc1a2ccfef57d",
      "eventId": "auto-b2f1532379a78fae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzKHXxfhdUshj5HGY94AaABAg",
      "date": "2026-08-24",
      "text": "99 persen bakal macet",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 60.5
      },
      "id": "34352e218a32c396",
      "eventId": "auto-8848836081fc41f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "l1lBWsG_N38",
      "date": "2026-08-24",
      "text": "AWAS! PINJOL-PINJOL INI BISA DATANG KE RUMAH? INI PENJELASANNYA",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 26247,
      "id": "afa90efec443ab38",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-31cb7a3ff1289993",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwkN5NBlZmF0Lad8Sd4AaABAg",
      "date": "2026-08-24",
      "text": "Alhamdulillah saya ikut senang bang",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 7,
      "id": "af3737f897b6afc5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ba11364163fa0b42",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzE5tq4LEQBty49H4t4AaABAg",
      "date": "2026-08-24",
      "text": "Amien bang 🙏🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 1,
      "id": "1a5c2c068fa6d51f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48ad343cb1950310",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjrMbfM0tY0CPnzDJ4AaABAg",
      "date": "2026-08-24",
      "text": "Ayo masyarakat cepat pinjam, masalah bayar ntar aja. Kan dah ada jaminan. Daripada nanti dikeruk sama para pengusaha besar atau koruptor yg pura2 jadi rakyat jelata.",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 18,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "e613096c2ef502c6",
      "eventId": "auto-22fef50201617e2b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJLs9UMjlGJgK6o014AaABAg",
      "date": "2026-08-24",
      "text": "Bagus itu mbak kalau gagal bayar potong di dana desa jadi pengawasan jadi ketat karna di awasi langsung oleh aprat desa yg tau betul pendapatan warganya.",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.7
      },
      "id": "4152430f1ea1b225",
      "eventId": "auto-f70c8bcfa11cafd0",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy78TI8Pi1MMvuzsN94AaABAg",
      "date": "2026-08-24",
      "text": "Bang saya galbay di arta niaga dan pin+  apakah akan datang ke rumah daerah Jateng,,",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 3,
      "id": "b54f342895572c3e",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b0e44851c341805",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJR-K9z1IH2h5AFbl4AaABAg",
      "date": "2026-08-24",
      "text": "Bangga punya polisi yg mengedukasi masyarakat ttg pinjol\nTeruslah berbuat kebaikan urk masyarakat, sukses selalu pa.Bray",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 1,
      "id": "91b16e9b9f55869f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6ab22e128e720b03",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDPcSTHhYCcg5vxNd4AaABAg",
      "date": "2026-08-24",
      "text": "Bismillah buat biaya kuliah dan pengobatan ortu 🥺🥺",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "af3ef64c23b285a9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aecc4c5a33b09224",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxrrgiEwQSMhwtYldp4AaABAg",
      "date": "2026-08-24",
      "text": "Bismillah semoga ada rezekinya, semoga yang berbagi lancar rezekinya",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "9e165d7e165e5aa7",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-50b628332c793422",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxKTSuJNIAo9qz7JH14AaABAg",
      "date": "2026-08-24",
      "text": "Bismillah semoga rejeki ku di sini🤲🤲",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "b3f135bc251169a3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9ed5d984ac9a9b66",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOOe188G-RRj_-iTh4AaABAg",
      "date": "2026-08-24",
      "text": "Bismillah ya Allah semoga dapat rezeki buat keluarga dikampung",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "183dd2454118f2bd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f0ef28740017dcc6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgywNbOU8xL-LldV5CZ4AaABAg",
      "date": "2026-08-24",
      "text": "Brp gaji nya bang? Pan baru dikit flower nya",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "9f13a0d9c65437ab",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dd0258cbbdf9296d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzndUB82RQ8t_wbVYB4AaABAg",
      "date": "2026-08-24",
      "text": "Definisi otak lebih kecil dari ambisi",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "d964869a93dd0b5c",
      "eventId": "auto-36936d9e11ce1f9c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgygpfoxbLnuERE_JwZ4AaABAg",
      "date": "2026-08-24",
      "text": "Gede bgt bang limitnya kok sya g prnh dpt y 😂",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "fb17c2db73961603",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-717a548307f95e98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFnoPqlIo19qP6Zyp4AaABAg",
      "date": "2026-08-24",
      "text": "Hadir",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 3,
      "id": "cfbc164d2771b326",
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
      "externalId": "Ugw6PUfrVsWybMFaSXR4AaABAg",
      "date": "2026-08-24",
      "text": "Hadir Bank",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 1,
      "id": "2acfa11f7c620e85",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-57b93ab540ea31ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgycuULE1yGwODVPrcx4AaABAg",
      "date": "2026-08-24",
      "text": "Hadir bang semoga mangkin sukses",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 1,
      "id": "8871c052e1cf2ca7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b722730dff1b58f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwKn_aGC-jUUkxnBtJ4AaABAg",
      "date": "2026-08-24",
      "text": "Hadir bang semoga rezeki nya lancar dan dimudahkan urusannya",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "e1c8e6bc946a51f2",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5bc1d5847db46c55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgymjiPfF4x1Wo1thFt4AaABAg",
      "date": "2026-08-24",
      "text": "Hadir bang 👍 mudah mudahan ada rejeki nya, buat bantu Ade bayar kuliah",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "8155c712b17e6dac",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d1e8bc0ad8449f97",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyjNOcP4Cv8PjbAPoB4AaABAg",
      "date": "2026-08-24",
      "text": "Hadir jujur ajah buat bayar hutang jatuh tempo besok",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "a6dfcf39e00ba2a1",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0eeb7e5c8c9b3c05",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyctL1MAsHRJSACAyR4AaABAg",
      "date": "2026-08-24",
      "text": "Hadir trus bang, mau tabung buat anak yg  TK sbntar lagi😊",
      "url": "https://www.youtube.com/watch?v=BUK3JWAp_O0",
      "engagement": 0,
      "id": "a4a1dea9718ed23c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-213834d08c2b58f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzXsFrNdJlDOMvz9FF4AaABAg",
      "date": "2026-08-24",
      "text": "Hapus pinjol dan judol.. . .\nLingkaran setan semua . .",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 2,
      "id": "9cec9340fe28a8d1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-51534f7713d58b88",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxkOKuVvNZP2ECXarx4AaABAg",
      "date": "2026-08-24",
      "text": "Ko pas di tulis aktifasi pinjaman cepat gda bang pencerahan dong",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "0e8831514870abb0",
      "eventId": "auto-c5c3da221723a8b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyCdcBD2Iq4q7SEQut4AaABAg",
      "date": "2026-08-24",
      "text": "Kredit Macet nti..",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 60.5
      },
      "id": "4c54c1a016a09e4c",
      "eventId": "auto-7c4447c9c98e9114",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9E86hoTZ_fCLjZfV4AaABAg",
      "date": "2026-08-24",
      "text": "Makanya harus dilarang semua pinjol, kan bisa aja HP orang dihack dibuat pinjol, yg kayak gini ini pinjol gak ngerti atau pura² bodo? Semua pinjaman harus proses normal , ada bank, ada cek dokumen & orangnya, cek rumah & pekerjaan & domisili , cek rekening lain ada gak yg nyangkut masih hutang, bukan cuma berdasarkan nomor HP lalu dikasih pinjaman, kan sama aja ga ada validasi, otak mana otak?",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 3,
      "id": "bf055167ed32c5c1",
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-807d5f9b4073b2ee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwSBuPA0FE2gxRZLrh4AaABAg",
      "date": "2026-08-24",
      "text": "Mantab bang singgih , semoga lancar sampai hari H dan makin lancar rezekinya aamiin",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 4,
      "id": "695f98ed4bd2784f",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7990011c03f84203",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLtFFhwRyPiqpczW54AaABAg",
      "date": "2026-08-24",
      "text": "Mari kita lihat dulu siapa yang di ACC untuk mendapatkan pinjaman ini. Kalau yang di ACC tetap para kroni dan orang terdekat pengurus koperasi desa atau perangkat desa yang tidak benar-benar mempergunakannya untuk usaha maka potensi kredit macetnya akan semakin besar.",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 54.9
      },
      "id": "c91d207080810c30",
      "eventId": "auto-a744613b35f5f159",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwO2ATqpv6WOjvYjbV4AaABAg",
      "date": "2026-08-24",
      "text": "Mau hutang apapun....klo nggak byr ..urusanya di akherat😊",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.0
      },
      "id": "61dfe1e8a1c3da6a",
      "eventId": "auto-597db7937fbabc04",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxxwwjSj2ILwlEeWZB4AaABAg",
      "date": "2026-08-24",
      "text": "Minta tolong bang berapa aja buat makan udah 2 hari cuman makan nasi sama Masako doang di perantauan",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "b622a5f16b79529a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee5dde174f53ddfb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCk_BggAaQaJaebnV4AaABAg",
      "date": "2026-08-24",
      "text": "Negara mayoritas Islam rakyat di cekoki riba,yg sebenarnya tidak perlu pinjaman, kewajiban negara mensejahterakan rakyatnya dengan sumberdaya alam yg melimpah",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 44.4
      },
      "id": "134f456485737052",
      "eventId": "auto-a4364c1f5387d1c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxzDR2hyPjebM-36bV4AaABAg",
      "date": "2026-08-24",
      "text": "OJK = AFPI = PINJOL = MAFIA\n\nLawan dan hapuskan semua pinjol yang ada di Indonesia!\n\nBravo Pak Bray...✊️",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 11,
      "id": "3777643a88473ae3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-68ac85c979b86d84",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDgV0X20bIKHVOgnd4AaABAg",
      "date": "2026-08-24",
      "text": "Pertama",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 4,
      "id": "66dab31d631d9830",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8e26f17e1a63c5e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw7EnoWpE73cWR0WSp4AaABAg",
      "date": "2026-08-24",
      "text": "Program nya bagus .. tp apakah diikuti dg sdm & sistem yg kredibel ? Entahlah 🤷 \nYg udah2 sih amburadul tuh MGB",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "c09301a178ca7c5c",
      "eventId": "auto-ed6732cfdc25e7dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_dBva-gDHimWbPNB4AaABAg",
      "date": "2026-08-24",
      "text": "Saya lagi butuh buat makan dan kos kosan nunggak gajihan masi lama banget😭",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 1,
      "id": "93421ccea95bcba0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dd3808d1085e8c7d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzcUTYVARb__RBhesR4AaABAg",
      "date": "2026-08-24",
      "text": "Saya udah didatengin udah 4x  kang tunaiku rajin bgt dateng kredit pintar udah 3x  dateng😢",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 19,
      "id": "95fa778f7cbe7990",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d74a7104d9901363",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxxyvHSnwdSs-fTuql4AaABAg",
      "date": "2026-08-24",
      "text": "Sebenarnya hal PINJOL klo bank Pemerintah apabila memberikan Kredit KUR UMKM dgn persyaratan yg tdk jelimet segala pakai Jaminan Sertifikat dan Lolos BI Ceking\n===\nmaka masyarakat Indonesia past lbh baik ambil kredit yg resmi dr bank pemerintah klo Persyaratan nya tdk jelimet ini itu dan ada niat membantu usaha masyarakat kelas bawah utk usaha UMKM",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 12,
      "id": "8c22dfd7ec6c5a64",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b6a2c0a3157db010",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxXhLT3s8A8VDp-lvx4AaABAg",
      "date": "2026-08-24",
      "text": "Sekali2 bahas joki/konsultan pinjol bang",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 3,
      "id": "c5bd620f27eb1dea",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7428224f95c75804",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzhQ2AUIYHrcQwiTON4AaABAg",
      "date": "2026-08-24",
      "text": "Selamat Bang. Semoga menjadi keluarga yg sakinah, mawadah dan warohmah. Aamiin 🙏",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 1,
      "id": "9ec7c425312fa876",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-941a88ff4f050283",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCGyHceDwpM5Z-tEN4AaABAg",
      "date": "2026-08-24",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 133,
      "id": "13c9c8026f1d8360",
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
      "externalId": "UgxrgzIPBCEESqA5R6F4AaABAg",
      "date": "2026-08-24",
      "text": "Semangat semoga ada rezekinya❤",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "c494c779fe88960d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77b476f316322e47",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3GuENUuzjiAIcVf54AaABAg",
      "date": "2026-08-24",
      "text": "Semoga Ruben bs menyelesaikan dg baik ..pemeriksaan terhadap dirinya sdh dilakukan ... sekarang tinggal pemeriksaan terhadap S yg hidup hedon ...aliran dana nya ke mana sj akan ditelusuri",
      "url": "https://www.youtube.com/watch?v=C2kcTOoU-SU",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "0b558e87c1a7c290",
      "eventId": "auto-bdabe35b811266a0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwY7lO8rB_G2wC0UU94AaABAg",
      "date": "2026-08-24",
      "text": "Semoga ada rezekinya buat berobat orang tua",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "9dc19a6285a5ed63",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c4efa0c329822859",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz5r_-uST7uZ-wuw9Z4AaABAg",
      "date": "2026-08-24",
      "text": "Singa ,pinjamin,kredione,pinjam go ada DC y g bng depok",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 3,
      "id": "a5410faf6db9a171",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a612a4ebc2820194",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx51TlT-5E_aIzmqoN4AaABAg",
      "date": "2026-08-24",
      "text": "Slmt MLM, assalamualaikum kak DC lapangan yup di Tangerang ada atau tidak ya ok thx",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 3,
      "id": "a2d9711691e7caf8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1b668472093dc127",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "V2aZzYPZUj4",
      "date": "2026-08-24",
      "text": "Tanpa BI CHECKING?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 22977,
      "id": "b207d36d14a8bcf6",
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
      "externalId": "Ugxg1k32OAlhqsaWWWN4AaABAg",
      "date": "2026-08-24",
      "text": "Trimakasih bang semoga bermanfaat",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "d95258f1c321ad5e",
      "eventId": "auto-189ce51f1fb58070",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEGXl7uQZyAqcuguh4AaABAg",
      "date": "2026-08-24",
      "text": "Ujung2nya jg gak semua masyarakat bisa pinjam,paling2 skemanya kyak perekrutan pekerja dapur mbg. timses jadi prioritas",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "f6d7edd8b6f73a4b",
      "eventId": "auto-2ec7985d995b784e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQv97s7jX_TT2B5B54AaABAg",
      "date": "2026-08-24",
      "text": "Yg jadi masalah tidak sepenuhnya siklus usaha didampingi pemerintah, karena kita yg buka usaha kecil2an, tidak sebanding nilai jual dengan biaya operasional, sy pinjam KUR buka usaha ternak babi, nilai jual hanya Rp 35.000/kg sementara hrg pakan mahal, sehingga usaha merugi, bagaimana kita bisa bayar pinjaman,?",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 44.4
      },
      "id": "e6db36bac3c47b8b",
      "eventId": "auto-5a32f6d1a576bd38",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGPDdLODujtF_LqJV4AaABAg",
      "date": "2026-08-24",
      "text": "Yg pinjam pinjol bukan krn boros gaes.....ada yg krn bener2 terdesak",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 18,
      "id": "9e53daf9e2f39046",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f52cc1528ea6a964",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9QGPAmrmuO9ug16V4AaABAg",
      "date": "2026-08-24",
      "text": "Zaman SBY pernah ada program pinjaman semisal ini. Dan banyak yg macet. Karena mindset masyarakat, ah itu dari pemerintah, uang² kita juga gak usah dipulangkan",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 54.9
      },
      "id": "abfa5d2afbf58796",
      "eventId": "auto-c681af2bb28c6f32",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "8NgJ95m5i6U",
      "date": "2026-08-24",
      "text": "[FULL] DARURAT PINJOL! Pesan Menohok &quot;Pak Bray&quot; untuk Peneror Penagihan Utang | Deep Talk",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 27157,
      "id": "daa3508a8017d6bf",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c1d5b06ab9551885",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw7gNyXrMhYf8IKlKJ4AaABAg",
      "date": "2026-08-24",
      "text": "bismilah dapet buat bayar hutang",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.0
      },
      "id": "b41137ef6e4f7cff",
      "eventId": "auto-3578413cf039d3ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz74Zpqbc1NHAfy33N4AaABAg",
      "date": "2026-08-24",
      "text": "bismilah semoga rezeki ku kali ini buat beli pempres anak saya yang baru lahiran dan sehat selalu buat abangnya rezekinya lancar terus 🙏",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 1,
      "id": "24fb55bd38abc553",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-97dd6567aba2dbc7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEkXZac-XSwzawmaN4AaABAg",
      "date": "2026-08-24",
      "text": "bolak balik di tlpon mengganggu sekali 😂",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 7,
      "id": "7c0be1d69b4aa7d4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a78a16cf0d7d8645",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzZv77xHjJuaDmfe2l4AaABAg",
      "date": "2026-08-24",
      "text": "cara mengambil nya gimana bang ga muncul link daget nya",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "1af4bc7ac5e28a49",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6345877ba7f02907",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzAWLtrYfmCQcGQ_Ed4AaABAg",
      "date": "2026-08-24",
      "text": "pantang takut pantang malu. .. soal dc lapangan sgt sepele",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 24,
      "id": "49d84afeff6aefc1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f0e3502a4fb0128b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDSTnCVbFki-fMtmV4AaABAg",
      "date": "2026-08-25",
      "text": "Asuransi masih aja sama OJK ijinin ini gw patikan banyak yg galbay KLO udh galbay stop udh gak usah kabur diam aja udh pinjaman tanpa jaminan ini kuatkan mental u comeback kemudian",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 4,
      "id": "1229dc9453998898",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e44d288d1968294",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXJOL0HtKTa06cTy54AaABAg",
      "date": "2026-08-25",
      "text": "Bank = Pinjol = Mafia!",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 12,
      "id": "b7ddae40da2d4687",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7c3b5ffa67f14dd6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4N95WNJTEHZzIkB54AaABAg",
      "date": "2026-08-25",
      "text": "Bismilah buat operasi orang tua yg sudah kenak struk kak :(",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "fb9a27bd5f647b6d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c5032fed5da4defb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwYRXFum4TVjtwMnZB4AaABAg",
      "date": "2026-08-25",
      "text": "Bismillah semoga dapat buat berobat bang",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "3f924c1d841bcd06",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dba72cd08ee09b52",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4d1N8Zqe1BWBz4VN4AaABAg",
      "date": "2026-08-25",
      "text": "Bismillah semoga dapat dana kaget lagi butuh banget uangg",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "39a3c3b60d81e8f4",
      "eventId": "auto-773d6950188192bd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyRo9YqMbvVoqfg1wl4AaABAg",
      "date": "2026-08-25",
      "text": "Bismillah semoga saya juga bisa dapat dana kaget untuk biaya pengobatan 😊",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "2d1aad4225f867ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d9f5f4e5e3eb92f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy6QL1fLzCYPlBIK8F4AaABAg",
      "date": "2026-08-25",
      "text": "Bismillahirrahmanirrahim semoga ada rejeki buat keluarga kami.. untuk beli beras beli token bingung",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "399b3658c2e8a053",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c97fb9344e44bfec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "PVxRXmaSB4M",
      "date": "2026-08-25",
      "text": "DATA BUSUK ACC?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 24155,
      "id": "4a70b0aed7b5bf44",
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
      "contentType": "video",
      "externalId": "Dy1IltCbVVg",
      "date": "2026-08-25",
      "text": "GARA-GARA BANK MANDIRI!! 6 PINJOL KENA IMBAS!! YANG GALBAY DI PINJOL OJK MASUK!!",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 26646,
      "id": "8f2518197a6b4b39",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-144e7bf18f8d3ba8",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxxv3WjNzl2S5No3y94AaABAg",
      "date": "2026-08-25",
      "text": "Gerakan Galbay Nasional.",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 11,
      "id": "0aee82dfa61ef0fb",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f26dc9a30eb57a64",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFyF6ByxuoD_gBOcp4AaABAg",
      "date": "2026-08-25",
      "text": "Hadir selalau Abang ku ..",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 1,
      "id": "bb9421cd07f5e728",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bf4324219612e367",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6_iI9ITwiTi4Vm2Z4AaABAg",
      "date": "2026-08-25",
      "text": "Hadir semoga dapat buat nambah biaya anak sekaloh",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "e96fd6bd690e2676",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-60c24662ad7995e0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwS-G-C0cjPnSB7YWt4AaABAg",
      "date": "2026-08-25",
      "text": "Hebat mantap bang",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "1b6d17cbfe53ff5a",
      "eventId": "auto-89b38d3382f5fbd9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzkg33n20OzNj1tXZl4AaABAg",
      "date": "2026-08-25",
      "text": "Insya Allah setelah menikah ada rejeki melimpah lewat doa istri, next dikaruniai anak Insya Allah ada rejeki lewat kehadiran anak, sukses selalu dan sehat dan tetap waras bang",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "b97e7c696d9ee388",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7983ad4f7b82acb0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "xL7aHD28klw",
      "date": "2026-08-25",
      "text": "Jangan coba” PINJOL , usahakan dulu cari uangnya !!!  #grab #ojol #balikpapan #fyp",
      "url": "https://www.youtube.com/watch?v=xL7aHD28klw",
      "engagement": 133879,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "dc265b1f84f5886e",
      "eventId": "auto-3f27db0e542b6116",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8OXbt908vbrTv7W14AaABAg",
      "date": "2026-08-25",
      "text": "Kalau memang rejeki saya maka bantulah saya trimakasih konten yang baik untuk menghadapi hal hal yang terkadang keperluan dadakan",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "97f6c975cd7ae8d5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3178716a289238f8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwEJLF-6jmeMzy90ml4AaABAg",
      "date": "2026-08-25",
      "text": "Kayak nya ada kami sdh bangkrut beserta yg lain2 limit 300 RB  di stop",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 3,
      "id": "b8dfeb23bd39cb9a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53c20a3e6454e5a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyQHXx6B0NsPT63eh14AaABAg",
      "date": "2026-08-25",
      "text": "Klo kebutuhan mah alhamdulillah banyak bang, mudahan ada rezekinya deh aamiin",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "0023e15633125e10",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-78fb5ef46a5addaf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx21sSxUiwQMOyY14l4AaABAg",
      "date": "2026-08-25",
      "text": "Makasih baanyakk paduka infonyaaa",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 1,
      "id": "0a59d5939f7cd9c0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-afb56300e8727a60",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzIoQBkG86cW09gEVF4AaABAg",
      "date": "2026-08-25",
      "text": "Mertuanya hente menta link pinjol na bang😂",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "c44d8ea5fe0b9041",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-650b135263d042db",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw6xoHlUBa4KpV9Hbl4AaABAg",
      "date": "2026-08-25",
      "text": "Mudah mudahan dapat untuk saku anak dipesantren",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "81f896bd03190992",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-545a7628781b67ef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyAuGWAkcqB15JLezN4AaABAg",
      "date": "2026-08-25",
      "text": "PINJOL LEGAL DAN ILEGAL SERTA OJK ITU SAMA SAMA MAFIA...GALBAY SAJA, ACUHKAN...",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 10,
      "id": "e9b6b89926689aa6",
      "sentiment": {
        "risk": 75.2,
        "label": "negative",
        "negativeWeight": 4.1,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc0b4e893b7302f1",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUZ0vhWVb2f6r2CNZ4AaABAg",
      "date": "2026-08-25",
      "text": "Padahal orang indonesia itu soal hutang pasti bayar,kalau kaga bayar sudah pasti karena kendala keadaan.\nKenapa gue bilang pasti bayar karena orang indonesia juga butuh tempat yang bisa jadi tempat meminjam.",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 5,
      "id": "dbc907b83daaa86b",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-515854be3bdab14b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzbeHoRgeautHhXEB94AaABAg",
      "date": "2026-08-25",
      "text": "Pangandaran hadir paduka",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "d4ee2440b2b9cb25",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c51d8f84266c4878",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwcbKl9tB5VRpuGk9x4AaABAg",
      "date": "2026-08-25",
      "text": "Pinjol Legal OJK terornya bar bar semua,cuma mereka tidak mencantumkan aplikasi pinjolnya ketika nasabah gagal bayar atau belum mampu bayar dan pake no hp pribadi semua😊😊😊😊😊",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 5,
      "id": "025255a1aa3c5f32",
      "sentiment": {
        "risk": 78.7,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-89be9e43cb8b8816",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyAUaqxyr4qL4z6z-J4AaABAg",
      "date": "2026-08-25",
      "text": "Pinjol arus nya di apus aja. Jangan di kasi izin. Menyisakan rakyat. Udh bnyk korbanya.. emang minjam gampang. Bunganya mencekek..",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 4,
      "id": "bd988ebf1155559f",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4ca73a70573cc46a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9HgsCP-W77Gi3Pcl4AaABAg",
      "date": "2026-08-25",
      "text": "Pinjol/pindar harus segera di larang di indonesia..ini yg menghancurkan ekonomi masyarakat indonesia..",
      "url": "https://www.youtube.com/watch?v=SVbn_DXgrXc",
      "engagement": 11,
      "id": "7b7503c7f9888038",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-967ce4ce7c4970b9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwT3ONd-tt1baboSrt4AaABAg",
      "date": "2026-08-25",
      "text": "Rakyat nya banyak yg tercekik jerat pinjol..!!!",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 6,
      "id": "491c47d6dcf20837",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c74f363ed96b755",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxe8lX6akPrpMSD3XR4AaABAg",
      "date": "2026-08-25",
      "text": "Rakyatnya makmur tanpa pinjol😊",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 19,
      "id": "d679659b465ad538",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a3a33b7134ad231d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwxyE4VTlfFi1rTWmZ4AaABAg",
      "date": "2026-08-25",
      "text": "Sehat selalu paduka",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "3a26ce129c0ae814",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ba3ce0d29c67118c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyg0MjdLlwejTOiNUZ4AaABAg",
      "date": "2026-08-25",
      "text": "Selalu nunggu vidio2 terbaru nya bang",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "c6c7775784188d72",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e62edcbd2f0c52cd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwLjys6T4m2p_0zWvx4AaABAg",
      "date": "2026-08-25",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 139,
      "id": "66c56e4952642c17",
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
      "externalId": "Ugz7CXLZ8OCqjtiRZ354AaABAg",
      "date": "2026-08-25",
      "text": "Semoga dapat ya allah. Buat bayar cicilan motor",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "c263610c3964ae72",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ca54624a0a0bb0f2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxpj6bIwybjMBfzvk54AaABAg",
      "date": "2026-08-25",
      "text": "Siap mudah mudahan rejeki anak ke 2 saya🙏",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "a59348693750fbd6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a827ae5f8df1003b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz5UyW8vz3RelOLd754AaABAg",
      "date": "2026-08-25",
      "text": "Terimakasih abangku .. anda benar benar membantu mental saya hadapi Pinjol.. moga abang tetap sehat dan bugar 💪",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 4,
      "id": "c010395740048ed3",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d8b9eee463468233",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw56G_bZ-3dtqQZBmN4AaABAg",
      "date": "2026-08-25",
      "text": "Wah samawa bang semoga selalu  lancar luncur sampai hari h",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "88f8f534f9aeabe4",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-629710040931b309",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOdLWSIt00sQ_bXex4AaABAg",
      "date": "2026-08-25",
      "text": "Ya Allah smoga sya bisa dapat, sedikit tidak bisa blikan anak sya pempers",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "08aa4753a6d6da98",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5bf623d1db5b8b40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwM7g0E7g8z_NqiNU94AaABAg",
      "date": "2026-08-25",
      "text": "Ya allah semoga rezeki buat bayar motor buat ngojol🤲🏻",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "43ffbf17036b4226",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d2f38828de72ecb0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwAFI54AgFrYIqGwgZ4AaABAg",
      "date": "2026-08-25",
      "text": "Yang namanya bank  ya riba bisa menyebabkan gila",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 44.4
      },
      "id": "3330187d5e5ee618",
      "eventId": "auto-5ccfc9f9ec73479d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzlQ6n-pRuiIRr6eOJ4AaABAg",
      "date": "2026-08-25",
      "text": "bismillahirrahmanirrahim insyaallah dapet buat bekel adik saya di pesantren",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 1,
      "id": "06f45d148a8911bf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1eaca4a7cc6016e0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxLGCDorkZas1ZE80F4AaABAg",
      "date": "2026-08-25",
      "text": "makin kesini pemerintah kita makin kesana yahh hduhh parah emg, katanya kdu manut pemerintah lah pemerintah nya aja kek t*ii apanya yg harus dipatuhi wkk🙇🏻‍♂️😈",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 2,
      "id": "b73b91aa48c5e961",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d94f4d54eefc5071",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyF_yGLLC2SKLK61Up4AaABAg",
      "date": "2026-08-25",
      "text": "next konten cara negosiasi nya kalo pas bayar sisa hutangnya bang",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 1,
      "id": "d6ef75e9ab17af12",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f428fcc41d49e10c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwLXZS2KnRxQAfhADt4AaABAg",
      "date": "2026-08-25",
      "text": "pinjamyuk di Jateng udah ada bang saya di Blora sudah di Datengin padahal saya pinjam cuma 700k dan itu jadi 1,1jt",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 4,
      "id": "a923ead85abe6c4c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d927091f0d66b9b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwuXpGe6cDtHbdMFqN4AaABAg",
      "date": "2026-08-25",
      "text": "sehat2 yah bro... pertahankan akal sehat kita ..  DC itu kentut...abaikan saja, ndak usah di hiraukan... pake apps2 yang berguna u/ menghindari panggilan... itu udah cukup kok..",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "2df23a7f4436f82f",
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 1.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cd7ad9f885508bf0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4LMHgPDbhiHZXH7N4AaABAg",
      "date": "2026-08-25",
      "text": "skrng bnyak minjol buat makan",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 8,
      "id": "4783f6b125def441",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e00a4e68fb83e437",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyrTvEnKkCI3hJmec14AaABAg",
      "date": "2026-08-26",
      "text": "Bismillah Semoga dapet buat lunasin hutang cari kerja masih belum keterima, moga ada rezeki dan abangnya diberikan rezeki yg lebih",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "e561400205f32e5e",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6aa010db7d16e5cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzA0kNxcDu5YxsP0hx4AaABAg",
      "date": "2026-08-26",
      "text": "Bismillah semoga bisa dapet dana kaget buat biaya pengobatan paru paru dan Lambung akut tiap bulan amin ya allah semoga di dengar ❤",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "d70555ee5090f77b",
      "eventId": "auto-b98cce5bd286d2b0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxwNErGVtOXzzO0sUZ4AaABAg",
      "date": "2026-08-26",
      "text": "Bismillah semoga dapet buat chekup bapa ke RS aamiin",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "400e2c868253f093",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-28cacd654a52922e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzmCt3OjVPZGS8k36F4AaABAg",
      "date": "2026-08-26",
      "text": "Bismillah semoga rejeki buat hajatan 1000 harinya ibu..",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "82ede473695a8674",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d2e2625c47f3d194",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxxKKIVE0spWhEx9QV4AaABAg",
      "date": "2026-08-26",
      "text": "Bismlillah...semoga dapet rezeki buat kasih ke ibu🤲🙏",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "ec30103c9b8ee94a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-44d55ba68d6b5e5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnzwYPPp3x5tdEIIV4AaABAg",
      "date": "2026-08-26",
      "text": "Bissmilah semoga beruntung...buat bayar tunggakan anak sekolah..🙏🙏",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "77a9c53e46cba98d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77fc7e90c41495ea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXeiSgYyzcAI7PCex4AaABAg",
      "date": "2026-08-26",
      "text": "Buat pulang kampung min udah 3 tahun di Rantau blum plng kendala di dana",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "a806dbbfbf2523bf",
      "eventId": "auto-42c8caff39f0b9d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwqe7QNdZ7EvE3CL6l4AaABAg",
      "date": "2026-08-26",
      "text": "FC Lapangan itu Biasa Sajah.Ga Gimana2.Galbay Yg Besar Jangan Nanggung.",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 7,
      "id": "c4693e5b01436e0f",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b442b7d2688fb0cc",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwJDeQ0wf7MQlJE3pJ4AaABAg",
      "date": "2026-08-26",
      "text": "Hadir bang moga bisa dapet rejeki buat kebutuhan anak",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "f0bdc1086f210d42",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-33996ace0faf036a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz2-i9Pep0zVFR_aVB4AaABAg",
      "date": "2026-08-26",
      "text": "Hadir selalu bang 😊",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "bb06ad7beddd78a3",
      "eventId": "auto-83dd6f077350fdb2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOo5hDq4-VXkE6alB4AaABAg",
      "date": "2026-08-26",
      "text": "Hilih ngetik di situ .kaga keluar di tungguin sampe 1jam juga",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "a659b74e9a4d467a",
      "eventId": "auto-8a9a5714062bf42b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4G0kKPiNKV4Gm4Fd4AaABAg",
      "date": "2026-08-26",
      "text": "Insya Allah dapet buat Nebus hp anak yang digadaikan amin",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "2df6d22cc4ee0dc6",
      "eventId": "auto-3d1109197c618c0a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFUgmrPboJNwB5DZ94AaABAg",
      "date": "2026-08-26",
      "text": "Insya Allah dapet, buat Nebus hp anak yang digadaikan",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "51dad13b73f60d6c",
      "eventId": "auto-3d1109197c618c0a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyp3LvWnFXkx9CPegN4AaABAg",
      "date": "2026-08-26",
      "text": "Jangan. Coba coba.  Pakai.  Pinjol  ka.  Nanti. Di. Tagi. Ka",
      "url": "https://www.youtube.com/watch?v=xL7aHD28klw",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "79164a76a0dee88b",
      "eventId": "auto-74e048892567801d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz7H6Uw6-4KRHOh1T54AaABAg",
      "date": "2026-08-26",
      "text": "Kunfayakun moga ad rejeki sy aamin.. Hdir sore bg",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "329efe1929877d36",
      "eventId": "auto-9dcce246998e560f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxpXaOKfGM_OtuEdnt4AaABAg",
      "date": "2026-08-26",
      "text": "Lancar terus bos vidionya",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "2778d27742b14ab9",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-55d5b7b05c766d3a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz-hIP6T46wfzYJ0vZ4AaABAg",
      "date": "2026-08-26",
      "text": "Lombok NTB bank jago ada DC nya",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 1,
      "id": "91293650a862a2c6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-866a83c66610f8fb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHMYc2SYOOPVKfL-l4AaABAg",
      "date": "2026-08-26",
      "text": "Muga\" dapet hadiahnya.dan untuk abangnya sukses terus",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 1,
      "id": "fe8f455e926d07dd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-858a9eb03db20ba3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxODSom5Ogbl4b9Qax4AaABAg",
      "date": "2026-08-26",
      "text": "Pak Bray,adalah Polisi yg baik,dia yg terus memberi edukasi & penyemangat kami para korban jebakan pinjol,...tks Pak Bray..🙏",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 4,
      "id": "6bd21a9b89fdbb18",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aaa2b2d2031e35c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZTTLXDFF05wLh7ON4AaABAg",
      "date": "2026-08-26",
      "text": "Paling top dah konten raja galbay",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 1,
      "id": "fb514ed6a1448798",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a378bd6d9a7ce72a",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx54r26Q9z-K34UWot4AaABAg",
      "date": "2026-08-26",
      "text": "Pinjem buat makan kak bli beras...krn g ad yg bs dijual ...suami kerja ojol...Pinjem sama org jg ga dikasih...sedang perut hrs di isi..Kerja jg udah kerja tp mo gmn g cukup bt kebutuhan lain",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 4,
      "id": "a6118496a7473f48",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-167a322618581d6b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnG7x9CnVaimFA8a54AaABAg",
      "date": "2026-08-26",
      "text": "SEMANGAT HAMPIR SEMUA GALBAY KOK JANGAN MALU DAN SEDIH 💯",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 10,
      "id": "325d3a303a2b6aee",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bfe0757fd76ee1cc",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQFi2Shd0-l7wteXF4AaABAg",
      "date": "2026-08-26",
      "text": "Salam min sehat selalu baru hadir lagi bismillah moga dapet daget buat sehari hari",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "d0f7906bffeb1167",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b200064733650e14",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy-ZrysvBenG_U9SNZ4AaABAg",
      "date": "2026-08-26",
      "text": "Saya jg terpaksa pinjam ke pinjol Krn pemasukan lg minim banget\nJualan sepi akun ojol sepi sedangkan yg hrs dibayar banyak\nBerhubung gak punya warisan rumah dari keluarga jd terpaksa ambil KPR dan Krn pemasukan yg lg minim akhirnya terpaksa ke pinjol, ditambah motor rusak trs ke begkel perbulan habis lbh dr 500 bahkan bulan kmrn sampai habis 2jt lbh untuk perbaikan motor (ganti ECU)\nGak semua yg pinjem ke pinjol untuk judol, untuk gengsi atau sembarang pinjam tapi ada yg bnr2 Krn terpaksa jg",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 14,
      "id": "cf6b62d0522527b0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-86753b06c591bee5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyMwImd56wtpRFt6Ot4AaABAg",
      "date": "2026-08-26",
      "text": "Sehat dan berkah selalu paduka Raja Galbay....aamiin",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "344ec7a642858206",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-93d04c7627ea9ec8",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw7dOOy-i_aHJBG1YR4AaABAg",
      "date": "2026-08-26",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 149,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "fc9d29e224d5767d",
      "eventId": "auto-7539136796e5fda4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz__SLtJR-T8UV4Yph4AaABAg",
      "date": "2026-08-26",
      "text": "Semoga ada rezekinya buat saya kaka buat beresin kamer yang sering bocor😊",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "7547e02b1914b1bb",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-621ad55f202cca5c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZaB0V4v7BVlMNPYR4AaABAg",
      "date": "2026-08-26",
      "text": "Semoga rezekinya ya ya bang, untuk anak",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "02320f9f6ea08369",
      "eventId": "auto-bf3b781e1ac027e2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "G3mkUBdInX0",
      "date": "2026-08-26",
      "text": "TANPA BI CECKING! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=G3mkUBdInX0",
      "engagement": 36010,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "e5a9a72287518759",
      "eventId": "auto-f004b55e0c0ac1c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyoCXNRQj6xd5KfqRh4AaABAg",
      "date": "2026-08-26",
      "text": "TERNYATA OMONGANNYA SELAMA INI BHG,.YG GAK TAKUT ATAU APALAH,.BUKTINYA MAU NIKAH TAKUT JUGAAA KAN",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 13,
      "id": "9ef319cdb149a338",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-91fe07ca6f3a2f90",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyToVH1DzdZ_LmGpkF4AaABAg",
      "date": "2026-08-26",
      "text": "Terima kasih indukasi nya.lapor ke OJK jg sia\" lebih baik galbay.❤",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "2ee201d49725a722",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8615426692c669f1",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxitDM_ociG8ewrfVB4AaABAg",
      "date": "2026-08-26",
      "text": "YUP di daerah bandung barat, di datengin gk bg?",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 3,
      "id": "2d3173d605306d1f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f41582af084e6bfb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz7RFA9GL1wGgMg1hV4AaABAg",
      "date": "2026-08-26",
      "text": "bismillah buat bantu berobat ibu saya sedang di rawat bang sakit darah tinggi",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "18099281aec6098d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-375b6cb423837b4f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwTyDxRlvVQMEKDfrd4AaABAg",
      "date": "2026-08-26",
      "text": "bismillah dape daget buat nambahin benerin motor yang jebol",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "c24c0a7ebc2295bb",
      "eventId": "auto-fb712a554197dc3a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzybdJYp52tfw7NtSF4AaABAg",
      "date": "2026-08-26",
      "text": "bismillah semoga rejekinya buat bayar cicilan motor",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "aab3a01ba7a1691d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-023e06b1d55ec863",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz8gg1ysz6ya_qK0dp4AaABAg",
      "date": "2026-08-26",
      "text": "bismillah smoga kepilih buat ngasih ke orang tua",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "8554cc31e250dbcd",
      "eventId": "auto-3143f8995cc00bd8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBR9fJpt8c75I0e0d4AaABAg",
      "date": "2026-08-26",
      "text": "mau dong bang dana kaget nya , buat bayar pinjol bang , pusing bngt kejebak pinjol bang",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "78bf1bfa3447e462",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-97a824e195d6048b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzGkwydT0dTDnXcrQ14AaABAg",
      "date": "2026-08-27",
      "text": "Anjai gercep",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 4,
      "id": "e7ae6830ed64c1c6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d25636078775ad83",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "pQ0x27qVMa4",
      "date": "2026-08-27",
      "text": "BAHAYA SERVIS HP! Data Pribadi Dijual Ke Pinjol Ilegal Demi Modal Depo!",
      "url": "https://www.youtube.com/watch?v=pQ0x27qVMa4",
      "engagement": 63176,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 60.5
      },
      "id": "77a38c534bd14e2f",
      "eventId": "auto-2a9f2654c1f0dec1",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz0F7a_3XWHTzyiZXN4AaABAg",
      "date": "2026-08-27",
      "text": "BISMILLAH KEBUTUHAN SEHARI-HARI HIDUP (OPSIONAL)",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "d57eab18f96b9601",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-91482519d5374e98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy01R3i9O5C-l6FWoN4AaABAg",
      "date": "2026-08-27",
      "text": "Bang apa kah ada DC d wilayah Jawa Barat, aplikasi pinjam duit, kredit pintar, easy cash bang,,ibu aku ngalamin pinjol saat ini🥲",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 4,
      "id": "6a6b2a71ed48d9d7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e46a05316ad91eb9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJUSvVjazLOuieE-R4AaABAg",
      "date": "2026-08-27",
      "text": "Bismilah semoga ada Rezeki nya saya Anak Yatim piatu",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "3b74862d3e2d081b",
      "eventId": "auto-59ce35c105e9c3a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyC2Mn_l2Fw6Vh9ljB4AaABAg",
      "date": "2026-08-27",
      "text": "GALBAY MANDIRI SOLUSI",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 5,
      "id": "dd8f640c16792997",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fb4d46671bb3f166",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzl1ZAkmnQ-yC8RJTt4AaABAg",
      "date": "2026-08-27",
      "text": "Hadir Abang ku ..",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "874e4462a4a0a458",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ad9f8925e146bc62",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxoV9ymEqu4vDApwGF4AaABAg",
      "date": "2026-08-27",
      "text": "Hadir abangku. Semoga bisa dapa buat bayar ujian traning alat berat. Amin🙏🙏",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "45829b201db115ae",
      "eventId": "auto-15a087a1326ca424",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwhs1KfPVI_bWV64bx4AaABAg",
      "date": "2026-08-27",
      "text": "Hadir bg. Buat kebutuhan hari hari",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "4ff4e365c33489d8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-56d4872687859457",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyuo4pkV7YI3_-8BoF4AaABAg",
      "date": "2026-08-27",
      "text": "Hadir bos mudah mudahan dapet buat bayar wifi😅",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "ce904489e510319f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3c8b75be81461fa8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwLGjr1tN0dUL4SqL94AaABAg",
      "date": "2026-08-27",
      "text": "Hadir selalu bang",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4994b6e94816a4c3",
      "eventId": "auto-83dd6f077350fdb2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwRI2Fc-3pckq0hIeN4AaABAg",
      "date": "2026-08-27",
      "text": "Hadir selalu bang buat lu mah",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "0afd937bf9b59d47",
      "eventId": "auto-d01376953b56befd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgynwmPRDpGLs_8YJqR4AaABAg",
      "date": "2026-08-27",
      "text": "Hadir.kebutuhan modal kerja",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "2f22c12b7ae06532",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-73ce3c5145f41107",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxfxwBytnBBdJe8GfJ4AaABAg",
      "date": "2026-08-27",
      "text": "Hapus pinjol, sangat meresahkan ancamannya",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 1,
      "id": "0dbee4a2b5cd740a",
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1cbfd3a3f335169b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyH3-GDD2a6YVGAuRx4AaABAg",
      "date": "2026-08-27",
      "text": "Itu bukan lumer, bkn stengah mtang, itu mentah dungu😂",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 22,
      "id": "d1625953f4686399",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e80c419158a4971b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgweIVO6ktpifLS7iEh4AaABAg",
      "date": "2026-08-27",
      "text": "Kagak bakal berani dia nyebut aplikasi nya",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 0,
      "id": "2a8e689e5a3c5efb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-46da5023118a364d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwDHNyVkPamj9bcvOB4AaABAg",
      "date": "2026-08-27",
      "text": "Kerja masih seminggu lagi ke gajian udah gak punya duit mana merantau 🤧",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "735d891b5482e073",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1eb816ab8f1a5d52",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4VUtHt_Gy5V4Qw6N4AaABAg",
      "date": "2026-08-27",
      "text": "MANDIRI BANK ternyata kerja sama dg pinjol, isinya para rampok berkedok mandiri",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 12,
      "id": "611710b170926008",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0127d4e52534b9b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxY8hnlreYn4PgJnDp4AaABAg",
      "date": "2026-08-27",
      "text": "Mudah-mudahan rezekinya 🤲 buat beli seragam sekolah adik",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "5fd4e0d814d7768a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6db30cf7016bc983",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "f8TYuiSm1Lg",
      "date": "2026-08-27",
      "text": "NEKAT BIKIN USAHA KUE BALOK POSISI MASIH TERIKAT PINJOL?!  #kuliner #visitkuliner",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 28964,
      "id": "afbb96f9b2da37e9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-842f3c25dd993fa6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxPnEvDjcG0zz7upW94AaABAg",
      "date": "2026-08-27",
      "text": "Ojk MENJERUMUSKAN ..HAPUSS OJK",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 4,
      "id": "e8b8d9fe212f6d23",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aca363aed77550fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUvO3Mfjsh9_Z2xoZ4AaABAg",
      "date": "2026-08-27",
      "text": "Panutan semoga rezeki uda paket komplit bg 😅",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "35ceed102239b123",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aeee699605f71cb0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4NxD6n3NRKVDMxXl4AaABAg",
      "date": "2026-08-27",
      "text": "Saya doakan Yg ngizinin pinjol ada di indonesia dan semua perusahaan pinjol yg ada di indonesia beserta karyawan pinjol baik FC maupun DC terlebih pejabat perusahaan pinjol  semoga dia mati mengenaskan beserta seluruh keluarganya. Ada yg mati ketabrak kontener ada yg mati ketabrak kereta. Ada yg mati ketimpah bangunan besar. Ada yg mati kena penyakit menakutkan.",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 7,
      "id": "6b05a00584649985",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dcbb6c0098f81c0c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVwxYj3C8BNrhl1tV4AaABAg",
      "date": "2026-08-27",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 72,
      "id": "315c0e498354cc15",
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
      "externalId": "UgyhX_RfSf67GeF6bil4AaABAg",
      "date": "2026-08-27",
      "text": "Semoga makin sukses dan makin berkembang kak cannelnya🙏",
      "url": "https://www.youtube.com/watch?v=PVxRXmaSB4M",
      "engagement": 0,
      "id": "bb92ae88b25f01f5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-45756093d20d3dd8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9aB_zp2TFGmhTlK54AaABAg",
      "date": "2026-08-27",
      "text": "Setuju Lanjutkan boss kasian banyak orang bundirr gara2 pinjol",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 2,
      "id": "66381514fb244271",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a9c0d44cd52c2bb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "R_S3jRaZU0k",
      "date": "2026-08-27",
      "text": "Tanpa BI CHECKING?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 24523,
      "id": "e56f8066b743b18f",
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
      "externalId": "Ugw5szIIe80J_IrqcxJ4AaABAg",
      "date": "2026-08-27",
      "text": "Terima kasih abangku,sehat dan sukses selalu",
      "url": "https://www.youtube.com/watch?v=LTXI5rPskV8",
      "engagement": 2,
      "id": "c4517e3182c61d2f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a047d6077cf0f21",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxuKVj4gOrxJdlZyrB4AaABAg",
      "date": "2026-08-27",
      "text": "Tinggalkan  Bank  MANDIRI  sekarang juga.\nTidak AMAN  dan tidak NYAMAN",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 3,
      "id": "6928daccbf54239e",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d0792eafd1c437da",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy0m9nH1YZXl_Tpb6B4AaABAg",
      "date": "2026-08-27",
      "text": "Wooyy lu raja pinjol sesungguhnya.. mantappp",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 4,
      "id": "404db75955191633",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4b5dbb32792cb344",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwe9IZDySY2a56IXal4AaABAg",
      "date": "2026-08-27",
      "text": "aku tidak akan menyerah....bhhhhh😁😁😁ku kasih kempol trussss...",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "53703c4b7674de8c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f410a03c59581b3a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxtPbRFgLrwTNimQVh4AaABAg",
      "date": "2026-08-27",
      "text": "bang didaerah kota Cirebon sdh  ada Dc Pinjamin blum ya bang",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 3,
      "id": "67d1b8c39885349e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e6a1a96f917bdf0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxb14QWXyIdCBfrVvB4AaABAg",
      "date": "2026-08-27",
      "text": "bismillah mudahan ada rezeki saya, insyaallah usaha tidak menghianati hasil pokoknya semangat terus buat like share dan berkomentar😊😊",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 1,
      "id": "7143d6b314aa9708",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fce626d49df0740e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwN7BNqSRGytOTqZap4AaABAg",
      "date": "2026-08-27",
      "text": "bismillah semoga dapat buat bayar uang spp",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "9ad953c62d1e27bc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe387b4dea101940",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxMS1UwnX7IQg-y2ad4AaABAg",
      "date": "2026-08-27",
      "text": "hadir bang,udh akhir bulan keperluan buat rumah banyak😭",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "2996358404071481",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b2a217d6df39a677",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxrkjNauB2W4zivF-54AaABAg",
      "date": "2026-08-28",
      "text": "Baru tau deeh,ternyata pinjol dari mandiri,bagus lah di boikot rakyat.",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "04e1fa6732cfe864",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe9391c53b3d557c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHf4gsKgtZQBRI3rZ4AaABAg",
      "date": "2026-08-28",
      "text": "Bismillah Semoga dapat dana kagetnya .Semoga rejekinya mengalir terus bg , sangat membantu bagi yang membutuhkan 🎉",
      "url": "https://www.youtube.com/watch?v=G3mkUBdInX0",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 44.4
      },
      "id": "ab61e7958977e54b",
      "eventId": "auto-ef25af85a2bf89eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxu32sqdfw45qrILtd4AaABAg",
      "date": "2026-08-28",
      "text": "FIX SUDAH!  TARIK DANA DARI MANDIRI..! STAY GALBAY KAWAN KAWAN!",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "d8deacce0efd0468",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9ffaa8b8c9077a42",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz2gGKp0mhSTx6i1kZ4AaABAg",
      "date": "2026-08-28",
      "text": "Gak ada adonan terigu setengah matang masih cair gitu, kalau masih cair gitu namanya ya mentah, cuma kena panas bentar doang",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 37,
      "id": "38451078ad6b73b8",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ae8ecd2a326ad8bc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzEDpgowMJSK41-FY94AaABAg",
      "date": "2026-08-28",
      "text": "Hadir bang ..\nBuat nambah biaya sekolah anak",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "ca6df7e970cdb8e0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-be7409fb523f88e0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz22rMaidxyW3ZXqat4AaABAg",
      "date": "2026-08-28",
      "text": "Hadir bang dari flores 🙏 \nSemoga dapet buat beli pempers anak 🙏",
      "url": "https://www.youtube.com/watch?v=V2aZzYPZUj4",
      "engagement": 0,
      "id": "96d058d4938b7f55",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b3a43084647d8a40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZONnA2kGdI8zU64t4AaABAg",
      "date": "2026-08-28",
      "text": "Hadir bang semoga 🎉 biar bisa modal cari kerja lagi",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "7050c883d0b00eb0",
      "eventId": "auto-db7d4aba609d17d6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy0yatwDk6-ATrpHL14AaABAg",
      "date": "2026-08-28",
      "text": "Hadir bang..semoga dapat buat belanja harian..",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "4b4e085aaa92f98c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f995a9cc904bd26f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxC7moILbfED2gdIJB4AaABAg",
      "date": "2026-08-28",
      "text": "Hadir pendatang baru bg",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 1,
      "id": "1f365a4b093ba792",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0a48845c0a20c1b4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgweKQqZqaqztYMnCHV4AaABAg",
      "date": "2026-08-28",
      "text": "Jujur look sama rasa enak tapi itu masih mentah beresiko sakit perut 😊",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 25,
      "id": "d6c2cbe47399b11b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-730c8b6d786b8b74",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4_TOoDdNgDSzd1aR4AaABAg",
      "date": "2026-08-28",
      "text": "Knp sdh di ikuti tutorialnya tp tdk bisa muncul",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "1b3edbdd3ef9d191",
      "eventId": "auto-1410791c9762f4da",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyTVwtigAlQ8beR_Bx4AaABAg",
      "date": "2026-08-28",
      "text": "Luar biasa Bang, memang lebih bagus di kasih tau sebelum nikah.semoga lancar sampai hari pernikahan ya mas",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "6e13fe415236418c",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ba15fdf9c93a4782",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQ_Q0xrLg-V8rh1ap4AaABAg",
      "date": "2026-08-28",
      "text": "POLISI SUKSES MENGACAUKAN BANK MANDIRI. OKNUM POLISI YG TERLIBAT PEMBLOKIRAN REKENING HARUS DITANGKAP, KARENA BUAT KISRUH INDONESIA.",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 3,
      "id": "a76a2eb89f328843",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9768ea8a7b0156e5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy04nH2dfmN1NfaTkp4AaABAg",
      "date": "2026-08-28",
      "text": "Penipu",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 2,
      "id": "391a12b27ddf5a46",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9beee5c530954017",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCRhT-WC0J23b7tCV4AaABAg",
      "date": "2026-08-28",
      "text": "Semoga Indonesia bebas dari Penjol🤲",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "0dcb2d101a7c8e28",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3efcfcae27e987bf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyqYGWxNFBozTmdpfx4AaABAg",
      "date": "2026-08-28",
      "text": "Semoga samawa y bang...",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "6dae71cfb4b99f4b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7bfe5004d5ef5c40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwEt-ks6Tkdne0o3Mx4AaABAg",
      "date": "2026-08-28",
      "text": "bismillah semoga dapat untuk beli sepatu sekolah",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "9a086bae809f8e15",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-70b23d0b1f8fc4ed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwF3KHR12SMLhwZpgV4AaABAg",
      "date": "2026-08-29",
      "text": "Basmi pinjol yg gelap yg menekan masarakat  yg menyebar kan yg tidak senonoh",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 0,
      "id": "f4c5de5612137bf6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aa6442ad870da5fc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzlPlp-WtDHRfPk7_F4AaABAg",
      "date": "2026-08-29",
      "text": "Berkah selalu bang.. banyak rejekinya..🤲",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "2ed50d26e827b944",
      "eventId": "auto-b5f96c9e338cc0f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZ1Xh7mMPiqlZdcSZ4AaABAg",
      "date": "2026-08-29",
      "text": "Best banget pak. Sukses selalu pak . Sehat dan semoga selalu dalam perlindungan Allah SWT.aamiin",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 0,
      "id": "e87a836ce58edaa1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e623aa8eface2bcb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwhjUiCIeFC-OACuVx4AaABAg",
      "date": "2026-08-29",
      "text": "Biang keroknya..... \nnggak sih😁\n#BOIKOTBANKMANDIRI",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "edf4285180c22e46",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f780c558f289b2dd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzz9-t8-GGAYY_AywV4AaABAg",
      "date": "2026-08-29",
      "text": "Bismillah semoga ada rizkinya buat ibu hamil 🙏dan lancar terus abangnya",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 1,
      "id": "ff84b9660d9a318b",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d94a334c9f63f82",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjryShcSn2A3EL50h4AaABAg",
      "date": "2026-08-29",
      "text": "Bismillah semoga rejeki buat ongkos pulang kampung😊",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "75d171e3a152af94",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-697024654de76729",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwqCMbnZALMR3CMAb14AaABAg",
      "date": "2026-08-29",
      "text": "DONGO , itu mentah oon bukan lumer",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 1,
      "id": "1043dae2c38d6653",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a82dbcf65b052f9c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxiFjJYKMC7DwPEsLh4AaABAg",
      "date": "2026-08-29",
      "text": "Galbay nasional duit mafia China biar bangkrut......",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 0,
      "id": "e118db749ffa031b",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ed6083d9cb8db0e",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9N6uJu8P3G53IALh4AaABAg",
      "date": "2026-08-29",
      "text": "Hadirrr banggettt abang akuuuu",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4f69cd847cf3edf5",
      "eventId": "auto-3c3d0f96094288ea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxY3XyydPavf0kx9hd4AaABAg",
      "date": "2026-08-29",
      "text": "Konten nya sangat bermanfaat bagi semua orang yg sedang membutuhkan bang , lancarr bang sehat selalu 😊😊",
      "url": "https://www.youtube.com/watch?v=G3mkUBdInX0",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 43.0
      },
      "id": "d1e98f3a864abccf",
      "eventId": "auto-316d17e0848d4c24",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwakGbLAEDkZmaIThN4AaABAg",
      "date": "2026-08-29",
      "text": "Ngeri juga ya pinjol waduh waduh",
      "url": "https://www.youtube.com/watch?v=Dy1IltCbVVg",
      "engagement": 0,
      "id": "0fa7dccef44ffdaf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d1f1a3f88de3bb94",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxgcsN9SviyH9pVKjF4AaABAg",
      "date": "2026-08-29",
      "text": "Sangat mengedukasi semoga pemerintah segera menindaklanjuti tutup semua pinjol dan meng relokasi dana pinjam untuk masyarakat melalui bank2 pemerintah dgn bunga rendah..",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 0,
      "id": "2bf57b71b27560bb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6908aadce0dbe72e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyUY3iecKtcPsca_jN4AaABAg",
      "date": "2026-08-29",
      "text": "Sebanyak orang pinter di sini....cuma pak bray aja.....ni yg tau bhaya ny \nLanjut pak bray.....perjuangan",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 0,
      "id": "74756747fbc1bc87",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6840c24926ec64cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzNMZoCfiHyL0Y86rx4AaABAg",
      "date": "2026-08-29",
      "text": "Selamat ya A semoga samawa... trimakasih atas kontennya bisa jadi edukasi bwt banyak orang...semenjak nonton konten Aa sy lebih siap dan kuat menghadapi amanah hutang ini",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "5c2f766ef2c01477",
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-637cf2cd0fe454dd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "cC9mKRYsCko",
      "date": "2026-08-29",
      "text": "ditelpon tim sar kirain ditelpon pinjol 😂#short #shortlucu",
      "url": "https://www.youtube.com/watch?v=cC9mKRYsCko",
      "engagement": 38661,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "c25e2c94ee713820",
      "eventId": "auto-90409d890fdec334",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzvwoKB1KH2xdBVYzR4AaABAg",
      "date": "2026-08-30",
      "text": "Bismillah mudah\"an ada rejekinya buat bertahan hidup",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "c0d747628bb66e56",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f17dde1df22ab02a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx9Cvm87LueIe79fV14AaABAg",
      "date": "2026-08-30",
      "text": "DM senyum2 liat ini😂",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 2,
      "id": "efeb7c02c056d104",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1b085f662e12af90",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpQWqUtca8FQGHHRN4AaABAg",
      "date": "2026-08-30",
      "text": "Di kira teror paylater",
      "url": "https://www.youtube.com/watch?v=cC9mKRYsCko",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 67.5
      },
      "id": "3a907c8108da7c51",
      "eventId": "auto-8d610954d01b1478",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzlvyg1t9x8BJHtNtx4AaABAg",
      "date": "2026-08-30",
      "text": "Hadir selalu Abang",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "cb650093882b46e0",
      "eventId": "auto-a9dfeb80b560777a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxmfNTlUh0Ntt4nHAF4AaABAg",
      "date": "2026-08-30",
      "text": "Saya gk hilang ada tlp. Gercep ngangkat. Takutbada kirimin nasi dari ibu/mertua",
      "url": "https://www.youtube.com/watch?v=cC9mKRYsCko",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "6b8f16982ce453c5",
      "eventId": "auto-48398977bb5a3ecd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgweuVX0NtBj7iNBGaZ4AaABAg",
      "date": "2026-08-30",
      "text": "Tapi adonan kalo masih cair kaya gitu katanya bahaya karena adonan tepung sama telur masih mentah\n\nSorry kalo salah🙃🙃",
      "url": "https://www.youtube.com/watch?v=f8TYuiSm1Lg",
      "engagement": 0,
      "id": "ed11060e0e0a07e9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-873657e1ac2bcb8e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgygDV3JYLDtvbPRegR4AaABAg",
      "date": "2026-08-30",
      "text": "bismillah semoga dpt buat kebutuban makan berdua sama ibuk😇",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "f53db9cc367c08a0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ce59e32a23fe1ac8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4fDTin8Qskwbsr2B4AaABAg",
      "date": "2026-08-30",
      "text": "ngeri DC😂😂",
      "url": "https://www.youtube.com/watch?v=cC9mKRYsCko",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "4a9c5c9d558f32d8",
      "eventId": "auto-418acfb15b4a7845",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzX-CG5CY_q4wce9O14AaABAg",
      "date": "2026-08-30",
      "text": "pendatang baru hadir bang",
      "url": "https://www.youtube.com/watch?v=5rJoPMHZh3I",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "2a4dbc62851ed974",
      "eventId": "auto-2f389c8157a83d80",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxx3JIJnahgwDoLDbV4AaABAg",
      "date": "2026-08-31",
      "text": "Bismillah butu banget buat bayar hutang dan popok anak 🙏",
      "url": "https://www.youtube.com/watch?v=R_S3jRaZU0k",
      "engagement": 0,
      "id": "e43eab2bee3a91f5",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-20f6dbb7865a059b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy-RqQH_jx4dsFhueV4AaABAg",
      "date": "2026-08-31",
      "text": "Hapuskan pinjol di negara indonesia ini ..pemerintah jangan tutup mata trus buka lah dan bantu masarakat kecil ..jangan hnya pejabat saja yg kau lindungi ..bantulah rakyatmu",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 0,
      "id": "c047fd4b0e3408ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc0b4df6a3cc26a0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwf8rZlOfpGU2tN5iZ4AaABAg",
      "date": "2026-08-31",
      "text": "Semangat bang",
      "url": "https://www.youtube.com/watch?v=SmUCQHlZxA8",
      "engagement": 0,
      "id": "f20765246300d651",
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
      "externalId": "UgwkRCfdb2_lzxEF1s54AaABAg",
      "date": "2026-09-01",
      "text": "Berarti medan aman ya bg?",
      "url": "https://www.youtube.com/watch?v=l1lBWsG_N38",
      "engagement": 0,
      "id": "d463f7b3b5bc1333",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67e018689755062b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJ6tiTXXLV44KWtwx4AaABAg",
      "date": "2026-09-01",
      "text": "Pak bray.... perusaahaan banyak yg menyuruh mengundurkan diri karyawan yg kena galbay di pinjol itu krn DC nya menagih ke kolom komentar akun sosmed perusahaan karyawan itu bekerja.. alasannya reputasi perusahaan jd tidak baik... mungking ini yg buat perusahaan tdk nyaman.. tolong bantu cari solusi agar menindak DC pihak kedua yg menagih tdk sesuai SOP dan aturan dari OJK..",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 0,
      "id": "2c9ae8a1107131f0",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e2e4cc99fe9f0d23",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx31lxNNi4XCqHNTWV4AaABAg",
      "date": "2026-09-01",
      "text": "Sangat membantu pak polisi 😢😢saya sedang susah kalo pinjam ke sodara ke teman harus punya banyak seribu alesan makanya dari itu lebih cepat minjol 😢😢😢",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 0,
      "id": "c22d7e61a7dd972d",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8435279f25015ed3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyx27wVxhX80y45el14AaABAg",
      "date": "2026-09-01",
      "text": "Untuk urusan cari uang betul-betul masih jauh lebih baik diera Orde Baru.",
      "url": "https://www.youtube.com/watch?v=8NgJ95m5i6U",
      "engagement": 1,
      "id": "c6a74bcd692f03c6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-57689f2467ee7db9",
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
      "gdelt": "<urlopen error timed out>",
      "kaskus": "Collector ran successfully but found no relevant records.",
      "reddit": "Reddit searches failed: indonesia: HTTP Error 403: Blocked | finansial: HTTP Error 403: Blocked",
      "x": "X_BEARER_TOKEN is not configured"
    },
    "socialClassifier": {
      "method": "deepseek_credit_social_v1",
      "status": "ok",
      "inputCount": 516,
      "classifiedCount": 110,
      "irrelevantDropped": 130,
      "model": "deepseek-chat",
      "fallbackCount": 276,
      "labelCounts": {
        "NEG": 52,
        "MIX": 4,
        "POS": 54
      }
    }
  },
  "sourceMode": "live:multi-source-v2.1"
};
