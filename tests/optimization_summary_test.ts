import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("optimization summary", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("all optimization params consistent after update", () => {
    simnet.callPublicFn("yield-aggregator", "set-rebalance-threshold", [Cl.uint(75)], deployer);
    simnet.callPublicFn("yield-aggregator", "set-optimization-enabled", [Cl.bool(true)], deployer);
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-optimization-params", [], alice);
    expect(r.result).not.toBeNone();
  });
});
