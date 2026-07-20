import { useState, useMemo } from "react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts";

const FX = 15000;

// ===== MARKET DATA =====
const rawData = [
  { period: "2023.03", bankVeh: 119561, bankMP: 688525, bankBNPL: null, bankOth: 81621, mf2W: 95019, mf4W: 197675, mfMP: 14087, mfBNPL: null, p2p: 51019.82 },
  { period: "2023.06", bankVeh: 125262, bankMP: 687114, bankBNPL: null, bankOth: 88974, mf2W: 93917, mf4W: 208642, mfMP: 13417, mfBNPL: null, p2p: 52701.15 },
  { period: "2023.09", bankVeh: 126430, bankMP: 686197, bankBNPL: null, bankOth: 96673, mf2W: 96483, mf4W: 217085, mfMP: 12611, mfBNPL: null, p2p: 55697.25 },
  { period: "2023.12", bankVeh: 131420, bankMP: 699078, bankBNPL: null, bankOth: 107533, mf2W: 99701, mf4W: 224901, mfMP: 11945, mfBNPL: null, p2p: 59644.48 },
  { period: "2024.03", bankVeh: 134794, bankMP: 706044, bankBNPL: null, bankOth: 111728, mf2W: 103124, mf4W: 234138, mfMP: 13060, mfBNPL: 6130, p2p: 62166.43 },
  { period: "2024.06", bankVeh: 133191, bankMP: 717446, bankBNPL: 17720, bankOth: 117101, mf2W: 106008, mf4W: 237796, mfMP: 14407, mfBNPL: 7240, p2p: 66789 },
  { period: "2024.09", bankVeh: 137813, bankMP: 737386, bankBNPL: 19810, bankOth: 126244, mf2W: 109456, mf4W: 241048, mfMP: 15496, mfBNPL: 8240, p2p: 74480 },
  { period: "2024.12", bankVeh: 142092, bankMP: 753956, bankBNPL: null, bankOth: 134695, mf2W: 112579, mf4W: 237557, mfMP: 16356, mfBNPL: 7855, p2p: 77024 },
  { period: "2025.01", bankVeh: 141536, bankMP: 753251, bankBNPL: 22570, bankOth: 136001, mf2W: 111050, mf4W: 244305, mfMP: 16673, mfBNPL: 7120, p2p: 78505 },
  { period: "2025.02", bankVeh: 141709, bankMP: 757446, bankBNPL: 21980, bankOth: 136813, mf2W: 111147, mf4W: 244173, mfMP: 17068, mfBNPL: 8200, p2p: 80074 },
  { period: "2025.03", bankVeh: 142922, bankMP: 761145, bankBNPL: 22780, bankOth: 137579, mf2W: 111158, mf4W: 245275, mfMP: 17498, mfBNPL: 8220, p2p: 79966 },
  { period: "2025.04", bankVeh: 141760, bankMP: 763243, bankBNPL: 21350, bankOth: 137335, mf2W: 110059, mf4W: 243058, mfMP: 17484, mfBNPL: 8240, p2p: 80882 },
  { period: "2025.05", bankVeh: 142724, bankMP: 769186, bankBNPL: 21890, bankOth: 138517, mf2W: 110262, mf4W: 241465, mfMP: 17884, mfBNPL: 8580, p2p: 82530 },
  { period: "2025.06", bankVeh: 143026, bankMP: 774704, bankBNPL: 22990, bankOth: 139881, mf2W: 110233, mf4W: 238212, mfMP: 18102, mfBNPL: 8560, p2p: 83468 },
  { period: "2025.07", bankVeh: 141763, bankMP: 781705, bankBNPL: 24050, bankOth: 141777, mf2W: 111457, mf4W: 236670, mfMP: 19541, mfBNPL: 8810, p2p: 84542 },
  { period: "2025.08", bankVeh: 140405, bankMP: 788020, bankBNPL: 24330, bankOth: 143153, mf2W: 112462, mf4W: 236274, mfMP: 19352, mfBNPL: 9970, p2p: 87485 },
  { period: "2025.09", bankVeh: 138806, bankMP: 793890, bankBNPL: 24860, bankOth: 143638, mf2W: 112814, mf4W: 236266, mfMP: 19755, mfBNPL: 10310, p2p: 90908, isNew: true },
  { period: "2025.10", bankVeh: 136733, bankMP: 802700, bankBNPL: 25720, bankOth: 144877, mf2W: 109399, mf4W: 235474, mfMP: 20407, mfBNPL: 10850, p2p: 92832, isNew: true },
  { period: "2025.11", bankVeh: 135172, bankMP: 807201, bankBNPL: 26200, bankOth: 145484, mf2W: 109549, mf4W: 230053, mfMP: 22621, mfBNPL: 11240, p2p: 94818, isNew: true },
  { period: "2025.12", bankVeh: 132564, bankMP: 813922, bankBNPL: 26400, bankOth: 146812, mf2W: 109491, mf4W: 228418, mfMP: 23274, mfBNPL: 11940, p2p: 96617, isNew: true },
];

const toUSD = (v) => v != null ? +(v / FX).toFixed(3) : null;
const chartData = rawData.map(d => {
  const bv=toUSD(d.bankVeh),bm=toUSD(d.bankMP),bb=toUSD(d.bankBNPL),bo=toUSD(d.bankOth);
  const m2=toUSD(d.mf2W),m4=toUSD(d.mf4W),mm=toUSD(d.mfMP),mb=toUSD(d.mfBNPL),p=toUSD(d.p2p);
  const all=[bv,bm,bb,bo,m2,m4,mm,mb,p].filter(v=>v!=null);
  const exV=[bm,bb,bo,mm,mb,p].filter(v=>v!=null);
  const nar=[mm,mb,p].filter(v=>v!=null);
  return { period:d.period, isNew:d.isNew||false, bankVeh:bv,bankMP:bm,bankBNPL:bb,bankOth:bo,mf2W:m2,mf4W:m4,mfMP:mm,mfBNPL:mb,p2p:p,
    totalInclVeh:all.length>=5?+all.reduce((a,b)=>a+b,0).toFixed(2):null,
    totalExclVeh:exV.length>=3?+exV.reduce((a,b)=>a+b,0).toFixed(2):null,
    narrowNonBank:nar.length>=1?+nar.reduce((a,b)=>a+b,0).toFixed(2):null };
});

