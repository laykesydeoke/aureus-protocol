import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("session-mgr unit test 1: queries entry", () => {
  it("queries entry for session-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-session-mgr-count",[],deployer);expect(r.result).toBeDefined();
  });
});
