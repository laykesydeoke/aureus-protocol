import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("invoice-gen unit test 19: handles edge case", () => {
  it("handles edge case for invoice-gen module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-invoice-gen",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(860));
  });
});
