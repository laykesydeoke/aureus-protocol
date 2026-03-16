import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("deposit count tracking", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("deposit count is 0 before any deposit", () => {
    const count = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-deposit-count",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((count.result as any).value ?? 0)).toBe(0);
  });

  it("deposit count increments after each deposit", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(10_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
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
    expect(Number((count.result as any).value ?? 0)).toBe(2);
  });
});
