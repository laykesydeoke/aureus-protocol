import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('yield rebalance full', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('full optimization flow works', () => {
    simnet.callPublicFn('yield-aggregator', 'set-rebalance-threshold', [Cl.uint(50)], deployer);
    simnet.callPublicFn('yield-aggregator', 'set-optimization-enabled', [Cl.bool(true)], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-optimization-params', [], deployer);
    expect(r.result).not.toBeNone(); }); });
