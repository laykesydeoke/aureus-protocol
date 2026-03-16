import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("protocol rebalancing", () => {
  beforeEach(() => {
    simnet.callPublicFn("protocol-adapter", "initialize-adapter", [], deployer);
  });

  it("rebalance can be triggered by owner", () => {
    const result = simnet.callPublicFn(
      "protocol-adapter",
      "rebalance-protocols",
      [Cl.contractPrincipal(deployer, "mock-sbtc")],
      deployer
    );
    expect(result.result).toBeOk(Cl.bool(true));
  });

  it("non-owner cannot trigger rebalance", () => {
    const result = simnet.callPublicFn(
      "protocol-adapter",
      "rebalance-protocols",
      [Cl.contractPrincipal(deployer, "mock-sbtc")],
      alice
    );
    expect(result.result).toBeErr(Cl.uint(100));
  });

  it("active-protocol changes to optimal after rebalance", () => {
    simnet.callPublicFn(
      "protocol-adapter",
      "rebalance-protocols",
      [Cl.contractPrincipal(deployer, "mock-sbtc")],
      deployer
    );
    const active = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-active-protocol",
      [],
      deployer
    );
    const optimal = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-optimal-protocol",
      [],
      deployer
    );
    expect((active.result as any).value).toEqual((optimal.result as any).value);
  });
});
