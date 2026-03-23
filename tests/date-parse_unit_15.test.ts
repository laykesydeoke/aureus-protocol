import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("date-parse unit test 15: creates entry", () => {
  it("creates entry for date-parse module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-date-parse",[Cl.uint(1500)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
