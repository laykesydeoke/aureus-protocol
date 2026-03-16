import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('optimization auth', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('non-owner cannot disable optimization', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'set-optimization-enabled', [Cl.bool(false)], alice);
    expect(r.result).toBeErr(Cl.uint(100)); }); });
