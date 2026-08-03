[CmdletBinding()]
param(
    [string]$RepoPath = "",
    [int]$Port = 8777
)

$ErrorActionPreference = "Stop"
if (-not $RepoPath) { $RepoPath = Split-Path -Parent $PSScriptRoot }
$repo = (Resolve-Path -LiteralPath $RepoPath).Path
$runner = Join-Path $repo "scripts\local_preview.ps1"
if (-not (Test-Path -LiteralPath $runner)) {
    throw "Missing local preview runner: $runner"
}

$serverTaskName = "IndonesiaMonitorLocalPreviewServer"
$updateTaskName = "IndonesiaMonitorLocalPreviewUpdate"
$quotedRunner = '"' + $runner + '"'
$quotedRepo = '"' + $repo + '"'
$updateCommand = "powershell.exe -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File $quotedRunner -RepoPath $quotedRepo -Port $Port -UpdateOnly"

$python = Get-Command py -ErrorAction SilentlyContinue
if ($python) {
    $serverCommand = ('"{0}" -3 -m http.server {1} --bind 127.0.0.1 --directory "{2}"' -f $python.Source, $Port, $repo)
} else {
    $python = Get-Command python -ErrorAction SilentlyContinue
    $pythonPath = if ($python) { $python.Source } else { Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" }
    if (-not (Test-Path -LiteralPath $pythonPath)) { throw "Python was not found." }
    $serverCommand = ('"{0}" -m http.server {1} --bind 127.0.0.1 --directory "{2}"' -f $pythonPath, $Port, $repo)
}

& schtasks.exe /Create /TN $serverTaskName /TR $serverCommand /SC ONLOGON /F | Out-Null
if ($LASTEXITCODE -ne 0) { throw "Failed to register scheduled task $serverTaskName" }

& schtasks.exe /Create /TN $updateTaskName /TR $updateCommand /SC MINUTE /MO 15 /F | Out-Null
if ($LASTEXITCODE -ne 0) { throw "Failed to register scheduled task $updateTaskName" }

& schtasks.exe /Run /TN $serverTaskName | Out-Null
if ($LASTEXITCODE -ne 0) { throw "Failed to start scheduled task $serverTaskName" }

Start-Sleep -Seconds 2
$response = Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:$Port/index.html" -TimeoutSec 5
if ($response.StatusCode -ne 200) { throw "Local preview failed its initial health check" }

& powershell.exe -NoProfile -ExecutionPolicy Bypass -File $runner -RepoPath $repo -Port $Port -UpdateOnly | Out-Null

$desktop = [Environment]::GetFolderPath("Desktop")
if ($desktop) {
    $shortcut = Join-Path $desktop "Indonesia Monitor.url"
    @(
        "[InternetShortcut]"
        "URL=http://127.0.0.1:$Port/"
        "IconFile=$env:SystemRoot\System32\shell32.dll"
        "IconIndex=14"
    ) | Set-Content -LiteralPath $shortcut -Encoding ASCII
}

Write-Output "Installed $serverTaskName and $updateTaskName. Open http://127.0.0.1:$Port/"

