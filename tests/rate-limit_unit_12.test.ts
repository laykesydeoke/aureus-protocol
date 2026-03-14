import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("rate-limit unit test 12: checks active status", () => {
  it("checks active status for rate-limit module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-rate-limit-active",[Cl.uint(12)],deployer);expect(r.result).toBeBool(false);
  });
});
