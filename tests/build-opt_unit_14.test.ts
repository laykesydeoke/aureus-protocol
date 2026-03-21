import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("build-opt unit test 14: handles edge case", () => {
  it("handles edge case for build-opt module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-build-opt",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1360));
  });
});
