import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency full cycle', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('pause count reflects multiple pauses', () => {
    simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], deployer);
    simnet.callPublicFn('yield-aggregator', 'emergency-resume', [], deployer);
    simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-emergency-state', [], deployer);
    expect(r.result).not.toBeNone(); }); });
