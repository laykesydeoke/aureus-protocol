#!/bin/bash
# Deploy search-idx module to testnet
set -e
echo "Checking search-idx contract..."
clarinet check
echo "Deploying search-idx..."
clarinet deploy --testnet
echo "search-idx deployed successfully"
