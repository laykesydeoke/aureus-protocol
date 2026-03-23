#!/bin/bash
# Health check for locale-fmt
set -e
echo "Checking locale-fmt status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-locale-fmt-count | jq .result
echo "Health check complete"
