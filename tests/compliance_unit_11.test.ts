import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("compliance unit test 11: queries entry", () => {
  it("queries entry for compliance module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-compliance-count",[],deployer);expect(r.result).toBeDefined();
  });
});
