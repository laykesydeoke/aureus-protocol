import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("health-chk unit test 4: handles edge case", () => {
  it("handles edge case for health-chk module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-health-chk",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(770));
  });
});
