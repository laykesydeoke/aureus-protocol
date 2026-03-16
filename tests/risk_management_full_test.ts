import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("risk management full", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("complete risk management lifecycle", () => {
    simnet.callPublicFn("yield-aggregator", "set-risk-level", [Cl.uint(2)], deployer);
    simnet.callPublicFn("yield-aggregator", "set-max-single-deposit", [Cl.uint(500000000)], deployer);
    const params = simnet.callReadOnlyFn("yield-aggregator", "get-risk-params", [], alice);
    const gov = simnet.callReadOnlyFn("yield-aggregator", "get-governance-params", [], alice);
    expect(params.result).not.toBeNone();
    expect(gov.result).not.toBeNone();
  });
});
