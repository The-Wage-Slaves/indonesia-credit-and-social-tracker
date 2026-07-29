const CREDIT_SENTIMENT = {
  "schemaVersion": 2,
  "status": "pilot-pending-human-review",
  "asOf": "2026-07-29",
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
      "detail": "Collected 368 relevant records/signals."
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
      "status": "failed",
      "detail": "The request failed: Google returned a response with code 429"
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
      "detail": "Collected 42 relevant records/signals."
    },
    "reddit": {
      "family": "social",
      "label": "Reddit r/indonesia",
      "access": "public_or_oauth",
      "status": "failed",
      "detail": "HTTP Error 403: Blocked"
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
    "level": "red",
    "active": [],
    "triggerReasons": [
      "news_social_cross_signal"
    ],
    "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
    "pendingHighSeverity": [
      {
        "id": "auto-6aeb18c829da4932",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "28f1fd9501091d84"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "insiden24.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Skandal Kamar Kos Purworejo: Kala Utang Pinjol Berujung Penggerebekan Suami dan Panggilan Tegas OJK - Insiden 24 - Insiden 24"
      },
      {
        "id": "auto-6f42bf0dd2555f44",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "65c5fa4e663263e5"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "cnbcindonesia.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Bos Kredivo Dipanggil OJK, Ternyata Ini Pemiliknya - CNBC Indonesia"
      },
      {
        "id": "auto-7ba3d4f9a46e8774",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "1cda3484cf234479"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "liputan6.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Penagih Utang Bermasalah, Kredivo dan KrediFazz Dipanggil OJK - Liputan6.com"
      },
      {
        "id": "auto-c78f5bbabce504ed",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "1bfa865266e9cbea"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "kalteng.co"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Viral di Medsos: Modus Mesum DC Kredivo Minta Bayar Cicilan Pakai Seks, Anggota DPR RI Desak OJK Cabut Izin Usaha! - Kalteng.co"
      },
      {
        "id": "kredivo-kredifazz-purworejo-2026-07",
        "eventType": "regulatory_action",
        "severity": 0.92,
        "articleIds": [
          "ee4e5558e174880f",
          "a16d6ff82735391a",
          "5669074934dbab72",
          "3faa0d7e8854d68f",
          "0a2f8e3e7bafbc95",
          "c353a7bc666ae364",
          "a0953bd24dfc8c11",
          "fb8cbd9ed476a793",
          "523f15018e5a238c",
          "67a0313a6dde9e46",
          "5da8f87993b2d1e8",
          "8994a9ffaac96737",
          "3c217fc378a4e8a6",
          "24edd40585eb2cf2",
          "750fa92d35dd4cb7",
          "b7072dccaecd670b",
          "6a9c14eabb5e9f60",
          "b2e94b233e1dffaa",
          "5a6845adb977e383",
          "57864e8eb8f072e5",
          "416be4d757168ad2",
          "6233bf614860ae02",
          "9a65488cddcbb61e",
          "c4cc0d8d3c24410f",
          "b551ba44885889ca",
          "0231440178586b40",
          "b0204227b464c58c",
          "86b967af1a8792de",
          "f65326be32cdecfe",
          "7cf9aca8d7c69ae4",
          "3f763ecd02a860f1",
          "882e0b4aefb1a73c",
          "bffd961da86a3e3f",
          "3cb456fc4dab40a1",
          "e1d60053a927ab89",
          "c808004e82ea8301",
          "1d708ffa218b3d44",
          "c9950a90445645d3",
          "00067d41fa6eec96",
          "d7205317c4aea6fe",
          "3feee0e5094ad933",
          "64f2f0aae4b7bfef",
          "75508ef55a6ce09a",
          "12a97348eb622049",
          "2ca040cc38756c9d",
          "c99d3bdc1b061e83",
          "f5829161ef605427",
          "740009e5d0c71e48",
          "1b0bf73bfc591996",
          "4173ccbec2f6165a",
          "79d753738570d760",
          "6d87b061544d9d19",
          "965cb6c58c6e8441",
          "577da0c45c414178",
          "acaf04e88e45e0a2",
          "05b00f3f18e7f9a4",
          "44492579718e08d2",
          "4a25192ebd09a465",
          "6e79d5bac8e7c3f8",
          "42ab0b57d63c5ba3",
          "447ffd9c4a7dd1b8",
          "316877afdf4b82a3",
          "ba3ce24671a99a6a",
          "d229158ea59af954",
          "fc04e026da9258ee",
          "44411a58e8193c34",
          "64d29f087087d5ce",
          "5cd376738d73a8da",
          "7884562d570a4c63",
          "a0ef01a6a0f63e5f",
          "d47754a9fb9d081f",
          "e905290698ff9914",
          "6820e02e03df3539",
          "0a9825c43c6f1e79",
          "8187db99e8599af6",
          "4a39b371845ce090",
          "9675753e348f6d83",
          "260a65d231505625",
          "6e412eb2fb1e5a94",
          "de682c580427a6c8",
          "a076fc84853430e6",
          "d7e120db09cc0053",
          "bdd173c49c27346b",
          "75d0463032044468",
          "a2ca5a15ab9fc87f",
          "e2fdc23b25603457"
        ],
        "socialItemIds": [],
        "independentSourceCount": 65,
        "domains": [
          "achmadnurhidayat.id",
          "afu.id",
          "akses.co.id",
          "asatunews.co.id",
          "bantenpro.co.id",
          "bantenraya.com",
          "beritajejakfakta.id",
          "beritasatu.com",
          "bisnisia.id",
          "bloombergtechnoz.com",
          "carapandang.com",
          "cnnindonesia.com",
          "deliknews.com",
          "detik.com",
          "economy.okezone.com",
          "ekbisbanten.com",
          "feedberry.com",
          "finansial.bisnis.com",
          "flores.pikiran-rakyat.com",
          "fortuneidn.com",
          "gesuri.id",
          "harianberkat.com",
          "ibukotakini.com",
          "id.headtopics.com",
          "id.tradingview.com",
          "investor.id",
          "investortrust.id",
          "jakartakota.pikiran-rakyat.com",
          "jatengpos.co.id",
          "jawapos.com",
          "keuangan.kontan.co.id",
          "kilat.com",
          "kompas.tv",
          "kompasiana.com",
          "lidik.id",
          "liputan6.com",
          "m.gosumut.com",
          "magelangnews.com",
          "media.alkhairaat.id",
          "merdeka.com",
          "metrojateng.com",
          "money.kompas.com",
          "news.indozone.id",
          "ntvnews.id",
          "pantau.com",
          "pdiperjuanganbali.id",
          "pewarta.co",
          "pikiran-rakyat.com",
          "portalmadura.com",
          "qoo10.co.id",
          "radioidola.com",
          "rri.co.id",
          "sinarharapan.co",
          "stabilitas.id",
          "stockwatch.id",
          "suara.com",
          "supernews.co.id",
          "terkenal.co.id",
          "theiconomics.com",
          "tirto.id",
          "tradingview.com",
          "voi.id",
          "wartaekonomi.co.id",
          "westjavatoday.com",
          "youngster.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Buntut Kasus Viral, OJK Panggil Manajemen Kredivo dan KrediFazz - stockwatch.id"
      },
      {
        "id": "auto-0f2c5f8ff0e43998",
        "eventType": "consumer_harm",
        "severity": 0.86,
        "articleIds": [
          "8a8164ee18f08371"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "pantau.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Pakar Desak AFPI dan OJK Evaluasi Total Tata Kelola Penagihan Pinjaman Daring usai Dugaan Pelecehan - pantau.com"
      },
      {
        "id": "auto-445fc48d2482e836",
        "eventType": "consumer_harm",
        "severity": 0.86,
        "articleIds": [
          "265b53bc4e8f968c"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "merdeka.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Cerita Lengkap Nasabah Wanita di Purworejo Alami Pelecehan Saat Ditagih Debt Collector - Merdeka"
      },
      {
        "id": "auto-6e394600d136a122",
        "eventType": "consumer_harm",
        "severity": 0.86,
        "articleIds": [
          "388ee05754c4235d"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "wow.tribunnews.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Viral Dugaan Pelecehan oleh Oknum Debt Collector Pinjol, Polisi Masih Selidiki Kasusnya - TribunWow.com"
      },
      {
        "id": "auto-9616030780be2943",
        "eventType": "consumer_harm",
        "severity": 0.86,
        "articleIds": [
          "4b6af6a3dbcc7e56"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "rakyatterkini.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "OJK Dalami Dugaan Pelecehan oleh Debt Collector - rakyatterkini.com"
      },
      {
        "id": "auto-a0e8417559ede6a8",
        "eventType": "consumer_harm",
        "severity": 0.86,
        "articleIds": [
          "e64920ebafed4071"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "jpnn.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Kasus Dugaan DC Intimidasi Nasabah di Purworejo Berakhir Damai - JPNN.com"
      },
      {
        "id": "debt-linked-school-threat-2026-07",
        "eventType": "consumer_harm",
        "severity": 0.86,
        "articleIds": [
          "9192a4b2759f084c",
          "8311c181f5bf2891"
        ],
        "socialItemIds": [
          "098db5b6dc31d592",
          "017fa78bdfcff2bf",
          "aeca83655f65b66a",
          "df73f69e6cc153e0"
        ],
        "independentSourceCount": 3,
        "domains": [
          "jakarta.viva.co.id",
          "suara.com",
          "youtube.social"
        ],
        "platforms": [
          "youtube"
        ],
        "hasPrimarySource": false,
        "headline": "Jangan Asal Klik! DPR Ingatkan Bahaya Pinjol Ilegal yang Bisa Sedot Data dan Teror Korban - VIVA Jakarta"
      },
      {
        "id": "auto-00a3364c6fc7591f",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "2766136f4f092e43"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "money.kompas.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Foto : Pinjol Resmi OJK Terbaru Juli 2026, Cek Daftarnya agar Tak Terjebak Pinjol Ilegal - Kompas.com"
      },
      {
        "id": "auto-08f423814e791efe",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "7596921b14a6772b"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "rri.co.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Komisi I DPR: Literasi Digital Kunci Cegah Masyarakat Terjebak Pinjol Ilegal - RRI.co.id"
      },
      {
        "id": "auto-0d7233df6a70d687",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "1067a8542ff0788c"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "banjarbaruklik.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "OJK Edukasi Nelayan Konawe Waspadai Pinjol Ilegal dan Investasi Bodong - banjarbaruklik.com"
      },
      {
        "id": "auto-10743a4d5564b4dd",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "51c55c5cda2ff807"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "tribunnews.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Gandeng OJK, Perusahaan Pembiayaan Bagikan Alat Posyandu Sekaligus Bentengi Warga dari Pinjol Ilegal - Tribunnews.com"
      },
      {
        "id": "auto-18303ea08aea0ea3",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "9149bd578dbc6fc1"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "humas.polri.go.id"
        ],
        "platforms": [],
        "hasPrimarySource": true,
        "headline": "Polda Maluku Gandeng OJK, Bank Indonesia dan RRI Perkuat Literasi Digital, Ajak Masyarakat Lawan Pinjol Ilegal dan Lindungi Data Pribadi - DIVISI HUMAS POLRI"
      },
      {
        "id": "auto-2735719a7b165d3c",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "1bcd777b9588a6db"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "polrestasleman.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Bentengi Generasi Muda dari Jeratan Judi Online dan Pinjol Ilegal, Polsek Prambanan Beri Penyuluhan di Gayamharjo - polrestasleman.com"
      },
      {
        "id": "auto-2dafb101d7fc5db3",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "162d3487bf8086ae"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "radartegal.disway.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Tak Perlu Pusing, Begini Cara Menghapus Data Pinjol Ilegal Secara Permanen - radartegal.disway.id - Radartegal.com"
      },
      {
        "id": "auto-477fe7d22b7d2935",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "3196c3c9c6820707"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "money.kompas.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Pinjol Resmi OJK Terbaru Juli 2026, Cek Daftarnya agar Tak Terjebak Pinjol Ilegal - Kompas.com"
      },
      {
        "id": "auto-4fe82ccf6df2aea6",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "e5f8e252c4a44850"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "indonesiamediacenter.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Kajari Tangsel Apreza Darul Putra: Rp14,26 Miliar Hasil Kejahatan Pinjol Ilegal Resmi Dirampas untuk Negara - Indonesia Media Center"
      },
      {
        "id": "auto-6be01951e5b93456",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "b4bcfcbe6e5702d2"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "rri.co.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Stop Pinjol Ilegal, Lindungi Data Pribadii, Perkuat Sinergi Pemerintah - RRI.co.id"
      },
      {
        "id": "auto-743fe8695a7d8d96",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "9ada5f7fc2866a89"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "regional.kompas.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Foto : Tumpukan Uang Rp 14,2 Miliar dari Kasus Pinjol Ilegal Disetor ke Kas Negara - Kompas.com"
      },
      {
        "id": "auto-776f89964bf6c41d",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "90e26dd81dba90aa"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "news.republika.co.id"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Kejari Tangsel Setor Rp14,2 Miliar Hasil Sitaan Kasus Pinjol Ilegal ke Kas Negara - republika.co.id"
      },
      {
        "id": "auto-806e329340088b00",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "1672eb045c8ee7d7"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "poskota.co"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Kejari Tangsel Setor Rp14,26 Miliar Uang Rampasan Kasus Pinjol Ilegal ke Kas Negara - Poskotaonline"
      },
      {
        "id": "auto-99284cd55244bc75",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "c6bfef3713329dab"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "kabar6.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Kejari Tangsel Rampas Uang Rp14 Miliar Lebih dari Pinjol Ilegal - Kabar6.com"
      },
      {
        "id": "auto-9f947e6a10499d94",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "bfac3876a0df0a76"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "berlianmedia.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Tim KKN UNDIP Perkuat Literasi Keuangan dan Digital Warga Nyatnyono, Waspadai Pinjol Ilegal, Judol, dan Narkoba - Berlian Media"
      },
      {
        "id": "auto-a446552865173015",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "4a5bf755265b3b13"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "kabar6.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Kejari Tangsel: Tiga Bos Pinjol Ilegal Dihukum 1,8 Tahun Penjara - Kabar6.com"
      },
      {
        "id": "auto-b0ffbcaf05753b79",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "5ccc917388041d2b"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "liputan6.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Hoaks terkait OJK Beredar di Media Sosial, Simak Agar Terhindar dari Penipuan - Liputan6.com"
      },
      {
        "id": "auto-b485c3b1d71e2b51",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [],
        "socialItemIds": [
          "e20c4fd504f560d3"
        ],
        "independentSourceCount": 1,
        "domains": [
          "youtube.social"
        ],
        "platforms": [
          "youtube"
        ],
        "hasPrimarySource": false,
        "headline": "Pinjol Ilegal dan Jebakan Link  Cara Mereka Menjerat Korban dengan Mudah!"
      },
      {
        "id": "auto-bdf3d5793231f4ea",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "6ef6bcd5b5df82c0"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "kabarpapua.co"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Cegah Investasi Bodong dan Pinjol Ilegal, OJK Papua Edukasi ASN Kepulauan Yapen - KabarPapua.co"
      },
      {
        "id": "auto-c7e72da6bce5307f",
        "eventType": "fraud_or_illegal_practice",
        "severity": 0.74,
        "articleIds": [
          "51b1bfba794967ad"
        ],
        "socialItemIds": [],
        "independentSourceCount": 1,
        "domains": [
          "ambonkita.com"
        ],
        "platforms": [],
        "hasPrimarySource": false,
        "headline": "Perkuat Literasi Digital, Polda Maluku Ajak Masyarakat Lawan Pinjol Ilegal dan Lindungi Data Pribadi - Ambonkita.com"
      }
    ]
  },
  "weeks": [
    {
      "weekStart": "2026-07-13",
      "weekEnd": "2026-07-19",
      "fearIndex": 74.9,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 0.6,
      "engines": {
        "news": {
          "score": 71.2,
          "volume": 82.9,
          "negativity": 56.6,
          "itemCount": 44,
          "negativeShare": 14.9,
          "uniqueSources": 30
        },
        "social": {
          "score": null,
          "volume": null,
          "negativity": null,
          "itemCount": 0,
          "negativeShare": 0.0,
          "platformCount": 0,
          "engagementUnits": 0.0
        }
      },
      "components": {
        "newsVolume": 82.9,
        "newsTone": 56.6,
        "socialVolume": null,
        "socialNegativity": null,
        "severeEvent": 86.0
      },
      "articleCount": 44,
      "socialPostCount": 0,
      "uniqueSourceCount": 30,
      "socialPlatformCount": 0,
      "negativeArticleShare": 14.9,
      "negativeSocialShare": 0.0,
      "confidence": 0.588,
      "coverage": {
        "successfulChannels": [
          "google_news",
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
        "socialChannels": 1
      },
      "volumeNotes": {
        "news": "Pilot week-on-week ratio: 5.62x; 2/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 1.00x; 2/8 baseline weeks."
      },
      "alert": {
        "level": "amber",
        "active": [
          {
            "id": "debt-linked-school-threat-2026-07",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "articleIds": [
              "bee7f9be35d953b1",
              "d509f64b3baf18ef",
              "11dc927c3812f856",
              "44cc01fb4e237727",
              "6eea7d0f59226732",
              "d1e9e9853f452d45",
              "b5d7dd9be42870ca",
              "b9cc7529d2550a3c"
            ],
            "socialItemIds": [],
            "independentSourceCount": 6,
            "domains": [
              "jpnn.com",
              "kepri.antaranews.com",
              "kompas.tv",
              "megapolitan.kompas.com",
              "news.detik.com",
              "tvonenews.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Pelaku Teror Bom di SDN Srengseng Sawah 15 Jakarta Selatan Diduga Terlilit Pinjol - Kompas.tv"
          },
          {
            "id": "auto-4c8457d7f62c04a2",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "0091e77712e8f068"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "tvonenews.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Bukan Main! Satgas PASTI Blokir 951 Pinjol Ilegal dan 238 Investasi Bodong, OJK Ungkap Modus Baru yang Marak Menjerat Korban - tvOneNews"
          },
          {
            "id": "auto-b3eb2d3caa5d5261",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "f1290a0d4a4bfe20"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "radarcirebon.disway.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Jangan Coba-Coba Judol dan Pinjol Ilegal! Diskominfo Kuningan Beberkan Dampaknya kepada Pelajar - radarcirebon.disway.id - Radar Cirebon"
          },
          {
            "id": "pindar-tadpole-practice-2026-07",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "e13107f10f3a146b"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "suara.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Awas Skema Pinjol Tadpole, Bunga Harian Bisa Capai 10% - Suara.com"
          }
        ],
        "triggerReasons": [],
        "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
        "pendingHighSeverity": [
          {
            "id": "debt-linked-school-threat-2026-07",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "articleIds": [
              "bee7f9be35d953b1",
              "d509f64b3baf18ef",
              "11dc927c3812f856",
              "44cc01fb4e237727",
              "6eea7d0f59226732",
              "d1e9e9853f452d45",
              "b5d7dd9be42870ca",
              "b9cc7529d2550a3c"
            ],
            "socialItemIds": [],
            "independentSourceCount": 6,
            "domains": [
              "jpnn.com",
              "kepri.antaranews.com",
              "kompas.tv",
              "megapolitan.kompas.com",
              "news.detik.com",
              "tvonenews.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Pelaku Teror Bom di SDN Srengseng Sawah 15 Jakarta Selatan Diduga Terlilit Pinjol - Kompas.tv"
          },
          {
            "id": "auto-4c8457d7f62c04a2",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "0091e77712e8f068"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "tvonenews.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Bukan Main! Satgas PASTI Blokir 951 Pinjol Ilegal dan 238 Investasi Bodong, OJK Ungkap Modus Baru yang Marak Menjerat Korban - tvOneNews"
          },
          {
            "id": "auto-b3eb2d3caa5d5261",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "f1290a0d4a4bfe20"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "radarcirebon.disway.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Jangan Coba-Coba Judol dan Pinjol Ilegal! Diskominfo Kuningan Beberkan Dampaknya kepada Pelajar - radarcirebon.disway.id - Radar Cirebon"
          },
          {
            "id": "pindar-tadpole-practice-2026-07",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "e13107f10f3a146b"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "suara.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Awas Skema Pinjol Tadpole, Bunga Harian Bisa Capai 10% - Suara.com"
          }
        ]
      },
      "events": [
        {
          "id": "debt-linked-school-threat-2026-07",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "bee7f9be35d953b1",
            "d509f64b3baf18ef",
            "11dc927c3812f856",
            "44cc01fb4e237727",
            "6eea7d0f59226732",
            "d1e9e9853f452d45",
            "b5d7dd9be42870ca",
            "b9cc7529d2550a3c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 6,
          "domains": [
            "jpnn.com",
            "kepri.antaranews.com",
            "kompas.tv",
            "megapolitan.kompas.com",
            "news.detik.com",
            "tvonenews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pelaku Teror Bom di SDN Srengseng Sawah 15 Jakarta Selatan Diduga Terlilit Pinjol - Kompas.tv"
        },
        {
          "id": "auto-4c8457d7f62c04a2",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "0091e77712e8f068"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tvonenews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bukan Main! Satgas PASTI Blokir 951 Pinjol Ilegal dan 238 Investasi Bodong, OJK Ungkap Modus Baru yang Marak Menjerat Korban - tvOneNews"
        },
        {
          "id": "auto-b3eb2d3caa5d5261",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "f1290a0d4a4bfe20"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarcirebon.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Jangan Coba-Coba Judol dan Pinjol Ilegal! Diskominfo Kuningan Beberkan Dampaknya kepada Pelajar - radarcirebon.disway.id - Radar Cirebon"
        },
        {
          "id": "pindar-tadpole-practice-2026-07",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e13107f10f3a146b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Awas Skema Pinjol Tadpole, Bunga Harian Bisa Capai 10% - Suara.com"
        },
        {
          "id": "auto-02d1d10b99532a82",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "2a75db06332a46a6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Apa Itu TWP90? Indikator Kredit Macet Pinjol yang Dipantau OJK - Kompas.com"
        },
        {
          "id": "auto-4304528b393d1798",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "b89f929d8f1ff867"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: 8 Pindar Belum Kantongi Ekuitas Rp12,5 Miliar, 18 Masih Punya TWP90 Tinggi - Bisnis.com"
        },
        {
          "id": "auto-4a602c61f463e835",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "6970805502983d21"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Kantongi 18 Pindar dengan TWP90 di Atas 5%, 10 Masuk Pengawasan Khusus - Warta Ekonomi"
        },
        {
          "id": "auto-6d0171f0e8be8980",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "f5f60cf7174796f5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat 18 Pindar Punya Kredit Macet (TWP90) di Atas 5 Persen - Infobanknews"
        },
        {
          "id": "auto-85ced535377e3d7d",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "21e2728578c92bd6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Apa Itu TWP90? Indikator Kredit Macet Pinjol yang Dipantau OJK Halaman 3 - Kompas.com"
        },
        {
          "id": "auto-14675e011bbb2249",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0ef7dd5a66e562a4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "itera.ac.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cara Pinjam Saldo DANA Tanpa KTP Langsung Cair ke Rekening Terbaru - Halaman Utama - ITERA"
        },
        {
          "id": "auto-203aa31921407139",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e2ef229143476f1b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pontianakpost.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasad Minta Prajurit TNI AD Jaga Integritas, Hindari Judi Online hingga Pinjol - PontianakPost"
        },
        {
          "id": "auto-288b923faa558033",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7f8db8e0d2e0ae68"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Tambahan Dana SAL di Himbara Berpotensi Perkuat Pendanaan Industri Pindar - Infobanknews"
        },
        {
          "id": "auto-28acb6fe7277c626",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b1ac8a59fb6ea608"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Bentengi Pelajar dari Pinjol dan Judol, Unit Binmas Polsek Mergangsan Isi Materi MPLS di SMA UII - Polda DIY"
        },
        {
          "id": "auto-2a4a4ce3da70ceae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b9a46de2263a37ce"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribratanews-restulangbawangbarat.lampung.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Kapolsek Tumijajar Jadi Narasumber MPLS, Edukasi Bahaya Judi Online dan Pinjaman Online di SMAN 3 Tumijajar - Website Resmi Polri"
        },
        {
          "id": "auto-3c861616d165d14e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8580420ab0668268"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Bentengi Pelajar dari Judi Online dan Pinjol, Polsek Mergangsan Penyuluhan 60 Siswa SMK BOPKRI 2 - Polda DIY"
        },
        {
          "id": "auto-443ad9007c066c6c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f12a8fa295f4fda3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabarprima.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Paylater Makin Populer di Indonesia, Benarkah Membantu atau Justru Menjebak? - kabarprima.com"
        },
        {
          "id": "auto-5f9f024fd81a1d4d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "86ed3cb6a09f5048"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "humas.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Polri Gandeng UPH dan Komdigi Edukasi Mahasiswa Cegah Judi Online Lewat Program Polri Goes to Campus - DIVISI HUMAS POLRI"
        },
        {
          "id": "auto-60cc97a54dd73b9d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4242272059bf74ea"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kredit Pinjol ke Sektor Produktif Sentuh Rp34,95 Triliun, Setara 33,70% Outstanding - Bisnis.com"
        },
        {
          "id": "auto-6f36ee021982cd13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a89695e199166da4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Outstanding Pindar Tembus Rp103,73 Triliun, Ekonom Ingatkan Risiko Gali Lubang Tutup Lubang - Warta Ekonomi"
        },
        {
          "id": "auto-750e2e1f6d90d559",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f282214d7811384e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Waspada, Sepanjang 2026, Satgas PASTI DIY Terima Laporan 373 Pinjol IIegal - Media Indonesia"
        },
        {
          "id": "auto-765501bcbfd86015",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f63ecf297608d725"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tempo.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Keliru: Tautan Aktivasi Pinjaman Kredit Digital Paylater - Tempo.co"
        },
        {
          "id": "auto-7a09449fc3d08215",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c3fd4778e21e824a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarbromo.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Terima 133 Laporan Aktivitas Keuangan Ilegal di Pasuruan, Pinjol dan Investasi Ilegal Mendominasi - Radar Bromo"
        },
        {
          "id": "auto-7a1ede81d68b02fc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8c3a60ed3c39adb6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Guru Besar USU Soroti Putusan KPPU soal Bunga Pindar - investor.id"
        },
        {
          "id": "auto-7b5acd71ff6e587f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "573fd0e93e40a918"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "megapolitan.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Judi Online Ancam ASN, Inspektorat DKI Ingatkan Risiko Pinjol hingga Sanksi Disiplin - Kompas.com"
        },
        {
          "id": "auto-80a6261964e450b3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "35da0c8fad148c3c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediahub.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "MPLS SMA UII Diisi Penyuluhan Binmas Polsek Mergangsan, Pelajar Dibekali Waspada Pinjol dan Judol - Media Hub | POLRI"
        },
        {
          "id": "auto-8243a67f1387055c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "43bf8bcb83700510"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jpnn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Inovasi Kredit Pintar Raih 3 Penghargaan di Ajang CX Asia Excellence Awards 2026 - JPNN.com"
        },
        {
          "id": "auto-9952de5ac74bc4a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4bc81586db7d4217"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Porsi Kredit Produktif Pindar Susut Jadi 33,70%, Makin Jauh dari Target OJK - Warta Ekonomi"
        },
        {
          "id": "auto-9c5d111e4da14ac1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1b4169caf4353a96"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "afu.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Satgas Pinjol dan Judi Daring: Dasar Hukum Kuat, Koordinasi Jangan Lemah - AFU.id"
        },
        {
          "id": "auto-9f9e9c86bd3e45b0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1de80fff664f1ad1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Warga Jateng Resah Data Pribadi Bocor: Takut Dipakai Pinjol hingga Kecewa Pemerintah Tak Transparan - Kompas.com"
        },
        {
          "id": "auto-9fe327eb695383d1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "afe91997186b2f81"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "4 Cara Agar Nomor HP Anda Tak Ditelepon Pinjol di 2026, Mudah - Bloomberg Technoz"
        },
        {
          "id": "auto-bc4e7411d301a6fa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "10ae88510813dfa0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rm.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "DPR Kecam Debt Collector Rampas Kendaraan Pengemudi Ojol - RM.ID"
        },
        {
          "id": "auto-c203888848587d7a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a3896b718af740f5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "DPRD Jateng: Warga Berhak Tahu jika Datanya Bocor, NIK Curian Berisiko Dipakai Pinjol - Kompas.com"
        },
        {
          "id": "auto-c5e902ba126393e3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "be9872291b1cae66"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bantenraya.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tak Hanya Pinjol, OJK Minta Warga Kepulauan Seribu Waspadai Modus Judol yang Makin Beragam - Banten Raya"
        },
        {
          "id": "auto-f0405775231f6bec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "70f6e8fdc6bbfb23"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tvonenews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "WOW! Utang Pinjol Warga RI Tembus Rp103,73 Triliun, Naik Rp1,66 Triliun dalam Sebulan, OJK Beberkan Faktanya - tvOneNews"
        },
        {
          "id": "auto-f5b6b394925d02fd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3e5b33fd0a576552"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Econext Ventures Ditutup, Diduga Investasi Bodong Berkedok Ekonomi Hijau - detikFinance"
        },
        {
          "id": "auto-f912e449a916087b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7db39a5e3adf2b88"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "7 Rekomendasi Pinjol Terdaftar OJK dan Cepat Cair, Cocok Bagi Anda yang Membutuhkan Dana Darurat - jogja.disway.id - Disway Jogja"
        },
        {
          "id": "auto-115b56af248c2daf",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "fd27c708a1ce5650"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Industri Pindar Raup Laba Rp1,08 Triliun, OJK Ingatkan Risiko - Warta Ekonomi"
        }
      ],
      "articleIds": [
        "2a75db06332a46a6",
        "0091e77712e8f068",
        "21e2728578c92bd6",
        "1b4169caf4353a96",
        "70f6e8fdc6bbfb23",
        "573fd0e93e40a918",
        "f63ecf297608d725",
        "bee7f9be35d953b1",
        "fd27c708a1ce5650",
        "4242272059bf74ea",
        "35da0c8fad148c3c",
        "6970805502983d21",
        "d509f64b3baf18ef",
        "11dc927c3812f856",
        "44cc01fb4e237727",
        "6eea7d0f59226732",
        "d1e9e9853f452d45",
        "b5d7dd9be42870ca",
        "b1ac8a59fb6ea608",
        "0ef7dd5a66e562a4",
        "3e5b33fd0a576552",
        "43bf8bcb83700510",
        "b9a46de2263a37ce",
        "7f8db8e0d2e0ae68",
        "f12a8fa295f4fda3",
        "4bc81586db7d4217",
        "afe91997186b2f81",
        "e13107f10f3a146b",
        "8580420ab0668268",
        "a3896b718af740f5",
        "e2ef229143476f1b",
        "a89695e199166da4",
        "86ed3cb6a09f5048",
        "1de80fff664f1ad1",
        "f282214d7811384e",
        "10ae88510813dfa0",
        "8c3a60ed3c39adb6",
        "f1290a0d4a4bfe20",
        "b9cc7529d2550a3c",
        "f5f60cf7174796f5",
        "c3fd4778e21e824a",
        "7db39a5e3adf2b88",
        "b89f929d8f1ff867",
        "be9872291b1cae66"
      ],
      "socialItemIds": [],
      "_newsVolumeRaw": 44,
      "_socialVolumeRaw": 0.0
    },
    {
      "weekStart": "2026-07-20",
      "weekEnd": "2026-07-26",
      "fearIndex": 76.1,
      "dataStatus": "provisional-partial-coverage",
      "availableFormulaWeight": 1.0,
      "engines": {
        "news": {
          "score": 74.7,
          "volume": 82.7,
          "negativity": 64.7,
          "itemCount": 241,
          "negativeShare": 37.2,
          "uniqueSources": 154
        },
        "social": {
          "score": 71.6,
          "volume": 84.9,
          "negativity": 58.4,
          "itemCount": 22,
          "negativeShare": 50.0,
          "platformCount": 1,
          "engagementUnits": 22.0
        }
      },
      "components": {
        "newsVolume": 82.7,
        "newsTone": 64.7,
        "socialVolume": 84.9,
        "socialNegativity": 58.4,
        "severeEvent": 92.0
      },
      "articleCount": 241,
      "socialPostCount": 22,
      "uniqueSourceCount": 154,
      "socialPlatformCount": 1,
      "negativeArticleShare": 37.2,
      "negativeSocialShare": 50.0,
      "confidence": 0.588,
      "coverage": {
        "successfulChannels": [
          "google_news",
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
        "socialChannels": 1
      },
      "volumeNotes": {
        "news": "Pilot week-on-week ratio: 5.38x; 3/8 baseline weeks.",
        "social": "Pilot week-on-week ratio: 23.00x; 3/8 baseline weeks."
      },
      "alert": {
        "level": "red",
        "active": [],
        "triggerReasons": [
          "news_social_cross_signal"
        ],
        "rule": "Red if a severe event has a primary source plus two independent sources; or fear>=75 with both news and social>=70; or a two-day, two-platform social spike with volume>=80 and negative share>=65%.",
        "pendingHighSeverity": [
          {
            "id": "auto-6aeb18c829da4932",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "28f1fd9501091d84"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "insiden24.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Skandal Kamar Kos Purworejo: Kala Utang Pinjol Berujung Penggerebekan Suami dan Panggilan Tegas OJK - Insiden 24 - Insiden 24"
          },
          {
            "id": "auto-6f42bf0dd2555f44",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "65c5fa4e663263e5"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "cnbcindonesia.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Bos Kredivo Dipanggil OJK, Ternyata Ini Pemiliknya - CNBC Indonesia"
          },
          {
            "id": "auto-7ba3d4f9a46e8774",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "1cda3484cf234479"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "liputan6.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Penagih Utang Bermasalah, Kredivo dan KrediFazz Dipanggil OJK - Liputan6.com"
          },
          {
            "id": "auto-c78f5bbabce504ed",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "1bfa865266e9cbea"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "kalteng.co"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Viral di Medsos: Modus Mesum DC Kredivo Minta Bayar Cicilan Pakai Seks, Anggota DPR RI Desak OJK Cabut Izin Usaha! - Kalteng.co"
          },
          {
            "id": "kredivo-kredifazz-purworejo-2026-07",
            "eventType": "regulatory_action",
            "severity": 0.92,
            "articleIds": [
              "ee4e5558e174880f",
              "a16d6ff82735391a",
              "5669074934dbab72",
              "3faa0d7e8854d68f",
              "0a2f8e3e7bafbc95",
              "c353a7bc666ae364",
              "a0953bd24dfc8c11",
              "fb8cbd9ed476a793",
              "523f15018e5a238c",
              "67a0313a6dde9e46",
              "5da8f87993b2d1e8",
              "8994a9ffaac96737",
              "3c217fc378a4e8a6",
              "24edd40585eb2cf2",
              "750fa92d35dd4cb7",
              "b7072dccaecd670b",
              "6a9c14eabb5e9f60",
              "b2e94b233e1dffaa",
              "5a6845adb977e383",
              "57864e8eb8f072e5",
              "416be4d757168ad2",
              "6233bf614860ae02",
              "9a65488cddcbb61e",
              "c4cc0d8d3c24410f",
              "b551ba44885889ca",
              "0231440178586b40",
              "b0204227b464c58c",
              "86b967af1a8792de",
              "f65326be32cdecfe",
              "7cf9aca8d7c69ae4",
              "3f763ecd02a860f1",
              "882e0b4aefb1a73c",
              "bffd961da86a3e3f",
              "3cb456fc4dab40a1",
              "e1d60053a927ab89",
              "c808004e82ea8301",
              "1d708ffa218b3d44",
              "c9950a90445645d3",
              "00067d41fa6eec96",
              "d7205317c4aea6fe",
              "3feee0e5094ad933",
              "64f2f0aae4b7bfef",
              "75508ef55a6ce09a",
              "12a97348eb622049",
              "2ca040cc38756c9d",
              "c99d3bdc1b061e83",
              "f5829161ef605427",
              "740009e5d0c71e48",
              "1b0bf73bfc591996",
              "4173ccbec2f6165a",
              "79d753738570d760",
              "6d87b061544d9d19",
              "965cb6c58c6e8441",
              "577da0c45c414178",
              "acaf04e88e45e0a2",
              "05b00f3f18e7f9a4",
              "44492579718e08d2",
              "4a25192ebd09a465",
              "6e79d5bac8e7c3f8",
              "42ab0b57d63c5ba3",
              "447ffd9c4a7dd1b8",
              "316877afdf4b82a3",
              "ba3ce24671a99a6a",
              "d229158ea59af954",
              "fc04e026da9258ee",
              "44411a58e8193c34",
              "64d29f087087d5ce",
              "5cd376738d73a8da",
              "7884562d570a4c63",
              "a0ef01a6a0f63e5f",
              "d47754a9fb9d081f",
              "e905290698ff9914",
              "6820e02e03df3539",
              "0a9825c43c6f1e79",
              "8187db99e8599af6",
              "4a39b371845ce090",
              "9675753e348f6d83",
              "260a65d231505625",
              "6e412eb2fb1e5a94",
              "de682c580427a6c8",
              "a076fc84853430e6",
              "d7e120db09cc0053",
              "bdd173c49c27346b",
              "75d0463032044468",
              "a2ca5a15ab9fc87f",
              "e2fdc23b25603457"
            ],
            "socialItemIds": [],
            "independentSourceCount": 65,
            "domains": [
              "achmadnurhidayat.id",
              "afu.id",
              "akses.co.id",
              "asatunews.co.id",
              "bantenpro.co.id",
              "bantenraya.com",
              "beritajejakfakta.id",
              "beritasatu.com",
              "bisnisia.id",
              "bloombergtechnoz.com",
              "carapandang.com",
              "cnnindonesia.com",
              "deliknews.com",
              "detik.com",
              "economy.okezone.com",
              "ekbisbanten.com",
              "feedberry.com",
              "finansial.bisnis.com",
              "flores.pikiran-rakyat.com",
              "fortuneidn.com",
              "gesuri.id",
              "harianberkat.com",
              "ibukotakini.com",
              "id.headtopics.com",
              "id.tradingview.com",
              "investor.id",
              "investortrust.id",
              "jakartakota.pikiran-rakyat.com",
              "jatengpos.co.id",
              "jawapos.com",
              "keuangan.kontan.co.id",
              "kilat.com",
              "kompas.tv",
              "kompasiana.com",
              "lidik.id",
              "liputan6.com",
              "m.gosumut.com",
              "magelangnews.com",
              "media.alkhairaat.id",
              "merdeka.com",
              "metrojateng.com",
              "money.kompas.com",
              "news.indozone.id",
              "ntvnews.id",
              "pantau.com",
              "pdiperjuanganbali.id",
              "pewarta.co",
              "pikiran-rakyat.com",
              "portalmadura.com",
              "qoo10.co.id",
              "radioidola.com",
              "rri.co.id",
              "sinarharapan.co",
              "stabilitas.id",
              "stockwatch.id",
              "suara.com",
              "supernews.co.id",
              "terkenal.co.id",
              "theiconomics.com",
              "tirto.id",
              "tradingview.com",
              "voi.id",
              "wartaekonomi.co.id",
              "westjavatoday.com",
              "youngster.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Buntut Kasus Viral, OJK Panggil Manajemen Kredivo dan KrediFazz - stockwatch.id"
          },
          {
            "id": "auto-0f2c5f8ff0e43998",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "articleIds": [
              "8a8164ee18f08371"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "pantau.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Pakar Desak AFPI dan OJK Evaluasi Total Tata Kelola Penagihan Pinjaman Daring usai Dugaan Pelecehan - pantau.com"
          },
          {
            "id": "auto-445fc48d2482e836",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "articleIds": [
              "265b53bc4e8f968c"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "merdeka.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Cerita Lengkap Nasabah Wanita di Purworejo Alami Pelecehan Saat Ditagih Debt Collector - Merdeka"
          },
          {
            "id": "auto-6e394600d136a122",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "articleIds": [
              "388ee05754c4235d"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "wow.tribunnews.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Viral Dugaan Pelecehan oleh Oknum Debt Collector Pinjol, Polisi Masih Selidiki Kasusnya - TribunWow.com"
          },
          {
            "id": "auto-9616030780be2943",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "articleIds": [
              "4b6af6a3dbcc7e56"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "rakyatterkini.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "OJK Dalami Dugaan Pelecehan oleh Debt Collector - rakyatterkini.com"
          },
          {
            "id": "auto-a0e8417559ede6a8",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "articleIds": [
              "e64920ebafed4071"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "jpnn.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Kasus Dugaan DC Intimidasi Nasabah di Purworejo Berakhir Damai - JPNN.com"
          },
          {
            "id": "debt-linked-school-threat-2026-07",
            "eventType": "consumer_harm",
            "severity": 0.86,
            "articleIds": [
              "9192a4b2759f084c",
              "8311c181f5bf2891"
            ],
            "socialItemIds": [
              "098db5b6dc31d592",
              "017fa78bdfcff2bf",
              "aeca83655f65b66a",
              "df73f69e6cc153e0"
            ],
            "independentSourceCount": 3,
            "domains": [
              "jakarta.viva.co.id",
              "suara.com",
              "youtube.social"
            ],
            "platforms": [
              "youtube"
            ],
            "hasPrimarySource": false,
            "headline": "Jangan Asal Klik! DPR Ingatkan Bahaya Pinjol Ilegal yang Bisa Sedot Data dan Teror Korban - VIVA Jakarta"
          },
          {
            "id": "auto-00a3364c6fc7591f",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "2766136f4f092e43"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "money.kompas.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Foto : Pinjol Resmi OJK Terbaru Juli 2026, Cek Daftarnya agar Tak Terjebak Pinjol Ilegal - Kompas.com"
          },
          {
            "id": "auto-08f423814e791efe",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "7596921b14a6772b"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "rri.co.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Komisi I DPR: Literasi Digital Kunci Cegah Masyarakat Terjebak Pinjol Ilegal - RRI.co.id"
          },
          {
            "id": "auto-0d7233df6a70d687",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "1067a8542ff0788c"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "banjarbaruklik.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "OJK Edukasi Nelayan Konawe Waspadai Pinjol Ilegal dan Investasi Bodong - banjarbaruklik.com"
          },
          {
            "id": "auto-10743a4d5564b4dd",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "51c55c5cda2ff807"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "tribunnews.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Gandeng OJK, Perusahaan Pembiayaan Bagikan Alat Posyandu Sekaligus Bentengi Warga dari Pinjol Ilegal - Tribunnews.com"
          },
          {
            "id": "auto-18303ea08aea0ea3",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "9149bd578dbc6fc1"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "humas.polri.go.id"
            ],
            "platforms": [],
            "hasPrimarySource": true,
            "headline": "Polda Maluku Gandeng OJK, Bank Indonesia dan RRI Perkuat Literasi Digital, Ajak Masyarakat Lawan Pinjol Ilegal dan Lindungi Data Pribadi - DIVISI HUMAS POLRI"
          },
          {
            "id": "auto-2735719a7b165d3c",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "1bcd777b9588a6db"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "polrestasleman.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Bentengi Generasi Muda dari Jeratan Judi Online dan Pinjol Ilegal, Polsek Prambanan Beri Penyuluhan di Gayamharjo - polrestasleman.com"
          },
          {
            "id": "auto-2dafb101d7fc5db3",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "162d3487bf8086ae"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "radartegal.disway.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Tak Perlu Pusing, Begini Cara Menghapus Data Pinjol Ilegal Secara Permanen - radartegal.disway.id - Radartegal.com"
          },
          {
            "id": "auto-477fe7d22b7d2935",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "3196c3c9c6820707"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "money.kompas.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Pinjol Resmi OJK Terbaru Juli 2026, Cek Daftarnya agar Tak Terjebak Pinjol Ilegal - Kompas.com"
          },
          {
            "id": "auto-4fe82ccf6df2aea6",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "e5f8e252c4a44850"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "indonesiamediacenter.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Kajari Tangsel Apreza Darul Putra: Rp14,26 Miliar Hasil Kejahatan Pinjol Ilegal Resmi Dirampas untuk Negara - Indonesia Media Center"
          },
          {
            "id": "auto-6be01951e5b93456",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "b4bcfcbe6e5702d2"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "rri.co.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Stop Pinjol Ilegal, Lindungi Data Pribadii, Perkuat Sinergi Pemerintah - RRI.co.id"
          },
          {
            "id": "auto-743fe8695a7d8d96",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "9ada5f7fc2866a89"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "regional.kompas.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Foto : Tumpukan Uang Rp 14,2 Miliar dari Kasus Pinjol Ilegal Disetor ke Kas Negara - Kompas.com"
          },
          {
            "id": "auto-776f89964bf6c41d",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "90e26dd81dba90aa"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "news.republika.co.id"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Kejari Tangsel Setor Rp14,2 Miliar Hasil Sitaan Kasus Pinjol Ilegal ke Kas Negara - republika.co.id"
          },
          {
            "id": "auto-806e329340088b00",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "1672eb045c8ee7d7"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "poskota.co"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Kejari Tangsel Setor Rp14,26 Miliar Uang Rampasan Kasus Pinjol Ilegal ke Kas Negara - Poskotaonline"
          },
          {
            "id": "auto-99284cd55244bc75",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "c6bfef3713329dab"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "kabar6.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Kejari Tangsel Rampas Uang Rp14 Miliar Lebih dari Pinjol Ilegal - Kabar6.com"
          },
          {
            "id": "auto-9f947e6a10499d94",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "bfac3876a0df0a76"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "berlianmedia.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Tim KKN UNDIP Perkuat Literasi Keuangan dan Digital Warga Nyatnyono, Waspadai Pinjol Ilegal, Judol, dan Narkoba - Berlian Media"
          },
          {
            "id": "auto-a446552865173015",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "4a5bf755265b3b13"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "kabar6.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Kejari Tangsel: Tiga Bos Pinjol Ilegal Dihukum 1,8 Tahun Penjara - Kabar6.com"
          },
          {
            "id": "auto-b0ffbcaf05753b79",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "5ccc917388041d2b"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "liputan6.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Hoaks terkait OJK Beredar di Media Sosial, Simak Agar Terhindar dari Penipuan - Liputan6.com"
          },
          {
            "id": "auto-b485c3b1d71e2b51",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [],
            "socialItemIds": [
              "e20c4fd504f560d3"
            ],
            "independentSourceCount": 1,
            "domains": [
              "youtube.social"
            ],
            "platforms": [
              "youtube"
            ],
            "hasPrimarySource": false,
            "headline": "Pinjol Ilegal dan Jebakan Link  Cara Mereka Menjerat Korban dengan Mudah!"
          },
          {
            "id": "auto-bdf3d5793231f4ea",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "6ef6bcd5b5df82c0"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "kabarpapua.co"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Cegah Investasi Bodong dan Pinjol Ilegal, OJK Papua Edukasi ASN Kepulauan Yapen - KabarPapua.co"
          },
          {
            "id": "auto-c7e72da6bce5307f",
            "eventType": "fraud_or_illegal_practice",
            "severity": 0.74,
            "articleIds": [
              "51b1bfba794967ad"
            ],
            "socialItemIds": [],
            "independentSourceCount": 1,
            "domains": [
              "ambonkita.com"
            ],
            "platforms": [],
            "hasPrimarySource": false,
            "headline": "Perkuat Literasi Digital, Polda Maluku Ajak Masyarakat Lawan Pinjol Ilegal dan Lindungi Data Pribadi - Ambonkita.com"
          }
        ]
      },
      "events": [
        {
          "id": "auto-6aeb18c829da4932",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "28f1fd9501091d84"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "insiden24.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Skandal Kamar Kos Purworejo: Kala Utang Pinjol Berujung Penggerebekan Suami dan Panggilan Tegas OJK - Insiden 24 - Insiden 24"
        },
        {
          "id": "auto-6f42bf0dd2555f44",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "65c5fa4e663263e5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bos Kredivo Dipanggil OJK, Ternyata Ini Pemiliknya - CNBC Indonesia"
        },
        {
          "id": "auto-7ba3d4f9a46e8774",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "1cda3484cf234479"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "liputan6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Penagih Utang Bermasalah, Kredivo dan KrediFazz Dipanggil OJK - Liputan6.com"
        },
        {
          "id": "auto-c78f5bbabce504ed",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "1bfa865266e9cbea"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kalteng.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral di Medsos: Modus Mesum DC Kredivo Minta Bayar Cicilan Pakai Seks, Anggota DPR RI Desak OJK Cabut Izin Usaha! - Kalteng.co"
        },
        {
          "id": "kredivo-kredifazz-purworejo-2026-07",
          "eventType": "regulatory_action",
          "severity": 0.92,
          "articleIds": [
            "ee4e5558e174880f",
            "a16d6ff82735391a",
            "5669074934dbab72",
            "3faa0d7e8854d68f",
            "0a2f8e3e7bafbc95",
            "c353a7bc666ae364",
            "a0953bd24dfc8c11",
            "fb8cbd9ed476a793",
            "523f15018e5a238c",
            "67a0313a6dde9e46",
            "5da8f87993b2d1e8",
            "8994a9ffaac96737",
            "3c217fc378a4e8a6",
            "24edd40585eb2cf2",
            "750fa92d35dd4cb7",
            "b7072dccaecd670b",
            "6a9c14eabb5e9f60",
            "b2e94b233e1dffaa",
            "5a6845adb977e383",
            "57864e8eb8f072e5",
            "416be4d757168ad2",
            "6233bf614860ae02",
            "9a65488cddcbb61e",
            "c4cc0d8d3c24410f",
            "b551ba44885889ca",
            "0231440178586b40",
            "b0204227b464c58c",
            "86b967af1a8792de",
            "f65326be32cdecfe",
            "7cf9aca8d7c69ae4",
            "3f763ecd02a860f1",
            "882e0b4aefb1a73c",
            "bffd961da86a3e3f",
            "3cb456fc4dab40a1",
            "e1d60053a927ab89",
            "c808004e82ea8301",
            "1d708ffa218b3d44",
            "c9950a90445645d3",
            "00067d41fa6eec96",
            "d7205317c4aea6fe",
            "3feee0e5094ad933",
            "64f2f0aae4b7bfef",
            "75508ef55a6ce09a",
            "12a97348eb622049",
            "2ca040cc38756c9d",
            "c99d3bdc1b061e83",
            "f5829161ef605427",
            "740009e5d0c71e48",
            "1b0bf73bfc591996",
            "4173ccbec2f6165a",
            "79d753738570d760",
            "6d87b061544d9d19",
            "965cb6c58c6e8441",
            "577da0c45c414178",
            "acaf04e88e45e0a2",
            "05b00f3f18e7f9a4",
            "44492579718e08d2",
            "4a25192ebd09a465",
            "6e79d5bac8e7c3f8",
            "42ab0b57d63c5ba3",
            "447ffd9c4a7dd1b8",
            "316877afdf4b82a3",
            "ba3ce24671a99a6a",
            "d229158ea59af954",
            "fc04e026da9258ee",
            "44411a58e8193c34",
            "64d29f087087d5ce",
            "5cd376738d73a8da",
            "7884562d570a4c63",
            "a0ef01a6a0f63e5f",
            "d47754a9fb9d081f",
            "e905290698ff9914",
            "6820e02e03df3539",
            "0a9825c43c6f1e79",
            "8187db99e8599af6",
            "4a39b371845ce090",
            "9675753e348f6d83",
            "260a65d231505625",
            "6e412eb2fb1e5a94",
            "de682c580427a6c8",
            "a076fc84853430e6",
            "d7e120db09cc0053",
            "bdd173c49c27346b",
            "75d0463032044468",
            "a2ca5a15ab9fc87f",
            "e2fdc23b25603457"
          ],
          "socialItemIds": [],
          "independentSourceCount": 65,
          "domains": [
            "achmadnurhidayat.id",
            "afu.id",
            "akses.co.id",
            "asatunews.co.id",
            "bantenpro.co.id",
            "bantenraya.com",
            "beritajejakfakta.id",
            "beritasatu.com",
            "bisnisia.id",
            "bloombergtechnoz.com",
            "carapandang.com",
            "cnnindonesia.com",
            "deliknews.com",
            "detik.com",
            "economy.okezone.com",
            "ekbisbanten.com",
            "feedberry.com",
            "finansial.bisnis.com",
            "flores.pikiran-rakyat.com",
            "fortuneidn.com",
            "gesuri.id",
            "harianberkat.com",
            "ibukotakini.com",
            "id.headtopics.com",
            "id.tradingview.com",
            "investor.id",
            "investortrust.id",
            "jakartakota.pikiran-rakyat.com",
            "jatengpos.co.id",
            "jawapos.com",
            "keuangan.kontan.co.id",
            "kilat.com",
            "kompas.tv",
            "kompasiana.com",
            "lidik.id",
            "liputan6.com",
            "m.gosumut.com",
            "magelangnews.com",
            "media.alkhairaat.id",
            "merdeka.com",
            "metrojateng.com",
            "money.kompas.com",
            "news.indozone.id",
            "ntvnews.id",
            "pantau.com",
            "pdiperjuanganbali.id",
            "pewarta.co",
            "pikiran-rakyat.com",
            "portalmadura.com",
            "qoo10.co.id",
            "radioidola.com",
            "rri.co.id",
            "sinarharapan.co",
            "stabilitas.id",
            "stockwatch.id",
            "suara.com",
            "supernews.co.id",
            "terkenal.co.id",
            "theiconomics.com",
            "tirto.id",
            "tradingview.com",
            "voi.id",
            "wartaekonomi.co.id",
            "westjavatoday.com",
            "youngster.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Buntut Kasus Viral, OJK Panggil Manajemen Kredivo dan KrediFazz - stockwatch.id"
        },
        {
          "id": "auto-0f2c5f8ff0e43998",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "8a8164ee18f08371"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pantau.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pakar Desak AFPI dan OJK Evaluasi Total Tata Kelola Penagihan Pinjaman Daring usai Dugaan Pelecehan - pantau.com"
        },
        {
          "id": "auto-445fc48d2482e836",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "265b53bc4e8f968c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "merdeka.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cerita Lengkap Nasabah Wanita di Purworejo Alami Pelecehan Saat Ditagih Debt Collector - Merdeka"
        },
        {
          "id": "auto-6e394600d136a122",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "388ee05754c4235d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wow.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Dugaan Pelecehan oleh Oknum Debt Collector Pinjol, Polisi Masih Selidiki Kasusnya - TribunWow.com"
        },
        {
          "id": "auto-9616030780be2943",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "4b6af6a3dbcc7e56"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rakyatterkini.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Dalami Dugaan Pelecehan oleh Debt Collector - rakyatterkini.com"
        },
        {
          "id": "auto-a0e8417559ede6a8",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "e64920ebafed4071"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jpnn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasus Dugaan DC Intimidasi Nasabah di Purworejo Berakhir Damai - JPNN.com"
        },
        {
          "id": "debt-linked-school-threat-2026-07",
          "eventType": "consumer_harm",
          "severity": 0.86,
          "articleIds": [
            "9192a4b2759f084c",
            "8311c181f5bf2891"
          ],
          "socialItemIds": [
            "098db5b6dc31d592",
            "017fa78bdfcff2bf",
            "aeca83655f65b66a",
            "df73f69e6cc153e0"
          ],
          "independentSourceCount": 3,
          "domains": [
            "jakarta.viva.co.id",
            "suara.com",
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Jangan Asal Klik! DPR Ingatkan Bahaya Pinjol Ilegal yang Bisa Sedot Data dan Teror Korban - VIVA Jakarta"
        },
        {
          "id": "auto-00a3364c6fc7591f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "2766136f4f092e43"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Pinjol Resmi OJK Terbaru Juli 2026, Cek Daftarnya agar Tak Terjebak Pinjol Ilegal - Kompas.com"
        },
        {
          "id": "auto-08f423814e791efe",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "7596921b14a6772b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Komisi I DPR: Literasi Digital Kunci Cegah Masyarakat Terjebak Pinjol Ilegal - RRI.co.id"
        },
        {
          "id": "auto-0d7233df6a70d687",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "1067a8542ff0788c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "banjarbaruklik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Edukasi Nelayan Konawe Waspadai Pinjol Ilegal dan Investasi Bodong - banjarbaruklik.com"
        },
        {
          "id": "auto-10743a4d5564b4dd",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "51c55c5cda2ff807"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gandeng OJK, Perusahaan Pembiayaan Bagikan Alat Posyandu Sekaligus Bentengi Warga dari Pinjol Ilegal - Tribunnews.com"
        },
        {
          "id": "auto-18303ea08aea0ea3",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9149bd578dbc6fc1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "humas.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Polda Maluku Gandeng OJK, Bank Indonesia dan RRI Perkuat Literasi Digital, Ajak Masyarakat Lawan Pinjol Ilegal dan Lindungi Data Pribadi - DIVISI HUMAS POLRI"
        },
        {
          "id": "auto-2735719a7b165d3c",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "1bcd777b9588a6db"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "polrestasleman.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bentengi Generasi Muda dari Jeratan Judi Online dan Pinjol Ilegal, Polsek Prambanan Beri Penyuluhan di Gayamharjo - polrestasleman.com"
        },
        {
          "id": "auto-2dafb101d7fc5db3",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "162d3487bf8086ae"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radartegal.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tak Perlu Pusing, Begini Cara Menghapus Data Pinjol Ilegal Secara Permanen - radartegal.disway.id - Radartegal.com"
        },
        {
          "id": "auto-477fe7d22b7d2935",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "3196c3c9c6820707"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Resmi OJK Terbaru Juli 2026, Cek Daftarnya agar Tak Terjebak Pinjol Ilegal - Kompas.com"
        },
        {
          "id": "auto-4fe82ccf6df2aea6",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "e5f8e252c4a44850"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "indonesiamediacenter.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kajari Tangsel Apreza Darul Putra: Rp14,26 Miliar Hasil Kejahatan Pinjol Ilegal Resmi Dirampas untuk Negara - Indonesia Media Center"
        },
        {
          "id": "auto-6be01951e5b93456",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "b4bcfcbe6e5702d2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Stop Pinjol Ilegal, Lindungi Data Pribadii, Perkuat Sinergi Pemerintah - RRI.co.id"
        },
        {
          "id": "auto-743fe8695a7d8d96",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "9ada5f7fc2866a89"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Tumpukan Uang Rp 14,2 Miliar dari Kasus Pinjol Ilegal Disetor ke Kas Negara - Kompas.com"
        },
        {
          "id": "auto-776f89964bf6c41d",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "90e26dd81dba90aa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "news.republika.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kejari Tangsel Setor Rp14,2 Miliar Hasil Sitaan Kasus Pinjol Ilegal ke Kas Negara - republika.co.id"
        },
        {
          "id": "auto-806e329340088b00",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "1672eb045c8ee7d7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "poskota.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kejari Tangsel Setor Rp14,26 Miliar Uang Rampasan Kasus Pinjol Ilegal ke Kas Negara - Poskotaonline"
        },
        {
          "id": "auto-99284cd55244bc75",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "c6bfef3713329dab"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabar6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kejari Tangsel Rampas Uang Rp14 Miliar Lebih dari Pinjol Ilegal - Kabar6.com"
        },
        {
          "id": "auto-9f947e6a10499d94",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "bfac3876a0df0a76"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "berlianmedia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tim KKN UNDIP Perkuat Literasi Keuangan dan Digital Warga Nyatnyono, Waspadai Pinjol Ilegal, Judol, dan Narkoba - Berlian Media"
        },
        {
          "id": "auto-a446552865173015",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "4a5bf755265b3b13"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabar6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kejari Tangsel: Tiga Bos Pinjol Ilegal Dihukum 1,8 Tahun Penjara - Kabar6.com"
        },
        {
          "id": "auto-b0ffbcaf05753b79",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "5ccc917388041d2b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "liputan6.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hoaks terkait OJK Beredar di Media Sosial, Simak Agar Terhindar dari Penipuan - Liputan6.com"
        },
        {
          "id": "auto-b485c3b1d71e2b51",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [],
          "socialItemIds": [
            "e20c4fd504f560d3"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol Ilegal dan Jebakan Link  Cara Mereka Menjerat Korban dengan Mudah!"
        },
        {
          "id": "auto-bdf3d5793231f4ea",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "6ef6bcd5b5df82c0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kabarpapua.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Investasi Bodong dan Pinjol Ilegal, OJK Papua Edukasi ASN Kepulauan Yapen - KabarPapua.co"
        },
        {
          "id": "auto-c7e72da6bce5307f",
          "eventType": "fraud_or_illegal_practice",
          "severity": 0.74,
          "articleIds": [
            "51b1bfba794967ad"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ambonkita.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Perkuat Literasi Digital, Polda Maluku Ajak Masyarakat Lawan Pinjol Ilegal dan Lindungi Data Pribadi - Ambonkita.com"
        },
        {
          "id": "auto-68cb240172b7c762",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "3db36ffbd7baa3ad"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "readers.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pengamat Finansial Mengingatkan Potensi Risiko Gagal Bayar Fintech Lending - Readers.id"
        },
        {
          "id": "auto-df3f0d272d5e0c47",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "73cb389fb3830ecb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finansial.bisnis.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Minta Akseleran Atasi Gagal Bayar dengan Optimalkan Recovery Aset - Bisnis.com"
        },
        {
          "id": "auto-e9c4846d2df4837b",
          "eventType": "credit_quality_stress",
          "severity": 0.58,
          "articleIds": [
            "c37ddf70d53b9a16",
            "4b021365c31df729"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "keuangan.kontan.co.id",
            "tradingview.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Easycash Terapkan Sejumlah Upaya Ini untuk Jaga Tingkat TWP90 Tetap Terkendali - TradingView"
        },
        {
          "id": "auto-01645465fc825a13",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a8b04e9480a042e8"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol, Data Nik Dijual Rp. 2.000 #shorts #fyp"
        },
        {
          "id": "auto-01fdb0ea95b533a2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "db89d7818757ee6f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: OJK Buka-bukaan Perkembangan 5 Bisnis PVML, Pindar - Pegadaian - CNBC Indonesia"
        },
        {
          "id": "auto-0499125a91d92128",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "28193dfd62ee49e7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jatim.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nasabah Ngaku Dipaksa Debt Collector Datang ke Kos supaya Utang Lunas, Berakhir Digerebek Suami - Tribunjatim.com"
        },
        {
          "id": "auto-0963e15696e9f35b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e711b688df22646e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "garuda.tv"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "DPR Minta Pengawasan Penagihan Pinjol Diperketat Usai Kasus di Purworejo - garuda tv"
        },
        {
          "id": "auto-0ad70f762e92c478",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "514c9f32201f03a8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "news.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collector Ajak Nasabah Ngamar untuk Lunasi Utang di Purworejo - detikNews"
        },
        {
          "id": "auto-0dbf86ed26b24504",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9bb21e1fb48507fa"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami dan BenihBaik Wujudkan Akses Air Bersih bagi 122 Warga Lampung Selatan - SWA.co.id"
        },
        {
          "id": "auto-0ff3f388843f7f48",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "13daa87380b3bbf6",
            "f06b0ba73880530a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tvonenews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Debt Collector (DC) Kredivo Diduga Lecehkan Nasabah, Utang Rp4,4 Juta Disebut Dijadikan Syarat Ajakan Berhubungan - galeri foto - tvOneNews"
        },
        {
          "id": "auto-121e497611373f4d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6e3f165556420a7d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gridoto.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gak Usah Kuatir Dengan Pembiayaan Vinfast, Ada Pilihan Digital - GridOto.com"
        },
        {
          "id": "auto-18224cbf762d277e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3e37058bfd052a63"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "video.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kronologi Debt Collector Ajak Ngamar Nasabah di Purworejo, Berawal dari Tagihan Utang Rp 4 Juta - Tribun Video"
        },
        {
          "id": "auto-19446da2fe192523",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1bbc05a7f931cde2",
            "5bf83d8311a22b90"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "prnewswire.com",
            "tirto.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Bangun Akses Air Bersih dan Sanitasi Layak untuk Warga Dusun Banjarsari Lampung Selatan - PR Newswire"
        },
        {
          "id": "auto-194b241268c6e8c4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d291666fa8af1486"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kepemilikan Asing di PVML Dibatasi 85 Persen, OJK Ungkap Tujuannya - Infobanknews"
        },
        {
          "id": "auto-1c78560f9238aad2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6018b8bf7c732f0d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "\"Kalau Mau Lunas Diajak Berhubungan\" DC Pinjol di Purworejo Digerebek saat Bersama Nasabah di Kos - Tribunjateng.com"
        },
        {
          "id": "auto-1d397e813baddc55",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4a1095f1aac22660"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Update Pinjol Resmi OJK Juli 2026, Cek Daftar Terbaru Sebelum Ajukan Pinjaman - Kompas.com"
        },
        {
          "id": "auto-1e08ab2750a626cd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "17898ba2a26a1cf1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "suara.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dibanding Beri Denda ke Pindar, KPPU Diminta Utamakan Pencegahan - Suara.com"
        },
        {
          "id": "auto-1e6611f65e3f04ee",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c905346166c8b699"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Gelombang PHK Bisa Gerus Kemampuan Bayar Debitur Multifinance dan Pindar - Infobanknews"
        },
        {
          "id": "auto-20d64bb3a3a6cc02",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "61e26020b7989066"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Solusi dan Tantangan Penanganan Pinjol  Edukasi dan Regulasi yang Harus Diperbaiki!"
        },
        {
          "id": "auto-23c8c2339e2ab573",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9f35ef52e2251c8d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Maling iPhone di Temanggung Digagalkan 2 Cewek Terjerat Pinjol Rp 50 Juta - detikcom"
        },
        {
          "id": "auto-2412b36837ac2b33",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e3c3b8922a93f687"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mamikos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "95 Pinjaman Online Langsung Cair dalam Hitungan Menit yang Aman dan Terdaftar OJK - Mamikos"
        },
        {
          "id": "auto-28d05e4ddeb4c833",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "abac9e4cf03f1fdd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gelora.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Berawal dari Tagihan, Berakhir Pijatan? DC Pinjol Kredivo Ajak Nasabah Ngamar demi Utang Lunas - Gelora News"
        },
        {
          "id": "auto-29f9a92b63448aa1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a581275c432bc256"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jambiseru.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bikin Debt Collector Ketar-Ketir! OJK dan AFPI Didesak Perketat Izin Penagihan Pindar - jambiseru.com"
        },
        {
          "id": "auto-2aa5f599dda061bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d61dcdeae59e690d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "humas.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Polsek Metro Tanah Abang Gelar JAGA JAKARTA ON THE SPOT, Perkuat Sinergi dengan Warga Cegah Tawuran, Judi Online, dan Pinjaman Online Ilegal - DIVISI HUMAS POLRI"
        },
        {
          "id": "auto-2dcb793673d2cef5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "515fa0b4f390970d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mix.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Bangun Akses Air Bersih dan Sanitasi Layak di Dusun Banjarsari - MIX Marcomm"
        },
        {
          "id": "auto-3035ae37cac56fde",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d9388e2acc870763"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "garuda.tv"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasus Debt Collector Pinjol di Purworejo Diselesaikan Damai Lewat Mediasi - garuda tv"
        },
        {
          "id": "auto-32e2a68b1a4b0578",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f2cbef54717801a0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sultra.antaranews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK edukasi nelayan di KNMP Konawe cegah pinjol dan investasi ilegal - ANTARA News Sultra"
        },
        {
          "id": "auto-3369f136d0e1b222",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c6101ab1b40980e8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nkripost.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collektor Kredivo Diduga Ajak Konsumen Hubungan Badan Untuk Bayar Hutang, OJK Turun Tangan! - nkripost.co"
        },
        {
          "id": "auto-34927591c9193ee4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2a379e3a5ac0bb9b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "aboutcirebon.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Wali Kota Cirebon: Literasi Finansial Kunci Cegah ASN Terjerat Pinjol - About Cirebon"
        },
        {
          "id": "auto-3528265579759122",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b286bced9837f8d9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "video.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collector di Purworejo yang Minta Hubungan Badan demi Lunas Utang Tak Ditahan & Berakhir Damai - Tribun Video"
        },
        {
          "id": "auto-36cd2cf400b7ba60",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9263202219e9e543"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Angkat Isu Pinjol, Film Drama Komedi 'Ketok Mejik' Siap Tayang 13 Agustus 2026 - MetroTVNews.com"
        },
        {
          "id": "auto-3e7fa9e1243d5f95",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b2e638e8a5710bce"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pdiperjuanganbali.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Polres Purworejo Mediasi Kasus Oknum Penagih Utang Pinjol Ajak Nasabah Ngamar - pdiperjuanganbali.id"
        },
        {
          "id": "auto-40ec3530f70c2548",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "7c1f98408180632d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasus Debt Collector di Purworejo Berakhir Damai, Investigasi Internal Terus Berjalan - Media Indonesia"
        },
        {
          "id": "auto-41ff163a3fe25037",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e6862698e5f8082a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kronologi DC Pinjol di Purworejo Ajak Nasabah ke Kos Agar Utang Lunas, Berujung Digerebek - Kompas.com"
        },
        {
          "id": "auto-4209b56a1876f5a4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "e18ecdf7a6c58fb5"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Kenapa Masyarakat Indonesia Suka Pinjol  Fakta Mengejutkan di Baliknya!"
        },
        {
          "id": "auto-42574fcd200fc093",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "2af5167379fcd6e1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aku pernah berpikir pinjol adalah jalan keluar #Pinjol #Utang #BangkitDariUtang #CeritaHidup"
        },
        {
          "id": "auto-44ed4027fe5f4929",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c37d43e2a818b52d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjam... Pinjam... Pinjol selaluuuuuuu... - Kompasiana.com - Kompasiana.com"
        },
        {
          "id": "auto-4d987d6d4a2db56d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "45f2f8028066766d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rejogja.republika.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sempat Diduga Perselingkuhan, Kasus Pelanggaran Debt Collector di Purworejo Berakhir Damai - republika.co.id"
        },
        {
          "id": "auto-4f2b80e849aa3d94",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2d339910cff60f33"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "marketing.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Wujudkan Akses Air Bersih di Lampung Selatan - Marketing.co.id"
        },
        {
          "id": "auto-4f55d88d2d5548c5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ab512520e7bc5b1a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kumparan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral DC Pinjol di Purworejo Diduga Lecehkan Wanita saat Tagih Utang Rp 4 Juta - kumparan.com - Kumparan.com"
        },
        {
          "id": "auto-4f7384b9bc54e1eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "14ba01f5dbabc467"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediaasuransinews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Catat Perbankan Masih Mendominasi Pendanaan di Industri Pindar - Media Asuransi News"
        },
        {
          "id": "auto-5321dda7693b8187",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "7600b216971dd86e"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Modus Pinjol: Mengapa Data Anda Begitu Mudah Bocor dan Disalahgunakan? #shorts"
        },
        {
          "id": "auto-548b856f1c40a7e1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "13b3de48d39dbd19"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bantenraya.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pinjol Bermasalah Rp1,4 Triliun - Bantenraya.co.id"
        },
        {
          "id": "auto-551aeea8c35c46ec",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2578f9498dfcf949"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rmoljawatengah.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Geger Nasabah Diajak Ngamar DC Pinjol di Purworejo - RMOL JATENG"
        },
        {
          "id": "auto-55420b05db477fd1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8039c8fe5eaf833b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.jpnn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral, Kronologi Debitur Perempuan Dilecehkan DC Pinjol di Purworejo - JPNN.com"
        },
        {
          "id": "auto-57239ee57c900e21",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "86f4bcec6e72cecb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "newsmaker.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Wanita di Purworejo Ngaku Ditawari Lunas Utang Asal Tidur Bareng Debt Collectornya, Suami Curiga - Tribunnews.com"
        },
        {
          "id": "auto-59aac0a240aa0f99",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4a38d60a8fdaac14"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jabarprov.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Atasi Judi Online, Pemkot Bandung Perkuat Pendampingan Keluarga - Jabarprov"
        },
        {
          "id": "auto-5b38dc9795871205",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "e0603bcbf2481969"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rmoljatim.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Wanita Bersuami Hampir Disetubuhi Debt Collector agar Bisa Lunasi Utang Pinjol - rmoljatim"
        },
        {
          "id": "auto-5bb290eedc9250ff",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "88e39a5916882a13"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Tanpa BI CHECKING‼️ Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair"
        },
        {
          "id": "auto-5bd594ad28e2ea10",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "411539cfb8ade588"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ntvnews.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Diduga Lecehkan Nasabah Saat Menagih Utang, Oknum Debt Collector Kredivo Dilaporkan ke Polisi - ntvnews.id"
        },
        {
          "id": "auto-5dd0a0ff3f4c2a76",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "db2ed51b530c96d1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mitrapost.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Debt Collector Ajak Nasabah Berhubungan untuk Lunasi Utang - mitrapost.com"
        },
        {
          "id": "auto-5fa93b9eb4967672",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ccbd79e19f6f0573"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rakyatpos.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dimulai dengan Tagihan, Diakhiri dengan Pijat? DC Pinjol Kredivo Ajak Pelanggan Ajukan Pelunasan Utangnya - rakyatpos.id"
        },
        {
          "id": "auto-60886ca9c08af392",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "8fc24ea5bb92db48"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pengaduan Penagihan Tidak Beretika  Cara Melapor ke OJK dan Satgas Pinjol!"
        },
        {
          "id": "auto-617a41f43cedff46",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "954bc254fbb161c6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pdiperjuanganbali.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Wajibkan Multifinance Bertanggung Jawab atas Penagihan Debt Collector - pdiperjuanganbali.id"
        },
        {
          "id": "auto-618f224e348b6688",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1db53e731cc22c00"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "humas.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Kapolres Aceh Timur Perketat Disiplin Personel, Tes Urine Digelar, Cegah Judol dan Pinjol - DIVISI HUMAS POLRI"
        },
        {
          "id": "auto-6361d3708681e969",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fb9a651511c5658d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pelitajabar.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bojongloa Kaler Kota Bandung Tertinggi di Indonesia Kasus Judol – Pinjol, Salah Siapa? - pelita jabar"
        },
        {
          "id": "auto-64c70aa18d85bcc1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "c8dc4e5d815db8f6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Solusi dan Edukasi Menghadapi Pinjol  Jangan Panik, Ini Cara Bijak Bayar Hutang!"
        },
        {
          "id": "auto-650da382f57bd950",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "19e6d2ae65725b0d"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Nyatanya, itu hanya menunda masalah. Sedikit demi sedikit, hidupku berubah menjadi lingkaran yang sulit diputus. Gali lu"
        },
        {
          "id": "auto-6556a8fd86efe9e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "31dc3e74745968cb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "memorandum.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bupati Kediri Dorong Anak Muda Terjun ke Koperasi, Cegah Bahaya Pinjol di Bawah Usia 40 Tahun - memorandum.disway.id - Memorandum.co.id"
        },
        {
          "id": "auto-661b7602a1ff204c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "d45393d8293d7631"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Ini solusinya #podcast #shorts #shortvideo #ojk #pinjol #utang"
        },
        {
          "id": "auto-664a1ddce07641fe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6c773e224b941ae5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "metrotvnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar Pinjol Resmi OJK Terbaru Juli 2026, Cek Sebelum Meminjam - MetroTVNews.com"
        },
        {
          "id": "auto-6b8046983ccabd39",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "efb5ef002083a319"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Berapa Sebenarnya Diskon Maksimal Pelunasan Pinjol Paylater  Kredivo, Indondana, Shopeepaylater?"
        },
        {
          "id": "auto-6da1fffcbd145840",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "dcb4e905dbdd9309"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.murianews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "DC Pinjol di Purworejo Ajak Ngamar Nasabah Nunggak, OJK Bertindak - murianews.com"
        },
        {
          "id": "auto-6ef70a454ad902fa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "71987ed33aaa9c3b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemegang Saham Kredivo, yang Oknum DC Diduga Melecehkan Nasabah - Bloomberg Technoz"
        },
        {
          "id": "auto-6fcc8ba582e7de47",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "27fccf0e55af079a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pembiayaan Pinjol Naik 25,6%, OJK Tetap Waspadai Risiko Kredit - Warta Ekonomi"
        },
        {
          "id": "auto-6ff427ade1b6ff80",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "58ff690ce7b710eb"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wow.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Yasonna Laoly Minta Pemerintah dan OJK Tindak Tegas Dugaan Pelanggaran Penagihan Pinjol di Purworejo - TribunWow.com"
        },
        {
          "id": "auto-70eb2051e6bad342",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "da98474ab8897af0"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "krjogja.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dugaan Pelanggaran Debt Collector Pinjol di Purworejo Berakhir Damai, Polisi: Diselesaikan Lewat Mediasi - Krjogja - Kr Jogja"
        },
        {
          "id": "auto-72db26ce563c590e",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "812eeef66e29592c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "ngawi.pikiran-rakyat.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Daftar 95 Pinjol Resmi OJK Juli 2026, Cek Sebelum Ajukan Pinjaman - Jurnal Ngawi - Jurnal Ngawi"
        },
        {
          "id": "auto-749222e1fb257d56",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5781ff5c18768484"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ketika Siswa SMP Berhadapan dengan Pinjaman Online, menga - Kompasiana.com - Kompasiana.com"
        },
        {
          "id": "auto-762c7f35bf13c8f8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a7031a8066a71d0a"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Part 7 : Akibat Pinjol StandUp Comedy"
        },
        {
          "id": "auto-798d9bbd99fcdd1d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d11e1b414b97beba"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nasib Debt Collector Pinjol di Purworejo: Berakhir Damai di Kantor Polisi, Namun Sanksi Menanti - Tribunjateng.com"
        },
        {
          "id": "auto-79fc6665f8a245ce",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "53ecf4694516f7ed"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Modus Pinjol  Uang Cair Tanpa Konfirmasi, Tapi Hutang Membengkak Gila!"
        },
        {
          "id": "auto-7c87e64b3d1546a9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4d0e7a594a4cde88"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "joglojateng.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral!! DC Kredivo Disebut Minta Hubungan Badan untuk Lunasi Hutang - joglojateng.com"
        },
        {
          "id": "auto-7db5d3fffcd5cf59",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "bc9558a7f1b6d6a4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "investor.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK: Pinjol Tak Bisa Berlindung di Balik Debt Collector - investor.id"
        },
        {
          "id": "auto-7e7efdadea6100e4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "48870282f13acf5d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inilahjogja.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Rumah Warga Bantul Diduga Dirusak Debt Collector - Inilah Jogja"
        },
        {
          "id": "auto-7f1c09e1410a4bc3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "9615ad23b3c901a1"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Aplikasi Mattel dan Penyalahgunaan Penagihan Pinjol yang Bikin Heboh!"
        },
        {
          "id": "auto-7f2c5d07cab9cd08",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a6a8e294e73bd6c6"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol &amp; Judol Kombinasi  yang Menghancurkan Kehidupan Banyak Orang #podcast #shorts #horror #viral"
        },
        {
          "id": "auto-86c05011e8d03e3f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "a7b4bae52a429552"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol merusak ekonomi masyarakat"
        },
        {
          "id": "auto-881893afc382bd03",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8368c543b2187376"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kaltim.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "15 Provinsi dengan Utang Pinjol Terbesar, Kalimantan Timur Masuk Jajaran Teratas di Luar Jawa - Tribunkaltim.co"
        },
        {
          "id": "auto-8a13540cfe7b53a8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4c785cc2270c614d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Buntut Panjang DC Pinjol Mesum Ajak Nasabah Ngamar - detikcom"
        },
        {
          "id": "auto-8bc1f214050626e6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "079252fd565ed0e7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Heboh DC Pinjol di Purworejo Ajak Nasabah Ngamar demi Utang Lunas, Endingnya... - detikcom"
        },
        {
          "id": "auto-9009c00992ce1f29",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "048643539cd79de7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "mediacirebon.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Cirebon Ingatkan Bahaya KTP Dipinjam untuk Aplikasi Pinjol - Media Cirebon"
        },
        {
          "id": "auto-9199b69853c28f4f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a94d2787b74292c5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collector Kredivo Diduga Lecehkan Konsumen, OJK Turun Tangan - detikFinance"
        },
        {
          "id": "auto-9283dee4d81e39bc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "09314dd11258bf58"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "esgnow.republika.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami dan BenihBaik Bangun Sumur Bor, Perluas Akses Air Bersih di Lampung Selatan - republika.co.id"
        },
        {
          "id": "auto-96bddbaebb9c6b56",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "a8c42adb9340ace1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rri.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pelaku UMKM Diimbau Waspadai Pinjol, Tunggakan Tercatat di SLIK OJK - RRI.co.id"
        },
        {
          "id": "auto-9862cb48ce97a318",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6d22ec5b3cb69290"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jateng.idntimes.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kronologi DC Kredivo Santroni Penghuni Kos, Diselesaikan Secara Damai - IDN Times Jateng"
        },
        {
          "id": "auto-98ef4aa1555220eb",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "81d114af53bc5be2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jpnn.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Bangun Akses Air Bersih-Sanitasi Layak untuk Warga di Lampung Selatan - JPNN.com"
        },
        {
          "id": "auto-a4f2e5c6d82638b6",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4adaa424c60e9f05"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gotvnews.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral, Debt Collector Kredivo Diduga Lecehkan Nasabah - Gotvnews"
        },
        {
          "id": "auto-a57df0cce1afef69",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "2aba50788bdf4ada"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "voi.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Alleged Debt Collector Intimidation, OJK Calls Kredivo and KrediFazz - VOI.ID"
        },
        {
          "id": "auto-a5bf696dafa2eae3",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "872d78af9112ab60"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "teropongsenayan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Dave Laksono: Literasi Digital dan Pelindungan Data Pribadi Jadi Kunci Melawan Pinjaman Online Ilegal - TEROPONGSENAYAN.com"
        },
        {
          "id": "auto-a6461bbb01a544b1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "eabd4bdd13d57dfd"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "regional.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral, Video DC Pinjol Digerebek Bersama Nasabah di Kos Purworejo, Ini Kata Polisi - Kompas.com"
        },
        {
          "id": "auto-a74cdca7e3b1426b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "18a96fb4bb4ae81b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Foto : Update Pinjol Resmi OJK Juli 2026, Cek Daftar Terbaru Sebelum Ajukan Pinjaman - Kompas.com"
        },
        {
          "id": "auto-a750bd0a000d721f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f390dd8c79bf4657"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "gesuri.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI dan OJK Didesak Perbaiki Izin Penagihan Pindar Oleh Pihak Ketiga - gesuri.id"
        },
        {
          "id": "auto-a7625eec706f468c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "52a15ab1fad56358"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "pemkab.hulusungaiselatankab.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "TP PKK HSS PERKUAT KETAHANAN KELUARGA MELALUI SOSIALISASI PEREMPUAN TANGGUH ANTI PINJOL, JUDOL, DAN PAAREDI TANGGUH HUKUM - Pemerintah Kabupaten Hulu Sungai Selatan"
        },
        {
          "id": "auto-a795e21fce366cbe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "3c815a161dbc9fb4"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "video.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collector Ajak Nasabah Lakukan Tindakan Asusila di Kamar Kos Purworejo demi Lunasi Utang Pinjol - Tribun Video"
        },
        {
          "id": "auto-a9b040c93115febe",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "05f63e359ba91474"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "koma.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cakra Khan Hantam Rentenir Online AdaKami soal Kontak Darurat: ‘Anda Salah Pilih Lawan’ - Koma.id"
        },
        {
          "id": "auto-ac080cca2423301f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "18b52d43b036c70b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "rbtv.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Bolehkah DC Lapangan Menyita Barang Debitur Secara Paksa? Ini Aturannya - rbtv.disway.id - RBTV Disway"
        },
        {
          "id": "auto-ac256704aa19144d",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "0264c18493fa6bba"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "sonora.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ancaman Doom Spending dan Jerat Pinjol Intai Gen Z, Anggota DPRD Jatim Dorong Literasi Keuangan dan Pemberdayaan UMKM - Sonora.id"
        },
        {
          "id": "auto-b326d597a04f99a1",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "580c3e98de91255e"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AFPI Ungkap Pindar Dorong Ekspansi Bisnis UMKM, Pendanaan Tembus Rp34,95 Triliun - Warta Ekonomi"
        },
        {
          "id": "auto-b4818fd3474bb538",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fb9a094ef3120fa9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "marketeers.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gandeng BenihBaik, AdaKami Bangun Akses Air Bersih di Lampung - Marketeers"
        },
        {
          "id": "auto-bd8ee5141a63c1d5",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9dab92ec5ec2b19d"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infoaktualsubang.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tiga Calon Direksi Bank Subang Jalani Seleksi Administrasi OJK, SLIK hingga Pinjol Diperiksa Ketat - infoaktualsubang.com"
        },
        {
          "id": "auto-bfe9ea45ca0ed1ae",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "207e9b077d3dfdc3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "money.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Sidang Pindar Berlanjut, Dasar Dugaan Kartel Bunga Dipertanyakan - Kompas.com"
        },
        {
          "id": "auto-c08dd6b16507c66c",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4e4e8ca4e38f50c8"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "megapolitan.kompas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kejari Tangsel Setor Uang Rampasan Rp 14,2 Miliar Kasus Pinjol ke Kas Negara - Kompas.com"
        },
        {
          "id": "auto-c14d4ebebd3f27a4",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "d5adbd4c627cc06c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "reqnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Heboh Oknum DC Kredivo Diduga Lecehkan Konsumen, Begini Kronologinya - reqnews.com"
        },
        {
          "id": "auto-c182c073fe413563",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f09155f6091d5bf7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tirto.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "AdaKami Builds Clean Water Access and Proper Sanitation for Residents of Dusun Banjarsari, South Lampung - Tirto.id"
        },
        {
          "id": "auto-c627f401073266d2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "140efebfec906cd6"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Pindar Salurkan Kredit Rp 103 Triliun, OJK Dorong Kehati-hatian - CNBC Indonesia"
        },
        {
          "id": "auto-c7874c412adf7000",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "f4db959a77290b05"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wartaekonomi.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "OJK Pastikan Kenaikan Suku Bunga Belum Ganggu Pendanaan Pindar - Warta Ekonomi"
        },
        {
          "id": "auto-c886e957330df2e7",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [],
          "socialItemIds": [
            "1896499aa371be14"
          ],
          "independentSourceCount": 1,
          "domains": [
            "youtube.social"
          ],
          "platforms": [
            "youtube"
          ],
          "hasPrimarySource": false,
          "headline": "Pinjol Bunga Tinggi dan Gali Lubang Tutup Lubang  Siklus Hutang yang Mematikan!"
        },
        {
          "id": "auto-ca90b659f3b63dd8",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b4ed784973881226"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "tangerangekspres.disway.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kejari Serahkan Rp14,2 Miliar ke Negara, Uang Berasal dari Kasus Pinjol - tangerangekspres.disway.id - Disway"
        },
        {
          "id": "auto-cca9e0baad9566cd",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "432061225e384470"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasus Debt Collector, OJK Kasih Warning ke Kredivo-Kreditfazz - CNBC Indonesia"
        },
        {
          "id": "auto-ce2bc53331685e81",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "9f40143078c5f6a1"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "inilahjateng.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collector Pinjol Diduga Lecehkan Nasabah di Purworejo, Polisi Benarkan Kasus Berakhir Mediasi - Inilahjateng"
        },
        {
          "id": "auto-d0a680e796821404",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "fa0c06c741710c66"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "radarpurworejo.jawapos.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Tawarkan Utang Lunas Asal Mau Ngamar, DC Pinjol di Purworejo Digerebek Suami Nasabah - Radar Purworejo"
        },
        {
          "id": "auto-d64a8b6fb1299862",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4fd89f3190cdb655"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wow.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasus Debt Collector di Purworejo Diselidiki, Diduga Ada Tekanan ke Nasabah - TribunWow.com"
        },
        {
          "id": "auto-d705d23b117fb29f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1ab2bdef855e6239"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Strategi OJK Perluas Akses Keuangan & Pembiayaan Industri PVML - CNBC Indonesia"
        },
        {
          "id": "auto-da3000aa77a797cc",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "c9aa48ebcb8df3c2"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompasiana.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Mimpi Kuliah Anak Miskin : Terjepit UKT Meroket dan Jeratan Pinjol Pendodikan - Kompasiana.com"
        },
        {
          "id": "auto-db86fdf664dd6807",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8a4b0925258e0f0b"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "cnbcindonesia.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Video: Tekan Kredit Macet di Pindar - Pegadaian, Bos OJK Pesan Begini - CNBC Indonesia"
        },
        {
          "id": "auto-e09602411d0f13da",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "746bb02cf681af20"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jogja.polri.go.id"
          ],
          "platforms": [],
          "hasPrimarySource": true,
          "headline": "Lindungi Generasi Muda, Polsek Prambanan Sosialisasikan Bahaya Judol dan Pinjol di Gayamharjo - Polda DIY"
        },
        {
          "id": "auto-e16df0392c5e2e47",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "5b3f14752a106049"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "klikmaluku.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Anak Maluku Diedukasi Bahaya Judol dan Pinjol - Klik Maluku - Klik Maluku"
        },
        {
          "id": "auto-e4b201d39458fab0",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ec2599d6c0550b17"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jatimnow.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Gila Konser Berujung Pinjol, Pakar Bongkar Bahaya Fomo di Kalangan Gen Z - jatimnow.com"
        },
        {
          "id": "auto-e6b5ca5146768c87",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8d9e07db5bcb05c3"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "identitasunhas.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Cegah Remaja Terjerumus Pinjol dan Judol, Mahasiswa KKN Unhas Gelar Sosialisasi - Penerbitan Kampus Identitas Unhas"
        },
        {
          "id": "auto-ea0ab76b210c5baa",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "8d427df6481fc4b9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "kompas.tv"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasus Debt Collector dan Nasabah di Purworejo Berakhir Damai - Kompas.tv"
        },
        {
          "id": "auto-eae9aea8c3622e0a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1ea6ad094d1f7d92"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "wow.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Pengakuan Nasabah Diduga Dilecehkan Oknum Debt Collector saat Negosiasi Tagihan - TribunWow.com"
        },
        {
          "id": "auto-ec0fda1d99993d0f",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "6b403d5f46c37aab",
            "8ff021568d81a84f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "berita.liputan6.com",
            "daerah.sindonews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Kasus Debt Collector dan Nasabah Digerebek di Purworejo Berakhir Damai - SINDOnews Daerah"
        },
        {
          "id": "auto-eee86f7fbcc69cd2",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "b8b05cb5ced703ae"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "beritalima.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pemilik Kos Wajib Izinkan Alamat KTP Penghuni, Perda Hunian Layak Surabaya Tuai Polemik - Beritalima.com"
        },
        {
          "id": "auto-f168ede74fde0418",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "1dc039c9aaeef4e7"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "teropongsenayan.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Nurul Arifin: Literasi Digital dan Keuangan Menjadi Benteng Utama Melawan Pinjaman Online Ilegal - TEROPONGSENAYAN.com"
        },
        {
          "id": "auto-f644367497bf8d8a",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "66e743b683b0cc7a"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "jatim.tribunnews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Viral Terpopuler: Nasabah Ngaku Dipaksa ke Kos DC agar Utang Lunas Hingga Inul Tagih Honor - Tribunjatim.com"
        },
        {
          "id": "auto-f6f8298f1fd794e9",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "4181e98a1ba2da66"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "bloombergtechnoz.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Hasil Pertemuan OJK, Kredivo & KreditFazz di Kasus Debt Collector - Bloomberg Technoz"
        },
        {
          "id": "auto-f96c663b42638f5b",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "492be9f47a756857"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "finance.detik.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Debt Collectornya Diduga Lecehkan Konsumen, Kredivo: Tak Ada Bukti Pidana - detikFinance"
        },
        {
          "id": "auto-fe9f1a15fb891a61",
          "eventType": "general_sentiment",
          "severity": 0.35,
          "articleIds": [
            "ea7575381ce5b0bb",
            "ac893bdd310f26dc"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "antaranews.com",
            "beritamoneter.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pakar desak AFPI dan OJK perbaiki izin penagihan pindar - ANTARA News"
        },
        {
          "id": "auto-51d36f45ec130afa",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "683309c3729cede9"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "floresku.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Riset Ungkap Dampak Nyata Pindar terhadap Pertumbuhan UMKM - floresku.com"
        },
        {
          "id": "auto-56bcd1f0d3f0d69b",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "eebf9002ecd20e04",
            "bb1c4194d8c0df15"
          ],
          "socialItemIds": [],
          "independentSourceCount": 2,
          "domains": [
            "keuangan.kontan.co.id",
            "tradingview.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Laba Industri Pindar Naik 37,43% per Mei 2026, Kualitas Pembiayaan Masih Jadi Catatan - TradingView"
        },
        {
          "id": "auto-6d92a1a6c19f32da",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "b5ad47f7e18974ba"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "olenka.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Samir Tumbuh 84% di Semester Pertama 2026 - olenka.id"
        },
        {
          "id": "auto-7903b9e263702eba",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "f0a92a3de38b348f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Samir Salurkan Pembiayaan Rp2,3 Triliun di Semester I 2026, Tumbuh 84 Persen - Infobanknews"
        },
        {
          "id": "auto-938a68625824d5da",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "dd690d88fa3a0e4f"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "nusantaranews.co"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Laba Industri Pinjol Tembus Rp1,08 Triliun, Tumbuh 37,43 Persen - Nusantara News"
        },
        {
          "id": "auto-9566f6b55ecf28c4",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "70c2f3451d50cf8c"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "swa.co.id"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Pindar Samir Salurkan Pembiayaan Rp2,3 Triliun pada Semester I 2026, Tumbuh 84% - SWA.co.id"
        },
        {
          "id": "auto-c35bcb40f84f7b58",
          "eventType": "industry_update",
          "severity": 0.18,
          "articleIds": [
            "5faf2b3ce201c2b5"
          ],
          "socialItemIds": [],
          "independentSourceCount": 1,
          "domains": [
            "infobanknews.com"
          ],
          "platforms": [],
          "hasPrimarySource": false,
          "headline": "Ada 8 Pemain BNPL di Multifinance, OJK Proyeksi Bisnis Terus Tumbuh - Infobanknews"
        }
      ],
      "articleIds": [
        "580c3e98de91255e",
        "1bcd777b9588a6db",
        "8d9e07db5bcb05c3",
        "6e3f165556420a7d",
        "b4ed784973881226",
        "c6bfef3713329dab",
        "90e26dd81dba90aa",
        "4e4e8ca4e38f50c8",
        "4a5bf755265b3b13",
        "d291666fa8af1486",
        "eebf9002ecd20e04",
        "bb1c4194d8c0df15",
        "746bb02cf681af20",
        "73cb389fb3830ecb",
        "f4db959a77290b05",
        "207e9b077d3dfdc3",
        "0264c18493fa6bba",
        "4a38d60a8fdaac14",
        "fb9a651511c5658d",
        "05f63e359ba91474",
        "6c773e224b941ae5",
        "411539cfb8ade588",
        "c37ddf70d53b9a16",
        "4b021365c31df729",
        "2766136f4f092e43",
        "9ada5f7fc2866a89",
        "51c55c5cda2ff807",
        "e5f8e252c4a44850",
        "1672eb045c8ee7d7",
        "27fccf0e55af079a",
        "f0a92a3de38b348f",
        "3196c3c9c6820707",
        "9149bd578dbc6fc1",
        "b4bcfcbe6e5702d2",
        "52a15ab1fad56358",
        "ee4e5558e174880f",
        "2a379e3a5ac0bb9b",
        "abac9e4cf03f1fdd",
        "31dc3e74745968cb",
        "3c815a161dbc9fb4",
        "514c9f32201f03a8",
        "ccbd79e19f6f0573",
        "18a96fb4bb4ae81b",
        "2578f9498dfcf949",
        "079252fd565ed0e7",
        "1db53e731cc22c00",
        "a16d6ff82735391a",
        "5669074934dbab72",
        "9f35ef52e2251c8d",
        "14ba01f5dbabc467",
        "048643539cd79de7",
        "954bc254fbb161c6",
        "a8c42adb9340ace1",
        "71987ed33aaa9c3b",
        "51b1bfba794967ad",
        "70c2f3451d50cf8c",
        "b5ad47f7e18974ba",
        "13b3de48d39dbd19",
        "d61dcdeae59e690d",
        "3faa0d7e8854d68f",
        "683309c3729cede9",
        "9dab92ec5ec2b19d",
        "4a1095f1aac22660",
        "db89d7818757ee6f",
        "1ab2bdef855e6239",
        "ab512520e7bc5b1a",
        "13daa87380b3bbf6",
        "f06b0ba73880530a",
        "0a2f8e3e7bafbc95",
        "1ea6ad094d1f7d92",
        "c353a7bc666ae364",
        "4d0e7a594a4cde88",
        "4adaa424c60e9f05",
        "6018b8bf7c732f0d",
        "e3c3b8922a93f687",
        "5faf2b3ce201c2b5",
        "265b53bc4e8f968c",
        "812eeef66e29592c",
        "872d78af9112ab60",
        "9f40143078c5f6a1",
        "17898ba2a26a1cf1",
        "5ccc917388041d2b",
        "9192a4b2759f084c",
        "4fd89f3190cdb655",
        "7596921b14a6772b",
        "3e37058bfd052a63",
        "dd690d88fa3a0e4f",
        "1dc039c9aaeef4e7",
        "c905346166c8b699",
        "b8b05cb5ced703ae",
        "48870282f13acf5d",
        "a0953bd24dfc8c11",
        "388ee05754c4235d",
        "8039c8fe5eaf833b",
        "eabd4bdd13d57dfd",
        "e0603bcbf2481969",
        "515fa0b4f390970d",
        "1bbc05a7f931cde2",
        "5bf83d8311a22b90",
        "81d114af53bc5be2",
        "f09155f6091d5bf7",
        "2d339910cff60f33",
        "09314dd11258bf58",
        "9bb21e1fb48507fa",
        "5b3f14752a106049",
        "18b52d43b036c70b",
        "65c5fa4e663263e5",
        "fb8cbd9ed476a793",
        "523f15018e5a238c",
        "6ef6bcd5b5df82c0",
        "dcb4e905dbdd9309",
        "67a0313a6dde9e46",
        "a94d2787b74292c5",
        "5da8f87993b2d1e8",
        "492be9f47a756857",
        "8994a9ffaac96737",
        "3c217fc378a4e8a6",
        "24edd40585eb2cf2",
        "750fa92d35dd4cb7",
        "b7072dccaecd670b",
        "6a9c14eabb5e9f60",
        "b2e94b233e1dffaa",
        "4181e98a1ba2da66",
        "5a6845adb977e383",
        "6b403d5f46c37aab",
        "8d427df6481fc4b9",
        "57864e8eb8f072e5",
        "432061225e384470",
        "e64920ebafed4071",
        "416be4d757168ad2",
        "6233bf614860ae02",
        "9a65488cddcbb61e",
        "5781ff5c18768484",
        "c4cc0d8d3c24410f",
        "b551ba44885889ca",
        "0231440178586b40",
        "b0204227b464c58c",
        "86b967af1a8792de",
        "e6862698e5f8082a",
        "28193dfd62ee49e7",
        "f65326be32cdecfe",
        "7cf9aca8d7c69ae4",
        "3f763ecd02a860f1",
        "882e0b4aefb1a73c",
        "bffd961da86a3e3f",
        "3cb456fc4dab40a1",
        "e1d60053a927ab89",
        "c808004e82ea8301",
        "1d708ffa218b3d44",
        "c9950a90445645d3",
        "00067d41fa6eec96",
        "d7205317c4aea6fe",
        "3feee0e5094ad933",
        "64f2f0aae4b7bfef",
        "75508ef55a6ce09a",
        "12a97348eb622049",
        "2ca040cc38756c9d",
        "c99d3bdc1b061e83",
        "f5829161ef605427",
        "740009e5d0c71e48",
        "1b0bf73bfc591996",
        "4173ccbec2f6165a",
        "79d753738570d760",
        "6d87b061544d9d19",
        "965cb6c58c6e8441",
        "577da0c45c414178",
        "f2cbef54717801a0",
        "bc9558a7f1b6d6a4",
        "acaf04e88e45e0a2",
        "1cda3484cf234479",
        "05b00f3f18e7f9a4",
        "fa0c06c741710c66",
        "44492579718e08d2",
        "2aba50788bdf4ada",
        "db2ed51b530c96d1",
        "4a25192ebd09a465",
        "6e79d5bac8e7c3f8",
        "42ab0b57d63c5ba3",
        "66e743b683b0cc7a",
        "8368c543b2187376",
        "f390dd8c79bf4657",
        "447ffd9c4a7dd1b8",
        "4c785cc2270c614d",
        "316877afdf4b82a3",
        "c6101ab1b40980e8",
        "ba3ce24671a99a6a",
        "da98474ab8897af0",
        "d229158ea59af954",
        "fb9a094ef3120fa9",
        "ec2599d6c0550b17",
        "d5adbd4c627cc06c",
        "fc04e026da9258ee",
        "44411a58e8193c34",
        "7c1f98408180632d",
        "64d29f087087d5ce",
        "5cd376738d73a8da",
        "6d22ec5b3cb69290",
        "c9aa48ebcb8df3c2",
        "d11e1b414b97beba",
        "4b6af6a3dbcc7e56",
        "1067a8542ff0788c",
        "8311c181f5bf2891",
        "7884562d570a4c63",
        "a0ef01a6a0f63e5f",
        "d47754a9fb9d081f",
        "e905290698ff9914",
        "6820e02e03df3539",
        "0a9825c43c6f1e79",
        "8187db99e8599af6",
        "4a39b371845ce090",
        "9675753e348f6d83",
        "ea7575381ce5b0bb",
        "b2e638e8a5710bce",
        "45f2f8028066766d",
        "28f1fd9501091d84",
        "162d3487bf8086ae",
        "bfac3876a0df0a76",
        "140efebfec906cd6",
        "260a65d231505625",
        "1bfa865266e9cbea",
        "86f4bcec6e72cecb",
        "6e412eb2fb1e5a94",
        "9263202219e9e543",
        "a581275c432bc256",
        "de682c580427a6c8",
        "e711b688df22646e",
        "b286bced9837f8d9",
        "a076fc84853430e6",
        "d9388e2acc870763",
        "d7e120db09cc0053",
        "8ff021568d81a84f",
        "bdd173c49c27346b",
        "75d0463032044468",
        "a2ca5a15ab9fc87f",
        "e2fdc23b25603457",
        "8a8164ee18f08371",
        "ac893bdd310f26dc",
        "3db36ffbd7baa3ad",
        "c37d43e2a818b52d",
        "8a4b0925258e0f0b",
        "58ff690ce7b710eb"
      ],
      "socialItemIds": [
        "2af5167379fcd6e1",
        "9615ad23b3c901a1",
        "efb5ef002083a319",
        "098db5b6dc31d592",
        "d45393d8293d7631",
        "e18ecdf7a6c58fb5",
        "017fa78bdfcff2bf",
        "53ecf4694516f7ed",
        "7600b216971dd86e",
        "19e6d2ae65725b0d",
        "a7031a8066a71d0a",
        "8fc24ea5bb92db48",
        "a6a8e294e73bd6c6",
        "1896499aa371be14",
        "e20c4fd504f560d3",
        "a7b4bae52a429552",
        "a8b04e9480a042e8",
        "aeca83655f65b66a",
        "c8dc4e5d815db8f6",
        "61e26020b7989066",
        "88e39a5916882a13",
        "df73f69e6cc153e0"
      ],
      "_newsVolumeRaw": 241,
      "_socialVolumeRaw": 22.0
    }
  ],
  "articles": [
    {
      "date": "2026-07-13",
      "title": "Apa Itu TWP90? Indikator Kredit Macet Pinjol yang Dipantau OJK - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOUzZMUXpaYzV4TU52bjhBMHNTNmpWN3otTHFNTU0wcGRuUU1neUItdS1oUHVpQjR5Vk52UF9ya0RUM0NJSEwtQWFMZWFROEJ6OVhmLVZ4eDk4TUJUbkh0OG1uYVQyVVBzV3hqdHhsQWVpTk1UUVJkMS0zakVvOEx6U2FDX0ctWUJiUFJNeGFIM0FRV0VYeE9xN2FyTEFvNGx5QUVmVGJtRVdRYjlEb0FIZUU5ZXEzbmxiT0dWd0lR?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "apa itu twp90 indikator kredit macet pinjol yang dipantau ojk kompas com",
      "id": "2a75db06332a46a6",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-02d1d10b99532a82",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-13",
      "title": "Bukan Main! Satgas PASTI Blokir 951 Pinjol Ilegal dan 238 Investasi Bodong, OJK Ungkap Modus Baru yang Marak Menjerat Korban - tvOneNews",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxNZnVnZDdkWkJpV29INmUxdDgwZVNKWFdEUXJzd1l1aVMxUG9xTDVGbldwQjFwdG42enJRdHluR09iOUxwVmNIWmN0N1prNHNrTDBzSkx0aEZreW50aS01QVVfdUZUUFBHNHdNbV9VU3VPRmFLdzBQTmpvd3BrQzlGaG1UVU5nN25ETVZ3YkEwNkdUel9FdUN6MGdpb0dHaXJ1U3NmTmg5dTg2czJfemRHWUdyWXBUQVV2V3pEUnM0elRBLUVzYlZKczMxMlFJYVVKY3BRaVNFX203LTI4WXl2S1hObGJfd0dOLUpjSV9tenppUjEtYmxoMzdZRXZBV2ZN0gH6AUFVX3lxTE1nRUNPa2ZjRWhHcFM1N21nWXNmUXFNeGwzRDBHeTJJV0F2NXNzQXExSmtuUFE5ZENkd3R0akxZTVlGVnVTNzl1elpVMU90YjNOVmJFOWE5RU5KZmZrcF9NT2N0ZGVIMzRCNjNITDlkRXZFYkJSWkt6em9Rc1ZKS1JtRG5IdWxvMTBTWGdMRVFEUXNiQTk2RGNMeDVpYmZlOFE3TG5ZTGdQMVdCZ2tQTDRKLUhUeF9ORGlFWHdZcHdzMXctRkVZd2xHNWNUNTB4TFhDek1RUkVZMHV1eklGTlpiMmthQ2czVnk3dF9pWXZ3Z0s2UHl4b1BnS2c?oc=5",
      "publisherUrl": "https://www.tvonenews.com",
      "source": "tvOneNews",
      "summary": "bukan main satgas pasti blokir 951 pinjol ilegal dan 238 investasi bodong ojk ungkap modus baru yang marak menjerat korban tvonenews",
      "id": "0091e77712e8f068",
      "domain": "tvonenews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.7,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4c8457d7f62c04a2",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-13",
      "title": "Foto : Apa Itu TWP90? Indikator Kredit Macet Pinjol yang Dipantau OJK Halaman 3 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQTThlcnhWRGNFdklmbkU0UnFsQWRhRmZKWGttSUd4czhWRzJjV0ZVUFQ2SjN6TE9hWjA1MVVYTFV2RjhkMEtSeFVKQlM0cVVIem9QUDI2WjJwbEtLWUlQbm1HbUVOTzNBX0JfN2FLUHd3VWN5MENDNk9VX1R0SkJSUXZLWV9BbmdxaEVWUVRoNU5ham9qZkhJbXF2Rm01QjNfdGtNa0lqcENWdjZEa0w5SHlCZ002VlBEVzdycg?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto apa itu twp90 indikator kredit macet pinjol yang dipantau ojk halaman 3 kompas com",
      "id": "21e2728578c92bd6",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-85ced535377e3d7d",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-13",
      "title": "Satgas Pinjol dan Judi Daring: Dasar Hukum Kuat, Koordinasi Jangan Lemah - AFU.id",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNeTB3Y0F2OVpJMEM5X0YyZGloX2hBR3ByMVZocW5qMndibzJqNzljNXNoeEgwaGVPTlZ6UUlMbUJfM3IyRm80SkFlQ2ZkNTViZlNPcEhQaWhjeS1vZDVkbEZjc2cxT3dMOFhKN1dxUDNZdnotYXNfVWNfUTU5V2VvUTQ4Um55X0l2YUZRQVYyS041d3dpaU42MWRxUDhyNV9zTnc?oc=5",
      "publisherUrl": "https://afu.id",
      "source": "AFU.id",
      "summary": "satgas pinjol dan judi daring dasar hukum kuat koordinasi jangan lemah afu id",
      "id": "1b4169caf4353a96",
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
      "eventId": "auto-9c5d111e4da14ac1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-13",
      "title": "WOW! Utang Pinjol Warga RI Tembus Rp103,73 Triliun, Naik Rp1,66 Triliun dalam Sebulan, OJK Beberkan Faktanya - tvOneNews",
      "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQOXlYcEk5MUM0eHlvUmFuTXYwbEV5eEEwVTlReGd5TnB5T2dCS3pKQ3hQT0ZjQ1dnb00tR01SRlJEM3Z2eWpLQ3R1bWFpV0pyNzZfYWkzMWVjM0JkYXBiQXhpRUJlTlBocERTOGFxV2U2MFJ2X05SbDFWYTFRMFg1aXNTem0tSGh4U19Ub1Nma0k5RVV2SWRoU2JkYXpMZlBKN1JGU3RYbHp1bVlDVXgtYWZVQjV2VVR4MFNROVV6cXFJczd2cG4xRFpNcVJnQmJ5emMySWV0dm5yeFXSAeABQVVfeXFMUEIySFh3WFJuVkwxeDNKblFpNmxraER2VXhRbkF5ZHR5dlU4Z1JldXhHUWJrVmdTejIxc0toMjlFZXdTamFVZzZCdnRGUElUWkFaZXk2SkVzQXhYVHlIbWtLWC1aY0FmSGlDWExjbW5MLTRIWVNlXzhGaTFtRGhpbWVoUTRTa1l5MjFYdi1MblY3UHctU2RWVmxEZFlIS29MbnhENDQ0Ml9iT0owc05vQ29PYXplUlg1RHpJdnBTQmJxYjE5MnFPRlJtZHpyN29MdUloMmE5WW9LVFpWbGxRZWo?oc=5",
      "publisherUrl": "https://www.tvonenews.com",
      "source": "tvOneNews",
      "summary": "wow utang pinjol warga ri tembus rp103 73 triliun naik rp1 66 triliun dalam sebulan ojk beberkan faktanya tvonenews",
      "id": "70f6e8fdc6bbfb23",
      "domain": "tvonenews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 51.4,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f0405775231f6bec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-14",
      "title": "Judi Online Ancam ASN, Inspektorat DKI Ingatkan Risiko Pinjol hingga Sanksi Disiplin - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQRXh0U2diR2ttTVJoMGx1Rmw5WklCSUF1M25SZHVVSWxuU2hjRkNBU05wQW1RVjRERk0xSXppRXFCREt0MHIyZjJCRUtNdG9nMkNpem9LMjFvTVk4Uk0yVUlqOEdaTUNma3pWYjVteERILWo1SFpXek1sRjB3UlNJMVJKZFc5OWdKZ3pFWm96Z2NzeEVldHR1Z2ZyZVRwVkc2ckFQeDJOM1Q4NDZWM0RpVWluV3ZsVE9iNENhelBzQWM?oc=5",
      "publisherUrl": "https://megapolitan.kompas.com",
      "source": "Kompas.com",
      "summary": "judi online ancam asn inspektorat dki ingatkan risiko pinjol hingga sanksi disiplin kompas com",
      "id": "573fd0e93e40a918",
      "domain": "megapolitan.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 87.1,
        "label": "negative",
        "negativeWeight": 5.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7b5acd71ff6e587f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-14",
      "title": "Keliru: Tautan Aktivasi Pinjaman Kredit Digital Paylater - Tempo.co",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOZzJDSW54TXNSdjE4N29FeUN6Vzk4YnVsZHBvNVlVeWJ4M3ozUzdWck1FWDkwaUJLaEZ2eFZEZ2IxSHBVS0lCOFgxckpvbGxIOFpSMmc1a29fVXladDBDX3hFYWtWS0ltUVhlQzRJc0JyaWFhc0hRMmYwMVBrSFVvVEtSR0pXS2xvNkJqYmRzdU9YeVRBMTc4ag?oc=5",
      "publisherUrl": "https://www.tempo.co",
      "source": "Tempo.co",
      "summary": "keliru tautan aktivasi pinjaman kredit digital paylater tempo co",
      "id": "f63ecf297608d725",
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
      "eventId": "auto-765501bcbfd86015",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-14",
      "title": "Peneror Bom di SDN Jaksel Curhat Punya Masalah Hidup, Ngaku Kelilit Pinjol - detikNews",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNYXlETmN6Qlp2dVM1bW0yMnladjNXb3hqbHJtNWhtVGRjcGRTcmNQRTlTS3NGVHBBeHRJZWU2SUwwdEdXSU43Y0FzV25RWE1CRU81dnZ3cnFlQTJZZ3BZU242cmpwR21JYkhTak05YmJ4blR4S2NBUXlkOFRsTlQ2YnZ2Q3hWckpnZnRmeFBKeVNhbVo4Mll5dl9RVnBlUXNJcnIzN0ROV3FBSklaXzZSdVdoNNIBuAFBVV95cUxQZmpyVFdQZzZfVTNkRURadDI2RGdLYmZULTBsRzQzNUY2bXNRTzJHdUVneElYeDVpUXZmWEMtLVFmQjJLd1F4bGlaX0JYdDUwdmxyV254d3lNa2NRenFpc2pncFNuTzc5YW1VUDlQdUFPUURDa2JJT0YwZ2ZXeldoX0NPZVJ3V3FfejVNZTRIZ080aC1xM3JOVnptbHVMZXhjbVpQMUVZVUIwR3VRdmpINHpzOFU1blJ1?oc=5",
      "publisherUrl": "https://news.detik.com",
      "source": "detikNews",
      "summary": "peneror bom di sdn jaksel curhat punya masalah hidup ngaku kelilit pinjol detiknews",
      "id": "bee7f9be35d953b1",
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
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-15",
      "title": "Industri Pindar Raup Laba Rp1,08 Triliun, OJK Ingatkan Risiko - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQVUtyOVYxODJMdDhZa1l2SWljR1NVQktGalBwdzBWQzBZNW1jcXI2bzh4SGMzWkt4c3RuZ09yRnlNdU1KeVY2SFpyUERSWFphSmFtWDFIb0RYRjh5aGRBb1RmYjAwNG95VHNwTG9oWlFudGNvWHhZVHo3Vk9DbjJUSE0wTS1CTTY1cmdpUE1ud2dJSG9mclJaVElUME9pZ9IBowFBVV95cUxPS1NuVDlETUNUX2ZlSUZsdVJieVVOMW9RaTNUcFBhcUxZYzh1a1FYcjctVUpOQWRfNFlGYlUxQUJNQUROaW1Ycmd3V3UwYmpRUlNUWENTTklHa3BZakotUTMtbF9kUWRjYndkN0QxNmhNVHU0TXVUV1g2WXpraUtrQTdqVjVLR0FNTFF6cHpCdF84cV9GZXhKclQ3cVJqZE5EdWY0?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "industri pindar raup laba rp1 08 triliun ojk ingatkan risiko warta ekonomi",
      "id": "fd27c708a1ce5650",
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
      "eventId": "auto-115b56af248c2daf",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-15",
      "title": "Kredit Pinjol ke Sektor Produktif Sentuh Rp34,95 Triliun, Setara 33,70% Outstanding - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPZjYtQlp3bjQ4SGZTX3BUVDJKckUwWW1kTjQ4RFFhVWFBZHlYakZQalN2WEx5V3BpMmUxcmVQTUhXeFBhRGtVc1dYeGpRZm9iOTVMdGlGa3gzT1lhXzlDaDJHeFQ0bTh4ZkV3QVlaV2UyOGZvVVRTYlQ5Z3kxdzhhWFVYc3QzUHd4RklYaTYySElBOTVuc0ZlSS1ybXFRWmhKYm1FMlV2U1hCd3BDUzFmdzdIQUlqVmxyYzdLVDZadlFRVVZJS2FiYXdNZWE5UFU?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "kredit pinjol ke sektor produktif sentuh rp34 95 triliun setara 33 70 outstanding bisnis com",
      "id": "4242272059bf74ea",
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
      "eventId": "auto-60cc97a54dd73b9d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-15",
      "title": "MPLS SMA UII Diisi Penyuluhan Binmas Polsek Mergangsan, Pelajar Dibekali Waspada Pinjol dan Judol - Media Hub | POLRI",
      "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOYnpNY0FRdVQ0NHo4djZCclpvbGVqX21mMktUZnR4elBmcHBFX0pKdEdaTlhvX1ZMam9zQlJCUElmdXhQWXo2bk5ZVlhTYjdRVHJZb0lfcTlCdjF4R3NQR2ZSTlRDNXByRFNZcU1NQ3dWYzJGM052TG9YVDNkUjk4RUgza2NkRFB2T3JUd0VidWlQMC1DV1B0TUo3STZZaWNxMU85VmtDaTA0bDdpb1dNRjAybGE1WkNUandVZ1ZUZUJXdGsxY3hybHRRZHhJd1RBMmJRel81a1hubHJ3MmxBeldR?oc=5",
      "publisherUrl": "https://mediahub.polri.go.id",
      "source": "Media Hub | POLRI",
      "summary": "mpls sma uii diisi penyuluhan binmas polsek mergangsan pelajar dibekali waspada pinjol dan judol media hub polri",
      "id": "35da0c8fad148c3c",
      "domain": "mediahub.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-80a6261964e450b3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-15",
      "title": "OJK Kantongi 18 Pindar dengan TWP90 di Atas 5%, 10 Masuk Pengawasan Khusus - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOVTNkY2pHVjBWNEZnMmtoWUxSeFdoalVzRFc3aXhxUlhHbkpLY2w2WS1uYUtQcm5MbDRobkpQMHkxSTdKV09qa0x0SFZlMnJsblc4LWpiNzVMU3JfM0dHOFNRYmZqaHVLTVczU0RxR1hPeXVTMF80LTB2WVdjY2RZem1ieHEzSnJoNWhJSzgyZ0c4OXA0UWhKY3lESGkwLWYzTF9vR09QMm1ST2RGZ3Q00gG0AUFVX3lxTE4xNWNnV282ZGNoWjg4cWxrcG1qRmI3V2FRZEY1dDE5Y1lHS0FMZk5QZ3lVR2luSURJUnNUU1ptb1NscmVRc0VIa1RFYVhmS211aEhleTNQNnBNTzJ6WjdkU19iWnZBR19uN2RrNUhZY2FSVENPMUhnZFFPX1Z4UURQLXB4dXo5QlQ2TnIzSUh6T1dyX1FEWjVKbUpEclBFMnh6Y2FCSFJ6SFZxWmQ2ZUl3VUtMRw?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "ojk kantongi 18 pindar dengan twp90 di atas 5 10 masuk pengawasan khusus warta ekonomi",
      "id": "6970805502983d21",
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
      "eventId": "auto-4a602c61f463e835",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-15",
      "title": "Pelaku Teror Bom di SDN Srengseng Sawah 15 Jakarta Selatan Diduga Terlilit Pinjol - Kompas.tv",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQRlhSd1FkWWxFdWl0dE9TdzlUZWIzOVRkQ3JFNG1fT2VzcW00TzhreFQ3eTFQOWdmVUE0LWtNcEVjaWZwTjNpa0tOSFRuNF82ajk1Vnd4R0ZWR3FuR0dxMmMxcTh3NVFscXNqa0pLTnFqaVZBMm9Yb0JmWk0yYkdMc2QtVVZpVWlWZUpJaWRYeFZ6N0YwRDFNZDhZczVkVVlMU0FIejhqc3Z6bTZmZjhMMUFWNjZpS2NuNWlj0gHAAUFVX3lxTE9TSHdKU2VUZ3NKa2dSRDhHUzBGdkdzcnhlZG9tNjd4RFdqZDZUUUNtMTB2X3FiR0lfeWt4NENpWUM0bGVVRVA0RVA2TVNTTmhJaXo1OWx0RXBjcWxjVG52dFBrQ1ozNVljQ3ltaUV5SE9STk9STHBjZWxXdk9ZMjVzcDE1SVlYbDR3andFbU95N3hDRFlsczZ2MUdvdEpueXlUNWw0bHpXUlFDeGJuY2JOYmoyVHFNTmhBM0l6MVhGbQ?oc=5",
      "publisherUrl": "https://www.kompas.tv",
      "source": "Kompas.tv",
      "summary": "pelaku teror bom di sdn srengseng sawah 15 jakarta selatan diduga terlilit pinjol kompas tv",
      "id": "d509f64b3baf18ef",
      "domain": "kompas.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-15",
      "title": "Peneror Bom SDN Srengseng Sawah Diduga Terlilit Pinjol, Kerap Laporkan Kedatangan Debt Collector - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPWnVVR29rZHZEcmpFU1V0Y2xqX2wtYThYWDhSY3lPOFVhbGpYVGJFb01PVVJHUFRhakx1VjdJSWIxSjVLV3haMEgtX1RIcnprWVZUa21PSnNfbXRJOXBDNXkyaHpHRks1cXhlSVFtWkVnUzN6OHhnSExsUHJKckh1NXlobF9jc0lvNEJIRE82WWJIeDNZN1czeHViUFdfSUdfbEI2RG5qRlNabzVPdGNJNGwxYjUxTXVVMko2WDlwNnpYd2c?oc=5",
      "publisherUrl": "https://megapolitan.kompas.com",
      "source": "Kompas.com",
      "summary": "peneror bom sdn srengseng sawah diduga terlilit pinjol kerap laporkan kedatangan debt collector kompas com",
      "id": "11dc927c3812f856",
      "domain": "megapolitan.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-15",
      "title": "Peneror Bom di SDN Srengseng Sawah 15 Terlilit Utang Pinjol hingga Bank Keliling, Warga Resah Banyak Debt Collector Berdatangan - galeri foto - tvOneNews",
      "url": "https://news.google.com/rss/articles/CBMilwJBVV95cUxORjFOYlV5ZDlKQnNndWpUQ085ek5FS2VGWFkwNDJuMUY2d1VNNTR1ZTczTmxSTGYtdVkxSWdMS1Z3LVRYa1Iya1AyNHI3dll1ZVA5TTRfcnVtc25Ob0FIRDltT0hhSUlGaElHdnV0bWtRUWxiNlhHMDdLRXh1WTZzeUZxVHU0cUcyaUkyOC05T2JnRGRHUGlsQ0F1MnNTSC1JMVhCZ2NHcFQ0TFp1WllOSEx3Vy0xMk5yQk5uODJoNUhZN0VKM0hWOHZrZVpabHgtOVE0cWlPdjc1X2NLeU5GdXJTZG5fcWxtY0FiNmtWWFpkRkpoV0drVDNvWlVHSDY0S0NicjlvLUltdUIxMHJiazRDdmJ4ZTg?oc=5",
      "publisherUrl": "https://www.tvonenews.com",
      "source": "tvOneNews",
      "summary": "peneror bom di sdn srengseng sawah 15 terlilit utang pinjol hingga bank keliling warga resah banyak debt collector berdatangan galeri foto tvonenews",
      "id": "44cc01fb4e237727",
      "domain": "tvonenews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-15",
      "title": "Peneror Bom di SDN Srengseng Sawah 15 Terlilit Utang Pinjol hingga Bank Keliling, Warga Resah Banyak Debt Collector Berdatangan - tvOneNews",
      "url": "https://news.google.com/rss/articles/CBMihgJBVV95cUxPTW9JSGdRdktvanZYRHhUTVlyeUxVY3llV0hocW1yNzJjMjBXM09PYUQ4T1NKQmRtYUNWYkxjSG1vRTBBSU1TbDlMOVNGQWJyNzJTZVdfa2h3WVlEYTUxeHpLVXluSm5ITGREUlg1VmNtN1ltaGkwMDJRMkhMem5ISXVHNFI2cGJIemVXZ2x6bXJ5dmQ2QThESEtEM2R0dzJBWkVmeUp0X2hQMEtndTBxSE1mSzMwTDVCTVR2MUVIZVdMaG90Y0lMTWhrRTVBaTk4WWV3M29GTE1iQkRrbnJyWkx3c2dibzMyZ1JhVmpqU3VOWFBBeGh5d0oyd3UxRGdpYnNhRXln0gGLAkFVX3lxTFBOczZMa0xYZFYwVGl1QUswdW5RbGV1MmstMTYzUkFwUkZjQ1ZVNlp1Y1haVnJ5ZW9XcTRxTlRNN0tqbXJaWnJST1JwNVlWRnRBR1pISk5Yb051bEFRWTAzbmhJZHY2dVdfdndSNmRBZGU1a0IzeWJFaXhJM3dPcVhuWlh5VENzUzF6SU9XUXRXQXpCdUxWcXY5RTJGS0I0TjN2S2xzQkxEZnFpM28zOWFrODZPUFhtaGZybW5xMkQyeFFWcHZvWDJfTHF1akJqMTNEMUdjZTFDM096MkxTSnVtMng3dU00UnBybjRLZ21HZjY0TllxX1RQbGlzU3FiSXNpcm5ENHlld3NUQQ?oc=5",
      "publisherUrl": "https://www.tvonenews.com",
      "source": "tvOneNews",
      "summary": "peneror bom di sdn srengseng sawah 15 terlilit utang pinjol hingga bank keliling warga resah banyak debt collector berdatangan tvonenews",
      "id": "6eea7d0f59226732",
      "domain": "tvonenews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-15",
      "title": "Peneror bom SDN Srengseng Sawah terjerat pinjol - ANTARA News Kepri",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNLXU4T1pRYk9FNDdJOXUxZ1VyT3BGcDFfT29ZY0l4TklZWVJQQmRNdFlMT2NHeW4zSW02SVBaeE1XdjlrN3hHWDV4ZEVwYWdTM3lKQ1Y4Nl9zb21xeVEwd213WldSdWtPeHp6TDBVZU82QlNLR0ktSDg4UlYzWnpLcGhFend4ak5rUkRJV0RvWWh1aEFU?oc=5",
      "publisherUrl": "https://kepri.antaranews.com",
      "source": "ANTARA News Kepri",
      "summary": "peneror bom sdn srengseng sawah terjerat pinjol antara news kepri",
      "id": "d1e9e9853f452d45",
      "domain": "kepri.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-15",
      "title": "Terlilit Pinjol, Istri Sakit, Ibu Meninggal: Tekanan Berlapis Peneror Bom SDN Srengseng Sawah - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPa0lMOU9WTkVrWkd1NjNFbnUyT21FOHJZbUFFTjdFV2FiSTA2TVdOZmI3eW00ZU0wUFVvSEl5eVpvU1hRRXBEbV94LXRuMEZscUdlanJ3S3FxYy1Wd1ZJNkdHYk5uUnlnYTNlaE9nTFE3SmJQb2NzUUlxdnoweldGVERxdkt3WG1FSnFVVmY3QlQ0eVJBb1ljZ3p2b2c1cWVScUF5ZEhQUmpmUEE0SGRKT3YwVWMwTXJsVXJJa2cwUHJ6VTFU?oc=5",
      "publisherUrl": "https://megapolitan.kompas.com",
      "source": "Kompas.com",
      "summary": "terlilit pinjol istri sakit ibu meninggal tekanan berlapis peneror bom sdn srengseng sawah kompas com",
      "id": "b5d7dd9be42870ca",
      "domain": "megapolitan.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-16",
      "title": "Bentengi Pelajar dari Pinjol dan Judol, Unit Binmas Polsek Mergangsan Isi Materi MPLS di SMA UII - Polda DIY",
      "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxPSkllbGVKUGhRZkxJQXNEU3htOWtoSnNoS2xKUVRFbmhOU0wxSy03dEFXLUVCdXdjbHN3REo3QjJqd2FRcjJXUXVhQVJUYU5WWWxzX3JJaFkzSFZjSktNMUJiOHpWVW9mMGlqa0ZTUWxmWUNqZl9LZC1mY1ItMHlObzU1Snh3ZVlMN0ppTTVnMHVXTWQ0MG5DcUVDdmNmOU02NFZ1dGN1eGRkQnBEQVFhbHMwSHo4WHdVUVJZVGVnbXVQeWFTZ3gteGlacks0TzdWbl83X3p0WUdTMUs0cWllR0V0VVpudndDelFIOUdERjNDZlZldkdrYjJn?oc=5",
      "publisherUrl": "https://jogja.polri.go.id",
      "source": "Polda DIY",
      "summary": "bentengi pelajar dari pinjol dan judol unit binmas polsek mergangsan isi materi mpls di sma uii polda diy",
      "id": "b1ac8a59fb6ea608",
      "domain": "jogja.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-28acb6fe7277c626",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-16",
      "title": "Cara Pinjam Saldo DANA Tanpa KTP Langsung Cair ke Rekening Terbaru - Halaman Utama - ITERA",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbTR2ejZ5b3pCVjJGZm81NkkzdTJwSkRBcFVadEkycmFmWlNiRGxES1hvcnZtd2NDUXloSWhsMFJ3US05TnNSU0Q4ZDV4R2kyaXBWVnNDMXVPakNYUmVNYlFCQ1hCTG9IdFlOYVBxNERrQWR2d2ZOUjZ5aWJ1WmoxSU11d3lJTGljWXNSemZhZjlWN3V5QnJ2NGt1aVk?oc=5",
      "publisherUrl": "https://www.itera.ac.id",
      "source": "Halaman Utama - ITERA",
      "summary": "cara pinjam saldo dana tanpa ktp langsung cair ke rekening terbaru halaman utama itera",
      "id": "0ef7dd5a66e562a4",
      "domain": "itera.ac.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-14675e011bbb2249",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-16",
      "title": "Econext Ventures Ditutup, Diduga Investasi Bodong Berkedok Ekonomi Hijau - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPMXQ0UUxSSXhYU25SN2Rxc2pDT05wVm96VWc4NklZZ256bkZocE05b1p2ZzZHaHdKblh4TUI0QTF6UWhOQ1Z1Q2RuVUFrTFVvQ1pVcnlYdFFKeUhHZTBvTTZYRUVVMW5pVXN4VEhnT3hiQVdiSVAtR0Q4SGp0UDR5RVdheHplUENYa0h4MWM4QzJuNjVzX0ZKWGdzRml1UmpKMkhnRnZQMW9xVjdrZVpqdm1XT1BhQdIBuwFBVV95cUxPS1NzY19aSmwzRkRjVG9FejUxZ2R3MldDdnZ1WlYta3ZiSEtKcGxmM3o5ekR0bi03SVFuREZoVmQwdkQ0YWRLLTFhRXRXOFJmYXRwZEVHNjliaDgxcEhpeHBQcDZ3WWlNdWY5TnkxU2hneFBTMkxRTTZiYkJyZnk0NE1VTDB5Z1VUN3JBX2VweWY0MUxITGVJSG1oRWFZc0ZtcnZFWDFiMnZSNXdGTjhDMEtPRlRiSkZvY2g4?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "econext ventures ditutup diduga investasi bodong berkedok ekonomi hijau detikfinance",
      "id": "3e5b33fd0a576552",
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
      "eventId": "auto-f5b6b394925d02fd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-16",
      "title": "Inovasi Kredit Pintar Raih 3 Penghargaan di Ajang CX Asia Excellence Awards 2026 - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNd1lqQUZqajlEcWZYbGFIQjVjU1lPVUF5aDdYWVB6bnFaMy0xVy1BaU4wOW51cDJRdGIzYXl5OGxhakhUZGUtT08tSDBtY0xwWG5sMzlwYjZKYmVPcTk3QkJIWXBvc0diamxXS05vRklqNi1Cc0JFaVZKSk9FVEVqMkozTnpyYms4UlBfenRmLUtSQ0xnTm8tUWZuOUE1R1dJY1ViWTVWa3VIZ9IBrAFBVV95cUxQdUxsdWxDNUpQMldVNUJpcTUxMzd4aTh3cVlUTlhRNVE0VTQzUHZZUlU2a2lXTTZXdHhsM19SUm1hNEhsZU1VUU9zVzg5ODFZRzhRSF9qbFppTnJQNzk4OW0zaXlOUXNGRG40dWNhSHoyNElJWEdJZGY0UWNfQnRmaUk0THduMEk5LXV2dk1YYnF6ZE5OZ25vUW9WNVB5OWx0S2lrWnNkbWdIUzd2?oc=5",
      "publisherUrl": "https://www.jpnn.com",
      "source": "JPNN.com",
      "summary": "inovasi kredit pintar raih 3 penghargaan di ajang cx asia excellence awards 2026 jpnn com",
      "id": "43bf8bcb83700510",
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
      "eventId": "auto-8243a67f1387055c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-16",
      "title": "Kapolsek Tumijajar Jadi Narasumber MPLS, Edukasi Bahaya Judi Online dan Pinjaman Online di SMAN 3 Tumijajar - Website Resmi Polri",
      "url": "https://news.google.com/rss/articles/CBMijAJBVV95cUxONkFxckk3eUJaYTFMRzZCRTBMdWpUZlo5Wl92dGk5Y2ZWd3g3OTZ6cTlzMGZGRkN0cDYtTXdLM3hwX3ViMUdfTGtNazdocV9lSnZLRGlZRm1sa2RtSWQ3MVRhdHRGSXVZNHVfd0hta21YUU0yaXlMYmZtX3NjX2RrRDdwQXEzQllBbWE3OTVOVWZoM21PbUdjMTRreHFCSmIyUkpLaDdyQ1RXbjhkMHVnNTJmbHdVM2d1Uk5BOE04R3gtTThjRTRqc01VeGZ3WmxUNmx0YmZMcjBLQ2M0dVRKeldsX01iT3FqRFRpcm85NWI1Q1ZBSmJvdnBOVlpYZUNPQXYxbmJ5dkxPa0V1?oc=5",
      "publisherUrl": "https://tribratanews-restulangbawangbarat.lampung.polri.go.id",
      "source": "Website Resmi Polri",
      "summary": "kapolsek tumijajar jadi narasumber mpls edukasi bahaya judi online dan pinjaman online di sman 3 tumijajar website resmi polri",
      "id": "b9a46de2263a37ce",
      "domain": "tribratanews-restulangbawangbarat.lampung.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2a4a4ce3da70ceae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-16",
      "title": "OJK: Tambahan Dana SAL di Himbara Berpotensi Perkuat Pendanaan Industri Pindar - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNb241TXJ4dFhiYXl1Y3B0dlUxYmdHSUdnLWpUSjI1ckk4ckxuVEFjRDRQeldNcFY4cENJSEF1engwSEN3a2FWU09nOG1XY1RPcVVfWWplMFRtY3FCNlBCanJnUm04ajdGNTZUMHlCVWpVRkpPUnQ1WDEzYlhrTWl1MUVrU1ZqS0NmeU9nX3N0MTRhQW1Sa09Kb1NmT2RLOHQyc25xeQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk tambahan dana sal di himbara berpotensi perkuat pendanaan industri pindar infobanknews",
      "id": "7f8db8e0d2e0ae68",
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
      "eventId": "auto-288b923faa558033",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-16",
      "title": "Paylater Makin Populer di Indonesia, Benarkah Membantu atau Justru Menjebak? - kabarprima.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOVFBhRWFiMUxSZk8xQUNCUGl5TkZuRWJ0bjZXTzRIUGdRUGV0WmRkbzFVMDR1T0s0YU9JbmU1emc3YTVCTDBiNU43cVg1b0MxdGZfMU1LWG1leGtpQ0FxeVFQdzNqWV8wdVc4RGtwdk5MeVB4d2N6X3FmSkQxV2NLclNGX21DQjc1TjlBWTNlOTJZWk52dHo3M2RVR3hVLTlKdDB5dVlCLW9tQQ?oc=5",
      "publisherUrl": "https://kabarprima.com",
      "source": "kabarprima.com",
      "summary": "paylater makin populer di indonesia benarkah membantu atau justru menjebak kabarprima com",
      "id": "f12a8fa295f4fda3",
      "domain": "kabarprima.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-443ad9007c066c6c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-16",
      "title": "Porsi Kredit Produktif Pindar Susut Jadi 33,70%, Makin Jauh dari Target OJK - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQVmpEaFl3LXNNUlozamtOdXFwYklveDI1X0o1UF92czdmWklnbmxqVFhtN0ZYZnBHRWhNTmRZR25QNjhpQmtMSExTbzlqR0FFRHg4QkR6ejNnWlFldnpJMTgyN1J3bzRRdVVOVTB5VC1Wa29JaW9VNmhTaFo5aGV0ekZZMW9SeHVySC14SUxmZHp6NUY3SDB4eHp0LTFMSVV3NThBUVpUYmxZQzFXQXBR0gG0AUFVX3lxTE5SbmNSQkNqYnRrSkZ1aFdvdmpzcWdiTFNGTnFnSlFvUzhPcnZVeDRZaWFCX01iZTJDMl82eFdSQWF4R2xhTDM1c2ZiZ0pBdFBlZ0FFVU8tYnRzTEU1UGxmc29JanR4WEVpbWludXJUaC1Wa00zd1oxV1RKampRYlZUczhjblA4U29DVlVIZ0VTT3F6d2k1VDBzMU5fNXhuSk0zekhLeUNUY0c4alRnUHVZRDBOUQ?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "porsi kredit produktif pindar susut jadi 33 70 makin jauh dari target ojk warta ekonomi",
      "id": "4bc81586db7d4217",
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
      "eventId": "auto-9952de5ac74bc4a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-17",
      "title": "4 Cara Agar Nomor HP Anda Tak Ditelepon Pinjol di 2026, Mudah - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPb25ZdG0zNG1HNFpqNVNJekl1MmRJWnJmWkFUaFFQVHdSMUwxNDdqaWpYRXZFdWY0OU9RcDA0S2k2Q0lHMlF4eFF5UGdZdHhBYXg2WkcxTVM3T2EwU2VNbXJMQzVFbnZOdVc2djZUTTdMeDB3T3VQYi1DWGZWUnBraWhXVUE4TzI1Qmx4SUJxdG9lenItbzhFTDUzalNGUWVrTjRWSU1jcHpCMnF1c2xoNjdn?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "4 cara agar nomor hp anda tak ditelepon pinjol di 2026 mudah bloomberg technoz",
      "id": "afe91997186b2f81",
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
      "eventId": "auto-9fe327eb695383d1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-17",
      "title": "Awas Skema Pinjol Tadpole, Bunga Harian Bisa Capai 10% - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPcVpPNXpfWEJkSWNmdmRYVlpDd2lGRXR0T2luU0MweEsxUm9NREZSWlRrT2Z4NGRtbS1ncTA2NnFWQTdUVzJORFNNRl9nbEhocjI2cXZWS0xCUVoyR29LamVlZ1BuMHE1b0c3dl9za3VlLUFMWEoxeGlsQTI1LUtFdnlHXzZpSXV0Q0pZOGhTTW1fYi00QnlXM19tbU9yUDY10gGgAUFVX3lxTE1KZW91T2ItRDN3SEpnRml0ZmpfY2REMUJ1cERyWkNlbWIwSkxFTlB2Q0w2U0plb0R5WkE4cFdPOEl1VEpxeW1QWEIwZUNtSFE0OHdjaGJEZF84VXA3RmpLeWNuSk9reE9NZl9FOVY5RlJ2VlY2OWt4UUxQOWk3bDNVamRTSlJhTTZPZEJwTk5UQW90YUlXUmMzY1c3R0VUVGw?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "awas skema pinjol tadpole bunga harian bisa capai 10 suara com",
      "id": "e13107f10f3a146b",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 65.4,
        "label": "mixed",
        "negativeWeight": 2.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "pindar-tadpole-practice-2026-07",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-17",
      "title": "Bentengi Pelajar dari Judi Online dan Pinjol, Polsek Mergangsan Penyuluhan 60 Siswa SMK BOPKRI 2 - Polda DIY",
      "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxQdzNYcXRNc1A2ZFpIYk0waDdrdmNsbGh6NlhXcmh2V2FEY19VdWFMLURpSVZYZHVwUE90eVhRYldJcUpERElxSlpBYUw1bDNQRjl6eXoxQU9jSTdLLUlFSUFhUzd0YW9XaWZ2czZ0bV9MMlY3U1p4MDk1bk1jTFZDNV9fbjhtVnZVa1V6UjRuX1hlOTdXM2tQa1dnVkFOMXA4NUxid3RhOEZ6dGtReF9SeF8zMFFvN1BKVVowc3hELVZLTjI1Z3N2UU5Dd3dpcEh4MXFWdHpoR0xaRlV6djdfSjUyTGZmLXV0VW95NjgzcGxXSVdQdlJobnFB?oc=5",
      "publisherUrl": "https://jogja.polri.go.id",
      "source": "Polda DIY",
      "summary": "bentengi pelajar dari judi online dan pinjol polsek mergangsan penyuluhan 60 siswa smk bopkri 2 polda diy",
      "id": "8580420ab0668268",
      "domain": "jogja.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3c861616d165d14e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-17",
      "title": "DPRD Jateng: Warga Berhak Tahu jika Datanya Bocor, NIK Curian Berisiko Dipakai Pinjol - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQUTVDR0FMUzhWUWlTS0YzRTNlZmFkakhuUEQ5NzB3QndFSzZUNzVSZmxRY01fcU5SeDg4UDJianFkbnFWUGxTX19ELUE3S3N3VG5iQzgwYXpobW91N25CYXNRR1J1VkFsS083WjhhWGV2R1c4d2R2SDdmVjRJVS1LdDlzNUFURl9hUzBZS2owOXQyWEo1aXhKODlPWnlzamNKZGdoenBqNFZoRVZ1ZGtQdHZxa1lZNDNpcHRIWUZZNmxYUGNqSmhIVEdDUQ?oc=5",
      "publisherUrl": "https://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "dprd jateng warga berhak tahu jika datanya bocor nik curian berisiko dipakai pinjol kompas com",
      "id": "a3896b718af740f5",
      "domain": "regional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c203888848587d7a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-17",
      "title": "Kasad Minta Prajurit TNI AD Jaga Integritas, Hindari Judi Online hingga Pinjol - PontianakPost",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOcjA5TmNGaXE0WnFEdzdoTWlDNGMxQUVTbG1iSkltamIwY3ZXRGQzbGUzZGhBWjNFSmRrc0FWdnp5c3FkSzRsQzBVeWliM2dabXFRUnIyMHdpMG5lZ3lwMnlxa0FtM29WcEZWYlJ0MXJ5WnQ2a2pCLW9fQTl1MHlmTEFMNkpZVE1JUEQ5dDFaYlJldWtWTEJOOE8ydDNpSG9jSGJLTlhubXBOTWRXUklkN3FuanpRV1pvMWZKTjF0Wkl1S3RmUEZuWS1n0gHPAUFVX3lxTFBVYUp5TmF1OXUzRnFBZE1XcUlXR3hBVDRJOHdTTmNMZzhhd2J0MVlidEVFSmV0X19hZTRpRkIyaDlBQ1hLTGpYUW9YUjBUalFtN2doVWdwSHdRTTJPV0dXVDNUSk5xeXhZVERMMmxOS2plOVlBQzZRc2Q1WVpXNGRXajMxT3RPS1NjM1B0dDJDNldRa05WRlEwQlFmVU9XcTRTSlFDb2xzekJiamZLa3QxUHJVenpvRld0NUF2enlSNjU4eC1QSFdDSlIxMVlVaw?oc=5",
      "publisherUrl": "https://pontianakpost.jawapos.com",
      "source": "PontianakPost",
      "summary": "kasad minta prajurit tni ad jaga integritas hindari judi online hingga pinjol pontianakpost",
      "id": "e2ef229143476f1b",
      "domain": "pontianakpost.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-203aa31921407139",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-17",
      "title": "Outstanding Pindar Tembus Rp103,73 Triliun, Ekonom Ingatkan Risiko Gali Lubang Tutup Lubang - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQNGtKcFV1VnpZMXZYOUQtdF9sYU9DSTJzSFQyZ0FQVXd3cktpdkdJaC1UdTllYXNFTWlwa3REUlh0cDlwM0JzWVAyci0yZXZBRFhzc2JNbVdKaXhJM0V4UDRrUElkTXJrMUtuWi13Ykl2cEZBYW5MOEp2RThaTkxoUEdVTDlFVFlLUm9NMFJ0cVJBVEROTmZSSVpLTE9pdWI0NVhrMWdtNDZQWGFNd2Jldi01OWw4bklTcl9QdUpnMjFIRzd3TXfSAcsBQVVfeXFMUHhFc3FONFV0WWVGSjRPNTRhN2xGcURIU2ZZQlg4R1phbDVSZ1dyNzVYNUk3UVNhVDZhMUhjTlJ2T3djZ2FzZTMzUzJhYmxUZi1NWjBNbWxCd0JHNWVXRlBuQlNDX04tdllJVDZvb2dBSjljVHUxZXZKcW05eW9ZYkRqd3ZXVEVhUkNxNFRKOGx1MFFYNnB2VHhNRm1MUDdvYTZla1FKVnVqYVR4Nk9Mb01aU1BPTkNBaThBLUpMTHpVRUM5aUhJNHREREU?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "outstanding pindar tembus rp103 73 triliun ekonom ingatkan risiko gali lubang tutup lubang warta ekonomi",
      "id": "a89695e199166da4",
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
      "eventId": "auto-6f36ee021982cd13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-17",
      "title": "Polri Gandeng UPH dan Komdigi Edukasi Mahasiswa Cegah Judi Online Lewat Program Polri Goes to Campus - DIVISI HUMAS POLRI",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQakFZVzNoQnRQZVdxWDdjRnkzLTRDYlE4RGh6Q0pTbXE3cDFremJXdDNMUzZSYTRHN0ZfMGxSb2p4RF9DbTFyQ0YwZ3NGdFV5Xy1GMHpTVkFFcGJ0WEVYak1GdjlyN0pTbnBUUnYxclZhUXBBZVAwLVFzRXlBREplcW1Fc3NTOEx0WmtQekdwaDU0UzBGbFd2aVRoR0l3Sm5ZUEVkcEFQOGlPWUNBUThYbGcyaHpoeVI2WXRra1FZRjltWkF4RWhfck9HNjlrY1ctSnJFaDd0ZFZvNnlOeEx4VzVOWk4?oc=5",
      "publisherUrl": "https://www.humas.polri.go.id",
      "source": "DIVISI HUMAS POLRI",
      "summary": "polri gandeng uph dan komdigi edukasi mahasiswa cegah judi online lewat program polri goes to campus divisi humas polri",
      "id": "86ed3cb6a09f5048",
      "domain": "humas.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5f9f024fd81a1d4d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-17",
      "title": "Warga Jateng Resah Data Pribadi Bocor: Takut Dipakai Pinjol hingga Kecewa Pemerintah Tak Transparan - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQVldiUjJHdTEyTmdRai01U3N2eGNUQ0FnSTMyVkZjQVB0YmNCMWZyUVhDc2ZrdlhFbk9pOTc4d0czZC16d1c0LWV2NkxrblRacnVTQ1IycjJkWHdNV0tsdnlWOHc4RjBIODVvdlY2UmFnSGtXTWFvTnNyNFpkRm5pLWdOdlpMY0tpSnZRa0pmU1FGbjUydEg1Q3d5WmlGRGRzSDlCODRMN1JVQW92X1hqMVF3WS1MYl9LUmJyWVN6WkxtTFJvMVBCSi1VNFVtT3Bv?oc=5",
      "publisherUrl": "https://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "warga jateng resah data pribadi bocor takut dipakai pinjol hingga kecewa pemerintah tak transparan kompas com",
      "id": "1de80fff664f1ad1",
      "domain": "regional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9f9e9c86bd3e45b0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-17",
      "title": "Waspada, Sepanjang 2026, Satgas PASTI DIY Terima Laporan 373 Pinjol IIegal - Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNeHhlazI2LW9RMUlNT012UGJ5YzdOX2dFZDhvS1VNV1dJb3lpeFZhTGRSS2FWcTExM3lrS0xFYlJOUHF6TFhuTlBaZnQtWkFKWnFBZjlTUWV4S2s2ckI2eUFxeFAxS1VMaDNZNnhvTkJ1V2NWUzhnSmZkMXBWZ2ZZWVpJVERiV1M1TUFwZ2hXaFlRcHFEakFUd0JMMDduQnVEci1uSmRXaG1lbVdVc2FYbS00Zi0?oc=5",
      "publisherUrl": "https://mediaindonesia.com",
      "source": "Media Indonesia",
      "summary": "waspada sepanjang 2026 satgas pasti diy terima laporan 373 pinjol iiegal media indonesia",
      "id": "f282214d7811384e",
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
      "eventId": "auto-750e2e1f6d90d559",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-18",
      "title": "DPR Kecam Debt Collector Rampas Kendaraan Pengemudi Ojol - RM.ID",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOSjhzSmJsNmtibnhsZFU0MmpVSzNhRWVEZkJNenBXTEVBVTljdHpJVWcycjJ4LS1Ka2NpZEpaZ3k5MkVVVWJFUnoyT2lCV3d5N0N6RGxBQzVxUEFTQWdoU2xsUGtQVjRtWkFXUWZyclFNV2xiekYzNzdvV2tUZU1tOXBmQzBhZUZzb0xsWDFhR0ZGSWxPMG5FaVNEUlk0Q00?oc=5",
      "publisherUrl": "https://rm.id",
      "source": "RM.ID",
      "summary": "dpr kecam debt collector rampas kendaraan pengemudi ojol rm id",
      "id": "10ae88510813dfa0",
      "domain": "rm.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bc4e7411d301a6fa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-18",
      "title": "Guru Besar USU Soroti Putusan KPPU soal Bunga Pindar - investor.id",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQN25NN0JYeE9IMFd0V0RJVEg4WGZMbExHaDBaSnlHbHZIdldDQ0xoekxwT0p1T0M4WV9jd2RzdUdPZ0NCa0FSSnNZTkNxVTJYQ3phODVmMEhSeTk0NEswdmNMS0NGbmo2REpXWXc4bkNKaXJzLXhxVFNacklNanNtZ3FKdDRmeG1xN2RJbkFYR2s?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "guru besar usu soroti putusan kppu soal bunga pindar investor id",
      "id": "8c3a60ed3c39adb6",
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
      "eventId": "auto-7a1ede81d68b02fc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-18",
      "title": "Jangan Coba-Coba Judol dan Pinjol Ilegal! Diskominfo Kuningan Beberkan Dampaknya kepada Pelajar - radarcirebon.disway.id - Radar Cirebon",
      "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxOR0QxVkw3RXRuWWtZTE9kYTJocU9UNkV6REVXOG4ySTk0RnlWMS1reUdvbHFNN0pRbW05ZTVOZlM1RWtqX2VkQnhpWXgwZlZoc3c3MkNwYUdKNzNBUnlXM05hVVFXd2RGQ0FYMHZUbl81cnBGN1JreVFsN05hUnFSQXcxaWZmYWNzUlNZd1NtUTdWa09XRUg4OV8zdzN4eVc4cUZHZnZZMGwyTFJuZG5qTjJKYmtnX0ZNNUYzR3VUSWFOc203RnpoZ3g2dTJmTTRSODJCU3NTM3lYOV85SUFF0gHSAUFVX3lxTE5mQ183NGVVYTcwTU9lX3piU2V6VEdCUG5wY2lUMk02cmVhcWFnRG4yQWs4YVdkbm5renFqU29zVW1jc3BHN0N3bVk2dXA1OWtnSGo4X2RIekVHSXBhamh4SEZiQjVNTTlKQ1R4ZGt6cEZoLTJJeWpBdXF6YzFMM2MyYzN2ekxYeTJNZThuM0xCRnJ6aWdXc3lrZ1pIcURVNThKMjVuYTduVW5RejUxaXYzaF81Y1dfcTVyZ1MyTV9hTURHVFZsRGRlakRXSjRQZHFsdw?oc=5",
      "publisherUrl": "https://radarcirebon.disway.id",
      "source": "Radar Cirebon",
      "summary": "jangan coba coba judol dan pinjol ilegal diskominfo kuningan beberkan dampaknya kepada pelajar radarcirebon disway id radar cirebon",
      "id": "f1290a0d4a4bfe20",
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
      "eventId": "auto-b3eb2d3caa5d5261",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-18",
      "title": "Kecam Teror Pinjol, Yasonna Imbau Warga Adukan Penyimpangan Cara Menagih Utang - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOQkZ0WWNDaDZtaHBEUUdneW1vTThwSFVEeTNGQ1Blblpfc25xdHJSamFDRGhSNk9LZThNOFJJYkFuaG5IZmxRY2VnOXctalgzVGk5V0lhT3hIY3U5d3V2TENMd2ZDVFh4SzE2T3p6djhrM055TmMyZXAtY3MtLWRjampsSUvSAYcBQVVfeXFMTldXMXp0QmpiUUVadW5ZRFZMX0hMWkU4UWcyTmV6UkZxdXZkbFlJU2xjNkhja3hhaDdqb20zVVdpTHQ2ZFNLQUw5NjhTUzVCOTVmSFFDUGg3MlpKaTAtdUJ5T1ZkWXYzb0tsR29fSzM0NEJ4VzJabVRTWTBCLURKYTZCSVlPUzJn?oc=5",
      "publisherUrl": "https://www.jpnn.com",
      "source": "JPNN.com",
      "summary": "kecam teror pinjol yasonna imbau warga adukan penyimpangan cara menagih utang jpnn com",
      "id": "b9cc7529d2550a3c",
      "domain": "jpnn.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 74.5,
        "label": "negative",
        "negativeWeight": 3.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-18",
      "title": "OJK Catat 18 Pindar Punya Kredit Macet (TWP90) di Atas 5 Persen - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNbGgxWWY2bU5HdWZ6QTRjZDdGLVdWMnhIQUxMMkFpVkdGYnJrNldpTjNia0JzZXg3dzJsZ2VwR2tCRDcwMl9ycGJfb3RnMmlmRVZkamI3al8tN3A0bVN4bVUzVEV3MS1xUlZnM1VMUU9Bc1ljU0piMzB6b3pISGx5N3VhXzdvMm1kaFV5dEhOZw?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk catat 18 pindar punya kredit macet twp90 di atas 5 persen infobanknews",
      "id": "f5f60cf7174796f5",
      "domain": "infobanknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.1,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d0171f0e8be8980",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-18",
      "title": "OJK Terima 133 Laporan Aktivitas Keuangan Ilegal di Pasuruan, Pinjol dan Investasi Ilegal Mendominasi - Radar Bromo",
      "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxQbnZwUzdVRFE1aHVINy1SRlF4czJvVFpOQ3BnYWxkWFFueGZKNzM1SXBkY2Zxd1NfcGEyWGw0OXhZeHZqcGxDWkdXS2JSLW1KRWNKUmtneEIwOEhHZ1JuSm9JYkNUQlJTQWFfUlV1ZEtmNW01dHdubDJxV3ZTdm5FRlVyeWF2c1NEU1RrdmdNcE5GZzVaa0JubHRYSl9xa3dDTjdOdTVyX0U3SDFMcFlpMXJGTDJHQ3FMbk05a1dZWm1jbnVuZEFDamdhRUIxYld6SDIzNG9Bb3ZzWlVudnpGOVRPU1ViXzRuLVoyZExn0gHzAUFVX3lxTE1GUHJVaEo1aFJfN1UzSHJCTnI0dF9TZWhtSUZhSE4tbVFscGxOX19RbC0wNUxhN0Z2bEFaRGVHZ3hEUGNiS0F0TjJ5V2oxckhkUXNBem96Y2c4enc2c0FjWkcxcl8wV0FfUGJMNV8wMXNVeENsZV9yNkJKcHBLQ2tFVkpkaHlyN1RxNGpHRFE1eXpGWVE2UFlicHB1aU5kOUk2ZzV4M25Lb0VsN2VfR0FibGx0TmdWVE8wRHpLdURQMVlzNmp2ZDlqZEdhYXZ2MmJYa1dZcHBvWERjc0J1RTBmNFVvaFlVX01nRGVMUng2OUJ3UQ?oc=5",
      "publisherUrl": "https://radarbromo.jawapos.com",
      "source": "Radar Bromo",
      "summary": "ojk terima 133 laporan aktivitas keuangan ilegal di pasuruan pinjol dan investasi ilegal mendominasi radar bromo",
      "id": "c3fd4778e21e824a",
      "domain": "radarbromo.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7a09449fc3d08215",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-19",
      "title": "7 Rekomendasi Pinjol Terdaftar OJK dan Cepat Cair, Cocok Bagi Anda yang Membutuhkan Dana Darurat - jogja.disway.id - Disway Jogja",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNb2U1UUczOUtZVHYwUjE2UTNEaUlEZnVrQ2txZktqX0dwbGd2YkJFaWZhTDJ1UHNaVHVKZG1BTEVnUHlzajBtSkh5QjdtbTdXcjRmeFVJY1l1MWtOSTBqZzR5XzlQblpWYk0yZUtHRHdSUURPOGdsRU5TWUY0VUJ3SkUxRWF1aWVFTEJCUkVQSElveTFNcVV2WlVrSVdwdGJkTjhRR2pnR2lKLXdMSkVPNkZhaDUwNHhPcGRaM2pQemhaM3NWZzc4M3h5THp4Y1g0VXJSRk5B0gHKAUFVX3lxTE8tc3FHajNaYzQwV1FnbklwcGRZU2xUTm9hX0pWSGxoU0k4X0xuVXlXQ0hoX2RhUFhCMU5qUXlxSWJKakp3clVNOVpVOVF5MWFFVkpUQXJ3SE9EcGMwY3ZxU2lGYVRzSXFlQ2RpamNJTy04SG51U3J1dXhBZkVwU3phVDA4dTJaNmN6NkJxd21Fdnk1c21leFdzdXpnNFJQVDZiODA5SDFWdGtFTHZ5bEJ5VXY2X0d5OXpNeldEeWRMUG85STFMNi01WXc?oc=5",
      "publisherUrl": "https://jogja.disway.id",
      "source": "Disway Jogja",
      "summary": "7 rekomendasi pinjol terdaftar ojk dan cepat cair cocok bagi anda yang membutuhkan dana darurat jogja disway id disway jogja",
      "id": "7db39a5e3adf2b88",
      "domain": "jogja.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f912e449a916087b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-19",
      "title": "OJK: 8 Pindar Belum Kantongi Ekuitas Rp12,5 Miliar, 18 Masih Punya TWP90 Tinggi - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQc2NzMlFRSUVOcWlBMi1xeEN2Q0d5RVctRXZYOFVDNDJMOEhVSEpFa0xKd1UtNEFLSTVXV1JuSWVpeXU3OHFXSW5QRFdNaWpxM19Qd2pKdzI5eWl0Qm9fdDc1TldkZFVRRmdaYi10T3lUeGw4SnVJS1o1Vl9wbVRSNk5zeDVEd0RMNUotQ0M4d2VJNUFlMjFmd1dZS3JETFhfWU5nYTdZVDZOdk0yWlJWMk1kY2UwT25OZGlBX1NWd1NXeVh2ZHRMYldPQQ?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "ojk 8 pindar belum kantongi ekuitas rp12 5 miliar 18 masih punya twp90 tinggi bisnis com",
      "id": "b89f929d8f1ff867",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 55.6,
        "label": "mixed",
        "negativeWeight": 0.8,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4304528b393d1798",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-19",
      "title": "Tak Hanya Pinjol, OJK Minta Warga Kepulauan Seribu Waspadai Modus Judol yang Makin Beragam - Banten Raya",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQQUlpTWV5cjhSWENQX2JqdzM4dXI1NzdvS1prVUQ4SjBWZEhpeS0tSDRSYXJFOVU0MEJQUTlmRnNubjZ3dld3c2lYVV93VzRYOXhVZ3pCX0FDR1lUTFdoTDR5U0JoTG5lWnE1VzA2SExmV3NaVWxMeV9HTFFkOUFQeGJhdmNvdHlGYlFJTDdHaW5ZaUR1ektNbDNoajJzdXRYanpsZWJUYTBzNlV4TTYzdkFTV0FLZG1RSnZVWVJmWFNObzltVHZNT3VXb2VUOUU?oc=5",
      "publisherUrl": "https://www.bantenraya.com",
      "source": "Banten Raya",
      "summary": "tak hanya pinjol ojk minta warga kepulauan seribu waspadai modus judol yang makin beragam banten raya",
      "id": "be9872291b1cae66",
      "domain": "bantenraya.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c5e902ba126393e3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "AFPI Ungkap Pindar Dorong Ekspansi Bisnis UMKM, Pendanaan Tembus Rp34,95 Triliun - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQWnkxSlBxZVlfMDZ3MVhoaXFOcEtwSUNiOVljdDVZWWNjaFY5akxWQXJTM0lpOEhQeDJqQ2s2anIwVVlIMVNjQWM1bGY1alpDZmFSX3Vkem82NUVYd2RTYUlFOXlOM2FmWm1mWlIwMmJ1ckZIa05lRXhzRS05VC0xX2FidGlVS1U4OElRckFxa2lKbGZPM0JKRGJJQWpFbkZEN01VT3BTc21tdl9pYU9SU2tCZGxoT0XSAbwBQVVfeXFMTzdfVWdObWxLSTF2bWRUZFpNNG04N0dQSGVNeWZzRm81TV9VX2E2SmRlcTZmUmdzSVBJYUtrNmtfWVYzRnlGTkdqSEVwWjRVRHhVZ0ppdU56WXJ1aHpKeVRQcnB3Y3gwTU5aNHU3aTJMbHM3MmpSclM3cGduVGhLV1hFVGpFNnZjY09CYW1tWFgwOE0tM0d1eVRSejc4RVdqRkxPRHp3NE5JeDltVms3Q2ZGMUhHY3l5SnJnX2I?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "afpi ungkap pindar dorong ekspansi bisnis umkm pendanaan tembus rp34 95 triliun warta ekonomi",
      "id": "580c3e98de91255e",
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
      "eventId": "auto-b326d597a04f99a1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "Bentengi Generasi Muda dari Jeratan Judi Online dan Pinjol Ilegal, Polsek Prambanan Beri Penyuluhan di Gayamharjo - polrestasleman.com",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5nMWVOSWZFaGlKMGp2dko5bWw1RnVQdkw1N203WE5mRDJQNUhXLW82N2hlY1ktRGpwQ3lIdnROa1N0bWRRT3BvV3kzNWtxa3pO?oc=5",
      "publisherUrl": "https://polrestasleman.com",
      "source": "polrestasleman.com",
      "summary": "bentengi generasi muda dari jeratan judi online dan pinjol ilegal polsek prambanan beri penyuluhan di gayamharjo polrestasleman com",
      "id": "1bcd777b9588a6db",
      "domain": "polrestasleman.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2735719a7b165d3c",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-20",
      "title": "Cegah Remaja Terjerumus Pinjol dan Judol, Mahasiswa KKN Unhas Gelar Sosialisasi - Penerbitan Kampus Identitas Unhas",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNNkFPMHlraEs3ZExCLTZOclFDc1VNZE1SV0FzQ3dkeTNfWklUSXg1ZHZ5MjlvQmhua0w1ZjB4d0JleXpTZ0xEV1NqdE1WQlljWmgyaGJFMnFSWEczcUZIeFFXcnhBNzluU3NXOUliaDI5UUdxNmZYRF9XYXFFMUZrVm5WSnB4T3B0OVQzcnI4am1QcGtlYTl1STl4RnNOMEtiTWM0b3hBN1lsaHJETkE?oc=5",
      "publisherUrl": "https://www.identitasunhas.com",
      "source": "Penerbitan Kampus Identitas Unhas",
      "summary": "cegah remaja terjerumus pinjol dan judol mahasiswa kkn unhas gelar sosialisasi penerbitan kampus identitas unhas",
      "id": "8d9e07db5bcb05c3",
      "domain": "identitasunhas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e6b5ca5146768c87",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "Gak Usah Kuatir Dengan Pembiayaan Vinfast, Ada Pilihan Digital - GridOto.com",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPVVhOWTZ5VVpTMTdhZ2VySDJGUk1FV2hTc1VKRVFLelkyOGlhVGtMM2tLMkdmYU0tejJnOWtyUXBLRFNuM0cwMHEzeWdUUHg0OFNmOGJfcjdJa0paRi1Qd1pYWDMxRV83MUpCSjgtMlp5bDJhNEROd1BjbUxESTZQWi0wSVFtejNLaHBMZzM1MjFHOWo2Y251WlZaZzlGNkFVWXfSAaABQVVfeXFMTlNWSXU4eDE0eXNDWDUycmdfMjJNazJ3dEZhRWtjZTFsU092OTI2VUVmS0xGMDVxeFVZOXY3M1BPZk1JdldFRGJoOUNYa0VxM2EzcHRjbjB1OEJMUWV1cGl6MlVpVTNFNmFuSXB0SmdvVU9CaTE5aDAyMTdqWDNfTW5PWTVNc3NfcWFBRFU1ODhuZksxRHJOZjZzZWNNR2VhWA?oc=5",
      "publisherUrl": "https://www.gridoto.com",
      "source": "GridOto.com",
      "summary": "gak usah kuatir dengan pembiayaan vinfast ada pilihan digital gridoto com",
      "id": "6e3f165556420a7d",
      "domain": "gridoto.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-121e497611373f4d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "Kejari Serahkan Rp14,2 Miliar ke Negara, Uang Berasal dari Kasus Pinjol - tangerangekspres.disway.id - Disway",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOUk9TTXpZNUNCQml5Qk9YX2gzZkZraDh6TUdwV3g0QVFaX21vZHNSdDRqQ19jTXdIcWozdkNhZ3BFNnlnRTlDWmVLNF9ncHBhRlN1Z0h5aEl6LUpLMzI3QjF4djl4T1pDVVI1SXk3TUhOb2tUbVN0T0dPbDBWdWdVUHhVMnp4Z0pEX2h3YTlKTVQ5SnVYTnpWVmtTbWFpLXBHemlGekVoMXpsd3cyanlRUExXaTlMNDJvNHZjUEV2RjhXdE10TjRLN9IBtAFBVV95cUxPal9jTVZNbDFER1dfaU1XMzRUYTluakkyaklXd1R4Y3JwbmY5b184cEtpMzMtUk5DUWtLRzVWNzdJemJmRmhmSUEtQzlodW9XSUZyaFd5RXBnbm5sN3VfRHpqbXV1OHAyRnBZVFdYeE1EUU5mYXVtMUhLYkJ1LXdyOGhnRUNnaWNXRDJWR3oyS1kyNU9PU1N3T1ZnNk1mR3pOc3E1MlVublFSOVJpeWFFT1RLWVc?oc=5",
      "publisherUrl": "https://tangerangekspres.disway.id",
      "source": "Disway",
      "summary": "kejari serahkan rp14 2 miliar ke negara uang berasal dari kasus pinjol tangerangekspres disway id disway",
      "id": "b4ed784973881226",
      "domain": "tangerangekspres.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ca90b659f3b63dd8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "Kejari Tangsel Rampas Uang Rp14 Miliar Lebih dari Pinjol Ilegal - Kabar6.com",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNNXVLbkNWcE5GRFl2bmVlc1VHS3BWQlBvTzVFU0ZtcU14c2tKdzZoOUdmN0ktNXJSUWcxWXVpRzJWaV9scU5xRzVBMlB5WGdvVzdELTlEODQxU0RCQXdFeEMzRjFmLWFPNFhnbzJoM3E2dWFaVTRfbzhtTDZURy1lUmJ4OWo5TUwzNEhv?oc=5",
      "publisherUrl": "https://kabar6.com",
      "source": "Kabar6.com",
      "summary": "kejari tangsel rampas uang rp14 miliar lebih dari pinjol ilegal kabar6 com",
      "id": "c6bfef3713329dab",
      "domain": "kabar6.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-99284cd55244bc75",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-20",
      "title": "Kejari Tangsel Setor Rp14,2 Miliar Hasil Sitaan Kasus Pinjol Ilegal ke Kas Negara - republika.co.id",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQc04wZy1wNUd4Um84ZVo3MFZUWW10bk1CeVJjUmpKY3hYUTlTbXduQTljOVlzVlRjVnd0WUlMeUlremc1cGM1ekstZkI3dFJkWVIyRHZFczVoR0ZxMlFNdmliOTRfXzJUU21kclBVeUxhOGhCVGYxVS0xR1NIY1pzQ2djSzJ6TDExMC1JMmVfeGpkREE0RW4wS1RvSGk1NXNRNm1hWTMxSDlZNU5LeDQtbmdnTzVybG1KQktnTjJLdTBiaDBhN3Qyb0JB?oc=5",
      "publisherUrl": "https://news.republika.co.id",
      "source": "republika.co.id",
      "summary": "kejari tangsel setor rp14 2 miliar hasil sitaan kasus pinjol ilegal ke kas negara republika co id",
      "id": "90e26dd81dba90aa",
      "domain": "news.republika.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-776f89964bf6c41d",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-20",
      "title": "Kejari Tangsel Setor Uang Rampasan Rp 14,2 Miliar Kasus Pinjol ke Kas Negara - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPWUx5N1F0ZzB5dTdRaUdQUUNQVDFnRzBnYk50OUVBZVFwZmgtNXo1akdKdnotT1RpTWFVM2x2LThGYUNycGxERVRwbm5uZXQtbFpfa25menNzOEdTcS1laFpUaEExQlNWakdlQV9BeWFIV05MQVBoVHBQZXVqY3pDWjRJbGgzdVFvX0ZBa2g3Q3R4Y094dW5UbFh3TkRxU2JoaFR1Sk9lRWg0aFdHR01HZjdTbDFpVm1KbW55T3loS1RuQQ?oc=5",
      "publisherUrl": "https://megapolitan.kompas.com",
      "source": "Kompas.com",
      "summary": "kejari tangsel setor uang rampasan rp 14 2 miliar kasus pinjol ke kas negara kompas com",
      "id": "4e4e8ca4e38f50c8",
      "domain": "megapolitan.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c08dd6b16507c66c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "Kejari Tangsel: Tiga Bos Pinjol Ilegal Dihukum 1,8 Tahun Penjara - Kabar6.com",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNQVYxRk5LUnVCZHZvemhJUjcyRmtZbjZHY2FwZEYwZTAtVGVld1NXRUJXTzZHcnFnWDV5TlF6LVhfeEhyS1dPQmFjc1p6YXZXZjhLVXpPRzVEYWM0V29ZNFZ2RTk1LTB4SXVZWE5FcUhJN1lxcWZieVZpYW1GbDhYaU1MZlhqVDh3R1E?oc=5",
      "publisherUrl": "https://kabar6.com",
      "source": "Kabar6.com",
      "summary": "kejari tangsel tiga bos pinjol ilegal dihukum 1 8 tahun penjara kabar6 com",
      "id": "4a5bf755265b3b13",
      "domain": "kabar6.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a446552865173015",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-20",
      "title": "Kepemilikan Asing di PVML Dibatasi 85 Persen, OJK Ungkap Tujuannya - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPd0JqbHRTOXFzY0VjOFZGY0RVSnc2SGRDcG5tbml6c0lUT0FraVRkSmNWc29ETHNBTjd2VHRHMVZCSS1oOGE4UzFNako5OUc2SWRjT3lrVm5OaFlqdkwtanBJT2hyVFZFV3F1OXU1X21jX19ZOUhNMjRpREdaSWtidlpCaE0yTEkzd3NsY3k4SGJDRnI0?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "kepemilikan asing di pvml dibatasi 85 persen ojk ungkap tujuannya infobanknews",
      "id": "d291666fa8af1486",
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
      "eventId": "auto-194b241268c6e8c4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "Laba Industri Pindar Naik 37,43% per Mei 2026, Kualitas Pembiayaan Masih Jadi Catatan - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5YSUlONktUMlBOUmhsdVhZalpkVkk5NTUtek02X1RoMllMTUFDcVhFS3o1bE9wRWtWZlZYa2o0SUlEaUtGUUJncFRKLVZwaktOUDFwTlJxS1hLM1VfR0xnS3RpQ0hwUm8?oc=5",
      "publisherUrl": "https://www.tradingview.com",
      "source": "TradingView",
      "summary": "laba industri pindar naik 37 43 per mei 2026 kualitas pembiayaan masih jadi catatan tradingview",
      "id": "eebf9002ecd20e04",
      "domain": "tradingview.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-56bcd1f0d3f0d69b",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-20",
      "title": "Laba Industri Pindar Naik 37,43% per Mei 2026, Kualitas Pembiayaan Masih Jadi Catatan - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPcnJlaEVpMnE1bGIyWjNjbE9DcGNZc0xyQ1hCNGh4SE5NdnNwWXFHUEpZWW5GaGRlU0ttcTNGMFJrTURDQWREemRubEFtSnh3WFlQNVZRZzREbkNyUTFxRnNLelZHaDNiZGdsZXQtV1FGakxDLWVVbWp4X25YY21YSDgwT2JPNDFfemtDZmZvaVRYZm5BbTMwc0FuMG9jTVlYZUlGbV9BdndWd3hObEZ1SEtjTDVKbnFX0gGyAUFVX3lxTE50TnMyOFZtMzZPSG55aG5LSjBOZk1nY1c4RU1IVURlalhhQ2J3UDIyNzZSYkRYWm50Ymk2OVlaTV9qZTJFSWplWmYwbjZ6bVptT0RMSmdIY3J1VkJsSW52bVh1WHBjU2JvNzZlWWRmS0dfd1Q0YnUxZHd2UkJVRXFNRzBmU1JVUENwOWFtN3BDN0RTZm4yZ1pVbzUwUmlDcXZaUm9hODItUVFxa29Ecjc4alE?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "laba industri pindar naik 37 43 per mei 2026 kualitas pembiayaan masih jadi catatan kontan co id",
      "id": "bb1c4194d8c0df15",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 38.8,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.6,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-56bcd1f0d3f0d69b",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-20",
      "title": "Lindungi Generasi Muda, Polsek Prambanan Sosialisasikan Bahaya Judol dan Pinjol di Gayamharjo - Polda DIY",
      "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxPWmc2NGhpX1o0NHlGUlkzcDRNeldzRmJ4aVZ4dUZEeW03bUxYWVN4MFFLY1NuVGNSVDJoZG9qNHZXOVFWTDlxTjFrZVNOMWVOajkydzNZSEJ0UTJVZXFudTd1ZS05V1UzNFNmelBDc0tYbzkyT1k5MjVhZDdSVzh1TTZ0dkk5cndLOThOMjFtN09Jc2dfdTJ2MURKakMxVkppSWpKYlY3MTdqWkFKNmh0cE51dXNLMmFOc2lvd2J0TEVOWTR2OVZYQ08zdU9IWGphT2I3QVFEMTRXeU9neHN4WHU0eFlnUUItZXZ5eHRZNA?oc=5",
      "publisherUrl": "https://jogja.polri.go.id",
      "source": "Polda DIY",
      "summary": "lindungi generasi muda polsek prambanan sosialisasikan bahaya judol dan pinjol di gayamharjo polda diy",
      "id": "746bb02cf681af20",
      "domain": "jogja.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e09602411d0f13da",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "OJK Minta Akseleran Atasi Gagal Bayar dengan Optimalkan Recovery Aset - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQSk5wbzJvakcyYnVZZDE0R0FDajF2NWtUX1Y2MGZueTc4VEhoNU5IbHB3Y1dsZ2pVWktHX0x4ZjJrVHJXRkhnRzNTWmZUSGxQWFJocTV4aWlmUnNDLUx2V3hIT2JacEdRQ1RrWHNmb1Z3aDltWlVYMXFrZDFZMUJoRm9CRmQ2WlI0UW80NFZSOHRCTDRoSjE1bld2ZjNxaFF6T21nRE1NS0xmanVwNmJGVXV0VW50RktYU1Q5M29FcFhDQQ?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "ojk minta akseleran atasi gagal bayar dengan optimalkan recovery aset bisnis com",
      "id": "73cb389fb3830ecb",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.7,
        "label": "mixed",
        "negativeWeight": 2.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-df3f0d272d5e0c47",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-20",
      "title": "OJK Pastikan Kenaikan Suku Bunga Belum Ganggu Pendanaan Pindar - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQVDE4aTZmUEppU01IV2txMDdBYk9RWHlfYmlmTnVFTENwNG1TamdxaVpFWVkyTVZfbWV1cWFRQmRzSVluUUljVG95Y3NNZS1MajlZbng2d18yNy13MXBvbFh1X1JyZzFpWTZZdDJTZjRxSm1jRTZLQ3E5Tk5SWFhNRlBMS3l1NUZCY3dXZndTdHAwT2sxQm9WU0ttNTR5eGR6MUHSAacBQVVfeXFMUEtIRmtEWG5kc2ZLbENUblBZc0Z2M3VwU3NCWHNLRXRHT0JZbmFQckJTWmw5STVrTUlseENIR0VIRjZVMDVra3FfVWZWanFVbmV1TURERlNwVWFQS3hkNzNBQkJ2UjlIZnFwMFVrM3h4WGgtM2tFVmpieWN3Z1UwN29GMURTYkppTEdkSHlheFJQYVViZS1zYmp1NnRfcGUydDNGNXVOWU0?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "ojk pastikan kenaikan suku bunga belum ganggu pendanaan pindar warta ekonomi",
      "id": "f4db959a77290b05",
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
      "eventId": "auto-c7874c412adf7000",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-20",
      "title": "Sidang Pindar Berlanjut, Dasar Dugaan Kartel Bunga Dipertanyakan - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQN1ZZd0lGVHdDOUppOVVNVng1OURkUThENGluTmlOcmp2dF9mSlVQcGM0bzBRMGF2U2NPMjFPdmpmd0pzQlBkZms5VGhPdnB6SklMb0dsNkVnLUlPa1dPMTdXNlB5dDFFNTN5bnpiU2xhWXA5Wjh2Sm9GZUVseGhkSUZTcEZFYVhFaVA0U3ROb3RaUnRPeEw0YXZhU3gzYXBUVGczN2s3bE91T0tKS1JUa2VTZHk?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "sidang pindar berlanjut dasar dugaan kartel bunga dipertanyakan kompas com",
      "id": "207e9b077d3dfdc3",
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
      "eventId": "auto-bfe9ea45ca0ed1ae",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Ancaman Doom Spending dan Jerat Pinjol Intai Gen Z, Anggota DPRD Jatim Dorong Literasi Keuangan dan Pemberdayaan UMKM - Sonora.id",
      "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxOUmoxd09vakJPQ0RnY1REUXg4Z0hrMEQ0MGJJLUNNV1ZLZGtsd0d4NUc5SHlwXzlpZk9od1NMNnIzUENvV0JRMXhtdEpmNXg2VmVXVlU5X0V0eTJLbGxrMlVORlVyRDdWM2xRZHd0c1lPNTlaT1g5eUd1ZVV4bnZycWZWNV9Dai1Oc1hBQWJjUGRxQk9iX0diNDNsNnJMSE1jajhoNzlYNWg5eGVoekVoNWhWZGpSeXplUTh4Q28zN2taMFdWZTFtY0V1TkFpbldzbG8xaUNxdnNJMlhxY2xscWNrNDNsSFFQ?oc=5",
      "publisherUrl": "https://www.sonora.id",
      "source": "Sonora.id",
      "summary": "ancaman doom spending dan jerat pinjol intai gen z anggota dprd jatim dorong literasi keuangan dan pemberdayaan umkm sonora id",
      "id": "0264c18493fa6bba",
      "domain": "sonora.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.3,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac256704aa19144d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Atasi Judi Online, Pemkot Bandung Perkuat Pendampingan Keluarga - Jabarprov",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOUnhoS2h3Um1mNGIwbllkaVM5RmtjZmdtd3lsWVdRV21fVEs1QnJtZ3ZZdzFTN283NjJhT1VOS3VtMV9wUDBMcFVUZE5kemtBX2g4V2FZSm5UWGpfVW5nMHNoU0E2Z2g1ZmVGZ0ZGQjB0WFhKLUstQm1SaG1FTXpCVFc2dkNPSDFwWHRKb05kUXZELTRJM3RaOTlRWWhOM3JT?oc=5",
      "publisherUrl": "https://jabarprov.go.id",
      "source": "Jabarprov",
      "summary": "atasi judi online pemkot bandung perkuat pendampingan keluarga jabarprov",
      "id": "4a38d60a8fdaac14",
      "domain": "jabarprov.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-59aac0a240aa0f99",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Bojongloa Kaler Kota Bandung Tertinggi di Indonesia Kasus Judol – Pinjol, Salah Siapa? - pelita jabar",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOTWtIS0VFUl9id2VVcGc4S2lLcXVnRmp3bkgwZHI5Xy1Dd242SlZKSElRbVd5OHRIbXdqdmRiWFNiRkZLZUJyV0JKSzg0MF9zQkpCSVpTTmxXemNuYm5WLTIwc0FOTVY4amVvdXlDOXZXQUw1el9INV9PZTRVN04xc2R5ZHk4QnNxd1dMdkd2U0N3M1ZSbC1pZm45N3dnaUNkUXRiT0J0OTdlenROZ0JoS1JraWMwb3RyQ2c?oc=5",
      "publisherUrl": "https://pelitajabar.com",
      "source": "pelita jabar",
      "summary": "bojongloa kaler kota bandung tertinggi di indonesia kasus judol pinjol salah siapa pelita jabar",
      "id": "fb9a651511c5658d",
      "domain": "pelitajabar.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6361d3708681e969",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Cakra Khan Hantam Rentenir Online AdaKami soal Kontak Darurat: ‘Anda Salah Pilih Lawan’ - Koma.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOdVU2ZnBUNmZWNkdYS0lNNFhKWS14ay1YYndDRV9fdHFXYmZGUXhfU21BTWtyVUV4bTlYeEJpME1rUFRUejdPckVJZVoxY1hNODV4M1JHMW0tems3a2FORFJWOHJUeVZLWnRUZnotVG1oTjAtb1NZTUtDWl8wejlpbEFxQVB0aW5PcF9oTFhkQ3FOREZlaWs0NlNHQUR6d09HRjFnN3NQck5RU3FvS3ltbl9R?oc=5",
      "publisherUrl": "https://koma.id",
      "source": "Koma.id",
      "summary": "cakra khan hantam rentenir online adakami soal kontak darurat anda salah pilih lawan koma id",
      "id": "05f63e359ba91474",
      "domain": "koma.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a9b040c93115febe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Daftar Pinjol Resmi OJK Terbaru Juli 2026, Cek Sebelum Meminjam - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQMkdVYk9YNGtZYUljV0I2cEVwX0NuNy1NRWZzNDc4WndjTVpBVng0YjYwc3hUSHBhWE5RZkE4dnhDQU9VWnk5U19mVDZXb1J2bmxocHJQTENCd294SkVHUkRRdXpNYjZBU2ZOdHBNLXRlUlNSYmtLbEUtLUJudFVvVDU0R0pRb1VwX29IMDI3blJoTjc5ZnFjb0stLU9lRlgwb0ppbTJFZw?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "daftar pinjol resmi ojk terbaru juli 2026 cek sebelum meminjam metrotvnews com",
      "id": "6c773e224b941ae5",
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
      "eventId": "auto-664a1ddce07641fe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Diduga Lecehkan Nasabah Saat Menagih Utang, Oknum Debt Collector Kredivo Dilaporkan ke Polisi - ntvnews.id",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNd3JSOVNXMVU0ZmtPaUtuQjVONi02N0hacGQ3U3MwTlJqemhpTG52WEdRWW1PanAtSXlVeUQ5bFQtcHhaai10WEhHZkVraFNlWjdpMWhQdW5zZGx5TTZ3TjF0bERGa3hBcUxaQmt6S0U3bUN5Q3hJYlZEamd0aWRPUGdVSzl1VzFQZ1RaQ3M2ZWFNMkdtaU95Nkwzbks2UjVxYVk1ZGRnVWNNNnlhendLOW9JbHQ1UDFwOXZmYjJFaHA3NWxaQ0o3eg?oc=5",
      "publisherUrl": "https://www.ntvnews.id",
      "source": "ntvnews.id",
      "summary": "diduga lecehkan nasabah saat menagih utang oknum debt collector kredivo dilaporkan ke polisi ntvnews id",
      "id": "411539cfb8ade588",
      "domain": "ntvnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5bd594ad28e2ea10",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Easycash Terapkan Sejumlah Upaya Ini untuk Jaga Tingkat TWP90 Tetap Terkendali - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA1algwWExXYWxLc3RpMWRsTDI0ZGZsbVZoWWQxamlqUTEyS28zLXlMSUR3UEs2NjNOcTFmc3NaRnhWT3kwaVRjLUxRbjB4RklPUkVheU9LTlpYaVY1NzZUMF9IWTVoSlE?oc=5",
      "publisherUrl": "https://www.tradingview.com",
      "source": "TradingView",
      "summary": "easycash terapkan sejumlah upaya ini untuk jaga tingkat twp90 tetap terkendali tradingview",
      "id": "c37ddf70d53b9a16",
      "domain": "tradingview.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 55.6,
        "label": "mixed",
        "negativeWeight": 0.8,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e9c4846d2df4837b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-21",
      "title": "Easycash Terapkan Sejumlah Upaya Ini untuk Jaga Tingkat TWP90 Tetap Terkendali - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNT3dWWjdaZGlFYWxKeXE4eTdDNFBFQXZRYmFJWkxnaDJEZDlERUJHOUREYVRwUFBTVGcxc3lzLXB1UzVTZ0FGSVZtRmtYMWFoZWE0OFdUU25CaVZtcjQ0OFJsOTZLV1QwaFkwMlhwcDROZFlzeGZUQ2gwdG00T1VBM1R0UGF5dHBzcGVTcV9SMW85VVRRTk9qS0EwZGVGRFMtZjBTQ1E5eVhPNXJacXEyNDVjb9IBrAFBVV95cUxOVTlmUWdXSkVtWF9kUGhpRHI5bTlDd2RRM3BvX2J1SFpHS0JzWUJweURNeXZVOXdDVmNvZWpnNnZ4ZnZFYVF3WDBlV2o0T0dQXzE2d3o2enJjdEIwUkU0RUo2aVExY3ZadVphYjlJZU5QLWhwVi1ScTZUa29WSU9xSk1QRWlIaTJHSUpCcmd1N0M4b0ZSRkNlUUY0NmtoRDhaYXN1b096QzhFMHRs?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "easycash terapkan sejumlah upaya ini untuk jaga tingkat twp90 tetap terkendali kontan co id",
      "id": "4b021365c31df729",
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
      "eventId": "auto-e9c4846d2df4837b",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-21",
      "title": "Foto : Pinjol Resmi OJK Terbaru Juli 2026, Cek Daftarnya agar Tak Terjebak Pinjol Ilegal - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPaVRCTHNwZnFwVFBPQUo4YkphY3hNMXkxenlwbFJaLTYtcEdKT3M0VDMybWZvak1UbkdjZkl6R0s1Ym1zVzk2cUQzZmVHdTI4dXdlbF9tcERwY01GY19PdGw1WmJLZUdzREdpNU5CUFVDank0S050N3Y2WFlKUDZ0enRSYXB4NEJDOE1uT25Nb2g3bHdpLS1zLWhPYnhUbjZUUTNleG1VWjJoTmNRQlkyelJhN0RkREVpcDlkOGc3SlNJR1U?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto pinjol resmi ojk terbaru juli 2026 cek daftarnya agar tak terjebak pinjol ilegal kompas com",
      "id": "2766136f4f092e43",
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
      "eventId": "auto-00a3364c6fc7591f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-21",
      "title": "Foto : Tumpukan Uang Rp 14,2 Miliar dari Kasus Pinjol Ilegal Disetor ke Kas Negara - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNLWxNTndXeTZjaHdmQ2hIWk41ekNnTmtXYzJwZldvS3A4MUR5QUFsemJETHlmNnBBVU05RXl4UVNNOUlOWkdwVVUwQUpQZnR4VjNVS3dJMExDbkxNdUJZSG93N3dLOG9xTENwMmdDT0RvcWYzRkRkTUFGeFBac2FiTUE1NE1CdUxqcE9ad0ZLdGpxNFJpV0xaNTBlMHNTM001VV9qd2VyZUJJUGVKNDh0T1d2VlNYV0J4U0VtNG9GX2E3MnZESGZrTw?oc=5",
      "publisherUrl": "https://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "foto tumpukan uang rp 14 2 miliar dari kasus pinjol ilegal disetor ke kas negara kompas com",
      "id": "9ada5f7fc2866a89",
      "domain": "regional.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-743fe8695a7d8d96",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-21",
      "title": "Gandeng OJK, Perusahaan Pembiayaan Bagikan Alat Posyandu Sekaligus Bentengi Warga dari Pinjol Ilegal - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNeWtJVlpvM3lWd2QzSGxvalFacThUVmt0QXNxejBrVlR2WVV4YUt4OXViVXhFeGpEWFVoZXo5ZVhlVVVPblMtRzVUTW9YYkR1RnRyMTBpMmpZdkt5dFdsSGdCRmFHaUNKRXZwQ2lCb1FWR2o2cXItREZPQWQwcjRXNE5SLW5iNGxzYkgxeDBUYnI0WVQwQUFna3pSM293UDNEUWJzMVhKNU1ZWG8zYWN4NUJFU09WanVkMEd6aVFkTUMtR05DNGVuU3Z4bURjV1Awc0stRVNDTlk?oc=5",
      "publisherUrl": "https://www.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "gandeng ojk perusahaan pembiayaan bagikan alat posyandu sekaligus bentengi warga dari pinjol ilegal tribunnews com",
      "id": "51c55c5cda2ff807",
      "domain": "tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-10743a4d5564b4dd",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-21",
      "title": "Kajari Tangsel Apreza Darul Putra: Rp14,26 Miliar Hasil Kejahatan Pinjol Ilegal Resmi Dirampas untuk Negara - Indonesia Media Center",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPcUF2VkUwcWV1X2sxX2VqSGkzNDdRdElUQ0tvdHNkdkFuT0lYWWRFazVBQnl1dWRBNVVjS2loaXFtNHMzZzA1ZmdQN1JkUW9ya1c1ckYwSnBhbW8yUTJmRmJFRG95MmduSVZkQlpoLXdoMm9nREd6T2JKZmt4eXJfSXNUOXEwNnRlQlM0?oc=5",
      "publisherUrl": "https://www.indonesiamediacenter.com",
      "source": "Indonesia Media Center",
      "summary": "kajari tangsel apreza darul putra rp14 26 miliar hasil kejahatan pinjol ilegal resmi dirampas untuk negara indonesia media center",
      "id": "e5f8e252c4a44850",
      "domain": "indonesiamediacenter.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4fe82ccf6df2aea6",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-21",
      "title": "Kejari Tangsel Setor Rp14,26 Miliar Uang Rampasan Kasus Pinjol Ilegal ke Kas Negara - Poskotaonline",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQdkhOSkI0a2xVZHdGbHA1ZnR2OXZXWUZJcDBUbW5qa2d4RmhGeWFXSDFiRklCQ2JGNnJZRTZXaUxEWEZ6Y3V5ZlJSRFBwaXZEaXJwOHYzZHZUNTJ6a3FNNFFic3VSNGlFVjV2SU1MNnVMR3RfN19BNGk0QXAtUk9hWktFZl9ZV0s0TWd5RzhaOUxwcU90REdRZnE4ZHZYazlUb2ZBbzkyY1BYc1UySGZQTFBnNkRWRWw0?oc=5",
      "publisherUrl": "https://poskota.co",
      "source": "Poskotaonline",
      "summary": "kejari tangsel setor rp14 26 miliar uang rampasan kasus pinjol ilegal ke kas negara poskotaonline",
      "id": "1672eb045c8ee7d7",
      "domain": "poskota.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-806e329340088b00",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-21",
      "title": "Pembiayaan Pinjol Naik 25,6%, OJK Tetap Waspadai Risiko Kredit - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQWXROdTJwR3RvTWdjbm1Oc0E3RmpLdGx0eWRUOVQxWEh4RFhsN2ZRQmJPN3NFOGtWcS1CbExabVQtcVpoWmlPT0ZBRnpYenZZbGI0VmtPX3BlUDdtY3B0QWhSZC1DOGlRczBtVnphLV9YLVdHWndRYkZ2WE5nR0pDUW12OTVIYV9KNWhjbnVVNXFvTVdrUUJPWWJSMmktZ9IBowFBVV95cUxOT1l0LWp4bnN6OVJlb3ktUWY5SzZFZnJWV0JZM2M3TmoybGpvQi1QUTk5V0RqZmVySTBoY2NYLWE0SXAyTV8xTXFsSmcyRFNrVGVHOE1RaE42cVY2RGxEVGN1VFY2STk0UW5qU0wzUklpMi04eXBoVnFUNFBzN3IwZGcwekE3MXk4bDVhLTJlQTd3TFhMSkRtQVB0REpKQ1FNZWZN?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "pembiayaan pinjol naik 25 6 ojk tetap waspadai risiko kredit warta ekonomi",
      "id": "27fccf0e55af079a",
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
      "eventId": "auto-6fcc8ba582e7de47",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Pindar Samir Salurkan Pembiayaan Rp2,3 Triliun di Semester I 2026, Tumbuh 84 Persen - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQZ1pzOUFXb2ltWURRdGFyOXFOMXZMZ0o0SVN4eTdvX0QweEFJUWE4M3VWeGFBaEpSMGY2dmJnbTg5aTV5ZmUxU0l5WFlGbGR5a0JfTC1NV05hcHdxTTNxQUVlT0hLc1N6eGFpMlhvbldrT0RleXp6T284bWZwcEQ4dnYydDEzem1taXhzcTlwV3ZnRWhhQm5DbndHb3RyTzV6bmxyOTl3Skh4QQ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "pindar samir salurkan pembiayaan rp2 3 triliun di semester i 2026 tumbuh 84 persen infobanknews",
      "id": "f0a92a3de38b348f",
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
      "eventId": "auto-7903b9e263702eba",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-21",
      "title": "Pinjol Resmi OJK Terbaru Juli 2026, Cek Daftarnya agar Tak Terjebak Pinjol Ilegal - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOY1hwaGtGOUVDMGhIUjA5LUVBNTU2QW9MY0NEM25qdl9ocU9BV19Qa2ZSVGNYSXRlSWFzQ0U4YWpwRUFBYnhKQXhWMnhxVlZnZXZINXd1X29pX1pTdnJ4dW9lRFFUUFNpN3ZDWTIwVExsQXF1UHdxazVYU3JtNl9XNWxJcVdwdVd2MGs1WUhBX2tVX0xyaVZVdUNaaUdZeEhSZzl2YmNDYmRadE1TbHNHR3RaVUdQR3VqU2dQWUQxUC1XUQ?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "pinjol resmi ojk terbaru juli 2026 cek daftarnya agar tak terjebak pinjol ilegal kompas com",
      "id": "3196c3c9c6820707",
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
      "eventId": "auto-477fe7d22b7d2935",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-21",
      "title": "Polda Maluku Gandeng OJK, Bank Indonesia dan RRI Perkuat Literasi Digital, Ajak Masyarakat Lawan Pinjol Ilegal dan Lindungi Data Pribadi - DIVISI HUMAS POLRI",
      "url": "https://news.google.com/rss/articles/CBMikgJBVV95cUxNbGM3R01ZcEM4ZXcyNE4xcVRVVmJ2LUVYS2JxTUNXbGhWRDQtVVMxUkkxTGpEa0dRNXM3dG5qRE42X3phdmJmSno2Z1cxU2ZNeFJIeGtEVnhWZEVPOVNBdjVPNDhWb3pTVmI4NHVyNHNiNi04VWZWaVFqUTVySndDYk1sbVdtTXhhTG52eVlvSE9NZHhCelZPRGJOQVdlTnZnbDBWT3lLMlFYcTktczBWZTZjMkN5Q1NnY3NWemg0SjZPSi1ySUt4X2FMSTgxZWxSLWR0WjRTWjQ0T2xZbnJQY29PN2xmN2RKSXBaQ29Ldk14Yy1nVGcycjF4cmtTUlRJM25ONGtOYmpmckU3QUx3RG1R?oc=5",
      "publisherUrl": "https://www.humas.polri.go.id",
      "source": "DIVISI HUMAS POLRI",
      "summary": "polda maluku gandeng ojk bank indonesia dan rri perkuat literasi digital ajak masyarakat lawan pinjol ilegal dan lindungi data pribadi divisi humas polri",
      "id": "9149bd578dbc6fc1",
      "domain": "humas.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-18303ea08aea0ea3",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-21",
      "title": "Stop Pinjol Ilegal, Lindungi Data Pribadii, Perkuat Sinergi Pemerintah - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOaXJpVnlMVk1OMFh5aVVBb1RkaHY5VE1mSkRuTkxRRFNYVVA1NDlaajhGbFRDbTJadVIwUmxiZTNwT0Q2MmZiaUJPREVHaE1DWERwTEtoRDBXSU1wNUc5WE10N2hfWDdXSmp5eS1qeFZWR2t2aXVMVmJmbjdGSkcwWkxhcExzSDZuakVhLWxSMWZTSl9HLVluTmg2ekN5cVc0UFJ0QXRiT0lVaEJrREE?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "stop pinjol ilegal lindungi data pribadii perkuat sinergi pemerintah rri co id",
      "id": "b4bcfcbe6e5702d2",
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
      "eventId": "auto-6be01951e5b93456",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-21",
      "title": "TP PKK HSS PERKUAT KETAHANAN KELUARGA MELALUI SOSIALISASI PEREMPUAN TANGGUH ANTI PINJOL, JUDOL, DAN PAAREDI TANGGUH HUKUM - Pemerintah Kabupaten Hulu Sungai Selatan",
      "url": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxNeHVhMm13V0hKRExBQ0xRT1pHeUFGanFLYmhKYXdocHFVNGZpd3FTX2dnYnFxN19YQVF5eEVGX0dOUGRWdUxXVl83UnJlejh0UWRBYlpOVkpUbDlMZ1FQYlEwblBuX0F5YVQyeFNXelFDMlJ0ek5wNG5kVWVvV0NVYXV0S2lKeENnU1lIb05lUHgxNGtpaWhUdGJBbHl2eTVtRzFUanV5N2hCbTgwTHhnM1JNbHViaFZwck4zYXhLaVFpSGRYeGJuS1RXeUg4dmpZdEp0Vml5dEJoTy1mZG9iRzlQa1luY2Zsd1VQbjhRZzJPdFJN?oc=5",
      "publisherUrl": "https://pemkab.hulusungaiselatankab.go.id",
      "source": "Pemerintah Kabupaten Hulu Sungai Selatan",
      "summary": "tp pkk hss perkuat ketahanan keluarga melalui sosialisasi perempuan tangguh anti pinjol judol dan paaredi tangguh hukum pemerintah kabupaten hulu sungai selatan",
      "id": "52a15ab1fad56358",
      "domain": "pemkab.hulusungaiselatankab.go.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a7625eec706f468c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-21",
      "title": "Viral! Nasabah Kredivo di Purworejo Diduga Jadi Korban Pelecehan Debt Collector - Jakarta Kota - jakartakota.pikiran-rakyat.com",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQOWtWQXMxMEFtZER5SWg0VklGa1MzR20xQzBfbngySENkOHNuSnE0UFVVVGNmczRRWGl2aXZFQllEYmRsSkpNREJEdDlHYU84SGFBMHRZa2RxZVF5SklJc2FyX2RiOGE4Nl94dEl3Q1FJNktsc0p5OVVsM2NUTVdmLUJhc3hLNlhLcUVTOVVfWmdodDhJTVVfdDJLUnpydEF6a09oc3Z1cXRXSERBek5zVWROcWYySHZFb2JKV1d5dGFSbjhrYkdYcnFDVHFKZkZpZnpGVdIB2gFBVV95cUxQLWlHSnJDM1NVSndQdmE0SFFmcmd6aGFxN2NWNGRSQU96WFc2N1lMbnBSbHMxUE9pTHJpRXQ3ODFaeUZpRnZVckxzUXZhazlsLTRLQVlYOUVNeGJFRkNtWG15WEFvczRITkZsbnpnQ0t5OWZPclRFLTM1VUpfMDYyNzdvX1hMRjJhV0RFd0Zlb1VkMFdISEtqcEk3U01fUF9ISVlxYVBrV1VMRjVxWVB3RHdGUU5iNzItbkdXUWtMR2ZrcUlWd2UtbmhjaFBJUjFLRFF1QlBNT2tDUQ?oc=5",
      "publisherUrl": "https://jakartakota.pikiran-rakyat.com",
      "source": "jakartakota.pikiran-rakyat.com",
      "summary": "viral nasabah kredivo di purworejo diduga jadi korban pelecehan debt collector jakarta kota jakartakota pikiran rakyat com",
      "id": "ee4e5558e174880f",
      "domain": "jakartakota.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 6.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-21",
      "title": "Wali Kota Cirebon: Literasi Finansial Kunci Cegah ASN Terjerat Pinjol - About Cirebon",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOWTRJaG10bWVkNl9EUGxfbkV3TXNjanF2LU9YUWhlcUVfTS1teUdOR3RiNTNNdC1HaGhqMkZ1dENsSTRFUHpicHR5QVlYVW52ekViU2pQQzJ0TlhxOGZRTHdsYklmZ0hHVkFXUEItVURpLVNMY0NXZmJpcHc0OWkyRlVQbk9iUmc0MDc2TVJmTHc2N3N4SWJFaQ?oc=5",
      "publisherUrl": "https://aboutcirebon.id",
      "source": "About Cirebon",
      "summary": "wali kota cirebon literasi finansial kunci cegah asn terjerat pinjol about cirebon",
      "id": "2a379e3a5ac0bb9b",
      "domain": "aboutcirebon.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-34927591c9193ee4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Berawal dari Tagihan, Berakhir Pijatan? DC Pinjol Kredivo Ajak Nasabah Ngamar demi Utang Lunas - Gelora News",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE5lMnlUa2RxWnlXYk0teHZ5S0RySjRxTlBxM1FWMHNSblBnSEEwZVVPT29uV2sxYUZWZU9BYXlYOTdhci1ETjAyVkYyTGRfSlN6bHgwRDJDc3B1OUpWT2ZpWi1wZ2kzbVJaZmowcmRFaDRRMlFpLXQwSzJ0UU8?oc=5",
      "publisherUrl": "https://www.gelora.co",
      "source": "Gelora News",
      "summary": "berawal dari tagihan berakhir pijatan dc pinjol kredivo ajak nasabah ngamar demi utang lunas gelora news",
      "id": "abac9e4cf03f1fdd",
      "domain": "gelora.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-28d05e4ddeb4c833",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Bupati Kediri Dorong Anak Muda Terjun ke Koperasi, Cegah Bahaya Pinjol di Bawah Usia 40 Tahun - memorandum.disway.id - Memorandum.co.id",
      "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxNV083UC1VcjF4d2dXbkdMa0ZTSHdvRk9xSk1Xc0JfVnlhNHVfYmdrQk81NkNjaUpFT1lXMjlYX3BXdExCOGsxQVRsRXNiczhJeUdlTkpiNHZmWV9wVlBNVHVXVlZaeVRMQVBkYnVNMzhXS0dKaDlSa2NfcFBJQTlETk5pcEFQMkZiVmU4ZmpocldhLVVLOGZ1Y2Zoak50MUh3RWExVHVZM3JtVG4wanBrODhpdDRkVFZyNTlFM1ZWMWJPWjZFb1JIWUwxYWw2czBjdnFSU2Y4Z9IBzAFBVV95cUxQTDJJM2o3ZWhoN25EemMzQnNTSGJzeXlHVWl1Sjc5UjZnVkdFaWtqZEswZFk4VnhsNXgxSWdYS1J0cERSTDFxRUVrQnlXd0k0bXdzNGFsSlRka3hPVFd5R1Q5V1JWVndnWVJwWHFRTTVBaXlVb0lPMUN3R3l5OVJEN1ZDalEzWFJOWEhFcFktbW85bDI1NTh3WmgtdjJtR0ZtODZrRW9KYXJHQ3JDQ1lHNTBRb0dDSy02Q2hKYXJqeDE1NEQwTGpMMGlnSXc?oc=5",
      "publisherUrl": "https://memorandum.disway.id",
      "source": "Memorandum.co.id",
      "summary": "bupati kediri dorong anak muda terjun ke koperasi cegah bahaya pinjol di bawah usia 40 tahun memorandum disway id memorandum co id",
      "id": "31dc3e74745968cb",
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
      "eventId": "auto-6556a8fd86efe9e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Debt Collector Ajak Nasabah Lakukan Tindakan Asusila di Kamar Kos Purworejo demi Lunasi Utang Pinjol - Tribun Video",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQeTF0TDlaeEw3N1UzbWRRMjgtMFdmOHRuamJhZ183OTlEeTcyZG95M2h4QU9WejRrSW1VYmpkZVk5WUp0eFF0b3AzdzR0OFd1VGlORV9QQWxWeEZ0bDdjbDFqQjg2TjFjbE50dzZOZVVUdy1ZcGdEcW45VkE2Z2Nqc1Q2akZleHRxVVpTdkFqdDhLeHlCUVJBV2xkWnhzbFpwQUZJN3JWZmVCamNjWnZna0lpZnMzeG1fR2hoYlk0TlJ5UjZpLUVSZVA0Z1lYbkZFWDRmTjVSMTA?oc=5",
      "publisherUrl": "https://video.tribunnews.com",
      "source": "Tribun Video",
      "summary": "debt collector ajak nasabah lakukan tindakan asusila di kamar kos purworejo demi lunasi utang pinjol tribun video",
      "id": "3c815a161dbc9fb4",
      "domain": "video.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a795e21fce366cbe",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Debt Collector Ajak Nasabah Ngamar untuk Lunasi Utang di Purworejo - detikNews",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNMF9KV3NfV1dyQ3RfZ0Q5cWJjT0l3S0NRRzlBWVBpNng1cFRnRnRpenhMLUhMRFdEMElPcFphTlE3NUNaa1prdF9fR3pfM2hFbmJQczFTUWJsMlQtYlZJUTdSRjN0X1VWLWUtTzNMOTZuSkZQN2pyWER3RDVMTER4MzJfT3Foald6dlczR1pRVi1BVXNTSjRleFNndG9NMEp3b21WNWQ1SWJ5QdIBrwFBVV95cUxPVU9fN0VnNGJlMFVJOUxoaWp0ZUROeXQzQ0JDcXczRU1SZDE3cGk4RHkwdlA0UkJPdXBPWThvdzQxbjhkeGtndmcwaF8yVjlhWUR1dDRKdnpjTzJUem5kZng1blFUY2dQeURYalJwV3FKTWg1bEV2bkRVNktUQzF5YXVFdWdGcV9SMmdxZGI4YVhVeXFGeHllOXNqN3A0dzBQVngwYVpWSkZZM3BpVkdN?oc=5",
      "publisherUrl": "https://news.detik.com",
      "source": "detikNews",
      "summary": "debt collector ajak nasabah ngamar untuk lunasi utang di purworejo detiknews",
      "id": "514c9f32201f03a8",
      "domain": "news.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0ad70f762e92c478",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Dimulai dengan Tagihan, Diakhiri dengan Pijat? DC Pinjol Kredivo Ajak Pelanggan Ajukan Pelunasan Utangnya - rakyatpos.id",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOdTFYZnJHUXh5Z00xQkVNMUJpOS1VeW1vazZqSzhKa2dtTDdLNnNoTHNmVXY1UU5CekhwUkFSZkFBRWMxMGpjNFU2cWh0SGdXRXBSamZ1QXJQUEloMVFXam1CZHlNdlFkbFp4blhzWVZLZzVHRTduSHZMTkkyS3JMeUNCUG1FeEVlcE15S1FXV01NQjhCTDhOUzJRX0xKdnlHNzdBME1zZ05zdURJR0tPNUpnelFNTHJOb1VMcG84bWhpNXRyeGpPcGd0UVNacU5ZNmhtb0MxOWs?oc=5",
      "publisherUrl": "https://www.rakyatpos.id",
      "source": "rakyatpos.id",
      "summary": "dimulai dengan tagihan diakhiri dengan pijat dc pinjol kredivo ajak pelanggan ajukan pelunasan utangnya rakyatpos id",
      "id": "ccbd79e19f6f0573",
      "domain": "rakyatpos.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5fa93b9eb4967672",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Foto : Update Pinjol Resmi OJK Juli 2026, Cek Daftar Terbaru Sebelum Ajukan Pinjaman - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPUGRFV1ZfSmxrMTRlVW5LakZDenBwZlNMaE9DOVZ5dnMwRjVMa182Qjg2TlhvdDFreFZYVllMN01kSGZ2RUJfcUFtSkJBb0dydTR0bFpRQU1wWUlsRFl4dlpRa2JlY1l4SWVpcVJWeDl6TU44VjVDNUU2RFpjdWpRU2tQTmlhYTFlNllvMkRUaWs3NE9EbW8wMC13UVp0VXJBQ2VkQnlfbHdOOVR0T0FTalBWcjhpYks4ZWFVX00tRVNDWUlUVC1v?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto update pinjol resmi ojk juli 2026 cek daftar terbaru sebelum ajukan pinjaman kompas com",
      "id": "18a96fb4bb4ae81b",
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
      "eventId": "auto-a74cdca7e3b1426b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Geger Nasabah Diajak Ngamar DC Pinjol di Purworejo - RMOL JATENG",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPNW4xRnNIU3JiNm84RE1mRzFKOTFMT2FtTVpkR28wZFpGSmNiNFBOSGNsSktLNENlblBSbEMwdF9TN2l6Nl9wRGtCZDhBWExWVzB1TU4tX1JmYUxjaktfRWhGczJRLWtOX084RjVvY0NqRTRCOU5VSUo5dnEyVVFxRHZLT3A5SXc?oc=5",
      "publisherUrl": "https://www.rmoljawatengah.id",
      "source": "RMOL JATENG",
      "summary": "geger nasabah diajak ngamar dc pinjol di purworejo rmol jateng",
      "id": "2578f9498dfcf949",
      "domain": "rmoljawatengah.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-551aeea8c35c46ec",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Heboh DC Pinjol di Purworejo Ajak Nasabah Ngamar demi Utang Lunas, Endingnya... - detikcom",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNWmp1VHNUT29QM1JMM21LWWVaU2VWU3FPY2pDS2h5NTFmSjB2SUM4NTdNS0c1eVlUeVdMNmlrWDlGSUJVblhTcF84RG1qZ05zZ3A0NThhSVZ5ampvVTA5cWltdV9NZUNnaEJMRFhZTHMyX0l6aHVvOWxUemptV3haNzNuVXZlbk14ZTZ2TFR3U0FEblFFTk1aVzZUNnA1NTdZb1NSX3JwcVZDMXZxNjZxMk8yWDBpazVqVlRCM0l30gHDAUFVX3lxTE5XN0dUNlc1MTFVQjM5TFZHWkl2MXdxUDdNWTJyci1QWmNiLWU3N2hRWEZhd0xoTVBxR2g0QlNBOW1XRjNtYWo2emNiOHdZT3NBX05PUlJ0Sm1jWGp2cFVMVW5Lb1hYV19IdDY3S0w1bVZ1TjNCZV9IckE0ZlM5MW9IVlBhUTF4dWY3eDJTdXY0WHRlTVViVUVmenB2c2RBUEtPYWZEdGNGSnRrVTNMQVBJbnlETHpLa2VQRkN2RkVUMllYaw?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "heboh dc pinjol di purworejo ajak nasabah ngamar demi utang lunas endingnya detikcom",
      "id": "079252fd565ed0e7",
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
      "eventId": "auto-8bc1f214050626e6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Kapolres Aceh Timur Perketat Disiplin Personel, Tes Urine Digelar, Cegah Judol dan Pinjol - DIVISI HUMAS POLRI",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPdUlVNWxRX1pjUFZuR1d1SXVDV19NWW1uUU02SnVwSVhnUHdBNkhkZ19nNFI4UDYxd1RQZTUtSzJGUkZSNkFYVUVTZ01ncWlUU1djWlFpVktkUHRyS0M1ajM5VDV3WTE3WFcwMGp2aFZldWJfQ3NQRlZvdFF1bG1NOHR3MzhNMDdTUTNaZWhneFlOR0lSM3VJSjhGMFpnTU5LcmpDZ2R5SHJXM3dOWEd6RFBycEJadHZQdGtaY0R1YnJPRFh2OXRFZm50RHE2dw?oc=5",
      "publisherUrl": "https://humas.polri.go.id",
      "source": "DIVISI HUMAS POLRI",
      "summary": "kapolres aceh timur perketat disiplin personel tes urine digelar cegah judol dan pinjol divisi humas polri",
      "id": "1db53e731cc22c00",
      "domain": "humas.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-618f224e348b6688",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Kredivo Usut Kasus Dugaan Pelecehan Seksual Nasabah oleh Debt Collector - asatunews.co.id",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBHMGs2MzY5cjctNVFXVTU0UDJFcXctNE1HWHZMNHkwaUJRa2FvLUNybnBjODBhcTFrYndsVGZyRVBNUktVSFRjSzg5dHVkX1RQX0YwcDI1YjgwV3dWZmVicDBfbF91NG50V1JrQnRKQTM3cHJieGRXNDdnMU0?oc=5",
      "publisherUrl": "https://www.asatunews.co.id",
      "source": "asatunews.co.id",
      "summary": "kredivo usut kasus dugaan pelecehan seksual nasabah oleh debt collector asatunews co id",
      "id": "a16d6ff82735391a",
      "domain": "asatunews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.0,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-22",
      "title": "Lagi Viral Diduga DC Kredivo Lakukan Pelecehan Seksual ke Nasabah - news.indozone.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPWmd1Y1RlWWpadGxvLXg3N0NOcmstWEtqRTZIaVZfeHV6VF9COWdJNnRRTkdKT205SlMtWjZDdkZEcUJtUE01ZjF6bFU5ODlEeGdvT000bDBpLWlZNTI5TFhHOW9Bam5XMndfdkV5dzFlNTFxbGNPanZCY2h1dnV6Q1VoMndnaVZ6LXFoTC1BTFZ0VHhsWjltM0JnRHZTczB0LUV6M3BmbUZ3SWNMOElIS2o2cw?oc=5",
      "publisherUrl": "https://news.indozone.id",
      "source": "news.indozone.id",
      "summary": "lagi viral diduga dc kredivo lakukan pelecehan seksual ke nasabah news indozone id",
      "id": "5669074934dbab72",
      "domain": "news.indozone.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-22",
      "title": "Maling iPhone di Temanggung Digagalkan 2 Cewek Terjerat Pinjol Rp 50 Juta - detikcom",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQSVV4dXpJZFZPaTdDd1Q4cFhQUFd1Q2pmWFhDN2h6Vjg4Z1pEd1lpbHFLWXBtVmVSOE9taDhtSU1MNkJfd0I2MjZNWmJwV25aVXducnp0Z3haZEFGb09QQXlndGZJZmVocTBpU2tzNjZrVk9oZ1M3Q3lNRVVhNEwzaW5uT3lPbVpRSkQ1MG81ZTU2ZG1FbzY2Sm1ycjhsb004b25nRGJXVktpQTdwVFRidWwxZUZEUDJvQWJacnZtZFNwQTVjbm9lRERCZ9IB0AFBVV95cUxQempUYkE4M2JkUHVfNU9CeFdUUFdkbGVzS211ZUs3LXN4dnlCWGY0UDk0ejFnSkd5ZlJuWVBqZXB6SkJhM01QcS1BUTdfZDhDM29yY3RfNUtacXpPNWRHckNwaWxBOVg1ZGdWb1pLekx2NEZqdmt3dTA4RzhVUmJzOXZ0aFI5aUVkM1RhRkRqdWo4QVpLUmlQWWxZekFqeGJCT3lzLVFNczJuNXRnU0g0MUFrTDBNc3ZxMDBuTjl6bHFHd21EWXpMZS1YTmNQaEZS?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "maling iphone di temanggung digagalkan 2 cewek terjerat pinjol rp 50 juta detikcom",
      "id": "9f35ef52e2251c8d",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-23c8c2339e2ab573",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "OJK Catat Perbankan Masih Mendominasi Pendanaan di Industri Pindar - Media Asuransi News",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPeTNJOS1CZ1VsQVFZMkxSXzMtRGM3bHZpR0dSY1ZOTlVQSnhtQ2ZuS042MlZWN2NLdk5VcDV1S21Ec1IwSXNnZE9JMklHaFhoMVJkQzJHMUg2azZ0eWN3T2ZFN2lQY2tTYUI1RGNERG8xVXI3NUVZeE02ZnNFRGRKaGF4clNmb0dRWHJpeU5TbUotV2dYY1ZJem9SbzktOXFacmRjbG1NR2JwUHNDNU56MG1NQ25yUQ?oc=5",
      "publisherUrl": "https://mediaasuransinews.co.id",
      "source": "Media Asuransi News",
      "summary": "ojk catat perbankan masih mendominasi pendanaan di industri pindar media asuransi news",
      "id": "14ba01f5dbabc467",
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
      "eventId": "auto-4f7384b9bc54e1eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "OJK Cirebon Ingatkan Bahaya KTP Dipinjam untuk Aplikasi Pinjol - Media Cirebon",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQR21GaEZTTkk3ekhMWEh1SVdjb3F3NXBtOGg1MXNmVGJPeEVXZ3dQSi1CTWRQYURrbThtTXJaWnVvTzA0YUVWNWZhcnZaNnAwLU9QbFE2YVh3YW5NVXZSV1J1X0w0UU1jS1NBb3gtNEdNTlJibEVDbDdZRVk4eFBSaExudEdhcjh4Ty1LRHVQNDg?oc=5",
      "publisherUrl": "https://mediacirebon.id",
      "source": "Media Cirebon",
      "summary": "ojk cirebon ingatkan bahaya ktp dipinjam untuk aplikasi pinjol media cirebon",
      "id": "048643539cd79de7",
      "domain": "mediacirebon.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9009c00992ce1f29",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "OJK Wajibkan Multifinance Bertanggung Jawab atas Penagihan Debt Collector - pdiperjuanganbali.id",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNbVI0NlVyNFEtbUxVNFZxZ3UtM3U4X2QtZjdHYVl4a2l1LXlJdnVPVE5aS21LdkI5MGQtUENaZFlyQ2xpM3p4STc1WXIxWHRaSEZHeWlKQ2xXVnR6TS0zVXFSUDJBYXB6d2t5akt1SG00V2xNZXR4STRkSk9UV2VxZWdtbmFXTG1OdTVfd1ctTjVmUQ?oc=5",
      "publisherUrl": "https://www.pdiperjuanganbali.id",
      "source": "pdiperjuanganbali.id",
      "summary": "ojk wajibkan multifinance bertanggung jawab atas penagihan debt collector pdiperjuanganbali id",
      "id": "954bc254fbb161c6",
      "domain": "pdiperjuanganbali.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-617a41f43cedff46",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Pelaku UMKM Diimbau Waspadai Pinjol, Tunggakan Tercatat di SLIK OJK - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNZF8wM2dPUDhvTXEyWU8xYUl2enJhMS15cmZfVVJ1UHlnY1NXSG1ibDdkNk9rTXRvY01pbW5UTDNPbjFFNEZIODVEUjBKX1hmTWR6bThWaHgzWXFjbVV5RFZJS2JfZ1pDbTNDWTNuc0pVWUhlaWJXUDBnX2hVUUZYXzBCbndzeXFrMW9JdHY2eEJnZnJReDJSSUlhZnBQeGIzMUd0cDBnS2RxQnVlbFN4bElTeE1fQQ?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "pelaku umkm diimbau waspadai pinjol tunggakan tercatat di slik ojk rri co id",
      "id": "a8c42adb9340ace1",
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
      "eventId": "auto-96bddbaebb9c6b56",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Pemegang Saham Kredivo, yang Oknum DC Diduga Melecehkan Nasabah - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOcG9iRmdnNXZNRk9NMTVKMzluUF80Vjd2RjVFVnUwZThLaFJ1S05UdkoxbUxieDhOeHlXSm0xWFNsWmd0UW5VYm5FTVMzRFpwMFBqWThQUGFvZnZodEhkSkEtTVlwamJGN1htTUFyZFVxb2xTamtuM0NtbjdRNDFHclRHNWdKN3NSX0w5VlV4RldqTnpVVXUzdm5xRTAtaGl1cjVYNnV5N0dsclRVYmFLbEJCUFM?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "pemegang saham kredivo yang oknum dc diduga melecehkan nasabah bloomberg technoz",
      "id": "71987ed33aaa9c3b",
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
      "eventId": "auto-6ef70a454ad902fa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Perkuat Literasi Digital, Polda Maluku Ajak Masyarakat Lawan Pinjol Ilegal dan Lindungi Data Pribadi - Ambonkita.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPZ1RkekJaR2M0bVJLY3g0UXAzaFM4dkNROVU5Y0dHaVlNb3VyMExwaVhRalN5WVZDM2lpNllMMHZWQl8yNGxrb29BajloNGh4Xy1mcFVFcTlfTHZlVUozZkdLbUNPTmZuSlhxcC1qeFZBTlRiUmlQYjhuNEplRldJbTdIaGVzS1d2V0R6aHBoQTBieEFELTd1Ukc5S3FLMmpMMTljWGZIenpWUW5RSlp1Y19XdVBCbURvdEJFM25CVQ?oc=5",
      "publisherUrl": "https://ambonkita.com",
      "source": "Ambonkita.com",
      "summary": "perkuat literasi digital polda maluku ajak masyarakat lawan pinjol ilegal dan lindungi data pribadi ambonkita com",
      "id": "51b1bfba794967ad",
      "domain": "ambonkita.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c7e72da6bce5307f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-22",
      "title": "Pindar Samir Salurkan Pembiayaan Rp2,3 Triliun pada Semester I 2026, Tumbuh 84% - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQejBSWXNRNVJoeVpJaExoX21vN1B0TFF0aC1IVGxUbllyWExMX3l3Zl9kN2xlRk9iaVBpWExYMXUxODhITDBOa0NacHFPMzNFOUtOMDZtVmQ5VF9WdV9Cam44X2trT2dzWWxPcWRKNDhjdEVZbnNlcHdRVXFnUloteVBzY1RSMXRpdThDMTRlQjc0eW9uZWE4blhWUWxoOXlJLUxMWnNpaHZiZw?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "pindar samir salurkan pembiayaan rp2 3 triliun pada semester i 2026 tumbuh 84 swa co id",
      "id": "70c2f3451d50cf8c",
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
      "eventId": "auto-9566f6b55ecf28c4",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-22",
      "title": "Pindar Samir Tumbuh 84% di Semester Pertama 2026 - olenka.id",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5rcDhITUZuZVdieWdESDVadEpMb2xBOWRGS1dhNDR0VFNya0tueFA1b21wam9CQWpHQl9ETGppdThRU0dFSXdxd3M0b1NidDVBcW9fVXhIU0FEY0RmT3B3YndxczZjaEh4c0FBakg3bUtNNFXSAXhBVV95cUxQLTU4Yk42Y3pDTUE4UC1GWThlZTJKN0ZxaGJWNzlOclEtZS1KX0RpQ0xDUDNKZVQxZ0NMVkNmTzJRbFplZU43SmJuNjVDWlljSlltWHpMZEtSMmlEVl80WE5ISUFURXhQWWlPcFBhdFpzMnlUQTJOR3o?oc=5",
      "publisherUrl": "https://olenka.id",
      "source": "olenka.id",
      "summary": "pindar samir tumbuh 84 di semester pertama 2026 olenka id",
      "id": "b5ad47f7e18974ba",
      "domain": "olenka.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6d92a1a6c19f32da",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-22",
      "title": "Pinjol Bermasalah Rp1,4 Triliun - Bantenraya.co.id",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE80cFEtd2tPWmY4ZVhtc3RhODQ4YXNUeXFuVHBYSWRTRUJHQ2pGWmEwMG9PTmFnS09HX0I1RUhHMmRxRzY5bWZWZ2FBRnU4MWFZYWFhSVY0bnhRWjRrSUxkQzAteDl1S3c?oc=5",
      "publisherUrl": "https://bantenraya.co.id",
      "source": "Bantenraya.co.id",
      "summary": "pinjol bermasalah rp1 4 triliun bantenraya co id",
      "id": "13b3de48d39dbd19",
      "domain": "bantenraya.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.2,
        "label": "mixed",
        "negativeWeight": 1.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-548b856f1c40a7e1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Polsek Metro Tanah Abang Gelar JAGA JAKARTA ON THE SPOT, Perkuat Sinergi dengan Warga Cegah Tawuran, Judi Online, dan Pinjaman Online Ilegal - DIVISI HUMAS POLRI",
      "url": "https://news.google.com/rss/articles/CBMikAJBVV95cUxNM3dLeUVCdWh3YmlMSXU4eDE2cUVqdE9DLVZ5c3BJZV9TVEZqeDk5cmFtd0JDdjlMazM1bWRhQnRWRGZkLU0xa1hsWWpmb2ZPS2E2eFZtNlYyUWVTME5zZVpkU1pWR2tOQTI0TTdSQ0lNdTFjV21FcUJHU3BLbEV4YW5oaFI1ajRxWkRFelFvck91dGhqeklyTVdKakVfSWJYZm1PeHVTanhoVklhS01vVnhQZTBmdTNGU2ZtVEUtZ3dtV0hUM09fRTBMWHg5aC1ibFl2UjhweEdBeUpadU9nTXM3WjZxeWJkQmN2MzZuZEFXZkRIMmRSUDBvMWh6M0FaM2J6RWYtWFFfSkNxZS1Ueg?oc=5",
      "publisherUrl": "https://humas.polri.go.id",
      "source": "DIVISI HUMAS POLRI",
      "summary": "polsek metro tanah abang gelar jaga jakarta on the spot perkuat sinergi dengan warga cegah tawuran judi online dan pinjaman online ilegal divisi humas polri",
      "id": "d61dcdeae59e690d",
      "domain": "humas.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2aa5f599dda061bc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Ramai Dugaan Pelecehan Seksual Nasabah Kredivo oleh DC - Market - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOS1ZaREtDUU9WVXRaQVRLWkEteXlqYWstd2k0RkNMd2VzSERzNE9kcWl0T0FUVXIxbG5aVkN5bXpoNUxPR2U2VllKWDVYQjBXOVU4YlI4OXU4MWZfSkY3cE9jVS1nRUtScmxLdEM1S0htYkFjU0ExdTZfM0ZoVXQwYmR6Q0dmNTh1Vk1FNGlkdHgyQ3hHZVZKSzNZMnduaDlpY0Rlbk4zcDRSZw?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "ramai dugaan pelecehan seksual nasabah kredivo oleh dc market bloomberg technoz",
      "id": "3faa0d7e8854d68f",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-22",
      "title": "Riset Ungkap Dampak Nyata Pindar terhadap Pertumbuhan UMKM - floresku.com",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPanNHazJmZ2ZTT1dhZjlZdmxRcGg5d3hOZld2M2taQUxNcThpNXJCdkpUVzFKMFN2c2hQVlh1eVNOT0FPaDAxRUl1QjBoazJPanR3aEpISTRkaWxqZFNTMHZUeWpzcEFIMGl4S3BjbGdyM1pWbWxaaE5Jdks5czZ4c29yMVo0cnNoSE9EZNIBiwFBVV95cUxPd3AwTWxPV0xZb3pYZnRGbVVwRWRUajVkYUs4V0g3bWZtQnZsRW9jVGxZd1N6bTNOMWJ3WWktQm9OM3JmSC1Jd2NjOE9VMXpxVnhCVDZjRzFUVkppS29xQlUzbDVSOU1QLUFRZ2duZ0VNSzRmaE1PdUlPTXRWSERWMWtzUkhqX25DcllV?oc=5",
      "publisherUrl": "https://floresku.com",
      "source": "floresku.com",
      "summary": "riset ungkap dampak nyata pindar terhadap pertumbuhan umkm floresku com",
      "id": "683309c3729cede9",
      "domain": "floresku.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 40.2,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-51d36f45ec130afa",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-22",
      "title": "Tiga Calon Direksi Bank Subang Jalani Seleksi Administrasi OJK, SLIK hingga Pinjol Diperiksa Ketat - infoaktualsubang.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQcXgybktSbjdERU1PbWlSZzM2QXJ6UFpYTmhCVE5lVmcxa0lOYm03OUx3enpxUjFXSW5hMzR4MWpjZ2w0Q3lqS1NTQ3ZMN0ZnWjU0SzBCTFRlNGdZQWxzQUV6RlZDSVJ5b2VhWjBRNFBfdnNpOVBoZEtGSmVTZ3F4REg3TlBHSlFXblVQeEgwNUMtclpxMHAwRVJqMUxtRlhXb0NiRzVzdG9pSEkzRjd1WTBHbDd1WTVZaklnVm1TNFRDQ05IMWc?oc=5",
      "publisherUrl": "https://infoaktualsubang.com",
      "source": "infoaktualsubang.com",
      "summary": "tiga calon direksi bank subang jalani seleksi administrasi ojk slik hingga pinjol diperiksa ketat infoaktualsubang com",
      "id": "9dab92ec5ec2b19d",
      "domain": "infoaktualsubang.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bd8ee5141a63c1d5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Update Pinjol Resmi OJK Juli 2026, Cek Daftar Terbaru Sebelum Ajukan Pinjaman - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNcVE5N2tRWGVrX2RMWnFSdnI4Y3hlaUlLcm9FY3ZBWl9yVm5NTVJlYldjWXlFc0lEWGhXLXhfQ0NYRWp1Y25hemdjckxEbFNhdmRId0pNOXRmZFFPZGI2Mkl4MGlZOW02azFsdmswQUhqdEZGZ2ZRbVQyMWFrWjZDMk4wZWJGem41bUppOE40VzUxVFdwcDBjNzJJd3pNYnRuZFR0RC01Sjh5N19LbjlsS3FNU0NxYVlJRHJEc3BsMDE3YjlLM1E?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "update pinjol resmi ojk juli 2026 cek daftar terbaru sebelum ajukan pinjaman kompas com",
      "id": "4a1095f1aac22660",
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
      "eventId": "auto-1d397e813baddc55",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Video: OJK Buka-bukaan Perkembangan 5 Bisnis PVML, Pindar - Pegadaian - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNYU1tVlJmYjNmcWpzWVhaSWcyVnFJRWZzZm5kN1RYckI2cDRiZHJWRzViai1kVXBMTXRWYjdqdnkwdDlza2RQeHlTdV9Remx5ZXFoTmFXajhZVGp6TnhoRXlYdG5ManktLVUxeFREOEJXZHNiY2ZfNV91VEJGNjN3eWtyNUczVmV0Q1Z4MG5yN19vT1lfeGZ2QVc0cEF3TEZrc2pTN1lNQzR0VzRLQ2dUX2lJWFhGSC1UV3FIbmEtM09tbGRMYWhr?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video ojk buka bukaan perkembangan 5 bisnis pvml pindar pegadaian cnbc indonesia",
      "id": "db89d7818757ee6f",
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
      "eventId": "auto-01fdb0ea95b533a2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Video: Strategi OJK Perluas Akses Keuangan & Pembiayaan Industri PVML - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQWEI0TFd6T016aS1QTmRtV0g4U1ktemlvMXlKY1JKdVJqb2tycHhnRmV0VnVMeTNNS1gtNHlYaVlfWUo4SmVYRnB0SlJMNnRvbHVOT29qQ0V4STJwOXE1V2NHbmF3czFZYWplLVdLWHJkMVk5RHVUMHprNUE3dEZOYXM1MmdaMmtmYWhFWTRrekozaE1Fcm1oeXI2Nm1jSWhiZndROXZUU3NRenFWZWo3dm9LSzJBWTBXZUgxaHl3OFJzUHowOWpz?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video strategi ojk perluas akses keuangan pembiayaan industri pvml cnbc indonesia",
      "id": "1ab2bdef855e6239",
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
      "eventId": "auto-d705d23b117fb29f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Viral DC Pinjol di Purworejo Diduga Lecehkan Wanita saat Tagih Utang Rp 4 Juta - kumparan.com - Kumparan.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQWmJGaDJ5SVAwZGpXNmlFVlF4MzRrZkkyeG5fa083bnNsRGc0UEU2TEZMU2s2Z1NEUUVFV0Y4cDYxbS1QM05za2M1ZDdjcUZIS21DbWplSzhOOGFRd25mRkRjMG1yaVp6YktXTkc1dDM4ZXdScXJBS2ZJeEJway0tSzR0NDdoMTVCTGNqa09USzFmRG1FUnRweGJCVGZpSmVLeS11Ymd3RHFRRUtDSjZiWFg3VVZKWWxqb0NRUXFfSU8wQdIBygFBVV95cUxQNC1UYTBVa3JHOG1KakNUajN6UG1mbllMakNxb1ZBY1VTNkFXNElpa0JvQ0xSaVFIaWtPbnpEOVV2bzBKSU0tRGtzX2lrcC1MSGpoZUprMW5aTDBRUEZ6Zlpvb2JydlBhNFNfM25wZV9YcjlEeEx6N2pFRDROdGRJLWc3UXl0aGFzcWdNd3FrRlpXUE5sMU1rMlhJel9aT2lISTBLQjZqa2h0RTEwR0ZKcThjLWdHVUVuQXRuWUVQMEFZdjlsanZwTlRR?oc=5",
      "publisherUrl": "https://kumparan.com",
      "source": "Kumparan.com",
      "summary": "viral dc pinjol di purworejo diduga lecehkan wanita saat tagih utang rp 4 juta kumparan com kumparan com",
      "id": "ab512520e7bc5b1a",
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
      "eventId": "auto-4f55d88d2d5548c5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Viral Debt Collector (DC) Kredivo Diduga Lecehkan Nasabah, Utang Rp4,4 Juta Disebut Dijadikan Syarat Ajakan Berhubungan - galeri foto - tvOneNews",
      "url": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxNVW1OaVp3dDN3QUhEUmxPQmlGTnFxSXFoS2RPemVORDQxUDhzVWtucnNjZnVDd2dVZ240eVByZW5PaXh0djFUUXl1Um9oOFdELXlBUDNCWmZvcnJUWjZQWUl0VGF4cVYtUXpEcXpRblpnR2J3RF93dUxvUHpOSjNHTS1QYWxCblNlbllWNHFiR0RWQTJRbWxiR1g1WF9KTHZVaVJRQTJ0SGtScmIwTWowN0NHS2hBamJpWjFkYl83WnZ5alRuN1JzdUMtcVRDN1ZDeGJ3RWkzUDIxb25ib3NING5LWURaOUxuclBrdlo3cE9fbktydlA4dGkzSU0yVzZTMzF0aXVBTWQ?oc=5",
      "publisherUrl": "https://www.tvonenews.com",
      "source": "tvOneNews",
      "summary": "viral debt collector dc kredivo diduga lecehkan nasabah utang rp4 4 juta disebut dijadikan syarat ajakan berhubungan galeri foto tvonenews",
      "id": "13daa87380b3bbf6",
      "domain": "tvonenews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0ff3f388843f7f48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Viral Debt Collector (DC) Kredivo Diduga Lecehkan Nasabah, Utang Rp4,4 Juta Disebut Dijadikan Syarat Ajakan Berhubungan - tvOneNews",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxQTFdPeXhDLW1QSVZqdnJXVWtlMmFITnk3SlNHTmlMU0dqbHJyRGlWMWo0U1pvZm1UTGQ3UkdxcGtzV0RkR3RkOEtwVHJ1SXdKcmRCM2pLTTNrU24yZ3hibEkwcXNLVktMaFV5TU9TdWlJRVBEUjZfazZZS3JqRWxmVkYyV1BMQU01UjFmSU1WbjU0dFNUd254TW1fZEUwZGJhZVJDSDJHNGlUeF9oQ3AyVDhkbkRSTnNVT1BXN1JzUTEtdmRFN0tNa096d2RpT2lSb2o1WWwxRHRNOXZrcUNnbU15WnhzWk5MUEZkNFpaUWNqX0d3ZVZqeW5PQWxka3c20gH8AUFVX3lxTFBMU2dJWmFaM25rdjBiemwzZ1hzay1UOWh5c3lPZGtFMDhscERHeUdWTkYzVWZwd1F1Vzd3MW8zRXI3M1Y3MjhtS3N4dHJRSDJjTEpfckxpVWJKdTRkSThHRDFLMHlUYU5RN05MYS1mQ3BFS1RDUktoSWttUzBsdk1qYnRyeTB2MjAyWDhMd3pSNm9tZ3ozeHNNeml0a2JEWmxYQWxLN0kzX3NJbGdWbncwZTNRY045NGF1R29aXzNwZnNZczFlZGRMb1A1UXpWdHJJRzNhNEFZblZqX1dQOUNLM3MzVE0zR3NrbURYYzIzVXRDZmZScUJBYTZuSg?oc=5",
      "publisherUrl": "https://www.tvonenews.com",
      "source": "tvOneNews",
      "summary": "viral debt collector dc kredivo diduga lecehkan nasabah utang rp4 4 juta disebut dijadikan syarat ajakan berhubungan tvonenews",
      "id": "f06b0ba73880530a",
      "domain": "tvonenews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0ff3f388843f7f48",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Viral Dugaan Pelecehan Saat Penagihan Utang, Korban Klaim Dilakukan Oknum Debt Collector Kredivo - LIDIK ID",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOQ0FkMlVWXzhXMmh4N2dib1JzcnByWnNlUlllYmZWbWpJZzRsMFFabFlhWHcwRTNFOWQyanNQYVZ2bjl0Z3FMalYtb0RUNmJfcVU2YXNpVWt3ejJsM3E3SWRjR2dOUVNxVG1CTUQ3R1JET0l2U1JnVXFJV0xTUDZIUE9BZ3BlaVZxZEdTTndiRzUxcTlsM2JqUGpWenV4YkZkRDFVaGtuc3R3MXdtWm9ZTGFB?oc=5",
      "publisherUrl": "https://lidik.id",
      "source": "LIDIK ID",
      "summary": "viral dugaan pelecehan saat penagihan utang korban klaim dilakukan oknum debt collector kredivo lidik id",
      "id": "0a2f8e3e7bafbc95",
      "domain": "lidik.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 8.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-22",
      "title": "Viral Pengakuan Nasabah Diduga Dilecehkan Oknum Debt Collector saat Negosiasi Tagihan - TribunWow.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPMzR4LTVYcDF5NFA2cVUyNldZTFFjR0M0dU8tSktPRG5TNmw3bUFVTzRLZHRCbjJPSEl3VmlVSUJhLVZqLWJOUmNZVklvaDg3NkVqdTROeHRhNVE1dWxZSW9XSEtmWjJKTS1lWjJmZ1hLWXZLc1dBQzFUWVUyNXUxcVg2ZXVhcGJvblJqa2lDUnJ2b3BoSXZUNnZGQlNzbThaTmJ2Nlhkb2ZJWV9acXFrTUtwRVFBVXFGY1N3TFpKSUU1Wjg?oc=5",
      "publisherUrl": "https://wow.tribunnews.com",
      "source": "TribunWow.com",
      "summary": "viral pengakuan nasabah diduga dilecehkan oknum debt collector saat negosiasi tagihan tribunwow com",
      "id": "1ea6ad094d1f7d92",
      "domain": "wow.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eae9aea8c3622e0a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Viral! Ini Isi Chat Korban Dugaan Pelecehan oleh Oknum Debt Collector Kredivo yang Kini Diinvestigasi - Oke Flores - Oke Flores",
      "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxOSExndktOYjd2NHpYVXZ5MEEtWFRvOVhPX2VCTXpUTkkwYTB3WXh1ck52UUd1aG1jWW1MY0xXZXZYSHMzQ29Ga2ZlM1owdGlTcjh3Z2RFeUZ4SGhHc0EwQVdUM3hQWURvTkRGOVduOWZtOFM5WTF5eks4eG5zcEQ5c0pOXzF2QUdDTVplMUN3aDVwRjlFMUtzclFpR3dPcExBSDJaby1wUXNKZGN3emQyX21tb3RWSnoxaEJPNXlPeEZ6Y1VSZzFUOE5BTmpjTGxPZHhIU3RkcFdGNHhsZ194cDFMdVpmSFk2MlZFdmRJalJmWGdELUNyNFBHQdIB9AFBVV95cUxQUDMwYjNhdXQ3aFlPNjY2UFc3cUVuazV0ZS16WG9HT1JTTmU5cHdmay1ROHgycTlpWEJFdnNZMmtqZ1E1dDJyTVY5ejZlajNHY0xMQk9HckZyVDM3LVVvdHFhSWhIRGp1Y0lfazBMaWFUY2ZyTXNuYW1EN1NCS0luZkhCTTdPZVpyQ3R4T0xzM3Y5VGY2WlpCZFNtZEF6X2dWWGlHdVZDeTNEVGFjUGk0Wld0YlBoZkxmRFdXWlNaOWxFa2k4YkNzTDJyUE0zRVhURVJjV0w2bUhIYVFBVURMQTNEdERlSmFQU3ozc0h5QmNEdzFy?oc=5",
      "publisherUrl": "https://flores.pikiran-rakyat.com",
      "source": "Oke Flores",
      "summary": "viral ini isi chat korban dugaan pelecehan oleh oknum debt collector kredivo yang kini diinvestigasi oke flores oke flores",
      "id": "c353a7bc666ae364",
      "domain": "flores.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 8.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-22",
      "title": "Viral!! DC Kredivo Disebut Minta Hubungan Badan untuk Lunasi Hutang - joglojateng.com",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOc0RuYVNPM3pxclRXVEFCZXZJNUlfbVl2UE41aTdDUXRBVzdNUmM0ZG9HOFdDWFpNMnRNS3gwOVgxSWJ3aUlySGRMQ2VfMGx0YVU2ZVBkcUx4RFVOdDNEaXRfZVlWeVJiN3dKTDAyQjI3aHkwU1ZrWTFVSzVabERocnEta05lV2FmZnB5MU5VUlVsQUZySVJqUFpqVDl3dGV1ZFpV?oc=5",
      "publisherUrl": "https://joglojateng.com",
      "source": "joglojateng.com",
      "summary": "viral dc kredivo disebut minta hubungan badan untuk lunasi hutang joglojateng com",
      "id": "4d0e7a594a4cde88",
      "domain": "joglojateng.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7c87e64b3d1546a9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-22",
      "title": "Viral, Debt Collector Kredivo Diduga Lecehkan Nasabah - Gotvnews",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNLWhyeWNLTG9MWmR5NkprSEpiN3BxZ25UbHVGRU5ZNFk0RHhCUll4RHFxVVY0b3ptLU4tcDVaek5zMklOYzRGOGtTeUxhcFB3bG9PYzRFWjhTYkNpbzlTWnZRU1hsMDZic3NuX3lIZk5RSk1fbmhwNG1SZnIwV3VPdHln?oc=5",
      "publisherUrl": "https://gotvnews.co.id",
      "source": "Gotvnews",
      "summary": "viral debt collector kredivo diduga lecehkan nasabah gotvnews",
      "id": "4adaa424c60e9f05",
      "domain": "gotvnews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a4f2e5c6d82638b6",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "\"Kalau Mau Lunas Diajak Berhubungan\" DC Pinjol di Purworejo Digerebek saat Bersama Nasabah di Kos - Tribunjateng.com",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPaTgteDZrT3djREZScVR1QXRhdDhGNDJUZ2dBbVIydXJFeVVzNmhXdEV5Y0JfOXlrUVJpOV9iM3o3RlFqMVVmLXlhNF9nN0VrUHJvTXVsZ2hhY3JTREgtSHJtckhtYXNWRHNrQ1MtcVV5Uko1WnNYbjhDM2hSdFhoQnB2Y2JPYXlHUGNmcnREVmVpdDB3LVphY0ZINWtvYV8tY0ppX3BWSVBpZUxtZE1YM2xsc2FQQTNrODUzT1I4ZXVKUW9pZ3FuN0MwZTVrNktvTHVYVENySnp6WW9Bcnc?oc=5",
      "publisherUrl": "https://jateng.tribunnews.com",
      "source": "Tribunjateng.com",
      "summary": "kalau mau lunas diajak berhubungan dc pinjol di purworejo digerebek saat bersama nasabah di kos tribunjateng com",
      "id": "6018b8bf7c732f0d",
      "domain": "jateng.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1c78560f9238aad2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "95 Pinjaman Online Langsung Cair dalam Hitungan Menit yang Aman dan Terdaftar OJK - Mamikos",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE10X2xDZXhPSExpTHlIdjU3Qmh0QkQxemoyWExfOEFobldqMFBDRGV5NTVheFRpVVhkNUlCMUFZTUViNG9LcHRsU0cxMXM5djZ5amdOUy1mcW5RRjlGRGs5UjFnVTNHR1Rvdk0xUGlBdUNSRGV3WjhUU0J6YjJmNFE?oc=5",
      "publisherUrl": "https://mamikos.com",
      "source": "Mamikos",
      "summary": "95 pinjaman online langsung cair dalam hitungan menit yang aman dan terdaftar ojk mamikos",
      "id": "e3c3b8922a93f687",
      "domain": "mamikos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2412b36837ac2b33",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Ada 8 Pemain BNPL di Multifinance, OJK Proyeksi Bisnis Terus Tumbuh - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPTHhrX2VxU2xzWWpUWlJsSjJZTmtDcTJDR045eWZtSXR5UkRZNUhjTXdWSC1DZzFmYzI1cnduck0zM3d3elYzYkVwUVBtVmRjYWFyaHR6NUJjVzVKWUhaTGctY0xvNEFLdUpZYmxQemdEVmZVRzFkWG5aS1JPQml2X2VQelNyZGF4VnFsSHRaT04yRHZkVWc?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ada 8 pemain bnpl di multifinance ojk proyeksi bisnis terus tumbuh infobanknews",
      "id": "5faf2b3ce201c2b5",
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
      "eventId": "auto-c35bcb40f84f7b58",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-23",
      "title": "Cerita Lengkap Nasabah Wanita di Purworejo Alami Pelecehan Saat Ditagih Debt Collector - Merdeka",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOMkNhaE5RcmVRVkQzSlpudGNPY2NxOVlpUTdHSTlBRVlpR243Zm1nYUFxQTVkZ3dqX0FyajQteUJUQ3lESHNzYTFRRmlqVVlVdmpnQTl2TkVHRUs0TWFGLS00UjJBS1N5ZmhVaVNfYjJ0TzdiNWx2R2h2U0x4ZlpGb1ZOQ1NjcHUwSkFsNk1OelpRX1VReDRpRTc4LW8zb3JFaC1XcmpyVkVXc0xnNEtpSUV5VV9US3l3U0hiM2NoWmNMS2J2X0dpajBKUXRwUQ?oc=5",
      "publisherUrl": "https://www.merdeka.com",
      "source": "Merdeka",
      "summary": "cerita lengkap nasabah wanita di purworejo alami pelecehan saat ditagih debt collector merdeka",
      "id": "265b53bc4e8f968c",
      "domain": "merdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.0,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-445fc48d2482e836",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-23",
      "title": "Daftar 95 Pinjol Resmi OJK Juli 2026, Cek Sebelum Ajukan Pinjaman - Jurnal Ngawi - Jurnal Ngawi",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPcG13Q0g1RzRSSXlBU3E0ODRtVXIxYkQtMkE5d21CYy11VFFBU3p0LV9uWHNhVXZ2bXF4ZWRpZUZULUdtOUUxai1WWWN6emI2MHVULVJMbm5ZMFdLNGg5MlcxanpQUlpJMUMzMUxHRVRMWkU4YXFjaWNOc2xNc3g4VWtsZkx4SVljWG9Zc0xVLXFrRUl1bmVzdG9BTTBjUHZKVVlRa3hwQVhXUkRaUUxaWDlmZ1FaR3RrNC1vbNIBwgFBVV95cUxQSzlJSUZETlpVQno2RkJaZURZTTZ2ajVPdHZCSWFkYXl0a3YwMTRsS2o5d1R4bDZYc0lUSTN4VUpMN1JMQkFteFRsMkZ6LXdLVnRJRFZKWDQtamk1dG85MS1Xdkx4RUtuNWV2NHloUDhNdEdYcHc0NjF6ZzRkUVhiTzBfTlBDNVJmaDdOck1vemdHX0NCY25OcXJxUUdlXzByaHh6dW9La1dQUGJnNm1RM2ZaMkRoZlpfUXpHZUwtOEZrUQ?oc=5",
      "publisherUrl": "https://ngawi.pikiran-rakyat.com",
      "source": "Jurnal Ngawi",
      "summary": "daftar 95 pinjol resmi ojk juli 2026 cek sebelum ajukan pinjaman jurnal ngawi jurnal ngawi",
      "id": "812eeef66e29592c",
      "domain": "ngawi.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 44.4,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-72db26ce563c590e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Dave Laksono: Literasi Digital dan Pelindungan Data Pribadi Jadi Kunci Melawan Pinjaman Online Ilegal - TEROPONGSENAYAN.com",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPS2RXamNuUTdBZ09qZk9mS1VlNFJ6SlIxU0pERGo2eW81NVpHeXVsSzZ2aHBuWUtxWDlwVm4zY0pxa1ZYOFNLaGV5Y1ZQMDhwSkROTGxtakNiSGJMcTRmTHNSOUxjTEUyenVwN1k2ZGhYS1BKcjFZMzVMYzRDQmVjYVItSEdQTXVBc2tCYUVBZDlJU19TVWxQc1lQel9mYXNyRkJyVmJqSlprNDh0MkR4SmxKcVpHWjhZNi1QczhZUDV5V0VOcldWS0hYVldtZWZYcThLUE53?oc=5",
      "publisherUrl": "https://www.teropongsenayan.com",
      "source": "TEROPONGSENAYAN.com",
      "summary": "dave laksono literasi digital dan pelindungan data pribadi jadi kunci melawan pinjaman online ilegal teropongsenayan com",
      "id": "872d78af9112ab60",
      "domain": "teropongsenayan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a5bf696dafa2eae3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Debt Collector Pinjol Diduga Lecehkan Nasabah di Purworejo, Polisi Benarkan Kasus Berakhir Mediasi - Inilahjateng",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOc09mUDhiWldYbXo2TUdhdkZpaTRLdFVnMHhPZ2RGUjBMQ2JneFhwUTZnX2t0NXM0MTZENTZwZ3pWNTEteXEwU1NxTEVPWXVFWDVIVjlpR0x2d3VtbFA5MnU3LUYyZzVnUVNGUzhRY3dKempObUpSVU1yQUlzQkRrUllOMC1GaTFuVVVrN2c4OGFidFZLSF9BTUM0ajRBU3IxT3VtQV8xN0p5Uy1FQXl3elZkM1kxMFk2bHhoTUt0R0Q?oc=5",
      "publisherUrl": "https://inilahjateng.com",
      "source": "Inilahjateng",
      "summary": "debt collector pinjol diduga lecehkan nasabah di purworejo polisi benarkan kasus berakhir mediasi inilahjateng",
      "id": "9f40143078c5f6a1",
      "domain": "inilahjateng.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ce2bc53331685e81",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Dibanding Beri Denda ke Pindar, KPPU Diminta Utamakan Pencegahan - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPUXM5UVZmazNiZXVMX1lPUThxQnhNdVNHYVd6MnVKbFlFaFdiZ281LXdQYWZacDJGQ0tqTFdHYzE1VmpzZlBsWVVhY3VlWDBiTkRFUWdtcmhpNFpNak1yRkFyTnB2amFYdEZPOEtCWlp0eENjVGFQMmxoWnRMRm03MTRYaFRmUUNNbC0teUNUMGFUY2JNWFA0S3ptenFrTlVzOVFVbEhhbl9pOXJiei040gGvAUFVX3lxTE9yNXVnT190MDZfLUpJSGNjdDB0THBfMGVQUzRKLVk1bF85TmRSTWhNaDhYeUk4ZE1vel9RaTVFNXdYQTdPZENPVVd0cHJYUDBWdDI0eFh2eDV1YVFKZFhLakVGRXAya0hoRENpNTE3ZTFtU1VoRmRsZlMwX1UxbldBX2JCTUlUSXAyVlJEampPRFlJS0dFbXdJYTNaZkFQX2cxMGx0eDEtTW0yZmRKZ1U?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "dibanding beri denda ke pindar kppu diminta utamakan pencegahan suara com",
      "id": "17898ba2a26a1cf1",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 58.4,
        "label": "mixed",
        "negativeWeight": 1.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-1e08ab2750a626cd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Hoaks terkait OJK Beredar di Media Sosial, Simak Agar Terhindar dari Penipuan - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNNFdFMWNQdklBYXBIb1Q3N2R5ZkZIaDhXcmhlVnJlRm5xSWdqRlFxaWN2VHEwa0d0WTdLNmtBUXY2Q01sUW1MNDZRVWJ6U3JnOTVoblRqWVJVeUFxVzNGSW1mcUNhd2hMTjlUZEoyeHNIVVBVNFBrTkJJLXhHTlZHaS1XUW5FZ0tuN3N2SVJjUWJLMzlWWHZERTJFSy1qTWF5dHo5TnpmdEQxT1R4UGRLZ1R6M1BHMU93OHFsQjluWGdPd9IBswFBVV95cUxPYV91M1JLWGkyWWMxOV9wZG1lM0piLUM5NG91WGNDSnBxaldGb1BxOERRZ1BMX1FKNTVGeG5RdzhIbWc5d1BEOGFqSG9GUUcwNlYzX21DOTdGMm4za29WMW1FMFpVU1RDN0lyOVpBN0luTGJuaUV2aDJvb3QtYjJ4RmFRRkJzY2tqb1IzaUtSYlg5T2VueHV1ZFZ4bTN4SWhqaU1mblRVR21XTkI2NnBXYTZMUQ?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "hoaks terkait ojk beredar di media sosial simak agar terhindar dari penipuan liputan6 com",
      "id": "5ccc917388041d2b",
      "domain": "liputan6.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 67.5,
        "label": "negative",
        "negativeWeight": 2.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-b0ffbcaf05753b79",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-23",
      "title": "Jangan Asal Klik! DPR Ingatkan Bahaya Pinjol Ilegal yang Bisa Sedot Data dan Teror Korban - VIVA Jakarta",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPVnJVQU9VS2FSVDNRWGJOZmdScWpKd3JMSkxwa3djc1JuWEVHaHhuMDdjek45R216WkduaV9yTFl0LVdVRy01V0dZUlAzUUlpMEdOWEZvRU5DNG1ZdnFNekV2dnVlUHFHNTBrdHBnb2pQc1N2NWJUaDhjbmh6MnhVUUt5cjhiZUFUR2drN3RaVHQwektfMG5mTDBsTk90QW1JeFRvWkUzQUk3c2M3UXMtd1gteHlYVGE1aEpfREFETnJMdElf0gHKAUFVX3lxTE5RR3NJVjJyR3M1bHZDUjVFTkwtUERkSjl6YjFsOHFzYVZCZ2FCY0hNMTMyYzNiTmN1bVpWTG9oeGxoSFF2OW55c19BdFNVNFJwcTFBOEJaN3loYk5CVDJKdzN0Rlc3QWgxX0x6SVh3VVo3cEdmbjRRcWczNTUwWGFMWFk3dGJjOHlxSHIyMmFENEdfa0p0TE9NQVhXZFMzYmtPazU4NUVhS3lua0pfVWZ5R3dfYzJlbUk1aldIRmZiQUZKMXFaUTg5bHc?oc=5",
      "publisherUrl": "https://jakarta.viva.co.id",
      "source": "VIVA Jakarta",
      "summary": "jangan asal klik dpr ingatkan bahaya pinjol ilegal yang bisa sedot data dan teror korban viva jakarta",
      "id": "9192a4b2759f084c",
      "domain": "jakarta.viva.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 89.9,
        "label": "negative",
        "negativeWeight": 6.2,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-23",
      "title": "Kasus Debt Collector di Purworejo Diselidiki, Diduga Ada Tekanan ke Nasabah - TribunWow.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNZ1R1RnlWLUxnaHpYdW01bEdlVlRyRm1nU3JUa0hlbDBYNnB4QmNsQTZGd1dzbEtQbzNYRzhybDZPU3hTa29nRFZJdjB3Y280dlBza0R6ZEYyWTVLd0ZGc2xGWHNoWXB6RW8tOGlaUE90Y1YySHRtT00zN0dXYURNNlYxYkZBU0pKTUZyZGxBdGVmdmJheDdfQ2Vxc0xFVTJ0UHRXQVZjbUE4RHNrazlNWEVqTQ?oc=5",
      "publisherUrl": "https://wow.tribunnews.com",
      "source": "TribunWow.com",
      "summary": "kasus debt collector di purworejo diselidiki diduga ada tekanan ke nasabah tribunwow com",
      "id": "4fd89f3190cdb655",
      "domain": "wow.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d64a8b6fb1299862",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Komisi I DPR: Literasi Digital Kunci Cegah Masyarakat Terjebak Pinjol Ilegal - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOSUZwM25TTkxkZHNrazNBUkoyVDV3V3hSTVVZVnJGeWExUUJfVksydHFXVXNfVVJOZmE2cjBIeFctbHJ3cFp4cjVXa0IycUNqRHU3VGUwNkdTajNBaFhPelVpZm5qNnpGbFpVN2hpV2xXY0lMd2sycFVKV09kcU5mR0NmQWZ0NTczdjNueDZhVjExUERWcFRKYjY1d0cwWDMzSEdCM21tR29BV2JId3Z6UVlYYndPUQ?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "komisi i dpr literasi digital kunci cegah masyarakat terjebak pinjol ilegal rri co id",
      "id": "7596921b14a6772b",
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
      "eventId": "auto-08f423814e791efe",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-23",
      "title": "Kronologi Debt Collector Ajak Ngamar Nasabah di Purworejo, Berawal dari Tagihan Utang Rp 4 Juta - Tribun Video",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOVHc0SGd3VW9VQU1oRmtGMlFkeElxYmhuWVduaTFwUnZHVEQ4aG9MR2lwdEhVVnNKbGFzTDhOeTNONHJKdlBjanFpWFBVU2Z6bGIxNENoaURMcU40Y2RZaEh0YnpoTzU1amdiMmY0WUJSMHhCdS04bnYtSjlkakM0emhDUzFpUEtHVl9aMmNwM1dxT01VT0JXWUdDY1RsazgzSVlUZWY5ZG00OFlNanhLbkNBRkV1ME5GdDNNak9WOEo1T3JzSWRBUXhtbko2d3di?oc=5",
      "publisherUrl": "https://video.tribunnews.com",
      "source": "Tribun Video",
      "summary": "kronologi debt collector ajak ngamar nasabah di purworejo berawal dari tagihan utang rp 4 juta tribun video",
      "id": "3e37058bfd052a63",
      "domain": "video.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-18224cbf762d277e",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Laba Industri Pinjol Tembus Rp1,08 Triliun, Tumbuh 37,43 Persen - Nusantara News",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOd3RmanBuQW12TEtQYm1EdXY2aTZhajZlel9xdTNLR1pmR1hoUjVfQ201c2hIZEphNTIzQkxCWGhfcXd4MnhwRnZhWFp0cWVaQ1RBUzQyVkNaMFFCM2JtaGh3QU9ZSWstS3pJb1JIZWxTZXNoZUVlaUNhTWRjTTAyUFpDSzc3VktSV2R1UWFR?oc=5",
      "publisherUrl": "https://nusantaranews.co",
      "source": "Nusantara News",
      "summary": "laba industri pinjol tembus rp1 08 triliun tumbuh 37 43 persen nusantara news",
      "id": "dd690d88fa3a0e4f",
      "domain": "nusantaranews.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 34.6,
        "label": "positive",
        "negativeWeight": 0.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-938a68625824d5da",
      "eventType": "industry_update",
      "eventSeverity": 0.18
    },
    {
      "date": "2026-07-23",
      "title": "Nurul Arifin: Literasi Digital dan Keuangan Menjadi Benteng Utama Melawan Pinjaman Online Ilegal - TEROPONGSENAYAN.com",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOUXl0QTFOY0tvQ0xFd2lCUTFoYmJGcG1BbmpRbk1hbmhzQ0lFSEx3R3dPRFJqODRyaXR1VVlIZWVGcnhkaTRwZkE0a0tJYlZRTzEzRTBJNFpUXzZZNnZtcVl2T0VFa3NyZnR3Ui1odGlYMkhaV2d6QktlVWNPQU1DMjZWdnpfUUZ1emtVWkZZbms2MExQMml5RFFHSGVpN1l6RVRWRElJUG9sb0hUUnRoaXpzX1ktUGdmQ1p4NE9yaTEyRXBTZ3RNdzFn?oc=5",
      "publisherUrl": "https://teropongsenayan.com",
      "source": "TEROPONGSENAYAN.com",
      "summary": "nurul arifin literasi digital dan keuangan menjadi benteng utama melawan pinjaman online ilegal teropongsenayan com",
      "id": "1dc039c9aaeef4e7",
      "domain": "teropongsenayan.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.9,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.3,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f168ede74fde0418",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "OJK: Gelombang PHK Bisa Gerus Kemampuan Bayar Debitur Multifinance dan Pindar - Infobanknews",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQRjZxaE5NUmYySGotXzFPMkpCLUxXamY1bkZMOU9XOEwyRG1BZVYtX2REUi1Nb255QTRZWkJmMGJ2TkJtWDItbmxJZnlxeTMycEE0R0s5N2Q4cFlOcTVtZUNhTDVpT3d4b3lWSy1mTzJrRF85VHF3S3VCb1cyYndLWWVxQ29PcEU3bU0zeEQtM25iWUN6WnFLdGNpV1RxTF9ZQlpJ?oc=5",
      "publisherUrl": "https://infobanknews.com",
      "source": "Infobanknews",
      "summary": "ojk gelombang phk bisa gerus kemampuan bayar debitur multifinance dan pindar infobanknews",
      "id": "c905346166c8b699",
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
      "eventId": "auto-1e6611f65e3f04ee",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Pemilik Kos Wajib Izinkan Alamat KTP Penghuni, Perda Hunian Layak Surabaya Tuai Polemik - Beritalima.com",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPMkl3c0ZMVUw4NkNsbTdYTERva0Y4YXd0T1E2MW1DNW1CNTJ6WTdteFY4TUNCV2pVeDlNLVJFMGptWER2OUdkX1k1M0RHNmRGSUhLa2lCV2NFRklYNk50WjZTYnlHX2N4U0E0NDRzVGExVGZFbGtTNzFSUmlDQWR5THl5LTJ1TENfRnYwUEVXdy1LZWpzSjY3VER6d25tb3E3dXN0OUo4THdGOVM4Rmtz?oc=5",
      "publisherUrl": "https://beritalima.com",
      "source": "Beritalima.com",
      "summary": "pemilik kos wajib izinkan alamat ktp penghuni perda hunian layak surabaya tuai polemik beritalima com",
      "id": "b8b05cb5ced703ae",
      "domain": "beritalima.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-eee86f7fbcc69cd2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Rumah Warga Bantul Diduga Dirusak Debt Collector - Inilah Jogja",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE14QnBYdGU0Zk9jNUJybHV6UC1JamtSdGFzSmJZenVpaC0wdWE3UXRZMXZUTFh6bFhienBkN0d5VDZUSHdyRktxQW5RWVVXeTFZOHhIanA3Y2dKTUE5Z0M0WFNkbkVQQjFTa0FteUxDYnQ1Q1Y3Zk9lLUFVc0NvZ9IBhgFBVV95cUxONWUwbHltNlgtM2hZVS01TTc4amROeG1HSjhvcFViWEhyRk5PWVcyLXE4T0JfanhrbWIyVWZUMExaWGZNZmZPOEgtSWZTN3g1LUxYcHdENlJfZmFWcU1yNUJjaUNvbHpaYmkxR05PY1RZdDR3SVV1WlR1SkJMVWZZcExaYjFTZw?oc=5",
      "publisherUrl": "https://inilahjogja.com",
      "source": "Inilah Jogja",
      "summary": "rumah warga bantul diduga dirusak debt collector inilah jogja",
      "id": "48870282f13acf5d",
      "domain": "inilahjogja.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7e7efdadea6100e4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Viral Dugaan Pelecehan Seksual oleh Debt Collector Kredivo, Korban Mengaku Dibawa ke Kos di Purworejo - Magelang News",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQZWUySU5yUUdEYVpBeG1NZk05ZFpFM2tFdWJBc21Pem9YcHJYNFFwRTdvbUNCV3FjVjh5MjZJRENGZ1I4T0JrSUxOdVZ6UU9YQVhKY0U5eDh3dTRpakdmREphTWt4emdqODVWQzRab2todkJTSEJhcWxyWWstdXVfU2JlM1l0ZldncElza2M3OW1WMWNaTjh4WkJpazhtRVZiTjhSOWFqbjdxcE1rQzBTYk5sS3N6LVFZWFI0ejZuamZXT0h2Z0plR1ZrZ2FuVHVyRk9Z?oc=5",
      "publisherUrl": "https://magelangnews.com",
      "source": "Magelang News",
      "summary": "viral dugaan pelecehan seksual oleh debt collector kredivo korban mengaku dibawa ke kos di purworejo magelang news",
      "id": "a0953bd24dfc8c11",
      "domain": "magelangnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 6.7,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-23",
      "title": "Viral Dugaan Pelecehan oleh Oknum Debt Collector Pinjol, Polisi Masih Selidiki Kasusnya - TribunWow.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNVGFyVTVoRWZlR1pLOUhNWms0ZU5Xb2lpOU9ZYkhZNHpmQlg4ZkRmUXJ3Mjd1MjJyaXRVVzhEeUVNOU4tV2h6cy1EbllISVlxejBCNHNQSWthQzlqVHd2aUhnTGdXWllGZU1VNGpOcjh5YndOYzZ5bHprampEZFBlbzZKV2dKOWhkS2xPTUM0R2RSODBia0o3N2sxMHBjQ0RNLWJuVVBVYUJrTXNfRmxJSmo3alBodVlGWENmOU9qa0Z1Sl96?oc=5",
      "publisherUrl": "https://wow.tribunnews.com",
      "source": "TribunWow.com",
      "summary": "viral dugaan pelecehan oleh oknum debt collector pinjol polisi masih selidiki kasusnya tribunwow com",
      "id": "388ee05754c4235d",
      "domain": "wow.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.0,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6e394600d136a122",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-23",
      "title": "Viral, Kronologi Debitur Perempuan Dilecehkan DC Pinjol di Purworejo - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQNDRKRmNrcE1vV3EyUm9YWUIydkZJdXhiTW41bFlIaGFyaGV1X18yN1U0Y1NGVVA1Rk9nVURVTXBHNDFweVFTNHlnOEhjaUU3eXhyR296T1o1UmdONGxUcE9tRUJ0N2hod1NFV3lJclJQQ0xJWXd6VHpHdkhuaWdxMzZQcEpJWTZHb05JdENtQ1h4QlFnRkNHRE1yUTFhLUM5T3NVeFpEZzlhZw?oc=5",
      "publisherUrl": "https://jateng.jpnn.com",
      "source": "JPNN.com",
      "summary": "viral kronologi debitur perempuan dilecehkan dc pinjol di purworejo jpnn com",
      "id": "8039c8fe5eaf833b",
      "domain": "jateng.jpnn.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-55420b05db477fd1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Viral, Video DC Pinjol Digerebek Bersama Nasabah di Kos Purworejo, Ini Kata Polisi - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPMmtObW5BSVFBdXdTT1A2SFVlcHd6SXNHMktCYW5qYmpGNE5UX1E2NUVwOGFoMkxTTmc2OVV2WllTUmdPTlhHWHJKWTd5eFYydkFoQUFQSGE2M25WSXJaRmlkYnBkNUZTSFpVcVJYWWZYRXRyMnpIT1Y5aHRBVXRjR3Z2dWJtbnA0bVZBNS10UUVYSUV5eG1JOUN4WUt4Z0FaazVMaWpLUkVoZVhvT2xKSzVoN1BmcHk4aElnZGd6d2xNczA5V1E?oc=5",
      "publisherUrl": "https://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "viral video dc pinjol digerebek bersama nasabah di kos purworejo ini kata polisi kompas com",
      "id": "eabd4bdd13d57dfd",
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
      "eventId": "auto-a6461bbb01a544b1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-23",
      "title": "Wanita Bersuami Hampir Disetubuhi Debt Collector agar Bisa Lunasi Utang Pinjol - rmoljatim",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOQTZhXzZaVk1aMEp2MVdDM3phNE9wY2ZfM1FPV0lVRzJNZlhUWGJtT01ycmtMZ1VNQ0dNOF9DMDBBRDJ3a1FYNWFCUkdnYXpRdFBaeWhvWjYyY1NEM2RWVHFtWEJhWDhCNTRWYmwyZG9uZFpQOW9uT0RSdDVCOVFIZWtFeUpfM3VaMXJRQ014bzctVmF2ZW5zc3MtLUtab0lGb0toZlB3?oc=5",
      "publisherUrl": "https://www.rmoljatim.id",
      "source": "rmoljatim",
      "summary": "wanita bersuami hampir disetubuhi debt collector agar bisa lunasi utang pinjol rmoljatim",
      "id": "e0603bcbf2481969",
      "domain": "rmoljatim.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5b38dc9795871205",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "AdaKami Bangun Akses Air Bersih dan Sanitasi Layak di Dusun Banjarsari - MIX Marcomm",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNRk1FY1F2dERNNjAxeGtnWnJZeVotTUprQ1RlQWZjOE5DRE9oallMdjJqMDJmNjZzTnNtZUFxNXRFVUo2cjdSaW81Ni1lYmpxZ3FYamR1a2J5R256VEtlRndDaW9QYXg4Nl9oUEpvbWc3ZHZRbzhFeUpnZ3g3RG5YUTdzRExLSHRjLUhXWVlVZWpqZjZ6MlpRRnR5cF94X2ZLY2c?oc=5",
      "publisherUrl": "https://mix.co.id",
      "source": "MIX Marcomm",
      "summary": "adakami bangun akses air bersih dan sanitasi layak di dusun banjarsari mix marcomm",
      "id": "515fa0b4f390970d",
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
      "eventId": "auto-2dcb793673d2cef5",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "AdaKami Bangun Akses Air Bersih dan Sanitasi Layak untuk Warga Dusun Banjarsari Lampung Selatan - PR Newswire",
      "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxNWDVVbUlxRS1EX0ZwVGZBZjZxaHFyMHBNWjVNUk9FN050WERWUTVmQzlUM1NCUVBqRko2ekJ3ZmlnRlQxX2FBTkF5VDU0NTdXU1h1eEozVTFBcjd1dGp0RmxjclJvcGJvQ19GUHgxQWdnSDVKSno0dWxKcHduSnNiSTNmbjVsTDNVbEpVRWhvamo3bnluQ09ZTlVlcTN1VmlyMWdqOGFGVnVmN2k1YlhIN0Nra25tMkYxZzRBcnF2a3NIU05KR0NnMXpKbmJIWDlVbFNCSWNSaXNrcU5zZWNPZnI4SWcxbjhj?oc=5",
      "publisherUrl": "https://www.prnewswire.com",
      "source": "PR Newswire",
      "summary": "adakami bangun akses air bersih dan sanitasi layak untuk warga dusun banjarsari lampung selatan pr newswire",
      "id": "1bbc05a7f931cde2",
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
      "eventId": "auto-19446da2fe192523",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "AdaKami Bangun Akses Air Bersih dan Sanitasi Layak untuk Warga Dusun Banjarsari Lampung Selatan - Tirto.id",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOV2FxcDFYR3hISUlncDVxNGUzN3cxNFJMUWUzWVdRQ3RLTllnSV95Z2p0Q1pFQy1SOHp3UTFfTnFJT3AzUFFieGN2WVh5aHFOSkdRUEhSMEVRRlRwOFplYmFJb1RMUlBtS2RLT3VrZzJvcWhKaHVrTkZBVUo2ZTNIUmRyajcwNVBPb0hCRUVOSkdHQ2ZZalREbjJYdWtfd0JBTFY5ZG1iNHhNQ2tzSlNzQUZBbUJHY2Uw?oc=5",
      "publisherUrl": "https://tirto.id",
      "source": "Tirto.id",
      "summary": "adakami bangun akses air bersih dan sanitasi layak untuk warga dusun banjarsari lampung selatan tirto id",
      "id": "5bf83d8311a22b90",
      "domain": "tirto.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-19446da2fe192523",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "AdaKami Bangun Akses Air Bersih-Sanitasi Layak untuk Warga di Lampung Selatan - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPZGFUMy1VNXRVU01lRjVuSl9xN3lPYkdFX3d1NnhVUHRIbU9fNUcyTXpXaS0zd0kwT3BuZWh5Ym5MTE9xclIzSWNxQ0cwSUtFb0R1MWwxUVpsZ0ZyTFg1T0VteE5MQVhpcW40RHY5SUZlNTZTVzVYbTlSRUIzWVd2NWhWSXlSNUh1WXoyZ1ZpLXpYUEswYjBmZ3BXS2VHdEtnQlVHQUJB0gGoAUFVX3lxTFB3YVRkSTFOX3VDUGIzbFdqNlBjb1YxX2Y0VnJRYmdiTlFGb1ZUWHpSYjBOTGhHNVRxazNFcml6QVJXOWZoN3JPbENMclQ2d1hQMUI3aXE2LW5oSU5QWHI2ZE5KUUlaSzFjOFl5eHZscGZsWFZCQ2xNZEJma0w2NHlyRWFnNWZILURIVElJS3BNMnI0NzlqQU9WaEVCNDFDNDI0ZlFPSkNhYw?oc=5",
      "publisherUrl": "https://www.jpnn.com",
      "source": "JPNN.com",
      "summary": "adakami bangun akses air bersih sanitasi layak untuk warga di lampung selatan jpnn com",
      "id": "81d114af53bc5be2",
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
      "eventId": "auto-98ef4aa1555220eb",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "AdaKami Builds Clean Water Access and Proper Sanitation for Residents of Dusun Banjarsari, South Lampung - Tirto.id",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPMVpWWDBxRmhGMnFNT2lGazdjLWlKVm8yQm90RzZfYzlnaWdpT2cwZUVCWU1rdmdZYTN4YXAyY0xNYWZiS3lBMDdTWUdOMldKbkJSUy1feXItWGdLU2pHTmozMFZ2bTJZcnEtdHlVTV9qY0JQODI3aUc1X3RlRm83VF91d0FoTktqWkFaYlJyRGtDRWFQbUZfSDliTWJHelpwMHptV0xEUC10SmVOUkFrYlRPRllWUzMxZjBRLTh5RExsY1k?oc=5",
      "publisherUrl": "https://tirto.id",
      "source": "Tirto.id",
      "summary": "adakami builds clean water access and proper sanitation for residents of dusun banjarsari south lampung tirto id",
      "id": "f09155f6091d5bf7",
      "domain": "tirto.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c182c073fe413563",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "AdaKami Wujudkan Akses Air Bersih di Lampung Selatan - Marketing.co.id",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNTnpoQ3Rtc1JnN1FJakVfYmJ2WVhPUFhRMXdqOS1uVlNaQUdwVVZ6UUk2UnNDT3d2aUhtTnNBbnFUakVPQjJLQllYRGU3X19jMnJGbWN3d1hRUjRHbU1mSk1EYUFGQVZraGFvZXNEYktpTk5RQmxYOXhOWUw2OHJjMFZBTQ?oc=5",
      "publisherUrl": "https://marketing.co.id",
      "source": "Marketing.co.id",
      "summary": "adakami wujudkan akses air bersih di lampung selatan marketing co id",
      "id": "2d339910cff60f33",
      "domain": "marketing.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4f2b80e849aa3d94",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "AdaKami dan BenihBaik Bangun Sumur Bor, Perluas Akses Air Bersih di Lampung Selatan - republika.co.id",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOdG9WaWtZeTBCWHJPNklSbzU3bS1MRVlMNERRQ3BrbEU0NTVhVW1DZUgyMW8yaXI1STA2STNlVGFrbHVUVVluQ3EzU2M0TTYyM3ROd3dsaDIyMkhPeFRHQUk4emdXcGxJMDZadmlNTlpWcHlQMWtWQW5ndjZ2cUVIb1hhZ0lOSVBVZURJMUxwSFV0dXBlNWpxTWFKTXdXWW9GWm1wTlJ4REJtY1E0d2xUUHhjLS1KUUhDSXB0WFhIYmE2Ul9GRlJIejJn?oc=5",
      "publisherUrl": "https://esgnow.republika.co.id",
      "source": "republika.co.id",
      "summary": "adakami dan benihbaik bangun sumur bor perluas akses air bersih di lampung selatan republika co id",
      "id": "09314dd11258bf58",
      "domain": "esgnow.republika.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9283dee4d81e39bc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "AdaKami dan BenihBaik Wujudkan Akses Air Bersih bagi 122 Warga Lampung Selatan - SWA.co.id",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOb2VPY282SGNMYUZLSGttREVFQzdJZXI2SGlRRk1zb1BCOXRCZTlaaUR1aHJITk9iUnRzNk45YXRKNnE5VGdCVEQ4T1gxVTFFNUNENGhKTkhHR1JORzk4bjVkRVJRZ09UaDdUR3Q1Qy1oZmx2MWt2VFNHOVNFMXJiZmNSUFRiekdrMy1USVEzTE9nVHVNTEhLWnBtSkxFOXJvSnFKMTZfeUN2c3dC?oc=5",
      "publisherUrl": "https://swa.co.id",
      "source": "SWA.co.id",
      "summary": "adakami dan benihbaik wujudkan akses air bersih bagi 122 warga lampung selatan swa co id",
      "id": "9bb21e1fb48507fa",
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
      "eventId": "auto-0dbf86ed26b24504",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Anak Maluku Diedukasi Bahaya Judol dan Pinjol - Klik Maluku - Klik Maluku",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNSEZLei1mcFg1cDJjOHB2ZzI3VTRydVRub0Vma3RhNElLUzQzQVoyTFVhVVQxaXVuODh3TjRFOGNITTJYYjVxUFNQbW1WaDRvbVZGNkdIMjU5OUt1bmVxWDdlQlZETmc4bW9qYjI0X2NKQnBVcHRIaV9pc2dyLTJ0ckpQS3Q4S1FVaktwRlFFOUZ1Tk9UZ2R2cUx3NlZ5R1cz0gGmAUFVX3lxTFB2ME9wNDdFaU43czJ4RjlIbUxfUWp4enQwMXVWWXYwb3M2ems2OUp1V2V3YkxoZVMzTWxKVUNwbVF1MUMwbHlVVGw1Mnlrbl9HU0ZtZDBrUjJRWkhDa1hhcEVlVGxicGllLVdpRVR4VVd0U25mTHpPdXlZakN3QW1KMkExY1I5MTZ3VHF6eVBUekRycFpEdmdFVDkxbkZibFBzUWFJdXc?oc=5",
      "publisherUrl": "https://www.klikmaluku.com",
      "source": "Klik Maluku",
      "summary": "anak maluku diedukasi bahaya judol dan pinjol klik maluku klik maluku",
      "id": "5b3f14752a106049",
      "domain": "klikmaluku.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-e16df0392c5e2e47",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Bolehkah DC Lapangan Menyita Barang Debitur Secara Paksa? Ini Aturannya - rbtv.disway.id - RBTV Disway",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPZTNvWjZWb1lLX0F1MURaZE5ma2p6bk0yMVVfSUpNQkJkX3VPRFdNcjVFQ0VTZE8zREw4ZWZKaDROcVlNYUctN1U2OEQ5R2ZxN2F0TFp6ai1MTnZFRnNSYVRvT2ZnVWpOamtsQ01fVDZKMmMyM0U5M3lBUkV0WmlZNndZaWliRmIyTDdlSFRIMEFyOXFlT1E1Wk5kZmhRU0MyRUFsSmVERUdnRUs3MmdtRVdpa1HSAacBQVVfeXFMUC1sX19WUVVyOWVmaHJvVDZCU25RVS1OdFZFNi1mMWVFQ0pxdndIWk8tZlBxUnZFZEJSODROaVBXTjhVWXpLbEg1dVBuX2FvUDNqV3JOdko3VGJKRkdacGdoNERWXzlvZU13UHpJV244bGdYbW94WHpLT0V1SmZ4ZklwVG1sZl9OWFRVYUVaY0ExZUJZb0FWdE5CdEVmOUNoNTFTckdva1k?oc=5",
      "publisherUrl": "https://rbtv.disway.id",
      "source": "RBTV Disway",
      "summary": "bolehkah dc lapangan menyita barang debitur secara paksa ini aturannya rbtv disway id rbtv disway",
      "id": "18b52d43b036c70b",
      "domain": "rbtv.disway.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ac080cca2423301f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Bos Kredivo Dipanggil OJK, Ternyata Ini Pemiliknya - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNenAxQ0xZV1ZvcTZhcHd3YzNWQ1RaYXFqT2VScWlxcGtBN2Z2OVRndkhuQVVDZWJIVEQzUkpPWUplRzFjRWltVFZLejdhcmw5bUpQRXUwbjJDeWFkMDlsNGhwUFJYWlNxNG1CdEE1UnhzYXZSdXoxTVlhUmdJbHNTanNMcTlvRlZqWjlPZ0h3eHlHYldBZW1vZmhZNGsySGJhNlpUYThNVDRsYTRQZzJqU9IBtgFBVV95cUxON2FRUnI1U2prZTRjRW5TdW42ZENSNTFCcjFUNUpuM2NNY0hCcVpfVFRqY3NhTFE5c0dEdnhTOFd4OTVLMDJ6NTd2UVp3UHI0QnJqa3psSWVpdGpjVTFaRFFja1lnZlduR0RSUW1ZTWdqNzlmNWEtcjJMakN4YVNhV2tIRzhmbzk1Wi1tU1hWcV9sYVJoNWY4blZBUWRHN2otcDFia2tZanVKVE91ZHFJS2ZxdFdNQQ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "bos kredivo dipanggil ojk ternyata ini pemiliknya cnbc indonesia",
      "id": "65c5fa4e663263e5",
      "domain": "cnbcindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6f42bf0dd2555f44",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Buntut Dugaan Penagihan Tak Patut, Simak Perintah OJK kepada Kredivo dan KreditFazz - Iconomics",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOZXE3b3ljLVUteHhKd0J0VHRJbnhHT3dQOWdOdGtZbzE1cjJEZzVQc1Z5V21fRWxpQ0J4NWZ1cWxfRDdCYU1hNVlHZFQ4c3E5YWUtTU9FeVltQ05mbVkyZnFkQjAwSEYycHZPeVg3YjNGTUhDMC1WaWtkQ0cxdWhpOWhlTnVHdnBLS3BBNlJKY2syY3JPSEFRWEJsZjBfTkQ0QzNyaFNzQ2NUZW9kbTRKWkw3QUhnQUNVZV8yZmVHUXZQY2Y4R2MwYQ?oc=5",
      "publisherUrl": "https://www.theiconomics.com",
      "source": "Iconomics",
      "summary": "buntut dugaan penagihan tak patut simak perintah ojk kepada kredivo dan kreditfazz iconomics",
      "id": "fb8cbd9ed476a793",
      "domain": "theiconomics.com",
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
      "date": "2026-07-24",
      "title": "Buntut Kasus Viral, OJK Panggil Manajemen Kredivo dan KrediFazz - stockwatch.id",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPNTJSYjV5LXN3NUlsbXBha2MtWkxwOHNmWm9pek5xVWxnWUlDY3VqSHEwbjdEX2YzajJtVkUweXNnblZmQ241bkFMV3lUVmdidEhKdTRZVF9QOGVDUkVVZ2V1UnZ5M2lCeDJhSEo2b3FlRm1EZUtaWUtwYU9IM2ZBc1o2TXpuVDRvRFZoZUZn?oc=5",
      "publisherUrl": "https://stockwatch.id",
      "source": "stockwatch.id",
      "summary": "buntut kasus viral ojk panggil manajemen kredivo dan kredifazz stockwatch id",
      "id": "523f15018e5a238c",
      "domain": "stockwatch.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 1.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Cegah Investasi Bodong dan Pinjol Ilegal, OJK Papua Edukasi ASN Kepulauan Yapen - KabarPapua.co",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNdzhzVFVUV20tc1c5OG9NTWRTc1p3TUFOLXpTZ0UzWGhXazBsTUFQejUwRHNFTHZEZGpqeENMNC1TaEc4N3pUd3diUEZGaDlEeFByN1dNUGo3R1Q0eGszQjhJemhISkliWHFISGdqb29jVHoweWk4Vk5GbkdIek5zVm5Ba0ZCOGY1UEh0YnUyeUE4N0Y4M1VIakoxYklVdlNhZVpN?oc=5",
      "publisherUrl": "https://kabarpapua.co",
      "source": "KabarPapua.co",
      "summary": "cegah investasi bodong dan pinjol ilegal ojk papua edukasi asn kepulauan yapen kabarpapua co",
      "id": "6ef6bcd5b5df82c0",
      "domain": "kabarpapua.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-bdf3d5793231f4ea",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-24",
      "title": "DC Pinjol di Purworejo Ajak Ngamar Nasabah Nunggak, OJK Bertindak - murianews.com",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPVkd0aFdlWmp5UFAzbndEeWc4SFR0REwySzRiSFdpQWkzNE5hb002VGVjTmhKVjQ0LXN2RmRNMFpmbHNMM0xIM19ITnlfSXhvcDFfOVVWZmpvSmdNbHYwWGRxcFB4WkJUZWxKRGdlRVFMRmFDUW91cGFxbXh1Q0pVZ1ItQWkwaFhzanRZOE9mZGdHMU5taU8wRmlhNTVOR0JHbDdmOG8wYmNwLThqSjZydFZZbWZwcnM1TEdn?oc=5",
      "publisherUrl": "https://jateng.murianews.com",
      "source": "murianews.com",
      "summary": "dc pinjol di purworejo ajak ngamar nasabah nunggak ojk bertindak murianews com",
      "id": "dcb4e905dbdd9309",
      "domain": "jateng.murianews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6da1fffcbd145840",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Debt Collector Kredivo Bermasalah di Purworejo, OJK Turun Tangan - Merdeka",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNWHRKZjF1bHVLdjRVQWt3bVNWa2t4VFZEZFJzNmRLOV9pV09FUm16czl1Vmx4Ujg0bzM2YXl3UWlIbU9uOGZzdXhxdFhTTzVZMzh1a25vMWkxSjBodlBGdHQ1cWlmWTV3NldQcnpMVWppMThHa0NSaDBTV1V0dDl6X3d5NzROSUlmbGVTUVpLdmhySzFUbE4ydWRzdWozc052bVk2LVhKeXF4OGEtREhTV1pB?oc=5",
      "publisherUrl": "https://www.merdeka.com",
      "source": "Merdeka",
      "summary": "debt collector kredivo bermasalah di purworejo ojk turun tangan merdeka",
      "id": "67a0313a6dde9e46",
      "domain": "merdeka.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 70.3,
        "label": "negative",
        "negativeWeight": 3.6,
        "positiveWeight": 0.7,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Debt Collector Kredivo Diduga Lecehkan Konsumen, OJK Turun Tangan - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOUWdpUkVlUmZ2YXNJMmd1dDdDdk9sYXZjd3pGZVFhSFhpVDVjVUhUSlNqMzdDOUVlSlV3SzNEODdYQUtTb2FTRW1fSmYyZXVTWEc3bU9Hd2ZMYlZFSVY2aGRnOXIxQVVVQXktWmxIR09TZ2Z6blZvbTJEZ3RaWWlVeWxlc196VU51dVNRdDFCYWtjU2ZIY3VkajRzNU8tZnNFM09TMkZBVjl4emhm0gGyAUFVX3lxTFBJRXNORlgyMy1ua2R4R3ltVERVRV81SHNOZUMzTUNqS2lBUDY2TkVWczRNV2YxMlJKZzhQWUwzamF5Qkd4NUU3U3lEN3ZUbFdFMk9qbVN4a1JZYnAzeXRrUFhCV3NLNkRNSlFEMjZXdXZOMGlNZ05pVjI3Uklua1l6SkszY0tZWWNfVEdFd0RJYkZUZTN3VFlFYW1ZdWtFUWFwMVV0ZlhMNFc0YW1pSEktU1E?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "debt collector kredivo diduga lecehkan konsumen ojk turun tangan detikfinance",
      "id": "a94d2787b74292c5",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.7,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9199b69853c28f4f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Debt Collector Minta Hubungan Badan untuk Lunasi Utang, OJK Panggil Kredivo dan KrediFazz - AFU.id",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNc2VlRXRqdDB0NHlueEgwZXZVYUh3aGlnU0stdml4YXU4Z1ZaSmRqQmlVRF9iQnBPY2dVUWtmRUdNcW9PZDlmdFZxVU1NNGwybWkxUUQzWms1Y3Jsa21FVS1XS0ZyemNUd3FubmNzOURVakhScUdabUxCSXRPOFp4Ql9oYlFQRTNRSlZtcUZ4SXhqYzR5WkJBRjZROEJ0RXpncnduSUEycUFVcW1aZV95TA?oc=5",
      "publisherUrl": "https://afu.id",
      "source": "AFU.id",
      "summary": "debt collector minta hubungan badan untuk lunasi utang ojk panggil kredivo dan kredifazz afu id",
      "id": "5da8f87993b2d1e8",
      "domain": "afu.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 80.8,
        "label": "negative",
        "negativeWeight": 4.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Debt Collectornya Diduga Lecehkan Konsumen, Kredivo: Tak Ada Bukti Pidana - detikFinance",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNZ0cxQUVZZjRsY0Y2ZGtUdFVrb1VJUEFyaWV3M1JUNEdDaUVSaTZra0lNQldsOFhvRDFGakZfZUl5NjNzbmN0TUZyd0VldXVDY3BFS2ZmMWdCY2JoQ29icUREaGo3S3RKbFdSZW80Q01ITkE3WU8yUUVMYVlkUnFoekh0Z29OUEI3T3NyRmIybFhPd2trQXFNZzFraG9WaGl0NEgtbVR0RW9rVTUyblA1QjVLXzVaUdIBuwFBVV95cUxQWVhQTUp2aEQtYlBIc2plOW9SNWVuYmxocXQyVW8ycUREOHBHX3VOWXg2Y2piZjh0SHlTVGprc3lqZVhoZHVXbEZsOV9zQmgtcEJnMHVheDVwWG9RNGZxcGlvVlcySzhHWWRUVzZocl9zVTQyYWVqNUdYSnpvLVpMeGI0cUl3NG5aZWFzc0hfZkVQLXBTSmRObVcyT2VLZHdHS2ZQUENyekw2MlZLaEFXdDBDNzhxaWZXZlFV?oc=5",
      "publisherUrl": "https://finance.detik.com",
      "source": "detikFinance",
      "summary": "debt collectornya diduga lecehkan konsumen kredivo tak ada bukti pidana detikfinance",
      "id": "492be9f47a756857",
      "domain": "finance.detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f96c663b42638f5b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Dugaan Intimidasi Kolektor Di Purworejo, OJK Panggil Manajemen Kredivo Dan Kredifazz - Kompasiana.com - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxONUdENFNPYVhPTlU2aEZvQVFNTFpaQ2JxWUlpRVN5dFZmNERsRE1INFU5THdneUVEVEwtbGhBWHd4d1p4ZnZHZXg0cjFHT0tUb2l2OG1fSTVBcWU4SkZGWGxuZXlRUHRVVzk5elBjVGgwMEJ0cEJlUW1iRVFkczF0N2MtYzJoN3ZfTlk3UmdoUC1GWlBBVFRvVEtRaEFHYzVlS3hOY18yWndZb3lGeFl3aS1mcHlOaWFuUTIyYmJFcHNLNUNNWkVkSWp6cFVoTXhWUUhZelVYalROQ0pPNTFEatIB5gFBVV95cUxQSlJyZmJJWmk2eUlvNEFINDNYNkJmLUJwZWtLdjh1MUNWbW9CdVp4MGdsTlBzLTlCdXdob3pVTVZnMmdLcEZmUERpb29MU2IyMktra3R1YTVFdlcwS3RSd3dVYVFCeDloT0loWm1UVVJOUlhONU5aREYzbnhQRTJsZy1aRWRoM0Zab2tvY3VGX1dZLURuMFNhb0ZsVHFPQ0RoNlZoVFJsSkRxQVpKblNyZk8zQ2dZazhZMUJHUTJCaFZRRnRlZm1UaEtXYzJObWJMQjJUV016UC1qcGYzckJ3NE8wYXpZQQ?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "dugaan intimidasi kolektor di purworejo ojk panggil manajemen kredivo dan kredifazz kompasiana com kompasiana com",
      "id": "8994a9ffaac96737",
      "domain": "kompasiana.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 77.3,
        "label": "negative",
        "negativeWeight": 3.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Dugaan Intimidasi di Purworejo, OJK Panggil Kredivo & KreditFazz - Tirto.id",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOdWFRcTdGclJydnVZU0VMbDVwN2FjNEUzLXg2VmR4bGtXN2FkRUo1NXNOYi1kRnp5YnRCUVdBeXNPQy1zb2poZ1RuNDJUM201bVJlODF5ZXhYbGgyeW9rdUZYZnExXzdQTFlvd0Q4V2VUWXFGNGJhQ2VEUElfcEZudXM1R0wtWU05cjZZ?oc=5",
      "publisherUrl": "https://tirto.id",
      "source": "Tirto.id",
      "summary": "dugaan intimidasi di purworejo ojk panggil kredivo kreditfazz tirto id",
      "id": "3c217fc378a4e8a6",
      "domain": "tirto.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 77.3,
        "label": "negative",
        "negativeWeight": 3.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Dugaan Pelanggaran Penagihan, OJK Panggil Manajemen Kredivo dan KrediFazz - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOakp4YjVNVGVPU0NqWXpmVjVPU2pHUS13OHlzVm43Mkt3VkRtYnloWFZhRWNrSXlFTEJMcFlsU192ekhDa0U4LS1MSnludXVERzllclJ4RHF3cE1uS2k5R1pJcWRWOTN2TF83dkc3NjZoQzFFcnduSVdtdi1SVkNDSkV5WFBoUktreVJlNUlwU1BTUl91ekdCNXVkOWl3NlZ0T3lmOHcyeGFsekHSAaQBQVVfeXFMTXFkYVRTTWYwZFZVU2c5Y0ZpOWxTdlV2WXA1VkhEOUs4R0dyeE1aeHBtbTRiQWo0eXB3MWd6VXZISTByeVd3RWxHZ3QzTHJRU1BwWE5IbGRYS2dlMUF1OE5idHV6Qm5fbllZR1kya3ctU3piT2ZGblNDU09QdUExbWlHYW9GeTRyM2hBSEFmQTFwcU9aa0xsY0tuY1ZZUl9yTVlvS3o?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "dugaan pelanggaran penagihan ojk panggil manajemen kredivo dan kredifazz kontan co id",
      "id": "24edd40585eb2cf2",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Dugaan Penagihan Tak Patut di Purworejo, OJK Panggil Manajemen Kredivo dan KrediFazz - Stabilitas.id",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOTlZXRFFXczcxLW9aSXVRd2FnUS1tLWRpZVhlQnZJaGFNcjVZMnhTc0RMSGRjT29hYjh4NVdjWXZGLTdxam93UEZtT1YxMGJTZnRUYXlIODJyX21IRHZqS2lRdlVYOTRnWUxLNWxCR08wUmJjSlh5cnZfdHlrblVITjZJakJPM3FkSHpqOHNfbWM0Y3hNVFNkNU5XRV9RemI2VkJZSGNrZWV5ckVlU0tZ?oc=5",
      "publisherUrl": "https://www.stabilitas.id",
      "source": "Stabilitas.id",
      "summary": "dugaan penagihan tak patut di purworejo ojk panggil manajemen kredivo dan kredifazz stabilitas id",
      "id": "750fa92d35dd4cb7",
      "domain": "stabilitas.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
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
      "date": "2026-07-24",
      "title": "Foto : OJK Panggil Kredivo dan KrediFazz soal Dugaan Pelanggaran Penagihan di Purworejo - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPRVpyeFlHdjVVZUNSQkM3c0w3QTZ5bVlMRUZWV2VqMTliNXptUUlFRFFEckpXZERrNGdJVkpEZUlObEhNZ1ZvN1lSNWlGQXNJZmVYWWZVS0F2eWJUbXhVQjBYdFZRLXgxUG5NSHNVMklXX3JhVERTM1hJWDFtNmxCTVFoRjhHMVh5OVBNU281LUVJLXd6YVpZSk83aTVfdFA5bmVzdlB5al96MHNXU2lIRUpwX3UxcFF0QTRmTnZLdw?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto ojk panggil kredivo dan kredifazz soal dugaan pelanggaran penagihan di purworejo kompas com",
      "id": "b7072dccaecd670b",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Foto : OJK Panggil Kredivo dan KrediFazz soal Dugaan Pelanggaran Penagihan di Purworejo Halaman 3 - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOdUZDSHFWWnMyQUs0STY4OGlScjc5U3BDUWo2bVFfaVhwbjZsRE1uaDZzU1FUWmNDSS05b3VIRHFmb0F4Q2tPeExKMy1BbUprQXhyNDR2UEFCUWNFNld5SnVtN1VpZ2ZQSENfVkxUdTJybGNYUmNockFoMkFSQk5IWXpHSlNNLVVRVGJtbnF6NVBzV3FNcnpwTHN1UGQ5WjZYTHlRbEN6ZWQwdE5DWjFMVnpLMmE0MVZxWUFfTDI1NjBoWXM0OG1PXw?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto ojk panggil kredivo dan kredifazz soal dugaan pelanggaran penagihan di purworejo halaman 3 kompas com",
      "id": "6a9c14eabb5e9f60",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 76.6,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Foto : OJK Panggil Kredivo dan KrediFazz soal Penagihan, Manajemen Buka Suara - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNRjdLa2pRdmk0c0JYb2g1WklYNmZPelpXS0RlZU5lU3dYaFlNcXl3NFNyR0lVTFRUYmRmQk1SY1pvVXFYR0VKZ1BWOXl4MW9fcFJWM3hyS245clVFbkxoUkY1dW8wWndRNjNxRksySUhvZ0xKbHk2ZUd4WTEwSmdKQllYbE54OHRJLUxZSkNaNWJ2TmxBMkl6TmRINDBfWHpMR3VFUVhRdU9NQ2gwbHhHWWhSa3h0cEF0THRSYWlB?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "foto ojk panggil kredivo dan kredifazz soal penagihan manajemen buka suara kompas com",
      "id": "b2e94b233e1dffaa",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
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
      "date": "2026-07-24",
      "title": "Hasil Pertemuan OJK, Kredivo & KreditFazz di Kasus Debt Collector - Bloomberg Technoz",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPLXFYUDdHWU0yc29vMUZsU2l0ay1FY1o5YVBlRGd2bHNtTXhHYzZiQnl4QzEzbEFlRzhjLU5SX2pxNjFvT2hnUVJpaHNlakRsZzFYeDBRQVBPV2sxdWJRVnV3V0l3UWo3YmlXNGlZcXo2ek9SSjdrWkJMaFo3VWlnZDJmUUcxcHdLWkxvVUU5RUpQOWIxZ0t6QXdsY25Ed3U3UnQ2dktWVjFPSEp3VGFqaVNzc0w?oc=5",
      "publisherUrl": "https://www.bloombergtechnoz.com",
      "source": "Bloomberg Technoz",
      "summary": "hasil pertemuan ojk kredivo kreditfazz di kasus debt collector bloomberg technoz",
      "id": "4181e98a1ba2da66",
      "domain": "bloombergtechnoz.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f6f8298f1fd794e9",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kasus DC Intimidasi Nasabah Kredivo di Purworejo Berakhir Damai - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPVTVrYmdhcWtuNEgwUXRLVkpnTXNqeXpPcUUyZlBCREVZVHNzUlYzQkRhaUlzR2hybTlHbmV6ZUQzUTVZYjE1V2J2R08yWHBpT09GQlpNMzZfZUFrZ0EzTFNyQUtJTTdnV3oyTlRvY1dFcFMxdEpwLUx5VnZKNkxQSGRjdGZHd1ZJalpJbnViM3NvMlVvWFZNaHpid3RZbUppOVR0alM0cmhSUQ?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "kasus dc intimidasi nasabah kredivo di purworejo berakhir damai beritasatu com",
      "id": "5a6845adb977e383",
      "domain": "beritasatu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.7,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-24",
      "title": "Kasus Debt Collector dan Nasabah Digerebek di Purworejo Berakhir Damai - SINDOnews Daerah",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPZURQb3FGQnZOQU42NVM1MUFTUVVubVJSYmtRSzE3RzZ6Zlg4UURZSm5KTEw4WnEwaVhtLUpMVDktZ0sxVlA5SmdSLURCQlVURmNzNkpibXRYZ1VZTmxabUNPYmx2UEVxTkpqMXZIRktFSWJSVWc3NTFiWEpnLUd3ZXpKSHhYVjdaMTlsV2RvY195SUJyb1d1aGVRa0NGNTFRbEtzVzM0Q2syZzBjV2x4V2ZPb2dUeWJxcEd6M1RCMlZ3a3poR0HSAcsBQVVfeXFMTjZCaUJYWFBWeVk3ZUN5UEt6SW8yMzRqcnY0Z3Nkem0xMC1wYmM3ZXRXLVUweVdhQ1FBUXVNS2JzcmhmZmMya0pudlVEdlV5QjJjbVEzc3p4ako4UHBZdzJ2ZGhjb1ZXemY0ZTBVUkx3cVhJM3ZTVW9kSmxza29qQkM0RGIyVUpGaHJhbXVCZDRYWTc5RW54b1lDSl9Sc0ZZTGhkVC1jUjB3SXU3Ym9IRFdJLVkxZXQ5bXNrc2ZFY3NYU0dkWDF2WDB4ZG8?oc=5",
      "publisherUrl": "https://daerah.sindonews.com",
      "source": "SINDOnews Daerah",
      "summary": "kasus debt collector dan nasabah digerebek di purworejo berakhir damai sindonews daerah",
      "id": "6b403d5f46c37aab",
      "domain": "daerah.sindonews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 54.2,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ec0fda1d99993d0f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kasus Debt Collector dan Nasabah di Purworejo Berakhir Damai - Kompas.tv",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPWlhPdGxYREh1TjBBbXZTN0JFcmd4LXhHWDVtQXBnZjhkUGRNZDZ5MGp6OFpod21oR1lYRzFJb0JrU05qdmNZOHdTem4yVGdKU3ZTa1JQa2owdXhwYVAtRmh2QUZ4R1c3THFUbmR6d1Fia2VxWG54VVBaQUdSeHVGdjEzdnFzcUZRY2Z5NkxqZzNuU2N3d2QtamRjS1dXbTh5MnpYa2RPbHVOQVHSAaQBQVVfeXFMTWgtQkFtMmVaQmlSYVhwaDhOSVJmVHBFZXNpWG5TLWVmekxqd1RsUXk0Q0Q2QmN1OTNCcFNHTVAteEs2WEdYNnV4Nng0ckJBSUFxR3BLV0Y5UXJUa0tZeHZkdEl4WFgyVlZ2bjNuWDlFRUZOSERPUkw0WlB1cHlYUE1qVDFNSXlDb0VxWm9VUk1XM3VQWVNSV1FRbk5CUzQ2bktHYnY?oc=5",
      "publisherUrl": "https://www.kompas.tv",
      "source": "Kompas.tv",
      "summary": "kasus debt collector dan nasabah di purworejo berakhir damai kompas tv",
      "id": "8d427df6481fc4b9",
      "domain": "kompas.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.2,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ea0ab76b210c5baa",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kasus Debt Collector di Purworejo Berujung Damai, Kredivo Tetap Dalami Dugaan Pelanggaran - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOdERGaE9UNjd6c21GTW9BUlp5NVc1Wml1dHJTN1pValhNc0xTYVhJNXFGWTR1OUxZQlFaelpMTW9ObEVTbEVhNEp0MTAyNDhxLW9DNFFBTjBrcTM0THN3UGFmOXI5d1BFZ1Ewb0VVTzRxNmRobmR5UFZITVJ0dHNCcXZTamJ5bzFEaVhoSzhkRnE4NTU3dlV30gGfAUFVX3lxTE1XREtUeWxxWmJRTFpNOFBXTGNLM1FVQjZIdFp0c0cwZ3Jvejk2YmhVamhhWUV3REJvT052M0lCTVQyS1ljYlZsR2JMSWU0UGZnMmRaWXg1R1hoU1gtYnZHX18tS2R5TzlUN2dYclc1WmNlVC1jQktuNkRuek1IV2MxZGhqZ281YVlkbnZRTzNTTnF3MjNENnpmOGdHY3dubw?oc=5",
      "publisherUrl": "https://www.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "kasus debt collector di purworejo berujung damai kredivo tetap dalami dugaan pelanggaran qoo media",
      "id": "57864e8eb8f072e5",
      "domain": "qoo10.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 79.4,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kasus Debt Collector, OJK Kasih Warning ke Kredivo-Kreditfazz - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOdXRHUF93cTI1MHExVFFZblJIV0tJSjNYRnJDSU55aXVCckdUQU5DRDU2YWo5NU14UHpqV1h2QmgtdGVzb0lPeDAteUlqb3FBZ3Q4elhQSFk1Z1cyYkRGbmxKOWtWQWJubTg3QkFtN0Q3Y0h2c0JpMzhURDZSYzI5dVZLLWFnMU5xYTRnOW9mXzJmSHRPVDFvejdJenpkblktVnVteEk4V0lFMXlyZWgxMEpwQXBJNVI5TmY5RGprMNIBxAFBVV95cUxOdnZUd2pYRWxlWVRFM3dDTXZySHNzOEdHTWFEMzJhdURWc1ZMcTVSSEx5VFNtNDVER3hNY3lQbDhOZ1lMcmJ0V0MybDdqME9zZzRhQWJJcFdlX3dWNGVJeEp1TE1xVmYtTDFudkxvVkE2YnpKZ1Y1NURVR2p1OFo4QlRJZC03OWpocXJIcHd5MTc3Z0FfVlU2dFRSaTZJWF9hTWlwZy1lZzRBcGt1OUZlOU1PZ2g2SmdPNzJuR0oxZnpfU1RN?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "kasus debt collector ojk kasih warning ke kredivo kreditfazz cnbc indonesia",
      "id": "432061225e384470",
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
      "eventId": "auto-cca9e0baad9566cd",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kasus Dugaan DC Intimidasi Nasabah di Purworejo Berakhir Damai - JPNN.com",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQVENMQ2tXeUphbXdwTzk2dEhoQndYclNCU0U5MWZ1YkxWRmg2ZlZZVTdhSUhVbUg3LWp3RnVqbXlCS1VUeXl4V2k4TUxHUi00OXh2dGwwRENKd3BiWG40c0VUZThzMTdna1V0WnVrRnh6TUhYeDBpNFR3UnVnamxidjd1RGFHQVZDdFR5UWZwVUxDZ9IBlAFBVV95cUxOWUlLdXQzMWxDVnV4NXZydXRwRGNkUVp0STl0WE9LREtzYzNNYUhndVRkZkstWndyZDdjMmRjWGdIOGNtOE1HTnZvODdrRUM3RkVhWXdYQmtRNUhKZ0lOdjJhX25CaGFpX09WX2dPa0NlYnNRcWttT2swaVJieTR4QWxwakVpS0FkV3pPdTZlcUIxSm9f?oc=5",
      "publisherUrl": "https://www.jpnn.com",
      "source": "JPNN.com",
      "summary": "kasus dugaan dc intimidasi nasabah di purworejo berakhir damai jpnn com",
      "id": "e64920ebafed4071",
      "domain": "jpnn.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.7,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a0e8417559ede6a8",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-24",
      "title": "Kasus Dugaan Pelecehan Saat Penagihan Pinjol, OJK Panggil Kredivo dan KrediFazz - WestJavaToday.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOUFRackticjVENEhyN3FSQmZWbHc0amN0ZlFHZUp3MUJpY3NqUV9xYXNwNlRaUUxYdW10VE5BaWVhdVg4ZDNuWC1BWl9pOTlUTk5PREtCSWhXbk5mVElsTVFsZjVPN240MUpYbnRqU3JpSmFxbTVfYk5neEE2Q21rRWtpY3BxcU10eXY4bUt4ZHl4WXdzbVhKV0g2RWMtTDBDVXQ5TEY4RzhfN2xy?oc=5",
      "publisherUrl": "https://www.westjavatoday.com",
      "source": "WestJavaToday.com",
      "summary": "kasus dugaan pelecehan saat penagihan pinjol ojk panggil kredivo dan kredifazz westjavatoday com",
      "id": "416be4d757168ad2",
      "domain": "westjavatoday.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 87.8,
        "label": "negative",
        "negativeWeight": 5.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Kasus Pelanggaran Etika Penagihan di Purworejo, OJK Panggil Kredivo dan KrediFazz - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQNWxnVmhteVlmXzJRYW5KeENITllLUk9fc2RNc0E1UjZPVmhUVUNoekxkU0pXcGRlVkNoZVFhbl9YYVp5V1FITEhSbWhkbU5oVElkYk51cmVvenRnMHBRcWl5X1BmNFk4N2o2UEFHcUNCNnJROWt6TGR4cWFsaVNycklSemJFcHV6S19lQzVFVFRMY1d6S0dtRGJhSC10VENMYmFkVXNhTTZxQjFycmo5N3hIdW5PODFxOVE1SkRISzJ1QzVlRnI4emlINVY?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "kasus pelanggaran etika penagihan di purworejo ojk panggil kredivo dan kredifazz rri co id",
      "id": "6233bf614860ae02",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Kasus Penagihan di Purworejo Berujung Pemeriksaan, OJK Panggil Kredivo dan KrediFazz - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNQVQtWk1kYUlqbkpqVmdac0NranZjeGRkYXBpeEx5ZWgwdWJESFNFdHR4eEtaaXZHSWpYSXI0ajRtNnRFVU5jZWtPbmlBM0tCV0tOS3l6OUZmWDNncjdObll5YkJkX2N2U2E2UTdZUzc5NXpXZjA5WnBPS3h1UmxYZUpqRjBleVduVU5lbzRCVWRFc0pIY0VTNEtCdENHYnNLb0toUVpfbERzY0xXMW02X0FVRkh5M0d2dkJhMmVjQ3U1SnRtUUJZU0lSNTYxZW9Ob0xqRA?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "kasus penagihan di purworejo berujung pemeriksaan ojk panggil kredivo dan kredifazz bisnis com",
      "id": "9a65488cddcbb61e",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
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
      "date": "2026-07-24",
      "title": "Ketika Siswa SMP Berhadapan dengan Pinjaman Online, menga - Kompasiana.com - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNVTVJTVE0YzNCOV84UklBZ1hYWWZ1aUZSYkt2M0R3cm5hLTY0LWdYcFdkZzF6dmZEY2hrVFdxbDdrZi1vRWRRa1RmYk5RT3NUYWFKdTVRMnZjSHpXaEQ4U1ZsRU0taF9zYV9rMzhmSnJ6UGc2ZVZYUXNvSUpjRkV3SGIxVUhoWEQ1aThITWdBTFZzb29QMDRRR2ExeHdIMkJVcW5yT0htWXJ6TTB5YWJ3Y3pNT2VkUU4zakRvcEYzcUg2cW92LURCQVcwQktwSUJt0gHWAUFVX3lxTFBrazVuODBqeW45cjFXSHlfb3pOSjRjTnZzQzl0LURobml2VWk5T3pOYjcxaWNha1MwQzV4aGdOMjUtUXRwNjh0a1MzWjZDN3UycW9TY3ZPR3YtdWVSYWt6SUg2eWxCWkRHWjVWVmoxZXlnSlpXMmdNNXA1aFdhZktoX014NV8wRTFHZkFseGljWDBrX0JNX2dMRWR5MGYtemF0QkZZOWN2WTFrRGRTSnM0cmxVNWIzMGlNdVVfaDhQWnhrMk9YTGRRdGVYTHhXZ3RESWFhZHc?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "ketika siswa smp berhadapan dengan pinjaman online menga kompasiana com kompasiana com",
      "id": "5781ff5c18768484",
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
      "eventId": "auto-749222e1fb257d56",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kredivo Buka Suara soal Kasus Debt Collector di Purworejo - Kompas.tv",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPVG5ON185STlXdm4xN3BWMmVWRGlqMjhXS2lXMmFZZm55aVlTaU9KWWVPZjhTT1JBZ0pfZnUyNUowZmphRkZ3Z1NSUkdzZU9vb21KLXd6SVFvTncwT0k3WVdEdHpXLWFOOW9JZjA2MVlaNUlMTXVLTms4T1BtejRjVXJBaTNYVzZzeW83YTUzTExZRndLVUdzODd6dVVTNXRmc3R4RUdR0gGfAUFVX3lxTE93ME40QmlTX0dXSGxEaUk2SXBNTV9oMlVwWU01NUpheW96cTVEOVdraHJEcGdKVkFfcE52YTVMSkUwN2dDd0NsZjFkX1czTFdJU2lwa09ESzhHQnF3cURXb2sxZElITjM0TzlXNjRVUE5IQW9WamwySHVQbTNpNU9RcVlZRWFtODVONGRDZnRTdWFUM1JVU1JaOUVOelUySQ?oc=5",
      "publisherUrl": "https://www.kompas.tv",
      "source": "Kompas.tv",
      "summary": "kredivo buka suara soal kasus debt collector di purworejo kompas tv",
      "id": "c4cc0d8d3c24410f",
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
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kredivo Buka Suara soal Kasus Debt Collector di Purworejo - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOV1FiU0RjTjdmY2hPRE5GckF4UTBKb2pDTFJXRWZOa0RITGN4MDVCQWxOcWxMVFVlWENlV2dYWVIxcUZ3eXlBQjE5aHE5emxnSHlHVWhOT2hwODgxU3lQbWFheFN4UWxvYXl1dHpzUHBkbHRkeVZscldZVjZ4YXRSbnJJcDZyN2k4WW16c2RlN05xYmoyRnIzd25hY1R2eDVKd0RSZNIBmgFBVV95cUxQQXdFb2NXa3JmM3JqNzRqS3dsTHpRZldadW1SUlFxOHNleDkzbndGYjI5bFc0Y2xMZE94SWxnUGdnaGFUQmc5Y2V6eWtrMHVNYXpjOFdOMnBJVTl5STZIYTc4ZUNWNzJtbjZHOGttZ2M1LWVuaXh3c2ZLUzk1Zlk2d21KRlFzaTBJdWt5UW40cVRTOURJMlpzSmRB?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "kredivo buka suara soal kasus debt collector di purworejo liputan6 com",
      "id": "b551ba44885889ca",
      "domain": "liputan6.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kredivo Klaim Kasus Debt Collector di Purworejo Berakhir Damai Paska Investigasi Polisi - Head Topics",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWXFINmUtbURIWEpDdDNqR0xJS3l3QmxhaW5JWDdKeEJ4M0ZYNHJ6dkFlaEZKYkxqQThnM2JFb3dvbVJLdVplU25CODZoZmZCTjJCbmJVekRoay1HVDNwTTlsWVdHQnhnd0JWbW1zald0SkgyOTlka2N1Q1RJclE3aldiTHgxWUFETkZRUVBYZHZZNExwcGRSUHNqMEk?oc=5",
      "publisherUrl": "https://id.headtopics.com",
      "source": "Head Topics",
      "summary": "kredivo klaim kasus debt collector di purworejo berakhir damai paska investigasi polisi head topics",
      "id": "0231440178586b40",
      "domain": "id.headtopics.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 3.4,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kredivo Klaim Lakukan Investigasi Internal atas Dugaan Pelanggaran Penagihan Tak Patut - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPT0ExckE4c3FDRXl5ZHREaVVCRFczVG9GdVdCa05vVlVyUWd3S3hHZmNHS0dSWjNBVk1ZbmVqbUlreHh3Y3RLVU04cnhkYWdRMWM5dkYyejNlUzlyNElhOV81ei15blZObVlla0liUlQ5OGt2allyWG8wbTJpWnhCNGlwalFNTDN4RDZERzdRUlBwZHY2M0tpVktOaDFVUUttVVBfRW9SSkx2OXdFZkFhTE1aR0NDZnFqTmVxNTgtSVpNQdIBxwFBVV95cUxQa3plSlAtOERkeFktRm9TTDFJbEk5UTd1SmpRSEJfVVpzcm0yUTVsNldOOU5sX1c0Tkp3OVVCNHVuUzRZeTFYanRnRnFrbVdxM0Z3SnREeHp0MTUyZWQwUmpBZjBqN0NPM3VkTDNmMTNRMjQxZ1RCNE54Rkx6Yng4NkNaeDE5VzhGd3VKY2dncVRZWk1adjRzNmQtQ3ZYaGU1RmtDeVBGRzBocTdrMUJhRUUyRWVnUG13RmgyYWlpakpiUHZkSXVn?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "kredivo klaim lakukan investigasi internal atas dugaan pelanggaran penagihan tak patut warta ekonomi",
      "id": "b0204227b464c58c",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Kredivo dan KrediFazz Dipanggil OJK Soal Penagihan Debt Collector Tak Patut di Purworejo - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOazhBNllqVURYZTJXU19tVl83Q2JidnduejFPWVQ4R09rMzVYdl9sNzJvbVJvQjk2RUszd3Q0UTJRQ0pxQVZxUzFMWkw0OVE1MEduMmowUW5hd1I2ZEUxWG91TWxpT1lDNlpqblVaMG9UUzJBOEZIYjJPSm1wLXphYzNJb3NiazRuN0JjcnFCZUhDQVBCNDY0V3FDRGdXeHBHU29oMTJtbERFZWpLeUlscVRvb3ZCZXh0X0NSV1ZjSXZyYnVj0gHKAUFVX3lxTE4xVU9paVIyVExoTlNLT2s2NVZaSllGM1d3NkU5QnhUMkNOUmdjNldsT05tNDhzVUtRWDFsN1dUV05kOHh4clpFUjVlbkh1aldsR2FEQ3QzTHRpT291dVhxSVpPOEpSaG9IRkN1VTJBcWpfNFdTMHgzeGkxNEhEdWJlTXppejJzLUpic09PRUlIYkU4c05PWlpVTHVENG1USVBfUVBueGd6Y2JkYkxYUjZ6UWFQZVFnYlAxZjRVVVliYktOTEJubTZTM3c?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "kredivo dan kredifazz dipanggil ojk soal penagihan debt collector tak patut di purworejo warta ekonomi",
      "id": "86b967af1a8792de",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 93.4,
        "label": "negative",
        "negativeWeight": 6.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Kronologi DC Pinjol di Purworejo Ajak Nasabah ke Kos Agar Utang Lunas, Berujung Digerebek - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPZmJrUDllSS1WOTZLQ2FzaldoajlYa2pwem9Qb2RpWmNmTlJodmM2Z2lMY0V4TFVPVE51ZWlvazgxa000RjloMVY4UTFka2ctcGNVYzNObW5jOUxpMUREazdoX1N0cERIN2wyVV9hVzVNdnZseGMzcWVxaVdYMi01Zk1Od05xSGhPX1NRLTZiczdFWGxBSnUybjVjalR3X3NZMEJwRlpYeGFnb1VXTUtoZmZMNlhuOEFfNXZHYXlnX0F1ODV2bnVBMkVYZlU?oc=5",
      "publisherUrl": "https://regional.kompas.com",
      "source": "Kompas.com",
      "summary": "kronologi dc pinjol di purworejo ajak nasabah ke kos agar utang lunas berujung digerebek kompas com",
      "id": "e6862698e5f8082a",
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
      "eventId": "auto-41ff163a3fe25037",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Nasabah Ngaku Dipaksa Debt Collector Datang ke Kos supaya Utang Lunas, Berakhir Digerebek Suami - Tribunjatim.com",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNdTJwclM2d0pQRU9lZkQtYXlLNEgtR2FIemVxR1lJcWZPTmlYLWVhRFVuTlR6UTBnVkxPcE81VWU1Q2hRbEN1LVRsSTFJMVo1RjRYUDV4MTF4S3NtQXBRWVRadG5GcVEyOWNVNUFJWWx3bDdYVUNRWF9FdjJzQ3BRRGM5MkM5SU9ESWlCWEkxYmFwUGI3anVHdHZ5dTAwUXJubFJfMGVwNC1ORTI2eFNndGdEY2xHcDZmclJCaFFUMVZCNmRsekZDSEpmTm1kNmh5?oc=5",
      "publisherUrl": "https://jatim.tribunnews.com",
      "source": "Tribunjatim.com",
      "summary": "nasabah ngaku dipaksa debt collector datang ke kos supaya utang lunas berakhir digerebek suami tribunjatim com",
      "id": "28193dfd62ee49e7",
      "domain": "jatim.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0499125a91d92128",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "OJK Dalami Dugaan Pelanggaran Etika Penagihan di Purworejo, Kredivo dan KrediFazz Dipanggil - Metro Jateng",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQTWxQOGtuaXRiMGJUTkpQelBSWlYzM1ZER29kNUM4b3UzeG1aQzNweDVzdEhLRlRZM29tLUZsRFZYY011bkRodzdmOU1rYXNHaUd0MDBsX1JmNC0wakNyV3NwMWVVSVdzX3FHYmZadXlWOTZFci1lVEZuV1NCekJ6OXVNdEZnaFE1eUNtdkF6MVdsQmxJTG5kOTJkX0hSbkd4aVBQMGVBd2lOOXJCS3JudnExa2VJeGdHbTJBZDFMeVRMZ0pR?oc=5",
      "publisherUrl": "https://metrojateng.com",
      "source": "Metro Jateng",
      "summary": "ojk dalami dugaan pelanggaran etika penagihan di purworejo kredivo dan kredifazz dipanggil metro jateng",
      "id": "f65326be32cdecfe",
      "domain": "metrojateng.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 94.8,
        "label": "negative",
        "negativeWeight": 6.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Minta Investigasi Dugaan Pelanggaran Penagihan, Begini Respons Kredivo - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5HVHJodjRRZldTeVdVeGxJMHY4RDlOeWpnLUI3R1NqUHV5TG5ubEpLLTdHMVNWNzB1NkJZLVByWW15WkFqQ0h5Y2ZwcGZOT0JqbUFfalVBeFNnQXNRc052VG5UTkJUQQ?oc=5",
      "publisherUrl": "https://id.tradingview.com",
      "source": "TradingView",
      "summary": "ojk minta investigasi dugaan pelanggaran penagihan begini respons kredivo tradingview",
      "id": "7cf9aca8d7c69ae4",
      "domain": "id.tradingview.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "OJK Minta Investigasi Dugaan Pelanggaran Penagihan, Begini Respons Kredivo - TradingView",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE01SFJKdy1MSW1sN3dGWl9sb1FsUDdKU2xHd1dqV25YY2FyZTZsam0tandUV0pURjVZNlhhb0ozdVJlZE1mVU42UXdWQXdJMmU5Z1d3Uk5hd3hyZmZtQXpRVzdyc2d6aEU?oc=5",
      "publisherUrl": "https://www.tradingview.com",
      "source": "TradingView",
      "summary": "ojk minta investigasi dugaan pelanggaran penagihan begini respons kredivo tradingview",
      "id": "3f763ecd02a860f1",
      "domain": "tradingview.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "OJK Minta Investigasi Dugaan Pelanggaran Penagihan, Begini Respons Kredivo - kontan.co.id",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOY0k4eFhmaGJJODh5cWRPQ1JwdWs5MGd0RlZ2VWNSMVdpVGQ4Y1FkbUZIY2t2aVRjeHRJTVZEY1BfbF8wWkZCc09GVFpUZjRZS0dkckhlSzVXajh5Q2x2OXpiTXR3UW5Ia2tpYnhFWmtsMzB6RWtpQzlxbV95U2lyMjB5UnlZYmFUVnBJbjdwMGdsVDZmc3VpbTl0VWVDVGU1VXdsR2ZkZFpFWnp00gGmAUFVX3lxTE5sU0liYmdobWpGZjc0Q2lKc0Y3aWQ4SGE5ZDdFdC1ZbmR1NUx1Sm1wd0JaUF9TTW9WemxEQ3doelV5NXB1MWJaM0pRcllYMXo4THRlZk9mM0VUb05GQUluRmMwRXJ3S0FhUl9uZ3NUME0xOVJEc1VWaFQ5WmlPY08wazZGZy0xWGg2WDJJbWRCd2hmSU12Uk9nNHhSZHV1Y1VjRV9zSVE?oc=5",
      "publisherUrl": "https://keuangan.kontan.co.id",
      "source": "kontan.co.id",
      "summary": "ojk minta investigasi dugaan pelanggaran penagihan begini respons kredivo kontan co id",
      "id": "882e0b4aefb1a73c",
      "domain": "keuangan.kontan.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "OJK Minta Kredivo dan KreditFazz Investigasi Dugaan Tindakan Tidak Patut Debt Collector di Purworejo - pantau.com",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNY1RhMVJNNUVzUmRBSjJSQ3hPYnkyMk9iZWk0dUhaZzVyaFBXMDA4d3dHdmhaLThxeHhpNmd6OXpKYXk2WU9udHJLYzBRdlBJMnJkbGVQd0ltTDhKR3RjMTl2N1FDRkhyVENndEQ1SW5oVEZYWXlYWHVtSE03c0FPYTNsSTJTMl9OVXBmQ0tqUUJ3QWRzNzRlcXAxYnNaT2RlVnlWYjFDWUEyNk1jY2pSQ1FmRWpqVlpPdDNJRm9OVTR2dUZ6cnMyNHFTb1B5S2hjbVZGRw?oc=5",
      "publisherUrl": "https://www.pantau.com",
      "source": "pantau.com",
      "summary": "ojk minta kredivo dan kreditfazz investigasi dugaan tindakan tidak patut debt collector di purworejo pantau com",
      "id": "bffd961da86a3e3f",
      "domain": "pantau.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 73.8,
        "label": "negative",
        "negativeWeight": 3.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo & KrediFazz – Penagihan Pihak Ketiga Jadi Sorotan - feedberry.com",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOUzJMQmhvTVhHOVJyb0pubUhJVmc0RS1WWWdtVFFxUllwbEJIT19tRWota0VUZDBVbjdQOE9nZHNjSjUxbVVSckFDZWEzaFpWT3B2NUdFQ3phRzdxOUlXUUNQTGFwdnNmY0NxSlpEVU5aQ1dVeVRlZ3JFbU96VEZfeUtUV0hvdmRhWEswSGxJeUk2WHltZ0lDbHMzRQ?oc=5",
      "publisherUrl": "https://feedberry.com",
      "source": "feedberry.com",
      "summary": "ojk panggil kredivo kredifazz penagihan pihak ketiga jadi sorotan feedberry com",
      "id": "3cb456fc4dab40a1",
      "domain": "feedberry.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
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
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo Buntut Heboh DC Ajak Ngamar Nasabah di Purworejo - detikcom",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOeUJsT3FXMEF6SHVJNlVKRk1UbUh6dXFuWENiQ1VRaXBjMnV0ZTJsak1VN2g1bTM5dHUzeW1JVlVhcHRyUFVXV3c2dXdrV1FFaEhSU2dwYkdVX2FGdkprbHZibGZWdk9WaDh0WDMyelg4VlpfME5NTURxYVpUd0U2aTZnYmdFU3k3VDlqMXRMX1RfbXVXeVdweTdmVnBPaU5UbjlXVFVyTWtUcXdxUVJ6U2wxY3nSAboBQVVfeXFMUHlXX3hLWXNPR2V0cmtvZmJPXzdBellNUUZHRTlyMTNENFdVbjZuQk85YUQxN1cyN2Z2Qk4tUnFUUUZ4cXFhZVpId0xnS2FHd2w3Yzh1OGlsZlZYWHhEY19Id1JSdTNLSV9CVHFqUTN6NlNQN3RpUGxHWFNteWRYazR2VDNuYlFxMWF0YkItM1NITEdGaHpiRlB0cG00VmdkdWZhRWtYWklzakZDdmt0YlpoTVdnbldvNjBR?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "ojk panggil kredivo buntut heboh dc ajak ngamar nasabah di purworejo detikcom",
      "id": "e1d60053a927ab89",
      "domain": "detik.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 1.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo Usut Dugaan Intimidasi Penagihan kepada Konsumen - BeritaSatu.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOV2VwQ0RMSTM0TW90MUhKUVJDbWdfUUczMC1aNmtNNFVZOEh2TDI4SEoyOFF6SDNYZnd6amtWbTloSXBDN1NMVTRzMTJDb19ZUDg0RURHMUxLMzBDd1lxMFo4bVFlaEVpU0FMZTNBRThRd3dSalU1UF8zUmhVdVlXZHhuRDVHczRidUVrVWJ1ZzJFRlZlY0tyYmV2Ym1laTNIOW5JYWt1SDlyeTNWSTBVMA?oc=5",
      "publisherUrl": "https://www.beritasatu.com",
      "source": "BeritaSatu.com",
      "summary": "ojk panggil kredivo usut dugaan intimidasi penagihan kepada konsumen beritasatu com",
      "id": "c808004e82ea8301",
      "domain": "beritasatu.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 84.3,
        "label": "negative",
        "negativeWeight": 4.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan Kredi Fazz Terkait Dugaan Intimidasi Penagihan di Purworejo - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOU0l6T1ktWFYyay0tLTdRTWNhdjFyQ3JrX01hWjNoUHdKYWdsaDFHSmJWVG5CZGJEUDJMNkRqUEV0RHpIU2lFbTN3ZTZsMXNUR1hLUGZ4Z0ZWa0JDYUloUGhOWE85dXZZTEpWWXpvdUhXZlNJdFViSXR3bmRNSE9RQk5pdl9fOUNteVpxSksxOXlpRTltRHJhYWRwYmJUM0U0OUNSMS03dnNiWUgzcnNnUVU3Ri1UaWZCZ2ZwbTVLemJ0cVk?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "ojk panggil kredivo dan kredi fazz terkait dugaan intimidasi penagihan di purworejo investortrust",
      "id": "1d708ffa218b3d44",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 84.3,
        "label": "negative",
        "negativeWeight": 4.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz Buntut Dugaan Pelanggaran Etika Penagihan di Purworejo - BantenPro.co.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPZDdXdjFUQUFoc3hBYVJoZUtUUVZOVXZxMnVtbFZsTmhkQkM1c2x5R3dGeDZJMEtEMnFobHUyMW1NQnU0a0VqUFpQOFZhaXAybzlqUy04TkRvTHUzUGxpcmpzY2xVQk94Y1VwZkYyazA1b1VfenB2TTM4OWNNY1V3ZjFSaFVQSENVSVRvSzBoQ2x2SGt6RkdHS0lQWWNjSzZrdUlobUs0YnFRaFJxMUN1dzZvUQ?oc=5",
      "publisherUrl": "https://bantenpro.co.id",
      "source": "BantenPro.co.id",
      "summary": "ojk panggil kredivo dan kredifazz buntut dugaan pelanggaran etika penagihan di purworejo bantenpro co id",
      "id": "c9950a90445645d3",
      "domain": "bantenpro.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz Buntut Pelanggaran Debt Collector di Purworejo - Kompas.tv",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQZWduRmVuaEtJcG5tREc4WFhqUTFlYUw2T0dqNUFsaElEY2gzM1RUS2lQVHk1XzhqQzJ0U010OWctUlRvemEzemlseEFxN1E1Z2NSTDJMVHVLdHhmSy1CZWtuVjFZTVhfSC1jUGU0UVR4ZGhFT3BMY2Y2RWhFWjhTWGZJU3l2VnZHWmZKYkpKelpOcjVKbmM0b1dnb2lpeFZkNHc5VEdQQU1kYTljalV2dWRtOFcwQURr0gG-AUFVX3lxTE04M3hZNWtjRmQ2T0VSR3ZkZ3p5ZFVyOUdmT1pzMTVpbXJFY1F2MWg5bjVuSVNlNFBiMW1QdEhNU2hGU1JnU0VVbG94WVkwaU1HSmN2Y05WcmZNMWtlUzlGMUpsTVJ0ZlZrbTFJUHFscFhTLS1EaVpoRGJBMnFzNDFjWmJueUFWYUN5cnRpel9Nam9Hd3Myemg4aGhnRXYtOUd5WHdfT2stM1NrNWN4eUMyTmpEeThiTDdlOXhsSlE?oc=5",
      "publisherUrl": "https://www.kompas.tv",
      "source": "Kompas.tv",
      "summary": "ojk panggil kredivo dan kredifazz buntut pelanggaran debt collector di purworejo kompas tv",
      "id": "00067d41fa6eec96",
      "domain": "kompas.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 89.2,
        "label": "negative",
        "negativeWeight": 5.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz Terkait Dugaan Intimidasi Penagihan di Purworejo - CaraPandang",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPT2dZOHpSN3A0VVExbFI4bm1RajZRWXZJUHQzMXFkRnVfbnpUdnRwbC10b2R3Sjhob1hSRlpLcHByRzdJQUxWU25GOFU4WnJOczhQNlhhelFYM1pveFNzWjlTMkRPSjJqQnlTNUV4bFQzVk5Gblo2dkh0SWE5Y1dIc0FVTlpEaHkwNW53eVNfbXVOSDNucEQxUjNfUXRnRU9NMFZHNFRTYkRyaFBxUXpmb2hnWktHNVk?oc=5",
      "publisherUrl": "https://carapandang.com",
      "source": "CaraPandang",
      "summary": "ojk panggil kredivo dan kredifazz terkait dugaan intimidasi penagihan di purworejo carapandang",
      "id": "d7205317c4aea6fe",
      "domain": "carapandang.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 84.3,
        "label": "negative",
        "negativeWeight": 4.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz Terkait Dugaan Pelanggaran Etika Penagihan - Banten Raya",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPd3BnWHJZTlU5d1ZDclZqc2JzSGZ0QUZoLXpiVFFUUkliV0FRS2RSYmY1WnYyWHhqXzRnSG1pUFRKYTFqbC1iSlRXWFhLOTE5UHJmVl9fNjhnUFQ5MEsxTl9wYjFwNmZmTmxOSk9QY0JFYU9zVlM1aXJRMjV2LXctOURhRmFOS20yOFpGTFBrNndnZ0FYM2NObDl5U1N0RnpMTW5VT2t6bVZGV3d2MHVnQWF0bTJmZk9kNkliMkVn?oc=5",
      "publisherUrl": "https://www.bantenraya.com",
      "source": "Banten Raya",
      "summary": "ojk panggil kredivo dan kredifazz terkait dugaan pelanggaran etika penagihan banten raya",
      "id": "3feee0e5094ad933",
      "domain": "bantenraya.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz Terkait Dugaan Pelanggaran Etika Penagihan - GoSumut.com",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNY1U2OC1vS1dUYUs1dWVuWVc5VEZkb2J1OFJiMlpVYk12RWpudEpnYkJHcHM4c0ZNbU5OanJyeHlFVW9mcW9JMElBeTFfWGhJSUM2bHlvc0xrX09MRnFpM3Y0eUlZaXV1UnVscTlpZlRkOTd4TVFheEo3UlduaHNhVUthSlJjbGxObXJObkdjU05QcXA1MzVJeWMxaUozUzgyNDJ6WWZRZHUwV18tUkFvYU5kazdyMzd4b3NiV3N3?oc=5",
      "publisherUrl": "https://m.gosumut.com",
      "source": "GoSumut.com",
      "summary": "ojk panggil kredivo dan kredifazz terkait dugaan pelanggaran etika penagihan gosumut com",
      "id": "64f2f0aae4b7bfef",
      "domain": "m.gosumut.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz Terkait Dugaan Pelanggaran Penagihan di Purworejo - jatengpos.co.id",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQb0V0TWtjODZhcFMxRXFMSkdUcnJUVWZXZW4zRV9ORHFtYTZYRjgzbk1ZY1h5U245Z0x1UjBJQUs4UGdZT0RkZVRXMk9wejZLSnhWSENBXy16Y2JHenlqZEVoWmZ4TzZ0UXNOTVVJcXJYUjEtSFg0eFE1bEhHVl8yZzg1TW5GcUtiMUd6Nm5oMV9hVk9vOURyVDU1MXVjS3RnTWRMYXNidG5KbmRmcFRxWXpDekJIT1pVMjVJZE1HV1VkWGZ6ekE?oc=5",
      "publisherUrl": "https://jatengpos.co.id",
      "source": "jatengpos.co.id",
      "summary": "ojk panggil kredivo dan kredifazz terkait dugaan pelanggaran penagihan di purworejo jatengpos co id",
      "id": "75508ef55a6ce09a",
      "domain": "jatengpos.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz Terkait Dugaan Pelecehan saat Penagihan - ntvnews.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOVTR3S0ExRnk5NDVSLVRfS1R0d0lDeVUtQ2ZFUUpGV19nX2FlQzJjN1podS1rOC1wakk3WU1tUmg1U05rQnQxWTdsaW5zaWlHTGNadHVPdGlyVWRLXzQycnBUSW1Pbmt6R0thOUpTTTlMNmFNVU15NTJpczlDV0c0WVZWRWt5WkcxTUZjeXVjY3U5LURJWjZQYTNrVEI1d1htdnJtWnZ6bUF4NmktRUtWY2JWZw?oc=5",
      "publisherUrl": "https://www.ntvnews.id",
      "source": "ntvnews.id",
      "summary": "ojk panggil kredivo dan kredifazz terkait dugaan pelecehan saat penagihan ntvnews id",
      "id": "12a97348eb622049",
      "domain": "ntvnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 87.8,
        "label": "negative",
        "negativeWeight": 5.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz Terkait Dugaan Penagihan Tidak Patut - Media Alkhairaat",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNY2NHbjZkaGtJOUlRQnJvSWdWRVVFSkJiaUlLVGYyUW5sR2FxQTJCdzR1LUY5cnZxcXVnOEpZOGhUM0tkSHB0ZVYzUWJsOENjNmp6WHk2NnhNb3cxRnd6ZFUwMUVEc2RtRWYxamN2SzBkUEU1aEgzeUtGbzA3MjZRR3BybG5NdERvSDhnSXBlWlA5bzdpUER1bFoxeVBHTUNsS1JIdmlYS0FiVWhIRUZRT2pOQkRDdmNTYmc?oc=5",
      "publisherUrl": "https://media.alkhairaat.id",
      "source": "Media Alkhairaat",
      "summary": "ojk panggil kredivo dan kredifazz terkait dugaan penagihan tidak patut media alkhairaat",
      "id": "2ca040cc38756c9d",
      "domain": "media.alkhairaat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
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
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz soal Dugaan Intimidasi Penagihan Konsumen - investor.id",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOZEROS1I1Z0FaQUtuV2dFR2tFVTBFX2xhVlZYamVyeldLaUxlSVJsdmM3c1VIcV9iQ3dpTGVVTzAyYU1ZZ2dIV0lYYWd1eXFCUjUzSmwyX19wMmpqcE90VzhGY3ByQUdoRVpSZVdDN2YxWG5DbVRKM0ZnSTI0RnZSakdWMThYUVUxUHJQNzl0ZmdZTk5VT1Roc0tDQTJnZ2p2ZjNWNkZWNXI1ZVpnN0Vj?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "ojk panggil kredivo dan kredifazz soal dugaan intimidasi penagihan konsumen investor id",
      "id": "c99d3bdc1b061e83",
      "domain": "investor.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 84.3,
        "label": "negative",
        "negativeWeight": 4.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz soal Dugaan Pelanggaran Etika Penagihan - Ekbisbanten",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOQUw5Qk1Kc19LNEk1T0pOUmgtVFN5YWo0cVBURUVMdGFGU1VMWnRxQzNKbXdyYUR5MTVHTkc4R2NMOFpiR0JGZUpiNThTS2paXzFuTHJRN0VBQVpDOE1PZHdJZEJDTUZTRFRoXy1fUVd2QTZZMWxQLXc1XzlwQnAxbVc0TWpicTM3RF9IZ3RZeEw3TTBtajBuR05ONmZnT1VleXNBOFlCZWw?oc=5",
      "publisherUrl": "https://ekbisbanten.com",
      "source": "Ekbisbanten",
      "summary": "ojk panggil kredivo dan kredifazz soal dugaan pelanggaran etika penagihan ekbisbanten",
      "id": "f5829161ef605427",
      "domain": "ekbisbanten.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz soal Dugaan Pelanggaran Penagihan di Purworejo - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPajhTMUVRcGpVVnhacEdOMFZhbTFtRTRraFIzaVdITUY5anRjWGc0S1dWcVFLbXVZUnZCVEdaU1ZIRGFxaXpYTmRObXd4NWVqVVFqd1dFa0FETmY2OUVLcjhvWjhqdHlLbFNnck0xNzhuMmVYdXZCU3pGd2JRUkZrLTdURWp3U05uUTlzNXQ4enNUdXJMNGphNXR0WGc2dVp5cVhGY0s4ZGRraVQ2ZUVDWVUzQWV1bGQzbGpqZnNZejhxLWwwU3RWVGFB?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "ojk panggil kredivo dan kredifazz soal dugaan pelanggaran penagihan di purworejo kompas com",
      "id": "740009e5d0c71e48",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz soal Dugaan Pelecehan saat Penagihan - CNN Indonesia",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPREVZamNQa3pjXzZPdWlJeVNXemV3UVJuclNPS0tNdml5Vm44MGNHMDVZUC10T2FhMmpxY01rQUI2REZvNXZpNHl2a3pRMzBZdHBkTnIzR21aTG56ZjJuMGxsX2ppbkRrX25hT0VmR0s4VFFfU1VsUWE5UGxCa2Ywb2tDck5mQTZYMkVVYXZiU2I3NGZIclllZEpYWHMtNWlETGJ4LWw1a291bFJmNU1rdEMwS3hzRldSUjE3Y2ZVa2dJSWlqeno1TTFSY3drUdIB0wFBVV95cUxPYXVOU1FSc04wNUNLLTZrU2dFZ0xtSmp1dWRlR2w4MGptQVN2RVhqaENSUFpmVnlCZVRzcmU3SmR4NnM3WldVRkZfX1h1SURFc2s5Q090cWl0dHh5V2pEQnNGcC00TTNYd2o0dGJ2V0c2ZlBlS2JQWGExVXVad3BMTGpXd1E3TmJHX0FQRnhOLXY4cnBmRjA0elJ2bzdRSFB3Z2NGSzN6QU1QSUVWaFVWaS05eC1DVGRfM0RUSlExWURSU0FFWFpGT3VEUGFkVV82VEM4?oc=5",
      "publisherUrl": "https://www.cnnindonesia.com",
      "source": "CNN Indonesia",
      "summary": "ojk panggil kredivo dan kredifazz soal dugaan pelecehan saat penagihan cnn indonesia",
      "id": "1b0bf73bfc591996",
      "domain": "cnnindonesia.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 87.8,
        "label": "negative",
        "negativeWeight": 5.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz soal Penagihan, Manajemen Buka Suara - Kompas.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOV0RyZHdUUXUta0V2Z2FkM3FMVXJfWkU2bWxsOHh1U2VrUHc1NUlPOThDdk9COWtXUXVnbE9MUHJXeFFYRnpvMmVmc3BkdzVldjJlVlFiM2Y5YWpra2VnM05RcVh3VTBreGFTR3N6MEhkRlowMnk1aF9VWUNHeWdoRkJWanJtMXZWTEQzdmJob3pXYWprSHplOWY0cE02Q3V6aWhEOHJtYzMxVkhVYkl3OU9JV21iZl9OcThKZnR4MjRPMkM1OWVsNw?oc=5",
      "publisherUrl": "https://money.kompas.com",
      "source": "Kompas.com",
      "summary": "ojk panggil kredivo dan kredifazz soal penagihan manajemen buka suara kompas com",
      "id": "4173ccbec2f6165a",
      "domain": "money.kompas.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
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
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz, Dalami Dugaan Pelanggaran Etika Penagihan di Purworejo - Pewarta.co",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPbEstUVNJdjlzMk5HNDI1NVJDdG9hWlI0dkpRckxpNVd3cFJ1dWNUY0ZXVFk3M1NpUDdGOWdfb1R4Nmk0WW1zOUQ1Z3lzZTNlRUxrUjBWSGstREhNVm1UdFMyQmltQUI1MXpzRHZHSFBNRnRNVWt1dWZqa3FFX1VmUVRDcTdvVHd5aXJ4eTEtZ3BtN2NEaDVLakNDVTRFZUVMVXhUaW9yYVdFMnJJTzAtazZB?oc=5",
      "publisherUrl": "https://pewarta.co",
      "source": "Pewarta.co",
      "summary": "ojk panggil kredivo dan kredifazz dalami dugaan pelanggaran etika penagihan di purworejo pewarta co",
      "id": "79d753738570d760",
      "domain": "pewarta.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KrediFazz, Kasus Dugaan Intimidasi Debt Collector Berujung Evaluasi Sistem Penagihan - Pikiran Rakyat",
      "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxNMHl6VXhEdmpCdll0WmlBV1hBYjNWSUllMHAtNG5HVURDSVFTaHUtSDFlMGFMNUotOVBzN1FkTXhOeng4a0JjSERBMHprdjVzRnBaOFF5V2d5Uks0R1pnNVFPeGNheUQybHd4MzdYMnQtQnlPSGRfZEg5Q29zX3RacHRIRHh2ckk2Mlk5SUxPM0tsNWl5Y00wQjdkSUcycnh1b25OemtlNG5Bb3Ytb1Q5TjFfTldWWUtPSl9PQkYwTFhZMjgtV05aSkoweU5YQlU5MFlhZFM4Q1BLOE41SWllUWhBX2k3RnVGTEhRbHJWUG5pc1J4VXZRLW5R?oc=5",
      "publisherUrl": "https://www.pikiran-rakyat.com",
      "source": "Pikiran Rakyat",
      "summary": "ojk panggil kredivo dan kredifazz kasus dugaan intimidasi debt collector berujung evaluasi sistem penagihan pikiran rakyat",
      "id": "6d87b061544d9d19",
      "domain": "pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 6.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KreditFazz Terkait Dugaan Pelanggaran Etika Penagihan - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNN2NncmVBTGxwelhRc0NzRUdkSzF1SUFvMU1DVmpmdkJ0RWQwUU1NY2ttUHZLQmJBYTRiWXUwUXEydVV4OVNtckpaZHVUdDFDR1FJMnNFSTZYcmF4NmRnWlpOaGRhOVJidFhIVmFaV3dQa2t2T2JpSVJrMmRKS1FUT3Raanc4TUt4OERTRlBmUVlDT2IzdU1QZGk4aElQWW5KdDZSME54ZlROdEpnS2NNZmlMYlp5ZXBTMWtOaA?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "ojk panggil kredivo dan kreditfazz terkait dugaan pelanggaran etika penagihan rri co id",
      "id": "965cb6c58c6e8441",
      "domain": "rri.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK Panggil Kredivo dan KreditFazz, Begini Kasusnya - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPY3U0bUIxVnBSak1oTWV0R2VneXNwTTdxSFpJb2ZIMWVaX0VHVjFOblJkb3FCNjE3OHljb0FiX2xTYXV2eEJKT3EwOWMtN3hUbmstWndBazVaVzdGbWpfdEJuOF82cVQxMlc3eVAtNkNVYUVITnBEanBNdDZYYWxrWVNfeWFmY3RFTWtZTDZZbC0yRFl4VC1FWGJ0a1FrUdIBngFBVV95cUxPdjhkSDFid2VJYmlqNllUSVVxY2VfQThoUENmcE9wSHhsRjhKM2hnQzhWYXpXRVA4VzlDRUdFOWhWTVYtckI3dkw3b1pyNzZNaGFtdUFTbFhpanN0VngzQWREWGg2cXNCM01keGppMWFkeWtzSXBtT3FxUkZuSVR6amxMc2ZuaURqS2dhcUNBU1V1akh6SDRMYUdtOHQ0QQ?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "ojk panggil kredivo dan kreditfazz begini kasusnya suara com",
      "id": "577da0c45c414178",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 1.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "OJK edukasi nelayan di KNMP Konawe cegah pinjol dan investasi ilegal - ANTARA News Sultra",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQSmRZNEFwSjltbXRxekNlQmRrOTdwcmV0NFp3bEdmRWtmb1hxTTVxbHQ5bWltN2FBZ0RrWUVuZGtIQUZKeVlwejRGSTFBeUU0UHF6SWNzSEdUaHg3RkFqMFBNOWRxRUZaQnBKcklpbl9nU2FqaHB4MXJHR093VHVSaEZsX0ZYeF8zVFlxdllvMWRnZFZEY1ptSF9OeUxGdmcyMWdXZlJ4TnRqU1lzVDUyTHh3?oc=5",
      "publisherUrl": "https://sultra.antaranews.com",
      "source": "ANTARA News Sultra",
      "summary": "ojk edukasi nelayan di knmp konawe cegah pinjol dan investasi ilegal antara news sultra",
      "id": "f2cbef54717801a0",
      "domain": "sultra.antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-32e2a68b1a4b0578",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "OJK: Pinjol Tak Bisa Berlindung di Balik Debt Collector - investor.id",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPaXRDYjNyV0pVM3RDZmRNbVluRnlJZGNiTm5DUFF2V0g3WFFTSng0ak1oaXFwUHRKd1FaY09RdXJic09YU2pEc3ZYUmNMeFNmYmVDU0ZJMU44REVXRHpDelVFX24xWjd5RTV3MFZBY1VUNThPN1JpbGRtU21aLTlmMERQYkpPOEl6TWpMQ0pRdEhUM1U?oc=5",
      "publisherUrl": "https://investor.id",
      "source": "investor.id",
      "summary": "ojk pinjol tak bisa berlindung di balik debt collector investor id",
      "id": "bc9558a7f1b6d6a4",
      "domain": "investor.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7db5d3fffcd5cf59",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Pelanggaran Etika Penagihan Viral! OJK Panggil Kredivo dan Kredifazz - Sinar Harapan - Sinar Harapan",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOV1RDejB6T1NBOV9Iem9rSXpLaHZJMEpwM2x2YnlubHA2cHJVMENuWVBjaTFpcmJBYXFvZUxONFdpMXVNSGNUc1QyRk9WcVNLVzBVRnprUE1KY29PRTRBaFpRUEJnNU01TFFsYUdQNENOdGdEVzBOZlpXY0JMQnA4dDQ4WmE5ZmZVLVMyRkxOVnR0SUlBY2FuandFYTQzdWM2Z2UtWHZGcVUyWXN0SUNFMU90Q2NXUdIBuwFBVV95cUxNdkMyRTRrU1ZteTVMTFZtTDNpMHhtQkp0a09iZktEQXd2S0VuSFNPcHFvWmNCT2ZuODhXWDFwV2pCYjdMclhRTkhoOE5nb29GeDFack1MYVB4SWVPNXBsWXhlZ2tHZXBrODlGcGJ6am15cy1mLVdaSVF4N0pwYkVFZzB5T3Jmd0NJZk9rOHp2OEc0SXhuQXU0VjhoSzRzOEVTQlVzWE81cE13dDhPSEx6QUo2VjRKWVFrVlZV?oc=5",
      "publisherUrl": "https://www.sinarharapan.co",
      "source": "Sinar Harapan",
      "summary": "pelanggaran etika penagihan viral ojk panggil kredivo dan kredifazz sinar harapan sinar harapan",
      "id": "acaf04e88e45e0a2",
      "domain": "sinarharapan.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Penagih Utang Bermasalah, Kredivo dan KrediFazz Dipanggil OJK - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQTDNLT0NyaUZYclRHOWlGUDFtdWxBVnNoZXAzYkxSUC1HX0ZaMFVOS2FOV0k5bC1WcUllMF9BczFrNEtPODBTand0TTlPTlVYd0laUDVPZVlnbENHc2JCZ1oyLVM5OUFULUVDbGd3TnBjc1NyNzJCVk1ybjRURUtRUm5LQTNtVExQUGpxLVFmOHhLa1l4cjlPREYxc2JiUjNhMjlxbVlBT1HSAZ4BQVVfeXFMTmJyVnBGd0dPQWtGVHc1TTVtZkF0WDhfQ3NyN1RMNDA4eUh1WGR6SDh5Y3dLQjJpc2lTWnU3T09Va1RkOUZRMTdhaV9tc3JEMGszN2VqZFpiQnktWEd5Y3VKMXNRNDF1aW1XQVM0OHVoTFVhNzRoMFMyM2F2MmdPQzBaSDh0NlpyUWZKZlQ5YktYM2RjN09CWEpTU19MUUE?oc=5",
      "publisherUrl": "https://www.liputan6.com",
      "source": "Liputan6.com",
      "summary": "penagih utang bermasalah kredivo dan kredifazz dipanggil ojk liputan6 com",
      "id": "1cda3484cf234479",
      "domain": "liputan6.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 90.6,
        "label": "negative",
        "negativeWeight": 5.8,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-7ba3d4f9a46e8774",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Skandal Debt Collector Kredivo di Purworejo: Kronologi dan Hasil Akhir Debt Collectornya Diduga Lecehkan Konsumen, Kredivo: Tak Ada Bukti Pidana - supernews.co.id",
      "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxQcENsb3dsQ3NYa2pKbmI4bmJpVGlpb1dJQURtWlBXYzFZS2lQd1EtMnBYS0RMRDBscFNuZUFPcW9xajlGR0RFeEVmc21nXzJib3I1UmdCSVRmSFZ0eExRaVhOTzNlbnE5b19Fb0lUR3dKc2FySmFJQVhMYzA1V1MwWVkyN0lGZnRic2hRSmkxcGlyUFRpR2lFQllfdVRIRF8ya3FuU0hhTHp2bm1tZzB1dHl6a05WYWpzMDhrelh4emhPdGY4blRtOTdSeWp5UGE1VjFpcmt1SFdaYVdvZ2NyUHh1dS00YVEyVFhwMzI2TVFUU0EyQV9kOXpR?oc=5",
      "publisherUrl": "https://supernews.co.id",
      "source": "supernews.co.id",
      "summary": "skandal debt collector kredivo di purworejo kronologi dan hasil akhir debt collectornya diduga lecehkan konsumen kredivo tak ada bukti pidana supernews co id",
      "id": "05b00f3f18e7f9a4",
      "domain": "supernews.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Tawarkan Utang Lunas Asal Mau Ngamar, DC Pinjol di Purworejo Digerebek Suami Nasabah - Radar Purworejo",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOR3NfRVRVMmgtakR5LVlHcUR4ZjBjcEh1aEVCMHRsZzd4NlJaX0N6a0pfMkU3Y3VCbzRqUmlkZ1hkYTAwWksxeUtMNkNwbngyQ0JLZEtxb3JMU05nRXVWck5aaTVwdm5OX19sakhMY0hHLTZrVURhUWMtZW5zaGdnVEp4MVpZR2lQQXN3UUNFMnNueEFGMjhVVzFVblVFWG9TaFNkRzh3TzBrYV92dW0xNHY1M09TMEE3azZNMEdENDhaMTlGaGdQQ0RNVlJFR2tlU2U0cXpvYVNVZFI3ZmN6NVZDckfSAeQBQVVfeXFMTkdzX0VUVTJoLWpEeS1ZR3FEeGYwY3BIdWhFQjB0bGc3eDZSWl9DemtKXzJFN2N1Qm80alJpZGdYZGEwMFpLMXlLTDZDcG54MkNCS2RLcW9yTFNOZ0V1VnJOWmk1cHZuTl9fbGpITGNIRy02a1VEYVFjLWVuc2hnZ1RKeDFaWUdpUEFzd1FDRTJzbnhBRjI4VVcxVW5VRVhvU2hTZEc4d08wa2FfdnVtMTR2NTNPUzBBN2s2TTBHRDQ4WjE5RmhnUENETVZSRUdrZVNlNHF6b2FTVWRSN2ZjejVWQ3JH?oc=5",
      "publisherUrl": "https://radarpurworejo.jawapos.com",
      "source": "Radar Purworejo",
      "summary": "tawarkan utang lunas asal mau ngamar dc pinjol di purworejo digerebek suami nasabah radar purworejo",
      "id": "fa0c06c741710c66",
      "domain": "radarpurworejo.jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-d0a680e796821404",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Ulah Debt Collector Intimidasi Konsumen, OJK Panggil Kredivo Dan KrediFazz - PortalMadura.com",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQQW00UVRSVnVFM1IyanFXUjNQQ1hQNl9VVWhPVGJQS0VrQlhQTDh1YkZUbzZOcWg4ZWJwTFdNNWJlQXRmSEpyR3ZpbGtiYVFiZXZMOXhoaWdtLVpQTjZIRjhNQkZRY1NydkxwMHJISjJCWXZQckdDX1pZbDBJZ3k2ZXp1akNCLWYtOHN4S2ZzQmFaY1NjbmRDSTd2TXY1ejFyUlNJYkpUWlFYQQ?oc=5",
      "publisherUrl": "https://portalmadura.com",
      "source": "PortalMadura.com",
      "summary": "ulah debt collector intimidasi konsumen ojk panggil kredivo dan kredifazz portalmadura com",
      "id": "44492579718e08d2",
      "domain": "portalmadura.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 91.3,
        "label": "negative",
        "negativeWeight": 5.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Viral Alleged Debt Collector Intimidation, OJK Calls Kredivo and KrediFazz - VOI.ID",
      "url": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE9sMDYxSWd4eEY0ZklHYTh1TkpsUk1uOHR1QjZsSjZQbDV6TmdqanF0dEU3elI1N05oR0U4VG9lRXBCVUsxemhN0gFCQVVfeXFMTTRPeXBXR1FQbGNEX0FxVERXaGtWZXZBU0htUWJodm9kRTV5cjloX2VCb3lacGJiWklHV1N5bW40M2dB?oc=5",
      "publisherUrl": "https://voi.id",
      "source": "VOI.ID",
      "summary": "viral alleged debt collector intimidation ojk calls kredivo and kredifazz voi id",
      "id": "2aba50788bdf4ada",
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
      "eventId": "auto-a57df0cce1afef69",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Viral Debt Collector Ajak Nasabah Berhubungan untuk Lunasi Utang - mitrapost.com",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPMThybnRSUXFWemthNVZnMWtxcGlZeGVjZGxfVzVJdm1qRC1YNVA3bDNwSGFqbjQ3WTFfMkVmNjJpRHlaT2RuZFpoSEhSR2ZXLVEyT3NUZjlGOTl3NlFhdFpTbm93M3BRS3djanVncnowZTgwLTZqOFBER3huamhuU1czNWVxZUJWQm9KcmY0X29TVEhCRGc0Qi14QW9KaEU?oc=5",
      "publisherUrl": "https://mitrapost.com",
      "source": "mitrapost.com",
      "summary": "viral debt collector ajak nasabah berhubungan untuk lunasi utang mitrapost com",
      "id": "db2ed51b530c96d1",
      "domain": "mitrapost.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-5dd0a0ff3f4c2a76",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-24",
      "title": "Viral Dugaan Intimidasi Debt Collector, OJK Panggil Kredivo dan KrediFazz - VOI.ID",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOQy11dFdJMkhjTkl2UXRYN3J4Q1FPRzh1cDNlaG16YnhLVEpDOUNSRmNTRU82ZDh1bkdSRmprNmg4SUZaS1F0TTZ0a0tEYmF2S0s1Q2xQQmpnMkF2b0h0WkU5SmtGb1oxZVhFY0NEeEs0cTBQRzl6d21jVzVrbEFmZjBjVy1zcXNUeXBiOERRWkxPVFlWZ19tWTNXc0ZFaHR5M1ZIc9IBnwFBVV95cUxQOURYV2oxbGFGTklhWmo5MVZybW1tM3JUbnBFS1JLcDY3Qk5ZbktyNVNrbjZudDNGZk53Zjk3Z3JZUm82NGRQZFo2eTJ2cjF2cjhQNjZSMy1NTlBteHp3M0dBRzRfSkh1WUVpTmdQVzNJT0VqRTluMFAtSzRJVUtrblJncThuWnM3ZExTcmxXbENMaWs1eXlIM0psTmhiWFk?oc=5",
      "publisherUrl": "https://voi.id",
      "source": "VOI.ID",
      "summary": "viral dugaan intimidasi debt collector ojk panggil kredivo dan kredifazz voi id",
      "id": "4a25192ebd09a465",
      "domain": "voi.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 91.3,
        "label": "negative",
        "negativeWeight": 5.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-24",
      "title": "Viral Dugaan Pelecehan Debt Collector Kredivo di Purworejo, Begini Sikap OJK - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQZzdRLVFXb0UzYjIxNS1oTE1NYXdDakVlclh4U0RkSjFTYjIweFdua25lU0ZlSGNkTG41WlI1VVpqWE1WRFF1cWhCbFZ1RDVYdm9maHg2ZGk4QUdkWmwwSUdNSThQTG96MlJ1Z0VSRkhRU2xQOS1wbF9wTllCZmlyd1Myc0JxM1J1b2ZHM1lMbUgwYlh2eVJfdk5GWVZZaDBwZ0dYcFZOdV82Ymg4aGJ3cVVPONIBuAFBVV95cUxOMEpHVXlxRkZhcTdjOTJUYWQ4enByRXJSSkc5Z0ZjSlNTeVVaUGdHYzlZWWE3UnZ2Nmc0TGxsOEhOTHdJem94X1NvRjRuVER3SjZXR3NKSGtINnBHckRzaHhxOGduRjMxU3BJVDBIa1hMTDFpczhJbU9neGMxVlZxVHU2OXdKYUM2eWV0NDhxcElSd3F3b0VuTU1OZWx4RjZEbm1Da1ZNSFNPWm11T25EczZFTF9waHZM?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "viral dugaan pelecehan debt collector kredivo di purworejo begini sikap ojk warta ekonomi",
      "id": "6e79d5bac8e7c3f8",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.0,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-24",
      "title": "Viral Dugaan Pelecehan Seksual oleh Debt Collector, Kredivo Investigasi Internal - Deliknews.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPcFRXUzVHNkJNcWUxVUZsV0s1WjNoUGFlazJGNFR3a3RyWmxQRzdzcFJQeWZRVHdEZkhZX0RLUEFEMzRLd2hUOXkwWDBFc01kdlV4VzV2TjlZVGEzekI0Z0JSVjVCZ3RFTnByX2VzRjR0bDJRXzFqZU12aFpHSVM1V3lYMkVqYzVHN1Z0cENtZHdtQ04zY0Z4UGFXMUFYTTM3Y2NTRVJNLThmaDJDY1hhWTdyVjlTcEhn?oc=5",
      "publisherUrl": "https://www.deliknews.com",
      "source": "Deliknews.com",
      "summary": "viral dugaan pelecehan seksual oleh debt collector kredivo investigasi internal deliknews com",
      "id": "42ab0b57d63c5ba3",
      "domain": "deliknews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 94.8,
        "label": "negative",
        "negativeWeight": 6.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-24",
      "title": "Viral Terpopuler: Nasabah Ngaku Dipaksa ke Kos DC agar Utang Lunas Hingga Inul Tagih Honor - Tribunjatim.com",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPSWt5SzE1VVJiSVIxRXpxTGsxaGhVM2k4UnZNdmwwS2lZenFJUUdxRW1OSFlNRzFPbDRpLVBpYmhGQ2FibFF5ZzdUbDUySXU1ejNFTmVLaVl1TV8zTlBwb1ZXQkxWb2VoVVpjLVZSdVRyLThDSzBlalF6WjR4VnJiQ1RQTU1Qa2NveEx3NGE2MU5BVnVuTHlkejlib2NNaFhPR0lyZ3Z5VDRWRFM2UDNmSFo0a283Z2laRTBKaTRraEk0eFVYLXRvZWp3?oc=5",
      "publisherUrl": "https://jatim.tribunnews.com",
      "source": "Tribunjatim.com",
      "summary": "viral terpopuler nasabah ngaku dipaksa ke kos dc agar utang lunas hingga inul tagih honor tribunjatim com",
      "id": "66e743b683b0cc7a",
      "domain": "jatim.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-f644367497bf8d8a",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "15 Provinsi dengan Utang Pinjol Terbesar, Kalimantan Timur Masuk Jajaran Teratas di Luar Jawa - Tribunkaltim.co",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxNbVFvbFZTeFByVmpuUHc3bGFCa19oU09WZUk2RDRjTWswQ2Zidko0N3hlX2JuR2Z1Qkd0UTJFaXpnZUljd1NFQzlReTJ3TEJ5ajJSaWhPVENCMGVrZUdmRXBodFhHOGZYbS1iNUJJTEExTHBHbC1GbTNjREM4RGZWdGJRcHlzVkFCajNwQnJaT0NlcERzZEhnYmpzQnE2Y0t5b3NPYjhqSXYwUVN2dXN0LTdjd0hrMTh4V0ZQdTU2QmJKRjlRR2VLNkNVVjhVR0FzclVaYmMzY2w2dw?oc=5",
      "publisherUrl": "https://kaltim.tribunnews.com",
      "source": "Tribunkaltim.co",
      "summary": "15 provinsi dengan utang pinjol terbesar kalimantan timur masuk jajaran teratas di luar jawa tribunkaltim co",
      "id": "8368c543b2187376",
      "domain": "kaltim.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-881893afc382bd03",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "AFPI dan OJK Didesak Perbaiki Izin Penagihan Pindar Oleh Pihak Ketiga - gesuri.id",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOanI3NDVmZ0xiTUtqMWg1eVpWN01GaTEwT1diWWkybk1xcVU5UlBKdmo1WTNZa29MbHBGa2x3VFhvQlNzZUdvcEZJaTNHazVnM3M2TEFfRTUwTjNBUXRvanRRZVNDT1gxUmpZYVM3RkdFUE5WQ1BJaTVlY2hOMWNPa05jdTFIQ3JySXNKenRIVk9hcE52S0t3ZXhxa0ljSjk4c2JWbFliWFFNOThMUm1Qb1k5SnUwQdIBuwFBVV95cUxORzJCTVNIZkZUc2hmbUJNQ3ZtU2I2bWd5X0dDZkt5ZVZlOUJaaTNIdm9EUGZyWWNUaGtMSmdSU2dxWm9kSW9ZSl9VancxV2pPaEktYkdXYVIzS1hoV0JqaXcyZk4zWGwxeXlmU1ZOZzgwNjBEN1h1NFZqQjA0Sm9ZVjhpYk9vS0duTFFrRzN5MDY3SGtBNTBNSHJOY24ydnRPeEtVdEtqWEpMN1JPYVE2RC1OTGhrczJzVXpZ?oc=5",
      "publisherUrl": "https://www.gesuri.id",
      "source": "gesuri.id",
      "summary": "afpi dan ojk didesak perbaiki izin penagihan pindar oleh pihak ketiga gesuri id",
      "id": "f390dd8c79bf4657",
      "domain": "gesuri.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-a750bd0a000d721f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Buntut Dugaan Pelecehan oleh Debt Collector, OJK Panggil Kredivo dan KrediFazz, Ini Perkembangan Terbarunya - Oke Flores - Oke Flores",
      "url": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxOdl9GeERJLWU1dXJfMkdQNVRxUUNCS3ltNmRDZ3NQNzA2MGpVRldvMV9hd1l2THFPVjlmTEN1RlNiRmJFS0pPeFI4eUswRUItV2V3VzM0NVQ3QTNWSDdaSF81VEZ2MktpYk9LR2pTQnZqa1N2b002Q1pmOFVpYXFBbnpzQ21wczZtVWRiNVF0aTZHOUxKc2dsOVRReXZBVHBuRnJjWnNDN25jMlNOdlRPbkRZSy1mWmd2ZW9ja0FJem1rLVRWdFNjNjhaellzblNEVWxpeG5TMm9ITEdUaGJ4M2JXQ2stUEh3b3E4U1JSb1F6dEotLXfSAfsBQVVfeXFMTWZ4bHpRNHBzeXRBRjNJMEdxNmlxMVpZX0tTVUdYbmdRTHNwSGpoRHJRVmhTekJkczVZT0RqODJoS1BheWwxQmliY1M3cXpmWlFSRjhSZGplTHZyRjhQQURJVndVWk1tSE93WXRvMmlfYllXTkZJYjZYd2pMalFzdU1LVlphbmtoSi1kUTVXSUZLc2lNbVN4Ti11Zk9GXzd1SldrWFlyNlNNYVBZXzY3eUZIOUVtMng3ZXdWcTNETjNrVHlaMWFWbm5XRnpMM1BEQjNIa1ozc3NnckVUUnVhZFZJd2pxT0JEaS1Ia05abncxTDN6YlJXYS1Pem8?oc=5",
      "publisherUrl": "https://flores.pikiran-rakyat.com",
      "source": "Oke Flores",
      "summary": "buntut dugaan pelecehan oleh debt collector ojk panggil kredivo dan kredifazz ini perkembangan terbarunya oke flores oke flores",
      "id": "447ffd9c4a7dd1b8",
      "domain": "flores.pikiran-rakyat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 94.8,
        "label": "negative",
        "negativeWeight": 6.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "Buntut Panjang DC Pinjol Mesum Ajak Nasabah Ngamar - detikcom",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRFQzaDBxSWs2TnJtMGxYbEVGVlhiMHRwSnFmZlRidGo3elRObGhVUm9ocVhNcHFWOEFwcWhEQUFIa2FlWEhTYzNxX3BrM3RzaTNtb2JOOENnODFINWZleGE1ZUFQc1JxTTdEQ3hxTGN0dG5PUGpqZWhaYkdHdzFVeksxQ2VHVFk1NTlVSzdZVVc5ekF4N1J2eGpVQkvSAaIBQVVfeXFMUFVEZFFJQnFXeXB6bWZ4b1o5Q3NhcndwYWtockNzUVNZNWZsRVVMZVNSaDJwbU10UmN6ZEszaFRpcExSOWI1aHpSS1NuUHg2cWh3cDFXQmktbDNQMmw0ZW9jU3hoU2FLYVJEMlNtak43dG9DLXRneUIyald4OGNwUnl4MHJzallCelhnYXpqeFEyemNDS2xYVnF4MVM5XzQ5OTlR?oc=5",
      "publisherUrl": "https://www.detik.com",
      "source": "detikcom",
      "summary": "buntut panjang dc pinjol mesum ajak nasabah ngamar detikcom",
      "id": "4c785cc2270c614d",
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
      "eventId": "auto-8a13540cfe7b53a8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Debt Collector Kredivo Diduga Intimidasi Konsumen di Purworejo, Yasonna Minta OJK Beri Sanksi Berat - Jawa Pos",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNRGdhcVp6YUlHS09SeFVHdzYzSU1ELW1UWGxPYVJxc0RQdlZ1THpNd2hucjQ1Y195Vkhsd2E2T3JDa2hMUGdfSTc4QTJ6R0NsazB0RHNQZWpBTVRhVno2ak9pa1lLcXJMMFdNSHp2WVFJbldKZFk4ZERBanNGejdwRDhXQmVMUmdFUnFpM3ZBaFVWRllERzU0SFBwMVcySVBEcE5scXhCbDBteDlhMTVyempwbDFWeVVNYlpPYndfYXVGX0RwOHIyU2MyaUNyUS15cm9IaVlhYU8tMm1EMzFHaVRocUE?oc=5",
      "publisherUrl": "https://www.jawapos.com",
      "source": "Jawa Pos",
      "summary": "debt collector kredivo diduga intimidasi konsumen di purworejo yasonna minta ojk beri sanksi berat jawa pos",
      "id": "316877afdf4b82a3",
      "domain": "jawapos.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 95.0,
        "label": "negative",
        "negativeWeight": 6.5,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "Debt Collektor Kredivo Diduga Ajak Konsumen Hubungan Badan Untuk Bayar Hutang, OJK Turun Tangan! - nkripost.co",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNbElFV0FnM2hsWEVDSEFCbV9pZzhtOW5wUGZVbUY5eE5RcG8xRFd3LTZud0Z4LTlRMTZ4TmNESy1LdElMS1MwMHVZT2ktcU5lZU9QMi1IYm1FZlJ2SUFsWTVVNFBJZHVSNmQtaG5pbGZ3VmM4ZmVDbENIaWQwbm9RNFVnUFF3VDFRNURwZEtQMTF4TmRGdVlrS0lkbzdVWXUzYnp6dU8xcEtOaDR4QTVMcjV3ZXk4Tm9aUlBtc3ZYOEtzWUlm?oc=5",
      "publisherUrl": "https://nkripost.co",
      "source": "nkripost.co",
      "summary": "debt collektor kredivo diduga ajak konsumen hubungan badan untuk bayar hutang ojk turun tangan nkripost co",
      "id": "c6101ab1b40980e8",
      "domain": "nkripost.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 59.1,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.7,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3369f136d0e1b222",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Dugaan Pelanggaran Debt Collector Kredivo di Purworejo Berakhir Damai - Warta Ekonomi",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQUnp4U3dBaWxFdXowdVMxVGY1YVF1MTRwb0NGU0J5QXVOT214QWRjSDVYcWNsamNNTjQtcE9CZ2k2STRqclhZN2JrNzVsOVV0N0hrN2VqQjFZVEhyWjN3TDU0cTIwN2Zlc2FLV2lVYmZTWEtROGlIdEZYcUV0NFFJTHQ2RTlGNFIyVmUxZGZidmFlanJOSEhKNXJndldHQkdJQjZpLWdwSWVlbzjSAbABQVVfeXFMTXh1azdPSVhlQW5HYVpUYWo1VjNCUVViQUxpS1E3aHRzYUdIcDUwaTVHS0I4T0s0dDJCNmJVNEpBel9oc2tRWXFwOF8zdjBoeFZ4RktMLWJPcFhRN1VIa200N0lqM3dDZHFGZWZTZW5YNS1VUTl6UUU0LUh3WmotRFJ0eGJDeXlQVHZRUnZtT3k5UU9FSVpHU19zZEs2ci1zalMyZmdUMHZCWnFiampnb1M?oc=5",
      "publisherUrl": "https://wartaekonomi.co.id",
      "source": "Warta Ekonomi",
      "summary": "dugaan pelanggaran debt collector kredivo di purworejo berakhir damai warta ekonomi",
      "id": "ba3ce24671a99a6a",
      "domain": "wartaekonomi.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 69.6,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Dugaan Pelanggaran Debt Collector Pinjol di Purworejo Berakhir Damai, Polisi: Diselesaikan Lewat Mediasi - Krjogja - Kr Jogja",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxNeGxCVng4Nk5CUnRpeUpGbWQxTTJzWlZKcEZPVGNCQkFiWThZQVR6TUZjX3BZaG9Kakgzb0dPVEh0LWdJcmxtTkJpRWlodFctbmxkeWlxY2JYdnNncjhCeUp3Qlh1RGN5M1RzMzNPZ1dTcHFDOVJHUFVWb2lIODItMGthbE9XWDJXT2hUaFd5TzBBOEVrMERPenZsRkU4eGVibzJRdEtLVzlGTy1yODZGRUR2bGVyclZ1bHZmQVdfQVJocGhrSk1RZDE3U09GUkFsZmQ4R19obkJud9IB3wFBVV95cUxPQ3dxYnE0a3BoVThtMkwtUVpMS3lTOVFDWE1WWVFWSmVyX1NCcHZDRF9UaWU0RDJERHZXbWtxeVp0b2c5aDkwYThuM2JESUtKX0NETzh3cWZwWnoxR3FsRWs5NlYtQXgtcXhzNHhIaUE2NUMwYWpRZ2JfdGE2UjBNc2JwNlZmZTlpX1FqRkFRV0QyTEstNkhUUHEyLWc3dlF0UUdiNG5Ga0lvUTZwVzhxN1oxempBQ1RaVGlaOTdCMmU5ZkJLNjI5dVVPeHMtTkVobVQxWHJLSGFORmVRUGxR?oc=5",
      "publisherUrl": "https://www.krjogja.com",
      "source": "Kr Jogja",
      "summary": "dugaan pelanggaran debt collector pinjol di purworejo berakhir damai polisi diselesaikan lewat mediasi krjogja kr jogja",
      "id": "da98474ab8897af0",
      "domain": "krjogja.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 69.6,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-70eb2051e6bad342",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Dugaan Pelecehan Debt Collector Kredivo saat Menagih Nasabah Berakhir Damai - ntvnews.id",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNRXU0c0pjY2ZMb3dRLVhMVnYydWtHVWVqRVphRkE1MElHLTg3MllscExXRHQ5YTNneGQ1clZ6MFNMQXZBMXNTNG5oRVpGQlJ2NDFJU1NtbjIzaUJYRkFJd29IVGxyQjZKbTFkanMyVTB2N0FaMUVOLWJzVWl0emRweTN5QWlJa0F0MzJvYnBDOVpzdmpfSXRteWhMbnpUM2g4YTQ2Zm8wOFJmNWJXcnBTVFlB?oc=5",
      "publisherUrl": "https://www.ntvnews.id",
      "source": "ntvnews.id",
      "summary": "dugaan pelecehan debt collector kredivo saat menagih nasabah berakhir damai ntvnews id",
      "id": "d229158ea59af954",
      "domain": "ntvnews.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 75.2,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-25",
      "title": "Gandeng BenihBaik, AdaKami Bangun Akses Air Bersih di Lampung - Marketeers",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOb2tZeWYyOWE0Y21vZFZ6ZHZ5Z2R2M2dBWEZWT09zdDJxUnMwTHZxNWQ3WlVHNGtHOWZHU2FpbUItYWZSQlZEc200MmZrSS1EN1FTXzQ4OTAwMDZ5SmpMeDZ4SWtqVDgwYUtacEtZQm9ITjRQa0dONGJXRnkxdXdQNXF1RlRBSDQwT2V4M25XdzBhdw?oc=5",
      "publisherUrl": "https://www.marketeers.com",
      "source": "Marketeers",
      "summary": "gandeng benihbaik adakami bangun akses air bersih di lampung marketeers",
      "id": "fb9a094ef3120fa9",
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
      "eventId": "auto-b4818fd3474bb538",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Gila Konser Berujung Pinjol, Pakar Bongkar Bahaya Fomo di Kalangan Gen Z - jatimnow.com",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQQzc3QVdONEZ3QUREbDM5TDFkZzJSaU1rT3ZyQzg0WkxZV1RCTmR0c3JZcFpxNGhKdlJjSlN6Yktram5GNTJVZ0xhVHJDMVN5MW1Ha0puQXItdWlMZk1rT2s5RXVFVHIxMUtmaXd5Z2dHQkl0SVkwekY1XzRrSVdReW5sUF9JZGRXOVQ5RnFXY2Y5UHVyMnRIbGU0NFlQWFhoZU9jU2RB0gGrAUFVX3lxTFBWVzkzM09YZDlQUm1XMERjZG9QUUJtSldKQTI4bHY4c0pRS3pfTjZieVI4UXNzMFd2U2haTThoX1ZKcHUzMFFOQUUxMlJpNno2MkJHU1I2MjMtd3YwVy1uY0pFN0t3d0VOczVtTFh4S0I4SkhNQVpkTzN2N2NEX2VySU9KblhmTS1SaGVWNHZTc3VRNTNRVjhvclAwSGFOWmgwd2JSODIxSTFmSQ?oc=5",
      "publisherUrl": "https://jatimnow.com",
      "source": "jatimnow.com",
      "summary": "gila konser berujung pinjol pakar bongkar bahaya fomo di kalangan gen z jatimnow com",
      "id": "ec2599d6c0550b17",
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
      "eventId": "auto-e4b201d39458fab0",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Heboh Oknum DC Kredivo Diduga Lecehkan Konsumen, Begini Kronologinya - reqnews.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOVmhyaEZ4bzNCNVJwNXFZSTJ4ZHNlLTFmbGhzZTlkckFNYzY1aTV2T1JIcXk2T0cxUUZwVXU0N2VueHhzWEhvZG1uTUZyd3BJYmdBSTRDLVhnRjNtZG9MTUpha2F2X3ZzLUNmWXdQUFk3aFl1WnpGczFSdW8wZktRck45SnZyb3JCcHlyMTRhblItMGJNWmQ4TGljNU0zSndMQzBRNEdSVmYwMGViQ0E1OVJJUlBtUUVk?oc=5",
      "publisherUrl": "https://www.reqnews.com",
      "source": "reqnews.com",
      "summary": "heboh oknum dc kredivo diduga lecehkan konsumen begini kronologinya reqnews com",
      "id": "d5adbd4c627cc06c",
      "domain": "reqnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c14d4ebebd3f27a4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Karena Hal Ini, OJK Panggil Kredivo dan Kredifazz - Radio Idola Semarang",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNZXRTckMwSE1kNjdna3JhbmdIVTRzejJSLWZsWHBCeGVpYlZOVVZTTnRubGRVWm1USUhnX3RFR2xldEpieDV0NjdXZTBXMTJPd25yLUtNZzhGMlRFSGpKWnRVaG9Pakl1Ym1YMS1tM01HYkVBUHB6ME85V182SmNyTW5tNA?oc=5",
      "publisherUrl": "https://radioidola.com",
      "source": "Radio Idola Semarang",
      "summary": "karena hal ini ojk panggil kredivo dan kredifazz radio idola semarang",
      "id": "fc04e026da9258ee",
      "domain": "radioidola.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 1.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "Kasus Debt Collector Kredivo di Purworejo Berakhir Damai, Perusahaan Perkuat Pengawasan Penagihan - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNajdYdU55ckx3cHlqTkZ0ZDhUVmFTb1pMeUFIMVhxQzVwWVVrUWZva3lTRFZBYUo2MGpPZjRaOHNhTXE1Mjk4RzdaMmVVU0M2WXR1SW5JTkR1UG55ZUdzMWhoWWROZUlXMEpaa0dUUXkyak5RbjJOblRyR3RQd3JNbVZQMGk4YXBtQWFTN1RTaWV0Qm55aVVpbG9fcTZFcnhZZ1BaY0xMN3Z2RzBUcWsyQlY0OTJsVHRfVF93REJLeW1HZFpWZVA2T0lmb1R2UVJqZkd2WUN5dWZmdXfSAdsBQVVfeXFMT3NHaENUXzFhQ0tLU0xiNUx0Nk1iQW1KTTZiemt1eHVMSEktaXJjRGFmNDVJZzJvaDN5b0hTZjlJZWc5YVRIQm9TNzg2VEZFMkgta2VDRnVtM01NMVhEdnNzNnBWRjNrby1BcDdhN2tsMEFHME1EOFM5VVNaT280NDZJNmFLbkRSdTJBS0VtMzhXRXVhbkxsR1Z5OHNQdWRpa0l1OWhmanVOaWd1Ujh6LWY5bmZ2alhRNXV4Y19vclhkWjgtRUNFNFR6NFpDdFpwXzhkYmNLQ1B5WHM4?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "kasus debt collector kredivo di purworejo berakhir damai perusahaan perkuat pengawasan penagihan suara com",
      "id": "44411a58e8193c34",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 55.6,
        "label": "mixed",
        "negativeWeight": 3.0,
        "positiveWeight": 2.2,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Kasus Debt Collector di Purworejo Berakhir Damai, Investigasi Internal Terus Berjalan - Media Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPaDZfUm9pNkpYSDVEaDdQOGZFaXlJN2FqWm5zSF9hXzNZbUl3bEF6YkIwNWd5OHhGMGNYS3R1cEYxTkROT1F5N0hvaXJVY0xfVXFDZmVvbWZFX2xTaDBmMlZUSEVGMmkyb0ZSNUF4STUzM1oyRW5qc3hvWFROVkRtR0U2MmRHT2hVeEIwWjJ6RHN3bzRDQWhjZHN1WjRGYTU0NmV6clVNLUNWb1pVTFdjTWJ1NlFlY3FVT1kwdVVEOVkxVnJB?oc=5",
      "publisherUrl": "https://mediaindonesia.com",
      "source": "Media Indonesia",
      "summary": "kasus debt collector di purworejo berakhir damai investigasi internal terus berjalan media indonesia",
      "id": "7c1f98408180632d",
      "domain": "mediaindonesia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 3.4,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-40ec3530f70c2548",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Kasus Debt Collector di Purworejo Berakhir Damai, Kredivo Tetap Lanjutkan Investigasi Internal - InvestorTrust",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPNDhyeURKOUYwQ0tFYVRXejlucy1uVVhZV2NaSEVWRWFaVWt6QW52c0Jwd0FpT3NES3NkaldISVpHV0FxbVhPLUUyVXItZk11bEJuRGVWSkpHZTc3N0lsbTMyQ1dUanJHYV9VTXRQYXZoSEpabVdpbV9aeTBZNnRsOE1zUVBoNjFqV0hSMGlQN3BJSlBZbkIwbWE2TVpEa1BLY3A3Q2NPd000S1Bwcm96blBQcWxXY0t3OHgwcGVmX0QyRS1uR18tM3FyM0dfQ19f?oc=5",
      "publisherUrl": "https://investortrust.id",
      "source": "InvestorTrust",
      "summary": "kasus debt collector di purworejo berakhir damai kredivo tetap lanjutkan investigasi internal investortrust",
      "id": "64d29f087087d5ce",
      "domain": "investortrust.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 3.4,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Kredivo Tanggapi Dugaan Pelecehan oleh Debt Collector - Bisnisia.id",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9haHZna0pQN0J6bWZRd3BLZEgzU3Q5Rms1VWlSNmJ3NlV2Ri1sUl9Dc3FKQ3RDZHVaXzY0bERfNEw3OFlmS1dFS1gwOHlIUHZEV1FqSG9zcXhVUURzNXdnQ3Uxbk9vUjhLaE5IbGIxWjU1S0pyZ1YwNkhNNVRIRjA?oc=5",
      "publisherUrl": "https://bisnisia.id",
      "source": "Bisnisia.id",
      "summary": "kredivo tanggapi dugaan pelecehan oleh debt collector bisnisia id",
      "id": "5cd376738d73a8da",
      "domain": "bisnisia.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.0,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-25",
      "title": "Kronologi DC Kredivo Santroni Penghuni Kos, Diselesaikan Secara Damai - IDN Times Jateng",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxObkhhN3RGQWh3UzZfRmdNS2xOY25abTNoWURfUHlWaVJrdnhjM3FwMVBwWTdMd0VDbU9BZmR4SW01UmFEM2FieUdNeDg4bGh6SVJJVkNKUUQwWFN1U2trc3hZbkVyYlF0NFZqY1pNZjB5NFFwZmd2c0NVNndtQW5aZjhKYTBhYi1jVkJhSWNzN2c3ODU0LXByaG41S0xiMGlUNE1yaWNPWjNjSmx3aXl3aWdxS3c3akhwZU5sSnhtRmlzZ9IBxwFBVV95cUxPVi03RERPVFRSS2lYN04ySlZ2OVg3T01wTWNtRy10WVJpcWM4dDJnR19VcWQ1VU9oZXBueElCTlpfS0thOTNIanREUGZYYTU4SzdXTlVsY2UtVXJhdjNZN1hZTEVaaWwydEpjeE9MZHk5ZHRhSW12clVhai1uZ2FNeWtHMV93ZEQ2amhkdWVKZHRqLV8xa1k2ckVTTFd6RHpZN1hDNXB2VVJSNXNaZkNxSlB3MWtUV3hvSGJfcU5vMEcxUm0yYnF3?oc=5",
      "publisherUrl": "https://jateng.idntimes.com",
      "source": "IDN Times Jateng",
      "summary": "kronologi dc kredivo santroni penghuni kos diselesaikan secara damai idn times jateng",
      "id": "6d22ec5b3cb69290",
      "domain": "jateng.idntimes.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9862cb48ce97a318",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Mimpi Kuliah Anak Miskin : Terjepit UKT Meroket dan Jeratan Pinjol Pendodikan - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxNajNZTU5RSXZrT2VXRDBuQ3hqZ1dJLUsxZm1GY2RId1ZCby1NY2VhQk0tcVMxRngxc0JUc3dmaklYNEZWWVdibTE5SG5mMHhZNHFQaUZ2MWRnYWVxSnkxTlZrSUp6T2hpUDVGbzEwTEJnVlA4X2dLa1I1ZFlfbUwzQ3M4R2x4bDktRndRSTN5QW9xQ2FuNEJoai1kT3NWcU1lV2NfbWtVVHZZQmxqTHRvTzFVeG1sMV9Sam1sS05iZFRhR3Z5TVM0S3VwTVNYNWdmM3ExQjVSVC1USXlkSzBjYQ?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "mimpi kuliah anak miskin terjepit ukt meroket dan jeratan pinjol pendodikan kompasiana com",
      "id": "c9aa48ebcb8df3c2",
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
      "eventId": "auto-da3000aa77a797cc",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Nasib Debt Collector Pinjol di Purworejo: Berakhir Damai di Kantor Polisi, Namun Sanksi Menanti - Tribunjateng.com",
      "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNeFpyZVdVYWFnQWJIOEU3YUdVWmRvMnJaUVk2RlhtdHk0aGljd0FGVUlrUEVOc2ppQmFmY3lnaGp6TFRkd1R3YzZTTGQ0WmFTNzFNRXVFQ0QzTS1JcEtRNG5LSU80anNaLVByVk9ieGhaUlZOYXBDQ2l6aEpRUERDUmUwRW5ONjNjX19yRGtGRVgzX0x3YWdORm01bVlzWEw0MmZnUjhIWmQzOHQ3R2pIeHdPZVoxLW8tU0czRWpuM29vTFA3SVBSWnNxVnlRM3h1UHlkdVFJU3R6UVE?oc=5",
      "publisherUrl": "https://jateng.tribunnews.com",
      "source": "Tribunjateng.com",
      "summary": "nasib debt collector pinjol di purworejo berakhir damai di kantor polisi namun sanksi menanti tribunjateng com",
      "id": "d11e1b414b97beba",
      "domain": "jateng.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 68.2,
        "label": "negative",
        "negativeWeight": 4.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-798d9bbd99fcdd1d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "OJK Dalami Dugaan Pelecehan oleh Debt Collector - rakyatterkini.com",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPbGFLVHo4TWRQRldDOGFjVWV4ZzdVM285TUlQSHU0b0FKaGd6eWs1ejVxZmpaWHBqWXZrdXlHb0R1cWtjdmhUZTBtbEJDZ2xleW05Q0ZBVE5hcnBQR3ptVTVTQ2JIM0VteVNkN3NwV3RKYms3T2h0OE1HTkRxZktwcEdNbGRNTjZiNzBOcGxOekR4NEJi?oc=5",
      "publisherUrl": "https://www.rakyatterkini.com",
      "source": "rakyatterkini.com",
      "summary": "ojk dalami dugaan pelecehan oleh debt collector rakyatterkini com",
      "id": "4b6af6a3dbcc7e56",
      "domain": "rakyatterkini.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.0,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9616030780be2943",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-25",
      "title": "OJK Edukasi Nelayan Konawe Waspadai Pinjol Ilegal dan Investasi Bodong - banjarbaruklik.com",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOMmRTZWVoQUxONnZiT0ttR181aGRJVV9KcVFRQzU2Ym44RzdoMDN4aWU5bzh3UndYUURpdnVETDJPYk93TWZqbmpUeURwdEpZWDQ2VERFa0NWRnE1YWRYVHFHNEltX3k4YWRlaVVCRTVOTnk5bkVpdHZEUldOWE5CVmtNTnkxTFVJOUZGVkwwcmRIem5MQTN1TEVoYTVBTTg?oc=5",
      "publisherUrl": "https://banjarbaruklik.com",
      "source": "banjarbaruklik.com",
      "summary": "ojk edukasi nelayan konawe waspadai pinjol ilegal dan investasi bodong banjarbaruklik com",
      "id": "1067a8542ff0788c",
      "domain": "banjarbaruklik.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0d7233df6a70d687",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-25",
      "title": "OJK Integrasikan APPK dan IASC untuk Lindungi Nelayan dari Teror Pinjol Ilegal - Suara.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNelhQUHVzYnVOOUpwR3lkeFJXZ0M2aWdtYm9IMGdMTkZwSnM0UE0wT1c3SVRjUm5HZnVPUXRPRldubm1iYTZ5ZWdpaWl3dDQ1ZFVIaUpuZ2xjNXZBSFVvR0xWNklROGx5X1VnNlBYNEc4NDgxelpmMjRZelltSEsyZkZKcnl3aEJCdkFVREt5dk45dUdub3BCVVhTMHJLUVFUSEsxY3kzTWMwMml0NGdhYU5fdXZuaGsyX3RVWTRMcXdIN2PSAcMBQVVfeXFMTlpxaVFLWXVMYjlrZkh2Z2VfV1d3dlF2WG5pQVliaTZjcnZIWXZoOEprb1VBSXE1TjdyY2Y4TVlsX1lwdVBTRVBQczNXQ1ZNck5EMHJQNEh4OFBMZmd3dVF6Rmd1dXo2bUJGUTFkbXA1cmk5c3hQMG03LTdVM0t1NkJndGJQcXRTS0VsdWtDM1djYUpDWndMZEVnaHVfSnk0TUVXODBIZVdpc0dXWnJQRTZuY2JXOFZfbG1Pd3BfTUdjcWVR?oc=5",
      "publisherUrl": "https://www.suara.com",
      "source": "Suara.com",
      "summary": "ojk integrasikan appk dan iasc untuk lindungi nelayan dari teror pinjol ilegal suara com",
      "id": "8311c181f5bf2891",
      "domain": "suara.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 78.0,
        "label": "negative",
        "negativeWeight": 4.5,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-25",
      "title": "OJK Panggil Kredivo dan KrediFazz Soal Intimidasi Penagihan - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTFA3QnEzNldyZEZxRkVpN3oxaHdJZXFXSUk4Y2dMNlVoUUg0anRpY0JhQ3RBVEhnRFJDY2NfLUQtVUxpYkpEeEtDeFJDZDZMSlh2eGdYTHBxVGxrMUhzQU94eVRiMl9IYlpERWZIY3lDNFhpcjNDLWc?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk panggil kredivo dan kredifazz soal intimidasi penagihan achmadnurhidayat id",
      "id": "7884562d570a4c63",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 84.3,
        "label": "negative",
        "negativeWeight": 4.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "OJK Panggil Kredivo dan KrediFazz Soal Kasus Penagih Utang di Purworejo - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1DazZNUjF1a3NNaVlVWC00VXhvclZTbUdCZXRLR0tmSVU2Q0RESzUxckRmLTMwMHdrTEJpM0JZczlYbWlzX21pbnNVVldQaXV0VTN3RDgxNWZ0MTNnbmVHUERWTUdiRWZwb3kwNDZRNUhIVkRqQ2c?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk panggil kredivo dan kredifazz soal kasus penagih utang di purworejo achmadnurhidayat id",
      "id": "a0ef01a6a0f63e5f",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
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
      "date": "2026-07-25",
      "title": "OJK Panggil Kredivo dan KrediFazz Terkait Kasus Debt Collector di Purworejo - beritajejakfakta.id",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1RbDRQU2YxcjJBNjB6dDZBQmYxcnRyQ3FNYTFTaGFvMS1EVkJ2T01PLXptemxjaXVMR3NuLWVuQmxMd0o1bk5obEJvbFRqUGRkUURreFRQdzFvbThiLU1fa1N0a2ZzWDF2eWZ4UllaWUVId2x3UDNlNnNCWQ?oc=5",
      "publisherUrl": "https://www.beritajejakfakta.id",
      "source": "beritajejakfakta.id",
      "summary": "ojk panggil kredivo dan kredifazz terkait kasus debt collector di purworejo beritajejakfakta id",
      "id": "d47754a9fb9d081f",
      "domain": "beritajejakfakta.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 73.8,
        "label": "negative",
        "negativeWeight": 3.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "OJK Panggil Kredivo dan KrediFazz soal Dugaan Pelecehan saat Penagihan Utang - economy.okezone.com",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQRVQ0aTJQTEVvLXpZdXlXVzhlUHZ4R25xSmNiSk9wVWZCNmpvdmwzV0ZDR0stYzdHQWxOd1NURGhYZWNyT0RfWktETDRoQ0Jvek5kSnNxUTZoaDgyMnl1dVVqejdRZFRNY3piLUJ2RjZfa0F5STJWMVNLXzEyUWJGVnZ1eklSVUUyS0c4OWEtNkRkcTMwTEl3YlVpNlhURGU5RzMtcF84YjJIMEVxZ1ZUbndZRE5NV3lMQ2hxNWJOMUNtdVNTOUFqbkpxZ1PSAcsBQVVfeXFMTnlWT0RXeUhDX0Vqc21LSUt1NUR0QmJDRy1Tc1JLMG1RUnp1aW5jcGpqVzhIUjhabFQ3LWV4M19JdThwc1VldTdvQ1B2Vl9wYTY1eGxIVXN3T2U2d3B6YlVXeFJKMVVhSS11dWhsRjdwcTNyR0NlNEVtdkV4SzE1eENyZUduc1ZrWGZaQXhadUg2LWNkcmFzQUMzMGRXXzBOSFU4TUhGcW5MT1VOOVBPOTJCb1dCbkZRa2lINTJxLVFoYkNYYXRUOEtqckE?oc=5",
      "publisherUrl": "https://economy.okezone.com",
      "source": "economy.okezone.com",
      "summary": "ojk panggil kredivo dan kredifazz soal dugaan pelecehan saat penagihan utang economy okezone com",
      "id": "e905290698ff9914",
      "domain": "economy.okezone.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 94.8,
        "label": "negative",
        "negativeWeight": 6.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "OJK Panggil Kredivo dan KreditFazz Soal Intimidasi Penagihan - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNSlp6ZU5GZTZERHRoZ0R4V0MxWHJEbFFOMFpIbWU1SUVmWFpzMFZLTjVTLWlNNkZ2ajg0SnJEb3o5Rl9rNnRXMExTUW1SR3ZuVlNIV2NGY2tsRmx2YUZFcFZRalF3ckxYUUttWmhkRHhzZ1N5Ul90OUpGSWZLR1J3MnZIOHFLQQ?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk panggil kredivo dan kreditfazz soal intimidasi penagihan achmadnurhidayat id",
      "id": "6820e02e03df3539",
      "domain": "achmadnurhidayat.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 84.3,
        "label": "negative",
        "negativeWeight": 4.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "OJK Panggil Kredivo dan KreditFazz Soal Intimidasi Penagihan Pinjol - Akses.co.id",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1fNmdwTS1ETTFKeG9xY1d3UC1Tc2loN1JWakhuUFBQYkRURTR2QzRmWVdEYlRwVW40amU0MHdtT1hLbF9HUTRuQjZ4dHd3cGRUclROcFhIakFBQThBanlFd0djWERXVVRZZE5zT25WeUJuNkU?oc=5",
      "publisherUrl": "https://www.akses.co.id",
      "source": "Akses.co.id",
      "summary": "ojk panggil kredivo dan kreditfazz soal intimidasi penagihan pinjol akses co id",
      "id": "0a9825c43c6f1e79",
      "domain": "akses.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 84.3,
        "label": "negative",
        "negativeWeight": 4.9,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "OJK Panggil Kredivo dan KreditFazz Terkait Dugaan Pelanggaran Etika Penagihan di Purworejo - Harian Berkat",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOdUN2QXRBcTJfUkhpdnZPUk9hRWRIbENvdmNxeXRtcUtyRkxfTGE5cVlQaEpmVkt2SzhMcjJ0WmlWZWFJQWZaTU9CVzY5RDNVMWJxaS1mME5TeGJiNklfNENlYndrV09JdUdESjN2WmIza2VFZllwS3R3OWNLZVZ5c3lRT2g0OVdlMDZ6UEYzLUI2Z0hZQkZpTTJydUpjNzlzLWxEZ1hjS2toazhJTFh5U2o0RUc2NjR3M2s1SjRFMEpMMEhWLVE?oc=5",
      "publisherUrl": "https://harianberkat.com",
      "source": "Harian Berkat",
      "summary": "ojk panggil kredivo dan kreditfazz terkait dugaan pelanggaran etika penagihan di purworejo harian berkat",
      "id": "8187db99e8599af6",
      "domain": "harianberkat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 82.2,
        "label": "negative",
        "negativeWeight": 4.6,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "OJK Panggil Kredivo dan KreditFazz Terkait Pemaksaan Debt Collector - pdiperjuanganbali.id",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNeXJjZ0lua3k1UWt5ZjlFRnd0eFgtMlZjWWZwWEh6SjgwUkRJMGRtUVZsWkc1Z2NLN0xocnpsN2pQODZiMjNWbS1DRzF3eTdTSHZhMXR0a2UxSUdCM0FRUm93cnVnWWxEY1RLLXdlQXh4X1E2WlpuN1lKLTZWellPRjRLYmY?oc=5",
      "publisherUrl": "https://www.pdiperjuanganbali.id",
      "source": "pdiperjuanganbali.id",
      "summary": "ojk panggil kredivo dan kreditfazz terkait pemaksaan debt collector pdiperjuanganbali id",
      "id": "4a39b371845ce090",
      "domain": "pdiperjuanganbali.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 73.8,
        "label": "negative",
        "negativeWeight": 3.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "OJK Pemanggil Manajemen Kredivo dan KrediFazz Soal Penagihan Intimidatif - achmadnurhidayat.id",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQZzRSQWRZQmN4bzVkRDh2MHBfVTY0RmxCWFNYQWJaWnI5ZXl3Q25WdXVyX2xseXhGMFB4SUNUNTFCVjE1V1dEYTJVempzREZfZjdnYUZLZWhabVg3a0wxemh5b0FUQnQzcE1ObEljdG9JWnotdlhaYVlScWltU0pOcDhDdG1WcFVWLVU2ajN3LTVhNDF6bDdoUnZaUncxbDhza2c?oc=5",
      "publisherUrl": "https://achmadnurhidayat.id",
      "source": "achmadnurhidayat.id",
      "summary": "ojk pemanggil manajemen kredivo dan kredifazz soal penagihan intimidatif achmadnurhidayat id",
      "id": "9675753e348f6d83",
      "domain": "achmadnurhidayat.id",
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
      "date": "2026-07-25",
      "title": "Pakar desak AFPI dan OJK perbaiki izin penagihan pindar - ANTARA News",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPYWU4c1JyUk1xaXRUVy1LejJULTFuU3dXanotd25xLWRIclJaV0ZxTnpnY1J2MFhEcjUyQmJDejlUZlVJZ09aUlNWUERwc3FKbk9GVWRtTmx4SFVXc194YzRYOVJSTUtjZWI2YWE4akVuZGlfbm9lTGhMWW53bElFMnJEVFhuQWdtNFJ5WUpqY2FSRXhJNUxDTWdiQlprUdIBoAFBVV95cUxNVGVIQUxfbVYyRGRWNUh5ekZWYzNtYWVBaENsWlZaQUU5eURrdlZpWklvR2ItXzBGNDdqcGw1TzNIUzJ4ZjZjY1BUYlZZNm43Mi1OMml6Y1h3US1OSk8tSnpfcGM0ZV9STFBBX2dwSExDcjhCWDdNd1h5NTAzRk10VTFNZHAxOEJEVkJTeFN4MXh6YkNOSFBmVGxTa1VWVkxo?oc=5",
      "publisherUrl": "https://www.antaranews.com",
      "source": "ANTARA News",
      "summary": "pakar desak afpi dan ojk perbaiki izin penagihan pindar antara news",
      "id": "ea7575381ce5b0bb",
      "domain": "antaranews.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe9f1a15fb891a61",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Polres Purworejo Mediasi Kasus Oknum Penagih Utang Pinjol Ajak Nasabah Ngamar - pdiperjuanganbali.id",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9WeXdhLUF6TnZnbzI3RnBublh5UHhiVEtvWjNNaG1ydW05UmRNVEFfbFpPd0s5SUFiWHhSR0xmQWw0SDN1Nkw2c2E3MXJoUnR2c3REUElKWWFkdFhjbDNNSU9SRHZBOU92UWcxNTJHWGVQTVBFWHFEQUprT2JNZw?oc=5",
      "publisherUrl": "https://www.pdiperjuanganbali.id",
      "source": "pdiperjuanganbali.id",
      "summary": "polres purworejo mediasi kasus oknum penagih utang pinjol ajak nasabah ngamar pdiperjuanganbali id",
      "id": "b2e638e8a5710bce",
      "domain": "pdiperjuanganbali.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3e7fa9e1243d5f95",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Sempat Diduga Perselingkuhan, Kasus Pelanggaran Debt Collector di Purworejo Berakhir Damai - republika.co.id",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPeUtvMEs5dW94OGZtUGY4NHJ2ZnhnY1k5amN3TktBdnBORFZwZUdyWGtUWmtqYWtlT250ZHRkNXp5a2tYNkNCTklqWU5zcThONHZ0aEZ2MzRBNjliWDlKRzJLZVYzVS1BOE8xTXNUOGpWSC0tLXhhZ00xTlV1cm9zdjB6dUFXWFdmTXpwUkpIYkFiZ1RJc0JkRVMyekJLX2IxRVlteWE2VEFPbnI4MnFwcndSNWJnWmg5Z1dDOE9tcjJIUXpMZF9pekxRNVdwbkd5MmxBLQ?oc=5",
      "publisherUrl": "https://rejogja.republika.co.id",
      "source": "republika.co.id",
      "summary": "sempat diduga perselingkuhan kasus pelanggaran debt collector di purworejo berakhir damai republika co id",
      "id": "45f2f8028066766d",
      "domain": "rejogja.republika.co.id",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 69.6,
        "label": "negative",
        "negativeWeight": 4.2,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-4d987d6d4a2db56d",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Skandal Kamar Kos Purworejo: Kala Utang Pinjol Berujung Penggerebekan Suami dan Panggilan Tegas OJK - Insiden 24 - Insiden 24",
      "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxNcWVxWENfWGN6Uk9TTUVVRHRDT0JJR1pGdHlIVkFvZEdNQ0tqRnl2UE1xOVB5OENnV1UtOGNzZXJseW1RVl9wenMxWjJialVXdzh3X2pBX3VWTVQzdFd4TjVWa0d3b3hRLXVaam05cUp4V0ROUEI1dGRWQlltbkp2VmlVQzRaVXZJYWMzMWxMU1BrOWpfSTBzSjhDUkxzUnVGZGlRbGhkQXk1bmZpR1RPWFVRWU5JRGk2UmpwME5mV0hDYzNURGpMSjZmdEpvdVhZZDh6SGhrNGdWTENK0gHiAUFVX3lxTFBPaGFaNGpOTF9ZUGxjQ3dRdk4xUlJNbF85OS1ZMjZNWkdzTmtaTVRvQWFfeFFWbjNsTEp2OGFNWkx3Um54NnlBM0JvU2U4YzhvZU1GX2xzX1UxNkpHZ1FrUVpUZ0h4UWE3NGNXUHBaWFpNVFVwbTFLZHRSVzBhLUNwMjB2cXRwUW8yZUNrU2VUemxuRVFxZ2FCejhaX0FFaldOVFU1U3JXUlNmd2k4RGRmMS1qX2h2SFdMT1FRNzhOUTBPRXFGLV9GRUdQd2NIMDdXRm9RRUFMTDE0RW1OMmRadVE?oc=5",
      "publisherUrl": "https://www.insiden24.com",
      "source": "Insiden 24",
      "summary": "skandal kamar kos purworejo kala utang pinjol berujung penggerebekan suami dan panggilan tegas ojk insiden 24 insiden 24",
      "id": "28f1fd9501091d84",
      "domain": "insiden24.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 66.8,
        "label": "mixed",
        "negativeWeight": 2.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6aeb18c829da4932",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "Tak Perlu Pusing, Begini Cara Menghapus Data Pinjol Ilegal Secara Permanen - radartegal.disway.id - Radartegal.com",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPVUdXTDAtR21fVmVPWkFRdjBQb3lQUEZLVVpwdWctUFNuOVhGX212Zjk2X1dFbkQzRzA5UEF3bjFBZWtGLUdWNTJBT3FEalJnV3JtbFRKMG1Mc2pkbDRJSU9neUVxY1Z6T1ZuT0ZaM0JpS253YVU3b1VzZFVvcXFrZVk5SlBpWXZPRzEtWUYzWS1OYlc0ZnBuUjczaFFVcTVoeC1ncU02SkZBeG1XOENvS1ktZzRVNkxYWHBZanFRY9IBswFBVV95cUxNOXFjWWdQNm1jeHpEQVpYTTROaDVNQ0MzcWloV3dIc3lGNkRZYUxnQnZ3N3VRNjcxNVlSTzM0NkVsQ3Q4ZVJhRS1yM2Z3Z1JTdHctTTc0clNua0FibVRJc1FLcl9ncE5jdmdMdGFNd1I3b0lteHVfVjhMWnd5TmVEUEZQVnNKZzV6RndMT3NKZ2kyVzItY0d2VWdZaFdaa0lON2c3SEJIajBQYVBnZ3cxQmF3RQ?oc=5",
      "publisherUrl": "https://radartegal.disway.id",
      "source": "Radartegal.com",
      "summary": "tak perlu pusing begini cara menghapus data pinjol ilegal secara permanen radartegal disway id radartegal com",
      "id": "162d3487bf8086ae",
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
      "eventId": "auto-2dafb101d7fc5db3",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-25",
      "title": "Tim KKN UNDIP Perkuat Literasi Keuangan dan Digital Warga Nyatnyono, Waspadai Pinjol Ilegal, Judol, dan Narkoba - Berlian Media",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOSjdmUVJjekNHVm1fZDdoMS15enlVUjl2ZzZVR2Y3clFOQW1UQTNZM2UwX0ZFVVVydF9nS2VpUXNoZHBjdnVwMU9PVDRaSkNyU3p0U24xUnBJZG1jbFB6dXJ1ajg3ZnJTeS1jbldoUFN3dWVHMFFIS2hCMDBCYlZVajh1S3c1dmF3aWo2b0dOX0d5RlNVRnJvcnVJUzQtWkdVeUs2NFJ1SnZQcnVLUThUalVvSHhkN3VidzQ5WGpyc1FkdUhQcm1VWFN6cWFmUEU?oc=5",
      "publisherUrl": "https://berlianmedia.com",
      "source": "Berlian Media",
      "summary": "tim kkn undip perkuat literasi keuangan dan digital warga nyatnyono waspadai pinjol ilegal judol dan narkoba berlian media",
      "id": "bfac3876a0df0a76",
      "domain": "berlianmedia.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-9f947e6a10499d94",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-25",
      "title": "Video: Pindar Salurkan Kredit Rp 103 Triliun, OJK Dorong Kehati-hatian - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQcUNqZmRjb204bDdTc1NHUHB5Tm9VaWQ3R1p3ZWRoRFdvU1J1YnVEMkFkR2dWRW9PazBoYVE4cF95YUNrNElHTFk2NHNfUnpaX1lER2t1a2VVTVlBS0JOV1FPWmh4MXhqMzVBdGpHU1Q3MjdRTWVuQ1hpdlkwcUk3bnhYX3NpakZKd1VNaHJfY2phRHY5djFwMU9jQjFDS0VEX0gwOFVUUXRwU0djMmlkWG9zMzQxbjBSNFZWMVJQd21hZERlbjJsWDVB?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video pindar salurkan kredit rp 103 triliun ojk dorong kehati hatian cnbc indonesia",
      "id": "140efebfec906cd6",
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
      "eventId": "auto-c627f401073266d2",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Viral Oknum Debt Collector Kredivo Diduga Lakukan Pelecehan Terhadap Konsumen, Perusahaan Angkat Bicara - Kilat - Kilat",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOWnlhdFVPLWpFanBnaGR6SmYteURiaHFpclFwbmZST2xhempUbmplV05TWWRzTjN0dE9JZUhpaWJrNEt2UU9OWE9aQWNBY0dodWtDSUhyQk1GWENuUDVmeUdwYm9FdTVGakxaSnJkSnZwcFQ5b2N3RjZKYUozWnFDMkRSWHlFSnJ5R0VxUWZnN243YVJDNDBTOTlQX0JTWHl6NEZfRHN5NUIxRnZtQTdVXzg1MlY5WmJYMHFRWjJ6YmxnbmhRdHdjYl9XY1M2cUZFZWpxcXZyT2FvS2pjdnfSAeMBQVVfeXFMUEp4ZjdTclBSYzNGVUpNVzctcExNNFkycFYwd3Fna1FWR2ZlS1J1bDJPNGNoaTJuVVcwWHp4ODlpTE5JT0Vhdjl1dkZfNnE3NFYxellYdDZPbE9mSkhDSTRncWloTklIYWxaWW1ERWlSVGJnRkNOejVFd0Q1UVRPd2pzMl90ek1TVDlNTS1SUEZGUEN5RC0zVnczZXJuaDE0WW90Qjg4VnZ0NG5EOXdRNEdYa3BaSDlrWFZyQXFENVlvZ1k5U0E1VVhkcWx1NVMtS3FVVzhiUGFiN0J2bG9fREpjc2c?oc=5",
      "publisherUrl": "https://www.kilat.com",
      "source": "Kilat",
      "summary": "viral oknum debt collector kredivo diduga lakukan pelecehan terhadap konsumen perusahaan angkat bicara kilat kilat",
      "id": "260a65d231505625",
      "domain": "kilat.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.0,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-25",
      "title": "Viral di Medsos: Modus Mesum DC Kredivo Minta Bayar Cicilan Pakai Seks, Anggota DPR RI Desak OJK Cabut Izin Usaha! - Kalteng.co",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPNUN3WXB0cl8zdjJwbzlPWUdkeUJ4MTRBTV9qXzREZnNIQ1FfZnZvdXhwMWlpTG0yY2hjQ1lGUDh3a0hibXB2eW9aSHJoU2wyTVhfZ0FKNGxidFZhMklrVldLbGQ0RzZEdTBJRklVOXpjTTJsc0plY01UUHpZaGg4TGlCWWZ0RVQzZW9hSmM3S2NPR3h5Wl9fdDluM0NRa1FxZno3N0NXVlpvNVktYk1aaE5JbGpZRmFtWk1JM2dXOFV6N241Nm5zYkYxcjBZbnNlbXJN?oc=5",
      "publisherUrl": "https://kalteng.co",
      "source": "Kalteng.co",
      "summary": "viral di medsos modus mesum dc kredivo minta bayar cicilan pakai seks anggota dpr ri desak ojk cabut izin usaha kalteng co",
      "id": "1bfa865266e9cbea",
      "domain": "kalteng.co",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 50.0,
        "label": "mixed",
        "negativeWeight": 0.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-c78f5bbabce504ed",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-25",
      "title": "Wanita di Purworejo Ngaku Ditawari Lunas Utang Asal Tidur Bareng Debt Collectornya, Suami Curiga - Tribunnews.com",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNTVYxcm1UWTdHWm1KUGJuandKMC1wZ3Ywd0dYUlRWdldxc1JXUjJ5UC1sNXlxNnVsU3JxMTM0NnZKbEF3QWlPUmZxMU5TSmZQVXR4UDY4M3o2ZWpweGpkc0g2OExwVHZwTmxncmJ4aXVwU0Q4M1M2QXNZeDd0ZWlEQmwtc3ZCaGNrWGZYckJ1cnlxcnljNzB5QnNxOGVDS0hNdFdOdDYtVDVXWGYwSm1jUmlQa2thVzZsRHJ1Ykp6WHJVaVhHeVN3emUxYTAzQTNFeWo3NngtaHc?oc=5",
      "publisherUrl": "https://newsmaker.tribunnews.com",
      "source": "Tribunnews.com",
      "summary": "wanita di purworejo ngaku ditawari lunas utang asal tidur bareng debt collectornya suami curiga tribunnews com",
      "id": "86f4bcec6e72cecb",
      "domain": "newsmaker.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-57239ee57c900e21",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-25",
      "title": "Yasonna Laoly Minta OJK Sanksi Berat Kredivo dan Mitra Penagihannya - gesuri.id",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOOXFsa05SXzl3WVVCNGY2OGJRVUhzNGF1SzYyalZ5YUhMaHQtY3hmVFhWUHQ5OTdZemRCNHlpelBBTVhkWW5fcTZiWGRoOWVTMUJLYktLT3RwcWJXQWdxRTRYd19IX3NpOWp6Rk5waHdUNzAzbDR6aTlvSnZsX0VUcDlMNDlzQjU3VVJHY3NfNy1leE0weUVlTEU3N3V1TTluZlRiVlJRRWp5MFZqOTFXbkZTY9IBuAFBVV95cUxOOHBuSkxuMmExeURXeEh0Z1RvZGtUY1djaHBrWjZqUzRYc25YaEg2eHBHMEpSZ0VjMTduMDBpUEVEXzhQSzdocE9EMWw1UXdDVDNoTTNNZllTMC1GazBSQV9uem9UaHFOdXNydkMtVFlqX3o1c0NXOFUwaDhPM3hnZGZwTnNOLVMyR3hWZHkxRDJDdHI5TTk1dWtQU0VHTW9pb24xbkhja0VkR1lMc1F5WXUtZkM3X21J?oc=5",
      "publisherUrl": "https://www.gesuri.id",
      "source": "gesuri.id",
      "summary": "yasonna laoly minta ojk sanksi berat kredivo dan mitra penagihannya gesuri id",
      "id": "6e412eb2fb1e5a94",
      "domain": "gesuri.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-26",
      "title": "Angkat Isu Pinjol, Film Drama Komedi 'Ketok Mejik' Siap Tayang 13 Agustus 2026 - MetroTVNews.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNSmROZWJHUFhsdXdmbzk5VnZXMUVJdkpUeTRhUjltTVhDTGVLQkVkb3BMeHBNTGhEWWkzTURPeVpXay1VTEl4dEtmWDhOcGVLUFNnX1VnR0Q0c0JYMVZBWHE2c0dPWU1Ga1pWWnpqRFdTNWhQMGN4YVpELXpIaEl3V3hGRERJR09teFVBSl8wUEgzWmlQcWt0SVJZdmpKNHJnYkpBMlJHU2N2aTBsa3JMbjdVRnQzUzZr?oc=5",
      "publisherUrl": "https://www.metrotvnews.com",
      "source": "MetroTVNews.com",
      "summary": "angkat isu pinjol film drama komedi ketok mejik siap tayang 13 agustus 2026 metrotvnews com",
      "id": "9263202219e9e543",
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
      "eventId": "auto-36cd2cf400b7ba60",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Bikin Debt Collector Ketar-Ketir! OJK dan AFPI Didesak Perketat Izin Penagihan Pindar - jambiseru.com",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNWHl5eFh1ZDdQNTNwbks3TjB0ZE5XRjhzZ0lVOHM3b21IdzdzbXdHcGlJRmlvc2txenJVeEJxbjZ2LWZ4dVM2NnFQRVg3aWtGeXhuWTBSOWttcTB3WWdPLXNGdk53TUppTTdGczNMUWNwYXpMQjhXRF9HekRhNEZLRnNfVFBzNmRWVmkzcDBBMS1yaWFXRGZxYm9samZ1a0JtbXc2Q3lqSGZrSlFVUDVEcUVES01BaWR2TllhWl80TXQ?oc=5",
      "publisherUrl": "https://www.jambiseru.com",
      "source": "jambiseru.com",
      "summary": "bikin debt collector ketar ketir ojk dan afpi didesak perketat izin penagihan pindar jambiseru com",
      "id": "a581275c432bc256",
      "domain": "jambiseru.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.0,
        "label": "negative",
        "negativeWeight": 3.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-29f9a92b63448aa1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "DPR Minta OJK Sanksi Kredivo Imbas Pelecehan Dialami Debitur - Tirto.id",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQSVZNWkRjejFQd2p6cmZ1YlFxLXFsa3BUWUVUVTdkUFBqRUlVMzEwenhjY2EzSjRBTlJvSE5Rb3NCV01vSTJ2VGxoUC1rVEZEMjVMZElIRDd0dmRNaHNqR1FkWUZvSkpnTkNLQklrQmc0dmxMeUJqZVdCcEFZQ1ZsbW1SS2oxMi13V0JoV2lDMA?oc=5",
      "publisherUrl": "https://tirto.id",
      "source": "Tirto.id",
      "summary": "dpr minta ojk sanksi kredivo imbas pelecehan dialami debitur tirto id",
      "id": "de682c580427a6c8",
      "domain": "tirto.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 85.0,
        "label": "negative",
        "negativeWeight": 5.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-26",
      "title": "DPR Minta Pengawasan Penagihan Pinjol Diperketat Usai Kasus di Purworejo - garuda tv",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQRXVKdVV5emxrdkowczV2aklCMlZ6dXZ0Z2RyLUs1emlzLXNzRDFWT1plNkxEU3JqdVVWOW5ZXzRLWFBTQlBiaW5aZWZWOHA4dDQzNVdSQ255Yk5TVFhYQ3FUdEUzUl9FRE50d1FyVzR1RkZzakt6bXliRUFQTXVEYUNRYy15cG5VcElhT3Z4aWppb2xlclE?oc=5",
      "publisherUrl": "https://garuda.tv",
      "source": "garuda tv",
      "summary": "dpr minta pengawasan penagihan pinjol diperketat usai kasus di purworejo garuda tv",
      "id": "e711b688df22646e",
      "domain": "garuda.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0963e15696e9f35b",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Debt Collector di Purworejo yang Minta Hubungan Badan demi Lunas Utang Tak Ditahan & Berakhir Damai - Tribun Video",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNaGtXRzhhQkZ5MlduUENPQk92Q2ZKSXNpSU01MHJkYS1Ra1lwSW93NW94M1V4a2FyZmdhYnh3aGUwOHVxQkNkVW0zaTk2WUM1SExiZ2pnUlkzSjNVQVNJa3g1MlJMcHdQU05DVFhuaGJPNGt2T1dYY0hrTW1lbFFKTnFFbzVYM3pTN2xRY2hBall4OFFIQzVBTFc5b2tDS0ZLMUczT2QzcTB5QWdlcUkzdDQ0NUJmUGdoSHlacUNGZTJycHNmWVpab0hYTW9ab01mMDJTdw?oc=5",
      "publisherUrl": "https://video.tribunnews.com",
      "source": "Tribun Video",
      "summary": "debt collector di purworejo yang minta hubungan badan demi lunas utang tak ditahan berakhir damai tribun video",
      "id": "b286bced9837f8d9",
      "domain": "video.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.2,
        "label": "mixed",
        "negativeWeight": 3.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3528265579759122",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Kasus Debt Collector Kredivo di Purworejo Berakhir Damai - terkenal.co.id",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNTWRhWl8yWVZMR0ZobEx0SW5qYkJPV1RDZDVNWE1FVi1fRFFnNGRiUXBIM0lfSTE5Y2k1S0dPN1M2bGMwelIxUzVfUlAzZTJrUzhULXU3M3Vna09ld3lqRlpTMFA0Y2hpLVhESTFYd1VaU0JITThkalNva1pONmNQemVoMHpxS2c?oc=5",
      "publisherUrl": "https://terkenal.co.id",
      "source": "terkenal.co.id",
      "summary": "kasus debt collector kredivo di purworejo berakhir damai terkenal co id",
      "id": "a076fc84853430e6",
      "domain": "terkenal.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 54.2,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Kasus Debt Collector Pinjol di Purworejo Diselesaikan Damai Lewat Mediasi - garuda tv",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPN0RSUU9RcHduQTRUal9YSFFveHB5N05EWmdkcmJuenNtdnp5Q2ctRjVxTzZ4Nm44SnBRZk5kckZJTGE4cmxSbXRLMFBGZ21NZ2xfU3RIRHM5TG01U1BEVlZwLUZzNU5aNHBFZHBTem1JMHdKNTFqMGtDVWFkaGFjZnVSbUhpd1hmM1VPN3pXZFVKYzZBdWFJ?oc=5",
      "publisherUrl": "https://garuda.tv",
      "source": "garuda tv",
      "summary": "kasus debt collector pinjol di purworejo diselesaikan damai lewat mediasi garuda tv",
      "id": "d9388e2acc870763",
      "domain": "garuda.tv",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-3035ae37cac56fde",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Kasus Debt Collector Purworejo, Kredivo Lapor ke OJK - terkenal.co.id",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQQjc4eG1NUGRnby13dmRQMzNnMURHRk50YzVZaUlrbFMwNDNPODhuY2pNZFBpRWhDZ0NJN0RJUUhfa29zLU1ibDZuckVTYnBucnZzSHRBQlNGYjB4QU4tT2RZQ2NLRlhHR1JxdXRQbXFrMHg5VUtLajJOTkZKSF9JaQ?oc=5",
      "publisherUrl": "https://terkenal.co.id",
      "source": "terkenal.co.id",
      "summary": "kasus debt collector purworejo kredivo lapor ke ojk terkenal co id",
      "id": "d7e120db09cc0053",
      "domain": "terkenal.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 64.0,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Kasus Debt Collector dan Nasabah Digerebek di Purworejo Berakhir Damai - Liputan6.com",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNMnVKbEpkTy00YUNZdm5ON0pyMEpmbHp3aDVWUUpuWXJuY3FSb3I1ZXl6Z2UxTzZZNkRIalJlUDVhR3BoQ1hoSTd1a1AzMWtlcVFrVGtnazYxS3hYRWJMWGt5WWdsVW9ncVVnbDdUckJWaDVkQWppXzlTZnFDc2x3RGJpSGRRVTJ5MDFLYmtua1ZSWU9FQlBYdUpkUzVremJFR2t3Zk9sS045bTczOF9EMjVSSGtmdVp1RjR5c9IBrwFBVV95cUxQcnlqTXRaUExfN2lka0NyNzVrY2dyUFNxckNYeEhtOHJDLTZuYkF2NjlLLWVvcDJZUEFpX0swdm5NTDZMQVRta2xTME9UNWxGRi0xWnJNUzUwc0docGRlb2dSZEpidGlKajRkdW91by03Yy00aDA0eThzQU9kU2cxVklzMkZoRGtaMFNLd1daRS1rcTdacEZ4dTlfWHJYZ0FEdi1IeURLVk4tSXBWUjI4?oc=5",
      "publisherUrl": "https://berita.liputan6.com",
      "source": "Liputan6.com",
      "summary": "kasus debt collector dan nasabah digerebek di purworejo berakhir damai liputan6 com",
      "id": "8ff021568d81a84f",
      "domain": "berita.liputan6.com",
      "sourceClass": "established_media",
      "sourceFactor": 0.85,
      "sentiment": {
        "risk": 54.2,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 1.4,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-ec0fda1d99993d0f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Kasus Debt Collector di Purworejo Damai, Investigasi Kredivo Tetap Jalan - Qoo Media",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxONGtTa1AzUEZHUUxVVDdOY3VENjdrUTBSWkh1V0lIOWlCd0Fya3lPRkNlUUY1M2g1ZGk1Q1UxaGd5UE9PS0dycnZHald3clByN3RRQnJHTFpXMVl4NnNNSUVFTDQzZzg1WThNLVFvaWRLaHI2UUkxSDJzUXpyaUotZTQwM2pxcUxtMkJ6MjBWcFFsb0QwQzZfOWpjTdIBowFBVV95cUxPZ2RnYzdxSGl4MGJobkM4UDVDVmRCQUtkWjdZZjg5ZlhDaG9uY0FlZWpTbXZZaFFNbWVpbzgzckJvaTk1aHp6WkVhbEYwa09zbDB6ejRrRXRpUEhjVFB0MjVjTEdOeWd2eE8wdGdBLVVTRnhBb3lNNHJVa0RzZ3dPb2lacE1sMGwydjFoWFZWUW5VaHRpZVF6SW1LSDcwZ2hBWTFr?oc=5",
      "publisherUrl": "https://www.qoo10.co.id",
      "source": "Qoo Media",
      "summary": "kasus debt collector di purworejo damai investigasi kredivo tetap jalan qoo media",
      "id": "bdd173c49c27346b",
      "domain": "qoo10.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 73.8,
        "label": "negative",
        "negativeWeight": 3.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "OJK Investigasi Kredivo dan KreditFazz Terkait Dugaan Penagihan Bermasalah - youngster.id",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOemVMTG1HLTB4bkVsOEFlSU9lVVlSWmdiaXAxcHdBZng3blpvN0lxN0xYT3lpZ1hqOTY2Y2hoSjdRQmFGWkRNTDFyQXFscWRlTnRaWUVaWGRnVk9CQU0wOURMM1BOc1NBWXNEbGpEY0ZOckNRYmY3VjI3TWNNMlJzX1oxRndITkpHNVBmNy03d0dleGl1MDNpdWs3N212dzlBQy1ybEZJSy01ZXZhZHIxeXUyTmxiUWtwemhobThjc2UteEtoTm5sUNIByAFBVV95cUxOemVMTG1HLTB4bkVsOEFlSU9lVVlSWmdiaXAxcHdBZng3blpvN0lxN0xYT3lpZ1hqOTY2Y2hoSjdRQmFGWkRNTDFyQXFscWRlTnRaWUVaWGRnVk9CQU0wOURMM1BOc1NBWXNEbGpEY0ZOckNRYmY3VjI3TWNNMlJzX1oxRndITkpHNVBmNy03d0dleGl1MDNpdWs3N212dzlBQy1ybEZJSy01ZXZhZHIxeXUyTmxiUWtwemhobThjc2UteEtoTm5sUA?oc=5",
      "publisherUrl": "https://youngster.id",
      "source": "youngster.id",
      "summary": "ojk investigasi kredivo dan kreditfazz terkait dugaan penagihan bermasalah youngster id",
      "id": "75d0463032044468",
      "domain": "youngster.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 78.0,
        "label": "negative",
        "negativeWeight": 4.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "OJK Panggil Kredivo dan KreditFazz Terkait Ulah Debt Collector - Ibukotakini",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOZ1gwOXBMRVlXOC1oSzRKdGl5T09LV1gyaERwN0FycGdpMGlTSGZQenBtWks0bzRGX0FScGdNMVRHdUkwQ2R0bjF1UjFPLWh4QjYzeTRCWDdybnNQTmEwekZ5cUFkOWtScmFGaFQ2bXpQd19KeFp6eG0zVnBXdzluVDlveGtHV00xM3hMY09VZmVnNnJzM2fSAZYBQVVfeXFMTmdYMDlwTEVZVzgtaEs0SnRpeU9PS1dYMmhEcDdBcnBnaTBpU0hmUHpwbVpLNG80Rl9BUnBnTTFUR3VJMENkdG4xdVIxTy1oeEI2M3k0Qlg3cm5zUE5hMHpGeXFBZDlrUnJhRmhUNm16UHdfSnhaenhtM1ZwV3c5blQ5b3hrR1dNMTN4TGNPVWZlZzZyczNn?oc=5",
      "publisherUrl": "https://ibukotakini.com",
      "source": "Ibukotakini",
      "summary": "ojk panggil kredivo dan kreditfazz terkait ulah debt collector ibukotakini",
      "id": "a2ca5a15ab9fc87f",
      "domain": "ibukotakini.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 73.8,
        "label": "negative",
        "negativeWeight": 3.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-26",
      "title": "OJK Telusuri Dugaan Pelanggaran Kredivo Terkait Penagihan Disertai Pelecehan - FORTUNE Indonesia",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPckk0SXExWUJEQXF6Z1hsbXZGYVFqYVAwYjM2SUxhUThUMXU2Z1d6VHp5Q2ZScUZBZFlJSzlMOFpELVlDM2JKQTY5QlEwUlhiclBUQm1TdDdVSFN1eTBXaDdpX21LNXBnNDYtM090UXphUWlLOXNHaERrTFp5cE9RUlVsamVnT216SERiYXBqV0hKN0hEbHFMN1hFdUhodFgwX2J3OENIMjlZdmdMZkdBQjZGSmFtMFlpek1UcWZSQlFOQdIBxwFBVV95cUxPNEZVY21OMWVYSEpFWUNwTEFYMi15bDZXM2R3Zi1FUzZUMG5aYlk1czhtN2pyOUZSMU5RMmlETjhycEhrbmktcFdzdTc0NW9jQlMyMTIzS014eTRTQk5lMVJFSXFCcTFjUEY1MWF3R1VGTTI3RW53Wmx4RUlxeE9fZXYtVVVVUS1jOExkUmdDZUFlc2J1V3VabHJ0QVQyOEtwZ0NsekV3c3Y2bU1OOWJZSnhOV1Q0VV9sYnh3VEltcUdlVzNzdzU0?oc=5",
      "publisherUrl": "https://www.fortuneidn.com",
      "source": "FORTUNE Indonesia",
      "summary": "ojk telusuri dugaan pelanggaran kredivo terkait penagihan disertai pelecehan fortune indonesia",
      "id": "e2fdc23b25603457",
      "domain": "fortuneidn.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 93.4,
        "label": "negative",
        "negativeWeight": 6.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-26",
      "title": "Pakar Desak AFPI dan OJK Evaluasi Total Tata Kelola Penagihan Pinjaman Daring usai Dugaan Pelecehan - pantau.com",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNNXF3bmRxU2IyNlQyYlRiTGpvOVlZMnVFRERPUUJ5ampYcUtRWWpDWDU3S1R0YWFnX2FTVUw0OUM5Q2xFeWdwanVLRHlQUWtiMTc0SkU5cTFrbkQ4SHdpdlY2a3R0aFl0ZGFsUm1ucEhvWjE1bHFxVUZVcnB4TTNTYTZfdHFHQUo2LWc1X1VuOGd6b1J1Ri1LY0NEaTcyZFpXYnlsVVQ1LXpubjE1MDF2Ri1HUGpobFZWR292NWdZTGRPNEJTOU9Lc1hPbHdtVGNUSk9j?oc=5",
      "publisherUrl": "https://www.pantau.com",
      "source": "pantau.com",
      "summary": "pakar desak afpi dan ojk evaluasi total tata kelola penagihan pinjaman daring usai dugaan pelecehan pantau com",
      "id": "8a8164ee18f08371",
      "domain": "pantau.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 4.0,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-0f2c5f8ff0e43998",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "date": "2026-07-26",
      "title": "Pakar Desak AFPI dan OJK Perbaiki Izin Penagihan Pindar - Berita Moneter",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOM0FZRTlvTEZNb0NHTEhxd2dCRXlvX0NENG5JV3BfV09ta2JFZlZzMVFuX2dmV1JUTVd6SEhmV0NtRXQzU1RrTzhWNkZuZzluY2RmWEhpQmd6QkdtVHB2TlNReXR6RDQ2ZEFiTWZYX0FCWkZTb1RwaTcxSU1rRDJjZTFnV0hkMnNEa3c?oc=5",
      "publisherUrl": "https://beritamoneter.com",
      "source": "Berita Moneter",
      "summary": "pakar desak afpi dan ojk perbaiki izin penagihan pindar berita moneter",
      "id": "ac893bdd310f26dc",
      "domain": "beritamoneter.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 57.0,
        "label": "mixed",
        "negativeWeight": 1.0,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-fe9f1a15fb891a61",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Pengamat Finansial Mengingatkan Potensi Risiko Gagal Bayar Fintech Lending - Readers.id",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5fSmxfV0ZHWkJBWXFDNXVKQTFTaHBUQWFxR01xMC1WR3MwSUFVLWhieVJFdlZPRkV6aG1mOVMwVEtER29ucW1qa2NYeUFzS3BFRTl3RGtJZUtuZXRvTDB5WW5iTlNsMDhHZW5rRjdMcmdodkU?oc=5",
      "publisherUrl": "https://www.readers.id",
      "source": "Readers.id",
      "summary": "pengamat finansial mengingatkan potensi risiko gagal bayar fintech lending readers id",
      "id": "3db36ffbd7baa3ad",
      "domain": "readers.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 71.7,
        "label": "negative",
        "negativeWeight": 3.1,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-68cb240172b7c762",
      "eventType": "credit_quality_stress",
      "eventSeverity": 0.58
    },
    {
      "date": "2026-07-26",
      "title": "Pinjam... Pinjam... Pinjol selaluuuuuuu... - Kompasiana.com - Kompasiana.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNU0dJQkx6RXVOc0J1LXA0TXYxVm9mSEM0OHpydFZxejJZb3kwMVFJV0ZtWF8zUXRSUF80YWRjbUlBOUFGNVE2eFpKcHJqTVdQRXNLYUdrRnR6M2VGY3c5djRPRzVpNGsweUF0UUlIMTdRei1fVjktYmJrZzdxaGpJSTcyQkt5R01wVmpGbi1pZUJPZi1CTDB1dUFZV2vSAaIBQVVfeXFMTVJoV01TeFYyTVNRVjNFYnloQm54RzE5cS1HZUgyN2UybTMzcHQwbUxvZU5XR0t3cFVXa2psakt1SHBCZ0Y4NFZsZ1Rhdmg4VEtNYm8wX2hKblRKWW9Zc2Q3ekM3NlktZWJlNVlZSEpxWmNJUGgwT1BMSUR1c0lRbHhNMnMwWHA0TWdoYnZ1c1M4WXJjLTZqZksxLWVldXhuZzR3?oc=5",
      "publisherUrl": "https://www.kompasiana.com",
      "source": "Kompasiana.com",
      "summary": "pinjam pinjam pinjol selaluuuuuuu kompasiana com kompasiana com",
      "id": "c37d43e2a818b52d",
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
      "eventId": "auto-44ed4027fe5f4929",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Video: Tekan Kredit Macet di Pindar - Pegadaian, Bos OJK Pesan Begini - CNBC Indonesia",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNREJGdF9vYmpoN2Q2eTk0WVJQQmJ1OE5TRzUzdUhBN1Z2eHF5YkRpVUlQbENiTlAwUW1maXhkazhmQUdXVUlUOFNaV2JJSTNyczNVUS1rd211VWt1QVRsRjJVWldtSXlFUTE3ejNGbENkUFpLVWpXclhranhZUUE4TjR2SjhMOVVLTFRVRlppdUpUS3NZUjI1WUVEWVZDYlNCSF9IaFR4MW14Y3VjcTIwYU5VNlJIOURKMk9JVU1rcE0wYXFsZGhJ?oc=5",
      "publisherUrl": "https://www.cnbcindonesia.com",
      "source": "CNBC Indonesia",
      "summary": "video tekan kredit macet di pindar pegadaian bos ojk pesan begini cnbc indonesia",
      "id": "8a4b0925258e0f0b",
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
      "eventId": "auto-db86fdf664dd6807",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-26",
      "title": "Yasonna Laoly Minta Pemerintah dan OJK Tindak Tegas Dugaan Pelanggaran Penagihan Pinjol di Purworejo - TribunWow.com",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQcmhjNy00SG9EWkdFdGI4TXFSOU45RVlXSXVOWF9wUW91QjFJSjRwb1NJUmp5WXpfNk9jWS1XMkxObm5Gald4UEQ5S3hyQ3p2azUtV0Q0ZDYxc2ZNMUNuYUw5Q2gzcEc4VzdTelJkUDJiU2Y1ZzBfa2NiblhsbjBNd21SVXdSOW56Q3pZcDB6bm9XY1dmYWdrbnk1YTdtb0J4aXQ5OHRkcW1GYmt3bzN5VENLZFV1U2NWTEstYm0xMGtDMTk2dFRnZWRDNjN4OXFxZ0tHVUNB?oc=5",
      "publisherUrl": "https://wow.tribunnews.com",
      "source": "TribunWow.com",
      "summary": "yasonna laoly minta pemerintah dan ojk tindak tegas dugaan pelanggaran penagihan pinjol di purworejo tribunwow com",
      "id": "58ff690ce7b710eb",
      "domain": "wow.tribunnews.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 72.4,
        "label": "negative",
        "negativeWeight": 3.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-6ff427ade1b6ff80",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-27",
      "title": "Foto OJK Panggil Kredivo dan KreditFazz Terkait Prilaku Debt Colletor, Minta Lakukan 6 Hal Ini - VIVA.co.id",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPa3lVSGpaQzBfZVM3dGFveTUtVEg2cHRGWGVwa1A1Tk5DcUtWb1F0ckFOcU9xTDdVWDBaRHZCN0tEeWQxMDM1Rm5jVHFGUTJpcnF5TVllNm5WWEd2V0Rzd3F6MWt4ZkhTNVVMY1I2UW5JcWk2SnlIR2tLMUtzWFVieWhNT2ZhSW5VSXhjMFVEckg4MGhlTnIwdzJnSWZrLWMzUW16Zm1NZ2VWdUt0UmVIMjJqZGYyYWx3YlA4cmhVODBvQQ?oc=5",
      "publisherUrl": "https://www.viva.co.id",
      "source": "VIVA.co.id",
      "summary": "foto ojk panggil kredivo dan kreditfazz terkait prilaku debt colletor minta lakukan 6 hal ini viva co id",
      "id": "13ecb8648b13d2f5",
      "domain": "viva.co.id",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 59.8,
        "label": "mixed",
        "negativeWeight": 1.4,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "regulatory_action",
      "eventSeverity": 0.92
    },
    {
      "date": "2026-07-27",
      "title": "Jakarta On The Spot, Bhabinkamtibmas Kayuringin Jaya Ajak Warga Perangi Judi Online dan Pinjol Ilegal - Tribratanews Polda Metro Jaya",
      "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOWml5TTJTSHVlZTItM2Fic29Fa2pQSWk3cEY2Sm5ZVWw3NE5YRUYwdlZ3YkZ2S1JCSmVtMzBWZWVYVmQyWTNlR1FSbS1oR1NYd0R1aGZHZzNTdlRVTTFNODZXbmhhQ2pXUURpc0VoM2ZuNGpMcUsySmhZZzFEbktPSU1Ia181VEFLOGVxMHloeFFoQk9IbHplQXpxMEZrQXRxbXpJODlHU1VQZk9ObUtiVWdBVTA4S1RWaGtVQjBZUktSTnd4OWZ2V1daS2p1X2hxWEUyNDRqTQ?oc=5",
      "publisherUrl": "https://tribratanews.metro.polri.go.id",
      "source": "Tribratanews Polda Metro Jaya",
      "summary": "jakarta on the spot bhabinkamtibmas kayuringin jaya ajak warga perangi judi online dan pinjol ilegal tribratanews polda metro jaya",
      "id": "685cbca8370db17f",
      "domain": "tribratanews.metro.polri.go.id",
      "sourceClass": "primary",
      "sourceFactor": 1.0,
      "sentiment": {
        "risk": 60.5,
        "label": "mixed",
        "negativeWeight": 2.0,
        "positiveWeight": 0.5,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-2d72c9de566d9e6f",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-27",
      "title": "KIP Jambi Dorong OJK Perkuat Keterbukaan Informasi Soal Pinjol Ilegal - RRI.co.id",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOaE53QjVvNldmdG5vS3VIOFdXSlp0LUJ6ME82SkdZdWdJOWQ1UE9sRmxpc19PYzZOZ0FXVGtLZTRVdjAxbXJXUjNYS0xXanVvVmZNMUpsLWhnenY1Sk54cWt1V1lQeVFCdHdtcGllanliSElSbzdfWGxnRFBfOXZTWDc0TWhxZ2ZJcmFaOVlYcFEtdlFFbVl3YUgtMndFVDFCQ2pNRTdwdzViZDVGczM0?oc=5",
      "publisherUrl": "https://rri.co.id",
      "source": "RRI.co.id",
      "summary": "kip jambi dorong ojk perkuat keterbukaan informasi soal pinjol ilegal rri co id",
      "id": "4d60b735f8ec4032",
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
      "eventId": "auto-d45a3300d47a7f69",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "date": "2026-07-27",
      "title": "Kredivo Usut Dugaan Pelanggaran Penagihan oleh Debt Collector di Purworejo - Bisnis.com",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNMy10RWk3dWprdzYtbGd6ZEF5djQxZ3ZjYkZoeGtoQmY0blV0RlY0Rm1OYkZTSXFhNEJDNEtKdUIzVTJLS25KeEVaX2hKUThUWHdxQTZmWUJBNUpIM1RKa2dDODNBcFJhNXhJYUN2OVZOUHNwM3B0QmhPbjNEUzFQRTVyUnlDSWdsZkt6X0xaaTE3QVJhRUR3WEpxY0hmWWM2Yzd1NXppVWlNSlJnVU03b0RkZ1dwbU12OUxOS3hFWFhoOFNGYWZGSg?oc=5",
      "publisherUrl": "https://finansial.bisnis.com",
      "source": "Bisnis.com",
      "summary": "kredivo usut dugaan pelanggaran penagihan oleh debt collector di purworejo bisnis com",
      "id": "cc88f6cb68a695ba",
      "domain": "finansial.bisnis.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 86.4,
        "label": "negative",
        "negativeWeight": 5.2,
        "positiveWeight": 0.0,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "kredivo-kredifazz-purworejo-2026-07",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "date": "2026-07-27",
      "title": "Merasa Diintimidasi Sebelum Jatuh Tempo, Nasabah Dorong Pengawasan Pinjaman Online Diperketat - Redaksi Jakarta",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOaHZWYmxqRmhjcUpiMG5qWW90bnNRYXBHcF9pNDl0eFRHb2s1ckxvbUZPNFZwUmYxNWd2ZUZ0MFNiRlh5cmlheDRMcS1qQzU1cWo0eklfSUJOUzhfcjhqZG5rZzZMSFlhNUx6SnliMzZKOUd1V3VPVnlvN2ZXQWVObE8yRGN2eG1fQmpHRUxXQ2hyQkFScHNONldpVnR1amZBUVNIbWFKWjRLR1lrNExoY2ZSWHFQR3pYWERVbw?oc=5",
      "publisherUrl": "https://redaksijakarta.com",
      "source": "Redaksi Jakarta",
      "summary": "merasa diintimidasi sebelum jatuh tempo nasabah dorong pengawasan pinjaman online diperketat redaksi jakarta",
      "id": "94278c98d48b4284",
      "domain": "redaksijakarta.com",
      "sourceClass": "other_media",
      "sourceFactor": 0.7,
      "sentiment": {
        "risk": 61.9,
        "label": "mixed",
        "negativeWeight": 2.5,
        "positiveWeight": 0.8,
        "method": "deterministic_id_lexicon_v2"
      },
      "eventId": "auto-03b11e6dc036a162",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    }
  ],
  "socialItems": [
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "W2kSooe3PEE",
      "date": "2026-07-26",
      "text": "Aku pernah berpikir pinjol adalah jalan keluar #Pinjol #Utang #BangkitDariUtang #CeritaHidup",
      "url": "https://www.youtube.com/watch?v=W2kSooe3PEE",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 57.0
      },
      "id": "2af5167379fcd6e1",
      "eventId": "auto-42574fcd200fc093",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "EBWrZROjfvw",
      "date": "2026-07-26",
      "text": "Aplikasi Mattel dan Penyalahgunaan Penagihan Pinjol yang Bikin Heboh!",
      "url": "https://www.youtube.com/watch?v=EBWrZROjfvw",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 57.0
      },
      "id": "9615ad23b3c901a1",
      "eventId": "auto-7f1c09e1410a4bc3",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "jNYEyHNORSM",
      "date": "2026-07-26",
      "text": "Berapa Sebenarnya Diskon Maksimal Pelunasan Pinjol Paylater  Kredivo, Indondana, Shopeepaylater?",
      "url": "https://www.youtube.com/watch?v=jNYEyHNORSM",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "efb5ef002083a319",
      "eventId": "auto-6b8046983ccabd39",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "y8F5RzGTh2o",
      "date": "2026-07-26",
      "text": "Dampak Buruk Penagihan Pinjol  Teror hingga Korban Bunuh Diri yang Tragis!",
      "url": "https://www.youtube.com/watch?v=y8F5RzGTh2o",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 95.0
      },
      "id": "098db5b6dc31d592",
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "5HYcnPf3v78",
      "date": "2026-07-26",
      "text": "Ini solusinya #podcast #shorts #shortvideo #ojk #pinjol #utang",
      "url": "https://www.youtube.com/watch?v=5HYcnPf3v78",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.7,
        "lexiconRisk": 57.0
      },
      "id": "d45393d8293d7631",
      "eventId": "auto-661b7602a1ff204c",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "iBJjPrFr4-Q",
      "date": "2026-07-26",
      "text": "Kenapa Masyarakat Indonesia Suka Pinjol  Fakta Mengejutkan di Baliknya!",
      "url": "https://www.youtube.com/watch?v=iBJjPrFr4-Q",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "e18ecdf7a6c58fb5",
      "eventId": "auto-4209b56a1876f5a4",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "LsMMGL8nX7A",
      "date": "2026-07-26",
      "text": "Kisah tragis korban pinjol: dari dokter hingga ancaman bunuh diri akibat teror#kisahnyata #kesehatan",
      "url": "https://www.youtube.com/watch?v=LsMMGL8nX7A",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 95.0
      },
      "id": "017fa78bdfcff2bf",
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "hVIxCfnLXwc",
      "date": "2026-07-26",
      "text": "Modus Pinjol  Uang Cair Tanpa Konfirmasi, Tapi Hutang Membengkak Gila!",
      "url": "https://www.youtube.com/watch?v=hVIxCfnLXwc",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 64.0
      },
      "id": "53ecf4694516f7ed",
      "eventId": "auto-79fc6665f8a245ce",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "Cvi4USA5Ois",
      "date": "2026-07-26",
      "text": "Modus Pinjol: Mengapa Data Anda Begitu Mudah Bocor dan Disalahgunakan? #shorts",
      "url": "https://www.youtube.com/watch?v=Cvi4USA5Ois",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 64.0
      },
      "id": "7600b216971dd86e",
      "eventId": "auto-5321dda7693b8187",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgzLw-1_6L1-NBzG3td4AaABAg",
      "date": "2026-07-26",
      "text": "Nyatanya, itu hanya menunda masalah. Sedikit demi sedikit, hidupku berubah menjadi lingkaran yang sulit diputus. Gali lubang, tutup lubang. Tidur tidak tenang. Setiap HP berbunyi langsung cemas.\n\nAku tidak membuat konten ini untuk menghakimi siapa pun. Aku tahu rasanya berada di titik itu.\n\nKalau kamu masih punya pilihan, semoga kamu tidak perlu mengalami apa yang pernah aku alami.\n\nDan kalau sekarang kamu sedang berjuang melunasi utang, jangan menyerah. Masih ada jalan untuk bangkit, meski mungkin tidak instan.\n\nDi postingan berikutnya, aku akan cerita apa yang membuatku mulai bangkit dan pelan-pelan mengubah keadaan.\n\n💬 Pernah punya pengalaman yang sama? Atau kenal seseorang yang sedang berjuang? Ceritakan di kolom komentar.",
      "url": "https://www.youtube.com/watch?v=W2kSooe3PEE",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.8,
        "lexiconRisk": 51.4
      },
      "id": "19e6d2ae65725b0d",
      "eventId": "auto-650da382f57bd950",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "mDgkKymzEWs",
      "date": "2026-07-26",
      "text": "Part 7 : Akibat Pinjol StandUp Comedy",
      "url": "https://www.youtube.com/watch?v=mDgkKymzEWs",
      "engagement": 0,
      "sentiment": {
        "risk": 52.0,
        "label": "mixed",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "MIX",
        "modelConfidence": 0.7,
        "lexiconRisk": 50.0
      },
      "id": "a7031a8066a71d0a",
      "eventId": "auto-762c7f35bf13c8f8",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "c8ikAOtk4-Q",
      "date": "2026-07-26",
      "text": "Pengaduan Penagihan Tidak Beretika  Cara Melapor ke OJK dan Satgas Pinjol!",
      "url": "https://www.youtube.com/watch?v=c8ikAOtk4-Q",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 57.0
      },
      "id": "8fc24ea5bb92db48",
      "eventId": "auto-60886ca9c08af392",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "h-EPOycPQvQ",
      "date": "2026-07-26",
      "text": "Pinjol &amp; Judol Kombinasi  yang Menghancurkan Kehidupan Banyak Orang #podcast #shorts #horror #viral",
      "url": "https://www.youtube.com/watch?v=h-EPOycPQvQ",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "a6a8e294e73bd6c6",
      "eventId": "auto-7f2c5d07cab9cd08",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "--xiF0ECYpU",
      "date": "2026-07-26",
      "text": "Pinjol Bunga Tinggi dan Gali Lubang Tutup Lubang  Siklus Hutang yang Mematikan!",
      "url": "https://www.youtube.com/watch?v=--xiF0ECYpU",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.95,
        "lexiconRisk": 64.0
      },
      "id": "1896499aa371be14",
      "eventId": "auto-c886e957330df2e7",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "trJf5c_ib4Q",
      "date": "2026-07-26",
      "text": "Pinjol Ilegal dan Jebakan Link  Cara Mereka Menjerat Korban dengan Mudah!",
      "url": "https://www.youtube.com/watch?v=trJf5c_ib4Q",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 72.4
      },
      "id": "e20c4fd504f560d3",
      "eventId": "auto-b485c3b1d71e2b51",
      "eventType": "fraud_or_illegal_practice",
      "eventSeverity": 0.74
    },
    {
      "platform": "youtube",
      "contentType": "comment",
      "externalId": "UgxX0j6bLWnO5Ph3um14AaABAg",
      "date": "2026-07-26",
      "text": "Pinjol merusak ekonomi masyarakat",
      "url": "https://www.youtube.com/watch?v=Bxwnz5Ko_o0",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "a7b4bae52a429552",
      "eventId": "auto-86c05011e8d03e3f",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "PeKjcgM4HFE",
      "date": "2026-07-26",
      "text": "Pinjol, Data Nik Dijual Rp. 2.000 #shorts #fyp",
      "url": "https://www.youtube.com/watch?v=PeKjcgM4HFE",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 50.0
      },
      "id": "a8b04e9480a042e8",
      "eventId": "auto-01645465fc825a13",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "o64phVOrCFM",
      "date": "2026-07-26",
      "text": "Solusi Untuk Kalian Yang Diteror Pinjol #shorts #shortvideo #pinjol",
      "url": "https://www.youtube.com/watch?v=o64phVOrCFM",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 87.1
      },
      "id": "aeca83655f65b66a",
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "oDUpQE0dm_8",
      "date": "2026-07-26",
      "text": "Solusi dan Edukasi Menghadapi Pinjol  Jangan Panik, Ini Cara Bijak Bayar Hutang!",
      "url": "https://www.youtube.com/watch?v=oDUpQE0dm_8",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.9,
        "lexiconRisk": 64.0
      },
      "id": "c8dc4e5d815db8f6",
      "eventId": "auto-64c70aa18d85bcc1",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "Bxwnz5Ko_o0",
      "date": "2026-07-26",
      "text": "Solusi dan Tantangan Penanganan Pinjol  Edukasi dan Regulasi yang Harus Diperbaiki!",
      "url": "https://www.youtube.com/watch?v=Bxwnz5Ko_o0",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 50.0
      },
      "id": "61e26020b7989066",
      "eventId": "auto-20d64bb3a3a6cc02",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "8bV8WwrBTa4",
      "date": "2026-07-26",
      "text": "Tanpa BI CHECKING‼️ Pinjol Mudah Cair 2026 ke DANA - Pinjol Data Pinjaman Online Langsung Cair",
      "url": "https://www.youtube.com/watch?v=8bV8WwrBTa4",
      "engagement": 0,
      "sentiment": {
        "risk": 25.0,
        "label": "positive",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "POS",
        "modelConfidence": 0.8,
        "lexiconRisk": 44.4
      },
      "id": "88e39a5916882a13",
      "eventId": "auto-5bb290eedc9250ff",
      "eventType": "general_sentiment",
      "eventSeverity": 0.35
    },
    {
      "platform": "youtube",
      "contentType": "video",
      "externalId": "K8xunaey1Xk",
      "date": "2026-07-26",
      "text": "Teror Debt Collector Pinjol  Pelanggaran Privasi yang Menghancurkan Hidup!",
      "url": "https://www.youtube.com/watch?v=K8xunaey1Xk",
      "engagement": 0,
      "sentiment": {
        "risk": 82.0,
        "label": "negative",
        "method": "deepseek_credit_social_v1",
        "modelLabel": "NEG",
        "modelConfidence": 0.9,
        "lexiconRisk": 95.0
      },
      "id": "df73f69e6cc153e0",
      "eventId": "debt-linked-school-threat-2026-07",
      "eventType": "consumer_harm",
      "eventSeverity": 0.86
    }
  ],
  "reviewRequired": true,
  "collectionDiagnostics": {
    "mode": "live_multi_source_v2",
    "successfulChannels": [
      "google_news",
      "youtube"
    ],
    "failedOrUnavailableChannels": {
      "media_rss": "Collector ran successfully but found no relevant records.",
      "gdelt": "HTTP Error 429: Too Many Requests",
      "google_trends": "The request failed: Google returned a response with code 429",
      "kaskus": "Collector ran successfully but found no relevant records.",
      "reddit": "HTTP Error 403: Blocked",
      "x": "X_BEARER_TOKEN is not configured"
    },
    "socialClassifier": {
      "method": "deepseek_credit_social_v1",
      "status": "ok",
      "inputCount": 42,
      "classifiedCount": 22,
      "irrelevantDropped": 20,
      "model": "deepseek-chat",
      "fallbackCount": 0,
      "labelCounts": {
        "NEG": 11,
        "MIX": 4,
        "POS": 7
      }
    }
  },
  "sourceMode": "live:multi-source-v2.1"
};
