#!/bin/bash
# Deploy load-bal module to testnet
set -e
echo "Checking load-bal contract..."
clarinet check
echo "Deploying load-bal..."
clarinet deploy --testnet
echo "load-bal deployed successfully"
