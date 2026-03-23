import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("rate-limit unit test 9: handles edge case", () => {
  it("handles edge case for rate-limit module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-rate-limit",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(610));
  });
});