// ===== P2P PLAYERS DATA =====
const p2pRaw = {"disbursement":{"dates":["2023.01.10","2023.02.15","2023.03.16","2023.04.18","2023.05.23","2023.06.25","2023.07.13","2023.09.07","2023.10.10","2023.12.11","2024.01.02","2024.4.7","2024.4.26","2024.6.12","2024.7.1","2024.9.6","2024.9.23","2024.10.9","2024.12.5","2024.12.31","2025.2.14","2025.4.23","2025.5.20","2025.6.16","2025.8.11","2025.9.15","2025.10.28","2025.11.13","2025.12.16","2026.1.14","2026.2.13","2026.4.27","2026.5.15"],"players":{"AdaKami":[null,0.10066666666666667,0.16999999999999998,0.24266666666666667,0.32599999999999996,0.4066666666666667,0.4593333333333333,null,0.7293333333333334,0.8906666666666667,0.94,0.26066666666666666,0.28,0.4,0.455625,0.65,null,0.67,0.8826666666666667,0.9613333333333334,0.12,0.3,0.3466666666666667,0.43533333333333335,0.6286666666666667,0.7466666666666667,0.8533333333333334,0.9453333333333334,1.04,0.023132,0.14866666666666667,0.37333333333333335,0.4746666666666667],"LENTERA DANA NUSANTARA (Shopee Loan)":[null,null,null,null,null,7.755333333333333,null,null,null,null,null,null,null,null,null,2.7730855971473685,2.938931622442105,3.18835872774,3.9191145994733336,4.1975453339153335,0.568,1.4968666666666666,1.8810666666666667,2.191133333333333,null,3.6251333333333333,4.171266666666667,4.542933333333333,5.144466666666666,0.2098,0.7574666666666666,2.093933333333333,2.3911333333333333],"Kredifazz":[null,0.066,0.12200000000000001,0.186,0.24600000000000002,0.3126666666666667,0.38,0.452,0.5926666666666667,0.74,0.74,0.144,0.21,0.37,0.37625,0.58,null,0.69,0.882,0.9753333333333334,0.09933333333333333,0.2926666666666667,0.38266666666666665,0.4866666666666667,null,0.8553333333333333,0.972,1.0906666666666667,1.2013333333333334,1.3146666666666667,0.10733333333333334,0.33066666666666666,0.44466666666666665],"Akulaku (Asetku cash loan)":[0.06395736366666667,0.9711406597646667,0.08141087666666667,0.08141087666666667,0.16772946,0.20898000666666666,0.20898000666666666,0.3446666666666667,0.394,0.5087333333333334,null,null,null,null,0.167950125,0.25,null,0.2971221333333333,0.3725657333333333,0.40053333333333335,0.0494,0.12633333333333333,0.16053333333333333,0.2012,null,0.2828,0.35586666666666666,0.39186666666666664,0.4262,0.46166666666666667,0.04386286666666667,0.0952,0.11666666666666667],"Kredit Pintar (Atome cash Loan)":[0.35333333333333333,0.43999999999999995,0.10666666666666666,0.10666666666666666,0.23333333333333334,0.2933333333333334,0.2933333333333334,0.4066666666666667,0.5133333333333333,0.5666666666666667,0.6133333333333333,0.08,0.12,0.21,0.20625,0.31,null,0.43333333333333335,0.43333333333333335,0.54,0.5866666666666667,0.1,0.15333333333333332,0.15333333333333332,0.32,0.4266666666666667,0.47333333333333333,0.5266666666666666,0.58,0.6,0.6023333333333334,0.16666666666666666,0.16666666666666666],"Easycash":[0.002336,0.08866666666666667,0.1713333333333333,0.26666666666666666,0.35800000000000004,0.4566666666666666,0.554,0.7726666666666666,0.8933333333333333,1.1486666666666667,null,0.3913333333333333,0.36,0.63,0.75,1.05,null,1.2073333333333334,null,1.44333333333333,0.132666666666667,0.375333333333333,0.499333333333333,0.638666666666667,0.942,1.10266666666667,1.25533333333333,1.40933333333333,1.536,0.003804,0.126666666666667,0.349333333333333,0.463333333333333],"UangMe":[null,null,null,0.106,0.12,0.13066666666666665,0.13066666666666665,0.13066666666666665,0.136,0.198,0.198,0.07066666666666667,0.07,0.09,0.09625,0.12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Julo":[null,null,null,0.282,0.10933333333333332,0.10933333333333332,0.10933333333333332,0.20733333333333334,0.20733333333333331,0.4146666666666667,null,null,0.18,0.26,0.27875,0.39,null,0.454,0.532,0.5606666666666666,0.0484,0.092,0.15666666666666668,0.15666666666666668,null,0.24866666666666667,0.2733333333333333,null,null,0.2733333333333333,0.2733333333333333,0.31626666666666664,0.037219999999999996],"Maucash":[null,null,null,0.08923333333333333,0.0892381252894,0.0104073700862,0.0104073700862,0.03578666666666667,null,0.046953722860933335,0.051282714035,0.005527999999999999,0.01,0.01,0.010368024696625,0.01,null,0.018020919937066667,0.021432630545133335,0.023353622266533335,0.0024666666666666665,0.0024666666666666665,0.0024666666666666665,0.0024666666666666665,null,0.0162906988804,0.0162906988804,null,null,null,null,null,null],"Koinworks":[null,null,null,0.06666666666666667,0.5333333333333333,0.5333333333333333,0.5333333333333333,0.26666666666666666,null,0.5333333333333333,0.5933333333333334,0.12666666666666668,0.12,0.24,0.24375,0.25,null,0.5576893025904,0.5966293333333333,0.5966,0.5966,0.5966,null,null,null,0.05,0.05516571845086667,0.05571414511753334,null,null,null,null,null],"Investree":[null,null,null,0.03403133333333334,0.05033066666666667,0.058568666666666665,0.061696,0.07466666666666667,null,0.11133333333333334,0.11733333333333333,0.0268,0.001,0.001,0.0015993749999999999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Funding Societies (Modalku)":[null,null,null,0.019377333333333337,0.022694000000000002,0.022694000000000002,0.028952,0.03846666666666667,null,null,null,0.012787333333333333,0.012787333333333333,null,null,0.5,null,0.5753333333333334,0.682,0.682,0.07666666666666666,0.21866666666666668,0.23333333333333334,0.31466666666666665,null,0.4886666666666667,0.5806666666666667,0.6226666666666667,0.686,null,0.4188,0.010666666666666666,0.013192666666666665],"ADA Pundi":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.06773333333333334,0.19066666666666668,0.19066666666666668]}},"outstanding":{"dates":["2023.01.10","2023.02.15","2023.03.16","2023.04.18","2023.05.23","2023.06.25","2023.07.13","2023.09.07","2023.10.10","2023.12.11","2024.01.02","2024.4.7","2024.4.26","2024.6.12","2024.7.1","2024.9.6","2024.9.23","2024.10.9","2024.12.5","2024.12.31","2025.2.14","2025.4.23","2025.5.20","2025.6.16","2025.8.11","2025.9.15","2025.10.28","2025.11.13","2025.12.16","2026.1.14","2026.2.13","2026.4.27","2026.5.15"],"players":{"Adakami":[0.13066666666666665,0.14333333333333334,0.14933333333333335,0.15199999999999997,0.16333333333333333,0.16666666666666666,0.1713333333333333,0.2,0.19333333333333333,0.19933333333333333,0.19533333333333333,0.18333333333333332,0.17,0.17,0.17375,0.19,null,0.19,0.20666666666666667,0.20666666666666667,0.20733333333333334,0.20666666666666667,0.206,0.20733333333333334,0.21733333333333332,0.228,0.234,0.23866666666666667,0.24333333333333335,0.25,0.2613333333333333,0.268,0.27],"LENTERA DANA NUSANTARA (Shopee Loan)":[null,null,null,null,null,null,null,0.29533333333333334,null,null,null,null,null,null,null,null,0.3032764174480263,0.39489057685879997,0.015370297100333333,0.29380103154226667,0.1409,0.25366666666666665,0.254,0.1252,null,0.23933333333333334,0.3044,0.166,0.2584,0.2098,0.19133333333333333,0.14213333333333333,0.21013333333333334],"Kredifazz":[0.1713333333333333,0.176,0.17533333333333334,0.17466666666666666,0.17266666666666663,0.17466666666666666,0.17933333333333332,0.2,0.192,0.20066666666666666,0.20066666666666666,0.21,0.2,0.22,0.224375,0.26,null,0.2786666666666667,0.3,0.30933333333333335,0.33866666666666667,0.3566666666666667,0.3626666666666667,0.37333333333333335,null,0.4633333333333333,0.48933333333333334,0.5126666666666667,0.53,0.542,0.5466666666666666,0.554,0.5586666666666666],"Akulaku (Asetku cash loan)":[0.0023352870293333336,0.05755597867206667,0.05834032610026666,0.05834032610026666,0.05635798539186667,0.05163477850026667,0.05163477850026667,0.1,0.0194,0.10063530009613333,null,null,null,null,0.07370335909375,0.07,null,0.07646154093333334,0.07691412829266667,0.0714,0.08866,0.084,0.08213333333333334,0.08373333333333334,null,0.08666666666666667,0.08546666666666666,0.087,0.08706666666666667,0.07646666666666667,0.07693333333333334,0.06353333333333333,0.06306666666666666],"Kredit Pintar":[0.08666666666666667,0.1,0.12000000000000001,0.12000000000000001,0.15333333333333332,0.15999999999999998,0.15999999999999998,0.16,0.15333333333333332,0.15333333333333332,0.14,0.12666666666666668,0.12,0.12,0.12,0.14,null,0.16666666666666666,0.16,0.16666666666666666,0.16666666666666666,0.17333333333333334,0.18,0.18,0.18666666666666668,0.18666666666666668,0.18,0.18666666666666668,0.18666666666666668,0.18,0.18666666666666668,0.19333333333333333,0.19333333333333333],"Easycash":[0.20466666666666666,0.20733333333333331,0.21133333333333335,0.21600000000000003,0.21733333333333332,0.21999999999999997,0.22533333333333333,0.26,0.26466666666666666,0.29933333333333334,0.31266666666666665,0.33866666666666667,0.32,0.34,0.35,0.37,null,0.37933333333333336,0.372,0.372,0.3801333333333333,0.3893333333333333,0.39866666666666667,0.4246666666666667,0.48733333333333334,0.52,0.54,0.5573333333333333,0.5473333333333333,0.5373333333333333,0.5273333333333333,0.49666666666666665,0.48533333333333334],"UangMe":[null,null,null,0.028666666666666667,0.028666666666666667,0.027333333333333334,0.027333333333333334,0.03,null,0.032426666666666666,0.032426666666666666,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Julo":[null,null,null,0.06866666666666667,0.07066666666666667,0.07066666666666667,0.07066666666666667,0.11,0.102,0.13733333333333334,0.14266666666666666,0.16066666666666668,0.15,0.15,0.158125,0.16,null,0.152,0.14933333333333335,0.14933333333333335,0.13333333333333333,0.12666666666666668,0.11933333333333333,0.11933333333333333,null,0.08133333333333333,0.07,null,null,0.07,0.07,null,null],"Maucash":[null,null,null,0.02556,0.0255612572172,0.0206783167664,0.0206783167664,0.01,null,0.01,0.009105876847,0.0076,0.0076,0.006,0.0062139025721875,0.004,null,0.0032203076378000003,0.003174038123933333,0.0030956015398,0.0030997999999999998,0.0030997999999999998,0.0030997999999999998,0.0030997999999999998,null,0,0,null,null,null,null,null,null],"Koinworks":[null,null,null,0.12666666666666668,0.12666666666666668,0.12666666666666668,0.12666666666666668,0.14,null,0.13333333333333333,0.13333333333333333,0.15333333333333332,0.14,0.14,null,0.15,null,0.14823992523646667,0.12680133333333332,0.12680133333333332,0.1268,0.1268,0.1268,0.1268,null,0.05,0.0352921685986,0.034919672607266666,null,null,null,null,null],"Investree":[null,null,null,0.047398,0.04932533333333333,0.048092,0.044761999999999996,0.04,null,0.032008,0.029646,0.01706,0.03,0.025,0.025133125,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Funding Societies (Modalku)":[null,null,null,0.011454,0.010220666666666666,0.010220666666666666,0.009256666666666667,0.01,null,null,null,0.008438,0.008438,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.0012233333333333334,0.011967333333333333,0.010225333333333333,0.011036666666666667],"ADA Pundi":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.2066,0.21666666666666667,0.21666666666666667]}},"totalBorrowers":{"dates":["2023.01.10","2023.02.15","2023.03.16","2023.04.18","2023.05.23","2023.06.25","2023.07.13","2023.09.07","2023.10.10","2023.12.11","2024.01.03","2024.4.7","2024.4.26","2024.6.12","2024.7.1","2024.9.6","2024.9.23","2024.10.9","2024.12.5","2024.12.31","2025.2.14","2025.4.23","2025.5.20","2025.6.16","2025.9.15","2025.10.28","2025.11.13","2025.12.16","2026.1.14","2026.2.13","2026.4.27","2026.5.15"],"players":{"Adakami":[3000000.0,null,null,3230000.0,3290000.0,3380000.0,3440000.0,null,null,3950000.0,4000000.0,4190000.0000000005,4220000.0,4330000.0,4380000.0,5710000.0,null,5710000.0,6690000.0,6810000.0,7440000.0,8230000.0,8560000.0,8620000.0,5770000.0,5880000.0,5980000.0,6080000.0,6210000.0,6380000.0,6660000.0,6790000.0],"LENTERA DANA NUSANTARA (Shopee Loan)":[null,null,null,null,null,7960000.0,null,null,null,null,null,null,null,null,null,null,8000000.0,11030000.0,11660000.0,11860000.0,12300000.0,12900000.0,13100000.0,13300000.0,14170000.0,14510000.0,14700000.0,15030000.0,15340000.0,15670000.0,16520000.0,16700000.0],"Kredifazz":[4600000.0,null,null,4910000.0,4990000.0,5090000.0,5190000.0,null,5510000.0,5720000.0,5720000.0,6050000.0,null,6330000.0,6330000.0,6530000.0,null,6620000.0,6800000.0,6880000.0,null,7240000.0,7320000.0,7410000.0,7690000.0,7790000.0,7890000.0,7990000.0,8109999.999999999,8230000.0,8420000.0,8510000.0],"Akulaku (Asetku cash loan)":[9000000.0,null,null,14770000.0,15440000.0,15790000.0,15790000.0,null,18080000.0,19580000.0,null,null,null,null,null,22300000.0,null,22400000.0,22600000.0,22700000.0,22900000.0,23000000.0,23000000.0,23300000.0,23600000.0,23900000.0,24000000.0,24100000.0,24100000.0,24360000.0,24680000.0,24820000.0],"Kredit Pintar":[9000000.0,null,null,12200000.0,13000000.0,13500000.0,13500000.0,null,14900000.0,15300000.0,7600000.0,7700000.0,7900000.0,8000000.0,8000000.0,8199999.999999999,null,8300000.000000001,8300000.000000001,8500000.0,8500000.0,8600000.0,8700000.0,8700000.0,8800000.0,8800000.0,8900000.0,8900000.0,9000000.0,9000000.0,9100000.0,9200000.0],"Easycash":[2900000.0,null,null,3490000.0,3630000.0,3780000.0,3960000.0,null,4570000.0,5010000.0,5220000.0,5710000.0,5700000.0,6000000.0,6200000.0,6580000.0,null,6780000.0,7100000.0,7100000.0,7400000.0,7700000.0,7800000.0,8000000.0,8600000.0,8820000.0,9010000.0,9170000.0,9360000.0,9570000.0,9870000.0,10000000.0],"UangMe":[null,null,null,2000000.0,2000000.0,1540000.0,1540000.0,null,null,1660000.0,1660000.0,1710000.0,null,1740000.0,1880000.0,1780000.0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Julo":[null,null,null,1200000.0,1400000.0,1400000.0,1400000.0,null,1550000.0,1900000.0,1980000.0,2200000.0,2220000.0,2310000.0,2340000.0,2440000.0,null,2520000.0,2720000.0,2800000.0,2980000.0,3100000.0,3200000.0,3200000.0,3300000.0,3300000.0,null,null,3280000.0,3280000.0,3290000.0,3300000.0],"Maucash":[null,null,null,1730000.0,1730000.0,1760000.0,1760000.0,null,null,1900000.0,1910000.0,null,1930000.0,1930000.0,1930000.0,1940000.0,null,1950000.0,1300000.0,880000.0,860000.0,860000.0,860000.0,860000.0,890000.0,null,null,null,null,null,null,null],"Koinworks":[null,null,null,null,null,null,null,null,null,2000000.0,2000000.0,null,2000000.0,2000000.0,null,null,null,0.035252,null,34000.0,110000.0,110000.0,110000.0,110000.0,110000.0,110000.0,110000.0,null,null,null,null,null],"Investree":[null,null,null,null,30600.0,30700.0,30700.0,null,null,88600.0,92400.0,null,93699.99999999999,93699.99999999999,93800.00000000001,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Funding Societies (Modalku)":[null,null,null,null,72700.0,72700.0,72800.0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,74735,74740,74758,74762],"ADA Pundi":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,4900000.0,5190000.0,5190000.0]}},"activeBorrowers":{"dates":["2023.01.10","2023.02.15","2023.03.16","2023.04.18","2023.05.23","2023.06.25","2023.07.13","2023.09.07","2023.10.10","2023.12.11","2024.01.04","2024.4.7","2024.4.26","2024.6.12","2024.7.1","2024.9.6","2024.10.9","2024.12.5","2024.12.31","2025.2.14","2025.4.23","2025.5.20","2025.6.16","2025.9.15","2025.10.28","2025.11.13","2025.12.16","2026.1.14","2026.2.13","2026.4.27","2026.5.15"],"players":{"Adakami":[null,null,null,1780000.0,1830000.0,1890000.0,1920000.0,null,null,2230000.0,2240000.0,2310000.0,2320000.0,2390000.0,2430000.0,null,null,1460000.0,1460000.0,1440000.0,1430000.0,1460000.0,1530000.0,1800000.0,1850000.0,1890000.0,1670000.0,150000.0,600000.0,1050000.0,1220000.0],"LENTERA DANA NUSANTARA (Shopee Loan)":[null,null,null,null,null,1370000.0,null,null,null,null,null,null,null,null,null,null,5400000.0,6110000.0,6340000.0,null,4200000.0,4700000.0,5000000.0,6300000.0,6700000.0,6900000.0,7300000.0,1100000.0,2800000.0,5100000.0,5400000.0],"Kredifazz":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1160000.0,1450000.0,1730000.0,2330000.0,2490000.0,2650000.0,2800000.0,2960000.0,420000.0,1100000.0,1400000.0],"Akulaku (Asetku cash loan)":[38347,null,null,860000.0,740000.0,650000.0,650000.0,null,1020000.0,1300000.0,null,null,null,null,1300000.0,1470000.0,1600000.0,1780000.0,1850000.0,190000.0,360000.0,470000.0,600000.0,880000.0,1120000.0,1230000.0,1330000.0,1430000.0,790000.0,500000.0,640000.0],"Kredit Pintar":[602000,null,null,890000.0,980000.0,980000.0,980000.0,null,930000.0,880000.0,840000.0,720000.0,670000.0,680000.0,681000.0,690000.0,720000.0,720000.0,740000.0,730000.0,740000.0,720000.0,720000.0,710000.0,690000.0,680000.0,660000.0,640000.0,640000.0,630000.0,630000.0],"Easycash":[875865,null,null,1120000.0,1110000.0,1090000.0,1090000.0,null,1230000.0,1370000.0,1400000.0,1320000.0,1320000.0,1310000.0,1340000.0,1380000.0,1390000.0,1330000.0,1330000.0,1250000.0,1230000.0,1250000.0,1300000.0,1560000.0,1640000.0,1660000.0,1660000.0,1660000.0,1680000.0,1590000.0,1530000.0],"UangMe":[null,null,null,140000.0,140000.0,140000.0,140000.0,null,null,140000.0,140000.0,150000.0,160000.0,170000.0,150000.0,220000.0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Julo":[null,null,null,940000.0,1040000.0,1040000.0,1040000.0,null,640000.0,1470000.0,1530000.0,1680000.0,1690000.0,1750000.0,1770000.0,1790000.0,1850000.0,1990000.0,2000000.0,2170000.0,2230000.0,2290000.0,2290000.0,1870000.0,1830000.0,null,null,1830000.0,1830000.0,930000.0,100000.0],"Maucash":[null,null,null,150000.0,150000.0,110000.0,110000.0,null,null,40000.0,40000.0,null,10000.0,10000.0,10000.0,3000.0,600.0,500.0,500.0,463.0,453.0,453.0,453.0,170.0,170.0,null,null,null,null,null,null],"Koinworks":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13000.0,12000.0,13000.0,13000.0,null,12000.0,12000.0,12000.0,null,null,null,null,null],"Investree":[null,null,null,null,19400.0,18500.0,17800.0,null,null,40500.0,43900.0,null,44700.0,44700.0,44700.0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Funding Societies (Modalku)":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,7,433,411],"ADA Pundi":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,160000.0,1940000.0,1940000.0]}}};

