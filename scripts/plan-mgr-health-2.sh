#!/bin/bash
# Health check for plan-mgr
set -e
echo "Checking plan-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-plan-mgr-count | jq .result
echo "Health check complete"
