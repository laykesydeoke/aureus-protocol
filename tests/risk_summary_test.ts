import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk summary', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('risk and optimization coexist', () => {
    const risk = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], deployer);
    const opt = simnet.callReadOnlyFn('yield-aggregator', 'get-optimization-params', [], deployer);
    expect(risk.result).not.toBeNone();
    expect(opt.result).not.toBeNone(); }); });
