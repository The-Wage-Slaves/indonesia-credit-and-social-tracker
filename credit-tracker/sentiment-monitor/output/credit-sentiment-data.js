const CREDIT_SENTIMENT = {
  "schemaVersion": 2,
  "status": "pilot-pending-human-review",
  "asOf": "2026-09-15",
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
      "detail": "Collected 285 relevant records/signals."
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
      "detail": "Collected 517 relevant records/signals."
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
    "suppressedCandidateCount": 37,
    "acknowledgedRetained": [],
    "acknowledgedSuppressed": [],
    "pendingHighSeverity": []
  },
  "weeks": [
    {
      "weekStart": "2026-08-31",
      "weekEnd": "2026-09-06",
      "fearIndex": 73.2,
      "dataStatus": "complete",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 70.0,
          "volume": 84.0,
          "negativity": 52.5,
          "itemCount": 65,
          "negativeShare": 5.7,
          "uniqueSources": 42
        },
        "social": {
          "score": 72.0,
          "volume": 85.0,
          "negativity": 59.0,
          "itemCount": 239,
          "negativeShare": 31.2,
          "platformCount": 1,
          "engagementUnits": 339.5
        }
      },
      "components": {
        "newsVolume": 84.0,
        "newsTone": 52.5,
        "socialVolume": 85.0,
        "socialNegativity": 59.0,
        "severeEvent": 86.0
      },
      "articleCount": 65,
      "socialPostCount": 239,
      "uniqueSourceCount": 42,
      "socialPlatformCount": 1,
      "negativeArticleShare": 5.7,
      "negativeSocialShare": 31.2,
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
        "news": "Pilot week-on-week ratio: 8.25x; 2/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 340.49x; 2/8 baseline weeks."
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
          "id": "auto-0644795830c2ffd7",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "9efc7142954dcd9b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cukup 1 kali gua pinjol jera.\nPinjem 300 bayar 788 Alhamdulillah udah lunas.\nTiap hari coy di spam telpon/ chat berasa k",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1dbc2c93e11141f2",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "a7970c1f3882d4d1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Samir, diteror trs telat sehari aja dah dihubungi banyak no",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35196b2460c43035",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "85c8a3a0bdb12e1c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya ada galbay telat sdah 3bulan di indosaku total pkok 7jt Sruh balikin 10.350rb lunas tnpa telat,akhirnya karena skem",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4fbfa703330280f9",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "c7868b06d2ce7911"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah sampe hari ini blom prnh nyicip pinjol & di HP sy smua nmr kontak yg trsimpan aman tdk ada teror.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b1ed1c0ef848e872",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "e1909fe25675d1b4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "1,5 tahn galbay julo 15jt Alhamdulillah belom pernah ada dc, cmn teror telp tiap hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1c1a8d5c5bf4a9f2",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "e3f6b7306a3e8c28"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "kalau kakak maafin mereka itu kakak orang paling bodoh, sudah nama baik di hancurkan masa kakak maafin dengan gitu saja,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2ebd02bdca2ba90c",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "a31f717f13a0914d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "waspada.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hingga Juli 2026 Satgas PASTI Terima 25.875 Pengaduan Pinjol Ilegal - waspada.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5181bdbf1dac4e20",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "fa2bcafda3d9dc38"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "25.875 Pengaduan Aktivitas Keuangan Ilegal, Pinjol Ilegal Dominan - bloombergtechnoz.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-52787cffbf32aa95",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "61763166357bfc99"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Ilegal yang Masih Aktif September 2026, Seatap Veedana hingga LoanPal Apa? Link Download Sfile - Berita DIY - Berita DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-584231861c9c0a1d",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "8f4ed12c780a7f34"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "LPS Wanti-wanti Generasi Muda soal Pinjol Ilegal, Paylater, hingga Judi Online - finance.detik.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5db75096b6f67b71",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "41eedd824bc27022"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sumutpos.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Ilegal Mengganas, Satgas PASTI Terima 25.875 Laporan dalam 7 Bulan - Sumut Pos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-63d25f876d134915",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "686009bf00706db8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "yaa Semua Pinjol itu adalah app Scammer, toh mereka minta allowed contract hp sampe galeri 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7d9190726a692cd6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "8e01dfec7c661b8d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ketik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Uang Masyarakat Makin Aktif, OJK Jabar Waspadai Tekanan Kredit dan Pinjol Ilegal - ketik.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a0c522a19cacc09",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "caef1e18d88d4e5c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infopublik.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Wamen Komdigi: Film Bisa Jadi Medium Literasi Bahaya Pinjol Ilegal - InfoPublik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ee70f631e8d95c4",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "0ab0538d2ff3827b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Jabar Edukasi 4,2 Juta Orang, 3.880 Aduan Pinjol Ilegal Disikat - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a20b03e20eedc308",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "168c0aa69fcddbce"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jurnal9.tv"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lawan Maraknya Pinjol Ilegal dan Bank Titil, Pemerintah Dorong Dibukanya BPR untuk Masyarakat UMKM - jurnal9.tv",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aa7bc64c8ed7adc5",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "360704cb02b95021"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Binjol merusak anak bangsa indonesia, disalah gunakan penipuan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bcc15cf349f53808",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "32f30c65dd9e64f4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: DPR ke Gen Z: Waspada Bahaya Investasi Bodong - Pinjol Ilegal - cnbcindonesia.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d5da5f76f114c963",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "5e6711212bd82664"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "teropongnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ingatkan Bahaya Pinjol Ilegal: Jangan Asal Pinjam atau Pinjamkan KTP - Teropong News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1baff032ab580ab9",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "3bc93e422d55249a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya galbay lazbon by adakami apakah masih aman galbay dr Desember 2025 nominal SDH 3,JT 400,wilayah Tegal kabupate",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2fd317ddea1f8f05",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "625239db9de96e33"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "seru liatin orang pd bangga galbay\n\nlanjutkan lanjutkan\nhiburan yg sangat menarik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-441b6de1ba70bada",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "0ab434ec74665bb8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makasih bang tutor nya JD ga stres lagi mikirin hutang riba pinjol yg bunganya ga ngotak mending di galbaykan saja urusa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4e90bc623d827bbd",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "5bb1c7b2de070eb0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Setuju galbay nasional, pinjol itu penjahat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5404c2a086f4c3c8",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "a5274a1b67d71f04"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terus kalo udah gk ada duit,mau dibayar pake apa,?\nMalah suruh milih²\nTetap galbay tunda bayar,fokus dulu cari uang untu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6dd99bdc615db61f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "36d4d39890250f49"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "JANGAN GALBAY PINJOL INI DI SEPTEMBER,, !!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-77ebb68100347f81",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "33910e785ec973e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "INFO GALBAY 40 APLIKASI PINJOL BULAN SEPTEMBER 2026",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7ee5a57a04ee218e",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "2ddfa0dc2ac36e4a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Samakita aman GK di Galbay",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a98796a6b2cfdf15",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "0599716318752e72"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pengalaman Galbay Pinjampasti, Apakah Ada DC Lapangan? Ini Review Telat Bayar - Gagal Bayar Pinjam Pasti - Berita DIY - Berita DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-accb2c28492d7d22",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "6f02e1299764b6da"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sumut.infotren.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gagal Bayar Paylater Bisa Bikin Bansos Hangus? Cek Penjelasan dan Fakta Sebenarnya! - sumut.infotren.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c855a5cd5404b9b3",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "85c3f4f8ebc7d920"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "GALBAY selamanya...✊️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-da0fc7b27541ed7e",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "b11a7034e493ebc0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bener banget saya juga pernah didatengin tunaiku dan kredivo kekantor.\nGalbay udh mau 6bln\nMinggu pertama dan BLN pertam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-007d8009cbe8a3a2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6837e4a3f4d9c6a3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "AQ HR ini kredit pintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-008f7e358cd98545",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0293be7b761aa94f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Daftar Pinjol Resmi OJK September 2026, Ada 94 yang Berizin dan Diawasi - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-00f45b5d30d6c404",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "703351ab776fec4e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga ada rejeqi nya buat biaya kebutuhan anak anak",
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
            "24fcc7375089bec2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap😊😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-04f8a6dcc105ef0c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c7404bb4c8b9b2a1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kok punya saya ga bisa buat cari aktifasi dana cepatnya bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-06bab81b08ee3c5b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0ad68019f48f9e5d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Non Bank Makin Diminati Warga Pinjol hingga Paylater Laris Manis - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-07473a4253fa2485",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ade8dfc98452fe1c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Keren",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-077c5c92103c91d1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2809005f838c2bcd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan ada yg bayar pinjol. Mending duit nya buat nabung, buat investasi, modal usaha. Pinjol makin d bayar malah makin ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-07f2970a5c5ec136",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6776afb5299ef2ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "1. Hadir selalau abng ku ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08e94a9d277ed05c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6cdbec61c8242bf6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kartu Kredit Indonesia: Cara Pakai dan Bedanya dengan Kartu Kredit Biasa - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0953a3fbf58cc901",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aa54a1e1b4d808c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mn ada kita ketik sampai kapanpn gk da sama sekali konten sj ini😢😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0a5e164aff1355f9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ebc829ede018be60"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hai Bang saya ada cerita nih, saya kedatangan DC Pinjol ke rumah dan saya usir dengan baik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0b5452ecb80ca2c0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "351bd99a8f6d19b1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "KA Samir ada DC dan FC lapangan ga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c38de6dd4a5af52",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "82fcb0ffa16eb30b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah, mau dong ka buat bawa anak ke dokter spesialis",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c6356ee4e8b9d7b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4b0f16d656a4d915"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Masyarakat harus mendorong pemerintah untuk menghapus pinjol di seluruh indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d5f38a49fc263d1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e5d3e57c99b82559"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Astagfirulah hal adzim ya ALLAH ya robbi, melihat zaman sekrg ngeri, lebih baik zaman dulu, KTP data diri kita bisa disa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0d6a619da9614d0c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7a770a10106f1f52"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tak bisa di cari bg😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e4c67d82f728f4d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a497c5fea5f89ed4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga beruntung. Lagi butuh buat popok anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e779f5a4da8191c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d568c2385b98161f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "udah di cova tapi ngga bisa...prank🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-10157cfac6ad706d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "43dec6f841dd5211"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Zoe Levana polos banget pas diajarin  cara pinjam uang online#pinjol #zoelevana #podcast #viral",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1047a4cb1ba67e6d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e7fddf940dd162c8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjam yuk ada dc lapanganya saya sudah didatangi bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-10cebc6f53159e1c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "739952d59804c2ca"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang akuu udahh bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1215c56d3292d469",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f9fab699ab4ad556"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Balas tampar mba",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-13ddc27de8c076fb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aaad761462d9f51e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pekalongan nya di mana alamat jelas nya ya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-140b6523976827b2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8ff903efb7d31e5f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BISMILLAH HADIR",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-141e944aecd60b1a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "335257f6278efcb1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga dapet bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-148482310d23be55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a3d4f84c970d143c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "lumbung dana ada dc lapangan infonya di jogja bang ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-165e39e21161ea35",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2f838df750c8159d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "HATI-HATI DENGAN PINJ*L INI❗Nama Baik Bisa RUSAK‼️| Winda Pusphita | B-Talk Podcast",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-17966e28076d97b3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ed936459baad411"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Di pencairan tidak muncul potur nya bagaimana",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-18bca91d34b6defc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b33358637b3837f0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "makasih bang info nya ...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-197451020a69fa55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "10f3f3863551045e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tampar balik mertua mu itu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-19abc54c8cb8b4b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "35e57395dbe331b7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang info waktu kmarin Abang ngelunasin itu bagaimana?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1a4031674bf85289",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b926249d7016972a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Desy Ratnasari Bandingkan Dana Pinjol Rp17,28 Triliun dengan Anggaran Komdigi | NTV TREND",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1bfbeed0efc16104",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bb2869cc7961d148"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartajoglo.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PKKMB UNISRI, OJK Ingatkan Mahasiswa Waspadai Jebakan Pinjol dan Judol - wartajoglo",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ca3ab8536162bc3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "40e69e3e5957dace"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kenaoa mertua pada jahat ya cerira.ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d73a2d1ef325686",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a7f5d93d7eb69e3d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarlampung.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Catat, Ini 5 Hal Yang Tidak Boleh Dilakukan Debt Collector Saat Menagih Utang Menurut Aturan OJK - radarlampung.disway.id - radarlampung.disway.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2180f08d025f6aeb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "437cf20252772b7e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BUBARKAN PINJOL LEGAL MAUPUN ILEGAL...\nPINJOL LEGAL ILEGAL DN OJK SAMA SAMA MAFIA...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-21e581fbae851689",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4ef392b2724dcb14"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Publick speaking teh Desi bagus sekali ,,,❤🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2228b2f132513ff6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9d3657c794106f14"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SISI GELAP PAYLATER! DARIMANA PINJOL TAHU NO HP IBUMU?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2267533fe613d5ab",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c21fc82f56725b04"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir selalu abg ku buat beli bensin motor❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-235166881a332747",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "25f0ebb5bba78af7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang berarti data kamu pernah disebar dong bang sama dc nya, reaksi orang orang yg dapat sebaran data kamu gimana bang?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-238ab09d125991bf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "972c42a02562b756"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "singkat padat cepat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-23fd86a88610b8c5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "765d372404ba5ee6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nezar sebut film bisa buka mata publik atas bahaya judol & pinjol - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-243a2b1ac0362e3e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b5866873c98c3348"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah buat pulkam udah 8bln belom pulkam🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2531318298587d65",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "def9a4f14efa0234"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih pa informasi nya sangat membantu sekali",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2575b42000299080",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "11c8db0b053dd441"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya nonton truss kok gak dapet ya dana gratisnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-25b4f5524fb55afa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ed65381bc394427"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton abis, mau dana kaget ini buat kebutuhan darurat apa nih 👇 https://link.dana.id/danakaget?c",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-264ffe6539a6528b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "68bbae3c76f7c48f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Lengkap Cek NIK KTP Terindikasi Judol, Bisa Online atau Offline - metrotvnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26a8666769908f90",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d4265bf2e446d288"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pinjemin gw dana donh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-26df4b6ac20688b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f9cec792af57269b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Wanita Catut KTP Mbah Darmi untuk Pinjaman, Bansos Korban di Pekalongan Terhenti",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-27aa5e2cf9133413",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4caedb1e87375b6c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya bismilah lah min untung2 dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2849ce70dc3fe910",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f4cdc899bfddd90a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Telat Bayar Tagihan Kredivo, Kapan Debt Collector Datang ke Rumah? - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2a3b1629098df85f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4b8adc7a3aa56368"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hapusnya semua pinjol, meresahkan malah menjamur",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2caa6abaaeee56fd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "76cee446a39fc189"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "INI MANUSIA HATI NYA GAK ADA APA, YA..?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2def466793d8e125",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e39be9c0569cda54"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2df777646ef82746",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "80cc571648ab785c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat beli perlengkapan sekolah 🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e30ee09f8ade1cf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1823bc887306d320"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "WAJIB BAYAR POKOK BIAR AMAN!! NASABAH DIHIMBAU JANGAN GEGABAH!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e55f1add2b3dce5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fe0a266af926a401"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Solusiku itu kalo mau di acc kita di tlpn iya bng kita di tanya\"",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e56081c1653e907",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "58b6a7927f20f357"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalo mau tolong korban pinjol, tolong mas yg punya Chanel, komandoi utk buat #petisi se Indonesia tuntut #Pemerintan #Pr",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2f47e3d75fe5952e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ddf8487e46e960c5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi Kredivo: 54% Kredit Digunakan untuk Kebutuhan Produktif - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3515ad695d431cdc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "95db6bcfbe3f48c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jgn bayar hutang pinjol y bg. Kalau abg bayar banyak pengikut abg yg akan kecewa.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3688e5e167029df5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "016a51faf2f1be20"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Berbahaya bagi orang yg masih takut",
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
            "fe95b4a9506bc629"
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
          "id": "auto-39e3ee82ed6b4ef2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2ad83a7ef39ff586"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Smoga  dilipat ganda kan bang reziki nya,, amin yrb👍",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3cc490bbc9ec45d1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a1f3ebc359db077b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar Tembus Rp105 Triliun, Risiko Fraud Jadi Perhatian - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3cd086635097bd9c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a9e9ce5b707ac927"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😢 banyak vidio yg di skip alias tidak reel anda tau kan tidak reel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d463814998f372b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "82a73df0ced60e57"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat istri lahiran🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3e54e0794b7f5be0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "14f227d8eeb94cd6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "liat ini gua gara gara ketipu 2 juta anj duitnya d ambil cicilan nya gua yg bayar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3e92b3f1b195fe52",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e782261cc0f84a93"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya bang buat kebutuhan anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3f250fc7f76031c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4d636b09c6e79603"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "itn.ac.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terjebak Pinjol dan Modus Investasi Bodong, 50% Gen Z Terancam Petaka Finansial: Pesan Menohok BTN untuk Maba ITN Malang - Institut Teknologi Nasional Malang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3fd705687eec77a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "204c3bdc04a94796"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "negara memfasilitasi rakyatnya untuk gantung diri!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3fd70a13064ba78a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1677a08789449490"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bg semoga saya terkaget kaget bg semoga lancar selalu..🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-41ffeada4fe3e26f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cdb34d829b60bb47"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat, uang nya untuk sekolah anak",
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
            "7e172109749a4b64"
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
          "id": "auto-43695e59928d43c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f2e0b21c28b7dbbc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sangat bermanpa\"t bang konten nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-43d3ebc527bc2352",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "12bfc093f4f2d6eb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yoi hadirr",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-444c6efb0fd6e4eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d49adfe78382a20f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah alhamdulillah buat biaya kehidupan perantau",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4525849478a0935e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "59c25bebcb19a076"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah smoga rezeky udah jatuh tempo cicilan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-475af1b515006a96",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "783e97f99b813f3d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Punyaku ga bisa di enter \nUdah ketik aktivasi fitur pinjaman \nTp ga bisa",
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
            "4b10cd808bef97d1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hapus pinjol.",
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
            "ec9756bf6369f54f",
            "e031cc8f17efa0fb"
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
          "id": "auto-4b10f2586eeb6639",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "17f2a9cfcd53cb56"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "langsung laporkan polisi aja utk proses hukum spy pinjol2  ini tdk seenaknya saja, kalo perlu berantas pinjol2 yg meresa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4b50ce5f3f6b00a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bad0b304cabcd247"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mau ikutan dong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4b697036e50b3e18",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "85a3a19e6e443184"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan meng hutang, kalau tidak mau bayar! Hati\" baik itu resmi/tidak jika sudah jatuh tempo semakin lama semakin terbia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4c8f0605ee7fb9ac",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0aa786d3ba994aca"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rekening orang bisa diblokir dengan cepat, media2 yang menyebarkan fakta bisa dibungkam secara instan.\n\nHanya pinj0l dan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d1aee3def768e27",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fefa67c8023e2703"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aku gak dapat bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d31c35fda53d453",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7df9d2e856099387"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Harga Anjing Mini Pom dan Biaya Perawatannya - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-501622530d879061",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "761e5d0fbd677899"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penerima Bansos Berkurang! 7 Ribu Warga Dicoret Usai Terindikasi Judol dan Pinjol | iNews Room (2/9)",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-50e03197dcee9b60",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "965b9d875f2570b9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Outstanding Pindar Tembus Rp 105,14 Triliun, Transparansi Jadi Sorotan - investortrust.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-50e1c6825b8d8a9f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c07a656bdaa512f2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Allhamdulillah... 54 jt lunas pinjol q bayar semua... Tenang Wes.... Hutang Yaa bayar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-51146d3858db5c5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "751b8c8781db9fa6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat rejeki 😢 buat aku yang cuma pengangguran",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-54b34677338cb5ee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b0b36f2d6d3581a1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insight.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Masih Andalkan Pembiayaan Konsumtif - KONTAN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-56afff088c8975f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "29f79c5f1b2038fe"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi sebut 54 persen kredit Kredivo di 2025 buat kebutuhan produktif - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-57ad5fd1813c27d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96228ac2228b4a6a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat kebutuhan sehari2",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-58e263ec36340760",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "386a8178fe8c6dc7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau dana kaget  buat bayar utang gara gara penipu 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59d7c4a18255ded5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d08a7ce333e191a7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "SIAPkerja Kemnaker 2026: Layanan dan MagangHub - KreditPintar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a569ff3a7043e05",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e77490975a8a9c87"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah smoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b14202c15ae1435",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0db057effef71ffe"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga rejeki nya🫰",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b3864d6895aa9b2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0210d84826b86292"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Maunya sih gk pinjam pinjam pinjol Mba,tapi Krn keadaan yg awalnya bs byr ,tapi akibat ktr tutup trpksa glby ,mw byrpun ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b6873a97b4a2746",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6b55335d23a3df77"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BANG KAPAN BIKIN VIDEO MAIN WAHANA KELILIT PINJOL",
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
            "6d560dea41188cd5"
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
          "id": "auto-5c483daa5b60c852",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "27433d77a52424ac"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semngat trus bg berkarya",
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
            "10f2743d7e309d36"
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
          "id": "auto-5e21cda2412b2427",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "568f680c8b3c2592"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya kagum dgn mbak Desi.beliau menganalisa secara umum apa dampak pinjol dan keperdulian Pemerintah dalam menganalisa d",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5f00b15c109fb278",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8bae6ca0f6842061"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Cara Pindar Manfaatkan Data & AI Tebar Kredit ke Warga Desa - cnbcindonesia.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5f2262e5a54fb193",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fa885785a19ebccf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah hadir bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-60b6b887a3dac267",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c8885caa387410cf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lah kalo pinjol ternyata menyusahkan rakyat sampai kehilangan hak pemeliharaan oleh negara, kenapa pinjol masih di biark",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-619eb851908d1dcc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "daf84e5113e00085"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Maju terus Brantas pinjol krna uda meresahkan masarakat.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62ebd62a107e9030",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6ba0d0494993bbd6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "LIMIT DANA CICIL KECIL PASTI BELUM DI SETTING INI :\r\n👇👇👇\r\nhttps://youtu.be/VnnlPhhcJxU\r\n\r\nLink Daget ada di dalam video ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-67a055a79c71a448",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "794354e23660197c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "APLIKASI2 PINJOL DUITNYA DARI KORUPTOR , DUIT KORUPTOR DI PINJAM2KAN DGN BUNGA YG SANGAT TINGGI DGN KEMUDAHAN PENCAIRAN ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-67a8aed1f1c58d95",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9a90cffb592da537"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "30 Ribu Lebih Penerima Bansos DIY Terindikasi Judol, OJK Bongkar Potensi Mata Rantai dengan Pinjol - Suarajogja.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-67d75909f01940a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cd3515fb72f811a4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau menginfokan. FC Traveloka sudah sampai Bandung. Telat 7 hari sajah.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-694af77a7881dfef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "583273ea1bab29ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagus sekali bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6c2889bf545b1381",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a14d1176b58b19a3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lokawarta.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PKKMB, OJK Solo Beri Pemahaman tentang Bahaya Pinjol dan Judol bagi Mahasiswa Baru Unisri - Lokawarta.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6c8d20e935f8acf6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a302c07b3a0a98df"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Mengatasi SPayLater yang Tidak Bisa Digunakan karena Telat Bayar - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6e01ea6078087dba",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b35bf5cbeb9f9cba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jgn ada kata damai mba lanjut trs sampai ditutup aplikasinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6e38f552b20b3435",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0842e654f0ce32ab"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bg tutornya bisa pinjol banyak apk gitu ,dan bisa pinjam nya gede gede..gue aja 1,2 apk ngak bisa di tolak mulu..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6e477725bbac8cd1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d4553cbeed14321"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "jgn pernah takut sama ancaman desk call pinjol...itu hanya anak anak ingusan yg otaknya g punya skill apa apa .....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6ee0cc91a3421b93",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d403ce4c47cf357"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga saya bisa mendapatkan giveaway ini buat tambahan modal usaha jajanan...🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6f86eaf8294699d6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "924fc3dbe06f1d86"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lagi butuh 1,5 untuk pengobatan ibu di rumah sakit bismillah 😌🙏🏻",
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
            "f7664ba645005d1d"
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
          "id": "auto-72aff52cf02a9f68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f183f7fc22f53ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bru keluar dr goa ni cewk..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-742ed0b425c3165e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e4c9465848eb75d5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bank coba bahas pinjaman digital bank seperti bank neo bank saqu dan superbank",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-75276d8b532a7be5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a67385870c89e9fc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat bantu temen",
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
            "0fa8ac58686c5089",
            "0ff5f438e690156e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah dapat",
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
            "15e18a933cac1323",
            "278576df38cd529c",
            "7be2f04abb8498f1"
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
          "id": "auto-757cb0c780d96f02",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b0bdc93d9ed5f02"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "PINJOL TEMPAT ADALAH UANG PUTARAN HASIL KORUPSI\n\nJAUHI PINJOL\nBILA TAK MAMPU BAYAR GK PERLU BAYAR ,\nLEBIH BAIK RUSAK DAT",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7592871342cd0c7a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fc528c3424b1ecbe"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "news.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polres Jaksel Respons Laporan 110 soal Warga Tiba-tiba Ditagih DC - detikNews",
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
            "97fcefd70629f615"
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
          "id": "auto-77abc683babd2d2e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2bd6312b0d828319"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mntap",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-78d709afb98e8279",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6f2faf90f2bf3abf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Desi Ratnasari oke, public speaking nya bagus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7a2be0e921a315d9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a1115a92aad0901b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "DPR Ingatkan Anak Muda, Pinjol-Investasi Bodong Ganggu Masa Depan - cnbcindonesia.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7a3a384a58e8fac6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5542d9050113533d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "premium.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Taktik Industri Pindar Jaga Profitabilitas pada Semester II/2026 - premium.bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b7985644fad209d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "24e3f54427e9a730"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang hadir bang",
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
            "8b8cc16f1f4181e0"
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
          "id": "auto-7eb8acadc32ecdbe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "44e74a5638779138"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cerdas tegas berisi dan punya hati ..harus nya semua Seperi Desi ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-871a63c41af95a45",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "21fb8f8e761d1c5e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Perempuan tua ringan tangan gilani tahu sy itu laki2 yg tampar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-87235cc031e95b97",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4e6aa716953143d8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mau daget nya plisss buat kebutuhan sekolah saya sama adekk 🙂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-883490ac14f05759",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e5658c5250490092"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "yang katanya negara agamis pinjol riba dibiarkan leluasa, satu kata MIRISSS",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-88503d64d16e9423",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0f8d65ebdd55915e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sudah paket lengkap bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-88faa5fd97d34f2a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9711a0cb57f96440"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Nonbank Melaju, Sinyal Sukses Inklusi atau Alarm Daya Beli? - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a9c3fc9ac253d0c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "82da58462dbd50ac"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "aku klik enter ga bisa terus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8af713158a4f044f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1984829c7759c1de"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Berbagi itu tidak membuat mu miskin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8b388779f9071dc3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d0957dac6be96403"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lanjutkan bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8bdf9752b94a6466",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9276760ac8ebf10c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Resmi Ojk ✅ Pinjam Saldo DANA Tanpa Dana Paylater Dana Cicil | Cara Meminjam Uang di Dana Tanpa KTP",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c693319816ae5b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e191a0c11b305082"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mau dana kaget buat bantu pembangunan masjid",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8d6dcb2e0dae4524",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b792e9a358400012"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gua selalau nonton sampai habis cuy",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8eeaf64f74a6e5c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1c10d18815b68bab"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang mau dana kaget bang buat beli baju sekolah anak bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-92bddbacfbf74f98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6933001c053fb4b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir abangq🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-935220c59e7a36f3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "904e732d2d525e95"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "saya ikut giveaway daget ini agar bisa nambahin tabungan saya buat upgrade hp saya❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-948b4bbd95fdd864",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d80b1c57b180b58a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kapan sih pinjol2 ini di hapuskan dari NkRI",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-953b0dd9e4231204",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4f0c46ca055ff43d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kaltim.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "NIK Dipakai Pinjol Orang Lain? Cek Sekarang lewat SLIK OJK, Begini Caranya - Tribunkaltim.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-969fb27b39e1a612",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ece7ddb6ec50abb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah yaallah semoga dapet kalo emang rezeki gabakal kemana😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97716b51f05bda3f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b23727597207592b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sebenarnya tidak ada privasi sama sekali, tanpa kamu izinkan pun mereka bisa mengakses hp kamu, semuanya sudah di atur d",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-97e977f3abc714ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "aec592372e2e8ccb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "6 Cara Memilih Aplikasi Pinjaman Online Bunga dengan Rendah yang Aman-Legal - finance.detik.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-99277a78e8c2fb98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c49a174559c8b531"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "terimakasih infonya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-999b37a4f1068619",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4e5f555354b342fa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semakin jelas sudah banyak korban tapi iklan d YouTube pada berseliweran iklan pinjol ....mencari korban terus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ab9efb2fd784254",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2de173e068c68a03"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini channel kesukaanku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9bbebe6aee163c12",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "10344409af0e9489"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jngan kasih pinjam uang ketemanmu,klau TDK mau kesedihan itu akan berbalik ke kalian karna stres mau nagihnya TDK di bay",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c17c91d72f8f198",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b0a4f265a8f731ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ulang nya sdh lumas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c65c064bdf2b920",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b293d8eca082fe1d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Neo bank gimana bang ada gak fc lapangan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9e8e57cd6848a017",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "81e1597c41cb6e11"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih Desy Ratnasari semoga pemerintah menghapus pinjol baik legal maupun ilegal . Kasihan rakyat miskin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9f12ceaad567b027",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "25a0ea1ee280eada"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "liputan6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hoaks Pemutihan Data Pinjol Beredar di Media Sosial, Simak Faktanya - Liputan6.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9f43cbf35cdd45db",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d51a9b3a508dde24"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Resmi OJK September 2026 Terbaru, Ini Daftar Lengkapnya - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a152136b18dfc334",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3df64a205d001e62"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dc wa blokir aja wa ngapain di bls chat nya.tlpn abaikan aja.fc datang sedia kopii  & kue.kita siap besi di pinggang klu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1bffab5ca4a356f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5d3bcecbbcba69d3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadirrr boskuh",
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
            "4ccd8057da8ad6f1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a41d9d534b53113c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f722136cb91ad13c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Susu anak habis, bantu doakan agar dibukakan rejeki dari berbagai pintu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a5b34f3a766c9f7c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "60a0a289392ff17a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton Habis, mau daget ini buat kebutuhan darurat apa hari ini👇 https://link.dana.id/danakaget?c",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a61764e78e9f9d87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5bc875a25374e6db"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat Buat kebutuhan bulanan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a64f5383a80d4c0f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "512ac021fdd20361"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau dan kaget",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8087e71ed91ea8c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2b7caef5f9bafd03"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Begini 4 Cara Mencegah Pinjol Akses Kontak di HP Sembarangan - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a82426a9883d07fa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "22efd990b4ee6860"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap bos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a91f075a52ee7947",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6fa0d2a1f42827aa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadiahh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aaa45347953d4b21",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "373c9e134110a3ff"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bikin.kotor.tgn.jika.tampar.balek.biar.tuhan.balas.10kali.lipat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac7e7126e18914c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a4704a5eaa268ae3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "jangan mau damai kak.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ae2c034e8b2d20cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9c39b1c13f96c07a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bg saya nga pernah dapat dana kaget.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ae8d21e35cdd3114",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3437a2f91f95ba64"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yups",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aea1e40f36c120d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6dd9b5485ff98531"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pengajuan Pinjol Legal Ditolak? Bisa jadi 5 Hal ini Penyebabnya - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b260a0cc2b7358d3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6fdef14c5aface8e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tindak lanjut bandar judolnya paak tegakan keadilan bukan yang korban judol nya aja kasian yg tak berdosa jdi kna imbasn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b32fb3b5cfba1961",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c467c4fdea141b13"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cucu Nekat Pinjol, Nenek Langsung Ngamuk! 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b400f96d659455ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "80db1e2f506f6c68"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aku belum dapat dapat dana pinjam 😢😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b41d9cd2dffea2fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2e54b3a026087357"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "MAIN WAHANA KELILIT PINJOL",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b436da0cbd77e141",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2542391f6e149276"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Digital Mulai Bergeser ke Kebutuhan Produktif - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b48e17b4b58de86f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eb2bd48ccce4736d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sy mau dana kaget buat beli  beras",
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
            "dacce59930069b16"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap bang🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b526096d53ca2249",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9679e007c259a696"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BAHAS KREDITO PLISSS",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b6e71c3c6d96ef12",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9db724b4d62402bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mbanya keren ya, ngomongnya kyk kereta antar propinsi, teruuuussssssss lancar ngomongnya... kalo ama yg ilegal, lapor po",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b7e39e6131df41a2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "de4b74de8e28e6fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat modal usaha",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b854aeb187d4e7c6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "af152159c70bf85e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir semoga beruntung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b991b4bcc2aeb0b7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "281a7b5d2c3d2aba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung bg amiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b9b9bf7fdcf172c0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "867a1286e657c808"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bissmillah , mau bang buat kebutuhan aku dan anak anak 😊😊🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b9d120c493f3d83d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c92c2a212f0cea9b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "komdigi.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Kementerian Komunikasi dan Digital RI - Kementerian Komunikasi dan Digital (Komdigi)",
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
            "497dbcce704e914d"
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
          "id": "auto-ba82e852d43167cb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7077e8fbb820b3c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mertua bangsit",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bbd5dd8a4a754d05",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9be4b9a8ee60870c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bung ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bca1a92638a1fe49",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3f255705215f35c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah.. hidup tenang tanpa utang,, memang kalo bicara butuh tentunya semua orang butuh,,,akan tetapi bagi saya m",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c102f37960ad66c7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "efe0f20a2f53576a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Ungkap Alasan Masih Fokus Pembiayaan Konsumtif - infobanknews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c1ef2ae185e02af3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f0d381175e5efadc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "epaper.mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "NEZAR PATRIA Bahaya Judol dan Pinjol Disampaikan lewat Film - Epaper Media Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c24bf7ea6939ae55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "be887013828ac5c2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "video.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5 Pinjol Bunga Rendah Legal OJK, Cepat Cair dan Tenor Panjang - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c363a59b5d5cc3d6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b3ae8c5c92f74bb8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat berobat kakek",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c3f4a9d165f9ec3a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cbed24e91f16d381"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bener...setuju ..tolong segra ditindaklanjuti Pemerintah melalui Komdigi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c4cf3cc65e1b1ee8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6bb6499a4440afd3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Konten berManfaat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c4e7d5b10327aa73",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "98da799c87d97003"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pojoksatu.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "94 Pinjol Resmi OJK September 2026, Cek Daftar Lengkap dan Cara Pastikan Legalitasnya - Pojok Satu - Pojoksatu.id",
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
            "f5730e5cb21b08b8",
            "d28c35e7fa36f2f0"
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
          "id": "auto-c5941793b5a297ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "478b480d7a353e3a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bang bismillah semoga menang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c5fb3b81500f287d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e5ea7dad43534585"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kawal smp tuntas gaes. ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c7f9f80c41fb57aa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "499b316d2d377605"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tampar 10x mertuamu itu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ca04223876c28fd6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1aaf752be0430557"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gara\" injol hidup JD sengsara klo bisa hapus pinjol di Indonesia ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce160e28a6ccb8f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "521d6ba7f4ecc205"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lgi di perantauan, blom kerja, luntang lantung, semoga dpet rejekinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce809eef59ce2958",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4191be15684a0acd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bu Desi cerdas, kritis demi perbaikan kebutuhan yg tepat bagi Rakyat, semoga anggota DPR lain jg mendukung suara ini, de",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d008b8b38ed3a84c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c46be39460d444ae"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "liputan6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cek Fakta: Hoaks OJK Terbitkan Pemutihan Data dan Tagihan di Aplikasi Pinjol - Liputan6.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d025b2401bb42ac3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a4df5e99844c5d0b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tampar balik mertua iblis itu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0b353c6c809950c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "74d9ba4a8c9bb707"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Resmi OJK September 2026, Ada 94 yang Berizin dan Diawasi - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d25cf775adb119cd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a7bb6a2c6ed6312b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir..bismillah buat anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d4269488262916e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ac34a787cbe5377"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DATA BUSUK CAIR?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d432da87139aa97b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8c00f9532044731d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Zulhas Ingatkan Gen Z Lampung Hindari Pinjol dan Judol - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d50a7a7a78f56426",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "56ad37dc44b3b4d5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Musnahkan pinjol dari tanah air, banyak mudhorotnya,,,SEGERAAAA",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d5456fe71aa9dc65",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "77248f5ab08bd515"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat berbagi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d578da24ebddac50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c74e06db0a129694"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Istri Dituduh Punya Utang, Ternyata Suami Diam-Diam Pakai KTP-nya untuk Pinjol 😳 #shorts",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d607dfe6c78212b4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "09775eec7ace8b2b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater Bukan Hanya Belanja, Dipakai untuk Pendidikan hingga Modal Usaha - Katadata.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d646fbae5b5525be",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5433de5f20473484"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kena prank semua😂🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d68291408f42c914",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ea7fedc0a8def11a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pintu.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Apa Itu Debt Collector? Aturan OJK dan Hak Debitur - Pintu",
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
            "d8584dbf4ec9379d",
            "24f182b0bf84bf5e",
            "38411118d66ce753"
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
          "id": "auto-d79119d6b2c9f679",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "84e99bf835a73407"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir selalu bang semoga menang kali ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d7c36e36593563e0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bf26e040ea370158"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang semoga dapat untuk kebutuhan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d9f2e40a7b0a6342",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "34d9215c00056407"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat pegangan bertahan hidup di kota orang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db410b39cb482a50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4e173960efb78c6c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi UI: Kredit Digital Bergeser dari Konsumtif ke Produktif - infobanknews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dcbfcdf150e1986f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6e5d2c6535d9cd56"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar Melonjak 25,8%, Industri Didorong Jaga Kualitas - investor.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dcf46cb14c1af7b5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f6e0e0cbdff0266"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Keren mass ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dd87b60a98a78d7e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "42358adea8635de7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sosok wanita ? Identitas spill lah masa korban yang dipill, pelakunya enggag",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-de30f9b9ed65fc3e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "735260c2cb7038b1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir paduka raja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e37816c99b14f327",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2df8f902d2ce239b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "tolong bang bantu bang buat makan bang sekarang sama besok bang 🙏",
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
            "79f5e12bcfb55bd6",
            "9389830e814abd7b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "....... 👍🏾",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e5dc892b5c733df2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4729970c228df8db"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Barusan di datengin FC lapangan dari ada modal sama ivoji daerah kabupaten Tangerang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e6383bca62192018",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5cd4830b83bf287a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Info terus Bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e6d3b30784b55c8a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1fba3717ffead6a4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga saya dapet buat modal usaha tambhan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e7384fc024755fde",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d5170d42d82c4f9e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga ini jadi rezeki saya, buat manajemen uang baru merantau kerja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e73c398439b1b71f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96a93ff826fb8c98"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Baru mampir semoga dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e778a319d9dd6650",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "55995e5aba0dc92f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "liputankawanua.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Berkat Adi Sucipto, Warga Tomohon Kol 5 SLIK OJK Lantaran Pinjol Boleh Punya Rumah Subsidi - Liputan Kawanua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e9d344ce771dcbfb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "29f64684b556786e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pengen dana darurat buat kebutuhan sekolah kak❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed33ee6b8ea67499",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d00a635b28890b49"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tutup ajalah pinjol ,KTA, paylater dll juga tutup, ntar pinjol ditutup lari nya malah KTA dipermudah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef994bb66d056ead",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "03692118183aa81f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "keren edukasi yang bagus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f0365edd4c8e198a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a98fe4e6e4535720"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terlanjur Berikan Data ke Pinjol Mencurigakan? Ini Langkah yang Bisa Dilakukan - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f23c9d96422ed952",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "836dcb91cdf28900"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nusabali.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Bali Tembus Rp2,3 Triliun - NUSABALI.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f2a093660c446def",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bbe9861f47cfb02d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BANG BAHAS KREDITOO",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f34d08ac94ac6f9f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "97df72dad86a4e58"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bermanfaat nihh bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f4bec4feaee4218a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "74b897629757ec03"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semog dapat daget bg... Buat beli pempes anak bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f600ab58c7734211",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cc157404c04c1974"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Siap hadir, semoga bisa membantu kami yang lagi dalam situasi bencana gempa bumi di flores NTT",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f645b4eddd422eab",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d2770702ca68dbf0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udh makan aja lah uang nya..rakyat gak butuh..kasih aja koruptor uangnya..rakyat sukarela..apapun alesanya mw judol mau ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f693e83d35482f2d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c73a3916605b75f4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mudahan saya beruntung🙏🏼🙏🏼",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f75938dcd81c7b51",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "06974685c3f0a4c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mantap dah sangat membantu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f7f8a763928d2fc2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9c881d6c128a505a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f80636c582e8bb71",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3dc73bae1c1f56dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semua pinjol legal berbahaya, hati-hati gais.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f84321487a7242bb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d4ee98100dc9d67e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Wahana kelilit pinjol bkin pusing",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f894e9249731f555",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6fe5893dcdb38da4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "KTA Bank Mandiri DC neror2 kondar ngancam mau obrak abrik tempat kerjanya sama mau nyegat di jalan katanya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f8b06899a91439c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "33863403ee9f6978"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga ada bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f96cd8a36a045297",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "df1baa459caa2e83"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Top markotop",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f9c55fe517a5f074",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e982b46d45c11535"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar 94 Pinjol Resmi OJK September 2026 dan Cara Cek Legalitasnya - metrotvnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-febdac5b8f37ec69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1b6e6da97aa5f709"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lumayan buwat pulang kampung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-722ef54b935d793d",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "2c97c4727fb6611b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar KrediOne Salurkan Rp 7,3 Triliun, Tekankan Pertumbuhan Berkelanjutan - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7bc54f3ae634a15e",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "14f50fda22cb669f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pindar Tumbuh, JULO Catat Margin Laba Kotor 44 Persen - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8825095c1f43304b",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "3cf130a72991b575"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Pindar KrediOne Salurkan Rp 7,3 Triliun, Tekankan Pertumbuhan Berkelanjutan Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3f2f2bf06d526af",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "0725c1db5ce1a283"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "news.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Scroll TikTok, Ketika Anak-anak Indonesia Tumbuh dengan Iklan Pinjol - detikNews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f001fce2ea5d22eb",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "933c72e697235b9a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pindar Tumbuh 25,88%, KrediOne Catat Penyaluran Pembiayaan Rp 7,3 Triliun - investortrust.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "965b9d875f2570b9",
        "6dd9b5485ff98531",
        "f4cdc899bfddd90a",
        "fa2bcafda3d9dc38",
        "be887013828ac5c2",
        "2b7caef5f9bafd03",
        "c46be39460d444ae",
        "74d9ba4a8c9bb707",
        "0293be7b761aa94f",
        "a31f717f13a0914d",
        "25a0ea1ee280eada",
        "6cdbec61c8242bf6",
        "c92c2a212f0cea9b",
        "a1f3ebc359db077b",
        "b0b36f2d6d3581a1",
        "d08a7ce333e191a7",
        "aec592372e2e8ccb",
        "efe0f20a2f53576a",
        "68bbae3c76f7c48f",
        "e982b46d45c11535",
        "f0d381175e5efadc",
        "765d372404ba5ee6",
        "0ab0538d2ff3827b",
        "0599716318752e72",
        "836dcb91cdf28900",
        "41eedd824bc27022",
        "d51a9b3a508dde24",
        "8e01dfec7c661b8d",
        "0ad68019f48f9e5d",
        "8bae6ca0f6842061",
        "caef1e18d88d4e5c",
        "98da799c87d97003",
        "a302c07b3a0a98df",
        "a7f5d93d7eb69e3d",
        "7df9d2e856099387",
        "2542391f6e149276",
        "168c0aa69fcddbce",
        "5e6711212bd82664",
        "09775eec7ace8b2b",
        "9711a0cb57f96440",
        "fc528c3424b1ecbe",
        "0725c1db5ce1a283",
        "4e173960efb78c6c",
        "5542d9050113533d",
        "9a90cffb592da537",
        "55995e5aba0dc92f",
        "61763166357bfc99",
        "933c72e697235b9a",
        "14f50fda22cb669f",
        "bb2869cc7961d148",
        "a14d1176b58b19a3",
        "6e5d2c6535d9cd56",
        "ddf8487e46e960c5",
        "29f79c5f1b2038fe",
        "4d636b09c6e79603",
        "a1115a92aad0901b",
        "8f4ed12c780a7f34",
        "4f0c46ca055ff43d",
        "a98fe4e6e4535720",
        "8c00f9532044731d",
        "ea7fedc0a8def11a",
        "3cf130a72991b575",
        "6f02e1299764b6da",
        "2c97c4727fb6611b",
        "32f30c65dd9e64f4"
      ],
      "socialItemIds": [
        "97fcefd70629f615",
        "96a93ff826fb8c98",
        "5bc875a25374e6db",
        "f5730e5cb21b08b8",
        "b792e9a358400012",
        "bf26e040ea370158",
        "c21fc82f56725b04",
        "af152159c70bf85e",
        "a7bb6a2c6ed6312b",
        "5cd4830b83bf287a",
        "6ba0d0494993bbd6",
        "521d6ba7f4ecc205",
        "2e54b3a026087357",
        "3ed65381bc394427",
        "f7664ba645005d1d",
        "e782261cc0f84a93",
        "15e18a933cac1323",
        "77248f5ab08bd515",
        "df1baa459caa2e83",
        "478b480d7a353e3a",
        "1677a08789449490",
        "c73a3916605b75f4",
        "d4265bf2e446d288",
        "904e732d2d525e95",
        "6776afb5299ef2ba",
        "0fa8ac58686c5089",
        "a497c5fea5f89ed4",
        "10f2743d7e309d36",
        "33863403ee9f6978",
        "6fa0d2a1f42827aa",
        "33910e785ec973e0",
        "76cee446a39fc189",
        "5433de5f20473484",
        "6bb6499a4440afd3",
        "24fcc7375089bec2",
        "aaad761462d9f51e",
        "9d3657c794106f14",
        "11c8db0b053dd441",
        "278576df38cd529c",
        "281a7b5d2c3d2aba",
        "ec9756bf6369f54f",
        "d5170d42d82c4f9e",
        "f9cec792af57269b",
        "82da58462dbd50ac",
        "4ccd8057da8ad6f1",
        "80cc571648ab785c",
        "3ece7ddb6ec50abb",
        "84e99bf835a73407",
        "03692118183aa81f",
        "b33358637b3837f0",
        "aa54a1e1b4d808c6",
        "42358adea8635de7",
        "794354e23660197c",
        "6b55335d23a3df77",
        "25f0ebb5bba78af7",
        "24e3f54427e9a730",
        "b11a7034e493ebc0",
        "cbed24e91f16d381",
        "1984829c7759c1de",
        "0842e654f0ce32ab",
        "96228ac2228b4a6a",
        "fa885785a19ebccf",
        "703351ab776fec4e",
        "8f183f7fc22f53ed",
        "6f2faf90f2bf3abf",
        "b926249d7016972a",
        "d8584dbf4ec9379d",
        "6933001c053fb4b5",
        "9be4b9a8ee60870c",
        "5d3bcecbbcba69d3",
        "ebc829ede018be60",
        "4b10cd808bef97d1",
        "2de173e068c68a03",
        "c74e06db0a129694",
        "36d4d39890250f49",
        "95db6bcfbe3f48c0",
        "351bd99a8f6d19b1",
        "ade8dfc98452fe1c",
        "d0957dac6be96403",
        "cd3515fb72f811a4",
        "0210d84826b86292",
        "56ad37dc44b3b4d5",
        "29f64684b556786e",
        "a7970c1f3882d4d1",
        "85c8a3a0bdb12e1c",
        "b23727597207592b",
        "7e172109749a4b64",
        "f722136cb91ad13c",
        "7a770a10106f1f52",
        "d00a635b28890b49",
        "4caedb1e87375b6c",
        "3437a2f91f95ba64",
        "43dec6f841dd5211",
        "8b8cc16f1f4181e0",
        "d49adfe78382a20f",
        "de4b74de8e28e6fb",
        "24f182b0bf84bf5e",
        "06974685c3f0a4c6",
        "bad0b304cabcd247",
        "204c3bdc04a94796",
        "d568c2385b98161f",
        "6837e4a3f4d9c6a3",
        "80db1e2f506f6c68",
        "fefa67c8023e2703",
        "c7868b06d2ce7911",
        "9679e007c259a696",
        "bbe9861f47cfb02d",
        "8ff903efb7d31e5f",
        "437cf20252772b7e",
        "f9fab699ab4ad556",
        "35e57395dbe331b7",
        "3bc93e422d55249a",
        "4729970c228df8db",
        "97df72dad86a4e58",
        "34d9215c00056407",
        "0ff5f438e690156e",
        "d28c35e7fa36f2f0",
        "e39be9c0569cda54",
        "4b8adc7a3aa56368",
        "2809005f838c2bcd",
        "85a3a19e6e443184",
        "6fe5893dcdb38da4",
        "40e69e3e5957dace",
        "8f6e0e0cbdff0266",
        "c7404bb4c8b9b2a1",
        "c8885caa387410cf",
        "dacce59930069b16",
        "60a0a289392ff17a",
        "7077e8fbb820b3c4",
        "2bd6312b0d828319",
        "761e5d0fbd677899",
        "4ef392b2724dcb14",
        "2ddfa0dc2ac36e4a",
        "568f680c8b3c2592",
        "7be2f04abb8498f1",
        "4e5f555354b342fa",
        "27433d77a52424ac",
        "751b8c8781db9fa6",
        "e031cc8f17efa0fb",
        "fe0a266af926a401",
        "499b316d2d377605",
        "a4df5e99844c5d0b",
        "6d560dea41188cd5",
        "6fdef14c5aface8e",
        "d2770702ca68dbf0",
        "12bfc093f4f2d6eb",
        "b3ae8c5c92f74bb8",
        "1aaf752be0430557",
        "a9e9ce5b707ac927",
        "79f5e12bcfb55bd6",
        "583273ea1bab29ba",
        "e4c9465848eb75d5",
        "373c9e134110a3ff",
        "a67385870c89e9fc",
        "e77490975a8a9c87",
        "59c25bebcb19a076",
        "1fba3717ffead6a4",
        "4191be15684a0acd",
        "44e74a5638779138",
        "c467c4fdea141b13",
        "2f838df750c8159d",
        "10344409af0e9489",
        "22efd990b4ee6860",
        "b293d8eca082fe1d",
        "2b0bdc93d9ed5f02",
        "21fb8f8e761d1c5e",
        "783e97f99b813f3d",
        "74b897629757ec03",
        "2ad83a7ef39ff586",
        "0f8d65ebdd55915e",
        "eb2bd48ccce4736d",
        "81e1597c41cb6e11",
        "a5274a1b67d71f04",
        "a3d4f84c970d143c",
        "f2e0b21c28b7dbbc",
        "972c42a02562b756",
        "b0a4f265a8f731ce",
        "e5658c5250490092",
        "e1909fe25675d1b4",
        "3f255705215f35c4",
        "1c10d18815b68bab",
        "9c39b1c13f96c07a",
        "3ac34a787cbe5377",
        "3df64a205d001e62",
        "fe95b4a9506bc629",
        "b35bf5cbeb9f9cba",
        "d80b1c57b180b58a",
        "e5ea7dad43534585",
        "924fc3dbe06f1d86",
        "1b6e6da97aa5f709",
        "4b0f16d656a4d915",
        "9c881d6c128a505a",
        "386a8178fe8c6dc7",
        "497dbcce704e914d",
        "cdb34d829b60bb47",
        "3dc73bae1c1f56dd",
        "cc157404c04c1974",
        "10f3f3863551045e",
        "def9a4f14efa0234",
        "1823bc887306d320",
        "0db057effef71ffe",
        "a4704a5eaa268ae3",
        "2d4553cbeed14321",
        "e3f6b7306a3e8c28",
        "17f2a9cfcd53cb56",
        "4e6aa716953143d8",
        "e191a0c11b305082",
        "c49a174559c8b531",
        "9389830e814abd7b",
        "c07a656bdaa512f2",
        "e5d3e57c99b82559",
        "016a51faf2f1be20",
        "360704cb02b95021",
        "b5866873c98c3348",
        "82fcb0ffa16eb30b",
        "2d403ce4c47cf357",
        "9efc7142954dcd9b",
        "3ed936459baad411",
        "85c3f4f8ebc7d920",
        "38411118d66ce753",
        "58b6a7927f20f357",
        "daf84e5113e00085",
        "0ab434ec74665bb8",
        "512ac021fdd20361",
        "9db724b4d62402bb",
        "e7fddf940dd162c8",
        "0aa786d3ba994aca",
        "9276760ac8ebf10c",
        "5bb1c7b2de070eb0",
        "d4ee98100dc9d67e",
        "739952d59804c2ca",
        "82a73df0ced60e57",
        "867a1286e657c808",
        "735260c2cb7038b1",
        "14f227d8eeb94cd6",
        "335257f6278efcb1",
        "625239db9de96e33",
        "2df8f902d2ce239b",
        "686009bf00706db8"
      ],
      "_newsVolumeRaw": 65,
      "_socialVolumeRaw": 339.5
    },
    {
      "weekStart": "2026-09-07",
      "weekEnd": "2026-09-13",
      "fearIndex": 61.6,
      "dataStatus": "complete",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 65.7,
          "volume": 75.3,
          "negativity": 53.5,
          "itemCount": 164,
          "negativeShare": 5.2,
          "uniqueSources": 90
        },
        "social": {
          "score": 45.7,
          "volume": 38.6,
          "negativity": 52.9,
          "itemCount": 157,
          "negativeShare": 15.2,
          "platformCount": 1,
          "engagementUnits": 192.0
        }
      },
      "components": {
        "newsVolume": 75.3,
        "newsTone": 53.5,
        "socialVolume": 38.6,
        "socialNegativity": 52.9,
        "severeEvent": 92.0
      },
      "articleCount": 164,
      "socialPostCount": 157,
      "uniqueSourceCount": 90,
      "socialPlatformCount": 1,
      "negativeArticleShare": 5.2,
      "negativeSocialShare": 15.2,
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
        "news": "Pilot week-on-week ratio: 2.50x; 3/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 0.57x; 3/8 baseline weeks."
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
        "suppressedCandidateCount": 37,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": []
      },
      "events": [
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
          "id": "auto-2ebee63a67ed07ff",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "0d74ed818c36050f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kayonews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "951 Pinjol Ilegal Dihentikan OJK hingga Agustus 2026, Begini Cara Cek Pinjol Resmi - kayonews.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-394813bd254b94e9",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "092a5236afdd6108"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "belitongekspres.bacakoran.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJKHentikan1222EntitasKeuanganIlegalhinggaAgustus2026PinjolPalingBanyak - https://belitongekspres.bacakoran.co/ - Belitong Ekspres",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3cdab170bff634d4",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "eeb2b667d7c2141e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pdiperjuanganbali.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hentikan 951 Pinjol Ilegal dan Blokir Rekening Penipuan - pdiperjuanganbali.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4f5751218f5cf70a",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "ec7215a2302d6b46"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hentikan 951 Pinjol Ilegal, 1,2 Juta Rekening Terindikasi Scam - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-70bffd064e9f164b",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "f36322a0ba3f8264"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gebrak.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Hentikan 951 Pinjol Ilegal hingga Agustus 2026, Total 1.222 Entitas Keuangan Ilegal Ditindak - gebrak.id",
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
          "id": "auto-a9b3b123300bc874",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "4c45fdaf07a47061"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "stabilitas.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gempita Paylater dan Gadai: Pembiayaan Meroket di Tengah Sanksi Tegas OJK - Stabilitas.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c72964f59d1a092",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "ffab628fa732bf5f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Download Flow Uang Aplikasi Pinjol Apk Web 2026, Legal atau Ilegal OJK? Ini Pengalaman Galbay dan Teror - Berita DIY - Berita DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d32feedbe0b3f3f",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "7622bb7a37003b78"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tolong p polisi, sidak itu kantor kantor pinjol dan hp hp para pegawainya, selamatkan rakyat Indonesia dari bunuh diri m",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6465acb5cd92a524",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "c693d29dccb3a8b7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kmren di rapat DPR Desy tarnasaei sudah memprores keraa kemendigi OJK dan yg lain karena segera bereskan pinjol ..karena",
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
            "d7c992f883c4bfca"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Link Apk Pingo Pinjaman iOs Aplikasi Android Online 2026, Ini Pengalaman Galbay Teror dan Restukturisasi - Berita DIY - Berita DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d08e1fc5b15f6580",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "a4c32c0bcf259cd2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Laporkan,pencemaran nama baik kalo diteror kaya gitu,pidanakan sekalian orang nya",
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
            "3c442189e6c05d69"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terima Puluhan Ribu Pengaduan, 951 Pinjol Ilegal Ditutup - infobanknews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-16856d9031a744a4",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "09fe81ea0f55f87d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nusantaraterkini.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tembus Rp3,8 Triliun, CBA Soroti Anggaran Remunerasi OJK di Tengah Maraknya Pinjol dan Scamming - Nusantaraterkini.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-16d4c58cd9a87b1e",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "02ed1140b394bdc9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas PASTI Setop 951 Pinjol Ilegal, Kerugian Tembus Rp 206 Miliar - cnbcindonesia.com",
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
            "b027d93fe47a3eb2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "video.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK \"Sikat\" 951 Pinjol Ilegal, Ratusan Investasi Bodong Ikut Diburu - Kompas.com",
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
          "id": "auto-5756ce948d6e6d8f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "1401fe03f037434b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pilihanindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Bongkar 951 Pinjol Ilegal dan 242 Investasi Ilegal, Kerugian Warga Capai Rp771,2 Miliar - Pilihan Indonesia",
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
            "aa51ffa32bbf1c2a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hindari Pinjol Ilegal, Ini Daftar 94 Pindar yang Resmi Berizin OJK September 2026 - infobanknews.com",
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
          "id": "auto-740a217ce8bb1b64",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "5d0786a4e91987cf"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cirebon Edukasi 700 PPPK Kota Cirebon Cegah Pinjol Ilegal dan Judi Online - RRI.co.id",
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
            "8556321675e23d9d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radartegal.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Asal Klik! Waspadai Jebakan Modus Baru Pinjol Ilegal 2026 yang Bisa Kuras Rekening - radartegal.disway.id - radartegal.disway.id",
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
          "headline": "OJK Terima 30 Ribu Aduan Sektor Keuangan, Pinjol Ilegal Mendominasi - suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-896ed0dd716cf251",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "8de419005276af05"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pdiperjuanganbali.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Fasilitasi Pengecekan NIK KTP untuk Antisipasi Pinjol Ilegal - pdiperjuanganbali.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8badc20f4e4597a6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "1d2fc2b7ae03d4de"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jakarta.akurat.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sikat 951 Pinjol Ilegal, Selamatkan Rp 206 Miliar Uang Korban - Akurat Jakarta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ce8dad658dc391f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "fc671e02d0489264"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "aboutcirebon.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cirebon Ingatkan 700 PPPK Waspada Pinjol Ilegal, Judi Online dan Investasi Bodong - About Cirebon",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b5130fd52f21417c",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "34f8968d95253c99"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarlampung.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hindari Jeratan Pinjol Ilegal, OJK Ajak Masyarakat Cermati Syarat Pinjaman Sebelum Lakukan Transaksi - radarlampung.disway.id - radarlampung.disway.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bcca0119e229c4fa",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "7b326a9520be36ae"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "harianjogja.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK DIY Ungkap Ciri Pinjol Ilegal, Investasi Bodong dan Judi Online - Harianjogja.com",
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
          "id": "auto-f2b72bbe1938a45b",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "ca4e1bbfaad7d126"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Setop 951 Pinjol Ilegal - finance.detik.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f8e0086116c5d372",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "48d4adbcc809a5fc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "dialogindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cirebon Edukasi 700 PPPK Kota Cirebon, Waspada Pinjol Ilegal dan Judol - Dialog Indonesia Media",
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
            "814e18e306e869e5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sebut 7 Pinjol Belum Penuhi Kewajiban Ekuitas Minimum - bloombergtechnoz.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-178b9ffff38345b2",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "19e4c4b657b59fec"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "JANGAN NONTON DISINI ,, MENDING NONTON DI RAJA GALBAY  LEBIH TENANG LEBIHKUAT MENTAL KITA ..",
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
            "e7ce08ff272f71ef"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pinjol Tembus Rp105,63 Triliun, AFPI Peringatkan Risiko Gagal Bayar Makin Besar - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3b8649e3ae563663",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "0619565001b4d69c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya galbay sudah 3 th ,macam macam pinjol termasuk spaylater aman aman saja ,bodo amat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46cd1e9a30ea5234",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "7f2be2900d6bdc57"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Utk bubarkan Pinjol,,,,kompak semua nasabah Galbay sj,,,,,lawan & bangkrutkan perusahaan Riba....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49a7ed258e3ebfee",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "100da2733875b806"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Galbay sudah setahun baru tadi wa lagi, diskon 100%, tapi saya blm ada uang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4c16ad002efd6445",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "ef4676f1d2de173b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "makannya buat kalian yg sibuk pinjol sana sini, usahakan di bayar sebelum jatuh tempo, galbay\" mulu klw g mampu g ush pi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-66ffeb95e6ef204b",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "0e3c91327e57af0e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol tdk usah di byr,,,Galbay sj,,,,hancurkan  pinjol penjahat Rentenir.....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7546a9d5f1624fbf",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "f3e90af4e16a2481"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bodoh Amat sy sd Galbay di Spaylater😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7bf8cb8a395a0172",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "63fbd828c4c5d02d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sepertinya admin blm pernah merasakan galbay atau minjol ya...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-880089feef53b33c",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "9340891eef8eaa75"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini akan lebih kejam lohh ketika RUU perampasan aset di sahkan dan lentera2 yang dulu galbay itu akan masuk kategori pid",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9888df894ae039dc",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "fd3f82836699d09f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bg klw galbay di kredivo sebanyak 1jt dtg kah DC ke rumah bg 🙏",
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
            "190e5a86bf0de96f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bos AFPI Sebut Pelemahan Daya Beli Jadi Salah Satu Penyebab TWP90 Pindar Tembus 4,32% - investortrust.id",
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
            "8587031c8f2dadb5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Daring Tembus Rp 105,63 Triliun, TWP90 Naik Menjadi 4,32 Persen - investortrust.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-00efaa43a70c1233",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7950c0373142e98f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bandung hadir\nBismillah semoga beruntung buat tambahan anak operasi mata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-021c494a65ce04a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d2f3a09d2e1b1a52"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat , lagi butu bangt udah bberapa bulan gak dapat kerjaan 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-030c05bf88dc33b7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "54df1a0d446c95f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapet buat bayar Kontrakan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-044f845a2a2ebee0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a883cddf2840832f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang sehat selalu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-06b568c31f0b6274",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1ffa8253a8128856"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "josjis terbukti cair nih",
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
          "id": "auto-0b6c4c4e2731373e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fcb7069a2432f1c3",
            "f49bb438c8912ad7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "id.headtopics.com",
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tak Hanya Gaya Hidup, PayLater Banyak Dipakai Buat Kebutuhan Mendesak - Head Topics",
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
            "ae42a4ff284dc226"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Warga RI Tembus Rp105,6 T, Kredit Macet Naik Jadi 4,32% - cnbcindonesia.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c03d0751eebc7cf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "530cb65897a0d27b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan damai mbak sumpah , kalo bukan mbak nya yang spek up siapa lagi",
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
          "id": "auto-0c856f82406b2ca3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fc720fec8d475465"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir dari sulawesi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-10322d82e10fbd49",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bfe8c44d8c73a682"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarbadung.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terdeteksi Judol dan Pinjol, 32 Keluarga di Buleleng Dicabut Bansos - Radar Badung",
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
          "id": "auto-1381beadbb4dc681",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9956f887651bf92d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat nyambung hidup",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1419b77426aa9843",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "12fa19e05fa9e4b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gue mau minjem di tolak mulu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1534d8f4144e1339",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8487d654868a41ad"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hehe makin banyak aja pinjol..stop jangan tergiur sama pinjol..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-16eb6f58f37e2ebc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "805e2bdb083b8a3f",
            "a01f2c40738b5d9c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "liranews.com",
            "realita.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Rakyat Tercekik Pinjol, Anggaran Golf dan Rumah Miliaran Komisioner OJK Disoro - LiraNews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-16ef7f3f38ed4686",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f2bf29ef2ef7db88"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah smoga calon anakq dsni rejekinya amin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-185280c401c3491d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "608bc2a9dfd8a64e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompas.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Digital, Pintu Masuk Akses Keuangan dan Risiko Konsumtif - Kompas.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-19744a0f0422ee4d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0f710a78c60229e8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insiden24.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Aksi Rampas Paksa Mobil di Gerbang Tol Pekanbaru-Dumai Digagalkan Polisi - Insiden 24 - Insiden 24",
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
            "332bf02a2f38bfea"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Mobil dan Motor Makin Susah, Perusahaan Pembiayaan Makin Selektif Beri Utang - wartaekonomi.co.id",
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
          "id": "auto-1d51b157b4f5703f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d8b5969b87dae3e3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peluncuran Laporan Dampak Sosial dan Ekonomi Kredivo, Foto 1 #2042061 - Tribunnews.com",
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
          "id": "auto-1d9c1dc804ebe468",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f8c9890874e8c58b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "databoks.katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Masyarakat Indonesia Naik Jadi Rp105,63 Triliun pada Juli 2026 - Databoks",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1dc782c366590ae5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6c5bb4b4ff082d0b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah yaa allah untuk buka usaha",
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
          "id": "auto-1e9c69ea64ef25cc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "32d1a03529caa336"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Greget banget sama cowo nya itu loh 🗿😭..",
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
          "id": "auto-252fd38ab6786d5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "970163c073070d1d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah buat nambah nambah usaha🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-25594aaf25c4b6bf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1d887bc59e28c72a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "5 Arti Kedutan di Tempurung Lutut Kanan Menurut Primbon Jawa - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-261c6f8f8e774092",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7eccdb287d2323e8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum,KK Meliza",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-27115af2da5f5572",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bb67a4ce673ed4d9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Solusinya di blokir pinjol di Indonesia sangat meresahkan masyarakat pemerintah saya yakin gk berani",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-283a6a82490c7d48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "47edd75b72d766f4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Tingkatkan Kredit Produktif dan Perluas Akses UMKM di Indonesia - readers.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2d1d6d85d26fb514",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "58c2bb8ad9cb1352"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Baru kali ini ada anggota dpr yang kritis dengan ketidak becusan ojk dan komdigi yang diem dan tutup mata dengan pinjama",
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
          "id": "auto-2de7000836181e01",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b64a1ddaf653f4d2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Riset UI: Mayoritas Kredit Digital Bukan Buat Konsumtif - cnbcindonesia.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2def466793d8e125",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "690abd2cdc34ea21"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2dfad05a6be3e1ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a8aaf2df8b4ac500"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK catat pembiayaan pinjol capai Rp105,63 triliun pada Juli 2026 - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2e55afa418c9d113",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4accf646481dd492"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya Allah dapet kerjaan tetap + bisa ngurus anak",
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
          "id": "auto-2f526fd33dd1f3db",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9b1cf0bf720c5a3c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "industry.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Digital Makin Produktif, Kredivo Klaim 54% Penyaluran untuk Kegiatan Produktif - Industry.co.id",
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
          "id": "auto-3168486f926c4466",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f1d749f199e47205"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peluncuran Laporan Dampak Sosial dan Ekonomi Kredivo, Foto 3 #2042063 - Tribunnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3455fb90b6077097",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a33c45b350df4322"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Abis abisann saya bang...kendaraan lenyapp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-34e55585801197e2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "859ec0651db1f98f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jurnalnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Lewat KOPRI Peduli, FORMIT Kirim Bantuan Kemanusiaan ke NTT - Jurnal News - jurnalnews.id",
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
          "id": "auto-358752d231852d29",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "293a06f696c3e585"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PT Inovasi Terdepan Nusantara Pinjol Apa Saja, Aplikasi Apa selain Kredione? Ini Alamat dan Call Center Kantor - Berita DIY - Halaman 2 - Berita DIY",
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
          "headline": "Utang Pinjol Warga RI Tembus Rp105 Triliun, Kredit Macet Ikut Naik - suara.com",
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
            "88fc9acc3ccb4b72",
            "9d72f6712aa0c8c1",
            "6b38d88671b57563"
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
          "id": "auto-379563b4a8f58f12",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "37c66bf7a5364673"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga saya yang menang Buat bayar hutang",
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
          "id": "auto-3ce07eefc5ebfd71",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "aeb30090a0fb10c8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaasuransinews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Macet Industri Pindar Naik Jadi 4,32% hingga Juli 2026, Bos AFPI Ungkap Biang Keroknya! - Media Asuransi News",
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
          "headline": "Risko Kredit Macet Pinjol Indonesia Semakin Tinggi saat Pembiayaan Melonjak - suara.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3ea60d26263a2830",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f68a4e09500b1935"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "parapuan.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Makin Cerdas Finansial, Begini Cara Membedakan Pinjol Legal vs Ilegal - Parapuan.co",
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
            "f6303ec82d09b161"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sering Terganggu Ditawari Pinjol? Ini 3 Cara Blokir Nomor Spam - cnbcindonesia.com",
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
          "id": "auto-42bbc8acffeb9edf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "93f2c451e160b3df"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir baru gabung bang",
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
          "id": "auto-433a78e3d5eb6d0a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "802d06c31a7f5cc1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaasuransinews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Survei: Akses Kredit Pertama Lewat Kredivo Naik 10 Kali Lipat di 2025 - Media Asuransi News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-437fae158f5dceb1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "99029f0363ecb41c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga beruntung buat berobat bapak yang lagi sakit❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-43cbce640782dcda",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0f8da51afe0d9fd4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rctiplus.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kemudahan Mewujudkan Liburan Melalui Layanan Paylater - rctiplus.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45e267d8738f8117",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e8fd6815d6746c78"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap bang quu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-46fe29cef74b5968",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3143e0f8f0da849a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat KK smogah. Bermanfaat untuk semua orang 🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-47c1a4e697e65682",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a2076139cdedbfff"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "On point bgt bu desi, up kan berita2 seperti ini",
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
          "id": "auto-49aa3c45687ae2ef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9f0e0fd8a7fd442e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "economy.okezone.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "4 Fakta Utang Pinjol Warga Indonesia Rp105,6 Triliun - economy.okezone.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4f384c415708266a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "283a1d696df3ae45"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hongkong hadirr minn 🎉🎉🎉🎉🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4fb1ba7ce9619c63",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1c2b56fe7e28f9e8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "portalpantura.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Warga RI Tembus Rp103,73 Triliun, Naik Rp1,66 Triliun Sebulan - Portal Pantura",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-508c16060e97f322",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dfa7ac7dcf69a4bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bos",
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
            "c47cb512336547ed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "TWP 90 Pindar Naik Jadi 4,32 Persen, AFPI Ungkap Biang Keroknya - infobanknews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-51f4ba14dd00d5e8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "22998e4da15b5d6d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Waalaikumsalam...selalu hadir❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-526f6674958c9550",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "00ce738f348ff28f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Shallallahu ala muhammad",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53a8ac3560e148d2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e0672cca45aefe87"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Baru ja tau vidio ini baru ja subscribe  semoga aja dpat rejeki .slam dr kediri jawa timur",
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
            "f2aeb8bc458f1b33"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang bismilah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53db7967c808a185",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "113e491c839df886"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah.buat kebutuhan anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-54546fdf2e567feb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "39ed7802c97c04de"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tampar balik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-546810e54c1dff1a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b6eb99d7308285df"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah dapat buat biaya orang tua lagi di rawat rs aamiin",
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
          "id": "auto-5713cb80c5e2d819",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f22811357919c016"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Catat Penggunaan Paylater Modal Usaha UMKM Naik 15 Kali Lipat - readers.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-57dc948c648072af",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4c081ea7a644338b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koranbuleleng.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terdeteksi Pinjol dan Judol, Bansos 32 KPM di Buleleng Tersedat - koranbuleleng.com",
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
          "id": "auto-586f287f0e0a281c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "270038c213cd5fbc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sumateraekspres.bacakoran.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "DataPribadiDipinjamuntukKreditHPMalahDitagihRp723Juta - https://sumateraekspres.bacakoran.co/ - sumateraekspres",
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
          "id": "auto-5b577f446753f243",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c4f36e119c858f21"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pengamat Ekonomi UGM Bagikan Strategi Efektif Bebas dari Jerat Pinjol - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5c397a73fb974552",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c751b8bc975615c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapet buat daftar kerja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5dd4ef91ff5d5d5b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "36ead4567bcac930"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buktikan",
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
          "id": "auto-5f6e316bd16fe6f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0cef12fae7ce0b78"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek NIK Dicatut untuk Pinjol, Awas Data Pribadimu Disalahgunakan - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5fdcf389fb9d3cc7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5e69da956a82cc4d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dapat rp.1000 juara 1.dong..rejeki banget",
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
          "id": "auto-62618f74474bd105",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aa6d13d4d6999be0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makasih teh desi..mengingatkan rekan rekannya bahwa akan ada hisap diakhirat yg menanti kalau mereka zalim terhadap masy",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-634ab8fd6987b3a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "07228e35bdf10a12"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Warga RI Makin Banyak Utang Pinjol, Juli Tembus Rp 105 Triliun - finance.detik.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6692434b4b928d49",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "73fe53ac349382c5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peluncuran Laporan Dampak Sosial dan Ekonomi Kredivo, Foto 2 #2042062 - Tribunnews.com",
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
          "id": "auto-69ccf52920ea38a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ee5300f756d7803c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga sukses selalu kang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6abbdeec60ea5b65",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a6501330dd847c00"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "channelsulawesi.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Makin Marak, OJK Catat Nilainya Tembus Rp105,63 Triliun - ChannelSulawesi.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6af1631548d0ac0b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fe9b684bf79aab93"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "tutup aplikasi itu mbak \n\nharus di laporin.",
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
          "id": "auto-6c5d4ef368940afe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ecb3bc2a0635705"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Waalaikumsalam wr wb\nNyimak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6cac8fcd005d8e66",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "015a74b316f0922b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sumsel hadir ,untuk tambahan belanja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d305313818ae9b2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "81e54fa16f1cc092"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "akurat.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "7 Perusahaan Pindar Belum Penuhi Modal Minimum, OJK: Sudah Menyampaikan Action Plan - Akurat.co",
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
            "673e75355af5bc06"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Masyarakat Masih Enggan Pakai Asuransi Kredit Pinjol, Harga Premi Dinilai Kemahalan - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6dc04d302020794e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "42876b7618c96679"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat uang untuk lunasin hutang",
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
          "id": "auto-6ea0203f631ef4a6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "52192ec91775e519"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Celah Pembiayaan UMKM Capai Rp1.290 Triliun, Kredit Digital Jadi Alternatif - wartaekonomi.co.id",
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
          "id": "auto-7170d2dd73050571",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7735ee95d6d6615a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga keciduk",
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
          "id": "auto-7459d8dc50f374cc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2bf7e7c6324fba7f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mobitekno.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satu Dekade Kredivo: Wujudkan Inklusi Keuangan dan Berdayakan UMKM Nasional - Mobitekno",
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
            "2c1dbccf38f9d005"
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
            "74460c2468547140",
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
          "id": "auto-77399ca9d9fcbe60",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d9239d0a6cb3a66a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mudah\"n beruntung",
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
          "id": "auto-77ab94456990efb6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4744a2608916f3c5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aamiin Shalallahu Ala Muhammad 🤲🏻..\nMashaAllah aku seneng kalo denger KA Mel baca sholawat muNjiat..aku suka ikutan baca",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-77b1ac30765d1369",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "238a3bcc0b9737c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau buat jajan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-77db652dd9b3c2f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "85a37c34f59b4f2c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga rezeki ank sholeh buat beli vitamin +susu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7927a0d3ef64da3c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "636ba4be9e317e6c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kak mel makassar hadir, semoga aku selalu istiqomah solawatan dan dpt keajaiban.solawat jg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7976630e66711795",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c41574a0c8cfd3e8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selalu nyimak bos ku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-79e76a5c5cec7a14",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8adcefb4a7d96871"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah semoga dapat bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7c4fcf580fe191dc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c48d8b990129bf48"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peminjam Modal Usaha Kredivo Adalah Pelaku Mikro - infobanknews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7de061587535eda1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6bbac41b7177dae2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum hadir mbk mell ❤ dan semua teman pejuang solawat",
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
            "60041cda92d7cfa6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Apk Pinjam Sinar iOs Android Sfile Download Login Aplikasi Pinjol 2026, Apakah OJK? Ini Pengalaman Tidak Bayar - Berita DIY - Berita DIY",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-82accb3711e25391",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d41c00acba4d47a7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kalsel.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kapolres Tanah Laut ingatkan personil jauhi pinjol dan judol - kalsel.antaranews.com",
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
            "8d827d23d8a884a0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Warga RI Makin Doyan Utang di Pindar, Ini Buktinya - infobanknews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-84df155e27cabe04",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7c37c3bcad316729"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga channel ini dapat berkembang lg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-861dc547b137ae4c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96ef2c6a5d11e217"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sangat membantu bang",
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
            "3ef1bc869379a313"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "memorandum.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sales HP Kuras Limit Kredivo Rp40 Juta Berakhir Jadi Pesakitan, Begini Modusnya - memorandum.disway.id - memorandum.disway.id",
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
            "464a575bfb93663e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Produktif Kredivo Meningkat, Pengguna Kredit Modal Usaha Naik 15 Kali Lipat - kontan.co.id",
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
          "id": "auto-8e479f6297a98e1c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "37928b0e20975889"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nova.grid.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kembali Digelar, Ini Semangat yang Dibawa Indonesia Women Fest pada 2027 - Grid.ID",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8ef4f95503bfb939",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db190166ccbdd81b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selalu memantau bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8f0941edf19fa3a3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "07886a1046bbf4bd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "E'mak dulu rajin sholawat, sholat malam, zikir, kenapa sekarang jadi agak malas sholawat semenjak ayahku meninggal setah",
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
            "461a00eda7296f9c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Catat Porsi Kredit Produktif Tembus 54,3%, Kontribusi ke PDB Capai Rp 33 Triliun - investortrust.id",
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
            "c68765595a39f0ff"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kreditpintar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Waspada Akun Palsu Mengatasnamakan Kredit Pintar, Simak Cirinya - KreditPintar",
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
            "390332bc1f39f53a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjaman Online Warga RI Makin Banyak, Tembus Rp 105 Triliun - finance.detik.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9016d73e7f739214",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b1376521dee051e7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tampar balik mba... 😅",
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
          "id": "auto-90debbe03643d7e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "949f157fca298823"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ka mell knapa ya kalo setiap ka mell baca sholawat munjiat ini di barengi aku juga baca, hati ku bergetar airmata pun ng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-91ca8e4daf9f057a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "78b4c213cb71f0bd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hdir",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-957989a09f3992ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5d287b2e29bec67f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "wih wktunya kgiatan dapur hehe....smngat min",
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
          "id": "auto-984841a2a3c9d353",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b50df5ffb50c4010"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lensamedan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Data Pinjol Jadi Kendala Pelaku Usaha Dapat KUR - Lensa Medan",
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
          "id": "auto-9887d99bb7c6a55f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "77aa23793a18abc2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir ..semoga dapat buat beli sufor anak.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a8e57dd7e8ac05c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "57a8bf93bfa5576e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah mudahan dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9b477b869248c3f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5ee1cc7de40e576a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "validnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Makin Selektif, APPI Sebut Approval Rate Anjlok Jadi 50% - Validnews.id",
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
          "id": "auto-9d5f218c24bdddaf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0baa158d4e6b075a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aku mau berangkat jum.atan bak mel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9e3087d21f1c4f13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8ba36af4e013b98b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "stabilitas.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tekan Risiko FOMO dan Jerat Pinjol, OJK Kebut Literasi Keuangan Gen Z Banten - Stabilitas.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9e515f2044ae017e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4a3029ea1422f5a4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lahhh.. Ini tambah miris, nonton video ini kok yg muncul malah iklan pinjol Adapundi & Rupiah cepat? Youtube gimana ini?",
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
          "id": "auto-a1dd395c19f3a1f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "181826706a1ea643"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah",
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
          "id": "auto-a29c3b625cb820bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2ea0af9b49088c16"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan lah gali lobang tutup lobang dlm bersholawat 🦕🦖🦎🐲🐉🐜🐜🐜🐜🐈🐈🐈🐈",
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
            "09a6b0269a9a664d"
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
          "id": "auto-a3d58254133fec59",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0313cb819cbc5f1f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bosku",
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
          "id": "auto-a67684be53d24bfe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "035b84b1d8268861"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater Bank vs Fintech Makin Sengit, Kredivo Ungkap Keunggulannya - infobanknews.com",
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
            "cc2550cbb6efb4ad"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "databoks.katadata.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Rasio Kredit Macet Pinjol di Indonesia Naik pada Juli 2026 - Databoks",
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
          "id": "auto-a924b80797dd6725",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "57043aed4835bdd3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Cek KTP Dipakai Pinjol Tanpa Izin - detikcom",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a92a6b84eb75c8a0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "12b88baea0b8ba0a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Rilis Daftar Pinjol Resmi Terbaru September 2026 - readers.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a9527d2ca3ef98e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ead115cff58c5fed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "buat tambah uang berobat",
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
            "9674f61aab9504a8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Pinjaman Online Warga RI Makin Banyak, Tembus Rp 105 Triliun - cnbcindonesia.com",
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
          "id": "auto-ab16bedb098cb2d5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "802e598c12d147e9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Oh kamu juga pengguna pinjol buk? 😅 bisa tau dri ini saya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ababea04f15e9077",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "45baa3ddcee0c206"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "OJK sialan mau untungnya aja pdhl udah bnyk korban",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac06dbaba08d84b3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d1a0c77d892acd34"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Johnida  hadir from Malaysia",
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
            "d89e78a1068dd111"
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
            "81ea02d44ae10466"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kenapa NIK Lebih Gampang Diberikan ke Pinjol daripada ke Sensus? - investortrust.id",
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
          "headline": "Daftar 94 Pinjol Resmi OJK September 2026, Cek Sebelum Ajukan Pinjaman - metrotvnews.com",
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
            "9f132ed18347fc37"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Aksi Kredivo Perkuat Akses Kredit Hingga Dampak Sosial-Ekonomi - cnbcindonesia.com",
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
          "id": "auto-b9dfeb4e62d6db17",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b42ab414dcb1f05e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang buat berobat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bdd809a4698589cd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "282f5a7d053c77b3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "akurat.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Studi Kredivo dan UI: Kredit Digital Bukan Lagi Sekadar PayLater, Jadi Pintu Masuk Kredit Formal bagi Generasi Muda dan UMKM - Akurat.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be245c5f0fee7b86",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2033451f3f4f1fe8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaramuhammadiyah.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Edukasi Bahaya Judi Online dan Pinjol - Suara Muhammadiyah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bfcf3dd667ba6b5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bf0e597e084df5c7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaragarut.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Utang Pinjaman Online Masyarakat Capai Rp 105,63 Triliun Juli 2026 - suaragarut.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bfd0bce1ad7019a6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "33fe2ae0e7565ff0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "balipost.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Data Terdeteksi Judol-Pinjol, Bansos 32 KPM di Buleleng Terhenti - balipost.com",
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
            "9be1e461e188ab31"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Catat 54% Pembiayaan Disalurkan untuk Kebutuhan Produktif - investortrust.id",
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
            "65db61052ba25b22"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Ungkap Penyaluran Kredit Usaha Melonjak 15 Kali Lipat - wartaekonomi.co.id",
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
          "id": "auto-c56326dcc516effe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f33a1075978ef7fb"
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
          "id": "auto-cbbb7567c9de7d84",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "aaeb805bad43186e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaraaisyiyah.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mahasiswa KKN UAD Gelar Sosialisasi Bahaya Judi dan Pinjaman Online di Gunungkidul - Suara 'Aisyiyah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cbe3cf6d147a2870",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8b5eddb3a0e8e368"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sekali lagi ya typo nya ituloh GK ketinggalan...…🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cbf9a263e0194f5e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "97f787e7cb232d55"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "waktunya makannnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce1b8816bba77cbf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "68dbcd6869bceb9c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kiwiw kiwiw siap buat modal dagang bos",
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
          "id": "auto-cf9e08d09cab8d8f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6821754a6edd1177"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Itel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d109f357bb99258f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dd35d2f2dcf456b8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang bukannya indosaku ada DC, itu kemarin yang viral di Semarang karena prank damkar saat nagih",
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
          "id": "auto-d1dd791fc2452975",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4fb23576c7e2fb9d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sudah masuk ancaman non militer... Negara harus tegas berantas",
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
          "id": "auto-d76d3ef651644d38",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c35e5509cf0f6c92",
            "a861148ec71130e1"
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
          "id": "auto-d781c3d3009a75f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3d603904afa8c9f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat selalu bang..",
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
          "id": "auto-da743ef8c2c2b2f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6085adb6dd73d15e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kak dpt wa dari gopay katanya mau kerumah pdhl cuma 400 apa BNR kak mau dtng",
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
          "id": "auto-dcdc1ba375546025",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a762d8299c5f86fe"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah bisa buat modal usaha",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e0852db0d92407eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2776ccf618b05705"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kok saya nggak ad bng .ad ny dana cicil",
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
          "id": "auto-e3318cc93ac9287f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "89ac74985fa444f7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Biarin utang memumpuk",
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
          "id": "auto-e4d85b896020207a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7a3f6403c87d0a6a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mohon doanya y teman\"\n1th ini saya sedang mengalami rasa abeh dalam diri saya,yg menggangu gerak aktivitas keseharianku,",
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
            "bba3c22e29d106ce"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredivo Ungkap Tren Paylater untuk Modal Usaha Makin Meningkat - infobanknews.com",
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
          "id": "auto-e88cd53177a4c41d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dccf546a2cb92bb9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnnindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "VIDEO: Utang Pinjol Warga RI Tembus Rp105 Triliun - CNN Indonesia",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e8d89eac32cf6cf9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aa3f9fef822ada4f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bosqu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ec125a00ebd3be17",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6c6e0645cb3ec2c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah abang ku",
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
          "id": "auto-ecf66919c92c1efb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ae19a6a63f7640f3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "terkenal.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ungkap Utang Pinjol Tembus Rp105,63 Triliun - terkenal.co.id",
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
          "headline": "OJK Catat Utang Masyarakat di Pinjol Capai Rp 105,63 Triliun Juli 2026 - suaragarut.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee75263355bc793a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2cb8afb95aec3b80"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selalu hadir menyimak bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee9cbdbba1e20cb7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1452fd7d00cc0e8f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sholallohu Ala Muhammad",
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
            "a580798dcda3846e"
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
          "id": "auto-f2c2984845f75446",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ae1dea545db9694c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaiku mb mel, semalam aku ngebatin dalam hati yaAllah besok anak\" Mau jajan apa aku mau dpt reseki dari mana ya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f3a901672e1eb4ee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5bf082b203a4eec2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nyimak .....lagi butuh 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f3e445265ee21c62",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "83ced6a759e327ee"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Outstanding Pinjaman Online Juli 2026 Tembus Rp105,63 Triliun - bloombergtechnoz.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f7a9a5577ecd4d50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9f0094cc0e158d11"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum.. hadir kak mel.. bener kak masyaa Allah ..pertolongan Allah itu sngt dkt..😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f8cab8ccfc00cf63",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ef3abd25188b98b2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Berharap sma manusia psti kecewa tapi klo allah mngijinkan psti menang.\nKunfayakun🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f91032a4a2c918c9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96f18bf57fb1770a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum. Nyimak selalu Kamel",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc86a06ea7319ff4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3437c699d955f94d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bang \n\nyahhh modal usaha",
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
            "83963f3e9094fd09",
            "960771374e324191",
            "7f50cef3c09ec6aa",
            "ba34c132ebb8db6f",
            "e9b75ca3f02d73ed",
            "81cf540a64b48500"
          ],
          "socialItemIds": [],
          "independentSourceCount": 7,
          "domains": [
            "ekonomi.republika.co.id",
            "finance.detik.com",
            "finansial.bisnis.com",
            "infobanknews.com",
            "inilah.com",
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
          "id": "auto-12d803847c8daa2f",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "c49d0063f5881677"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "akurat.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater Bukan Hanya Dipakai Saat Ekonomi Tumbuh, Bisa Jadi Penyangga Saat Krisis - Akurat.co",
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
            "6c111946f300c793"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Utang Warga RI Makin Gemuk, Pinjol Tumbuh 24,76% hingga Tembus Rp105,63 Triliun - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-246a587cf7274f9b",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "767816c64c248a23"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Meledak 25%, Ferry Latuhihin: Pertumbuhan Ekonomi Tak Terasa di Rakyat - wartaekonomi.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "1d887bc59e28c72a",
        "ce212d8a83a128a2",
        "694669cd708482ff",
        "0cef12fae7ce0b78",
        "52192ec91775e519",
        "f30f404c03cbfadc",
        "2033451f3f4f1fe8",
        "31584fe90a9c7131",
        "d41c00acba4d47a7",
        "1401fe03f037434b",
        "6a721392f63ee79e",
        "8847c82d4ed1c0dd",
        "bf0e597e084df5c7",
        "8de419005276af05",
        "eeb2b667d7c2141e",
        "a176e133eb0fc2e4",
        "ec7215a2302d6b46",
        "814e18e306e869e5",
        "ca4e1bbfaad7d126",
        "26fdc4d219b1fba4",
        "3c442189e6c05d69",
        "62925b12bb22e41b",
        "a8aaf2df8b4ac500",
        "83ced6a759e327ee",
        "92702693098299e7",
        "8587031c8f2dadb5",
        "a6501330dd847c00",
        "767816c64c248a23",
        "ae42a4ff284dc226",
        "a4573b71ab6320e7",
        "02ed1140b394bdc9",
        "83963f3e9094fd09",
        "960771374e324191",
        "7f50cef3c09ec6aa",
        "ba34c132ebb8db6f",
        "c19a015ce8ff0e5a",
        "6c111946f300c793",
        "07228e35bdf10a12",
        "8d827d23d8a884a0",
        "137b0f1879be183a",
        "81e54fa16f1cc092",
        "59c2e261b47ac938",
        "57043aed4835bdd3",
        "ee3c2c27bcf939b9",
        "9be1e461e188ab31",
        "859ec0651db1f98f",
        "aaeb805bad43186e",
        "b027d93fe47a3eb2",
        "1bf0ec9d143b3daa",
        "030a5a438831cfd8",
        "f36322a0ba3f8264",
        "1d2fc2b7ae03d4de",
        "92e2c7dfc2ed9d6e",
        "092a5236afdd6108",
        "293a06f696c3e585",
        "396dcfadd416d30a",
        "390332bc1f39f53a",
        "9773d0dee0773ce7",
        "cc2550cbb6efb4ad",
        "5021546f4d3445bc",
        "e9b75ca3f02d73ed",
        "09fe81ea0f55f87d",
        "4c081ea7a644338b",
        "f8c9890874e8c58b",
        "9bcfb1ed0761fdc3",
        "4c7fdfd18eccdf98",
        "dccf546a2cb92bb9",
        "9674f61aab9504a8",
        "c68765595a39f0ff",
        "190e5a86bf0de96f",
        "a6d073897854a294",
        "3ac967167e6e5255",
        "cdfd4b473971a997",
        "33fe2ae0e7565ff0",
        "f27ebe82436bb8fb",
        "4c45fdaf07a47061",
        "34f8968d95253c99",
        "ec2b00929115f688",
        "0f8da51afe0d9fd4",
        "780c86e0a204cead",
        "f68a4e09500b1935",
        "2c0be31ff2586a28",
        "12b88baea0b8ba0a",
        "aaeffc2e1a81c36b",
        "ae19a6a63f7640f3",
        "05d0442c4d842c2f",
        "805e2bdb083b8a3f",
        "a01f2c40738b5d9c",
        "6fa1351a7709d31c",
        "81cf540a64b48500",
        "8ba36af4e013b98b",
        "bfe8c44d8c73a682",
        "1c2b56fe7e28f9e8",
        "2c1dbccf38f9d005",
        "7b007ab0001c30eb",
        "270038c213cd5fbc",
        "747dcc219487ca55",
        "aa51ffa32bbf1c2a",
        "81ea02d44ae10466",
        "aeb30090a0fb10c8",
        "637ee7875c8fb447",
        "332bf02a2f38bfea",
        "2cb54f4d177a062b",
        "f22811357919c016",
        "461a00eda7296f9c",
        "65db61052ba25b22",
        "bba3c22e29d106ce",
        "d7c992f883c4bfca",
        "673e75355af5bc06",
        "f2e6f0942461138d",
        "3fb50efb2505edf3",
        "035b84b1d8268861",
        "1c410daebb04840e",
        "d8b5969b87dae3e3",
        "73fe53ac349382c5",
        "f1d749f199e47205",
        "2c8126ad34fb4c74",
        "e7ce08ff272f71ef",
        "c48d8b990129bf48",
        "c4f36e119c858f21",
        "608bc2a9dfd8a64e",
        "feb37e036fc0d14b",
        "b64a1ddaf653f4d2",
        "282f5a7d053c77b3",
        "fcd23e3675a38eff",
        "802d06c31a7f5cc1",
        "fcb7069a2432f1c3",
        "f49bb438c8912ad7",
        "8cb25e9627d9bf58",
        "9f132ed18347fc37",
        "b50df5ffb50c4010",
        "ffab628fa732bf5f",
        "78eb0a3afa6140d5",
        "7ce14e090546bcbf",
        "9b1cf0bf720c5a3c",
        "5ee1cc7de40e576a",
        "464a575bfb93663e",
        "47edd75b72d766f4",
        "589b17d424ab7ee7",
        "c49d0063f5881677",
        "3ef1bc869379a313",
        "2bf7e7c6324fba7f",
        "c47cb512336547ed",
        "60041cda92d7cfa6",
        "48dbcc452982adfc",
        "d8625fc5a85c62be",
        "a580798dcda3846e",
        "37928b0e20975889",
        "10a90cdc11aa3077",
        "5dd9818f2c760ed2",
        "5d0786a4e91987cf",
        "48d4adbcc809a5fc",
        "fc671e02d0489264",
        "32b320b454884ed0",
        "2dfcc7e59e53815b",
        "286ec5accf36c935",
        "f6303ec82d09b161",
        "c60fb2c6e141b3e9",
        "9f0e0fd8a7fd442e",
        "68b2d1c47c2beb0c",
        "0d74ed818c36050f",
        "0f710a78c60229e8",
        "8556321675e23d9d",
        "7b326a9520be36ae"
      ],
      "socialItemIds": [
        "251b1e0810a06f6e",
        "dd35d2f2dcf456b8",
        "58c2bb8ad9cb1352",
        "970163c073070d1d",
        "9956f887651bf92d",
        "57a8bf93bfa5576e",
        "113e491c839df886",
        "12fa19e05fa9e4b5",
        "632862d3a07c5aa5",
        "dfa7ac7dcf69a4bb",
        "9340891eef8eaa75",
        "6821754a6edd1177",
        "530cb65897a0d27b",
        "c693d29dccb3a8b7",
        "4a3029ea1422f5a4",
        "a4c32c0bcf259cd2",
        "238a3bcc0b9737c0",
        "45baa3ddcee0c206",
        "3d603904afa8c9f8",
        "db190166ccbdd81b",
        "74460c2468547140",
        "ee5300f756d7803c",
        "7622bb7a37003b78",
        "8adcefb4a7d96871",
        "ead115cff58c5fed",
        "1ffa8253a8128856",
        "d9239d0a6cb3a66a",
        "fe9b684bf79aab93",
        "725de7cdcc09cc9a",
        "a762d8299c5f86fe",
        "fd3f82836699d09f",
        "6c6e0645cb3ec2c6",
        "f3e90af4e16a2481",
        "c35e5509cf0f6c92",
        "88fc9acc3ccb4b72",
        "f2aeb8bc458f1b33",
        "a883cddf2840832f",
        "6466d4284e783e8a",
        "9d72f6712aa0c8c1",
        "690abd2cdc34ea21",
        "aa3f9fef822ada4f",
        "fc720fec8d475465",
        "78b4c213cb71f0bd",
        "8487d654868a41ad",
        "aa6d13d4d6999be0",
        "e8fd6815d6746c78",
        "2cb8afb95aec3b80",
        "c41574a0c8cfd3e8",
        "d93e017799996c4b",
        "9c047ef6a1b21ca3",
        "37c66bf7a5364673",
        "63fbd828c4c5d02d",
        "4fb23576c7e2fb9d",
        "2895342086240b46",
        "b1376521dee051e7",
        "7f2be2900d6bdc57",
        "181826706a1ea643",
        "3437c699d955f94d",
        "750929f72e79d668",
        "b6eb99d7308285df",
        "42876b7618c96679",
        "6c5bb4b4ff082d0b",
        "36ead4567bcac930",
        "f33a1075978ef7fb",
        "b42ab414dcb1f05e",
        "93f2c451e160b3df",
        "0313cb819cbc5f1f",
        "68dbcd6869bceb9c",
        "d89e78a1068dd111",
        "2e8db3ee034b8cd2",
        "09a6b0269a9a664d",
        "802e598c12d147e9",
        "43d3026f9f2a7776",
        "0e3c91327e57af0e",
        "185dbed65127e513",
        "12803417b037a65b",
        "a861148ec71130e1",
        "77aa23793a18abc2",
        "6b38d88671b57563",
        "1a67fe089392ec5b",
        "4af05dee35e553f8",
        "196670773d0ce83f",
        "7950c0373142e98f",
        "dbdb2c86d198991b",
        "e0672cca45aefe87",
        "c751b8bc975615c0",
        "5201ae0323dfdfa2",
        "99029f0363ecb41c",
        "d2f3a09d2e1b1a52",
        "f2bf29ef2ef7db88",
        "7735ee95d6d6615a",
        "2776ccf618b05705",
        "e10ab0460c5ef6fa",
        "95beaca28a490120",
        "5bf082b203a4eec2",
        "a2076139cdedbfff",
        "7049ef3f451cb920",
        "2eb07bd97a19ade9",
        "f40f916b7a443e03",
        "557faf15af569b16",
        "1158c85b17f0a240",
        "a49f27aa4eda35a2",
        "015a74b316f0922b",
        "54df1a0d446c95f8",
        "ef4676f1d2de173b",
        "96ef2c6a5d11e217",
        "4744a2608916f3c5",
        "a33c45b350df4322",
        "0baa158d4e6b075a",
        "80108510ced6941e",
        "ae1dea545db9694c",
        "6bbac41b7177dae2",
        "f5a9a07390407328",
        "7eccdb287d2323e8",
        "96f18bf57fb1770a",
        "9f0094cc0e158d11",
        "8a8baa61b8d2751b",
        "ef3abd25188b98b2",
        "89ac74985fa444f7",
        "85a37c34f59b4f2c",
        "07886a1046bbf4bd",
        "100da2733875b806",
        "f559851341c25929",
        "19e4c4b657b59fec",
        "2ea0af9b49088c16",
        "949f157fca298823",
        "f719e97fca8d5784",
        "7a3f6403c87d0a6a",
        "0619565001b4d69c",
        "7ee50bac170b54dd",
        "3143e0f8f0da849a",
        "00ce738f348ff28f",
        "39ed7802c97c04de",
        "3ecb3bc2a0635705",
        "22998e4da15b5d6d",
        "85d2f9c28c6c490b",
        "aeb4edbad7e52321",
        "dd8ee5711e097743",
        "d0610c5fd1d3bf71",
        "5e69da956a82cc4d",
        "32d1a03529caa336",
        "283a1d696df3ae45",
        "d1a0c77d892acd34",
        "6085adb6dd73d15e",
        "a0c73a29709de2e8",
        "34cf298a6d96fecc",
        "f22147dea2beaae7",
        "8b5eddb3a0e8e368",
        "7c37c3bcad316729",
        "1452fd7d00cc0e8f",
        "bb67a4ce673ed4d9",
        "7b916e420041ed1d",
        "4accf646481dd492",
        "97f787e7cb232d55",
        "5d287b2e29bec67f",
        "bb1ecab448d5c79f",
        "636ba4be9e317e6c"
      ],
      "_newsVolumeRaw": 164,
      "_socialVolumeRaw": 192.0
    }
  ],
  "articles": [
    {
      "date": "2026-08-31",
      "title": "Outstanding Pindar Tembus Rp 105,14 Triliun, Transparansi Jadi Sorotan - investortrust.id",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOOHFIRmlqZWlyMVNwRzZnXzVUTXhGWUlCQzNPNVFoR1YyUlRPMGNnRlRfZVNpcjFldkFRRE1McGZ1bnRfOElubXZIdUxFaWpLXzNTRFZiVW9qZm1CcmlCQnBnYlNicmlidmFKcDY2ZHd5N3NkQ0JuVG5jN1gxeWM3MGNLdDhoUVQ2Vmo4bkw3N1ZBLV9Ld3MtRTgwWHFQdkIwNlpqb3QzWE5JcWdrRElBVQ?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "investortrust.id",
      "summary": "outstanding pindar tembus rp 105 14 triliun transparansi jadi sorotan investortrust id",
      "id": "965b9d875f2570b9",
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
      "eventId": "auto-50e03197dcee9b60",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-31",
      "title": "Pengajuan Pinjol Legal Ditolak? Bisa jadi 5 Hal ini Penyebabnya - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOMVdhVXA0X2xNSzZyWXE2QWJBLU5XOUJKbTV1b3BfY1ROZGZuVThBUi01azN3SDcxeFU2RTJzdHBDcHRCSENsUGlpNTUxQXNQQTBudXNGYmNCRzBkelNrUUl1eWlsV0lQQ3V1YVNlVHViTWNybDdDeHcwc2F2WVBKbWxDZFRzaEwydEg5bjFjYzBJMlFfNDhMVkYzZ1N3MG_SAZ4BQVVfeXFMUE1ESXFJQzhyNXJEWUNlTkNxcVJoNER3ZVowenZSYWs2eVQ4Z2p3by01R01PLUo3cUVadVloXzluR3B4dUhPeE90VmFHLVRTdVlZRFpWOGZXTnVfZ2RmNS1zVnVYMkxVcHcyTDAxV2xvWUlUdWNqU29IdDFqOHFMQ2JIWnZQQmZ1enpoaVNTcFZzLUdiVUlRLXMySWVvenc?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "pengajuan pinjol legal ditolak bisa jadi 5 hal ini penyebabnya grid id",
      "id": "6dd9b5485ff98531",
      "domain": "nova.grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aea1e40f36c120d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-31",
      "title": "Telat Bayar Tagihan Kredivo, Kapan Debt Collector Datang ke Rumah? - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOQUFoSDVPY2dvNUI2SE1XdWV4OHpHbmFrZklKMV8xTEVPN2p5Q3ZrdC1CQkdMQWVvU0JpMzJQM2t1TXJka1R2ZDZnVnMzeTFxSGZCcXVoUm9XZWJsdk5yT2dsSUFDUWdGbzdrTFVkX01yR2pWcGhPMU1zZ0VQTE1PZVVINXh6a2x6dFRLdFhJWHlQMVJUTHpzdGN4UFVuU21SMUHSAaABQVVfeXFMT1kxTzhnTTdKQkVQaGx0NElTd1FTb21WeWctV1dkUlMtMVctc3c1RWxLS3BQd1ktcUVvNHU1ZWYweXVPa0VmM3d3aGltdjlRbXdXMm1ET2J1QlFFQXNRSGU2VXBRX2UxU3BzQUZtQmpEWDdrb1RsLWF0a0Yzd3prVU4tSDdDbUxMZXV4dHhJNzZqOHYtUTAyNnJabVBpWEF2WA?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "telat bayar tagihan kredivo kapan debt collector datang ke rumah grid id",
      "id": "f4cdc899bfddd90a",
      "domain": "nova.grid.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2849ce70dc3fe910",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "25.875 Pengaduan Aktivitas Keuangan Ilegal, Pinjol Ilegal Dominan - bloombergtechnoz.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOa1hCNC1keGlneVk1MnhXdEU0bU84NkNwTURBM3Q0eFNNbkRJOTJuWHNFOWRLX2hkT1ZhRWJNeXVtM1NRZGRhR2JiOS1WeWJMSHlPNWVCaTB3aG94REM0aVJSWHVXR1A0U29RRUoyTTM4Q3d1bFFsUEFnSlU5MFdXc0VyRm5sUDJjaWdVWWM5akhwd3o1Z184N0M5OTk2Sk5qTl94bzBVUkRhRmYta0I2RHZIVS15OUE?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "bloombergtechnoz.com",
      "summary": "25 875 pengaduan aktivitas keuangan ilegal pinjol ilegal dominan bloombergtechnoz com",
      "id": "fa2bcafda3d9dc38",
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
      "eventId": "auto-5181bdbf1dac4e20",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-01",
      "title": "5 Pinjol Bunga Rendah Legal OJK, Cepat Cair dan Tenor Panjang - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQakFIS010VE82UWt3M0xYZGlTdlZjUjJPYjNmQzh1V1d1YzJjYl9KQ2t4QUpfX2RGQmtjcXRPMjItQkVkNGdiZTJZWC1Yajh4aEJrX1Q2V2ptQlIweXdtOEsxUXpMSHMwbmZ2azdSX1hFcmhVeGhZOG0yR2sxeGFFb3poOUhGNzlCOHgxN0dBR2ZRTWF2N0dmVlpaQTVROFk?oc=5",
      "publisherUrl": "https://video.kompas.com",
      "source": "Kompas.com",
      "summary": "5 pinjol bunga rendah legal ojk cepat cair dan tenor panjang kompas com",
      "id": "be887013828ac5c2",
      "domain": "video.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c24bf7ea6939ae55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Begini 4 Cara Mencegah Pinjol Akses Kontak di HP Sembarangan - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOV3I4NE1paW5HeDY2NVpncmJCWnJtN3V3Tk5fM2M0bkxJelAyQXZpZFEwZjhUaEFvTkN1c0dXV01UTm1wUVFhT1dSckxEM1NrZGhEZWNBVkFmZ0xyMnZlRFZPOVFQXzhISGJSQlJxMWJQNVd1UFA3a3p6ZHk0SXoxNkg4aS15dnpsNWpMLXZyVUNESjJWZm10NnEwSW3SAZsBQVVfeXFMT2NydVdxQnZCN3hTV2ZDenVfTTVFMERSd2diLVB4dHVuOWE1cHVhTkhiNGxZeGk3MmxMdTJucmFlVGpSUlZQUTBTSkJQbmR5YVdZSnlyTTVKVWhHd3Bpd0dSWGVUbUF6Vjk3aGtoQjQtbTFEb0FxZk9RQy1YMlNXUmJUZTBsaDI2VUpmVW5MVUxoc3poWVNtTWpVVVE?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "begini 4 cara mencegah pinjol akses kontak di hp sembarangan grid id",
      "id": "2b7caef5f9bafd03",
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
      "eventId": "auto-a8087e71ed91ea8c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Cek Fakta: Hoaks OJK Terbitkan Pemutihan Data dan Tagihan di Aplikasi Pinjol - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNMjNiRVFaVEdRdzdYS2w2TGxmRTJMYVdKSHBDT0tzVEZwZDVCRDJPTDVzcWE5MEdpVWtHQmVpbkQyc2ZQTkdGOXRtc2Vnd213djREMFBnM2xnc056RzhHNWNiWER4bzRJNk5PeDcyTzNhMVpDMG5lR1c0ckpOOGZDZGdaUXVrUEdfS2hqeWdXQ3UwSTk3X1lwWldGR3V2em0zbGl3YW9EX21YUENpcEZtS2JweGRMc2ExcWpCZFFaLUbSAbIBQVVfeXFMTXc4R3VoandrZlVkVkxDMGNfU1B0QWtpak9sQWF1d0pMNDNaWFF3WTJmbFJRSXNPUzNlSjlrWnI5ZFJLeTVrUHhFWGRmWDBSakFaRW9oOUFYRzNFdDk4Nk9La2pzTzJnYXQtTnUxbVVUYVFxWnV0cFNoajBvVUt1ckMxcHZjdUo3RG91ZjBkSG8tY1hhTFB4ZHJuNzEwMnRxWGFvZkp0UGFhY2NiZVA5bXpiUQ?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "cek fakta hoaks ojk terbitkan pemutihan data dan tagihan di aplikasi pinjol liputan6 com",
      "id": "c46be39460d444ae",
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
      "eventId": "auto-d008b8b38ed3a84c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Daftar Pinjol Resmi OJK September 2026, Ada 94 yang Berizin dan Diawasi - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNY3JDY0hJNWNVTXJTSDlqVmhQaUtFZzZhX0Iwb2pWLW1XZS1PdmU2Y1R6a0d4S2Y3VHllNE9vUmkzMlVBODVmaHMxLUZoNkNFNEs5N05zRjEzVXB0cG96a3ZUcW43bERLQy1SU2RYWXE5SDRYWl9lbzd6QzVXT3k1ZVJrNW5ndlhaUGVuOFY3aEN3R3ZVTDA4SlpTRU9BS1U1ZXVMeWtyRHFsR3B0MnRsR3pRLUxTdFJBZUpGZnBB?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "daftar pinjol resmi ojk september 2026 ada 94 yang berizin dan diawasi kompas com",
      "id": "74d9ba4a8c9bb707",
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
      "eventId": "auto-d0b353c6c809950c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Foto : Daftar Pinjol Resmi OJK September 2026, Ada 94 yang Berizin dan Diawasi - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNVEZINlplQ2Fsb3VyRkEtQ0MxV2FOT0MycThSN211WVRBbmdjZ0t6dXBfZjhuTE5yRmFSM1VFWVo4UUxsTm9rQTdUb3dzMzVtZ3M1RGh5V2E4bFB5S1RGeGZrbktDNVhSVU9FemxkSk1KTVR4MEh2bXd1VEJRUlNVVTA5Z0MxNDMxdHdheUo0SkJ0a1JKYnNaZVNza1U2b0MzelVJUVFNYnAzQkwzSDUtNDF2TmNjY2FJUGRxN05QYw?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto daftar pinjol resmi ojk september 2026 ada 94 yang berizin dan diawasi kompas com",
      "id": "0293be7b761aa94f",
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
      "eventId": "auto-008f7e358cd98545",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Hingga Juli 2026 Satgas PASTI Terima 25.875 Pengaduan Pinjol Ilegal - waspada.id",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNUDllYlNaZThaZU5uWFpfejc4VnAxQzRxeUJYMEJ2R0dMN1BaMTRNZWUyRGwwSElNS2RCUWQyZmM2VEFLUlh2VDJtQ0g2cUlvdk9vM1NFaU05VXZYT1QtRjc0czlBeGgtaDhJdkY5azJqWWxFbm5NWDdZc29XOXpzWVh1MG9kUTNzWnlseVFBNkVVX040TzZJSnhUOXkwT2c?oc=5",
      "publisherUrl": "https://www.waspada.id",
      "source": "waspada.id",
      "summary": "hingga juli 2026 satgas pasti terima 25 875 pengaduan pinjol ilegal waspada id",
      "id": "a31f717f13a0914d",
      "domain": "waspada.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2ebd02bdca2ba90c",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-01",
      "title": "Hoaks Pemutihan Data Pinjol Beredar di Media Sosial, Simak Faktanya - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOcmRNeWF6VTBLdERmbmw5ZkhiNG5qNWN4NDhjVmJYVU5qQmdHWU4xcV9sbGdqRjg0cDczX3J4RWhFWVVBbndpZTFyY3oxeEVqOUFoTnFZc2N5TnBIeWY4d1RPUWRsZm5wWllxQ0VSM0FqMnZSSXlHWUVWd3lndERqMDVPLTFwYWxOaURHWlEwUUp4YmJEWkxCUGFra0p2ZVZHanN2Q1BGNGUxZ1g5dEJ4dkQ3bXXSAaYBQVVfeXFMT1VtYzNHV0o4aEJOZl8tM1A5Sk12VlFzSGlhSno3SzAtajlpNlJMaF9GbHg5Q0lIWmJ6emtucmJXc1d4dTlyWlg2X0VMZ250UVFPNXUxTm1XVjlrVkpVOHItOG0yU2txZ2ZBMVdNUVVHUmJOMHZmcHdzQzdMQ0Z6aGx3M01nYUpFdU0tdnZNa2pKTzBvVGNyem9TX0dpVUhnWFZWSW4wdw?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "hoaks pemutihan data pinjol beredar di media sosial simak faktanya liputan6 com",
      "id": "25a0ea1ee280eada",
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
      "eventId": "auto-9f12ceaad567b027",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Kartu Kredit Indonesia: Cara Pakai dan Bedanya dengan Kartu Kredit Biasa - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBkT3BvekxMeDZFd2czN1lxdm9sREJweTlEZ3VOMWtFLXlxMFVzVnBXSXVfMDVYdklRZzhjakt3UFVMa3lJVHpMdnpZTGJtTUxTWjZ3LU50b0NBVGFyQmZoQWd3S2dKSWc5MTZUY0V3?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "kartu kredit indonesia cara pakai dan bedanya dengan kartu kredit biasa kreditpintar",
      "id": "6cdbec61c8242bf6",
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
      "eventId": "auto-08e94a9d277ed05c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Kementerian Komunikasi dan Digital RI - Kementerian Komunikasi dan Digital (Komdigi)",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPUHZ6THA1N3BSZU1lajJ5RUhManhIS1hudy1NektpU0I0SEVXTWRKaWNoZlluSy1WbWo4SktUYVlFQm1paG82LXkzclRrd0NIN0VfcjduX0JiOERSbHpQekloa241MXZTTDY3WTlsaDlXM3lwQ3U0TGNuTGZwSlJfVXdFaXFTcHJiVjRjV09fRDl1NEYxT19HQWhhTGh2WjRlcFJDT25qTS13V1ZpcHdTNmZCdmRTS2QyYUZnVGxLeXByM00z?oc=5",
      "publisherUrl": "https://www.komdigi.go.id",
      "source": "Kementerian Komunikasi dan Digital (Komdigi)",
      "summary": "kementerian komunikasi dan digital ri kementerian komunikasi dan digital komdigi",
      "id": "c92c2a212f0cea9b",
      "domain": "komdigi.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b9d120c493f3d83d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Pembiayaan Pindar Tembus Rp105 Triliun, Risiko Fraud Jadi Perhatian - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPamwwQ1NDZXNWcGszWlk2Tm1IYlgzcVJfeEV0VTlaOVoxc3FQSnBzMGRST2lBZ1Y3ZkNzRlYtN2hiNkhzNFN3MzdmdGRrd0tCRllYRzFZZW14QWhGcF8wNXp2UjI1QlFzd2FZcXFUeXB5UVZXeW5IdW5YWkEwd2hVdTBxZGc2YUZ5N3V4cG5Sa2ZTeUpGamdMMldjUGVJOTBEd0FlajVWVdIBrAFBVV95cUxOcnAwcndMLUs5bnVST3VkMHJBX3lPNmRKMjZvdWlpcEhyQUgxS1NrLW9XX1dhX1ROMUhaaEMwcDU5NjdqODVIS3FXTGpJRWEwMlhVWGhIakJzU0VEcTl1RTQ1U0I1enVNalFBaFlyLV9VN3VtTmQ4VG9WYnVEMWhCaW9MZ3hGV0xoeXpRb29NeGtSMFlISmVCQ0M5ZmxFZ29LNFVSblVjU0NyNFdP?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "pembiayaan pindar tembus rp105 triliun risiko fraud jadi perhatian wartaekonomi co id",
      "id": "a1f3ebc359db077b",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3cc490bbc9ec45d1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "Pindar Masih Andalkan Pembiayaan Konsumtif - KONTAN",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNSHRsVnBqbC13MUQ0RVRPajZVeG0zR09mZU1ES0RXMG9MT1AxNFFRTHBsTlNBN1NmcWdYWlczUTZnTTJ1N2N0UmJEb3B5dFhTRVVZbXU3cDNvTnNZLTBiMDJPNXNhWURJeXZ2ODV4eHpHQUo3Tk44R1NwaExWMENJLUtB?oc=5",
      "publisherUrl": "https://insight.kontan.co.id",
      "source": "KONTAN",
      "summary": "pindar masih andalkan pembiayaan konsumtif kontan",
      "id": "b0b36f2d6d3581a1",
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
      "eventId": "auto-54b34677338cb5ee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-01",
      "title": "SIAPkerja Kemnaker 2026: Layanan dan MagangHub - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1mdkRBZHRXRS1mbHA0cEowWjJiMm1XZFZHcjZxc3dFbTJZamxYS1NhS3VaTWMtVllqSS1QSW5qZU50VG4zaEVnRDdmemd0Sk05UWlKaHJDZmpqOUJhRTVxdjRFU3otYTVtTFE?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "siapkerja kemnaker 2026 layanan dan maganghub kreditpintar",
      "id": "d08a7ce333e191a7",
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
      "eventId": "auto-59d7c4a18255ded5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "6 Cara Memilih Aplikasi Pinjaman Online Bunga dengan Rendah yang Aman-Legal - finance.detik.com",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNdHZXMVhLM3dSRVppUTE5cVVJMERvTFNWbm1PdjVBNDhjdVp3b2NIR2M3V2UzMjBDUUlWUHh4Z0tiN19HWko5WFRSeEtiOThzcHBnM1JhOEJOM1dqNzRLNFM2NnZPQTItelRBWmwxckNnNnctNS1wR18xZUVqNGo2Zml4RXQwb0luV3BNamZjMngwRHlIdkl4RkhPazlvbm1Kc2lBbjlieXJwSHV1elljWFZlZXJjZjl4cHc40gHAAUFVX3lxTE1NZWVBUm1ENUYydkdEZkFsX01ER29Qak52OXV1N0otZU1YNVhGSDVYdm9xN1dLNzRKMTlzakt5dFVrQW1TUEkteWRkLWlvbDJ2a2lxaElEdzBwbE1iWXRKcXpmeDBOV1dQbVQzQTdWdkNyOU1oaXgxaTdtNUktZy1Oalp6OGRnYUlIb1lFMUx3djV0WnZyeTI5c2xuM2dqME1hNlotd3VjYTRUR3pwX0hEeXpSYWs2aEdNWkRkWmYzTw?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "finance.detik.com",
      "summary": "6 cara memilih aplikasi pinjaman online bunga dengan rendah yang aman legal finance detik com",
      "id": "aec592372e2e8ccb",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 40.9,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-97e977f3abc714ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "AdaKami Ungkap Alasan Masih Fokus Pembiayaan Konsumtif - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOZWstOXBELXFfdVRJVUVSaXlhQjB0MjlQbmxFOHA5bmVyWWtfalNPVnBRbE8wMmdzRHBBWVJKd0xrS2pRc3gza2dUOHdVTjRFM2M2c1EyLU5LdEYyZVh1M3Q1Wk1kRTdtZG9SdWFiSndnODROelpoeVJ0LWVmWVZSTEM3WEk4Zw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "adakami ungkap alasan masih fokus pembiayaan konsumtif infobanknews com",
      "id": "efe0f20a2f53576a",
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
      "eventId": "auto-c102f37960ad66c7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "Cara Lengkap Cek NIK KTP Terindikasi Judol, Bisa Online atau Offline - metrotvnews.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNdC1VQmlMbmJmT0pIRVRYTjE4aEIzOGdBemRYQ1pZMGVnVTJBaGNDSFpjM1c2OXdVaFQxcG4zck5mdElVMTZmeWwtX2s3OVdPLWtkYV9jdHBsNEVpQk1FczlHZlNvN0JyVGdrZloxR3dMM1F3bmZjYXV6VFRrWUNuRTlBVnUxcy01MUxWc1FlM0hWakIzaFBVRk5RRXJxLS1oaTFhYkl2cmVtdkh5V2c?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "metrotvnews.com",
      "summary": "cara lengkap cek nik ktp terindikasi judol bisa online atau offline metrotvnews com",
      "id": "68bbae3c76f7c48f",
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
      "eventId": "auto-264ffe6539a6528b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "Daftar 94 Pinjol Resmi OJK September 2026 dan Cara Cek Legalitasnya - metrotvnews.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPWDByZ2lLRjhGRjhpcFBDTzhnMml1bEtjcUQ3SmFJVF9xaGhPNXlzQkhhdjlBeGo5MVZacEdSdWRRU3A3NHpPVHcyaGlVNjRucGdPeEFnUzE1LTVuSlhaZENrcmxDU25PeEo1bllfM0w3el80d3gybHlGV3FuM0ROSm5pOVV2bkFidko2QTJyWUMxMVk1NDhLTWRxY2tZbzNFMDduMnU3VXJIN3pRT2c?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "metrotvnews.com",
      "summary": "daftar 94 pinjol resmi ojk september 2026 dan cara cek legalitasnya metrotvnews com",
      "id": "e982b46d45c11535",
      "domain": "metrotvnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f9c55fe517a5f074",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "NEZAR PATRIA Bahaya Judol dan Pinjol Disampaikan lewat Film - Epaper Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPNUZFUWFRWmh0SDVVNldCQjFLZnBDSGNCQkQ3Y1ppSTdjWFRGUi1NYmhjWVdiR01ucER2NkZRRnRoeUR6OGhDV3ZPVUQzcnFwLURENzZacHRqVWJNX2F4Y3FPT3BCQzJRVU1aNWJyTjNzNXRjanRRak5ZOWJyWU1xOUp1X1lZai1ralU4YVJudEVPUkFRUWp0WEpzdFExOUhOZWc?oc=5",
      "publisherUrl": "https://epaper.mediaindonesia.com",
      "source": "Epaper Media Indonesia",
      "summary": "nezar patria bahaya judol dan pinjol disampaikan lewat film epaper media indonesia",
      "id": "f0d381175e5efadc",
      "domain": "epaper.mediaindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c1ef2ae185e02af3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "Nezar sebut film bisa buka mata publik atas bahaya judol & pinjol - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNNDA1YTNJOEY1Yy1UbHJtZTBmRUxpSElOMEZiQU1hLUVoRFBoRlpiMzV5c2xmRlZtZS0tMDF6SllwVEJiNnh1YnIzZDVKeTNsY3FEQTFlR3lvXzY0cldsd3NGY3U3XzI2U1A4VFNFM0VsZ19RTS0tX0lLMnhTOEx5Umh6WV9xTzV0dXN3b25qdFp2RnBsVDBGX3RyNWJIanpfcGFYMUpiWDHSAasBQVVfeXFMUHFzVVN3MU1iMFh0eWRSMWQ1cTA5YzhOcHpMX1pmeWU0dkxoVTZ5RjVENVZVcTc1cUpvNG4tYkw1UnE1eXk0X1hCaXRiX2U2ODJUcjNSUlVfVFpXUDRQV2s1Rnlyb0VteGxoc0NuQ2Q1UE1nWFpUM1ZVQVU3bGhad21BNDUzVU56V0p4NF9idXJxclhmQjY5VzI1VEFMRXNQOU1KOWREUXNSSXFR?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "nezar sebut film bisa buka mata publik atas bahaya judol pinjol antara news",
      "id": "765d372404ba5ee6",
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
      "eventId": "auto-23fd86a88610b8c5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "OJK Jabar Edukasi 4,2 Juta Orang, 3.880 Aduan Pinjol Ilegal Disikat - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOcGcxYll0RFNfNTByZ3c5c3BsdVJ5QWJnbjFuYlFza3VCZFA4QW1SbTRXQ2R6V2F4LVJoYU1RdDctSEE1WDhQdkFvR2k3ajFLcjlTOVRxdnJxS1pmS01pNUx1MVZlWGQ2QU9EbVN4bjRMQjNiSnVaWEdJVVByMnRlODI2MEU0bXJRYUVRS2pJb1ZlV0M1aUxLVE8xVXVHZmJLY0dibWYtRkNBaHBGYkluNVRDVll3UQ?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk jabar edukasi 4 2 juta orang 3 880 aduan pinjol ilegal disikat rri co id",
      "id": "0ab0538d2ff3827b",
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
      "eventId": "auto-9ee70f631e8d95c4",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-02",
      "title": "Pengalaman Galbay Pinjampasti, Apakah Ada DC Lapangan? Ini Review Telat Bayar - Gagal Bayar Pinjam Pasti - Berita DIY - Berita DIY",
      "url": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxPdktaZFpNWWhaNVllUi1DZXY5NU5RR29HWFg1Q2I0OFhjMmlXYkt1LVVXNVNud3ZzR1cteU5QaTdfY1FtdUNPRXRkNGx1VFN5WU5ZNmJkMXlMbDNoT3FZRHdOV3ZfREdKVzlBRVU3Ql9EMGF2WDFvdFRSNHItQXdOVkdVMFVTd1dJVERRUktZLVpPcS1KMUNRMWRPSjBENFRybGM1UHg2N3VoYXZpTUpYQXdFNng4cU42R1Zib2RmY3pHakhUN2JFNTZ1MThBZHZrd2NkWTdXY0VfTnV3Tzg3U0RHckJBYVFUTTh4VzlWaTZJUTVaVVZPMUlPdWTSAfYBQVVfeXFMT1g0TmV2M3M1cS1YTVd1TWd2SUZYZGtfalFyVm5fa0c4ZVpUdGZocjgtbS1KNmpIVG45Y1JyLVg2SDRDZmlCUGZVWGxMZWdKclZIYTE4b0trbjBUeEFHbzhoNXEzZnd1MWY4WVJ1aTRwbXJKa0htTjN5QmJaYXdlSFpfVkpHejBOUzM0bzR4R1RLUXVrU0dVTEZkX0J3MG5kQjNSUkg2WktWLW9feWdoUDJORkxqOFJMbzdYSmtwR2lWeTNJZmNVTVZUMUpSUEdidVNvbGFoRDlfMGlzLTR5MlRDYWtkQVF6LTFuOWlrN0VaYlkyUk5n?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "Berita DIY",
      "summary": "pengalaman galbay pinjampasti apakah ada dc lapangan ini review telat bayar gagal bayar pinjam pasti berita diy berita diy",
      "id": "0599716318752e72",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 73.8,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a98796a6b2cfdf15",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-02",
      "title": "Pindar Bali Tembus Rp2,3 Triliun - NUSABALI.com",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE03cWxpWGRlemc4cnhaNXdWVUZSa2w0WTV4OG9Vcy1CdnpfcWo1eWF1WEtIVWQ0V1FqNHlhcGY4WUlMQS1QS0d2OTNNUGlDbnZLdFVxNFlDN2Q5U3dxbmZzM0x5T2w1SHNJQVhBRmdqcjB3RFJweE9sTWZn?oc=5",
      "publisherUrl": "https://www.nusabali.com",
      "source": "NUSABALI.com",
      "summary": "pindar bali tembus rp2 3 triliun nusabali com",
      "id": "836dcb91cdf28900",
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
      "eventId": "auto-f23c9d96422ed952",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "Pinjol Ilegal Mengganas, Satgas PASTI Terima 25.875 Laporan dalam 7 Bulan - Sumut Pos",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNelJrM09IanYzODJFR0ptRFBWc0VabjRFVzcxN09TVjNEMzY0NUJuTFR4Um9pUExNM0pWTFh1akZjbDBOYWpicE5udUF2VWhnSDZHdExTZm5ySFk5dV9tSjZCQndTdHNraHVyVkR0aDYtZTlIbF8tazFBbWN1TWxTOF9nYWRpLWZKUkZUMm41WFBVRk9jRGtNOEpTOWI5R2tvV3BlY0stVmJSTm1aRk93a25jbHRoZlFFM2xfbdIBwgFBVV95cUxNOFlDdnVYRkFKcDE2UjhaOGlOMXJBanhEdlBBWlBPa2t0ZDRsd0RGT09aNEszbFNZRlNodmlqRUtzbkJmbExmdWcyYk5TMldQMkNMSTBfbXg5cjF2aGxyZlFUQjRwUjNKSy16V282YmxXU0ZET2szcUQ3SEFVYk9ZZFZ4QUNFeDFFUHJvZXBmQktUa0xVSWNBRjdNNFg1aXNHb2pNdHUzbE16cWN1TG04NGZUUGlqTTJ1dEIwcTZiaWwzUQ?oc=5",
      "publisherUrl": "https://sumutpos.jawapos.com",
      "source": "Sumut Pos",
      "summary": "pinjol ilegal mengganas satgas pasti terima 25 875 laporan dalam 7 bulan sumut pos",
      "id": "41eedd824bc27022",
      "domain": "sumutpos.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5db75096b6f67b71",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-02",
      "title": "Pinjol Resmi OJK September 2026 Terbaru, Ini Daftar Lengkapnya - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNVmpKUEhIT2xWUmszQmg2Wnp2T1F2amk3UmtWQVd2Yko2emVSLV9yQ2tCTTFERGNfd3E4QVRtazlGdjdxLXVSTDFvWS1xTFdSX0c1M2lPbXphLUl3Y3RUUUlqQzlLcS1Pd2FuSW5vdGxBT0xwcjI2Z1BRazBpZlZyTkJJTzFxSTlHNmxmZFpMWUJrbXgzYkFXYWxZQ1RoRkUzWnp2SmI4cUFaUDJocjlIR21n?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "pinjol resmi ojk september 2026 terbaru ini daftar lengkapnya kompas com",
      "id": "d51a9b3a508dde24",
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
      "eventId": "auto-9f43cbf35cdd45db",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "Uang Masyarakat Makin Aktif, OJK Jabar Waspadai Tekanan Kredit dan Pinjol Ilegal - ketik.com",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNZHkzT2JrRHpfYVFSTjlSbjJ2U0lONHB1cHVkbmtDdXF1b1owcml5dDJzcXRZOS1DTlVxUDZ5WE9tVWVNU2FPZDh0RlkzTmMybjYzcXhUbmpkLXJlTmlYZ1lDSE1uYWZ4cDdHUHB5dTFieWd2UlFjRmJUb3puZGhadUVQRkpQd19kWlpmRFd5Q2F5WlRKX1dwVXRGY1lXYUJZXzdMXzRVWmxCM1FoRFl2NEdTN2l4Tml1bl9sMtIBowFBVV95cUxNUHlwdDd0RjNWNWIxcjZGYlUtMGtobkhnM3ZqVjF5TWR1d1drVUhIaUIybXJpS3otdHF6YThidjI1OGZ6YmI4MlFFSkxUVkFSSFMzd3JIQjhMMlZIMFhTbGZKRHJTVi0wVmNXM3U5VHhYSEFuTGVkSDNjUVRtMFRIcHU4SVNvTkdTMTBzbnlvc091YkdvbFNGWWg4SWVkVFFXcG9v?oc=5",
      "publisherUrl": "https://ketik.com",
      "source": "ketik.com",
      "summary": "uang masyarakat makin aktif ojk jabar waspadai tekanan kredit dan pinjol ilegal ketik com",
      "id": "8e01dfec7c661b8d",
      "domain": "ketik.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7d9190726a692cd6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-02",
      "title": "Utang Non Bank Makin Diminati Warga Pinjol hingga Paylater Laris Manis - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNN1BUQU9LYmFvYXVDelFXRk5NVTBoaURjZkJxM1BCblZUOUtPa2NiRGJzUUF5dlZUZnBVeTJxaHo2OHZ0YXJoVnRUSmVDNlF1RU5MX2FQTHlOM2xhZ0ZlTlN1WUp1ZUtPVFFKeDhEYjNfQ0k4Um5feEtGSlluTFRjM2duUktHLU1tTUpiRmNxV251LVY3LXJsYXlfSEpVX3lWazlrdGVfelg3czdRdllsMUhNa3BISHZOT0t0SlVnMjN3V1V6b1dKU1NEZmpEQdIB0wFBVV95cUxNN0FJVTAwMXh6SUFYVDA3Z0k3TGFTamhQQ0RyZW0zR1VWa21LT1RlWVo4NzdpUTR6YzA2V0tsLU9FVjN0dXkwMGoxeWU1a28xZDE1UEtKbkFXdUttVElCb0tQMnhUOU02UzF5bS1CMXdoZGZkam5mbEUtc3huUC1zYjlxZnRuZGc2TFlsb3JHN2VDRzhaZ3JkWjRPbGpuN1BlX1NLQS0xRlVDWm94aFB4QTBvbzE5bTUxV0ItX2toeGt2YmpHQmtTQ1gtT2hFeU9TcUN3?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "utang non bank makin diminati warga pinjol hingga paylater laris manis cnn indonesia",
      "id": "0ad68019f48f9e5d",
      "domain": "cnnindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-06bab81b08ee3c5b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "Video: Cara Pindar Manfaatkan Data & AI Tebar Kredit ke Warga Desa - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNN1oyVFdNck9jM2t3NGRGa1lGUG1KWXVuVG9YdERIWVE2eC1oRTVZaXplMXN5NG9qWUZkemlUVzJwa0ZSTlduOXRsRkp2Z0xtdUZjMEI3ZEltc0h6eUgwQWZaQWNZNHNNYzFJcWJTQTJob0drcnl0b2J4N21TUU1ndTM1NTM0SjJMX3JpZWw3b1FGN1B4VzA3U1FpaHkzRVRIbjk2dERUeld0c0kyc3BnZDZWaTQ0T01WZUJJR2JSRlU?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "video cara pindar manfaatkan data ai tebar kredit ke warga desa cnbcindonesia com",
      "id": "8bae6ca0f6842061",
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
      "eventId": "auto-5f00b15c109fb278",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-02",
      "title": "Wamen Komdigi: Film Bisa Jadi Medium Literasi Bahaya Pinjol Ilegal - InfoPublik",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBJSlcyNlR6YTlEZFJ1SVZvREJpdDNnUUpERUhycVZxQnlaRWM3MGZIYXZNc09Db19lRjRSbkdpa19GTmhOeF92QTZINWFBdG14aTYzblVQY1IxdU5GS1VORUxyaTRzcWwzLVhMYTlmUWJMTTdlV2tUNHlyQQ?oc=5",
      "publisherUrl": "https://infopublik.id",
      "source": "InfoPublik",
      "summary": "wamen komdigi film bisa jadi medium literasi bahaya pinjol ilegal infopublik",
      "id": "caef1e18d88d4e5c",
      "domain": "infopublik.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a0c522a19cacc09",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-03",
      "title": "94 Pinjol Resmi OJK September 2026, Cek Daftar Lengkap dan Cara Pastikan Legalitasnya - Pojok Satu - Pojoksatu.id",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPaEtDSFdRY1lWbVlnSTJnYTQwR2F6b1A4dzNDS0tCNnJWOG44eWhuOFRNOVRSUlBKdGhsakVEdkN5OHFBbVczNGNpdjFpVDN2UVI1S3JqT3F2bVFfZHdqaEk1VEc4SG1WbGp0dU9lMGFzOTNkYXFzc0x1RXVsVVUxdHBEdUtEX19RNDN6b3RvTlBKRVd2eHlvcXNMeE1nVHQtak4zUURiMDN1Q2haVVBYNU9qU0hkZWVGc2RSc0VFdURlMm5ZOEU4b9IBzgFBVV95cUxQOUp4dHRfU1ptdk1sT2xqY0tQc21rYXJSN0FUV19uNlhvSE93cmRCWUt4QkhfRzNFYmpmZFd2bzlBSlBfYU9VQnBQczJrLWJCM0htN0tNaFg2c0p0eGJ4TzZjaFJfb2Y2X2RQdkJ0NVF4X3Z3cVJmUG41UGhYRk1ObVBUSks0QWJaR3RGRjFZQ1FUQlg1di1wazBxWEhMNWZDQVBQUHc1T1pUUHI5d1J1eEJSS3ZRT3NURzVmX2tqWHVoc28wbkNMYjktYl8yZw?oc=5",
      "publisherUrl": "https://www.pojoksatu.id",
      "source": "Pojoksatu.id",
      "summary": "94 pinjol resmi ojk september 2026 cek daftar lengkap dan cara pastikan legalitasnya pojok satu pojoksatu id",
      "id": "98da799c87d97003",
      "domain": "pojoksatu.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c4e7d5b10327aa73",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Cara Mengatasi SPayLater yang Tidak Bisa Digunakan karena Telat Bayar - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxObUJBenlsRHl5ODdOeU1ma1BDc2o2TlFXTTJfRk5Nc0VWTmNoMmYzbnh1cmJfWGx1TzZ2TlppYV9fZzI3bWZteU9YTlNYekpteFY0aVV1NGhHc3JJLVRIUHFmWjBYdWc5RnBuRUxMOS13WEVqSkhsTjZNdkhHb29iOWVqUkZ0MGtKdng0QmNxLTBYUXUzMlJSVjBKMzU4R3RWWVJzU0pWRXXSAacBQVVfeXFMUG9ZQ3ZkTXRyT1IweDVFNGRtZ0pMSVdrY0hNM2VYY0FIaWZoNFpGYmhqNTAtaXpDc1c2MkFtUWkySlM5dEpkeVRwd2F6ZkVodlNqY2x6Rk9TZVFfc2ljcHNyRV9KY0VlZDlabnYtQ3E0OVFSTkQ5QVF3cmFRTDhWOXpIZVFhajZ2NHotdEV4MkVKZndhdFp5Q2V3M0d1NkdYNmtpME5UcWs?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "cara mengatasi spaylater yang tidak bisa digunakan karena telat bayar grid id",
      "id": "a302c07b3a0a98df",
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
      "eventId": "auto-6c8d20e935f8acf6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Catat, Ini 5 Hal Yang Tidak Boleh Dilakukan Debt Collector Saat Menagih Utang Menurut Aturan OJK - radarlampung.disway.id - radarlampung.disway.id",
      "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxPaV9RajlDOW9tZi1EQnlkUk90MmgzcUhBaU93eHZOcUNwMm1KUlg0aGdMYmtLX3VqN2dZZ3p2QUFGUjRSemFXTjZRV21WMEg5YzZQbTMyNnRocW4xSG5fb29obFI5QU96czFLcnRoeEdReWVnd09LNTlyV1YzNGRYU28tRHRTWkpiM0lxdVFfRVlqNndScmZYZWk4ZkQ3TEsyY0wzTXE1VzN0N3h6N3F3MXpOVTA3REJVc09tRndpNFBpMU92QlBtT19rZ08tbG5XMTZqdkVUcUs4Y0RSMFczUi1GN1hxWGxY0gHTAUFVX3lxTFB1dWFUQl9tdHJ6M0tLOXo1T2tRaVFWMmRKbk9xbDd3bGp6Z0xXWU85TlY3MTMtcmNINnYySkR0ZmxsMXdnby1JZFpXMW5mSFNiWnNVREVPc3dMUXo2N1ZTMFd6azBERkhPUjNWLVNFMmlaR2VvVjJLbUNZQ0hReHgzZzVJRDhLb21oMmEtQnFWNlJYZVpFODBFVjhTWWdKWEJzNnJHZG16eHR6VGNkUDZ2ZkMzS1B0NDQ0SDR3c0t4SkhpNjE3VnNTTFNJcGw5dmJfSjA?oc=5",
      "publisherUrl": "https://radarlampung.disway.id",
      "source": "radarlampung.disway.id",
      "summary": "catat ini 5 hal yang tidak boleh dilakukan debt collector saat menagih utang menurut aturan ojk radarlampung disway id radarlampung disway id",
      "id": "a7f5d93d7eb69e3d",
      "domain": "radarlampung.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1d73a2d1ef325686",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Harga Anjing Mini Pom dan Biaya Perawatannya - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1YY2ZyRVNXcld4YVc1aW9FckdZd2xZc2p5S2RFbE9ETmN2TzRObzlfekFQb282VWtlS0Q1N0ZEdEppbm10WXJMbnVveXFGYVFGR1JNS1dmR1pXTnRPSndxcjN3WTdrb3dwblExYg?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "harga anjing mini pom dan biaya perawatannya kreditpintar",
      "id": "7df9d2e856099387",
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
      "eventId": "auto-4d31c35fda53d453",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Kredit Digital Mulai Bergeser ke Kebutuhan Produktif - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPc1Z3UUhiUGh0Wi0zRFRWeW5MVlBpVTdrUmY0Vi1DY3h4WExJcHVLNkkxdWFVQUY5M1FQTDRQTWJjaHJNMklCbWRmZDBlQ3AzdmNaaVQycEY2Nm1XRGxna1lwT09FNElfeDRGT0tiNGo1QjBCWUptR1R5RUpEeTZfeTRvMWpSbHMtNDFMTzV0emzSAYoBQVVfeXFMTTUtT2dTX01UbnBmOFRVektPZmFTdHc0OXQxSWVRb2JOendVVGhlbWJmSUUwWVpmc0ViOXJLN3RpQWFRM0IxZmtNY29EUmZMRmNYQjUxZDVfSVVCMFRpYkpPcVcyNXBWQ0IwaE5XamdjY2U0cmR1bjlXVHl0OGhKMFZkVUtUZ0RZRXRn?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "kredit digital mulai bergeser ke kebutuhan produktif kontan co id",
      "id": "2542391f6e149276",
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
      "eventId": "auto-b436da0cbd77e141",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Lawan Maraknya Pinjol Ilegal dan Bank Titil, Pemerintah Dorong Dibukanya BPR untuk Masyarakat UMKM - jurnal9.tv",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQZnFVZGYwTWVjMFJTdlk0dHZpenpkOU1xZmYtdk9nLVY0WWtKTEJ0dUhDQ2k2MkZjVm9GTGVEdEsyNXo4Slp5dG5aODNkWnA4YzRpRm5GUjFLZ1U5RDRxY3YzU2t3anhPUWpkaTJhcUozRG14ajVnMkRFS2V1eElYVFhwQjcteVZhSWZzaWpWSkh2b2lVeEZaWFZMeWZpMTkweTd3T2xtQ0RmeFB4c0luRDR1ODJpYm1B?oc=5",
      "publisherUrl": "https://jurnal9.tv",
      "source": "jurnal9.tv",
      "summary": "lawan maraknya pinjol ilegal dan bank titil pemerintah dorong dibukanya bpr untuk masyarakat umkm jurnal9 tv",
      "id": "168c0aa69fcddbce",
      "domain": "jurnal9.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a20b03e20eedc308",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-03",
      "title": "OJK Ingatkan Bahaya Pinjol Ilegal: Jangan Asal Pinjam atau Pinjamkan KTP - Teropong News",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxObG1nU2g1bjM1V3dzcG9mLWNNWGxpWl9VNU9RUmtIRGdsQUdKMXQyWjFWM2d5dVRFbGVrS09FZC1HSHh2VFNwcTlHVDRkbWhYY3ZIYl9NYmxjWHlVV25QeDFhUDUxTk1CY3VoaFNuTVZBZDFZRnhPRjFPWWNMbTZGdjlnTmdva3psOTFvalM2OVIxRGRpX2tld041VEd2X3NJb2V4MnlERU4?oc=5",
      "publisherUrl": "https://teropongnews.com",
      "source": "Teropong News",
      "summary": "ojk ingatkan bahaya pinjol ilegal jangan asal pinjam atau pinjamkan ktp teropong news",
      "id": "5e6711212bd82664",
      "domain": "teropongnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d5da5f76f114c963",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-03",
      "title": "Paylater Bukan Hanya Belanja, Dipakai untuk Pendidikan hingga Modal Usaha - Katadata.co.id",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQNTQxNjFkVEZJYndxMG5ERUh2SmhjcUwxNjRobHZqUG5PRklMa3djcTN6UXFwSWRrUHNZTl8zVlhXUGQ2R1lqUDNpSU1kRTRRcDZDRm9yZHQ2YjlzazF1bnh0bnlvT3I5MWFHMGZsVGZfdWxDZGx1TThMOW11WUJZdmJKV3MyZ1ZGbHA4MjcyODJ6a21mcmliOXNtQnc0My1xMEdBVEZxMHljR3dRdXJBTDVuSHh3MXFQVy1GVGdXaTFobG_SAcgBQVVfeXFMT214MERpUzd6ZzZxek5KZWYzdUFOZzgtZFdqVUQza3ZBaFFsdTgwbGtiR0swVlNIUklXRDNQVDhVX1hvcGJtZktmdmFxLXpPanNJYlltV1NRTjZkaElYOHNER3ZLMmpEbmdBWjZteXE0cVdRSHJWWXdTYTFTYVcyY1kzT0xVVlVzMFhrVHJDQnd1UnBVT19xMDI1djVTNy1STllTaElQbkYtRDViUndyUnkxS0hncVFrVm9YeTQtTGsxV2prek91dWM?oc=5",
      "publisherUrl": "https://katadata.co.id",
      "source": "Katadata.co.id",
      "summary": "paylater bukan hanya belanja dipakai untuk pendidikan hingga modal usaha katadata co id",
      "id": "09775eec7ace8b2b",
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
      "eventId": "auto-d607dfe6c78212b4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Pembiayaan Nonbank Melaju, Sinyal Sukses Inklusi atau Alarm Daya Beli? - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOVENCSmJITTRrUjZ2clBRc1dHYlcwSjJlMEMxM2lwM1pYOVM4NVN2bEdVeWxtNUFDdXJKa0dHcXhyRk9XNnZUTW5fMEFnRHpfeE1BaWNBS2VWbVRkYWI1SHIwbVBBSzhUVVAzM3JSZExkZzB6bURfQ1BmRnN2aXh4OEJnUGVwcTY1eFJRbWllWkFDOWhzYUkydHF5Zlg0bmpKcmlIWU1NNFVmZ2haZW1nSUJtT2ZibkdLdk5HSXVTVlFOYXhPdmRlelo5QdIB0AFBVV95cUxPUzBUVFRmS1l6cUl6dEtoQ2ZGUy15Q3pVVFRORDRmNVF3VlV4YXJzV3AtOXcxcWdYenlIY2h1eC14U1I3b0x3dVRYb1hjdV9hMUltT0pkcjlZazc0VU5mTUpPS2lNZXI4cGloYWhUUnFxc0JxWWdKdktoMDZqYXliZE1mM3ViaVcxNHVndDJTS2VCLVVfcjI3cC15YVB1aVV3YmhnVnB2NlNtV2FiU1ZqNko0VFRyalVDdXNKdENFZmdQWm0zemc3SXZvRUl2dFN1?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "pembiayaan nonbank melaju sinyal sukses inklusi atau alarm daya beli cnn indonesia",
      "id": "9711a0cb57f96440",
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
      "eventId": "auto-88faa5fd97d34f2a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Polres Jaksel Respons Laporan 110 soal Warga Tiba-tiba Ditagih DC - detikNews",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOOC1lV3hZU3lRYkVOdVIyZDhDSXdkTmNWUXBGTU5fdG5UTi15ZmJtNXNSY2w2NUVyZFFlZFlSMF9Tel9rSVVzR0dNQzVldzJYeUgyNm0xc2xHQjFxZFd2TkNKdExTaGdtVzdyRHozLXU4QVBPTDRzbzBhOTkzNTVGN0xldzgwQTYtbU1aU0ZzbVlhWE9Hdlo3czBDdFI2dDc2MFdHcExKeW3SAa4BQVVfeXFMT3dNNVJVZTNERTl0bk9qT0xtempUS25kLUw0c29rOG91UWI3czVZcmFfWmdYWWxNdF94UF9HUHFQV291bkVTRDBSWFhOdWhNNDVnMG1COHppWThheF85cEx6UnpvMFRtdFFJbWxjbDEyYk1MQ1ZmTlI5ZEluUDdRM2pkNUdNODN2R0FVQl8taWJHOG91VFpjcTk0LUl5azQzSXlkMHRFMWZxRFNFUFZn?oc=5",
      "publisherUrl": "https://news.detik.com",
      "source": "detikNews",
      "summary": "polres jaksel respons laporan 110 soal warga tiba tiba ditagih dc detiknews",
      "id": "fc528c3424b1ecbe",
      "domain": "news.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7592871342cd0c7a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Scroll TikTok, Ketika Anak-anak Indonesia Tumbuh dengan Iklan Pinjol - detikNews",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxORnFPbjE1Z19TT2NGUlJsa0NMU0swY1NLVVRZYmdYZC16dHdCUmRRRHZwTUlvY3Ffd0ZzN0xfZVg0S3k4d2FnS3dIRWdONXAyS2tpenNyTjh1S19CNjdaRUJmTFMtMmZyeEJCQXppbHA4ZDlzNTJWR1JCQWYyelJXUEo1cTNBOWlrOWg5eGRtRTlfRTduOFdqMXJpaW1TdHRUU3ZVWVcxRWRQUdIBrwFBVV95cUxNcm1laGE0aVhmVnVTeUFkeEdDWWNZTGFzaDBPUUZFMlJRX0dON2Q0SXVVZm1DMWs4NlFCZ05JV21pc2loYXVvbGRZU0JhN0NNZjdpRXhRcnpPTjQ1ZXJRemg4aENuNlNVV24wclN2eG9zYWpFMkZYQXJ4bGNwTTBnNWV5dzUwU01XM1ZQdWNmdjVaQlZRMDZfMExBNlZTTGRkQlZ3QUV4UjFFVzZEaG5v?oc=5",
      "publisherUrl": "https://news.detik.com",
      "source": "detikNews",
      "summary": "scroll tiktok ketika anak anak indonesia tumbuh dengan iklan pinjol detiknews",
      "id": "0725c1db5ce1a283",
      "domain": "news.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e3f2f2bf06d526af",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-03",
      "title": "Studi UI: Kredit Digital Bergeser dari Konsumtif ke Produktif - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPbFNldFNTeE5UMzVsQkZNZFdBZk51UGZ3dUMxbmhyQnFQZm4ydXNkdVd3SGRJU0RtR25nbmtQSDBZZGVHZzZFeVVuZEVaNzRvbF9tZTQtSEw4djZuUkFDemJmaFB3dDhqS3hXczYzUDA1VDRIYmNac1hlZzN5VHZwTXBBYnNfM2hIbExOUWZn?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "studi ui kredit digital bergeser dari konsumtif ke produktif infobanknews com",
      "id": "4e173960efb78c6c",
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
      "eventId": "auto-db410b39cb482a50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-03",
      "title": "Taktik Industri Pindar Jaga Profitabilitas pada Semester II/2026 - premium.bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOQV9QYmJ5YjlwdDNVUHB2SlNVNVVJXzZoLU1GMmhwdWN3WDNjX3FBUmhYTUJnNDhYYk00OF9BdjhlVFdQeHExSjV5cFZ6bC1zcXVsa3FuVVdwTGFHU2JOdTI0NlFSeHdoMmp1YUFmWEEwSnhsUll3NmhLRFplaUtHUGN3N2Y1VDA5LThiYWU5YzVDTjBoNi1pSkFFRnl4Q2tSVTgyb3gyaWdlNEdRbUFIQ3RhSGdhbkk?oc=5",
      "publisherUrl": "https://premium.bisnis.com",
      "source": "premium.bisnis.com",
      "summary": "taktik industri pindar jaga profitabilitas pada semester ii 2026 premium bisnis com",
      "id": "5542d9050113533d",
      "domain": "premium.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7a3a384a58e8fac6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-04",
      "title": "30 Ribu Lebih Penerima Bansos DIY Terindikasi Judol, OJK Bongkar Potensi Mata Rantai dengan Pinjol - Suarajogja.id",
      "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPdEJYYkZ4MTA3VmN1WlV1dTlreG1kbGkyZ05uM0ZNMTliR0dGQ1JWSU91WDF2WW1Wd1lxSEVraE82Z050QWJNQXZxRnk5UFlIZ1NmeGNjQUhfaTFHclpGbW91OWk0SlFnSmJLLUhDQS05QXc1MGVocVdYcE5JNUhJZXB5UFgtN3JvVEl5bEYwZnhjeHNXbk9uN0FQUjFwVUxhdlFsUnhvcm85ejhRWktCRzZFNWh4bUlRNU94Q1NDZDNlaFNBNHFRX29faG44aDdQX1g4QmV6dy1aakh50gHiAUFVX3lxTE4tVEFXMmQ4QlJ1elBNVmh0YWRFWXdQX1hXZFdlZk1aaUFSYzhXU2Z6RUZueHY4RVRRTFBkTU9RWE5YNWNBeVhCODl5T0hCektoWjEzbENzQjBQWEFSUmdFLTlDdUF4SGo2VU0xdWNfWmEySU45NzZ4djVFSEZvV3cyQnN1ZTg5Y1A2d1gySGJEVzAxWW1fQTBRQlVVUzFNd0RnU3RmYmJOYVFzTm9PcHBDdGNROUtxeC1JVUlwNmFiNlNTYkZWMVA4cE9rdnVDS1ZILVdfWElOUDllX3NSR2NuU2c?oc=5",
      "publisherUrl": "https://jogja.suara.com",
      "source": "Suarajogja.id",
      "summary": "30 ribu lebih penerima bansos diy terindikasi judol ojk bongkar potensi mata rantai dengan pinjol suarajogja id",
      "id": "9a90cffb592da537",
      "domain": "jogja.suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67a8aed1f1c58d95",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-04",
      "title": "Berkat Adi Sucipto, Warga Tomohon Kol 5 SLIK OJK Lantaran Pinjol Boleh Punya Rumah Subsidi - Liputan Kawanua",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNZWFZaDNfZ0dES1BXbGp2Uy1YRTFpV3pjUU9iRFZnRGdnYVUxTU5zYm9xYkpNVHBnWDFxNzBXbDg5dDRlZ2ZHVnVBZS01Z2Z6R1Z4M1ZGeC1aMDZxYUFEdUxUQS1oNlJqSHdXRnhtT3pJNnhCeG9SMmFUX1Q1empXbG1wanpQVUtMcFNjOGljajUxX2llblFxa1VFdVNPWnh3Vl8tenlMaWNlR1lpektlZDhkU1JsWEhyTDJTd0l1R3k4dnc?oc=5",
      "publisherUrl": "https://liputankawanua.com",
      "source": "Liputan Kawanua",
      "summary": "berkat adi sucipto warga tomohon kol 5 slik ojk lantaran pinjol boleh punya rumah subsidi liputan kawanua",
      "id": "55995e5aba0dc92f",
      "domain": "liputankawanua.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e778a319d9dd6650",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-04",
      "title": "Daftar Pinjol Ilegal yang Masih Aktif September 2026, Seatap Veedana hingga LoanPal Apa? Link Download Sfile - Berita DIY - Berita DIY",
      "url": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQM1FQUHFtRzZIemx5c2ZhNE9FRHNiT2VxZlVMTEhUdGF4RnNNTDBkQU1hTUs0cmdNaXVtcUpUWUlURm9JMzNwZk1NVDZ2MzQwU1FhRFJsakJmMXNoTHgzQVhNRzZOUXRHQzQ0RjBOQ1lpSEJQbGh0czhfQmhPcUJmNzhSWTE5ZkVrdHVwRXg1dlF1R0g1YWV4QXZOTHV6ZVVzSEdLeldPSjBpeU5uYjhIQlRQX09Ra29aOG5ERXZmZjNPQm9Pd3JmZTZxakllMlloWExvTngwTWVwX2VLNGFVbkczeUpUUlNHWXNpZlF2V2Vpcks4aFdGc9IB_gFBVV95cUxPNUxJOEFWRVhjRUxweVQ0bWZXd2E5LXJtOHBPSWFlRDl0YkJrdjYzRVhyUkFGY2txR0lBQWpKdkVoRS1OX3I1VlFBTWYyMGt0NEtMeU93TEJtVjl0NjNhSjdWdDVMVkY5UkU1ek1MUkM2MGFfcS1LYmxzMi12ZGpseG5XUWFKa21qZ3BjUnVicUIwamppeHV0V19pOVpxM3lSNl9uSkpjQTd5RUxFZ2RzVjliYURCejY1LVJnTDc5LTdsRUJfS01aSVpPY3UtbnVkX3l3QjVGMzQ2VEpGSlBFOWtiSkRHWmg0UGdSclVRbDRYMmFFQXlHZ3dQdjY3UQ?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "Berita DIY",
      "summary": "daftar pinjol ilegal yang masih aktif september 2026 seatap veedana hingga loanpal apa link download sfile berita diy berita diy",
      "id": "61763166357bfc99",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-52787cffbf32aa95",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-04",
      "title": "Industri Pindar Tumbuh 25,88%, KrediOne Catat Penyaluran Pembiayaan Rp 7,3 Triliun - investortrust.id",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOYnhJV2JoWHljZDUxQTRMZkFGdktnZzhKQmhkSTRVd2NqQTE2QUFXTVFhVEZMT0ZDOUhvX0NSUnpsZ1VybG54ZkZIZl9kUVlKVW1pT0w4NzRhQ005NzQ3TUZvOTZLeXoxcEJkQkFad0hpZVZwNHE2b0ptU2JKZlVXNE9aczhBeERzOTVsTEhCbGZ6bDZ2Wkl5SG5yXy0xRjFKSVM3bGZ1WFE4NXNya3ROTWtudUR4TUlnYk1sQU1mZw?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "investortrust.id",
      "summary": "industri pindar tumbuh 25 88 kredione catat penyaluran pembiayaan rp 7 3 triliun investortrust id",
      "id": "933c72e697235b9a",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f001fce2ea5d22eb",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-04",
      "title": "Industri Pindar Tumbuh, JULO Catat Margin Laba Kotor 44 Persen - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPRHcwSnMxSGRKamxfdUk2Wk85YXBBQ09VaV9JclVTVmR1Z0NJblM0UjNYT3JWYnpPcThIOXBuM2U1d2JGSm54eGpDbk5VVkhfZDZ1aU1ockdrbElHWmJpbnphQ093WTc0U0g5WHJIMEVvY3dXbDFTbXJFdEhwUlh0YkRVY2xfZnE5Sjhsc0hpTU8zOGI4dlc0N1J1ZUJ3ZkhhU2t0c3hrZk50UjR3a0JoRXBR?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "industri pindar tumbuh julo catat margin laba kotor 44 persen kompas com",
      "id": "14f50fda22cb669f",
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
      "eventId": "auto-7bc54f3ae634a15e",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-04",
      "title": "PKKMB UNISRI, OJK Ingatkan Mahasiswa Waspadai Jebakan Pinjol dan Judol - wartajoglo",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNNnRFTGE5c1Via1c3V2t5R2RnWVhNTVNvR3NYZkFzWEpyUk1pRkRFY04wUXFFV3RiOFNHaHdSZVlLZEtoZ25aYm51RWR0UTViNTZwWmdSeEVCN0NEVVZzbG8zN2JpUk1ocmh3Tk5oZ3JXMHdYSlBBOEZpdzJjWkNZbGJoOU43ZGdzRk5OWmx3QmJZbzZVaVFmUUticm5YR3pONndiN0dVemhmUXF6dFE?oc=5",
      "publisherUrl": "https://www.wartajoglo.com",
      "source": "wartajoglo",
      "summary": "pkkmb unisri ojk ingatkan mahasiswa waspadai jebakan pinjol dan judol wartajoglo",
      "id": "bb2869cc7961d148",
      "domain": "wartajoglo.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1bfbeed0efc16104",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-04",
      "title": "PKKMB, OJK Solo Beri Pemahaman tentang Bahaya Pinjol dan Judol bagi Mahasiswa Baru Unisri - Lokawarta.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPSzFvcmdEWUFlTUxIaVFfbElTRjJzclh6ZWlJcHg3SDEtY0NMcUtyRDFza2lLczhjZ2tYVTNBb3FLY2pJYUUxRUNXWHFzZFRfVzFLRFFaOGRGdVJiV1dDcXdqbnlHdG9XUzVJSmY3ZFJ0M1gyU3VQSFNNcEVfXzBuS3lIVlhfRFFsUTBnVENVRVA3UTFmR2VVdVRHVUtrV1FPZ2lXbjljQ2dkZnlxQ3BpUg?oc=5",
      "publisherUrl": "https://lokawarta.com",
      "source": "Lokawarta.com",
      "summary": "pkkmb ojk solo beri pemahaman tentang bahaya pinjol dan judol bagi mahasiswa baru unisri lokawarta com",
      "id": "a14d1176b58b19a3",
      "domain": "lokawarta.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6c2889bf545b1381",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-04",
      "title": "Pembiayaan Pindar Melonjak 25,8%, Industri Didorong Jaga Kualitas - investor.id",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPZnFfUWFIOS0ySExzTHIweUNTTVNGbTFib3luc3lkdHp5ZDJDNlNuWlE4Z25MZUFJTVI2X2Rma1ExRzFuMWJ5blJEeGlUZDdZVV9mM0tKaTZCbXlWMjdFZ3hDdkpTUzh2aG1TLXZuUThqemRjZExCYlhhbG5tdy1pSWZYaWVWY0c4cmdWU1hMQWRpTzk4RDg1VWhFenBydw?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "pembiayaan pindar melonjak 25 8 industri didorong jaga kualitas investor id",
      "id": "6e5d2c6535d9cd56",
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
      "eventId": "auto-dcbfcdf150e1986f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-04",
      "title": "Studi Kredivo: 54% Kredit Digunakan untuk Kebutuhan Produktif - investor.id",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNeWE0MWpETTV1anlXSjJWUl8wanZzb3VaNjV0cV82R2x1WVk4WnJMRFA5azMyN3E4Y1E2NEZ1VXkzeXV6WERJWUNGYmRlM0NtN0xQUDlOX3FFZUJFeHIxR1hVUHBwX0tkRUlBN0dYRE1EZzJOd2FFdGpRY2dYazYwZG51QVJiVEhDaC1XcGpjaTZZM2NDWHI5UndR?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "studi kredivo 54 kredit digunakan untuk kebutuhan produktif investor id",
      "id": "ddf8487e46e960c5",
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
      "eventId": "auto-2f47e3d75fe5952e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-04",
      "title": "Studi sebut 54 persen kredit Kredivo di 2025 buat kebutuhan produktif - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOOXBnTU52dDVsMDAxOTNtdmdaVVhxa01IY3ZYOXFDOFdQMTkzenhKSmNJS2JXV3V5YmV6RWdENXI5OS1nbWVybnVlZGdqazNGMnEzNzZTdlZ0czRON1A5RVVLTmd2ZEw4MklZU2h5ZXRxTHlvdVlieGltY1NkVGc4UTN5bWp5ZXVBVFhwQUZuODhPVFZIOS03Tk5YVmdNM2VxckhuNm50R0dfdk1XT3NGTtIBswFBVV95cUxNQ2xfb0w5WHU1RjJ0VFNPZWRQQ19QTW04Zmd3bkdTT0pjRWdXUEg5Y2hheW5wcm5hb0otTTVBaldnWkZMSFpKczIxaTR2VlI2VS1pRlRaNmdPUlU3bW5VLTJqTTY2ZkxaTWp5bkNiVDFCX3BkUW9ya1ZqSkJvSGxQVEN0RUVINHkyb3pkazY4VXFvaW4xMHpwMjliVTcwV3c2UDlfTEI3THE0NUszZE9Yc01uUQ?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "studi sebut 54 persen kredit kredivo di 2025 buat kebutuhan produktif antara news",
      "id": "29f79c5f1b2038fe",
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
      "eventId": "auto-56afff088c8975f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-04",
      "title": "Terjebak Pinjol dan Modus Investasi Bodong, 50% Gen Z Terancam Petaka Finansial: Pesan Menohok BTN untuk Maba ITN Malang - Institut Teknologi Nasional Malang",
      "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxNSWdZR2NuMXBkMnYwUUhzbGt6YWxxNFFNY1hack5YandWTENoZ09vY0FVZnJXbEtoTW5tMGhRZUxpNUY3cHAydFM3ZXprVjdYZ2gzWE82SmpNaFdweFEyYzhFZDVxRTBvNG1KU2p3WndEUm5yeTVTRmJ3d09yVC1BUEtTRFVFb0tsTEJCOW05NTlaVTAwWnFYTGM4OFhmMHRLaG9rR3EyOXY3QkFZSF9VekRISEhTZElLWjFYZHlfWklPTDJDVm9obm9xa1p5QS12QjZpa2x0cWxIaFZXZkJjaUZ1dThDSWhVaF9ORGhyVQ?oc=5",
      "publisherUrl": "https://itn.ac.id",
      "source": "Institut Teknologi Nasional Malang",
      "summary": "terjebak pinjol dan modus investasi bodong 50 gen z terancam petaka finansial pesan menohok btn untuk maba itn malang institut teknologi nasional malang",
      "id": "4d636b09c6e79603",
      "domain": "itn.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3f250fc7f76031c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-05",
      "title": "DPR Ingatkan Anak Muda, Pinjol-Investasi Bodong Ganggu Masa Depan - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNY2E5b1RvRFlWR1ExWkpzeGtBcXpELWw0UUZ2RUE1RDM3OHFXdmphNWF6dEhXTHNLWVMtQ3AzZWV0N0dlM0dzNEFYemUzUjFLMDl6eUsza1NxZ09PU1ozZ3Uzd0ZPNXFGUmJzMFRPaGRrbXdsVXRxVTEzMlZiYlp4eE83b1h6MllkcTVGNGYxQ1VTWm12d09Ybm1PNk5ITXJ4X0FmUDJuWmo3cmNKRWltbjdEMzRnaFdsUW13dEk3Q215OE5y0gHKAUFVX3lxTE9BTTFabDdONzVXcmdma21lUUdFSExZLVFVYzdXdWtBUFZFUW5FV2tZY2hZWEJTeVZMc2tULU1wV1hhOGdZYnlvQV9Jelc3cTFBeGJqZlJ2a2pXblA4ZGMwbk83WldubUduU2t6ZTZYUkxwNV9NWFdSd05NTmpTLWxxQzJYREdGTm1Cc0R6RnZ6YXZDZTROYlFoOEpwYWtPU2xaTk5CVWxkX0tXS2xON1V0Q2VUQUd1SjVXajF5WUlCTjdIVjFFMjFfWnc?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "dpr ingatkan anak muda pinjol investasi bodong ganggu masa depan cnbcindonesia com",
      "id": "a1115a92aad0901b",
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
      "eventId": "auto-7a2be0e921a315d9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-05",
      "title": "LPS Wanti-wanti Generasi Muda soal Pinjol Ilegal, Paylater, hingga Judi Online - finance.detik.com",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPNkowOWpfN0thSzBPRzBJd21raEUySnQ2OWVhT0RpdXluQ3hJd2FZR0VwcFM0cWxyZWZuVDlET3oxSVQwamhaaEN1Y0MxaloyanAwU2lUc0hhTDMtRUhjRzh1YUpJN1Z2ZnNmV3lZd0IzdE9xREpSQWd3Z0ttTGIxdmw4eldaZVVaY1JRTHBkdTc4eTFHc19mMUMtdTRMV3NXdk56Q0ZjSFN4Qy0zaFBnYTZZT2FmNGY4S0NFddIBwgFBVV95cUxPUEMxeHFZVEJRMVNGX1BqS042MjhFMUhkS2lvN2UtbGlpeG9DWTR4Ukd5Z09ESzdKOEw4S3BrdklaV2VMbFNmZi1JenEtQWhObVRNMnkzMm1oYTItVm03RkJIem5qcDRSRXlVWEFRNTF2SkV2R25PRmNRMXlZYzd5SW5tSTFjTDJiTGJiSnJveVF2aGJFYmR6U2tWNkphM3F2cThJYkg0ZEMtaGxFUV95NHZSd0JBNERPNWJYXzRVVEtvZw?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "finance.detik.com",
      "summary": "lps wanti wanti generasi muda soal pinjol ilegal paylater hingga judi online finance detik com",
      "id": "8f4ed12c780a7f34",
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
      "eventId": "auto-584231861c9c0a1d",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-05",
      "title": "NIK Dipakai Pinjol Orang Lain? Cek Sekarang lewat SLIK OJK, Begini Caranya - Tribunkaltim.co",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPZ2t0X2NYSWxPMGRxS0tlbFhscVNBMkFxcTh2aEJDd0pCX0lQOF9IX1ZISkJnc2t6Qlc4UjgzVUVQOU1tMnNibG5EMDBMMDlGSTJZcTJweGEwclhBUjJEd25LeF9abER4LXY2aW9XYlpkc0RLM0JxdFJfNXo3c2tTakd4QUM4Zmhmb1NZYTBsVlRudGEwcFp6VGpZYlJxa25tYjFiOWM3cE1sM1hMZ2hRZ3Y3ekFTQQ?oc=5",
      "publisherUrl": "https://kaltim.tribunnews.com",
      "source": "Tribunkaltim.co",
      "summary": "nik dipakai pinjol orang lain cek sekarang lewat slik ojk begini caranya tribunkaltim co",
      "id": "4f0c46ca055ff43d",
      "domain": "kaltim.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-953b0dd9e4231204",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-05",
      "title": "Terlanjur Berikan Data ke Pinjol Mencurigakan? Ini Langkah yang Bisa Dilakukan - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNZ3pCMmFEWEk2X29xZ0ZmUGFxTUpidlFMYXFhb0pudzZ1TF83U0k0OUxXX0UxNC1ZUDZHM19YT1lkN0J5TlN1b0NEMHliSG1sV3J2c3FmbGdEWTRjME9rcHMwQmgzSFdBazhlbTNpaXVSQU9yN1VOSnRZOGNRdDRrVkQ0Y2xvR0RDbTlRTnVpejl2LWRDRXpNajJJY0dnV1BUR3NMck9EQjUtSWdkaUlKelVzX1hGVGJxdFF0MEN6NA?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "terlanjur berikan data ke pinjol mencurigakan ini langkah yang bisa dilakukan rri co id",
      "id": "a98fe4e6e4535720",
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
      "eventId": "auto-f0365edd4c8e198a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-05",
      "title": "Zulhas Ingatkan Gen Z Lampung Hindari Pinjol dan Judol - detikcom",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPWHZSaXJQdXFiY0UtOWE0Y3ktazNDbXNKZndwc3BXRE9aRzZqcTZoN2hFTVppOHZlaGRQaFowbVJ0bXFhQm04RGxhSEYxcXFYenB2RWZRM0NGTGlEQ2V4M2NxUEZJRVMzemNVYzZoRXBtTU9LRWVkRmN5SjlzNDlLZzhqZWFFRzBQZ21nMlFWVktHbG5LYnVCOEpKQzNVMTNYeTdZOUtR0gGrAUFVX3lxTFBld3hpLWhLT2ppcG5kN09MdHp2WEl4bTQ5TERxZDRJQWVMUXFMOWJwajFDcGpvSEVGem5Uazd0TEstTENoaG56R1lNb19mVFZfU0JkdFZsN2xKa29YZnNtYVFNUmV0UVFSd0s3eGttZ0VjQWU3RmlBUDJ2SWxfVEJmSDBhTmJCRGE2M3QxWU1oV3M1UnpldXN0b3ptVWQzZFRuWnZ2OE1pUS0zdw?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "zulhas ingatkan gen z lampung hindari pinjol dan judol detikcom",
      "id": "8c00f9532044731d",
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
      "eventId": "auto-d432da87139aa97b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-06",
      "title": "Apa Itu Debt Collector? Aturan OJK dan Hak Debitur - Pintu",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBVRV9EYTEwSUJ3cXU1Y2Z3SnB0d1FNZHRYTXFEcEtrRE0wUWxaUGtkc3JqdkNWTkFycDZYOHhELXlERE4zdlNZck80R0ZBQzNlc0lLOUJjWjhmQQ?oc=5",
      "publisherUrl": "https://pintu.co.id",
      "source": "Pintu",
      "summary": "apa itu debt collector aturan ojk dan hak debitur pintu",
      "id": "ea7fedc0a8def11a",
      "domain": "pintu.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d68291408f42c914",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-06",
      "title": "Foto : Pindar KrediOne Salurkan Rp 7,3 Triliun, Tekankan Pertumbuhan Berkelanjutan Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQSV84WmtwZlpmYU5PanVieTZPeVNxTE13T0toQTdYNjU1LVNDdC1CS3dnTmRNcnFnbllQb1gwLWtIQm5QU08yNkhVOG45SEhZekZuZzFQVWtZX1RWZFY3N3hsUzhzVHRFaW5jbjJwakRlRU1XUHdyZTNiVXRoS3V1TXlTa1gxTUNnelIwdTRKRzFEa0hidlBwZF9HNjg0MWpXLUItUzVtUkl1b1pyTV8tUDRLc21aMmRlOU41YmYwal9DZlBhejNLdVZKTFhNZw?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto pindar kredione salurkan rp 7 3 triliun tekankan pertumbuhan berkelanjutan halaman 1 kompas com",
      "id": "3cf130a72991b575",
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
      "eventId": "auto-8825095c1f43304b",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-06",
      "title": "Gagal Bayar Paylater Bisa Bikin Bansos Hangus? Cek Penjelasan dan Fakta Sebenarnya! - sumut.infotren.id",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQMTh5YWdnQnJiVzcyNWJ1eldXcXR1b1lpYmF3Z2RoZGFybHdPZUM5RDBJN0J3QTE5S2ZObkEtRkNuM0tTel9aT2k3WFJhQU16V1BRY1dRMFdURW5DdG1KWWtQZ1JJcEswN0NLVmRzMGp5VGlMSFpVUGZwQ0NxcEpGUktaeVcyVkxzRmRDUkFpZHo3d3pQNzk2SkttS3JsQUVpWWRhdmc2Um9zQjQ?oc=5",
      "publisherUrl": "https://sumut.infotren.id",
      "source": "sumut.infotren.id",
      "summary": "gagal bayar paylater bisa bikin bansos hangus cek penjelasan dan fakta sebenarnya sumut infotren id",
      "id": "6f02e1299764b6da",
      "domain": "sumut.infotren.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-accb2c28492d7d22",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-09-06",
      "title": "Pindar KrediOne Salurkan Rp 7,3 Triliun, Tekankan Pertumbuhan Berkelanjutan - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPV3lfQmVmLWpOendCTko0QWk2aG05TnY2R01lTXRmaDlzWW4taWtSS2szTnNDR3h1Yl93bGptZkxxYXFMZmk1MHU0VEZXdjd6d0JhZnRjWnYwb2lpa3JObWtWSUNUZDd6TGIzZWdFbURaS193bWEydVlWallZdkJNeHQzSXNlRElyems5QWs1WDRSZnpwbVI1bWRGX05tOUJKY2NBWTlVdlFVbm1MWUNwLWhtZFlrcGVNRmxPbngyYmJ5NUk?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "pindar kredione salurkan rp 7 3 triliun tekankan pertumbuhan berkelanjutan kompas com",
      "id": "2c97c4727fb6611b",
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
      "eventId": "auto-722ef54b935d793d",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-06",
      "title": "Video: DPR ke Gen Z: Waspada Bahaya Investasi Bodong - Pinjol Ilegal - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOUmxjOTAzQWg4bUJWQ2ZBanpwTkt3N2dFNldoQjNibU0tSDBTcUJhbTQ2Rm9WZUYyU0NLZmpGcTRHbEd1cHNRMHFDdEgzMG1NZDFaeXYxR3p6MENURFotcnV6c0k2dUxsazQtLVJ2QV9WTWR0Y18xYmJCUTdxeWZ0MEhkNG5DV2NucXgtekRaQUl4V1N4MGtmTkwwM3RUWUt6d3U5azlIZ3Npb015VkpQNmswZk1rUXg4ME1wcDM2ZThYdw?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "video dpr ke gen z waspada bahaya investasi bodong pinjol ilegal cnbcindonesia com",
      "id": "32f30c65dd9e64f4",
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
      "eventId": "auto-bcc15cf349f53808",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-07",
      "title": "5 Arti Kedutan di Tempurung Lutut Kanan Menurut Primbon Jawa - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdkpWLXJwV2dKbUFCMUs1QjE0V0VwWFdMbWxGXzJNUmlmdFJVc05UZkt3NGFNZzV5TEhneTdzWDgyWkxvODkwNk13OXg0OWw3eEVhSXFJY3RsMTY5a1BBOW16eGEwczlJdzRkMk5yREVfSlp4aXRCWHFkZkhyTWVSbXJyU0NxSzBOQ0lsRUllRDl3bm9aeUxxSkhjRUTSAZsBQVVfeXFMTWJ2MVlzMnc2TXloUTd6ZWhIU2lSUTdrUFRobVFjeTBaRnk0NEtpMHg4X1Q5ZE84TjZSaUF0cEN3WU9Zb0dnbHk2VmtjQXpHRExTZzJTTzFmZG9fcVhaT09LYndlRG10cWxla3VnZk8wTlpCWktLT0hZemtqTnd3MXl6Z0oyd09FSFpHN3RRd2xiZUFiUkhVVllRWjQ?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "5 arti kedutan di tempurung lutut kanan menurut primbon jawa grid id",
      "id": "1d887bc59e28c72a",
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
      "eventId": "auto-25594aaf25c4b6bf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
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
      "title": "Cara Cek NIK Dicatut untuk Pinjol, Awas Data Pribadimu Disalahgunakan - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOR2xmdGtJdlNfR0hkUTdlLXN5WlFMaTkwSVUyUkU5WTB5QXNNWHJqOWhYRlJHalczS2l3amJ2RzFua1NOYkM0SFotWmpRUWF3aVMzRF9lLTRLMER5V3BDdTU5WHZtck5PUEhCSlQ3alkyNEpNWldrcWdKbGFwS3htNXZHM19VS3VEVTNQOWpaaXVzYnJBZElPSTNHanJGVmUwTzNSWGtuT3k0RkhwVjJuLXExa2hFN2FUTmZjRGF3Y1g1X1dJN0Q0VXJINm3SAdIBQVVfeXFMT1ZQQmV5LVlTQUhyMmlNdUpxVmhISTU2dlpoM2JyOC1fZnUxa1pEZWVMdmNBZEpycFJITmdjdzRrcC16Yk5CRkhEbGotbUI0M1lZWlFoVlY0aDgxY0lpTFF2R01HRWpXSDN4ZEd2WVhzOXEtTzdtU2VCMkhOZ2xYOWtvd25ncV8zaWEyVzRXVkZDOUdDRnB3c0EzczVvRGlsSmxlV0NldG1MdFRhN2JfMW13LXByRks1SndZQTRJakhZVDM4SHBOOHVmamtTRUg4a1lB?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "cara cek nik dicatut untuk pinjol awas data pribadimu disalahgunakan cnn indonesia",
      "id": "0cef12fae7ce0b78",
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
      "eventId": "auto-5f6e316bd16fe6f2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Celah Pembiayaan UMKM Capai Rp1.290 Triliun, Kredit Digital Jadi Alternatif - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQcTFtbDFQNUFmM0tIRmhzR2ctWVR4NmhPRks3UUNYbjRoZ2dDTWx2d3VqbmhLUGRwVmRtX1ZZaW1ycU45OEFKaXM3akNPd0h5WlY1REJqcDgtRWQtb05mbDdVeDJRRHF0THA3TE9KTVlRVGhsS25EaEhEZDlGYkwzdHVrQmkyWEtyMVNCOFA0eDczRWQ0UVo1ZlpMX25KU2poWm5jVW1qWjZVMFdLTjVGVtIBtgFBVV95cUxQSGpQdkpHNjhoNGp6SVZIRXdZU3lrZ25wVlk3R3pCcWJ4UHNhdF9Pc0RuWFJ1RXpLUGszd1ktdjZkem1iTDlhLXpnVkNQZmRQZXlMendrNnBFUWtES21welF2WTQ5ckFJTjNJZUFob0NqUlZjMDh5WGlCaGpiejN5aHZtUWlad1YwNVJDMlJZQTQwY0d4WGFJTHltbUg1Sm5mTkZNZHlxUjA5RVBzZDNRak1Wb0FmQQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "celah pembiayaan umkm capai rp1 290 triliun kredit digital jadi alternatif wartaekonomi co id",
      "id": "52192ec91775e519",
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
      "eventId": "auto-6ea0203f631ef4a6",
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
      "title": "Edukasi Bahaya Judi Online dan Pinjol - Suara Muhammadiyah",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBTZmVxRjlNTVJueFpvejBxQmQ4TjVTeHYyVVhUbUVWTDdQdDYtN2JVbzBTZ2UzbklwVGlnUTFuQTRyaEhSaDRYSDVORW92endyRE9aZ0hWeF8zSlNIem4wR3pYZkhxRmR4SEFieVh2Q3ZPYXdVajUxd0tTWQ?oc=5",
      "publisherUrl": "https://suaramuhammadiyah.id",
      "source": "Suara Muhammadiyah",
      "summary": "edukasi bahaya judi online dan pinjol suara muhammadiyah",
      "id": "2033451f3f4f1fe8",
      "domain": "suaramuhammadiyah.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-be245c5f0fee7b86",
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
      "title": "Kapolres Tanah Laut ingatkan personil jauhi pinjol dan judol - kalsel.antaranews.com",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQYVFIb3AzbWUzYXZNOGFXLVFnLUdqSlU2UkpqSndoaW56cVVxbVNDY2NuV01WQVBFR0tvcTdzOTUwNUZ5RDVuSVVmM1lENnZmNlRMVUpFa2FCcGFsbVN3clNjbG1qVENFd3YwNktsRzAwRjFmdzlBQmN1cGZ4RDQ0RWVRakY1QldLa1JibGs1Y0lhV2R3RjY1enQ0bUd1MTMtYm9Ib08tUdIBrAFBVV95cUxNNFdYQy1SOTVfeWhSWWJ0OGFSdmpadEdTaWxIc1BhNTRJeHlPRDBpZDlUV2ltTkltZU5kcy1YOTV0VVZxM0tiSFpBdE5wQ0MyNV9BaVgzUi1IRWtBa0R0NS1aSzNrcUVxbS0zdnFmY2xsYmtEODdLaW05d2lGMjVhalB6VmtYRHpyMDJ3UDNGakZzY1NZNExzZ3hvVGF4bnpVZFhPOTR5ZWdEOU01?oc=5",
      "publisherUrl": "https://kalsel.antaranews.com",
      "source": "kalsel.antaranews.com",
      "summary": "kapolres tanah laut ingatkan personil jauhi pinjol dan judol kalsel antaranews com",
      "id": "d41c00acba4d47a7",
      "domain": "kalsel.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-82accb3711e25391",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "OJK Bongkar 951 Pinjol Ilegal dan 242 Investasi Ilegal, Kerugian Warga Capai Rp771,2 Miliar - Pilihan Indonesia",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxPSnRqWGJMRjF1d1c3SlBEaElOTDUwc1ZHVDAtWjdSdHVacW1DQVRaSWRZckhfb2JPbjlXMjdNSXhYZGRSdlF2Smc2SjA1Q2pjd0FWWi04X1NtR1NYTF9WQjFRZWxGanlUMnl4cU1aeUtCRTdBODNXUDFEeWI4TndHTlBTNGhuV3Y1dURpbEI2Z1luN2s4QVphNzdHMkFsRU50TFAzTjlMdk5BY3VNZERVZVdVQUV1UWRjY3BwbkgxbzJjc3BkUEVhMzlKUzlFcGZfVVBWOFQ1WXNaZEhBdlZZSDVSckQ?oc=5",
      "publisherUrl": "https://www.pilihanindonesia.com",
      "source": "Pilihan Indonesia",
      "summary": "ojk bongkar 951 pinjol ilegal dan 242 investasi ilegal kerugian warga capai rp771 2 miliar pilihan indonesia",
      "id": "1401fe03f037434b",
      "domain": "pilihanindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5756ce948d6e6d8f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
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
      "title": "OJK Catat Utang Pinjaman Online Masyarakat Capai Rp 105,63 Triliun Juli 2026 - suaragarut.id",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBoNnFDc1ltdVVGcjFJczcweTQ3R29PUnI0OUE4MDd3XzNJXzZMb0puSkNhbkU4YUNkZWVTREpwOXJsZnBFSVZqSlhwbF9Za3BUSUZITHUzWGJkaGs?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "suaragarut.id",
      "summary": "ojk catat utang pinjaman online masyarakat capai rp 105 63 triliun juli 2026 suaragarut id",
      "id": "bf0e597e084df5c7",
      "domain": "suaragarut.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bfcf3dd667ba6b5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "OJK Fasilitasi Pengecekan NIK KTP untuk Antisipasi Pinjol Ilegal - pdiperjuanganbali.id",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFA5ME9fQndWb3g4dGZvT2kxcFpyMzRuTEd0RDFyN3QxNmNtOV9QRVcyQVMzUVIyRjM5dVBTVENXamhQZk5acmlRYXNrUnhRV0ltZ2w3VDN0d2NDdUdBclNoMDl4T0lNWGxFVGxLTDhLSFZfUmhtS2VwSA?oc=5",
      "publisherUrl": "https://www.pdiperjuanganbali.id",
      "source": "pdiperjuanganbali.id",
      "summary": "ojk fasilitasi pengecekan nik ktp untuk antisipasi pinjol ilegal pdiperjuanganbali id",
      "id": "8de419005276af05",
      "domain": "pdiperjuanganbali.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-896ed0dd716cf251",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-07",
      "title": "OJK Hentikan 951 Pinjol Ilegal dan Blokir Rekening Penipuan - pdiperjuanganbali.id",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1vQVQzMVotVC02TUlXM1hJaFQ1RDEyYW5saWNlMkVickFid0VfcXR4X0dGQXRsalplRTMtTENPUHY0X1lDSFhlbnhpc0JmOHhaVU9OU1o0alpRQVBvb0R4NUhmQndsOGdPUzZ1QVcwQk41VXg4RFVSUVBJMS1iQQ?oc=5",
      "publisherUrl": "https://www.pdiperjuanganbali.id",
      "source": "pdiperjuanganbali.id",
      "summary": "ojk hentikan 951 pinjol ilegal dan blokir rekening penipuan pdiperjuanganbali id",
      "id": "eeb2b667d7c2141e",
      "domain": "pdiperjuanganbali.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 78.0,
        "label": "negative",
        "negativeWeight": 4.5,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3cdab170bff634d4",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
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
      "title": "OJK Hentikan 951 Pinjol Ilegal, 1,2 Juta Rekening Terindikasi Scam - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPbWhQZlhzb3Mwc3RhUi1UMjEtTlhtelBqVHNYU0FJVHlUZlgtNDBHY2xuMDN2RFctLXFlcUlVY3FpV3hISV96QWVJQjdTbmdyQkJMLTBjSGhxZFFidkRUbzI0UVVmZm95ZVpqM1VOMzRReFhuSXJyOEVTYkVyODJtX0RuQWZCbWhjTFRMRm9PV2ZZQVVvYXQxRklwYThZMGlzUUpFWNIBqgFBVV95cUxOUndDVURqY3R2Zks3T2pLbUJqQl9FM0R2T1RzaHFnMnctS3pWZDRXVTB5TUE4ZU00QmZaMF9kb3VXN09LSXlaVGF6Wkx4YUg4SllxMWItWXA4Snp4WlRmaVQ4VUs3b1c0eGVndHlDZG9VeHhLNzdvUFJPNmxzYXBjTFB2T1RzU19Pdk43cnJYa0R5c2NscmpNY1ZETnZYcjllUnhqb0dXdTdzdw?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "ojk hentikan 951 pinjol ilegal 1 2 juta rekening terindikasi scam wartaekonomi co id",
      "id": "ec7215a2302d6b46",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 75.9,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4f5751218f5cf70a",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-07",
      "title": "OJK Sebut 7 Pinjol Belum Penuhi Kewajiban Ekuitas Minimum - bloombergtechnoz.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxONmVzVWlaTnRmZzg3RDZsaTQwb1I4UW1DWWRCSEdwa0JTRUtlRVNBcUFNT3lyZWhGQVNzWUo3TGF5NHVpdlZueWpuLTB4d1RpcnpEZm1sNzk3R1NuNGpER1JuY04yczJETE0ydXB5c085SGlFQTEyZUlEYkJFc1Q5OF9peUlaVF9IV19TV0ZJT1Y2MjE5SUl0ZURMOUVoME1BV0V6TmE1VWVyTnhjRkE?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "bloombergtechnoz.com",
      "summary": "ojk sebut 7 pinjol belum penuhi kewajiban ekuitas minimum bloombergtechnoz com",
      "id": "814e18e306e869e5",
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
      "title": "OJK Setop 951 Pinjol Ilegal - finance.detik.com",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5jR1d3VG1kU2NHQ3kwVUdZcmFrLVo1WEZfbTQydExtQlExMFZGcEJsTUtwYVRTUHA4UDJUemg3QnZwQm9ucHRwU0ZzTEVSNjh6ZGx0OVp4U2d2LTRXLWNpaGwxVDNfYXFlb1dvSlc3VXlMUG1YR1hMVmJkY9IBgAFBVV95cUxOYktrcHczRWd5NjhhTHI0ZTdPY3k3d2U0Z1ZoZUlrQzBDV0xQOVdxcVZwY29nTFpSWFlocmE3Q2VJX3JOaW9VWkd1a0Y5b2tKcGNVclVoNVFoc1N0VWxYNGpBYmdkU3hsWk5KN2RUOTZOa3FOc1hNbHNCWGtWN01WeA?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "finance.detik.com",
      "summary": "ojk setop 951 pinjol ilegal finance detik com",
      "id": "ca4e1bbfaad7d126",
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
      "eventId": "auto-f2b72bbe1938a45b",
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
      "title": "OJK Terima Puluhan Ribu Pengaduan, 951 Pinjol Ilegal Ditutup - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQZ2ZCZ1llWlJmQVZabnZ6SXViMi00YVVlNlFFRDM4RFB5VTBmR2N6OUNzLWwzRXhIa1pIdzZXcE5yd2o5T3BYZU9qaE5CSHR2QkJCcVFVNjdvd1o5RF91Mkl2cFZXbXEwR0RMS1ZzMTFJVlRacndWRkVmZnZaTTBzbWpHN0FPT2RCdG9USw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "ojk terima puluhan ribu pengaduan 951 pinjol ilegal ditutup infobanknews com",
      "id": "3c442189e6c05d69",
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
      "title": "OJK catat pembiayaan pinjol capai Rp105,63 triliun pada Juli 2026 - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQdElJN05lanZibk55NE1XejY4V0VxczRVbXFYZGY1VDEzdkhuNXdRa1E5ZWtLc2R1SkF1azJHZlU1MzdRSWdOOFRWTlFFUnVuQU5wM0NoOGRqZjBjbmJFTHQ0RWhMNUlRWE5Hc2NZQVhSQ0M3aExzRDJDQTIxUktrakdwalpmTXIzcHk1NzJ6ZzlJajJuRGNuZnEzZVJhb3ZXN0VzMlNqQV94Z9IBrAFBVV95cUxPOERoYmZkcUcweFh4UDEwSnBJWHVaVlFYdXR3Ry1TZjJqcWczQXB5NkRxd2RpM3JQS01PMGt4RnJMdXcyNWRjMUN5V0dJUWVKcnBEUGR2ZU9HR3lpaXNkVTRMR2gtYWxqR2lOcU83c0NEX1BLWmlGbm5zbVkxbVdOc2ZwNHpzekFNemN4WVNKY3hZUHRwYmVFN0JUSHlZR3Q3NWlQM3lvSTU5aUZr?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "ojk catat pembiayaan pinjol capai rp105 63 triliun pada juli 2026 antara news",
      "id": "a8aaf2df8b4ac500",
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
      "eventId": "auto-2dfad05a6be3e1ae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Outstanding Pinjaman Online Juli 2026 Tembus Rp105,63 Triliun - bloombergtechnoz.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOWUdNZnlkcmZoTWp2dm50di1SQWFpUk9mNmg5VU1pOXRzWEp4S01UalhuT0VhRHRsTkhQYnRYUU5rYVV6RkFLYXhrSHk0MUVWT0hvM1RUamRqY2FUZlFrS1c2ZExSaEo0RjBXUHVWVGRTR0FDalc1YnFzeDl6RmhzRmcwejdpb1NSaTZFcHpGUHQteDVwQy1VWUJkSGgxVVpid0M5M2NnNEFWeXA1cl80ZzJxbw?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "bloombergtechnoz.com",
      "summary": "outstanding pinjaman online juli 2026 tembus rp105 63 triliun bloombergtechnoz com",
      "id": "83ced6a759e327ee",
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
      "eventId": "auto-f3e445265ee21c62",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
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
      "title": "Pinjaman Daring Tembus Rp 105,63 Triliun, TWP90 Naik Menjadi 4,32 Persen - investortrust.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOWnp2eTltazBJSDB2Tm9fOGY1Mm5XRndPaDZCZEl3MmJpWjE1MlNLcXYtOTBsZDZIWmxrODR2eXpVLXZHWFhnS3BoOVl0QVZTcmFkN1dRdXZsUTktclpENjdleGJIbUZEQ1NZeklUOHJDaVNFdWxKT3BxSnM2dE1zVEJ6RmU5NzF5UWhvRTBQSlVJb3NKbW9ST2ZOTGYyY0RRejhvbHZoUVp4RVFVazFjbHVXdw?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "investortrust.id",
      "summary": "pinjaman daring tembus rp 105 63 triliun twp90 naik menjadi 4 32 persen investortrust id",
      "id": "8587031c8f2dadb5",
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
      "date": "2026-09-07",
      "title": "Pinjol Makin Marak, OJK Catat Nilainya Tembus Rp105,63 Triliun - ChannelSulawesi.id",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxONGdHQWdVcnNYbENzX0d6T3RkTHluTEhkYWEzSFdkTUhwbklMdFU4RUlrZnZHTm5Jak9WMjlzLW1jdUlVd3JVNmxJVWttMmVEdmgtZW9waUJtYzN3Wk9HeFd2d0x2WG9lQWpzLTN3SkxVRWFBNlBld2dUdTJfQXY2VlRKZmdWQnA4Y2Z1czBHbFBXVWFlT1dKdzg1UlFPY3hj?oc=5",
      "publisherUrl": "https://channelsulawesi.id",
      "source": "ChannelSulawesi.id",
      "summary": "pinjol makin marak ojk catat nilainya tembus rp105 63 triliun channelsulawesi id",
      "id": "a6501330dd847c00",
      "domain": "channelsulawesi.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6abbdeec60ea5b65",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Pinjol Meledak 25%, Ferry Latuhihin: Pertumbuhan Ekonomi Tak Terasa di Rakyat - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQZVA1QlVQeTFoM0ppWHAwaHlxcnk3WHdlQTNNRFNpS2pEeWxPTml2T0VlZXlwSGh3QjVkcHFFTnNXOGsyemxjZ0Z4U0k2ZmlCV0d6WDlFdlpOVnBLSjU4TE4walBpSUhoMXp4REdFc180SDdOZThTNXZfc0laSHV3b0Zoa1RWbEt4TFkxV1Zac1RtMDNfcXl2M0RiZnFLdU13VGxXMVI4TVZQRGt3UktnLUdR0gG3AUFVX3lxTFBNcEZGajdkNzlyc2F5c3k4MmJEVmFCYnhLRFdjWFU1dzNQMmtuZldyQ3FqWHRpa29Wa0xrWHlodlRzRmZ6WXQ2RkcxRXdOa1JvTFBKRWtLRUZibUtENzdMdDhuUExzZlcxdVNUbDV5UnlJN2hQc2x3Tl9ySmh5SHI4YnZSREZiLVRBaE5nY0NqaFRmVndHZFpIWlpzVmlGZUx3Y08xUFFnLU1fRE9URjh5TnlRNzhpMA?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "pinjol meledak 25 ferry latuhihin pertumbuhan ekonomi tak terasa di rakyat wartaekonomi co id",
      "id": "767816c64c248a23",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-246a587cf7274f9b",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-07",
      "title": "Pinjol Warga RI Tembus Rp105,6 T, Kredit Macet Naik Jadi 4,32% - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPLUtsWVBObkhRRnNfNElDalJWTDRZTXB6MGVwSUcwbE8yY3NxbUFjOE1BSG96WnlGeHFYQ0otRWFZZy02QXlDcW41MmZhVkpHd0FZcTFsMlQwRzJzTVdRQVhJSWFab1lqVk8xUllWRW5CMktUemgwS19ENG1wNG1RbWpmbVpsRXNoRnhxdEVnZ2w1ZHFXR2hwVE5xTl9BVWYtOWRVRnVUOFpIR1NsV0VmZnJLd1FWeW9HMVJmc9IBwgFBVV95cUxOTUNBYk1xTkxRLVBxN0JPWlU2cHpVbldhTjJuNXc2aTJoQVNVWUNsNEVrMDdVdW4yeThEclJVMHhJMUpjTDN5Q2ZEQkYyOGNSSkpYMFhveE9pTUdBWUE4UlRsSkhxRTNmWkh6dFNsN3Nza2RtSFptcTIxbWlRTGZUek95R3BsY29QQ2E5T0NobG1RQ2ZJcGZQZUI0RWVqRTVHX1VvTWw4bjFpTHgxSTRyQl91Um5iV3BPR1BHUXFvREZMQQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "pinjol warga ri tembus rp105 6 t kredit macet naik jadi 4 32 cnbcindonesia com",
      "id": "ae42a4ff284dc226",
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
      "title": "Risko Kredit Macet Pinjol Indonesia Semakin Tinggi saat Pembiayaan Melonjak - suara.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPRXBNYm9hbl9XUnZzR0Y3dVFtcmg4WGNlb05PUUJxN0gtbzFrckNvb1dtNURLWFhXeUpZV2ZkbUZ1UGxFNUo4NTlvZVNxR01VVWFwYmFSSDQxOFp0RG9CMEZvSVlnbVAtUEtVSVlvY295VGJVMWVYRWVhaVFZSmlZRExPVlZWdEhDX0sxUmx5Q01EZWNZUkktZVRfZEM4ZjV4eWhza1JSVHNlaTM5aG9rMmozX29RLVFsZE93SzdxSdIBvwFBVV95cUxORXBiaUJncVpBYmxiRGRKeDRsVUhhR2tqMlhvbk1oVWZqdHJVZzFtc1dWYWZtbGYyblRVU1NBMG9XekhnOG8yUW9XYUtPUThSMkhIVldYV2VtT1dTcTlpMzFsdDJhbzlCdDE1WkZTZUYwRVY0VXZEalZXdi1kdFE2R3dfcGNrMWc5eDlRc1A0aUJueHZxOC1NWFNPMnQzbWtkMkVFNEpzMHlsM0d4M2dpSS1LMThGUWp2WEk3bDBlRQ?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "suara.com",
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
      "title": "Satgas PASTI Setop 951 Pinjol Ilegal, Kerugian Tembus Rp 206 Miliar - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPZ3JFNEUyYmZVTndjMElHU0NJeThRR0RkckpJbEtXVVE1ZDVLMFFkWUN3WHQ3YTRWMkpTV2ZSa1ZEeDFhVWZPOWpvZ0tGdzhheS1iYUZxMkdJcXRra1hXaWNPTmE3QmQwcWNoVWtpOXlZdExHV2JfNzk3dmlQQ0JKVHVIbVpfUTR5N3RKRGJLZW5OcFREOU1oRFhZakE5MlBKZUluQmdRY3ZIUXVPdXBTa29US0ZnSGdMY3ZTazhDdDhrMUp5aUdn0gHMAUFVX3lxTE5xbm8tZmd2SnI3SUhWUVppR1ctcXR4OVJBTzV6OXZBSUNoT0pnbVN6R0NIRExObDByN2tBWnBXVzRwTFdBME9UZ2xvMUw2czJiSzh0U2d1amhqc2pJSDg3WUM5dWNUNzUwcUNXSnlGVVJBSnYySnByTlhfZHFtS216UlpzLXdfbDczZUV6R0pfVVJGd0lPM0dhQ1pnR0YtQVJTTVN6YnM4T0p4OV9Ec0N1MWo4a3B1eXJMaXZMMkhnV3U3MHVtT3NPX3RMQg?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "satgas pasti setop 951 pinjol ilegal kerugian tembus rp 206 miliar cnbcindonesia com",
      "id": "02ed1140b394bdc9",
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
      "eventId": "auto-16d4c58cd9a87b1e",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-07",
      "title": "Skema Tadpole Pindar Dinilai Rugikan Konsumen - ekonomi.republika.co.id",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNWmFTQ1czLWdiMFNuSW5STnZZOGxxMUlSMmlfSHk1RkdEMWl6ZnFDM05EXzBFVGJpdWQ1dUxzM2dGbXRBeGNUYWdVVTRvX2VxeTQ3eFhGUUJqT1RjV0pwejlROFVYZ2xlakJCTnlfZENReFRrcFBBMEw1UGNST0hHU1NhbHRDQ1YzUzlJMThqYTh3X0sxR0dXMVBB?oc=5",
      "publisherUrl": "https://ekonomi.republika.co.id",
      "source": "ekonomi.republika.co.id",
      "summary": "skema tadpole pindar dinilai rugikan konsumen ekonomi republika co id",
      "id": "83963f3e9094fd09",
      "domain": "ekonomi.republika.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
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
      "title": "Skema Tadpole Pindar Dinilai Rugikan Peminjam, Ini Alasannya - finance.detik.com",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNeGNZZ3Q1OWJPRFpQd1ZEOWZMUm5LcmtrdzlrS25IV01XUG4yYVFUZDRTcnZQTDdibV9RVmk4ZWFUWjBfZ2Y5VjRiZENGSHQ3dFJqN3BjRUFBS1hYank3WUw5MGczcnRNTGhGdmJFVm5IWTlpUFJnQ21rZkJQTGFWTkhrRkZYMDRrTmpCMEhlTTRzMm1zZUdsVFJzbWdOR29QMlNOQU5R0gGrAUFVX3lxTFByYjlkLWtybERNd3hWOWxqdVRlek52ekhkWmx0NWlDU3prNTJKdUJ2QnJqRy1FelJKZzZmQXdFV2hEUFR0T3pMX2lMaFFSTlhra1NmdFh6LXBnem56akVfMkEySEd2UlFvei1lNUxmS3FFb1dOYlpJLTlaY3V3d2Rhc2tjT0xGQ1RmS1hMeUVmOXl0a1BkeGZDX2w1YjJZQk1IbmJVaWtzd3VGZw?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "finance.detik.com",
      "summary": "skema tadpole pindar dinilai rugikan peminjam ini alasannya finance detik com",
      "id": "960771374e324191",
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
      "title": "Skema Tadpole Rugikan Konsumen, Industri Pindar Didorong Perbaiki Credit Scoring - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPUnlmckk0UklRNEpuRnl5T01UYkh4WEJERTI5WVZjZEpZdlV4U3c1MGhlU3NlX2g5WFo2NzRRa3lVY3RmVko3Smtua3BpeU80cG5mdl8tbGZtUXdTZTgxY0pHeFYwaWZac21YVjAtUFNIODcxSjJhbHkzdTFESHRYNFRZQUtFMnBXVGNTaDVvdHBOOWdRekRWSVhSblkwTFZEcUJxY2dtSQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "skema tadpole rugikan konsumen industri pindar didorong perbaiki credit scoring infobanknews com",
      "id": "ba34c132ebb8db6f",
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
      "title": "Utang Pinjol Warga RI Tembus Rp105 Triliun, Kredit Macet Ikut Naik - suara.com",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOWXhFck5nWmRTZDc4djVaVVl5cW9YMktJVm5IWjV4OUxqWDZNZVdoenowMzRrNFNXbHdyU2RCNEtxdDR0NFl1amJfbEp1ZmNpUFFpUTBzYVVraWR6VEEzOU93OE5FU1R0X2F6cTdaQ08xRHZ6eUY2WjRUUGJOM01oeXZEQnBRUW15b3Fib1I1UWxjX1pqbEZtd0V3ZUlwTDFCcXV1RTNZM0gwOHRwNkxyeEZ30gGyAUFVX3lxTE8yMHhwN3FnbWZSVlpTamZWWDAwLWdBbjBaQzZWUzdTX1ZEZlNfcjZFTlpHZEZYUTZpcktxeURxenJjN0hZelVSeHRsRDNYME9PRkdFNlhSSnpGYjluSUJmRUl5WkZOVHZBblhnZ1cxbERYRTJ4Y2tZeHk0NTh6OU1VUGVabVgyc2RXa1NSTTdRU1JkQzVwbkU3NTA1MldCNC1MYVBJeHVUNUtGNDRoQ29ER1E?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "suara.com",
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
      "title": "Utang Warga RI Makin Gemuk, Pinjol Tumbuh 24,76% hingga Tembus Rp105,63 Triliun - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNNU44SXJXaXlZd1JfUEVadlp0bWhfeGVrQ1MwR1M5X25jc0dWZF9oSElDU196VnhTUXJTb19sdm03VEF1R2R1NjZTaVp1MU50X2xCc0d1amhKRzk2UkhaMnl4MU55SG91MkhtYWZOSmJUV3pHdHVWcDROSE9OVW1wSlhnNWd4Rkh6V25VRF9WUHREc1Y1TmFYSmtWV2tHX1BDd1BqWnVWaEM3RHNtYWtnbmpUMNIBuAFBVV95cUxOUHJSa3ZFRVJ1Tkc5UWZRY3dOZ3lUZWN3WFpnd3hwa3k2eUx5a0Nxbnh5dnF6RTVGeHkzQ2hqZXRqcndtbXZzY3lVd1hnVmoxUnNhVzZJcFpHX05VWGt1eF8zRGVpdGwzZkxlQzVHWXc3RTdEQWJZQUtXNGlEZlZOWUo3UVZOODdscVRDU21UM0FSbjVZQjF1MEpCUXl2aURuNFFYa2ZoZ3Y2bHRObzhDTHJGSzk3Mnkz?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "utang warga ri makin gemuk pinjol tumbuh 24 76 hingga tembus rp105 63 triliun wartaekonomi co id",
      "id": "6c111946f300c793",
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
      "title": "Warga RI Makin Banyak Utang Pinjol, Juli Tembus Rp 105 Triliun - finance.detik.com",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQYmE4d3BiME8wWUVlLUZjTTd5NnhpNWZLRHhBYjl4MjJVaUxVS1dQY1QxX2Z5bWhheHpJc0dyaVZDajdjal8wdk0ySnMybDRFNXZ4VzRoQWNCUFh4UmdUeGFhR251bmktX0tJbmNVOGZIc1RxczN2TExvQzlkZ1ZkT2VzNVh0T1RNWm1LOXVtbGRtY1BScW42Z0czYzYyYVVxWC1aWEY1TzXSAa4BQVVfeXFMTzVQNUk0WEhKNEgyMDItczlsTURfY04zbXZxRDF4Ti1Ydzc5MF9WVmJTUWJhRUJXdEpUWUFzTVROTExnOW5mSzA5X3BZRVpUTjBfTjhLSEtEMTVpN251UnFKVE5vazNnRFdBZE83THp5ejlORHhaeGI4dmdYVWZDRGRiZVlFbWk4WFNsWjVTQjhvRnFZa2s3WXFGNjZEUTdITFlvVU1DLUpFY01kT0ZB?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "finance.detik.com",
      "summary": "warga ri makin banyak utang pinjol juli tembus rp 105 triliun finance detik com",
      "id": "07228e35bdf10a12",
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
      "eventId": "auto-634ab8fd6987b3a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-07",
      "title": "Warga RI Makin Doyan Utang di Pindar, Ini Buktinya - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE45b0FkMWpxS0M1NHVxVXBNU19pQlNsUjBIQ0lOZ2M3X2x4Qk96bzIyY29qVFRjRktIdGVNNWtvZi1veEd1UWVWOF9iVWhKcHp6eTdHN19kbjlOVEhKMTc0SVVzWks3UGh2bTZNNzlURkExbTVyX3lTaGxRUTJXR3c?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "warga ri makin doyan utang di pindar ini buktinya infobanknews com",
      "id": "8d827d23d8a884a0",
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
      "title": "7 Perusahaan Pindar Belum Penuhi Modal Minimum, OJK: Sudah Menyampaikan Action Plan - Akurat.co",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQa3M5cFY5T3hyb0t2clJqV0JkUmlhMXNfN2NRbTFaSm1LSkFldV9WRzV6MmkyY2lod2N3blQyMm1SQ3FGbVJycUdEWUpSRG5sbW81UXlTczc2UHhnVUtDNG9vV3JhQy1KRTA2LWdMcXk2MG5VdXRFcTdkNW05cV9zUXJBQzFNRjNMem5PeDhYSWp4UVctdURYQnVDRm5kMkVUZGJCSU41MFUtOUphMS0yc2pHXzhwc3dwU2lN?oc=5",
      "publisherUrl": "https://www.akurat.co",
      "source": "Akurat.co",
      "summary": "7 perusahaan pindar belum penuhi modal minimum ojk sudah menyampaikan action plan akurat co",
      "id": "81e54fa16f1cc092",
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
      "eventId": "auto-6d305313818ae9b2",
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
      "title": "Cara Cek KTP Dipakai Pinjol Tanpa Izin - detikcom",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOeHctYk5ia0QwMlJ3aXgwWWd6MmpBX2NWV0hZVmp1WGNnV19xV1FwYXhJU2lnRzJiU1FiX1FiY29NclBuWXBXV1NaamRYZ05ieHQ0V24wRXhEcC15NHZPeUlCWUVHclVUbHd6UnpfbG9XbGQ4SjNEcUEzb2xWd2VId1dlOEFjOVdtQmZn0gGQAUFVX3lxTE53LVFrQVIyOUJleTNDbnYyX2RYVlAwSGR1dDM3UEx0TGhYMDl5UnpMRDJDTnQ0OTRtTlYzTEU2bVBGS0ZpM3AxbWZqVGN3bUR1ZkJwbTVsdVZnTExCcTIza2EwelEwZDQ0STVGWW1YaUZSZjZlXzFoRUYtTXlBTEhNd2VRN2JUQlZFT1pvQXQ4ZQ?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "cara cek ktp dipakai pinjol tanpa izin detikcom",
      "id": "57043aed4835bdd3",
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
      "eventId": "auto-a924b80797dd6725",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
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
      "title": "Kredivo Catat 54% Pembiayaan Disalurkan untuk Kebutuhan Produktif - investortrust.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPZUxFREExRXVzWlRHdVZwZHY1dHNsVHRyMUdzMUEwZEsweU4wdXV2cFpHM0ZzWVRQTG52VDk0UVh0U1NWN1l2M2pZZHNRM0xKUVlOUU9OLVB5UHlsWWFMREtKUFJQdTEtVHNYeHBVMUdDV3otdGFLRm1HZWFHWkdpc3picXhXTjhBTWZIZGJtWElKTkpXMnZYVHpKQWtZUDRDbjh6S2VtY0hKUQ?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "investortrust.id",
      "summary": "kredivo catat 54 pembiayaan disalurkan untuk kebutuhan produktif investortrust id",
      "id": "9be1e461e188ab31",
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
      "date": "2026-09-08",
      "title": "Lewat KOPRI Peduli, FORMIT Kirim Bantuan Kemanusiaan ke NTT - Jurnal News - jurnalnews.id",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOTC1UTUxjZ1FGMjNmSmh5VTBDQkptbW5ERVU1ZVYwYkEzLXM4SVhOQ1NWTXoxVVpmM0p1Z3Z5cVlCY0FieTJ4WmI4SERzOVR5N3VlTk9FTHpqdnhoTGZiTmRka3VvQUM2a2VUQ29MVU9aakFXSWhZcjVGazlCeURuZlN2U3A5QmUwVnM2bVFCWnNUODJkS3B6LWpseHI4QkdTUHNSazZoONIBrAFBVV95cUxQQmhFc2tBU2pLREJ0TE01RElIWUJEaXRjSHhUYWNkeC1ZUGJvOFNtc0Zqc0hmZS0yYnBMUlZUNDN0QXRlQ041aWk1SHdzYWxXQWJIcUhQSDVkaUIya2gyNFVNbzloRndPTFdMV3ducmdyLVNmVnlHazVyWmhJblEzZ0xJM083bV9EbGlwVW5CUWdlQ19ZWmJLdlA1R2Z0Qk5tR1FvYnh3MmpmMW9E?oc=5",
      "publisherUrl": "https://www.jurnalnews.id",
      "source": "jurnalnews.id",
      "summary": "lewat kopri peduli formit kirim bantuan kemanusiaan ke ntt jurnal news jurnalnews id",
      "id": "859ec0651db1f98f",
      "domain": "jurnalnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-34e55585801197e2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Mahasiswa KKN UAD Gelar Sosialisasi Bahaya Judi dan Pinjaman Online di Gunungkidul - Suara 'Aisyiyah",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQUzFDb25pMFRIT2JYR0JJSmhISGdxdVZuX0VhVkhSeGNJTUVnX2d0OVo5ZlNieEN3RkphNzVzV1JRMzhkQmFDcll2VWpmaEdQMW5PYzRKTE1RTFJreG9MeVRPMnRtYmozWHZVTUJkM1VBNkxDbk1vTTZNdER0OUJJUkNpWDFBRDd2QVFScDZxc1phUlNLVjFaSGI2WUdKMWxRbUJPSWxta3ZGVHBn?oc=5",
      "publisherUrl": "https://suaraaisyiyah.id",
      "source": "Suara 'Aisyiyah",
      "summary": "mahasiswa kkn uad gelar sosialisasi bahaya judi dan pinjaman online di gunungkidul suara aisyiyah",
      "id": "aaeb805bad43186e",
      "domain": "suaraaisyiyah.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cbbb7567c9de7d84",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "OJK \"Sikat\" 951 Pinjol Ilegal, Ratusan Investasi Bodong Ikut Diburu - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOd3pfQ0k0dFNtZm8wUEVTZXBlS3VibHRXclRrcm1aZE81WVRDSHh4Zi1GcFl0ZVpoQzJ1Y2pQbDBmbjQyQ2RHTFUyX3ozSTFjMUtDV19JRGJKenoyLWhhR3hYVW5qSG02aHBJSnQ0VHJoenlLQnpRWmVVRDlSeGxhMW1sc1l2QV9kQWVpUXd0dlM2dmJ1WjY0am5KSHRwS2VVcmMtTm93?oc=5",
      "publisherUrl": "https://video.kompas.com",
      "source": "Kompas.com",
      "summary": "ojk sikat 951 pinjol ilegal ratusan investasi bodong ikut diburu kompas com",
      "id": "b027d93fe47a3eb2",
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
      "title": "OJK Catat Utang Masyarakat di Pinjol Capai Rp 105,63 Triliun Juli 2026 - suaragarut.id",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9DUWRKTHBPLTJIRlNWUnZJclJXTGlPcHNBa3YwWm5vSVlxMk5wWGUxaXVFRmlwNlJkcmQ0NEVJTjd2SUdROEMzNWNSUXlRbnNGZC1sUGRPYktWalJLVWc?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "suaragarut.id",
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
      "title": "OJK Hentikan 951 Pinjol Ilegal hingga Agustus 2026, Total 1.222 Entitas Keuangan Ilegal Ditindak - gebrak.id",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQQXo3VGF1NGRxWGxEeGkwdXZBNDhZbW5NVm1jV3l5cm9fR1ZVTkdmN1A1MGxjenJBbTZZNjVmaHgwbmdZRnFnMUl0ZFhvNzhRZTZpMTRISnhEXzNFNGhsVmdORUt3LUNuQ3ljdFhqZlNJY2t1X2ducmNBZ0F5Y2UzdmNnWEhKbGtvandIRHJfOHhLVXJrM2p5OWMxYWQxNjFHeVJPOC1QTkdYcnN4dmktbHMzRGprNG5QVEtiWXpxOERUUXhwZDVHZUpn?oc=5",
      "publisherUrl": "https://www.gebrak.id",
      "source": "gebrak.id",
      "summary": "ojk hentikan 951 pinjol ilegal hingga agustus 2026 total 1 222 entitas keuangan ilegal ditindak gebrak id",
      "id": "f36322a0ba3f8264",
      "domain": "gebrak.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-70bffd064e9f164b",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-08",
      "title": "OJK Sikat 951 Pinjol Ilegal, Selamatkan Rp 206 Miliar Uang Korban - Akurat Jakarta",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQLVFXaVFnY1lJV2xYZVNGTTI2ZXJiRXpNUmt4OGRQYnFJT0VVSExYUXZDWDZWQzhBLV9KbU9uZ0VUcElsQ1NuNEpndlI5Z3FETHJpc3NWR3FnV2hYem9pVXdOdVdlUmFZTU5HdEZyOHBxeTlCdlZRZUc4aFNMcjNFNkt0cUxFVFVxUE1oeE0tM2JOaEdXaGFSYldFX2c3WGJiRDJscA?oc=5",
      "publisherUrl": "https://jakarta.akurat.co",
      "source": "Akurat Jakarta",
      "summary": "ojk sikat 951 pinjol ilegal selamatkan rp 206 miliar uang korban akurat jakarta",
      "id": "1d2fc2b7ae03d4de",
      "domain": "jakarta.akurat.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.7,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8badc20f4e4597a6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-08",
      "title": "OJK Terima 30 Ribu Aduan Sektor Keuangan, Pinjol Ilegal Mendominasi - suara.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQOVU2SHdNNXlZRFBiQktLNDdjRTh4ZWRBSnl1cmtrR0F2Y0EtZGdKalVuYkZaSG9pQm9wV1hNZnlYOXhaWG8tZTdBaUVoRVJfWUF4SUJreU1oVV9IWVZjQXFfMWtMOW03ZGZaSjNKZnlILTdudU0wZmhwQ01iZ2dmd3g2ZnZvY1plLVNUbGo1VDhheTAyc2c0OHVRUkt5OGdPelFGY2FLa2JtdmdGU2JvUVVQNNIBswFBVV95cUxPNXlaX3hLb3ktc2hSblR2N0Q0UEJXVkJsWlhlMjJIZi0tT1JtSU03Q2dUQnlIekJ3bDJBVHQwTHpUZXpuV0xjaHlOdHlYU284eENKV09UTVBlY05GUEdnNlRJSV90eHhhY0pLWllCWWxEc1lxWHVLeU5hc1FqRWpvTUlwcGZNQnl3bmxnXzdqMWp3S19EeVllbDRwYjZReEZGcWRLSmp1V1VTVzg2UEVrOTY5dw?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "suara.com",
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
      "title": "OJKHentikan1222EntitasKeuanganIlegalhinggaAgustus2026PinjolPalingBanyak - https://belitongekspres.bacakoran.co/ - Belitong Ekspres",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOX1hCQ1Niei1qMGNYQm9CMWt5T3k3dzlLU0xHa0FteXFUNTFEQ09lNkI3OG5VTTJCM3NYVC1vNHpJWXZYcmQ2c2gybVk2OEdtYVYyVzhmdVc1OGhpLWJrODhNUmVHS3VZSll3WEpzZFM3UHRYSk85R0dwWlE1d21mR3MtWkhqeXltVjJsdmV5anByZERrT1g3UTRxVVNiMXpIOFhSU0xjNTZEYl9welZkSEd1OERVWmhFbWxOMExRd0dPV21sU2hoVUs3czN5c2FzTllLa9IByAFBVV95cUxPMmxNWnNBWjVvMU1XWGtXMUJMZkVFb2NOQzNpM0hIdDVqdjdLTV96emhRaGE1VUlYR3V5QTVwYWFSMF9KcUJ6Wm5xWWp6TUJTTW0zVTdtWHQwQVUtSzlrd0ZsYTc3a3BBV3lEa0V3OVFRNXFfSGtsOHdRdXhoV1AzaFlsQlJtTXZCcTlacEhBdW56NHBuMmx0YUhLNHExZUxzV2JuLVNPenlCaUFsTE1FeU13eGNTcmp3VllMamtOelpzbEJXc1dlOA?oc=5",
      "publisherUrl": "https://belitongekspres.bacakoran.co",
      "source": "Belitong Ekspres",
      "summary": "ojkhentikan1222entitaskeuanganilegalhinggaagustus2026pinjolpalingbanyak https belitongekspres bacakoran co belitong ekspres",
      "id": "092a5236afdd6108",
      "domain": "belitongekspres.bacakoran.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-394813bd254b94e9",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-08",
      "title": "PT Inovasi Terdepan Nusantara Pinjol Apa Saja, Aplikasi Apa selain Kredione? Ini Alamat dan Call Center Kantor - Berita DIY - Halaman 2 - Berita DIY",
      "url": "https://news.google.com/rss/articles/CBMihAJBVV95cUxNT3E1TWRackZraHFIQktXcjRzT2dZTnl0eU1rM3RQNzdKT0xBWEg5UmtMUGhEd0NWOHdwRHVlWUtwX1VWSEhYODNMWDZPcU0tanE0Z0NaV2tVVDY1YVlPY1Q1ZlFoTVVBMTh2SmQ5ODUzT1VTSFdEblpoa1BMUVhKRk9CNGJqX0hHYzR0UklkMmFGcWpjR1NRTVRxS3FmTGtvcFdBODRYMTdvaHNKcnpOX0ZCakJ4bkdDTy1JSTBiTGwwNHVCdFVGSU9vRGQ1a0dFUEg1WmJJYVpwYjdIVDdpX3RkQ1Y0NUZpcTUxSWRNaGVXUDFwOTlRT1NMYVRNc2ZTQnlHV9IBigJBVV95cUxOM3pUOUdncVQxelFvbzFmMWlEM0ZTdFRnTFhNZTRpdVByVHdnNGNkTl9LUjd1YjZGam9yc0hNWlNYVEN5a2tfbmZ0cHdKR2pBampsNjNWNlo2Si1EbkJFNWw4Z1BUU0l2QXl5enBPeS1oNmlwOUVUM0lrVThVUFgweEc2VDhfd0pfS0U4OWVNZkNQUlJDdVV1cFZqN2RqS25hdGk2Q1Rxb2FadnpqZ2M3LXo0LXJJdnJwUl9kbjJLbWx2elE3Y2JneHF5eWs4QlRjam9QVGVSSmZ0YlFPRC1lZkpqT21aalpIbWlndWFrdmNkS3RmbmV6V0t6a25jM1pqbFpfTkVORi12UQ?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "Berita DIY",
      "summary": "pt inovasi terdepan nusantara pinjol apa saja aplikasi apa selain kredione ini alamat dan call center kantor berita diy halaman 2 berita diy",
      "id": "293a06f696c3e585",
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
      "title": "Pinjaman Online Warga RI Makin Banyak, Tembus Rp 105 Triliun - finance.detik.com",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQNjNoNWJoZDd3NU5LSm9jeUFDblpIdW1WZlI2bUFRWFVWaE80V1R4ZzFUQ3BzYUpMQjBKQ1U3cVhBbEZYN3pqbEpjWVFERGpvd0d1UGt6UlFmVEw0R2V5YWRhcktrcXNpRTFfV3otemtwdjZISndHWkRlVTdCVmtnNWxXVDhCWE9SSFN6SVBHalZPODBqVmxQa1FzQ241QmN5OGU5RkFB0gGrAUFVX3lxTFAyYTIzdnpzSjFITFRzOE1HeWkzRGpTMy1sVXQyS1NpZ1hFSkNZQ05tSXBNdXl4cmF6X3hnd2pUSzI5TEtETVRMaGpwZ0I0U1NDTzZyYmNaOUtzWTVsRktsU3haYTFoajNrbEpYNXVLQVlKbnlRdkVGZ1ZmcDZnWWo2Q252NXJibFZHVXhUUWpaRnB4TGpSNTVkYUNYbklFUzdLNUdCREtYa0tZYw?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "finance.detik.com",
      "summary": "pinjaman online warga ri makin banyak tembus rp 105 triliun finance detik com",
      "id": "390332bc1f39f53a",
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
      "title": "Rasio Kredit Macet Pinjol di Indonesia Naik pada Juli 2026 - Databoks",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNQ3B4WkxsNjl6OHVJamduY1hGUVFpZFg3RTIyTlBFdFFvZEhRU25YenhScUpPNlFjSFNMVUh6UU1HeDlWckxwZzYwX2dhSjctbEczNE9YclN0Z2d5XzhjMzZnU2RfV0Ffa2ZGTFk1RkRWRlBnMkJvdW9ocV9fZWxleEVtblJhQ2o1VVRDaVh1c1BjQm9BMHQ0cC1pUFQxZ21EejBYNDZkSmI1bWZRX2Q0OEdnejRKalE2and5NzBsRWw?oc=5",
      "publisherUrl": "https://databoks.katadata.co.id",
      "source": "Databoks",
      "summary": "rasio kredit macet pinjol di indonesia naik pada juli 2026 databoks",
      "id": "cc2550cbb6efb4ad",
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
      "title": "Tembus Rp3,8 Triliun, CBA Soroti Anggaran Remunerasi OJK di Tengah Maraknya Pinjol dan Scamming - Nusantaraterkini.co",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOZFdjNm1FVjN6REdWSHU1S3NWZTBOS0o2SFV2dFRzY1RWajRkVlRrOTFFcS15SDI4eXB2Q1JkTE9VaHhkdEhscHYtaldfQWthMUtOeHczYlhDQWJFRHNmcGFET2YyYWRYZ3htNmMxSGJBbWVsX2FsaXliZU5nSTZrTGdzTUZWUGtHeU5PZ1BCa1h3SGpMNHFibmNFVXN3U2Q0em9MTUNHcFphWHFNR0pneTI4RXh0VUtwLUZzVDhB?oc=5",
      "publisherUrl": "https://nusantaraterkini.co",
      "source": "Nusantaraterkini.co",
      "summary": "tembus rp3 8 triliun cba soroti anggaran remunerasi ojk di tengah maraknya pinjol dan scamming nusantaraterkini co",
      "id": "09fe81ea0f55f87d",
      "domain": "nusantaraterkini.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 65.4,
        "label": "mixed",
        "negativeWeight": 2.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-16856d9031a744a4",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-08",
      "title": "Terdeteksi Pinjol dan Judol, Bansos 32 KPM di Buleleng Tersedat - koranbuleleng.com",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOSlFCaU5jNkpGOS1vN251cXFCRnVrWllzRFZnWVV0eUVjUU96NWNCc2JQTnQzeGFCSW85QTVpTVJuOTB3LVk0dEQ3VnZKallVYW5TaFRRNG43b0JmOHM0dllyNjJEck5PLWlTdkU1S1dvNmdpREQ1NFhqZHF6X293UUlQY25ueG0yUTcyVHNuLTl6akROZ1hGN1ZCQlVDMHYxckE?oc=5",
      "publisherUrl": "https://koranbuleleng.com",
      "source": "koranbuleleng.com",
      "summary": "terdeteksi pinjol dan judol bansos 32 kpm di buleleng tersedat koranbuleleng com",
      "id": "4c081ea7a644338b",
      "domain": "koranbuleleng.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-57dc948c648072af",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Utang Pinjol Masyarakat Indonesia Naik Jadi Rp105,63 Triliun pada Juli 2026 - Databoks",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxON0J4bVc0Ujk5UFZpRmtkYlBMUE1zOXlGdzh4amJYM3lxQzN5b085Wm1lcFdseG9uZTNRWmVQQ0tZdjFMTTR1MEpoa2Z6b3l3VjZ2YldNQldWaEp4OExJaGMyLWpjdDEtTS1fX0dESEMwTEdVSEpTa192UHVDc0M3dGhuZzdOYkVmVGxYV3JOYUFOVUJwbFZ5VG5nVXozY3dYWUxCaERGWFZoOTB4YlNCR2ZBcEJyR3NOUVlMdmVSNmpFV2Fjdkk5TzVtcThwR3RJclpQZGJB?oc=5",
      "publisherUrl": "https://databoks.katadata.co.id",
      "source": "Databoks",
      "summary": "utang pinjol masyarakat indonesia naik jadi rp105 63 triliun pada juli 2026 databoks",
      "id": "f8c9890874e8c58b",
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
      "title": "VIDEO: Utang Pinjol Warga RI Tembus Rp105 Triliun - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNdnZieU1nUjY4RE00NDJZLXRoRFFGUl9nV3pWdG1YRERvQlU4dHc5dVpYT25VVDZLVVFZY1NiT1RRV25lS0lNSnlTaDVxN2h6VEtfNzNUa3hvcDcxVDJ4eFNZdUdWbHVjdGlXSEVNZzk4TlpjMFhBcG4ySERVVHdVOEJPNlA5RjFrei04aExiSTZJVjdiSlZZZm90LTlKQ2puWjN0WE5iSmpCU2s?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "video utang pinjol warga ri tembus rp105 triliun cnn indonesia",
      "id": "dccf546a2cb92bb9",
      "domain": "cnnindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e88cd53177a4c41d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-08",
      "title": "Video: Pinjaman Online Warga RI Makin Banyak, Tembus Rp 105 Triliun - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNRS1nUDBlREFpODBoS0xfb2N6eTV0MjhwRzFkbzlfeTRPVmpKcGR2UDl6R0RwQ2hBdFZseGhlYm52U29BSlVMLXJaV1R0S2hDRXhYZ2NueVpXek9yTzBtV3BWLUxyVWF6RlRlVHdfTWlsVl9USklKVXM5c1hqbUxCelpvSFFLbVdLUWdVR2czeUhkdEtHYjk2R084WUVNeHFYOXNqVFNIcVBweEM4SWtUa0pEMGVEWXVlOGxUcWZweDdsZw?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "video pinjaman online warga ri makin banyak tembus rp 105 triliun cnbcindonesia com",
      "id": "9674f61aab9504a8",
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
      "title": "Waspada Akun Palsu Mengatasnamakan Kredit Pintar, Simak Cirinya - KreditPintar",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQbkxTb2ZPZkh4QlB2MmRCRVlZTjZhRUlvcHJ4RThScVoxVXk5MjZ0UHNIVXJQMWxKV1BrcVh4UUtnSTFTaURpaGhYNW9laFJURGRZdGNrLTZ4VndKSXJ6MlhPQ1FlbjBrNWhVT1ROSE9GcGlGcTFsMW1CZjhfeURNY0h3UHEzUVVOZ0sxcGV3UTI?oc=5",
      "publisherUrl": "https://www.kreditpintar.com",
      "source": "KreditPintar",
      "summary": "waspada akun palsu mengatasnamakan kredit pintar simak cirinya kreditpintar",
      "id": "c68765595a39f0ff",
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
      "title": "Bos AFPI Sebut Pelemahan Daya Beli Jadi Salah Satu Penyebab TWP90 Pindar Tembus 4,32% - investortrust.id",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOQ19xOXlHeUJFMEVZb3lnUGtNclN3MGJMRGY4X2VKMWJGa3dmQmFqRXNFZ2RrUE1FYWl1bkJpUWlsQmw5QmdQSnVGUjkwal9rajZSbFBDUnpqY1ZpUmRvdEJXeUJodEJrM0lMWnhCUU9YakdVQXJpNE1tYllwci00dHlDYngtdzJORG9GMWdQM3NaV3dDdlZRZGM0bWZHWG40SkhaZ2VkNVNJTU1LRkJxSEtvU3pmYklnRDhibjdLb2xLMFBB?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "investortrust.id",
      "summary": "bos afpi sebut pelemahan daya beli jadi salah satu penyebab twp90 pindar tembus 4 32 investortrust id",
      "id": "190e5a86bf0de96f",
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
      "title": "Daftar 94 Pinjol Resmi OJK September 2026, Cek Sebelum Ajukan Pinjaman - metrotvnews.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQUkJKWXdZT3pleE8yVlVhM2tLMFRWY3o4WHNGLWJNcHZnNjNHWlVQN0JPTDVYZmdGSG9WVk84M2UxOE51SnNJbzd3STA1S1k2QmlhcmpjSklRdTdwMktMZ0FYbWNlWWI1eUhQN1ZoSlRndmlSYUZNQS02c0cySnFDci0tMkhBRHRSa3VkSDVNcjFEVHZzNTFxOUZsUmlXYnJnVjNuaGk5Vkljalc1cTN4Vg?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "metrotvnews.com",
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
      "title": "Data Terdeteksi Judol-Pinjol, Bansos 32 KPM di Buleleng Terhenti - balipost.com",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPTzlVUU5aMFBGb2puczdHMEw3Y2xKWmdQdE9ZNEpFWGY5eFd6cklTRWhhckpGT0k1UnJsYzFBMDZISm10UG1oRzUtTlRUS2lzekg4blB3bXZfNDRCTWJJM3RkaDE3QWZITExCd2c1X1Fodm9QT3ltQW9oZzcwRFRnMl9nMEhPMXBTeW8tTEtWQU9tZE5BWUN5Zg?oc=5",
      "publisherUrl": "https://www.balipost.com",
      "source": "balipost.com",
      "summary": "data terdeteksi judol pinjol bansos 32 kpm di buleleng terhenti balipost com",
      "id": "33fe2ae0e7565ff0",
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
      "eventId": "auto-bfd0bce1ad7019a6",
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
      "title": "Gempita Paylater dan Gadai: Pembiayaan Meroket di Tengah Sanksi Tegas OJK - Stabilitas.id",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQR1RKdnZoYnRiTEhTcFdSY0VMVi1vYlR6YnhGY2M3cnQxMDRTUXBQTlcwTk5tRG1fRlloS2Y5SVlqcDN6cmVhZ1JUWmN1OWdnSng3UE5RQ0RrNGlJUGNGZGthaUtGQ0tiVm0takhITm5CSUhsLXBLR0ZRTWdPaEtodlZGM0RveHp6Rno4RVdTVEI0amVzV1d3eFhINzlod0Ro?oc=5",
      "publisherUrl": "https://www.stabilitas.id",
      "source": "Stabilitas.id",
      "summary": "gempita paylater dan gadai pembiayaan meroket di tengah sanksi tegas ojk stabilitas id",
      "id": "4c45fdaf07a47061",
      "domain": "stabilitas.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a9b3b123300bc874",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-09",
      "title": "Hindari Jeratan Pinjol Ilegal, OJK Ajak Masyarakat Cermati Syarat Pinjaman Sebelum Lakukan Transaksi - radarlampung.disway.id - radarlampung.disway.id",
      "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxOQVMtVjJQU0d2aW9RZDlGRmRlbGtwM2QyRXpEcWpKdEZMSmZ3VWs2bWNkbWVaQ0M0TkgtbV92a2RWdFMzcUdlc0VoRklUbVV6M0VoOERLU0dYRkZMNG0tZXp5VGNqUlZOWkxDbmJUZ2R3RFJ6YTRUZ2N2NDV3ZjZ6SWVzLXFvbk9IX2pXMEt2bXlqcVZYSUhGSWJ6SlNNdHVjODU0MDRKa2VqMjJSSTZRVHBvVTh3SG1ETGZkS2lLUHktU3AxaWtQcDlBSEEzUjZpd29ySWhtNWJjbDlBRXhEV1hmOXJUbkhBY3hiNDJn0gHYAUFVX3lxTE1aSG1iVllNWVRxR0pFbDA2ZHBjWFBMb1FSZ2hoV1lTbkwwaVU3MVJILVZlVXZaZG03OG1YZUd0Zm1rNFJKUUpVWVB5dkRWaXM0TXNLOGxmbkEycFoySlpSY2I0X1pEUFBRQ2lnOEFCM2NEUktLbU5uNWVILWJaTFZZd1ZHaHQxM0lKT0VGNnVvekZ3SmppbXM1Vk9ZRG1KcUhTYmp0RWRXaWQ3MlU4bndXS0FJdGxBRmJaMXl6WjVVWnIwLXkyWXNqZXN0bm1yMHdsVS1Obld2OQ?oc=5",
      "publisherUrl": "https://radarlampung.disway.id",
      "source": "radarlampung.disway.id",
      "summary": "hindari jeratan pinjol ilegal ojk ajak masyarakat cermati syarat pinjaman sebelum lakukan transaksi radarlampung disway id radarlampung disway id",
      "id": "34f8968d95253c99",
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
      "eventId": "auto-b5130fd52f21417c",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
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
      "title": "Kemudahan Mewujudkan Liburan Melalui Layanan Paylater - rctiplus.com",
      "url": "https://news.google.com/rss/articles/CBMijwJBVV95cUxNM1NiY2RoZDdjYjFhMzlIVmFPY0pXQUVYRlFtVUg3b0hDYXlGY1YxY3F3TU00SU5NNmtpYS15cW10RUtWaFBtSmNNd3FCQlNZQzdqdDFGN3RqTm0xVldPZVh1VThQaGVYN192dDFNaGxDNzlSNWM3aGNGZWZwbkYyb1ZaTXNrQkpMRWk5WnM2SnpYeUlSZy12c01LQUFCb2dNc3V1aElOSTdGQzBkMnkwbExodlMyUi04anZfSFdjWE5udjFVMWRXR243cDlFanZ0czIwLTNpV3NkYjlPekxRNzdVbVVzbmRlRVBPbV9pS3dnek1ZLTRwOVdSV2FTYTJadW9BWGNqeG11bEFLNklj?oc=5",
      "publisherUrl": "https://www.rctiplus.com",
      "source": "rctiplus.com",
      "summary": "kemudahan mewujudkan liburan melalui layanan paylater rctiplus com",
      "id": "0f8da51afe0d9fd4",
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
      "eventId": "auto-43cbce640782dcda",
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
      "title": "Makin Cerdas Finansial, Begini Cara Membedakan Pinjol Legal vs Ilegal - Parapuan.co",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNbTMzb2JKTER2RUJjQWpQYndXVmNWMTR2eDVJNGdENE1SaHp4NFNINGEySG5YQURkOVNvVDRoUGtjQkRObTUwNVFoSEt6OVR0YmVkZURLcE04QzNUZ0FXZkQ4TUdJQUQteFNjeVlBT2MxcHp3aFZDZndjX2dKODZPUERpbmx1YzF6X2FqSkZkYTVHWWZWOGtIanUtejZGTjNmTWdxRWgwZ3BwT3fSAaoBQVVfeXFMT3VzakQ1TFRGT2xyRjRyNXJsMEhGM3lHRVBhSFpiLXhKV3pELWc2bVRFbEdtalZvSm9CQjBUSmlMVHQ1U2F6bTFaWUttQ0hyTnlPcmxvcUJFcWdONUVDZ2I0dEwycGZNaVMyY0RsV21RQ1k3Q05GbktTMDhyOXQ4bkhDUFZMVVJCNERnT1VaWklha3ZNcUJfeTF2T3JHUFBrZTZyNkk3MGRXYWc?oc=5",
      "publisherUrl": "https://www.parapuan.co",
      "source": "Parapuan.co",
      "summary": "makin cerdas finansial begini cara membedakan pinjol legal vs ilegal parapuan co",
      "id": "f68a4e09500b1935",
      "domain": "parapuan.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ea60d26263a2830",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
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
      "title": "OJK Rilis Daftar Pinjol Resmi Terbaru September 2026 - readers.id",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTFBYVmNRUjB0VnUtbElrYVVMdDdXVVVoaFpZbk9iaW9NaHZZMWd4UnNld1hXUzBBU1lheWpIMzN3aW94dEZsdGNGZy1MNkNRT0lUcTZPM29wbzdUeU5JTGw4TFloanFHSEU4MS1xZDlkQk44SUFIa2c?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "readers.id",
      "summary": "ojk rilis daftar pinjol resmi terbaru september 2026 readers id",
      "id": "12b88baea0b8ba0a",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a92a6b84eb75c8a0",
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
      "title": "OJK Ungkap Utang Pinjol Tembus Rp105,63 Triliun - terkenal.co.id",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5OX3ZIU3NmWUwyc0hROTAzYlY0dWRIbGhqXzRtQkNndjNxSHlDSVhuaHVRV1FJbHdLd0pCT2YtV01rUFF2UWNqMTNUaDlid2ZNQkNyTlhxdGJhYjdQOGozZlhET25tanZOVlJtbkNsenBkbGhSd0pjTE5n?oc=5",
      "publisherUrl": "https://terkenal.co.id",
      "source": "terkenal.co.id",
      "summary": "ojk ungkap utang pinjol tembus rp105 63 triliun terkenal co id",
      "id": "ae19a6a63f7640f3",
      "domain": "terkenal.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ecf66919c92c1efb",
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
      "title": "Rakyat Tercekik Pinjol, Anggaran Golf dan Rumah Miliaran Komisioner OJK Disoro - LiraNews.com",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQcVpUd3NlN25pbk1NMmVLZ25JWTRCR3dyNDRZeDh3RjJyS01DcnRkZFdUOTBveVQ2VEtCUVJuZF9JaGRWUk5PUWl1OFhFcTJmZDRDNmFNTU9weHluU2R0ZVZTSUVNZ2UxbDJkcGFjRllsYlJZdkpLTFI3M3BaTjJEUUdWYWZnM1JQYmJVLVV0UjZMRTdncUNtOU5weFVBRkh1?oc=5",
      "publisherUrl": "https://liranews.com",
      "source": "LiraNews.com",
      "summary": "rakyat tercekik pinjol anggaran golf dan rumah miliaran komisioner ojk disoro liranews com",
      "id": "805e2bdb083b8a3f",
      "domain": "liranews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-16eb6f58f37e2ebc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Rakyat Tercekik Pinjol, Anggaran Golf dan Rumah Miliaran Komisioner OJK Disorot - realita.co",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOdzNCYzlIckN1Z2ZLb3plRk11NzI1VnJBN3dLOGg2Yy04OHFUS1c2S01SVmdrR1RwVXRxOEVJRUFtd0szdTNMcFpiQVFnUEtoWlhJY2tGZjc0XzZYRXNjOGVubXl0X1NSQkFWMGw4V194MVZIZzB6YzFSRGdqa0ZtbWIyaXhhYjBnSUoyQ0VjemFoazY4TXNidzdDeGlsVGpDLXdlX0Y1TUg0R29r0gGyAUFVX3lxTE1CVTBVMGstd2tDY192cDN4elVpb0liZlV0UWs4ZU44dm45SVFUQVhoUTliLWxBYldZRFRlU0Yyd0pHQW9yaV93MG81MEV5LWItaEc3UFBqc2FheEVtQmZJbmpwc3FyYkNWbnhldzFfOEpqQlpXZ3YwX082aDVDYmRlaG15NTZ0Vnptd29oMG55ejBLZnlYSWFiTWo1NmFydUh2Njc3YmN6N2JDVXVaSTNwZnc?oc=5",
      "publisherUrl": "https://realita.co",
      "source": "realita.co",
      "summary": "rakyat tercekik pinjol anggaran golf dan rumah miliaran komisioner ojk disorot realita co",
      "id": "a01f2c40738b5d9c",
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
      "eventId": "auto-16eb6f58f37e2ebc",
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
      "date": "2026-09-09",
      "title": "Skema Tadpole Beratkan Konsumen, DPR dan Pakar Minta Pinjol Lebih Transparan - Inilah.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPUFYwS1ZlN2RxWnp2bWJQbTljb01sVmVXcFIxNWw5X0lTZkR4ZUF4ZHpBNkNiRG03RHkzWS1obFNNcWlON0RjUFNjYVNYWlQ0UDVLeXB1UFM0R2N0LXEwT1FmSUdkaTI3YU53MVRjTVkwdTk1anBKSzIwQXBWbURvNXlzdmUzUWRPS0FfZDl0LVc3Vi1jcnlDQUZMMGFHRjB4bXZsVlJYZHRyZw?oc=5",
      "publisherUrl": "https://www.inilah.com",
      "source": "Inilah.com",
      "summary": "skema tadpole beratkan konsumen dpr dan pakar minta pinjol lebih transparan inilah com",
      "id": "81cf540a64b48500",
      "domain": "inilah.com",
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
      "date": "2026-09-09",
      "title": "Tekan Risiko FOMO dan Jerat Pinjol, OJK Kebut Literasi Keuangan Gen Z Banten - Stabilitas.id",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPbjdzczhpb0VTc2RJMDAyNGNUMlB2QlJaVDJEQkRHVzhlWDNESmJYZGRoSHF5WGNTcWQyUWx2bUZYckZydlRJNm1oWFoyaF9MNWVmeVVHbndtM1NsMUdyR2U5Tk4xb1FWMzhjdnVsdzlRU3JheDJrS3k3VlZjdHd4VFY5LUp1V2ZGbDZkanRQLWowZmVraTlITmFrU1FFdl8yM0ZkRQ?oc=5",
      "publisherUrl": "https://www.stabilitas.id",
      "source": "Stabilitas.id",
      "summary": "tekan risiko fomo dan jerat pinjol ojk kebut literasi keuangan gen z banten stabilitas id",
      "id": "8ba36af4e013b98b",
      "domain": "stabilitas.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9e3087d21f1c4f13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Terdeteksi Judol dan Pinjol, 32 Keluarga di Buleleng Dicabut Bansos - Radar Badung",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxObDZKMnM3R1VteWdQdmZMUlRTSXI3YzFrV3E4V2lZaTBSbFJfQnM2SllPMmlHWjRfZWE4SUpRM054YkNBSkJDcWItY3o5V1ZPdEJGa1I4Rk1DTENvNnR6V0RJSDlWNENuZjV1ZFllR1lkMkFxZGZWOVVwZVFpakgwZjNnQU9TRTN3UnpuVXN3Q2J3VFppaUxQY0JIOEEyYThENm1Od0puODlOVGNfR1FBdlpwdVl0QjUxX0xhV1U3ci1YUdIBxwFBVV95cUxPeWFJQUt6Y2g2dUFKQTFJRXAxbm5sVnduN1VPNG9TZnhoVG93OHk2UW5NT29Wb1IwYjNGOGVIa2pYdHBFWm1HaFNtbXZFS3JGcDFvRVRiYnloSElnNEdSM01Wdm5aSlhUQmdXalI1NGZZX1JlaDlHekdQSVA4LXA5X0JnVVdhM2hKOHZPX2l4YVIwdmUwVVZ3NnQxVWJYOGhXQXduWTZJSldFMFBRN2dNVXdTeFRRTE1QcUFkRnp0SEFhYVpQUlIw?oc=5",
      "publisherUrl": "https://radarbadung.jawapos.com",
      "source": "Radar Badung",
      "summary": "terdeteksi judol dan pinjol 32 keluarga di buleleng dicabut bansos radar badung",
      "id": "bfe8c44d8c73a682",
      "domain": "radarbadung.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-10322d82e10fbd49",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-09",
      "title": "Utang Pinjol Warga RI Tembus Rp103,73 Triliun, Naik Rp1,66 Triliun Sebulan - Portal Pantura",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPQmx4dl9yTjRqa0VqNHNQdkVObVgyOGwxZGVwZmx2R3Zkclhsb2o2NFFRdGdmQTlmUlJTR2RxcXJ3NVJrclktalIzc0RITk9TQ0RGYzRwdWVXUHRFbFhNYlNpZ3NpTEpYZEN3c29UcllDMHJKMnVVZnVLMWh4U19LTEMwNGxGell2Y2lPSnoyZ3VhU1lmZHhRMk10NGxQM3R6OURKUXVwVDhCLUM4d0U2UWhB?oc=5",
      "publisherUrl": "https://www.portalpantura.com",
      "source": "Portal Pantura",
      "summary": "utang pinjol warga ri tembus rp103 73 triliun naik rp1 66 triliun sebulan portal pantura",
      "id": "1c2b56fe7e28f9e8",
      "domain": "portalpantura.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4fb1ba7ce9619c63",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "54,3% Kredit Digital Kredivo pada 2025 Dipakai untuk Kebutuhan Produktif - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPemE3T0RDdmJmUjFUdTdzSGwxaU1IX0VLSy1ieUM1d2REZkkteEFzMlJjNU9ZdThZdDRiczFPUGlWMGpnWEZsOVZGZEUxXzduT1lzekd4V2NlcjlCV3dqem1UVlF4eFZLdUR0T0w3UFhYaEh4NGlUdjEtU0xfb2RveUpGcE5aclpiUUpZYUx30gGWAUFVX3lxTE85TU5PcnlmQTUtTjBCSzk3TmpzaEs1T05xZXpiX0RmWllmckNLcGhzblpwbzg2YXNfeEN2V0hGOC1QWDlVWTE4RTRpNkEzSTQxbHJXLXZQQk9KYW9USHI2YXRZN3VPU1BHVEtuRm51d24yRF9vYVdQOGdDQWtTd2hTbWtMODZKcm5uZGZBQkk3TW4wc3ZJQQ?oc=5",
      "publisherUrl": "https://gadget.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "54 3 kredit digital kredivo pada 2025 dipakai untuk kebutuhan produktif qoo media",
      "id": "2c1dbccf38f9d005",
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
      "title": "DataPribadiDipinjamuntukKreditHPMalahDitagihRp723Juta - https://sumateraekspres.bacakoran.co/ - sumateraekspres",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOeW0xVk9hSV9aUjJfbWJySzJGay12ZzYtVkhzSnU1bmJRblVTbmtXX3J6U2NwcTRtNkh1dmdXQXBXRG51Qm9SNzFqQnJ5SHBFVXpHNF9Qd3Z2dGRlOWZFV09wTXRFaGRNcjFhdVNuWDkwNmtWUFVyaDdPTExzMFhma00tVWtMeGJ1WnlFNnc1RnRTOXM4RmVCNmRPX1RfTGpTRXFWMjJQdVd0SXZId09HejJ0bHNoc29NRHlUVUFR0gGvAUFVX3lxTFBpU1ZDTU82U09rWDd5MVk0cl8zTWdrMk5wMm1rTmpFN2Y4ZEhKcGo0OXYwSnVfYTZkalZRaUk5UXJwaTdYMkdNZlM4d0llWHNvNFlOM0N2STZWbl9zblg4Vmd3LURyT0VuMGdJWnVpNTg1RmxTdTI0M1VWLUpfakdIWTZGWTQ4NlFjUlRpb0MyVmxCV2ZraHViQ1pxSHBFaHRmSFhyVm9OZURybmdwV2s?oc=5",
      "publisherUrl": "https://sumateraekspres.bacakoran.co",
      "source": "sumateraekspres",
      "summary": "datapribadidipinjamuntukkredithpmalahditagihrp723juta https sumateraekspres bacakoran co sumateraekspres",
      "id": "270038c213cd5fbc",
      "domain": "sumateraekspres.bacakoran.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-586f287f0e0a281c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
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
      "title": "Hindari Pinjol Ilegal, Ini Daftar 94 Pindar yang Resmi Berizin OJK September 2026 - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQdXJ4aTRiZ1dBWm5hamNsMTJ5UTNsbk1KN0ZOUWpCcTd4RUV5RlVvN0Jic2dHbkhiMG1NSVJ6YjN2N3FXcFZzTWc4cE0yNWlzRGplbTlYU2lYdnhveF9tUDdoRHRSTXZfUzVYcUkybGcxbjNqTWZjRlhfYTViMFhXOW5IcFF4MHRVZ0dmaWpsNUdKWm02TUdseFlBeDd2WDdZSkExNjlKMWY?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "hindari pinjol ilegal ini daftar 94 pindar yang resmi berizin ojk september 2026 infobanknews com",
      "id": "aa51ffa32bbf1c2a",
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
      "title": "Kenapa NIK Lebih Gampang Diberikan ke Pinjol daripada ke Sensus? - investortrust.id",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOWXJSU0N1RGRFWWJFS2IzNzkyaEZoT3hhNHhOVHpnRXRKbHdKYnRyWGY1MFNOcHc3eWpRUENWYjY2cXV3ZzY3NEpjTlY1bWYycXNibS1kbnRRd2tRLWhOeFFTMl9HSVB6OEZlZ2pNWVFvMnNaWVNCamdQNWlKOXdYeDdZQWdSaDJuWU5ycHpGLTN1TF9OaDJON3ljeGd6Q3FoeDBvQTdXcw?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "investortrust.id",
      "summary": "kenapa nik lebih gampang diberikan ke pinjol daripada ke sensus investortrust id",
      "id": "81ea02d44ae10466",
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
      "title": "Kredit Macet Industri Pindar Naik Jadi 4,32% hingga Juli 2026, Bos AFPI Ungkap Biang Keroknya! - Media Asuransi News",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNc1VRM0wxSlpYWDRTbnZoRDFmUWxUaDBFajZlQnFnX0xXRS1VeHAzcFZkNDJJLThyNDBCTVRUSmRaV0tKU05FaTlSOXZfLWgzY3l4R2gyZmxERlA4NVgtemxGd3hQbkJQaGhHWlBFQlF6QUlJajhVSmxTS2E4WjdES0JsSUVNSDh2b1dHQk1UU0NmaFh2UkwyRWtzZjBBY2VucnEtOV9DeHBNcnhTbjVZOGdlY3JqV3ZjMGpKWE9Rc3FteWxrSTBCTndFQkZ3TEE?oc=5",
      "publisherUrl": "https://mediaasuransinews.co.id",
      "source": "Media Asuransi News",
      "summary": "kredit macet industri pindar naik jadi 4 32 hingga juli 2026 bos afpi ungkap biang keroknya media asuransi news",
      "id": "aeb30090a0fb10c8",
      "domain": "mediaasuransinews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3ce07eefc5ebfd71",
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
      "title": "Kredit Mobil dan Motor Makin Susah, Perusahaan Pembiayaan Makin Selektif Beri Utang - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxORXkwZERRVDduWnhXUThSWHJLdmVsdnFDNHJLSFBrQVRrWlBTRTAzUlFTN2JUZ1N1Tk5NUGtxZ3hEbUFpcGtGb19lZjEzeVFGN0xNbEtFbkEtZXhETy1IRUhxV3EwSzB3aGVaMi1md3VSelBrM0tXd29BMW5iYVJKNmc1WEpLTUR5VF96VHVvYUVyU05SQVJONzlnZ3FDd2piYW1kODlsVHh4WnViYUZHUXNOWFBZX3VvRzE5aNIBwgFBVV95cUxPbXV3bnVfOFdCRi1NM2dFcWQzeTA0Z3h3b2psM0d5dFZFbnctMUg4UU1hQmktS3RkcEVTV19RS2Y5dC1aS3ZJU3FmTFhOXzdEUXo1MVJuVmxUcDJ2dmhMVm5uVndjZERRRm9XR1ZxREVvdDlUQVd2OW95SkRNb3NtclBwbzF4T2FiU1pBVzZoaTNVZmk3V2lJQ1dLRHhvN0hTTlR1amdXcVRUWlducl9ZUW5rT2x0X25CUW9tZ0t4RHJzUQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "kredit mobil dan motor makin susah perusahaan pembiayaan makin selektif beri utang wartaekonomi co id",
      "id": "332bf02a2f38bfea",
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
      "title": "Kredivo Catat Penggunaan Paylater Modal Usaha UMKM Naik 15 Kali Lipat - readers.id",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxON2dFUXpFZDZqNHNOXzZHMzNrenI4S2RHb2NfOVRpLUVvaHEydUZuamhDMmxpcVAzUWlVNHcwT3Zza2tUMWg1TEMxRUFXcWg4RF9FMlNGaEN3VklPWFk3aC1pZlRfdE9SaExFb2U3anFncDIyX2hWYTZiQ0NCQmNDcVlRWWRxTWFo?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "readers.id",
      "summary": "kredivo catat penggunaan paylater modal usaha umkm naik 15 kali lipat readers id",
      "id": "f22811357919c016",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5713cb80c5e2d819",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Kredivo Catat Porsi Kredit Produktif Tembus 54,3%, Kontribusi ke PDB Capai Rp 33 Triliun - investortrust.id",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxONklSZ2E5U3MxZ0ZLT3phOHd3MW1SSmFIbWl1V2JCbUZ3T0dDR2w1XzU5ZXhBZXp2ekFWTC0yUDRDWndPTk5SZ1dZWTFfQzRXXy1GajVVZHRhZlJNOTdwbHN6Zm5uOTNrbFhtOGxoQ3FSaklhcENId29QNGVJTFFzaC1maThaSXQ2WFN1MzFKb0wza2JVaElWZHprQUppZ0NTZlNCcHl1SkVXQUhnT2FXM0wzTVJESnlDeW91bzFxRFpiSVFxeWJR?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "investortrust.id",
      "summary": "kredivo catat porsi kredit produktif tembus 54 3 kontribusi ke pdb capai rp 33 triliun investortrust id",
      "id": "461a00eda7296f9c",
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
      "title": "Kredivo Ungkap Penyaluran Kredit Usaha Melonjak 15 Kali Lipat - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQLVBxZUxncE9wMU9IR1FEcHBpQTQxa2t1NzhXVWwwejA5S09jUEFLVHFsUzhNN1RxZ1VNczNLZl9QT3pkN1NwbkNMakhoWXg2aW1XUnl0RnBBSjlNOENIMV9oXzdtbXBTUGh0WjF1UjF1Y2d5OFpuTk5scGRqNTA5aDZGb2JzbFFsY1dHNHZjREtYbFp4dGI3XzVnY3FoRHNF0gGmAUFVX3lxTFBLNE83RU02d1RRYUhfcEloUll3NWpDc0hQZDVuVHlWZ3ZKbWJUSnVVYWdzM0JXTDNZdFpzZ0V5RUh1M3c3LVFYbTYtTUx4VnB6b09DdkZVU2FFUTFqa3FCRm9aV0g5R0ZsbEZocDJteWd3WF90ajdzeHFjNl81VUljTEVlUVZoaGlYS3VBX3FxV2FnZ2dOV0pHbVdLc2QwYk01YlpnTWc?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "kredivo ungkap penyaluran kredit usaha melonjak 15 kali lipat wartaekonomi co id",
      "id": "65db61052ba25b22",
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
      "title": "Kredivo Ungkap Tren Paylater untuk Modal Usaha Makin Meningkat - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQTVhTTFduejVSYkp0dm9kc2RiS0JSRzhucjNVSWhvdmN3MzlZbzZURHJGZ1hkNUJPVWNzclVLSnZ3b1FvMGVtdlZOUzRyMDEwY2RNckxvQm0zTzNsbTVnYWZYb1RxUnhqcElKQkN5LUlhQkZjRWxCeGRzWGlUUUJWVjBVRmhZTldSXzkyRGZieEs?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "kredivo ungkap tren paylater untuk modal usaha makin meningkat infobanknews com",
      "id": "bba3c22e29d106ce",
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
      "title": "Link Apk Pingo Pinjaman iOs Aplikasi Android Online 2026, Ini Pengalaman Galbay Teror dan Restukturisasi - Berita DIY - Berita DIY",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxQckVlc2JVeGdmWURqZG1tcHpDRHZESjlRMXJkSXpvVEhlNWk0WFJXU0lZREJGdHA4TWJvUlZnQkNFaFB4cVBUaDNNX2QxX3pUWmU4d0Y1NENtb2hDT3NEYUc2NFk4OGhwU0ZNSDM0ZnFpc29jOWU2ZFF6dzdlWFQ2WXhnUjl4d20xaENfVG1sRWhUUllHVEhtcjBER0NlV2xtcGd5TVBOUXlZS3BCS3FxUU9NOUkwYXUyTUV0emxjeXNUUVBjc0RjQUxabmdrc2RseGxoUE5YQWZ3WG8zNE5lNGtMVHVSak1XdXpUVTQ1THQzR2VzSjVfOFg3U0IxRWdu0gH6AUFVX3lxTE5NMlBvcGEwM3dSNHBBdmg2aTdrajdiRV9vbnVQcFVrMngwVldGMnE5U0l3cUVHdUZJakVfanpSemRwQ2J5bHF0aGR3dXNwZlJNd0F0RWpadHF6MkhFR3dGOUFWbHBlYU9jMVVucTh2cWFqNlBlaWJjZ25qNEEtSVIxdl9MMGdNMzlwMFFrVkUzT3VLVEFBbUJEVHNya2lSQUZ0MUtmMXY4V0l6OWc3ckUwTVNXZVpJdnloU1BJMGxtYzRwMzJCVTdWMmlvYUFtMFRsV1ZKYmFEeG94NGhFZHhDaWZibGZVeVRLd1ZtRm5QazY4OXd1WkhBWWc?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "Berita DIY",
      "summary": "link apk pingo pinjaman ios aplikasi android online 2026 ini pengalaman galbay teror dan restukturisasi berita diy berita diy",
      "id": "d7c992f883c4bfca",
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
      "title": "Masyarakat Masih Enggan Pakai Asuransi Kredit Pinjol, Harga Premi Dinilai Kemahalan - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPbVFuemw2WDhTWWJ4QzYzZHVyQ3F4TURfSnlvMmlEdXJhcFlKbC1PT3BJdk8xeUVpT0JzZl9iUTJ3M29ONUJSbmVXYVlQdEhqVDREdS1TaUFtdTZRQWkyU3VTdkRUTkMtc1Vya0RYSGZkcjItS0o5NG5yOHlaZVRyaUl1aUlaa3BHUC1ObG1IRFB5Vk5sTWFvR0pSY2k3VnhVaTVGdzZ6eE4zTTAtbFJjWXN5R2stYUF2ZEpLQtIBwgFBVV95cUxQUkhfZ01SRWJKNHBBSWpMaTdxUTNUREhMcHhPc3NBWnA1emRUSDJzdUpmNE5aZWQxQUdBZXRWR1BoQUt4OVVVNm5UbmJzVGxRUWdoRWNlM0RUbEJvdVB3ZDJyZVBhSEx5Um5ySTNCQkZOMXV4M1ZlYkJvR2tkQWZRRVNlTGllU0pFM0QwUjdQLWx2LUFRUzBNOWpab05VeTctV1NobjVhd3VLQTJzQlBDdWlxQXhIcUJWTFJNaGxFM29fQQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "masyarakat masih enggan pakai asuransi kredit pinjol harga premi dinilai kemahalan wartaekonomi co id",
      "id": "673e75355af5bc06",
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
      "title": "Paylater Bank vs Fintech Makin Sengit, Kredivo Ungkap Keunggulannya - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQNHAxd1BJaUN4ZE1FOVFheDhYYWRSU2pGMXlzQnh4alNxRU9Hd3JFdHJDZmdFblNnbzFoMEwwVU1UNHdpUTloMVg0M1YtRjNkVV96RHlVcUtOQ1BLR0p1Mm96VUFmbjJwZEdwNHBpUl9UTVlwOGxpaWlPRnhwdUNmSFZqREtQNUF5Ri1heW40bWZMaExYcFE?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "paylater bank vs fintech makin sengit kredivo ungkap keunggulannya infobanknews com",
      "id": "035b84b1d8268861",
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
      "title": "Peluncuran Laporan Dampak Sosial dan Ekonomi Kredivo, Foto 1 #2042061 - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQZXliNVFTYkZabDJ5VU56RTZJN09zazBVcGVHemxYVE13QTNDdmRpN2pTWDRFRUw2UHFyTHdPSnFJMGpHTHRFUzZJcWVVQ05HUF9CSVJvUmJNU0JZQloxZmpVTjFjdC1WMkJNSzMxTldQNGc3b1BoeHpJUG0yM0REeEtwQ2hOandWeWowUkdlUV9YV3p5WVNzNGx3bWZJWDYzdnhGZDVpZFFveExFMFE?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "peluncuran laporan dampak sosial dan ekonomi kredivo foto 1 2042061 tribunnews com",
      "id": "d8b5969b87dae3e3",
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
      "eventId": "auto-1d51b157b4f5703f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Peluncuran Laporan Dampak Sosial dan Ekonomi Kredivo, Foto 2 #2042062 - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQR2tNak9wcmdaRnBlWWtSYVAxUDJjUXNFTUNEcmxDU0g3RW9LR2hxX0lMWkdYRGRxSVcyb0FfV1JvVTY2ekdIX05BLWo5LXc5eFBDcTVCMFl2SXE2NUozcGlaSUhOeVFtcFgwdGpSVmdsUnpOekFJN1lLOF9MS2czdjdocjV2V09ZZExGM2N2Rl9GOUdwaHZaZjJWQjBQS2Mwd1V6cS1uYVFpeWJJaWc?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "peluncuran laporan dampak sosial dan ekonomi kredivo foto 2 2042062 tribunnews com",
      "id": "73fe53ac349382c5",
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
      "eventId": "auto-6692434b4b928d49",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Peluncuran Laporan Dampak Sosial dan Ekonomi Kredivo, Foto 3 #2042063 - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPS3R4eks5cWhxWVpSV3dkS1RTTmR3YlVkYXZ5RHZiSDNyczV4VXZIUERGdjgzR1JKeFkyLWxWTDB4eGZtVzlOVlBRZFI5TVZESmhhZHNobVVKUWNnemNCSFVBSDdjZm1WbURsRldGcjktTHY5OWt4NTNpMzhzWWlscW1MYkxUNkNYZGFiT1loSmNmWjZQOWJUOVdOUlgyLUR1N1k5R1VUbFZYbi0zOFE?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "peluncuran laporan dampak sosial dan ekonomi kredivo foto 3 2042063 tribunnews com",
      "id": "f1d749f199e47205",
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
      "eventId": "auto-3168486f926c4466",
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
      "title": "Pembiayaan Pinjol Tembus Rp105,63 Triliun, AFPI Peringatkan Risiko Gagal Bayar Makin Besar - wartaekonomi.co.id",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOWFBNOGozWS0tcHpha0J6Y2xXR1BDVUJwUUtFdTBpamhCcDNDRHItaVdhY3ZTOHZhVHF1R3p6Z0s5OEF6QzdsTTZjN1pPcGxnd0hfdTllVTRsRTZZelhyTTVVYml5M2VYQnZ4WUZqZzB4UXFleHZyZWtjOFhnbHRkZFB1X05aUm1WeTE0WW9iUHBhMXZVbmo4Q0R1RlVndHVJSTh4cDFLMWp4aHcwbVAtSVJuQWhKLWdocGVtSmNlcG44RDJ50gHKAUFVX3lxTE1Ca2piSU03SmgtTFJvVEo3N0h3c3BGaTN1RUQ3QS11RFJ0UFpvd1B4cEdUTDV5eU9OMlM5QzJjSUo0RHgxRVcxNnBoM19RZl9BZGVrSWQtX3NOLWIxY1RkLWRrSFpFWllEcmZ2aW9JbTQtZGtqVEhrMU85ZnR6Vi1DNURQYW9GemZBUjJJTFRSWHpQZnFMdDBBZGFIVTRrcV9rVl9rNVpWQ0ZuMWpvSmo2cldrNW03UmJWS1J5TUJpZnNhNm14eVVwLWc?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "wartaekonomi.co.id",
      "summary": "pembiayaan pinjol tembus rp105 63 triliun afpi peringatkan risiko gagal bayar makin besar wartaekonomi co id",
      "id": "e7ce08ff272f71ef",
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
      "title": "Peminjam Modal Usaha Kredivo Adalah Pelaku Mikro - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1vbkdYRHpyLXF2QmhOYnRBc0RZMWVXdEhvT3BWQmN1QVlKS2trR1FOY3lpNU1GSEc0dk81VXAwZ1o2VVJEeWoxOWI4U3NTNVRDSVY4VGRfcUswa0trSmtWOTlvZGktZm1xQjVIZC1pc2lrWElJMThRLXJhQ1NNZw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "peminjam modal usaha kredivo adalah pelaku mikro infobanknews com",
      "id": "c48d8b990129bf48",
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
      "eventId": "auto-7c4fcf580fe191dc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Pengamat Ekonomi UGM Bagikan Strategi Efektif Bebas dari Jerat Pinjol - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQX3NfVVFzUjM5blBPaHpzemFPV25CUFM1Sy1Ca0U4RU9yM084ZWJ6azBUbS12ZTZTaGxZZXpBbmVrUDVrYXAzd0lUVjRnQjZBaHlBa09nY0FYWlBZUFFhOEd1WF9YNlVGTFMtdm1pWENmQVpleWZxXzdQbWQ1bGI1UzN1Tk4wTWdlTXJ3MWpsNjZNUWhIWEtleUwyMFNrU3lmOHZtRFJ3YWlPUlZya2YxTHRfalc4UzB2XzV6TVNIcGE?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "pengamat ekonomi ugm bagikan strategi efektif bebas dari jerat pinjol rri co id",
      "id": "c4f36e119c858f21",
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
      "eventId": "auto-5b577f446753f243",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Pinjaman Digital, Pintu Masuk Akses Keuangan dan Risiko Konsumtif - Kompas.id",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNVmJEOUs0aWRoMXd5alY1ZEgyOFMza0FBYXh5R3pQa0YwdTdlSzVIMW1YTkNjV0E4cEpqZ2o5STFkblVLcUk1d09QaTlSS01SS1o2V3lPRXpsY2lqbmw2YnFMeDljalFWMF9OMzA0czJabWtsNURsZkFmb3JXMVEybHlQbEdUVjdz?oc=5",
      "publisherUrl": "https://www.kompas.id",
      "source": "Kompas.id",
      "summary": "pinjaman digital pintu masuk akses keuangan dan risiko konsumtif kompas id",
      "id": "608bc2a9dfd8a64e",
      "domain": "kompas.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-185280c401c3491d",
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
      "title": "Riset UI: Mayoritas Kredit Digital Bukan Buat Konsumtif - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQSlQ4YnNCajFKV0t1R3g1eTBFU29McDBBY0JkM1A4dTN4WkRFd2RKVnBmbzV5S0hINUJTeVl1VXhHaXR1V3hJV2FEZFcxWjEyVTlXaXlnRzVydkg1eVEwMUFpXzVTZHowTmJFbllZa0V3cHg2M1lzbXZqMUdXN1hzS2VCaU9wSno4OVVqbjFmNkg5QnB4aTZsN1hGU3VKZWRBeHk4Y0dCWFdIUmxadUtWUkhPMlXSAboBQVVfeXFMT2h3clpEa3laY3k1T3VBajF3SVc1V0NEUHVCaC1WZ2hYLTA1b3N1bUFCRzVOYzFaQUx6dTYtZGpDaXVHRXV3UGxEc0VLS1EyT0VSQWdJbGd2SXgzZk5aTXU3NTRwYUo5N2FYbkJ5Wm83QVUtY1JZc2JTUWUwc0pJWk5PWUYyUTNLZW8xNkxiY1g2MFZxdkNfaXRCM1h0a2JEdk10U19ueTdadmtiWG54RlpOMG52RGJyRWNn?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "riset ui mayoritas kredit digital bukan buat konsumtif cnbcindonesia com",
      "id": "b64a1ddaf653f4d2",
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
      "eventId": "auto-2de7000836181e01",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Studi Kredivo dan UI: Kredit Digital Bukan Lagi Sekadar PayLater, Jadi Pintu Masuk Kredit Formal bagi Generasi Muda dan UMKM - Akurat.co",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOSzF5Q3BhZTV1RUhxTWljRklUMFYxU1hMVW90QUZWS1FiQ2tTSG13RXAxR2JCX1ZRYmxHeTRSMy1DTXAyVU5qdC1Va3ZsX0VjTi1xdXdkQkJqM29Ua2tlWjk3X1k5UFllRWowNjVuTG1Nd2pDTW5JOFJiamFsYjRydnZWZHh0ZWlVZ1lKQTlSdUlmOWMzenk5dW04YjM3cno0QWxaODljQmhnUVdXQ1pDQWtZR01VT1BOeXluX0I3M2p0ZVVlT01sakFBSTRjcEFubG56bEF3eDVQUEtUaEtyNXFtTDRZbDdUQXRoVFZxRWdGdw?oc=5",
      "publisherUrl": "https://www.akurat.co",
      "source": "Akurat.co",
      "summary": "studi kredivo dan ui kredit digital bukan lagi sekadar paylater jadi pintu masuk kredit formal bagi generasi muda dan umkm akurat co",
      "id": "282f5a7d053c77b3",
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
      "eventId": "auto-bdd809a4698589cd",
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
      "title": "Survei: Akses Kredit Pertama Lewat Kredivo Naik 10 Kali Lipat di 2025 - Media Asuransi News",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPaGJvVnA3LWRTWnpaVWJVVEQ3NmhZZzhlVjNnVWNmMFREcGxRaEhlSjBtZmdyTGEtcDRvWVo3RjZwVGRIcGRFcnY2OGgtVExOSHhCWEpqUGJGdWhoOG5fVTZYaHM1cjN3SjR6ZUR6ZDQtT3FsQTl1OHNib3J3NzRQNUNyN29WSVVfdDZ6a1dGYTFMZnNyZWFETGdIaVdlV1BuZWt4d2JucUV5RkUtLXNaY1VR?oc=5",
      "publisherUrl": "https://mediaasuransinews.co.id",
      "source": "Media Asuransi News",
      "summary": "survei akses kredit pertama lewat kredivo naik 10 kali lipat di 2025 media asuransi news",
      "id": "802d06c31a7f5cc1",
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
      "eventId": "auto-433a78e3d5eb6d0a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Tak Hanya Gaya Hidup, PayLater Banyak Dipakai Buat Kebutuhan Mendesak - Head Topics",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQcmxNanRCYUozLVNfa0VLVzNpTXh1di1MSWlTaDd3U25SNGtGU2k2cU05VUR3Z2Q1U2V3Nk5rRmRRTU9fLXpaVmkzSzBPUEZyWHVmZ3ZMS1N2VTllVEZienlLT0t5TVlEWDJZWkpCcEh6WHd2OHZaUVhfeEhrZTljVW9sNkpHWGJBbXFfN2JMYld2ODg?oc=5",
      "publisherUrl": "https://id.headtopics.com",
      "source": "Head Topics",
      "summary": "tak hanya gaya hidup paylater banyak dipakai buat kebutuhan mendesak head topics",
      "id": "fcb7069a2432f1c3",
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
      "eventId": "auto-0b6c4c4e2731373e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-10",
      "title": "Tak Hanya Gaya Hidup, PayLater Banyak Dipakai Buat Kebutuhan Mendesak - suara.com",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQWjFrZGYwT1dhTXYxWnMxNnlHRGV2cHN2M1RtRXlkdnZoUVZEYlVhRVJIZTBlTE5DaGw0RGJpTXV4SG4zaXNFMGNQV2NvWThfRDZ2UWVqeHFHdGNHaEdvTVFibmhkQTdSeUNIWkI0dlduRjdLaWtlU2c2MktQWHVQeEw3SnNKVFRhMUtRRU9aZjJpS0VjYjh3eHJxUkJ2MFMweTdIZmNROVFLUnAtYk5DbkRHVV9LQdIBtgFBVV95cUxNNm0wTGl1Y1ZRU0oybmU5MzNZS3hwYkhBSWlTV2xSMWo3YnhFNjFiRU9lLVpBS3RUZkNHLUhnRVNQOTBsOFdmVzBoaG1kdjN1RUptd3RDWWpuMDQ4MURBYk9FNjNkbF84WHZzSnpjSmFFcmo5ODlWZXlPZy1faWdaOWNRUGtCTkU5bGRWb0pmalZmNHdJVE5kZ01lbXo2UkJwZmFkcWl4ZHdTckR4elBOU1Y1Wnl4dw?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "suara.com",
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
      "title": "Aksi Kredivo Perkuat Akses Kredit Hingga Dampak Sosial-Ekonomi - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQakRyd1dmb2g2WFY4dllOTnNpd3ZMMnFndDBkOHpNd2N3M1FCdks1Y2lvblcwV2twRlE1c21wVVdRbmJxTEExRk96WWpJaEwtZlRIMUowLWdLeFNpVjVXQ1podmpsOEJya1BrcEFWcEVBamlRTWhoSFZ5cEVaenJiWXBRd0FzeUR3UHJ4ckx5YWdhOF9uWkZJczZLeXZKVzNKVjlMakV1N1JwQjVPTmwtbFNjaG1sWks2dTMzeFJFMNIBxAFBVV95cUxOYXRtX05LYnJoNjI3X28xbEVPLUVxck1pQW5vN0t1RkxDRXFvaGpvMXEtT01jdUFCT0h5NElUdWQxanFxSGV1U3N2OHFwMjBjTWpIRGZ6YW9yeEJNR3NpcnVQTzF1bHVVMks3OEV3dE5FcmlnX01lWDY3UTdDelhMOFA1ZHc2b2FJZzBhMGczek10dXhWRXZVcVdLVzJ6ZW1LbHEtZ0QzZ3Z5eWthSUFBRTQ3RFBNMzVkZUFiaFJ2ZURrWS1L?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "aksi kredivo perkuat akses kredit hingga dampak sosial ekonomi cnbcindonesia com",
      "id": "9f132ed18347fc37",
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
      "title": "Data Pinjol Jadi Kendala Pelaku Usaha Dapat KUR - Lensa Medan",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOYlFVeG9mWFR4eE1hV2pDYWZKU3E5bkFBa1Fncnp5d3M1NW5JWUd3U25aR0VrYTNUTW1LUEJjZ1R6OGtBOTB6ajhqUmFkM01qMVdFOGs1OTRpR2dDOThoQXJxckNpN3QtSEJ4TzlXdFUteld6SEVyX2llb3lZZU8tREMyVjYwZw?oc=5",
      "publisherUrl": "https://www.lensamedan.co.id",
      "source": "Lensa Medan",
      "summary": "data pinjol jadi kendala pelaku usaha dapat kur lensa medan",
      "id": "b50df5ffb50c4010",
      "domain": "lensamedan.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-984841a2a3c9d353",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Download Flow Uang Aplikasi Pinjol Apk Web 2026, Legal atau Ilegal OJK? Ini Pengalaman Galbay dan Teror - Berita DIY - Berita DIY",
      "url": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxPSDl3enVmVkIxWFlncnZtdGJuV2NBc3RjZkNkVFdWTzhMZGxvTmNyN0toeFpGTkRkenMtWFQwNFI0VE9PWk5jbkxLSmkyaWtvQjFRQmtpOXI4MEZCcG0xYW9GX2RPS0NwWXVQOUFSNDg4TjA4ZEtreVNYaWs3RG5PcF8ydjJOMElGTVZvN0RhMTBuUGtuMEpJSnZrRklibU52YzJ4cmFVckF2LU1DclNCSkZBN2gteDhmYmp5RkdtOFFBR3lXOTdDVHN4b0VXNUJpNGxaN0VIazFGVnI5MXdyX0thM2FKdlV4R3dmR2ZWM0xWdmo5aEs4bXNodXY3QdIB9wFBVV95cUxNVm5tNktRQkZSQlRhS2VyRTk2TU1vbWpUTjQ3SkFnR2V1bzRRS2c2WDhHYjhXclQ3NzQxXzRqZTRNOHB2Y1l4MXRzaTNrb0FmVktHcU9kZEhWU2ItSmM2aU9wTmJ2c1FuekowcDdtMDU2XzZMMjVKR05ZSEhsY05pbUFFbThOTThtbVQta0c4TnlFRmhHZXMtYUtEaW9DZ0lTVVFKNVJ5d1UtX1R1OFEwaF96eFZMM3g3cVlmZm95SWloRFBMdkJHXzkwSWFCUndvWVVGUC1ua09OdzhIZEhGVC1DLURhTE9YMUpOYTlwSGdBMGVIMm9V?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "Berita DIY",
      "summary": "download flow uang aplikasi pinjol apk web 2026 legal atau ilegal ojk ini pengalaman galbay dan teror berita diy berita diy",
      "id": "ffab628fa732bf5f",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 87.1,
        "label": "negative",
        "negativeWeight": 6.6,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c72964f59d1a092",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
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
      "title": "Kredit Digital Makin Produktif, Kredivo Klaim 54% Penyaluran untuk Kegiatan Produktif - Industry.co.id",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOTkZRRkVNdFREdk9Nc2ZlZmN0QzNPbWdzUUlKak9xUlF3QjhYSEF6MFJheWEyc0dvOUdmWjNWMWp4WWI0TWt3d29YSDZaakNqT1VqRUp5RUg2NUpzeHRqVVVwRWlpYzRmeVo2dXZ3YThGWVlIUFd6SjlaZW9pZGNuSEJyMjU3TDZfZFhRYXhRcGFIYUpXRkhhQU5DX1RpX2doT2Z1LTB2bThUdGhUNnU5Sk52RkJJcXoyZ1l4OVVrWQ?oc=5",
      "publisherUrl": "https://www.industry.co.id",
      "source": "Industry.co.id",
      "summary": "kredit digital makin produktif kredivo klaim 54 penyaluran untuk kegiatan produktif industry co id",
      "id": "9b1cf0bf720c5a3c",
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
      "eventId": "auto-2f526fd33dd1f3db",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Kredit Makin Selektif, APPI Sebut Approval Rate Anjlok Jadi 50% - Validnews.id",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxObHpla1dnc0RkV1Fla1ZNTlM1bzZEV3c3ODFzZWlnZHVoWHBacFJ4Y1FmZFRQYnFLdXdYTHZXQk1NaXNhSUtUUzFMeUpvZEpNLWc1bDB2NWJGdG9xcjdqTmt0dTNJbm5HbHlhTHBVZFBLZ2ZheGFMRzVwaVVvcURkWTdKSnlwdDVkZEw5RzQ1T21BVWp5anpINFYwOUpRLVk3TGZNdGVxc3ZPZkFna1R3?oc=5",
      "publisherUrl": "https://validnews.id",
      "source": "Validnews.id",
      "summary": "kredit makin selektif appi sebut approval rate anjlok jadi 50 validnews id",
      "id": "5ee1cc7de40e576a",
      "domain": "validnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9b477b869248c3f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Kredit Produktif Kredivo Meningkat, Pengguna Kredit Modal Usaha Naik 15 Kali Lipat - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNZUxyMnI4TTl0ODBHcDh6V3FmZlB4NDAwRFhXdUdZSFhUdVVKY1VSOGphUTNLYWFSRnpzMXZrcDh1cF82bUFlVWdTRVJiWjNsbGY1QVp4cTFJTnJ1eXl3NmtQNXhuRlVMT2I1dWVkVXpqMEpOSjZDLWVaOU9JLVJkSGNhcEYtRFl6QXRWU1pUWllVQ2xnRmlzOVJ2ZDUwZVV3ODR4c0FWYTJ1SU5CN3g1MFRIUFFGSTA?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "kredit produktif kredivo meningkat pengguna kredit modal usaha naik 15 kali lipat kontan co id",
      "id": "464a575bfb93663e",
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
      "eventId": "auto-8a6be5394529d6a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "Kredivo Tingkatkan Kredit Produktif dan Perluas Akses UMKM di Indonesia - readers.id",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFA1ekZtUG80Qmc2U2RGTTJzN0RuM3NCWDEweVpMaDEwaEM2cjhfZkpmUzFlTTFhNms3RGhiVEc2WlF5UUtrT2FrbnNWWVV3MENtY25KTUxuckpaTWtObEtFY24yaTJBa0ZVd0E?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "readers.id",
      "summary": "kredivo tingkatkan kredit produktif dan perluas akses umkm di indonesia readers id",
      "id": "47edd75b72d766f4",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-283a6a82490c7d48",
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
      "title": "Paylater Bukan Hanya Dipakai Saat Ekonomi Tumbuh, Bisa Jadi Penyangga Saat Krisis - Akurat.co",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNWnNEMGJHa1NZYk1MWnFCZGxWamN1SXlza0JaWGt6TUQwYXB5bmFyZ0JIWmd6UlFzWlhtVGFGM1JCUEkzVmlQU0hQSFZUak5ic3RGX09pb2lIS0xGbFpGMF83LVM0NndSbUtrYVl0cWhuSGotT0pPUjNMcG91UlVFRld5d01HZzlHM2ZFbzBEWmRXZlM1Nm5BUWxDdTFwa2tWUVRDZUFMRy02SmN4SUdSZlpGS3p1TlIwcVE?oc=5",
      "publisherUrl": "https://www.akurat.co",
      "source": "Akurat.co",
      "summary": "paylater bukan hanya dipakai saat ekonomi tumbuh bisa jadi penyangga saat krisis akurat co",
      "id": "c49d0063f5881677",
      "domain": "akurat.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-12d803847c8daa2f",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-11",
      "title": "Sales HP Kuras Limit Kredivo Rp40 Juta Berakhir Jadi Pesakitan, Begini Modusnya - memorandum.disway.id - memorandum.disway.id",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOUkt2dTktYzJRSVBWUVJDanltUFZMaDZDaG5NV1o4ZndFcWNfbFk4TEJucTZSb2RsTTc5Ymc3RUFPNlBVM3NHRDE1MThVdUQzdGxDNHNmM3hZMHFtYVJmVXdBVUphQy02WndFbWNxSlZnaVg3QzFnQU9vZDRuckdxQmRLSDhMTDkxaUswOGlILW41cVVXWURkOHFPTUhaUS0zRnlEQ1VaN1VVdXhkaG5GQTJCVWxkZl94T3fSAboBQVVfeXFMTlJLdnU5LWMyUUlQVlFSQ2p5bVBWTGg2Q2huTVdaOGZ3RXFjX2xZOExCbnE2Um9kbE03OWJnN0VBTzZQVTNzR0QxNTE4VXVEM3RsQzRzZjN4WTBxbWFSZlV3QVVKYUMtNlp3RW1jcUpWZ2lYN0MxZ0FPb2Q0bnJHcUJkS0g4TEw5MWlLMDhpSC1uNXFVV1lEZDhxT01IWlEtM0Z5RENVWjdVVXV4ZGhuRkEyQlVsZGZfeE93?oc=5",
      "publisherUrl": "https://memorandum.disway.id",
      "source": "memorandum.disway.id",
      "summary": "sales hp kuras limit kredivo rp40 juta berakhir jadi pesakitan begini modusnya memorandum disway id memorandum disway id",
      "id": "3ef1bc869379a313",
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
      "title": "Satu Dekade Kredivo: Wujudkan Inklusi Keuangan dan Berdayakan UMKM Nasional - Mobitekno",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPMzN0SjdvSkxhNVB3VVh0NW1uVDlQRzNTMlVrcDVRb0pTcS01eTlmMzFESTdzcWhIUjF5a19NMHRZNU8xU1hkc0FPR1M0Rl9yNHJWSlE1UXBIdmxLR0J0YTdkV05oeXdFR0Vlak5rNmdRUHM2YlJ3TWRjSC1uTnZlZw?oc=5",
      "publisherUrl": "https://mobitekno.com",
      "source": "Mobitekno",
      "summary": "satu dekade kredivo wujudkan inklusi keuangan dan berdayakan umkm nasional mobitekno",
      "id": "2bf7e7c6324fba7f",
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
      "eventId": "auto-7459d8dc50f374cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-11",
      "title": "TWP 90 Pindar Naik Jadi 4,32 Persen, AFPI Ungkap Biang Keroknya - infobanknews.com",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQYXlrWUhoRjd6MFZLRlhTUkNpSGlLUE9mcDhzd3UwWklqY09meTlZVWMwMDVLajM4ZXh2bjhIMW03b25XX3BRTEwwbDJseWQwajRwMGE1ZjlnbDdjU1A1T0FPdjZlRUEzOFptUGhxQ29VUGZCYU9Yc2VpTXV5dUYwcnpaRHEzUFJwMGVYLXJ0Yw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "infobanknews.com",
      "summary": "twp 90 pindar naik jadi 4 32 persen afpi ungkap biang keroknya infobanknews com",
      "id": "c47cb512336547ed",
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
      "title": "Apk Pinjam Sinar iOs Android Sfile Download Login Aplikasi Pinjol 2026, Apakah OJK? Ini Pengalaman Tidak Bayar - Berita DIY - Berita DIY",
      "url": "https://news.google.com/rss/articles/CBMihwJBVV95cUxNOENjQU9HU3BXWmtZbWNSWkswTTc0SUNhTXM3ZTE5LUpSeFhjN0NSeWRmM2o4Xy1BNThpT19qZlVjTFZhUFE2X0ZNVDdiY05sNERBX2VCUHYzNHNpWXBmNzVHSGc2ZkRZcTBlc0hOYUh5a1I2QkVaWTZfcjVhVVNLMmtOOG5BRUdCdDhEbks0cmtqbS1pY0xtMmRfZWxZamhLVDBKTElMOF8yVGZCUC1yMHcxeWFFUGdsUndoMHc4ZnV2TGJQZ3pXaDd2TEU0REVHd0lNSVdSOHRJZTRtQnNob3ZlX1VUVm9oaF9SMmhvTTZWeVg5Ty01ZXgzTk40RHhFb3IwYUVfRdIBgAJBVV95cUxNbll0MU5YZms0NDEwaUVhWjNySWtUeXZucEduUXZkdWZRWU4yQ3c0dHNYNDdreGFpMFJLemtIazZXelh4ZnhRRFNWUmlKSmdQTlhXWEE0RzJ3MzZ0NEFETHl6RTBRWkR2V2Y4YWFaaGdKeUQxbURJUHJDYkl1VjlOT3duclZ0czkwbmZVOFU3VjNkY0J2Q3RqR0p3bWx2Rkk2MVBVX0p3bFJFUEdZVERhLUs5UjBUR3ljUC03NGlMejA2dDVfWVU0cUpobjJvdW9BeHlRX2NaakdEd2JWcTEzbkZqbFRTVFdDNHJGbXJXUXZjWFlTNnJVam10WThRSmdR?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "Berita DIY",
      "summary": "apk pinjam sinar ios android sfile download login aplikasi pinjol 2026 apakah ojk ini pengalaman tidak bayar berita diy berita diy",
      "id": "60041cda92d7cfa6",
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
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQYTRnaDFpSURtTllPaXRLWEo1Ujd2MmpWRUE4bnRqN3ZEOUstWWRJNEZHd19tdHpoc2dpanhQblJKR2F4U0NMV2pTVjMyQVJUOTI3QjhDRmdCYkNqWERFQTJ1dXhaZHdFOTVqVl91RldiajJvaGw1dmcweVcxYmF5OGxvbzR6LV9oZWFnU21rTnpaMm42WFloV1l1LXBRQ3lyS1NUOXBPdXN2SFp4Z2xmOWlSN0dGd0nSAbcBQVVfeXFMUGE0Z2gxaUlEbU5ZT2l0S1hKNVI3djJqVkVBOG50ajd2RDlLLVlkSTRGR3dfbXR6aHNnaWp4UG5SSkdheFNDTFdqU1YzMkFSVDkyN0I4Q0ZnQmJDalhERUEydXV4WmR3RTk1alZfdUZXYmoyb2hsNXZnMHlXMWJheThsb280ei1faGVhZ1Nta056WjJuNlhZaFdZdS1wUUN5cktTVDlwT3VzdkhaeGdsZjlpUjdHRndJ?oc=5",
      "publisherUrl": "https://www.inews.id",
      "source": "iNews.ID",
      "summary": "dongkrak pdb rp33 triliun kredivo buktikan peran pembiayaan gerakkan ekonomi inews id",
      "id": "a580798dcda3846e",
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
      "title": "Kembali Digelar, Ini Semangat yang Dibawa Indonesia Women Fest pada 2027 - Grid.ID",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOMGU4NzZRMTRCVzJuVHFvQm9tRm5EaFJyQldCYlEwWGtFeWRjdS1FZ2U1anl1QXVaeWIyd0JjT29ud3oxaHZGZ1pjUG1CLXc1aDdYYjlLUFZTWGJva2FxR0tMOEpCQjNjempOdlRuMHNJTEhtN0ZncjZ0N2dfdi13WlEtQmNHUFVhYThRNlRKeF96ZzFIa0ZVTGVNTzF4MzA0ZC1MQTUzMjAtUjdwMEJmc3hMelDSAbMBQVVfeXFMTm9xRGFQclF6SkxJd0p3ZTRMb3RGU3JCd2FDdVNOWUtkdFc5aUJSRU5xUXBBWDg1Ym5paUUyR0RqdHVxRm5ZQUd4T2ZOcGtGWG5YSWJuRzVBc1VsMWk4WlV6QURQbjZqcHVWUE1hSVBJSFZRU2diOEtFZF9yOC1NN3F5c0daQTNaS1B5RlRFdUVpNC01TTNCSjJ3R3BDWUhxVHhockgtYTJLT3NHVkhoYkFBX2M?oc=5",
      "publisherUrl": "https://nova.grid.id",
      "source": "Grid.ID",
      "summary": "kembali digelar ini semangat yang dibawa indonesia women fest pada 2027 grid id",
      "id": "37928b0e20975889",
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
      "eventId": "auto-8e479f6297a98e1c",
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
      "title": "OJK Cirebon Edukasi 700 PPPK Kota Cirebon Cegah Pinjol Ilegal dan Judi Online - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQc1l5bTZESnBZVmUxWWtiUjdKdURRdG80V3ZRNVlwb3BwVHNuTnJmSVdJSEl3dlFhQkRQNXdVbU91aTZIZ1BTX3FDS25JX09fTWRaMXJRRHY0Z01ERzhBOWp3YmZoTExFTWdVWkdCcmQ2X1ZOZEstN0NzeTJ6UDN2SVctcmc5R1lVVTRNZFlpUmpvVk53UW1HYlBTS1owWTNuLWZmRHFOVW9BQUYtRHp2Y253MC1jVEZCcWpSbFo3cXprVGt5bnRr?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk cirebon edukasi 700 pppk kota cirebon cegah pinjol ilegal dan judi online rri co id",
      "id": "5d0786a4e91987cf",
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
      "eventId": "auto-740a217ce8bb1b64",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-12",
      "title": "OJK Cirebon Edukasi 700 PPPK Kota Cirebon, Waspada Pinjol Ilegal dan Judol - Dialog Indonesia Media",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQNWZJck9GTFZDeEl6NW9FeTF0MEVJekIycUNpMUI4MGdEVFJrOUtxcEotOWJkZ18tZmxzN0xBNlQ5MVNVcE9PSGcxek9OX01qWHdLWDVxWUJYSmNCRkxLLVlOQjdDdnMwdUY4bzVnYklUVkR5U3pvd0tzbUpGQ09OQU9iSHZxS1BwcVpjWGZvUXNEUkNxUXBLTWtQdWg2eDZ1eU54WA?oc=5",
      "publisherUrl": "https://dialogindonesia.com",
      "source": "Dialog Indonesia Media",
      "summary": "ojk cirebon edukasi 700 pppk kota cirebon waspada pinjol ilegal dan judol dialog indonesia media",
      "id": "48d4adbcc809a5fc",
      "domain": "dialogindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f8e0086116c5d372",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-09-12",
      "title": "OJK Cirebon Ingatkan 700 PPPK Waspada Pinjol Ilegal, Judi Online dan Investasi Bodong - About Cirebon",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNTlVDbUdBa1RBTjJobkUteUFMT3hDeUlGN2VjZzhZVlVwS29wb3FGeDNSUXFSNVFwZG14eHd2dTk4amVQVFVFekJKT011bXBjbDkybWE3Z3JjdTZHWXNWUTkycUhmTk9WM1VTTmE4ZVdSLXg2UzZNbzRsVmFfYWpUa3BQRTFHalgwYlAwWGFXNlR5cUxZWGhDeU5vVWsyWnZ6Uk5ZY003NUNVSFNucWc?oc=5",
      "publisherUrl": "https://aboutcirebon.id",
      "source": "About Cirebon",
      "summary": "ojk cirebon ingatkan 700 pppk waspada pinjol ilegal judi online dan investasi bodong about cirebon",
      "id": "fc671e02d0489264",
      "domain": "aboutcirebon.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9ce8dad658dc391f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
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
      "title": "Sering Terganggu Ditawari Pinjol? Ini 3 Cara Blokir Nomor Spam - cnbcindonesia.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNWXc2QjJrNEY0OGhibkpfQ3BuekhKM1Jkc0REajc2NXluUndnTzN4VnIxcXZrT3dSM0dlVmNjTm9nV045QTU4cXptbXBhUU1NMFo1ZGdmMk1PMjN5WVl4QmJnc203dzF5NTlqRDhhaFVTMVlXaG9xcXJpdmRFTG9kWjktZ0drSzN4cElkbmdBNUdKaEwyOFZUUU5VRWJwODg1VHNiYmpnZmtwSERvNlFGai1KUzdxOGhEcTdybjVR0gHDAUFVX3lxTE9WMW8tR1dVdUdta05Ta1NjaXR6WkxGUGs4amJYdVJXOGhmU05tc1FUTV8yRVhPSUVoTjJVQ2pDTndXNUctZUh6QV8xYkFpNVpkMUE5N2hLUkYzNjdpQ1Yta1ZEOVJpMG1sclp2dWp4d1pINjgxQmh3UlU4WWVKTmZndW9NNldaaGpzMHpnWlVzdlZOTVJMNlo2MVBuMkRtNFNqNmVjaVh4cDNKbjRkR1lVU0ZkbklnSUF0WlhnNkZ1NHlfSQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "cnbcindonesia.com",
      "summary": "sering terganggu ditawari pinjol ini 3 cara blokir nomor spam cnbcindonesia com",
      "id": "f6303ec82d09b161",
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
      "title": "4 Fakta Utang Pinjol Warga Indonesia Rp105,6 Triliun - economy.okezone.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQdkJzYUlMZkl0enlWSFphYzNkWGhPcENFelMyRlJxSXVmeWE4QnBJOHRfXzd3VllCbTZZVkJfNE9FeTNvOUVRX09hTXJDMzFZQjdTWW9vT1Jla1BxOEhka2M4LXpQWkRlaVp0cXg1UHFvaDB3eWNlaC1sbnhJLS1vdDF2eHFOZndVY3lYc1A4NzRIMTd1OGp3TnVYLTI1REhXTWVvb2xBNDV5YXo10gGrAUFVX3lxTFBTNUpodndZMGFTZXRWemh6WWx5bXNORHpEMGR1b3dsMHBYbTk3QmxTRS03bFNWWUd5UGR4YkNXSE9qd3pISlVscmkzcW5WWnVrRmUxQ0kycHNlRE9nUnFzTnpXY3VQTmxmMHZuekN3ZGRab3dOdERmNWRTMkhyNExCRTJSZWxLclh1QVUwM2VCUDRubE9mc0VXZUhNdW1aN25aY3VhUEFVeWZYVQ?oc=5",
      "publisherUrl": "https://economy.okezone.com",
      "source": "economy.okezone.com",
      "summary": "4 fakta utang pinjol warga indonesia rp105 6 triliun economy okezone com",
      "id": "9f0e0fd8a7fd442e",
      "domain": "economy.okezone.com",
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
      "title": "951 Pinjol Ilegal Dihentikan OJK hingga Agustus 2026, Begini Cara Cek Pinjol Resmi - kayonews.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQd0w1bmoyUU5lSFlnUDBwX3BfS0pOekNaSmRPSTRNQ0gwN0J5T09qWWM2eWpVd0ZpQ2RDR1RrVkJWeVdBZG1oeUlFN1NJQm5qMDhWQ2VhSmVQNUo5OTBmOVYxZGpfbm9HVWc5bi1CczYxUDBzR2pxT004YjdWVHMxckFMX2VPeHJHQUpzeDdkQlh6NVNnMTRtOV9tVHpkUWkxd3RJSlQ4bWY?oc=5",
      "publisherUrl": "https://kayonews.co.id",
      "source": "kayonews.co.id",
      "summary": "951 pinjol ilegal dihentikan ojk hingga agustus 2026 begini cara cek pinjol resmi kayonews co id",
      "id": "0d74ed818c36050f",
      "domain": "kayonews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2ebee63a67ed07ff",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-09-13",
      "title": "Aksi Rampas Paksa Mobil di Gerbang Tol Pekanbaru-Dumai Digagalkan Polisi - Insiden 24 - Insiden 24",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPRWl1U3Jnd0g5NzU4aVprLTNyalU0cC1BSzZVZFhIM3hMV1BvNlZoX3UzVzEyZzBRRy0yT2lRaGVPUXFsUTdRNDM2dndjd1QtVFdid096TXBXbzlfN1hZeG45cEhlQlZUenY4X0N1cmI0LWpwTGRDMmtCNjhOS3RjakZic2Z2TEdCclV1QncwUC14RGJYZGJLWWIxVWFkcnFMNWhZVlZNTWFaYUd6Zi13dlN1SFowTTQ0VWfSAb8BQVVfeXFMUFoyT0otcTlaNENIa1ZzYXVhQ2RQOEZhY0lrVklTU0Z1UmZhUmFmVjk3dmkxRHJ6NWNzR2E5czJ5U1k4ODI3bUdGM0VSUEZudTU1OVBfNU8yeWs5RWxUVEJUdUdiQmEyZ19wQ21Dc1oxc0w0dm9ycWlpU0tJN3dkTWotOWVBTVozR1hyVFRtako0X0daNUdvOGMyRlRUdmRrSXVDXzVOMnFHWXRkQTNrVEJPVGxkS3FhLUlkNnRTdWM?oc=5",
      "publisherUrl": "https://www.insiden24.com",
      "source": "Insiden 24",
      "summary": "aksi rampas paksa mobil di gerbang tol pekanbaru dumai digagalkan polisi insiden 24 insiden 24",
      "id": "0f710a78c60229e8",
      "domain": "insiden24.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19744a0f0422ee4d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-09-13",
      "title": "Jangan Asal Klik! Waspadai Jebakan Modus Baru Pinjol Ilegal 2026 yang Bisa Kuras Rekening - radartegal.disway.id - radartegal.disway.id",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPUk42Y3BrZ09jX2FvdFRiOWFpaU5hNG9LdjlXeUtrTy1JdTN1dXpPb0tHNVhWMUtjUnc4Rzh6RV91Q2U0MGZtOVlFMHIxTE5MYzZ3U0pRQ0NBdVhDZk5pVlhxU1NSeG5PS2tCOF9USzZ5bEplWG1WNW9DUUpfNWpWdnpXc1EtZ001RXJSWDl3OXBSNjJ6aFFwZkptcENCMlh3NDRjRXV3cFc0TFExQWJkMXlBcUNGbU5jX05EcE0wMG5XQ2sxX3pn0gHHAUFVX3lxTE9STjZjcGtnT2NfYW90VGI5YWlpTmE0b0t2OVd5S2tPLUl1M3V1ek9vS0c1WFYxS2NSdzhHOHpFX3VDZTQwZm05WUUwcjFMTkxjNndTSlFDQ0F1WENmTmlWWHFTU1J4bk9La0I4X1RLNnlsSmVYbVY1b0NRSl81alZ2eldzUS1nTTVFclJYOXc5cFI2MnpoUXBmSm1wQ0IyWHc0NGNFdXdwVzRMUTFBYmQxeUFxQ0ZtTmNfTkRwTTAwbldDazFfemc?oc=5",
      "publisherUrl": "https://radartegal.disway.id",
      "source": "radartegal.disway.id",
      "summary": "jangan asal klik waspadai jebakan modus baru pinjol ilegal 2026 yang bisa kuras rekening radartegal disway id radartegal disway id",
      "id": "8556321675e23d9d",
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
      "title": "OJK DIY Ungkap Ciri Pinjol Ilegal, Investasi Bodong dan Judi Online - Harianjogja.com",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQSVJ3blJCQmJVQk5nckdHd2p4aGhkUmVsMDh0QUZ5MU8xaXk4U1hzRnFMWlpsNmhXLTAyS0JhcWc0emxxd0ZOSlVhdjFyOUJVdnNZQl82Q1FBSGItSHpkR0k4VXR6SGUzRFA1Mk5nYUVOLU1PR0ZMQ2tHaFpCaEwyUmhfV1l3NGNFaFlyRmRtWlRQM1UwclBRaW5jSHItRVUxT0RhMEF3VQ?oc=5",
      "publisherUrl": "https://www.harianjogja.com",
      "source": "Harianjogja.com",
      "summary": "ojk diy ungkap ciri pinjol ilegal investasi bodong dan judi online harianjogja com",
      "id": "7b326a9520be36ae",
      "domain": "harianjogja.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bcca0119e229c4fa",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
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
      "title": "Kredivo Laporkan Pertumbuhan Sehat Pembiayaan BNPL hingga Semester I-2026 - readers.id",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5LWFdCc3hITjFSLUlIR0RBQUxXX2VESEpzUDc4UHlwWmJvcm91T2xHMFk0S0ZLS3YyZVRYcldhQ3diYTZMQXZ0LW1HN2ZDemlmNjhJU0ZaU1BwUHR4TmdfNG9OaE00ek03QXc?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "readers.id",
      "summary": "kredivo laporkan pertumbuhan sehat pembiayaan bnpl hingga semester i 2026 readers id",
      "id": "d649472def7ebbee",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f197ce80f7a7f440",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-09-14",
      "title": "OJK: Batas Pendanaan Maksimal Tiga Pindar Tidak Jadi Diberlakukan - Validnews.id",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNSk9peDhIVTJ3cmwtaENIN3ZHWTVRc0JyYzFwc3BKdHFEU0FUQ2tweEVKcEtxOVNTbDR1MFVpNDNSTEFobFRMNk9qWDNHalN2NjdoS3pkbUJEb2o0OHA4Zm1HQTljeF9CQnhmNkh6aXk0Tk9CVWpaZTRJSlpxTVZNN3ltWG8wRlVNS1BoWTNmcldfNWZISzZ0ekY5aS1GOFZWX2F5TENvUUxwRklRQ3o4MTFHcDA?oc=5",
      "publisherUrl": "https://validnews.id",
      "source": "Validnews.id",
      "summary": "ojk batas pendanaan maksimal tiga pindar tidak jadi diberlakukan validnews id",
      "id": "2becb6169ba54971",
      "domain": "validnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8a23f69d77276e4f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    }
  ],
  "socialItems": [
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "CwKpt13Y9lI",
      "date": "2026-08-31",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 25401,
      "id": "97fcefd70629f615",
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
      "externalId": "UgzmMUPwVXlUIpThlAJ4AaABAg",
      "date": "2026-08-31",
      "text": "Baru mampir semoga dapet",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "96a93ff826fb8c98",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e73c398439b1b71f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx4kwhnjVO40p9lGkF4AaABAg",
      "date": "2026-08-31",
      "text": "Bismillah semoga dapat Buat kebutuhan bulanan",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "5bc875a25374e6db",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a61764e78e9f9d87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "J-eNKSIbtsE",
      "date": "2026-08-31",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 28221,
      "id": "f5730e5cb21b08b8",
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
      "externalId": "UgxO__4TfFb6VGrqe594AaABAg",
      "date": "2026-08-31",
      "text": "Gua selalau nonton sampai habis cuy",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "b792e9a358400012",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8d6dcb2e0dae4524",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjDMKe1Q2479v-ggx4AaABAg",
      "date": "2026-08-31",
      "text": "Hadir bang semoga dapat untuk kebutuhan",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "bf26e040ea370158",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d7c36e36593563e0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxkVtdISp0iiwh13sJ4AaABAg",
      "date": "2026-08-31",
      "text": "Hadir selalu abg ku buat beli bensin motor❤❤",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "c21fc82f56725b04",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2267533fe613d5ab",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugydin8oZVe88cCoeDJ4AaABAg",
      "date": "2026-08-31",
      "text": "Hadir semoga beruntung",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "af152159c70bf85e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b854aeb187d4e7c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy_w1FfRQoQZHfbOcN4AaABAg",
      "date": "2026-08-31",
      "text": "Hadir..bismillah buat anak sekolah",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "a7bb6a2c6ed6312b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d25cf775adb119cd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyj6NOMYHoc62J3skR4AaABAg",
      "date": "2026-08-31",
      "text": "Info terus Bang",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 1,
      "id": "5cd4830b83bf287a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e6383bca62192018",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxE4CBAvke5EWbGJTt4AaABAg",
      "date": "2026-08-31",
      "text": "LIMIT DANA CICIL KECIL PASTI BELUM DI SETTING INI :\r\n👇👇👇\r\nhttps://youtu.be/VnnlPhhcJxU\r\n\r\nLink Daget ada di dalam video muncul di menit menit tertentu, pastikan tonton video nya sampai selesai.\r\n\r\n🟢SILAHKAN KOMENTAR SESUAI ISI VIDEO NANTI ADMIN CIDUK DAN KASIH SALDO DANA 1JUTA\r\n✅GABUNG GRUP TELEGRAM DANA KAGET & THR RAMADHAN : https://t.me/+hzfb8ouS3k4yMzFl\r\n\r\n✅SYARAT IKUTANYA GAMPANG BANGET\r\n1. WAJIB SUBSCRIBE CHANNEL INI\r\n2. WAJIB BERKOMENTAR SESUAI ISI VIDEO DI VIDEO KALI INI SESUAI ISI VIDEO NYA\r\n3. WAJIB LIKE & SHARE VIDEO INI\r\n4. WAJIB TONTON VIDEO INI MINIMAL 3 MENIT AGAR KOMENTAR TIDAK HILANG ATAU SPAM\r\n5. PASTIKAN BERKOMENTAR DENGAN 1 AKUN YOUTUBE DAN NAMA AKUN YOUTUBE HARUS DI UBAH DENGAN NAMA INSTAGRAM AGAR MUDAH DI HUBUNGI\r\nYANG MENANG ADALAH YANG MENGIKUTI SYARAT & KETENTUAN JIKA KETAHUAN CURANG AKAN KAMI DISKUALIFIKASI SELAMANYA.",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 24,
      "id": "6ba0d0494993bbd6",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-62ebd62a107e9030",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyl55ksbUKWaa-htYl4AaABAg",
      "date": "2026-08-31",
      "text": "Lgi di perantauan, blom kerja, luntang lantung, semoga dpet rejekinya",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 3,
      "id": "521d6ba7f4ecc205",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ce160e28a6ccb8f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "D_-oKCe5yds",
      "date": "2026-08-31",
      "text": "MAIN WAHANA KELILIT PINJOL",
      "url": "https://www.youtube.com/watch?v=D_-oKCe5yds",
      "engagement": 63767,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "2e54b3a026087357",
      "eventId": "auto-b41d9cd2dffea2fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxG-LOLWgdRSZ2_nBx4AaABAg",
      "date": "2026-08-31",
      "text": "Mau Saldo Dana Gratis?\nTonton abis, mau dana kaget ini buat kebutuhan darurat apa nih 👇 https://link.dana.id/danakaget?c=s2k5uwbtv&r=c7Q38x&orderId=20260903101214733315010300166276296322754",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 92,
      "id": "3ed65381bc394427",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-25b4f5524fb55afa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "_BwZFP9Z77Q",
      "date": "2026-08-31",
      "text": "PINJAM SALDO DANA TANPA DANA PAYLATER DANA CICIL - PINJAM UANG DI DANA - PINJOL MUDAH CAIR 2026",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 26697,
      "id": "f7664ba645005d1d",
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
      "externalId": "UgxlgGAxXEVrRYhsJLR4AaABAg",
      "date": "2026-08-31",
      "text": "Saya bang buat kebutuhan anak sekolah",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "e782261cc0f84a93",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3e92b3f1b195fe52",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJf7rrLnrAr57I8nJ4AaABAg",
      "date": "2026-08-31",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 118,
      "id": "15e18a933cac1323",
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
      "externalId": "UgwSbEtt5m8AbGfMzx94AaABAg",
      "date": "2026-08-31",
      "text": "Semangat berbagi",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "77248f5ab08bd515",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d5456fe71aa9dc65",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxv7UoJZb_GZQkzbDt4AaABAg",
      "date": "2026-08-31",
      "text": "Top markotop",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "df1baa459caa2e83",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f96cd8a36a045297",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9INzAFQFkhKKK7mp4AaABAg",
      "date": "2026-08-31",
      "text": "hadir bang bismillah semoga menang",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "478b480d7a353e3a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c5941793b5a297ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9FpkgiwOEFjuUlTd4AaABAg",
      "date": "2026-08-31",
      "text": "hadir bg semoga saya terkaget kaget bg semoga lancar selalu..🤲",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "1677a08789449490",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3fd70a13064ba78a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLZemm714t8ZnEZNp4AaABAg",
      "date": "2026-08-31",
      "text": "mudahan saya beruntung🙏🏼🙏🏼",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 2,
      "id": "c73a3916605b75f4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f693e83d35482f2d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwETIHYJafnVWQteSV4AaABAg",
      "date": "2026-08-31",
      "text": "pinjemin gw dana donh",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "d4265bf2e446d288",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-26a8666769908f90",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGJoVPqZYYGm4G7dt4AaABAg",
      "date": "2026-08-31",
      "text": "saya ikut giveaway daget ini agar bisa nambahin tabungan saya buat upgrade hp saya❤",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 2,
      "id": "904e732d2d525e95",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-935220c59e7a36f3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzpdHpoB0LXklTh6xF4AaABAg",
      "date": "2026-09-01",
      "text": "1. Hadir selalau abng ku ..",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "6776afb5299ef2ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-07f2970a5c5ec136",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwbOYZt9afJ947wgNR4AaABAg",
      "date": "2026-09-01",
      "text": "Bismillah dapat",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "0fa8ac58686c5089",
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
      "externalId": "Ugxws0PU2UB7I6PQzEl4AaABAg",
      "date": "2026-09-01",
      "text": "Bismillah semoga beruntung. Lagi butuh buat popok anak",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "a497c5fea5f89ed4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e4c67d82f728f4d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "I3tnpcysM-Y",
      "date": "2026-09-01",
      "text": "DATA BUSUK ACC?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 27107,
      "id": "10f2743d7e309d36",
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
      "externalId": "Ugzb4ujtrYBb5Qy9Afl4AaABAg",
      "date": "2026-09-01",
      "text": "Ga ada bg",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "33863403ee9f6978",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f8b06899a91439c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxHhqGkON8lMAe838p4AaABAg",
      "date": "2026-09-01",
      "text": "Hadiahh",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "6fa0d2a1f42827aa",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a91f075a52ee7947",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "4TPuD3T0BkA",
      "date": "2026-09-01",
      "text": "INFO GALBAY 40 APLIKASI PINJOL BULAN SEPTEMBER 2026",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 15729,
      "id": "33910e785ec973e0",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77ebb68100347f81",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwQV9pKsIUV71Oqv7d4AaABAg",
      "date": "2026-09-01",
      "text": "INI MANUSIA HATI NYA GAK ADA APA, YA..?",
      "url": "https://www.youtube.com/watch?v=Qfb51CTzosE",
      "engagement": 0,
      "id": "76cee446a39fc189",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2caa6abaaeee56fd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwDEdY1i0ClJyOyD8p4AaABAg",
      "date": "2026-09-01",
      "text": "Kena prank semua😂🎉",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 4,
      "id": "5433de5f20473484",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d646fbae5b5525be",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQATxETfO_mgF7X9J4AaABAg",
      "date": "2026-09-01",
      "text": "Konten berManfaat",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "6bb6499a4440afd3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c4cf3cc65e1b1ee8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyHgDikEGM1JsScJdB4AaABAg",
      "date": "2026-09-01",
      "text": "Mantap😊😊",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 2,
      "id": "24fcc7375089bec2",
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
      "externalId": "UgzdLta1V8AzhuRO7mx4AaABAg",
      "date": "2026-09-01",
      "text": "Pekalongan nya di mana alamat jelas nya ya",
      "url": "https://www.youtube.com/watch?v=Qfb51CTzosE",
      "engagement": 0,
      "id": "aaad761462d9f51e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-13ddc27de8c076fb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "n2gEha6gxi8",
      "date": "2026-09-01",
      "text": "SISI GELAP PAYLATER! DARIMANA PINJOL TAHU NO HP IBUMU?",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 28409,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "9d3657c794106f14",
      "eventId": "auto-2228b2f132513ff6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwS_2wzClXleVOK5bd4AaABAg",
      "date": "2026-09-01",
      "text": "Saya nonton truss kok gak dapet ya dana gratisnya",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "11c8db0b053dd441",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2575b42000299080",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx3nj6iwm0uAwz_oYN4AaABAg",
      "date": "2026-09-01",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 100,
      "id": "278576df38cd529c",
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
      "externalId": "UgyjHTfUO34UxiHHB7l4AaABAg",
      "date": "2026-09-01",
      "text": "Semoga beruntung bg amiin",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "281a7b5d2c3d2aba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b991b4bcc2aeb0b7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUcI_VsiLjfynENXx4AaABAg",
      "date": "2026-09-01",
      "text": "Semoga dapat",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "ec9756bf6369f54f",
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
      "externalId": "UgxUtnLaj_1Pf4xvh5J4AaABAg",
      "date": "2026-09-01",
      "text": "Semoga ini jadi rezeki saya, buat manajemen uang baru merantau kerja",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "d5170d42d82c4f9e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e7384fc024755fde",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "Qfb51CTzosE",
      "date": "2026-09-01",
      "text": "Wanita Catut KTP Mbah Darmi untuk Pinjaman, Bansos Korban di Pekalongan Terhenti",
      "url": "https://www.youtube.com/watch?v=Qfb51CTzosE",
      "engagement": 22308,
      "id": "f9cec792af57269b",
      "sentiment": {
        "risk": 56.3,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-26df4b6ac20688b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCrbKZNouDUdeulVZ4AaABAg",
      "date": "2026-09-01",
      "text": "aku klik enter ga bisa terus",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 4,
      "id": "82da58462dbd50ac",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8a9c3fc9ac253d0c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzX7bg2RngJ8mKfp4J4AaABAg",
      "date": "2026-09-01",
      "text": "bismillah",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "4ccd8057da8ad6f1",
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
      "externalId": "Ugx8hFlzRtJUOApzdQF4AaABAg",
      "date": "2026-09-01",
      "text": "bismillah buat beli perlengkapan sekolah 🤲",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "80cc571648ab785c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2df777646ef82746",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx-WQgr7KBJbt2ldp14AaABAg",
      "date": "2026-09-01",
      "text": "bismillah yaallah semoga dapet kalo emang rezeki gabakal kemana😊",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "3ece7ddb6ec50abb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-969fb27b39e1a612",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxw0RKS6nciu1k2_Zt4AaABAg",
      "date": "2026-09-01",
      "text": "hadir selalu bang semoga menang kali ini",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "84e99bf835a73407",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d79119d6b2c9f679",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwlcwFMHLRtC3pT9RV4AaABAg",
      "date": "2026-09-01",
      "text": "keren edukasi yang bagus",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 3,
      "id": "03692118183aa81f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ef994bb66d056ead",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwoPOCdFngBWHMk4Fx4AaABAg",
      "date": "2026-09-01",
      "text": "makasih bang info nya ...",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "b33358637b3837f0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-18bca91d34b6defc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyui3phATO8W3pJFI14AaABAg",
      "date": "2026-09-01",
      "text": "mn ada kita ketik sampai kapanpn gk da sama sekali konten sj ini😢😢",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "aa54a1e1b4d808c6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0953a3fbf58cc901",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwwIGG035BQmRB58Yt4AaABAg",
      "date": "2026-09-01",
      "text": "sosok wanita ? Identitas spill lah masa korban yang dipill, pelakunya enggag",
      "url": "https://www.youtube.com/watch?v=Qfb51CTzosE",
      "engagement": 0,
      "id": "42358adea8635de7",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dd87b60a98a78d7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgziGlawGp815-iaL0d4AaABAg",
      "date": "2026-09-02",
      "text": "APLIKASI2 PINJOL DUITNYA DARI KORUPTOR , DUIT KORUPTOR DI PINJAM2KAN DGN BUNGA YG SANGAT TINGGI DGN KEMUDAHAN PENCAIRAN SBG JEBAKAN .",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 49,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "794354e23660197c",
      "eventId": "auto-67a055a79c71a448",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxcSKwibmhd2_z_EPN4AaABAg",
      "date": "2026-09-02",
      "text": "BANG KAPAN BIKIN VIDEO MAIN WAHANA KELILIT PINJOL",
      "url": "https://www.youtube.com/watch?v=D_-oKCe5yds",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "6b55335d23a3df77",
      "eventId": "auto-5b6873a97b4a2746",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLFnlumLowDnVLswp4AaABAg",
      "date": "2026-09-02",
      "text": "Bang berarti data kamu pernah disebar dong bang sama dc nya, reaksi orang orang yg dapat sebaran data kamu gimana bang?",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "25f0ebb5bba78af7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-235166881a332747",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyyC1yIntMtx8Zc5d4AaABAg",
      "date": "2026-09-02",
      "text": "Bang hadir bang",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "24e3f54427e9a730",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b7985644fad209d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgygxYzalgcSmJSihAh4AaABAg",
      "date": "2026-09-02",
      "text": "Bener banget saya juga pernah didatengin tunaiku dan kredivo kekantor.\nGalbay udh mau 6bln\nMinggu pertama dan BLN pertama aja panik kesini\" ya plong aja😅",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 19,
      "id": "b11a7034e493ebc0",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-da0fc7b27541ed7e",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxeWtTWLdlD3-4Tk1t4AaABAg",
      "date": "2026-09-02",
      "text": "Bener...setuju ..tolong segra ditindaklanjuti Pemerintah melalui Komdigi",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 20,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "cbed24e91f16d381",
      "eventId": "auto-c3f4a9d165f9ec3a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzlXLyXyR2IjuLjQit4AaABAg",
      "date": "2026-09-02",
      "text": "Berbagi itu tidak membuat mu miskin",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "1984829c7759c1de",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8af713158a4f044f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJVdTYXb1erlBUuuJ4AaABAg",
      "date": "2026-09-02",
      "text": "Bg tutornya bisa pinjol banyak apk gitu ,dan bisa pinjam nya gede gede..gue aja 1,2 apk ngak bisa di tolak mulu..",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 1,
      "id": "0842e654f0ce32ab",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6e38f552b20b3435",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwT4Zuq_oaykSaLh7Z4AaABAg",
      "date": "2026-09-02",
      "text": "Bismillah buat kebutuhan sehari2",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "96228ac2228b4a6a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-57ad5fd1813c27d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBo_IjqU3qYHXyl9N4AaABAg",
      "date": "2026-09-02",
      "text": "Bismillah hadir bang",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "fa885785a19ebccf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5f2262e5a54fb193",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyxkZE8-NFStDum1_d4AaABAg",
      "date": "2026-09-02",
      "text": "Bismillah semoga ada rejeqi nya buat biaya kebutuhan anak anak",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "703351ab776fec4e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-00f45b5d30d6c404",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwaxmYDrfVWHE-lyhJ4AaABAg",
      "date": "2026-09-02",
      "text": "Bru keluar dr goa ni cewk..",
      "url": "https://www.youtube.com/watch?v=iil69RukkTs",
      "engagement": 2,
      "id": "8f183f7fc22f53ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-72aff52cf02a9f68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyd0CceWpWo-v5wPbR4AaABAg",
      "date": "2026-09-02",
      "text": "Desi Ratnasari oke, public speaking nya bagus",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 68,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "6f2faf90f2bf3abf",
      "eventId": "auto-78d709afb98e8279",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "TrguyExHzSw",
      "date": "2026-09-02",
      "text": "Desy Ratnasari Bandingkan Dana Pinjol Rp17,28 Triliun dengan Anggaran Komdigi | NTV TREND",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 183741,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "b926249d7016972a",
      "eventId": "auto-1a4031674bf85289",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyeG61oB5yO2Yo0yet4AaABAg",
      "date": "2026-09-02",
      "text": "Hadir",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "d8584dbf4ec9379d",
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
      "externalId": "UgzRiPHEC3f8LXAdwrd4AaABAg",
      "date": "2026-09-02",
      "text": "Hadir abangq🙏",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "6933001c053fb4b5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-92bddbacfbf74f98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzUh9Uba_17vRItkAN4AaABAg",
      "date": "2026-09-02",
      "text": "Hadir bung ❤",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "9be4b9a8ee60870c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bbd5dd8a4a754d05",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxn0X99WvZQ-awaZKh4AaABAg",
      "date": "2026-09-02",
      "text": "Hadirrr boskuh",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "5d3bcecbbcba69d3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1bffab5ca4a356f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxrU-sGKAtvk43I0jB4AaABAg",
      "date": "2026-09-02",
      "text": "Hai Bang saya ada cerita nih, saya kedatangan DC Pinjol ke rumah dan saya usir dengan baik",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 42,
      "id": "ebc829ede018be60",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0a5e164aff1355f9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx4acAw2Izrvr9KXi14AaABAg",
      "date": "2026-09-02",
      "text": "Hapus pinjol.",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 8,
      "id": "4b10cd808bef97d1",
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
      "externalId": "UgwOz1OsAJb8CuYGfe14AaABAg",
      "date": "2026-09-02",
      "text": "Ini channel kesukaanku",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 3,
      "id": "2de173e068c68a03",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9ab9efb2fd784254",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "lhRaxwidJYc",
      "date": "2026-09-02",
      "text": "Istri Dituduh Punya Utang, Ternyata Suami Diam-Diam Pakai KTP-nya untuk Pinjol 😳 #shorts",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 156910,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 57.0
      },
      "id": "c74e06db0a129694",
      "eventId": "auto-d578da24ebddac50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "43nm9rFHvTo",
      "date": "2026-09-02",
      "text": "JANGAN GALBAY PINJOL INI DI SEPTEMBER,, !!!",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 27790,
      "id": "36d4d39890250f49",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6dd99bdc615db61f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgywHyRjj5nb2Hhg8-x4AaABAg",
      "date": "2026-09-02",
      "text": "Jgn bayar hutang pinjol y bg. Kalau abg bayar banyak pengikut abg yg akan kecewa.",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 2,
      "id": "95db6bcfbe3f48c0",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3515ad695d431cdc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzRQoM5c2gYz15bc3J4AaABAg",
      "date": "2026-09-02",
      "text": "KA Samir ada DC dan FC lapangan ga",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 1,
      "id": "351bd99a8f6d19b1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0b5452ecb80ca2c0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyxa2QFOiJ-e0mxD0l4AaABAg",
      "date": "2026-09-02",
      "text": "Keren",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "ade8dfc98452fe1c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-07473a4253fa2485",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4JudbGzfb4_JTLy94AaABAg",
      "date": "2026-09-02",
      "text": "Lanjutkan bang",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "d0957dac6be96403",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8b388779f9071dc3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4DQL8JgvG7Wp9yTl4AaABAg",
      "date": "2026-09-02",
      "text": "Mau menginfokan. FC Traveloka sudah sampai Bandung. Telat 7 hari sajah.",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 3,
      "id": "cd3515fb72f811a4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-67d75909f01940a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCkyyLwTBbNnMrh1B4AaABAg",
      "date": "2026-09-02",
      "text": "Maunya sih gk pinjam pinjam pinjol Mba,tapi Krn keadaan yg awalnya bs byr ,tapi akibat ktr tutup trpksa glby ,mw byrpun blm mampu ,yg ada kg bertahan hidup😢",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 17,
      "id": "0210d84826b86292",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b3864d6895aa9b2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyH8B6d0qdA0wlW7Ah4AaABAg",
      "date": "2026-09-02",
      "text": "Musnahkan pinjol dari tanah air, banyak mudhorotnya,,,SEGERAAAA",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 67,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "56ad37dc44b3b4d5",
      "eventId": "auto-d50a7a7a78f56426",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyzwsuom79zuKingbR4AaABAg",
      "date": "2026-09-02",
      "text": "Pengen dana darurat buat kebutuhan sekolah kak❤",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "29f64684b556786e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e9d344ce771dcbfb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx117bmWJ_SgSkLngJ4AaABAg",
      "date": "2026-09-02",
      "text": "Samir, diteror trs telat sehari aja dah dihubungi banyak no",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 5,
      "id": "a7970c1f3882d4d1",
      "sentiment": {
        "risk": 87.1,
        "label": "negative",
        "negativeWeight": 5.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1dbc2c93e11141f2",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgweDjS1BLgTgBzyP-F4AaABAg",
      "date": "2026-09-02",
      "text": "Saya ada galbay telat sdah 3bulan di indosaku total pkok 7jt Sruh balikin 10.350rb lunas tnpa telat,akhirnya karena skema dan bunga nya ugal2an akhir nya gak saya bayar kan,teror ala preman nya 3 hari saja setelah saya bilang tunggu saya lapor ojk dulu tentang aturan yg kmu terapakan,akhir nya sepi teror  nya stelah saya selipkan kata ojk,ada sih yg nagih TPI ssekali dan cara normal",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 22,
      "id": "85c8a3a0bdb12e1c",
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35196b2460c43035",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwO5IzB4f2Omc0e3aB4AaABAg",
      "date": "2026-09-02",
      "text": "Sebenarnya tidak ada privasi sama sekali, tanpa kamu izinkan pun mereka bisa mengakses hp kamu, semuanya sudah di atur dan di monopoli pemerintah , izin izin itu cuma omong kosong , minimal satu izin saja sudah bisa mengakses semua mana ada setengah2 !",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 16,
      "id": "b23727597207592b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-97716b51f05bda3f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxs-Wf5k23bj5e2nyl4AaABAg",
      "date": "2026-09-02",
      "text": "Semangat bang",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "7e172109749a4b64",
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
      "externalId": "Ugwik__wxoV9Voo-eGV4AaABAg",
      "date": "2026-09-02",
      "text": "Susu anak habis, bantu doakan agar dibukakan rejeki dari berbagai pintu",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "f722136cb91ad13c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a41d9d534b53113c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwqvikQs5gQu0OacnB4AaABAg",
      "date": "2026-09-02",
      "text": "Tak bisa di cari bg😢",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "7a770a10106f1f52",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d6a619da9614d0c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx0kibPDPZ6eYUTmPp4AaABAg",
      "date": "2026-09-02",
      "text": "Tutup ajalah pinjol ,KTA, paylater dll juga tutup, ntar pinjol ditutup lari nya malah KTA dipermudah",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 32,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "d00a635b28890b49",
      "eventId": "auto-ed33ee6b8ea67499",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwD3UTk04fLPlypZh54AaABAg",
      "date": "2026-09-02",
      "text": "Ya bismilah lah min untung2 dapat",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "4caedb1e87375b6c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-27aa5e2cf9133413",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyHUtjvEwHY2py8IzB4AaABAg",
      "date": "2026-09-02",
      "text": "Yups",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "3437a2f91f95ba64",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ae8d21e35cdd3114",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "iil69RukkTs",
      "date": "2026-09-02",
      "text": "Zoe Levana polos banget pas diajarin  cara pinjam uang online#pinjol #zoelevana #podcast #viral",
      "url": "https://www.youtube.com/watch?v=iil69RukkTs",
      "engagement": 18495,
      "id": "43dec6f841dd5211",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-10157cfac6ad706d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyWZLGKtxZAbUutKOJ4AaABAg",
      "date": "2026-09-02",
      "text": "bismilah",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "8b8cc16f1f4181e0",
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
      "externalId": "UgyqcBkoT8ACyu8ICn54AaABAg",
      "date": "2026-09-02",
      "text": "bismillah alhamdulillah buat biaya kehidupan perantau",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "d49adfe78382a20f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-444c6efb0fd6e4eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqlUv_0wo3eXLN9dp4AaABAg",
      "date": "2026-09-02",
      "text": "bismillah buat modal usaha",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "de4b74de8e28e6fb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b7e39e6131df41a2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzRicZ9vZkNY0OReal4AaABAg",
      "date": "2026-09-02",
      "text": "hadir",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "24f182b0bf84bf5e",
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
      "externalId": "UgzZvDG3CNTGPgyesJp4AaABAg",
      "date": "2026-09-02",
      "text": "mantap dah sangat membantu",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "06974685c3f0a4c6",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f75938dcd81c7b51",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz-by2N-Jj7k5G7Z8B4AaABAg",
      "date": "2026-09-02",
      "text": "mau ikutan dong",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "bad0b304cabcd247",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4b50ce5f3f6b00a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy8_gi1Kcoy2u4DAV94AaABAg",
      "date": "2026-09-02",
      "text": "negara memfasilitasi rakyatnya untuk gantung diri!",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 22,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "204c3bdc04a94796",
      "eventId": "auto-3fd705687eec77a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgySLookeXNedU2s_d94AaABAg",
      "date": "2026-09-02",
      "text": "udah di cova tapi ngga bisa...prank🎉",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "d568c2385b98161f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e779f5a4da8191c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwD7XzDRgQSaT9QIwB4AaABAg",
      "date": "2026-09-03",
      "text": "AQ HR ini kredit pintar",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 5,
      "id": "6837e4a3f4d9c6a3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-007d8009cbe8a3a2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzpk-qA8EQUNeP_yfR4AaABAg",
      "date": "2026-09-03",
      "text": "Aku belum dapat dapat dana pinjam 😢😢",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "80db1e2f506f6c68",
      "eventId": "auto-b400f96d659455ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_oHD-57JqAqVF7Y14AaABAg",
      "date": "2026-09-03",
      "text": "Aku gak dapat bg",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "fefa67c8023e2703",
      "eventId": "auto-4d1aee3def768e27",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw16D1mtyMJJfbCvPJ4AaABAg",
      "date": "2026-09-03",
      "text": "Alhamdulillah sampe hari ini blom prnh nyicip pinjol & di HP sy smua nmr kontak yg trsimpan aman tdk ada teror.",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 5,
      "id": "c7868b06d2ce7911",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4fbfa703330280f9",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxiZvsPEQ-hV5MxtTJ4AaABAg",
      "date": "2026-09-03",
      "text": "BAHAS KREDITO PLISSS",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 1,
      "id": "9679e007c259a696",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b526096d53ca2249",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxW39HEV6tgfvUSM894AaABAg",
      "date": "2026-09-03",
      "text": "BANG BAHAS KREDITOO",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "bbe9861f47cfb02d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f2a093660c446def",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyFoNLIjCgnI42EjYp4AaABAg",
      "date": "2026-09-03",
      "text": "BISMILLAH HADIR",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "8ff903efb7d31e5f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-140b6523976827b2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyoaNoiAujrLe60MpB4AaABAg",
      "date": "2026-09-03",
      "text": "BUBARKAN PINJOL LEGAL MAUPUN ILEGAL...\nPINJOL LEGAL ILEGAL DN OJK SAMA SAMA MAFIA...",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 77,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 60.5
      },
      "id": "437cf20252772b7e",
      "eventId": "auto-2180f08d025f6aeb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw7dAtBYUtlDUtjlLN4AaABAg",
      "date": "2026-09-03",
      "text": "Balas tampar mba",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "f9fab699ab4ad556",
      "eventId": "auto-1215c56d3292d469",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzrnPhbHefK9c_db1V4AaABAg",
      "date": "2026-09-03",
      "text": "Bang info waktu kmarin Abang ngelunasin itu bagaimana?",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "35e57395dbe331b7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19abc54c8cb8b4b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwrlN-4vNAbv9fyipd4AaABAg",
      "date": "2026-09-03",
      "text": "Bang saya galbay lazbon by adakami apakah masih aman galbay dr Desember 2025 nominal SDH 3,JT 400,wilayah Tegal kabupaten",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 1,
      "id": "3bc93e422d55249a",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1baff032ab580ab9",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgysUkcFHpra-6B3ptB4AaABAg",
      "date": "2026-09-03",
      "text": "Barusan di datengin FC lapangan dari ada modal sama ivoji daerah kabupaten Tangerang",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 3,
      "id": "4729970c228df8db",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e5dc892b5c733df2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJlH5S65TWPFPLTaF4AaABAg",
      "date": "2026-09-03",
      "text": "Bermanfaat nihh bg",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "97df72dad86a4e58",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f34d08ac94ac6f9f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy09kQTmps2_fF2fyx4AaABAg",
      "date": "2026-09-03",
      "text": "Bismillah buat pegangan bertahan hidup di kota orang",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "34d9215c00056407",
      "eventId": "auto-d9f2e40a7b0a6342",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzVLEOw9IRJ0WJTMDF4AaABAg",
      "date": "2026-09-03",
      "text": "Bismillah dapat",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "0ff5f438e690156e",
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
      "contentType": "video",
      "externalId": "_bUdAQLM5sg",
      "date": "2026-09-03",
      "text": "Cara Aktifkan Dana Pinjam Supaya Bisa Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 30913,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "d28c35e7fa36f2f0",
      "eventId": "auto-c56326dcc516effe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgztgCHWxiTuWyHZWN14AaABAg",
      "date": "2026-09-03",
      "text": "Hadir bng",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "e39be9c0569cda54",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2def466793d8e125",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHghWO9zBKv7tMjQV4AaABAg",
      "date": "2026-09-03",
      "text": "Hapusnya semua pinjol, meresahkan malah menjamur",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 10,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4b8adc7a3aa56368",
      "eventId": "auto-2a3b1629098df85f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwNGxhN-JXKLWHO2lR4AaABAg",
      "date": "2026-09-03",
      "text": "Jangan ada yg bayar pinjol. Mending duit nya buat nabung, buat investasi, modal usaha. Pinjol makin d bayar malah makin berkembang. Klo ga d bayar lama² Meraka bangkrut. Mampus !!",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 6,
      "id": "2809005f838c2bcd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-077c5c92103c91d1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgysfxmQ4CgEL_06kit4AaABAg",
      "date": "2026-09-03",
      "text": "Jangan meng hutang, kalau tidak mau bayar! Hati\" baik itu resmi/tidak jika sudah jatuh tempo semakin lama semakin terbiasa dg spam chat berantai.",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.0
      },
      "id": "85a3a19e6e443184",
      "eventId": "auto-4b697036e50b3e18",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxc-ZSeXvEKHZVj60B4AaABAg",
      "date": "2026-09-03",
      "text": "KTA Bank Mandiri DC neror2 kondar ngancam mau obrak abrik tempat kerjanya sama mau nyegat di jalan katanya",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 5,
      "id": "6fe5893dcdb38da4",
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f894e9249731f555",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzE63jY6WyS68-kAHp4AaABAg",
      "date": "2026-09-03",
      "text": "Kenaoa mertua pada jahat ya cerira.ini",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "40e69e3e5957dace",
      "eventId": "auto-1ca3ab8536162bc3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw97rCo9echkUIEQnV4AaABAg",
      "date": "2026-09-03",
      "text": "Keren mass ❤",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 1,
      "id": "8f6e0e0cbdff0266",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dcf46cb14c1af7b5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw-chp-m1Hqk1h-65J4AaABAg",
      "date": "2026-09-03",
      "text": "Kok punya saya ga bisa buat cari aktifasi dana cepatnya bg",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "c7404bb4c8b9b2a1",
      "eventId": "auto-04f8a6dcc105ef0c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxi8BzBt0OUbpZmo9p4AaABAg",
      "date": "2026-09-03",
      "text": "Lah kalo pinjol ternyata menyusahkan rakyat sampai kehilangan hak pemeliharaan oleh negara, kenapa pinjol masih di biarkan beroperasi ??",
      "url": "https://www.youtube.com/watch?v=pwD6OBC4PP8",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "c8885caa387410cf",
      "eventId": "auto-60b6b887a3dac267",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzBPMXaXdAGjAT-o-14AaABAg",
      "date": "2026-09-03",
      "text": "Mantap bang🎉",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "dacce59930069b16",
      "eventId": "auto-b52321e37d8d8291",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxMuJqattWmoaq1icx4AaABAg",
      "date": "2026-09-03",
      "text": "Mau Saldo Dana Gratis?\nTonton Habis, mau daget ini buat kebutuhan darurat apa hari ini👇 https://link.dana.id/danakaget?c=sztj4pafp&r=c7Q38x&orderId=20260906101214479115010300166276296868036",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 76,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "60a0a289392ff17a",
      "eventId": "auto-a5b34f3a766c9f7c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXFrNjoZ6Fg8AB0UF4AaABAg",
      "date": "2026-09-03",
      "text": "Mertua bangsit",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "7077e8fbb820b3c4",
      "eventId": "auto-ba82e852d43167cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzVTd9dBMxWvFJSztF4AaABAg",
      "date": "2026-09-03",
      "text": "Mntap",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "2bd6312b0d828319",
      "eventId": "auto-77abc683babd2d2e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "pwD6OBC4PP8",
      "date": "2026-09-03",
      "text": "Penerima Bansos Berkurang! 7 Ribu Warga Dicoret Usai Terindikasi Judol dan Pinjol | iNews Room (2/9)",
      "url": "https://www.youtube.com/watch?v=pwD6OBC4PP8",
      "engagement": 36409,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "761e5d0fbd677899",
      "eventId": "auto-501622530d879061",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgymxKB8vbmGkK-Mz8t4AaABAg",
      "date": "2026-09-03",
      "text": "Publick speaking teh Desi bagus sekali ,,,❤🎉",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 16,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "4ef392b2724dcb14",
      "eventId": "auto-21e581fbae851689",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyApqV5NPeAkT7s9fR4AaABAg",
      "date": "2026-09-03",
      "text": "Samakita aman GK di Galbay",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 1,
      "id": "2ddfa0dc2ac36e4a",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7ee5a57a04ee218e",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwlekh6oN0YA5V0zvR4AaABAg",
      "date": "2026-09-03",
      "text": "Saya kagum dgn mbak Desi.beliau menganalisa secara umum apa dampak pinjol dan keperdulian Pemerintah dalam menganalisa dampak pinjol tsb SMG beliau diberkahi Allah.",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 20,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "568f680c8b3c2592",
      "eventId": "auto-5e21cda2412b2427",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzytmQvGeQNxEblIEx4AaABAg",
      "date": "2026-09-03",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 124,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "7be2f04abb8498f1",
      "eventId": "auto-7539136796e5fda4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx-9Dzsqwmss6BM4eB4AaABAg",
      "date": "2026-09-03",
      "text": "Semakin jelas sudah banyak korban tapi iklan d YouTube pada berseliweran iklan pinjol ....mencari korban terus",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 5,
      "id": "4e5f555354b342fa",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-999b37a4f1068619",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4lKp7RND2pIaVc8t4AaABAg",
      "date": "2026-09-03",
      "text": "Semngat trus bg berkarya",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "27433d77a52424ac",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5c483daa5b60c852",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwkjb2ZKDoyJ6-zpYV4AaABAg",
      "date": "2026-09-03",
      "text": "Semoga dapat rejeki 😢 buat aku yang cuma pengangguran",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "751b8c8781db9fa6",
      "eventId": "auto-51146d3858db5c5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx_wi9dM5Rs_it07AR4AaABAg",
      "date": "2026-09-03",
      "text": "Semoga dapat❤❤❤",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "e031cc8f17efa0fb",
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
      "externalId": "Ugyf6HHymtoDZX9pZwh4AaABAg",
      "date": "2026-09-03",
      "text": "Solusiku itu kalo mau di acc kita di tlpn iya bng kita di tanya\"",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 2,
      "id": "fe0a266af926a401",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2e55f1add2b3dce5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy5ButGHV6MHxwXMEx4AaABAg",
      "date": "2026-09-03",
      "text": "Tampar 10x mertuamu itu",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "499b316d2d377605",
      "eventId": "auto-c7f9f80c41fb57aa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz8c_Aft7BogGqENnh4AaABAg",
      "date": "2026-09-03",
      "text": "Tampar balik mertua iblis itu",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "a4df5e99844c5d0b",
      "eventId": "auto-d025b2401bb42ac3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "VUlpKSWA59g",
      "date": "2026-09-03",
      "text": "Tanpa BI CHECKING?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 36639,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "6d560dea41188cd5",
      "eventId": "auto-5bb290eedc9250ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzxD6DbyIyKY4IyL0N4AaABAg",
      "date": "2026-09-03",
      "text": "Tindak lanjut bandar judolnya paak tegakan keadilan bukan yang korban judol nya aja kasian yg tak berdosa jdi kna imbasnya ,pajak judol itu sangat besar tp tidak berkah tidak akan pernah berkah bahkan memiskinkan orang miskin",
      "url": "https://www.youtube.com/watch?v=pwD6OBC4PP8",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 61.9
      },
      "id": "6fdef14c5aface8e",
      "eventId": "auto-b260a0cc2b7358d3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw5duurT-DOhFyFOmV4AaABAg",
      "date": "2026-09-03",
      "text": "Udh makan aja lah uang nya..rakyat gak butuh..kasih aja koruptor uangnya..rakyat sukarela..apapun alesanya mw judol mau apa ttp rakyat yg di tindas..rakyat judol mngkn ada alesannya..pinjol juga mngkn ada alesannya..uang pajak dll ttp rakyat yg bayar..toh juga para petinggi yg menikmatinya",
      "url": "https://www.youtube.com/watch?v=pwD6OBC4PP8",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "d2770702ca68dbf0",
      "eventId": "auto-f645b4eddd422eab",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy-fo-5mrpqjVYgH3B4AaABAg",
      "date": "2026-09-03",
      "text": "Yoi hadirr",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "12bfc093f4f2d6eb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-43d3ebc527bc2352",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxpyW-auY4kPwjGeg94AaABAg",
      "date": "2026-09-03",
      "text": "bismillah buat berobat kakek",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "b3ae8c5c92f74bb8",
      "eventId": "auto-c363a59b5d5cc3d6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxgr5ez6AzIcJBsnld4AaABAg",
      "date": "2026-09-03",
      "text": "gara\" injol hidup JD sengsara klo bisa hapus pinjol di Indonesia ini",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 70,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "1aaf752be0430557",
      "eventId": "auto-ca04223876c28fd6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxhBDjwD5tjpgMoWv14AaABAg",
      "date": "2026-09-03",
      "text": "😢 banyak vidio yg di skip alias tidak reel anda tau kan tidak reel",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "a9e9ce5b707ac927",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3cd086635097bd9c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6MgXUnWqAL9IX4tp4AaABAg",
      "date": "2026-09-04",
      "text": "....... 👍🏾",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 0,
      "id": "79f5e12bcfb55bd6",
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
      "externalId": "Ugwi7Yjs2_zgE1674jV4AaABAg",
      "date": "2026-09-04",
      "text": "Bagus sekali bang",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "583273ea1bab29ba",
      "eventId": "auto-694af77a7881dfef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzX-j8qXfhJa26Y71h4AaABAg",
      "date": "2026-09-04",
      "text": "Bank coba bahas pinjaman digital bank seperti bank neo bank saqu dan superbank",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "e4c9465848eb75d5",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-742ed0b425c3165e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw20XLTMrHIMYZvlzt4AaABAg",
      "date": "2026-09-04",
      "text": "Bikin.kotor.tgn.jika.tampar.balek.biar.tuhan.balas.10kali.lipat",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "373c9e134110a3ff",
      "eventId": "auto-aaa45347953d4b21",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyPERji3Qf8qr_YlRl4AaABAg",
      "date": "2026-09-04",
      "text": "Bismillah buat bantu temen",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "a67385870c89e9fc",
      "eventId": "auto-75276d8b532a7be5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzG1Q-zVHN67Ugaicp4AaABAg",
      "date": "2026-09-04",
      "text": "Bismillah smoga dapat",
      "url": "https://www.youtube.com/watch?v=CwKpt13Y9lI",
      "engagement": 0,
      "id": "e77490975a8a9c87",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a569ff3a7043e05",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyH0mU9_V97xflTmT14AaABAg",
      "date": "2026-09-04",
      "text": "Bismillah smoga rezeky udah jatuh tempo cicilan",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "59c25bebcb19a076",
      "eventId": "auto-4525849478a0935e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyvp8mG-AR_ebv_qmt4AaABAg",
      "date": "2026-09-04",
      "text": "Bismillahirrahmanirrahim semoga saya dapet buat modal usaha tambhan",
      "url": "https://www.youtube.com/watch?v=J-eNKSIbtsE",
      "engagement": 0,
      "id": "1fba3717ffead6a4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e6d3b30784b55c8a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxnO2u4sWOC-TH0QTR4AaABAg",
      "date": "2026-09-04",
      "text": "Bu Desi cerdas, kritis demi perbaikan kebutuhan yg tepat bagi Rakyat, semoga anggota DPR lain jg mendukung suara ini, demi Rakyat  Indonesia yg ekonomi sem@kin sulit dan sedikitnya lapangan perkerjaa yg tersedia, semoga Pemerintah cepat  tamggap @kan persoalan ini 🙏🙏",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 34,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "4191be15684a0acd",
      "eventId": "auto-ce809eef59ce2958",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzV1xz9c6LNvE1BzRB4AaABAg",
      "date": "2026-09-04",
      "text": "Cerdas tegas berisi dan punya hati ..harus nya semua Seperi Desi ❤",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 17,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "44e74a5638779138",
      "eventId": "auto-7eb8acadc32ecdbe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "4_G132MPRu0",
      "date": "2026-09-04",
      "text": "Cucu Nekat Pinjol, Nenek Langsung Ngamuk! 😂",
      "url": "https://www.youtube.com/watch?v=4_G132MPRu0",
      "engagement": 26873,
      "id": "c467c4fdea141b13",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b32fb3b5cfba1961",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "OFBgGKQ6FrY",
      "date": "2026-09-04",
      "text": "HATI-HATI DENGAN PINJ*L INI❗Nama Baik Bisa RUSAK‼️| Winda Pusphita | B-Talk Podcast",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 34063,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "2f838df750c8159d",
      "eventId": "auto-165e39e21161ea35",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyzJ_uDXaHLxKanAkZ4AaABAg",
      "date": "2026-09-04",
      "text": "Jngan kasih pinjam uang ketemanmu,klau TDK mau kesedihan itu akan berbalik ke kalian karna stres mau nagihnya TDK di bayar",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "10344409af0e9489",
      "eventId": "auto-9bbebe6aee163c12",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGd_IzXxeF9blDG054AaABAg",
      "date": "2026-09-04",
      "text": "Mantap bos",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "22efd990b4ee6860",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a82426a9883d07fa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXzCMqZLqcQD2KzzZ4AaABAg",
      "date": "2026-09-04",
      "text": "Neo bank gimana bang ada gak fc lapangan",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "b293d8eca082fe1d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c65c064bdf2b920",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw2wmUqHEyOVq6u5W14AaABAg",
      "date": "2026-09-04",
      "text": "PINJOL TEMPAT ADALAH UANG PUTARAN HASIL KORUPSI\n\nJAUHI PINJOL\nBILA TAK MAMPU BAYAR GK PERLU BAYAR ,\nLEBIH BAIK RUSAK DATA DARI PADA RUSAK KELUARGA",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 11,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "2b0bdc93d9ed5f02",
      "eventId": "auto-757cb0c780d96f02",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIt_KWhh5oBWAvk0t4AaABAg",
      "date": "2026-09-04",
      "text": "Perempuan tua ringan tangan gilani tahu sy itu laki2 yg tampar",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "21fb8f8e761d1c5e",
      "eventId": "auto-871a63c41af95a45",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzgJI0aVd7EdjhjEdJ4AaABAg",
      "date": "2026-09-04",
      "text": "Punyaku ga bisa di enter \nUdah ketik aktivasi fitur pinjaman \nTp ga bisa",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 12,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "783e97f99b813f3d",
      "eventId": "auto-475af1b515006a96",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx58lTaPY_3jIOgVWF4AaABAg",
      "date": "2026-09-04",
      "text": "Semog dapat daget bg... Buat beli pempes anak bg",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "74b897629757ec03",
      "eventId": "auto-f4bec4feaee4218a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxkP3FZnuzAKWq0zNZ4AaABAg",
      "date": "2026-09-04",
      "text": "Smoga  dilipat ganda kan bang reziki nya,, amin yrb👍",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "2ad83a7ef39ff586",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-39e3ee82ed6b4ef2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxkrszZHvpY2eYBLpN4AaABAg",
      "date": "2026-09-04",
      "text": "Sudah paket lengkap bang",
      "url": "https://www.youtube.com/watch?v=I3tnpcysM-Y",
      "engagement": 0,
      "id": "0f8d65ebdd55915e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-88503d64d16e9423",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy6xKUpP1YgZLJGWm94AaABAg",
      "date": "2026-09-04",
      "text": "Sy mau dana kaget buat beli  beras",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "eb2bd48ccce4736d",
      "eventId": "auto-b48e17b4b58de86f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNOPuUVytgs4gxuEV4AaABAg",
      "date": "2026-09-04",
      "text": "Terimakasih Desy Ratnasari semoga pemerintah menghapus pinjol baik legal maupun ilegal . Kasihan rakyat miskin",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 31,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 60.5
      },
      "id": "81e1597c41cb6e11",
      "eventId": "auto-9e8e57cd6848a017",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBweIiyzn84GXhK-x4AaABAg",
      "date": "2026-09-04",
      "text": "Terus kalo udah gk ada duit,mau dibayar pake apa,?\nMalah suruh milih²\nTetap galbay tunda bayar,fokus dulu cari uang untuk kehidupan,\nJangan gali lubang yang ada akan hancur dan mati",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 1,
      "id": "a5274a1b67d71f04",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5404c2a086f4c3c8",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyY328L0kJ7Bp89s1l4AaABAg",
      "date": "2026-09-04",
      "text": "lumbung dana ada dc lapangan infonya di jogja bang ..",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "a3d4f84c970d143c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-148482310d23be55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgykvzdHimvTRmy8SAJ4AaABAg",
      "date": "2026-09-04",
      "text": "sangat bermanpa\"t bang konten nya",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "f2e0b21c28b7dbbc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-43695e59928d43c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw74JJ9uSP4sdC2OwB4AaABAg",
      "date": "2026-09-04",
      "text": "singkat padat cepat",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "972c42a02562b756",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-238ab09d125991bf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzhaZkEALjaGGQ_IKB4AaABAg",
      "date": "2026-09-04",
      "text": "ulang nya sdh lumas",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "b0a4f265a8f731ce",
      "eventId": "auto-9c17c91d72f8f198",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyksqnXEc-DseGtgrB4AaABAg",
      "date": "2026-09-04",
      "text": "yang katanya negara agamis pinjol riba dibiarkan leluasa, satu kata MIRISSS",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 15,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "e5658c5250490092",
      "eventId": "auto-883490ac14f05759",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz68DoTLlULOCY63Ut4AaABAg",
      "date": "2026-09-05",
      "text": "1,5 tahn galbay julo 15jt Alhamdulillah belom pernah ada dc, cmn teror telp tiap hari",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 19,
      "id": "e1909fe25675d1b4",
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b1ed1c0ef848e872",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzrPVTo9l0YU2MKevp4AaABAg",
      "date": "2026-09-05",
      "text": "Alhamdulillah.. hidup tenang tanpa utang,, memang kalo bicara butuh tentunya semua orang butuh,,,akan tetapi bagi saya meskipun butuh tidak berani pinjam ke lembaga Ribawi karena diancam langsung diperangi oleh Allah dan rasulnya QS Al-Baqarah ayat 275-276 ngeRIBAnget ancaman nya.",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 1,
      "id": "3f255705215f35c4",
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bca1a92638a1fe49",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyOTWW0UEWrA9kVMx4AaABAg",
      "date": "2026-09-05",
      "text": "Bang mau dana kaget bang buat beli baju sekolah anak bang",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "1c10d18815b68bab",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8eeaf64f74a6e5c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxRCHfob5NkSHtSsjp4AaABAg",
      "date": "2026-09-05",
      "text": "Bg saya nga pernah dapat dana kaget.",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "9c39b1c13f96c07a",
      "eventId": "auto-ae2c034e8b2d20cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "gp67dho9oUo",
      "date": "2026-09-05",
      "text": "DATA BUSUK CAIR?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 17870,
      "id": "3ac34a787cbe5377",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d4269488262916e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzpAstw33tHicaxsSN4AaABAg",
      "date": "2026-09-05",
      "text": "Dc wa blokir aja wa ngapain di bls chat nya.tlpn abaikan aja.fc datang sedia kopii  & kue.kita siap besi di pinggang klu FC ngamuk tinggal sikat aja.😂",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 10,
      "id": "3df64a205d001e62",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a152136b18dfc334",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwEwmUOEORUuhg9-Kp4AaABAg",
      "date": "2026-09-05",
      "text": "Hadir bang",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "fe95b4a9506bc629",
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
      "externalId": "Ugzf-2175CCyVGF4Kvt4AaABAg",
      "date": "2026-09-05",
      "text": "Jgn ada kata damai mba lanjut trs sampai ditutup aplikasinya",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 23,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "b35bf5cbeb9f9cba",
      "eventId": "auto-6e01ea6078087dba",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyaEE1rdh1_E5GR9Vt4AaABAg",
      "date": "2026-09-05",
      "text": "Kapan sih pinjol2 ini di hapuskan dari NkRI",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 13,
      "id": "d80b1c57b180b58a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-948b4bbd95fdd864",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzPnxaRYWj-L6ZZXOd4AaABAg",
      "date": "2026-09-05",
      "text": "Kawal smp tuntas gaes. ❤",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "e5ea7dad43534585",
      "eventId": "auto-c5fb3b81500f287d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwREuLRG8FXa-1bJ054AaABAg",
      "date": "2026-09-05",
      "text": "Lagi butuh 1,5 untuk pengobatan ibu di rumah sakit bismillah 😌🙏🏻",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "924fc3dbe06f1d86",
      "eventId": "auto-6f86eaf8294699d6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgweweIeEMzeKmafyep4AaABAg",
      "date": "2026-09-05",
      "text": "Lumayan buwat pulang kampung",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "1b6e6da97aa5f709",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-febdac5b8f37ec69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy5DSQ_NfHimGOlSaJ4AaABAg",
      "date": "2026-09-05",
      "text": "Masyarakat harus mendorong pemerintah untuk menghapus pinjol di seluruh indonesia",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 30,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4b0f16d656a4d915",
      "eventId": "auto-0c6356ee4e8b9d7b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwb6LSYttQQfsk3Dap4AaABAg",
      "date": "2026-09-05",
      "text": "Mau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 147,
      "id": "9c881d6c128a505a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f7f8a763928d2fc2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw_37O0FB1x8M1VXy54AaABAg",
      "date": "2026-09-05",
      "text": "Mau dana kaget  buat bayar utang gara gara penipu 😢",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 1,
      "id": "386a8178fe8c6dc7",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-58e263ec36340760",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwKUdZW6exXUfUVBAp4AaABAg",
      "date": "2026-09-05",
      "text": "Sehat selalu paduka",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 2,
      "id": "497dbcce704e914d",
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
      "externalId": "UgxAVIdXy82sUUsyxWV4AaABAg",
      "date": "2026-09-05",
      "text": "Semoga dapat, uang nya untuk sekolah anak",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "cdb34d829b60bb47",
      "eventId": "auto-41ffeada4fe3e26f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzOYal-oaMpv3ek2m14AaABAg",
      "date": "2026-09-05",
      "text": "Semua pinjol legal berbahaya, hati-hati gais.",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 20,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 46.5
      },
      "id": "3dc73bae1c1f56dd",
      "eventId": "auto-f80636c582e8bb71",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEmSEtErOVYFwZxXt4AaABAg",
      "date": "2026-09-05",
      "text": "Siap hadir, semoga bisa membantu kami yang lagi dalam situasi bencana gempa bumi di flores NTT",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "cc157404c04c1974",
      "eventId": "auto-f600ab58c7734211",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxHEA_r1aImgPsH8Vx4AaABAg",
      "date": "2026-09-05",
      "text": "Tampar balik mertua mu itu",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "10f3f3863551045e",
      "eventId": "auto-197451020a69fa55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzU9Kxgcn8Bezd6Qxt4AaABAg",
      "date": "2026-09-05",
      "text": "Terimakasih pa informasi nya sangat membantu sekali",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 3,
      "id": "def9a4f14efa0234",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2531318298587d65",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "i7YIRWONZ0k",
      "date": "2026-09-05",
      "text": "WAJIB BAYAR POKOK BIAR AMAN!! NASABAH DIHIMBAU JANGAN GEGABAH!",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 21412,
      "id": "1823bc887306d320",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2e30ee09f8ade1cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjLFiHf5Vnh-mazHx4AaABAg",
      "date": "2026-09-05",
      "text": "bismillah semoga rejeki nya🫰",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "0db057effef71ffe",
      "eventId": "auto-5b14202c15ae1435",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzXBOpE5hIZpl-B_xJ4AaABAg",
      "date": "2026-09-05",
      "text": "jangan mau damai kak.",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "a4704a5eaa268ae3",
      "eventId": "auto-ac7e7126e18914c6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwPQv2Vj8PXKY0iAx54AaABAg",
      "date": "2026-09-05",
      "text": "jgn pernah takut sama ancaman desk call pinjol...itu hanya anak anak ingusan yg otaknya g punya skill apa apa .....",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 22,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 60.5
      },
      "id": "2d4553cbeed14321",
      "eventId": "auto-6e477725bbac8cd1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyvlEyEPx5AcaMMTGN4AaABAg",
      "date": "2026-09-05",
      "text": "kalau kakak maafin mereka itu kakak orang paling bodoh, sudah nama baik di hancurkan masa kakak maafin dengan gitu saja, wajib buat pinjol2 itu tutup semua\npinjol itu wajib tutup itu tempat boss2 scam/judol cuci uang, jadilah perusahaan berkedot pinjol supaya mereka mudah cuci uang",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 15,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 65.4
      },
      "id": "e3f6b7306a3e8c28",
      "eventId": "auto-1c1a8d5c5bf4a9f2",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy_XSdz5uwAYBfj83R4AaABAg",
      "date": "2026-09-05",
      "text": "langsung laporkan polisi aja utk proses hukum spy pinjol2  ini tdk seenaknya saja, kalo perlu berantas pinjol2 yg meresahkan rakyat",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "17f2a9cfcd53cb56",
      "eventId": "auto-4b10f2586eeb6639",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxuauC3uiNjeux5Zrh4AaABAg",
      "date": "2026-09-05",
      "text": "mau daget nya plisss buat kebutuhan sekolah saya sama adekk 🙂",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "4e6aa716953143d8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-87235cc031e95b97",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxctKjpkv3rhepLYyB4AaABAg",
      "date": "2026-09-05",
      "text": "mau dana kaget buat bantu pembangunan masjid",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "e191a0c11b305082",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8c693319816ae5b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy0zRbgvrF2yN5yllZ4AaABAg",
      "date": "2026-09-05",
      "text": "terimakasih infonya bang",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "c49a174559c8b531",
      "eventId": "auto-99277a78e8c2fb98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw0HY0lx5fZoNpRke14AaABAg",
      "date": "2026-09-05",
      "text": "🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 0,
      "id": "9389830e814abd7b",
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
      "externalId": "UgwjwZGctfxvwn7JHO94AaABAg",
      "date": "2026-09-06",
      "text": "Allhamdulillah... 54 jt lunas pinjol q bayar semua... Tenang Wes.... Hutang Yaa bayar",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 0,
      "id": "c07a656bdaa512f2",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-50e1c6825b8d8a9f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz0UvHTiTkrbFfj8sl4AaABAg",
      "date": "2026-09-06",
      "text": "Astagfirulah hal adzim ya ALLAH ya robbi, melihat zaman sekrg ngeri, lebih baik zaman dulu, KTP data diri kita bisa disalah gunakan...\n\nLebih baik PINJOL di hapuskan saja, agar tidak ada lagi masyarakat yg di rugikan",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 44.4
      },
      "id": "e5d3e57c99b82559",
      "eventId": "auto-0d5f38a49fc263d1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzxGXwGykwmkZl99xR4AaABAg",
      "date": "2026-09-06",
      "text": "Berbahaya bagi orang yg masih takut",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 0,
      "id": "016a51faf2f1be20",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3688e5e167029df5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx9sXvZhsIRgQqSxB14AaABAg",
      "date": "2026-09-06",
      "text": "Binjol merusak anak bangsa indonesia, disalah gunakan penipuan",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 67.5
      },
      "id": "360704cb02b95021",
      "eventId": "auto-aa7bc64c8ed7adc5",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw-C0qB2sqIia72F2t4AaABAg",
      "date": "2026-09-06",
      "text": "Bismilah buat pulkam udah 8bln belom pulkam🙏🙏",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 1,
      "id": "b5866873c98c3348",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-243a2b1ac0362e3e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzjeXpprxDFb70wawZ4AaABAg",
      "date": "2026-09-06",
      "text": "Bismilah, mau dong ka buat bawa anak ke dokter spesialis",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "82fcb0ffa16eb30b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c38de6dd4a5af52",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxAdwgy4SADROoz5PJ4AaABAg",
      "date": "2026-09-06",
      "text": "Bismillah semoga saya bisa mendapatkan giveaway ini buat tambahan modal usaha jajanan...🎉",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "2d403ce4c47cf357",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6ee0cc91a3421b93",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDu4hzLBRZpUdeQFF4AaABAg",
      "date": "2026-09-06",
      "text": "Cukup 1 kali gua pinjol jera.\nPinjem 300 bayar 788 Alhamdulillah udah lunas.\nTiap hari coy di spam telpon/ chat berasa kena teror",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 0,
      "id": "9efc7142954dcd9b",
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0644795830c2ffd7",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzU-WfiU8ZqNkDIur94AaABAg",
      "date": "2026-09-06",
      "text": "Di pencairan tidak muncul potur nya bagaimana",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "3ed936459baad411",
      "eventId": "auto-17966e28076d97b3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyehSSpKBZEyPYp4RN4AaABAg",
      "date": "2026-09-06",
      "text": "GALBAY selamanya...✊️",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 6,
      "id": "85c3f4f8ebc7d920",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c855a5cd5404b9b3",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw6EpTzANfk_paBvtV4AaABAg",
      "date": "2026-09-06",
      "text": "Hadir",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "38411118d66ce753",
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
      "externalId": "UgwXTT5tn1-hyrZnYqB4AaABAg",
      "date": "2026-09-06",
      "text": "Kalo mau tolong korban pinjol, tolong mas yg punya Chanel, komandoi utk buat #petisi se Indonesia tuntut #Pemerintan #PresidenPrabowo BUBARKAN LARANG #PINJOL DARI NEGARA INDONESIA, negara dgn penganut agama Islam terbesar di dunia dan\nFalsafah #Pancasila yg sgt sarat nilai2 luhur \nSementara Pinjol TDK sesuai dgn Pancasila pun hukum Islam, dimana melakukan #riba sama dgn memerangi Allah dan Rasulnya \n#DPRRI #DPRRIKOMISI3 #DPRRIKOMISI13 #MUI #LPS #BANKCENTRAL #OJK",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 0,
      "id": "58b6a7927f20f357",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2e56081c1653e907",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzFib_QLVFmGzi_Kxt4AaABAg",
      "date": "2026-09-06",
      "text": "Maju terus Brantas pinjol krna uda meresahkan masarakat.",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "daf84e5113e00085",
      "eventId": "auto-619eb851908d1dcc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhqGXoou2EyjwxFYB4AaABAg",
      "date": "2026-09-06",
      "text": "Makasih bang tutor nya JD ga stres lagi mikirin hutang riba pinjol yg bunganya ga ngotak mending di galbaykan saja urusan akhirat gimana kedepannya aja daripada bundir dan ngelakuin yg tidak tidak mending galbay",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 9,
      "id": "0ab434ec74665bb8",
      "sentiment": {
        "risk": 78.7,
        "label": "negative",
        "negativeWeight": 4.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-441b6de1ba70bada",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGs81wkDG2K8-uCYl4AaABAg",
      "date": "2026-09-06",
      "text": "Mau dan kaget",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "512ac021fdd20361",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a64f5383a80d4c0f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwipPKo14am9Q-zFDV4AaABAg",
      "date": "2026-09-06",
      "text": "Mbanya keren ya, ngomongnya kyk kereta antar propinsi, teruuuussssssss lancar ngomongnya... kalo ama yg ilegal, lapor polisi ka",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 4,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 53.5
      },
      "id": "9db724b4d62402bb",
      "eventId": "auto-b6e71c3c6d96ef12",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJbKvWxlyPF0QCjxF4AaABAg",
      "date": "2026-09-06",
      "text": "Pinjam yuk ada dc lapanganya saya sudah didatangi bang",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 3,
      "id": "e7fddf940dd162c8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1047a4cb1ba67e6d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzr0TbxmDOExKKWTut4AaABAg",
      "date": "2026-09-06",
      "text": "Rekening orang bisa diblokir dengan cepat, media2 yang menyebarkan fakta bisa dibungkam secara instan.\n\nHanya pinj0l dan jud0l saja yang dibiarkan merajalela. YTTA",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 0,
      "id": "0aa786d3ba994aca",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4c8f0605ee7fb9ac",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "Vop6tWXWlC8",
      "date": "2026-09-06",
      "text": "Resmi Ojk ✅ Pinjam Saldo DANA Tanpa Dana Paylater Dana Cicil | Cara Meminjam Uang di Dana Tanpa KTP",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 20049,
      "id": "9276760ac8ebf10c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8bdf9752b94a6466",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxOxI7lQ6q3h_35lEJ4AaABAg",
      "date": "2026-09-06",
      "text": "Setuju galbay nasional, pinjol itu penjahat",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 4,
      "id": "5bb1c7b2de070eb0",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4e90bc623d827bbd",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzXk_8QFhj0WW1PFZd4AaABAg",
      "date": "2026-09-06",
      "text": "Wahana kelilit pinjol bkin pusing",
      "url": "https://www.youtube.com/watch?v=D_-oKCe5yds",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "d4ee98100dc9d67e",
      "eventId": "auto-f84321487a7242bb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_dsfOYU9eO5R55Wp4AaABAg",
      "date": "2026-09-06",
      "text": "bang akuu udahh bang",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "739952d59804c2ca",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-10cebc6f53159e1c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwSlnHTP-BfxO-G9Ct4AaABAg",
      "date": "2026-09-06",
      "text": "bismillah buat istri lahiran🙏",
      "url": "https://www.youtube.com/watch?v=_bUdAQLM5sg",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "82a73df0ced60e57",
      "eventId": "auto-3d463814998f372b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyxf6R1_y3SD_XdnvN4AaABAg",
      "date": "2026-09-06",
      "text": "bissmillah , mau bang buat kebutuhan aku dan anak anak 😊😊🙏",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 1,
      "id": "867a1286e657c808",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b9b9bf7fdcf172c0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwNuQ5DZn2Z_t6ZsCh4AaABAg",
      "date": "2026-09-06",
      "text": "hadir paduka raja",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 0,
      "id": "735260c2cb7038b1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-de30f9b9ed65fc3e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJrsMvocIx0bOyUNh4AaABAg",
      "date": "2026-09-06",
      "text": "liat ini gua gara gara ketipu 2 juta anj duitnya d ambil cicilan nya gua yg bayar",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 3,
      "id": "14f227d8eeb94cd6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3e54e0794b7f5be0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyI4flhDOG22L_Lmrx4AaABAg",
      "date": "2026-09-06",
      "text": "semoga dapet bang",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "335257f6278efcb1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-141e944aecd60b1a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyt5-QneeF9xobeqiR4AaABAg",
      "date": "2026-09-06",
      "text": "seru liatin orang pd bangga galbay\n\nlanjutkan lanjutkan\nhiburan yg sangat menarik",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 0,
      "id": "625239db9de96e33",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2fd317ddea1f8f05",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzgwfo4Dw3S20AdroZ4AaABAg",
      "date": "2026-09-06",
      "text": "tolong bang bantu bang buat makan bang sekarang sama besok bang 🙏",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "2df8f902d2ce239b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e37816c99b14f327",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxWjDvBFP_76rtM7NF4AaABAg",
      "date": "2026-09-06",
      "text": "yaa Semua Pinjol itu adalah app Scammer, toh mereka minta allowed contract hp sampe galeri 😂",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 8,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 65.4
      },
      "id": "686009bf00706db8",
      "eventId": "auto-63d25f876d134915",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "4pQqPW5swso",
      "date": "2026-09-07",
      "text": "Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 30976,
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
      "externalId": "Ugx-hglYOVprdAflDEF4AaABAg",
      "date": "2026-09-07",
      "text": "Bang bukannya indosaku ada DC, itu kemarin yang viral di Semarang karena prank damkar saat nagih",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "dd35d2f2dcf456b8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d109f357bb99258f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNHJFACKkzWbUBFft4AaABAg",
      "date": "2026-09-07",
      "text": "Baru kali ini ada anggota dpr yang kritis dengan ketidak becusan ojk dan komdigi yang diem dan tutup mata dengan pinjaman onine yang  merusak ekonomi rakyat kecil",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 44.4
      },
      "id": "58c2bb8ad9cb1352",
      "eventId": "auto-2d1d6d85d26fb514",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxmGvAPYUiZJCm0Nnp4AaABAg",
      "date": "2026-09-07",
      "text": "Bismilah buat nambah nambah usaha🤲",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "970163c073070d1d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-252fd38ab6786d5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy2pUSzx8e-V8TrZmZ4AaABAg",
      "date": "2026-09-07",
      "text": "Bismillah buat nyambung hidup",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "9956f887651bf92d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1381beadbb4dc681",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzkEnP__LfauvRZl7d4AaABAg",
      "date": "2026-09-07",
      "text": "Bismillah mudahan dapat",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "57a8bf93bfa5576e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9a8e57dd7e8ac05c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyqi00B_bGjqCdX0FR4AaABAg",
      "date": "2026-09-07",
      "text": "Bismillah.buat kebutuhan anak",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "113e491c839df886",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53db7967c808a185",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyc90REt8yCPFkds0R4AaABAg",
      "date": "2026-09-07",
      "text": "Gue mau minjem di tolak mulu",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "12fa19e05fa9e4b5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1419b77426aa9843",
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
      "externalId": "Ugzhu7CpIWWi9QE8AOx4AaABAg",
      "date": "2026-09-07",
      "text": "Hadir bos",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "dfa7ac7dcf69a4bb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-508c16060e97f322",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJQeNkAE8uhNgf1ZJ4AaABAg",
      "date": "2026-09-07",
      "text": "Ini akan lebih kejam lohh ketika RUU perampasan aset di sahkan dan lentera2 yang dulu galbay itu akan masuk kategori pidana atau harus di bayar walaupun di cicil tidak apa-apa sebab mereka sudah bergabung dengan pusat alias sudah bergabung dengan pemerintah. Nah lohh kan kata saya juga apa",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 0,
      "id": "9340891eef8eaa75",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-880089feef53b33c",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyAgrmj8I7TCNubcFt4AaABAg",
      "date": "2026-09-07",
      "text": "Itel",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 0,
      "id": "6821754a6edd1177",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cf9e08d09cab8d8f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzu_TzzSV7lZvm8m3p4AaABAg",
      "date": "2026-09-07",
      "text": "Jangan damai mbak sumpah , kalo bukan mbak nya yang spek up siapa lagi",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "530cb65897a0d27b",
      "eventId": "auto-0c03d0751eebc7cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwR78-L7I2rgt06Y2l4AaABAg",
      "date": "2026-09-07",
      "text": "Kmren di rapat DPR Desy tarnasaei sudah memprores keraa kemendigi OJK dan yg lain karena segera bereskan pinjol ..karena hanya menjebak rakyat ..mungkin sbtr lagi pinjol akan di tehasin masalah bunga teror dan DC \nSemoga bubar saja",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 5,
      "id": "c693d29dccb3a8b7",
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6465acb5cd92a524",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugze5wZxUJYZAdjeP9p4AaABAg",
      "date": "2026-09-07",
      "text": "Lahhh.. Ini tambah miris, nonton video ini kok yg muncul malah iklan pinjol Adapundi & Rupiah cepat? Youtube gimana ini? Lagi bahas kekacauan Pinjol malah nongol iklan ngajak minjol 😅",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "4a3029ea1422f5a4",
      "eventId": "auto-9e515f2044ae017e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzAzwqBRC-pl-VxRcR4AaABAg",
      "date": "2026-09-07",
      "text": "Laporkan,pencemaran nama baik kalo diteror kaya gitu,pidanakan sekalian orang nya",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 4,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 87.1
      },
      "id": "a4c32c0bcf259cd2",
      "eventId": "auto-d08e1fc5b15f6580",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxeGVnYm0aIbCPgHVR4AaABAg",
      "date": "2026-09-07",
      "text": "Mau buat jajan",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "238a3bcc0b9737c0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77b1ac30765d1369",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxC-nd864zrMFDFIed4AaABAg",
      "date": "2026-09-07",
      "text": "OJK sialan mau untungnya aja pdhl udah bnyk korban",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 61.9
      },
      "id": "45baa3ddcee0c206",
      "eventId": "auto-ababea04f15e9077",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyfTsxmGd25AtN3tQp4AaABAg",
      "date": "2026-09-07",
      "text": "Sehat selalu bang..",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "3d603904afa8c9f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d781c3d3009a75f2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy7Ke1NH8s3bb5xTRl4AaABAg",
      "date": "2026-09-07",
      "text": "Selalu memantau bang",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "db190166ccbdd81b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8ef4f95503bfb939",
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
      "externalId": "UgwvONzgrYI-Kl6u9oJ4AaABAg",
      "date": "2026-09-07",
      "text": "Semoga sukses selalu kang",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "ee5300f756d7803c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-69ccf52920ea38a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz92alZiloBYRDKj0B4AaABAg",
      "date": "2026-09-07",
      "text": "Tolong p polisi, sidak itu kantor kantor pinjol dan hp hp para pegawainya, selamatkan rakyat Indonesia dari bunuh diri masal. Please p polisi Indonesia, please kapolri.",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 72.4
      },
      "id": "7622bb7a37003b78",
      "eventId": "auto-3d32feedbe0b3f3f",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy-skGqb0OEArjhxMV4AaABAg",
      "date": "2026-09-07",
      "text": "bismilah semoga dapat bang",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "8adcefb4a7d96871",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-79e76a5c5cec7a14",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGD5dXiI6HxHcBPYh4AaABAg",
      "date": "2026-09-07",
      "text": "buat tambah uang berobat",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "ead115cff58c5fed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a9527d2ca3ef98e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyS68ceNSM8qXBs37R4AaABAg",
      "date": "2026-09-07",
      "text": "josjis terbukti cair nih",
      "url": "https://www.youtube.com/watch?v=gp67dho9oUo",
      "engagement": 0,
      "id": "1ffa8253a8128856",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-06b568c31f0b6274",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNvzNGeEM9eQQgDRd4AaABAg",
      "date": "2026-09-07",
      "text": "mudah\"n beruntung",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "d9239d0a6cb3a66a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77399ca9d9fcbe60",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1TGP2KSImEwWqvWx4AaABAg",
      "date": "2026-09-07",
      "text": "tutup aplikasi itu mbak \n\nharus di laporin.",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "fe9b684bf79aab93",
      "eventId": "auto-6af1631548d0ac0b",
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
      "engagement": 18713,
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
      "externalId": "UgxuJa38Aal5hQ1u0S94AaABAg",
      "date": "2026-09-08",
      "text": "Alhamdulillah bisa buat modal usaha",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "a762d8299c5f86fe",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-dcdc1ba375546025",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwvicc7ti1avQQXrhp4AaABAg",
      "date": "2026-09-08",
      "text": "Bg klw galbay di kredivo sebanyak 1jt dtg kah DC ke rumah bg 🙏",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "fd3f82836699d09f",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9888df894ae039dc",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyndoLzK3dqK70xOaN4AaABAg",
      "date": "2026-09-08",
      "text": "Bismillah abang ku",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "6c6e0645cb3ec2c6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ec125a00ebd3be17",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzfixEdDlyTEXA74Vl4AaABAg",
      "date": "2026-09-08",
      "text": "Bodoh Amat sy sd Galbay di Spaylater😂",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 4,
      "id": "f3e90af4e16a2481",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7546a9d5f1624fbf",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjqWc7tVy1wo_X8T54AaABAg",
      "date": "2026-09-08",
      "text": "Hadir",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "c35e5509cf0f6c92",
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
      "externalId": "UgzQ8iSLD-z9R-B-e9p4AaABAg",
      "date": "2026-09-08",
      "text": "Hadir bang",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "88fc9acc3ccb4b72",
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
      "externalId": "UgyOTX-Zya5aV60NNQ14AaABAg",
      "date": "2026-09-08",
      "text": "Hadir bang bismilah",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "f2aeb8bc458f1b33",
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
      "externalId": "UgxivXdwU8Nfo2tW-m94AaABAg",
      "date": "2026-09-08",
      "text": "Hadir bang sehat selalu",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "a883cddf2840832f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-044f845a2a2ebee0",
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
      "externalId": "Ugz4fvQjgGb1XeUoi5F4AaABAg",
      "date": "2026-09-08",
      "text": "Hadir bang🎉",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "9d72f6712aa0c8c1",
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
      "externalId": "Ugw5XL8zcI4EWk8hP-d4AaABAg",
      "date": "2026-09-08",
      "text": "Hadir bng",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "690abd2cdc34ea21",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2def466793d8e125",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxNEkeKiHKb8pUesjN4AaABAg",
      "date": "2026-09-08",
      "text": "Hadir bosqu",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "aa3f9fef822ada4f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e8d89eac32cf6cf9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwz3F9nyH9lliKiPsB4AaABAg",
      "date": "2026-09-08",
      "text": "Hadir dari sulawesi",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "fc720fec8d475465",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c856f82406b2ca3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDZP2jBnc_JwOav-F4AaABAg",
      "date": "2026-09-08",
      "text": "Hdir",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 1,
      "id": "78b4c213cb71f0bd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-91ca8e4daf9f057a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1LGmBSZUEB69MhzF4AaABAg",
      "date": "2026-09-08",
      "text": "Hehe makin banyak aja pinjol..stop jangan tergiur sama pinjol..",
      "url": "https://www.youtube.com/watch?v=4TPuD3T0BkA",
      "engagement": 0,
      "id": "8487d654868a41ad",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1534d8f4144e1339",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHuX3Kb8llJKxavnB4AaABAg",
      "date": "2026-09-08",
      "text": "Makasih teh desi..mengingatkan rekan rekannya bahwa akan ada hisap diakhirat yg menanti kalau mereka zalim terhadap masyarakat.",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "aa6d13d4d6999be0",
      "eventId": "auto-62618f74474bd105",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwq5ypy6gFpks8ZGkh4AaABAg",
      "date": "2026-09-08",
      "text": "Mantap bang quu",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "e8fd6815d6746c78",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-45e267d8738f8117",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwYxwbHoEhIpWZ-Npl4AaABAg",
      "date": "2026-09-08",
      "text": "Selalu hadir menyimak bang",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "2cb8afb95aec3b80",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee75263355bc793a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJ3or84P7zp1XZeEZ4AaABAg",
      "date": "2026-09-08",
      "text": "Selalu nyimak bos ku",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "c41574a0c8cfd3e8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7976630e66711795",
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
      "engagement": 27,
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
      "externalId": "Ugzvc0hffPgWxki3uu14AaABAg",
      "date": "2026-09-08",
      "text": "Semoga saya yang menang Buat bayar hutang",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 1,
      "id": "37c66bf7a5364673",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-379563b4a8f58f12",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx3wiC6nQJZgpaMWuZ4AaABAg",
      "date": "2026-09-08",
      "text": "Sepertinya admin blm pernah merasakan galbay atau minjol ya...",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 0,
      "id": "63fbd828c4c5d02d",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7bf8cb8a395a0172",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyth81imaJDSYpxlEx4AaABAg",
      "date": "2026-09-08",
      "text": "Sudah masuk ancaman non militer... Negara harus tegas berantas",
      "url": "https://www.youtube.com/watch?v=OFBgGKQ6FrY",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 60.5
      },
      "id": "4fb23576c7e2fb9d",
      "eventId": "auto-d1dd791fc2452975",
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
      "engagement": 34578,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
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
      "externalId": "UgzFH31m3G_h2XkGL4R4AaABAg",
      "date": "2026-09-08",
      "text": "Tampar balik mba... 😅",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "b1376521dee051e7",
      "eventId": "auto-9016d73e7f739214",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzq9iq_mWO8i-KgpJ94AaABAg",
      "date": "2026-09-08",
      "text": "Utk bubarkan Pinjol,,,,kompak semua nasabah Galbay sj,,,,,lawan & bangkrutkan perusahaan Riba....",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 0,
      "id": "7f2be2900d6bdc57",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-46cd1e9a30ea5234",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgywMEAjFWR54sqUyah4AaABAg",
      "date": "2026-09-08",
      "text": "bismillah",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "181826706a1ea643",
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
      "externalId": "UgwAFdNIBVbffYDVbpl4AaABAg",
      "date": "2026-09-08",
      "text": "hadir bang \n\nyahhh modal usaha",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "3437c699d955f94d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc86a06ea7319ff4",
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
      "externalId": "UgxDLwqM3v5YIIT5Sit4AaABAg",
      "date": "2026-09-09",
      "text": "Bismilah dapat buat biaya orang tua lagi di rawat rs aamiin",
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
      "id": "b6eb99d7308285df",
      "eventId": "auto-546810e54c1dff1a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzOv2AzfALRlCrOU9N4AaABAg",
      "date": "2026-09-09",
      "text": "Bismillah semoga dapat uang untuk lunasin hutang",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "42876b7618c96679",
      "eventId": "auto-6dc04d302020794e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzZOr0q-uNwYkNYkMR4AaABAg",
      "date": "2026-09-09",
      "text": "Bismillah yaa allah untuk buka usaha",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "6c5bb4b4ff082d0b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1dc782c366590ae5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwMGObiZjzdM59MiG94AaABAg",
      "date": "2026-09-09",
      "text": "Buktikan",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "36ead4567bcac930",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5dd4ef91ff5d5d5b",
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
      "engagement": 51406,
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
      "externalId": "UgxtkKTtsh6DRsVE3nB4AaABAg",
      "date": "2026-09-09",
      "text": "Hadir bang buat berobat",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "b42ab414dcb1f05e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b9dfeb4e62d6db17",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyZ1TxrzYsgCfs_WZ4AaABAg",
      "date": "2026-09-09",
      "text": "Hadir baru gabung bang",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "93f2c451e160b3df",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-42bbc8acffeb9edf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwiCyaOcRfw54wPdGl4AaABAg",
      "date": "2026-09-09",
      "text": "Hadir bosku",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 0,
      "id": "0313cb819cbc5f1f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a3d58254133fec59",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzvUDrzk5pcs7PVF0l4AaABAg",
      "date": "2026-09-09",
      "text": "Kiwiw kiwiw siap buat modal dagang bos",
      "url": "https://www.youtube.com/watch?v=VUlpKSWA59g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "68dbcd6869bceb9c",
      "eventId": "auto-ce1b8816bba77cbf",
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
      "engagement": 124,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "09a6b0269a9a664d",
      "eventId": "auto-a2c6befd9f888363",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhZU51YHE5OhKEq7N4AaABAg",
      "date": "2026-09-09",
      "text": "Oh kamu juga pengguna pinjol buk? 😅 bisa tau dri ini saya",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 0,
      "id": "802e598c12d147e9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ab16bedb098cb2d5",
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
      "engagement": 40045,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
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
      "externalId": "UgyONoxybr3Om8RYvcl4AaABAg",
      "date": "2026-09-09",
      "text": "Pinjol tdk usah di byr,,,Galbay sj,,,,hancurkan  pinjol penjahat Rentenir.....",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 0,
      "id": "0e3c91327e57af0e",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-66ffeb95e6ef204b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
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
      "externalId": "UgzKrPaj0D5JGy08p4V4AaABAg",
      "date": "2026-09-09",
      "text": "hadir",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "a861148ec71130e1",
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
      "externalId": "UgydyBty68ZorN_nMtd4AaABAg",
      "date": "2026-09-09",
      "text": "hadir ..semoga dapat buat beli sufor anak.",
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
      "id": "77aa23793a18abc2",
      "eventId": "auto-9887d99bb7c6a55f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzfhjqCEkR1RDc-WAV4AaABAg",
      "date": "2026-09-09",
      "text": "hadir bang",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "6b38d88671b57563",
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
      "externalId": "UgxGxOIJsrjCJpjqnY14AaABAg",
      "date": "2026-09-10",
      "text": "Bandung hadir\nBismillah semoga beruntung buat tambahan anak operasi mata",
      "url": "https://www.youtube.com/watch?v=zc3z5UAHDuY",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "7950c0373142e98f",
      "eventId": "auto-00efaa43a70c1233",
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
      "externalId": "UgyUfQIyBaZA3wxvoYl4AaABAg",
      "date": "2026-09-10",
      "text": "Baru ja tau vidio ini baru ja subscribe  semoga aja dpat rejeki .slam dr kediri jawa timur",
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
      "id": "e0672cca45aefe87",
      "eventId": "auto-53a8ac3560e148d2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxiHDfSoeiptoUWUAd4AaABAg",
      "date": "2026-09-10",
      "text": "Bismilah semoga dapet buat daftar kerja",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "c751b8bc975615c0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5c397a73fb974552",
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
      "externalId": "Ugzho2eQCqmgI4LhDSt4AaABAg",
      "date": "2026-09-10",
      "text": "Bismillah semoga beruntung buat berobat bapak yang lagi sakit❤",
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
      "id": "99029f0363ecb41c",
      "eventId": "auto-437fae158f5dceb1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxHtPSrEa2bRguF8lJ4AaABAg",
      "date": "2026-09-10",
      "text": "Bismillah semoga dapat , lagi butu bangt udah bberapa bulan gak dapat kerjaan 😢",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 1,
      "id": "d2f3a09d2e1b1a52",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-021c494a65ce04a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgygJppkFi92c-2Iq094AaABAg",
      "date": "2026-09-10",
      "text": "Bismillah smoga calon anakq dsni rejekinya amin",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "f2bf29ef2ef7db88",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-16ef7f3f38ed4686",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXFYvuGccq28PbByt4AaABAg",
      "date": "2026-09-10",
      "text": "Bismillahirrahmanirrahim semoga keciduk",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "7735ee95d6d6615a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7170d2dd73050571",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwdVn0I38sRO-R5mwh4AaABAg",
      "date": "2026-09-10",
      "text": "Kok saya nggak ad bng .ad ny dana cicil",
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
      "id": "2776ccf618b05705",
      "eventId": "auto-e0852db0d92407eb",
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
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
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
      "externalId": "Ugw__4LU7OWHLa5PrDx4AaABAg",
      "date": "2026-09-10",
      "text": "Nyimak .....lagi butuh 🙏",
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
      "id": "5bf082b203a4eec2",
      "eventId": "auto-f3a901672e1eb4ee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyk9CjvbozbAt7ROEx4AaABAg",
      "date": "2026-09-10",
      "text": "On point bgt bu desi, up kan berita2 seperti ini",
      "url": "https://www.youtube.com/watch?v=TrguyExHzSw",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "a2076139cdedbfff",
      "eventId": "auto-47c1a4e697e65682",
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
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
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
      "externalId": "UgwVb_lpXYHsE2dOtcV4AaABAg",
      "date": "2026-09-10",
      "text": "Sumsel hadir ,untuk tambahan belanja",
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
      "id": "015a74b316f0922b",
      "eventId": "auto-6cac8fcd005d8e66",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzrRsCc38tzBa8iCsJ4AaABAg",
      "date": "2026-09-10",
      "text": "bismillah semoga dapet buat bayar Kontrakan",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "54df1a0d446c95f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-030c05bf88dc33b7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZGX3x9NLxVEGlVh94AaABAg",
      "date": "2026-09-10",
      "text": "makannya buat kalian yg sibuk pinjol sana sini, usahakan di bayar sebelum jatuh tempo, galbay\" mulu klw g mampu g ush pinjol 😑 hidup udah miskin malah banyakin utang, smart people guys klw mampu silahkan, klw gak g perlu ikut\"an, ntar galbay di terror pihak peminjam, sok dramatis hadeh.",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 0,
      "id": "ef4676f1d2de173b",
      "sentiment": {
        "risk": 80.1,
        "label": "negative",
        "negativeWeight": 4.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4c16ad002efd6445",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwj90qlSja2wgC66ip4AaABAg",
      "date": "2026-09-10",
      "text": "sangat membantu bang",
      "url": "https://www.youtube.com/watch?v=Vop6tWXWlC8",
      "engagement": 0,
      "id": "96ef2c6a5d11e217",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-861dc547b137ae4c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzF5uxWiCZtzwJtYXZ4AaABAg",
      "date": "2026-09-11",
      "text": "Aamiin Shalallahu Ala Muhammad 🤲🏻..\nMashaAllah aku seneng kalo denger KA Mel baca sholawat muNjiat..aku suka ikutan baca bahkan sampai namgiiiss...karna menghayati bngt minta tolong sama Allah dan rasulnya.. rasanya kurang bnyk KA Mel 3 muNjiat pengen baca bareng 10 muNjiat gt.. MashaAllah..ya Allah kabulkan hajat kami perantara berkah membaca sholawat kepada Kekasih Mu ,, Aamiin sholallahu Ala Muhammad 🤲🏻❤",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 0,
      "id": "4744a2608916f3c5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77ab94456990efb6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzrubQQyGCey27PokF4AaABAg",
      "date": "2026-09-11",
      "text": "Abis abisann saya bang...kendaraan lenyapp",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 1,
      "id": "a33c45b350df4322",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3455fb90b6077097",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx3snlVcKNS83kQeTl4AaABAg",
      "date": "2026-09-11",
      "text": "Aku mau berangkat jum.atan bak mel",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 1,
      "id": "0baa158d4e6b075a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9d5f218c24bdddaf",
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
      "engagement": 5,
      "id": "80108510ced6941e",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a85556e7d7b2081d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyllaz2lSOgpSZ6on94AaABAg",
      "date": "2026-09-11",
      "text": "Assalamualaiku mb mel, semalam aku ngebatin dalam hati yaAllah besok anak\" Mau jajan apa aku mau dpt reseki dari mana yaAllah beberapa menit neneknya datang bawain uang 15   buat anak bertiga. Terus habis isya datng lg si OM di kasi uang 100 rb. Buat jajan maksih banyak yaAllah. Pokoknya butuh apapun di shalawatin sj. Teman\" Semua ayo semangat terus",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 17,
      "id": "ae1dea545db9694c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f2c2984845f75446",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9TTz0ELi2chLXVh54AaABAg",
      "date": "2026-09-11",
      "text": "Assalamualaikum hadir mbk mell ❤ dan semua teman pejuang solawat",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 0,
      "id": "6bbac41b7177dae2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7de061587535eda1",
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
      "engagement": 10,
      "id": "f5a9a07390407328",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ca2c0ec706921bf7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw8Mj3PWiNdsOpZZQ54AaABAg",
      "date": "2026-09-11",
      "text": "Assalamualaikum,KK Meliza",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 1,
      "id": "7eccdb287d2323e8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-261c6f8f8e774092",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwigz0jrNAWBVKEFex4AaABAg",
      "date": "2026-09-11",
      "text": "Assalamualaikum. Nyimak selalu Kamel",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 2,
      "id": "96f18bf57fb1770a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f91032a4a2c918c9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw_Ud72x-XB4Q9S6-94AaABAg",
      "date": "2026-09-11",
      "text": "Assalamualaikum.. hadir kak mel.. bener kak masyaa Allah ..pertolongan Allah itu sngt dkt..😢",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 1,
      "id": "9f0094cc0e158d11",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f7a9a5577ecd4d50",
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
      "contentType": "comment",
      "externalId": "UgyiAqQUDN_qiP7pXv54AaABAg",
      "date": "2026-09-11",
      "text": "Berharap sma manusia psti kecewa tapi klo allah mngijinkan psti menang.\nKunfayakun🤲",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "ef3abd25188b98b2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f8cab8ccfc00cf63",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwiVdELdEj8AtQBMm14AaABAg",
      "date": "2026-09-11",
      "text": "Biarin utang memumpuk",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 57.0
      },
      "id": "89ac74985fa444f7",
      "eventId": "auto-e3318cc93ac9287f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1OqcUWW1C1U1IW0J4AaABAg",
      "date": "2026-09-11",
      "text": "Bismilah semoga rezeki ank sholeh buat beli vitamin +susu",
      "url": "https://www.youtube.com/watch?v=H4-nJQ89H2s",
      "engagement": 0,
      "id": "85a37c34f59b4f2c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-77db652dd9b3c2f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4wU1AnY8DpagUWQN4AaABAg",
      "date": "2026-09-11",
      "text": "E'mak dulu rajin sholawat, sholat malam, zikir, kenapa sekarang jadi agak malas sholawat semenjak ayahku meninggal setahun yang lalu",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 1,
      "id": "07886a1046bbf4bd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8f0941edf19fa3a3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxYGvMUILUVe-RUanl4AaABAg",
      "date": "2026-09-11",
      "text": "Galbay sudah setahun baru tadi wa lagi, diskon 100%, tapi saya blm ada uang",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 0,
      "id": "100da2733875b806",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-49a7ed258e3ebfee",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
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
        "modelConfidence": 0.6,
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
      "externalId": "UgzonbNamvqX7-Znhhh4AaABAg",
      "date": "2026-09-11",
      "text": "JANGAN NONTON DISINI ,, MENDING NONTON DI RAJA GALBAY  LEBIH TENANG LEBIHKUAT MENTAL KITA ..",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 2,
      "id": "19e4c4b657b59fec",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-178b9ffff38345b2",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpjKmYMAV14GGkASV4AaABAg",
      "date": "2026-09-11",
      "text": "Jangan lah gali lobang tutup lobang dlm bersholawat 🦕🦖🦎🐲🐉🐜🐜🐜🐜🐈🐈🐈🐈",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 4,
      "id": "2ea0af9b49088c16",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a29c3b625cb820bc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxigGaBbZgmKa9T3iN4AaABAg",
      "date": "2026-09-11",
      "text": "Ka mell knapa ya kalo setiap ka mell baca sholawat munjiat ini di barengi aku juga baca, hati ku bergetar airmata pun ngalir 😭\nMasyaAllah",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 0,
      "id": "949f157fca298823",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-90debbe03643d7e9",
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
      "engagement": 25876,
      "id": "f719e97fca8d5784",
      "sentiment": {
        "risk": 73.1,
        "label": "negative",
        "negativeWeight": 3.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-59f67e844402b6cb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyUr1CNzK_n0aZ49Bx4AaABAg",
      "date": "2026-09-11",
      "text": "Mohon doanya y teman\"\n1th ini saya sedang mengalami rasa abeh dalam diri saya,yg menggangu gerak aktivitas keseharianku,sudah ada satu bulan ini aku ngamalin sholawat munjiyat,sholawat jibril,adrikni,tambah fatih,\nSemoga Allah segera mengangkat rasa  aneh ini,aku bisa sehat jiwa ragaku seperti sedia kala🤲🙏🏻",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 19,
      "id": "7a3f6403c87d0a6a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e4d85b896020207a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzOugxv2a36Ym0md0p4AaABAg",
      "date": "2026-09-11",
      "text": "Saya galbay sudah 3 th ,macam macam pinjol termasuk spaylater aman aman saja ,bodo amat",
      "url": "https://www.youtube.com/watch?v=i7YIRWONZ0k",
      "engagement": 2,
      "id": "0619565001b4d69c",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3b8649e3ae563663",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
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
      "externalId": "UgyjEJMQKOSx-2e089x4AaABAg",
      "date": "2026-09-11",
      "text": "Semangat KK smogah. Bermanfaat untuk semua orang 🙏🙏",
      "url": "https://www.youtube.com/watch?v=_BwZFP9Z77Q",
      "engagement": 0,
      "id": "3143e0f8f0da849a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-46fe29cef74b5968",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyPVFIRprNO8ePipnl4AaABAg",
      "date": "2026-09-11",
      "text": "Shallallahu ala muhammad",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 0,
      "id": "00ce738f348ff28f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-526f6674958c9550",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzq0tDx9OQfiZWQCqZ4AaABAg",
      "date": "2026-09-11",
      "text": "Tampar balik",
      "url": "https://www.youtube.com/watch?v=lhRaxwidJYc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "39ed7802c97c04de",
      "eventId": "auto-54546fdf2e567feb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwQ9ER9Pcc4HYMd7tN4AaABAg",
      "date": "2026-09-11",
      "text": "Waalaikumsalam wr wb\nNyimak",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 0,
      "id": "3ecb3bc2a0635705",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6c5d4ef368940afe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGIBXLnh0glGme1zh4AaABAg",
      "date": "2026-09-11",
      "text": "Waalaikumsalam...selalu hadir❤❤❤",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 0,
      "id": "22998e4da15b5d6d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-51f4ba14dd00d5e8",
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
      "contentType": "video",
      "externalId": "oDmYctM7NGQ",
      "date": "2026-09-12",
      "text": "AZAB PENJUAL TAHU TEK CULAS NEKAD JUALAN PAKAI HASIL PINJOL DEMI GENGSI || ANIMASI AZAB",
      "url": "https://www.youtube.com/watch?v=oDmYctM7NGQ",
      "engagement": 25759,
      "id": "aeb4edbad7e52321",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
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
      "id": "dd8ee5711e097743",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
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
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
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
      "externalId": "UgwxpnuowH1UsR617Kx4AaABAg",
      "date": "2026-09-12",
      "text": "Dapat rp.1000 juara 1.dong..rejeki banget",
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
      "id": "5e69da956a82cc4d",
      "eventId": "auto-5fdcf389fb9d3cc7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw5AdiNTurYKbsby8p4AaABAg",
      "date": "2026-09-12",
      "text": "Greget banget sama cowo nya itu loh 🗿😭..",
      "url": "https://www.youtube.com/watch?v=oDmYctM7NGQ",
      "engagement": 1,
      "id": "32d1a03529caa336",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1e9c69ea64ef25cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwRLzXX-BwUoUlxQml4AaABAg",
      "date": "2026-09-12",
      "text": "Hongkong hadirr minn 🎉🎉🎉🎉🎉",
      "url": "https://www.youtube.com/watch?v=oDmYctM7NGQ",
      "engagement": 1,
      "id": "283a1d696df3ae45",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4f384c415708266a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx_uBto4z-lCGBRw2B4AaABAg",
      "date": "2026-09-12",
      "text": "Johnida  hadir from Malaysia",
      "url": "https://www.youtube.com/watch?v=oDmYctM7NGQ",
      "engagement": 2,
      "id": "d1a0c77d892acd34",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac06dbaba08d84b3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9KXYnoL-A4ssFmZJ4AaABAg",
      "date": "2026-09-12",
      "text": "Kak dpt wa dari gopay katanya mau kerumah pdhl cuma 400 apa BNR kak mau dtng",
      "url": "https://www.youtube.com/watch?v=43nm9rFHvTo",
      "engagement": 0,
      "id": "6085adb6dd73d15e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-da743ef8c2c2b2f6",
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
      "externalId": "Ugxr39oJrMfVCnMm6yZ4AaABAg",
      "date": "2026-09-12",
      "text": "Saya barusan tak coba GK keluar limit nya bang",
      "url": "https://www.youtube.com/watch?v=CQbXPnuA7IA",
      "engagement": 1,
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
        "modelConfidence": 0.6,
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
      "externalId": "UgzbqNxI4GVsdjVivYB4AaABAg",
      "date": "2026-09-12",
      "text": "Sekali lagi ya typo nya ituloh GK ketinggalan...…🙏",
      "url": "https://www.youtube.com/watch?v=oDmYctM7NGQ",
      "engagement": 0,
      "id": "8b5eddb3a0e8e368",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cbe3cf6d147a2870",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyzSKfvs_sdOXV4fQt4AaABAg",
      "date": "2026-09-12",
      "text": "Semoga channel ini dapat berkembang lg",
      "url": "https://www.youtube.com/watch?v=4pQqPW5swso",
      "engagement": 1,
      "id": "7c37c3bcad316729",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-84df155e27cabe04",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwRPillwXF44mFvF1h4AaABAg",
      "date": "2026-09-12",
      "text": "Sholallohu Ala Muhammad",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 1,
      "id": "1452fd7d00cc0e8f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee9cbdbba1e20cb7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyGX0SQTu3SCNa-cdV4AaABAg",
      "date": "2026-09-12",
      "text": "Solusinya di blokir pinjol di Indonesia sangat meresahkan masyarakat pemerintah saya yakin gk berani",
      "url": "https://www.youtube.com/watch?v=n2gEha6gxi8",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "bb67a4ce673ed4d9",
      "eventId": "auto-27115af2da5f5572",
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
      "externalId": "Ugyp-5jRc_v_lEw8zP54AaABAg",
      "date": "2026-09-12",
      "text": "Ya Allah dapet kerjaan tetap + bisa ngurus anak",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 1,
      "id": "4accf646481dd492",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2e55afa418c9d113",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_7dvosNfz5709ADZ4AaABAg",
      "date": "2026-09-12",
      "text": "waktunya makannnn",
      "url": "https://www.youtube.com/watch?v=oDmYctM7NGQ",
      "engagement": 7,
      "id": "97f787e7cb232d55",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cbf9a263e0194f5e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9BZfdhCtcpFYWYut4AaABAg",
      "date": "2026-09-12",
      "text": "wih wktunya kgiatan dapur hehe....smngat min",
      "url": "https://www.youtube.com/watch?v=oDmYctM7NGQ",
      "engagement": 0,
      "id": "5d287b2e29bec67f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-957989a09f3992ae",
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
      "externalId": "UgxsG7FHpGr-htVXkMx4AaABAg",
      "date": "2026-09-13",
      "text": "Kak mel makassar hadir, semoga aku selalu istiqomah solawatan dan dpt keajaiban.solawat jg",
      "url": "https://www.youtube.com/watch?v=WrRY3BHRMYE",
      "engagement": 0,
      "id": "636ba4be9e317e6c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7927a0d3ef64da3c",
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
      "gdelt": "HTTP Error 429: Too Many Requests",
      "kaskus": "Collector ran successfully but found no relevant records.",
      "reddit": "Reddit searches failed: indonesia: HTTP Error 403: Blocked | finansial: HTTP Error 403: Blocked",
      "x": "X_BEARER_TOKEN is not configured"
    },
    "socialClassifier": {
      "method": "deepseek_credit_social_v1",
      "status": "ok",
      "inputCount": 517,
      "classifiedCount": 120,
      "irrelevantDropped": 120,
      "model": "deepseek-chat",
      "fallbackCount": 277,
      "labelCounts": {
        "NEG": 64,
        "MIX": 38,
        "POS": 18
      }
    }
  },
  "sourceMode": "live:multi-source-v2.1"
};
