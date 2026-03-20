#!/bin/bash
# Deploy pipe-chain module to testnet
set -e
echo "Checking pipe-chain contract..."
clarinet check
echo "Deploying pipe-chain..."
clarinet deploy --testnet
echo "pipe-chain deployed successfully"
