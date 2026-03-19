#!/bin/bash
# Health check for snapshot-mgr
set -e
echo "Checking snapshot-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-snapshot-mgr-count | jq .result
echo "Health check complete"
