#!/bin/bash
# Health check for lazy-load
set -e
echo "Checking lazy-load status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-lazy-load-count | jq .result
echo "Health check complete"
