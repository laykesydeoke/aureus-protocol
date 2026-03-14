#!/bin/bash
# Health check for rate-limit
set -e
echo "Checking rate-limit status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-rate-limit-count | jq .result
echo "Health check complete"
