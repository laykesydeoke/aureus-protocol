import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('institutional summary', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('full reporting flow works end to end', () => {
    simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], deployer);
    const snap = simnet.callReadOnlyFn('yield-aggregator', 'get-snapshot', [Cl.uint(0)], alice);
    const report = simnet.callReadOnlyFn('yield-aggregator', 'get-portfolio-report', [], alice);
    expect(snap.result).not.toBeNone();
    expect(report.result).not.toBeNone(); }); });
