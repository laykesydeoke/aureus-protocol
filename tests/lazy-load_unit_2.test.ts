import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("lazy-load unit test 2: checks active status", () => {
  it("checks active status for lazy-load module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-lazy-load-active",[Cl.uint(2)],deployer);expect(r.result).toBeBool(false);
  });
});
