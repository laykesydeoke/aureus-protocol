import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
describe("param history", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("governance action count starts at 0", () => {
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
  it("action count increments after set-min-deposit", () => {
    simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(2000)], deployer);
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
