import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("caching unit test 17: checks active status", () => {
  it("checks active status for caching module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-caching-active",[Cl.uint(17)],deployer);expect(r.result).toBeBool(false);
  });
});
