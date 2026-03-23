#!/bin/bash
# Deploy gc-runner module to testnet
set -e
echo "Checking gc-runner contract..."
clarinet check
echo "Deploying gc-runner..."
clarinet deploy --testnet
echo "gc-runner deployed successfully"
