window.CREDIT_SENTIMENT_CONFIRMED = {
  schemaVersion: 1,
  status: "confirmed-provisional-history",
  asOf: "2026-07-30",
  evidenceMode: "reviewed-summary",
  decision: {
    status: "confirmed-provisional",
    decidedAt: "2026-07-30",
    note: "W1确认74.0；覆盖率58.8%，保留部分覆盖/试运行标签。W2确认Kredivo/KrediFazz事件红色留痕。W3误聚类已驳回。"
  },
  sourceCatalog: {
    google_news:{family:"news",label:"Google News RSS",access:"public"},
    media_rss:{family:"news",label:"Mainstream media RSS",access:"public"},
    gdelt:{family:"news",label:"GDELT volume + tone",access:"public"},
    google_trends:{family:"social",label:"Google Trends attention proxy",access:"public"},
    kaskus:{family:"social",label:"Kaskus hot threads",access:"public"},
    youtube:{family:"social",label:"YouTube videos + comments",access:"api_key"},
    reddit:{family:"social",label:"Reddit r/indonesia",access:"public_or_oauth"},
    x:{family:"social",label:"X recent search",access:"bearer_token"}
  },
  sourceHealth: {
    google_news:{status:"ok",detail:"363条去重新闻样本"},
    media_rss:{status:"unavailable",detail:"本期未形成有效样本"},
    gdelt:{status:"failed",detail:"429限流；未按零风险处理"},
    google_trends:{status:"failed",detail:"429限流；未按零风险处理"},
    kaskus:{status:"unavailable",detail:"本期未形成有效实采样本"},
    youtube:{status:"ok",detail:"527条视频/评论样本"},
    reddit:{status:"failed",detail:"403访问受限"},
    x:{status:"unconfigured",detail:"未配置Bearer Token"}
  },
  weeks: [
    {
      weekStart:"2026-07-13",weekEnd:"2026-07-19",fearIndex:72.9,
      dataStatus:"provisional-partial-coverage",availableFormulaWeight:1,confidence:0.588,
      engines:{
        news:{score:71.2,volume:72.0,negativity:70.2,itemCount:347,negativeShare:56.4,uniqueSources:69},
        social:{score:69.9,volume:68.5,negativity:71.3,itemCount:511,negativeShare:61.0,platformCount:1}
      },
      components:{newsVolume:72.0,newsTone:70.2,socialVolume:68.5,socialNegativity:71.3,severeEvent:86},
      articleCount:347,socialPostCount:511,uniqueSourceCount:69,socialPlatformCount:1,
      negativeArticleShare:56.4,negativeSocialShare:61.0,articleIds:[],socialItemIds:[],
      alert:{level:"amber",active:[],triggerReasons:[],reviewCandidates:[],suppressedCandidateCount:0,
        rule:"红色：经核验严重事件含原始/监管来源且至少2个独立来源；或综合与新闻、社媒同时跨越急性阈值。"}
    },
    {
      weekStart:"2026-07-20",weekEnd:"2026-07-26",fearIndex:74.0,
      dataStatus:"provisional-partial-coverage",availableFormulaWeight:1,confidence:0.588,
      engines:{
        news:{score:74.8,volume:76.1,negativity:73.2,itemCount:363,negativeShare:59.2,uniqueSources:70},
        social:{score:66.3,volume:64.0,negativity:68.6,itemCount:527,negativeShare:58.7,platformCount:1}
      },
      components:{newsVolume:76.1,newsTone:73.2,socialVolume:64.0,socialNegativity:68.6,severeEvent:92},
      articleCount:363,socialPostCount:527,uniqueSourceCount:70,socialPlatformCount:1,
      negativeArticleShare:59.2,negativeSocialShare:58.7,
      articleIds:["ojk-kredivo-kredifazz-call","sindo-kredivo-settlement","suara-kredivo-settlement"],
      socialItemIds:[],
      alert:{
        level:"red",
        active:[{
          id:"kredivo-kredifazz-purworejo-2026-07",
          eventType:"regulatory_action",severity:0.92,
          independentSourceCount:70,reviewedSourceCount:3,hasPrimarySource:true,
          platforms:[],
          headline:"OJK 就 Kredivo/KrediFazz 涉嫌违反催收伦理一事进行约谈",
          summaryZh:"Purworejo一宗催收纠纷引发监管介入。OJK已约谈两家公司；后续虽称已和解并加强监督，监管介入与消费者伤害风险仍作红色留痕。",
          decisionStatus:"confirmed-red-retained"
        }],
        triggerReasons:["verified_severe_event"],
        reviewCandidates:[],
        suppressedCandidateCount:31,
        rule:"红色：严重事件含监管/原始来源并有至少2个独立来源。W2已人工确认，本事件正式红色留痕。"
      }
    }
  ],
  articles: [
    {
      id:"ojk-kredivo-kredifazz-call",date:"2026-07-23",source:"OJK",
      title:"OJK Panggil Kredivo dan KrediFazz Terkait Dugaan Pelanggaran Etika Penagihan di Purworejo",
      url:"https://ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Pages/OJK-Panggil-Kredivo-dan-KrediFazz-Terkait-Dugaan-Pelanggaran-Etika-Penagihan-di-Purworejo.aspx",
      eventId:"kredivo-kredifazz-purworejo-2026-07",sentiment:{label:"negative",risk:92}
    },
    {
      id:"sindo-kredivo-settlement",date:"2026-07-24",source:"SindoNews",
      title:"Kasus Debt Collector dan Nasabah Digerebek di Purworejo Berakhir Damai",
      url:"https://daerah.sindonews.com/",eventId:"kredivo-kredifazz-purworejo-2026-07",
      sentiment:{label:"negative",risk:78}
    },
    {
      id:"suara-kredivo-settlement",date:"2026-07-24",source:"Suara",
      title:"Kasus Debt Collector Kredivo di Purworejo Berakhir Damai, Perusahaan Perkuat Pengawasan Penagihan",
      url:"https://www.suara.com/",eventId:"kredivo-kredifazz-purworejo-2026-07",
      sentiment:{label:"negative",risk:75}
    }
  ],
  socialItems: []
};
