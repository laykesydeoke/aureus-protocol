#!/bin/bash
# Health check for backup-svc
set -e
echo "Checking backup-svc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-backup-svc-count | jq .result
echo "Health check complete"
