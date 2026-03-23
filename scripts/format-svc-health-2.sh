#!/bin/bash
# Health check for format-svc
set -e
echo "Checking format-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-format-svc-count | jq .result
echo "Health check complete"
