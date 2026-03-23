#!/bin/bash
# Health check for test-runner
set -e
echo "Checking test-runner status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-test-runner-count | jq .result
echo "Health check complete"
