import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("metric-agg unit test 4: handles edge case", () => {
  it("handles edge case for metric-agg module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-metric-agg",[Cl.uint(0)],deployer);expect(result).toBeErr(Cl.uint(1010));
  });
});
