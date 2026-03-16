import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('max deposit access', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('non-owner cannot update deposit limit', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'set-max-single-deposit', [Cl.uint(100)], alice);
    expect(r.result).toBeErr(Cl.uint(100)); }); });
