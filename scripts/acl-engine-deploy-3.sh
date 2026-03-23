#!/bin/bash
# Deploy acl-engine module to testnet
set -e
echo "Checking acl-engine contract..."
clarinet check
echo "Deploying acl-engine..."
clarinet deploy --testnet
echo "acl-engine deployed successfully"
