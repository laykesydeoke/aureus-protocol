import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("full yield aggregator flow", () => {
  it("deposit, distribute, withdraw full cycle", () => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
    simnet.callPublicFn(
      "yield-aggregator",
      "deposit-sbtc",
      [Cl.uint(100_000_000), Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    simnet.callPublicFn(
      "yield-aggregator",
      "distribute-yield",
      [Cl.uint(10_000_000)],
      deployer
    );
    const yield_ = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-user-yield",
      [Cl.principal(alice)],
      alice
    );
    const analytics = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-yield-analytics",
      [],
      deployer
    );
    expect(Number((yield_.result as any).value ?? 0)).toBeGreaterThan(0);
    expect(Number((analytics.result as any).value?.data?.["total-yield-earned"]?.value ?? 0)).toBeGreaterThan(0);
    const withdraw = simnet.callPublicFn(
      "yield-aggregator",
      "withdraw-sbtc",
      [Cl.uint(50_000_000)],
      alice
    );
    expect(withdraw.result).toBeOk(Cl.bool(true));
  });
});
