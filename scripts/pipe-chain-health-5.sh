#!/bin/bash
# Health check for pipe-chain
set -e
echo "Checking pipe-chain status..."
curl -s localhost:3999/v2/contracts/call-read/${CNAME}/get-pipe-chain-count | jq .result
echo "Health check complete"
