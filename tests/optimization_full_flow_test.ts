import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('optimization full flow', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('multiple param updates work', () => {
    simnet.callPublicFn('yield-aggregator', 'set-rebalance-threshold', [Cl.uint(40)], deployer);
    simnet.callPublicFn('yield-aggregator', 'set-rebalance-threshold', [Cl.uint(80)], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-optimization-params', [], deployer);
    expect(r.result).not.toBeNone(); }); });
