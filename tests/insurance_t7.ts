import { describe, it, expect } from "vitest";
describe("insurance test 7", () => {
  it("test 7", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")\!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-insurance-reserve", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
