# Compliance Guide

## On-Chain Audit Trail

All portfolio snapshots are immutably stored on-chain.

## Regulatory Reporting

Use `get-portfolio-report` for real-time data and
`get-snapshot` for historical point-in-time views.

## Best Practices

- Take snapshots at regular intervals (e.g. every 100 blocks)
- Archive snapshot IDs for cross-referencing
- Use `snapshot-count` to verify no snapshots were missed
