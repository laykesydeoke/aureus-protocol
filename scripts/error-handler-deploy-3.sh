#!/bin/bash
# Deploy error-handler module to testnet
set -e
echo "Checking error-handler contract..."
clarinet check
echo "Deploying error-handler..."
clarinet deploy --testnet
echo "error-handler deployed successfully"
