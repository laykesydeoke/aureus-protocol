import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("schema-mig unit test 1: queries entry", () => {
  it("queries entry for schema-mig module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-schema-mig-count",[],deployer);expect(r.result).toBeDefined();
  });
});
