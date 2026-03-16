import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('perf integration', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('performance and yield analytics coexist', () => {
    const perf = simnet.callReadOnlyFn('yield-aggregator', 'get-performance-metrics', [], alice);
    const analytics = simnet.callReadOnlyFn('yield-aggregator', 'get-yield-analytics', [], alice);
    expect(perf.result).not.toBeNone();
    expect(analytics.result).not.toBeNone(); }); });
