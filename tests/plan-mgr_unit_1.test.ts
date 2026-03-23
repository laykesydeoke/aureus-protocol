import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("plan-mgr unit test 1: queries entry", () => {
  it("queries entry for plan-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-plan-mgr-count",[],deployer);expect(r.result).toBeDefined();
  });
});
