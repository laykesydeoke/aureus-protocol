import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_2")!;

describe("multi-user yield analytics", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(bob)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("two users can deposit independently", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(100_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(200_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      bob
    );
    const aliceDep = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(alice)], alice);
    const bobDep = simnet.callReadOnlyFn("yield-aggregator", "get-user-deposit", [Cl.principal(bob)], bob);
    expect(Number((aliceDep.result as any).value ?? 0)).toBe(100_000_000);
    expect(Number((bobDep.result as any).value ?? 0)).toBe(200_000_000);
  });

  it("total-deposits sums both users", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(100_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(200_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      bob
    );
    const total = simnet.callReadOnlyFn("yield-aggregator", "get-total-deposits", [], deployer);
    expect(Number((total.result as any).value ?? 0)).toBe(300_000_000);
  });
});
