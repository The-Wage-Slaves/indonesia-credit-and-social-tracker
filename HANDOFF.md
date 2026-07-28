# Agent Handoff

Last updated: 2026-07-28

## Current State

- Repository: `rafaelbonanza279-wq/indonesia-credit-and-social-tracker` (private, main branch).
- 方法论命名(2026-07-28 用户拍板): 生产/正式版=「全景等权版」(Panoramic Equal-Weight, 内部代号 v3)；影子/实验版=「数据置信版」(Data-Confidence, 内部代号 v4)。代码/文件内部仍用 v3/v4 标识以免破坏引用；对外统一用中文名。
- Merged 至 main: PR #1(安全加固)、PR #2(V3周更)、PR #3(V4影子脚手架)、**PR #4(数据置信版 算分器/单测/对比页/证据台账,纯影子)**、以及 07-28 周更+改名。
- 全景等权版(V3)是唯一生产口径; 数据置信版(V4)是只读影子,不得当作新的正式周分呈现。
- 数据置信版目前只需两个结论点: 07-22 + 07-28(本周,值同07-22因安静确认周)。不做 07-07/16 补测。
- GitHub Pages 在当前私有计划下不可用,自动发布保持禁用。

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
- Machine-evaluated coercive red triggers and human-confirmed history: `stability-monitor/data/v4-shadow-history.json`.
- Weekly operating procedure: `stability-monitor/docs/V4_WEEKLY_RUNBOOK.md`.
- Homepage entry and CI stale-output / MECE ownership checks.

Current confidence-aware shadow result:

| Pillar | V4 weight | V3 pillar | V4 shadow | Delta | Measurement confidence |
|---|---:|---:|---:|---:|---:|
| Fiscal | 25% | 48.0 | 52.2 | +4.2 | 81.5% |
| Currency | 25% | 40.0 | 45.6 | +5.6 | 78.8% |
| Institutions | 15% | 37.0 | 36.9 | -0.1 | 71.5% |
| Social | 25% | 55.0 | 50.7 | -4.3 | 67.3% |
| Coercive | 10% | 37.0 | 37.3 | +0.3 | 64.5% |

- Official equal-weight V3 composite: 43.4.
- The same V3 pillar scores under the proposed V4 weights: 45.0.
- V4 shadow composite: 46.4; methodology delta versus the same-weight V3 baseline: +1.4.
- Overall measurement confidence: 74.1%; low-confidence planned weight: 17.0%; missing planned weight: 3.8%.

Interpretation guardrails:

- The +1.4 delta is a methodology-structure effect, not a claim that conditions improved.
- Monetary transmission has no same-format series yet; its 15% currency weight is missing and displayed as 85% coverage.
- Social and coercive low-confidence driver weights were reduced to 40% and 30%, respectively.
- Social retains a 25% pillar weight because it is a core early-warning construct; crawler confidence must be earned through coverage and validation gates.
- Coercive routine weight is 10%, with separate red-alert triggers for verified armed conflict, defection, parallel command, or rapid collapse.
- Current trigger level is `normal`; the four-week drop rule is `not_evaluable` because 2026-07-22 is the first confirmed V4 shadow snapshot.
- Each observation has one primary scoring owner. Cross-references may add context but may not add another score contribution.

## Validation

From the repository root:

```powershell
python stability-monitor/scripts/score_v4_shadow.py --check-output
node .github/scripts/validate_repo.mjs
```

The GitHub Actions workflow runs both checks on every pull request. Do not merge PR #4 until all checks pass and the owner approves the V4 shadow interpretation.

Weekly shadow generation after updating and reviewing the evidence:

```powershell
python stability-monitor/scripts/score_v4_shadow.py --write-output
python stability-monitor/scripts/score_v4_shadow.py --append-history --confirmed
```

The second command is deliberately gated by the explicit `--confirmed` flag. It never updates V3 production data.

## Next Priorities

1. Review PR #4 and approve or revise the proposed 25/25/15/25/10 pillar weights and formal formulas.
2. Open a separate crawler-upgrade PR: YouTube comments, Kaskus `forum/21`, fixed quotas, Wilson intervals, blind review, and 12/26-week promotion gates.
3. OJK new portal parsing for `data.ojk.go.id/SJKPublic`.
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
