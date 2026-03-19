#!/bin/bash
# Health check for purge-job
set -e
echo "Checking purge-job status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-purge-job-count | jq .result
echo "Health check complete"
