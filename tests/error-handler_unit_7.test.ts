import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("error-handler unit test 7: checks active status", () => {
  it("checks active status for error-handler module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-error-handler-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
