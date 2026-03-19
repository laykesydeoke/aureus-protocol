import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("purge-job unit test 19: handles edge case", () => {
  it("handles edge case for purge-job module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-purge-job",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1160));
  });
});
