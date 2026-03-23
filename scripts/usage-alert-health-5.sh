#!/bin/bash
# Health check for usage-alert
set -e
echo "Checking usage-alert status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-usage-alert-count | jq .result
echo "Health check complete"
