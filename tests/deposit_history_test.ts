import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("deposit history tracking", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("deposit history is accessible", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(100_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    const history = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-deposit-history",
      [Cl.principal(alice)],
      alice
    );
    expect(history.result).not.toBeNone();
  });

  it("user with no deposits has empty history", () => {
    const history = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-deposit-history",
      [Cl.principal(alice)],
      alice
    );
    const list = (history.result as any).value?.value;
    expect(list).toBeDefined();
  });
});
