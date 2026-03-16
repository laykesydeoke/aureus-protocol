import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_2")!;

describe("multi tier test", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(bob)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("multi tier basic assertion", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(10_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    const count = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-deposit-count",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((count.result as any).value ?? 0)).toBeGreaterThan(0);
  });

  it("multi tier tier check", () => {
    for (let i = 0; i < 6; i++) {
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
});
