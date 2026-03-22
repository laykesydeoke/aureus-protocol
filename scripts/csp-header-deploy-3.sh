#!/bin/bash
# Deploy csp-header module to testnet
set -e
echo "Checking csp-header contract..."
clarinet check
echo "Deploying csp-header..."
clarinet deploy --testnet
echo "csp-header deployed successfully"
