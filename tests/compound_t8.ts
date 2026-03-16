import { describe, it, expect } from "vitest";
describe("compound test 8", () => {
  it("test scenario 8", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-compound-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
