#!/bin/bash
# Health check for currency-fmt
set -e
echo "Checking currency-fmt status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-currency-fmt-count | jq .result
echo "Health check complete"
