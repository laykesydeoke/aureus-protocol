import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("access-ctrl unit test 9: handles edge case", () => {
  it("handles edge case for access-ctrl module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-access-ctrl",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(600));
  });
});
