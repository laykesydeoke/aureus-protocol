#!/bin/bash
# Health check for log-rotate
set -e
echo "Checking log-rotate status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-log-rotate-count | jq .result
echo "Health check complete"
