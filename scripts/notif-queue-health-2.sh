#!/bin/bash
# Health check for notif-queue
set -e
echo "Checking notif-queue status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-notif-queue-count | jq .result
echo "Health check complete"
