import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("pagination unit test 15: creates entry", () => {
  it("creates entry for pagination module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-pagination",[Cl.uint(1500)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
