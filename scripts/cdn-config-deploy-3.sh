#!/bin/bash
# Deploy cdn-config module to testnet
set -e
echo "Checking cdn-config contract..."
clarinet check
echo "Deploying cdn-config..."
clarinet deploy --testnet
echo "cdn-config deployed successfully"
