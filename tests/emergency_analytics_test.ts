import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency analytics', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('yield analytics readable during normal state', () => {
    const analytics = simnet.callReadOnlyFn('yield-aggregator', 'get-yield-analytics', [], alice);
    const emerg = simnet.callReadOnlyFn('yield-aggregator', 'get-emergency-state', [], alice);
    expect(analytics.result).not.toBeNone();
    expect(emerg.result).not.toBeNone(); }); });
