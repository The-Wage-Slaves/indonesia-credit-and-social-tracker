# Agent Handoff

Last updated: 2026-07-22

## Current State

- Repository: `rafaelbonanza279-wq/indonesia-credit-and-social-tracker`
- Visibility: private
- Main branch: `main`
- PR `#1` (Codex security/reliability pass) is MERGED into `main`.
- Active PR: `#2` — weekly stability score refresh.
- PR branch: `chore/stability-week-2026-07-22`
- GitHub Pages is not available on the current private-repository plan. Automatic Pages publishing stays disabled.

## Last Completed Work (PR #2, by Claude Code)

Weekly stability re-score for 2026-07-22 (only `data.js` + `engine.js`), based on this week's web research + a local `street_heat.py` run:

- Currency pillar 39 → 41 (+2): rupiah recovered from the 18,177 peak to ~17,921 (back below 18k, YTD ~-10.2%); foreign inflows returning to stocks/bonds. Drivers 汇率 35→38, 股市 30→33, 防守消耗效率 35→37.
- Social pillar held at 55: 网络政治情绪 62→63 (opposition rate 39.7%→37.1%, YouTube political-video heat cooled) offset by 动员性质 58→56 (protest spread to Surabaya, 24 arrested).
- Fiscal 49 / Institutions 40 / Coercive 37 unchanged — no evidenced new drivers this week; only pillar-level weekChange notes rewritten.
- BI 21-22 July rate decision left OUT (result unconfirmed at time of writing; economists split hike-to-6.0% vs hold-5.75%). Do NOT bake it in until confirmed.
- Composite index stays 44. Appended the 2026-07-22 weekly snapshot via `apply_week.py`.
- This week's `street_heat.py` run was degraded (Google Trends + GDELT rate-limited); the reliable signals (YouTube, DeepSeek opposition rate) drove the social sentiment update. Re-run Trends/GDELT later when not rate-limited if a cleaner heat composite is wanted.
- `node .github/scripts/validate_repo.mjs` passes locally (pillar scores = weighted sums, provenance present).

## Prior Completed Work (PR #1, by Codex — now merged)

The security and reliability pass:

- Disabled automatic whole-repository Pages publishing.
- Corrected README language around private GitHub Pages availability.
- Added source-aware pending merge and atomic writes in `credit-tracker/update_credit.py`.
- Hardened `credit-tracker/p2p-scraper/scraper.mjs` with atomic writes, timeouts, HTTP checks, coverage checks, and failure exits.
- Switched the P2P scraper dependency away from the deprecated `xlsx` package source and regenerated the lockfile.
- Added coverage gates, atomic merge behavior, and same-day dedupe in `stability-monitor/scripts/street_heat.py`.
- Hardened `stability-monitor/brief/src/analyze.py` against prompt injection and unsafe URLs.
- Escaped pending item rendering and links in `index.html`.
- Added numeric/date validation in the credit dashboard.
- Turned the credit HTML build script into a validator.
- Added repository validation script and CI validation workflow.
- Removed the nested brief workflow and added a root manual workflow for the briefing pipeline.

Known validation result before this handoff file was added:

- JavaScript, Python, and JSON checks passed.
- Scoring invariants passed.
- Model and coverage tests passed.
- Pending merge test passed.
- `npm ci` and audit passed with zero vulnerabilities.
- GitHub CI `Validate repository` passed on the PR branch.

## Next Priorities

Follow `AGENTS.md` as the source of truth. Current priorities are:

1. OJK new portal parsing for `data.ojk.go.id/SJKPublic`.
2. Opposition-rate source pool expansion: YouTube comments and Kaskus `forum/21`.
3. Manual confirmation for Modalku dual metric definitions and a replacement source for ADA Pundi.
4. Define requirements for the credit dashboard sentiment panel.
5. Discuss Feishu push and cloud deployment separately before implementation.

## Takeover Prompt

Use this exact prompt when switching between Codex and Claude Code:

```text
Take over: read AGENTS.md, CLAUDE.md, and HANDOFF.md; check git status, git log -5, and git diff origin/main...HEAD; summarize the last completed changes; then continue the next item in HANDOFF.md.
```

Chinese version:

```text
接手：读取 AGENTS.md、CLAUDE.md 和 HANDOFF.md；检查 git status、git log -5、git diff origin/main...HEAD；总结上一轮修改；然后继续 HANDOFF.md 里的下一项。
```

## Operating Notes

- Avoid simultaneous edits from Codex and Claude Code in the same working tree.
- Before switching tools, commit or clearly leave the worktree state in `HANDOFF.md`.
- Keep this file short and current. It should explain the latest state, not become a full changelog.
- Do not store access tokens, API keys, cookies, or private account data here.

## In Progress

- Add cross-agent handoff documentation to the active PR branch.
- Set up a standard local clone when GitHub CLI auth is working.

## Open Blocker

- Local GitHub CLI currently reports an invalid token for `rafaelbonanza279-wq`. Re-run `gh auth login -h github.com` in PowerShell if local clone/push is required from this machine.
