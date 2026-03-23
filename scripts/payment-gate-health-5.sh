#!/bin/bash
# Health check for payment-gate
set -e
echo "Checking payment-gate status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-payment-gate-count | jq .result
echo "Health check complete"
