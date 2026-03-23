#!/bin/bash
# Deploy health-chk module to testnet
set -e
echo "Checking health-chk contract..."
clarinet check
echo "Deploying health-chk..."
clarinet deploy --testnet
echo "health-chk deployed successfully"
