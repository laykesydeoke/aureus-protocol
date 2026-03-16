#!/bin/bash
# Health check for carrier-api
set -e
echo "Checking carrier-api status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-carrier-api-count | jq .result
echo "Health check complete"
