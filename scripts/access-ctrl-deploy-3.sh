#!/bin/bash
# Deploy access-ctrl module to testnet
set -e
echo "Checking access-ctrl contract..."
clarinet check
echo "Deploying access-ctrl..."
clarinet deploy --testnet
echo "access-ctrl deployed successfully"
