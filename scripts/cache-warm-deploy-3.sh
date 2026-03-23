#!/bin/bash
# Deploy cache-warm module to testnet
set -e
echo "Checking cache-warm contract..."
clarinet check
echo "Deploying cache-warm..."
clarinet deploy --testnet
echo "cache-warm deployed successfully"
