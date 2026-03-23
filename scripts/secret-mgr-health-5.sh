#!/bin/bash
# Health check for secret-mgr
set -e
echo "Checking secret-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-secret-mgr-count | jq .result
echo "Health check complete"
