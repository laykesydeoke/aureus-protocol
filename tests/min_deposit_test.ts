import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;

describe("minimum deposit governance", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("get-min-deposit returns default value", () => {
    const result = simnet.callReadOnlyFn("yield-aggregator", "get-min-deposit", [], deployer);
    expect(Number((result.result as any).value ?? 0)).toBe(1000);
  });

  it("owner can update min-deposit", () => {
    simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(5000)], deployer);
    const result = simnet.callReadOnlyFn("yield-aggregator", "get-min-deposit", [], deployer);
    expect(Number((result.result as any).value ?? 0)).toBe(5000);
  });

  it("min-deposit update reflected in governance-params", () => {
    simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(3000)], deployer);
    const params = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], deployer);
    const min = Number((params.result as any).value?.data?.["min-deposit"]?.value ?? 0);
    expect(min).toBe(3000);
  });
});
