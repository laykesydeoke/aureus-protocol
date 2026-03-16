import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('asset edge', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('remove unregistered asset still returns ok', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'remove-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
