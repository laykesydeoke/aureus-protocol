#!/bin/bash
# Health check for load-bal
set -e
echo "Checking load-bal status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-load-bal-count | jq .result
echo "Health check complete"
