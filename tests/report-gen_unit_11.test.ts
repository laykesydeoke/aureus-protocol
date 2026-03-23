import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("report-gen unit test 11: queries entry", () => {
  it("queries entry for report-gen module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-report-gen-count",[],deployer);expect(r.result).toBeDefined();
  });
});
