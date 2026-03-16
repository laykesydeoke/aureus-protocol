import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("discount-calc unit test 6: queries entry", () => {
  it("queries entry for discount-calc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-discount-calc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
