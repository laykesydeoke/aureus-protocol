import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('perf governance', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('performance and governance params coexist', () => {
    const perf = simnet.callReadOnlyFn('yield-aggregator', 'get-performance-metrics', [], deployer);
    const gov = simnet.callReadOnlyFn('yield-aggregator', 'get-governance-params', [], deployer);
    expect(perf.result).not.toBeNone();
    expect(gov.result).not.toBeNone(); }); });
