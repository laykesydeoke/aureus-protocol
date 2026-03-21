import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("cdn-config unit test 20: creates entry", () => {
  it("creates entry for cdn-config module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-cdn-config",[Cl.uint(2000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
