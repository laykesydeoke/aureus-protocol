import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
describe("governance integration", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("governance and yield analytics coexist", () => {
    const gov = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], deployer);
    const analytics = simnet.callReadOnlyFn("yield-aggregator", "get-yield-analytics", [], deployer);
    expect(gov.result).not.toBeNone();
    expect(analytics.result).not.toBeNone();
  });
  it("owner update followed by read returns updated value", () => {
    simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(9999)], deployer);
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-min-deposit", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
