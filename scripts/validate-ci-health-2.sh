#!/bin/bash
# Health check for validate-ci
set -e
echo "Checking validate-ci status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-validate-ci-count | jq .result
echo "Health check complete"
