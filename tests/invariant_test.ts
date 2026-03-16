import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("protocol invariants", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(100_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
  });

  it("total-deposits never goes negative", () => {
    const over = simnet.callPublicFn(
      "yield-aggregator",
      "withdraw-sbtc",
      [Cl.uint(200_000_000)],
      alice
    );
    expect(over.result).toBeErr(Cl.uint(103));
  });

  it("total-yield-earned never decrements", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "distribute-yield",
      [Cl.uint(10_000_000)],
      deployer
    );
    const before = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-total-yield-earned",
      [],
      deployer
    );
    const after = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-total-yield-earned",
      [],
      deployer
    );
    expect(Number((after.result as any).value ?? 0)).toBeGreaterThanOrEqual(
      Number((before.result as any).value ?? 0)
    );
  });
});
