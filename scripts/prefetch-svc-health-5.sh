#!/bin/bash
# Health check for prefetch-svc
set -e
echo "Checking prefetch-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-prefetch-svc-count | jq .result
echo "Health check complete"
