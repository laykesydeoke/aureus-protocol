#!/bin/bash
# Health check for compact-svc
set -e
echo "Checking compact-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-compact-svc-count | jq .result
echo "Health check complete"
