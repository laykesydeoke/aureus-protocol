import { describe, it, expect } from "vitest";
describe("referral test 5", () => {
  it("test scenario 5", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-referral-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
