#!/bin/bash
# Health check for csrf-token
set -e
echo "Checking csrf-token status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-csrf-token-count | jq .result
echo "Health check complete"
