# Agent Handoff

Last updated: 2026-07-21

## Current State

- Repository: `rafaelbonanza279-wq/indonesia-credit-and-social-tracker`
- Visibility: private
- Main branch: `main`
- Active PR: `#1`
- PR branch: `agent/security-reliability-fixes`
- Main is not merged with the PR yet.
- GitHub Pages is not available on the current private-repository plan. The old automatic Pages workflow was disabled in the PR.

## Last Completed Work

The current PR contains the security and reliability pass from Codex:

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
