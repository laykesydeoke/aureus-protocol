import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('asset support', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('asset not supported by default', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'is-supported-asset', [Cl.standardPrincipal(alice)], deployer);
    expect(r.result).toBeFalse(); }); });
