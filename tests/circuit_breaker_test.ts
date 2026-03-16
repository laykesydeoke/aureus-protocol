import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('circuit breaker', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('emergency pause and risk coexist', () => {
    const risk = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], deployer);
    const gov = simnet.callReadOnlyFn('yield-aggregator', 'get-governance-params', [], deployer);
    expect(risk.result).not.toBeNone();
    expect(gov.result).not.toBeNone(); }); });
