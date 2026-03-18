import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("trace-sys unit test 7: checks active status", () => {
  it("checks active status for trace-sys module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-trace-sys-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
