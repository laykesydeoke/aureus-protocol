#!/bin/bash
# Deploy kms-proxy module to testnet
set -e
echo "Checking kms-proxy contract..."
clarinet check
echo "Deploying kms-proxy..."
clarinet deploy --testnet
echo "kms-proxy deployed successfully"
