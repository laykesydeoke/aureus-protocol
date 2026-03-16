import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk edge', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('max deposit can be set to very large value', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'set-max-single-deposit', [Cl.uint(99999999999)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
