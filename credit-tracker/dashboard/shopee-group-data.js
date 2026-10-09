// Shopee / Sea 印尼放贷生态 —— 实体结构与各自账上的数字
//
// 为什么单列：SPayLater / SPinjam 的资产分散在四个实体里，没有任何一张报表给出「Shopee 印尼消费信贷」
// 的合计口径。竞对表里的 "Lentera Dana (Shopee Loan)" 只是其中的网贷通道代理，**自有资产负债表上
// 几乎没有贷款**，拿它代表 Shopee 会把量级低估一个数量级。
//
// 口径红线（2026-10-08）：LDN 官网 lenteradana.co.id/statistic 的「Posisi akhir」是**本月至今
// 累计成交额**，不是在贷余额。判据见 credit-tracker/data/lentera-disb-mtd.json。LDN 不披露在贷余额。
//
// Sea 20-F 没有印尼国别拆分（附注 6 只分 Consumer&SME / Other，附注 22 地理口径把东南亚合并成一行），
// **不要用集团占比倒推印尼**。
window.SHOPEE_GROUP = {
  schemaVersion: 1,
  asOf: "2026-10-08",
  fx: 15000,

  entities: [
    {
      name: "PT Bank SeaBank Indonesia",
      role: "SPayLater / SPinjam 的主要出资方，另有自营零售贷",
      ownership: "Sea 子公司（经 PT Danadipa Artha Indonesia 持 85%）",
      booksLoans: true,
      note: "联合融资里记的是「bagian Bank」——仅银行自己那一份，伙伴份额在 Commerce Finance / Shopee International",
    },
    {
      name: "PT Commerce Finance",
      role: "SPayLater 发起机构，记自有份额",
      ownership: "Sea 子公司，多元金融牌照",
      booksLoans: true,
      note: "不在 IDX，无公开审计报表；下列数字来自其可持续发展报告，**标注未审计**",
    },
    {
      name: "PT Shopee International Indonesia",
      role: "SPinjam 共同出资方",
      ownership: "Sea 100% 子公司",
      booksLoans: true,
      note: "20-F 只写 \"online platform\"，**出资份额从不披露** —— 这是本图最大的缺口",
    },
    {
      name: "PT Lentera Dana Nusantara",
      role: "SPinjam 的网贷通道代理（Agen Penyalur）",
      ownership: "**不是 Sea 子公司**（不在 20-F Ex-8.1）",
      booksLoans: false,
      note: "自有资产负债表零贷款；2025 年末总资产仅 Rp193 miliar、对第三方净应收 Rp0.7 miliar",
    },
  ],

  // SeaBank 贷款余额（Rp triliun）。2021–2025 取自 SeaBank 2025 年报五年摘要表；
  // 2026H1 取自公司半年业绩新闻稿（多家媒体同源转载，非审计报表）。
  seabankLoans: [
    { period: "2021", value: 6.117, basis: "audited" },
    { period: "2022", value: 15.893, basis: "audited" },
    { period: "2023", value: 17.889, basis: "audited" },
    { period: "2024", value: 22.403, basis: "audited" },
    { period: "2025", value: 32.134, basis: "audited" },
    { period: "2026H1", value: 39.81, basis: "pressRelease" },
  ],

  // SeaBank 2025-12-31 贷款结构（Rp miliar），年报附注 34 + 管理层讨论。
  seabankMix2025: [
    { label: "联合融资（银行份额）", value: 25913 },
    { label: "通道业务 channeling", value: 3533 },
    { label: "其他直接融资-零售", value: 2260 },
    { label: "非零售", value: 393 },
    { label: "遗留组合", value: 35 },
  ],

  // 信用成本：同样做数字消费信贷，SeaBank 自担风险、Bank Jago 把风险留在合作方。
  creditCost: [
    { bank: "SeaBank（Shopee 生态）", loans: 32134, ckpnPct: 13.12, provision: 5964, provOverAvgLoans: 21.87, nplGross: 1.82 },
    { bank: "Bank Jago（AdaKami 资金方）", loans: 24347, ckpnPct: 2.27, provision: 870, provOverAvgLoans: 4.14, nplGross: 0.61 },
  ],

  // 另外两家能拿到的年度数字（Rp miliar）
  others: [
    { name: "PT Commerce Finance", year: 2025, audited: false,
      items: [["放款", 26613], ["总资产", 6328], ["负债", 5628], ["权益", 697], ["营业收入", 5457], ["净利", 79.7]] },
    { name: "PT Lentera Dana Nusantara", year: 2025, audited: true,
      items: [["营业收入", 611.29], ["税后利润", 57.79], ["总资产", 193], ["第三方净应收", 0.7]] },
  ],

  gaps: [
    "PT Shopee International Indonesia 的 SPinjam 出资份额从不披露 —— 集团合计无法闭合",
    "PT Commerce Finance 无审计报表，数字取自其可持续发展报告（标未审计）",
    "LDN 不披露在贷余额；官网「Posisi akhir」是本月成交额，已从竞对余额序列中移除",
    "SeaBank 季报不拆 JF/channeling，只有年报附注 34 有；2026H1 仅有新闻稿口径的总额",
  ],

  sources: [
    { what: "SeaBank 贷款五年序列、附注 34 结构、拨备", url: "SeaBank《Laporan Tahunan dan Keberlanjutan 2025》（本地存档 LPBBTI_financials/seabank_ar2025.pdf）" },
    { what: "SeaBank 2026H1 贷款 Rp39.81T、NPL 1.65%、净利 Rp749.26bn", url: "公司半年业绩新闻稿，多家媒体同源转载（非审计报表，待年报复核）" },
    { what: "Bank Jago 对照", url: "Bank Jago 2025 年度整合报告（IDX 披露）" },
    { what: "LDN 2025 审计报表（EY）", url: "https://www.lenteradana.co.id/pdf/LaporanKeuanganTahunan_2025.pdf" },
    { what: "Commerce Finance 2025（未审计）", url: "spaylater.co.id/laporan-keberlanjutan-2025.pdf" },
    { what: "实体归属", url: "Sea FY2025 20-F（CIK 1703399）Ex-8.1 + 附注 6/22" },
  ],
};
