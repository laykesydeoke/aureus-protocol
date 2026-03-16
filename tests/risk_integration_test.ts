import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('risk integration', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('risk analytics readable alongside yield analytics', () => {
    const risk = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], alice);
    const analytics = simnet.callReadOnlyFn('yield-aggregator', 'get-yield-analytics', [], alice);
    expect(risk.result).not.toBeNone();
    expect(analytics.result).not.toBeNone(); }); });
