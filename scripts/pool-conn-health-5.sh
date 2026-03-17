#!/bin/bash
# Health check for pool-conn
set -e
echo "Checking pool-conn status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-pool-conn-count | jq .result
echo "Health check complete"
