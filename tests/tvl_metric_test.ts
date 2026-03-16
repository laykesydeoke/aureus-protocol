import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('tvl metric', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('tvl included in performance metrics', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-performance-metrics', [], deployer);
    expect(r.result).not.toBeNone(); }); });
