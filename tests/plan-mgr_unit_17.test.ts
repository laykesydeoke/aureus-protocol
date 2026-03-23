import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("plan-mgr unit test 17: checks active status", () => {
  it("checks active status for plan-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-plan-mgr-active",[Cl.uint(17)],deployer);expect(r.result).toBeBool(false);
  });
});
