import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('institutional flow', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('snapshot and report coexist', () => {
    simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], deployer);
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-portfolio-report', [], deployer);
    expect(r.result).not.toBeNone(); }); });
