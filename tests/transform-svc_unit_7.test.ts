import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("transform-svc unit test 7: checks active status", () => {
  it("checks active status for transform-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-transform-svc-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
