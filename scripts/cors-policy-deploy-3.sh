#!/bin/bash
# Deploy cors-policy module to testnet
set -e
echo "Checking cors-policy contract..."
clarinet check
echo "Deploying cors-policy..."
clarinet deploy --testnet
echo "cors-policy deployed successfully"
