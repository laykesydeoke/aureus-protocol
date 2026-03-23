#!/bin/bash
# Deploy data-valid module to testnet
set -e
echo "Checking data-valid contract..."
clarinet check
echo "Deploying data-valid..."
clarinet deploy --testnet
echo "data-valid deployed successfully"
