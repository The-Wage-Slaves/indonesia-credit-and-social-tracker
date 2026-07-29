# Review request: weekly collection, Feishu notification, and approval boundary

## Why this document exists

GitHub pull requests are reserved for system-level changes: methodology, collector
logic, dashboard behavior, security, and architecture. A routine weekly observation
is operational data, not a code change, so the scheduler must not create or refresh
a pull request every week.

This file mirrors the design decision in the pull-request description. Review tools
that can fetch the branch but cannot read GitHub PR metadata can use this file as the
canonical review request.

## Approved operating model

1. GitHub Actions runs the digital-credit collector every Monday.
2. The run calculates a pending two-week fear-index package and executes the tests.
3. Pending files are written only to `bot/weekly-credit-sentiment`.
4. No routine data PR is opened, and no confirmed history in `main` is changed.
5. A normal weekly result is sent to the owner for review through the future Feishu
   notification path.
6. Only an evidence-gated red event creates a deduplicated GitHub Issue.
7. Confirmed publication remains a separate human-authorized action.

## Feishu integration boundary

The Feishu connection is intentionally not implemented in this pull request because
the owner already has daily Indonesia-news Hooks and will provide their formats and
delivery requirements later.

The future adapter should:

- accept the existing weekly output as its source of truth instead of recalculating
  the index;
- optionally normalize the owner's existing daily-news Hook items into the same
  evidence pool before weekly scoring;
- push one compact review card containing week, composite/news/social scores,
  coverage status, source failures, red-alert reasons, and clickable evidence links;
- store webhook URLs, signing secrets, app credentials, and callback tokens only in
  GitHub Secrets or another secret manager;
- be retry-safe and attach a stable week/event id so duplicate messages can be
  suppressed;
- treat delivery success as notification only, never as approval.

An incoming webhook is one-way. If approval is later performed inside Feishu, it
requires a Feishu app/bot callback with signature verification, an allowlist of
reviewers, explicit `approve`/`reject` actions, and an immutable audit record. The
callback must trigger a separate publication step; it must not let the collector
write confirmed history directly.

## Pending publication decision

Before implementing interactive confirmation, the owner and reviewer must choose
where confirmed weekly data lives and how the approval action promotes it. Options
include a dedicated confirmed-data branch or a narrowly scoped data-only commit.
That decision must preserve the repository's human-in-the-loop rule and must not
grant a notification webhook broad write access to `main`.

## Review focus

- Is the news/social score method appropriate and sufficiently auditable?
- Are source failures and partial coverage impossible to mistake for calm conditions?
- Are red-event evidence gates strict enough?
- Does the workflow cleanly separate routine data review from code PRs?
- Can the future Feishu adapter ingest the owner's daily-news Hooks without counting
  syndicated duplicates or the same event more than once?
