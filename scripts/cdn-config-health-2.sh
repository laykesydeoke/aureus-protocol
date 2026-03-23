#!/bin/bash
# Health check for cdn-config
set -e
echo "Checking cdn-config status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-cdn-config-count | jq .result
echo "Health check complete"
