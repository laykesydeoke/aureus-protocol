# Emergency Controls

Aureus Protocol includes enhanced emergency controls with full audit logging.

## Emergency Pause

```clarity
;; Pause with audit log
(emergency-pause-with-log)

;; Resume operations
(emergency-resume)

;; Check state
(get-emergency-state)
```

## State Fields

- `is-paused`: Current pause status
- `last-pause-block`: Block of last pause event
- `pause-count`: Total number of pauses
- `emergency-contact`: Designated emergency responder
