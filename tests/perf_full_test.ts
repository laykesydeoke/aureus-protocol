import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('perf full', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('all performance data accessible', () => {
    const perf = simnet.callReadOnlyFn('yield-aggregator', 'get-performance-metrics', [], alice);
    const uptime = simnet.callReadOnlyFn('yield-aggregator', 'get-protocol-uptime', [], alice);
    expect(perf.result).not.toBeNone();
    expect(uptime.result).not.toBeNone(); }); });
