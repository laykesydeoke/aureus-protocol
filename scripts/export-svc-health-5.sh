#!/bin/bash
# Health check for export-svc
set -e
echo "Checking export-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-export-svc-count | jq .result
echo "Health check complete"
