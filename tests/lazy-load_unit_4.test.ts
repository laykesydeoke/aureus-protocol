import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("lazy-load unit test 4: handles edge case", () => {
  it("handles edge case for lazy-load module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-lazy-load",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1230));
  });
});
