#!/bin/bash
# Health check for span-collect
set -e
echo "Checking span-collect status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-span-collect-count | jq .result
echo "Health check complete"
