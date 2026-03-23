#!/bin/bash
# Deploy secret-mgr module to testnet
set -e
echo "Checking secret-mgr contract..."
clarinet check
echo "Deploying secret-mgr..."
clarinet deploy --testnet
echo "secret-mgr deployed successfully"
