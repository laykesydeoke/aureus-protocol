# API Reference

Complete reference for all Aureus Protocol smart contract functions.

## yield-aggregator

### Public Functions

| Function | Arguments | Returns |
|----------|-----------|---------|
| `initialize` | none | `(response bool uint)` |
| `deposit-sbtc` | `amount uint, token <sip-010-trait>` | `(response bool uint)` |
| `withdraw-sbtc` | `amount uint` | `(response bool uint)` |
| `distribute-yield` | `total-yield uint` | `(response bool uint)` |
| `set-emergency-pause` | `pause bool` | `(response bool uint)` |

### Read-Only Functions

| Function | Arguments | Returns |
|----------|-----------|---------|
| `get-user-deposit` | `user principal` | `uint` |
| `get-user-yield` | `user principal` | `uint` |
| `get-total-deposits` | none | `uint` |
| `get-total-yield-earned` | none | `uint` |
| `is-initialized` | none | `bool` |
| `is-emergency-paused` | none | `bool` |
| `get-user-deposit-history` | `user principal` | `(list 100 uint)` |
| `get-yield-analytics` | none | tuple |
| `get-user-yield-ratio` | `user principal` | `(optional uint)` |

## protocol-adapter

### Public Functions

| Function | Arguments | Returns |
|----------|-----------|---------|
| `initialize-adapter` | none | `(response bool uint)` |
| `deposit-to-optimal` | `amount uint, token principal` | `(response bool uint)` |
| `withdraw-from-protocol` | `protocol-id uint, amount uint, token principal` | `(response bool uint)` |
| `rebalance-protocols` | `token principal` | `(response bool uint)` |
| `update-protocol-rate` | `protocol-id uint, new-rate uint` | `(response bool uint)` |
| `set-adapter-pause` | `pause bool` | `(response bool uint)` |

### Read-Only Functions

| Function | Arguments | Returns |
|----------|-----------|---------|
| `get-optimal-protocol` | none | `uint` |
| `get-protocol-info` | `protocol-id uint` | `(optional tuple)` |
| `get-protocol-balance` | `protocol-id uint, token principal` | `uint` |
| `get-user-allocation` | `user principal, protocol-id uint` | `uint` |
| `get-active-protocol` | none | `uint` |
| `is-adapter-paused` | none | `bool` |
| `get-all-protocol-rates` | none | tuple |
| `get-adapter-analytics` | none | tuple |

## Error Codes

| Code | Meaning |
|------|---------|
| `u100` | Owner only |
| `u101` | Already initialized |
| `u102` | Not initialized |
| `u103` | Insufficient balance |
| `u104` | Invalid amount |
| `u105` | Contract paused |
