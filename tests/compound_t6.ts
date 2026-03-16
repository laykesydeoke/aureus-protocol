import { describe, it, expect } from "vitest";
describe("compound test 6", () => {
  it("test scenario 6", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-compound-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
