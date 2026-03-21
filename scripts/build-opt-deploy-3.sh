#!/bin/bash
# Deploy build-opt module to testnet
set -e
echo "Checking build-opt contract..."
clarinet check
echo "Deploying build-opt..."
clarinet deploy --testnet
echo "build-opt deployed successfully"
