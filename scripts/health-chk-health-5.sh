#!/bin/bash
# Health check for health-chk
set -e
echo "Checking health-chk status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-health-chk-count | jq .result
echo "Health check complete"
