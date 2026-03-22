import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("csp-header unit test 16: queries entry", () => {
  it("queries entry for csp-header module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-csp-header-count",[],deployer);expect(r.result).toBeDefined();
  });
});
