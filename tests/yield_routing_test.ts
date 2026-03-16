import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('yield routing', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('optimization coexists with governance params', () => {
    const opt = simnet.callReadOnlyFn('yield-aggregator', 'get-optimization-params', [], deployer);
    const gov = simnet.callReadOnlyFn('yield-aggregator', 'get-governance-params', [], deployer);
    expect(opt.result).not.toBeNone();
    expect(gov.result).not.toBeNone(); }); });
