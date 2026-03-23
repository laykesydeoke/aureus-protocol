#!/bin/bash
# Health check for i18n-svc
set -e
echo "Checking i18n-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-i18n-svc-count | jq .result
echo "Health check complete"
