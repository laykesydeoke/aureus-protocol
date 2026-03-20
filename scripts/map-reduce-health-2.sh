#!/bin/bash
# Health check for map-reduce
set -e
echo "Checking map-reduce status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-map-reduce-count | jq .result
echo "Health check complete"
