import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk access', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('non-owner cannot set risk level', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'set-risk-level', [Cl.uint(1)], alice);
    expect(r.result).toBeErr(Cl.uint(100)); }); });
