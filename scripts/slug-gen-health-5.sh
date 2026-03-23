#!/bin/bash
# Health check for slug-gen
set -e
echo "Checking slug-gen status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-slug-gen-count | jq .result
echo "Health check complete"
