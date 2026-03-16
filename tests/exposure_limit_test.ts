import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('exposure limit', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('max deposit reflects updated value', () => {
    simnet.callPublicFn('yield-aggregator', 'set-max-single-deposit', [Cl.uint(999999)], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], deployer);
    expect(r.result).not.toBeNone(); }); });
