#!/bin/bash
# Health check for seed-data
set -e
echo "Checking seed-data status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-seed-data-count | jq .result
echo "Health check complete"
