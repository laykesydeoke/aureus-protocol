import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("seed-data unit test 1: queries entry", () => {
  it("queries entry for seed-data module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-seed-data-count",[],deployer);expect(r.result).toBeDefined();
  });
});
