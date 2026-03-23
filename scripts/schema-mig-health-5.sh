#!/bin/bash
# Health check for schema-mig
set -e
echo "Checking schema-mig status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-schema-mig-count | jq .result
echo "Health check complete"
