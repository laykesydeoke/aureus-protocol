#!/bin/bash
# Health check for eager-fetch
set -e
echo "Checking eager-fetch status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-eager-fetch-count | jq .result
echo "Health check complete"
