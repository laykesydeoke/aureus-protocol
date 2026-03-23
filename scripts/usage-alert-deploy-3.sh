#!/bin/bash
# Deploy usage-alert module to testnet
set -e
echo "Checking usage-alert contract..."
clarinet check
echo "Deploying usage-alert..."
clarinet deploy --testnet
echo "usage-alert deployed successfully"
