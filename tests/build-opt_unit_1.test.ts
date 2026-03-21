import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("build-opt unit test 1: queries entry", () => {
  it("queries entry for build-opt module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-build-opt-count",[],deployer);expect(r.result).toBeDefined();
  });
});
