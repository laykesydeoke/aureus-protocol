import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("cert-mgr unit test 9: handles edge case", () => {
  it("handles edge case for cert-mgr module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-cert-mgr",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1440));
  });
});
