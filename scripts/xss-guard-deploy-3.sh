#!/bin/bash
# Deploy xss-guard module to testnet
set -e
echo "Checking xss-guard contract..."
clarinet check
echo "Deploying xss-guard..."
clarinet deploy --testnet
echo "xss-guard deployed successfully"
