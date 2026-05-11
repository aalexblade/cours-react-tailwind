#!/bin/bash
# Gemini CLI Specialist: AI Commit Tool (Bash)
# Mandate: Git Automation & Transparency

# 1. Check for staged changes
diff=$(git diff --cached)

if [ -z "$diff" ]; then
    echo -e "\033[0;31m✘ No staged changes found. Use 'git add' first.\033[0m"
    exit 1
fi

echo -e "\033[0;36m--- Analyzing Staged Changes ---\033[0m"
echo -e "\033[0;90mMandate: Generating semantic commit message with transparency...\033[0m"

# 2. Pipe to Gemini with specialized prompt
# We wrap the diff to ensure it's handled as a single block of text
echo "$diff" | gemini ask "Review these changes and write a professional semantic commit message (Conventional Commits). Follow the transparency mandate from my gemini-skills.md. Output ONLY the commit message."
