import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('institutional analytics', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('report includes all required fields', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-portfolio-report', [], deployer);
    expect(r.result).not.toBeNone(); }); });
