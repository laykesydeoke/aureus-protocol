import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("reward edge cases", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("tier stays at max after exceeding 10 deposits", () => {
    for (let i = 0; i < 15; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(1_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const tier = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], alice);
    expect(Number((tier.result as any).value ?? 0)).toBe(3);
  });

  it("bonus stays at max for tier 3", () => {
    for (let i = 0; i < 20; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(1_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const bonus = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier-bonus", [Cl.principal(alice)], alice);
    expect(Number((bonus.result as any).value ?? 0)).toBe(100);
  });

  it("deposit count is accurate for 12 deposits", () => {
    for (let i = 0; i < 12; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(1_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const count = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit-count", [Cl.principal(alice)], alice);
    expect(Number((count.result as any).value ?? 0)).toBe(12);
  });
});
