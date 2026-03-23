import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("metric-agg unit test 20: creates entry", () => {
  it("creates entry for metric-agg module", () => {
    const{result}=simnet.callPublicFn("yield-aggregator","create-metric-agg",[Cl.uint(2000)],deployer);expect(result).toBeOk(expect.objectContaining({type:expect.any(Number)}));
  });
});
