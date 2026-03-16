import { describe, it, expect } from "vitest";
describe("compound test 17", () => {
  it("test scenario 17", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-compound-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
