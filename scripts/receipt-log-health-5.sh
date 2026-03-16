#!/bin/bash
# Health check for receipt-log
set -e
echo "Checking receipt-log status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-receipt-log-count | jq .result
echo "Health check complete"
