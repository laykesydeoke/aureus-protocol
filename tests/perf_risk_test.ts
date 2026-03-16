import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('perf risk', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('performance and risk params coexist', () => {
    const perf = simnet.callReadOnlyFn('yield-aggregator', 'get-performance-metrics', [], deployer);
    const risk = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], deployer);
    expect(perf.result).not.toBeNone();
    expect(risk.result).not.toBeNone(); }); });
