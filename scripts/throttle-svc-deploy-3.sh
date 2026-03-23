#!/bin/bash
# Deploy throttle-svc module to testnet
set -e
echo "Checking throttle-svc contract..."
clarinet check
echo "Deploying throttle-svc..."
clarinet deploy --testnet
echo "throttle-svc deployed successfully"
