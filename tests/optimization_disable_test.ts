import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('optimization disable', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('can re-enable optimization', () => {
    simnet.callPublicFn('yield-aggregator', 'set-optimization-enabled', [Cl.bool(false)], deployer);
    const r = simnet.callPublicFn('yield-aggregator', 'set-optimization-enabled', [Cl.bool(true)], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
