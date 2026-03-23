import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("load-bal unit test 14: handles edge case", () => {
  it("handles edge case for load-bal module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-load-bal",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(780));
  });
});
