#!/bin/bash
# Deploy notif-queue module to testnet
set -e
echo "Checking notif-queue contract..."
clarinet check
echo "Deploying notif-queue..."
clarinet deploy --testnet
echo "notif-queue deployed successfully"
