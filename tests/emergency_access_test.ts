import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency access', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('non-owner cannot emergency pause', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], alice);
    expect(r.result).toBeErr(Cl.uint(100)); }); });
