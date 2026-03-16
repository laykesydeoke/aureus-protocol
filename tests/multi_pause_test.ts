import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('multi pause', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('multiple pause/resume cycles work', () => {
    simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], deployer);
    simnet.callPublicFn('yield-aggregator', 'emergency-resume', [], deployer);
    const r = simnet.callPublicFn('yield-aggregator', 'emergency-pause-with-log', [], deployer);
    expect(r.result).toBeOk(Cl.bool(true)); }); });
