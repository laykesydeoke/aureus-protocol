import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("tier analytics", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("deposit count matches tier calculation", () => {
    for (let i = 0; i < 7; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const count = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit-count", [Cl.principal(alice)], alice);
    const tier = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], alice);
    expect(Number((count.result as any).value ?? 0)).toBe(7);
    expect(Number((tier.result as any).value ?? 0)).toBe(2);
  });

  it("yield analytics snapshot is consistent after deposits", () => {
    for (let i = 0; i < 5; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(10_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const analytics = simnet.callReadOnlyFn("yield-aggregator", "get-yield-analytics", [], deployer);
    const totalDep = Number((analytics.result as any).value?.data?.["total-deposits"]?.value ?? 0);
    expect(totalDep).toBe(50_000_000);
  });
});
