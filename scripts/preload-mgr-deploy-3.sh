#!/bin/bash
# Deploy preload-mgr module to testnet
set -e
echo "Checking preload-mgr contract..."
clarinet check
echo "Deploying preload-mgr..."
clarinet deploy --testnet
echo "preload-mgr deployed successfully"
