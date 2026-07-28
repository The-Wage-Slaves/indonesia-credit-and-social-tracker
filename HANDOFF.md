# Agent Handoff

Last updated: 2026-07-28

## Current state

- Repository: `rafaelbonanza279-wq/indonesia-credit-and-social-tracker` (private).
- `main` contains PR #1–#4 and the 2026-07-28 confirmed production snapshot.
- 全景等权版（内部代号 V3）仍是唯一正式口径。
- 数据置信版（内部代号 V4）仍是只读影子口径，不得自动替换正式分数。
- PR #5 adds V4 evidence-quality controls and the digital-credit fear monitor.

## PR #5 — V4 evidence-quality upgrade

The 2026-07-28 score was rerun on the same evidence cutoff:

| Metric | Result |
|---|---:|
| Official equal-weight V3 | 43.4 |
| V3 under proposed V4 pillar weights | 45.0 |
| V4 shadow | 46.4 |
| Methodology delta | +1.4 |
| Evidence-quality index | 65.9% |
| Availability quality | 74.1% |
| Freshness quality | 96.3% |
| Source directness | 69.3% |
| Raw-input traceability | 68.8% |

Pillar scores remain 52.2 / 45.6 / 36.9 / 50.7 / 37.3. The unchanged
score is intentional: PR #5 improves provenance and measurement disclosure,
not the underlying same-date facts.

Important changes:

- Statistical drivers must use `evidence_weighted` inputs with raw value, unit,
  transform, score and weight; they may not use a subjective `bridgeScore`.
- Every observation records observed/retrieved dates, maximum age, source type,
  source family and underlying event ID.
- Stale evidence requires an explicit carry-forward reason.
- “74.1% confidence” was split into availability, freshness, source directness
  and raw traceability. The combined 65.9% evidence-quality index is not an
  accuracy probability.
- Missing inputs remain visible. Shadow mode may renormalize with disclosure;
  production mode must carry forward with expiry or withhold publication.
- Trigger tests include the exact four-week boundary and stale-evidence cases.

## PR #5 — digital-credit fear monitor

Main files:

- `credit-tracker/sentiment-monitor/credit_sentiment.py`
- `credit-tracker/sentiment-monitor/fixtures/recent-two-weeks.json`
- `credit-tracker/sentiment-monitor/output/credit-sentiment-pending.json`
- `credit-tracker/dashboard/credit-dashboard.html` section 4
- `.github/workflows/weekly-credit-sentiment.yml`

Pilot results:

| Complete week | Fear index | Alert |
|---|---:|---|
| 2026-07-13–2026-07-19 | 63.8 | Amber |
| 2026-07-20–2026-07-26 | 69.6 | Red |

The Kredivo/KrediFazz Purworejo collection incident passes the red evidence
gate because it has an OJK primary release and independent corroborating media.
The index measures short-term fear/attention shock, not solvency or brand favorability.

The scheduled workflow runs every Monday. It writes only pending artifacts to
`bot/weekly-credit-sentiment`, opens or refreshes a review PR, and creates a
deduplicated red-alert GitHub issue only when the strict evidence gate passes.
It never writes confirmed dashboard history directly.

## Validation

From repository root:

```powershell
python stability-monitor/scripts/score_v4_shadow.py --check-output
python -m unittest discover -s stability-monitor/scripts -p "test_*.py"
python -m unittest discover -s credit-tracker/sentiment-monitor -p "test_*.py"
node credit-tracker/dashboard/build_credit_html.mjs
node .github/scripts/validate_repo.mjs
```

## Next priorities

1. Accumulate at least eight weekly credit-sentiment observations, then replace
   the pilot week-on-week volume component with rolling median + MAD.
2. Replace V4 migration-anchor transforms with 24–36 months of raw histories.
3. Add YouTube comments and Kaskus forum/21 to the stability street-heat source pool.
4. Complete OJK new-portal parsing and the remaining P2P source gaps.

## Takeover prompt

```text
Take over: read AGENTS.md, CLAUDE.md and HANDOFF.md; inspect main and open PRs;
summarize the latest merged changes and pending review artifacts; then continue
the first unfinished priority without bypassing human confirmation.
```

## Operating notes

- Never commit keys, tokens, cookies or private account data.
- Scripts prepare review artifacts; only a human-approved merge may publish them.
- The current local root `.git` metadata is unreliable. GitHub `main` and PR
  branches are the source of truth until a clean clone is made.
