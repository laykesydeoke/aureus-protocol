#!/bin/bash
# Health check for transform-svc
set -e
echo "Checking transform-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-transform-svc-count | jq .result
echo "Health check complete"
