import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk params', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('risk params readable', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], alice);
    expect(r.result).not.toBeNone(); }); });
