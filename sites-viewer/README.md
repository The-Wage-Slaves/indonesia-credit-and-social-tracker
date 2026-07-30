# Private Sites viewer

This folder packages the approved static dashboard surfaces for private Sites
hosting. It intentionally excludes scraper configuration, credentials, Python
scripts, and unrelated repository files.

After dashboard logic or confirmed data has been reviewed and approved:

1. Run `node scripts/build-static-site.mjs`.
2. Run `node scripts/validate-static-site.mjs`.
3. Save and deploy a new private Sites version.

The deployed URL remains stable across versions.

The worker also exposes a private, token-protected `/api/automation-files`
ingest route backed by D1. GitHub Actions can refresh approved pending-data
routes without publishing a new Sites version. The endpoint accepts only the
explicit route allowlist and never changes confirmed score history.
The allowlist includes daily/weekly risk evidence plus monthly BI/OJK/P2P and
national-macro pending batches; it does not include confirmed dashboard series.