const PLAYER_COLORS = {
  "AdaKami":"#ef4444","Adakami":"#ef4444","LENTERA DANA NUSANTARA (Shopee Loan)":"#f97316",
  "Kredifazz":"#eab308","Akulaku (Asetku cash loan)":"#22c55e",
  "Kredit Pintar (Atome cash Loan)":"#14b8a6","Kredit Pintar":"#14b8a6",
  "Easycash":"#3b82f6","UangMe":"#8b5cf6","Julo":"#ec4899",
  "Maucash":"#6b7280","Koinworks":"#a855f7","Investree":"#64748b",
  "Funding Societies (Modalku)":"#06b6d4","ADA Pundi":"#d946ef"
};
const getColor = (name) => {
  for(const [k,v] of Object.entries(PLAYER_COLORS)) { if(name.includes(k) || k.includes(name)) return v; }
  return "#94a3b8";
};
const SHORT_NAMES = {
  "LENTERA DANA NUSANTARA (Shopee Loan)":"Shopee Loan","Akulaku (Asetku cash loan)":"Akulaku",
  "Kredit Pintar (Atome cash Loan)":"Kredit Pintar","Funding Societies (Modalku)":"Modalku"
};
const shortName = (n) => SHORT_NAMES[n] || n;

const CustomTooltip = ({active,payload,label}) => {
  if(!active||!payload) return null;
  return (<div style={{background:"rgba(15,23,42,0.95)",borderRadius:8,padding:"10px 14px",border:"1px solid rgba(255,255,255,0.1)",color:"#e2e8f0",fontSize:11,maxWidth:280}}>
    <div style={{fontWeight:700,marginBottom:4,color:"#f8fafc",fontSize:12}}>{label}</div>
    {payload.filter(p=>p.value!=null).map((p,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",gap:12,marginBottom:1}}>
      <span style={{color:p.color}}>{p.name}</span>
      <span style={{fontWeight:600,fontVariantNumeric:"tabular-nums"}}>{typeof p.value==='number'&&p.value>10000?(p.value/1e6).toFixed(2)+'M':p.value<100?'$'+p.value.toFixed(3)+'B':p.value.toLocaleString()}</span>
    </div>))}
  </div>);
};

