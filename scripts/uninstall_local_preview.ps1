[CmdletBinding()]
param([int]$Port = 8777)

$taskNames = @("IndonesiaMonitorLocalPreviewServer", "IndonesiaMonitorLocalPreviewUpdate", "IndonesiaMonitorLocalPreview")
foreach ($taskName in $taskNames) {
    & schtasks.exe /End /TN $taskName 2>$null | Out-Null
    & schtasks.exe /Delete /TN $taskName /F 2>$null | Out-Null
}

$listeners = Get-NetTCPConnection -LocalAddress "127.0.0.1" -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
foreach ($listener in $listeners) {
    Stop-Process -Id $listener.OwningProcess -ErrorAction SilentlyContinue
}
Write-Output "Removed local preview tasks and stopped the local preview on port $Port."

