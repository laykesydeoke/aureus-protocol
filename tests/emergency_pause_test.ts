import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("emergency pause controls", () => {
  beforeEach(() => {
    simnet.callPublicFn("mock-sbtc", "mint", [Cl.uint(1_000_000_000), Cl.principal(alice)], deployer);
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });

  it("owner can pause aggregator", () => {
    const result = simnet.callPublicFn(
      "yield-aggregator",
      "set-emergency-pause",
      [Cl.bool(true)],
      deployer
    );
    expect(result.result).toBeOk(Cl.bool(true));
  });

  it("analytics reflects pause state", () => {
    simnet.callPublicFn(
      "yield-aggregator",
      "set-emergency-pause",
      [Cl.bool(true)],
      deployer
    );
    const analytics = simnet.callReadOnlyFn(
      "yield-aggregator",
      "get-yield-analytics",
      [],
      deployer
    );
    const paused = (analytics.result as any).value?.data?.["is-paused"]?.value;
    expect(paused).toBe(true);
    simnet.callPublicFn(
      "yield-aggregator",
      "set-emergency-pause",
      [Cl.bool(false)],
      deployer
    );
  });

  it("non-owner cannot pause aggregator", () => {
    const result = simnet.callPublicFn(
      "yield-aggregator",
      "set-emergency-pause",
      [Cl.bool(true)],
      alice
    );
    expect(result.result).toBeErr(Cl.uint(100));
  });
});
