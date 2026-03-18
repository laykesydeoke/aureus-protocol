import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("span-collect unit test 5: creates entry", () => {
  it("creates entry for span-collect module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-span-collect",[Cl.uint(500)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
