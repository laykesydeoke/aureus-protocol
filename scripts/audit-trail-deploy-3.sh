#!/bin/bash
# Deploy audit-trail module to testnet
set -e
echo "Checking audit-trail contract..."
clarinet check
echo "Deploying audit-trail..."
clarinet deploy --testnet
echo "audit-trail deployed successfully"
