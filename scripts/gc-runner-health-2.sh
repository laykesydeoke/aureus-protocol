#!/bin/bash
# Health check for gc-runner
set -e
echo "Checking gc-runner status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-gc-runner-count | jq .result
echo "Health check complete"
