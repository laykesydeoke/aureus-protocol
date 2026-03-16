import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency pause log', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('owner can emergency pause with log', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
