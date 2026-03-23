#!/bin/bash
# Deploy rate-limit module to testnet
set -e
echo "Checking rate-limit contract..."
clarinet check
echo "Deploying rate-limit..."
clarinet deploy --testnet
echo "rate-limit deployed successfully"
