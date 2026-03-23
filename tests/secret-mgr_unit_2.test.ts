import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("secret-mgr unit test 2: checks active status", () => {
  it("checks active status for secret-mgr module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-secret-mgr-active",[Cl.uint(2)],deployer);expect(r.result).toBeBool(false);
  });
});
