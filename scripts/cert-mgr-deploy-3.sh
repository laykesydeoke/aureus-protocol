#!/bin/bash
# Deploy cert-mgr module to testnet
set -e
echo "Checking cert-mgr contract..."
clarinet check
echo "Deploying cert-mgr..."
clarinet deploy --testnet
echo "cert-mgr deployed successfully"
