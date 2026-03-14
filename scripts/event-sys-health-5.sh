#!/bin/bash
# Health check for event-sys
set -e
echo "Checking event-sys status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-event-sys-count | jq .result
echo "Health check complete"
