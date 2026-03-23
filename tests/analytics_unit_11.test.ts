import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("analytics unit test 11: queries entry", () => {
  it("queries entry for analytics module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-analytics-count",[],deployer);expect(r.result).toBeDefined();
  });
});
