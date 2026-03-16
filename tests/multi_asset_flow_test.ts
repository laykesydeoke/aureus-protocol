import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('multi asset flow', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('add multiple assets works', () => {
    simnet.callPublicFn('yield-aggregator', 'add-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    const r = simnet.callPublicFn('yield-aggregator', 'add-supported-asset', [Cl.standardPrincipal(deployer)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
