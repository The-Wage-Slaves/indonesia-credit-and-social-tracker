/**
 * Excel Updater — reads scrape JSON + existing tracker XLSX, appends a new column.
 *
 * Usage:
 *   node update_excel.mjs results/scrape_2026-05-27.json P2P_Players_Data_202605.xlsx
 *
 * Output: P2P_Players_Data_updated.xlsx
 */
import fs from 'fs';
import XLSX from 'xlsx';

const FX = 15000;

// Map scraper player names → Excel row names (in each section)
const NAME_MAP_DISB = {
  'AdaKami': 'AdaKami',
  'Lentera Dana (Shopee Loan)': 'LENTERA DANA NUSANTARA (Shopee Loan)',
  'Kredifazz': 'Kredifazz',
  'Akulaku (Asetku)': 'Akulaku (Asetku cash loan)',
  'Kredit Pintar': 'Kredit Pintar (Atome cash Loan)',
  'Easycash': 'Easycash',
  'Julo': 'Julo',
  'Koinworks': 'Koinworks',
  'Funding Societies (Modalku)': 'Funding Societies (Modalku)',
  'ADA Pundi': 'ADA Pundi',
};

function main() {
  const [jsonPath, xlsxPath] = process.argv.slice(2);
  if (!jsonPath || !xlsxPath) {
    console.log('Usage: node update_excel.mjs <scrape_json> <tracker_xlsx>');
    process.exit(1);
  }

  const scrapeData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const wb = XLSX.readFile(xlsxPath);
  const ws = wb.Sheets['P2P- Major Player Tracking'];
  if (!ws) { console.error('Sheet "P2P- Major Player Tracking" not found'); process.exit(1); }

  const dateLabel = scrapeData.date.replace(/-/g, '.');
  console.log(`\nUpdating tracker with data from ${dateLabel}\n`);

  // Find the next empty column in header row 4
  const range = XLSX.utils.decode_range(ws['!ref']);
  let newCol = range.e.c + 1;

  // Section row offsets (0-indexed): Disbursement header=3, Outstanding=17, TotalBorrowers=32, ActiveBorrowers=47
  const sections = [
    { headerRow: 3, label: 'Disbursement YTD', field: 'disbYTD_usd' },
    { headerRow: 17, label: 'Outstanding', field: 'outstanding_usd' },
    { headerRow: 32, label: 'Total Borrowers', field: 'totalBorrowers' },
    { headerRow: 47, label: 'Active Borrowers', field: 'activeBorrowersYTD' },
  ];

  for (const section of sections) {
    // Write date header
    const headerCell = XLSX.utils.encode_cell({ r: section.headerRow, c: newCol });
    ws[headerCell] = { t: 's', v: dateLabel };

    // Find player rows
    for (let r = section.headerRow + 1; r < section.headerRow + 15; r++) {
      const nameCell = XLSX.utils.encode_cell({ r, c: 1 }); // Column B
      const cellName = ws[nameCell]?.v;
      if (!cellName) continue;

      // Find matching scrape result
      for (const player of scrapeData.players) {
        const excelName = NAME_MAP_DISB[player.name];
        if (!excelName || !String(cellName).includes(excelName.split(' ')[0])) continue;

        const val = player.parsed?.[section.field];
        if (val != null) {
          const dataCell = XLSX.utils.encode_cell({ r, c: newCol });
          if (section.field === 'totalBorrowers' || section.field === 'activeBorrowersYTD') {
            // Borrowers: write as "X.XXM" string to match existing format
            const mVal = val >= 1e6 ? `${(val / 1e6).toFixed(2)}M` : val.toString();
            ws[dataCell] = { t: 's', v: mVal };
          } else {
            ws[dataCell] = { t: 'n', v: val };
          }
          console.log(`  ${section.label} | ${cellName.padEnd(40)} = ${val}`);
        }
      }
    }
  }

  // Update range
  range.e.c = newCol;
  ws['!ref'] = XLSX.utils.encode_range(range);

  const outPath = xlsxPath.replace('.xlsx', '_updated.xlsx');
  XLSX.writeFile(wb, outPath);
  console.log(`\n✅ Updated file saved: ${outPath}\n`);
}

main();
