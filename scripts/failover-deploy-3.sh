#!/bin/bash
# Deploy failover module to testnet
set -e
echo "Checking failover contract..."
clarinet check
echo "Deploying failover..."
clarinet deploy --testnet
echo "failover deployed successfully"
