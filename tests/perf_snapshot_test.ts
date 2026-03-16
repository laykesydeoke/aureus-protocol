import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('perf snapshot', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('performance metrics and snapshots coexist', () => {
    simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], deployer);
    const perf = simnet.callReadOnlyFn('yield-aggregator', 'get-performance-metrics', [], alice);
    expect(perf.result).not.toBeNone(); }); });
