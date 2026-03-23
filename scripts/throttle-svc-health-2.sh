#!/bin/bash
# Health check for throttle-svc
set -e
echo "Checking throttle-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-throttle-svc-count | jq .result
echo "Health check complete"
