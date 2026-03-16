import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("yield analytics", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("get-yield-analytics returns all fields", () => {
    const result = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-yield-analytics",
      [],
      deployer
    );
    const data = (result.result as any).value?.data;
    expect(data?.["total-deposits"]).toBeDefined();
    expect(data?.["total-yield-earned"]).toBeDefined();
    expect(data?.["is-paused"]).toBeDefined();
    expect(data?.["is-initialized"]).toBeDefined();
  });

  it("is-initialized is true after initialize", () => {
    const result = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-yield-analytics",
      [],
      deployer
    );
    const initialized = (result.result as any).value?.data?.["is-initialized"]?.value;
    expect(initialized).toBe(true);
  });

  it("total-deposits starts at zero", () => {
    const result = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-yield-analytics",
      [],
      deployer
    );
    const deposits = Number(
      (result.result as any).value?.data?.["total-deposits"]?.value ?? 0
    );
    expect(deposits).toBe(0);
  });
});
