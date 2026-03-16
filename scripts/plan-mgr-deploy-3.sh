#!/bin/bash
# Deploy plan-mgr module to testnet
set -e
echo "Checking plan-mgr contract..."
clarinet check
echo "Deploying plan-mgr..."
clarinet deploy --testnet
echo "plan-mgr deployed successfully"
