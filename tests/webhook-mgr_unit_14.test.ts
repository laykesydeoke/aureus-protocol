import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("webhook-mgr unit test 14: handles edge case", () => {
  it("handles edge case for webhook-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-webhook-mgr",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(750));
  });
});
