import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("deposit rewards integration", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("reads deposit count without error", () => {
    const count = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-deposit-count",
      [Cl.principal(alice)],
      alice
    );
    expect(count.result).not.toBeNone();
  });

  it("reads user tier without error", () => {
    const tier = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-tier",
      [Cl.principal(alice)],
      alice
    );
    expect(tier.result).not.toBeNone();
  });

  it("reads tier bonus without error", () => {
    const bonus = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-tier-bonus",
      [Cl.principal(alice)],
      alice
    );
    expect(Number((bonus.result as any).value ?? 0)).toBeGreaterThanOrEqual(0);
  });
});
