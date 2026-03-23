#!/bin/bash
# Health check for webhook-mgr
set -e
echo "Checking webhook-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-webhook-mgr-count | jq .result
echo "Health check complete"
