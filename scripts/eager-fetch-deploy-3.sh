#!/bin/bash
# Deploy eager-fetch module to testnet
set -e
echo "Checking eager-fetch contract..."
clarinet check
echo "Deploying eager-fetch..."
clarinet deploy --testnet
echo "eager-fetch deployed successfully"
