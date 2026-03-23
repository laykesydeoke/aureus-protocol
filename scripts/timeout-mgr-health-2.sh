#!/bin/bash
# Health check for timeout-mgr
set -e
echo "Checking timeout-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-timeout-mgr-count | jq .result
echo "Health check complete"
