#!/bin/bash
# Deploy alert-rule module to testnet
set -e
echo "Checking alert-rule contract..."
clarinet check
echo "Deploying alert-rule..."
clarinet deploy --testnet
echo "alert-rule deployed successfully"
