import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('asset remove check', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('is-supported-asset false after removal', () => {
    simnet.callPublicFn('yield-aggregator', 'add-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    simnet.callPublicFn('yield-aggregator', 'remove-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'is-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    expect(r.result).toBeFalse(); }); });
