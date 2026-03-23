import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("pre-commit unit test 16: queries entry", () => {
  it("queries entry for pre-commit module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-pre-commit-count",[],deployer);expect(r.result).toBeDefined();
  });
});
