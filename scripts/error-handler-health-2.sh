#!/bin/bash
# Health check for error-handler
set -e
echo "Checking error-handler status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-error-handler-count | jq .result
echo "Health check complete"
