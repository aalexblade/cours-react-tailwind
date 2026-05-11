#!/bin/bash
# Gemini CLI Specialist: AI Audit Tool (Bash)
# Mandate: Precision & Efficiency

echo -e "\033[0;36m--- Starting AI-Powered Workspace Audit ---\033[0m"

# 1. Gather Project Data
# We use 'find' to get a clean tree-like structure, excluding node_modules for efficiency
structure=$(find . -maxdepth 3 -not -path '*/.*' -not -path './node_modules*')

if [ -f "package.json" ]; then
    package_json=$(cat package.json)
else
    package_json="No package.json found"
fi

# 2. Construct the Prompt
prompt="As a Gemini CLI Specialist, perform a Workspace Audit of this project.
Review the file structure and package dependencies below.
Identify missing best practices, configuration gaps, and structural inconsistencies.

FILE STRUCTURE:
$structure

PACKAGE.JSON:
$package_json"

# 3. Pipe to Gemini
echo -e "\033[0;90mSending data to Gemini for analysis...\033[0m"
echo "$prompt" | gemini ask
