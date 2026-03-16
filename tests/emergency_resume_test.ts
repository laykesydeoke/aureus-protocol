import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency resume', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('owner can resume after pause', () => {
    simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], deployer);
    const r = simnet.callPublicFn('yield-aggregator', 'emergency-resume', [], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
