#!/bin/bash
# Health check for promo-engine
set -e
echo "Checking promo-engine status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-promo-engine-count | jq .result
echo "Health check complete"
