#!/bin/bash
# Health check for dashboard-api
set -e
echo "Checking dashboard-api status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-dashboard-api-count | jq .result
echo "Health check complete"
