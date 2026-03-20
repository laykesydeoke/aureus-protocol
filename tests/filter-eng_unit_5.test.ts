import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("filter-eng unit test 5: creates entry", () => {
  it("creates entry for filter-eng module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-filter-eng",[Cl.uint(500)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
