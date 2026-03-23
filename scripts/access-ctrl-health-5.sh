#!/bin/bash
# Health check for access-ctrl
set -e
echo "Checking access-ctrl status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-access-ctrl-count | jq .result
echo "Health check complete"
