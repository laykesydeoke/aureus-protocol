#!/bin/bash
# Health check for refund-proc
set -e
echo "Checking refund-proc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-refund-proc-count | jq .result
echo "Health check complete"
