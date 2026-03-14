#!/bin/bash
# Deploy caching module to testnet
set -e
echo "Checking caching contract..."
clarinet check
echo "Deploying caching..."
clarinet deploy --testnet
echo "caching deployed successfully"
