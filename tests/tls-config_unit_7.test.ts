import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("tls-config unit test 7: checks active status", () => {
  it("checks active status for tls-config module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-tls-config-active",[Cl.uint(7)],deployer);expect(r.result).toBeBool(false);
  });
});
