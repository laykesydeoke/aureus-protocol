import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("secret-mgr unit test 4: handles edge case", () => {
  it("handles edge case for secret-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-secret-mgr",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1410));
  });
});
