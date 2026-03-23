#!/bin/bash
# Health check for csp-header
set -e
echo "Checking csp-header status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-csp-header-count | jq .result
echo "Health check complete"
