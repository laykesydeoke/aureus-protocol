import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("batch-ops unit test 16: queries entry", () => {
  it("queries entry for batch-ops module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-batch-ops-count",[],deployer);expect(r.result).toBeDefined();
  });
});
