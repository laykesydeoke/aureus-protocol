import { describe, it, expect } from "vitest";
describe("referral test 16", () => {
  it("test scenario 16", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-referral-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
