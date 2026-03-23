#!/bin/bash
# Health check for acl-engine
set -e
echo "Checking acl-engine status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-acl-engine-count | jq .result
echo "Health check complete"
