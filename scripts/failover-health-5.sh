#!/bin/bash
# Health check for failover
set -e
echo "Checking failover status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-failover-count | jq .result
echo "Health check complete"
