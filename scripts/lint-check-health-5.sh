#!/bin/bash
# Health check for lint-check
set -e
echo "Checking lint-check status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-lint-check-count | jq .result
echo "Health check complete"
