import { describe, it, expect } from "vitest";
describe("compound integration", () => {
  it("integrates with protocol", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-compound-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
