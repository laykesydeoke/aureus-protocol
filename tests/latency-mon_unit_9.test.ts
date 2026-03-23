import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("latency-mon unit test 9: handles edge case", () => {
  it("handles edge case for latency-mon module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-latency-mon",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1040));
  });
});
