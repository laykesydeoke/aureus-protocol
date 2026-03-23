#!/bin/bash
# Health check for restore-proc
set -e
echo "Checking restore-proc status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-restore-proc-count | jq .result
echo "Health check complete"
