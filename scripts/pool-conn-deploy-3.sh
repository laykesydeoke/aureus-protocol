#!/bin/bash
# Deploy pool-conn module to testnet
set -e
echo "Checking pool-conn contract..."
clarinet check
echo "Deploying pool-conn..."
clarinet deploy --testnet
echo "pool-conn deployed successfully"
