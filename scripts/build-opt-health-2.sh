#!/bin/bash
# Health check for build-opt
set -e
echo "Checking build-opt status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-build-opt-count | jq .result
echo "Health check complete"
