import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("load-bal unit test 6: queries entry", () => {
  it("queries entry for load-bal module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-load-bal-count",[],deployer);expect(r.result).toBeDefined();
  });
});
