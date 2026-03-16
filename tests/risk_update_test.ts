import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk update', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('risk level can be updated multiple times', () => {
    simnet.callPublicFn('yield-aggregator', 'set-risk-level', [Cl.uint(1)], deployer);
    const r = simnet.callPublicFn('yield-aggregator', 'set-risk-level', [Cl.uint(2)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
