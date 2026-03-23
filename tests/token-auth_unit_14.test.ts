import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("token-auth unit test 14: handles edge case", () => {
  it("handles edge case for token-auth module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-token-auth",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(960));
  });
});
