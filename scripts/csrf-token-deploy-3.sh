#!/bin/bash
# Deploy csrf-token module to testnet
set -e
echo "Checking csrf-token contract..."
clarinet check
echo "Deploying csrf-token..."
clarinet deploy --testnet
echo "csrf-token deployed successfully"
