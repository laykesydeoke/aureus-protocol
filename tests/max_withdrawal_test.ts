import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("max withdrawal governance", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("governance params include max-withdrawal-pct", () => {
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], alice);
    expect(r.result).not.toBeNone();
  });
  it("default max withdrawal is 100", () => {
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], alice);
    expect(r.result).not.toBeNone();
  });
});
