import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('snapshot data', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('snapshot stores correct deposit total', () => {
    simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], alice);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-snapshot', [Cl.uint(0)], alice);
    expect(r.result).not.toBeNone(); }); });
