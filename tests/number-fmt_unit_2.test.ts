import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("number-fmt unit test 2: checks active status", () => {
  it("checks active status for number-fmt module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-number-fmt-active",[Cl.uint(2)],deployer);expect(r.result).toBeBool(false);
  });
});
