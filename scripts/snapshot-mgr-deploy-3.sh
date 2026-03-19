#!/bin/bash
# Deploy snapshot-mgr module to testnet
set -e
echo "Checking snapshot-mgr contract..."
clarinet check
echo "Deploying snapshot-mgr..."
clarinet deploy --testnet
echo "snapshot-mgr deployed successfully"
