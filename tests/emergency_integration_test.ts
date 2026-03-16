import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('emergency integration', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('emergency state and risk params coexist', () => {
    const emerg = simnet.callReadOnlyFn('yield-aggregator', 'get-emergency-state', [], alice);
    const risk = simnet.callReadOnlyFn('yield-aggregator', 'get-risk-params', [], alice);
    expect(emerg.result).not.toBeNone();
    expect(risk.result).not.toBeNone(); }); });
