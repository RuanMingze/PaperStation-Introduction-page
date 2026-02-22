$ErrorActionPreference = "Continue"

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$logFile = "DeepAnalysis.log"

Add-Content -Path $logFile -Value "`n$('='*80)`nDeep Analysis started at: $timestamp`n$('='*80)`n`n"

Write-Host "`n=== Turbopack Error Deep Analysis ===`n" -ForegroundColor Cyan
Write-Host "Analyzing the root cause of the Turbopack error...`n" -ForegroundColor Yellow

Write-Host "`n1. Checking Next.js and Node.js versions...`n" -ForegroundColor Cyan
$nodeVersion = node --version
$nextVersion = pnpm list next --depth 0
Write-Host "  Node.js: $nodeVersion"
Write-Host "  Next.js: $nextVersion"
Add-Content -Path $logFile -Value "Node.js: $nodeVersion`nNext.js: $nextVersion`n`n"

Write-Host "`n2. Checking for conflicting packages...`n" -ForegroundColor Cyan
$conflictingPackages = @("sharp", "bcrypt", "pinyin-pro", "canvas")
foreach ($pkg in $conflictingPackages) {
    $installed = pnpm list $pkg --depth 0 2>&1
    if ($installed -match "$pkg") {
        Write-Host "  Found: $pkg" -ForegroundColor Yellow
        Add-Content -Path $logFile -Value "Found package: $pkg`n"
    }
}

Write-Host "`n3. Checking for Turbopack cache issues...`n" -ForegroundColor Cyan
$turboCache = Get-ChildItem -Path ".next" -Filter "*.turbo" -Recurse -ErrorAction SilentlyContinue
if ($turboCache) {
    Write-Host "  Turbopack cache files found in .next directory" -ForegroundColor Yellow
    Add-Content -Path $logFile -Value "Turbopack cache files found`n"
} else {
    Write-Host "  No Turbopack cache files found" -ForegroundColor Green
}

Write-Host "`n4. Checking for problematic file patterns...`n" -ForegroundColor Cyan
$problematicPatterns = @(
    "export const",
    "export default",
    "export function",
    "export type",
    "export interface"
)

Write-Host "  Analyzing TypeScript/JavaScript files for export patterns..."
$tsFiles = Get-ChildItem -Path "." -Filter "*.ts" -Recurse -Exclude "node_modules,.next"
$tsxFiles = Get-ChildItem -Path "." -Filter "*.tsx" -Recurse -Exclude "node_modules,.next"

$exportCount = 0
foreach ($file in ($tsFiles + $tsxFiles)) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    foreach ($pattern in $problematicPatterns) {
        if ($content -match $pattern) {
            $exportCount++
            break
        }
    }
}

Write-Host "  Total files with exports: $exportCount"
Add-Content -Path $logFile -Value "Total files with exports: $exportCount`n`n"

Write-Host "`n5. Checking for circular dependencies...`n" -ForegroundColor Cyan
Write-Host "  Analyzing import statements..."

$circularCheck = @(
    "app/page.tsx",
    "components/navbar.tsx",
    "components/footer.tsx",
    "components/hero-section.tsx"
)

foreach ($file in $circularCheck) {
    if (Test-Path $file) {
        $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
        $importPattern = "from ['\""](\./|\.\.\/|@/)[^'\"]+['\"]"
        $matches = [regex]::Matches($content, $importPattern)
        Write-Host "  $file has $($matches.Count) imports"
    }
}

Write-Host "`n6. Checking for Turbopack-specific issues...`n" -ForegroundColor Cyan
$turboIssues = @(
    "dynamic imports",
    "require()",
    "__dirname",
    "__filename",
    "process.cwd()"
)

Write-Host "  Checking for Turbopack-incompatible patterns..."

foreach ($file in ($tsFiles + $tsxFiles)) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    foreach ($issue in $turboIssues) {
        if ($content -match $issue) {
            Write-Host "  Found potential issue in: $($file.Name)" -ForegroundColor Red
            Add-Content -Path $logFile -Value "Potential Turbopack issue in: $($file.FullName)`n  Pattern: $issue`n"
        }
    }
}

Write-Host "`n7. Checking package.json for issues...`n" -ForegroundColor Cyan
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
Write-Host "  Checking package.json configuration..."

if ($packageJson.scripts.build -match "turbo") {
    Write-Host "  Build script uses --turbo flag" -ForegroundColor Yellow
    Add-Content -Path $logFile -Value "Build script uses --turbo flag`n"
}

if ($packageJson.dependencies) {
    Write-Host "  Dependencies count: $($packageJson.dependencies.PSObject.Properties.Count)"
}

Write-Host "`n8. Checking next.config.mjs for issues...`n" -ForegroundColor Cyan
$nextConfig = Get-Content "next.config.mjs" -Raw
Write-Host "  Analyzing Next.js configuration..."

if ($nextConfig -match "output.*export") {
    Write-Host "  Output mode: export" -ForegroundColor Yellow
    Add-Content -Path $logFile -Value "Output mode: export`n"
}

if ($nextConfig -match "experimental") {
    Write-Host "  Experimental features enabled" -ForegroundColor Yellow
    Add-Content -Path $logFile -Value "Experimental features enabled`n"
}

Write-Host "`n`n$('='*80)" -ForegroundColor Cyan
Write-Host "Analysis complete. Results saved to $logFile`n" -ForegroundColor Green
Add-Content -Path $logFile -Value "`n$('='*80)`nAnalysis completed at: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')`n$('='*80)`n`n"
