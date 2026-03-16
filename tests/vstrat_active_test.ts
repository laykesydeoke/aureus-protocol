import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
describe("active strategy set", () => {
  it("active strategy set", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-strategy-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
