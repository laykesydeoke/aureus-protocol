import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk invariant', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('risk params always non-null', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], deployer);
    expect(r.result).not.toBeNone(); }); });
