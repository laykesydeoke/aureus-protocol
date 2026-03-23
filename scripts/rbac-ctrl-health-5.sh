#!/bin/bash
# Health check for rbac-ctrl
set -e
echo "Checking rbac-ctrl status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-rbac-ctrl-count | jq .result
echo "Health check complete"
