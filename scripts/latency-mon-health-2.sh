#!/bin/bash
# Health check for latency-mon
set -e
echo "Checking latency-mon status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-latency-mon-count | jq .result
echo "Health check complete"
