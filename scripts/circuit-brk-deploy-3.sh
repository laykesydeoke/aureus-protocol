#!/bin/bash
# Deploy circuit-brk module to testnet
set -e
echo "Checking circuit-brk contract..."
clarinet check
echo "Deploying circuit-brk..."
clarinet deploy --testnet
echo "circuit-brk deployed successfully"
