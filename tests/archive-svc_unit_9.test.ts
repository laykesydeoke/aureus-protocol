import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("archive-svc unit test 9: handles edge case", () => {
  it("handles edge case for archive-svc module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-archive-svc",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1150));
  });
});
