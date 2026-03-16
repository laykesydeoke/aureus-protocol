import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("reporting full", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("complete reporting lifecycle", () => {
    const s1 = simnet.callPublicFn("yield-aggregator", "take-portfolio-snapshot", [], deployer);
    const s2 = simnet.callPublicFn("yield-aggregator", "take-portfolio-snapshot", [], alice);
    const snap0 = simnet.callReadOnlyFn("yield-aggregator", "get-snapshot", [Cl.uint(0)], alice);
    const report = simnet.callReadOnlyFn("yield-aggregator", "get-portfolio-report", [], alice);
    expect(s1.result).toBeOk(Cl.uint(0));
    expect(s2.result).toBeOk(Cl.uint(1));
    expect(snap0.result).not.toBeNone();
    expect(report.result).not.toBeNone();
  });
});
