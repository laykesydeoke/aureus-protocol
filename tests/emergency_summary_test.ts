import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency summary', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('complete emergency lifecycle', () => {
    simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], deployer);
    const paused = simnet.callReadOnlyFn('yield-aggregator', 'is-emergency-paused', [], alice);
    simnet.callPublicFn('yield-aggregator', 'emergency-resume', [], deployer);
    const resumed = simnet.callReadOnlyFn('yield-aggregator', 'is-emergency-paused', [], alice);
    expect(paused.result).toBeTrue();
    expect(resumed.result).toBeFalse(); }); });
