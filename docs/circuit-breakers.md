# Circuit Breakers

## Emergency Controls

Aureus Protocol has layered circuit breakers:

1. **Emergency Pause**: Stops all deposits/withdrawals
2. **Risk Level**: Adjusts permissible operations
3. **Max Single Deposit**: Limits large position concentration

## Activation

```clarity
;; Owner activates emergency pause
(set-emergency-pause true)

;; Set maximum risk protection
(set-risk-level u3)

;; Reduce max deposit limit
(set-max-single-deposit u100000)
```
