#!/bin/bash
# Health check for metric-agg
set -e
echo "Checking metric-agg status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-metric-agg-count | jq .result
echo "Health check complete"
