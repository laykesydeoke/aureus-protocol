#!/bin/bash
# Health check for batch-ops
set -e
echo "Checking batch-ops status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-batch-ops-count | jq .result
echo "Health check complete"
