import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('pause governance', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('pause and governance coexist', () => {
    const gov = simnet.callReadOnlyFn('yield-aggregator', 'get-governance-params', [], deployer);
    const emerg = simnet.callReadOnlyFn('yield-aggregator', 'get-emergency-state', [], deployer);
    expect(gov.result).not.toBeNone();
    expect(emerg.result).not.toBeNone(); }); });
