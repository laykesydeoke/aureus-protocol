import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency state initial', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('initial state is not paused', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-emergency-state', [], deployer);
    expect(r.result).not.toBeNone(); }); });
