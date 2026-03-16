#!/bin/bash
# Deploy refund-proc module to testnet
set -e
echo "Checking refund-proc contract..."
clarinet check
echo "Deploying refund-proc..."
clarinet deploy --testnet
echo "refund-proc deployed successfully"
