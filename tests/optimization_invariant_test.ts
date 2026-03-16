import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('optimization invariant', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('optimization defaults are set', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-optimization-params', [], deployer);
    expect(r.result).not.toBeNone(); }); });
