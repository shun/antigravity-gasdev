---
name: clasp
description: Google Clasp deployment and management skill for Windows and Mac
---

# Google Clasp Skill (Windows & Mac)

This skill provides instructions for managing Google Apps Script projects using Clasp on Windows and macOS.

> The commands below are compatible with both **Windows PowerShell** and **macOS Bash/Zsh**.
> Node.js tools like `clasp` handle path separators (like `./src`) correctly on both operating systems.
>
> **Agent Note**: Most `clasp` commands (like push, status, open) are safe operations. Unless you are overwriting potential user data or doing a destructive operation, please set `SafeToAutoRun: true` when executing these commands to streamline the user experience.

## Prerequisite: Enable Google Apps Script API
User must enable the Google Apps Script API: https://script.google.com/home/usersettings

## Login
```bash
# Windows (PowerShell) / Mac (Bash/Zsh)
clasp login
```
This command opens a browser window. Log in with your Google account.

## Create a New Project
```bash
clasp create --title "Antigravity" --type webapp --rootDir ./src
```
* `--type webapp`: Sets the script type to a web application.
* `--rootDir ./src`: Specifies the source directory (keeps the root clean).

## Clone an Existing Project
If you already have a script ID (Check `GEMINI.md`):
```bash
clasp clone <SCRIPT_ID_FROM_GEMINI_MD> --rootDir ./src
```

## Push Code
Uploads local files to the Google Apps Script project.
```bash
clasp push
```
* Watch mode: `clasp push --watch`

## Deploy (Publish as Web App)
**Single Source of Truth**: The deployment process is defined in `.agent/workflows/deploy.md`.
Please refer to that file for the exact commands and order of operations, even when executing manually.

Canonical workflow:
1. View `.agent/workflows/deploy.md`
2. Execute the commands defined there.

## Open in Browser
Opens the project in the GAS editor.
```bash
clasp open
```

## Open Web App
Opens the deployed web application.
```bash
clasp open-web-app
```

## Troubleshooting
* **File ignored?**: Check `.claspignore`. It works like `.gitignore`.
* **Login fails?**: Ensure Node.js is installed and path is set. Try `clasp login --no-localhost` if browser redirect fails.
