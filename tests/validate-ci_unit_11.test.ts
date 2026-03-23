import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("validate-ci unit test 11: queries entry", () => {
  it("queries entry for validate-ci module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-validate-ci-count",[],deployer);expect(r.result).toBeDefined();
  });
});
