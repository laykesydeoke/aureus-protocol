import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('resume access', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('non-owner cannot resume', () => {
    simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], deployer);
    const r = simnet.callPublicFn('yield-aggregator', 'emergency-resume', [], alice);
    expect(r.result).toBeErr(Cl.uint(100)); }); });
