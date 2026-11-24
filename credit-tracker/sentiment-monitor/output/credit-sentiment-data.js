const CREDIT_SENTIMENT = {
  "schemaVersion": 2,
  "status": "pilot-pending-human-review",
  "asOf": "2026-11-24",
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
      "status": "failed",
      "detail": "All Google News queries failed: \"pinjaman online\" OR pinjol OR pindar: HTTP Error 503: Service Unavailable | Kredivo OR KrediFazz OR AdaKami OR \"Kredit Pintar\" OR Easycash: HTTP Error 503: Service Unavailable | OJK (pinj"
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
      "detail": "Collected 527 relevant records/signals."
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
    "active": [],
    "triggerReasons": [],
    "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
    "reviewCandidates": [],
    "actionableActive": [],
    "notificationLevel": "amber",
    "notificationReasons": [],
    "suppressedCandidateCount": 2,
    "acknowledgedRetained": [],
    "acknowledgedSuppressed": [],
    "pendingHighSeverity": []
  },
  "weeks": [
    {
      "weekStart": "2026-11-09",
      "weekEnd": "2026-11-15",
      "fearIndex": 66.8,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 0.55,
      "engines": {
        "news": {
          "score": null,
          "volume": null,
          "negativity": null,
          "itemCount": 0,
          "negativeShare": 0.0,
          "uniqueSources": 0
        },
        "social": {
          "score": 70.0,
          "volume": 85.0,
          "negativity": 55.1,
          "itemCount": 177,
          "negativeShare": 20.8,
          "platformCount": 1,
          "engagementUnits": 236.6
        }
      },
      "components": {
        "newsVolume": null,
        "newsTone": null,
        "socialVolume": 85.0,
        "socialNegativity": 55.1,
        "severeEvent": 58.0
      },
      "articleCount": 0,
      "socialPostCount": 177,
      "uniqueSourceCount": 0,
      "socialPlatformCount": 1,
      "negativeArticleShare": 0.0,
      "negativeSocialShare": 20.8,
      "confidence": 0.279,
      "coverage": {
        "successfulChannels": [
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
        "newsChannels": 0,
        "socialChannels": 2
      },
      "volumeNotes": {
        "news": "Pilot week-on-week ratio: 0.12x; 2/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 237.62x; 2/8 baseline weeks."
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
        "suppressedCandidateCount": 0,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": []
      },
      "events": [
        {
          "id": "auto-8c9f86e99cfa7fe7",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "e7439039f5bf7038"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Request bahas yg galbay 2019 itu di hapus data utang kah up bahas kanggalbay",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c03f11f846d965f",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "6c632550d60087a1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "absen grup ke 2 kang galbay, bomat ama dc & fc fokus kebutuhan keluarga sehari hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c5e1d18a7e0e4076",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "fd6224040b283a29"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "saya single mother.usaha hancur2an pasca covid.pernah minjam rentenir 1 jt.tapi beruntung saya cepat sadar sebelum terje",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f7d3b70729d340ad",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "8c5ce0c15a831cf3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya udah galbay kredivo beberapa tahun dan kali ini baru ada sms katanya tim lapangan mau nyamperin, itu emg bener bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-019e7b89af2b2a1f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "05ff42400210d90b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ngga ada saya buat makan sehari' perantau saya juga udah subscribe",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-020db54b874b246b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5a0a5d336e621539"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga rejekinya bertambah dan semakin sukses bang amin🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-024ee17325c0d7f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dd2432a16c94a234"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah untuk bayar anak sekolah bang 😭😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0a9b64f0641a0cc8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "838f7a88d17b1fa9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kak, buat bayar kosan udah nunggak 2 bulan mudah2an dapat yaa amiiin😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0acbdce4214acb82",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "95bc5ca982777ed4",
            "0570603e548be851"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahhirrahmanirrahim semoga dapat untuk bayar kontrakan bulan ini🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0cb3bd90b70e093f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c8509866392b12c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ko do akun gw ga ada tuh fitur gitu pinjam dana cepat pas di ketik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0e9f7894c8687ff9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ae6012bb066296f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat ganti device🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0ef58607a7310ee1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f54d63b1f388df01"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum saya buat baju sekolah sama uang buat beli motor",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-112aefc0863646d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3edbdd089922a36e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Subcriber baru bg moga moga dapat rezeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-11d4f77629e404fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f04d9fcae48b0862"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "❤❤❤❤❤❤paylater 2❤❤❤❤is the besht❤❤❤❤❤❤❤❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-176d2cdbb84d5459",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "935dd67b2bc730c9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hallo bang .....\nizin saya mau buat bayar kuliah🙏🙏🙏🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1bc053390cfaeef0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "670b32f03bcd74be"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah bang buat bantu ortu buat bayar kontrakan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1c07f43e940f257e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bfe43f0192e9f8b0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang pengen dapat buat bayar sekolah adek😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d44378831437695",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0443bed92e642155"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat bayar hutang bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1e9a75b368297f96",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7085e4885081ef49"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah kebutuhan bayar kontrakan udah nunggak bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-23a24f86aeca62e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "beb0f5847a0b88ef"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga kontennya selalu rame \nDan semoga bisa dapat daget buat keluarga karena kondisi mendesak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-242fd2e85f4af3a2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "67517fa0fbf6a288"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kenapa gak ada pinjaman dana cepat?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-25d847ce377721ea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "40eca5075dd8d1a7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mana polisi....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-268d4e69c015333c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7f8edba83460353e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bg mau nanya pas mau pinjaman kok gd yh pinjaman cepat ny",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-28b22bd9a998a88f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "986470880e1d2170"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bg,,,,, kalau nontonnya telat masih dapat dana kaget nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-28b5c0dfbe2d843d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "181071e2f6326136"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat biaya anak di sunat bang semoga ad rezeki nya buat saya amin🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2c56f459c907a2f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e8855adf0daf1254"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap abang caranya bagaimana?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2db2dff209c86cae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7ccf8e35babfb77d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah \nSemoga dapet buat makan hari ini, belom makan nasi dari pagi. Posisi ngerantau, belom dapet kerjaan lagi😌",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-31c2a11a878633c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "11af433b62630900"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapat bisa buat bayar hutang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-325682d12c3d9a5f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "17ab8ad017486526"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mantap bang, untuk perbaikan motor..sy ojol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3256ba05b16f859c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cb5e5eaf9588a0ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga terpilih buat beli sembako dan kebutuhan anak anak balitaku, semoga Abang nya selalu dilancarkan rejeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-33a3862210657950",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "045d1067a15ca9ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah ya allah kalau saya menang saya mau ngasih ke orang tua saya di kampung 🤲🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-347e887a76bc2bdb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96f78c0dcdbc2112"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga dapat ya Allah untuk kebutuhan makan saya tinggal sama nenek saya cuma berdua ekonomi lagi susah susahnya🥹",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-34926bdfe56e5ff7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "39b3a684b5d8a303"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "alhamdulillah mbak dikeliling orang baik,beda sama aku mbak disaat mereka butuh bantuan aku tolong tapi pas aku kena tip",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-35dd253e55dcdf9b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "27d95239a7b18b0e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "anak kost bang seikhlas nya saja, berharap tunggakan bulan ini bisa bayar kost😇, sehat\" selalu bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-36149b0d955fdd9b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1c77f926ff450d4f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap makan atap hehe\nSemangat..🎉",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-399fef367afeb6d9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "93d7d077457244f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "saya butuh banget bang gmna cara dapet nya, 300 buat biaya skolah dua anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3b67b46f5d15e332",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f09b754769402a7a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah dapet 😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3c493d126a7af8d0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cf154ee26a325e24"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap video nya bg jelas dan akurat.. Tapi aku selalu ditolak bangku.. Mohon pencerahan nya abng ku.. Lagi butuh dana b",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3d4ce7df99b00e98",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3a7cd62697b7eca4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah bisa dapat, buat lahiran istri aamiin🙏❣️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3df2aff1511ee034",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f4a7bae38da8087e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillahirrahmanirrahim lagii membutuhkan lagii mendesak mau berobat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4341ef10df9bf5ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9c19a7305822a946"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat berobat anak, bismillah semoga bermanfaat dan dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-459ac9b746fbd226",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3a7ac4eeaa531f1e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bagi dong buat grup linmas jaga malam roko 1 bungkus 😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-466ca1d726fa008b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "acfa3d2ec202f643"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asalamualaikum hadir selalu pertama abang ku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4bb042cfb1a2767a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7fdc25aad6994b51"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang sehat sllu bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4c98da7f345b1ed3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f04752edc7b624cb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap bang buat benerin sepeda tua saya bang buat ke pasar🥰",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4e638959ac213408",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6a13b60a7d646317"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "CARA CAIRKAN SENDIRI LIMIT SPAYLATER UPDATE NOVEMBER ANTI GAGAL :\r\n👇👇👇\r\nhttps://youtu.be/TYvIRoHlARg\r\n\r\nLink Daget ada d",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4e896921af0c4352",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ce3b311f75f5f7b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapet rezekinya aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4ee1662ff46b2805",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7cc8dfde8a390764"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tolong bang buat anak bayar sekolah,saya sudah pusing🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-502526ffdc153d6a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "73097a3885de68f9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirahmannirahim, bismillah kak buat ongkos berangkat interview keluar kota dan minta doa nya semoga di terima",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-503a05e34700faf7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d62c2ed81fb76123"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang buat kebutuhan sehari-hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5054caeacb69e1c8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b8b9bc2368f1abe6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum \nHadir kang....",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-505546f68827fded",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2117ef18b93d7f53"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah utk makan. Ngerantau sendiri udh 1 hari blom makan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-50a71b08fb0193a5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7d1d2efa12f3b39f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TERUNGKAP! DC PINJOL-PINJOL INI SIAP KERUMAH ANDA!! Hati-hati",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5285d317f17d0890",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "42ca0fa997169790"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tangkapi..para mata elang..itu..Pak..Dedy..mulyadi...!! \nMotor..itu..sebagian..masih..punya..lising..namun..sebahian..ju",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-52a5315e6836fa97",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "10e046c7f3b3b6ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah mudah\"an rezeknya\nUntuk berobat anak ke RSCM",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-52a54110f4b2f7d9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "01af12ebf934d3a1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung untuk biaya sakit orang tua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-55f41c3dc426b94a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8ca67e76f7b81bb2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung untuk biaya benerin keramik rumah sudah hancur",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-56332105692b1547",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3fa73cfe57b4c779"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah , semoga rezeki . Buat makan hari ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-57a15a06384053b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1569e5db214ccdb5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapet dana kagetnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-57f090eeda92ceb9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "09c91f3281716dda"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah untuk anak kos \nsaya kuliah di Padang bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-582722e4d7625073",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "97edc0a606a3f1df"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat untuk kebutuhan perbaikan motor yang tiap hari pake ke kampus 🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-59ce777274099a48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f93ec72651988b4a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nyimak semoga berkah malam senin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5a126992e01a0b20",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3b21ad795288ab74"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat biyaya berobat ortu lagi sakit😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5b583ca7c77b31f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e961cfdce28c6e47"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung.untuk biaya anak  sekolah",
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
            "f5f58a61384e076f"
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
          "id": "auto-5ddc0da851ba6ceb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "80fdc270acafe50f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Luar biasaa ya Allah smga saya dpat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-652cdd03d0d1670e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9588f0def4baca42"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hallo bang. Dana cicil ku aktif cuma dana instan nya gak aktif kenapa ya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-658d26f6d794cb2b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "df0d616f9edc3c57"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah.\nBuat bayar tagihan dan hutang bang \nSemoga saya beruntung 🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-65f1d5c112513e53",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "57f0ed64496205f0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tolong kak aku udah lama saskreb tapi belum pernah dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-66280a9ca4d53482",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6faf583f2580020e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asli orang baik.. Walaupun ditengah badai, masih dikelilingi keluarga, suami, sahabat yang baik.. Masya Allah..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-672ab341a6455818",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b342a54b83ea20fc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah, semoga dapet, buat kebutuhan rumah tangga,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-688c28aa19d11505",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "052f9fef8f5c8355"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "“sayaa bang” \nbissmilaah semoga dapat buatt tambahan beliin ortu barang impian nya..aminnnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-69e040508890e2e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2e9b3b276d1c8bc7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😂😂😂😂😂😂😂😂pinjol,judi onlen, OJK satu kesatuan yng sama😂😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6b90ac513c3782c7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "faeb81b864d7db11"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Seminggu gak pegang uang sama sekali bang. Pengen apa masih harus ngempet. Kerjaan sulit. Cuma cukup buat makan moga ada",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6cb4bf446038efd8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5038fa1b28c0da5f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah ya allah semoga rezekinya buat beli pempers anak",
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
            "7690db5eb5c57e1d",
            "b25ac6a33c14134e"
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
          "id": "auto-727b2ce5f509838d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "59ef86ab99cb3070"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah kak..semoga dilancarkan usahanya untuk melunasi hutang2nya..Aamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7289bd677049fb09",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b1e05d953c5545bc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjam dana cepat diaplikasi ku gk ada",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7620e82198d38ead",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a2922726e9440a86"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Astagafirullah sudah sedalam ini saya menjalani gali lubang tutup lubang ya allah tolonglah hambamu ini biar bisa meluna",
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
            "3c884789360aa9e8"
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
          "id": "auto-790a4a7f0cc5f4ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3bce83f4c32022ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah beruntung\n\"Buat kebutuhan sehari²\"",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-79ebfb1cf0ed2d99",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e73bda9bb3869132"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah. Bang saya benar2 lagi butuh buat makan hari ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7d022670972d7540",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eb14b0c431ab29bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ada DC ke rumah kasih aja pisang goreng Ama singkong pasti di makan..laper pasti",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-811d994489761ee1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "195c4cd853d377ab"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet dong bang buat beli obat bapak 😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8318bf9709991e57",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f2440165ce74d21d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Knpa g muncul y kk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-832d9a6569293645",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "93b67725fb3bba5c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga amanah buat modal usaha kecil²an",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-86e5de8116841841",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ba5daf6c4bc90ecd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismilah buat bisnis,moga dapet",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-88bde989940f6aea",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dbafea669bb2dc8a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya Allah seperti saya tapi alhmdllh gak sebesar itu,awalny suami jg gak tahu setelah tahu awalny marah besar alhmdllh se",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8a4f0437039a554e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "76d6a40c8f29b9bb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung bang saya butuh bnget buat pempes anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8c8aef2380663a69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "80fc1b62633b10dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bisimlahh semoga ada rezekinya dari si ABNG ini amii",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8db9f2ef2a8bf6cc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5092d656e6726754"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kadang istri ikut bekerja membantu suami itu juga sangat membantu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8e4b7320bedd2452",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2a57d9317b6e97f9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet buat tambahan usg istri🤲amiinn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8fb8949decd2e695",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a7ff01dddcc84fc7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga ada rejekinya \nsalam dari cianjur selatan bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-91e83b06cd8ebf50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "05c235dc5d79e275"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga bermanfaat dan lancar rezeki nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-93ce1298b6b4e687",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2c374b41f80d782c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "buat tambahan beli tas bg🙏🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9749120ccc0de538",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c562f968969a1b79"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir sllu bang sehat sllu bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9753a1f3092bc06a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d651e1f951f5fba3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat kebutuhan sehari\", udah mau setahun nggak kerja karena fraktur",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-99d1b99a05e38534",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "85fa5a6ca9840871"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau aja di bohongin 😂 fitur itu gak ada\nKalian cari sampe botak sono wkwk\nVideo nya di jeda2 gitu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9b0672c825117537",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8aefcb756161d72c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Suami yg bijak. Dan Allah msh melindungi rumah tangga mereka.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c546264bfb2f2f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9da43763f1332dd9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Indodana daerah Kalimantan kyk apa kk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ca7bd56fa16eac0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ab7ba076081be51d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau dong, buat ongkos kampus, semoga dapet aminn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ed060688ae369a4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ef5c0e2085e16ed2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Punya saya kok balik nya ke dana cil min GK seperti itu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9f1a3b8f1e996791",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b23aa8cad69c8163"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah\"an dapat,, bisa buat beli obat ibuk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9f4e579fd5dddac1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d8b8af5a0c8e094e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Utang Pinjol Rp250 Juta dari 11 Aplikasi: Kisah Mba Umi Bangkit Bersama Suami",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a18521f801553d51",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "789fd7b5abf08fc0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya tetep di tolak pinjaman nya  bang ,,, 🤣🤣",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1ccee344026d6ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7f8bf59bb0ec70e0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "CEKCOK PEMOTOR DAN DEBT COLLECTOR! KDM TURUN TANGAN, KISAH UTANGNYA BIKIN TERDIAM #KDM #DediMulyadi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a25b733d636ff41c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ffeb5928a103f641"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga ada juga fitur pinjaman dana cepat coy",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a2c2b618512caa91",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b21d30f871a5f149"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat modal jualan gorengan",
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
            "1bbb8660bee75b57",
            "3244c6fccc6afab7",
            "a0d9716b47bd6712",
            "ec1759f539e25f02",
            "7e8fa2733e3ee2d8",
            "d8e1bd59d86bc41f"
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
          "id": "auto-a35e01d25f7ffe65",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9fbbcaff46504cb6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga ALLAH mudahkan semua yg sedang terlilit pinjol segera bisa melunasi hutangnya...stop jgn galob tulob...narasumber",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a4e4c36b1d4aaf01",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "02a98321334c8af8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol itu gak ada ojknya..itu ojk palsu semua..soalnya saya pinjol bnyak..tapi spinjam shope masih bisa aja tetap minja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a51c91afd67063cf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b15f16a1a28b49b7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah kebutuhan sehari-hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a73b5e2c942a34cf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "af561c7f5c4ef072"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SIAPA yang belum kebagian SALDO DANA GRATIS? Komen \"SAYA\" nanti dapat giliran dapat !",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a91eb66b922962aa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "15a01873b2697744"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang semoga dapat dana kaget buat ngajak ibu makan mie gacoan 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac2200b8b714632b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "adb0461c3d1edb23"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga beruntung untuk bayar uang sekolah anak2 🤲🤲🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-acb29897fc6cc3f8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a68545212bac762f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ULAH UMAR TERJERAT PINJOL BIKIN KARIER TIKA DI UJUNG TANDUK! | EPISODE 1A PAY LATER 2",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ad745402c3a8c04e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4891aecdeb2788fa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hutang pinjol 500 rb DC telp terus aneh udah tahu ekonomi Indonesia tidak baik² aja ekonomi nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-af6c2b36a5d3a93d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "14a201d40ee644fc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "keren bgt suaminya, aku juga mau cerita, dulu aku terlilit hutang sebelum aku menikah karena dlu aku deket sama cowo yg ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b37e06f97586c251",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7db33ac50b94757f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim. Semoga dapat bermanfaat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b5e455c84051e02f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6839639d1fdbc843"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "❤❤ salut sama suaminya jaga baik2 suami nya bun susah nyari suami sebaik ini ❤❤❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b8533d9e0011c39e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9a32b1c10d086d77"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "buat kebutuhan sehari-hari kan semoga dapet saldo dana dari kakaknya....😭😭😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b87b8b3c5558bb30",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7302099828ace846"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga dapat buat acara tahlilan orang tua ku yg ke 40 hari aminn🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ba209abf85193a5c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3c1ffc2beca8d73e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga aku di beri kesempatan bisa di bantu sm kaka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bbf8dc20fd4345ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "372d878a1f7a8ec7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat pulang kampung 😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bf26c7c6260ab29f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fd41279eb2d8d931"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asalamualaikum bang🙏🏻 tolong bantu bang buat biaya lahiran istri bingung pinjem sodara dan tetangga GK ada yg bantu😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c14152e18a8f3b52",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4857f8101c735d6c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ya Allah aku single parent terjebak utang juga😢...smoga Allah lunaskan hutang kita semua aamiin yaa Robbal'aalamiin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c3b6a6ac1e2f428e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8d6a9b172d2fde5c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah, semoga dpt rezeki untuk orang tua😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c4228057a193f943",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8705471cb934e9f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah udah paket lengkap buat makan sehari² soalnya lagi rantau",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c54e8dfa512b4834",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dcda5869a3703966"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tutorial mantan bang penjelasan.nya bagus",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c5e4d6414dd1b340",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b2feb710cfc981f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat buat bayar utang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c62d620af684e500",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "76c534b77e37c0f1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ttep semangat boskuu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c70b269142389e56",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9be76cf9717afc68"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Beruntung mbaknya, semua terasa agak lebih ringan dengan support penuh dari org terdekat. Dibantu pikirin solusinya. Sua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c716fab2d0573d76",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3f56cd7e28d846e9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Awali dengan bismillah🙏\nAkhiri dengan alhamdulillah 🙏\nSemoga giliran saya dapat rezekinya. Aminnn🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf171fcd44c42919",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1a2da85adb4db1bd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kak tolo bantu kak saya mau cuci darah Minggu depan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf1b709ab75767ed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a55fadb93854449d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Absen kang dari grup 1 dan 4. Mau nanya bang klo duo oren n gopaypinjam ada FC nggak? Lokasi aku DIY...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cfce61f23664e809",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e143b77b32c47af6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillahirrahmanirrahim hadir bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d22c05b1bcb0acf8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "370ee74b003b8f0a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga hoki sekali seumur hidup kepake, buat ongkos interview kerja besok doain semoga kterima ya guys 🙏😇",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d2319a4b06d23cf9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9b8203e8cfa33a5a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat .. bisa buat jajan anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d28d8522c4bd926f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f131cd0c429fbed3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kenapa gak di pasin 2500000...tutornya jngan di skip",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d2f51ba6498e4cf3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f5b78187665a654e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah kak saya masih bujang mau buka usaha warkop kecil2 an sudah melamar kerja kesana kemari gak ada panggilan semo",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d43db0dcdc1f58f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3c8248c7bbb3f301"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udah dicoba tutornya, tapi ga muncul di menu ya. Beneran ga ini tutor ya..? Aku udah premium",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d4a8bae004c13a2a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "506ad27fb991e0b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lapor polisi aja jgn2 mau rampok ber modus, yg pasti itu urusan leasing sm pemilik mtr ..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d6e834c2f792c68e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "57a8f64104b27a59"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "belum ada bang dipencarian",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d82baf326b24b825",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4b052d286b44102c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semogah dapt buat beli susu anak kak😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db3da7c1fea43f8f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e661874b93550106"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat kebutuhan buat anak 😢😢 Kasihan sepatunya udah sobek",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dc0cb02154566ca6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1be528a986540e10"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alhamdulillah terimakasih bang dana kaget nya🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-dddd4f7dc8be25f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c6bd126c745e458d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Smgt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-de8e845f92e1b3a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b15bfb23a6b7c57f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TANPA SLIK OJK?! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA BUSUK LANGSUNG CAIR",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-df14de7adf53b94c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1c505a865992fe8a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau kakak ku, lgi butuh bngat kk, mtor rusak, pdahal motor 1satu nya pake skolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e056ee96428b9147",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cc5413d6d5a4b7cf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga dapat, buat bantu perekonomian dan buat kebutuhan sehari-hari dan bisa ngasih istri bism",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e2fdb357c29383bd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e11daefb578be26d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "CARA PINJAM UANG DI DANA YANG PADA BELUM TAU! Pinjol Mudah Cair 2026",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e31d122a4a8cc5b5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e1199e23f8dcc111"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah dapet rejeki disini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3b34165947c655c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "91aa496583328435"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Assalamualaikum..buat modal dagang kopi nih..bos qiu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e62be7c6c1a6bdba",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "77da2a7857b14375"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudahan rezeki buat bakal kebutuhan anak sekolah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e785334a5f2a9454",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "468dddff689dde1c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kak,caranya gabung gmn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ea14cae1f501d614",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8fa8fce18b1f08a1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah mudahan dapat buat perbaiki motor buat biar bisa ngojek lagi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ebcc375a5c084e17",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "11bbb29c8e1ebbd0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya Uda 2 kali di datengin DC kredivo tp saya tidak pernah janji bayar.tapi apa dia masih dtng lagi gak ya.dan sampai k",
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
            "d53a74d95a9f01d5"
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
          "id": "auto-f02bd8b25126f67d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2698c131fc0c0680"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah buat tambahan beli motor 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f0441dc73a675214",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "721e208605678710"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga keciduk buat beli obat bapak kasihan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f0dd13dc0315a5f9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "af6413234c0d350f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah,semoga dapet buat makan lg kepepet di kost uang habis",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f4024d95e27954f0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f2aff3ed215e702d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet bg buat biaya berobat bg😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f45fa97e74406a09",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cde2addcb788448f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "lazbon ada ga",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f475d99b7eb4e125",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9f51a58008bdc835"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bagus alur cerita nya... Terkait dgn situasi yg skrg org suka main judi slot.. Depo depo... Scatter scatter ap lh itu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f581fafa8e17c1ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "03ac757d0e8d4cad"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah. Smga dpat dana kaget. Ni. Buat ibuk brobatt. Bismillahhh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f8b3396d5a73052f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4aaf151c8044361f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kak kalau tiktok paylater by gopay gimana?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc514ae10acb582e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cb249b044fc72d18"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang apk PINJAMIN, pinjeman  20juta dan itu udh sama bunga nya padahal minjemnya ga segitu ada FC krmh ga bang?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fe7b05c85c2c51b9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6ecb14056b910e53"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bg mau dana kaget nya dong bg mau bayar uang perpisahan sekolah bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-feb0b5288f570149",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4ebb1cf310448102"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ayo donk... pemerintah turun tangan terkait penerapan bunga pinjol.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ff9c0155a480ff88",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2ff4c08ae634ed6c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya mohon bantuan nyah bang. Saya harus pinjam ke siapa lagi di sini udah ga DA pinjaman. Bang tolongin sayah saya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [],
      "socialItemIds": [
        "fd41279eb2d8d931",
        "670b32f03bcd74be",
        "e661874b93550106",
        "1bbb8660bee75b57",
        "3c884789360aa9e8",
        "7cc8dfde8a390764",
        "57f0ed64496205f0",
        "91aa496583328435",
        "80fc1b62633b10dd",
        "dd2432a16c94a234",
        "3a7cd62697b7eca4",
        "d651e1f951f5fba3",
        "10e046c7f3b3b6ed",
        "2117ef18b93d7f53",
        "df0d616f9edc3c57",
        "03ac757d0e8d4cad",
        "73097a3885de68f9",
        "9c19a7305822a946",
        "1a2da85adb4db1bd",
        "c8509866392b12c6",
        "3244c6fccc6afab7",
        "8fa8fce18b1f08a1",
        "b23aa8cad69c8163",
        "7690db5eb5c57e1d",
        "05c235dc5d79e275",
        "76d6a40c8f29b9bb",
        "adb0461c3d1edb23",
        "8ca67e76f7b81bb2",
        "01af12ebf934d3a1",
        "9b8203e8cfa33a5a",
        "76c534b77e37c0f1",
        "a68545212bac762f",
        "ba5daf6c4bc90ecd",
        "f4a7bae38da8087e",
        "9a32b1c10d086d77",
        "2c374b41f80d782c",
        "f04d9fcae48b0862",
        "1be528a986540e10",
        "6faf583f2580020e",
        "a2922726e9440a86",
        "3f56cd7e28d846e9",
        "2ff4c08ae634ed6c",
        "9be76cf9717afc68",
        "986470880e1d2170",
        "7ccf8e35babfb77d",
        "e73bda9bb3869132",
        "181071e2f6326136",
        "59ef86ab99cb3070",
        "a7ff01dddcc84fc7",
        "2a57d9317b6e97f9",
        "370ee74b003b8f0a",
        "5038fa1b28c0da5f",
        "af6413234c0d350f",
        "ffeb5928a103f641",
        "a0d9716b47bd6712",
        "ec1759f539e25f02",
        "e961cfdce28c6e47",
        "2b2feb710cfc981f",
        "8aefcb756161d72c",
        "b15bfb23a6b7c57f",
        "3c8248c7bbb3f301",
        "d8b8af5a0c8e094e",
        "39b3a684b5d8a303",
        "57a8f64104b27a59",
        "6ecb14056b910e53",
        "8d6a9b172d2fde5c",
        "935dd67b2bc730c9",
        "14a201d40ee644fc",
        "05ff42400210d90b",
        "6839639d1fdbc843",
        "a55fadb93854449d",
        "b8b9bc2368f1abe6",
        "4ebb1cf310448102",
        "8705471cb934e9f8",
        "b342a54b83ea20fc",
        "cb5e5eaf9588a0ed",
        "0443bed92e642155",
        "7f8bf59bb0ec70e0",
        "3a7ac4eeaa531f1e",
        "9da43763f1332dd9",
        "5092d656e6726754",
        "838f7a88d17b1fa9",
        "67517fa0fbf6a288",
        "f131cd0c429fbed3",
        "e8855adf0daf1254",
        "1c77f926ff450d4f",
        "85fa5a6ca9840871",
        "b1e05d953c5545bc",
        "e7439039f5bf7038",
        "789fd7b5abf08fc0",
        "faeb81b864d7db11",
        "9fbbcaff46504cb6",
        "f2aff3ed215e702d",
        "beb0f5847a0b88ef",
        "7d1d2efa12f3b39f",
        "42ca0fa997169790",
        "93d7d077457244f8",
        "eb14b0c431ab29bb",
        "f54d63b1f388df01",
        "9f51a58008bdc835",
        "cb249b044fc72d18",
        "2698c131fc0c0680",
        "372d878a1f7a8ec7",
        "f09b754769402a7a",
        "f5b78187665a654e",
        "045d1067a15ca9ba",
        "9588f0def4baca42",
        "4aaf151c8044361f",
        "468dddff689dde1c",
        "f2440165ce74d21d",
        "506ad27fb991e0b5",
        "ef5c0e2085e16ed2",
        "4857f8101c735d6c",
        "dbafea669bb2dc8a",
        "6c632550d60087a1",
        "4891aecdeb2788fa",
        "cde2addcb788448f",
        "fd6224040b283a29",
        "bfe43f0192e9f8b0",
        "7f8edba83460353e",
        "3fa73cfe57b4c779",
        "b21d30f871a5f149",
        "b15f16a1a28b49b7",
        "195c4cd853d377ab",
        "721e208605678710",
        "7fdc25aad6994b51",
        "80fdc270acafe50f",
        "40eca5075dd8d1a7",
        "7e8fa2733e3ee2d8",
        "d8e1bd59d86bc41f",
        "b25ac6a33c14134e",
        "02a98321334c8af8",
        "11bbb29c8e1ebbd0",
        "8c5ce0c15a831cf3",
        "c6bd126c745e458d",
        "d53a74d95a9f01d5",
        "1569e5db214ccdb5",
        "e143b77b32c47af6",
        "17ab8ad017486526",
        "acfa3d2ec202f643",
        "11af433b62630900",
        "3bce83f4c32022ed",
        "3b21ad795288ab74",
        "e1199e23f8dcc111",
        "7085e4885081ef49",
        "93b67725fb3bba5c",
        "4b052d286b44102c",
        "95bc5ca982777ed4",
        "0570603e548be851",
        "cc5413d6d5a4b7cf",
        "7db33ac50b94757f",
        "6a13b60a7d646317",
        "e11daefb578be26d",
        "d62c2ed81fb76123",
        "15a01873b2697744",
        "c562f968969a1b79",
        "f04752edc7b624cb",
        "cf154ee26a325e24",
        "ab7ba076081be51d",
        "1c505a865992fe8a",
        "77da2a7857b14375",
        "f93ec72651988b4a",
        "af561c7f5c4ef072",
        "3c1ffc2beca8d73e",
        "97edc0a606a3f1df",
        "3edbdd089922a36e",
        "f5f58a61384e076f",
        "dcda5869a3703966",
        "27d95239a7b18b0e",
        "ae6012bb066296f8",
        "3ce3b311f75f5f7b",
        "09c91f3281716dda",
        "7302099828ace846",
        "96f78c0dcdbc2112",
        "5a0a5d336e621539",
        "052f9fef8f5c8355",
        "2e9b3b276d1c8bc7"
      ],
      "_newsVolumeRaw": 0,
      "_socialVolumeRaw": 236.6
    },
    {
      "weekStart": "2026-11-16",
      "weekEnd": "2026-11-22",
      "fearIndex": 65.7,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 0.55,
      "engines": {
        "news": {
          "score": null,
          "volume": null,
          "negativity": null,
          "itemCount": 0,
          "negativeShare": 0.0,
          "uniqueSources": 0
        },
        "social": {
          "score": 58.1,
          "volume": 58.3,
          "negativity": 57.8,
          "itemCount": 256,
          "negativeShare": 23.2,
          "platformCount": 1,
          "engagementUnits": 351.7
        }
      },
      "components": {
        "newsVolume": null,
        "newsTone": null,
        "socialVolume": 58.3,
        "socialNegativity": 57.8,
        "severeEvent": 86.0
      },
      "articleCount": 0,
      "socialPostCount": 256,
      "uniqueSourceCount": 0,
      "socialPlatformCount": 1,
      "negativeArticleShare": 0.0,
      "negativeSocialShare": 23.2,
      "confidence": 0.279,
      "coverage": {
        "successfulChannels": [
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
        "newsChannels": 0,
        "socialChannels": 2
      },
      "volumeNotes": {
        "news": "Pilot week-on-week ratio: 1.00x; 3/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 1.48x; 3/8 baseline weeks."
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
        "suppressedCandidateCount": 2,
        "acknowledgedRetained": [],
        "acknowledgedSuppressed": [],
        "pendingHighSeverity": []
      },
      "events": [
        {
          "id": "auto-c33fb59c6fce437b",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [],
          "socialItemIds": [
            "b9dede60abc56a54"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan sesekali berhutang apalagi ke pinjol ilegal, telat dikit langsung kena teror.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8f9fc1fa5cc99cc1",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "00bcbc70a9f1f580"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kapok sm pinjol, bunga nya hampir setengah nominal pinjaman ny kampret.Saya kena penipuan oknum shopee yg katanya resi p",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1b3aee68d1146bd9",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "dce9cdd273f476e4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir paduka raja galbay, 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2da9bbaff4161da3",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "8539ba8a7414539c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aq galbay di akulaku n ada kami bang bahaya gak ya..makasih kalau mau jawab",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3a18a1da57dcbca3",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "d37f59079a219262"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yang d tunggu akhirnya muncul juga selalu pantengin biar kuatin mental. Staygalbay tetap semangat.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3bed1ea1bd12b2dd",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "7e986729f6d4d54e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gaskeun galbay nasional. \nSy galbay 100 jt, 10 apk, baru galbay semingu..",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4113b01d1637664a",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "402fbafc51fc01c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "galbay jadul kang...\n45 juta \nbukannya tdk mau bayar\nsudah bangkrut semua usaha\ntdk ada apa2 lagi 😌",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d391e323999446b",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "ed46a231952c4f3e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Galbay di 22 aplikasi pinjol, kalau email saya di setting masuk spam tapi gak pernah dibuka satupun, menghindari down me",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6a738c42745b3c18",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "4e7b0a4b247cd705"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ngeri ngeri sedap emng galbay ni😢aku dh dua tahun galbay lbih 10 apk...gak ada yg kerumah si TPI takut aja😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7a93b544e91835e4",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "9e2385bb6a9db799"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "maaf mas, tapi kok saya lihat2 mas nya ini lebih mirip debt collector dari pada orang yg galbay 😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-83622c20c683e43b",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "e3c153407a465355"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "UTANG DARI 2021, RAJA GALBAY DITAGIH DC!! LIHAT APA YANG TERJADI!! GALBAY SELAMANYA!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-85b7d6a91fd8ede5",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "3b506d7a7e186e2b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😅 king of galbay msh ditagih jg tagihan 2021 gile bgt..dpt data dr mn mrk?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-94cc36bf135793d8",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "fac24490f0d335ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Resikonya kalau gagal bayar atau orang gak tahu diri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-96210384a14679b7",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "8720e280796c2529"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Angkat aku jadi murid'mu guru agar aku bisa galbay Kya guru",
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
            "aba0bfb215683edf"
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
          "id": "auto-c68bfe1f79eba41c",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "5ec20df98d3af77f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kerid truss om smua pinjol tuh ,babat abis  ,.\nTrus di galbay lagi😂😂\nBiar pada bongkor tuh pinjol2 ny wkwk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e3dbafdafd0aa34a",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "ce93527091fd0532"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang salam galbay",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e7ef9fab29e1a39a",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "3052bb37073c8976"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang, bahas galbay cc honest",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f5e1f4f544dcd31c",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [],
          "socialItemIds": [
            "786e9eda4be83a12"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Salam galbay bang, gw galbay si orange 4jt & si ijo 2jt dah jalan 3 tahun. Gak kebayang bunganya berapa sekarang. Tapi g",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0066692abe6815f4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "386e06e7182d6085"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sama bang ,saya juga baru di TLP lagi tumben 😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-00d5e4fd172bba02",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "98c8acf52d17be72"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mudah²an dapet, untuk berobat, Karena kena penyakit auto imun",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-01caa62bb49bfbc1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "34d5b42f1cea4eb6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat modal dagang bang.. bismillah.. semoga ada rejeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-02c25511a4ced988",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4dbfb2959fabf570"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Anak Ngaku Ibunya Meninggal Setelah Diancam DC Pinjol Lewat Chat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-044716b946829fc5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d93fe82889940669"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "saya sangat butuh skrg buat byar sekolah mau ujian",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-04fcd8c08a0cebe3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ddd57c8fac2a9742"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cara aktifkan akun terhubung nya gimna bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-06b216a2b8fa0d13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ed8673283db49dce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah mudah2an ada rezkinya.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-06c2b9b6da81e0ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9b954b3c418dcae4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bahkan bank digital ad aja skrng mke paylater ,mlahan ada loh apk  paylater tapi mke sldo dana kita dptong 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-090c9d47ee1d851f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dc38543853c5fbe9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makasih kak buat motivasi kita disini semua. Semoga lebih baik segalanya aamiin.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0933daf7ff7abfb7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5b32087841de648d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kemarin ada fc ke rumah saya bilang ha ada uang mau datang lagi tgl 28",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0c81e08488a28e1a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8978af954183f935"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat kebutuhan ngrawat kakek yg udh sakit\"an dan ibu yg sudah lansia\n😢😢😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0db1f716141ace69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "106c31c0d1c7dc63"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ilmu banget untuk tunda bayar. Terimakasih mas yodhi dan narasumbern.Semoga Allaah mudahkan untukku membayar semua hutan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0eaa06d2d01b68ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3a2b901db7f3c3e9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya gak pernah dapat daget nya bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-0f01980ab3f056b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f56535517edade6c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cerita kog gk ada ujung2nya gk usah ceramah min yg nonton bosan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-138e202003aea40e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8585ad03654be99d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilaj bang buat nambah nambah biaya nikah aminn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1571f5ab2fe150cc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "25523dea3e19dba1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mantapp bang semoga lancar terus rezekinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-158fef29b48d8958",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "721b67df01cc2a02"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantaff Padukaa...😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-15b33f378678db25",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "91be23a629bf11ff"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "subs baru bang, mudah2 uang ini bisa digunakan untuk kebutuhan sehari2",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-15c4a702d9b19cb9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1726818a676290ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "4 Tahun Jadi Field Collector Pinjol K**: Cara Kerja Penagihan, Target, dan Realita di Lapangan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-18c51c5e0ead5014",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "64f0332275640971"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hahahah kocak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-19a17f03453800e0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6a74fc97aff47587"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Selalu varo bukti2 kejahatan bukti y sandra enjo2 aja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-19e5f5883b5cb8a6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c51eb3183405c1f6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bos saya mau bikin gerobak buat jualan udah luntang lantung kerja 5blnn belum kesampean. 😮",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ac0ad1f9522fb67",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c388f81e479c9edd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bangsaya mau wisuda miga dikasi hadiah sama abang hehe",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1bac7124d0eab843",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5b36b2771a73bd40"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah . Moga ada rezkinya bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1c1bb3bae8609a66",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "891d1a635dfdc260"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Susah tembus nya bang udh coba di aplikasi lain jga gak tembus padahal belum pernah pinjam",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1ca3fa5b694ccae8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6eea6725c23d6d57"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang mohon info apakah Easy cash ada DC nya ada di palembang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d5afe3995d90616",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f770b3f1d0c3c709"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sebaiknya , Sandra, Kayla dan Nadia .... Di Kardusin aja .",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1d98ce2a5c446493",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "32378a0151711dfc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udh di fase capek bosan alur \"gitu\" Aja.. Cpk.. \n.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-1fe10791448e8bf2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "979ceb16621b0e8a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Channel paling kocak. Hutang di mana mana malah tersenyum sambil ketawa ketawa. Abang ini pasti orang kaya tapi sengaja ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2126c4caeef94591",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "72f22b03b8d54cac"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semangat bang, semoga rejeki saya hari ini ❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2188b09acd3bc63a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "daa808b7e341ae1e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Itulah kenapa riba itu haram 🗿",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-21d547ed6c7532c3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0e156569d79e2d5f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir mang sehat slalu murah rezeki dan slalu hoki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24a43aa798057ee2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "964dc5f3420bbcd3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Butuh daget buat beli sepeda bang, lagi butuh banget buat kuliah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-24d7975d4eab26ed",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e85c5ac1c3977c16"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kasian mutiara selalu di siksa sandra yang sangat kegatelan tapi semoga sore ini kejahatan sandra gatal terbongkar karen",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2641e60cd94e00e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c129403be02d0a77"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Alah paling cm judul doang nt ujung\" nya ttp bebas bosen min",
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
            "392da4e13ec393f2"
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
          "id": "auto-270ac4e7c5257c75",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "983db297f55048c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "habis ngonten utang lansung di lunasi semua wkwkwk",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-272bcc30c41cd836",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e787cb1d039862e5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sy mengalami hal yg sama super dahsyat mengagetkan ,bahkan sangat menyakitkan.\nPasangan sy melakukan pengajuan pinjol se",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2732ce045fe32918",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "31f6c4cc519d70a6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kren abangu yg satu ini,AQ punya hutang. 500rb ke akugak laku aj di telpon terus 😅😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-27ff0c1a100fbeb9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "08d843c2afeaea65"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Laporin aja ke polisi sanra sama kayla pasti meteka itu biangkeroknya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-297fafcdaa38405c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e7702fe7d3f246e2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya udah subscribe bg semoga dapet rezeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2a8ce25cb75da61c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5157c16308cd3d5c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap banget bang, saya belum pernah dapat giveaway seumur hidup saya☹️",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2b2ccf7536bbea82",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e96134e9d3cad2a3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dikuatkan buat ibu ibu yang sedang terlilit hutang pinjol .. karna dulu saya merasakan bnget...tekanan dari sana ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2cca1462bf4212f2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7d8a42c01bf4a747"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dana kaget, smoga dapat , pengen bayar kosan hari ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-2dd5f6ff0b78af2d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "350d30afaae472db"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah  semoga dapat abang ku buat modal",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-30461a137ebbbec2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8aded50155223461"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gabisa woii",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3270430476e4baf2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "50c14d9f87bad1f7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tadi aja saya dimasukin ke grup di get contact sama DC . ada lumayan banyak anggota. antepin aja🤣",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-327dff409aad7421",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a1fddcc2ebe47f5d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya lagi nyari kerja di Bekasi TPI blum dapet kerja skarang sayah lagi numpang di  kosan temen GK punya buat makan",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-34d0acd05105a5f6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c028e6e48becf273"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tiap kjhtn si Sandra SM si kaila KLO ketauan kok di biarin aja knp sih pa sud 🙏🫣😇",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-36cd6627f14dbd5b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2e7f38a8f5973f66"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Syah dh sabre. Bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-370d3e644cc4dd72",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6f3e87f398748a64"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Keren bang 👌🏻✨",
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
            "0a8b169acc6b9f5a"
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
          "id": "auto-37e3f2a5e13122c1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "abc0c5d9154603b7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapat...\nBuat pulang kampung bang jenguk nenek yang lagi sakit..\nSemoga dapat aminnnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3a200edcce388bf2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f0c9514a4c7309fb"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Heran , orang jahat spt sandra kok selalu lolos dari hukum krn sdh ber ulang2 berbuat jahat !!!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3b4798d60383a4a7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bd909116f63b0cea"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim Bang,untuk kirim Istri dan Anak di Jawa,Posisi lagi diluar Jawa Berjuang Bang...\nsemangat Bang.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3df5ab32112bef78",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6e24c86f424b91c7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Anku sprti itu sok mnjdi tulang punggung kluarga sejak orgtuany cerai Dan ayahny lepas tanggung jwb.😢😢😢😢tdk pernh mengat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3df8156200c860b8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fe12e919ab1f30d9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim, mudah-mudahan🤲🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3e1c90bed8c1f00c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8d9ca41eee96119d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah Ya Allah semoga dapet buat nmabahin modal nikah😢\nAmin🤲🤲🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-3e66ad271b5bdbf1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0615c744583b452f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim moga aja dapat rezeki,untuk membiayahi kakek saya yang sedang sakit\"tan😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-40cf708326ce6076",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "63a231cd37ce25e2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "buat kebutuhan sehari-hari bang buat makan, lancar terus rejekin nya abang sehat selalu, dan panjang umur amin🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4120401d7027a974",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "40e281ce72e35ecc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Butuh buat anak sekolah bang, smoga Abang nya sehat selalu dan lancar rejeki nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-424ba8784650f9ab",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "593e7d3073cc31e5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lanjut bang semoga sehat selalu amin",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-42c35d404e1cbc26",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7f1bcd2bd0da7697"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Telattt, saya belum dapet dapet abangkuh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-43aad8b6cb76068f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2c4b5f789b342647"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah Jumat berkah bang😊",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-43cc804e121d356b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6d8f2278a2a45cf6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah buat bayar utang dan beli kebutuhan di pondok",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4440b4b46467be2f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "27996123ed38eac9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kita kasih bintang 1 aplikasi pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-457608c4bea6258c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ffbef6e96bfbad07"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ketawa dikejar depcol yaaa😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4622ee61fbd85722",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f29c6a54af5d685"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asalmalikum bang semoga lancar rejekinya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-464a67b488cecfc5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "06dbd19efa08cd8c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Msa naro tas asal aj.kan uda tau lgi banyak pembeli..bisa aj ni pak sud nya  aduuuuuhhhh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4682128fbb75487e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "04963d7624e3f9e1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asalamualaikum hadir selalu abang ku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-476e1f73dc123fb1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0d7a9ef118223ef1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga dapat buat pulang kampung karena istri baru sakit posisi disorong pulang kejawa",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-47fa09018933dc7d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c78b03a6d873b3de"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "ya intinya sama aja sih dgn penagih di perbankan lainnya. yg penting menagih sesuai etika saja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-48a81391896b57f1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2b018831c827cb7f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dari dulu gitu aja  cerita di buat muter 2 yg nonton jadi bosen",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4abd3305a46148db",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3ebf387cfb42f36c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat berobat mamah semoga dapat🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d4f281159ee5198",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "aa9f4adaafc21199"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah mau bang buat beli baju sekolah buat anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4d9fd84d9195c05e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f77abdcf4c626ce4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Akal akalan penulis dan sutradara,lebih mengutamakan cewek jahat,sadis.",
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
            "f2a51b754ab5a210"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-4fc727dc6f0fba19",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a027f1115704caa3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tuntut,tuntut,tuntut blm tejadi semua hoax",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-54838eae0ed0262f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "595e0c99cc6c58c3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim mudah -mudhan dapet rejeki dana kaget buat bayar sekolah anak 🙏🙏🙂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5580b94d8cb7645b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "96a89e11ee58e483"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga real bagi saldo dana nya..\nAlhamdulillah kalau di tf",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-559cc77827c7bcf9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7787e7e1db7b5d99"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang saya butuh dan 500 aja untuk lunasi pinjol bulan ini, mohon bantuannya bg semoga menang giveaway😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-561c559b1e88ae5d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0c6700187665859d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilahhh bang saya butuh buat benerin motor lagi turun mesin motor nya buatt jualan keliling 😢😢😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-564f20e8bec56c42",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c877be1b95aa3f0d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gak takut mertua lagi bang😀mau coba2 ngutang lagi, 😂sama udah gak bisa lagi bg😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-570c2bd162816ade",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eeeadddf1d55086e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yang baik menderiita  yang jahat ndak ada balasan dari kejahatannya.Pemegang rahasia utama meninggal semua.sutradaranya ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-5e34cc38c52cfad1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a506aa62ead34904"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tapi kalo menurut saya bang kalo kita punya hutang sengaja ga di bayar dunia akhirat bang di tagih",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6359767dd3fcda25",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d57fe63be1db6e7f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😂😂😂keren om",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-64533873b644cd7e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "df2dd753c1584838"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "aku aku tahu nak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-649fde5f5afd4f5c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cf96db912140a305"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jabar hadir, smoga dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-66f045b05c7a730e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a1eb8037d1598c44"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kenapa harus di samar2in gtu kek orang pelaku pidana wkwkw kan dia emg kerja klo sesuai ojk ga perlu takut",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-673fbd8a0528dc8c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1458cc5838a9b4b6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Anak saya temenya mimjam 5jt  pakai ktp ansk saya tak dibayar sampai menumpuk yng dikejar2 anak saya sampai jd 20jt saya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-680b4a5f203c9dc1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5aaacf97dd261052"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tak sumpahi sandra dan kayla nggak ada laki2 yg mau sama dia, soalnya orangnya jahat banget aku sangat kesel sama dia be",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-691b06d3011051e5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0886d660ccec33bf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mut kamu harus tegas jangan lemah sandra kaila harus tuntut mereka",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-69897dba70b91827",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "50b7ae9bcfa11a9b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga penagihnya, semua kehilangan keluarganya. Ibu, anak, istri, kakak dan adik",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6a08c32fd3a6c03c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "84716efbbf065bc3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Halah boong pas situ video di potong",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6a813a27a7ae8359",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f6dfd66e39403cbc"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penjahate wes ketahuan tapi di biarkan gk di penjara miak sama ceritanya gk betmutu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6ccde6ebd4dcca72",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ea349cdfac59cb60"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "MUTIARA HANCUR !! Sandra Daftar Pinjol Dengan KTP Mutiara - TRAILER MERANGKAI KISAH INDAH HARI INI",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6d19cabf72420eff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3daecdf775869308"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makanya kenapa kapitalisme itu gatel😅😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6ee01f5dfcdb2748",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ec7149a68c9931d9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pusinggg sama mutiara aj oon kenpa si sekli\" tuh sandra di tangkep am kaila",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-6f15f9805e2e61be",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "660b487d514bf2b7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah untuk bayar kontrakan bulan Desember per3bulan, saya sedang tidak kerja2 bingung pusing dengan semua ini😭😭",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-70bc0b210282cded",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "860529df403cb7cd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hati hati sama pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-71ec53711971dc44",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5f45f914a4aa7c18"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Muak sama pak sus nya, ranti go jujur, lagi2 menghayal",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-732b7620a99361a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "00a9c5d8f11c2a4e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dosa2 almh ibu tsb ditanggung yang ngancam, ingat itu para DC catatan malaikat lebih akurat dari pada pinjol.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-74c2c0bf2470bc27",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "51eb5abf84753abf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah semoga dapat rejeki,buat kebutuhan sehari2,terutama untuk anak n istri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7524f61d2114b3ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e58f862889619369"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga ada yng di ACC..tapi ada pundi tagihan 100k di tagih terus sudah jadi 700 k parah .di aplikasi pinjaman berhasil dari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7543838ed293674b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b150c9d88b74aa9a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Asli ga d ACC TPI ada yang nagih d tlpon Ampe datang kerumah 1 kali.\n2apk yang dah punya nama.\nIa ga d bayar lah uang ny",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-765655606a286446",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "102b04d10b372577"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mutiara terlalu mengalah. jangan mau di jahatin terus mut. bangkit",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7690d059c9921b23",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4c69a89527b7a953"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat buat kebutuhan sehari2 bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-774d8c65151efaf6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6617751ba771f5e2"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "smga rezeki untuk adik2 aja soalnya serumah pada sakit bertiga bg",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7788f0eb72c878d7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cf49ffd251a7c1c7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan pinjam pinjol apapun alasannya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-791b657b34653f9d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d1f0c37c6da823f4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadis semoga dapet, lumayan buat bayar hutang🙏🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-79cc384a7199c4f5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a09a346dd40c3153"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Inna lillahi wa Inna ilaihi rojiun ..\nPinjol judol bank mekar bank emog, itu perusak negri ini yg sengaja di pelihara pe",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7a1f2a101f717478",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b09eceda29b58922"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Abang nya keren.. Hutang sama pendapatan youtube nya tidak sebanding.. Pasti youtube ny gede ya bang penghasilan nya? Te",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b77291d36881800",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca7782ef9be825cf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga aku dapat buat belanja sehari hari amin🤲",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7b7fd40d1265a497",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f0328929679381af"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah semoga di kasih buat berobat😢😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7bfb7d2b14de229b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a692b32753ea39a9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ada\"aja abis ini apa lg kjahatan yg mu dbuat Sandra capek deh... Udh sih abisin crita nya udh gk sru gk srak juga nonton",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7c8bd8e057a7d72e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "203f1886196bea1c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sya suka sm ktawa santainya...😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7cbebe7d2cba2088",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f453091f0aee93fd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya udah 2 bulan gak kerja, punya cicilan 100ribu / bulan.\nDemi allah",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7cf7244f71bd3f40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f9fef83b9d2cabe6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Penjelasan sangat jelas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7ddf78cb432c4244",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9b27905654f710e1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lagi kepepet cari sana sinu eh nemu konten ini langsung di Sabcribe & like gak tau komen komen orang pada berterima kasi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7e2992c431aef76e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4735a126860f4906"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "butuh dana bang pusing hidup kerja susahh bang GC dpt kerjaan trus buat ngisi token bang dah bunyi mulu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7e878672fd08e422",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5c714cf705bfaaaa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ko tampilan tidak ada bang.padahal semua nya ud sesuai tutorial Abang nya.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-7f6b2c6b93c2d235",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "657d2c8ad31b8321"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "BISMILLAH DANA KAGET BUAT BAYAR KULIAH ABANG, SISA 3 SEMESTER, GAMAU BERHENTI DI TENGAH JALAN",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8015e2d557d7d7e3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b571bbcf70230a35"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim buat bayar kuliah SM bayar kost bang soalnya udh nunggang 2 bulan belom bayar kost🥺🙏🏻",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-80dbd1ac72bd8909",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f4494a9048f66d20"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Gak usah takut,,mau dc datang kerumah gak usah panik,,bro",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8169c5645129cf10",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b422db27ce682f4f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga rezeki anak saya.. perlu buat benerin motor biar bisa kerja lagi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8243a6e39d4173e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "dc8a7437aebc1fa4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah bang dapat daget buat tambah2 bertahan hidup sama istri di tanah Sumatra habis ketipu kerjaan tambang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-84b0ea77cd41eee9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6d0b59d023b3e869"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat dana kaget semoga bermanfaat buat aku dan Abang nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-84de89f2c4d7d236",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8d95944a4b6d648b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapet , Aminnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-868fc3b11ed8cc52",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "236f128f2a034370"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismilah buwat bayar kosan udh nunggk 2buln bg mhon bantuannya aminnnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-879e729b5f05526a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a3ad1eefdc442245"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangam pernah terlilit pinjol",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-88fbdb4696af5759",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "712089853c73c332"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim semoga saya dapat, saya butuh buat blanja sehari\"",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8bb2a244cd04946e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bd5ce3c4f536e1ba"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lama\" nyebelin nonton .mki mls pasudnya menyebalkan berpihak nya sm iblissandra;kayla.bkn sm mutiara .jd orang jgn terll",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8ca47747c9061f40",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "92359fcd6c61506e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "apsen yang kecekek pinjol (gw mau jual laptop gw biar bisa ngelarin jir, untung tinggal sekali bayar lagi)",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-8cbb8c37a52bec8d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f93b68248bd994b5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kredit pintar katanya sudah ada di sumatera termasuk Palembang bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-90c93bd1b2d76d31",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7b178d21a73ce83f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim buat beli hp kuliah bg , hp ku udah lag bg padahal lagi nyusun skripsi , rekam2 data responden ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-935bb5ac3db3d8d3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8620603dbe9cdf67"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Info bang saya tiba\" Ada tagihan padahal tidak ada uang masuk dan tidak pernah instal aplikasinya, tpi dia punya data pr",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-962f98e53516d2e0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6c394fda75a91ff3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Demi Hidup Mewah, Suamiku Terjerat Pinjol dan Membuat Kami Jatuh Miskin! | Kisah Nyata",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9855bb38d9bf63fc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "49d78eedcb21585f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang bismillah semoga ada rezeki",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-985bb34eb869817b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3f0a0521be46d9f7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sinetron cuma mengajarkan kejahatan kelicikan selingkuh...heran ma pikiran sutradara nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-98e3addcb9705637",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bfaecfc446287e11"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Konten GK bermanfaat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-99dc89ce2095f567",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9be2cb23271c8b02"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir abangku \nSemoga beruntung pakai beli obat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9a06164d621b666c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e3d42884cd7c2f7d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lagi butuh banget buat uang Study Tour ke bali soalnya ilang bapak pasti marah😢😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9b4b5be217ee8ed6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "30bfedd8923915af"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SEMUA SALAH HUKUM YANG TOLOL DI INDONESIA INI.\nDC PUNYA BANYAK NOMOR KOK BISA??? APA CYBERCRIME DAN PIHAK2 BERWENANG JAD",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9c385adb1b0f1b17",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c99809179cb59ef9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Akhir crt Sandra dan kaila psti msuk pnjara...😅😅😅",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9ca8fd395cd75280",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a72771c4d168bfce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bicara gk mungkin bolak balik hadeehhhh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9d0396ba1e7fc76d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "553ed59d89db981d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya baru bang mudahan dapat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9d9c79cafdb8fed9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "cd6d6151be7fb913"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol &amp; Wapres yang Mundur",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-9dd87c57f2545aeb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bf3be97a8099200a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pak sut kok selalu nyakitin hati mutiara terus...jngn tanggung 2 ..langsung d penjarakan aja Sandra...Ama Kayla penonton",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a0847a0549ba39a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "98c8081a87134c89"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Orang² MALES produktif kali pegang DUIT.",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a0c4459f67a13a5e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5e7a5dd753508837"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang saya salah klik di pinjaman samir lumayan gede trs jam itu juga saya hubungi pihak samirnya  akan di kembali kan tp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a1dd034f3246fd88",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "db2a1950a16799e4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah semoga dapet,butuh banget untuk bertahan hidup di rantau bg",
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
            "26cdb7c59cf82fb0",
            "1d02b4409509ff2e"
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
          "id": "auto-a3d58254133fec59",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "49dfd62829a3d0c9"
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
          "id": "auto-a4688f7b9fa5b88f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5180ce4eb8f8485a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "semoga beruntung kalau dapat buat beli paket data bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a5814605a215a6de",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b8992e66222f35f4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Yg jahat tu sutradara ne diya cuman memeran kan tapi Kana pa yg jahat di plihara terus gak pernah ketangkep polisi",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a5a3dc865bfa3e44",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e97e455985406f5d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir min",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a6ce3157ee65ef8f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "15656357d26e39c4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya bang blom dapet ni lagi buat modal jualan ka saldo kosong bangun dari nol lagi karna bis dapet musibah istri abis s",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a76e81d742862512",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "185cce460ae14d7e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalau Banyak Pinjol.. \nKemungkinan besar main Judol😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8c3ba7019dfdbb2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "92ecda729ae2a17a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pak Sud.pintar banget 👍senetron nya menghasil kan cuan yg banyak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-a8cdaf0b60a2da82",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d371e29c2b988072"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir bang .. salam dari Manado semoga rezeki anakku besok ulangtahun ke 4",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ac24e3b0ffd6b8a3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a6c08b3097ccab00"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pelajaran untuk kita semua,se mepet apapun kita,se enggak bisa makan apapu kita Dan walaupun kita ga punya uang seperak ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-acfe10331b5076d5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7a133d9694dee17d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bang singih kan punya utang pinjol apakah abah pernah kredit motor pas masih ada utang di acc gk sama pihak dealer?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ae50be57f5b7d2e8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1cef6d80fddb659d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Laporkan pinjol ini utk diproses hukum krn hy pinjol illegal yg nagih pakai ancaman. Gara Gara pinjol ibu nya meninggal ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-afe70a3a1f6ce5cf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ca611a420a56981a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sinetron yg paling memuakan  dan membosankan kan kejahatan s Sandra rak henti² nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b18cfe8a3da4fc9d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "ab8e56f296bb5fc6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udhlah ga usah pd nonton kl ceritanya begini2 terus,,, PU nya terus2n  menderita dan tersakiti,,, lama2 muak jg liatnya,",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b2d2e7fb57e2f5c9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7970557061ac1d23"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya sudah coba tapi tidak muncul dana kilat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b4927cf975d487eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a75dd7d25dc85385"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mbknya org tanggung jawab dan tau diri suami nya mendukung bgt jadi kepala rumah tangga  keluarga nya org baikkk .jadi p",
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
            "ec502a709250bf54",
            "4cffc2fe256a75b8"
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
          "id": "auto-b5e151d973d30d83",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "36e44a040ffc1f81"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mau dc datang atau gak datang seruput kopi hitam,,,,😂😂😂😂 jgn takut sodara",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b657c66e8bdee1fc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "93a7e3b0f06de148"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Prinsip utang menurutku...butuh 500 ribu ambil hutang 500ribu jangan sejuta....karna kalo ambil hutang lebih banyaj dari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b67deae780472832",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6a0c6ab998b2abd0"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dari dulu lapor polisi lapor polisi mana buktinya ngatasi satu orang saja gk kelar",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b7f2391d22b951c7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c0346eaa7c495b4f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nipunya mantap bang😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-b8148369d22c72e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5e62d9da602ca082"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gass lahh pasti win ini saya😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ba4234e46051b638",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c1787eeb72d496f3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah . Saya terlilit hutang mas",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ba428ffc173df933",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "efebf71b95b65c09"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Untung gwe gak pernah pinjol dan kalau itu terjadi d kluarga gwe gue samperin perusahaanya gwe cari DC nya gwe bantai sm",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ba85810a30252500",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "202688cbfca79e61"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillahirrahmanirrahim,buat ganti baterai hp ,udah kembung 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bb3d253fa8eb8fe7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "130d372c866fdc2b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah untuk kebutuhan anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bc6701cf5e770cbf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "048bf30cc1e145ee"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ternyata anda Dewa Pinjol Kultivasi tingkat tinggi bro😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bd0d2de4a425ca8f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "37e7931073936dbf"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Basmi pinjaman online dengan cara menyerang tanpa ampun tanpa kemanusiaan kepada musuh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bd4dd7954a496c5e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8f0f40bb82049d83"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga tercapai untuk membelikan anak sepeda gayung dan tas sekolah yang sudah rusak dan perlengkapan sekolah anaknya  🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bdba1a3777dc1255",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "99161dcc4f617d75"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga lancar terus rejekinya abang,tuhan memberkatimu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be2d332d33ef4373",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "eefcdb4b04b994be"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillahirrahmanirrahim semoga ada dapat dana tambahan buat bayar pajak karena hampir mendekati",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-be91b7d242205ead",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6858a6b87ec11d12"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sinetron gaplek GK kelar2 muter2 terus .GK masuk akal kok ada orang di dolimi terus2 San kok kayak mbodohi.cari aja judu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-bff6891e81fecfb5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "49a89d0b0f4f64ce"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bismillah rejeki ga kemana kalo dapet buat nambahin beli kado anak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c12dbd58ebcd7de2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a9a9033a10ab8597"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol Datang ke Warung Kopi😂 Dikejar Pinjol Sampai Mau Pindah Planet!",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c24ff94e9930025a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3522f068d37c55e3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Cerita tbah ngaco terus\" an ga ada abisnya kejahatan yg di terima mutiara bosen liatnya  tbah ngaco .",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c2726c58d7c0695b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "17ee7fd3bcf4f81d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya lama\" jadi kesel dan enek, sama si mutiara dia b mau penjarakan si sandra n kaella,apa\"selalu g ada bukti jadi muak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c2c0a1287aa35d0a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "3824378a3fa4b866"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga dapat bang buat biaya nenek saya berobat bingung nyari uang kemana lagi 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c4440a7403681dc4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "daf26e8a0e6755f8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "beberapa aplikasi kok gak muncul bang di iphone",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c5e47b4e5da62594",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a3da0e8f2c92beb9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dari dulu selalu hindarin pinjol & paylater karena klo ada utang kg nyenyak tidur gua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c5f00fb259648cca",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "374633fbdcdaaab6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Lanjcar\" kak ngontennya, moga dapet buat biaya ongkos pulang dari Palembang udah bingung banget gimana pulangnya😄",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c60e658dbacb2b2f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bbda4e29260adfa7"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SAYA MENCOBA PINJAM UANG DI 7 APLIKASI PINJOL INI ! PAKE KTP SAYA ! APAKAH BISA ?",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c63dddc0c328c11c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "14f3359b76610e7d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap bang. Buat kebutuhan sehari-hari",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c65ea7d3ab99a335",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d5ea8d98348e4632"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Mantap bang, lancar trus usahanyaaa🎉🎉🎉❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c701a1d8cd73b97b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d77038190355f5be"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "SIAPA yang belum kebagian SALDO DANA GRATIS? \r\nKomen KEBUTUHAN KALIAN disini nanti dapat giliran dapat !",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c729be3ed028cbfb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6f6f7d29f552507f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Biar saja klu hancur pusing liat sinetron ini kejahatan diagung2kan, kebohongan dipertontonkan bukan tontonan yang mendu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c969450a7a72551c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "45f52ef32efef558"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Makanya gw lebih suka ngajuin pinjaman nya langsung ke bank,koperasi,Ama orang nya langsung. Gw paling anti yg namanya p",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c97d87e7bd0e9771",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "83a649aa909c3f42"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "pinjol, debkolektor, mereka punya organisasi yang mumpuni, mereka berani bertindak sesukanya karena mereka tahu kelemaha",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-c9ea37c89f865a15",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "333dbc1770f536f4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ga pernah dapet",
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
            "1412dba2fdd7e5f4"
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
          "id": "auto-cc95502b1364feba",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "053ccf8aa97f3cd8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Dia akan dendam kepada debt collector itu seumur hidupnya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cf6b0b7e3ebee648",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5221fef951cff8d4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bissmillah yaallah diberi rezeki lewat abang ini aminnn",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-cfcd66629d80ab95",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "fd3f2f621efb8b0f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "DIVO jg sm. Sudah ada beberapa WA dr DC DIVO yg mirip seperti itu. Malah pernah ada yg dtg, nawari diskon tp yg aneh mlh",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d0d0da94b7478810",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6863704d0e2b811b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "hadir bang, salam dari kalsel👏\nmudah mudahan dapet, buat bayar spp",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d177c3aa1b28fbcf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a9a6addc21cba186"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Basmi pinjol 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d3eca7d3485314d5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "6d0541cfa4cafd1c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kasus gini emang gak bisa di pecahkan minimal di kurangi lah apa sih kerja polisi ada ribuan di Indonesia ini",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d531744bba0ad6b2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "49c8e7af2f5aa26c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Terimakasih",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d5a1190f08a5262a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0fb68ccfec6025dd"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "😂dobolll",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d6f0680d399be0fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bb41cde64a014e7b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kapolri Akan Blokir Pinjol Dan Jud0l #trending #breakingnews #kapolri",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d7ce15a66fe78560",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "474cb90ae3b46f16"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "mf bang...mau tnya.itu pinjaman yg di kredione sdh berkurang bnyak gmn negosiasi nya bang utk byr pokok saja",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-d8fd4c6d634e5dbf",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "120722be55f29000"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah bang saya dan istrisaya  mau promil..semoga dapet🙏",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db0249676bcbf31f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "19eef1f3a4615705"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gagal bos",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db5f7efcf3956e1a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b6eb1a930bbfcc74"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "MUTIARA TUNTUT SANDRA KAYLA KARENA PAKAI KTP UNTUK PINJOL - MERANGKAI KISAH INDAH HARI INI EPS 494",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-db811da2e65fe868",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a2905b7850d188b4"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pocong dan Kuntilanak Takut Tagihan Pinjaman!👻🤣 #Shorts #videolucu #dramareceh #lucu #komedi #ngakak",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-de8e845f92e1b3a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0537eafa3cde822b"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "TANPA SLIK OJK?! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA BUSUK LANGSUNG CAIR",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e09ed255f385ff9b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2ac5402ad0351679"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "bismillah buat beli susu anak ku umur 6 bln 😢 suami udah nganggur 4 bulan 😢",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e20d700524a693c2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e9b570ce845d2212"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "HANCUR2 APANYA  YG HANCUR  SINETRON  INI PALING  R U W E T T T😮",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e34e2b257a3c0403",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "631d606e4c43c1f9"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Buat perbaikan motor bang",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e4bb7542a476b77d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "4558f159e6a47a9e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan berhenti disini, Hukum berat aplikasix, DC nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e4f04bf944f6adef",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c30a281cc15ece84"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kalau pinjol kalau belum bisa bayar, dia ngebel dan mengacam abaikan saja.., mereka sebenarnya pengecut, tapi saya heran",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e5ac2bfbc3c8a7dd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "5b81c1117be054a1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semoga bisa,buat modal usaha",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e78449c85c564cd9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "45754ca41acd4483"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir BG smga dpt",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-e85388a29a9c3b68",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e95b4df389a42c0d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sy tdk prnh meladeni. Tetep az dkirim gofood...",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ebf689e34f4dfeda",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8adde82f6c4f87b6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jadi males nontonnya , setiap rahasia terbongkar pasti ujung²nya mimpi/lamunan, lagian sandar setiap berbuat jahat klo k",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-eebd777d7295cfff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1a8bf68e9badcb34"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Trimakasih ilmu nya",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-ef20ff654f29f9ab",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "b99a9dd4440215b1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Udh mumut kamu jngn lembek hrs tegas klo bs bale aj perbuatan meteka berdua",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f2a08a73af56ca22",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "bcf02ac7bf17e56e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pernah kerja jadi DC. Sistem nya itu, DC sebagai mitra aplikasi peminjam, artinya DC ada di perusahaan terpisah dari apl",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f467fd7db95fdb1f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2195a5505b9a7eaa"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Amin bisa bayar, sekolah anak❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f54493e093228061",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9303c47e094cf560"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Saya ada buka aplikasi dan sy tidak mau pinjam tapi data atw sy sudah kasih no rekening karena sy tidak mengklik pinjam ",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f6d41f314d17726a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "f615ffb74148933c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "org indo banget maonya ngutang bayarnya kaga 😂😂😂",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f783682d08529d15",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "77a996a11319632c"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Hadir abangku",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f7ce69c3e65f5fe0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "0442a2dba92d6601"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Sebel  nonton  mutiara disakiti mulu",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f845ea4cbc988880",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "881eb08dbd615f99"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Semogaa Yang nntn tambah banyakkk tambah rameee❤",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-f93c58ddf23dcd50",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d839bd3cc09acd2f"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Bang mau tanya apa kah spinjam sama paylater ada DC nya di Karawang Jawa barat",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        },
        {
          "id": "auto-fc99abc841161657",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "42a9a3753b24d061"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "gw kasih bintang satu dan komplen marah marah gara gara dapat notif penawaran paylatter dari e-commersnya langsung gak d",
          "headlineZh": null,
          "summaryZh": null,
          "reviewQuestionZh": null,
          "reviewedSourceCount": null
        }
      ],
      "articleIds": [],
      "socialItemIds": [
        "5e7a5dd753508837",
        "f453091f0aee93fd",
        "5b36b2771a73bd40",
        "236f128f2a034370",
        "ed8673283db49dce",
        "49a89d0b0f4f64ce",
        "abc0c5d9154603b7",
        "b571bbcf70230a35",
        "7b178d21a73ce83f",
        "fe12e919ab1f30d9",
        "40e281ce72e35ecc",
        "333dbc1770f536f4",
        "f4494a9048f66d20",
        "ed46a231952c4f3e",
        "7e986729f6d4d54e",
        "49d78eedcb21585f",
        "ce93527091fd0532",
        "0e156569d79e2d5f",
        "dce9cdd273f476e4",
        "bb41cde64a014e7b",
        "6f3e87f398748a64",
        "5ec20df98d3af77f",
        "ffbef6e96bfbad07",
        "9b27905654f710e1",
        "721b67df01cc2a02",
        "d5ea8d98348e4632",
        "f9fef83b9d2cabe6",
        "93a7e3b0f06de148",
        "bbda4e29260adfa7",
        "15656357d26e39c4",
        "3a2b901db7f3c3e9",
        "e7702fe7d3f246e2",
        "3824378a3fa4b866",
        "881eb08dbd615f99",
        "e95b4df389a42c0d",
        "a506aa62ead34904",
        "e3c153407a465355",
        "d37f59079a219262",
        "7787e7e1db7b5d99",
        "63a231cd37ce25e2",
        "5e62d9da602ca082",
        "f615ffb74148933c",
        "91be23a629bf11ff",
        "3b506d7a7e186e2b",
        "1726818a676290ed",
        "8720e280796c2529",
        "8f29c6a54af5d685",
        "c388f81e479c9edd",
        "f0328929679381af",
        "1412dba2fdd7e5f4",
        "ca7782ef9be825cf",
        "c51eb3183405c1f6",
        "ddd57c8fac2a9742",
        "fd3f2f621efb8b0f",
        "8aded50155223461",
        "d371e29c2b988072",
        "106c31c0d1c7dc63",
        "8620603dbe9cdf67",
        "bfaecfc446287e11",
        "31f6c4cc519d70a6",
        "593e7d3073cc31e5",
        "a75dd7d25dc85385",
        "d77038190355f5be",
        "786e9eda4be83a12",
        "386e06e7182d6085",
        "7970557061ac1d23",
        "72f22b03b8d54cac",
        "96a89e11ee58e483",
        "891d1a635dfdc260",
        "0537eafa3cde822b",
        "50c14d9f87bad1f7",
        "1a8bf68e9badcb34",
        "2ac5402ad0351679",
        "51eb5abf84753abf",
        "402fbafc51fc01c4",
        "d93fe82889940669",
        "6617751ba771f5e2",
        "b150c9d88b74aa9a",
        "a1fddcc2ebe47f5d",
        "3052bb37073c8976",
        "0d7a9ef118223ef1",
        "350d30afaae472db",
        "6d8f2278a2a45cf6",
        "660b487d514bf2b7",
        "bd909116f63b0cea",
        "595e0c99cc6c58c3",
        "712089853c73c332",
        "5221fef951cff8d4",
        "7d8a42c01bf4a747",
        "e58f862889619369",
        "d1f0c37c6da823f4",
        "84716efbbf065bc3",
        "a3ad1eefdc442245",
        "00bcbc70a9f1f580",
        "5b32087841de648d",
        "e3d42884cd7c2f7d",
        "374633fbdcdaaab6",
        "14f3359b76610e7d",
        "5157c16308cd3d5c",
        "98c8acf52d17be72",
        "cd6d6151be7fb913",
        "203f1886196bea1c",
        "49c8e7af2f5aa26c",
        "7a133d9694dee17d",
        "120722be55f29000",
        "4735a126860f4906",
        "9e2385bb6a9db799",
        "25523dea3e19dba1",
        "0fb68ccfec6025dd",
        "6e24c86f424b91c7",
        "04963d7624e3f9e1",
        "0c6700187665859d",
        "8d9ca41eee96119d",
        "8978af954183f935",
        "0615c744583b452f",
        "631d606e4c43c1f9",
        "6c394fda75a91ff3",
        "c877be1b95aa3f0d",
        "45754ca41acd4483",
        "49dfd62829a3d0c9",
        "64f0332275640971",
        "f93b68248bd994b5",
        "dc38543853c5fbe9",
        "ec502a709250bf54",
        "26cdb7c59cf82fb0",
        "392da4e13ec393f2",
        "a2905b7850d188b4",
        "553ed59d89db981d",
        "4c69a89527b7a953",
        "8d95944a4b6d648b",
        "e96134e9d3cad2a3",
        "e787cb1d039862e5",
        "6eea6725c23d6d57",
        "983db297f55048c4",
        "d57fe63be1db6e7f",
        "2195a5505b9a7eaa",
        "8539ba8a7414539c",
        "2c4b5f789b342647",
        "aa9f4adaafc21199",
        "202688cbfca79e61",
        "3ebf387cfb42f36c",
        "9be2cb23271c8b02",
        "e97e455985406f5d",
        "cf96db912140a305",
        "5c714cf705bfaaaa",
        "b6eb1a930bbfcc74",
        "1d02b4409509ff2e",
        "4e7b0a4b247cd705",
        "c0346eaa7c495b4f",
        "aba0bfb215683edf",
        "b422db27ce682f4f",
        "2e7f38a8f5973f66",
        "7f1bcd2bd0da7697",
        "eefcdb4b04b994be",
        "19eef1f3a4615705",
        "6863704d0e2b811b",
        "f2a51b754ab5a210",
        "474cb90ae3b46f16",
        "c78b03a6d873b3de",
        "b09eceda29b58922",
        "a692b32753ea39a9",
        "f77abdcf4c626ce4",
        "c99809179cb59ef9",
        "c129403be02d0a77",
        "d839bd3cc09acd2f",
        "6f6f7d29f552507f",
        "a72771c4d168bfce",
        "8585ad03654be99d",
        "c1787eeb72d496f3",
        "dc8a7437aebc1fa4",
        "db2a1950a16799e4",
        "130d372c866fdc2b",
        "964dc5f3420bbcd3",
        "f56535517edade6c",
        "3522f068d37c55e3",
        "2b018831c827cb7f",
        "6a0c6ab998b2abd0",
        "e9b570ce845d2212",
        "77a996a11319632c",
        "0a8b169acc6b9f5a",
        "f0c9514a4c7309fb",
        "8adde82f6c4f87b6",
        "e85c5ac1c3977c16",
        "bd5ce3c4f536e1ba",
        "08d843c2afeaea65",
        "ea349cdfac59cb60",
        "4cffc2fe256a75b8",
        "36e44a040ffc1f81",
        "06dbd19efa08cd8c",
        "5f45f914a4aa7c18",
        "0886d660ccec33bf",
        "92ecda729ae2a17a",
        "bf3be97a8099200a",
        "f6dfd66e39403cbc",
        "a9a9033a10ab8597",
        "ec7149a68c9931d9",
        "9303c47e094cf560",
        "17ee7fd3bcf4f81d",
        "f770b3f1d0c3c709",
        "0442a2dba92d6601",
        "6a74fc97aff47587",
        "5b81c1117be054a1",
        "8f0f40bb82049d83",
        "3f0a0521be46d9f7",
        "6858a6b87ec11d12",
        "ca611a420a56981a",
        "5aaacf97dd261052",
        "048bf30cc1e145ee",
        "c028e6e48becf273",
        "a027f1115704caa3",
        "32378a0151711dfc",
        "b99a9dd4440215b1",
        "ab8e56f296bb5fc6",
        "eeeadddf1d55086e",
        "b8992e66222f35f4",
        "df2dd753c1584838",
        "daf26e8a0e6755f8",
        "102b04d10b372577",
        "5180ce4eb8f8485a",
        "4dbfb2959fabf570",
        "1458cc5838a9b4b6",
        "657d2c8ad31b8321",
        "9b954b3c418dcae4",
        "37e7931073936dbf",
        "a9a6addc21cba186",
        "34d5b42f1cea4eb6",
        "979ceb16621b0e8a",
        "a3da0e8f2c92beb9",
        "053ccf8aa97f3cd8",
        "a09a346dd40c3153",
        "daa808b7e341ae1e",
        "4558f159e6a47a9e",
        "cf49ffd251a7c1c7",
        "b9dede60abc56a54",
        "185cce460ae14d7e",
        "c30a281cc15ece84",
        "6d0541cfa4cafd1c",
        "a1eb8037d1598c44",
        "27996123ed38eac9",
        "1cef6d80fddb659d",
        "45f52ef32efef558",
        "3daecdf775869308",
        "98c8081a87134c89",
        "a6c08b3097ccab00",
        "bcf02ac7bf17e56e",
        "fac24490f0d335ce",
        "30bfedd8923915af",
        "6d0b59d023b3e869",
        "00a9c5d8f11c2a4e",
        "99161dcc4f617d75",
        "50b7ae9bcfa11a9b",
        "efebf71b95b65c09",
        "92359fcd6c61506e",
        "42a9a3753b24d061",
        "860529df403cb7cd",
        "83a649aa909c3f42"
      ],
      "_newsVolumeRaw": 0,
      "_socialVolumeRaw": 351.7
    }
  ],
  "articles": [],
  "socialItems": [
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy0Q8qvE0_K-VMrUER4AaABAg",
      "date": "2026-11-09",
      "text": "Asalamualaikum bang🙏🏻 tolong bantu bang buat biaya lahiran istri bingung pinjem sodara dan tetangga GK ada yg bantu😭",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 2,
      "id": "fd41279eb2d8d931",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bf26c7c6260ab29f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJnJi0Ig7Im7zQSb94AaABAg",
      "date": "2026-11-09",
      "text": "Bismillah bang buat bantu ortu buat bayar kontrakan",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "670b32f03bcd74be",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1bc053390cfaeef0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwKfFPVg2j8qnkf9tp4AaABAg",
      "date": "2026-11-09",
      "text": "Bismillah buat kebutuhan buat anak 😢😢 Kasihan sepatunya udah sobek",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "e661874b93550106",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-db3da7c1fea43f8f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxPuWHRnljtrchr4Sd4AaABAg",
      "date": "2026-11-09",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp710.000 : https://s.id/7lZka\r\n- Daftar doang, Dapat Rp380.000 : https://s.id/saldodana2",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 173,
      "id": "1bbb8660bee75b57",
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
      "externalId": "9kxwiI61ueo",
      "date": "2026-11-09",
      "text": "TANPA BI CHECKING?! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA BUSUK LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 23423,
      "id": "3c884789360aa9e8",
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
      "externalId": "UgxEV-mfMAkMDWoieq54AaABAg",
      "date": "2026-11-09",
      "text": "Tolong bang buat anak bayar sekolah,saya sudah pusing🙏",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "7cc8dfde8a390764",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4ee1662ff46b2805",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJEYfF28h3AMe5ZKR4AaABAg",
      "date": "2026-11-09",
      "text": "Tolong kak aku udah lama saskreb tapi belum pernah dapat",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "57f0ed64496205f0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-65f1d5c112513e53",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwe63hGtKXIUiA7h1J4AaABAg",
      "date": "2026-11-10",
      "text": "Assalamualaikum..buat modal dagang kopi nih..bos qiu",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 2,
      "id": "91aa496583328435",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e3b34165947c655c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyeUhqgIuInksKpBbZ4AaABAg",
      "date": "2026-11-10",
      "text": "Bisimlahh semoga ada rezekinya dari si ABNG ini amii",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "80fc1b62633b10dd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8c8aef2380663a69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzvgG5UkxdmmyB1Lpx4AaABAg",
      "date": "2026-11-10",
      "text": "Bismilah untuk bayar anak sekolah bang 😭😭",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "dd2432a16c94a234",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-024ee17325c0d7f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyk5Ln1oi-ugaoxP4l4AaABAg",
      "date": "2026-11-10",
      "text": "Bismillah bisa dapat, buat lahiran istri aamiin🙏❣️",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "3a7cd62697b7eca4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3d4ce7df99b00e98",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxnB72FF3wxSd6QAEp4AaABAg",
      "date": "2026-11-10",
      "text": "Bismillah buat kebutuhan sehari\", udah mau setahun nggak kerja karena fraktur",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "d651e1f951f5fba3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9753a1f3092bc06a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxU0BbL6HePxVEDxu54AaABAg",
      "date": "2026-11-10",
      "text": "Bismillah mudah\"an rezeknya\nUntuk berobat anak ke RSCM",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "10e046c7f3b3b6ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-52a5315e6836fa97",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx4aIpuvg4gyFa-nxd4AaABAg",
      "date": "2026-11-10",
      "text": "Bismillah utk makan. Ngerantau sendiri udh 1 hari blom makan",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "2117ef18b93d7f53",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-505546f68827fded",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGWHlQHyyXGypb3UZ4AaABAg",
      "date": "2026-11-10",
      "text": "Bismillah.\nBuat bayar tagihan dan hutang bang \nSemoga saya beruntung 🤲",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "df0d616f9edc3c57",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-658d26f6d794cb2b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyKLDLno27S5Su9bDh4AaABAg",
      "date": "2026-11-10",
      "text": "Bismillah. Smga dpat dana kaget. Ni. Buat ibuk brobatt. Bismillahhh",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 2,
      "id": "03ac757d0e8d4cad",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f581fafa8e17c1ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwus9l_rsh9tmmcTF94AaABAg",
      "date": "2026-11-10",
      "text": "Bismillahirahmannirahim, bismillah kak buat ongkos berangkat interview keluar kota dan minta doa nya semoga di terima",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 3,
      "id": "73097a3885de68f9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-502526ffdc153d6a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx3egApxik3mlV9bB54AaABAg",
      "date": "2026-11-10",
      "text": "Buat berobat anak, bismillah semoga bermanfaat dan dapat",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "9c19a7305822a946",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4341ef10df9bf5ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyvq8qVyBXxrnmQLgR4AaABAg",
      "date": "2026-11-10",
      "text": "Kak tolo bantu kak saya mau cuci darah Minggu depan",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "1a2da85adb4db1bd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cf171fcd44c42919",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwkP0In8rpdWkuHdnB4AaABAg",
      "date": "2026-11-10",
      "text": "Ko do akun gw ga ada tuh fitur gitu pinjam dana cepat pas di ketik",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "c8509866392b12c6",
      "eventId": "auto-0cb3bd90b70e093f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx2OJYsANUICn8rXcV4AaABAg",
      "date": "2026-11-10",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\nInstall, daftar dapat 670.000 : https://s.id/CdVZ2",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 58,
      "id": "3244c6fccc6afab7",
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
      "externalId": "Ugw3CR8qG129pqzesHF4AaABAg",
      "date": "2026-11-10",
      "text": "Mudah mudahan dapat buat perbaiki motor buat biar bisa ngojek lagi",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "8fa8fce18b1f08a1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ea14cae1f501d614",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBeXHElzQ0uVyFRoZ4AaABAg",
      "date": "2026-11-10",
      "text": "Mudah\"an dapat,, bisa buat beli obat ibuk",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "b23aa8cad69c8163",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9f1a3b8f1e996791",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "RBLIsUhbvEM",
      "date": "2026-11-10",
      "text": "PINJAM SALDO DANA TANPA DANA PAYLATER DANA CICIL - PINJAM UANG DI DANA - PINJOL MUDAH CAIR 2026",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 18413,
      "id": "7690db5eb5c57e1d",
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
      "externalId": "UgwXeGf6sgkRArCmj6F4AaABAg",
      "date": "2026-11-10",
      "text": "Semoga bermanfaat dan lancar rezeki nya",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "05c235dc5d79e275",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-91e83b06cd8ebf50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6sWYHpoJFh0ug7F14AaABAg",
      "date": "2026-11-10",
      "text": "Semoga beruntung bang saya butuh bnget buat pempes anak",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "76d6a40c8f29b9bb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8a4f0437039a554e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxMveV1PxWfVczmvmt4AaABAg",
      "date": "2026-11-10",
      "text": "Semoga beruntung untuk bayar uang sekolah anak2 🤲🤲🤲",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 1,
      "id": "adb0461c3d1edb23",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac2200b8b714632b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzpsUpRlikfjRNUV1Z4AaABAg",
      "date": "2026-11-10",
      "text": "Semoga beruntung untuk biaya benerin keramik rumah sudah hancur",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "8ca67e76f7b81bb2",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-55f41c3dc426b94a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJa3uOnxuegqAKIF94AaABAg",
      "date": "2026-11-10",
      "text": "Semoga beruntung untuk biaya sakit orang tua",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "01af12ebf934d3a1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-52a54110f4b2f7d9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwJQeU9-_I7cF7PpKB4AaABAg",
      "date": "2026-11-10",
      "text": "Semoga dapat .. bisa buat jajan anak",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "9b8203e8cfa33a5a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d2319a4b06d23cf9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwovjbniZeDzVFiM6h4AaABAg",
      "date": "2026-11-10",
      "text": "Ttep semangat boskuu",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "76c534b77e37c0f1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c62d620af684e500",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "NZ65zOzHb1A",
      "date": "2026-11-10",
      "text": "ULAH UMAR TERJERAT PINJOL BIKIN KARIER TIKA DI UJUNG TANDUK! | EPISODE 1A PAY LATER 2",
      "url": "https://www.youtube.com/watch?v=NZ65zOzHb1A",
      "engagement": 363175,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 64.0
      },
      "id": "a68545212bac762f",
      "eventId": "auto-acb29897fc6cc3f8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwqwPUGiGqJpixrVn54AaABAg",
      "date": "2026-11-10",
      "text": "bismilah buat bisnis,moga dapet",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "ba5daf6c4bc90ecd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-86e5de8116841841",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4v1lUgyb1mwwDjBp4AaABAg",
      "date": "2026-11-10",
      "text": "bismillahirrahmanirrahim lagii membutuhkan lagii mendesak mau berobat",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "f4a7bae38da8087e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3df2aff1511ee034",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx87gL44OSqL3qD0mN4AaABAg",
      "date": "2026-11-10",
      "text": "buat kebutuhan sehari-hari kan semoga dapet saldo dana dari kakaknya....😭😭😭",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 2,
      "id": "9a32b1c10d086d77",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b8533d9e0011c39e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxkuLU1trkpo3rJV0t4AaABAg",
      "date": "2026-11-10",
      "text": "buat tambahan beli tas bg🙏🏻",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "2c374b41f80d782c",
      "eventId": "auto-93ce1298b6b4e687",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_8kSVUrsvLhvj8-p4AaABAg",
      "date": "2026-11-10",
      "text": "❤❤❤❤❤❤paylater 2❤❤❤❤is the besht❤❤❤❤❤❤❤❤❤❤",
      "url": "https://www.youtube.com/watch?v=NZ65zOzHb1A",
      "engagement": 4,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "f04d9fcae48b0862",
      "eventId": "auto-11d4f77629e404fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxA7BGVJlLBhYBuFEN4AaABAg",
      "date": "2026-11-11",
      "text": "Alhamdulillah terimakasih bang dana kaget nya🙏",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "1be528a986540e10",
      "eventId": "auto-dc0cb02154566ca6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyENJLauBSZK-JtMEB4AaABAg",
      "date": "2026-11-11",
      "text": "Asli orang baik.. Walaupun ditengah badai, masih dikelilingi keluarga, suami, sahabat yang baik.. Masya Allah..",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 35,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "6faf583f2580020e",
      "eventId": "auto-66280a9ca4d53482",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyVZYswgCLxuWEJMkJ4AaABAg",
      "date": "2026-11-11",
      "text": "Astagafirullah sudah sedalam ini saya menjalani gali lubang tutup lubang ya allah tolonglah hambamu ini biar bisa melunasi utang aminn\nDan semoga juga keluargaku bisa menerima keadaanku yang sekarang sudah gak sanggup galob tulob",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 73,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 57.0
      },
      "id": "a2922726e9440a86",
      "eventId": "auto-7620e82198d38ead",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwPb1YFqzJT-wLubot4AaABAg",
      "date": "2026-11-11",
      "text": "Awali dengan bismillah🙏\nAkhiri dengan alhamdulillah 🙏\nSemoga giliran saya dapat rezekinya. Aminnn🙏",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 2,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "3f56cd7e28d846e9",
      "eventId": "auto-c716fab2d0573d76",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy4qRsp2AV82WUC60R4AaABAg",
      "date": "2026-11-11",
      "text": "Bang saya mohon bantuan nyah bang. Saya harus pinjam ke siapa lagi di sini udah ga DA pinjaman. Bang tolongin sayah sayah buat beli makan hari ini. Anak saya dan kluarga saya klaparan belum makan dari kmaren. Saya ngontrak nunggak 2 bulan. 🙏🙏🙏🙏😭😭😭😭😭😭",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "2ff4c08ae634ed6c",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ff9c0155a480ff88",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz-3KUEPi8vc3cfZvx4AaABAg",
      "date": "2026-11-11",
      "text": "Beruntung mbaknya, semua terasa agak lebih ringan dengan support penuh dari org terdekat. Dibantu pikirin solusinya. Suaminya bisa sabar & bijak",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 13,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "9be76cf9717afc68",
      "eventId": "auto-c70b269142389e56",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyiAHuif-DAPfawntF4AaABAg",
      "date": "2026-11-11",
      "text": "Bg,,,,, kalau nontonnya telat masih dapat dana kaget nya",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "986470880e1d2170",
      "eventId": "auto-28b22bd9a998a88f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHRAqBd3XTQJxXAvV4AaABAg",
      "date": "2026-11-11",
      "text": "Bismilah \nSemoga dapet buat makan hari ini, belom makan nasi dari pagi. Posisi ngerantau, belom dapet kerjaan lagi😌",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 2,
      "id": "7ccf8e35babfb77d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2db2dff209c86cae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwx0nVJohkmeOqZt4h4AaABAg",
      "date": "2026-11-11",
      "text": "Bismilah. Bang saya benar2 lagi butuh buat makan hari ini",
      "url": "https://www.youtube.com/watch?v=9kxwiI61ueo",
      "engagement": 0,
      "id": "e73bda9bb3869132",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-79ebfb1cf0ed2d99",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxwWzrYMIzy_o0L-3Z4AaABAg",
      "date": "2026-11-11",
      "text": "Bismillah buat biaya anak di sunat bang semoga ad rezeki nya buat saya amin🙏",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 5,
      "id": "181071e2f6326136",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-28b5c0dfbe2d843d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy_6Witk5weWc-2Tq54AaABAg",
      "date": "2026-11-11",
      "text": "Bismillah kak..semoga dilancarkan usahanya untuk melunasi hutang2nya..Aamiin",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 8,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 57.0
      },
      "id": "59ef86ab99cb3070",
      "eventId": "auto-727b2ce5f509838d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugysdz9QefBm-Dq9oqd4AaABAg",
      "date": "2026-11-11",
      "text": "Bismillah semoga ada rejekinya \nsalam dari cianjur selatan bang",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 2,
      "id": "a7ff01dddcc84fc7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8fb8949decd2e695",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz2a46zo9PIAycF9cZ4AaABAg",
      "date": "2026-11-11",
      "text": "Bismillah semoga dapet buat tambahan usg istri🤲amiinn",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "2a57d9317b6e97f9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8e4b7320bedd2452",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxr-Hj0GScHFLfTwmx4AaABAg",
      "date": "2026-11-11",
      "text": "Bismillah semoga hoki sekali seumur hidup kepake, buat ongkos interview kerja besok doain semoga kterima ya guys 🙏😇",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 6,
      "id": "370ee74b003b8f0a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d22c05b1bcb0acf8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyYz5bteLYLl0kGUPJ4AaABAg",
      "date": "2026-11-11",
      "text": "Bismillah ya allah semoga rezekinya buat beli pempers anak",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "5038fa1b28c0da5f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6cb4bf446038efd8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwWbbXWnVofojUs4_Z4AaABAg",
      "date": "2026-11-11",
      "text": "Bismillah,semoga dapet buat makan lg kepepet di kost uang habis",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "af6413234c0d350f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f0dd13dc0315a5f9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxoi1z3b66nKwu0EWN4AaABAg",
      "date": "2026-11-11",
      "text": "Ga ada juga fitur pinjaman dana cepat coy",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 44.4
      },
      "id": "ffeb5928a103f641",
      "eventId": "auto-a25b733d636ff41c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxzIl5rKzyG8fXRpNd4AaABAg",
      "date": "2026-11-11",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp710.000 : https://s.id/7lZka\r\n- Daftar doang, Dapat Rp380.000 : https://s.id/saldodana2",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 38,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "a0d9716b47bd6712",
      "eventId": "auto-a2c6befd9f888363",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzIIqtgM7l0ppvTY7R4AaABAg",
      "date": "2026-11-11",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp710.000 : https://s.id/7lZka\r\n- Daftar doang, Dapat Rp380.000 : https://s.id/saldodana2",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 57,
      "id": "ec1759f539e25f02",
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
      "externalId": "UgziOfY81VG6Fu6QJYd4AaABAg",
      "date": "2026-11-11",
      "text": "Semoga beruntung.untuk biaya anak  sekolah",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "e961cfdce28c6e47",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b583ca7c77b31f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw3dYGSHPyoKfnP0Jt4AaABAg",
      "date": "2026-11-11",
      "text": "Semoga dapat buat bayar utang",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 57.0
      },
      "id": "2b2feb710cfc981f",
      "eventId": "auto-c5e4d6414dd1b340",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxhTqNEkmm4c-cmWyd4AaABAg",
      "date": "2026-11-11",
      "text": "Suami yg bijak. Dan Allah msh melindungi rumah tangga mereka.",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 5,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "8aefcb756161d72c",
      "eventId": "auto-9b0672c825117537",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "Cx_35e0Tavs",
      "date": "2026-11-11",
      "text": "TANPA SLIK OJK?! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA BUSUK LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 22143,
      "id": "b15bfb23a6b7c57f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-de8e845f92e1b3a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjORTppg2y_OQAo8F4AaABAg",
      "date": "2026-11-11",
      "text": "Udah dicoba tutornya, tapi ga muncul di menu ya. Beneran ga ini tutor ya..? Aku udah premium",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "3c8248c7bbb3f301",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d43db0dcdc1f58f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "TeV531x9nW8",
      "date": "2026-11-11",
      "text": "Utang Pinjol Rp250 Juta dari 11 Aplikasi: Kisah Mba Umi Bangkit Bersama Suami",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 54401,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 57.0
      },
      "id": "d8b8af5a0c8e094e",
      "eventId": "auto-9f4e579fd5dddac1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzs3ilfza3ezbJK_Dx4AaABAg",
      "date": "2026-11-11",
      "text": "alhamdulillah mbak dikeliling orang baik,beda sama aku mbak disaat mereka butuh bantuan aku tolong tapi pas aku kena tipu dan akhirnya pinjol semua menjauh dan cuman ngomong aku dong mbak 😭😭",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 5,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "39b3a684b5d8a303",
      "eventId": "auto-34926bdfe56e5ff7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyQIdZTd7Oo4lJ05o14AaABAg",
      "date": "2026-11-11",
      "text": "belum ada bang dipencarian",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "57a8f64104b27a59",
      "eventId": "auto-d6e834c2f792c68e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyxqeyWI288F90dzfh4AaABAg",
      "date": "2026-11-11",
      "text": "bg mau dana kaget nya dong bg mau bayar uang perpisahan sekolah bg",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "6ecb14056b910e53",
      "eventId": "auto-fe7b05c85c2c51b9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzPDFrmIGnejIT7F_F4AaABAg",
      "date": "2026-11-11",
      "text": "bismillah, semoga dpt rezeki untuk orang tua😢",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 1,
      "id": "8d6a9b172d2fde5c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c3b6a6ac1e2f428e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxvf9leWAsdVwjk_Rl4AaABAg",
      "date": "2026-11-11",
      "text": "hallo bang .....\nizin saya mau buat bayar kuliah🙏🙏🙏🙏",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "935dd67b2bc730c9",
      "eventId": "auto-176d2cdbb84d5459",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzUWkQPLhrAeIq8H1d4AaABAg",
      "date": "2026-11-11",
      "text": "keren bgt suaminya, aku juga mau cerita, dulu aku terlilit hutang sebelum aku menikah karena dlu aku deket sama cowo yg mokondo cuma modal ganteng doang, dan bodohnya aku  baru sadar pas pinjaman aku udah banyak bgt,  sampe akhirnya  alhamdulillah aku ketemu sama mantan pacar yg sekarang jadi suami alhamdulillah hutang ku lunas sedikit demi sedikit dan sampa skrg pun suamiku ngga tau kalo dulu aku punya riwayat pinjol karena aku malu kalo cerita ke dia, yaa alhamdulillah skrg udah lunas inget bgt dulu jg pas pcrn sm si mokondo itu, aku ga dapet apa2 aku lebih kasihan trs sama  dia , dia minta tf minjem uang aku usahain cari uang pdhl disitu jg aku ga punya uang, aku cari pinjol demi dia, gila bgtt kalo inget2 yg dulu astagfirullah emang bener harus mendekat trs ke allah biar kita ga tergoda riba",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 24,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 58.4
      },
      "id": "14a201d40ee644fc",
      "eventId": "auto-af6c2b36a5d3a93d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxwghooiwesXXEFglB4AaABAg",
      "date": "2026-11-11",
      "text": "ngga ada saya buat makan sehari' perantau saya juga udah subscribe",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "05ff42400210d90b",
      "eventId": "auto-019e7b89af2b2a1f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzi43CoVlfAquSv4f14AaABAg",
      "date": "2026-11-11",
      "text": "❤❤ salut sama suaminya jaga baik2 suami nya bun susah nyari suami sebaik ini ❤❤❤",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 45,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "6839639d1fdbc843",
      "eventId": "auto-b5e455c84051e02f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzu1Ke8v9OO7t72DoZ4AaABAg",
      "date": "2026-11-12",
      "text": "Absen kang dari grup 1 dan 4. Mau nanya bang klo duo oren n gopaypinjam ada FC nggak? Lokasi aku DIY...",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "a55fadb93854449d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cf1b709ab75767ed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBls0nFyzSmvjPwOt4AaABAg",
      "date": "2026-11-12",
      "text": "Assalamualaikum \nHadir kang....",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 6,
      "id": "b8b9bc2368f1abe6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5054caeacb69e1c8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx0OWcUz4PhzEeHyDF4AaABAg",
      "date": "2026-11-12",
      "text": "Ayo donk... pemerintah turun tangan terkait penerapan bunga pinjol.",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 29,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 45.1
      },
      "id": "4ebb1cf310448102",
      "eventId": "auto-feb0b5288f570149",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyYextxJ6mFMCa_w194AaABAg",
      "date": "2026-11-12",
      "text": "Bismilah udah paket lengkap buat makan sehari² soalnya lagi rantau",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 1,
      "id": "8705471cb934e9f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c4228057a193f943",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyMIqW4lnmFht7YOvV4AaABAg",
      "date": "2026-11-12",
      "text": "Bismilah, semoga dapet, buat kebutuhan rumah tangga,",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "b342a54b83ea20fc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-672ab341a6455818",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzwuy2thK7K7fOqnBt4AaABAg",
      "date": "2026-11-12",
      "text": "Bismillah semoga terpilih buat beli sembako dan kebutuhan anak anak balitaku, semoga Abang nya selalu dilancarkan rejekinya🙏",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "cb5e5eaf9588a0ed",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3256ba05b16f859c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZCN-RTlr_5_vW-At4AaABAg",
      "date": "2026-11-12",
      "text": "Buat bayar hutang bang",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 64.0
      },
      "id": "0443bed92e642155",
      "eventId": "auto-1d44378831437695",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "RTzgH7_UM44",
      "date": "2026-11-12",
      "text": "CEKCOK PEMOTOR DAN DEBT COLLECTOR! KDM TURUN TANGAN, KISAH UTANGNYA BIKIN TERDIAM #KDM #DediMulyadi",
      "url": "https://www.youtube.com/watch?v=RTzgH7_UM44",
      "engagement": 99548,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 66.1
      },
      "id": "7f8bf59bb0ec70e0",
      "eventId": "auto-a1ccee344026d6ae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwtNmzcx-pj_8h-YxB4AaABAg",
      "date": "2026-11-12",
      "text": "Hadir bagi dong buat grup linmas jaga malam roko 1 bungkus 😂😂",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "3a7ac4eeaa531f1e",
      "eventId": "auto-459ac9b746fbd226",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzHDeTaKXFa2zQpKCp4AaABAg",
      "date": "2026-11-12",
      "text": "Indodana daerah Kalimantan kyk apa kk",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "9da43763f1332dd9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c546264bfb2f2f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxhGgUnXnZoLdTjGu14AaABAg",
      "date": "2026-11-12",
      "text": "Kadang istri ikut bekerja membantu suami itu juga sangat membantu",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 3,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 44.4
      },
      "id": "5092d656e6726754",
      "eventId": "auto-8db9f2ef2a8bf6cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwxxgET-zxhKfc3dcB4AaABAg",
      "date": "2026-11-12",
      "text": "Kak, buat bayar kosan udah nunggak 2 bulan mudah2an dapat yaa amiiin😊",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "838f7a88d17b1fa9",
      "eventId": "auto-0a9b64f0641a0cc8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgythCRwWnejVY6b3Ed4AaABAg",
      "date": "2026-11-12",
      "text": "Kenapa gak ada pinjaman dana cepat?",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 44.4
      },
      "id": "67517fa0fbf6a288",
      "eventId": "auto-242fd2e85f4af3a2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxTDiXEcMk_JyhWSlN4AaABAg",
      "date": "2026-11-12",
      "text": "Kenapa gak di pasin 2500000...tutornya jngan di skip",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "f131cd0c429fbed3",
      "eventId": "auto-d28d8522c4bd926f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqSzNnQpAqR9bifOp4AaABAg",
      "date": "2026-11-12",
      "text": "Mantap abang caranya bagaimana?",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "e8855adf0daf1254",
      "eventId": "auto-2c56f459c907a2f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqwyyudCGX50YNBal4AaABAg",
      "date": "2026-11-12",
      "text": "Mantap makan atap hehe\nSemangat..🎉",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "1c77f926ff450d4f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-36149b0d955fdd9b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4oZQsYQrX1he8xIx4AaABAg",
      "date": "2026-11-12",
      "text": "Mau aja di bohongin 😂 fitur itu gak ada\nKalian cari sampe botak sono wkwk\nVideo nya di jeda2 gitu",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "85fa5a6ca9840871",
      "eventId": "auto-99d1b99a05e38534",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1im7pcK160OF9LbF4AaABAg",
      "date": "2026-11-12",
      "text": "Pinjam dana cepat diaplikasi ku gk ada",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "b1e05d953c5545bc",
      "eventId": "auto-7289bd677049fb09",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyyS6iwDK0PUeACPlt4AaABAg",
      "date": "2026-11-12",
      "text": "Request bahas yg galbay 2019 itu di hapus data utang kah up bahas kanggalbay",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 5,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 71.7
      },
      "id": "e7439039f5bf7038",
      "eventId": "auto-8c9f86e99cfa7fe7",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwbfmsmNTR-nzXZN514AaABAg",
      "date": "2026-11-12",
      "text": "Saya tetep di tolak pinjaman nya  bang ,,, 🤣🤣",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "789fd7b5abf08fc0",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a18521f801553d51",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgztwTz4-KBZia-EmTp4AaABAg",
      "date": "2026-11-12",
      "text": "Seminggu gak pegang uang sama sekali bang. Pengen apa masih harus ngempet. Kerjaan sulit. Cuma cukup buat makan moga ada rezeki disini. Salam buat orang baik",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "faeb81b864d7db11",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6b90ac513c3782c7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxa_4miMKZYRj3zdud4AaABAg",
      "date": "2026-11-12",
      "text": "Semoga ALLAH mudahkan semua yg sedang terlilit pinjol segera bisa melunasi hutangnya...stop jgn galob tulob...narasumber dan hostnya keren...❤",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 4,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 64.0
      },
      "id": "9fbbcaff46504cb6",
      "eventId": "auto-a35e01d25f7ffe65",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyYl-Ugi1kodo8sRxp4AaABAg",
      "date": "2026-11-12",
      "text": "Semoga dapet bg buat biaya berobat bg😢",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "f2aff3ed215e702d",
      "eventId": "auto-f4024d95e27954f0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxiORpxb85qegs9frl4AaABAg",
      "date": "2026-11-12",
      "text": "Semoga kontennya selalu rame \nDan semoga bisa dapat daget buat keluarga karena kondisi mendesak",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "beb0f5847a0b88ef",
      "eventId": "auto-23a24f86aeca62e5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "9exLvHiMD0o",
      "date": "2026-11-12",
      "text": "TERUNGKAP! DC PINJOL-PINJOL INI SIAP KERUMAH ANDA!! Hati-hati",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 23059,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "7d1d2efa12f3b39f",
      "eventId": "auto-50a71b08fb0193a5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjOUJ6i-YOUxOEPad4AaABAg",
      "date": "2026-11-12",
      "text": "Tangkapi..para mata elang..itu..Pak..Dedy..mulyadi...!! \nMotor..itu..sebagian..masih..punya..lising..namun..sebahian..juga..harta..dan.hasil..jerih..payah..keringat..si pemakai...yg..mrk..sudah..mengangsur..beberapa..bulan...!! Dia..juga..ada..harta..di..situ...!! Sementara..si..penarik .motor  mata elang..ini..asal..main..tarik..motor..aja..kayak..begaaall...!! Hapus...para Mata elang..itu..Pak..Dedy...!!",
      "url": "https://www.youtube.com/watch?v=RTzgH7_UM44",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "42ca0fa997169790",
      "eventId": "auto-5285d317f17d0890",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8M6RtB8TcgRdAag14AaABAg",
      "date": "2026-11-12",
      "text": "saya butuh banget bang gmna cara dapet nya, 300 buat biaya skolah dua anak",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "93d7d077457244f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-399fef367afeb6d9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzl_eRn6y7SXZhNVpB4AaABAg",
      "date": "2026-11-13",
      "text": "Ada DC ke rumah kasih aja pisang goreng Ama singkong pasti di makan..laper pasti",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "eb14b0c431ab29bb",
      "eventId": "auto-7d022670972d7540",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwqsnef-hxAMPFEy4F4AaABAg",
      "date": "2026-11-13",
      "text": "Assalamualaikum saya buat baju sekolah sama uang buat beli motor",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "f54d63b1f388df01",
      "eventId": "auto-0ef58607a7310ee1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyxdUPr3osRqTcW2Bx4AaABAg",
      "date": "2026-11-13",
      "text": "Bagus alur cerita nya... Terkait dgn situasi yg skrg org suka main judi slot.. Depo depo... Scatter scatter ap lh itu",
      "url": "https://www.youtube.com/watch?v=NZ65zOzHb1A",
      "engagement": 2,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "9f51a58008bdc835",
      "eventId": "auto-f475d99b7eb4e125",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDiKGd1bZGZZdfZBF4AaABAg",
      "date": "2026-11-13",
      "text": "Bang apk PINJAMIN, pinjeman  20juta dan itu udh sama bunga nya padahal minjemnya ga segitu ada FC krmh ga bang?",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "cb249b044fc72d18",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc514ae10acb582e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxgu227pTwgFJy-hkp4AaABAg",
      "date": "2026-11-13",
      "text": "Bismilah buat tambahan beli motor 😢",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "2698c131fc0c0680",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f02bd8b25126f67d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzul6asAQqGEjiJ4IB4AaABAg",
      "date": "2026-11-13",
      "text": "Bismillah buat pulang kampung 😊",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "372d878a1f7a8ec7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bbf8dc20fd4345ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwgvrCrbpSmwiQf-154AaABAg",
      "date": "2026-11-13",
      "text": "Bismillah dapet 😅",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "f09b754769402a7a",
      "eventId": "auto-3b67b46f5d15e332",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEQSA8lgLjPmPjg1l4AaABAg",
      "date": "2026-11-13",
      "text": "Bismillah kak saya masih bujang mau buka usaha warkop kecil2 an sudah melamar kerja kesana kemari gak ada panggilan semoga kakak bisa ngasih rejeki buat saya sehat selalu panjang umur lancar rejekinya lancar jodohnya amin 😇🙏",
      "url": "https://www.youtube.com/watch?v=RBLIsUhbvEM",
      "engagement": 0,
      "id": "f5b78187665a654e",
      "sentiment": {
        "risk": 52.8,
        "label": "mixed",
        "negativeWeight": 1.4,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d2f51ba6498e4cf3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx_m35e5_0C3rRMNfl4AaABAg",
      "date": "2026-11-13",
      "text": "Bismillah ya allah kalau saya menang saya mau ngasih ke orang tua saya di kampung 🤲🏻",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "045d1067a15ca9ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-33a3862210657950",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwsKrK0VMW6kpMkSPF4AaABAg",
      "date": "2026-11-13",
      "text": "Hallo bang. Dana cicil ku aktif cuma dana instan nya gak aktif kenapa ya",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "9588f0def4baca42",
      "eventId": "auto-652cdd03d0d1670e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzp7mqRMdrEaRXtaZF4AaABAg",
      "date": "2026-11-13",
      "text": "Kak kalau tiktok paylater by gopay gimana?",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "4aaf151c8044361f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f8b3396d5a73052f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwEtF9ravaLZHK0tYt4AaABAg",
      "date": "2026-11-13",
      "text": "Kak,caranya gabung gmn",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 4,
      "id": "468dddff689dde1c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e785334a5f2a9454",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzMjC1cnmEZ9cAwP8N4AaABAg",
      "date": "2026-11-13",
      "text": "Knpa g muncul y kk",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "f2440165ce74d21d",
      "eventId": "auto-8318bf9709991e57",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxHC2zEhJVeUVvEoxd4AaABAg",
      "date": "2026-11-13",
      "text": "Lapor polisi aja jgn2 mau rampok ber modus, yg pasti itu urusan leasing sm pemilik mtr ..",
      "url": "https://www.youtube.com/watch?v=RTzgH7_UM44",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "506ad27fb991e0b5",
      "eventId": "auto-d4a8bae004c13a2a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzexTUZ8V8Ackddztt4AaABAg",
      "date": "2026-11-13",
      "text": "Punya saya kok balik nya ke dana cil min GK seperti itu",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "ef5c0e2085e16ed2",
      "eventId": "auto-9ed060688ae369a4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzbq0ZcWFkZ52hr2Th4AaABAg",
      "date": "2026-11-13",
      "text": "Ya Allah aku single parent terjebak utang juga😢...smoga Allah lunaskan hutang kita semua aamiin yaa Robbal'aalamiin",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 14,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.0
      },
      "id": "4857f8101c735d6c",
      "eventId": "auto-c14152e18a8f3b52",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwxd9IAlDDvnLeVl7B4AaABAg",
      "date": "2026-11-13",
      "text": "Ya Allah seperti saya tapi alhmdllh gak sebesar itu,awalny suami jg gak tahu setelah tahu awalny marah besar alhmdllh sekarang beliau memilih bertahan dan membantu saya menyelesaikan semua,Dan sampai saat ini masih berjuang menuntaskan semua.",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 3,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "dbafea669bb2dc8a",
      "eventId": "auto-88bde989940f6aea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEPq1vV_GKGum5-ON4AaABAg",
      "date": "2026-11-13",
      "text": "absen grup ke 2 kang galbay, bomat ama dc & fc fokus kebutuhan keluarga sehari hari",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.7
      },
      "id": "6c632550d60087a1",
      "eventId": "auto-9c03f11f846d965f",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz6X2-6X8hlcmBd-aZ4AaABAg",
      "date": "2026-11-13",
      "text": "hutang pinjol 500 rb DC telp terus aneh udah tahu ekonomi Indonesia tidak baik² aja ekonomi nya",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 64.0
      },
      "id": "4891aecdeb2788fa",
      "eventId": "auto-ad745402c3a8c04e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyWr-fUDo_LCSjZYn14AaABAg",
      "date": "2026-11-13",
      "text": "lazbon ada ga",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "cde2addcb788448f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f45fa97e74406a09",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9nU-63EoVWRKO1XR4AaABAg",
      "date": "2026-11-13",
      "text": "saya single mother.usaha hancur2an pasca covid.pernah minjam rentenir 1 jt.tapi beruntung saya cepat sadar sebelum terjerat.intinya selalu catat berapa hutang kita sehingga kita bisa menghitung kemampuan bayar kita.banyak yg terjerat tanpa sadar karena buat bayar hutang dg berhutang berbunga.terus akan berputar2 dibunga.disitulah kita mulai sulit keluar.saran saya buat yg baru mulai pinjol lebih baik galbay satu akun drpd harus minjam di akun yg baru lagi.",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 4,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 92.7
      },
      "id": "fd6224040b283a29",
      "eventId": "auto-c5e1d18a7e0e4076",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwhQRKfLOExgOHAQDp4AaABAg",
      "date": "2026-11-14",
      "text": "Bang pengen dapat buat bayar sekolah adek😢",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "bfe43f0192e9f8b0",
      "eventId": "auto-1c07f43e940f257e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx3eKSrT9M0jo1zHI94AaABAg",
      "date": "2026-11-14",
      "text": "Bg mau nanya pas mau pinjaman kok gd yh pinjaman cepat ny",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 44.4
      },
      "id": "7f8edba83460353e",
      "eventId": "auto-268d4e69c015333c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgykXG_7D6-rejFe1_F4AaABAg",
      "date": "2026-11-14",
      "text": "Bismillah , semoga rezeki . Buat makan hari ini",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "3fa73cfe57b4c779",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-56332105692b1547",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw19X1a470H6M2npGh4AaABAg",
      "date": "2026-11-14",
      "text": "Bismillah buat modal jualan gorengan",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "b21d30f871a5f149",
      "eventId": "auto-a2c2b618512caa91",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxWrraNWYkQib20MkB4AaABAg",
      "date": "2026-11-14",
      "text": "Bismillah kebutuhan sehari-hari",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "b15f16a1a28b49b7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a51c91afd67063cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzqVoWxqwHx6sAuUCB4AaABAg",
      "date": "2026-11-14",
      "text": "Bismillah semoga dapet dong bang buat beli obat bapak 😭",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 2,
      "id": "195c4cd853d377ab",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-811d994489761ee1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxb8RcyDVMkDsH29Q14AaABAg",
      "date": "2026-11-14",
      "text": "Bismillah semoga keciduk buat beli obat bapak kasihan",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "721e208605678710",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f0441dc73a675214",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzcqTiAhzd4uH9BTCd4AaABAg",
      "date": "2026-11-14",
      "text": "Hadir bang sehat sllu bang",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 1,
      "id": "7fdc25aad6994b51",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4bb042cfb1a2767a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwgbi_cQUAclX7k5ER4AaABAg",
      "date": "2026-11-14",
      "text": "Luar biasaa ya Allah smga saya dpat",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "80fdc270acafe50f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5ddc0da851ba6ceb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw4m9C_4PI3HMyf1G14AaABAg",
      "date": "2026-11-14",
      "text": "Mana polisi....",
      "url": "https://www.youtube.com/watch?v=RTzgH7_UM44",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "40eca5075dd8d1a7",
      "eventId": "auto-25d847ce377721ea",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwr0i4NHNchfU0biqB4AaABAg",
      "date": "2026-11-14",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 133,
      "id": "7e8fa2733e3ee2d8",
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
      "externalId": "UgzgRZV-ggJ9-OHGiqZ4AaABAg",
      "date": "2026-11-14",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 88,
      "id": "d8e1bd59d86bc41f",
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
      "externalId": "_JzITrnjmMs",
      "date": "2026-11-14",
      "text": "PINJAM SALDO DANA TANPA DANA PAYLATER DANA CICIL - PINJAM UANG DI DANA - PINJOL MUDAH CAIR 2026",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 23641,
      "id": "b25ac6a33c14134e",
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
      "externalId": "Ugzhy1hYxin1KVHzAdh4AaABAg",
      "date": "2026-11-14",
      "text": "Pinjol itu gak ada ojknya..itu ojk palsu semua..soalnya saya pinjol bnyak..tapi spinjam shope masih bisa aja tetap minjam makah limitnya besar bisa minjam...klo misal pinjol itu bnar bnar ojk.mana mungkin shope mau beri pinjaman",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 2,
      "id": "02a98321334c8af8",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a4e4c36b1d4aaf01",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz65Fg5a_hthDrhR6p4AaABAg",
      "date": "2026-11-14",
      "text": "Saya Uda 2 kali di datengin DC kredivo tp saya tidak pernah janji bayar.tapi apa dia masih dtng lagi gak ya.dan sampai kapan ya jujur saya takut.",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 4,
      "id": "11bbb29c8e1ebbd0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ebcc375a5c084e17",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_LHy-4WOQAXymnFZ4AaABAg",
      "date": "2026-11-14",
      "text": "Saya udah galbay kredivo beberapa tahun dan kali ini baru ada sms katanya tim lapangan mau nyamperin, itu emg bener bang?",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 6,
      "id": "8c5ce0c15a831cf3",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f7d3b70729d340ad",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwtt4F16c-5CnVEO9B4AaABAg",
      "date": "2026-11-14",
      "text": "Smgt",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "c6bd126c745e458d",
      "eventId": "auto-dddd4f7dc8be25f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "rrRsQuEOUUg",
      "date": "2026-11-14",
      "text": "TANPA BI CECKING! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 20096,
      "id": "d53a74d95a9f01d5",
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
      "externalId": "UgzBO0Rd1Ux807ZMgKN4AaABAg",
      "date": "2026-11-14",
      "text": "bismillah semoga dapet dana kagetnya",
      "url": "https://www.youtube.com/watch?v=w0Q4eXDfaz4",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "1569e5db214ccdb5",
      "eventId": "auto-57a15a06384053b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy8ERbu1Aa_pRUVcqp4AaABAg",
      "date": "2026-11-14",
      "text": "bismillahirrahmanirrahim hadir bang",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "e143b77b32c47af6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cfce61f23664e809",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz3ybkEMBAbgT_zxBd4AaABAg",
      "date": "2026-11-14",
      "text": "mantap bang, untuk perbaikan motor..sy ojol",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 2,
      "id": "17ab8ad017486526",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-325682d12c3d9a5f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz_Hs4PFRgU_IQ2OL14AaABAg",
      "date": "2026-11-15",
      "text": "Asalamualaikum hadir selalu pertama abang ku",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 4,
      "id": "acfa3d2ec202f643",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-466ca1d726fa008b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyw8BqrNi_Mb4XV89B4AaABAg",
      "date": "2026-11-15",
      "text": "Bismilah semoga dapat bisa buat bayar hutang",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "11af433b62630900",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-31c2a11a878633c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyrZa34dYvtXRbLqcd4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillah beruntung\n\"Buat kebutuhan sehari²\"",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "3bce83f4c32022ed",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-790a4a7f0cc5f4ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwWMv1y4YoAfFvmAMR4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillah buat biyaya berobat ortu lagi sakit😢",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "3b21ad795288ab74",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5a126992e01a0b20",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxgazcBvGK1Yi2bGu94AaABAg",
      "date": "2026-11-15",
      "text": "Bismillah dapet rejeki disini",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "e1199e23f8dcc111",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e31d122a4a8cc5b5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwCLRReNxF88xDgJqN4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillah kebutuhan bayar kontrakan udah nunggak bang",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "7085e4885081ef49",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1e9a75b368297f96",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwcHFtFxRLil0G763l4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillah semoga amanah buat modal usaha kecil²an",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "93b67725fb3bba5c",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-832d9a6569293645",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw6lGrWLjWbLKSw67J4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillah semogah dapt buat beli susu anak kak😢",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "4b052d286b44102c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d82baf326b24b825",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx1q1_z6FeSDpwxwHl4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillahhirrahmanirrahim semoga dapat untuk bayar kontrakan bulan ini🤲",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "95bc5ca982777ed4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0acbdce4214acb82",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy_16uU55d1dGkIyOB4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillahhirrahmanirrahim semoga dapat untuk bayar kontrakan bulan ini🤲",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "0570603e548be851",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0acbdce4214acb82",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyjMGHWJi6vL1NGK5t4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillahirrahmanirrahim semoga dapat, buat bantu perekonomian dan buat kebutuhan sehari-hari dan bisa ngasih istri bismillah",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "cc5413d6d5a4b7cf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e056ee96428b9147",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxpJRLlhYBw1I0Kn0h4AaABAg",
      "date": "2026-11-15",
      "text": "Bismillahirrahmanirrahim. Semoga dapat bermanfaat",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "7db33ac50b94757f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b37e06f97586c251",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgznFhTUOQqAMV0HcMJ4AaABAg",
      "date": "2026-11-15",
      "text": "CARA CAIRKAN SENDIRI LIMIT SPAYLATER UPDATE NOVEMBER ANTI GAGAL :\r\n👇👇👇\r\nhttps://youtu.be/TYvIRoHlARg\r\n\r\nLink Daget ada di dalam video muncul di menit menit tertentu, pastikan tonton video nya sampai selesai.\r\n\r\n🟢SILAHKAN KOMENTAR SESUAI ISI VIDEO NANTI ADMIN CIDUK DAN KASIH SALDO DANA 1JUTA\r\n✅GABUNG GRUP TELEGRAM DANA KAGET & THR RAMADHAN : https://t.me/+hzfb8ouS3k4yMzFl\r\n\r\n✅SYARAT IKUTANYA GAMPANG BANGET\r\n1. WAJIB SUBSCRIBE CHANNEL INI\r\n2. WAJIB BERKOMENTAR SESUAI ISI VIDEO DI VIDEO KALI INI SESUAI ISI VIDEO NYA\r\n3. WAJIB LIKE & SHARE VIDEO INI\r\n4. WAJIB TONTON VIDEO INI MINIMAL 3 MENIT AGAR KOMENTAR TIDAK HILANG ATAU SPAM\r\n5. PASTIKAN BERKOMENTAR DENGAN 1 AKUN YOUTUBE DAN NAMA AKUN YOUTUBE HARUS DI UBAH DENGAN NAMA INSTAGRAM AGAR MUDAH DI HUBUNGI\r\nYANG MENANG ADALAH YANG MENGIKUTI SYARAT & KETENTUAN JIKA KETAHUAN CURANG AKAN KAMI DISKUALIFIKASI SELAMANYA.",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 10,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 44.4
      },
      "id": "6a13b60a7d646317",
      "eventId": "auto-4e638959ac213408",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "82PkO_sI4wc",
      "date": "2026-11-15",
      "text": "CARA PINJAM UANG DI DANA YANG PADA BELUM TAU! Pinjol Mudah Cair 2026",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 20548,
      "id": "e11daefb578be26d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e2fdb357c29383bd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyzwappxOC6MeZ6MBh4AaABAg",
      "date": "2026-11-15",
      "text": "Hadir bang buat kebutuhan sehari-hari",
      "url": "https://www.youtube.com/watch?v=_4WndkOEo3c",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "d62c2ed81fb76123",
      "eventId": "auto-503a05e34700faf7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyy-4MvKpK9QNZa0L94AaABAg",
      "date": "2026-11-15",
      "text": "Hadir bang semoga dapat dana kaget buat ngajak ibu makan mie gacoan 😢",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 1,
      "id": "15a01873b2697744",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a91eb66b922962aa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy3iinJpo8YXhh4LzF4AaABAg",
      "date": "2026-11-15",
      "text": "Hadir sllu bang sehat sllu bang",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 2,
      "id": "c562f968969a1b79",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9749120ccc0de538",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxNTGws7zFYOFZeZ_d4AaABAg",
      "date": "2026-11-15",
      "text": "Mantap bang buat benerin sepeda tua saya bang buat ke pasar🥰",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 1,
      "id": "f04752edc7b624cb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4c98da7f345b1ed3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgycjWqNR1I6Ub0kxCR4AaABAg",
      "date": "2026-11-15",
      "text": "Mantap video nya bg jelas dan akurat.. Tapi aku selalu ditolak bangku.. Mohon pencerahan nya abng ku.. Lagi butuh dana bangku.. Dibantu abngku",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "cf154ee26a325e24",
      "eventId": "auto-3c493d126a7af8d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwtq26J0Vuw_lronWV4AaABAg",
      "date": "2026-11-15",
      "text": "Mau dong, buat ongkos kampus, semoga dapet aminn",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "ab7ba076081be51d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9ca7bd56fa16eac0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzpDqqEhX8sQ_sYcJ94AaABAg",
      "date": "2026-11-15",
      "text": "Mau kakak ku, lgi butuh bngat kk, mtor rusak, pdahal motor 1satu nya pake skolah",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "1c505a865992fe8a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-df14de7adf53b94c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugya5FDdXAz-XLASlX54AaABAg",
      "date": "2026-11-15",
      "text": "Mudahan rezeki buat bakal kebutuhan anak sekolah",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "77da2a7857b14375",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e62be7c6c1a6bdba",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxNwURg5ene27UZoi14AaABAg",
      "date": "2026-11-15",
      "text": "Nyimak semoga berkah malam senin",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "f93ec72651988b4a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-59ce777274099a48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyn-JjCvbt2jQAgXo54AaABAg",
      "date": "2026-11-15",
      "text": "SIAPA yang belum kebagian SALDO DANA GRATIS? Komen \"SAYA\" nanti dapat giliran dapat !",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 133,
      "id": "af561c7f5c4ef072",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a73b5e2c942a34cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxxO36PLa4RzyxGBgh4AaABAg",
      "date": "2026-11-15",
      "text": "Semoga aku di beri kesempatan bisa di bantu sm kaka",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "3c1ffc2beca8d73e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ba209abf85193a5c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzA9YjcLTt0Xr2J4qF4AaABAg",
      "date": "2026-11-15",
      "text": "Semoga dapat untuk kebutuhan perbaikan motor yang tiap hari pake ke kampus 🙏",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 2,
      "id": "97edc0a606a3f1df",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-582722e4d7625073",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwTiPGyooByTO-vIGV4AaABAg",
      "date": "2026-11-15",
      "text": "Subcriber baru bg moga moga dapat rezeki",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "3edbdd089922a36e",
      "eventId": "auto-112aefc0863646d0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "N0YythNWt4g",
      "date": "2026-11-15",
      "text": "TANPA BI CHECKING❗ PINJOL MUDAH CAIR 2026 KE DANA - PINJOL DATA PINJAMAN ONLINE LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 29979,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 44.4
      },
      "id": "f5f58a61384e076f",
      "eventId": "auto-5bb290eedc9250ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyeEuBeAUsN8yqYRy94AaABAg",
      "date": "2026-11-15",
      "text": "Tutorial mantan bang penjelasan.nya bagus",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "dcda5869a3703966",
      "eventId": "auto-c54e8dfa512b4834",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxZyxRcxlK4bT43VS94AaABAg",
      "date": "2026-11-15",
      "text": "anak kost bang seikhlas nya saja, berharap tunggakan bulan ini bisa bayar kost😇, sehat\" selalu bang",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 2,
      "id": "27d95239a7b18b0e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-35dd253e55dcdf9b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzDR-stbnzSVRn45Ex4AaABAg",
      "date": "2026-11-15",
      "text": "bismillah buat ganti device🤲",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 1,
      "id": "ae6012bb066296f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0e9f7894c8687ff9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzTQIBGC4G76osMDH14AaABAg",
      "date": "2026-11-15",
      "text": "bismillah semoga dapet rezekinya aamiin",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "3ce3b311f75f5f7b",
      "eventId": "auto-4e896921af0c4352",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwIimJ5AmckSZR_qxR4AaABAg",
      "date": "2026-11-15",
      "text": "bismillah untuk anak kos \nsaya kuliah di Padang bg",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "09c91f3281716dda",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-57f090eeda92ceb9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgybEcNNZS864zrFsBh4AaABAg",
      "date": "2026-11-15",
      "text": "semoga dapat buat acara tahlilan orang tua ku yg ke 40 hari aminn🤲",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "7302099828ace846",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b87b8b3c5558bb30",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJiEI_12ygiO6vO3Z4AaABAg",
      "date": "2026-11-15",
      "text": "semoga dapat ya Allah untuk kebutuhan makan saya tinggal sama nenek saya cuma berdua ekonomi lagi susah susahnya🥹",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "96f78c0dcdbc2112",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-347e887a76bc2bdb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyq7FuvFQOBfZcfkiR4AaABAg",
      "date": "2026-11-15",
      "text": "semoga rejekinya bertambah dan semakin sukses bang amin🤲",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "5a0a5d336e621539",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-020db54b874b246b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLOf4791ZiRQelfoJ4AaABAg",
      "date": "2026-11-15",
      "text": "“sayaa bang” \nbissmilaah semoga dapat buatt tambahan beliin ortu barang impian nya..aminnnn",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "052f9fef8f5c8355",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-688c28aa19d11505",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgznUWgOiUg5RndYfJJ4AaABAg",
      "date": "2026-11-15",
      "text": "😂😂😂😂😂😂😂😂pinjol,judi onlen, OJK satu kesatuan yng sama😂😂😂😂",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 5,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "2e9b3b276d1c8bc7",
      "eventId": "auto-69e040508890e2e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxaCLZWlxKhQE_Jd154AaABAg",
      "date": "2026-11-16",
      "text": "Bang saya salah klik di pinjaman samir lumayan gede trs jam itu juga saya hubungi pihak samirnya  akan di kembali kan tp pihak samir tdk mau terima katanya itu dah sisem jd saya tetap harus bayar dgn bunga cukup besar rasanya saya tdk mampu kembalikan kecuali pokonya aja ...gmn tuh bang apa ada dc nya says di sukabumi",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "5e7a5dd753508837",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a0c4459f67a13a5e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyatnl_OKBZUDobjB94AaABAg",
      "date": "2026-11-16",
      "text": "Bang saya udah 2 bulan gak kerja, punya cicilan 100ribu / bulan.\nDemi allah",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "f453091f0aee93fd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7cbebe7d2cba2088",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyZsE0df8cDpHu4VEJ4AaABAg",
      "date": "2026-11-16",
      "text": "Bismilah . Moga ada rezkinya bang",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "5b36b2771a73bd40",
      "eventId": "auto-1bac7124d0eab843",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyv7b89PbpfqZd8-P54AaABAg",
      "date": "2026-11-16",
      "text": "Bismilah buwat bayar kosan udh nunggk 2buln bg mhon bantuannya aminnnn",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "236f128f2a034370",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-868fc3b11ed8cc52",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVQpAD8QBY6a1MIhV4AaABAg",
      "date": "2026-11-16",
      "text": "Bismilah mudah2an ada rezkinya.",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "ed8673283db49dce",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-06b216a2b8fa0d13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxmkNd1T45oF8XD3O14AaABAg",
      "date": "2026-11-16",
      "text": "Bismillah rejeki ga kemana kalo dapet buat nambahin beli kado anak",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "49a89d0b0f4f64ce",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bff6891e81fecfb5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxRbCGqytKD_anBWsF4AaABAg",
      "date": "2026-11-16",
      "text": "Bismillah semoga dapat...\nBuat pulang kampung bang jenguk nenek yang lagi sakit..\nSemoga dapat aminnnn",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "abc0c5d9154603b7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-37e3f2a5e13122c1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw1gutezimM0o7n1jV4AaABAg",
      "date": "2026-11-16",
      "text": "Bismillahirrahmanirrahim buat bayar kuliah SM bayar kost bang soalnya udh nunggang 2 bulan belom bayar kost🥺🙏🏻",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "b571bbcf70230a35",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8015e2d557d7d7e3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxWiphrcEMR_1XG3Ht4AaABAg",
      "date": "2026-11-16",
      "text": "Bismillahirrahmanirrahim buat beli hp kuliah bg , hp ku udah lag bg padahal lagi nyusun skripsi , rekam2 data responden susah bg",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "7b178d21a73ce83f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-90c93bd1b2d76d31",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgybOfCo_lh5j8-O1594AaABAg",
      "date": "2026-11-16",
      "text": "Bismillahirrahmanirrahim, mudah-mudahan🤲🤲",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "fe12e919ab1f30d9",
      "eventId": "auto-3df8156200c860b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXPEeZx_c2IuwX__F4AaABAg",
      "date": "2026-11-16",
      "text": "Butuh buat anak sekolah bang, smoga Abang nya sehat selalu dan lancar rejeki nya",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "40e281ce72e35ecc",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4120401d7027a974",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz8f16YjLz2DRsX4Gx4AaABAg",
      "date": "2026-11-16",
      "text": "Ga pernah dapet",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "333dbc1770f536f4",
      "eventId": "auto-c9ea37c89f865a15",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxSY7CcgRj06N8sKWx4AaABAg",
      "date": "2026-11-16",
      "text": "Gak usah takut,,mau dc datang kerumah gak usah panik,,bro",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 14,
      "id": "f4494a9048f66d20",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-80dbd1ac72bd8909",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwJc1sJi9s2T4t2UZJ4AaABAg",
      "date": "2026-11-16",
      "text": "Galbay di 22 aplikasi pinjol, kalau email saya di setting masuk spam tapi gak pernah dibuka satupun, menghindari down mental bang ✌🏼\nMaklum masih pemula 😁\nKalau email gak diganti aman kan bang ?",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 16,
      "id": "ed46a231952c4f3e",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4d391e323999446b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwz2c26dL9U70m_B8Z4AaABAg",
      "date": "2026-11-16",
      "text": "Gaskeun galbay nasional. \nSy galbay 100 jt, 10 apk, baru galbay semingu..",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 28,
      "id": "7e986729f6d4d54e",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3bed1ea1bd12b2dd",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyhpWU7NCTt4eZNlyl4AaABAg",
      "date": "2026-11-16",
      "text": "Hadir bang bismillah semoga ada rezeki",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "49d78eedcb21585f",
      "eventId": "auto-9855bb38d9bf63fc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzic5PGOXaxp6RZCJd4AaABAg",
      "date": "2026-11-16",
      "text": "Hadir bang salam galbay",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 2,
      "id": "ce93527091fd0532",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e3dbafdafd0aa34a",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxvpnhPoJt3v85M2uh4AaABAg",
      "date": "2026-11-16",
      "text": "Hadir mang sehat slalu murah rezeki dan slalu hoki",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "0e156569d79e2d5f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-21d547ed6c7532c3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgztonozjWwwLEGCSyx4AaABAg",
      "date": "2026-11-16",
      "text": "Hadir paduka raja galbay, 😂",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 3,
      "id": "dce9cdd273f476e4",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1b3aee68d1146bd9",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "LyV8oSigOY0",
      "date": "2026-11-16",
      "text": "Kapolri Akan Blokir Pinjol Dan Jud0l #trending #breakingnews #kapolri",
      "url": "https://www.youtube.com/watch?v=LyV8oSigOY0",
      "engagement": 34555,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "bb41cde64a014e7b",
      "eventId": "auto-d6f0680d399be0fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8gDNXofXU2pv-uPV4AaABAg",
      "date": "2026-11-16",
      "text": "Keren bang 👌🏻✨",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 1,
      "id": "6f3e87f398748a64",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-370d3e644cc4dd72",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzIDXz60Ne0i2dokc14AaABAg",
      "date": "2026-11-16",
      "text": "Kerid truss om smua pinjol tuh ,babat abis  ,.\nTrus di galbay lagi😂😂\nBiar pada bongkor tuh pinjol2 ny wkwk",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 64.7
      },
      "id": "5ec20df98d3af77f",
      "eventId": "auto-c68bfe1f79eba41c",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwIWSU0NWIk_mhoTZx4AaABAg",
      "date": "2026-11-16",
      "text": "Ketawa dikejar depcol yaaa😅",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "ffbef6e96bfbad07",
      "eventId": "auto-457608c4bea6258c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzKYLfYCcYgbHYH-9V4AaABAg",
      "date": "2026-11-16",
      "text": "Lagi kepepet cari sana sinu eh nemu konten ini langsung di Sabcribe & like gak tau komen komen orang pada berterima kasih apa yak",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "9b27905654f710e1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7ddf78cb432c4244",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUr3VW7aVhIm_l3Z14AaABAg",
      "date": "2026-11-16",
      "text": "Mantaff Padukaa...😅",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 1,
      "id": "721b67df01cc2a02",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-158fef29b48d8958",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzZkUhaCSzyNqOexA14AaABAg",
      "date": "2026-11-16",
      "text": "Mantap bang, lancar trus usahanyaaa🎉🎉🎉❤",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 43.0
      },
      "id": "d5ea8d98348e4632",
      "eventId": "auto-c65ea7d3ab99a335",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUeQG1a0RpQp9Oxk14AaABAg",
      "date": "2026-11-16",
      "text": "Penjelasan sangat jelas",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "f9fef83b9d2cabe6",
      "eventId": "auto-7cf7244f71bd3f40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyRR34eDqi0CReeJM94AaABAg",
      "date": "2026-11-16",
      "text": "Prinsip utang menurutku...butuh 500 ribu ambil hutang 500ribu jangan sejuta....karna kalo ambil hutang lebih banyaj dari kebutuhan ya begitu jadi gali lubang tutup lubang..semoga kakak segera lunas ya hutangnya",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 2,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 64.0
      },
      "id": "93a7e3b0f06de148",
      "eventId": "auto-b657c66e8bdee1fc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "78BHnI9LfIc",
      "date": "2026-11-16",
      "text": "SAYA MENCOBA PINJAM UANG DI 7 APLIKASI PINJOL INI ! PAKE KTP SAYA ! APAKAH BISA ?",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 110147,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "bbda4e29260adfa7",
      "eventId": "auto-c60e658dbacb2b2f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxFWG_i4vpec0gKyfN4AaABAg",
      "date": "2026-11-16",
      "text": "Saya bang blom dapet ni lagi buat modal jualan ka saldo kosong bangun dari nol lagi karna bis dapet musibah istri abis sakit 1th lebihhh trimakasih",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "15656357d26e39c4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a6ce3157ee65ef8f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzWdJ1tlrd6rG14eZF4AaABAg",
      "date": "2026-11-16",
      "text": "Saya gak pernah dapat daget nya bg",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "3a2b901db7f3c3e9",
      "eventId": "auto-0eaa06d2d01b68ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyT2qAr2wwVSyIGkRt4AaABAg",
      "date": "2026-11-16",
      "text": "Saya udah subscribe bg semoga dapet rezeki",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "e7702fe7d3f246e2",
      "eventId": "auto-297fafcdaa38405c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxyGbLsDglDmEhs1Sx4AaABAg",
      "date": "2026-11-16",
      "text": "Semoga dapat bang buat biaya nenek saya berobat bingung nyari uang kemana lagi 😢",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "3824378a3fa4b866",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c2c0a1287aa35d0a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLIOjHyiySDyrLu1p4AaABAg",
      "date": "2026-11-16",
      "text": "Semogaa Yang nntn tambah banyakkk tambah rameee❤",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "881eb08dbd615f99",
      "eventId": "auto-f845ea4cbc988880",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx7nWRd4FJNzwIX5GR4AaABAg",
      "date": "2026-11-16",
      "text": "Sy tdk prnh meladeni. Tetep az dkirim gofood...",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 3,
      "id": "e95b4df389a42c0d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e85388a29a9c3b68",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZh5ASLvDTZfVJBjh4AaABAg",
      "date": "2026-11-16",
      "text": "Tapi kalo menurut saya bang kalo kita punya hutang sengaja ga di bayar dunia akhirat bang di tagih",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 7,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "a506aa62ead34904",
      "eventId": "auto-5e34cc38c52cfad1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "U12Y7Ejx-K4",
      "date": "2026-11-16",
      "text": "UTANG DARI 2021, RAJA GALBAY DITAGIH DC!! LIHAT APA YANG TERJADI!! GALBAY SELAMANYA!!",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 16889,
      "id": "e3c153407a465355",
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 3.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-83622c20c683e43b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyqnNsnWElZ58cTuE54AaABAg",
      "date": "2026-11-16",
      "text": "Yang d tunggu akhirnya muncul juga selalu pantengin biar kuatin mental. Staygalbay tetap semangat.",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 7,
      "id": "d37f59079a219262",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3a18a1da57dcbca3",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyEQEktJPyceEKY3Pp4AaABAg",
      "date": "2026-11-16",
      "text": "bang saya butuh dan 500 aja untuk lunasi pinjol bulan ini, mohon bantuannya bg semoga menang giveaway😢",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "7787e7e1db7b5d99",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-559cc77827c7bcf9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyB0muV_YR5vWsZaAF4AaABAg",
      "date": "2026-11-16",
      "text": "buat kebutuhan sehari-hari bang buat makan, lancar terus rejekin nya abang sehat selalu, dan panjang umur amin🤲",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "63a231cd37ce25e2",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-40cf708326ce6076",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUbHVmJMp_yJFFKJ14AaABAg",
      "date": "2026-11-16",
      "text": "gass lahh pasti win ini saya😂",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "5e62d9da602ca082",
      "eventId": "auto-b8148369d22c72e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzNSdPy4VqW628MjYZ4AaABAg",
      "date": "2026-11-16",
      "text": "org indo banget maonya ngutang bayarnya kaga 😂😂😂",
      "url": "https://www.youtube.com/watch?v=lgxcMfFHiwo",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 57.0
      },
      "id": "f615ffb74148933c",
      "eventId": "auto-f6d41f314d17726a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyM0JL-dkyZTyb8AfZ4AaABAg",
      "date": "2026-11-16",
      "text": "subs baru bang, mudah2 uang ini bisa digunakan untuk kebutuhan sehari2",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "91be23a629bf11ff",
      "eventId": "auto-15b33f378678db25",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw_Nawfarz_G2mQHxp4AaABAg",
      "date": "2026-11-16",
      "text": "😅 king of galbay msh ditagih jg tagihan 2021 gile bgt..dpt data dr mn mrk?",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 0,
      "id": "3b506d7a7e186e2b",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-85b7d6a91fd8ede5",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "H6Nhm0-64a4",
      "date": "2026-11-17",
      "text": "4 Tahun Jadi Field Collector Pinjol K**: Cara Kerja Penagihan, Target, dan Realita di Lapangan",
      "url": "https://www.youtube.com/watch?v=H6Nhm0-64a4",
      "engagement": 29088,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.65,
        "lexiconRisk": 57.0
      },
      "id": "1726818a676290ed",
      "eventId": "auto-15c4a702d9b19cb9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXiTfF0rqIUBTMdTd4AaABAg",
      "date": "2026-11-17",
      "text": "Angkat aku jadi murid'mu guru agar aku bisa galbay Kya guru",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 4,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 64.7
      },
      "id": "8720e280796c2529",
      "eventId": "auto-96210384a14679b7",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzEHajXfQb2fAnc_JR4AaABAg",
      "date": "2026-11-17",
      "text": "Asalmalikum bang semoga lancar rejekinya",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "8f29c6a54af5d685",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4622ee61fbd85722",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzQFJn4RhhUUKgH2054AaABAg",
      "date": "2026-11-17",
      "text": "Bangsaya mau wisuda miga dikasi hadiah sama abang hehe",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "c388f81e479c9edd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1ac0ad1f9522fb67",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz9HPKtZCB-DbMCIaJ4AaABAg",
      "date": "2026-11-17",
      "text": "Bismilah semoga di kasih buat berobat😢😢",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "f0328929679381af",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b7fd40d1265a497",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzM2ZbCYO12uHCYQ4l4AaABAg",
      "date": "2026-11-17",
      "text": "Bismillah semoga beruntung",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 1,
      "id": "1412dba2fdd7e5f4",
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
      "externalId": "UgzlZVimk1aIU8k36994AaABAg",
      "date": "2026-11-17",
      "text": "Bismillahirrahmanirrahim semoga aku dapat buat belanja sehari hari amin🤲",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 2,
      "id": "ca7782ef9be825cf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b77291d36881800",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzIgMzMBaZVmzE5ZRJ4AaABAg",
      "date": "2026-11-17",
      "text": "Bos saya mau bikin gerobak buat jualan udah luntang lantung kerja 5blnn belum kesampean. 😮",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "c51eb3183405c1f6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19e5f5883b5cb8a6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNe-MCr6FzlmqKeqB4AaABAg",
      "date": "2026-11-17",
      "text": "Cara aktifkan akun terhubung nya gimna bang",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "ddd57c8fac2a9742",
      "eventId": "auto-04fcd8c08a0cebe3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzHECc0UEmHuARQZNt4AaABAg",
      "date": "2026-11-17",
      "text": "DIVO jg sm. Sudah ada beberapa WA dr DC DIVO yg mirip seperti itu. Malah pernah ada yg dtg, nawari diskon tp yg aneh mlh suruh byr via VA diluar apk dgn alasan apknya sdh tdk bisa diupdate😂😂",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 0,
      "id": "fd3f2f621efb8b0f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cfcd66629d80ab95",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyjvFpQoIW3HvdGGHp4AaABAg",
      "date": "2026-11-17",
      "text": "Gabisa woii",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "8aded50155223461",
      "eventId": "auto-30461a137ebbbec2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxx8t4lFdtsU2jO_7p4AaABAg",
      "date": "2026-11-17",
      "text": "Hadir bang .. salam dari Manado semoga rezeki anakku besok ulangtahun ke 4",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "d371e29c2b988072",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8cdaf0b60a2da82",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwLUcpe4l1kY9ThFyt4AaABAg",
      "date": "2026-11-17",
      "text": "Ilmu banget untuk tunda bayar. Terimakasih mas yodhi dan narasumbern.Semoga Allaah mudahkan untukku membayar semua hutang galilubang tutup lubangku",
      "url": "https://www.youtube.com/watch?v=H6Nhm0-64a4",
      "engagement": 8,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "106c31c0d1c7dc63",
      "eventId": "auto-0db1f716141ace69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHUWrbTGW_OKc3UGN4AaABAg",
      "date": "2026-11-17",
      "text": "Info bang saya tiba\" Ada tagihan padahal tidak ada uang masuk dan tidak pernah instal aplikasinya, tpi dia punya data pribadi minta solusinya",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 0,
      "id": "8620603dbe9cdf67",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-935bb5ac3db3d8d3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwr7jwrK8ZetM5ZGN14AaABAg",
      "date": "2026-11-17",
      "text": "Konten GK bermanfaat",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "bfaecfc446287e11",
      "eventId": "auto-98e3addcb9705637",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy7O93flOz4jSdO-3l4AaABAg",
      "date": "2026-11-17",
      "text": "Kren abangu yg satu ini,AQ punya hutang. 500rb ke akugak laku aj di telpon terus 😅😅",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 64.0
      },
      "id": "31f6c4cc519d70a6",
      "eventId": "auto-2732ce045fe32918",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwwp7XOpx1urJyQGJR4AaABAg",
      "date": "2026-11-17",
      "text": "Lanjut bang semoga sehat selalu amin",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "593e7d3073cc31e5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-424ba8784650f9ab",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwbx_Q0-rP2BJioqEV4AaABAg",
      "date": "2026-11-17",
      "text": "Mbknya org tanggung jawab dan tau diri suami nya mendukung bgt jadi kepala rumah tangga  keluarga nya org baikkk .jadi pembelajaran ...",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 2,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "a75dd7d25dc85385",
      "eventId": "auto-b4927cf975d487eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwxpH0C4REmNyxCdiV4AaABAg",
      "date": "2026-11-17",
      "text": "SIAPA yang belum kebagian SALDO DANA GRATIS? \r\nKomen KEBUTUHAN KALIAN disini nanti dapat giliran dapat !",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 140,
      "id": "d77038190355f5be",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c701a1d8cd73b97b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy5N6p9Wr1AN8Cl4Yl4AaABAg",
      "date": "2026-11-17",
      "text": "Salam galbay bang, gw galbay si orange 4jt & si ijo 2jt dah jalan 3 tahun. Gak kebayang bunganya berapa sekarang. Tapi gw gak mau ambil pusing, fokus perbaiki diri saja sekarang. Alhamdulillah aman sampai sekarang.",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 12,
      "id": "786e9eda4be83a12",
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f5e1f4f544dcd31c",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzPK6wGBVDdaY1zN514AaABAg",
      "date": "2026-11-17",
      "text": "Sama bang ,saya juga baru di TLP lagi tumben 😂😂😂",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 2,
      "id": "386e06e7182d6085",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0066692abe6815f4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw-rJDFCM3WSlueriV4AaABAg",
      "date": "2026-11-17",
      "text": "Saya sudah coba tapi tidak muncul dana kilat",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "7970557061ac1d23",
      "eventId": "auto-b2d2e7fb57e2f5c9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCZx_Mx4TZubGm9z14AaABAg",
      "date": "2026-11-17",
      "text": "Semangat bang, semoga rejeki saya hari ini ❤",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "72f22b03b8d54cac",
      "eventId": "auto-2126c4caeef94591",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgySl7mfJh65btY2bR14AaABAg",
      "date": "2026-11-17",
      "text": "Semoga real bagi saldo dana nya..\nAlhamdulillah kalau di tf",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 0,
      "id": "96a89e11ee58e483",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5580b94d8cb7645b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDJqVCffAxutxzvFV4AaABAg",
      "date": "2026-11-17",
      "text": "Susah tembus nya bang udh coba di aplikasi lain jga gak tembus padahal belum pernah pinjam",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "891d1a635dfdc260",
      "eventId": "auto-1c1bb3bae8609a66",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "9fz1fwNu16Q",
      "date": "2026-11-17",
      "text": "TANPA SLIK OJK?! PINJOL MUDAH CAIR KE DANA 2026 - PINJOL DATA BUSUK LANGSUNG CAIR",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 23541,
      "id": "0537eafa3cde822b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-de8e845f92e1b3a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBuFMXIPdDVjkDxAx4AaABAg",
      "date": "2026-11-17",
      "text": "Tadi aja saya dimasukin ke grup di get contact sama DC . ada lumayan banyak anggota. antepin aja🤣",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 2,
      "id": "50c14d9f87bad1f7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3270430476e4baf2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzxclncGsDJXeRpu9R4AaABAg",
      "date": "2026-11-17",
      "text": "Trimakasih ilmu nya",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 0,
      "id": "1a8bf68e9badcb34",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eebd777d7295cfff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy2ck2uX68Fsyq6wV54AaABAg",
      "date": "2026-11-17",
      "text": "bismillah buat beli susu anak ku umur 6 bln 😢 suami udah nganggur 4 bulan 😢",
      "url": "https://www.youtube.com/watch?v=rrRsQuEOUUg",
      "engagement": 0,
      "id": "2ac5402ad0351679",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e09ed255f385ff9b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwL_2z87ngcaqfdl9h4AaABAg",
      "date": "2026-11-17",
      "text": "bismillah semoga dapat rejeki,buat kebutuhan sehari2,terutama untuk anak n istri",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "51eb5abf84753abf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-74c2c0bf2470bc27",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxD1b6t7hp4LhgsfP14AaABAg",
      "date": "2026-11-17",
      "text": "galbay jadul kang...\n45 juta \nbukannya tdk mau bayar\nsudah bangkrut semua usaha\ntdk ada apa2 lagi 😌",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 4,
      "id": "402fbafc51fc01c4",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4113b01d1637664a",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx2VvC1hmVaXx0FvPF4AaABAg",
      "date": "2026-11-17",
      "text": "saya sangat butuh skrg buat byar sekolah mau ujian",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "d93fe82889940669",
      "eventId": "auto-044716b946829fc5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwkYcjI4JiXo_74YWN4AaABAg",
      "date": "2026-11-17",
      "text": "smga rezeki untuk adik2 aja soalnya serumah pada sakit bertiga bg",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "6617751ba771f5e2",
      "eventId": "auto-774d8c65151efaf6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyD9xdpejYG-AHvE1t4AaABAg",
      "date": "2026-11-18",
      "text": "Asli ga d ACC TPI ada yang nagih d tlpon Ampe datang kerumah 1 kali.\n2apk yang dah punya nama.\nIa ga d bayar lah uang nya juga ga pake alhamdulillahnya gada yang nagih lagi. Hati hati guys ia.",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "b150c9d88b74aa9a",
      "eventId": "auto-7543838ed293674b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzevAL0ljFdmEcIXoZ4AaABAg",
      "date": "2026-11-18",
      "text": "Bang saya lagi nyari kerja di Bekasi TPI blum dapet kerja skarang sayah lagi numpang di  kosan temen GK punya buat makan saya lagi cari pinjol manun smua di tolak kalau ada rejeki saya mudah mudahan saya dapet rejeki dari abangg aminnn yarobal alaminn",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "a1fddcc2ebe47f5d",
      "eventId": "auto-327dff409aad7421",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyr3zTx667erha6Hh14AaABAg",
      "date": "2026-11-18",
      "text": "Bang, bahas galbay cc honest",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 0,
      "id": "3052bb37073c8976",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e7ef9fab29e1a39a",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgysnphoSADabQ_uufd4AaABAg",
      "date": "2026-11-18",
      "text": "Bismilah semoga dapat buat pulang kampung karena istri baru sakit posisi disorong pulang kejawa",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "0d7a9ef118223ef1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-476e1f73dc123fb1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgysBsgPT1UF6gWaBIl4AaABAg",
      "date": "2026-11-18",
      "text": "Bismillah  semoga dapat abang ku buat modal",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "350d30afaae472db",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2dd5f6ff0b78af2d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFE2jiQCD1atoX7st4AaABAg",
      "date": "2026-11-18",
      "text": "Bismillah buat bayar utang dan beli kebutuhan di pondok",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 1,
      "id": "6d8f2278a2a45cf6",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-43cc804e121d356b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx_HBQyOlxrlWHN-XR4AaABAg",
      "date": "2026-11-18",
      "text": "Bismillah untuk bayar kontrakan bulan Desember per3bulan, saya sedang tidak kerja2 bingung pusing dengan semua ini😭😭",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "660b487d514bf2b7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6f15f9805e2e61be",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwhI-v0oyIvgoJz8Ax4AaABAg",
      "date": "2026-11-18",
      "text": "Bismillahirrahmanirrahim Bang,untuk kirim Istri dan Anak di Jawa,Posisi lagi diluar Jawa Berjuang Bang...\nsemangat Bang.",
      "url": "https://www.youtube.com/watch?v=82PkO_sI4wc",
      "engagement": 1,
      "id": "bd909116f63b0cea",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3b4798d60383a4a7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyRYRRTtzzpwlt73jF4AaABAg",
      "date": "2026-11-18",
      "text": "Bismillahirrahmanirrahim mudah -mudhan dapet rejeki dana kaget buat bayar sekolah anak 🙏🙏🙂",
      "url": "https://www.youtube.com/watch?v=_JzITrnjmMs",
      "engagement": 0,
      "id": "595e0c99cc6c58c3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-54838eae0ed0262f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwczHosqzQmbkzli-14AaABAg",
      "date": "2026-11-18",
      "text": "Bismillahirrahmanirrahim semoga saya dapat, saya butuh buat blanja sehari\"",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "712089853c73c332",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-88fbdb4696af5759",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9tvj4Wq2NFnNUvx54AaABAg",
      "date": "2026-11-18",
      "text": "Bissmillah yaallah diberi rezeki lewat abang ini aminnn",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "5221fef951cff8d4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-cf6b0b7e3ebee648",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwtuYjPE02SGlBlvjZ4AaABAg",
      "date": "2026-11-18",
      "text": "Dana kaget, smoga dapat , pengen bayar kosan hari ini",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "7d8a42c01bf4a747",
      "eventId": "auto-2cca1462bf4212f2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyAI7kJfDEf5OaL7Qt4AaABAg",
      "date": "2026-11-18",
      "text": "Ga ada yng di ACC..tapi ada pundi tagihan 100k di tagih terus sudah jadi 700 k parah .di aplikasi pinjaman berhasil dari di bank uang tidak masuk itu kenapa saya bersikekeh tidak membayar dari pinjaman 100 k jadi 700 k itu gimana",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 44.4
      },
      "id": "e58f862889619369",
      "eventId": "auto-7524f61d2114b3ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwoOWSsRa76bYNEugl4AaABAg",
      "date": "2026-11-18",
      "text": "Hadis semoga dapet, lumayan buat bayar hutang🙏🏻",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 1,
      "id": "d1f0c37c6da823f4",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-791b657b34653f9d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxnUOHzW5ahjhlsF1x4AaABAg",
      "date": "2026-11-18",
      "text": "Halah boong pas situ video di potong",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "84716efbbf065bc3",
      "eventId": "auto-6a08c32fd3a6c03c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIUCPItNbR3XaRBtN4AaABAg",
      "date": "2026-11-18",
      "text": "Jangam pernah terlilit pinjol",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 11,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "a3ad1eefdc442245",
      "eventId": "auto-879e729b5f05526a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx2yREvTA-JTv_lXbJ4AaABAg",
      "date": "2026-11-18",
      "text": "Kapok sm pinjol, bunga nya hampir setengah nominal pinjaman ny kampret.Saya kena penipuan oknum shopee yg katanya resi paket saya keliatan dikolom riview toko t4 saya beli HP.Tiba-tiba ditelpon disuruh proses pengajuan akun,KL engga bakal kena laporan polisi.Saya sempat panik Krn br kali ini abis pesan paket ad ditelpon oknum begituan,singkat cerita dia ngarahkan ke peminjama Spinjam,disitu sm mulai janggal,ngapain pake aktivasi Spinjam segala KL cuma ngamankan akun,untung blm sempat saya TF dana yg SDH terlanjur cair ke rek saya.Buat kalian hati-hati KL ad oknum tiba-tiba ngechat di wa,kerjain aj itu penipu sialan.",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 61.9
      },
      "id": "00bcbc70a9f1f580",
      "eventId": "auto-8f9fc1fa5cc99cc1",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzB439Z2YgqT7PUdcB4AaABAg",
      "date": "2026-11-18",
      "text": "Kemarin ada fc ke rumah saya bilang ha ada uang mau datang lagi tgl 28",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 1,
      "id": "5b32087841de648d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0933daf7ff7abfb7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxEONoZ2k1hX5s7j3p4AaABAg",
      "date": "2026-11-18",
      "text": "Lagi butuh banget buat uang Study Tour ke bali soalnya ilang bapak pasti marah😢😢",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "e3d42884cd7c2f7d",
      "eventId": "auto-9a06164d621b666c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqtIEX41cN_vCz7bR4AaABAg",
      "date": "2026-11-18",
      "text": "Lanjcar\" kak ngontennya, moga dapet buat biaya ongkos pulang dari Palembang udah bingung banget gimana pulangnya😄",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "374633fbdcdaaab6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c5f00fb259648cca",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLkbli5N9YNC3L9MN4AaABAg",
      "date": "2026-11-18",
      "text": "Mantap bang. Buat kebutuhan sehari-hari",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "14f3359b76610e7d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c63dddc0c328c11c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzjKpuDEiRyQYhcpj54AaABAg",
      "date": "2026-11-18",
      "text": "Mantap banget bang, saya belum pernah dapat giveaway seumur hidup saya☹️",
      "url": "https://www.youtube.com/watch?v=N0YythNWt4g",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "5157c16308cd3d5c",
      "eventId": "auto-2a8ce25cb75da61c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxIzGMUBtMEw3dPeEp4AaABAg",
      "date": "2026-11-18",
      "text": "Mudah²an dapet, untuk berobat, Karena kena penyakit auto imun",
      "url": "https://www.youtube.com/watch?v=Cx_35e0Tavs",
      "engagement": 0,
      "id": "98c8acf52d17be72",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-00d5e4fd172bba02",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "kxcq1UFr-Nk",
      "date": "2026-11-18",
      "text": "Pinjol &amp; Wapres yang Mundur",
      "url": "https://www.youtube.com/watch?v=kxcq1UFr-Nk",
      "engagement": 37282,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.5,
        "lexiconRisk": 50.0
      },
      "id": "cd6d6151be7fb913",
      "eventId": "auto-9d9c79cafdb8fed9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzsfF8dujkpAySkbDV4AaABAg",
      "date": "2026-11-18",
      "text": "Sya suka sm ktawa santainya...😂",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 3,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 50.0
      },
      "id": "203f1886196bea1c",
      "eventId": "auto-7c8bd8e057a7d72e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzCcgkPmsmhZjpil5x4AaABAg",
      "date": "2026-11-18",
      "text": "Terimakasih",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 1,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "49c8e7af2f5aa26c",
      "eventId": "auto-d531744bba0ad6b2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyYqO0ia3OA3zsowdF4AaABAg",
      "date": "2026-11-18",
      "text": "bang singih kan punya utang pinjol apakah abah pernah kredit motor pas masih ada utang di acc gk sama pihak dealer?",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 57.0
      },
      "id": "7a133d9694dee17d",
      "eventId": "auto-acfe10331b5076d5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx_5trSlDt2aSfemqd4AaABAg",
      "date": "2026-11-18",
      "text": "bismillah bang saya dan istrisaya  mau promil..semoga dapet🙏",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "120722be55f29000",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d8fd4c6d634e5dbf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxN6cRLMidS3T4MmGl4AaABAg",
      "date": "2026-11-18",
      "text": "butuh dana bang pusing hidup kerja susahh bang GC dpt kerjaan trus buat ngisi token bang dah bunyi mulu",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "4735a126860f4906",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7e2992c431aef76e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx8A-p0RiUl7_KbUHB4AaABAg",
      "date": "2026-11-18",
      "text": "maaf mas, tapi kok saya lihat2 mas nya ini lebih mirip debt collector dari pada orang yg galbay 😂",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 32,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.65,
        "lexiconRisk": 78.7
      },
      "id": "9e2385bb6a9db799",
      "eventId": "auto-7a93b544e91835e4",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBqrcvx58wyWZGwnJ4AaABAg",
      "date": "2026-11-18",
      "text": "mantapp bang semoga lancar terus rezekinya",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 43.0
      },
      "id": "25523dea3e19dba1",
      "eventId": "auto-1571f5ab2fe150cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzaQeGT0Fk8ayxlKRx4AaABAg",
      "date": "2026-11-18",
      "text": "😂dobolll",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "0fb68ccfec6025dd",
      "eventId": "auto-d5a1190f08a5262a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgylDHI9koMIdREKJc94AaABAg",
      "date": "2026-11-19",
      "text": "Anku sprti itu sok mnjdi tulang punggung kluarga sejak orgtuany cerai Dan ayahny lepas tanggung jwb.😢😢😢😢tdk pernh mengatakan tdk tuk mama Dan adek2ny, sllu ada jika ada keb uang. Trnyta trlibat pinjol. Mnta doany tuk anku, smoga Allah ampuni  dosa ribany. Allah mudahkan tuk lunaskan hutang pinjolny 😢😢😢",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 9,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.0
      },
      "id": "6e24c86f424b91c7",
      "eventId": "auto-3df5ab32112bef78",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJ1QJR4ku6ftQW4eV4AaABAg",
      "date": "2026-11-19",
      "text": "Asalamualaikum hadir selalu abang ku",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 2,
      "id": "04963d7624e3f9e1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4682128fbb75487e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQQJFOdG2Ona-AW4l4AaABAg",
      "date": "2026-11-19",
      "text": "Bismilahhh bang saya butuh buat benerin motor lagi turun mesin motor nya buatt jualan keliling 😢😢😢",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "0c6700187665859d",
      "sentiment": {
        "risk": 45.1,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.7,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-561c559b1e88ae5d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwrtsjNn2ZULSOwvEd4AaABAg",
      "date": "2026-11-19",
      "text": "Bismillah Ya Allah semoga dapet buat nmabahin modal nikah😢\nAmin🤲🤲🤲",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "8d9ca41eee96119d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3e1c90bed8c1f00c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZCRHuJHUsbDeA8f94AaABAg",
      "date": "2026-11-19",
      "text": "Bismillah buat kebutuhan ngrawat kakek yg udh sakit\"an dan ibu yg sudah lansia\n😢😢😢",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "8978af954183f935",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0c81e08488a28e1a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDl3bxN2SNKVOyHhJ4AaABAg",
      "date": "2026-11-19",
      "text": "Bismillahirrahmanirrahim moga aja dapat rezeki,untuk membiayahi kakek saya yang sedang sakit\"tan😊",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "0615c744583b452f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3e66ad271b5bdbf1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxT2M8d3FQ2pjuK4tp4AaABAg",
      "date": "2026-11-19",
      "text": "Buat perbaikan motor bang",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "631d606e4c43c1f9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e34e2b257a3c0403",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "XOg_CNzd8hg",
      "date": "2026-11-19",
      "text": "Demi Hidup Mewah, Suamiku Terjerat Pinjol dan Membuat Kami Jatuh Miskin! | Kisah Nyata",
      "url": "https://www.youtube.com/watch?v=XOg_CNzd8hg",
      "engagement": 24525,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 64.0
      },
      "id": "6c394fda75a91ff3",
      "eventId": "auto-962f98e53516d2e0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzNE5Q6DdBgdftp-V54AaABAg",
      "date": "2026-11-19",
      "text": "Gak takut mertua lagi bang😀mau coba2 ngutang lagi, 😂sama udah gak bisa lagi bg😂",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 57.0
      },
      "id": "c877be1b95aa3f0d",
      "eventId": "auto-564f20e8bec56c42",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDxvbO-mu4y27t0s14AaABAg",
      "date": "2026-11-19",
      "text": "Hadir BG smga dpt",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 2,
      "id": "45754ca41acd4483",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e78449c85c564cd9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9ZeLC2_zzsWhjnw14AaABAg",
      "date": "2026-11-19",
      "text": "Hadir bosku",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 2,
      "id": "49dfd62829a3d0c9",
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
      "externalId": "UgyVvt9NJdTxD5hoShV4AaABAg",
      "date": "2026-11-19",
      "text": "Hahahah kocak",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "64f0332275640971",
      "eventId": "auto-18c51c5e0ead5014",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwRM1MarXHYgdhzk9l4AaABAg",
      "date": "2026-11-19",
      "text": "Kredit pintar katanya sudah ada di sumatera termasuk Palembang bang",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "f93b68248bd994b5",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8cbb8c37a52bec8d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy6ilCNVflOPGOJSl14AaABAg",
      "date": "2026-11-19",
      "text": "Makasih kak buat motivasi kita disini semua. Semoga lebih baik segalanya aamiin.",
      "url": "https://www.youtube.com/watch?v=H6Nhm0-64a4",
      "engagement": 6,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "dc38543853c5fbe9",
      "eventId": "auto-090c9d47ee1d851f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwUawmEtNXpVRTRsmx4AaABAg",
      "date": "2026-11-19",
      "text": "Mantap bang",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "ec502a709250bf54",
      "eventId": "auto-b52321e37d8d8291",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz-jA7AnXnsgLjMqvN4AaABAg",
      "date": "2026-11-19",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇\r\n\r\nALTERNATIF PINJOL :\r\n\r\n- Daftar doang, Dapat Rp310.000 : https://s.id/7lZka\r\n- Daftar doang, Dapat Rp680.000 : https://s.id/nDefh",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 34,
      "id": "26cdb7c59cf82fb0",
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
      "externalId": "N7NalpFwHPA",
      "date": "2026-11-19",
      "text": "Pinjol Mudah Cair 2026 ke DANA - Cara Pinjam Uang Di Dana Langsung Cair",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 17148,
      "id": "392da4e13ec393f2",
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
      "contentType": "video",
      "externalId": "Sliw6Hc84zw",
      "date": "2026-11-19",
      "text": "Pocong dan Kuntilanak Takut Tagihan Pinjaman!👻🤣 #Shorts #videolucu #dramareceh #lucu #komedi #ngakak",
      "url": "https://www.youtube.com/watch?v=Sliw6Hc84zw",
      "engagement": 34785,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 44.4
      },
      "id": "a2905b7850d188b4",
      "eventId": "auto-db811da2e65fe868",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzRwEIpy2KNqbjvX7x4AaABAg",
      "date": "2026-11-19",
      "text": "Saya baru bang mudahan dapat",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 2,
      "id": "553ed59d89db981d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9d0396ba1e7fc76d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugzwp5bkpjB56R48SbJ4AaABAg",
      "date": "2026-11-19",
      "text": "Semoga dapat buat kebutuhan sehari2 bang",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 2,
      "id": "4c69a89527b7a953",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7690d059c9921b23",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyTcIjB69AZQzKarZ14AaABAg",
      "date": "2026-11-19",
      "text": "Semoga dapet , Aminnn",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "8d95944a4b6d648b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-84de89f2c4d7d236",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw9raX4HCtKhS_uaY54AaABAg",
      "date": "2026-11-19",
      "text": "Semoga dikuatkan buat ibu ibu yang sedang terlilit hutang pinjol .. karna dulu saya merasakan bnget...tekanan dari sana sini akhirnya saya memutuskan menjadi TKW agar bisa melunasi hutang hutang pinjol,, akhirnya setelah lunas saya baru sadar ternyata uang 100 rbu begitu berharga .. cuman kalo kita berhutang online serasa GK ada harganya karna mudah didapatkan dengan sekali klik .. hutang pinjol itu GK terasa gali lobang tutup lobang ujung ujungnya dalam setahun bisa nyampe ratusan juta... Jadi harus hati hati buat ibu rumah tangga semuanya ❤❤❤",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 71.0
      },
      "id": "e96134e9d3cad2a3",
      "eventId": "auto-2b2ccf7536bbea82",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxGopAW9FORRSDtY9R4AaABAg",
      "date": "2026-11-19",
      "text": "Sy mengalami hal yg sama super dahsyat mengagetkan ,bahkan sangat menyakitkan.\nPasangan sy melakukan pengajuan pinjol sembunyi2\nBerjalan 8 bln tak sy tahu.\nBulan ke 9 dia sdh mentok dan tak mampu menyembunyikannya lg , akhirnya terungkap kl dia sedang terjerat pinjol dgn jumlah 250 jt. Yg awalnya hanya pinjam 25 jt.\nSaat ini sy fokus bayar yg blom jatuh tempo , kuras tabungan  ,jual aset .\nYg sdh jatuh tempo sy tunda bayar karena ga akan ada habisnya kl sdh terlanjur nunggak.",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.0
      },
      "id": "e787cb1d039862e5",
      "eventId": "auto-272bcc30c41cd836",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVq-RO7uASf6WDqe14AaABAg",
      "date": "2026-11-19",
      "text": "bang mohon info apakah Easy cash ada DC nya ada di palembang",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "6eea6725c23d6d57",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1ca3fa5b694ccae8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6gqQSazrM_3YkABd4AaABAg",
      "date": "2026-11-19",
      "text": "habis ngonten utang lansung di lunasi semua wkwkwk",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 3,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 57.0
      },
      "id": "983db297f55048c4",
      "eventId": "auto-270ac4e7c5257c75",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxmH4MYotSBYfw3QRN4AaABAg",
      "date": "2026-11-19",
      "text": "😂😂😂keren om",
      "url": "https://www.youtube.com/watch?v=U12Y7Ejx-K4",
      "engagement": 0,
      "id": "d57fe63be1db6e7f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6359767dd3fcda25",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyXd-gSPhYejY2tqGl4AaABAg",
      "date": "2026-11-20",
      "text": "Amin bisa bayar, sekolah anak❤",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "2195a5505b9a7eaa",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f467fd7db95fdb1f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzdNoI6mAkI3eUeA2N4AaABAg",
      "date": "2026-11-20",
      "text": "Aq galbay di akulaku n ada kami bang bahaya gak ya..makasih kalau mau jawab",
      "url": "https://www.youtube.com/watch?v=H6Nhm0-64a4",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 64.7
      },
      "id": "8539ba8a7414539c",
      "eventId": "auto-2da9bbaff4161da3",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNlYwR6U36pDfM4zl4AaABAg",
      "date": "2026-11-20",
      "text": "Bismillah Jumat berkah bang😊",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "2c4b5f789b342647",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-43aad8b6cb76068f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyBNJlzVR3ue1Cev_d4AaABAg",
      "date": "2026-11-20",
      "text": "Bismillah mau bang buat beli baju sekolah buat anak",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "aa9f4adaafc21199",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4d4f281159ee5198",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwHsIGaogCtzQHubmR4AaABAg",
      "date": "2026-11-20",
      "text": "Bismillahirrahmanirrahim,buat ganti baterai hp ,udah kembung 😢",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "202688cbfca79e61",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ba85810a30252500",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxDsLpgNque2cIETjB4AaABAg",
      "date": "2026-11-20",
      "text": "Buat berobat mamah semoga dapat🙏",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "3ebf387cfb42f36c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4abd3305a46148db",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyLqy8QIGNoQf5EjSx4AaABAg",
      "date": "2026-11-20",
      "text": "Hadir abangku \nSemoga beruntung pakai beli obat",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 2,
      "id": "9be2cb23271c8b02",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-99dc89ce2095f567",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyaCFrKCQKR9rkl1KR4AaABAg",
      "date": "2026-11-20",
      "text": "Hadir min",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "e97e455985406f5d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a5a3dc865bfa3e44",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzjKM-RT3aqEIWLE-h4AaABAg",
      "date": "2026-11-20",
      "text": "Jabar hadir, smoga dapat",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 4,
      "id": "cf96db912140a305",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-649fde5f5afd4f5c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyj1z2FxTkwK3pyWq54AaABAg",
      "date": "2026-11-20",
      "text": "Ko tampilan tidak ada bang.padahal semua nya ud sesuai tutorial Abang nya.",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "5c714cf705bfaaaa",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7e878672fd08e422",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "V2eKzXlKf3s",
      "date": "2026-11-20",
      "text": "MUTIARA TUNTUT SANDRA KAYLA KARENA PAKAI KTP UNTUK PINJOL - MERANGKAI KISAH INDAH HARI INI EPS 494",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 19369,
      "id": "b6eb1a930bbfcc74",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-db5f7efcf3956e1a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyDswcm1V8o7GffYAJ4AaABAg",
      "date": "2026-11-20",
      "text": "Mau saldo dana gratis seperti 10 Nama Pemenang di video?\r\nBales pin komentar ini, kasih tau kebutuhan untuk apa👇",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 115,
      "id": "1d02b4409509ff2e",
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
      "externalId": "UgyrLlgryNSNdmWYkJN4AaABAg",
      "date": "2026-11-20",
      "text": "Ngeri ngeri sedap emng galbay ni😢aku dh dua tahun galbay lbih 10 apk...gak ada yg kerumah si TPI takut aja😅",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 3,
      "id": "4e7b0a4b247cd705",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6a738c42745b3c18",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyMelzmlVxPkgY7o6l4AaABAg",
      "date": "2026-11-20",
      "text": "Nipunya mantap bang😂",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "c0346eaa7c495b4f",
      "eventId": "auto-b7f2391d22b951c7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "pPnDQheO0vQ",
      "date": "2026-11-20",
      "text": "RAME YANG GALBAY?! Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 18549,
      "id": "aba0bfb215683edf",
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
      "externalId": "UgwMOoLkdNuicv--qD54AaABAg",
      "date": "2026-11-20",
      "text": "Semoga rezeki anak saya.. perlu buat benerin motor biar bisa kerja lagi",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "b422db27ce682f4f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8169c5645129cf10",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwx_y6_-ZM1ABe7BD94AaABAg",
      "date": "2026-11-20",
      "text": "Syah dh sabre. Bang",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "2e7f38a8f5973f66",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-36cd6627f14dbd5b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyN2oAaZxdMR9ZTWel4AaABAg",
      "date": "2026-11-20",
      "text": "Telattt, saya belum dapet dapet abangkuh",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "7f1bcd2bd0da7697",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-42c35d404e1cbc26",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwz0avMRHyRYq6w0Lp4AaABAg",
      "date": "2026-11-20",
      "text": "bismillahirrahmanirrahim semoga ada dapat dana tambahan buat bayar pajak karena hampir mendekati",
      "url": "https://www.youtube.com/watch?v=9fz1fwNu16Q",
      "engagement": 0,
      "id": "eefcdb4b04b994be",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-be2d332d33ef4373",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwWLh-J1X0M_tpPEWR4AaABAg",
      "date": "2026-11-20",
      "text": "gagal bos",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "19eef1f3a4615705",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-db0249676bcbf31f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwo0efbhVVicPNBS8d4AaABAg",
      "date": "2026-11-20",
      "text": "hadir bang, salam dari kalsel👏\nmudah mudahan dapet, buat bayar spp",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "6863704d0e2b811b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d0d0da94b7478810",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx26NBmmCKLSw3kakN4AaABAg",
      "date": "2026-11-20",
      "text": "hadir bg",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "f2a51b754ab5a210",
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
      "externalId": "UgzY17TB43AhqrE_V8h4AaABAg",
      "date": "2026-11-20",
      "text": "mf bang...mau tnya.itu pinjaman yg di kredione sdh berkurang bnyak gmn negosiasi nya bang utk byr pokok saja",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.65,
        "lexiconRisk": 44.4
      },
      "id": "474cb90ae3b46f16",
      "eventId": "auto-d7ce15a66fe78560",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyCFalQj17HjYq9MvB4AaABAg",
      "date": "2026-11-20",
      "text": "ya intinya sama aja sih dgn penagih di perbankan lainnya. yg penting menagih sesuai etika saja",
      "url": "https://www.youtube.com/watch?v=H6Nhm0-64a4",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "c78b03a6d873b3de",
      "eventId": "auto-47fa09018933dc7d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQdCNLSFMqFks4JBh4AaABAg",
      "date": "2026-11-21",
      "text": "Abang nya keren.. Hutang sama pendapatan youtube nya tidak sebanding.. Pasti youtube ny gede ya bang penghasilan nya? Tetap semangat bang, ngopi nya😅",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 64.0
      },
      "id": "b09eceda29b58922",
      "eventId": "auto-7a1f2a101f717478",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxSx1oITOgLC1X3vY94AaABAg",
      "date": "2026-11-21",
      "text": "Ada\"aja abis ini apa lg kjahatan yg mu dbuat Sandra capek deh... Udh sih abisin crita nya udh gk sru gk srak juga nontonnya.",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 2,
      "id": "a692b32753ea39a9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7bfb7d2b14de229b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpkNot7pIyJGv7pRN4AaABAg",
      "date": "2026-11-21",
      "text": "Akal akalan penulis dan sutradara,lebih mengutamakan cewek jahat,sadis.",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 14,
      "id": "f77abdcf4c626ce4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4d9fd84d9195c05e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIQ0zBF9cEqT283ZV4AaABAg",
      "date": "2026-11-21",
      "text": "Akhir crt Sandra dan kaila psti msuk pnjara...😅😅😅",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 4,
      "id": "c99809179cb59ef9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9c385adb1b0f1b17",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugygzh8SZd-DO2RekTF4AaABAg",
      "date": "2026-11-21",
      "text": "Alah paling cm judul doang nt ujung\" nya ttp bebas bosen min",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 3,
      "id": "c129403be02d0a77",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2641e60cd94e00e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz6p0oiesyvwqdzrrN4AaABAg",
      "date": "2026-11-21",
      "text": "Bang mau tanya apa kah spinjam sama paylater ada DC nya di Karawang Jawa barat",
      "url": "https://www.youtube.com/watch?v=9exLvHiMD0o",
      "engagement": 5,
      "id": "d839bd3cc09acd2f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f93c58ddf23dcd50",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxtvKSYVZWirD0NRW14AaABAg",
      "date": "2026-11-21",
      "text": "Biar saja klu hancur pusing liat sinetron ini kejahatan diagung2kan, kebohongan dipertontonkan bukan tontonan yang mendudik",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 1,
      "id": "6f6f7d29f552507f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c729be3ed028cbfb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzgWC8YXqlIOzX_hD94AaABAg",
      "date": "2026-11-21",
      "text": "Bicara gk mungkin bolak balik hadeehhhh",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 5,
      "id": "a72771c4d168bfce",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9ca8fd395cd75280",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwpH1F2YsBX07vxKxJ4AaABAg",
      "date": "2026-11-21",
      "text": "Bismilaj bang buat nambah nambah biaya nikah aminn",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "8585ad03654be99d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-138e202003aea40e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwMnyN-RbjtEXIlyKR4AaABAg",
      "date": "2026-11-21",
      "text": "Bismillah . Saya terlilit hutang mas",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 2,
      "id": "c1787eeb72d496f3",
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ba4234e46051b638",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwC4bix3a6GW2U_Ae94AaABAg",
      "date": "2026-11-21",
      "text": "Bismillah bang dapat daget buat tambah2 bertahan hidup sama istri di tanah Sumatra habis ketipu kerjaan tambang",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "dc8a7437aebc1fa4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8243a6e39d4173e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFe2CtGZbnAzH_tUx4AaABAg",
      "date": "2026-11-21",
      "text": "Bismillah semoga dapet,butuh banget untuk bertahan hidup di rantau bg",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "db2a1950a16799e4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a1dd034f3246fd88",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFU0SjKzKqvecAvKR4AaABAg",
      "date": "2026-11-21",
      "text": "Bismillah untuk kebutuhan anak",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "130d372c866fdc2b",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bb3d253fa8eb8fe7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwxRFnu9yrrO6wzFTZ4AaABAg",
      "date": "2026-11-21",
      "text": "Butuh daget buat beli sepeda bang, lagi butuh banget buat kuliah",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "964dc5f3420bbcd3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-24a43aa798057ee2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz7kwPPHfpcd2mGW1h4AaABAg",
      "date": "2026-11-21",
      "text": "Cerita kog gk ada ujung2nya gk usah ceramah min yg nonton bosan",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 5,
      "id": "f56535517edade6c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0f01980ab3f056b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxo0V-MMfB4KtIfhSp4AaABAg",
      "date": "2026-11-21",
      "text": "Cerita tbah ngaco terus\" an ga ada abisnya kejahatan yg di terima mutiara bosen liatnya  tbah ngaco .",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 4,
      "id": "3522f068d37c55e3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c24ff94e9930025a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxJm-WrxuVmfxx3cSB4AaABAg",
      "date": "2026-11-21",
      "text": "Dari dulu gitu aja  cerita di buat muter 2 yg nonton jadi bosen",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 5,
      "id": "2b018831c827cb7f",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-48a81391896b57f1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzzL63NJTLZfxln-aV4AaABAg",
      "date": "2026-11-21",
      "text": "Dari dulu lapor polisi lapor polisi mana buktinya ngatasi satu orang saja gk kelar",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 5,
      "id": "6a0c6ab998b2abd0",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b67deae780472832",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwtJwIYQZeS4prKmiR4AaABAg",
      "date": "2026-11-21",
      "text": "HANCUR2 APANYA  YG HANCUR  SINETRON  INI PALING  R U W E T T T😮",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 5,
      "id": "e9b570ce845d2212",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e20d700524a693c2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgywhBiRkU63e_fct3x4AaABAg",
      "date": "2026-11-21",
      "text": "Hadir abangku",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "77a996a11319632c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f783682d08529d15",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx5i6dmBP3bIh_1EJ14AaABAg",
      "date": "2026-11-21",
      "text": "Hadir bang",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "0a8b169acc6b9f5a",
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
      "externalId": "UgyDYWhqghMzE2XZYdh4AaABAg",
      "date": "2026-11-21",
      "text": "Heran , orang jahat spt sandra kok selalu lolos dari hukum krn sdh ber ulang2 berbuat jahat !!!",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 2,
      "id": "f0c9514a4c7309fb",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3a200edcce388bf2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx0RV-84-7wjAH1Xz54AaABAg",
      "date": "2026-11-21",
      "text": "Jadi males nontonnya , setiap rahasia terbongkar pasti ujung²nya mimpi/lamunan, lagian sandar setiap berbuat jahat klo ketahuan selamat terus GK pernah dilapor ke polisi Wkwkw",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 6,
      "id": "8adde82f6c4f87b6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ebf689e34f4dfeda",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyBlgYnuUPJYQJR_yJ4AaABAg",
      "date": "2026-11-21",
      "text": "Kasian mutiara selalu di siksa sandra yang sangat kegatelan tapi semoga sore ini kejahatan sandra gatal terbongkar karena saya yang nonton gregetan karena sikap sandra gatal selalu di buat menang terus menerus oleh pak sutradara menyebalkan",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 2,
      "id": "e85c5ac1c3977c16",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-24d7975d4eab26ed",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzWfcT9Yy2xVbLZYS94AaABAg",
      "date": "2026-11-21",
      "text": "Lama\" nyebelin nonton .mki mls pasudnya menyebalkan berpihak nya sm iblissandra;kayla.bkn sm mutiara .jd orang jgn terllu lugu mut .sr😢",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 6,
      "id": "bd5ce3c4f536e1ba",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8bb2a244cd04946e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwd2iKsYf1KK68yul94AaABAg",
      "date": "2026-11-21",
      "text": "Laporin aja ke polisi sanra sama kayla pasti meteka itu biangkeroknya",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 3,
      "id": "08d843c2afeaea65",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-27ff0c1a100fbeb9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "d2otxuDtRyQ",
      "date": "2026-11-21",
      "text": "MUTIARA HANCUR !! Sandra Daftar Pinjol Dengan KTP Mutiara - TRAILER MERANGKAI KISAH INDAH HARI INI",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 20585,
      "id": "ea349cdfac59cb60",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6ccde6ebd4dcca72",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwKuDC3hLfVhZAOX5h4AaABAg",
      "date": "2026-11-21",
      "text": "Mantap bang",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.75,
        "lexiconRisk": 50.0
      },
      "id": "4cffc2fe256a75b8",
      "eventId": "auto-b52321e37d8d8291",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugxi6kMpZ3z8tWUTF9l4AaABAg",
      "date": "2026-11-21",
      "text": "Mau dc datang atau gak datang seruput kopi hitam,,,,😂😂😂😂 jgn takut sodara",
      "url": "https://www.youtube.com/watch?v=H6Nhm0-64a4",
      "engagement": 2,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.55,
        "lexiconRisk": 64.0
      },
      "id": "36e44a040ffc1f81",
      "eventId": "auto-b5e151d973d30d83",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwV5S3fVJ9ysdthfyl4AaABAg",
      "date": "2026-11-21",
      "text": "Msa naro tas asal aj.kan uda tau lgi banyak pembeli..bisa aj ni pak sud nya  aduuuuuhhhh",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 2,
      "id": "06dbd19efa08cd8c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-464a67b488cecfc5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwjg40YFgZDqxRBo0l4AaABAg",
      "date": "2026-11-21",
      "text": "Muak sama pak sus nya, ranti go jujur, lagi2 menghayal",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 3,
      "id": "5f45f914a4aa7c18",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-71ec53711971dc44",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwj29RwPeP8omYtqYp4AaABAg",
      "date": "2026-11-21",
      "text": "Mut kamu harus tegas jangan lemah sandra kaila harus tuntut mereka",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 5,
      "id": "0886d660ccec33bf",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-691b06d3011051e5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwuGxvyBuPqQ4IH00h4AaABAg",
      "date": "2026-11-21",
      "text": "Pak Sud.pintar banget 👍senetron nya menghasil kan cuan yg banyak",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 1,
      "id": "92ecda729ae2a17a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a8c3ba7019dfdbb2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz4v1FbKWCQ0nZS-0d4AaABAg",
      "date": "2026-11-21",
      "text": "Pak sut kok selalu nyakitin hati mutiara terus...jngn tanggung 2 ..langsung d penjarakan aja Sandra...Ama Kayla penonton udah muak ...critanya kok  gini terus ...coba sekali 2 mutiara d atas ...kalau ada film lagi GK usah d ajak Sandra penjahat itu...",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 3,
      "id": "bf3be97a8099200a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9dd87c57f2545aeb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugytfxdf2Sr3rnzvNHJ4AaABAg",
      "date": "2026-11-21",
      "text": "Penjahate wes ketahuan tapi di biarkan gk di penjara miak sama ceritanya gk betmutu",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 6,
      "id": "f6dfd66e39403cbc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6a813a27a7ae8359",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "hOAwtiJciD4",
      "date": "2026-11-21",
      "text": "Pinjol Datang ke Warung Kopi😂 Dikejar Pinjol Sampai Mau Pindah Planet!",
      "url": "https://www.youtube.com/watch?v=hOAwtiJciD4",
      "engagement": 33169,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "a9a9033a10ab8597",
      "eventId": "auto-c12dbd58ebcd7de2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwgaFWeZAmsOPASIwZ4AaABAg",
      "date": "2026-11-21",
      "text": "Pusinggg sama mutiara aj oon kenpa si sekli\" tuh sandra di tangkep am kaila",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 3,
      "id": "ec7149a68c9931d9",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6ee01f5dfcdb2748",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz8dQeoZdUsu98QR1Z4AaABAg",
      "date": "2026-11-21",
      "text": "Saya ada buka aplikasi dan sy tidak mau pinjam tapi data atw sy sudah kasih no rekening karena sy tidak mengklik pinjam dan aplikasi sy sudah hapus tapi beberapa menit kemudian uang masuk ke no rekening tanpa sy merasa tidak lanjut atw ok di aplikasi apakah sy tidak harus merespon sedangkan selalu masuk we a di hape sy.tindakan sy harus bagaiman nih mas terima kasih mas tolong infonya",
      "url": "https://www.youtube.com/watch?v=H6Nhm0-64a4",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "9303c47e094cf560",
      "eventId": "auto-f54493e093228061",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzrY2nQPOaUosaC2OF4AaABAg",
      "date": "2026-11-21",
      "text": "Saya lama\" jadi kesel dan enek, sama si mutiara dia b mau penjarakan si sandra n kaella,apa\"selalu g ada bukti jadi muak sm si mutiara.",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 3,
      "id": "17ee7fd3bcf4f81d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c2726c58d7c0695b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw7oXZTWdRtkb-V57t4AaABAg",
      "date": "2026-11-21",
      "text": "Sebaiknya , Sandra, Kayla dan Nadia .... Di Kardusin aja .",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 3,
      "id": "f770b3f1d0c3c709",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1d5afe3995d90616",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy9tJcMGpMemMVrCXJ4AaABAg",
      "date": "2026-11-21",
      "text": "Sebel  nonton  mutiara disakiti mulu",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 4,
      "id": "0442a2dba92d6601",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f7ce69c3e65f5fe0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwDjEn-UIKc4CRF29t4AaABAg",
      "date": "2026-11-21",
      "text": "Selalu varo bukti2 kejahatan bukti y sandra enjo2 aja",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 4,
      "id": "6a74fc97aff47587",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19a17f03453800e0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwpw2qGH-RCNb1VjnZ4AaABAg",
      "date": "2026-11-21",
      "text": "Semoga bisa,buat modal usaha",
      "url": "https://www.youtube.com/watch?v=N7NalpFwHPA",
      "engagement": 0,
      "id": "5b81c1117be054a1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e5ac2bfbc3c8a7dd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzVcTms4pDlOelkzcZ4AaABAg",
      "date": "2026-11-21",
      "text": "Semoga tercapai untuk membelikan anak sepeda gayung dan tas sekolah yang sudah rusak dan perlengkapan sekolah anaknya  🙏",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "8f0f40bb82049d83",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bd4dd7954a496c5e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugye79nXU_FaTNVW3Bx4AaABAg",
      "date": "2026-11-21",
      "text": "Sinetron cuma mengajarkan kejahatan kelicikan selingkuh...heran ma pikiran sutradara nya",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 2,
      "id": "3f0a0521be46d9f7",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-985bb34eb869817b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwBKKwEqeOcEAAp44d4AaABAg",
      "date": "2026-11-21",
      "text": "Sinetron gaplek GK kelar2 muter2 terus .GK masuk akal kok ada orang di dolimi terus2 San kok kayak mbodohi.cari aja judul lagi itu2 aja.klo kehabisan cerita tamat aja dg hormat.gk usah muyer2",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 4,
      "id": "6858a6b87ec11d12",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-be91b7d242205ead",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxFsA6AV4OGMA6upZF4AaABAg",
      "date": "2026-11-21",
      "text": "Sinetron yg paling memuakan  dan membosankan kan kejahatan s Sandra rak henti² nya",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 0,
      "id": "ca611a420a56981a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-afe70a3a1f6ce5cf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzyxPexLX9B9D4qz0l4AaABAg",
      "date": "2026-11-21",
      "text": "Tak sumpahi sandra dan kayla nggak ada laki2 yg mau sama dia, soalnya orangnya jahat banget aku sangat kesel sama dia berdua",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 3,
      "id": "5aaacf97dd261052",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-680b4a5f203c9dc1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy32KSrxe1IzyBlqrV4AaABAg",
      "date": "2026-11-21",
      "text": "Ternyata anda Dewa Pinjol Kultivasi tingkat tinggi bro😂",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 1,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "048bf30cc1e145ee",
      "eventId": "auto-bc6701cf5e770cbf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxTWT1yIa3pf0ODHT54AaABAg",
      "date": "2026-11-21",
      "text": "Tiap kjhtn si Sandra SM si kaila KLO ketauan kok di biarin aja knp sih pa sud 🙏🫣😇",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 2,
      "id": "c028e6e48becf273",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-34d0acd05105a5f6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzvPRV4y_YDlUNLMNN4AaABAg",
      "date": "2026-11-21",
      "text": "Tuntut,tuntut,tuntut blm tejadi semua hoax",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 5,
      "id": "a027f1115704caa3",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4fc727dc6f0fba19",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy8oyIKpu-QfGnpUqt4AaABAg",
      "date": "2026-11-21",
      "text": "Udh di fase capek bosan alur \"gitu\" Aja.. Cpk.. \n.",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 5,
      "id": "32378a0151711dfc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1d98ce2a5c446493",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJ3wwr7joEjzXggM14AaABAg",
      "date": "2026-11-21",
      "text": "Udh mumut kamu jngn lembek hrs tegas klo bs bale aj perbuatan meteka berdua",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 4,
      "id": "b99a9dd4440215b1",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ef20ff654f29f9ab",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwz85X-njqfB6XHXOx4AaABAg",
      "date": "2026-11-21",
      "text": "Udhlah ga usah pd nonton kl ceritanya begini2 terus,,, PU nya terus2n  menderita dan tersakiti,,, lama2 muak jg liatnya,,,😡😡😡\nMknya jd orang itu  jngan terlalu baik, terlalu  polos jdnya ky orang oon,,,😢😢",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 2,
      "id": "ab8e56f296bb5fc6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b18cfe8a3da4fc9d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwjphKvoHQxkE_hETR4AaABAg",
      "date": "2026-11-21",
      "text": "Yang baik menderiita  yang jahat ndak ada balasan dari kejahatannya.Pemegang rahasia utama meninggal semua.sutradaranya kemana",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 4,
      "id": "eeeadddf1d55086e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-570c2bd162816ade",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxKZh-bk5nN4tm7Gdt4AaABAg",
      "date": "2026-11-21",
      "text": "Yg jahat tu sutradara ne diya cuman memeran kan tapi Kana pa yg jahat di plihara terus gak pernah ketangkep polisi",
      "url": "https://www.youtube.com/watch?v=V2eKzXlKf3s",
      "engagement": 7,
      "id": "b8992e66222f35f4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a5814605a215a6de",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwGUyxIWBF4g4EJb0R4AaABAg",
      "date": "2026-11-21",
      "text": "aku aku tahu nak",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 2,
      "id": "df2dd753c1584838",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-64533873b644cd7e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzcdTbvKfSQWd0PA3x4AaABAg",
      "date": "2026-11-21",
      "text": "beberapa aplikasi kok gak muncul bang di iphone",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "daf26e8a0e6755f8",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c4440a7403681dc4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxI_DDrjUBLoPcDcXN4AaABAg",
      "date": "2026-11-21",
      "text": "mutiara terlalu mengalah. jangan mau di jahatin terus mut. bangkit",
      "url": "https://www.youtube.com/watch?v=d2otxuDtRyQ",
      "engagement": 2,
      "id": "102b04d10b372577",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-765655606a286446",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy8c0Aq06YFjOQsbfh4AaABAg",
      "date": "2026-11-21",
      "text": "semoga beruntung kalau dapat buat beli paket data bang",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "5180ce4eb8f8485a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a4688f7b9fa5b88f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "9_ubUpucl8c",
      "date": "2026-11-22",
      "text": "Anak Ngaku Ibunya Meninggal Setelah Diancam DC Pinjol Lewat Chat",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 234547,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 66.1
      },
      "id": "4dbfb2959fabf570",
      "eventId": "auto-02c25511a4ced988",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyaj4dgp5MFipE0QcR4AaABAg",
      "date": "2026-11-22",
      "text": "Anak saya temenya mimjam 5jt  pakai ktp ansk saya tak dibayar sampai menumpuk yng dikejar2 anak saya sampai jd 20jt saya nilang ga'usah dibayar tp takut katanya.",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 32,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "1458cc5838a9b4b6",
      "eventId": "auto-673fbd8a0528dc8c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwbNlg5o5t5oNQBPWZ4AaABAg",
      "date": "2026-11-22",
      "text": "BISMILLAH DANA KAGET BUAT BAYAR KULIAH ABANG, SISA 3 SEMESTER, GAMAU BERHENTI DI TENGAH JALAN",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "657d2c8ad31b8321",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7f6b2c6b93c2d235",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyck7WBosxiGVVL2Ad4AaABAg",
      "date": "2026-11-22",
      "text": "Bahkan bank digital ad aja skrng mke paylater ,mlahan ada loh apk  paylater tapi mke sldo dana kita dptong 😢",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 47,
      "id": "9b954b3c418dcae4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-06c2b9b6da81e0ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyJKXllm-x36oj7WSN4AaABAg",
      "date": "2026-11-22",
      "text": "Basmi pinjaman online dengan cara menyerang tanpa ampun tanpa kemanusiaan kepada musuh",
      "url": "https://www.youtube.com/watch?v=XOg_CNzd8hg",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "37e7931073936dbf",
      "eventId": "auto-bd0d2de4a425ca8f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyoKiqW84QRGxYp2-d4AaABAg",
      "date": "2026-11-22",
      "text": "Basmi pinjol 😢",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "a9a6addc21cba186",
      "eventId": "auto-d177c3aa1b28fbcf",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxCchvZnGcehzzMJ6d4AaABAg",
      "date": "2026-11-22",
      "text": "Buat modal dagang bang.. bismillah.. semoga ada rejeki",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 1,
      "id": "34d5b42f1cea4eb6",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-01caa62bb49bfbc1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzWjTMeyXv-09tOBAt4AaABAg",
      "date": "2026-11-22",
      "text": "Channel paling kocak. Hutang di mana mana malah tersenyum sambil ketawa ketawa. Abang ini pasti orang kaya tapi sengaja belum di bayar 😂",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 4,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.65,
        "lexiconRisk": 64.0
      },
      "id": "979ceb16621b0e8a",
      "eventId": "auto-1fe10791448e8bf2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugw-678A35xYR5mnOb14AaABAg",
      "date": "2026-11-22",
      "text": "Dari dulu selalu hindarin pinjol & paylater karena klo ada utang kg nyenyak tidur gua",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 1,
      "id": "a3da0e8f2c92beb9",
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c5e47b4e5da62594",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwkYHpGykJ8LlfgCP14AaABAg",
      "date": "2026-11-22",
      "text": "Dia akan dendam kepada debt collector itu seumur hidupnya",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 191,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 72.4
      },
      "id": "053ccf8aa97f3cd8",
      "eventId": "auto-cc95502b1364feba",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyNvFXrLv67YzUEUe14AaABAg",
      "date": "2026-11-22",
      "text": "Inna lillahi wa Inna ilaihi rojiun ..\nPinjol judol bank mekar bank emog, itu perusak negri ini yg sengaja di pelihara pemerintah",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 244,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 50.0
      },
      "id": "a09a346dd40c3153",
      "eventId": "auto-79cc384a7199c4f5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwg4cmDOwyldEuNtcd4AaABAg",
      "date": "2026-11-22",
      "text": "Itulah kenapa riba itu haram 🗿",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 47,
      "id": "daa808b7e341ae1e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2188b09acd3bc63a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwZZPxQLY6DmLPd2tl4AaABAg",
      "date": "2026-11-22",
      "text": "Jangan berhenti disini, Hukum berat aplikasix, DC nya",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "4558f159e6a47a9e",
      "eventId": "auto-e4bb7542a476b77d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwPRpwA81Cz9g95eL14AaABAg",
      "date": "2026-11-22",
      "text": "Jangan pinjam pinjol apapun alasannya",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 23,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "cf49ffd251a7c1c7",
      "eventId": "auto-7788f0eb72c878d7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzIXNiGMAmG0N4XJjx4AaABAg",
      "date": "2026-11-22",
      "text": "Jangan sesekali berhutang apalagi ke pinjol ilegal, telat dikit langsung kena teror.",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 3,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 92.0
      },
      "id": "b9dede60abc56a54",
      "eventId": "auto-c33fb59c6fce437b",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxAS7I3Mis5b07Jbe14AaABAg",
      "date": "2026-11-22",
      "text": "Kalau Banyak Pinjol.. \nKemungkinan besar main Judol😂😂",
      "url": "https://www.youtube.com/watch?v=78BHnI9LfIc",
      "engagement": 4,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "185cce460ae14d7e",
      "eventId": "auto-a76e81d742862512",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxD4qq2VxuaEX1CX_J4AaABAg",
      "date": "2026-11-22",
      "text": "Kalau pinjol kalau belum bisa bayar, dia ngebel dan mengacam abaikan saja.., mereka sebenarnya pengecut, tapi saya heran pjnjol ini di biarkan pemerintah.",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 376,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "c30a281cc15ece84",
      "eventId": "auto-e4f04bf944f6adef",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugwru-BasC89NjdoK7p4AaABAg",
      "date": "2026-11-22",
      "text": "Kasus gini emang gak bisa di pecahkan minimal di kurangi lah apa sih kerja polisi ada ribuan di Indonesia ini",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 93,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "6d0541cfa4cafd1c",
      "eventId": "auto-d3eca7d3485314d5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx35pY2PzNiVrmb0sp4AaABAg",
      "date": "2026-11-22",
      "text": "Kenapa harus di samar2in gtu kek orang pelaku pidana wkwkw kan dia emg kerja klo sesuai ojk ga perlu takut",
      "url": "https://www.youtube.com/watch?v=H6Nhm0-64a4",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.65,
        "lexiconRisk": 50.0
      },
      "id": "a1eb8037d1598c44",
      "eventId": "auto-66f045b05c7a730e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxudumVgz6G1V-z_Ch4AaABAg",
      "date": "2026-11-22",
      "text": "Kita kasih bintang 1 aplikasi pinjol",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 12,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "27996123ed38eac9",
      "eventId": "auto-4440b4b46467be2f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzGNmu9S0t3H23RhZJ4AaABAg",
      "date": "2026-11-22",
      "text": "Laporkan pinjol ini utk diproses hukum krn hy pinjol illegal yg nagih pakai ancaman. Gara Gara pinjol ibu nya meninggal krn diancam terus",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 837,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 57.0
      },
      "id": "1cef6d80fddb659d",
      "eventId": "auto-ae50be57f5b7d2e8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugz3gxo2JPkg4-aBk6J4AaABAg",
      "date": "2026-11-22",
      "text": "Makanya gw lebih suka ngajuin pinjaman nya langsung ke bank,koperasi,Ama orang nya langsung. Gw paling anti yg namanya pinjol😂",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "45f52ef32efef558",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c969450a7a72551c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy30r9F-3WZhD8bYAZ4AaABAg",
      "date": "2026-11-22",
      "text": "Makanya kenapa kapitalisme itu gatel😅😅",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 20,
      "id": "3daecdf775869308",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d19cabf72420eff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwlDB_r4oH1OiJwhhR4AaABAg",
      "date": "2026-11-22",
      "text": "Orang² MALES produktif kali pegang DUIT.",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "98c8081a87134c89",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a0847a0549ba39a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwVZUeLadcAjM4nsXx4AaABAg",
      "date": "2026-11-22",
      "text": "Pelajaran untuk kita semua,se mepet apapun kita,se enggak bisa makan apapu kita Dan walaupun kita ga punya uang seperak pun,jangan sampai berurusan sama pinjol2 ini.Selain haram,juga bisa menyakiti orang orang di sekitar kita. Rest In Peace 🌹 buat ibu nya.",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 54,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "a6c08b3097ccab00",
      "eventId": "auto-ac24e3b0ffd6b8a3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyWdjRMgIxrLkNBNkd4AaABAg",
      "date": "2026-11-22",
      "text": "Pernah kerja jadi DC. Sistem nya itu, DC sebagai mitra aplikasi peminjam, artinya DC ada di perusahaan terpisah dari aplikasi pinjol, tugas perusahaan nya menagih pinjaman online dari berbagai platform, contoh salah satunya aplikasi yang disebutkan. \n\nSecara tertulis, ada pihak OJK yang akan mengawasi kinerja DC. Tapi untuk kerjanya, hal-hal yang bisa diawasi OJK akan mengikuti SOP perusahaan, sementara beberapa bagian yang tidak bisa diawasi oleh OJK akan berjalan dengan cara bar-bar dan tanpa filter. \n\nKarena saya orang nya gak enakan. Saya kerja cuman sampai training 7 hari dan berhenti karena tahu bagaimana sistem nya berjalan. 😐",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 53,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 44.4
      },
      "id": "bcf02ac7bf17e56e",
      "eventId": "auto-f2a08a73af56ca22",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwFFVujtDm1zC-bSKB4AaABAg",
      "date": "2026-11-22",
      "text": "Resikonya kalau gagal bayar atau orang gak tahu diri",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "fac24490f0d335ce",
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-94cc36bf135793d8",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzH48fm_wWQOele_n94AaABAg",
      "date": "2026-11-22",
      "text": "SEMUA SALAH HUKUM YANG TOLOL DI INDONESIA INI.\nDC PUNYA BANYAK NOMOR KOK BISA??? APA CYBERCRIME DAN PIHAK2 BERWENANG JADI BEKING??? 😂😂😂",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 8,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "30bfedd8923915af",
      "eventId": "auto-9b4b5be217ee8ed6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugy-4ldgZ9bXQ-68coR4AaABAg",
      "date": "2026-11-22",
      "text": "Semoga dapat dana kaget semoga bermanfaat buat aku dan Abang nya",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "6d0b59d023b3e869",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-84b0ea77cd41eee9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXYxc2q9pL5bmXJHh4AaABAg",
      "date": "2026-11-22",
      "text": "Semoga dosa2 almh ibu tsb ditanggung yang ngancam, ingat itu para DC catatan malaikat lebih akurat dari pada pinjol.",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 2,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 66.1
      },
      "id": "00a9c5d8f11c2a4e",
      "eventId": "auto-732b7620a99361a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgycBqQ0xpDF_X9mbmx4AaABAg",
      "date": "2026-11-22",
      "text": "Semoga lancar terus rejekinya abang,tuhan memberkatimu",
      "url": "https://www.youtube.com/watch?v=pPnDQheO0vQ",
      "engagement": 0,
      "id": "99161dcc4f617d75",
      "sentiment": {
        "risk": 43.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bdba1a3777dc1255",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwV-v2OhOGoNLN1FwB4AaABAg",
      "date": "2026-11-22",
      "text": "Semoga penagihnya, semua kehilangan keluarganya. Ibu, anak, istri, kakak dan adik",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 114,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "50b7ae9bcfa11a9b",
      "eventId": "auto-69897dba70b91827",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwAWMdbKQVuBQmpX2x4AaABAg",
      "date": "2026-11-22",
      "text": "Untung gwe gak pernah pinjol dan kalau itu terjadi d kluarga gwe gue samperin perusahaanya gwe cari DC nya gwe bantai smua kluarganya",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 82,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "efebf71b95b65c09",
      "eventId": "auto-ba428ffc173df933",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxjDadVLFcUtAreC4N4AaABAg",
      "date": "2026-11-22",
      "text": "apsen yang kecekek pinjol (gw mau jual laptop gw biar bisa ngelarin jir, untung tinggal sekali bayar lagi)",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 2,
      "id": "92359fcd6c61506e",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8ca47747c9061f40",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzJy2jQF2wJnAK5q6t4AaABAg",
      "date": "2026-11-22",
      "text": "gw kasih bintang satu dan komplen marah marah gara gara dapat notif penawaran paylatter dari e-commersnya langsung gak dapat pesan penawaran lagi gw. 😅",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 6,
      "id": "42a9a3753b24d061",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fc99abc841161657",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "_jsci5m59tA",
      "date": "2026-11-22",
      "text": "hati hati sama pinjol",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 19771,
      "id": "860529df403cb7cd",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-70bc0b210282cded",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxqLXnVx_fktMdG53t4AaABAg",
      "date": "2026-11-22",
      "text": "pinjol, debkolektor, mereka punya organisasi yang mumpuni, mereka berani bertindak sesukanya karena mereka tahu kelemahan aparat pemerintah dan dimata mereka aparat pemerintah tidak ada apa apa nya hingga mereka sangat berani bertindak sesukanya nhn.",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "83a649aa909c3f42",
      "eventId": "auto-c97d87e7bd0e9771",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyRSR_G2zN3EvcIR6x4AaABAg",
      "date": "2026-11-23",
      "text": "Bang, kenapa banyak kresit online kasih cicilan 0% apa mereka gak rugi? Apa mereka mencari impulsif pembeli biar misal² telat bayar mereka dapat uang dan mengikat kontrak ke nasabah? \n\nSoalnya sekarang banyak yang kasih harga cicilan 12 bulan",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "58476cf8aba55e89",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-8b403e219cadf848",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyEtDu1JnLSShG3_sx4AaABAg",
      "date": "2026-11-23",
      "text": "Bank : pinjam dengan syarat jaminan \nPinjol : pinjam tanpa syarat yang penting siap gak siap ditagih",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "c2a025c57f667a5d",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-310a9c8c22e3c920",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyp3yUFKeF4lWrgwOh4AaABAg",
      "date": "2026-11-23",
      "text": "Bunga yang dipake bunga majemuk.\nPaling brutal!",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "e0ba82793300bca4",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6e4ac2878f7d3478",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzBTdjEHi6wUZNJo5F4AaABAg",
      "date": "2026-11-23",
      "text": "DC ancam2 bs dipidanakan,dgn bukti chat wa..lapor polisi untuk proses hukum pengadilan,sampai masuk penjara!!😬💪",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 66.1
      },
      "id": "19ec8e1aad5f4333",
      "eventId": "auto-f1f7c8d575af010a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwLOdjpIZD-jlGTnWl4AaABAg",
      "date": "2026-11-23",
      "text": "Ganggu banget iklan pinjol d setiap video yt, dah mah ada iklan nya ampe 1 menit lebih... \nHidup dah aman kaga ada utang2 eh malah d tawarin dari iklan, kesel banget jirr",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "82fba4ae3e593bae",
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4c15b2ab720d2a87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgyIUVpBRWOvyKLey1p4AaABAg",
      "date": "2026-11-23",
      "text": "Gue beli / naik ojol kalau ada sistem payleter bener2 murah kek dibawah harga standar tapi ya rugi ke diri sendiri karena aku ogah payleter karena ribet harus bayar lagi bayar lagi tiap bulan ya mending cash",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "f44bed9ff89b252b",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-609041c4f278cfd2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugx6YlqyJO-d1Hjb5Yp4AaABAg",
      "date": "2026-11-23",
      "text": "Ilusi Per Hari sungguh Mematikan.🎉🎉🎉",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "71adb47529a7b86c",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6cfa2b4e9b8022e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxVq_XbE6clcNphZsh4AaABAg",
      "date": "2026-11-23",
      "text": "Itulah kenapa Islam sangat memusuhi RIBA. Sayangnya umat Islam nya sendiri banyak yang jatuh ke perangkap RIBA. Sedih.😢",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "0ab4a4c85d0ab813",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c5d7d2fe1b7d5778",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxQdVA6sOuWPXqfWF54AaABAg",
      "date": "2026-11-23",
      "text": "Mamaku aku larang pake paylater,Sumpil aku lebih baik mencegah di banding nanti dia kecanduan pake paylater:).",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "c6d39ab7fd04205a",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f47db12cd921b503",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwfNut-Qh_z95ImypZ4AaABAg",
      "date": "2026-11-23",
      "text": "Pinjol yang katanya legal aja 1% 2% per hari ,dan misal minjem 7 hari ,hitungan bunga 7 hari udh harus di bayar padahal baru minjem detik itu ,gk bisa bayar 1 2 hari tapi harus bayar 7 harinya 😮 blom dipotong biaya admin",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 1,
      "id": "d9ecc7d9de3a622e",
      "sentiment": {
        "risk": 46.5,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d92cd8110e0544a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxigotoTVEI3BRdIP14AaABAg",
      "date": "2026-11-23",
      "text": "Rata2 investor pinjol juga dari mainland china, yang mereka pindah karena pemerintah gak bolehin pinjol.",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 0,
      "id": "b5b3f3d843f485cc",
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6e2e745b21c053b8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgynofiOXR2mmaYoo9t4AaABAg",
      "date": "2026-11-23",
      "text": "Tanpa pinjaman 20-40% saham bank bakalan anjlok",
      "url": "https://www.youtube.com/watch?v=_jsci5m59tA",
      "engagement": 1,
      "id": "d0fcb4a4571cfab9",
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2d5b249e311eb551",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwfF-yXVWTRLPNGyL94AaABAg",
      "date": "2026-11-23",
      "text": "Udahlah guys seterdesak apapun kalian usahakan jangan pakai pinjol, lebih baik cari kerjaan sampingan kalau lagi butuh uang",
      "url": "https://www.youtube.com/watch?v=9_ubUpucl8c",
      "engagement": 1,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.85,
        "lexiconRisk": 50.0
      },
      "id": "082953ef0fbf4046",
      "eventId": "auto-71f3c33abbaec216",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "Ugyjp8KY668OzVN3XLN4AaABAg",
      "date": "2026-11-23",
      "text": "semoga yg nonton banyak ''supaya dapet uang hasil ngonten''😂",
      "url": "https://www.youtube.com/watch?v=OR9dbfgfvcA",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.6,
        "lexiconRisk": 50.0
      },
      "id": "31e1cd70df3716dd",
      "eventId": "auto-30b7d9dbec5a36ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgwXmb9eN2qPQvnsDRN4AaABAg",
      "date": "2026-11-24",
      "text": "YaAllah suami nya bener2 siap jd suami dan ini ujiannya suami istri..",
      "url": "https://www.youtube.com/watch?v=TeV531x9nW8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "095f9655151f457a",
      "eventId": "auto-c8bb5f6182789c7d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    }
  ],
  "reviewRequired": true,
  "collectionDiagnostics": {
    "mode": "live_multi_source_v2",
    "successfulChannels": [
      "google_trends",
      "youtube"
    ],
    "failedOrUnavailableChannels": {
      "google_news": "All Google News queries failed: \"pinjaman online\" OR pinjol OR pindar: HTTP Error 503: Service Unavailable | Kredivo OR KrediFazz OR AdaKami OR \"Kredit Pintar\" OR Easycash: HTTP Error 503: Service Unavailable | OJK (pinj",
      "media_rss": "Collector ran successfully but found no relevant records.",
      "gdelt": "HTTP Error 429: Too Many Requests",
      "kaskus": "Collector ran successfully but found no relevant records.",
      "reddit": "Reddit searches failed: indonesia: HTTP Error 403: Blocked | finansial: HTTP Error 403: Blocked",
      "x": "X_BEARER_TOKEN is not configured"
    },
    "socialClassifier": {
      "method": "deepseek_credit_social_v1",
      "status": "ok",
      "inputCount": 527,
      "classifiedCount": 161,
      "irrelevantDropped": 79,
      "model": "deepseek-chat",
      "fallbackCount": 287,
      "labelCounts": {
        "NEG": 79,
        "MIX": 59,
        "POS": 23
      }
    }
  },
  "sourceMode": "live:multi-source-v2.1"
};
