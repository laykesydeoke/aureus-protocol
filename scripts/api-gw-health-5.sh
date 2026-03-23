#!/bin/bash
# Health check for api-gw
set -e
echo "Checking api-gw status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-api-gw-count | jq .result
echo "Health check complete"
