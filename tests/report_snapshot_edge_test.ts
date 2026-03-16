import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('report snapshot edge', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('nonexistent snapshot returns none', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-snapshot', [Cl.uint(999)], alice);
    expect(r.result).toBeNone(); }); });
