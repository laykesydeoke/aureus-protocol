#!/bin/bash
# Health check for l10n-mgr
set -e
echo "Checking l10n-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-l10n-mgr-count | jq .result
echo "Health check complete"
