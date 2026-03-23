#!/bin/bash
# Health check for caching
set -e
echo "Checking caching status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-caching-count | jq .result
echo "Health check complete"
