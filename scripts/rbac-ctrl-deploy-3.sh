#!/bin/bash
# Deploy rbac-ctrl module to testnet
set -e
echo "Checking rbac-ctrl contract..."
clarinet check
echo "Deploying rbac-ctrl..."
clarinet deploy --testnet
echo "rbac-ctrl deployed successfully"
