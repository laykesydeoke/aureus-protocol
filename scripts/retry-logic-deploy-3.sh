#!/bin/bash
# Deploy retry-logic module to testnet
set -e
echo "Checking retry-logic contract..."
clarinet check
echo "Deploying retry-logic..."
clarinet deploy --testnet
echo "retry-logic deployed successfully"
