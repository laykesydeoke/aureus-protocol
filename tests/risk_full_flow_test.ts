import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk full flow', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('complete risk config flow', () => {
    simnet.callPublicFn('yield-aggregator', 'set-risk-level', [Cl.uint(2)], deployer);
    simnet.callPublicFn('yield-aggregator', 'set-max-single-deposit', [Cl.uint(100000000)], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], deployer);
    expect(r.result).not.toBeNone(); }); });
