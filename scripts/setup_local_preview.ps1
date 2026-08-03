[CmdletBinding()]
param(
    [string]$InstallPath = "$env:USERPROFILE\Documents\IndonesiaMonitor",
    [int]$Port = 8777
)

$ErrorActionPreference = "Stop"
$repository = "The-Wage-Slaves/indonesia-credit-and-social-tracker"
$gh = Get-Command gh -ErrorAction SilentlyContinue
if (-not $gh) { throw "GitHub CLI (gh) was not found." }

& $gh.Source auth status --hostname github.com 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "One-time GitHub authorization is required for this private repository."
    & $gh.Source auth login --hostname github.com --git-protocol https --web
    if ($LASTEXITCODE -ne 0) { throw "GitHub authorization did not complete." }
}

if (Test-Path -LiteralPath $InstallPath) {
    if (-not (Test-Path -LiteralPath (Join-Path $InstallPath ".git\HEAD"))) {
        throw "InstallPath exists but is not a Git clone: $InstallPath"
    }
    & $gh.Source repo sync $InstallPath --source $repository --branch main
    if ($LASTEXITCODE -ne 0) { throw "Failed to update the existing clone." }
} else {
    $parent = Split-Path -Parent $InstallPath
    New-Item -ItemType Directory -Path $parent -Force | Out-Null
    & $gh.Source repo clone $repository $InstallPath
    if ($LASTEXITCODE -ne 0) { throw "Failed to clone $repository." }
}

$installer = Join-Path $InstallPath "scripts\install_local_preview.ps1"
if (-not (Test-Path -LiteralPath $installer)) {
    throw "The clone does not contain the local preview installer: $installer"
}
& powershell.exe -NoProfile -ExecutionPolicy Bypass -File $installer -RepoPath $InstallPath -Port $Port
if ($LASTEXITCODE -ne 0) { throw "Local preview installation failed." }

Write-Output "Ready: http://127.0.0.1:$Port/"

