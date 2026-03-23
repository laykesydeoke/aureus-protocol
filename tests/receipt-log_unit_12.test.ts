import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("receipt-log unit test 12: checks active status", () => {
  it("checks active status for receipt-log module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-receipt-log-active",[Cl.uint(12)],deployer);expect(r.result).toBeBool(false);
  });
});
