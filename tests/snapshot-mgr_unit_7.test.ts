import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("snapshot-mgr unit test 7: checks active status", () => {
  it("checks active status for snapshot-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-snapshot-mgr-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
