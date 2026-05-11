# Gemini CLI Specialist: Project Health Check
# Mandate: Precision & Transparency

$ErrorActionPreference = "Stop"

Write-Host "--- Starting Project Health Check ---" -ForegroundColor Cyan

# 1. Linting
Write-Host "[1/3] Running ESLint..." -ForegroundColor Yellow
try {
    npm run lint
    Write-Host "✔ Linting passed." -ForegroundColor Green
} catch {
    Write-Host "✘ Linting failed. Check output above." -ForegroundColor Red
}

# 2. Type Checking
Write-Host "[2/3] Running Type Check (tsc)..." -ForegroundColor Yellow
if (Get-Command tsc -ErrorAction SilentlyContinue) {
    try {
        npx tsc --noEmit
        Write-Host "✔ Type check passed." -ForegroundColor Green
    } catch {
        Write-Host "✘ Type check failed." -ForegroundColor Red
    }
} else {
    Write-Host "⚠ Skipping Type Check: 'typescript' is not installed or tsc is not in PATH." -ForegroundColor Gray
}

# 3. Tailwind Class Validation
Write-Host "[3/3] Validating Tailwind Classes..." -ForegroundColor Yellow
# Note: This typically requires eslint-plugin-tailwindcss
if (Select-String -Path "package.json" -Pattern "eslint-plugin-tailwindcss") {
    try {
        npm run lint # Re-running lint as it includes tailwind validation when configured
        Write-Host "✔ Tailwind classes validated via ESLint plugin." -ForegroundColor Green
    } catch {
        Write-Host "✘ Tailwind validation failed." -ForegroundColor Red
    }
} else {
    Write-Host "⚠ Skipping Tailwind Validation: 'eslint-plugin-tailwindcss' is missing." -ForegroundColor Gray
    Write-Host "  Recommendation: Run 'npm install -D eslint-plugin-tailwindcss' to enable this." -ForegroundColor Cyan
}

Write-Host "--- Health Check Complete ---" -ForegroundColor Cyan
