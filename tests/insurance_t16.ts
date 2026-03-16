import { describe, it, expect } from "vitest";
describe("insurance test 16", () => {
  it("test 16", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-insurance-reserve", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
