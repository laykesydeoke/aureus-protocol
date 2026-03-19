import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("cleanup-svc unit test 4: handles edge case", () => {
  it("handles edge case for cleanup-svc module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-cleanup-svc",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1170));
  });
});
