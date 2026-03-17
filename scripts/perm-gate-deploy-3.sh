#!/bin/bash
# Deploy perm-gate module to testnet
set -e
echo "Checking perm-gate contract..."
clarinet check
echo "Deploying perm-gate..."
clarinet deploy --testnet
echo "perm-gate deployed successfully"
