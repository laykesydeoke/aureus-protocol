#!/bin/bash
# Health check for date-parse
set -e
echo "Checking date-parse status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-date-parse-count | jq .result
echo "Health check complete"
