import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("cleanup-svc unit test 7: checks active status", () => {
  it("checks active status for cleanup-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-cleanup-svc-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
