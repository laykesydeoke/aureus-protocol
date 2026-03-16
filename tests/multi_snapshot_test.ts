import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('multi snapshot', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('multiple snapshots can be taken', () => {
    simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], deployer);
    const r = simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], deployer);
    expect(r.result).toBeOk(Cl.uint(1)); }); });
