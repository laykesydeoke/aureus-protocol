import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("pool-conn unit test 10: creates entry", () => {
  it("creates entry for pool-conn module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-pool-conn",[Cl.uint(1000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
