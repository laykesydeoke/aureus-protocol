# Portfolio Snapshots

## Overview

Snapshots capture point-in-time portfolio state for compliance and reporting.

## Usage

```clarity
;; Take snapshot (callable by anyone)
(contract-call? .yield-aggregator take-portfolio-snapshot)

;; Read snapshot
(contract-call? .yield-aggregator get-snapshot u0)
```

## Snapshot Data

Each snapshot records:
- Total deposits at snapshot time
- Total yield earned at snapshot time
- Block height of snapshot
