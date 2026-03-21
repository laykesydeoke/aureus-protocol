#!/bin/bash
# Health check for bundle-svc
set -e
echo "Checking bundle-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-bundle-svc-count | jq .result
echo "Health check complete"
