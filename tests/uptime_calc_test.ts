import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('uptime calc', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('uptime calculation works', () => {
    const r = simnet.callReadOnlyFn('yield-aggregator', 'get-protocol-uptime', [], deployer);
    expect(r.result).not.toBeNone(); }); });
