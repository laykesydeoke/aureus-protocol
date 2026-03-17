import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("retry-logic unit test 19: handles edge case", () => {
  it("handles edge case for retry-logic module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-retry-logic",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(910));
  });
});
