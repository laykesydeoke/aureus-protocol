# Institutional Reporting

Portfolio snapshots enable institutional-grade audit trails and reporting.

## Portfolio Snapshots

Take on-chain snapshots for historical reporting:

```clarity
(take-portfolio-snapshot)  ;; Returns snapshot ID
(get-snapshot u0)          ;; Retrieve snapshot by ID
(get-portfolio-report)     ;; Current portfolio state
```

## Report Fields

- `total-deposits`: Current total sBTC deposited
- `total-yield-earned`: Cumulative yield distributed
- `snapshot-count`: Number of snapshots taken
- `report-block`: Block height at report time
