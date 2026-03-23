#!/bin/bash
# Health check for preload-mgr
set -e
echo "Checking preload-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-preload-mgr-count | jq .result
echo "Health check complete"
