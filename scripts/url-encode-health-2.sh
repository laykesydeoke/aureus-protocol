#!/bin/bash
# Health check for url-encode
set -e
echo "Checking url-encode status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-url-encode-count | jq .result
echo "Health check complete"
