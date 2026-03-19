import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("archive-svc unit test 17: checks active status", () => {
  it("checks active status for archive-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-archive-svc-active",[Cl.uint(17)],deployer);expect(r.result).toBeBool(false);
  });
});
