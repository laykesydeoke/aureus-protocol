#!/bin/bash
# Health check for retry-logic
set -e
echo "Checking retry-logic status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-retry-logic-count | jq .result
echo "Health check complete"
