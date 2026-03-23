#!/bin/bash
# Health check for timezone-svc
set -e
echo "Checking timezone-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-timezone-svc-count | jq .result
echo "Health check complete"
