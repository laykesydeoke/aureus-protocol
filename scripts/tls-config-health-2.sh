#!/bin/bash
# Health check for tls-config
set -e
echo "Checking tls-config status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-tls-config-count | jq .result
echo "Health check complete"
