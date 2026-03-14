import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("caching unit test 6: queries entry", () => {
  it("queries entry for caching module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-caching-count",[],deployer);expect(r.result).toBeDefined();
  });
});
