#!/bin/bash
# Health check for stream-proc
set -e
echo "Checking stream-proc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-stream-proc-count | jq .result
echo "Health check complete"
