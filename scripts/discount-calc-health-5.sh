#!/bin/bash
# Health check for discount-calc
set -e
echo "Checking discount-calc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-discount-calc-count | jq .result
echo "Health check complete"
