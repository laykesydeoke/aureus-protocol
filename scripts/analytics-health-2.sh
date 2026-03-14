#!/bin/bash
# Health check for analytics
set -e
echo "Checking analytics status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-analytics-count | jq .result
echo "Health check complete"
