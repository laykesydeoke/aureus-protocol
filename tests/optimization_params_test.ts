import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('optimization params', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('optimization params readable', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-optimization-params', [], alice);
    expect(r.result).not.toBeNone(); }); });
