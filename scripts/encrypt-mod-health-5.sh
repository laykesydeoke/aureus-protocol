#!/bin/bash
# Health check for encrypt-mod
set -e
echo "Checking encrypt-mod status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-encrypt-mod-count | jq .result
echo "Health check complete"
