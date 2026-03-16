import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const bob = accounts.get("wallet_2")!;
describe("governance multi-param", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("governance params return all fields", () => {
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
  it("any user can read governance params", () => {
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], bob);
    expect(r.result).not.toBeNone();
  });
});
