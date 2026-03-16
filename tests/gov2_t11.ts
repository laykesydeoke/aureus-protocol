import { describe, it, expect } from "vitest";
describe("gov2 11", () => {
  it("test 11", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-gov2-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
