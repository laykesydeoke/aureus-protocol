import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("error-handler unit test 9: handles edge case", () => {
  it("handles edge case for error-handler module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-error-handler",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(660));
  });
});
