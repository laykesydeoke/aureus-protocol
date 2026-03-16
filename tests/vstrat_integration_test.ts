import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
describe("vault strategy integration", () => {
  it("strategies integrate with yield aggregator", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")!;
    const params = simnet.callReadOnlyFn("yield-aggregator", "get-strategy-params", [], deployer);
    expect(params.result).not.toBeNone();
  });
});
