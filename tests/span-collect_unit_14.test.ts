import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("span-collect unit test 14: handles edge case", () => {
  it("handles edge case for span-collect module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-span-collect",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1030));
  });
});
