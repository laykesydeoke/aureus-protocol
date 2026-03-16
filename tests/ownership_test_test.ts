import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("ownership test", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("governance params readable by all", () => {
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], alice);
    expect(r.result).not.toBeNone();
  });
  it("owner can update min deposit", () => {
    const r = simnet.callPublicFn("yield-aggregator", "set-min-deposit", [Cl.uint(2000)], deployer);
    expect(r.result).toBeOk(Cl.bool(true));
  });
});
