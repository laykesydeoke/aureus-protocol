#!/bin/bash
# Deploy payment-gate module to testnet
set -e
echo "Checking payment-gate contract..."
clarinet check
echo "Deploying payment-gate..."
clarinet deploy --testnet
echo "payment-gate deployed successfully"
