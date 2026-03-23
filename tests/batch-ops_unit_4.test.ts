import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("batch-ops unit test 4: handles edge case", () => {
  it("handles edge case for batch-ops module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-batch-ops",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(620));
  });
});
