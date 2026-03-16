import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('max deposit limit', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('owner can set max single deposit', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'set-max-single-deposit', [Cl.uint(500000000)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
