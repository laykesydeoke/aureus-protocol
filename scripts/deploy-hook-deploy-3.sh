#!/bin/bash
# Deploy deploy-hook module to testnet
set -e
echo "Checking deploy-hook contract..."
clarinet check
echo "Deploying deploy-hook..."
clarinet deploy --testnet
echo "deploy-hook deployed successfully"
