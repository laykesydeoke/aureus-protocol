import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("pool-conn unit test 9: handles edge case", () => {
  it("handles edge case for pool-conn module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-pool-conn",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(940));
  });
});
