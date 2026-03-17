#!/bin/bash
# Deploy token-auth module to testnet
set -e
echo "Checking token-auth contract..."
clarinet check
echo "Deploying token-auth..."
clarinet deploy --testnet
echo "token-auth deployed successfully"
