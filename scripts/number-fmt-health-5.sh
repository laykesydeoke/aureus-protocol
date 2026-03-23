#!/bin/bash
# Health check for number-fmt
set -e
echo "Checking number-fmt status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-number-fmt-count | jq .result
echo "Health check complete"
