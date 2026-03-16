import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("first deposit tracking", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("first deposit block is none before deposit", () => {
    const block = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-first-deposit-block",
      [Cl.principal(alice)],
      alice
    );
    expect(block.result).toBeNone();
  });

  it("first deposit block is set after first deposit", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(50_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    const block = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-first-deposit-block",
      [Cl.principal(alice)],
      alice
    );
    expect(block.result).not.toBeNone();
  });

  it("first deposit block does not change on subsequent deposits", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(10_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    const first = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-first-deposit-block",
      [Cl.principal(alice)],
      alice
    );
    simnet.mineEmptyBlocks(3);
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(10_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    const second = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-first-deposit-block",
      [Cl.principal(alice)],
      alice
    );
    expect((first.result as any).value?.value).toEqual((second.result as any).value?.value);
  });
});
