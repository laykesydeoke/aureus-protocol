#!/bin/bash
# Health check for perm-gate
set -e
echo "Checking perm-gate status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-perm-gate-count | jq .result
echo "Health check complete"
