import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("session-mgr unit test 20: creates entry", () => {
  it("creates entry for session-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-session-mgr",[Cl.uint(2000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
