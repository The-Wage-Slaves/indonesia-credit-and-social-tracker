# Agent Handoff

Last updated: 2026-07-23

## Current State

- Repository: `rafaelbonanza279-wq/indonesia-credit-and-social-tracker` (private)
- Main branch: `main`
- Merged: PR #1 security/reliability pass, PR #2 weekly V3 refresh, PR #3 V4 methodology shadow scaffold.
- In review: Draft PR #4, branch `agent/v3-v4-parallel-2026-07-22`.
- V3 remains the only production stability methodology. V4 is a review-only shadow and must not be presented as a new official week.
- GitHub Pages automatic publishing remains disabled for the private repository.

## Official V3 Snapshot

Cutoff: 2026-07-22.

| Pillar | Score |
|---|---:|
| Fiscal | 48 |
| Currency | 40 |
| Institutions | 37 |
| Social | 55 |
| Coercive | 37 |
| Equal-weight composite | 43.4 (UI: 43) |

Key decisions from merged PR #2:

- BI June reserves corrected to USD145.6bn / 5.5 months; V3 external-liquidity score is 60.
- The DSI timing/scope shift is counted only under institutional policy predictability, not again under fiscal.
- No subjective weekly bumps were added for defense efficiency, portfolio flows, protest evidence, or degraded crawler coverage.
- `engine.js` renders `DATA.weeklyAnalysis`; the weekly note is no longer hardcoded.

## Draft PR #4

PR #4 compares the same 2026-07-22 evidence cutoff under V3 and V4:

- Canonical evidence ledger: `stability-monitor/data/evidence/2026-07-22.json`.
- V4 same-date bridge input: `stability-monitor/data/v4-shadow-input.json`.
- Reproducible scorer/validator: `stability-monitor/scripts/score_v4_shadow.py`.
- Generated JSON and browser-local JS comparison artifacts in `stability-monitor/data/`.
- Read-only page: `stability-monitor/dashboard/v3-v4-comparison.html`.
- Homepage entry and CI stale-output / MECE ownership checks.

Current shadow result:

| Pillar | V3 official | V4 shadow | Delta |
|---|---:|---:|---:|
| Fiscal | 48.0 | 52.2 | +4.2 |
| Currency | 40.0 | 45.6 | +5.6 |
| Institutions | 37.0 | 37.1 | +0.1 |
| Social | 55.0 | 52.2 | -2.8 |
| Coercive | 37.0 | 37.8 | +0.8 |
| Composite | 43.4 | 45.0 | +1.6 |

Interpretation guardrails:

- The delta is a methodology-structure effect, not a claim that conditions improved by 1.6 points.
- Monetary transmission has no same-format series yet; its 15% currency weight is missing and displayed as 85% coverage.
- Social and coercive shadow inputs still contain substantial low-confidence weight.
- Each observation has one primary scoring owner. Cross-references may add context but may not add another score contribution.

## Validation

From the repository root:

```powershell
python stability-monitor/scripts/score_v4_shadow.py --check-output
node .github/scripts/validate_repo.mjs
```

The GitHub Actions workflow runs both checks on every pull request. Do not merge PR #4 until all checks pass and the owner approves the V4 shadow interpretation.

## Next Priorities

1. Review PR #4 and decide which V4 bridge drivers require replacement time series before any pilot history is built.
2. OJK new portal parsing for `data.ojk.go.id/SJKPublic`.
3. Opposition-rate source pool expansion: YouTube comments and Kaskus `forum/21`.
4. Manual confirmation for Modalku dual definitions and an ADA Pundi replacement source.
5. Define the credit-dashboard sentiment panel before implementation.

## Takeover Prompt

```text
Take over: read AGENTS.md, CLAUDE.md, and HANDOFF.md; check git status, git log -5, and git diff origin/main...HEAD; summarize the last completed changes; then continue the next item in HANDOFF.md.
```

Chinese:

```text
接手：读取 AGENTS.md、CLAUDE.md 和 HANDOFF.md；检查 git status、git log -5、git diff origin/main...HEAD；总结上一轮修改；然后继续 HANDOFF.md 里的下一项。
```

## Operating Notes

- Follow the human-in-loop rule: scripts may prepare review artifacts but must not directly change production scores.
- Before switching Codex/Claude Code, commit the current branch and refresh this file.
- Never commit keys, tokens, cookies, or private account data.
- The current local workspace's `.git` metadata is not reliable; GitHub main/PR branches are the source of truth until a clean clone is made.

