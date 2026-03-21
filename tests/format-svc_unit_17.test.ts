import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("format-svc unit test 17: checks active status", () => {
  it("checks active status for format-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-format-svc-active",[Cl.uint(17)],deployer);expect(r.result).toBeBool(false);
  });
});
