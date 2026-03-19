#!/bin/bash
# Health check for archive-svc
set -e
echo "Checking archive-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-archive-svc-count | jq .result
echo "Health check complete"
