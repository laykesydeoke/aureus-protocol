import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe('snapshot', () => {
  beforeEach(() => { simnet.callPublicFn('yield-aggregator', 'initialize', [], deployer); });
  it('anyone can take snapshot', () => {
    const r = simnet.callPublicFn('yield-aggregator', 'take-portfolio-snapshot', [], alice);
    expect(r.result).toBeOk(Cl.uint(0)); }); });
