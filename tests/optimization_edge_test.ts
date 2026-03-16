import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('optimization edge', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('threshold can be set to 0', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'set-rebalance-threshold', [Cl.uint(0)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
