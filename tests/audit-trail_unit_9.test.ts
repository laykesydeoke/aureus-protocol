import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("audit-trail unit test 9: handles edge case", () => {
  it("handles edge case for audit-trail module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-audit-trail",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(700));
  });
});
