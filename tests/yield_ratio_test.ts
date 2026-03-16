import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_2")!;

describe("yield ratio calculations", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(bob)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("yield ratio is none before deposit", () => {
    const ratio = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-yield-ratio",
      [Cl.principal(alice)],
      alice
    );
    expect(ratio.result).toBeNone();
  });

  it("yield ratio is 10000 for sole depositor", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(100_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    const ratio = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-yield-ratio",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((ratio.result as any).value?.value ?? 0)).toBe(10000);
  });

  it("yield ratio is proportional for two depositors", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(100_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(300_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      bob
    );
    const aliceRatio = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-yield-ratio",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((aliceRatio.result as any).value?.value ?? 0)).toBe(2500);
  });
});
