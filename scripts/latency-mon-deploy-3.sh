#!/bin/bash
# Deploy latency-mon module to testnet
set -e
echo "Checking latency-mon contract..."
clarinet check
echo "Deploying latency-mon..."
clarinet deploy --testnet
echo "latency-mon deployed successfully"
