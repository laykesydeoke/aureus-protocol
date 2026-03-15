import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("encrypt-mod unit test 14: handles edge case", () => {
  it("handles edge case for encrypt-mod module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-encrypt-mod",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(720));
  });
});
