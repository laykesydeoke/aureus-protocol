import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("batch-ops unit test 10: creates entry", () => {
  it("creates entry for batch-ops module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-batch-ops",[Cl.uint(1000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
