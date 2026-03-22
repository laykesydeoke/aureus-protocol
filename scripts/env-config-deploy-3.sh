#!/bin/bash
# Deploy env-config module to testnet
set -e
echo "Checking env-config contract..."
clarinet check
echo "Deploying env-config..."
clarinet deploy --testnet
echo "env-config deployed successfully"
