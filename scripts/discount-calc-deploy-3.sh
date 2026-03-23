#!/bin/bash
# Deploy discount-calc module to testnet
set -e
echo "Checking discount-calc contract..."
clarinet check
echo "Deploying discount-calc..."
clarinet deploy --testnet
echo "discount-calc deployed successfully"
