import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("perm-gate unit test 11: queries entry", () => {
  it("queries entry for perm-gate module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-perm-gate-count",[],deployer);expect(r.result).toBeDefined();
  });
});
