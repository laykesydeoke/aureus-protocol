import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("governance params", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("get-governance-params returns all fields", () => {
    const params = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], deployer);
    const data = (params.result as any).value?.data;
    expect(data?.["min-deposit"]).toBeDefined();
    expect(data?.["max-withdrawal-pct"]).toBeDefined();
    expect(data?.["governance-actions"]).toBeDefined();
  });

  it("governance-actions counter increments after set-min-deposit", () => {
    const before = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], deployer);
    const beforeCount = Number((before.result as any).value?.data?.["governance-actions"]?.value ?? 0);
    simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(2000)], deployer);
    const after = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], deployer);
    const afterCount = Number((after.result as any).value?.data?.["governance-actions"]?.value ?? 0);
    expect(afterCount).toBeGreaterThan(beforeCount);
  });

  it("non-owner cannot set-min-deposit", () => {
    const result = simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(500)], alice);
    expect(result.result).toBeErr(Cl.uint(100));
  });
});
