import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;

describe("adapter pause controls", () => {
  beforeEach(() => {
    simnet.callPublicFn("protocol-adapter", "initialize-adapter", [], deployer);
  });

  it("owner can pause adapter", () => {
    const result = simnet.callPublicFn(
      "protocol-adapter",
      "set-adapter-pause",
      [Cl.bool(true)],
      deployer
    );
    expect(result.result).toBeOk(Cl.bool(true));
  });

  it("analytics reflects adapter pause", () => {
    simnet.callPublicFn(
      "protocol-adapter",
      "set-adapter-pause",
      [Cl.bool(true)],
      deployer
    );
    const analytics = simnet.callReadOnlyFn(
      "protocol-adapter",
      "get-adapter-analytics",
      [],
      deployer
    );
    const paused = (analytics.result as any).value?.data?.["is-paused"]?.value;
    expect(paused).toBe(true);
    simnet.callPublicFn("protocol-adapter", "set-adapter-pause", [Cl.bool(false)], deployer);
  });

  it("non-owner cannot pause adapter", () => {
    const result = simnet.callPublicFn(
      "protocol-adapter",
      "set-adapter-pause",
      [Cl.bool(true)],
      alice
    );
    expect(result.result).toBeErr(Cl.uint(100));
  });
});
