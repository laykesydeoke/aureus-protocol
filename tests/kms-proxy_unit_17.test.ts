import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("kms-proxy unit test 17: checks active status", () => {
  it("checks active status for kms-proxy module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-kms-proxy-active",[Cl.uint(17)],deployer);expect(r.result).toBeBool(false);
  });
});
