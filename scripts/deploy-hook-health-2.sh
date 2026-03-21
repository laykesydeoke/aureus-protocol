#!/bin/bash
# Health check for deploy-hook
set -e
echo "Checking deploy-hook status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-deploy-hook-count | jq .result
echo "Health check complete"
