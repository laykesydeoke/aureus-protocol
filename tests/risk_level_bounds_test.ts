import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk level bounds', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('risk level above 3 fails', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'set-risk-level', [Cl.uint(4)], deployer);
    expect(r.result).toBeErr(Cl.uint(108)); }); });
