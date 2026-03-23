#!/bin/bash
# Deploy l10n-mgr module to testnet
set -e
echo "Checking l10n-mgr contract..."
clarinet check
echo "Deploying l10n-mgr..."
clarinet deploy --testnet
echo "l10n-mgr deployed successfully"