const P2PTooltip = ({active,payload,label,unit}) => {
  if(!active||!payload) return null;
  return (<div style={{background:"rgba(15,23,42,0.95)",borderRadius:8,padding:"10px 14px",border:"1px solid rgba(255,255,255,0.1)",color:"#e2e8f0",fontSize:11,maxWidth:280}}>
    <div style={{fontWeight:700,marginBottom:4,color:"#f8fafc",fontSize:12}}>{label}</div>
    {payload.filter(p=>p.value!=null).sort((a,b)=>b.value-a.value).map((p,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",gap:12,marginBottom:1}}>
      <span style={{color:p.color}}>{p.name}</span>
      <span style={{fontWeight:600,fontVariantNumeric:"tabular-nums"}}>{unit==='usd'?'$'+p.value.toFixed(3)+'B':unit==='ppl'?(p.value>=1e6?(p.value/1e6).toFixed(2)+'M':p.value>=1e3?(p.value/1e3).toFixed(1)+'K':p.value):p.value}</span>
    </div>))}
  </div>);
};

const tabs = [
  {id:"overview",label:"总览"},{id:"bank",label:"银行"},{id:"mf",label:"多元金融"},
  {id:"p2p",label:"P2P行业"},{id:"players",label:"P2P竞品"},{id:"detail",label:"数据明细"}
];

