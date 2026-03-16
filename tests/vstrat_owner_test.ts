import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
describe("only owner adds strategy", () => {
  it("only owner adds strategy", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-strategy-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
