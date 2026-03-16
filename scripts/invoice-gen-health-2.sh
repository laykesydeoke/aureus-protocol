#!/bin/bash
# Health check for invoice-gen
set -e
echo "Checking invoice-gen status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-invoice-gen-count | jq .result
echo "Health check complete"