function PlayersChart({metric,title,unit}) {
  const section = p2pRaw[metric];
  if(!section) return null;
  const dates = section.dates;
  const players = section.players;
  const activeNames = Object.keys(players).filter(n => {
    const vals = players[n];
    return vals.filter(v=>v!=null).length >= 5;
  });
  const data = dates.map((d,i) => {
    const row = {date: d.length>7?d.substring(0,7):d};
    activeNames.forEach(n => { row[shortName(n)] = players[n][i]; });
    return row;
  });
  return (<div style={{background:"rgba(30,41,59,0.6)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)",marginBottom:12}}>
    <h3 style={{fontSize:13,fontWeight:600,margin:"0 0 10px",color:"#f1f5f9"}}>{title}</h3>
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis dataKey="date" tick={{fontSize:9,fill:"#64748b"}} angle={-45} textAnchor="end" height={45} />
        <YAxis tick={{fontSize:9,fill:"#64748b"}} />
        <Tooltip content={<P2PTooltip unit={unit} />} />
        <Legend wrapperStyle={{fontSize:10}} />
        {activeNames.map(n=>(<Line key={n} type="monotone" dataKey={shortName(n)} stroke={getColor(n)} strokeWidth={1.5} dot={false} connectNulls />))}
      </LineChart>
    </ResponsiveContainer>
  </div>);
}

