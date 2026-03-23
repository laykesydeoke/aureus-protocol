#!/bin/bash
# Deploy api-gw module to testnet
set -e
echo "Checking api-gw contract..."
clarinet check
echo "Deploying api-gw..."
clarinet deploy --testnet
echo "api-gw deployed successfully"
