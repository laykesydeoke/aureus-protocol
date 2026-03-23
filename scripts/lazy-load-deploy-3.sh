#!/bin/bash
# Deploy lazy-load module to testnet
set -e
echo "Checking lazy-load contract..."
clarinet check
echo "Deploying lazy-load..."
clarinet deploy --testnet
echo "lazy-load deployed successfully"
