# Gemini CLI Specialist: AI Commit Tool
# Mandate: Git Automation & Transparency

$diff = git diff --cached
if (-not $diff) {
    Write-Host "✘ No staged changes found. Use 'git add' first." -ForegroundColor Red
    exit 1
}

Write-Host "--- Analyzing Staged Changes ---" -ForegroundColor Cyan
Write-Host "Mandate: Generating semantic commit message with transparency..." -ForegroundColor Gray

# Pipe the diff directly to Gemini with the requested prompt
$diff | gemini ask "Review these changes and write a professional semantic commit message (Conventional Commits). Follow the transparency mandate from my gemini-skills.md."
