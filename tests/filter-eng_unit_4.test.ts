import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("filter-eng unit test 4: handles edge case", () => {
  it("handles edge case for filter-eng module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-filter-eng",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1280));
  });
});
