# Gemini CLI Specialist: AI Audit Tool
# Mandate: Precision & Efficiency

Write-Host "--- Starting AI-Powered Workspace Audit ---" -ForegroundColor Cyan

# 1. Gather Project Data
$structure = ls -R | Out-String
$packageJson = if (Test-Path "package.json") { Get-Content "package.json" | Out-String } else { "No package.json found" }

# 2. Construct the Prompt
$prompt = @"
As a Gemini CLI Specialist, perform a Workspace Audit of this project.
Review the file structure and package dependencies below.
Identify missing best practices, configuration gaps, and structural inconsistencies.

FILE STRUCTURE:
$structure

PACKAGE.JSON:
$packageJson
"@

# 3. Pipe to Gemini
Write-Host "Sending data to Gemini for analysis..." -ForegroundColor Gray
gemini ask $prompt
