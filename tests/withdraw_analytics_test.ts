import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("withdraw analytics", () => {
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

  it("total-deposits decreases after withdraw", () => {
    const before = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-total-deposits",
      [],
      alice
    );
    simnet.callPublicFn(
      "yield-aggregator",
      "withdraw-sbtc",
      [Cl.uint(50_000_000)],
      alice
    );
    const after = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-total-deposits",
      [],
      alice
    );
    expect(Number((after.result as any).value ?? 0)).toBeLessThan(
      Number((before.result as any).value ?? 0)
    );
  });

  it("user deposit decreases after partial withdraw", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "withdraw-sbtc",
      [Cl.uint(40_000_000)],
      alice
    );
    const dep = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-deposit",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((dep.result as any).value ?? 0)).toBe(60_000_000);
  });
});
