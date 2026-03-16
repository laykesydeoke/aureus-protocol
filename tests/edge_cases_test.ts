import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("edge case analytics", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("analytics snapshot with zero deposits", () => {
    const analytics = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-yield-analytics",
      [],
      deployer
    );
    const deposits = Number(
      (analytics.result as any).value?.data?.["total-deposits"]?.value ?? 0
    );
    expect(deposits).toBe(0);
  });

  it("yield ratio is none with no total deposits", () => {
    const ratio = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-yield-ratio",
      [Cl.principal(alice)],
      alice
    );
    expect(ratio.result).toBeNone();
  });

  it("distribute-yield with zero total deposits returns error", () => {
    const result = simnet.callPublicFn(
      "yield-aggregator",
      "distribute-yield",
      [Cl.uint(1000)],
      deployer
    );
    expect(result.result).toBeErr(Cl.uint(104));
  });
});
