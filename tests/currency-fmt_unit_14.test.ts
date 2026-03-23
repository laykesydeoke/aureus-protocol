import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("currency-fmt unit test 14: handles edge case", () => {
  it("handles edge case for currency-fmt module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-currency-fmt",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1550));
  });
});
