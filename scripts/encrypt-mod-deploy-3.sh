#!/bin/bash
# Deploy encrypt-mod module to testnet
set -e
echo "Checking encrypt-mod contract..."
clarinet check
echo "Deploying encrypt-mod..."
clarinet deploy --testnet
echo "encrypt-mod deployed successfully"
