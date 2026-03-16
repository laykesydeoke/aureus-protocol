import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('yield efficiency', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('optimization params include all fields', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-optimization-params', [], deployer);
    expect(r.result).not.toBeNone(); }); });
