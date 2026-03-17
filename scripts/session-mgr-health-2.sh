#!/bin/bash
# Health check for session-mgr
set -e
echo "Checking session-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-session-mgr-count | jq .result
echo "Health check complete"
