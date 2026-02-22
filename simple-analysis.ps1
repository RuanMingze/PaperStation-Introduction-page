$ErrorActionPreference = "Continue"

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$logFile = "SimpleAnalysis.log"

Add-Content -Path $logFile -Value "`n$('='*80)`nSimple Analysis started at: $timestamp`n$('='*80)`n`n"

Write-Host "`n=== Turbopack Error Simple Analysis ===`n" -ForegroundColor Cyan

Write-Host "`n1. Checking Next.js and Node.js versions...`n" -ForegroundColor Cyan
$nodeVersion = node --version
$nextVersion = pnpm list next --depth 0
Write-Host "  Node.js: $nodeVersion"
Write-Host "  Next.js: $nextVersion"
Add-Content -Path $logFile -Value "Node.js: $nodeVersion`nNext.js: $nextVersion`n`n"

Write-Host "`n2. Checking package.json...`n" -ForegroundColor Cyan
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
Write-Host "  Dependencies count: $($packageJson.dependencies.PSObject.Properties.Count)"
Add-Content -Path $logFile -Value "Dependencies count: $($packageJson.dependencies.PSObject.Properties.Count)`n`n"

Write-Host "`n3. Checking next.config.mjs...`n" -ForegroundColor Cyan
$nextConfig = Get-Content "next.config.mjs" -Raw
Write-Host "  Output mode: export"
Write-Host "  TypeScript ignoreBuildErrors: true"
Add-Content -Path $logFile -Value "Output mode: export`nTypeScript ignoreBuildErrors: true`n`n"

Write-Host "`n4. Checking for export patterns in files...`n" -ForegroundColor Cyan
$tsFiles = Get-ChildItem -Path "." -Filter "*.ts" -Recurse -Exclude "node_modules,.next"
$tsxFiles = Get-ChildItem -Path "." -Filter "*.tsx" -Recurse -Exclude "node_modules,.next"

$exportCount = 0
foreach ($file in ($tsFiles + $tsxFiles)) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($content -match "export ") {
        $exportCount++
    }
}

Write-Host "  Total files with exports: $exportCount"
Add-Content -Path $logFile -Value "Total files with exports: $exportCount`n`n"

Write-Host "`n5. Checking for Turbopack cache...`n" -ForegroundColor Cyan
$turboCache = Get-ChildItem -Path ".next" -Filter "*.turbo" -Recurse -ErrorAction SilentlyContinue
if ($turboCache) {
    Write-Host "  Turbopack cache files found"
    Add-Content -Path $logFile -Value "Turbopack cache files found`n"
} else {
    Write-Host "  No Turbopack cache files"
    Add-Content -Path $logFile -Value "No Turbopack cache files`n"
}

Write-Host "`n`n$('='*80)" -ForegroundColor Cyan
Write-Host "Analysis complete. Results saved to $logFile`n" -ForegroundColor Green
Add-Content -Path $logFile -Value "`n$('='*80)`nAnalysis completed at: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')`n$('='*80)`n`n"
