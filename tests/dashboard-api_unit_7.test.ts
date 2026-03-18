import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("dashboard-api unit test 7: checks active status", () => {
  it("checks active status for dashboard-api module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-dashboard-api-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
