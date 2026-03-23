#!/bin/bash
# Health check for asset-pipe
set -e
echo "Checking asset-pipe status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-asset-pipe-count | jq .result
echo "Health check complete"
