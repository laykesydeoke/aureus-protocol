#!/bin/bash
# Health check for cert-mgr
set -e
echo "Checking cert-mgr status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-cert-mgr-count | jq .result
echo "Health check complete"
