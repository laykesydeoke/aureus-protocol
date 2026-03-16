import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('yield strategy', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('optimization and yield analytics coexist', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-yield-analytics', [], deployer);
    expect(r.result).not.toBeNone(); }); });
