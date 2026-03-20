import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("prefetch-svc unit test 9: handles edge case", () => {
  it("handles edge case for prefetch-svc module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-prefetch-svc",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1210));
  });
});
