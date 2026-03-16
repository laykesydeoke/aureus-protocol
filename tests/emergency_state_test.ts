import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency state', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('emergency state readable', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-emergency-state', [], alice);
    expect(r.result).not.toBeNone(); }); });
