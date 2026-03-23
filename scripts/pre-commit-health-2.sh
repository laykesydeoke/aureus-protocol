#!/bin/bash
# Health check for pre-commit
set -e
echo "Checking pre-commit status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-pre-commit-count | jq .result
echo "Health check complete"
