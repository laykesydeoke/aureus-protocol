import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
describe("governance reset", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("min deposit readable after reset", () => {
    simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(2000)], deployer);
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-min-deposit", [], deployer);
    expect(r.result).not.toBeNone();
  });
  it("min deposit can be set to minimum value", () => {
    const r = simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(1)], deployer);
    expect(r.result).toBeOk(Cl.bool(true));
  });
});
