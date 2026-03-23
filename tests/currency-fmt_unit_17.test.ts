import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("currency-fmt unit test 17: checks active status", () => {
  it("checks active status for currency-fmt module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","is-currency-fmt-active",[Cl.uint(17)],deployer);expect(r.result).toBeBool(false);
  });
});
