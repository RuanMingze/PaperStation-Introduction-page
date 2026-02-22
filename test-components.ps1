$ErrorActionPreference = "Continue"

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$logFile = "ComponentTest.log"

Add-Content -Path $logFile -Value "`n$('='*80)`nComponent Test started at: $timestamp`n$('='*80)`n`n"

function Test-Component {
    param($componentName, $filePath)
    
    Write-Host "Testing component: $componentName" -ForegroundColor Cyan
    
    $backupContent = Get-Content $filePath -Raw
    
    try {
        $result = & pnpm run build 2>&1
        $exitCode = $LASTEXITCODE
        
        if ($exitCode -eq 0) {
            Write-Host "  SUCCESS: $componentName is OK" -ForegroundColor Green
            Add-Content -Path $logFile -Value "  SUCCESS: $componentName is OK`n"
        } else {
            Write-Host "  FAILED: $componentName caused build error" -ForegroundColor Red
            Add-Content -Path $logFile -Value "  FAILED: $componentName caused build error`n"
            Add-Content -Path $logFile -Value "  Error: $result`n`n"
            return $false
        }
    } catch {
        Write-Host "  EXCEPTION: $componentName threw exception" -ForegroundColor Red
        Add-Content -Path $logFile -Value "  EXCEPTION: $componentName threw exception`n"
        return $false
    }
    
    return $true
}

$components = @(
    "app/page.tsx",
    "app/layout.tsx",
    "app/globals.css",
    "components/navbar.tsx",
    "components/footer.tsx",
    "components/hero-section.tsx",
    "components/rotating-text.tsx",
    "components/features-section.tsx",
    "components/comparison-section.tsx",
    "components/tech-stack-section.tsx",
    "components/security-section.tsx",
    "components/contribute-section.tsx",
    "components/download-section.tsx",
    "components/faq-section.tsx"
)

Write-Host "`nStarting component isolation test...`n" -ForegroundColor Yellow
Write-Host "This will test each component individually to find the problematic one.`n" -ForegroundColor Yellow

$failedComponent = $null

foreach ($component in $components) {
    if (Test-Path $component) {
        $result = Test-Component $component $component
        if (-not $result) {
            $failedComponent = $component
            break
        }
    } else {
        Write-Host "  SKIPPED: $component not found" -ForegroundColor Yellow
    }
}

Write-Host "`n`n$('='*80)" -ForegroundColor Yellow

if ($failedComponent) {
    Write-Host "Problematic component found: $failedComponent" -ForegroundColor Red
    Write-Host "This component is causing the Turbopack error." -ForegroundColor Red
    Add-Content -Path $logFile -Value "`nPROBLEMATIC COMPONENT: $failedComponent`n"
} else {
    Write-Host "No problematic component found. Issue may be in configuration or dependencies." -ForegroundColor Yellow
    Add-Content -Path $logFile -Value "`nNo problematic component found. Issue may be in configuration or dependencies.`n"
}

Write-Host "`nTest completed. Results saved to $logFile`n" -ForegroundColor Cyan
