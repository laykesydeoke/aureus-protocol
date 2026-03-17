#!/bin/bash
# Health check for token-auth
set -e
echo "Checking token-auth status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-token-auth-count | jq .result
echo "Health check complete"
