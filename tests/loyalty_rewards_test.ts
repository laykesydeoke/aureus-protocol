import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_2")!;

describe("loyalty reward mechanics", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(bob)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("long-term user has higher tier than new user", () => {
    for (let i = 0; i < 10; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      bob
    );
    const aliceTier = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(alice)], alice);
    const bobTier = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier", [Cl.principal(bob)], bob);
    expect(Number((aliceTier.result as any).value ?? 0)).toBeGreaterThan(
      Number((bobTier.result as any).value ?? 0)
    );
  });

  it("tier bonus is higher for loyal user", () => {
    for (let i = 0; i < 10; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      bob
    );
    const aliceBonus = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier-bonus", [Cl.principal(alice)], alice);
    const bobBonus = simnet.callReadOnlyFn("yield-aggregator", "get-user-tier-bonus", [Cl.principal(bob)], bob);
    expect(Number((aliceBonus.result as any).value ?? 0)).toBeGreaterThan(
      Number((bobBonus.result as any).value ?? 0)
    );
  });
});
