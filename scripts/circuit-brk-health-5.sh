#!/bin/bash
# Health check for circuit-brk
set -e
echo "Checking circuit-brk status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-circuit-brk-count | jq .result
echo "Health check complete"
