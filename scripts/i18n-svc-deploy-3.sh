#!/bin/bash
# Deploy i18n-svc module to testnet
set -e
echo "Checking i18n-svc contract..."
clarinet check
echo "Deploying i18n-svc..."
clarinet deploy --testnet
echo "i18n-svc deployed successfully"
