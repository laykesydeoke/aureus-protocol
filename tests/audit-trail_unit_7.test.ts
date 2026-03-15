import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("audit-trail unit test 7: checks active status", () => {
  it("checks active status for audit-trail module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-audit-trail-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
