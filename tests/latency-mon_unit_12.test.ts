import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("latency-mon unit test 12: checks active status", () => {
  it("checks active status for latency-mon module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-latency-mon-active",[Cl.uint(12)],deployer);expect(r.result).toBeBool(false);
  });
});
