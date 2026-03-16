import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("full tier reward flow", () => {
  it("user progresses from bronze to gold", () => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);

    // Verify Bronze
    const tier1 = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], alice);
    expect(Number((tier1.result as any).value ?? 0)).toBe(1);

    // 5 deposits -> Silver
    for (let i = 0; i < 5; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const tier2 = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], alice);
    expect(Number((tier2.result as any).value ?? 0)).toBe(2);

    // 10 deposits -> Gold
    for (let i = 0; i < 5; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const tier3 = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], alice);
    expect(Number((tier3.result as any).value ?? 0)).toBe(3);

    const bonus = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier-bonus", [Cl.principal(alice)], alice);
    expect(Number((bonus.result as any).value ?? 0)).toBe(100);
  });
});
