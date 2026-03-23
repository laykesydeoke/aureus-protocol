#!/bin/bash
# Deploy span-collect module to testnet
set -e
echo "Checking span-collect contract..."
clarinet check
echo "Deploying span-collect..."
clarinet deploy --testnet
echo "span-collect deployed successfully"
