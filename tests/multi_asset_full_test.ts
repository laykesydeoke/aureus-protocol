import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("multi asset full", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("complete multi-asset lifecycle", () => {
    simnet.callPublicFn("yield-aggregator", "add-supported-asset", [Cl.standardPrincipal(alice)], deployer);
    const supported = simnet.callReadOnlyFn("yield-aggregator", "is-supported-asset", [Cl.standardPrincipal(alice)], deployer);
    const count = simnet.callReadOnlyFn("yield-aggregator", "get-asset-count", [], deployer);
    simnet.callPublicFn("yield-aggregator", "remove-supported-asset", [Cl.standardPrincipal(alice)], deployer);
    const afterRemove = simnet.callReadOnlyFn("yield-aggregator", "is-supported-asset", [Cl.standardPrincipal(alice)], deployer);
    expect(supported.result).toBeTrue();
    expect(count.result).not.toBeNone();
    expect(afterRemove.result).toBeFalse();
  });
});
