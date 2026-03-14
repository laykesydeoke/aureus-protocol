import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("search-idx unit test 1: queries entry", () => {
  it("queries entry for search-idx module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-search-idx-count",[],deployer);expect(r.result).toBeDefined();
  });
});
