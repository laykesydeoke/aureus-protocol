#!/bin/bash
# Deploy receipt-log module to testnet
set -e
echo "Checking receipt-log contract..."
clarinet check
echo "Deploying receipt-log..."
clarinet deploy --testnet
echo "receipt-log deployed successfully"
