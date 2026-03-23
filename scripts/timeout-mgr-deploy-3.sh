#!/bin/bash
# Deploy timeout-mgr module to testnet
set -e
echo "Checking timeout-mgr contract..."
clarinet check
echo "Deploying timeout-mgr..."
clarinet deploy --testnet
echo "timeout-mgr deployed successfully"
