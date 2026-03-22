#!/bin/bash
# Health check for cors-policy
set -e
echo "Checking cors-policy status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-cors-policy-count | jq .result
echo "Health check complete"
