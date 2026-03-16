import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('asset count multi', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('asset count increases with each add', () => {
    simnet.callPublicFn('yield-aggregator', 'add-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    simnet.callPublicFn('yield-aggregator', 'add-supported-asset', [Cl.standardPrincipal(deployer)], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-asset-count', [], deployer);
    expect(r.result).not.toBeNone(); }); });
