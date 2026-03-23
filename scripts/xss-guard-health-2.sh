#!/bin/bash
# Health check for xss-guard
set -e
echo "Checking xss-guard status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-xss-guard-count | jq .result
echo "Health check complete"
