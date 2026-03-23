import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("timeout-mgr unit test 4: handles edge case", () => {
  it("handles edge case for timeout-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-timeout-mgr",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(930));
  });
});
