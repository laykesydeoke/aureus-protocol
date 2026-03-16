import { describe, it, expect, beforeEach } from "vitest";
import { Cl } from "@stacks/transactions";
const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const alice = accounts.get("wallet_1")!;
describe("emergency full", () => {
  beforeEach(() => {
    simnet.callPublicFn("yield-aggregator", "initialize", [], deployer);
  });
  it("complete emergency control lifecycle", () => {
    const before = simnet.callReadOnlyFn("yield-aggregator", "get-emergency-state", [], alice);
    simnet.callPublicFn("yield-aggregator", "emergency-pause-with-log", [], deployer);
    const duringPause = simnet.callReadOnlyFn("yield-aggregator", "is-emergency-paused", [], alice);
    simnet.callPublicFn("yield-aggregator", "emergency-resume", [], deployer);
    const afterResume = simnet.callReadOnlyFn("yield-aggregator", "is-emergency-paused", [], alice);
    expect(before.result).not.toBeNone();
    expect(duringPause.result).toBeTrue();
    expect(afterResume.result).toBeFalse();
  });
});
