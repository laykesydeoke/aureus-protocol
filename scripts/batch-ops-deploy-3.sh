#!/bin/bash
# Deploy batch-ops module to testnet
set -e
echo "Checking batch-ops contract..."
clarinet check
echo "Deploying batch-ops..."
clarinet deploy --testnet
echo "batch-ops deployed successfully"
