import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("governance upgrade", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("non-owner cannot set min deposit", () => {
    const r = simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(5000)], alice);
    expect(r.result).toBeErr(Cl.uint(100));
  });
  it("owner can update min deposit multiple times", () => {
    simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(2000)], deployer);
    const r = simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(3000)], deployer);
    expect(r.result).toBeOk(Cl.bool(true));
  });
});
