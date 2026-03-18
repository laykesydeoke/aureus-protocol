#!/bin/bash
# Deploy uptime-chk module to testnet
set -e
echo "Checking uptime-chk contract..."
clarinet check
echo "Deploying uptime-chk..."
clarinet deploy --testnet
echo "uptime-chk deployed successfully"
