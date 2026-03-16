import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("tier bonus calculations", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("tier 1 has 0 bonus", () => {
    const bonus = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-tier-bonus",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((bonus.result as any).value ?? 0)).toBe(0);
  });

  it("tier 2 has 50 bps bonus", () => {
    for (let i = 0; i < 5; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const bonus = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-tier-bonus",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((bonus.result as any).value ?? 0)).toBe(50);
  });

  it("tier 3 has 100 bps bonus", () => {
    for (let i = 0; i < 10; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const bonus = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-tier-bonus",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((bonus.result as any).value ?? 0)).toBe(100);
  });
});
