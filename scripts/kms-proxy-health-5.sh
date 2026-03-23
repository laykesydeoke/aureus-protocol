#!/bin/bash
# Health check for kms-proxy
set -e
echo "Checking kms-proxy status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-kms-proxy-count | jq .result
echo "Health check complete"
