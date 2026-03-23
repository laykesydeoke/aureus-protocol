#!/bin/bash
# Health check for trace-sys
set -e
echo "Checking trace-sys status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-trace-sys-count | jq .result
echo "Health check complete"
