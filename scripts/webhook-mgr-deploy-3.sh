#!/bin/bash
# Deploy webhook-mgr module to testnet
set -e
echo "Checking webhook-mgr contract..."
clarinet check
echo "Deploying webhook-mgr..."
clarinet deploy --testnet
echo "webhook-mgr deployed successfully"
