import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("deposit analytics", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("total-deposits increases after deposit", () => {
    const before = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-total-deposits",
      [],
      alice
    );
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(100_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    const after = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-total-deposits",
      [],
      alice
    );
    expect(Number((after.result as any).value ?? 0)).toBeGreaterThan(
      Number((before.result as any).value ?? 0)
    );
  });

  it("user deposit reflects in get-user-deposit", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(50_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    const dep = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-deposit",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((dep.result as any).value ?? 0)).toBeGreaterThan(0);
  });

  it("yield ratio is some after deposit", () => {
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
    expect(ratio.result).not.toBeNone();
  });
});