function LatestSnapshot() {
  const metrics = ["disbursement","outstanding"];
  const labels = {disbursement:"当年Disbursement (USD B)",outstanding:"Outstanding (USD B)"};
  const rows = [];
  const section = p2pRaw.disbursement;
  const allNames = Object.keys(section.players);
  const lastIdx = section.dates.length - 1;
  allNames.forEach(name => {
    const disb = p2pRaw.disbursement.players[name]?.[lastIdx];
    const nm2 = Object.keys(p2pRaw.outstanding.players).find(k=>k.includes(name.split(' ')[0])||name.includes(k.split(' ')[0]));
    const outst = nm2 ? p2pRaw.outstanding.players[nm2]?.[lastIdx] : null;
    const nm3 = Object.keys(p2pRaw.totalBorrowers.players).find(k=>k.includes(name.split(' ')[0])||name.includes(k.split(' ')[0]));
    const tb = nm3 ? p2pRaw.totalBorrowers.players[nm3]?.[p2pRaw.totalBorrowers.dates.length-1] : null;
    const nm4 = Object.keys(p2pRaw.activeBorrowers.players).find(k=>k.includes(name.split(' ')[0])||name.includes(k.split(' ')[0]));
    const ab = nm4 ? p2pRaw.activeBorrowers.players[nm4]?.[p2pRaw.activeBorrowers.dates.length-1] : null;
    rows.push({name:shortName(name),disb,outst,tb,ab,color:getColor(name)});
  });
  return (<div style={{background:"rgba(30,41,59,0.6)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)",marginBottom:12}}>
    <h3 style={{fontSize:13,fontWeight:600,margin:"0 0 10px",color:"#f1f5f9"}}>最新快照 (as of {section.dates[lastIdx]})</h3>
    <div style={{overflowX:"auto"}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:10,whiteSpace:"nowrap"}}>
        <thead><tr style={{borderBottom:"2px solid rgba(255,255,255,0.1)"}}>
          {["Player","YTD Disb ($B)","Outstanding ($B)","Total Borrowers","Active Borrowers"].map((h,i)=>(
            <th key={i} style={{textAlign:i===0?"left":"right",padding:"5px 6px",color:"#94a3b8",fontWeight:600,fontSize:9}}>{h}</th>))}
        </tr></thead>
        <tbody>{rows.filter(r=>r.disb!=null||r.outst!=null).sort((a,b)=>(b.disb||0)-(a.disb||0)).map((r,i)=>(
          <tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
            <td style={{padding:"4px 6px",color:r.color,fontWeight:500}}>{r.name}</td>
            <td style={{padding:"4px 6px",textAlign:"right",fontFamily:"monospace",fontSize:10,color:"#f1f5f9"}}>{r.disb!=null?'$'+r.disb.toFixed(3)+'B':'—'}</td>
            <td style={{padding:"4px 6px",textAlign:"right",fontFamily:"monospace",fontSize:10,color:"#f1f5f9"}}>{r.outst!=null?'$'+r.outst.toFixed(3)+'B':'—'}</td>
            <td style={{padding:"4px 6px",textAlign:"right",fontFamily:"monospace",fontSize:10,color:"#f1f5f9"}}>{r.tb!=null?(r.tb>=1e6?(r.tb/1e6).toFixed(2)+'M':r.tb.toLocaleString()):'—'}</td>
            <td style={{padding:"4px 6px",textAlign:"right",fontFamily:"monospace",fontSize:10,color:"#f1f5f9"}}>{r.ab!=null?(r.ab>=1e6?(r.ab/1e6).toFixed(2)+'M':r.ab>=1e3?(r.ab/1e3).toFixed(1)+'K':r.ab):'—'}</td>
          </tr>))}</tbody>
      </table>
    </div>
  </div>);
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const latest = chartData[chartData.length - 1];
  const data2025 = chartData.filter(d => d.period.startsWith("2025"));

  return (
    <div style={{fontFamily:"'DM Sans','Noto Sans SC',system-ui,sans-serif",background:"linear-gradient(135deg,#0f172a,#1e293b,#0f172a)",minHeight:"100vh",color:"#e2e8f0",padding:"20px 14px"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet" />
      <div style={{maxWidth:1100,margin:"0 auto 16px"}}>
        <h1 style={{fontSize:20,fontWeight:700,color:"#f8fafc",margin:0}}>🇮🇩 印尼消费信贷市场追踪</h1>
        <p style={{fontSize:11,color:"#64748b",margin:"4px 0"}}>BI SSKI · OJK Multi-finance · OJK LPBBTI · RDKB新闻稿 · P2P Player Sites | FX=15,000 | 更新至 Dec 2025</p>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto 14px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(155px,1fr))",gap:8}}>
        {[{label:"消费信贷(含车)",value:latest.totalInclVeh,color:"#3b82f6"},
          {label:"消费信贷(不含车)",value:latest.totalExclVeh,color:"#8b5cf6"},
          {label:"P2P Outstanding",value:latest.p2p,color:"#ef4444"},
          {label:"狭义消金(非银)",value:latest.narrowNonBank,color:"#ec4899"}
        ].map((k,i)=>(<div key={i} style={{background:"rgba(30,41,59,0.7)",borderRadius:10,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.06)",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:k.color,opacity:0.8}} />
          <div style={{fontSize:10,color:"#94a3b8",marginBottom:4}}>{k.label}</div>
          <div style={{fontSize:22,fontWeight:700,color:"#f8fafc",fontVariantNumeric:"tabular-nums"}}>${k.value?.toFixed(1)}B</div>
          <div style={{fontSize:9,color:"#64748b"}}>2025.12</div>
        </div>))}
      </div>

      <div style={{maxWidth:1100,margin:"0 auto 12px",display:"flex",gap:3,flexWrap:"wrap"}}>
        {tabs.map(t=>(<button key={t.id} onClick={()=>setActiveTab(t.id)} style={{padding:"6px 12px",borderRadius:8,border:"none",cursor:"pointer",fontSize:11,fontWeight:600,background:activeTab===t.id?"rgba(59,130,246,0.2)":"rgba(30,41,59,0.5)",color:activeTab===t.id?"#60a5fa":"#94a3b8",borderBottom:activeTab===t.id?"2px solid #3b82f6":"2px solid transparent"}}>{t.label}</button>))}
      </div>

      <div style={{maxWidth:1100,margin:"0 auto"}}>
        {activeTab==="overview" && (<div style={{display:"grid",gap:12}}>
          <div style={{background:"rgba(30,41,59,0.6)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)"}}>
            <h3 style={{fontSize:13,fontWeight:600,margin:"0 0 12px",color:"#f1f5f9"}}>消费信贷余额趋势 (USD Bn)</h3>
            <ResponsiveContainer width="100%" height={280}>
              <ComposedChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="period" tick={{fontSize:9,fill:"#64748b"}} angle={-45} textAnchor="end" height={45} />
                <YAxis tick={{fontSize:9,fill:"#64748b"}} domain={[60,"auto"]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{fontSize:10}} />
                <Area type="monotone" dataKey="totalInclVeh" name="含车总额" stroke="#1e293b" fill="rgba(59,130,246,0.15)" strokeWidth={2} />
                <Line type="monotone" dataKey="totalExclVeh" name="不含车总额" stroke="#8b5cf6" strokeWidth={1.5} dot={false} strokeDasharray="6 3" />
                <Line type="monotone" dataKey="narrowNonBank" name="狭义消金" stroke="#ec4899" strokeWidth={1.5} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div style={{background:"rgba(30,41,59,0.6)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)"}}>
            <h3 style={{fontSize:13,fontWeight:600,margin:"0 0 12px",color:"#f1f5f9"}}>分机构余额构成 (USD Bn)</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="period" tick={{fontSize:9,fill:"#64748b"}} angle={-45} textAnchor="end" height={45} />
                <YAxis tick={{fontSize:9,fill:"#64748b"}} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{fontSize:10}} />
                <Area type="monotone" dataKey="bankMP" name="Bank MP" stackId="1" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.6} />
                <Area type="monotone" dataKey="mf4W" name="MF 4W" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                <Area type="monotone" dataKey="bankVeh" name="Bank Veh" stackId="1" stroke="#2563eb" fill="#2563eb" fillOpacity={0.5} />
                <Area type="monotone" dataKey="bankOth" name="Bank Other" stackId="1" stroke="#0891b2" fill="#0891b2" fillOpacity={0.4} />
                <Area type="monotone" dataKey="mf2W" name="MF 2W" stackId="1" stroke="#059669" fill="#059669" fillOpacity={0.4} />
                <Area type="monotone" dataKey="p2p" name="P2P" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>)}

        {activeTab==="bank" && (<div style={{background:"rgba(30,41,59,0.6)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)"}}>
          <h3 style={{fontSize:13,fontWeight:600,margin:"0 0 12px",color:"#f1f5f9"}}>银行消费信贷 (USD Bn) — Source: BI SSKI Sheet 17</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="period" tick={{fontSize:9,fill:"#64748b"}} angle={-45} textAnchor="end" height={45} />
              <YAxis tick={{fontSize:9,fill:"#64748b"}} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{fontSize:10}} />
              <Line type="monotone" dataKey="bankMP" name="Multipurpose" stroke="#7c3aed" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="bankVeh" name="Vehicles" stroke="#2563eb" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="bankOth" name="Others" stroke="#0891b2" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="bankBNPL" name="BNPL" stroke="#06b6d4" strokeWidth={1.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>)}

        {activeTab==="mf" && (<div style={{background:"rgba(30,41,59,0.6)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)"}}>
          <h3 style={{fontSize:13,fontWeight:600,margin:"0 0 12px",color:"#f1f5f9"}}>多元金融 Multi-finance (USD Bn) — Source: OJK LP PP9</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="period" tick={{fontSize:9,fill:"#64748b"}} angle={-45} textAnchor="end" height={45} />
              <YAxis tick={{fontSize:9,fill:"#64748b"}} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{fontSize:10}} />
              <Line type="monotone" dataKey="mf4W" name="4W" stroke="#10b981" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="mf2W" name="2W" stroke="#059669" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="mfMP" name="Multipurpose" stroke="#f59e0b" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="mfBNPL" name="BNPL" stroke="#f97316" strokeWidth={1.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>)}

        {activeTab==="p2p" && (<div style={{background:"rgba(30,41,59,0.6)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)"}}>
          <h3 style={{fontSize:13,fontWeight:600,margin:"0 0 12px",color:"#f1f5f9"}}>P2P Outstanding (USD Bn) — Source: OJK LPBBTI Sheet 9</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="period" tick={{fontSize:9,fill:"#64748b"}} angle={-45} textAnchor="end" height={45} />
              <YAxis tick={{fontSize:9,fill:"#64748b"}} domain={[3,"auto"]} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="p2p" name="P2P Outstanding" stroke="#ef4444" fill="rgba(239,68,68,0.15)" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>)}

        {activeTab==="players" && (<div>
          <LatestSnapshot />
          <PlayersChart metric="disbursement" title="当年放款额 YTD Disbursement (USD Bn)" unit="usd" />
          <PlayersChart metric="outstanding" title="贷款余额 Outstanding (USD Bn)" unit="usd" />
          <PlayersChart metric="totalBorrowers" title="累计借款人 Total Borrowers" unit="ppl" />
          <PlayersChart metric="activeBorrowers" title="活跃借款人 Active Borrowers (当年/当前)" unit="ppl" />
          <div style={{fontSize:10,color:"#64748b",padding:"8px 0",lineHeight:1.6}}>
            ⚠️ 数据抓取说明: 绝大多数P2P平台（AdaKami, Kredifazz, Easycash, Kredit Pintar等）使用JavaScript动态加载统计数据，无法通过静态HTML抓取。仅Lentera Dana (Shopee Loan)支持服务端渲染。建议手动更新或使用Puppeteer/Playwright等工具。
          </div>
        </div>)}

        {activeTab==="detail" && (<div style={{background:"rgba(30,41,59,0.6)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)"}}>
          <h3 style={{fontSize:13,fontWeight:600,margin:"0 0 10px",color:"#f1f5f9"}}>2025年月度数据 (USD Bn)</h3>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:10,whiteSpace:"nowrap"}}>
              <thead><tr style={{borderBottom:"2px solid rgba(255,255,255,0.1)"}}>
                {["月份","Bank车贷","Bank多用途","Bank BNPL","Bank其他","MF二轮","MF四轮","MF多用途","MF BNPL","P2P","含车总额","不含车总额","狭义消金"].map((h,i)=>(
                  <th key={i} style={{textAlign:i===0?"left":"right",padding:"5px 6px",color:"#94a3b8",fontWeight:600,fontSize:9}}>{h}</th>))}
              </tr></thead>
              <tbody>{data2025.map((d,i)=>(<tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,0.04)",background:d.isNew?"rgba(251,191,36,0.05)":"transparent"}}>
                <td style={{padding:"4px 6px",fontWeight:500,color:d.isNew?"#fbbf24":"#e2e8f0"}}>{d.isNew?"★ ":""}{d.period}</td>
                {[d.bankVeh,d.bankMP,d.bankBNPL,d.bankOth,d.mf2W,d.mf4W,d.mfMP,d.mfBNPL,d.p2p,d.totalInclVeh,d.totalExclVeh,d.narrowNonBank].map((v,j)=>(
                  <td key={j} style={{padding:"4px 6px",textAlign:"right",fontFamily:"monospace",fontSize:9,color:v==null?"#475569":"#f1f5f9"}}>{v!=null?v.toFixed(2):"—"}</td>))}
              </tr>))}</tbody>
            </table>
          </div>
          <div style={{marginTop:12,fontSize:10,color:"#64748b",lineHeight:1.7}}>
            <b style={{color:"#94a3b8"}}>数据源：</b> Bank → BI SSKI Sheet 17 (R35/36/38) | MF → OJK LP PP9 (R37-43/45-51/64-69) | P2P → OJK LPBBTI Sheet 9 | BNPL → RDKB
          </div>
        </div>)}
      </div>
      <div style={{maxWidth:1100,margin:"16px auto 0",textAlign:"center",fontSize:9,color:"#475569"}}>
        ★ Sep-Dec 2025 newly added · Primary sources verified · {new Date().toISOString().split('T')[0]}
      </div>
    </div>
  );
}
