$env:RUST_BACKTRACE = "full"

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$logFile = "Dump.log"

Add-Content -Path $logFile -Value "`n$('='*80)`nBuild started at: $timestamp`nRUST_BACKTRACE=full enabled`n$('='*80)`n`n"

try {
    $output = & pnpm run build 2>&1
    $exitCode = $LASTEXITCODE
    
    Add-Content -Path $logFile -Value "Build Output:`n$output`n`nExit Code: $exitCode`n"
    
    Write-Host $output
    
    if ($exitCode -ne 0) {
        Write-Host "`nBuild failed with exit code $exitCode" -ForegroundColor Red
        Write-Host "Error details saved to $logFile" -ForegroundColor Yellow
        exit $exitCode
    } else {
        Write-Host "`nBuild succeeded!" -ForegroundColor Green
        Write-Host "Build details saved to $logFile" -ForegroundColor Yellow
    }
} catch {
    $errorMsg = $_.Exception.Message
    $stackTrace = $_.ScriptStackTrace
    $exceptionDetails = $_ | Out-String
    
    Add-Content -Path $logFile -Value "`nException occurred: $errorMsg`nStack trace:`n$stackTrace`n`nException details:`n$exceptionDetails`n"
    
    Write-Host "Exception: $errorMsg" -ForegroundColor Red
    Write-Host "Stack trace saved to $logFile" -ForegroundColor Yellow
    exit 1
}
