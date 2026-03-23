#!/bin/bash
# Deploy number-fmt module to testnet
set -e
echo "Checking number-fmt contract..."
clarinet check
echo "Deploying number-fmt..."
clarinet deploy --testnet
echo "number-fmt deployed successfully"
