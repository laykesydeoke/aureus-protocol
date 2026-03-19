import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("compact-svc unit test 19: handles edge case", () => {
  it("handles edge case for compact-svc module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-compact-svc",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1190));
  });
});
