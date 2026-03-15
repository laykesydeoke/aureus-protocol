#!/bin/bash
# Health check for compliance
set -e
echo "Checking compliance status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-compliance-count | jq .result
echo "Health check complete"
