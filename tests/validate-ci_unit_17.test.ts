import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("validate-ci unit test 17: checks active status", () => {
  it("checks active status for validate-ci module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-validate-ci-active",[Cl.uint(17)],deployer);expect(r.result).toBeBool(false);
  });
});
