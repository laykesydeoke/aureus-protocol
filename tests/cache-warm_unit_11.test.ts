import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("cache-warm unit test 11: queries entry", () => {
  it("queries entry for cache-warm module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-cache-warm-count",[],deployer);expect(r.result).toBeDefined();
  });
});
