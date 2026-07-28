/**
 * Safety check for the credit dashboard.
 *
 * credit-dashboard.html is the documented source of truth. The previous
 * version rebuilt it from a stale JSX file through developer-specific absolute
 * paths, which could silently erase newer dashboard features. This command is
 * intentionally validation-only until a reproducible bundler is introduced.
 */
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dashboardPath = path.join(here, 'credit-dashboard.html');
const html = readFileSync(dashboardPath, 'utf8');
const requiredMarkers = [
  'function Dashboard',
  'const p2pRaw =',
  'function ManualDataPanel',
  'function P2PPendingPanel',
  'DASHBOARD_DATA_AS_OF',
  '../sentiment-monitor/output/credit-sentiment-data.js',
  'Digital Credit Fear Monitor',
];
const missing = requiredMarkers.filter((marker) => !html.includes(marker));

if (missing.length) {
  console.error(`Dashboard validation failed; missing: ${missing.join(', ')}`);
  process.exitCode = 1;
} else {
  console.log(`Dashboard source validated: ${dashboardPath} (${html.length} characters)`);
}
