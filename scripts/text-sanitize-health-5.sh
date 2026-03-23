#!/bin/bash
# Health check for text-sanitize
set -e
echo "Checking text-sanitize status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-text-sanitize-count | jq .result
echo "Health check complete"
