#!/bin/bash
# Health check for data-valid
set -e
echo "Checking data-valid status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-data-valid-count | jq .result
echo "Health check complete"
