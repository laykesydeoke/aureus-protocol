#!/bin/bash
# Health check for alert-rule
set -e
echo "Checking alert-rule status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-alert-rule-count | jq .result
echo "Health check complete"
