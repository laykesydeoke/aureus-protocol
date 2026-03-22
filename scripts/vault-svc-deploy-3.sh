#!/bin/bash
# Deploy vault-svc module to testnet
set -e
echo "Checking vault-svc contract..."
clarinet check
echo "Deploying vault-svc..."
clarinet deploy --testnet
echo "vault-svc deployed successfully"
