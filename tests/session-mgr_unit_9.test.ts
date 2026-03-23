import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("session-mgr unit test 9: handles edge case", () => {
  it("handles edge case for session-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-session-mgr",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(950));
  });
});
