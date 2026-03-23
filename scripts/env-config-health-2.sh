#!/bin/bash
# Health check for env-config
set -e
echo "Checking env-config status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-env-config-count | jq .result
echo "Health check complete"
