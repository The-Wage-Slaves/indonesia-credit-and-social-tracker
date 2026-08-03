# Agent Handoff

Last updated: 2026-08-03

## 2026-08-03 delivery and process correction

- PR #14 is the single container replacing the rejected startup-server/15-minute polling design.
- Target delivery is one rolling Private GitHub Release ZIP plus a Feishu download link, triggered only
  by confirmed dashboard changes on main.
- PR #10–#13 are retained as immutable history and documented as a process anti-pattern. All PR #14
  test fixes must stay on its branch until the full path passes.
- Sites delivery code and repository secrets were removed; the old hosted OpenAI Site project itself
  still awaits permanent deletion after the owner signs into Sites management.
- Durable cross-agent rules and methodology live in PROJECT_MEMORY.md and must be re-read after
  context compaction.

## Current state

- Repository: `The-Wage-Slaves/indonesia-credit-and-social-tracker` (private).
- `main` contains PR #1–#5 and PR #7, plus the 2026-07-28 confirmed
  production snapshot. Number #6 is a red-alert Issue, not a pull request.
- 全景等权版（内部代号 V3）仍是唯一正式口径。
- 数据置信版（内部代号 V4）仍是只读影子口径，不得自动替换正式分数。
- PR #7 merged the news/social fear-monitor v2 and the final weekly staging
  boundary. Routine weekly observations no longer create pull requests.

## PR #7 — news/social fear monitor v2 (merged)

The v2 formula is 25% news-density shock + 20% news negativity + 20% social
volume shock + 20% social negativity + 15% verified-event severity. Data
confidence is separate and never lowers risk. Missing components are excluded,
the available weight is disclosed, and the result is labelled provisional.

Live source coverage now includes every channel used by the stability street
heat monitor: Google Trends, Kaskus, YouTube, GDELT volume/tone and mainstream
RSS, with Reddit as an active fallback. It also adds Google News and an optional
official X API adapter. YouTube captures comments as well as video titles.

The reviewed two-week fixture contains news evidence only, so the regenerated
preview correctly shows social pressure as unavailable rather than inventing
social observations. A live weekly run fills social evidence where configured.
The weekly workflow remains human-in-the-loop. It writes pending results to
`bot/weekly-credit-sentiment`, adds a GitHub Actions run summary, and never
opens a routine data PR or writes confirmed history to `main`.

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

## PR #5 / #7 — digital-credit fear monitor

Main files:

- `credit-tracker/sentiment-monitor/credit_sentiment.py`
- `credit-tracker/sentiment-monitor/fixtures/recent-two-weeks.json`
- `credit-tracker/sentiment-monitor/output/credit-sentiment-pending.json`
- `credit-tracker/dashboard/credit-dashboard.html` section 4
- `.github/workflows/weekly-credit-sentiment.yml`

Pilot results:

| Complete week | Fear index | Alert |
|---|---:|---|
| 2026-07-13–2026-07-19 | 65.2 | Amber |
| 2026-07-20–2026-07-26 | 69.9 | Red |

The Kredivo/KrediFazz Purworejo collection incident passes the red evidence
gate because it has an OJK primary release and independent corroborating media.
The index measures short-term fear/attention shock, not solvency or brand favorability.

The scheduled workflow runs every Monday. It writes only pending artifacts to
`bot/weekly-credit-sentiment`, adds a review summary to the Actions run, and
creates a deduplicated red-alert GitHub Issue only when the strict evidence
gate passes. It does not create a routine data PR or write confirmed dashboard
history directly. Feishu delivery is designed but not yet connected; see
`credit-tracker/sentiment-monitor/REVIEW_REQUEST.md`.

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

1. Integrate the owner's existing daily Indonesia-news Hooks into the future
   Feishu review adapter after the payload format is provided.
2. Accumulate at least eight weekly credit-sentiment observations, then replace
   the pilot week-on-week volume component with rolling median + MAD.
3. Replace V4 migration-anchor transforms with 24–36 months of raw histories.
4. Add YouTube comments and Kaskus forum/21 to the stability street-heat source pool.
5. Complete OJK new-portal parsing and the remaining P2P source gaps.

## Takeover prompt

```text
Take over: read AGENTS.md, CLAUDE.md and HANDOFF.md; inspect main and open PRs;
summarize the latest merged changes and pending review artifacts; then continue
the first unfinished priority without bypassing human confirmation.
```

## Operating notes

- Never commit keys, tokens, cookies or private account data.
- Scripts prepare review artifacts; only an explicit human approval may publish
  confirmed data. Routine observations are not code-review pull requests.
- The current local root `.git` metadata is unreliable. GitHub `main` and PR
  branches are the source of truth until a clean clone is made.
