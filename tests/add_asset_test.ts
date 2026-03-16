import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('add asset', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('owner can add asset', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'add-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
