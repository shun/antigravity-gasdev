---
description: Deploy the GAS Web App using Clasp
---

This workflow deploys the current code to Google Apps Script.

1. Push local changes to Google Drive
// turbo
```bash
clasp push --force
```

2. Deploy a new version
// turbo
```bash
clasp deploy --description "Deployed via slash command"
```

3. Open the Web App URL (Optional verification)
// turbo
```bash
echo "Deployment complete. Use 'clasp open --webapp' to view."
```
