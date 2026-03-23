#!/bin/bash
# Health check for queue-sys
set -e
echo "Checking queue-sys status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-queue-sys-count | jq .result
echo "Health check complete"
