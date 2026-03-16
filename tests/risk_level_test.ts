import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk level', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('owner can set risk level', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'set-risk-level', [Cl.uint(2)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
