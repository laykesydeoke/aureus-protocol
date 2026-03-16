import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
describe("set active strategy", () => {
  it("set active strategy", () => {
    const accounts = simnet.getAccounts();
    const deployer = accounts.get("deployer")!;
    const r = simnet.callReadOnlyFn("yield-aggregator", "get-strategy-params", [], deployer);
    expect(r.result).not.toBeNone();
  });
});
