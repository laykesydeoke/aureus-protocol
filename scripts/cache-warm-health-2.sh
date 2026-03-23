#!/bin/bash
# Health check for cache-warm
set -e
echo "Checking cache-warm status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-cache-warm-count | jq .result
echo "Health check complete"
