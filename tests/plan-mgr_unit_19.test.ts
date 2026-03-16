import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("plan-mgr unit test 19: handles edge case", () => {
  it("handles edge case for plan-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-plan-mgr",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(810));
  });
});
