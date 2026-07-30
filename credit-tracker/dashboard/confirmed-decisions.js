window.CONFIRMED_DECISIONS = {
  schemaVersion: 1,
  asOf: "2026-07-30",
  decisions: {
    creditSentiment: {
      weekEnd: "2026-07-26",
      status: "confirmed-provisional",
      score: 74.0,
      label: "已人工确认 · 部分覆盖试运行",
      decidedAt: "2026-07-30"
    },
    creditEvents: {
      "kredivo-kredifazz-purworejo-2026-07": {
        status: "confirmed-red-retained",
        label: "已确认红色留痕",
        decidedAt: "2026-07-30"
      },
      "debt-linked-school-threat-2026-07": {
        status: "rejected-false-merge",
        label: "已驳回 · 误聚类",
        reason: "多篇报道只共享泛化的 pinjol/恐吓词语，缺少共同实体与同一事件锚点。",
        decidedAt: "2026-07-30"
      }
    },
    streetHeat: {
      date: "2026-07-30",
      status: "confirmed",
      score: 69,
      label: "已人工确认"
    },
    p2pBatch: {
      sourceDate: "2026-07-17",
      status: "confirmed",
      confirmedCount: 9,
      decidedAt: "2026-07-30"
    }
  }
};
