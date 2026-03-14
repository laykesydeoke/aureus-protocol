#!/bin/bash
# Health check for search-idx
set -e
echo "Checking search-idx status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-search-idx-count | jq .result
echo "Health check complete"
