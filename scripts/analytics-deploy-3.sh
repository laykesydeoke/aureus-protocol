#!/bin/bash
# Deploy analytics module to testnet
set -e
echo "Checking analytics contract..."
clarinet check
echo "Deploying analytics..."
clarinet deploy --testnet
echo "analytics deployed successfully"
