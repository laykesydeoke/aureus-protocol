import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('perf edge', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('metrics readable with no deposits', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-performance-metrics', [], alice);
    expect(r.result).not.toBeNone(); }); });
