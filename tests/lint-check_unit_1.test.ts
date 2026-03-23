import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("lint-check unit test 1: queries entry", () => {
  it("queries entry for lint-check module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-lint-check-count",[],deployer);expect(r.result).toBeDefined();
  });
});
