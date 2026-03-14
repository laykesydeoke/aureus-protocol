import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("analytics unit test 10: creates entry", () => {
  it("creates entry for analytics module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-analytics",[Cl.uint(1000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
