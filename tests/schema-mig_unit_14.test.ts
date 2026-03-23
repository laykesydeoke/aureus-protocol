import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("schema-mig unit test 14: handles edge case", () => {
  it("handles edge case for schema-mig module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-schema-mig",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1100));
  });
});
