# Emergency Pause Runbook

## When to Pause

1. Smart contract exploit detected
2. Oracle manipulation suspected
3. Abnormal deposit/withdrawal patterns
4. Protocol partner security incident

## Procedure

1. Call `emergency-pause-with-log` from owner wallet
2. Investigate incident
3. Deploy fix if needed
4. Call `emergency-resume` to restore operations

## Communication

Notify community via official channels before and after any emergency pause.
