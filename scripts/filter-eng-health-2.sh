#!/bin/bash
# Health check for filter-eng
set -e
echo "Checking filter-eng status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-filter-eng-count | jq .result
echo "Health check complete"
