#!/bin/bash
# Health check for rollover-mgr
set -e
echo "Checking rollover-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-rollover-mgr-count | jq .result
echo "Health check complete"
