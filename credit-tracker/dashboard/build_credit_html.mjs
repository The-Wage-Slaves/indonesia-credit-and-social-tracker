import { readFileSync, writeFileSync } from "fs";

const JSX = "E:/AI Tools/CC/Work Session/indonesia-dashboard/credit-tracker/dashboard/indonesia_credit_dashboard.jsx";
const OUT = "E:/AI Tools/CC/Work Session/indonesia-dashboard/credit-tracker/dashboard/credit-dashboard.html";

let src = readFileSync(JSX, "utf8");

// Strip ES module imports (React + recharts) -> provided as CDN globals instead.
src = src.replace(/^import[^\n]*\n/gm, "");
// Turn the default export into a plain component declaration.
src = src.replace(/export default function Dashboard/, "function Dashboard");

const html = `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>印尼消费信贷市场追踪 · Credit Tracker Dashboard</title>
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prop-types@15.8.1/prop-types.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/recharts@2.12.7/umd/Recharts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.25.6/babel.min.js"></script>
<style>
  html,body{margin:0;padding:0;background:#0f172a;}
  #root{min-height:100vh;}
  .boot{color:#94a3b8;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    text-align:center;padding:80px 20px;font-size:14px;}
  .boot a{color:#60a5fa;}
</style>
</head>
<body>
<div id="root"><div class="boot">正在加载看板…<br><span style="font-size:12px">需联网加载 React / Recharts（首次打开约 1–2 秒）。若长时间空白，请检查网络。</span></div></div>
<script type="text/babel" data-presets="react">
const { useState, useMemo } = React;
const { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } = Recharts;

${src}

ReactDOM.createRoot(document.getElementById("root")).render(<Dashboard />);
</script>
</body>
</html>
`;

writeFileSync(OUT, html, "utf8");
console.log("Wrote", OUT, "(" + html.length + " bytes)");
