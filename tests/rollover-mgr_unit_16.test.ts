import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("rollover-mgr unit test 16: queries entry", () => {
  it("queries entry for rollover-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-rollover-mgr-count",[],deployer);expect(r.result).toBeDefined();
  });
});
