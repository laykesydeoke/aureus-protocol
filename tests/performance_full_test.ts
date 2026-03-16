import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("performance full", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("complete performance metrics lifecycle", () => {
    const metrics = simnet.callReadOnlyFn("yield-aggregator", "get-performance-metrics", [], alice);
    const uptime = simnet.callReadOnlyFn("yield-aggregator", "get-protocol-uptime", [], alice);
    const analytics = simnet.callReadOnlyFn("yield-aggregator", "get-yield-analytics", [], alice);
    const risk = simnet.callReadOnlyFn("yield-aggregator", "get-risk-params", [], alice);
    expect(metrics.result).not.toBeNone();
    expect(uptime.result).not.toBeNone();
    expect(analytics.result).not.toBeNone();
    expect(risk.result).not.toBeNone();
  });
});
