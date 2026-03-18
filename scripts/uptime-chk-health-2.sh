#!/bin/bash
# Health check for uptime-chk
set -e
echo "Checking uptime-chk status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-uptime-chk-count | jq .result
echo "Health check complete"
