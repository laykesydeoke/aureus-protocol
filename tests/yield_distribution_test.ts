import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_2")!;

describe("yield distribution analytics", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(bob)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
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
  });

  it("total-yield-earned increases after distribute", () => {
    const before = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-total-yield-earned",
      [],
      deployer
    );
    simnet.callPublicFn(
      "yield-aggregator",
      "distribute-yield",
      [Cl.uint(30_000_000)],
      deployer
    );
    const after = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-total-yield-earned",
      [],
      deployer
    );
    expect(Number((after.result as any).value ?? 0)).toBeGreaterThan(
      Number((before.result as any).value ?? 0)
    );
  });

  it("user yield increases after distribution", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "distribute-yield",
      [Cl.uint(30_000_000)],
      deployer
    );
    const yield_ = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-yield",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((yield_.result as any).value ?? 0)).toBeGreaterThan(0);
  });
});
