# Check if there are staged changes
$changes = git diff --cached --name-only
if (-not $changes) {
    Write-Host "No staged changes found. Please stage files with 'git add' first." -ForegroundColor Yellow
    exit 1
}

Write-Host "--- Gemini CLI Specialist: Git Automation ---" -ForegroundColor Cyan
Write-Host "Mandate: Transparency" -ForegroundColor Gray
Write-Host "Action: Analyzing staged changes for semantic impact..." -ForegroundColor Gray

# Use git diff --cached to get the actual code changes for analysis
$diff = git diff --cached

# Instruction for the Gemini agent via the CLI
# We use a sub-shell or the CLI tool itself to generate the message
Write-Host "Gemini is now generating a semantic commit message based on your diff..." -ForegroundColor Cyan

# This script assumes 'gemini' is available in the path as a CLI tool.
# We prompt for a semantic message (feat, fix, docs, style, refactor, perf, test, chore)
$prompt = @"
Generate a concise, professional semantic commit message for the following diff. 
Follow the Conventional Commits specification.
Output ONLY the commit message string.

Diff:
$diff
"@

# Execution of the commit with the generated message
# Note: In a real Gemini CLI environment, we would pipe this to the model.
# For this script, we will prompt the user to confirm the AI-generated message if possible,
# or directly use a generated one if the CLI supports it.

# Placeholder for actual CLI integration - here we define the command to be run
$commitMessage = gemini ask $prompt

if ($commitMessage) {
    Write-Host "Generated Message: $commitMessage" -ForegroundColor Green
    git commit -m "$commitMessage"
    Write-Host "Success: Changes committed." -ForegroundColor Green
} else {
    Write-Host "Error: Could not generate a commit message." -ForegroundColor Red
}
