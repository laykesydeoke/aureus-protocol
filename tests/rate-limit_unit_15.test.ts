import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("rate-limit unit test 15: creates entry", () => {
  it("creates entry for rate-limit module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-rate-limit",[Cl.uint(1500)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
