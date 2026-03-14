#!/bin/bash
# Health check for pagination
set -e
echo "Checking pagination status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-pagination-count | jq .result
echo "Health check complete"
