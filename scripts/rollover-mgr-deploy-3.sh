#!/bin/bash
# Deploy rollover-mgr module to testnet
set -e
echo "Checking rollover-mgr contract..."
clarinet check
echo "Deploying rollover-mgr..."
clarinet deploy --testnet
echo "rollover-mgr deployed successfully"
