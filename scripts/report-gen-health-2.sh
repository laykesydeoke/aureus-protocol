#!/bin/bash
# Health check for report-gen
set -e
echo "Checking report-gen status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-report-gen-count | jq .result
echo "Health check complete"
