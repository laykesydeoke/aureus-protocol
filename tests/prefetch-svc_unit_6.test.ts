import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";
import { simnet } from "./setup";
const deployer = simnet.deployer;

describe("prefetch-svc unit test 6: queries entry", () => {
  it("queries entry for prefetch-svc module", () => {
    const r=simnet.callReadOnlyFn("yield-aggregator","get-prefetch-svc-count",[],deployer);expect(r.result).toBeDefined();
  });
});
