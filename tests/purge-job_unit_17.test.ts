import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("purge-job unit test 17: checks active status", () => {
  it("checks active status for purge-job module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-purge-job-active",[Cl.uint(17)],deployer);expect(r.result).toBeBool(false);
  });
});
