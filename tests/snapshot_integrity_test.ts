import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('snapshot integrity', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('snapshot id matches sequential order', () => {
    const r1 = simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], deployer);
    const r2 = simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], deployer);
    expect(r1.result).toBeOk(Cl.uint(0));
    expect(r2.result).toBeOk(Cl.uint(1)); }); });
