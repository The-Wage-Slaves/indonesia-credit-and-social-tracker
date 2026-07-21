# Claude Code Handoff Guide

This repository is an Indonesia market monitoring project maintained by human-in-the-loop agents.

Before changing code, read these files in order:

1. `AGENTS.md`
2. `HANDOFF.md`
3. `REVIEW.md`
4. Area-specific docs for the files you are touching

## Project Shape

- `index.html` is the static entry point and reads `pending.js`.
- `credit-tracker/dashboard/credit-dashboard.html` is the consumer credit dashboard.
- `stability-monitor/dashboard/indonesia-stability-index-pro.html` is the stability index dashboard.
- Scripts collect evidence into pending review files. They must not directly overwrite dashboard facts or scores.

## Non-Negotiables

- Keep the human confirmation loop. Scrapers write pending review data; humans approve dashboard updates.
- Keep fact, quote, judgment, and pending labels separate in stability evidence.
- When changing `stability-monitor/dashboard/data.js`, update `changeReason`, `sources`, and `updated` together.
- Pillar scores are rounded sums of weighted subfactors. Recalculate after score changes.
- Keep the FX assumption fixed at 15000 unless the owner explicitly approves a methodology change.
- Never commit secrets. `street_heat_config.yaml` is intentionally ignored.
- Use jsDelivr for CDN references where possible. Avoid unpkg for this project.

## Start Protocol

Use this checklist when taking over from Codex or another Claude Code session:

```powershell
git status -sb
git log -5 --oneline
git diff origin/main...HEAD --stat
git diff origin/main...HEAD -- AGENTS.md HANDOFF.md README.md REVIEW.md
```

Then summarize:

- current branch and PR status
- last completed change
- files with local uncommitted edits
- next item from `HANDOFF.md`

## Finish Protocol

Before handing back:

- update `HANDOFF.md` with what changed and what remains
- run the narrowest relevant validation for touched files
- commit only intentional files
- push the current branch if GitHub auth is available
- do not merge PRs, publish Pages, change repository visibility, or change branch protection without explicit owner approval

## Useful Local Preview

From the repository root:

```powershell
python -m http.server 8777
```

Then open:

- `http://localhost:8777/`
- `http://localhost:8777/credit-tracker/dashboard/credit-dashboard.html`
- `http://localhost:8777/stability-monitor/dashboard/indonesia-stability-index-pro.html`
