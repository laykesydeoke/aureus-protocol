import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('multi asset summary', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('full multi-asset lifecycle', () => {
    simnet.callPublicFn('yield-aggregator', 'add-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    const check = simnet.callReadOnlyFn('yield-aggregator', 'is-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    const count = simnet.callReadOnlyFn('yield-aggregator', 'get-asset-count', [], deployer);
    expect(check.result).toBeTrue();
    expect(count.result).not.toBeNone(); }); });
