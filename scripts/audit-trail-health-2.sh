#!/bin/bash
# Health check for audit-trail
set -e
echo "Checking audit-trail status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-audit-trail-count | jq .result
echo "Health check complete"
