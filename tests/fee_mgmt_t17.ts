import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
describe("fee management test 17", () => {
  it("fee scenario 17", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-fee-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
