import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("pagination unit test 1: queries entry", () => {
  it("queries entry for pagination module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-pagination-count",[],deployer);expect(r.result).toBeDefined();
  });
});
