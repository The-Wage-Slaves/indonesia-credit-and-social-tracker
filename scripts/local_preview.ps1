[CmdletBinding()]
param(
    [string]$RepoPath = "",
    [int]$Port = 8777,
    [switch]$SkipUpdate,
    [switch]$UpdateOnly
)

$ErrorActionPreference = "Stop"
if (-not $RepoPath) { $RepoPath = Split-Path -Parent $PSScriptRoot }
$repo = (Resolve-Path -LiteralPath $RepoPath).Path
$outputDir = Join-Path $repo "outputs"
New-Item -ItemType Directory -Path $outputDir -Force | Out-Null

$status = [ordered]@{
    checkedAt = (Get-Date).ToUniversalTime().ToString("o")
    repoPath = $repo
    url = "http://127.0.0.1:$Port/"
    update = "not-attempted"
    commit = $null
    server = "unknown"
}

$gitDir = Join-Path $repo ".git"
$isClone = (Test-Path -LiteralPath (Join-Path $gitDir "HEAD"))
$gitCommand = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCommand) {
    $bundledGit = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
    if (Test-Path -LiteralPath $bundledGit) { $gitCommand = Get-Item -LiteralPath $bundledGit }
}
if (-not $SkipUpdate -and $isClone) {
    if (-not $gitCommand) { throw "Git is required to update the local preview." }
    $dirty = & $gitCommand.Source -C $repo status --porcelain
    if ($LASTEXITCODE -ne 0) {
        $status.update = "git-status-failed"
    } elseif ($dirty) {
        $status.update = "skipped-dirty-worktree"
    } else {
        & $gitCommand.Source -C $repo fetch origin main --quiet
        if ($LASTEXITCODE -eq 0) {
            & $gitCommand.Source -C $repo checkout main --quiet
            & $gitCommand.Source -C $repo merge --ff-only origin/main --quiet
            $status.update = if ($LASTEXITCODE -eq 0) { "up-to-date" } else { "fast-forward-failed" }
        } else {
            $status.update = "fetch-failed"
        }
    }
} elseif (-not $isClone) {
    $status.update = "not-a-git-clone"
} else {
    $status.update = "skipped"
}

if ($isClone) {
    $commit = & $gitCommand.Source -C $repo rev-parse --short HEAD 2>$null
    if ($LASTEXITCODE -eq 0) { $status.commit = $commit.Trim() }
}

$listening = Get-NetTCPConnection -LocalAddress "127.0.0.1" -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if (-not $UpdateOnly -and -not $listening) {
    $python = Get-Command py -ErrorAction SilentlyContinue
    $arguments = @()
    if ($python) {
        $exe = $python.Source
        $arguments += "-3"
    } else {
        $python = Get-Command python -ErrorAction SilentlyContinue
        if ($python) {
            $exe = $python.Source
        } else {
            $bundledPython = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
            if (-not (Test-Path -LiteralPath $bundledPython)) {
                throw "Python was not found. Install Python or keep the Codex bundled runtime available."
            }
            $exe = $bundledPython
        }
    }
    $arguments += @("-m", "http.server", "$Port", "--bind", "127.0.0.1", "--directory", $repo)

    # Some desktop runtimes expose both `Path` and `PATH`. Start-Process treats
    # those as duplicate keys, so normalise the process environment first.
    $processPath = [string][Environment]::GetEnvironmentVariables()["Path"]
    [Environment]::SetEnvironmentVariable("PATH", $null, "Process")
    [Environment]::SetEnvironmentVariable("Path", $processPath, "Process")

    Start-Process -FilePath $exe -ArgumentList $arguments -WindowStyle Hidden `
        -RedirectStandardOutput (Join-Path $outputDir "local-preview-out.log") `
        -RedirectStandardError (Join-Path $outputDir "local-preview-err.log")
    Start-Sleep -Seconds 1
}

if ($UpdateOnly) {
    $status.server = if ($listening) { "ready" } else { "not-checked" }
} else {
    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:$Port/index.html" -TimeoutSec 5
        $status.server = if ($response.StatusCode -eq 200) { "ready" } else { "http-$($response.StatusCode)" }
    } catch {
        $status.server = "unreachable"
    }
}

$status | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $outputDir "local-preview-status.json") -Encoding UTF8
Write-Output "url=$($status.url) update=$($status.update) server=$($status.server) commit=$($status.commit)"
if (-not $UpdateOnly -and $status.server -ne "ready") { exit 2 }

