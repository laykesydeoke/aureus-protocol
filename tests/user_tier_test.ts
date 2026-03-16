import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("user tier progression", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("new user starts at tier 1", () => {
    const tier = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-tier",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((tier.result as any).value ?? 0)).toBe(1);
  });

  it("user reaches tier 2 after 5 deposits", () => {
    for (let i = 0; i < 5; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const tier = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-tier",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((tier.result as any).value ?? 0)).toBe(2);
  });

  it("user reaches tier 3 after 10 deposits", () => {
    for (let i = 0; i < 10; i++) {
      simnet.callPublicFn(
        "yield-aggregator",
        "deposit-sbtc",
        [Cl.uint(5_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
        alice
      );
    }
    const tier = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-tier",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((tier.result as any).value ?? 0)).toBe(3);
  });
});
