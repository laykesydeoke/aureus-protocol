import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("filter-eng unit test 16: queries entry", () => {
  it("queries entry for filter-eng module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-filter-eng-count",[],deployer);expect(r.result).toBeDefined();
  });
});
