import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency edge', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('resume when not paused still works', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'emergency-resume', [], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
