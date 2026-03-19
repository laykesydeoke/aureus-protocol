import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("schema-mig unit test 7: checks active status", () => {
  it("checks active status for schema-mig module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-schema-mig-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
