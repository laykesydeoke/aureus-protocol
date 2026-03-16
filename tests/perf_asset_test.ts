import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('perf asset', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('performance and asset count coexist', () => {
    simnet.callPublicFn('yield-aggregator', 'add-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-performance-metrics', [], alice);
    expect(r.result).not.toBeNone(); }); });
