import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("schema-mig unit test 15: creates entry", () => {
  it("creates entry for schema-mig module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-schema-mig",[Cl.uint(1500)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
