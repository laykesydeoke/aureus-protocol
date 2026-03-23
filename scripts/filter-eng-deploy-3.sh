#!/bin/bash
# Deploy filter-eng module to testnet
set -e
echo "Checking filter-eng contract..."
clarinet check
echo "Deploying filter-eng..."
clarinet deploy --testnet
echo "filter-eng deployed successfully"
