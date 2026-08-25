const CREDIT_SENTIMENT = {
  "schemaVersion": 2,
  "status": "pilot-pending-human-review",
  "asOf": "2026-08-25",
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
      "detail": "Collected 284 relevant records/signals."
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
      "detail": "Collected 501 relevant records/signals."
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
    "suppressedCandidateCount": 23,
    "acknowledgedRetained": [],
    "acknowledgedSuppressed": [],
    "pendingHighSeverity": []
  },
  "weeks": [
    {
      "weekStart": "2026-08-10",
      "weekEnd": "2026-08-16",
      "fearIndex": 73.2,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 70.3,
          "volume": 83.9,
          "negativity": 53.3,
          "itemCount": 63,
          "negativeShare": 9.1,
          "uniqueSources": 46
        },
        "social": {
          "score": 71.7,
          "volume": 85.0,
          "negativity": 58.3,
          "itemCount": 155,
          "negativeShare": 29.1,
          "platformCount": 1,
          "engagementUnits": 211.0
        }
      },
      "components": {
        "newsVolume": 83.9,
        "newsTone": 53.3,
        "socialVolume": 85.0,
        "socialNegativity": 58.3,
        "severeEvent": 86.0
      },
      "articleCount": 63,
      "socialPostCount": 155,
      "uniqueSourceCount": 46,
      "socialPlatformCount": 1,
      "negativeArticleShare": 9.1,
      "negativeSocialShare": 29.1,
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
        "news": "Pilot week-on-week ratio: 8.00x; 2/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 211.98x; 2/8 baseline weeks."
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
        "suppressedCandidateCount": 9,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
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
          "id": "auto-c06af112fd55df38",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "e72526f5fa6305c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Maju Trus mbak ka. I dukung..... Tetap semagat\n..... Laporkan ke OJK dan suruh tutup ijin usahanya krn memanipulasi data",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f07f66728bf1dc6b",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "3ae7b0cc9a6e11ad"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "taktis.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Diteror Pinjol Harus Bagaimana? Ini Langkah yang Bisa Dilakukan dan Cara Melaporkannya - taktis.co",
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
          "id": "auto-dc64c95407b69067",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "0f4e33d2fa817915"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sultra Catat 311 Laporan Pinjol Ilegal hingga Juni 2026 - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f3067560d5a5cad1",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "0ba7bc443a1d68a4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "newstasikmalaya.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tasikmalaya Edukasi Mahasiswa Baru Unpad agar Melek Finansial dan Terhindar dari Pinjol Ilegal - NewsTasikmalaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3fa000e5a4380c9c",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "6768fdfb5beeda2c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Banyak Nasabah Keluhkan Pinjaman Ditolak, AdaKami Perketat Pembiayaan demi Cegah Galbay - Bisnis.com",
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
          "id": "auto-01de057ae8346dc2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3209170ef16461b2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sukses selalu bang,🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-03c8e21ec09bb445",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c278b882a836f2f1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Gempa Bumi Bermagnitudo 3,4 Guncang Malaka, NTT - Tribrata News",
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
          "id": "auto-0502e0e3407501f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d0f7beba61752010"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "idntimes.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "3 Cara Menghapus Data di Pinjol yang Belum Lunas - IDN Times",
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
          "id": "auto-0c3c526dd376c6bb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "06001b57328cfffb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Biarlah mereka jg lg nyari nafkah loh...\nKalo berhasil nyolong duit ato apa itu jg rejeki atas ijin Allah. Dan korbannya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c708200e1d1ce75",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a49bc70430bd8c0d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "selamat sore",
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
          "id": "auto-115e6291b1ec6fb9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "061634d3ba8d544c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "smngaat kakkuu kalauu mujurr,akuu buat sekolahhh😇",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1231f5369ce28dc6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e5d79940040f1a95"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "KLU DRAMA KOREA  JG GITU LAH , SOALNYA SY PENASARAN FILMNYA  JD SY DONLUAD ,",
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
          "id": "auto-12bd0d108b5f7311",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ec573436772a6700"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investortrust.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pindar Nasional Masih “Seksi” Bagi Lender Asing? - InvestorTrust",
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
          "id": "auto-155306ad4bf28d1c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0ff56bb9098c7ec8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collector Bekasi Pukul Warga Saat Menagih Utang, Komisi III DPR: Ini Pidana - Jawa Pos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1b87325b814c0f44",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f542cc3a93421a96"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap mkasi infooo👍👍👍👍👍",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1dd2b65f54c5cb7a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dad3d2dab8f723c0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ka saya butu uang 500 semga di bantu ituk kebutuhan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2005a2e2db252c43",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "65f91f9997188c58"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sm nik saya jg di salahgunakan orang dr 2012 ada yg bikin CC pake nik saya tp bukan nama saya nama di CC nya , alamatnya",
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
            "2790a44fe3aaa89e"
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
          "id": "auto-238c24cdb3ea0453",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db51188dc009f156"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap Polres Ciamis",
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
          "id": "auto-2d18f1df68d73647",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3c8197ba089a87aa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kudusnews.kuduskab.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "News - Kudusnews",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2dd5280bcde10fb1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0878d05b6522835d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Walaupun SDH di bayar data tetap ada tgl , th bisa di cek dong pak jg jawab bisa buka opini cari buktikan",
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
            "37f1974e835a9bf1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "timesindonesia.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Flux Creative Universe Raih 3 Marketeers Youth Choice Award 2026 Lewat Kampanye BINUS, Migelas, dan Kredivo - TIMES Indonesia",
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
          "id": "auto-3865e0288cf70598",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "113c5f5230dfbfc7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nah itu yg bikin curiga min..masak minta akses yg sifatnya pribadi..yg paling menonjol tuh minta ijin kontak yg disimpan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-38b7b8f6c34a5956",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b17442c3c2effb91"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tutorial nya bagus bang🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-395a3e335b1364b1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5c2492df46c46117"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang...saya butuh banget buat anak sekolah bang s",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3cd91437d6078d8f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a6146cc9f7163750"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "buat kebutuhan anak sekolah bos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3e38efaa529a6076",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bb73945804565262"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Harus di laporkan seperti itu",
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
          "id": "auto-3fb3046d566b3ed1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "09fb68ce330879d4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang boleh minta dana kagetnya? Buat beli beras sama pempers bang\nSoalnya saya lg nganggur udh hampir 1 bulan bang😢",
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
          "id": "auto-412394dcf49918c0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c64f31353851e7f1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga sukses selalu bang",
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
            "4d08e0a7582845fd",
            "d68409ddad2c0a96"
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
          "id": "auto-48fa002c0e69e1b4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d95a51cf6b47f58a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Blm jatuh tempu nagihnya kaya kaga bayar pas lunas ditlp kaga habis habisnya\nApk udah di hapus udah kaga minat tlp terus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48ff8270ebc1253d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e37b69dc197f0c30"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Keren materinya.... Terimakasih atas informasinya.... Semoga bermanfaat.... Sungguh keterlaluan bagi mereka yang menyala",
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
          "id": "auto-4e28cd65ff67d80c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f5731f2ef5233823"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol itu adalah Rentenir online, yg maksimal pinjam nya hny 5 juta, dengan lansung di potong 10%,\nSistem nya, bunga ny",
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
          "id": "auto-545e6797edc0265f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1d24908305ab80f1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang anak mau daftar sekolah tapi belom ada dana kak",
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
          "id": "auto-59ba7bc82ee1c787",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8b661f4f27415623"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih min semoga bermanfaat tutornya sukses terus kontennya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b06ad3d8e50f3c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "26e1e4417fc6ff70"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediata.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Calon Pengantin Diingatkan Waspada Judi Online dan Pinjol, PKK Makassar Gandeng OJK - mediata.id",
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
          "id": "auto-5b7d2cb23d417c9f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ea26056c2361ebd3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat turus buat kontennya min moga² apa yang Mimin semogakan akan tersemogakan🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5c8982af4f40a12a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "486bf0e242879f9e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir selalu abg ku❤❤",
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
          "id": "auto-5d4864ca5524f8d6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "03e3dc567ede07de"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pemerintah harus melindungi nama baik korban",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5d57768265bcb36c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c328172772cbcf32"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hayo gimana main wa tanpa akses kontak, penyimpanan",
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
          "id": "auto-600b6a419672fa46",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d5d645399382d99f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mestinya ranah negara soal keamanan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-60a30cc9d4450899",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a718c5750d4b9618"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya butuh duit dana buat ongkos pulang dari Bengkulu ke bandar lampung",
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
          "id": "auto-64326b8433a2ad88",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "774399671332ba9b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini buat iOS ga jalan kan ?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-66181c8613ee9395",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96b8467ca50cc11c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Coba KLO bener mana",
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
          "id": "auto-69167fcaa29077ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "796a5db7afb14563"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bahaya ni..trus bagikan trik ilmu bang",
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
          "id": "auto-6a6cbe4eba11a6c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b18d2560c4ebdf9d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol yang meminjamkan tanpa orang asli harus diburu untuk dibasmi , negara tidak boleh ciut nyalinya dan malas memburu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6b308d0111924051",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cdb071a13e17700d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat slalu bank ku..m",
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
          "id": "auto-6e9d49f936a2ef47",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d32fd572e72bb230"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Begitu Densu tanya : siapa yg pinjol? Langsung SW tertegun...😅😅",
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
          "id": "auto-719b42cb1cd4a413",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f70a8e9816707820"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yaa ampun segitu belanya....masalah pinjol kan menyangkut dapur orang...koq tau ?..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-731b19d24e82a850",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "61c15582f84f2530"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "lagi butuh bang do rantau blum dapat kerjaan",
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
          "id": "auto-7539136796e5fda4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7edfed62ba2616fd",
            "d50cc4f457aa7784"
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
          "id": "auto-769e0cdb680ce9cd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c8e6332975fcffa0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ia sya jga pernah tuh,nama d catut tuk shopee pay sma pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-76d416cbfc2c1c93",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9e89bf603437d1ad"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalian jangan pernah pinjol apa lagi buat pamer kekayan karna itu sangat merugikan sangan berbahaya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-772c7d959f4bd0b9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a439693d89fe1087"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Menyala kakak",
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
            "0ddb4c1af8652464"
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
          "id": "auto-79c6c7a96b17d0ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5d7afc9538aea660"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gmn caranya kl ada cek wajah di pinjol , kn dak bisa atau ada caranya yg dlkukan hacker",
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
          "id": "auto-7df10194a3fdc49e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ec9fe5eb8dbeeb4c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hmmm gk bs dibubarin lg itu pinjol, gimana ya? gk ada solusi.",
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
          "id": "auto-8193bea373e808c0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3bcf962d5b5b55a3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mw bosku LG butuh banget nh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8379553b5e3a3366",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d32c8c6048e94595"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Orng ini licik dan kejam.. tangkap hukum berat ..masker buka pak biar tahu muka nya",
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
          "id": "auto-86e4e382b953f62e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "28677bdaec3419f7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makasih min informasi nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-887998dd2ff9dedd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a1c99494024dab84"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya ya ya tau tau",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8968ece5b2bff23c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4a5740310d91de99"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga usah klik .apk aja hp sdh bs dihack, diintip/dikontrol dr jarak jauh, mau pakai aplikasi bawaan hp file manager aja h",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8989ce0ec54a3163",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0f50037d7f0caf68"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perbedaan Sikap OJK dan KPPU Soal Batas Suku Bunga Pinjol Bingungkan Pelaku Usaha - Tribunnews.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8aa12799fcf012aa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "687b3d5ad49a742a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga video nya beruntung abang'Qu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8db4faf7e98032e6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "60eb7de4965d1626"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "makaih min video tutor nya😊😊",
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
          "id": "auto-8e42b7c2634cc7c9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ac2273c21f928299"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bisa di jawab nggak klo apk\nBRI,shopee,bibit,Telkomsel,Smartfren,gojek dll itu kan butuh itu...\nKlo nggak pakai itu tida",
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
          "id": "auto-91d20a1a716a6aeb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "32335d770a136d35"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rekam lain x mba . VIRALKAN.. ini berbahaya bisa nipu orang itu..",
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
          "id": "auto-9506329b526e38b1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4d2be9af2857f856"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Butuh buat modal usah bng",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9540c2e2b0c43cd4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a1364ce1f9ed349a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Iya gak di bahas karna yang pinjem di pinjol bukan Ruben mengelak dia",
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
          "id": "auto-962ed5e8f56a25b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b430bc19ba59ce53"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah,, mau bg buat dana darurat",
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
          "id": "auto-9af4b97eac1c8fe9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eabaf5b8b9ec715d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gimana download nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9dba659982dc148c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "797ffd55277cd0fc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "achmadnurhidayat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "DPR Desak PPATK Usut Sumber Dana Industri Pinjol - achmadnurhidayat.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a03b7a7c27f3f6df",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "02963df5f074678f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Coba bisnis ojek online",
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
          "id": "auto-a4115bbada8082b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7d790cc0c54a3bd9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "HP LO DISADAP? Terbongkar Cara Hacker Pinjol Curi KTP &amp; Wajah Tanpa Ketahuan! #logikarupiah",
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
          "id": "auto-a5905bc732aa9a48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b5c961ed5a7665c1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabar6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kemensos Tangguhkan Bansos 259 KPM Terindikasi Pinjol di Kabupaten Tangerang - Kabar6.com",
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
          "id": "auto-a67685020626af30",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6d2ea77b0a933947"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Memang Ruben tidak pernah pinjol kali Pak. Kalau seandainya sudah dilunasi tapi data para peminjam kan pasti tetap ada. ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8325f41078407a6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "839d547339f96856"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Masalah intinya hak asuh anak,kenapa ke pinjol pinjol segala si.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a949423978afece3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d2a05457b2ee3a81"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tembus 387 Aduan, Perilaku Penagih Utang Paling Banyak Dikeluhkan di Sumut - detikcom",
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
          "id": "auto-ae43a9d3980697c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ae9b276440749c18"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Waduh aku udah kena barusan, sampai batere aku harus ganti, keluar duit 300an, itu baru harus beli batere baru, BGST!!!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-af26b535dc8b4d7e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b31cf8c39ff0c672"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya telat ikut dana kaget xa bisa kah bang",
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
          "id": "auto-b46441f72ef93905",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "be99fdc0094228ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalo sudah terlanjur, gimana Bang cara memperbaikinya??",
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
          "id": "auto-b91df861f4cb8e37",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cacbe7d5621b703c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat beli beras bang lagi mondok soalnya hehe",
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
            "7f250aa6c68dce8c"
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
          "id": "auto-ba7bf3536a4375ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6a1db94464764b98"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah dapet, buat ongkos merantau ke cikarang🙏",
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
          "id": "auto-bbcbe2b63ac596b0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a8165c5683b0d831"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga rejeki ny bang ...suksek terus bang",
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
          "id": "auto-c35f72c0d5085942",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "37855bfb70b8c1ca"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gimana caranya pinjam uang",
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
          "id": "auto-cc10d841fbf5b72d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ee91b18000485ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau bang. Buat bayar perbaikan motor di bengkel🙏🏻🙏🏻🙏🏻",
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
          "id": "auto-cdff674c4b2e170e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b6a2ab20adbe8cb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "dri video ini adakah solusi untuk mencegahnya min",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ce6676e140ee3a58",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "56c72c1a0c482a2b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sulsel.idntimes.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PKK Makassar Bekali Calon Pengantin Cegah Jerat Pinjol dan Judi Online - IDN Times Sulsel",
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
          "id": "auto-d0d36d0e3cbcbbe3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "02f8b778b8eb6ffa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap SEMOGGA bermanfaat min",
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
          "id": "auto-dfa6afc3789d87c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b08fb83b80161051"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cara Pinjam Uang di DANA | Pinjol Mudah Cair 2026 ke DANA",
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
          "id": "auto-e206a19ee4a7b14b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1ab2ee54e478d720"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang link aplikasi nya saya udh liat di play store GK ada",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e6846b7062db72bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5f54cc891e675403"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Halo kak",
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
          "id": "auto-eafda81d3ea0b4bd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a59813611c8cbfab"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Maksih infonya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ee50b486de79be53",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "03445a16bfcb2a53"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sukses lah buat Abang nya , semoga diangkat kesusahan kita semua nya aminn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-efb74e3493f20669",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "60b42055c6f124bc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kupang.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Ingatkan Mahasiswa Undana Jangan Terjebak Pinjol dan Paylater - Pos-kupang.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f1d2488f603a34c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "11bb38dcf55a9d99"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang,butuh dana buat seragam sekolah anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f38adfe9c01d9c10",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a193cc5dac061a91"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "kalo seperti ini hampir semua warga negara di negara ini berada di \"tepi jurang \" tindakan tak bertanggung dong bang ?\nl",
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
          "id": "auto-f84a3cfe9f884e69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e8b367b2dbef8116"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantaaabbbbb\n... lanjutkan kakaaak",
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
          "id": "auto-f9a3c095a4e6f391",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7c355bfc41b223f2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mau bang buat tambah biaya berobat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f9a58772faaf3e27",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cf498a47ad965926"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bro cwok kalo mau dapet cwek harus bener-bener bahagia in dia, bikin dia seneng, dan kalo bikin dia seneng Uda pasti but",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fb0ad40978bcdc88",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3420ba79dc23f6c2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mengerikan, ...",
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
          "id": "auto-3217b8de30ea2044",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "e56be7805fee1216"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "seputarcibubur.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Laba Pinjol Melejit Rp1,15 Triliun, Nasabah Makin Terjerat Utang - Seputar Cibubur - Seputar Cibubur",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5c090a5e3109f6b2",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "8d16c5f406b98887"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pinjol Raih Laba Rp1,15 Triliun per Semester I/2026, Naik 10,41% - Bisnis.com",
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
            "56dc4b8a08f865cc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Ekonomi Indonesia Tumbuh 5,45 Persen di Semester I-2026, Ter - Tribrata News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [
        "0276239569fa8f98",
        "3bd1686be84ed774",
        "e56be7805fee1216",
        "ab26120a1b691b4a",
        "0f4e33d2fa817915",
        "0ba7bc443a1d68a4",
        "33756b99b6a6aebe",
        "9b2c345b1cb42d1f",
        "4d08e0a7582845fd",
        "d68409ddad2c0a96",
        "3e8836a6e6d0b608",
        "ec573436772a6700",
        "3c8197ba089a87aa",
        "7656d3ad3b0a0b61",
        "79554c2805c568f3",
        "d2a05457b2ee3a81",
        "26e1e4417fc6ff70",
        "0ff56bb9098c7ec8",
        "8d16c5f406b98887",
        "3afd7d3354d76558",
        "ea20ff918f537d9b",
        "0f50037d7f0caf68",
        "fe2374427b214a09",
        "f4417ea5cd48e569",
        "b807953179a9647c",
        "ff53dc441946698e",
        "ccbe499804c2845d",
        "51403f24ea5b2305",
        "6768fdfb5beeda2c",
        "1c7d13c47cd1ca51",
        "b32551e7653c5965",
        "b909071e17c41f20",
        "75846adf5f7a3eeb",
        "b5c961ed5a7665c1",
        "dff31dad862bf894",
        "47ea4d7499fdf668",
        "60b42055c6f124bc",
        "56c72c1a0c482a2b",
        "b438a98a0c481186",
        "b1fbcc1f71d6ec62",
        "1ec95828af291cef",
        "c3ae36f8026c3ebc",
        "2790a44fe3aaa89e",
        "c5f03918ae9d57e7",
        "d3dac2a06dde502f",
        "56dc4b8a08f865cc",
        "c278b882a836f2f1",
        "8e30e5eef05bddb0",
        "efad90ca3014c460",
        "90b1e8b32eaf8b40",
        "7ce6d6a88deb1fef",
        "054b242c10716d5a",
        "3ae7b0cc9a6e11ad",
        "37f1974e835a9bf1",
        "8dded0b58f76a251",
        "3af94db33a2d23b0",
        "353150b61c4c7434",
        "d0f7beba61752010",
        "fb317118fa02e733",
        "797ffd55277cd0fc",
        "55a9008da0ca9a70",
        "b8048fad80ae72b0",
        "9a5b2675f2d68d49"
      ],
      "socialItemIds": [
        "796a5db7afb14563",
        "06001b57328cfffb",
        "ac2273c21f928299",
        "02963df5f074678f",
        "b8249fcc44664eff",
        "5d7afc9538aea660",
        "7d790cc0c54a3bd9",
        "bb73945804565262",
        "774399671332ba9b",
        "e5d79940040f1a95",
        "be99fdc0094228ce",
        "3420ba79dc23f6c2",
        "8fb74d2d93e17bc4",
        "113c5f5230dfbfc7",
        "2e169eab62fcf587",
        "b18d2560c4ebdf9d",
        "8855147b3a0ea7ad",
        "73d78a9f44b60553",
        "0ac6a8016fde0c81",
        "b1d4ab8fca92b9d8",
        "a1c99494024dab84",
        "f70a8e9816707820",
        "2b6a2ab20adbe8cb",
        "4e1712dfba9545b1",
        "9839eb5e02ed83c7",
        "8ee1f7e54a56866f",
        "5c15a9d8199a5f77",
        "4a5740310d91de99",
        "31a3a4b491b02052",
        "8b71cb1e8c53095f",
        "d5d645399382d99f",
        "2de50cc6b69fe8de",
        "0a8f8c817cb65c25",
        "ae9b276440749c18",
        "c328172772cbcf32",
        "7853cd6a5f4fec29",
        "61dc6c8d6dc1cc55",
        "9e89bf603437d1ad",
        "e37b69dc197f0c30",
        "79115e23d22fd960",
        "28677bdaec3419f7",
        "db51188dc009f156",
        "57f66b77690c3a5d",
        "03e3dc567ede07de",
        "f501c92a66ee0d46",
        "01e92101616324bb",
        "356241b0f16e4471",
        "d455de86d97ed478",
        "88cc0be90738be72",
        "40d072151c0dbab2",
        "2872440efdc3fc8c",
        "409cc623df5afcaa",
        "8248f8b741f51f05",
        "ea947e27ede28566",
        "d3b4db0d11e2cde3",
        "f8ab0deaeda8b88d",
        "d95a51cf6b47f58a",
        "244a0f7ddf0e59c6",
        "b08fb83b80161051",
        "02ca67507a13af28",
        "268de05220447db5",
        "11bb38dcf55a9d99",
        "486bf0e242879f9e",
        "419004a3a3de87dc",
        "c8e6332975fcffa0",
        "a1364ce1f9ed349a",
        "f818406ff8820386",
        "b497a36f78c903c9",
        "00d09e375df620a4",
        "43f14c44e74fea46",
        "e72526f5fa6305c4",
        "e8b367b2dbef8116",
        "02f8b778b8eb6ffa",
        "6d2ea77b0a933947",
        "a439693d89fe1087",
        "a50aa5b406736862",
        "53ea9cf220a25c17",
        "f5731f2ef5233823",
        "32335d770a136d35",
        "cdb071a13e17700d",
        "7edfed62ba2616fd",
        "ea26056c2361ebd3",
        "65f91f9997188c58",
        "4cc0bc7c68e26f71",
        "b17442c3c2effb91",
        "8f4a3c1998ae2788",
        "0878d05b6522835d",
        "ec9fe5eb8dbeeb4c",
        "a193cc5dac061a91",
        "e594d57d06fe5b3a",
        "971ceecf302d7298",
        "c818b65c8b3a30e5",
        "c5c034188309b732",
        "ae1c0b2b8c35a14d",
        "4dcf7261deecd5ec",
        "4d2be9af2857f856",
        "e7087deb857552d2",
        "367e55a03b6db2d4",
        "a59813611c8cbfab",
        "f542cc3a93421a96",
        "3ee91b18000485ba",
        "1a206296fa8aaca1",
        "107cddcc73287cdc",
        "c003eebeada9214f",
        "50693e73c5536e69",
        "5660097216bbc2af",
        "c996e4d5b77e1e4a",
        "8b661f4f27415623",
        "a6146cc9f7163750",
        "61c15582f84f2530",
        "7e47ec508de8347c",
        "1283184f0f419507",
        "0ddb4c1af8652464",
        "386b9bafae12910f",
        "cf498a47ad965926",
        "cacbe7d5621b703c",
        "96b8467ca50cc11c",
        "37855bfb70b8c1ca",
        "eabaf5b8b9ec715d",
        "68519e7c793feb0a",
        "0ee57d3f95e12060",
        "a6f9fb4b9e430393",
        "d50cc4f457aa7784",
        "6a1db94464764b98",
        "60eb7de4965d1626",
        "7c355bfc41b223f2",
        "a49bc70430bd8c0d",
        "061634d3ba8d544c",
        "f1666264a76c5f33",
        "09fb68ce330879d4",
        "1ab2ee54e478d720",
        "a718c5750d4b9618",
        "b31cf8c39ff0c672",
        "5c2492df46c46117",
        "d32fd572e72bb230",
        "b430bc19ba59ce53",
        "b60bdf592ffa53bf",
        "1b58c8a70e91fa94",
        "05af6dfa2d127045",
        "1d24908305ab80f1",
        "5f54cc891e675403",
        "2694a3e87bfc9c58",
        "839d547339f96856",
        "3bcf962d5b5b55a3",
        "d32c8c6048e94595",
        "a8165c5683b0d831",
        "687b3d5ad49a742a",
        "7f250aa6c68dce8c",
        "03445a16bfcb2a53",
        "3209170ef16461b2",
        "540a522ef90b6568",
        "dad3d2dab8f723c0",
        "e4d8bf643189c813",
        "c64f31353851e7f1",
        "ff5e91b2cd4d35d5"
      ],
      "_newsVolumeRaw": 63,
      "_socialVolumeRaw": 211.0
    },
    {
      "weekStart": "2026-08-17",
      "weekEnd": "2026-08-23",
      "fearIndex": 63.6,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 63.7,
          "volume": 73.8,
          "negativity": 51.1,
          "itemCount": 146,
          "negativeShare": 8.7,
          "uniqueSources": 105
        },
        "social": {
          "score": 55.1,
          "volume": 51.0,
          "negativity": 59.2,
          "itemCount": 160,
          "negativeShare": 31.9,
          "platformCount": 1,
          "engagementUnits": 209.6
        }
      },
      "components": {
        "newsVolume": 73.8,
        "newsTone": 51.1,
        "socialVolume": 51.0,
        "socialNegativity": 59.2,
        "severeEvent": 86.0
      },
      "articleCount": 146,
      "socialPostCount": 160,
      "uniqueSourceCount": 105,
      "socialPlatformCount": 1,
      "negativeArticleShare": 8.7,
      "negativeSocialShare": 31.9,
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
        "news": "Pilot week-on-week ratio: 2.30x; 3/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 0.99x; 3/8 baseline weeks."
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
        "suppressedCandidateCount": 23,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": []
      },
      "events": [
        {
          "id": "auto-0dae691d1d9b19c6",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "db4169194bce96a2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Link Apk Uang Cepat - Pinjaman Dana Cair Tunai Dana Cepat, Apakah Ilegal dan Sebar Data? Ini Pengalaman Pinjam - Berita DIY - beritadiy.pikiran-rakyat.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-47b121d5bbc6f661",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "39f56c8b045bc9c7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Dihubungi DC Rupiah Cepat, Klaim Diteror Berbulan-bulan - Finansial - Bloomberg Technoz",
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
          "id": "auto-a86e18d120e6a595",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "77bc91e70004fc5c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritadiy.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Link Pingo Pinjaman Online Aplikasi Pinjol Pin Go Plus Sfile Mobi, Teror Galbay Berapa Lama? Apa Keluar Kondar - Berita DIY - beritadiy.pikiran-rakyat.com",
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
          "id": "auto-1bbb9103ee7e729e",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "bb56ce88c02a0dd3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bacasaja.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polres Gresik Gencarkan Cooling System, Warga Diingatkan Bahaya Judol dan Pinjol Ilegal - Bacasaja.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1c4331d4f3fd8c15",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9d8fdf9b3f73e08a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sekilasmedia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polres Gresik Gencarkan Cooling System, Bidik Bahaya Judi Online dan Pinjol Ilegal - Sekilas Media -",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3504612ba0bd3b9a",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "c74e1b0b986d98c1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jatim.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hukum Utang Pinjol Ilegal Menurut Islam, Apakah Wajib Melunasi? ini Penjelasannya - Tribunjatim.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35a12187d80d1ba0",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "ad1e51057241bc48"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pihak kepolisian harus bisa memulihkan nama korban atau diberikan surat kuasa lapor penipuan seandainya ada penagih huta",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-611ffffec4236574",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "372f0cb02a6bbba7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radargresik.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gencarkan Cooling System, Polres Gresik Edukasi Warga hingga Nelayan Terkait Bahaya Judol dan Pinjol Ilegal - Radar Gresik",
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
          "id": "auto-71572789433241b8",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "ed441a86f47be5ad"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabarnusa.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Genjot Literasi Keuangan: Tegaskan Beda Signifikan Pinjol Ilegal dan Fintech Lending Legal - kabarnusa.com",
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
          "id": "auto-8bacbc1a461bc3f8",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "8ba979dac9358c32"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritajatim.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polres Gresik Bidik Judol dan Pinjol Ilegal, Warga Diingatkan Bahaya Utang - beritajatim.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9069440f73a6d06d",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "1a1da0d4dcd2ef69"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tnews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polres Gresik Gencarkan Cooling System, Edukasi Warga Bahaya Judi Online dan Pinjol Ilegal - tNews.co.id",
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
            "de3c82ab40d8e265"
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
            "331ab305cc9dae0e"
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
          "id": "auto-f48d13a00a7c8591",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "f6ac4152bf264120"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nusantaraterkini.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Pinjol Ilegal Sejak Dini, Pemprov Sumut Tanamkan Budaya Menabung untuk Generasi Muda - Nusantaraterkini.co",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fd4da52173ae0bbe",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "7eda1277e045527c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "javasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polres Gresik Edukasi Warga Bahaya Judi Online dan Pinjol Ilegal - Javasatu.com",
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
          "id": "auto-29e955f60a35612c",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "f297aef4faf720a0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investasi.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Risiko Gagal Bayar, Pefindo Pangkas Rating ADHI Jadi idB dengan CreditWatch Negatif - kontan.co.id",
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
          "id": "auto-ea326f7d8db51e11",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "c99ad5880d5953e2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "16 Pindar TWP90 di Atas 5%, OJK Dorong Pindar Manfaatkan AI untuk Cegah Fraud - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-002cbf8cef2de0d4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a446d4e8d96143bd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alurnya dapet banget 🌊 💕𝐉𝐔𝐍𝐈𝐎𝐑𝟖𝟖🟣 pas di hati 💖",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0306e40b3286f858",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "037269bbc79f1f6f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kemenagsidoarjo.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Buka Sosialisasi Bahaya Judol dan Pinjol, Kepala Kemenag Sidoarjo Tekankan Pentingnya Menjaga Ketahanan Keluarga - Kantor Kementerian Agama Kabupaten Sidoarjo",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-030e79c9afef6f9f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "57757440e4cf917b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanewsntt.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bid Propam Polda NTT Perketat Pengawasan, Cek Aktivitas Judol dan Pinjol Personel Polri - Tribrata News Polda NTT",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-03cdb482ddcac630",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ad9b9d210c84dc91"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.sumsel.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Cegah Personel Polri Terlibat Judol dan Pinjol, Sipropam Polres Ogan Ilir Gelar Gaktibplin di Polsek Rantau Alai - tribratanews.sumsel.polri.go.id",
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
          "id": "auto-0606b132973b84dd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c2a27a1c87e0c456"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "wkwk ngakak banget bg daff, lanjutkan konten beginian seru bgt. jalan2 ke pasar lagi bg atau ketempat2 unik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-06ae85a5de541e90",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b8155bb4c4ba6f6e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Sidang Banding Pindar Berlanjut, Pakar Sebut Perintah Lisan Regulator Sah Secara Hukum Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0751749bbc4d8a3e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "67d87dc1edf0bae7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radioidola.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "UMKM Jateng Didorong Jauhi Pinjol - Radio Idola Semarang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-08d1b6adfae8610a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "23ea986f05322136"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat renovasi masjid di desa teluk batu kak soalnya lagi kekurangan dana buat beli semen sama keramik nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-09208eb461f6751e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "139b3111765b8122"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "lifestyle.sindonews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mengatur Jadwal Liburan Lebih Leluasa dengan Layanan Paylater - SINDOnews Lifestyle",
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
            "1ad63413f7b9c878",
            "6ccd01a396e098db",
            "834f8b0ab359383d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 3,
          "domains": [
            "akurat.co",
            "biem.co",
            "metrodaily.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Naik 23 Persen - Akurat.co",
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
          "id": "auto-0b79fb56d10f7dce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c1884f6589cd85a7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pantau.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Menerima 77 Laporan Aktivitas Keuangan Ilegal di Regional Papua Barat - pantau.com",
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
          "id": "auto-0d6eb75a30e1a688",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8305648080d5ae94"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gadget.qoo10.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan P2P Lending ke UMKM Tembus Rp35,12 Triliun - Qoo Media",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0ea7a1a75cc786c2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fc5b2ef01a2529e1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagaimana caranya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f29c62314d0d2a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bb4fc5975e291dc6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sering sering ke rumah hantu bareng podos pliss",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f355465a873589b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2253e329b46bf725"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suaragarut.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tembus Rp 35 Triliun per Juni 2026 - SuaraGarut.ID",
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
          "id": "auto-1177ae9307d004b2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "418e3153f8e70f0f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terima kasih wawasannya",
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
          "id": "auto-11c54d89daa524f7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4e5015923eb438af"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ibukotakini.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar Capai Rp105,14 Triliun, Industri Masuki Era Baru - Ibukotakini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1348faa1f6b2356c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ac694d269b4abc10"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sering² upload bang daff, seru bgt",
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
          "id": "auto-185e2da5a6998cda",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f91723f5b0e7ef10"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.lampung.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Waka Polres Bersama Propam Polres Lampung Utara Cek HP Personel, Hasilnya Nihil Judi Online dan Pinjol - Tribratanews Polda Lampung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-196b9e82637dc6f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "637346720266d7a2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "langgam.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Outstanding Pinjol di Sumbar Capai Rp1,49 Triliun - Langgam.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-196e7a3653ac2552",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7281179bf24e1a63"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cakepnya gak karuan 😍 💕𝐉𝐔𝐍𝐈𝐎𝐑𝟖𝟖🟣 bikin melting 🫠",
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
          "id": "auto-1a40bff96e5e67da",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "644cbc8a31dd5204"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat kebutuhan bulanan kk",
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
          "id": "auto-1c8b97f799b45a4c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d1205c1381313fec"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang sukses terus ya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d0e774cc965e3fa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "93de7763c1d12cf7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SERRUUUUUUUUUUUUU, ama podos pasti lucu 😋",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1e159498b412b77c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2cbb6f9878afebf8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritasatu.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Peras Santri di Tangerang, 3 Debt Collector Ditangkap Polisi - BeritaSatu.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ee4f3124e161cb7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "38adb53ee3cf55ea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Utang y babyak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-213addd1002a8ab3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5e072255b18b18ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "❤❤bismillaaah ibu mau buat kebutuhana sehari hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2144dd974e1802a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0ed4ae14ae6442ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir slalu bang,, kasih sya atuh bang dana kaget nya     ,, lgi butuh nih",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-220fffae29d81cb5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7f72c6d26f0acc07"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "miris tapi itulah kenyataan",
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
          "id": "auto-257ad8e1835b3b5a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ac17d9308ca9d20d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga sehat selalu sekeluarga",
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
            "cc2f41d978b8a972"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Menko Yusril Ultimatum Pengusaha: Setop Debt Collector Ancam Konsumen! - Warta Ekonomi",
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
          "id": "auto-28ae6a75968e028b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9418f3ff9ca34161"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sehat terus Abang semangat 💪💪",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-29f9d1630fa333e6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c488681070fa3582"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ke 5 lagi jirrr",
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
          "id": "auto-2c9e111d9507c41b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "28f276d2060b47c2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau buat kebutuhan sehari hari bang",
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
          "id": "auto-35bc024ff0446a61",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ada38103f883e016"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Salam sukses bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35c66c8b42ed4ef0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2afc45fabf2f7c6b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "suksesss terus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3666b19b69e6bf6c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8eb1b40db72fedc6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat buat tambah\" acara resepsi 🙏",
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
          "id": "auto-38f50d412c105f8d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "12a29049cf6d900d",
            "d47d2c5d95fbfecd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "pdiperjuanganbali.id",
            "youngster.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun per Juni 2026 - pdiperjuanganbali.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-391ca990ee273df4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9da10ff9f3027881"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat isi token , aamien",
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
          "id": "auto-3b1ed2066bd1de93",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8e0e0a9883889854"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir Banten",
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
            "3ca6d5770bc919b6"
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
          "id": "auto-400b1c95d2d4f69c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f6cf750cac9cfca1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bos, untuk modal usaha",
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
          "id": "auto-4178e55b877a36af",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b3ebe61374ca43b9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabarnusa.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pindar Masuki Era Baru: Fokus pada Kolaborasi dan Kepercayaan untuk Ekonomi Digital - kabarnusa.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-41f94b3c22bc85d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cd55cf5f1072dbc8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya tidak ada fitur pinjaman tanpa KTP gimana",
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
          "id": "auto-4344ac405c4319d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "17751d32e1137ddf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hallo Bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-45820ef0fab029c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e2387bb27b3e82d6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadirr bang 🙏",
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
          "id": "auto-48b974118c2304df",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5c7c57f246cb49ea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bikin konten kayak gini lagi bang seru",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4933db2a8d37ae80",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1ece15bc3b69518e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bali.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Sebut Outstanding Pembiayaan Pindar Rp105,14 T, Fintech Lending Days 2026 Perkuat Kolaborasi - Tribun-bali.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-49a622eba8bac905",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6489d0bdad8b8302"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Menakutkan",
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
          "id": "auto-4b70d6cda13c8b13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1f4c23ce065e2824"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koran-jakarta.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Sampai Kecolongan! Dana Pindar Makin Deras, Pengawasan Harus Diperkuat - Koran Jakarta ®",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4c21838bc75b084b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b08857674706d00b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pintar Dorong Budaya Meminjam Bertanggung Jawab Melalui Teman Atur Uang - Readers.id",
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
          "id": "auto-4f6b5d896d55f4fb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a9c72f52a4ea4745"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah berkah bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5154278bba72b264",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "85e4ed5b93e66b4c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SERUUUU, main lagi plis ke tempat tempat gini sama yg rumah hantu jugaa... tapi tetep bareng podosssss",
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
          "id": "auto-52cd933a6ed77fa7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f9dcb9f204dd0683"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir menyapa bang",
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
            "c64cd7a87e6f1b84"
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
          "id": "auto-537bf122a8ad0e3e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ecd789ef2cf2d2f1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kupang.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Propam Polda NTT perketat pengawasan personel terkait judol dan pinjol - ANTARA News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-53a4a8191e81cfeb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e5db3bd5608da740"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat beli bensin motornya bg",
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
          "id": "auto-540c40760cac088f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c4b9014ae6b318c5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang butuh buat benerin motor trimakasih 🙏🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-55f31fcbeda8699a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "81818a500b08d079"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "sukses mas semoga beruntung",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-561758fea50496e6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ac1d631d201995e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bng udh subrek",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-573b1b02535e7d93",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "47e96ceb929e7f0e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gadget.qoo10.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Teman Atur Uang Kredit Pintar Tekankan Kendali Nasabah hingga Kewajiban Terpenuhi - Qoo Media",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-58b372c61439597c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1f1ba852f462c63b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang, buat biaya kuliah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59daac05718b4ca2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f93d5bd187517e82"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mantap bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59f3eaee262e0fb5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fdc624dbfeff2017"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat terus bang bosss",
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
          "id": "auto-5c43c08f115d762b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8742ec654ad2c0d8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rm.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dorong Pinjaman Bertanggung Jawab, Kredit Pintar Kenalkan Teman Atur Uang - RM.ID",
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
          "id": "auto-5e1546d4454ef971",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "acf574c3d0dd0b7c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "feedberry.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater Rp44,1 Triliun, Gantungan Belanja Masyarakat - feedberry.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e2de92d7b405156",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "61e7c934f936fbbd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat kebutuhan min tolong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e6098ce4fc3902b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "cafbda84a662d708"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bogor-today.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bentengi Mahasiswa dari Pinjol dan Judi Online, Pegadaian Gelar Edukasi Literasi Keuangan di IPB - Bogor-today.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5ef393627f904411",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca51513e1ebcee4a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Super mantapGa r u da Ho k i Gacorrr Semua game nya 👍Sukses Selaluu🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5f396bc4110ebbed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8ad9c581d7da9025"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tapi saya tidak muncul fitur dana pinjaman ka gimna ya",
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
          "id": "auto-67cf26b3fde65ba0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a985ea8c68679e23"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Engga bs malah engga munvul diketik pinjeman dana tanpa ktp",
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
          "id": "auto-6af6f4db88159989",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a4c29e8a009a82c9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "buat bayar kontrakan bang amain",
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
          "id": "auto-6fecb8e6767e5291",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e28acd13b4533e00"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bang buat kebutuhan sekolah anak",
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
          "id": "auto-7407d18a3c56667e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3e06c99ce020095f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gadget.qoo10.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tiga Prinsip Agar Pinjaman Digital Tidak Mengganggu Arus Kas - Qoo Media",
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
            "fe4929d64768221d",
            "2f2d4dc6e194f16c"
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
          "id": "auto-79b2c1715a4085a3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "962d7c8dd0491c51"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "butuh buat modal usaha dong kak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-79ea404e879d4e79",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0d3dd58f2c5e2c90"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang.. butuh dana buat bapak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7bcc311b569595d1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4a6d12e292a4b042"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semogaa sehat selalu bang❤",
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
            "a009719cab861231"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Update Denda Rp755 Miliar Pindar, Pakar Tegaskan Lembaga Tak Bisa Lampaui Kewenangan OJK - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7e93d0423d351970",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2df9d2bcc0f3acbe"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang alek langsung ngakak anjirr, kayaknya udh ngga kuat dia nahan ketawa😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7edca7a74b206a1f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "861ab8c973fd8dde"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum saya butuh dana buat modal warung bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f2f4379e8ee3076",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "da2cb8b11546f28c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Terbanyak Mengakses Pinjol, OJK Tasikmalaya Tingkatkan Literasi Keuangan Guru - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f417a9ffa21d24b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c4e59d9701d3ecc8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bali.jpnn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Koster Sentil Pinjol Konsumtif, Minta Membiayai UMKM dan Petani Bali - JPNN.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f493ce25ea07d7b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ba3c19604f56f93"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Di saya g bisa kluar ya kak fiturnya pas dienit terakhir",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-86714614c1b8b7a5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0940fbda68096536"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "merdeka.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan UMKM dari Pindar Meningkat, Tembus Rp35,12 Triliun hingga Juni 2026 - Merdeka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-884660371c55a3b3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c3f5773f4bd70de9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Suka seneng kalo ama podos wkwk",
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
          "id": "auto-88f7ee685cfb4a75",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "37190badb55b9776"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "di dana saya dak bisa bos pdhal udh 6th pkai dna TF jga top up jga tp mau pinjam d dana dk bisa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-897e9d7893efccac",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fc8e602c65cc9121"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "topbusiness.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "WhatsApp Image 2026-08-18 at 17.29.59 - TopBusiness.id",
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
          "id": "auto-8d4c2aced53e1ad8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6e126d959a5a795b"
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
          "id": "auto-8df5ea4e4225daac",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6d86b7d4b195b78a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gosulsel.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Berizin OJK per Agustus 2026, Cek di Sini - Gosulsel.com",
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
          "id": "auto-8e5d46ff99e779e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2d61d9bc14ec8e44"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat berobat terapi orang tua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e7b72fc30f5b0f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "16abddada80f27fc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "megapolitan.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pintar dorong responsible borrowing kendali finansial yang bertanggung jawab - ANTARA News Megapolitan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8f694e1853595e09",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ecba42514ec532fe"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Weh smngt bg",
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
          "id": "auto-93dad103ba864286",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "72f266389f7af1ef"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insiden24.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Generasi Muda Tasikmalaya Dibekali Imun Finansial: OJK Sasar Anggota Pramuka Lewat Edukasi Anti-Pinjol dan Judol - Insiden 24 - Insiden 24",
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
          "id": "auto-9955ac70da5ad0e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e2b9d398701526b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Amin bng smga mkin bnyak rejekinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-99bd969f7a49a48a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8e2edb4ceca95531"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pas mau di alihkan fitur pinjaman tanpa KTP malah ngk bisa masuk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-99c98101270f56a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fc790d93a168adf4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "stabilitas.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penyaluran Pinjol ke Sektor UMKM Melesat 23,25% Jadi Rp 35,12 Triliun per Juni 2026 - Stabilitas.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a8f28ffba2fb55e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a41b29ce251505fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Oke Abang bermanfaat tutorialnya🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9bf0d80252a50816",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a6b400ae01e2f4a0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.sumut.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Propam Polres Sibolga Periksa Ponsel Personel, Pastikan Tak Ada Aplikasi Judi Online dan Pinjaman Ilegal - Website Resmi Polri",
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
          "headline": "Akses Pinjaman Digital Meluas, Ini Pentingnya Jaga Arus Kas - Medcom.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9eeccb7e09423a97",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3c58cf7ba1853b97"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Moga dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a0f8765e1cd24d55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e4a81eed7084d301"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Chenel bermanfaat tetap semangat bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1fa3ef9e6c68d27",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e35fa61e5e36653f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang orang sukabumi juga?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a236e207fc21f11e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7213e581e58a8e3b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "karanganyarnews.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "PINJOL Dana Pinjam: Legalitas dan Risiko Aplikasi Pinjaman Online - Karanganyar News - Karanganyar News",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a4bf52ef38507cb2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "63f96c7bbf37f103"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hidup tak tenang dari riba",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a75507a1f2fc7bce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cf6bbd89a1e295a3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "siap bang 😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a7ae44392c692c36",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e9c18f111a813304"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Outstanding Pinjaman Pinjol di DIY Tembus Rp 1,4 Triliun, Ini Artinya - Tribunjogja.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-aa9223712fb480a6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3d0f2f5bf04e4eda"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "polres.karanganyarkab.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bidpropam Polda Jateng Gelar Gaktibplin di Polres Karanganyar, Cek Kedisiplinan hingga Mitigasi Pinjol dan Judol - Polres Karanganyar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-abf333f5591a5633",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5daebacaabb91d41"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lch ngg bisa keluar bang",
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
          "id": "auto-ac6c7ec3ccecbae9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "390097d82ca990b7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gada tulisan pitur nya gimana bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ad3c8abb888d7501",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b1119dd2b72d66f4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gaya Hidup Nyentrik, DC Pinjol Melirik Pinjol sebagai Penopang Gaya Hidup - Kompasiana.com",
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
          "id": "auto-b20ff7e437d421e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4b27b861dc377f19"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pdiperjuanganbali.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun pada Juni 2026 - pdiperjuanganbali.id",
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
          "id": "auto-b24178f802b7572d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8df3b7f0c69693d1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Thanks teritorialnya bang☺🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b27d4370d4fd30af",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b6004aee134654b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau buat berobat istri sakit udah 5thn belum sembuh2 bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b2848c19d7c25b23",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d5eca74dd486c4b7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Vibes nya dapet banget 🌈 💕𝐉𝐔𝐍𝐈𝐎𝐑𝟖𝟖🟣 paling ngerti 🙌",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b2bee7459cc5fb4e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a283e68cd490899d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gara2 hutang receh kredit score langsung ancur di bokir sana sini karna bi cheking tp coba kita renungkan klo aja pejaba",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b3f7f4dfdd93b6df",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fe37270e86682477"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga dapat buat benerin motor bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b49390f8a9210f83",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f89b1eedf090dec1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat pengobatan ibu 🙏",
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
            "7c3e7ec86a084ee5"
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
          "id": "auto-bc102e6031cad27f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "577190b12aa4f275"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang mau dong daget nya buat token listrik",
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
          "id": "auto-c0dcaf2328027c04",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "394154df5d7ff3d5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Suntik Pembiayaan Rp35,12 Triliun ke UMKM, Naik 23,25% per Juni 2026 - Bisnis.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c0e22a811320cd08",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a513f0849c6752dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "untuk bayar kontrakan bang",
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
          "id": "auto-c6061d0ce51d63eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7fa18d9b286df59f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gadget.qoo10.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Akses Pinjaman Digital Meluas, Tiga Prinsip Ini Bantu Jaga Arus Kas - Qoo Media",
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
          "id": "auto-c9347e6ae3c72f77",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f35a82108a3e7d83"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Pinjaman Digital Makin Mudah, Jangan Lupa Kendali Finansial Halaman 1 - Kompas.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ca0497f661860278",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1550881c85a219fe"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap auto coba nih",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cb6a7e97711f5543",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7b028e5bb8cdfc63"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga bisa masuk pas nulis pinjaman dana tampa KTP itu gmna",
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
            "b41aaf2ff9839714"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau Saldo Dana Gratis?\nTonton habis, dana kaget dibagikan jika video ramai mau buat kbtuhan apa 👇",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cea23315fb39237c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4b5a167256f63b73"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "seputarsumut.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penyaluran Pembiayaan Pindar ke Sektor UMKM Tembus Rp35 Triliun - Seputar Sumut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cecd0d07d82ca777",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "617640be96b6bb9f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "floresku.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Dorong Kolaborasi Lintas Sektor untuk Perkuat Industri Pindar - floresku.com",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf49db55d7dadaea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3cc555410ebd8d5b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radartasik.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Tasikmalaya Beberkan Data Umum Pengguna Pinjol, Paling Banyak Diakses Kalangan Guru - Radartasik.id",
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
          "id": "auto-d0cfd7f45fe0efed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7fcdf5d867f8bd0c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "keuangan.kontan.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Meningkat, Kebutuhan Pengembangan Usaha Ikut Melesat - kontan.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d21bd86dd10c0fe6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "76f64f14bd2152a9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "batamclick.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke Sektor UMKM Melesat 23,25 Persen, Tembus Rp35,12 Triliun per Juni 2026 - batamclick.com",
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
          "id": "auto-d76d3ef651644d38",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "443ceb7111535c14",
            "3c44f87637564e4a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir 🙏🙏🙏",
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
            "68faba050b9f409d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sekitar Rp105 Triliun Dana Pindar Beredar, Rp35 Triliun Masuk Kantong UMKM - Warta Ekonomi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e1e2ea2b289b1f28",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0477bcdc452e2348"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabarbisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Macet Pinjol Naik, Mekari Flex Dorong Financial Wellness Jadi Strategi Baru Perusahaan - kabarbisnis.com",
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
          "id": "auto-e46c73b230334192",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6a09ab0475bd2fed"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews.sulteng.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Propam Polda Sulteng Laksanakan Gaktiblin Judol dan Pinjol, Ingatkan Personel Bijak Bermedia Digital - Website Resmi Polri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e4a7d4a08c5cb5ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1e1c3751638aad4e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pintar Dorong Penerapan Finansial Bertanggung Jawab - Readers.id",
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
          "id": "auto-e99a8de588c98002",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "99bfeabfc862c763"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Duh pangling aku 😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eafd336daa60bf9c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7ef4fbf8481ca9b4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sangat membantu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ebd28216c8c2264d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6e3eb57646ec305e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Setiap minggu malem langsung gassGarudahoki buat tambahan kerja seminggu😋",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ecba762c69aa7316",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "91c953a8649a3c14"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mau bg, buat byr listrik sama air",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ed8264c53d0574b5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cfe69ddc2e632323"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Rupiah cepat, Julo, indo dana itu semua kolektor nya ga sekolah",
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
          "id": "auto-efd3091a0f148b70",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8ee52831588841f3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bener Ruben aku dukung .deposito di ambil klu ana nya Uda dewasa",
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
          "id": "auto-f0c169ea100b3770",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e308dda6621f7d44"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang lagi butuh banget ini",
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
            "ab1312784a79f339"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "m.rctiplus.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pintar Dorong Masyarakat Lebih Bijak Manfaatkan Pendanaan Digital - RCTI+",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f276872938ca8d2d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5f39bd7f0695eae4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "KELILIT PINJOL BARENG PODOS",
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
          "id": "auto-f7252ffd6ceea1b5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "583a7040e85dc881"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap sekaliGaru da Hoki gua akuin masih yg kaya dulu Gacor nya 👍👍",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f79dac860e2272b0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2c8f5aa6c5dbf00e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tradersunion.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK catat pembiayaan Pindar ke UMKM naik hingga Juni 2026 - Traders Union",
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
            "b1f6004e9853bde8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Top markotop🎉🎉🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f9871a3e88e9f808",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d520d318a4811735"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Moga rejeki kk🙏",
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
          "id": "auto-fc06d6810202d2fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "389c4ce445744e0d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DURASI DAFF AHHHH😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fca0ef925ae9471e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "540539219df4b531"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ngeri banget",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fd2505ba219cf994",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "178375179725b20a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ko pas di ketik fitur pinjaman dana tanpa ktp ga keluar kaya yg di video dh bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fdc5f3384d19bdc4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b3dac6f94df00da2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanewskupang.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Propam Polres Kupang Gencar Berantas Judi Online dan Pinjaman Online di Kalangan Anggota - Polres Kupang",
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
          "id": "auto-ffa197cb5c81b329",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d672a8f26b7bcddc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "suka saya nontonnya tpi durasi nya pendek sampe harus di putar 2kali video nya biar habis makananya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ffb8828a0938af15",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "708cf4de5c7288ab"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Akarrrr pohon gak tuhh 🤣🤣",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1899cdde6aadb9ca",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "88acd304b47c015f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Pembiayaan Pinjaman Daring untuk UMKM Tumbuh 23,25 Persen - RRI.co.id",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1eca9570925e5ddd",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "bb7931404292412b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritamoneter.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tumbuh 23,25%, Penyaluran Pindar ke UMKM Sebesar Rp35,12 Triliun - Berita Moneter",
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
            "1e2a0f83a29ceb2d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "batamtoday.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan UMKM Lewat Pindar Capai Rp35,12 Triliun, Tumbuh 23,25 Persen — Batam Today - Batamtoday.com",
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
          "id": "auto-5f1c3c2a2b5a0846",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "39903314ef06bfe2",
            "d5890c325df9609a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "radarsampit.jawapos.com",
            "teropongnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Tumbuh 23,25 Persen - Jawa Pos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-62970d4608740687",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "dadb41323c3eb342"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "media.alkhairaat.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Fintech Lending Salurkan Rp35,12 T ke UMKM, Tumbuh 23,25 Persen - Media Alkhairaat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6b63a17da9dfede3",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "884255b12b247038"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "afbtvkupang.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pindar ke UMKM Tumbuh 23,25 Persen, Capai Rp35,12 Triliun - afb tv kupang",
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
          "id": "auto-b55087d33cc2b715",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "7af97e9db14ea70b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Pembiayaan Pinjaman Daring ke UMKM Tumbuh 23,25 Persen - RRI.co.id",
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
          "id": "auto-cbf2eeb551071f98",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "477f127a2db75520"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sindomakassar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan UMKM Lewat Pindar Tembus Rp35,12 Triliun, Tumbuh... - SINDOmakassar",
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
        "fcfb23a68987d6b9",
        "3d7a39fbf51d3bec",
        "1cd6247f9544a2f1",
        "3ca6d5770bc919b6",
        "6d86b7d4b195b78a",
        "0ed3f1da6782f848",
        "87625f6aaeb87697",
        "1f4c23ce065e2824",
        "703bb14a90369a78",
        "cc2f41d978b8a972",
        "e9c18f111a813304",
        "3750576af0ee1c23",
        "fd94b815690c4544",
        "3026346dc1690fed",
        "8ba979dac9358c32",
        "bb56ce88c02a0dd3",
        "f297aef4faf720a0",
        "fc8e602c65cc9121",
        "037269bbc79f1f6f",
        "f6ac4152bf264120",
        "e5b1b06c98ea8755",
        "372f0cb02a6bbba7",
        "72f266389f7af1ef",
        "c74e1b0b986d98c1",
        "6a45280b991b1d81",
        "0477bcdc452e2348",
        "77bc91e70004fc5c",
        "637346720266d7a2",
        "91ce7f0c75e9a449",
        "7eda1277e045527c",
        "9d8fdf9b3f73e08a",
        "1a1da0d4dcd2ef69",
        "b3dac6f94df00da2",
        "e1c5aeabe9340aeb",
        "68faba050b9f409d",
        "22c9716a28748728",
        "9b984a455b012533",
        "c99ad5880d5953e2",
        "50fc587dd8326337",
        "ed441a86f47be5ad",
        "cafbda84a662d708",
        "3d0f2f5bf04e4eda",
        "ad9b9d210c84dc91",
        "b8155bb4c4ba6f6e",
        "139b3111765b8122",
        "4c3a12d116ba1eb7",
        "f26ac5ca1f45dfdf",
        "6a09ab0475bd2fed",
        "a6b400ae01e2f4a0",
        "5102795e696770da",
        "4e2ea734688a6d45",
        "c95526c31e62bf86",
        "dc4d858a8c217915",
        "a009719cab861231",
        "c00759a68d847a92",
        "57757440e4cf917b",
        "6971e41fc0f9c01a",
        "abeb46890e35e7c4",
        "5d3c46081b3df85f",
        "7ddd13b9c3722373",
        "6da80ccf7aa832da",
        "b3ebe61374ca43b9",
        "706ba1fffa96e1ed",
        "8249872ccdba3d32",
        "b29ea18924f83c7a",
        "9595f1baea4b4197",
        "8305648080d5ae94",
        "3dcf509402f7b3d7",
        "2df66e8ac3ff929d",
        "1ece15bc3b69518e",
        "2c8f5aa6c5dbf00e",
        "dadb41323c3eb342",
        "84df4d420e536ef8",
        "7d5c508eae8f32a3",
        "5dd3a848326b12fe",
        "acf574c3d0dd0b7c",
        "76f64f14bd2152a9",
        "bdcc4feaccf2d1b6",
        "7fcdf5d867f8bd0c",
        "4b27b861dc377f19",
        "1ad63413f7b9c878",
        "39903314ef06bfe2",
        "d5890c325df9609a",
        "6d9afa6502dc61c0",
        "8e30380c0be4f8b3",
        "477f127a2db75520",
        "0940fbda68096536",
        "19a17019d12e4776",
        "2cbb6f9878afebf8",
        "394154df5d7ff3d5",
        "c96092ed7bbabb5b",
        "ecd789ef2cf2d2f1",
        "b197b2a76959b011",
        "bb7931404292412b",
        "67d87dc1edf0bae7",
        "39f56c8b045bc9c7",
        "331ab305cc9dae0e",
        "de3c82ab40d8e265",
        "5d0f09ca364f3aaa",
        "bc53a40dad8ffc09",
        "b1119dd2b72d66f4",
        "c4e59d9701d3ecc8",
        "c64cd7a87e6f1b84",
        "ebc82de4feda1017",
        "88acd304b47c015f",
        "fda994c837e5bd15",
        "c1884f6589cd85a7",
        "7af97e9db14ea70b",
        "69898acf58ca3329",
        "2253e329b46bf725",
        "12a29049cf6d900d",
        "6ccd01a396e098db",
        "884255b12b247038",
        "1e2a0f83a29ceb2d",
        "fd6286191935f23f",
        "faa43505eea2113a",
        "da2cb8b11546f28c",
        "f91723f5b0e7ef10",
        "617640be96b6bb9f",
        "a4562639d2330a34",
        "7fa18d9b286df59f",
        "b6594350d7269970",
        "8742ec654ad2c0d8",
        "f35a82108a3e7d83",
        "7c800c95cd010263",
        "6116ea4b627da650",
        "930b50ed72d93daa",
        "b08857674706d00b",
        "ab1312784a79f339",
        "1e1c3751638aad4e",
        "a169bdab7089bb59",
        "16abddada80f27fc",
        "db4169194bce96a2",
        "74afe69baee02868",
        "3cc555410ebd8d5b",
        "7213e581e58a8e3b",
        "4e5015923eb438af",
        "5578066bceb358b1",
        "d47d2c5d95fbfecd",
        "834f8b0ab359383d",
        "4b5a167256f63b73",
        "fc790d93a168adf4",
        "a5bd896f796318c3",
        "47e96ceb929e7f0e",
        "3e06c99ce020095f"
      ],
      "socialItemIds": [
        "0156e9967404bdd2",
        "4115514b8518493a",
        "23ea986f05322136",
        "d1205c1381313fec",
        "0d3dd58f2c5e2c90",
        "5daebacaabb91d41",
        "1550881c85a219fe",
        "ad1e51057241bc48",
        "cfe69ddc2e632323",
        "fe4929d64768221d",
        "b6a474139a4d292a",
        "1893ffa11393f95f",
        "962d7c8dd0491c51",
        "0ed4ae14ae6442ba",
        "7f72c6d26f0acc07",
        "52869ff1599c9c6c",
        "fc5b2ef01a2529e1",
        "f281c291e71467eb",
        "e5db3bd5608da740",
        "644cbc8a31dd5204",
        "61e7c934f936fbbd",
        "a41b29ce251505fb",
        "c2bf918b2aaf6d52",
        "8ad9c581d7da9025",
        "a4c29e8a009a82c9",
        "7d34bafc42848201",
        "a513f0849c6752dd",
        "1b85131a649bc29b",
        "e2b9d398701526b5",
        "5b0b5d14cd6b8e49",
        "d4295c691b23bf67",
        "a9c72f52a4ea4745",
        "2f984819ce4044dc",
        "4a6d12e292a4b042",
        "3a109bbf8980c001",
        "714f4d92be9f3a50",
        "a985ea8c68679e23",
        "390097d82ca990b7",
        "8e0e0a9883889854",
        "e308dda6621f7d44",
        "ac777f676cc247eb",
        "f9dcb9f204dd0683",
        "7c7ddeca8c33247a",
        "04d6aeeb2ca571ce",
        "178375179725b20a",
        "2b6004aee134654b",
        "37bc9e98ac342608",
        "540539219df4b531",
        "d28ee9f147867326",
        "cd55cf5f1072dbc8",
        "ca5d57b8ab221975",
        "c230356dda0a7a2e",
        "55ad7de49dcd1b25",
        "418e3153f8e70f0f",
        "e72079147e80ee85",
        "b1f6004e9853bde8",
        "a283e68cd490899d",
        "f2ce4d9d3ce4833f",
        "91c953a8649a3c14",
        "ed534c38830bef18",
        "8e2edb4ceca95531",
        "fe37270e86682477",
        "cf6bbd89a1e295a3",
        "5e072255b18b18ed",
        "7bf6f3d7274b6468",
        "9dc6d4c566fc2a1c",
        "e35fa61e5e36653f",
        "8eb1b40db72fedc6",
        "3ba3c19604f56f93",
        "7b028e5bb8cdfc63",
        "cf31faad4e48bf1b",
        "acacc03503b29ba7",
        "577190b12aa4f275",
        "e2387bb27b3e82d6",
        "13554317c2939ac2",
        "783f594cc943a314",
        "6a1da5a46b881dcd",
        "6489d0bdad8b8302",
        "fff6267c4217436a",
        "96c6147022b969cb",
        "9418f3ff9ca34161",
        "209c50966eec0ce6",
        "2f2d4dc6e194f16c",
        "2afc45fabf2f7c6b",
        "1103d3b615f477f9",
        "861ab8c973fd8dde",
        "e3adcb757ccf13af",
        "8ee52831588841f3",
        "9da10ff9f3027881",
        "f89b1eedf090dec1",
        "7ec76ebcb77c2eac",
        "7ce07634feb7c8be",
        "1f1ba852f462c63b",
        "d2583d98f685d45c",
        "c38160f595745310",
        "17f2314f1544ade6",
        "28f276d2060b47c2",
        "ada38103f883e016",
        "095e688db21bd40d",
        "fdc624dbfeff2017",
        "6e126d959a5a795b",
        "8df3b7f0c69693d1",
        "38adb53ee3cf55ea",
        "8f42b033781e1cf4",
        "61c2bae02728eae4",
        "37190badb55b9776",
        "e28acd13b4533e00",
        "3ac1d631d201995e",
        "9e0ca7b09224228b",
        "c566e9051a2dd50b",
        "81818a500b08d079",
        "708cf4de5c7288ab",
        "2d61d9bc14ec8e44",
        "e54c3887db590937",
        "e4a81eed7084d301",
        "389c4ce445744e0d",
        "f6cf750cac9cfca1",
        "443ceb7111535c14",
        "63f96c7bbf37f103",
        "5f39bd7f0695eae4",
        "7c3e7ec86a084ee5",
        "b41aaf2ff9839714",
        "3c58cf7ba1853b97",
        "d520d318a4811735",
        "4de3e8b6963fb9a8",
        "85e4ed5b93e66b4c",
        "c3f5773f4bd70de9",
        "19cb2232508fb0d8",
        "ecba42514ec532fe",
        "2df9d2bcc0f3acbe",
        "5c7c57f246cb49ea",
        "3c44f87637564e4a",
        "c488681070fa3582",
        "bb4fc5975e291dc6",
        "ac694d269b4abc10",
        "d672a8f26b7bcddc",
        "c2a27a1c87e0c456",
        "c0d02a9a9491c64b",
        "a446d4e8d96143bd",
        "2394673944527667",
        "e8d7aa730a253e92",
        "7281179bf24e1a63",
        "99bfeabfc862c763",
        "33c03ce0ddb4a665",
        "db35799ea36ebf93",
        "c4b9014ae6b318c5",
        "17751d32e1137ddf",
        "87c05d27ac181777",
        "583a7040e85dc881",
        "0bff033876a67df1",
        "93de7763c1d12cf7",
        "7ef4fbf8481ca9b4",
        "ac17d9308ca9d20d",
        "6e3eb57646ec305e",
        "ca51513e1ebcee4a",
        "d5eca74dd486c4b7",
        "48836209421fc13c",
        "f93d5bd187517e82",
        "4b6d93b632d5a7c7",
        "8c4722c327fcbd8b"
      ],
      "_newsVolumeRaw": 146,
      "_socialVolumeRaw": 209.6
    }
  ],
  "articles": [
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
      "title": "Laba Pinjol Melejit Rp1,15 Triliun, Nasabah Makin Terjerat Utang - Seputar Cibubur - Seputar Cibubur",
      "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPSVFtYk8yQTZFdmZNTDIzNlZLcExhdlVTNDhLbTlkQ0hLUFREZ3VMMUZQLXRwZEVXd2taeV9GbGJ1bUxkbEZKOGdJLXJIa0dhZk1pN0RsNTNLX3RMakJWb3JDaGxIOWpHd0cydG5SVzlNazVjZlZTMDh5U0NFYnlKcTZKWEloWHlGODg1Q1FIeGpWcnVKQXZfUm9PbkprMmJ6a2h4aGRETDk4WXNITlRfM2Q1amlaZERsQ3B3NDdwa3F3MlFOZEVROTFiSFp6b2xaTVBhTC1aXzVRb1HSAdQBQVVfeXFMUDJiNE0xa2lud3pGcjlQdzRLc3AyVGlUSERQalpYeDZUYVpNdU14U3hwaWJ1eUw2b2lLWXl4T2xOQ2VNYUZGNktBcjdTVmRxUEhLRzBxckVaMU9yYUt3UVdvSUxTd05NNjc4cXlucXpDZ2hsUk5qYTdueHN1VHRpSHFHOEdOUEFXRkNpVWp6UFJEVUx1SWxXRXNsRllScEpBRmstX3h2YTlYellETGliajQwcnpGbnk2Q0xqX2J2SXVfcG00WEZhMjlYQjRxYWhrYjh6aEU?oc=5",
      "publisherUrl": "https://seputarcibubur.pikiran-rakyat.com",
      "source": "Seputar Cibubur",
      "summary": "laba pinjol melejit rp1 15 triliun nasabah makin terjerat utang seputar cibubur seputar cibubur",
      "id": "e56be7805fee1216",
      "domain": "seputarcibubur.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 65.4,
        "label": "mixed",
        "negativeWeight": 3.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3217b8de30ea2044",
      "eventType": "industry_update",
      "eventSeverity": 0.18
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
      "title": "OJK Sultra Catat 311 Laporan Pinjol Ilegal hingga Juni 2026 - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQb2o2aVJIQVltQ1JZeGpWOHZVR0x1Y1I3MTZGamRGOEJBeDh1TXROSzhaMGZneFVZU3laU04wQlFBUHlmTlNBR3FPeXZjSWJCTUlSNWlLRE45QTM3UlNpWUpnQXFzRXFacVJtU3g2QkRSRVp0Yk1TWHU2OUZoZ25VbG1RVUhaQzZXdUxnc01BT1N1QU94VXJHU2M1WGk2ODZ0VUZJVg?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk sultra catat 311 laporan pinjol ilegal hingga juni 2026 rri co id",
      "id": "0f4e33d2fa817915",
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
      "eventId": "auto-dc64c95407b69067",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-10",
      "title": "OJK Tasikmalaya Edukasi Mahasiswa Baru Unpad agar Melek Finansial dan Terhindar dari Pinjol Ilegal - NewsTasikmalaya",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQZWNFZm1pU2NsQjFySkV5T1J6VzJLU1pSbzZHTy0xUEtHeVV1Q1hSWmM4RFdHa0NDV3lfVkNpLURGOWdtQTdUZjJTMWxNNjZaSGlpZWpyS09mekJ5Wk9mWmRQWE0zdEpCQVVSb05iQ0pKXzNyZ0tSNldjdXpkUlZTYkN1V1QwcmI5MDJqMGpfbzVSZWhFQnJ4YnVKeFRYMFVRYm94dy1BdGpGV2xjUjBFY21qN0xEb29vTzlJQl9QN3hEUS1i?oc=5",
      "publisherUrl": "https://newstasikmalaya.com",
      "source": "NewsTasikmalaya",
      "summary": "ojk tasikmalaya edukasi mahasiswa baru unpad agar melek finansial dan terhindar dari pinjol ilegal newstasikmalaya",
      "id": "0ba7bc443a1d68a4",
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
      "eventId": "auto-f3067560d5a5cad1",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
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
      "title": "Daftar Pinjol Resmi OJK Agustus 2026 dan Cara Mengeceknya Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQX09IaG51YUN5WVdDVVdBRG9IYWlUaGxwUkhnUWZTQU1sc1VmYzQ5LU9uOVhIbk9jaldUZVBqRjl0RzNCOVJ4YjNRMzhIcDhBZ044UU9RbThvVndhSGt2MnNDdWVJbVlkcVhqNGN6eGExQ1hLWTRWeV9hRmVaV19ieG51S2FONnpFRW9LMTlTZ3lOSGVtbG9xajFRb0Z4bmYzZUpQbDFUQnJwQlIxazdBS3NoYTR1Vk0?oc=5",
      "publisherUrl": "https://tekno.kompas.com",
      "source": "Kompas.com",
      "summary": "daftar pinjol resmi ojk agustus 2026 dan cara mengeceknya halaman 1 kompas com",
      "id": "d68409ddad2c0a96",
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
      "eventId": "auto-4130841654e6b60a",
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
      "title": "Industri Pindar Nasional Masih “Seksi” Bagi Lender Asing? - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWFg3S2RfQ3h0V0ZpS0lkOXdEUXN2djJ1UExXekc1V2dMcEVsOHgxR1B5cUQ5Y1VEd2pmXy15RFJITGlmUUR1cFFqT0tYVG5hUGtPeVF4cDJLNUJ4S1J5ajlZM0FmcXFOWkI1SDd4Q1ZQelRMZm1CMVZUbmR6aVlpRTExenJ5U05IaFczVnY0TWE2Ni0yUlZ6cldvZF8?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "industri pindar nasional masih seksi bagi lender asing investortrust",
      "id": "ec573436772a6700",
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
      "eventId": "auto-12bd0d108b5f7311",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-11",
      "title": "News - Kudusnews",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQU0xyankyLU5nbV9KakpaQmdsYzl1SUJhNEVsZFB1Z1BkbkZfenN0MlQzd2t3Wk44X0NZakxjQVl6Rjc4VjBuT2hlWUxuMFZONUlKcW9YM20wQkpZQjFwZjA4VXh1MjAyOHJ5SUpFSDZNcFBMMTA4YkFsa0xDQjdJWkY2d1VucHVOTHNsTi1TNmhIRDBDZl9xbFI3Rk9vVHpmZU1pY1dZcw?oc=5",
      "publisherUrl": "https://kudusnews.kuduskab.go.id",
      "source": "Kudusnews",
      "summary": "news kudusnews",
      "id": "3c8197ba089a87aa",
      "domain": "kudusnews.kuduskab.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2d18f1df68d73647",
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
      "date": "2026-08-11",
      "title": "Tembus 387 Aduan, Perilaku Penagih Utang Paling Banyak Dikeluhkan di Sumut - detikcom",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPbnY0SzZpRGxEM0NNd2FOdFgzUDIwdWMtREVrMno0cDl1Z2ZvRWZvQklDYUdnMmJEc09XT3o1VlUyRXVabHhWMUluVU91UkR6djVpTFlSMUNvcExhSjRFOTFvY1ZlNnRfX3RoV1N6aVVvWFNFVlpVeUNVQzRiVmQ5ZVV4S0hqUGNROUFFN1F4Q3NiXzUyTlZ2bTdoRFRwZkFsV3NuSXpyeWdjZVJmcVVzZWlCWnlIdHBlZnfSAb8BQVVfeXFMTUN1ZmszaTNpS0drT20wYWZBcGVnYVFRMFR1NGdLVnZOOXFIVmpQRG1lOHFpYnRTQ09KTjMwc0MyX2VQX3ZVZ3pwemRtZjZzS3NIODVQRnRCX3IzYmc0bnVldUdkYi1RUkVWdXFvOUVEa3pZeThaN0Vick9iLXhyS0tQWVdkRW53bWFsZUNmdVFkbzlER0Y5SnAzcFg2ZkRvTFFidHl0QlNhbTFELV8xeVRHVmo4Y3JyRkxvS0JIaVk?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "tembus 387 aduan perilaku penagih utang paling banyak dikeluhkan di sumut detikcom",
      "id": "d2a05457b2ee3a81",
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
      "eventId": "auto-a949423978afece3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-12",
      "title": "Calon Pengantin Diingatkan Waspada Judi Online dan Pinjol, PKK Makassar Gandeng OJK - mediata.id",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1lOTBuekV2b3FPb2RnV1pTTjEtRHFSTGZlaTNXMUxSRDNjWnhPWTJOUFc3Y21YMmZvSkEydnVULW1ocGRMMlhXR0hoWDVWNXV5a29fVlFuQzlZbG40dnd1VVBKRlJ2N28zSnlZMXB6ZXlwNnl3NUI1ZnJjbw?oc=5",
      "publisherUrl": "https://mediata.id",
      "source": "mediata.id",
      "summary": "calon pengantin diingatkan waspada judi online dan pinjol pkk makassar gandeng ojk mediata id",
      "id": "26e1e4417fc6ff70",
      "domain": "mediata.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b06ad3d8e50f3c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-12",
      "title": "Debt Collector Bekasi Pukul Warga Saat Menagih Utang, Komisi III DPR: Ini Pidana - Jawa Pos",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPLWJDeFhOT0NMaW1wcmM4Z0xQQVBxbzVyYi1HbGNXQURzRHFLOHhZX04xWFBvYk5IcW9TdTNMUW1oRmxHUnBwTDF0NElyZS15bEFwWThrdlM4NlhydXNsRl9vUjhnSW91X3pZYThtbnA2VGJFSDRtZDg2cEJLVkNxVUdjZDVGUW1oNUdlRGFNclc4clg0ejE1Szk1bG5pY1JIRFlvY19wQ09HM1BlVXFfaDNyT01fc0FiakgzTFpUY0hxbVdzXzRLSkZB?oc=5",
      "publisherUrl": "https://www.jawapos.com",
      "source": "Jawa Pos",
      "summary": "debt collector bekasi pukul warga saat menagih utang komisi iii dpr ini pidana jawa pos",
      "id": "0ff56bb9098c7ec8",
      "domain": "jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-155306ad4bf28d1c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-12",
      "title": "Industri Pinjol Raih Laba Rp1,15 Triliun per Semester I/2026, Naik 10,41% - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNeWZ2c2ZRU3dlcENlNjlCY2hweVVBa09UUGlYNmlfSDV1V1NJRHZhSFhlZER2VnlLdElFRU5oc1RKVFBwdEV2bEVfeUFGbFJ1M3hLTkkzcXZ6aTFfVE1wY1RaRmpMMlk3UGdfa21QRk1uSlo0VHhjYnpMMEZhaHBuaEJ4MmRVaE1vWVQ2Zk5PMDZuY1NqWmwtYV9rVjkxMnl0M19wbzJ6bzhSdzJHSGxaWXBpNkhfSXE5ZlNacWpPSFY?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "industri pinjol raih laba rp1 15 triliun per semester i 2026 naik 10 41 bisnis com",
      "id": "8d16c5f406b98887",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5c090a5e3109f6b2",
      "eventType": "industry_update",
      "eventSeverity": 0.18
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
      "date": "2026-08-12",
      "title": "Perbedaan Sikap OJK dan KPPU Soal Batas Suku Bunga Pinjol Bingungkan Pelaku Usaha - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNY2dIVFBxMS0tMUlSUHVBTjd1QzlMYXhVMm9IYTJJTjhHWkZUQXVBWTVHU2lzMGlEUy1WVkZZLU9UemZCY3ZsMXhqSkt1ZlVadHY5QWVZYkdQRmwzT3VlSG5WY2swUFR5Tm45dkJYSjA0eEI2VGd4LW1zbXlrV2RZdXhVSmg3d3EwTTRnckxNLUg2X0hDYWZaazB1MFNFYmx1M0RLZjJmOVFGOWxnaW5xMWpSSVBoWlNXZklYaHU2WWY?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "perbedaan sikap ojk dan kppu soal batas suku bunga pinjol bingungkan pelaku usaha tribunnews com",
      "id": "0f50037d7f0caf68",
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
      "eventId": "auto-8989ce0ec54a3163",
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
      "title": "Banyak Nasabah Keluhkan Pinjaman Ditolak, AdaKami Perketat Pembiayaan demi Cegah Galbay - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQR1pvVkp6MHpKeldEMFNvczJLZml6VE11NG9ZLXcyd1NGWE92UXV6MlJrek1xNV9NVmhDaUUza0VDYWRleDIxZE9lMUxYUkdBTTRHaHcwakdjMWIxU3RwZGJGeUtGSFpCRk56RG1saUx4ZjdHcFJyei1kcklYUld5Y0J4TTZLMlltSVFTbkJ5Rld2UzVBUndWZjR6UDZCZmFNZllMWTFuOVc5OXNiVEREcEh4RXhIelBxVE9ISjBpY1loM195UDVOUEZwU25UY1NQdlp6VFRlQkU?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "banyak nasabah keluhkan pinjaman ditolak adakami perketat pembiayaan demi cegah galbay bisnis com",
      "id": "6768fdfb5beeda2c",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3fa000e5a4380c9c",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
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
      "title": "Kemensos Tangguhkan Bansos 259 KPM Terindikasi Pinjol di Kabupaten Tangerang - Kabar6.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRGJVNEQ0WDJxRmRTOHlXd2pzVEJYRm9TVFpmc1hHdVZldWhldUFOcUYxRm9wN3VnQ2FhRnRPTzB1d3RIaXdydENsVDlUcTBwbG9kcWVwOEZfdHB0YlZqZGY0cm1Vd2xSRVJmNzFGVUdfVklBcDNHUlN5UzRjSFlxcnNtVWlPVERCN2lWUWZGa2F1eVRFU19Ld3ZoQTg?oc=5",
      "publisherUrl": "https://kabar6.com",
      "source": "Kabar6.com",
      "summary": "kemensos tangguhkan bansos 259 kpm terindikasi pinjol di kabupaten tangerang kabar6 com",
      "id": "b5c961ed5a7665c1",
      "domain": "kabar6.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a5905bc732aa9a48",
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
      "title": "OJK Ingatkan Mahasiswa Undana Jangan Terjebak Pinjol dan Paylater - Pos-kupang.com",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPa3RVTnRZMVh3dlJIUUJJckh1MVpkc1laRzZST0pDMHlfRFJVNEhTTGt2RnphTmZQNWxqYVMyOXRiemtaOXdQc3NjSElHekVhUXM3ZFFkcnB6dE9saXBsaEpYdDNxTnRaOThWYzljNmJwTG5sLU9NbmM4eHVfcG8wV3I2cERFTlVUeFpvbzgzOVRjV2JKLVRUVzBBZ2lCVDAtc2FnSEpLbXhOTXAtMzVHMGxnR0dra2FUR0ZKSUNnQXdTdVRHMmVkek9MR0hUMzhZamc?oc=5",
      "publisherUrl": "https://kupang.tribunnews.com",
      "source": "Pos-kupang.com",
      "summary": "ojk ingatkan mahasiswa undana jangan terjebak pinjol dan paylater pos kupang com",
      "id": "60b42055c6f124bc",
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
      "eventId": "auto-efb74e3493f20669",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-13",
      "title": "PKK Makassar Bekali Calon Pengantin Cegah Jerat Pinjol dan Judi Online - IDN Times Sulsel",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQRWtpMW8tVGowMGV0S09VcWxEQ1VoNzRMdC1GcmxvWGxWVjRmbTdtai1QQU1KYXRGbHE2V3BSSTNvQ090ak1ndENKVFk3Z1ZodVRYdl9GMjRidGhCYTl0Z1QyTkdYeWEzSGhsZ2lVSVM0a09WR2xOYVdFTlE4d1o0RVJKNFM0ZmNVeXB4UWJaUnRtMUdPN3hnM3libjA4X08tNlc3UzAtNGozWjYxcjlnNlRFc3ZYMUViVmI4UHd1Q01aMldpOGJ0NXhfbEk1WHg2dUHSAdcBQVVfeXFMTk9IOGhXbGJncHJ2b2NKMHpRNHdMSjZSa01tNm0yMUxsUlctb1A2RmxHVFFRTDN4a19Eb1pTazFpa0xBR2VNUzVzcDNER0x1QjRYamNfMi1lajhBcS1FTEprTXVDUGNFeXFaZWdIYlN1dWh3cXJkMUNSY2s4ckVEQlI0cXVXSkVadFdBRHFTR09KWU4zY1RPNUNFSFpiTWp3N1F5N0Z0dzhFdWxvcDJPaDlCN202QWRBeUVrQlBhUXgzTHhKT0gzRUFkRmt6UU4ycFFJUXJKbHc?oc=5",
      "publisherUrl": "https://sulsel.idntimes.com",
      "source": "IDN Times Sulsel",
      "summary": "pkk makassar bekali calon pengantin cegah jerat pinjol dan judi online idn times sulsel",
      "id": "56c72c1a0c482a2b",
      "domain": "sulsel.idntimes.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ce6676e140ee3a58",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
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
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOV0xaTUFnUjk2Skk3SmJsLWJHVXlJbzRBMmc1SE5IVkx3eDVwaUtoUVN5YmJhZE0xdW9IQWJLTkhoMnRJSUJTd05DYXNaaGxYZG9pYzRIbi05TjEteWEtS2w5RFZHMWlKWWtfM1ZDdF9nMDNpYXRTMnU5VGEyVG9GaDdtbUFEY3JyQXRlbjZ0akFtY0VTUnNNZU1FeDlCNXVLb2NDZzB4VHJ0Tl9PM2JzN2ZpZVFoTGVCY0xzYU5GT3N0VWdHUEhJdDZDcTZKZEJpYWlIeWJyalRNV1d1RVpwUnIzMHQ?oc=5",
      "publisherUrl": "https://www.jawapos.com",
      "source": "Jawa Pos",
      "summary": "tekankan transparansi informasi dalam penggunaan layanan pinjaman daring lewat kampanye buka bukaan jawa pos",
      "id": "2790a44fe3aaa89e",
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
      "title": "Ekonomi Indonesia Tumbuh 5,45 Persen di Semester I-2026, Ter - Tribrata News",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNZlM3TEZjUFNxVjQ4dmZ2WTI1aloyN3Rrdi1QUUNaZFQxamR3Umx5ejBUSHpwOFlaci1CQVg4MUdCY0lVZExTaFh2SFUtUC1ELVJnR1JDNUx3UnF0VThMSVY4Rm5sckhqbENBaHVpTTRuRDZFaGdhaWd4T3Z2S01BeEhnb1FfOXd2SDRIZUJId2pCZGpFRmthZTJuNVFmdkRwY040ZjRELU80Y3VRV2dLMUU0MFUxU2k5cjR5bWJuVGVOY2cwRlBhUTBXOTVKLWxa?oc=5",
      "publisherUrl": "https://tribratanews.polri.go.id",
      "source": "Tribrata News",
      "summary": "ekonomi indonesia tumbuh 5 45 persen di semester i 2026 ter tribrata news",
      "id": "56dc4b8a08f865cc",
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
      "title": "Gempa Bumi Bermagnitudo 3,4 Guncang Malaka, NTT - Tribrata News",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNMVhmWWVrQ1BCWU00QVZaQ3pNOTdnaF9UdFZ6UHJ1QzI1ei1iV3lOMkhtM0libktGY3pCV21obFk0Y1BmTXZpc29mZ2djWTc0c1lMV3E2dV9sbzlXcm4zbHgtNXNNSUV2TzY4VTdwdHowUnpITHBSeW1Sa0FySkxaQ2JYVVBkUENZLVJueFBkRk9xWVZHVVloemxKX2pMMWM4b1VN?oc=5",
      "publisherUrl": "https://tribratanews.polri.go.id",
      "source": "Tribrata News",
      "summary": "gempa bumi bermagnitudo 3 4 guncang malaka ntt tribrata news",
      "id": "c278b882a836f2f1",
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
      "eventId": "auto-03c8e21ec09bb445",
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
      "title": "Diteror Pinjol Harus Bagaimana? Ini Langkah yang Bisa Dilakukan dan Cara Melaporkannya - taktis.co",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNNWx2VkNpWEE1M21zaXp2YTZlX28wLTdJM09fcEVuODMxX3JUUHB1Wi1MTmtOcTF3ekhFXzNDSkFKemZZdWNOSFNfUGI4OFM1cTNzSlQzUURaNElSbGd5T19UOThkOG1oSlBhTlE0RURuLVVOU1lQeEhuWnk5aWdXRG1FeE1wZ21ZTXlxbFdCTk8tREV5eG1idzR2Q3pqMmFtdkxQQXE4X3RNcThW?oc=5",
      "publisherUrl": "https://taktis.co",
      "source": "taktis.co",
      "summary": "diteror pinjol harus bagaimana ini langkah yang bisa dilakukan dan cara melaporkannya taktis co",
      "id": "3ae7b0cc9a6e11ad",
      "domain": "taktis.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 87.1,
        "label": "negative",
        "negativeWeight": 5.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f07f66728bf1dc6b",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
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
      "date": "2026-08-16",
      "title": "3 Cara Menghapus Data di Pinjol yang Belum Lunas - IDN Times",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOZXNLOHRlQVFGd0RjR3FfV3lnZ2hiSjJNUkJDZXM2TmFvcmQ1eTV1Yy00Ul9rM0libzJTT3ZpVkNiYTg5ZjBMRUdjdDBlSXBuMFhNQ29Sa090V2U1WUxqWHRXNmNoQm9vMWpVaG1wZGE5S0YtbC1WLXNKWjVTZGRPUmtsVmFaNU96SUozMkJRZXQ4R09LazRPelIyZGdOX3RhNjVpb3g4MNIBrAFBVV95cUxQZXZRSHpMV2RzYTVjYk1abFZCVVZ6N25hRzljT1J2ZUN4YW54Y05ZcGk4b1N3RlVpR3RtT09uSVF3M0czY2VRTnlXbjdMREpTV083dFRDWDYwdWVEQzJmeWhXM0lWNnl3cnNKcVN5Tl9VazNReW5XSFhBNm9vcFExMWk3dU02WDZpWHV0OHZJQjlSTktRTDBCbTVOTkxtWWtFS1NWNUJ5b3ozR2Rw?oc=5",
      "publisherUrl": "https://www.idntimes.com",
      "source": "IDN Times",
      "summary": "3 cara menghapus data di pinjol yang belum lunas idn times",
      "id": "d0f7beba61752010",
      "domain": "idntimes.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0502e0e3407501f2",
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
      "title": "DPR Desak PPATK Usut Sumber Dana Industri Pinjol - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE45MVh4OTdDb05hNVg2RzdmZl9NX2c3c2NVVnVhQjZZY3RHUWlhczVqbGxGSGhsandacXlJTWpUUk0wcEJHaXZGdTgwRC1KRG1VSWVaTG96MjFaV0FKc29OWWRSdkRzSmhtMGg2Uw?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "dpr desak ppatk usut sumber dana industri pinjol achmadnurhidayat id",
      "id": "797ffd55277cd0fc",
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
      "eventId": "auto-9dba659982dc148c",
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
    },
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
      "date": "2026-08-17",
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
      "date": "2026-08-17",
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
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPVDhybzdrNnF3M1loNjcyd1ZjQ3U5dVJNaXVqakVhY2llV2gwc0daekowUGZfM3RjRzRPMm9fVTJCQ1lvYnhjbDFsYnJLTjNVeGZwX1lTSzVDdEw1cDdxU2ZjcTh6a05uYzBGN0VzS05yQzVLakZKeDdPV20tT0YxYXNpNEhBUVBqT2NhREEwckdOSTN0cEpiN0M4d2RraGFVZ0J0X0MwSWpwa0ppRm5GcHlmUDkyMHF3ZVVwcnV1NUdMbHV3ZTUtM2g1N29yMDBDMkV3NU0yLWrSAd4BQVVfeXFMTVhmVGptSjdQUnN2UUIyTWZHaU9KbmUwbW16d2g0MGJXNHhyaFh3NUVXYjF5eW1vcWJURjk5QkFXNE4xY0dUUmY5Wl82OXdaT1RwbUtUampETnhtU25velhpZW51U2M4bGRqVVlfalMxSi11X2h5VGVwUXhlbzNsQVFXUUxyaEpoQUJNR2I4azRwaFp6NHpiN3JKemRWUUlzblF1Y01IQnBPVWRpMWZEb2JMS2stWHFWdG9SdHd0bGE3X2NYUHQzMy1WeXotMHA0eEg1R1pkR21CbU1LNmxB?oc=5",
      "publisherUrl": "https://www.suaramerdeka.com",
      "source": "Suara Merdeka",
      "summary": "apjapi jawa tengah dikukuhkan siapkan jasa penagih yang kompeten dan taat aturan suara merdeka suara merdeka",
      "id": "3ca6d5770bc919b6",
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
      "title": "Daftar Pinjol Berizin OJK per Agustus 2026, Cek di Sini - Gosulsel.com",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPcXR2MURiWXF6UGNaSU51Wm1yTGFFQ19YRU5YaEVNNFdtLW9DaUcwOVNxV2ZQTjZZWnkwajBQQVRuN2ZvNkw1dXNDNjQ4ZTNCX2VJZFZYS1NYOWhqS1dnenNmU0IzQmw2QmVPQWZ5cHlBbE1FYXZQd0xRUEZiS2lHNFRsWlN6TnhUMHBmcg?oc=5",
      "publisherUrl": "https://gosulsel.com",
      "source": "Gosulsel.com",
      "summary": "daftar pinjol berizin ojk per agustus 2026 cek di sini gosulsel com",
      "id": "6d86b7d4b195b78a",
      "domain": "gosulsel.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8df5ea4e4225daac",
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
      "title": "Jangan Sampai Kecolongan! Dana Pindar Makin Deras, Pengawasan Harus Diperkuat - Koran Jakarta ®",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNbnFUQ2QtaXlsLTBpX2xiOVF5Uk5wT2JnWUVDNGRhS0RLd1RTdE1ZWF9idGhRSHAtTVpma2tlR0FyZXQ0bFhwdEJMWkxweUdmZWw0WWhpdklQQmptOFI3cEkwU0hQRHpHcDFDajM4XzNJaFFCT1hBWXFTdEVDUjRrYm8yTXZJbW1udHN0bXFLREZyWkltdTFRbUtaaV9OaGRvNGkzbERzNVJhYXgtNXZyNktB0gG3AUFVX3lxTE5rNDRzNFpGMFlrSV9XMEhyaEwyb280dnRoU1FQQ0NVbGN0WTZmUGgyT1RkVUJOQzlqVmlKSjhfZlZyLUR1dDh3eXNxWTRWYU95SFZtdVpGUndFNGRNbDRtblNBNDhxZDFaQTZHYnoycm42SVR0cUVwZVFkMElkWXVaUzNNajNqR0dxS2pwUW9SRmJib0c4NlBJd2lYbGg5YmJQeUZjZUJzbVp1c1NXYU9uSG1oR2JVSQ?oc=5",
      "publisherUrl": "https://koran-jakarta.com",
      "source": "Koran Jakarta ®",
      "summary": "jangan sampai kecolongan dana pindar makin deras pengawasan harus diperkuat koran jakarta",
      "id": "1f4c23ce065e2824",
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
      "title": "Menko Yusril Ultimatum Pengusaha: Setop Debt Collector Ancam Konsumen! - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOOUFQVFYxd1hoWDF6aG5Fb1lfUkdGRk1saXBRSVM1eW14T2dod1NISWVIbkttYjVHdDRUeGNiRG5YTmowVTZ2M1RuOUQ2OTJFV0ZvVF9ITUNzYUtMQlJicmxIaU9XOVVOSE5Ha3dZQkxIWi0xMlYxVjc4SmtyVDNNQk1Nczdzd2ZRZS1hQ1FhMHpXZGlwbVlCQ1piYUNfN3FvT01aVS1LZTlXQdIBrwFBVV95cUxOUmdmYWpIVlBrNFV5WmtXam92YUZ0LUJoSVpJQ2hqZGx1c3lhS0VjcnU1bGRGdFlmNjhmSGxtSTI5RnRxVkRxRU0wTU9BS01PaFFfRkxuNFUzeGxFbUhwSHJOU3lHLWdhdzQ1dGFQOE9KWTAzS2h6MWhLaER1VjFreEt1STBKbk1MbndVX21WZzRxYm1IM2dtYVYwR2pKWnRqZk94VEpBd19yeGJwY2tr?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "menko yusril ultimatum pengusaha setop debt collector ancam konsumen warta ekonomi",
      "id": "cc2f41d978b8a972",
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
      "title": "Outstanding Pinjaman Pinjol di DIY Tembus Rp 1,4 Triliun, Ini Artinya - Tribunjogja.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQMGw1b2xfMk1aMVdob1o3dXNkam5wTmxhbkNHMlBKVG1vN3lHY053cmUwbTliVFNtTE5qODFONENzWE9qUFdSdmJkS2FaUFlRSE90X09NZGZmU0tHRzI5cmI4eHFMUllRbTlvUFV5NDhvWVBtdF9uSG9qTlhCRlVnRmNCX29TUGZuSjlVdUJpS0ZFekcyM3VjZmY0TVNTem80SXJ6OUtuZnJpX0VHelpyNA?oc=5",
      "publisherUrl": "https://jogja.tribunnews.com",
      "source": "Tribunjogja.com",
      "summary": "outstanding pinjaman pinjol di diy tembus rp 1 4 triliun ini artinya tribunjogja com",
      "id": "e9c18f111a813304",
      "domain": "jogja.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7ae44392c692c36",
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
      "date": "2026-08-18",
      "title": "Polres Gresik Bidik Judol dan Pinjol Ilegal, Warga Diingatkan Bahaya Utang - beritajatim.com",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPSEluaXBpMW94azRLcFR1ejFtd01YTjA3c0lkbzVuU1dhSXpVblZ6V1BxNUR4Mm1SZ1VwT09ZT1V4bUVPSUZZTERxekFwOW82Wm01OW9qcjM4M2RsY281YmR4c0hsNjMxcjVsdEdRVnZOSG93TmQ3SFRfWEpmN2t0RGJIX2JpMU9tSnVnck9UMkNvWmpqNTVmbUo2NHh3UQ?oc=5",
      "publisherUrl": "https://beritajatim.com",
      "source": "beritajatim.com",
      "summary": "polres gresik bidik judol dan pinjol ilegal warga diingatkan bahaya utang beritajatim com",
      "id": "8ba979dac9358c32",
      "domain": "beritajatim.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8bacbc1a461bc3f8",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-18",
      "title": "Polres Gresik Gencarkan Cooling System, Warga Diingatkan Bahaya Judol dan Pinjol Ilegal - Bacasaja.id",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNQzBhLVRuNWtvWEVHLUxMS3lqRHl1UTEyTXB5NW9zczc0azczMUFkaFgyRzNHUGwxaTFtN3VZVEJvT1Ftak52bWxyVkJNb3l6MUx2S1BRY0ozdmxDWE0tSlQ3aDh4NnFjRGhEV0hpNU9rYXVxQ1o5eWNmcHl1ZXRwdHNDZ3hGWlVBTHZvVTRvaE1OeTJ0WkJwNFBlMElSQUJMc1hOaFBhdzVtV1RlTVppc2ZFdzhMRkRm0gG-AUFVX3lxTE8xSFQ3M2VOTFpHaEp1TWd3cE5KM1lTdXBPbExEQUQyMTBzRjZUaS1tR0oyWERnVGdfZi1Uc2pPU0NKZUVIcTFaOUhCODhCZWcxMmt1SmYzeDB6WFRhb1E3UXdabFBSelhoV0c1V2dJQVpybjhiSFhwbzd4VkgzUTREMGNkdzc3d3d4WWZaRUJoOWgxbWxjWHFKdk5vODlXOC1rbXd6N1Y5QkZjZWlOX2JEMEtwX2dFRjhMYkQ4SkE?oc=5",
      "publisherUrl": "https://bacasaja.id",
      "source": "Bacasaja.id",
      "summary": "polres gresik gencarkan cooling system warga diingatkan bahaya judol dan pinjol ilegal bacasaja id",
      "id": "bb56ce88c02a0dd3",
      "domain": "bacasaja.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1bbb9103ee7e729e",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-18",
      "title": "Risiko Gagal Bayar, Pefindo Pangkas Rating ADHI Jadi idB dengan CreditWatch Negatif - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOc0RPa3kwTXdfS19qMG4zTlZZQVFGUWFnTFV4MnNlQXp5X1NHUzRNc0JzTFBEc0p3MWtURi1pZ0NnRjNzRklOZkNqZnIyT2l6dHZRb0FBRW9oaUdXWmZFZ1pKU1liaDl6U29PYk1mQzk1YVRUemFFaWxKYklsLW5iSGFUY1RaMmpjblMzb05zbnZwaDJKUkNjaUdjYVQ3Y2VreHFuendMNTNiaG1RM29xelU4UnFaUW1JOUHSAbIBQVVfeXFMT1R5eTU2cnAwRFpHdlAxbFJnYWtaVkhnaDlLekNoWHJfY25zVkhFZ1dCN0JleGJiMldHeEZHS2VyS2JRSkg3Q3ZFUEFSQlI4b1N5NG9EZC1KNXV6ZXFOUi1FcHB4cEM1WEU5R2h5Y3ZoY1ZUcWl0aXFVeFpFS1l6eDdGQzRCbGVuT2NCRDVsN3BXQzdINVlWSGRKVVJhZ0pVN09VNnlQc1AzSENRR2hIVGk2QQ?oc=5",
      "publisherUrl": "https://investasi.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "risiko gagal bayar pefindo pangkas rating adhi jadi idb dengan creditwatch negatif kontan co id",
      "id": "f297aef4faf720a0",
      "domain": "investasi.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-29e955f60a35612c",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-08-18",
      "title": "WhatsApp Image 2026-08-18 at 17.29.59 - TopBusiness.id",
      "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNTGZOQjZCZFBhNnhTU1ZDS3RiSXBXODBKY0pVMERpLUtwa1BXNkRwa2V4SVFXeklFUi1FY2cyU2ZYbnFPMnB5QVdrazFSekt6LWg5UzFxYjBhSDRmVlZ0aWVVeUVVMmFDQzduY09KSVRxSnd5b2lLcUZwN3VyY3JRY1ZtdjIzS1FKS2Q1U190TDNOczd2cjg5Q3VZZHg3N3psa3MyQjJzU1ZnRTlTRTRtVUFqY2VzMENZMmg0aWlSeVhsUjZvUDZvQXg5VjEzLXI5ajVVRlQtd3NQRmtJTkpBdnBn?oc=5",
      "publisherUrl": "https://www.topbusiness.id",
      "source": "TopBusiness.id",
      "summary": "whatsapp image 2026 08 18 at 17 29 59 topbusiness id",
      "id": "fc8e602c65cc9121",
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
      "eventId": "auto-897e9d7893efccac",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Buka Sosialisasi Bahaya Judol dan Pinjol, Kepala Kemenag Sidoarjo Tekankan Pentingnya Menjaga Ketahanan Keluarga - Kantor Kementerian Agama Kabupaten Sidoarjo",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQaC1IWjJoTmJTZW9fTzdIcE9ldTM1Z1dzTG1wOHNHR2ZrT1BhbW13VjFQUEJLS01vZUJ3bXZzdzZzVGI3V3dMaGZteWROYVcxVGh3NTNrZ0FjVmVoa3lTQ25VV3VUakktdXFMUTVzb2JOcVBFdkJFbENTYUdMMmxWV1h0TGN4Q0FzTnFfbEtVQXI4TVJrMmhMWnhSWjZxUDN0STZ3TQ?oc=5",
      "publisherUrl": "https://kemenagsidoarjo.com",
      "source": "Kantor Kementerian Agama Kabupaten Sidoarjo",
      "summary": "buka sosialisasi bahaya judol dan pinjol kepala kemenag sidoarjo tekankan pentingnya menjaga ketahanan keluarga kantor kementerian agama kabupaten sidoarjo",
      "id": "037269bbc79f1f6f",
      "domain": "kemenagsidoarjo.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0306e40b3286f858",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Cegah Pinjol Ilegal Sejak Dini, Pemprov Sumut Tanamkan Budaya Menabung untuk Generasi Muda - Nusantaraterkini.co",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQYjh0Tmc1UzZkeXFGZFRHd3VzckxoODlkQ05XazNvN2hXSmhZcFhhSDdub1ZSQTUzU2RhOUVVcGhKbndkbzlUaEhrcmIzQW9zYXBFOFU3bHZHS1hRNl9sTDNIcEV5S3A1cjc2dlg4dXI3c0kwbVd6R3NvQ2hVZ3ZQTHRLd3N3UEp4bDNpRUU2M29qcWV1NnREQ2VaSXBwVV9tLS1ydlkxaHpLbGswYXZ3Yks1cW5xSzNB?oc=5",
      "publisherUrl": "https://nusantaraterkini.co",
      "source": "Nusantaraterkini.co",
      "summary": "cegah pinjol ilegal sejak dini pemprov sumut tanamkan budaya menabung untuk generasi muda nusantaraterkini co",
      "id": "f6ac4152bf264120",
      "domain": "nusantaraterkini.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f48d13a00a7c8591",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
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
      "title": "Gencarkan Cooling System, Polres Gresik Edukasi Warga hingga Nelayan Terkait Bahaya Judol dan Pinjol Ilegal - Radar Gresik",
      "url": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxOejZDdzVVVnR6RFM0WGl6SWw2VFdiUU1FYmxfVTJYX3l5cUl0MUN2LTAybW5YOWdEc3hsYTN5R0Z2MXhheTBfNGlsTmlMSFZwU3JiMlFiS1dTVW85cjY2RkRGbkZsMi1HSDN4OThzOXRBcHhpUWI0dUhheWdXMlFvSFF0MnlHa2JjNElkYkJ6REVuNWJ3X3VaS3o3Smo5U1FpNjdsZ0I3TnlpS21BSjhEYVpwYWlnRExsYmNHOU9zOHJhTGVyamFQekRGMEoyUDZOTkhFczU5OGlwbDY5b0JzQ1hjWEJ3Q2tSUUtzblVQSXBhZG_SAfgBQVVfeXFMTjJUWkN5WkEzT3ZWUGlDWDIzekNMbHdqYzBzSF9CWlRQVDFKQ3JUaS1IZURZOGFZY0R3ZEltOF9yWEczLWRmbkVmWlpzQ1Z4ZVJISjM5cjVqbzRyWDVUQkg2eDNZMkRIMzZwUU1mNXk4M1VJc1Y0bTFzSzZ6cm9hZkk4Z0g4VzNGSTI1OEpuazVzbFFGcEhZN0dhMkxvN3lQQmNSR2lYMTRIdlYtQlNIS0l6cWplWDEtVjEyRC1YYkR5UFhKYUF4dGdLV1E3Zy1jT2p2OHU4YUNaQkhWRUkxWko3bWVZOXZ1MVNMTENnazJMejFfNnFlXzY?oc=5",
      "publisherUrl": "https://radargresik.jawapos.com",
      "source": "Radar Gresik",
      "summary": "gencarkan cooling system polres gresik edukasi warga hingga nelayan terkait bahaya judol dan pinjol ilegal radar gresik",
      "id": "372f0cb02a6bbba7",
      "domain": "radargresik.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-611ffffec4236574",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-19",
      "title": "Generasi Muda Tasikmalaya Dibekali Imun Finansial: OJK Sasar Anggota Pramuka Lewat Edukasi Anti-Pinjol dan Judol - Insiden 24 - Insiden 24",
      "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxPSDdrWHYtSUtGS2hLbW5QS3FWaFBQaGNRYlhScGRXTExyTVlRbU9GZmszZU9xUmpIVHNNMnRFdzRoOHlFWklNSEZhSno4TXlyS01jX28yN3VtM3RKSjJ5YU1Vb2EybmFadnU0MW1VeW5qRzliYmNnbUg0dEZsTDI3RGVqVURWTU93SHl0UkdJR0NOd3lqOUZuOG80MEtCUXZ5cGtFWUZNY1lCbUE4ZFF3NF91Q2VLT2Fpcml4bFd0SVlyOW1oSDFUZTk1SktMblBEZmJfUV91OHR1M1kwQi1EX2h6WTNXV0Frb0ln0gHwAUFVX3lxTE5XVXBTbEZOYWFKVEVwLXVCM2RlU1FLNjRYVjRzZ2tfemJhOV9fVDZEUUFRbzdEWmtVRklQdDBvTkVUZlgycENnTTFCTDE0QmdJZzJSamlLV0dqYjJaMDJYcUloZnVvQndvU05NNTFTTUJxdlZMa2tYbzRIS0tMTW5LREFNaFdDVG1KSGlWUGxrcW5EYXk3ejItTTJXOW9BeUxaZVg4T1dzVmVQQ21vNks2MEFCT0JweFZVNS15S0NHOFpIb2w1V05rTFVHWEw2VWhUM21xa3M2aVdPZW5hUGl2Y3FyaVYwZHdiZGhFaV9naQ?oc=5",
      "publisherUrl": "https://www.insiden24.com",
      "source": "Insiden 24",
      "summary": "generasi muda tasikmalaya dibekali imun finansial ojk sasar anggota pramuka lewat edukasi anti pinjol dan judol insiden 24 insiden 24",
      "id": "72f266389f7af1ef",
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
      "eventId": "auto-93dad103ba864286",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Hukum Utang Pinjol Ilegal Menurut Islam, Apakah Wajib Melunasi? ini Penjelasannya - Tribunjatim.com",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQYVU5TUhNc1ZseGVVcWtUclR6MzM2TlBreWlQNnNtSjktZkhkTGZCTzhHeWtxbnZZYXByWUd5RGt5MmU3U1lrbzAtbm1SWDh2OGpDUnFveVBfWkRyckVjVUZIOFZXTjdVTlRyVVM1SW9aSS0wNC12dDZ4X1ZYbC1yX2ZGeG84bllFMGd6NnF4UGcxcVZ0TEFLQzh5M3hZa2tlMkp1UDlWYTk3OWgxdWh6c3NEYU1kd1NvZjhnaA?oc=5",
      "publisherUrl": "https://jatim.tribunnews.com",
      "source": "Tribunjatim.com",
      "summary": "hukum utang pinjol ilegal menurut islam apakah wajib melunasi ini penjelasannya tribunjatim com",
      "id": "c74e1b0b986d98c1",
      "domain": "jatim.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3504612ba0bd3b9a",
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
      "title": "Kredit Macet Pinjol Naik, Mekari Flex Dorong Financial Wellness Jadi Strategi Baru Perusahaan - kabarbisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQRG9jTUdnQk9hb0lUNXF5YkVyMFE1dTRGN3JLSVNPNVozYVZ2X1NUTmtTSXBlNlQzdHMzTmZIN2dPNE5LczBad0RmeGI2RU5KYXNwcWM1QjVlUUE0NE94RUI1YTlzOGtrRG5mVXNsay1MQUJzXzIxalhqT3lSdjg2aUY5NEU2UFcxSlg3cWZ5UTlMZXpJUjZWMU41OU5ZZzMzbmd1d1B0UVMyVHg5Uk12R0RqSXZjUERPVGpabUdZM1RMSGlFZFlweWZR?oc=5",
      "publisherUrl": "https://kabarbisnis.com",
      "source": "kabarbisnis.com",
      "summary": "kredit macet pinjol naik mekari flex dorong financial wellness jadi strategi baru perusahaan kabarbisnis com",
      "id": "0477bcdc452e2348",
      "domain": "kabarbisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e1e2ea2b289b1f28",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-19",
      "title": "Link Pingo Pinjaman Online Aplikasi Pinjol Pin Go Plus Sfile Mobi, Teror Galbay Berapa Lama? Apa Keluar Kondar - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMihwJBVV95cUxOSDJhLWNMZE03eTB3ODhhc1ZVN1dLM3dlRHIydHg5eFo1Y1NDblFwbVFoc1p5Umg5WjkyUTdkNzBFdURZSm9nY2djQTN2VEhzejJ0Z0xWSElOMlExeHpIYUpSMU90ZWZ3ZGZzUVBtWTRWeTNQd0JjTEJKcEJ0c0c1cHR4SzNSVTFkb2NsVXdCSEw3LVBMcVFBVTBQcHMtQkNIWlFGUmxjM1BOdDRENTRZRHEwRzM3UTYxRHN2OWRiaXFXRnJ4Tlp0Q0Q0c1FuTF9BM2NTS1FiNndNTkJMaHIzNmplazR0c2JHTEdqSHprY3ltak51M2kwZVc0UU9uRFY5QTF1RVoxY9IBgAJBVV95cUxQZ2g1bU9qMTRxWnRvekI2eUoycEVYX0I5dnVnMWNaaUY2UjFkekZjYmVKbmJINXItMW84bHNxQnMzMUR2bElBMnpUVnJNb1U1QjFFNUpWQnA0ZDVKZ1h3SHVZLTd1eGM2aGx5QjEtRlhMbzVTbi15U0thZHVZbUwyWXpmSWw5WXFhNzFReWlwRUtHSVlWOWV5aS0zWUt4aHM1OFdoWWRTaVNmb1E5Z2c3OE84aTJWTURpS2ppN1pXNHdhTlJXY0E4VnJ6OFpFenp3N3pweV9mRXRGR1RxVlRxOEEycXNvQ1k5UjVUSmtHX0M0RGlvMzMwcTdvRFdYOWZn?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "link pingo pinjaman online aplikasi pinjol pin go plus sfile mobi teror galbay berapa lama apa keluar kondar berita diy beritadiy pikiran rakyat com",
      "id": "77bc91e70004fc5c",
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
      "eventId": "auto-a86e18d120e6a595",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-08-19",
      "title": "OJK Catat Outstanding Pinjol di Sumbar Capai Rp1,49 Triliun - Langgam.id",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNbmdCN2JlWHdENDR6clZXbUtDQmdBaVZ3RVRlaVh0cmNJQV9NTk1adEtzMFJ5cE9fSmhjbk9hSV9iYUkxeGZlUE1pREFIVHY4WGtfQUtLU3I2Qlh5OHZMS1FVR05GZGtfQlRHN0RBX3pKcnNUSUdxUzJHWnJZT2dHQ0VFUF8?oc=5",
      "publisherUrl": "https://langgam.id",
      "source": "Langgam.id",
      "summary": "ojk catat outstanding pinjol di sumbar capai rp1 49 triliun langgam id",
      "id": "637346720266d7a2",
      "domain": "langgam.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-196b9e82637dc6f4",
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
      "title": "Polres Gresik Edukasi Warga Bahaya Judi Online dan Pinjol Ilegal - Javasatu.com",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPZk40X2lCS0kzYjktQ08wOXpOYzRXLU1lUUJWOFNLZTJKWFRSU3FObzh5SEdSSXBZczM1dlU5QkJCcEU3OGdWU3NFX21xUW1FOE9SY0RyZk9kN25JWTgwLU1qel9rdk44SWhjeE44d0JOTnNHWHJjR0RBX0ZzNHU1ZFlpSmE5UGYzXzE1UFg4WDltVWdTU0Zr?oc=5",
      "publisherUrl": "https://javasatu.com",
      "source": "Javasatu.com",
      "summary": "polres gresik edukasi warga bahaya judi online dan pinjol ilegal javasatu com",
      "id": "7eda1277e045527c",
      "domain": "javasatu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fd4da52173ae0bbe",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-19",
      "title": "Polres Gresik Gencarkan Cooling System, Bidik Bahaya Judi Online dan Pinjol Ilegal - Sekilas Media -",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNeUplZmNjbzhQcWYtdlRBanBvX2RXZkdfR2ZvOGNVbDVXc0REZ3FRdVA5UzAtT2lGa2FCOTRtZHJvZUJUQUpHaXpMellxcnVhWEY4aTExNURmNXotMjJCcXNrQnNhUmx2bjc1THdfMTN6VzBCUVAtMUFBT2lzQWxYd3hhdFZxVUxXTWp2Ykd1WFE2WjBPX0IxQ2p2Ry05c003bHNYazhXSVowZFJLM2xtaXZsN292UQ?oc=5",
      "publisherUrl": "https://sekilasmedia.com",
      "source": "Sekilas Media -",
      "summary": "polres gresik gencarkan cooling system bidik bahaya judi online dan pinjol ilegal sekilas media",
      "id": "9d8fdf9b3f73e08a",
      "domain": "sekilasmedia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1c4331d4f3fd8c15",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-19",
      "title": "Polres Gresik Gencarkan Cooling System, Edukasi Warga Bahaya Judi Online dan Pinjol Ilegal - tNews.co.id",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQXy1jbUcyRkMwNFdRVkxROE9WOGdxM25rRWNScDQ0V2NUaE1zTnJHZ3I5NWhUTkVRby1DajRhSVFwQldLLW42SVVOZGtuZDdBWDV4cU43dXhFaG05TGJWUjN6WWlZMVBJTTRpMWFJcnhKQmFJSFRWYWpOcGVEZV9ZWEhFQ1FTbVg2MEU0YWpod1llWmhfdEV4aFQ2VFZiYVV6a1VGUkt6MHQwRzI0NDBTdlJGVGZ6QmVpMFhwSm1R?oc=5",
      "publisherUrl": "https://tnews.co.id",
      "source": "tNews.co.id",
      "summary": "polres gresik gencarkan cooling system edukasi warga bahaya judi online dan pinjol ilegal tnews co id",
      "id": "1a1da0d4dcd2ef69",
      "domain": "tnews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9069440f73a6d06d",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-19",
      "title": "Propam Polres Kupang Gencar Berantas Judi Online dan Pinjaman Online di Kalangan Anggota - Polres Kupang",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQRXhGcnFUbGduZkxjTzZaclVPZE1wd3ZPY2REaUV0b0lsbVpacGUzU3YwVDFNUVlvR0ZhNkhJUkZ6X2V1QWpMaTdHMG8wNThrLWFSRUpmUkFpcDNIbHJGMjREU0t4UDdGMUdRZVVmSDhKaW9oNWtaekY1RU4wTnlDcTdXeFV4c2paSWNLbnNkX0wxNk1HNDQxY3ZWdTFadlpadnZVelNJQVV3R2F3UjhYbUxPMnNLbTZPOThN?oc=5",
      "publisherUrl": "https://tribratanewskupang.com",
      "source": "Polres Kupang",
      "summary": "propam polres kupang gencar berantas judi online dan pinjaman online di kalangan anggota polres kupang",
      "id": "b3dac6f94df00da2",
      "domain": "tribratanewskupang.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fdc5f3384d19bdc4",
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
      "title": "Sekitar Rp105 Triliun Dana Pindar Beredar, Rp35 Triliun Masuk Kantong UMKM - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPY3JIOXB3dTd3RVRGbEtFT0FtM0J6VERaZWw5c3VPRGYyYmNsSnNUa0NMRmZGQlA2X29MWkhCZzFmeUlHeHM0a0I0SV9namN5MW5ZNWZnd1BNckdCMVZydUJ6VXQ4bnBfTXNoQ1luUVFNeUJULWxfejRYelpyaHJUdTZvUlgwLTc1Zlg0WFdpajdNNWdQWVB6bUpjRmdiUzR6WENIYXRxNDhtR0w0enowNNIBtgFBVV95cUxPMmw5c0lPa2ZNdW5oXzFybEFaaDZVYjNlZzVJVjdGT2VPaDhmZS1sNHZQN05Jd1hYYnllMlJsby1kUXFkc2hWZ0FOeWVZSmt0NFJQaEJLV3N6VGl3N0JVREIwa1J0TXdEMFhJYU1ZS21DNXNUNnhJQUlLZ2xXZFBrN3loMVRvNHJkbG5MYVp2eDVkTGN5MVRjamhVSkVkdUJjQ0xPUDBMdXVMbElsWkYzWFBJRHUwQQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "sekitar rp105 triliun dana pindar beredar rp35 triliun masuk kantong umkm warta ekonomi",
      "id": "68faba050b9f409d",
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
      "title": "16 Pindar TWP90 di Atas 5%, OJK Dorong Pindar Manfaatkan AI untuk Cegah Fraud - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPVzU5Q0x5YURVQWhSa0hqcFlQR0lhZTdiSXVZSGNTd2YzS1FjZERFRVlvMFN4eTdlOHQtN01pYVB0M3lDTDc4WGRLbzk5NnFWTW8tTHNEemo0ekdUelMxdkN0V182VEpqcVl2RW9wWHIyY0hNelBYQUtpcXJhZFJUYXgtVXFVYVhsZUxrVGd6TFFBNnQwRkNhdUtJLXpoUHBHVkN6cWpBM1p4ZUtIMVo4a3ZWc9IBuAFBVV95cUxOckl2THpXN3FxMTRsWXhZa21KSzdZUVVvZ19UUXBFN2lhRk1VWXp6VGZKb2VyeUNUMDJYUVdLb1plTFQ0UmJPV05NNDZVeVJqaGhhZ09CTUNJVGRBR3ZXRUJHM1hKSmd0V2lqVFZfSUktRFVBb3ZncERMLW0yMWVJUnQ4czhSUXRiSnRfWGxzT29aV1AyV0JIVXFLQUlkREpWN1d4TVZqa2xJXzhiZVI4REdUSjUyVk5y?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "16 pindar twp90 di atas 5 ojk dorong pindar manfaatkan ai untuk cegah fraud warta ekonomi",
      "id": "c99ad5880d5953e2",
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
      "date": "2026-08-20",
      "title": "AFPI Genjot Literasi Keuangan: Tegaskan Beda Signifikan Pinjol Ilegal dan Fintech Lending Legal - kabarnusa.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPTFJ2OHM0WDBtTXdvczNyOWwzclR2WElZa2QtQXZ5cFYzWUFCTUF5eE9oMkYyOW0wMDBBTlZGVWpybG9xbW92bkJ1SDg0V1FuY21iWjFCcFFNUXVoMkJsYzVXUGFhd1NuQWNManhTN0U1dkh6b3FGTXZyblhpckV3TERDaTZhUGxlbHNXMHR1N05XVGxIZmtDbzZRNTZYZjRjTUVaRTRiU1J2VWR3N3RBSVdTMjRUb2s3?oc=5",
      "publisherUrl": "https://kabarnusa.com",
      "source": "kabarnusa.com",
      "summary": "afpi genjot literasi keuangan tegaskan beda signifikan pinjol ilegal dan fintech lending legal kabarnusa com",
      "id": "ed441a86f47be5ad",
      "domain": "kabarnusa.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-71572789433241b8",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-08-20",
      "title": "Bentengi Mahasiswa dari Pinjol dan Judi Online, Pegadaian Gelar Edukasi Literasi Keuangan di IPB - Bogor-today.com",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOelNHWUppMS10QUpkbHZqRFM3eENHR2JZcUNSVGRYQnNuWUVxWkFRV3BVbF9IS3FWOUpRYTNUb2xBUTVJbTkxMHZmMXVlYWRDS25tbFBUWUFBSlkyXzZUa3VRVklUcDJuV0VwUTNRTmtuU0NEb2FwX01mOGs4NWg0dUF0SDdTTGQ0SnF4NVkzcTNxd3diWjRqbVI0bW84MWtvVlhlQzV1YXVBektRYlFhV0NBRm5EX09sYXBLTHVFQjI4OThKM1FvUzUtVQ?oc=5",
      "publisherUrl": "https://bogor-today.com",
      "source": "Bogor-today.com",
      "summary": "bentengi mahasiswa dari pinjol dan judi online pegadaian gelar edukasi literasi keuangan di ipb bogor today com",
      "id": "cafbda84a662d708",
      "domain": "bogor-today.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e6098ce4fc3902b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Bidpropam Polda Jateng Gelar Gaktibplin di Polres Karanganyar, Cek Kedisiplinan hingga Mitigasi Pinjol dan Judol - Polres Karanganyar",
      "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxQdDZLMkluWFFWUUF1TkVPR0Ffejh4cjZXNkdtbWp6M2NwdndzSHdoRkd5ekUxMDZOTG55V3Fsc25YbUwwcVJLclNWeGVRa1I1VW44dEtiTllXcGM1SG9Ud01URWNkeEVjUEhXbVo3X3BmTW1fQ2N1NXBtSUFJMlJlQzNfdlZGaTgtb1dOQTBSR18zek1jOUNoNE9wSGxkVkpKTGQtdlNrU0hsNGhpRjdLWEp0MTJZWlc0WjVCSVpPX1BISzVRY0c1UWJxckdoZnFZRkpSeHNITGRwTzJfVlgzSm95b0tka0VCVzc1UQ?oc=5",
      "publisherUrl": "https://polres.karanganyarkab.go.id",
      "source": "Polres Karanganyar",
      "summary": "bidpropam polda jateng gelar gaktibplin di polres karanganyar cek kedisiplinan hingga mitigasi pinjol dan judol polres karanganyar",
      "id": "3d0f2f5bf04e4eda",
      "domain": "polres.karanganyarkab.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-aa9223712fb480a6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Cegah Personel Polri Terlibat Judol dan Pinjol, Sipropam Polres Ogan Ilir Gelar Gaktibplin di Polsek Rantau Alai - tribratanews.sumsel.polri.go.id",
      "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQUk1reUNGOXdZRjVfUkRnYXowa0h6VkEzbGtZazM1S1VXdl9ZREt2UWxkeE5STGZTZ09xNURQWldtMEZYT0VPYm9Uems0dVhRbmZIY0M2VV94UHBUOXowSDM2MS1yMERRUjJuZ2ZOdkR1X1RjOC1qODgtbE53UkdKelNjM0RBbTllZFVvOWxnVFlLTUlPQ1dpOHFuMHlVN0pGV0FWSUtpQzdwQnpqVXdIVnJzeXJsRmFMdGdjSE92WXZ3b0NuUE5WTzFPN0pGM2M2cUJsVG55RnUyd0kwdnFvV201LVhqR1JpT1ZBZ1pycw?oc=5",
      "publisherUrl": "https://tribratanews.sumsel.polri.go.id",
      "source": "tribratanews.sumsel.polri.go.id",
      "summary": "cegah personel polri terlibat judol dan pinjol sipropam polres ogan ilir gelar gaktibplin di polsek rantau alai tribratanews sumsel polri go id",
      "id": "ad9b9d210c84dc91",
      "domain": "tribratanews.sumsel.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-03cdb482ddcac630",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Foto : Sidang Banding Pindar Berlanjut, Pakar Sebut Perintah Lisan Regulator Sah Secara Hukum Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPMXlqV1RvUnQyZlBaNWk2Z2hiWWtmVkJNRFU3TjJHRWcwc1pUUXk5ZHRscHQ1bTE2cHRiUkhaaHNvdnh2NmlONkNDWjluMm1OVmZKWWpfWE5iRkRad1ZRSnk5X0l5dlpSbmtHQjUwMFZaSE9tanRQZ1NVMUsxMklVelJQTnRfbXhWSHhxZjIxT2piRnBWUXg3N0JBbnYzUC0yVVNqbEJOR2F1ZUhQbHhSdkNQeHhiYkRmUHcwTHppdDR0U1FOWG42RHJKQQ?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto sidang banding pindar berlanjut pakar sebut perintah lisan regulator sah secara hukum halaman 1 kompas com",
      "id": "b8155bb4c4ba6f6e",
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
      "eventId": "auto-06ae85a5de541e90",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Mengatur Jadwal Liburan Lebih Leluasa dengan Layanan Paylater - SINDOnews Lifestyle",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQR1pnMzdYQnp0Mi1iTmEtOXZJVjB4bHNyZnJiYV9lRlRjVjN1enB6Rm0tR1JULURaeGtXUTdEU2ZmTl9RZkdhTFVqVlV6QmNXcWV6OEdQSl8wcXRHN3RrWldOUXFXYW1RN1h1MGdFM1VRS0hYY0ZTMDNxaHRESzQzUUtWaVM3WnBNUlFoWHBiY1BOeDBBTUROZmpTejF2YlZUb1hqb0dCZFpkVTRVb2hBekZEakc1UDVPZmtSN1ZB0gHDAUFVX3lxTE5qQklnUjVsRmxMSVpzUkdwWFBYLVlXVjdLdndxYU9OSkd5aGdkN2pDVmVwazB5aEdjdlJ2My1teVE4dWdMdzBCd2RXTTZwaWNzcm11eFlFZ0Fhclp0WDVXWlVWc05JZll5SHp1N18wMU8yV0ROdUU1T2ZIMkRWMGNPYUFEekVBbXc4STdqUkNxVk1VZHpSVmhLRzBFS0RhLWdEaTBZYUdzbEJmQ1hpYndCNnctV2RJR3lLNlI0c0xqN2xPRQ?oc=5",
      "publisherUrl": "https://lifestyle.sindonews.com",
      "source": "SINDOnews Lifestyle",
      "summary": "mengatur jadwal liburan lebih leluasa dengan layanan paylater sindonews lifestyle",
      "id": "139b3111765b8122",
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
      "eventId": "auto-09208eb461f6751e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
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
      "title": "Propam Polda Sulteng Laksanakan Gaktiblin Judol dan Pinjol, Ingatkan Personel Bijak Bermedia Digital - Website Resmi Polri",
      "url": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxOQWIxdnI5U1NDUkdvUVhNUW1ManFYZmd3ZkJsSkVncnhFY1ljNmVYUFhNekNnUUJ4MEdLWTJlWGdTWTdhRlRLVkg0OWxlTDBBOU94ZE1OQnFjZDlXLTFveWlXWVN0bHYybHZMZDRIbXVQRzcxZnkzd2hNd0UyZEc3cGtqVTVxNWdtY1NfZU9yZ3ZvSHlZMWptRWd4R2dHUHNxYXZaSFRETVZOV3ZBQi13QmF3Ym5OWWRwZDdBM01ZQVltZ041MnFiM1c4SVhyZ2RGMGY5RmI4TG1KbmtyR2ZMZ0FuZDVsVnM?oc=5",
      "publisherUrl": "https://tribratanews.sulteng.polri.go.id",
      "source": "Website Resmi Polri",
      "summary": "propam polda sulteng laksanakan gaktiblin judol dan pinjol ingatkan personel bijak bermedia digital website resmi polri",
      "id": "6a09ab0475bd2fed",
      "domain": "tribratanews.sulteng.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e46c73b230334192",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-20",
      "title": "Propam Polres Sibolga Periksa Ponsel Personel, Pastikan Tak Ada Aplikasi Judi Online dan Pinjaman Ilegal - Website Resmi Polri",
      "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQZ19teHRlNHFGM2lDTnV0MW42bkhrdklaTU5sZU5vUDlaTVoyMjFBZVh4NlNpVG9Cd1JUMFlvNW5MZmRfVlhpb0tiaEZEOEhhcUxDQVNDRFc0TlFVdzdQdW51Q1dnYnJjS2hNOWtyVk5IQWNlQlpNSlRoMzJnZzNMaTN5VWp5WTdHenVFNUFNWGh3M0lNQkxHNVE2X3lPU0t5XzB6MS1FeXJPemcxeE1lRmpIdGpZZnRqeEd4ZXVNR1FmTnBCeWtVQjhtdlBBbnBMR1VySDJnTXktbkE?oc=5",
      "publisherUrl": "https://tribratanews.sumut.polri.go.id",
      "source": "Website Resmi Polri",
      "summary": "propam polres sibolga periksa ponsel personel pastikan tak ada aplikasi judi online dan pinjaman ilegal website resmi polri",
      "id": "a6b400ae01e2f4a0",
      "domain": "tribratanews.sumut.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9bf0d80252a50816",
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
      "title": "Update Denda Rp755 Miliar Pindar, Pakar Tegaskan Lembaga Tak Bisa Lampaui Kewenangan OJK - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPb3VXbGVRdGFybnpYUDdzWHpHTHYyaUZjb19uUXkwMk50RDRqU2xZbTg2YTJPT0JuYURoVFkwWFdjLTZZX1hMNlFCSmNDZ1g1QTBGaWdRLV9jYlYxcnhDR05hVERNcFB4bXZPWTdJOVJCSkwtanVVSkFUOXdXdmRoTXJZWjZsNmtvdTVKd3ZMM0RGbDlPYy10UmpOLWVRajVQZy1WdURJeERVbWNSdjhETzNWa1UzNG1TQTMwY3BUZ0dVU1HSAcgBQVVfeXFMUGkyZzVydFZtU1ZWYzRTeVoycTdLSUZ4bVpmRzBneWlnR21XY0tIVXBWSmRRUkd0bVE3RE5MUEVxcm9NR0NZRlU0dG9rd2l2MU50Snhza21yLVk0MGFydEZudXo4T2JfNDFycm1rNlBRMWlLeWJhN3NsTkhXZmh6SW9mUXdDaW1nRnM0RTNnaHo3dXM2bE5PRHFuTzJQMDNILThWRDMtcmpSWmRRUXlnQ3hkeUR2SGNnNWFScFM0UEN6bG9QUDk5MGw?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "update denda rp755 miliar pindar pakar tegaskan lembaga tak bisa lampaui kewenangan ojk warta ekonomi",
      "id": "a009719cab861231",
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
      "title": "Bid Propam Polda NTT Perketat Pengawasan, Cek Aktivitas Judol dan Pinjol Personel Polri - Tribrata News Polda NTT",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQUnZScW1QMTFqVjJvU2k0QTNpYVVRdGdtQ3dtRVNWU3Y3c1dhUV9RSUl3V2d4b0Y0alpjdWFOd094TkY2MTRybDNydWtObFNhQkZOS0pjcjllVmxLSGVlNWxSYTVsV3k0UVFpMUFyTDVhV1ZlSFNBeEQzZ3NNTFRqVGdvbzN2dk9sTXg2cUNWRnJLbGRoem5zU1VLU1QzOGhMc1lXU3NLQlVWRFRISUVGVTZIUTA?oc=5",
      "publisherUrl": "https://tribratanewsntt.com",
      "source": "Tribrata News Polda NTT",
      "summary": "bid propam polda ntt perketat pengawasan cek aktivitas judol dan pinjol personel polri tribrata news polda ntt",
      "id": "57757440e4cf917b",
      "domain": "tribratanewsntt.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-030e79c9afef6f9f",
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
      "title": "Industri Pindar Masuki Era Baru: Fokus pada Kolaborasi dan Kepercayaan untuk Ekonomi Digital - kabarnusa.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQSkQyZC1DTEtmSlU5MGp4aE8zN18zUkF3ZWxfcVpXbjBWX1YtVHljY2YxdzkzLTlLN2ltaU1hMWNEb2RLRGpNeWxoeE53YndOUjY3WlU2WU16Um9KQ3NHcWk2WU5NbkoyanJoV0hiZ3ZXX1JiUVNLYUJHVnZ3bmljSVhlQXhmQ19Oemdma0RKU1poS3ZIYnRwQTZfRTZSSE5zUzlTcTlLdTRfV3NBSzExbkZwcVc?oc=5",
      "publisherUrl": "https://kabarnusa.com",
      "source": "kabarnusa.com",
      "summary": "industri pindar masuki era baru fokus pada kolaborasi dan kepercayaan untuk ekonomi digital kabarnusa com",
      "id": "b3ebe61374ca43b9",
      "domain": "kabarnusa.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4178e55b877a36af",
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
      "title": "OJK Catat Pembiayaan P2P Lending ke UMKM Tembus Rp35,12 Triliun - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQX05Ya1pYYWdoNDIyRkJ1eUR1M2FqV1NObDdmam5NQ1ZzV3dObVNhV1E4ajRoOUpEeXZmQ21rMGk0NzdkWjlLOEllZ05BN1BUYW1YS1REZ0hlTFBPM2l3emNmcWhSWUhQM3I2VG5EZnk0RnlYYV9kb3FqXzY0c2F2SmpVaVgzb1RMbkE?oc=5",
      "publisherUrl": "https://gadget.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "ojk catat pembiayaan p2p lending ke umkm tembus rp35 12 triliun qoo media",
      "id": "8305648080d5ae94",
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
      "eventId": "auto-0d6eb75a30e1a688",
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
      "title": "OJK Sebut Outstanding Pembiayaan Pindar Rp105,14 T, Fintech Lending Days 2026 Perkuat Kolaborasi - Tribun-bali.com",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPVjNYUnptVExhMThVbmJBc0c0NWZGc2JzSzlPUGlqYnRFd0NHNElMV3d4ZmFEYzVKMGFmVE5DeWMwTDUwMTA2aEVJQUdLOUFWa2pMRGZTQkpzZ2JGNk56RmtnSlZfSHlkRzlZNkx3eHpoR2UzRXc0Z3ctektVNHJsMFFpMTFldGh1b1NPNGNWSlk1TFN1cHpYWXFzNk5CQ0pHT2pqbDhDOFNpTlhjZ1BtTy12a2RsRlBMU2JyMi03VG9kNFJybzQ3U1NSZkJVQUx4?oc=5",
      "publisherUrl": "https://bali.tribunnews.com",
      "source": "Tribun-bali.com",
      "summary": "ojk sebut outstanding pembiayaan pindar rp105 14 t fintech lending days 2026 perkuat kolaborasi tribun bali com",
      "id": "1ece15bc3b69518e",
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
      "eventId": "auto-4933db2a8d37ae80",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "OJK catat pembiayaan Pindar ke UMKM naik hingga Juni 2026 - Traders Union",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQT2h5TG5uUU5nUnc2Y3NORXlCVmw1RDJHaldlVHJ6YXJHTWZZZXNSU1d6b2ZoT3NTSzc2MFQtLUZGelJPM1pqYld3aEtfbkFlQTBIYUdZRi1BMXRIYTRmOGF0bWhwQ3EySEZSQ0VUWjVlT0tuM0RQWjB4TzZaX2c0LUdYTFFuZGVxQlBIbHFJZ0hQNmtmVURHVUhB?oc=5",
      "publisherUrl": "https://tradersunion.com",
      "source": "Traders Union",
      "summary": "ojk catat pembiayaan pindar ke umkm naik hingga juni 2026 traders union",
      "id": "2c8f5aa6c5dbf00e",
      "domain": "tradersunion.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f79dac860e2272b0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "OJK: Fintech Lending Salurkan Rp35,12 T ke UMKM, Tumbuh 23,25 Persen - Media Alkhairaat",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQM1VIM1g1OW45dllMMFl1MVdELWJkaGVDU0RVcjhtOVhrZlVvRnBMcHdXaDVUWW9UbDF4MTg4Rl9HQ1RVVG5YWjQtV3R0SFFHZGFjTkFydTJiYTN0RVM1Q1F5Y1BxcEFYTHp5WEo2aUNtdUt2RE9jVnhHOERzV1J4bDh2bmRMWEZ3ckNqMjNwdFdjX3NpRExmWg?oc=5",
      "publisherUrl": "https://media.alkhairaat.id",
      "source": "Media Alkhairaat",
      "summary": "ojk fintech lending salurkan rp35 12 t ke umkm tumbuh 23 25 persen media alkhairaat",
      "id": "dadb41323c3eb342",
      "domain": "media.alkhairaat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-62970d4608740687",
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
      "title": "Paylater Rp44,1 Triliun, Gantungan Belanja Masyarakat - feedberry.com",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOV0VLYlpOZFp6dW1aQVNrbWp4dzFZaVVNdW1RaDJoc19Sbi02akMwbHJyNlpWOGxIWTJxOUlWQm5EaW5JWnM3Tk1ScUFFV2l2dDFXaF9vb3kyMXVwenRhLTRVS2VxZlFrVGUxcHVTYWo5NmRmMkV3T0cxVjV6VDA2WUhsWWFEM1Rf?oc=5",
      "publisherUrl": "https://feedberry.com",
      "source": "feedberry.com",
      "summary": "paylater rp44 1 triliun gantungan belanja masyarakat feedberry com",
      "id": "acf574c3d0dd0b7c",
      "domain": "feedberry.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e1546d4454ef971",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke Sektor UMKM Melesat 23,25 Persen, Tembus Rp35,12 Triliun per Juni 2026 - batamclick.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNUHE4RHE2N3NZTFBOVmlwbkp2dVZsR1R2aXVWcGhlXzhPOHpFS2dtaHlpRFc2UVNpd3NVc2RjY3NFV2swVG5tN240bkZUU19LN19BWDZ6MGRSUHprSG1LTjFUVnNFZVdDMW1TVXRWMVFlV2t2ZmloOThFQ25BVGY1bFZvd05EQ2p2UlgtblV3aHhnM0V3UFdiMFNSVWttM0UybV91c1g1UTV6elg4SlRVNjUxZ2xhcy0yTHdhYnpBTWFsamhXT2fSAcYBQVVfeXFMTVBxOERxNjdzWUxQTlZpcG5KdnVWbEdUdml1VnBoZV84Tzh6RUtnbWh5aURXNlFTaXdzVXNkY2NzRVdrMFRubTduNG5GVFNfSzdfQVg2ejBkUlB6a0htS04xVFZzRWVXQzFtU1V0VjFRZVdrdmZpaDk4RUNuQVRmNWxWb3dORENqdlJYLW5Vd2h4ZzNFd1BXYjBTUlVrbTNFMm1fdXNYNVE1enpYOEpUVTY1MWdsYXMtMkx3YWJ6QU1hbGpoV09n?oc=5",
      "publisherUrl": "https://batamclick.com",
      "source": "batamclick.com",
      "summary": "pembiayaan pindar ke sektor umkm melesat 23 25 persen tembus rp35 12 triliun per juni 2026 batamclick com",
      "id": "76f64f14bd2152a9",
      "domain": "batamclick.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d21bd86dd10c0fe6",
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
      "title": "Pembiayaan Pindar ke UMKM Meningkat, Kebutuhan Pengembangan Usaha Ikut Melesat - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQQ25FdHkyemx3ZjYwVWd1bzFnbEZKUjJ2UGR0V25OSmtpS29icW1wejZEd2cxYk5xVzNKN1NRNnIxTWk0bW1mQnhQTHJkckZiYVJZeTI5anVJb2tzekpObkNacXVGVGVEUU9NSFA5ZHYyczdhbjk0STFOR0JKRFFMMV9EZnRxOUxjRnFfWFUtenRDQWY2VjFOUlJQTDZ5VmhvWnFFaW4wenZ2TVlhUUZ0ay1B0gGrAUFVX3lxTE5LdTlrZ0FVbFpVdUFNMHpNdmRPTGtTeTZjLU1fQzJUWUFWXy1HNWI5MklPczNBYkFSZjNVa2k4RTV5UEpDakQzOVFidm9RenJOWWtBeWZ1eDNfTnN6WGlxLUladWVpWWdKMDJBTDE3RnFxemxIZktMTXJaSXJTRFVQOXhONWVwcmdZRVdVQUMyREF2N0U0bTBBaEtrMnJPY3o2X0M5Q1dVZHZvaw?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "pembiayaan pindar ke umkm meningkat kebutuhan pengembangan usaha ikut melesat kontan co id",
      "id": "7fcdf5d867f8bd0c",
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
      "eventId": "auto-d0cfd7f45fe0efed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun pada Juni 2026 - pdiperjuanganbali.id",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9Rd0Z2dUhLX01ELUloWWxnV212V01HdW56dUVScGF2ZVJNN2xmVWwybnlIR0wxaFNBb18zUkMybF9aVWIxeFVnV01EeDRPY3c1cTdQX0hlY3dkWTFPc0JQTjFMOE14RGV2NVpMQmNNUTI3SHc?oc=5",
      "publisherUrl": "https://www.pdiperjuanganbali.id",
      "source": "pdiperjuanganbali.id",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun pada juni 2026 pdiperjuanganbali id",
      "id": "4b27b861dc377f19",
      "domain": "pdiperjuanganbali.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b20ff7e437d421e5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Naik 23 Persen - Akurat.co",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQeDNZQzEtV0N1aFlJN3dvdWJ5TmVBaGRvVkVvLTBqWm1ZNHg2V0g4dGVVX1NZVzN3NzdzWG8wVGRlZ25UZV9yWGNRdkRDRHhGV05zdDZyeDdRb3JoZXREZG5DZTNrd2Q5cFQyTWZUR25XLVVTcG5oazVqd21lak1OOU96djBkN3UtWEhBLTlLLVhkclZFTko4V1ZsZVd0OFYtTU5n?oc=5",
      "publisherUrl": "https://www.akurat.co",
      "source": "Akurat.co",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun naik 23 persen akurat co",
      "id": "1ad63413f7b9c878",
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
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Tumbuh 23,25 Persen - Jawa Pos",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQb3NJYkluZG50ZmFySU5GaEZUb2ZnTW8yeUdoNnppTHpybEM5Ty05RUROeXVvanZ6UE1CVXZQLWxyTUlCaHExWldrWVRKVjYtTndXejh4V2xadWdRZ1BrT2l6SEg5dHVKVmlfNnBadnZCbWd3VlFkWkxlRlY5dWlSY0Q4YzBaMWR0dkRlcUlUR2pPVVZlVWxMWlNZckFaY3dLYm03QVlfZlRld2VmQUMyVlVCTEs0STVicV9UR29iWdIBvwFBVV95cUxQb3NJYkluZG50ZmFySU5GaEZUb2ZnTW8yeUdoNnppTHpybEM5Ty05RUROeXVvanZ6UE1CVXZQLWxyTUlCaHExWldrWVRKVjYtTndXejh4V2xadWdRZ1BrT2l6SEg5dHVKVmlfNnBadnZCbWd3VlFkWkxlRlY5dWlSY0Q4YzBaMWR0dkRlcUlUR2pPVVZlVWxMWlNZckFaY3dLYm03QVlfZlRld2VmQUMyVlVCTEs0STVicV9UR29iWQ?oc=5",
      "publisherUrl": "https://radarsampit.jawapos.com",
      "source": "Jawa Pos",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun tumbuh 23 25 persen jawa pos",
      "id": "39903314ef06bfe2",
      "domain": "radarsampit.jawapos.com",
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
      "date": "2026-08-21",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Tumbuh 23,25 Persen - Teropong News",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNSUktZkc2WlhQMElueENXRDVnWW9oNFJkWElHWGQ4LVcxSFlNRUZRc2RYYjduMENIOHd3MVNTLW5HTmtJRHZPdUp6ZWhySzFPMTlHNk1nNkY3Q3o3NElaQ1JlN1pLck5LejgxeERRUGZLcnJyOTZLSTJXMGVzYUJxYTZnRVNZeEhGZ0JubUsyaGFuMTNQWnBqQXBma3BldE9HUHc?oc=5",
      "publisherUrl": "https://teropongnews.com",
      "source": "Teropong News",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun tumbuh 23 25 persen teropong news",
      "id": "d5890c325df9609a",
      "domain": "teropongnews.com",
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
      "title": "Pembiayaan UMKM Lewat Pindar Tembus Rp35,12 Triliun, Tumbuh... - SINDOmakassar",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPQXRmazJpMWd2U2JfYkNkZXA3SE5qcENld0QtaXZJSGhFNXF5MTZtQm9NY001LTdmVWdZQTE0VHhDQVlVRzNXcHBhMDVYVDI1aXNXLUZKWFlqVU51cEhhMXJrQnVEU1pNQ1VvMVBadHYzRVdOWWlTbjhtNlRXNkg2WE5BRTRIVlJnMkptMmVYdkxSNzdKRXp3STM4UXF4QTFGRG5VZ0stT0JOc3YyOV9CWFRCVllyOXZYc3pFQmd6R0_SAccBQVVfeXFMTzdxNjduTE1DV05uRkxXWHUtN00yaEFwZDV1WEZTeTRyeE9iZjR3VnhPb0o3N2ZKTV9MTkR1bjJqUDQ3dWtUN1hqSnM1MjBPbjFkLVFmeExPc3lOM2k0UWd5alVPdUctSGo2d0FyRzJ2emZXQTZBZ0wzdXRCNHF4TTEyZDF2TS1zRzNTTXBIRkR3V0VSUGRnZmRNcGNnWlhFMWE5RG4zdWdMak1LS2RtM1FObU5LZEdnRFBVTVJiRlhNaUtwdVF6Yw?oc=5",
      "publisherUrl": "https://sindomakassar.com",
      "source": "SINDOmakassar",
      "summary": "pembiayaan umkm lewat pindar tembus rp35 12 triliun tumbuh sindomakassar",
      "id": "477f127a2db75520",
      "domain": "sindomakassar.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cbf2eeb551071f98",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "Pembiayaan UMKM dari Pindar Meningkat, Tembus Rp35,12 Triliun hingga Juni 2026 - Merdeka",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNTHhCS19HQUVwZWNqUDQtcXZvWHNRMHBpQ1k1ejVOOWRKbmdxRU5sMXU0MTBfc1E2cC0zTzFmQ2JfcjFNYzNJLW51NExJb2FEeW00VFBaM282Z3Q4M29ZeTBiLTJSYmJrR08ycTdjeUtGSUNIbjVpbU1FZmFtWWc3SmdKT2M0U0I1NUYwcVltYmc1V0RNWkhteHFPdzBfWXJwTGZvS2JZZGxfeHh4cmhxQTVUTGJQRUc4aVE?oc=5",
      "publisherUrl": "https://www.merdeka.com",
      "source": "Merdeka",
      "summary": "pembiayaan umkm dari pindar meningkat tembus rp35 12 triliun hingga juni 2026 merdeka",
      "id": "0940fbda68096536",
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
      "eventId": "auto-86714614c1b8b7a5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
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
      "title": "Peras Santri di Tangerang, 3 Debt Collector Ditangkap Polisi - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQSmhZWC1UY0dxSkVEd2xZQnJlX2t4d3RYaExhenNkYXUyaGhHTXVNbGh4WEcwV25kclNsTlJnWm5sTkxtRnVlOVFoM2NoN3NpTHgyVzRoanZqVmVDRjVTQWE3eUd1b3ROaUt3Ykx1RzRST29UUUJGaENfRE5sQTVlV3c2MzZHdXBqRjlTb196elZlMTdaTzZkY2xGOGN4dUV1Ymow?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "peras santri di tangerang 3 debt collector ditangkap polisi beritasatu com",
      "id": "2cbb6f9878afebf8",
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
      "eventId": "auto-1e159498b412b77c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Pindar Suntik Pembiayaan Rp35,12 Triliun ke UMKM, Naik 23,25% per Juni 2026 - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPeVNacGhjbGdCeUJTNm1BUjU3TXRsa1FiV3JVOHRfd2h1MU5DSFFXbDJ6MEFEZmRjTm9rSXUtSlRLdkthc0Y4RkpkOFRZRnlrbnQxUnpWMGtYOFBob2VITVFkcXQ1dXJMMF9qWlo0Nm1HSDdDcW5ocGthWDczOTdJMF9ybEZoN3NHVjBtQmIzcG9oVmw5V1J1R1FZeXFaWUwxaDZUSjl3TnFObWwzTWtVQ0dRSmNBNXcxRnVlVHZFZzB2RnI2?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "pindar suntik pembiayaan rp35 12 triliun ke umkm naik 23 25 per juni 2026 bisnis com",
      "id": "394154df5d7ff3d5",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c0dcaf2328027c04",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
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
      "title": "Propam Polda NTT perketat pengawasan personel terkait judol dan pinjol - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNb0VxcW4yMFVjOW9Rdy1BTTV4c0hLNUR5T1liZ1hQbnNOZjN0MXpEV1NpUW9QMHFRTEZ4cFNtM3c3aWxlaS1WSGE3Qk9nNkxMNkVYLUJrbU1Kb294WTZyMFEzb0hwakVNVkdiUGZKZ21FRnhubjh6Vy1WeTg0blUwZ1Z5b3NLUDBkZGtqRWVYRFFvZlJPVS1GaTlMZlZSMGw4MVhhUUVhbFluREtVSllpUUJaUEM?oc=5",
      "publisherUrl": "https://kupang.antaranews.com",
      "source": "ANTARA News",
      "summary": "propam polda ntt perketat pengawasan personel terkait judol dan pinjol antara news",
      "id": "ecd789ef2cf2d2f1",
      "domain": "kupang.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-537bf122a8ad0e3e",
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
      "title": "Tumbuh 23,25%, Penyaluran Pindar ke UMKM Sebesar Rp35,12 Triliun - Berita Moneter",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOYzlqcFlnbHhXLVl6cHpkbnF6cHU2WlltbUg4azFkQnRUVS1XWjgxY1hwU2NSZF9zWjBWS3hjSmhIZV9PM3FtcVVxZC1GRDVGdlNZLUE4N0R1T21ic05YN1lsSlZFMm5XRTVCdWV3c0UxVVFrTElENmozQVNZOVd0RUREVDBkWll5MU5OUVRDakc?oc=5",
      "publisherUrl": "https://beritamoneter.com",
      "source": "Berita Moneter",
      "summary": "tumbuh 23 25 penyaluran pindar ke umkm sebesar rp35 12 triliun berita moneter",
      "id": "bb7931404292412b",
      "domain": "beritamoneter.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1eca9570925e5ddd",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-21",
      "title": "UMKM Jateng Didorong Jauhi Pinjol - Radio Idola Semarang",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBzY1ZzcDhPR1dVZEkxZENjUjllZlVERUNHUF9hMjRvaUo4RGpnM1dOVmdXQVhZN2pVVndqdHRQNWFpNnBGekJIQlFfTGY1Z0k3dGYyR2syd2tSSlJVQ1RGTFRjMTlOVGw2aVhyRXpGbw?oc=5",
      "publisherUrl": "https://radioidola.com",
      "source": "Radio Idola Semarang",
      "summary": "umkm jateng didorong jauhi pinjol radio idola semarang",
      "id": "67d87dc1edf0bae7",
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
      "eventId": "auto-0751749bbc4d8a3e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-21",
      "title": "Viral Dihubungi DC Rupiah Cepat, Klaim Diteror Berbulan-bulan - Finansial - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPRExuY0h5THlMX0hpbGRCTm1qaS1aWS1YOFpnVzRpMzluU0xWMkpSTGlmN2NQLUdYZVcxSnRPRVV4THFWVG9fak56OFVLV3I1WEJRdnBCYjduMFJpNjFocFJnMlpCSnZuV0JVZF8tZjhZZDFING8yLTZuVTZxSEtQdGtXb3A0Nl82WkhqLXJwVGNYaFpqOWx2dFNvZjRyREUxZ0E1MENvN0kzOFc0SUplczJ2ZWw?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "viral dihubungi dc rupiah cepat klaim diteror berbulan bulan finansial bloomberg technoz",
      "id": "39f56c8b045bc9c7",
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
      "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxNcnJ4Mi1HSW5ZRlRmaWJKMmMzQmhueWhDcTVOVEhyYmQwb2VNakhkb3ZGblFYdTdyNGVXeFBBTWtXa2dhRjZncXd3R0lROF9abF85YXIyR2lIYnN5bVJQYnlVamEzcmN2UEpWYzZnR2p5SzhPbFVmUWt6VHl5UTN2Skk4QXMxeGx3XzAxaTk3Wm01UGtjUmhCTDZ0ZHZVZjRxdHlzMDdkeVhBalNuODAyQ011amNod0JvV19mUnRFOUlVVXFlRThmUXdiTHlvb3djU2E2cE9ZR05YZXJkN2Z6T083RGttSlVIeVFYUUFYSDZLUkZkTWoyWGFn0gH_AUFVX3lxTE9PRlhqUUNIUUpzbjVuODhqLS0xSEpMQVhTTkQ1Y0c5WF8ydWNjNXZnb0F6YWc4TkhDZVk1SldlQXNUMi1SZlRhaGtFRnU1cmpmVWV0SFJtQVJ4bTVNanlBWnQ1WE9aYUdQdURQWm9NS19UTGdmSXc3MTFKWTFLUGVaWjBxeDNfbFo1S1lXck1icEtHVFJNTUtLYnZDLUs1eHhOMHNSUllybGRVRV9VRDFSeGMzU3Vzc3hUWmg1czA0MjVTSHV5NWMwVWZQZmRHQ0dLSmhlMmZudk9XcDRvNU1PVEw4aE9rN1pFTmpFQXRsRGJvTWMwSnUzY2dzQjF0OA?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "apakah utua pinjol penipuan pinjam di utua pinjaman online apa bisa ini pengalaman cara meminjam tarik dana berita diy beritadiy pikiran rakyat com",
      "id": "331ab305cc9dae0e",
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
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOaEZnWDlfNXlka1B4a1dwZjRJamRiM3dYZEJsYThnYVVCTVRtaWlJVWpMYXlkbEVwR1E2TTJtNWtyaVpLR0NKa0VYcDkzem5Qd3ZNa2RSeWM2T3NFMWw0eVNCZGdPVVRPTTVUV3NTRUEtZ2tUX1NnOFJXWldWNUZoaUpEMnlHNlVfT294WHpzRGZVcUNQek94Rm9uR3p3RWVTOE96UEJ5NWZWckJHN2VNLWhKLUdRaExlS3BR0gG7AUFVX3lxTE5oRmdYOV81eWRrUHhrV3BmNElqZGIzd1hkQmxhOGdhVUJNVG1paUlVakxheWRsRXBHUTZNMm01a3JpWktHQ0prRVhwOTN6blB3dk1rZFJ5YzZPc0UxbDR5U0JkZ09VVE9NNVRXc1NFQS1na1RfU2c4UldaV1Y1RmhpSkQyeUc2VV9Pb3hYenNEZlVxQ1B6T3hGb25HendFZVM4T3pQQnk1ZlZyQkc3ZU0taEotR1FoTGVLcFE?oc=5",
      "publisherUrl": "https://memorandum.disway.id",
      "source": "Memorandum.co.id",
      "summary": "awas terjerat pinjol ilegal rusak masa depan dan peluang kerja generasi muda memorandum disway id memorandum co id",
      "id": "de3c82ab40d8e265",
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
      "title": "Gaya Hidup Nyentrik, DC Pinjol Melirik Pinjol sebagai Penopang Gaya Hidup - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPRUF4WVF2aHNwUzFQQ0lCdHJDc1ZybG1vWU5sekwxb3JoVjFKWGJnOXFJdzJYbmpTckxtZU8xSGZwczhlLV94Nkh3bzFQSmlUOVdiaFpyVEZtMU1aeTMwcG1XY0VrakQtZjdHdHEzTFBGcjQxSVpKNTB4WWhSVk5RVUNhdTNEcnpEc1R0XzlPdWhnNlRsdXRqUGtURERXYV9ieTk1S3ptSUdwTlN1MmNUdGRtVkxwWUdVdFNaNkRFVVBYbjV6SXJQSWZ3QUtMRndMVDgwTg?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "gaya hidup nyentrik dc pinjol melirik pinjol sebagai penopang gaya hidup kompasiana com",
      "id": "b1119dd2b72d66f4",
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
      "eventId": "auto-ad3c8abb888d7501",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Koster Sentil Pinjol Konsumtif, Minta Membiayai UMKM dan Petani Bali - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQSnhBZTVSQ2hOel91R0cwd3M2MmppQ3p3bXhpblM4ak1QeGVaT2FpRk9xenZka3I2QnhQclRfTnBqejEzUVZQU1lRRGt0N1lOcEx0OUJvRjU0SmdpbWUtakpGbVk1RXV2Nmp5XzlGZUthbktqNEVYQTdHNDNUaXBSWnJ5U1ZpWVZ6OFJkSElWYkVZWndwNzNLZnYyTFhkQkVuMlg2UEkydVE3M1hT?oc=5",
      "publisherUrl": "https://bali.jpnn.com",
      "source": "JPNN.com",
      "summary": "koster sentil pinjol konsumtif minta membiayai umkm dan petani bali jpnn com",
      "id": "c4e59d9701d3ecc8",
      "domain": "bali.jpnn.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7f417a9ffa21d24b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Koster minta penyalur pembiayaan pinjaman daring banyak sasar sektor produktif - ANTARA News Bali",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOOFhYUGdabnVYZ3RyVExCMDlMOHBwMXFDTXpVNW50SjNwMWF5UTNlRm5LeHRqVnRSOWpNa3lnek5rRjd4YlBDRm9qU1hJNEhZMmtndzNWN3NoYjIwb0lmeTdNbWpsYkhHVUMweFp2YktpdFNBcEphdTZ4RVR2dy1GTlkyM1llb0tRWWdoanE1RUZzUDdNSDJtS0xhMm12dlFrNUtwMGVxVXp3MkNzb2YwTWplVlFJTzd4WlVIM1ZHWE1kUdIBwgFBVV95cUxOOFhYUGdabnVYZ3RyVExCMDlMOHBwMXFDTXpVNW50SjNwMWF5UTNlRm5LeHRqVnRSOWpNa3lnek5rRjd4YlBDRm9qU1hJNEhZMmtndzNWN3NoYjIwb0lmeTdNbWpsYkhHVUMweFp2YktpdFNBcEphdTZ4RVR2dy1GTlkyM1llb0tRWWdoanE1RUZzUDdNSDJtS0xhMm12dlFrNUtwMGVxVXp3MkNzb2YwTWplVlFJTzd4WlVIM1ZHWE1kUQ?oc=5",
      "publisherUrl": "https://bali.antaranews.com",
      "source": "ANTARA News Bali",
      "summary": "koster minta penyalur pembiayaan pinjaman daring banyak sasar sektor produktif antara news bali",
      "id": "c64cd7a87e6f1b84",
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
      "title": "OJK Catat Pembiayaan Pinjaman Daring untuk UMKM Tumbuh 23,25 Persen - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOWUVES1hSamtmV3dheHhGVTZqNExJTlBiejFQSE5KampiY3piSWZubUtKTFVSV1VpY2FSN3RBU0wwNzcycEVJSXNra1hCZnVvQXR1Tm03ZUVoWjB5WFQ5OElMSHlPbVl5NWVzLTJpQlh3Rm1lVlVUTWRKeXJBajd5aFBRMzF6cEdrck1tNVdsUjdrRTZpQWdMS1I5QTYxOEktUnJR?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk catat pembiayaan pinjaman daring untuk umkm tumbuh 23 25 persen rri co id",
      "id": "88acd304b47c015f",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1899cdde6aadb9ca",
      "eventType": "industry_update",
      "eventSeverity": 0.18
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
      "title": "OJK Menerima 77 Laporan Aktivitas Keuangan Ilegal di Regional Papua Barat - pantau.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQNlN1LUVkVU5CTlVkSTdYQ2l4V1doYkdpbk5zRnU3V0ZPZnRHNG9MdUdzUXZCcDdkcXdodVphZ1pVVHhnT0V2RXBKSGRLdTZzblpzVVhtbC1VU3JBMUM1WTVQYTVOSWJ2T1k2ZDR5V1NwaXludW1xTDhBVXh0SFBGWFgxaUd2cjJwYTlVZzVVSi1xeExlMFQ3NEl1LWNSWVRYclN2V3BZQlltWHQxY3JJdA?oc=5",
      "publisherUrl": "https://www.pantau.com",
      "source": "pantau.com",
      "summary": "ojk menerima 77 laporan aktivitas keuangan ilegal di regional papua barat pantau com",
      "id": "c1884f6589cd85a7",
      "domain": "pantau.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0b79fb56d10f7dce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "OJK: Pembiayaan Pinjaman Daring ke UMKM Tumbuh 23,25 Persen - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNZEhLVFJtNlRkb21kWFQzY2ZYbHh6WFo5NjA2RUxnOVZoZWlDMVF2c2s2cjZhYV9JSjRGLTQ0aEJ6Rl9wNXBxTU5UdkhNYkNNblJUNzBXbWtTZGVPSDliVWNIU2RjdVN4V294V0lPRXFrTEVrajRqbDB1T3dYQjhybWpjSERqUDBOTlJfU1hYLUVuM3pwNUoyN2hlbjdjemY0U0wzWGV1dDJHUQ?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk pembiayaan pinjaman daring ke umkm tumbuh 23 25 persen rri co id",
      "id": "7af97e9db14ea70b",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b55087d33cc2b715",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-22",
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
      "date": "2026-08-22",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp 35 Triliun per Juni 2026 - SuaraGarut.ID",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBOelY1V0ZhdnM1dG9ERXR6bVVSMW1kQ0RwZG95eXNrNGNBandIajlkcW12TmFfTExacHV1VWVVdjhQenlXMUkycVgtVFdwb3dmWXBBampDcDdVaVhZUXpoblBBM3Q5RG5YR05NbGY1dw?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "SuaraGarut.ID",
      "summary": "pembiayaan pindar ke umkm tembus rp 35 triliun per juni 2026 suaragarut id",
      "id": "2253e329b46bf725",
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
      "eventId": "auto-0f355465a873589b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun per Juni 2026 - pdiperjuanganbali.id",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE5XNXFxUmtxVWJVcG5RNDF4ODRraEd4OEgzdkg3Z0d0VWpIeTlyUGZPN0h6VWRjemFGM2h2WXBIN2drdzNXc3pLdGhqUk5GT2RicDJvb1Y0dmVrZlgxV3lMbnMwTlVhZ0g4SW5WMFRtUGJrYmRQbVB2d0Q1emI?oc=5",
      "publisherUrl": "https://www.pdiperjuanganbali.id",
      "source": "pdiperjuanganbali.id",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun per juni 2026 pdiperjuanganbali id",
      "id": "12a29049cf6d900d",
      "domain": "pdiperjuanganbali.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-38f50d412c105f8d",
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
      "title": "Pembiayaan Pindar ke UMKM Tumbuh 23,25 Persen, Capai Rp35,12 Triliun - afb tv kupang",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRm9EVFItcVFpVGJHV3BtVjFHUkdIOGVRa1RYTmxHSjd5OVhyZVZ1X2Y3V3Fla3U1RFBIazU2U2hwQmlVdlcxZEdlYVZqeVZDbXhqdmNmaklfaVZwd1F6MEV4NzNWNHdId0JCV2NMdjVjYTRsOFdfQzBPdFRfWEVKZnlSMXZLOV9oWVkwQlJxTjNHbG5FcnRmdS1qQmk?oc=5",
      "publisherUrl": "https://afbtvkupang.com",
      "source": "afb tv kupang",
      "summary": "pembiayaan pindar ke umkm tumbuh 23 25 persen capai rp35 12 triliun afb tv kupang",
      "id": "884255b12b247038",
      "domain": "afbtvkupang.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6b63a17da9dfede3",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-08-22",
      "title": "Pembiayaan UMKM Lewat Pindar Capai Rp35,12 Triliun, Tumbuh 23,25 Persen — Batam Today - Batamtoday.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU0NFT0tJUUZFS2JGbHpOeUM4Vkk3VTBaX2d2OGJ2WUxKS1dfeDd4N1A3dkV6Q1JteFpjbGp6Ri1fRm5GekVpUWJPa1VobHU2UG5WQmc5d1Iya3BqRkRncXRIR295czZidzhMZ2FoelhCc0pUc0psT1hXam5FQklYTVp0RU5wVkF5T3FsdWY3QVFPVTJZeFh5c01zMF8?oc=5",
      "publisherUrl": "https://batamtoday.com",
      "source": "Batamtoday.com",
      "summary": "pembiayaan umkm lewat pindar capai rp35 12 triliun tumbuh 23 25 persen batam today batamtoday com",
      "id": "1e2a0f83a29ceb2d",
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
      "date": "2026-08-22",
      "title": "Terbanyak Mengakses Pinjol, OJK Tasikmalaya Tingkatkan Literasi Keuangan Guru - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNeU1feGlxNk9EcWl1S0puWUx5WUNsSFlwTmhJM0NEQlNlQkgteUZmMC1lUEx0Q0dUUHljV1QzcnJ4WTdtUjJFYm55Z2ozbXFHQTFiWGZwM29HenV3aGFzNkFuNERWV3NKN3hJV0RrZ3F6VDVvcS1zSzNCeThMWkJXVE9NVVdmOHdhSU1nOVV2QUozYndFemJ0SGN5TkFOQy1HVkFwbWV6UGUybVY0eTgyV0ZLdGpkMHVpSlA2VTR4bW05VGVQdEE?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "terbanyak mengakses pinjol ojk tasikmalaya tingkatkan literasi keuangan guru rri co id",
      "id": "da2cb8b11546f28c",
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
      "eventId": "auto-7f2f4379e8ee3076",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-22",
      "title": "Waka Polres Bersama Propam Polres Lampung Utara Cek HP Personel, Hasilnya Nihil Judi Online dan Pinjol - Tribratanews Polda Lampung",
      "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxOQTBlMGFCTW1MSThiQV9yRDA5blNsTTVzZGF3cTNTbUlSM05WdWtfdVk2dml0SDltbHQ0OEo5eGVqUjBkNmNMU2N1VV9LMm5EM0VDVzc5Z3Z6VjZwWmNrUmVhQVJ6TFRZcVprcHlPekpxd2xrU3pQWGY5a3F2RHR4aXpGNktVa2pyZ3hwWXZwN1VIWlJ0S0hTUkFMeF9kZDYxOFVqSUJkSW5aUGNZZkdza2VhNEtIVXhoZURKc3ptZmVtZWlGdmdRbUNiR1BKaGFtV0dPWU1nMmdKNXFjZUxaNEN5QTdwZGZaMXc?oc=5",
      "publisherUrl": "https://tribratanews.lampung.polri.go.id",
      "source": "Tribratanews Polda Lampung",
      "summary": "waka polres bersama propam polres lampung utara cek hp personel hasilnya nihil judi online dan pinjol tribratanews polda lampung",
      "id": "f91723f5b0e7ef10",
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
      "eventId": "auto-185e2da5a6998cda",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "AFPI Dorong Kolaborasi Lintas Sektor untuk Perkuat Industri Pindar - floresku.com",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNUlZhWGhQcHJTRm1zV2cxV1hkUy12X2F2bkZTTVlhb1pGNEdBUHJoVkJZQ19XN2pEaDZPWEhWOHF3LTYxc2g2V09KMzR4QWZrWlZYRkt6V1p5R3Uya1A4SXdHbkdqUzM2a1NVQlBUd00tVHhBdTV6Q0J0VzRlb2loc25mRGRQdU1aVXM4UlM2eEtyX0lUcUHSAZYBQVVfeXFMTVJWYVhoUHByU0Ztc1dnMVdYZFMtdl9hdm5GU01ZYW9aRjRHQVByaFZCWUNfVzdqRGg2T1hIVjhxdy02MXNoNldPSjM0eEFma1pWWEZLeldaeUd1MmtQOEl3R25HalMzNmtTVUJQVHdNLVR4QXU1ekNCdFc0ZW9paHNuZkRkUHVNWlVzOFJTNnhLcl9JVHFB?oc=5",
      "publisherUrl": "https://floresku.com",
      "source": "floresku.com",
      "summary": "afpi dorong kolaborasi lintas sektor untuk perkuat industri pindar floresku com",
      "id": "617640be96b6bb9f",
      "domain": "floresku.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cecd0d07d82ca777",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Akses Pinjaman Digital Meluas, Ini Pentingnya Jaga Arus Kas - Medcom.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNdU5mVEF3R2prSXZsLWZacGdBQk5GZGJLZXJaRHRGdnVPc25NbzFacE1PbFVQa1EtZmxiVm0zbXNTaWdEOTVrd1Z1RkM2b2V4YzE0UjFmSzJDd0lIdHl1YUxmTC04MnhCc25mMVJQS1ViV3BUenl1OG5rVGJ0ZU12bl9VaXpoVXVYVDJPWm9rVWdRcjA4YTlHanVTc2JINEhPZTQ2dEsxNFo2dw?oc=5",
      "publisherUrl": "https://www.medcom.id",
      "source": "Medcom.id",
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
      "title": "Akses Pinjaman Digital Meluas, Tiga Prinsip Ini Bantu Jaga Arus Kas - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOY0JPMzJLbkh3M1JfR09aNGNHWHhtQjE0UGlHcnFFb3NZNTJIYUJ2eXJzWlU2SUI0WEwxa1VSRzAzSWRKSzl3S1l4S0JUVXVFQWZGbVNnVXFFVktSSjc5dDhhdWpWaFA4VllhQUpla1lSbEdJOU9VbnNkaTkyVV9ZQlBHY0EzZE1CQl91bw?oc=5",
      "publisherUrl": "https://gadget.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "akses pinjaman digital meluas tiga prinsip ini bantu jaga arus kas qoo media",
      "id": "7fa18d9b286df59f",
      "domain": "gadget.qoo10.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c6061d0ce51d63eb",
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
      "title": "Dorong Pinjaman Bertanggung Jawab, Kredit Pintar Kenalkan Teman Atur Uang - RM.ID",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQVDd5d1VxbUhQaEthNFR4X0tELWViakJGS1plX3NZSjVIdEM0R005bGtYM1BZcjdQTWFJSWdUWXAwM3ZIT1dBSTZDYVRZdDlha1ZTb0liMGh0WlhpdFY5R25OVW1WY1hfbWtVelFoNUdsNk1HSnFJLWRFOTRFREZ1dGd5aVV2WWxYdlRSbmtTZHhTMFVlSWhyZFVSYm1rNUNGTm81dmZnMWJpT1JRR3BJZUFrZTVjT2xqQ2h4dA?oc=5",
      "publisherUrl": "https://rm.id",
      "source": "RM.ID",
      "summary": "dorong pinjaman bertanggung jawab kredit pintar kenalkan teman atur uang rm id",
      "id": "8742ec654ad2c0d8",
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
      "eventId": "auto-5c43c08f115d762b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Foto : Pinjaman Digital Makin Mudah, Jangan Lupa Kendali Finansial Halaman 1 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPTEx5R0VoSmduX3phdGxpTExpaGJ0Z1E0Z1RHSGc1Z09Fd0lUYjc3TDNwTDkySnc5YlRHLWFpMVg4bjl1RXMzam55UEtUNzRXTkMyS1NQRVM2ZmkwUEdpWFdvS2dLTURPT2R1cElpcEpDRGVSckVmbWhVN0E3eVV0TkhybUV0cjNaekZ1VC1sdHdYVVF2UU5fcUFNX1htYzBPMEkwazQ0UElXVkN1b2NldkJidTdDLWwz?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto pinjaman digital makin mudah jangan lupa kendali finansial halaman 1 kompas com",
      "id": "f35a82108a3e7d83",
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
      "eventId": "auto-c9347e6ae3c72f77",
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
      "title": "Kredit Pintar Dorong Budaya Meminjam Bertanggung Jawab Melalui Teman Atur Uang - Readers.id",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNUE9zb25BZS1IM3dGZDFnTHFXQTNtMzhBSW5lSWtaWFpTRFZXQXI0UkZVWDVnZzhZX05WcXZDcnI0dUlzLXRkeERobGhkUTltcTJfRkIxUlNVRU03aU0wOGx1VHpxTlhpaWlxdXBzQkJYeDdGajZnaGtxZngzd0luQ1ctcw?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "Readers.id",
      "summary": "kredit pintar dorong budaya meminjam bertanggung jawab melalui teman atur uang readers id",
      "id": "b08857674706d00b",
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
      "eventId": "auto-4c21838bc75b084b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Kredit Pintar Dorong Masyarakat Lebih Bijak Manfaatkan Pendanaan Digital - RCTI+",
      "url": "https://news.google.com/rss/articles/CBMipgJBVV95cUxOaXZBel9fUlVGVUoySTdteUllUFpkdVUxZEY2UVlNekJQdXZfdFNZZU9hUHduRDIzbThoNjB3Y0NCUnBvdVQ0LTNPNWZXMWpfRlNoc3NoLXpFWEtzQ1ZsUkdITXRZN1d4Mnk3SFduR0gyMDVGNHhsUGNIMm85cDBnQ01XQWdpaWJOZ09DYU9KNnFLc3BzS0F5OEVUVkt0S0xQTlB5Yk9acHNTTmlGRWVqd194dHdzeEF1Z2VFTEdKMGFoTW1NRE56QzZlWVBsa3VaOWU5MFpQMDh2Y3lwM0J4djFtcDVBSk1UNG1yYXRhdUlCclBlN09kTzI5ZGIzTFk0ZS1HRWF6ZHJXUW8wck5fRFZsUVVBdTlqU245eFZvSlFWdWlXQ2c?oc=5",
      "publisherUrl": "https://m.rctiplus.com",
      "source": "RCTI+",
      "summary": "kredit pintar dorong masyarakat lebih bijak manfaatkan pendanaan digital rcti",
      "id": "ab1312784a79f339",
      "domain": "m.rctiplus.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
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
      "title": "Kredit Pintar Dorong Penerapan Finansial Bertanggung Jawab - Readers.id",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9jcTZHZXJ3NzkwdlFXeFI2V3k0eVBtSHhsc21OYjZTWDRxT2RySkllenhQOVJXcm1NRnFQLXd5S2xZVHZieFIzWHU1TmFQWVVieFcwQVM3RFFYWUo5b1B6RXB2SlpnZGpORVhFYUFZS25GVERzQ01pT3BiUQ?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "Readers.id",
      "summary": "kredit pintar dorong penerapan finansial bertanggung jawab readers id",
      "id": "1e1c3751638aad4e",
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
      "eventId": "auto-e4a7d4a08c5cb5ea",
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
      "title": "Kredit Pintar dorong responsible borrowing kendali finansial yang bertanggung jawab - ANTARA News Megapolitan",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNNXlzNy1ocUZPWjRReVEzRDRiRlJjMlViV0l0TnBaWHlDZGhpWE8zTDdQOWhJSVRzc29ETUpPWFQzSXdhTGhOeTZWNk1PSUstcE11TE1Ea21OUWhnZTBqYWI2NjRrMDZNZUFpTVVWQWNXSlF3S1JaN3gxenVGZFlOWk5wMEVRZHNMb2IxMkZsTmVHTlVuUk5KdklTOFppUzZRTW1pTUNnWktXN0FQeU90Z01lS2FLQkN6RVpsSnZxWmFremVvR3B1MUlpMW7SAdIBQVVfeXFMTkpVVWJ2UGRCVW51UGNVbnNOR085YVFmLV9VTzNyS1hETF8xRVdQV2UtQmI0ald6cFNBSGNpbTBrb0xBOEdNaVoyU2d6dEFWWFhTczBzSHZwaHhmTkY1emVmRnlTUmNMNXY3NDhZZTJFaEVtdEhfeGlHSlBlNzFyT2lLUzVqcjhKMEFtTWttSE8wdGtyYW1XbnNTLV9OVFljYmtGM1JDX1A3ZzJSN2lLYU5lQXBnamJZdkxUeHJWeHdQVWFPeXRRdmVzX3ZLb0R3VFV3?oc=5",
      "publisherUrl": "https://megapolitan.antaranews.com",
      "source": "ANTARA News Megapolitan",
      "summary": "kredit pintar dorong responsible borrowing kendali finansial yang bertanggung jawab antara news megapolitan",
      "id": "16abddada80f27fc",
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
      "eventId": "auto-8e7b72fc30f5b0f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Link Apk Uang Cepat - Pinjaman Dana Cair Tunai Dana Cepat, Apakah Ilegal dan Sebar Data? Ini Pengalaman Pinjam - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxOY0RBblZIcVRlMGlMeHBaVmg2YXQxSFk5MUpreDBPN1BfdGsxNHA4OFNuNjBnZlZhMW8zRFN4cEowMkdua3IwcEVlQmxOQjU1ZzRfQU04M2RoVDd4TkN3WElIa29EdkptX1JsMk5QbjYtRlVKRnZ3M3FPOUlGOWRfbl9USEpNOEVLdnhwSFMzVHo3Z2RQYjdwaC1vVmVlYUoyd2V5b1VSUlExNXNib1BYNVZBVmRraV9tQzNOc3ZVMkpfNjFaR1MwWnE5ODJQajJnYWgxZk5vbnlfaTdiV3JxYk1teE5XSUYwN0dvZkltZnd0T0EwT3hKeNIB_gFBVV95cUxQZUlHVWpTNnRiWWx4UWhUYXp6ajJMcVJoSWdtQTNjVXRmTVJtRzAzSzU4Y1lTMFdwU1lBbElncEtFdDZjZ1RuLWwtSVczeFppa1ZqM3VjQ0d1TXJxTFRQenlOd29PWTNEMklXNWdycDFRN0tSbXhUc2FiN2NOU1dFcVlQTlJreWhoTTg5ME5LUWhBbWQ1RmJHb0JPZVJVSlFkcFdNTUlMV1UyTkRKd0dsaG00T204TnhzcTNEZW5uRFN5Ri15QVNlaUpSS3hGYUNEbjRzdGt6dDZCZnZCU3piNHFYc0MxaDdQRzVkUnUzZkJZMzUzMmtOakFyY3dudw?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "link apk uang cepat pinjaman dana cair tunai dana cepat apakah ilegal dan sebar data ini pengalaman pinjam berita diy beritadiy pikiran rakyat com",
      "id": "db4169194bce96a2",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 74.5,
        "label": "negative",
        "negativeWeight": 4.8,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0dae691d1d9b19c6",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
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
      "title": "OJK Tasikmalaya Beberkan Data Umum Pengguna Pinjol, Paling Banyak Diakses Kalangan Guru - Radartasik.id",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNb1FadWtsdTB6U1FxNjdxSGpIcC1OTGdvN1RqcnhCMGNrYU5Kb3dacko2anE4aFVIRUtZMjVkdnl6U2o3Y3RaLWdQeHpEN2lrYV9KcHhPd1NiWlNlbzhOdTNsRjlEZjN1V2hfNUxtSnBCQV9zc2tJWDhIRmdROFpSV2xwajFpT0RDZVprVkY0Ymx4OTFOd0dxWVVzRTVQX1ZaU1FSUkxJVmhYbzRBdlZGNU1xd25oaXo0WVNrQg?oc=5",
      "publisherUrl": "https://radartasik.id",
      "source": "Radartasik.id",
      "summary": "ojk tasikmalaya beberkan data umum pengguna pinjol paling banyak diakses kalangan guru radartasik id",
      "id": "3cc555410ebd8d5b",
      "domain": "radartasik.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cf49db55d7dadaea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "PINJOL Dana Pinjam: Legalitas dan Risiko Aplikasi Pinjaman Online - Karanganyar News - Karanganyar News",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOQ0ZpWWVETzl1ZEZpYUtXUG83eFhSZXdHZVg0NHVqUG11UVdiaEJyQ3l2NHZraktyT2hQYk9pRDlnSE96LTc4NjFQWVUtRFNHaVV5TEJ1QzNlZEdwTC0wU19GU0paNVNFSng5VVZ4b3hmSXV0NV9pRTFURFJuT2VKVlNBb2lqd2F6Y2dubkl2alhUXzN0OGkzcjcxMGIzdnloWm9ZOWstN0M3bXp3NWFtSjVqQ3N5bU5kWmtZcTZFNFQ3VFNZNWc4SUVn0gHPAUFVX3lxTFBqdjAyVGNLU056ZEJ2ZXBPU1EyTGVMd1AzTG9zQjBtLW03NmwxaV83aFpLVUhlQmhVVDYwRjQ3ZHoyeWM1Q0J2Z1BQYnU1dWp1R19XTUpFVmZ6R0hWb3JCOURjWkRQQi0zZ0ZORnRpV0tPalM5RXRURXdubzZ4Q1AtcENzWHBNYzhWakZQbHR5b0ZOYTFjWV9lSkxlVHd0ZnFfeEtad2JYZlJFeXVpcF9obnF3S0FpNENabXljSTRjVGc2UHEzVmxVbDhlSnpLVQ?oc=5",
      "publisherUrl": "https://karanganyarnews.pikiran-rakyat.com",
      "source": "Karanganyar News",
      "summary": "pinjol dana pinjam legalitas dan risiko aplikasi pinjaman online karanganyar news karanganyar news",
      "id": "7213e581e58a8e3b",
      "domain": "karanganyarnews.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 47.9,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a236e207fc21f11e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Pembiayaan Pindar Capai Rp105,14 Triliun, Industri Masuki Era Baru - Ibukotakini",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxORGZaOXFNaVh5RE54RllvSDBZbUh2cU9iVnhhZkNiMjJFUU84QkdLQ25HaUNwVFNvN1lQeS1ZWkUyVXpzdFJlYmpLY1dLQ2pISl9PSVJ5VTVLS1JtZFU3UnBfaGpoRTB2S1JPaUd2d1R1VGNRVW9wbnNiWEtTSWJseGw5bndMcE96U1Y3Rm1JQXhJMld6MUVDVWNR0gGaAUFVX3lxTE5EZlo5cU1pWHlETnhGWW9IMFltSHZxT2JWeGFmQ2IyMkVRTzhCR0tDbkdpQ3BUU283WVB5LVlaRTJVenN0UmViaktjV0tDakhKX09JUnlVNUtLUm1kVTdScF9oamhFMHZLUk9pR3Z3VHVUY1FVb3Buc2JYS1NJYmx4bDlud0xwT3pTVjdGbUlBeEkyV3oxRUNVY1E?oc=5",
      "publisherUrl": "https://ibukotakini.com",
      "source": "Ibukotakini",
      "summary": "pembiayaan pindar capai rp105 14 triliun industri masuki era baru ibukotakini",
      "id": "4e5015923eb438af",
      "domain": "ibukotakini.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-11c54d89daa524f7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
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
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun per Juni 2026 - youngster.id",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNNTcyR1N4RzV5SVctcHBna0ZFTVVrbEI3QmVTTVJoX1plLTQwMDNlTzltSVJWRFBnV3M4dXA0RE5qeUt0OUVQWmhZeFo5TGp2UWZUUm05MVpncnZkd0hYNHQ5Q1o4MFFsMjFuRHNKXzRQTEh1c20yTXlCUlBzamF1YUFRS0FweHVueWt6X2hqaFIyc2VjNHA1em0wR2ZMSzNpRVp2V1NmbDNmNWpKRVHSAa4BQVVfeXFMTTU3MkdTeEc1eUlXLXBwZ2tGRU1Va2xCN0JlU01SaF9aZS00MDAzZU85bUlSVkRQZ1dzOHVwNEROanlLdDlFUFpoWXhaOUxqdlFmVFJtOTFaZ3J2ZHdIWDR0OUNaODBRbDIxbkRzSl80UExIdXNtMk15QlJQc2phdWFBUUtBcHh1bnlrel9oamhSMnNlYzRwNXptMEdmTEszaUVadldTZmwzZjVqSkVR?oc=5",
      "publisherUrl": "https://youngster.id",
      "source": "youngster.id",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun per juni 2026 youngster id",
      "id": "d47d2c5d95fbfecd",
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
      "eventId": "auto-38f50d412c105f8d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Naik 23,25 Persen - biem.co",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOYXM2dVQzdjhLamI0TzVIMkVxM2doNmJoS0RuNFFqS3JlcmJfSlJtbXZ4VlZHZ29MMHJaMGZ4RmhJVEt1d1N3ckNkLW40WlREVlhIVUxfUzJwVHNySFF2NE1ya1NpRjMxNW5FQnhMVVdzUl9GbzlWMDhNN1QtQW1HZEduWVpDMUpOWDhLVW1melA0THNXRFlabkpXZ20xZHJUaWEyU1NkdVlwMVE3?oc=5",
      "publisherUrl": "https://www.biem.co",
      "source": "biem.co",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun naik 23 25 persen biem co",
      "id": "834f8b0ab359383d",
      "domain": "biem.co",
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
      "date": "2026-08-23",
      "title": "Penyaluran Pembiayaan Pindar ke Sektor UMKM Tembus Rp35 Triliun - Seputar Sumut",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPeHJzX0ltYld2QVp3U2JaQW44Y0YydzlNbnRmNjFjcENNUkdjbnk4eF9kTEtVYmRiVU43RXg2V2w1aXlLWFhxaTdWaWZDc2M1VFdSWUYyUXAtVm8tbWdNeXA2RlBDd24zQXEwOEs2RzZfWXdnbEo5Mmg0NjFQTEFoNjRzc19iQXU2MUxNcUZNQmdWRlVHMHhua3FnSWk1Mm8xbV9DZg?oc=5",
      "publisherUrl": "https://www.seputarsumut.com",
      "source": "Seputar Sumut",
      "summary": "penyaluran pembiayaan pindar ke sektor umkm tembus rp35 triliun seputar sumut",
      "id": "4b5a167256f63b73",
      "domain": "seputarsumut.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cea23315fb39237c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Penyaluran Pinjol ke Sektor UMKM Melesat 23,25% Jadi Rp 35,12 Triliun per Juni 2026 - Stabilitas.id",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQc2hDQllZS280MDNhVDNmdEh6ZHpYOEdlR0dHblc0bVE1akNra241cUJsYVVYWXd4WUpZelZXMUpjZ21VVHZ2ZVJBWktNc2lBY3ljSWNfNGlFMUo5MDdVSDdIYm9GMFhjTERNSVhxNEk5VklvWWJzRERNamZ4ZE1jNnNMQUNlUVJubXZDX1ltXzdwUnE3RjdUZnl5NGJaSVVmLS1wY0Mzc1ZPUDg?oc=5",
      "publisherUrl": "https://www.stabilitas.id",
      "source": "Stabilitas.id",
      "summary": "penyaluran pinjol ke sektor umkm melesat 23 25 jadi rp 35 12 triliun per juni 2026 stabilitas id",
      "id": "fc790d93a168adf4",
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
      "eventId": "auto-99c98101270f56a7",
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
      "title": "Teman Atur Uang Kredit Pintar Tekankan Kendali Nasabah hingga Kewajiban Terpenuhi - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPWUd1eDZkeHFNUFRfOUd5U3BlaDBER1ZyanAtWHlsLVZDVkVwS0xlcmlVendQdnVZWFI0M0JlQXF3VUh1dWFhOUxUTTR6eVJVX0IxLUZGWXFGNThDcFA1ZFJnLTd4dk5zMmZRTWp3LXBPZU1yUkFWS0FDR3BZRjF5cDAyQklPUS1XNFE?oc=5",
      "publisherUrl": "https://gadget.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "teman atur uang kredit pintar tekankan kendali nasabah hingga kewajiban terpenuhi qoo media",
      "id": "47e96ceb929e7f0e",
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
      "eventId": "auto-573b1b02535e7d93",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-23",
      "title": "Tiga Prinsip Agar Pinjaman Digital Tidak Mengganggu Arus Kas - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOcVlTQmpHUXFBWmk0blVTbUZsY2l1MGdGS0h5NWloUFFmeFNIZEZ4V3A4OGRpa1RCU0pkek1tdVh4ZzZpam5ZS3FYV3RJT2lKZjVrRHhBaXIzbGotSTA1dXZTdjV6dGhCMVVoMlBNYWFlSjNmcm9vZkxKLVo3WC1jRjJPN0E2TjRwdkd5OUJXM3FiZnU2?oc=5",
      "publisherUrl": "https://gadget.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "tiga prinsip agar pinjaman digital tidak mengganggu arus kas qoo media",
      "id": "3e06c99ce020095f",
      "domain": "gadget.qoo10.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7407d18a3c56667e",
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
      "title": "Apa yang Harus Dilakukan Jika Menjadi Korban Pinjol Ilegal? - Universitas Sains dan Teknologi Komputer",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOQzdSdDdQUEEwUVQ4eFBLQzQwMHhSQ3JoTzZYY1otNWxsZkZ4SzNrNjc3ZEhsUnZXOFh4OWpCOWR5bl9PZFlZOGp0ZGJ6WWFqU3VoTDVjRXJ3YWllS2lwTVVlVFdKVzNoUGdKYXlfS3pKNnZodnhna0hmYmtoZjhuNGdGSUVYMnpYdjlDalJSTU9TcUdkUlV5U1E5bGkxbFNQVkpSaFFTbkI?oc=5",
      "publisherUrl": "https://stekom.ac.id",
      "source": "Universitas Sains dan Teknologi Komputer",
      "summary": "apa yang harus dilakukan jika menjadi korban pinjol ilegal universitas sains dan teknologi komputer",
      "id": "6d7379d176182b63",
      "domain": "stekom.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.7,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-198642d909868cdf",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
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
      "date": "2026-08-24",
      "title": "Bijak Manfaatkan Pendanaan Digital, Ini yang Perlu Diterapkan - Beritaind",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOc3hmc0t0UVRLWTN5Y2VlYUNMZHZ0UmxfdktvSi1Od2k4bHhLQ3RsMW5XdXNZVi1heXh6dUdrMlJvLU85M3Bza0lzMHJEYXpxTmZkaTBZX0RkaWtxQjdIeVNnZVpkM3J4aG1zZ0wtOEtoeWdUQjV5N3J2eUtOMXdLd0puV3JodW1yVkJqSzVOS0VYNjZodnBFak1kS3Y3SVXSAZ8BQVVfeXFMTnN4ZnNLdFFUS1kzeWNlZWFDTGR2dFJsX3ZLb0otTndpOGx4S0N0bDFuV3VzWVYtYXl4enVHazJSby1POTNwc2tJczByRGF6cU5mZGkwWV9EZGlrcUI3SHlTZ2VaZDNyeGhtc2dMLThLaHlnVEI1eTdydnlLTjF3S3dKbldyaHVtclZCaks1TktFWDY2aHZwRWpNZEt2N0lV?oc=5",
      "publisherUrl": "https://beritaind.com",
      "source": "Beritaind",
      "summary": "bijak manfaatkan pendanaan digital ini yang perlu diterapkan beritaind",
      "id": "f7339e25a9e905a6",
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
      "title": "Dilema Ibu: Kebutuhan Anak dan Rayuan Pinjol Halaman 1 - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQNlQ4c3N6SVN6X09FVjBfNmJZVjBKc0RsUUxFOVpnRzNlcVU3bVZDeEFmalVhdjNVTzlvOENwdURSVDBLdUl0V19WMF8taGtLTTVKeGVZM0pCZ0k3U0IxZ2F4OFEwNFNiM3FaanhnUXk5T20xbC1EVkkzOXpoMEVqT3FJamRKSHpPSm5BMlNqMFRzUG9LWkpvV3JiYkRWWHQ1YldJVFFhY3BMYnRqUUIxQ25Td29GZw?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "dilema ibu kebutuhan anak dan rayuan pinjol halaman 1 kompasiana com",
      "id": "d6d09a5515fd3c86",
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
      "eventId": "auto-ef4f5d865a169e63",
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
      "title": "Download Dana Kilat Pro Pinjol Apk, Legal atau Ilegal OJK? Apakah Ada DC Lapangan? Ini Pengalaman Pinjam Uang - Berita DIY - beritadiy.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxOdzltSDFucUhPUzFDamt1dVlfZFRJeHFXdDdsMlZLTXk1UHhsUXhORUN6Vm1VbWY0ZWNaQlN6S3U4cVZZbXBWRGFsYXJiRmxpZ2ZaZUJRWUhSLVZDRjlLbVhiSU5HVGw2eVh5U25uZzd0TmNEMXdrejhsajd0bC1BSXhWYXdjNXUwTl8waUNvM3hCZTVrYk1KamRyWmxfaHgwakhtV2Y5RW5qNndEdG1ZNEVSOGpMVUdsdmxoQUxwRFNlOGRhLXR0bmNsT1c5YlpveERRQV9Ib05NT1JKT1dfLU84Wjk0XzNWZ0NIVGN2WlNEUHY5Y0huaW9KVUpuQdIB_gFBVV95cUxOdzltSDFucUhPUzFDamt1dVlfZFRJeHFXdDdsMlZLTXk1UHhsUXhORUN6Vm1VbWY0ZWNaQlN6S3U4cVZZbXBWRGFsYXJiRmxpZ2ZaZUJRWUhSLVZDRjlLbVhiSU5HVGw2eVh5U25uZzd0TmNEMXdrejhsajd0bC1BSXhWYXdjNXUwTl8waUNvM3hCZTVrYk1KamRyWmxfaHgwakhtV2Y5RW5qNndEdG1ZNEVSOGpMVUdsdmxoQUxwRFNlOGRhLXR0bmNsT1c5YlpveERRQV9Ib05NT1JKT1dfLU84Wjk0XzNWZ0NIVGN2WlNEUHY5Y0huaW9KVUpuQQ?oc=5",
      "publisherUrl": "https://beritadiy.pikiran-rakyat.com",
      "source": "beritadiy.pikiran-rakyat.com",
      "summary": "download dana kilat pro pinjol apk legal atau ilegal ojk apakah ada dc lapangan ini pengalaman pinjam uang berita diy beritadiy pikiran rakyat com",
      "id": "30cbf97841b1f407",
      "domain": "beritadiy.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d5ea4a6de6be9d3c",
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
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNNFc1YUJYd21yOUd2OHJfNTBKNEFIUFp2Q19iMmRRZE5qa3lRd1pxNFI1Ym1aUEdHeTlkUFJBRlhCdHBwNUhsMzdyS3NkM2NtaUV4SGZoMk1BaGZEYXBiWXg4V01EMks4TWZQQTBQMjJJM1lkMjl4NnNrQXNnc05vcFJTdEUzcnd0MndDcE5WV0IyUVNJMEQ2Wl9BdDZpSFo0dXhvaHFKRVVScERPbnBGSmpjRjhwUWp6TVNuUTV6dkx1QdIBzAFBVV95cUxPV0JOQjc4ODJzSUxsSi1qQ2hyaldRa25vengtYk1POFBHejMxaFJQWmd4TWVuVFNVVFFUYXpKd2dDZkxLMU9Vbk93N28yUmNhNU9ETE1nSkY4U19iREpidENoQ0l1dWJJWDctNjhNeWQ0d3ZLenBfVlBuMkFzNUJQeHBZdTlxZktEcy1DYUpjR3lDVHhDajdyNlRreTkxU1BmS3Bzb3dYTXE3TGliRFBDWTJtZGRsOVVLT1JZWGd3NW9OMGw4SUNkTUVvQTk?oc=5",
      "publisherUrl": "https://cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "live now kupas peluang potensi pindar di fintech lending days 2026 cnbc indonesia",
      "id": "18f829598235724f",
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
      "title": "Memasuki Era Baru, Fintech Lending Days 2026 Perkuat Ekosistem Pindar - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNb3hzaWpVcEJmSmtORk0xYm4wemFtajdpeWgyWFNGWFZQNGVXOUdTVkpZWFdrVnVLMGowTTl3S0k4RkpmdE1yQW51SnJkREtlTHVQaWVpc3diaFh4ekxmUkdTd1JFdkRzSU92b1dRRUdXS3FQWF90bFIxdkdfTmZ0OVg3MDRoNXpyZlFFRjhvQjdwbU1xcGhsYm5xNVhXSzBFYzlJMzkzMEZMVUxJU3hOTlNrbVpxM3FLb0RxTGtMbFNkS2luVzJTOVZwN0t0RVXSAc8BQVVfeXFMTW94c2lqVXBCZkprTkZNMWJuMHphbWo3aXloMlhTRlhWUDRlVzlHU1ZKWVhXa1Z1SzBqME05d0tJOEZKZnRNckFudUpyZERLZUx1UGllaXN3YmhYeHpMZlJHU3dSRXZEc0lPdm9XUUVHV0txUFhfdGxSMXZHX05mdDlYNzA0aDV6cmZRRUY4b0I3cG1NcXBobGJucTVYV0swRWM5STM5MzBGTFVMSVN4Tk5Ta21acTNxS29EcUxrTGxTZEtpblcyUzlWcDdLdEVV?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "memasuki era baru fintech lending days 2026 perkuat ekosistem pindar cnbc indonesia",
      "id": "1f71f6e39d2f4a68",
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
      "eventId": "auto-e205ebb8b54212c0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Misbakhun Dorong Pemerintah Perkuat Industri Pindar untuk Perluas Akses Pembiayaan - beritabuana.co",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOSWlTbzV2czJxanBrZnpaY01uYWlxbTVVMkpOTDJoSjRFdGctR0RWVWU5U1o4MzVLY1RlMktYUnhJdTF3Z1Z1ZlZBQU0zWWN3TmVaWFc3MzlMbXVSSFBGZVN6dTR0NzY0aG1xRS16M2RURzBFWmlNT2xuSVVrSEVvXzJuTzJTQU9mUUx4bl95dFhUREVNbHprdkR0OGRmVGdCaEdoVE45eE5kTndUQ3h6bGMxUjhJNTFZ?oc=5",
      "publisherUrl": "https://beritabuana.co",
      "source": "beritabuana.co",
      "summary": "misbakhun dorong pemerintah perkuat industri pindar untuk perluas akses pembiayaan beritabuana co",
      "id": "2c87dad0f530e983",
      "domain": "beritabuana.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f529422936290d98",
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
      "title": "OJK Catat Pembiayaan Pindar ke UMKM Naik 23,25 Persen - SurabayaOnline.co",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQczJmZ2t6VGVhVXpHYUM0NUNKZnRqU2d5ZzBOX2VoeF81Q0YyUGIyd1ZZM0tHWVNqUlpnYnhCeml5bm5MN0VjQjJLY3R1QS1tU2N5WGRrY01NZE9JZERJdDkyb013TE5OQjlPeXZUNTR0b0J1dGRoRTRVS1NiekJBNXdYZUVDMWM1WDM3YVZLSmUzUTJP0gGcAUFVX3lxTFBhbzZ3SWw0T1B5eE1peGZjaVBtamkzeFFSaWNYMGhOUmhlTHZEcHlyYThEWDZZY09VUjVJcDNiU3R3VG03RjR4b2xpN00xaFhlbTVRZVR1S3pCSDhxYlNMNXVObVduYTdvenpVT3FiZzV6SnBVTU5GY1JZZlVhMGFhVWRiOGZ1V2luQ2JvbnNudzMxSHZfQ2RIdWpicg?oc=5",
      "publisherUrl": "https://surabayaonline.co",
      "source": "SurabayaOnline.co",
      "summary": "ojk catat pembiayaan pindar ke umkm naik 23 25 persen surabayaonline co",
      "id": "97e7dc23dde27113",
      "domain": "surabayaonline.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-42007722dc0f4efa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "OJK Catat Penyaluran Kredit Fintech Lending Capai Rp105 Triliun - Readers.id",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5lQ2N3TVVhMy1BajBCU3RnSjR4a0Y5NjBGanFYWU53b3kxTldRSlU3cS01S3ZfZnRKWGRnNDMtR1RBRjV0WE1JWHFxRTdVSlJVd1dRUy1TZ0hqVWFTQnZWSFBFbXZ1ZVY2M1E?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "Readers.id",
      "summary": "ojk catat penyaluran kredit fintech lending capai rp105 triliun readers id",
      "id": "6f93cbf42d1cb501",
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
      "eventId": "auto-878e5e40604834b9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "OJK Targetkan Pembiayaan Pindar Produktif 40-50 Persen, UMKM Capai Rp35,12 Triliun - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxObFd0QjNqOE55blZ2RjVFZ1Z2NGp0VkxpZzJjVFZEQTJnaGhIMWE3ay1QeUQxeDJvbUtydkdiT3NuUGRpRlppRndhNTRFenphTHJiNzFaQ0VzOHFYdGdhVjZSTTFCajVRbXVwU0NXYXhFMGRRZDBQUTctQk1jYVJBb3B4YkFKWDhfNUhOWmctdUlzU3M?oc=5",
      "publisherUrl": "https://gadget.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "ojk targetkan pembiayaan pindar produktif 40 50 persen umkm capai rp35 12 triliun qoo media",
      "id": "9cb483fe856aef15",
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
      "eventId": "auto-2b1787c5b5232341",
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
      "title": "Pembiayaan Pindar ke UMKM Melonjak 23,25%, Tembus Rp35,12 Triliun - kabarbisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOUVI4UW1kcnRKNFVkR2txZExqOURKQTZLTC1jWDhoOXQ3OHgyWTBTWWtUMGhQQThFZFllcl9rTWZDWGRfYThGRmhEVlg5U1lUQlpJTHZlTGQtdTdEYVVyQlpQSlN3aWtSR2JQOTJuLTRwekNqSHRoa3VoS19DTFhDUkdaSFd6UHZQa0UwZDFaWF9sZDIwNmk2bWN0SHpmYzJkU2JFMHE2UjM?oc=5",
      "publisherUrl": "https://www.kabarbisnis.com",
      "source": "kabarbisnis.com",
      "summary": "pembiayaan pindar ke umkm melonjak 23 25 tembus rp35 12 triliun kabarbisnis com",
      "id": "d50604b6441dfad3",
      "domain": "kabarbisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-44d87499bc00e4d3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Pembiayaan Pindar ke UMKM Tembus Rp35,12 Triliun, Tumbuh 23,25 Persen - Fobiz.id",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQTWVLZFc4Qm9aakd1NzhPS0VQNU9obXFteGR1dDBtZE8tVUNoTUxPMHp5WkRmSTJ0eGw1bUJRbExjTjN6bkp4TElxLU42d0ZmZS1EaVBXYWpTX3cyVm9Gcmw4V2RZVTVLOEJpSXlZUUlWdzRwdllWZkFXUUk1V01ZYXZIRGN1M2RNdzhUdWRwOFFBSGJYNlVDUU5saw?oc=5",
      "publisherUrl": "https://fobiz.id",
      "source": "Fobiz.id",
      "summary": "pembiayaan pindar ke umkm tembus rp35 12 triliun tumbuh 23 25 persen fobiz id",
      "id": "69287258bda00e25",
      "domain": "fobiz.id",
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
      "date": "2026-08-24",
      "title": "Penyaluran Fintech Lending Tembus Rp105,14 Triliun, Responsible Lending Jadi Sorotan - KONTAN",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPbTBIVHY5d1A4dnRMc1R6TlpCRjdUWnp3eXJTMV9Qcm40Mjl2amkzU2FmclNNckt0MEdWcFJ0QWpmajB6Z3NSeEpxTTB6cU1KM0l2ckZRME1yNUJQb255MzFvOEx2WlZqVnZtNDdnMjhvbVNXYWRnU1dDdlRjZTAxUEhJWi1ZbWVTLVpvdTItcTBaUUFrbU5fUkVxZGJYMTFVUHVpZ1BncW4xZ3BkNWx1SHZB0gGyAUFVX3lxTE9tMEhUdjl3UDh2dExzVHpOWkJGN1Raend5clMxX1BybjQyOXZqaTNTYWZyU01yS3QwR1ZwUnRBamZqMHpnc1J4SnFNMHpxTUozSXZyRlEwTXI1QlBvbnkzMW84THZaVmpWdm00N2cyOG9tU1dhZGdTV0N2VGNlMDFQSElaLVltZVMtWm91Mi1xMFpRQWttTl9SRXFkYlgxMVVQdWlnUGdxbjFncGQ1bHVIdkE?oc=5",
      "publisherUrl": "https://amp.kontan.co.id",
      "source": "KONTAN",
      "summary": "penyaluran fintech lending tembus rp105 14 triliun responsible lending jadi sorotan kontan",
      "id": "b43bd55e40ec5e95",
      "domain": "amp.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d40f3e5b730eab16",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Penyaluran Fintech Lending Tembus Rp105,14 Triliun, Responsible Lending Jadi Sorotan - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1hcEtpcExDSHAtVjR0WEhMUVRHUk5mMWtDbnRzNERORHNmWWFURnhuV3JPb3Btb21kaWdJaVJCcFNRb3NRYU9jVGNGVDJoWFVxVVo0MGNtcVFzbTZlLVFoWl9NbkxDQQ?oc=5",
      "publisherUrl": "https://id.tradingview.com",
      "source": "TradingView",
      "summary": "penyaluran fintech lending tembus rp105 14 triliun responsible lending jadi sorotan tradingview",
      "id": "e04dd096ab1fcfb2",
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
      "eventId": "auto-d40f3e5b730eab16",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-08-24",
      "title": "Penyaluran Fintek Lending Sektor Produktif Tembus Rp35 Triliun - SuaraGarut.ID",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1ZdG5XbFVHOWJlVzc3T0hKcVVmclJESEVlVmk3ZWRNS2doUEVXYnU1YW0tTWJNOEluNjhaMm9RaEs0czBoOHZtRTRLWkduYjdVRXg4VEM2cm9PM0JkaThzby1Zd1drX1hhSXRjZlpyUG9LUEJTRGxnNHg4Yw?oc=5",
      "publisherUrl": "https://suaragarut.id",
      "source": "SuaraGarut.ID",
      "summary": "penyaluran fintek lending sektor produktif tembus rp35 triliun suaragarut id",
      "id": "617c6ac85d764f05",
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
      "eventId": "auto-338e1ff4624535cd",
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
    }
  ],
  "socialItems": [
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxa2taS7nNCjWaS9BV4AaABAg",
      "date": "2026-08-10",
      "text": "Bahaya ni..trus bagikan trik ilmu bang",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 2,
      "id": "796a5db7afb14563",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-69167fcaa29077ea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz-87lq9AoFTCcSznt4AaABAg",
      "date": "2026-08-10",
      "text": "Biarlah mereka jg lg nyari nafkah loh...\nKalo berhasil nyolong duit ato apa itu jg rejeki atas ijin Allah. Dan korbannya itu sedang di uji Allah. Smua terjadi berjalan atas ijin Allah swt. Nanti di akhirat sibkorban pnya tabungan dan pelaku akan diminta prtanggunggjwban. Kalo kita berharap selalu aman nyaman di dunia itu seperti menolak menabung investasi akherat. Yang penting usahakan matimu beriman dan tauhid tidak mnyembah uang kkuasaan suami istri orgtua anak atasan atau jokowi prabowo dan lainnya. Anggapa aja para mafia hacker n maling itu sedang mmbantu melancarkn jalan kita saat melewati shirothol mustaqim nanti...",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 5,
      "id": "06001b57328cfffb",
      "sentiment": {
        "risk": 49.3,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 1.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c3c526dd376c6bb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx-7Q9IHTyjPR8TRqh4AaABAg",
      "date": "2026-08-10",
      "text": "Bisa di jawab nggak klo apk\nBRI,shopee,bibit,Telkomsel,Smartfren,gojek dll itu kan butuh itu...\nKlo nggak pakai itu tidak bisa di gunakan 😅😅😅",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 3,
      "id": "ac2273c21f928299",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8e42b7c2634cc7c9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwlUsxS2rRM0MTInLZ4AaABAg",
      "date": "2026-08-10",
      "text": "Coba bisnis ojek online",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 1,
      "id": "02963df5f074678f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a03b7a7c27f3f6df",
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
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "b8249fcc44664eff",
      "eventId": "auto-083abb648490c04f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwObLP2ZnPuSND43Vt4AaABAg",
      "date": "2026-08-10",
      "text": "Gmn caranya kl ada cek wajah di pinjol , kn dak bisa atau ada caranya yg dlkukan hacker",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 0,
      "id": "5d7afc9538aea660",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-79c6c7a96b17d0ae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "tzwssXzIhMs",
      "date": "2026-08-10",
      "text": "HP LO DISADAP? Terbongkar Cara Hacker Pinjol Curi KTP &amp; Wajah Tanpa Ketahuan! #logikarupiah",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 17890,
      "id": "7d790cc0c54a3bd9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a4115bbada8082b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyreS32otk0sIKGKql4AaABAg",
      "date": "2026-08-10",
      "text": "Harus di laporkan seperti itu",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 6,
      "id": "bb73945804565262",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3e38efaa529a6076",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy2sTAix1noCobcLeJ4AaABAg",
      "date": "2026-08-10",
      "text": "Ini buat iOS ga jalan kan ?",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 2,
      "id": "774399671332ba9b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-64326b8433a2ad88",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy954QNt0nf3HeyFzR4AaABAg",
      "date": "2026-08-10",
      "text": "KLU DRAMA KOREA  JG GITU LAH , SOALNYA SY PENASARAN FILMNYA  JD SY DONLUAD ,",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 0,
      "id": "e5d79940040f1a95",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1231f5369ce28dc6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy-olL4WnLJ3TBHy5Z4AaABAg",
      "date": "2026-08-10",
      "text": "Kalo sudah terlanjur, gimana Bang cara memperbaikinya??",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 5,
      "id": "be99fdc0094228ce",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b46441f72ef93905",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxVlt5gUBd1MnAnuih4AaABAg",
      "date": "2026-08-10",
      "text": "Mengerikan, ...",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 1,
      "id": "3420ba79dc23f6c2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fb0ad40978bcdc88",
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
      "externalId": "UgxjvNAFtHB35EJhjNh4AaABAg",
      "date": "2026-08-10",
      "text": "Nah itu yg bikin curiga min..masak minta akses yg sifatnya pribadi..yg paling menonjol tuh minta ijin kontak yg disimpan di hp..",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 3,
      "id": "113c5f5230dfbfc7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3865e0288cf70598",
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
        "modelConfidence": 0.7,
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
      "externalId": "UgzF2Vb1akd6WAZhAN14AaABAg",
      "date": "2026-08-10",
      "text": "Pinjol yang meminjamkan tanpa orang asli harus diburu untuk dibasmi , negara tidak boleh ciut nyalinya dan malas memburu pinjol seperti ini",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 7,
      "id": "b18d2560c4ebdf9d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6a6cbe4eba11a6c1",
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
      "externalId": "UgyJeNNRiKIYYIEwfLd4AaABAg",
      "date": "2026-08-10",
      "text": "Ya ya ya tau tau",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 0,
      "id": "a1c99494024dab84",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-887998dd2ff9dedd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwJ0snDTPbSY_bHjA94AaABAg",
      "date": "2026-08-10",
      "text": "Yaa ampun segitu belanya....masalah pinjol kan menyangkut dapur orang...koq tau ?..",
      "url": "https://www.youtube.com/watch?v=2A0zixs1Mz0",
      "engagement": 4,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "f70a8e9816707820",
      "eventId": "auto-719b42cb1cd4a413",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDbngRrx-IcejD-XN4AaABAg",
      "date": "2026-08-10",
      "text": "dri video ini adakah solusi untuk mencegahnya min",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 2,
      "id": "2b6a2ab20adbe8cb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cdff674c4b2e170e",
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
        "modelConfidence": 0.7,
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
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "8ee1f7e54a56866f",
      "eventId": "auto-e8484b426181b105",
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
      "engagement": 31933,
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
      "externalId": "UgyrEo3WJvTVYUOQ8RF4AaABAg",
      "date": "2026-08-11",
      "text": "Ga usah klik .apk aja hp sdh bs dihack, diintip/dikontrol dr jarak jauh, mau pakai aplikasi bawaan hp file manager aja hrs ijinkan galery, kamera, dll lengkap kl ga ga BS gunain aplikasi, smua aplikasi mharuskan kita mberi ijin spy aplikasi itu bs kita pakai, kl TDK diberi ijin, kita TDK BS mgunakan aplikasi itu...jd itu pemaksaan utk diberi ijin...",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 0,
      "id": "4a5740310d91de99",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8968ece5b2bff23c",
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
      "externalId": "Ugwt_8awV2LkV-1lgy94AaABAg",
      "date": "2026-08-11",
      "text": "Hebat Iis Dahlia",
      "url": "https://www.youtube.com/watch?v=iZDE6pJbcso",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "8b71cb1e8c53095f",
      "eventId": "auto-125e074769557a67",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxRhQlAyJt6AIYBhIp4AaABAg",
      "date": "2026-08-11",
      "text": "Mestinya ranah negara soal keamanan",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 4,
      "id": "d5d645399382d99f",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-600b6a419672fa46",
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
      "engagement": 40313,
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
      "externalId": "Ugx41Sy46_D1sRa4i0V4AaABAg",
      "date": "2026-08-11",
      "text": "Waduh aku udah kena barusan, sampai batere aku harus ganti, keluar duit 300an, itu baru harus beli batere baru, BGST!!!!",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 0,
      "id": "ae9b276440749c18",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ae43a9d3980697c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx0yTJJ0izDSyLs9nJ4AaABAg",
      "date": "2026-08-11",
      "text": "hayo gimana main wa tanpa akses kontak, penyimpanan",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 2,
      "id": "c328172772cbcf32",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d57768265bcb36c",
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
      "externalId": "UgwXhUgD7z7lvKlVBAd4AaABAg",
      "date": "2026-08-12",
      "text": "Kalian jangan pernah pinjol apa lagi buat pamer kekayan karna itu sangat merugikan sangan berbahaya",
      "url": "https://www.youtube.com/watch?v=BH4amIxOfiI",
      "engagement": 6,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 50.0
      },
      "id": "9e89bf603437d1ad",
      "eventId": "auto-76d416cbfc2c1c93",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxT2metRLjQBLbUc-B4AaABAg",
      "date": "2026-08-12",
      "text": "Keren materinya.... Terimakasih atas informasinya.... Semoga bermanfaat.... Sungguh keterlaluan bagi mereka yang menyalahgunakan data pribadi orang lain",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 2,
      "id": "e37b69dc197f0c30",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48ff8270ebc1253d",
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
      "externalId": "UgxJ5nf_7wo85-bu2mN4AaABAg",
      "date": "2026-08-12",
      "text": "Makasih min informasi nya",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 1,
      "id": "28677bdaec3419f7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-86e4e382b953f62e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyPt9puDMewzb6mssZ4AaABAg",
      "date": "2026-08-12",
      "text": "Mantap Polres Ciamis",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 2,
      "id": "db51188dc009f156",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-238c24cdb3ea0453",
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
      "externalId": "Ugy_5EtUlHIAxa3ZtZd4AaABAg",
      "date": "2026-08-12",
      "text": "Pemerintah harus melindungi nama baik korban",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 0,
      "id": "03e3dc567ede07de",
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 1.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5d4864ca5524f8d6",
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
        "modelConfidence": 0.95,
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
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "356241b0f16e4471",
      "eventId": "auto-63825f8a8d9f8611",
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
        "modelConfidence": 0.7,
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
        "modelConfidence": 0.9,
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
        "modelConfidence": 0.95,
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
      "engagement": 4,
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
      "externalId": "Ugy3d2DPzd4sUFH_xo14AaABAg",
      "date": "2026-08-13",
      "text": "Blm jatuh tempu nagihnya kaya kaga bayar pas lunas ditlp kaga habis habisnya\nApk udah di hapus udah kaga minat tlp terus \nKita niat bayar kata katanya nyakikan tutup. Aja pinjol yg salah gunakan data",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 50.0
      },
      "id": "d95a51cf6b47f58a",
      "eventId": "auto-48fa002c0e69e1b4",
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
        "modelConfidence": 0.95,
        "lexiconRisk": 50.0
      },
      "id": "244a0f7ddf0e59c6",
      "eventId": "auto-7a176298103fa09a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "2vgIVemSKjU",
      "date": "2026-08-13",
      "text": "Cara Pinjam Uang di DANA | Pinjol Mudah Cair 2026 ke DANA",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 26729,
      "id": "b08fb83b80161051",
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
        "modelConfidence": 0.8,
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
        "modelConfidence": 0.9,
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
      "externalId": "UgyYYky9Zjr1VWPJjn94AaABAg",
      "date": "2026-08-13",
      "text": "Hadir bang,butuh dana buat seragam sekolah anak",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "11bb38dcf55a9d99",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f1d2488f603a34c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwyJu7TQMYCDJjCFvN4AaABAg",
      "date": "2026-08-13",
      "text": "Hadir selalu abg ku❤❤",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 1,
      "id": "486bf0e242879f9e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5c8982af4f40a12a",
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
      "externalId": "UgzEnodvlXTEStiRyI94AaABAg",
      "date": "2026-08-13",
      "text": "Ia sya jga pernah tuh,nama d catut tuk shopee pay sma pinjol",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "c8e6332975fcffa0",
      "eventId": "auto-769e0cdb680ce9cd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxY0URLedIblrxpLRp4AaABAg",
      "date": "2026-08-13",
      "text": "Iya gak di bahas karna yang pinjem di pinjol bukan Ruben mengelak dia",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 5,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "a1364ce1f9ed349a",
      "eventId": "auto-9540c2e2b0c43cd4",
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
      "externalId": "Ugzbw7y2dYe3x_J4oad4AaABAg",
      "date": "2026-08-13",
      "text": "Lanjutt Proseess",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
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
        "modelConfidence": 0.9,
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
        "modelConfidence": 0.9,
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
      "externalId": "UgxTt2UVlty_pZ8-REp4AaABAg",
      "date": "2026-08-13",
      "text": "Maju Trus mbak ka. I dukung..... Tetap semagat\n..... Laporkan ke OJK dan suruh tutup ijin usahanya krn memanipulasi data.... Penipuan dan kekerasan",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 67.5
      },
      "id": "e72526f5fa6305c4",
      "eventId": "auto-c06af112fd55df38",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNmMwJo5MKXgeYeDR4AaABAg",
      "date": "2026-08-13",
      "text": "Mantaaabbbbb\n... lanjutkan kakaaak",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "e8b367b2dbef8116",
      "eventId": "auto-f84a3cfe9f884e69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9Ex2GIY2WL8J4J3J4AaABAg",
      "date": "2026-08-13",
      "text": "Mantap SEMOGGA bermanfaat min",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 1,
      "id": "02f8b778b8eb6ffa",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d0d36d0e3cbcbbe3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwAn0IWOSAyfbAkwMV4AaABAg",
      "date": "2026-08-13",
      "text": "Memang Ruben tidak pernah pinjol kali Pak. Kalau seandainya sudah dilunasi tapi data para peminjam kan pasti tetap ada. Tidak mungkin nama\" orang yg pinjol langsung dihapus begitu sudah lunas.",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 13,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "6d2ea77b0a933947",
      "eventId": "auto-a67685020626af30",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwOkl6avVQlchFZtwp4AaABAg",
      "date": "2026-08-13",
      "text": "Menyala kakak",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "a439693d89fe1087",
      "eventId": "auto-772c7d959f4bd0b9",
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
        "modelConfidence": 0.9,
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
        "modelConfidence": 0.95,
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
      "externalId": "Ugys4-fk3P1rOLWKN6d4AaABAg",
      "date": "2026-08-13",
      "text": "Pinjol itu adalah Rentenir online, yg maksimal pinjam nya hny 5 juta, dengan lansung di potong 10%,\nSistem nya, bunga nya harian,dlm 3 hari tidak ada pembayaran dari si peminjam, Depkoleptor akan mendatangi si peminjam dengan kata² kasar, dn.menyita barang² di peminjam.\nJadi dlm hal Ruben pinjol itu tidak mungkin,..yg mungkin nya, SW  menarik uang dari Bank menggunakan CreditCard Ruben,Bank tahu kalu yg menarik uang atas nm CreditCard Ruben..adalah SW,hny Bank tahu klu SW ngak.punya duit untuk mengembalikan, hingga SW ber skenario terus menekan menuduh Ruben, SW berharap Ruben akan membayarnya dengan cara nya sprti itu,",
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
      "id": "f5731f2ef5233823",
      "eventId": "auto-4e28cd65ff67d80c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwA-z5MUz4-GhClOIN4AaABAg",
      "date": "2026-08-13",
      "text": "Rekam lain x mba . VIRALKAN.. ini berbahaya bisa nipu orang itu..",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "32335d770a136d35",
      "eventId": "auto-91d20a1a716a6aeb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4ht_23D2TqiyCFSd4AaABAg",
      "date": "2026-08-13",
      "text": "Sehat slalu bank ku..m",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "cdb071a13e17700d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6b308d0111924051",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw5HqC9VV564q5Beoh4AaABAg",
      "date": "2026-08-13",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 110,
      "id": "7edfed62ba2616fd",
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
      "externalId": "Ugxa_TPXrwllLZNBvNB4AaABAg",
      "date": "2026-08-13",
      "text": "Semangat turus buat kontennya min moga² apa yang Mimin semogakan akan tersemogakan🤲",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "ea26056c2361ebd3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b7d2cb23d417c9f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyfS_L7Hzoxg_wQB254AaABAg",
      "date": "2026-08-13",
      "text": "Sm nik saya jg di salahgunakan orang dr 2012 ada yg bikin CC pake nik saya tp bukan nama saya nama di CC nya , alamatnya jg bukan alamat rmh saya, saya udah ke OJK dan ke bank terkait 😢",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 50.0
      },
      "id": "65f91f9997188c58",
      "eventId": "auto-2005a2e2db252c43",
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
        "modelConfidence": 0.9,
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
      "externalId": "Ugw-I0vtFtxlJJWUqrx4AaABAg",
      "date": "2026-08-13",
      "text": "Tutorial nya bagus bang🙏",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "b17442c3c2effb91",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-38b7b8f6c34a5956",
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
        "modelConfidence": 0.9,
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
      "externalId": "UgzREj_SzChOdG4evod4AaABAg",
      "date": "2026-08-13",
      "text": "Walaupun SDH di bayar data tetap ada tgl , th bisa di cek dong pak jg jawab bisa buka opini cari buktikan",
      "url": "https://www.youtube.com/watch?v=uTvsS3nEhmo",
      "engagement": 18,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "0878d05b6522835d",
      "eventId": "auto-2dd5280bcde10fb1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyBNPylWzAkT6S2j294AaABAg",
      "date": "2026-08-13",
      "text": "hmmm gk bs dibubarin lg itu pinjol, gimana ya? gk ada solusi.",
      "url": "https://www.youtube.com/watch?v=HjJrXo1Xxvg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "ec9fe5eb8dbeeb4c",
      "eventId": "auto-7df10194a3fdc49e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz-G62EMMt_6UV45Bx4AaABAg",
      "date": "2026-08-13",
      "text": "kalo seperti ini hampir semua warga negara di negara ini berada di \"tepi jurang \" tindakan tak bertanggung dong bang ?\nlalu bagaimana solusinya .\nkarna tidak semua wrga negara di negara ini \"melek\" teknologi .",
      "url": "https://www.youtube.com/watch?v=tzwssXzIhMs",
      "engagement": 0,
      "id": "a193cc5dac061a91",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f38adfe9c01d9c10",
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
        "modelConfidence": 0.7,
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
        "modelConfidence": 0.9,
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
      "externalId": "UgzQWIGFdyvb-0BOWxN4AaABAg",
      "date": "2026-08-14",
      "text": "Bukti tagihannya doooong, sama atas nama siapa, di cctv tempat gua juga banyak bang bukti kayak gitu 🤣 banyak DC bergerombol, siang di mushola, habis itu keliling² sampe sore 🤣",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 17,
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
      "engagement": 25,
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
      "externalId": "UgwLSBODB6u8V3UPHkl4AaABAg",
      "date": "2026-08-14",
      "text": "Butuh buat modal usah bng",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "4d2be9af2857f856",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9506329b526e38b1",
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
      "externalId": "UgzdJM2wew9i5UU4zrN4AaABAg",
      "date": "2026-08-14",
      "text": "Maksih infonya bang",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "a59813611c8cbfab",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eafda81d3ea0b4bd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzYnc-Wz13lXKWLlAx4AaABAg",
      "date": "2026-08-14",
      "text": "Mantap mkasi infooo👍👍👍👍👍",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "f542cc3a93421a96",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1b87325b814c0f44",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytQ-hjwZZxHebrfMV4AaABAg",
      "date": "2026-08-14",
      "text": "Mau bang. Buat bayar perbaikan motor di bengkel🙏🏻🙏🏻🙏🏻",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "3ee91b18000485ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cc10d841fbf5b72d",
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
      "engagement": 70,
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
      "externalId": "UgwHwj8c91mLnMMibE14AaABAg",
      "date": "2026-08-14",
      "text": "Terimakasih min semoga bermanfaat tutornya sukses terus kontennya",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "8b661f4f27415623",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-59ba7bc82ee1c787",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwsn9JhXuwDBIl70114AaABAg",
      "date": "2026-08-14",
      "text": "buat kebutuhan anak sekolah bos",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "a6146cc9f7163750",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3cd91437d6078d8f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw0DdwCrAH5CR02atR4AaABAg",
      "date": "2026-08-14",
      "text": "lagi butuh bang do rantau blum dapat kerjaan",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "61c15582f84f2530",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-731b19d24e82a850",
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
      "contentType": "video",
      "externalId": "3HAR6VA_4uM",
      "date": "2026-08-15",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 28655,
      "id": "0ddb4c1af8652464",
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
      "externalId": "Ugw5xkIPXqVuItOh6sJ4AaABAg",
      "date": "2026-08-15",
      "text": "Bro cwok kalo mau dapet cwek harus bener-bener bahagia in dia, bikin dia seneng, dan kalo bikin dia seneng Uda pasti butuh duit, terus lu bahagia in dia dengan duit-duit lu terus alias lu manjain dia terus, ketika lu ga bisa beliin apapun yg bisa bikin dia bahagia dia pasti bakal kaya ngambek, dan lu bahagia in dia terpaksa dengan pinjol, lama kelamaan lu bakal ngerasain perasaan dia yg sebenarnya, dia ini bener-bener sayang, atau malah cuman mau manfaatin? Ketika dia sudah kelakuan selingkuh, lu pasti ga bakal terima Karena sudah banyak duit yg lu keluarin buat dia, lalu lu putus, kalo lu sebagai laki-laki mau punya cwek lagi, ya lu harus seperti itu lagi, mengeluarkan banyak uang, dan beri dia kasih sayang, intinya cwok kalo bener-bener mau punya pasangan itu harus mampu, tapi kalo lu ganteng mungkin lu bisa di deketin, tapi kalo lu jelek(maaf bukan menyinggung) lu pasti mustahil buat deketin cwek mungkin kalo lu punya banyak duit masih bisa, \n\n kalo cwek mau punya cwok baru dia pasti bisa memanfaatkan kecantikan dia, walaupun pasti ada juga cwek yg ga sempurna alias rata-rata lah, tapi sama juga kalo punya duit pasti bisa, apalagi cwek lebih banyak yg cantik daripada cwok yg ganteng, intinya lagi tuh, sebenernya sama-sama, tapi cwek kaya lebih gampang mencari pasangan baru daripada cwok \n\nDan mungkin kalo untuk move on cwek awal-awal bakal susah, tapi kalo berbulan-bulan kemudian pasti bisa\n\nSedangkan cwok bisa juga kebalikannya, awal-awal ada yg bodoamat tapi akhirnya jadi kangen, ada yg awal-awal ga bisa lupain,  tapi akhir-akhir nya bisa melupakan nya.",
      "url": "https://www.youtube.com/watch?v=aFWlF4QoNCo",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "cf498a47ad965926",
      "eventId": "auto-f9a58772faaf3e27",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxy2-jDEau_epFuYs54AaABAg",
      "date": "2026-08-15",
      "text": "Buat beli beras bang lagi mondok soalnya hehe",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "cacbe7d5621b703c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b91df861f4cb8e37",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwes8tDF1IT7XLdU0h4AaABAg",
      "date": "2026-08-15",
      "text": "Coba KLO bener mana",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 2,
      "id": "96b8467ca50cc11c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-66181c8613ee9395",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxu1pmgr1ODjd-Q3tB4AaABAg",
      "date": "2026-08-15",
      "text": "Gimana caranya pinjam uang",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "37855bfb70b8c1ca",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c35f72c0d5085942",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCIC5huILnenTLbGB4AaABAg",
      "date": "2026-08-15",
      "text": "Gimana download nya",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "eabaf5b8b9ec715d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9af4b97eac1c8fe9",
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
      "engagement": 17,
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
      "externalId": "UgyrngnxyLF1g2Uk-at4AaABAg",
      "date": "2026-08-15",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 98,
      "id": "d50cc4f457aa7784",
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
      "externalId": "UgyJRh2nsSBSYiChCrR4AaABAg",
      "date": "2026-08-15",
      "text": "bismilah dapet, buat ongkos merantau ke cikarang🙏",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "6a1db94464764b98",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ba7bf3536a4375ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzi72bcEgRVmEkkkux4AaABAg",
      "date": "2026-08-15",
      "text": "makaih min video tutor nya😊😊",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "60eb7de4965d1626",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8db4faf7e98032e6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzoF9EeFes04RPYDlp4AaABAg",
      "date": "2026-08-15",
      "text": "mau bang buat tambah biaya berobat",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "7c355bfc41b223f2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f9a3c095a4e6f391",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwmDFqZskTiLLeHlAd4AaABAg",
      "date": "2026-08-15",
      "text": "selamat sore",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "a49bc70430bd8c0d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c708200e1d1ce75",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy_FRZSK9FFNMFumTN4AaABAg",
      "date": "2026-08-15",
      "text": "smngaat kakkuu kalauu mujurr,akuu buat sekolahhh😇",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "061634d3ba8d544c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-115e6291b1ec6fb9",
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
      "contentType": "comment",
      "externalId": "UgwtAnNE_4EHrZduHr14AaABAg",
      "date": "2026-08-16",
      "text": "Bang boleh minta dana kagetnya? Buat beli beras sama pempers bang\nSoalnya saya lg nganggur udh hampir 1 bulan bang😢",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "09fb68ce330879d4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3fb3046d566b3ed1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyyBaWzWTBboVC-73F4AaABAg",
      "date": "2026-08-16",
      "text": "Bang link aplikasi nya saya udh liat di play store GK ada",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "1ab2ee54e478d720",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e206a19ee4a7b14b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzX6SkRxmRD4maBJ6t4AaABAg",
      "date": "2026-08-16",
      "text": "Bang saya butuh duit dana buat ongkos pulang dari Bengkulu ke bandar lampung",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "a718c5750d4b9618",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-60a30cc9d4450899",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxfgaiOa0qpGZq5ARh4AaABAg",
      "date": "2026-08-16",
      "text": "Bang saya telat ikut dana kaget xa bisa kah bang",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "b31cf8c39ff0c672",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-af26b535dc8b4d7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxctQU92Vpe-JhvHA94AaABAg",
      "date": "2026-08-16",
      "text": "Bang...saya butuh banget buat anak sekolah bang s",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "5c2492df46c46117",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-395a3e335b1364b1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwmK3wfhEcZ__yyoqV4AaABAg",
      "date": "2026-08-16",
      "text": "Begitu Densu tanya : siapa yg pinjol? Langsung SW tertegun...😅😅",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 5,
      "id": "d32fd572e72bb230",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6e9d49f936a2ef47",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzGE93SpVEeO68HepF4AaABAg",
      "date": "2026-08-16",
      "text": "Bismillah,, mau bg buat dana darurat",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "b430bc19ba59ce53",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-962ed5e8f56a25b6",
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
      "engagement": 49583,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "b60bdf592ffa53bf",
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
      "externalId": "UgyARUihNMMH6T-2vAZ4AaABAg",
      "date": "2026-08-16",
      "text": "Hadir bang anak mau daftar sekolah tapi belom ada dana kak",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "1d24908305ab80f1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-545e6797edc0265f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgywQ81KMtGPQKd9RMB4AaABAg",
      "date": "2026-08-16",
      "text": "Halo kak",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "5f54cc891e675403",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e6846b7062db72bc",
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
      "externalId": "UgwYB1lHFQvswbwFDBp4AaABAg",
      "date": "2026-08-16",
      "text": "Masalah intinya hak asuh anak,kenapa ke pinjol pinjol segala si.",
      "url": "https://www.youtube.com/watch?v=HX-ZcqfG5M4",
      "engagement": 2,
      "id": "839d547339f96856",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8325f41078407a6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBxWqWL_LcAbUk_5p4AaABAg",
      "date": "2026-08-16",
      "text": "Mw bosku LG butuh banget nh",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "3bcf962d5b5b55a3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8193bea373e808c0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyD8-LRvZVRNkBxJbB4AaABAg",
      "date": "2026-08-16",
      "text": "Orng ini licik dan kejam.. tangkap hukum berat ..masker buka pak biar tahu muka nya",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 2,
      "id": "d32c8c6048e94595",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8379553b5e3a3366",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxuUn_GLgPVnoaVOFt4AaABAg",
      "date": "2026-08-16",
      "text": "Semoga rejeki ny bang ...suksek terus bang",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "a8165c5683b0d831",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bbcbe2b63ac596b0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy0IENB81dCeYYwVux4AaABAg",
      "date": "2026-08-16",
      "text": "Semoga video nya beruntung abang'Qu",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "687b3d5ad49a742a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8aa12799fcf012aa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6DEicezZTu8mpK6B4AaABAg",
      "date": "2026-08-16",
      "text": "Sukses bang",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "7f250aa6c68dce8c",
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
      "externalId": "UgyIJpw6b8i_YjsuAdt4AaABAg",
      "date": "2026-08-16",
      "text": "Sukses lah buat Abang nya , semoga diangkat kesusahan kita semua nya aminn",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "03445a16bfcb2a53",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ee50b486de79be53",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLrnywNGlnO4be4p14AaABAg",
      "date": "2026-08-16",
      "text": "Sukses selalu bang,🎉",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "3209170ef16461b2",
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
      "externalId": "Ugz4gVQ5Bsj4OJzx49N4AaABAg",
      "date": "2026-08-16",
      "text": "ka saya butu uang 500 semga di bantu ituk kebutuhan",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "dad3d2dab8f723c0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1dd2b65f54c5cb7a",
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
      "externalId": "UgxR12kjdGKRod9c2xN4AaABAg",
      "date": "2026-08-16",
      "text": "semoga sukses selalu bang",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "c64f31353851e7f1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-412394dcf49918c0",
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
      "contentType": "video",
      "externalId": "7b7ETun8QG8",
      "date": "2026-08-17",
      "text": "3 Aplikasi Pinjaman Online Langsung Cair 2026 - Pinjol Mudah Cair Ke Dana TANPA BI CHECKING",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 34134,
      "id": "0156e9967404bdd2",
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
      "externalId": "Ugw-y4VvbiRaaD-guQR4AaABAg",
      "date": "2026-08-17",
      "text": "Bissmillah berkah barokah bang semoga terus berkembang  chenell nya..",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "4115514b8518493a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fb881e2a27b11a1c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxlYa8l2gPFJceKgiZ4AaABAg",
      "date": "2026-08-17",
      "text": "Buat renovasi masjid di desa teluk batu kak soalnya lagi kekurangan dana buat beli semen sama keramik nya",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "23ea986f05322136",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-08d1b6adfae8610a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjEvCDGVMy1wNF4lp4AaABAg",
      "date": "2026-08-17",
      "text": "Hadir bang sukses terus ya bang",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "d1205c1381313fec",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1c8b97f799b45a4c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzkNTHjp2a0h4-QPy14AaABAg",
      "date": "2026-08-17",
      "text": "Hadir bang.. butuh dana buat bapak",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "0d3dd58f2c5e2c90",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-79ea404e879d4e79",
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
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "5daebacaabb91d41",
      "eventId": "auto-abf333f5591a5633",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQWjBzcsCcy1zs44p4AaABAg",
      "date": "2026-08-17",
      "text": "Mantap auto coba nih",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "1550881c85a219fe",
      "eventId": "auto-ca0497f661860278",
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
      "externalId": "UgzbEnh6EKxxc_t-V1l4AaABAg",
      "date": "2026-08-17",
      "text": "Rupiah cepat, Julo, indo dana itu semua kolektor nya ga sekolah",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 92,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "cfe69ddc2e632323",
      "eventId": "auto-ed8264c53d0574b5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCqKv0oI0O2A_c3MF4AaABAg",
      "date": "2026-08-17",
      "text": "Selamat buat nama pemenang di video!🥳\r\nMau Saldo Dana Kaget juga?\r\nTonton dulu minimal 5 menit,  koment mau dana gratis buat kebutuhan darurat apa 👇",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 149,
      "id": "fe4929d64768221d",
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
      "contentType": "video",
      "externalId": "zLRj1E4T7Fg",
      "date": "2026-08-17",
      "text": "Teror Pinjol, Efek Domino Jerat Utang",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 61910,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
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
      "engagement": 90,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
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
      "externalId": "UgyHabZzyX6PbSmsxkl4AaABAg",
      "date": "2026-08-17",
      "text": "butuh buat modal usaha dong kak",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "962d7c8dd0491c51",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-79b2c1715a4085a3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwK_pvkW9DSZJrTPu94AaABAg",
      "date": "2026-08-17",
      "text": "hadir slalu bang,, kasih sya atuh bang dana kaget nya     ,, lgi butuh nih",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "0ed4ae14ae6442ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2144dd974e1802a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwoJUsKgVragzmiXrN4AaABAg",
      "date": "2026-08-17",
      "text": "miris tapi itulah kenyataan",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 19,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "7f72c6d26f0acc07",
      "eventId": "auto-220fffae29d81cb5",
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
        "modelConfidence": 0.6,
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
      "externalId": "Ugw3n9nEOzFCRnClCHF4AaABAg",
      "date": "2026-08-18",
      "text": "Bagaimana caranya",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "fc5b2ef01a2529e1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0ea7a1a75cc786c2",
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
      "externalId": "Ugzl6ZMahji5E_X2BrB4AaABAg",
      "date": "2026-08-18",
      "text": "Buat beli bensin motornya bg",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "e5db3bd5608da740",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53a4a8191e81cfeb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxrfxpL-nz5j8aeFV94AaABAg",
      "date": "2026-08-18",
      "text": "Buat kebutuhan bulanan kk",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "644cbc8a31dd5204",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1a40bff96e5e67da",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzogumknGasFTqisBV4AaABAg",
      "date": "2026-08-18",
      "text": "Buat kebutuhan min tolong",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "61e7c934f936fbbd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5e2de92d7b405156",
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
      "externalId": "Ugzb-zblsrsMcx7qVfd4AaABAg",
      "date": "2026-08-18",
      "text": "Pemerintah harus lihat ini... semoga pinjol legal ilegal ditutup",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 64,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
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
      "externalId": "Ugwo7pcHVuX5hbGoWXh4AaABAg",
      "date": "2026-08-18",
      "text": "Tapi saya tidak muncul fitur dana pinjaman ka gimna ya",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "8ad9c581d7da9025",
      "eventId": "auto-5f396bc4110ebbed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz3P01ODLrj5dw-hqN4AaABAg",
      "date": "2026-08-18",
      "text": "buat bayar kontrakan bang amain",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "a4c29e8a009a82c9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6af6f4db88159989",
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
        "modelConfidence": 0.95,
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
      "externalId": "UgxFbgQ9eyAu6jLwx2R4AaABAg",
      "date": "2026-08-18",
      "text": "untuk bayar kontrakan bang",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "a513f0849c6752dd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c0e22a811320cd08",
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
      "engagement": 282,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
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
      "externalId": "UgyYDM94b5_x6_zrKE14AaABAg",
      "date": "2026-08-19",
      "text": "Amin bng smga mkin bnyak rejekinya",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "e2b9d398701526b5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9955ac70da5ad0e7",
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
      "externalId": "UgxZjDxhGE0P2wXHUB54AaABAg",
      "date": "2026-08-19",
      "text": "Bismillah berkah bang",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "a9c72f52a4ea4745",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4f6b5d896d55f4fb",
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
      "id": "2f984819ce4044dc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-355de180923cad45",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGhezPmDlW83G5xQN4AaABAg",
      "date": "2026-08-19",
      "text": "Bismillah semogaa sehat selalu bang❤",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "4a6d12e292a4b042",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7bcc311b569595d1",
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
      "engagement": 42131,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
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
      "externalId": "UgwFl4tZuNz08EFUZw94AaABAg",
      "date": "2026-08-19",
      "text": "Engga bs malah engga munvul diketik pinjeman dana tanpa ktp",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "a985ea8c68679e23",
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
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "390097d82ca990b7",
      "eventId": "auto-ac6c7ec3ccecbae9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyS4mu0ts-onkDX8MV4AaABAg",
      "date": "2026-08-19",
      "text": "Hadir Banten",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "8e0e0a9883889854",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3b1ed2066bd1de93",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzldg-_IdmPe099i1B4AaABAg",
      "date": "2026-08-19",
      "text": "Hadir bang lagi butuh banget ini",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "e308dda6621f7d44",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f0c169ea100b3770",
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
      "externalId": "UgyLMwLgwrBgEUe5JD94AaABAg",
      "date": "2026-08-19",
      "text": "Hadir menyapa bang",
      "url": "https://www.youtube.com/watch?v=3HAR6VA_4uM",
      "engagement": 0,
      "id": "f9dcb9f204dd0683",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-52cd933a6ed77fa7",
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
      "id": "7c7ddeca8c33247a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
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
      "engagement": 32,
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
      "externalId": "Ugwn-MWiE-DDJ9o2Y_p4AaABAg",
      "date": "2026-08-19",
      "text": "Ko pas di ketik fitur pinjaman dana tanpa ktp ga keluar kaya yg di video dh bang",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "178375179725b20a",
      "eventId": "auto-fd2505ba219cf994",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxFzBUYAMk7SmGUfmV4AaABAg",
      "date": "2026-08-19",
      "text": "Mau buat berobat istri sakit udah 5thn belum sembuh2 bang",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "2b6004aee134654b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b27d4370d4fd30af",
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
      "engagement": 35,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
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
      "externalId": "UgzsgHKqw9PxPCfcAvt4AaABAg",
      "date": "2026-08-19",
      "text": "Ngeri banget",
      "url": "https://www.youtube.com/watch?v=qclCy9ypWa4",
      "engagement": 0,
      "id": "540539219df4b531",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fca0ef925ae9471e",
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
      "externalId": "UgysOGAT6b8CGhJoG9B4AaABAg",
      "date": "2026-08-19",
      "text": "Saya tidak ada fitur pinjaman tanpa KTP gimana",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "cd55cf5f1072dbc8",
      "eventId": "auto-41f94b3c22bc85d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgynCbfhZH8IX5PPAzd4AaABAg",
      "date": "2026-08-19",
      "text": "Sehat selalu orang baik, karena dengan berbagi tidak akan menjadi miskin",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 3,
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
      "contentType": "video",
      "externalId": "zLjItjeenlI",
      "date": "2026-08-19",
      "text": "TANPA BI CECKING! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 18610,
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
      "contentType": "comment",
      "externalId": "UgxvHlXbC_f93IKUgL14AaABAg",
      "date": "2026-08-19",
      "text": "Terima kasih wawasannya",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 2,
      "id": "418e3153f8e70f0f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1177ae9307d004b2",
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
      "engagement": 16343,
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
      "externalId": "Ugw8xx7UlgqxLIcLbi14AaABAg",
      "date": "2026-08-19",
      "text": "Top markotop🎉🎉🎉",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "b1f6004e9853bde8",
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
      "externalId": "UgygjASTRaQ4YfztmtN4AaABAg",
      "date": "2026-08-19",
      "text": "gara2 hutang receh kredit score langsung ancur di bokir sana sini karna bi cheking tp coba kita renungkan klo aja pejabat nakal di buatkan sistem begini pasti hebat bgt indonesiaku",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 64.0
      },
      "id": "a283e68cd490899d",
      "eventId": "auto-b2bee7459cc5fb4e",
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
      "externalId": "UgxGcBJkkAy2s_8ohTh4AaABAg",
      "date": "2026-08-19",
      "text": "mau bg, buat byr listrik sama air",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "91c953a8649a3c14",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ecba762c69aa7316",
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
      "contentType": "comment",
      "externalId": "UgzhyGY3_xw8LTpiSt54AaABAg",
      "date": "2026-08-19",
      "text": "pas mau di alihkan fitur pinjaman tanpa KTP malah ngk bisa masuk",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "8e2edb4ceca95531",
      "eventId": "auto-99bd969f7a49a48a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzAEWerTlANDle7QON4AaABAg",
      "date": "2026-08-19",
      "text": "semoga dapat buat benerin motor bang",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "fe37270e86682477",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b3f7f4dfdd93b6df",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz2uotyKoedzs3pHo14AaABAg",
      "date": "2026-08-19",
      "text": "siap bang 😅",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "cf6bbd89a1e295a3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a75507a1f2fc7bce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxiZez7kFXB7w3akt54AaABAg",
      "date": "2026-08-19",
      "text": "❤❤bismillaaah ibu mau buat kebutuhana sehari hari",
      "url": "https://www.youtube.com/watch?v=2vgIVemSKjU",
      "engagement": 0,
      "id": "5e072255b18b18ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-213addd1002a8ab3",
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
      "engagement": 22828,
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
      "externalId": "UgwQkTpEi2cFnfqFXtR4AaABAg",
      "date": "2026-08-20",
      "text": "Bang orang sukabumi juga?",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "e35fa61e5e36653f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1fa3ef9e6c68d27",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzhs8Q2JhVRQWdSV2p4AaABAg",
      "date": "2026-08-20",
      "text": "Bismillah semoga dapat buat tambah\" acara resepsi 🙏",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "8eb1b40db72fedc6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3666b19b69e6bf6c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxxFx4tasUeN2FptdN4AaABAg",
      "date": "2026-08-20",
      "text": "Di saya g bisa kluar ya kak fiturnya pas dienit terakhir",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "3ba3c19604f56f93",
      "eventId": "auto-7f493ce25ea07d7b",
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
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "7b028e5bb8cdfc63",
      "eventId": "auto-cb6a7e97711f5543",
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
      "engagement": 5,
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
      "externalId": "UgzvjDDuRcC7LYkZpQJ4AaABAg",
      "date": "2026-08-20",
      "text": "Hadir bang mau dong daget nya buat token listrik",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "577190b12aa4f275",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bc102e6031cad27f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwQuLUizfqTPzXlPvh4AaABAg",
      "date": "2026-08-20",
      "text": "Hadirr bang 🙏",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "e2387bb27b3e82d6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-45820ef0fab029c3",
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
      "externalId": "Ugz3iZex-ir9Kx0c7514AaABAg",
      "date": "2026-08-20",
      "text": "Menakutkan",
      "url": "https://www.youtube.com/watch?v=QUv-ftiomQU",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "6489d0bdad8b8302",
      "eventId": "auto-49a622eba8bac905",
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
      "engagement": 5,
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
      "externalId": "UgxNWBQX-G0SkxVNOdZ4AaABAg",
      "date": "2026-08-20",
      "text": "Sehat selalu kak🙏",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
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
      "externalId": "UgxViokZY94QrjZpl6B4AaABAg",
      "date": "2026-08-20",
      "text": "Sehat terus Abang semangat 💪💪",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 4,
      "id": "9418f3ff9ca34161",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-28ae6a75968e028b",
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
      "engagement": 110,
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
      "externalId": "UgyQ_pNKTTBUZfOWSfV4AaABAg",
      "date": "2026-08-20",
      "text": "suksesss terus",
      "url": "https://www.youtube.com/watch?v=7b7ETun8QG8",
      "engagement": 0,
      "id": "2afc45fabf2f7c6b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35c66c8b42ed4ef0",
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
      "externalId": "UgwVXkJsLq7N2K1Jtn94AaABAg",
      "date": "2026-08-21",
      "text": "Assalamualaikum saya butuh dana buat modal warung bang",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "861ab8c973fd8dde",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7edca7a74b206a1f",
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
      "externalId": "UgxjtEEUwP1TThXqn3x4AaABAg",
      "date": "2026-08-21",
      "text": "Bener Ruben aku dukung .deposito di ambil klu ana nya Uda dewasa",
      "url": "https://www.youtube.com/watch?v=QUv-ftiomQU",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "8ee52831588841f3",
      "eventId": "auto-efd3091a0f148b70",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgytnRZnJOFIKcrC3TJ4AaABAg",
      "date": "2026-08-21",
      "text": "Bismillah buat isi token , aamien",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "9da10ff9f3027881",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-391ca990ee273df4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOuZoH6ZiRjMXOzeR4AaABAg",
      "date": "2026-08-21",
      "text": "Buat pengobatan ibu 🙏",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "f89b1eedf090dec1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b49390f8a9210f83",
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
      "externalId": "Ugw9_PeYrqTyJ_XhCpZ4AaABAg",
      "date": "2026-08-21",
      "text": "Hadir bang, buat biaya kuliah",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "1f1ba852f462c63b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-58b372c61439597c",
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
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
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
      "externalId": "UgwyZno6D4F7bWGk47F4AaABAg",
      "date": "2026-08-21",
      "text": "Mau buat kebutuhan sehari hari bang",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "28f276d2060b47c2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2c9e111d9507c41b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzjGFMq9hqF0qBwhzl4AaABAg",
      "date": "2026-08-21",
      "text": "Salam sukses bang",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "ada38103f883e016",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35bc024ff0446a61",
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
      "engagement": 23,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.7
      },
      "id": "095e688db21bd40d",
      "eventId": "auto-18cb913092cbcad9",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxlOygxbvyiPurz7iB4AaABAg",
      "date": "2026-08-21",
      "text": "Semangat terus bang bosss",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "fdc624dbfeff2017",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-59f3eaee262e0fb5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxOB1jZay9ZXuLxbuh4AaABAg",
      "date": "2026-08-21",
      "text": "Semoga berkah",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "6e126d959a5a795b",
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
      "externalId": "UgwFy7Sm4avlRy67tBV4AaABAg",
      "date": "2026-08-21",
      "text": "Thanks teritorialnya bang☺🙏",
      "url": "https://www.youtube.com/watch?v=6oAD0FmNK_0",
      "engagement": 0,
      "id": "8df3b7f0c69693d1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b24178f802b7572d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzURr0K6OrB-6y_yc14AaABAg",
      "date": "2026-08-21",
      "text": "Utang y babyak",
      "url": "https://www.youtube.com/watch?v=QUv-ftiomQU",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 57.0
      },
      "id": "38adb53ee3cf55ea",
      "eventId": "auto-1ee4f3124e161cb7",
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
      "externalId": "UgwCPV3Q8w-LR5DvJ214AaABAg",
      "date": "2026-08-21",
      "text": "dc nya takut 😂",
      "url": "https://www.youtube.com/watch?v=rsm3FrGsMF4",
      "engagement": 1,
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
      "externalId": "UgzmTVjNOkK8D82GsYZ4AaABAg",
      "date": "2026-08-21",
      "text": "di dana saya dak bisa bos pdhal udh 6th pkai dna TF jga top up jga tp mau pinjam d dana dk bisa",
      "url": "https://www.youtube.com/watch?v=KbspE73J2h8",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "37190badb55b9776",
      "eventId": "auto-88f7ee685cfb4a75",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwnkFrt_DYWlvtuxGd4AaABAg",
      "date": "2026-08-21",
      "text": "hadir bang buat kebutuhan sekolah anak",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "e28acd13b4533e00",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6fecb8e6767e5291",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzY9X-ANDb8xaEYZX14AaABAg",
      "date": "2026-08-21",
      "text": "hadir bng udh subrek",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "3ac1d631d201995e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-561758fea50496e6",
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
      "externalId": "Ugze2jWodr5TUBol2wt4AaABAg",
      "date": "2026-08-21",
      "text": "sukses mas semoga beruntung",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "81818a500b08d079",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-55f31fcbeda8699a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9JXN5Fz2xL1J2TyR4AaABAg",
      "date": "2026-08-22",
      "text": "Akarrrr pohon gak tuhh 🤣🤣",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "708cf4de5c7288ab",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ffb8828a0938af15",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw24ek1IFvxasMWgpl4AaABAg",
      "date": "2026-08-22",
      "text": "Buat berobat terapi orang tua",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 1,
      "id": "2d61d9bc14ec8e44",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8e5d46ff99e779e5",
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
      "engagement": 25212,
      "id": "e54c3887db590937",
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
      "externalId": "Ugw0-DtqNM9eRKCSYk14AaABAg",
      "date": "2026-08-22",
      "text": "Chenel bermanfaat tetap semangat bang",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 1,
      "id": "e4a81eed7084d301",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a0f8765e1cd24d55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxKCt5zEkiL47ApFO14AaABAg",
      "date": "2026-08-22",
      "text": "DURASI DAFF AHHHH😢",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 45,
      "id": "389c4ce445744e0d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc06d6810202d2fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVF8oDh1V_kQKPZBt4AaABAg",
      "date": "2026-08-22",
      "text": "Hadir bos, untuk modal usaha",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "f6cf750cac9cfca1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-400b1c95d2d4f69c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw6iMkSQyrkvGo72IF4AaABAg",
      "date": "2026-08-22",
      "text": "Hadir 🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "id": "443ceb7111535c14",
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
      "externalId": "Ugy_aEVnLaAaIjU6kv14AaABAg",
      "date": "2026-08-22",
      "text": "Hidup tak tenang dari riba",
      "url": "https://www.youtube.com/watch?v=zLRj1E4T7Fg",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "63f96c7bbf37f103",
      "eventId": "auto-a4bf52ef38507cb2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "_WaHlfZiAf0",
      "date": "2026-08-22",
      "text": "KELILIT PINJOL BARENG PODOS",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 37235,
      "id": "5f39bd7f0695eae4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f276872938ca8d2d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyq3JPCAnHkqK4jEyB4AaABAg",
      "date": "2026-08-22",
      "text": "Mantap bang🎉",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "id": "7c3e7ec86a084ee5",
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
      "externalId": "Ugzc5zSn0lV0eO0VAPh4AaABAg",
      "date": "2026-08-22",
      "text": "Mau Saldo Dana Gratis?\nTonton habis, dana kaget dibagikan jika video ramai mau buat kbtuhan apa 👇",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 139,
      "id": "b41aaf2ff9839714",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ccc18414c1ed80c2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyk-GoJiCD3jspY46p4AaABAg",
      "date": "2026-08-22",
      "text": "Moga dapet",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "id": "3c58cf7ba1853b97",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9eeccb7e09423a97",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzB2sxADEvOn5mWv8F4AaABAg",
      "date": "2026-08-22",
      "text": "Moga rejeki kk🙏",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "d520d318a4811735",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f9871a3e88e9f808",
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
      "id": "4de3e8b6963fb9a8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bde3a1a6ce8d6073",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLeQsQqEjazzEoSBh4AaABAg",
      "date": "2026-08-22",
      "text": "SERUUUU, main lagi plis ke tempat tempat gini sama yg rumah hantu jugaa... tapi tetep bareng podosssss",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 18,
      "id": "85e4ed5b93e66b4c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5154278bba72b264",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCAEgFgyDCrT2awRN4AaABAg",
      "date": "2026-08-22",
      "text": "Suka seneng kalo ama podos wkwk",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 12,
      "id": "c3f5773f4bd70de9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-884660371c55a3b3",
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
        "modelConfidence": 0.8,
        "lexiconRisk": 57.0
      },
      "id": "19cb2232508fb0d8",
      "eventId": "auto-8d25e3e1e401e605",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxek-oxzSbXTSb1CEd4AaABAg",
      "date": "2026-08-22",
      "text": "Weh smngt bg",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 1,
      "id": "ecba42514ec532fe",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8f694e1853595e09",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx-UpMOt54QIH4p8ZV4AaABAg",
      "date": "2026-08-22",
      "text": "bang alek langsung ngakak anjirr, kayaknya udh ngga kuat dia nahan ketawa😂",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 4,
      "id": "2df9d2bcc0f3acbe",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7e93d0423d351970",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyOdy_TTQHlc3QFcJB4AaABAg",
      "date": "2026-08-22",
      "text": "bikin konten kayak gini lagi bang seru",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 2,
      "id": "5c7c57f246cb49ea",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48b974118c2304df",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyR2DT4JujRXMlIqiN4AaABAg",
      "date": "2026-08-22",
      "text": "hadir",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "id": "3c44f87637564e4a",
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
      "externalId": "Ugylz9cUt0n4L3SNFSp4AaABAg",
      "date": "2026-08-22",
      "text": "ke 5 lagi jirrr",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 1,
      "id": "c488681070fa3582",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-29f9d1630fa333e6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxkkDxgNu6t0c6l21x4AaABAg",
      "date": "2026-08-22",
      "text": "sering sering ke rumah hantu bareng podos pliss",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 3,
      "id": "bb4fc5975e291dc6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0f29c62314d0d2a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxNy6bedUrb7B8lzrF4AaABAg",
      "date": "2026-08-22",
      "text": "sering² upload bang daff, seru bgt",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "ac694d269b4abc10",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1348faa1f6b2356c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugykwxy4FGqXz8XLL2V4AaABAg",
      "date": "2026-08-22",
      "text": "suka saya nontonnya tpi durasi nya pendek sampe harus di putar 2kali video nya biar habis makananya",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "d672a8f26b7bcddc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ffa197cb5c81b329",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyWTUJ63hoh4zdx2794AaABAg",
      "date": "2026-08-22",
      "text": "wkwk ngakak banget bg daff, lanjutkan konten beginian seru bgt. jalan2 ke pasar lagi bg atau ketempat2 unik",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "c2a27a1c87e0c456",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0606b132973b84dd",
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
      "externalId": "UgwcPk9Oc7sMm3uhzYV4AaABAg",
      "date": "2026-08-23",
      "text": "Alurnya dapet banget 🌊 💕𝐉𝐔𝐍𝐈𝐎𝐑𝟖𝟖🟣 pas di hati 💖",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "a446d4e8d96143bd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-002cbf8cef2de0d4",
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
      "id": "2394673944527667",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
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
      "id": "e8d7aa730a253e92",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2f032adc53c4d78b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyowFpkuvRUB82yu-B4AaABAg",
      "date": "2026-08-23",
      "text": "Cakepnya gak karuan 😍 💕𝐉𝐔𝐍𝐈𝐎𝐑𝟖𝟖🟣 bikin melting 🫠",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "7281179bf24e1a63",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-196e7a3653ac2552",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw0vNH9CIsZRf8nzZ94AaABAg",
      "date": "2026-08-23",
      "text": "Duh pangling aku 😂😂",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 1,
      "id": "99bfeabfc862c763",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e99a8de588c98002",
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
      "id": "33c03ce0ddb4a665",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
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
      "id": "db35799ea36ebf93",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-33d0e31707de1e41",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxXlUWYnfOofKAE5_94AaABAg",
      "date": "2026-08-23",
      "text": "Hadir bang butuh buat benerin motor trimakasih 🙏🏻",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
      "id": "c4b9014ae6b318c5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-540c40760cac088f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxIBPQPbSpfn14wFqx4AaABAg",
      "date": "2026-08-23",
      "text": "Hallo Bang",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "id": "17751d32e1137ddf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4344ac405c4319d7",
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
      "engagement": 31118,
      "id": "87c05d27ac181777",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c665603b343ebcd3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwmWL_wCvzmdhuf2-x4AaABAg",
      "date": "2026-08-23",
      "text": "Mantap sekaliGaru da Hoki gua akuin masih yg kaya dulu Gacor nya 👍👍",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "583a7040e85dc881",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f7252ffd6ceea1b5",
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
      "id": "0bff033876a67df1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-53fc317ddfbf55dd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9xXs5pjbWJgGfvvR4AaABAg",
      "date": "2026-08-23",
      "text": "SERRUUUUUUUUUUUUU, ama podos pasti lucu 😋",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "93de7763c1d12cf7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1d0e774cc965e3fa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzHQs4OhoxBsySflIB4AaABAg",
      "date": "2026-08-23",
      "text": "Sangat membantu",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 1,
      "id": "7ef4fbf8481ca9b4",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eafd336daa60bf9c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzX-BLBfu5kOrkzD-l4AaABAg",
      "date": "2026-08-23",
      "text": "Semoga sehat selalu sekeluarga",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "ac17d9308ca9d20d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-257ad8e1835b3b5a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzfV0KsFQ0l9V6Lqfh4AaABAg",
      "date": "2026-08-23",
      "text": "Setiap minggu malem langsung gassGarudahoki buat tambahan kerja seminggu😋",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 149,
      "id": "6e3eb57646ec305e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ebd28216c8c2264d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzq7h3YD_VxBER9Ia94AaABAg",
      "date": "2026-08-23",
      "text": "Super mantapGa r u da Ho k i Gacorrr Semua game nya 👍Sukses Selaluu🙏",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "ca51513e1ebcee4a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5ef393627f904411",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyeZmTheQcnu08tWXt4AaABAg",
      "date": "2026-08-23",
      "text": "Vibes nya dapet banget 🌈 💕𝐉𝐔𝐍𝐈𝐎𝐑𝟖𝟖🟣 paling ngerti 🙌",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "d5eca74dd486c4b7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b2848c19d7c25b23",
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
      "id": "48836209421fc13c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e452658b77e51c71",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzTLP3iXOmbHZ8bu5d4AaABAg",
      "date": "2026-08-23",
      "text": "mantap bg",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "id": "f93d5bd187517e82",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-59daac05718b4ca2",
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
      "id": "4b6d93b632d5a7c7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-261a36ee544eea87",
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
      "id": "173fc1a2ccfef57d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b2f1532379a78fae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGGXZXUtuV2UFiKul4AaABAg",
      "date": "2026-08-24",
      "text": "6% itu pinjaman kur mikro",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "id": "b5e3e5b504fd1a22",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a13067ed9c53c7dc",
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
      "id": "34352e218a32c396",
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8848836081fc41f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw_BYqHVCeNqepnYft4AaABAg",
      "date": "2026-08-24",
      "text": "Adanya di angan-angan 😛😛",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "id": "099fea1a11a653c3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-94df2f46b3f97530",
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
      "engagement": 17,
      "id": "e613096c2ef502c6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
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
      "id": "4152430f1ea1b225",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f70c8bcfa11cafd0",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwT98YiqtRIq7LPPiJ4AaABAg",
      "date": "2026-08-24",
      "text": "Caranya ?",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "id": "380ad37ec36267bc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c6863e09629ca07",
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
      "id": "d964869a93dd0b5c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-36936d9e11ce1f9c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxk_zguMMHo8UJFSq94AaABAg",
      "date": "2026-08-24",
      "text": "Hadir bang",
      "url": "https://www.youtube.com/watch?v=5ygg0UHz1fE",
      "engagement": 0,
      "id": "c725455cc3ecf3aa",
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
      "externalId": "UgycuULE1yGwODVPrcx4AaABAg",
      "date": "2026-08-24",
      "text": "Hadir bang semoga mangkin sukses",
      "url": "https://www.youtube.com/watch?v=Xu9KCoJ3WQk",
      "engagement": 0,
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
      "externalId": "UgwqkivqIbOt0ljZiIV4AaABAg",
      "date": "2026-08-24",
      "text": "Inilah gagasan yg akan amburadul",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "id": "a620da1cc16cd57e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eb302cd4dbf9f1df",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxU2GAH49mOIz0b5YV4AaABAg",
      "date": "2026-08-24",
      "text": "KUR di bank konvensional bunganya juga 6%/th",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "id": "190816d5b3b123d9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a0387b95f3ae9c84",
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
      "id": "0e8831514870abb0",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c5c3da221723a8b8",
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
      "id": "c91d207080810c30",
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
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
      "engagement": 8,
      "id": "61dfe1e8a1c3da6a",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-597db7937fbabc04",
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
      "id": "134f456485737052",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a4364c1f5387d1c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4Y4eZ2ryrATMrM2B4AaABAg",
      "date": "2026-08-24",
      "text": "Pemikirang yg sagat cerdas bang  semagat bang ruben sehat selalu",
      "url": "https://www.youtube.com/watch?v=QUv-ftiomQU",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "ba60a214c2ea5103",
      "eventId": "auto-f30be9aa6c190b9c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx9C8dKItDPgKUQOO54AaABAg",
      "date": "2026-08-24",
      "text": "Sehat selalu bang semoga saya dapet buat berobat🙏",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "c39f0097b8be811f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-949d4e70fb501079",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzouZzpdzSzkURftR94AaABAg",
      "date": "2026-08-24",
      "text": "Sehat selalu bang..",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "a5591ab5daca713d",
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
      "externalId": "Ugy3GuENUuzjiAIcVf54AaABAg",
      "date": "2026-08-24",
      "text": "Semoga Ruben bs menyelesaikan dg baik ..pemeriksaan terhadap dirinya sdh dilakukan ... sekarang tinggal pemeriksaan terhadap S yg hidup hedon ...aliran dana nya ke mana sj akan ditelusuri",
      "url": "https://www.youtube.com/watch?v=C2kcTOoU-SU",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
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
      "externalId": "Ugz06kCM8YplzZ1ORu14AaABAg",
      "date": "2026-08-24",
      "text": "Terima kasih atas informasinya...semoga membawa kebaikan untuk kita semua...amin",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "7f5cbc2b1e542f80",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e3764a97bb20961",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugweq5RjhNENgvT4rKJ4AaABAg",
      "date": "2026-08-24",
      "text": "Terimakasih banyak bang, semua video bahasanya mudah dimengerti dan berbobot semua, semoga makin sukses bang ❤",
      "url": "https://www.youtube.com/watch?v=zLjItjeenlI",
      "engagement": 0,
      "id": "30d29cfeb29181e4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-929739acb50403f8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz0eiy36fsOWpMpGRR4AaABAg",
      "date": "2026-08-24",
      "text": "Tolong jelaskan 10% per tahun, itu anuitas atau flat?",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "id": "5c51ab5c27828c75",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bab43bbee8112bf2",
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
      "id": "d95258f1c321ad5e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
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
      "id": "f6d7edd8b6f73a4b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2ec7985d995b784e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyMw37maMVCFYIFKPZ4AaABAg",
      "date": "2026-08-24",
      "text": "Wah bakal makin banyak yg bisa dikorupsi nih..... 😅😂",
      "url": "https://www.youtube.com/watch?v=52kZEW1CK-U",
      "engagement": 0,
      "id": "342e60bc0dcca3d8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c016fa7e3019b6b4",
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
      "id": "e6db36bac3c47b8b",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a32f6d1a576bd38",
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
      "id": "abfa5d2afbf58796",
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 1.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c681af2bb28c6f32",
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
      "id": "b41137ef6e4f7cff",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3578413cf039d3ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxoz3TL0f6QjhPiX6x4AaABAg",
      "date": "2026-08-25",
      "text": "LUCU BAT NYINGGGGGGGG AWOAKWOWKWOWOWOOWOWKWOK",
      "url": "https://www.youtube.com/watch?v=_WaHlfZiAf0",
      "engagement": 0,
      "id": "7d884e873cf238fe",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4956211b636d6ab1",
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
      "inputCount": 501,
      "classifiedCount": 84,
      "irrelevantDropped": 156,
      "model": "deepseek-chat",
      "fallbackCount": 261,
      "labelCounts": {
        "NEG": 69,
        "MIX": 4,
        "POS": 11
      }
    }
  },
  "sourceMode": "live:multi-source-v2.1"
};
