import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("circuit-brk unit test 7: checks active status", () => {
  it("checks active status for circuit-brk module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-circuit-brk-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
