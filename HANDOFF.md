# Agent Handoff

Last updated: 2026-07-28

## Current State

- Repository: `rafaelbonanza279-wq/indonesia-credit-and-social-tracker` (private, main branch).
- 方法论命名(2026-07-28): 生产/正式版=「全景等权版」(Panoramic Equal-Weight, 内部代号 v3)；影子/实验版=「数据置信版」(Data-Confidence, 内部代号 v4)。代码/文件内部仍用 v3/v4 标识以免破坏引用；对外统一用中文名。
- Active PR: `chore/stability-week-2026-07-28-rename` — 本周(07-28,安静确认周)快照五柱维持 48/40/37/55/37 + 全景等权版/数据置信版 改名。
- PR `#4` 仍开: 「数据置信版」的算分器/单测/V3-V4对比页/证据台账(纯影子,不碰生产看板)。待办: 合并 PR#4 后给数据置信版补测 07-07/16/22/28 四期,与全景等权版并排对比。
- GitHub Pages 在当前私有计划下不可用,自动发布保持禁用。

## Last Completed Work (PR #2, by Claude Code)

Weekly stability re-score for 2026-07-22 (`data.js`, `engine.js`, and this handoff), based on reviewed official data and the human-in-loop evidence process:

- Fiscal pillar 49 → 48: corrected BI June reserves to USD145.6B / 5.5 months of imports; the existing V3 [4.5,6) band maps to 60. DSI is not also deducted here.
- Currency pillar 39 → 40: rupiah returned below 18,000 and the FX driver is reproducibly 38; defense efficiency and portfolio-flow drivers stay unchanged until complete, like-for-like inputs are available.
- Institutions pillar 40 → 37: the DSI timing/scope shift is counted once, here, in policy variance. PFII is evidence for the existing IIFC event; Febrie continuation is not counted again.
- Social 55 and Coercive 37 are unchanged. Degraded Trends/GDELT coverage and within-band protest evidence are recorded but do not receive subjective point tweaks.
- BI 21-22 July rate decision was not available at the snapshot cutoff and is left OUT.
- Equal-weight composite is 43.4, displayed as 43. Appended the corrected 2026-07-22 weekly snapshot.
- `node .github/scripts/validate_repo.mjs` must pass before merge.
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
