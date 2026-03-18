import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("metric-agg unit test 6: queries entry", () => {
  it("queries entry for metric-agg module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-metric-agg-count",[],deployer);expect(r.result).toBeDefined();
  });
});
