#!/bin/bash
# Deploy session-mgr module to testnet
set -e
echo "Checking session-mgr contract..."
clarinet check
echo "Deploying session-mgr..."
clarinet deploy --testnet
echo "session-mgr deployed successfully"
