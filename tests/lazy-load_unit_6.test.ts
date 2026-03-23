import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("lazy-load unit test 6: queries entry", () => {
  it("queries entry for lazy-load module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-lazy-load-count",[],deployer);expect(r.result).toBeDefined();
  });
});
