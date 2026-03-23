#!/bin/bash
# Deploy compliance module to testnet
set -e
echo "Checking compliance contract..."
clarinet check
echo "Deploying compliance..."
clarinet deploy --testnet
echo "compliance deployed successfully"
